"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[133],{1133:(e,t,n)=>{n.r(t),n.d(t,{AuthCode:()=>f,AuthPassword:()=>P,AuthRegister:()=>w});var a=n(4050),o=n(5116),r=n(7361),s=n(782),i=n(2340),c=n(6590),l=n(9107),d=n(7687),u=n(4288),m=n(3716),p=n(7324),g=n(7799);const h=r.wB?m.qp:m.z7,Z=(0,a.X$)((({code:e,codeLength:t,trackingDirection:n,isTracking:o,isBig:r})=>{const[s,i]=(0,a.eJ)(),[c,l]=(0,a.eJ)(),[d,u]=(0,a.eJ)(!1),Z=165/t;(0,a.d4)((()=>{s||(0,p.Z)("MonkeyIdle").then(i)}),[s]),(0,a.d4)((()=>{c||(0,p.Z)("MonkeyTracking").then(l)}),[c]);const f=(0,a.I4)((()=>u(!0)),[]);return a.ZP.createElement("div",{id:"monkey",className:r?"big":""},!d&&a.ZP.createElement("div",{className:"monkey-preview"}),s&&a.ZP.createElement(g.Z,{id:"idleMonkey",size:r?m.K2:h,className:o?"hidden":void 0,animationData:s,play:!o,onLoad:f}),c&&a.ZP.createElement(g.Z,{id:"trackingMonkey",size:r?m.K2:h,className:o?"shown":"hidden",animationData:c,playSegment:o?function(){const a=e&&e.length>1||n<0?15+Z*(e.length-1):0,o=e.length===t?180:15+Z*e.length;return n<1?[o,a]:[a,o]}():void 0,speed:2,noLoop:!0}))})),f=(0,a.X$)((0,o.c$)((e=>(0,s.ei)(e,["authPhoneNumber","authIsCodeViaApp","authIsLoading","authError"])))((({authPhoneNumber:e,authIsCodeViaApp:t,authIsLoading:n,authError:s})=>{const{setAuthCode:m,returnToAuthPhoneNumber:p,clearAuthError:g}=(0,o.uC)(),h=(0,l.Z)(),f=(0,a.sO)(null),[b,v]=(0,a.eJ)(""),[P,E]=(0,a.eJ)(!1),[y,w]=(0,a.eJ)(1);(0,a.d4)((()=>{r.$b||f.current.focus()}),[]),(0,c.ZP)(!0,p);const k=(0,a.I4)((e=>{s&&g();const{currentTarget:t}=e;t.value=t.value.replace(/[^\d]+/,"").substr(0,5),t.value!==b&&(v(t.value),P?t.value.length||E(!1):E(!0),b&&b.length>t.value.length?w(-1):w(1),5===t.value.length&&m({code:t.value}))}),[s,g,b,P,m]);return a.ZP.createElement("div",{id:"auth-code-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement(Z,{code:b,codeLength:5,isTracking:P,trackingDirection:y}),a.ZP.createElement("h2",null,e,a.ZP.createElement("div",{className:"auth-number-edit",onClick:p,role:"button",tabIndex:0,title:h("WrongNumber")},a.ZP.createElement("i",{className:"icon-edit"}))),a.ZP.createElement("p",{className:"note"},(0,i.Z)(h(t?"SentAppCode":"Login.JustSentSms"),["simple_markdown"])),a.ZP.createElement(d.Z,{ref:f,id:"sign-in-code",label:h("Code"),onInput:k,value:b,error:s&&h(s),autoComplete:"one-time-code",inputMode:"numeric"}),n&&a.ZP.createElement(u.Z,null)))})));var b=n(3490),v=n(9364);const P=(0,a.X$)((0,o.c$)((e=>(0,s.ei)(e,["authIsLoading","authError","authHint"])))((({authIsLoading:e,authError:t,authHint:n})=>{const{setAuthPassword:r,clearAuthError:s}=(0,o.uC)(),i=(0,l.Z)(),[c,d]=(0,a.eJ)(!1),u=(0,a.I4)((e=>{d(e)}),[]),m=(0,a.I4)((e=>{r({password:e})}),[r]);return a.ZP.createElement("div",{id:"auth-password-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement(b.Z,{isPasswordVisible:c}),a.ZP.createElement("h2",null,i("Login.Header.Password")),a.ZP.createElement("p",{className:"note"},i("Login.EnterPasswordDescription")),a.ZP.createElement(v.Z,{clearError:s,error:t&&i(t),hint:n,isLoading:e,isPasswordVisible:c,onChangePasswordVisibility:u,onSubmit:m})))})));var E=n(231),y=n(710);const w=(0,a.X$)((0,o.c$)((e=>(0,s.ei)(e,["authIsLoading","authError"])))((({authIsLoading:e,authError:t})=>{const{signUp:n,clearAuthError:r,uploadProfilePhoto:s}=(0,o.uC)(),i=(0,l.Z)(),[c,u]=(0,a.eJ)(!1),[m,p]=(0,a.eJ)(),[g,h]=(0,a.eJ)(""),[Z,f]=(0,a.eJ)("");return a.ZP.createElement("div",{id:"auth-registration-form",className:"custom-scroll"},a.ZP.createElement("div",{className:"auth-form"},a.ZP.createElement("form",{action:"",method:"post",onSubmit:function(e){e.preventDefault(),n({firstName:g,lastName:Z}),m&&s({file:m})}},a.ZP.createElement(y.Z,{onChange:p}),a.ZP.createElement("h2",null,i("YourName")),a.ZP.createElement("p",{className:"note"},i("Login.Register.Desc")),a.ZP.createElement(d.Z,{id:"registration-first-name",label:i("Login.Register.FirstName.Placeholder"),onChange:function(e){t&&r();const{target:n}=e;h(n.value),u(n.value.length>0)},value:g,error:t&&i(t),autoComplete:"given-name"}),a.ZP.createElement(d.Z,{id:"registration-last-name",label:i("Login.Register.LastName.Placeholder"),onChange:function(e){const{target:t}=e;f(t.value)},value:Z,autoComplete:"family-name"}),c&&a.ZP.createElement(E.Z,{type:"submit",ripple:!0,isLoading:e},i("Next")))))})))},7799:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(4050),o=n(9118),r=n(6752),s=n(8674),i=n(5332);let c,l;async function d(){return c||(c=n.e(941).then(n.bind(n,7941)),l=(await c).default),c}setTimeout(d,5e3);const u=(0,a.X$)((({className:e,id:t,animationData:n,play:c,playSegment:u,speed:m,noLoop:p,size:g,quality:h,isLowPriority:Z,onLoad:f,color:b,onEnded:v})=>{const[P,E]=(0,a.eJ)(),y=(0,a.sO)(null),w=(0,a.sO)(!1),k=(0,a.sO)(!1),N=(0,a.sO)(!0),C=(0,a.sO)();C.current=c;const L=(0,a.sO)();L.current=u,(0,a.d4)((()=>{if(P||!n)return;const e=()=>{if(!y.current)return;const e=new l(t,y.current,n,{noLoop:p,size:g,quality:h,isLowPriority:Z},f,b,v);m&&e.setSpeed(m),E(e)};l?e():d().then((()=>{(0,o.T2)((()=>{y.current&&e()}))}))}),[b,P,n,t,Z,p,f,h,g,m,v]),(0,a.d4)((()=>{P&&P.setColor(b)}),[b,P]),(0,a.d4)((()=>()=>{P&&P.destroy()}),[P]);const x=(0,a.I4)(((e=!1)=>{P&&(C.current||L.current)&&(L.current?P.playSegment(L.current):e?P.goToAndPlay(0):P.play())}),[P]),I=(0,a.I4)((()=>{P&&P.pause()}),[P]),A=(0,a.I4)((()=>{k.current=!0,P&&(w.current||(w.current=P.isPlaying()),I())}),[P,I]),M=(0,a.I4)((()=>{w.current&&x(),w.current=!1,k.current=!1}),[x]),S=(0,a.I4)((()=>{(0,o.T2)(M)}),[M]);(0,a.d4)((()=>{P&&(c||u?k.current?w.current=!0:x(p):k.current?w.current=!1:I())}),[P,c,u,p,x,I]),(0,a.d4)((()=>{P&&(N.current?N.current=!1:(P.changeData(n),x()))}),[x,P,n]),(0,s.ZP)(A,M),(0,i.Z)(A,S);const J=(0,r.Z)("AnimatedSticker",e),T=g?`width: ${g}px; height: ${g}px;`:void 0;return a.ZP.createElement("div",{ref:y,className:J,style:T})}))},9364:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(4050),o=n(3716),r=n(7361),s=n(6752),i=n(9107),c=n(231);const l=r.wB?550:400,d=(0,a.X$)((({isLoading:e=!1,isPasswordVisible:t,error:n,hint:d,placeholder:u="Password",submitLabel:m="Next",clearError:p,onChangePasswordVisibility:g,onInputChange:h,onSubmit:Z})=>{const f=(0,a.sO)(null),b=(0,i.Z)(),[v,P]=(0,a.eJ)(""),[E,y]=(0,a.eJ)(!1);return(0,a.d4)((()=>{r.$b||setTimeout((()=>{f.current.focus()}),l)}),[]),(0,a.d4)((()=>{n&&requestAnimationFrame((()=>{f.current.focus(),f.current.select()}))}),[n]),a.ZP.createElement("form",{action:"",onSubmit:function(t){t.preventDefault(),e||E&&Z(v)},autoComplete:"off"},a.ZP.createElement("div",{className:(0,s.Z)("input-group password-input",v&&"touched",n&&"error"),dir:b.isRtl?"rtl":void 0},a.ZP.createElement("input",{ref:f,className:"form-control",type:t?"text":"password",id:"sign-in-password",value:v||"",autoComplete:"current-password",onChange:function(e){n&&p();const{target:t}=e;P(t.value),y(t.value.length>=o.lo),h&&h(t.value)},dir:"auto"}),a.ZP.createElement("label",null,n||d||u),a.ZP.createElement("div",{className:"toggle-password",onClick:function(){g(!t)},role:"button",tabIndex:0,title:"Toggle password visibility"},a.ZP.createElement("i",{className:t?"icon-eye":"icon-eye-closed"}))),E&&a.ZP.createElement(c.Z,{type:"submit",ripple:!0,isLoading:e},m))}))},3490:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(4050),o=n(3716),r=n(7361),s=n(7324),i=n(7799);const c=[0,50],l=[0,20],d=[20,0],u=r.wB?o.qp:o.z7,m=(0,a.X$)((({isPasswordVisible:e,isBig:t})=>{const[n,r]=(0,a.eJ)(),[m,p]=(0,a.eJ)(),[g,h]=(0,a.eJ)(!1),[Z,f]=(0,a.eJ)(!1);(0,a.d4)((()=>{n?setTimeout((()=>f(!0)),2e3):(0,s.Z)("MonkeyClose").then(r)}),[n]),(0,a.d4)((()=>{m||(0,s.Z)("MonkeyPeek").then(p)}),[m]);const b=(0,a.I4)((()=>h(!0)),[]);return a.ZP.createElement("div",{id:"monkey",className:t?"big":""},!g&&a.ZP.createElement("div",{className:"monkey-preview"}),n&&a.ZP.createElement(i.Z,{id:"closeMonkey",size:t?o.K2:u,className:Z?"hidden":"shown",animationData:n,playSegment:c,noLoop:!0,onLoad:b}),m&&a.ZP.createElement(i.Z,{id:"peekMonkey",size:t?o.K2:u,className:Z?"shown":"hidden",animationData:m,playSegment:e?l:d,noLoop:!0}))}))},7324:(e,t,n)=>{n.d(t,{x:()=>r,Z:()=>s});var a=n(6137),o=n(647);const r={MonkeyIdle:n(8760),MonkeyTracking:n(2750),MonkeyClose:n(6257),MonkeyPeek:n(7785),FoldersAll:n(9356),FoldersNew:n(5485),DiscussionGroups:n(6978),CameraFlip:n(5665),HandFilled:n(2456),HandOutline:n(5667),Speaker:n(8763),VoiceAllowTalk:n(401),VoiceMini:n(5106),VoiceMuted:n(487),VoiceOutlined:n(5740),Peach:n(3677),Eggplant:n(5435),Cumshot:n(1879)};function s(e){const t=r[e].replace(window.location.origin,"");return o.he(`file${t}`,a.IU.Lottie)}},710:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(4050),o=n(6752),r=n(3716),s=n(1394),i=n(9107),c=n(231),l=n(3103),d=n(4288);const u={type:"blob",quality:1,format:"jpeg",circle:!1,size:{width:1024,height:1024}};let m,p,g;const h=(0,a.X$)((({file:e,onChange:t,onClose:o})=>{const[h,Z]=(0,a.eJ)(!1);(0,a.d4)((()=>{e&&(h?async function(e){try{const t=document.getElementById("avatar-crop");if(!t)return;const{offsetWidth:n,offsetHeight:a}=t;g=new m(t,{enableZoom:!0,boundary:{width:n,height:a},viewport:{width:n-16,height:a-16,type:"circle"}});const o=await(0,s.YJ)(e);await g.bind({url:o})}catch(e){r.eM&&console.error(e)}}(e):async function(){return p||(p=Promise.all([n.e(99),n.e(472)]).then(n.bind(n,3472)),m=(await p).default),p}().then((()=>Z(!0))))}),[e,h]);const f=(0,i.Z)();return a.ZP.createElement(l.Z,{isOpen:Boolean(e),onClose:o,title:"Drag to reposition",className:"CropModal",hasCloseButton:!0},h?a.ZP.createElement("div",{id:"avatar-crop"}):a.ZP.createElement(d.Z,null),a.ZP.createElement(c.Z,{className:"confirm-button",round:!0,color:"primary",onClick:async function(){if(!g)return;const e=await g.result(u),n="string"==typeof e?e:(0,s.hl)(e,"avatar.jpg");t(n)},ariaLabel:f("CropImage")},a.ZP.createElement("i",{className:"icon-check"})))})),Z=(0,a.X$)((({title:e="Change your profile picture",disabled:t,currentAvatarBlobUrl:n,onChange:r})=>{const[s,i]=(0,a.eJ)(),[c,l]=(0,a.eJ)(n);(0,a.d4)((()=>{l(n)}),[n]);const d=(0,o.Z)(c&&"filled",t&&"disabled");return a.ZP.createElement("div",{className:"AvatarEditable"},a.ZP.createElement("label",{className:d,role:"button",tabIndex:0,title:e},a.ZP.createElement("input",{type:"file",onChange:function(e){const t=e.target;t&&t.files&&t.files[0]&&(i(t.files[0]),t.value="")},accept:"image/png, image/jpeg"}),a.ZP.createElement("i",{className:"icon-camera-add"}),c&&a.ZP.createElement("img",{src:c,alt:"Avatar"})),a.ZP.createElement(h,{file:s,onClose:function(){i(void 0)},onChange:function(e){i(void 0),r(e),c&&URL.revokeObjectURL(c),l(URL.createObjectURL(e))}}))}))},3103:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(4050),o=n(517),r=n(6752),s=n(8674),i=n(1212),c=n(274),l=n(9107),d=n(6590),u=n(231),m=n(2898);const p=({dialogRef:e,title:t,className:n,isOpen:p,header:g,hasCloseButton:h,noBackdrop:Z,children:f,onClose:b,onCloseAnimationEnd:v,onEnter:P,shouldSkipHistoryAnimations:E})=>{const{shouldRender:y,transitionClassNames:w}=(0,i.Z)(p,v,E,void 0,E),k=(0,a.sO)(null);(0,a.d4)((()=>p?(0,o.Z)({onEsc:b,onEnter:P}):void 0),[p,b,P]),(0,a.d4)((()=>p&&k.current?function(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const n=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!n.length)return;const a=n.findIndex((e=>e.isSameNode(document.activeElement)));let o=0;a>=0&&(o=t.shiftKey?a>0?a-1:n.length-1:a<n.length-1?a+1:0),n[o].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}(k.current):void 0),[p]);const{forceClose:N}=(0,d.ZP)(p,b);(0,a.d4)((()=>()=>{p&&N()}),[]),(0,c.Z)((([e])=>(document.body.classList.toggle("has-open-dialog",p),(p||!p&&void 0!==e)&&(0,s.YW)(200),()=>{document.body.classList.remove("has-open-dialog")})),[p]);const C=(0,l.Z)();if(!y)return;const L=(0,r.Z)("Modal",n,w,Z&&"transparent-backdrop");return a.ZP.createElement(m.Z,null,a.ZP.createElement("div",{ref:k,className:L,tabIndex:-1,role:"dialog"},a.ZP.createElement("div",{className:"modal-container"},a.ZP.createElement("div",{className:"modal-backdrop",onClick:b}),a.ZP.createElement("div",{className:"modal-dialog",ref:e},g||(t?a.ZP.createElement("div",{className:"modal-header"},h&&a.ZP.createElement(u.Z,{round:!0,color:"translucent",size:"smaller",ariaLabel:C("Close"),onClick:b},a.ZP.createElement("i",{className:"icon-close"})),a.ZP.createElement("div",{className:"modal-title"},t)):void 0),a.ZP.createElement("div",{className:"modal-content custom-scroll"},f)))))}},2898:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(4050),o=n(2916);const r=({containerId:e,className:t,children:n})=>{const r=(0,a.sO)();return r.current||(r.current=document.createElement("div")),(0,a.bt)((()=>{const n=document.querySelector(e||"#portals");if(!n)return;const a=r.current;return t&&a.classList.add(t),n.appendChild(a),()=>{o.Z.render(void 0,a),n.removeChild(a)}}),[t,e]),o.Z.render(n,r.current)}},5332:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(4050);function o(e,t){(0,a.d4)((()=>(e&&!document.hasFocus()&&e(),e&&window.addEventListener("blur",e),t&&window.addEventListener("focus",t),()=>{t&&window.removeEventListener("focus",t),e&&window.removeEventListener("blur",e)})),[e,t])}},1879:(e,t,n)=>{e.exports=n.p+"Cumshot.7a17984a6b80787dab34..tgs"},5435:(e,t,n)=>{e.exports=n.p+"Eggplant.7693d877087b802d04be..tgs"},3677:(e,t,n)=>{e.exports=n.p+"Peach.a289b2c54c563f11208f..tgs"},5665:(e,t,n)=>{e.exports=n.p+"CameraFlip.1a9fe44cf01fcb22347d..tgs"},2456:(e,t,n)=>{e.exports=n.p+"HandFilled.f87939d160f1dc288586..tgs"},5667:(e,t,n)=>{e.exports=n.p+"HandOutline.f9831751ba60df30c484..tgs"},8763:(e,t,n)=>{e.exports=n.p+"Speaker.04bb3743412b41ff83c5..tgs"},401:(e,t,n)=>{e.exports=n.p+"VoiceAllowTalk.a9cc7c39ec438973ddc9..tgs"},5106:(e,t,n)=>{e.exports=n.p+"VoiceMini.bf00ffdf69625c579569..tgs"},487:(e,t,n)=>{e.exports=n.p+"VoiceMuted.a4b4ec6bfd7c6c5fb275..tgs"},5740:(e,t,n)=>{e.exports=n.p+"VoiceOutlined.91b394ab3562cdfad6bc..tgs"},6257:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyClose.604c4c833d322b7e6c3e..tgs"},8760:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyIdle.dea4a492c144df84ddab..tgs"},7785:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyPeek.1905436b042520363d7e..tgs"},2750:(e,t,n)=>{e.exports=n.p+"TwoFactorSetupMonkeyTracking.eb5a7a6f166fb7589c12..tgs"},6978:(e,t,n)=>{e.exports=n.p+"DiscussionGroupsDucks.9ea453d1be9d1b0ee77a..tgs"},9356:(e,t,n)=>{e.exports=n.p+"FoldersAll.3f9f9e243d19f0fbf9aa..tgs"},5485:(e,t,n)=>{e.exports=n.p+"FoldersNew.9a40d71c0c8be70f5bd1..tgs"}}]);
//# sourceMappingURL=133.672f7d0ddf0d82cbe667.js.map