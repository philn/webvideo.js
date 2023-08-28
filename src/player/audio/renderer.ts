import { AUDIO_WORKLET_NAME, AUDIO_WORKLET_PATH } from '../../core/constants';
import { WVSharedState, serializeWVSharedState } from '../../core/state';
import { WVMediaStreamInfo } from '../../media/media';

const webAudioPeakMeter = require('web-audio-peak-meter');

export class WVAudioRenderer {
  #audioCtx: AudioContext;
  #workletNode?: AudioWorkletNode;
  #gainNode?: GainNode;
  #peakMeter?: WebAudioPeakMeter;

  constructor(audioStream: WVMediaStreamInfo) {
    let sampleRate = 44100;
    if (audioStream !== null) {
      sampleRate = audioStream.audio!.sampleRate;
    }
    this.#audioCtx = new AudioContext({
      sampleRate: sampleRate,
      latencyHint: 'playback',
    });
    this.#audioCtx.suspend();
  }

  async init(sharedState: WVSharedState, audioStream: WVMediaStreamInfo): Promise<MessagePort> {
    await this.#audioCtx.audioWorklet.addModule(AUDIO_WORKLET_PATH);
    let channelCount = 2;
    if (audioStream !== null) {
      channelCount = audioStream.audio!.nbChannels;
    }

    this.#workletNode = new AudioWorkletNode(this.#audioCtx, AUDIO_WORKLET_NAME, {
      processorOptions: { sharedState: serializeWVSharedState(sharedState) },
      outputChannelCount: [channelCount],
    });

    this.#gainNode = new GainNode(this.#audioCtx, { gain: 0.5 });
    this.#workletNode.connect(this.#gainNode).connect(this.#audioCtx.destination);

    if (audioStream !== null) {
      var meterElement = document.getElementById('peak-meter');
      const options = {
        vertical: true,
      };
      this.#peakMeter = new webAudioPeakMeter.WebAudioPeakMeter(
        this.#workletNode,
        meterElement,
        options
      );
    } else {
      this.#peakMeter = null;
    }
    return this.#workletNode.port;
  }

  async start(): Promise<void> {
    await this.#audioCtx.resume();
  }

  async pause(): Promise<void> {
    await this.#audioCtx.suspend();
  }

  async close(): Promise<void> {
    if (this.#peakMeter) {
      this.#peakMeter.cleanup();
    }
    this.#gainNode?.disconnect();
    this.#workletNode?.disconnect();
    this.#workletNode?.port.close();
    await this.#audioCtx.close();
  }

  currentTime(): number {
    return Math.max(this.#audioCtx.currentTime - this.#audioCtx.baseLatency, 0.0);
  }
}
