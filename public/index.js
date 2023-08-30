var we=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);var fe=(o,e,i)=>{if(!e.has(o))throw TypeError("Cannot "+i)};var t=(o,e,i)=>(fe(o,e,"read from private field"),i?i.call(o):e.get(o)),h=(o,e,i)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,i)},n=(o,e,i,r)=>(fe(o,e,"write to private field"),r?r.call(o,i):e.set(o,i),i);var be=we(ce=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});var _e={vertical:!1,borderSize:2,fontSize:9,backgroundColor:"black",tickColor:"#ddd",labelColor:"#ddd",gradient:["red 1%","#ff0 16%","lime 45%","#080 100%"],dbRangeMin:-48,dbRangeMax:0,dbTickSize:6,maskTransition:"0.1s",audioMeterStandard:"peak-sample",peakHoldDuration:0};function te(o){return 20*(e=10,i=o,Math.log(i)/Math.log(e));var e,i}function Be(o,e){let{dbRangeMin:i,dbRangeMax:r,dbTickSize:l,fontSize:a,borderSize:u,tickColor:m,vertical:f}=e,s=function(S,p,C){let me=[];for(let Q=Math.floor(S)+1;Q<=p;Q+=1)Q%C==0&&me.push(Q);return me}(i,r,l),d=document.createElement("div");return d.style.position="relative",f?(d.style.height=`calc(100% - ${1.5*a}px)`,d.style.width=2*a+"px",d.style.marginTop=1.5*a+"px"):(d.style.height=1.5*a+"px",d.style.width=`calc(100% - ${3*a}px)`,d.style.marginRight=3*a+"px"),o.appendChild(d),s.map(S=>{let p=document.createElement("div");d.appendChild(p),p.style.position="absolute",p.style.color=m,p.style.fontSize=`${a}px`,p.textContent=S.toString();let C=(r-S)/(r-i)*100;return f?(p.style.top=`calc(${C}% - ${a/2}px)`,p.style.right=`${u}px`,p.style.textAlign="right"):(p.style.right=`${C}%`,p.style.transform="translateX(50%)"),p})}ce.WebAudioPeakMeter=class{constructor(o,e,i={}){this.srcNode=o,this.config=Object.assign(Object.assign({},_e),i),this.channelCount=o.channelCount,this.tempPeaks=new Array(this.channelCount).fill(0),this.heldPeaks=new Array(this.channelCount).fill(0),this.peakHoldTimeouts=new Array(this.channelCount).fill(0),e&&(this.parent=function(r,l){let{backgroundColor:a,borderSize:u,vertical:m}=l,f=document.createElement("div");return f.style.backgroundColor=a,f.style.boxSizing="border-box",f.style.height="100%",f.style.padding=`${u}px`,m&&(f.style.display="flex",f.style.flexDirection="row-reverse"),r.appendChild(f),f}(e,this.config),this.channelElements=function(r,l,a){let{fontSize:u,vertical:m,borderSize:f}=l,s=document.createElement("div");s.style.display="flex",s.style.justifyContent="space-between",m?(s.style.height="100%",s.style.width=`calc(100% - ${2*u}px)`):(s.style.height=`calc(100% - ${1.5*u}px)`,s.style.width="100%",s.style.flexDirection="column"),r.appendChild(s);let d=(a-1)*f;return Array.from(Array(a).keys()).map(()=>{let S=document.createElement("div");return m?(S.style.height="100%",S.style.width=`calc((100% - ${d}px) / ${a})`):(S.style.display="flex",S.style.height=`calc((100% - ${d}px) / ${a})`,S.style.width="100%",S.style.flexDirection="row-reverse"),s.appendChild(S),S})}(this.parent,this.config,this.channelCount),this.peakLabels=function(r,l){let{labelColor:a,fontSize:u,vertical:m}=l;return r.map(f=>{let s=document.createElement("div");return s.style.color=a,s.style.fontSize=`${u}px`,s.textContent="-\u221E",m?(s.style.height=1.5*u+"px",s.style.width="100%",s.style.textAlign="center"):(s.style.width=3*u+"px",s.style.display="flex",s.style.justifyContent="center",s.style.alignItems="center"),f.appendChild(s),s})}(this.channelElements,this.config),this.bars=function(r,l){let{gradient:a,vertical:u,fontSize:m,maskTransition:f}=l;return r.map(s=>{let d=document.createElement("div");return d.style.transition=`clip-path ${f}`,u?(d.style.height=`calc(100% - ${1.5*m}px)`,d.style.width="100%",d.style.backgroundImage=`linear-gradient(to bottom, ${a.join(", ")})`):(d.style.height="100%",d.style.width=`calc(100% - ${3*m}px)`,d.style.backgroundImage=`linear-gradient(to left, ${a.join(", ")})`),s.appendChild(d),d})}(this.channelElements,this.config),this.ticks=Be(this.parent,this.config),this.parent.addEventListener("click",this.clearPeaks.bind(this)),this.paintMeter()),this.initNode()}async initNode(){let{audioMeterStandard:o}=this.config;try{this.node=new AudioWorkletNode(this.srcNode.context,`${o}-processor`,{parameterData:{}})}catch(e){let i=new Blob([o==="true-peak"?'function s(s,t,e){const o=[];for(let r=0;r<e;r+=1){let i=0,n=0;for(let o=r;o<t.length;o+=e)n+=t[o]*s[s.length-1-i],i+=1;o.push(n)}return o}class t extends AudioWorkletProcessor{constructor(){super(),this.numCoefficients=33,this.sampleRate=sampleRate,this.upsampleFactor=this.sampleRate>8e4?2:4,this.lpfCoefficients=function(s,t){const e=[],o=1/(4*t),r=1-Math.ceil(s/2),i=Math.floor(s/2);for(let n=r;n<=i;n++){const r=.54+.46*Math.cos(2*Math.PI*n/s);let i=0;i=0==n?2*o:Math.sin(2*Math.PI*o*n)/(Math.PI*n),i=r*i*t,e.push(i)}return e}(this.numCoefficients,this.upsampleFactor),this.lpfBuffers=[],this.port.postMessage({type:"message",message:`true peak inited? ${this.sampleRate}`}),this.processCount=0}process(t){const e=t[0];if(e.length>this.lpfBuffers.length)for(let s=1;s<=e.length;s+=1)s>this.lpfBuffers.length&&this.lpfBuffers.push(new Array(this.numCoefficients).fill(0));const o=function(t,e,o,r){return t.map(((t,i)=>{const n=e[i];let h=0;for(let e=0;e<t.length;e++){const i=t[e];n.push(i),n.shift();const a=s(n,o,r);for(let s=0;s<a.length;s++){const t=Math.abs(a[s]);t>h&&(h=t)}}return h}))}(e,this.lpfBuffers,this.lpfCoefficients,this.upsampleFactor);return this.port.postMessage({type:"peaks",peaks:o}),this.processCount%100==0&&this.port.postMessage({type:"message",message:this.lpfBuffers}),this.processCount+=1,!0}}try{registerProcessor("true-peak-processor",t)}catch(s){console.info("Failed to register true-peak-processor. This probably means it was already registered.")}\n':`class e extends AudioWorkletProcessor{process(e){const s=function(e){return e.map((e=>{let s=0;for(let r=0;r<e.length;r++){const t=Math.abs(e[r]);t>s&&(s=t)}return s}))}(e[0]);return this.port.postMessage({type:"peaks",peaks:s}),!0}}try{registerProcessor("peak-sample-processor",e)}catch(e){console.info("Failed to register peak-sample-processor. This probably means it was already registered.")}
`],{type:"application/javascript"}),r=URL.createObjectURL(i);await this.srcNode.context.audioWorklet.addModule(r),this.node=new AudioWorkletNode(this.srcNode.context,`${o}-processor`,{parameterData:{}})}this.node.port.onmessage=e=>this.handleNodePortMessage(e),this.srcNode.connect(this.node).connect(this.srcNode.context.destination)}handleNodePortMessage(o){if(o.data.type==="message"&&console.log(o.data.message),o.data.type==="peaks"){let{peaks:e}=o.data;for(let i=0;i<this.tempPeaks.length;i+=1)e.length>i?this.tempPeaks[i]=e[i]:this.tempPeaks[i]=0;e.length<this.channelCount&&this.tempPeaks.fill(0,e.length);for(let i=0;i<e.length;i+=1)e[i]>this.heldPeaks[i]&&(this.heldPeaks[i]=e[i],this.peakHoldTimeouts[i]&&clearTimeout(this.peakHoldTimeouts[i]),this.config.peakHoldDuration&&(this.peakHoldTimeouts[i]=window.setTimeout(()=>{this.clearPeak(i)},this.config.peakHoldDuration)))}}paintMeter(){let{dbRangeMin:o,dbRangeMax:e,vertical:i}=this.config;this.bars&&this.bars.forEach((r,l)=>{let a=function(u,m,f,s){let d=Math.floor(100*(f-u)/(f-m));return d>100&&(d=100),d<0&&(d=0),s?`inset(${d}% 0 0)`:`inset(0 ${d}% 0 0)`}(te(this.tempPeaks[l]),o,e,i);r.style.clipPath=a}),this.peakLabels&&this.peakLabels.forEach((r,l)=>{if(this.heldPeaks[l]===0)r.textContent="-\u221E";else{let a=te(this.heldPeaks[l]);r.textContent=a.toFixed(1)}}),this.animationRequestId=window.requestAnimationFrame(this.paintMeter.bind(this))}clearPeak(o){this.heldPeaks[o]=this.tempPeaks[o]}clearPeaks(){for(let o=0;o<this.heldPeaks.length;o+=1)this.clearPeak(o)}getPeaks(){return{current:this.tempPeaks,maxes:this.heldPeaks,currentDB:this.tempPeaks.map(te),maxesDB:this.heldPeaks.map(te)}}cleanup(){this.node&&this.node.disconnect(),this.parent&&(this.parent.removeEventListener("click",this.clearPeaks.bind(this)),this.animationRequestId!==void 0&&window.cancelAnimationFrame(this.animationRequestId),this.parent.remove())}}});function L(o){return{videoUrl:o.videoUrl,loglevel:o.loglevel,playState:o.playState.buf(),videoBufferFull:o.videoBufferFull.buf(),audioBufferFull:o.audioBufferFull.buf(),videoDecoderShouldBeDead:o.videoDecoderShouldBeDead.buf(),audioDecoderShouldBeDead:o.audioDecoderShouldBeDead.buf()}}var y;(function(a){a[a.STOPPED=-1]="STOPPED",a[a.PLAYING=0]="PLAYING",a[a.PAUSED=1]="PAUSED",a[a.BUFFERING=2]="BUFFERING",a[a.SEEKING=3]="SEEKING"})(y||(y={}));var D,se=class{constructor(e){h(this,D,void 0);let i=new SharedArrayBuffer(4);n(this,D,new Int32Array(i)),t(this,D)[0]=e}static fromBuffer(e){let i=-1,r=new se(i);return n(r,D,e),r}load(){return Atomics.load(t(this,D),0)}store(e){Atomics.store(t(this,D),0,e),Atomics.notify(t(this,D),0)}buf(){return t(this,D)}},ae=se;D=new WeakMap;var w,U,j,M=class{constructor(e){h(this,w,void 0);let i=new SharedArrayBuffer(4);n(this,w,new Int32Array(i)),t(this,w)[0]=e?t(M,U):t(M,j)}static fromBuffer(e){let i=!1,r=new M(i);return n(r,w,e),r}load(){return Atomics.load(t(this,w),0)===t(M,U)}store(e){Atomics.store(t(this,w),0,e?t(M,U):t(M,j)),Atomics.notify(t(this,w),0)}buf(){return t(this,w)}sab(){return t(this,w).buffer}},T=M;w=new WeakMap,U=new WeakMap,j=new WeakMap,h(T,U,1),h(T,j,0);var pe="webvideo-audio-worklet",ye="./player/audio/rendererWorker/worker.js",ge="webvideo-audio-decoder-worker",Se="./player/audio/decoderWorker/worker.js",Ee="webvideo-video-decoder-worker",ve="./player/video/decoderWorker/worker.js";var g;(function(a){a[a.TRACE=0]="TRACE",a[a.DEBUG=1]="DEBUG",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR"})(g||(g={}));var V;(function(s){s.BLACK="[30m",s.RED="[31m",s.GREEN="[32m",s.YELLOW="[33m",s.BLUE="[34m",s.MAGENTA="[35m",s.CYAN="[36m",s.WHITE="[37m",s.NONE=""})(V||(V={}));function Pe(o,e){if(e===V.NONE)return o;{let i="[0m";return e+o+i}}function De(o){return o?`[${o}]`:""}var Ae={loglevel:3};function ke(o){typeof self!="undefined"&&(self.__wv_global_loglevel=o),Ae.loglevel=o}function Re(){return typeof self!="undefined"?self.__wv_global_loglevel:Ae.loglevel}function X(o,e,i){if(o<Re())return;let r=console.log,l=V.NONE;switch(o){case 0:{r=console.log,l=V.WHITE;break}case 1:{r=console.debug,l=V.CYAN;break}case 2:{r=console.info,l=V.GREEN;break}case 3:{r=console.warn;break}case 4:{r=console.error;break}}r(Pe([De(i),e].filter(a=>a).join(" "),l))}function We(o,e){X(0,o,e)}function xe(o,e){X(1,o,e)}function Te(o,e){X(2,o,e)}function Me(o,e){X(3,o,e)}function Fe(o,e){X(4,o,e)}var H={setLevel:ke,trace:We,debug:xe,info:Te,warn:Me,error:Fe};var k,E,$,ne=class{constructor(e){h(this,k,void 0);h(this,E,[]);h(this,$,void 0);n(this,k,new Worker(ve,{type:"module",name:Ee})),n(this,$,e.maxVideoFrameLength)}init(e){return new Promise(i=>{t(this,k).onmessage=r=>{switch(r.data.msg){case"VideoDecoder_sendVideoStreamInfo":{i(r.data.videoStream);break}case"VideoDecoder_sendVideoFrame":{this.push(e,r.data.frame);break}}},t(this,k).postMessage({msg:"Main_requestVideoDecoderStart",sharedState:L(e)})})}async uninit(e){return new Promise(i=>{for(t(this,k).onmessage=r=>{switch(r.data.msg){case"VideoDecoder_notifyClosed":{t(this,k).terminate(),i();break}}};t(this,E).length>0;)this.pop(e);e.videoDecoderShouldBeDead.store(!0),t(this,k).postMessage({msg:"Main_requestVideoDecoderClose"})})}start(){t(this,k).postMessage({msg:"Main_requestVideoDecoderDecode"})}dequeue(e,i){for(;t(this,E).length>0;){if(!t(this,E)[0].timestamp){this.pop(e);continue}let r=t(this,E)[0].timestamp-i*1e6;if(r<-.1*1e6){H.trace("chooseFrame(): frame dropped","WVVideoDecoderWorkerFront"),this.pop(e);continue}else return r>.1*1e6?(H.trace("chooseFrame(): frame too fast","WVVideoDecoderWorkerFront"),null):t(this,E)[0]}return null}front(){return t(this,E).length>0?t(this,E)[0]:null}push(e,i){t(this,E).push(i),t(this,E).length>t(this,$)&&e.videoBufferFull.store(!0)}pop(e){let i=t(this,E).shift();i&&(i.close(),t(this,E).length<t(this,$)&&e.videoBufferFull.store(!1))}};k=new WeakMap,E=new WeakMap,$=new WeakMap;var R,le=class{constructor(){h(this,R,void 0);n(this,R,new Worker(Se,{type:"module",name:ge}))}init(e){return new Promise(i=>{t(this,R).onmessage=r=>{switch(r.data.msg){case"AudioDecoder_sendAudioStreamInfo":{i(r.data.audioStream);break}}},t(this,R).postMessage({msg:"Main_requestAudioDecoderStart",sharedState:L(e)})})}async uninit(e){return new Promise(i=>{t(this,R).onmessage=r=>{switch(r.data.msg){case"AudioDecoder_notifyClosed":{t(this,R).terminate(),i();break}}},e.audioDecoderShouldBeDead.store(!0),e.audioBufferFull.store(!1),t(this,R).postMessage({msg:"Main_requestAudioDecoderClose"})})}start(e){t(this,R).postMessage({msg:"Main_requestAudioDecoderDecode"},[e])}};R=new WeakMap;var z,G,ee=class{constructor(e,i){h(this,z,null);h(this,G,null);n(this,z,i);let r=n(this,G,i.getContext(e)),l=r.createShader(r.VERTEX_SHADER);if(r.shaderSource(l,ee.vertexShaderSource),r.compileShader(l),!r.getShaderParameter(l,r.COMPILE_STATUS))throw r.getShaderInfoLog(l);let a=r.createShader(r.FRAGMENT_SHADER);if(r.shaderSource(a,ee.fragmentShaderSource),r.compileShader(a),!r.getShaderParameter(a,r.COMPILE_STATUS))throw r.getShaderInfoLog(a);let u=r.createProgram();if(r.attachShader(u,l),r.attachShader(u,a),r.linkProgram(u),!r.getProgramParameter(u,r.LINK_STATUS))throw r.getProgramInfoLog(u);r.useProgram(u);let m=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,m),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),r.STATIC_DRAW);let f=r.getAttribLocation(u,"xy");r.vertexAttribPointer(f,2,r.FLOAT,!1,0,0),r.enableVertexAttribArray(f);let s=r.createTexture();r.bindTexture(r.TEXTURE_2D,s),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}draw(e){t(this,z).width=e.displayWidth,t(this,z).height=e.displayHeight;let i=t(this,G);i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,e),e.close(),this.clear(),i.drawArrays(i.TRIANGLE_FAN,0,4)}clear(){let e=t(this,G);e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.clearColor(1,0,0,1),e.clear(e.COLOR_BUFFER_BIT)}},Z=ee;z=new WeakMap,G=new WeakMap,Z.vertexShaderSource=`
    attribute vec2 xy;

    varying highp vec2 uv;

    void main(void) {
      gl_Position = vec4(xy, 0.0, 1.0);
      // Map vertex coordinates (-1 to +1) to UV coordinates (0 to 1).
      // UV coordinates are Y-flipped relative to vertex coordinates.
      uv = vec2((1.0 + xy.x) / 2.0, (1.0 - xy.y) / 2.0);
    }
  `,Z.fragmentShaderSource=`
    varying highp vec2 uv;

    uniform sampler2D texture;

    void main(void) {
      gl_FragColor = texture2D(texture, uv);
    }
  `;var q,de=class{constructor(e,i){h(this,q,void 0);n(this,q,new Z("webgl",e))}draw(e){t(this,q).draw(e)}clear(){t(this,q).clear()}};q=new WeakMap;var Ve=be(),v,x,Y,I,he=class{constructor(e){h(this,v,void 0);h(this,x,void 0);h(this,Y,void 0);h(this,I,void 0);let i=44100;e!==null&&(i=e.audio.sampleRate),n(this,v,new AudioContext({sampleRate:i,latencyHint:"playback"})),t(this,v).suspend()}async init(e,i){await t(this,v).audioWorklet.addModule(ye);let r=2;if(i!==null&&(r=i.audio.nbChannels),n(this,x,new AudioWorkletNode(t(this,v),pe,{processorOptions:{sharedState:L(e)},outputChannelCount:[r]})),n(this,Y,new GainNode(t(this,v),{gain:.5})),t(this,x).connect(t(this,Y)).connect(t(this,v).destination),i!==null){var l=document.getElementById("peak-meter");let a={vertical:!0};n(this,I,new Ve.WebAudioPeakMeter(t(this,x),l,a))}else n(this,I,null);return t(this,x).port}async start(){await t(this,v).resume()}async pause(){await t(this,v).suspend()}async close(){t(this,I)&&t(this,I).cleanup(),t(this,Y)?.disconnect(),t(this,x)?.disconnect(),t(this,x)?.port.close(),await t(this,v).close()}currentTime(){return Math.max(t(this,v).currentTime-t(this,v).baseLatency,0)}};v=new WeakMap,x=new WeakMap,Y=new WeakMap,I=new WeakMap;var K,c,F,A,P,ie,_,b,O,B,re=class{constructor(e){h(this,K,void 0);h(this,c,void 0);h(this,F,void 0);h(this,A,void 0);h(this,P,void 0);h(this,ie,10);h(this,_,void 0);h(this,b,void 0);h(this,O,void 0);h(this,B,!1);n(this,K,e),n(this,c,{videoUrl:e.videoUrl,loglevel:e.loglevel??g.WARN,playState:new ae(y.STOPPED),audioBufferFull:new T(!1),videoBufferFull:new T(!1),videoDecoderShouldBeDead:new T(!1),audioDecoderShouldBeDead:new T(!1),enableAudio:e.enableAudio}),H.setLevel(t(this,c).loglevel)}async setUrl(e,i){return await this.unload(),t(this,c).videoUrl=e,this.load(i)}async load(e){if(t(this,B))throw Error("load() is already called");n(this,B,!0),t(this,c).videoDecoderShouldBeDead.store(!1),t(this,c).audioDecoderShouldBeDead.store(!1),n(this,P,new ne({maxVideoFrameLength:t(this,ie)})),t(this,c).enableAudio&&n(this,_,new le),t(this,c).playState.store(y.BUFFERING),await e?.onStart?.();{n(this,b,await t(this,P).init(t(this,c))),t(this,c).enableAudio?n(this,O,await t(this,_).init(t(this,c))):n(this,O,null),n(this,F,new de(t(this,K).canvasElem,t(this,b))),n(this,A,new he(t(this,O)));let i=await t(this,A).init(t(this,c),t(this,O));t(this,P).start(),t(this,c).enableAudio&&t(this,_).start(i),await new Promise(l=>{let a=t(this,c);requestAnimationFrame(function u(){if(a.playState.load()!==y.BUFFERING)return l(0);let m=a.videoBufferFull.load();if(a.enableAudio&&(m=m&&a.audioBufferFull.load()),m)return l(0);requestAnimationFrame(u)})});let r=t(this,P).front();r&&t(this,F).draw(r)}await e?.onEnd?.(),t(this,c).playState.store(y.PAUSED)}async unload(e){!t(this,B)||(n(this,B,!1),t(this,c).playState.store(y.STOPPED),await e?.onStart?.(),t(this,F)?.clear(),await t(this,A)?.close(),await t(this,P).uninit(t(this,c)),t(this,c).enableAudio&&await t(this,_).uninit(t(this,c)),t(this,c).videoBufferFull.store(!1),t(this,c).audioBufferFull.store(!1),n(this,P,null),n(this,_,null),await e?.onEnd?.())}loadCalled(){return t(this,B)}playState(){return t(this,c).playState.load()}canPlay(){return t(this,c).enableAudio?t(this,c).audioBufferFull.load():!0}async play(){if(!t(this,A))throw Error("WVAudioRenderer is undefined");t(this,c).playState.store(y.PLAYING),await t(this,A).start(),this.mainLoop()}async pause(){if(!t(this,A))throw Error("WVAudioRenderer is undefined");t(this,c).playState.store(y.PAUSED),await t(this,A).pause()}async mainLoop(){if(t(this,c).playState.load()!==y.PLAYING)return;let e=!!t(this,F);if(t(this,c).enableAudio&&(e=e&&!!t(this,A)),!e){H.error("Renderers are not initialized yet","WVPlayer");return}let i=t(this,A).currentTime(),r=t(this,P).dequeue(t(this,c),i);r&&(t(this,F).draw(r),t(this,P).pop(t(this,c))),i>=this.length()&&(await this.pause(),await this.onEOS()),requestAnimationFrame(this.mainLoop.bind(this))}duration(){return t(this,b).duration}timescale(){return t(this,b).timescale}length(){return t(this,b).duration/t(this,b).timescale}lengthMS(){return t(this,b).duration/t(this,b).timescale*1e3}bitrate(){return t(this,b).bitrate}};K=new WeakMap,c=new WeakMap,F=new WeakMap,A=new WeakMap,P=new WeakMap,ie=new WeakMap,_=new WeakMap,b=new WeakMap,O=new WeakMap,B=new WeakMap,re.LogLevel=g;var W,ue=[["./assets/TearsOfSteel.mp4","[Excerpt] \u201CTears of Steel\u201D by Blender Foundation (CC BY 3.0)"],["./assets/ElephantsDream.mp4","[Excerpt] \u201CElephants Dream\u201D by Blender Foundation (CC BY)"]],N;(function(i){i.FONTAWESOME_PLAY="&#xf04b;",i.FONTAWESOME_PAUSE="&#xf04c;"})(N||(N={}));function Ie(o){o.style.display=""}function Oe(o){o.style.display="none"}function Ne(o){o.style.display=""}function Ce(o){o.style.display="none"}function oe(o,e){e.style.opacity=o?"0":"1"}function J(o,e){e.innerHTML=o}window.addEventListener("beforeunload",o=>{function e(i){let r=new Date().getTime();for(;new Date().getTime()-r<i;);}W?.loadCalled()&&W?.unload(),o.preventDefault(),o.returnValue=""});window.addEventListener("load",async()=>{let o=document.querySelector("select#video_select"),e=document.querySelector("#play_btn_wrapper"),i=document.querySelector("#loader_wrapper"),r=document.querySelector("#play_btn"),l=document.querySelector("#title_area h3"),a=document.querySelector("#title_area"),u=ue.length,m=0,s=new URL(window.location.href).searchParams,d=!0;if(s.get("disable-audio")!==null){d=!1;var S=document.getElementById("peak-meter");S.style.display="none"}W=new re({canvasElem:document.querySelector("#monitor"),enableAudio:d}),W.onEOS=async()=>{m++,await p()},J(N.FONTAWESOME_PLAY,r),r.addEventListener("click",async()=>{switch(W.playState()){case y.PAUSED:{W.canPlay()&&(await W.play(),oe(!0,e),J(N.FONTAWESOME_PAUSE,r));break}case y.PLAYING:{await W.pause(),oe(!1,e),J(N.FONTAWESOME_PLAY,r);break}case y.STOPPED:await p()}}),a.addEventListener("click",async()=>{m++,await p()});async function p(){m>=u&&(m=0);let C=new URL(ue[m][0],location.origin).href;await W.setUrl(C,{onStart:async()=>{Ce(e),Ie(i)},onEnd:async()=>{Oe(i),Ne(e),oe(!1,e),J(N.FONTAWESOME_PLAY,r)}}),await W.play(),oe(!0,e),J(N.FONTAWESOME_PAUSE,r),l.textContent=ue[m][1]}await p()});
