(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{132:function(t,e,i){"use strict";function s(t,e){return e-Math.floor(e/t)*t}i.d(e,"a",(function(){return s}))},197:function(t,e,i){"use strict";i.r(e);var s=i(318),n=i.n(s),r=i(6),a=i(33);function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class o{constructor(t){this.worker=t,h(this,"requestStates",new Map),h(this,"requestStatesByCallback",new Map),this.subscribe()}request(t){const{worker:e,requestStates:i,requestStatesByCallback:s}=this,n=Object(a.a)(i),r={type:"callMethod",messageId:n,...t},h={messageId:n},o=new Promise((t,e)=>{Object.assign(h,{resolve:t,reject:e})});if("function"==typeof r.args[r.args.length-1]){const t=r.args.pop();h.callback=t,s.set(t,h)}return i.set(n,h),o.catch(()=>{}).finally(()=>{i.delete(n),h.callback&&s.delete(h.callback)}),e.postMessage(r),o}cancelCallback(t){t.isCanceled=!0;const{messageId:e}=this.requestStatesByCallback.get(t)||{};e&&this.worker.postMessage({type:"cancelProgress",messageId:e})}subscribe(){const{worker:t,requestStates:e}=this;t.addEventListener("message",({data:t})=>{if("methodResponse"===t.type){const i=e.get(t.messageId);i&&(t.error?i.reject(t.error):i.resolve(t.response))}else if("methodCallback"===t.type){const i=e.get(t.messageId);i&&i.callback&&i.callback(...t.callbackArgs)}else if("unhandledError"===t.type)throw t.error})}}var d=i(62),c=i(132);function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const m=r.l?.75:1,l=.75,p=r.j?2:4,g=new Array(4).fill(void 0).map(()=>new o(new n.a));let k=-1;e.default=class{constructor(t,e,i,s={},n){this.id=t,this.container=e,this.animationData=i,this.params=s,this.onLoad=n,u(this,"imgSize",void 0),u(this,"key",void 0),u(this,"msPerFrame",void 0),u(this,"reduceFactor",void 0),u(this,"cacheModulo",void 0),u(this,"chunkSize",void 0),u(this,"workerIndex",void 0),u(this,"chunks",[]),u(this,"framesCount",void 0),u(this,"chunksCount",void 0),u(this,"canvas",document.createElement("canvas")),u(this,"ctx",this.canvas.getContext("2d")),u(this,"isAnimating",!1),u(this,"isWaiting",!0),u(this,"isOnLoadFired",!1),u(this,"isDestroyed",!1),u(this,"approxFrameIndex",0),u(this,"prevFrameIndex",-1),u(this,"stopFrameIndex",0),u(this,"speed",1),u(this,"direction",1),u(this,"lastRenderAt",void 0),this.initContainer(),this.initConfig(),this.initRenderer()}isPlaying(){return this.isAnimating||this.isWaiting}play(){this.stopFrameIndex=void 0,this.direction=1,this.doPlay()}pause(){this.isWaiting?this.stopFrameIndex=this.approxFrameIndex:this.isAnimating=!1;const t=this.getChunkIndex(this.approxFrameIndex);this.chunks=this.chunks.map((e,i)=>i===t?e:void 0)}goToAndPlay(t){this.approxFrameIndex=Math.floor(t/this.reduceFactor),this.stopFrameIndex=void 0,this.direction=1,this.doPlay()}goToAndStop(t){this.approxFrameIndex=Math.floor(t/this.reduceFactor),this.stopFrameIndex=Math.floor(t/this.reduceFactor),this.direction=1,this.doPlay()}playSegment([t,e]){this.approxFrameIndex=Math.floor(t/this.reduceFactor),this.stopFrameIndex=Math.floor(e/this.reduceFactor),this.direction=t<e?1:-1,this.doPlay()}setSpeed(t){this.speed=t}destroy(){this.isDestroyed=!0,this.pause(),this.destroyRenderer(),this.destroyContainer()}initContainer(){if(!(this.container.parentNode instanceof HTMLElement))throw new Error("[RLottie] Container is not mounted");let{size:t}=this.params;if(!t&&(t=this.container.offsetWidth||parseInt(this.container.style.width,10)||this.container.parentNode.offsetWidth,!t))throw new Error("[RLottie] Failed to detect width from container");this.canvas.style.width=t+"px",this.canvas.style.height=t+"px";const{isLowPriority:e,quality:i=(e?l:m)}=this.params,s=Math.round(t*Math.max(r.a*i,1));this.canvas.width=s,this.canvas.height=s,this.container.appendChild(this.canvas),this.imgSize=s}initConfig(){this.key=`${this.id}_${this.imgSize}`;const{isLowPriority:t}=this.params,e=t?30:60,i=this.animationData.fr||e;this.reduceFactor=i%e==0?i/e:1,this.msPerFrame=1e3/(i/this.reduceFactor),this.cacheModulo=t?0:p,this.chunkSize=1}destroyContainer(){this.canvas.remove()}initRenderer(){this.workerIndex=Object(c.a)(4,++k),g[this.workerIndex].request({name:"init",args:[this.key,this.animationData,this.imgSize,this.params.isLowPriority,this.reduceFactor,this.onRendererInit.bind(this)]})}destroyRenderer(){g[this.workerIndex].request({name:"destroy",args:[this.key]})}onRendererInit(t){this.framesCount=t,this.chunksCount=Math.ceil(t/this.chunkSize),this.isWaiting&&this.doPlay()}doPlay(){this.framesCount&&(this.isDestroyed||this.isAnimating||(this.isWaiting||(this.lastRenderAt=void 0),this.isAnimating=!0,this.isWaiting=!1,Object(d.a)(()=>{if(this.isDestroyed)return!1;if(!this.isAnimating&&this.isOnLoadFired)return!1;const t=Math.round(this.approxFrameIndex),e=this.getChunkIndex(t);if(!this.chunks[e])return this.requestChunk(e),this.isAnimating=!1,this.isWaiting=!0,!1;if(this.cacheModulo&&e%this.cacheModulo==0&&this.cleanupPrevChunk(e),this.requestNextChunk(e),t!==this.prevFrameIndex){const e=this.getFrame(t);if(!e)return this.isAnimating=!1,this.isWaiting=!0,!1;const i=new ImageData(new Uint8ClampedArray(e),this.imgSize,this.imgSize);this.ctx.putImageData(i,0,0),this.onLoad&&!this.isOnLoadFired&&(this.isOnLoadFired=!0,this.onLoad()),this.prevFrameIndex=t}const i=Date.now(),s=this.lastRenderAt?this.msPerFrame/(i-this.lastRenderAt):1,n=Math.min(1,this.direction*this.speed/s),r=Math.round(this.approxFrameIndex+n);if(this.lastRenderAt=i,n>0&&(t===this.framesCount-1||r>this.framesCount-1)){if(this.params.noLoop)return this.isAnimating=!1,!1;this.approxFrameIndex=0}else if(n<0&&(0===t||r<0)){if(this.params.noLoop)return this.isAnimating=!1,!1;this.approxFrameIndex=this.framesCount-1}else{if(void 0!==this.stopFrameIndex&&(t===this.stopFrameIndex||n>0&&r>this.stopFrameIndex||n<0&&r<this.stopFrameIndex))return this.stopFrameIndex=void 0,this.isAnimating=!1,!1;this.approxFrameIndex+=n}const a=Math.round(this.approxFrameIndex);return!!this.getFrame(a)||(this.requestChunk(this.getChunkIndex(a)),this.isWaiting=!0,this.isAnimating=!1,!1)})))}getFrame(t){const e=this.getChunkIndex(t),i=this.getFrameIndexInChunk(t),s=this.chunks[e];if(s)return s[i]}getFrameIndexInChunk(t){return t-this.getChunkIndex(t)*this.chunkSize}getChunkIndex(t){return Math.floor(t/this.chunkSize)}requestChunk(t){if(this.chunks[t])return;this.chunks[t]=[];const e=t*this.chunkSize,i=Math.min(e+this.chunkSize-1,this.framesCount-1);g[this.workerIndex].request({name:"renderFrames",args:[this.key,e,i,this.onFrameLoad.bind(this)]})}cleanupPrevChunk(t){if(this.chunksCount<3)return;const e=Object(c.a)(this.chunksCount,t-1);this.chunks[e]=void 0}requestNextChunk(t){if(1===this.chunksCount)return;const e=Object(c.a)(this.chunksCount,t+1);this.chunks[e]||this.requestChunk(e)}onFrameLoad(t,e){const i=this.getChunkIndex(t),s=this.chunks[i];s&&(s[this.getFrameIndexInChunk(t)]=e,this.isWaiting&&this.doPlay())}}},318:function(t,e,i){t.exports=function(){return new Worker(i.p+"4d295e33ad2b2b0ea42d.worker.js")}}}]);
//# sourceMappingURL=7.92a49eb850769e9785ea.js.map