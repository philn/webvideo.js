import { WVPlayer } from './player/player';
import { WVPlayStateKind } from './core/state';

let player: WVPlayer | undefined;

let movies: datatype[][] = [
  ['./assets/TearsOfSteel.mp4', '[Excerpt] “Tears of Steel” by Blender Foundation (CC BY 3.0)'],
  ['./assets/ElephantsDream.mp4', '[Excerpt] “Elephants Dream” by Blender Foundation (CC BY)'],
];

enum PlayBtnIcon {
  FONTAWESOME_PLAY = '&#xf04b;',
  FONTAWESOME_PAUSE = '&#xf04c;',
}

function showLoader(loaderElem: HTMLElement): void {
  loaderElem.style.display = '';
}

function hideLoader(loaderElem: HTMLElement): void {
  loaderElem.style.display = 'none';
}

function showPlayBtn(playBtnWrapperElem: HTMLElement): void {
  playBtnWrapperElem.style.display = '';
}

function hidePlayBtn(playBtnWrapperElem: HTMLElement): void {
  playBtnWrapperElem.style.display = 'none';
}

function autohidePlayBtn(enable: boolean, playBtnWrapperElem: HTMLElement): void {
  playBtnWrapperElem.style.opacity = enable ? '0' : '1';
}

function setPlayBtnIcon(icon: PlayBtnIcon, playBtnElem: HTMLElement): void {
  playBtnElem.innerHTML = icon;
}

window.addEventListener('beforeunload', (e) => {
  function blockingSleep(waitMs: number): void {
    const start = new Date().getTime();
    while (new Date().getTime() - start < waitMs) {}
  }

  if (player?.loadCalled()) {
    player?.unload();
    //    blockingSleep(1000);
  }

  e.preventDefault();
  e.returnValue = '';
});

window.addEventListener('load', async () => {
  const selectBtnElem = document.querySelector('select#video_select') as HTMLSelectElement;
  const playBtnWrapperElem = document.querySelector('#play_btn_wrapper') as HTMLElement;
  const loaderElem = document.querySelector('#loader_wrapper') as HTMLElement;
  const playBtnElem = document.querySelector('#play_btn') as HTMLElement;
  const playTitleElem = document.querySelector('#title_area h3') as HTMLElement;
  const skipElem = document.querySelector('#title_area') as HTMLElement;

  const videoCount = movies.length;
  let videoIndex = 0;

  const url = new URL(window.location.href);
  const params = url.searchParams;
  let enableAudio = true;
  if (params.get('disable-audio') !== null) {
    enableAudio = false;
    var meterElement = document.getElementById('peak-meter');
    meterElement.style.display = 'none';
  }

  player = new WVPlayer({
    canvasElem: document.querySelector('#monitor') as HTMLCanvasElement,
    enableAudio: enableAudio,
  });
  player.onEOS = async () => {
    videoIndex++;
    await advance();
  };

  setPlayBtnIcon(PlayBtnIcon.FONTAWESOME_PLAY, playBtnElem);

  playBtnElem.addEventListener('click', async () => {
    switch (player.playState()) {
      case WVPlayStateKind.PAUSED: {
        if (player.canPlay()) {
          await player.play();
          autohidePlayBtn(true, playBtnWrapperElem);
          setPlayBtnIcon(PlayBtnIcon.FONTAWESOME_PAUSE, playBtnElem);
        }
        break;
      }
      case WVPlayStateKind.PLAYING: {
        await player.pause();
        autohidePlayBtn(false, playBtnWrapperElem);
        setPlayBtnIcon(PlayBtnIcon.FONTAWESOME_PLAY, playBtnElem);
        break;
      }
      case WVPlayStateKind.STOPPED: {
        await advance();
      }
    }
  });

  skipElem.addEventListener('click', async () => {
    videoIndex++;
    await advance();
  });

  async function advance() {
    if (videoIndex >= videoCount) videoIndex = 0;
    const url = new URL(movies[videoIndex][0], location.origin).href;
    await player.setUrl(url, {
      onStart: async () => {
        hidePlayBtn(playBtnWrapperElem);
        showLoader(loaderElem);
      },
      onEnd: async () => {
        hideLoader(loaderElem);
        showPlayBtn(playBtnWrapperElem);
        autohidePlayBtn(false, playBtnWrapperElem);
        setPlayBtnIcon(PlayBtnIcon.FONTAWESOME_PLAY, playBtnElem);
      },
    });
    await player.play();
    autohidePlayBtn(true, playBtnWrapperElem);
    setPlayBtnIcon(PlayBtnIcon.FONTAWESOME_PAUSE, playBtnElem);
    playTitleElem.textContent = movies[videoIndex][1];
  }

  await advance();
});
