function Qh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function gf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wf={exports:{}},ma={},bf={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io=Symbol.for("react.element"),Zh=Symbol.for("react.portal"),Xh=Symbol.for("react.fragment"),qh=Symbol.for("react.strict_mode"),Jh=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),ng=Symbol.for("react.forward_ref"),rg=Symbol.for("react.suspense"),og=Symbol.for("react.memo"),lg=Symbol.for("react.lazy"),vd=Symbol.iterator;function ag(e){return e===null||typeof e!="object"?null:(e=vd&&e[vd]||e["@@iterator"],typeof e=="function"?e:null)}var yf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vf=Object.assign,_f={};function Er(e,t,n){this.props=e,this.context=t,this.refs=_f,this.updater=n||yf}Er.prototype.isReactComponent={};Er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xf(){}xf.prototype=Er.prototype;function Us(e,t,n){this.props=e,this.context=t,this.refs=_f,this.updater=n||yf}var Gs=Us.prototype=new xf;Gs.constructor=Us;vf(Gs,Er.prototype);Gs.isPureReactComponent=!0;var _d=Array.isArray,kf=Object.prototype.hasOwnProperty,Ks={current:null},$f={key:!0,ref:!0,__self:!0,__source:!0};function Cf(e,t,n){var r,o={},l=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)kf.call(t,r)&&!$f.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){for(var c=Array(i),d=0;d<i;d++)c[d]=arguments[d+2];o.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)o[r]===void 0&&(o[r]=i[r]);return{$$typeof:Io,type:e,key:l,ref:a,props:o,_owner:Ks.current}}function ig(e,t){return{$$typeof:Io,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ws(e){return typeof e=="object"&&e!==null&&e.$$typeof===Io}function sg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xd=/\/+/g;function Xa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sg(""+e.key):t.toString(36)}function vl(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Io:case Zh:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Xa(a,0):r,_d(o)?(n="",e!=null&&(n=e.replace(xd,"$&/")+"/"),vl(o,t,n,"",function(d){return d})):o!=null&&(Ws(o)&&(o=ig(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(xd,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",_d(e))for(var i=0;i<e.length;i++){l=e[i];var c=r+Xa(l,i);a+=vl(l,t,n,c,o)}else if(c=ag(e),typeof c=="function")for(e=c.call(e),i=0;!(l=e.next()).done;)l=l.value,c=r+Xa(l,i++),a+=vl(l,t,n,c,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Wo(e,t,n){if(e==null)return e;var r=[],o=0;return vl(e,r,"","",function(l){return t.call(n,l,o++)}),r}function cg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},_l={transition:null},dg={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:_l,ReactCurrentOwner:Ks};Q.Children={map:Wo,forEach:function(e,t,n){Wo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wo(e,function(){t++}),t},toArray:function(e){return Wo(e,function(t){return t})||[]},only:function(e){if(!Ws(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Q.Component=Er;Q.Fragment=Xh;Q.Profiler=Jh;Q.PureComponent=Us;Q.StrictMode=qh;Q.Suspense=rg;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dg;Q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vf({},e.props),o=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=Ks.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)kf.call(t,c)&&!$f.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){i=Array(c);for(var d=0;d<c;d++)i[d]=arguments[d+2];r.children=i}return{$$typeof:Io,type:e.type,key:o,ref:l,props:r,_owner:a}};Q.createContext=function(e){return e={$$typeof:tg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:eg,_context:e},e.Consumer=e};Q.createElement=Cf;Q.createFactory=function(e){var t=Cf.bind(null,e);return t.type=e,t};Q.createRef=function(){return{current:null}};Q.forwardRef=function(e){return{$$typeof:ng,render:e}};Q.isValidElement=Ws;Q.lazy=function(e){return{$$typeof:lg,_payload:{_status:-1,_result:e},_init:cg}};Q.memo=function(e,t){return{$$typeof:og,type:e,compare:t===void 0?null:t}};Q.startTransition=function(e){var t=_l.transition;_l.transition={};try{e()}finally{_l.transition=t}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(e,t){return Me.current.useCallback(e,t)};Q.useContext=function(e){return Me.current.useContext(e)};Q.useDebugValue=function(){};Q.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};Q.useEffect=function(e,t){return Me.current.useEffect(e,t)};Q.useId=function(){return Me.current.useId()};Q.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};Q.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};Q.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};Q.useMemo=function(e,t){return Me.current.useMemo(e,t)};Q.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};Q.useRef=function(e){return Me.current.useRef(e)};Q.useState=function(e){return Me.current.useState(e)};Q.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};Q.useTransition=function(){return Me.current.useTransition()};Q.version="18.2.0";bf.exports=Q;var s=bf.exports;const G=gf(s),ug=Qh({__proto__:null,default:G},[s]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg=s,pg=Symbol.for("react.element"),mg=Symbol.for("react.fragment"),hg=Object.prototype.hasOwnProperty,gg=fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wg={key:!0,ref:!0,__self:!0,__source:!0};function Ef(e,t,n){var r,o={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)hg.call(t,r)&&!wg.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:pg,type:e,key:l,ref:a,props:o,_owner:gg.current}}ma.Fragment=mg;ma.jsx=Ef;ma.jsxs=Ef;wf.exports=ma;var y=wf.exports,Fi={},Sf={exports:{}},tt={},Tf={exports:{}},jf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,R){var M=P.length;P.push(R);e:for(;0<M;){var V=M-1>>>1,U=P[V];if(0<o(U,R))P[V]=R,P[M]=U,M=V;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var R=P[0],M=P.pop();if(M!==R){P[0]=M;e:for(var V=0,U=P.length,Z=U>>>1;V<Z;){var le=2*(V+1)-1,_e=P[le],ge=le+1,H=P[ge];if(0>o(_e,M))ge<U&&0>o(H,_e)?(P[V]=H,P[ge]=M,V=ge):(P[V]=_e,P[le]=M,V=le);else if(ge<U&&0>o(H,M))P[V]=H,P[ge]=M,V=ge;else break e}}return R}function o(P,R){var M=P.sortIndex-R.sortIndex;return M!==0?M:P.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,i=a.now();e.unstable_now=function(){return a.now()-i}}var c=[],d=[],p=1,f=null,h=3,w=!1,v=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var R=n(d);R!==null;){if(R.callback===null)r(d);else if(R.startTime<=P)r(d),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(d)}}function x(P){if(b=!1,g(P),!v)if(n(c)!==null)v=!0,L(k);else{var R=n(d);R!==null&&K(x,R.startTime-P)}}function k(P,R){v=!1,b&&(b=!1,m(E),E=-1),w=!0;var M=h;try{for(g(R),f=n(c);f!==null&&(!(f.expirationTime>R)||P&&!F());){var V=f.callback;if(typeof V=="function"){f.callback=null,h=f.priorityLevel;var U=V(f.expirationTime<=R);R=e.unstable_now(),typeof U=="function"?f.callback=U:f===n(c)&&r(c),g(R)}else r(c);f=n(c)}if(f!==null)var Z=!0;else{var le=n(d);le!==null&&K(x,le.startTime-R),Z=!1}return Z}finally{f=null,h=M,w=!1}}var C=!1,$=null,E=-1,z=5,S=-1;function F(){return!(e.unstable_now()-S<z)}function T(){if($!==null){var P=e.unstable_now();S=P;var R=!0;try{R=$(!0,P)}finally{R?N():(C=!1,$=null)}}else C=!1}var N;if(typeof u=="function")N=function(){u(T)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,O=j.port2;j.port1.onmessage=T,N=function(){O.postMessage(null)}}else N=function(){_(T,0)};function L(P){$=P,C||(C=!0,N())}function K(P,R){E=_(function(){P(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,L(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var M=h;h=R;try{return P()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,R){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=h;h=P;try{return R()}finally{h=M}},e.unstable_scheduleCallback=function(P,R,M){var V=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?V+M:V):M=V,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=M+U,P={id:p++,callback:R,priorityLevel:P,startTime:M,expirationTime:U,sortIndex:-1},M>V?(P.sortIndex=M,t(d,P),n(c)===null&&P===n(d)&&(b?(m(E),E=-1):b=!0,K(x,M-V))):(P.sortIndex=U,t(c,P),v||w||(v=!0,L(k))),P},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(P){var R=h;return function(){var M=h;h=R;try{return P.apply(this,arguments)}finally{h=M}}}})(jf);Tf.exports=jf;var bg=Tf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf=s,Je=bg;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nf=new Set,uo={};function Bn(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(uo[e]=t,e=0;e<t.length;e++)Nf.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ai=Object.prototype.hasOwnProperty,yg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kd={},$d={};function vg(e){return Ai.call($d,e)?!0:Ai.call(kd,e)?!1:yg.test(e)?$d[e]=!0:(kd[e]=!0,!1)}function _g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xg(e,t,n,r){if(t===null||typeof t>"u"||_g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,o,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ys=/[\-:]([a-z])/g;function Qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ys,Qs);je[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ys,Qs);je[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ys,Qs);je[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zs(e,t,n,r){var o=je.hasOwnProperty(t)?je[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xg(t,n,o,r)&&(n=null),r||o===null?vg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ut=Rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),Xn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),Xs=Symbol.for("react.strict_mode"),zi=Symbol.for("react.profiler"),Pf=Symbol.for("react.provider"),If=Symbol.for("react.context"),qs=Symbol.for("react.forward_ref"),Oi=Symbol.for("react.suspense"),Li=Symbol.for("react.suspense_list"),Js=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),Ff=Symbol.for("react.offscreen"),Cd=Symbol.iterator;function Mr(e){return e===null||typeof e!="object"?null:(e=Cd&&e[Cd]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,qa;function Qr(e){if(qa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qa=t&&t[1]||""}return`
`+qa+e}var Ja=!1;function ei(e,t){if(!e||Ja)return"";Ja=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),l=r.stack.split(`
`),a=o.length-1,i=l.length-1;1<=a&&0<=i&&o[a]!==l[i];)i--;for(;1<=a&&0<=i;a--,i--)if(o[a]!==l[i]){if(a!==1||i!==1)do if(a--,i--,0>i||o[a]!==l[i]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=i);break}}}finally{Ja=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Qr(e):""}function kg(e){switch(e.tag){case 5:return Qr(e.type);case 16:return Qr("Lazy");case 13:return Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 2:case 15:return e=ei(e.type,!1),e;case 11:return e=ei(e.type.render,!1),e;case 1:return e=ei(e.type,!0),e;default:return""}}function Mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case Xn:return"Portal";case zi:return"Profiler";case Xs:return"StrictMode";case Oi:return"Suspense";case Li:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case If:return(e.displayName||"Context")+".Consumer";case Pf:return(e._context.displayName||"Context")+".Provider";case qs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Js:return t=e.displayName||null,t!==null?t:Mi(e.type)||"Memo";case Qt:t=e._payload,e=e._init;try{return Mi(e(t))}catch{}}return null}function $g(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mi(t);case 8:return t===Xs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Af(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cg(e){var t=Af(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qo(e){e._valueTracker||(e._valueTracker=Cg(e))}function zf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Af(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ll(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Di(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ed(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=dn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Of(e,t){t=t.checked,t!=null&&Zs(e,"checked",t,!1)}function Bi(e,t){Of(e,t);var n=dn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hi(e,t.type,dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hi(e,t,n){(t!=="number"||Ll(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zr=Array.isArray;function cr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+dn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Vi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Td(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(A(92));if(Zr(n)){if(1<n.length)throw Error(A(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dn(n)}}function Lf(e,t){var n=dn(t.value),r=dn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ui(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zo,Df=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Eg=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(e){Eg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),eo[t]=eo[e]})});function Bf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||eo.hasOwnProperty(e)&&eo[e]?(""+t).trim():t+"px"}function Hf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Bf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Sg=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gi(e,t){if(t){if(Sg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Ki(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=null;function ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yi=null,dr=null,ur=null;function Rd(e){if(e=zo(e)){if(typeof Yi!="function")throw Error(A(280));var t=e.stateNode;t&&(t=ya(t),Yi(e.stateNode,e.type,t))}}function Vf(e){dr?ur?ur.push(e):ur=[e]:dr=e}function Uf(){if(dr){var e=dr,t=ur;if(ur=dr=null,Rd(e),t)for(e=0;e<t.length;e++)Rd(t[e])}}function Gf(e,t){return e(t)}function Kf(){}var ti=!1;function Wf(e,t,n){if(ti)return e(t,n);ti=!0;try{return Gf(e,t,n)}finally{ti=!1,(dr!==null||ur!==null)&&(Kf(),Uf())}}function po(e,t){var n=e.stateNode;if(n===null)return null;var r=ya(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(A(231,t,typeof n));return n}var Qi=!1;if(zt)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){Qi=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Qi=!1}function Tg(e,t,n,r,o,l,a,i,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(p){this.onError(p)}}var to=!1,Ml=null,Dl=!1,Zi=null,jg={onError:function(e){to=!0,Ml=e}};function Rg(e,t,n,r,o,l,a,i,c){to=!1,Ml=null,Tg.apply(jg,arguments)}function Ng(e,t,n,r,o,l,a,i,c){if(Rg.apply(this,arguments),to){if(to){var d=Ml;to=!1,Ml=null}else throw Error(A(198));Dl||(Dl=!0,Zi=d)}}function Hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nd(e){if(Hn(e)!==e)throw Error(A(188))}function Pg(e){var t=e.alternate;if(!t){if(t=Hn(e),t===null)throw Error(A(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Nd(o),e;if(l===r)return Nd(o),t;l=l.sibling}throw Error(A(188))}if(n.return!==r.return)n=o,r=l;else{for(var a=!1,i=o.child;i;){if(i===n){a=!0,n=o,r=l;break}if(i===r){a=!0,r=o,n=l;break}i=i.sibling}if(!a){for(i=l.child;i;){if(i===n){a=!0,n=l,r=o;break}if(i===r){a=!0,r=l,n=o;break}i=i.sibling}if(!a)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?e:t}function Qf(e){return e=Pg(e),e!==null?Zf(e):null}function Zf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zf(e);if(t!==null)return t;e=e.sibling}return null}var Xf=Je.unstable_scheduleCallback,Pd=Je.unstable_cancelCallback,Ig=Je.unstable_shouldYield,Fg=Je.unstable_requestPaint,we=Je.unstable_now,Ag=Je.unstable_getCurrentPriorityLevel,tc=Je.unstable_ImmediatePriority,qf=Je.unstable_UserBlockingPriority,Bl=Je.unstable_NormalPriority,zg=Je.unstable_LowPriority,Jf=Je.unstable_IdlePriority,ha=null,Ct=null;function Og(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(ha,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Dg,Lg=Math.log,Mg=Math.LN2;function Dg(e){return e>>>=0,e===0?32:31-(Lg(e)/Mg|0)|0}var Xo=64,qo=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var i=a&~o;i!==0?r=Xr(i):(l&=a,l!==0&&(r=Xr(l)))}else a=n&~o,a!==0?r=Xr(a):l!==0&&(r=Xr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),o=1<<n,r|=e[n],t&=~o;return r}function Bg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-gt(l),i=1<<a,c=o[a];c===-1?(!(i&n)||i&r)&&(o[a]=Bg(i,t)):c<=t&&(e.expiredLanes|=i),l&=~i}}function Xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ep(){var e=Xo;return Xo<<=1,!(Xo&4194240)&&(Xo=64),e}function ni(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function Vg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function nc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ee=0;function tp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var np,rc,rp,op,lp,qi=!1,Jo=[],tn=null,nn=null,rn=null,mo=new Map,ho=new Map,Xt=[],Ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Id(e,t){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(t.pointerId)}}function Br(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=zo(t),t!==null&&rc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Gg(e,t,n,r,o){switch(t){case"focusin":return tn=Br(tn,e,t,n,r,o),!0;case"dragenter":return nn=Br(nn,e,t,n,r,o),!0;case"mouseover":return rn=Br(rn,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return mo.set(l,Br(mo.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,ho.set(l,Br(ho.get(l)||null,e,t,n,r,o)),!0}return!1}function ap(e){var t=$n(e.target);if(t!==null){var n=Hn(t);if(n!==null){if(t=n.tag,t===13){if(t=Yf(n),t!==null){e.blockedOn=t,lp(e.priority,function(){rp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ji(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wi=r,n.target.dispatchEvent(r),Wi=null}else return t=zo(n),t!==null&&rc(t),e.blockedOn=n,!1;t.shift()}return!0}function Fd(e,t,n){xl(e)&&n.delete(t)}function Kg(){qi=!1,tn!==null&&xl(tn)&&(tn=null),nn!==null&&xl(nn)&&(nn=null),rn!==null&&xl(rn)&&(rn=null),mo.forEach(Fd),ho.forEach(Fd)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,qi||(qi=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,Kg)))}function go(e){function t(o){return Hr(o,e)}if(0<Jo.length){Hr(Jo[0],e);for(var n=1;n<Jo.length;n++){var r=Jo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&Hr(tn,e),nn!==null&&Hr(nn,e),rn!==null&&Hr(rn,e),mo.forEach(t),ho.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)ap(n),n.blockedOn===null&&Xt.shift()}var fr=Ut.ReactCurrentBatchConfig,Vl=!0;function Wg(e,t,n,r){var o=ee,l=fr.transition;fr.transition=null;try{ee=1,oc(e,t,n,r)}finally{ee=o,fr.transition=l}}function Yg(e,t,n,r){var o=ee,l=fr.transition;fr.transition=null;try{ee=4,oc(e,t,n,r)}finally{ee=o,fr.transition=l}}function oc(e,t,n,r){if(Vl){var o=Ji(e,t,n,r);if(o===null)fi(e,t,r,Ul,n),Id(e,r);else if(Gg(o,e,t,n,r))r.stopPropagation();else if(Id(e,r),t&4&&-1<Ug.indexOf(e)){for(;o!==null;){var l=zo(o);if(l!==null&&np(l),l=Ji(e,t,n,r),l===null&&fi(e,t,r,Ul,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else fi(e,t,r,null,n)}}var Ul=null;function Ji(e,t,n,r){if(Ul=null,e=ec(r),e=$n(e),e!==null)if(t=Hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ul=e,null}function ip(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ag()){case tc:return 1;case qf:return 4;case Bl:case zg:return 16;case Jf:return 536870912;default:return 16}default:return 16}}var Jt=null,lc=null,kl=null;function sp(){if(kl)return kl;var e,t=lc,n=t.length,r,o="value"in Jt?Jt.value:Jt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[l-r];r++);return kl=o.slice(e,1<r?1-r:void 0)}function $l(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function Ad(){return!1}function nt(e){function t(n,r,o,l,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?el:Ad,this.isPropagationStopped=Ad,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),t}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ac=nt(Sr),Ao=me({},Sr,{view:0,detail:0}),Qg=nt(Ao),ri,oi,Vr,ga=me({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(ri=e.screenX-Vr.screenX,oi=e.screenY-Vr.screenY):oi=ri=0,Vr=e),ri)},movementY:function(e){return"movementY"in e?e.movementY:oi}}),zd=nt(ga),Zg=me({},ga,{dataTransfer:0}),Xg=nt(Zg),qg=me({},Ao,{relatedTarget:0}),li=nt(qg),Jg=me({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),ew=nt(Jg),tw=me({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nw=nt(tw),rw=me({},Sr,{data:0}),Od=nt(rw),ow={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=aw[e])?!!t[e]:!1}function ic(){return iw}var sw=me({},Ao,{key:function(e){if(e.key){var t=ow[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ic,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cw=nt(sw),dw=me({},ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ld=nt(dw),uw=me({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ic}),fw=nt(uw),pw=me({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),mw=nt(pw),hw=me({},ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gw=nt(hw),ww=[9,13,27,32],sc=zt&&"CompositionEvent"in window,no=null;zt&&"documentMode"in document&&(no=document.documentMode);var bw=zt&&"TextEvent"in window&&!no,cp=zt&&(!sc||no&&8<no&&11>=no),Md=String.fromCharCode(32),Dd=!1;function dp(e,t){switch(e){case"keyup":return ww.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function yw(e,t){switch(e){case"compositionend":return up(t);case"keypress":return t.which!==32?null:(Dd=!0,Md);case"textInput":return e=t.data,e===Md&&Dd?null:e;default:return null}}function vw(e,t){if(Jn)return e==="compositionend"||!sc&&dp(e,t)?(e=sp(),kl=lc=Jt=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cp&&t.locale!=="ko"?null:t.data;default:return null}}var _w={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_w[e.type]:t==="textarea"}function fp(e,t,n,r){Vf(r),t=Gl(t,"onChange"),0<t.length&&(n=new ac("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ro=null,wo=null;function xw(e){kp(e,0)}function wa(e){var t=nr(e);if(zf(t))return e}function kw(e,t){if(e==="change")return t}var pp=!1;if(zt){var ai;if(zt){var ii="oninput"in document;if(!ii){var Hd=document.createElement("div");Hd.setAttribute("oninput","return;"),ii=typeof Hd.oninput=="function"}ai=ii}else ai=!1;pp=ai&&(!document.documentMode||9<document.documentMode)}function Vd(){ro&&(ro.detachEvent("onpropertychange",mp),wo=ro=null)}function mp(e){if(e.propertyName==="value"&&wa(wo)){var t=[];fp(t,wo,e,ec(e)),Wf(xw,t)}}function $w(e,t,n){e==="focusin"?(Vd(),ro=t,wo=n,ro.attachEvent("onpropertychange",mp)):e==="focusout"&&Vd()}function Cw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wa(wo)}function Ew(e,t){if(e==="click")return wa(t)}function Sw(e,t){if(e==="input"||e==="change")return wa(t)}function Tw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Tw;function bo(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ai.call(t,o)||!yt(e[o],t[o]))return!1}return!0}function Ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gd(e,t){var n=Ud(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ud(n)}}function hp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gp(){for(var e=window,t=Ll();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ll(e.document)}return t}function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jw(e){var t=gp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hp(n.ownerDocument.documentElement,n)){if(r!==null&&cc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Gd(n,l);var a=Gd(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rw=zt&&"documentMode"in document&&11>=document.documentMode,er=null,es=null,oo=null,ts=!1;function Kd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ts||er==null||er!==Ll(r)||(r=er,"selectionStart"in r&&cc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oo&&bo(oo,r)||(oo=r,r=Gl(es,"onSelect"),0<r.length&&(t=new ac("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function tl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},si={},wp={};zt&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function ba(e){if(si[e])return si[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wp)return si[e]=t[n];return e}var bp=ba("animationend"),yp=ba("animationiteration"),vp=ba("animationstart"),_p=ba("transitionend"),xp=new Map,Wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){xp.set(e,t),Bn(t,[e])}for(var ci=0;ci<Wd.length;ci++){var di=Wd[ci],Nw=di.toLowerCase(),Pw=di[0].toUpperCase()+di.slice(1);gn(Nw,"on"+Pw)}gn(bp,"onAnimationEnd");gn(yp,"onAnimationIteration");gn(vp,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(_p,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iw=new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));function Yd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ng(r,t,void 0,e),e.currentTarget=null}function kp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var i=r[a],c=i.instance,d=i.currentTarget;if(i=i.listener,c!==l&&o.isPropagationStopped())break e;Yd(o,i,d),l=c}else for(a=0;a<r.length;a++){if(i=r[a],c=i.instance,d=i.currentTarget,i=i.listener,c!==l&&o.isPropagationStopped())break e;Yd(o,i,d),l=c}}}if(Dl)throw e=Zi,Dl=!1,Zi=null,e}function ce(e,t){var n=t[as];n===void 0&&(n=t[as]=new Set);var r=e+"__bubble";n.has(r)||($p(t,e,2,!1),n.add(r))}function ui(e,t,n){var r=0;t&&(r|=4),$p(n,e,r,t)}var nl="_reactListening"+Math.random().toString(36).slice(2);function yo(e){if(!e[nl]){e[nl]=!0,Nf.forEach(function(n){n!=="selectionchange"&&(Iw.has(n)||ui(n,!1,e),ui(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nl]||(t[nl]=!0,ui("selectionchange",!1,t))}}function $p(e,t,n,r){switch(ip(t)){case 1:var o=Wg;break;case 4:o=Yg;break;default:o=oc}n=o.bind(null,t,n,e),o=void 0,!Qi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function fi(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var i=r.stateNode.containerInfo;if(i===o||i.nodeType===8&&i.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;i!==null;){if(a=$n(i),a===null)return;if(c=a.tag,c===5||c===6){r=l=a;continue e}i=i.parentNode}}r=r.return}Wf(function(){var d=l,p=ec(n),f=[];e:{var h=xp.get(e);if(h!==void 0){var w=ac,v=e;switch(e){case"keypress":if($l(n)===0)break e;case"keydown":case"keyup":w=cw;break;case"focusin":v="focus",w=li;break;case"focusout":v="blur",w=li;break;case"beforeblur":case"afterblur":w=li;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=fw;break;case bp:case yp:case vp:w=ew;break;case _p:w=mw;break;case"scroll":w=Qg;break;case"wheel":w=gw;break;case"copy":case"cut":case"paste":w=nw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ld}var b=(t&4)!==0,_=!b&&e==="scroll",m=b?h!==null?h+"Capture":null:h;b=[];for(var u=d,g;u!==null;){g=u;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,m!==null&&(x=po(u,m),x!=null&&b.push(vo(u,x,g)))),_)break;u=u.return}0<b.length&&(h=new w(h,v,null,n,p),f.push({event:h,listeners:b}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==Wi&&(v=n.relatedTarget||n.fromElement)&&($n(v)||v[Ot]))break e;if((w||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=d,v=v?$n(v):null,v!==null&&(_=Hn(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=d),w!==v)){if(b=zd,x="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(b=Ld,x="onPointerLeave",m="onPointerEnter",u="pointer"),_=w==null?h:nr(w),g=v==null?h:nr(v),h=new b(x,u+"leave",w,n,p),h.target=_,h.relatedTarget=g,x=null,$n(p)===d&&(b=new b(m,u+"enter",v,n,p),b.target=g,b.relatedTarget=_,x=b),_=x,w&&v)t:{for(b=w,m=v,u=0,g=b;g;g=Wn(g))u++;for(g=0,x=m;x;x=Wn(x))g++;for(;0<u-g;)b=Wn(b),u--;for(;0<g-u;)m=Wn(m),g--;for(;u--;){if(b===m||m!==null&&b===m.alternate)break t;b=Wn(b),m=Wn(m)}b=null}else b=null;w!==null&&Qd(f,h,w,b,!1),v!==null&&_!==null&&Qd(f,_,v,b,!0)}}e:{if(h=d?nr(d):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var k=kw;else if(Bd(h))if(pp)k=Sw;else{k=Cw;var C=$w}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Ew);if(k&&(k=k(e,d))){fp(f,k,n,p);break e}C&&C(e,h,d),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Hi(h,"number",h.value)}switch(C=d?nr(d):window,e){case"focusin":(Bd(C)||C.contentEditable==="true")&&(er=C,es=d,oo=null);break;case"focusout":oo=es=er=null;break;case"mousedown":ts=!0;break;case"contextmenu":case"mouseup":case"dragend":ts=!1,Kd(f,n,p);break;case"selectionchange":if(Rw)break;case"keydown":case"keyup":Kd(f,n,p)}var $;if(sc)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Jn?dp(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(cp&&n.locale!=="ko"&&(Jn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Jn&&($=sp()):(Jt=p,lc="value"in Jt?Jt.value:Jt.textContent,Jn=!0)),C=Gl(d,E),0<C.length&&(E=new Od(E,e,null,n,p),f.push({event:E,listeners:C}),$?E.data=$:($=up(n),$!==null&&(E.data=$)))),($=bw?yw(e,n):vw(e,n))&&(d=Gl(d,"onBeforeInput"),0<d.length&&(p=new Od("onBeforeInput","beforeinput",null,n,p),f.push({event:p,listeners:d}),p.data=$))}kp(f,t)})}function vo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=po(e,n),l!=null&&r.unshift(vo(e,l,o)),l=po(e,t),l!=null&&r.push(vo(e,l,o))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qd(e,t,n,r,o){for(var l=t._reactName,a=[];n!==null&&n!==r;){var i=n,c=i.alternate,d=i.stateNode;if(c!==null&&c===r)break;i.tag===5&&d!==null&&(i=d,o?(c=po(n,l),c!=null&&a.unshift(vo(n,c,i))):o||(c=po(n,l),c!=null&&a.push(vo(n,c,i)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Fw=/\r\n?/g,Aw=/\u0000|\uFFFD/g;function Zd(e){return(typeof e=="string"?e:""+e).replace(Fw,`
`).replace(Aw,"")}function rl(e,t,n){if(t=Zd(t),Zd(e)!==t&&n)throw Error(A(425))}function Kl(){}var ns=null,rs=null;function os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ls=typeof setTimeout=="function"?setTimeout:void 0,zw=typeof clearTimeout=="function"?clearTimeout:void 0,Xd=typeof Promise=="function"?Promise:void 0,Ow=typeof queueMicrotask=="function"?queueMicrotask:typeof Xd<"u"?function(e){return Xd.resolve(null).then(e).catch(Lw)}:ls;function Lw(e){setTimeout(function(){throw e})}function pi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),go(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);go(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),kt="__reactFiber$"+Tr,_o="__reactProps$"+Tr,Ot="__reactContainer$"+Tr,as="__reactEvents$"+Tr,Mw="__reactListeners$"+Tr,Dw="__reactHandles$"+Tr;function $n(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qd(e);e!==null;){if(n=e[kt])return n;e=qd(e)}return t}e=n,n=e.parentNode}return null}function zo(e){return e=e[kt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function ya(e){return e[_o]||null}var is=[],rr=-1;function wn(e){return{current:e}}function de(e){0>rr||(e.current=is[rr],is[rr]=null,rr--)}function ae(e,t){rr++,is[rr]=e.current,e.current=t}var un={},Ie=wn(un),Ve=wn(!1),Pn=un;function wr(e,t){var n=e.type.contextTypes;if(!n)return un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function Wl(){de(Ve),de(Ie)}function Jd(e,t,n){if(Ie.current!==un)throw Error(A(168));ae(Ie,t),ae(Ve,n)}function Cp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(A(108,$g(e)||"Unknown",o));return me({},n,r)}function Yl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,Pn=Ie.current,ae(Ie,e),ae(Ve,Ve.current),!0}function eu(e,t,n){var r=e.stateNode;if(!r)throw Error(A(169));n?(e=Cp(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,de(Ve),de(Ie),ae(Ie,e)):de(Ve),ae(Ve,n)}var Pt=null,va=!1,mi=!1;function Ep(e){Pt===null?Pt=[e]:Pt.push(e)}function Bw(e){va=!0,Ep(e)}function bn(){if(!mi&&Pt!==null){mi=!0;var e=0,t=ee;try{var n=Pt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,va=!1}catch(o){throw Pt!==null&&(Pt=Pt.slice(e+1)),Xf(tc,bn),o}finally{ee=t,mi=!1}}return null}var or=[],lr=0,Ql=null,Zl=0,rt=[],ot=0,In=null,It=1,Ft="";function xn(e,t){or[lr++]=Zl,or[lr++]=Ql,Ql=e,Zl=t}function Sp(e,t,n){rt[ot++]=It,rt[ot++]=Ft,rt[ot++]=In,In=e;var r=It;e=Ft;var o=32-gt(r)-1;r&=~(1<<o),n+=1;var l=32-gt(t)+o;if(30<l){var a=o-o%5;l=(r&(1<<a)-1).toString(32),r>>=a,o-=a,It=1<<32-gt(t)+o|n<<o|r,Ft=l+e}else It=1<<l|n<<o|r,Ft=e}function dc(e){e.return!==null&&(xn(e,1),Sp(e,1,0))}function uc(e){for(;e===Ql;)Ql=or[--lr],or[lr]=null,Zl=or[--lr],or[lr]=null;for(;e===In;)In=rt[--ot],rt[ot]=null,Ft=rt[--ot],rt[ot]=null,It=rt[--ot],rt[ot]=null}var Xe=null,Qe=null,ue=!1,ht=null;function Tp(e,t){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Qe=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:It,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Qe=null,!0):!1;default:return!1}}function ss(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cs(e){if(ue){var t=Qe;if(t){var n=t;if(!tu(e,t)){if(ss(e))throw Error(A(418));t=on(n.nextSibling);var r=Xe;t&&tu(e,t)?Tp(r,n):(e.flags=e.flags&-4097|2,ue=!1,Xe=e)}}else{if(ss(e))throw Error(A(418));e.flags=e.flags&-4097|2,ue=!1,Xe=e}}}function nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function ol(e){if(e!==Xe)return!1;if(!ue)return nu(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!os(e.type,e.memoizedProps)),t&&(t=Qe)){if(ss(e))throw jp(),Error(A(418));for(;t;)Tp(e,t),t=on(t.nextSibling)}if(nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Xe?on(e.stateNode.nextSibling):null;return!0}function jp(){for(var e=Qe;e;)e=on(e.nextSibling)}function br(){Qe=Xe=null,ue=!1}function fc(e){ht===null?ht=[e]:ht.push(e)}var Hw=Ut.ReactCurrentBatchConfig;function pt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Xl=wn(null),ql=null,ar=null,pc=null;function mc(){pc=ar=ql=null}function hc(e){var t=Xl.current;de(Xl),e._currentValue=t}function ds(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pr(e,t){ql=e,pc=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(He=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(pc!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(ql===null)throw Error(A(308));ar=e,ql.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var Cn=null;function gc(e){Cn===null?Cn=[e]:Cn.push(e)}function Rp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,gc(t)):(n.next=o.next,o.next=n),t.interleaved=n,Lt(e,r)}function Lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function wc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Np(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Lt(e,n)}return o=r.interleaved,o===null?(t.next=t,gc(r)):(t.next=o.next,o.next=t),r.interleaved=t,Lt(e,n)}function Cl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nc(e,n)}}function ru(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jl(e,t,n,r){var o=e.updateQueue;Zt=!1;var l=o.firstBaseUpdate,a=o.lastBaseUpdate,i=o.shared.pending;if(i!==null){o.shared.pending=null;var c=i,d=c.next;c.next=null,a===null?l=d:a.next=d,a=c;var p=e.alternate;p!==null&&(p=p.updateQueue,i=p.lastBaseUpdate,i!==a&&(i===null?p.firstBaseUpdate=d:i.next=d,p.lastBaseUpdate=c))}if(l!==null){var f=o.baseState;a=0,p=d=c=null,i=l;do{var h=i.lane,w=i.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:w,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var v=e,b=i;switch(h=t,w=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){f=v.call(w,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,h=typeof v=="function"?v.call(w,f,h):v,h==null)break e;f=me({},f,h);break e;case 2:Zt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[i]:h.push(i))}else w={eventTime:w,lane:h,tag:i.tag,payload:i.payload,callback:i.callback,next:null},p===null?(d=p=w,c=f):p=p.next=w,a|=h;if(i=i.next,i===null){if(i=o.shared.pending,i===null)break;h=i,i=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(p===null&&(c=f),o.baseState=c,o.firstBaseUpdate=d,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);An|=a,e.lanes=a,e.memoizedState=f}}function ou(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(A(191,o));o.call(r)}}}var Pp=new Rf.Component().refs;function us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _a={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oe(),o=sn(e),l=At(r,o);l.payload=t,n!=null&&(l.callback=n),t=ln(e,l,o),t!==null&&(wt(t,e,o,r),Cl(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oe(),o=sn(e),l=At(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ln(e,l,o),t!==null&&(wt(t,e,o,r),Cl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oe(),r=sn(e),o=At(n,r);o.tag=2,t!=null&&(o.callback=t),t=ln(e,o,r),t!==null&&(wt(t,e,r,n),Cl(t,e,r))}};function lu(e,t,n,r,o,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!bo(n,r)||!bo(o,l):!0}function Ip(e,t,n){var r=!1,o=un,l=t.contextType;return typeof l=="object"&&l!==null?l=it(l):(o=Ue(t)?Pn:Ie.current,r=t.contextTypes,l=(r=r!=null)?wr(e,o):un),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_a,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function au(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_a.enqueueReplaceState(t,t.state,null)}function fs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Pp,wc(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=it(l):(l=Ue(t)?Pn:Ie.current,o.context=wr(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(us(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&_a.enqueueReplaceState(o,o.state,null),Jl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var i=o.refs;i===Pp&&(i=o.refs={}),a===null?delete i[l]:i[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,e))}return e}function ll(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function iu(e){var t=e._init;return t(e._payload)}function Fp(e){function t(m,u){if(e){var g=m.deletions;g===null?(m.deletions=[u],m.flags|=16):g.push(u)}}function n(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function r(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function o(m,u){return m=cn(m,u),m.index=0,m.sibling=null,m}function l(m,u,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<u?(m.flags|=2,u):g):(m.flags|=2,u)):(m.flags|=1048576,u)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function i(m,u,g,x){return u===null||u.tag!==6?(u=_i(g,m.mode,x),u.return=m,u):(u=o(u,g),u.return=m,u)}function c(m,u,g,x){var k=g.type;return k===qn?p(m,u,g.props.children,x,g.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Qt&&iu(k)===u.type)?(x=o(u,g.props),x.ref=Ur(m,u,g),x.return=m,x):(x=Nl(g.type,g.key,g.props,null,m.mode,x),x.ref=Ur(m,u,g),x.return=m,x)}function d(m,u,g,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==g.containerInfo||u.stateNode.implementation!==g.implementation?(u=xi(g,m.mode,x),u.return=m,u):(u=o(u,g.children||[]),u.return=m,u)}function p(m,u,g,x,k){return u===null||u.tag!==7?(u=Nn(g,m.mode,x,k),u.return=m,u):(u=o(u,g),u.return=m,u)}function f(m,u,g){if(typeof u=="string"&&u!==""||typeof u=="number")return u=_i(""+u,m.mode,g),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Yo:return g=Nl(u.type,u.key,u.props,null,m.mode,g),g.ref=Ur(m,null,u),g.return=m,g;case Xn:return u=xi(u,m.mode,g),u.return=m,u;case Qt:var x=u._init;return f(m,x(u._payload),g)}if(Zr(u)||Mr(u))return u=Nn(u,m.mode,g,null),u.return=m,u;ll(m,u)}return null}function h(m,u,g,x){var k=u!==null?u.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:i(m,u,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yo:return g.key===k?c(m,u,g,x):null;case Xn:return g.key===k?d(m,u,g,x):null;case Qt:return k=g._init,h(m,u,k(g._payload),x)}if(Zr(g)||Mr(g))return k!==null?null:p(m,u,g,x,null);ll(m,g)}return null}function w(m,u,g,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(g)||null,i(u,m,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Yo:return m=m.get(x.key===null?g:x.key)||null,c(u,m,x,k);case Xn:return m=m.get(x.key===null?g:x.key)||null,d(u,m,x,k);case Qt:var C=x._init;return w(m,u,g,C(x._payload),k)}if(Zr(x)||Mr(x))return m=m.get(g)||null,p(u,m,x,k,null);ll(u,x)}return null}function v(m,u,g,x){for(var k=null,C=null,$=u,E=u=0,z=null;$!==null&&E<g.length;E++){$.index>E?(z=$,$=null):z=$.sibling;var S=h(m,$,g[E],x);if(S===null){$===null&&($=z);break}e&&$&&S.alternate===null&&t(m,$),u=l(S,u,E),C===null?k=S:C.sibling=S,C=S,$=z}if(E===g.length)return n(m,$),ue&&xn(m,E),k;if($===null){for(;E<g.length;E++)$=f(m,g[E],x),$!==null&&(u=l($,u,E),C===null?k=$:C.sibling=$,C=$);return ue&&xn(m,E),k}for($=r(m,$);E<g.length;E++)z=w($,m,E,g[E],x),z!==null&&(e&&z.alternate!==null&&$.delete(z.key===null?E:z.key),u=l(z,u,E),C===null?k=z:C.sibling=z,C=z);return e&&$.forEach(function(F){return t(m,F)}),ue&&xn(m,E),k}function b(m,u,g,x){var k=Mr(g);if(typeof k!="function")throw Error(A(150));if(g=k.call(g),g==null)throw Error(A(151));for(var C=k=null,$=u,E=u=0,z=null,S=g.next();$!==null&&!S.done;E++,S=g.next()){$.index>E?(z=$,$=null):z=$.sibling;var F=h(m,$,S.value,x);if(F===null){$===null&&($=z);break}e&&$&&F.alternate===null&&t(m,$),u=l(F,u,E),C===null?k=F:C.sibling=F,C=F,$=z}if(S.done)return n(m,$),ue&&xn(m,E),k;if($===null){for(;!S.done;E++,S=g.next())S=f(m,S.value,x),S!==null&&(u=l(S,u,E),C===null?k=S:C.sibling=S,C=S);return ue&&xn(m,E),k}for($=r(m,$);!S.done;E++,S=g.next())S=w($,m,E,S.value,x),S!==null&&(e&&S.alternate!==null&&$.delete(S.key===null?E:S.key),u=l(S,u,E),C===null?k=S:C.sibling=S,C=S);return e&&$.forEach(function(T){return t(m,T)}),ue&&xn(m,E),k}function _(m,u,g,x){if(typeof g=="object"&&g!==null&&g.type===qn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Yo:e:{for(var k=g.key,C=u;C!==null;){if(C.key===k){if(k=g.type,k===qn){if(C.tag===7){n(m,C.sibling),u=o(C,g.props.children),u.return=m,m=u;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Qt&&iu(k)===C.type){n(m,C.sibling),u=o(C,g.props),u.ref=Ur(m,C,g),u.return=m,m=u;break e}n(m,C);break}else t(m,C);C=C.sibling}g.type===qn?(u=Nn(g.props.children,m.mode,x,g.key),u.return=m,m=u):(x=Nl(g.type,g.key,g.props,null,m.mode,x),x.ref=Ur(m,u,g),x.return=m,m=x)}return a(m);case Xn:e:{for(C=g.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===g.containerInfo&&u.stateNode.implementation===g.implementation){n(m,u.sibling),u=o(u,g.children||[]),u.return=m,m=u;break e}else{n(m,u);break}else t(m,u);u=u.sibling}u=xi(g,m.mode,x),u.return=m,m=u}return a(m);case Qt:return C=g._init,_(m,u,C(g._payload),x)}if(Zr(g))return v(m,u,g,x);if(Mr(g))return b(m,u,g,x);ll(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,u!==null&&u.tag===6?(n(m,u.sibling),u=o(u,g),u.return=m,m=u):(n(m,u),u=_i(g,m.mode,x),u.return=m,m=u),a(m)):n(m,u)}return _}var yr=Fp(!0),Ap=Fp(!1),Oo={},Et=wn(Oo),xo=wn(Oo),ko=wn(Oo);function En(e){if(e===Oo)throw Error(A(174));return e}function bc(e,t){switch(ae(ko,t),ae(xo,e),ae(Et,Oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ui(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ui(t,e)}de(Et),ae(Et,t)}function vr(){de(Et),de(xo),de(ko)}function zp(e){En(ko.current);var t=En(Et.current),n=Ui(t,e.type);t!==n&&(ae(xo,e),ae(Et,n))}function yc(e){xo.current===e&&(de(Et),de(xo))}var fe=wn(0);function ea(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hi=[];function vc(){for(var e=0;e<hi.length;e++)hi[e]._workInProgressVersionPrimary=null;hi.length=0}var El=Ut.ReactCurrentDispatcher,gi=Ut.ReactCurrentBatchConfig,Fn=0,pe=null,ye=null,$e=null,ta=!1,lo=!1,$o=0,Vw=0;function Re(){throw Error(A(321))}function _c(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function xc(e,t,n,r,o,l){if(Fn=l,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,El.current=e===null||e.memoizedState===null?Ww:Yw,e=n(r,o),lo){l=0;do{if(lo=!1,$o=0,25<=l)throw Error(A(301));l+=1,$e=ye=null,t.updateQueue=null,El.current=Qw,e=n(r,o)}while(lo)}if(El.current=na,t=ye!==null&&ye.next!==null,Fn=0,$e=ye=pe=null,ta=!1,t)throw Error(A(300));return e}function kc(){var e=$o!==0;return $o=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?pe.memoizedState=$e=e:$e=$e.next=e,$e}function st(){if(ye===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=$e===null?pe.memoizedState:$e.next;if(t!==null)$e=t,ye=e;else{if(e===null)throw Error(A(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},$e===null?pe.memoizedState=$e=e:$e=$e.next=e}return $e}function Co(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=st(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=ye,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var a=o.next;o.next=l.next,l.next=a}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var i=a=null,c=null,d=l;do{var p=d.lane;if((Fn&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(i=c=f,a=r):c=c.next=f,pe.lanes|=p,An|=p}d=d.next}while(d!==null&&d!==l);c===null?a=r:c.next=i,yt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,pe.lanes|=l,An|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bi(e){var t=st(),n=t.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do l=e(l,a.action),a=a.next;while(a!==o);yt(l,t.memoizedState)||(He=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Op(){}function Lp(e,t){var n=pe,r=st(),o=t(),l=!yt(r.memoizedState,o);if(l&&(r.memoizedState=o,He=!0),r=r.queue,$c(Bp.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Eo(9,Dp.bind(null,n,r,o,t),void 0,null),Ce===null)throw Error(A(349));Fn&30||Mp(n,t,o)}return o}function Mp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Dp(e,t,n,r){t.value=n,t.getSnapshot=r,Hp(t)&&Vp(e)}function Bp(e,t,n){return n(function(){Hp(t)&&Vp(e)})}function Hp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function Vp(e){var t=Lt(e,1);t!==null&&wt(t,e,1,-1)}function su(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:e},t.queue=e,e=e.dispatch=Kw.bind(null,pe,e),[t.memoizedState,e]}function Eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Up(){return st().memoizedState}function Sl(e,t,n,r){var o=xt();pe.flags|=e,o.memoizedState=Eo(1|t,n,void 0,r===void 0?null:r)}function xa(e,t,n,r){var o=st();r=r===void 0?null:r;var l=void 0;if(ye!==null){var a=ye.memoizedState;if(l=a.destroy,r!==null&&_c(r,a.deps)){o.memoizedState=Eo(t,n,l,r);return}}pe.flags|=e,o.memoizedState=Eo(1|t,n,l,r)}function cu(e,t){return Sl(8390656,8,e,t)}function $c(e,t){return xa(2048,8,e,t)}function Gp(e,t){return xa(4,2,e,t)}function Kp(e,t){return xa(4,4,e,t)}function Wp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yp(e,t,n){return n=n!=null?n.concat([e]):null,xa(4,4,Wp.bind(null,t,e),n)}function Cc(){}function Qp(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_c(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zp(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_c(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Xp(e,t,n){return Fn&21?(yt(n,t)||(n=ep(),pe.lanes|=n,An|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=n)}function Uw(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=gi.transition;gi.transition={};try{e(!1),t()}finally{ee=n,gi.transition=r}}function qp(){return st().memoizedState}function Gw(e,t,n){var r=sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jp(e))em(t,n);else if(n=Rp(e,t,n,r),n!==null){var o=Oe();wt(n,e,r,o),tm(n,t,r)}}function Kw(e,t,n){var r=sn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jp(e))em(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,i=l(a,n);if(o.hasEagerState=!0,o.eagerState=i,yt(i,a)){var c=t.interleaved;c===null?(o.next=o,gc(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=Rp(e,t,o,r),n!==null&&(o=Oe(),wt(n,e,r,o),tm(n,t,r))}}function Jp(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function em(e,t){lo=ta=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nc(e,n)}}var na={readContext:it,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Ww={readContext:it,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:cu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4194308,4,Wp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Sl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Sl(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gw.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:su,useDebugValue:Cc,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=su(!1),t=e[0];return e=Uw.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,o=xt();if(ue){if(n===void 0)throw Error(A(407));n=n()}else{if(n=t(),Ce===null)throw Error(A(349));Fn&30||Mp(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,cu(Bp.bind(null,r,l,e),[e]),r.flags|=2048,Eo(9,Dp.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=xt(),t=Ce.identifierPrefix;if(ue){var n=Ft,r=It;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$o++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yw={readContext:it,useCallback:Qp,useContext:it,useEffect:$c,useImperativeHandle:Yp,useInsertionEffect:Gp,useLayoutEffect:Kp,useMemo:Zp,useReducer:wi,useRef:Up,useState:function(){return wi(Co)},useDebugValue:Cc,useDeferredValue:function(e){var t=st();return Xp(t,ye.memoizedState,e)},useTransition:function(){var e=wi(Co)[0],t=st().memoizedState;return[e,t]},useMutableSource:Op,useSyncExternalStore:Lp,useId:qp,unstable_isNewReconciler:!1},Qw={readContext:it,useCallback:Qp,useContext:it,useEffect:$c,useImperativeHandle:Yp,useInsertionEffect:Gp,useLayoutEffect:Kp,useMemo:Zp,useReducer:bi,useRef:Up,useState:function(){return bi(Co)},useDebugValue:Cc,useDeferredValue:function(e){var t=st();return ye===null?t.memoizedState=e:Xp(t,ye.memoizedState,e)},useTransition:function(){var e=bi(Co)[0],t=st().memoizedState;return[e,t]},useMutableSource:Op,useSyncExternalStore:Lp,useId:qp,unstable_isNewReconciler:!1};function _r(e,t){try{var n="",r=t;do n+=kg(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ps(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zw=typeof WeakMap=="function"?WeakMap:Map;function nm(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oa||(oa=!0,ks=r),ps(e,t)},n}function rm(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ps(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ps(e,t),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function du(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zw;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=db.bind(null,e,t,n),t.then(e,e))}function uu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,ln(n,t,1))),n.lanes|=1),e)}var Xw=Ut.ReactCurrentOwner,He=!1;function Ae(e,t,n,r){t.child=e===null?Ap(t,null,n,r):yr(t,e.child,n,r)}function pu(e,t,n,r,o){n=n.render;var l=t.ref;return pr(t,o),r=xc(e,t,n,r,l,o),n=kc(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(ue&&n&&dc(t),t.flags|=1,Ae(e,t,r,o),t.child)}function mu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ic(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,om(e,t,l,r,o)):(e=Nl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(a,r)&&e.ref===t.ref)return Mt(e,t,o)}return t.flags|=1,e=cn(l,r),e.ref=t.ref,e.return=t,t.child=e}function om(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(bo(l,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(He=!0);else return t.lanes=e.lanes,Mt(e,t,o)}return ms(e,t,n,r,o)}function lm(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(sr,We),We|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(sr,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ae(sr,We),We|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ae(sr,We),We|=r;return Ae(e,t,o,n),t.child}function am(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ms(e,t,n,r,o){var l=Ue(n)?Pn:Ie.current;return l=wr(t,l),pr(t,o),n=xc(e,t,n,r,l,o),r=kc(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(ue&&r&&dc(t),t.flags|=1,Ae(e,t,n,o),t.child)}function hu(e,t,n,r,o){if(Ue(n)){var l=!0;Yl(t)}else l=!1;if(pr(t,o),t.stateNode===null)Tl(e,t),Ip(t,n,r),fs(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,i=t.memoizedProps;a.props=i;var c=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=it(d):(d=Ue(n)?Pn:Ie.current,d=wr(t,d));var p=n.getDerivedStateFromProps,f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==r||c!==d)&&au(t,a,r,d),Zt=!1;var h=t.memoizedState;a.state=h,Jl(t,r,a,o),c=t.memoizedState,i!==r||h!==c||Ve.current||Zt?(typeof p=="function"&&(us(t,n,p,r),c=t.memoizedState),(i=Zt||lu(t,n,i,r,h,c,d))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=d,r=i):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Np(e,t),i=t.memoizedProps,d=t.type===t.elementType?i:pt(t.type,i),a.props=d,f=t.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=it(c):(c=Ue(n)?Pn:Ie.current,c=wr(t,c));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==f||h!==c)&&au(t,a,r,c),Zt=!1,h=t.memoizedState,a.state=h,Jl(t,r,a,o);var v=t.memoizedState;i!==f||h!==v||Ve.current||Zt?(typeof w=="function"&&(us(t,n,w,r),v=t.memoizedState),(d=Zt||lu(t,n,d,r,h,v,c)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=c,r=d):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return hs(e,t,n,r,l,o)}function hs(e,t,n,r,o,l){am(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&eu(t,n,!1),Mt(e,t,l);r=t.stateNode,Xw.current=t;var i=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=yr(t,e.child,null,l),t.child=yr(t,null,i,l)):Ae(e,t,i,l),t.memoizedState=r.state,o&&eu(t,n,!0),t.child}function im(e){var t=e.stateNode;t.pendingContext?Jd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jd(e,t.context,!1),bc(e,t.containerInfo)}function gu(e,t,n,r,o){return br(),fc(o),t.flags|=256,Ae(e,t,n,r),t.child}var gs={dehydrated:null,treeContext:null,retryLane:0};function ws(e){return{baseLanes:e,cachePool:null,transitions:null}}function sm(e,t,n){var r=t.pendingProps,o=fe.current,l=!1,a=(t.flags&128)!==0,i;if((i=a)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!==0),i?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ae(fe,o&1),e===null)return cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Ca(a,r,0,null),e=Nn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ws(n),t.memoizedState=gs,e):Ec(t,a));if(o=e.memoizedState,o!==null&&(i=o.dehydrated,i!==null))return qw(e,t,a,r,i,o,n);if(l){l=r.fallback,a=t.mode,o=e.child,i=o.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=cn(o,c),r.subtreeFlags=o.subtreeFlags&14680064),i!==null?l=cn(i,l):(l=Nn(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?ws(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=gs,r}return l=e.child,e=l.sibling,r=cn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ec(e,t){return t=Ca({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function al(e,t,n,r){return r!==null&&fc(r),yr(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qw(e,t,n,r,o,l,a){if(n)return t.flags&256?(t.flags&=-257,r=yi(Error(A(422))),al(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Ca({mode:"visible",children:r.children},o,0,null),l=Nn(l,o,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&yr(t,e.child,null,a),t.child.memoizedState=ws(a),t.memoizedState=gs,l);if(!(t.mode&1))return al(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var i=r.dgst;return r=i,l=Error(A(419)),r=yi(l,r,void 0),al(e,t,a,r)}if(i=(a&e.childLanes)!==0,He||i){if(r=Ce,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Lt(e,o),wt(r,e,o,-1))}return Pc(),r=yi(Error(A(421))),al(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ub.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Qe=on(o.nextSibling),Xe=t,ue=!0,ht=null,e!==null&&(rt[ot++]=It,rt[ot++]=Ft,rt[ot++]=In,It=e.id,Ft=e.overflow,In=t),t=Ec(t,r.children),t.flags|=4096,t)}function wu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ds(e.return,t,n)}function vi(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function cm(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Ae(e,t,r.children,n),r=fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wu(e,n,t);else if(e.tag===19)wu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(fe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ea(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),vi(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ea(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}vi(t,!0,n,null,l);break;case"together":vi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,n=cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jw(e,t,n){switch(t.tag){case 3:im(t),br();break;case 5:zp(t);break;case 1:Ue(t.type)&&Yl(t);break;case 4:bc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ae(Xl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?sm(e,t,n):(ae(fe,fe.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);ae(fe,fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return cm(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ae(fe,fe.current),r)break;return null;case 22:case 23:return t.lanes=0,lm(e,t,n)}return Mt(e,t,n)}var dm,bs,um,fm;dm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bs=function(){};um=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,En(Et.current);var l=null;switch(n){case"input":o=Di(e,o),r=Di(e,r),l=[];break;case"select":o=me({},o,{value:void 0}),r=me({},r,{value:void 0}),l=[];break;case"textarea":o=Vi(e,o),r=Vi(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kl)}Gi(n,r);var a;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var i=o[d];for(a in i)i.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(uo.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var c=r[d];if(i=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&c!==i&&(c!=null||i!=null))if(d==="style")if(i){for(a in i)!i.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&i[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(l||(l=[]),l.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(l=l||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(uo.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ce("scroll",e),l||i===c||(l=[])):(l=l||[]).push(d,c))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};fm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function eb(e,t,n){var r=t.pendingProps;switch(uc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ue(t.type)&&Wl(),Ne(t),null;case 3:return r=t.stateNode,vr(),de(Ve),de(Ie),vc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ol(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Es(ht),ht=null))),bs(e,t),Ne(t),null;case 5:yc(t);var o=En(ko.current);if(n=t.type,e!==null&&t.stateNode!=null)um(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(A(166));return Ne(t),null}if(e=En(Et.current),ol(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[kt]=t,r[_o]=l,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(o=0;o<qr.length;o++)ce(qr[o],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":Ed(r,l),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ce("invalid",r);break;case"textarea":Td(r,l),ce("invalid",r)}Gi(n,l),o=null;for(var a in l)if(l.hasOwnProperty(a)){var i=l[a];a==="children"?typeof i=="string"?r.textContent!==i&&(l.suppressHydrationWarning!==!0&&rl(r.textContent,i,e),o=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&rl(r.textContent,i,e),o=["children",""+i]):uo.hasOwnProperty(a)&&i!=null&&a==="onScroll"&&ce("scroll",r)}switch(n){case"input":Qo(r),Sd(r,l,!0);break;case"textarea":Qo(r),jd(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Kl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[kt]=t,e[_o]=r,dm(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ki(n,r),n){case"dialog":ce("cancel",e),ce("close",e),o=r;break;case"iframe":case"object":case"embed":ce("load",e),o=r;break;case"video":case"audio":for(o=0;o<qr.length;o++)ce(qr[o],e);o=r;break;case"source":ce("error",e),o=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),o=r;break;case"details":ce("toggle",e),o=r;break;case"input":Ed(e,r),o=Di(e,r),ce("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=me({},r,{value:void 0}),ce("invalid",e);break;case"textarea":Td(e,r),o=Vi(e,r),ce("invalid",e);break;default:o=r}Gi(n,o),i=o;for(l in i)if(i.hasOwnProperty(l)){var c=i[l];l==="style"?Hf(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Df(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&fo(e,c):typeof c=="number"&&fo(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(uo.hasOwnProperty(l)?c!=null&&l==="onScroll"&&ce("scroll",e):c!=null&&Zs(e,l,c,a))}switch(n){case"input":Qo(e),Sd(e,r,!1);break;case"textarea":Qo(e),jd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+dn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?cr(e,!!r.multiple,l,!1):r.defaultValue!=null&&cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Kl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)fm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(A(166));if(n=En(ko.current),En(Et.current),ol(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(l=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:rl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return Ne(t),null;case 13:if(de(fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&Qe!==null&&t.mode&1&&!(t.flags&128))jp(),br(),t.flags|=98560,l=!1;else if(l=ol(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(A(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(A(317));l[kt]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),l=!1}else ht!==null&&(Es(ht),ht=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?ve===0&&(ve=3):Pc())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return vr(),bs(e,t),e===null&&yo(t.stateNode.containerInfo),Ne(t),null;case 10:return hc(t.type._context),Ne(t),null;case 17:return Ue(t.type)&&Wl(),Ne(t),null;case 19:if(de(fe),l=t.memoizedState,l===null)return Ne(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)Gr(l,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ea(e),a!==null){for(t.flags|=128,Gr(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(fe,fe.current&1|2),t.child}e=e.sibling}l.tail!==null&&we()>xr&&(t.flags|=128,r=!0,Gr(l,!1),t.lanes=4194304)}else{if(!r)if(e=ea(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!ue)return Ne(t),null}else 2*we()-l.renderingStartTime>xr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=we(),t.sibling=null,n=fe.current,ae(fe,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return Nc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?We&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function tb(e,t){switch(uc(t),t.tag){case 1:return Ue(t.type)&&Wl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vr(),de(Ve),de(Ie),vc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yc(t),null;case 13:if(de(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(fe),null;case 4:return vr(),null;case 10:return hc(t.type._context),null;case 22:case 23:return Nc(),null;case 24:return null;default:return null}}var il=!1,Pe=!1,nb=typeof WeakSet=="function"?WeakSet:Set,D=null;function ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function ys(e,t,n){try{n()}catch(r){he(e,t,r)}}var bu=!1;function rb(e,t){if(ns=Vl,e=gp(),cc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,i=-1,c=-1,d=0,p=0,f=e,h=null;t:for(;;){for(var w;f!==n||o!==0&&f.nodeType!==3||(i=a+o),f!==l||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(w=f.firstChild)!==null;)h=f,f=w;for(;;){if(f===e)break t;if(h===n&&++d===o&&(i=a),h===l&&++p===r&&(c=a),(w=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=w}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(rs={focusedElem:e,selectionRange:n},Vl=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,_=v.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?b:pt(t.type,b),_);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(x){he(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return v=bu,bu=!1,v}function ao(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ys(t,n,l)}o=o.next}while(o!==r)}}function ka(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pm(e){var t=e.alternate;t!==null&&(e.alternate=null,pm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[_o],delete t[as],delete t[Mw],delete t[Dw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mm(e){return e.tag===5||e.tag===3||e.tag===4}function yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _s(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kl));else if(r!==4&&(e=e.child,e!==null))for(_s(e,t,n),e=e.sibling;e!==null;)_s(e,t,n),e=e.sibling}function xs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xs(e,t,n),e=e.sibling;e!==null;)xs(e,t,n),e=e.sibling}var Se=null,mt=!1;function Kt(e,t,n){for(n=n.child;n!==null;)hm(e,t,n),n=n.sibling}function hm(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(ha,n)}catch{}switch(n.tag){case 5:Pe||ir(n,t);case 6:var r=Se,o=mt;Se=null,Kt(e,t,n),Se=r,mt=o,Se!==null&&(mt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(mt?(e=Se,n=n.stateNode,e.nodeType===8?pi(e.parentNode,n):e.nodeType===1&&pi(e,n),go(e)):pi(Se,n.stateNode));break;case 4:r=Se,o=mt,Se=n.stateNode.containerInfo,mt=!0,Kt(e,t,n),Se=r,mt=o;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&ys(n,t,a),o=o.next}while(o!==r)}Kt(e,t,n);break;case 1:if(!Pe&&(ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){he(n,t,i)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Kt(e,t,n),Pe=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function vu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nb),t.forEach(function(r){var o=fb.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,a=t,i=a;e:for(;i!==null;){switch(i.tag){case 5:Se=i.stateNode,mt=!1;break e;case 3:Se=i.stateNode.containerInfo,mt=!0;break e;case 4:Se=i.stateNode.containerInfo,mt=!0;break e}i=i.return}if(Se===null)throw Error(A(160));hm(l,a,o),Se=null,mt=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(d){he(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gm(t,e),t=t.sibling}function gm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),_t(e),r&4){try{ao(3,e,e.return),ka(3,e)}catch(b){he(e,e.return,b)}try{ao(5,e,e.return)}catch(b){he(e,e.return,b)}}break;case 1:ut(t,e),_t(e),r&512&&n!==null&&ir(n,n.return);break;case 5:if(ut(t,e),_t(e),r&512&&n!==null&&ir(n,n.return),e.flags&32){var o=e.stateNode;try{fo(o,"")}catch(b){he(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&Of(o,l),Ki(i,a);var d=Ki(i,l);for(a=0;a<c.length;a+=2){var p=c[a],f=c[a+1];p==="style"?Hf(o,f):p==="dangerouslySetInnerHTML"?Df(o,f):p==="children"?fo(o,f):Zs(o,p,f,d)}switch(i){case"input":Bi(o,l);break;case"textarea":Lf(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?cr(o,!!l.multiple,w,!1):h!==!!l.multiple&&(l.defaultValue!=null?cr(o,!!l.multiple,l.defaultValue,!0):cr(o,!!l.multiple,l.multiple?[]:"",!1))}o[_o]=l}catch(b){he(e,e.return,b)}}break;case 6:if(ut(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(A(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(b){he(e,e.return,b)}}break;case 3:if(ut(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(t.containerInfo)}catch(b){he(e,e.return,b)}break;case 4:ut(t,e),_t(e);break;case 13:ut(t,e),_t(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(jc=we())),r&4&&vu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(d=Pe)||p,ut(t,e),Pe=d):ut(t,e),_t(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(D=e,p=e.child;p!==null;){for(f=D=p;D!==null;){switch(h=D,w=h.child,h.tag){case 0:case 11:case 14:case 15:ao(4,h,h.return);break;case 1:ir(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){he(r,n,b)}}break;case 5:ir(h,h.return);break;case 22:if(h.memoizedState!==null){xu(f);continue}}w!==null?(w.return=h,D=w):xu(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{o=f.stateNode,d?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=Bf("display",a))}catch(b){he(e,e.return,b)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(b){he(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ut(t,e),_t(e),r&4&&vu(e);break;case 21:break;default:ut(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(mm(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(fo(o,""),r.flags&=-33);var l=yu(e);xs(e,l,o);break;case 3:case 4:var a=r.stateNode.containerInfo,i=yu(e);_s(e,i,a);break;default:throw Error(A(161))}}catch(c){he(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ob(e,t,n){D=e,wm(e)}function wm(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,l=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||il;if(!a){var i=o.alternate,c=i!==null&&i.memoizedState!==null||Pe;i=il;var d=Pe;if(il=a,(Pe=c)&&!d)for(D=o;D!==null;)a=D,c=a.child,a.tag===22&&a.memoizedState!==null?ku(o):c!==null?(c.return=a,D=c):ku(o);for(;l!==null;)D=l,wm(l),l=l.sibling;D=o,il=i,Pe=d}_u(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,D=l):_u(e)}}function _u(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||ka(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ou(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ou(t,a,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&go(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Pe||t.flags&512&&vs(t)}catch(h){he(t,t.return,h)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function xu(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function ku(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ka(4,t)}catch(c){he(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){he(t,o,c)}}var l=t.return;try{vs(t)}catch(c){he(t,l,c)}break;case 5:var a=t.return;try{vs(t)}catch(c){he(t,a,c)}}}catch(c){he(t,t.return,c)}if(t===e){D=null;break}var i=t.sibling;if(i!==null){i.return=t.return,D=i;break}D=t.return}}var lb=Math.ceil,ra=Ut.ReactCurrentDispatcher,Sc=Ut.ReactCurrentOwner,at=Ut.ReactCurrentBatchConfig,X=0,Ce=null,be=null,Te=0,We=0,sr=wn(0),ve=0,So=null,An=0,$a=0,Tc=0,io=null,Be=null,jc=0,xr=1/0,Rt=null,oa=!1,ks=null,an=null,sl=!1,en=null,la=0,so=0,$s=null,jl=-1,Rl=0;function Oe(){return X&6?we():jl!==-1?jl:jl=we()}function sn(e){return e.mode&1?X&2&&Te!==0?Te&-Te:Hw.transition!==null?(Rl===0&&(Rl=ep()),Rl):(e=ee,e!==0||(e=window.event,e=e===void 0?16:ip(e.type)),e):1}function wt(e,t,n,r){if(50<so)throw so=0,$s=null,Error(A(185));Fo(e,n,r),(!(X&2)||e!==Ce)&&(e===Ce&&(!(X&2)&&($a|=n),ve===4&&qt(e,Te)),Ge(e,r),n===1&&X===0&&!(t.mode&1)&&(xr=we()+500,va&&bn()))}function Ge(e,t){var n=e.callbackNode;Hg(e,t);var r=Hl(e,e===Ce?Te:0);if(r===0)n!==null&&Pd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pd(n),t===1)e.tag===0?Bw($u.bind(null,e)):Ep($u.bind(null,e)),Ow(function(){!(X&6)&&bn()}),n=null;else{switch(tp(r)){case 1:n=tc;break;case 4:n=qf;break;case 16:n=Bl;break;case 536870912:n=Jf;break;default:n=Bl}n=Cm(n,bm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bm(e,t){if(jl=-1,Rl=0,X&6)throw Error(A(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=Hl(e,e===Ce?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=aa(e,r);else{t=r;var o=X;X|=2;var l=vm();(Ce!==e||Te!==t)&&(Rt=null,xr=we()+500,Rn(e,t));do try{sb();break}catch(i){ym(e,i)}while(1);mc(),ra.current=l,X=o,be!==null?t=0:(Ce=null,Te=0,t=ve)}if(t!==0){if(t===2&&(o=Xi(e),o!==0&&(r=o,t=Cs(e,o))),t===1)throw n=So,Rn(e,0),qt(e,r),Ge(e,we()),n;if(t===6)qt(e,r);else{if(o=e.current.alternate,!(r&30)&&!ab(o)&&(t=aa(e,r),t===2&&(l=Xi(e),l!==0&&(r=l,t=Cs(e,l))),t===1))throw n=So,Rn(e,0),qt(e,r),Ge(e,we()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(A(345));case 2:kn(e,Be,Rt);break;case 3:if(qt(e,r),(r&130023424)===r&&(t=jc+500-we(),10<t)){if(Hl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Oe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ls(kn.bind(null,e,Be,Rt),t);break}kn(e,Be,Rt);break;case 4:if(qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-gt(r);l=1<<a,a=t[a],a>o&&(o=a),r&=~l}if(r=o,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lb(r/1960))-r,10<r){e.timeoutHandle=ls(kn.bind(null,e,Be,Rt),r);break}kn(e,Be,Rt);break;case 5:kn(e,Be,Rt);break;default:throw Error(A(329))}}}return Ge(e,we()),e.callbackNode===n?bm.bind(null,e):null}function Cs(e,t){var n=io;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=aa(e,t),e!==2&&(t=Be,Be=n,t!==null&&Es(t)),e}function Es(e){Be===null?Be=e:Be.push.apply(Be,e)}function ab(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!yt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qt(e,t){for(t&=~Tc,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function $u(e){if(X&6)throw Error(A(327));mr();var t=Hl(e,0);if(!(t&1))return Ge(e,we()),null;var n=aa(e,t);if(e.tag!==0&&n===2){var r=Xi(e);r!==0&&(t=r,n=Cs(e,r))}if(n===1)throw n=So,Rn(e,0),qt(e,t),Ge(e,we()),n;if(n===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Be,Rt),Ge(e,we()),null}function Rc(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(xr=we()+500,va&&bn())}}function zn(e){en!==null&&en.tag===0&&!(X&6)&&mr();var t=X;X|=1;var n=at.transition,r=ee;try{if(at.transition=null,ee=1,e)return e()}finally{ee=r,at.transition=n,X=t,!(X&6)&&bn()}}function Nc(){We=sr.current,de(sr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zw(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(uc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wl();break;case 3:vr(),de(Ve),de(Ie),vc();break;case 5:yc(r);break;case 4:vr();break;case 13:de(fe);break;case 19:de(fe);break;case 10:hc(r.type._context);break;case 22:case 23:Nc()}n=n.return}if(Ce=e,be=e=cn(e.current,null),Te=We=t,ve=0,So=null,Tc=$a=An=0,Be=io=null,Cn!==null){for(t=0;t<Cn.length;t++)if(n=Cn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=o,r.next=a}n.pending=r}Cn=null}return e}function ym(e,t){do{var n=be;try{if(mc(),El.current=na,ta){for(var r=pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ta=!1}if(Fn=0,$e=ye=pe=null,lo=!1,$o=0,Sc.current=null,n===null||n.return===null){ve=1,So=t,be=null;break}e:{var l=e,a=n.return,i=n,c=t;if(t=Te,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=i,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=uu(a);if(w!==null){w.flags&=-257,fu(w,a,i,l,t),w.mode&1&&du(l,d,t),t=w,c=d;var v=t.updateQueue;if(v===null){var b=new Set;b.add(c),t.updateQueue=b}else v.add(c);break e}else{if(!(t&1)){du(l,d,t),Pc();break e}c=Error(A(426))}}else if(ue&&i.mode&1){var _=uu(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),fu(_,a,i,l,t),fc(_r(c,i));break e}}l=c=_r(c,i),ve!==4&&(ve=2),io===null?io=[l]:io.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var m=nm(l,c,t);ru(l,m);break e;case 1:i=c;var u=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(an===null||!an.has(g)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=rm(l,i,t);ru(l,x);break e}}l=l.return}while(l!==null)}xm(n)}catch(k){t=k,be===n&&n!==null&&(be=n=n.return);continue}break}while(1)}function vm(){var e=ra.current;return ra.current=na,e===null?na:e}function Pc(){(ve===0||ve===3||ve===2)&&(ve=4),Ce===null||!(An&268435455)&&!($a&268435455)||qt(Ce,Te)}function aa(e,t){var n=X;X|=2;var r=vm();(Ce!==e||Te!==t)&&(Rt=null,Rn(e,t));do try{ib();break}catch(o){ym(e,o)}while(1);if(mc(),X=n,ra.current=r,be!==null)throw Error(A(261));return Ce=null,Te=0,ve}function ib(){for(;be!==null;)_m(be)}function sb(){for(;be!==null&&!Ig();)_m(be)}function _m(e){var t=$m(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?xm(e):be=t,Sc.current=null}function xm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tb(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,be=null;return}}else if(n=eb(n,t,We),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);ve===0&&(ve=5)}function kn(e,t,n){var r=ee,o=at.transition;try{at.transition=null,ee=1,cb(e,t,n,r)}finally{at.transition=o,ee=r}return null}function cb(e,t,n,r){do mr();while(en!==null);if(X&6)throw Error(A(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Vg(e,l),e===Ce&&(be=Ce=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,Cm(Bl,function(){return mr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=at.transition,at.transition=null;var a=ee;ee=1;var i=X;X|=4,Sc.current=null,rb(e,n),gm(n,e),jw(rs),Vl=!!ns,rs=ns=null,e.current=n,ob(n),Fg(),X=i,ee=a,at.transition=l}else e.current=n;if(sl&&(sl=!1,en=e,la=o),l=e.pendingLanes,l===0&&(an=null),Og(n.stateNode),Ge(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(oa)throw oa=!1,e=ks,ks=null,e;return la&1&&e.tag!==0&&mr(),l=e.pendingLanes,l&1?e===$s?so++:(so=0,$s=e):so=0,bn(),null}function mr(){if(en!==null){var e=tp(la),t=at.transition,n=ee;try{if(at.transition=null,ee=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,la=0,X&6)throw Error(A(331));var o=X;for(X|=4,D=e.current;D!==null;){var l=D,a=l.child;if(D.flags&16){var i=l.deletions;if(i!==null){for(var c=0;c<i.length;c++){var d=i[c];for(D=d;D!==null;){var p=D;switch(p.tag){case 0:case 11:case 15:ao(8,p,l)}var f=p.child;if(f!==null)f.return=p,D=f;else for(;D!==null;){p=D;var h=p.sibling,w=p.return;if(pm(p),p===d){D=null;break}if(h!==null){h.return=w,D=h;break}D=w}}}var v=l.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}D=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,D=a;else e:for(;D!==null;){if(l=D,l.flags&2048)switch(l.tag){case 0:case 11:case 15:ao(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,D=m;break e}D=l.return}}var u=e.current;for(D=u;D!==null;){a=D;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,D=g;else e:for(a=u;D!==null;){if(i=D,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:ka(9,i)}}catch(k){he(i,i.return,k)}if(i===a){D=null;break e}var x=i.sibling;if(x!==null){x.return=i.return,D=x;break e}D=i.return}}if(X=o,bn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(ha,e)}catch{}r=!0}return r}finally{ee=n,at.transition=t}}return!1}function Cu(e,t,n){t=_r(n,t),t=nm(e,t,1),e=ln(e,t,1),t=Oe(),e!==null&&(Fo(e,1,t),Ge(e,t))}function he(e,t,n){if(e.tag===3)Cu(e,e,n);else for(;t!==null;){if(t.tag===3){Cu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=_r(n,e),e=rm(t,e,1),t=ln(t,e,1),e=Oe(),t!==null&&(Fo(t,1,e),Ge(t,e));break}}t=t.return}}function db(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&n,Ce===e&&(Te&n)===n&&(ve===4||ve===3&&(Te&130023424)===Te&&500>we()-jc?Rn(e,0):Tc|=n),Ge(e,t)}function km(e,t){t===0&&(e.mode&1?(t=qo,qo<<=1,!(qo&130023424)&&(qo=4194304)):t=1);var n=Oe();e=Lt(e,t),e!==null&&(Fo(e,t,n),Ge(e,n))}function ub(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),km(e,n)}function fb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(t),km(e,n)}var $m;$m=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)He=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return He=!1,Jw(e,t,n);He=!!(e.flags&131072)}else He=!1,ue&&t.flags&1048576&&Sp(t,Zl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tl(e,t),e=t.pendingProps;var o=wr(t,Ie.current);pr(t,n),o=xc(null,t,r,e,o,n);var l=kc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(l=!0,Yl(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,wc(t),o.updater=_a,t.stateNode=o,o._reactInternals=t,fs(t,r,e,n),t=hs(null,t,r,!0,l,n)):(t.tag=0,ue&&l&&dc(t),Ae(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tl(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=mb(r),e=pt(r,e),o){case 0:t=ms(null,t,r,e,n);break e;case 1:t=hu(null,t,r,e,n);break e;case 11:t=pu(null,t,r,e,n);break e;case 14:t=mu(null,t,r,pt(r.type,e),n);break e}throw Error(A(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),ms(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),hu(e,t,r,o,n);case 3:e:{if(im(t),e===null)throw Error(A(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Np(e,t),Jl(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=_r(Error(A(423)),t),t=gu(e,t,r,n,o);break e}else if(r!==o){o=_r(Error(A(424)),t),t=gu(e,t,r,n,o);break e}else for(Qe=on(t.stateNode.containerInfo.firstChild),Xe=t,ue=!0,ht=null,n=Ap(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===o){t=Mt(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return zp(t),e===null&&cs(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,a=o.children,os(r,o)?a=null:l!==null&&os(r,l)&&(t.flags|=32),am(e,t),Ae(e,t,a,n),t.child;case 6:return e===null&&cs(t),null;case 13:return sm(e,t,n);case 4:return bc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yr(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),pu(e,t,r,o,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value,ae(Xl,r._currentValue),r._currentValue=a,l!==null)if(yt(l.value,a)){if(l.children===o.children&&!Ve.current){t=Mt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){a=l.child;for(var c=i.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=At(-1,n&-n),c.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),ds(l.return,n,t),i.lanes|=n;break}c=c.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(A(341));a.lanes|=n,i=a.alternate,i!==null&&(i.lanes|=n),ds(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}Ae(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,pr(t,n),o=it(o),r=r(o),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,o=pt(r,t.pendingProps),o=pt(r.type,o),mu(e,t,r,o,n);case 15:return om(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),Tl(e,t),t.tag=1,Ue(r)?(e=!0,Yl(t)):e=!1,pr(t,n),Ip(t,r,o),fs(t,r,o,n),hs(null,t,r,!0,e,n);case 19:return cm(e,t,n);case 22:return lm(e,t,n)}throw Error(A(156,t.tag))};function Cm(e,t){return Xf(e,t)}function pb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,n,r){return new pb(e,t,n,r)}function Ic(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mb(e){if(typeof e=="function")return Ic(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qs)return 11;if(e===Js)return 14}return 2}function cn(e,t){var n=e.alternate;return n===null?(n=lt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nl(e,t,n,r,o,l){var a=2;if(r=e,typeof e=="function")Ic(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case qn:return Nn(n.children,o,l,t);case Xs:a=8,o|=8;break;case zi:return e=lt(12,n,t,o|2),e.elementType=zi,e.lanes=l,e;case Oi:return e=lt(13,n,t,o),e.elementType=Oi,e.lanes=l,e;case Li:return e=lt(19,n,t,o),e.elementType=Li,e.lanes=l,e;case Ff:return Ca(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pf:a=10;break e;case If:a=9;break e;case qs:a=11;break e;case Js:a=14;break e;case Qt:a=16,r=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=lt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Nn(e,t,n,r){return e=lt(7,e,r,t),e.lanes=n,e}function Ca(e,t,n,r){return e=lt(22,e,r,t),e.elementType=Ff,e.lanes=n,e.stateNode={isHidden:!1},e}function _i(e,t,n){return e=lt(6,e,null,t),e.lanes=n,e}function xi(e,t,n){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hb(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ni(0),this.expirationTimes=ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,r,o,l,a,i,c){return e=new hb(e,t,n,i,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=lt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(l),e}function gb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Em(e){if(!e)return un;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Cp(e,n,t)}return t}function Sm(e,t,n,r,o,l,a,i,c){return e=Fc(n,r,!0,e,o,l,a,i,c),e.context=Em(null),n=e.current,r=Oe(),o=sn(n),l=At(r,o),l.callback=t??null,ln(n,l,o),e.current.lanes=o,Fo(e,o,r),Ge(e,r),e}function Ea(e,t,n,r){var o=t.current,l=Oe(),a=sn(o);return n=Em(n),t.context===null?t.context=n:t.pendingContext=n,t=At(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ln(o,t,a),e!==null&&(wt(e,o,a,l),Cl(e,o,a)),a}function ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Eu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ac(e,t){Eu(e,t),(e=e.alternate)&&Eu(e,t)}function wb(){return null}var Tm=typeof reportError=="function"?reportError:function(e){console.error(e)};function zc(e){this._internalRoot=e}Sa.prototype.render=zc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));Ea(e,t,null,null)};Sa.prototype.unmount=zc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zn(function(){Ea(null,e,null,null)}),t[Ot]=null}};function Sa(e){this._internalRoot=e}Sa.prototype.unstable_scheduleHydration=function(e){if(e){var t=op();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&ap(e)}};function Oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Su(){}function bb(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var d=ia(a);l.call(d)}}var a=Sm(t,r,e,0,null,!1,!1,"",Su);return e._reactRootContainer=a,e[Ot]=a.current,yo(e.nodeType===8?e.parentNode:e),zn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var i=r;r=function(){var d=ia(c);i.call(d)}}var c=Fc(e,0,!1,null,null,!1,!1,"",Su);return e._reactRootContainer=c,e[Ot]=c.current,yo(e.nodeType===8?e.parentNode:e),zn(function(){Ea(t,c,n,r)}),c}function ja(e,t,n,r,o){var l=n._reactRootContainer;if(l){var a=l;if(typeof o=="function"){var i=o;o=function(){var c=ia(a);i.call(c)}}Ea(t,a,e,o)}else a=bb(n,t,e,o,r);return ia(a)}np=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xr(t.pendingLanes);n!==0&&(nc(t,n|1),Ge(t,we()),!(X&6)&&(xr=we()+500,bn()))}break;case 13:zn(function(){var r=Lt(e,1);if(r!==null){var o=Oe();wt(r,e,1,o)}}),Ac(e,1)}};rc=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var n=Oe();wt(t,e,134217728,n)}Ac(e,134217728)}};rp=function(e){if(e.tag===13){var t=sn(e),n=Lt(e,t);if(n!==null){var r=Oe();wt(n,e,t,r)}Ac(e,t)}};op=function(){return ee};lp=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};Yi=function(e,t,n){switch(t){case"input":if(Bi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ya(r);if(!o)throw Error(A(90));zf(r),Bi(r,o)}}}break;case"textarea":Lf(e,n);break;case"select":t=n.value,t!=null&&cr(e,!!n.multiple,t,!1)}};Gf=Rc;Kf=zn;var yb={usingClientEntryPoint:!1,Events:[zo,nr,ya,Vf,Uf,Rc]},Kr={findFiberByHostInstance:$n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vb={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qf(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||wb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{ha=cl.inject(vb),Ct=cl}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yb;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oc(t))throw Error(A(200));return gb(e,t,null,n)};tt.createRoot=function(e,t){if(!Oc(e))throw Error(A(299));var n=!1,r="",o=Tm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Fc(e,1,!1,null,null,n,!1,r,o),e[Ot]=t.current,yo(e.nodeType===8?e.parentNode:e),new zc(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=Qf(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return zn(e)};tt.hydrate=function(e,t,n){if(!Ta(t))throw Error(A(200));return ja(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!Oc(e))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",a=Tm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Sm(t,null,e,1,n??null,o,!1,l,a),e[Ot]=t.current,yo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Sa(t)};tt.render=function(e,t,n){if(!Ta(t))throw Error(A(200));return ja(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!Ta(e))throw Error(A(40));return e._reactRootContainer?(zn(function(){ja(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};tt.unstable_batchedUpdates=Rc;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ta(n))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return ja(e,t,n,!1,r)};tt.version="18.2.0-next-9e3b772b8-20220608";function jm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jm)}catch(e){console.error(e)}}jm(),Sf.exports=tt;var yn=Sf.exports;const _b=gf(yn);var Tu=yn;Fi.createRoot=Tu.createRoot,Fi.hydrateRoot=Tu.hydrateRoot;function Rm(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Rm(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Nm(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Rm(e))&&(r&&(r+=" "),r+=t);return r}function xb(){for(var e=0,t,n,r="";e<arguments.length;)(t=arguments[e++])&&(n=Pm(t))&&(r&&(r+=" "),r+=n);return r}function Pm(e){if(typeof e=="string")return e;for(var t,n="",r=0;r<e.length;r++)e[r]&&(t=Pm(e[r]))&&(n&&(n+=" "),n+=t);return n}var Lc="-";function kb(e){var t=Cb(e),n=e.conflictingClassGroups,r=e.conflictingClassGroupModifiers,o=r===void 0?{}:r;function l(i){var c=i.split(Lc);return c[0]===""&&c.length!==1&&c.shift(),Im(c,t)||$b(i)}function a(i,c){var d=n[i]||[];return c&&o[i]?[].concat(d,o[i]):d}return{getClassGroupId:l,getConflictingClassGroupIds:a}}function Im(e,t){var a;if(e.length===0)return t.classGroupId;var n=e[0],r=t.nextPart.get(n),o=r?Im(e.slice(1),r):void 0;if(o)return o;if(t.validators.length!==0){var l=e.join(Lc);return(a=t.validators.find(function(i){var c=i.validator;return c(l)}))==null?void 0:a.classGroupId}}var ju=/^\[(.+)\]$/;function $b(e){if(ju.test(e)){var t=ju.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function Cb(e){var t=e.theme,n=e.prefix,r={nextPart:new Map,validators:[]},o=Sb(Object.entries(e.classGroups),n);return o.forEach(function(l){var a=l[0],i=l[1];Ss(i,r,a,t)}),r}function Ss(e,t,n,r){e.forEach(function(o){if(typeof o=="string"){var l=o===""?t:Ru(t,o);l.classGroupId=n;return}if(typeof o=="function"){if(Eb(o)){Ss(o(r),t,n,r);return}t.validators.push({validator:o,classGroupId:n});return}Object.entries(o).forEach(function(a){var i=a[0],c=a[1];Ss(c,Ru(t,i),n,r)})})}function Ru(e,t){var n=e;return t.split(Lc).forEach(function(r){n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function Eb(e){return e.isThemeGetter}function Sb(e,t){return t?e.map(function(n){var r=n[0],o=n[1],l=o.map(function(a){return typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(function(i){var c=i[0],d=i[1];return[t+c,d]})):a});return[r,l]}):e}function Tb(e){if(e<1)return{get:function(){},set:function(){}};var t=0,n=new Map,r=new Map;function o(l,a){n.set(l,a),t++,t>e&&(t=0,r=n,n=new Map)}return{get:function(a){var i=n.get(a);if(i!==void 0)return i;if((i=r.get(a))!==void 0)return o(a,i),i},set:function(a,i){n.has(a)?n.set(a,i):o(a,i)}}}var Fm="!";function jb(e){var t=e.separator||":",n=t.length===1,r=t[0],o=t.length;return function(a){for(var i=[],c=0,d=0,p,f=0;f<a.length;f++){var h=a[f];if(c===0){if(h===r&&(n||a.slice(f,f+o)===t)){i.push(a.slice(d,f)),d=f+o;continue}if(h==="/"){p=f;continue}}h==="["?c++:h==="]"&&c--}var w=i.length===0?a:a.substring(d),v=w.startsWith(Fm),b=v?w.substring(1):w,_=p&&p>d?p-d:void 0;return{modifiers:i,hasImportantModifier:v,baseClassName:b,maybePostfixModifierPosition:_}}}function Rb(e){if(e.length<=1)return e;var t=[],n=[];return e.forEach(function(r){var o=r[0]==="[";o?(t.push.apply(t,n.sort().concat([r])),n=[]):n.push(r)}),t.push.apply(t,n.sort()),t}function Nb(e){return{cache:Tb(e.cacheSize),splitModifiers:jb(e),...kb(e)}}var Pb=/\s+/;function Ib(e,t){var n=t.splitModifiers,r=t.getClassGroupId,o=t.getConflictingClassGroupIds,l=new Set;return e.trim().split(Pb).map(function(a){var i=n(a),c=i.modifiers,d=i.hasImportantModifier,p=i.baseClassName,f=i.maybePostfixModifierPosition,h=r(f?p.substring(0,f):p),w=!!f;if(!h){if(!f)return{isTailwindClass:!1,originalClassName:a};if(h=r(p),!h)return{isTailwindClass:!1,originalClassName:a};w=!1}var v=Rb(c).join(":"),b=d?v+Fm:v;return{isTailwindClass:!0,modifierId:b,classGroupId:h,originalClassName:a,hasPostfixModifier:w}}).reverse().filter(function(a){if(!a.isTailwindClass)return!0;var i=a.modifierId,c=a.classGroupId,d=a.hasPostfixModifier,p=i+c;return l.has(p)?!1:(l.add(p),o(c,d).forEach(function(f){return l.add(i+f)}),!0)}).reverse().map(function(a){return a.originalClassName}).join(" ")}function Fb(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,o,l,a=i;function i(d){var p=t[0],f=t.slice(1),h=f.reduce(function(w,v){return v(w)},p());return r=Nb(h),o=r.cache.get,l=r.cache.set,a=c,c(d)}function c(d){var p=o(d);if(p)return p;var f=Ib(d,r);return l(d,f),f}return function(){return a(xb.apply(null,arguments))}}function se(e){var t=function(r){return r[e]||[]};return t.isThemeGetter=!0,t}var Am=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ab=/^\d+\/\d+$/,zb=new Set(["px","full","screen"]),Ob=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Lb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Mb=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function ft(e){return Sn(e)||zb.has(e)||Ab.test(e)||Ts(e)}function Ts(e){return Vn(e,"length",Gb)}function Db(e){return Vn(e,"size",zm)}function Bb(e){return Vn(e,"position",zm)}function Hb(e){return Vn(e,"url",Kb)}function dl(e){return Vn(e,"number",Sn)}function Sn(e){return!Number.isNaN(Number(e))}function Vb(e){return e.endsWith("%")&&Sn(e.slice(0,-1))}function Wr(e){return Nu(e)||Vn(e,"number",Nu)}function Y(e){return Am.test(e)}function Yr(){return!0}function Wt(e){return Ob.test(e)}function Ub(e){return Vn(e,"",Wb)}function Vn(e,t,n){var r=Am.exec(e);return r?r[1]?r[1]===t:n(r[2]):!1}function Gb(e){return Lb.test(e)}function zm(){return!1}function Kb(e){return e.startsWith("url(")}function Nu(e){return Number.isInteger(Number(e))}function Wb(e){return Mb.test(e)}function Yb(){var e=se("colors"),t=se("spacing"),n=se("blur"),r=se("brightness"),o=se("borderColor"),l=se("borderRadius"),a=se("borderSpacing"),i=se("borderWidth"),c=se("contrast"),d=se("grayscale"),p=se("hueRotate"),f=se("invert"),h=se("gap"),w=se("gradientColorStops"),v=se("gradientColorStopPositions"),b=se("inset"),_=se("margin"),m=se("opacity"),u=se("padding"),g=se("saturate"),x=se("scale"),k=se("sepia"),C=se("skew"),$=se("space"),E=se("translate"),z=function(){return["auto","contain","none"]},S=function(){return["auto","hidden","clip","visible","scroll"]},F=function(){return["auto",Y,t]},T=function(){return[Y,t]},N=function(){return["",ft]},j=function(){return["auto",Sn,Y]},O=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},L=function(){return["solid","dashed","dotted","double","none"]},K=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},P=function(){return["start","end","center","between","around","evenly","stretch"]},R=function(){return["","0",Y]},M=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},V=function(){return[Sn,dl]},U=function(){return[Sn,Y]};return{cacheSize:500,theme:{colors:[Yr],spacing:[ft],blur:["none","",Wt,Y],brightness:V(),borderColor:[e],borderRadius:["none","","full",Wt,Y],borderSpacing:T(),borderWidth:N(),contrast:V(),grayscale:R(),hueRotate:U(),invert:R(),gap:T(),gradientColorStops:[e],gradientColorStopPositions:[Vb,Ts],inset:F(),margin:F(),opacity:V(),padding:T(),saturate:V(),scale:V(),sepia:R(),skew:U(),space:T(),translate:T()},classGroups:{aspect:[{aspect:["auto","square","video",Y]}],container:["container"],columns:[{columns:[Wt]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(O(),[Y])}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Wr]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Y]}],grow:[{grow:R()}],shrink:[{shrink:R()}],order:[{order:["first","last","none",Wr]}],"grid-cols":[{"grid-cols":[Yr]}],"col-start-end":[{col:["auto",{span:["full",Wr]},Y]}],"col-start":[{"col-start":j()}],"col-end":[{"col-end":j()}],"grid-rows":[{"grid-rows":[Yr]}],"row-start-end":[{row:["auto",{span:[Wr]},Y]}],"row-start":[{"row-start":j()}],"row-end":[{"row-end":j()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Y]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Y]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal"].concat(P())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(P(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(P(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[u]}],px:[{px:[u]}],py:[{py:[u]}],ps:[{ps:[u]}],pe:[{pe:[u]}],pt:[{pt:[u]}],pr:[{pr:[u]}],pb:[{pb:[u]}],pl:[{pl:[u]}],m:[{m:[_]}],mx:[{mx:[_]}],my:[{my:[_]}],ms:[{ms:[_]}],me:[{me:[_]}],mt:[{mt:[_]}],mr:[{mr:[_]}],mb:[{mb:[_]}],ml:[{ml:[_]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",Y,t]}],"min-w":[{"min-w":["min","max","fit",Y,ft]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[Wt]},Wt,Y]}],h:[{h:[Y,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",Y,ft]}],"max-h":[{"max-h":[Y,t,"min","max","fit"]}],"font-size":[{text:["base",Wt,Ts]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",dl]}],"font-family":[{font:[Yr]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Y]}],"line-clamp":[{"line-clamp":["none",Sn,dl]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Y,ft]}],"list-image":[{"list-image":["none",Y]}],"list-style-type":[{list:["none","disc","decimal",Y]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(L(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",ft]}],"underline-offset":[{"underline-offset":["auto",Y,ft]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:T()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Y]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Y]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(O(),[Bb])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Db]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Hb]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[].concat(L(),["hidden"])}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:L()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:[""].concat(L())}],"outline-offset":[{"outline-offset":[Y,ft]}],"outline-w":[{outline:[ft]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:N()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[ft]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Wt,Ub]}],"shadow-color":[{shadow:[Yr]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":K()}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",Wt,Y]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[p]}],invert:[{invert:[f]}],saturate:[{saturate:[g]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[p]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[g]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Y]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",Y]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",Y]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[Wr,Y]}],"translate-x":[{"translate-x":[E]}],"translate-y":[{"translate-y":[E]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Y]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Y]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":T()}],"scroll-mx":[{"scroll-mx":T()}],"scroll-my":[{"scroll-my":T()}],"scroll-ms":[{"scroll-ms":T()}],"scroll-me":[{"scroll-me":T()}],"scroll-mt":[{"scroll-mt":T()}],"scroll-mr":[{"scroll-mr":T()}],"scroll-mb":[{"scroll-mb":T()}],"scroll-ml":[{"scroll-ml":T()}],"scroll-p":[{"scroll-p":T()}],"scroll-px":[{"scroll-px":T()}],"scroll-py":[{"scroll-py":T()}],"scroll-ps":[{"scroll-ps":T()}],"scroll-pe":[{"scroll-pe":T()}],"scroll-pt":[{"scroll-pt":T()}],"scroll-pr":[{"scroll-pr":T()}],"scroll-pb":[{"scroll-pb":T()}],"scroll-pl":[{"scroll-pl":T()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Y]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[ft,dl]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var Qb=Fb(Yb);function q(...e){return Qb(Nm(e))}const To=s.forwardRef(({className:e,...t},n)=>y.jsx("textarea",{className:q("flex min-h-[80px] w-full rounded-md border border-zinc-200 border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",e),ref:n,...t}));To.displayName="Textarea";function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function Zb(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Ra(...e){return t=>e.forEach(n=>Zb(n,t))}function oe(...e){return s.useCallback(Ra(...e),e)}const fn=s.forwardRef((e,t)=>{const{children:n,...r}=e,o=s.Children.toArray(n),l=o.find(qb);if(l){const a=l.props.children,i=o.map(c=>c===l?s.Children.count(a)>1?s.Children.only(null):s.isValidElement(a)?a.props.children:null:c);return s.createElement(js,I({},r,{ref:t}),s.isValidElement(a)?s.cloneElement(a,void 0,i):null)}return s.createElement(js,I({},r,{ref:t}),n)});fn.displayName="Slot";const js=s.forwardRef((e,t)=>{const{children:n,...r}=e;return s.isValidElement(n)?s.cloneElement(n,{...Jb(r,n.props),ref:t?Ra(t,n.ref):n.ref}):s.Children.count(n)>1?s.Children.only(null):null});js.displayName="SlotClone";const Xb=({children:e})=>s.createElement(s.Fragment,null,e);function qb(e){return s.isValidElement(e)&&e.type===Xb}function Jb(e,t){const n={...t};for(const r in t){const o=e[r],l=t[r];/^on[A-Z]/.test(r)?o&&l?n[r]=(...i)=>{l(...i),o(...i)}:o&&(n[r]=o):r==="style"?n[r]={...o,...l}:r==="className"&&(n[r]=[o,l].filter(Boolean).join(" "))}return{...e,...n}}const ey=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],W=ey.reduce((e,t)=>{const n=s.forwardRef((r,o)=>{const{asChild:l,...a}=r,i=l?fn:t;return s.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),s.createElement(i,I({},a,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Mc(e,t){e&&yn.flushSync(()=>e.dispatchEvent(t))}const ty=s.forwardRef((e,t)=>s.createElement(W.label,I({},e,{ref:t,onMouseDown:n=>{var r;(r=e.onMouseDown)===null||r===void 0||r.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault()}}))),Om=ty,Pu=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,Iu=Nm,Na=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Iu(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:o,defaultVariants:l}=t,a=Object.keys(o).map(d=>{const p=n==null?void 0:n[d],f=l==null?void 0:l[d];if(p===null)return null;const h=Pu(p)||Pu(f);return o[d][h]}),i=n&&Object.entries(n).reduce((d,p)=>{let[f,h]=p;return h===void 0||(d[f]=h),d},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((d,p)=>{let{class:f,className:h,...w}=p;return Object.entries(w).every(v=>{let[b,_]=v;return Array.isArray(_)?_.includes({...l,...i}[b]):{...l,...i}[b]===_})?[...d,f,h]:d},[]);return Iu(e,a,c,n==null?void 0:n.class,n==null?void 0:n.className)},ny=Na("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),Rs=s.forwardRef(({className:e,...t},n)=>y.jsx(Om,{ref:n,className:q(ny(),e),...t}));Rs.displayName=Om.displayName;function B(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function vt(e,t=[]){let n=[];function r(l,a){const i=s.createContext(a),c=n.length;n=[...n,a];function d(f){const{scope:h,children:w,...v}=f,b=(h==null?void 0:h[e][c])||i,_=s.useMemo(()=>v,Object.values(v));return s.createElement(b.Provider,{value:_},w)}function p(f,h){const w=(h==null?void 0:h[e][c])||i,v=s.useContext(w);if(v)return v;if(a!==void 0)return a;throw new Error(`\`${f}\` must be used within \`${l}\``)}return d.displayName=l+"Provider",[d,p]}const o=()=>{const l=n.map(a=>s.createContext(a));return function(i){const c=(i==null?void 0:i[e])||l;return s.useMemo(()=>({[`__scope${e}`]:{...i,[e]:c}}),[i,c])}};return o.scopeName=e,[r,ry(o,...t)]}function ry(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(l){const a=r.reduce((i,{useScope:c,scopeName:d})=>{const f=c(l)[`__scope${d}`];return{...i,...f}},{});return s.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function Lo(e){const t=e+"CollectionProvider",[n,r]=vt(t),[o,l]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=w=>{const{scope:v,children:b}=w,_=G.useRef(null),m=G.useRef(new Map).current;return G.createElement(o,{scope:v,itemMap:m,collectionRef:_},b)},i=e+"CollectionSlot",c=G.forwardRef((w,v)=>{const{scope:b,children:_}=w,m=l(i,b),u=oe(v,m.collectionRef);return G.createElement(fn,{ref:u},_)}),d=e+"CollectionItemSlot",p="data-radix-collection-item",f=G.forwardRef((w,v)=>{const{scope:b,children:_,...m}=w,u=G.useRef(null),g=oe(v,u),x=l(d,b);return G.useEffect(()=>(x.itemMap.set(u,{ref:u,...m}),()=>void x.itemMap.delete(u))),G.createElement(fn,{[p]:"",ref:g},_)});function h(w){const v=l(e+"CollectionConsumer",w);return G.useCallback(()=>{const _=v.collectionRef.current;if(!_)return[];const m=Array.from(_.querySelectorAll(`[${p}]`));return Array.from(v.itemMap.values()).sort((x,k)=>m.indexOf(x.ref.current)-m.indexOf(k.ref.current))},[v.collectionRef,v.itemMap])}return[{Provider:a,Slot:c,ItemSlot:f},h,r]}const et=globalThis!=null&&globalThis.document?s.useLayoutEffect:()=>{},oy=ug["useId".toString()]||(()=>{});let ly=0;function Dt(e){const[t,n]=s.useState(oy());return et(()=>{e||n(r=>r??String(ly++))},[e]),e||(t?`radix-${t}`:"")}function Le(e){const t=s.useRef(e);return s.useEffect(()=>{t.current=e}),s.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function St({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=ay({defaultProp:t,onChange:n}),l=e!==void 0,a=l?e:r,i=Le(n),c=s.useCallback(d=>{if(l){const f=typeof d=="function"?d(e):d;f!==e&&i(f)}else o(d)},[l,e,o,i]);return[a,c]}function ay({defaultProp:e,onChange:t}){const n=s.useState(e),[r]=n,o=s.useRef(r),l=Le(t);return s.useEffect(()=>{o.current!==r&&(l(r),o.current=r)},[r,o,l]),n}const iy=s.createContext(void 0);function Mo(e){const t=s.useContext(iy);return e||t||"ltr"}const ki="rovingFocusGroup.onEntryFocus",sy={bubbles:!1,cancelable:!0},Dc="RovingFocusGroup",[Ns,Lm,cy]=Lo(Dc),[dy,Pa]=vt(Dc,[cy]),[uy,fy]=dy(Dc),py=s.forwardRef((e,t)=>s.createElement(Ns.Provider,{scope:e.__scopeRovingFocusGroup},s.createElement(Ns.Slot,{scope:e.__scopeRovingFocusGroup},s.createElement(my,I({},e,{ref:t}))))),my=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:o=!1,dir:l,currentTabStopId:a,defaultCurrentTabStopId:i,onCurrentTabStopIdChange:c,onEntryFocus:d,...p}=e,f=s.useRef(null),h=oe(t,f),w=Mo(l),[v=null,b]=St({prop:a,defaultProp:i,onChange:c}),[_,m]=s.useState(!1),u=Le(d),g=Lm(n),x=s.useRef(!1),[k,C]=s.useState(0);return s.useEffect(()=>{const $=f.current;if($)return $.addEventListener(ki,u),()=>$.removeEventListener(ki,u)},[u]),s.createElement(uy,{scope:n,orientation:r,dir:w,loop:o,currentTabStopId:v,onItemFocus:s.useCallback($=>b($),[b]),onItemShiftTab:s.useCallback(()=>m(!0),[]),onFocusableItemAdd:s.useCallback(()=>C($=>$+1),[]),onFocusableItemRemove:s.useCallback(()=>C($=>$-1),[])},s.createElement(W.div,I({tabIndex:_||k===0?-1:0,"data-orientation":r},p,{ref:h,style:{outline:"none",...e.style},onMouseDown:B(e.onMouseDown,()=>{x.current=!0}),onFocus:B(e.onFocus,$=>{const E=!x.current;if($.target===$.currentTarget&&E&&!_){const z=new CustomEvent(ki,sy);if($.currentTarget.dispatchEvent(z),!z.defaultPrevented){const S=g().filter(O=>O.focusable),F=S.find(O=>O.active),T=S.find(O=>O.id===v),j=[F,T,...S].filter(Boolean).map(O=>O.ref.current);Mm(j)}}x.current=!1}),onBlur:B(e.onBlur,()=>m(!1))})))}),hy="RovingFocusGroupItem",gy=s.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:o=!1,tabStopId:l,...a}=e,i=Dt(),c=l||i,d=fy(hy,n),p=d.currentTabStopId===c,f=Lm(n),{onFocusableItemAdd:h,onFocusableItemRemove:w}=d;return s.useEffect(()=>{if(r)return h(),()=>w()},[r,h,w]),s.createElement(Ns.ItemSlot,{scope:n,id:c,focusable:r,active:o},s.createElement(W.span,I({tabIndex:p?0:-1,"data-orientation":d.orientation},a,{ref:t,onMouseDown:B(e.onMouseDown,v=>{r?d.onItemFocus(c):v.preventDefault()}),onFocus:B(e.onFocus,()=>d.onItemFocus(c)),onKeyDown:B(e.onKeyDown,v=>{if(v.key==="Tab"&&v.shiftKey){d.onItemShiftTab();return}if(v.target!==v.currentTarget)return;const b=yy(v,d.orientation,d.dir);if(b!==void 0){v.preventDefault();let m=f().filter(u=>u.focusable).map(u=>u.ref.current);if(b==="last")m.reverse();else if(b==="prev"||b==="next"){b==="prev"&&m.reverse();const u=m.indexOf(v.currentTarget);m=d.loop?vy(m,u+1):m.slice(u+1)}setTimeout(()=>Mm(m))}})})))}),wy={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function by(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function yy(e,t,n){const r=by(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return wy[r]}function Mm(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function vy(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const Dm=py,Bm=gy;function _y(e,t){return s.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}const jt=e=>{const{present:t,children:n}=e,r=xy(t),o=typeof n=="function"?n({present:r.isPresent}):s.Children.only(n),l=oe(r.ref,o.ref);return typeof n=="function"||r.isPresent?s.cloneElement(o,{ref:l}):null};jt.displayName="Presence";function xy(e){const[t,n]=s.useState(),r=s.useRef({}),o=s.useRef(e),l=s.useRef("none"),a=e?"mounted":"unmounted",[i,c]=_y(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return s.useEffect(()=>{const d=ul(r.current);l.current=i==="mounted"?d:"none"},[i]),et(()=>{const d=r.current,p=o.current;if(p!==e){const h=l.current,w=ul(d);e?c("MOUNT"):w==="none"||(d==null?void 0:d.display)==="none"?c("UNMOUNT"):c(p&&h!==w?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,c]),et(()=>{if(t){const d=f=>{const w=ul(r.current).includes(f.animationName);f.target===t&&w&&yn.flushSync(()=>c("ANIMATION_END"))},p=f=>{f.target===t&&(l.current=ul(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:s.useCallback(d=>{d&&(r.current=getComputedStyle(d)),n(d)},[])}}function ul(e){return(e==null?void 0:e.animationName)||"none"}const Hm="Tabs",[ky,Ik]=vt(Hm,[Pa]),Vm=Pa(),[$y,Bc]=ky(Hm),Cy=s.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:o,defaultValue:l,orientation:a="horizontal",dir:i,activationMode:c="automatic",...d}=e,p=Mo(i),[f,h]=St({prop:r,onChange:o,defaultProp:l});return s.createElement($y,{scope:n,baseId:Dt(),value:f,onValueChange:h,orientation:a,dir:p,activationMode:c},s.createElement(W.div,I({dir:p,"data-orientation":a},d,{ref:t})))}),Ey="TabsList",Sy=s.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...o}=e,l=Bc(Ey,n),a=Vm(n);return s.createElement(Dm,I({asChild:!0},a,{orientation:l.orientation,dir:l.dir,loop:r}),s.createElement(W.div,I({role:"tablist","aria-orientation":l.orientation},o,{ref:t})))}),Ty="TabsTrigger",jy=s.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:o=!1,...l}=e,a=Bc(Ty,n),i=Vm(n),c=Um(a.baseId,r),d=Gm(a.baseId,r),p=r===a.value;return s.createElement(Bm,I({asChild:!0},i,{focusable:!o,active:p}),s.createElement(W.button,I({type:"button",role:"tab","aria-selected":p,"aria-controls":d,"data-state":p?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:c},l,{ref:t,onMouseDown:B(e.onMouseDown,f=>{!o&&f.button===0&&f.ctrlKey===!1?a.onValueChange(r):f.preventDefault()}),onKeyDown:B(e.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&a.onValueChange(r)}),onFocus:B(e.onFocus,()=>{const f=a.activationMode!=="manual";!p&&!o&&f&&a.onValueChange(r)})})))}),Ry="TabsContent",Ny=s.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:o,children:l,...a}=e,i=Bc(Ry,n),c=Um(i.baseId,r),d=Gm(i.baseId,r),p=r===i.value,f=s.useRef(p);return s.useEffect(()=>{const h=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(h)},[]),s.createElement(jt,{present:o||p},({present:h})=>s.createElement(W.div,I({"data-state":p?"active":"inactive","data-orientation":i.orientation,role:"tabpanel","aria-labelledby":c,hidden:!h,id:d,tabIndex:0},a,{ref:t,style:{...e.style,animationDuration:f.current?"0s":void 0}}),h&&l))});function Um(e,t){return`${e}-trigger-${t}`}function Gm(e,t){return`${e}-content-${t}`}const Py=Cy,Km=Sy,Wm=jy,Ym=Ny,Qm=Py,Hc=s.forwardRef(({className:e,...t},n)=>y.jsx(Km,{ref:n,className:q("inline-flex h-10 items-center justify-center rounded-md bg-zinc-100 p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",e),...t}));Hc.displayName=Km.displayName;const Tn=s.forwardRef(({className:e,...t},n)=>y.jsx(Wm,{ref:n,className:q("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-zinc-950 data-[state=active]:shadow-sm dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 dark:data-[state=active]:bg-zinc-950 dark:data-[state=active]:text-zinc-50",e),...t}));Tn.displayName=Wm.displayName;const jn=s.forwardRef(({className:e,...t},n)=>y.jsx(Ym,{ref:n,className:q("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",e),...t}));jn.displayName=Ym.displayName;var Iy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Fy=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vn=(e,t)=>{const n=s.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:a,children:i,...c},d)=>s.createElement("svg",{ref:d,...Iy,width:o,height:o,stroke:r,strokeWidth:a?Number(l)*24/Number(o):l,className:`lucide lucide-${Fy(e)}`,...c},[...t.map(([p,f])=>s.createElement(p,f)),...(Array.isArray(i)?i:[i])||[]]));return n.displayName=`${e}`,n},Zm=vn("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]),Xm=vn("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Ay=vn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),zy=vn("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),Fu=vn("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),Ia=vn("TextSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8",key:"1758g8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12",key:"197423"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16",key:"37cgm6"}]]),Fa=vn("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]),Oy=vn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Vc(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,l;for(l=0;l<r.length;l++)o=r[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Ly=["color"],My=s.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=Vc(e,Ly);return s.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),s.createElement("path",{d:"M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),Dy=["color"],By=s.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=Vc(e,Dy);return s.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),s.createElement("path",{d:"M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))}),Hy=["color"],Au=s.forwardRef(function(e,t){var n=e.color,r=n===void 0?"currentColor":n,o=Vc(e,Hy);return s.createElement("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o,{ref:t}),s.createElement("path",{d:"M4.85355 2.14645C5.04882 2.34171 5.04882 2.65829 4.85355 2.85355L3.70711 4H9C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13H5C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12H9C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5H3.70711L4.85355 6.14645C5.04882 6.34171 5.04882 6.65829 4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645L4.14645 2.14645C4.34171 1.95118 4.65829 1.95118 4.85355 2.14645Z",fill:r,fillRule:"evenodd",clipRule:"evenodd"}))});const qm=s.createContext(),Vy=({children:e})=>{const[t,n]=s.useState("PL");return y.jsx(qm.Provider,{value:[t,n],children:e})},Do=()=>{const e=s.useContext(qm);if(!e)throw new Error("You are probably use context outside of probider");return e},Jm=s.createContext(),Uy=({children:e})=>{const[t,n]=s.useState("newsletter");return y.jsx(Jm.Provider,{value:[t,n],children:e})},Uc=()=>{const e=s.useContext(Jm);if(!e)throw new Error("You are probably use context outside of probider");return e},Gy=e=>{const[t,n]=s.useState(),[r,o]=s.useState(!1),[l,a]=s.useState(!1);return s.useEffect(()=>{(async()=>{a(!1),o(!0);try{const d=await(await fetch(e)).json();n(d),o(!1)}catch{a(!0)}})()},[e]),[t,r,l]},Ky=e=>{const[t,n]=s.useState(),[r,o]=s.useState(!1),[l,a]=s.useState(!1);return s.useEffect(()=>{(async()=>{a(!1),o(!0);try{const d=await(await fetch(e)).json();n(d),o(!1)}catch{a(!0)}})()},[e]),[t,r,l]},Wy=e=>{const[t,n]=s.useState(),[r,o]=s.useState(!1),[l,a]=s.useState(!1);return s.useEffect(()=>{(async()=>{a(!1),o(!0);try{const d=await(await fetch(e)).json();n(d),o(!1)}catch{a(!0)}})()},[e]),[t,r,l]},e0=s.createContext(),Yy=({children:e})=>{const[t,n]=s.useState({links:[],images:[],text:null,products:null});return y.jsx(e0.Provider,{value:[t,n],children:e})},Aa=()=>{const e=s.useContext(e0);if(!e)throw new Error("You are probably use context outside of probider");return e},t0=s.createContext(),Qy=({children:e})=>{const[t,n]=s.useState(null);return y.jsx(t0.Provider,{value:[t,n],children:e})},n0=()=>{const e=s.useContext(t0);if(!e)throw new Error("You are probably use context outside of probider");return e},r0=s.createContext(),Zy=({children:e})=>{const[t,n]=s.useState({id:null,type:null});return y.jsx(r0.Provider,{value:[t,n],children:e})},Bo=()=>{const e=s.useContext(r0);if(!e)throw new Error("You are probably use context outside of probider");return e},o0=["CHDE","CHFR","AT","CZ","DE","DK","FI","FR","HU","IT","NL","NO","PL","PT","SE","SK","ES","UK"];function zu(e,[t,n]){return Math.min(n,Math.max(t,e))}function Xy(e,t=globalThis==null?void 0:globalThis.document){const n=Le(e);s.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const Ps="dismissableLayer.update",qy="dismissableLayer.pointerDownOutside",Jy="dismissableLayer.focusOutside";let Ou;const l0=s.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),za=s.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:l,onFocusOutside:a,onInteractOutside:i,onDismiss:c,...d}=e,p=s.useContext(l0),[f,h]=s.useState(null),w=(n=f==null?void 0:f.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,v]=s.useState({}),b=oe(t,E=>h(E)),_=Array.from(p.layers),[m]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),u=_.indexOf(m),g=f?_.indexOf(f):-1,x=p.layersWithOutsidePointerEventsDisabled.size>0,k=g>=u,C=t2(E=>{const z=E.target,S=[...p.branches].some(F=>F.contains(z));!k||S||(l==null||l(E),i==null||i(E),E.defaultPrevented||c==null||c())},w),$=n2(E=>{const z=E.target;[...p.branches].some(F=>F.contains(z))||(a==null||a(E),i==null||i(E),E.defaultPrevented||c==null||c())},w);return Xy(E=>{g===p.layers.size-1&&(o==null||o(E),!E.defaultPrevented&&c&&(E.preventDefault(),c()))},w),s.useEffect(()=>{if(f)return r&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(Ou=w.body.style.pointerEvents,w.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(f)),p.layers.add(f),Lu(),()=>{r&&p.layersWithOutsidePointerEventsDisabled.size===1&&(w.body.style.pointerEvents=Ou)}},[f,w,r,p]),s.useEffect(()=>()=>{f&&(p.layers.delete(f),p.layersWithOutsidePointerEventsDisabled.delete(f),Lu())},[f,p]),s.useEffect(()=>{const E=()=>v({});return document.addEventListener(Ps,E),()=>document.removeEventListener(Ps,E)},[]),s.createElement(W.div,I({},d,{ref:b,style:{pointerEvents:x?k?"auto":"none":void 0,...e.style},onFocusCapture:B(e.onFocusCapture,$.onFocusCapture),onBlurCapture:B(e.onBlurCapture,$.onBlurCapture),onPointerDownCapture:B(e.onPointerDownCapture,C.onPointerDownCapture)}))}),e2=s.forwardRef((e,t)=>{const n=s.useContext(l0),r=s.useRef(null),o=oe(t,r);return s.useEffect(()=>{const l=r.current;if(l)return n.branches.add(l),()=>{n.branches.delete(l)}},[n.branches]),s.createElement(W.div,I({},e,{ref:o}))});function t2(e,t=globalThis==null?void 0:globalThis.document){const n=Le(e),r=s.useRef(!1),o=s.useRef(()=>{});return s.useEffect(()=>{const l=i=>{if(i.target&&!r.current){let p=function(){a0(qy,n,d,{discrete:!0})};var c=p;const d={originalEvent:i};i.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=p,t.addEventListener("click",o.current,{once:!0})):p()}r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",l)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",l),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function n2(e,t=globalThis==null?void 0:globalThis.document){const n=Le(e),r=s.useRef(!1);return s.useEffect(()=>{const o=l=>{l.target&&!r.current&&a0(Jy,n,{originalEvent:l},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Lu(){const e=new CustomEvent(Ps);document.dispatchEvent(e)}function a0(e,t,n,{discrete:r}){const o=n.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Mc(o,l):o.dispatchEvent(l)}const r2=za,o2=e2;let $i=0;function Gc(){s.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:Mu()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:Mu()),$i++,()=>{$i===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),$i--}},[])}function Mu(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const Ci="focusScope.autoFocusOnMount",Ei="focusScope.autoFocusOnUnmount",Du={bubbles:!1,cancelable:!0},Kc=s.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:l,...a}=e,[i,c]=s.useState(null),d=Le(o),p=Le(l),f=s.useRef(null),h=oe(t,b=>c(b)),w=s.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;s.useEffect(()=>{if(r){let u=function(C){if(w.paused||!i)return;const $=C.target;i.contains($)?f.current=$:Yt(f.current,{select:!0})},g=function(C){if(w.paused||!i)return;const $=C.relatedTarget;$!==null&&(i.contains($)||Yt(f.current,{select:!0}))},x=function(C){const $=document.activeElement;for(const E of C)E.removedNodes.length>0&&(i!=null&&i.contains($)||Yt(i))};var b=u,_=g,m=x;document.addEventListener("focusin",u),document.addEventListener("focusout",g);const k=new MutationObserver(x);return i&&k.observe(i,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",g),k.disconnect()}}},[r,i,w.paused]),s.useEffect(()=>{if(i){Hu.add(w);const b=document.activeElement;if(!i.contains(b)){const m=new CustomEvent(Ci,Du);i.addEventListener(Ci,d),i.dispatchEvent(m),m.defaultPrevented||(l2(d2(i0(i)),{select:!0}),document.activeElement===b&&Yt(i))}return()=>{i.removeEventListener(Ci,d),setTimeout(()=>{const m=new CustomEvent(Ei,Du);i.addEventListener(Ei,p),i.dispatchEvent(m),m.defaultPrevented||Yt(b??document.body,{select:!0}),i.removeEventListener(Ei,p),Hu.remove(w)},0)}}},[i,d,p,w]);const v=s.useCallback(b=>{if(!n&&!r||w.paused)return;const _=b.key==="Tab"&&!b.altKey&&!b.ctrlKey&&!b.metaKey,m=document.activeElement;if(_&&m){const u=b.currentTarget,[g,x]=a2(u);g&&x?!b.shiftKey&&m===x?(b.preventDefault(),n&&Yt(g,{select:!0})):b.shiftKey&&m===g&&(b.preventDefault(),n&&Yt(x,{select:!0})):m===u&&b.preventDefault()}},[n,r,w.paused]);return s.createElement(W.div,I({tabIndex:-1},a,{ref:h,onKeyDown:v}))});function l2(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Yt(r,{select:t}),document.activeElement!==n)return}function a2(e){const t=i0(e),n=Bu(t,e),r=Bu(t.reverse(),e);return[n,r]}function i0(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Bu(e,t){for(const n of e)if(!i2(n,{upTo:t}))return n}function i2(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function s2(e){return e instanceof HTMLInputElement&&"select"in e}function Yt(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&s2(e)&&t&&e.select()}}const Hu=c2();function c2(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Vu(e,t),e.unshift(t)},remove(t){var n;e=Vu(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Vu(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function d2(e){return e.filter(t=>t.tagName!=="A")}const u2=["top","right","bottom","left"],pn=Math.min,Ye=Math.max,sa=Math.round,fl=Math.floor,mn=e=>({x:e,y:e}),f2={left:"right",right:"left",bottom:"top",top:"bottom"},p2={start:"end",end:"start"};function Is(e,t,n){return Ye(e,pn(t,n))}function Bt(e,t){return typeof e=="function"?e(t):e}function Ht(e){return e.split("-")[0]}function jr(e){return e.split("-")[1]}function Wc(e){return e==="x"?"y":"x"}function Yc(e){return e==="y"?"height":"width"}function Rr(e){return["top","bottom"].includes(Ht(e))?"y":"x"}function Qc(e){return Wc(Rr(e))}function m2(e,t,n){n===void 0&&(n=!1);const r=jr(e),o=Qc(e),l=Yc(o);let a=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[l]>t.floating[l]&&(a=ca(a)),[a,ca(a)]}function h2(e){const t=ca(e);return[Fs(e),t,Fs(t)]}function Fs(e){return e.replace(/start|end/g,t=>p2[t])}function g2(e,t,n){const r=["left","right"],o=["right","left"],l=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?l:a;default:return[]}}function w2(e,t,n,r){const o=jr(e);let l=g2(Ht(e),n==="start",r);return o&&(l=l.map(a=>a+"-"+o),t&&(l=l.concat(l.map(Fs)))),l}function ca(e){return e.replace(/left|right|bottom|top/g,t=>f2[t])}function b2(e){return{top:0,right:0,bottom:0,left:0,...e}}function s0(e){return typeof e!="number"?b2(e):{top:e,right:e,bottom:e,left:e}}function da(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Uu(e,t,n){let{reference:r,floating:o}=e;const l=Rr(t),a=Qc(t),i=Yc(a),c=Ht(t),d=l==="y",p=r.x+r.width/2-o.width/2,f=r.y+r.height/2-o.height/2,h=r[i]/2-o[i]/2;let w;switch(c){case"top":w={x:p,y:r.y-o.height};break;case"bottom":w={x:p,y:r.y+r.height};break;case"right":w={x:r.x+r.width,y:f};break;case"left":w={x:r.x-o.width,y:f};break;default:w={x:r.x,y:r.y}}switch(jr(t)){case"start":w[a]-=h*(n&&d?-1:1);break;case"end":w[a]+=h*(n&&d?-1:1);break}return w}const y2=async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:l=[],platform:a}=n,i=l.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let d=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:p,y:f}=Uu(d,r,c),h=r,w={},v=0;for(let b=0;b<i.length;b++){const{name:_,fn:m}=i[b],{x:u,y:g,data:x,reset:k}=await m({x:p,y:f,initialPlacement:r,placement:h,strategy:o,middlewareData:w,rects:d,platform:a,elements:{reference:e,floating:t}});if(p=u??p,f=g??f,w={...w,[_]:{...w[_],...x}},k&&v<=50){v++,typeof k=="object"&&(k.placement&&(h=k.placement),k.rects&&(d=k.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:o}):k.rects),{x:p,y:f}=Uu(d,h,c)),b=-1;continue}}return{x:p,y:f,placement:h,strategy:o,middlewareData:w}};async function jo(e,t){var n;t===void 0&&(t={});const{x:r,y:o,platform:l,rects:a,elements:i,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:f="floating",altBoundary:h=!1,padding:w=0}=Bt(t,e),v=s0(w),_=i[h?f==="floating"?"reference":"floating":f],m=da(await l.getClippingRect({element:(n=await(l.isElement==null?void 0:l.isElement(_)))==null||n?_:_.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(i.floating)),boundary:d,rootBoundary:p,strategy:c})),u=f==="floating"?{...a.floating,x:r,y:o}:a.reference,g=await(l.getOffsetParent==null?void 0:l.getOffsetParent(i.floating)),x=await(l.isElement==null?void 0:l.isElement(g))?await(l.getScale==null?void 0:l.getScale(g))||{x:1,y:1}:{x:1,y:1},k=da(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:u,offsetParent:g,strategy:c}):u);return{top:(m.top-k.top+v.top)/x.y,bottom:(k.bottom-m.bottom+v.bottom)/x.y,left:(m.left-k.left+v.left)/x.x,right:(k.right-m.right+v.right)/x.x}}const Gu=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:l,platform:a,elements:i}=t,{element:c,padding:d=0}=Bt(e,t)||{};if(c==null)return{};const p=s0(d),f={x:n,y:r},h=Qc(o),w=Yc(h),v=await a.getDimensions(c),b=h==="y",_=b?"top":"left",m=b?"bottom":"right",u=b?"clientHeight":"clientWidth",g=l.reference[w]+l.reference[h]-f[h]-l.floating[w],x=f[h]-l.reference[h],k=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c));let C=k?k[u]:0;(!C||!await(a.isElement==null?void 0:a.isElement(k)))&&(C=i.floating[u]||l.floating[w]);const $=g/2-x/2,E=C/2-v[w]/2-1,z=pn(p[_],E),S=pn(p[m],E),F=z,T=C-v[w]-S,N=C/2-v[w]/2+$,j=Is(F,N,T),L=jr(o)!=null&&N!=j&&l.reference[w]/2-(N<F?z:S)-v[w]/2<0?N<F?F-N:T-N:0;return{[h]:f[h]-L,data:{[h]:j,centerOffset:N-j+L}}}}),v2=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:o,rects:l,initialPlacement:a,platform:i,elements:c}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:v=!0,...b}=Bt(e,t),_=Ht(r),m=Ht(a)===a,u=await(i.isRTL==null?void 0:i.isRTL(c.floating)),g=f||(m||!v?[ca(a)]:h2(a));!f&&w!=="none"&&g.push(...w2(a,v,w,u));const x=[a,...g],k=await jo(t,b),C=[];let $=((n=o.flip)==null?void 0:n.overflows)||[];if(d&&C.push(k[_]),p){const F=m2(r,l,u);C.push(k[F[0]],k[F[1]])}if($=[...$,{placement:r,overflows:C}],!C.every(F=>F<=0)){var E,z;const F=(((E=o.flip)==null?void 0:E.index)||0)+1,T=x[F];if(T)return{data:{index:F,overflows:$},reset:{placement:T}};let N=(z=$.filter(j=>j.overflows[0]<=0).sort((j,O)=>j.overflows[1]-O.overflows[1])[0])==null?void 0:z.placement;if(!N)switch(h){case"bestFit":{var S;const j=(S=$.map(O=>[O.placement,O.overflows.filter(L=>L>0).reduce((L,K)=>L+K,0)]).sort((O,L)=>O[1]-L[1])[0])==null?void 0:S[0];j&&(N=j);break}case"initialPlacement":N=a;break}if(r!==N)return{reset:{placement:N}}}return{}}}};function Ku(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Wu(e){return u2.some(t=>e[t]>=0)}const _2=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...o}=Bt(e,t);switch(r){case"referenceHidden":{const l=await jo(t,{...o,elementContext:"reference"}),a=Ku(l,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:Wu(a)}}}case"escaped":{const l=await jo(t,{...o,altBoundary:!0}),a=Ku(l,n.floating);return{data:{escapedOffsets:a,escaped:Wu(a)}}}default:return{}}}}};async function x2(e,t){const{placement:n,platform:r,elements:o}=e,l=await(r.isRTL==null?void 0:r.isRTL(o.floating)),a=Ht(n),i=jr(n),c=Rr(n)==="y",d=["left","top"].includes(a)?-1:1,p=l&&c?-1:1,f=Bt(t,e);let{mainAxis:h,crossAxis:w,alignmentAxis:v}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return i&&typeof v=="number"&&(w=i==="end"?v*-1:v),c?{x:w*p,y:h*d}:{x:h*d,y:w*p}}const k2=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,o=await x2(t,e);return{x:n+o.x,y:r+o.y,data:o}}}},$2=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:l=!0,crossAxis:a=!1,limiter:i={fn:_=>{let{x:m,y:u}=_;return{x:m,y:u}}},...c}=Bt(e,t),d={x:n,y:r},p=await jo(t,c),f=Rr(Ht(o)),h=Wc(f);let w=d[h],v=d[f];if(l){const _=h==="y"?"top":"left",m=h==="y"?"bottom":"right",u=w+p[_],g=w-p[m];w=Is(u,w,g)}if(a){const _=f==="y"?"top":"left",m=f==="y"?"bottom":"right",u=v+p[_],g=v-p[m];v=Is(u,v,g)}const b=i.fn({...t,[h]:w,[f]:v});return{...b,data:{x:b.x-n,y:b.y-r}}}}},C2=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:l,middlewareData:a}=t,{offset:i=0,mainAxis:c=!0,crossAxis:d=!0}=Bt(e,t),p={x:n,y:r},f=Rr(o),h=Wc(f);let w=p[h],v=p[f];const b=Bt(i,t),_=typeof b=="number"?{mainAxis:b,crossAxis:0}:{mainAxis:0,crossAxis:0,...b};if(c){const g=h==="y"?"height":"width",x=l.reference[h]-l.floating[g]+_.mainAxis,k=l.reference[h]+l.reference[g]-_.mainAxis;w<x?w=x:w>k&&(w=k)}if(d){var m,u;const g=h==="y"?"width":"height",x=["top","left"].includes(Ht(o)),k=l.reference[f]-l.floating[g]+(x&&((m=a.offset)==null?void 0:m[f])||0)+(x?0:_.crossAxis),C=l.reference[f]+l.reference[g]+(x?0:((u=a.offset)==null?void 0:u[f])||0)-(x?_.crossAxis:0);v<k?v=k:v>C&&(v=C)}return{[h]:w,[f]:v}}}},E2=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:l}=t,{apply:a=()=>{},...i}=Bt(e,t),c=await jo(t,i),d=Ht(n),p=jr(n),f=Rr(n)==="y",{width:h,height:w}=r.floating;let v,b;d==="top"||d==="bottom"?(v=d,b=p===(await(o.isRTL==null?void 0:o.isRTL(l.floating))?"start":"end")?"left":"right"):(b=d,v=p==="end"?"top":"bottom");const _=w-c[v],m=h-c[b],u=!t.middlewareData.shift;let g=_,x=m;if(f){const C=h-c.left-c.right;x=p||u?pn(m,C):C}else{const C=w-c.top-c.bottom;g=p||u?pn(_,C):C}if(u&&!p){const C=Ye(c.left,0),$=Ye(c.right,0),E=Ye(c.top,0),z=Ye(c.bottom,0);f?x=h-2*(C!==0||$!==0?C+$:Ye(c.left,c.right)):g=w-2*(E!==0||z!==0?E+z:Ye(c.top,c.bottom))}await a({...t,availableWidth:x,availableHeight:g});const k=await o.getDimensions(l.floating);return h!==k.width||w!==k.height?{reset:{rects:!0}}:{}}}};function hn(e){return c0(e)?(e.nodeName||"").toLowerCase():"#document"}function qe(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Gt(e){var t;return(t=(c0(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function c0(e){return e instanceof Node||e instanceof qe(e).Node}function Vt(e){return e instanceof Element||e instanceof qe(e).Element}function Tt(e){return e instanceof HTMLElement||e instanceof qe(e).HTMLElement}function Yu(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof qe(e).ShadowRoot}function Ho(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=ct(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function S2(e){return["table","td","th"].includes(hn(e))}function Zc(e){const t=Xc(),n=ct(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function T2(e){let t=kr(e);for(;Tt(t)&&!Oa(t);){if(Zc(t))return t;t=kr(t)}return null}function Xc(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Oa(e){return["html","body","#document"].includes(hn(e))}function ct(e){return qe(e).getComputedStyle(e)}function La(e){return Vt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function kr(e){if(hn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Yu(e)&&e.host||Gt(e);return Yu(t)?t.host:t}function d0(e){const t=kr(e);return Oa(t)?e.ownerDocument?e.ownerDocument.body:e.body:Tt(t)&&Ho(t)?t:d0(t)}function ua(e,t){var n;t===void 0&&(t=[]);const r=d0(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),l=qe(r);return o?t.concat(l,l.visualViewport||[],Ho(r)?r:[]):t.concat(r,ua(r))}function u0(e){const t=ct(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Tt(e),l=o?e.offsetWidth:n,a=o?e.offsetHeight:r,i=sa(n)!==l||sa(r)!==a;return i&&(n=l,r=a),{width:n,height:r,$:i}}function qc(e){return Vt(e)?e:e.contextElement}function hr(e){const t=qc(e);if(!Tt(t))return mn(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:l}=u0(t);let a=(l?sa(n.width):n.width)/r,i=(l?sa(n.height):n.height)/o;return(!a||!Number.isFinite(a))&&(a=1),(!i||!Number.isFinite(i))&&(i=1),{x:a,y:i}}const j2=mn(0);function f0(e){const t=qe(e);return!Xc()||!t.visualViewport?j2:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function R2(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==qe(e)?!1:t}function On(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),l=qc(e);let a=mn(1);t&&(r?Vt(r)&&(a=hr(r)):a=hr(e));const i=R2(l,n,r)?f0(l):mn(0);let c=(o.left+i.x)/a.x,d=(o.top+i.y)/a.y,p=o.width/a.x,f=o.height/a.y;if(l){const h=qe(l),w=r&&Vt(r)?qe(r):r;let v=h.frameElement;for(;v&&r&&w!==h;){const b=hr(v),_=v.getBoundingClientRect(),m=ct(v),u=_.left+(v.clientLeft+parseFloat(m.paddingLeft))*b.x,g=_.top+(v.clientTop+parseFloat(m.paddingTop))*b.y;c*=b.x,d*=b.y,p*=b.x,f*=b.y,c+=u,d+=g,v=qe(v).frameElement}}return da({width:p,height:f,x:c,y:d})}function N2(e){let{rect:t,offsetParent:n,strategy:r}=e;const o=Tt(n),l=Gt(n);if(n===l)return t;let a={scrollLeft:0,scrollTop:0},i=mn(1);const c=mn(0);if((o||!o&&r!=="fixed")&&((hn(n)!=="body"||Ho(l))&&(a=La(n)),Tt(n))){const d=On(n);i=hr(n),c.x=d.x+n.clientLeft,c.y=d.y+n.clientTop}return{width:t.width*i.x,height:t.height*i.y,x:t.x*i.x-a.scrollLeft*i.x+c.x,y:t.y*i.y-a.scrollTop*i.y+c.y}}function P2(e){return Array.from(e.getClientRects())}function p0(e){return On(Gt(e)).left+La(e).scrollLeft}function I2(e){const t=Gt(e),n=La(e),r=e.ownerDocument.body,o=Ye(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),l=Ye(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+p0(e);const i=-n.scrollTop;return ct(r).direction==="rtl"&&(a+=Ye(t.clientWidth,r.clientWidth)-o),{width:o,height:l,x:a,y:i}}function F2(e,t){const n=qe(e),r=Gt(e),o=n.visualViewport;let l=r.clientWidth,a=r.clientHeight,i=0,c=0;if(o){l=o.width,a=o.height;const d=Xc();(!d||d&&t==="fixed")&&(i=o.offsetLeft,c=o.offsetTop)}return{width:l,height:a,x:i,y:c}}function A2(e,t){const n=On(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,l=Tt(e)?hr(e):mn(1),a=e.clientWidth*l.x,i=e.clientHeight*l.y,c=o*l.x,d=r*l.y;return{width:a,height:i,x:c,y:d}}function Qu(e,t,n){let r;if(t==="viewport")r=F2(e,n);else if(t==="document")r=I2(Gt(e));else if(Vt(t))r=A2(t,n);else{const o=f0(e);r={...t,x:t.x-o.x,y:t.y-o.y}}return da(r)}function m0(e,t){const n=kr(e);return n===t||!Vt(n)||Oa(n)?!1:ct(n).position==="fixed"||m0(n,t)}function z2(e,t){const n=t.get(e);if(n)return n;let r=ua(e).filter(i=>Vt(i)&&hn(i)!=="body"),o=null;const l=ct(e).position==="fixed";let a=l?kr(e):e;for(;Vt(a)&&!Oa(a);){const i=ct(a),c=Zc(a);!c&&i.position==="fixed"&&(o=null),(l?!c&&!o:!c&&i.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||Ho(a)&&!c&&m0(e,a))?r=r.filter(p=>p!==a):o=i,a=kr(a)}return t.set(e,r),r}function O2(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const a=[...n==="clippingAncestors"?z2(t,this._c):[].concat(n),r],i=a[0],c=a.reduce((d,p)=>{const f=Qu(t,p,o);return d.top=Ye(f.top,d.top),d.right=pn(f.right,d.right),d.bottom=pn(f.bottom,d.bottom),d.left=Ye(f.left,d.left),d},Qu(t,i,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function L2(e){return u0(e)}function M2(e,t,n){const r=Tt(t),o=Gt(t),l=n==="fixed",a=On(e,!0,l,t);let i={scrollLeft:0,scrollTop:0};const c=mn(0);if(r||!r&&!l)if((hn(t)!=="body"||Ho(o))&&(i=La(t)),r){const d=On(t,!0,l,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else o&&(c.x=p0(o));return{x:a.left+i.scrollLeft-c.x,y:a.top+i.scrollTop-c.y,width:a.width,height:a.height}}function Zu(e,t){return!Tt(e)||ct(e).position==="fixed"?null:t?t(e):e.offsetParent}function h0(e,t){const n=qe(e);if(!Tt(e))return n;let r=Zu(e,t);for(;r&&S2(r)&&ct(r).position==="static";)r=Zu(r,t);return r&&(hn(r)==="html"||hn(r)==="body"&&ct(r).position==="static"&&!Zc(r))?n:r||T2(e)||n}const D2=async function(e){let{reference:t,floating:n,strategy:r}=e;const o=this.getOffsetParent||h0,l=this.getDimensions;return{reference:M2(t,await o(n),r),floating:{x:0,y:0,...await l(n)}}};function B2(e){return ct(e).direction==="rtl"}const H2={convertOffsetParentRelativeRectToViewportRelativeRect:N2,getDocumentElement:Gt,getClippingRect:O2,getOffsetParent:h0,getElementRects:D2,getClientRects:P2,getDimensions:L2,getScale:hr,isElement:Vt,isRTL:B2};function V2(e,t){let n=null,r;const o=Gt(e);function l(){clearTimeout(r),n&&n.disconnect(),n=null}function a(i,c){i===void 0&&(i=!1),c===void 0&&(c=1),l();const{left:d,top:p,width:f,height:h}=e.getBoundingClientRect();if(i||t(),!f||!h)return;const w=fl(p),v=fl(o.clientWidth-(d+f)),b=fl(o.clientHeight-(p+h)),_=fl(d),u={rootMargin:-w+"px "+-v+"px "+-b+"px "+-_+"px",threshold:Ye(0,pn(1,c))||1};let g=!0;function x(k){const C=k[0].intersectionRatio;if(C!==c){if(!g)return a();C?a(!1,C):r=setTimeout(()=>{a(!1,1e-7)},100)}g=!1}try{n=new IntersectionObserver(x,{...u,root:o.ownerDocument})}catch{n=new IntersectionObserver(x,u)}n.observe(e)}return a(!0),l}function U2(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:o=!0,ancestorResize:l=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:i=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,d=qc(e),p=o||l?[...d?ua(d):[],...ua(t)]:[];p.forEach(m=>{o&&m.addEventListener("scroll",n,{passive:!0}),l&&m.addEventListener("resize",n)});const f=d&&i?V2(d,n):null;let h=-1,w=null;a&&(w=new ResizeObserver(m=>{let[u]=m;u&&u.target===d&&w&&(w.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{w&&w.observe(t)})),n()}),d&&!c&&w.observe(d),w.observe(t));let v,b=c?On(e):null;c&&_();function _(){const m=On(e);b&&(m.x!==b.x||m.y!==b.y||m.width!==b.width||m.height!==b.height)&&n(),b=m,v=requestAnimationFrame(_)}return n(),()=>{p.forEach(m=>{o&&m.removeEventListener("scroll",n),l&&m.removeEventListener("resize",n)}),f&&f(),w&&w.disconnect(),w=null,c&&cancelAnimationFrame(v)}}const G2=(e,t,n)=>{const r=new Map,o={platform:H2,...n},l={...o.platform,_c:r};return y2(e,t,{...o,platform:l})},K2=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:o}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Gu({element:r.current,padding:o}).fn(n):{}:r?Gu({element:r,padding:o}).fn(n):{}}}};var Pl=typeof document<"u"?s.useLayoutEffect:s.useEffect;function fa(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!fa(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;r--!==0;){const l=o[r];if(!(l==="_owner"&&e.$$typeof)&&!fa(e[l],t[l]))return!1}return!0}return e!==e&&t!==t}function g0(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Xu(e,t){const n=g0(e);return Math.round(t*n)/n}function qu(e){const t=s.useRef(e);return Pl(()=>{t.current=e}),t}function W2(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:l,floating:a}={},transform:i=!0,whileElementsMounted:c,open:d}=e,[p,f]=s.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,w]=s.useState(r);fa(h,r)||w(r);const[v,b]=s.useState(null),[_,m]=s.useState(null),u=s.useCallback(L=>{L!=C.current&&(C.current=L,b(L))},[b]),g=s.useCallback(L=>{L!==$.current&&($.current=L,m(L))},[m]),x=l||v,k=a||_,C=s.useRef(null),$=s.useRef(null),E=s.useRef(p),z=qu(c),S=qu(o),F=s.useCallback(()=>{if(!C.current||!$.current)return;const L={placement:t,strategy:n,middleware:h};S.current&&(L.platform=S.current),G2(C.current,$.current,L).then(K=>{const P={...K,isPositioned:!0};T.current&&!fa(E.current,P)&&(E.current=P,yn.flushSync(()=>{f(P)}))})},[h,t,n,S]);Pl(()=>{d===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,f(L=>({...L,isPositioned:!1})))},[d]);const T=s.useRef(!1);Pl(()=>(T.current=!0,()=>{T.current=!1}),[]),Pl(()=>{if(x&&(C.current=x),k&&($.current=k),x&&k){if(z.current)return z.current(x,k,F);F()}},[x,k,F,z]);const N=s.useMemo(()=>({reference:C,floating:$,setReference:u,setFloating:g}),[u,g]),j=s.useMemo(()=>({reference:x,floating:k}),[x,k]),O=s.useMemo(()=>{const L={position:n,left:0,top:0};if(!j.floating)return L;const K=Xu(j.floating,p.x),P=Xu(j.floating,p.y);return i?{...L,transform:"translate("+K+"px, "+P+"px)",...g0(j.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:K,top:P}},[n,i,j.floating,p.x,p.y]);return s.useMemo(()=>({...p,update:F,refs:N,elements:j,floatingStyles:O}),[p,F,N,j,O])}function Y2(e){const[t,n]=s.useState(void 0);return et(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const l=o[0];let a,i;if("borderBoxSize"in l){const c=l.borderBoxSize,d=Array.isArray(c)?c[0]:c;a=d.inlineSize,i=d.blockSize}else a=e.offsetWidth,i=e.offsetHeight;n({width:a,height:i})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}const w0="Popper",[b0,Nr]=vt(w0),[Q2,y0]=b0(w0),Z2=e=>{const{__scopePopper:t,children:n}=e,[r,o]=s.useState(null);return s.createElement(Q2,{scope:t,anchor:r,onAnchorChange:o},n)},X2="PopperAnchor",q2=s.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...o}=e,l=y0(X2,n),a=s.useRef(null),i=oe(t,a);return s.useEffect(()=>{l.onAnchorChange((r==null?void 0:r.current)||a.current)}),r?null:s.createElement(W.div,I({},o,{ref:i}))}),v0="PopperContent",[J2,Fk]=b0(v0),ev=s.forwardRef((e,t)=>{var n,r,o,l,a,i,c,d;const{__scopePopper:p,side:f="bottom",sideOffset:h=0,align:w="center",alignOffset:v=0,arrowPadding:b=0,collisionBoundary:_=[],collisionPadding:m=0,sticky:u="partial",hideWhenDetached:g=!1,avoidCollisions:x=!0,onPlaced:k,...C}=e,$=y0(v0,p),[E,z]=s.useState(null),S=oe(t,Fe=>z(Fe)),[F,T]=s.useState(null),N=Y2(F),j=(n=N==null?void 0:N.width)!==null&&n!==void 0?n:0,O=(r=N==null?void 0:N.height)!==null&&r!==void 0?r:0,L=f+(w!=="center"?"-"+w:""),K=typeof m=="number"?m:{top:0,right:0,bottom:0,left:0,...m},P=Array.isArray(_)?_:[_],R=P.length>0,M={padding:K,boundary:P.filter(tv),altBoundary:R},{refs:V,floatingStyles:U,placement:Z,isPositioned:le,middlewareData:_e}=W2({strategy:"fixed",placement:L,whileElementsMounted:U2,elements:{reference:$.anchor},middleware:[k2({mainAxis:h+O,alignmentAxis:v}),x&&$2({mainAxis:!0,crossAxis:!1,limiter:u==="partial"?C2():void 0,...M}),x&&v2({...M}),E2({...M,apply:({elements:Fe,rects:zr,availableWidth:Or,availableHeight:Lr})=>{const{width:Wh,height:Yh}=zr.reference,Ko=Fe.floating.style;Ko.setProperty("--radix-popper-available-width",`${Or}px`),Ko.setProperty("--radix-popper-available-height",`${Lr}px`),Ko.setProperty("--radix-popper-anchor-width",`${Wh}px`),Ko.setProperty("--radix-popper-anchor-height",`${Yh}px`)}}),F&&K2({element:F,padding:b}),nv({arrowWidth:j,arrowHeight:O}),g&&_2({strategy:"referenceHidden"})]}),[ge,H]=_0(Z),J=Le(k);et(()=>{le&&(J==null||J())},[le,J]);const ie=(o=_e.arrow)===null||o===void 0?void 0:o.x,te=(l=_e.arrow)===null||l===void 0?void 0:l.y,ne=((a=_e.arrow)===null||a===void 0?void 0:a.centerOffset)!==0,[re,Ke]=s.useState();return et(()=>{E&&Ke(window.getComputedStyle(E).zIndex)},[E]),s.createElement("div",{ref:V.setFloating,"data-radix-popper-content-wrapper":"",style:{...U,transform:le?U.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:re,"--radix-popper-transform-origin":[(i=_e.transformOrigin)===null||i===void 0?void 0:i.x,(c=_e.transformOrigin)===null||c===void 0?void 0:c.y].join(" ")},dir:e.dir},s.createElement(J2,{scope:p,placedSide:ge,onArrowChange:T,arrowX:ie,arrowY:te,shouldHideArrow:ne},s.createElement(W.div,I({"data-side":ge,"data-align":H},C,{ref:S,style:{...C.style,animation:le?void 0:"none",opacity:(d=_e.hide)!==null&&d!==void 0&&d.referenceHidden?0:void 0}}))))});function tv(e){return e!==null}const nv=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,l,a;const{placement:i,rects:c,middlewareData:d}=t,f=((n=d.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,h=f?0:e.arrowWidth,w=f?0:e.arrowHeight,[v,b]=_0(i),_={start:"0%",center:"50%",end:"100%"}[b],m=((r=(o=d.arrow)===null||o===void 0?void 0:o.x)!==null&&r!==void 0?r:0)+h/2,u=((l=(a=d.arrow)===null||a===void 0?void 0:a.y)!==null&&l!==void 0?l:0)+w/2;let g="",x="";return v==="bottom"?(g=f?_:`${m}px`,x=`${-w}px`):v==="top"?(g=f?_:`${m}px`,x=`${c.floating.height+w}px`):v==="right"?(g=`${-w}px`,x=f?_:`${u}px`):v==="left"&&(g=`${c.floating.width+w}px`,x=f?_:`${u}px`),{data:{x:g,y:x}}}});function _0(e){const[t,n="center"]=e.split("-");return[t,n]}const Jc=Z2,ed=q2,td=ev,Ma=s.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...o}=e;return r?_b.createPortal(s.createElement(W.div,I({},o,{ref:t})),r):null});function rv(e){const t=s.useRef({value:e,previous:e});return s.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const nd=s.forwardRef((e,t)=>s.createElement(W.span,I({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}})));var ov=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Yn=new WeakMap,pl=new WeakMap,ml={},Si=0,x0=function(e){return e&&(e.host||x0(e.parentNode))},lv=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=x0(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},av=function(e,t,n,r){var o=lv(t,Array.isArray(e)?e:[e]);ml[n]||(ml[n]=new WeakMap);var l=ml[n],a=[],i=new Set,c=new Set(o),d=function(f){!f||i.has(f)||(i.add(f),d(f.parentNode))};o.forEach(d);var p=function(f){!f||c.has(f)||Array.prototype.forEach.call(f.children,function(h){if(i.has(h))p(h);else{var w=h.getAttribute(r),v=w!==null&&w!=="false",b=(Yn.get(h)||0)+1,_=(l.get(h)||0)+1;Yn.set(h,b),l.set(h,_),a.push(h),b===1&&v&&pl.set(h,!0),_===1&&h.setAttribute(n,"true"),v||h.setAttribute(r,"true")}})};return p(t),i.clear(),Si++,function(){a.forEach(function(f){var h=Yn.get(f)-1,w=l.get(f)-1;Yn.set(f,h),l.set(f,w),h||(pl.has(f)||f.removeAttribute(r),pl.delete(f)),w||f.removeAttribute(n)}),Si--,Si||(Yn=new WeakMap,Yn=new WeakMap,pl=new WeakMap,ml={})}},rd=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||ov(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),av(r,o,n,"aria-hidden")):function(){return null}},$t=function(){return $t=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},$t.apply(this,arguments)};function k0(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function iv(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,l;r<o;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var Il="right-scroll-bar-position",Fl="width-before-scroll-bar",sv="with-scroll-bars-hidden",cv="--removed-body-scroll-bar-size";function dv(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function uv(e,t){var n=s.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}function fv(e,t){return uv(t||null,function(n){return e.forEach(function(r){return dv(r,n)})})}function pv(e){return e}function mv(e,t){t===void 0&&(t=pv);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(l){var a=t(l,r);return n.push(a),function(){n=n.filter(function(i){return i!==a})}},assignSyncMedium:function(l){for(r=!0;n.length;){var a=n;n=[],a.forEach(l)}n={push:function(i){return l(i)},filter:function(){return n}}},assignMedium:function(l){r=!0;var a=[];if(n.length){var i=n;n=[],i.forEach(l),a=n}var c=function(){var p=a;a=[],p.forEach(l)},d=function(){return Promise.resolve().then(c)};d(),n={push:function(p){a.push(p),d()},filter:function(p){return a=a.filter(p),n}}}};return o}function hv(e){e===void 0&&(e={});var t=mv(null);return t.options=$t({async:!0,ssr:!1},e),t}var $0=function(e){var t=e.sideCar,n=k0(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return s.createElement(r,$t({},n))};$0.isSideCarExport=!0;function gv(e,t){return e.useMedium(t),$0}var C0=hv(),Ti=function(){},Da=s.forwardRef(function(e,t){var n=s.useRef(null),r=s.useState({onScrollCapture:Ti,onWheelCapture:Ti,onTouchMoveCapture:Ti}),o=r[0],l=r[1],a=e.forwardProps,i=e.children,c=e.className,d=e.removeScrollBar,p=e.enabled,f=e.shards,h=e.sideCar,w=e.noIsolation,v=e.inert,b=e.allowPinchZoom,_=e.as,m=_===void 0?"div":_,u=k0(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),g=h,x=fv([n,t]),k=$t($t({},u),o);return s.createElement(s.Fragment,null,p&&s.createElement(g,{sideCar:C0,removeScrollBar:d,shards:f,noIsolation:w,inert:v,setCallbacks:l,allowPinchZoom:!!b,lockRef:n}),a?s.cloneElement(s.Children.only(i),$t($t({},k),{ref:x})):s.createElement(m,$t({},k,{className:c,ref:x}),i))});Da.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Da.classNames={fullWidth:Fl,zeroRight:Il};var Ju,wv=function(){if(Ju)return Ju;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function bv(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=wv();return t&&e.setAttribute("nonce",t),e}function yv(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function vv(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var _v=function(){var e=0,t=null;return{add:function(n){e==0&&(t=bv())&&(yv(t,n),vv(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},xv=function(){var e=_v();return function(t,n){s.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},E0=function(){var e=xv(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},kv={left:0,top:0,right:0,gap:0},ji=function(e){return parseInt(e||"",10)||0},$v=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[ji(n),ji(r),ji(o)]},Cv=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return kv;var t=$v(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Ev=E0(),Sv=function(e,t,n,r){var o=e.left,l=e.top,a=e.right,i=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(sv,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(i,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(l,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Il,` {
    right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(Fl,` {
    margin-right: `).concat(i,"px ").concat(r,`;
  }
  
  .`).concat(Il," .").concat(Il,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Fl," .").concat(Fl,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(cv,": ").concat(i,`px;
  }
`)},Tv=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r,l=s.useMemo(function(){return Cv(o)},[o]);return s.createElement(Ev,{styles:Sv(l,!t,o,n?"":"!important")})},As=!1;if(typeof window<"u")try{var hl=Object.defineProperty({},"passive",{get:function(){return As=!0,!0}});window.addEventListener("test",hl,hl),window.removeEventListener("test",hl,hl)}catch{As=!1}var Qn=As?{passive:!1}:!1,jv=function(e){return e.tagName==="TEXTAREA"},S0=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!jv(e)&&n[t]==="visible")},Rv=function(e){return S0(e,"overflowY")},Nv=function(e){return S0(e,"overflowX")},ef=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=T0(e,n);if(r){var o=j0(e,n),l=o[1],a=o[2];if(l>a)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},Pv=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Iv=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},T0=function(e,t){return e==="v"?Rv(t):Nv(t)},j0=function(e,t){return e==="v"?Pv(t):Iv(t)},Fv=function(e,t){return e==="h"&&t==="rtl"?-1:1},Av=function(e,t,n,r,o){var l=Fv(e,window.getComputedStyle(t).direction),a=l*r,i=n.target,c=t.contains(i),d=!1,p=a>0,f=0,h=0;do{var w=j0(e,i),v=w[0],b=w[1],_=w[2],m=b-_-l*v;(v||m)&&T0(e,i)&&(f+=m,h+=v),i=i.parentNode}while(!c&&i!==document.body||c&&(t.contains(i)||t===i));return(p&&(o&&f===0||!o&&a>f)||!p&&(o&&h===0||!o&&-a>h))&&(d=!0),d},gl=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},tf=function(e){return[e.deltaX,e.deltaY]},nf=function(e){return e&&"current"in e?e.current:e},zv=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Ov=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Lv=0,Zn=[];function Mv(e){var t=s.useRef([]),n=s.useRef([0,0]),r=s.useRef(),o=s.useState(Lv++)[0],l=s.useState(function(){return E0()})[0],a=s.useRef(e);s.useEffect(function(){a.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var b=iv([e.lockRef.current],(e.shards||[]).map(nf),!0).filter(Boolean);return b.forEach(function(_){return _.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),b.forEach(function(_){return _.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=s.useCallback(function(b,_){if("touches"in b&&b.touches.length===2)return!a.current.allowPinchZoom;var m=gl(b),u=n.current,g="deltaX"in b?b.deltaX:u[0]-m[0],x="deltaY"in b?b.deltaY:u[1]-m[1],k,C=b.target,$=Math.abs(g)>Math.abs(x)?"h":"v";if("touches"in b&&$==="h"&&C.type==="range")return!1;var E=ef($,C);if(!E)return!0;if(E?k=$:(k=$==="v"?"h":"v",E=ef($,C)),!E)return!1;if(!r.current&&"changedTouches"in b&&(g||x)&&(r.current=k),!k)return!0;var z=r.current||k;return Av(z,_,b,z==="h"?g:x,!0)},[]),c=s.useCallback(function(b){var _=b;if(!(!Zn.length||Zn[Zn.length-1]!==l)){var m="deltaY"in _?tf(_):gl(_),u=t.current.filter(function(k){return k.name===_.type&&k.target===_.target&&zv(k.delta,m)})[0];if(u&&u.should){_.cancelable&&_.preventDefault();return}if(!u){var g=(a.current.shards||[]).map(nf).filter(Boolean).filter(function(k){return k.contains(_.target)}),x=g.length>0?i(_,g[0]):!a.current.noIsolation;x&&_.cancelable&&_.preventDefault()}}},[]),d=s.useCallback(function(b,_,m,u){var g={name:b,delta:_,target:m,should:u};t.current.push(g),setTimeout(function(){t.current=t.current.filter(function(x){return x!==g})},1)},[]),p=s.useCallback(function(b){n.current=gl(b),r.current=void 0},[]),f=s.useCallback(function(b){d(b.type,tf(b),b.target,i(b,e.lockRef.current))},[]),h=s.useCallback(function(b){d(b.type,gl(b),b.target,i(b,e.lockRef.current))},[]);s.useEffect(function(){return Zn.push(l),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:h}),document.addEventListener("wheel",c,Qn),document.addEventListener("touchmove",c,Qn),document.addEventListener("touchstart",p,Qn),function(){Zn=Zn.filter(function(b){return b!==l}),document.removeEventListener("wheel",c,Qn),document.removeEventListener("touchmove",c,Qn),document.removeEventListener("touchstart",p,Qn)}},[]);var w=e.removeScrollBar,v=e.inert;return s.createElement(s.Fragment,null,v?s.createElement(l,{styles:Ov(o)}):null,w?s.createElement(Tv,{gapMode:"margin"}):null)}const Dv=gv(C0,Mv);var R0=s.forwardRef(function(e,t){return s.createElement(Da,$t({},e,{ref:t,sideCar:Dv}))});R0.classNames=Da.classNames;const od=R0,Bv=[" ","Enter","ArrowUp","ArrowDown"],Hv=[" ","Enter"],Ba="Select",[Ha,ld,Vv]=Lo(Ba),[Pr,Ak]=vt(Ba,[Vv,Nr]),ad=Nr(),[Uv,Un]=Pr(Ba),[Gv,Kv]=Pr(Ba),Wv=e=>{const{__scopeSelect:t,children:n,open:r,defaultOpen:o,onOpenChange:l,value:a,defaultValue:i,onValueChange:c,dir:d,name:p,autoComplete:f,disabled:h,required:w}=e,v=ad(t),[b,_]=s.useState(null),[m,u]=s.useState(null),[g,x]=s.useState(!1),k=Mo(d),[C=!1,$]=St({prop:r,defaultProp:o,onChange:l}),[E,z]=St({prop:a,defaultProp:i,onChange:c}),S=s.useRef(null),F=b?!!b.closest("form"):!0,[T,N]=s.useState(new Set),j=Array.from(T).map(O=>O.props.value).join(";");return s.createElement(Jc,v,s.createElement(Uv,{required:w,scope:t,trigger:b,onTriggerChange:_,valueNode:m,onValueNodeChange:u,valueNodeHasChildren:g,onValueNodeHasChildrenChange:x,contentId:Dt(),value:E,onValueChange:z,open:C,onOpenChange:$,dir:k,triggerPointerDownPosRef:S,disabled:h},s.createElement(Ha.Provider,{scope:t},s.createElement(Gv,{scope:e.__scopeSelect,onNativeOptionAdd:s.useCallback(O=>{N(L=>new Set(L).add(O))},[]),onNativeOptionRemove:s.useCallback(O=>{N(L=>{const K=new Set(L);return K.delete(O),K})},[])},n)),F?s.createElement(I0,{key:j,"aria-hidden":!0,required:w,tabIndex:-1,name:p,autoComplete:f,value:E,onChange:O=>z(O.target.value),disabled:h},E===void 0?s.createElement("option",{value:""}):null,Array.from(T)):null))},Yv="SelectTrigger",Qv=s.forwardRef((e,t)=>{const{__scopeSelect:n,disabled:r=!1,...o}=e,l=ad(n),a=Un(Yv,n),i=a.disabled||r,c=oe(t,a.onTriggerChange),d=ld(n),[p,f,h]=F0(v=>{const b=d().filter(u=>!u.disabled),_=b.find(u=>u.value===a.value),m=A0(b,v,_);m!==void 0&&a.onValueChange(m.value)}),w=()=>{i||(a.onOpenChange(!0),h())};return s.createElement(ed,I({asChild:!0},l),s.createElement(W.button,I({type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:i,"data-disabled":i?"":void 0,"data-placeholder":a.value===void 0?"":void 0},o,{ref:c,onClick:B(o.onClick,v=>{v.currentTarget.focus()}),onPointerDown:B(o.onPointerDown,v=>{const b=v.target;b.hasPointerCapture(v.pointerId)&&b.releasePointerCapture(v.pointerId),v.button===0&&v.ctrlKey===!1&&(w(),a.triggerPointerDownPosRef.current={x:Math.round(v.pageX),y:Math.round(v.pageY)},v.preventDefault())}),onKeyDown:B(o.onKeyDown,v=>{const b=p.current!=="";!(v.ctrlKey||v.altKey||v.metaKey)&&v.key.length===1&&f(v.key),!(b&&v.key===" ")&&Bv.includes(v.key)&&(w(),v.preventDefault())})})))}),Zv="SelectValue",Xv=s.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:o,children:l,placeholder:a,...i}=e,c=Un(Zv,n),{onValueNodeHasChildrenChange:d}=c,p=l!==void 0,f=oe(t,c.onValueNodeChange);return et(()=>{d(p)},[d,p]),s.createElement(W.span,I({},i,{ref:f,style:{pointerEvents:"none"}}),c.value===void 0&&a!==void 0?a:l)}),qv=s.forwardRef((e,t)=>{const{__scopeSelect:n,children:r,...o}=e;return s.createElement(W.span,I({"aria-hidden":!0},o,{ref:t}),r||"▼")}),Jv=e=>s.createElement(Ma,I({asChild:!0},e)),$r="SelectContent",e1=s.forwardRef((e,t)=>{const n=Un($r,e.__scopeSelect),[r,o]=s.useState();if(et(()=>{o(new DocumentFragment)},[]),!n.open){const l=r;return l?yn.createPortal(s.createElement(N0,{scope:e.__scopeSelect},s.createElement(Ha.Slot,{scope:e.__scopeSelect},s.createElement("div",null,e.children))),l):null}return s.createElement(t1,I({},e,{ref:t}))}),Nt=10,[N0,Va]=Pr($r),t1=s.forwardRef((e,t)=>{const{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:l,onPointerDownOutside:a,side:i,sideOffset:c,align:d,alignOffset:p,arrowPadding:f,collisionBoundary:h,collisionPadding:w,sticky:v,hideWhenDetached:b,avoidCollisions:_,...m}=e,u=Un($r,n),[g,x]=s.useState(null),[k,C]=s.useState(null),$=oe(t,H=>x(H)),[E,z]=s.useState(null),[S,F]=s.useState(null),T=ld(n),[N,j]=s.useState(!1),O=s.useRef(!1);s.useEffect(()=>{if(g)return rd(g)},[g]),Gc();const L=s.useCallback(H=>{const[J,...ie]=T().map(re=>re.ref.current),[te]=ie.slice(-1),ne=document.activeElement;for(const re of H)if(re===ne||(re==null||re.scrollIntoView({block:"nearest"}),re===J&&k&&(k.scrollTop=0),re===te&&k&&(k.scrollTop=k.scrollHeight),re==null||re.focus(),document.activeElement!==ne))return},[T,k]),K=s.useCallback(()=>L([E,g]),[L,E,g]);s.useEffect(()=>{N&&K()},[N,K]);const{onOpenChange:P,triggerPointerDownPosRef:R}=u;s.useEffect(()=>{if(g){let H={x:0,y:0};const J=te=>{var ne,re,Ke,Fe;H={x:Math.abs(Math.round(te.pageX)-((ne=(re=R.current)===null||re===void 0?void 0:re.x)!==null&&ne!==void 0?ne:0)),y:Math.abs(Math.round(te.pageY)-((Ke=(Fe=R.current)===null||Fe===void 0?void 0:Fe.y)!==null&&Ke!==void 0?Ke:0))}},ie=te=>{H.x<=10&&H.y<=10?te.preventDefault():g.contains(te.target)||P(!1),document.removeEventListener("pointermove",J),R.current=null};return R.current!==null&&(document.addEventListener("pointermove",J),document.addEventListener("pointerup",ie,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",J),document.removeEventListener("pointerup",ie,{capture:!0})}}},[g,P,R]),s.useEffect(()=>{const H=()=>P(!1);return window.addEventListener("blur",H),window.addEventListener("resize",H),()=>{window.removeEventListener("blur",H),window.removeEventListener("resize",H)}},[P]);const[M,V]=F0(H=>{const J=T().filter(ne=>!ne.disabled),ie=J.find(ne=>ne.ref.current===document.activeElement),te=A0(J,H,ie);te&&setTimeout(()=>te.ref.current.focus())}),U=s.useCallback((H,J,ie)=>{const te=!O.current&&!ie;(u.value!==void 0&&u.value===J||te)&&(z(H),te&&(O.current=!0))},[u.value]),Z=s.useCallback(()=>g==null?void 0:g.focus(),[g]),le=s.useCallback((H,J,ie)=>{const te=!O.current&&!ie;(u.value!==void 0&&u.value===J||te)&&F(H)},[u.value]),_e=r==="popper"?rf:n1,ge=_e===rf?{side:i,sideOffset:c,align:d,alignOffset:p,arrowPadding:f,collisionBoundary:h,collisionPadding:w,sticky:v,hideWhenDetached:b,avoidCollisions:_}:{};return s.createElement(N0,{scope:n,content:g,viewport:k,onViewportChange:C,itemRefCallback:U,selectedItem:E,onItemLeave:Z,itemTextRefCallback:le,focusSelectedItem:K,selectedItemText:S,position:r,isPositioned:N,searchRef:M},s.createElement(od,{as:fn,allowPinchZoom:!0},s.createElement(Kc,{asChild:!0,trapped:u.open,onMountAutoFocus:H=>{H.preventDefault()},onUnmountAutoFocus:B(o,H=>{var J;(J=u.trigger)===null||J===void 0||J.focus({preventScroll:!0}),H.preventDefault()})},s.createElement(za,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:a,onFocusOutside:H=>H.preventDefault(),onDismiss:()=>u.onOpenChange(!1)},s.createElement(_e,I({role:"listbox",id:u.contentId,"data-state":u.open?"open":"closed",dir:u.dir,onContextMenu:H=>H.preventDefault()},m,ge,{onPlaced:()=>j(!0),ref:$,style:{display:"flex",flexDirection:"column",outline:"none",...m.style},onKeyDown:B(m.onKeyDown,H=>{const J=H.ctrlKey||H.altKey||H.metaKey;if(H.key==="Tab"&&H.preventDefault(),!J&&H.key.length===1&&V(H.key),["ArrowUp","ArrowDown","Home","End"].includes(H.key)){let te=T().filter(ne=>!ne.disabled).map(ne=>ne.ref.current);if(["ArrowUp","End"].includes(H.key)&&(te=te.slice().reverse()),["ArrowUp","ArrowDown"].includes(H.key)){const ne=H.target,re=te.indexOf(ne);te=te.slice(re+1)}setTimeout(()=>L(te)),H.preventDefault()}})}))))))}),n1=s.forwardRef((e,t)=>{const{__scopeSelect:n,onPlaced:r,...o}=e,l=Un($r,n),a=Va($r,n),[i,c]=s.useState(null),[d,p]=s.useState(null),f=oe(t,$=>p($)),h=ld(n),w=s.useRef(!1),v=s.useRef(!0),{viewport:b,selectedItem:_,selectedItemText:m,focusSelectedItem:u}=a,g=s.useCallback(()=>{if(l.trigger&&l.valueNode&&i&&d&&b&&_&&m){const $=l.trigger.getBoundingClientRect(),E=d.getBoundingClientRect(),z=l.valueNode.getBoundingClientRect(),S=m.getBoundingClientRect();if(l.dir!=="rtl"){const ne=S.left-E.left,re=z.left-ne,Ke=$.left-re,Fe=$.width+Ke,zr=Math.max(Fe,E.width),Or=window.innerWidth-Nt,Lr=zu(re,[Nt,Or-zr]);i.style.minWidth=Fe+"px",i.style.left=Lr+"px"}else{const ne=E.right-S.right,re=window.innerWidth-z.right-ne,Ke=window.innerWidth-$.right-re,Fe=$.width+Ke,zr=Math.max(Fe,E.width),Or=window.innerWidth-Nt,Lr=zu(re,[Nt,Or-zr]);i.style.minWidth=Fe+"px",i.style.right=Lr+"px"}const F=h(),T=window.innerHeight-Nt*2,N=b.scrollHeight,j=window.getComputedStyle(d),O=parseInt(j.borderTopWidth,10),L=parseInt(j.paddingTop,10),K=parseInt(j.borderBottomWidth,10),P=parseInt(j.paddingBottom,10),R=O+L+N+P+K,M=Math.min(_.offsetHeight*5,R),V=window.getComputedStyle(b),U=parseInt(V.paddingTop,10),Z=parseInt(V.paddingBottom,10),le=$.top+$.height/2-Nt,_e=T-le,ge=_.offsetHeight/2,H=_.offsetTop+ge,J=O+L+H,ie=R-J;if(J<=le){const ne=_===F[F.length-1].ref.current;i.style.bottom="0px";const re=d.clientHeight-b.offsetTop-b.offsetHeight,Ke=Math.max(_e,ge+(ne?Z:0)+re+K),Fe=J+Ke;i.style.height=Fe+"px"}else{const ne=_===F[0].ref.current;i.style.top="0px";const Ke=Math.max(le,O+b.offsetTop+(ne?U:0)+ge)+ie;i.style.height=Ke+"px",b.scrollTop=J-le+b.offsetTop}i.style.margin=`${Nt}px 0`,i.style.minHeight=M+"px",i.style.maxHeight=T+"px",r==null||r(),requestAnimationFrame(()=>w.current=!0)}},[h,l.trigger,l.valueNode,i,d,b,_,m,l.dir,r]);et(()=>g(),[g]);const[x,k]=s.useState();et(()=>{d&&k(window.getComputedStyle(d).zIndex)},[d]);const C=s.useCallback($=>{$&&v.current===!0&&(g(),u==null||u(),v.current=!1)},[g,u]);return s.createElement(r1,{scope:n,contentWrapper:i,shouldExpandOnScrollRef:w,onScrollButtonChange:C},s.createElement("div",{ref:c,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:x}},s.createElement(W.div,I({},o,{ref:f,style:{boxSizing:"border-box",maxHeight:"100%",...o.style}}))))}),rf=s.forwardRef((e,t)=>{const{__scopeSelect:n,align:r="start",collisionPadding:o=Nt,...l}=e,a=ad(n);return s.createElement(td,I({},a,l,{ref:t,align:r,collisionPadding:o,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[r1,o1]=Pr($r,{}),of="SelectViewport",l1=s.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,o=Va(of,n),l=o1(of,n),a=oe(t,o.onViewportChange),i=s.useRef(0);return s.createElement(s.Fragment,null,s.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),s.createElement(Ha.Slot,{scope:n},s.createElement(W.div,I({"data-radix-select-viewport":"",role:"presentation"},r,{ref:a,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:B(r.onScroll,c=>{const d=c.currentTarget,{contentWrapper:p,shouldExpandOnScrollRef:f}=l;if(f!=null&&f.current&&p){const h=Math.abs(i.current-d.scrollTop);if(h>0){const w=window.innerHeight-Nt*2,v=parseFloat(p.style.minHeight),b=parseFloat(p.style.height),_=Math.max(v,b);if(_<w){const m=_+h,u=Math.min(w,m),g=m-u;p.style.height=u+"px",p.style.bottom==="0px"&&(d.scrollTop=g>0?g:0,p.style.justifyContent="flex-end")}}}i.current=d.scrollTop})}))))}),a1="SelectGroup",[zk,i1]=Pr(a1),s1="SelectLabel",c1=s.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,o=i1(s1,n);return s.createElement(W.div,I({id:o.id},r,{ref:t}))}),zs="SelectItem",[d1,P0]=Pr(zs),u1=s.forwardRef((e,t)=>{const{__scopeSelect:n,value:r,disabled:o=!1,textValue:l,...a}=e,i=Un(zs,n),c=Va(zs,n),d=i.value===r,[p,f]=s.useState(l??""),[h,w]=s.useState(!1),v=oe(t,m=>{var u;return(u=c.itemRefCallback)===null||u===void 0?void 0:u.call(c,m,r,o)}),b=Dt(),_=()=>{o||(i.onValueChange(r),i.onOpenChange(!1))};return s.createElement(d1,{scope:n,value:r,disabled:o,textId:b,isSelected:d,onItemTextChange:s.useCallback(m=>{f(u=>{var g;return u||((g=m==null?void 0:m.textContent)!==null&&g!==void 0?g:"").trim()})},[])},s.createElement(Ha.ItemSlot,{scope:n,value:r,disabled:o,textValue:p},s.createElement(W.div,I({role:"option","aria-labelledby":b,"data-highlighted":h?"":void 0,"aria-selected":d&&h,"data-state":d?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1},a,{ref:v,onFocus:B(a.onFocus,()=>w(!0)),onBlur:B(a.onBlur,()=>w(!1)),onPointerUp:B(a.onPointerUp,_),onPointerMove:B(a.onPointerMove,m=>{if(o){var u;(u=c.onItemLeave)===null||u===void 0||u.call(c)}else m.currentTarget.focus({preventScroll:!0})}),onPointerLeave:B(a.onPointerLeave,m=>{if(m.currentTarget===document.activeElement){var u;(u=c.onItemLeave)===null||u===void 0||u.call(c)}}),onKeyDown:B(a.onKeyDown,m=>{var u;((u=c.searchRef)===null||u===void 0?void 0:u.current)!==""&&m.key===" "||(Hv.includes(m.key)&&_(),m.key===" "&&m.preventDefault())})}))))}),wl="SelectItemText",f1=s.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:o,...l}=e,a=Un(wl,n),i=Va(wl,n),c=P0(wl,n),d=Kv(wl,n),[p,f]=s.useState(null),h=oe(t,m=>f(m),c.onItemTextChange,m=>{var u;return(u=i.itemTextRefCallback)===null||u===void 0?void 0:u.call(i,m,c.value,c.disabled)}),w=p==null?void 0:p.textContent,v=s.useMemo(()=>s.createElement("option",{key:c.value,value:c.value,disabled:c.disabled},w),[c.disabled,c.value,w]),{onNativeOptionAdd:b,onNativeOptionRemove:_}=d;return et(()=>(b(v),()=>_(v)),[b,_,v]),s.createElement(s.Fragment,null,s.createElement(W.span,I({id:c.textId},l,{ref:h})),c.isSelected&&a.valueNode&&!a.valueNodeHasChildren?yn.createPortal(l.children,a.valueNode):null)}),p1="SelectItemIndicator",m1=s.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return P0(p1,n).isSelected?s.createElement(W.span,I({"aria-hidden":!0},r,{ref:t})):null}),h1=s.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return s.createElement(W.div,I({"aria-hidden":!0},r,{ref:t}))}),I0=s.forwardRef((e,t)=>{const{value:n,...r}=e,o=s.useRef(null),l=oe(t,o),a=rv(n);return s.useEffect(()=>{const i=o.current,c=window.HTMLSelectElement.prototype,p=Object.getOwnPropertyDescriptor(c,"value").set;if(a!==n&&p){const f=new Event("change",{bubbles:!0});p.call(i,n),i.dispatchEvent(f)}},[a,n]),s.createElement(nd,{asChild:!0},s.createElement("select",I({},r,{ref:l,defaultValue:n})))});I0.displayName="BubbleSelect";function F0(e){const t=Le(e),n=s.useRef(""),r=s.useRef(0),o=s.useCallback(a=>{const i=n.current+a;t(i),function c(d){n.current=d,window.clearTimeout(r.current),d!==""&&(r.current=window.setTimeout(()=>c(""),1e3))}(i)},[t]),l=s.useCallback(()=>{n.current="",window.clearTimeout(r.current)},[]);return s.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,o,l]}function A0(e,t,n){const o=t.length>1&&Array.from(t).every(d=>d===t[0])?t[0]:t,l=n?e.indexOf(n):-1;let a=g1(e,Math.max(l,0));o.length===1&&(a=a.filter(d=>d!==n));const c=a.find(d=>d.textValue.toLowerCase().startsWith(o.toLowerCase()));return c!==n?c:void 0}function g1(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const w1=Wv,z0=Qv,b1=Xv,y1=qv,v1=Jv,O0=e1,_1=l1,L0=c1,M0=u1,x1=f1,k1=m1,Ua=h1,Vo=w1,Uo=b1,Ir=s.forwardRef(({className:e,children:t,...n},r)=>y.jsxs(z0,{ref:r,className:q("flex h-10 w-full items-center justify-between rounded-md border border-zinc-200 border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300",e),...n,children:[t,y.jsx(y1,{asChild:!0,children:y.jsx(Xm,{className:"h-4 w-4 opacity-50"})})]}));Ir.displayName=z0.displayName;const Fr=s.forwardRef(({className:e,children:t,position:n="popper",...r},o)=>y.jsx(v1,{children:y.jsx(O0,{ref:o,className:q("relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:n,...r,children:y.jsx(_1,{className:q("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t})})}));Fr.displayName=O0.displayName;const $1=s.forwardRef(({className:e,...t},n)=>y.jsx(L0,{ref:n,className:q("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));$1.displayName=L0.displayName;const Ze=s.forwardRef(({className:e,children:t,...n},r)=>y.jsxs(M0,{ref:r,className:q("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",e),...n,children:[y.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:y.jsx(k1,{children:y.jsx(Zm,{className:"h-4 w-4"})})}),y.jsx(x1,{children:t})]}));Ze.displayName=M0.displayName;const C1=s.forwardRef(({className:e,...t},n)=>y.jsx(Ua,{ref:n,className:q("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800",e),...t}));C1.displayName=Ua.displayName;const lf=()=>{const[e,t]=Do();return y.jsxs(Vo,{onValueChange:n=>t(n),defaultValue:"PL",className:"text-red",children:[y.jsxs(Ir,{className:"w-fit",children:[y.jsx(By,{className:"mr-2 h-4 w-4"}),y.jsx(Uo,{placeholder:"Select country"})]}),y.jsx(Fr,{children:o0.map(n=>y.jsx(Ze,{value:n,children:n},n))})]})},E1=Na("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",{variants:{variant:{default:"bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",destructive:"bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",outline:"border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",secondary:"bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",ghost:"hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",link:"text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ze=s.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},l)=>{const a=r?fn:"button";return y.jsx(a,{className:q(E1({variant:t,size:n,className:e})),ref:l,...o})});ze.displayName="Button";const Os=["Enter"," "],S1=["ArrowDown","PageUp","Home"],D0=["ArrowUp","PageDown","End"],T1=[...S1,...D0],j1={ltr:[...Os,"ArrowRight"],rtl:[...Os,"ArrowLeft"]},R1={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Ga="Menu",[Ro,N1,P1]=Lo(Ga),[Gn,B0]=vt(Ga,[P1,Nr,Pa]),id=Nr(),H0=Pa(),[I1,Kn]=Gn(Ga),[F1,Go]=Gn(Ga),A1=e=>{const{__scopeMenu:t,open:n=!1,children:r,dir:o,onOpenChange:l,modal:a=!0}=e,i=id(t),[c,d]=s.useState(null),p=s.useRef(!1),f=Le(l),h=Mo(o);return s.useEffect(()=>{const w=()=>{p.current=!0,document.addEventListener("pointerdown",v,{capture:!0,once:!0}),document.addEventListener("pointermove",v,{capture:!0,once:!0})},v=()=>p.current=!1;return document.addEventListener("keydown",w,{capture:!0}),()=>{document.removeEventListener("keydown",w,{capture:!0}),document.removeEventListener("pointerdown",v,{capture:!0}),document.removeEventListener("pointermove",v,{capture:!0})}},[]),s.createElement(Jc,i,s.createElement(I1,{scope:t,open:n,onOpenChange:f,content:c,onContentChange:d},s.createElement(F1,{scope:t,onClose:s.useCallback(()=>f(!1),[f]),isUsingKeyboardRef:p,dir:h,modal:a},r)))},V0=s.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e,o=id(n);return s.createElement(ed,I({},o,r,{ref:t}))}),U0="MenuPortal",[z1,G0]=Gn(U0,{forceMount:void 0}),O1=e=>{const{__scopeMenu:t,forceMount:n,children:r,container:o}=e,l=Kn(U0,t);return s.createElement(z1,{scope:t,forceMount:n},s.createElement(jt,{present:n||l.open},s.createElement(Ma,{asChild:!0,container:o},r)))},bt="MenuContent",[L1,sd]=Gn(bt),M1=s.forwardRef((e,t)=>{const n=G0(bt,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,l=Kn(bt,e.__scopeMenu),a=Go(bt,e.__scopeMenu);return s.createElement(Ro.Provider,{scope:e.__scopeMenu},s.createElement(jt,{present:r||l.open},s.createElement(Ro.Slot,{scope:e.__scopeMenu},a.modal?s.createElement(D1,I({},o,{ref:t})):s.createElement(B1,I({},o,{ref:t})))))}),D1=s.forwardRef((e,t)=>{const n=Kn(bt,e.__scopeMenu),r=s.useRef(null),o=oe(t,r);return s.useEffect(()=>{const l=r.current;if(l)return rd(l)},[]),s.createElement(cd,I({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:B(e.onFocusOutside,l=>l.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),B1=s.forwardRef((e,t)=>{const n=Kn(bt,e.__scopeMenu);return s.createElement(cd,I({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),cd=s.forwardRef((e,t)=>{const{__scopeMenu:n,loop:r=!1,trapFocus:o,onOpenAutoFocus:l,onCloseAutoFocus:a,disableOutsidePointerEvents:i,onEntryFocus:c,onEscapeKeyDown:d,onPointerDownOutside:p,onFocusOutside:f,onInteractOutside:h,onDismiss:w,disableOutsideScroll:v,...b}=e,_=Kn(bt,n),m=Go(bt,n),u=id(n),g=H0(n),x=N1(n),[k,C]=s.useState(null),$=s.useRef(null),E=oe(t,$,_.onContentChange),z=s.useRef(0),S=s.useRef(""),F=s.useRef(0),T=s.useRef(null),N=s.useRef("right"),j=s.useRef(0),O=v?od:s.Fragment,L=v?{as:fn,allowPinchZoom:!0}:void 0,K=R=>{var M,V;const U=S.current+R,Z=x().filter(ie=>!ie.disabled),le=document.activeElement,_e=(M=Z.find(ie=>ie.ref.current===le))===null||M===void 0?void 0:M.textValue,ge=Z.map(ie=>ie.textValue),H=r_(ge,U,_e),J=(V=Z.find(ie=>ie.textValue===H))===null||V===void 0?void 0:V.ref.current;(function ie(te){S.current=te,window.clearTimeout(z.current),te!==""&&(z.current=window.setTimeout(()=>ie(""),1e3))})(U),J&&setTimeout(()=>J.focus())};s.useEffect(()=>()=>window.clearTimeout(z.current),[]),Gc();const P=s.useCallback(R=>{var M,V;return N.current===((M=T.current)===null||M===void 0?void 0:M.side)&&l_(R,(V=T.current)===null||V===void 0?void 0:V.area)},[]);return s.createElement(L1,{scope:n,searchRef:S,onItemEnter:s.useCallback(R=>{P(R)&&R.preventDefault()},[P]),onItemLeave:s.useCallback(R=>{var M;P(R)||((M=$.current)===null||M===void 0||M.focus(),C(null))},[P]),onTriggerLeave:s.useCallback(R=>{P(R)&&R.preventDefault()},[P]),pointerGraceTimerRef:F,onPointerGraceIntentChange:s.useCallback(R=>{T.current=R},[])},s.createElement(O,L,s.createElement(Kc,{asChild:!0,trapped:o,onMountAutoFocus:B(l,R=>{var M;R.preventDefault(),(M=$.current)===null||M===void 0||M.focus()}),onUnmountAutoFocus:a},s.createElement(za,{asChild:!0,disableOutsidePointerEvents:i,onEscapeKeyDown:d,onPointerDownOutside:p,onFocusOutside:f,onInteractOutside:h,onDismiss:w},s.createElement(Dm,I({asChild:!0},g,{dir:m.dir,orientation:"vertical",loop:r,currentTabStopId:k,onCurrentTabStopIdChange:C,onEntryFocus:B(c,R=>{m.isUsingKeyboardRef.current||R.preventDefault()})}),s.createElement(td,I({role:"menu","aria-orientation":"vertical","data-state":Z0(_.open),"data-radix-menu-content":"",dir:m.dir},u,b,{ref:E,style:{outline:"none",...b.style},onKeyDown:B(b.onKeyDown,R=>{const V=R.target.closest("[data-radix-menu-content]")===R.currentTarget,U=R.ctrlKey||R.altKey||R.metaKey,Z=R.key.length===1;V&&(R.key==="Tab"&&R.preventDefault(),!U&&Z&&K(R.key));const le=$.current;if(R.target!==le||!T1.includes(R.key))return;R.preventDefault();const ge=x().filter(H=>!H.disabled).map(H=>H.ref.current);D0.includes(R.key)&&ge.reverse(),t_(ge)}),onBlur:B(e.onBlur,R=>{R.currentTarget.contains(R.target)||(window.clearTimeout(z.current),S.current="")}),onPointerMove:B(e.onPointerMove,No(R=>{const M=R.target,V=j.current!==R.clientX;if(R.currentTarget.contains(M)&&V){const U=R.clientX>j.current?"right":"left";N.current=U,j.current=R.clientX}}))})))))))}),H1=s.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return s.createElement(W.div,I({},r,{ref:t}))}),Ls="MenuItem",af="menu.itemSelect",dd=s.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:r,...o}=e,l=s.useRef(null),a=Go(Ls,e.__scopeMenu),i=sd(Ls,e.__scopeMenu),c=oe(t,l),d=s.useRef(!1),p=()=>{const f=l.current;if(!n&&f){const h=new CustomEvent(af,{bubbles:!0,cancelable:!0});f.addEventListener(af,w=>r==null?void 0:r(w),{once:!0}),Mc(f,h),h.defaultPrevented?d.current=!1:a.onClose()}};return s.createElement(K0,I({},o,{ref:c,disabled:n,onClick:B(e.onClick,p),onPointerDown:f=>{var h;(h=e.onPointerDown)===null||h===void 0||h.call(e,f),d.current=!0},onPointerUp:B(e.onPointerUp,f=>{var h;d.current||(h=f.currentTarget)===null||h===void 0||h.click()}),onKeyDown:B(e.onKeyDown,f=>{const h=i.searchRef.current!=="";n||h&&f.key===" "||Os.includes(f.key)&&(f.currentTarget.click(),f.preventDefault())})}))}),K0=s.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:r=!1,textValue:o,...l}=e,a=sd(Ls,n),i=H0(n),c=s.useRef(null),d=oe(t,c),[p,f]=s.useState(!1),[h,w]=s.useState("");return s.useEffect(()=>{const v=c.current;if(v){var b;w(((b=v.textContent)!==null&&b!==void 0?b:"").trim())}},[l.children]),s.createElement(Ro.ItemSlot,{scope:n,disabled:r,textValue:o??h},s.createElement(Bm,I({asChild:!0},i,{focusable:!r}),s.createElement(W.div,I({role:"menuitem","data-highlighted":p?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0},l,{ref:d,onPointerMove:B(e.onPointerMove,No(v=>{r?a.onItemLeave(v):(a.onItemEnter(v),v.defaultPrevented||v.currentTarget.focus())})),onPointerLeave:B(e.onPointerLeave,No(v=>a.onItemLeave(v))),onFocus:B(e.onFocus,()=>f(!0)),onBlur:B(e.onBlur,()=>f(!1))}))))}),V1=s.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:r,...o}=e;return s.createElement(Y0,{scope:e.__scopeMenu,checked:n},s.createElement(dd,I({role:"menuitemcheckbox","aria-checked":pa(n)?"mixed":n},o,{ref:t,"data-state":ud(n),onSelect:B(o.onSelect,()=>r==null?void 0:r(pa(n)?!0:!n),{checkForDefaultPrevented:!1})})))}),U1="MenuRadioGroup",[Ok,G1]=Gn(U1,{value:void 0,onValueChange:()=>{}}),K1="MenuRadioItem",W1=s.forwardRef((e,t)=>{const{value:n,...r}=e,o=G1(K1,e.__scopeMenu),l=n===o.value;return s.createElement(Y0,{scope:e.__scopeMenu,checked:l},s.createElement(dd,I({role:"menuitemradio","aria-checked":l},r,{ref:t,"data-state":ud(l),onSelect:B(r.onSelect,()=>{var a;return(a=o.onValueChange)===null||a===void 0?void 0:a.call(o,n)},{checkForDefaultPrevented:!1})})))}),W0="MenuItemIndicator",[Y0,Y1]=Gn(W0,{checked:!1}),Q1=s.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:r,...o}=e,l=Y1(W0,n);return s.createElement(jt,{present:r||pa(l.checked)||l.checked===!0},s.createElement(W.span,I({},o,{ref:t,"data-state":ud(l.checked)})))}),Z1=s.forwardRef((e,t)=>{const{__scopeMenu:n,...r}=e;return s.createElement(W.div,I({role:"separator","aria-orientation":"horizontal"},r,{ref:t}))}),X1="MenuSub",[Lk,Q0]=Gn(X1),bl="MenuSubTrigger",q1=s.forwardRef((e,t)=>{const n=Kn(bl,e.__scopeMenu),r=Go(bl,e.__scopeMenu),o=Q0(bl,e.__scopeMenu),l=sd(bl,e.__scopeMenu),a=s.useRef(null),{pointerGraceTimerRef:i,onPointerGraceIntentChange:c}=l,d={__scopeMenu:e.__scopeMenu},p=s.useCallback(()=>{a.current&&window.clearTimeout(a.current),a.current=null},[]);return s.useEffect(()=>p,[p]),s.useEffect(()=>{const f=i.current;return()=>{window.clearTimeout(f),c(null)}},[i,c]),s.createElement(V0,I({asChild:!0},d),s.createElement(K0,I({id:o.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":o.contentId,"data-state":Z0(n.open)},e,{ref:Ra(t,o.onTriggerChange),onClick:f=>{var h;(h=e.onClick)===null||h===void 0||h.call(e,f),!(e.disabled||f.defaultPrevented)&&(f.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:B(e.onPointerMove,No(f=>{l.onItemEnter(f),!f.defaultPrevented&&!e.disabled&&!n.open&&!a.current&&(l.onPointerGraceIntentChange(null),a.current=window.setTimeout(()=>{n.onOpenChange(!0),p()},100))})),onPointerLeave:B(e.onPointerLeave,No(f=>{var h;p();const w=(h=n.content)===null||h===void 0?void 0:h.getBoundingClientRect();if(w){var v;const b=(v=n.content)===null||v===void 0?void 0:v.dataset.side,_=b==="right",m=_?-5:5,u=w[_?"left":"right"],g=w[_?"right":"left"];l.onPointerGraceIntentChange({area:[{x:f.clientX+m,y:f.clientY},{x:u,y:w.top},{x:g,y:w.top},{x:g,y:w.bottom},{x:u,y:w.bottom}],side:b}),window.clearTimeout(i.current),i.current=window.setTimeout(()=>l.onPointerGraceIntentChange(null),300)}else{if(l.onTriggerLeave(f),f.defaultPrevented)return;l.onPointerGraceIntentChange(null)}})),onKeyDown:B(e.onKeyDown,f=>{const h=l.searchRef.current!=="";if(!(e.disabled||h&&f.key===" ")&&j1[r.dir].includes(f.key)){var w;n.onOpenChange(!0),(w=n.content)===null||w===void 0||w.focus(),f.preventDefault()}})})))}),J1="MenuSubContent",e_=s.forwardRef((e,t)=>{const n=G0(bt,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,l=Kn(bt,e.__scopeMenu),a=Go(bt,e.__scopeMenu),i=Q0(J1,e.__scopeMenu),c=s.useRef(null),d=oe(t,c);return s.createElement(Ro.Provider,{scope:e.__scopeMenu},s.createElement(jt,{present:r||l.open},s.createElement(Ro.Slot,{scope:e.__scopeMenu},s.createElement(cd,I({id:i.contentId,"aria-labelledby":i.triggerId},o,{ref:d,align:"start",side:a.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:p=>{var f;a.isUsingKeyboardRef.current&&((f=c.current)===null||f===void 0||f.focus()),p.preventDefault()},onCloseAutoFocus:p=>p.preventDefault(),onFocusOutside:B(e.onFocusOutside,p=>{p.target!==i.trigger&&l.onOpenChange(!1)}),onEscapeKeyDown:B(e.onEscapeKeyDown,p=>{a.onClose(),p.preventDefault()}),onKeyDown:B(e.onKeyDown,p=>{const f=p.currentTarget.contains(p.target),h=R1[a.dir].includes(p.key);if(f&&h){var w;l.onOpenChange(!1),(w=i.trigger)===null||w===void 0||w.focus(),p.preventDefault()}})})))))});function Z0(e){return e?"open":"closed"}function pa(e){return e==="indeterminate"}function ud(e){return pa(e)?"indeterminate":e?"checked":"unchecked"}function t_(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function n_(e,t){return e.map((n,r)=>e[(t+r)%e.length])}function r_(e,t,n){const o=t.length>1&&Array.from(t).every(d=>d===t[0])?t[0]:t,l=n?e.indexOf(n):-1;let a=n_(e,Math.max(l,0));o.length===1&&(a=a.filter(d=>d!==n));const c=a.find(d=>d.toLowerCase().startsWith(o.toLowerCase()));return c!==n?c:void 0}function o_(e,t){const{x:n,y:r}=e;let o=!1;for(let l=0,a=t.length-1;l<t.length;a=l++){const i=t[l].x,c=t[l].y,d=t[a].x,p=t[a].y;c>r!=p>r&&n<(d-i)*(r-c)/(p-c)+i&&(o=!o)}return o}function l_(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return o_(n,t)}function No(e){return t=>t.pointerType==="mouse"?e(t):void 0}const a_=A1,i_=V0,s_=O1,c_=M1,d_=H1,u_=dd,f_=V1,p_=W1,m_=Q1,h_=Z1,g_=q1,w_=e_,X0="DropdownMenu",[b_,Mk]=vt(X0,[B0]),dt=B0(),[y_,q0]=b_(X0),v_=e=>{const{__scopeDropdownMenu:t,children:n,dir:r,open:o,defaultOpen:l,onOpenChange:a,modal:i=!0}=e,c=dt(t),d=s.useRef(null),[p=!1,f]=St({prop:o,defaultProp:l,onChange:a});return s.createElement(y_,{scope:t,triggerId:Dt(),triggerRef:d,contentId:Dt(),open:p,onOpenChange:f,onOpenToggle:s.useCallback(()=>f(h=>!h),[f]),modal:i},s.createElement(a_,I({},c,{open:p,onOpenChange:f,dir:r,modal:i}),n))},__="DropdownMenuTrigger",x_=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:r=!1,...o}=e,l=q0(__,n),a=dt(n);return s.createElement(i_,I({asChild:!0},a),s.createElement(W.button,I({type:"button",id:l.triggerId,"aria-haspopup":"menu","aria-expanded":l.open,"aria-controls":l.open?l.contentId:void 0,"data-state":l.open?"open":"closed","data-disabled":r?"":void 0,disabled:r},o,{ref:Ra(t,l.triggerRef),onPointerDown:B(e.onPointerDown,i=>{!r&&i.button===0&&i.ctrlKey===!1&&(l.onOpenToggle(),l.open||i.preventDefault())}),onKeyDown:B(e.onKeyDown,i=>{r||(["Enter"," "].includes(i.key)&&l.onOpenToggle(),i.key==="ArrowDown"&&l.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(i.key)&&i.preventDefault())})})))}),k_=e=>{const{__scopeDropdownMenu:t,...n}=e,r=dt(t);return s.createElement(s_,I({},r,n))},$_="DropdownMenuContent",C_=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=q0($_,n),l=dt(n),a=s.useRef(!1);return s.createElement(c_,I({id:o.contentId,"aria-labelledby":o.triggerId},l,r,{ref:t,onCloseAutoFocus:B(e.onCloseAutoFocus,i=>{var c;a.current||(c=o.triggerRef.current)===null||c===void 0||c.focus(),a.current=!1,i.preventDefault()}),onInteractOutside:B(e.onInteractOutside,i=>{const c=i.detail.originalEvent,d=c.button===0&&c.ctrlKey===!0,p=c.button===2||d;(!o.modal||p)&&(a.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),E_=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=dt(n);return s.createElement(d_,I({},o,r,{ref:t}))}),S_=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=dt(n);return s.createElement(u_,I({},o,r,{ref:t}))}),T_=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=dt(n);return s.createElement(f_,I({},o,r,{ref:t}))}),j_=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=dt(n);return s.createElement(p_,I({},o,r,{ref:t}))}),R_=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=dt(n);return s.createElement(m_,I({},o,r,{ref:t}))}),N_=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=dt(n);return s.createElement(h_,I({},o,r,{ref:t}))}),P_=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=dt(n);return s.createElement(g_,I({},o,r,{ref:t}))}),I_=s.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...r}=e,o=dt(n);return s.createElement(w_,I({},o,r,{ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),F_=v_,A_=x_,z_=k_,J0=C_,eh=E_,th=S_,nh=T_,rh=j_,oh=R_,lh=N_,ah=P_,ih=I_,O_=F_,L_=A_,M_=s.forwardRef(({className:e,inset:t,children:n,...r},o)=>y.jsxs(ah,{ref:o,className:q("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-100 data-[state=open]:bg-zinc-100 dark:focus:bg-zinc-800 dark:data-[state=open]:bg-zinc-800",t&&"pl-8",e),...r,children:[n,y.jsx(Ay,{className:"ml-auto h-4 w-4"})]}));M_.displayName=ah.displayName;const D_=s.forwardRef(({className:e,...t},n)=>y.jsx(ih,{ref:n,className:q("z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",e),...t}));D_.displayName=ih.displayName;const sh=s.forwardRef(({className:e,sideOffset:t=4,...n},r)=>y.jsx(z_,{children:y.jsx(J0,{ref:r,sideOffset:t,className:q("z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",e),...n})}));sh.displayName=J0.displayName;const Jr=s.forwardRef(({className:e,inset:t,...n},r)=>y.jsx(th,{ref:r,className:q("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",t&&"pl-8",e),...n}));Jr.displayName=th.displayName;const B_=s.forwardRef(({className:e,children:t,checked:n,...r},o)=>y.jsxs(nh,{ref:o,className:q("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",e),checked:n,...r,children:[y.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:y.jsx(oh,{children:y.jsx(Zm,{className:"h-4 w-4"})})}),t]}));B_.displayName=nh.displayName;const H_=s.forwardRef(({className:e,children:t,...n},r)=>y.jsxs(rh,{ref:r,className:q("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",e),...n,children:[y.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:y.jsx(oh,{children:y.jsx(zy,{className:"h-2 w-2 fill-current"})})}),t]}));H_.displayName=rh.displayName;const Ms=s.forwardRef(({className:e,inset:t,...n},r)=>y.jsx(eh,{ref:r,className:q("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...n}));Ms.displayName=eh.displayName;const Ds=s.forwardRef(({className:e,...t},n)=>y.jsx(lh,{ref:n,className:q("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800",e),...t}));Ds.displayName=lh.displayName;function V_(){const[e,t]=s.useState({width:null,height:null});return s.useLayoutEffect(()=>{const n=()=>{t({width:window.innerWidth,height:window.innerHeight})};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e}const sf=()=>y.jsx("svg",{className:"ml-2",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{d:"M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}),U_=({campaignId:e,onCopy:t,onReset:n})=>{const[,r]=Uc(),o=V_();return y.jsxs(y.Fragment,{children:[y.jsxs(Hc,{children:[y.jsx(Tn,{onClick:()=>r("newsletter"),value:"newsletter",className:"relative",children:"Newsletter"}),y.jsx(Tn,{onClick:()=>r("landing"),value:"Landing",children:"Landing"})]}),o.width<640?y.jsx("div",{className:"ml-auto",children:y.jsxs(O_,{children:[y.jsx(L_,{children:y.jsx(ze,{className:"bg-white",children:y.jsx(My,{className:"text-black"})})}),y.jsxs(sh,{children:[y.jsx(Ms,{children:"Countries"}),y.jsx(Ds,{}),y.jsx(Jr,{children:y.jsx(lf,{})}),y.jsx(Ms,{children:"Actions"}),y.jsx(Ds,{}),y.jsx(Jr,{children:y.jsx(ze,{className:"ml-2 lg:ml-4",variant:"outline",size:"icon",children:y.jsx(Fu,{onClick:t,className:"h-4 w-4"})})}),y.jsx(Jr,{children:y.jsx(ze,{className:"ml-2 lg:ml-4",variant:"outline",size:"icon",children:y.jsx(Au,{onClick:n,className:"h-4 w-4"})})}),y.jsx(Jr,{children:y.jsxs(ze,{variant:"outline",onClick:()=>window.open("https://www.prologistics.info/news_email.php?id="+e,"_blank"),children:["Open campaign",y.jsx(sf,{})]})})]})]})}):y.jsxs(y.Fragment,{children:[y.jsx(ze,{className:"ml-2 lg:ml-4",variant:"outline",size:"icon",children:y.jsx(Fu,{onClick:t,className:"h-4 w-4"})}),y.jsx(ze,{className:"ml-2 lg:ml-4",variant:"outline",size:"icon",children:y.jsx(Au,{onClick:n,className:"h-4 w-4"})}),y.jsxs("div",{className:"ml-auto flex gap-2",children:[y.jsxs(ze,{variant:"outline",onClick:()=>window.open("https://www.prologistics.info/news_email.php?id="+e,"_blank"),children:["Open campaign",y.jsx(sf,{})]}),y.jsx(lf,{})]})]})]})},cf={DE:(e,t)=>({newsletter:`
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Gratis Lieferung & Rückversand</span>
        <span class="title-advantages-item">✔️ Beste Auswahl</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Der Newsletter wird nicht richtig angezeigt? <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">Sieh</a> dir die Online-Version an.
        Füge Beliani zu deiner <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.de/content/whitelist-emails-de/">weißen Liste</a> hinzu.
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.de/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}">
                        <img src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0" alt="Beliani" style="display:block" />
                    </a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.de/wohnzimmer-moebel/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_02.jpg" width="100%" border="0"
                            alt="M&ouml;bel" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.de/wohnzubehor/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.de/gartenmoebel/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_04.jpg" width="100%" border="0"
                            alt="Garten" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    `})[e],CHDE:(e,t)=>({newsletter:`
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
        <p class="title-advantages">
            <span class="title-advantages-item">✔️ Gratis Lieferung & Rückversand</span>
            <span class="title-advantages-item">✔️ Beste Auswahl</span>
        </p>

        <p class="newsletterRecommendationHeader">
            Der Newsletter wird nicht richtig angezeigt? <a href="[[newsshowurl]]" class="newsletterRecommendationHeaderLink" style="color: #000000;">Sieh</a> dir die Online-Version an.
            Füge Beliani zu deiner <a href="https://www.beliani.ch/content/whitelist-emails-de/" class="newsletterRecommendationHeaderLink" style="color: #000000;">weissen Liste</a> hinzu.
        </p>
        <!-- top -->

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.ch/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${t}"><img
                            alt="Beliani" border="0" src="https://beliani.info/newsletter/2022/header_2023_final.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.ch/wohnzimmer-moebel/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${t}"><img
                            alt="Möbel" border="0" src="https://beliani.info/newsletter/2022/header_dach_02.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.ch/wohnzubehor/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${t}"><img
                            alt="Accessoires" border="0" src="https://beliani.info/newsletter/2022/header_dach_03.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.ch/gartenmoebel/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${t}"><img
                            alt="Garten" border="0" src="https://beliani.info/newsletter/2022/header_dach_04.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>
      `})[e],AT:(e,t)=>({newsletter:`
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
        <p class="title-advantages">
            <span class="title-advantages-item">✔️ Gratis Lieferung & Rückversand</span>
            <span class="title-advantages-item">✔️ Beste Auswahl</span>
        </p>
        <p class="newsletterRecommendationHeader">
            Der Newsletter wird nicht richtig angezeigt? <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">Sieh</a> dir die Online-Version an.
            Füge Beliani zu deiner <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.at/content/whitelist-emails-de/">weißen Liste</a> hinzu.
        </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.at/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.at/wohnzimmer-moebel/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_02.jpg" width="100%" border="0"
                            alt="Möbel" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.at/wohnzubehor/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.at/gartenmoebel/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_dach_04.jpg" width="100%" border="0"
                            alt="Garten" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    `})[e],FR:(e,t)=>({newsletter:`
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Livraison & retour gratuits</span>
        <span class="title-advantages-item">✔️ La meilleure sélection</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Ce message n’apparaît pas, consultez la <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">version en ligne.</a>
        Ajoutez Beliani <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.fr/content/whitelist-emails-fr/">à votre liste</a> d'emails.
    </p>
    <!-- top -->   
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.fr/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.fr/meubles-de-salon/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_02.jpg" width="100%" border="0"
                            alt="Meubles" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.fr/accessoires/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.fr/meubles-de-jardin/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_04.jpg" width="100%" border="0"
                            alt="Jardin" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    `})[e],CHFR:(e,t)=>({newsletter:`
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Livraison & retour gratuits</span>
        <span class="title-advantages-item">✔️ La meilleure sélection</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Ce message n’apparaît pas, consultez la <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">version en ligne.</a>
        Ajoutez Beliani <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.ch/content/whitelist-emails-fr/">à votre liste</a> d'emails.
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.ch/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.ch/meubles-de-salon/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_02.jpg" width="100%" border="0"
                            alt="Meubles" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.ch/accessoires/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.ch/meubles-de-jardin/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_fr_04.jpg" width="100%" border="0"
                            alt="Jardin" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
      `})[e],IT:(e,t)=>({newsletter:`
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Spedizione e reso gratuiti</span>
        <span class="title-advantages-item">✔️ Miglior selezione</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Non riesci a visualizzare la newsletter? Prova <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="[[newsshowurl]]">la versione online.</a>
        Aggiungi Beliani alla <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="https://www.beliani.it/content/whitelist-emails-it/">tua lista di e-mail</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.it/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.it/soggiorno/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_it_02.jpg" width="100%" border="0"
                            alt="Arredi" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.it/accessori-casa/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_it_03.jpg" width="100%" border="0"
                            alt="Accessori" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.it/giardino/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_it_04.jpg" width="100%" border="0"
                            alt="Giardino" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `})[e],UK:(e,t)=>({newsletter:`
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Free Delivery & Return</span>
        <span class="title-advantages-item">✔️ Best Selection</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Having trouble viewing Newsletter? View the <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">online version.</a>
        Add Beliani to your <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.co.uk/content/whitelist-emails/">whitelist</a>
    </p>
  <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.co.uk/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.co.uk/living-room-furniture/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_uk_02.jpg" width="100%" border="0"
                            alt="Furniture" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.co.uk/home-accessories/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_uk_03.jpg" width="100%" border="0"
                            alt="Accessories" style="display: block" /></a>
                </th>
                <th>
                    <a
                        href="https://www.beliani.co.uk/garden-furniture/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_uk_04.jpg" width="100%" border="0"
                            alt="Garden" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
      `})[e],ES:(e,t)=>({newsletter:`
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Entrega & devolución gratis</span>
        <span class="title-advantages-item">✔️ Amplia selección</span>
    </p>
    <p class="newsletterRecommendationHeader">
        ¿No puedes ver la Newsletter? Consulta la versión <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">en línea.</a>
        Añade Beliani a tu <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.es/content/whitelist-emails-es/">lista blanca</a> de emails
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.es/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.es/salon/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_es_02.jpg" width="100%" border="0"
                            alt="Muebles" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.es/accesorios-del-hogar/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_es_03.jpg" width="100%" border="0"
                            alt="Accesorios" style="display:block" /></a></th>
                <th><a href="https://www.beliani.es/jardin/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_es_04.jpg" width="100%" border="0"
                            alt="Jardín" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `})[e],PT:(e,t)=>({newsletter:`
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Entrega & devolução grátis</span>
        <span class="title-advantages-item">✔️ A melhor seleção</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Está com problemas para visualizar a Newsletter? Veja a versão <a href="[[newsshowurl]]" class="newsletterRecommendationHeaderLink" style="color: #000000;">online.</a>
        Adicione Beliani à sua <a href="https://www.beliani.pt/content/whitelist-emails-pt/" class="newsletterRecommendationHeaderLink" style="color: #000000;">lista branca</a> de emails.
    </p>
    <!-- top -->

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.pt/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${t}"><img
                            alt="Beliani" border="0" src="https://beliani.info/newsletter/2022/header_2023_final.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>

    <table align="center" border="0" cellpadding="0" cellspacing="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.pt/sala/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${t}"><img
                            alt="Mobiliário" border="0" src="https://beliani.info/newsletter/2022/header_pt_02.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.pt/acessorios/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${t}"><img
                            alt="Acessórios" border="0" src="https://beliani.info/newsletter/2022/header_pt_03.jpg"
                            style="display:block" width="100%" /></a></th>
                <th><a
                        href="https://www.beliani.pt/exterior/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${t}"><img
                            alt="Jardim" border="0" src="https://beliani.info/newsletter/2022/header_pt_04.jpg"
                            style="display:block" width="100%" /></a></th>
            </tr>
        </tbody>
    </table>
      `})[e],PL:(e,t)=>({newsletter:`
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Darmowa dostawa i zwroty</span>
        <span class="title-advantages-item">✔️ Najlepszy wybór</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Przejdź do naszej <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">wersji online.</a>
        Dodaj Beliani do <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.pl/content/whitelist-emails-pl/">zaufanych maili.</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a href="https://www.beliani.pl/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0" style="
        margin: 0 auto;
        background-color: #ffffff;
        padding-top: 0em;
        padding-bottom: 0em;
      ">
        <tbody>
            <tr>
                <th>
                    <a
                        href="https://www.beliani.pl/meble-do-salonu/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_pl_02.jpg" width="100%" border="0"
                            alt="Meble" style="display: block" /></a>
                </th>
                <th>
                    <a href="https://www.beliani.pl/dodatki/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_pl_03.jpg" width="100%" border="0"
                            alt="Akcesoria" style="display: block" /></a>
                </th>
                <th>
                    <a href="https://www.beliani.pl/ogrod/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_pl_04.jpg" width="100%" border="0"
                            alt="Ogród" style="display: block" /></a>
                </th>
            </tr>
        </tbody>
    </table>
      `})[e],HU:(e,t)=>({newsletter:`
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Ingyenes szállítás és visszaküldés</span>
        <span class="title-advantages-item">✔️ Széles választék</span>
    </p>

    <p class="newsletterRecommendationHeader">
        Hírlevelünk nem jelenik meg tökéletesen? Nézd meg az <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="[[newsshowurl]]">online verziót.</a>
        Add hozzá a Belianit <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="https://www.beliani.hu/content/whitelist-emails-hu/">fehérlistádhoz.</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.hu/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.hu/nappali-butorok/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_hu_02.jpg" width="100%" border="0"
                            alt="Bútorok" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.hu/otthoni-kiegeszitok/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_hu_03.jpg" width="100%" border="0"
                            alt="Kiegészítők" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.hu/kerti-garniturak/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_hu_04.jpg" width="100%" border="0"
                            alt="Kültér" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `})[e],NL:(e,t)=>({newsletter:`
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Gratis levering & retour</span>
        <span class="title-advantages-item">✔️ Beste selectie</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Wordt deze nieuwsbrief niet correct weergegeven? Naar de <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">online versie.</a>
        Voeg Beliani toe aan je <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.nl/content/whitelist-emails-nl/">whitelist</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.nl/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.nl/woonkamer/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_nl_02.jpg" width="100%" border="0"
                            alt="Meubels" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.nl/woonaccessoires/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_nl_03.jpg" width="100%" border="0"
                            alt="Accessoires" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.nl/tuinmeubelen/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_nl_04.jpg" width="100%" border="0"
                            alt="Tuin" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `})[e],SE:(e,t)=>({newsletter:`
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Gratis leverans och retur</span>
        <span class="title-advantages-item">✔️ Bästa urvalet</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Ser du inte bilderna? Gå till vår <a class="newsletterRecommendationHeaderLink" href="[[newsshowurl]]" style="color: #000;">onlineversion.</a>
        Lägg till Beliani i din <a class="newsletterRecommendationHeaderLink" href="https://www.beliani.se/content/whitelist-emails-se/" style="color: #000;">vitlista</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.se/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.se/vardagsrumsmobler/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_se_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.se/hemtillbehor/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_se_03.jpg" width="100%" border="0"
                            alt="Boligtilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.se/tradgardsmobler/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_se_04.jpg" width="100%" border="0"
                            alt="Havemøbler" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `})[e],DK:(e,t)=>({newsletter:`
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Gratis levering og returnering</span>
        <span class="title-advantages-item">✔️ Bedste udvalg</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Kan du ikke se billeder? Tjek online version <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="[[newsshowurl]]">af vores webshop.</a>
        Tilføj Beliani til din <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="https://www.beliani.dk/content/whitelist-emails-dk/">whitelist</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.dk/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.dk/stuemobler/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_dk_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.dk/boligtilbehor/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_dk_03.jpg" width="100%" border="0"
                            alt="Boligtilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.dk/havemobler/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_dk_04.jpg" width="100%" border="0"
                            alt="Havemøbler" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `})[e],CZ:(e,t)=>({newsletter:`
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Doručení a vrácení zdarma</span>
        <span class="title-advantages-item">✔️ Nejlepší výběr</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Máte problémy se zobrazením newsletteru? Tady zobrazíte <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="[[newsshowurl]]">online verzi.</a>
        Přidejte Beliani mezi <a class="newsletterRecommendationHeaderLink" style="color: #000000;" href="https://www.beliani.cz/content/whitelist-emails-cz/">povolené e-mailové adresy</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.cz/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.cz/nabytek-do-obyvaku/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_cz_02.jpg" width="100%" border="0"
                            alt="Nábytek" style="display:block" /></a></th>
                <th><a href="https://www.beliani.cz/doplnky/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_cz_03.jpg" width="100%" border="0"
                            alt="Doplnky" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.cz/zahradni-nabytek/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_cz_04.jpg" width="100%" border="0"
                            alt="Zahrada" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `})[e],FI:(e,t)=>({newsletter:`
    <!--[if gte mso 9]>
    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#ececec">
    </v:background>
    <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Ilmainen toimitus ja palautus</span>
        <span class="title-advantages-item">✔️ Paras valikoima</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Eikö uutiskirje näy kunnolla? Avaa <a href="[[newsshowurl]]" class="newsletterRecommendationHeaderLink" style="color: #000000;">uutiskirje selaimessa.</a>
        Lisää Beliani sähköpostisi <a href="https://www.beliani.fi/content/whitelist-emails-fi/" class="newsletterRecommendationHeaderLink" style="color: #000000;">valkolistalle.</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.fi/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.fi/olohuoneen-kalusteet/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_fi_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.fi/sisustustuotteet/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_fi_03.jpg" width="100%" border="0"
                            alt="Boligtilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.fi/puutarhakalusteet/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_fi_04.jpg" width="100%" border="0"
                            alt="Havemøbler" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `})[e],NO:(e,t)=>({newsletter:`
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Gratis levering</span>
        <span class="title-advantages-item">✔️ Beste utvalg</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Har du problemer med å se nyhetsbrevet? Se <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="[[newsshowurl]]">online versjonen.</a>
        Legg til Beliani i din <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="https://www.beliani.no/content/whitelist-emails-no/">hviteliste</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.no/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_2023_final.jpg" width="100%" border="0"
                            alt="Beliani" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.no/stuemoebler/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_no_02.jpg" width="100%" border="0"
                            alt="Møbler" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.no/tilbehoer/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_no_03.jpg" width="100%" border="0"
                            alt="Tilbehør" style="display:block" /></a></th>
                <th><a
                        href="https://www.beliani.no/hagemoebler/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            src="https://beliani.info/newsletter/2022/header_no_04.jpg" width="100%" border="0"
                            alt="Hage" style="display:block" /></a></th>
            </tr>
        </tbody>
    </table>
      `})[e],SK:(e,t)=>({newsletter:`
      <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#ececec">
      </v:background>
      <![endif]-->
    <p class="title-advantages">
        <span class="title-advantages-item">✔️ Bezplatné doručenie a vrátenie</span>
        <span class="title-advantages-item">✔️ Najlepší výber</span>
    </p>
    <p class="newsletterRecommendationHeader">
        Máte problémy s čítaním e-mailu? Pozrite si <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="[[newsshowurl]]">online verziu.</a>
        Pridajte Beliani medzi <a class="newsletterRecommendationHeaderLink" style="color: #000;" href="https://www.beliani.sk/content/whitelist-emails-sk/">povolené e-mailové adresy</a>
    </p>
    <!-- top -->
    <table align="center" cellspacing="0" cellpadding="0" border="0"
        style="margin: 0 auto; background-color:#ffffff; padding-top: 0em; padding-bottom: 0em; ">
        <tbody>
            <tr>
                <th><a href="https://www.beliani.sk/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_2023_final.jpg"
                            alt="Beliani" width="100%" border="0" /></a></th>
            </tr>
        </tbody>
    </table>
    <table style="margin: 0 auto; background-color: #ffffff; padding-top: 0em; padding-bottom: 0em;" border="0"
        cellspacing="0" cellpadding="0" align="center">
        <tbody>
            <tr>
                <th><a
                        href="https://www.beliani.sk/nabytok-do-obyvacky/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_sk_02.jpg"
                            alt="Nábytok" width="100%" border="0" /></a></th>
                <th><a href="https://www.beliani.sk/doplnky/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_sk_03.jpg"
                            alt="Doplnky" width="100%" border="0" /></a></th>
                <th><a href="https://www.beliani.sk/zahrada/?utm_source=newsletter&utm_medium=email&utm_campaign=${t}"><img
                            style="display: block;" src="https://beliani.info/newsletter/2022/header_sk_04.jpg"
                            alt="Záhrada" width="100%" border="0" /></a></th>
            </tr>
        </tbody>
    </table>
      `})[e]},df={DE:(e=" Alle Artikel unterliegen der Verfügbarkeit. Alle Preise können ohne Vorankündigung geändert werden.",t,n)=>({newsletter:`
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <tr>
                <td class="newsletterTopBottomContainer">
                    <span class="newsletterFooterTitle">
                        Tausende weitere Möbel
                    </span>
                </td>
            </tr>
            <tr>
                <td class="newsletterFooterCategories">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tbody>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.de/sofas/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterSofas.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.de/betten/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterBeds.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.de/tische/kaffeetische/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterCoffee.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.de/stuehle/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterChairs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.de/sessel/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterArmchairs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.de/aufbewahrung/kommoden/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterSideboards.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFTBottom">
                                    <a
                                        href="https://www.beliani.de/lampen/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterLamps.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHTBottom">
                                    <a
                                        href="https://www.beliani.de/teppich/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterRugs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.de/content/klarna-de/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_deat.png" style="display:block" width="100%" /></a></td>
        </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <tr>
                <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="left" class="footer">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterTopBottomContainer">
                                                    <span class="newsletterFooterTitle">
                                                          Folge uns auf
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.instagram.com/beliani_deutschland/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Instagram">
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.facebook.com/beliani.de/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Facebook">
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="YouTube">
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.pinterest.de/belianide/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Pinterest">
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <!-- ADVANTAGES -->
            <tr>
                <td class="newsletterTopBottomContainer">
                    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                        <tbody>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.de/content/lieferung/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages1New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.de/content/uber-uns/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages2New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.de/content/faq/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages3New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.de/content/agb/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages4New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <tr>
                <td class="newsletterTopBottomContainer" align="left">
                    <span class="newsletterConditions" style="color: #000000;">*Bedingungen: ${e}</span>
                </td>
            </tr>
            <tr>
                <td
                    style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                    <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Newsletter
                            abbestellen</a>
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b><font style="font-size: 10px;">Impressum</font></b>
                        <br />Beliani GmbH, 6340 Baar, Schweiz<br />Telefonnummer: 0221 6778 9927; E-Mail-Adresse:
                        <a href="mailto:mail@beliani.de">mail@beliani.de</a>
                        <br />Handelsregister: Handelsregister des Kantons Zug, CH-170.4.009.724-3<br />USt-IDNr:
                        DE 276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `})[t],CHDE:(e="Alle Artikel unterliegen der Verfügbarkeit. Alle Preise können ohne Vorankündigung geändert werden.",t,n)=>({newsletter:`
    <!-- FOOTER -->
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterFooter" style="max-width:650px; background-color:#ffffff; display: block;">
        <tbody>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <tr>
                <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Tausende weitere Möbel </span></td>
            </tr>
            <tr>
                <td class="newsletterFooterCategories">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.ch/sofas/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterSofas.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.ch/betten/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterBeds.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.ch/tische/kaffeetische/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterCoffee.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.ch/stuehle/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterChairs.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.ch/sessel/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterArmchairs.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.ch/aufbewahrung/kommoden/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterSideboards.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFTBottom"><a href="https://www.beliani.ch/lampen/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterLamps.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHTBottom"><a href="https://www.beliani.ch/teppich/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterRugs.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <!--KLARNA-->
            <tr>
                <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.ch/content/bezahlung/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" margin-top="30px" src="https://beliani.info/newsletter/2022/NsltBanner_dach.png" style="display:block" width="100%" /></a></td>
            </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <tr>
                <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="left" class="footer">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Folge uns auf </span></td>
                                    </tr>
                                </tbody>
                            </table>
                            </td>
                            <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td class="newsletterSocialIcon"><a href="https://www.instagram.com/beliani_schweiz/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="Instagram" border="0" src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                        <td class="newsletterSocialIcon"><a href="https://www.facebook.com/beliani.ch/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="Facebook" border="0" src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                        <td class="newsletterSocialIcon"><a href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="YouTube" border="0" src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                        <td class="newsletterSocialIcon"><a href="https://www.pinterest.com/belianich/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="Pinterest" border="0" src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <!-- ADVANTAGES -->
            <tr>
                <td class="newsletterTopBottomContainer">
                <table border="0" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;" width="100%">
                    <tbody>
                        <tr>
                            <td><a href="https://www.beliani.ch/content/lieferung/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterAdvantages1New.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.beliani.ch/content/uber-uns/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterAdvantages2New.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.beliani.ch/content/faq/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterAdvantages3New.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.beliani.ch/content/agb/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/dachfooterAdvantages4New.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <tr>
                <td align="left" class="newsletterTopBottomContainer"><span class="newsletterConditions" style="color: #000000;">*Bedingungen: ${e}</span></td>
            </tr>
            <tr>
                <td style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Newsletter abbestellen</a></p>
                </td>
            </tr>
        </tbody>
    </table>
    
    <table align="center" border="0" cellpadding="0" cellspacing="0">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails"><span style="color: #000000;text-align: center; font-size:11px;"><b><font style="font-size: 10px;">Impressum</font> </b><br />
                Beliani GmbH, 6340 Baar, Schweiz<br />
                Telefonnummer: 043 508 22 33; E-Mail-Adresse: <a href="mailto:mail@beliani.ch">mail@beliani.ch</a><br />
                Handelsregister: Handelsregister des Kantons Zug, CH-170.4.008.869-6<br />
                USt-IDNr: CHE-114.825.869 MWST </span></td>
            </tr>
        </tbody>
    </table>
    `})[t],AT:(e="Alle Artikel unterliegen der Verfügbarkeit. Alle Preise können ohne Vorankündigung geändert werden.",t,n)=>({newsletter:`
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
        border="0" align="center">
        <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
            <tr>
                <td class="newsletterTopBottomContainer">
                    <span class="newsletterFooterTitle">
                        Tausende weitere Möbel
                    </span>
                </td>
            </tr>
            <tr>
                <td class="newsletterFooterCategories">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tbody>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.at/sofas/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterSofas.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.at/betten/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterBeds.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.at/tische/kaffeetische/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterCoffee.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.at/stuehle/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterChairs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.at/sessel/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterArmchairs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.at/aufbewahrung/kommoden/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterSideboards.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFTBottom">
                                    <a
                                        href="https://www.beliani.at/lampen/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterLamps.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHTBottom">
                                    <a
                                        href="https://www.beliani.at/teppich/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterRugs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.at/content/klarna-at/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_deat.png" style="display:block" width="100%" /></a></td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
            <tr>
                <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="left" class="footer">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterTopBottomContainer">
                                                    <span class="newsletterFooterTitle">
                                                          Folge uns auf
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.instagram.com/beliani_oesterreich/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Instagram"    >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.facebook.com/beliani.oesterreich/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Facebook"    >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                            width="100%" border="0" style="display:block;" alt="YouTube"
                                                               >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://pinterest.com/belianiat/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Pinterest"    >
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <!-- ADVANTAGES -->
            <tr>
                <td class="newsletterTopBottomContainer">
                    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://www.beliani.at/content/lieferung/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages1New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.at/content/uber-uns/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages2New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.at/content/faq/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages3New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.at/content/agb/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/dachfooterAdvantages4New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <tr>
                <td class="newsletterTopBottomContainer" align="left">
                    <span class="newsletterConditions" style="color: #000000;">*Bedingungen: ${e}</span>
                </td>
            </tr>
            <tr>
                <td
                    style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                    <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Newsletter abbestellen</a>
                    </p>
                </td>
            </tr>

        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b><font style="font-size: 10px;">Impressum</font>
                        </b><br />
                        Beliani GmbH, 6340 Baar, Schweiz<br />
                        Telefonnummer: +43 1 375 00 57; E-Mail Adresse: <a
                            href="mailto:mail@beliani.at">mail@beliani.at</a><br />
                        Handelsregister: Handelsregister des Kantons Zug, CH-170.4.009.724-3<br />
                        USt-IDNr: DE 276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `})[t],FR:(e="Tous les articles sont soumis à la disponibilité. Tous les prix sont susceptibles d'être modifiés sans notification.",t,n)=>({newsletter:`
    <!--FOOTER-->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
     border="0" align="center">
     <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
         <tr>
             <td class="newsletterTopBottomContainer">
                 <span class="newsletterFooterTitle">
                 En voir beaucoup plus
              </span>
             </td>
         </tr>
         <tr>
             <td class="newsletterFooterCategories">
                 <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                     <tbody>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.fr/meubles-de-salon/canapes/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_08.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.fr/lits/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_10.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.fr/tables/tables-basses/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_14.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.fr/chaises/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_15.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.fr/fauteuils/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_18.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.fr/meubles-de-salon/rangement/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023footer_19.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFTBottom">
                                 <a
                                     href="https://www.beliani.fr/lampes/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_22.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHTBottom">
                                 <a
                                     href="https://www.beliani.fr/tapis/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_23.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.fr/content/paiement/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_fr.png" style="display:block" width="100%" /></a></td>
        </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td align="center">
                 <table cellpadding="0" cellspacing="0" border="0" width="100%">
                     <tbody>
                         <tr>
                             <td align="left" class="footer">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterTopBottomContainer">
                                                 <span class="newsletterFooterTitle">
                                                 Suivez-nous
                                              </span>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                             <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.instagram.com/beliani_fr/?hl=fr?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Instagram"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.facebook.com/beliani.fr/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Facebook"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                         width="100%" border="0" style="display:block;" alt="YouTube"
                                                            >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.pinterest.fr/belianifr/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Pinterest"    >
                                                 </a>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <!-- ADVANTAGES -->
         <tr>
             <td class="newsletterTopBottomContainer">
                 <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                     <tbody>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fr/content/livraison//?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_27.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fr/content/a-propos-de-nous/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_28.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fr/content/centre-d-aide/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_29.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fr/content/cgv/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/fr2023fr_30.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td class="newsletterTopBottomContainer" align="left">
                 <span class="newsletterConditions" style="color: #000000;">*Conditions: ${e}</span>
             </td>
         </tr>
         <tr>
             <td
                 style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                 <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Désabonnement</a>
                 </p>
             </td>
         </tr>

     </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
     <tbody>
         <tr>
             <td align="center" class="newsletterFooterCompanyDetails">
                 <span style="color: #000000;text-align: center; font-size:11px;">
                     <b><font style="font-size: 10px;">Mentions légales</font></b>
                     <br />
                     Beliani GmbH, 6340 Baar, Suisse<br />
                     téléphone: 01 87 39 86 15; adresse e-mail : <a href="mailto:mail@beliani.fr">mail@beliani.fr</a><br>
                         Commercial Register: Commercial Register of the Canton of
              Zug, CH-170.4.008.869-6<br />USt-IDNr: DE 276156472
                 </span>
             </td>
         </tr>
     </tbody>
    </table>
    `})[t],CHFR:(e="Tous les articles sont soumis à la disponibilité. Tous les prix sont susceptibles d'être modifiés sans notification.",t,n)=>({newsletter:`
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
    border="0" align="center">
    <tbody>
       <tr>
           <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
       </tr>
        <tr>
            <td class="newsletterTopBottomContainer">
                <span class="newsletterFooterTitle">
                En voir beaucoup plus
             </span>
            </td>
        </tr>
        <tr>
            <td class="newsletterFooterCategories">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tbody>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT">
                                <a
                                    href="https://www.beliani.ch/meubles-de-salon/canapes/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_08.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHT">
                                <a
                                    href="https://www.beliani.ch/lits/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_10.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT">
                                <a
                                    href="https://www.beliani.ch/tables/tables-basses/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_14.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHT">
                                <a
                                    href="https://www.beliani.ch/chaises/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_15.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT">
                                <a
                                    href="https://www.beliani.ch/fauteuils/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_18.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHT">
                                <a
                                    href="https://www.beliani.ch/meubles-de-salon/rangement/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023footer_19.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFTBottom">
                                <a
                                    href="https://www.beliani.ch/lampes/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_22.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHTBottom">
                                <a
                                    href="https://www.beliani.ch/tapis/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_23.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
           <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
       </tr>
       <!--KLARNA-->
       <tr>
           <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.ch/content/paiement/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_chfr.png" style="display:block" width="100%" /></a></td>
       </tr>
        <tr>
            <td>
                <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
            </td>
        </tr>
        <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="left" class="footer">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td class="newsletterTopBottomContainer">
                                                <span class="newsletterFooterTitle">
                                                Suivez-nous
                                             </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://www.instagram.com/beliani_schweiz/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                    <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                        width="100%" border="0" style="display:block;"
                                                        alt="Instagram"    >
                                                </a>
                                            </td>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://www.facebook.com/beliani.ch/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                    <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                        width="100%" border="0" style="display:block;"
                                                        alt="Facebook"    >
                                                </a>
                                            </td>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                    <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                        width="100%" border="0" style="display:block;" alt="YouTube"
                                                           >
                                                </a>
                                            </td>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://pinterest.com/belianich/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                    <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                        width="100%" border="0" style="display:block;"
                                                        alt="Pinterest"    >
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
            </td>
        </tr>
        <!-- ADVANTAGES -->
        <tr>
            <td class="newsletterTopBottomContainer">
                <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                    <tbody>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.ch/content/livraison/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_27.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.ch/content/a-propos-de-nous/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_28.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.ch/content/faq/#7._Kann_ich_die_Garantie_auf_meinen_M_beln_auch_verl_ngern_/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_29.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.ch/content/cgv?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/chfr2023chfr_30.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
            </td>
        </tr>
        <tr>
            <td class="newsletterTopBottomContainer" align="left">
                <span class="newsletterConditions" style="color: #000000;">*Conditions: ${e}</span>
            </td>
        </tr>
        <tr>
            <td
                style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Désabonnement</a>
                </p>
            </td>
        </tr>

    </tbody>
   </table>
   <table cellspacing="0" cellpadding="0" border="0" align="center">
       <tbody>
           <tr>
               <td align="center" class="newsletterFooterCompanyDetails">
                   <span style="color: #000000;text-align: center; font-size:11px;">
                       <b><font style="font-size: 10px;">Mentions légales</font></b>
                       <br />
                       Beliani GmbH, 6340 Baar, Suisse<br />
                       Téléphone: 043 508 22 33; E-Mail: <a href="mailto:mail@beliani.ch">mail@beliani.ch</a><br>
                           CH-170.4.008.869-6<br />USt-IDNr: CHE-114.825.869 MWST
                   </span>
               </td>
           </tr>
       </tbody>
   </table>
    `})[t],IT:(e="Tutti gli articoli sono soggetti a disponibilità. Tutti i prezzi sono soggetti a modifiche senza preavviso.",t,n)=>({newsletter:`
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
     border="0" align="center">
     <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
         <tr>
             <td class="newsletterTopBottomContainer">
                 <span class="newsletterFooterTitle">
                    Scopri migliaia di prodotti
                 </span>
             </td>
         </tr>
         <tr>
             <td class="newsletterFooterCategories">
                 <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                     <tbody>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.it/divani/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_08.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.it/letti/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_10.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.it/tavoli/tavolini/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_14.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.it/sedie/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_15.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.it/poltrone/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_19.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.it/soggiorno/mobili-portaoggetti/tutti+i+prodotti/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_20.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFTBottom">
                                 <a
                                     href="https://www.beliani.it/illuminazione/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_23.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHTBottom">
                                 <a
                                     href="https://www.beliani.it/tappeti/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_24.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.it/content/pagamento/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_it.png" style="display:block" width="100%" /></a></td>
        </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td align="center">
                 <table cellpadding="0" cellspacing="0" border="0" width="100%">
                     <tbody>
                         <tr>
                             <td align="left" class="footer">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterTopBottomContainer">
                                                 <span class="newsletterFooterTitle">
                                                    Seguici
                                                 </span>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                             <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.instagram.com/beliani_italia/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Instagram"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.facebook.com/belianiitalia/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Facebook"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                         width="100%" border="0" style="display:block;" alt="YouTube"
                                                            >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.pinterest.com/belianiitalia/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Pinterest"    >
                                                 </a>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <!-- ADVANTAGES -->
         <tr>
             <td class="newsletterTopBottomContainer">
                 <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                     <tbody>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.it/content/consegna/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_28.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.it/content/chi-siamo/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_29.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.it/content/help-center_italian/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_30.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.it/content/termini-e-condizioni/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/IT2023it_31.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td class="newsletterTopBottomContainer" align="left">
                 <span class="newsletterConditions" style="color: #000000;">*Termini e Condizioni: ${e}</span>
             </td>
         </tr>
         <tr>
             <td
                 style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                 <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Annulla l’iscrizione</a>
                 </p>
             </td>
         </tr>

     </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b>
                            <font style="font-size: 10px;">Dettagli societari</font>
                        </b><br />
                        Beliani (DE) GmbH CH 6340 Baar Svizzera<br />
                        Numero di telefono: 06 5654 8602; Indirizzo e-mail: <a
                            href="mailto:mail@beliani.it">mail@beliani.it</a><br />
                            Registro commerciale (USt-IDNr): registro commerciale del Canton ZUG, CHE-115.695.894<br />Partita IVA: DE 276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `})[t],UK:(e="All items are subject to availability. All prices are subject to change without notification.",t,n)=>({newsletter:`
    <!--FOOTER-->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
     border="0" align="center">
     <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
         <tr>
             <td class="newsletterTopBottomContainer">
                 <span class="newsletterFooterTitle">
                 See thousands more
              </span>
             </td>
         </tr>
         <tr>
         <td class="newsletterFooterCategories">
             <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                 <tbody>
                     <tr>
                         <td class="newsletterFooterCategoryLEFT">
                             <a
                                 href="https://www.beliani.co.uk/sofas/all+products/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_08.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                         <td class="newsletterFooterCategoryRIGHT">
                             <a
                                 href="https://www.beliani.co.uk/beds/all+products/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_10.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                     </tr>
                     <tr>
                         <td class="newsletterFooterCategoryLEFT">
                             <a
                                 href="https://www.beliani.co.uk/tables/coffee-tables/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_14.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                         <td class="newsletterFooterCategoryRIGHT">
                             <a
                                 href="https://www.beliani.co.uk/chairs/all+products/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_15.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                     </tr>
                     <tr>
                         <td class="newsletterFooterCategoryLEFT">
                             <a
                                 href="https://www.beliani.co.uk/armchairs/all+products/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_18.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                         <td class="newsletterFooterCategoryRIGHT">
                             <a
                                 href="https://www.beliani.co.uk/storage/sideboards/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_19.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                     </tr>
                     <tr>
                         <td class="newsletterFooterCategoryLEFTBottom">
                             <a
                                 href="https://www.beliani.co.uk/lighting/all+products/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_22.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                         <td class="newsletterFooterCategoryRIGHTBottom">
                             <a
                                 href="https://www.beliani.co.uk/rugs/all+products/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                 <img src="https://beliani.info/newsletter/2022/uk2023uk_23.jpg" alt=""
                                     style="display:block" width="100%" border="0" />
                             </a>
                         </td>
                     </tr>
                 </tbody>
             </table>
         </td>
     </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.co.uk/content/klarna-uk/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_uk.png" style="display:block" width="100%" /></a></td>
        </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td align="center">
                 <table cellpadding="0" cellspacing="0" border="0" width="100%">
                     <tbody>
                         <tr>
                             <td align="left" class="footer">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterTopBottomContainer">
                                                 <span class="newsletterFooterTitle">
                                                 Follow us
                                              </span>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                             <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://instagram.com/beliani_uk/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Instagram"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.facebook.com/beliani.co.uk/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Facebook"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                         width="100%" border="0" style="display:block;" alt="YouTube"
                                                            >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.pinterest.co.uk/belianiuk/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Pinterest"    >
                                                 </a>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <!-- ADVANTAGES -->
         <tr>
             <td class="newsletterTopBottomContainer">
                 <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                     <tbody>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.co.uk/content/delivery/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/uk2023uk_27.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.co.uk/content/about-us/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/uk2023uk_28.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.co.uk/content/faq-en/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/uk2023uk_29.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.co.uk/content/terms-and-conditions/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/uk2023uk_30.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td class="newsletterTopBottomContainer" align="left">
                 <span class="newsletterConditions" style="color: #000000;">*Conditions: ${e}</span>
             </td>
         </tr>
         <tr>
             <td
                 style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                 <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Unsubscribe</a>
                 </p>
             </td>
         </tr>

     </tbody>
      
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b>
                            <font style="font-size: 10px;">Company Details</font>
                        </b><br />
                        Beliani (UK) GmbH 6340 Baar Switzerland<br />Phone: 020 3318 8222; E-mail address:
                <a href="mailto:mail@beliani.co.uk">mail@beliani.co.uk</a><br>
                            Commercial Register: Commercial Register of the Canton of
                Zug, CH-170.4.008.869-6<br />VAT ID: CHE-114.825.869 VAT
                    </span>
                </td>
                
            </tr>
        </tbody>
    </table>
    `})[t],ES:(e="Los artículos están sujetos a disponibilidad. Los precios pueden variar sin notificación previa.",t,n)=>({newsletter:`
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
        border="0" align="center">
        <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
            <tr>
                <td class="newsletterTopBottomContainer">
                    <span class="newsletterFooterTitle">
                        Ver mucho más
                    </span>
                </td>
            </tr>
            <tr>
                <td class="newsletterFooterCategories">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tbody>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.es/sofas/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_08.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.es/camas/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_10.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.es/mesas/mesas-de-centro/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_14.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.es/sillas/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_15.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.es/sillones/??utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_19.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.es/organizacion-y-almacenaje/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_20.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFTBottom">
                                    <a
                                        href="https://www.beliani.es/lamparas/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_23.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHTBottom">
                                    <a
                                        href="https://www.beliani.es/alfombras/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_24.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.es/content/metodos-de-pago/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_es.png" style="display:block" width="100%" /></a></td>
        </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
            <tr>
                <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="left" class="footer">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterTopBottomContainer">
                                                    <span class="newsletterFooterTitle">
                                                        Síguenos
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.instagram.com/beliani.espana/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Instagram"    >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.facebook.com/beliani.espana/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Facebook"    >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                            width="100%" border="0" style="display:block;" alt="YouTube"
                                                               >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.pinterest.com/belianies/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Pinterest"    >
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <!-- ADVANTAGES -->
            <tr>
                <td class="newsletterTopBottomContainer">
                    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                        <tbody>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.es/content/envio/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_28.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.es/content/sobre-nosotros/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_29.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.es/content/centro-de-ayuda/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_30.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.es/content/condiciones-generales/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/footerES230330mp1_31.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <tr>
                <td class="newsletterTopBottomContainer" align="left">
                    <span class="newsletterConditions" style="color: #000000;">*Condiciones: ${e}</span>
                </td>
            </tr>
            <tr>
                <td
                    style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                    <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Cancelar suscripción</a>
                    </p>
                </td>
            </tr>

        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b><font style="font-size: 10px;">Datos de empresa</font></b>
                        <br />
                        Beliani (DE) GmbH CH 6340 Baar Suiza<br />
                        teléfono: 911 987 330; dirección e-mail: <a
                            href="mailto:mail@beliani.es">mail@beliani.es</a><br />
                        Registro comercial: Registro comercial de cantón ZUG, CHE-115.695.894<br />
                        USt-IDNr: DE 276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `})[t],PT:(e="Oferta limitada ao stock disponível. Todos os preços podem estar sujeitos a alterações sem aviso prévio.",t,n)=>({newsletter:`
    <!-- FOOTER -->
<table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterFooter" style="max-width:650px; background-color:#ffffff; display: block;">
    <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Veja muito mais </span></td>
        </tr>
        <tr>
            <td class="newsletterFooterCategories">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.pt/sofas/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_03.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.pt/camas/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_05.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.pt/mesas/mesas-de-centro/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_09.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.pt/cadeiras/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_10.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.pt/poltrona/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_13.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.pt/arrumacao/aparadores/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_14.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFTBottom"><a href="https://www.beliani.pt/candeeiros/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_17.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHTBottom"><a href="https://www.beliani.pt/tapetes/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_18.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.pt/content/pagamento/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_pt.png" style="display:block" width="100%" /></a></td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td align="left" class="footer">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Siga-nos </span></td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                        <td align="right" style="padding-right:5px;" class="footer">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td class="newsletterSocialIcon"><a href="https://www.instagram.com/beliani_portugal/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="Instagram" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://www.facebook.com/belianiportugal/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="Facebook" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="YouTube" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://pl.pinterest.com/belianiportugal/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="Pinterest" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!-- ADVANTAGES -->
                        <tr>
            <td class="newsletterTopBottomContainer">
            <table border="0" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;" width="100%">
                <tbody>
                    <tr>
                        <td><a href="https://www.beliani.pt/content/entrega/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_2_06.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.pt/content/sobre-nos/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_2_07.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.pt/content/faq-pt/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_2_08.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.pt/content/termos-e-condicoes/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/ptfooter2023_2_09.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
                        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td align="left" class="newsletterTopBottomContainer"><span class="newsletterConditions" style="color: #000000;">*Termos e Condições: ${e}</span></td>
        </tr>
        <tr>
            <td style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
            <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Cancelar a subscrição</a></p>
            </td>
        </tr>
    </tbody>
</table>

<table align="center" border="0" cellpadding="0" cellspacing="0">
    <tbody>
        <tr>
            <td align="center" class="newsletterFooterCompanyDetails"><span style="color: #000000;text-align: center; font-size:11px;"><b><font style="font-size: 10px;">Detalhes da Empresa</font> </b><br />
            Beliani (DE) GmbH CH 6340 Baar Suíça<br />
            Telefone: +351 21 145 00 19; E-mail: <a href="mailto:mail@beliani.pt">mail@beliani.pt</a><br />
            Registo Comercial: Reg. comercial do cantão ZUG, CHE-115.695.894<br />
            USt-IDNr: DE 276156472 </span></td>
        </tr>
    </tbody>
</table>
    `})[t],PL:(e="Promocja obowiązuje do wyczerpania zapasów. Zastrzegamy sobie prawo do zmiany cen.",t,n)=>({newsletter:`
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
      border="0" align="center">
      <tbody>
         <tr>
             <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
         </tr>
          <tr>
              <td class="newsletterTopBottomContainer">
                  <span class="newsletterFooterTitle">
                  Zobacz jeszcze więcej
               </span>
              </td>
          </tr>
          <tr>
              <td class="newsletterFooterCategories">
                  <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                      <tbody>
                          <tr>
                              <td class="newsletterFooterCategoryLEFT">
                                  <a
                                      href="https://www.beliani.pl/sofy/wszystkie+produkty/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_08.jpg" alt=""
                                          style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                              <td class="newsletterFooterCategoryRIGHT">
                                  <a
                                      href="https://www.beliani.pl/lozka/wszystkie+produkty/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_10.jpg" alt=""
                                          style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                          </tr>
                          <tr>
                              <td class="newsletterFooterCategoryLEFT">
                                  <a
                                      href="https://www.beliani.pl/stoly/stoliki-kawowe/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_14.jpg" alt=""
                                          style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                              <td class="newsletterFooterCategoryRIGHT">
                                  <a
                                      href="https://www.beliani.pl/krzesla/wszystkie+produkty/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_15.jpg" alt=""
                                          style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                          </tr>
                          <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.pl/fotele/wszystkie+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/pl2023pl_18.jpg" alt=""
                                            style="display:block" width="100%" border="0">
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.pl/przechowywanie/komody/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/pl2023pl_19.jpg" alt=""
                                            style="display:block" width="100%" border="0">
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFTBottom">
                                    <a
                                        href="https://www.beliani.pl/oswietlenie/wszystkie+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/pl2023pl_22.jpg" alt=""
                                            style="display:block" width="100%" border="0">
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHTBottom">
                                    <a
                                        href="https://www.beliani.pl/dywany/wszystkie+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/pl2023pl_23.jpg" alt=""
                                            style="display:block" width="100%" border="0">
                                    </a>
                                </td>
                            </tr>
                      </tbody>
                  </table>
              </td>
          </tr>
          <tr>
             <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
         </tr>
         <!--KLARNA-->
         <tr>
             <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.pl/content/platnosc/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_pl.png" style="display:block" width="100%" /></a></td>
         </tr>
          <tr>
              <td>
                  <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
              </td>
          </tr>
          <tr>
              <td align="center">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tbody>
                          <tr>
                              <td align="left" class="footer">
                                  <table cellpadding="0" cellspacing="0" border="0">
                                      <tbody>
                                          <tr>
                                              <td class="newsletterTopBottomContainer">
                                                  <span class="newsletterFooterTitle">
                                                  Znajdź nas
                                               </span>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                              <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                  <table cellpadding="0" cellspacing="0" border="0">
                                      <tbody>
                                          <tr>
                                              <td class="newsletterSocialIcon">
                                                  <a
                                                      href="https://www.instagram.com/beliani_polska/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                      <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                          width="100%" border="0" style="display:block;"
                                                          alt="Instagram"    >
                                                  </a>
                                              </td>
                                              <td class="newsletterSocialIcon">
                                                  <a
                                                      href="https://www.facebook.com/BelianiPolska/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                      <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                          width="100%" border="0" style="display:block;"
                                                          alt="Facebook"    >
                                                  </a>
                                              </td>
                                              <td class="newsletterSocialIcon">
                                                  <a
                                                      href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                      <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                          width="100%" border="0" style="display:block;" alt="YouTube"
                                                             >
                                                  </a>
                                              </td>
                                              <td class="newsletterSocialIcon">
                                                  <a
                                                      href="https://www.pinterest.com/belianipl/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                      <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                          width="100%" border="0" style="display:block;"
                                                          alt="Pinterest"    >
                                                  </a>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </td>
          </tr>
          <tr>
              <td>
                  <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
              </td>
          </tr>
          <tr>
              <td class="newsletterKlarnaBannerContainer"><a href="https://www.facebook.com/BelianiAtWork/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/WorkBanner_PL.png" style="display:block" width="100%" /></a></td>
         </tr>
         <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
          <!-- ADVANTAGES -->
          <tr>
              <td class="newsletterTopBottomContainer">
                  <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                      <tbody>
                          <tr>
                              <td>
                                  <a
                                      href="https://www.beliani.pl/content/dostawa/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_27.jpg"
                                          alt="" style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <a
                                      href="https://www.beliani.pl/content/o-nas/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_28.jpg"
                                          alt="" style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <a
                                      href="https://www.beliani.pl/content/najczesciej-zadawane-pytania/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_29.jpg"
                                          alt="" style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <a
                                      href="https://www.beliani.pl/content/ogolne-warunki-handlowe/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                      <img src="https://beliani.info/newsletter/2022/pl2023pl_30.jpg"
                                          alt="" style="display:block" width="100%" border="0" />
                                  </a>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </td>
          </tr>
          <tr>
              <td>
                  <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
              </td>
          </tr>
          <tr>
              <td class="newsletterTopBottomContainer" align="left">
                  <span class="newsletterConditions" style="color: #000000;">*Warunki: ${e}</span>
              </td>
          </tr>
          <tr>
              <td
                  style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                  <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Wypisz się z newslettera</a>
                  </p>
              </td>
          </tr>
 
      </tbody>
       
     </table>
     <table cellspacing="0" cellpadding="0" border="0" align="center">
         <tbody>
             <tr>
                 <td align="center" class="newsletterFooterCompanyDetails">
                     <span style="color: #000000;text-align: center; font-size:11px;">
                         <b>
                             <font style="font-size: 10px;">Dane Firmy</font>
                         </b><br />
                         Beliani (DE) GmbH CH 6340 Baar Szwajcaria<br />Telefon:
                 +48 91 350 83 60; E-mail:
                 <a href="mailto:mail@beliani.pl">mail@beliani.pl</a><br>
                             Rejestr handlowy: Rejestr handlowy kantonu Zug,
                 CH-170.4.008.869-6<br />NIP: CHE-114.825.869 VAT
                     </span>
                 </td>
             </tr>
         </tbody>
     </table>
    `})[t],HU:(e="Áraink a készlet erejéig érvényesek. Az árváltoztatás jogát előzetes bejelentés nélkül is fenntartjuk.",t,n)=>({newsletter:`
    <!-- FOOTER -->
<table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterFooter" style="max-width:650px; background-color:#ffffff; display: block;">
    <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Mutass többet </span></td>
        </tr>
        <tr>
            <td class="newsletterFooterCategories">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.hu/kanapek/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_03.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.hu/agyak/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_05.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.hu/asztalok/dohanyzoasztalok/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_09.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.hu/szekek/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_10.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.hu/fotelek/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_13.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.hu/tarolo-szekrenyek/komodok/?sort=-visits/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_14.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFTBottom"><a href="https://www.beliani.hu/lampak/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_17.png" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHTBottom"><a href="https://www.beliani.hu/szonyegek/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_18.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td align="left" class="footer">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Kövess minket </span></td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                        <td align="right" style="padding-right:5px;" class="footer">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td class="newsletterSocialIcon"><a href="https://www.instagram.com/beliani_magyarorszag/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="Instagram" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://www.facebook.com/Beliani-Magyarorsz%C3%A1g-1564931000428515/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="Facebook" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="YouTube" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://pinterest.com/beliani_magyarorszag/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="Pinterest" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!-- ADVANTAGES -->
                <tr>
            <td class="newsletterTopBottomContainer">
            <table border="0" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;" width="100%">
                <tbody>
                    <tr>
                        <td><a href="https://www.beliani.hu/content/szallitas/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_2_06.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.hu/content/rolunk/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_2_07.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.hu/content/faq/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_2_08.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.hu/content/aszf/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/hufooter2023_2_09.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
                <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td align="left" class="newsletterTopBottomContainer"><span class="newsletterConditions" style="color: #000000;">*Feltételek: ${e}</span></td>
        </tr>
        <tr>
            <td style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
            <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Leiratkozás</a></p>
            </td>
        </tr>
    </tbody>
</table>

<table align="center" border="0" cellpadding="0" cellspacing="0">
    <tbody>
        <tr>
            <td align="center" class="newsletterFooterCompanyDetails"><span style="color: #000000;text-align: center; font-size:11px;"><b><font style="font-size: 10px;">Impresszum</font> </b><br />
            Beliani (DE) GmbH CH 6340 Baar Schweiz<br />
            Telefonszám: +36 1 700 8555; E-mail cím: <a href="mailto:mail@beliani.hu">mail@beliani.hu</a><br />
            Cégjegyzékszám: Zug kanton cégbírósága, CHE-115.695.894<br />
            Közösségi adószám: DE 276156472</span></td>
        </tr>
    </tbody>
</table>
    `})[t],NL:(e="Alle producten zijn afhankelijk van de voorraad. Alle prijzen kunnen zonder melden worden gewijzigd.",t,n)=>({newsletter:`
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
        border="0" align="center">
        <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
            <tr>
                <td class="newsletterTopBottomContainer">
                    <span class="newsletterFooterTitle">
                        Bekijk er nog duizenden
                    </span>
                </td>
            </tr>
            <tr>
                <td class="newsletterFooterCategories">
                    <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                        <tbody>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.nl/banken/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterSofas.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.nl/bedden/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterBeds.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.nl/tafels/salontafels/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterCoffee.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.nl/stoelen/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterChairs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFT">
                                    <a
                                        href="https://www.beliani.nl/fauteuils/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterArmchairs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHT">
                                    <a
                                        href="https://www.beliani.nl/woonkamer/commodes-en-dressoirs/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterSideboards.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="newsletterFooterCategoryLEFTBottom">
                                    <a
                                        href="https://www.beliani.nl/lampen/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterLamps.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                                <td class="newsletterFooterCategoryRIGHTBottom">
                                    <a
                                        href="https://www.beliani.nl/tapijten/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterRugs.jpg" alt=""
                                            style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.nl/content/betalen/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_nl.png" style="display:block" width="100%" /></a></td>
        </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <tr>
                <td align="center">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="left" class="footer">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterTopBottomContainer">
                                                    <span class="newsletterFooterTitle">
                                                        Volg ons
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                    <table cellpadding="0" cellspacing="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.instagram.com/beliani_nl/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Instagram"    >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.facebook.com/beliani.nederland/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Facebook"    >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                            width="100%" border="0" style="display:block;" alt="YouTube"
                                                               >
                                                    </a>
                                                </td>
                                                <td class="newsletterSocialIcon">
                                                    <a
                                                        href="https://nl.pinterest.com/BelianiNederland/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                        <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                            width="100%" border="0" style="display:block;"
                                                            alt="Pinterest"    >
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <!-- ADVANTAGES -->
            <tr>
                <td class="newsletterTopBottomContainer">
                    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                        <tbody>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.nl/content/levering/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterAdvantages1New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.nl/content/over-ons/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterAdvantages2New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.nl/content/faq/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterAdvantages3New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a
                                        href="https://www.beliani.nl/content/algemene-voorwaarden/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                        <img src="https://beliani.info/newsletter/2022/nlfooterAdvantages4New.jpg"
                                            alt="" style="display:block" width="100%" border="0" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
                </td>
            </tr>
            <tr>
                <td class="newsletterTopBottomContainer" align="left">
                    <span class="newsletterConditions" style="color: #000000;">*Voorwaarden: ${e}</span>
                </td>
            </tr>
            <tr>
                <td
                    style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                    <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Afmelden</a>
                    </p>
                </td>
            </tr>

        </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b>
                            <font style="font-size: 10px;">Bedrijfsinformatie</font>
                        </b><br />Beliani (DE) GmbH CH 6340 Baar Switzerland<br />Telefoonnummer: (038) 7440 103;
                        E-mail adres:
                        <a href="mailto:mail@beliani.nl">mail@beliani.nl</a>
                        <br />Handelsregister: handelsregister van kanton ZUG, CHE-115.695.894<br />USt-IDNr: DE
                        276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `})[t],SE:(e="Alla varor är beroende av tillgänglighet. Alla priser kan komma att ändras utan förvarning.",t,n)=>({newsletter:`
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
    border="0" align="center">
    <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td class="newsletterTopBottomContainer">
                <span class="newsletterFooterTitle">
                    Se tusentals fler
                </span>
            </td>
        </tr>
        <tr>
            <td class="newsletterFooterCategories">
                <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                    <tbody>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT">
                                <a
                                    href="https://www.beliani.se/soffor/alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_06.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHT">
                                <a
                                    href="https://www.beliani.se/sangar/alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_08.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT">
                                <a
                                    href="https://www.beliani.se/bord/soffbord/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_11.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHT">
                                <a
                                    href="https://www.beliani.se/stolar/alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_12.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT">
                                <a
                                    href="https://www.beliani.se/fatolj/alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_15.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHT">
                                <a
                                    href="https://www.beliani.se/forvaring/skap-och-skankar/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_16.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFTBottom">
                                <a
                                    href="https://www.beliani.se/lampor/alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_20.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                            <td class="newsletterFooterCategoryRIGHTBottom">
                                <a
                                    href="https://www.beliani.se/mattor/alla%20produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_21.jpg" alt=""
                                        style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.se/content/klarna-se/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_se.png" style="display:block" width="100%" /></a></td>
        </tr>
        <tr>
            <td>
                <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
            </td>
        </tr>
        <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="left" class="footer">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td class="newsletterTopBottomContainer">
                                                <span class="newsletterFooterTitle">
                                                    Håll dig uppdaterad
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                <table cellpadding="0" cellspacing="0" border="0">
                                    <tbody>
                                        <tr>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://www.instagram.com/beliani_sverige/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                    <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                        width="100%" border="0" style="display:block;"
                                                        alt="Instagram"    >
                                                </a>
                                            </td>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://www.facebook.com/beliani.sverige?fref=ts%3Futm_source%3Dnewsletter&utm_medium=email&utm_campaign=${n}">
                                                    <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                        width="100%" border="0" style="display:block;"
                                                        alt="Facebook"    >
                                                </a>
                                            </td>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                    <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                        width="100%" border="0" style="display:block;" alt="YouTube"
                                                            >
                                                </a>
                                            </td>
                                            <td class="newsletterSocialIcon">
                                                <a
                                                    href="https://www.pinterest.com/belianisverige/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                    <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                        width="100%" border="0" style="display:block;"
                                                        alt="Pinterest"    >
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
            </td>
        </tr>
        <!-- ADVANTAGES -->
        <tr>
            <td class="newsletterTopBottomContainer">
                <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                    <tbody>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.se/content/leverans/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_24.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.se/content/villkor/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_25.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.se/content/om-oss/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_27.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a
                                    href="https://www.beliani.se/content/sjalvbetjaning_swedish/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                    <img src="https://beliani.info/newsletter/2022/footer2023se_28.jpg"
                                        alt="" style="display:block" width="100%" border="0" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
            </td>
        </tr>
        <tr>
            <td class="newsletterTopBottomContainer" align="left">
                <span class="newsletterConditions" style="color: #000000;">*Villkor: ${e}</span>
            </td>
        </tr>
        <tr>
            <td
                style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Avanmäl dig</a>
                </p>
            </td>
        </tr>
    </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b>
                            <font style="font-size: 10px;">Företagsuppgifter</font>
                        </b><br />
                        Beliani (DE) GmbH CH 6340 Baar Schweiz<br />
                        Phone: 08-446 891 58; E-mail address: <a
                            href="mailto:mail@beliani.se">mail@beliani.se</a><br />
                            Commercial Register: Commercial Register of the Canton of Zug<br />CHE-115.695.894, USt-IDNr: DE 276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `})[t],DK:(e="Tilbud gælder så længe lager haves. Alle priser kan ændres uden varsel.",t,n)=>({newsletter:`
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
     border="0" align="center">
     <tbody>
         <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
         <tr>
             <td class="newsletterTopBottomContainer">
                 <span class="newsletterFooterTitle">
                    Se tusindvis af flere
                 </span>
             </td>
         </tr>
         <tr>
             <td class="newsletterFooterCategories">
                 <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                     <tbody>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.dk/sofaer/alle+produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_08.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.dk/senge/alle+produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_10.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.dk/borde/sofaborde/looks/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_14.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.dk/stuemobler/stole/alle+produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_15.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.dk/lenestole/alle+produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_19.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.dk/opbevaring/skaenke/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_20.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFTBottom">
                                 <a
                                     href="https://www.beliani.dk/belysning/alle+produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_23.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHTBottom">
                                 <a
                                     href="https://www.beliani.dk/gulvtepper/alle+produkter/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_24.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.dk/content/betalingsmetoder/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_dk.png" style="display:block" width="100%" /></a></td>
        </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td align="center">
                 <table cellpadding="0" cellspacing="0" border="0" width="100%">
                     <tbody>
                         <tr>
                             <td align="left" class="footer">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterTopBottomContainer">
                                                 <span class="newsletterFooterTitle">
                                                    Hold dig opdateret
                                                 </span>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                             <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.instagram.com/beliani.danmark/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Instagram"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.facebook.com/beliani.dk?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Facebook"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                         width="100%" border="0" style="display:block;" alt="YouTube"
                                                            >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.pinterest.com/belianidanmark/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Pinterest"    >
                                                 </a>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <!-- ADVANTAGES -->
         <tr>
             <td class="newsletterTopBottomContainer">
                 <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                     <tbody>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.dk/content/levering/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_28.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.dk/content/om-os/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_29.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.dk/content/hjaelp/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_30.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.dk/content/vilkar-og-betingelser/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/ESfooter2023dk_31.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td class="newsletterTopBottomContainer" align="left">
                 <span class="newsletterConditions" style="color: #000000;">*Vilkår og betingelser: ${e}</span>
             </td>
         </tr>
         <tr>
             <td
                 style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                 <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Afmeld nyhedsbrev</a>
                 </p>
             </td>
         </tr>

     </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b><font style="font-size: 10px;">Selskabs informationer</font></b>
                        <br />
                        Beliani (DE) GmbH CH 6340 Baar Schweiz<br />
                        Telefonnummer: 89 88 10 86; email adresse: <a
                            href="mailto:mail@beliani.dk">mail@beliani.dk</a><br />
                            Commercial Register: Commercial Register of the Canton of Zug, CHE-115.695.894<br />USt-IDNr: DE 276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `})[t],CZ:(e="Všechny položky jsou závislé na dostupnosti. Všechny ceny se mohou bez upozornění změnit.",t,n)=>({newsletter:`
    <!-- FOOTER -->	
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterFooter" style="max-width:650px; background-color:#ffffff; display: block;">
        <tbody>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <tr>
                <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Objevte další produkty</span></td>
            </tr>
            <tr>
                <td class="newsletterFooterCategories">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.cz/pohovky/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_03.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.cz/postele/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_05.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.cz/stoly/konferencni-stolky/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_09.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.cz/zidle-a-kresla/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_10.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.cz/kresla/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_13.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.cz/ulozny-prostor/regaly-a-komody/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_14.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td class="newsletterFooterCategoryLEFTBottom"><a href="https://www.beliani.cz/svitidla/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_17.jpg" style="display:block" width="100%" /> </a></td>
                            <td class="newsletterFooterCategoryRIGHTBottom"><a href="https://www.beliani.cz/koberce/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_18.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <!--KLARNA-->
            <tr>
                <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.cz/content/zpusoby-platby/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_cz.png" style="display:block" width="100%" /></a></td>
            </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <tr>
                <td align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="left" class="footer">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Sledujte nás na </span></td>
                                    </tr>
                                </tbody>
                            </table>
                            </td>
                            <td align="right" style="padding-right:5px;" class="footer">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td class="newsletterSocialIcon"><a href="https://www.instagram.com/beliani.cz/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="Instagram" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                        <td class="newsletterSocialIcon"><a href="https://www.facebook.com/beliani.cz/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="Facebook" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                        <td class="newsletterSocialIcon"><a href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="YouTube" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                        <td class="newsletterSocialIcon"><a href="https://pinterest.com/belianicz/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="Pinterest" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <!-- ADVANTAGES -->
                            <tr>
                <td class="newsletterTopBottomContainer">
                <table border="0" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;" width="100%">
                    <tbody>
                        <tr>
                            <td><a href="https://www.beliani.cz/content/dodani/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/czfooter2023_2_06.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.beliani.cz/content/o-nas/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_2_07.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.beliani.cz/content/faq/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/czfooter2023_2_08.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.beliani.cz/content/vseobecne-podminky/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/czfooter2023_2_09.jpg" style="display:block" width="100%" /> </a></td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
                            <tr>
                <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
            </tr>
            <tr>
                <td align="left" class="newsletterTopBottomContainer"><span class="newsletterConditions" style="color: #000000;">*Podmínky: ${e}</span></td>
            </tr>
            <tr>
                <td style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Odhlásit se</a></p>
                </td>
            </tr>
        </tbody>
    </table>
    
    <table align="center" border="0" cellpadding="0" cellspacing="0">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails"><span style="color: #000000;text-align: center; font-size:11px;"><b><font style="font-size: 10px;">Detaily společnosti</font></b><br />
                Beliani (DE) GmbH CH 6340 Baar Švýcarsko<br />
                Telefonní číslo: 228 881 514; E-mailová adresa: <a href="mailto:mail@beliani.cz">mail@beliani.cz</a><br />
                Obchodní registr: Obchodní registr Kantónu Zug, CH-170.4.008.869-6<br />
                USt-IDNr: CHE-114.825.869 MWST; DIČ: DE 276156472</span></td>
            </tr>
        </tbody>
    </table>
    `})[t],FI:(e="Tuotteet saatavuuden mukaan. Pidätämme oikeudet hinnanmuutoksiin ilman erillistä ilmoitusta.",t,n)=>({newsletter:`
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
     border="0" align="center">
     <tbody>
                  <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
         <tr>
             <td class="newsletterTopBottomContainer">
                 <span class="newsletterFooterTitle">
                    Löydä tuhansia muita
                 </span>
             </td>
         </tr>
         <tr>
             <td class="newsletterFooterCategories">
                 <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                     <tbody>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.fi/sohvat/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_06.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.fi/sangyt/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_08.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.fi/poydat/sohvapoydat/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_11.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.fi/tuolit/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_12.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFT">
                                 <a
                                     href="https://www.beliani.fi/nojatuolit/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_15.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHT">
                                 <a
                                     href="https://www.beliani.fi/olohuoneen-kalusteet/sailytys/senkit/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_16.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td class="newsletterFooterCategoryLEFTBottom">
                                 <a
                                     href="https://www.beliani.fi/valaisimet/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_20.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                             <td class="newsletterFooterCategoryRIGHTBottom">
                                 <a
                                     href="https://www.beliani.fi/matot/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_21.jpg" alt=""
                                         style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.fi/content/klarna-fi/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_fi.png" style="display:block" width="100%" /></a></td>
        </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td align="center">
                 <table cellpadding="0" cellspacing="0" border="0" width="100%">
                     <tbody>
                         <tr>
                             <td align="left" class="footer">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterTopBottomContainer">
                                                 <span class="newsletterFooterTitle">
                                                    Seuraa meitä
                                                 </span>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                             <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                                 <table cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                         <tr>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.instagram.com/beliani_suomi/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Instagram"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.facebook.com/belianisuomi/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Facebook"    >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                         width="100%" border="0" style="display:block;" alt="YouTube"
                                                            >
                                                 </a>
                                             </td>
                                             <td class="newsletterSocialIcon">
                                                 <a
                                                     href="https://www.pinterest.com/belianisuomi/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                     <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                         width="100%" border="0" style="display:block;"
                                                         alt="Pinterest"    >
                                                 </a>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <!-- ADVANTAGES -->
         <tr>
             <td class="newsletterTopBottomContainer">
                 <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                     <tbody>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fi/content/toimitus/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_24.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fi/content/tietoja-meista/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_25.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fi/content/ohjekeskus/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_27.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                         <tr>
                             <td>
                                 <a
                                     href="https://www.beliani.fi/content/kayttoehdot/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                     <img src="https://beliani.info/newsletter/2022/footer2023fi_28.jpg"
                                         alt="" style="display:block" width="100%" border="0" />
                                 </a>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </td>
         </tr>
         <tr>
             <td>
                 <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
             </td>
         </tr>
         <tr>
             <td class="newsletterTopBottomContainer" align="left">
                 <span class="newsletterConditions" style="color: #000000;">*Ehdot: ${e}</span>
             </td>
         </tr>
         <tr>
             <td
                 style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
                 <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Lopeta tilaus</a>
                 </p>
             </td>
         </tr>

     </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b><font style="font-size: 10px;">Yhtiön tiedot</font></b>
                        <br />
                        Beliani (DE) GmbH CH 6340 Baar Sveitsi<br />
                        Puhelinnumero: 09 4245 0464; sähköpostiosoite: <a
                            href="mailto:mail@beliani.fi">mail@beliani.fi</a><br />
                            Rekisteröity: Zugin kantonin kaupparekisteri, CHE-115.695.894<br />USt-IDNr: DE 276156472 MWST
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `})[t],NO:(e="Alle varer er avhengig av tilgjengelighet. Alle priser kan endres uten varsel.",t,n)=>({newsletter:`
    <!-- FOOTER -->
    <table style="max-width:650px; background-color:#ffffff; display: block;" class="newsletterFooter" cellspacing="0" cellpadding="0"
   border="0" align="center">
   <tbody>
       <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
       <tr>
           <td class="newsletterTopBottomContainer">
               <span class="newsletterFooterTitle">
                Se tusenvis av våre
               </span>
           </td>
       </tr>
       <tr>
           <td class="newsletterFooterCategories">
               <table cellspacing="0" cellpadding="0" border="0" align="center" width="100%">
                   <tbody>
                       <tr>
                           <td class="newsletterFooterCategoryLEFT">
                               <a
                                   href="https://www.beliani.no/sofaer/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_08.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                           <td class="newsletterFooterCategoryRIGHT">
                               <a
                                   href="https://www.beliani.no/senger/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_10.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                       <tr>
                           <td class="newsletterFooterCategoryLEFT">
                               <a
                                   href="https://www.beliani.no/bord/sofabord/looks/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_14.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                           <td class="newsletterFooterCategoryRIGHT">
                               <a
                                   href="https://www.beliani.no/stoler/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_15.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                       <tr>
                           <td class="newsletterFooterCategoryLEFT">
                               <a
                                   href="https://www.beliani.no/lenestoler/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_19.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                           <td class="newsletterFooterCategoryRIGHT">
                               <a
                                   href="https://www.beliani.no/oppbevaring/skjenker/looks/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_20.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                       <tr>
                           <td class="newsletterFooterCategoryLEFTBottom">
                               <a
                                   href="https://www.beliani.no/belysning/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_23.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                           <td class="newsletterFooterCategoryRIGHTBottom">
                               <a
                                   href="https://www.beliani.no/tepper/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_24.jpg" alt=""
                                       style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                   </tbody>
               </table>
           </td>
       </tr>
       <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!--KLARNA-->
        <tr>
            <td class="newsletterKlarnaBannerContainer"><a href="https://www.beliani.no/content/klarna-no/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0"  src="https://beliani.info/newsletter/2022/NsltBanner_no.png" style="display:block" width="100%" /></a></td>
        </tr>
       <tr>
           <td>
               <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
           </td>
       </tr>
       <tr>
           <td align="center">
               <table cellpadding="0" cellspacing="0" border="0" width="100%">
                   <tbody>
                       <tr>
                           <td align="left" class="footer">
                               <table cellpadding="0" cellspacing="0" border="0">
                                   <tbody>
                                       <tr>
                                           <td class="newsletterTopBottomContainer">
                                               <span class="newsletterFooterTitle">
                                                Følg oss
                                               </span>
                                           </td>
                                       </tr>
                                   </tbody>
                               </table>
                           </td>
                           <td align="right" class="footer" style="padding-right:5px; vertical-align: middle;">
                               <table cellpadding="0" cellspacing="0" border="0">
                                   <tbody>
                                       <tr>
                                           <td class="newsletterSocialIcon">
                                               <a
                                                   href="https://www.instagram.com/beliani_norge/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                   <img src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg"
                                                       width="100%" border="0" style="display:block;"
                                                       alt="Instagram"    >
                                               </a>
                                           </td>
                                           <td class="newsletterSocialIcon">
                                               <a
                                                   href="https://www.facebook.com/BelianiNorge?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                   <img src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg"
                                                       width="100%" border="0" style="display:block;"
                                                       alt="Facebook"    >
                                               </a>
                                           </td>
                                           <td class="newsletterSocialIcon">
                                               <a
                                                   href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                   <img src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg"
                                                       width="100%" border="0" style="display:block;" alt="YouTube"
                                                          >
                                               </a>
                                           </td>
                                           <td class="newsletterSocialIcon">
                                               <a
                                                   href="https://www.pinterest.com/beliani_norge/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                                   <img src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg"
                                                       width="100%" border="0" style="display:block;"
                                                       alt="Pinterest"    >
                                               </a>
                                           </td>
                                       </tr>
                                   </tbody>
                               </table>
                           </td>
                       </tr>
                   </tbody>
               </table>
           </td>
       </tr>
       <tr>
           <td>
               <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
           </td>
       </tr>
       <!-- ADVANTAGES -->
       <tr>
           <td class="newsletterTopBottomContainer">
               <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
                   <tbody>
                       <tr>
                           <td>
                               <a
                                   href="https://www.beliani.no/content/levering/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_28.jpg"
                                       alt="" style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <a
                                   href="https://www.beliani.no/content/om-oss/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_29.jpg"
                                       alt="" style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <a
                                   href="https://www.beliani.no/content/hjelpesenter_norwegian/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_30.jpg"
                                       alt="" style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                       <tr>
                           <td>
                               <a
                                   href="https://www.beliani.no/content/vilkar-og-betingelser/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}">
                                   <img src="https://beliani.info/newsletter/2022/NO2023no_31.jpg"
                                       alt="" style="display:block" width="100%" border="0" />
                               </a>
                           </td>
                       </tr>
                   </tbody>
               </table>
           </td>
       </tr>
       <tr>
           <td>
               <img src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" alt="">
           </td>
       </tr>
       <tr>
           <td class="newsletterTopBottomContainer" align="left">
               <span class="newsletterConditions" style="color: #000000;">*Vilkår: ${e}</span>
           </td>
       </tr>
       <tr>
           <td
               style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
               <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Avslutt abonnement</a>
               </p>
           </td>
       </tr>

   </tbody>
    </table>
    <table cellspacing="0" cellpadding="0" border="0" align="center">
        <tbody>
            <tr>
                <td align="center" class="newsletterFooterCompanyDetails">
                    <span style="color: #000000;text-align: center; font-size:11px;">
                        <b>
                            <font style="font-size: 10px;">Selskapets Detaljer</font>
                        </b><br />
                        Beliani (DE) GmbH CH 6340 Baar Switzerland<br />
                        Telefonnummer: 21 56 31 51; E-postadresse: <a
                            href="mailto:mail@beliani.no">mail@beliani.no</a><br />
                            Commercial register: commercial register of canton ZUG, CHE-115.695.894<br />USt-IDNr: DE 276156472
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
    `})[t],SK:(e="Všetky položky podliehajú dostupnosti. Všetky ceny sa môžu zmeniť bez upozornenia.",t,n)=>({newsletter:`
    <!--FOOTER-->
<table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterFooter" style="max-width:650px; background-color:#ffffff; display: block;">
    <tbody>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Objavte ďalšie produkty</span></td>
        </tr>
        <tr>
            <td class="newsletterFooterCategories">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.sk/pohovky/zobraziť+všetky+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_03.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.sk/postele/zobraziť+všetky+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_05.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.sk/stoly/konferencne-stoliky/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_09.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.sk/stolicky-a-kresla/zobraziť+všetky+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_10.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFT"><a href="https://www.beliani.sk/kresla/zobraziť+všetky+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_13.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHT"><a href="https://www.beliani.sk/ulozny-priestor/nizke-skrinky/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_14.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td class="newsletterFooterCategoryLEFTBottom"><a href="https://www.beliani.sk/svietidla/zobraziť+všetky+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_17.jpg" style="display:block" width="100%" /> </a></td>
                        <td class="newsletterFooterCategoryRIGHTBottom"><a href="https://www.beliani.sk/koberce/zobraziť+všetky+produkty/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_18.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td align="center">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td align="left" class="footer">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td class="newsletterTopBottomContainer"><span class="newsletterFooterTitle">Sledujte nás na </span></td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                        <td align="right" style="padding-right:5px;" class="footer">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td class="newsletterSocialIcon"><a href="https://www.instagram.com/beliani_sk/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="Instagram" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerInstagram2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://www.facebook.com/BelianiSlovensko/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="Facebook" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerFacebook2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://www.youtube.com/c/BelianiGmbH/featured/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="YouTube" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerYoutube2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                    <td class="newsletterSocialIcon"><a href="https://pinterest.com/beliani_slovensko/?utm_source=newsletter&utm_medium=email&utm_campaign=${n}"><img alt="Pinterest" border="0" class="CToWUd" data-bit="iit" src="https://beliani.info/newsletter/2022/footerPinterest2022New.jpg" style="display:block;" width="100%" /> </a></td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <!-- ADVANTAGES -->
                        <tr>
            <td class="newsletterTopBottomContainer">
            <table border="0" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;" width="100%">
                <tbody>
                    <tr>
                        <td><a href="https://www.beliani.sk/content/dodanie/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_2_06.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.sk/content/o-nas/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_2_07.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.sk/content/faq/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_2_08.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                    <tr>
                        <td><a href="https://www.beliani.sk/content/vseobecne-podmienky/?utm_source=newsletter&amp;utm_medium=email&amp;utm_campaign=${n}"><img alt="" border="0" src="https://beliani.info/newsletter/2022/skfooter2023_2_09.jpg" style="display:block" width="100%" /> </a></td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
                        <tr>
            <td><img alt="" src="https://beliani.info/newsletter/2022/line.jpg" style="display:block" width="100%" /></td>
        </tr>
        <tr>
            <td align="left" class="newsletterTopBottomContainer"><span class="newsletterConditions" style="color: #000000;">*Podmienky: ${e}</span></td>
        </tr>
        <tr>
            <td style="vertical-align: middle; text-align: center; font-size: 14px; font-family: 'Open Sans', sans-serif!important; color: #000000;">
            <p><a href="[[newsunassignurl]]" style="text-decoration: underline; color: #000000;">Zrušiť odber</a></p>
            </td>
        </tr>
    </tbody>
</table>

<table align="center" border="0" cellpadding="0" cellspacing="0">
    <tbody>
        <tr>
            <td align="center" class="newsletterFooterCompanyDetails"><span style="color: #000000;text-align: center; font-size:11px;"><b><font style="font-size: 10px;">Detaily spoločnosti</font> </b><br />
            Beliani (DE) GmbH CH 6340 Baar Švajčiarsko<br />
            Telefónne číslo: +421 2/327 846 12; E-mailová adresa: <a href="mailto:mail@beliani.sk">mail@beliani.sk</a><br />
            Obchodný register: Obchodný register kantónu Zug, CH-170.4.008.869-6<br />
            USt-IDNr: CHE-114.825.869 MWST; DIČ: DE 276156472</span></td>
        </tr>
    </tbody>
</table>
    `})[t]},Ee={euro:"€",swissFranc:"Fr.",poundSterling:"£",hungarianForint:"Ft",swedishKrona:"kr",danishKrona:"kr.",czechKrona:"Kč",norwegianKrone:",-"},xe={DE:{currency:Ee.euro},CHDE:{currency:Ee.swissFranc},AT:{currency:Ee.euro},FR:{currency:Ee.euro},CHFR:{currency:Ee.swissFranc},IT:{currency:Ee.euro},UK:{currency:Ee.poundSterling},ES:{currency:Ee.euro},PT:{currency:Ee.euro},PL:{currency:""},HU:{currency:Ee.hungarianForint},NL:{currency:Ee.euro},SE:{currency:Ee.swedishKrona},DK:{currency:Ee.danishKrona},CZ:{currency:Ee.czechKrona},FI:{currency:Ee.euro},NO:{currency:Ee.norwegianKrone},SK:{currency:Ee.euro}},uf={DE:e=>ke(e,"DE")+" "+xe.DE.currency,CHDE:e=>ke(e,"CHDE")+" "+xe.CHDE.currency,AT:e=>ke(e,"AT")+" "+xe.AT.currency,FR:e=>ke(e,"FR")+" "+xe.FR.currency,CHFR:e=>ke(e,"CHFR")+" "+xe.CHFR.currency,IT:e=>ke(e,"IT")+" "+xe.IT.currency,UK:e=>xe.UK.currency+ke(e,"UK"),ES:e=>ke(e,"ES")+" "+xe.ES.currency,PT:e=>ke(e,"PT")+" "+xe.PT.currency,PL:e=>ke(e,"PL")+xe.PL.currency,HU:e=>ke(e,"HU")+" "+xe.HU.currency,NL:e=>xe.NL.currency+" "+ke(e,"NL"),SE:e=>ke(e,"SE")+" "+xe.SE.currency,DK:e=>ke(e,"DK")+" "+xe.DK.currency,CZ:e=>ke(e,"CZ")+" "+xe.CZ.currency,FI:e=>ke(e,"FI")+" "+xe.FI.currency,NO:e=>ke(e,"NO")+xe.NO.currency,SK:e=>ke(e,"SK")+" "+xe.SK.currency},G_={DE:e=>(e=e.replace(".00",",00"),e=e.replace(".99",",99"),e.length===8&&(e=e.split("").toSpliced(2,0,".").join("")),e.length===7&&(e=e.split("").toSpliced(1,0,".").join("")),e),CHDE:e=>(e.length===8&&(e=e.split("").toSpliced(2,0,"'").join("")),e.length===7&&(e=e.split("").toSpliced(1,0,"'").join("")),e),AT:e=>(e=e.replace(".00",",00"),e=e.replace(".99",",99"),e.length===8&&(e=e.split("").toSpliced(2,0,".").join("")),e.length===7&&(e=e.split("").toSpliced(1,0,".").join("")),e),FR:e=>(e=e.replace(".00",",00"),e=e.replace(".99",",99"),e.length===8&&(e=e.split("").toSpliced(2,0," ").join("")),e.length===7&&(e=e.split("").toSpliced(1,0," ").join("")),e),CHFR:e=>(e.length===8&&(e=e.split("").toSpliced(2,0,"'").join("")),e.length===7&&(e=e.split("").toSpliced(1,0,"'").join("")),e),IT:e=>(e=e.replace(".00",",00"),e=e.replace(".99",",99"),e.length===8&&(e=e.split("").toSpliced(2,0,".").join("")),e.length===7&&(e=e.split("").toSpliced(1,0,".").join("")),e),UK:e=>(e.length===8&&(e=e.split("").toSpliced(2,0,",").join("")),e.length===7&&(e=e.split("").toSpliced(1,0,",").join("")),e),ES:e=>(e=e.replace(".00",",00"),e=e.replace(".99",",99"),e.length===8&&(e=e.split("").toSpliced(2,0,".").join("")),e.length===7&&(e=e.split("").toSpliced(1,0,".").join("")),e),PT:e=>(e=e.replace(".00",",00"),e=e.replace(".99",",99"),e.length===8&&(e=e.split("").toSpliced(2,0,".").join("")),e.length===7&&(e=e.split("").toSpliced(1,0,".").join("")),e),PL:e=>(e=e.replace(".00",",00"),e=e.replace(".99",",99"),e.length===8&&(e=e.split("").toSpliced(2,0," ").join("")),e.length===7&&(e=e.split("").toSpliced(1,0," ").join("")),e),HU:e=>(e=e.replace(".00",""),e=e.replace(".99",""),e.length===7&&(e=e.split("").toSpliced(1,0," ").toSpliced(5,0," ").join("")),e.length===6&&(e=e.split("").toSpliced(3,0," ").join("")),e.length===5&&(e=e.split("").toSpliced(2,0," ").join("")),e.length===4&&(e=e.split("").toSpliced(1,0," ").join("")),e),NL:e=>(e=e.replace(".00",",00"),e=e.replace(".99",",99"),e.length===8&&(e=e.split("").toSpliced(2,0,".").join("")),e.length===7&&(e=e.split("").toSpliced(1,0,".").join("")),e),SE:e=>(e=e.replace(".00",""),e.length===5&&(e=e.split("").toSpliced(2,0," ").join("")),e.length===4&&(e=e.split("").toSpliced(1,0," ").join("")),e),DK:e=>(e=e.replace(".00",""),e.length===5&&(e=e.split("").toSpliced(2,0,".").join("")),e.length===4&&(e=e.split("").toSpliced(1,0,".").join("")),e),CZ:e=>(e=e.replace(".00",""),e.length===5&&(e=e.split("").toSpliced(2,0," ").join("")),e.length===4&&(e=e.split("").toSpliced(1,0," ").join("")),e),FI:e=>(e=e.replace(".00",",00"),e=e.replace(".99",",99"),e.length===8&&(e=e.split("").toSpliced(2,0," ").join("")),e.length===7&&(e=e.split("").toSpliced(1,0," ").join("")),e),NO:e=>(e=e.replace(".00",""),e.length===5&&(e=e.split("").toSpliced(2,0," ").join("")),e.length===4&&(e=e.split("").toSpliced(1,0," ").join("")),e),SK:e=>(e=e.replace(".00",",00"),e=e.replace(".99",",99"),e.length===8&&(e=e.split("").toSpliced(2,0," ").join("")),e.length===7&&(e=e.split("").toSpliced(1,0," ").join("")),e)};function ke(e,t){return G_[t](e)}function K_(e){for(const t in e){const n=e[t];e[t]={...n,lowPrice:uf[n.country](n.lowPrice),highPrice:n.highPrice!==null?uf[n.country](n.highPrice):""}}return e}const W_=1,Y_=1e6;let Ri=0;function Q_(){return Ri=(Ri+1)%Number.MAX_VALUE,Ri.toString()}const Ni=new Map,ff=e=>{if(Ni.has(e))return;const t=setTimeout(()=>{Ni.delete(e),co({type:"REMOVE_TOAST",toastId:e})},Y_);Ni.set(e,t)},Z_=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,W_)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?ff(n):e.toasts.forEach(r=>{ff(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},Al=[];let zl={toasts:[]};function co(e){zl=Z_(zl,e),Al.forEach(t=>{t(zl)})}function X_({...e}){const t=Q_(),n=o=>co({type:"UPDATE_TOAST",toast:{...o,id:t}}),r=()=>co({type:"DISMISS_TOAST",toastId:t});return co({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:o=>{o||r()}}}),{id:t,dismiss:r,update:n}}function ch(){const[e,t]=s.useState(zl);return s.useEffect(()=>(Al.push(t),()=>{const n=Al.indexOf(t);n>-1&&Al.splice(n,1)}),[e]),{...e,toast:X_,dismiss:n=>co({type:"DISMISS_TOAST",toastId:n})}}const dh="ToastProvider",[fd,q_,J_]=Lo("Toast"),[uh,Dk]=vt("Toast",[J_]),[ex,Ka]=uh(dh),fh=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:o="right",swipeThreshold:l=50,children:a}=e,[i,c]=s.useState(null),[d,p]=s.useState(0),f=s.useRef(!1),h=s.useRef(!1);return s.createElement(fd.Provider,{scope:t},s.createElement(ex,{scope:t,label:n,duration:r,swipeDirection:o,swipeThreshold:l,toastCount:d,viewport:i,onViewportChange:c,onToastAdd:s.useCallback(()=>p(w=>w+1),[]),onToastRemove:s.useCallback(()=>p(w=>w-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:h},a))};fh.propTypes={label(e){if(e.label&&typeof e.label=="string"&&!e.label.trim()){const t=`Invalid prop \`label\` supplied to \`${dh}\`. Expected non-empty \`string\`.`;return new Error(t)}return null}};const tx="ToastViewport",nx=["F8"],Bs="toast.viewportPause",Hs="toast.viewportResume",rx=s.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=nx,label:o="Notifications ({hotkey})",...l}=e,a=Ka(tx,n),i=q_(n),c=s.useRef(null),d=s.useRef(null),p=s.useRef(null),f=s.useRef(null),h=oe(t,f,a.onViewportChange),w=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),v=a.toastCount>0;s.useEffect(()=>{const _=m=>{var u;r.every(x=>m[x]||m.code===x)&&((u=f.current)===null||u===void 0||u.focus())};return document.addEventListener("keydown",_),()=>document.removeEventListener("keydown",_)},[r]),s.useEffect(()=>{const _=c.current,m=f.current;if(v&&_&&m){const u=()=>{if(!a.isClosePausedRef.current){const C=new CustomEvent(Bs);m.dispatchEvent(C),a.isClosePausedRef.current=!0}},g=()=>{if(a.isClosePausedRef.current){const C=new CustomEvent(Hs);m.dispatchEvent(C),a.isClosePausedRef.current=!1}},x=C=>{!_.contains(C.relatedTarget)&&g()},k=()=>{_.contains(document.activeElement)||g()};return _.addEventListener("focusin",u),_.addEventListener("focusout",x),_.addEventListener("pointermove",u),_.addEventListener("pointerleave",k),window.addEventListener("blur",u),window.addEventListener("focus",g),()=>{_.removeEventListener("focusin",u),_.removeEventListener("focusout",x),_.removeEventListener("pointermove",u),_.removeEventListener("pointerleave",k),window.removeEventListener("blur",u),window.removeEventListener("focus",g)}}},[v,a.isClosePausedRef]);const b=s.useCallback(({tabbingDirection:_})=>{const u=i().map(g=>{const x=g.ref.current,k=[x,...yx(x)];return _==="forwards"?k:k.reverse()});return(_==="forwards"?u.reverse():u).flat()},[i]);return s.useEffect(()=>{const _=f.current;if(_){const m=u=>{const g=u.altKey||u.ctrlKey||u.metaKey;if(u.key==="Tab"&&!g){const E=document.activeElement,z=u.shiftKey;if(u.target===_&&z){var k;(k=d.current)===null||k===void 0||k.focus();return}const T=b({tabbingDirection:z?"backwards":"forwards"}),N=T.findIndex(j=>j===E);if(Pi(T.slice(N+1)))u.preventDefault();else{var C,$;z?(C=d.current)===null||C===void 0||C.focus():($=p.current)===null||$===void 0||$.focus()}}};return _.addEventListener("keydown",m),()=>_.removeEventListener("keydown",m)}},[i,b]),s.createElement(o2,{ref:c,role:"region","aria-label":o.replace("{hotkey}",w),tabIndex:-1,style:{pointerEvents:v?void 0:"none"}},v&&s.createElement(pf,{ref:d,onFocusFromOutsideViewport:()=>{const _=b({tabbingDirection:"forwards"});Pi(_)}}),s.createElement(fd.Slot,{scope:n},s.createElement(W.ol,I({tabIndex:-1},l,{ref:h}))),v&&s.createElement(pf,{ref:p,onFocusFromOutsideViewport:()=>{const _=b({tabbingDirection:"backwards"});Pi(_)}}))}),ox="ToastFocusProxy",pf=s.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,l=Ka(ox,n);return s.createElement(nd,I({"aria-hidden":!0,tabIndex:0},o,{ref:t,style:{position:"fixed"},onFocus:a=>{var i;const c=a.relatedTarget;!((i=l.viewport)!==null&&i!==void 0&&i.contains(c))&&r()}}))}),Wa="Toast",lx="toast.swipeStart",ax="toast.swipeMove",ix="toast.swipeCancel",sx="toast.swipeEnd",cx=s.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:o,onOpenChange:l,...a}=e,[i=!0,c]=St({prop:r,defaultProp:o,onChange:l});return s.createElement(jt,{present:n||i},s.createElement(ph,I({open:i},a,{ref:t,onClose:()=>c(!1),onPause:Le(e.onPause),onResume:Le(e.onResume),onSwipeStart:B(e.onSwipeStart,d=>{d.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:B(e.onSwipeMove,d=>{const{x:p,y:f}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","move"),d.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${p}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:B(e.onSwipeCancel,d=>{d.currentTarget.setAttribute("data-swipe","cancel"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:B(e.onSwipeEnd,d=>{const{x:p,y:f}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","end"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${p}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),c(!1)})})))}),[dx,ux]=uh(Wa,{onClose(){}}),ph=s.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:o,open:l,onClose:a,onEscapeKeyDown:i,onPause:c,onResume:d,onSwipeStart:p,onSwipeMove:f,onSwipeCancel:h,onSwipeEnd:w,...v}=e,b=Ka(Wa,n),[_,m]=s.useState(null),u=oe(t,j=>m(j)),g=s.useRef(null),x=s.useRef(null),k=o||b.duration,C=s.useRef(0),$=s.useRef(k),E=s.useRef(0),{onToastAdd:z,onToastRemove:S}=b,F=Le(()=>{var j;(_==null?void 0:_.contains(document.activeElement))&&((j=b.viewport)===null||j===void 0||j.focus()),a()}),T=s.useCallback(j=>{!j||j===1/0||(window.clearTimeout(E.current),C.current=new Date().getTime(),E.current=window.setTimeout(F,j))},[F]);s.useEffect(()=>{const j=b.viewport;if(j){const O=()=>{T($.current),d==null||d()},L=()=>{const K=new Date().getTime()-C.current;$.current=$.current-K,window.clearTimeout(E.current),c==null||c()};return j.addEventListener(Bs,L),j.addEventListener(Hs,O),()=>{j.removeEventListener(Bs,L),j.removeEventListener(Hs,O)}}},[b.viewport,k,c,d,T]),s.useEffect(()=>{l&&!b.isClosePausedRef.current&&T(k)},[l,k,b.isClosePausedRef,T]),s.useEffect(()=>(z(),()=>S()),[z,S]);const N=s.useMemo(()=>_?wh(_):null,[_]);return b.viewport?s.createElement(s.Fragment,null,N&&s.createElement(fx,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0},N),s.createElement(dx,{scope:n,onClose:F},yn.createPortal(s.createElement(fd.ItemSlot,{scope:n},s.createElement(r2,{asChild:!0,onEscapeKeyDown:B(i,()=>{b.isFocusedToastEscapeKeyDownRef.current||F(),b.isFocusedToastEscapeKeyDownRef.current=!1})},s.createElement(W.li,I({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":l?"open":"closed","data-swipe-direction":b.swipeDirection},v,{ref:u,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:B(e.onKeyDown,j=>{j.key==="Escape"&&(i==null||i(j.nativeEvent),j.nativeEvent.defaultPrevented||(b.isFocusedToastEscapeKeyDownRef.current=!0,F()))}),onPointerDown:B(e.onPointerDown,j=>{j.button===0&&(g.current={x:j.clientX,y:j.clientY})}),onPointerMove:B(e.onPointerMove,j=>{if(!g.current)return;const O=j.clientX-g.current.x,L=j.clientY-g.current.y,K=!!x.current,P=["left","right"].includes(b.swipeDirection),R=["left","up"].includes(b.swipeDirection)?Math.min:Math.max,M=P?R(0,O):0,V=P?0:R(0,L),U=j.pointerType==="touch"?10:2,Z={x:M,y:V},le={originalEvent:j,delta:Z};K?(x.current=Z,yl(ax,f,le,{discrete:!1})):mf(Z,b.swipeDirection,U)?(x.current=Z,yl(lx,p,le,{discrete:!1}),j.target.setPointerCapture(j.pointerId)):(Math.abs(O)>U||Math.abs(L)>U)&&(g.current=null)}),onPointerUp:B(e.onPointerUp,j=>{const O=x.current,L=j.target;if(L.hasPointerCapture(j.pointerId)&&L.releasePointerCapture(j.pointerId),x.current=null,g.current=null,O){const K=j.currentTarget,P={originalEvent:j,delta:O};mf(O,b.swipeDirection,b.swipeThreshold)?yl(sx,w,P,{discrete:!0}):yl(ix,h,P,{discrete:!0}),K.addEventListener("click",R=>R.preventDefault(),{once:!0})}})})))),b.viewport))):null});ph.propTypes={type(e){if(e.type&&!["foreground","background"].includes(e.type)){const t=`Invalid prop \`type\` supplied to \`${Wa}\`. Expected \`foreground | background\`.`;return new Error(t)}return null}};const fx=e=>{const{__scopeToast:t,children:n,...r}=e,o=Ka(Wa,t),[l,a]=s.useState(!1),[i,c]=s.useState(!1);return wx(()=>a(!0)),s.useEffect(()=>{const d=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(d)},[]),i?null:s.createElement(Ma,{asChild:!0},s.createElement(nd,r,l&&s.createElement(s.Fragment,null,o.label," ",n)))},px=s.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return s.createElement(W.div,I({},r,{ref:t}))}),mx=s.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return s.createElement(W.div,I({},r,{ref:t}))}),hx="ToastAction",mh=s.forwardRef((e,t)=>{const{altText:n,...r}=e;return n?s.createElement(gh,{altText:n,asChild:!0},s.createElement(hh,I({},r,{ref:t}))):null});mh.propTypes={altText(e){return e.altText?null:new Error(`Missing prop \`altText\` expected on \`${hx}\``)}};const gx="ToastClose",hh=s.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,o=ux(gx,n);return s.createElement(gh,{asChild:!0},s.createElement(W.button,I({type:"button"},r,{ref:t,onClick:B(e.onClick,o.onClose)})))}),gh=s.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...o}=e;return s.createElement(W.div,I({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0},o,{ref:t}))});function wh(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),bx(r)){const o=r.ariaHidden||r.hidden||r.style.display==="none",l=r.dataset.radixToastAnnounceExclude==="";if(!o)if(l){const a=r.dataset.radixToastAnnounceAlt;a&&t.push(a)}else t.push(...wh(r))}}),t}function yl(e,t,n,{discrete:r}){const o=n.originalEvent.currentTarget,l=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Mc(o,l):o.dispatchEvent(l)}const mf=(e,t,n=0)=>{const r=Math.abs(e.x),o=Math.abs(e.y),l=r>o;return t==="left"||t==="right"?l&&r>n:!l&&o>n};function wx(e=()=>{}){const t=Le(e);et(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function bx(e){return e.nodeType===e.ELEMENT_NODE}function yx(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Pi(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}const vx=fh,bh=rx,yh=cx,vh=px,_h=mx,xh=mh,kh=hh,_x=vx,$h=s.forwardRef(({className:e,...t},n)=>y.jsx(bh,{ref:n,className:q("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));$h.displayName=bh.displayName;const xx=Na("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-zinc-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-zinc-800",{variants:{variant:{default:"border bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50",destructive:"destructive group border-red-500 bg-red-500 text-zinc-50 dark:border-red-900 dark:bg-red-900 dark:text-zinc-50"}},defaultVariants:{variant:"default"}}),Ch=s.forwardRef(({className:e,variant:t,...n},r)=>y.jsx(yh,{ref:r,className:q(xx({variant:t}),e),...n}));Ch.displayName=yh.displayName;const kx=s.forwardRef(({className:e,...t},n)=>y.jsx(xh,{ref:n,className:q("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-zinc-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-zinc-50 group-[.destructive]:focus:ring-red-500 dark:border-zinc-800 dark:ring-offset-zinc-950 dark:hover:bg-zinc-800 dark:focus:ring-zinc-300 dark:group-[.destructive]:border-zinc-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-zinc-50 dark:group-[.destructive]:focus:ring-red-900",e),...t}));kx.displayName=xh.displayName;const Eh=s.forwardRef(({className:e,...t},n)=>y.jsx(kh,{ref:n,className:q("absolute right-2 top-2 rounded-md p-1 text-zinc-950/50 opacity-0 transition-opacity hover:text-zinc-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-zinc-50/50 dark:hover:text-zinc-50",e),"toast-close":"",...t,children:y.jsx(Oy,{className:"h-4 w-4"})}));Eh.displayName=kh.displayName;const Sh=s.forwardRef(({className:e,...t},n)=>y.jsx(vh,{ref:n,className:q("text-sm font-semibold",e),...t}));Sh.displayName=vh.displayName;const Th=s.forwardRef(({className:e,...t},n)=>y.jsx(_h,{ref:n,className:q("text-sm opacity-90",e),...t}));Th.displayName=_h.displayName;function $x(){const{toasts:e}=ch();return y.jsxs(_x,{children:[e.map(function({id:t,title:n,description:r,action:o,...l}){return y.jsxs(Ch,{...l,children:[y.jsxs("div",{className:"grid gap-1",children:[n&&y.jsx(Sh,{children:n}),r&&y.jsx(Th,{children:r})]}),o,y.jsx(Eh,{})]},t)}),y.jsx($h,{})]})}const Cx=({html:e,setHtml:t,setStyle:n,style:r})=>{const o=s.useRef(null),{toast:l}=ch(),[a,i]=n0(),[{id:c,type:d},p]=Bo(),[f,h]=Uc(),[{text:w,links:v,images:b,products:_},m]=Aa(),[u,g]=Do(),x=z=>K_(_.filter(S=>S.country===u))[z],k=()=>_.filter(z=>z.country===u).length,C=()=>f==="newsletter"?"?utm_source=newsletter&utm_medium=email&utm_campaign="+a[u]:"";s.useEffect(()=>{if(!o.current)return;function z(T){const N=x(T.getAttribute("data-order-product")),j=T.querySelector("#productHref"),O=T.querySelector("#productTitle"),L=T.querySelector("#productLowPrice"),K=T.querySelector("#productHighPrice");j&&(j.href=N.href+C()),O&&(O.innerText=N.name),L&&(L.innerText=N.lowPrice+" "),K&&(K.innerText=N.highPrice||"")}function S(T){if(T.preventDefault(),T.target.nodeName==="SPAN"){if(d==="text"&&T.target.setAttribute("data-order-text",c),d==="product"){const N=T.target.closest("#product");N.setAttribute("data-order-type",d),N.setAttribute("data-order-product",c)}d==="href"&&(T.target.setAttribute("data-order-type",d),T.target.setAttribute("data-order-product",c)),_&&k()>0&&Array.from(o.current.querySelectorAll("[data-order-product]")).forEach(j=>{z(j)}),w&&w[u].length>0&&Array.from(o.current.querySelectorAll("[data-order-text]")).forEach(j=>{j.innerText=w[u][j.getAttribute("data-order-text")]})}T.target.nodeName==="IMG"&&(d==="image"&&T.target.setAttribute("data-order-image",c),b.length>0&&Array.from(o.current.querySelectorAll("[data-order-image]")).forEach(N=>{var j;N.src=(j=b[N.getAttribute("data-order-image")])==null?void 0:j.link})),T.target.nodeName==="A"&&(d==="text"&&T.target.setAttribute("data-order-text",c),d==="link"&&T.target.setAttribute("data-order-link",c),w&&w[u].length>0&&Array.from(o.current.querySelectorAll("[data-order-text]")).forEach(N=>{N.innerText=w[u][N.getAttribute("data-order-text")]}),v.length>0&&Array.from(o.current.querySelectorAll("[data-order-link]")).forEach(N=>{var j;N.href=(j=v[N.getAttribute("data-order-link")])==null?void 0:j.link}))}function F(T){if(T.target.nodeName==="IMG"){const N=T.target.parentNode;N.nodeName=="A"&&(d==="link"&&N.setAttribute("data-order-link",c),d==="href"&&(N.setAttribute("data-order-type",d),N.setAttribute("data-order-product",c)),_&&k()>0&&Array.from(o.current.querySelectorAll("[data-order-product]")).forEach(O=>{O.href=_[O.getAttribute("data-order-product")][O.getAttribute("data-order-type")]}),v.length>0&&Array.from(o.current.querySelectorAll("[data-order-link]")).forEach(j=>{var O;j.href=(O=v[j.getAttribute("data-order-link")])==null?void 0:O.link}))}}return b.length>0&&Array.from(o.current.querySelectorAll("[data-order-image]")).forEach(T=>{var N;T.src=(N=b[T.getAttribute("data-order-image")])==null?void 0:N.link}),v.length>0&&Array.from(o.current.querySelectorAll("[data-order-link]")).forEach(T=>{var N;T.href=(N=v[T.getAttribute("data-order-link")])==null?void 0:N.link}),w&&w[u].length>0&&Array.from(o.current.querySelectorAll("[data-order-text]")).forEach(N=>{N.innerText=w[u][N.getAttribute("data-order-text")]}),_&&k()>0&&Array.from(o.current.querySelectorAll("[data-order-product]")).forEach(N=>{N.getAttribute("data-order-type")==="href"&&(N.href=_[N.getAttribute("data-order-product")][N.getAttribute("data-order-type")]),N.getAttribute("data-order-type")==="product"&&z(N)}),o.current.addEventListener("click",S),o.current.addEventListener("dblclick",F),()=>{o.current&&(o.current.removeEventListener("click",S),o.current.removeEventListener("dblclick",F))}},[e,c,w,v,u,b,_,f]);const $=()=>{t(""),n("")},E=()=>{navigator.clipboard.writeText(`
                    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                          <head>
                              <title>Beliani</title>
                              <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                              <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&subset=cyrillic-ext,latin-ext" rel="stylesheet">
                              ${r}
                              <!--[if gte mso 9]>
                                      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                                          <v:fill type="tile" color="#ececec">
                                      </v:background>
                                  <![endif]-->
                              <!--[if gte mso 10]>
                                      <xml>
                                          <o:OfficeDocumentSettings>
                                          <o:AllowPNG/>
                                          <o:PixelsPerInch>96</o:PixelsPerInch>
                                          </o:OfficeDocumentSettings>
                                      </xml>
                                  <![endif]-->
                          </head>

                          <body class="body" width="100%" style="width:100% !important; padding:0 !important; margin:0 auto !important; font-family: 'Open Sans', sans-serif!important; font-size:13px; color:#000000; text-align:left; background-color:#ececec;">
                          ${cf[u](f,a[u])}
                          ${o.current.innerHTML}
                          ${df[u]("",f,a[u])}
                          </body>
                      </html>
                  `),l({description:"Newsletter successfully copied"})};return y.jsxs("div",{className:"xl:col-span-3 lg:col-span-6 bg-zinc-400 overflow-y-auto",children:[y.jsx("div",{className:"p-2 lg:px-8",children:y.jsxs(Qm,{defaultValue:"newsletter",className:"h-full space-y-6",children:[y.jsx("div",{className:"space-between flex sticky top-4",children:e&&r&&y.jsx(U_,{campaignId:a[u],onCopy:E,onReset:$})}),e&&r?y.jsxs(y.Fragment,{children:[y.jsxs(jn,{value:"newsletter",className:"border-none p-0 outline-none",children:[y.jsx("div",{dangerouslySetInnerHTML:{__html:r}}),y.jsx("div",{dangerouslySetInnerHTML:{__html:cf[u](f,a[u])}}),y.jsx("div",{ref:o,dangerouslySetInnerHTML:{__html:e}}),y.jsx("div",{dangerouslySetInnerHTML:{__html:df[u]("",f,a[u])}})]}),y.jsx(jn,{value:"Landing",className:"border-none p-0 outline-none",children:y.jsx("div",{ref:o,dangerouslySetInnerHTML:{__html:e}})})]}):y.jsx(y.Fragment,{children:a&&y.jsxs("div",{className:"grid w-full gap-4 pt-36",children:[y.jsxs("div",{children:[y.jsx(Rs,{htmlFor:"message",className:"text-4xl h-fit text-white font-bold",children:"Set html template"}),y.jsx(To,{onChange:z=>t(z.target.value),placeholder:"html code...",id:"message",className:"resize-none min-h-[400px]"})]}),y.jsxs("div",{children:[y.jsx(Rs,{htmlFor:"message",className:"text-4xl h-fit text-white font-bold",children:"Set style template"}),y.jsx(To,{onChange:z=>n(z.target.value),placeholder:"style code...",id:"message",className:"resize-none min-h-[400px]"})]})]})})]})}),y.jsx($x,{})]})},Ex=()=>y.jsxs(Hc,{className:"w-full",children:[y.jsx(Tn,{value:"translations",className:"relative w-full",children:"Translations"}),y.jsx(Tn,{value:"links_constructor",className:"relative w-full",children:"Links"}),y.jsx(Tn,{value:"image_links_constructor",className:"w-full",children:"Images"}),y.jsx(Tn,{value:"products",className:"w-full",children:"Products"})]}),jh="Popover",[Rh,Bk]=vt(jh,[Nr]),pd=Nr(),[Sx,Ar]=Rh(jh),Tx=e=>{const{__scopePopover:t,children:n,open:r,defaultOpen:o,onOpenChange:l,modal:a=!1}=e,i=pd(t),c=s.useRef(null),[d,p]=s.useState(!1),[f=!1,h]=St({prop:r,defaultProp:o,onChange:l});return s.createElement(Jc,i,s.createElement(Sx,{scope:t,contentId:Dt(),triggerRef:c,open:f,onOpenChange:h,onOpenToggle:s.useCallback(()=>h(w=>!w),[h]),hasCustomAnchor:d,onCustomAnchorAdd:s.useCallback(()=>p(!0),[]),onCustomAnchorRemove:s.useCallback(()=>p(!1),[]),modal:a},n))},jx="PopoverTrigger",Rx=s.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,o=Ar(jx,n),l=pd(n),a=oe(t,o.triggerRef),i=s.createElement(W.button,I({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":Ih(o.open)},r,{ref:a,onClick:B(e.onClick,o.onOpenToggle)}));return o.hasCustomAnchor?i:s.createElement(ed,I({asChild:!0},l),i)}),Nh="PopoverPortal",[Nx,Px]=Rh(Nh,{forceMount:void 0}),Ix=e=>{const{__scopePopover:t,forceMount:n,children:r,container:o}=e,l=Ar(Nh,t);return s.createElement(Nx,{scope:t,forceMount:n},s.createElement(jt,{present:n||l.open},s.createElement(Ma,{asChild:!0,container:o},r)))},Po="PopoverContent",Fx=s.forwardRef((e,t)=>{const n=Px(Po,e.__scopePopover),{forceMount:r=n.forceMount,...o}=e,l=Ar(Po,e.__scopePopover);return s.createElement(jt,{present:r||l.open},l.modal?s.createElement(Ax,I({},o,{ref:t})):s.createElement(zx,I({},o,{ref:t})))}),Ax=s.forwardRef((e,t)=>{const n=Ar(Po,e.__scopePopover),r=s.useRef(null),o=oe(t,r),l=s.useRef(!1);return s.useEffect(()=>{const a=r.current;if(a)return rd(a)},[]),s.createElement(od,{as:fn,allowPinchZoom:!0},s.createElement(Ph,I({},e,{ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:B(e.onCloseAutoFocus,a=>{var i;a.preventDefault(),l.current||(i=n.triggerRef.current)===null||i===void 0||i.focus()}),onPointerDownOutside:B(e.onPointerDownOutside,a=>{const i=a.detail.originalEvent,c=i.button===0&&i.ctrlKey===!0,d=i.button===2||c;l.current=d},{checkForDefaultPrevented:!1}),onFocusOutside:B(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1})})))}),zx=s.forwardRef((e,t)=>{const n=Ar(Po,e.__scopePopover),r=s.useRef(!1),o=s.useRef(!1);return s.createElement(Ph,I({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:l=>{var a;if((a=e.onCloseAutoFocus)===null||a===void 0||a.call(e,l),!l.defaultPrevented){var i;r.current||(i=n.triggerRef.current)===null||i===void 0||i.focus(),l.preventDefault()}r.current=!1,o.current=!1},onInteractOutside:l=>{var a,i;(a=e.onInteractOutside)===null||a===void 0||a.call(e,l),l.defaultPrevented||(r.current=!0,l.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const c=l.target;((i=n.triggerRef.current)===null||i===void 0?void 0:i.contains(c))&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&o.current&&l.preventDefault()}}))}),Ph=s.forwardRef((e,t)=>{const{__scopePopover:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:l,disableOutsidePointerEvents:a,onEscapeKeyDown:i,onPointerDownOutside:c,onFocusOutside:d,onInteractOutside:p,...f}=e,h=Ar(Po,n),w=pd(n);return Gc(),s.createElement(Kc,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:l},s.createElement(za,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:p,onEscapeKeyDown:i,onPointerDownOutside:c,onFocusOutside:d,onDismiss:()=>h.onOpenChange(!1)},s.createElement(td,I({"data-state":Ih(h.open),role:"dialog",id:h.contentId},w,f,{ref:t,style:{...f.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});function Ih(e){return e?"open":"closed"}const Ox=Tx,Lx=Rx,Mx=Ix,Fh=Fx,Ah=Ox,zh=Lx,md=s.forwardRef(({className:e,align:t="center",sideOffset:n=4,...r},o)=>y.jsx(Mx,{children:y.jsx(Fh,{ref:o,align:t,sideOffset:n,className:q("z-50 w-72 rounded-md border border-zinc-200 bg-white p-4 text-zinc-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",e),...r})}));md.displayName=Fh.displayName;const Oh="Collapsible",[Dx,Lh]=vt(Oh),[Bx,hd]=Dx(Oh),Hx=s.forwardRef((e,t)=>{const{__scopeCollapsible:n,open:r,defaultOpen:o,disabled:l,onOpenChange:a,...i}=e,[c=!1,d]=St({prop:r,defaultProp:o,onChange:a});return s.createElement(Bx,{scope:n,disabled:l,contentId:Dt(),open:c,onOpenToggle:s.useCallback(()=>d(p=>!p),[d])},s.createElement(W.div,I({"data-state":gd(c),"data-disabled":l?"":void 0},i,{ref:t})))}),Vx="CollapsibleTrigger",Ux=s.forwardRef((e,t)=>{const{__scopeCollapsible:n,...r}=e,o=hd(Vx,n);return s.createElement(W.button,I({type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":gd(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled},r,{ref:t,onClick:B(e.onClick,o.onOpenToggle)}))}),Mh="CollapsibleContent",Gx=s.forwardRef((e,t)=>{const{forceMount:n,...r}=e,o=hd(Mh,e.__scopeCollapsible);return s.createElement(jt,{present:n||o.open},({present:l})=>s.createElement(Kx,I({},r,{ref:t,present:l})))}),Kx=s.forwardRef((e,t)=>{const{__scopeCollapsible:n,present:r,children:o,...l}=e,a=hd(Mh,n),[i,c]=s.useState(r),d=s.useRef(null),p=oe(t,d),f=s.useRef(0),h=f.current,w=s.useRef(0),v=w.current,b=a.open||i,_=s.useRef(b),m=s.useRef();return s.useEffect(()=>{const u=requestAnimationFrame(()=>_.current=!1);return()=>cancelAnimationFrame(u)},[]),et(()=>{const u=d.current;if(u){m.current=m.current||{transitionDuration:u.style.transitionDuration,animationName:u.style.animationName},u.style.transitionDuration="0s",u.style.animationName="none";const g=u.getBoundingClientRect();f.current=g.height,w.current=g.width,_.current||(u.style.transitionDuration=m.current.transitionDuration,u.style.animationName=m.current.animationName),c(r)}},[a.open,r]),s.createElement(W.div,I({"data-state":gd(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!b},l,{ref:p,style:{"--radix-collapsible-content-height":h?`${h}px`:void 0,"--radix-collapsible-content-width":v?`${v}px`:void 0,...e.style}}),b&&o)});function gd(e){return e?"open":"closed"}const Wx=Hx,Yx=Ux,Qx=Gx,_n="Accordion",Zx=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[wd,Xx,qx]=Lo(_n),[Ya,Hk]=vt(_n,[qx,Lh]),bd=Lh(),Dh=G.forwardRef((e,t)=>{const{type:n,...r}=e,o=r,l=r;return G.createElement(wd.Provider,{scope:e.__scopeAccordion},n==="multiple"?G.createElement(nk,I({},l,{ref:t})):G.createElement(tk,I({},o,{ref:t})))});Dh.propTypes={type(e){const t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof t=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(t)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[Bh,Jx]=Ya(_n),[Hh,ek]=Ya(_n,{collapsible:!1}),tk=G.forwardRef((e,t)=>{const{value:n,defaultValue:r,onValueChange:o=()=>{},collapsible:l=!1,...a}=e,[i,c]=St({prop:n,defaultProp:r,onChange:o});return G.createElement(Bh,{scope:e.__scopeAccordion,value:i?[i]:[],onItemOpen:c,onItemClose:G.useCallback(()=>l&&c(""),[l,c])},G.createElement(Hh,{scope:e.__scopeAccordion,collapsible:l},G.createElement(Vh,I({},a,{ref:t}))))}),nk=G.forwardRef((e,t)=>{const{value:n,defaultValue:r,onValueChange:o=()=>{},...l}=e,[a=[],i]=St({prop:n,defaultProp:r,onChange:o}),c=G.useCallback(p=>i((f=[])=>[...f,p]),[i]),d=G.useCallback(p=>i((f=[])=>f.filter(h=>h!==p)),[i]);return G.createElement(Bh,{scope:e.__scopeAccordion,value:a,onItemOpen:c,onItemClose:d},G.createElement(Hh,{scope:e.__scopeAccordion,collapsible:!0},G.createElement(Vh,I({},l,{ref:t}))))}),[rk,Qa]=Ya(_n),Vh=G.forwardRef((e,t)=>{const{__scopeAccordion:n,disabled:r,dir:o,orientation:l="vertical",...a}=e,i=G.useRef(null),c=oe(i,t),d=Xx(n),f=Mo(o)==="ltr",h=B(e.onKeyDown,w=>{var v;if(!Zx.includes(w.key))return;const b=w.target,_=d().filter(z=>{var S;return!((S=z.ref.current)!==null&&S!==void 0&&S.disabled)}),m=_.findIndex(z=>z.ref.current===b),u=_.length;if(m===-1)return;w.preventDefault();let g=m;const x=0,k=u-1,C=()=>{g=m+1,g>k&&(g=x)},$=()=>{g=m-1,g<x&&(g=k)};switch(w.key){case"Home":g=x;break;case"End":g=k;break;case"ArrowRight":l==="horizontal"&&(f?C():$());break;case"ArrowDown":l==="vertical"&&C();break;case"ArrowLeft":l==="horizontal"&&(f?$():C());break;case"ArrowUp":l==="vertical"&&$();break}const E=g%u;(v=_[E].ref.current)===null||v===void 0||v.focus()});return G.createElement(rk,{scope:n,disabled:r,direction:o,orientation:l},G.createElement(wd.Slot,{scope:n},G.createElement(W.div,I({},a,{"data-orientation":l,ref:c,onKeyDown:r?void 0:h}))))}),Vs="AccordionItem",[ok,yd]=Ya(Vs),lk=G.forwardRef((e,t)=>{const{__scopeAccordion:n,value:r,...o}=e,l=Qa(Vs,n),a=Jx(Vs,n),i=bd(n),c=Dt(),d=r&&a.value.includes(r)||!1,p=l.disabled||e.disabled;return G.createElement(ok,{scope:n,open:d,disabled:p,triggerId:c},G.createElement(Wx,I({"data-orientation":l.orientation,"data-state":Uh(d)},i,o,{ref:t,disabled:p,open:d,onOpenChange:f=>{f?a.onItemOpen(r):a.onItemClose(r)}})))}),ak="AccordionHeader",ik=G.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,o=Qa(_n,n),l=yd(ak,n);return G.createElement(W.h3,I({"data-orientation":o.orientation,"data-state":Uh(l.open),"data-disabled":l.disabled?"":void 0},r,{ref:t}))}),hf="AccordionTrigger",sk=G.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,o=Qa(_n,n),l=yd(hf,n),a=ek(hf,n),i=bd(n);return G.createElement(wd.ItemSlot,{scope:n},G.createElement(Yx,I({"aria-disabled":l.open&&!a.collapsible||void 0,"data-orientation":o.orientation,id:l.triggerId},i,r,{ref:t})))}),ck="AccordionContent",dk=G.forwardRef((e,t)=>{const{__scopeAccordion:n,...r}=e,o=Qa(_n,n),l=yd(ck,n),a=bd(n);return G.createElement(Qx,I({role:"region","aria-labelledby":l.triggerId,"data-orientation":o.orientation},a,r,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function Uh(e){return e?"open":"closed"}const uk=Dh,fk=lk,pk=ik,Gh=sk,Kh=dk,Cr=uk,Ln=s.forwardRef(({className:e,...t},n)=>y.jsx(fk,{ref:n,className:q("border-b",e),...t}));Ln.displayName="AccordionItem";const Mn=s.forwardRef(({className:e,children:t,...n},r)=>y.jsx(pk,{className:"flex",children:y.jsxs(Gh,{ref:r,className:q("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...n,children:[t,y.jsx(Xm,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));Mn.displayName=Gh.displayName;const Dn=s.forwardRef(({className:e,children:t,...n},r)=>y.jsx(Kh,{ref:r,className:q("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",e),...n,children:y.jsx("div",{className:"pb-4 pt-0",children:t})}));Dn.displayName=Kh.displayName;const mk=()=>{const[e,t]=Bo(),[n,r]=Do(),[{products:o},l]=Aa(),[a,i]=s.useState(""),c=d=>{try{const p=JSON.parse(d.target.value);l(f=>({...f,products:p})),i("")}catch(p){i(p)}};return y.jsxs(y.Fragment,{children:[o?y.jsxs("div",{className:"flex items-start gap-2",children:[y.jsx("div",{className:"w-full",children:y.jsx(Cr,{type:"single",collapsible:!0,children:y.jsxs(Ln,{value:"item-2",children:[y.jsx(Mn,{children:"Products"}),o.filter(d=>d.country===n).map((d,p)=>y.jsx(Dn,{children:y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(Ia,{onClick:()=>t({id:p,type:"product"}),className:"w-4 h-4 cursor-pointer"}),y.jsx("p",{className:"text-xs",children:d.name})]})},p))]})})}),y.jsx("div",{className:"mt-6",children:y.jsx(Fa,{onClick:()=>l(d=>({...d,products:null})),className:"w-4 h-4 cursor-pointer"})})]}):y.jsx(To,{onChange:c,placeholder:"products json...",id:"message",className:"resize-none min-h-[200px]"}),y.jsx("p",{className:"text-sm text-muted-foreground mt-4 text-red-300",children:(a==null?void 0:a.message)&&y.jsxs(Ah,{children:[y.jsx(zh,{children:y.jsx(ze,{variant:"secondary",children:"Error"})}),y.jsxs(md,{children:[y.jsx("p",{children:a.message}),y.jsx(Ua,{className:"my-3"}),y.jsx(ze,{className:"w-full",children:y.jsx("a",{target:"_blank",href:"https://jsonformatter.curiousconcept.com/#",children:"Open json formatter and fix JSON"})})]})]})})]})},hk=()=>{const[e,t]=Do(),[n,r]=s.useState(""),[o,l]=Bo(),[{text:a},i]=Aa(),c=d=>{try{const p=JSON.parse(d.target.value);i(f=>({...f,text:p})),r("")}catch(p){r(p)}};return y.jsxs(y.Fragment,{children:[a?y.jsxs("div",{className:"flex items-start gap-2",children:[y.jsx("div",{className:"w-full",children:y.jsx(Cr,{type:"single",collapsible:!0,children:y.jsxs(Ln,{value:"item-2",children:[y.jsx(Mn,{children:"Translations"}),a[e].map((d,p)=>y.jsx(Dn,{children:y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("div",{children:y.jsx(Ia,{onClick:()=>l({id:p,type:"text"}),className:"w-4 h-4 cursor-pointer"})}),y.jsx("p",{className:"text-xs whitespace-normal",children:d})]})},p))]})})}),y.jsx("div",{className:"mt-6",children:y.jsx(Fa,{onClick:()=>i(d=>({...d,text:null})),className:"w-4 h-4 cursor-pointer"})})]}):y.jsx(To,{onChange:c,placeholder:"text json...",id:"message",className:"resize-none min-h-[200px]"}),(n==null?void 0:n.message)&&y.jsxs(Ah,{children:[y.jsx(zh,{children:y.jsx(ze,{variant:"secondary",children:"Error"})}),y.jsxs(md,{children:[y.jsx("p",{children:n.message}),y.jsx(Ua,{className:"my-3"}),y.jsx(ze,{className:"w-full",children:y.jsx("a",{target:"_blank",href:"https://jsonformatter.curiousconcept.com/#",children:"Open json formatter and fix JSON"})})]})]})]})},gk=({onSelect:e})=>y.jsx("div",{className:"flex md:w-fit w-full md:mb-0 mb-2",children:y.jsxs(Vo,{onValueChange:e,children:[y.jsx(Ir,{className:"md:w-fit w-full whitespace-nowrap",children:y.jsx(Uo,{defaultValue:"content",placeholder:"Server"})}),y.jsxs(Fr,{children:[y.jsx(Ze,{value:"https://beliani.info/newsletter/2022/",children:"Beliani info"}),y.jsx(Ze,{value:"https://upload.pictureserver.net/static/",children:"Pictureserver"})]})]})}),wk=({onSelect:e})=>y.jsx("div",{className:"flex md:w-fit w-full md:mb-0 mb-2",children:y.jsxs(Vo,{onValueChange:e,children:[y.jsx(Ir,{className:"md:w-[130px] w-full",children:y.jsx(Uo,{defaultValue:"content",placeholder:"With country?"})}),y.jsxs(Fr,{children:[y.jsx(Ze,{value:!0,children:"With"}),y.jsx(Ze,{value:!1,children:"Without"})]})]})}),Za=s.forwardRef(({className:e,type:t,...n},r)=>y.jsx("input",{type:t,className:q("flex h-10 w-full rounded-md border border-zinc-200 border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",e),ref:r,...n}));Za.displayName="Input";const bk=({onSelect:e})=>y.jsx("div",{className:"flex",children:y.jsxs(Vo,{onValueChange:e,children:[y.jsx(Ir,{className:"w-[95px]",children:y.jsx(Uo,{defaultValue:"content",placeholder:"File type"})}),y.jsxs(Fr,{children:[y.jsx(Ze,{value:".jpg",children:"jpg"}),y.jsx(Ze,{value:".png",children:"png"}),y.jsx(Ze,{value:".gif",children:"gif"})]})]})}),yk=({isDisabled:e,onSelect:t,setLink:n,value:r,setValue:o})=>y.jsxs("div",{className:"flex w-full items-center space-x-1",children:[y.jsx(Za,{value:r,onChange:l=>o(l.target.value),type:"text",placeholder:"link to generate..."}),y.jsx(bk,{onSelect:t}),y.jsx(ze,{disabled:!e,onClick:()=>n(r),type:"submit",className:"whitespace-nowrap",children:"Save"})]}),vk=({country:e,images:t,setData:n})=>{const[r,o]=s.useState(!1),[l,a]=Bo(),[i,c]=s.useState(""),[d,p]=s.useState(""),[f,h]=s.useState(!0),[w,v]=s.useState(""),b=()=>{const u={server:w,isWithCoutry:f,file_type:d,value:i,link:w+(f?e.toLowerCase()+i+d:i+d)};n(g=>({...g,images:[...g.images,u]}))},_=u=>{n(g=>({...g,images:g.images.filter((x,k)=>k!==u)}))},m=s.useMemo(()=>f?w+e.toLowerCase()+i+d:w+i+d,[e,f,w,i,d]);return y.jsxs("div",{children:[y.jsxs("div",{className:"flex md:flex-row flex-col w-full items-center space-x-1 mt-3",children:[y.jsx(gk,{onSelect:v}),y.jsx(wk,{onSelect:h}),y.jsx(yk,{onSelect:u=>p(u),value:i,setValue:c,setLink:b,isDisabled:i.length>0&&d.length>0})]}),w&&y.jsx(Cr,{type:"single",collapsible:!0,children:y.jsxs(Ln,{value:"item-1",children:[y.jsxs(Mn,{onClick:()=>o(!r),children:[r?"Hide":"Show"," image link to be generated"]}),y.jsx(Dn,{children:y.jsxs("div",{className:"flex items-center md:flex-row flex-col",children:[y.jsx("div",{className:"flex md:w-1/3 w-full md:mb-0 mb-4 md:mr-4 mr-0",children:y.jsx("img",{className:"object-cover",src:m,alt:""})}),m]})})]})}),t.length>0&&y.jsx(Cr,{type:"single",collapsible:!0,children:y.jsxs(Ln,{value:"item-2",children:[y.jsx(Mn,{children:"Links"}),t.map((u,g)=>y.jsx(Dn,{children:y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("div",{className:"flex gap-2",children:[y.jsx(Fa,{onClick:()=>_(g),className:"w-4 h-4 cursor-pointer"}),y.jsx(Ia,{onClick:()=>a({id:g,type:"image"}),className:"w-4 h-4 cursor-pointer"})]}),y.jsx("p",{className:"text-xs",children:u.link})]})},g))]})})]})},_k=Na("inline-flex items-center rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300",{variants:{variant:{default:"border-transparent bg-zinc-900 text-zinc-50 hover:bg-zinc-900/80 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/80",secondary:"border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",destructive:"border-transparent bg-red-500 text-zinc-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/80",outline:"text-zinc-950 dark:text-zinc-50"}},defaultVariants:{variant:"default"}});function Ii({className:e,variant:t,...n}){return y.jsx("div",{className:q(_k({variant:t}),e),...n})}const xk=({setId:e,setIds:t,country:n,campaignIds:r})=>{const[o,l]=s.useState("");return y.jsx(y.Fragment,{children:r?y.jsxs("div",{className:"flex w-full items-center space-x-2",children:[y.jsxs(Ii,{className:"whitespace-nowrap",variant:"secondary",children:["country: ",n]}),y.jsxs(Ii,{className:"whitespace-nowrap",variant:"secondary",children:["campaign id: ",r[n]]}),y.jsx(Ii,{onClick:()=>t(null),className:"whitespace-nowrap cursor-pointer",variant:"outline",children:"Reset"})]}):y.jsxs("div",{className:"flex w-full items-center space-x-2",children:[y.jsx(Za,{value:o,onChange:a=>l(Number(a.target.value)),type:"number",placeholder:"Campaign Id"}),y.jsx(ze,{onClick:()=>e(o),type:"submit",className:"whitespace-nowrap",children:"Save id"})]})})},kk=({onSelect:e})=>y.jsx("div",{className:"flex",children:y.jsxs(Vo,{onValueChange:e,children:[y.jsx(Ir,{className:"w-[180px]",children:y.jsx(Uo,{defaultValue:"content",placeholder:"Configure origin"})}),y.jsxs(Fr,{children:[y.jsx(Ze,{value:"custom",children:"Custom"}),y.jsx(Ze,{value:"beliani",children:"Beliani shop"}),y.jsx(Ze,{value:"content",children:"Beliani content"}),y.jsx(Ze,{value:"category",children:"Category"})]})]})}),$k=({error:e,setLink:t,value:n,setValue:r})=>y.jsxs("div",{className:"flex w-full items-center space-x-2",children:[y.jsxs("div",{className:"relative w-full",children:[y.jsx(Za,{value:n,onChange:o=>r(o.target.value),type:"text",placeholder:"link to generate..."}),y.jsx("p",{className:"text-xs mt-1 absolute text-red-300",children:e.message})]}),y.jsx(ze,{disabled:n.length===0,onClick:()=>t(n),type:"submit",className:"whitespace-nowrap",children:"Save link"})]}),Ol={CHDE:"https://www.beliani.ch/",CHFR:"https://www.beliani.ch/",UK:"https://www.beliani.co.uk/",DE:"https://www.beliani.de/",FR:"https://www.beliani.fr/",AT:"https://www.beliani.at/",ES:"https://www.beliani.es/",PL:"https://www.beliani.pl/",NL:"https://www.beliani.nl/",PT:"https://www.beliani.pt/",IT:"https://www.beliani.it/",SE:"https://www.beliani.se/",HU:"https://www.beliani.hu/",DK:"https://www.beliani.dk/",CZ:"https://www.beliani.cz/",FI:"https://www.beliani.fi/",NO:"https://www.beliani.no/",SK:"https://www.beliani.sk/"},Ck=({setId:e,setIds:t,campaignIds:n,filters:r,filterNames:o,country:l,links:a,setData:i,categories:c,error:d,setError:p,handleChangedLink:f,isNewsletter:h,template:w})=>{const[v,b]=s.useState(!1),[_,m]=s.useState(""),[u,g]=s.useState(""),[x,k]=Bo(),C=S=>{const F={origin:_,name:S,link:f(_,S)};i(T=>({...T,links:[...T.links,F]}))},$=S=>{i(F=>({...F,links:F.links.filter((T,N)=>N!==S)}))},E=S=>(S.searchParams.append("utm_source","newsletter"),S.searchParams.append("utm_medium","email"),S.searchParams.append("utm_campaign",n[l]),S),z=s.useMemo(()=>{if(p(""),!!n){if(_==="category")try{const S=new URL(u),F=S.pathname.split("/").filter(j=>j.length>0);let T=Ol[l];F.forEach(j=>{j in c?T+=c[j][l.toUpperCase()]+"/":p({message:"Category: "+j+" not found."})});const N=new URL(T);if(S.searchParams){for(const[j,O]of S.searchParams.entries())if(j.toLowerCase()in o){const L=o[j.toLocaleLowerCase()][l],K=r[O.toLocaleLowerCase()][l];N.searchParams.delete(j,O),N.searchParams.set(L,K)}}return w==="newsletter"?E(N).href:N.href}catch(S){p(S)}if(_==="content")return`https://www.beliani.${l.toLowerCase()}/content/`+u+h();if(_==="beliani")return`https://www.beliani.${l.toLowerCase()}/`+u+h();if(_==="custom")try{const S=new URL(u);return w==="newsletter"?E(S).href:u}catch(S){p(S)}}},[l,_,u,w]);return y.jsxs("div",{children:[y.jsx(xk,{setIds:t,campaignIds:n,country:l,setId:e}),n&&y.jsxs("div",{className:"flex w-full items-center space-x-1 mt-3",children:[y.jsx(kk,{onSelect:m}),y.jsx($k,{error:d,value:u,setValue:g,setLink:C})]}),(_||u)&&y.jsx(Cr,{type:"single",collapsible:!0,children:y.jsxs(Ln,{value:"item-1",children:[y.jsxs(Mn,{onClick:()=>b(!v),children:[v?"Hide":"Show"," link to be generated"]}),y.jsx(Dn,{children:z})]})}),a.length>0&&y.jsx(Cr,{type:"single",collapsible:!0,children:y.jsxs(Ln,{value:"item-2",children:[y.jsx(Mn,{children:"Links"}),a.map((S,F)=>y.jsx(Dn,{children:y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("div",{className:"flex gap-2",children:[y.jsx(Fa,{onClick:()=>$(F),className:"w-4 h-4 cursor-pointer"}),y.jsx(Ia,{onClick:()=>k({id:F,type:"link"}),className:"w-4 h-4 cursor-pointer"})]}),y.jsx("p",{className:"text-xs truncate md:max-w-full max-w-[320px]",children:S.link})]})},F))]})})]})};function Ek(e){const t={};return o0.forEach(n=>{t[n]=e,e++}),t}const Sk="http://localhost:5173/src/constance/categories.json",Tk="http://localhost:5173/src/constance/filterNames.json",jk="http://localhost:5173/src/constance/filters.json",Rk=()=>{const[e,t,n]=Gy(Sk),[r,o,l]=Ky(Tk),[a,i,c]=Wy(jk),[d,p]=n0(),[{images:f,links:h},w]=Aa(),[v,b]=Do(),[_,m]=Uc(),[u,g]=s.useState(null),[x,k]=s.useState(""),C=(S,F,T,N)=>T?S+v.toLowerCase()+F+N:S+F+N,$=S=>(S.searchParams.append("utm_source","newsletter"),S.searchParams.append("utm_medium","email"),S.searchParams.append("utm_campaign",d[v]),S),E=()=>_==="newsletter"?"?utm_source=newsletter&utm_medium=email&utm_campaign="+d[v]:"",z=(S,F)=>{if(d){if(k(""),S==="category")try{const T=new URL(F),N=T.pathname.split("/").filter(L=>L.length>0);let j=Ol[v];N.forEach(L=>{L in e?j+=e[L][v.toUpperCase()]+"/":k({message:"Category: "+L+" not found."})});const O=new URL(j);if(T.searchParams){for(const[L,K]of T.searchParams.entries())if(L.toLowerCase()in r){const P=r[L.toLocaleLowerCase()][v],R=a[K.toLocaleLowerCase()][v];O.searchParams.delete(L,K),O.searchParams.set(P,R)}}return _==="newsletter"?$(O).href:O.href}catch(T){k(T)}if(S==="content")return Ol[v]+"content/"+F+E();if(S==="beliani")return Ol[v]+F+E();if(S==="custom")try{const T=new URL(F);return T.searchParams.append("utm_source","newsletter"),T.searchParams.append("utm_medium","email"),T.searchParams.append("utm_campaign",d[v]),_==="newsletter"?T.href:F}catch(T){k(T)}}};return s.useEffect(()=>{w(S=>({...S,images:S.images.map(F=>({...F,link:C(F.server,F.value,F.isWithCoutry,F.file_type)}))}))},[v]),s.useEffect(()=>{w(S=>({...S,links:S.links.map(F=>({...F,link:z(F.origin,F.name)}))}))},[v,_]),s.useEffect(()=>{u&&p(Ek(u))},[u]),y.jsxs(y.Fragment,{children:[y.jsx(jn,{value:"translations",className:"border-none p-0 outline-none",children:y.jsx(hk,{})}),y.jsx(jn,{value:"links_constructor",className:"border-none p-0 outline-none",children:y.jsx(Ck,{campaignIds:d,setIds:p,links:h,country:v,setData:w,setId:g,setError:k,error:x,filterNames:r,filters:a,categories:e,template:_,isNewsletter:E,handleChangedLink:z})}),y.jsx(jn,{value:"image_links_constructor",className:"border-none p-0 outline-none",children:y.jsx(vk,{country:v,images:f,setData:w})}),y.jsx(jn,{value:"products",className:"border-none p-0 outline-none",children:y.jsx(mk,{})})]})},Nk=()=>y.jsx("div",{className:"xl:col-span-3 lg:col-span-6 bg-red-200 lg:p-4 sm:p-2 p-1 bg-white",children:y.jsx("div",{className:"sticky",style:{width:"inherit"},children:y.jsxs(Qm,{defaultValue:"links_constructor",className:"h-full space-y-6",children:[y.jsx(Ex,{}),y.jsx(Rk,{})]})})}),Pk=()=>{const[e,t]=s.useState(""),[n,r]=s.useState("");return y.jsxs("main",{className:"grid lg:grid-cols-6 h-screen overflow-hidden",children:[y.jsx(Nk,{}),y.jsx(Cx,{html:e,setHtml:t,setStyle:r,style:n})]})};Fi.createRoot(document.getElementById("root")).render(y.jsx(G.StrictMode,{children:y.jsx(Zy,{children:y.jsx(Qy,{children:y.jsx(Yy,{children:y.jsx(Vy,{children:y.jsx(Uy,{children:y.jsx(Pk,{})})})})})})}));
