function T7(n,e){for(var r=0;r<e.length;r++){const t=e[r];if(typeof t!="string"&&!Array.isArray(t)){for(const c in t)if(c!=="default"&&!(c in n)){const l=Object.getOwnPropertyDescriptor(t,c);l&&Object.defineProperty(n,c,l.get?l:{enumerable:!0,get:()=>t[c]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))t(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function r(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerPolicy&&(l.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?l.credentials="include":c.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(c){if(c.ep)return;c.ep=!0;const l=r(c);fetch(c.href,l)}})();function D7(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var O7={exports:{}},A4={},I7={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x5=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),It=Symbol.for("react.fragment"),Ft=Symbol.for("react.strict_mode"),Ut=Symbol.for("react.profiler"),At=Symbol.for("react.provider"),Vt=Symbol.for("react.context"),Bt=Symbol.for("react.forward_ref"),bt=Symbol.for("react.suspense"),Ht=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),qe=Symbol.iterator;function Wt(n){return n===null||typeof n!="object"?null:(n=qe&&n[qe]||n["@@iterator"],typeof n=="function"?n:null)}var F7={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U7=Object.assign,A7={};function v0(n,e,r){this.props=n,this.context=e,this.refs=A7,this.updater=r||F7}v0.prototype.isReactComponent={};v0.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};v0.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function V7(){}V7.prototype=v0.prototype;function O6(n,e,r){this.props=n,this.context=e,this.refs=A7,this.updater=r||F7}var I6=O6.prototype=new V7;I6.constructor=O6;U7(I6,v0.prototype);I6.isPureReactComponent=!0;var nr=Array.isArray,B7=Object.prototype.hasOwnProperty,F6={current:null},b7={key:!0,ref:!0,__self:!0,__source:!0};function H7(n,e,r){var t,c={},l=null,o=null;if(e!=null)for(t in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(l=""+e.key),e)B7.call(e,t)&&!b7.hasOwnProperty(t)&&(c[t]=e[t]);var i=arguments.length-2;if(i===1)c.children=r;else if(1<i){for(var a=Array(i),s=0;s<i;s++)a[s]=arguments[s+2];c.children=a}if(n&&n.defaultProps)for(t in i=n.defaultProps,i)c[t]===void 0&&(c[t]=i[t]);return{$$typeof:x5,type:n,key:l,ref:o,props:c,_owner:F6.current}}function Qt(n,e){return{$$typeof:x5,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function U6(n){return typeof n=="object"&&n!==null&&n.$$typeof===x5}function Kt(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(r){return e[r]})}var er=/\/+/g;function sn(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Kt(""+n.key):e.toString(36)}function J5(n,e,r,t,c){var l=typeof n;(l==="undefined"||l==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case x5:case Ot:o=!0}}if(o)return o=n,c=c(o),n=t===""?"."+sn(o,0):t,nr(c)?(r="",n!=null&&(r=n.replace(er,"$&/")+"/"),J5(c,e,r,"",function(s){return s})):c!=null&&(U6(c)&&(c=Qt(c,r+(!c.key||o&&o.key===c.key?"":(""+c.key).replace(er,"$&/")+"/")+n)),e.push(c)),1;if(o=0,t=t===""?".":t+":",nr(n))for(var i=0;i<n.length;i++){l=n[i];var a=t+sn(l,i);o+=J5(l,e,r,a,c)}else if(a=Wt(n),typeof a=="function")for(n=a.call(n),i=0;!(l=n.next()).done;)l=l.value,a=t+sn(l,i++),o+=J5(l,e,r,a,c);else if(l==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function D5(n,e,r){if(n==null)return n;var t=[],c=0;return J5(n,t,"","",function(l){return e.call(r,l,c++)}),t}function Gt(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(r){(n._status===0||n._status===-1)&&(n._status=1,n._result=r)},function(r){(n._status===0||n._status===-1)&&(n._status=2,n._result=r)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var H1={current:null},q5={transition:null},Zt={ReactCurrentDispatcher:H1,ReactCurrentBatchConfig:q5,ReactCurrentOwner:F6};function $7(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:D5,forEach:function(n,e,r){D5(n,function(){e.apply(this,arguments)},r)},count:function(n){var e=0;return D5(n,function(){e++}),e},toArray:function(n){return D5(n,function(e){return e})||[]},only:function(n){if(!U6(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};G.Component=v0;G.Fragment=It;G.Profiler=Ut;G.PureComponent=O6;G.StrictMode=Ft;G.Suspense=bt;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zt;G.act=$7;G.cloneElement=function(n,e,r){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var t=U7({},n.props),c=n.key,l=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(l=e.ref,o=F6.current),e.key!==void 0&&(c=""+e.key),n.type&&n.type.defaultProps)var i=n.type.defaultProps;for(a in e)B7.call(e,a)&&!b7.hasOwnProperty(a)&&(t[a]=e[a]===void 0&&i!==void 0?i[a]:e[a])}var a=arguments.length-2;if(a===1)t.children=r;else if(1<a){i=Array(a);for(var s=0;s<a;s++)i[s]=arguments[s+2];t.children=i}return{$$typeof:x5,type:n.type,key:c,ref:l,props:t,_owner:o}};G.createContext=function(n){return n={$$typeof:Vt,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:At,_context:n},n.Consumer=n};G.createElement=H7;G.createFactory=function(n){var e=H7.bind(null,n);return e.type=n,e};G.createRef=function(){return{current:null}};G.forwardRef=function(n){return{$$typeof:Bt,render:n}};G.isValidElement=U6;G.lazy=function(n){return{$$typeof:$t,_payload:{_status:-1,_result:n},_init:Gt}};G.memo=function(n,e){return{$$typeof:Ht,type:n,compare:e===void 0?null:e}};G.startTransition=function(n){var e=q5.transition;q5.transition={};try{n()}finally{q5.transition=e}};G.unstable_act=$7;G.useCallback=function(n,e){return H1.current.useCallback(n,e)};G.useContext=function(n){return H1.current.useContext(n)};G.useDebugValue=function(){};G.useDeferredValue=function(n){return H1.current.useDeferredValue(n)};G.useEffect=function(n,e){return H1.current.useEffect(n,e)};G.useId=function(){return H1.current.useId()};G.useImperativeHandle=function(n,e,r){return H1.current.useImperativeHandle(n,e,r)};G.useInsertionEffect=function(n,e){return H1.current.useInsertionEffect(n,e)};G.useLayoutEffect=function(n,e){return H1.current.useLayoutEffect(n,e)};G.useMemo=function(n,e){return H1.current.useMemo(n,e)};G.useReducer=function(n,e,r){return H1.current.useReducer(n,e,r)};G.useRef=function(n){return H1.current.useRef(n)};G.useState=function(n){return H1.current.useState(n)};G.useSyncExternalStore=function(n,e,r){return H1.current.useSyncExternalStore(n,e,r)};G.useTransition=function(){return H1.current.useTransition()};G.version="18.3.1";I7.exports=G;var E=I7.exports;const Yt=D7(E),Xt=T7({__proto__:null,default:Yt},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jt=E,qt=Symbol.for("react.element"),nc=Symbol.for("react.fragment"),ec=Object.prototype.hasOwnProperty,rc=Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tc={key:!0,ref:!0,__self:!0,__source:!0};function W7(n,e,r){var t,c={},l=null,o=null;r!==void 0&&(l=""+r),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(o=e.ref);for(t in e)ec.call(e,t)&&!tc.hasOwnProperty(t)&&(c[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps,e)c[t]===void 0&&(c[t]=e[t]);return{$$typeof:qt,type:n,key:l,ref:o,props:c,_owner:rc.current}}A4.Fragment=nc;A4.jsx=W7;A4.jsxs=W7;O7.exports=A4;var u=O7.exports,Q7={exports:{}},t2={},K7={exports:{}},G7={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(_,b){var $=_.length;_.push(b);n:for(;0<$;){var Q=$-1>>>1,i1=_[Q];if(0<c(i1,b))_[Q]=b,_[$]=i1,$=Q;else break n}}function r(_){return _.length===0?null:_[0]}function t(_){if(_.length===0)return null;var b=_[0],$=_.pop();if($!==b){_[0]=$;n:for(var Q=0,i1=_.length,w2=i1>>>1;Q<w2;){var L1=2*(Q+1)-1,d2=_[L1],A1=L1+1,P2=_[A1];if(0>c(d2,$))A1<i1&&0>c(P2,d2)?(_[Q]=P2,_[A1]=$,Q=A1):(_[Q]=d2,_[L1]=$,Q=L1);else if(A1<i1&&0>c(P2,$))_[Q]=P2,_[A1]=$,Q=A1;else break n}}return b}function c(_,b){var $=_.sortIndex-b.sortIndex;return $!==0?$:_.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var o=Date,i=o.now();n.unstable_now=function(){return o.now()-i}}var a=[],s=[],z=1,d=null,p=3,x=!1,S=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(_){for(var b=r(s);b!==null;){if(b.callback===null)t(s);else if(b.startTime<=_)t(s),b.sortIndex=b.expirationTime,e(a,b);else break;b=r(s)}}function C(_){if(w=!1,g(_),!S)if(r(a)!==null)S=!0,X1(L);else{var b=r(s);b!==null&&m1(C,b.startTime-_)}}function L(_,b){S=!1,w&&(w=!1,f(j),j=-1),x=!0;var $=p;try{for(g(b),d=r(a);d!==null&&(!(d.expirationTime>b)||_&&!q());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,p=d.priorityLevel;var i1=Q(d.expirationTime<=b);b=n.unstable_now(),typeof i1=="function"?d.callback=i1:d===r(a)&&t(a),g(b)}else t(a);d=r(a)}if(d!==null)var w2=!0;else{var L1=r(s);L1!==null&&m1(C,L1.startTime-b),w2=!1}return w2}finally{d=null,p=$,x=!1}}var v=!1,R=null,j=-1,D=5,O=-1;function q(){return!(n.unstable_now()-O<D)}function H(){if(R!==null){var _=n.unstable_now();O=_;var b=!0;try{b=R(!0,_)}finally{b?f1():(v=!1,R=null)}}else v=!1}var f1;if(typeof m=="function")f1=function(){m(H)};else if(typeof MessageChannel<"u"){var o1=new MessageChannel,m2=o1.port2;o1.port1.onmessage=H,f1=function(){m2.postMessage(null)}}else f1=function(){P(H,0)};function X1(_){R=_,v||(v=!0,f1())}function m1(_,b){j=P(function(){_(n.unstable_now())},b)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(_){_.callback=null},n.unstable_continueExecution=function(){S||x||(S=!0,X1(L))},n.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<_?Math.floor(1e3/_):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return r(a)},n.unstable_next=function(_){switch(p){case 1:case 2:case 3:var b=3;break;default:b=p}var $=p;p=b;try{return _()}finally{p=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(_,b){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var $=p;p=_;try{return b()}finally{p=$}},n.unstable_scheduleCallback=function(_,b,$){var Q=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Q+$:Q):$=Q,_){case 1:var i1=-1;break;case 2:i1=250;break;case 5:i1=1073741823;break;case 4:i1=1e4;break;default:i1=5e3}return i1=$+i1,_={id:z++,callback:b,priorityLevel:_,startTime:$,expirationTime:i1,sortIndex:-1},$>Q?(_.sortIndex=$,e(s,_),r(a)===null&&_===r(s)&&(w?(f(j),j=-1):w=!0,m1(C,$-Q))):(_.sortIndex=i1,e(a,_),S||x||(S=!0,X1(L))),_},n.unstable_shouldYield=q,n.unstable_wrapCallback=function(_){var b=p;return function(){var $=p;p=b;try{return _.apply(this,arguments)}finally{p=$}}}})(G7);K7.exports=G7;var cc=K7.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lc=E,r2=cc;function N(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z7=new Set,n5={};function O3(n,e){u0(n,e),u0(n+"Capture",e)}function u0(n,e){for(n5[n]=e,n=0;n<e.length;n++)Z7.add(e[n])}var U2=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),An=Object.prototype.hasOwnProperty,oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rr={},tr={};function ic(n){return An.call(tr,n)?!0:An.call(rr,n)?!1:oc.test(n)?tr[n]=!0:(rr[n]=!0,!1)}function ac(n,e,r,t){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return t?!1:r!==null?!r.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function sc(n,e,r,t){if(e===null||typeof e>"u"||ac(n,e,r,t))return!0;if(t)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $1(n,e,r,t,c,l,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=t,this.attributeNamespace=c,this.mustUseProperty=r,this.propertyName=n,this.type=e,this.sanitizeURL=l,this.removeEmptyString=o}var D1={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){D1[n]=new $1(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];D1[e]=new $1(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){D1[n]=new $1(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){D1[n]=new $1(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){D1[n]=new $1(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){D1[n]=new $1(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){D1[n]=new $1(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){D1[n]=new $1(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){D1[n]=new $1(n,5,!1,n.toLowerCase(),null,!1,!1)});var A6=/[\-:]([a-z])/g;function V6(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(A6,V6);D1[e]=new $1(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(A6,V6);D1[e]=new $1(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(A6,V6);D1[e]=new $1(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){D1[n]=new $1(n,1,!1,n.toLowerCase(),null,!1,!1)});D1.xlinkHref=new $1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){D1[n]=new $1(n,1,!1,n.toLowerCase(),null,!0,!0)});function B6(n,e,r,t){var c=D1.hasOwnProperty(e)?D1[e]:null;(c!==null?c.type!==0:t||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sc(e,r,c,t)&&(r=null),t||c===null?ic(e)&&(r===null?n.removeAttribute(e):n.setAttribute(e,""+r)):c.mustUseProperty?n[c.propertyName]=r===null?c.type===3?!1:"":r:(e=c.attributeName,t=c.attributeNamespace,r===null?n.removeAttribute(e):(c=c.type,r=c===3||c===4&&r===!0?"":""+r,t?n.setAttributeNS(t,e,r):n.setAttribute(e,r))))}var b2=lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O5=Symbol.for("react.element"),W3=Symbol.for("react.portal"),Q3=Symbol.for("react.fragment"),b6=Symbol.for("react.strict_mode"),Vn=Symbol.for("react.profiler"),Y7=Symbol.for("react.provider"),X7=Symbol.for("react.context"),H6=Symbol.for("react.forward_ref"),Bn=Symbol.for("react.suspense"),bn=Symbol.for("react.suspense_list"),$6=Symbol.for("react.memo"),Z2=Symbol.for("react.lazy"),J7=Symbol.for("react.offscreen"),cr=Symbol.iterator;function M0(n){return n===null||typeof n!="object"?null:(n=cr&&n[cr]||n["@@iterator"],typeof n=="function"?n:null)}var g1=Object.assign,un;function V0(n){if(un===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);un=e&&e[1]||""}return`
`+un+n}var mn=!1;function dn(n,e){if(!n||mn)return"";mn=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(s){var t=s}Reflect.construct(n,[],e)}else{try{e.call()}catch(s){t=s}n.call(e.prototype)}else{try{throw Error()}catch(s){t=s}n()}}catch(s){if(s&&t&&typeof s.stack=="string"){for(var c=s.stack.split(`
`),l=t.stack.split(`
`),o=c.length-1,i=l.length-1;1<=o&&0<=i&&c[o]!==l[i];)i--;for(;1<=o&&0<=i;o--,i--)if(c[o]!==l[i]){if(o!==1||i!==1)do if(o--,i--,0>i||c[o]!==l[i]){var a=`
`+c[o].replace(" at new "," at ");return n.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",n.displayName)),a}while(1<=o&&0<=i);break}}}finally{mn=!1,Error.prepareStackTrace=r}return(n=n?n.displayName||n.name:"")?V0(n):""}function uc(n){switch(n.tag){case 5:return V0(n.type);case 16:return V0("Lazy");case 13:return V0("Suspense");case 19:return V0("SuspenseList");case 0:case 2:case 15:return n=dn(n.type,!1),n;case 11:return n=dn(n.type.render,!1),n;case 1:return n=dn(n.type,!0),n;default:return""}}function Hn(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Q3:return"Fragment";case W3:return"Portal";case Vn:return"Profiler";case b6:return"StrictMode";case Bn:return"Suspense";case bn:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case X7:return(n.displayName||"Context")+".Consumer";case Y7:return(n._context.displayName||"Context")+".Provider";case H6:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $6:return e=n.displayName||null,e!==null?e:Hn(n.type)||"Memo";case Z2:e=n._payload,n=n._init;try{return Hn(n(e))}catch{}}return null}function mc(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hn(e);case 8:return e===b6?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function u3(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function q7(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dc(n){var e=q7(n)?"checked":"value",r=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),t=""+n[e];if(!n.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,l=r.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return c.call(this)},set:function(o){t=""+o,l.call(this,o)}}),Object.defineProperty(n,e,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(o){t=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function I5(n){n._valueTracker||(n._valueTracker=dc(n))}function n8(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var r=e.getValue(),t="";return n&&(t=q7(n)?n.checked?"true":"false":n.value),n=t,n!==r?(e.setValue(n),!0):!1}function m4(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function $n(n,e){var r=e.checked;return g1({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??n._wrapperState.initialChecked})}function lr(n,e){var r=e.defaultValue==null?"":e.defaultValue,t=e.checked!=null?e.checked:e.defaultChecked;r=u3(e.value!=null?e.value:r),n._wrapperState={initialChecked:t,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function e8(n,e){e=e.checked,e!=null&&B6(n,"checked",e,!1)}function Wn(n,e){e8(n,e);var r=u3(e.value),t=e.type;if(r!=null)t==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+r):n.value!==""+r&&(n.value=""+r);else if(t==="submit"||t==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Qn(n,e.type,r):e.hasOwnProperty("defaultValue")&&Qn(n,e.type,u3(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function or(n,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var t=e.type;if(!(t!=="submit"&&t!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,r||e===n.value||(n.value=e),n.defaultValue=e}r=n.name,r!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,r!==""&&(n.name=r)}function Qn(n,e,r){(e!=="number"||m4(n.ownerDocument)!==n)&&(r==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+r&&(n.defaultValue=""+r))}var B0=Array.isArray;function t0(n,e,r,t){if(n=n.options,e){e={};for(var c=0;c<r.length;c++)e["$"+r[c]]=!0;for(r=0;r<n.length;r++)c=e.hasOwnProperty("$"+n[r].value),n[r].selected!==c&&(n[r].selected=c),c&&t&&(n[r].defaultSelected=!0)}else{for(r=""+u3(r),e=null,c=0;c<n.length;c++){if(n[c].value===r){n[c].selected=!0,t&&(n[c].defaultSelected=!0);return}e!==null||n[c].disabled||(e=n[c])}e!==null&&(e.selected=!0)}}function Kn(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return g1({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ir(n,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(N(92));if(B0(r)){if(1<r.length)throw Error(N(93));r=r[0]}e=r}e==null&&(e=""),r=e}n._wrapperState={initialValue:u3(r)}}function r8(n,e){var r=u3(e.value),t=u3(e.defaultValue);r!=null&&(r=""+r,r!==n.value&&(n.value=r),e.defaultValue==null&&n.defaultValue!==r&&(n.defaultValue=r)),t!=null&&(n.defaultValue=""+t)}function ar(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function t8(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gn(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?t8(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var F5,c8=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,t,c){MSApp.execUnsafeLocalFunction(function(){return n(e,r,t,c)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(F5=F5||document.createElement("div"),F5.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=F5.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function e5(n,e){if(e){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=e;return}}n.textContent=e}var W0={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zc=["Webkit","ms","Moz","O"];Object.keys(W0).forEach(function(n){zc.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),W0[e]=W0[n]})});function l8(n,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||W0.hasOwnProperty(n)&&W0[n]?(""+e).trim():e+"px"}function o8(n,e){n=n.style;for(var r in e)if(e.hasOwnProperty(r)){var t=r.indexOf("--")===0,c=l8(r,e[r],t);r==="float"&&(r="cssFloat"),t?n.setProperty(r,c):n[r]=c}}var fc=g1({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zn(n,e){if(e){if(fc[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function Yn(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xn=null;function W6(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Jn=null,c0=null,l0=null;function sr(n){if(n=k5(n)){if(typeof Jn!="function")throw Error(N(280));var e=n.stateNode;e&&(e=$4(e),Jn(n.stateNode,n.type,e))}}function i8(n){c0?l0?l0.push(n):l0=[n]:c0=n}function a8(){if(c0){var n=c0,e=l0;if(l0=c0=null,sr(n),e)for(n=0;n<e.length;n++)sr(e[n])}}function s8(n,e){return n(e)}function u8(){}var zn=!1;function m8(n,e,r){if(zn)return n(e,r);zn=!0;try{return s8(n,e,r)}finally{zn=!1,(c0!==null||l0!==null)&&(u8(),a8())}}function r5(n,e){var r=n.stateNode;if(r===null)return null;var t=$4(r);if(t===null)return null;r=t[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(N(231,e,typeof r));return r}var qn=!1;if(U2)try{var P0={};Object.defineProperty(P0,"passive",{get:function(){qn=!0}}),window.addEventListener("test",P0,P0),window.removeEventListener("test",P0,P0)}catch{qn=!1}function pc(n,e,r,t,c,l,o,i,a){var s=Array.prototype.slice.call(arguments,3);try{e.apply(r,s)}catch(z){this.onError(z)}}var Q0=!1,d4=null,z4=!1,n6=null,hc={onError:function(n){Q0=!0,d4=n}};function gc(n,e,r,t,c,l,o,i,a){Q0=!1,d4=null,pc.apply(hc,arguments)}function vc(n,e,r,t,c,l,o,i,a){if(gc.apply(this,arguments),Q0){if(Q0){var s=d4;Q0=!1,d4=null}else throw Error(N(198));z4||(z4=!0,n6=s)}}function I3(n){var e=n,r=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(r=e.return),n=e.return;while(n)}return e.tag===3?r:null}function d8(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ur(n){if(I3(n)!==n)throw Error(N(188))}function yc(n){var e=n.alternate;if(!e){if(e=I3(n),e===null)throw Error(N(188));return e!==n?null:n}for(var r=n,t=e;;){var c=r.return;if(c===null)break;var l=c.alternate;if(l===null){if(t=c.return,t!==null){r=t;continue}break}if(c.child===l.child){for(l=c.child;l;){if(l===r)return ur(c),n;if(l===t)return ur(c),e;l=l.sibling}throw Error(N(188))}if(r.return!==t.return)r=c,t=l;else{for(var o=!1,i=c.child;i;){if(i===r){o=!0,r=c,t=l;break}if(i===t){o=!0,t=c,r=l;break}i=i.sibling}if(!o){for(i=l.child;i;){if(i===r){o=!0,r=l,t=c;break}if(i===t){o=!0,t=l,r=c;break}i=i.sibling}if(!o)throw Error(N(189))}}if(r.alternate!==t)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?n:e}function z8(n){return n=yc(n),n!==null?f8(n):null}function f8(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=f8(n);if(e!==null)return e;n=n.sibling}return null}var p8=r2.unstable_scheduleCallback,mr=r2.unstable_cancelCallback,xc=r2.unstable_shouldYield,wc=r2.unstable_requestPaint,w1=r2.unstable_now,Sc=r2.unstable_getCurrentPriorityLevel,Q6=r2.unstable_ImmediatePriority,h8=r2.unstable_UserBlockingPriority,f4=r2.unstable_NormalPriority,kc=r2.unstable_LowPriority,g8=r2.unstable_IdlePriority,V4=null,j2=null;function Cc(n){if(j2&&typeof j2.onCommitFiberRoot=="function")try{j2.onCommitFiberRoot(V4,n,void 0,(n.current.flags&128)===128)}catch{}}var v2=Math.clz32?Math.clz32:Mc,Ec=Math.log,jc=Math.LN2;function Mc(n){return n>>>=0,n===0?32:31-(Ec(n)/jc|0)|0}var U5=64,A5=4194304;function b0(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function p4(n,e){var r=n.pendingLanes;if(r===0)return 0;var t=0,c=n.suspendedLanes,l=n.pingedLanes,o=r&268435455;if(o!==0){var i=o&~c;i!==0?t=b0(i):(l&=o,l!==0&&(t=b0(l)))}else o=r&~c,o!==0?t=b0(o):l!==0&&(t=b0(l));if(t===0)return 0;if(e!==0&&e!==t&&!(e&c)&&(c=t&-t,l=e&-e,c>=l||c===16&&(l&4194240)!==0))return e;if(t&4&&(t|=r&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=t;0<e;)r=31-v2(e),c=1<<r,t|=n[r],e&=~c;return t}function Pc(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nc(n,e){for(var r=n.suspendedLanes,t=n.pingedLanes,c=n.expirationTimes,l=n.pendingLanes;0<l;){var o=31-v2(l),i=1<<o,a=c[o];a===-1?(!(i&r)||i&t)&&(c[o]=Pc(i,e)):a<=e&&(n.expiredLanes|=i),l&=~i}}function e6(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function v8(){var n=U5;return U5<<=1,!(U5&4194240)&&(U5=64),n}function fn(n){for(var e=[],r=0;31>r;r++)e.push(n);return e}function w5(n,e,r){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-v2(e),n[e]=r}function Lc(n,e){var r=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var t=n.eventTimes;for(n=n.expirationTimes;0<r;){var c=31-v2(r),l=1<<c;e[c]=0,t[c]=-1,n[c]=-1,r&=~l}}function K6(n,e){var r=n.entangledLanes|=e;for(n=n.entanglements;r;){var t=31-v2(r),c=1<<t;c&e|n[t]&e&&(n[t]|=e),r&=~c}}var r1=0;function y8(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var x8,G6,w8,S8,k8,r6=!1,V5=[],r3=null,t3=null,c3=null,t5=new Map,c5=new Map,X2=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dr(n,e){switch(n){case"focusin":case"focusout":r3=null;break;case"dragenter":case"dragleave":t3=null;break;case"mouseover":case"mouseout":c3=null;break;case"pointerover":case"pointerout":t5.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":c5.delete(e.pointerId)}}function N0(n,e,r,t,c,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:r,eventSystemFlags:t,nativeEvent:l,targetContainers:[c]},e!==null&&(e=k5(e),e!==null&&G6(e)),n):(n.eventSystemFlags|=t,e=n.targetContainers,c!==null&&e.indexOf(c)===-1&&e.push(c),n)}function _c(n,e,r,t,c){switch(e){case"focusin":return r3=N0(r3,n,e,r,t,c),!0;case"dragenter":return t3=N0(t3,n,e,r,t,c),!0;case"mouseover":return c3=N0(c3,n,e,r,t,c),!0;case"pointerover":var l=c.pointerId;return t5.set(l,N0(t5.get(l)||null,n,e,r,t,c)),!0;case"gotpointercapture":return l=c.pointerId,c5.set(l,N0(c5.get(l)||null,n,e,r,t,c)),!0}return!1}function C8(n){var e=k3(n.target);if(e!==null){var r=I3(e);if(r!==null){if(e=r.tag,e===13){if(e=d8(r),e!==null){n.blockedOn=e,k8(n.priority,function(){w8(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function n4(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var r=t6(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(r===null){r=n.nativeEvent;var t=new r.constructor(r.type,r);Xn=t,r.target.dispatchEvent(t),Xn=null}else return e=k5(r),e!==null&&G6(e),n.blockedOn=r,!1;e.shift()}return!0}function zr(n,e,r){n4(n)&&r.delete(e)}function Tc(){r6=!1,r3!==null&&n4(r3)&&(r3=null),t3!==null&&n4(t3)&&(t3=null),c3!==null&&n4(c3)&&(c3=null),t5.forEach(zr),c5.forEach(zr)}function L0(n,e){n.blockedOn===e&&(n.blockedOn=null,r6||(r6=!0,r2.unstable_scheduleCallback(r2.unstable_NormalPriority,Tc)))}function l5(n){function e(c){return L0(c,n)}if(0<V5.length){L0(V5[0],n);for(var r=1;r<V5.length;r++){var t=V5[r];t.blockedOn===n&&(t.blockedOn=null)}}for(r3!==null&&L0(r3,n),t3!==null&&L0(t3,n),c3!==null&&L0(c3,n),t5.forEach(e),c5.forEach(e),r=0;r<X2.length;r++)t=X2[r],t.blockedOn===n&&(t.blockedOn=null);for(;0<X2.length&&(r=X2[0],r.blockedOn===null);)C8(r),r.blockedOn===null&&X2.shift()}var o0=b2.ReactCurrentBatchConfig,h4=!0;function Dc(n,e,r,t){var c=r1,l=o0.transition;o0.transition=null;try{r1=1,Z6(n,e,r,t)}finally{r1=c,o0.transition=l}}function Oc(n,e,r,t){var c=r1,l=o0.transition;o0.transition=null;try{r1=4,Z6(n,e,r,t)}finally{r1=c,o0.transition=l}}function Z6(n,e,r,t){if(h4){var c=t6(n,e,r,t);if(c===null)Cn(n,e,t,g4,r),dr(n,t);else if(_c(c,n,e,r,t))t.stopPropagation();else if(dr(n,t),e&4&&-1<Rc.indexOf(n)){for(;c!==null;){var l=k5(c);if(l!==null&&x8(l),l=t6(n,e,r,t),l===null&&Cn(n,e,t,g4,r),l===c)break;c=l}c!==null&&t.stopPropagation()}else Cn(n,e,t,null,r)}}var g4=null;function t6(n,e,r,t){if(g4=null,n=W6(t),n=k3(n),n!==null)if(e=I3(n),e===null)n=null;else if(r=e.tag,r===13){if(n=d8(e),n!==null)return n;n=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return g4=n,null}function E8(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sc()){case Q6:return 1;case h8:return 4;case f4:case kc:return 16;case g8:return 536870912;default:return 16}default:return 16}}var q2=null,Y6=null,e4=null;function j8(){if(e4)return e4;var n,e=Y6,r=e.length,t,c="value"in q2?q2.value:q2.textContent,l=c.length;for(n=0;n<r&&e[n]===c[n];n++);var o=r-n;for(t=1;t<=o&&e[r-t]===c[l-t];t++);return e4=c.slice(n,1<t?1-t:void 0)}function r4(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function B5(){return!0}function fr(){return!1}function c2(n){function e(r,t,c,l,o){this._reactName=r,this._targetInst=c,this.type=t,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var i in n)n.hasOwnProperty(i)&&(r=n[i],this[i]=r?r(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?B5:fr,this.isPropagationStopped=fr,this}return g1(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=B5)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=B5)},persist:function(){},isPersistent:B5}),e}var y0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},X6=c2(y0),S5=g1({},y0,{view:0,detail:0}),Ic=c2(S5),pn,hn,R0,B4=g1({},S5,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:J6,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==R0&&(R0&&n.type==="mousemove"?(pn=n.screenX-R0.screenX,hn=n.screenY-R0.screenY):hn=pn=0,R0=n),pn)},movementY:function(n){return"movementY"in n?n.movementY:hn}}),pr=c2(B4),Fc=g1({},B4,{dataTransfer:0}),Uc=c2(Fc),Ac=g1({},S5,{relatedTarget:0}),gn=c2(Ac),Vc=g1({},y0,{animationName:0,elapsedTime:0,pseudoElement:0}),Bc=c2(Vc),bc=g1({},y0,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Hc=c2(bc),$c=g1({},y0,{data:0}),hr=c2($c),Wc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gc(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Kc[n])?!!e[n]:!1}function J6(){return Gc}var Zc=g1({},S5,{key:function(n){if(n.key){var e=Wc[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=r4(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Qc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:J6,charCode:function(n){return n.type==="keypress"?r4(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?r4(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Yc=c2(Zc),Xc=g1({},B4,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gr=c2(Xc),Jc=g1({},S5,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:J6}),qc=c2(Jc),nl=g1({},y0,{propertyName:0,elapsedTime:0,pseudoElement:0}),el=c2(nl),rl=g1({},B4,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),tl=c2(rl),cl=[9,13,27,32],q6=U2&&"CompositionEvent"in window,K0=null;U2&&"documentMode"in document&&(K0=document.documentMode);var ll=U2&&"TextEvent"in window&&!K0,M8=U2&&(!q6||K0&&8<K0&&11>=K0),vr=" ",yr=!1;function P8(n,e){switch(n){case"keyup":return cl.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N8(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var K3=!1;function ol(n,e){switch(n){case"compositionend":return N8(e);case"keypress":return e.which!==32?null:(yr=!0,vr);case"textInput":return n=e.data,n===vr&&yr?null:n;default:return null}}function il(n,e){if(K3)return n==="compositionend"||!q6&&P8(n,e)?(n=j8(),e4=Y6=q2=null,K3=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return M8&&e.locale!=="ko"?null:e.data;default:return null}}var al={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xr(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!al[n.type]:e==="textarea"}function L8(n,e,r,t){i8(t),e=v4(e,"onChange"),0<e.length&&(r=new X6("onChange","change",null,r,t),n.push({event:r,listeners:e}))}var G0=null,o5=null;function sl(n){B8(n,0)}function b4(n){var e=Y3(n);if(n8(e))return n}function ul(n,e){if(n==="change")return e}var R8=!1;if(U2){var vn;if(U2){var yn="oninput"in document;if(!yn){var wr=document.createElement("div");wr.setAttribute("oninput","return;"),yn=typeof wr.oninput=="function"}vn=yn}else vn=!1;R8=vn&&(!document.documentMode||9<document.documentMode)}function Sr(){G0&&(G0.detachEvent("onpropertychange",_8),o5=G0=null)}function _8(n){if(n.propertyName==="value"&&b4(o5)){var e=[];L8(e,o5,n,W6(n)),m8(sl,e)}}function ml(n,e,r){n==="focusin"?(Sr(),G0=e,o5=r,G0.attachEvent("onpropertychange",_8)):n==="focusout"&&Sr()}function dl(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return b4(o5)}function zl(n,e){if(n==="click")return b4(e)}function fl(n,e){if(n==="input"||n==="change")return b4(e)}function pl(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var x2=typeof Object.is=="function"?Object.is:pl;function i5(n,e){if(x2(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var r=Object.keys(n),t=Object.keys(e);if(r.length!==t.length)return!1;for(t=0;t<r.length;t++){var c=r[t];if(!An.call(e,c)||!x2(n[c],e[c]))return!1}return!0}function kr(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Cr(n,e){var r=kr(n);n=0;for(var t;r;){if(r.nodeType===3){if(t=n+r.textContent.length,n<=e&&t>=e)return{node:r,offset:e-n};n=t}n:{for(;r;){if(r.nextSibling){r=r.nextSibling;break n}r=r.parentNode}r=void 0}r=kr(r)}}function T8(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?T8(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function D8(){for(var n=window,e=m4();e instanceof n.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)n=e.contentWindow;else break;e=m4(n.document)}return e}function ne(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function hl(n){var e=D8(),r=n.focusedElem,t=n.selectionRange;if(e!==r&&r&&r.ownerDocument&&T8(r.ownerDocument.documentElement,r)){if(t!==null&&ne(r)){if(e=t.start,n=t.end,n===void 0&&(n=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(n,r.value.length);else if(n=(e=r.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var c=r.textContent.length,l=Math.min(t.start,c);t=t.end===void 0?l:Math.min(t.end,c),!n.extend&&l>t&&(c=t,t=l,l=c),c=Cr(r,l);var o=Cr(r,t);c&&o&&(n.rangeCount!==1||n.anchorNode!==c.node||n.anchorOffset!==c.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),n.removeAllRanges(),l>t?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=r;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)n=e[r],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var gl=U2&&"documentMode"in document&&11>=document.documentMode,G3=null,c6=null,Z0=null,l6=!1;function Er(n,e,r){var t=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;l6||G3==null||G3!==m4(t)||(t=G3,"selectionStart"in t&&ne(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Z0&&i5(Z0,t)||(Z0=t,t=v4(c6,"onSelect"),0<t.length&&(e=new X6("onSelect","select",null,e,r),n.push({event:e,listeners:t}),e.target=G3)))}function b5(n,e){var r={};return r[n.toLowerCase()]=e.toLowerCase(),r["Webkit"+n]="webkit"+e,r["Moz"+n]="moz"+e,r}var Z3={animationend:b5("Animation","AnimationEnd"),animationiteration:b5("Animation","AnimationIteration"),animationstart:b5("Animation","AnimationStart"),transitionend:b5("Transition","TransitionEnd")},xn={},O8={};U2&&(O8=document.createElement("div").style,"AnimationEvent"in window||(delete Z3.animationend.animation,delete Z3.animationiteration.animation,delete Z3.animationstart.animation),"TransitionEvent"in window||delete Z3.transitionend.transition);function H4(n){if(xn[n])return xn[n];if(!Z3[n])return n;var e=Z3[n],r;for(r in e)if(e.hasOwnProperty(r)&&r in O8)return xn[n]=e[r];return n}var I8=H4("animationend"),F8=H4("animationiteration"),U8=H4("animationstart"),A8=H4("transitionend"),V8=new Map,jr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function d3(n,e){V8.set(n,e),O3(e,[n])}for(var wn=0;wn<jr.length;wn++){var Sn=jr[wn],vl=Sn.toLowerCase(),yl=Sn[0].toUpperCase()+Sn.slice(1);d3(vl,"on"+yl)}d3(I8,"onAnimationEnd");d3(F8,"onAnimationIteration");d3(U8,"onAnimationStart");d3("dblclick","onDoubleClick");d3("focusin","onFocus");d3("focusout","onBlur");d3(A8,"onTransitionEnd");u0("onMouseEnter",["mouseout","mouseover"]);u0("onMouseLeave",["mouseout","mouseover"]);u0("onPointerEnter",["pointerout","pointerover"]);u0("onPointerLeave",["pointerout","pointerover"]);O3("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));O3("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));O3("onBeforeInput",["compositionend","keypress","textInput","paste"]);O3("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));O3("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));O3("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var H0="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xl=new Set("cancel close invalid load scroll toggle".split(" ").concat(H0));function Mr(n,e,r){var t=n.type||"unknown-event";n.currentTarget=r,vc(t,e,void 0,n),n.currentTarget=null}function B8(n,e){e=(e&4)!==0;for(var r=0;r<n.length;r++){var t=n[r],c=t.event;t=t.listeners;n:{var l=void 0;if(e)for(var o=t.length-1;0<=o;o--){var i=t[o],a=i.instance,s=i.currentTarget;if(i=i.listener,a!==l&&c.isPropagationStopped())break n;Mr(c,i,s),l=a}else for(o=0;o<t.length;o++){if(i=t[o],a=i.instance,s=i.currentTarget,i=i.listener,a!==l&&c.isPropagationStopped())break n;Mr(c,i,s),l=a}}}if(z4)throw n=n6,z4=!1,n6=null,n}function s1(n,e){var r=e[u6];r===void 0&&(r=e[u6]=new Set);var t=n+"__bubble";r.has(t)||(b8(e,n,2,!1),r.add(t))}function kn(n,e,r){var t=0;e&&(t|=4),b8(r,n,t,e)}var H5="_reactListening"+Math.random().toString(36).slice(2);function a5(n){if(!n[H5]){n[H5]=!0,Z7.forEach(function(r){r!=="selectionchange"&&(xl.has(r)||kn(r,!1,n),kn(r,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[H5]||(e[H5]=!0,kn("selectionchange",!1,e))}}function b8(n,e,r,t){switch(E8(e)){case 1:var c=Dc;break;case 4:c=Oc;break;default:c=Z6}r=c.bind(null,e,r,n),c=void 0,!qn||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(c=!0),t?c!==void 0?n.addEventListener(e,r,{capture:!0,passive:c}):n.addEventListener(e,r,!0):c!==void 0?n.addEventListener(e,r,{passive:c}):n.addEventListener(e,r,!1)}function Cn(n,e,r,t,c){var l=t;if(!(e&1)&&!(e&2)&&t!==null)n:for(;;){if(t===null)return;var o=t.tag;if(o===3||o===4){var i=t.stateNode.containerInfo;if(i===c||i.nodeType===8&&i.parentNode===c)break;if(o===4)for(o=t.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===c||a.nodeType===8&&a.parentNode===c))return;o=o.return}for(;i!==null;){if(o=k3(i),o===null)return;if(a=o.tag,a===5||a===6){t=l=o;continue n}i=i.parentNode}}t=t.return}m8(function(){var s=l,z=W6(r),d=[];n:{var p=V8.get(n);if(p!==void 0){var x=X6,S=n;switch(n){case"keypress":if(r4(r)===0)break n;case"keydown":case"keyup":x=Yc;break;case"focusin":S="focus",x=gn;break;case"focusout":S="blur",x=gn;break;case"beforeblur":case"afterblur":x=gn;break;case"click":if(r.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=pr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Uc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=qc;break;case I8:case F8:case U8:x=Bc;break;case A8:x=el;break;case"scroll":x=Ic;break;case"wheel":x=tl;break;case"copy":case"cut":case"paste":x=Hc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=gr}var w=(e&4)!==0,P=!w&&n==="scroll",f=w?p!==null?p+"Capture":null:p;w=[];for(var m=s,g;m!==null;){g=m;var C=g.stateNode;if(g.tag===5&&C!==null&&(g=C,f!==null&&(C=r5(m,f),C!=null&&w.push(s5(m,C,g)))),P)break;m=m.return}0<w.length&&(p=new x(p,S,null,r,z),d.push({event:p,listeners:w}))}}if(!(e&7)){n:{if(p=n==="mouseover"||n==="pointerover",x=n==="mouseout"||n==="pointerout",p&&r!==Xn&&(S=r.relatedTarget||r.fromElement)&&(k3(S)||S[A2]))break n;if((x||p)&&(p=z.window===z?z:(p=z.ownerDocument)?p.defaultView||p.parentWindow:window,x?(S=r.relatedTarget||r.toElement,x=s,S=S?k3(S):null,S!==null&&(P=I3(S),S!==P||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=s),x!==S)){if(w=pr,C="onMouseLeave",f="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(w=gr,C="onPointerLeave",f="onPointerEnter",m="pointer"),P=x==null?p:Y3(x),g=S==null?p:Y3(S),p=new w(C,m+"leave",x,r,z),p.target=P,p.relatedTarget=g,C=null,k3(z)===s&&(w=new w(f,m+"enter",S,r,z),w.target=g,w.relatedTarget=P,C=w),P=C,x&&S)e:{for(w=x,f=S,m=0,g=w;g;g=H3(g))m++;for(g=0,C=f;C;C=H3(C))g++;for(;0<m-g;)w=H3(w),m--;for(;0<g-m;)f=H3(f),g--;for(;m--;){if(w===f||f!==null&&w===f.alternate)break e;w=H3(w),f=H3(f)}w=null}else w=null;x!==null&&Pr(d,p,x,w,!1),S!==null&&P!==null&&Pr(d,P,S,w,!0)}}n:{if(p=s?Y3(s):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var L=ul;else if(xr(p))if(R8)L=fl;else{L=dl;var v=ml}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=zl);if(L&&(L=L(n,s))){L8(d,L,r,z);break n}v&&v(n,p,s),n==="focusout"&&(v=p._wrapperState)&&v.controlled&&p.type==="number"&&Qn(p,"number",p.value)}switch(v=s?Y3(s):window,n){case"focusin":(xr(v)||v.contentEditable==="true")&&(G3=v,c6=s,Z0=null);break;case"focusout":Z0=c6=G3=null;break;case"mousedown":l6=!0;break;case"contextmenu":case"mouseup":case"dragend":l6=!1,Er(d,r,z);break;case"selectionchange":if(gl)break;case"keydown":case"keyup":Er(d,r,z)}var R;if(q6)n:{switch(n){case"compositionstart":var j="onCompositionStart";break n;case"compositionend":j="onCompositionEnd";break n;case"compositionupdate":j="onCompositionUpdate";break n}j=void 0}else K3?P8(n,r)&&(j="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(j="onCompositionStart");j&&(M8&&r.locale!=="ko"&&(K3||j!=="onCompositionStart"?j==="onCompositionEnd"&&K3&&(R=j8()):(q2=z,Y6="value"in q2?q2.value:q2.textContent,K3=!0)),v=v4(s,j),0<v.length&&(j=new hr(j,n,null,r,z),d.push({event:j,listeners:v}),R?j.data=R:(R=N8(r),R!==null&&(j.data=R)))),(R=ll?ol(n,r):il(n,r))&&(s=v4(s,"onBeforeInput"),0<s.length&&(z=new hr("onBeforeInput","beforeinput",null,r,z),d.push({event:z,listeners:s}),z.data=R))}B8(d,e)})}function s5(n,e,r){return{instance:n,listener:e,currentTarget:r}}function v4(n,e){for(var r=e+"Capture",t=[];n!==null;){var c=n,l=c.stateNode;c.tag===5&&l!==null&&(c=l,l=r5(n,r),l!=null&&t.unshift(s5(n,l,c)),l=r5(n,e),l!=null&&t.push(s5(n,l,c))),n=n.return}return t}function H3(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Pr(n,e,r,t,c){for(var l=e._reactName,o=[];r!==null&&r!==t;){var i=r,a=i.alternate,s=i.stateNode;if(a!==null&&a===t)break;i.tag===5&&s!==null&&(i=s,c?(a=r5(r,l),a!=null&&o.unshift(s5(r,a,i))):c||(a=r5(r,l),a!=null&&o.push(s5(r,a,i)))),r=r.return}o.length!==0&&n.push({event:e,listeners:o})}var wl=/\r\n?/g,Sl=/\u0000|\uFFFD/g;function Nr(n){return(typeof n=="string"?n:""+n).replace(wl,`
`).replace(Sl,"")}function $5(n,e,r){if(e=Nr(e),Nr(n)!==e&&r)throw Error(N(425))}function y4(){}var o6=null,i6=null;function a6(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var s6=typeof setTimeout=="function"?setTimeout:void 0,kl=typeof clearTimeout=="function"?clearTimeout:void 0,Lr=typeof Promise=="function"?Promise:void 0,Cl=typeof queueMicrotask=="function"?queueMicrotask:typeof Lr<"u"?function(n){return Lr.resolve(null).then(n).catch(El)}:s6;function El(n){setTimeout(function(){throw n})}function En(n,e){var r=e,t=0;do{var c=r.nextSibling;if(n.removeChild(r),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(t===0){n.removeChild(c),l5(e);return}t--}else r!=="$"&&r!=="$?"&&r!=="$!"||t++;r=c}while(r);l5(e)}function l3(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Rr(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return n;e--}else r==="/$"&&e++}n=n.previousSibling}return null}var x0=Math.random().toString(36).slice(2),E2="__reactFiber$"+x0,u5="__reactProps$"+x0,A2="__reactContainer$"+x0,u6="__reactEvents$"+x0,jl="__reactListeners$"+x0,Ml="__reactHandles$"+x0;function k3(n){var e=n[E2];if(e)return e;for(var r=n.parentNode;r;){if(e=r[A2]||r[E2]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(n=Rr(n);n!==null;){if(r=n[E2])return r;n=Rr(n)}return e}n=r,r=n.parentNode}return null}function k5(n){return n=n[E2]||n[A2],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Y3(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(N(33))}function $4(n){return n[u5]||null}var m6=[],X3=-1;function z3(n){return{current:n}}function u1(n){0>X3||(n.current=m6[X3],m6[X3]=null,X3--)}function l1(n,e){X3++,m6[X3]=n.current,n.current=e}var m3={},U1=z3(m3),G1=z3(!1),N3=m3;function m0(n,e){var r=n.type.contextTypes;if(!r)return m3;var t=n.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===e)return t.__reactInternalMemoizedMaskedChildContext;var c={},l;for(l in r)c[l]=e[l];return t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=c),c}function Z1(n){return n=n.childContextTypes,n!=null}function x4(){u1(G1),u1(U1)}function _r(n,e,r){if(U1.current!==m3)throw Error(N(168));l1(U1,e),l1(G1,r)}function H8(n,e,r){var t=n.stateNode;if(e=e.childContextTypes,typeof t.getChildContext!="function")return r;t=t.getChildContext();for(var c in t)if(!(c in e))throw Error(N(108,mc(n)||"Unknown",c));return g1({},r,t)}function w4(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||m3,N3=U1.current,l1(U1,n),l1(G1,G1.current),!0}function Tr(n,e,r){var t=n.stateNode;if(!t)throw Error(N(169));r?(n=H8(n,e,N3),t.__reactInternalMemoizedMergedChildContext=n,u1(G1),u1(U1),l1(U1,n)):u1(G1),l1(G1,r)}var T2=null,W4=!1,jn=!1;function $8(n){T2===null?T2=[n]:T2.push(n)}function Pl(n){W4=!0,$8(n)}function f3(){if(!jn&&T2!==null){jn=!0;var n=0,e=r1;try{var r=T2;for(r1=1;n<r.length;n++){var t=r[n];do t=t(!0);while(t!==null)}T2=null,W4=!1}catch(c){throw T2!==null&&(T2=T2.slice(n+1)),p8(Q6,f3),c}finally{r1=e,jn=!1}}return null}var J3=[],q3=0,S4=null,k4=0,l2=[],o2=0,L3=null,D2=1,O2="";function y3(n,e){J3[q3++]=k4,J3[q3++]=S4,S4=n,k4=e}function W8(n,e,r){l2[o2++]=D2,l2[o2++]=O2,l2[o2++]=L3,L3=n;var t=D2;n=O2;var c=32-v2(t)-1;t&=~(1<<c),r+=1;var l=32-v2(e)+c;if(30<l){var o=c-c%5;l=(t&(1<<o)-1).toString(32),t>>=o,c-=o,D2=1<<32-v2(e)+c|r<<c|t,O2=l+n}else D2=1<<l|r<<c|t,O2=n}function ee(n){n.return!==null&&(y3(n,1),W8(n,1,0))}function re(n){for(;n===S4;)S4=J3[--q3],J3[q3]=null,k4=J3[--q3],J3[q3]=null;for(;n===L3;)L3=l2[--o2],l2[o2]=null,O2=l2[--o2],l2[o2]=null,D2=l2[--o2],l2[o2]=null}var e2=null,n2=null,z1=!1,g2=null;function Q8(n,e){var r=i2(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=n,e=n.deletions,e===null?(n.deletions=[r],n.flags|=16):e.push(r)}function Dr(n,e){switch(n.tag){case 5:var r=n.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,e2=n,n2=l3(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,e2=n,n2=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=L3!==null?{id:D2,overflow:O2}:null,n.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=i2(18,null,null,0),r.stateNode=e,r.return=n,n.child=r,e2=n,n2=null,!0):!1;default:return!1}}function d6(n){return(n.mode&1)!==0&&(n.flags&128)===0}function z6(n){if(z1){var e=n2;if(e){var r=e;if(!Dr(n,e)){if(d6(n))throw Error(N(418));e=l3(r.nextSibling);var t=e2;e&&Dr(n,e)?Q8(t,r):(n.flags=n.flags&-4097|2,z1=!1,e2=n)}}else{if(d6(n))throw Error(N(418));n.flags=n.flags&-4097|2,z1=!1,e2=n}}}function Or(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;e2=n}function W5(n){if(n!==e2)return!1;if(!z1)return Or(n),z1=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!a6(n.type,n.memoizedProps)),e&&(e=n2)){if(d6(n))throw K8(),Error(N(418));for(;e;)Q8(n,e),e=l3(e.nextSibling)}if(Or(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(N(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var r=n.data;if(r==="/$"){if(e===0){n2=l3(n.nextSibling);break n}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}n=n.nextSibling}n2=null}}else n2=e2?l3(n.stateNode.nextSibling):null;return!0}function K8(){for(var n=n2;n;)n=l3(n.nextSibling)}function d0(){n2=e2=null,z1=!1}function te(n){g2===null?g2=[n]:g2.push(n)}var Nl=b2.ReactCurrentBatchConfig;function _0(n,e,r){if(n=r.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var t=r.stateNode}if(!t)throw Error(N(147,n));var c=t,l=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===l?e.ref:(e=function(o){var i=c.refs;o===null?delete i[l]:i[l]=o},e._stringRef=l,e)}if(typeof n!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,n))}return n}function Q5(n,e){throw n=Object.prototype.toString.call(e),Error(N(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ir(n){var e=n._init;return e(n._payload)}function G8(n){function e(f,m){if(n){var g=f.deletions;g===null?(f.deletions=[m],f.flags|=16):g.push(m)}}function r(f,m){if(!n)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function t(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function c(f,m){return f=s3(f,m),f.index=0,f.sibling=null,f}function l(f,m,g){return f.index=g,n?(g=f.alternate,g!==null?(g=g.index,g<m?(f.flags|=2,m):g):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function i(f,m,g,C){return m===null||m.tag!==6?(m=Tn(g,f.mode,C),m.return=f,m):(m=c(m,g),m.return=f,m)}function a(f,m,g,C){var L=g.type;return L===Q3?z(f,m,g.props.children,C,g.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Z2&&Ir(L)===m.type)?(C=c(m,g.props),C.ref=_0(f,m,g),C.return=f,C):(C=s4(g.type,g.key,g.props,null,f.mode,C),C.ref=_0(f,m,g),C.return=f,C)}function s(f,m,g,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Dn(g,f.mode,C),m.return=f,m):(m=c(m,g.children||[]),m.return=f,m)}function z(f,m,g,C,L){return m===null||m.tag!==7?(m=P3(g,f.mode,C,L),m.return=f,m):(m=c(m,g),m.return=f,m)}function d(f,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Tn(""+m,f.mode,g),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case O5:return g=s4(m.type,m.key,m.props,null,f.mode,g),g.ref=_0(f,null,m),g.return=f,g;case W3:return m=Dn(m,f.mode,g),m.return=f,m;case Z2:var C=m._init;return d(f,C(m._payload),g)}if(B0(m)||M0(m))return m=P3(m,f.mode,g,null),m.return=f,m;Q5(f,m)}return null}function p(f,m,g,C){var L=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return L!==null?null:i(f,m,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case O5:return g.key===L?a(f,m,g,C):null;case W3:return g.key===L?s(f,m,g,C):null;case Z2:return L=g._init,p(f,m,L(g._payload),C)}if(B0(g)||M0(g))return L!==null?null:z(f,m,g,C,null);Q5(f,g)}return null}function x(f,m,g,C,L){if(typeof C=="string"&&C!==""||typeof C=="number")return f=f.get(g)||null,i(m,f,""+C,L);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case O5:return f=f.get(C.key===null?g:C.key)||null,a(m,f,C,L);case W3:return f=f.get(C.key===null?g:C.key)||null,s(m,f,C,L);case Z2:var v=C._init;return x(f,m,g,v(C._payload),L)}if(B0(C)||M0(C))return f=f.get(g)||null,z(m,f,C,L,null);Q5(m,C)}return null}function S(f,m,g,C){for(var L=null,v=null,R=m,j=m=0,D=null;R!==null&&j<g.length;j++){R.index>j?(D=R,R=null):D=R.sibling;var O=p(f,R,g[j],C);if(O===null){R===null&&(R=D);break}n&&R&&O.alternate===null&&e(f,R),m=l(O,m,j),v===null?L=O:v.sibling=O,v=O,R=D}if(j===g.length)return r(f,R),z1&&y3(f,j),L;if(R===null){for(;j<g.length;j++)R=d(f,g[j],C),R!==null&&(m=l(R,m,j),v===null?L=R:v.sibling=R,v=R);return z1&&y3(f,j),L}for(R=t(f,R);j<g.length;j++)D=x(R,f,j,g[j],C),D!==null&&(n&&D.alternate!==null&&R.delete(D.key===null?j:D.key),m=l(D,m,j),v===null?L=D:v.sibling=D,v=D);return n&&R.forEach(function(q){return e(f,q)}),z1&&y3(f,j),L}function w(f,m,g,C){var L=M0(g);if(typeof L!="function")throw Error(N(150));if(g=L.call(g),g==null)throw Error(N(151));for(var v=L=null,R=m,j=m=0,D=null,O=g.next();R!==null&&!O.done;j++,O=g.next()){R.index>j?(D=R,R=null):D=R.sibling;var q=p(f,R,O.value,C);if(q===null){R===null&&(R=D);break}n&&R&&q.alternate===null&&e(f,R),m=l(q,m,j),v===null?L=q:v.sibling=q,v=q,R=D}if(O.done)return r(f,R),z1&&y3(f,j),L;if(R===null){for(;!O.done;j++,O=g.next())O=d(f,O.value,C),O!==null&&(m=l(O,m,j),v===null?L=O:v.sibling=O,v=O);return z1&&y3(f,j),L}for(R=t(f,R);!O.done;j++,O=g.next())O=x(R,f,j,O.value,C),O!==null&&(n&&O.alternate!==null&&R.delete(O.key===null?j:O.key),m=l(O,m,j),v===null?L=O:v.sibling=O,v=O);return n&&R.forEach(function(H){return e(f,H)}),z1&&y3(f,j),L}function P(f,m,g,C){if(typeof g=="object"&&g!==null&&g.type===Q3&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case O5:n:{for(var L=g.key,v=m;v!==null;){if(v.key===L){if(L=g.type,L===Q3){if(v.tag===7){r(f,v.sibling),m=c(v,g.props.children),m.return=f,f=m;break n}}else if(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Z2&&Ir(L)===v.type){r(f,v.sibling),m=c(v,g.props),m.ref=_0(f,v,g),m.return=f,f=m;break n}r(f,v);break}else e(f,v);v=v.sibling}g.type===Q3?(m=P3(g.props.children,f.mode,C,g.key),m.return=f,f=m):(C=s4(g.type,g.key,g.props,null,f.mode,C),C.ref=_0(f,m,g),C.return=f,f=C)}return o(f);case W3:n:{for(v=g.key;m!==null;){if(m.key===v)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){r(f,m.sibling),m=c(m,g.children||[]),m.return=f,f=m;break n}else{r(f,m);break}else e(f,m);m=m.sibling}m=Dn(g,f.mode,C),m.return=f,f=m}return o(f);case Z2:return v=g._init,P(f,m,v(g._payload),C)}if(B0(g))return S(f,m,g,C);if(M0(g))return w(f,m,g,C);Q5(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(r(f,m.sibling),m=c(m,g),m.return=f,f=m):(r(f,m),m=Tn(g,f.mode,C),m.return=f,f=m),o(f)):r(f,m)}return P}var z0=G8(!0),Z8=G8(!1),C4=z3(null),E4=null,n0=null,ce=null;function le(){ce=n0=E4=null}function oe(n){var e=C4.current;u1(C4),n._currentValue=e}function f6(n,e,r){for(;n!==null;){var t=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,t!==null&&(t.childLanes|=e)):t!==null&&(t.childLanes&e)!==e&&(t.childLanes|=e),n===r)break;n=n.return}}function i0(n,e){E4=n,ce=n0=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(K1=!0),n.firstContext=null)}function s2(n){var e=n._currentValue;if(ce!==n)if(n={context:n,memoizedValue:e,next:null},n0===null){if(E4===null)throw Error(N(308));n0=n,E4.dependencies={lanes:0,firstContext:n}}else n0=n0.next=n;return e}var C3=null;function ie(n){C3===null?C3=[n]:C3.push(n)}function Y8(n,e,r,t){var c=e.interleaved;return c===null?(r.next=r,ie(e)):(r.next=c.next,c.next=r),e.interleaved=r,V2(n,t)}function V2(n,e){n.lanes|=e;var r=n.alternate;for(r!==null&&(r.lanes|=e),r=n,n=n.return;n!==null;)n.childLanes|=e,r=n.alternate,r!==null&&(r.childLanes|=e),r=n,n=n.return;return r.tag===3?r.stateNode:null}var Y2=!1;function ae(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X8(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function I2(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function o3(n,e,r){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,J&2){var c=t.pending;return c===null?e.next=e:(e.next=c.next,c.next=e),t.pending=e,V2(n,r)}return c=t.interleaved,c===null?(e.next=e,ie(t)):(e.next=c.next,c.next=e),t.interleaved=e,V2(n,r)}function t4(n,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var t=e.lanes;t&=n.pendingLanes,r|=t,e.lanes=r,K6(n,r)}}function Fr(n,e){var r=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,r===t)){var c=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?c=l=o:l=l.next=o,r=r.next}while(r!==null);l===null?c=l=e:l=l.next=e}else c=l=e;r={baseState:t.baseState,firstBaseUpdate:c,lastBaseUpdate:l,shared:t.shared,effects:t.effects},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=e:n.next=e,r.lastBaseUpdate=e}function j4(n,e,r,t){var c=n.updateQueue;Y2=!1;var l=c.firstBaseUpdate,o=c.lastBaseUpdate,i=c.shared.pending;if(i!==null){c.shared.pending=null;var a=i,s=a.next;a.next=null,o===null?l=s:o.next=s,o=a;var z=n.alternate;z!==null&&(z=z.updateQueue,i=z.lastBaseUpdate,i!==o&&(i===null?z.firstBaseUpdate=s:i.next=s,z.lastBaseUpdate=a))}if(l!==null){var d=c.baseState;o=0,z=s=a=null,i=l;do{var p=i.lane,x=i.eventTime;if((t&p)===p){z!==null&&(z=z.next={eventTime:x,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});n:{var S=n,w=i;switch(p=e,x=r,w.tag){case 1:if(S=w.payload,typeof S=="function"){d=S.call(x,d,p);break n}d=S;break n;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,p=typeof S=="function"?S.call(x,d,p):S,p==null)break n;d=g1({},d,p);break n;case 2:Y2=!0}}i.callback!==null&&i.lane!==0&&(n.flags|=64,p=c.effects,p===null?c.effects=[i]:p.push(i))}else x={eventTime:x,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},z===null?(s=z=x,a=d):z=z.next=x,o|=p;if(i=i.next,i===null){if(i=c.shared.pending,i===null)break;p=i,i=p.next,p.next=null,c.lastBaseUpdate=p,c.shared.pending=null}}while(!0);if(z===null&&(a=d),c.baseState=a,c.firstBaseUpdate=s,c.lastBaseUpdate=z,e=c.shared.interleaved,e!==null){c=e;do o|=c.lane,c=c.next;while(c!==e)}else l===null&&(c.shared.lanes=0);_3|=o,n.lanes=o,n.memoizedState=d}}function Ur(n,e,r){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var t=n[e],c=t.callback;if(c!==null){if(t.callback=null,t=r,typeof c!="function")throw Error(N(191,c));c.call(t)}}}var C5={},M2=z3(C5),m5=z3(C5),d5=z3(C5);function E3(n){if(n===C5)throw Error(N(174));return n}function se(n,e){switch(l1(d5,e),l1(m5,n),l1(M2,C5),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gn(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Gn(e,n)}u1(M2),l1(M2,e)}function f0(){u1(M2),u1(m5),u1(d5)}function J8(n){E3(d5.current);var e=E3(M2.current),r=Gn(e,n.type);e!==r&&(l1(m5,n),l1(M2,r))}function ue(n){m5.current===n&&(u1(M2),u1(m5))}var p1=z3(0);function M4(n){for(var e=n;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mn=[];function me(){for(var n=0;n<Mn.length;n++)Mn[n]._workInProgressVersionPrimary=null;Mn.length=0}var c4=b2.ReactCurrentDispatcher,Pn=b2.ReactCurrentBatchConfig,R3=0,h1=null,E1=null,M1=null,P4=!1,Y0=!1,z5=0,Ll=0;function O1(){throw Error(N(321))}function de(n,e){if(e===null)return!1;for(var r=0;r<e.length&&r<n.length;r++)if(!x2(n[r],e[r]))return!1;return!0}function ze(n,e,r,t,c,l){if(R3=l,h1=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,c4.current=n===null||n.memoizedState===null?Dl:Ol,n=r(t,c),Y0){l=0;do{if(Y0=!1,z5=0,25<=l)throw Error(N(301));l+=1,M1=E1=null,e.updateQueue=null,c4.current=Il,n=r(t,c)}while(Y0)}if(c4.current=N4,e=E1!==null&&E1.next!==null,R3=0,M1=E1=h1=null,P4=!1,e)throw Error(N(300));return n}function fe(){var n=z5!==0;return z5=0,n}function C2(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return M1===null?h1.memoizedState=M1=n:M1=M1.next=n,M1}function u2(){if(E1===null){var n=h1.alternate;n=n!==null?n.memoizedState:null}else n=E1.next;var e=M1===null?h1.memoizedState:M1.next;if(e!==null)M1=e,E1=n;else{if(n===null)throw Error(N(310));E1=n,n={memoizedState:E1.memoizedState,baseState:E1.baseState,baseQueue:E1.baseQueue,queue:E1.queue,next:null},M1===null?h1.memoizedState=M1=n:M1=M1.next=n}return M1}function f5(n,e){return typeof e=="function"?e(n):e}function Nn(n){var e=u2(),r=e.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=n;var t=E1,c=t.baseQueue,l=r.pending;if(l!==null){if(c!==null){var o=c.next;c.next=l.next,l.next=o}t.baseQueue=c=l,r.pending=null}if(c!==null){l=c.next,t=t.baseState;var i=o=null,a=null,s=l;do{var z=s.lane;if((R3&z)===z)a!==null&&(a=a.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),t=s.hasEagerState?s.eagerState:n(t,s.action);else{var d={lane:z,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};a===null?(i=a=d,o=t):a=a.next=d,h1.lanes|=z,_3|=z}s=s.next}while(s!==null&&s!==l);a===null?o=t:a.next=i,x2(t,e.memoizedState)||(K1=!0),e.memoizedState=t,e.baseState=o,e.baseQueue=a,r.lastRenderedState=t}if(n=r.interleaved,n!==null){c=n;do l=c.lane,h1.lanes|=l,_3|=l,c=c.next;while(c!==n)}else c===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Ln(n){var e=u2(),r=e.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=n;var t=r.dispatch,c=r.pending,l=e.memoizedState;if(c!==null){r.pending=null;var o=c=c.next;do l=n(l,o.action),o=o.next;while(o!==c);x2(l,e.memoizedState)||(K1=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),r.lastRenderedState=l}return[l,t]}function q8(){}function n9(n,e){var r=h1,t=u2(),c=e(),l=!x2(t.memoizedState,c);if(l&&(t.memoizedState=c,K1=!0),t=t.queue,pe(t9.bind(null,r,t,n),[n]),t.getSnapshot!==e||l||M1!==null&&M1.memoizedState.tag&1){if(r.flags|=2048,p5(9,r9.bind(null,r,t,c,e),void 0,null),P1===null)throw Error(N(349));R3&30||e9(r,e,c)}return c}function e9(n,e,r){n.flags|=16384,n={getSnapshot:e,value:r},e=h1.updateQueue,e===null?(e={lastEffect:null,stores:null},h1.updateQueue=e,e.stores=[n]):(r=e.stores,r===null?e.stores=[n]:r.push(n))}function r9(n,e,r,t){e.value=r,e.getSnapshot=t,c9(e)&&l9(n)}function t9(n,e,r){return r(function(){c9(e)&&l9(n)})}function c9(n){var e=n.getSnapshot;n=n.value;try{var r=e();return!x2(n,r)}catch{return!0}}function l9(n){var e=V2(n,1);e!==null&&y2(e,n,1,-1)}function Ar(n){var e=C2();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:f5,lastRenderedState:n},e.queue=n,n=n.dispatch=Tl.bind(null,h1,n),[e.memoizedState,n]}function p5(n,e,r,t){return n={tag:n,create:e,destroy:r,deps:t,next:null},e=h1.updateQueue,e===null?(e={lastEffect:null,stores:null},h1.updateQueue=e,e.lastEffect=n.next=n):(r=e.lastEffect,r===null?e.lastEffect=n.next=n:(t=r.next,r.next=n,n.next=t,e.lastEffect=n)),n}function o9(){return u2().memoizedState}function l4(n,e,r,t){var c=C2();h1.flags|=n,c.memoizedState=p5(1|e,r,void 0,t===void 0?null:t)}function Q4(n,e,r,t){var c=u2();t=t===void 0?null:t;var l=void 0;if(E1!==null){var o=E1.memoizedState;if(l=o.destroy,t!==null&&de(t,o.deps)){c.memoizedState=p5(e,r,l,t);return}}h1.flags|=n,c.memoizedState=p5(1|e,r,l,t)}function Vr(n,e){return l4(8390656,8,n,e)}function pe(n,e){return Q4(2048,8,n,e)}function i9(n,e){return Q4(4,2,n,e)}function a9(n,e){return Q4(4,4,n,e)}function s9(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function u9(n,e,r){return r=r!=null?r.concat([n]):null,Q4(4,4,s9.bind(null,e,n),r)}function he(){}function m9(n,e){var r=u2();e=e===void 0?null:e;var t=r.memoizedState;return t!==null&&e!==null&&de(e,t[1])?t[0]:(r.memoizedState=[n,e],n)}function d9(n,e){var r=u2();e=e===void 0?null:e;var t=r.memoizedState;return t!==null&&e!==null&&de(e,t[1])?t[0]:(n=n(),r.memoizedState=[n,e],n)}function z9(n,e,r){return R3&21?(x2(r,e)||(r=v8(),h1.lanes|=r,_3|=r,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,K1=!0),n.memoizedState=r)}function Rl(n,e){var r=r1;r1=r!==0&&4>r?r:4,n(!0);var t=Pn.transition;Pn.transition={};try{n(!1),e()}finally{r1=r,Pn.transition=t}}function f9(){return u2().memoizedState}function _l(n,e,r){var t=a3(n);if(r={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null},p9(n))h9(e,r);else if(r=Y8(n,e,r,t),r!==null){var c=b1();y2(r,n,t,c),g9(r,e,t)}}function Tl(n,e,r){var t=a3(n),c={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null};if(p9(n))h9(e,c);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var o=e.lastRenderedState,i=l(o,r);if(c.hasEagerState=!0,c.eagerState=i,x2(i,o)){var a=e.interleaved;a===null?(c.next=c,ie(e)):(c.next=a.next,a.next=c),e.interleaved=c;return}}catch{}finally{}r=Y8(n,e,c,t),r!==null&&(c=b1(),y2(r,n,t,c),g9(r,e,t))}}function p9(n){var e=n.alternate;return n===h1||e!==null&&e===h1}function h9(n,e){Y0=P4=!0;var r=n.pending;r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e}function g9(n,e,r){if(r&4194240){var t=e.lanes;t&=n.pendingLanes,r|=t,e.lanes=r,K6(n,r)}}var N4={readContext:s2,useCallback:O1,useContext:O1,useEffect:O1,useImperativeHandle:O1,useInsertionEffect:O1,useLayoutEffect:O1,useMemo:O1,useReducer:O1,useRef:O1,useState:O1,useDebugValue:O1,useDeferredValue:O1,useTransition:O1,useMutableSource:O1,useSyncExternalStore:O1,useId:O1,unstable_isNewReconciler:!1},Dl={readContext:s2,useCallback:function(n,e){return C2().memoizedState=[n,e===void 0?null:e],n},useContext:s2,useEffect:Vr,useImperativeHandle:function(n,e,r){return r=r!=null?r.concat([n]):null,l4(4194308,4,s9.bind(null,e,n),r)},useLayoutEffect:function(n,e){return l4(4194308,4,n,e)},useInsertionEffect:function(n,e){return l4(4,2,n,e)},useMemo:function(n,e){var r=C2();return e=e===void 0?null:e,n=n(),r.memoizedState=[n,e],n},useReducer:function(n,e,r){var t=C2();return e=r!==void 0?r(e):e,t.memoizedState=t.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},t.queue=n,n=n.dispatch=_l.bind(null,h1,n),[t.memoizedState,n]},useRef:function(n){var e=C2();return n={current:n},e.memoizedState=n},useState:Ar,useDebugValue:he,useDeferredValue:function(n){return C2().memoizedState=n},useTransition:function(){var n=Ar(!1),e=n[0];return n=Rl.bind(null,n[1]),C2().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,r){var t=h1,c=C2();if(z1){if(r===void 0)throw Error(N(407));r=r()}else{if(r=e(),P1===null)throw Error(N(349));R3&30||e9(t,e,r)}c.memoizedState=r;var l={value:r,getSnapshot:e};return c.queue=l,Vr(t9.bind(null,t,l,n),[n]),t.flags|=2048,p5(9,r9.bind(null,t,l,r,e),void 0,null),r},useId:function(){var n=C2(),e=P1.identifierPrefix;if(z1){var r=O2,t=D2;r=(t&~(1<<32-v2(t)-1)).toString(32)+r,e=":"+e+"R"+r,r=z5++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=Ll++,e=":"+e+"r"+r.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Ol={readContext:s2,useCallback:m9,useContext:s2,useEffect:pe,useImperativeHandle:u9,useInsertionEffect:i9,useLayoutEffect:a9,useMemo:d9,useReducer:Nn,useRef:o9,useState:function(){return Nn(f5)},useDebugValue:he,useDeferredValue:function(n){var e=u2();return z9(e,E1.memoizedState,n)},useTransition:function(){var n=Nn(f5)[0],e=u2().memoizedState;return[n,e]},useMutableSource:q8,useSyncExternalStore:n9,useId:f9,unstable_isNewReconciler:!1},Il={readContext:s2,useCallback:m9,useContext:s2,useEffect:pe,useImperativeHandle:u9,useInsertionEffect:i9,useLayoutEffect:a9,useMemo:d9,useReducer:Ln,useRef:o9,useState:function(){return Ln(f5)},useDebugValue:he,useDeferredValue:function(n){var e=u2();return E1===null?e.memoizedState=n:z9(e,E1.memoizedState,n)},useTransition:function(){var n=Ln(f5)[0],e=u2().memoizedState;return[n,e]},useMutableSource:q8,useSyncExternalStore:n9,useId:f9,unstable_isNewReconciler:!1};function f2(n,e){if(n&&n.defaultProps){e=g1({},e),n=n.defaultProps;for(var r in n)e[r]===void 0&&(e[r]=n[r]);return e}return e}function p6(n,e,r,t){e=n.memoizedState,r=r(t,e),r=r==null?e:g1({},e,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var K4={isMounted:function(n){return(n=n._reactInternals)?I3(n)===n:!1},enqueueSetState:function(n,e,r){n=n._reactInternals;var t=b1(),c=a3(n),l=I2(t,c);l.payload=e,r!=null&&(l.callback=r),e=o3(n,l,c),e!==null&&(y2(e,n,c,t),t4(e,n,c))},enqueueReplaceState:function(n,e,r){n=n._reactInternals;var t=b1(),c=a3(n),l=I2(t,c);l.tag=1,l.payload=e,r!=null&&(l.callback=r),e=o3(n,l,c),e!==null&&(y2(e,n,c,t),t4(e,n,c))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var r=b1(),t=a3(n),c=I2(r,t);c.tag=2,e!=null&&(c.callback=e),e=o3(n,c,t),e!==null&&(y2(e,n,t,r),t4(e,n,t))}};function Br(n,e,r,t,c,l,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,l,o):e.prototype&&e.prototype.isPureReactComponent?!i5(r,t)||!i5(c,l):!0}function v9(n,e,r){var t=!1,c=m3,l=e.contextType;return typeof l=="object"&&l!==null?l=s2(l):(c=Z1(e)?N3:U1.current,t=e.contextTypes,l=(t=t!=null)?m0(n,c):m3),e=new e(r,l),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=K4,n.stateNode=e,e._reactInternals=n,t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=c,n.__reactInternalMemoizedMaskedChildContext=l),e}function br(n,e,r,t){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,t),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,t),e.state!==n&&K4.enqueueReplaceState(e,e.state,null)}function h6(n,e,r,t){var c=n.stateNode;c.props=r,c.state=n.memoizedState,c.refs={},ae(n);var l=e.contextType;typeof l=="object"&&l!==null?c.context=s2(l):(l=Z1(e)?N3:U1.current,c.context=m0(n,l)),c.state=n.memoizedState,l=e.getDerivedStateFromProps,typeof l=="function"&&(p6(n,e,l,r),c.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(e=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),e!==c.state&&K4.enqueueReplaceState(c,c.state,null),j4(n,r,c,t),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308)}function p0(n,e){try{var r="",t=e;do r+=uc(t),t=t.return;while(t);var c=r}catch(l){c=`
Error generating stack: `+l.message+`
`+l.stack}return{value:n,source:e,stack:c,digest:null}}function Rn(n,e,r){return{value:n,source:null,stack:r??null,digest:e??null}}function g6(n,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var Fl=typeof WeakMap=="function"?WeakMap:Map;function y9(n,e,r){r=I2(-1,r),r.tag=3,r.payload={element:null};var t=e.value;return r.callback=function(){R4||(R4=!0,M6=t),g6(n,e)},r}function x9(n,e,r){r=I2(-1,r),r.tag=3;var t=n.type.getDerivedStateFromError;if(typeof t=="function"){var c=e.value;r.payload=function(){return t(c)},r.callback=function(){g6(n,e)}}var l=n.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){g6(n,e),typeof t!="function"&&(i3===null?i3=new Set([this]):i3.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function Hr(n,e,r){var t=n.pingCache;if(t===null){t=n.pingCache=new Fl;var c=new Set;t.set(e,c)}else c=t.get(e),c===void 0&&(c=new Set,t.set(e,c));c.has(r)||(c.add(r),n=Xl.bind(null,n,e,r),e.then(n,n))}function $r(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Wr(n,e,r,t,c){return n.mode&1?(n.flags|=65536,n.lanes=c,n):(n===e?n.flags|=65536:(n.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=I2(-1,1),e.tag=2,o3(r,e,1))),r.lanes|=1),n)}var Ul=b2.ReactCurrentOwner,K1=!1;function B1(n,e,r,t){e.child=n===null?Z8(e,null,r,t):z0(e,n.child,r,t)}function Qr(n,e,r,t,c){r=r.render;var l=e.ref;return i0(e,c),t=ze(n,e,r,t,l,c),r=fe(),n!==null&&!K1?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~c,B2(n,e,c)):(z1&&r&&ee(e),e.flags|=1,B1(n,e,t,c),e.child)}function Kr(n,e,r,t,c){if(n===null){var l=r.type;return typeof l=="function"&&!Ce(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=l,w9(n,e,l,t,c)):(n=s4(r.type,null,t,e,e.mode,c),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!(n.lanes&c)){var o=l.memoizedProps;if(r=r.compare,r=r!==null?r:i5,r(o,t)&&n.ref===e.ref)return B2(n,e,c)}return e.flags|=1,n=s3(l,t),n.ref=e.ref,n.return=e,e.child=n}function w9(n,e,r,t,c){if(n!==null){var l=n.memoizedProps;if(i5(l,t)&&n.ref===e.ref)if(K1=!1,e.pendingProps=t=l,(n.lanes&c)!==0)n.flags&131072&&(K1=!0);else return e.lanes=n.lanes,B2(n,e,c)}return v6(n,e,r,t,c)}function S9(n,e,r){var t=e.pendingProps,c=t.children,l=n!==null?n.memoizedState:null;if(t.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},l1(r0,J1),J1|=r;else{if(!(r&1073741824))return n=l!==null?l.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,l1(r0,J1),J1|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=l!==null?l.baseLanes:r,l1(r0,J1),J1|=t}else l!==null?(t=l.baseLanes|r,e.memoizedState=null):t=r,l1(r0,J1),J1|=t;return B1(n,e,c,r),e.child}function k9(n,e){var r=e.ref;(n===null&&r!==null||n!==null&&n.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function v6(n,e,r,t,c){var l=Z1(r)?N3:U1.current;return l=m0(e,l),i0(e,c),r=ze(n,e,r,t,l,c),t=fe(),n!==null&&!K1?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~c,B2(n,e,c)):(z1&&t&&ee(e),e.flags|=1,B1(n,e,r,c),e.child)}function Gr(n,e,r,t,c){if(Z1(r)){var l=!0;w4(e)}else l=!1;if(i0(e,c),e.stateNode===null)o4(n,e),v9(e,r,t),h6(e,r,t,c),t=!0;else if(n===null){var o=e.stateNode,i=e.memoizedProps;o.props=i;var a=o.context,s=r.contextType;typeof s=="object"&&s!==null?s=s2(s):(s=Z1(r)?N3:U1.current,s=m0(e,s));var z=r.getDerivedStateFromProps,d=typeof z=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==t||a!==s)&&br(e,o,t,s),Y2=!1;var p=e.memoizedState;o.state=p,j4(e,t,o,c),a=e.memoizedState,i!==t||p!==a||G1.current||Y2?(typeof z=="function"&&(p6(e,r,z,t),a=e.memoizedState),(i=Y2||Br(e,r,i,t,p,a,s))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=t,e.memoizedState=a),o.props=t,o.state=a,o.context=s,t=i):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),t=!1)}else{o=e.stateNode,X8(n,e),i=e.memoizedProps,s=e.type===e.elementType?i:f2(e.type,i),o.props=s,d=e.pendingProps,p=o.context,a=r.contextType,typeof a=="object"&&a!==null?a=s2(a):(a=Z1(r)?N3:U1.current,a=m0(e,a));var x=r.getDerivedStateFromProps;(z=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==d||p!==a)&&br(e,o,t,a),Y2=!1,p=e.memoizedState,o.state=p,j4(e,t,o,c);var S=e.memoizedState;i!==d||p!==S||G1.current||Y2?(typeof x=="function"&&(p6(e,r,x,t),S=e.memoizedState),(s=Y2||Br(e,r,s,t,p,S,a)||!1)?(z||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(t,S,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(t,S,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),e.memoizedProps=t,e.memoizedState=S),o.props=t,o.state=S,o.context=a,t=s):(typeof o.componentDidUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&p===n.memoizedState||(e.flags|=1024),t=!1)}return y6(n,e,r,t,l,c)}function y6(n,e,r,t,c,l){k9(n,e);var o=(e.flags&128)!==0;if(!t&&!o)return c&&Tr(e,r,!1),B2(n,e,l);t=e.stateNode,Ul.current=e;var i=o&&typeof r.getDerivedStateFromError!="function"?null:t.render();return e.flags|=1,n!==null&&o?(e.child=z0(e,n.child,null,l),e.child=z0(e,null,i,l)):B1(n,e,i,l),e.memoizedState=t.state,c&&Tr(e,r,!0),e.child}function C9(n){var e=n.stateNode;e.pendingContext?_r(n,e.pendingContext,e.pendingContext!==e.context):e.context&&_r(n,e.context,!1),se(n,e.containerInfo)}function Zr(n,e,r,t,c){return d0(),te(c),e.flags|=256,B1(n,e,r,t),e.child}var x6={dehydrated:null,treeContext:null,retryLane:0};function w6(n){return{baseLanes:n,cachePool:null,transitions:null}}function E9(n,e,r){var t=e.pendingProps,c=p1.current,l=!1,o=(e.flags&128)!==0,i;if((i=o)||(i=n!==null&&n.memoizedState===null?!1:(c&2)!==0),i?(l=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(c|=1),l1(p1,c&1),n===null)return z6(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=t.children,n=t.fallback,l?(t=e.mode,l=e.child,o={mode:"hidden",children:o},!(t&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Y4(o,t,0,null),n=P3(n,t,r,null),l.return=e,n.return=e,l.sibling=n,e.child=l,e.child.memoizedState=w6(r),e.memoizedState=x6,n):ge(e,o));if(c=n.memoizedState,c!==null&&(i=c.dehydrated,i!==null))return Al(n,e,o,t,i,c,r);if(l){l=t.fallback,o=e.mode,c=n.child,i=c.sibling;var a={mode:"hidden",children:t.children};return!(o&1)&&e.child!==c?(t=e.child,t.childLanes=0,t.pendingProps=a,e.deletions=null):(t=s3(c,a),t.subtreeFlags=c.subtreeFlags&14680064),i!==null?l=s3(i,l):(l=P3(l,o,r,null),l.flags|=2),l.return=e,t.return=e,t.sibling=l,e.child=t,t=l,l=e.child,o=n.child.memoizedState,o=o===null?w6(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=n.childLanes&~r,e.memoizedState=x6,t}return l=n.child,n=l.sibling,t=s3(l,{mode:"visible",children:t.children}),!(e.mode&1)&&(t.lanes=r),t.return=e,t.sibling=null,n!==null&&(r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)),e.child=t,e.memoizedState=null,t}function ge(n,e){return e=Y4({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function K5(n,e,r,t){return t!==null&&te(t),z0(e,n.child,null,r),n=ge(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Al(n,e,r,t,c,l,o){if(r)return e.flags&256?(e.flags&=-257,t=Rn(Error(N(422))),K5(n,e,o,t)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(l=t.fallback,c=e.mode,t=Y4({mode:"visible",children:t.children},c,0,null),l=P3(l,c,o,null),l.flags|=2,t.return=e,l.return=e,t.sibling=l,e.child=t,e.mode&1&&z0(e,n.child,null,o),e.child.memoizedState=w6(o),e.memoizedState=x6,l);if(!(e.mode&1))return K5(n,e,o,null);if(c.data==="$!"){if(t=c.nextSibling&&c.nextSibling.dataset,t)var i=t.dgst;return t=i,l=Error(N(419)),t=Rn(l,t,void 0),K5(n,e,o,t)}if(i=(o&n.childLanes)!==0,K1||i){if(t=P1,t!==null){switch(o&-o){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(t.suspendedLanes|o)?0:c,c!==0&&c!==l.retryLane&&(l.retryLane=c,V2(n,c),y2(t,n,c,-1))}return ke(),t=Rn(Error(N(421))),K5(n,e,o,t)}return c.data==="$?"?(e.flags|=128,e.child=n.child,e=Jl.bind(null,n),c._reactRetry=e,null):(n=l.treeContext,n2=l3(c.nextSibling),e2=e,z1=!0,g2=null,n!==null&&(l2[o2++]=D2,l2[o2++]=O2,l2[o2++]=L3,D2=n.id,O2=n.overflow,L3=e),e=ge(e,t.children),e.flags|=4096,e)}function Yr(n,e,r){n.lanes|=e;var t=n.alternate;t!==null&&(t.lanes|=e),f6(n.return,e,r)}function _n(n,e,r,t,c){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:t,tail:r,tailMode:c}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=t,l.tail=r,l.tailMode=c)}function j9(n,e,r){var t=e.pendingProps,c=t.revealOrder,l=t.tail;if(B1(n,e,t.children,r),t=p1.current,t&2)t=t&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yr(n,r,e);else if(n.tag===19)Yr(n,r,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}t&=1}if(l1(p1,t),!(e.mode&1))e.memoizedState=null;else switch(c){case"forwards":for(r=e.child,c=null;r!==null;)n=r.alternate,n!==null&&M4(n)===null&&(c=r),r=r.sibling;r=c,r===null?(c=e.child,e.child=null):(c=r.sibling,r.sibling=null),_n(e,!1,c,r,l);break;case"backwards":for(r=null,c=e.child,e.child=null;c!==null;){if(n=c.alternate,n!==null&&M4(n)===null){e.child=c;break}n=c.sibling,c.sibling=r,r=c,c=n}_n(e,!0,r,null,l);break;case"together":_n(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function o4(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function B2(n,e,r){if(n!==null&&(e.dependencies=n.dependencies),_3|=e.lanes,!(r&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(N(153));if(e.child!==null){for(n=e.child,r=s3(n,n.pendingProps),e.child=r,r.return=e;n.sibling!==null;)n=n.sibling,r=r.sibling=s3(n,n.pendingProps),r.return=e;r.sibling=null}return e.child}function Vl(n,e,r){switch(e.tag){case 3:C9(e),d0();break;case 5:J8(e);break;case 1:Z1(e.type)&&w4(e);break;case 4:se(e,e.stateNode.containerInfo);break;case 10:var t=e.type._context,c=e.memoizedProps.value;l1(C4,t._currentValue),t._currentValue=c;break;case 13:if(t=e.memoizedState,t!==null)return t.dehydrated!==null?(l1(p1,p1.current&1),e.flags|=128,null):r&e.child.childLanes?E9(n,e,r):(l1(p1,p1.current&1),n=B2(n,e,r),n!==null?n.sibling:null);l1(p1,p1.current&1);break;case 19:if(t=(r&e.childLanes)!==0,n.flags&128){if(t)return j9(n,e,r);e.flags|=128}if(c=e.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),l1(p1,p1.current),t)break;return null;case 22:case 23:return e.lanes=0,S9(n,e,r)}return B2(n,e,r)}var M9,S6,P9,N9;M9=function(n,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)n.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};S6=function(){};P9=function(n,e,r,t){var c=n.memoizedProps;if(c!==t){n=e.stateNode,E3(M2.current);var l=null;switch(r){case"input":c=$n(n,c),t=$n(n,t),l=[];break;case"select":c=g1({},c,{value:void 0}),t=g1({},t,{value:void 0}),l=[];break;case"textarea":c=Kn(n,c),t=Kn(n,t),l=[];break;default:typeof c.onClick!="function"&&typeof t.onClick=="function"&&(n.onclick=y4)}Zn(r,t);var o;r=null;for(s in c)if(!t.hasOwnProperty(s)&&c.hasOwnProperty(s)&&c[s]!=null)if(s==="style"){var i=c[s];for(o in i)i.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(n5.hasOwnProperty(s)?l||(l=[]):(l=l||[]).push(s,null));for(s in t){var a=t[s];if(i=c!=null?c[s]:void 0,t.hasOwnProperty(s)&&a!==i&&(a!=null||i!=null))if(s==="style")if(i){for(o in i)!i.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in a)a.hasOwnProperty(o)&&i[o]!==a[o]&&(r||(r={}),r[o]=a[o])}else r||(l||(l=[]),l.push(s,r)),r=a;else s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,i=i?i.__html:void 0,a!=null&&i!==a&&(l=l||[]).push(s,a)):s==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(s,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(n5.hasOwnProperty(s)?(a!=null&&s==="onScroll"&&s1("scroll",n),l||i===a||(l=[])):(l=l||[]).push(s,a))}r&&(l=l||[]).push("style",r);var s=l;(e.updateQueue=s)&&(e.flags|=4)}};N9=function(n,e,r,t){r!==t&&(e.flags|=4)};function T0(n,e){if(!z1)switch(n.tailMode){case"hidden":e=n.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function I1(n){var e=n.alternate!==null&&n.alternate.child===n.child,r=0,t=0;if(e)for(var c=n.child;c!==null;)r|=c.lanes|c.childLanes,t|=c.subtreeFlags&14680064,t|=c.flags&14680064,c.return=n,c=c.sibling;else for(c=n.child;c!==null;)r|=c.lanes|c.childLanes,t|=c.subtreeFlags,t|=c.flags,c.return=n,c=c.sibling;return n.subtreeFlags|=t,n.childLanes=r,e}function Bl(n,e,r){var t=e.pendingProps;switch(re(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return I1(e),null;case 1:return Z1(e.type)&&x4(),I1(e),null;case 3:return t=e.stateNode,f0(),u1(G1),u1(U1),me(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(W5(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,g2!==null&&(L6(g2),g2=null))),S6(n,e),I1(e),null;case 5:ue(e);var c=E3(d5.current);if(r=e.type,n!==null&&e.stateNode!=null)P9(n,e,r,t,c),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!t){if(e.stateNode===null)throw Error(N(166));return I1(e),null}if(n=E3(M2.current),W5(e)){t=e.stateNode,r=e.type;var l=e.memoizedProps;switch(t[E2]=e,t[u5]=l,n=(e.mode&1)!==0,r){case"dialog":s1("cancel",t),s1("close",t);break;case"iframe":case"object":case"embed":s1("load",t);break;case"video":case"audio":for(c=0;c<H0.length;c++)s1(H0[c],t);break;case"source":s1("error",t);break;case"img":case"image":case"link":s1("error",t),s1("load",t);break;case"details":s1("toggle",t);break;case"input":lr(t,l),s1("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!l.multiple},s1("invalid",t);break;case"textarea":ir(t,l),s1("invalid",t)}Zn(r,l),c=null;for(var o in l)if(l.hasOwnProperty(o)){var i=l[o];o==="children"?typeof i=="string"?t.textContent!==i&&(l.suppressHydrationWarning!==!0&&$5(t.textContent,i,n),c=["children",i]):typeof i=="number"&&t.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&$5(t.textContent,i,n),c=["children",""+i]):n5.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&s1("scroll",t)}switch(r){case"input":I5(t),or(t,l,!0);break;case"textarea":I5(t),ar(t);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(t.onclick=y4)}t=c,e.updateQueue=t,t!==null&&(e.flags|=4)}else{o=c.nodeType===9?c:c.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=t8(r)),n==="http://www.w3.org/1999/xhtml"?r==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof t.is=="string"?n=o.createElement(r,{is:t.is}):(n=o.createElement(r),r==="select"&&(o=n,t.multiple?o.multiple=!0:t.size&&(o.size=t.size))):n=o.createElementNS(n,r),n[E2]=e,n[u5]=t,M9(n,e,!1,!1),e.stateNode=n;n:{switch(o=Yn(r,t),r){case"dialog":s1("cancel",n),s1("close",n),c=t;break;case"iframe":case"object":case"embed":s1("load",n),c=t;break;case"video":case"audio":for(c=0;c<H0.length;c++)s1(H0[c],n);c=t;break;case"source":s1("error",n),c=t;break;case"img":case"image":case"link":s1("error",n),s1("load",n),c=t;break;case"details":s1("toggle",n),c=t;break;case"input":lr(n,t),c=$n(n,t),s1("invalid",n);break;case"option":c=t;break;case"select":n._wrapperState={wasMultiple:!!t.multiple},c=g1({},t,{value:void 0}),s1("invalid",n);break;case"textarea":ir(n,t),c=Kn(n,t),s1("invalid",n);break;default:c=t}Zn(r,c),i=c;for(l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="style"?o8(n,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&c8(n,a)):l==="children"?typeof a=="string"?(r!=="textarea"||a!=="")&&e5(n,a):typeof a=="number"&&e5(n,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(n5.hasOwnProperty(l)?a!=null&&l==="onScroll"&&s1("scroll",n):a!=null&&B6(n,l,a,o))}switch(r){case"input":I5(n),or(n,t,!1);break;case"textarea":I5(n),ar(n);break;case"option":t.value!=null&&n.setAttribute("value",""+u3(t.value));break;case"select":n.multiple=!!t.multiple,l=t.value,l!=null?t0(n,!!t.multiple,l,!1):t.defaultValue!=null&&t0(n,!!t.multiple,t.defaultValue,!0);break;default:typeof c.onClick=="function"&&(n.onclick=y4)}switch(r){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break n;case"img":t=!0;break n;default:t=!1}}t&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return I1(e),null;case 6:if(n&&e.stateNode!=null)N9(n,e,n.memoizedProps,t);else{if(typeof t!="string"&&e.stateNode===null)throw Error(N(166));if(r=E3(d5.current),E3(M2.current),W5(e)){if(t=e.stateNode,r=e.memoizedProps,t[E2]=e,(l=t.nodeValue!==r)&&(n=e2,n!==null))switch(n.tag){case 3:$5(t.nodeValue,r,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&$5(t.nodeValue,r,(n.mode&1)!==0)}l&&(e.flags|=4)}else t=(r.nodeType===9?r:r.ownerDocument).createTextNode(t),t[E2]=e,e.stateNode=t}return I1(e),null;case 13:if(u1(p1),t=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(z1&&n2!==null&&e.mode&1&&!(e.flags&128))K8(),d0(),e.flags|=98560,l=!1;else if(l=W5(e),t!==null&&t.dehydrated!==null){if(n===null){if(!l)throw Error(N(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(N(317));l[E2]=e}else d0(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;I1(e),l=!1}else g2!==null&&(L6(g2),g2=null),l=!0;if(!l)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(t=t!==null,t!==(n!==null&&n.memoizedState!==null)&&t&&(e.child.flags|=8192,e.mode&1&&(n===null||p1.current&1?j1===0&&(j1=3):ke())),e.updateQueue!==null&&(e.flags|=4),I1(e),null);case 4:return f0(),S6(n,e),n===null&&a5(e.stateNode.containerInfo),I1(e),null;case 10:return oe(e.type._context),I1(e),null;case 17:return Z1(e.type)&&x4(),I1(e),null;case 19:if(u1(p1),l=e.memoizedState,l===null)return I1(e),null;if(t=(e.flags&128)!==0,o=l.rendering,o===null)if(t)T0(l,!1);else{if(j1!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=M4(n),o!==null){for(e.flags|=128,T0(l,!1),t=o.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),e.subtreeFlags=0,t=r,r=e.child;r!==null;)l=r,n=t,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=n,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,n=o.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),r=r.sibling;return l1(p1,p1.current&1|2),e.child}n=n.sibling}l.tail!==null&&w1()>h0&&(e.flags|=128,t=!0,T0(l,!1),e.lanes=4194304)}else{if(!t)if(n=M4(o),n!==null){if(e.flags|=128,t=!0,r=n.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),T0(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!z1)return I1(e),null}else 2*w1()-l.renderingStartTime>h0&&r!==1073741824&&(e.flags|=128,t=!0,T0(l,!1),e.lanes=4194304);l.isBackwards?(o.sibling=e.child,e.child=o):(r=l.last,r!==null?r.sibling=o:e.child=o,l.last=o)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=w1(),e.sibling=null,r=p1.current,l1(p1,t?r&1|2:r&1),e):(I1(e),null);case 22:case 23:return Se(),t=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==t&&(e.flags|=8192),t&&e.mode&1?J1&1073741824&&(I1(e),e.subtreeFlags&6&&(e.flags|=8192)):I1(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function bl(n,e){switch(re(e),e.tag){case 1:return Z1(e.type)&&x4(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return f0(),u1(G1),u1(U1),me(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return ue(e),null;case 13:if(u1(p1),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(N(340));d0()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return u1(p1),null;case 4:return f0(),null;case 10:return oe(e.type._context),null;case 22:case 23:return Se(),null;case 24:return null;default:return null}}var G5=!1,F1=!1,Hl=typeof WeakSet=="function"?WeakSet:Set,T=null;function e0(n,e){var r=n.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(t){x1(n,e,t)}else r.current=null}function k6(n,e,r){try{r()}catch(t){x1(n,e,t)}}var Xr=!1;function $l(n,e){if(o6=h4,n=D8(),ne(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else n:{r=(r=n.ownerDocument)&&r.defaultView||window;var t=r.getSelection&&r.getSelection();if(t&&t.rangeCount!==0){r=t.anchorNode;var c=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break n}var o=0,i=-1,a=-1,s=0,z=0,d=n,p=null;e:for(;;){for(var x;d!==r||c!==0&&d.nodeType!==3||(i=o+c),d!==l||t!==0&&d.nodeType!==3||(a=o+t),d.nodeType===3&&(o+=d.nodeValue.length),(x=d.firstChild)!==null;)p=d,d=x;for(;;){if(d===n)break e;if(p===r&&++s===c&&(i=o),p===l&&++z===t&&(a=o),(x=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=x}r=i===-1||a===-1?null:{start:i,end:a}}else r=null}r=r||{start:0,end:0}}else r=null;for(i6={focusedElem:n,selectionRange:r},h4=!1,T=e;T!==null;)if(e=T,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,T=n;else for(;T!==null;){e=T;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,P=S.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?w:f2(e.type,w),P);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(C){x1(e,e.return,C)}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}return S=Xr,Xr=!1,S}function X0(n,e,r){var t=e.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var c=t=t.next;do{if((c.tag&n)===n){var l=c.destroy;c.destroy=void 0,l!==void 0&&k6(e,r,l)}c=c.next}while(c!==t)}}function G4(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&n)===n){var t=r.create;r.destroy=t()}r=r.next}while(r!==e)}}function C6(n){var e=n.ref;if(e!==null){var r=n.stateNode;switch(n.tag){case 5:n=r;break;default:n=r}typeof e=="function"?e(n):e.current=n}}function L9(n){var e=n.alternate;e!==null&&(n.alternate=null,L9(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[E2],delete e[u5],delete e[u6],delete e[jl],delete e[Ml])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function R9(n){return n.tag===5||n.tag===3||n.tag===4}function Jr(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||R9(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function E6(n,e,r){var t=n.tag;if(t===5||t===6)n=n.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(n,e):r.insertBefore(n,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(n,r)):(e=r,e.appendChild(n)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=y4));else if(t!==4&&(n=n.child,n!==null))for(E6(n,e,r),n=n.sibling;n!==null;)E6(n,e,r),n=n.sibling}function j6(n,e,r){var t=n.tag;if(t===5||t===6)n=n.stateNode,e?r.insertBefore(n,e):r.appendChild(n);else if(t!==4&&(n=n.child,n!==null))for(j6(n,e,r),n=n.sibling;n!==null;)j6(n,e,r),n=n.sibling}var _1=null,p2=!1;function W2(n,e,r){for(r=r.child;r!==null;)_9(n,e,r),r=r.sibling}function _9(n,e,r){if(j2&&typeof j2.onCommitFiberUnmount=="function")try{j2.onCommitFiberUnmount(V4,r)}catch{}switch(r.tag){case 5:F1||e0(r,e);case 6:var t=_1,c=p2;_1=null,W2(n,e,r),_1=t,p2=c,_1!==null&&(p2?(n=_1,r=r.stateNode,n.nodeType===8?n.parentNode.removeChild(r):n.removeChild(r)):_1.removeChild(r.stateNode));break;case 18:_1!==null&&(p2?(n=_1,r=r.stateNode,n.nodeType===8?En(n.parentNode,r):n.nodeType===1&&En(n,r),l5(n)):En(_1,r.stateNode));break;case 4:t=_1,c=p2,_1=r.stateNode.containerInfo,p2=!0,W2(n,e,r),_1=t,p2=c;break;case 0:case 11:case 14:case 15:if(!F1&&(t=r.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){c=t=t.next;do{var l=c,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&k6(r,e,o),c=c.next}while(c!==t)}W2(n,e,r);break;case 1:if(!F1&&(e0(r,e),t=r.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=r.memoizedProps,t.state=r.memoizedState,t.componentWillUnmount()}catch(i){x1(r,e,i)}W2(n,e,r);break;case 21:W2(n,e,r);break;case 22:r.mode&1?(F1=(t=F1)||r.memoizedState!==null,W2(n,e,r),F1=t):W2(n,e,r);break;default:W2(n,e,r)}}function qr(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var r=n.stateNode;r===null&&(r=n.stateNode=new Hl),e.forEach(function(t){var c=ql.bind(null,n,t);r.has(t)||(r.add(t),t.then(c,c))})}}function z2(n,e){var r=e.deletions;if(r!==null)for(var t=0;t<r.length;t++){var c=r[t];try{var l=n,o=e,i=o;n:for(;i!==null;){switch(i.tag){case 5:_1=i.stateNode,p2=!1;break n;case 3:_1=i.stateNode.containerInfo,p2=!0;break n;case 4:_1=i.stateNode.containerInfo,p2=!0;break n}i=i.return}if(_1===null)throw Error(N(160));_9(l,o,c),_1=null,p2=!1;var a=c.alternate;a!==null&&(a.return=null),c.return=null}catch(s){x1(c,e,s)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)T9(e,n),e=e.sibling}function T9(n,e){var r=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(z2(e,n),k2(n),t&4){try{X0(3,n,n.return),G4(3,n)}catch(w){x1(n,n.return,w)}try{X0(5,n,n.return)}catch(w){x1(n,n.return,w)}}break;case 1:z2(e,n),k2(n),t&512&&r!==null&&e0(r,r.return);break;case 5:if(z2(e,n),k2(n),t&512&&r!==null&&e0(r,r.return),n.flags&32){var c=n.stateNode;try{e5(c,"")}catch(w){x1(n,n.return,w)}}if(t&4&&(c=n.stateNode,c!=null)){var l=n.memoizedProps,o=r!==null?r.memoizedProps:l,i=n.type,a=n.updateQueue;if(n.updateQueue=null,a!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&e8(c,l),Yn(i,o);var s=Yn(i,l);for(o=0;o<a.length;o+=2){var z=a[o],d=a[o+1];z==="style"?o8(c,d):z==="dangerouslySetInnerHTML"?c8(c,d):z==="children"?e5(c,d):B6(c,z,d,s)}switch(i){case"input":Wn(c,l);break;case"textarea":r8(c,l);break;case"select":var p=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?t0(c,!!l.multiple,x,!1):p!==!!l.multiple&&(l.defaultValue!=null?t0(c,!!l.multiple,l.defaultValue,!0):t0(c,!!l.multiple,l.multiple?[]:"",!1))}c[u5]=l}catch(w){x1(n,n.return,w)}}break;case 6:if(z2(e,n),k2(n),t&4){if(n.stateNode===null)throw Error(N(162));c=n.stateNode,l=n.memoizedProps;try{c.nodeValue=l}catch(w){x1(n,n.return,w)}}break;case 3:if(z2(e,n),k2(n),t&4&&r!==null&&r.memoizedState.isDehydrated)try{l5(e.containerInfo)}catch(w){x1(n,n.return,w)}break;case 4:z2(e,n),k2(n);break;case 13:z2(e,n),k2(n),c=n.child,c.flags&8192&&(l=c.memoizedState!==null,c.stateNode.isHidden=l,!l||c.alternate!==null&&c.alternate.memoizedState!==null||(xe=w1())),t&4&&qr(n);break;case 22:if(z=r!==null&&r.memoizedState!==null,n.mode&1?(F1=(s=F1)||z,z2(e,n),F1=s):z2(e,n),k2(n),t&8192){if(s=n.memoizedState!==null,(n.stateNode.isHidden=s)&&!z&&n.mode&1)for(T=n,z=n.child;z!==null;){for(d=T=z;T!==null;){switch(p=T,x=p.child,p.tag){case 0:case 11:case 14:case 15:X0(4,p,p.return);break;case 1:e0(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){t=p,r=p.return;try{e=t,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(w){x1(t,r,w)}}break;case 5:e0(p,p.return);break;case 22:if(p.memoizedState!==null){e7(d);continue}}x!==null?(x.return=p,T=x):e7(d)}z=z.sibling}n:for(z=null,d=n;;){if(d.tag===5){if(z===null){z=d;try{c=d.stateNode,s?(l=c.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,i.style.display=l8("display",o))}catch(w){x1(n,n.return,w)}}}else if(d.tag===6){if(z===null)try{d.stateNode.nodeValue=s?"":d.memoizedProps}catch(w){x1(n,n.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break n;for(;d.sibling===null;){if(d.return===null||d.return===n)break n;z===d&&(z=null),d=d.return}z===d&&(z=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:z2(e,n),k2(n),t&4&&qr(n);break;case 21:break;default:z2(e,n),k2(n)}}function k2(n){var e=n.flags;if(e&2){try{n:{for(var r=n.return;r!==null;){if(R9(r)){var t=r;break n}r=r.return}throw Error(N(160))}switch(t.tag){case 5:var c=t.stateNode;t.flags&32&&(e5(c,""),t.flags&=-33);var l=Jr(n);j6(n,l,c);break;case 3:case 4:var o=t.stateNode.containerInfo,i=Jr(n);E6(n,i,o);break;default:throw Error(N(161))}}catch(a){x1(n,n.return,a)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Wl(n,e,r){T=n,D9(n)}function D9(n,e,r){for(var t=(n.mode&1)!==0;T!==null;){var c=T,l=c.child;if(c.tag===22&&t){var o=c.memoizedState!==null||G5;if(!o){var i=c.alternate,a=i!==null&&i.memoizedState!==null||F1;i=G5;var s=F1;if(G5=o,(F1=a)&&!s)for(T=c;T!==null;)o=T,a=o.child,o.tag===22&&o.memoizedState!==null?r7(c):a!==null?(a.return=o,T=a):r7(c);for(;l!==null;)T=l,D9(l),l=l.sibling;T=c,G5=i,F1=s}n7(n)}else c.subtreeFlags&8772&&l!==null?(l.return=c,T=l):n7(n)}}function n7(n){for(;T!==null;){var e=T;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:F1||G4(5,e);break;case 1:var t=e.stateNode;if(e.flags&4&&!F1)if(r===null)t.componentDidMount();else{var c=e.elementType===e.type?r.memoizedProps:f2(e.type,r.memoizedProps);t.componentDidUpdate(c,r.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var l=e.updateQueue;l!==null&&Ur(e,l,t);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Ur(e,o,r)}break;case 5:var i=e.stateNode;if(r===null&&e.flags&4){r=i;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break;case"img":a.src&&(r.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var s=e.alternate;if(s!==null){var z=s.memoizedState;if(z!==null){var d=z.dehydrated;d!==null&&l5(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}F1||e.flags&512&&C6(e)}catch(p){x1(e,e.return,p)}}if(e===n){T=null;break}if(r=e.sibling,r!==null){r.return=e.return,T=r;break}T=e.return}}function e7(n){for(;T!==null;){var e=T;if(e===n){T=null;break}var r=e.sibling;if(r!==null){r.return=e.return,T=r;break}T=e.return}}function r7(n){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{G4(4,e)}catch(a){x1(e,r,a)}break;case 1:var t=e.stateNode;if(typeof t.componentDidMount=="function"){var c=e.return;try{t.componentDidMount()}catch(a){x1(e,c,a)}}var l=e.return;try{C6(e)}catch(a){x1(e,l,a)}break;case 5:var o=e.return;try{C6(e)}catch(a){x1(e,o,a)}}}catch(a){x1(e,e.return,a)}if(e===n){T=null;break}var i=e.sibling;if(i!==null){i.return=e.return,T=i;break}T=e.return}}var Ql=Math.ceil,L4=b2.ReactCurrentDispatcher,ve=b2.ReactCurrentOwner,a2=b2.ReactCurrentBatchConfig,J=0,P1=null,C1=null,T1=0,J1=0,r0=z3(0),j1=0,h5=null,_3=0,Z4=0,ye=0,J0=null,Q1=null,xe=0,h0=1/0,_2=null,R4=!1,M6=null,i3=null,Z5=!1,n3=null,_4=0,q0=0,P6=null,i4=-1,a4=0;function b1(){return J&6?w1():i4!==-1?i4:i4=w1()}function a3(n){return n.mode&1?J&2&&T1!==0?T1&-T1:Nl.transition!==null?(a4===0&&(a4=v8()),a4):(n=r1,n!==0||(n=window.event,n=n===void 0?16:E8(n.type)),n):1}function y2(n,e,r,t){if(50<q0)throw q0=0,P6=null,Error(N(185));w5(n,r,t),(!(J&2)||n!==P1)&&(n===P1&&(!(J&2)&&(Z4|=r),j1===4&&J2(n,T1)),Y1(n,t),r===1&&J===0&&!(e.mode&1)&&(h0=w1()+500,W4&&f3()))}function Y1(n,e){var r=n.callbackNode;Nc(n,e);var t=p4(n,n===P1?T1:0);if(t===0)r!==null&&mr(r),n.callbackNode=null,n.callbackPriority=0;else if(e=t&-t,n.callbackPriority!==e){if(r!=null&&mr(r),e===1)n.tag===0?Pl(t7.bind(null,n)):$8(t7.bind(null,n)),Cl(function(){!(J&6)&&f3()}),r=null;else{switch(y8(t)){case 1:r=Q6;break;case 4:r=h8;break;case 16:r=f4;break;case 536870912:r=g8;break;default:r=f4}r=b9(r,O9.bind(null,n))}n.callbackPriority=e,n.callbackNode=r}}function O9(n,e){if(i4=-1,a4=0,J&6)throw Error(N(327));var r=n.callbackNode;if(a0()&&n.callbackNode!==r)return null;var t=p4(n,n===P1?T1:0);if(t===0)return null;if(t&30||t&n.expiredLanes||e)e=T4(n,t);else{e=t;var c=J;J|=2;var l=F9();(P1!==n||T1!==e)&&(_2=null,h0=w1()+500,M3(n,e));do try{Zl();break}catch(i){I9(n,i)}while(!0);le(),L4.current=l,J=c,C1!==null?e=0:(P1=null,T1=0,e=j1)}if(e!==0){if(e===2&&(c=e6(n),c!==0&&(t=c,e=N6(n,c))),e===1)throw r=h5,M3(n,0),J2(n,t),Y1(n,w1()),r;if(e===6)J2(n,t);else{if(c=n.current.alternate,!(t&30)&&!Kl(c)&&(e=T4(n,t),e===2&&(l=e6(n),l!==0&&(t=l,e=N6(n,l))),e===1))throw r=h5,M3(n,0),J2(n,t),Y1(n,w1()),r;switch(n.finishedWork=c,n.finishedLanes=t,e){case 0:case 1:throw Error(N(345));case 2:x3(n,Q1,_2);break;case 3:if(J2(n,t),(t&130023424)===t&&(e=xe+500-w1(),10<e)){if(p4(n,0)!==0)break;if(c=n.suspendedLanes,(c&t)!==t){b1(),n.pingedLanes|=n.suspendedLanes&c;break}n.timeoutHandle=s6(x3.bind(null,n,Q1,_2),e);break}x3(n,Q1,_2);break;case 4:if(J2(n,t),(t&4194240)===t)break;for(e=n.eventTimes,c=-1;0<t;){var o=31-v2(t);l=1<<o,o=e[o],o>c&&(c=o),t&=~l}if(t=c,t=w1()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*Ql(t/1960))-t,10<t){n.timeoutHandle=s6(x3.bind(null,n,Q1,_2),t);break}x3(n,Q1,_2);break;case 5:x3(n,Q1,_2);break;default:throw Error(N(329))}}}return Y1(n,w1()),n.callbackNode===r?O9.bind(null,n):null}function N6(n,e){var r=J0;return n.current.memoizedState.isDehydrated&&(M3(n,e).flags|=256),n=T4(n,e),n!==2&&(e=Q1,Q1=r,e!==null&&L6(e)),n}function L6(n){Q1===null?Q1=n:Q1.push.apply(Q1,n)}function Kl(n){for(var e=n;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var t=0;t<r.length;t++){var c=r[t],l=c.getSnapshot;c=c.value;try{if(!x2(l(),c))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function J2(n,e){for(e&=~ye,e&=~Z4,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var r=31-v2(e),t=1<<r;n[r]=-1,e&=~t}}function t7(n){if(J&6)throw Error(N(327));a0();var e=p4(n,0);if(!(e&1))return Y1(n,w1()),null;var r=T4(n,e);if(n.tag!==0&&r===2){var t=e6(n);t!==0&&(e=t,r=N6(n,t))}if(r===1)throw r=h5,M3(n,0),J2(n,e),Y1(n,w1()),r;if(r===6)throw Error(N(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,x3(n,Q1,_2),Y1(n,w1()),null}function we(n,e){var r=J;J|=1;try{return n(e)}finally{J=r,J===0&&(h0=w1()+500,W4&&f3())}}function T3(n){n3!==null&&n3.tag===0&&!(J&6)&&a0();var e=J;J|=1;var r=a2.transition,t=r1;try{if(a2.transition=null,r1=1,n)return n()}finally{r1=t,a2.transition=r,J=e,!(J&6)&&f3()}}function Se(){J1=r0.current,u1(r0)}function M3(n,e){n.finishedWork=null,n.finishedLanes=0;var r=n.timeoutHandle;if(r!==-1&&(n.timeoutHandle=-1,kl(r)),C1!==null)for(r=C1.return;r!==null;){var t=r;switch(re(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&x4();break;case 3:f0(),u1(G1),u1(U1),me();break;case 5:ue(t);break;case 4:f0();break;case 13:u1(p1);break;case 19:u1(p1);break;case 10:oe(t.type._context);break;case 22:case 23:Se()}r=r.return}if(P1=n,C1=n=s3(n.current,null),T1=J1=e,j1=0,h5=null,ye=Z4=_3=0,Q1=J0=null,C3!==null){for(e=0;e<C3.length;e++)if(r=C3[e],t=r.interleaved,t!==null){r.interleaved=null;var c=t.next,l=r.pending;if(l!==null){var o=l.next;l.next=c,t.next=o}r.pending=t}C3=null}return n}function I9(n,e){do{var r=C1;try{if(le(),c4.current=N4,P4){for(var t=h1.memoizedState;t!==null;){var c=t.queue;c!==null&&(c.pending=null),t=t.next}P4=!1}if(R3=0,M1=E1=h1=null,Y0=!1,z5=0,ve.current=null,r===null||r.return===null){j1=1,h5=e,C1=null;break}n:{var l=n,o=r.return,i=r,a=e;if(e=T1,i.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var s=a,z=i,d=z.tag;if(!(z.mode&1)&&(d===0||d===11||d===15)){var p=z.alternate;p?(z.updateQueue=p.updateQueue,z.memoizedState=p.memoizedState,z.lanes=p.lanes):(z.updateQueue=null,z.memoizedState=null)}var x=$r(o);if(x!==null){x.flags&=-257,Wr(x,o,i,l,e),x.mode&1&&Hr(l,s,e),e=x,a=s;var S=e.updateQueue;if(S===null){var w=new Set;w.add(a),e.updateQueue=w}else S.add(a);break n}else{if(!(e&1)){Hr(l,s,e),ke();break n}a=Error(N(426))}}else if(z1&&i.mode&1){var P=$r(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Wr(P,o,i,l,e),te(p0(a,i));break n}}l=a=p0(a,i),j1!==4&&(j1=2),J0===null?J0=[l]:J0.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,e&=-e,l.lanes|=e;var f=y9(l,a,e);Fr(l,f);break n;case 1:i=a;var m=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(i3===null||!i3.has(g)))){l.flags|=65536,e&=-e,l.lanes|=e;var C=x9(l,i,e);Fr(l,C);break n}}l=l.return}while(l!==null)}A9(r)}catch(L){e=L,C1===r&&r!==null&&(C1=r=r.return);continue}break}while(!0)}function F9(){var n=L4.current;return L4.current=N4,n===null?N4:n}function ke(){(j1===0||j1===3||j1===2)&&(j1=4),P1===null||!(_3&268435455)&&!(Z4&268435455)||J2(P1,T1)}function T4(n,e){var r=J;J|=2;var t=F9();(P1!==n||T1!==e)&&(_2=null,M3(n,e));do try{Gl();break}catch(c){I9(n,c)}while(!0);if(le(),J=r,L4.current=t,C1!==null)throw Error(N(261));return P1=null,T1=0,j1}function Gl(){for(;C1!==null;)U9(C1)}function Zl(){for(;C1!==null&&!xc();)U9(C1)}function U9(n){var e=B9(n.alternate,n,J1);n.memoizedProps=n.pendingProps,e===null?A9(n):C1=e,ve.current=null}function A9(n){var e=n;do{var r=e.alternate;if(n=e.return,e.flags&32768){if(r=bl(r,e),r!==null){r.flags&=32767,C1=r;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{j1=6,C1=null;return}}else if(r=Bl(r,e,J1),r!==null){C1=r;return}if(e=e.sibling,e!==null){C1=e;return}C1=e=n}while(e!==null);j1===0&&(j1=5)}function x3(n,e,r){var t=r1,c=a2.transition;try{a2.transition=null,r1=1,Yl(n,e,r,t)}finally{a2.transition=c,r1=t}return null}function Yl(n,e,r,t){do a0();while(n3!==null);if(J&6)throw Error(N(327));r=n.finishedWork;var c=n.finishedLanes;if(r===null)return null;if(n.finishedWork=null,n.finishedLanes=0,r===n.current)throw Error(N(177));n.callbackNode=null,n.callbackPriority=0;var l=r.lanes|r.childLanes;if(Lc(n,l),n===P1&&(C1=P1=null,T1=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Z5||(Z5=!0,b9(f4,function(){return a0(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=a2.transition,a2.transition=null;var o=r1;r1=1;var i=J;J|=4,ve.current=null,$l(n,r),T9(r,n),hl(i6),h4=!!o6,i6=o6=null,n.current=r,Wl(r),wc(),J=i,r1=o,a2.transition=l}else n.current=r;if(Z5&&(Z5=!1,n3=n,_4=c),l=n.pendingLanes,l===0&&(i3=null),Cc(r.stateNode),Y1(n,w1()),e!==null)for(t=n.onRecoverableError,r=0;r<e.length;r++)c=e[r],t(c.value,{componentStack:c.stack,digest:c.digest});if(R4)throw R4=!1,n=M6,M6=null,n;return _4&1&&n.tag!==0&&a0(),l=n.pendingLanes,l&1?n===P6?q0++:(q0=0,P6=n):q0=0,f3(),null}function a0(){if(n3!==null){var n=y8(_4),e=a2.transition,r=r1;try{if(a2.transition=null,r1=16>n?16:n,n3===null)var t=!1;else{if(n=n3,n3=null,_4=0,J&6)throw Error(N(331));var c=J;for(J|=4,T=n.current;T!==null;){var l=T,o=l.child;if(T.flags&16){var i=l.deletions;if(i!==null){for(var a=0;a<i.length;a++){var s=i[a];for(T=s;T!==null;){var z=T;switch(z.tag){case 0:case 11:case 15:X0(8,z,l)}var d=z.child;if(d!==null)d.return=z,T=d;else for(;T!==null;){z=T;var p=z.sibling,x=z.return;if(L9(z),z===s){T=null;break}if(p!==null){p.return=x,T=p;break}T=x}}}var S=l.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}T=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,T=o;else n:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:X0(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,T=f;break n}T=l.return}}var m=n.current;for(T=m;T!==null;){o=T;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,T=g;else n:for(o=m;T!==null;){if(i=T,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:G4(9,i)}}catch(L){x1(i,i.return,L)}if(i===o){T=null;break n}var C=i.sibling;if(C!==null){C.return=i.return,T=C;break n}T=i.return}}if(J=c,f3(),j2&&typeof j2.onPostCommitFiberRoot=="function")try{j2.onPostCommitFiberRoot(V4,n)}catch{}t=!0}return t}finally{r1=r,a2.transition=e}}return!1}function c7(n,e,r){e=p0(r,e),e=y9(n,e,1),n=o3(n,e,1),e=b1(),n!==null&&(w5(n,1,e),Y1(n,e))}function x1(n,e,r){if(n.tag===3)c7(n,n,r);else for(;e!==null;){if(e.tag===3){c7(e,n,r);break}else if(e.tag===1){var t=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(i3===null||!i3.has(t))){n=p0(r,n),n=x9(e,n,1),e=o3(e,n,1),n=b1(),e!==null&&(w5(e,1,n),Y1(e,n));break}}e=e.return}}function Xl(n,e,r){var t=n.pingCache;t!==null&&t.delete(e),e=b1(),n.pingedLanes|=n.suspendedLanes&r,P1===n&&(T1&r)===r&&(j1===4||j1===3&&(T1&130023424)===T1&&500>w1()-xe?M3(n,0):ye|=r),Y1(n,e)}function V9(n,e){e===0&&(n.mode&1?(e=A5,A5<<=1,!(A5&130023424)&&(A5=4194304)):e=1);var r=b1();n=V2(n,e),n!==null&&(w5(n,e,r),Y1(n,r))}function Jl(n){var e=n.memoizedState,r=0;e!==null&&(r=e.retryLane),V9(n,r)}function ql(n,e){var r=0;switch(n.tag){case 13:var t=n.stateNode,c=n.memoizedState;c!==null&&(r=c.retryLane);break;case 19:t=n.stateNode;break;default:throw Error(N(314))}t!==null&&t.delete(e),V9(n,r)}var B9;B9=function(n,e,r){if(n!==null)if(n.memoizedProps!==e.pendingProps||G1.current)K1=!0;else{if(!(n.lanes&r)&&!(e.flags&128))return K1=!1,Vl(n,e,r);K1=!!(n.flags&131072)}else K1=!1,z1&&e.flags&1048576&&W8(e,k4,e.index);switch(e.lanes=0,e.tag){case 2:var t=e.type;o4(n,e),n=e.pendingProps;var c=m0(e,U1.current);i0(e,r),c=ze(null,e,t,n,c,r);var l=fe();return e.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Z1(t)?(l=!0,w4(e)):l=!1,e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,ae(e),c.updater=K4,e.stateNode=c,c._reactInternals=e,h6(e,t,n,r),e=y6(null,e,t,!0,l,r)):(e.tag=0,z1&&l&&ee(e),B1(null,e,c,r),e=e.child),e;case 16:t=e.elementType;n:{switch(o4(n,e),n=e.pendingProps,c=t._init,t=c(t._payload),e.type=t,c=e.tag=eo(t),n=f2(t,n),c){case 0:e=v6(null,e,t,n,r);break n;case 1:e=Gr(null,e,t,n,r);break n;case 11:e=Qr(null,e,t,n,r);break n;case 14:e=Kr(null,e,t,f2(t.type,n),r);break n}throw Error(N(306,t,""))}return e;case 0:return t=e.type,c=e.pendingProps,c=e.elementType===t?c:f2(t,c),v6(n,e,t,c,r);case 1:return t=e.type,c=e.pendingProps,c=e.elementType===t?c:f2(t,c),Gr(n,e,t,c,r);case 3:n:{if(C9(e),n===null)throw Error(N(387));t=e.pendingProps,l=e.memoizedState,c=l.element,X8(n,e),j4(e,t,null,r);var o=e.memoizedState;if(t=o.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){c=p0(Error(N(423)),e),e=Zr(n,e,t,r,c);break n}else if(t!==c){c=p0(Error(N(424)),e),e=Zr(n,e,t,r,c);break n}else for(n2=l3(e.stateNode.containerInfo.firstChild),e2=e,z1=!0,g2=null,r=Z8(e,null,t,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(d0(),t===c){e=B2(n,e,r);break n}B1(n,e,t,r)}e=e.child}return e;case 5:return J8(e),n===null&&z6(e),t=e.type,c=e.pendingProps,l=n!==null?n.memoizedProps:null,o=c.children,a6(t,c)?o=null:l!==null&&a6(t,l)&&(e.flags|=32),k9(n,e),B1(n,e,o,r),e.child;case 6:return n===null&&z6(e),null;case 13:return E9(n,e,r);case 4:return se(e,e.stateNode.containerInfo),t=e.pendingProps,n===null?e.child=z0(e,null,t,r):B1(n,e,t,r),e.child;case 11:return t=e.type,c=e.pendingProps,c=e.elementType===t?c:f2(t,c),Qr(n,e,t,c,r);case 7:return B1(n,e,e.pendingProps,r),e.child;case 8:return B1(n,e,e.pendingProps.children,r),e.child;case 12:return B1(n,e,e.pendingProps.children,r),e.child;case 10:n:{if(t=e.type._context,c=e.pendingProps,l=e.memoizedProps,o=c.value,l1(C4,t._currentValue),t._currentValue=o,l!==null)if(x2(l.value,o)){if(l.children===c.children&&!G1.current){e=B2(n,e,r);break n}}else for(l=e.child,l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){o=l.child;for(var a=i.firstContext;a!==null;){if(a.context===t){if(l.tag===1){a=I2(-1,r&-r),a.tag=2;var s=l.updateQueue;if(s!==null){s=s.shared;var z=s.pending;z===null?a.next=a:(a.next=z.next,z.next=a),s.pending=a}}l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),f6(l.return,r,e),i.lanes|=r;break}a=a.next}}else if(l.tag===10)o=l.type===e.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(N(341));o.lanes|=r,i=o.alternate,i!==null&&(i.lanes|=r),f6(o,r,e),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}B1(n,e,c.children,r),e=e.child}return e;case 9:return c=e.type,t=e.pendingProps.children,i0(e,r),c=s2(c),t=t(c),e.flags|=1,B1(n,e,t,r),e.child;case 14:return t=e.type,c=f2(t,e.pendingProps),c=f2(t.type,c),Kr(n,e,t,c,r);case 15:return w9(n,e,e.type,e.pendingProps,r);case 17:return t=e.type,c=e.pendingProps,c=e.elementType===t?c:f2(t,c),o4(n,e),e.tag=1,Z1(t)?(n=!0,w4(e)):n=!1,i0(e,r),v9(e,t,c),h6(e,t,c,r),y6(null,e,t,!0,n,r);case 19:return j9(n,e,r);case 22:return S9(n,e,r)}throw Error(N(156,e.tag))};function b9(n,e){return p8(n,e)}function no(n,e,r,t){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function i2(n,e,r,t){return new no(n,e,r,t)}function Ce(n){return n=n.prototype,!(!n||!n.isReactComponent)}function eo(n){if(typeof n=="function")return Ce(n)?1:0;if(n!=null){if(n=n.$$typeof,n===H6)return 11;if(n===$6)return 14}return 2}function s3(n,e){var r=n.alternate;return r===null?(r=i2(n.tag,e,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=e,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&14680064,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,e=n.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r}function s4(n,e,r,t,c,l){var o=2;if(t=n,typeof n=="function")Ce(n)&&(o=1);else if(typeof n=="string")o=5;else n:switch(n){case Q3:return P3(r.children,c,l,e);case b6:o=8,c|=8;break;case Vn:return n=i2(12,r,e,c|2),n.elementType=Vn,n.lanes=l,n;case Bn:return n=i2(13,r,e,c),n.elementType=Bn,n.lanes=l,n;case bn:return n=i2(19,r,e,c),n.elementType=bn,n.lanes=l,n;case J7:return Y4(r,c,l,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y7:o=10;break n;case X7:o=9;break n;case H6:o=11;break n;case $6:o=14;break n;case Z2:o=16,t=null;break n}throw Error(N(130,n==null?n:typeof n,""))}return e=i2(o,r,e,c),e.elementType=n,e.type=t,e.lanes=l,e}function P3(n,e,r,t){return n=i2(7,n,t,e),n.lanes=r,n}function Y4(n,e,r,t){return n=i2(22,n,t,e),n.elementType=J7,n.lanes=r,n.stateNode={isHidden:!1},n}function Tn(n,e,r){return n=i2(6,n,null,e),n.lanes=r,n}function Dn(n,e,r){return e=i2(4,n.children!==null?n.children:[],n.key,e),e.lanes=r,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function ro(n,e,r,t,c){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fn(0),this.expirationTimes=fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.identifierPrefix=t,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Ee(n,e,r,t,c,l,o,i,a){return n=new ro(n,e,r,i,a),e===1?(e=1,l===!0&&(e|=8)):e=0,l=i2(3,null,null,e),n.current=l,l.stateNode=n,l.memoizedState={element:t,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ae(l),n}function to(n,e,r){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W3,key:t==null?null:""+t,children:n,containerInfo:e,implementation:r}}function H9(n){if(!n)return m3;n=n._reactInternals;n:{if(I3(n)!==n||n.tag!==1)throw Error(N(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(Z1(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(N(171))}if(n.tag===1){var r=n.type;if(Z1(r))return H8(n,r,e)}return e}function $9(n,e,r,t,c,l,o,i,a){return n=Ee(r,t,!0,n,c,l,o,i,a),n.context=H9(null),r=n.current,t=b1(),c=a3(r),l=I2(t,c),l.callback=e??null,o3(r,l,c),n.current.lanes=c,w5(n,c,t),Y1(n,t),n}function X4(n,e,r,t){var c=e.current,l=b1(),o=a3(c);return r=H9(r),e.context===null?e.context=r:e.pendingContext=r,e=I2(l,o),e.payload={element:n},t=t===void 0?null:t,t!==null&&(e.callback=t),n=o3(c,e,o),n!==null&&(y2(n,c,o,l),t4(n,c,o)),o}function D4(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function l7(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<e?r:e}}function je(n,e){l7(n,e),(n=n.alternate)&&l7(n,e)}function co(){return null}var W9=typeof reportError=="function"?reportError:function(n){console.error(n)};function Me(n){this._internalRoot=n}J4.prototype.render=Me.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(N(409));X4(n,e,null,null)};J4.prototype.unmount=Me.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;T3(function(){X4(null,n,null,null)}),e[A2]=null}};function J4(n){this._internalRoot=n}J4.prototype.unstable_scheduleHydration=function(n){if(n){var e=S8();n={blockedOn:null,target:n,priority:e};for(var r=0;r<X2.length&&e!==0&&e<X2[r].priority;r++);X2.splice(r,0,n),r===0&&C8(n)}};function Pe(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function q4(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function o7(){}function lo(n,e,r,t,c){if(c){if(typeof t=="function"){var l=t;t=function(){var s=D4(o);l.call(s)}}var o=$9(e,t,n,0,null,!1,!1,"",o7);return n._reactRootContainer=o,n[A2]=o.current,a5(n.nodeType===8?n.parentNode:n),T3(),o}for(;c=n.lastChild;)n.removeChild(c);if(typeof t=="function"){var i=t;t=function(){var s=D4(a);i.call(s)}}var a=Ee(n,0,!1,null,null,!1,!1,"",o7);return n._reactRootContainer=a,n[A2]=a.current,a5(n.nodeType===8?n.parentNode:n),T3(function(){X4(e,a,r,t)}),a}function nn(n,e,r,t,c){var l=r._reactRootContainer;if(l){var o=l;if(typeof c=="function"){var i=c;c=function(){var a=D4(o);i.call(a)}}X4(e,o,n,c)}else o=lo(r,e,n,c,t);return D4(o)}x8=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var r=b0(e.pendingLanes);r!==0&&(K6(e,r|1),Y1(e,w1()),!(J&6)&&(h0=w1()+500,f3()))}break;case 13:T3(function(){var t=V2(n,1);if(t!==null){var c=b1();y2(t,n,1,c)}}),je(n,1)}};G6=function(n){if(n.tag===13){var e=V2(n,134217728);if(e!==null){var r=b1();y2(e,n,134217728,r)}je(n,134217728)}};w8=function(n){if(n.tag===13){var e=a3(n),r=V2(n,e);if(r!==null){var t=b1();y2(r,n,e,t)}je(n,e)}};S8=function(){return r1};k8=function(n,e){var r=r1;try{return r1=n,e()}finally{r1=r}};Jn=function(n,e,r){switch(e){case"input":if(Wn(n,r),e=r.name,r.type==="radio"&&e!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var t=r[e];if(t!==n&&t.form===n.form){var c=$4(t);if(!c)throw Error(N(90));n8(t),Wn(t,c)}}}break;case"textarea":r8(n,r);break;case"select":e=r.value,e!=null&&t0(n,!!r.multiple,e,!1)}};s8=we;u8=T3;var oo={usingClientEntryPoint:!1,Events:[k5,Y3,$4,i8,a8,we]},D0={findFiberByHostInstance:k3,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},io={bundleType:D0.bundleType,version:D0.version,rendererPackageName:D0.rendererPackageName,rendererConfig:D0.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b2.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=z8(n),n===null?null:n.stateNode},findFiberByHostInstance:D0.findFiberByHostInstance||co,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Y5=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Y5.isDisabled&&Y5.supportsFiber)try{V4=Y5.inject(io),j2=Y5}catch{}}t2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oo;t2.createPortal=function(n,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pe(e))throw Error(N(200));return to(n,e,null,r)};t2.createRoot=function(n,e){if(!Pe(n))throw Error(N(299));var r=!1,t="",c=W9;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(t=e.identifierPrefix),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=Ee(n,1,!1,null,null,r,!1,t,c),n[A2]=e.current,a5(n.nodeType===8?n.parentNode:n),new Me(e)};t2.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(N(188)):(n=Object.keys(n).join(","),Error(N(268,n)));return n=z8(e),n=n===null?null:n.stateNode,n};t2.flushSync=function(n){return T3(n)};t2.hydrate=function(n,e,r){if(!q4(e))throw Error(N(200));return nn(null,n,e,!0,r)};t2.hydrateRoot=function(n,e,r){if(!Pe(n))throw Error(N(405));var t=r!=null&&r.hydratedSources||null,c=!1,l="",o=W9;if(r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=$9(e,null,n,1,r??null,c,!1,l,o),n[A2]=e.current,a5(n),t)for(n=0;n<t.length;n++)r=t[n],c=r._getVersion,c=c(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,c]:e.mutableSourceEagerHydrationData.push(r,c);return new J4(e)};t2.render=function(n,e,r){if(!q4(e))throw Error(N(200));return nn(null,n,e,!1,r)};t2.unmountComponentAtNode=function(n){if(!q4(n))throw Error(N(40));return n._reactRootContainer?(T3(function(){nn(null,null,n,!1,function(){n._reactRootContainer=null,n[A2]=null})}),!0):!1};t2.unstable_batchedUpdates=we;t2.unstable_renderSubtreeIntoContainer=function(n,e,r,t){if(!q4(r))throw Error(N(200));if(n==null||n._reactInternals===void 0)throw Error(N(38));return nn(n,e,r,!1,t)};t2.version="18.3.1-next-f1338f8080-20240426";function Q9(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q9)}catch(n){console.error(n)}}Q9(),Q7.exports=t2;var Ne=Q7.exports;const ao=D7(Ne),so=T7({__proto__:null,default:ao},[Ne]);var K9,i7=Ne;K9=i7.createRoot,i7.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function d1(){return d1=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},d1.apply(this,arguments)}var k1;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(k1||(k1={}));const a7="popstate";function uo(n){n===void 0&&(n={});function e(t,c){let{pathname:l,search:o,hash:i}=t.location;return g5("",{pathname:l,search:o,hash:i},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function r(t,c){return typeof c=="string"?c:D3(c)}return zo(e,r,null,n)}function Y(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function g0(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mo(){return Math.random().toString(36).substr(2,8)}function s7(n,e){return{usr:n.state,key:n.key,idx:e}}function g5(n,e,r,t){return r===void 0&&(r=null),d1({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?p3(e):e,{state:r,key:e&&e.key||t||mo()})}function D3(n){let{pathname:e="/",search:r="",hash:t=""}=n;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),t&&t!=="#"&&(e+=t.charAt(0)==="#"?t:"#"+t),e}function p3(n){let e={};if(n){let r=n.indexOf("#");r>=0&&(e.hash=n.substr(r),n=n.substr(0,r));let t=n.indexOf("?");t>=0&&(e.search=n.substr(t),n=n.substr(0,t)),n&&(e.pathname=n)}return e}function zo(n,e,r,t){t===void 0&&(t={});let{window:c=document.defaultView,v5Compat:l=!1}=t,o=c.history,i=k1.Pop,a=null,s=z();s==null&&(s=0,o.replaceState(d1({},o.state,{idx:s}),""));function z(){return(o.state||{idx:null}).idx}function d(){i=k1.Pop;let P=z(),f=P==null?null:P-s;s=P,a&&a({action:i,location:w.location,delta:f})}function p(P,f){i=k1.Push;let m=g5(w.location,P,f);s=z()+1;let g=s7(m,s),C=w.createHref(m);try{o.pushState(g,"",C)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;c.location.assign(C)}l&&a&&a({action:i,location:w.location,delta:1})}function x(P,f){i=k1.Replace;let m=g5(w.location,P,f);s=z();let g=s7(m,s),C=w.createHref(m);o.replaceState(g,"",C),l&&a&&a({action:i,location:w.location,delta:0})}function S(P){let f=c.location.origin!=="null"?c.location.origin:c.location.href,m=typeof P=="string"?P:D3(P);return m=m.replace(/ $/,"%20"),Y(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let w={get action(){return i},get location(){return n(c,o)},listen(P){if(a)throw new Error("A history only accepts one active listener");return c.addEventListener(a7,d),a=P,()=>{c.removeEventListener(a7,d),a=null}},createHref(P){return e(c,P)},createURL:S,encodeLocation(P){let f=S(P);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:x,go(P){return o.go(P)}};return w}var t1;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(t1||(t1={}));const fo=new Set(["lazy","caseSensitive","path","id","index","children"]);function po(n){return n.index===!0}function O4(n,e,r,t){return r===void 0&&(r=[]),t===void 0&&(t={}),n.map((c,l)=>{let o=[...r,String(l)],i=typeof c.id=="string"?c.id:o.join("-");if(Y(c.index!==!0||!c.children,"Cannot specify children on an index route"),Y(!t[i],'Found a route id collision on id "'+i+`".  Route id's must be globally unique within Data Router usages`),po(c)){let a=d1({},c,e(c),{id:i});return t[i]=a,a}else{let a=d1({},c,e(c),{id:i,children:void 0});return t[i]=a,c.children&&(a.children=O4(c.children,e,o,t)),a}})}function w3(n,e,r){return r===void 0&&(r="/"),u4(n,e,r,!1)}function u4(n,e,r,t){let c=typeof e=="string"?p3(e):e,l=w0(c.pathname||"/",r);if(l==null)return null;let o=G9(n);go(o);let i=null;for(let a=0;i==null&&a<o.length;++a){let s=Po(l);i=jo(o[a],s,t)}return i}function ho(n,e){let{route:r,pathname:t,params:c}=n;return{id:r.id,pathname:t,params:c,data:e[r.id],handle:r.handle}}function G9(n,e,r,t){e===void 0&&(e=[]),r===void 0&&(r=[]),t===void 0&&(t="");let c=(l,o,i)=>{let a={relativePath:i===void 0?l.path||"":i,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};a.relativePath.startsWith("/")&&(Y(a.relativePath.startsWith(t),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+t+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(t.length));let s=F2([t,a.relativePath]),z=r.concat(a);l.children&&l.children.length>0&&(Y(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),G9(l.children,e,z,s)),!(l.path==null&&!l.index)&&e.push({path:s,score:Co(s,l.index),routesMeta:z})};return n.forEach((l,o)=>{var i;if(l.path===""||!((i=l.path)!=null&&i.includes("?")))c(l,o);else for(let a of Z9(l.path))c(l,o,a)}),e}function Z9(n){let e=n.split("/");if(e.length===0)return[];let[r,...t]=e,c=r.endsWith("?"),l=r.replace(/\?$/,"");if(t.length===0)return c?[l,""]:[l];let o=Z9(t.join("/")),i=[];return i.push(...o.map(a=>a===""?l:[l,a].join("/"))),c&&i.push(...o),i.map(a=>n.startsWith("/")&&a===""?"/":a)}function go(n){n.sort((e,r)=>e.score!==r.score?r.score-e.score:Eo(e.routesMeta.map(t=>t.childrenIndex),r.routesMeta.map(t=>t.childrenIndex)))}const vo=/^:[\w-]+$/,yo=3,xo=2,wo=1,So=10,ko=-2,u7=n=>n==="*";function Co(n,e){let r=n.split("/"),t=r.length;return r.some(u7)&&(t+=ko),e&&(t+=xo),r.filter(c=>!u7(c)).reduce((c,l)=>c+(vo.test(l)?yo:l===""?wo:So),t)}function Eo(n,e){return n.length===e.length&&n.slice(0,-1).every((t,c)=>t===e[c])?n[n.length-1]-e[e.length-1]:0}function jo(n,e,r){r===void 0&&(r=!1);let{routesMeta:t}=n,c={},l="/",o=[];for(let i=0;i<t.length;++i){let a=t[i],s=i===t.length-1,z=l==="/"?e:e.slice(l.length)||"/",d=m7({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},z),p=a.route;if(!d&&s&&r&&!t[t.length-1].route.index&&(d=m7({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},z)),!d)return null;Object.assign(c,d.params),o.push({params:c,pathname:F2([l,d.pathname]),pathnameBase:Ro(F2([l,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(l=F2([l,d.pathnameBase]))}return o}function m7(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,t]=Mo(n.path,n.caseSensitive,n.end),c=e.match(r);if(!c)return null;let l=c[0],o=l.replace(/(.)\/+$/,"$1"),i=c.slice(1);return{params:t.reduce((s,z,d)=>{let{paramName:p,isOptional:x}=z;if(p==="*"){let w=i[d]||"";o=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const S=i[d];return x&&!S?s[p]=void 0:s[p]=(S||"").replace(/%2F/g,"/"),s},{}),pathname:l,pathnameBase:o,pattern:n}}function Mo(n,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),g0(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let t=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,i,a)=>(t.push({paramName:i,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(t.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,e?void 0:"i"),t]}function Po(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return g0(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function w0(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,t=n.charAt(r);return t&&t!=="/"?null:n.slice(r)||"/"}function No(n,e){e===void 0&&(e="/");let{pathname:r,search:t="",hash:c=""}=typeof n=="string"?p3(n):n;return{pathname:r?r.startsWith("/")?r:Lo(r,e):e,search:_o(t),hash:To(c)}}function Lo(n,e){let r=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?r.length>1&&r.pop():c!=="."&&r.push(c)}),r.length>1?r.join("/"):"/"}function On(n,e,r,t){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(t)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Y9(n){return n.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Le(n,e){let r=Y9(n);return e?r.map((t,c)=>c===r.length-1?t.pathname:t.pathnameBase):r.map(t=>t.pathnameBase)}function Re(n,e,r,t){t===void 0&&(t=!1);let c;typeof n=="string"?c=p3(n):(c=d1({},n),Y(!c.pathname||!c.pathname.includes("?"),On("?","pathname","search",c)),Y(!c.pathname||!c.pathname.includes("#"),On("#","pathname","hash",c)),Y(!c.search||!c.search.includes("#"),On("#","search","hash",c)));let l=n===""||c.pathname==="",o=l?"/":c.pathname,i;if(o==null)i=r;else{let d=e.length-1;if(!t&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;c.pathname=p.join("/")}i=d>=0?e[d]:"/"}let a=No(c,i),s=o&&o!=="/"&&o.endsWith("/"),z=(l||o===".")&&r.endsWith("/");return!a.pathname.endsWith("/")&&(s||z)&&(a.pathname+="/"),a}const F2=n=>n.join("/").replace(/\/\/+/g,"/"),Ro=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),_o=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,To=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;class I4{constructor(e,r,t,c){c===void 0&&(c=!1),this.status=e,this.statusText=r||"",this.internal=c,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}}function en(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const X9=["post","put","patch","delete"],Do=new Set(X9),Oo=["get",...X9],Io=new Set(Oo),Fo=new Set([301,302,303,307,308]),Uo=new Set([307,308]),In={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ao={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},O0={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},_e=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vo=n=>({hasErrorBoundary:!!n.hasErrorBoundary}),J9="remix-router-transitions";function Bo(n){const e=n.window?n.window:typeof window<"u"?window:void 0,r=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",t=!r;Y(n.routes.length>0,"You must provide a non-empty routes array to createRouter");let c;if(n.mapRouteProperties)c=n.mapRouteProperties;else if(n.detectErrorBoundary){let h=n.detectErrorBoundary;c=y=>({hasErrorBoundary:h(y)})}else c=Vo;let l={},o=O4(n.routes,c,void 0,l),i,a=n.basename||"/",s=n.dataStrategy||Wo,z=n.patchRoutesOnNavigation,d=d1({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},n.future),p=null,x=new Set,S=null,w=null,P=null,f=n.hydrationData!=null,m=w3(o,n.history.location,a),g=null;if(m==null&&!z){let h=W1(404,{pathname:n.history.location.pathname}),{matches:y,route:k}=S7(o);m=y,g={[k.id]:h}}m&&!n.hydrationData&&L5(m,o,n.history.location.pathname).active&&(m=null);let C;if(m)if(m.some(h=>h.route.lazy))C=!1;else if(!m.some(h=>h.route.loader))C=!0;else if(d.v7_partialHydration){let h=n.hydrationData?n.hydrationData.loaderData:null,y=n.hydrationData?n.hydrationData.errors:null;if(y){let k=m.findIndex(M=>y[M.route.id]!==void 0);C=m.slice(0,k+1).every(M=>!_6(M.route,h,y))}else C=m.every(k=>!_6(k.route,h,y))}else C=n.hydrationData!=null;else if(C=!1,m=[],d.v7_partialHydration){let h=L5(null,o,n.history.location.pathname);h.active&&h.matches&&(m=h.matches)}let L,v={historyAction:n.history.action,location:n.history.location,matches:m,initialized:C,navigation:In,restoreScrollPosition:n.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:n.hydrationData&&n.hydrationData.loaderData||{},actionData:n.hydrationData&&n.hydrationData.actionData||null,errors:n.hydrationData&&n.hydrationData.errors||g,fetchers:new Map,blockers:new Map},R=k1.Pop,j=!1,D,O=!1,q=new Map,H=null,f1=!1,o1=!1,m2=[],X1=new Set,m1=new Map,_=0,b=-1,$=new Map,Q=new Set,i1=new Map,w2=new Map,L1=new Set,d2=new Map,A1=new Map,P2;function vt(){if(p=n.history.listen(h=>{let{action:y,location:k,delta:M}=h;if(P2){P2(),P2=void 0;return}g0(A1.size===0||M!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let I=Ze({currentLocation:v.location,nextLocation:k,historyAction:y});if(I&&M!=null){let V=new Promise(W=>{P2=W});n.history.go(M*-1),N5(I,{state:"blocked",location:k,proceed(){N5(I,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),V.then(()=>n.history.go(M))},reset(){let W=new Map(v.blockers);W.set(I,O0),V1({blockers:W})}});return}return h3(y,k)}),r){li(e,q);let h=()=>oi(e,q);e.addEventListener("pagehide",h),H=()=>e.removeEventListener("pagehide",h)}return v.initialized||h3(k1.Pop,v.location,{initialHydration:!0}),L}function yt(){p&&p(),H&&H(),x.clear(),D&&D.abort(),v.fetchers.forEach((h,y)=>P5(y)),v.blockers.forEach((h,y)=>Ge(y))}function xt(h){return x.add(h),()=>x.delete(h)}function V1(h,y){y===void 0&&(y={}),v=d1({},v,h);let k=[],M=[];d.v7_fetcherPersist&&v.fetchers.forEach((I,V)=>{I.state==="idle"&&(L1.has(V)?M.push(V):k.push(V))}),[...x].forEach(I=>I(v,{deletedFetchers:M,viewTransitionOpts:y.viewTransitionOpts,flushSync:y.flushSync===!0})),d.v7_fetcherPersist&&(k.forEach(I=>v.fetchers.delete(I)),M.forEach(I=>P5(I)))}function A3(h,y,k){var M,I;let{flushSync:V}=k===void 0?{}:k,W=v.actionData!=null&&v.navigation.formMethod!=null&&h2(v.navigation.formMethod)&&v.navigation.state==="loading"&&((M=h.state)==null?void 0:M._isRedirect)!==!0,U;y.actionData?Object.keys(y.actionData).length>0?U=y.actionData:U=null:W?U=v.actionData:U=null;let A=y.loaderData?x7(v.loaderData,y.loaderData,y.matches||[],y.errors):v.loaderData,F=v.blockers;F.size>0&&(F=new Map(F),F.forEach((X,R1)=>F.set(R1,O0)));let B=j===!0||v.navigation.formMethod!=null&&h2(v.navigation.formMethod)&&((I=h.state)==null?void 0:I._isRedirect)!==!0;i&&(o=i,i=void 0),f1||R===k1.Pop||(R===k1.Push?n.history.push(h,h.state):R===k1.Replace&&n.history.replace(h,h.state));let Z;if(R===k1.Pop){let X=q.get(v.location.pathname);X&&X.has(h.pathname)?Z={currentLocation:v.location,nextLocation:h}:q.has(h.pathname)&&(Z={currentLocation:h,nextLocation:v.location})}else if(O){let X=q.get(v.location.pathname);X?X.add(h.pathname):(X=new Set([h.pathname]),q.set(v.location.pathname,X)),Z={currentLocation:v.location,nextLocation:h}}V1(d1({},y,{actionData:U,loaderData:A,historyAction:R,location:h,initialized:!0,navigation:In,revalidation:"idle",restoreScrollPosition:Xe(h,y.matches||v.matches),preventScrollReset:B,blockers:F}),{viewTransitionOpts:Z,flushSync:V===!0}),R=k1.Pop,j=!1,O=!1,f1=!1,o1=!1,m2=[]}async function Be(h,y){if(typeof h=="number"){n.history.go(h);return}let k=R6(v.location,v.matches,a,d.v7_prependBasename,h,d.v7_relativeSplatPath,y==null?void 0:y.fromRouteId,y==null?void 0:y.relative),{path:M,submission:I,error:V}=d7(d.v7_normalizeFormMethod,!1,k,y),W=v.location,U=g5(v.location,M,y&&y.state);U=d1({},U,n.history.encodeLocation(U));let A=y&&y.replace!=null?y.replace:void 0,F=k1.Push;A===!0?F=k1.Replace:A===!1||I!=null&&h2(I.formMethod)&&I.formAction===v.location.pathname+v.location.search&&(F=k1.Replace);let B=y&&"preventScrollReset"in y?y.preventScrollReset===!0:void 0,Z=(y&&y.flushSync)===!0,X=Ze({currentLocation:W,nextLocation:U,historyAction:F});if(X){N5(X,{state:"blocked",location:U,proceed(){N5(X,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),Be(h,y)},reset(){let R1=new Map(v.blockers);R1.set(X,O0),V1({blockers:R1})}});return}return await h3(F,U,{submission:I,pendingError:V,preventScrollReset:B,replace:y&&y.replace,enableViewTransition:y&&y.viewTransition,flushSync:Z})}function wt(){if(cn(),V1({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){h3(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}h3(R||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation,enableViewTransition:O===!0})}}async function h3(h,y,k){D&&D.abort(),D=null,R=h,f1=(k&&k.startUninterruptedRevalidation)===!0,Rt(v.location,v.matches),j=(k&&k.preventScrollReset)===!0,O=(k&&k.enableViewTransition)===!0;let M=i||o,I=k&&k.overrideNavigation,V=w3(M,y,a),W=(k&&k.flushSync)===!0,U=L5(V,M,y.pathname);if(U.active&&U.matches&&(V=U.matches),!V){let{error:c1,notFoundMatches:e1,route:v1}=ln(y.pathname);A3(y,{matches:e1,loaderData:{},errors:{[v1.id]:c1}},{flushSync:W});return}if(v.initialized&&!o1&&Xo(v.location,y)&&!(k&&k.submission&&h2(k.submission.formMethod))){A3(y,{matches:V},{flushSync:W});return}D=new AbortController;let A=$3(n.history,y,D.signal,k&&k.submission),F;if(k&&k.pendingError)F=[S3(V).route.id,{type:t1.error,error:k.pendingError}];else if(k&&k.submission&&h2(k.submission.formMethod)){let c1=await St(A,y,k.submission,V,U.active,{replace:k.replace,flushSync:W});if(c1.shortCircuited)return;if(c1.pendingActionResult){let[e1,v1]=c1.pendingActionResult;if(q1(v1)&&en(v1.error)&&v1.error.status===404){D=null,A3(y,{matches:c1.matches,loaderData:{},errors:{[e1]:v1.error}});return}}V=c1.matches||V,F=c1.pendingActionResult,I=Fn(y,k.submission),W=!1,U.active=!1,A=$3(n.history,A.url,A.signal)}let{shortCircuited:B,matches:Z,loaderData:X,errors:R1}=await kt(A,y,V,U.active,I,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,k&&k.initialHydration===!0,W,F);B||(D=null,A3(y,d1({matches:Z||V},w7(F),{loaderData:X,errors:R1})))}async function St(h,y,k,M,I,V){V===void 0&&(V={}),cn();let W=ti(y,k);if(V1({navigation:W},{flushSync:V.flushSync===!0}),I){let F=await R5(M,y.pathname,h.signal);if(F.type==="aborted")return{shortCircuited:!0};if(F.type==="error"){let B=S3(F.partialMatches).route.id;return{matches:F.partialMatches,pendingActionResult:[B,{type:t1.error,error:F.error}]}}else if(F.matches)M=F.matches;else{let{notFoundMatches:B,error:Z,route:X}=ln(y.pathname);return{matches:B,pendingActionResult:[X.id,{type:t1.error,error:Z}]}}}let U,A=$0(M,y);if(!A.route.action&&!A.route.lazy)U={type:t1.error,error:W1(405,{method:h.method,pathname:y.pathname,routeId:A.route.id})};else if(U=(await k0("action",v,h,[A],M,null))[A.route.id],h.signal.aborted)return{shortCircuited:!0};if(j3(U)){let F;return V&&V.replace!=null?F=V.replace:F=g7(U.response.headers.get("Location"),new URL(h.url),a)===v.location.pathname+v.location.search,await g3(h,U,!0,{submission:k,replace:F}),{shortCircuited:!0}}if(e3(U))throw W1(400,{type:"defer-action"});if(q1(U)){let F=S3(M,A.route.id);return(V&&V.replace)!==!0&&(R=k1.Push),{matches:M,pendingActionResult:[F.route.id,U]}}return{matches:M,pendingActionResult:[A.route.id,U]}}async function kt(h,y,k,M,I,V,W,U,A,F,B){let Z=I||Fn(y,V),X=V||W||C7(Z),R1=!f1&&(!d.v7_partialHydration||!A);if(M){if(R1){let y1=be(B);V1(d1({navigation:Z},y1!==void 0?{actionData:y1}:{}),{flushSync:F})}let n1=await R5(k,y.pathname,h.signal);if(n1.type==="aborted")return{shortCircuited:!0};if(n1.type==="error"){let y1=S3(n1.partialMatches).route.id;return{matches:n1.partialMatches,loaderData:{},errors:{[y1]:n1.error}}}else if(n1.matches)k=n1.matches;else{let{error:y1,notFoundMatches:B3,route:j0}=ln(y.pathname);return{matches:B3,loaderData:{},errors:{[j0.id]:y1}}}}let c1=i||o,[e1,v1]=f7(n.history,v,k,X,y,d.v7_partialHydration&&A===!0,d.v7_skipActionErrorRevalidation,o1,m2,X1,L1,i1,Q,c1,a,B);if(on(n1=>!(k&&k.some(y1=>y1.route.id===n1))||e1&&e1.some(y1=>y1.route.id===n1)),b=++_,e1.length===0&&v1.length===0){let n1=Qe();return A3(y,d1({matches:k,loaderData:{},errors:B&&q1(B[1])?{[B[0]]:B[1].error}:null},w7(B),n1?{fetchers:new Map(v.fetchers)}:{}),{flushSync:F}),{shortCircuited:!0}}if(R1){let n1={};if(!M){n1.navigation=Z;let y1=be(B);y1!==void 0&&(n1.actionData=y1)}v1.length>0&&(n1.fetchers=Ct(v1)),V1(n1,{flushSync:F})}v1.forEach(n1=>{$2(n1.key),n1.controller&&m1.set(n1.key,n1.controller)});let V3=()=>v1.forEach(n1=>$2(n1.key));D&&D.signal.addEventListener("abort",V3);let{loaderResults:C0,fetcherResults:L2}=await He(v,k,e1,v1,h);if(h.signal.aborted)return{shortCircuited:!0};D&&D.signal.removeEventListener("abort",V3),v1.forEach(n1=>m1.delete(n1.key));let S2=X5(C0);if(S2)return await g3(h,S2.result,!0,{replace:U}),{shortCircuited:!0};if(S2=X5(L2),S2)return Q.add(S2.key),await g3(h,S2.result,!0,{replace:U}),{shortCircuited:!0};let{loaderData:an,errors:E0}=y7(v,k,C0,B,v1,L2,d2);d2.forEach((n1,y1)=>{n1.subscribe(B3=>{(B3||n1.done)&&d2.delete(y1)})}),d.v7_partialHydration&&A&&v.errors&&(E0=d1({},v.errors,E0));let v3=Qe(),_5=Ke(b),T5=v3||_5||v1.length>0;return d1({matches:k,loaderData:an,errors:E0},T5?{fetchers:new Map(v.fetchers)}:{})}function be(h){if(h&&!q1(h[1]))return{[h[0]]:h[1].data};if(v.actionData)return Object.keys(v.actionData).length===0?null:v.actionData}function Ct(h){return h.forEach(y=>{let k=v.fetchers.get(y.key),M=I0(void 0,k?k.data:void 0);v.fetchers.set(y.key,M)}),new Map(v.fetchers)}function Et(h,y,k,M){if(t)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");$2(h);let I=(M&&M.flushSync)===!0,V=i||o,W=R6(v.location,v.matches,a,d.v7_prependBasename,k,d.v7_relativeSplatPath,y,M==null?void 0:M.relative),U=w3(V,W,a),A=L5(U,V,W);if(A.active&&A.matches&&(U=A.matches),!U){N2(h,y,W1(404,{pathname:W}),{flushSync:I});return}let{path:F,submission:B,error:Z}=d7(d.v7_normalizeFormMethod,!0,W,M);if(Z){N2(h,y,Z,{flushSync:I});return}let X=$0(U,F),R1=(M&&M.preventScrollReset)===!0;if(B&&h2(B.formMethod)){jt(h,y,F,X,U,A.active,I,R1,B);return}i1.set(h,{routeId:y,path:F}),Mt(h,y,F,X,U,A.active,I,R1,B)}async function jt(h,y,k,M,I,V,W,U,A){cn(),i1.delete(h);function F(S1){if(!S1.route.action&&!S1.route.lazy){let b3=W1(405,{method:A.formMethod,pathname:k,routeId:y});return N2(h,y,b3,{flushSync:W}),!0}return!1}if(!V&&F(M))return;let B=v.fetchers.get(h);H2(h,ci(A,B),{flushSync:W});let Z=new AbortController,X=$3(n.history,k,Z.signal,A);if(V){let S1=await R5(I,k,X.signal);if(S1.type==="aborted")return;if(S1.type==="error"){N2(h,y,S1.error,{flushSync:W});return}else if(S1.matches){if(I=S1.matches,M=$0(I,k),F(M))return}else{N2(h,y,W1(404,{pathname:k}),{flushSync:W});return}}m1.set(h,Z);let R1=_,e1=(await k0("action",v,X,[M],I,h))[M.route.id];if(X.signal.aborted){m1.get(h)===Z&&m1.delete(h);return}if(d.v7_fetcherPersist&&L1.has(h)){if(j3(e1)||q1(e1)){H2(h,G2(void 0));return}}else{if(j3(e1))if(m1.delete(h),b>R1){H2(h,G2(void 0));return}else return Q.add(h),H2(h,I0(A)),g3(X,e1,!1,{fetcherSubmission:A,preventScrollReset:U});if(q1(e1)){N2(h,y,e1.error);return}}if(e3(e1))throw W1(400,{type:"defer-action"});let v1=v.navigation.location||v.location,V3=$3(n.history,v1,Z.signal),C0=i||o,L2=v.navigation.state!=="idle"?w3(C0,v.navigation.location,a):v.matches;Y(L2,"Didn't find any matches after fetcher action");let S2=++_;$.set(h,S2);let an=I0(A,e1.data);v.fetchers.set(h,an);let[E0,v3]=f7(n.history,v,L2,A,v1,!1,d.v7_skipActionErrorRevalidation,o1,m2,X1,L1,i1,Q,C0,a,[M.route.id,e1]);v3.filter(S1=>S1.key!==h).forEach(S1=>{let b3=S1.key,Je=v.fetchers.get(b3),Dt=I0(void 0,Je?Je.data:void 0);v.fetchers.set(b3,Dt),$2(b3),S1.controller&&m1.set(b3,S1.controller)}),V1({fetchers:new Map(v.fetchers)});let _5=()=>v3.forEach(S1=>$2(S1.key));Z.signal.addEventListener("abort",_5);let{loaderResults:T5,fetcherResults:n1}=await He(v,L2,E0,v3,V3);if(Z.signal.aborted)return;Z.signal.removeEventListener("abort",_5),$.delete(h),m1.delete(h),v3.forEach(S1=>m1.delete(S1.key));let y1=X5(T5);if(y1)return g3(V3,y1.result,!1,{preventScrollReset:U});if(y1=X5(n1),y1)return Q.add(y1.key),g3(V3,y1.result,!1,{preventScrollReset:U});let{loaderData:B3,errors:j0}=y7(v,L2,T5,void 0,v3,n1,d2);if(v.fetchers.has(h)){let S1=G2(e1.data);v.fetchers.set(h,S1)}Ke(S2),v.navigation.state==="loading"&&S2>b?(Y(R,"Expected pending action"),D&&D.abort(),A3(v.navigation.location,{matches:L2,loaderData:B3,errors:j0,fetchers:new Map(v.fetchers)})):(V1({errors:j0,loaderData:x7(v.loaderData,B3,L2,j0),fetchers:new Map(v.fetchers)}),o1=!1)}async function Mt(h,y,k,M,I,V,W,U,A){let F=v.fetchers.get(h);H2(h,I0(A,F?F.data:void 0),{flushSync:W});let B=new AbortController,Z=$3(n.history,k,B.signal);if(V){let e1=await R5(I,k,Z.signal);if(e1.type==="aborted")return;if(e1.type==="error"){N2(h,y,e1.error,{flushSync:W});return}else if(e1.matches)I=e1.matches,M=$0(I,k);else{N2(h,y,W1(404,{pathname:k}),{flushSync:W});return}}m1.set(h,B);let X=_,c1=(await k0("loader",v,Z,[M],I,h))[M.route.id];if(e3(c1)&&(c1=await Te(c1,Z.signal,!0)||c1),m1.get(h)===B&&m1.delete(h),!Z.signal.aborted){if(L1.has(h)){H2(h,G2(void 0));return}if(j3(c1))if(b>X){H2(h,G2(void 0));return}else{Q.add(h),await g3(Z,c1,!1,{preventScrollReset:U});return}if(q1(c1)){N2(h,y,c1.error);return}Y(!e3(c1),"Unhandled fetcher deferred data"),H2(h,G2(c1.data))}}async function g3(h,y,k,M){let{submission:I,fetcherSubmission:V,preventScrollReset:W,replace:U}=M===void 0?{}:M;y.response.headers.has("X-Remix-Revalidate")&&(o1=!0);let A=y.response.headers.get("Location");Y(A,"Expected a Location header on the redirect Response"),A=g7(A,new URL(h.url),a);let F=g5(v.location,A,{_isRedirect:!0});if(r){let e1=!1;if(y.response.headers.has("X-Remix-Reload-Document"))e1=!0;else if(_e.test(A)){const v1=n.history.createURL(A);e1=v1.origin!==e.location.origin||w0(v1.pathname,a)==null}if(e1){U?e.location.replace(A):e.location.assign(A);return}}D=null;let B=U===!0||y.response.headers.has("X-Remix-Replace")?k1.Replace:k1.Push,{formMethod:Z,formAction:X,formEncType:R1}=v.navigation;!I&&!V&&Z&&X&&R1&&(I=C7(v.navigation));let c1=I||V;if(Uo.has(y.response.status)&&c1&&h2(c1.formMethod))await h3(B,F,{submission:d1({},c1,{formAction:A}),preventScrollReset:W||j,enableViewTransition:k?O:void 0});else{let e1=Fn(F,I);await h3(B,F,{overrideNavigation:e1,fetcherSubmission:V,preventScrollReset:W||j,enableViewTransition:k?O:void 0})}}async function k0(h,y,k,M,I,V){let W,U={};try{W=await Qo(s,h,y,k,M,I,V,l,c)}catch(A){return M.forEach(F=>{U[F.route.id]={type:t1.error,error:A}}),U}for(let[A,F]of Object.entries(W))if(Jo(F)){let B=F.result;U[A]={type:t1.redirect,response:Zo(B,k,A,I,a,d.v7_relativeSplatPath)}}else U[A]=await Go(F);return U}async function He(h,y,k,M,I){let V=h.matches,W=k0("loader",h,I,k,y,null),U=Promise.all(M.map(async B=>{if(B.matches&&B.match&&B.controller){let X=(await k0("loader",h,$3(n.history,B.path,B.controller.signal),[B.match],B.matches,B.key))[B.match.route.id];return{[B.key]:X}}else return Promise.resolve({[B.key]:{type:t1.error,error:W1(404,{pathname:B.path})}})})),A=await W,F=(await U).reduce((B,Z)=>Object.assign(B,Z),{});return await Promise.all([ei(y,A,I.signal,V,h.loaderData),ri(y,F,M)]),{loaderResults:A,fetcherResults:F}}function cn(){o1=!0,m2.push(...on()),i1.forEach((h,y)=>{m1.has(y)&&X1.add(y),$2(y)})}function H2(h,y,k){k===void 0&&(k={}),v.fetchers.set(h,y),V1({fetchers:new Map(v.fetchers)},{flushSync:(k&&k.flushSync)===!0})}function N2(h,y,k,M){M===void 0&&(M={});let I=S3(v.matches,y);P5(h),V1({errors:{[I.route.id]:k},fetchers:new Map(v.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function $e(h){return d.v7_fetcherPersist&&(w2.set(h,(w2.get(h)||0)+1),L1.has(h)&&L1.delete(h)),v.fetchers.get(h)||Ao}function P5(h){let y=v.fetchers.get(h);m1.has(h)&&!(y&&y.state==="loading"&&$.has(h))&&$2(h),i1.delete(h),$.delete(h),Q.delete(h),L1.delete(h),X1.delete(h),v.fetchers.delete(h)}function Pt(h){if(d.v7_fetcherPersist){let y=(w2.get(h)||0)-1;y<=0?(w2.delete(h),L1.add(h)):w2.set(h,y)}else P5(h);V1({fetchers:new Map(v.fetchers)})}function $2(h){let y=m1.get(h);y&&(y.abort(),m1.delete(h))}function We(h){for(let y of h){let k=$e(y),M=G2(k.data);v.fetchers.set(y,M)}}function Qe(){let h=[],y=!1;for(let k of Q){let M=v.fetchers.get(k);Y(M,"Expected fetcher: "+k),M.state==="loading"&&(Q.delete(k),h.push(k),y=!0)}return We(h),y}function Ke(h){let y=[];for(let[k,M]of $)if(M<h){let I=v.fetchers.get(k);Y(I,"Expected fetcher: "+k),I.state==="loading"&&($2(k),$.delete(k),y.push(k))}return We(y),y.length>0}function Nt(h,y){let k=v.blockers.get(h)||O0;return A1.get(h)!==y&&A1.set(h,y),k}function Ge(h){v.blockers.delete(h),A1.delete(h)}function N5(h,y){let k=v.blockers.get(h)||O0;Y(k.state==="unblocked"&&y.state==="blocked"||k.state==="blocked"&&y.state==="blocked"||k.state==="blocked"&&y.state==="proceeding"||k.state==="blocked"&&y.state==="unblocked"||k.state==="proceeding"&&y.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+y.state);let M=new Map(v.blockers);M.set(h,y),V1({blockers:M})}function Ze(h){let{currentLocation:y,nextLocation:k,historyAction:M}=h;if(A1.size===0)return;A1.size>1&&g0(!1,"A router only supports one blocker at a time");let I=Array.from(A1.entries()),[V,W]=I[I.length-1],U=v.blockers.get(V);if(!(U&&U.state==="proceeding")&&W({currentLocation:y,nextLocation:k,historyAction:M}))return V}function ln(h){let y=W1(404,{pathname:h}),k=i||o,{matches:M,route:I}=S7(k);return on(),{notFoundMatches:M,route:I,error:y}}function on(h){let y=[];return d2.forEach((k,M)=>{(!h||h(M))&&(k.cancel(),y.push(M),d2.delete(M))}),y}function Lt(h,y,k){if(S=h,P=y,w=k||null,!f&&v.navigation===In){f=!0;let M=Xe(v.location,v.matches);M!=null&&V1({restoreScrollPosition:M})}return()=>{S=null,P=null,w=null}}function Ye(h,y){return w&&w(h,y.map(M=>ho(M,v.loaderData)))||h.key}function Rt(h,y){if(S&&P){let k=Ye(h,y);S[k]=P()}}function Xe(h,y){if(S){let k=Ye(h,y),M=S[k];if(typeof M=="number")return M}return null}function L5(h,y,k){if(z)if(h){if(Object.keys(h[0].params).length>0)return{active:!0,matches:u4(y,k,a,!0)}}else return{active:!0,matches:u4(y,k,a,!0)||[]};return{active:!1,matches:null}}async function R5(h,y,k){if(!z)return{type:"success",matches:h};let M=h;for(;;){let I=i==null,V=i||o,W=l;try{await z({path:y,matches:M,patch:(F,B)=>{k.aborted||h7(F,B,V,W,c)}})}catch(F){return{type:"error",error:F,partialMatches:M}}finally{I&&!k.aborted&&(o=[...o])}if(k.aborted)return{type:"aborted"};let U=w3(V,y,a);if(U)return{type:"success",matches:U};let A=u4(V,y,a,!0);if(!A||M.length===A.length&&M.every((F,B)=>F.route.id===A[B].route.id))return{type:"success",matches:null};M=A}}function _t(h){l={},i=O4(h,c,void 0,l)}function Tt(h,y){let k=i==null;h7(h,y,i||o,l,c),k&&(o=[...o],V1({}))}return L={get basename(){return a},get future(){return d},get state(){return v},get routes(){return o},get window(){return e},initialize:vt,subscribe:xt,enableScrollRestoration:Lt,navigate:Be,fetch:Et,revalidate:wt,createHref:h=>n.history.createHref(h),encodeLocation:h=>n.history.encodeLocation(h),getFetcher:$e,deleteFetcher:Pt,dispose:yt,getBlocker:Nt,deleteBlocker:Ge,patchRoutes:Tt,_internalFetchControllers:m1,_internalActiveDeferreds:d2,_internalSetRoutes:_t},L}function bo(n){return n!=null&&("formData"in n&&n.formData!=null||"body"in n&&n.body!==void 0)}function R6(n,e,r,t,c,l,o,i){let a,s;if(o){a=[];for(let d of e)if(a.push(d),d.route.id===o){s=d;break}}else a=e,s=e[e.length-1];let z=Re(c||".",Le(a,l),w0(n.pathname,r)||n.pathname,i==="path");if(c==null&&(z.search=n.search,z.hash=n.hash),(c==null||c===""||c===".")&&s){let d=De(z.search);if(s.route.index&&!d)z.search=z.search?z.search.replace(/^\?/,"?index&"):"?index";else if(!s.route.index&&d){let p=new URLSearchParams(z.search),x=p.getAll("index");p.delete("index"),x.filter(w=>w).forEach(w=>p.append("index",w));let S=p.toString();z.search=S?"?"+S:""}}return t&&r!=="/"&&(z.pathname=z.pathname==="/"?r:F2([r,z.pathname])),D3(z)}function d7(n,e,r,t){if(!t||!bo(t))return{path:r};if(t.formMethod&&!ni(t.formMethod))return{path:r,error:W1(405,{method:t.formMethod})};let c=()=>({path:r,error:W1(400,{type:"invalid-body"})}),l=t.formMethod||"get",o=n?l.toUpperCase():l.toLowerCase(),i=et(r);if(t.body!==void 0){if(t.formEncType==="text/plain"){if(!h2(o))return c();let p=typeof t.body=="string"?t.body:t.body instanceof FormData||t.body instanceof URLSearchParams?Array.from(t.body.entries()).reduce((x,S)=>{let[w,P]=S;return""+x+w+"="+P+`
`},""):String(t.body);return{path:r,submission:{formMethod:o,formAction:i,formEncType:t.formEncType,formData:void 0,json:void 0,text:p}}}else if(t.formEncType==="application/json"){if(!h2(o))return c();try{let p=typeof t.body=="string"?JSON.parse(t.body):t.body;return{path:r,submission:{formMethod:o,formAction:i,formEncType:t.formEncType,formData:void 0,json:p,text:void 0}}}catch{return c()}}}Y(typeof FormData=="function","FormData is not available in this environment");let a,s;if(t.formData)a=T6(t.formData),s=t.formData;else if(t.body instanceof FormData)a=T6(t.body),s=t.body;else if(t.body instanceof URLSearchParams)a=t.body,s=v7(a);else if(t.body==null)a=new URLSearchParams,s=new FormData;else try{a=new URLSearchParams(t.body),s=v7(a)}catch{return c()}let z={formMethod:o,formAction:i,formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:s,json:void 0,text:void 0};if(h2(z.formMethod))return{path:r,submission:z};let d=p3(r);return e&&d.search&&De(d.search)&&a.append("index",""),d.search="?"+a,{path:D3(d),submission:z}}function z7(n,e,r){r===void 0&&(r=!1);let t=n.findIndex(c=>c.route.id===e);return t>=0?n.slice(0,r?t+1:t):n}function f7(n,e,r,t,c,l,o,i,a,s,z,d,p,x,S,w){let P=w?q1(w[1])?w[1].error:w[1].data:void 0,f=n.createURL(e.location),m=n.createURL(c),g=r;l&&e.errors?g=z7(r,Object.keys(e.errors)[0],!0):w&&q1(w[1])&&(g=z7(r,w[0]));let C=w?w[1].statusCode:void 0,L=o&&C&&C>=400,v=g.filter((j,D)=>{let{route:O}=j;if(O.lazy)return!0;if(O.loader==null)return!1;if(l)return _6(O,e.loaderData,e.errors);if(Ho(e.loaderData,e.matches[D],j)||a.some(f1=>f1===j.route.id))return!0;let q=e.matches[D],H=j;return p7(j,d1({currentUrl:f,currentParams:q.params,nextUrl:m,nextParams:H.params},t,{actionResult:P,actionStatus:C,defaultShouldRevalidate:L?!1:i||f.pathname+f.search===m.pathname+m.search||f.search!==m.search||q9(q,H)}))}),R=[];return d.forEach((j,D)=>{if(l||!r.some(o1=>o1.route.id===j.routeId)||z.has(D))return;let O=w3(x,j.path,S);if(!O){R.push({key:D,routeId:j.routeId,path:j.path,matches:null,match:null,controller:null});return}let q=e.fetchers.get(D),H=$0(O,j.path),f1=!1;p.has(D)?f1=!1:s.has(D)?(s.delete(D),f1=!0):q&&q.state!=="idle"&&q.data===void 0?f1=i:f1=p7(H,d1({currentUrl:f,currentParams:e.matches[e.matches.length-1].params,nextUrl:m,nextParams:r[r.length-1].params},t,{actionResult:P,actionStatus:C,defaultShouldRevalidate:L?!1:i})),f1&&R.push({key:D,routeId:j.routeId,path:j.path,matches:O,match:H,controller:new AbortController})}),[v,R]}function _6(n,e,r){if(n.lazy)return!0;if(!n.loader)return!1;let t=e!=null&&e[n.id]!==void 0,c=r!=null&&r[n.id]!==void 0;return!t&&c?!1:typeof n.loader=="function"&&n.loader.hydrate===!0?!0:!t&&!c}function Ho(n,e,r){let t=!e||r.route.id!==e.route.id,c=n[r.route.id]===void 0;return t||c}function q9(n,e){let r=n.route.path;return n.pathname!==e.pathname||r!=null&&r.endsWith("*")&&n.params["*"]!==e.params["*"]}function p7(n,e){if(n.route.shouldRevalidate){let r=n.route.shouldRevalidate(e);if(typeof r=="boolean")return r}return e.defaultShouldRevalidate}function h7(n,e,r,t,c){var l;let o;if(n){let s=t[n];Y(s,"No route found to patch children into: routeId = "+n),s.children||(s.children=[]),o=s.children}else o=r;let i=e.filter(s=>!o.some(z=>nt(s,z))),a=O4(i,c,[n||"_","patch",String(((l=o)==null?void 0:l.length)||"0")],t);o.push(...a)}function nt(n,e){return"id"in n&&"id"in e&&n.id===e.id?!0:n.index===e.index&&n.path===e.path&&n.caseSensitive===e.caseSensitive?(!n.children||n.children.length===0)&&(!e.children||e.children.length===0)?!0:n.children.every((r,t)=>{var c;return(c=e.children)==null?void 0:c.some(l=>nt(r,l))}):!1}async function $o(n,e,r){if(!n.lazy)return;let t=await n.lazy();if(!n.lazy)return;let c=r[n.id];Y(c,"No route found in manifest");let l={};for(let o in t){let a=c[o]!==void 0&&o!=="hasErrorBoundary";g0(!a,'Route "'+c.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!a&&!fo.has(o)&&(l[o]=t[o])}Object.assign(c,l),Object.assign(c,d1({},e(c),{lazy:void 0}))}async function Wo(n){let{matches:e}=n,r=e.filter(c=>c.shouldLoad);return(await Promise.all(r.map(c=>c.resolve()))).reduce((c,l,o)=>Object.assign(c,{[r[o].route.id]:l}),{})}async function Qo(n,e,r,t,c,l,o,i,a,s){let z=l.map(x=>x.route.lazy?$o(x.route,a,i):void 0),d=l.map((x,S)=>{let w=z[S],P=c.some(m=>m.route.id===x.route.id);return d1({},x,{shouldLoad:P,resolve:async m=>(m&&t.method==="GET"&&(x.route.lazy||x.route.loader)&&(P=!0),P?Ko(e,t,x,w,m,s):Promise.resolve({type:t1.data,result:void 0}))})}),p=await n({matches:d,request:t,params:l[0].params,fetcherKey:o,context:s});try{await Promise.all(z)}catch{}return p}async function Ko(n,e,r,t,c,l){let o,i,a=s=>{let z,d=new Promise((S,w)=>z=w);i=()=>z(),e.signal.addEventListener("abort",i);let p=S=>typeof s!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+n+'" [routeId: '+r.route.id+"]"))):s({request:e,params:r.params,context:l},...S!==void 0?[S]:[]),x=(async()=>{try{return{type:"data",result:await(c?c(w=>p(w)):p())}}catch(S){return{type:"error",result:S}}})();return Promise.race([x,d])};try{let s=r.route[n];if(t)if(s){let z,[d]=await Promise.all([a(s).catch(p=>{z=p}),t]);if(z!==void 0)throw z;o=d}else if(await t,s=r.route[n],s)o=await a(s);else if(n==="action"){let z=new URL(e.url),d=z.pathname+z.search;throw W1(405,{method:e.method,pathname:d,routeId:r.route.id})}else return{type:t1.data,result:void 0};else if(s)o=await a(s);else{let z=new URL(e.url),d=z.pathname+z.search;throw W1(404,{pathname:d})}Y(o.result!==void 0,"You defined "+(n==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+n+"` ")+"function. Please return a value or `null`.")}catch(s){return{type:t1.error,result:s}}finally{i&&e.signal.removeEventListener("abort",i)}return o}async function Go(n){let{result:e,type:r}=n;if(rt(e)){let s;try{let z=e.headers.get("Content-Type");z&&/\bapplication\/json\b/.test(z)?e.body==null?s=null:s=await e.json():s=await e.text()}catch(z){return{type:t1.error,error:z}}return r===t1.error?{type:t1.error,error:new I4(e.status,e.statusText,s),statusCode:e.status,headers:e.headers}:{type:t1.data,data:s,statusCode:e.status,headers:e.headers}}if(r===t1.error){if(k7(e)){var t;if(e.data instanceof Error){var c;return{type:t1.error,error:e.data,statusCode:(c=e.init)==null?void 0:c.status}}e=new I4(((t=e.init)==null?void 0:t.status)||500,void 0,e.data)}return{type:t1.error,error:e,statusCode:en(e)?e.status:void 0}}if(qo(e)){var l,o;return{type:t1.deferred,deferredData:e,statusCode:(l=e.init)==null?void 0:l.status,headers:((o=e.init)==null?void 0:o.headers)&&new Headers(e.init.headers)}}if(k7(e)){var i,a;return{type:t1.data,data:e.data,statusCode:(i=e.init)==null?void 0:i.status,headers:(a=e.init)!=null&&a.headers?new Headers(e.init.headers):void 0}}return{type:t1.data,data:e}}function Zo(n,e,r,t,c,l){let o=n.headers.get("Location");if(Y(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!_e.test(o)){let i=t.slice(0,t.findIndex(a=>a.route.id===r)+1);o=R6(new URL(e.url),i,c,!0,o,l),n.headers.set("Location",o)}return n}function g7(n,e,r){if(_e.test(n)){let t=n,c=t.startsWith("//")?new URL(e.protocol+t):new URL(t),l=w0(c.pathname,r)!=null;if(c.origin===e.origin&&l)return c.pathname+c.search+c.hash}return n}function $3(n,e,r,t){let c=n.createURL(et(e)).toString(),l={signal:r};if(t&&h2(t.formMethod)){let{formMethod:o,formEncType:i}=t;l.method=o.toUpperCase(),i==="application/json"?(l.headers=new Headers({"Content-Type":i}),l.body=JSON.stringify(t.json)):i==="text/plain"?l.body=t.text:i==="application/x-www-form-urlencoded"&&t.formData?l.body=T6(t.formData):l.body=t.formData}return new Request(c,l)}function T6(n){let e=new URLSearchParams;for(let[r,t]of n.entries())e.append(r,typeof t=="string"?t:t.name);return e}function v7(n){let e=new FormData;for(let[r,t]of n.entries())e.append(r,t);return e}function Yo(n,e,r,t,c){let l={},o=null,i,a=!1,s={},z=r&&q1(r[1])?r[1].error:void 0;return n.forEach(d=>{if(!(d.route.id in e))return;let p=d.route.id,x=e[p];if(Y(!j3(x),"Cannot handle redirect results in processLoaderData"),q1(x)){let S=x.error;z!==void 0&&(S=z,z=void 0),o=o||{};{let w=S3(n,p);o[w.route.id]==null&&(o[w.route.id]=S)}l[p]=void 0,a||(a=!0,i=en(x.error)?x.error.status:500),x.headers&&(s[p]=x.headers)}else e3(x)?(t.set(p,x.deferredData),l[p]=x.deferredData.data,x.statusCode!=null&&x.statusCode!==200&&!a&&(i=x.statusCode),x.headers&&(s[p]=x.headers)):(l[p]=x.data,x.statusCode&&x.statusCode!==200&&!a&&(i=x.statusCode),x.headers&&(s[p]=x.headers))}),z!==void 0&&r&&(o={[r[0]]:z},l[r[0]]=void 0),{loaderData:l,errors:o,statusCode:i||200,loaderHeaders:s}}function y7(n,e,r,t,c,l,o){let{loaderData:i,errors:a}=Yo(e,r,t,o);return c.forEach(s=>{let{key:z,match:d,controller:p}=s,x=l[z];if(Y(x,"Did not find corresponding fetcher result"),!(p&&p.signal.aborted))if(q1(x)){let S=S3(n.matches,d==null?void 0:d.route.id);a&&a[S.route.id]||(a=d1({},a,{[S.route.id]:x.error})),n.fetchers.delete(z)}else if(j3(x))Y(!1,"Unhandled fetcher revalidation redirect");else if(e3(x))Y(!1,"Unhandled fetcher deferred data");else{let S=G2(x.data);n.fetchers.set(z,S)}}),{loaderData:i,errors:a}}function x7(n,e,r,t){let c=d1({},e);for(let l of r){let o=l.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(c[o]=e[o]):n[o]!==void 0&&l.route.loader&&(c[o]=n[o]),t&&t.hasOwnProperty(o))break}return c}function w7(n){return n?q1(n[1])?{actionData:{}}:{actionData:{[n[0]]:n[1].data}}:{}}function S3(n,e){return(e?n.slice(0,n.findIndex(t=>t.route.id===e)+1):[...n]).reverse().find(t=>t.route.hasErrorBoundary===!0)||n[0]}function S7(n){let e=n.length===1?n[0]:n.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function W1(n,e){let{pathname:r,routeId:t,method:c,type:l,message:o}=e===void 0?{}:e,i="Unknown Server Error",a="Unknown @remix-run/router error";return n===400?(i="Bad Request",c&&r&&t?a="You made a "+c+' request to "'+r+'" but '+('did not provide a `loader` for route "'+t+'", ')+"so there is no way to handle the request.":l==="defer-action"?a="defer() is not supported in actions":l==="invalid-body"&&(a="Unable to encode submission body")):n===403?(i="Forbidden",a='Route "'+t+'" does not match URL "'+r+'"'):n===404?(i="Not Found",a='No route matches URL "'+r+'"'):n===405&&(i="Method Not Allowed",c&&r&&t?a="You made a "+c.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+t+'", ')+"so there is no way to handle the request.":c&&(a='Invalid request method "'+c.toUpperCase()+'"')),new I4(n||500,i,new Error(a),!0)}function X5(n){let e=Object.entries(n);for(let r=e.length-1;r>=0;r--){let[t,c]=e[r];if(j3(c))return{key:t,result:c}}}function et(n){let e=typeof n=="string"?p3(n):n;return D3(d1({},e,{hash:""}))}function Xo(n,e){return n.pathname!==e.pathname||n.search!==e.search?!1:n.hash===""?e.hash!=="":n.hash===e.hash?!0:e.hash!==""}function Jo(n){return rt(n.result)&&Fo.has(n.result.status)}function e3(n){return n.type===t1.deferred}function q1(n){return n.type===t1.error}function j3(n){return(n&&n.type)===t1.redirect}function k7(n){return typeof n=="object"&&n!=null&&"type"in n&&"data"in n&&"init"in n&&n.type==="DataWithResponseInit"}function qo(n){let e=n;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function rt(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.headers=="object"&&typeof n.body<"u"}function ni(n){return Io.has(n.toLowerCase())}function h2(n){return Do.has(n.toLowerCase())}async function ei(n,e,r,t,c){let l=Object.entries(e);for(let o=0;o<l.length;o++){let[i,a]=l[o],s=n.find(p=>(p==null?void 0:p.route.id)===i);if(!s)continue;let z=t.find(p=>p.route.id===s.route.id),d=z!=null&&!q9(z,s)&&(c&&c[s.route.id])!==void 0;e3(a)&&d&&await Te(a,r,!1).then(p=>{p&&(e[i]=p)})}}async function ri(n,e,r){for(let t=0;t<r.length;t++){let{key:c,routeId:l,controller:o}=r[t],i=e[c];n.find(s=>(s==null?void 0:s.route.id)===l)&&e3(i)&&(Y(o,"Expected an AbortController for revalidating fetcher deferred result"),await Te(i,o.signal,!0).then(s=>{s&&(e[c]=s)}))}}async function Te(n,e,r){if(r===void 0&&(r=!1),!await n.deferredData.resolveData(e)){if(r)try{return{type:t1.data,data:n.deferredData.unwrappedData}}catch(c){return{type:t1.error,error:c}}return{type:t1.data,data:n.deferredData.data}}}function De(n){return new URLSearchParams(n).getAll("index").some(e=>e==="")}function $0(n,e){let r=typeof e=="string"?p3(e).search:e.search;if(n[n.length-1].route.index&&De(r||""))return n[n.length-1];let t=Y9(n);return t[t.length-1]}function C7(n){let{formMethod:e,formAction:r,formEncType:t,text:c,formData:l,json:o}=n;if(!(!e||!r||!t)){if(c!=null)return{formMethod:e,formAction:r,formEncType:t,formData:void 0,json:void 0,text:c};if(l!=null)return{formMethod:e,formAction:r,formEncType:t,formData:l,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:r,formEncType:t,formData:void 0,json:o,text:void 0}}}function Fn(n,e){return e?{state:"loading",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ti(n,e){return{state:"submitting",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function I0(n,e){return n?{state:"loading",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ci(n,e){return{state:"submitting",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e?e.data:void 0}}function G2(n){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function li(n,e){try{let r=n.sessionStorage.getItem(J9);if(r){let t=JSON.parse(r);for(let[c,l]of Object.entries(t||{}))l&&Array.isArray(l)&&e.set(c,new Set(l||[]))}}catch{}}function oi(n,e){if(e.size>0){let r={};for(let[t,c]of e)r[t]=[...c];try{n.sessionStorage.setItem(J9,JSON.stringify(r))}catch(t){g0(!1,"Failed to save applied view transitions in sessionStorage ("+t+").")}}}/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function F4(){return F4=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},F4.apply(this,arguments)}const rn=E.createContext(null),tt=E.createContext(null),F3=E.createContext(null),Oe=E.createContext(null),U3=E.createContext({outlet:null,matches:[],isDataRoute:!1}),ct=E.createContext(null);function ii(n,e){let{relative:r}=e===void 0?{}:e;E5()||Y(!1);let{basename:t,navigator:c}=E.useContext(F3),{hash:l,pathname:o,search:i}=ot(n,{relative:r}),a=o;return t!=="/"&&(a=o==="/"?t:F2([t,o])),c.createHref({pathname:a,search:i,hash:l})}function E5(){return E.useContext(Oe)!=null}function j5(){return E5()||Y(!1),E.useContext(Oe).location}function lt(n){E.useContext(F3).static||E.useLayoutEffect(n)}function ai(){let{isDataRoute:n}=E.useContext(U3);return n?xi():si()}function si(){E5()||Y(!1);let n=E.useContext(rn),{basename:e,future:r,navigator:t}=E.useContext(F3),{matches:c}=E.useContext(U3),{pathname:l}=j5(),o=JSON.stringify(Le(c,r.v7_relativeSplatPath)),i=E.useRef(!1);return lt(()=>{i.current=!0}),E.useCallback(function(s,z){if(z===void 0&&(z={}),!i.current)return;if(typeof s=="number"){t.go(s);return}let d=Re(s,JSON.parse(o),l,z.relative==="path");n==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:F2([e,d.pathname])),(z.replace?t.replace:t.push)(d,z.state,z)},[e,t,o,l,n])}function ot(n,e){let{relative:r}=e===void 0?{}:e,{future:t}=E.useContext(F3),{matches:c}=E.useContext(U3),{pathname:l}=j5(),o=JSON.stringify(Le(c,t.v7_relativeSplatPath));return E.useMemo(()=>Re(n,JSON.parse(o),l,r==="path"),[n,o,l,r])}function ui(n,e,r,t){E5()||Y(!1);let{navigator:c}=E.useContext(F3),{matches:l}=E.useContext(U3),o=l[l.length-1],i=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let s=j5(),z;z=s;let d=z.pathname||"/",p=d;if(a!=="/"){let w=a.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(w.length).join("/")}let x=w3(n,{pathname:p});return pi(x&&x.map(w=>Object.assign({},w,{params:Object.assign({},i,w.params),pathname:F2([a,c.encodeLocation?c.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:F2([a,c.encodeLocation?c.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),l,r,t)}function mi(){let n=yi(),e=en(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),r?E.createElement("pre",{style:c},r):null,null)}const di=E.createElement(mi,null);class zi extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?E.createElement(U3.Provider,{value:this.props.routeContext},E.createElement(ct.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fi(n){let{routeContext:e,match:r,children:t}=n,c=E.useContext(rn);return c&&c.static&&c.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=r.route.id),E.createElement(U3.Provider,{value:e},t)}function pi(n,e,r,t){var c;if(e===void 0&&(e=[]),r===void 0&&(r=null),t===void 0&&(t=null),n==null){var l;if(!r)return null;if(r.errors)n=r.matches;else if((l=t)!=null&&l.v7_partialHydration&&e.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let o=n,i=(c=r)==null?void 0:c.errors;if(i!=null){let z=o.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);z>=0||Y(!1),o=o.slice(0,Math.min(o.length,z+1))}let a=!1,s=-1;if(r&&t&&t.v7_partialHydration)for(let z=0;z<o.length;z++){let d=o[z];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(s=z),d.route.id){let{loaderData:p,errors:x}=r,S=d.route.loader&&p[d.route.id]===void 0&&(!x||x[d.route.id]===void 0);if(d.route.lazy||S){a=!0,s>=0?o=o.slice(0,s+1):o=[o[0]];break}}}return o.reduceRight((z,d,p)=>{let x,S=!1,w=null,P=null;r&&(x=i&&d.route.id?i[d.route.id]:void 0,w=d.route.errorElement||di,a&&(s<0&&p===0?(wi("route-fallback"),S=!0,P=null):s===p&&(S=!0,P=d.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,p+1)),m=()=>{let g;return x?g=w:S?g=P:d.route.Component?g=E.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=z,E.createElement(fi,{match:d,routeContext:{outlet:z,matches:f,isDataRoute:r!=null},children:g})};return r&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?E.createElement(zi,{location:r.location,revalidation:r.revalidation,component:w,error:x,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var it=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(it||{}),U4=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(U4||{});function hi(n){let e=E.useContext(rn);return e||Y(!1),e}function gi(n){let e=E.useContext(tt);return e||Y(!1),e}function vi(n){let e=E.useContext(U3);return e||Y(!1),e}function at(n){let e=vi(),r=e.matches[e.matches.length-1];return r.route.id||Y(!1),r.route.id}function yi(){var n;let e=E.useContext(ct),r=gi(U4.UseRouteError),t=at(U4.UseRouteError);return e!==void 0?e:(n=r.errors)==null?void 0:n[t]}function xi(){let{router:n}=hi(it.UseNavigateStable),e=at(U4.UseNavigateStable),r=E.useRef(!1);return lt(()=>{r.current=!0}),E.useCallback(function(c,l){l===void 0&&(l={}),r.current&&(typeof c=="number"?n.navigate(c):n.navigate(c,F4({fromRouteId:e},l)))},[n,e])}const E7={};function wi(n,e,r){E7[n]||(E7[n]=!0)}function Si(n){let{basename:e="/",children:r=null,location:t,navigationType:c=k1.Pop,navigator:l,static:o=!1,future:i}=n;E5()&&Y(!1);let a=e.replace(/^\/*/,"/"),s=E.useMemo(()=>({basename:a,navigator:l,static:o,future:F4({v7_relativeSplatPath:!1},i)}),[a,i,l,o]);typeof t=="string"&&(t=p3(t));let{pathname:z="/",search:d="",hash:p="",state:x=null,key:S="default"}=t,w=E.useMemo(()=>{let P=w0(z,a);return P==null?null:{location:{pathname:P,search:d,hash:p,state:x,key:S},navigationType:c}},[a,z,d,p,x,S,c]);return w==null?null:E.createElement(F3.Provider,{value:s},E.createElement(Oe.Provider,{children:r,value:w}))}new Promise(()=>{});function ki(n){let e={hasErrorBoundary:n.ErrorBoundary!=null||n.errorElement!=null};return n.Component&&Object.assign(e,{element:E.createElement(n.Component),Component:void 0}),n.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:E.createElement(n.HydrateFallback),HydrateFallback:void 0}),n.ErrorBoundary&&Object.assign(e,{errorElement:E.createElement(n.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function v5(){return v5=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},v5.apply(this,arguments)}function Ci(n,e){if(n==null)return{};var r={},t=Object.keys(n),c,l;for(l=0;l<t.length;l++)c=t[l],!(e.indexOf(c)>=0)&&(r[c]=n[c]);return r}function Ei(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ji(n,e){return n.button===0&&(!e||e==="_self")&&!Ei(n)}const Mi=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Pi="6";try{window.__reactRouterVersion=Pi}catch{}function Ni(n,e){return Bo({basename:void 0,future:v5({},void 0,{v7_prependBasename:!0}),history:uo({window:void 0}),hydrationData:Li(),routes:n,mapRouteProperties:ki,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function Li(){var n;let e=(n=window)==null?void 0:n.__staticRouterHydrationData;return e&&e.errors&&(e=v5({},e,{errors:Ri(e.errors)})),e}function Ri(n){if(!n)return null;let e=Object.entries(n),r={};for(let[t,c]of e)if(c&&c.__type==="RouteErrorResponse")r[t]=new I4(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let l=window[c.__subType];if(typeof l=="function")try{let o=new l(c.message);o.stack="",r[t]=o}catch{}}if(r[t]==null){let l=new Error(c.message);l.stack="",r[t]=l}}else r[t]=c;return r}const _i=E.createContext({isTransitioning:!1}),Ti=E.createContext(new Map),Di="startTransition",j7=Xt[Di],Oi="flushSync",M7=so[Oi];function Ii(n){j7?j7(n):n()}function F0(n){M7?M7(n):n()}class Fi{constructor(){this.status="pending",this.promise=new Promise((e,r)=>{this.resolve=t=>{this.status==="pending"&&(this.status="resolved",e(t))},this.reject=t=>{this.status==="pending"&&(this.status="rejected",r(t))}})}}function Ui(n){let{fallbackElement:e,router:r,future:t}=n,[c,l]=E.useState(r.state),[o,i]=E.useState(),[a,s]=E.useState({isTransitioning:!1}),[z,d]=E.useState(),[p,x]=E.useState(),[S,w]=E.useState(),P=E.useRef(new Map),{v7_startTransition:f}=t||{},m=E.useCallback(j=>{f?Ii(j):j()},[f]),g=E.useCallback((j,D)=>{let{deletedFetchers:O,flushSync:q,viewTransitionOpts:H}=D;O.forEach(o1=>P.current.delete(o1)),j.fetchers.forEach((o1,m2)=>{o1.data!==void 0&&P.current.set(m2,o1.data)});let f1=r.window==null||r.window.document==null||typeof r.window.document.startViewTransition!="function";if(!H||f1){q?F0(()=>l(j)):m(()=>l(j));return}if(q){F0(()=>{p&&(z&&z.resolve(),p.skipTransition()),s({isTransitioning:!0,flushSync:!0,currentLocation:H.currentLocation,nextLocation:H.nextLocation})});let o1=r.window.document.startViewTransition(()=>{F0(()=>l(j))});o1.finished.finally(()=>{F0(()=>{d(void 0),x(void 0),i(void 0),s({isTransitioning:!1})})}),F0(()=>x(o1));return}p?(z&&z.resolve(),p.skipTransition(),w({state:j,currentLocation:H.currentLocation,nextLocation:H.nextLocation})):(i(j),s({isTransitioning:!0,flushSync:!1,currentLocation:H.currentLocation,nextLocation:H.nextLocation}))},[r.window,p,z,P,m]);E.useLayoutEffect(()=>r.subscribe(g),[r,g]),E.useEffect(()=>{a.isTransitioning&&!a.flushSync&&d(new Fi)},[a]),E.useEffect(()=>{if(z&&o&&r.window){let j=o,D=z.promise,O=r.window.document.startViewTransition(async()=>{m(()=>l(j)),await D});O.finished.finally(()=>{d(void 0),x(void 0),i(void 0),s({isTransitioning:!1})}),x(O)}},[m,o,z,r.window]),E.useEffect(()=>{z&&o&&c.location.key===o.location.key&&z.resolve()},[z,p,c.location,o]),E.useEffect(()=>{!a.isTransitioning&&S&&(i(S.state),s({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),w(void 0))},[a.isTransitioning,S]),E.useEffect(()=>{},[]);let C=E.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:j=>r.navigate(j),push:(j,D,O)=>r.navigate(j,{state:D,preventScrollReset:O==null?void 0:O.preventScrollReset}),replace:(j,D,O)=>r.navigate(j,{replace:!0,state:D,preventScrollReset:O==null?void 0:O.preventScrollReset})}),[r]),L=r.basename||"/",v=E.useMemo(()=>({router:r,navigator:C,static:!1,basename:L}),[r,C,L]),R=E.useMemo(()=>({v7_relativeSplatPath:r.future.v7_relativeSplatPath}),[r.future.v7_relativeSplatPath]);return E.createElement(E.Fragment,null,E.createElement(rn.Provider,{value:v},E.createElement(tt.Provider,{value:c},E.createElement(Ti.Provider,{value:P.current},E.createElement(_i.Provider,{value:a},E.createElement(Si,{basename:L,location:c.location,navigationType:c.historyAction,navigator:C,future:R},c.initialized||r.future.v7_partialHydration?E.createElement(Ai,{routes:r.routes,future:r.future,state:c}):e))))),null)}const Ai=E.memo(Vi);function Vi(n){let{routes:e,future:r,state:t}=n;return ui(e,void 0,t,r)}const Bi=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bi=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M5=E.forwardRef(function(e,r){let{onClick:t,relative:c,reloadDocument:l,replace:o,state:i,target:a,to:s,preventScrollReset:z,viewTransition:d}=e,p=Ci(e,Mi),{basename:x}=E.useContext(F3),S,w=!1;if(typeof s=="string"&&bi.test(s)&&(S=s,Bi))try{let g=new URL(window.location.href),C=s.startsWith("//")?new URL(g.protocol+s):new URL(s),L=w0(C.pathname,x);C.origin===g.origin&&L!=null?s=L+C.search+C.hash:w=!0}catch{}let P=ii(s,{relative:c}),f=Hi(s,{replace:o,state:i,target:a,preventScrollReset:z,relative:c,viewTransition:d});function m(g){t&&t(g),g.defaultPrevented||f(g)}return E.createElement("a",v5({},p,{href:S||P,onClick:w||l?t:m,ref:r,target:a}))});var P7;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(P7||(P7={}));var N7;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(N7||(N7={}));function Hi(n,e){let{target:r,replace:t,state:c,preventScrollReset:l,relative:o,viewTransition:i}=e===void 0?{}:e,a=ai(),s=j5(),z=ot(n,{relative:o});return E.useCallback(d=>{if(ji(d,r)){d.preventDefault();let p=t!==void 0?t:D3(s)===D3(z);a(n,{replace:p,state:c,preventScrollReset:l,relative:o,viewTransition:i})}},[s,a,z,t,c,r,n,l,o,i])}const Ie="-",$i=n=>{const e=Qi(n),{conflictingClassGroups:r,conflictingClassGroupModifiers:t}=n;return{getClassGroupId:o=>{const i=o.split(Ie);return i[0]===""&&i.length!==1&&i.shift(),st(i,e)||Wi(o)},getConflictingClassGroupIds:(o,i)=>{const a=r[o]||[];return i&&t[o]?[...a,...t[o]]:a}}},st=(n,e)=>{var o;if(n.length===0)return e.classGroupId;const r=n[0],t=e.nextPart.get(r),c=t?st(n.slice(1),t):void 0;if(c)return c;if(e.validators.length===0)return;const l=n.join(Ie);return(o=e.validators.find(({validator:i})=>i(l)))==null?void 0:o.classGroupId},L7=/^\[(.+)\]$/,Wi=n=>{if(L7.test(n)){const e=L7.exec(n)[1],r=e==null?void 0:e.substring(0,e.indexOf(":"));if(r)return"arbitrary.."+r}},Qi=n=>{const{theme:e,prefix:r}=n,t={nextPart:new Map,validators:[]};return Gi(Object.entries(n.classGroups),r).forEach(([l,o])=>{D6(o,t,l,e)}),t},D6=(n,e,r,t)=>{n.forEach(c=>{if(typeof c=="string"){const l=c===""?e:R7(e,c);l.classGroupId=r;return}if(typeof c=="function"){if(Ki(c)){D6(c(t),e,r,t);return}e.validators.push({validator:c,classGroupId:r});return}Object.entries(c).forEach(([l,o])=>{D6(o,R7(e,l),r,t)})})},R7=(n,e)=>{let r=n;return e.split(Ie).forEach(t=>{r.nextPart.has(t)||r.nextPart.set(t,{nextPart:new Map,validators:[]}),r=r.nextPart.get(t)}),r},Ki=n=>n.isThemeGetter,Gi=(n,e)=>e?n.map(([r,t])=>{const c=t.map(l=>typeof l=="string"?e+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([o,i])=>[e+o,i])):l);return[r,c]}):n,Zi=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,r=new Map,t=new Map;const c=(l,o)=>{r.set(l,o),e++,e>n&&(e=0,t=r,r=new Map)};return{get(l){let o=r.get(l);if(o!==void 0)return o;if((o=t.get(l))!==void 0)return c(l,o),o},set(l,o){r.has(l)?r.set(l,o):c(l,o)}}},ut="!",Yi=n=>{const{separator:e,experimentalParseClassName:r}=n,t=e.length===1,c=e[0],l=e.length,o=i=>{const a=[];let s=0,z=0,d;for(let P=0;P<i.length;P++){let f=i[P];if(s===0){if(f===c&&(t||i.slice(P,P+l)===e)){a.push(i.slice(z,P)),z=P+l;continue}if(f==="/"){d=P;continue}}f==="["?s++:f==="]"&&s--}const p=a.length===0?i:i.substring(z),x=p.startsWith(ut),S=x?p.substring(1):p,w=d&&d>z?d-z:void 0;return{modifiers:a,hasImportantModifier:x,baseClassName:S,maybePostfixModifierPosition:w}};return r?i=>r({className:i,parseClassName:o}):o},Xi=n=>{if(n.length<=1)return n;const e=[];let r=[];return n.forEach(t=>{t[0]==="["?(e.push(...r.sort(),t),r=[]):r.push(t)}),e.push(...r.sort()),e},Ji=n=>({cache:Zi(n.cacheSize),parseClassName:Yi(n),...$i(n)}),qi=/\s+/,na=(n,e)=>{const{parseClassName:r,getClassGroupId:t,getConflictingClassGroupIds:c}=e,l=[],o=n.trim().split(qi);let i="";for(let a=o.length-1;a>=0;a-=1){const s=o[a],{modifiers:z,hasImportantModifier:d,baseClassName:p,maybePostfixModifierPosition:x}=r(s);let S=!!x,w=t(S?p.substring(0,x):p);if(!w){if(!S){i=s+(i.length>0?" "+i:i);continue}if(w=t(p),!w){i=s+(i.length>0?" "+i:i);continue}S=!1}const P=Xi(z).join(":"),f=d?P+ut:P,m=f+w;if(l.includes(m))continue;l.push(m);const g=c(w,S);for(let C=0;C<g.length;++C){const L=g[C];l.push(f+L)}i=s+(i.length>0?" "+i:i)}return i};function ea(){let n=0,e,r,t="";for(;n<arguments.length;)(e=arguments[n++])&&(r=mt(e))&&(t&&(t+=" "),t+=r);return t}const mt=n=>{if(typeof n=="string")return n;let e,r="";for(let t=0;t<n.length;t++)n[t]&&(e=mt(n[t]))&&(r&&(r+=" "),r+=e);return r};function ra(n,...e){let r,t,c,l=o;function o(a){const s=e.reduce((z,d)=>d(z),n());return r=Ji(s),t=r.cache.get,c=r.cache.set,l=i,i(a)}function i(a){const s=t(a);if(s)return s;const z=na(a,r);return c(a,z),z}return function(){return l(ea.apply(null,arguments))}}const a1=n=>{const e=r=>r[n]||[];return e.isThemeGetter=!0,e},dt=/^\[(?:([a-z-]+):)?(.+)\]$/i,ta=/^\d+\/\d+$/,ca=new Set(["px","full","screen"]),la=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,oa=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ia=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,aa=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,sa=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,R2=n=>s0(n)||ca.has(n)||ta.test(n),Q2=n=>S0(n,"length",ga),s0=n=>!!n&&!Number.isNaN(Number(n)),Un=n=>S0(n,"number",s0),U0=n=>!!n&&Number.isInteger(Number(n)),ua=n=>n.endsWith("%")&&s0(n.slice(0,-1)),K=n=>dt.test(n),K2=n=>la.test(n),ma=new Set(["length","size","percentage"]),da=n=>S0(n,ma,zt),za=n=>S0(n,"position",zt),fa=new Set(["image","url"]),pa=n=>S0(n,fa,ya),ha=n=>S0(n,"",va),A0=()=>!0,S0=(n,e,r)=>{const t=dt.exec(n);return t?t[1]?typeof e=="string"?t[1]===e:e.has(t[1]):r(t[2]):!1},ga=n=>oa.test(n)&&!ia.test(n),zt=()=>!1,va=n=>aa.test(n),ya=n=>sa.test(n),xa=()=>{const n=a1("colors"),e=a1("spacing"),r=a1("blur"),t=a1("brightness"),c=a1("borderColor"),l=a1("borderRadius"),o=a1("borderSpacing"),i=a1("borderWidth"),a=a1("contrast"),s=a1("grayscale"),z=a1("hueRotate"),d=a1("invert"),p=a1("gap"),x=a1("gradientColorStops"),S=a1("gradientColorStopPositions"),w=a1("inset"),P=a1("margin"),f=a1("opacity"),m=a1("padding"),g=a1("saturate"),C=a1("scale"),L=a1("sepia"),v=a1("skew"),R=a1("space"),j=a1("translate"),D=()=>["auto","contain","none"],O=()=>["auto","hidden","clip","visible","scroll"],q=()=>["auto",K,e],H=()=>[K,e],f1=()=>["",R2,Q2],o1=()=>["auto",s0,K],m2=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],X1=()=>["solid","dashed","dotted","double","none"],m1=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],_=()=>["start","end","center","between","around","evenly","stretch"],b=()=>["","0",K],$=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>[s0,K];return{cacheSize:500,separator:":",theme:{colors:[A0],spacing:[R2,Q2],blur:["none","",K2,K],brightness:Q(),borderColor:[n],borderRadius:["none","","full",K2,K],borderSpacing:H(),borderWidth:f1(),contrast:Q(),grayscale:b(),hueRotate:Q(),invert:b(),gap:H(),gradientColorStops:[n],gradientColorStopPositions:[ua,Q2],inset:q(),margin:q(),opacity:Q(),padding:H(),saturate:Q(),scale:Q(),sepia:b(),skew:Q(),space:H(),translate:H()},classGroups:{aspect:[{aspect:["auto","square","video",K]}],container:["container"],columns:[{columns:[K2]}],"break-after":[{"break-after":$()}],"break-before":[{"break-before":$()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...m2(),K]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[w]}],"inset-x":[{"inset-x":[w]}],"inset-y":[{"inset-y":[w]}],start:[{start:[w]}],end:[{end:[w]}],top:[{top:[w]}],right:[{right:[w]}],bottom:[{bottom:[w]}],left:[{left:[w]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",U0,K]}],basis:[{basis:q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",K]}],grow:[{grow:b()}],shrink:[{shrink:b()}],order:[{order:["first","last","none",U0,K]}],"grid-cols":[{"grid-cols":[A0]}],"col-start-end":[{col:["auto",{span:["full",U0,K]},K]}],"col-start":[{"col-start":o1()}],"col-end":[{"col-end":o1()}],"grid-rows":[{"grid-rows":[A0]}],"row-start-end":[{row:["auto",{span:[U0,K]},K]}],"row-start":[{"row-start":o1()}],"row-end":[{"row-end":o1()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",K]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",K]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",..._()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",..._(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[..._(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[m]}],px:[{px:[m]}],py:[{py:[m]}],ps:[{ps:[m]}],pe:[{pe:[m]}],pt:[{pt:[m]}],pr:[{pr:[m]}],pb:[{pb:[m]}],pl:[{pl:[m]}],m:[{m:[P]}],mx:[{mx:[P]}],my:[{my:[P]}],ms:[{ms:[P]}],me:[{me:[P]}],mt:[{mt:[P]}],mr:[{mr:[P]}],mb:[{mb:[P]}],ml:[{ml:[P]}],"space-x":[{"space-x":[R]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[R]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",K,e]}],"min-w":[{"min-w":[K,e,"min","max","fit"]}],"max-w":[{"max-w":[K,e,"none","full","min","max","fit","prose",{screen:[K2]},K2]}],h:[{h:[K,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[K,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[K,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[K,e,"auto","min","max","fit"]}],"font-size":[{text:["base",K2,Q2]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Un]}],"font-family":[{font:[A0]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",K]}],"line-clamp":[{"line-clamp":["none",s0,Un]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",R2,K]}],"list-image":[{"list-image":["none",K]}],"list-style-type":[{list:["none","disc","decimal",K]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[n]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[n]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...X1(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",R2,Q2]}],"underline-offset":[{"underline-offset":["auto",R2,K]}],"text-decoration-color":[{decoration:[n]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:H()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",K]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",K]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...m2(),za]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",da]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},pa]}],"bg-color":[{bg:[n]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...X1(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:X1()}],"border-color":[{border:[c]}],"border-color-x":[{"border-x":[c]}],"border-color-y":[{"border-y":[c]}],"border-color-s":[{"border-s":[c]}],"border-color-e":[{"border-e":[c]}],"border-color-t":[{"border-t":[c]}],"border-color-r":[{"border-r":[c]}],"border-color-b":[{"border-b":[c]}],"border-color-l":[{"border-l":[c]}],"divide-color":[{divide:[c]}],"outline-style":[{outline:["",...X1()]}],"outline-offset":[{"outline-offset":[R2,K]}],"outline-w":[{outline:[R2,Q2]}],"outline-color":[{outline:[n]}],"ring-w":[{ring:f1()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[n]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[R2,Q2]}],"ring-offset-color":[{"ring-offset":[n]}],shadow:[{shadow:["","inner","none",K2,ha]}],"shadow-color":[{shadow:[A0]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...m1(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":m1()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[t]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",K2,K]}],grayscale:[{grayscale:[s]}],"hue-rotate":[{"hue-rotate":[z]}],invert:[{invert:[d]}],saturate:[{saturate:[g]}],sepia:[{sepia:[L]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[s]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[z]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[g]}],"backdrop-sepia":[{"backdrop-sepia":[L]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",K]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",K]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",K]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[C]}],"scale-x":[{"scale-x":[C]}],"scale-y":[{"scale-y":[C]}],rotate:[{rotate:[U0,K]}],"translate-x":[{"translate-x":[j]}],"translate-y":[{"translate-y":[j]}],"skew-x":[{"skew-x":[v]}],"skew-y":[{"skew-y":[v]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",K]}],accent:[{accent:["auto",n]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",K]}],"caret-color":[{caret:[n]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":H()}],"scroll-mx":[{"scroll-mx":H()}],"scroll-my":[{"scroll-my":H()}],"scroll-ms":[{"scroll-ms":H()}],"scroll-me":[{"scroll-me":H()}],"scroll-mt":[{"scroll-mt":H()}],"scroll-mr":[{"scroll-mr":H()}],"scroll-mb":[{"scroll-mb":H()}],"scroll-ml":[{"scroll-ml":H()}],"scroll-p":[{"scroll-p":H()}],"scroll-px":[{"scroll-px":H()}],"scroll-py":[{"scroll-py":H()}],"scroll-ps":[{"scroll-ps":H()}],"scroll-pe":[{"scroll-pe":H()}],"scroll-pt":[{"scroll-pt":H()}],"scroll-pr":[{"scroll-pr":H()}],"scroll-pb":[{"scroll-pb":H()}],"scroll-pl":[{"scroll-pl":H()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",K]}],fill:[{fill:[n,"none"]}],"stroke-w":[{stroke:[R2,Q2,Un]}],stroke:[{stroke:[n,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},N1=ra(xa);function Fe({children:n,className:e}){return u.jsx("div",{className:N1("relative z-0 border-2 border-primary bg-primary p-3 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-3xl after:bg-secondary",e),children:n})}function Ue({smallText:n,bigText:e}){return u.jsxs("h2",{className:"my-1 flex flex-col text-primary",children:[u.jsx("span",{className:"font-CourierPrime text-[1.09rem] leading-[17px] sm:text-[1.64rem] sm:leading-[27px]",children:n}),u.jsx("span",{className:"md-text-5xl whitespace-nowrap font-DelaGothicOne text-3xl leading-[17px] sm:text-[2.8rem] sm:leading-[27px]",children:e})]})}function ft({links:n}){return u.jsx("nav",{children:u.jsx("ul",{className:"flex gap-4",children:n.map(e=>u.jsx("li",{children:u.jsx(M5,{to:e.url,target:"_blank",rel:"noopener noreferrer",title:e.name,children:u.jsx(e.icon,{className:"h-[30px] w-[30px]"})})},e.name))})})}function wa({onClick:n,children:e,className:r,...t}){const c={default:"pb-3 pt-1 pr-3 pl-1 after:-top-1 after:-left-1",pressed:"p-2 after:top-0 after:left-0"},[l,o]=E.useState(c.default),i=()=>{o(c.pressed)},a=()=>{o(c.default),n&&n()},s=()=>{o(c.default)};return u.jsx("button",{onMouseDown:i,onMouseUp:a,onMouseLeave:s,...t,className:N1(`relative z-0 border-2 border-primary bg-primary after:absolute after:-z-10 after:h-full after:w-full after:bg-secondary after:outline after:outline-2 after:outline-primary ${l}`,r),children:e})}function Ae({children:n,className:e,...r}){return u.jsx("button",{className:N1("p-2 outline outline-2 outline-primary",e),...r,children:n})}function Sa({isModalOpen:n,setIsModalOpen:e,message:r}){const t=E.useRef(null);E.useEffect(()=>{var l,o;n?(l=t.current)==null||l.showModal():(o=t.current)==null||o.close()},[n]);const c=()=>{e(!1)};return u.jsx("dialog",{ref:t,children:u.jsxs(Fe,{className:"flex flex-col gap-6 p-6 text-primary",children:[r,u.jsx(Ae,{className:"self-center px-4",onClick:c,children:"Ok"})]})})}function pt({label:n,...e}){return u.jsxs("label",{className:"relative flex flex-col gap-2 border-b-2 border-primary bg-none p-2",children:[u.jsx("p",{className:"absolute -top-3 left-1 text-xs",children:n}),u.jsx("input",{className:"border-none bg-secondary font-CourierPrime text-primary outline-none placeholder:text-primary focus:placeholder:text-secondary",...e})]})}function ka({isNameValid:n,inputName:e,setInputName:r}){const t=o=>{r(o.target.value)},c=()=>e.length>=3,l=()=>!c()&&e.length!==0&&u.jsx("span",{className:"font-CourierPrime text-[#ff0c0c]",children:"Minimo de 3 caractéres"});return E.useEffect(()=>{n(c()&&e.length!==0)},[e]),u.jsx(pt,{value:e,onChange:t,label:l(),type:"text",name:"name",placeholder:"Seu Nome",required:!0})}function Ca({isEmailValid:n,inputEmail:e,setInputEmail:r}){const t=o=>{r(o.target.value)},c=()=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),l=()=>!c()&&e.length!==0&&u.jsx("span",{className:"font-CourierPrime text-[#ff0c0c]",children:"Insira um e-mail válido"});return E.useEffect(()=>{n(c()&&e.length!==0)},[e]),u.jsx(pt,{value:e,onChange:t,label:l(),type:"email",name:"e-mail",placeholder:"Seu E-mail",required:!0})}function Ea({label:n,...e}){return u.jsxs("label",{className:"relative flex flex-col gap-2",children:[u.jsx("p",{className:"absolute -top-0 left-1 text-xs",children:n}),u.jsx("textarea",{...e,className:"w-full resize-none overflow-y-auto bg-[repeating-linear-gradient(rgb(var(--secondary-color)),rgb(var(--secondary-color))_50px,rgb(var(--primary-color))_50px,rgb(var(--primary-color))_52px,rgb(var(--secondary-color))_52px)] bg-local p-2 font-CourierPrime leading-[52px] text-primary placeholder:text-primary focus:outline-0 focus:placeholder:text-secondary"})]})}function ja({isMessageValid:n,inputMessage:e,setInputMessage:r}){const t=o=>{r(o.target.value)},c=()=>e.length>=15,l=()=>!c()&&e.length!==0&&u.jsx("span",{className:"font-CourierPrime text-[#ff0c0c]",children:"Minimo de 15 caractéres"});return E.useEffect(()=>{n(c()&&e.length!==0)},[e]),u.jsx(Ea,{value:e,onChange:t,label:l(),name:"message",placeholder:"Sua Mensagem",rows:3,required:!0})}function Ma({isLoading:n}){const e=E.useRef(null);return E.useEffect(()=>{var r,t;n?(r=e.current)==null||r.showModal():(t=e.current)==null||t.close()},[n]),u.jsxs("dialog",{ref:e,className:"bg-secondary/0 p-3",children:[u.jsx("span",{className:"sr-only",children:"Loading"}),u.jsx("div",{className:"h-[50px] w-[50px] animate-spin rounded-full border-4 border-primary border-t-secondary/0"})]})}function Pa(){const[n,e]=E.useState(""),[r,t]=E.useState(""),[c,l]=E.useState(""),[o,i]=E.useState(!1),[a,s]=E.useState(!1),[z,d]=E.useState(!1),[p,x]=E.useState(!1),[S,w]=E.useState(""),[P,f]=E.useState(!1),m={success:"Formulário enviado com sucesso!",error:"Houve um erro ao enviar o formulário.",fail:"Confira se o formulário foi preenchido corretamente"},g=()=>{e(""),t(""),l("")},C=j=>{j.preventDefault(),f(!0),o&&a&&z?fetch("https://formspree.io/f/xeoqevqp",{method:"POST",body:new FormData(j.currentTarget),headers:{Accept:"application/json"}}).then(D=>{D.ok?w(m.success):w(m.error),f(!1),x(!0),g()}).catch(D=>{console.error("Error:",D),w(m.error),f(!1),x(!0)}):(w(m.fail),f(!1),x(!0))},L=j=>{i(j)},v=j=>{s(j)},R=j=>{d(j)};return u.jsxs(u.Fragment,{children:[u.jsx(Ma,{isLoading:P}),u.jsx(Sa,{message:S,isModalOpen:p,setIsModalOpen:x}),u.jsxs("form",{className:"flex flex-col gap-10 text-primary sm:text-lg sm:leading-5 lg:text-xl",acceptCharset:"utf-8",action:"https://formspree.io/f/xeoqevqp",method:"POST",onSubmit:C,children:[u.jsx(ka,{inputName:n,setInputName:e,isNameValid:L}),u.jsx(Ca,{inputEmail:r,setInputEmail:t,isEmailValid:v}),u.jsx(ja,{inputMessage:c,setInputMessage:l,isMessageValid:R}),u.jsx(wa,{type:"submit",children:"Enviar"})]})]})}function Na({className:n}){return u.jsx(u.Fragment,{children:u.jsx("svg",{className:N1("fill-primary w-[25px] h-[25px]",n),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 3025 3919",children:u.jsxs("g",{transform:"translate(0.000000,3919.000000) scale(0.100000,-0.100000)",children:[u.jsx("path",{d:`M70 19590 l0 -19540 15065 0 15065 0 0 15500 0 15500 -4165 0 -4165\r
0 0 4040 0 4040 -10900 0 -10900 0 0 -19540z m17310 5050 l0 -7540 -5790 0\r
-5790 0 0 7540 0 7540 5790 0 5790 0 0 -7540z m-8590 -11783 c478 -57 825\r
-147 1137 -297 631 -303 981 -790 1080 -1501 23 -173 23 -546 -1 -722 -135\r
-986 -783 -1567 -1958 -1757 -311 -50 -377 -53 -1355 -57 l-923 -4 0 -1465 0\r
-1464 -570 0 -570 0 0 3645 0 3646 1508 -4 c1346 -3 1523 -5 1652 -20z m5902\r
13 c1076 -56 1947 -260 2564 -601 675 -374 1113 -908 1352 -1649 243 -753 258\r
-1831 38 -2630 -111 -404 -303 -785 -549 -1090 -111 -138 -315 -335 -459 -443\r
-589 -442 -1397 -711 -2453 -817 -430 -42 -452 -43 -1947 -47 l-1458 -4 0\r
3645 0 3646 1354 0 c802 0 1438 -4 1558 -10z m9948 -405 l0 -415 -1835 0\r
-1835 0 0 -1070 0 -1070 1658 -2 1657 -3 3 -417 2 -418 -1660 0 -1660 0 0\r
-1740 0 -1740 -570 0 -570 0 0 3645 0 3645 2405 0 2405 0 0 -415z`}),u.jsx("path",{d:`M6300 24640 l0 -7040 5290 0 5290 0 0 7040 0 7040 -5290 0 -5290 0 0\r
-7040z m5070 3290 l0 -260 -1890 0 -1890 0 0 260 0 260 1890 0 1890 0 0 -260z\r
m1080 -1385 l0 -265 -2430 0 -2430 0 0 265 0 265 2430 0 2430 0 0 -265z m1090\r
-1410 l0 -265 -2975 0 -2975 0 0 265 0 265 2975 0 2975 0 0 -265z`}),u.jsx("path",{d:`M6770 10700 l0 -1372 828 5 c878 5 929 7 1152 57 554 123 913 438\r
1035 906 35 135 47 241 47 414 0 171 -17 294 -57 435 -125 431 -470 732 -978\r
855 -256 62 -273 63 -1189 67 l-838 4 0 -1371z`}),u.jsx("path",{d:`M12912 9238 l3 -2833 655 -3 c686 -3 1116 7 1385 33 1522 146 2334\r
768 2575 1975 117 585 102 1301 -40 1835 -88 335 -244 653 -430 880 -78 95\r
-258 268 -352 338 -376 280 -901 468 -1546 552 -331 43 -440 47 -1360 52\r
l-892 5 2 -2834z`}),u.jsx("path",{d:`M24050 38979 c0 -25 -509 -6358 -515 -6416 l-6 -53 3080 0 c1695 0\r
3081 3 3081 8 0 6 -5570 6405 -5621 6457 -15 16 -19 17 -19 4z`})]})})})}function La({className:n}){return u.jsx(u.Fragment,{children:u.jsx("svg",{className:N1("fill-primary w-[25px] h-[25px]",n),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 34 34",children:u.jsx("path",{d:"M33.3662 0.507385V33.8421H22.5241C21.6315 33.8421 21.3515 33.3411 21.3515 32.8842C21.3515 32.3242 21.3725 30.4821 21.3725 28.1979C21.4156 27.6185 21.3341 27.0365 21.1337 26.4911C20.9332 25.9457 20.6185 25.4495 20.2104 25.0358C24.0168 24.6105 28.0125 23.1684 28.0125 16.6042C28.0384 14.9076 27.4096 13.2662 26.2568 12.0211C26.7777 10.5477 26.7167 8.93102 26.0862 7.50107C26.0862 7.50107 24.6547 7.04212 21.3915 9.25265C18.5919 8.48519 15.6374 8.48519 12.8378 9.25265C9.57465 7.04212 8.14307 7.50107 8.14307 7.50107C7.51412 8.93148 7.45389 10.5478 7.97465 12.0211C6.82254 13.2668 6.1932 14.9076 6.21676 16.6042C6.21676 23.1516 10.2041 24.6169 13.9978 25.0484C13.376 25.6558 12.9909 26.4649 12.9115 27.3305C12.4926 27.5666 12.0311 27.7172 11.5536 27.7736C11.0761 27.83 10.5922 27.7911 10.1299 27.6591C9.66757 27.5271 9.23603 27.3047 8.86029 27.0047C8.48454 26.7048 8.17207 26.3332 7.94097 25.9116C7.66743 25.4385 7.28953 25.034 6.83605 24.729C6.38257 24.424 5.86547 24.2265 5.32413 24.1516C5.32413 24.1516 3.65465 24.1305 5.20623 25.1916C6.11606 25.7715 6.78819 26.658 7.10097 27.6905C7.10097 27.6905 8.10728 31.0126 12.8589 29.9811C12.8673 31.4042 12.8799 32.4779 12.8799 32.8863C12.8799 33.3369 12.5704 33.8421 11.7157 33.8421H0.0314941V0.507385H33.3662Z"})})})}function Ra({className:n}){return u.jsx(u.Fragment,{children:u.jsx("svg",{className:N1("fill-primary w-[25px] h-[25px]",n),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 34 34",children:u.jsx("path",{d:"M33.3662 33.8421H0.0314941V0.507385H33.3662V33.8421ZM12.0041 10.5305C12.0049 10.2519 11.9481 9.97607 11.8371 9.72043C11.7262 9.4648 11.5637 9.23486 11.3596 9.04506C11.1556 8.85526 10.9145 8.70971 10.6515 8.61754C10.3886 8.52538 10.1094 8.48859 9.83149 8.50949C9.55557 8.48843 9.27825 8.52414 9.01666 8.61441C8.75507 8.70469 8.51475 8.84761 8.31054 9.03437C8.10634 9.22113 7.94257 9.44775 7.82935 9.70026C7.71613 9.95277 7.65585 10.2258 7.65225 10.5025C7.64865 10.7792 7.70179 11.0537 7.8084 11.3091C7.91501 11.5645 8.07282 11.7953 8.2721 11.9873C8.47137 12.1793 8.70788 12.3284 8.96704 12.4255C9.22619 12.5225 9.50248 12.5655 9.77886 12.5516H9.80623C10.0859 12.5752 10.3675 12.5405 10.633 12.4496C10.8986 12.3588 11.1424 12.2137 11.349 12.0238C11.5556 11.8338 11.7205 11.6029 11.8333 11.3459C11.9461 11.0889 12.0042 10.8112 12.0041 10.5305ZM11.7452 14.1495H7.86307V25.8379H11.7473L11.7452 14.1495ZM25.762 19.1348C25.762 15.5453 23.8462 13.8716 21.2883 13.8716C20.5841 13.8427 19.8854 14.0074 19.2681 14.3478C18.6509 14.6881 18.1387 15.1911 17.7873 15.8021V14.1474H13.8989C13.9515 15.2421 13.8989 25.84 13.8989 25.84H17.7894V19.3095C17.774 18.9887 17.8168 18.6677 17.9157 18.3621C18.0609 17.9488 18.33 17.5903 18.6864 17.3356C19.0429 17.0809 19.4692 16.9424 19.9073 16.939C21.3178 16.939 21.8778 18.0126 21.8778 19.5832V25.8421H25.7641L25.762 19.1348ZM17.762 15.8421L17.7873 15.8021L17.7894 15.8421H17.762Z"})})})}function _a({className:n}){return u.jsx(u.Fragment,{children:u.jsxs("svg",{className:N1("fill-primary w-[25px] h-[25px]",n),xmlns:"http://www.w3.org/2000/svg",viewBox:".6 0 34 34",children:[u.jsx("path",{d:"M17.3788 7.47131C12.049 7.47131 7.71277 11.8075 7.71277 17.1374C7.71277 18.9945 8.24059 20.7979 9.23903 22.3527L9.47899 22.7264L8.53883 26.0656L11.9936 25.1763L12.3499 25.3938C13.8604 26.316 15.5995 26.8034 17.3788 26.8034C22.7087 26.8034 27.0448 22.4673 27.0448 17.1374C27.0448 11.8075 22.7087 7.47131 17.3788 7.47131ZM23.3062 20.1082L23.1856 20.6715C23.0495 21.307 22.6721 21.8692 22.1245 22.2195C21.4332 22.6617 20.537 22.8789 19.398 22.5568C15.8632 21.5572 13.8641 19.2169 12.7915 17.7542C11.7188 16.2915 11.3044 14.8288 11.5726 13.6343C11.7524 12.8332 12.3379 12.2184 12.7041 11.9004C12.8835 11.7446 13.1162 11.6653 13.3534 11.6783L14.1087 11.7194C14.2575 11.7276 14.3887 11.8194 14.4473 11.9564L15.5476 14.5308C15.6064 14.6684 15.5816 14.8274 15.4838 14.9405L14.526 16.0485C14.4484 16.1384 14.4348 16.2663 14.4896 16.3717C15.751 18.8016 18.0499 19.7644 18.7362 20.0056C18.8532 20.0467 18.9828 20.0079 19.0585 19.9096L20.0607 18.6105C20.1722 18.466 20.3687 18.4177 20.5344 18.4941L23.0872 19.6708C23.2536 19.7475 23.3445 19.9292 23.3062 20.1082Z"}),u.jsx("path",{d:"M0.698853 0.5V33.83H34.0289V0.5H0.698853ZM17.3789 28.7781C15.3789 28.7781 13.4204 28.2662 11.6879 27.2941L5.70818 28.8333L7.34078 23.0349C6.29092 21.2513 5.73816 19.222 5.73816 17.1374C5.73816 10.7187 10.9602 5.49667 17.3789 5.49667C23.7976 5.49667 29.0195 10.7187 29.0195 17.1374C29.0195 23.5561 23.7976 28.7781 17.3789 28.7781Z"})]})})}const ht=[{name:"linkedin",url:"https://www.linkedin.com/in/devalanlima/",icon:Ra},{name:"whatsapp",url:"https://wa.me/55021996058924",icon:_a},{name:"github",url:"https://github.com/devalanlima",icon:La},{name:"curriculo",url:"https://devalanlima.github.io/portfolio/assets/Alan-Lima-Curriculo.pdf",icon:Na}];function Ta(){return u.jsx("footer",{className:"flex w-full items-center justify-center p-3 outline outline-2 outline-primary",children:u.jsx(ft,{links:ht})})}function Da({children:n,path:e="/portfolio",className:r}){return u.jsx("h1",{className:N1("m-0 font-AbrilFatface text-xl text-primary md:text-2xl",r),children:u.jsx(M5,{to:e,children:n})})}function Oa({className:n}){return u.jsx(u.Fragment,{children:u.jsx("svg",{className:N1("fill-primary w-[25px] h-[25px]",n),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 27 26",children:u.jsx("path",{d:"M13.7973 18.6166C15.403 18.6166 16.7709 18.0707 17.9008 16.979C19.0308 15.8873 19.5958 14.5657 19.5958 13.0143C19.5958 11.463 19.0308 10.1414 17.9008 9.0497C16.7709 7.95799 15.403 7.41213 13.7973 7.41213C13.4009 7.41213 13.0044 7.45523 12.6079 7.54142C12.2115 7.6276 11.8249 7.75689 11.4482 7.92926C12.4791 8.38893 13.3017 9.07843 13.9163 9.99777C14.5308 10.9171 14.8381 11.9226 14.8381 13.0143C14.8381 14.1061 14.5308 15.1116 13.9163 16.0309C13.3017 16.9503 12.4791 17.6494 11.4482 18.1282C11.8249 18.2814 12.2115 18.4012 12.6079 18.4873C13.0044 18.5735 13.4009 18.6166 13.7973 18.6166ZM13.5297 26L9.51538 22.2365H3.98458V16.8928L0 13.0431L3.98458 9.19335V3.84973H9.51538L13.5297 0L17.4845 3.84973H23.0154V9.19335L27 13.0431L23.0154 16.8928V22.2365H17.4845L13.5297 26Z"})})})}function Ia({className:n}){return u.jsx(u.Fragment,{children:u.jsx("svg",{className:N1("fill-primary w-[25px] h-[25px]",n),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 27 26",children:u.jsx("path",{d:"M13.5297 26L9.51538 22.2365H3.98458V16.8928L0 13.0431L3.98458 9.19335V3.84973H9.51538L13.5297 0L17.4845 3.84973H23.0154V9.19335L27 13.0431L23.0154 16.8928V22.2365H17.4845L13.5297 26ZM13.5297 18.6166C15.1354 18.6166 16.5033 18.0707 17.6332 16.979C18.7632 15.8873 19.3281 14.5657 19.3281 13.0143C19.3281 11.463 18.7632 10.1414 17.6332 9.0497C16.5033 7.95799 15.1354 7.41213 13.5297 7.41213C11.924 7.41213 10.5561 7.95799 9.42617 9.0497C8.29622 10.1414 7.73124 11.463 7.73124 13.0143C7.73124 14.5657 8.29622 15.8873 9.42617 16.979C10.5561 18.0707 11.924 18.6166 13.5297 18.6166ZM13.5297 23.5867L16.7411 20.5127H21.2312V16.1746L24.4725 13.0431L21.2312 9.91158V5.57346H16.7411L13.5297 2.44199L10.2588 5.57346H5.76869V9.91158L2.52753 13.0431L5.76869 16.1746V20.5127H10.229L13.5297 23.5867Z"})})})}function Fa({className:n}){const e=()=>{const l=localStorage.getItem("theme");return l||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")},[r,t]=E.useState(e()==="dark"),c=()=>{t(l=>!l)};return E.useEffect(()=>{document.documentElement.className=r?"dark":"light",localStorage.setItem("theme",r?"dark":"light")},[r]),u.jsx(Ae,{className:n,onClick:c,children:r?u.jsx(Ia,{className:"h-[28px] w-[28px]"}):u.jsx(Oa,{className:"h-[28px] w-[28px]"})})}function Ua({className:n}){return u.jsx(u.Fragment,{children:u.jsx("svg",{className:N1("fill-primary w-[25px] h-[25px]",n),xmlns:"http://www.w3.org/2000/svg",viewBox:"-0.5 -0.5 24 24",children:u.jsx("path",{d:"M2.875 17.25v-1.4375h5.75v1.4375H2.875Zm0 -5.03125v-1.4375h11.5v1.4375H2.875ZM2.875 7.1875v-1.4375h17.25v1.4375H2.875Z"})})})}function Aa({className:n}){return u.jsx(u.Fragment,{children:u.jsx("svg",{className:N1("fill-primary w-[25px] h-[25px]",n),xmlns:"http://www.w3.org/2000/svg",viewBox:"-0.5 -0.5 24 24",children:u.jsx("path",{d:"m5.965433333333333 18.040625 -1.00625 -1.00625L10.493558333333333 11.5l-5.534375000000001 -5.534375000000001 1.00625 -1.00625 5.534375000000001 5.534375000000001 5.534375000000001 -5.534375000000001 1.00625 1.00625L12.506058333333334 11.5l5.534375000000001 5.534375000000001 -1.00625 1.00625 -5.534375000000001 -5.534375000000001 -5.534375000000001 5.534375000000001Z"})})})}function Va({routes:n,className:e}){const[r,t]=E.useState(!1),c=E.useRef(null),l=r?Aa:Ua,o=()=>{t(a=>!a)},i=a=>{a&&c.current&&!c.current.contains(a.target)&&t(!1)};return E.useEffect(()=>(document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}),[]),u.jsxs("div",{className:N1("relative z-50",e),ref:c,children:[u.jsx(Ae,{onClick:o,"aria-expanded":r,className:"sm:hidden",children:u.jsx(l,{className:"h-[28px] w-[28px]"})}),u.jsx("nav",{className:`absolute left-0 top-[calc(100%_+2px)] sm:relative ${r?"block":"hidden sm:block"}`,children:u.jsx("ul",{className:"flex flex-col gap-[2px] sm:flex-row",children:n.map(a=>a.id&&a.path&&u.jsx("li",{className:"bg-secondary pt-1 font-CourierPrime text-lg text-primary outline outline-2 outline-primary hover:bg-primary hover:text-secondary sm:font-semibold sm:outline-none sm:hover:bg-secondary sm:hover:text-primary sm:hover:underline sm:hover:underline-offset-1 md:text-xl",children:u.jsx(M5,{className:"flex px-4 py-1",to:a.path,children:a.id})},a.path))})})]})}function Ba(){return u.jsx("header",{className:"outline outline-2 outline-primary",children:u.jsxs("div",{className:"mx-auto flex max-w-[1300px] items-center justify-between sm:px-5 md:py-2",children:[u.jsx(Va,{className:"sm:order-1 lg:pr-20",routes:Ve}),u.jsx(Da,{className:"sm:order-0",children:"ALAN LIMA"}),u.jsx(Fa,{className:"sm:order-2 sm:outline-none"})]})})}function tn({children:n}){const e=j5();return u.jsxs("div",{className:"flex min-h-screen flex-col",children:[u.jsx(Ba,{}),u.jsx("div",{className:"mx-auto flex w-full max-w-[1300px] flex-grow",children:n}),e.pathname!=="/portfolio/contatos"&&u.jsx(Ta,{})]})}function y5({children:n,className:e,...r}){return u.jsx("p",{...r,className:N1("font-CourierPrime text-sm leading-4 text-primary sm:text-lg sm:leading-5 lg:text-xl",e),children:n})}function ba(){const r=E.useRef(null);return E.useEffect(()=>{r.current&&Array.from(r.current.children).forEach((c,l)=>{c.style.animationDelay=`${1*l}s`})},[]),u.jsx("div",{className:"absolute grid h-full place-items-center overflow-hidden opacity-0 md:relative md:opacity-100",ref:r,children:Array.from({length:20},(t,c)=>u.jsx("div",{className:"animate-spiral-animation border-preto absolute aspect-square h-0 rounded-full border-[20px] border-primary",style:{height:`${95*c}px`}},c))})}function Ha(){return u.jsx(tn,{children:u.jsxs("main",{className:"flex w-full flex-col gap-6 overflow-x-hidden px-4 py-6 md:gap-10 md:py-10",children:[u.jsx(Ue,{smallText:"MEUS",bigText:"CONTATOS"}),u.jsxs("div",{className:"grid w-full grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-10",children:[u.jsx(ba,{}),u.jsxs(Fe,{className:"flex w-[calc(100vw_+10px)] flex-col gap-6 p-7 pr-14 md:w-auto",children:[u.jsx(Pa,{}),u.jsx(y5,{className:"text-base",children:"(21) 99605-8924"}),u.jsx(y5,{className:"text-base",children:"dev.alanlima@gmail.com"}),u.jsx(ft,{links:ht})]})]})]})})}function _7({className:n}){return u.jsx("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1664.000000 1763.000000",preserveAspectRatio:"xMidYMid meet",className:N1("-scale-x-100 fill-primary",n),children:u.jsxs("g",{transform:"translate(0.000000,1763.000000) scale(0.100000,-0.100000)",stroke:"none",children:[u.jsx("path",{d:`M7780 17404 c-91 -13 -257 -32 -368 -43 -112 -12 -207 -23 -211 -26\r
-5 -2 -107 -25 -227 -49 -296 -61 -675 -157 -853 -216 -80 -27 -228 -73 -327\r
-104 -198 -60 -159 -39 -624 -320 -290 -176 -419 -250 -506 -294 -64 -32 -89\r
-51 -116 -89 -19 -26 -88 -104 -154 -173 -118 -123 -159 -179 -359 -490 -37\r
-58 -87 -130 -110 -161 -23 -31 -50 -80 -60 -110 -22 -68 -63 -171 -125 -319\r
-120 -285 -129 -315 -145 -478 -8 -83 -24 -187 -35 -232 -57 -222 -59 -242\r
-39 -416 10 -88 21 -182 25 -211 4 -35 1 -73 -10 -121 -14 -56 -15 -80 -7\r
-128 12 -70 28 -244 36 -404 3 -63 10 -153 15 -200 5 -47 16 -170 25 -275 20\r
-235 17 -217 53 -355 17 -63 40 -161 51 -217 12 -56 35 -141 51 -189 17 -48\r
29 -88 27 -90 -1 -1 -28 -17 -59 -36 -93 -56 -248 -255 -274 -352 -41 -153\r
-89 -479 -80 -551 7 -62 72 -321 120 -479 52 -173 111 -314 270 -654 l67 -143\r
222 -218 c122 -120 267 -253 322 -296 55 -43 122 -98 150 -121 53 -47 150 -91\r
221 -101 26 -3 48 -13 53 -22 14 -27 149 -553 155 -606 5 -43 20 -281 76\r
-1186 l10 -166 -79 -649 c-79 -648 -80 -649 -116 -734 -20 -47 -70 -170 -110\r
-275 -110 -284 -102 -270 -202 -360 -106 -95 -431 -391 -700 -637 -424 -388\r
-408 -376 -699 -525 -143 -73 -338 -174 -434 -224 -700 -363 -1181 -611 -2030\r
-1046 -537 -275 -489 -248 -470 -267 13 -14 67 12 500 235 267 138 609 314\r
760 391 151 78 394 203 540 278 146 76 402 208 570 295 337 174 488 253 628\r
327 51 28 96 47 99 44 4 -3 -1 -34 -11 -68 -20 -72 -281 -899 -298 -941 -9\r
-23 -8 -31 9 -50 37 -41 623 -913 623 -927 0 -5 10 -10 23 -10 12 0 139 -25\r
282 -55 143 -31 465 -99 715 -151 806 -168 902 -190 912 -208 5 -9 13 -14 18\r
-11 5 3 110 -25 232 -64 123 -38 408 -124 633 -191 226 -67 520 -155 655 -195\r
135 -41 317 -95 405 -120 88 -26 243 -74 343 -107 l184 -60 356 61 c197 34\r
526 91 732 127 l375 66 275 113 c151 62 392 161 535 220 143 59 332 137 420\r
172 88 36 219 90 290 121 72 30 200 83 285 118 l154 62 62 99 c34 54 123 199\r
199 323 76 124 176 287 224 363 47 76 125 203 173 282 l87 145 -27 18 c-15 10\r
-49 31 -77 47 -49 27 -98 56 -630 372 -148 88 -352 209 -453 268 -100 59 -181\r
109 -179 112 2 2 44 -13 93 -33 49 -19 168 -65 264 -101 96 -36 355 -135 575\r
-221 220 -85 470 -177 555 -205 145 -48 192 -71 720 -352 l565 -302 335 -66\r
c184 -37 423 -83 530 -103 107 -20 200 -39 206 -43 6 -3 202 -195 435 -426\r
l424 -420 175 -279 c96 -154 228 -363 292 -464 65 -101 140 -221 168 -268 48\r
-78 70 -98 85 -74 6 10 -23 58 -447 728 l-255 403 -431 424 c-237 234 -437\r
425 -446 425 -22 0 -340 59 -723 135 l-332 65 -198 107 c-371 199 -811 432\r
-903 479 -36 18 -114 48 -175 67 -60 19 -258 92 -440 162 -316 122 -435 167\r
-762 291 -452 170 -421 154 -760 385 -169 116 -316 219 -327 229 -16 16 -19\r
44 -27 281 -5 145 -9 329 -10 409 -1 143 35 594 51 636 7 19 19 22 107 28 54\r
4 125 11 158 16 33 5 125 14 204 20 134 11 147 13 187 41 23 16 84 49 135 74\r
91 44 94 47 238 209 162 181 180 214 236 421 28 102 205 640 269 819 53 145\r
60 178 121 561 84 528 104 614 204 915 49 146 101 297 116 335 23 61 70 226\r
162 560 13 50 28 133 33 185 16 159 33 250 45 250 25 0 172 52 241 85 109 52\r
166 108 308 298 91 123 239 534 292 814 26 136 76 347 89 373 7 14 40 57 73\r
96 l59 70 7 132 c7 153 15 142 -119 187 -44 15 -142 52 -217 81 -204 80 -310\r
111 -442 128 -66 9 -120 17 -121 19 -1 1 -7 36 -14 77 -14 90 -59 295 -139\r
640 -59 250 -60 260 -77 515 -17 255 -18 263 -61 412 -57 196 -138 439 -259\r
783 -104 294 -149 438 -160 510 -11 75 -63 302 -78 345 -34 95 -274 473 -446\r
702 l-121 161 -246 194 c-323 253 -475 368 -487 368 -6 0 -110 40 -231 89\r
-122 49 -340 135 -486 191 -146 56 -303 118 -350 137 -92 39 -60 34 -750 113\r
-146 16 -321 37 -390 45 -155 18 -167 18 -370 -11z m485 -64 c7 -11 -9 -11\r
-45 0 -24 8 -24 8 7 9 17 1 35 -3 38 -9z m-139 -20 c13 0 24 -4 24 -8 0 -13\r
-93 2 -98 16 -3 9 3 10 23 2 14 -5 37 -10 51 -10z m-106 -15 c13 -16 0 -21\r
-15 -6 -6 5 -21 11 -35 14 -22 4 -21 4 6 6 17 0 37 -6 44 -14z m-373 -21 c-3\r
-3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m471 -11 c-10 -2 -26 -2\r
-35 0 -10 3 -2 5 17 5 19 0 27 -2 18 -5z m397 -13 c8 -13 -35 -13 -55 0 -11 7\r
-7 10 17 10 17 0 35 -4 38 -10z m123 3 c-10 -2 -28 -2 -40 0 -13 2 -5 4 17 4\r
22 1 32 -1 23 -4z m-68 -13 c8 -5 12 -11 9 -14 -3 -3 -14 1 -25 9 -21 16 -8\r
20 16 5z m-878 -12 c-9 -9 -15 -9 -24 0 -9 9 -7 12 12 12 19 0 21 -3 12 -12z\r
m71 5 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m290 0 c-7 -2\r
-19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m304 1 c-3 -3 -12 -4 -19 -1\r
-8 3 -5 6 6 6 11 1 17 -2 13 -5z m618 -22 c-3 -3 -11 0 -18 7 -9 10 -8 11 6 5\r
10 -3 15 -9 12 -12z m-979 -1 c-10 -15 -128 -32 -161 -22 -21 6 -25 10 -15 14\r
39 15 184 22 176 8z m197 2 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2\r
18 -5z m307 -3 c8 -5 11 -10 5 -10 -5 0 -17 5 -25 10 -8 5 -10 10 -5 10 6 0\r
17 -5 25 -10z m-390 -10 c0 -5 -4 -10 -10 -10 -5 0 -10 -4 -10 -9 0 -5 8 -7\r
19 -4 10 3 21 1 24 -4 3 -5 -32 -10 -79 -10 -47 -1 -81 3 -78 8 3 5 21 9 40 9\r
20 0 42 7 50 15 17 17 44 20 44 5z m185 0 c-3 -5 -15 -10 -25 -10 -10 0 -22 5\r
-25 10 -4 6 7 10 25 10 18 0 29 -4 25 -10z m760 -20 c3 -5 2 -10 -4 -10 -5 0\r
-13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m-1457 -7 c-10 -2 -15 -10\r
-11 -19 4 -10 -3 -14 -24 -14 -16 0 -33 3 -37 7 -7 7 49 31 74 31 10 0 10 -2\r
-2 -5z m181 3 c-9 -9 -89 -14 -83 -5 3 5 24 9 46 9 23 0 39 -2 37 -4z m1351\r
-11 c23 -13 23 -14 4 -15 -11 0 -29 7 -40 15 -26 19 1 20 36 0z m-2010 1 c0\r
-2 -7 -6 -15 -10 -8 -3 -15 -1 -15 4 0 6 7 10 15 10 8 0 15 -2 15 -4z m105 -6\r
c-3 -5 -10 -10 -16 -10 -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z m425\r
0 c-19 -13 -30 -13 -30 0 0 6 10 10 23 10 18 0 19 -2 7 -10z m176 -5 c-3 -8\r
-1 -15 5 -15 6 0 7 -4 4 -10 -3 -5 -11 -10 -16 -10 -6 0 -8 4 -4 9 3 5 1 12\r
-5 16 -12 7 -4 25 12 25 5 0 8 -7 4 -15z m399 4 c4 -6 5 -13 1 -16 -8 -8 -56\r
6 -56 17 0 13 47 13 55 -1z m76 -4 c0 -5 -12 -11 -26 -13 -18 -2 -25 1 -25 13\r
0 12 7 15 25 13 14 -2 26 -7 26 -13z m1024 -13 c20 -15 14 -14 -30 4 -8 3 -15\r
1 -15 -5 0 -9 -5 -9 -21 0 -16 8 -18 13 -9 19 15 9 49 2 75 -18z m-1537 6 c13\r
-13 16 -38 5 -38 -17 1 -45 29 -38 39 8 14 18 14 33 -1z m152 2 c-14 -4 -34\r
-8 -45 -9 -16 -1 -17 1 -5 9 8 5 29 9 45 9 29 -1 29 -1 5 -9z m417 4 c-3 -3\r
-12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-1520 -10 c-3 -3 -12 -4 -19\r
-1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m1732 -10 c2 -2 1 -10 -2 -19 -9 -22 -182\r
-22 -190 0 -6 14 6 18 83 28 25 3 102 -3 109 -9z m277 0 c18 -14 18 -14 -6 -3\r
-31 14 -36 19 -24 19 6 0 19 -7 30 -16z m-2076 -4 c-8 -5 -19 -10 -25 -10 -5\r
0 -3 5 5 10 8 5 20 10 25 10 6 0 3 -5 -5 -10z m1230 0 c0 -5 -7 -10 -16 -10\r
-8 0 -12 5 -9 10 3 6 10 10 16 10 5 0 9 -4 9 -10z m170 -5 c15 -18 7 -21 -65\r
-28 -49 -5 -85 5 -85 23 0 22 132 27 150 5z m460 -7 c0 -6 -6 -5 -15 2 -8 7\r
-15 14 -15 16 0 2 7 1 15 -2 8 -4 15 -11 15 -16z m-720 -18 c-20 -13 -80 -13\r
-80 -1 0 9 79 20 90 13 2 -2 -2 -7 -10 -12z m458 8 c30 -30 5 -37 -29 -8 -23\r
19 -23 19 -3 20 11 0 25 -5 32 -12z m382 -21 c0 -4 -18 -7 -40 -5 -22 1 -45\r
-3 -52 -10 -16 -16 -35 -15 -35 2 0 8 6 12 12 9 7 -2 27 5 45 16 26 16 36 17\r
51 8 11 -7 19 -15 19 -20z m197 27 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1\r
17 -2 13 -5z m-1418 -8 c-8 -8 -88 -10 -95 -3 -4 4 17 7 46 7 29 0 51 -2 49\r
-4z m-182 -12 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m278 -4\r
c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m120 -2\r
l26 -12 -32 -13 c-43 -18 -63 -16 -83 6 -13 15 -14 20 -4 24 23 10 66 7 93 -5z\r
m213 -3 c-3 -3 -18 -8 -34 -10 l-29 -4 30 14 c28 12 46 12 33 0z m47 5 c3 -5\r
-1 -10 -9 -10 -9 0 -16 5 -16 10 0 6 4 10 9 10 6 0 13 -4 16 -10z m325 -10 c8\r
-15 8 -21 -2 -25 -19 -7 -78 -9 -118 -5 -21 2 -3 6 45 10 l80 6 -52 8 c-60 10\r
-61 26 -3 26 29 0 42 -5 50 -20z m-920 -9 c23 -7 22 -8 -13 -14 -42 -6 -70 0\r
-61 14 6 10 38 10 74 0z m465 0 c-13 -11 -91 -23 -79 -11 5 4 20 10 34 13 44\r
8 54 7 45 -2z m610 -1 c29 -7 28 -8 -10 -8 -22 0 -49 3 -60 8 -17 7 -15 9 10\r
8 17 0 44 -4 60 -8z m375 0 c12 -8 12 -10 -2 -15 -25 -10 -81 -1 -86 13 -4 14\r
65 17 88 2z m-1330 -9 c0 -10 -25 -21 -48 -21 -15 1 -14 3 2 15 22 17 46 20\r
46 6z m1545 -1 c4 -6 -8 -10 -29 -10 -20 0 -36 5 -36 10 0 6 13 10 29 10 17 0\r
33 -4 36 -10z m465 0 c13 -9 13 -10 0 -9 -8 0 -24 4 -35 9 l-20 9 20 0 c11 0\r
27 -4 35 -9z m-1505 -10 c-27 -4 -54 -3 -59 1 -6 5 15 8 50 8 l59 -2 -50 -7z\r
m900 0 c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4\r
-10z m-2415 -4 c0 -5 -87 -46 -97 -46 -13 0 71 49 85 50 6 0 12 -2 12 -4z\r
m656 -9 c-10 -7 -34 -24 -53 -39 -20 -16 -45 -28 -57 -28 -20 0 -20 1 4 20 14\r
11 31 20 38 20 6 0 21 9 32 20 11 11 28 20 38 19 16 0 16 -1 -2 -12z m104 -2\r
c-13 -16 -60 -21 -60 -6 0 12 18 19 49 20 20 1 21 -1 11 -14z m42 0 c0 -5 -5\r
-11 -11 -13 -6 -2 -11 4 -11 13 0 9 5 15 11 13 6 -2 11 -8 11 -13z m243 -4\r
c-3 -6 -11 -11 -17 -11 -6 0 -6 6 2 15 14 17 26 13 15 -4z m50 9 c3 -5 -1 -10\r
-10 -10 -9 0 -13 5 -10 10 3 6 8 10 10 10 2 0 7 -4 10 -10z m315 -6 c0 -2 -12\r
-4 -26 -4 -14 0 -23 4 -20 9 6 8 46 4 46 -5z m-980 -4 c-20 -13 -50 -13 -50 0\r
0 6 15 10 33 10 24 0 28 -3 17 -10z m-225 -10 c-3 -5 -12 -10 -18 -10 -7 0 -6\r
4 3 10 19 12 23 12 15 0z m674 6 c-2 -2 -22 -9 -44 -15 -36 -9 -38 -9 -21 4\r
17 13 77 23 65 11z m116 -5 c-6 -5 -23 -13 -40 -16 l-30 -7 25 15 c28 17 59\r
22 45 8z m-475 -10 c0 -13 -37 -24 -50 -16 -6 4 -8 11 -5 16 8 12 55 12 55 0z\r
m589 -5 c-10 -8 -73 -16 -64 -7 6 5 21 11 35 13 25 4 37 1 29 -6z m814 3 c15\r
-1 11 -5 -15 -13 -20 -6 -40 -14 -44 -18 -12 -13 -24 -9 -24 7 0 17 30 36 48\r
30 8 -3 23 -5 35 -6z m297 7 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11\r
10 11 6 0 10 -2 10 -4z m470 -22 c9 -9 10 -14 3 -14 -7 0 -15 5 -18 10 -3 6\r
-19 10 -35 10 -16 0 -32 5 -35 11 -10 15 66 0 85 -17z m-2900 1 c-47 -18 -58\r
-18 -34 0 10 8 30 14 44 14 22 0 21 -2 -10 -14z m360 0 c-14 -8 -32 -14 -40\r
-14 -8 0 -1 7 15 14 39 18 57 18 25 0z m255 5 c-3 -5 -12 -10 -18 -10 -7 0 -6\r
4 3 10 19 12 23 12 15 0z m620 0 c-3 -5 -16 -10 -28 -10 -18 0 -19 2 -7 10 20\r
13 43 13 35 0z m358 3 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z\r
m304 1 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m119 -11 c19\r
-26 17 -33 -11 -33 -31 0 -96 30 -89 42 10 16 86 9 100 -9z m364 6 c0 -10\r
-132 -49 -165 -49 -27 0 -28 1 -13 16 16 16 24 18 98 24 30 3 26 4 -20 10 -52\r
7 -51 8 22 6 43 0 78 -4 78 -7z m265 -6 c-9 -9 -23 -11 -42 -7 -24 6 -25 8 -8\r
14 11 4 30 7 42 7 19 0 20 -1 8 -14z m290 7 c3 -5 1 -10 -4 -10 -6 0 -11 5\r
-11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m525 0 c13 -9 13 -10 0 -10 -8 0 -22 5\r
-30 10 -13 9 -13 10 0 10 8 0 22 -5 30 -10z m-2915 -10 c-3 -5 -16 -10 -28\r
-10 -18 0 -19 2 -7 10 20 13 43 13 35 0z m365 2 c0 -20 -95 -47 -106 -31 -3 5\r
3 10 13 11 33 2 38 4 58 16 24 14 35 15 35 4z m616 -1 c-4 -5 -1 -11 6 -13 7\r
-3 5 -7 -6 -11 -10 -4 -15 -3 -11 3 7 12 -17 13 -30 2 -6 -5 -23 -5 -40 -2\r
l-30 7 25 11 c31 13 93 15 86 3z m679 0 c9 -15 -37 -41 -72 -41 -45 0 -41 13\r
10 32 51 20 54 20 62 9z m285 -1 c8 -5 11 -12 8 -16 -4 -3 -14 1 -23 10 -18\r
17 -9 21 15 6z m227 -24 c13 -12 23 -24 23 -28 0 -12 -28 -10 -53 4 -21 11\r
-21 11 -2 19 19 7 19 8 -2 8 -22 1 -29 11 -17 24 8 8 21 1 51 -27z m389 19\r
c10 -8 14 -15 8 -15 -5 0 -19 7 -30 15 -10 8 -14 15 -8 15 5 0 19 -7 30 -15z\r
m-2449 -12 c5 -14 -22 -20 -62 -14 l-30 4 35 13 c39 14 52 13 57 -3z m388 7\r
c-3 -5 -10 -10 -16 -10 -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z m365\r
0 c0 -14 -17 -21 -34 -14 -24 9 -19 19 9 20 14 1 25 -2 25 -6z m513 -11 c79\r
-20 20 -43 -112 -44 -59 0 -76 3 -84 17 -14 21 -7 28 35 38 35 9 100 4 161\r
-11z m901 10 c29 -13 42 -39 21 -39 -18 0 -96 30 -109 42 -15 12 59 10 88 -3z\r
m-2998 -14 c-22 -16 -77 -21 -60 -6 8 8 36 16 69 19 6 1 1 -5 -9 -13z m474 11\r
c0 -2 -7 -6 -15 -10 -8 -3 -15 -1 -15 4 0 6 7 10 15 10 8 0 15 -2 15 -4z m640\r
0 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21 21 13z m250 -6 c0\r
-19 -34 -50 -55 -50 -56 1 -80 21 -53 48 14 14 108 16 108 2z m50 7 c0 -2 -12\r
-14 -27 -28 -14 -13 -24 -19 -21 -14 3 6 8 18 11 28 5 14 37 26 37 14z m435\r
-16 c-3 -6 -11 -8 -17 -5 -6 4 -5 9 3 15 16 10 23 4 14 -10z m773 13 c43 -12\r
22 -24 -40 -23 -62 1 -62 1 -33 14 34 16 42 17 73 9z m561 -5 c41 -14 40 -29\r
-3 -29 -36 0 -52 12 -41 30 8 12 5 12 44 -1z m211 -10 c62 -24 80 -36 35 -24\r
-16 4 -45 9 -64 10 -39 4 -80 35 -46 35 11 0 45 -9 75 -21z m-2520 1 c0 -5 -7\r
-10 -16 -10 -8 0 -12 5 -9 10 3 6 10 10 16 10 5 0 9 -4 9 -10z m295 0 c3 -5\r
-7 -13 -22 -16 -15 -4 -38 -14 -50 -21 -12 -8 -30 -13 -40 -10 -13 3 -10 6 12\r
12 17 4 41 16 55 26 29 21 37 23 45 9z m1620 1 c3 -6 -12 -10 -35 -9 -22 0\r
-40 4 -40 9 0 12 67 12 75 0z m299 -1 c38 -14 33 -31 -6 -19 -38 10 -60 29\r
-36 29 9 0 28 -4 42 -10z m-2814 -20 c-8 -5 -17 -7 -19 -4 -3 3 1 9 9 14 8 5\r
17 7 19 4 3 -3 -1 -9 -9 -14z m1525 10 c-10 -16 -80 -30 -116 -23 l-33 6 34\r
13 c42 15 124 18 115 4z m-1228 -11 c-42 -25 -89 -40 -85 -28 2 7 22 18 44 25\r
49 15 64 16 41 3z m391 2 c11 -7 10 -10 -3 -15 -26 -9 -55 -7 -55 5 0 5 -4 7\r
-10 4 -5 -3 -10 -1 -10 4 0 13 59 14 78 2z m560 3 c12 -4 22 -11 22 -18 0 -7\r
-29 -11 -85 -12 l-85 0 48 16 c55 20 69 22 100 14z m-501 -10 c-3 -3 -12 -4\r
-19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m853 -4 c0 -5 -7 -10 -15 -10 -8 0\r
-15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m-1923 -6 c-3 -3 -12 -4 -19\r
-1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m665 -8 c-29 -8 -56 -17 -60 -21 -4 -4 7\r
-5 23 -1 17 4 53 9 80 12 l50 5 -30 -25 c-16 -14 -38 -26 -48 -26 -21 0 -87\r
26 -87 35 0 11 65 34 95 34 22 -1 16 -4 -23 -13z m176 4 c22 0 13 -18 -16 -28\r
-20 -7 -31 -6 -40 4 -18 19 -5 37 22 30 11 -3 27 -6 34 -6z m397 0 c8 -13 -20\r
-24 -42 -16 -15 6 -15 8 -3 16 20 13 37 12 45 0z m463 -7 c17 -3 32 -9 32 -13\r
0 -8 -101 -22 -108 -16 -2 3 -1 14 3 26 5 15 12 19 23 15 10 -4 32 -9 50 -12z\r
m180 -1 c2 -7 -6 -12 -17 -12 -21 0 -27 11 -14 24 9 9 26 2 31 -12z m322 13\r
c0 -2 -10 -9 -22 -15 -22 -11 -22 -10 -4 4 21 17 26 19 26 11z m-1715 -15 c-3\r
-5 -15 -10 -26 -10 -11 0 -17 5 -14 10 3 6 15 10 26 10 11 0 17 -4 14 -10z\r
m1800 0 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z\r
m150 0 c-4 -6 -14 -10 -23 -9 -10 1 -19 0 -22 -1 -21 -7 -70 -8 -70 -1 0 9 33\r
16 93 19 17 1 26 -2 22 -8z m965 -16 c0 -2 -9 0 -20 6 -11 6 -20 13 -20 16 0\r
2 9 0 20 -6 11 -6 20 -13 20 -16z m-831 12 c-11 -12 -169 -73 -173 -68 -9 8\r
-7 22 2 21 24 -4 33 4 12 11 -25 8 -25 8 5 9 17 1 41 8 55 16 22 13 110 22 99\r
11z m271 -22 l25 -13 -30 -1 c-27 -2 -25 -3 15 -14 25 -7 60 -21 79 -31 l34\r
-17 -24 -19 c-13 -10 -29 -19 -36 -19 -10 0 -125 75 -182 119 l-25 19 60 -5\r
c32 -3 70 -11 84 -19z m213 19 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24\r
-2 18 -5z m-3287 -18 c-19 -15 -46 -20 -46 -10 0 6 40 24 55 24 6 0 1 -6 -9\r
-14z m1274 11 c0 -16 -14 -36 -26 -36 -14 0 -19 22 -7 33 7 8 33 10 33 3z\r
m558 -13 c4 -15 -47 -17 -113 -6 -32 5 -35 8 -20 14 31 12 128 6 133 -8z m372\r
7 c0 -6 -11 -8 -27 -4 -40 10 -41 14 -5 14 18 0 32 -5 32 -10z m1180 0 c0 -13\r
-11 -13 -30 0 -12 8 -11 10 8 10 12 0 22 -4 22 -10z m335 0 c3 -5 2 -10 -4\r
-10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m85 0 c0 -5 -16 -10\r
-35 -10 -19 0 -35 5 -35 10 0 6 16 10 35 10 19 0 35 -4 35 -10z m-2800 -10 c0\r
-5 -3 -10 -7 -10 -5 0 -19 -3 -33 -6 -24 -6 -25 -6 -5 9 23 19 45 22 45 7z\r
m577 4 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m1336 -5 c17 -8\r
27 -22 31 -48 12 -72 12 -71 -56 -71 -60 0 -245 47 -232 59 8 8 196 69 216 70\r
9 1 28 -4 41 -10z m552 1 c25 -11 -1 -11 -35 0 -20 6 -21 8 -5 8 11 0 29 -3\r
40 -8z m69 4 c25 -10 19 -26 -6 -19 -31 10 -47 25 -26 25 9 0 23 -3 32 -6z\r
m-2329 -23 c0 -24 -31 -36 -62 -25 -36 12 -36 27 2 35 42 9 60 6 60 -10z m194\r
13 c42 -9 39 -18 -12 -43 -54 -26 -98 -34 -117 -22 -12 8 -10 15 15 41 30 31\r
53 36 114 24z m1770 -10 c13 -13 -10 -12 -35 2 l-29 16 30 -7 c16 -4 32 -9 34\r
-11z m521 -42 c-19 -7 -100 29 -100 44 0 10 14 7 56 -13 30 -15 50 -29 44 -31z\r
m-3070 38 c0 -5 -9 -10 -21 -10 -11 0 -17 5 -14 10 3 6 13 10 21 10 8 0 14 -4\r
14 -10z m130 0 c-8 -5 -22 -10 -30 -10 -13 0 -13 1 0 10 8 5 22 10 30 10 13 0\r
13 -1 0 -10z m1255 0 c-11 -5 -27 -9 -35 -9 -9 0 -8 4 5 9 11 5 27 9 35 9 9 0\r
8 -4 -5 -9z m515 0 c-19 -13 -30 -13 -30 0 0 6 10 10 23 10 18 0 19 -2 7 -10z\r
m770 0 c12 -8 12 -10 -5 -10 -11 0 -27 5 -35 10 -12 8 -12 10 5 10 11 0 27 -5\r
35 -10z m-2190 -10 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0\r
4 -4 4 -10z m380 -4 c0 -14 -7 -18 -62 -32 -20 -5 -19 -3 7 20 34 28 55 33 55\r
12z m627 3 c-14 -8 -22 -8 -30 0 -8 8 -3 11 19 11 25 -1 27 -2 11 -11z m193 1\r
c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m157\r
-15 c-7 -17 -82 -22 -92 -5 -6 9 14 16 65 23 31 4 34 2 27 -18z m996 9 c26 -9\r
47 -22 47 -29 0 -13 -57 2 -150 38 -36 14 61 5 103 -9z m331 10 c15 -6 23 -34\r
10 -34 -7 0 -34 27 -34 34 0 8 5 7 24 0z m-3939 -24 c-3 -4 -19 -13 -36 -19\r
-37 -13 -36 7 1 26 24 12 44 8 35 -7z m590 10 c-3 -5 -13 -10 -21 -10 -8 0\r
-12 5 -9 10 3 6 13 10 21 10 8 0 12 -4 9 -10z m375 -1 c-12 -9 -10 -10 9 -5\r
17 3 21 2 13 -6 -11 -11 -52 -2 -52 13 0 5 10 9 23 9 18 0 19 -2 7 -11z m915\r
0 c-33 -4 -90 -11 -127 -16 -38 -5 -68 -5 -68 -1 0 4 13 8 29 8 17 0 33 5 36\r
10 4 6 46 9 98 8 91 -1 91 -1 32 -9z m220 1 c-3 -5 -16 -10 -28 -9 -21 0 -21\r
1 -2 9 28 12 37 12 30 0z m100 0 c-27 -12 -43 -12 -25 0 8 5 22 9 30 9 10 0 8\r
-3 -5 -9z m220 0 c4 -6 -5 -10 -19 -10 -14 0 -26 5 -26 10 0 6 9 10 19 10 11\r
0 23 -4 26 -10z m345 -3 c0 -7 -9 -18 -20 -25 -14 -9 -20 -9 -20 -1 0 7 -11 9\r
-30 6 -34 -7 -49 7 -23 22 26 15 93 14 93 -2z m458 -49 c61 -42 55 -52 -25\r
-44 -37 4 -68 8 -69 9 -1 1 -5 24 -8 50 l-7 48 33 -17 c18 -9 52 -30 76 -46z\r
m167 46 c9 -9 14 -19 11 -22 -8 -7 -66 19 -66 29 0 15 38 10 55 -7z m-3485 2\r
c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m183\r
-3 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m747 3 c0 -9 -30\r
-14 -35 -6 -4 6 3 10 14 10 12 0 21 -2 21 -4z m550 -11 c-7 -9 -15 -13 -17\r
-11 -7 7 7 26 19 26 6 0 6 -6 -2 -15z m943 8 c-13 -2 -33 -2 -45 0 -13 2 -3 4\r
22 4 25 0 35 -2 23 -4z m1107 -3 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6\r
5 10 10 10 6 0 10 -4 10 -10z m745 -10 c17 -11 24 -20 17 -20 -8 0 -25 9 -39\r
20 -33 26 -17 26 22 0z m-3269 1 c-7 -11 -46 -21 -46 -12 0 13 13 21 32 21 11\r
0 17 -4 14 -9z m1234 -1 c0 -5 -7 -10 -16 -10 -8 0 -12 5 -9 10 3 6 10 10 16\r
10 5 0 9 -4 9 -10z m-1915 -10 c-27 -12 -43 -12 -25 0 8 5 22 9 30 9 10 0 8\r
-3 -5 -9z m514 4 c29 -6 23 -13 -23 -24 -21 -5 -39 -4 -42 2 -3 5 -11 5 -19\r
-2 -14 -11 -31 2 -21 18 6 9 74 14 105 6z m111 -4 c0 -5 -9 -10 -21 -10 -11 0\r
-17 5 -14 10 3 6 13 10 21 10 8 0 14 -4 14 -10z m457 -14 c22 -21 -62 -25\r
-101 -4 -20 11 -20 11 -1 18 19 7 91 -3 102 -14z m623 14 c0 -5 -12 -10 -27\r
-9 l-28 1 25 8 c14 4 26 8 28 9 1 1 2 -3 2 -9z m304 4 c29 -11 8 -20 -36 -15\r
-41 4 -42 5 -13 12 17 3 31 7 32 8 1 0 8 -2 17 -5z m1349 -26 c59 -21 74 -38\r
35 -38 -32 0 -178 51 -178 62 0 13 72 1 143 -24z m146 13 c48 -16 50 -19 26\r
-23 -33 -7 -85 12 -85 29 0 16 -4 17 59 -6z m293 13 c3 -3 4 -14 1 -24 -4 -16\r
-9 -17 -31 -7 -36 15 -35 14 -27 26 6 11 48 15 57 5z m168 -59 c27 -29 21 -30\r
-54 -11 -62 16 -96 33 -96 46 0 22 22 18 68 -10 65 -40 74 -38 26 5 l-39 35\r
36 -20 c19 -11 46 -31 59 -45z m-3833 49 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6\r
11 1 17 -2 13 -5z m690 0 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13\r
-5z m1303 -5 c0 -3 -11 -11 -24 -19 -21 -11 -27 -10 -40 3 -23 23 -20 25 24\r
24 22 -1 40 -5 40 -8z m1916 -20 c4 -8 1 -8 -14 0 -12 6 -24 16 -28 22 -4 8\r
-1 8 14 0 12 -6 24 -16 28 -22z m273 12 c20 -11 44 -22 54 -25 19 -6 23 -26 5\r
-26 -18 1 -125 70 -109 70 7 0 30 -9 50 -19z m-4234 -1 c-27 -12 -43 -12 -25\r
0 8 5 22 9 30 9 10 0 8 -3 -5 -9z m675 0 c-8 -5 -26 -9 -40 -9 l-25 1 25 8\r
c14 4 32 8 40 9 13 1 13 0 0 -9z m120 0 c0 -5 -15 -9 -32 -9 l-33 1 30 8 c17\r
4 31 8 33 9 1 0 2 -3 2 -9z m969 0 c-25 -14 -106 -25 -94 -12 9 10 43 17 90\r
20 17 1 18 0 4 -8z m419 -7 c2 -8 -6 -13 -22 -13 -26 0 -40 12 -29 24 11 11\r
46 2 51 -11z m42 -5 c0 -13 -23 -5 -28 10 -2 7 2 10 12 6 9 -3 16 -11 16 -16z\r
m116 7 c-11 -8 -27 -15 -35 -15 -13 1 -12 4 3 15 11 8 27 15 35 15 13 -1 12\r
-4 -3 -15z m164 5 c20 -13 10 -19 -22 -13 -15 3 -25 9 -22 14 7 12 25 11 44\r
-1z m-3010 -4 c0 -2 -7 -7 -16 -10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z m320\r
-5 c0 -5 -10 -11 -22 -14 -22 -6 -22 -6 -4 8 23 17 26 18 26 6z m374 -5 c-21\r
-15 -30 -14 -19 3 3 6 14 11 23 11 13 0 13 -2 -4 -14z m121 3 c12 -19 -27 -50\r
-59 -47 -41 4 -43 21 -4 40 41 19 55 21 63 7z m580 -6 c50 -24 44 -37 -12 -29\r
-54 7 -76 22 -53 36 20 13 24 13 65 -7z m172 11 c-3 -3 -12 -4 -19 -1 -8 3 -5\r
6 6 6 11 1 17 -2 13 -5z m158 -4 c-3 -5 -13 -10 -21 -10 -8 0 -12 5 -9 10 3 6\r
13 10 21 10 8 0 12 -4 9 -10z m330 0 c-36 -13 -132 -21 -115 -9 11 8 2 9 -32\r
4 -30 -4 -48 -2 -48 4 0 6 42 10 108 9 59 0 98 -4 87 -8z m560 0 c4 -6 -7 -10\r
-27 -10 -25 0 -29 3 -18 10 19 13 37 13 45 0z m175 0 c0 -5 -11 -10 -25 -10\r
-14 0 -25 5 -25 10 0 6 11 10 25 10 14 0 25 -4 25 -10z m310 -13 c8 -3 0 -6\r
-17 -6 -23 -1 -33 4 -33 14 0 12 5 13 18 7 9 -5 24 -12 32 -15z m524 -11 c16\r
-19 16 -21 2 -24 -22 -5 -126 18 -126 27 0 15 45 29 75 24 17 -3 38 -15 49\r
-27z m819 14 c15 -7 27 -17 27 -21 0 -9 -41 1 -57 14 -14 10 -18 31 -5 25 4\r
-2 19 -10 35 -18z m-4203 -10 c-14 -11 -29 -20 -35 -20 -5 0 1 9 15 20 14 11\r
30 20 35 20 6 0 -1 -9 -15 -20z m760 10 c0 -13 -41 -29 -57 -23 -19 7 -16 21\r
5 26 31 8 52 7 52 -3z m660 0 c-20 -13 -33 -13 -25 0 3 6 14 10 23 10 15 0 15\r
-2 2 -10z m177 -17 c-10 -9 -156 -10 -150 0 2 4 23 7 46 8 23 1 53 4 67 8 25\r
8 50 -3 37 -16z m320 21 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z\r
m248 -15 c5 -5 -31 -9 -85 -8 -88 1 -93 2 -65 14 32 14 132 10 150 -6z m1299\r
5 c46 -8 54 -22 19 -30 -15 -4 -31 -12 -36 -18 -5 -7 -14 -2 -27 14 -23 29\r
-26 55 -6 47 8 -3 31 -9 50 -13z m842 -11 c-6 -6 -36 9 -36 18 0 5 9 4 20 -3\r
10 -7 18 -14 16 -15z m-3626 7 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5\r
10 10 10 6 0 10 -4 10 -10z m2000 0 c0 -13 -50 -13 -70 0 -11 7 -4 10 28 10\r
23 0 42 -4 42 -10z m1199 -10 c12 -6 21 -12 21 -14 0 -7 -46 3 -85 17 l-40 15\r
42 -3 c23 -2 51 -8 62 -15z m-3471 -2 c-3 -7 -15 -14 -29 -16 -23 -2 -23 -2\r
-5 13 24 18 39 20 34 3z m1242 2 c-20 -13 -33 -13 -25 0 3 6 14 10 23 10 15 0\r
15 -2 2 -10z m1083 3 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z\r
m-2823 -13 c0 -12 -42 -31 -50 -23 -6 5 30 33 42 33 4 0 8 -5 8 -10z m326 1\r
c-3 -5 -19 -14 -36 -19 -24 -9 -30 -8 -30 3 0 15 15 23 48 24 13 1 21 -3 18\r
-8z m219 -1 c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4\r
4 -10z m155 6 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10\r
-2 10 -4z m385 -6 c-3 -5 -13 -10 -21 -10 -9 0 -22 -7 -30 -15 -16 -16 -51\r
-20 -78 -9 -27 10 -18 24 17 25 17 1 43 5 57 9 36 12 62 12 55 0z m58 3 c-7\r
-2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m855 -2 c10 -6 7 -10 -11\r
-15 -29 -7 -60 2 -51 15 7 11 45 11 62 0z m472 5 c0 -2 -7 -7 -16 -10 -8 -3\r
-12 -2 -9 4 6 10 25 14 25 6z m665 -6 c4 -6 -7 -10 -24 -10 -17 0 -31 5 -31\r
10 0 6 11 10 24 10 14 0 28 -4 31 -10z m764 -1 c34 -12 40 -24 15 -33 -28 -11\r
-69 -6 -93 11 -23 16 -23 17 -5 24 27 11 47 10 83 -2z m259 -15 c25 -17 29\r
-34 7 -34 -23 0 -85 28 -85 38 0 26 33 24 78 -4z m297 8 c-3 -3 -11 0 -18 7\r
-9 10 -8 11 6 5 10 -3 15 -9 12 -12z m-2540 -2 c-3 -5 -25 -10 -48 -10 -31 0\r
-38 3 -27 10 20 13 83 13 75 0z m126 -13 c-10 -9 -11 -8 -5 6 3 10 9 15 12 12\r
3 -3 0 -11 -7 -18z m1609 18 c0 -3 -12 -10 -26 -15 -14 -6 -23 -14 -20 -19 4\r
-5 -3 -7 -14 -4 -26 7 -26 23 0 23 11 0 20 5 20 10 0 6 9 10 20 10 11 0 20 -2\r
20 -5z m-3420 -15 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4\r
-4 4 -10z m528 -2 c-5 -15 -56 -29 -63 -18 -7 11 24 29 48 30 10 0 17 -5 15\r
-12z m159 6 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m453 -4 c0\r
-5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m70 -5\r
c-13 -16 -50 -21 -50 -7 0 15 13 22 38 22 21 0 22 -2 12 -15z m970 6 c0 -11\r
-51 -21 -65 -13 -5 3 1 9 15 13 36 10 50 10 50 0z m94 -2 c-4 -7 0 -9 14 -5\r
20 7 38 -16 27 -34 -8 -13 -45 1 -45 17 0 10 -6 13 -17 8 -10 -3 -20 -7 -23\r
-8 -3 -1 -6 3 -8 8 -2 6 7 13 20 17 35 9 40 9 32 -3z m230 2 c17 -7 17 -9 -10\r
-30 -17 -13 -36 -20 -48 -17 -11 3 -25 1 -31 -4 -14 -12 -60 33 -50 49 7 12\r
110 14 139 2z m296 -2 c27 -6 50 -15 50 -20 0 -6 -8 -6 -19 1 -11 5 -35 10\r
-53 11 -18 1 -44 5 -58 9 l-25 8 27 1 c15 1 50 -4 78 -10z m157 5 c-3 -3 -12\r
-4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-3287 -24 c-24 -15 -36 -11 -14 4\r
10 8 21 12 24 10 2 -3 -2 -9 -10 -14z m242 -2 c-24 -11 -46 -17 -49 -14 -7 7\r
56 35 77 35 8 0 -5 -10 -28 -21z m278 7 c-33 -19 -50 -18 -26 0 11 8 27 15 35\r
15 10 -1 7 -6 -9 -15z m120 -5 c-17 -13 -39 -19 -70 -19 l-45 1 50 10 c28 5\r
54 13 60 19 5 5 14 9 20 9 5 0 -1 -9 -15 -20z m581 0 c-24 -21 -57 -28 -46\r
-10 3 6 1 10 -5 10 -6 0 -8 5 -5 10 3 6 23 10 43 10 l37 -1 -24 -19z m479 10\r
c0 -14 -70 -32 -115 -28 l-40 3 30 17 c32 18 125 24 125 8z m410 6 c0 -2 -7\r
-7 -16 -10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z m110 -6 c-14 -4 -34 -8 -45 -9\r
-16 -1 -17 1 -5 9 8 5 29 9 45 9 29 -1 29 -1 5 -9z m205 0 c-3 -5 -11 -10 -16\r
-10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m612 -3 c12 -13 -3 -17\r
-93 -24 -62 -5 -80 -9 -59 -13 28 -6 28 -7 -12 -11 -24 -2 -43 -3 -43 -1 0 1\r
10 17 23 33 22 31 23 31 100 27 42 -3 80 -8 84 -11z m330 -8 c-22 -16 -30 -18\r
-48 -8 -28 15 -9 29 40 29 l34 0 -26 -21z m230 7 c-2 -11 4 -13 56 -15 15 0\r
27 -6 27 -12 0 -15 -75 -2 -120 21 l-35 18 37 -1 c20 0 36 -6 35 -11z m213 -2\r
c0 -8 -4 -12 -10 -9 -5 3 -10 10 -10 16 0 5 5 9 10 9 6 0 10 -7 10 -16z m76 1\r
c18 -13 17 -14 -18 -15 -37 0 -59 14 -36 23 22 9 34 7 54 -8z m443 6 c9 -6 10\r
-10 2 -16 -15 -8 -41 1 -41 15 0 12 20 13 39 1z m149 -6 c41 -13 68 -31 128\r
-90 42 -41 72 -75 67 -75 -6 0 -35 11 -64 25 -45 21 -48 24 -20 19 23 -4 31\r
-3 27 5 -4 6 -20 11 -35 11 -27 0 -99 42 -164 97 -24 19 -26 23 -10 23 11 0\r
43 -7 71 -15z m-3788 -5 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10\r
2 0 4 -4 4 -10z m1085 0 c-3 -5 -13 -10 -21 -10 -8 0 -14 5 -14 10 0 6 9 10\r
21 10 11 0 17 -4 14 -10z m258 3 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19\r
-2 13 -5z m317 -3 c0 -5 -13 -10 -30 -10 -16 0 -30 5 -30 10 0 6 14 10 30 10\r
17 0 30 -4 30 -10z m338 -15 c13 -29 5 -33 -14 -7 -15 20 -18 32 -6 32 5 0 14\r
-11 20 -25z m547 16 c10 -18 -17 -23 -33 -7 -15 15 -15 16 5 16 12 0 24 -4 28\r
-9z m69 -10 c12 -13 14 -21 6 -26 -16 -10 -60 3 -60 19 0 31 29 35 54 7z m151\r
9 c17 -6 13 -9 -20 -14 -22 -4 -49 -9 -60 -11 -18 -4 -18 -2 4 16 25 20 44 23\r
76 9z m75 -6 c0 -2 -7 -4 -15 -4 -8 0 -15 4 -15 10 0 5 7 7 15 4 8 -4 15 -8\r
15 -10z m-3430 -1 c-8 -3 -22 -11 -30 -17 -13 -10 -13 -9 -1 7 7 9 21 17 30\r
16 13 0 14 -1 1 -6z m329 -8 c-14 -14 -109 -44 -109 -34 0 5 20 14 44 21 25 6\r
43 15 41 18 -2 3 5 6 16 6 13 0 15 -4 8 -11z m979 0 c12 -12 -23 -25 -68 -25\r
-25 0 -52 -4 -59 -9 -10 -6 0 -8 29 -4 31 4 41 3 36 -5 -8 -13 -67 -14 -106\r
-2 -23 7 -22 9 30 34 52 26 118 31 138 11z m852 5 c0 -5 -15 -10 -32 -9 -31 1\r
-32 1 -8 9 35 11 40 11 40 0z m266 -12 c-9 -5 -35 -10 -59 -11 -23 -1 -45 -6\r
-49 -12 -5 -6 -11 -5 -17 4 -7 11 -10 11 -14 -3 -4 -14 -5 -14 -3 1 1 14 11\r
18 47 20 25 1 56 6 70 11 29 11 49 3 25 -10z m603 16 c49 -10 37 -22 -30 -30\r
-33 -4 -55 -10 -49 -14 14 -8 -21 -20 -60 -20 -14 0 -52 -7 -84 -15 -42 -11\r
-63 -12 -77 -5 -31 17 -15 27 56 35 36 3 65 10 65 15 0 5 20 12 45 16 25 3 48\r
10 51 15 6 11 39 12 83 3z m646 -3 c8 -13 -61 -45 -77 -35 -8 5 0 14 27 26 48\r
21 43 20 50 9z m879 -7 c6 -15 4 -15 -11 -3 -10 7 -20 15 -22 16 -2 2 3 3 11\r
3 9 0 19 -7 22 -16z m271 -24 c10 -17 -19 -10 -42 9 -13 11 -23 22 -23 25 0 9\r
57 -21 65 -34z m-4595 26 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10\r
11 6 0 10 -2 10 -4z m455 -6 c17 0 17 -2 5 -10 -21 -14 -33 -12 -56 6 -18 15\r
-18 15 6 10 14 -3 34 -6 45 -6z m172 4 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11\r
1 17 -2 13 -5z m3121 -3 c9 -5 26 -13 37 -16 l20 -7 -20 -8 c-16 -7 -17 -9 -3\r
-9 9 -1 23 -10 30 -20 8 -11 25 -25 39 -31 21 -10 55 -67 46 -77 -2 -1 -34 10\r
-73 27 -38 16 -118 41 -179 56 -104 26 -144 47 -145 78 0 20 126 -2 190 -33\r
36 -17 74 -31 85 -30 11 0 -1 8 -27 17 -61 22 -66 29 -20 25 35 -2 34 -2 -11\r
11 -27 8 -51 17 -55 20 -9 10 67 7 86 -3z m329 -9 c27 -21 16 -50 -13 -37 -18\r
8 -18 8 -1 12 18 5 18 5 0 19 -25 18 -34 17 -26 -3 6 -16 5 -16 -10 -4 -37 30\r
12 43 50 13z m-4550 2 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z\r
m1183 1 c0 -2 -11 -12 -25 -21 -30 -19 -58 -8 -30 13 18 12 55 18 55 8z m24\r
-17 c-22 -26 -37 -38 -42 -34 -5 5 42 56 52 56 5 0 1 -10 -10 -22z m3616 -48\r
c0 -17 -14 -10 -52 25 -51 47 -48 53 7 15 25 -17 45 -35 45 -40z m-4640 50\r
c-8 -5 -19 -10 -25 -10 -5 0 -3 5 5 10 8 5 20 10 25 10 6 0 3 -5 -5 -10z m120\r
6 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z\r
m120 -5 c0 -14 -41 -41 -62 -41 -25 0 -22 25 5 38 28 13 57 15 57 3z m335 -1\r
c-27 -12 -35 -12 -35 0 0 6 12 10 28 9 24 0 25 -1 7 -9z m510 0 c-3 -5 -10\r
-10 -16 -10 -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z m335 0 c0 -5 -9\r
-10 -21 -10 -11 0 -17 5 -14 10 3 6 13 10 21 10 8 0 14 -4 14 -10z m55 0 c-3\r
-5 -10 -10 -16 -10 -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z m340 0\r
c-4 -7 2 -9 17 -5 29 7 59 -19 33 -29 -8 -3 -22 -3 -30 1 -10 3 -15 1 -13 -7\r
5 -19 -52 -36 -63 -19 -13 20 -11 27 11 49 21 21 56 28 45 10z m471 1 c-10\r
-15 -76 -23 -120 -14 -40 8 -40 8 29 14 39 3 76 6 83 7 7 1 11 -2 8 -7z m44 5\r
c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m840\r
0 c0 -2 -7 -6 -15 -10 -8 -3 -15 -1 -15 4 0 6 7 10 15 10 8 0 15 -2 15 -4z\r
m616 -17 l19 -22 -45 7 c-52 8 -60 14 -40 26 24 15 46 11 66 -11z m-3366 7 c0\r
-2 -7 -7 -16 -10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z m90 -10 c-14 -13 -80\r
-30 -80 -21 0 9 55 34 75 35 17 0 17 -2 5 -14z m160 8 c22 -5 28 -9 18 -15\r
-22 -15 -68 -11 -68 6 0 17 4 18 50 9z m1080 -4 c0 -5 -4 -10 -10 -10 -5 0\r
-10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m215 1 c-6 -4 -25 -11 -42 -14\r
-25 -5 -33 -3 -33 8 0 11 12 15 42 15 24 0 38 -4 33 -9z m688 -8 c32 -7 44\r
-20 29 -35 -8 -8 -23 -3 -52 17 -42 29 -51 42 -22 30 9 -3 29 -9 45 -12z m107\r
9 c0 -5 -11 -14 -25 -20 -31 -14 -33 1 -2 16 28 14 27 13 27 4z m673 -1 c13\r
-5 27 -16 30 -23 4 -11 -8 -14 -52 -15 -52 0 -53 0 -16 7 22 4 31 8 20 9 -11\r
1 -33 8 -50 16 l-30 13 37 1 c20 1 48 -3 61 -8z m72 -22 c4 -6 4 -13 1 -16 -7\r
-7 -46 26 -46 39 0 10 36 -8 45 -23z m80 21 c15 -6 9 -8 -22 -6 -23 1 -45 5\r
-49 9 -10 10 46 8 71 -3z m716 -22 c12 -20 3 -21 -29 -4 -44 23 -49 37 -10 26\r
17 -6 35 -15 39 -22z m-3946 12 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19 12\r
23 12 15 0z m785 1 c-14 -4 -38 -11 -55 -14 l-30 -7 25 15 c14 8 39 14 55 14\r
29 -1 29 -1 5 -8z m410 -1 c0 -5 -8 -10 -17 -10 -15 0 -16 2 -3 10 19 12 20\r
12 20 0z m1028 -6 c39 -23 68 -64 53 -74 -29 -17 -188 36 -198 67 -8 24 108\r
30 145 7z m1862 -14 c36 -31 34 -38 -3 -18 -24 12 -47 33 -47 42 0 12 16 4 50\r
-24z m-4555 10 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19 12 23 12 15 0z m710\r
-1 c11 -17 -79 -99 -109 -99 -25 0 -86 25 -86 35 0 9 141 47 155 41 8 -3 15\r
-1 15 4 0 6 -5 10 -11 10 -5 0 -7 5 -4 10 8 13 32 13 40 -1z m2595 -3 c0 -7\r
-14 -16 -30 -20 -19 -3 -49 -26 -82 -61 -28 -30 -56 -55 -62 -55 -6 0 -38 13\r
-71 28 l-60 29 65 7 c96 10 141 18 136 23 -2 2 -51 -1 -109 -7 -69 -8 -112 -8\r
-123 -2 -16 9 -16 10 2 15 39 12 210 46 249 50 80 7 85 7 85 -7z m56 -2 c17\r
-14 17 -15 1 -10 -10 3 -23 6 -28 6 -5 0 -9 5 -9 10 0 14 13 12 36 -6z m914 1\r
c0 -8 -4 -15 -8 -15 -5 0 -9 7 -9 15 0 8 4 15 9 15 4 0 8 -7 8 -15z m-4021\r
-14 c12 -22 5 -31 -25 -31 -29 0 -39 16 -24 35 17 20 37 19 49 -4z m106 9 c-3\r
-5 -12 -10 -18 -10 -7 0 -6 4 3 10 19 12 23 12 15 0z m70 0 c-3 -5 -13 -10\r
-21 -10 -8 0 -12 5 -9 10 3 6 13 10 21 10 8 0 12 -4 9 -10z m600 4 c13 -5 14\r
-8 3 -15 -19 -13 -36 -11 -18 2 12 9 11 10 -8 6 -12 -3 -20 -1 -16 4 6 11 16\r
11 39 3z m440 -15 c-8 -12 -35 -12 -35 0 0 11 22 20 33 14 4 -2 5 -9 2 -14z\r
m65 12 c0 -9 -41 -23 -49 -16 -3 4 28 20 47 24 1 1 2 -3 2 -8z m321 -18 c7\r
-19 5 -23 -10 -23 -10 0 -21 7 -25 15 -3 8 -16 15 -28 14 l-23 0 23 -11 c40\r
-20 23 -28 -55 -27 -43 0 -86 -2 -95 -6 -11 -4 -18 -3 -18 4 0 17 66 42 93 36\r
12 -2 35 1 51 8 45 20 77 16 87 -10z m224 12 c-16 -7 -34 -10 -40 -7 -5 3 1 9\r
15 13 42 12 57 8 25 -6z m255 -10 c16 -8 30 -22 30 -29 0 -15 -19 -21 -101\r
-31 l-56 -7 -17 41 c-9 23 -16 44 -16 48 0 11 129 -6 160 -22z m50 12 c0 -8\r
-3 -17 -7 -20 -9 -9 -34 13 -27 24 8 14 34 11 34 -4z m48 5 c9 -6 4 -16 -18\r
-37 -31 -30 -38 -23 -18 20 12 27 16 29 36 17z m120 -27 l37 -34 -88 -1 c-82\r
0 -87 1 -78 19 9 16 64 50 84 51 4 0 24 -16 45 -35z m885 28 c-7 -2 -19 -2\r
-25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m1107 -46 c30 -14 73 -33 95 -43 l40\r
-18 -34 -4 c-19 -2 -44 1 -55 6 -12 6 -42 20 -67 31 -48 22 -89 55 -89 72 0 5\r
12 3 28 -4 15 -8 52 -26 82 -40z m-3230 33 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11\r
10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m300 0 c-36 -12 -62 -12 -55 0 3 6 23\r
10 43 9 33 -1 34 -2 12 -9z m1265 -2 c35 -16 31 -28 -9 -28 -38 0 -57 17 -35\r
31 17 11 14 11 44 -3z m975 1 c73 -11 107 -36 143 -104 39 -71 40 -77 14 -70\r
-49 14 -125 56 -172 96 -27 23 -72 52 -100 65 l-50 24 50 0 c28 0 79 -5 115\r
-11z m-2557 -13 c25 -20 21 -33 -18 -51 -32 -16 -38 -16 -85 0 -27 9 -47 21\r
-44 26 3 6 13 9 22 7 9 -2 25 5 34 14 21 21 66 23 91 4z m67 10 c0 -2 -6 -9\r
-13 -15 -10 -8 -14 -7 -14 4 0 8 6 15 14 15 7 0 13 -2 13 -4z m805 -28 c7 -18\r
11 -36 9 -40 -3 -5 -25 -8 -49 -8 -34 0 -47 5 -55 19 -15 28 -13 30 23 46 47\r
21 57 18 72 -17z m2165 -4 c0 -13 -5 -24 -10 -24 -6 0 -9 13 -8 29 3 35 18 31\r
18 -5z m-4233 1 c-15 -14 -35 -25 -44 -25 -33 0 28 48 62 49 6 0 -3 -11 -18\r
-24z m630 5 c-14 -11 -29 -20 -33 -20 -4 0 1 9 11 20 10 11 25 20 33 20 9 0 6\r
-7 -11 -20z m396 6 c4 -10 0 -12 -14 -9 -22 6 -26 23 -5 23 8 0 16 -6 19 -14z\r
m894 -1 c-11 -7 -24 -12 -31 -9 -7 3 -26 -2 -42 -11 -32 -16 -54 -19 -54 -7 0\r
11 87 40 120 41 24 0 24 0 7 -14z m3016 -16 c20 -17 37 -35 37 -40 0 -13 -71\r
24 -94 50 -19 21 -19 21 0 21 11 0 36 -14 57 -31z m-4866 5 c2 -6 -9 -14 -24\r
-17 -34 -6 -40 -2 -23 18 14 17 41 17 47 -1z m138 6 c-3 -5 -11 -10 -16 -10\r
-6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m1109 1 c3 -5 -8 -14 -26\r
-20 -31 -11 -31 -11 -13 9 20 22 31 25 39 11z m1869 -28 c-10 -70 -73 -112\r
-117 -80 -17 12 -14 16 30 54 40 33 81 61 91 63 1 0 -1 -17 -4 -37z m82 27 c3\r
-5 -13 -19 -36 -30 l-41 -21 7 23 c4 13 13 26 19 30 16 11 44 10 51 -2z m216\r
-7 c12 -12 -59 -69 -80 -65 -7 2 -10 -1 -7 -7 4 -5 -10 -22 -31 -36 l-38 -25\r
-6 27 c-6 27 -6 27 -10 -7 -3 -26 -11 -38 -33 -49 -25 -12 -31 -11 -55 6 -14\r
11 -39 23 -56 27 l-30 8 35 30 c85 73 99 81 115 68 8 -7 16 -22 16 -34 2 -19\r
2 -19 6 2 3 17 9 22 21 17 12 -4 10 1 -6 18 -12 13 -22 27 -22 32 0 11 169 0\r
181 -12z m208 -32 c87 -52 119 -79 56 -47 -27 13 -79 37 -115 52 -82 35 -98\r
49 -46 41 21 -3 68 -24 105 -46z m200 32 c10 -10 64 -58 120 -107 55 -49 101\r
-92 101 -97 0 -33 -127 24 -163 73 -29 40 -89 148 -82 148 3 0 13 -8 24 -17z\r
m891 7 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11\r
-10z m-4112 -12 c-2 -6 -15 -15 -28 -20 -23 -9 -23 -8 -5 12 20 22 39 27 33 8z\r
m87 -8 c-10 -11 -25 -20 -33 -20 -12 0 -12 4 3 20 10 11 25 20 33 20 12 0 12\r
-4 -3 -20z m105 17 c0 -2 -9 -12 -21 -23 -15 -14 -20 -15 -17 -4 2 8 8 18 13\r
22 10 8 25 10 25 5z m1859 -11 c10 -11 8 -16 -8 -21 -29 -9 -45 3 -30 21 15\r
18 23 18 38 0z m1249 -6 c37 -11 104 -32 150 -47 l82 -27 0 -36 c0 -44 -15\r
-60 -55 -60 -25 0 -50 17 -126 86 -52 47 -103 89 -114 94 -35 15 -6 11 63 -10z\r
m712 5 c7 -8 8 -15 2 -15 -5 0 -15 7 -22 15 -7 8 -8 15 -2 15 5 0 15 -7 22\r
-15z m-4835 -5 c-3 -5 -14 -10 -23 -10 -15 0 -15 2 -2 10 20 13 33 13 25 0z\r
m436 -6 c-34 -15 -48 -13 -36 5 3 6 21 11 38 10 l32 -1 -34 -14z m1219 7 c0\r
-11 -50 -24 -58 -16 -8 8 19 25 41 25 9 0 17 -4 17 -9z m454 -7 c4 -9 4 -19 2\r
-21 -9 -10 -46 9 -46 23 0 19 36 18 44 -2z m571 -2 c-3 -3 -11 0 -18 7 -9 10\r
-8 11 6 5 10 -3 15 -9 12 -12z m319 10 c3 -5 -9 -9 -27 -9 -26 -1 -28 1 -12 7\r
27 11 33 12 39 2z m-2914 -7 c0 -7 -57 -35 -70 -35 -21 0 -4 24 21 31 30 9 49\r
10 49 4z m948 -15 c-7 -10 -14 -17 -17 -15 -4 4 18 35 25 35 2 0 -1 -9 -8 -20z\r
m142 -1 c10 -5 -6 -9 -44 -9 -52 0 -57 2 -46 15 13 16 57 13 90 -6z m550 11\r
c-8 -5 -26 -9 -40 -9 -23 1 -23 2 5 9 43 11 52 11 35 0z m205 -2 c8 -7 22 -19\r
30 -27 29 -24 7 -24 -60 0 -42 15 -61 26 -53 31 20 12 68 9 83 -4z m123 -5 c4\r
-14 -25 -17 -54 -6 -16 6 -16 7 2 14 25 10 46 7 52 -8z m1696 -44 c36 -33 66\r
-57 66 -52 0 5 -6 16 -12 24 -7 7 16 -14 52 -47 36 -34 96 -80 133 -102 l68\r
-40 -32 -7 c-28 -6 -37 -2 -88 47 -38 37 -90 71 -163 108 l-108 53 0 39 c0 21\r
4 38 9 38 4 0 38 -27 75 -61z m93 1 c63 -34 155 -89 205 -123 l91 -61 -32 -13\r
c-30 -13 -37 -11 -94 19 -34 18 -94 64 -134 101 -41 37 -77 66 -81 63 -5 -3\r
-25 13 -46 35 -21 21 -35 39 -31 39 5 0 60 -27 122 -60z m1343 17 c0 -6 -9 -2\r
-20 8 -11 10 -20 23 -20 28 0 6 9 2 20 -8 11 -10 20 -23 20 -28z m-4875 23\r
c-3 -5 -14 -10 -23 -9 -14 0 -13 2 3 9 27 11 27 11 20 0z m160 2 c-14 -12 -65\r
-32 -65 -26 0 3 15 11 33 19 37 17 45 18 32 7z m1045 -2 c-20 -13 -43 -13 -35\r
0 3 6 16 10 28 10 18 0 19 -2 7 -10z m45 0 c-3 -5 -11 -10 -16 -10 -6 0 -7 5\r
-4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m2092 -56 c-2 -3 -17 0 -33 6 l-28 11\r
29 24 30 23 3 -30 c2 -16 1 -32 -1 -34z m903 39 c23 -12 24 -13 4 -13 -12 0\r
-32 9 -45 20 -21 17 -21 19 -4 13 11 -4 31 -13 45 -20z m540 -22 c14 -12 21\r
-21 17 -21 -16 0 -62 28 -82 50 l-20 23 30 -16 c17 -9 41 -25 55 -36z m-4757\r
14 c-16 -22 -33 -32 -33 -20 0 5 42 45 47 45 2 0 -4 -11 -14 -25z m597 17 c0\r
-12 -23 -32 -37 -32 -9 0 -8 6 5 19 18 21 32 26 32 13z m904 -5 c16 -12 13\r
-15 -35 -31 -30 -10 -88 -20 -129 -23 -73 -5 -75 -5 -57 13 11 12 32 19 55 19\r
20 1 64 2 97 4 60 3 60 3 30 16 -30 14 -30 14 -4 15 14 0 33 -6 43 -13z m826\r
2 c27 -6 50 -14 50 -18 0 -9 -135 -41 -172 -41 -25 0 -117 20 -127 27 -2 2 4\r
12 14 23 15 17 31 20 101 20 46 0 106 -5 134 -11z m85 1 c3 -5 2 -10 -4 -10\r
-5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m-2480 -10 c3 -5 -11\r
-18 -32 -27 -21 -10 -45 -24 -53 -32 -11 -11 -15 -11 -18 -1 -3 7 1 16 8 20\r
10 6 9 9 -1 12 -7 2 -10 11 -6 21 5 12 18 17 51 17 25 0 48 -4 51 -10z m300\r
-2 c14 -6 25 -15 25 -19 0 -10 -66 -29 -103 -29 -15 0 -39 -7 -53 -16 -18 -12\r
-28 -14 -36 -6 -14 14 -1 32 22 32 11 0 36 11 56 25 42 28 52 30 89 13z m492\r
6 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m943 -4 c13 -8 13\r
-10 -2 -10 -9 0 -20 5 -23 10 -8 13 5 13 25 0z m397 -12 c-11 -18 -23 -22 -48\r
-20 -26 2 -30 0 -19 -7 11 -8 2 -11 -35 -11 -43 0 -51 3 -52 19 -1 15 8 21 45\r
29 26 5 64 10 86 11 38 1 38 1 23 -21z m671 -12 c88 -40 89 -41 63 -56 -16 -8\r
-32 -8 -64 0 -61 17 -177 71 -171 81 12 21 100 8 172 -25z m1312 19 c0 -8 -4\r
-15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m575 -11 c38\r
-23 38 -24 10 -18 -49 11 -75 23 -75 34 0 16 22 11 65 -16z m-4575 12 c0 -3\r
-4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m405 -5\r
c-11 -10 -75 -23 -75 -15 0 7 42 23 65 23 11 1 15 -3 10 -8z m185 -11 c-8 -5\r
-17 -7 -19 -4 -3 3 1 9 9 14 8 5 17 7 19 4 3 -3 -1 -9 -9 -14z m480 11 c0 -13\r
-29 -35 -37 -28 -7 8 15 37 28 37 5 0 9 -4 9 -9z m30 -1 c0 -5 -5 -10 -11 -10\r
-5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-1650 -15 c-7 -8 -20 -15\r
-29 -15 -13 1 -13 3 3 15 26 19 42 19 26 0z m150 5 c0 -5 -4 -10 -10 -10 -5 0\r
-10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m164 -6 c16 -42 -23 -84 -78\r
-84 -37 0 -86 12 -86 21 0 11 121 79 141 79 9 0 20 -7 23 -16z m1044 11 c-15\r
-16 -208 -58 -208 -46 0 19 38 40 80 44 76 6 134 7 128 2z m402 -9 c-18 -16\r
-99 -31 -83 -15 6 6 26 15 45 19 49 12 54 11 38 -4z m640 -6 c0 -25 -21 -26\r
-51 0 l-24 19 38 1 c30 0 37 -3 37 -20z m627 8 c12 -20 14 -48 3 -48 -20 0\r
-80 29 -80 39 0 8 20 15 57 20 6 0 15 -5 20 -11z m1603 4 c-7 -3 -6 -10 6 -23\r
16 -18 16 -19 -7 -19 -26 0 -69 25 -69 40 0 5 18 8 41 7 23 -1 36 -3 29 -5z\r
m90 -8 c0 -2 -7 -4 -15 -4 -8 0 -15 4 -15 10 0 5 7 7 15 4 8 -4 15 -8 15 -10z\r
m621 -1 c13 -16 12 -17 -3 -4 -17 13 -22 21 -14 21 2 0 10 -8 17 -17z m81 -13\r
c18 -16 29 -30 23 -30 -16 0 -75 39 -75 50 0 18 19 11 52 -20z m-4625 14 c-3\r
-3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m223 -3 c0 -5 -11 -11 -25\r
-13 -14 -3 -25 -3 -25 -1 0 3 34 19 48 22 1 1 2 -3 2 -8z m1295 -5 c19 -13 17\r
-15 -18 -21 -20 -4 -54 -4 -74 0 l-38 8 30 13 c40 17 77 17 100 0z m873 -54\r
c28 -12 52 -26 52 -31 0 -10 -73 -21 -136 -21 -40 0 -44 2 -44 24 0 15 7 26\r
18 29 13 4 11 5 -5 6 -19 1 -23 7 -23 31 l0 29 43 -22 c23 -12 66 -33 95 -45z\r
m1808 49 c0 -16 -3 -17 -14 -9 -12 10 -7 19 13 28 1 0 1 -9 1 -19z m-3439 3\r
c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m98 -4 c-3 -5 -11 -10\r
-16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m965 -6 c0 -2 -14\r
-4 -31 -4 -16 0 -28 4 -25 9 5 8 56 3 56 -5z m1159 5 l31 -11 0 -74 c0 -84 1\r
-84 -78 -54 -29 11 -58 17 -64 14 -6 -4 -8 -3 -5 3 4 6 -5 15 -19 22 -22 10\r
-24 14 -13 28 10 12 108 83 115 83 1 0 15 -5 33 -11z m1289 -13 c62 -39 69\r
-59 9 -24 -32 18 -57 36 -57 40 0 12 7 10 48 -16z m-4968 4 c0 -5 -5 -10 -11\r
-10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m1270 0 c-8 -5 -19 -10\r
-25 -10 -5 0 -3 5 5 10 8 5 20 10 25 10 6 0 3 -5 -5 -10z m1460 5 c0 -4 -38\r
-15 -105 -31 -16 -4 -27 -4 -23 0 3 5 30 14 60 21 65 16 68 16 68 10z m130\r
-75 l8 -43 -92 7 c-50 4 -104 7 -121 6 -16 0 -55 2 -85 6 l-55 7 44 13 c39 12\r
48 12 69 -2 13 -9 26 -13 29 -11 2 3 -6 11 -19 18 -21 12 -16 15 77 45 96 31\r
101 31 119 14 10 -10 22 -37 26 -60z m1986 56 c45 -21 51 -27 52 -55 1 -32\r
-12 -42 -21 -17 -3 8 -34 33 -68 55 -51 33 -58 41 -38 41 13 0 47 -11 75 -24z\r
m-5151 4 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19 12 23 12 15 0z m75 -10\r
c-8 -5 -17 -7 -19 -4 -3 3 1 9 9 14 8 5 17 7 19 4 3 -3 -1 -9 -9 -14z m585 10\r
c-3 -5 -10 -10 -16 -10 -5 0 -9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z m431\r
-6 c-41 -15 -53 -13 -41 5 3 6 23 11 43 10 l37 0 -39 -15z m64 6 c0 -5 -5 -10\r
-11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m130 1 c0 -14 -18\r
-23 -30 -16 -6 4 -8 11 -5 16 8 12 35 12 35 0z m473 -8 c4 -2 5 -9 2 -14 -8\r
-12 -102 -12 -110 1 -14 23 73 33 108 13z m465 -8 c-52 -18 -94 -24 -194 -28\r
-113 -4 -125 -3 -101 9 14 8 79 18 143 24 64 5 119 12 122 15 3 3 26 5 51 5\r
l46 -1 -67 -24z m2545 -27 c5 6 5 17 2 22 -8 14 -3 13 33 -6 29 -14 43 -34 25\r
-34 -5 0 -25 -4 -45 -9 l-38 -9 1 47 c2 44 2 44 8 11 4 -23 9 -31 14 -22z\r
m933 24 c-4 -3 -14 2 -24 12 -16 18 -16 18 6 6 13 -6 21 -14 18 -18z m-5081 9\r
c-6 -4 -26 -11 -45 -14 l-35 -6 30 14 c34 16 64 20 50 6z m250 -1 c-27 -12\r
-43 -12 -25 0 8 5 22 9 30 9 10 0 8 -3 -5 -9z m620 -15 c-44 -18 -95 -26 -95\r
-16 0 14 82 39 105 33 17 -5 16 -7 -10 -17z m145 15 c0 -5 -15 -10 -32 -9 -31\r
1 -32 1 -8 9 35 11 40 11 40 0z m275 -10 c-34 -23 -59 -26 -53 -7 4 10 36 22\r
73 26 6 0 -3 -8 -20 -19z m677 -10 l33 -29 -60 0 c-44 -1 -67 5 -85 19 -19 15\r
-22 20 -10 24 14 5 50 12 77 15 7 0 27 -12 45 -29z m128 23 c0 -12 -43 -53\r
-56 -53 -10 0 -44 41 -44 55 0 3 23 5 50 5 28 0 50 -3 50 -7z m160 -3 l25 -7\r
-30 -12 c-37 -15 -134 -41 -154 -41 -21 0 36 58 63 63 33 7 69 6 96 -3z m1270\r
-40 c90 -47 190 -120 190 -140 0 -4 -24 -11 -53 -14 -44 -6 -70 -2 -150 24\r
-53 17 -99 35 -102 41 -7 10 4 139 12 139 3 0 49 -23 103 -50z m909 31 c86\r
-44 168 -127 147 -148 -5 -5 -136 76 -136 84 0 6 44 -19 78 -44 18 -13 37 -23\r
43 -21 5 2 -21 23 -58 47 -105 67 -143 93 -143 97 0 10 35 2 69 -15z m-4148\r
-11 c-22 -19 -41 -26 -41 -15 0 5 51 34 60 34 3 0 -6 -9 -19 -19z m306 14 c-3\r
-3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m633 2 c0 -3 -4 -8 -10 -11\r
-5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m524 -12 c10 -27 7 -44\r
-9 -44 -9 0 -15 10 -16 28 -1 23 -2 22 -8 -8 -5 -31 -10 -35 -36 -36 -16 0\r
-49 -6 -72 -13 -23 -6 -45 -11 -50 -9 -4 1 -27 -4 -49 -11 -30 -10 -47 -10\r
-60 -3 -17 10 -17 11 6 20 14 5 59 24 100 41 97 42 114 47 67 21 -61 -34 -37\r
-34 34 0 73 34 85 36 93 14z m1174 4 c-3 -7 -13 -15 -24 -17 -16 -3 -17 -1 -5\r
13 16 19 34 21 29 4z m947 -48 c11 -11 35 -25 53 -31 37 -13 43 -28 10 -26\r
-19 1 -86 38 -185 104 -10 7 9 3 42 -8 32 -10 68 -28 80 -39z m898 32 c9 -8\r
15 -17 13 -19 -6 -6 -63 25 -72 38 -9 16 36 1 59 -19z m-5343 14 c0 -3 -4 -8\r
-10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m985 -6 c-3 -5\r
-21 -10 -38 -9 -27 0 -29 2 -12 9 28 12 57 12 50 0z m85 6 c0 -2 -7 -7 -16\r
-10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z m1297 -2 c-3 -3 -12 -4 -19 -1 -8 3\r
-5 6 6 6 11 1 17 -2 13 -5z m817 0 c10 -4 16 -18 16 -35 0 -38 -36 -41 -50 -3\r
-17 44 -8 54 34 38z m1750 -31 c34 -19 83 -53 110 -74 27 -22 53 -39 57 -39 5\r
0 9 -4 9 -10 0 -5 -15 -10 -33 -10 -65 0 -235 105 -223 137 4 11 1 13 -14 8\r
-12 -4 -26 -1 -34 7 -11 12 -7 14 27 15 30 2 56 -7 101 -34z m-4807 21 c-3 -3\r
-12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m1153 -4 c0 -5 -5 -10 -11 -10\r
-5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m2389 -13 c24 -11 23 -12 -26\r
-15 -58 -3 -106 14 -82 29 16 11 68 4 108 -14z m1638 -43 c54 -37 109 -78 123\r
-91 l25 -25 -41 20 c-23 12 -61 36 -85 54 -24 19 -60 44 -80 56 -20 12 -42 29\r
-49 37 -26 31 11 13 107 -51z m-4637 46 c0 -5 -10 -10 -22 -10 -19 0 -20 2 -8\r
10 19 13 30 13 30 0z m130 0 c0 -5 -9 -10 -19 -10 -11 0 -23 5 -26 10 -4 6 5\r
10 19 10 14 0 26 -4 26 -10z m535 0 c-3 -5 -13 -10 -21 -10 -8 0 -12 5 -9 10\r
3 6 13 10 21 10 8 0 12 -4 9 -10z m407 -3 c-18 -5 -31 -15 -29 -22 3 -6 -4\r
-12 -14 -12 -16 -2 -17 1 -6 17 12 20 29 28 62 28 12 0 6 -4 -13 -11z m-1847\r
-7 c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z\r
m1795 5 c0 -2 -14 -12 -31 -21 -26 -13 -33 -14 -40 -2 -15 23 -10 28 31 28 22\r
0 40 -2 40 -5z m410 -5 c-8 -5 -22 -9 -30 -9 -10 0 -8 3 5 9 27 12 43 12 25 0z\r
m295 0 c-28 -12 -45 -12 -45 0 0 6 15 10 33 9 27 0 29 -2 12 -9z m1068 3 c-7\r
-2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m1937 -37 c34 -14 107 -73\r
114 -92 4 -10 -6 -8 -32 8 -66 40 -182 118 -182 123 0 4 16 -2 100 -39z\r
m-4493 28 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m697 -10 c9\r
-23 4 -26 -48 -31 -25 -3 -44 -10 -43 -16 3 -16 -65 -31 -99 -23 -25 7 -27 9\r
-11 17 10 6 31 7 47 4 35 -8 40 2 8 15 -22 8 -21 9 9 15 18 4 38 14 44 21 17\r
20 85 18 93 -2z m430 7 c3 -5 -17 -14 -44 -21 -40 -9 -54 -9 -65 0 -8 7 -12\r
16 -9 21 7 12 111 12 118 0z m1516 -6 c25 -14 24 -14 -17 -15 -41 0 -57 13\r
-30 23 18 8 20 8 47 -8z m1684 -22 c51 -43 55 -53 24 -53 -39 0 -88 37 -88 65\r
0 34 11 32 64 -12z m-5239 17 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19 12 23\r
12 15 0z m255 0 c-20 -13 -50 -13 -50 0 0 6 15 10 33 10 24 0 28 -3 17 -10z\r
m915 0 c11 -18 -66 -42 -105 -32 l-35 9 50 16 c59 19 82 20 90 7z m105 0 c0\r
-5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m130 1\r
c0 -10 -53 -31 -78 -31 -25 0 6 28 36 33 15 2 30 5 35 6 4 0 7 -3 7 -8z m1025\r
-1 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z\r
m2406 -6 c17 -8 29 -17 27 -20 -5 -4 -68 25 -68 32 0 7 10 4 41 -12z m594 6\r
c3 -5 2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z\r
m-4485 -6 c0 -12 -58 -31 -71 -23 -12 8 -12 10 0 18 14 9 71 12 71 5z m273 -1\r
c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m577 -7 c0 -7 -10 -16\r
-22 -20 -19 -5 -21 -8 -8 -16 8 -5 12 -10 8 -10 -5 0 -9 1 -10 2 -2 2 -16 -7\r
-33 -18 -16 -12 -37 -24 -45 -27 -13 -5 -12 -6 1 -6 9 -1 28 8 43 20 28 22 32\r
19 16 -12 -18 -32 4 -21 29 16 27 40 37 42 71 14 l25 -21 -30 -24 c-17 -13\r
-38 -24 -47 -24 -27 0 -22 9 15 25 23 11 27 14 12 15 -11 0 -30 -7 -42 -15\r
-13 -9 -33 -13 -48 -10 -14 3 -36 7 -50 10 -21 5 -25 11 -25 41 0 19 6 36 13\r
38 6 2 35 10 62 19 64 19 65 20 65 3z m40 -1 c0 -8 -4 -15 -9 -15 -13 0 -22\r
16 -14 24 11 11 23 6 23 -9z m515 5 c3 -5 -3 -10 -15 -10 -12 0 -18 5 -15 10\r
3 6 10 10 15 10 5 0 12 -4 15 -10z m55 6 c0 -9 -30 -14 -35 -6 -4 6 3 10 14\r
10 12 0 21 -2 21 -4z m118 -13 c41 -7 49 -19 21 -33 -17 -10 -25 -8 -47 11\r
-47 41 -48 42 -27 35 11 -4 35 -10 53 -13z m2158 -35 c-4 -29 -8 -54 -10 -55\r
-1 -2 -29 12 -62 29 l-59 32 33 10 c26 7 41 6 65 -8 l32 -17 -29 24 c-26 22\r
-27 25 -10 30 45 11 47 10 40 -45z m854 6 c0 -9 -37 15 -51 33 -10 12 -5 11\r
19 -6 17 -12 32 -24 32 -27z m-4884 21 c-22 -17 -36 -19 -36 -7 0 14 12 22 34\r
22 21 -1 21 -1 2 -15z m1236 3 c-9 -9 -15 -9 -24 0 -9 9 -7 12 12 12 19 0 21\r
-3 12 -12z m413 2 c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6\r
0 7 -4 4 -10z m655 -11 c96 -6 176 -13 178 -14 2 -2 -18 -11 -43 -20 -45 -18\r
-47 -18 -88 4 -39 21 -40 21 -17 2 l25 -21 -106 0 c-107 0 -179 9 -233 30 -16\r
6 -26 13 -23 16 7 8 99 22 117 18 8 -1 94 -8 190 -15z m437 15 c-3 -3 -12 -4\r
-19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m347 -13 c14 -11 16 -11 16 3 0 18 15\r
22 25 6 3 -5 1 -10 -5 -10 -6 0 -4 -10 6 -25 14 -22 15 -25 1 -25 -9 0 -42 11\r
-74 24 -32 13 -73 28 -92 33 -28 7 -21 8 37 7 43 0 77 -5 86 -13z m1182 -42\r
l104 -52 -77 -48 c-43 -27 -83 -49 -89 -49 -7 0 -44 21 -83 47 -69 46 -71 48\r
-71 89 0 92 54 95 216 13z m-4321 41 c-3 -5 -23 -10 -43 -9 -30 0 -33 2 -17 9\r
28 12 67 12 60 0z m185 0 c0 -5 -12 -12 -27 -16 -16 -3 -37 -8 -48 -11 -16 -3\r
-17 -2 -5 6 8 6 11 11 5 11 -5 0 -3 5 5 10 20 13 70 13 70 0z m230 2 c0 -10\r
-81 -44 -88 -37 -3 3 15 14 39 25 51 23 49 22 49 12z m215 -3 c-8 -12 -36 -23\r
-84 -34 -45 -10 -38 14 10 31 43 16 82 18 74 3z m1012 5 c-3 -3 -12 -4 -19 -1\r
-8 3 -5 6 6 6 11 1 17 -2 13 -5z m963 -4 c0 -5 -9 -10 -21 -10 -11 0 -17 5\r
-14 10 3 6 13 10 21 10 8 0 14 -4 14 -10z m145 0 c-3 -5 -32 -10 -63 -9 -44 1\r
-51 3 -32 9 37 12 102 12 95 0z m109 -5 c-5 -11 -20 -15 -58 -14 l-51 1 44 9\r
c24 5 46 11 49 14 11 11 21 4 16 -10z m2169 -32 c11 -13 16 -27 13 -30 -7 -7\r
-66 52 -66 66 0 16 30 -5 53 -36z m-5797 22 c-27 -21 -53 -20 -36 0 7 8 22 15\r
34 15 21 -1 21 -1 2 -15z m399 -21 c-25 -19 -80 -15 -80 6 0 10 14 17 40 20\r
49 7 68 -5 40 -26z m625 14 c0 -6 -9 -8 -20 -5 -13 3 -20 0 -20 -9 0 -16 -36\r
-19 -45 -5 -9 15 33 39 60 33 14 -2 25 -9 25 -14z m1118 5 c44 -7 49 -20 10\r
-28 -18 -4 -55 -18 -83 -31 -27 -14 -40 -17 -28 -8 l22 16 -31 26 -32 27 30 7\r
c16 3 40 4 54 1 14 -2 40 -7 58 -10z m1862 2 l45 -14 -44 2 c-25 1 -46 7 -49\r
15 -5 15 -7 15 48 -3z m-3946 -24 c-21 -16 -41 -27 -44 -24 -3 2 2 8 10 13 8\r
5 24 16 35 24 11 8 24 16 29 16 5 0 -8 -13 -30 -29z m421 19 c-27 -12 -35 -12\r
-35 0 0 6 12 10 28 9 24 0 25 -1 7 -9z m375 0 c0 -5 -15 -10 -32 -10 -25 0\r
-29 3 -18 10 20 13 50 13 50 0z m398 0 c21 0 13 -28 -10 -33 -54 -13 -119 -19\r
-135 -12 -14 5 -5 12 37 30 30 13 64 22 75 20 11 -3 26 -5 33 -5z m1397 -4\r
c18 -13 17 -14 -16 -21 -19 -4 -44 -13 -57 -21 -16 -11 -27 -12 -40 -5 -14 9\r
-12 10 12 11 16 0 26 3 22 8 -4 4 -24 7 -44 7 -27 0 -37 5 -40 18 -3 15 5 17\r
70 17 47 0 81 -5 93 -14z m1190 -19 c77 -32 86 -52 19 -43 -67 10 -204 55\r
-204 68 0 19 121 2 185 -25z m1920 -15 c-7 -7 -45 29 -45 41 0 6 11 0 25 -13\r
14 -13 23 -26 20 -28z m-5088 23 c3 -9 3 -19 -1 -22 -7 -7 -36 16 -36 28 0 15\r
30 10 37 -6z m88 6 c-6 -5 -22 -13 -37 -16 -22 -6 -28 -4 -28 9 0 12 10 16 37\r
16 23 0 33 -4 28 -9z m1039 -31 c-5 -4 -25 -2 -44 5 l-35 12 35 10 c27 8 37 7\r
44 -5 4 -8 4 -17 0 -22z m678 22 c5 -17 0 -17 -60 -10 -36 4 -67 6 -70 4 -4\r
-4 69 -20 141 -31 20 -3 37 -11 37 -17 0 -7 -20 -8 -67 -2 -38 4 -88 7 -113 7\r
-33 -1 -40 1 -25 7 18 8 17 9 -7 9 -14 1 -34 4 -44 8 -12 4 -15 3 -10 -5 10\r
-16 -6 -15 -29 2 -17 12 -14 14 36 21 29 4 63 11 74 16 11 4 45 8 76 8 47 1\r
58 -2 61 -17z m308 8 c0 -5 -9 -10 -20 -10 -11 0 -20 5 -20 10 0 6 9 10 20 10\r
11 0 20 -4 20 -10z m590 0 c0 -5 -7 -10 -16 -10 -8 0 -12 5 -9 10 3 6 10 10\r
16 10 5 0 9 -4 9 -10z m91 -15 c-54 -25 -71 -25 -71 0 0 10 16 15 53 18 28 2\r
57 4 62 5 6 0 -14 -10 -44 -23z m-3571 0 c-7 -8 -20 -15 -29 -15 -13 1 -13 3\r
3 15 26 19 42 19 26 0z m404 0 c3 -9 -3 -19 -14 -25 -17 -9 -20 -7 -20 8 0 32\r
23 44 34 17z m332 -6 c16 -17 16 -22 4 -30 -45 -29 -52 -31 -71 -13 -25 23\r
-24 31 9 48 35 20 36 20 58 -5z m864 17 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10\r
4 0 6 5 11 10 11 6 0 10 -2 10 -4z m1395 -15 c22 -5 87 -13 145 -16 69 -4 110\r
-11 119 -21 20 -19 11 -24 -42 -27 -25 -1 -43 -6 -40 -11 3 -4 -3 -6 -13 -3\r
-11 3 -34 9 -53 12 -26 6 -30 10 -20 17 10 7 8 9 -8 5 -21 -5 -137 22 -161 37\r
-17 10 -4 28 16 22 10 -3 35 -9 57 -15z m425 11 c0 -4 -5 -13 -11 -19 -8 -8\r
-6 -11 6 -10 10 1 20 -4 23 -11 3 -11 -9 -13 -57 -9 -33 2 -61 0 -61 -4 0 -17\r
-35 -9 -48 11 -10 16 -10 20 0 20 7 0 19 -4 26 -9 8 -4 31 1 60 15 51 25 62\r
28 62 16z m-580 -12 c0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9\r
0 16 -4 16 -10z m830 -32 c-64 -89 -66 -91 -88 -84 -12 4 -31 21 -43 38 -22\r
30 -22 31 -3 45 35 27 78 42 122 43 l43 0 -31 -42z m550 31 c20 1 22 -1 10 -9\r
-8 -5 -10 -10 -4 -10 9 0 34 -41 34 -57 0 -9 -44 5 -115 39 -56 26 -65 33 -49\r
40 10 4 37 5 59 1 22 -3 51 -5 65 -4z m600 -23 c7 -9 17 -16 23 -16 6 0 0 12\r
-14 27 -24 25 -23 25 40 -7 64 -34 77 -49 68 -74 -10 -25 -167 68 -167 99 0 9\r
35 -12 50 -29z m744 -33 c37 -24 66 -47 63 -49 -11 -11 -165 77 -170 96 -6 23\r
1 20 107 -47z m37 49 c51 -34 112 -92 105 -99 -9 -9 -77 29 -128 71 -24 21\r
-33 33 -25 38 17 11 19 10 48 -10z m-5251 -2 c0 -5 -9 -10 -20 -10 -11 0 -20\r
5 -20 10 0 6 9 10 20 10 11 0 20 -4 20 -10z m270 1 c-8 -5 -33 -11 -55 -14\r
l-40 -6 35 14 c40 15 85 20 60 6z m320 -1 c0 -5 -15 -10 -32 -10 -25 0 -29 3\r
-18 10 20 13 50 13 50 0z m101 0 c29 -16 23 -28 -18 -39 -48 -14 -83 -14 -83\r
-1 0 6 12 8 28 5 25 -5 25 -5 5 4 -13 6 -23 17 -23 26 0 18 60 21 91 5z m669\r
-10 c-14 -9 -62 -1 -55 9 2 4 18 6 36 3 18 -3 26 -8 19 -12z m107 4 c2 -6 -18\r
-18 -44 -27 l-48 -17 40 5 c31 3 36 2 22 -6 -21 -12 -59 -8 -64 6 -4 12 66 56\r
81 52 6 -2 11 -8 13 -13z m973 11 c0 -2 -10 -9 -22 -15 -22 -11 -22 -10 -4 4\r
21 17 26 19 26 11z m700 -10 c0 -8 -7 -15 -15 -15 -16 0 -20 12 -8 23 11 12\r
23 8 23 -8z m325 -5 c32 -11 74 -29 92 -40 43 -25 55 -25 23 0 l-25 20 35 -6\r
c47 -9 70 -22 70 -39 0 -18 -5 -18 -30 -5 -13 7 -39 4 -91 -11 -41 -11 -118\r
-22 -173 -26 -94 -6 -98 -5 -88 13 21 39 94 114 111 114 10 0 44 -9 76 -20z\r
m-1960 0 c3 -5 -1 -10 -9 -10 -9 0 -16 5 -16 10 0 6 4 10 9 10 6 0 13 -4 16\r
-10z m420 0 c-3 -5 -2 -10 4 -10 5 0 11 6 14 13 3 9 7 9 17 0 9 -9 7 -14 -10\r
-23 -18 -9 -24 -9 -30 0 -6 9 -13 9 -29 1 -11 -7 -21 -9 -21 -7 0 5 49 34 58\r
36 2 0 0 -4 -3 -10z m626 2 c22 -10 83 -81 76 -89 -7 -6 -39 12 -95 54 -42 32\r
-30 56 19 35z m1865 -14 c19 -21 19 -21 -1 -13 -11 4 -31 10 -45 13 -23 5 -23\r
6 -5 13 29 11 30 11 51 -13z m-4473 -2 c9 -22 -18 -38 -55 -34 l-33 3 23 23\r
c25 25 57 29 65 8z m207 10 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11\r
10 11 6 0 10 -2 10 -4z m2225 -6 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19 12\r
23 12 15 0z m1325 -5 c0 -8 -4 -15 -9 -15 -5 0 -11 7 -15 15 -3 9 0 15 9 15 8\r
0 15 -7 15 -15z m301 -1 c74 -22 79 -30 20 -38 -55 -7 -84 2 -101 34 -14 25 5\r
26 81 4z m1094 6 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8\r
-4 11 -10z m-5425 -4 c0 -2 -16 -13 -35 -25 -19 -11 -35 -17 -35 -12 0 5 15\r
16 33 25 35 17 37 18 37 12z m627 -15 c10 -16 9 -20 -4 -26 -10 -3 -20 0 -25\r
10 -5 8 -17 15 -26 15 -15 0 -15 2 -2 10 23 15 44 12 57 -9z m843 14 c0 -5\r
-107 -55 -116 -55 -2 0 -4 6 -4 14 0 9 20 21 48 29 52 16 72 20 72 12z m180\r
-4 c0 -8 -47 -21 -76 -21 -20 0 -17 18 4 23 31 8 72 7 72 -2z m1170 -16 c32\r
-34 21 -39 -35 -17 -44 17 -47 20 -29 30 28 17 38 15 64 -13z m172 4 c21 -5\r
57 -17 80 -26 41 -16 42 -17 18 -24 -64 -18 -94 -11 -135 32 -27 28 -33 39\r
-20 34 11 -4 37 -11 57 -16z m1088 11 c12 -8 9 -10 -12 -10 -16 0 -28 5 -28\r
10 0 13 20 13 40 0z m575 0 c-11 -5 -27 -9 -35 -9 -13 -1 -13 0 0 9 8 5 24 9\r
35 9 l20 0 -20 -9z m-4830 -10 c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11\r
10 16 10 6 0 7 -4 4 -10z m75 -5 c-7 -8 -18 -15 -24 -15 -6 0 -2 7 8 15 25 19\r
32 19 16 0z m430 11 c0 -9 -30 -14 -35 -6 -4 6 3 10 14 10 12 0 21 -2 21 -4z\r
m570 -6 c0 -12 -43 -30 -72 -30 -20 0 -21 1 -3 20 19 21 75 28 75 10z m307 4\r
c34 -9 17 -24 -28 -24 -38 0 -52 13 -26 23 17 8 29 8 54 1z m78 -4 c-11 -5\r
-27 -9 -35 -9 -13 -1 -13 0 0 9 8 5 24 9 35 9 l20 0 -20 -9z m2195 -5 c11 -13\r
10 -14 -4 -9 -9 3 -16 10 -16 15 0 13 6 11 20 -6z m1910 11 c0 -2 3 -12 6 -21\r
6 -14 3 -14 -20 -4 -31 14 -34 29 -6 29 11 0 20 -2 20 -4z m465 -21 c17 -13\r
26 -24 20 -24 -5 0 -23 11 -40 24 -16 14 -25 25 -20 25 6 0 24 -11 40 -25z\r
m145 16 c3 -1 -1 -5 -9 -10 -13 -8 -13 -12 -1 -28 8 -10 0 -5 -18 11 -18 17\r
-32 30 -32 31 0 1 54 -2 60 -4z m-4880 -11 c0 -5 -7 -10 -16 -10 -8 0 -12 5\r
-9 10 3 6 10 10 16 10 5 0 9 -4 9 -10z m395 -28 c-10 -10 -16 -12 -13 -7 3 6\r
8 19 13 30 5 14 9 16 12 7 3 -8 -3 -21 -12 -30z m295 14 c-29 -13 -79 -45 -99\r
-64 -7 -7 -16 -10 -19 -7 -4 3 0 10 8 15 12 8 9 10 -10 10 -14 0 -31 4 -38 9\r
-22 14 8 28 58 28 25 0 58 7 75 15 16 9 34 13 40 10 5 -3 -2 -11 -15 -16z\r
m120 14 c20 -2 18 -4 -13 -12 -39 -10 -67 -6 -67 11 0 5 12 8 28 6 15 -2 38\r
-4 52 -5z m510 6 c0 -9 -40 -13 -46 -5 -3 5 6 9 20 9 14 0 26 -2 26 -4z m2321\r
-25 c24 -16 60 -43 79 -60 l35 -32 -89 6 c-102 7 -120 14 -141 55 -19 37 -19\r
48 3 53 41 11 71 5 113 -22z m602 -21 c-21 -18 -223 -62 -223 -49 0 5 35 29\r
77 53 l76 45 39 -21 c21 -12 35 -25 31 -28z m104 -17 c-3 -2 -16 2 -31 8 -18\r
8 -26 20 -26 37 0 24 0 24 30 -8 17 -18 29 -35 27 -37z m-5692 47 c-3 -5 -11\r
-10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m1013 -6 c-2 -9\r
-13 -20 -24 -25 -20 -7 -20 -5 -10 17 12 27 39 33 34 8z m542 2 c0 -9 -10 -13\r
-25 -12 -23 1 -24 2 -8 14 22 16 33 15 33 -2z m146 -41 c-16 -24 -66 -59 -52\r
-36 4 7 -1 11 -13 11 -14 0 -21 6 -21 19 0 24 93 66 98 44 2 -8 -3 -25 -12\r
-38z m1964 29 c15 -39 12 -47 -12 -40 -13 4 -49 12 -80 18 -32 6 -58 15 -58\r
19 0 5 17 11 38 14 20 4 42 8 47 10 32 11 56 3 65 -21z m627 20 c-3 -3 -12 -4\r
-19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m58 -4 c3 -5 -1 -10 -10 -10 -9 0 -13\r
5 -10 10 3 6 8 10 10 10 2 0 7 -4 10 -10z m461 -12 c50 -57 50 -58 -26 -32\r
-40 13 -79 24 -88 24 -32 0 3 19 43 23 22 2 43 4 46 5 3 1 14 -8 25 -20z m44\r
-22 c0 -12 -5 -7 -19 24 -11 24 -11 24 3 6 9 -11 16 -24 16 -30z m834 28 c3\r
-8 2 -12 -4 -9 -6 3 -10 10 -10 16 0 14 7 11 14 -7z m267 9 c-9 -4 4 -22 40\r
-59 29 -30 49 -54 44 -54 -6 0 -34 24 -62 54 -49 50 -53 64 -18 64 6 0 4 -2\r
-4 -5z m318 -45 c13 -29 31 -62 40 -72 13 -17 10 -16 -17 3 -24 17 -31 28 -27\r
42 4 13 2 19 -6 17 -7 -2 -15 11 -19 30 -11 48 2 39 29 -20z m-5960 38 c-2 -2\r
-15 -9 -29 -15 -24 -11 -24 -11 -6 3 16 13 49 24 35 12z m434 -3 c-13 -2 -23\r
-9 -23 -15 0 -6 14 -8 38 -3 30 5 35 4 25 -6 -7 -7 -31 -13 -53 -13 -32 -1\r
-40 -4 -37 -17 3 -9 -7 -22 -25 -32 -34 -19 -34 -19 7 45 25 40 35 47 60 46\r
23 0 25 -2 8 -5z m211 -8 c-4 -8 -13 -15 -21 -15 -13 0 -13 3 -3 15 7 8 16 15\r
21 15 5 0 6 -7 3 -15z m906 8 c0 -7 -45 -38 -72 -51 -5 -2 -8 8 -8 21 0 19 6\r
27 23 30 38 7 57 7 57 0z m920 -6 c-14 -5 -37 -16 -52 -24 -17 -9 -28 -10 -28\r
-4 0 6 8 11 17 11 9 0 14 3 10 6 -3 3 -29 -2 -57 -11 -41 -14 -54 -15 -63 -5\r
-9 10 -7 11 12 5 17 -5 21 -4 16 5 -13 21 17 30 95 28 59 -1 69 -3 50 -11z\r
m343 -11 c20 -14 46 -26 58 -28 38 -5 35 -28 -4 -28 -38 0 -100 37 -105 63 -5\r
23 9 21 51 -7z m367 15 c-25 -15 -100 -24 -100 -13 0 11 31 18 85 20 21 1 26\r
-1 15 -7z m1170 5 c0 -3 -27 -13 -60 -22 -33 -9 -57 -21 -54 -26 4 -6 -1 -8\r
-12 -5 -11 4 -32 9 -47 13 -17 4 -25 10 -19 16 5 5 20 4 36 -3 18 -8 30 -9 34\r
-3 11 15 122 42 122 30z m420 -22 c31 -17 47 -31 43 -40 -7 -20 -13 -18 -63\r
26 -53 46 -47 50 20 14z m130 0 c0 -2 -9 0 -20 6 -11 6 -20 13 -20 16 0 2 9 0\r
20 -6 11 -6 20 -13 20 -16z m827 -25 c3 -10 9 -19 14 -19 5 0 9 -6 9 -14 0 -7\r
-20 5 -45 27 -25 22 -45 44 -45 49 0 16 62 -24 67 -43z m127 6 c20 -30 8 -32\r
-28 -4 -31 24 -37 56 -7 40 10 -6 26 -22 35 -36z m-5794 25 c0 -5 -7 -10 -16\r
-10 -8 0 -12 5 -9 10 3 6 10 10 16 10 5 0 9 -4 9 -10z m237 4 c-3 -3 -12 -4\r
-19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m1458 -4 c-3 -5 -18 -10 -33 -9 -24 0\r
-25 1 -7 9 28 12 47 12 40 0z m145 -5 c-7 -9 -15 -13 -17 -11 -7 7 7 26 19 26\r
6 0 6 -6 -2 -15z m70 11 c0 -2 -7 -9 -15 -16 -12 -10 -15 -10 -15 4 0 9 7 16\r
15 16 8 0 15 -2 15 -4z m253 -6 c9 -1 17 -5 17 -9 0 -9 -174 -31 -242 -31 -27\r
0 -38 4 -32 9 17 18 129 40 184 36 30 -3 63 -5 73 -5z m307 5 c0 -7 -105 -55\r
-120 -55 -23 0 -1 14 58 37 68 26 62 24 62 18z m158 -10 c57 -17 69 -29 53\r
-49 -9 -11 -8 -14 6 -12 9 0 19 -7 21 -16 6 -29 -13 -21 -94 37 -81 58 -78 67\r
14 40z m742 -17 c19 -17 27 -28 17 -24 -10 3 -25 6 -32 6 -15 0 -45 27 -45 41\r
0 17 25 8 60 -23z m611 5 c8 -8 -3 -13 -41 -18 -41 -6 -55 -4 -70 10 -11 10\r
-18 21 -15 24 6 11 113 -3 126 -16z m-4375 -11 c-18 -16 -18 -16 -6 6 6 13 14\r
21 18 18 3 -4 -2 -14 -12 -24z m434 24 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10\r
4 0 6 5 11 10 11 6 0 10 -2 10 -4z m260 -4 c0 -13 -12 -22 -22 -16 -10 6 -1\r
24 13 24 5 0 9 -4 9 -8z m653 1 c-13 -2 -33 -2 -45 0 -13 2 -3 4 22 4 25 0 35\r
-2 23 -4z m3107 -9 c11 -11 -25 -22 -42 -13 -29 15 -22 32 9 24 16 -4 30 -9\r
33 -11z m236 7 c-3 -4 17 -11 45 -14 56 -7 159 -50 159 -66 0 -6 -4 -11 -9\r
-11 -12 0 -211 49 -251 62 l-35 12 45 12 c25 7 46 12 48 13 2 1 1 -3 -2 -8z\r
m622 -51 c20 0 14 -16 -10 -27 -16 -7 -37 -6 -73 3 -27 7 -53 13 -57 14 -10 0\r
-10 14 1 43 l9 24 59 -28 c32 -16 64 -29 71 -29z m-5223 40 c-3 -5 -11 -10\r
-16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m805 0 c0 -5 -4 -10\r
-10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m226 -5 c-11 -8\r
-33 -15 -49 -15 -25 0 -28 2 -17 15 7 8 28 15 49 15 34 -1 35 -2 17 -15z m94\r
11 c0 -2 -7 -6 -15 -10 -8 -3 -15 -1 -15 4 0 6 7 10 15 10 8 0 15 -2 15 -4z\r
m220 -10 c-14 -8 -29 -12 -34 -8 -10 6 20 20 44 21 8 0 4 -6 -10 -13z m340 7\r
c0 -5 -13 -17 -28 -27 l-27 -19 24 26 c26 28 31 32 31 20z m374 -8 c-6 -16\r
-24 -21 -24 -7 0 11 11 22 21 22 5 0 6 -7 3 -15z m99 -5 c-5 -19 -23 -29 -23\r
-12 0 7 20 32 26 32 1 0 0 -9 -3 -20z m689 4 c38 -20 128 -86 128 -94 0 -3\r
-32 -21 -70 -40 l-70 -34 -38 35 c-20 19 -54 48 -76 63 l-38 29 48 27 c58 33\r
75 35 116 14z m1306 0 c38 -11 -1 -23 -100 -29 -187 -12 -209 -25 -31 -18\r
l161 5 31 -53 c16 -29 29 -54 28 -55 -6 -5 -287 58 -336 76 -31 11 -68 20 -82\r
20 -13 0 -31 5 -39 10 -11 6 1 9 40 9 30 0 96 11 145 25 81 21 136 25 183 10z\r
m1549 3 c4 -6 0 -8 -10 -4 -9 3 -17 1 -19 -5 -2 -6 -9 -4 -16 5 -10 12 -8 15\r
13 15 14 0 28 -5 32 -11z m564 -18 c13 -17 31 -38 40 -47 22 -22 52 -82 45\r
-89 -10 -10 -76 67 -102 118 -27 55 -18 65 17 18z m-5985 -8 c-4 -6 -19 -11\r
-34 -11 l-27 1 24 20 c24 20 51 13 37 -10z m138 19 c-15 -15 -74 -30 -74 -20\r
0 14 32 29 60 30 16 0 21 -3 14 -10z m870 1 c9 -14 -17 -30 -63 -37 -39 -6\r
-43 -5 -39 12 4 24 90 45 102 25z m516 -1 c8 -5 11 -12 7 -17 -5 -4 -13 -1\r
-18 7 -9 12 -10 12 -5 -2 3 -10 -2 -22 -12 -28 -14 -9 -12 -10 8 -4 23 6 24 5\r
10 -11 -14 -16 -12 -17 20 -10 51 11 27 -7 -28 -21 -55 -15 -79 -2 -47 23 16\r
13 17 15 3 10 -26 -9 -22 8 5 22 18 9 18 11 2 6 -18 -4 -17 -3 4 15 26 23 30\r
23 51 10z m194 4 c22 -9 19 -26 -8 -46 -20 -15 -29 -15 -65 -4 -37 11 -41 14\r
-27 25 9 8 31 17 49 21 17 4 33 8 34 9 1 1 8 -2 17 -5z m116 -10 c0 -11 -6\r
-15 -20 -11 -13 3 -21 -1 -25 -14 -4 -10 -11 -19 -16 -19 -15 0 -11 12 13 37\r
25 27 48 30 48 7z m1150 0 c-25 -8 -56 -13 -70 -11 -23 3 -22 4 10 14 19 6 51\r
11 70 11 l35 0 -45 -14z m258 -5 c61 -8 82 -15 82 -26 0 -11 -6 -14 -22 -9\r
-13 3 -56 11 -96 16 -66 9 -112 23 -112 35 0 5 16 3 148 -16z m2322 5 c24 -6\r
41 -19 150 -116 25 -21 61 -53 80 -69 l35 -30 -42 21 c-24 11 -43 25 -43 30 0\r
6 -6 10 -14 10 -8 0 -21 8 -28 18 -7 10 -21 21 -31 25 -9 4 -21 15 -25 26 -4\r
11 -11 20 -17 21 -5 1 -34 15 -62 31 -56 32 -79 55 -47 46 11 -3 30 -9 44 -13z\r
m-5760 -14 c-14 -11 -29 -20 -35 -20 -5 0 1 9 15 20 14 11 30 20 35 20 6 0 -1\r
-9 -15 -20z m478 -2 c-3 -26 -46 -38 -58 -17 -14 21 1 39 32 39 25 0 29 -4 26\r
-22z m592 14 c0 -15 -24 -32 -44 -32 -20 1 -20 1 3 20 24 21 41 26 41 12z\r
m290 -11 c-5 -11 -16 -23 -23 -28 -17 -11 -97 -32 -125 -33 -22 0 -22 1 -5 19\r
33 34 88 61 126 61 34 0 37 -2 27 -19z m58 -3 c-2 -13 -14 -25 -31 -31 -39\r
-13 -45 -2 -17 28 29 31 53 33 48 3z m1007 11 c-16 -5 -46 -14 -65 -20 -57\r
-18 -164 -61 -183 -74 -18 -13 -63 -9 -73 6 -3 5 5 9 18 9 29 0 104 21 178 48\r
78 30 36 27 -54 -3 -93 -31 -146 -33 -146 -6 0 16 9 21 43 25 56 7 244 23 282\r
24 l30 0 -30 -9z m3088 -14 c32 -22 37 -31 37 -65 0 -35 -3 -40 -24 -40 -31 0\r
-268 59 -279 70 -5 4 13 13 40 18 26 6 66 18 88 26 59 22 96 19 138 -9z m155\r
6 c15 -10 64 -40 110 -67 45 -26 82 -51 82 -56 0 -4 -25 8 -57 27 -31 18 -82\r
44 -115 56 -42 16 -58 26 -58 40 0 24 4 24 38 0z m-5758 4 c0 -2 -15 -12 -32\r
-21 l-33 -17 19 22 c17 19 46 29 46 16z m330 -5 c0 -5 -5 -10 -11 -10 -5 0 -7\r
5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m160 -15 c0 -22 -4 -25 -32 -25 l-33\r
0 30 25 c37 30 35 30 35 0z m297 8 c6 -18 -59 -62 -105 -69 -37 -6 -42 -4 -42\r
13 0 11 8 27 18 35 38 33 121 47 129 21z m2274 -25 c-27 -10 -26 -10 -36 20\r
l-7 23 33 -17 c33 -17 33 -17 10 -26z m1404 10 c22 -11 72 -41 110 -67 39 -26\r
79 -51 89 -55 15 -5 17 -9 7 -19 -16 -16 -220 -14 -280 2 l-44 13 7 71 c9 95\r
20 101 111 55z m-1067 8 c15 -8 50 -30 79 -49 l52 -35 -112 -4 c-110 -4 -112\r
-3 -132 21 -11 14 -20 32 -20 41 0 10 -9 14 -29 12 -17 -2 -25 1 -22 7 4 6 22\r
10 41 9 19 -1 38 2 42 5 11 12 73 7 101 -7z m283 4 c10 0 19 -4 19 -9 0 -15\r
-30 -21 -51 -11 -23 13 -26 35 -3 26 9 -3 24 -6 35 -6z m638 -27 c21 -74 11\r
-114 -19 -77 -8 8 -23 20 -34 26 -13 7 -7 -4 17 -30 20 -23 37 -44 37 -47 0\r
-6 -120 1 -185 11 -58 8 -295 85 -295 95 0 13 10 11 81 -10 35 -11 114 -29\r
174 -40 61 -12 125 -25 143 -30 37 -11 37 -10 17 29 -9 17 -13 30 -9 30 3 0\r
-7 15 -22 33 l-27 32 34 6 c72 13 77 12 88 -28z m31 12 c0 -8 -4 -17 -10 -20\r
-6 -4 -10 5 -10 20 0 15 4 24 10 20 6 -3 10 -12 10 -20z m255 0 c33 -7 89 -18\r
124 -24 41 -7 71 -18 82 -30 24 -25 24 -34 2 -22 -19 9 -146 42 -160 40 -4 0\r
30 -13 77 -28 l85 -26 -56 -21 -56 -21 -29 24 c-16 14 -62 47 -101 74 -76 51\r
-89 66 -50 55 12 -4 49 -13 82 -21z m1075 15 c8 -5 11 -10 5 -10 -5 0 -17 5\r
-25 10 -8 5 -10 10 -5 10 6 0 17 -5 25 -10z m-5285 -10 c-3 -5 -14 -10 -23\r
-10 -15 0 -15 2 -2 10 20 13 33 13 25 0z m905 6 c0 -12 -82 -57 -95 -52 -25 9\r
-17 26 13 26 15 1 38 7 52 15 28 16 30 17 30 11z m820 -6 c0 -5 -5 -10 -11\r
-10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m475 -28 c-8 -8 -25 10\r
-25 26 0 13 2 13 14 -4 8 -10 13 -21 11 -22z m1003 3 c22 -8 13 -23 -18 -30\r
-29 -6 -93 16 -134 47 -16 13 -9 13 60 1 43 -7 85 -15 92 -18z m-2428 15 c0\r
-5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m770 -13\r
c23 -10 24 -11 4 -14 -26 -5 -74 13 -74 27 0 12 21 8 70 -13z m240 13 c0 -5\r
-5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m380 -16 c6\r
-14 8 -30 4 -35 -12 -19 -82 -48 -105 -43 -18 5 -21 3 -9 -5 12 -8 9 -12 -13\r
-20 -39 -15 -44 -14 -112 19 l-60 30 63 -3 c34 -2 57 0 50 5 -7 4 -22 8 -33 8\r
-20 1 -20 1 0 12 35 21 149 58 178 58 20 0 30 -7 37 -26z m70 6 c-21 -13 -3\r
-12 22 1 17 9 29 5 72 -25 61 -42 102 -83 93 -92 -4 -4 -52 -9 -108 -12 -113\r
-5 -119 -3 -119 59 0 25 5 39 16 43 9 4 14 9 11 13 -4 3 -2 12 5 20 6 7 13 11\r
17 8 3 -3 -1 -10 -9 -15z m3410 10 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0\r
6 7 10 15 10 8 0 15 -4 15 -10z m-6160 -25 c-7 -9 -15 -13 -18 -10 -3 2 1 11\r
8 20 7 9 15 13 18 10 3 -2 -1 -11 -8 -20z m50 15 c0 -5 -5 -10 -11 -10 -5 0\r
-7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m270 -9 c-13 -25 -24 -32 -66 -41\r
-44 -10 -43 0 3 33 46 33 79 37 63 8z m46 -12 c-31 -36 -126 -113 -126 -101 0\r
5 8 16 18 25 46 43 63 57 87 73 20 13 23 19 13 25 -9 6 -6 9 10 9 l24 0 -26\r
-31z m701 25 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m148 -4\r
c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m945\r
6 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z\r
m1155 -5 c9 -15 -34 -24 -50 -11 -12 10 -23 9 -55 -4 -41 -16 -68 -21 -57 -10\r
25 25 150 44 162 25z m588 -32 c-33 -21 -120 -46 -129 -37 -15 15 10 28 44 23\r
31 -4 33 -4 14 5 -47 20 11 53 65 37 l34 -11 -28 -17z m1491 35 c25 -9 8 -24\r
-27 -24 -29 0 -30 1 -11 15 23 17 19 16 38 9z m460 -3 c3 -5 16 -11 29 -15 33\r
-8 129 -67 173 -106 44 -38 28 -36 -73 12 -60 28 -170 117 -146 118 6 0 14 -4\r
17 -9z m585 -86 c9 -9 10 -18 3 -30 -6 -12 -11 -14 -16 -6 -4 6 -2 11 5 11 7\r
0 5 8 -6 20 -10 11 -22 20 -28 20 -10 0 -127 71 -127 77 0 6 152 -77 169 -92z\r
m-5989 81 c0 -2 -7 -6 -15 -10 -8 -3 -15 -1 -15 4 0 6 7 10 15 10 8 0 15 -2\r
15 -4z m680 -6 c0 -13 -11 -13 -30 0 -12 8 -11 10 8 10 12 0 22 -4 22 -10z\r
m1140 -5 c11 -13 8 -15 -14 -15 -25 0 -33 10 -19 23 10 11 19 8 33 -8z m1510\r
11 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z\r
m1305 -11 c0 -17 -63 -17 -87 0 -22 15 -21 16 32 13 30 -2 55 -7 55 -13z\r
m-4595 0 c0 -2 -10 -10 -22 -16 -21 -11 -22 -11 -9 4 13 16 31 23 31 12z\r
m1120 -5 c-14 -4 -32 -8 -40 -9 -13 -1 -13 0 0 9 8 5 26 9 40 9 l25 -1 -25 -8z\r
m80 2 c0 -5 -6 -17 -14 -28 -17 -23 -41 -8 -30 19 6 17 44 24 44 9z m150 -11\r
c9 -18 3 -21 -64 -41 -57 -17 -76 -27 -80 -43 -3 -12 -8 -18 -11 -15 -11 11\r
40 92 66 105 36 19 77 16 89 -6z m1536 -39 c-36 -3 -90 23 -80 39 8 13 42 11\r
47 -3 3 -7 6 -4 6 6 1 18 5 16 32 -10 l31 -29 -36 -3z m1782 38 c10 -17 10\r
-20 -4 -20 -9 0 -12 5 -8 11 5 9 -1 10 -20 5 -24 -6 -34 2 -19 17 13 13 38 7\r
51 -13z m303 -13 c-5 -5 -17 -4 -30 3 -30 15 -16 32 15 18 15 -7 21 -15 15\r
-21z m381 -14 c26 -26 48 -50 48 -53 0 -3 -20 -4 -45 -2 -28 3 -45 0 -45 -7 0\r
-6 -5 -11 -11 -11 -8 0 -8 4 -2 13 5 6 6 26 2 42 -6 26 -7 27 -8 6 0 -13 -4\r
-22 -7 -19 -7 7 6 78 14 78 4 0 28 -21 54 -47z m395 12 c41 -19 56 -32 74 -67\r
12 -23 30 -55 41 -70 11 -16 17 -28 13 -28 -19 0 -128 86 -164 129 -46 54 -75\r
69 -46 24 l17 -28 -21 21 c-14 13 -19 27 -15 37 7 20 21 17 101 -18z m-5634\r
18 c-13 -2 -33 -2 -45 0 -13 2 -3 4 22 4 25 0 35 -2 23 -4z m67 -3 c0 -5 -8\r
-10 -17 -10 -15 0 -16 2 -3 10 19 12 20 12 20 0z m70 0 c0 -5 -9 -10 -21 -10\r
-11 0 -17 5 -14 10 3 6 13 10 21 10 8 0 14 -4 14 -10z m295 0 c3 -5 1 -10 -4\r
-10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m989 4 c26 -10 19 -20\r
-23 -32 -81 -25 -134 -5 -59 21 50 18 61 19 82 11z m186 -3 c0 -9 -71 -24 -78\r
-16 -2 2 11 8 29 14 45 12 49 13 49 2z m1073 -16 c15 -13 27 -27 27 -30 0 -3\r
-19 -5 -42 -5 l-43 0 25 21 25 20 -31 -15 c-27 -13 -34 -13 -50 -1 -18 13 -18\r
14 6 24 38 15 53 13 83 -14z m673 -3 c-22 -5 -30 3 -21 18 5 8 11 7 22 -2 15\r
-12 14 -13 -1 -16z m1254 18 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10\r
10 10 6 0 10 -4 10 -10z m99 0 c19 0 32 -3 28 -6 -12 -12 -75 -21 -91 -12 -24\r
14 -20 31 7 24 12 -3 37 -6 56 -6z m1195 -6 c5 -14 4 -15 -9 -4 -17 14 -19 20\r
-6 20 5 0 12 -7 15 -16z m-6554 -13 c-5 -11 -15 -23 -21 -27 -6 -3 -3 5 6 20\r
20 30 30 35 15 7z m1656 -19 c-12 -23 -21 -29 -36 -25 -11 3 -20 12 -20 20 0\r
11 -4 13 -12 6 -16 -13 -90 -4 -82 9 4 6 -1 8 -13 4 -11 -4 -31 -2 -44 3 -19\r
8 -11 9 33 6 32 -2 62 -6 68 -10 6 -4 17 -1 25 5 8 6 18 9 23 6 5 -3 22 -1 38\r
3 16 4 30 7 32 5 2 -1 -4 -16 -12 -32z m3386 24 c10 -7 15 -16 11 -19 -12 -13\r
-28 -7 -41 13 -15 24 2 28 30 6z m1598 -28 c31 -43 37 -58 20 -58 -9 0 -60 79\r
-60 93 0 15 11 5 40 -35z m-5982 17 c1 -1 -35 -33 -80 -71 -129 -108 -119\r
-104 -101 -37 17 65 30 84 76 107 27 13 90 14 105 1z m367 5 c-3 -5 -11 -10\r
-16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m201 -14 c-24 -20\r
-33 -22 -53 -13 -42 19 -22 32 57 35 l25 1 -29 -23z m1987 -5 c18 -15 13 -17\r
-74 -38 -127 -30 -134 -19 -25 36 61 30 67 30 99 2z m-1255 -23 c-20 -12 -25\r
-10 -31 11 -7 28 3 34 25 14 14 -13 16 -18 6 -25z m337 32 c3 -5 -3 -10 -14\r
-10 -11 0 -23 5 -26 10 -3 6 3 10 14 10 11 0 23 -4 26 -10z m55 -23 c0 -19 -1\r
-19 -20 -2 -21 19 -18 37 5 28 8 -3 15 -14 15 -26z m3127 14 c23 -11 68 -39\r
100 -62 58 -42 167 -139 156 -139 -11 0 -105 51 -146 78 -23 16 -58 37 -77 48\r
l-35 18 30 7 c23 6 17 7 -25 7 -57 -1 -126 25 -115 43 4 5 13 3 21 -6 9 -8 24\r
-20 35 -25 15 -8 17 -7 13 4 -3 9 -14 18 -25 21 -10 4 -19 11 -19 16 0 15 42\r
10 87 -10z m192 -12 c58 -17 114 -34 124 -36 20 -6 23 -36 5 -55 -13 -13 -14\r
-16 -16 -68 -1 -17 -8 -30 -14 -30 -7 1 -42 28 -78 61 -36 33 -85 74 -110 92\r
-62 43 -76 57 -57 57 8 0 17 -6 20 -14 6 -16 145 -86 168 -85 8 0 -24 19 -70\r
42 -47 23 -86 48 -89 55 -5 16 -4 16 117 -19z m345 -50 c-8 -13 -34 4 -74 46\r
l-35 38 57 -38 c32 -21 55 -41 52 -46z m-5217 54 c4 -10 -44 -43 -62 -43 -8 0\r
-6 45 2 54 11 11 56 3 60 -11z m35 -5 c-7 -7 -12 -8 -12 -2 0 14 12 26 19 19\r
2 -3 -1 -11 -7 -17z m562 13 c4 -5 -3 -7 -14 -4 -23 6 -26 13 -6 13 8 0 17 -4\r
20 -9z m1350 -13 c14 -53 9 -58 -33 -35 l-39 21 26 17 c36 23 39 23 46 -3z\r
m1403 -3 l38 -15 -45 5 c-131 13 -156 17 -170 26 -23 15 131 1 177 -16z m1075\r
3 c29 -29 12 -34 -63 -18 -76 16 -81 40 -9 40 38 0 55 -5 72 -22z m59 6 c12\r
-14 11 -16 -5 -13 -11 2 -21 10 -24 17 -5 17 13 15 29 -4z m1297 -20 c-4 -3\r
-12 5 -18 18 -12 22 -12 22 6 6 10 -10 15 -20 12 -24z m-6153 16 c-9 -14 -125\r
-91 -125 -82 0 4 28 26 63 48 71 48 70 47 62 34z m287 -20 c4 -29 3 -30 -88\r
-65 -51 -20 -110 -48 -131 -62 -61 -41 -23 -7 88 78 57 43 109 79 115 79 7 0\r
14 -13 16 -30z m218 -5 c-18 -19 -36 -33 -38 -30 -8 8 29 56 38 50 6 -4 10 -1\r
10 4 0 6 5 11 12 11 7 0 -3 -16 -22 -35z m434 17 l39 -18 -43 -37 c-24 -20\r
-49 -37 -55 -37 -16 0 -95 58 -95 69 0 11 68 40 95 40 11 0 38 -7 59 -17z\r
m544 1 c-4 -22 -106 -60 -132 -50 -27 11 -3 34 53 51 64 20 83 20 79 -1z m420\r
-15 c32 -20 37 -32 26 -62 -4 -12 -20 -16 -55 -16 -44 0 -52 4 -89 42 -22 23\r
-40 45 -40 49 0 25 110 16 158 -13z m72 17 c-7 -8 -16 -15 -21 -15 -5 0 -9 7\r
-9 15 0 9 9 15 21 15 18 0 19 -2 9 -15z m2675 5 c-3 -6 0 -13 8 -16 14 -5 77\r
-86 77 -98 0 -3 -12 -6 -27 -6 -22 0 -35 11 -60 50 -36 55 -39 66 -20 73 20 9\r
29 8 22 -3z m729 -11 c19 -17 0 -16 -54 1 l-55 18 50 -5 c28 -3 54 -9 59 -14z\r
m586 1 c6 -11 8 -20 6 -20 -3 0 -10 9 -16 20 -6 11 -8 20 -6 20 3 0 10 -9 16\r
-20z m-6116 -15 c-18 -27 -34 -33 -34 -12 0 17 20 37 37 37 10 0 10 -6 -3 -25z\r
m873 14 c27 -10 27 -11 9 -25 -36 -26 -75 -12 -62 21 6 18 16 18 53 4z m537\r
-4 c-6 -16 -24 -21 -24 -7 0 11 11 22 21 22 5 0 6 -7 3 -15z m813 -11 c45 -19\r
35 -31 -32 -39 -73 -10 -97 6 -64 42 24 24 30 24 96 -3z m1316 -71 c5 -64 4\r
-73 -11 -74 -10 0 -12 -3 -4 -6 11 -4 18 -43 7 -43 -11 0 -110 60 -100 61 6 0\r
-6 6 -25 13 -19 7 -33 17 -30 22 3 5 34 35 69 67 77 70 86 66 94 -40z m-3595\r
55 c2 -20 -3 -28 -25 -36 -15 -5 -36 -13 -45 -17 -27 -11 -22 10 13 50 35 40\r
53 41 57 3z m252 -25 c-20 -72 -40 -109 -51 -92 -8 12 -11 12 -19 -1 -9 -13\r
-12 -12 -25 4 -23 30 -18 49 18 82 36 34 80 64 86 58 2 -2 -2 -25 -9 -51z\r
m500 27 c-22 -30 -30 -37 -30 -22 0 9 38 52 46 52 3 0 -4 -13 -16 -30z m569\r
24 c17 -4 31 -9 31 -13 -1 -3 -17 -18 -36 -33 l-36 -27 -29 21 c-16 12 -29 27\r
-29 34 0 20 46 28 99 18z m491 -4 c-8 -5 -24 -9 -35 -9 -16 1 -16 2 5 9 35 11\r
48 11 30 0z m1678 -15 c-15 -14 -40 -38 -57 -54 -23 -22 -33 -26 -52 -19 -22\r
9 -21 10 24 37 75 44 78 54 3 15 l-67 -36 -34 27 c-62 47 -50 53 100 54 l110\r
1 -27 -25z m248 15 c15 -6 65 -48 111 -93 l84 -82 -30 -6 c-17 -4 -51 -4 -76\r
-1 -41 4 -51 12 -125 92 -44 49 -80 91 -80 94 0 10 87 7 116 -4z m1089 -27\r
c37 -55 31 -70 -12 -34 -31 25 -47 31 -88 31 -43 1 -47 2 -30 12 16 10 52 20\r
97 27 4 0 19 -16 33 -36z m359 11 c22 -14 24 -19 14 -32 -11 -13 -10 -14 10\r
-3 30 16 54 8 124 -40 31 -21 59 -39 62 -39 4 0 23 -11 44 -23 20 -13 54 -29\r
75 -36 26 -9 37 -18 37 -32 0 -10 -3 -19 -6 -19 -12 0 -130 74 -193 122 -35\r
26 -69 48 -75 48 -6 0 7 -12 30 -28 87 -58 126 -99 64 -67 -34 17 -44 19 -35\r
5 3 -5 0 -10 -7 -11 -22 -1 25 -18 52 -18 14 -1 53 -18 88 -38 l62 -37 0 -49\r
c0 -43 -2 -48 -17 -42 -10 4 -56 20 -102 37 -76 28 -84 34 -97 67 -8 20 -23\r
54 -34 75 -22 44 -19 56 10 38 31 -19 38 -14 10 8 -14 11 -32 20 -40 20 -8 0\r
-33 14 -55 30 -22 16 -57 41 -77 55 -21 14 -38 28 -38 31 0 12 68 -4 94 -22z\r
m1037 9 c13 -16 12 -17 -3 -4 -17 13 -22 21 -14 21 2 0 10 -8 17 -17z m-5636\r
-3 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19 12 23 12 15 0z m69 -5 c-4 -8 -8\r
-15 -10 -15 -2 0 -4 7 -4 15 0 8 4 15 10 15 5 0 7 -7 4 -15z m162 4 c8 -13\r
-13 -29 -40 -29 -18 0 -18 1 -1 20 21 23 31 25 41 9z m674 7 c0 -3 -4 -8 -10\r
-11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m471 -23 c13 -16 33\r
-38 44 -51 l19 -23 -28 7 c-21 5 -27 4 -22 -5 5 -7 -5 -11 -31 -11 -21 0 -56\r
-2 -78 -5 -22 -2 -31 -2 -21 1 14 5 16 8 6 14 -9 6 -1 20 30 54 23 25 46 46\r
49 46 4 0 18 -12 32 -27z m539 -14 c0 -3 -20 -12 -44 -19 -33 -9 -49 -9 -65\r
-1 -29 16 -26 25 12 43 29 14 35 14 65 0 17 -9 32 -19 32 -23z m654 25 c5 -12\r
2 -15 -11 -9 -47 19 -52 13 -6 -9 28 -13 59 -36 69 -51 17 -26 17 -28 0 -41\r
-15 -10 -22 -11 -36 -1 -18 13 -100 112 -100 122 0 3 18 5 39 5 27 0 41 -5 45\r
-16z m36 -3 c13 -25 13 -34 0 -26 -16 10 -32 45 -21 45 6 0 15 -9 21 -19z m71\r
-12 c65 -46 65 -46 24 -63 -47 -20 -51 -20 -59 0 -4 11 -2 15 8 11 9 -4 6 7\r
-10 30 -42 62 -30 69 37 22z m665 7 c91 -12 130 -22 208 -57 53 -23 99 -46\r
102 -50 3 -5 0 -18 -6 -29 -10 -19 -20 -20 -145 -20 l-134 0 -93 91 c-69 67\r
-87 89 -68 85 14 -3 75 -12 136 -20z m-3071 4 c3 -5 1 -10 -4 -10 -6 0 -11 5\r
-11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m535 -13 c-14 -6 -41 -19 -60 -30 l-35\r
-19 39 35 c27 24 45 33 59 29 20 -5 20 -6 -3 -15z m450 4 c-13 -25 -63 -61\r
-84 -61 -9 0 -16 8 -16 20 0 15 13 27 43 40 56 26 71 26 57 1z m1235 -23 c39\r
-46 75 -108 75 -131 0 -14 -26 -29 -92 -53 l-38 -13 -67 62 c-38 34 -85 76\r
-106 93 l-37 30 72 22 c69 21 100 27 140 31 9 0 33 -18 53 -41z m608 -37 c37\r
-43 67 -82 67 -85 0 -10 -63 -6 -100 7 -35 12 -35 12 -40 85 -3 39 -2 72 1 72\r
3 0 36 -35 72 -79z m1323 59 c18 -7 52 -85 41 -96 -2 -2 -17 -1 -34 2 -20 4\r
-43 23 -73 61 l-43 55 44 -7 c24 -4 53 -11 65 -15z m89 10 c4 -6 -5 -10 -19\r
-10 -14 0 -26 5 -26 10 0 6 9 10 19 10 11 0 23 -4 26 -10z m869 -16 c7 -19 2\r
-18 -19 6 -16 17 -16 20 -3 15 9 -4 19 -13 22 -21z m255 -9 c11 -19 18 -41 15\r
-48 -3 -8 22 -38 61 -71 82 -72 85 -98 6 -47 -13 8 -31 15 -40 16 -16 1 -171\r
101 -171 111 0 2 26 -12 58 -32 96 -62 122 -76 122 -67 0 6 -9 18 -21 29 -29\r
26 -70 110 -63 128 8 21 9 21 33 -19z m-6429 15 c0 -5 -5 -10 -11 -10 -5 0 -7\r
5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m1385 -34 c-11 -23 -24 -36 -36 -36\r
-11 0 -19 5 -19 10 0 11 63 71 68 65 2 -2 -4 -19 -13 -39z m4570 11 c5 -7 24\r
-22 42 -32 77 -45 35 -72 -44 -30 -77 43 -111 72 -94 83 17 12 82 -2 96 -21z\r
m-4706 -24 c37 -22 49 -34 39 -38 -8 -3 -27 -1 -42 5 -15 5 -40 10 -55 10 -40\r
0 -53 17 -34 46 9 14 20 21 27 17 6 -4 35 -22 65 -40z m192 25 c25 -31 24 -37\r
-13 -53 -41 -17 -53 -10 -33 18 8 12 15 29 15 39 0 24 8 23 31 -4z m479 -20\r
c0 -10 -6 -18 -12 -19 -7 0 -2 -5 11 -10 23 -9 23 -10 6 -29 -10 -11 -23 -20\r
-28 -20 -13 0 -97 69 -97 80 0 9 59 25 66 17 3 -2 -1 -11 -9 -19 -11 -10 -11\r
-16 -2 -25 17 -16 31 -3 40 36 5 24 10 30 16 20 5 -8 9 -22 9 -31z m1095 32\r
c3 -5 -1 -10 -9 -10 -9 0 -16 5 -16 10 0 6 4 10 9 10 6 0 13 -4 16 -10z m1688\r
-41 c-76 -27 -124 -24 -156 9 -15 15 -27 30 -27 33 0 2 52 -2 116 -10 l115\r
-16 -48 -16z m-3938 31 c-3 -5 -13 -10 -21 -10 -8 0 -14 5 -14 10 0 6 9 10 21\r
10 11 0 17 -4 14 -10z m314 -21 c-13 -25 -39 -25 -39 0 0 20 17 31 37 24 9 -4\r
10 -10 2 -24z m971 4 c-62 -81 -80 -107 -85 -124 -4 -11 -11 -17 -16 -13 -6 4\r
-4 13 7 25 9 10 14 27 11 39 -3 11 -1 20 4 20 5 0 9 -5 9 -11 0 -6 18 12 40\r
40 22 28 43 51 46 51 3 0 -4 -12 -16 -27z m930 13 c0 -8 -15 -26 -33 -40 -18\r
-14 -48 -45 -67 -70 -18 -26 -39 -46 -45 -46 -16 0 -51 40 -59 67 -6 19 -1 23\r
41 37 35 11 39 14 13 9 -61 -10 -65 -9 -65 17 0 24 2 25 90 31 50 3 98 6 108\r
7 9 1 17 -5 17 -12z m1451 -8 c23 -36 -1 -37 -73 -2 l-53 26 59 -6 c33 -3 63\r
-11 67 -18z m559 -5 c58 -30 65 -44 28 -55 -17 -6 -13 -7 12 -4 38 4 32 10 95\r
-87 l18 -28 -52 30 c-28 17 -62 40 -74 52 -12 12 -44 36 -72 53 -27 18 -56 40\r
-64 49 -12 15 -10 17 21 17 19 0 59 -12 88 -27z m331 15 c22 -6 39 -14 39 -18\r
0 -5 -64 -40 -74 -40 -4 0 -26 58 -26 66 0 7 23 4 61 -8z m695 -19 c4 -8 1 -8\r
-14 0 -12 6 -24 16 -28 22 -4 8 -1 8 14 0 12 -6 24 -16 28 -22z m63 16 c34\r
-17 48 -45 23 -45 -22 0 -82 37 -82 50 0 14 26 12 59 -5z m436 5 c3 -5 2 -10\r
-4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m-5705 -10 c0\r
-12 -34 -30 -57 -30 -13 0 -10 5 12 20 33 22 45 25 45 10z m210 1 c0 -5 -6\r
-14 -14 -20 -10 -8 -16 -8 -25 3 -9 11 -9 15 1 19 21 9 38 8 38 -2z m586 -3\r
c-3 -7 -7 -25 -10 -40 -7 -31 -26 -38 -26 -10 -1 16 -1 16 -11 -1 -8 -14 -14\r
-16 -25 -6 -22 18 -17 27 24 48 44 24 53 25 48 9z m72 -4 c-2 -9 -13 -23 -25\r
-32 -22 -14 -23 -13 -23 17 0 27 4 31 26 31 18 0 25 -5 22 -16z m62 6 c0 -5\r
-4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m640 -11\r
c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10 10 -16z m212\r
2 c32 -19 48 -19 138 1 9 2 16 -6 18 -20 3 -20 0 -23 -16 -18 -11 4 -23 2 -27\r
-4 -4 -6 4 -10 20 -10 17 0 28 -7 34 -22 5 -13 7 -25 5 -27 -2 -2 -27 15 -57\r
37 l-53 41 -43 -15 c-58 -20 -88 -13 -41 9 19 10 27 15 17 12 -10 -3 -33 -5\r
-50 -5 -23 0 -28 -3 -18 -9 23 -15 -55 -26 -85 -12 -36 16 -29 27 29 44 70 21\r
90 20 129 -2z m1884 -3 c-3 -13 -6 -27 -6 -33 0 -5 -5 -3 -10 5 -15 23 -12 50\r
6 50 12 0 15 -6 10 -22z m1437 -41 l57 -34 -37 -11 c-21 -6 -55 -14 -75 -17\r
l-38 -7 26 -20 c35 -28 24 -33 -20 -7 -43 25 -47 49 -8 49 20 0 23 3 13 9 -8\r
5 -21 7 -29 3 -12 -4 -14 -1 -9 12 4 10 7 22 7 28 0 5 14 7 33 4 l32 -5 -27\r
11 c-17 7 -28 20 -28 31 0 18 1 18 23 3 12 -8 48 -31 80 -49z m570 31 c6 -22\r
5 -22 -8 -4 -17 22 -20 40 -6 32 5 -3 11 -16 14 -28z m187 22 c0 -5 -4 -10\r
-10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-5779 -61 l-20\r
-32 -7 28 c-6 23 -2 32 17 48 20 16 24 17 27 4 2 -8 -6 -30 -17 -48z m224 41\r
c-10 -11 -20 -18 -23 -15 -7 6 18 35 31 35 5 0 2 -9 -8 -20z m3421 -7 c18 -16\r
34 -30 34 -33 0 -3 -21 -4 -46 -2 -35 3 -44 7 -40 19 3 8 6 21 6 29 0 20 6 18\r
46 -13z m390 -28 c37 -25 63 -45 56 -45 -6 0 -60 19 -119 42 -93 36 -104 43\r
-83 49 41 13 75 2 146 -46z m1236 23 c-15 -15 -26 -4 -18 18 5 13 9 15 18 6 9\r
-9 9 -15 0 -24z m85 11 c48 -26 110 -85 116 -111 4 -12 -22 5 -68 46 -40 37\r
-78 66 -83 66 -6 0 -14 5 -17 10 -10 16 12 12 52 -11z m-6317 8 c0 -2 -12 -14\r
-26 -28 -25 -22 -26 -23 -15 -2 9 18 19 26 39 32 1 1 2 0 2 -2z m130 -6 c0 -5\r
-7 -12 -16 -15 -14 -5 -15 -4 -4 9 14 17 20 19 20 6z m599 -17 c-13 -14 -37\r
-33 -53 -41 -38 -20 -168 -64 -173 -59 -13 13 194 126 231 126 18 0 18 -2 -5\r
-26z m281 22 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10\r
-2 10 -4z m5636 -18 l19 -21 -27 18 c-29 18 -34 25 -20 25 5 0 17 -10 28 -22z\r
m-3466 -70 c99 -88 120 -116 79 -105 -13 4 -73 9 -134 12 -60 4 -129 11 -152\r
17 l-42 10 29 43 c31 46 97 105 115 105 6 0 53 -37 105 -82z m3600 54 c0 -15\r
-2 -15 -10 -2 -13 20 -13 33 0 25 6 -3 10 -14 10 -23z m-6430 8 c0 -5 -5 -10\r
-11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m63 -10 c6 -23 -3\r
-26 -21 -8 -16 16 -15 28 2 28 7 0 16 -9 19 -20z m377 15 c0 -9 -137 -145\r
-146 -145 -9 0 128 147 139 149 4 0 7 -1 7 -4z m120 -8 c0 -18 -29 -57 -42\r
-57 -11 0 -37 29 -38 43 0 9 38 25 63 26 9 1 17 -5 17 -12z m980 -17 c18 -16\r
38 -30 42 -30 5 0 6 -5 2 -11 -6 -10 -74 -7 -144 6 -28 5 -39 15 -17 15 10 0\r
17 6 17 13 0 13 33 35 56 36 6 1 26 -12 44 -29z m1761 19 c20 -10 20 -11 3\r
-30 -9 -10 -26 -19 -37 -19 -12 0 -17 -5 -14 -14 7 -17 -18 -42 -27 -27 -3 5\r
0 12 6 14 9 4 8 6 -2 6 -8 1 -26 10 -40 21 l-25 19 45 20 c53 23 65 25 91 10z\r
m1299 -40 c105 -37 201 -92 213 -123 12 -30 -156 5 -248 52 -27 14 -86 40\r
-130 58 -45 18 -73 35 -65 37 88 30 67 32 230 -24z m537 29 c41 -22 64 -57 88\r
-135 9 -30 0 -29 -91 9 -64 26 -78 37 -95 69 -24 48 -24 46 9 63 36 20 40 20\r
89 -6z m989 -145 c29 -24 58 -43 63 -43 14 0 23 -18 12 -24 -5 -4 -22 4 -38\r
17 -15 13 -68 45 -118 71 -87 46 -174 104 -175 117 -1 22 35 13 74 -19 25 -20\r
60 -45 78 -55 l33 -18 -30 23 c-57 44 -95 80 -95 90 0 6 32 -19 71 -53 39 -35\r
96 -83 125 -106z m70 146 c19 -22 19 -22 -3 -10 -13 6 -23 16 -23 21 0 15 5\r
12 26 -11z m74 -4 c13 -14 21 -27 18 -30 -2 -3 -17 9 -33 25 -16 17 -24 30\r
-19 30 6 0 21 -11 34 -25z m-6385 2 c-32 -21 -77 -38 -70 -27 7 11 62 38 80\r
39 5 1 1 -5 -10 -12z m70 3 c-3 -5 -16 -15 -28 -21 -21 -10 -21 -9 2 10 25 23\r
36 27 26 11z m740 -12 c-8 -25 -44 -68 -57 -68 -4 0 -8 14 -8 31 0 34 22 58\r
53 59 14 0 17 -5 12 -22z m538 -3 l18 -25 -35 0 c-19 0 -42 3 -51 6 -13 5 -11\r
10 12 25 36 23 35 23 56 -6z m4561 19 c9 -3 16 -10 16 -15 0 -14 -26 -10 -40\r
6 -13 16 -3 20 24 9z m-5014 -8 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5\r
11 10 11 6 0 10 -2 10 -4z m102 -6 c60 -17 80 -85 34 -115 -48 -32 -87 -36\r
-122 -15 -55 34 -53 64 7 114 35 30 32 29 81 16z m184 -5 c18 -13 16 -14 -20\r
-15 -33 0 -37 2 -26 15 15 19 21 19 46 0z m324 11 c0 -3 -4 -8 -10 -11 -5 -3\r
-10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m595 -25 c-6 -5 -57 -39 -114\r
-75 l-104 -64 -33 26 -32 26 19 37 c22 44 28 46 157 63 92 12 128 8 107 -13z\r
m-1009 9 c11 0 12 -4 4 -19 -15 -28 -12 -39 5 -17 11 15 21 17 51 11 31 -5 35\r
-9 23 -20 -8 -7 -31 -20 -51 -29 -35 -14 -38 -14 -38 2 0 9 -9 32 -21 51 -17\r
28 -18 33 -4 27 9 -3 23 -6 31 -6z m1167 -2 c31 -12 34 -25 10 -44 -21 -16\r
-53 -18 -53 -4 0 18 -17 10 -27 -12 -11 -22 -11 -22 -18 -3 -5 11 -15 28 -24\r
38 -13 16 -13 19 -1 28 19 11 77 10 113 -3z m290 -34 c38 -25 66 -51 64 -57\r
-6 -19 -125 -15 -179 6 -39 15 -48 23 -48 43 0 19 8 29 33 39 48 21 56 19 130\r
-31z m667 11 c0 -7 7 -16 16 -19 18 -7 9 -26 -12 -26 -8 0 -12 4 -9 10 3 5 -1\r
20 -9 32 -20 28 -21 44 -1 28 8 -7 15 -18 15 -25z m3365 15 c10 -11 16 -20 13\r
-20 -3 0 -13 9 -23 20 -10 11 -16 20 -13 20 3 0 13 -9 23 -20z m-6783 -12 c-7\r
-7 -12 -8 -12 -2 0 14 12 26 19 19 2 -3 -1 -11 -7 -17z m376 -32 c-2 -16 -11\r
-22 -41 -24 -37 -3 -38 -3 -31 25 11 47 22 55 50 36 16 -10 24 -24 22 -37z\r
m418 28 c17 -24 16 -26 -7 -50 -16 -15 -41 -26 -74 -31 l-49 -6 18 29 c19 30\r
75 84 88 84 4 0 15 -12 24 -26z m664 22 c0 -2 -9 -6 -20 -9 -11 -3 -20 -1 -20\r
4 0 5 9 9 20 9 11 0 20 -2 20 -4z m1077 -7 c-14 -8 -22 -8 -30 0 -8 8 -3 11\r
19 11 25 -1 27 -2 11 -11z m1172 -12 c68 -35 131 -76 131 -86 0 -5 -24 -12\r
-52 -16 -29 -3 -61 -9 -71 -12 -12 -3 -33 10 -64 41 l-46 46 23 25 c13 14 25\r
25 28 25 2 0 25 -11 51 -23z m816 13 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0\r
6 2 10 4 10 3 0 8 -4 11 -10z m210 -20 c76 -30 175 -77 175 -84 0 -1 -50 10\r
-111 25 -106 26 -158 50 -167 77 -6 19 22 14 103 -18z m481 -32 c2 -32 -1 -58\r
-6 -58 -8 0 -70 100 -70 114 0 4 16 6 37 4 l36 -3 3 -57z m-5036 32 c-12 -22\r
-41 -40 -66 -40 -14 0 -14 2 -3 16 10 12 53 36 77 43 1 1 -2 -8 -8 -19z m103\r
-21 c-5 -18 -15 -35 -22 -37 -11 -4 -12 2 -7 24 8 30 26 58 33 50 2 -2 0 -19\r
-4 -37z m781 26 c-4 -8 -10 -15 -15 -15 -4 0 -6 7 -3 15 4 8 10 15 15 15 4 0\r
6 -7 3 -15z m926 1 c0 -17 -14 -29 -23 -20 -8 8 3 34 14 34 5 0 9 -6 9 -14z\r
m1502 0 c28 -21 0 -36 -31 -17 -7 5 -10 14 -7 20 9 14 17 14 38 -3z m1848 -6\r
c6 -11 9 -20 7 -20 -2 0 -12 9 -22 20 -10 11 -13 20 -7 20 6 0 16 -9 22 -20z\r
m870 10 c8 -5 11 -10 5 -10 -5 0 -17 5 -25 10 -8 5 -10 10 -5 10 6 0 17 -5 25\r
-10z m-5967 -28 c-4 -16 -13 -22 -32 -22 l-26 0 30 24 c35 28 36 28 28 -2z\r
m382 -13 c-22 -22 -53 -50 -68 -61 l-28 -20 -25 23 c-13 12 -21 26 -17 30 5 3\r
37 16 73 28 36 12 72 26 80 31 28 18 24 10 -15 -31z m1022 14 c-3 -3 -11 -2\r
-17 2 -9 6 -9 10 1 16 14 8 27 -7 16 -18z m716 -18 c15 -25 27 -48 27 -50 0\r
-3 -99 -84 -167 -138 -9 -7 -29 4 -69 39 -53 45 -56 49 -38 62 38 26 208 132\r
213 132 4 0 18 -20 34 -45z m210 30 c-6 -17 -25 -15 -31 3 -2 7 5 12 17 12 14\r
0 19 -5 14 -15z m2041 -4 c13 -15 14 -20 4 -25 -7 -3 -3 -3 9 0 17 4 30 -6 62\r
-48 22 -29 54 -70 72 -90 24 -29 27 -38 15 -38 -48 0 -213 128 -202 157 3 8 2\r
12 -3 9 -4 -3 -17 4 -27 15 -16 17 -16 22 -4 29 24 15 56 11 74 -9z m679 -1\r
c32 -16 64 -67 50 -81 -15 -15 -73 -23 -73 -10 0 6 11 11 24 11 14 0 27 4 30\r
9 3 4 -12 5 -34 1 -22 -4 -42 -5 -45 -2 -13 13 -1 95 14 89 3 -2 19 -9 34 -17z\r
m817 13 c0 -5 -5 -15 -10 -23 -8 -12 -10 -11 -10 8 0 12 5 22 10 22 6 0 10 -3\r
10 -7z m610 -14 c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10\r
-11 10 -16z m-6278 -11 c-7 -7 -12 -8 -12 -2 0 14 12 26 19 19 2 -3 -1 -11 -7\r
-17z m485 0 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m5351 -50\r
c28 -21 52 -43 52 -48 0 -5 6 -7 14 -4 18 7 65 -17 113 -58 28 -24 33 -26 18\r
-8 l-20 24 25 -15 c30 -19 149 -168 150 -188 0 -8 -6 -11 -16 -7 -9 3 -21 6\r
-28 6 -7 0 -42 28 -77 63 -35 34 -93 85 -129 112 -36 27 -68 54 -72 61 -5 7\r
-24 10 -53 7 -40 -5 -49 -2 -90 31 -45 37 -55 62 -34 83 16 16 80 -10 147 -59z\r
m-6294 47 c-4 -8 -9 -15 -13 -15 -4 0 -18 -10 -30 -21 l-23 -22 7 24 c11 34\r
25 49 46 49 12 0 16 -5 13 -15z m1491 5 c-28 -12 -57 -12 -50 0 3 6 21 10 38\r
9 27 0 29 -2 12 -9z m329 1 c15 -6 9 -12 -37 -36 -47 -25 -57 -27 -71 -16 -20\r
17 -20 25 0 45 16 17 74 20 108 7z m740 -10 c21 -23 11 -51 -18 -52 -20 -1\r
-19 -1 3 -8 35 -9 8 -28 -50 -35 -39 -4 -50 -2 -65 15 -18 20 -18 21 1 35 27\r
20 35 18 36 -13 1 -17 3 -21 6 -10 2 9 12 17 21 18 13 0 11 3 -5 11 -30 14\r
-29 24 5 42 36 20 46 20 66 -3z m1355 8 c46 -16 42 -30 -13 -43 -23 -6 -27 -4\r
-23 8 4 9 2 18 -3 21 -12 8 -13 25 -1 25 4 0 22 -5 40 -11z m631 -15 c0 -14\r
-21 -19 -33 -7 -9 9 13 34 24 27 5 -3 9 -12 9 -20z m1519 7 l24 -19 -53 -30\r
c-49 -28 -55 -29 -76 -15 -13 8 -22 19 -19 23 3 4 -2 13 -10 20 -24 20 -18 29\r
23 33 75 8 87 6 111 -12z m396 -1 c10 -11 24 -20 31 -20 13 0 64 -56 64 -71 0\r
-18 -16 -8 -39 26 -13 19 -28 32 -33 29 -10 -6 -58 33 -58 48 0 14 16 9 35\r
-12z m351 -7 c-7 -7 -26 7 -26 19 0 6 6 6 15 -2 9 -7 13 -15 11 -17z m-6391 7\r
c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m455\r
-11 c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10 -11 10 -16z\r
m735 9 c31 -14 31 -18 -2 -50 l-28 -27 -2 45 c-2 49 -3 48 32 32z m278 -39\r
c-20 -28 -42 -53 -49 -56 -7 -2 -29 4 -50 15 l-38 19 25 15 c13 8 40 25 59 36\r
19 12 47 22 62 22 l28 0 -37 -51z m1758 9 c10 -19 10 -19 -18 -2 -15 10 -30\r
19 -32 20 -1 2 0 8 4 14 8 13 30 -2 46 -32z m-2084 16 c3 -8 1 -33 -6 -54\r
l-11 -39 -45 16 c-59 22 -65 47 -17 73 45 24 71 25 79 4z m416 -12 c-13 -2\r
-43 -24 -69 -48 -25 -25 -48 -44 -50 -41 -2 2 19 29 47 60 46 52 52 56 72 45\r
l22 -13 -22 -3z m452 2 c-23 -17 -32 -10 -15 11 7 8 17 12 23 8 6 -4 3 -11 -8\r
-19z m1115 -1 c0 -13 -3 -13 -15 -3 -8 7 -12 16 -9 21 8 13 24 1 24 -18z m682\r
-7 c10 -11 18 -16 18 -10 0 5 -5 15 -12 22 -9 9 9 12 84 12 52 0 111 3 129 6\r
l34 7 -45 -47 c-24 -25 -53 -46 -65 -46 -15 0 -16 -3 -7 -9 11 -6 7 -13 -14\r
-30 -32 -26 -40 -26 -47 -3 -2 9 -8 24 -11 33 -6 13 -1 15 26 13 l33 -3 -31 8\r
c-17 4 -36 11 -43 15 -6 4 -24 9 -39 12 -15 2 -51 9 -81 15 -30 6 -86 12 -124\r
13 -47 1 -72 5 -75 14 -3 10 23 11 125 6 114 -6 130 -9 145 -28z m-4432 -5\r
c-10 -20 -30 -29 -30 -14 0 10 33 44 37 39 3 -2 0 -14 -7 -25z m1060 3 c0 -8\r
-4 -14 -10 -14 -5 0 -10 9 -10 21 0 11 5 17 10 14 6 -3 10 -13 10 -21z m179\r
-8 c-7 -14 -16 -26 -20 -26 -4 0 -1 14 8 31 18 36 29 33 12 -5z m1680 -12 c61\r
-10 50 -21 -29 -29 -77 -8 -100 1 -100 40 0 32 7 35 49 14 22 -10 57 -21 80\r
-25z m1759 5 c-23 -41 -43 -57 -55 -45 -6 5 64 86 75 86 2 0 -7 -19 -20 -41z\r
m2216 15 c7 -19 2 -18 -19 6 -16 17 -16 20 -3 15 9 -4 19 -13 22 -21z m117\r
-16 c15 -28 5 -21 -21 15 -15 20 -17 27 -6 18 9 -8 22 -23 27 -33z m-6706 -6\r
c-35 -32 -40 -34 -43 -18 -5 21 34 48 78 55 3 0 -13 -16 -35 -37z m130 16 c0\r
-10 -18 -40 -39 -67 l-39 -49 -34 16 c-18 9 -33 19 -33 22 0 4 23 28 50 54 52\r
49 95 60 95 24z m190 12 c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16\r
10 6 0 7 -4 4 -10z m485 -11 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12\r
10 9 6 -3 10 -10 10 -16z m480 6 c-7 -8 -17 -15 -22 -15 -6 0 -5 7 2 15 7 8\r
17 15 22 15 6 0 5 -7 -2 -15z m2128 -10 c20 -26 19 -65 -2 -65 -6 0 -38 7 -71\r
15 -33 8 -73 14 -90 13 -20 0 -23 -2 -10 -5 11 -2 45 -11 75 -20 45 -13 51\r
-17 35 -24 -16 -6 -13 -8 14 -8 l34 -1 -21 -23 c-12 -13 -22 -29 -22 -36 0 -7\r
-16 0 -36 16 -37 27 -37 28 -13 34 20 6 18 7 -11 8 -20 1 -42 7 -49 14 -11 10\r
-13 9 -8 -5 5 -15 1 -18 -23 -18 -16 0 -32 -4 -35 -10 -3 -5 -11 -10 -17 -10\r
-7 0 -6 5 2 14 10 13 7 13 -20 3 -30 -12 -31 -12 -8 -18 20 -6 20 -7 3 -8 -11\r
-1 -33 -8 -49 -16 -32 -17 -92 -20 -101 -5 -8 13 38 23 67 15 21 -6 22 -5 5 8\r
-16 13 -11 18 56 51 40 20 77 36 80 36 4 0 8 -10 8 -22 1 -19 2 -18 8 6 4 19\r
19 35 49 52 50 28 52 29 52 10 0 -8 5 -18 11 -22 6 -3 10 1 9 12 -4 31 -1 34\r
29 34 20 0 36 -9 49 -25z m1112 -46 l62 -57 -88 20 c-49 11 -99 21 -112 24\r
l-22 4 20 39 c17 35 22 38 48 32 16 -3 57 -31 92 -62z m280 22 c91 -23 187\r
-49 215 -60 l49 -19 -54 -34 c-108 -68 -114 -69 -222 -28 -48 18 -68 34 -123\r
97 -67 79 -77 98 -47 89 9 -2 91 -23 182 -45z m1003 19 c51 -32 53 -35 34 -54\r
-10 -11 -22 -8 -64 16 -47 26 -51 31 -40 49 15 24 14 24 70 -11z m843 3 c-7\r
-7 -26 7 -26 19 0 6 6 6 15 -2 9 -7 13 -15 11 -17z m-5930 -3 c0 -11 -6 -22\r
-13 -24 -16 -6 -16 -1 -3 25 13 24 16 24 16 -1z m124 -1 c0 -5 -4 -9 -10 -9\r
-5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10 10 -16z m58 1 c-12 -19 -28 -27\r
-28 -14 0 6 30 33 38 34 1 0 -3 -9 -10 -20z m95 -10 c15 -16 25 -30 23 -30 -2\r
0 -13 -3 -23 -6 -15 -5 -16 -4 -3 6 12 9 9 11 -16 6 -39 -6 -46 0 -32 30 14\r
31 19 30 51 -6z m566 23 c0 -5 -14 -19 -32 -33 l-32 -25 25 32 c24 31 41 41\r
39 26z m1976 -15 c25 -12 45 -26 45 -30 0 -7 -43 -12 -102 -11 -21 0 -21 -2\r
-8 -28 6 -11 7 -19 1 -19 -15 0 -20 25 -14 69 7 48 15 50 78 19z m2465 -48 c0\r
-38 -2 -70 -5 -70 -8 0 -105 74 -105 80 0 5 89 57 103 59 4 0 7 -30 7 -69z\r
m86 3 c-10 -10 -71 33 -75 52 -2 15 5 12 38 -15 23 -18 40 -35 37 -37z m-5851\r
47 c7 -12 -44 -70 -62 -70 -10 0 -13 10 -11 32 2 25 9 34 28 39 36 10 38 10\r
45 -1z m1089 -5 c3 -8 1 -15 -4 -15 -6 0 -10 7 -10 15 0 8 2 15 4 15 2 0 6 -7\r
10 -15z m576 13 c0 -2 -6 -23 -14 -48 -11 -37 -18 -46 -42 -51 -47 -9 -57 -1\r
-38 30 28 44 57 71 76 71 10 0 18 -1 18 -2z m854 -13 c-4 -8 -8 -15 -10 -15\r
-2 0 -4 7 -4 15 0 8 4 15 10 15 5 0 7 -7 4 -15z m1145 -26 c24 -17 45 -28 48\r
-25 3 2 -11 15 -31 28 -20 13 -36 27 -36 31 0 13 168 -1 227 -18 41 -12 56\r
-23 69 -46 29 -57 -5 -75 -79 -44 -20 8 -49 15 -64 15 -16 0 -39 7 -51 16 -12\r
8 -26 13 -30 10 -5 -3 -39 6 -78 20 -38 13 -75 27 -82 29 -7 3 -10 10 -7 16\r
11 16 65 1 114 -32z m-3490 -2 c9 -12 8 -16 -6 -21 -12 -5 -24 0 -37 16 -17\r
20 -18 20 -12 3 13 -35 12 -39 -12 -43 -20 -3 -21 -1 -11 24 21 56 43 62 78\r
21z m811 18 c-7 -9 -15 -13 -19 -10 -3 3 1 10 9 15 21 14 24 12 10 -5z m71 -2\r
c-5 -10 -24 -35 -43 -56 l-33 -38 -34 17 -34 17 23 19 c15 12 32 17 46 14 16\r
-4 32 2 51 19 34 29 37 30 24 8z m672 -11 c24 -21 22 -26 -18 -45 l-35 -17 0\r
38 c0 56 10 61 53 24z m3156 -8 c1 -1 0 -7 -3 -13 -9 -15 -32 -3 -51 25 l-16\r
25 33 -17 c18 -9 35 -18 37 -20z m276 5 c33 -10 65 -22 71 -26 12 -9 76 -144\r
71 -150 -10 -9 -76 30 -112 66 -36 38 -72 59 -46 28 6 -8 9 -16 6 -19 -3 -3 2\r
-11 12 -19 11 -9 14 -10 9 -1 -11 18 -1 15 15 -5 12 -14 12 -16 0 -8 -11 6\r
-13 4 -8 -8 8 -21 -6 -22 -36 -3 -19 13 -28 13 -71 -1 -56 -19 -76 -12 -88 32\r
-4 16 -6 31 -4 32 2 2 30 -8 61 -22 32 -14 60 -23 63 -21 5 5 -104 56 -119 56\r
-5 0 -9 2 -9 4 0 2 -3 11 -6 20 -4 9 4 20 23 30 27 13 30 13 42 -6 10 -16 15\r
-18 21 -8 8 14 30 5 30 -12 0 -15 47 -68 54 -61 3 3 -8 21 -24 40 -17 18 -30\r
38 -30 43 0 18 9 10 25 -21 9 -17 19 -29 22 -26 2 3 -6 22 -20 42 -15 22 -27\r
31 -29 23 -3 -7 -7 -3 -11 11 -4 18 -2 21 11 16 9 -4 44 -15 77 -26z m-5245\r
-15 c0 -21 -4 -33 -10 -29 -5 3 -10 -3 -10 -14 0 -12 -6 -21 -12 -21 -7 0 -24\r
-3 -37 -7 -21 -5 -19 0 20 50 24 30 45 56 47 56 1 1 2 -15 2 -35z m156 -2\r
c-14 -14 -16 -14 -16 -1 0 20 23 44 29 28 2 -6 -4 -18 -13 -27z m444 28 c0 -5\r
-4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m925 -30\r
l49 -22 -24 -19 c-30 -23 -33 -23 -72 -3 -24 12 -29 21 -25 40 2 13 0 24 -4\r
24 -5 0 -9 5 -9 10 0 6 7 7 18 1 9 -4 39 -18 67 -31z m1043 33 c-10 -2 -26 -2\r
-35 0 -10 3 -2 5 17 5 19 0 27 -2 18 -5z m3777 -7 c43 -18 63 -52 35 -59 -24\r
-6 -65 24 -73 53 -6 24 -6 24 38 6z m-4945 -15 c-5 -11 -10 -28 -10 -38 1 -15\r
3 -14 14 6 15 27 28 15 19 -18 -5 -20 -10 -22 -42 -16 -53 10 -56 19 -19 54\r
38 35 54 40 38 12z m1267 -1 c34 -20 88 -112 80 -135 -4 -9 -133 -65 -151 -65\r
-2 0 1 21 5 48 4 26 8 72 8 103 1 76 7 81 58 49z m-3167 6 c0 -2 -7 -7 -16\r
-10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z m830 -15 c-13 -11 -28 -17 -33 -14 -5\r
3 2 11 15 18 35 20 46 17 18 -4z m74 4 c4 -10 -1 -15 -16 -15 -17 0 -18 2 -8\r
15 7 8 14 15 15 15 2 0 5 -7 9 -15z m106 5 c0 -5 -20 -10 -45 -10 -25 0 -45 5\r
-45 10 0 6 20 10 45 10 25 0 45 -4 45 -10z m176 3 c-10 -10 -46 -11 -40 -1 3\r
4 15 8 26 8 12 0 18 -3 14 -7z m447 -33 c-15 -22 -32 -40 -36 -40 -5 0 6 18\r
23 40 41 52 50 52 13 0z m1032 21 c9 -30 35 -48 45 -32 5 9 10 10 14 2 4 -6\r
-1 -14 -11 -17 -10 -3 -56 -21 -103 -40 -135 -55 -143 -45 -35 46 39 33 73 59\r
77 60 4 0 9 -9 13 -19z m175 4 c10 -12 10 -15 -3 -15 -8 0 -23 -3 -32 -6 -15\r
-6 -15 -4 -4 15 16 25 22 26 39 6z m563 5 c37 0 67 -4 67 -8 0 -5 -25 -21 -57\r
-36 -43 -22 -66 -27 -97 -23 l-41 5 30 -14 30 -13 -35 -2 c-19 -1 -27 -3 -17\r
-6 19 -5 19 -5 11 -27 -8 -21 -34 -8 -34 18 0 12 -4 26 -8 32 -5 5 -19 27 -32\r
48 l-24 39 70 -6 c38 -4 99 -7 137 -7z m690 -37 c-3 -27 -6 -49 -7 -50 -1 -1\r
-26 17 -55 40 -51 39 -52 42 -30 48 13 4 41 7 61 8 l38 1 -7 -47z m137 12 c73\r
-24 92 -35 133 -79 93 -98 133 -149 112 -143 -11 3 -65 13 -120 22 -114 19\r
-143 31 -204 84 -43 36 -45 41 -42 87 2 54 8 67 25 61 6 -2 49 -17 96 -32z\r
m2775 25 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z\r
m-6393 -25 c-4 -26 -53 -60 -74 -53 -11 4 58 78 72 78 4 0 5 -11 2 -25z m435\r
19 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m438 -4 c-3 -5 -16\r
-10 -28 -9 -21 0 -21 1 -2 9 28 12 37 12 30 0z m1531 -17 c6 -22 1 -32 -29\r
-60 -20 -18 -41 -33 -46 -33 -11 0 -73 82 -67 88 6 6 98 30 118 31 11 1 20 -9\r
24 -26z m38 12 c-4 -8 -10 -15 -15 -15 -5 0 -9 7 -9 15 0 8 7 15 15 15 9 0 12\r
-6 9 -15z m2364 -8 c7 -5 11 -12 8 -14 -5 -5 -76 24 -76 32 0 8 52 -6 68 -18z\r
m700 1 c23 -13 42 -25 42 -28 0 -12 -58 -39 -78 -37 -19 1 -22 7 -20 44 1 24\r
4 43 7 43 3 0 25 -10 49 -22z m309 0 c38 -23 90 -75 151 -155 l32 -41 -42 5\r
c-50 6 -74 20 -145 82 -48 42 -53 50 -53 89 0 23 4 42 9 42 5 0 26 -10 48 -22z\r
m543 7 c7 -8 8 -15 2 -15 -5 0 -15 7 -22 15 -7 8 -8 15 -2 15 5 0 15 -7 22\r
-15z m-6693 -15 c1 -11 -3 -20 -8 -20 -6 0 -7 5 -4 10 3 6 1 10 -5 10 -6 0 -8\r
5 -5 10 10 16 21 11 22 -10z m568 0 c-10 -11 -23 -20 -29 -20 -6 1 0 10 13 20\r
30 26 39 26 16 0z m865 11 c0 -5 14 -11 32 -15 37 -7 28 -22 -20 -32 -31 -6\r
-32 -5 -32 25 0 17 5 31 10 31 6 0 10 -4 10 -9z m1070 0 c0 -12 -29 -23 -41\r
-15 -5 3 -7 10 -4 15 8 12 45 12 45 0z m310 -43 c0 -29 -3 -70 -7 -92 -6 -37\r
-7 -38 -41 -32 -20 3 -47 17 -61 31 -26 26 -26 26 -6 41 18 14 20 12 31 -23\r
l12 -38 -5 42 c-5 37 -1 46 28 82 19 22 37 41 42 41 4 0 7 -24 7 -52z m931 0\r
c64 -49 81 -68 61 -68 -4 0 -17 7 -28 15 -12 8 -54 21 -95 30 -93 20 -122 32\r
-117 48 4 10 39 20 97 26 7 0 45 -23 82 -51z m1479 42 c0 -5 -4 -10 -10 -10\r
-5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m760 -20 c22 -19 27 -27\r
13 -20 -12 5 -33 10 -47 10 -27 0 -41 14 -31 30 11 17 29 11 65 -20z m-4896\r
-15 c-49 -35 -64 -41 -64 -27 0 4 -3 17 -6 29 -6 23 6 27 90 31 28 2 27 0 -20\r
-33z m308 10 c6 -27 -18 -55 -45 -55 -22 0 -21 6 4 46 25 40 35 43 41 9z\r
m3008 14 c0 -5 -10 -28 -22 -49 -23 -40 -30 -42 -85 -25 -21 7 57 85 84 85 12\r
0 23 -5 23 -11z m1902 -26 c81 -44 220 -174 204 -191 -6 -5 -115 18 -144 31\r
-20 9 -162 177 -162 191 0 11 58 -7 102 -31z m-6450 -10 c-11 -15 -29 -37 -41\r
-47 -19 -17 -21 -18 -21 -2 0 28 18 55 48 70 35 19 39 13 14 -21z m508 27 c0\r
-5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m144 -6 c4\r
-10 1 -14 -6 -12 -15 5 -23 28 -10 28 5 0 13 -7 16 -16z m151 6 c5 -8 11 -7\r
21 1 8 6 17 9 20 7 3 -3 -15 -22 -40 -43 -44 -36 -45 -36 -75 -20 -40 20 -39\r
32 2 50 39 17 64 19 72 5z m132 -6 c7 -21 -41 -63 -79 -70 -43 -7 -49 6 -22\r
44 26 38 92 54 101 26z m73 -16 c-30 -27 -35 -29 -38 -14 -6 32 6 46 40 46\r
l33 -1 -35 -31z m140 -5 c0 -25 0 -26 -20 -8 -15 14 -17 21 -9 31 16 19 29 8\r
29 -23z m1112 1 c44 -39 40 -40 -49 -8 -43 16 -53 28 -30 37 26 11 41 6 79\r
-29z m2458 16 c47 -12 95 -28 108 -36 37 -24 101 -84 124 -116 l20 -29 -38 7\r
c-22 3 -111 26 -198 50 -88 24 -168 44 -177 44 -29 0 -30 15 -6 59 26 49 41\r
51 167 21z m680 10 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0\r
11 -4 11 -10z m410 -21 c44 -17 82 -35 85 -40 7 -10 -22 -119 -31 -119 -4 0\r
-24 10 -45 22 -30 17 -46 37 -69 85 -29 61 -36 83 -25 83 3 0 41 -14 85 -31z\r
m-5183 4 c3 -7 -20 -24 -49 -39 -29 -14 -61 -34 -72 -43 -18 -16 -18 -15 -2\r
16 10 20 21 30 30 27 9 -3 13 1 13 13 -1 12 6 19 21 21 12 2 22 8 22 13 0 14\r
32 7 37 -8z m675 -13 c-21 -19 -43 -30 -62 -30 -17 0 -30 2 -30 5 0 12 78 55\r
100 55 l25 -1 -33 -29z m1457 -17 l32 -47 -23 -18 c-24 -18 -40 -22 -120 -33\r
-54 -7 -55 -4 -42 77 5 31 13 39 43 52 60 25 76 21 110 -31z m4151 -16 c0 -7\r
-11 2 -25 18 -32 39 -32 58 0 22 14 -15 25 -33 25 -40z m41 31 l23 -33 -27 24\r
c-15 14 -27 28 -27 33 0 15 8 8 31 -24z m63 -18 c34 -47 37 -70 4 -32 -17 19\r
-51 82 -44 82 2 0 20 -22 40 -50z m-6799 24 l37 -15 -22 -24 c-17 -18 -27 -22\r
-40 -15 -21 11 -31 35 -24 55 7 18 4 18 49 -1z m1170 0 c14 -9 22 -20 19 -25\r
-6 -10 -45 -12 -69 -3 -14 6 -14 8 1 25 21 23 19 23 49 3z m495 -26 c0 -11\r
-11 -10 -49 3 -30 11 -37 19 -25 32 8 7 74 -24 74 -35z m110 27 c0 -8 -4 -15\r
-9 -15 -13 0 -22 16 -14 24 11 11 23 6 23 -9z m1689 -16 c11 -31 10 -31 -12\r
-17 -12 8 -28 18 -35 22 -16 10 -6 26 18 26 11 0 22 -11 29 -31z m3117 6 c9\r
-14 15 -28 12 -30 -5 -6 -68 38 -68 48 0 18 41 5 56 -18z m-6721 -5 c-10 -11\r
-20 -18 -23 -15 -7 6 18 35 31 35 5 0 2 -9 -8 -20z m996 5 c-1 -5 -10 -11 -21\r
-11 -20 -1 -26 7 -13 20 10 9 34 3 34 -9z m2676 -48 c25 -40 25 -54 -1 -44\r
-19 8 -43 44 -52 82 -7 28 -6 29 11 15 10 -8 29 -32 42 -53z m573 32 l80 -30\r
-1 -42 c0 -23 -4 -51 -8 -61 -7 -18 -11 -16 -47 20 -62 63 -127 144 -115 144\r
7 0 48 -14 91 -31z m1082 19 c18 -15 31 -58 16 -58 -5 0 -19 5 -31 11 -13 7\r
-8 -1 11 -17 25 -22 35 -40 39 -73 5 -36 3 -43 -8 -39 -8 3 -76 23 -153 44\r
-140 38 -153 50 -61 55 39 2 40 2 6 6 l-34 4 36 25 c48 32 85 46 92 34 3 -6\r
16 -15 28 -20 22 -10 22 -10 0 6 -13 9 -23 20 -23 25 0 14 64 11 82 -3z m791\r
-19 c19 -11 24 -39 6 -39 -16 0 -99 51 -99 60 0 9 63 -6 93 -21z m523 10 c19\r
-11 34 -23 34 -25 0 -3 -3 -3 -7 -1 -5 2 -25 11 -45 21 -21 9 -38 19 -38 21 0\r
11 25 4 56 -16z m134 -14 c19 -19 28 -35 22 -35 -16 0 -62 45 -62 60 0 15 3\r
13 40 -25z m-7020 17 c0 -5 -11 -19 -25 -32 -28 -26 -33 -16 -9 18 15 22 34\r
30 34 14z m300 -34 c0 -24 -8 -58 -18 -77 -17 -35 -87 -99 -97 -89 -3 3 0 29\r
6 57 12 57 61 124 84 115 10 -4 12 0 8 15 -3 12 -1 21 6 21 6 0 11 -18 11 -42z\r
m1502 23 c-13 -12 -18 -21 -10 -23 6 -2 8 -10 4 -16 -5 -9 -13 -6 -26 10 -18\r
21 -18 24 -3 36 9 6 26 12 37 12 21 -1 20 -1 -2 -19z m449 5 c-12 -15 -61 -27\r
-74 -19 -17 10 17 33 50 33 29 0 33 -2 24 -14z m153 -7 c39 -12 78 -24 86 -26\r
10 -3 6 -11 -15 -28 -32 -26 -100 -34 -135 -15 -16 8 -40 58 -40 81 0 14 28\r
11 104 -12z m363 -1 c-3 -13 -9 -40 -12 -60 -5 -25 -13 -38 -24 -39 -9 -1 -32\r
-3 -50 -5 -26 -3 -46 3 -75 22 l-40 27 75 26 c41 15 83 32 94 39 30 17 38 15\r
32 -10z m870 11 c-9 -6 -27 -8 -40 -5 -12 3 -16 3 -9 0 6 -3 10 -10 7 -14 -3\r
-5 9 -5 27 1 18 5 36 9 40 9 10 0 48 -42 48 -52 0 -11 -168 -10 -175 1 -3 5 3\r
12 12 14 10 3 -4 2 -31 -1 -35 -4 -47 -2 -42 6 9 14 76 33 89 25 6 -3 7 -1 3\r
5 -8 13 10 20 54 21 29 0 32 -1 17 -10z m956 -4 c-3 -9 -8 -14 -10 -11 -3 3\r
-2 9 2 15 9 16 15 13 8 -4z m1696 -21 c36 -21 68 -39 70 -40 2 -2 -1 -15 -9\r
-28 l-13 -25 -93 47 -93 46 27 18 c15 10 31 18 36 18 5 0 39 -16 75 -36z\r
m-5742 4 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m93 14 c0 -16\r
-68 -74 -74 -63 -9 14 9 47 32 60 21 13 42 14 42 3z m24 -16 c-3 -9 -10 -16\r
-15 -16 -5 0 -4 9 3 20 14 22 21 20 12 -4z m1204 -29 c3 -50 -8 -59 -49 -37\r
-24 13 -24 17 1 58 27 44 44 36 48 -21z m81 41 c-2 -29 -25 -73 -40 -76 -11\r
-1 -18 8 -23 29 -11 54 -8 59 29 59 22 0 35 -5 34 -12z m176 2 c3 -5 -3 -10\r
-14 -10 -12 0 -21 5 -21 10 0 6 6 10 14 10 8 0 18 -4 21 -10z m164 -34 c1 -5\r
-5 -3 -13 4 -8 6 -12 19 -9 27 6 14 8 14 14 -3 4 -10 8 -23 8 -28z m1582 -18\r
c9 -16 5 -18 -34 -18 -30 0 -51 7 -67 20 -22 19 -22 21 -5 40 18 20 18 20 57\r
-3 22 -12 44 -30 49 -39z m132 42 c63 -13 66 -15 45 -26 -21 -12 -19 -13 22\r
-11 40 2 45 -1 48 -20 4 -27 6 -26 -93 -12 -69 10 -77 14 -95 44 -23 37 -25\r
49 -7 43 6 -3 43 -11 80 -18z m-3478 0 c3 -5 -1 -10 -9 -10 -8 0 -18 5 -21 10\r
-3 6 1 10 9 10 8 0 18 -4 21 -10z m360 -7 c31 -15 47 -33 29 -33 -9 0 -74 41\r
-74 46 0 7 8 5 45 -13z m415 -9 c0 -8 -4 -14 -10 -14 -5 0 -10 9 -10 21 0 11\r
5 17 10 14 6 -3 10 -13 10 -21z m180 16 c0 -5 -8 -10 -17 -10 -15 0 -16 2 -3\r
10 19 12 20 12 20 0z m524 1 c18 -7 17 -9 -10 -28 -53 -36 -53 -36 -41 2 11\r
36 18 39 51 26z m-1024 -10 c0 -12 -20 -25 -27 -18 -7 7 6 27 18 27 5 0 9 -4\r
9 -9z m265 0 c7 -13 -27 -31 -59 -31 -28 0 -33 9 -14 28 14 14 64 16 73 3z\r
m500 -12 c-4 -5 0 -9 8 -9 8 0 18 -7 21 -15 5 -14 1 -13 -27 2 -17 10 -34 19\r
-37 21 -2 2 2 7 10 12 16 10 33 3 25 -11z m3405 -32 c24 -23 35 -31 24 -17\r
-30 36 -40 55 -24 45 7 -4 38 -15 68 -24 l56 -17 -46 -27 c-26 -15 -50 -27\r
-55 -27 -4 1 -37 28 -73 61 l-65 61 35 -6 c22 -4 52 -22 80 -49z m1807 -15\r
c23 -20 44 -47 48 -59 5 -20 3 -23 -19 -23 -20 0 -37 15 -76 66 -27 37 -50 71\r
-50 76 0 13 47 -17 97 -60z m187 16 l19 -33 -32 29 c-17 17 -31 36 -31 44 0\r
20 20 2 44 -40z m-6791 27 c18 -13 17 -16 -18 -52 -22 -23 -32 -29 -26 -16 6\r
12 11 35 11 52 0 34 6 37 33 16z m136 1 c9 -11 7 -24 -11 -60 -29 -58 -54 -68\r
-85 -32 -13 15 -23 31 -23 36 0 12 79 70 95 70 7 0 18 -6 24 -14z m1138 -2 c4\r
-13 -50 -38 -68 -32 -8 3 -4 12 12 26 24 23 49 26 56 6z m4601 -41 c50 -25 92\r
-49 92 -53 0 -5 -30 -27 -66 -50 -53 -33 -69 -39 -76 -28 -18 27 -61 113 -73\r
149 -13 35 -13 37 8 32 12 -3 64 -25 115 -50z m200 39 c2 -7 -6 -12 -17 -12\r
-21 0 -27 11 -14 24 9 9 26 2 31 -12z m-5715 -44 c-52 -52 -71 -58 -58 -19 6\r
19 78 71 100 71 5 0 -14 -23 -42 -52z m342 22 c-10 -11 -26 -22 -36 -25 -22\r
-7 -91 26 -69 33 7 3 16 0 18 -7 3 -8 8 -9 15 -2 14 11 80 30 86 25 2 -2 -4\r
-13 -14 -24z m394 20 c-26 -15 -99 -24 -99 -12 0 6 21 13 48 15 26 2 52 4 57\r
5 6 1 3 -3 -6 -8z m91 -10 c-9 -16 -21 -20 -63 -20 -44 1 -49 2 -32 12 19 11\r
67 25 93 27 10 1 10 -4 2 -19z m527 14 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11\r
1 17 -2 13 -5z m158 -4 c-3 -5 -10 -10 -16 -10 -5 0 -9 5 -9 10 0 6 7 10 16\r
10 8 0 12 -4 9 -10z m1200 -11 c-27 -10 -85 -11 -85 -1 0 15 8 17 57 13 36 -3\r
43 -6 28 -12z m775 -25 c14 -15 18 -23 10 -19 -8 5 -27 8 -42 7 -15 -1 -28 2\r
-28 7 0 5 10 7 23 4 l22 -5 -22 16 c-28 20 -31 41 -5 27 9 -5 28 -22 42 -37z\r
m439 40 l31 -6 -32 -45 c-53 -73 -58 -74 -58 -4 0 66 1 66 59 55z m-3777 -29\r
c18 -39 -7 -58 -84 -63 l-63 -3 47 45 c53 52 83 58 100 21z m282 16 c5 -7 -65\r
-71 -78 -71 -14 0 -4 18 25 48 32 33 44 38 53 23z m1164 -18 c26 -36 10 -42\r
-41 -17 -41 21 -40 21 -32 34 9 15 56 4 73 -17z m-1770 -20 c-15 -18 -21 -9\r
-13 18 6 16 9 18 16 8 4 -8 3 -19 -3 -26z m360 18 c3 -8 -1 -12 -9 -9 -7 2\r
-15 10 -17 17 -3 8 1 12 9 9 7 -2 15 -10 17 -17z m772 11 c0 -12 -47 -32 -73\r
-31 -17 0 -13 5 18 19 46 21 55 23 55 12z m420 -2 c0 -6 -12 -15 -27 -21 -15\r
-6 -43 -26 -62 -45 -36 -36 -51 -42 -51 -21 1 13 66 63 110 84 31 15 30 15 30\r
3z m101 0 c21 -12 24 -27 10 -49 -7 -11 -16 -8 -44 15 -20 15 -33 32 -31 36 7\r
11 42 10 65 -2z m339 1 c0 -5 -8 -11 -17 -15 -10 -3 -25 -9 -33 -12 -8 -3 -4\r
4 10 15 27 22 40 26 40 12z m2297 -22 c65 -17 141 -37 168 -43 l50 -13 -65 -7\r
c-36 -4 -83 -6 -105 -5 -45 1 -205 -9 -247 -16 -16 -2 -28 -2 -28 1 0 13 84\r
114 96 114 7 0 66 -14 131 -31z m948 12 c44 -21 186 -138 193 -160 3 -10 -2\r
-11 -19 -6 -26 8 -279 154 -279 161 0 6 41 23 55 23 6 0 28 -8 50 -18z m385\r
-145 c0 -16 -62 -4 -85 17 -22 19 -24 26 -16 57 5 19 12 48 15 63 6 26 9 23\r
46 -51 22 -44 40 -82 40 -86z m906 128 c19 -19 34 -40 34 -46 0 -12 -75 50\r
-84 70 -11 24 17 11 50 -24z m-7096 16 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10\r
3 6 8 10 11 10 2 0 4 -4 4 -10z m1245 -20 c-17 -19 -35 -19 -35 1 0 10 42 30\r
49 23 2 -2 -4 -13 -14 -24z m95 21 c0 -5 -7 -11 -15 -15 -15 -5 -20 5 -8 17 9\r
10 23 9 23 -2z m453 -18 c27 -14 28 -16 12 -33 -14 -15 -22 -16 -58 -7 -56 13\r
-64 22 -42 47 19 21 35 20 88 -7z m1256 -10 l36 -38 -45 -4 -45 -5 50 -6 c48\r
-5 46 -6 -50 -18 -55 -8 -111 -16 -124 -19 -18 -4 -4 12 48 60 40 37 77 67 83\r
67 5 0 26 -17 47 -37z m309 26 c-2 -6 -8 -10 -13 -10 -5 0 -11 4 -13 10 -2 6\r
4 11 13 11 9 0 15 -5 13 -11z m157 0 c-16 -5 -36 -7 -43 -4 -6 2 -28 -7 -48\r
-20 -44 -30 -54 -31 -54 -5 0 14 7 20 23 20 12 0 29 5 37 10 8 5 38 9 65 9 46\r
-1 47 -1 20 -10z m255 7 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10\r
11 6 0 10 -2 10 -4z m2725 -16 c21 -14 25 -20 13 -20 -23 0 -68 21 -68 32 0\r
14 24 9 55 -12z m-5835 -25 c-14 -17 -40 -20 -40 -6 0 6 10 17 22 26 26 17 37\r
3 18 -20z m524 5 c-5 -4 -20 -11 -34 -14 -25 -7 -25 -7 5 20 19 17 31 22 33\r
14 2 -6 0 -15 -4 -20z m335 -7 c-15 -17 -37 -16 -71 1 -16 9 -30 11 -33 5 -10\r
-15 -35 -10 -35 7 0 11 6 15 19 11 10 -2 24 -1 31 3 6 4 31 2 55 -3 36 -8 42\r
-13 34 -24z m1096 16 l30 -20 -50 7 c-58 8 -65 12 -45 24 22 14 32 12 65 -11z\r
m705 12 c0 -5 -14 -12 -31 -16 -17 -4 -51 -16 -76 -27 -25 -11 -47 -17 -50\r
-14 -3 3 3 9 13 13 10 4 44 17 74 29 64 26 70 27 70 15z m2581 -27 c20 -22 26\r
-32 14 -26 -25 13 -72 62 -59 62 6 0 26 -16 45 -36z m548 17 l24 -18 -32 -11\r
c-17 -6 -38 -9 -46 -6 -12 5 -12 9 2 30 18 29 21 29 52 5z m828 -3 c-3 -8 -6\r
-5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-7087 -28 c-14 -33 -30 -40 -30\r
-13 0 18 30 56 38 48 3 -2 -1 -18 -8 -35z m790 31 c0 -11 -25 -21 -52 -21 -17\r
0 -18 3 -8 15 13 16 60 21 60 6z m310 0 c0 -5 -7 -11 -14 -14 -10 -4 -13 -1\r
-9 9 6 15 23 19 23 5z m730 5 c0 -2 -12 -11 -27 -20 l-28 -17 24 20 c23 21 31\r
25 31 17z m159 -20 c28 -30 25 -51 -18 -118 -19 -30 -38 -48 -49 -48 -22 0\r
-102 55 -102 71 0 18 108 119 128 119 10 0 29 -11 41 -24z m96 14 c4 -6 3 -35\r
0 -65 -7 -55 -8 -56 -58 -80 -28 -13 -54 -22 -56 -19 -3 3 -1 8 5 12 6 4 21\r
29 33 57 15 34 24 46 30 37 5 -9 10 0 15 27 6 40 18 52 31 31z m1412 4 c20 -5\r
19 -8 -17 -41 -38 -34 -39 -34 -67 -17 l-28 16 23 -19 c13 -10 20 -22 16 -26\r
-4 -4 -58 -7 -121 -7 -123 0 -135 6 -88 50 19 18 35 23 77 22 37 0 47 2 33 8\r
-14 6 -1 9 45 12 36 2 74 5 85 6 11 1 30 -1 42 -4z m201 0 c14 -4 32 -25 47\r
-55 31 -61 31 -65 -3 -41 -38 28 -102 87 -102 95 0 9 27 9 58 1z m1917 -70\r
c60 -35 100 -64 90 -64 -44 0 -245 34 -245 42 0 4 10 9 23 9 15 1 17 3 6 6\r
-17 4 -29 32 -29 66 0 26 25 17 155 -59z m203 34 c40 -23 52 -34 47 -47 -4 -9\r
-10 -24 -12 -33 -3 -10 -10 -18 -15 -18 -5 0 -6 5 -3 11 4 5 0 18 -8 27 -9 10\r
-20 29 -26 42 -8 22 -10 22 -10 5 -1 -11 7 -32 16 -45 17 -25 17 -25 -5 -10\r
-13 8 -22 18 -20 22 2 4 -15 26 -37 49 l-40 42 30 -7 c17 -4 54 -21 83 -38z\r
m1357 -16 c20 -26 47 -93 41 -100 -2 -1 -11 16 -21 40 -9 24 -20 45 -24 48\r
-10 8 -41 58 -40 67 0 4 6 0 12 -11 7 -10 21 -30 32 -44z m-6010 39 c6 -11\r
-53 -56 -62 -48 -4 5 44 57 53 57 1 0 5 -4 9 -9z m300 -7 c7 -3 15 -14 18 -25\r
5 -17 0 -19 -41 -19 -26 0 -54 4 -62 10 -16 10 -15 12 15 28 17 10 17 11 3 12\r
-9 0 -20 -4 -23 -10 -3 -5 -13 -10 -22 -10 -13 0 -13 3 -2 16 10 12 23 14 57\r
9 25 -4 50 -9 57 -11z m205 0 c8 -8 23 -20 34 -26 17 -9 19 -8 9 3 -19 20 -16\r
29 12 29 16 0 25 -6 25 -15 0 -8 5 -15 11 -15 5 0 7 -5 3 -12 -6 -9 -9 -9 -11\r
-1 -3 9 -11 9 -29 1 -22 -10 -29 -8 -57 20 -17 18 -27 32 -21 32 7 0 17 -7 24\r
-16z m580 -4 c0 -15 -31 -20 -50 -7 -29 18 -24 24 15 19 19 -2 35 -8 35 -12z\r
m1439 -47 c66 -54 79 -69 63 -71 -25 -4 -271 36 -290 47 -10 6 -1 19 34 49 68\r
61 90 58 193 -25z m113 27 c22 -45 27 -82 11 -87 -10 -4 -73 102 -73 122 0 4\r
10 5 23 3 14 -2 28 -16 39 -38z m151 21 c16 -15 -7 -43 -54 -66 -27 -14 -50\r
-25 -53 -25 -5 0 -36 89 -36 103 0 11 130 0 143 -12z m1347 -25 c171 -49 173\r
-48 -100 -21 l-135 14 120 -4 120 -3 -115 12 c-83 9 -119 10 -129 2 -12 -9\r
-13 -8 -7 2 8 14 62 41 81 42 6 0 80 -20 165 -44z m-4958 12 c-7 -7 -12 -8\r
-12 -2 0 14 12 26 19 19 2 -3 -1 -11 -7 -17z m1837 -6 c23 -14 24 -15 6 -28\r
-28 -20 -44 -17 -57 11 -6 13 -14 22 -18 20 -4 -2 -7 2 -7 10 0 17 39 11 76\r
-13z m491 -21 c-61 -54 -84 -53 -78 3 3 28 7 32 43 37 93 14 95 13 35 -40z\r
m1374 40 c24 -9 10 -20 -40 -31 -29 -7 -34 -5 -34 10 0 25 38 35 74 21z m3058\r
-63 c15 -23 35 -53 44 -65 9 -13 13 -23 8 -23 -16 1 -103 131 -103 155 0 12\r
13 -6 51 -67z m-6694 41 c3 -11 2 -12 -6 0 -7 9 -12 10 -16 2 -4 -6 -12 -11\r
-18 -11 -6 0 -6 6 2 15 15 18 32 15 38 -6z m415 6 c1 -6 -11 -11 -28 -13 -29\r
-3 -29 -3 -10 12 21 16 35 17 38 1z m1671 -14 c16 -9 34 -24 40 -34 17 -27\r
-11 -42 -102 -56 -42 -6 -92 -14 -109 -17 -32 -5 -33 -4 -34 33 -2 30 -3 32\r
-6 11 -6 -37 -19 -35 -39 3 -19 38 -6 61 22 38 15 -12 17 -12 12 1 -3 8 2 21\r
11 28 14 12 14 13 -2 8 -11 -4 -16 -2 -12 5 10 16 184 0 219 -20z m662 17 c14\r
-23 -35 -48 -96 -48 -91 0 -101 9 -39 36 58 25 123 31 135 12z m3187 0 c26\r
-14 167 -119 167 -124 0 -3 -17 3 -37 12 -21 9 -72 28 -113 44 -41 15 -88 33\r
-105 40 l-30 12 35 13 c46 17 57 17 83 3z m682 1 c11 -17 -1 -21 -15 -4 -8 9\r
-8 15 -2 15 6 0 14 -5 17 -11z m-6802 -23 l29 -23 -34 -21 c-29 -17 -98 -42\r
-120 -42 -5 0 -8 5 -8 12 0 12 86 98 98 98 4 -1 20 -11 35 -24z m657 14 c0 -5\r
-5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m110 0 c-8 -5\r
-19 -10 -25 -10 -5 0 -3 5 5 10 8 5 20 10 25 10 6 0 3 -5 -5 -10z m100 0 c0\r
-5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m154 -16\r
c15 -22 16 -28 5 -35 -22 -14 -26 -11 -37 20 -16 47 2 55 32 15z m65 9 c3 -2\r
-1 -9 -7 -15 -14 -14 -42 -2 -50 21 -3 8 4 10 25 5 15 -4 30 -9 32 -11z m359\r
1 c36 -25 27 -40 -23 -36 -50 4 -52 7 -28 34 20 22 23 22 51 2z m908 -7 c-3\r
-14 1 -33 11 -48 9 -13 -2 -5 -25 17 -23 23 -42 44 -42 48 0 3 14 6 31 6 28 0\r
30 -3 25 -23z m364 13 c0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10\r
9 0 16 -4 16 -10z m-3239 -27 c-12 -20 -14 -14 -5 12 4 9 9 14 11 11 3 -2 0\r
-13 -6 -23z m1043 17 c-6 -6 -51 -13 -100 -15 l-89 -4 74 9 c41 6 76 12 79 15\r
3 3 14 5 26 5 14 0 17 -3 10 -10z m845 -6 c3 -3 -2 -11 -10 -20 -19 -19 -69\r
-3 -69 22 0 13 7 15 38 9 20 -4 39 -9 41 -11z m5305 1 c19 -15 19 -15 -1 -15\r
-11 0 -23 7 -27 15 -7 19 3 19 28 0z m-6954 -30 c-7 -8 -18 -15 -24 -15 -8 0\r
-8 3 0 8 6 4 14 16 18 27 6 13 10 16 13 7 3 -7 -1 -19 -7 -27z m1077 3 c-3 -7\r
-5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m177 -10 c17 -40 16 -42 -3 -62\r
l-20 -20 -46 23 c-25 12 -45 25 -45 27 0 26 55 72 86 74 7 0 19 -19 28 -42z\r
m156 32 c0 -5 -2 -10 -4 -10 -2 0 -12 -3 -20 -6 -12 -5 -15 -2 -10 10 7 17 34\r
22 34 6z m762 -42 l-22 -22 0 21 c0 12 3 29 6 38 6 15 8 15 23 1 14 -15 13\r
-18 -7 -38z m1065 27 c-4 -8 -16 -15 -28 -15 -21 0 -21 0 2 19 26 21 35 20 26\r
-4z m1045 9 c57 -9 106 -19 111 -23 4 -4 -57 -13 -135 -20 -79 -7 -192 -19\r
-252 -27 -59 -8 -110 -13 -113 -10 -7 6 120 65 177 81 61 18 92 18 212 -1z\r
m2353 -23 l68 -31 -26 -20 c-30 -24 -50 -25 -67 -5 -7 8 -18 15 -24 15 -6 -1\r
3 -12 19 -25 21 -17 25 -25 14 -25 -20 0 -40 22 -43 47 -1 10 -25 33 -52 51\r
l-49 34 47 -5 c25 -2 77 -18 113 -36z m-5585 19 c0 -5 -7 -10 -16 -10 -8 0\r
-12 5 -9 10 3 6 10 10 16 10 5 0 9 -4 9 -10z m80 -15 c0 -17 -17 -28 -30 -20\r
-7 4 -7 13 0 26 12 21 30 17 30 -6z m310 21 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1\r
-10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m4992 -59 c71 -28 126 -53 123 -55 -2\r
-3 -58 0 -122 6 -65 6 -158 14 -206 18 -48 3 -87 9 -85 14 2 4 23 24 47 44 54\r
45 66 44 243 -27z m-6022 39 c0 -14 -29 -31 -38 -21 -6 6 18 35 29 35 5 0 9\r
-6 9 -14z m70 2 c0 -9 3 -9 12 0 16 16 29 15 22 -1 -6 -18 -41 -19 -48 -1 -3\r
8 -1 14 4 14 6 0 10 -5 10 -12z m370 2 c-8 -5 -24 -10 -35 -10 -17 0 -17 2 -5\r
10 8 5 24 10 35 10 17 0 17 -2 5 -10z m994 -6 c5 -12 2 -15 -10 -10 -8 3 -18\r
6 -20 6 -3 0 -2 5 1 10 9 15 22 12 29 -6z m3511 -8 c243 -32 530 -77 537 -84\r
7 -7 38 -148 38 -171 0 -16 -152 -76 -1080 -431 -528 -201 -672 -257 -712\r
-274 -20 -9 -39 -12 -42 -8 -3 5 -55 202 -116 438 -61 236 -113 436 -115 445\r
-4 13 27 18 217 37 123 13 257 28 298 34 243 36 754 43 975 14z m1341 8 c13\r
-3 24 -10 24 -15 0 -13 -11 -11 -50 12 -19 11 -27 18 -17 15 11 -4 30 -9 43\r
-12z m534 6 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4\r
10 -10z m-7319 -23 c-10 -9 -11 -8 -5 6 3 10 9 15 12 12 3 -3 0 -11 -7 -18z\r
m719 -12 c-62 -41 -100 -54 -100 -33 0 35 53 63 124 67 26 1 24 -2 -24 -34z\r
m275 25 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z\r
m130 -4 l30 -13 -44 -22 -44 -23 -20 20 c-42 43 9 68 78 38z m541 -21 c20 -50\r
19 -85 -5 -85 -10 0 -58 16 -105 36 -83 35 -86 37 -70 55 19 21 39 26 112 28\r
52 1 53 0 68 -34z m709 16 c3 -10 14 -26 25 -36 25 -22 25 -35 2 -35 -10 0\r
-33 15 -51 34 -31 32 -32 35 -14 45 25 15 31 14 38 -8z m770 -26 l45 -46 -61\r
-38 c-77 -49 -199 -68 -199 -32 0 16 93 122 119 136 24 12 28 11 56 -13 16\r
-15 23 -18 14 -7 -47 59 -33 59 26 0z m-1727 1 c-15 -23 -25 -31 -30 -23 -13\r
20 -9 40 6 34 8 -3 17 1 20 9 3 8 10 14 16 14 6 0 0 -15 -12 -34z m52 30 c0\r
-3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m252 -5\r
c20 11 98 9 98 -2 0 -11 -97 -82 -107 -78 -8 3 -33 65 -33 84 0 5 5 4 12 -3 7\r
-7 17 -8 30 -1z m208 -33 c0 -11 -15 -10 -47 4 -38 16 -39 18 -24 27 14 9 71\r
-17 71 -31z m1095 28 c-11 -8 -40 -39 -65 -70 -25 -31 -49 -56 -55 -56 -5 0\r
-35 22 -65 49 -39 35 -52 52 -44 60 9 10 126 25 219 30 28 1 28 0 10 -13z\r
m199 4 l49 0 -19 -21 c-35 -39 -47 -39 -89 -2 -35 31 -37 34 -15 29 14 -3 47\r
-6 74 -6z m3728 -17 c10 -9 30 -36 44 -60 14 -25 28 -42 31 -39 6 6 -32 72\r
-60 103 l-19 22 30 -1 c28 -1 33 -7 81 -110 l50 -109 -62 49 c-34 27 -84 64\r
-112 82 -67 44 -96 71 -88 83 8 13 84 -1 105 -20z m-6738 2 c-7 -17 -20 -20\r
-28 -6 -4 5 0 12 6 14 23 9 28 7 22 -8z m596 -9 c-51 -27 -110 -42 -110 -29 0\r
18 76 53 115 52 l40 0 -45 -23z m1905 14 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11\r
10 0 6 2 10 4 10 3 0 8 -4 11 -10z m642 -51 c12 -30 25 -66 28 -81 11 -43 -21\r
-36 -99 20 l-66 48 28 26 c33 31 64 48 77 44 6 -1 20 -27 32 -57z m193 31\r
c-39 -54 -123 -141 -133 -137 -9 3 -57 128 -57 148 0 5 30 10 68 12 37 2 84 4\r
105 5 l38 2 -21 -30z m3567 -17 c39 -42 43 -49 37 -82 -4 -20 -11 -47 -16 -61\r
-10 -25 -10 -25 -30 15 -12 22 -34 70 -49 108 -28 66 -28 67 -7 67 13 0 40\r
-19 65 -47z m23 37 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0\r
11 -4 11 -10z m-6253 -62 c-22 -32 -42 -58 -44 -58 -6 0 37 79 47 85 5 3 10\r
10 10 16 0 21 -40 -17 -56 -54 -18 -40 -53 -72 -112 -102 -37 -18 -41 -17 -47\r
14 -3 15 8 31 40 58 56 46 153 100 181 99 20 -1 19 -5 -19 -58z m60 10 c-14\r
-18 -41 -44 -59 -57 l-33 -24 21 24 c12 13 34 44 49 68 18 30 30 40 37 33 7\r
-7 2 -21 -15 -44z m1413 -10 c0 -17 -77 -8 -94 11 -17 19 -17 20 11 34 26 15\r
29 14 56 -11 15 -14 27 -29 27 -34z m1384 42 c60 -11 126 -20 145 -21 31 0 33\r
-2 16 -10 -11 -5 -122 -36 -247 -67 l-227 -57 48 50 c26 27 59 67 75 88 34 44\r
39 44 190 17z m2309 8 c12 -7 45 -15 72 -19 l50 -6 -60 -1 c-75 -2 -105 5 -98\r
24 6 17 9 17 36 2z m-5664 -17 c-13 -11 -26 -17 -29 -14 -6 6 30 33 43 33 5 0\r
-1 -9 -14 -19z m117 8 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5\r
16 -11z m34 7 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10\r
-2 10 -4z m1308 -21 c4 -20 -14 -35 -44 -35 -11 0 -29 -7 -40 -16 -18 -15 -18\r
-15 3 -5 27 14 101 15 88 2 -12 -11 -125 -21 -125 -11 0 13 94 90 105 86 6 -1\r
12 -11 13 -21z m5383 -10 c17 -19 34 -33 38 -31 10 7 81 -61 81 -76 -1 -7 -19\r
7 -42 32 -31 34 -40 40 -35 23 3 -13 3 -23 1 -23 -9 0 -54 54 -69 83 -21 37\r
-11 34 26 -8z m-6255 -11 c-10 -14 -20 -23 -23 -21 -6 6 30 57 36 51 2 -2 -4\r
-15 -13 -30z m63 -11 c-7 -7 -32 -19 -56 -26 -45 -13 -126 -71 -192 -137 -34\r
-35 -34 -35 -15 -4 39 62 52 76 65 69 8 -5 10 -4 5 3 -4 7 -1 12 8 12 8 0 27\r
10 43 23 37 31 105 65 120 60 6 -2 14 1 18 6 3 6 -1 11 -9 11 -9 0 -16 7 -16\r
17 0 14 2 14 20 -2 15 -14 17 -21 9 -32z m150 20 c-1 -16 -4 -41 -8 -56 l-6\r
-28 -43 32 c-24 17 -41 34 -38 37 16 16 63 41 79 41 12 1 17 -6 16 -26z m240\r
-7 c-7 -14 -16 -26 -21 -26 -5 0 -1 13 8 30 21 35 30 33 13 -4z m478 7 c6 -15\r
-22 -51 -32 -41 -4 3 -8 19 -10 36 -3 26 -1 29 16 25 12 -3 23 -12 26 -20z\r
m843 21 c0 -8 -55 -103 -74 -127 -12 -16 -19 -17 -62 -6 -27 7 -50 13 -52 14\r
-9 8 73 106 91 110 12 2 31 6 42 8 33 7 55 7 55 1z m4167 -52 c44 -31 102 -77\r
129 -101 l49 -44 -40 22 c-22 11 -80 36 -130 55 -49 19 -112 44 -138 56 l-49\r
22 34 23 c18 13 40 24 49 25 9 0 52 -26 96 -58z m248 38 c10 -11 16 -20 13\r
-20 -3 0 -13 9 -23 20 -10 11 -16 20 -13 20 3 0 13 -9 23 -20z m-6695 -37 c0\r
-8 -13 -13 -35 -13 -41 0 -43 5 -13 37 21 23 23 23 35 7 7 -10 13 -24 13 -31z\r
m130 25 c0 -18 -2 -20 -9 -8 -6 8 -7 18 -5 22 9 14 14 9 14 -14z m1630 -7 c-8\r
-15 -20 -21 -46 -21 -41 0 -37 15 6 25 16 4 33 11 36 16 11 19 16 1 4 -20z\r
m-2276 -27 c-22 -45 -50 -61 -35 -21 11 28 43 69 49 62 2 -2 -4 -21 -14 -41z\r
m57 23 c-10 -9 -11 -8 -5 6 3 10 9 15 12 12 3 -3 0 -11 -7 -18z m129 8 c0 -39\r
-47 -95 -64 -78 -15 15 -5 61 17 76 29 21 47 21 47 2z m121 -1 c-18 -8 -36\r
-13 -39 -10 -6 7 37 25 58 25 8 -1 0 -7 -19 -15z m129 -11 c-14 -16 -33 -36\r
-44 -47 -12 -10 -21 -23 -21 -30 0 -6 -12 -33 -26 -61 -15 -27 -30 -64 -33\r
-82 -11 -51 -27 -57 -66 -24 -31 25 -33 30 -21 45 11 13 16 14 22 4 6 -9 9 -5\r
9 12 0 33 6 40 65 78 28 17 44 32 37 32 -7 0 11 23 40 50 58 55 75 65 38 23z\r
m390 23 c0 -2 -25 -22 -56 -45 -44 -33 -59 -39 -65 -29 -15 22 -4 32 57 54 32\r
12 60 22 62 23 1 1 2 -1 2 -3z m490 -16 c22 -11 40 -23 40 -25 0 -8 -79 -55\r
-93 -55 -12 0 -12 9 -4 50 5 28 11 50 14 50 2 0 22 -9 43 -20z m104 -13 c-7\r
-20 -29 -22 -40 -5 -9 14 27 41 38 30 5 -5 6 -16 2 -25z m166 8 c41 -14 78\r
-29 82 -33 4 -4 -33 -28 -82 -55 l-88 -47 -17 49 c-15 46 -15 52 0 80 8 17 19\r
31 24 31 4 0 41 -11 81 -25z m460 4 c32 -20 33 -23 15 -30 -11 -4 -30 -8 -42\r
-8 -19 -1 -23 4 -23 29 0 36 4 36 50 9z m610 16 c0 -2 -14 -25 -32 -50 -39\r
-55 -67 -59 -109 -13 -16 18 -29 35 -29 39 0 3 30 10 68 16 85 13 102 14 102\r
8z m231 -43 c26 -20 48 -40 49 -43 0 -5 -160 -39 -184 -39 -13 0 -4 27 26 77\r
36 60 38 60 109 5z m-571 17 c0 -5 -7 -9 -15 -9 -15 0 -20 12 -9 23 8 8 24 -1\r
24 -14z m3910 15 c0 -4 -33 -45 -72 -92 l-73 -85 -16 69 c-8 38 -19 79 -23 92\r
-7 22 -6 22 88 22 53 0 96 -3 96 -6z m205 -9 c198 -14 314 -28 365 -42 67 -18\r
361 -140 377 -156 6 -7 26 -59 43 -117 18 -58 106 -325 195 -595 176 -529 178\r
-534 167 -552 -8 -13 -283 -144 -577 -275 -99 -44 -224 -100 -277 -125 l-98\r
-46 -19 24 c-10 13 -107 132 -215 264 -108 132 -199 249 -201 260 -2 11 -20\r
193 -40 405 -20 212 -45 466 -55 565 -10 99 -17 182 -15 184 2 2 66 -50 142\r
-116 76 -66 278 -236 448 -378 171 -142 411 -345 535 -451 323 -275 361 -306\r
366 -301 3 2 -19 24 -48 48 -29 24 -96 81 -148 126 -108 94 -485 412 -963 812\r
-180 151 -326 278 -325 282 2 5 41 52 87 104 l83 97 47 -6 c25 -3 82 -8 126\r
-11z m-6041 -6 c-9 -16 -95 -69 -111 -69 -7 0 -13 11 -13 24 0 18 9 28 38 39\r
44 19 96 22 86 6z m1586 -9 c0 -11 -7 -20 -15 -20 -13 0 -13 3 -3 20 7 11 14\r
20 15 20 2 0 3 -9 3 -20z m2019 -12 c5 -18 58 -222 116 -454 l106 -421 -385\r
-482 c-212 -265 -389 -482 -393 -482 -3 -1 -41 66 -83 148 -76 148 -417 793\r
-470 888 -15 28 -53 100 -85 160 -32 61 -73 137 -91 171 -19 33 -34 65 -34 70\r
0 13 211 117 300 147 130 45 460 144 600 181 74 20 191 51 260 70 69 18 130\r
34 137 35 6 1 16 -14 22 -31z m-3319 18 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10\r
4 0 6 5 11 10 11 6 0 10 -2 10 -4z m1814 -30 c16 -21 22 -37 16 -41 -11 -7\r
-70 47 -70 64 0 22 29 10 54 -23z m792 13 c10 -12 35 -30 54 -40 l35 -19 -112\r
3 c-62 1 -113 3 -113 4 0 4 105 73 111 73 3 0 14 -9 25 -21z m-3191 -59 c-13\r
-13 -15 -11 -15 12 0 15 3 34 7 44 6 15 8 13 15 -11 5 -21 3 -34 -7 -45z m117\r
48 c-7 -7 -12 -8 -12 -2 0 14 12 26 19 19 2 -3 -1 -11 -7 -17z m400 -10 c-9\r
-9 -12 -7 -12 12 0 19 3 21 12 12 9 -9 9 -15 0 -24z m34 6 c-4 -9 -9 -15 -11\r
-12 -3 3 -3 13 1 22 4 9 9 15 11 12 3 -3 3 -13 -1 -22z m517 -6 l50 -32 -94\r
-18 c-51 -9 -95 -16 -97 -14 -9 10 31 67 56 80 35 19 28 21 85 -16z m6167 -75\r
c17 -23 30 -45 30 -48 0 -11 -86 95 -105 130 -17 29 -17 29 14 -5 17 -19 45\r
-54 61 -77z m-7282 72 c-6 -14 -13 -23 -15 -21 -5 5 15 46 22 46 3 0 -1 -11\r
-7 -25z m532 16 c0 -6 -4 -13 -10 -16 -5 -3 -10 1 -10 9 0 9 5 16 10 16 6 0\r
10 -4 10 -9z m808 -6 c-2 -1 -19 -10 -38 -19 l-35 -17 29 25 c17 14 34 22 39\r
19 4 -3 7 -6 5 -8z m832 5 c17 -5 19 -8 8 -9 -10 -1 -18 -6 -18 -11 0 -20 -28\r
-22 -55 -4 -25 16 -26 19 -9 25 24 9 42 9 74 -1z m153 -53 c-7 -11 -163 -5\r
-163 6 0 5 6 7 14 4 8 -3 18 4 24 18 17 36 80 39 109 5 11 -14 19 -28 16 -33z\r
m76 39 l22 -24 -38 -4 c-29 -4 -41 0 -55 16 -25 30 -22 36 15 36 22 0 41 -8\r
56 -24z m-1969 10 c0 -2 -11 -6 -25 -8 -14 -3 -25 -1 -25 3 0 5 11 9 25 9 14\r
0 25 -2 25 -4z m199 -58 c-11 -15 -25 -26 -30 -23 -15 10 -10 47 8 67 16 18\r
18 18 30 2 10 -14 9 -22 -8 -46z m6801 18 c0 -12 -5 -7 -19 24 -11 24 -11 24\r
3 6 9 -11 16 -24 16 -30z m-7557 19 c-3 -9 -8 -14 -10 -11 -3 3 -2 9 2 15 9\r
16 15 13 8 -4z m1531 -29 c33 -57 33 -60 -5 -41 -26 14 -29 20 -24 45 6 26 4\r
28 -16 23 -15 -4 -20 -3 -15 5 14 23 34 12 60 -32z m326 -16 c0 -8 -9 -29 -19\r
-47 -17 -27 -29 -34 -96 -48 -86 -19 -118 -10 -61 18 30 14 34 14 29 1 -3 -8\r
23 14 57 48 34 34 57 64 51 66 -6 2 -8 8 -5 14 8 13 43 -30 44 -52z m133 39\r
c-3 -11 -9 -16 -12 -10 -4 6 -18 -5 -34 -24 -15 -19 -31 -35 -36 -35 -4 0 -15\r
16 -24 35 -13 27 -14 37 -4 40 6 2 19 6 27 8 8 3 31 6 52 6 32 1 35 -1 31 -20z\r
m71 14 c3 -4 -4 -16 -16 -27 -13 -12 -19 -18 -14 -13 15 11 38 8 34 -4 -2 -7\r
-25 -20 -50 -30 l-47 -18 16 37 c8 20 20 43 25 50 11 13 40 16 52 5z m71 -17\r
c-41 -25 -55 -25 -55 -1 0 15 19 22 65 24 l30 1 -40 -24z m-1845 -6 c-12 -22\r
-50 -46 -50 -31 0 9 47 51 57 51 2 0 -1 -9 -7 -20z m279 -2 c-35 -67 -105\r
-160 -130 -173 -37 -19 -38 -9 -8 70 33 89 65 119 132 124 15 1 16 -2 6 -21z\r
m531 18 c0 -1 -5 -17 -11 -34 -8 -24 -20 -34 -57 -46 -67 -23 -72 -5 -11 43\r
43 34 79 51 79 37z m690 -5 c0 -14 -88 -90 -125 -108 -34 -16 -36 -16 -56 4\r
l-21 21 92 46 c94 47 110 52 110 37z m5618 -118 c48 -63 103 -136 122 -161\r
l35 -46 -70 54 c-38 29 -92 74 -120 98 -27 25 -60 49 -72 55 -13 6 -23 19 -23\r
31 0 36 21 97 31 91 5 -4 49 -58 97 -122z m-5183 107 c4 -6 -9 -11 -32 -12\r
l-38 -1 38 -4 c61 -7 46 -29 -24 -37 -56 -7 -92 0 -61 11 6 3 10 8 7 13 -3 4\r
5 6 17 3 17 -3 19 -2 9 5 -11 8 -10 12 5 21 24 13 71 14 79 1z m-1909 -32 c-6\r
-26 -76 -67 -76 -45 0 12 27 33 45 35 5 0 13 11 17 23 11 28 22 17 14 -13z\r
m85 12 c-22 -19 -41 -26 -41 -15 0 5 51 34 60 34 3 0 -6 -9 -19 -19z m229 17\r
c0 -2 -12 -14 -26 -28 l-27 -24 18 28 c14 22 35 36 35 24z m860 -11 c0 -21\r
-11 -24 -48 -11 -39 13 -32 25 15 25 22 0 33 -5 33 -14z m1145 -4 c-3 -3 -11\r
0 -18 7 -9 10 -8 11 6 5 10 -3 15 -9 12 -12z m-2671 -7 c-4 -8 -8 -15 -10 -15\r
-2 0 -4 7 -4 15 0 8 4 15 10 15 5 0 7 -7 4 -15z m129 0 c-3 -9 -8 -14 -10 -11\r
-3 3 -2 9 2 15 9 16 15 13 8 -4z m1879 -7 c-7 -7 -12 -8 -12 -2 0 14 12 26 19\r
19 2 -3 -1 -11 -7 -17z m1058 19 c0 -2 -13 -18 -29 -36 -16 -17 -42 -56 -58\r
-87 l-29 -54 -30 42 c-48 67 -48 66 -12 78 l33 10 -37 -6 c-65 -9 -41 11 33\r
29 71 17 105 16 58 -1 -47 -18 -54 -22 -24 -17 17 3 41 14 55 25 23 17 40 25\r
40 17z m155 -5 c-59 -51 -247 -183 -253 -177 -8 7 83 145 93 141 6 -2 19 0 30\r
5 17 6 17 8 3 8 -10 1 -18 5 -18 11 0 5 30 11 68 13 37 2 71 4 77 5 6 1 6 -1\r
0 -6z m-2525 -15 c0 -18 -18 -38 -65 -74 -64 -48 -69 -49 -50 -13 19 37 84\r
100 103 100 6 0 12 -6 12 -13z m140 -5 c0 -21 -18 -42 -37 -42 -18 0 -16 20 4\r
42 21 23 33 23 33 0z m500 13 c0 -3 -26 -18 -57 -34 -32 -16 -82 -45 -112 -65\r
-29 -20 -54 -36 -56 -36 -2 0 4 22 13 49 l15 50 71 20 c68 19 126 26 126 16z\r
m965 -25 c-6 -9 -9 -9 -16 1 -10 17 0 34 13 21 6 -6 7 -16 3 -22z m338 -22\r
c47 -68 38 -78 -50 -52 -67 19 -68 20 -71 56 -3 31 0 37 20 41 57 11 64 7 101\r
-45z m110 37 c31 -4 57 -9 57 -13 0 -9 -84 -62 -99 -62 -15 0 -14 43 1 58 9 9\r
9 12 0 12 -6 0 -14 -11 -18 -25 -8 -32 -18 -32 -43 4 -28 39 -27 43 12 37 17\r
-3 58 -8 90 -11z m750 4 c20 -5 37 -13 37 -18 0 -4 -57 -25 -127 -46 -112 -33\r
-403 -125 -451 -142 -9 -3 -1 5 18 19 19 13 75 53 123 87 151 108 159 111 267\r
111 52 0 112 -5 133 -11z m-3276 -16 c-9 -9 -19 -14 -23 -11 -10 10 6 28 24\r
28 15 0 15 -1 -1 -17z m691 -30 c-41 -57 -67 -68 -61 -26 3 20 16 35 41 50 55\r
31 57 28 20 -24z m565 36 c42 -11 42 -16 5 -94 -27 -57 -46 -81 -57 -69 -10\r
10 -51 139 -51 160 0 17 48 19 103 3z m1019 -24 c-2 -17 -5 -31 -7 -33 -6 -6\r
-85 38 -85 48 0 5 15 11 33 13 56 7 62 4 59 -28z m-1767 15 c3 -5 3 -15 -1\r
-21 -6 -11 -23 6 -24 24 0 10 18 9 25 -3z m1193 -51 c-7 -5 -21 -9 -30 -9 -17\r
0 -17 2 -1 35 l17 36 14 -27 c12 -22 12 -28 0 -35z m420 49 c-2 -6 11 -15 27\r
-18 17 -4 52 -18 78 -30 48 -21 49 -22 42 -58 -4 -21 -10 -41 -14 -45 -11 -12\r
-151 122 -151 144 0 10 5 19 10 19 6 0 9 -5 8 -12z m-2202 -44 c-3 -8 -12 -14\r
-21 -14 -14 0 -13 4 2 33 13 25 18 28 21 14 2 -10 1 -25 -2 -33z m105 19 c-8\r
-15 -10 -15 -11 -2 0 17 10 32 18 25 2 -3 -1 -13 -7 -23z m1078 -25 c-12 -29\r
-32 -84 -46 -121 -28 -75 -45 -91 -127 -118 -43 -15 -51 -16 -54 -3 -2 8 -9\r
14 -15 14 -36 1 -37 17 -3 87 32 65 40 74 108 116 154 95 166 97 137 25z m658\r
25 c-8 -9 -20 -12 -27 -8 -8 5 -6 11 7 20 23 17 39 7 20 -12z m102 -30 c-10\r
-31 -19 -64 -19 -74 0 -20 -63 -74 -68 -58 -2 5 10 37 27 71 17 33 29 63 27\r
65 -3 3 -16 -18 -30 -46 -15 -28 -30 -51 -36 -51 -8 0 -26 88 -19 94 12 9 116\r
55 126 56 8 0 6 -17 -8 -57z m5449 40 c18 -17 42 -71 42 -97 0 -16 -24 13 -54\r
67 -28 48 -23 60 12 30z m-7348 -18 c0 -14 -4 -25 -9 -25 -5 0 -8 8 -6 18 2 9\r
4 20 4 25 2 19 11 4 11 -18z m920 -30 c-8 -27 -23 -53 -36 -62 -34 -22 -135\r
-46 -146 -35 -13 13 29 76 66 98 34 20 119 52 125 48 2 -2 -2 -24 -9 -49z\r
m471 38 c26 -16 47 -48 37 -58 -5 -5 -112 -33 -115 -31 -6 5 33 106 40 106 5\r
0 22 -8 38 -17z m692 0 c-5 -12 -8 -13 -11 -4 -3 9 -10 7 -26 -7 -39 -35 -146\r
-105 -152 -99 -3 3 6 30 21 60 28 60 28 60 137 65 31 2 36 -1 31 -15z m587 12\r
c0 -9 -141 -87 -147 -81 -10 10 6 22 72 55 59 30 75 36 75 26z m-2169 -38\r
c-10 -25 -41 -47 -91 -62 -17 -5 -6 8 35 43 33 27 61 49 63 47 1 -1 -2 -14 -7\r
-28z m-341 14 c0 -14 -18 -23 -31 -15 -8 4 -7 9 2 15 18 11 29 11 29 0z m427\r
-7 c3 -10 -46 -39 -53 -31 -2 2 4 13 12 26 16 22 35 24 41 5z m63 -11 c0 -20\r
-3 -24 -11 -16 -7 7 -9 19 -6 27 10 24 17 19 17 -11z m1559 -51 c77 -71 83\r
-79 72 -99 -12 -23 -51 -37 -136 -47 -27 -4 -66 -9 -86 -12 l-37 -5 20 83 c17\r
75 57 158 76 158 4 0 45 -35 91 -78z m-1007 -63 c-17 -15 -102 -60 -102 -54 0\r
4 11 34 24 68 14 34 30 76 37 92 l11 30 19 -65 c10 -35 15 -67 11 -71z m1517\r
75 c22 -31 38 -61 35 -65 -8 -14 -56 -11 -108 7 -44 15 -47 18 -41 43 7 30 43\r
71 61 71 7 0 31 -25 53 -56z m-2663 9 c-10 -10 -19 5 -10 18 6 11 8 11 12 0 2\r
-7 1 -15 -2 -18z m71 12 c1 -5 -8 -23 -21 -40 -22 -27 -25 -28 -32 -12 -9 25\r
12 69 33 65 9 -2 18 -7 20 -13z m493 -10 c0 -15 -99 -99 -107 -91 -3 3 0 21 7\r
41 8 25 23 41 48 54 39 20 52 19 52 -4z m840 15 c0 -5 -5 -10 -11 -10 -5 0 -7\r
5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m304 -12 c10 -38 7 -106 -6 -114 -6\r
-4 -17 1 -24 10 -8 11 -13 13 -16 5 -4 -13 -88 25 -88 40 0 4 12 21 27 37 l27\r
29 13 -30 c13 -28 13 -28 9 -4 -4 20 -1 29 17 37 31 15 34 15 41 -10z m285 19\r
c-29 -24 -119 -86 -119 -83 0 8 103 85 114 85 5 1 7 -1 5 -2z m-2110 -23 c7 5\r
11 -2 11 -17 0 -32 -8 -38 -31 -24 -14 9 -16 14 -6 26 10 12 9 14 -7 8 -16 -6\r
-17 -5 -6 8 10 12 15 13 20 4 4 -6 13 -8 19 -5z m1701 -8 c0 -28 -27 -38 -57\r
-22 -29 15 -26 19 22 29 34 8 35 7 35 -7z m406 -8 c-8 -13 -20 -55 -27 -95 -6\r
-40 -18 -74 -24 -77 -7 -2 -47 0 -89 6 -63 9 -74 13 -64 25 6 8 18 11 27 8 8\r
-3 12 -3 8 1 -4 4 -2 13 5 21 17 21 0 28 -21 9 -11 -10 -26 -16 -33 -14 -7 3\r
2 12 22 23 19 9 44 25 55 34 18 15 19 15 6 -1 -7 -10 -11 -18 -7 -18 9 0 84\r
49 119 77 36 29 41 29 23 1z m382 1 l64 -12 -63 -33 c-76 -41 -99 -35 -99 27\r
0 34 3 40 18 35 9 -3 45 -10 80 -17z m172 10 c0 -6 -5 -19 -10 -30 -9 -15 -15\r
-17 -30 -9 -26 14 -25 23 3 36 30 15 37 16 37 3z m3400 -1 c0 -7 5 -53 10\r
-103 9 -90 111 -1164 130 -1370 5 -60 19 -202 29 -315 34 -358 35 -374 20\r
-365 -8 5 -50 36 -94 70 -44 33 -188 138 -320 233 -240 172 -473 340 -595 431\r
-36 26 -184 135 -330 241 -146 107 -296 216 -334 244 -38 28 -128 92 -200 142\r
-72 50 -131 95 -131 100 0 5 104 49 230 97 127 48 388 148 580 221 193 74 447\r
171 565 216 118 46 260 102 315 126 108 46 125 51 125 32z m1282 -95 c73 -57\r
155 -122 181 -145 l48 -43 60 -200 c64 -212 140 -503 144 -545 1 -14 7 -36 14\r
-49 7 -13 9 -27 4 -31 -15 -13 -192 -130 -198 -130 -3 0 -5 8 -5 18 0 10 -78\r
251 -173 537 -216 646 -209 624 -201 636 3 5 -2 21 -11 36 -25 38 -8 28 137\r
-84z m-5802 78 c0 -6 -4 -13 -10 -16 -5 -3 -10 1 -10 9 0 9 5 16 10 16 6 0 10\r
-4 10 -9z m-1450 -36 c0 -37 -10 -44 -29 -21 -9 11 -10 20 -1 35 16 32 30 25\r
30 -14z m135 19 c26 -17 33 -34 15 -34 -6 0 -29 -9 -50 -19 -22 -11 -42 -16\r
-45 -12 -4 7 43 81 52 81 2 0 15 -7 28 -16z m326 -21 c-10 -17 -10 -16 -11 3\r
0 23 13 41 18 25 2 -6 -1 -18 -7 -28z m129 -17 c-11 -42 -16 -46 -62 -62 -27\r
-9 -52 -14 -55 -11 -12 12 9 44 41 61 19 10 45 29 57 42 30 32 34 24 19 -30z\r
m822 40 c2 -16 -150 -149 -161 -141 -16 9 -13 77 4 98 13 19 118 58 143 54 7\r
-1 14 -6 14 -11z m101 7 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z\r
m-1480 -22 c2 -10 1 -25 -4 -32 -6 -10 -9 -4 -9 19 0 36 5 42 13 13z m592 -31\r
c-21 -41 -28 -35 -13 13 7 23 15 34 21 28 5 -5 2 -22 -8 -41z m-185 22 c0 -19\r
-81 -102 -118 -121 -44 -23 -56 12 -22 67 32 52 140 94 140 54z m1067 9 c1 0\r
-4 -20 -12 -42 -22 -62 -17 -72 6 -11 22 56 26 59 54 38 17 -13 17 -17 -20\r
-95 -21 -44 -40 -79 -42 -77 -8 7 -43 150 -43 173 0 18 5 21 28 19 15 -2 28\r
-4 29 -5z m1002 -17 c6 -15 14 -46 18 -70 5 -37 3 -44 -11 -44 -19 0 -145 71\r
-146 82 0 11 83 56 106 57 13 1 25 -8 33 -25z m-2616 -4 c10 -9 -39 -50 -59\r
-50 -17 0 -17 10 -4 45 8 21 14 25 33 20 12 -4 26 -11 30 -15z m970 8 c-5 -7\r
-17 -34 -27 -60 -10 -27 -22 -48 -27 -48 -5 0 -25 15 -45 33 l-36 33 64 26\r
c74 30 84 32 71 16z m-601 -20 c-7 -7 -12 -8 -12 -2 0 14 12 26 19 19 2 -3 -1\r
-11 -7 -17z m1145 -152 c-29 -86 -46 -100 -82 -66 -26 25 -55 74 -55 95 0 13\r
48 61 110 108 l45 34 3 -51 c2 -34 -5 -75 -21 -120z m1139 140 c10 -54 0 -63\r
-12 -11 -6 25 -7 45 -3 45 5 0 11 -16 15 -34z m-1848 5 c3 -8 -1 -12 -9 -9 -7\r
2 -15 10 -17 17 -3 8 1 12 9 9 7 -2 15 -10 17 -17z m1012 -46 c0 -2 -10 -9\r
-22 -16 -18 -10 -24 -8 -40 12 l-19 24 7 -30 c4 -16 8 -32 10 -34 2 -2 -1 -12\r
-7 -23 -10 -18 -105 -68 -129 -68 -5 0 8 37 29 83 21 45 41 90 44 100 6 16 12\r
15 67 -13 33 -17 60 -32 60 -35z m921 51 c19 -7 43 -16 54 -20 16 -6 8 -13\r
-43 -41 -34 -19 -66 -35 -70 -35 -4 0 -8 25 -10 55 -3 62 5 67 69 41z m-2474\r
-3 c-4 -3 -26 -15 -49 -25 -25 -11 -37 -14 -30 -6 7 7 27 18 45 25 39 14 42\r
15 34 6z m53 -2 c0 -6 -4 -13 -10 -16 -5 -3 -10 1 -10 9 0 9 5 16 10 16 6 0\r
10 -4 10 -9z m2096 -19 c-18 -18 -31 -10 -23 12 4 10 13 13 22 9 15 -5 15 -7\r
1 -21z m-2386 14 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21 21\r
13z m1310 -55 c0 -41 5 -62 16 -72 20 -16 39 -54 52 -102 10 -36 9 -39 -15\r
-50 -22 -10 -28 -8 -44 12 -26 31 -35 87 -18 108 8 9 10 14 4 11 -6 -4 -10 23\r
-10 73 0 43 3 79 8 79 4 0 7 -26 7 -59z m-1250 28 c0 -11 -28 -24 -36 -17 -2\r
3 -2 12 2 21 6 16 34 12 34 -4z m52 -1 c-7 -7 -12 -8 -12 -2 0 14 12 26 19 19\r
2 -3 -1 -11 -7 -17z m143 12 c23 -37 -61 -88 -105 -65 -15 8 -19 15 -11 19 6\r
4 16 4 21 1 6 -4 9 -1 8 5 -2 7 13 20 32 31 40 22 46 23 55 9z m85 -6 c0 -8\r
-4 -12 -10 -9 -5 3 -10 10 -10 16 0 5 5 9 10 9 6 0 10 -7 10 -16z m190 -3 c0\r
-24 -15 -36 -52 -40 -9 -1 -8 -4 2 -11 9 -6 10 -10 3 -10 -25 0 -24 23 3 50\r
34 35 44 37 44 11z m220 15 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11\r
10 11 6 0 10 -2 10 -4z m525 -103 c-5 -27 -12 -34 -44 -44 -22 -6 -51 -9 -65\r
-5 -21 5 -26 12 -26 39 0 44 7 52 75 86 l60 31 3 -37 c2 -21 1 -52 -3 -70z\r
m561 72 c-4 -14 -12 -25 -19 -25 -7 0 -18 -9 -25 -20 -7 -11 -18 -20 -25 -20\r
-6 0 3 14 21 30 17 16 32 36 32 43 0 16 11 29 18 22 2 -2 2 -16 -2 -30z m-996\r
-14 c25 -22 42 -42 38 -46 -3 -4 -36 9 -71 28 -60 32 -64 35 -44 45 30 15 27\r
16 77 -27z m1656 4 c72 -40 83 -52 57 -62 -10 -3 -37 -19 -60 -35 l-43 -29 -1\r
28 c-2 26 -2 25 -9 -7 -4 -19 -8 -28 -9 -19 0 9 -4 31 -7 48 -6 30 -5 31 27\r
32 35 1 33 3 -13 13 -34 8 -57 44 -37 57 21 13 28 12 95 -26z m-2186 17 c0\r
-10 -22 -32 -32 -32 -5 0 -3 9 4 20 13 20 28 27 28 12z m332 -25 c-6 -7 -32\r
-28 -57 -46 -39 -28 -45 -30 -45 -14 0 29 21 51 60 61 49 14 54 14 42 -1z m29\r
-5 c-10 -18 -121 -118 -121 -109 0 5 123 126 128 127 1 0 -2 -8 -7 -18z m1714\r
8 c4 -6 -6 -10 -22 -10 -22 0 -25 2 -13 10 19 12 27 12 35 0z m-2435 -19 c0\r
-20 -25 -35 -41 -25 -13 8 9 44 26 44 8 0 15 -9 15 -19z m844 -19 l59 -28 -68\r
-58 c-67 -57 -144 -111 -150 -104 -3 4 59 190 69 207 11 16 25 14 90 -17z\r
m753 -24 c13 -44 10 -58 -12 -58 -8 0 -17 -5 -21 -11 -4 -8 1 -9 17 -5 24 7\r
24 7 -1 -8 -52 -31 -54 -20 -20 92 15 48 20 47 37 -10z m-1205 10 c-9 -9 -12\r
-7 -12 12 0 19 3 21 12 12 9 -9 9 -15 0 -24z m178 15 c0 -24 -10 -38 -39 -52\r
-17 -9 -26 -10 -34 -2 -6 6 -16 11 -21 11 -6 0 -3 -5 7 -11 18 -10 17 -12 -6\r
-38 -14 -14 -31 -39 -36 -54 -12 -32 -27 -32 -49 1 -13 19 -11 24 21 56 19 19\r
36 39 38 44 4 9 94 58 112 61 4 1 7 -7 7 -16z m1739 -35 c-23 -29 -66 -86 -96\r
-125 -29 -40 -60 -73 -68 -73 -7 0 -21 -3 -31 -7 -15 -6 -16 1 -10 85 12 152\r
7 145 112 158 149 19 142 22 93 -38z m118 46 c16 -4 26 -18 34 -46 6 -22 8\r
-46 6 -52 -5 -13 -157 -96 -176 -96 -6 0 -11 18 -11 43 0 35 8 52 45 100 45\r
56 58 63 102 51z m-2299 -65 c-55 -30 -60 -24 -27 31 l21 34 20 -24 19 -24\r
-33 -17z m72 44 c5 -4 -20 -23 -31 -23 -4 0 -9 9 -12 20 -4 18 -2 20 16 14 12\r
-3 24 -8 27 -11z m120 -2 c-5 -11 -15 -23 -22 -27 -7 -5 -8 -2 -3 7 21 37 44\r
55 25 20z m852 -6 c-4 -21 -10 -25 -38 -25 -19 0 -34 2 -34 4 0 5 63 46 71 46\r
3 0 4 -11 1 -25z m738 5 c0 -11 -4 -20 -10 -20 -5 0 -10 9 -10 20 0 11 5 20\r
10 20 6 0 10 -9 10 -20z m119 9 c32 -1 30 -2 -22 -15 -62 -15 -77 -12 -77 13\r
0 12 7 14 31 9 17 -3 48 -6 68 -7z m-2130 -41 c-12 -20 -14 -21 -17 -5 -2 10\r
2 25 9 34 18 21 23 0 8 -29z m1061 32 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3\r
6 8 10 11 10 2 0 4 -4 4 -10z m910 -5 c0 -19 -36 -39 -45 -24 -4 6 1 17 11 24\r
24 18 34 19 34 0z m-1920 -5 c0 -5 -9 -14 -20 -20 -22 -12 -23 -10 -14 14 7\r
17 34 22 34 6z m317 4 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z\r
m723 -4 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10\r
-10z m1110 -22 c0 -61 -23 -199 -33 -195 -10 3 -107 173 -107 188 0 6 96 34\r
133 38 4 1 7 -14 7 -31z m-1420 -71 c-27 -88 -34 -97 -76 -97 -39 0 -42 10\r
-18 70 17 41 106 128 112 110 2 -6 -6 -43 -18 -83z m1115 74 c-3 -6 -11 -11\r
-17 -11 -6 0 -6 6 2 15 14 17 26 13 15 -4z m830 -2 c-28 -19 -28 -20 -5 -14\r
24 6 24 5 6 -9 -11 -9 -16 -16 -11 -16 4 0 0 -10 -11 -21 -13 -16 -15 -23 -7\r
-26 9 -3 4 -21 -16 -61 -15 -31 -59 -125 -96 -209 -91 -205 -90 -204 -104\r
-112 -6 41 -14 89 -17 106 -4 30 3 41 112 153 64 66 113 120 108 120 -5 0 -61\r
-52 -125 -116 l-116 -116 -6 39 c-6 32 -3 41 16 55 12 10 31 21 42 24 11 4 41\r
26 67 50 25 24 69 57 97 74 28 18 51 34 51 36 0 11 -22 0 -82 -40 -64 -43 -66\r
-44 -57 -18 6 18 34 42 87 74 77 48 124 67 67 27z m-2385 1 c12 -7 12 -12 3\r
-21 -15 -15 -68 5 -58 21 8 13 35 13 55 0z m147 -27 c-9 -9 -17 -11 -21 -5 -3\r
6 2 18 11 28 12 12 18 13 21 4 2 -6 -2 -19 -11 -27z m47 22 c-6 -16 -24 -21\r
-24 -7 0 11 11 22 21 22 5 0 6 -7 3 -15z m2471 -380 c403 -757 454 -852 504\r
-952 l51 -103 -395 0 -394 0 -15 29 c-31 59 -78 200 -122 366 -25 94 -63 230\r
-85 304 -21 74 -39 144 -39 157 0 37 199 473 267 587 3 5 11 3 18 -5 7 -7 102\r
-179 210 -383z m-2890 375 c-4 -6 -11 -7 -17 -4 -7 4 -8 2 -4 -4 9 -15 -18\r
-68 -39 -75 -21 -9 -19 -1 10 50 14 23 33 43 41 43 8 0 12 -5 9 -10z m335 -5\r
c0 -8 -4 -15 -9 -15 -13 0 -22 16 -14 24 11 11 23 6 23 -9z m566 -17 c-8 -43\r
-21 -53 -83 -71 l-52 -16 62 59 c34 33 66 59 71 60 5 0 6 -15 2 -32z m1060\r
-54 c57 -108 61 -124 34 -124 -12 0 -30 10 -41 23 -37 43 -89 126 -89 140 0\r
20 29 49 44 44 6 -1 30 -39 52 -83z m-961 55 c5 -6 5 -13 -1 -19 -7 -7 -17 -4\r
-32 8 -12 11 -22 22 -22 26 0 9 41 -3 55 -15z m29 9 c-5 -8 -2 -9 12 -4 59 25\r
104 1 104 -54 0 -30 -45 -83 -65 -77 -12 4 -55 66 -55 78 0 16 30 9 51 -12 12\r
-12 19 -29 16 -40 -3 -11 -1 -16 5 -13 5 3 7 18 4 33 -6 23 -5 24 7 9 14 -18\r
27 -14 27 8 0 8 -6 11 -15 8 -8 -4 -15 -1 -15 6 0 7 -7 10 -15 6 -14 -5 -20 5\r
-16 27 1 4 -9 3 -21 -4 -18 -10 -24 -8 -35 7 -17 24 -16 34 3 34 9 0 12 -5 8\r
-12z m825 5 c0 -5 -4 -17 -9 -28 -8 -18 -9 -17 -9 8 -1 15 4 27 9 27 6 0 10\r
-3 9 -7z m-1919 -8 c0 -18 -33 -65 -45 -65 -17 0 -10 25 13 53 15 16 32 23 32\r
12z m330 1 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2\r
10 -4z m250 1 c0 -2 -19 -21 -42 -42 -23 -22 -36 -31 -28 -20 18 27 70 72 70\r
62z m63 -10 c4 -12 -14 -47 -25 -47 -2 0 -3 14 0 30 4 31 16 39 25 17z m721\r
-11 c-5 -13 -14 -16 -33 -11 -19 4 -22 3 -11 -4 12 -8 9 -12 -13 -20 -15 -6\r
-27 -13 -27 -15 0 -3 7 -3 15 0 9 4 15 1 15 -7 0 -8 6 -5 16 7 14 18 15 18 8\r
-6 -8 -31 -24 -50 -24 -29 -1 12 -3 11 -13 -2 -16 -21 -45 -31 -53 -18 -3 6 1\r
18 10 28 15 16 14 18 -6 17 -19 -1 -24 5 -26 33 l-3 34 41 -6 c25 -3 55 0 73\r
8 37 15 40 14 31 -9z m524 -22 l3 -39 -25 24 c-28 27 -33 46 -13 54 23 10 32\r
0 35 -39z m-1615 19 c16 -9 -5 -21 -31 -18 -15 2 -34 4 -42 4 -13 1 -13 2 0\r
11 13 8 13 10 -1 10 -9 0 -19 -7 -23 -15 -6 -16 -36 -21 -36 -5 0 19 36 30 80\r
24 25 -4 48 -9 53 -11z m105 4 c6 -7 7 -19 3 -26 -7 -10 -13 -11 -30 -1 -18 9\r
-20 14 -10 26 14 17 23 18 37 1z m217 -29 c-9 -50 -31 -98 -46 -98 -18 0 -49\r
20 -49 33 0 10 88 107 98 107 2 0 1 -19 -3 -42z m430 12 c3 -6 0 -10 -7 -10\r
-7 0 -23 -3 -36 -6 -21 -6 -22 -5 -11 19 10 21 15 24 30 17 10 -6 21 -15 24\r
-20z m715 -10 c-31 -28 -47 -36 -52 -27 -13 21 -9 26 35 46 63 29 67 24 17\r
-19z m-1638 8 c-7 -7 -12 -8 -12 -2 0 14 12 26 19 19 2 -3 -1 -11 -7 -17z\r
m1692 10 c-5 -7 -21 -31 -36 -52 -15 -21 -28 -44 -28 -51 0 -7 -9 -20 -21 -31\r
-20 -18 -20 -18 -14 11 l6 30 -16 -25 -15 -25 2 30 c2 18 9 30 17 30 8 0 35\r
21 59 48 44 46 60 59 46 35z m59 -40 c14 -20 17 -37 12 -65 -10 -64 -14 -66\r
-83 -52 l-61 13 19 35 c34 66 83 127 89 111 3 -8 14 -27 24 -42z m-454 -35\r
c11 -22 10 -23 -24 -23 -41 0 -44 11 -18 66 l18 36 6 -28 c3 -16 11 -39 18\r
-51z m110 13 c-11 -12 -15 -8 -23 28 l-7 30 20 -25 c12 -14 16 -28 10 -33z\r
m-429 29 c20 -24 6 -28 -15 -5 -10 11 -13 20 -8 20 6 0 16 -7 23 -15z m-982\r
-50 c-4 -51 -27 -95 -49 -95 -11 0 -2 52 18 108 21 60 36 54 31 -13z m109 19\r
c-37 -38 -57 -38 -57 0 0 31 7 36 53 36 l39 0 -35 -36z m78 -15 c-14 -53 -39\r
-89 -62 -89 -19 0 -16 20 8 60 19 31 58 80 65 80 1 0 -4 -23 -11 -51z m63 38\r
c9 -10 4 -22 -19 -51 -17 -20 -33 -35 -36 -33 -2 3 1 25 8 51 11 46 27 57 47\r
33z m1312 -8 c0 -23 -17 -59 -28 -59 -4 0 -13 14 -19 31 -11 27 -10 31 10 39\r
33 13 37 12 37 -11z m329 -65 c33 -46 32 -54 -11 -54 -25 0 -32 7 -49 46 -14\r
30 -18 55 -14 72 l7 27 19 -25 c10 -14 32 -44 48 -66z m331 38 c0 -15 -8 -26\r
-27 -33 -48 -18 -55 -7 -20 37 33 43 47 41 47 -4z m-2409 7 c-9 -22 -10 -22\r
-10 -3 -1 11 2 24 6 27 12 12 14 0 4 -24z m1181 -10 c22 -23 38 -48 36 -56 -2\r
-8 -30 -24 -62 -35 -33 -11 -89 -33 -124 -49 -36 -16 -67 -29 -69 -29 -2 0 -1\r
9 2 21 4 12 8 31 10 44 2 26 46 106 67 122 7 6 22 13 33 16 50 12 69 6 107\r
-34z m1393 -9 c-14 -15 -46 -42 -70 -59 -43 -31 -43 -31 -49 -8 -11 41 -6 46\r
67 81 77 38 97 33 52 -14z m-2515 21 c0 -11 -39 -25 -47 -18 -3 3 -2 10 2 16\r
8 13 45 15 45 2z m34 -6 c-4 -8 -8 -15 -10 -15 -2 0 -4 7 -4 15 0 8 4 15 10\r
15 5 0 7 -7 4 -15z m226 0 c-7 -9 -15 -13 -19 -10 -3 3 1 10 9 15 21 14 24 12\r
10 -5z m184 -1 c5 -14 4 -15 -9 -4 -17 14 -19 20 -6 20 5 0 12 -7 15 -16z\r
m478 -36 c-33 -44 -44 -52 -67 -50 -17 2 -24 -1 -20 -8 7 -11 -24 -44 -90 -97\r
-22 -18 -35 -32 -30 -32 6 -1 40 24 78 54 37 30 76 55 87 55 23 0 24 -5 9 -47\r
-10 -31 -28 -42 -138 -82 -57 -21 -72 -21 -53 2 7 8 10 16 7 19 -2 2 4 33 14\r
69 l18 64 44 6 44 5 -38 8 c-29 6 -35 11 -27 21 6 7 21 15 33 18 12 3 47 15\r
77 26 90 33 97 29 52 -31z m712 26 c4 -15 5 -29 2 -31 -6 -7 -47 4 -66 17 -13\r
9 -12 12 4 25 30 23 53 18 60 -11z m-1160 1 c3 -8 1 -15 -4 -15 -6 0 -10 7\r
-10 15 0 8 2 15 4 15 2 0 6 -7 10 -15z m-45 -9 c9 -11 4 -18 -26 -37 -56 -35\r
-57 -35 -28 10 30 45 37 48 54 27z m207 -23 c-11 -11 -19 6 -11 24 8 17 8 17\r
12 0 3 -10 2 -21 -1 -24z m614 24 c0 -7 -15 -18 -32 -25 l-33 -12 30 25 c35\r
29 35 29 35 12z m698 -75 c-39 -7 -44 0 -35 47 l9 45 22 -45 c22 -42 22 -44 4\r
-47z m-1961 41 c-3 -16 -15 -50 -27 -77 -27 -60 -41 -46 -33 33 6 58 15 71 47\r
71 15 0 17 -5 13 -27z m239 0 c-10 -10 -19 5 -10 18 6 11 8 11 12 0 2 -7 1\r
-15 -2 -18z m-53 -39 c-5 -13 -3 -15 7 -9 9 5 11 4 6 -4 -4 -6 -11 -9 -16 -6\r
-4 3 -11 -5 -15 -18 -6 -19 -8 -20 -12 -4 -2 10 0 31 6 47 7 20 7 30 0 30 -6\r
0 -7 5 -4 11 11 16 36 -26 28 -47z m1268 46 c20 -11 27 -64 9 -75 -5 -3 -7 0\r
-4 8 3 8 1 18 -5 22 -6 3 -11 -1 -11 -11 0 -16 -1 -16 -20 1 -11 10 -20 14\r
-21 9 0 -5 -5 2 -10 15 -14 36 19 53 62 31z m42 -5 c-3 -9 -8 -14 -10 -11 -3\r
3 -2 9 2 15 9 16 15 13 8 -4z m96 4 c17 -6 31 -14 31 -18 0 -12 -64 -44 -92\r
-46 -23 -1 -28 2 -28 21 0 25 24 54 44 54 7 0 27 -5 45 -11z m111 1 c0 -5 -5\r
-10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-1780 -40 l-8\r
-35 -1 31 c-1 17 2 34 6 37 11 12 12 3 3 -33z m111 -4 c-16 -26 -18 -35 -9\r
-39 10 -4 8 -10 -6 -21 -23 -19 -34 -13 -16 9 7 8 10 15 6 15 -4 0 3 18 14 41\r
12 23 24 38 27 35 3 -2 -4 -21 -16 -40z m1346 15 c3 -15 17 -40 30 -57 27 -36\r
28 -44 9 -44 -7 0 -19 -6 -25 -14 -23 -28 -61 -25 -97 6 -33 29 -33 31 -19 59\r
9 16 18 29 20 29 3 0 14 -15 25 -32 11 -18 20 -28 20 -23 0 6 -11 28 -25 50\r
-13 22 -25 44 -25 48 0 4 18 7 40 5 34 -2 42 -6 47 -27z m-883 3 c11 -28 6\r
-59 -14 -84 l-19 -25 -35 34 c-20 19 -36 38 -36 41 0 8 72 49 86 50 7 0 15 -7\r
18 -16z m52 -1 c-4 -10 -4 -14 0 -10 9 9 44 -22 44 -40 0 -27 -27 -12 -49 27\r
-20 35 -20 40 -6 40 12 0 15 -5 11 -17z m44 7 c0 -5 -4 -10 -10 -10 -5 0 -10\r
5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m22 -12 c-7 -7 -12 -8 -12 -2 0 14\r
12 26 19 19 2 -3 -1 -11 -7 -17z m123 12 c-14 -22 -115 -61 -115 -44 0 24 23\r
42 55 42 20 0 39 3 42 6 10 10 25 7 18 -4z m545 0 c0 -15 -23 -60 -30 -60 -15\r
0 -42 40 -37 55 7 16 67 22 67 5z m1104 -6 c3 -9 6 -21 6 -29 0 -13 -88 -90\r
-95 -83 -2 2 14 28 36 58 29 40 32 45 9 20 -17 -19 -45 -56 -62 -82 l-31 -48\r
-19 30 c-25 41 -23 51 15 94 41 48 128 73 141 40z m-686 -18 c4 -20 -26 -58\r
-39 -50 -14 8 -11 62 4 67 19 8 32 2 35 -17z m-2017 -18 c-13 -36 -32 -35 -20\r
1 6 17 15 29 20 26 4 -3 5 -15 0 -27z m193 17 c-4 -8 -11 -15 -16 -15 -6 0 -5\r
6 2 15 7 8 14 15 16 15 2 0 1 -7 -2 -15z m2366 8 c0 -5 -12 -21 -26 -37 -21\r
-23 -28 -26 -35 -15 -16 25 -10 38 24 48 17 5 33 10 35 10 1 1 2 -2 2 -6z\r
m-390 -23 c23 -6 22 -8 -30 -43 -30 -20 -60 -37 -67 -37 -14 0 -28 62 -19 85\r
5 15 46 14 116 -5z m-1710 5 c0 -14 -33 -85 -40 -85 -22 0 -21 43 1 66 21 22\r
39 31 39 19z m90 -5 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6\r
0 11 -4 11 -10z m474 -40 c-22 -63 -24 -65 -45 -31 -10 18 -19 34 -19 36 0 5\r
74 44 77 41 1 -1 -5 -22 -13 -46z m414 -17 c-134 -186 -198 -277 -201 -287 -3\r
-7 -9 -7 -21 3 -15 13 -17 27 -10 115 4 71 11 107 23 120 20 24 125 74 171 82\r
19 4 44 13 54 20 33 23 29 9 -16 -53z m94 50 c20 -18 25 -47 6 -40 -7 2 -12\r
10 -10 16 1 8 -7 9 -24 5 -24 -6 -25 -5 -15 15 14 25 19 26 43 4z m213 -10\r
l18 -28 -21 19 c-12 11 -22 23 -22 28 0 14 7 9 25 -19z m208 7 c3 -11 0 -20\r
-6 -21 -8 0 -8 -2 1 -6 7 -3 12 -23 12 -51 l0 -46 -40 39 c-22 21 -40 42 -40\r
45 0 3 12 11 28 18 23 10 24 11 4 8 -23 -4 -23 -4 -6 15 22 25 40 24 47 -1z\r
m519 -14 c29 -34 20 -39 -17 -9 -19 15 -35 31 -35 35 0 13 34 -4 52 -26z m-36\r
-11 c19 -25 24 -42 20 -59 -7 -30 -52 -84 -61 -75 -5 6 -65 158 -65 167 0 1\r
18 2 39 2 34 0 44 -5 67 -35z m-1800 -1 c-4 -9 -9 -15 -11 -12 -3 3 -3 13 1\r
22 4 9 9 15 11 12 3 -3 3 -13 -1 -22z m97 -10 c35 -33 36 -37 21 -49 -15 -10\r
-26 -10 -61 3 -24 9 -43 20 -43 25 0 11 31 57 39 57 3 0 23 -16 44 -36z m1307\r
-5 c0 -33 -2 -34 -33 -18 -22 12 -22 11 1 -13 20 -22 21 -26 8 -31 -9 -4 -16\r
-12 -16 -18 0 -8 4 -8 15 1 20 16 19 5 -2 -31 -20 -33 -38 -39 -30 -9 3 11 1\r
18 -4 14 -13 -8 -11 63 2 89 18 34 41 57 50 51 5 -3 9 -18 9 -35z m304 -31\r
c14 -40 26 -78 26 -84 0 -10 -105 -64 -124 -64 -8 0 -8 205 1 213 3 4 21 7 38\r
7 31 0 33 -3 59 -72z m-1734 27 c0 -41 -15 -46 -24 -8 -5 17 -3 29 6 34 18 12\r
18 13 18 -26z m1201 -6 c-6 -16 -10 -18 -10 -7 -1 22 12 55 16 42 2 -6 -1 -22\r
-6 -35z m39 11 c-32 -24 -42 -14 -11 11 13 11 27 17 30 14 3 -4 -5 -15 -19\r
-25z m374 -67 c-4 -54 -8 -99 -9 -101 -2 -2 -22 6 -46 18 -23 12 -38 25 -33\r
28 6 4 16 27 24 51 13 39 53 101 66 101 3 0 2 -44 -2 -97z m-1391 65 c-3 -13\r
-9 -27 -13 -33 -4 -5 -10 -18 -13 -28 -6 -15 -4 -16 16 -6 18 10 20 9 9 -2\r
-14 -15 -72 -22 -72 -9 0 5 10 17 23 27 12 10 28 30 34 46 15 33 23 35 16 5z\r
m26 -21 c-7 -15 -16 -27 -21 -27 -5 0 -6 6 -1 13 7 12 8 16 11 47 2 10 5 11\r
12 4 8 -8 7 -19 -1 -37z m1320 21 c-6 -13 -22 -37 -35 -55 -13 -17 -24 -39\r
-24 -47 0 -9 -3 -16 -7 -16 -9 0 -53 42 -53 51 0 7 117 89 126 89 3 0 -1 -10\r
-7 -22z m547 -14 c7 -39 -3 -65 -45 -114 -26 -29 -26 -30 -49 -12 -18 14 -22\r
24 -17 45 7 27 80 117 95 117 5 0 12 -16 16 -36z m-2146 -21 c0 -8 -7 -28 -16\r
-45 -11 -22 -18 -27 -24 -18 -6 10 -9 9 -13 -1 -4 -9 -6 -8 -6 5 -1 16 -3 16\r
-17 6 -13 -12 -14 -10 -2 15 10 21 14 24 16 12 6 -28 22 -19 22 12 0 16 3 37\r
7 47 6 16 7 16 20 -2 7 -10 13 -24 13 -31z m350 31 c0 -8 -4 -12 -10 -9 -5 3\r
-10 10 -10 16 0 5 5 9 10 9 6 0 10 -7 10 -16z m596 -9 c6 -14 -32 -118 -70\r
-194 -24 -47 -34 -56 -94 -84 -36 -17 -77 -30 -90 -29 -13 1 -20 -2 -17 -8 3\r
-6 1 -10 -4 -10 -6 0 -11 2 -11 6 0 16 74 133 146 230 75 102 84 111 109 106\r
15 -2 29 -10 31 -17z m-1026 -15 c0 -25 -10 -50 -20 -50 -15 0 -21 39 -10 60\r
13 23 30 18 30 -10z m-130 -4 c0 -14 -4 -27 -10 -31 -5 -3 -8 7 -7 25 2 36 17\r
41 17 6z m550 -6 c14 -25 2 -50 -24 -51 -20 0 -20 -1 -1 -9 19 -8 19 -9 -2 -9\r
-30 -1 -38 -19 -11 -23 21 -3 21 -5 -12 -25 -19 -12 -35 -21 -37 -20 -6 7 21\r
77 30 77 6 0 5 5 -1 13 -16 18 12 79 33 71 8 -4 20 -14 25 -24z m994 -21 c69\r
-77 63 -83 -48 -49 -41 13 -66 26 -66 35 0 14 48 65 61 65 4 0 28 -23 53 -51z\r
m-1574 26 c0 -17 -22 -29 -41 -23 -8 3 -6 9 5 21 22 21 36 22 36 2z m635 -15\r
c21 -41 18 -60 -5 -31 -18 21 -28 61 -15 61 2 0 11 -13 20 -30z m624 -4 l33\r
-34 -56 -32 c-72 -41 -72 -48 -1 -13 89 44 89 9 -1 -60 -51 -39 -103 -71 -109\r
-65 -2 2 6 21 17 43 11 22 26 65 34 95 17 68 31 100 42 100 4 0 23 -15 41 -34z\r
m178 -22 c-2 -3 -12 -2 -21 2 -16 6 -16 8 1 26 18 20 18 20 21 -2 2 -12 2 -24\r
-1 -26z m743 25 c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10\r
-11 10 -16z m-1826 -4 c20 -8 36 -19 36 -24 0 -17 -102 -104 -109 -93 -4 7\r
-14 -1 -26 -18 -24 -35 -39 -39 -30 -7 15 49 55 89 55 55 0 -10 2 -10 8 0 5 8\r
16 10 28 5 12 -4 8 2 -11 19 -26 23 -28 28 -17 52 14 30 18 31 66 11z m1806\r
-18 c0 -7 -13 -18 -30 -24 l-29 -11 21 29 c21 27 38 30 38 6z m105 -11 c-16\r
-24 -35 -35 -35 -19 0 10 43 54 48 49 2 -2 -4 -16 -13 -30z m-2576 -3 c0 -25\r
-1 -25 -8 -8 -5 11 -7 23 -4 28 8 14 13 7 12 -20z m126 -2 c-3 -12 -11 -21\r
-16 -21 -6 0 -8 3 -6 8 2 4 7 16 11 26 9 25 20 13 11 -13z m1531 15 c28 7 28\r
7 13 -16 -23 -35 -35 -35 -53 0 -12 24 -12 29 -2 21 9 -7 25 -9 42 -5z m-1226\r
-12 c0 -2 -7 -4 -15 -4 -8 0 -15 4 -15 10 0 5 7 7 15 4 8 -4 15 -8 15 -10z\r
m485 6 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z\r
m249 -77 c-8 -113 -19 -126 -71 -85 -50 40 -89 82 -76 82 6 0 38 -24 70 -52\r
32 -29 51 -42 42 -29 -13 21 -14 30 -2 64 8 22 19 50 25 61 6 12 -5 3 -25 -19\r
-19 -22 -31 -41 -26 -43 5 -2 9 -11 9 -20 0 -12 -6 -10 -27 10 -16 14 -41 33\r
-56 43 -26 17 -27 19 -10 28 21 13 123 46 141 46 9 1 11 -19 6 -86z m1565 27\r
c7 -5 31 -120 25 -120 -1 0 -13 9 -26 20 -12 10 -36 30 -52 43 l-29 24 34 49\r
34 49 3 -30 c2 -16 7 -32 11 -35z m-2159 46 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1\r
-10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m1469 -65 c-28 -23 -29 -24 -48 -12\r
-13 8 -12 15 4 45 l20 36 24 -24 25 -25 -25 -20z m481 59 c0 -5 -2 -10 -4 -10\r
-3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-2210 -8 c0 -5 -6 -16\r
-13 -27 -16 -21 -37 -12 -37 16 0 14 7 19 25 19 14 0 25 -4 25 -8z m421 -7 c0\r
-6 -9 -16 -21 -24 -20 -14 -21 -13 -9 13 12 25 31 32 30 11z m79 6 c0 -23 -23\r
-70 -37 -75 -23 -9 -24 -5 -3 42 17 37 40 57 40 33z m927 -6 c12 -8 25 -30 28\r
-48 4 -17 14 -41 21 -52 21 -29 17 -35 -18 -35 -25 0 -41 9 -71 42 l-37 41 22\r
33 c26 39 27 39 55 19z m763 -19 c0 -12 -77 -109 -91 -114 -15 -6 -21 46 -9\r
83 9 26 21 41 44 50 32 14 56 5 56 -19z m-1905 14 c3 -5 -1 -10 -9 -10 -9 0\r
-16 5 -16 10 0 6 4 10 9 10 6 0 13 -4 16 -10z m335 6 c0 -2 -7 -7 -16 -10 -8\r
-3 -12 -2 -9 4 6 10 25 14 25 6z m-609 -29 c-10 -9 -11 -8 -5 6 3 10 9 15 12\r
12 3 -3 0 -11 -7 -18z m149 -2 c0 -15 -18 -30 -27 -22 -2 3 -2 15 2 26 7 23\r
25 19 25 -4z m1415 -4 c63 -20 70 -43 18 -64 -21 -9 -32 -16 -25 -16 7 -1 22\r
4 33 9 24 13 25 -2 1 -50 -19 -39 -39 -45 -56 -15 -6 11 -14 22 -18 25 -3 3\r
-15 28 -26 55 -11 28 -23 58 -27 68 -8 20 6 19 100 -12z m-1455 3 c0 -8 -4\r
-12 -10 -9 -5 3 -10 10 -10 16 0 5 5 9 10 9 6 0 10 -7 10 -16z m77 -9 c-7 -7\r
-16 -10 -21 -5 -12 12 2 30 19 24 11 -5 12 -9 2 -19z m238 -14 c-17 -35 -23\r
-37 -49 -18 -17 13 -16 15 20 34 22 11 40 19 42 18 2 -2 -4 -17 -13 -34z\r
m1646 12 c-8 -15 -10 -15 -11 -2 0 17 10 32 18 25 2 -3 -1 -13 -7 -23z m-1453\r
5 c-6 -18 -28 -21 -28 -4 0 9 7 16 16 16 9 0 14 -5 12 -12z m1629 4 c7 -4 15\r
-22 19 -39 5 -25 2 -33 -15 -42 -18 -10 -21 -8 -25 11 -15 69 -9 89 21 70z\r
m-433 -26 c42 -25 40 -29 -16 -44 -30 -8 -42 -7 -67 9 -36 22 -37 25 -11 39\r
17 9 22 6 35 -22 l14 -33 -5 38 c-7 43 -2 45 50 13z m226 14 c0 -6 -14 -38\r
-31 -70 -28 -55 -33 -59 -57 -53 -63 15 -74 22 -66 46 10 33 12 34 57 9 40\r
-22 41 -22 17 -2 l-25 22 38 -6 c22 -3 35 -1 32 5 -4 5 -25 9 -48 9 l-42 1 50\r
24 c55 26 75 30 75 15z m-1972 -44 c2 -28 0 -37 -10 -34 -7 3 -14 22 -16 42\r
-2 28 0 37 10 34 7 -3 14 -22 16 -42z m7859 -316 c36 -113 68 -212 70 -220 2\r
-8 -17 24 -42 73 -32 62 -59 139 -94 265 -27 97 -51 193 -55 212 -10 54 48\r
-104 121 -330z m-7977 324 c0 -8 -4 -12 -10 -9 -5 3 -10 13 -10 21 0 8 5 12\r
10 9 6 -3 10 -13 10 -21z m620 22 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6\r
5 11 10 11 6 0 10 -2 10 -4z m1630 -5 c0 -5 3 -22 6 -38 5 -28 3 -31 -35 -47\r
-74 -29 -80 -17 -25 50 35 42 54 55 54 35z m107 -14 c-6 -20 -27 -19 -27 2 0\r
14 5 19 15 14 9 -3 14 -10 12 -16z m-2303 -11 c-6 -16 -24 -23 -24 -8 0 10 22\r
33 27 28 2 -2 1 -11 -3 -20z m101 -32 l5 -39 -14 30 c-18 36 -21 74 -6 59 6\r
-6 13 -28 15 -50z m57 32 c11 -16 10 -22 -5 -35 -11 -8 -17 -3 -30 25 l-17 35\r
22 -7 c13 -4 26 -12 30 -18z m468 21 c0 -14 -39 -188 -44 -195 -3 -5 -10 -40\r
-15 -77 -6 -37 -12 -69 -15 -72 -7 -7 -196 85 -196 96 0 15 59 90 81 101 11 7\r
18 14 15 17 -3 3 -12 0 -21 -7 -18 -15 -19 -7 -5 21 11 19 12 18 48 -8 20 -15\r
49 -38 64 -52 15 -13 30 -22 33 -19 3 3 -28 34 -69 69 -41 35 -75 67 -75 70\r
-2 13 35 16 46 4 9 -9 9 -15 0 -24 -6 -6 -8 -11 -4 -11 4 0 23 16 43 35 54 54\r
63 48 67 -47 l3 -83 2 87 c2 82 6 94 35 97 4 1 7 -1 7 -2z m140 -141 c16 -33\r
30 -69 30 -80 -1 -12 -18 -40 -39 -63 l-38 -42 -57 58 -57 57 16 70 c9 38 21\r
86 26 107 l10 38 39 -43 c22 -24 53 -70 70 -102z m-930 125 c0 -6 -4 -13 -10\r
-16 -5 -3 -10 1 -10 9 0 9 5 16 10 16 6 0 10 -4 10 -9z m77 -42 c-6 -10 -15\r
-19 -18 -19 -14 0 -18 32 -8 53 11 20 12 20 25 3 10 -14 10 -22 1 -37z m443\r
36 c18 -22 5 -32 -69 -55 -75 -22 -77 -10 -5 38 56 37 57 37 74 17z m153 -7\r
c-13 -12 -26 -18 -30 -14 -4 4 1 14 11 22 31 22 43 17 19 -8z m767 -23 c-8\r
-14 -24 -25 -44 -28 -17 -2 -40 -7 -51 -11 -11 -4 -4 2 15 12 19 11 46 32 60\r
47 27 29 40 17 20 -20z m69 16 c27 -38 26 -43 -6 -39 -23 2 -29 8 -31 36 -4\r
40 10 41 37 3z m283 7 c-7 -7 -12 -8 -12 -2 0 14 12 26 19 19 2 -3 -1 -11 -7\r
-17z m48 7 c7 -8 18 -15 25 -15 7 0 18 -7 25 -15 10 -13 9 -15 -11 -17 -13 0\r
-28 -2 -34 -2 -19 -3 -60 -29 -77 -49 -10 -11 -18 -15 -18 -9 0 6 6 17 13 24\r
7 7 21 32 31 56 21 46 27 50 46 27z m-1238 -11 c-24 -17 -39 -14 -27 5 3 6 16\r
11 28 11 l21 0 -22 -16z m1932 -18 c58 -54 41 -106 -35 -106 -35 0 -39 2 -39\r
26 0 23 3 25 23 20 54 -16 79 -15 35 1 -46 16 -48 18 -48 55 0 48 17 49 64 4z\r
m-504 -2 c0 -23 -2 -25 -15 -14 -24 20 -27 6 -5 -18 11 -12 20 -29 20 -39 0\r
-13 -10 -7 -39 21 -35 34 -38 41 -25 53 8 8 21 12 29 9 8 -3 17 -1 20 4 10 17\r
15 11 15 -16z m197 -31 c15 -23 15 -23 -21 -23 -20 0 -36 2 -36 5 0 2 8 21 18\r
41 13 28 18 32 21 18 2 -10 10 -28 18 -41z m2289 -9 c23 -52 78 -170 473\r
-1014 94 -200 171 -368 171 -373 0 -4 -9 -3 -20 3 -11 6 -336 116 -722 245\r
-387 129 -704 238 -706 243 -3 11 35 60 346 449 409 510 413 514 424 507 6 -4\r
21 -31 34 -60z m-4345 19 c-8 -15 -10 -15 -11 -2 0 17 10 32 18 25 2 -3 -1\r
-13 -7 -23z m2269 -24 c0 -43 -3 -50 -17 -47 -34 6 -25 98 8 98 5 0 9 -23 9\r
-51z m2269 -81 c102 -72 260 -186 351 -253 91 -67 217 -160 281 -206 64 -46\r
212 -154 329 -239 117 -85 289 -211 384 -278 282 -204 446 -325 446 -331 0 -6\r
-80 -21 -475 -89 -174 -29 -167 -30 -607 49 l-238 42 -31 66 c-17 36 -107 228\r
-199 426 -92 198 -226 484 -297 635 -139 294 -146 310 -136 310 3 0 90 -59\r
192 -132z m-4749 112 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2\r
0 4 -4 4 -10z m175 -11 c0 -8 -10 -15 -23 -17 -21 -3 -22 -1 -12 18 12 23 35\r
22 35 -1z m75 -1 c0 -7 -4 -19 -9 -27 -7 -10 -9 -7 -8 12 2 26 17 39 17 15z\r
m370 -10 c0 -13 -40 -87 -59 -110 -8 -10 -22 -18 -33 -18 -10 0 -18 -5 -18\r
-11 0 -6 7 -9 15 -5 17 6 19 -2 6 -23 -7 -11 -11 -9 -20 8 -7 12 -9 26 -6 31\r
3 6 -1 10 -9 10 -8 0 -17 4 -20 9 -7 11 66 101 96 117 23 13 48 8 48 -8z\r
m-586 -3 c-4 -8 -8 -15 -10 -15 -2 0 -4 7 -4 15 0 8 4 15 10 15 5 0 7 -7 4\r
-15z m50 -23 c-4 -12 -10 -22 -15 -22 -11 0 -12 44 -2 54 12 11 23 -9 17 -32z\r
m946 -35 c0 -58 -15 -60 -35 -4 -10 28 -23 58 -28 65 -6 8 6 4 26 -8 30 -18\r
37 -28 37 -53z m660 41 l0 -32 -30 29 c-16 16 -30 30 -30 32 0 2 14 3 30 3 27\r
0 30 -3 30 -32z m292 15 c19 -17 24 -58 10 -80 -8 -12 -55 -23 -157 -37 -35\r
-4 -38 -3 -22 8 13 10 16 21 12 39 -5 20 -1 29 23 46 60 43 105 51 134 24z\r
m-1483 -34 l-32 -41 -13 23 c-6 13 -13 29 -14 34 -1 11 31 22 68 24 23 1 23 0\r
-9 -40z m951 32 c0 -5 -11 -29 -25 -52 -14 -24 -25 -51 -25 -59 -1 -38 -16\r
-43 -64 -18 -42 21 -46 26 -32 37 9 8 16 18 16 24 0 5 -9 2 -20 -8 -19 -18\r
-27 -11 -12 11 9 14 45 27 37 14 -3 -6 0 -10 8 -10 8 0 17 7 21 15 11 29 96\r
70 96 46z m40 2 c0 -25 -55 -163 -64 -160 -20 7 -10 72 18 120 25 42 46 60 46\r
40z m148 -40 c63 -77 65 -84 39 -142 -12 -28 -26 -51 -30 -51 -5 0 -6 4 -3 8\r
3 5 -14 9 -37 10 -75 3 -77 6 -77 80 0 37 3 84 6 105 6 32 10 37 34 37 21 0\r
38 -12 68 -47z m782 22 c0 -23 -3 -25 -51 -25 -59 0 -63 16 -8 36 50 18 59 17\r
59 -11z m220 10 c0 -8 -2 -15 -4 -15 -2 0 -6 7 -10 15 -3 8 -1 15 4 15 6 0 10\r
-7 10 -15z m-1290 -5 c-20 -13 -33 -13 -25 0 3 6 14 10 23 10 15 0 15 -2 2\r
-10z m167 -81 c-3 -50 -8 -93 -10 -95 -2 -3 -16 1 -31 7 -18 8 -25 18 -21 28\r
18 50 61 151 64 151 2 0 1 -41 -2 -91z m233 39 c0 -16 -19 -16 -34 1 -10 11\r
-14 25 -10 36 6 16 9 15 25 -6 10 -13 19 -27 19 -31z m-1577 35 c-9 -3 -10\r
-10 -3 -22 12 -24 4 -31 -37 -31 -37 0 -36 0 -24 32 7 17 17 23 42 24 19 1 28\r
-1 22 -3z m1137 -3 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0\r
4 -4 4 -10z m829 -1 c37 -13 37 -15 7 -53 l-24 -29 -16 31 c-17 34 -21 62 -7\r
62 4 0 22 -5 40 -11z m-874 -6 c-11 -3 -24 -9 -30 -13 -14 -10 -75 -30 -75\r
-24 0 9 84 43 105 42 l20 0 -20 -5z m779 -12 c17 -19 17 -20 -3 -30 -29 -16\r
-31 -14 -31 19 0 35 10 38 34 11z m256 9 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11\r
10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-2020 -15 c0 -8 -4 -15 -10 -15 -5 0\r
-7 7 -4 15 4 8 8 15 10 15 2 0 4 -7 4 -15z m150 0 c7 -9 10 -18 7 -22 -8 -7\r
-37 15 -37 28 0 14 16 11 30 -6z m646 -12 c-3 -8 -6 -17 -6 -19 0 -2 -4 -4 -9\r
-4 -5 0 -8 11 -8 24 0 17 4 23 14 19 8 -3 12 -12 9 -20z m1184 1 c0 -18 -14\r
-18 -29 0 -9 11 -9 15 1 19 17 6 28 -1 28 -19z m-2040 12 c0 -3 -4 -8 -10 -11\r
-5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m1034 -28 c-19 -64 -124\r
-228 -145 -228 -29 0 -49 22 -49 55 0 18 -4 44 -9 58 -12 31 -4 42 44 57 22 7\r
53 17 68 23 20 7 31 7 40 -2 13 -13 31 -15 22 -2 -7 12 15 61 27 61 5 0 6 -10\r
2 -22z m972 1 c19 -21 18 -21 -26 -60 -25 -21 -48 -39 -51 -39 -11 0 7 64 26\r
93 21 32 26 33 51 6z m110 -24 c12 -22 25 -51 29 -65 6 -21 -1 -17 -44 25 -55\r
53 -67 89 -29 83 14 -2 31 -18 44 -43z m84 24 c0 -25 -23 -109 -30 -109 -4 0\r
-13 21 -20 48 -7 26 -19 54 -26 62 -11 13 -7 15 32 12 24 -2 44 -8 44 -13z\r
m-2110 6 c0 -3 -8 -13 -17 -23 -10 -9 -26 -29 -35 -42 l-17 -25 12 30 c13 33\r
37 64 50 65 4 0 7 -2 7 -5z m50 -23 c0 -15 -2 -15 -10 -2 -13 20 -13 33 0 25\r
6 -3 10 -14 10 -23z m851 5 c-10 -9 -11 -8 -5 6 3 10 9 15 12 12 3 -3 0 -11\r
-7 -18z m1260 13 c29 -16 23 -44 -17 -80 -20 -17 -38 -29 -40 -27 -8 7 19 117\r
28 117 5 0 18 -5 29 -10z m159 -164 c-5 -93 -12 -171 -15 -174 -3 -3 -19 7\r
-35 23 -27 26 -30 34 -30 95 0 47 7 85 25 130 22 56 53 105 61 97 2 -1 -1 -79\r
-6 -171z m-2230 142 c0 -13 3 -33 6 -45 11 -40 -12 -25 -24 16 -15 49 -15 51\r
3 51 9 0 15 -9 15 -22z m740 12 c0 -8 -70 -50 -84 -50 -3 0 -3 7 0 15 11 28\r
84 58 84 35z m660 0 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6\r
0 10 -4 10 -10z m277 -52 c-4 -13 -29 -48 -56 -78 l-50 -55 6 55 c9 98 15 111\r
53 124 30 10 36 10 44 -5 5 -10 6 -28 3 -41z m611 -35 c51 -165 113 -404 110\r
-420 -2 -10 -32 12 -87 65 l-84 79 6 59 c4 33 10 116 13 187 4 70 8 127 10\r
127 1 0 16 -44 32 -97z m-2663 77 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2\r
10 4 10 3 0 8 -4 11 -10z m419 -9 c14 -15 15 -24 6 -40 -14 -27 -26 -27 -34 2\r
-15 55 -3 72 28 38z m1286 9 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10\r
10 10 6 0 10 -4 10 -10z m50 -22 c0 -4 -14 -15 -31 -23 l-30 -16 12 23 c22 42\r
31 51 40 36 5 -7 9 -16 9 -20z m330 11 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16\r
0 8 5 12 10 9 6 -3 10 -10 10 -16z m435 11 c-3 -5 -15 -15 -26 -20 -16 -9 -19\r
-7 -19 10 0 15 7 20 26 20 14 0 22 -4 19 -10z m-2363 -17 c-5 -10 -7 -23 -5\r
-29 2 -6 -4 -14 -13 -18 -14 -5 -15 -4 -4 9 16 19 7 19 -32 -1 -34 -18 -50 -7\r
-41 27 6 20 21 26 71 28 28 1 31 -1 24 -16z m148 -34 c0 -43 -11 -50 -33 -19\r
-14 21 -14 21 -20 1 -3 -13 2 -25 15 -33 18 -12 19 -17 9 -36 -15 -29 -29 -28\r
-43 3 -12 27 -5 49 35 108 24 35 37 26 37 -24z m1641 -10 c-6 -24 -11 -61 -11\r
-81 0 -21 -4 -38 -8 -38 -16 0 -133 130 -127 140 3 5 25 11 48 11 23 1 56 4\r
72 8 17 4 31 6 33 5 1 -1 -2 -21 -7 -45z m389 -52 c0 -10 -186 -4 -197 6 -8 9\r
15 35 61 69 l40 29 48 -48 c26 -26 48 -51 48 -56z m214 81 c-4 -13 -18 -48\r
-32 -78 l-26 -55 -6 50 c-6 46 -4 52 24 78 37 33 50 34 40 5z m-2207 -35 c-3\r
-10 -5 -2 -5 17 0 19 2 27 5 18 2 -10 2 -26 0 -35z m-560 0 c-3 -10 -5 -4 -5\r
12 0 17 2 24 5 18 2 -7 2 -21 0 -30z m1533 6 c50 -17 63 -45 35 -73 -26 -25\r
-39 -20 -79 37 -24 34 -35 43 -30 27 4 -14 18 -38 31 -54 l24 -28 -33 -23\r
c-18 -13 -36 -21 -40 -18 -5 2 -8 32 -8 65 0 63 20 105 44 90 6 -4 31 -14 56\r
-23z m-1322 -12 c2 -19 -1 -27 -12 -27 -11 0 -16 10 -16 31 0 38 24 35 28 -4z\r
m875 -79 c-6 -10 -100 -10 -106 0 -3 4 0 31 5 60 l11 53 47 -53 c26 -29 46\r
-56 43 -60z m1227 90 c0 -18 -2 -20 -9 -8 -6 8 -7 18 -5 22 9 14 14 9 14 -14z\r
m-2333 -20 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m2064 -34\r
c35 -36 67 -72 72 -79 10 -18 1 -38 -23 -53 -17 -10 -29 -8 -79 17 l-58 30 -7\r
67 c-7 64 -1 83 25 84 4 0 36 -30 70 -66z m648 -31 c1 -59 -16 -64 -57 -17\r
l-34 39 39 33 38 33 6 -23 c4 -13 7 -42 8 -65z m-395 61 c3 -9 6 -19 6 -24 0\r
-8 -94 -70 -105 -70 -3 0 13 25 36 55 44 59 53 64 63 39z m-1944 -13 c0 -29\r
-25 -45 -41 -25 -11 14 -10 18 6 30 26 19 35 18 35 -5z m850 7 c1 -7 5 -33 9\r
-56 8 -40 7 -43 -10 -39 -11 3 -19 0 -19 -7 0 -7 10 -12 22 -12 15 1 23 -7 29\r
-26 9 -33 -4 -37 -24 -8 -14 20 -15 20 -19 2 -3 -11 -17 -21 -32 -24 -17 -4\r
-25 -1 -23 6 2 6 15 10 28 9 22 -3 23 -2 7 11 -23 17 -23 21 5 59 35 50 31 79\r
-7 42 -24 -25 -27 -17 -5 20 21 35 39 45 39 23z m724 -10 c8 -32 7 -88 -1 -88\r
-5 0 -17 7 -27 15 -17 13 -18 18 -7 42 l13 28 -23 -20 -23 -20 23 33 c26 38\r
37 40 45 10z m-1300 -2 c-3 -8 -14 -12 -27 -9 -20 5 -20 4 -5 -8 11 -10 18\r
-36 22 -84 l6 -70 -19 40 c-11 22 -26 61 -34 87 -15 51 -12 56 35 57 19 1 26\r
-3 22 -13z m40 5 c3 -5 -1 -11 -9 -15 -9 -3 -15 0 -15 9 0 16 16 20 24 6z\r
m756 -55 l0 -64 -42 -4 c-58 -6 -64 -1 -36 31 13 14 35 43 49 63 13 21 25 38\r
27 38 1 0 2 -29 2 -64z m177 42 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12\r
1 -19z m-893 -9 c-3 -5 -10 -7 -15 -3 -5 3 -7 10 -3 15 3 5 10 7 15 3 5 -3 7\r
-10 3 -15z m122 -16 c41 -21 74 -40 74 -44 0 -6 -63 -20 -105 -24 -12 -1 -65\r
75 -65 93 0 19 16 15 96 -25z m860 16 c21 -18 3 -60 -32 -75 -18 -8 -38 -14\r
-44 -14 -13 0 -13 39 1 79 10 29 15 32 38 26 14 -4 31 -11 37 -16z m-1128 -59\r
c16 -50 17 -60 5 -65 -10 -3 -13 1 -11 12 2 9 -9 29 -24 45 -23 25 -25 32 -15\r
49 6 10 15 19 19 19 3 0 15 -27 26 -60z m128 14 c7 -36 -8 -84 -25 -84 -17 0\r
-20 45 -4 70 9 14 10 20 2 13 -19 -18 -29 -16 -29 7 0 19 28 42 42 34 4 -3 10\r
-21 14 -40z m-396 26 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10\r
6 0 10 -4 10 -10z m116 -58 c-12 -11 -16 6 -9 39 l8 34 3 -33 c2 -19 1 -36 -2\r
-40z m1184 41 c0 -20 -3 -24 -11 -16 -7 7 -9 19 -6 27 10 24 17 19 17 -11z\r
m923 -10 c-59 -50 -70 -51 -116 -5 l-40 40 97 -1 97 -2 -38 -32z m-2313 8 c0\r
-11 -4 -23 -10 -26 -6 -4 -10 5 -10 19 0 14 5 26 10 26 6 0 10 -9 10 -19z\r
m252 -38 c-8 -43 -22 -35 -22 13 0 42 2 46 13 30 8 -10 12 -29 9 -43z m1313\r
48 c-6 -5 -20 -12 -32 -16 -17 -5 -23 -2 -23 9 0 11 10 16 32 16 19 0 28 -4\r
23 -9z m605 -26 c12 -19 26 -35 31 -35 17 0 9 -18 -11 -23 -16 -4 -24 4 -40\r
40 -23 52 -23 53 -11 53 5 0 19 -16 31 -35z m-2233 3 c-3 -8 -6 -5 -6 6 -1 11\r
2 17 5 13 3 -3 4 -12 1 -19z m609 -4 c15 -22 15 -27 3 -35 -24 -15 -29 -10\r
-29 26 0 42 4 43 26 9z m1083 10 c10 -9 -93 -94 -113 -94 -3 0 -6 17 -6 39 0\r
35 3 40 38 54 32 13 67 13 81 1z m481 -59 c0 -41 -3 -75 -6 -75 -26 0 -94 25\r
-91 34 2 6 20 19 41 30 42 21 43 32 2 16 -16 -6 -34 -7 -43 -2 -13 8 -10 12\r
13 28 44 29 68 43 77 43 4 1 7 -33 7 -74z m223 2 l-28 -55 -30 24 c-25 20 -27\r
26 -15 34 8 5 33 22 55 39 22 16 41 26 43 21 2 -5 -9 -33 -25 -63z m-1427 36\r
c-10 -10 -19 5 -10 18 6 11 8 11 12 0 2 -7 1 -15 -2 -18z m462 -3 c6 -16 8\r
-31 4 -33 -29 -15 -44 -15 -62 3 -16 16 -20 17 -20 5 0 -16 -35 -21 -44 -6 -7\r
11 71 60 96 61 9 0 20 -13 26 -30z m1039 -6 c-12 -12 -37 5 -30 21 5 15 7 15\r
21 1 9 -9 13 -18 9 -22z m123 -11 c0 -45 0 -46 -19 -29 -19 18 -19 37 2 64 15\r
19 17 15 17 -35z m-2420 25 c-1 -7 -7 -24 -15 -38 l-13 -25 -11 28 c-6 16 -9\r
33 -5 38 8 14 44 11 44 -3z m638 -16 c4 -25 -13 -30 -22 -6 -9 25 -7 36 7 32\r
6 -3 13 -14 15 -26z m122 10 c0 -25 -27 -48 -76 -65 l-39 -14 4 39 c3 39 4 40\r
35 35 17 -3 40 -8 51 -11 11 -4 7 0 -9 7 -20 10 -25 16 -15 20 29 11 49 7 49\r
-11z m69 -8 c-14 -18 -24 -11 -15 11 3 9 11 13 16 10 8 -5 7 -11 -1 -21z\r
m-1080 7 c10 -7 11 -13 2 -30 -7 -12 -9 -26 -6 -31 3 -5 1 -18 -4 -27 -6 -11\r
-11 -13 -11 -5 0 7 -5 10 -12 6 -8 -5 -9 2 -5 26 4 18 7 41 7 51 0 21 8 23 29\r
10z m455 -10 c27 -29 17 -55 -22 -59 -36 -4 -40 9 -20 53 14 30 20 31 42 6z\r
m1393 1 c16 -11 25 -32 29 -64 6 -43 5 -48 -12 -48 -11 0 -35 -3 -55 -6 l-36\r
-6 9 58 c14 93 21 101 65 66z m-78 -34 c-5 -24 -11 -53 -14 -65 -8 -36 -77\r
-25 -87 14 -2 8 90 87 108 93 1 0 -2 -19 -7 -42z m531 -10 c0 -5 -7 -8 -15 -8\r
-10 0 -15 10 -15 33 l1 32 14 -25 c8 -14 14 -28 15 -32z m-2101 12 c9 -26 8\r
-30 -8 -30 -24 0 -29 7 -23 35 6 33 18 31 31 -5z m667 5 c26 -40 12 -47 -35\r
-16 -47 31 -47 29 11 40 4 0 15 -10 24 -24z m764 3 c0 -32 -14 -57 -37 -67\r
-31 -14 -43 -7 -43 28 0 20 7 30 28 38 37 15 52 15 52 1z m892 -33 c3 -26 0\r
-30 -24 -33 -32 -4 -35 6 -12 50 18 34 31 28 36 -17z m58 30 c10 -13 9 -19 -5\r
-35 -21 -23 -29 -18 -39 23 -5 22 -3 27 13 27 10 0 24 -7 31 -15z m-2290 -16\r
c0 -5 -10 -9 -21 -9 -18 0 -19 2 -9 15 12 15 30 12 30 -6z m57 -11 c-3 -7 -5\r
-2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m704 -11 c-6 -15 -15 -27 -21 -27\r
-15 0 -12 16 5 30 8 6 14 15 13 18 -1 15 4 26 8 16 3 -6 0 -23 -5 -37z m163\r
29 c25 -13 26 -15 11 -30 -21 -21 -27 -20 -23 2 2 9 -3 22 -12 29 -20 17 -8\r
16 24 -1z m741 -16 l49 -29 -29 -11 c-17 -6 -42 -14 -57 -17 -27 -5 -28 -4\r
-28 41 0 25 3 46 8 46 4 0 29 -14 57 -30z m110 0 c-10 -11 -23 -20 -28 -20 -6\r
0 0 11 13 25 27 29 42 25 15 -5z m73 22 c7 -5 10 -16 6 -26 -6 -16 -8 -16 -25\r
0 -27 24 -11 45 19 26z m-1305 -27 c20 -14 37 -30 37 -34 0 -7 -46 -68 -75\r
-99 -5 -6 -63 102 -70 131 -7 26 -6 27 32 27 25 0 52 -9 76 -25z m-100 -50\r
c16 -32 17 -37 3 -26 -26 22 -19 -3 9 -29 32 -30 31 -40 -3 -73 l-28 -27 -41\r
43 c-54 56 -67 81 -53 107 6 11 15 20 21 20 6 0 8 4 5 9 -8 12 21 34 34 26 16\r
-10 12 -35 -7 -35 -12 0 -8 -5 11 -15 34 -18 42 -14 27 13 -6 12 -11 29 -10\r
39 0 14 2 15 6 3 3 -8 15 -33 26 -55z m271 33 c-10 -16 -22 -7 -17 13 4 15 8\r
17 14 8 4 -7 5 -17 3 -21z m354 20 c-5 -15 -108 -24 -108 -9 0 11 27 18 78 20\r
23 1 32 -3 30 -11z m78 -3 c-4 -12 2 -14 32 -12 20 1 42 8 48 16 9 11 12 9 18\r
-14 4 -15 5 -29 3 -32 -3 -2 -32 3 -65 11 -33 9 -69 16 -81 16 -21 0 -27 10\r
-14 23 3 4 20 7 36 7 22 0 28 -4 23 -15z m928 -1 c3 -9 6 -31 6 -49 0 -28 -3\r
-32 -20 -28 -11 3 -20 11 -20 19 0 8 6 11 15 8 8 -4 15 -3 15 1 0 3 -7 13 -15\r
21 -12 12 -15 12 -15 2 0 -10 -3 -9 -10 2 -7 11 -5 19 7 28 22 16 30 15 37 -4z\r
m56 -46 c0 -5 -9 -8 -19 -8 -12 0 -19 7 -19 18 0 9 -3 26 -7 37 -5 14 1 11 19\r
-10 14 -16 25 -33 26 -37z m-1890 37 c11 -13 8 -15 -14 -15 -25 0 -33 10 -19\r
23 10 11 19 8 33 -8z m437 -12 c-3 -3 -11 -2 -17 2 -9 6 -9 10 1 16 14 8 27\r
-7 16 -18z m1153 -3 c0 -5 -9 -6 -19 -3 -12 3 -17 11 -14 19 4 11 9 12 19 3 8\r
-6 14 -15 14 -19z m520 10 c26 -26 18 -40 -21 -40 -24 0 -29 4 -29 23 0 42 19\r
48 50 17z m5635 -145 c15 -66 51 -217 80 -335 29 -118 59 -244 66 -280 7 -36\r
15 -58 17 -49 3 18 -9 74 -108 489 -38 162 -70 299 -70 304 0 22 72 -142 115\r
-260 47 -129 53 -169 71 -489 6 -90 5 -98 -9 -80 -18 25 -122 211 -254 455\r
-55 102 -112 206 -126 231 l-26 45 102 68 c98 64 102 66 108 44 4 -13 19 -77\r
34 -143z m-5971 134 c18 -27 11 -48 -15 -42 -13 4 -19 14 -19 34 0 34 13 37\r
34 8z m-1827 5 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m472\r
-13 c14 -14 22 -16 30 -8 13 13 14 -2 2 -22 -6 -9 -11 -10 -15 -2 -4 6 -18 11\r
-31 11 -26 0 -40 14 -30 30 9 15 23 12 44 -9z m191 5 c6 -8 10 -23 8 -34 -3\r
-18 -5 -18 -53 4 -49 22 -49 22 -25 32 35 15 56 14 70 -2z m-940 -6 c0 -5 -4\r
-10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m55 -17 l15\r
-28 -6 28 c-5 21 -3 27 11 27 13 0 16 -5 11 -22 -4 -13 -11 -49 -16 -82 -5\r
-32 -11 -60 -13 -62 -12 -12 -38 27 -43 66 -5 40 7 100 20 100 3 0 12 -12 21\r
-27z m925 18 c0 -6 -4 -13 -10 -16 -5 -3 -10 1 -10 9 0 9 5 16 10 16 6 0 10\r
-4 10 -9z m189 -7 c2 -2 -18 -23 -45 -47 l-49 -45 -29 41 c-29 39 -29 40 -10\r
54 14 11 33 13 74 8 30 -4 57 -9 59 -11z m295 -2 c4 -10 22 -24 42 -31 33 -12\r
35 -15 28 -44 -3 -18 -8 -34 -11 -37 -9 -10 -82 85 -83 108 0 26 16 29 24 4z\r
m-1190 -8 c28 -27 20 -77 -19 -117 -19 -19 -43 -49 -53 -67 -12 -19 -22 -27\r
-27 -21 -11 20 -16 128 -5 155 22 58 72 82 104 50z m2096 -19 c0 -28 3 -33 17\r
-28 11 4 12 8 5 11 -24 8 -11 22 21 22 18 0 38 5 44 11 9 9 19 5 42 -16 27\r
-26 28 -30 13 -41 -12 -9 -19 -9 -24 -1 -4 6 -2 15 5 19 8 5 3 8 -11 8 -14 0\r
-20 4 -17 10 4 7 -3 8 -22 4 -35 -9 -42 -14 -17 -14 11 0 29 -6 39 -14 19 -14\r
19 -15 1 -35 -25 -27 -51 -27 -71 2 -8 12 -19 20 -23 18 -9 -5 -32 38 -32 62\r
0 9 7 17 15 17 10 0 15 -11 15 -35z m-2196 10 c-4 -8 -8 -15 -10 -15 -2 0 -4\r
7 -4 15 0 8 4 15 10 15 5 0 7 -7 4 -15z m186 -4 c-15 -30 -30 -35 -17 -6 7 14\r
16 25 20 25 4 0 3 -9 -3 -19z m470 15 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4\r
0 6 5 11 10 11 6 0 10 -2 10 -4z m413 -7 c14 -6 30 -23 36 -37 15 -32 6 -42\r
-72 -76 l-58 -25 -19 32 c-11 18 -20 26 -20 20 0 -7 -4 -13 -10 -13 -18 0 -11\r
22 9 27 11 3 33 22 51 44 33 42 45 45 83 28z m177 2 c0 -5 -7 -12 -16 -15 -14\r
-5 -15 -4 -4 9 14 17 20 19 20 6z m490 -8 c3 -3 -2 -10 -10 -16 -8 -7 -35 -37\r
-59 -67 -25 -30 -48 -59 -52 -63 -9 -11 18 76 39 126 14 35 18 37 46 31 17 -3\r
33 -8 36 -11z m128 -4 c18 -7 22 -16 22 -51 0 -24 3 -53 6 -65 4 -13 2 -23 -3\r
-23 -8 0 -133 143 -133 153 0 7 79 -4 108 -14z m268 9 c-4 7 -2 12 8 12 9 0\r
14 -8 13 -20 -1 -11 -3 -20 -5 -20 -12 0 -42 23 -42 32 0 6 6 5 17 -3 11 -10\r
14 -10 9 -1z m-1596 -2 c0 -2 -7 -19 -15 -37 l-16 -34 6 35 c5 29 4 32 -5 17\r
-7 -10 -9 -30 -6 -44 5 -16 3 -22 -4 -18 -6 4 -10 -6 -10 -24 0 -42 -15 -46\r
-39 -12 l-21 29 41 46 c22 25 47 46 55 46 8 0 14 -2 14 -4z m197 -22 c30 -17\r
43 -30 39 -41 -3 -8 -6 -21 -6 -29 0 -11 -8 -11 -42 4 -78 31 -84 37 -70 66\r
14 32 24 32 79 0z m418 16 c7 -12 -2 -12 -30 0 -19 8 -19 9 2 9 12 1 25 -3 28\r
-9z m406 -20 c-19 -16 -32 -32 -29 -35 3 -3 18 5 34 18 29 24 67 47 79 47 12\r
0 -35 -53 -67 -77 -39 -28 -44 -29 -51 -2 -8 32 9 67 35 72 13 2 25 5 28 5 3\r
1 -10 -12 -29 -28z m567 -2 c7 -9 7 -19 2 -28 -14 -22 -44 0 -48 34 -3 24 -1\r
26 16 17 10 -5 24 -16 30 -23z m-1238 -55 c0 -13 -12 -17 -37 -14 -7 1 -13 -8\r
-13 -19 0 -12 -4 -19 -9 -15 -13 7 -25 90 -17 112 6 14 12 11 41 -17 19 -19\r
35 -40 35 -47z m618 49 c3 -21 -30 -96 -47 -107 -16 -9 -44 42 -45 83 -1 35 1\r
37 34 43 47 8 54 6 58 -19z m537 10 c0 -18 -20 -15 -23 4 -3 10 1 15 10 12 7\r
-3 13 -10 13 -16z m4352 -157 c76 -93 167 -205 202 -248 l64 -78 -30 -27 c-26\r
-22 -179 -251 -274 -407 -13 -23 -25 -34 -26 -25 -1 8 -7 76 -12 150 -6 74\r
-24 281 -41 460 -31 337 -33 356 -26 349 2 -2 66 -80 143 -174z m-6918 105 c1\r
-20 -1 -22 -9 -10 -5 8 -9 29 -9 45 0 26 2 27 9 10 5 -11 9 -31 9 -45z m241\r
41 c0 -27 -17 -35 -23 -11 -5 19 0 30 15 30 4 0 8 -9 8 -19z m865 5 c18 -13\r
17 -15 -13 -63 -18 -28 -42 -59 -53 -69 l-22 -19 6 35 c8 54 38 130 51 130 7\r
0 21 -6 31 -14z m565 -7 c0 -14 -17 -10 -23 5 -4 10 -1 13 9 9 7 -3 14 -9 14\r
-14z m158 -40 c18 -20 32 -44 32 -53 0 -18 -15 -22 -25 -6 -3 5 -16 15 -28 21\r
-14 6 -9 -1 11 -18 23 -20 31 -34 26 -46 -7 -18 -24 -24 -24 -7 0 5 -16 24\r
-36 42 -20 18 -46 46 -57 63 l-22 30 40 -30 40 -29 -32 35 c-39 41 -40 46 -10\r
51 27 5 44 -6 85 -53z m628 18 c-3 -16 -6 -37 -6 -45 0 -28 -17 1 -23 40 -6\r
41 -2 49 20 41 11 -4 13 -14 9 -36z m-1993 -4 c-3 -21 -9 -51 -14 -68 -8 -27\r
-8 -26 -4 10 3 22 5 52 5 68 0 15 4 27 9 27 6 0 7 -17 4 -37z m1866 -25 l61\r
-63 -73 -11 c-173 -27 -179 -27 -167 -5 12 23 108 141 115 141 2 0 31 -28 64\r
-62z m-1619 16 c-11 -46 -16 -51 -22 -19 -3 15 0 32 9 41 21 20 22 18 13 -22z\r
m1214 -1 c3 -21 12 -50 20 -65 14 -27 14 -28 -8 -28 -25 0 -46 17 -46 37 0 11\r
5 11 23 3 l22 -11 -21 18 c-17 14 -21 26 -17 51 7 43 19 41 27 -5z m614 21\r
c27 -19 22 -28 -28 -54 -45 -23 -54 -16 -44 35 7 40 33 47 72 19z m-2231 -16\r
c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m510 -72 c19 -33 16 -46\r
-28 -104 -31 -41 -44 -51 -50 -41 -10 16 -12 162 -3 208 l7 32 31 -37 c17 -20\r
36 -47 43 -58z m946 -6 c26 -34 47 -69 47 -77 0 -9 -9 -31 -21 -49 -20 -33\r
-21 -33 -44 -16 -48 36 -65 74 -65 144 0 37 3 74 6 83 6 14 8 14 18 -3 6 -10\r
32 -47 59 -82z m837 90 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10\r
10 6 0 10 -4 10 -10z m104 -6 c3 -9 4 -20 1 -24 -9 -15 -35 1 -35 21 0 23 25\r
25 34 3z m-1576 -33 c-32 -26 -37 -17 -7 15 13 14 25 20 27 14 2 -6 -7 -19\r
-20 -29z m150 -26 c2 -2 -2 -21 -7 -43 -8 -30 -21 -46 -47 -61 -19 -12 -39\r
-21 -45 -21 -5 0 -9 40 -9 89 l0 89 53 -25 c28 -14 53 -26 55 -28z m392 -27\r
c0 -45 -2 -79 -5 -76 -8 8 -15 120 -9 141 10 33 14 16 14 -65z m1220 48 c0\r
-34 -1 -35 -37 -30 l-38 4 34 -11 c18 -5 31 -13 28 -16 -6 -6 -77 16 -77 23 0\r
17 24 45 35 40 7 -2 16 2 19 10 3 8 12 14 21 14 10 0 15 -10 15 -34z m124 -65\r
c-2 -2 -25 5 -53 15 -47 17 -60 32 -61 72 0 7 26 -9 58 -35 33 -26 58 -50 56\r
-52z m-1684 63 c0 -8 -4 -14 -10 -14 -5 0 -10 9 -10 21 0 11 5 17 10 14 6 -3\r
10 -13 10 -21z m793 -47 c-22 -37 -47 -42 -51 -9 -2 15 7 33 30 54 32 30 33\r
30 36 9 2 -12 -5 -36 -15 -54z m426 37 c-24 -13 -48 -23 -54 -23 -5 0 7 9 27\r
19 20 11 40 24 43 30 4 6 11 7 17 4 6 -4 -8 -17 -33 -30z m-2269 1 c0 -14 -4\r
-25 -10 -25 -11 0 -14 33 -3 43 11 11 13 8 13 -18z m383 -57 c-7 -100 -11\r
-108 -40 -97 -28 10 -29 35 -3 74 11 17 25 47 30 68 6 20 13 37 15 37 2 0 2\r
-37 -2 -82z m965 47 c-7 -15 -25 -34 -39 -42 -24 -15 -28 -15 -49 0 -22 15\r
-22 16 36 45 33 17 61 29 62 27 2 -2 -2 -16 -10 -30z m6532 -1 c0 -20 -5 -88\r
-10 -152 -6 -65 -22 -268 -35 -452 -14 -184 -28 -361 -31 -393 l-7 -57 -81\r
-25 c-258 -80 -498 -146 -509 -142 -8 3 -48 103 -90 224 -41 120 -105 301\r
-141 402 -59 164 -64 185 -50 196 9 6 156 74 328 150 171 77 379 172 461 211\r
83 40 153 73 158 73 4 1 7 -15 7 -35z m-7030 -146 c-12 -9 -27 -15 -34 -12 -9\r
3 -13 -5 -13 -25 0 -18 4 -28 10 -24 6 4 -2 -10 -18 -30 -16 -20 -31 -34 -34\r
-32 -2 3 1 11 8 18 6 8 9 21 5 30 -3 8 1 28 9 44 8 15 21 57 27 91 7 35 22 75\r
34 90 l21 27 3 -80 c3 -71 1 -82 -18 -97z m306 145 c-4 -10 -2 -13 8 -10 7 3\r
18 1 24 -5 6 -6 20 -15 33 -22 12 -6 24 -17 27 -23 6 -20 -27 -15 -40 6 -6 10\r
-17 17 -24 14 -6 -2 -23 7 -37 20 -20 17 -23 27 -15 35 15 15 31 4 24 -15z\r
m604 17 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z\r
m631 0 c18 -10 28 -50 12 -50 -10 0 -53 42 -53 52 0 11 17 10 41 -2z m5614\r
-181 c54 -99 146 -267 206 -372 60 -106 109 -199 109 -208 0 -11 -70 -57 -212\r
-137 -230 -130 -291 -163 -293 -159 -1 1 4 67 10 147 7 80 16 186 20 235 3 50\r
13 173 21 275 8 102 17 235 21 297 3 62 9 110 13 108 4 -3 52 -86 105 -186z\r
m-7323 154 c15 -15 28 -37 28 -50 0 -29 0 -29 -61 2 l-50 26 23 24 c13 14 25\r
25 27 25 3 0 18 -12 33 -27z m1662 5 c33 -47 17 -92 -45 -123 -27 -14 -29 -14\r
-44 10 -8 14 -22 37 -31 51 -18 30 -14 36 41 63 51 26 61 26 79 -1z m123 -16\r
c4 -27 1 -32 -16 -32 -17 0 -21 6 -21 36 0 28 4 35 17 32 10 -2 18 -15 20 -36z\r
m28 28 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z\r
m-2161 -67 c-35 -61 -32 -59 -46 -45 -12 12 5 45 46 90 31 35 31 9 0 -45z\r
m462 -2 c-27 -75 -32 -80 -41 -41 -6 27 -2 37 26 66 18 19 34 34 35 34 1 0 -8\r
-27 -20 -59z m260 47 c5 -8 2 -9 -10 -5 -14 5 -16 3 -11 -12 3 -10 -1 -24 -10\r
-31 -13 -11 -15 -8 -15 18 0 36 30 56 46 30z m722 -10 c-2 -17 -9 -22 -23 -20\r
-30 6 -32 12 -11 28 28 20 38 17 34 -8z m-1561 -10 c-3 -8 -6 -5 -6 6 -1 11 2\r
17 5 13 3 -3 4 -12 1 -19z m908 12 c3 -5 -1 -10 -9 -10 -9 0 -16 5 -16 10 0 6\r
4 10 9 10 6 0 13 -4 16 -10z m1391 -3 c4 -4 -2 -7 -14 -7 -12 0 -22 4 -22 9 0\r
10 26 9 36 -2z m-2099 -29 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0\r
-25z m940 -14 c-2 -40 -4 -40 -37 -13 l-24 21 24 18 c31 24 40 17 37 -26z\r
m258 35 c11 -17 -1 -21 -15 -4 -8 9 -8 15 -2 15 6 0 14 -5 17 -11z m600 -66\r
c9 -19 15 -36 13 -39 -2 -2 -21 14 -42 35 -27 27 -37 45 -32 57 6 16 8 16 26\r
-1 10 -9 26 -33 35 -52z m556 22 c18 -12 -4 -24 -51 -31 -37 -5 -49 -2 -67 16\r
-13 11 -23 29 -23 39 0 18 2 18 65 0 36 -10 70 -21 76 -24z m-2741 10 c0 -8\r
-4 -17 -10 -20 -6 -4 -10 5 -10 20 0 15 4 24 10 20 6 -3 10 -12 10 -20z m668\r
-31 c2 -1 -1 -19 -8 -39 -10 -30 -14 -34 -27 -24 -20 18 -73 95 -73 108 0 9\r
91 -29 108 -45z m458 29 c-3 -8 -6 -26 -6 -39 0 -33 -24 -31 -49 5 -28 39 -26\r
49 7 53 37 5 54 -2 48 -19z m453 13 c9 -10 9 -16 1 -21 -17 -11 -40 3 -34 20\r
8 19 18 19 33 1z m151 -11 c16 -20 -4 -27 -34 -14 -26 12 -31 20 -20 31 8 9\r
42 -2 54 -17z m814 10 c14 -6 17 -5 12 3 -4 7 -3 12 2 12 5 0 10 -21 10 -46 2\r
-43 1 -45 -20 -38 -45 13 -76 34 -81 53 -8 30 26 37 77 16z m-2517 -32 c-3\r
-10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z m54 27 c22 -13 25 -39 5\r
-65 -13 -18 -15 -17 -25 20 -17 60 -15 63 20 45z m1993 -73 c-9 -37 -20 -67\r
-24 -67 -5 0 -55 11 -112 24 -85 21 -107 30 -125 53 -16 20 -19 29 -10 34 7 4\r
68 12 137 19 69 6 127 14 129 16 3 2 9 0 13 -4 5 -5 2 -38 -8 -75z m312 71 c5\r
-8 2 -9 -9 -5 -10 3 -17 2 -17 -3 0 -6 -5 -10 -11 -10 -8 0 -8 5 1 15 15 18\r
26 19 36 3z m-1336 -27 c0 -4 -16 -7 -36 -7 l-35 0 23 17 c21 17 48 11 48 -10z\r
m224 -58 c35 -26 56 -51 56 -63 0 -11 -4 -20 -9 -20 -17 0 -86 62 -83 76 2 8\r
-2 14 -8 14 -6 0 -8 -4 -5 -10 8 -13 -1 -13 -25 0 -13 7 -17 16 -13 28 7 16 6\r
16 -20 -1 -34 -22 -37 -22 -37 7 0 52 8 58 50 35 22 -12 64 -42 94 -66z m1185\r
61 c3 -16 1 -17 -13 -5 -19 16 -21 34 -3 29 6 -3 14 -13 16 -24z m-1879 -28\r
c35 -52 36 -61 13 -76 -17 -11 -17 -11 0 -6 29 9 19 -7 -22 -36 -48 -34 -61\r
-35 -91 -3 l-23 25 29 1 c20 1 23 3 9 6 -45 10 -47 11 -34 35 18 35 70 98 79\r
98 5 0 23 -20 40 -44z m701 26 c13 -10 31 -21 40 -25 12 -4 15 -13 12 -31 l-5\r
-26 -49 38 c-47 36 -62 62 -35 62 7 0 24 -8 37 -18z m1139 8 c0 -6 11 -16 25\r
-22 26 -12 59 -83 53 -114 -6 -36 -30 -19 -64 45 -34 64 -43 101 -24 101 6 0\r
10 -5 10 -10z m-864 -11 c3 -6 -3 -21 -15 -32 l-21 -21 0 25 c0 37 20 53 36\r
28z m121 -1 c38 -14 41 -23 12 -38 -26 -14 -36 -6 -19 15 7 9 8 15 2 15 -6 0\r
-12 -6 -15 -12 -3 -10 -7 -10 -20 1 -9 7 -14 17 -11 22 7 12 11 11 51 -3z m98\r
2 c3 -6 -1 -7 -9 -4 -18 7 -21 14 -7 14 6 0 13 -4 16 -10z m373 -86 c-31 -16\r
-45 -19 -50 -10 -6 8 -8 8 -8 -1 0 -7 -4 -13 -10 -13 -5 0 -10 7 -10 15 0 8 4\r
15 8 15 4 0 13 21 20 47 l13 46 40 -39 39 -38 -42 -22z m446 69 c-10 -40 -14\r
-41 -14 -5 0 18 5 32 10 32 6 0 8 -11 4 -27z m-1002 -10 c-14 -25 -72 -79 -72\r
-67 0 13 71 96 77 90 3 -2 0 -13 -5 -23z m806 -19 c12 -25 19 -50 16 -56 -4\r
-7 -2 -8 4 -4 6 3 16 -3 22 -15 11 -19 8 -33 -8 -35 -4 0 -16 -5 -26 -9 -13\r
-5 -21 -5 -23 2 -3 7 -14 6 -34 -4 -24 -12 -33 -13 -42 -4 -9 9 -7 10 7 5 13\r
-5 17 -4 12 4 -4 7 -14 12 -23 12 -9 0 -13 6 -10 14 3 8 9 31 12 50 7 34 45\r
86 63 86 4 0 18 -21 30 -46z m-2401 14 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3\r
-3 4 -12 1 -19z m210 2 c-3 -11 -1 -20 5 -20 5 0 6 -5 2 -11 -4 -8 -12 -3 -20\r
12 -18 32 -17 39 2 39 11 0 15 -6 11 -20z m196 -17 c7 -10 4 -13 -10 -13 -17\r
0 -19 5 -15 28 3 16 7 21 10 12 3 -8 9 -21 15 -27z m640 26 c58 -30 59 -37 26\r
-98 -16 -31 -45 -73 -63 -93 -32 -37 -33 -38 -51 -18 -14 16 -16 29 -11 77 15\r
123 17 128 74 142 2 1 13 -4 25 -10z m1593 0 c4 -7 24 -9 53 -6 l46 6 -50 -25\r
c-65 -31 -75 -30 -75 6 0 30 13 40 26 19z m-2829 -21 c-3 -8 -6 -5 -6 6 -1 11\r
2 17 5 13 3 -3 4 -12 1 -19z m220 -10 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7\r
2 -19 0 -25z m121 -6 c1 -21 -5 -47 -13 -58 -12 -17 -13 -15 -5 19 4 20 6 46\r
3 57 -3 11 -1 20 4 20 5 0 10 -17 11 -38z m1491 -7 c-8 -7 -13 -6 -16 3 -3 8\r
-20 -5 -45 -33 -22 -25 -43 -43 -46 -40 -3 3 4 12 16 20 11 9 31 33 43 54 20\r
36 23 38 40 23 14 -12 16 -19 8 -27z m141 35 c13 -8 13 -10 -2 -10 -9 0 -20 5\r
-23 10 -8 13 5 13 25 0z m983 -27 c-32 -79 -34 -80 -49 -37 -17 49 -17 47 2\r
40 11 -4 22 1 31 14 23 33 33 23 16 -17z m-2507 0 c-10 -10 -19 5 -10 18 6 11\r
8 11 12 0 2 -7 1 -15 -2 -18z m644 7 c-24 -19 -40 -25 -40 -15 0 5 51 34 60\r
34 3 0 -6 -8 -20 -19z m1649 4 c2 -2 -4 -15 -14 -30 -19 -29 -30 -24 -41 20\r
-7 28 -6 29 22 22 16 -4 31 -9 33 -12z m-2433 -30 c-5 -18 -10 -24 -17 -17 -7\r
7 -7 17 2 31 17 27 23 20 15 -14z m815 -44 l-15 -80 -43 42 c-40 39 -48 66\r
-17 54 8 -3 14 0 14 7 0 10 55 55 70 56 3 1 -1 -35 -9 -79z m469 45 c19 -19\r
29 -35 22 -35 -7 0 -12 -7 -12 -16 0 -13 -7 -15 -32 -10 -26 4 -29 3 -15 -5 9\r
-5 17 -16 17 -24 0 -18 -19 -30 -31 -18 -10 10 0 143 10 143 4 0 22 -16 41\r
-35z m330 10 c0 -28 -15 -33 -24 -8 -4 9 -1 20 6 25 18 11 18 11 18 -17z m565\r
-12 c-9 -52 -19 -59 -40 -27 -10 16 -14 29 -8 31 6 2 19 10 29 18 27 20 27 19\r
19 -22z m-1562 21 c10 -10 -12 -44 -28 -44 -18 0 -20 21 -3 38 13 13 22 15 31\r
6z m513 -50 c34 -24 64 -49 66 -56 8 -19 -9 -58 -25 -58 -20 0 -141 153 -130\r
164 7 7 13 4 89 -50z m1588 -49 c20 -55 36 -101 36 -102 0 -2 -22 -3 -49 -3\r
-57 0 -61 6 -61 86 0 49 24 134 34 123 3 -2 21 -49 40 -104z m-2506 87 c10 -7\r
10 -20 1 -60 -12 -59 -20 -67 -49 -52 -14 8 -20 21 -20 46 0 62 29 90 68 66z\r
m348 -29 c-11 -11 -17 4 -9 23 7 18 8 18 11 1 2 -10 1 -21 -2 -24z m1117 28\r
c29 -11 151 -158 138 -166 -5 -3 -12 1 -14 7 -4 9 -8 10 -14 2 -26 -36 -122\r
-56 -161 -35 -15 8 -17 20 -11 94 9 111 12 117 62 98z m761 -32 c-28 -31 -37\r
-22 -13 13 13 18 25 26 27 19 2 -7 -4 -21 -14 -32z m153 -12 c4 -28 -1 -50\r
-21 -91 l-27 -55 -37 13 c-30 11 -38 19 -45 50 -14 58 -4 79 55 108 29 14 57\r
23 61 19 4 -4 10 -24 14 -44z m-1870 26 c-9 -9 -19 -14 -23 -11 -10 10 6 28\r
24 28 15 0 15 -1 -1 -17z m864 -10 c12 -31 3 -140 -12 -149 -11 -7 -48 73 -56\r
120 -4 27 -1 34 19 43 34 17 37 16 49 -14z m-1661 13 c0 -3 -4 -8 -10 -11 -5\r
-3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m375 -6 c6 -10 -20 -80 -31\r
-80 -4 0 -4 18 0 39 4 27 2 41 -7 44 -6 3 -2 6 10 6 12 1 24 -3 28 -9z m754\r
-45 c43 -57 67 -102 59 -110 -8 -9 -218 -38 -225 -32 -3 4 1 15 11 26 15 16\r
29 18 109 15 l92 -3 -89 10 c-49 5 -91 11 -93 13 -6 6 77 136 87 136 4 0 26\r
-25 49 -55z m339 43 c-3 -7 -13 -15 -24 -17 -16 -3 -17 -1 -5 13 16 19 34 21\r
29 4z m460 -18 l73 -13 -43 -44 c-23 -24 -45 -42 -49 -41 -8 4 -99 116 -99\r
123 0 2 10 1 23 -4 12 -5 55 -14 95 -21z m252 23 c0 -5 -16 -19 -35 -32 -28\r
-19 -40 -22 -58 -14 -21 10 -20 11 18 31 41 21 75 28 75 15z m-2053 -38 c-1\r
-21 -6 -35 -13 -35 -20 0 -25 17 -9 30 8 7 15 19 15 26 0 8 2 14 4 14 2 0 4\r
-16 3 -35z m63 31 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0\r
10 -2 10 -4z m425 -16 c3 -5 -3 -10 -15 -10 -12 0 -18 5 -15 10 3 6 10 10 15\r
10 5 0 12 -4 15 -10z m973 -50 c12 -33 18 -60 15 -60 -3 0 -23 14 -44 31 l-39\r
30 22 30 c12 16 23 29 24 29 1 0 11 -27 22 -60z m620 35 c7 -14 12 -28 12 -30\r
0 -8 -53 -4 -74 4 -17 7 -16 9 10 29 37 27 38 27 52 -3z m-2149 6 c17 -11 5\r
-51 -15 -51 -9 0 -14 11 -14 30 0 31 6 36 29 21z m617 -17 c-5 -14 -9 -15 -19\r
-5 -9 9 -9 14 3 21 18 11 24 6 16 -16z m188 -99 c-9 -28 -9 -28 -44 -10 -18 9\r
-34 14 -37 11 -6 -6 -63 21 -63 30 0 15 43 64 51 59 5 -4 6 2 2 12 -3 10 17\r
-4 46 -32 39 -38 50 -54 45 -70z m-548 57 c-11 -10 -15 4 -8 28 l7 25 3 -23\r
c2 -13 1 -26 -2 -30z m112 25 c27 -29 20 -37 -30 -37 -43 0 -44 1 -22 35 20\r
31 25 31 52 2z m200 0 c22 -23 22 -24 3 -41 -16 -15 -25 -15 -65 -5 -25 6 -46\r
14 -46 18 0 9 63 51 76 51 6 0 20 -10 32 -23z m1432 15 c0 -4 -16 -16 -35 -26\r
-19 -10 -42 -28 -52 -39 -17 -19 -17 -20 2 -8 11 6 30 18 42 27 22 16 23 15\r
33 -12 15 -38 5 -58 -23 -50 -12 3 -33 6 -47 6 -14 0 -32 5 -40 10 -12 8 -10\r
14 15 40 16 16 35 30 42 30 7 0 12 3 12 8 -1 4 -1 10 0 15 1 9 51 9 51 -1z\r
m460 -22 c0 -16 -2 -30 -5 -30 -9 0 -26 41 -20 50 12 20 25 9 25 -20z m-2672\r
-11 c-3 -8 -7 -3 -11 10 -4 17 -3 21 5 13 5 -5 8 -16 6 -23z m1597 11 c10 -11\r
13 -20 8 -20 -18 0 -63 27 -56 33 12 12 30 7 48 -13z m1265 -40 l0 -60 -30 0\r
c-16 0 -30 2 -30 5 0 7 54 115 57 115 2 0 3 -27 3 -60z m-2525 40 c3 -5 1 -10\r
-4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m1938 -3 c26 -18 5\r
-77 -28 -77 -18 0 -24 7 -28 37 -4 20 -4 40 -1 45 8 12 38 10 57 -5z m-2173\r
-34 c0 -7 -4 -13 -10 -13 -5 0 -10 12 -10 28 0 21 2 24 10 12 5 -8 10 -21 10\r
-27z m2548 12 c12 -14 19 -25 17 -25 -12 0 -55 33 -55 41 0 16 16 9 38 -16z\r
m-1091 4 l28 -11 -39 -20 c-46 -24 -71 -11 -41 22 21 24 17 23 52 9z m788 5\r
c14 -6 13 -9 -6 -30 -36 -39 -61 -27 -43 20 7 17 22 20 49 10z m74 -30 c-16\r
-20 -39 -17 -39 4 0 27 10 33 32 21 15 -8 17 -13 7 -25z m141 26 c0 -5 -7 -10\r
-15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m74 -27 c37 -34\r
64 -73 49 -73 -18 0 -76 46 -88 70 -27 53 -17 53 39 3z m-2384 23 c0 -3 -4 -8\r
-10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m1455 -27 c55\r
-31 61 -41 49 -86 -6 -21 -9 -20 -60 24 -36 32 -54 54 -54 70 0 13 2 23 5 23\r
3 0 30 -14 60 -31z m-1080 11 c-3 -5 4 -11 17 -11 81 -5 121 -9 126 -14 3 -3\r
-4 -5 -16 -5 -11 0 -41 -9 -67 -20 -26 -11 -50 -20 -55 -20 -9 0 -19 68 -11\r
75 8 9 12 5 6 -5z m743 -26 c-4 -3 -12 5 -18 18 -12 22 -12 22 6 6 10 -10 15\r
-20 12 -24z m-1171 -1 c-15 -16 -17 -16 -17 -1 0 9 6 18 13 21 20 7 22 -2 4\r
-20z m73 18 c0 -12 -20 -25 -27 -18 -7 7 6 27 18 27 5 0 9 -4 9 -9z m55 -1 c3\r
-5 -3 -10 -14 -10 -12 0 -21 5 -21 10 0 6 6 10 14 10 8 0 18 -4 21 -10z m2045\r
-5 c0 -8 -4 -15 -10 -15 -5 0 -7 7 -4 15 4 8 8 15 10 15 2 0 4 -7 4 -15z m100\r
2 c0 -20 -9 -25 -31 -20 -15 4 -17 8 -8 19 15 18 39 18 39 1z m60 8 c0 -2 -9\r
-9 -20 -15 -16 -9 -20 -8 -20 5 0 8 9 15 20 15 11 0 20 -2 20 -5z m-2060 -9\r
c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m130\r
-27 c0 -27 -3 -30 -22 -23 -26 7 -58 33 -58 46 0 4 18 8 40 8 38 0 40 -2 40\r
-31z m1010 -29 c0 -33 -2 -60 -5 -60 -2 0 -23 18 -47 40 -43 39 -43 40 -16 40\r
15 0 31 -8 37 -17 9 -16 10 -15 8 5 -1 15 -8 22 -22 22 -20 1 -20 1 -1 15 37\r
28 46 19 46 -45z m-1470 23 c0 -20 -3 -24 -11 -16 -7 7 -9 19 -6 27 10 24 17\r
19 17 -11z m2420 5 c5 -13 9 -17 9 -9 1 21 36 -13 51 -50 17 -40 8 -45 -32\r
-18 -69 48 -78 60 -65 80 16 25 26 24 37 -3z m-2172 -11 c3 -16 1 -17 -17 -5\r
-25 16 -27 31 -4 26 10 -2 19 -11 21 -21z m467 -3 c16 -25 16 -25 -4 -15 -11\r
6 -30 11 -42 11 -18 0 -19 2 -9 15 18 22 35 18 55 -11z m625 16 c0 -5 -9 -14\r
-21 -20 -19 -11 -20 -10 -9 9 11 22 30 29 30 11z m-1560 -49 c-1 -10 -6 -7\r
-15 9 -19 33 -18 50 0 26 8 -11 15 -27 15 -35z m339 -17 c34 -90 23 -110 -30\r
-53 -31 33 -37 67 -17 98 16 27 23 20 47 -45z m40 34 c1 22 5 32 14 30 16 -6\r
19 -93 5 -138 l-11 -35 -13 60 c-7 33 -12 74 -12 90 1 29 1 29 8 -5 l7 -35 2\r
33z m161 22 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4\r
-10z m930 0 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4\r
-10z m44 -5 c-4 -8 -8 -15 -10 -15 -2 0 -4 7 -4 15 0 8 4 15 10 15 5 0 7 -7 4\r
-15z m-674 -4 c0 -15 -79 -73 -90 -66 -16 10 -12 25 8 26 9 1 4 4 -13 8 l-30\r
6 35 17 c38 19 90 24 90 9z m236 -24 c9 -8 -24 -82 -37 -85 -9 -2 -25 19 -42\r
53 -15 30 -27 57 -27 59 0 5 100 -21 106 -27z m82 10 c5 -24 -15 -21 -28 4\r
-10 18 -9 20 7 17 10 -2 19 -11 21 -21z m613 -18 c27 -22 49 -44 49 -49 0 -4\r
-14 -13 -31 -20 -25 -11 -35 -11 -51 -1 -25 16 -37 5 -14 -12 17 -12 16 -14\r
-8 -31 -26 -17 -27 -17 -21 6 7 28 12 72 14 116 0 17 4 32 7 32 3 0 28 -18 55\r
-41z m429 21 c42 -21 50 -37 25 -46 -16 -6 -88 50 -78 60 9 8 9 8 53 -14z\r
m260 -25 c0 -25 -2 -45 -4 -45 -11 0 -76 43 -76 49 0 7 58 39 73 40 4 1 7 -19\r
7 -44z m67 20 c2 -11 -10 -36 -27 -55 l-29 -35 -1 58 c0 58 0 58 28 55 18 -2\r
28 -9 29 -23z m291 12 l23 -13 -24 -11 c-28 -13 -37 -8 -37 19 0 21 7 22 38 5z\r
m-1388 -6 c0 -4 -45 -23 -100 -42 -94 -32 -101 -33 -117 -17 -9 10 -15 19 -12\r
21 3 3 199 44 222 46 4 1 7 -3 7 -8z m207 -36 c60 -64 58 -110 -9 -146 -28\r
-15 -42 -7 -75 43 -45 66 -46 74 -12 113 17 19 36 35 42 35 6 0 30 -20 54 -45z\r
m241 18 c3 -19 -23 -51 -33 -41 -3 3 -2 19 1 37 7 34 27 37 32 4z m400 10 c-5\r
-25 -25 -27 -38 -4 -10 19 -8 21 15 21 19 0 26 -5 23 -17z m72 7 c0 -12 -35\r
-31 -44 -23 -15 15 -4 33 19 33 14 0 25 -4 25 -10z m-1887 -45 c6 -39 1 -65\r
-14 -65 -5 0 -9 25 -9 56 0 60 14 66 23 9z m130 25 c15 -21 29 -17 20 6 -3 8\r
0 14 6 14 6 0 10 -11 9 -25 -2 -21 -7 -25 -34 -25 -33 0 -60 22 -49 40 10 16\r
33 12 48 -10z m342 0 c32 -20 64 -70 44 -70 -18 0 -79 29 -79 37 0 5 5 14 12\r
21 9 9 9 12 0 12 -7 0 -16 -8 -19 -17 -6 -15 -7 -14 -13 3 -15 39 6 44 55 14z\r
m999 -1 c-8 -14 -24 -10 -24 6 0 9 6 12 15 9 8 -4 12 -10 9 -15z m837 -42 c-5\r
-5 -7 -16 -4 -24 5 -13 3 -13 -16 -1 -18 10 -51 66 -51 84 0 3 18 -8 40 -22\r
26 -18 37 -31 31 -37z m195 -26 c14 -46 23 -85 21 -87 -1 -2 -32 16 -67 39\r
-64 42 -84 72 -58 88 10 7 10 9 -2 9 -10 0 -7 7 10 20 14 11 36 19 49 18 20\r
-3 27 -14 47 -87z m-2286 65 c0 -21 -20 -30 -33 -17 -9 9 -7 10 8 5 18 -7 18\r
-6 6 9 -12 15 -11 17 3 17 9 0 16 -6 16 -14z m440 -7 c0 -5 -7 -9 -15 -9 -15\r
0 -20 12 -9 23 8 8 24 -1 24 -14z m1050 -1 c17 -12 30 -25 30 -29 0 -8 -64\r
-29 -87 -29 -23 0 2 79 25 80 2 0 16 -10 32 -22z m425 -1 c36 -31 25 -51 -37\r
-66 -28 -6 -53 -9 -56 -7 -6 7 47 96 58 96 5 0 21 -10 35 -23z m475 16 c0 -5\r
-5 -35 -10 -68 -6 -33 -13 -123 -16 -200 -3 -77 -9 -178 -12 -223 l-7 -84 -31\r
44 c-17 23 -56 78 -87 122 -32 43 -57 83 -57 90 1 10 44 42 136 99 l42 26 -34\r
85 c-46 115 -46 116 21 116 30 0 55 -3 55 -7z m791 -10 c6 -6 -21 -79 -66\r
-184 -103 -236 -251 -581 -256 -596 -4 -12 -479 183 -479 198 0 7 88 71 370\r
271 74 52 191 135 260 184 69 49 137 97 150 106 14 9 21 17 15 17 -5 0 -73\r
-44 -150 -97 -181 -127 -585 -413 -630 -448 l-35 -26 0 28 c0 35 27 402 36\r
495 l6 66 385 -3 c215 -1 389 -6 394 -11z m-3151 -3 c0 -5 -4 -10 -10 -10 -5\r
0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m150 -4 c0 -8 -4 -18 -10\r
-21 -5 -3 -10 3 -10 14 0 12 5 21 10 21 6 0 10 -6 10 -14z m586 0 c6 -16 -73\r
-159 -85 -154 -5 2 -21 13 -37 26 -16 12 -44 33 -63 47 -24 17 -30 26 -20 30\r
42 16 185 64 192 64 4 1 10 -5 13 -13z m54 10 c0 -3 -4 -8 -10 -11 -5 -3 -10\r
-1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m525 -6 c-3 -5 -12 -10 -20 -10 -8\r
0 -17 5 -20 10 -4 6 5 10 20 10 15 0 24 -4 20 -10z m75 -12 c0 -43 -14 -52\r
-50 -33 -36 18 -36 18 5 39 40 21 45 20 45 -6z m258 -3 c-5 -26 1 -32 18 -15\r
11 11 72 -22 80 -44 7 -18 -45 -101 -55 -90 -5 5 -14 30 -21 57 -7 26 -17 50\r
-23 54 -6 4 -8 0 -4 -9 15 -40 30 -99 26 -103 -12 -11 -46 9 -67 39 -29 42\r
-28 54 6 68 l27 11 -24 6 -25 7 28 22 c36 28 39 28 34 -3z m477 6 c-3 -6 -11\r
-11 -17 -11 -6 0 -6 6 2 15 14 17 26 13 15 -4z m1212 -181 c77 -102 190 -251\r
251 -332 104 -136 111 -148 90 -153 -13 -2 -90 -12 -173 -20 -168 -18 -314\r
-36 -519 -66 -76 -11 -140 -19 -141 -17 -2 2 39 102 92 223 84 196 206 478\r
234 544 6 14 14 20 18 15 5 -5 71 -92 148 -194z m-2068 177 c6 -8 8 -17 4 -20\r
-7 -8 -33 11 -33 24 0 13 16 11 29 -4z m310 -13 c-14 -18 -24 -11 -15 11 3 9\r
11 13 16 10 8 -5 7 -11 -1 -21z m2306 -195 c363 -122 680 -229 705 -237 l45\r
-16 -35 -8 c-19 -4 -143 -30 -275 -58 -132 -28 -322 -68 -422 -89 l-182 -38\r
-20 21 c-11 12 -60 74 -108 138 -70 93 -331 437 -376 496 -5 6 -6 12 -1 12 5\r
0 306 -100 669 -221z m-3865 196 c0 -8 -4 -15 -9 -15 -13 0 -22 16 -14 24 11\r
11 23 6 23 -9z m475 -5 c10 -11 15 -20 12 -20 -14 0 -57 24 -57 32 0 15 27 8\r
45 -12z m-1098 -12 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z\r
m1023 7 c0 -11 -35 -35 -50 -35 -17 0 -18 3 -9 23 8 18 17 23 35 19 13 -2 24\r
-6 24 -7z m822 -2 c21 -25 68 -131 68 -154 0 -11 -4 -19 -10 -19 -5 0 -10 12\r
-10 28 0 21 -3 24 -10 12 -7 -12 -12 -7 -25 22 -8 21 -15 45 -15 55 0 10 -7\r
27 -15 37 -27 36 -12 52 17 19z m5188 -215 c144 -403 191 -542 195 -570 3 -25\r
-8 -32 -203 -136 -347 -184 -371 -196 -378 -189 -4 3 -9 153 -12 332 l-5 326\r
124 -74 c240 -143 461 -268 466 -263 3 2 -6 10 -19 17 -12 6 -86 49 -163 94\r
-77 45 -200 117 -272 160 -81 48 -130 82 -126 89 20 33 251 386 271 414 14 17\r
28 32 31 32 4 0 45 -105 91 -232z m-6983 190 c-3 -7 -5 -2 -5 12 0 14 2 19 5\r
13 2 -7 2 -19 0 -25z m63 0 c0 -6 -7 -5 -15 2 -8 7 -15 17 -15 22 0 6 7 5 15\r
-2 8 -7 15 -17 15 -22z m335 22 c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6\r
11 10 16 10 6 0 7 -4 4 -10z m272 -13 c-2 -6 -15 -14 -30 -18 -27 -7 -28 -2\r
-5 28 11 14 40 5 35 -10z m1088 -7 c3 -16 2 -36 -2 -45 -8 -13 -12 -12 -33 10\r
-13 14 -21 28 -18 31 4 3 11 -4 18 -15 6 -12 16 -21 22 -21 6 0 3 9 -7 20 -9\r
10 -15 26 -12 35 10 24 25 17 32 -15z m338 16 c3 -8 3 -17 0 -20 -9 -9 -34 15\r
-27 25 8 13 21 11 27 -5z m452 -15 l64 -30 -11 -31 -11 -32 -26 46 c-23 41\r
-51 61 -51 37 0 -5 6 -11 13 -14 6 -2 22 -22 34 -44 22 -39 22 -40 4 -57 -12\r
-11 -43 -20 -79 -23 l-59 -5 21 66 c16 51 25 66 41 67 19 2 19 2 -1 6 -16 3\r
-20 9 -17 24 3 10 7 19 9 19 3 0 33 -13 69 -29z m-2675 4 c0 -8 -4 -15 -10\r
-15 -5 0 -7 7 -4 15 4 8 8 15 10 15 2 0 4 -7 4 -15z m600 8 c0 -5 -3 -18 -6\r
-31 -6 -20 -11 -22 -38 -16 -40 8 -40 8 -26 33 7 14 21 21 40 21 17 0 30 -3\r
30 -7z m87 -14 c23 -20 14 -38 -22 -45 -50 -9 -63 -2 -57 36 4 30 7 32 35 26\r
16 -3 36 -11 44 -17z m453 11 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5\r
10 10 10 6 0 10 -4 10 -10z m875 -7 c19 -9 35 -19 35 -22 -1 -3 -14 -21 -29\r
-39 l-28 -33 -17 35 c-17 36 -20 59 -9 69 9 9 7 9 48 -10z m773 0 c-5 -25 -28\r
-28 -28 -4 0 12 6 21 16 21 9 0 14 -7 12 -17z m-2518 -37 c21 -24 22 -28 7\r
-25 -11 2 -25 20 -33 39 -8 19 -11 31 -7 25 5 -5 19 -23 33 -39z m116 -14\r
c-14 -14 -14 -12 -3 24 10 33 13 35 15 15 2 -13 -3 -31 -12 -39z m460 31 c-10\r
-10 -19 5 -10 18 6 11 8 11 12 0 2 -7 1 -15 -2 -18z m78 -17 c-4 -11 -12 -12\r
-35 -4 -32 11 -31 10 -23 32 5 14 9 14 35 1 17 -9 26 -21 23 -29z m585 -26\r
l43 -61 -91 3 c-50 2 -91 4 -91 6 0 15 81 122 89 117 4 -2 27 -31 50 -65z\r
m-1339 41 c11 -21 3 -54 -11 -45 -9 5 -13 64 -4 64 2 0 9 -9 15 -19z m1690\r
-58 c0 -20 -8 -15 -24 15 -11 18 -15 22 -16 10 0 -16 -2 -16 -30 0 l-30 17 23\r
17 c21 16 23 15 49 -15 15 -18 27 -38 28 -44z m305 65 c14 -6 25 -14 25 -17\r
-1 -9 -140 -106 -153 -106 -7 0 -18 -4 -24 -8 -9 -6 -13 -2 -13 10 1 39 58\r
111 97 123 39 11 39 11 68 -2z m-1693 -20 c-7 -7 -12 -8 -12 -2 0 14 12 26 19\r
19 2 -3 -1 -11 -7 -17z m724 6 c17 -14 17 -15 1 -10 -10 3 -30 6 -43 6 -13 0\r
-24 5 -24 10 0 16 44 12 66 -6z m1370 -6 c-4 -13 -11 -45 -17 -71 -8 -36 -15\r
-47 -26 -43 -8 3 -19 6 -24 6 -17 0 -9 20 9 21 11 1 8 4 -8 9 -16 4 -33 2 -47\r
-6 -53 -33 -75 -8 -37 41 20 27 29 33 35 23 7 -10 9 -9 9 3 0 11 14 20 43 26\r
66 16 70 16 63 -9z m299 -12 c17 -14 14 -14 -17 1 -21 9 -38 21 -38 25 0 10\r
25 -2 55 -26z m-1896 -2 c-6 -8 -15 -14 -20 -14 -14 0 -11 28 4 33 20 7 29 -4\r
16 -19z m121 19 c0 -5 -7 -17 -15 -28 -14 -18 -17 -18 -31 -3 -9 9 -13 21 -10\r
27 8 12 56 15 56 4z m1160 -3 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5\r
10 10 10 6 0 10 -4 10 -10z m-1455 -10 c-3 -5 -15 -10 -25 -10 -10 0 -22 5\r
-25 10 -4 6 7 10 25 10 18 0 29 -4 25 -10z m53 -13 c2 -12 -3 -17 -17 -17 -23\r
0 -24 1 -15 25 8 19 28 15 32 -8z m172 13 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11\r
10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-441 -16 c7 -6 -21 -62 -39 -79 -16\r
-15 -18 -13 -24 31 -3 25 -3 50 0 55 4 8 52 2 63 -7z m636 -3 c49 -22 68 -43\r
63 -73 -2 -17 -14 -25 -53 -36 -31 -9 -54 -11 -64 -5 -15 10 -52 113 -44 126\r
8 13 57 7 98 -12z m577 -13 c36 -25 50 -41 54 -66 4 -18 4 -36 0 -39 -3 -4\r
-43 -9 -87 -13 -92 -6 -99 -2 -99 69 0 36 4 44 33 61 42 26 43 26 99 -12z\r
m448 13 c15 -29 13 -32 -17 -25 -43 10 -48 16 -28 31 25 18 32 17 45 -6z\r
m-2160 -13 c0 -19 -2 -20 -10 -8 -13 19 -13 30 0 30 6 0 10 -10 10 -22z m387\r
0 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m437 16 c9 -3 16 -12\r
16 -19 0 -11 5 -11 27 0 26 14 28 13 41 -11 21 -40 10 -56 -30 -42 -18 6 -37\r
14 -42 19 -12 10 -36 0 -36 -16 0 -8 -5 -17 -10 -20 -6 -4 -10 5 -9 22 1 15 1\r
33 -1 38 -8 32 8 43 44 29z m1015 -25 c6 -18 11 -35 11 -38 -1 -11 -40 44 -40\r
57 0 24 18 12 29 -19z m855 15 c10 -25 7 -37 -8 -31 -10 4 -12 0 -9 -14 8 -30\r
21 -22 34 21 7 22 18 40 24 40 7 0 40 -14 75 -32 l62 -32 -48 -13 c-27 -7 -72\r
-13 -101 -13 -57 0 -70 14 -57 64 7 29 19 34 28 10z m-2000 0 c11 -4 16 -19\r
16 -50 0 -24 -4 -44 -8 -44 -4 0 -27 20 -50 44 l-42 45 27 4 c16 2 31 5 35 6\r
3 0 13 -2 22 -5z m-454 -40 c0 -11 -4 -10 -19 3 -11 9 -18 20 -15 25 8 12 34\r
-11 34 -28z m96 20 c-3 -9 -6 -24 -6 -35 0 -10 -4 -19 -10 -19 -11 0 -13 30\r
-4 54 3 9 11 16 16 16 6 0 7 -7 4 -16z m44 -42 c0 -20 -6 -35 -15 -39 -23 -8\r
-25 -3 -13 51 11 54 28 47 28 -12z m172 38 c-9 -9 -32 -26 -51 -39 l-33 -24\r
26 40 c20 30 34 40 51 39 22 -1 22 -2 7 -16z m392 5 c3 -8 1 -15 -4 -15 -6 0\r
-10 7 -10 15 0 8 2 15 4 15 2 0 6 -7 10 -15z m81 -17 c4 -18 12 -39 19 -47 9\r
-12 8 -13 -4 -6 -40 22 -59 48 -49 66 14 28 27 23 34 -13z m1185 1 c0 -5 -7\r
-6 -15 -3 -8 4 -15 13 -15 21 0 13 3 13 15 3 8 -7 15 -16 15 -21z m-2159 -61\r
c-8 -18 -10 -12 -9 32 0 50 1 52 9 23 6 -19 5 -40 0 -55z m68 75 c0 -5 -4 -17\r
-9 -28 -8 -18 -9 -17 -9 8 -1 15 4 27 9 27 6 0 10 -3 9 -7z m649 -47 c4 -63\r
-3 -83 -23 -66 -10 8 -15 31 -15 67 0 46 3 54 18 51 13 -2 18 -15 20 -52z\r
m1034 7 c-10 -28 -10 -28 -11 12 -1 28 2 36 10 28 8 -8 8 -19 1 -40z m341 31\r
c21 -5 27 -12 27 -34 l0 -28 -97 -1 c-53 -1 -94 2 -90 5 25 25 105 72 117 69\r
8 -2 27 -7 43 -11z m-1528 -2 c21 -14 85 -96 85 -107 0 -13 -180 -29 -192 -17\r
-10 10 20 67 53 103 28 30 37 34 54 21z m945 -44 l0 -53 -19 25 c-11 13 -17\r
28 -15 32 3 4 0 8 -5 8 -26 0 3 30 37 39 1 1 2 -23 2 -51z m-1551 10 c-1 -31\r
-1 -31 -8 -8 -5 14 -6 28 -4 33 9 15 13 6 12 -25z m231 -18 c16 -31 9 -104\r
-11 -108 -12 -2 -22 15 -37 63 -31 91 -30 100 8 80 16 -8 34 -24 40 -35z m996\r
22 c-18 -18 -31 -10 -23 12 4 10 13 13 22 9 15 -5 15 -7 1 -21z m969 -7 c0\r
-10 -6 -20 -12 -22 -8 -3 -13 5 -13 22 0 17 5 25 13 23 6 -3 12 -13 12 -23z\r
m36 12 c-1 -12 -15 -9 -19 4 -3 6 1 10 8 8 6 -3 11 -8 11 -12z m-2404 -19 c-3\r
-8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m147 -16 c35 -51 33 -63 -4\r
-22 -16 18 -30 40 -30 47 0 20 5 16 34 -25z m195 -59 c6 -13 8 -23 3 -23 -12\r
0 -30 41 -37 87 l-5 38 13 -40 c7 -22 19 -50 26 -62z m694 25 c-45 -46 -83\r
-51 -83 -12 0 14 7 38 16 53 l16 28 44 -16 44 -16 -37 -37z m967 51 c0 -5 -4\r
-9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10 10 -16z m550 11 c0 -5\r
-2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-1371 -25\r
c13 -14 19 -25 14 -25 -5 0 -20 11 -33 25 -13 14 -19 25 -14 25 5 0 20 -12 33\r
-25z m471 15 c2 0 -5 -7 -16 -15 -18 -12 -32 -12 -90 -2 -57 9 -64 12 -39 17\r
24 5 87 5 145 0z m1365 2 c-25 -21 -116 -82 -123 -82 -5 0 -19 11 -31 24 -27\r
28 -26 29 78 45 35 6 66 13 69 16 3 3 8 5 11 5 3 0 1 -4 -4 -8z m-2435 -17 c0\r
-8 -7 -15 -15 -15 -16 0 -20 12 -8 23 11 12 23 8 23 -8z m896 -63 c13 -30 24\r
-56 24 -58 0 -7 -115 -44 -126 -40 -10 4 -9 18 6 63 33 107 38 117 56 102 9\r
-7 27 -38 40 -67z m954 68 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4\r
10 6 0 11 -4 11 -10z m380 0 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10\r
10 10 6 0 10 -4 10 -10z m-1686 -48 c2 -22 12 -53 23 -68 37 -54 37 -54 -11\r
-54 -44 0 -46 1 -46 29 0 16 8 37 17 47 10 10 13 19 7 21 -5 2 -8 19 -6 39 5\r
44 12 38 16 -14z m576 7 c0 -4 -18 -6 -40 -5 -22 2 -37 0 -35 -5 6 -9 -103\r
-84 -112 -76 -10 10 5 35 24 40 10 2 5 3 -11 3 -16 -1 -31 4 -33 11 -3 7 4 10\r
19 7 13 -2 16 -1 8 2 -22 10 -50 36 -50 47 0 9 75 2 107 -10 17 -7 -2 -33 -26\r
-34 -9 0 -11 -3 -4 -5 7 -3 25 3 40 14 73 50 77 51 96 34 9 -8 17 -19 17 -23z\r
m865 31 c15 -6 6 -9 -32 -9 -28 -1 -55 4 -58 9 -8 12 61 12 90 0z m-1182 -15\r
c-3 -9 -24 -25 -47 -36 l-41 -20 37 35 c40 38 61 46 51 21z m1082 -5 c-3 -5 8\r
-28 25 -51 28 -39 40 -79 23 -79 -5 0 -16 20 -26 44 -10 23 -27 53 -39 66 -16\r
18 -18 24 -7 30 15 10 32 3 24 -10z m-475 0 c-19 -13 -30 -13 -30 0 0 6 10 10\r
23 10 18 0 19 -2 7 -10z m700 6 c0 -2 -15 -14 -32 -26 -37 -24 -33 -23 35 9\r
27 12 51 21 53 18 9 -9 -111 -157 -128 -157 -9 0 -10 59 -2 112 5 27 12 38 28\r
41 33 7 46 7 46 3z m180 -64 c-1 -13 -265 -201 -269 -191 -1 6 4 18 13 28 9\r
10 16 21 16 25 0 10 149 185 168 196 13 7 23 3 45 -20 15 -17 27 -34 27 -38z\r
m-2711 -1 c-7 -19 -49 18 -49 42 0 21 1 21 26 -5 15 -14 25 -31 23 -37z m122\r
16 c-8 -8 -11 -3 -11 19 1 25 2 27 11 11 8 -14 8 -22 0 -30z m373 19 c-3 -9\r
-10 -13 -16 -10 -5 3 -4 12 3 20 15 18 22 13 13 -10z m426 16 c0 -5 -15 -19\r
-32 -32 l-33 -23 29 31 c31 34 36 37 36 24z m103 -18 c20 -20 26 -35 24 -65\r
-1 -21 -4 -39 -8 -39 -12 0 -49 65 -55 99 -8 38 5 40 39 5z m104 -8 l-22 -33\r
-5 26 c-5 22 -1 27 20 32 14 4 26 7 27 8 1 0 -8 -14 -20 -33z m823 30 c0 -3\r
-4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m181 -81\r
l-36 -85 -67 67 c-38 37 -68 73 -68 80 0 15 27 20 126 22 l81 1 -36 -85z m127\r
44 c70 -66 84 -99 43 -99 -9 0 -50 -13 -91 -29 -41 -16 -78 -27 -82 -25 -16\r
10 -7 47 26 120 19 41 41 74 48 74 7 0 32 -19 56 -41z m12 16 c13 -14 21 -27\r
18 -30 -2 -3 -17 9 -33 25 -16 17 -24 30 -19 30 6 0 21 -11 34 -25z m156 10\r
c6 -15 -31 -75 -46 -75 -9 0 -50 66 -50 81 0 16 90 11 96 -6z m-2046 -9 c0 -9\r
-30 -14 -35 -6 -4 6 3 10 14 10 12 0 21 -2 21 -4z m1475 -13 c7 17 25 24 25 9\r
0 -12 -128 -142 -140 -142 -25 0 -5 31 45 71 32 26 51 47 46 52 -6 6 -23 -5\r
-42 -27 -38 -43 -46 -41 -25 7 11 27 21 36 43 39 18 2 30 -2 34 -12 6 -13 8\r
-12 14 3z m-1115 -2 c0 -6 -4 -13 -10 -16 -5 -3 -10 1 -10 9 0 9 5 16 10 16 6\r
0 10 -4 10 -9z m455 -27 c-3 -20 -11 -48 -16 -62 l-10 -25 -24 23 c-14 13 -25\r
29 -25 35 0 10 67 65 78 65 3 0 1 -16 -3 -36z m290 26 c-3 -5 -11 -10 -16 -10\r
-6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m260 -29 c-7 -22 -20 -52\r
-28 -66 l-14 -27 -36 43 c-20 23 -37 48 -37 54 0 7 24 17 53 22 82 16 78 18\r
62 -26z m-1820 19 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8\r
-4 11 -10z m505 0 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0\r
11 -4 11 -10z m30 0 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6\r
0 11 -4 11 -10z m1429 -33 c-12 -45 -29 -57 -29 -21 0 24 27 70 36 61 2 -2 -1\r
-20 -7 -40z m-1739 -15 c-31 -5 -47 13 -29 34 12 15 15 14 32 -7 19 -24 19\r
-24 -3 -27z m625 38 c3 -5 2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5\r
0 13 -4 16 -10z m740 -5 l-40 -13 40 2 40 1 3 -84 c2 -65 0 -82 -10 -78 -158\r
62 -175 73 -164 102 3 9 25 25 48 35 24 11 37 20 30 20 -7 0 -30 -9 -52 -20\r
-49 -25 -65 -26 -25 -2 40 25 114 50 145 50 19 0 15 -3 -15 -13z m917 -87 c-5\r
-5 -15 0 -25 15 -14 22 -14 26 6 58 l22 34 3 -49 c2 -27 -1 -53 -6 -58z\r
m-1770 82 c32 0 32 -4 2 -79 l-14 -34 -23 20 c-12 11 -44 35 -72 54 l-50 34\r
35 6 c19 4 48 5 64 3 16 -2 42 -4 58 -4z m256 -34 c3 -35 2 -37 -20 -31 -13 4\r
-36 14 -53 23 l-30 15 40 18 c22 10 45 17 50 15 6 -1 11 -19 13 -40z m162 7\r
c0 -7 -4 -13 -10 -13 -5 0 -10 12 -10 28 0 21 2 24 10 12 5 -8 10 -21 10 -27z\r
m554 0 l18 -38 -31 29 c-17 16 -28 33 -25 38 10 16 20 8 38 -29z m392 -37 c41\r
-41 71 -77 66 -80 -6 -3 -13 0 -15 6 -4 8 -6 7 -6 -4 -1 -26 -94 -48 -115 -27\r
-3 2 -14 37 -25 78 -26 93 -14 84 16 -12 27 -90 30 -66 3 28 -11 38 -20 73\r
-20 77 0 20 25 2 96 -66z m-2100 16 c1 -33 -1 -41 -6 -27 -11 26 -12 75 -2 75\r
4 0 8 -21 8 -48z m54 28 c0 -11 -2 -20 -4 -20 -2 0 -6 9 -9 20 -3 11 -1 20 4\r
20 5 0 9 -9 9 -20z m385 10 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4\r
10 3 0 8 -4 11 -10z m64 -2 c0 -7 -4 -22 -8 -33 -7 -17 -8 -17 -13 8 -3 14 -3\r
29 0 32 10 9 22 5 21 -7z m39 -70 l-13 -23 -3 26 c-2 14 3 38 10 55 l12 29 4\r
-32 c2 -18 -3 -42 -10 -55z m273 72 c27 -15 24 -31 -15 -69 -47 -45 -58 -37\r
-34 27 21 57 21 57 49 42z m-734 -22 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3\r
4 -12 1 -19z m2808 -100 c48 -68 88 -128 89 -134 1 -6 -117 -131 -261 -279\r
-207 -210 -263 -262 -263 -244 0 26 26 371 36 485 4 40 9 76 13 82 8 13 281\r
212 291 212 4 0 47 -55 95 -122z m-2580 102 c3 -5 -1 -10 -10 -10 -9 0 -13 5\r
-10 10 3 6 8 10 10 10 2 0 7 -4 10 -10z m388 -80 c17 -15 14 -18 -43 -45 -33\r
-16 -63 -25 -67 -22 -9 10 -24 137 -17 149 5 8 86 -44 127 -82z m-543 65 c0\r
-8 -2 -15 -4 -15 -2 0 -6 7 -10 15 -3 8 -1 15 4 15 6 0 10 -7 10 -15z m1582\r
-29 c3 2 11 -2 17 -10 10 -12 3 -21 -41 -54 l-53 -39 -3 31 c-2 17 -1 50 3 74\r
l6 43 33 -25 c19 -14 36 -23 38 -20z m177 -55 c-12 -33 -24 -61 -27 -61 -3 0\r
-21 14 -39 32 l-33 32 47 48 c43 44 47 46 60 29 10 -16 9 -29 -8 -80z m-1669\r
74 c0 -8 -9 -19 -20 -25 -15 -8 -21 -6 -30 9 -15 29 -13 31 20 31 20 0 30 -5\r
30 -15z m218 -21 c-10 -10 -28 6 -28 24 0 15 1 15 17 -1 9 -9 14 -19 11 -23z\r
m742 -17 c0 -17 -5 -18 -37 -12 -46 8 -52 13 -33 25 9 5 19 5 27 -2 18 -14 29\r
-2 15 15 -7 8 -9 17 -5 21 10 10 33 -23 33 -47z m793 -14 c9 -38 17 -71 17\r
-75 0 -5 -24 -8 -54 -8 l-54 0 31 75 c16 41 33 75 36 75 4 0 14 -30 24 -67z\r
m-569 35 c9 -36 8 -38 -26 -37 l-33 1 30 7 c42 9 17 22 -29 14 -54 -8 -53 -21\r
1 -28 67 -9 73 -12 73 -35 0 -25 2 -25 -72 5 -34 14 -70 25 -81 25 -26 0 -16\r
24 14 30 13 4 40 13 59 23 47 22 57 21 64 -5z m-1374 5 c0 -5 -5 -15 -10 -23\r
-8 -12 -10 -11 -10 8 0 12 5 22 10 22 6 0 10 -3 10 -7z m275 -12 c-3 -6 -11\r
-8 -17 -5 -6 4 -5 9 3 15 16 10 23 4 14 -10z m608 -1 c-18 -17 -53 -22 -53 -7\r
0 20 8 25 36 19 14 -2 22 -8 17 -12z m1534 0 c8 -12 9 -21 3 -25 -15 -9 -30 4\r
-30 26 0 24 12 24 27 -1z m-2277 -16 c0 -8 -4 -12 -10 -9 -5 3 -10 13 -10 21\r
0 8 5 12 10 9 6 -3 10 -13 10 -21z m300 -22 l-1 -37 -14 27 c-8 15 -12 34 -9\r
42 10 26 24 7 24 -32z m780 38 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10\r
11 10 2 0 4 -4 4 -10z m-845 -49 c-4 -12 -12 -20 -18 -18 -15 5 -21 33 -12 54\r
10 27 39 -8 30 -36z m1961 3 c-8 -16 -28 -43 -43 -61 l-28 -32 -47 38 -48 39\r
28 10 c153 57 166 58 138 6z m6060 29 c-3 -10 -17 -101 -31 -202 -14 -101 -27\r
-186 -29 -189 -3 -2 -42 9 -88 26 -46 16 -143 46 -215 67 -73 21 -133 42 -133\r
46 0 5 4 9 8 9 4 0 78 39 162 86 223 125 314 174 323 174 5 0 6 -8 3 -17z\r
m-8376 -30 c0 -7 -4 -13 -9 -13 -5 0 -8 12 -8 26 0 18 2 22 8 13 5 -8 9 -20 9\r
-26z m486 0 c-11 -11 -19 6 -11 24 8 17 8 17 12 0 3 -10 2 -21 -1 -24z m424\r
32 c0 -12 -30 -62 -43 -74 -12 -10 -18 -8 -31 11 -22 30 -20 43 7 56 23 11 67\r
16 67 7z m-603 -27 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m728\r
-12 c7 -35 1 -56 -16 -56 -5 0 -9 8 -10 18 0 13 -2 14 -6 2 -9 -23 -45 -60\r
-60 -60 -7 0 -13 9 -13 19 0 11 -7 27 -15 35 -14 14 -14 19 -1 43 12 24 21 28\r
64 31 l51 3 6 -35z m-858 2 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1\r
-19z m627 5 c-1 -7 -2 -29 -2 -48 -1 -19 -7 -35 -13 -35 -6 0 -8 10 -5 23 3\r
12 3 17 0 10 -3 -7 -14 -2 -30 13 -27 28 -30 40 -11 48 21 9 62 1 61 -11z\r
m305 7 c11 0 9 -4 -5 -15 -26 -19 -31 -19 -45 6 -10 20 -9 21 12 16 13 -4 30\r
-7 38 -7z m1325 -17 c-8 -33 -41 -83 -55 -83 -20 0 -7 43 24 75 17 19 33 35\r
35 35 1 0 -1 -12 -4 -27z m-2210 1 c9 -24 7 -82 -3 -88 -11 -7 -21 27 -21 72\r
0 34 14 43 24 16z m166 -5 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10\r
9 6 -3 10 -10 10 -16z m1083 -11 l82 -31 -30 -14 c-16 -7 -46 -11 -65 -8 -32\r
4 -33 4 -10 -6 13 -5 36 -7 50 -4 23 5 23 5 -5 -13 -51 -31 -64 -33 -75 -11\r
-6 11 -9 25 -7 32 2 7 -2 17 -8 22 -13 10 -29 65 -20 65 3 0 43 -14 88 -32z\r
m911 11 c-14 -15 -19 -17 -26 -7 -13 21 -10 26 17 26 25 0 25 -1 9 -19z\r
m-2454 -9 c0 -11 -2 -20 -4 -20 -2 0 -6 9 -9 20 -3 11 -1 20 4 20 5 0 9 -9 9\r
-20z m106 -17 c-6 -14 -9 -15 -16 -4 -11 19 -1 46 13 32 5 -5 7 -18 3 -28z\r
m1664 24 c0 -25 -54 -67 -78 -60 -31 8 -28 14 21 45 49 31 57 33 57 15z m6741\r
-207 c25 -107 45 -197 43 -199 -2 -2 -37 9 -79 24 -71 26 -76 30 -71 54 3 14\r
15 98 27 185 13 87 25 153 28 145 2 -8 26 -102 52 -209z m-8276 181 c-9 -16\r
-25 -3 -18 15 4 10 9 12 15 6 6 -6 7 -15 3 -21z m285 14 c0 -8 -4 -15 -10 -15\r
-5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m222 -21 c-4 -37 -9 -41\r
-28 -22 -13 13 -14 20 -4 37 16 30 36 20 32 -15z m461 24 c-4 -7 -8 -19 -10\r
-27 -2 -14 -21 -31 -35 -31 -13 0 -9 18 5 27 8 4 16 16 20 26 3 9 11 17 17 17\r
6 0 8 -5 3 -12z m112 2 c-8 14 -5 13 60 -12 l56 -21 -5 -41 c-4 -41 -44 -136\r
-57 -136 -3 0 -19 28 -34 63 -15 34 -36 79 -46 100 -26 51 -24 59 7 47 16 -7\r
23 -7 19 0z m1105 -15 c0 -19 -55 -75 -75 -75 -16 0 -16 2 0 28 40 63 75 85\r
75 47z m-1725 -4 c-3 -6 -11 -8 -17 -5 -6 4 -5 9 3 15 16 10 23 4 14 -10z\r
m110 11 c14 -10 45 -59 45 -71 0 -6 -12 -18 -26 -28 -26 -16 -27 -16 -45 6\r
-21 26 -24 53 -9 82 11 20 19 23 35 11z m495 -103 c28 -57 41 -93 30 -79 l-21\r
25 15 -31 c15 -30 14 -32 -14 -52 -15 -12 -39 -24 -53 -27 -34 -9 -52 23 -42\r
79 3 22 8 68 11 101 5 62 13 100 20 92 2 -2 27 -50 54 -108z m548 34 c-21 -20\r
-45 -6 -51 30 -7 49 3 54 36 17 25 -28 27 -34 15 -47z m430 21 c31 -25 29 -29\r
-15 -39 -30 -6 -33 -4 -52 34 -12 22 -21 45 -21 51 0 12 43 -11 88 -46z\r
m-1868 30 c0 -8 -4 -12 -10 -9 -5 3 -10 10 -10 16 0 5 5 9 10 9 6 0 10 -7 10\r
-16z m58 -14 c-1 -39 -18 -51 -18 -12 0 25 7 42 16 42 1 0 2 -14 2 -30z m82\r
-2 c0 -5 -7 -8 -15 -8 -15 0 -20 21 -8 33 7 7 23 -11 23 -25z m354 16 c8 -22\r
-4 -40 -15 -23 -11 18 -11 39 0 39 5 0 12 -7 15 -16z m1316 -91 c0 -13 -15\r
-19 -82 -32 -34 -6 -48 -5 -48 3 0 23 49 114 67 125 16 9 21 4 40 -37 13 -26\r
23 -52 23 -59z m-2193 75 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z\r
m1184 -50 c-6 -17 -11 -62 -11 -99 0 -54 -3 -69 -15 -69 -8 0 -20 10 -26 23\r
-12 21 -11 21 6 7 17 -14 17 -14 7 7 -15 27 -16 139 -2 148 6 3 15 -4 20 -17\r
l11 -23 -5 24 c-3 12 1 35 7 49 12 26 12 26 15 4 2 -13 -1 -37 -7 -54z m4140\r
41 c17 -18 66 -73 111 -123 44 -50 142 -156 217 -235 75 -80 127 -141 116\r
-137 -11 4 -53 14 -95 22 -136 28 -313 76 -348 94 -34 18 -35 18 -56 -2 -18\r
-18 -30 -19 -91 -14 -38 3 -140 17 -225 30 -85 14 -168 25 -185 24 -27 0 -309\r
123 -359 158 -17 11 -15 13 20 23 22 6 219 50 439 97 220 47 402 87 404 90 10\r
10 25 2 52 -27z m269 -19 c129 -22 273 -46 319 -52 46 -7 85 -17 87 -22 8 -22\r
70 -477 66 -481 -3 -3 -10 2 -16 11 -7 8 -39 19 -76 24 -148 21 -154 25 -318\r
198 -129 135 -270 291 -322 356 -14 17 -13 18 5 13 11 -4 126 -25 255 -47z\r
m-5220 10 c7 -12 6 -21 -4 -29 -10 -8 -16 -5 -24 15 -7 14 -12 29 -12 34 0 15\r
29 0 40 -20z m278 22 c13 -9 5 -47 -21 -100 -11 -23 -12 -22 -34 20 -28 54\r
-28 62 0 76 27 13 38 14 55 4z m313 -24 c5 -19 3 -28 -8 -33 -25 -9 -55 40\r
-36 59 14 14 37 0 44 -26z m792 15 c2 -10 5 -31 6 -47 1 -24 -1 -27 -14 -16\r
-8 7 -13 16 -10 20 3 4 -5 10 -17 13 -21 6 -21 7 -3 27 22 25 32 25 38 3z\r
m322 -13 c-26 -27 -30 -29 -37 -13 -11 28 -9 31 15 36 48 9 50 7 22 -23z\r
m4580 -52 c3 -46 5 -194 3 -331 l-3 -247 -125 111 c-69 61 -212 183 -317 272\r
-106 88 -193 164 -193 168 0 3 48 14 108 23 59 9 188 32 287 50 254 48 232 53\r
240 -46z m-5545 58 c0 -15 -18 -31 -26 -23 -7 7 7 37 17 37 5 0 9 -6 9 -14z\r
m335 -54 c-3 -3 -13 1 -21 10 -11 11 -14 23 -8 39 7 23 8 23 21 -10 8 -18 11\r
-36 8 -39z m-1530 -1 c-10 -9 -25 14 -24 37 l1 27 13 -30 c7 -16 12 -32 10\r
-34z m289 37 c16 -19 17 -20 1 -15 -9 4 -21 7 -26 7 -5 0 -9 7 -9 15 0 21 12\r
19 34 -7z m26 12 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0\r
10 -4 10 -10z m520 -81 c0 -9 -69 -33 -76 -27 -2 3 3 22 11 43 23 54 11 54\r
-14 -1 -27 -56 -34 -54 -20 6 19 79 17 79 60 31 21 -24 39 -47 39 -52z m1251\r
41 c4 -25 2 -47 -3 -48 -4 -2 -15 -10 -23 -19 -13 -13 -18 -12 -45 7 -29 20\r
-60 67 -60 89 0 12 34 19 85 17 40 -1 40 -1 46 -46z m29 -28 c-10 -15 -11 -14\r
-7 5 3 13 1 26 -4 29 -5 3 -9 15 -8 27 0 18 3 16 15 -11 11 -25 12 -37 4 -50z\r
m344 41 c-29 -21 -34 -15 -11 12 12 13 24 19 26 13 2 -6 -4 -17 -15 -25z\r
m-2314 3 c-5 -13 -6 -27 -3 -30 4 -3 1 -6 -5 -6 -7 0 -12 2 -12 4 0 11 20 56\r
25 56 2 0 0 -11 -5 -24z m1547 -9 c-2 -18 -12 -47 -23 -63 -12 -16 -24 -38\r
-28 -49 -7 -19 -9 -18 -33 10 l-25 30 16 -32 c20 -40 20 -43 -2 -43 -13 0 -22\r
12 -30 39 -16 53 -16 67 2 52 10 -9 15 -8 19 3 4 9 -1 16 -11 18 -13 3 63 47\r
115 67 1 1 1 -14 0 -32z m35 1 c-9 -9 -12 -7 -12 12 0 19 3 21 12 12 9 -9 9\r
-15 0 -24z m-1094 0 c6 -13 23 -38 38 -55 45 -55 20 -37 -31 22 -27 32 -41 55\r
-32 55 7 0 19 -10 25 -22z m362 2 c7 -13 7 -20 1 -20 -6 0 -15 9 -21 20 -7 13\r
-7 20 -1 20 6 0 15 -9 21 -20z m-585 0 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10\r
0 6 2 10 4 10 3 0 8 -4 11 -10z m200 -30 c21 -22 36 -43 32 -46 -10 -11 -55 5\r
-84 30 -24 20 -25 26 -14 40 19 22 22 21 66 -24z m595 -11 c0 -54 -10 -57 -30\r
-9 -10 24 -10 33 0 45 22 26 30 16 30 -36z m617 4 c5 -13 -68 -27 -108 -21\r
l-24 3 33 33 32 34 32 -19 c17 -10 33 -23 35 -30z m-865 -7 c-3 -5 -9 -1 -12\r
10 -4 10 -5 23 -2 28 3 5 9 1 12 -10 4 -10 5 -23 2 -28z m188 37 c-1 -5 -9\r
-24 -20 -43 l-18 -35 -7 28 c-5 17 -3 33 5 42 13 16 40 21 40 8z m751 -16\r
c-12 -12 -45 -1 -37 12 3 5 15 7 27 4 13 -4 17 -9 10 -16z m49 -8 c0 -12 -4\r
-17 -11 -13 -8 4 -9 0 -4 -15 4 -14 -1 -33 -15 -56 -45 -73 -52 -17 -9 72 21\r
43 39 49 39 12z m573 -141 c-6 -95 -16 -222 -20 -282 l-8 -108 -123 136 c-68\r
76 -122 140 -120 145 2 4 50 50 108 103 58 52 119 114 135 137 17 22 32 41 35\r
41 3 0 0 -78 -7 -172z m-52 133 c-26 -37 -212 -213 -218 -207 -3 3 16 41 41\r
86 50 89 50 90 37 90 -5 0 -30 -40 -55 -90 -26 -49 -51 -90 -56 -90 -13 0 -37\r
39 -45 71 -5 22 0 32 32 59 39 33 30 32 -19 -2 -31 -21 -48 -17 -48 12 0 23\r
16 28 105 36 102 8 107 9 145 26 29 13 85 34 98 37 2 1 -6 -12 -17 -28z\r
m-1533 -9 c5 -30 -35 -50 -57 -27 -15 15 -14 17 9 35 30 23 44 21 48 -8z m132\r
-3 c-12 -42 -17 -45 -25 -18 -5 16 -2 26 11 36 24 17 24 18 14 -18z m428 -7\r
l-23 -26 28 17 28 18 19 -43 19 -43 -32 -6 c-18 -3 -42 -11 -53 -17 -19 -10\r
-23 -9 -28 11 -3 12 1 32 10 44 8 13 12 23 9 23 -3 0 2 14 10 30 9 17 20 28\r
26 24 6 -4 1 -16 -13 -32z m857 28 c-3 -5 -17 -10 -31 -10 -14 0 -22 4 -19 10\r
3 6 17 10 31 10 14 0 22 -4 19 -10z m-2047 -9 c8 -5 12 -17 10 -27 -4 -23 -38\r
-32 -38 -10 0 9 5 16 11 16 8 0 8 5 -1 15 -14 16 -3 20 18 6z m1678 -18 c-7\r
-7 -26 7 -26 19 0 6 6 6 15 -2 9 -7 13 -15 11 -17z m-806 -29 c19 -44 26 -84\r
15 -84 -3 0 -21 7 -40 14 -40 17 -44 38 -17 85 9 17 18 31 19 31 1 0 11 -21\r
23 -46z m-1120 20 c0 -8 -5 -12 -10 -9 -6 4 -8 11 -5 16 9 14 15 11 15 -7z\r
m77 -6 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m334 -31 c-8 -8\r
-11 -4 -11 14 0 33 14 47 18 19 2 -12 -1 -27 -7 -33z m557 9 c2 -27 0 -37 -9\r
-34 -15 5 -31 57 -23 70 12 19 29 0 32 -36z m852 37 c0 -5 -5 -15 -10 -23 -8\r
-12 -10 -11 -10 8 0 12 5 22 10 22 6 0 10 -3 10 -7z m1238 -278 c73 -292 139\r
-546 148 -569 4 -10 -14 -15 -78 -20 -429 -34 -759 -60 -902 -73 l-79 -6 58\r
79 c33 43 100 135 150 203 67 93 157 193 359 398 148 150 270 272 271 271 2\r
-2 35 -129 73 -283z m165 199 c111 -48 216 -93 234 -100 l31 -13 -29 -91 c-16\r
-50 -54 -171 -85 -268 -74 -236 -123 -336 -150 -309 -9 9 -214 819 -214 845 0\r
12 2 22 5 22 3 0 97 -39 208 -86z m-2759 60 c20 -19 23 -62 4 -46 -7 6 -17 11\r
-23 11 -5 1 -10 6 -9 11 1 6 2 17 3 25 1 19 6 19 25 -1z m566 -34 c-7 -17 -17\r
-29 -22 -28 -11 4 -11 7 4 49 7 21 14 27 21 20 7 -7 6 -20 -3 -41z m-230 36\r
c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m128\r
-29 c2 -15 -1 -27 -7 -27 -6 0 -11 5 -11 11 0 5 -4 7 -10 4 -21 -13 -31 7 -14\r
26 22 25 38 20 42 -14z m858 8 c12 -50 -14 -65 -116 -65 -75 0 -84 6 -63 41\r
10 17 27 32 38 34 11 2 29 6 40 8 11 3 37 5 57 6 32 1 39 -3 44 -24z m166 9\r
c37 -19 28 -28 -39 -39 -29 -5 -43 -3 -43 4 0 7 6 14 14 17 8 3 12 12 9 20 -7\r
19 20 18 59 -2z m4286 -143 c294 -251 435 -375 439 -387 2 -6 -20 -23 -49 -39\r
-29 -16 -102 -57 -161 -93 -60 -35 -110 -62 -113 -60 -2 3 -8 28 -14 57 -15\r
80 -110 194 -110 132 0 -26 -10 -51 -21 -51 -5 0 -9 6 -9 13 0 8 -16 28 -36\r
46 -19 18 -39 43 -44 55 -5 13 -20 104 -35 202 -38 250 -42 284 -38 284 2 0\r
88 -72 191 -159z m-5848 134 c0 -8 -4 -15 -9 -15 -13 0 -22 16 -14 24 11 11\r
23 6 23 -9z m165 -14 c-5 13 -1 15 20 12 33 -7 40 -19 20 -39 -14 -15 -19 -14\r
-50 11 -19 14 -35 31 -35 37 0 6 11 1 26 -13 16 -15 23 -18 19 -8z m154 3\r
c-28 -14 -32 -13 -24 8 4 10 14 14 27 10 20 -5 20 -5 -3 -18z m100 -10 c-17\r
-21 -87 -40 -100 -27 -13 13 27 40 67 45 38 5 48 0 33 -18z m1234 -2 c4 8 6 7\r
6 -4 1 -10 -3 -18 -7 -18 -12 0 -32 22 -32 35 0 5 7 2 14 -8 11 -14 15 -15 19\r
-5z m-1805 -21 c-2 -9 -13 -17 -26 -19 -25 -4 -27 1 -12 28 12 23 43 15 38 -9z\r
m142 9 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11\r
-10z m580 -40 c0 -8 -10 -35 -21 -60 l-20 -44 -18 29 -18 30 31 6 31 6 -32 2\r
c-34 1 -40 7 -53 50 l-8 28 54 -16 c35 -10 54 -21 54 -31z m-138 10 l-27 -6\r
33 -7 c17 -3 32 -11 32 -17 0 -11 -55 -12 -83 -1 -16 6 -13 10 19 34 28 19 40\r
23 46 14 5 -8 -1 -14 -20 -17z m228 20 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10\r
10 0 6 5 10 10 10 6 0 10 -4 10 -10z m979 -23 c9 -12 2 -23 -40 -61 -45 -41\r
-79 -58 -79 -40 0 6 18 40 53 101 19 34 37 34 66 0z m2542 -61 l194 -93 -60\r
-6 c-33 -4 -158 -9 -278 -13 -254 -7 -242 -18 -128 111 39 44 71 83 71 88 0 4\r
2 7 3 7 2 0 91 -42 198 -94z m3330 77 c-6 -10 -63 -103 -128 -207 l-118 -190\r
-52 -11 c-29 -7 -59 -17 -67 -24 -13 -11 -30 10 -110 130 -53 79 -92 146 -88\r
150 4 3 120 39 257 79 138 40 259 76 270 81 35 14 47 11 36 -8z m161 -123 c68\r
-77 124 -147 126 -154 2 -9 -9 -17 -30 -21 -18 -4 -58 -16 -88 -26 -58 -19\r
-378 -74 -386 -66 -3 3 25 54 62 113 37 60 92 151 123 202 31 50 59 92 63 92\r
3 0 62 -63 130 -140z m61 90 c159 -47 247 -78 247 -88 0 -8 -145 -135 -159\r
-140 -7 -2 -57 51 -194 211 -33 37 -53 65 -45 62 7 -2 75 -23 151 -45z m-7963\r
30 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z\r
m194 -6 c4 -10 1 -14 -6 -12 -15 5 -23 28 -10 28 5 0 13 -7 16 -16z m81 -20\r
c8 -43 0 -54 -20 -28 -15 20 -19 46 -8 57 13 14 21 6 28 -29z m1515 31 c0 -12\r
-53 -111 -64 -117 -19 -13 -24 -9 -35 23 -18 52 -14 69 22 84 32 14 77 20 77\r
10z m2383 -19 c-10 -12 -47 -57 -82 -99 -57 -68 -69 -78 -120 -93 -31 -9 -82\r
-27 -114 -39 l-58 -24 -97 35 c-53 20 -153 59 -222 87 l-125 52 80 12 c44 7\r
190 26 325 43 135 16 277 34 315 39 39 4 81 9 93 10 23 1 23 1 5 -23z m-3798\r
2 c35 -16 34 -42 -2 -33 -23 5 -26 4 -15 -6 14 -15 16 -29 3 -29 -8 0 -31 52\r
-31 71 0 12 14 11 45 -3z m83 0 c-2 -7 5 -12 15 -10 9 2 17 -2 17 -8 0 -15\r
-37 -12 -43 4 -3 8 -3 17 0 20 10 9 13 7 11 -6z m397 2 c4 -6 15 -8 25 -5 12\r
4 26 -2 39 -16 12 -13 21 -17 21 -11 0 7 9 12 20 12 14 0 20 -7 20 -21 0 -18\r
-3 -19 -15 -9 -8 6 -18 9 -23 6 -6 -3 -28 1 -50 8 -22 8 -49 12 -61 9 -16 -4\r
-19 -1 -14 16 6 22 27 28 38 11z m353 -13 c5 -23 -44 -45 -61 -28 -9 10 -7 17\r
12 32 27 22 44 21 49 -4z m142 10 c0 -12 -60 -37 -89 -37 -20 0 -11 19 17 34\r
34 19 72 20 72 3z m586 2 c3 -6 2 -15 -4 -21 -5 -5 -8 -27 -5 -47 4 -29 1 -39\r
-11 -44 -13 -5 -16 1 -16 33 0 21 4 41 9 44 5 3 7 15 4 26 -6 21 11 28 23 9z\r
m-1611 -29 c19 -37 19 -46 -2 -54 -22 -9 -29 1 -36 47 -7 47 15 51 38 7z m210\r
20 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m875\r
1 c0 -5 -6 -14 -14 -20 -11 -9 -16 -9 -21 0 -4 6 -1 15 6 20 18 11 29 11 29 0z\r
m184 -7 c9 -4 16 -18 16 -33 0 -29 -53 -121 -69 -121 -6 0 -28 33 -50 73 l-41\r
72 48 6 c74 9 79 9 96 3z m-1514 -26 c0 -13 -4 -29 -9 -36 -6 -10 -11 -5 -20\r
19 -14 41 -14 39 9 39 14 0 20 -7 20 -22z m958 -10 c-22 -14 -38 -9 -38 12 0\r
17 3 18 25 8 19 -8 22 -14 13 -20z m436 -43 c25 -42 46 -80 46 -85 0 -13 -44\r
-13 -91 2 l-39 11 0 54 c0 53 12 93 29 93 4 0 29 -34 55 -75z m186 65 c0 -5\r
-9 -24 -20 -42 -13 -21 -20 -27 -20 -16 0 9 5 20 10 23 6 3 10 15 10 26 0 10\r
5 19 10 19 6 0 10 -4 10 -10z m-1460 -22 c0 -19 -2 -20 -10 -8 -13 19 -13 30\r
0 30 6 0 10 -10 10 -22z m230 12 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6\r
5 10 10 10 6 0 10 -4 10 -10z m932 -47 c2 -32 3 -60 1 -62 -2 -3 -17 6 -34 18\r
-39 29 -50 20 -13 -11 53 -45 64 -58 64 -81 0 -31 -26 -65 -38 -52 -11 12 -57\r
156 -53 169 1 4 -4 14 -10 22 -7 8 -9 18 -5 22 7 7 63 30 78 31 3 1 8 -25 10\r
-56z m525 -7 c-3 -8 -17 -11 -37 -8 l-33 5 34 32 34 32 3 -24 c2 -14 1 -30 -1\r
-37z m-1747 15 c0 -33 -18 -79 -21 -56 -7 43 -2 92 9 92 7 0 12 -14 12 -36z\r
m50 -27 c0 -22 -23 -49 -37 -42 -5 1 -5 28 0 57 9 53 10 54 23 30 7 -13 13\r
-34 14 -45z m438 -18 c62 -81 62 -80 34 -125 -5 -8 -103 93 -118 121 -19 36\r
-18 65 3 77 10 5 19 9 19 8 1 -1 29 -37 62 -81z m91 32 c12 -21 13 -33 2 -67\r
l-12 -42 -52 68 c-29 37 -56 73 -59 79 -5 7 11 7 50 -1 44 -9 60 -17 71 -37z\r
m207 24 c11 -6 27 -19 37 -30 17 -19 16 -20 -48 -46 -80 -32 -98 -32 -114 -2\r
-11 19 -10 28 3 54 26 51 60 57 122 24z m199 6 c19 -5 19 -5 1 -13 -18 -8 -36\r
7 -36 30 0 6 4 5 8 -1 4 -7 16 -14 27 -16z m68 -5 c-7 -3 -13 -11 -13 -18 0\r
-8 -5 -26 -11 -42 -8 -21 -12 -24 -19 -13 -6 10 -4 20 6 31 8 9 12 23 9 32 -4\r
10 0 17 12 19 21 5 34 -3 16 -9z m-923 -35 c0 -4 -7 -8 -15 -8 -10 0 -15 10\r
-15 28 1 26 1 26 15 8 8 -11 15 -23 15 -28z m216 10 c-3 -18 -11 -37 -18 -43\r
-8 -7 -9 -5 -4 8 3 10 6 30 6 43 0 13 5 24 11 24 8 0 9 -11 5 -32z m589 21 c9\r
-14 7 -15 -37 -23 -43 -8 -53 9 -15 24 30 12 45 12 52 -1z m605 -29 c0 -13 -1\r
-13 -10 0 -5 8 -10 22 -10 30 0 13 1 13 10 0 5 -8 10 -22 10 -30z m-1224 -11\r
c-8 -48 -33 -102 -45 -95 -4 3 -9 30 -10 60 -2 43 2 57 16 65 37 21 46 14 39\r
-30z m1533 4 c2 -2 -8 -3 -22 -3 -21 0 -27 5 -27 22 0 21 0 21 23 2 12 -10 24\r
-20 26 -21z m-829 18 c0 -14 -18 -23 -30 -16 -6 4 -8 11 -5 16 8 12 35 12 35\r
0z m114 -43 c14 -29 29 -72 35 -95 8 -38 7 -42 -8 -33 -27 14 -101 98 -101\r
114 0 28 20 66 34 66 8 0 26 -24 40 -52z m386 32 c0 -5 -4 -10 -10 -10 -5 0\r
-10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-1856 -16 c11 -27 7 -37 -9\r
-24 -16 14 -20 40 -6 40 5 0 12 -7 15 -16z m56 9 c0 -5 -5 -15 -10 -23 -8 -12\r
-10 -11 -10 8 0 12 5 22 10 22 6 0 10 -3 10 -7z m1275 -37 c15 -22 13 -30 -21\r
-120 -32 -83 -40 -97 -58 -94 -19 3 -22 14 -34 107 -7 58 -11 110 -8 117 7 18\r
67 33 89 22 9 -5 24 -19 32 -32z m721 28 c13 -3 21 -10 18 -15 -6 -10 -104\r
-13 -104 -3 0 13 35 33 48 29 8 -3 25 -8 38 -11z m1679 -56 c83 -32 172 -69\r
200 -82 l49 -23 -39 -25 c-70 -44 -258 -155 -320 -189 -139 -77 -250 -136\r
-252 -135 -2 1 149 480 162 514 6 16 10 15 200 -60z m-3310 52 c3 -5 1 -10 -4\r
-10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m157 -15 c4 -16 1 -25\r
-8 -25 -17 0 -27 17 -20 35 8 23 23 18 28 -10z m1238 10 c0 -8 -9 -19 -21 -25\r
-20 -11 -20 -11 -4 14 20 30 25 32 25 11z m6702 -14 c36 -12 71 -27 76 -34 13\r
-16 61 -231 52 -235 -4 -1 -33 13 -66 33 -32 20 -75 41 -95 47 l-36 10 -7 82\r
c-4 44 -10 92 -13 105 -4 18 -2 23 8 19 8 -3 44 -15 81 -27z m-6667 9 c-3 -5\r
-11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m75 0 c0 -5\r
-2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m30 6 c0\r
-3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m200 0\r
c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z\r
m-1620 -10 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2\r
10 -4z m190 -132 c0 -7 -9 -14 -20 -17 -14 -4 -23 1 -31 16 -10 21 -10 21 5 3\r
21 -26 22 2 1 30 -18 23 -19 45 -3 79 12 26 13 25 30 -37 10 -34 18 -68 18\r
-74z m1158 113 c1 -19 -6 -26 -35 -35 -20 -6 -39 -9 -41 -7 -11 11 11 37 40\r
50 18 8 33 14 33 15 0 0 2 -11 3 -23z m239 17 c-3 -3 -12 -4 -19 -1 -8 3 -5 6\r
6 6 11 1 17 -2 13 -5z m6298 -56 c3 -35 9 -76 12 -92 l5 -28 -43 6 c-77 12\r
-139 28 -139 36 0 9 141 139 152 140 3 0 9 -28 13 -62z m-7965 43 c0 -15 -42\r
-41 -67 -41 -33 0 -28 14 10 33 37 18 57 21 57 8z m380 -112 c0 -3 -12 -6 -27\r
-7 -16 0 -37 -2 -47 -4 -20 -3 -21 0 -40 102 l-6 35 60 -60 c33 -33 60 -62 60\r
-66z m345 111 c8 -13 22 -180 15 -180 -3 0 -39 31 -80 69 l-75 69 55 26 c61\r
28 76 31 85 16z m1083 -42 c26 -29 85 -92 131 -141 59 -62 80 -91 73 -100 -18\r
-24 -238 -323 -267 -364 -32 -45 -39 -47 -159 -59 l-69 -7 6 34 c4 19 11 77\r
17 129 22 196 27 215 119 392 47 92 90 168 94 168 4 0 29 -24 55 -52z m-2168\r
32 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z\r
m898 -47 c-18 -23 -28 -14 -28 25 l0 37 20 -25 c13 -18 16 -28 8 -37z m935 25\r
c-7 -40 -13 -49 -13 -20 0 11 -3 27 -6 36 -4 10 -1 16 10 16 12 0 14 -7 9 -32z\r
m5317 -243 c-85 -254 -148 -396 -175 -394 -10 1 -150 152 -264 285 l-61 71\r
178 91 c97 50 229 120 292 155 63 35 116 63 117 62 2 -1 -38 -122 -87 -270z\r
m194 145 c48 -71 89 -136 92 -143 4 -11 -11 -16 -64 -21 -60 -6 -77 -12 -123\r
-46 -47 -36 -54 -38 -69 -25 -22 20 -30 19 -31 -2 -1 -16 -2 -16 -6 -2 -2 10\r
16 77 41 150 24 74 49 153 56 177 6 23 12 42 15 42 2 0 42 -58 89 -130z\r
m-5948 -35 c-9 -14 -21 -25 -26 -25 -10 0 -90 152 -90 171 0 7 30 -18 66 -54\r
67 -66 67 -66 50 -92z m617 25 c-54 -103 -68 -124 -71 -102 -1 15 11 63 26\r
107 23 63 35 85 62 103 18 12 37 22 42 22 5 0 -21 -58 -59 -130z m-1617 95\r
c-8 -30 10 -34 19 -4 11 34 35 3 35 -45 l-1 -41 -20 28 c-11 15 -25 25 -30 21\r
-5 -3 -9 0 -9 6 0 6 -10 8 -25 4 -30 -7 -34 10 -8 38 25 27 47 24 39 -7z m440\r
-1 c-4 -9 -9 -15 -11 -12 -3 3 -3 13 1 22 4 9 9 15 11 12 3 -3 3 -13 -1 -22z\r
m858 -1 c-9 -37 -9 -37 -35 -23 l-22 12 24 19 c33 26 40 24 33 -8z m281 12 c0\r
-10 -125 -59 -132 -51 -3 3 -2 19 2 36 l7 31 61 -3 c34 -2 62 -7 62 -13z\r
m2745 5 c0 -5 -12 -10 -27 -9 -25 0 -26 1 -8 9 27 12 35 12 35 0z m-3194 -14\r
c11 -8 35 -16 53 -18 l33 -3 -56 -37 c-44 -30 -56 -34 -56 -21 0 9 10 27 22\r
40 12 13 16 23 10 23 -6 0 -14 -4 -17 -10 -11 -18 -25 -10 -25 15 0 29 7 31\r
36 11z m3453 -22 c3 -3 -11 -3 -31 0 -21 3 -54 8 -73 11 -19 3 -37 9 -39 14\r
-6 8 134 -16 143 -25z m-4649 19 c-1 -19 -19 -35 -30 -28 -10 6 -9 11 5 22 22\r
15 25 16 25 6z m942 -28 c-4 -5 -9 -44 -12 -85 l-5 -75 -30 4 c-16 1 -33 5\r
-37 7 -3 2 9 41 28 85 43 101 45 104 55 88 4 -7 5 -18 1 -24z m522 -3 c-4 -15\r
-13 -34 -20 -42 -12 -13 -16 -12 -33 5 -31 32 -29 46 9 60 43 15 52 11 44 -23z\r
m3061 8 c31 -15 44 -25 34 -28 -9 -1 -34 9 -55 23 -66 45 -63 45 21 5z m-4828\r
-27 c-3 -10 -5 -2 -5 17 0 19 2 27 5 18 2 -10 2 -26 0 -35z m529 20 c-10 -10\r
-19 5 -10 18 6 11 8 11 12 0 2 -7 1 -15 -2 -18z m4241 -6 c42 -29 25 -33 -37\r
-11 -50 18 -60 28 -37 37 16 7 36 0 74 -26z m494 16 c13 -15 12 -15 -11 -3\r
-34 17 -36 20 -18 20 9 0 22 -7 29 -17z m-5213 -29 c-3 -14 -5 -12 -10 9 -3\r
19 -2 25 4 19 6 -6 8 -18 6 -28z m144 14 c-7 -7 -12 -8 -12 -2 0 14 12 26 19\r
19 2 -3 -1 -11 -7 -17z m250 -29 l-10 -34 -1 45 c-1 31 2 41 10 33 7 -7 7 -21\r
1 -44z m543 -14 c44 -36 82 -70 83 -75 9 -27 -163 10 -193 41 -36 37 -42 73\r
-13 87 13 6 28 11 33 11 6 1 46 -28 90 -64z m941 -6 c-10 -32 -15 -38 -18 -24\r
-2 11 -7 -17 -11 -62 -12 -135 -24 -146 -57 -48 -17 52 -19 69 -10 80 21 25\r
33 17 16 -10 -9 -14 -12 -25 -7 -25 8 0 24 32 26 52 0 4 15 21 33 39 17 17 32\r
36 32 42 0 5 -24 -13 -54 -42 -30 -28 -57 -51 -60 -51 -3 0 -6 17 -6 38 0 37\r
1 38 58 57 68 24 77 17 58 -46z m-1989 39 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13\r
3 -3 4 -12 1 -19z m4133 12 c0 -5 -12 -10 -27 -9 -25 0 -26 1 -8 9 27 12 35\r
12 35 0z m138 -17 c10 -14 10 -19 0 -22 -7 -2 -16 -9 -20 -14 -4 -7 -21 -4\r
-47 8 -41 18 -52 38 -28 49 22 10 82 -3 95 -21z m162 17 c0 -5 -4 -10 -10 -10\r
-5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m137 4 c-3 -3 -12 -4 -19\r
-1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m47 -9 c-10 -8 -25 -15 -33 -15 -11 0 -9\r
4 5 15 10 8 25 15 33 15 11 0 9 -4 -5 -15z m-4284 -11 c0 -21 -18 -54 -30 -54\r
-11 0 -13 30 -4 54 8 21 34 21 34 0z m510 6 c0 -5 -4 -10 -10 -10 -5 0 -10 5\r
-10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m515 -82 c12 -27 19 -48 15 -48 -4 0\r
-22 -3 -39 -6 l-31 -6 0 60 c0 33 3 68 7 78 6 15 8 15 17 -7 5 -13 19 -45 31\r
-71z m2975 71 c0 -10 -12 -11 -34 -3 -25 10 -19 22 9 16 14 -2 25 -8 25 -13z\r
m330 15 c0 -10 -28 -34 -41 -34 -8 0 -5 8 7 19 19 20 34 26 34 15z m58 -16 c4\r
-19 -24 -31 -45 -20 -13 8 -13 11 2 26 20 19 39 17 43 -6z m607 1 c11 -10 -45\r
-12 -70 -3 -13 5 -14 8 -3 15 14 9 57 2 73 -12z m-5395 -17 c0 -15 -2 -15 -10\r
-2 -13 20 -13 33 0 25 6 -3 10 -14 10 -23z m102 -7 c3 -14 2 -25 -2 -25 -9 0\r
-20 25 -20 46 0 23 17 7 22 -21z m348 19 c0 -8 -4 -12 -10 -9 -5 3 -10 10 -10\r
16 0 5 5 9 10 9 6 0 10 -7 10 -16z m174 -31 c-15 -22 -19 -25 -22 -11 -5 26\r
17 63 30 50 8 -8 5 -19 -8 -39z m1138 39 c16 -7 16 -10 -1 -47 -26 -59 -43\r
-70 -94 -59 -32 7 -43 14 -45 31 -3 17 8 29 45 52 49 31 65 35 95 23z m2818\r
-2 c-20 -13 -43 -13 -35 0 3 6 16 10 28 10 18 0 19 -2 7 -10z m-4250 -21 c0\r
-6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10 -11 10 -16z m194 -1\r
c18 -25 20 -46 6 -68 -8 -12 -15 -9 -44 19 -28 28 -33 38 -25 53 13 25 45 23\r
63 -4z m434 -7 l22 -30 -30 11 c-36 12 -47 27 -29 39 8 5 14 9 15 9 0 0 10\r
-13 22 -29z m3872 19 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6\r
0 11 -4 11 -10z m-4775 -38 c-8 -8 -25 10 -25 26 0 13 2 13 14 -4 8 -10 13\r
-21 11 -22z m1775 -3 c0 -11 -4 -19 -10 -19 -5 0 -10 5 -10 10 0 6 -4 10 -10\r
10 -5 0 -9 -10 -7 -21 1 -12 -3 -24 -10 -26 -9 -3 -9 5 -1 34 5 21 12 42 15\r
46 8 13 33 -14 33 -34z m74 -7 c-4 -15 -6 -32 -5 -39 1 -6 -3 -14 -9 -18 -5\r
-3 -10 1 -10 9 0 8 -5 18 -10 21 -7 4 -9 -2 -5 -18 5 -17 2 -26 -9 -30 -23 -9\r
-46 2 -46 23 0 26 22 40 55 34 25 -4 27 -3 15 11 -11 13 -10 19 6 36 21 24 30\r
11 18 -29z m2274 39 c11 -7 10 -10 -3 -15 -20 -7 -38 1 -30 15 7 11 16 11 33\r
0z m446 -16 c-16 -25 -35 -30 -36 -10 -1 8 37 34 50 35 1 0 -5 -11 -14 -25z\r
m519 8 c9 -3 17 -9 17 -14 0 -5 -8 -9 -17 -9 -19 1 -53 23 -53 35 0 4 8 4 18\r
0 9 -4 25 -10 35 -12z m-4718 -20 c-8 -35 -45 -76 -45 -51 0 21 32 78 44 78 4\r
0 5 -12 1 -27z m246 11 c12 -14 11 -16 -5 -13 -11 2 -21 10 -24 17 -5 17 13\r
15 29 -4z m910 -17 c-16 -16 -26 0 -10 19 9 11 15 12 17 4 2 -6 -1 -17 -7 -23z\r
m2543 24 c3 -4 3 -10 0 -13 -7 -8 -54 3 -54 13 0 12 47 12 54 0z m391 -6 c-31\r
-13 -50 -11 -40 6 4 5 21 9 38 8 l32 -1 -30 -13z m169 0 c23 -18 21 -21 -21\r
-30 -36 -7 -38 -4 -23 26 13 23 19 23 44 4z m400 4 c14 -7 27 -18 31 -26 4\r
-12 0 -14 -22 -8 -31 7 -53 23 -53 36 0 12 14 11 44 -2z m-4214 -8 c0 -15 -20\r
-24 -21 -9 0 7 -5 3 -11 -10 -8 -17 -16 -21 -32 -16 -19 6 -19 5 -7 -10 12\r
-15 12 -19 -2 -33 -14 -14 -17 -13 -32 22 -12 31 -13 40 -3 47 18 11 38 10 38\r
-3 0 -6 7 -3 16 5 17 17 54 22 54 7z m-584 -26 c7 -29 1 -41 -15 -30 -14 8\r
-14 55 -1 55 5 0 12 -11 16 -25z m649 13 c16 -7 25 -19 25 -35 0 -30 -3 -29\r
-34 12 -30 38 -29 40 9 23z m3334 -6 c22 -10 38 -22 34 -25 -10 -10 -66 -8\r
-83 3 -12 8 -12 10 -1 10 11 0 11 3 1 15 -17 20 -1 19 49 -3z m185 9 c6 -9\r
-27 -21 -59 -21 -20 1 -20 1 -1 15 22 17 52 20 60 6z m116 -5 c0 -8 6 -16 13\r
-19 6 -2 9 -8 5 -12 -5 -5 -27 -2 -50 5 l-43 13 30 13 c39 17 45 17 45 0z\r
m756 -7 c3 -5 -6 -9 -20 -9 -24 0 -41 12 -30 23 7 7 43 -3 50 -14z m-4850 -31\r
c-7 -5 -5 -8 6 -8 30 0 29 -18 -1 -52 l-30 -33 -28 28 -28 28 22 18 c12 10 20\r
21 16 24 -3 4 -3 13 1 22 5 14 8 14 30 -2 16 -12 20 -20 12 -25z m259 32 c3\r
-5 -1 -10 -9 -10 -8 0 -18 5 -21 10 -3 6 1 10 9 10 8 0 18 -4 21 -10z m225\r
-77 c0 -5 -83 5 -105 14 -10 3 -8 13 8 38 l22 34 38 -40 c20 -22 37 -42 37\r
-46z m580 65 c0 -6 -3 -8 -7 -5 -3 4 -12 -2 -20 -13 -8 -11 -19 -20 -24 -20\r
-5 0 0 13 12 30 21 28 39 32 39 8z m2475 12 c-3 -5 -10 -10 -16 -10 -5 0 -9 5\r
-9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z m175 0 c0 -5 -2 -10 -4 -10 -3 0 -8 5\r
-11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m615 0 c9 -14 -13 -40 -34 -40 -9 0\r
-23 5 -31 10 -13 8 -12 11 5 24 23 18 51 20 60 6z m93 2 c9 -6 5 -12 -13 -20\r
-35 -16 -55 -15 -55 2 0 21 45 32 68 18z m72 -8 c0 -2 -7 -4 -15 -4 -8 0 -15\r
4 -15 10 0 5 7 7 15 4 8 -4 15 -8 15 -10z m290 6 c0 -5 -2 -10 -4 -10 -3 0 -8\r
5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m190 -6 c0 -2 -7 -4 -15 -4 -8 0\r
-15 4 -15 10 0 5 7 7 15 4 8 -4 15 -8 15 -10z m372 1 c28 -7 80 -55 59 -55\r
-17 0 -108 48 -117 61 -4 7 0 9 12 6 11 -4 31 -9 46 -12z m2398 0 c-28 -16\r
-60 -20 -44 -6 8 9 36 18 59 19 6 1 -1 -5 -15 -13z m-8170 -11 c0 -8 -4 -12\r
-10 -9 -5 3 -10 10 -10 16 0 5 5 9 10 9 6 0 10 -7 10 -16z m150 -9 c0 -14 -2\r
-25 -4 -25 -2 0 -6 11 -8 25 -3 14 -1 25 3 25 5 0 9 -11 9 -25z m490 14 c0 -6\r
14 -31 31 -56 25 -35 29 -47 18 -53 -17 -11 -32 -2 -25 17 6 15 -8 49 -31 71\r
-15 16 -17 32 -3 32 6 0 10 -5 10 -11z m4715 1 c3 -6 -5 -10 -19 -10 -14 0\r
-28 5 -31 10 -3 6 5 10 19 10 14 0 28 -4 31 -10z m-4747 -12 c21 -21 13 -30\r
-20 -23 -41 9 -46 14 -28 25 20 13 34 12 48 -2z m4557 2 c3 -5 -3 -10 -14 -10\r
-12 0 -21 5 -21 10 0 6 6 10 14 10 8 0 18 -4 21 -10z m3065 0 c0 -5 -7 -10\r
-15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m-8158 -35 c5\r
-40 -8 -48 -18 -11 -5 22 0 46 10 46 2 0 6 -16 8 -35z m630 10 c6 -14 8 -28 4\r
-33 -9 -8 -36 26 -36 45 0 22 20 14 32 -12z m254 -10 c18 -44 18 -44 -7 -38\r
-11 3 -18 11 -15 19 3 7 1 16 -4 19 -13 8 -13 35 1 35 5 0 17 -16 25 -35z\r
m604 25 c0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9 0 16 -4 16\r
-10z m2510 -4 c0 -8 -4 -18 -10 -21 -6 -4 -7 1 -3 11 5 13 3 16 -10 11 -9 -3\r
-17 -2 -17 3 0 6 9 10 20 10 11 0 20 -6 20 -14z m400 2 c30 -10 32 -12 14 -19\r
-27 -11 -112 -11 -118 0 -4 5 6 14 21 19 38 14 45 14 83 0z m815 2 c3 -5 1\r
-10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-5321 -15 c3\r
-8 1 -15 -4 -15 -6 0 -10 7 -10 15 0 8 2 15 4 15 2 0 6 -7 10 -15z m4981 4\r
c11 -17 -1 -21 -46 -14 -29 5 -38 10 -28 16 19 12 66 11 74 -2z m65 7 c0 -3\r
-4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m338 -7\r
c-2 -6 -8 -10 -13 -10 -5 0 -11 4 -13 10 -2 6 4 11 13 11 9 0 15 -5 13 -11z\r
m122 -4 c0 -13 -4 -14 -20 -5 -11 6 -20 13 -20 15 0 3 9 5 20 5 11 0 20 -7 20\r
-15z m440 0 c23 -9 28 -14 15 -14 -11 0 -31 6 -45 14 -31 18 -16 18 30 0z\r
m-5890 -16 c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10 -11\r
10 -16z m1052 5 c70 -8 79 -14 84 -52 3 -26 -2 -34 -32 -52 -32 -21 -36 -21\r
-59 -6 -14 9 -32 29 -42 44 -9 15 -25 35 -35 45 -25 25 -23 40 5 33 13 -3 48\r
-8 79 -12z m461 -4 c7 0 17 -8 24 -19 11 -17 9 -18 -29 -9 -23 5 -47 7 -55 4\r
-24 -9 -14 9 15 26 15 9 29 13 30 7 2 -5 9 -9 15 -9z m2410 13 c-7 -2 -19 -2\r
-25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m187 -3 c-19 -13 -30 -13 -30 0 0 6\r
10 10 23 10 18 0 19 -2 7 -10z m505 -4 c-31 -21 -63 -28 -70 -15 -10 16 14 29\r
55 29 32 0 33 -1 15 -14z m965 -22 c37 -22 38 -30 5 -38 -30 -8 -65 8 -65 30\r
0 8 -7 17 -15 20 -8 4 -15 10 -15 14 0 11 52 -4 90 -26z m118 16 c7 -11 10\r
-20 6 -20 -13 0 -44 21 -44 30 0 17 25 11 38 -10z m-5090 -17 c22 -31 25 -62\r
8 -88 -9 -14 -20 -25 -24 -25 -8 0 -72 119 -72 134 0 15 74 -3 88 -21z m1147\r
-13 c8 0 15 -5 15 -11 0 -7 -7 -8 -17 -4 -10 5 -33 13 -50 19 -34 11 -47 32\r
-14 21 11 -3 23 0 27 6 5 9 10 6 15 -9 5 -12 15 -22 24 -22z m105 26 c0 -8 -4\r
-17 -9 -21 -12 -7 -24 12 -16 25 9 15 25 12 25 -4z m2445 4 c8 -13 -5 -13 -25\r
0 -13 8 -13 10 2 10 9 0 20 -4 23 -10z m400 -12 c6 -6 5 -12 -5 -18 -18 -12\r
-36 -7 -32 9 3 14 -15 15 -23 1 -3 -5 -21 -10 -38 -10 l-32 1 35 19 c34 18 74\r
18 95 -2z m686 -4 l24 -27 -40 7 c-45 8 -60 19 -51 35 12 19 42 12 67 -15z\r
m2869 13 c19 5 27 -7 14 -20 -10 -9 -44 12 -43 26 0 8 2 9 5 1 3 -7 14 -10 24\r
-7z m-7990 -12 c0 -8 -2 -15 -4 -15 -2 0 -6 7 -10 15 -3 8 -1 15 4 15 6 0 10\r
-7 10 -15z m1329 4 c37 -13 37 -13 12 -38 -20 -20 -20 -19 -40 15 -22 37 -20\r
39 28 23z m2264 4 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m314\r
1 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m343 -4 c0 -5 -7 -10\r
-15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m658 -20 c19 -25\r
20 -28 5 -23 -10 4 -31 17 -46 30 l-29 23 24 0 c15 0 33 -11 46 -30z m95 8\r
c18 -9 18 -11 1 -29 -21 -24 -25 -24 -52 1 -32 30 -29 52 6 44 15 -4 35 -11\r
45 -16z m722 12 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4\r
11 -10z m2225 1 c0 -17 -34 -22 -49 -6 -14 13 -12 15 17 15 18 0 32 -4 32 -9z\r
m-7709 -28 c7 -16 15 -31 17 -34 1 -4 -8 -6 -20 -5 -18 1 -24 8 -26 34 -4 39\r
10 42 29 5z m3734 17 c3 -5 -1 -10 -9 -10 -9 0 -16 5 -16 10 0 6 4 10 9 10 6\r
0 13 -4 16 -10z m640 -11 c5 -5 -1 -9 -15 -10 -53 -3 -84 6 -75 21 7 12 74 3\r
90 -11z m110 0 c-8 -12 -45 -12 -45 0 0 10 30 20 43 14 4 -3 5 -9 2 -14z m470\r
11 c3 -6 -1 -7 -9 -4 -18 7 -21 14 -7 14 6 0 13 -4 16 -10z m41 -17 c-7 -7\r
-26 7 -26 19 0 6 6 6 15 -2 9 -7 13 -15 11 -17z m2434 17 c0 -5 -5 -10 -11\r
-10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m214 4 c24 -9 19 -24 -8\r
-24 -31 0 -56 10 -56 21 0 10 40 12 64 3z m-7313 -19 l46 -6 7 -52 c3 -29 8\r
-67 12 -83 5 -26 2 -32 -22 -43 -25 -11 -30 -9 -66 26 -42 41 -78 101 -78 131\r
0 24 20 43 40 38 8 -2 36 -7 61 -11z m399 5 c8 -5 11 -10 5 -10 -5 0 -20 -3\r
-32 -6 -17 -5 -23 -2 -23 10 0 18 27 21 50 6z m125 -17 c-3 -16 -18 -48 -33\r
-73 l-27 -45 -3 34 c-2 19 -1 49 3 67 5 31 11 35 59 43 4 0 5 -11 1 -26z m29\r
12 c-4 -8 -8 -15 -10 -15 -2 0 -4 7 -4 15 0 8 4 15 10 15 5 0 7 -7 4 -15z\r
m410 -7 c-8 -28 -12 -33 -20 -25 -4 4 -2 13 4 20 7 8 9 17 5 20 -3 4 -1 7 6 7\r
8 0 10 -8 5 -22z m2006 12 c-8 -5 -19 -10 -25 -10 -5 0 -3 5 5 10 8 5 20 10\r
25 10 6 0 3 -5 -5 -10z m2166 -4 c13 -10 16 -18 9 -25 -7 -6 -20 -1 -40 15\r
-27 21 -28 24 -9 24 11 0 29 -6 40 -14z m-4083 -46 c5 -21 2 -26 -13 -27 -10\r
-1 -24 5 -31 13 -8 10 -8 14 0 14 6 0 11 -4 11 -10 0 -5 5 -10 12 -10 8 0 6 6\r
-4 16 -13 13 -14 21 -5 35 13 20 20 13 30 -31z m3027 40 c0 -5 -4 -10 -10 -10\r
-5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m855 0 c3 -5 2 -10 -4\r
-10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m260 0 c3 -5 1 -10\r
-4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m1988 3 c-7 -2 -19\r
-2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m297 3 c0 -3 -4 -8 -10 -11 -5 -3\r
-10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m110 -6 c0 -5 -2 -10 -4 -10 -3\r
0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-8088 -17 c23 -20 23 -33 1\r
-33 -28 0 -44 15 -37 33 8 21 13 21 36 0z m108 10 c0 -20 -22 -83 -28 -83 -4\r
0 -13 9 -20 21 -12 18 -11 24 9 45 22 24 39 31 39 17z m544 -50 c20 -18 36\r
-36 36 -41 0 -4 -15 -16 -32 -25 -18 -9 -41 -22 -50 -29 -9 -7 -19 -10 -21 -8\r
-3 3 -8 40 -12 83 l-7 79 25 -14 c13 -7 41 -27 61 -45z m-8 30 c-7 -7 -26 7\r
-26 19 0 6 6 6 15 -2 9 -7 13 -15 11 -17z m194 17 c0 -5 -5 -10 -11 -10 -5 0\r
-7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m116 -6 c-3 -9 -6 -42 -6 -75 0\r
-34 -4 -59 -10 -59 -11 0 -60 95 -60 117 0 6 12 16 28 21 41 15 55 14 48 -4z\r
m239 6 c42 -16 40 -35 -12 -104 l-48 -66 -23 52 c-12 29 -20 58 -17 66 2 7 1\r
11 -4 7 -12 -7 -19 15 -13 38 3 13 15 17 48 17 23 0 54 -4 69 -10z m160 -2\r
c32 -14 31 -19 -5 -96 -17 -35 -30 -71 -31 -80 0 -10 -13 19 -29 63 -16 44\r
-25 81 -20 83 6 2 20 12 32 22 28 23 22 22 53 8z m145 3 c0 -6 -4 -13 -10 -16\r
-5 -3 -10 1 -10 9 0 9 5 16 10 16 6 0 10 -4 10 -9z m3222 -3 c-9 -9 -15 -9\r
-24 0 -9 9 -7 12 12 12 19 0 21 -3 12 -12z m583 2 c3 -5 1 -10 -4 -10 -6 0\r
-11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m2635 0 c0 -5 -7 -10 -16 -10 -8\r
0 -12 5 -9 10 3 6 10 10 16 10 5 0 9 -4 9 -10z m-8235 -10 c3 -5 1 -10 -4 -10\r
-6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m65 -18 c0 -15 -2 -15 -10\r
-2 -13 20 -13 33 0 25 6 -3 10 -14 10 -23z m4258 19 c2 -1 0 -5 -3 -11 -4 -6\r
5 -10 20 -10 14 0 24 -4 21 -9 -4 -5 0 -11 6 -14 7 -2 -4 -8 -24 -12 -20 -4\r
-41 -4 -47 0 -15 9 -14 28 2 22 6 -3 21 -8 32 -12 l20 -7 -20 17 c-14 11 -30\r
14 -52 10 -31 -6 -73 10 -73 28 0 7 75 5 118 -2z m140 -10 c3 -8 -1 -12 -9 -9\r
-7 2 -15 10 -17 17 -3 8 1 12 9 9 7 -2 15 -10 17 -17z m843 -29 c-19 -2 -45\r
-1 -60 3 l-26 7 24 17 c23 18 25 18 60 -3 l36 -21 -34 -3z m77 30 c5 -16 -7\r
-15 -38 3 l-25 15 29 -3 c17 -2 32 -9 34 -15z m51 5 c6 -8 8 -17 4 -20 -7 -8\r
-33 11 -33 24 0 13 16 11 29 -4z m236 1 c15 -7 33 -25 41 -40 l15 -28 -51 31\r
c-65 40 -69 66 -5 37z m120 -6 c-3 -3 -11 0 -18 7 -9 10 -8 11 6 5 10 -3 15\r
-9 12 -12z m2505 8 c0 -5 -7 -10 -16 -10 -8 0 -12 5 -9 10 3 6 10 10 16 10 5\r
0 9 -4 9 -10z m180 0 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10\r
6 0 10 -4 10 -10z m-8526 -25 c9 -13 16 -31 16 -39 0 -28 -19 -26 -35 3 -28\r
55 -13 85 19 36z m703 -15 c-14 -20 -15 -20 -20 -1 -6 23 13 45 26 32 6 -6 3\r
-18 -6 -31z m3265 28 c-9 -9 -15 -9 -24 0 -9 9 -7 12 12 12 19 0 21 -3 12 -12z\r
m258 2 c8 -5 12 -11 10 -14 -8 -7 -60 6 -60 15 0 12 31 11 50 -1z m370 0 c-18\r
-11 -60 -13 -60 -2 0 4 17 8 38 9 27 2 33 0 22 -7z m1454 -5 c3 -8 1 -15 -4\r
-15 -6 0 -10 7 -10 15 0 8 2 15 4 15 2 0 6 -7 10 -15z m55 -18 c0 -21 -1 -21\r
-9 -2 -12 28 -12 37 0 30 6 -3 10 -16 9 -28z m1811 23 c0 -5 -5 -10 -11 -10\r
-5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m210 6 c0 -9 -30 -14 -35 -6\r
-4 6 3 10 14 10 12 0 21 -2 21 -4z m360 -28 c0 -12 -14 -10 -28 4 -19 19 -14\r
29 8 16 11 -7 20 -16 20 -20z m-6670 -13 c0 -7 -9 -22 -20 -35 l-20 -23 5 34\r
c5 31 4 30 -18 -16 -13 -27 -34 -59 -46 -69 -21 -19 -21 -19 -21 4 0 12 12 48\r
26 80 l26 58 34 -11 c19 -6 34 -16 34 -22z m1945 26 c-2 -5 -16 -11 -30 -13\r
-18 -4 -23 -2 -16 6 11 13 54 19 46 7z m110 -1 c-3 -5 -11 -10 -16 -10 -6 0\r
-7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m1125 -5 c0 -9 -6 -12 -15 -9 -8\r
4 -15 10 -15 15 0 5 7 9 15 9 8 0 15 -7 15 -15z m109 1 c16 -19 -4 -32 -24\r
-16 -8 6 -18 9 -23 6 -5 -3 -18 1 -28 9 -18 13 -16 14 22 15 24 0 47 -6 53\r
-14z m62 -6 l24 -19 -27 -1 c-17 0 -31 7 -38 20 -14 27 9 27 41 0z m2623 5\r
c-4 -8 -17 -15 -30 -15 -28 0 -32 16 -6 23 33 9 41 7 36 -8z m167 0 c0 -6 -10\r
-12 -23 -13 -19 -4 -20 -2 -9 12 15 17 33 18 32 1z m104 5 c3 -5 -1 -10 -9\r
-10 -9 0 -16 5 -16 10 0 6 4 10 9 10 6 0 13 -4 16 -10z m135 0 c0 -5 -2 -10\r
-4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-7692 -43 c16\r
-50 22 -107 12 -107 -5 0 -21 16 -36 35 -25 33 -26 38 -15 76 14 45 25 44 39\r
-4z m735 -28 c22 -39 37 -73 34 -76 -11 -11 -47 19 -48 40 -1 18 -2 19 -6 4\r
-3 -11 -10 -16 -20 -13 -8 3 -17 6 -19 6 -2 0 -4 25 -4 55 0 75 16 71 63 -16z\r
m201 -24 c22 -71 20 -90 -11 -116 -26 -20 -26 -21 -5 -16 18 4 22 1 23 -21 0\r
-26 1 -26 9 -4 5 12 11 22 14 22 5 0 46 -68 46 -77 0 -3 -7 0 -15 7 -14 11\r
-19 7 -16 -12 2 -13 -10 -9 -36 12 -14 11 -31 20 -37 20 -6 0 -3 -7 8 -15 11\r
-8 16 -21 13 -30 -4 -8 -2 -15 2 -15 5 0 11 5 13 11 2 6 14 2 28 -11 14 -12\r
19 -18 12 -15 -7 4 -22 -1 -32 -10 -11 -10 -24 -14 -32 -9 -10 6 -10 4 1 -9\r
11 -14 11 -18 -3 -23 -23 -9 -26 -3 -17 36 4 19 4 46 1 60 -5 18 -1 32 14 49\r
12 13 15 21 8 17 -8 -5 -29 7 -55 30 -75 67 -78 88 -18 167 35 47 36 48 52 26\r
9 -12 24 -45 33 -74z m2626 88 c-52 -17 -70 -21 -70 -17 0 8 43 23 65 23 13\r
-1 15 -2 5 -6z m385 -3 c3 -5 2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10\r
5 0 13 -4 16 -10z m488 3 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13\r
-5z m324 -8 c8 -9 13 -18 11 -21 -3 -2 -13 5 -23 16 -21 23 -11 27 12 5z m408\r
-5 c37 -31 2 -32 -62 -4 -18 8 -33 17 -33 19 0 9 82 -4 95 -15z m480 -47 c-6\r
-25 -8 -26 -15 -8 -4 11 -10 34 -14 50 l-7 30 22 -22 c17 -17 20 -27 14 -50z\r
m2125 57 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10\r
-10z m35 0 c3 -5 -1 -10 -9 -10 -9 0 -16 5 -16 10 0 6 4 10 9 10 6 0 13 -4 16\r
-10z m270 0 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11\r
-10z m-3059 -28 c-22 -5 -30 3 -21 18 5 8 11 7 22 -2 15 -12 14 -13 -1 -16z\r
m2649 17 c10 -15 -1 -23 -20 -15 -9 3 -13 10 -10 16 8 13 22 13 30 -1z m-7845\r
-65 c0 -58 -14 -72 -25 -24 -8 36 3 93 16 84 5 -3 9 -30 9 -60z m223 38 c-2\r
-13 3 -22 11 -22 22 0 28 -31 10 -51 -21 -24 -34 -16 -34 21 0 16 -5 41 -10\r
55 -9 23 -8 26 7 23 12 -3 17 -12 16 -26z m120 -2 c-7 -28 -13 -25 -13 6 0 14\r
4 23 9 20 5 -3 7 -15 4 -26z m497 -10 c0 -22 -1 -40 -3 -40 -2 0 -18 11 -36\r
24 l-32 24 28 15 c41 22 43 21 43 -23z m2940 25 c0 -8 -9 -15 -20 -15 -20 0\r
-26 11 -13 23 12 13 33 7 33 -8z m56 0 c16 -12 17 -14 2 -15 -9 0 -23 -3 -32\r
-6 -12 -4 -16 0 -16 15 0 25 18 27 46 6z m1745 4 c11 -5 17 -14 14 -20 -11\r
-16 -44 -10 -55 11 -9 16 -8 20 5 20 9 0 25 -5 36 -11z m735 -186 c-17 -106\r
-35 -195 -38 -199 -10 -9 -298 108 -298 121 0 7 5 26 11 44 9 26 35 45 153\r
115 144 85 199 116 203 112 1 -1 -13 -88 -31 -193z m1764 188 c0 -5 -7 -14\r
-15 -21 -8 -7 -15 -10 -15 -7 0 3 -2 12 -5 19 -4 9 2 14 15 15 11 1 20 -2 20\r
-6z m-8341 -49 c1 -7 -3 -10 -9 -7 -5 3 -10 18 -9 33 0 24 1 25 9 7 5 -11 9\r
-26 9 -33z m331 27 c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3\r
10 -11 10 -16z m1234 -93 c16 -26 16 -26 -9 -36 -15 -6 -31 -10 -36 -10 -5 0\r
-8 -5 -6 -10 1 -6 -13 -20 -32 -32 l-34 -22 5 22 c4 15 2 22 -8 22 -28 0 -13\r
48 31 106 25 31 45 62 46 68 0 6 6 -10 13 -36 7 -25 20 -58 30 -72z m239 95\r
c32 -21 25 -31 -35 -50 -40 -13 -60 -31 -34 -31 8 0 27 5 41 12 37 17 42 2 10\r
-32 -34 -36 -45 -38 -39 -7 4 20 4 20 -5 2 -4 -11 -7 -23 -5 -26 4 -8 -36 -44\r
-59 -52 -16 -6 -16 -4 -2 30 22 51 12 52 -18 1 -25 -40 -26 -41 -27 -16 0 18\r
9 33 30 48 17 12 30 18 30 14 0 -3 7 -1 15 6 8 6 14 15 13 18 -2 12 42 102 50\r
102 4 0 20 -8 35 -19z m2182 9 c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11\r
10 16 10 6 0 7 -4 4 -10z m1268 3 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19\r
-2 13 -5z m2007 -13 c-8 -5 -17 -7 -19 -4 -3 3 1 9 9 14 8 5 17 7 19 4 3 -3\r
-1 -9 -9 -14z m135 10 c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16\r
10 6 0 7 -4 4 -10z m885 -5 c0 -9 -9 -15 -22 -16 -21 0 -21 -1 -4 -8 14 -5 16\r
-10 8 -15 -13 -8 -32 0 -32 14 0 11 29 40 41 40 5 0 9 -7 9 -15z m-7980 -20\r
c5 3 18 -8 29 -24 21 -30 28 -85 12 -95 -16 -10 -41 5 -45 28 -7 32 -15 124\r
-9 103 2 -9 8 -15 13 -12z m266 -23 c-12 -11 -18 7 -10 30 l8 23 4 -23 c2 -13\r
1 -26 -2 -30z m109 26 c3 -13 6 -43 7 -68 3 -40 0 -45 -19 -48 -22 -3 -23 0\r
-23 61 0 35 3 67 7 70 12 13 23 7 28 -15z m3512 7 c0 -8 -4 -15 -8 -15 -4 0\r
-9 7 -13 15 -3 9 0 15 8 15 7 0 13 -7 13 -15z m388 5 c3 -5 -1 -10 -10 -10 -9\r
0 -13 5 -10 10 3 6 8 10 10 10 2 0 7 -4 10 -10z m90 0 c4 -6 -6 -10 -24 -10\r
-16 0 -33 5 -36 10 -4 6 6 10 24 10 16 0 33 -4 36 -10z m679 4 c22 -9 20 -24\r
-3 -24 -21 0 -34 13 -24 24 8 7 8 7 27 0z m823 -41 c-3 -10 -5 -2 -5 17 0 19\r
2 27 5 18 2 -10 2 -26 0 -35z m606 -121 c77 -88 114 -138 110 -148 -4 -11 0\r
-15 13 -12 13 2 18 -2 16 -13 -1 -9 7 -24 18 -34 11 -10 20 -13 20 -7 0 6 -6\r
12 -12 15 -7 2 -10 8 -6 12 4 4 16 -3 27 -16 19 -23 19 -24 1 -31 -35 -13\r
-269 -8 -375 8 l-30 4 32 193 c18 105 33 194 33 197 0 6 23 -19 153 -168z\r
m907 153 c-7 -9 -15 -13 -17 -11 -7 7 7 26 19 26 6 0 6 -6 -2 -15z m110 6 c0\r
-5 -7 -12 -16 -15 -14 -5 -15 -4 -4 9 14 17 20 19 20 6z m580 -1 c0 -5 -5 -10\r
-11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-4633 -6 c-3 -3 -12\r
-4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m2061 -6 c18 -18 15 -28 -8 -28\r
-10 0 -24 9 -30 20 -9 17 -8 20 8 20 10 0 23 -5 30 -12z m222 -20 c0 -6 -7 -5\r
-15 2 -8 7 -15 17 -15 22 0 6 7 5 15 -2 8 -7 15 -17 15 -22z m1570 28 c0 -2\r
-7 -7 -16 -10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z m240 0 c0 -3 -4 -8 -10 -11\r
-5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m60 0 c0 -2 -7 -7 -16\r
-10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z m75 -17 c-4 -5 -16 -9 -28 -9 -21 1\r
-21 1 -3 15 20 15 41 11 31 -6z m-2486 -3 c10 -12 8 -13 -8 -9 -12 3 -21 9\r
-21 14 0 14 16 11 29 -5z m113 -34 c-14 -4 -62 16 -62 27 0 6 7 7 17 4 12 -5\r
14 -3 8 8 -5 8 4 3 19 -11 15 -13 23 -26 18 -28z m2618 32 c0 -2 -9 -4 -20 -4\r
-11 0 -20 4 -20 9 0 5 9 7 20 4 11 -3 20 -7 20 -9z m-7580 -51 c0 -31 -3 -53\r
-7 -49 -8 7 -12 86 -6 99 10 17 13 4 13 -50z m370 45 c0 -9 3 -8 10 2 17 27\r
22 2 6 -29 -9 -16 -16 -42 -16 -56 0 -22 -3 -25 -22 -20 -22 6 -22 5 -4 -9 10\r
-8 22 -17 26 -18 3 -2 26 -30 50 -62 28 -38 39 -61 31 -64 -7 -2 -17 -10 -24\r
-16 -9 -10 -30 6 -95 72 l-83 86 24 20 c13 12 29 29 36 38 11 15 10 16 -18 5\r
-17 -6 -31 -15 -31 -19 0 -4 -4 -8 -10 -8 -24 0 -6 21 48 54 63 39 72 42 72\r
24z m4896 -16 c-9 -9 -37 8 -31 18 5 8 11 7 21 -1 8 -6 12 -14 10 -17z m1247\r
13 c4 -8 2 -17 -3 -20 -6 -4 -10 3 -10 14 0 25 6 27 13 6z m102 5 c-3 -5 -11\r
-10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m785 0 c8 -5 12\r
-12 8 -15 -10 -10 -49 5 -43 16 8 11 16 11 35 -1z m50 0 c0 -5 -7 -7 -15 -4\r
-8 4 -15 8 -15 10 0 2 7 4 15 4 8 0 15 -4 15 -10z m-8183 -22 c-3 -8 -6 -5 -6\r
6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m243 1 c0 -5 -4 -9 -10 -9 -5 0 -10 7\r
-10 16 0 8 5 12 10 9 6 -3 10 -10 10 -16z m629 -47 c10 -5 -15 -20 -44 -26\r
l-30 -6 0 49 0 50 35 -32 c19 -18 37 -33 39 -35z m4931 46 c0 -6 -6 -5 -15 2\r
-8 7 -15 14 -15 16 0 2 7 1 15 -2 8 -4 15 -11 15 -16z m1909 -4 c-6 -7 -15\r
-11 -21 -8 -5 3 -4 12 3 20 6 7 15 11 21 8 5 -3 4 -12 -3 -20z m531 16 c0 -5\r
-2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-7540 -37\r
c-1 -31 -3 -35 -11 -20 -6 9 -7 26 -4 37 10 30 15 24 15 -17z m475 20 c19 -9\r
35 -24 35 -32 -1 -13 -4 -12 -16 4 l-16 20 5 -20 c7 -23 10 -75 8 -125 l-2\r
-35 -35 40 c-43 48 -50 76 -34 126 7 21 15 39 16 39 2 0 19 -8 39 -17z m780\r
-139 c-8 -81 -17 -150 -20 -152 -9 -9 -94 -19 -105 -12 -9 6 18 74 110 273 12\r
27 24 47 26 44 3 -3 -2 -71 -11 -153z m1742 150 c-3 -3 -12 -4 -19 -1 -8 3 -5\r
6 6 6 11 1 17 -2 13 -5z m2503 -39 l-8 -40 -1 36 c0 20 2 39 6 42 11 11 11 4\r
3 -38z m1110 35 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4\r
-4 4 -10z m200 6 c0 -11 -19 -15 -25 -6 -3 5 1 10 9 10 9 0 16 -2 16 -4z m260\r
0 c0 -11 -19 -15 -25 -6 -3 5 1 10 9 10 9 0 16 -2 16 -4z m80 -16 c0 -14 -20\r
-22 -37 -16 -12 5 -13 9 -3 21 11 14 40 10 40 -5z m-2593 4 c-3 -3 -12 -4 -19\r
-1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m141 -3 c30 -4 57 -12 60 -18 4 -6 16 -13\r
27 -16 11 -4 -9 -4 -45 0 -36 3 -84 7 -107 8 -46 3 -66 12 -58 26 7 11 48 11\r
123 0z m889 -13 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m1703\r
12 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z\r
m50 -1 c0 -8 4 -8 15 1 8 6 20 8 27 4 9 -6 5 -10 -12 -15 -45 -13 -70 -10 -64\r
6 7 17 34 20 34 4z m-3620 -13 c-10 -9 -47 -16 -100 -18 -91 -5 -84 4 15 20\r
95 15 102 15 85 -2z m71 3 c-16 -6 -28 -6 -35 1 -7 7 1 10 25 9 32 0 33 -1 10\r
-10z m434 2 c-18 -7 -55 -4 -55 5 0 2 17 4 38 3 28 0 32 -2 17 -8z m192 3 c-3\r
-3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m1133 -3 c0 -6 -4 -13 -10\r
-16 -5 -3 -10 1 -10 9 0 9 5 16 10 16 6 0 10 -4 10 -9z m1424 -22 c-7 -11 -44\r
-12 -44 -1 0 4 5 13 12 20 13 13 42 -4 32 -19z m-7654 1 c11 -21 4 -25 -19\r
-11 -7 5 -10 14 -7 20 10 15 14 14 26 -9z m179 -7 c0 -25 -1 -26 -9 -8 -12 27\r
-12 35 0 35 6 0 10 -12 9 -27z m5881 1 c0 -8 -4 -12 -10 -9 -5 3 -10 13 -10\r
21 0 8 5 12 10 9 6 -3 10 -13 10 -21z m1165 16 c3 -5 1 -10 -4 -10 -6 0 -11 5\r
-11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m231 -12 c-10 -6 -20 -7 -24 -3 -9 8\r
20 25 31 18 5 -3 2 -10 -7 -15z m-7386 -40 c0 -5 -4 -8 -10 -8 -5 0 -10 7 -10\r
15 0 8 -4 15 -10 15 -5 0 -10 8 -10 18 0 14 4 12 20 -8 11 -14 20 -28 20 -32z\r
m168 21 c-3 -8 -7 -3 -11 10 -4 17 -3 21 5 13 5 -5 8 -16 6 -23z m1026 5 c21\r
-15 34 -29 29 -33 -6 -3 -13 -16 -17 -29 -4 -12 -19 -36 -34 -53 -23 -29 -27\r
-30 -33 -13 -4 11 -8 42 -8 71 -1 45 1 52 17 47 16 -5 16 -5 0 6 -10 6 -18 15\r
-18 20 0 17 24 11 64 -16z m2261 16 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19\r
12 23 12 15 0z m662 4 c-6 -6 -131 -33 -177 -38 -14 -1 -74 -13 -135 -25 -60\r
-13 -164 -34 -230 -47 -66 -14 -128 -27 -137 -30 -13 -4 -18 0 -18 15 0 14 6\r
21 19 21 11 0 68 18 128 39 131 48 239 64 472 69 46 1 82 -1 78 -4z m1773 -21\r
c20 -26 20 -28 4 -32 -16 -3 -53 33 -54 52 0 17 30 5 50 -20z m36 -10 c-4 -4\r
-11 -1 -16 7 -16 25 -11 35 7 17 9 -9 13 -20 9 -24z m-5507 -15 c1 -5 -3 -8\r
-9 -8 -5 0 -10 12 -9 28 0 24 1 25 9 7 5 -11 9 -23 9 -27z m3152 21 c-30 -10\r
-57 -17 -59 -14 -8 8 61 34 88 34 17 0 8 -7 -29 -20z m829 11 c0 -5 -2 -10 -4\r
-10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m40 6 c0 -3 -4 -8\r
-10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m1017 -10 c0 -8\r
-8 -11 -20 -8 -14 4 -16 7 -5 13 19 12 25 11 25 -5z m383 -1 c7 -8 8 -15 2\r
-15 -5 0 -15 7 -22 15 -7 8 -8 15 -2 15 5 0 15 -7 22 -15z m2640 5 c11 -8 7\r
-9 -15 -4 -37 8 -45 14 -19 14 10 0 26 -5 34 -10z m-8200 -46 c0 -7 6 -15 13\r
-17 8 -4 6 -6 -4 -6 -15 -1 -39 38 -39 62 1 16 30 -23 30 -39z m20 11 c0 -5\r
-5 -3 -10 5 -5 8 -10 20 -10 25 0 6 5 3 10 -5 5 -8 10 -19 10 -25z m220 19 c0\r
-8 -4 -12 -10 -9 -5 3 -10 1 -10 -5 0 -6 -5 -8 -11 -5 -6 5 -4 12 8 21 23 17\r
23 17 23 -2z m50 -25 c0 -23 -28 -25 -36 -4 -4 8 -3 22 0 31 5 13 9 14 21 4 8\r
-7 15 -21 15 -31z m5019 19 c13 -5 22 -10 20 -13 -6 -5 -109 25 -109 32 0 5\r
55 -6 89 -19z m577 -22 c3 -24 0 -35 -12 -40 -20 -8 -34 1 -29 17 28 79 35 83\r
41 23z m34 34 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10\r
-4 10 -10z m1650 -11 c0 -5 -12 -9 -27 -9 -27 1 -27 1 -9 15 19 14 36 12 36\r
-6z m-7790 -10 c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10\r
-11 10 -16z m810 13 c0 -15 -11 -21 -27 -15 -12 5 -12 7 -1 14 17 11 28 11 28\r
1z m5352 -44 c-15 -15 -27 14 -17 40 6 15 8 15 18 -6 7 -16 7 -26 -1 -34z\r
m1009 29 c-10 -9 -11 -8 -5 6 3 10 9 15 12 12 3 -3 0 -11 -7 -18z m-5454 -75\r
c-17 -45 -35 -82 -39 -82 -13 0 -9 49 7 87 13 30 54 82 62 78 2 -1 -12 -38\r
-30 -83z m-959 66 c9 -9 6 -20 -10 -47 -12 -20 -26 -37 -30 -39 -4 -2 -8 -15\r
-8 -28 0 -30 -8 -30 -50 -1 -47 31 -57 50 -42 79 12 22 12 22 7 -5 -4 -19 -2\r
-26 5 -22 5 3 10 13 10 21 0 8 19 24 43 34 49 23 59 24 75 8z m792 -3 c-7 -9\r
-15 -13 -19 -10 -3 3 1 10 9 15 21 14 24 12 10 -5z m1810 11 c0 -3 -4 -8 -10\r
-11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-2756 -15 c9 -15\r
-23 -36 -36 -23 -5 5 -7 15 -4 21 9 13 33 14 40 2z m611 -1 c3 -5 2 -10 -4\r
-10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m2105 0 c0 -5 -12\r
-10 -27 -9 -25 0 -26 1 -8 9 27 12 35 12 35 0z m90 6 c0 -3 -4 -8 -10 -11 -5\r
-3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-3462 -25 c3 -8 -1 -12 -9\r
-9 -7 2 -15 10 -17 17 -3 8 1 12 9 9 7 -2 15 -10 17 -17z m7337 9 c-3 -5 -11\r
-10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m210 0 c-3 -5\r
-11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m-6031 -35\r
c-40 -35 -54 -42 -54 -27 0 10 71 62 84 62 5 0 -8 -16 -30 -35z m108 -9 c6 4\r
6 -2 -1 -15 -15 -27 -19 -27 -31 5 -8 19 -7 31 2 42 11 13 13 12 16 -11 2 -16\r
8 -25 14 -21z m3148 22 c0 -13 -3 -33 -6 -45 -6 -21 -7 -22 -36 -7 -16 9 -32\r
13 -35 10 -3 -3 6 -11 21 -17 14 -7 26 -16 26 -20 0 -20 -59 -44 -158 -65 -59\r
-12 -158 -34 -221 -48 -63 -14 -119 -26 -125 -25 -6 0 -26 18 -44 39 l-33 38\r
43 30 c62 43 158 81 260 103 l89 19 62 -24 c70 -29 88 -29 25 0 l-43 19 35 6\r
c19 4 59 7 88 8 48 1 52 -1 52 -21z m269 8 c17 -20 -6 -31 -111 -55 -154 -35\r
-148 -35 -148 3 0 66 0 66 130 66 90 0 120 -3 129 -14z m96 3 c29 -1 29 -1 -8\r
-11 -40 -11 -67 -6 -67 13 0 7 9 9 23 5 12 -3 36 -6 52 -7z m1920 -31 c-13\r
-81 -65 -176 -65 -120 0 16 61 161 68 162 2 0 1 -19 -3 -42z m-6625 17 c0 -8\r
-4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m64 -1\r
c23 -22 20 -37 -4 -24 -11 6 -20 17 -20 25 0 19 5 19 24 -1z m358 -14 c-2 -25\r
-38 -64 -51 -56 -4 3 -7 -4 -7 -14 0 -19 1 -19 21 0 29 27 32 26 37 -20 2 -23\r
-1 -40 -7 -40 -12 0 -75 37 -75 45 0 2 11 30 25 60 18 43 29 56 42 53 12 -3\r
17 -12 15 -28z m431 2 c15 -15 27 -31 27 -34 0 -4 -26 -10 -57 -13 -32 -4 -66\r
-9 -77 -12 -14 -4 -11 5 15 41 19 25 41 45 50 46 8 0 27 -13 42 -28z m431 3\r
c-8 -13 -12 -30 -8 -36 4 -7 3 -9 -4 -5 -6 3 -19 -5 -29 -18 -26 -33 -49 -20\r
-32 17 14 30 19 32 38 15 11 -11 12 -9 7 8 -6 18 12 36 42 43 1 1 -5 -10 -14\r
-24z m1585 10 c39 -8 77 -12 86 -9 16 7 20 -12 7 -33 -4 -7 -49 -15 -111 -19\r
l-103 -7 21 42 c12 22 23 41 26 41 2 0 35 -7 74 -15z m-2930 -9 c10 -12 8 -17\r
-10 -26 -17 -10 -24 -9 -36 3 -9 8 -12 20 -9 26 10 16 41 14 55 -3z m91 -7 c0\r
-5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10 10 -16z m865 10\r
c11 -17 -1 -21 -15 -4 -8 9 -8 15 -2 15 6 0 14 -5 17 -11z m4885 -3 c0 -8 -4\r
-18 -10 -21 -5 -3 -10 3 -10 14 0 12 5 21 10 21 6 0 10 -6 10 -14z m-5595 -6\r
c3 -5 -3 -10 -14 -10 -12 0 -21 5 -21 10 0 6 6 10 14 10 8 0 18 -4 21 -10z\r
m312 -68 l42 -67 -40 -3 c-50 -4 -69 11 -69 53 0 43 11 97 18 90 4 -3 25 -36\r
49 -73z m4443 61 c59 -6 62 -7 30 -14 -34 -6 -34 -6 12 -8 54 -1 62 -10 54\r
-55 -6 -30 -14 -36 -120 -84 -62 -29 -120 -52 -129 -52 -15 0 -93 127 -84 136\r
3 3 53 -4 111 -15 111 -22 173 -26 193 -13 6 4 -17 7 -50 8 -75 1 -179 22\r
-172 35 3 5 0 6 -8 3 -8 -3 -18 -1 -22 5 -3 6 -24 11 -45 11 -29 0 -42 5 -50\r
20 -8 15 -8 21 2 24 7 3 20 7 28 9 16 6 145 0 250 -10z m-5150 -3 c0 -5 -2\r
-10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m348 -13 c2\r
-12 -1 -15 -12 -11 -19 7 -22 38 -3 32 6 -3 13 -12 15 -21z m997 4 c6 -20 -18\r
-91 -31 -91 -4 0 -19 10 -32 23 -14 12 -22 16 -18 10 4 -7 2 -13 -4 -13 -18 0\r
-1 42 26 68 31 27 51 28 59 3z m5555 15 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10\r
4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-7057 -43 c-5 -14 -8 -14 -19 2 -16 22 -8\r
40 11 25 8 -6 11 -19 8 -27z m974 -89 c-1 -1 -14 0 -29 3 -18 3 -38 22 -62 59\r
-20 29 -36 57 -36 61 0 4 29 -21 65 -57 35 -35 63 -65 62 -66z m4824 108 c-7\r
-2 -18 1 -23 6 -8 8 -4 9 13 5 13 -4 18 -8 10 -11z m-4754 -24 c-3 -7 -5 -2\r
-5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m3971 20 c21 -21 14 -23 -65 -19 -77\r
3 -78 4 -43 16 45 17 93 18 108 3z m-4684 -13 c3 -8 10 -15 16 -15 6 0 8 5 4\r
12 -5 7 -2 8 7 3 25 -15 49 -38 49 -48 0 -6 -10 -1 -23 11 -13 12 -27 19 -30\r
15 -9 -9 -58 18 -51 29 8 13 21 10 28 -7z m91 5 c3 -5 1 -10 -4 -10 -6 0 -11\r
5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m6655 -5 c0 -8 -4 -15 -10 -15 -5 0\r
-7 7 -4 15 4 8 8 15 10 15 2 0 4 -7 4 -15z m-6467 -20 c39 -37 33 -46 -18 -28\r
-48 16 -60 27 -50 43 11 17 39 11 68 -15z m902 -13 c-10 -10 -16 -12 -13 -7 3\r
6 8 19 13 30 5 14 9 16 12 7 3 -8 -3 -21 -12 -30z m2135 28 c0 -17 -30 -24\r
-43 -10 -10 10 -7 11 12 5 16 -5 21 -4 17 4 -4 6 -2 11 3 11 6 0 11 -5 11 -10z\r
m1810 -5 c15 -18 14 -20 -20 -30 -22 -7 -23 -6 -12 8 8 9 11 21 7 27 -10 16\r
11 12 25 -5z m429 -5 c45 -22 71 -46 71 -63 0 -7 -11 0 -24 15 -13 14 -41 35\r
-62 47 -22 11 -35 20 -31 21 4 0 25 -9 46 -20z m201 -21 c0 -25 -19 -34 -37\r
-16 -12 12 -13 19 -3 36 9 18 14 20 26 10 8 -6 14 -20 14 -30z m-6210 -4 c0\r
-5 -5 -3 -10 5 -5 8 -10 20 -10 25 0 6 5 3 10 -5 5 -8 10 -19 10 -25z m297 15\r
c2 -8 -2 -22 -7 -30 -9 -13 -11 -13 -20 0 -16 25 -12 52 7 48 10 -2 19 -10 20\r
-18z m73 -1 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10\r
10 -16z m215 11 c3 -5 2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0 13\r
-4 16 -10z m1185 -25 c8 -25 8 -40 0 -55 -15 -27 -23 -25 -39 11 -11 25 -11\r
35 -1 55 18 33 26 30 40 -11z m3855 25 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10\r
0 6 2 10 4 10 3 0 8 -4 11 -10z m-4245 -25 c0 -58 -46 -103 -93 -91 -28 7 -87\r
63 -87 83 0 7 12 15 28 19 15 3 32 7 37 9 6 2 34 4 63 4 49 1 52 -1 52 -24z\r
m3725 16 l59 -6 44 -74 c33 -57 39 -73 25 -69 -10 3 -91 36 -180 73 -102 43\r
-158 72 -150 77 14 9 115 9 202 -1z m2185 -16 c-7 -9 -15 -13 -18 -10 -3 2 1\r
11 8 20 7 9 15 13 18 10 3 -2 -1 -11 -8 -20z m95 15 c-3 -5 -11 -10 -16 -10\r
-6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m1174 4 c17 -4 31 -10 31\r
-14 0 -9 -55 -32 -82 -35 -9 -1 -30 -7 -45 -14 -25 -10 -37 -7 -101 24 -39 19\r
-72 37 -72 40 0 7 231 6 269 -1z m-6880 -64 l-2 -50 -39 0 c-55 0 -60 22 -13\r
70 21 22 42 37 46 34 5 -3 8 -27 8 -54z m1934 53 c-7 -2 -21 -2 -30 0 -10 3\r
-4 5 12 5 17 0 24 -2 18 -5z m224 -8 c0 -8 -4 -12 -9 -9 -5 3 -6 10 -3 15 9\r
13 12 11 12 -6z m1939 -4 c57 -26 114 -79 135 -126 10 -22 19 -45 19 -51 0\r
-20 -61 -37 -137 -39 -53 -1 -77 -5 -84 -16 -5 -7 -9 -11 -9 -7 0 3 -3 14 -7\r
23 -5 14 -2 16 18 11 22 -7 23 -6 4 5 -11 7 -23 17 -28 23 -7 11 -47 137 -47\r
150 0 4 17 -5 38 -21 58 -46 222 -146 228 -141 2 3 -30 27 -73 53 -43 27 -107\r
69 -141 94 -63 46 -63 46 -35 52 49 11 77 9 119 -10z m670 -38 l136 -58 -89\r
-3 c-93 -4 -192 12 -198 31 -2 7 -6 29 -9 50 -5 29 -3 37 9 37 9 0 77 -26 151\r
-57z m1815 41 c12 -15 21 -104 10 -104 -2 0 -17 12 -34 26 -16 14 -56 39 -88\r
55 -33 16 -59 31 -59 33 0 2 35 4 78 5 63 1 82 -2 93 -15z m-7789 -6 c24 -20\r
60 -78 49 -78 -6 0 -11 4 -11 10 0 5 -13 8 -30 6 -25 -3 -33 2 -50 29 -11 18\r
-20 35 -20 39 0 11 46 6 62 -6z m186 -24 c-10 -10 -28 6 -28 24 0 15 1 15 17\r
-1 9 -9 14 -19 11 -23z m1052 26 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6\r
-1 10 4 10 6 0 11 -4 11 -10z m2167 -27 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2\r
-7 2 -21 0 -30z m1174 -40 l181 -78 -43 -6 c-24 -4 -106 -10 -181 -14 l-137\r
-7 -15 54 c-8 29 -18 70 -22 91 -6 33 -4 37 15 37 12 0 103 -35 202 -77z\r
m1219 20 c0 -10 -6 -10 -25 -1 -26 12 -34 43 -12 51 12 4 36 -28 37 -50z\r
m1844 25 c77 -30 176 -107 176 -136 0 -12 -58 -28 -173 -47 -113 -19 -113 -19\r
-152 58 -28 56 -34 51 -9 -8 17 -40 14 -40 -43 2 l-32 24 16 34 c9 19 20 35\r
24 35 4 0 10 12 14 27 3 15 12 31 18 36 17 11 104 -2 161 -25z m600 12 c69\r
-24 230 -107 251 -130 28 -31 -11 -48 -179 -82 -86 -17 -158 -29 -161 -26 -4\r
4 26 258 30 258 1 0 28 -9 59 -20z m-8380 -33 c9 -23 16 -48 16 -55 0 -20 -19\r
-13 -36 14 -15 22 -15 27 -3 35 11 7 11 9 -3 9 -20 0 -21 2 -12 24 10 26 20\r
19 38 -27z m4494 -19 c7 -35 15 -72 18 -84 5 -19 0 -22 -43 -28 -27 -3 -102\r
-20 -167 -37 -65 -16 -120 -28 -123 -26 -8 9 277 237 296 237 4 0 13 -28 19\r
-62z m788 51 c3 -6 15 -38 24 -70 l18 -59 -50 45 c-28 25 -54 45 -59 45 -5 0\r
-9 7 -9 15 0 27 61 47 76 24z m-5232 -15 c3 -8 2 -12 -4 -9 -6 3 -10 10 -10\r
16 0 14 7 11 14 -7z m416 6 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10\r
10 10 6 0 10 -4 10 -10z m735 0 c3 -6 -2 -8 -12 -5 -10 3 -8 0 5 -6 32 -17 30\r
-59 -2 -59 -13 0 -31 -3 -40 -6 -22 -8 -20 14 4 54 20 33 34 40 45 22z m2115\r
5 c0 -8 -78 -45 -95 -45 -33 0 -12 18 38 32 28 9 53 16 55 17 1 0 2 -1 2 -4z\r
m345 -5 c-3 -5 -16 -10 -28 -9 -20 1 -20 2 3 9 14 4 26 8 28 9 2 1 0 -3 -3 -9z\r
m3898 -35 c-8 -25 -19 -47 -23 -50 -10 -6 -133 46 -126 53 7 7 127 40 148 41\r
16 1 16 -2 1 -44z m433 28 c8 8 96 -36 112 -56 9 -10 8 -18 -4 -33 -15 -18\r
-15 -18 -9 3 5 17 3 22 -8 17 -8 -3 -21 6 -31 20 -9 14 -26 31 -38 37 -15 8\r
-8 -4 20 -35 34 -37 41 -50 32 -61 -8 -10 -8 -14 2 -18 10 -4 10 -8 -2 -16 -9\r
-6 -10 -11 -3 -11 8 0 7 -12 -5 -41 l-16 -41 -18 24 c-17 22 -17 24 3 40 21\r
18 21 18 -11 11 -26 -5 -32 -3 -28 8 3 8 -2 19 -10 25 -9 6 -16 36 -20 80 -5\r
64 -4 68 12 55 9 -8 19 -11 22 -8z m-7774 -10 c8 -10 18 -27 22 -38 4 -11 3\r
-15 -1 -10 -5 6 -19 22 -32 38 -14 15 -20 27 -14 27 5 0 17 -8 25 -17z m288 2\r
c10 -13 9 -15 -9 -15 -12 0 -21 6 -21 15 0 8 4 15 9 15 5 0 14 -7 21 -15z\r
m304 0 c-4 -8 -10 -12 -15 -9 -11 6 -2 24 11 24 5 0 7 -7 4 -15z m336 11 c0\r
-15 -32 -76 -40 -76 -15 0 -12 33 6 58 13 19 34 30 34 18z m2238 -13 c-2 -14\r
-16 -19 -61 -23 -31 -3 -57 -5 -57 -4 0 1 15 11 33 23 41 26 90 28 85 4z m342\r
7 c-8 -5 -19 -10 -25 -10 -5 0 -3 5 5 10 8 5 20 10 25 10 6 0 3 -5 -5 -10z\r
m4530 -9 c0 -10 -3 -39 -6 -65 -6 -38 -11 -46 -28 -47 -17 -1 -17 -2 -3 -6 13\r
-3 17 -15 17 -49 0 -24 -2 -44 -4 -44 -2 0 -16 21 -30 47 -21 36 -24 48 -14\r
55 10 6 10 8 1 8 -13 0 -53 39 -53 51 0 8 99 68 113 69 4 0 7 -8 7 -19z\r
m-7821 0 c8 -5 11 -16 8 -25 -6 -15 -11 -15 -47 4 -22 11 -40 23 -40 25 0 9\r
64 5 79 -4z m959 -19 c4 -25 -13 -30 -22 -6 -9 25 -7 36 7 32 6 -3 13 -14 15\r
-26z m2980 5 c-14 -12 -72 -59 -127 -104 l-101 -82 -48 28 c-78 46 -122 76\r
-122 83 0 4 26 12 58 18 31 7 120 27 197 45 170 41 178 41 143 12z m3782 3\r
c-24 -19 -40 -25 -40 -15 0 5 51 34 60 34 3 0 -6 -8 -20 -19z m-8385 0 c3 -5\r
1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m609 -16 c35\r
-20 45 -29 36 -38 -8 -8 -15 -6 -26 8 -14 19 -14 19 -14 -1 0 -48 -43 -35 -53\r
15 -5 24 -1 42 7 42 2 0 25 -12 50 -26z m537 -44 c6 0 7 5 3 11 -4 7 -1 10 6\r
7 8 -2 16 -10 18 -16 5 -16 -82 -16 -96 1 -8 10 -10 43 -3 67 0 2 15 -12 32\r
-33 17 -20 35 -37 40 -37z m4903 54 c3 -9 6 -28 6 -42 -1 -23 -2 -25 -11 -9\r
-5 9 -7 22 -3 29 4 6 3 8 -3 5 -6 -4 -13 2 -16 13 -6 24 18 28 27 4z m-2138\r
-3 c-3 -5 -16 -11 -28 -14 -22 -6 -22 -5 -4 8 22 17 40 20 32 6z m225 -27 l34\r
-35 -45 3 c-43 3 -45 5 -48 36 -4 43 15 42 59 -4z m-3151 11 c0 -9 -6 -12 -15\r
-9 -8 4 -15 10 -15 15 0 5 7 9 15 9 8 0 15 -7 15 -15z m2845 5 c3 -5 -3 -10\r
-15 -10 -12 0 -18 5 -15 10 3 6 10 10 15 10 5 0 12 -4 15 -10z m1565 -22 c0\r
-53 -11 -78 -36 -84 -25 -6 -154 15 -154 25 0 6 169 89 183 90 4 1 7 -14 7\r
-31z m76 11 c41 -25 101 -103 82 -107 -7 -1 -44 1 -83 5 -77 9 -75 5 -54 86 5\r
20 12 37 16 37 3 0 21 -9 39 -21z m2043 17 c-10 -9 -109 -56 -109 -51 0 6 91\r
54 104 55 5 0 7 -2 5 -4z m-7492 -26 c-1 -11 -5 -20 -9 -20 -4 0 -8 9 -8 20 0\r
11 4 20 9 20 6 0 9 -9 8 -20z m121 -5 c-3 -3 -9 2 -12 12 -6 14 -5 15 5 6 7\r
-7 10 -15 7 -18z m582 10 c0 -8 -4 -15 -9 -15 -13 0 -22 16 -14 24 11 11 23 6\r
23 -9z m63 8 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m151 -8\r
c3 -8 1 -15 -4 -15 -6 0 -10 4 -10 10 0 5 -15 8 -35 5 -19 -2 -37 0 -40 5 -4\r
6 13 10 38 10 31 0 47 -5 51 -15z m96 -6 c0 -6 -4 -7 -10 -4 -5 3 -10 2 -10\r
-4 0 -15 23 -26 28 -13 4 13 22 6 22 -9 0 -5 -23 -9 -51 -9 l-52 0 29 28 c28\r
28 44 32 44 11z m2576 5 c-3 -9 -6 -33 -6 -55 0 -30 -5 -42 -24 -54 -23 -15\r
-27 -15 -64 4 -22 11 -54 32 -71 47 l-33 27 34 14 c28 12 101 27 157 32 8 1\r
11 -5 7 -15z m50 2 c3 -8 -4 -31 -15 -53 l-20 -38 -1 46 c0 25 3 49 7 52 11\r
11 23 8 29 -7z m-3136 -6 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10\r
10 6 0 10 -4 10 -10z m780 1 c0 -9 -33 -21 -59 -21 -20 0 -2 17 24 23 32 8 35\r
7 35 -2z m2763 -13 c8 -29 5 -31 -34 -23 l-32 7 24 19 c31 24 35 24 42 -3z\r
m3636 -3 l55 -26 -21 -21 c-19 -18 -33 -21 -110 -21 l-88 1 72 -7 c40 -4 75\r
-10 78 -12 3 -3 -5 -15 -18 -26 -16 -15 -42 -22 -94 -27 l-71 -7 20 68 c11 37\r
24 76 29 86 14 26 83 22 148 -8z m-6861 -5 c41 -25 33 -40 -20 -40 -56 0 -104\r
42 -60 53 34 9 47 7 80 -13z m5262 -5 l23 -25 -26 0 c-22 0 -27 5 -27 25 0 14\r
1 25 3 25 2 0 14 -11 27 -25z m-5682 -12 c4 -27 -15 -30 -34 -5 -19 25 -17 34\r
9 30 14 -2 23 -11 25 -25z m5415 12 c-3 -9 -8 -14 -10 -11 -3 3 -2 9 2 15 9\r
16 15 13 8 -4z m1402 6 c-3 -5 -41 -23 -85 -40 -79 -31 -140 -40 -140 -21 0\r
11 30 20 80 23 19 1 38 6 41 11 4 4 21 10 38 12 18 2 40 8 49 14 22 12 25 12\r
17 1z m285 -1 c0 -6 -7 -40 -16 -76 -15 -57 -20 -65 -36 -60 -11 2 -17 2 -14\r
-2 4 -3 -21 -19 -55 -34 -81 -37 -126 -37 -112 -2 3 8 11 14 18 14 7 0 16 7\r
19 16 3 9 11 12 18 8 19 -12 98 -13 91 -1 -3 5 -20 7 -39 4 -21 -4 -37 -1 -44\r
8 -15 19 21 56 95 99 66 38 75 41 75 26z m-7165 -38 c-9 -9 -35 8 -35 24 0 16\r
2 16 20 -1 11 -10 18 -20 15 -23z m95 10 c0 -15 -2 -15 -10 -2 -13 20 -13 33\r
0 25 6 -3 10 -14 10 -23z m220 -1 c0 -38 -16 -48 -41 -25 l-21 19 22 17 c31\r
25 40 22 40 -11z m260 20 c0 -12 -29 -23 -41 -15 -18 10 -9 24 16 24 14 0 25\r
-4 25 -9z m2880 0 c0 -5 -9 -7 -20 -4 -11 3 -20 7 -20 9 0 2 9 4 20 4 11 0 20\r
-4 20 -9z m64 1 c5 -9 -42 -57 -50 -50 -2 3 0 17 5 32 10 25 34 35 45 18z\r
m4492 -9 c6 -10 27 -47 46 -84 33 -61 35 -69 27 -118 -10 -63 -26 -118 -44\r
-147 -16 -25 -65 -182 -66 -210 0 -16 -2 -15 -10 6 -7 17 -7 45 2 88 13 69 4\r
137 -32 243 -19 57 -18 72 11 144 l12 30 15 -29 c29 -54 53 -139 53 -185 0\r
-25 0 -56 0 -68 0 -36 8 -27 18 23 8 38 6 58 -13 117 -12 40 -30 90 -40 112\r
l-17 40 28 -25 c16 -14 37 -34 46 -45 10 -11 18 -15 18 -9 0 6 -19 29 -42 51\r
-30 27 -42 45 -40 61 4 27 13 28 28 5z m-8336 -3 c0 -5 -4 -10 -10 -10 -5 0\r
-10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m165 -10 c7 -23 -2 -43 -16\r
-35 -12 8 -12 55 0 55 5 0 12 -9 16 -20z m51 -4 c2 -14 0 -15 -12 -5 -17 14\r
-19 32 -2 27 6 -2 12 -12 14 -22z m229 14 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11\r
10 0 6 2 10 4 10 3 0 8 -4 11 -10z m255 -15 l23 -24 -27 -11 c-49 -18 -55 -14\r
-43 25 12 42 16 43 47 10z m5140 -5 c-8 -5 -6 -9 5 -13 9 -4 13 -3 10 3 -10\r
16 11 12 25 -4 9 -12 8 -15 -7 -15 -10 1 -29 -3 -42 -7 -21 -6 -23 -4 -18 10\r
4 10 7 27 7 38 0 17 2 18 15 8 11 -9 13 -15 5 -20z m305 10 c10 -11 16 -20 13\r
-20 -3 0 -13 9 -23 20 -10 11 -16 20 -13 20 3 0 13 -9 23 -20z m3132 5 c0 -8\r
-4 -15 -9 -15 -10 0 -11 14 -1 23 9 10 10 9 10 -8z m-5615 -6 c8 -24 -5 -79\r
-18 -79 -15 0 -19 -16 -5 -22 4 -1 5 -11 2 -21 -5 -15 -9 -15 -23 -5 -19 15\r
-14 82 6 71 6 -3 8 -3 4 1 -8 9 11 66 22 66 5 0 10 -5 12 -11z m98 -14 c0 -14\r
-4 -25 -10 -25 -5 0 -10 11 -10 25 0 14 5 25 10 25 6 0 10 -11 10 -25z m281 2\r
c4 -5 5 -21 4 -36 -2 -14 -7 -52 -10 -83 -8 -76 -38 -118 -98 -140 l-47 -18\r
-32 65 -32 65 21 42 c11 24 38 62 58 86 36 42 38 43 84 36 25 -4 49 -11 52\r
-17z m178 -29 c49 -32 80 -59 78 -68 -4 -26 -96 -65 -157 -66 -30 0 -66 -6\r
-79 -13 -24 -13 -24 -13 -17 29 3 22 9 68 13 100 6 61 9 64 65 69 9 0 53 -23\r
97 -51z m-4129 21 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3\r
10 -10 10 -16z m7709 -26 c33 -20 61 -39 61 -44 0 -9 -131 -22 -185 -17 l-40\r
3 38 40 c20 22 34 32 31 23 -3 -10 -1 -18 5 -18 6 0 10 3 10 8 -3 19 2 42 10\r
42 4 0 36 -16 70 -37z m-7499 1 c0 -8 -4 -12 -10 -9 -5 3 -10 13 -10 21 0 8 5\r
12 10 9 6 -3 10 -13 10 -21z m235 16 c3 -5 -1 -10 -9 -10 -9 0 -16 5 -16 10 0\r
6 4 10 9 10 6 0 13 -4 16 -10z m2885 -21 c0 -4 -9 -5 -20 -2 -11 3 -20 12 -20\r
19 0 12 4 12 20 2 11 -7 20 -16 20 -19z m1730 21 c0 -5 -7 -7 -15 -4 -8 4 -15\r
8 -15 10 0 2 7 4 15 4 8 0 15 -4 15 -10z m954 -6 c11 -29 6 -34 -19 -18 -14 9\r
-25 20 -25 25 0 16 38 10 44 -7z m-5845 -21 c-1 -17 -3 -21 -6 -10 -2 9 -9 17\r
-14 17 -6 0 -7 5 -4 10 12 19 25 10 24 -17z m81 12 c0 -8 -4 -15 -10 -15 -5 0\r
-10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z m5929 1 c9 -11 9 -16 0 -22 -8\r
-5 -9 -3 -4 6 6 9 4 12 -7 8 -9 -4 -15 0 -15 8 0 18 11 18 26 0z m340 -2 c4 3\r
8 -1 8 -9 0 -11 -4 -12 -14 -4 -7 6 -13 17 -12 23 0 7 2 6 6 -2 2 -6 8 -10 12\r
-8z m74 9 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m87 -3 c12\r
-7 11 -9 -5 -8 -11 1 -31 -2 -45 -7 -22 -7 -23 -6 -11 9 15 18 38 20 61 6z\r
m80 6 c0 -2 -9 -6 -20 -9 -11 -3 -18 -1 -14 4 5 9 34 13 34 5z m2025 -13 c18\r
-14 18 -15 2 -9 -10 3 -28 6 -38 6 -11 0 -17 5 -14 10 9 14 27 12 50 -7z\r
m-8760 -3 c3 -5 -1 -10 -10 -10 -9 0 -13 5 -10 10 3 6 8 10 10 10 2 0 7 -4 10\r
-10z m3693 -10 c-7 -11 -17 -20 -22 -20 -5 0 -1 9 9 20 10 11 20 20 22 20 2 0\r
-2 -9 -9 -20z m1295 13 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z\r
m117 -3 c11 -7 1 -9 -35 -9 -40 1 -45 3 -25 9 35 11 43 11 60 0z m940 -5 c0\r
-8 -2 -15 -4 -15 -2 0 -6 7 -10 15 -3 8 -1 15 4 15 6 0 10 -7 10 -15z m270\r
-12 c0 -13 -3 -13 -15 -3 -8 7 -12 16 -9 21 8 13 24 1 24 -18z m1723 7 c-3\r
-11 -34 -46 -70 -77 -58 -51 -66 -55 -88 -45 -14 7 -25 15 -25 19 0 5 23 21\r
50 36 65 37 65 45 -1 11 -49 -26 -51 -27 -86 -10 -20 9 -33 19 -30 23 3 3 46\r
14 94 24 48 9 99 22 113 28 39 15 49 13 43 -9z m-7966 4 c-3 -3 -12 -4 -19 -1\r
-8 3 -5 6 6 6 11 1 17 -2 13 -5z m223 -15 c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10\r
16 0 6 5 7 10 4 6 -3 10 -11 10 -16z m4941 -5 c10 -29 7 -40 -11 -29 -6 4 -8\r
16 -5 28 4 15 3 18 -3 9 -5 -8 -16 -10 -28 -6 -18 7 -18 7 1 -15 11 -13 31\r
-28 45 -34 22 -9 23 -11 6 -15 -17 -4 -96 61 -96 80 0 4 18 8 40 8 35 0 42 -4\r
51 -26z m1230 10 c10 -13 10 -17 -2 -25 -29 -18 -40 -5 -16 20 10 11 9 12 -3\r
6 -8 -4 -23 -15 -32 -23 -10 -8 -18 -12 -18 -7 0 9 40 45 50 45 4 0 13 -7 21\r
-16z m-6141 -4 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11\r
-4 11 -10z m175 0 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8\r
-4 11 -10z m2953 -25 c-2 -10 -8 -12 -17 -6 -12 8 -12 11 0 24 15 16 23 8 17\r
-18z m155 21 c6 -15 -1 -26 -15 -26 -4 0 -8 9 -8 20 0 23 15 27 23 6z m1783 6\r
c18 -11 13 -44 -5 -37 -8 3 -12 3 -8 -1 9 -9 -48 -44 -71 -44 -9 0 1 9 23 20\r
22 11 32 18 22 15 -59 -16 -66 -16 -86 4 -39 39 -28 51 47 51 37 0 72 -4 78\r
-8z m424 -29 c55 -62 122 -233 93 -233 -14 0 -212 235 -213 252 0 8 26 15 61\r
17 19 1 36 -10 59 -36z m3383 30 c-13 -2 -35 -2 -50 0 -16 2 -5 4 22 4 28 0\r
40 -2 28 -4z m-8777 -28 c9 -14 15 -28 13 -30 -9 -8 -54 21 -57 38 -5 26 25\r
21 44 -8z m2944 9 c0 -2 -12 -4 -27 -4 -21 0 -24 3 -14 9 13 8 41 5 41 -5z\r
m2270 -81 c-51 -133 -89 -217 -95 -212 -5 6 -71 216 -77 243 -2 16 10 21 84\r
36 48 10 93 21 100 23 7 3 16 6 20 6 3 1 -11 -43 -32 -96z m367 57 c20 -24 15\r
-34 -9 -18 -11 8 -25 25 -30 37 -8 22 -7 23 9 10 10 -8 23 -21 30 -29z m200\r
26 c0 -8 -6 -12 -15 -9 -11 5 -11 7 0 14 7 5 13 9 14 9 0 0 1 -6 1 -14z m778\r
4 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19 12 23 12 15 0z m-6770 -10 c3 -5\r
1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m4399 -19 l15\r
-29 -49 16 c-57 18 -53 30 12 41 4 0 14 -12 22 -28z m277 -3 c18 -18 24 -23\r
14 -10 -10 12 -16 25 -13 28 3 3 30 2 59 -2 45 -6 50 -9 35 -18 -10 -6 -34\r
-21 -52 -33 -29 -19 -46 -22 -124 -21 -110 2 -118 6 -97 48 13 25 13 30 2 20\r
-8 -6 -17 -20 -20 -31 -8 -26 -40 -24 -59 3 -32 45 -24 48 103 48 l120 0 32\r
-32z m204 22 c3 -6 -1 -7 -9 -4 -18 7 -21 14 -7 14 6 0 13 -4 16 -10z m66 -10\r
c13 -10 21 -19 18 -20 -9 0 -69 31 -69 36 0 11 30 2 51 -16z m2949 -50 c0 -31\r
-35 -110 -49 -110 -5 0 -16 9 -24 20 -8 11 -16 17 -19 14 -9 -8 -99 17 -96 27\r
2 5 37 33 78 63 l75 53 17 -21 c10 -11 18 -32 18 -46z m-7642 37 c5 -24 -15\r
-21 -21 4 -3 13 -1 19 6 16 7 -2 13 -11 15 -20z m4035 16 c-7 -2 -21 -2 -30 0\r
-10 3 -4 5 12 5 17 0 24 -2 18 -5z m1882 -3 c-3 -5 -13 -10 -21 -10 -8 0 -12\r
5 -9 10 3 6 13 10 21 10 8 0 12 -4 9 -10z m2702 -43 l3 -52 -30 47 c-17 27\r
-30 50 -30 53 0 3 12 5 28 5 26 0 27 -3 29 -53z m49 17 c30 -71 18 -133 -25\r
-134 -10 0 -7 8 10 26 l24 26 -29 -8 c-24 -6 -27 -4 -23 12 3 11 9 40 13 67 3\r
26 8 47 11 47 2 0 11 -16 19 -36z m71 22 c-8 -8 -20 -29 -27 -46 l-14 -33 -13\r
44 c-7 24 -13 45 -13 47 0 1 18 2 41 2 35 0 38 -2 26 -14z m-6087 0 c0 -5 -27\r
-139 -35 -174 l-5 -22 -48 24 c-26 13 -60 38 -75 54 l-29 30 35 38 c28 30 44\r
39 83 45 70 9 74 9 74 5z m79 -16 c84 -42 139 -114 155 -201 14 -78 -18 -87\r
-142 -39 -118 46 -118 45 -104 121 17 93 32 139 43 139 5 0 27 -9 48 -20z\r
m1016 -1 c-10 -15 -25 -10 -19 6 4 8 10 12 15 9 5 -3 7 -10 4 -15z m1597 -121\r
c43 -48 78 -93 78 -98 0 -6 -12 -10 -26 -10 -14 0 -84 -12 -156 -26 -71 -14\r
-132 -24 -135 -20 -6 5 65 190 100 260 l19 40 21 -29 c12 -15 56 -68 99 -117z\r
m1095 136 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-6830 -89\r
c35 -85 42 -128 20 -119 -18 6 -268 -51 -306 -70 -38 -20 -47 -20 -55 2 -4 9\r
-17 36 -30 60 l-23 44 27 28 c14 15 75 53 135 84 91 46 118 55 155 53 l45 -2\r
32 -80z m181 12 c71 -32 108 -54 99 -58 -18 -11 -179 -31 -212 -27 -22 2 -31\r
13 -50 61 -41 101 -42 96 7 85 24 -5 94 -32 156 -61z m2690 33 c-18 -22 -36\r
-40 -40 -40 -5 0 -8 -7 -8 -15 0 -9 -23 -46 -52 -84 l-51 -69 -96 33 c-53 19\r
-141 48 -197 65 -84 26 -103 35 -113 57 -6 14 -10 27 -9 28 2 1 109 12 238 24\r
294 28 334 32 339 37 2 2 8 4 13 4 5 0 -6 -18 -24 -40z m1452 14 c-83 -32\r
-243 -69 -217 -49 18 13 162 61 207 68 67 11 70 4 10 -19z m697 5 c58 -25 153\r
-86 153 -100 0 -24 -179 5 -208 35 -21 20 -26 86 -7 86 7 0 35 -9 62 -21z\r
m2692 8 c8 -11 -21 -17 -160 -31 -94 -10 -179 -20 -188 -23 -14 -4 -14 -3 -1\r
6 8 6 27 11 42 11 20 0 26 4 22 15 -5 11 1 13 28 9 25 -3 135 8 239 25 4 1 11\r
-5 18 -12z m-7353 -45 c-16 -16 -18 -16 -32 2 -26 35 -18 49 17 30 29 -15 30\r
-17 15 -32z m3164 36 c0 -7 -5 -20 -10 -28 -8 -12 -10 -9 -10 13 0 15 5 27 10\r
27 6 0 10 -6 10 -12z m1414 -37 l6 -33 -48 7 c-26 4 -50 10 -54 14 -4 4 11 19\r
34 34 46 30 52 28 62 -22z m447 7 c6 -24 23 -82 39 -130 15 -49 23 -85 16 -81\r
-6 4 -45 32 -86 63 -41 31 -88 64 -104 74 -16 10 -24 21 -19 25 6 3 15 16 22\r
28 12 24 75 62 103 63 12 0 21 -13 29 -42z m1997 33 c9 -5 -2 -14 -37 -29 -63\r
-28 -69 -27 -64 2 4 19 13 26 37 29 17 2 36 4 41 5 6 1 16 -2 23 -7z m1357 -1\r
c4 -6 -5 -10 -20 -10 -15 0 -24 4 -20 10 3 6 12 10 20 10 8 0 17 -4 20 -10z\r
m191 -22 l29 -32 -32 25 c-18 13 -32 27 -32 32 -1 12 4 8 35 -25z m210 -22\r
c-7 -36 -46 -82 -46 -54 0 9 10 37 22 64 22 51 34 46 24 -10z m-5772 38 c23\r
-9 20 -20 -12 -43 l-28 -20 -2 35 c-3 35 7 41 42 28z m186 -19 c0 -14 -4 -25\r
-9 -25 -4 0 -6 11 -3 25 2 14 6 25 8 25 2 0 4 -11 4 -25z m975 6 c22 -10 46\r
-25 54 -35 13 -15 9 -16 -56 -10 -87 8 -215 -9 -306 -42 -38 -13 -66 -20 -62\r
-15 3 6 -19 11 -52 13 -56 3 -77 20 -31 26 48 6 195 42 248 61 70 25 153 26\r
205 2z m600 -6 c39 -32 28 -32 -15 0 -19 14 -30 25 -24 25 5 0 23 -11 39 -25z\r
m2128 -26 c-13 -13 -87 -21 -103 -10 -19 13 -10 21 52 42 53 18 53 18 56 -3 2\r
-11 0 -24 -5 -29z m1607 19 c0 -6 -7 -5 -15 2 -8 7 -15 17 -15 22 0 6 7 5 15\r
-2 8 -7 15 -17 15 -22z m-8575 2 c17 -11 23 -20 15 -20 -17 0 -71 39 -55 40 6\r
0 24 -9 40 -20z m3010 0 c10 -11 16 -20 13 -20 -3 0 -13 9 -23 20 -10 11 -16\r
20 -13 20 3 0 13 -9 23 -20z m2679 4 c3 -8 2 -12 -4 -9 -6 3 -10 10 -10 16 0\r
14 7 11 14 -7z m1734 0 c31 -9 28 -24 -5 -24 -45 0 -77 11 -61 21 15 10 35 11\r
66 3z m-2494 -13 c8 -13 -4 -42 -15 -35 -12 7 -12 44 0 44 6 0 12 -4 15 -9z\r
m2379 2 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m-4151 -49\r
c-4 -51 -10 -67 -22 -59 -20 12 -7 109 14 102 6 -2 10 -21 8 -43z m212 -10\r
c14 -31 26 -60 26 -64 0 -8 -72 -40 -90 -40 -6 0 -10 5 -10 11 0 16 40 149 45\r
149 2 0 15 -25 29 -56z m4121 46 c3 -5 -1 -10 -9 -10 -9 0 -16 5 -16 10 0 6 4\r
10 9 10 6 0 13 -4 16 -10z m-6935 -10 c0 -5 -7 -7 -15 -4 -8 4 -15 8 -15 10 0\r
2 7 4 15 4 8 0 15 -4 15 -10z m64 -3 c14 -10 16 -20 11 -37 l-8 -24 -23 28\r
c-13 15 -24 31 -24 37 0 13 23 11 44 -4z m1390 -9 c5 -9 8 -19 6 -22 -3 -2\r
-50 3 -105 12 -85 14 -95 18 -65 23 66 13 152 6 164 -13z m3666 -8 c7 -13 7\r
-21 -2 -26 -7 -4 -8 -3 -4 4 10 16 -7 15 -23 0 -11 -11 -11 -9 -2 10 7 12 9\r
28 5 34 -4 7 -3 8 4 4 7 -4 16 -16 22 -26z m-5277 7 c7 -6 19 -21 27 -31 14\r
-18 13 -18 -20 -11 -51 11 -66 26 -44 42 22 16 23 16 37 0z m103 -55 c-6 -6\r
-26 43 -25 61 0 7 7 -3 15 -22 8 -18 13 -36 10 -39z m6350 57 c10 -17 -4 -23\r
-29 -12 -16 8 -25 7 -35 -3 -11 -12 -10 -14 5 -15 29 -1 -16 -17 -50 -18 -27\r
-1 -27 -1 -12 28 13 26 20 29 65 29 27 1 52 -4 56 -9z m922 -31 c28 -61 44\r
-145 36 -195 -3 -24 -9 -43 -13 -43 -13 0 -63 168 -57 191 7 24 7 24 -8 -1\r
-15 -24 -15 -25 -16 -3 0 18 29 93 36 93 1 0 11 -19 22 -42z m-7018 28 c0 -2\r
-7 -9 -15 -16 -12 -10 -15 -10 -15 4 0 9 7 16 15 16 8 0 15 -2 15 -4z m40 -11\r
c0 -8 -9 -15 -20 -15 -13 0 -18 5 -14 15 4 8 12 15 20 15 8 0 14 -7 14 -15z\r
m82 0 c-4 -12 -53 -7 -67 7 -7 6 4 8 30 6 22 -2 39 -7 37 -13z m1023 -5 c33\r
-6 75 -13 93 -16 35 -5 31 2 139 -239 71 -158 73 -150 -14 -99 -42 25 -115 71\r
-162 103 -47 32 -133 87 -191 121 -58 35 -129 79 -159 99 l-55 36 60 6 c69 8\r
204 2 289 -11z m5503 14 c29 -8 28 -20 -5 -49 -25 -22 -37 -24 -116 -25 -62 0\r
-111 -7 -160 -21 l-70 -22 -35 38 -35 38 24 9 c71 27 336 48 397 32z m-6838\r
-25 c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10 -11 10 -16z\r
m1066 -48 c60 -38 190 -121 289 -184 99 -63 203 -129 230 -146 48 -29 49 -31\r
20 -31 -16 0 -86 7 -155 15 -69 8 -226 23 -350 35 -365 33 -545 51 -549 55 -5\r
5 38 87 105 202 l54 91 67 7 c38 4 86 11 108 15 22 4 47 8 56 9 8 1 64 -30\r
125 -68z m1597 49 c-8 -30 -21 -34 -15 -5 2 14 8 25 12 25 5 0 6 -9 3 -20z\r
m1465 3 c37 -17 37 -17 10 -20 -15 -3 -46 5 -70 16 l-43 19 33 1 c18 1 49 -7\r
70 -16z m1079 -5 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m1718\r
13 c3 -5 1 -13 -5 -16 -15 -9 -43 3 -35 15 8 13 32 13 40 1z m-7031 -17 c10\r
-25 -1 -29 -14 -5 -6 12 -7 21 -1 21 5 0 12 -7 15 -16z m604 -11 c2 -12 -1\r
-30 -6 -40 -9 -15 -13 -12 -31 18 -27 45 -26 51 7 47 19 -2 28 -9 30 -25z\r
m2542 13 c-19 -7 -43 -17 -52 -21 -10 -4 -18 -4 -18 -1 0 10 62 35 85 35 12 0\r
7 -5 -15 -13z m-3255 -6 c11 -17 -43 -43 -77 -36 -18 3 -39 2 -46 -3 -10 -6\r
-3 -11 23 -15 29 -6 48 -2 86 17 27 13 49 21 49 18 0 -3 -9 -21 -21 -40 -13\r
-22 -25 -31 -37 -28 -9 2 -45 13 -80 23 l-64 18 59 27 c61 29 98 35 108 19z\r
m359 -5 c-4 -8 -10 -15 -15 -15 -5 0 -9 7 -9 15 0 8 7 15 15 15 9 0 12 -6 9\r
-15z m285 -11 c17 -38 6 -42 -14 -5 -8 17 -12 31 -7 31 5 0 14 -12 21 -26z\r
m115 20 c22 -9 20 -41 -4 -54 -18 -10 -20 -8 -20 25 0 38 0 38 24 29z m1501\r
-25 c22 -14 55 -31 73 -38 17 -8 32 -19 32 -26 0 -24 -13 -23 -36 3 l-24 27\r
24 -45 c13 -25 26 -62 29 -83 5 -34 4 -38 -11 -32 -9 4 -41 16 -70 27 -28 11\r
-57 28 -62 38 -6 10 -10 49 -10 87 -1 53 -3 64 -11 50 -7 -11 -8 -41 -4 -79 7\r
-60 7 -60 -16 -53 -49 16 -69 25 -69 32 0 16 91 121 103 119 6 -1 30 -13 52\r
-27z m495 27 c0 -11 -19 -15 -25 -6 -3 5 1 10 9 10 9 0 16 -2 16 -4z m2802 -8\r
c-9 -9 -15 -9 -24 0 -9 9 -7 12 12 12 19 0 21 -3 12 -12z m988 8 c0 -2 -13 -9\r
-30 -15 -16 -5 -30 -6 -30 -1 0 5 8 11 18 13 24 7 42 8 42 3z m680 -11 c15 -9\r
19 -15 10 -15 -8 0 7 -10 33 -22 45 -20 60 -45 31 -55 -16 -5 -107 69 -94 77\r
8 5 6 9 -5 13 -10 4 -14 3 -9 -4 4 -7 -1 -10 -11 -7 -10 1 -20 9 -23 16 -5 17\r
37 15 68 -3z m-6749 -6 c19 -7 35 -13 37 -14 5 -4 -33 -65 -41 -65 -4 0 -19\r
12 -32 28 -20 22 -24 24 -25 9 0 -27 -20 -10 -20 18 0 35 26 42 81 24z m406\r
-31 c-91 -159 -109 -189 -112 -186 -2 2 7 48 20 103 13 54 22 102 19 106 -5 8\r
25 15 69 18 l29 1 -25 -42z m1171 -75 c12 -3 22 -8 22 -12 0 -4 -41 -58 -91\r
-121 -50 -63 -93 -121 -96 -127 -10 -26 -22 -11 -63 85 -24 53 -60 131 -80\r
172 -65 131 -75 126 117 63 92 -30 178 -57 191 -60z m777 54 l-15 -21 0 22 c0\r
14 4 20 10 17 7 -4 9 3 5 22 -5 26 -5 26 5 5 7 -18 6 -29 -5 -45z m568 56 c-7\r
-2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m1282 -54 c99 -68 103 -74\r
68 -93 -16 -8 -45 -17 -66 -21 -33 -7 -38 -5 -47 20 -15 38 -12 44 6 12 9 -16\r
18 -26 21 -23 5 5 -16 44 -70 135 -19 31 -19 34 -3 28 10 -4 51 -30 91 -58z\r
m802 55 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m1629 -5 c10\r
-17 -19 -39 -44 -32 -22 5 -22 7 -6 24 19 21 39 24 50 8z m-6872 -30 c-8 -13\r
-24 -1 -24 18 0 13 3 13 15 3 8 -7 12 -16 9 -21z m66 21 c0 -5 -7 -10 -16 -10\r
-8 0 -12 5 -9 10 3 6 10 10 16 10 5 0 9 -4 9 -10z m4192 -1 c29 -8 39 -16 43\r
-37 3 -15 10 -39 14 -54 5 -16 7 -28 4 -28 -12 0 -103 54 -103 61 0 4 15 16\r
33 28 38 25 27 28 -14 4 -28 -16 -29 -16 -56 8 l-28 24 24 -27 c33 -38 21 -45\r
-28 -17 -23 12 -38 26 -34 30 20 19 93 23 145 8z m1968 -3 c0 -14 -118 -96\r
-138 -96 -16 0 -15 25 3 60 11 21 26 31 57 38 62 14 78 14 78 -2z m730 -21\r
c55 -34 56 -45 4 -25 -15 6 -42 11 -61 12 -18 1 -33 5 -33 10 0 4 5 8 10 8 6\r
0 10 7 10 15 0 21 8 19 70 -20z m-7470 15 c12 -8 15 -38 14 -175 0 -91 -4\r
-168 -7 -171 -9 -9 -39 12 -132 92 -45 38 -116 94 -158 124 -60 42 -73 56 -60\r
61 10 3 20 17 23 30 5 22 13 25 100 35 125 14 202 16 220 4z m3584 -31 c-10\r
-12 -32 -31 -49 -41 l-30 -20 28 5 c16 2 25 1 20 -3 -4 -4 -24 -10 -43 -13\r
-19 -3 -29 -3 -21 0 10 4 3 10 -19 17 -18 6 -35 16 -37 23 -5 15 149 75 161\r
63 6 -6 2 -18 -10 -31z m61 31 c-3 -5 -13 -10 -21 -10 -8 0 -14 5 -14 10 0 6\r
9 10 21 10 11 0 17 -4 14 -10z m134 6 c-2 -2 -26 -13 -54 -24 -27 -10 -74 -29\r
-103 -41 -51 -20 -52 -20 -42 -2 14 27 31 37 24 14 -5 -16 -4 -16 10 1 31 38\r
70 56 120 56 27 0 47 -2 45 -4z m1087 -51 c13 -31 24 -64 24 -75 0 -18 -2 -19\r
-20 -8 -22 14 -40 64 -40 111 0 40 8 33 36 -28z m954 45 c-20 -13 -33 -13 -25\r
0 3 6 14 10 23 10 15 0 15 -2 2 -10z m1102 -17 c15 -15 28 -30 28 -34 0 -4\r
-24 -15 -52 -25 -93 -30 -158 -62 -218 -108 -56 -43 -77 -47 -64 -13 3 8 40\r
42 83 75 76 59 79 60 89 39 10 -20 10 -19 6 8 -5 28 -2 33 43 58 26 14 50 27\r
52 27 3 0 18 -12 33 -27z m-6548 6 c14 -7 41 -35 60 -64 l35 -53 -82 25 c-45\r
13 -88 26 -94 28 -9 3 -7 14 8 40 23 38 34 41 73 24z m3056 6 c0 -2 -19 -14\r
-42 -26 -62 -31 -142 -93 -162 -124 -10 -15 -13 -24 -7 -21 8 5 7 -1 -1 -19\r
-7 -15 -14 -22 -16 -15 -7 21 9 118 21 128 7 6 39 19 72 30 33 12 76 28 95 36\r
41 18 40 17 40 11z m2266 -18 c1 -9 -2 -17 -7 -17 -5 0 -9 2 -9 4 0 2 -3 12\r
-7 22 -4 11 -2 15 7 12 7 -2 14 -12 16 -21z m53 -3 c-15 -18 -22 -13 -13 10 3\r
9 10 13 16 10 5 -3 4 -12 -3 -20z m-6478 -117 c-9 -9 -10 -8 -5 7 5 13 4 17\r
-4 12 -7 -4 -12 -13 -12 -20 0 -7 -27 -34 -61 -60 -87 -68 -92 -83 -97 -311\r
l-4 -190 -51 -52 c-28 -29 -57 -53 -63 -53 -15 0 -11 52 17 253 36 259 65 340\r
169 471 l61 77 31 -61 c23 -47 28 -64 19 -73z m927 -13 c62 -59 110 -110 105\r
-114 -4 -4 -57 -17 -118 -30 -60 -12 -120 -26 -132 -31 l-23 -9 0 161 0 160\r
28 -15 c15 -8 78 -63 140 -122z m5837 127 c-11 -10 -164 -27 -154 -18 8 10 80\r
25 124 26 24 1 35 -3 30 -8z m2242 3 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1\r
17 -2 13 -5z m-7705 -59 c15 -28 28 -61 28 -74 0 -32 -8 -23 -54 62 -32 58\r
-35 68 -20 65 11 -2 31 -26 46 -53z m252 49 c19 -7 21 -34 3 -58 -12 -17 -14\r
-17 -36 1 -20 17 -22 22 -12 41 12 23 20 26 45 16z m216 -15 c-7 -11 -9 -33\r
-6 -47 5 -21 4 -24 -4 -12 -8 11 -9 5 -5 -25 l5 -40 -14 35 c-21 51 -20 97 2\r
103 31 8 33 7 22 -14z m5050 5 c0 -14 -3 -14 -15 -4 -8 7 -15 14 -15 16 0 2 7\r
4 15 4 8 0 15 -7 15 -16z m136 -29 c17 -8 36 -21 43 -29 9 -11 7 -15 -13 -18\r
-14 -3 -29 -1 -33 3 -4 4 -29 1 -56 -8 -51 -17 -77 -8 -77 27 0 17 4 17 52 4\r
29 -7 54 -11 56 -9 5 5 -43 25 -61 25 -7 0 -19 5 -27 11 -11 7 -4 8 25 5 l40\r
-6 -32 12 c-18 6 -33 15 -33 19 0 8 62 -11 116 -36z m2377 15 c3 -11 2 -20 -3\r
-20 -4 0 -10 11 -12 25 -6 29 7 25 15 -5z m98 7 c-10 -9 -11 -8 -5 6 3 10 9\r
15 12 12 3 -3 0 -11 -7 -18z m-8393 -42 c84 -24 157 -47 162 -50 19 -12 57\r
-99 100 -230 23 -71 51 -150 62 -173 27 -60 14 -65 -30 -12 -63 77 -240 269\r
-366 399 -67 68 -112 120 -101 116 11 -4 89 -26 173 -50z m632 34 c0 -5 -7 -9\r
-15 -9 -15 0 -20 12 -9 23 8 8 24 -1 24 -14z m2120 -12 c0 -5 -4 -5 -10 -2 -5\r
3 -10 14 -10 23 0 15 2 15 10 2 5 -8 10 -19 10 -23z m88 21 c-3 -7 -13 -14\r
-24 -15 -10 -2 -13 0 -6 3 6 3 10 10 6 15 -3 5 2 9 11 9 9 0 15 -6 13 -12z\r
m672 -13 c-25 -13 -49 -24 -55 -24 -5 0 10 11 35 24 25 13 50 24 55 24 6 0\r
-10 -11 -35 -24z m2940 16 c0 -15 -29 -33 -41 -25 -7 4 -9 3 -6 -4 4 -5 -15\r
-26 -42 -46 -27 -20 -57 -53 -66 -74 -10 -20 -23 -41 -29 -45 -6 -5 0 -6 14\r
-2 l25 6 -24 -20 c-30 -27 -40 -26 -37 2 7 51 19 78 32 73 8 -3 14 1 14 10 0\r
11 -5 14 -16 10 -14 -6 -15 -4 -3 10 24 29 99 75 111 68 7 -4 8 -3 4 4 -4 6 5\r
18 21 26 33 18 43 19 43 7z m-6156 -17 c10 -25 -1 -29 -14 -5 -6 12 -7 21 -1\r
21 5 0 12 -7 15 -16z m373 -21 c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21\r
0 -30z m2945 -6 c-5 -58 40 -203 79 -257 l31 -43 -47 8 c-26 3 -70 8 -99 11\r
-155 12 -209 26 -224 59 -6 14 -7 25 -3 25 5 0 11 -7 13 -16 2 -12 14 -5 45\r
26 l42 43 72 -69 c39 -38 67 -59 61 -48 -6 12 -39 45 -72 74 l-60 52 26 47\r
c26 46 109 131 129 131 6 0 9 -18 7 -43z m385 37 c-3 -3 -12 -4 -19 -1 -8 3\r
-5 6 6 6 11 1 17 -2 13 -5z m305 -57 c45 -43 45 -44 41 -103 -2 -32 -9 -69\r
-15 -80 -11 -24 -70 -55 -144 -77 l-50 -15 43 82 c23 44 43 89 43 99 0 9 5 26\r
12 36 8 13 8 32 1 69 -9 47 -9 50 7 42 10 -5 38 -29 62 -53z m1452 22 c9 -23\r
15 -44 12 -47 -8 -7 -350 -42 -356 -35 -5 5 58 64 100 92 22 14 90 25 191 29\r
34 2 38 -1 53 -39z m1552 -7 c-4 -3 -11 -1 -18 6 -8 8 -8 15 3 28 13 16 14 16\r
17 -5 2 -13 1 -25 -2 -29z m850 22 c15 -58 -4 -377 -31 -524 -43 -240 -73\r
-337 -149 -485 -43 -85 -162 -249 -218 -301 -40 -38 -207 -154 -221 -154 -6 0\r
-8 46 -3 128 5 110 3 144 -18 257 -49 261 -59 367 -53 555 4 113 13 214 26\r
285 35 183 22 165 137 191 137 31 397 72 466 73 54 1 58 -1 64 -25z m211 4\r
c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-5921 -23 c51 -19 103\r
-35 116 -35 16 0 19 -3 11 -11 -6 -6 -57 -17 -113 -25 -56 -8 -106 -16 -110\r
-19 -4 -3 -10 14 -11 38 -4 47 -1 87 8 87 3 0 47 -16 99 -35z m677 1 c-3 -4\r
-20 -6 -38 -3 -21 3 -41 0 -55 -10 -20 -14 -21 -17 -6 -25 14 -8 15 -12 4 -25\r
-9 -11 -1 -9 27 5 28 16 42 19 52 11 16 -14 6 -32 -13 -25 -8 3 -14 -1 -14 -9\r
0 -25 -33 -36 -54 -17 -18 16 -18 16 -8 -4 10 -19 6 -25 -41 -55 -79 -52 -90\r
-54 -61 -12 15 23 22 43 18 56 -4 14 8 32 51 72 60 55 111 79 131 60 7 -5 10\r
-14 7 -19z m1350 -14 c26 -25 37 -62 18 -62 -10 0 -91 93 -91 104 0 11 43 -14\r
73 -42z m-4269 22 c3 -8 2 -12 -4 -9 -6 3 -10 10 -10 16 0 14 7 11 14 -7z\r
m417 -26 c-4 -32 -5 -32 -11 -8 -7 26 -4 40 9 40 4 0 5 -15 2 -32z m3132 17\r
c4 -8 2 -17 -3 -20 -6 -4 -10 3 -10 14 0 25 6 27 13 6z m2407 5 c0 -5 -2 -10\r
-4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-5740 -46 c0 -9\r
-37 15 -51 33 -10 12 -5 11 19 -6 17 -12 32 -24 32 -27z m15 36 c3 -6 -1 -7\r
-9 -4 -18 7 -21 14 -7 14 6 0 13 -4 16 -10z m3040 -57 c-67 -105 -85 -124\r
-109 -121 -17 2 -22 13 -29 57 -11 65 -4 73 84 106 100 37 103 35 54 -42z\r
m-1342 25 c42 -21 85 -97 63 -110 -12 -6 -323 -118 -331 -118 -2 0 40 58 93\r
130 106 142 98 137 175 98z m1977 28 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4\r
0 6 5 11 10 11 6 0 10 -2 10 -4z m1060 -4 c0 -4 -67 -74 -150 -157 -105 -105\r
-151 -145 -155 -134 -3 8 -16 66 -29 128 -16 78 -20 114 -12 116 6 2 54 13\r
106 24 52 11 104 22 115 24 35 8 125 7 125 -1z m1110 -7 c-7 -9 -15 -13 -17\r
-11 -7 7 7 26 19 26 6 0 6 -6 -2 -15z m-6039 -27 c8 -15 8 -18 0 -14 -6 4 -16\r
16 -22 28 -8 15 -8 18 0 14 6 -4 16 -16 22 -28z m253 26 c17 -7 22 -34 6 -34\r
-5 0 -14 9 -20 20 -12 22 -10 23 14 14z m52 -42 c-11 -10 -15 4 -8 28 l7 25 3\r
-23 c2 -13 1 -26 -2 -30z m60 -39 c-3 -3 -12 0 -21 7 -16 13 -19 38 -8 66 5\r
14 10 8 21 -25 8 -23 11 -45 8 -48z m2448 72 c-4 -8 -10 -12 -15 -9 -11 6 -2\r
24 11 24 5 0 7 -7 4 -15z m-2734 -21 c0 -8 -4 -12 -10 -9 -5 3 -10 13 -10 21\r
0 8 5 12 10 9 6 -3 10 -13 10 -21z m337 -36 c-2 -13 -4 -3 -4 22 0 25 2 35 4\r
23 2 -13 2 -33 0 -45z m2170 40 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12\r
1 -19z m333 12 c12 -8 9 -10 -12 -10 -15 0 -30 5 -33 10 -8 13 25 13 45 0z\r
m1415 -30 c6 -9 -33 -30 -56 -30 -5 0 -9 16 -9 35 l0 36 29 -16 c17 -8 33 -19\r
36 -25z m198 25 c1 -5 -16 -11 -38 -13 -40 -2 -40 -2 -15 13 27 16 50 16 53 0z\r
m2593 -91 c-3 -8 -9 -14 -14 -14 -11 0 -32 61 -32 95 0 26 2 24 26 -20 14 -26\r
23 -54 20 -61z m-8176 74 c0 -6 -9 -8 -20 -5 -11 3 -20 1 -20 -5 0 -5 -5 -6\r
-11 -2 -8 4 -3 11 12 20 25 13 39 10 39 -8z m6700 7 c-14 -8 -33 -14 -42 -15\r
-10 0 -104 -44 -211 -98 l-193 -98 -18 79 c-10 43 -16 80 -14 82 3 4 272 33\r
363 40 28 2 61 8 75 14 14 5 34 10 45 10 18 0 17 -1 -5 -14z m-6590 -2 c-8 -3\r
-25 -15 -37 -26 -13 -11 -23 -15 -23 -9 0 14 40 42 60 41 13 0 13 -1 0 -6z\r
m1049 -46 c0 -33 -2 -38 -9 -22 -12 28 -12 78 0 70 6 -3 10 -25 9 -48z m93 26\r
c10 -12 7 -14 -17 -11 -18 2 -31 10 -33 20 -4 20 31 14 50 -9z m3368 12 c9\r
-10 9 -15 1 -15 -6 0 -11 5 -11 10 0 6 -4 10 -10 10 -5 0 -9 -3 -9 -7 3 -17\r
-2 -24 -11 -18 -8 5 -7 11 1 21 15 18 23 18 39 -1z m-4440 -20 c13 -14 19 -25\r
13 -25 -5 0 -20 11 -33 25 -13 14 -19 25 -13 25 5 0 20 -11 33 -25z m2929 -20\r
c3 -3 -65 -35 -75 -35 -6 0 -34 58 -34 69 0 9 96 -22 109 -34z m2851 -96 c-8\r
-46 -21 -83 -41 -111 -106 -153 -189 -279 -187 -285 0 -5 -1 -15 -4 -23 -7\r
-18 -21 -94 -49 -265 -25 -155 -46 -216 -103 -293 -39 -52 -105 -116 -113\r
-108 -2 2 11 33 27 70 17 37 55 138 84 224 29 86 75 216 100 287 l47 130 -18\r
117 -19 116 140 143 141 143 3 -38 c2 -21 -2 -69 -8 -107z m840 122 c15 -29\r
12 -43 -14 -76 l-25 -30 -51 50 -51 50 28 12 c45 19 101 16 113 -6z m575 -19\r
c-2 -2 -17 -1 -32 3 -27 6 -27 7 -8 21 18 13 21 13 32 -2 7 -10 11 -20 8 -22z\r
m175 34 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10\r
-4z m-7413 -22 c2 -7 -10 -14 -27 -16 -32 -5 -37 1 -18 20 15 15 40 12 45 -4z\r
m3302 -15 c6 -17 13 -53 17 -80 l7 -49 -30 0 c-34 0 -153 38 -153 49 0 17 110\r
111 128 111 13 0 24 -11 31 -31z m693 -19 c1 -28 -1 -50 -5 -50 -8 0 -47 18\r
-56 26 -5 5 40 74 49 74 4 0 10 -23 12 -50z m1395 42 c9 -6 -2 -23 -37 -57\r
-27 -27 -51 -47 -54 -44 -2 2 -7 25 -11 51 -7 45 -6 47 21 51 50 7 69 7 81 -1z\r
m87 -9 c8 -27 46 -213 46 -228 0 -8 -38 2 -112 30 -84 32 -114 47 -116 61 -2\r
13 22 41 73 87 79 70 100 79 109 50z m2116 7 c0 -5 -4 -10 -10 -10 -5 0 -10 5\r
-10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-7830 -5 c0 -2 -10 -10 -22 -16 -21\r
-11 -22 -11 -9 4 13 16 31 23 31 12z m1400 -5 c0 -5 -4 -10 -10 -10 -5 0 -10\r
5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m2008 -36 l-46 -47 -53 31 c-60 34\r
-60 34 46 51 104 18 105 17 53 -35z m761 14 c-8 -19 -17 -24 -32 -20 -19 5\r
-19 6 8 28 34 27 40 25 24 -8z m898 10 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3\r
-3 4 -12 1 -19z m2623 12 c0 -5 -9 -10 -21 -10 -11 0 -17 5 -14 10 3 6 13 10\r
21 10 8 0 14 -4 14 -10z m338 -2 c15 -19 24 -126 15 -177 -8 -43 -10 -45 -76\r
-71 -37 -15 -67 -27 -67 -25 0 1 11 23 25 48 30 52 74 181 75 215 0 24 12 29\r
28 10z m1149 -35 c-3 -10 -5 -2 -5 17 0 19 2 27 5 18 2 -10 2 -26 0 -35z\r
m-9267 33 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2\r
10 -4z m1290 -66 c0 -8 -9 0 -20 18 -26 42 -26 66 0 27 11 -16 20 -37 20 -45z\r
m258 52 c2 -7 -2 -10 -12 -6 -9 3 -16 11 -16 16 0 13 23 5 28 -10z m2269 -14\r
c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m1777 10 c11 -43 7 -88\r
-9 -88 -13 0 -65 65 -65 81 0 6 43 26 61 28 4 1 9 -9 13 -21z m1289 -26 l48\r
-49 -39 -119 c-22 -65 -47 -153 -57 -194 -10 -41 -19 -77 -21 -79 -2 -3 -37\r
29 -77 71 -39 41 -112 112 -162 157 -86 79 -89 83 -70 98 21 16 314 163 325\r
163 3 0 27 -22 53 -48z m-6938 18 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19\r
12 23 12 15 0z m377 -2 c-9 -9 -15 -9 -24 0 -9 9 -7 12 12 12 19 0 21 -3 12\r
-12z m4428 2 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4\r
11 -10z m94 2 c2 -4 -4 -9 -15 -9 -11 -1 -17 2 -14 8 7 11 22 12 29 1z m2296\r
-27 c0 -5 -5 -3 -10 5 -5 8 -10 20 -10 25 0 6 5 3 10 -5 5 -8 10 -19 10 -25z\r
m350 16 c0 -24 -23 -43 -44 -35 -21 8 -20 30 2 43 26 16 42 13 42 -8z m81 12\r
c2 -25 9 -64 18 -102 5 -25 7 -49 4 -54 -3 -5 -1 -12 4 -16 5 -3 17 -25 26\r
-48 l17 -43 -34 0 c-19 0 -45 9 -60 21 -20 16 -25 17 -20 4 5 -13 2 -15 -22\r
-9 -16 4 -32 9 -36 13 -9 8 -48 119 -48 137 0 18 55 46 105 55 38 6 38 7 8 8\r
-26 1 -33 5 -33 21 0 16 7 20 35 20 19 0 35 -3 36 -7z m-7141 -49 c23 -26 22\r
-25 -17 5 -24 18 -43 35 -43 37 0 10 36 -16 60 -42z m999 19 c0 -25 -1 -26 -9\r
-8 -12 27 -12 35 0 35 6 0 10 -12 9 -27z m28 -25 c-2 -13 -4 -5 -4 17 -1 22 1\r
32 4 23 2 -10 2 -28 0 -40z m33 42 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6\r
-1 10 4 10 6 0 11 -4 11 -10z m47 2 c6 -4 17 -21 23 -37 9 -25 8 -31 -6 -42\r
-27 -20 -43 -16 -50 12 -7 27 2 75 14 75 4 0 12 -4 19 -8z m1793 -14 c-1 -13\r
-7 -52 -15 -88 -7 -36 -12 -66 -10 -68 5 -6 24 67 31 122 4 25 9 46 12 46 2 0\r
27 -12 54 -27 l49 -27 -73 -67 -73 -67 -31 62 c-50 98 -50 101 -7 119 52 22\r
63 21 63 -5z m1717 0 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z\r
m-4971 3 c8 6 14 7 14 2 0 -5 -14 -20 -31 -32 -18 -13 -29 -19 -25 -12 4 6 3\r
11 -3 11 -5 0 -11 -6 -14 -12 -2 -7 -8 -9 -13 -5 -5 5 4 20 21 34 18 16 31 21\r
33 14 3 -9 7 -9 18 0z m256 -6 c14 -19 8 -23 -17 -12 -14 7 -25 15 -25 18 0\r
10 34 5 42 -6z m44 -8 c11 -12 24 -29 28 -37 4 -9 2 -8 -7 3 -15 18 -32 24\r
-22 7 3 -6 -1 -7 -9 -4 -9 3 -16 10 -16 14 0 5 -3 15 -6 24 -9 23 8 19 32 -7z\r
m1024 -3 c6 -14 10 -42 9 -62 l-1 -37 -19 40 c-20 44 -25 85 -9 85 6 0 15 -12\r
20 -26z m3330 16 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0\r
10 -4 10 -10z m370 6 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11\r
6 0 10 -2 10 -4z m2855 -6 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4\r
10 3 0 8 -4 11 -10z m-7817 -18 c2 -7 -12 -19 -32 -27 -50 -21 -54 -19 -21 15\r
29 30 45 34 53 12z m3763 -15 c-16 -16 -26 0 -10 19 9 11 15 12 17 4 2 -6 -1\r
-17 -7 -23z m317 3 c3 -18 6 -20 13 -9 7 11 9 11 9 -3 0 -21 17 -24 22 -4 2\r
12 9 11 38 -2 37 -18 58 -60 24 -49 -94 31 -154 54 -161 60 -9 10 26 39 42 34\r
5 -2 12 -14 13 -27z m1186 -7 c-3 -23 0 -39 8 -45 10 -6 10 -8 1 -8 -19 0 -34\r
37 -27 65 10 38 23 30 18 -12z m-3759 9 c0 -18 -20 -15 -23 4 -3 10 1 15 10\r
12 7 -3 13 -10 13 -16z m6115 8 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5\r
10 10 10 6 0 10 -4 10 -10z m621 -18 c-5 -2 -7 -13 -4 -25 3 -18 2 -19 -6 -6\r
-5 8 -8 24 -6 35 2 10 4 21 4 24 1 3 6 -2 11 -10 5 -8 5 -16 1 -18z m-5131\r
-58 c17 -42 29 -78 26 -81 -2 -3 -94 4 -203 14 l-198 18 160 62 c88 33 165 61\r
172 62 6 1 25 -33 43 -75z m2973 6 c-14 -13 -15 -13 -9 3 3 10 6 31 7 45 l1\r
27 9 -30 c6 -23 5 -33 -8 -45z m1167 43 c0 -26 0 -26 -21 -7 -20 18 -18 23 19\r
33 1 1 2 -11 2 -26z m27 5 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1\r
-19z m310 0 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m1540 0 c-3\r
-8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-9429 -40 l-13 -23 -3 23\r
c-4 28 21 66 26 39 2 -9 -3 -26 -10 -39z m1648 4 c-11 -10 -15 4 -8 28 l7 25\r
3 -23 c2 -13 1 -26 -2 -30z m3414 40 c0 -4 -9 -8 -20 -9 -11 -1 -18 2 -15 8 7\r
11 35 12 35 1z m581 -2 c32 -18 21 -30 -26 -30 -46 0 -54 7 -33 28 15 15 33\r
15 59 2z m2479 0 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0\r
11 -4 11 -10z m-3876 -28 c0 -12 -1 -47 -2 -78 l-2 -56 -52 38 c-29 20 -60 44\r
-68 52 -13 13 -13 14 3 9 9 -4 17 -2 17 3 0 6 -6 10 -12 11 -7 0 10 11 37 25\r
59 28 80 27 79 -4z m80 -12 c6 0 36 -12 66 -26 30 -15 64 -28 75 -30 11 -1 50\r
-10 88 -19 37 -8 97 -17 134 -19 54 -3 68 -7 74 -22 7 -17 8 -16 8 5 1 23 3\r
24 59 18 32 -2 78 -15 101 -26 23 -12 50 -20 59 -17 9 3 33 1 52 -3 19 -5 26\r
-9 16 -10 -11 -1 -28 -9 -38 -18 -18 -16 -21 -16 -51 -1 -22 11 -71 18 -157\r
22 -69 3 -146 8 -170 11 -25 3 -65 7 -89 9 -31 2 -48 9 -55 22 -13 21 -39 44\r
-45 38 -2 -2 4 -13 14 -24 10 -11 15 -20 10 -20 -4 0 2 -8 13 -17 11 -10 42\r
-57 67 -106 45 -84 46 -87 21 -76 -14 7 -23 15 -21 19 4 6 -154 164 -253 253\r
-24 21 -42 46 -42 58 l0 20 26 -20 c15 -12 32 -21 38 -21z m-4228 21 c8 6 2\r
-13 -13 -42 -16 -30 -29 -49 -31 -42 -2 6 4 25 13 42 9 19 11 31 5 31 -6 0 -8\r
5 -4 12 6 9 9 9 12 0 3 -10 7 -10 18 -1z m236 -83 c-14 -46 -39 -139 -57 -207\r
l-32 -124 -40 59 c-48 71 -76 124 -69 131 2 3 12 -9 21 -26 8 -17 18 -31 21\r
-31 3 0 -6 20 -20 44 -14 25 -26 49 -26 54 0 5 37 28 83 50 45 23 88 51 96 64\r
l14 23 -24 -22 c-19 -17 -98 -59 -174 -91 -5 -3 1 7 14 22 14 14 26 24 29 22\r
2 -3 17 0 33 6 17 6 28 12 26 14 -2 3 -17 0 -32 -6 -26 -10 -27 -9 -20 17 9\r
37 21 47 79 67 63 21 66 20 67 -6 1 -21 2 -21 12 4 6 15 14 25 18 23 4 -3 -5\r
-42 -19 -87z m136 60 c9 -7 35 -32 57 -55 23 -24 48 -43 56 -43 8 0 1 11 -16\r
26 -23 20 -19 18 18 -6 27 -18 47 -34 45 -36 -7 -7 -173 38 -196 52 -13 9 -30\r
30 -37 47 -9 21 -14 25 -15 14 0 -11 9 -31 20 -46 15 -23 39 -34 117 -55 54\r
-16 109 -35 122 -43 24 -15 23 -16 -75 -67 -58 -30 -139 -83 -194 -128 -52\r
-43 -98 -78 -102 -78 -16 0 -7 50 33 186 23 76 47 161 54 187 19 67 29 77 66\r
67 17 -5 38 -15 47 -22z m793 -55 c74 -76 164 -178 208 -235 11 -15 6 -27 -35\r
-90 l-47 -73 -17 50 c-18 52 -185 393 -201 410 -11 11 -12 25 -1 25 4 0 46\r
-39 93 -87z m565 59 c-8 -10 -18 -30 -22 -47 l-8 -30 -6 30 c-7 31 6 59 21 49\r
5 -3 9 2 9 11 0 9 5 13 11 10 7 -5 5 -12 -5 -23z m344 -2 c124 -11 297 -27\r
385 -36 88 -8 218 -21 289 -27 l128 -12 -223 -191 c-352 -301 -428 -359 -444\r
-343 -7 8 -76 109 -153 224 -77 116 -168 250 -201 299 -69 100 -74 118 -33\r
111 15 -3 128 -14 252 -25z m1580 -20 c43 0 70 -12 70 -30 0 -14 -21 -19 -137\r
-33 -76 -10 -151 -17 -168 -17 -30 1 -29 2 38 65 l68 64 52 -25 c29 -13 63\r
-24 77 -24z m1460 40 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10\r
6 0 10 -4 10 -10z m2305 -10 c17 -19 17 -21 -9 -55 -15 -19 -31 -33 -37 -30\r
-5 4 -6 -2 -2 -12 6 -16 4 -16 -17 2 -13 11 -20 14 -16 8 4 -8 1 -13 -8 -13\r
-12 0 -16 10 -16 35 0 28 6 39 37 60 45 30 45 30 68 5z m-6945 -16 c0 -2 -9 0\r
-20 6 -11 6 -20 13 -20 16 0 2 9 0 20 -6 11 -6 20 -13 20 -16z m68 -5 c8 -12\r
11 -23 8 -27 -8 -8 -46 29 -46 44 0 18 23 8 38 -17z m512 16 c0 -18 89 -333\r
100 -355 4 -8 15 -40 24 -70 l16 -55 -205 210 c-113 116 -205 213 -205 217 0\r
9 51 25 155 47 114 24 115 24 115 6z m4030 0 c0 -8 -4 -15 -9 -15 -13 0 -22\r
16 -14 24 11 11 23 6 23 -9z m2014 -244 c47 -139 86 -257 86 -261 0 -5 -25\r
-23 -55 -40 l-56 -32 -82 87 c-45 48 -86 95 -90 105 -13 26 92 415 108 399 1\r
-2 42 -118 89 -258z m-2140 234 c3 -9 -1 -18 -10 -22 -19 -7 -28 2 -21 22 8\r
19 23 19 31 0z m716 2 c0 -19 -10 -27 -26 -20 -21 8 -17 33 6 33 11 0 20 -6\r
20 -13z m2220 3 c0 -5 -4 -10 -9 -10 -6 0 -13 5 -16 10 -3 6 1 10 9 10 9 0 16\r
-4 16 -10z m126 -27 c-6 -14 -9 -15 -16 -4 -11 19 -1 46 13 32 5 -5 7 -18 3\r
-28z m-7426 -5 c0 -6 -7 -5 -15 2 -8 7 -15 17 -15 22 0 6 7 5 15 -2 8 -7 15\r
-17 15 -22z m676 -396 c4 -22 1 -40 -11 -58 -22 -33 -37 -20 -65 54 -19 49\r
-111 359 -125 417 -3 11 40 -70 95 -180 55 -110 102 -215 106 -233z m4169 418\r
c3 -5 -1 -10 -9 -10 -9 0 -16 5 -16 10 0 6 4 10 9 10 6 0 13 -4 16 -10z m108\r
3 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m-4792 -60 c4 -10\r
15 -43 24 -73 24 -73 69 -170 116 -252 22 -37 38 -73 37 -80 -2 -7 3 -12 10\r
-10 19 3 36 -42 27 -75 -5 -18 -9 -23 -13 -13 -2 8 -12 31 -20 50 -9 19 -16\r
40 -17 46 0 6 -23 53 -51 105 -29 52 -73 140 -100 197 -27 56 -54 102 -61 102\r
-7 0 -19 13 -28 30 l-15 29 42 -19 c24 -10 46 -27 49 -37z m854 2 c-18 -42\r
-31 -38 -41 12 -6 29 -4 32 22 35 37 4 38 0 19 -47z m2394 33 c7 -13 33 -36\r
59 -51 42 -26 112 -82 112 -90 0 -4 3 -4 -122 -13 l-98 -7 0 85 c0 47 3 88 7\r
91 13 13 30 7 42 -15z m3477 -33 c13 -31 24 -57 24 -60 0 -2 -15 1 -32 6 -18\r
5 -45 9 -60 9 -31 0 -36 11 -12 31 8 7 22 25 30 41 8 15 17 28 20 28 3 0 16\r
-25 30 -55z m396 3 c-17 -17 -45 12 -36 36 6 16 8 16 28 -3 16 -16 18 -23 8\r
-33z m98 48 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2\r
10 -4z m-7974 -47 c-4 -23 -13 -51 -21 -62 l-15 -21 0 22 c0 23 29 102 37 102\r
3 0 3 -19 -1 -41z m74 22 c0 -10 -9 -29 -21 -42 -16 -19 -19 -20 -15 -6 3 10\r
6 30 6 43 0 15 6 24 15 24 8 0 15 -9 15 -19z m1431 -8 c-8 -15 -10 -15 -11 -2\r
0 17 10 32 18 25 2 -3 -1 -13 -7 -23z m239 13 c0 -8 -6 -38 -12 -68 -12 -49\r
-13 -51 -18 -23 -7 34 8 105 21 105 5 0 9 -6 9 -14z m3645 4 c-3 -5 -11 -10\r
-16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m-5485 -9 c0 -5 -7\r
-14 -15 -21 -16 -14 -18 -10 -9 14 6 17 24 22 24 7z m1560 -24 c0 -18 -2 -19\r
-10 -7 -13 20 -13 43 0 35 6 -3 10 -16 10 -28z m540 -267 c110 -165 197 -300\r
193 -300 -26 -1 -380 74 -388 82 -11 10 -24 518 -13 518 4 0 97 -135 208 -300z\r
m6476 238 c-3 -35 -9 -100 -13 -145 -3 -46 -9 -83 -14 -83 -4 0 -4 -15 1 -32\r
9 -34 20 -128 15 -128 -3 0 -75 150 -75 157 0 2 5 1 12 -3 6 -4 2 8 -9 27 -33\r
54 -64 149 -49 149 8 0 23 -26 35 -57 11 -32 30 -69 42 -83 l20 -25 -15 31\r
c-8 17 -24 54 -35 83 -16 44 -17 53 -5 57 8 2 21 6 30 9 9 3 23 0 32 -7 14\r
-12 14 -10 1 10 -12 21 -12 25 4 36 9 7 17 17 17 21 0 5 -8 1 -18 -8 -21 -20\r
-32 -13 -32 19 0 23 11 32 44 33 17 1 18 -4 12 -61z m-7057 22 c11 -24 11 -24\r
-3 -6 -9 11 -16 24 -16 30 0 12 5 7 19 -24z m112 -21 c-10 -23 -10 -23 -10 7\r
-1 17 2 34 7 38 11 12 14 -18 3 -45z m234 -257 c-4 -30 -9 -52 -11 -50 -12 13\r
-14 185 -2 268 l13 95 3 -130 c2 -71 0 -154 -3 -183z m2417 262 c-6 -61 -22\r
-65 -22 -5 0 38 4 51 13 48 7 -2 11 -18 9 -43z m1478 36 c0 -16 -60 -49 -130\r
-70 -35 -10 -65 -18 -67 -16 -2 1 15 22 37 46 38 41 41 43 85 37 27 -4 45 -3\r
45 3 0 6 7 10 15 10 8 0 15 -5 15 -10z m126 -26 c55 -19 102 -38 106 -42 4 -4\r
-53 -63 -127 -130 -134 -122 -135 -123 -135 -90 0 102 33 298 50 298 4 0 52\r
-16 106 -36z m2158 20 c9 -22 -3 -32 -14 -14 -12 19 -12 30 -1 30 5 0 12 -7\r
15 -16z m396 -15 c0 -11 -4 -17 -10 -14 -5 3 -10 15 -10 26 0 11 5 17 10 14 6\r
-3 10 -15 10 -26z m-6679 -2 c-10 -9 -11 -8 -5 6 3 10 9 15 12 12 3 -3 0 -11\r
-7 -18z m3819 -12 c-19 -19 -42 -35 -51 -35 -10 0 -20 -4 -23 -9 -3 -4 7 -6\r
22 -3 27 5 27 5 8 -17 -13 -14 -31 -21 -58 -21 -41 0 -51 15 -17 25 12 4 32\r
19 45 34 35 40 28 43 -10 5 -35 -35 -56 -43 -57 -21 0 6 -4 3 -9 -9 -11 -27\r
-61 -34 -239 -33 -131 1 -135 1 -101 16 19 8 82 24 140 34 58 11 125 26 149\r
34 62 21 74 20 66 -7 -5 -22 -5 -22 8 1 18 31 37 38 106 40 l55 1 -34 -35z\r
m1150 -225 c39 -91 101 -241 137 -334 l65 -170 7 -300 c3 -166 6 -302 6 -302\r
0 -1 -56 48 -125 108 -69 61 -171 146 -227 190 -65 50 -103 86 -103 98 0 48\r
88 705 111 824 5 27 9 60 8 75 -2 45 -67 -363 -100 -624 -17 -137 -33 -252\r
-35 -254 -1 -2 -6 10 -9 25 -4 16 -27 102 -51 192 l-43 164 44 89 c46 91 156\r
361 169 414 4 17 15 38 23 47 15 17 17 15 34 -30 9 -26 49 -121 89 -212z\r
m1160 239 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10 10\r
-16z m590 -1 c0 -5 -4 -7 -9 -4 -5 4 -12 0 -14 -6 -3 -7 -6 -3 -6 9 -1 16 3\r
21 14 17 8 -4 15 -10 15 -16z m-4037 -112 c59 -54 106 -101 104 -103 -3 -2\r
-62 25 -133 60 l-129 64 3 39 c1 21 5 45 7 53 7 17 8 16 148 -113z m3491 99\r
c29 -29 22 -39 -14 -19 -14 7 -19 13 -11 14 11 0 11 3 1 15 -20 24 -3 17 24\r
-10z m-7937 -74 c-10 -129 -25 -159 -25 -47 0 84 9 136 24 136 4 0 4 -40 1\r
-89z m728 64 c20 -16 25 -24 14 -25 -8 0 -26 11 -39 25 -30 32 -14 32 25 0z\r
m2517 0 l203 -17 203 -101 c112 -56 209 -109 216 -117 12 -14 35 -101 51 -191\r
6 -35 5 -37 -34 -53 -23 -9 -45 -16 -50 -16 -10 0 11 88 34 143 8 20 15 42 14\r
49 -1 19 -26 -38 -49 -115 -21 -67 -22 -68 -43 -54 -12 7 -56 33 -97 57 -41\r
24 -201 126 -356 226 -154 101 -289 186 -300 189 -18 6 -18 5 -1 -7 80 -56\r
556 -364 650 -420 64 -39 117 -74 117 -77 0 -4 -99 -103 -221 -220 -144 -139\r
-224 -210 -230 -204 -6 6 -48 116 -93 244 -46 129 -106 295 -134 369 -110 296\r
-125 347 -97 336 7 -2 105 -12 217 -21z m3145 -7 c-3 -7 -5 -2 -5 12 0 14 2\r
19 5 13 2 -7 2 -19 0 -25z m413 -107 c78 -74 148 -144 156 -156 13 -20 13 -41\r
-1 -171 -8 -82 -16 -169 -18 -194 -3 -53 5 -69 -95 184 -41 105 -99 244 -129\r
309 -68 148 -76 170 -64 165 6 -1 73 -63 151 -137z m-5715 -73 l196 -203 -102\r
-3 c-119 -3 -99 -20 -198 163 -70 130 -118 245 -101 245 4 0 97 -91 205 -202z\r
m1944 86 c35 -99 290 -795 306 -837 7 -16 3 -15 -41 4 -111 48 -913 368 -938\r
375 -15 3 -25 11 -23 18 2 6 78 72 169 146 152 125 347 289 443 373 22 19 41\r
34 43 32 2 -2 20 -52 41 -111z m820 24 c30 -128 32 -138 27 -138 -17 0 -347\r
169 -368 188 -4 4 14 8 40 10 26 2 83 9 127 16 44 7 96 14 116 15 l36 1 22\r
-92z m68 70 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-2258 -39\r
c-14 -28 -19 -23 -19 19 1 34 2 36 15 18 10 -13 11 -24 4 -37z m66 -7 c-6 -24\r
-7 -25 -17 -8 -7 13 -7 26 3 45 10 22 13 23 17 8 2 -10 1 -31 -3 -45z m4006\r
-46 c-6 -52 -11 -116 -11 -141 0 -25 -5 -45 -10 -45 -6 0 -34 15 -63 33 -29\r
18 -83 50 -120 71 l-68 38 42 37 c26 23 76 49 138 72 53 19 97 34 99 33 2 -1\r
-1 -45 -7 -98z m2643 87 c7 -18 -9 -41 -21 -29 -4 4 -1 11 7 16 10 7 11 10 3\r
10 -7 0 -13 5 -13 10 0 16 17 11 24 -7z m-6578 -108 c3 -30 2 -35 -5 -20 -5\r
11 -10 30 -10 43 -1 12 -6 31 -13 41 -6 11 -8 26 -3 37 7 16 10 12 17 -21 5\r
-22 11 -58 14 -80z m6715 92 c-13 -13 -26 -3 -16 12 3 6 11 8 17 5 6 -4 6 -10\r
-1 -17z m-2169 -89 c-4 -4 -7 10 -6 34 2 67 7 77 11 24 2 -27 0 -53 -5 -58z\r
m-4728 70 c9 -36 7 -41 -9 -28 -16 13 -21 50 -6 50 5 0 11 -10 15 -22z m6716\r
2 c0 -4 -7 -11 -16 -14 -28 -11 -35 -7 -24 14 10 18 40 18 40 0z m-4393 -82\r
c-2 -18 -4 -4 -4 32 0 36 2 50 4 33 2 -18 2 -48 0 -65z m723 65 c54 -10 137\r
-16 193 -15 92 1 129 -10 70 -21 -39 -7 -228 -82 -269 -106 l-34 -20 -50 85\r
c-27 46 -50 89 -50 94 0 6 10 8 23 5 12 -3 65 -13 117 -22z m1381 -99 l13\r
-101 -102 -294 c-115 -335 -124 -359 -133 -359 -3 0 -14 64 -23 143 -10 78\r
-28 216 -41 306 -13 91 -21 169 -19 173 3 5 67 65 142 134 94 86 138 120 143\r
112 4 -8 13 -59 20 -114z m1416 105 c40 -25 32 -42 -18 -37 -26 2 -34 9 -40\r
31 -9 34 9 36 58 6z m814 -1 c-4 -13 -27 -33 -51 -45 -24 -13 -48 -27 -53 -32\r
-7 -7 -18 -2 -33 11 l-22 22 72 33 c86 39 98 41 87 11z m-8171 4 c0 -5 -9 -17\r
-20 -27 -22 -20 -26 -14 -10 16 11 19 30 26 30 11z m1447 -14 c-3 -8 -6 -5 -6\r
6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m4682 -85 c-40 -155 -182 -523 -196 -509\r
-11 11 61 365 84 410 16 31 133 206 138 206 1 0 -10 -48 -26 -107z m1316 86\r
c16 -6 13 -8 -15 -8 -19 0 -44 7 -55 15 -19 15 -18 16 15 9 19 -4 44 -11 55\r
-16z m-6745 -29 c0 -11 -4 -20 -9 -20 -19 0 -71 23 -71 31 0 6 8 5 19 -1 26\r
-13 41 -12 17 1 -14 9 -15 13 -5 19 18 12 49 -7 49 -30z m893 -4 c3 -19 2 -48\r
-2 -63 -7 -26 -9 -25 -19 24 -11 51 -8 88 8 78 4 -2 10 -20 13 -39z m5920 37\r
c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-5842 -77 c22 -42 21\r
-50 -5 -40 -11 4 -15 13 -10 26 4 13 2 18 -5 14 -13 -8 -26 38 -15 55 6 10 9\r
10 12 -1 2 -8 13 -32 23 -54z m3647 52 c-3 -8 -34 -15 -84 -19 -74 -5 -76 -5\r
-20 -7 52 -2 57 -4 46 -18 -29 -34 -46 -35 -91 -1 l-44 32 85 11 c47 6 91 12\r
98 13 8 0 12 -5 10 -11z m2330 -3 c97 -17 117 -26 82 -36 -23 -7 -23 -7 6 -8\r
26 -1 35 -7 48 -35 9 -19 19 -49 23 -67 l6 -32 -44 30 c-24 16 -84 51 -132 78\r
-49 27 -84 51 -78 53 6 2 34 -1 61 -7 75 -16 95 -12 25 5 -33 8 -71 13 -85 10\r
-14 -2 -36 2 -50 9 -25 14 -24 14 15 14 22 1 77 -6 123 -14z m626 9 c10 -4 16\r
-18 16 -35 0 -32 -15 -39 -23 -11 -2 9 -8 25 -12 35 -8 18 -5 20 19 11z m51\r
-12 c-3 -3 -11 0 -18 7 -9 10 -8 11 6 5 10 -3 15 -9 12 -12z m-8315 -4 c0 -7\r
29 -60 63 -118 l64 -106 -8 -69 c-4 -39 -15 -99 -23 -135 -9 -36 -16 -85 -17\r
-110 -1 -44 -2 -44 -13 20 -12 63 -73 298 -102 392 -18 60 -18 83 2 113 18 27\r
34 33 34 13z m621 -10 c30 -12 61 -27 70 -35 8 -7 21 -13 27 -13 18 0 14 -17\r
-5 -25 -10 -3 -90 -9 -178 -12 -88 -3 -167 -9 -175 -14 -21 -12 123 -11 239 1\r
52 6 96 8 99 5 3 -2 -19 -72 -48 -155 -29 -83 -50 -153 -47 -156 5 -5 64 157\r
95 261 11 37 23 60 32 60 8 0 33 -36 57 -81 l43 -81 -52 -36 c-29 -19 -80 -58\r
-113 -86 l-60 -52 -18 23 c-11 13 -64 74 -119 135 -121 135 -131 150 -124 169\r
4 12 196 112 217 114 4 0 31 -10 60 -22z m4431 2 c25 -5 36 -4 32 2 -9 15 3 8\r
68 -35 l56 -39 30 22 c23 17 37 21 59 15 l28 -7 -55 -49 c-30 -27 -61 -49 -68\r
-49 -20 0 -293 146 -286 153 7 7 73 0 136 -13z m328 11 c0 -19 -49 -41 -72\r
-32 -22 8 -22 8 7 24 33 18 65 22 65 8z m2060 1 c0 -4 10 -8 23 -9 28 -3 184\r
-80 265 -132 44 -29 62 -47 62 -62 0 -28 -23 -22 -165 42 -124 56 -205 107\r
-205 128 0 8 -3 11 -6 8 -4 -3 -16 -1 -27 4 -16 9 -17 13 -6 20 17 11 59 12\r
59 1z m400 -15 c30 -8 62 -17 70 -19 8 -3 12 -3 8 -1 -5 3 -8 8 -8 13 0 12 78\r
4 95 -10 27 -22 16 -32 -33 -29 -26 1 -53 0 -58 -3 -16 -10 -139 37 -136 52 2\r
7 -3 10 -11 7 -8 -3 -20 -1 -28 5 -17 12 22 6 101 -15z m405 -22 c18 -46 14\r
-128 -6 -141 -16 -10 -46 24 -44 49 1 13 1 15 -2 4 -3 -10 -10 -16 -16 -14 -7\r
3 -11 11 -9 18 2 7 5 35 7 63 3 46 15 66 42 66 6 0 19 -20 28 -45z m1012 -2\r
c-3 -10 -5 -2 -5 17 0 19 2 27 5 18 2 -10 2 -26 0 -35z m40 15 c-3 -7 -5 -2\r
-5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m-7847 0 c0 -19 -2 -20 -10 -8 -13 19\r
-13 30 0 30 6 0 10 -10 10 -22z m40 12 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10\r
-3 6 -1 10 4 10 6 0 11 -4 11 -10z m2657 -165 c2 -93 -1 -176 -6 -184 -7 -11\r
-23 -2 -72 39 -35 29 -70 61 -77 71 -7 10 -21 66 -31 126 l-18 108 76 6 c42 3\r
87 5 101 5 l25 -1 2 -170z m187 106 c78 -37 148 -76 156 -85 12 -16 29 -17\r
165 -11 96 5 159 4 170 -2 23 -13 -3 -22 -332 -108 -139 -36 -271 -72 -293\r
-80 l-40 -14 0 184 c0 163 2 185 16 185 9 0 80 -31 158 -69z m2036 65 c0 -3\r
-4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-4840 -27\r
c0 -6 -4 -7 -10 -4 -5 3 -10 11 -10 16 0 6 5 7 10 4 6 -3 10 -11 10 -16z\r
m3360 4 c0 -14 2 -15 9 -4 7 11 34 1 130 -50 67 -34 121 -67 121 -71 0 -5 -87\r
-7 -192 -4 -106 3 -249 5 -318 6 -122 1 -124 1 -95 17 49 28 298 122 323 122\r
14 1 22 -5 22 -16z m2473 5 c12 -6 45 -28 72 -48 28 -21 115 -68 195 -105 80\r
-37 147 -69 149 -70 1 -2 -35 -23 -80 -46 -46 -23 -96 -50 -111 -61 l-27 -19\r
-42 63 c-59 88 -183 250 -202 267 -10 7 -17 17 -17 22 0 13 37 11 63 -3z m955\r
-15 c5 -16 19 -44 32 -63 12 -19 19 -27 16 -17 -4 11 -2 16 5 12 6 -4 8 -13 5\r
-20 -2 -8 8 -44 24 -82 40 -92 38 -160 -2 -105 -10 13 -31 18 -83 21 -38 2\r
-73 5 -77 8 -9 5 -11 67 -2 76 3 3 16 -3 28 -15 44 -42 86 -70 98 -65 7 2 -3\r
11 -22 19 -19 9 -47 29 -63 45 -26 28 -27 31 -13 69 l14 39 31 -65 c37 -79 39\r
-74 6 14 -25 65 -34 156 -16 156 5 0 13 -12 19 -27z m-154 -38 c-4 -16 -8 -33\r
-11 -37 -4 -7 -73 23 -72 32 0 3 16 17 37 32 42 30 56 22 46 -27z m-4293 8\r
c-10 -17 -10 -16 -11 3 0 23 13 41 18 25 2 -6 -1 -18 -7 -28z m-2392 -21 c1\r
-7 -3 -10 -9 -7 -5 3 -10 18 -9 33 0 24 1 25 9 7 5 -11 9 -26 9 -33z m5972\r
-147 c62 -87 97 -145 94 -155 -4 -8 -19 -62 -35 -120 -16 -58 -33 -116 -38\r
-130 -9 -24 -9 -24 -20 -3 -31 57 -154 542 -152 598 1 15 41 -35 151 -190z\r
m388 178 c31 -9 58 -18 60 -20 2 -1 -8 -15 -23 -30 -14 -15 -31 -36 -39 -46\r
-11 -16 -15 -12 -38 47 -15 36 -24 66 -21 66 3 0 30 -8 61 -17z m-7922 -15\r
c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m5507 -33 c45 -24 95\r
-53 111 -65 l30 -20 -40 0 c-61 0 -278 20 -288 27 -8 5 88 101 102 103 2 0 40\r
-20 85 -45z m-3914 -3 c0 -21 -2 -24 -10 -12 -13 20 -13 53 0 45 6 -3 10 -18\r
10 -33z m6405 2 l-30 -26 40 20 c22 11 60 23 83 27 41 7 43 6 34 -12 -6 -10\r
-38 -45 -73 -78 -34 -33 -62 -62 -62 -65 1 -3 -1 -7 -4 -10 -4 -3 -3 1 1 8 9\r
15 1 15 -23 0 -19 -12 -51 -5 -51 10 0 5 15 13 33 17 l32 8 -27 4 c-16 3 -28\r
10 -28 17 0 22 70 106 88 106 13 -1 10 -7 -13 -26z m-6309 -11 c-10 -10 -19 5\r
-10 18 6 11 8 11 12 0 2 -7 1 -15 -2 -18z m74 -12 c-1 -13 -3 -13 -15 3 -19\r
26 -19 42 0 26 8 -7 15 -20 15 -29z m2197 -3 c-3 -7 -5 -2 -5 12 0 14 2 19 5\r
13 2 -7 2 -19 0 -25z m4290 -15 c28 -18 54 -37 57 -42 3 -5 -1 -24 -9 -42 -8\r
-19 -14 -27 -15 -19 0 21 -39 92 -59 107 -39 32 -51 32 -20 1 35 -35 77 -114\r
66 -124 -21 -22 -210 -14 -243 10 -16 12 -14 17 25 57 40 41 48 38 12 -5 -15\r
-18 -15 -18 5 -6 12 7 32 31 45 53 24 39 55 60 74 49 6 -3 33 -21 62 -39z\r
m-8171 -148 c38 -129 47 -176 48 -242 1 -46 4 -83 9 -83 4 0 8 8 9 18 0 9 4\r
-5 7 -33 4 -27 5 -52 4 -54 -2 -2 -13 9 -25 25 -12 16 -37 43 -54 59 -32 30\r
-32 30 -48 200 -32 345 -24 363 50 110z m448 31 c65 -74 125 -144 134 -157 19\r
-27 33 -18 -214 -129 -105 -48 -208 -96 -229 -109 l-37 -22 7 58 c4 32 15 128\r
25 213 15 135 20 156 39 170 12 8 49 36 83 63 33 26 63 47 67 47 4 0 60 -60\r
125 -134z m979 29 c14 -49 43 -143 65 -207 21 -65 37 -118 34 -118 -14 0 -272\r
214 -272 225 0 17 133 206 140 199 4 -5 19 -49 33 -99z m228 60 c18 -33 21\r
-47 12 -56 -14 -14 -38 20 -48 69 -9 46 8 40 36 -13z m-1722 -180 c7 -77 14\r
-159 17 -182 6 -38 4 -41 -15 -36 -39 10 -44 29 -51 211 -6 152 -5 181 8 202\r
l16 25 7 -40 c4 -22 12 -103 18 -180z m1601 186 c0 -5 3 -17 7 -27 4 -11 3\r
-15 -4 -11 -14 9 -24 47 -12 47 5 0 9 -4 9 -9z m4650 -18 c-1 -24 -2 -26 -11\r
-10 -5 9 -7 22 -4 27 10 17 15 11 15 -17z m-4480 1 c0 -8 -5 -12 -10 -9 -6 4\r
-8 11 -5 16 9 14 15 11 15 -7z m3476 -9 c-10 -14 -58 -81 -109 -149 -51 -68\r
-117 -158 -147 -200 -54 -75 -55 -75 -61 -46 -10 48 -21 357 -14 390 l7 30\r
170 0 170 0 -16 -25z m284 -3 l135 -7 -170 -99 c-93 -55 -237 -139 -318 -188\r
-82 -48 -166 -97 -188 -108 l-40 -21 57 78 c31 43 106 144 166 224 l109 146\r
57 -9 c31 -4 118 -12 192 -16z m-3870 -23 c12 -22 20 -48 18 -57 -2 -12 -8 -6\r
-20 18 -36 79 -34 111 2 39z m3240 -86 c1 -60 5 -155 10 -213 4 -58 7 -106 6\r
-107 -1 -1 -55 18 -121 41 -66 24 -219 78 -340 121 l-219 79 34 15 c35 14 593\r
168 618 170 9 1 12 -27 12 -106z m804 -83 c63 -436 66 -474 48 -492 -9 -9\r
-109 20 -402 113 -214 68 -390 127 -390 130 0 4 57 40 128 81 315 184 549 322\r
566 334 11 8 21 12 22 11 2 -1 14 -81 28 -177z m1333 89 c91 -100 83 -78 128\r
-334 44 -244 66 -387 63 -397 -3 -8 -287 356 -313 402 -8 13 -6 74 7 211 9\r
107 17 197 18 202 1 17 19 1 97 -84z m-7135 -21 l-3 -102 -28 44 c-44 72 -44\r
76 -5 120 20 22 37 40 38 40 0 0 0 -46 -2 -102z m1641 87 c-3 -9 -8 -14 -10\r
-11 -3 3 -2 9 2 15 9 16 15 13 8 -4z m47 -44 c-1 -10 -6 -7 -15 9 -19 33 -18\r
50 0 26 8 -11 15 -27 15 -35z m7687 -3 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2\r
-7 2 -19 0 -25z m-7513 6 c10 -25 -1 -29 -14 -5 -6 12 -7 21 -1 21 5 0 12 -7\r
15 -16z m6205 -159 c43 -93 115 -246 160 -340 69 -143 77 -165 54 -145 -51 45\r
-543 534 -543 540 0 5 52 35 165 95 27 14 58 24 68 23 14 -2 40 -50 96 -173z\r
m71 151 c136 -23 182 -27 175 -16 -3 6 4 10 17 10 18 0 20 -2 8 -10 -11 -7 -8\r
-10 16 -10 29 0 33 -5 73 -92 23 -50 45 -103 47 -118 4 -18 -9 -63 -39 -136\r
-24 -60 -57 -145 -72 -189 -16 -44 -32 -84 -36 -89 -5 -5 -28 32 -53 85 -24\r
52 -83 177 -131 279 -48 102 -98 214 -111 249 l-25 64 23 -7 c13 -3 61 -12\r
108 -20z m-1843 -38 c-16 -35 -17 -54 -4 -75 5 -8 3 -13 -3 -13 -6 0 -9 -4 -6\r
-8 7 -12 -46 -101 -92 -152 l-41 -45 39 82 c21 44 51 115 66 157 14 42 31 76\r
36 76 6 0 7 8 3 18 -5 13 -3 14 6 5 9 -9 8 -19 -4 -45z m-2066 -5 c62 -50 70\r
-63 42 -63 -10 0 -34 -3 -54 -6 l-37 -6 -7 43 c-3 24 -9 52 -11 62 -8 26 3 21\r
67 -30z m-2318 17 c3 -11 1 -18 -4 -14 -5 3 -9 12 -9 20 0 20 7 17 13 -6z\r
m4437 16 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10\r
-4z m-4621 -42 c17 -47 5 -57 -14 -11 -17 42 -18 47 -7 47 4 0 14 -16 21 -36z\r
m6843 -1 c23 -17 44 -35 45 -40 4 -10 -105 -143 -117 -143 -4 0 -61 123 -99\r
213 -2 6 26 8 62 5 54 -3 74 -10 109 -35z m58 -1 c0 -7 -4 -10 -10 -7 -5 3\r
-10 16 -10 28 0 18 2 19 10 7 5 -8 10 -21 10 -28z m-8671 -46 c30 -58 33 -72\r
29 -130 -4 -60 5 -79 14 -31 2 11 14 -18 26 -65 26 -93 120 -312 132 -305 4 2\r
5 -6 3 -18 -2 -12 10 -60 26 -107 l29 -84 -25 29 c-14 17 -56 64 -93 106 -78\r
87 -81 93 -171 448 -49 194 -51 205 -34 217 10 7 21 11 25 9 3 -2 21 -33 39\r
-69z m74 -33 c6 -98 -3 -135 -17 -77 -6 24 3 189 9 182 2 -2 5 -49 8 -105z\r
m1339 92 c22 -9 25 -17 63 -200 34 -161 121 -545 131 -577 5 -17 -8 -18 -173\r
-18 l-179 0 -13 48 c-8 26 -18 103 -22 172 -4 69 -11 168 -14 220 l-6 95 27\r
-47 c15 -27 31 -48 35 -48 4 0 15 33 24 73 22 90 41 128 99 195 25 30 46 56\r
46 60 0 11 -52 -43 -87 -91 -19 -26 -40 -46 -47 -44 -12 4 -106 154 -106 170\r
0 11 193 4 222 -8z m438 -5 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10\r
4 10 6 0 11 -4 11 -10z m68 -19 c4 -28 -13 -20 -21 9 -3 14 -1 20 6 17 7 -2\r
14 -14 15 -26z m5497 -38 c26 -89 47 -222 40 -257 -3 -17 -20 -92 -37 -166\r
-31 -139 -47 -186 -48 -141 0 32 -86 519 -96 544 -3 10 12 25 48 46 29 17 58\r
31 65 31 6 0 19 -26 28 -57z m-6164 -64 l40 -67 -17 -65 -18 -66 -27 72 c-52\r
142 -71 263 -32 211 8 -10 32 -49 54 -85z m417 -77 c64 -52 82 -72 79 -87 -5\r
-25 -93 -353 -114 -423 -8 -30 -16 -52 -18 -50 -4 3 -26 102 -105 468 -28 129\r
-52 243 -54 252 -3 11 21 -3 62 -38 37 -31 104 -86 150 -122z m175 127 c-6 -6\r
-10 1 -10 23 0 30 1 30 10 10 7 -15 7 -26 0 -33z m126 -27 c-1 -26 -4 -58 -8\r
-72 -6 -21 -9 -16 -20 31 -10 43 -11 61 -2 78 18 32 31 16 30 -37z m-229 8 c0\r
-13 -1 -13 -10 0 -5 8 -10 22 -10 30 0 13 1 13 10 0 5 -8 10 -22 10 -30z m459\r
4 c102 -20 188 -37 189 -39 2 -2 -51 -40 -119 -86 -67 -45 -157 -106 -198\r
-136 l-76 -55 -3 84 c-4 90 7 268 15 268 3 0 89 -16 192 -36z m1831 11 c0 -13\r
-8 -15 -37 -10 -28 4 -33 3 -18 -4 11 -5 30 -10 42 -10 18 -1 26 -14 50 -88\r
15 -49 27 -95 26 -103 -2 -19 117 -196 418 -620 65 -91 116 -166 115 -168 -2\r
-1 -250 113 -552 254 -302 140 -566 263 -587 272 l-39 17 227 215 c125 118\r
232 216 238 217 7 2 27 -16 44 -40 37 -48 137 -158 129 -141 -3 6 -39 51 -81\r
100 -41 49 -75 92 -75 95 0 8 52 27 78 28 14 1 22 -5 22 -14z m282 -69 c-20\r
-47 -39 -83 -43 -81 -11 7 -31 91 -27 116 2 19 12 26 48 36 25 6 48 12 51 12\r
4 1 -10 -37 -29 -83z m4378 22 c0 -20 11 -103 25 -184 14 -81 23 -150 20 -153\r
-7 -7 -13 1 -104 129 -92 130 -92 113 -2 218 49 57 61 55 61 -10z m-4213 16\r
c54 -20 179 -64 278 -99 235 -82 295 -105 295 -112 0 -4 -32 -63 -71 -132 -40\r
-69 -85 -150 -101 -178 -18 -32 -36 -53 -47 -53 -9 0 -57 12 -106 26 -71 20\r
-106 38 -174 87 -125 90 -196 164 -232 242 -23 49 -30 74 -25 98 8 43 63 157\r
75 157 6 0 54 -16 108 -36z m3589 -250 l293 -286 12 -61 c7 -35 15 -54 18 -44\r
5 14 8 14 31 -3 14 -10 23 -21 20 -23 -8 -7 -284 21 -331 33 -93 25 -196 96\r
-289 197 -60 65 -130 168 -130 191 0 19 73 282 79 282 2 0 135 -129 297 -286z\r
m-6192 260 c9 -24 7 -31 -4 -14 -8 12 -10 10 -10 -10 -1 -22 -2 -23 -11 -7\r
-11 19 -6 47 10 47 5 0 12 -7 15 -16z m-834 -29 c7 -9 8 -15 2 -15 -5 0 -12 7\r
-16 15 -3 8 -4 15 -2 15 2 0 9 -7 16 -15z m737 -15 c1 -10 -2 -22 -7 -25 -6\r
-4 -10 7 -10 26 0 34 12 33 17 -1z m120 8 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13\r
3 -3 4 -12 1 -19z m-977 8 c0 -2 -3 -11 -6 -20 -9 -23 -24 -20 -24 4 0 11 7\r
20 15 20 8 0 15 -2 15 -4z m155 -6 c-3 -5 4 -19 15 -30 23 -23 21 -36 -3 -27\r
-21 8 -30 67 -10 67 2 0 2 -4 -2 -10z m-108 -26 c-7 -7 -37 7 -37 17 0 6 9 5\r
21 -1 11 -7 19 -14 16 -16z m5512 -16 c6 -24 28 -109 50 -190 l39 -147 -31 -6\r
c-48 -7 -303 -35 -327 -35 -19 0 -17 6 22 48 44 50 170 254 203 330 11 23 22\r
42 26 42 4 0 12 -19 18 -42z m-5728 -23 c-33 -58 -37 -70 -21 -60 5 3 -32 -75\r
-82 -174 -51 -99 -93 -179 -95 -177 -12 11 55 162 107 242 34 52 60 98 57 100\r
-9 9 -117 -162 -142 -224 -14 -33 -27 -79 -31 -101 -4 -23 -9 -41 -13 -41 -7\r
0 -123 118 -190 193 -42 48 -42 49 -24 69 10 11 36 29 58 41 35 18 394 184\r
403 186 2 1 -10 -24 -27 -54z m1801 -281 c169 -403 178 -425 273 -649 102\r
-237 177 -426 172 -431 -2 -2 -55 55 -118 128 -220 254 -534 614 -673 772\r
-219 247 -210 236 -198 248 26 26 388 267 397 264 6 -1 72 -151 147 -332z\r
m378 141 c478 -192 670 -278 1350 -602 74 -35 181 -85 238 -110 56 -26 101\r
-47 100 -48 -8 -6 -875 12 -885 18 -7 5 -16 -1 -23 -13 -6 -12 -55 -53 -108\r
-93 -53 -39 -202 -149 -331 -245 -168 -124 -237 -170 -242 -160 -4 7 -32 76\r
-62 153 -31 77 -77 190 -102 250 -46 106 -145 345 -245 585 -26 63 -80 191\r
-119 283 -39 93 -71 171 -71 174 0 8 39 -7 500 -192z m-2623 133 c-3 -7 -5 -2\r
-5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m683 22 c0 -5 -9 -10 -20 -10 -12 0\r
-20 -7 -20 -17 0 -15 -2 -14 -15 3 -22 29 -18 34 20 34 19 0 35 -4 35 -10z\r
m961 -30 c5 0 9 -9 9 -20 0 -14 -7 -20 -21 -20 -17 0 -20 4 -15 23 3 12 6 31\r
7 42 2 17 2 17 6 -2 2 -13 9 -23 14 -23z m-1041 15 c0 -10 -30 -65 -35 -65 -5\r
0 4 49 12 63 5 8 23 10 23 2z m110 -24 c0 -3 -11 -11 -25 -17 -27 -13 -50 2\r
-37 22 15 24 62 20 62 -5z m33 14 c4 -8 2 -17 -3 -20 -6 -4 -10 3 -10 14 0 25\r
6 27 13 6z m52 -5 c3 -5 2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0\r
13 -4 16 -10z m-969 -149 c62 -196 64 -204 61 -207 -7 -7 -99 214 -116 281\r
-19 74 -19 76 -1 60 10 -9 35 -69 56 -134z m801 97 c-7 -4 -15 0 -19 10 -6 16\r
-7 16 -7 0 -1 -10 -11 -28 -23 -40 -13 -13 -30 -39 -40 -60 l-16 -36 29 10\r
c16 5 29 12 29 15 0 3 -7 3 -15 -1 -18 -7 -20 15 -3 32 7 7 21 12 32 12 20 0\r
86 -39 86 -51 0 -4 -26 -11 -57 -17 -84 -16 -123 -22 -123 -19 0 11 54 113 66\r
124 8 8 22 29 30 46 l16 31 13 -25 c10 -18 10 -26 2 -31z m841 30 c-2 -6 -10\r
-14 -16 -16 -7 -2 -10 2 -6 12 7 18 28 22 22 4z m-665 -4 c-9 -4 -9 -13 -3\r
-30 7 -17 7 -23 0 -19 -15 10 -12 -6 6 -26 20 -22 11 -39 -21 -39 -30 0 -33 6\r
-27 53 4 33 6 36 20 25 13 -11 15 -10 9 5 -8 22 -1 37 16 36 9 0 9 -2 0 -5z\r
m692 -4 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z\r
m6770 -135 c37 -161 46 -140 -79 -191 -60 -24 -110 -43 -111 -41 -2 2 116 313\r
136 357 l11 25 10 -25 c5 -13 20 -70 33 -125z m-7782 68 c-15 -69 -27 -92 -40\r
-79 -8 8 37 146 48 146 4 0 0 -30 -8 -67z m6766 -28 c1 -16 -36 48 -43 75 -4\r
14 4 5 18 -20 14 -25 25 -49 25 -55z m-7406 71 c8 -8 18 -41 21 -73 8 -63 24\r
-123 37 -137 4 -5 2 11 -5 35 -8 24 -17 73 -21 109 -7 59 -6 63 9 51 9 -8 31\r
-32 48 -54 29 -37 33 -50 43 -148 6 -64 6 -105 1 -101 -5 3 -6 -3 -3 -13 11\r
-27 37 -196 37 -235 -1 -50 -14 -22 -35 75 -19 89 -63 234 -75 250 -10 12 -75\r
190 -84 228 -7 30 4 35 27 13z m877 -11 c0 -30 -11 -32 -33 -7 -19 21 -13 32\r
15 32 13 0 18 -7 18 -25z m30 -10 c0 -19 -4 -35 -10 -35 -11 0 -14 53 -3 63\r
11 12 13 8 13 -28z m844 -25 c20 -27 34 -50 31 -50 -13 0 -94 83 -89 91 10 17\r
22 9 58 -41z m6740 -59 c37 -52 65 -99 63 -104 -2 -6 -22 -18 -45 -28 l-41\r
-18 -16 77 c-10 42 -23 99 -31 126 -22 78 -25 80 70 -53z m-7691 92 c11 -10\r
-13 -33 -34 -33 -24 0 -25 16 -1 29 20 12 27 13 35 4z m1011 -30 c11 -68 7\r
-81 -13 -43 -32 61 -35 80 -13 80 15 0 21 -9 26 -37z m-820 12 c3 -8 1 -15 -4\r
-15 -6 0 -10 7 -10 15 0 8 2 15 4 15 2 0 6 -7 10 -15z m769 -79 l67 -50 1\r
-386 c0 -212 2 -405 4 -430 2 -32 0 -39 -6 -25 -9 21 -66 271 -94 415 -9 47\r
-39 185 -66 307 -27 123 -49 232 -49 244 0 21 0 21 38 -2 20 -13 67 -46 105\r
-73z m7385 48 c-18 -26 -44 -54 -58 -63 -25 -16 -24 -15 4 24 25 35 74 84 84\r
85 2 0 -11 -21 -30 -46z m45 15 c-10 -17 -26 -38 -37 -47 -10 -9 -4 4 15 31\r
37 53 49 62 22 16z m-8493 17 c0 -2 -7 -9 -15 -16 -13 -11 -14 -10 -9 4 5 14\r
24 23 24 12z m5394 -41 c-12 -35 -33 -59 -97 -113 -86 -72 -136 -106 -122 -80\r
7 10 225 234 232 237 1 1 -5 -19 -13 -44z m-5264 1 c0 -5 -7 -3 -15 4 -8 7\r
-12 17 -9 22 7 10 24 -9 24 -26z m42 7 c34 -32 36 -46 6 -41 -13 2 -27 15 -35\r
36 -16 39 -8 41 29 5z m6524 -114 c18 -42 42 -95 53 -118 24 -45 137 -425 141\r
-469 0 -1 -8 2 -17 7 -10 5 -31 15 -48 22 -16 7 -87 71 -157 142 -114 116\r
-128 134 -128 165 0 19 16 105 35 191 20 86 38 167 41 180 5 24 6 24 26 -10\r
12 -19 36 -68 54 -110z m-5711 -239 c42 -195 91 -419 109 -497 18 -79 32 -143\r
30 -143 -3 0 -36 50 -208 314 -64 98 -119 176 -121 174 -3 -3 30 -58 74 -124\r
43 -65 121 -185 174 -266 l95 -147 -100 -168 c-55 -92 -103 -172 -108 -176\r
-30 -33 -138 622 -149 906 0 21 26 139 59 264 33 124 60 228 61 232 2 14 12\r
-31 84 -369z m3508 276 c144 -46 307 -98 362 -115 55 -18 114 -37 130 -45 l30\r
-13 -65 -30 c-36 -17 -121 -51 -190 -74 l-125 -43 -195 2 c-171 1 -274 9 -388\r
28 -20 3 -32 10 -30 18 6 24 193 356 201 356 4 0 125 -38 270 -84z m1789 -22\r
c46 -58 92 -118 103 -133 10 -14 45 -58 77 -98 l58 -72 -35 -26 c-50 -39 -246\r
-155 -260 -155 -10 0 -14 44 -19 173 -7 206 -12 417 -9 417 1 0 40 -48 85\r
-106z m-5972 56 c0 -43 -5 -47 -33 -25 -18 13 -18 14 0 39 25 35 33 32 33 -14z\r
m-441 -9 c-6 -17 -8 -42 -5 -55 5 -20 -2 -31 -42 -64 l-48 -40 50 98 c51 100\r
65 119 45 61z m376 8 c10 -15 -1 -23 -20 -15 -9 3 -13 10 -10 16 8 13 22 13\r
30 -1z m-40 -29 c3 -5 2 -10 -3 -10 -5 0 -7 -10 -5 -23 3 -16 -14 -47 -61\r
-111 -36 -48 -80 -112 -98 -142 -18 -30 -35 -54 -38 -54 -10 0 -73 259 -67\r
274 4 9 17 16 29 17 21 0 21 1 4 8 -13 5 11 14 80 28 115 24 150 27 159 13z\r
m-315 -27 c0 -20 -3 -24 -11 -16 -7 7 -9 19 -6 27 10 24 17 19 17 -11z m380 9\r
l22 -18 -26 -52 c-16 -32 -31 -50 -38 -46 -7 4 -8 3 -4 -5 6 -10 -193 -323\r
-214 -336 -4 -3 -7 23 -6 58 2 58 7 68 66 157 34 52 80 116 101 141 21 25 41\r
58 45 75 12 51 19 55 54 26z m8175 -11 c-29 -58 -175 -229 -175 -206 0 4 -8 1\r
-17 -6 -10 -8 12 22 47 66 66 81 150 175 157 175 2 0 -3 -13 -12 -29z m-8521\r
4 c-6 -16 -24 -21 -24 -7 0 11 11 22 21 22 5 0 6 -7 3 -15z m-244 -230 c0 -15\r
-179 -245 -191 -245 -6 0 -8 3 -6 8 3 4 -3 102 -14 217 -10 116 -18 221 -19\r
235 0 21 17 7 115 -90 63 -63 115 -119 115 -125z m8680 195 c-11 -16 -43 -54\r
-70 -83 -27 -30 -47 -56 -45 -59 3 -3 -5 -13 -17 -24 -12 -10 -18 -13 -13 -5\r
6 11 4 13 -9 8 -9 -4 25 38 76 93 51 55 94 100 96 100 2 0 -6 -13 -18 -30z\r
m-7070 -140 c65 -74 189 -216 276 -316 88 -99 253 -289 368 -422 125 -145 212\r
-238 217 -231 3 6 7 0 7 -14 0 -14 -6 -24 -12 -22 -21 6 -354 86 -670 160\r
-175 41 -320 76 -322 77 -1 2 -6 212 -10 468 -7 448 -6 464 11 450 10 -8 71\r
-76 135 -150z m-967 22 c6 -113 5 -123 -11 -118 -9 2 -30 7 -46 11 -27 6 -28\r
8 -23 48 5 36 66 192 72 185 1 -2 5 -58 8 -126z m-409 100 c-6 -4 -21 -54 -33\r
-112 -12 -57 -24 -106 -26 -109 -7 -6 -135 50 -135 60 0 16 120 137 152 153\r
34 16 62 22 42 8z m7974 -131 c3 -114 3 -120 -20 -135 -46 -32 -55 -23 -72 77\r
-9 50 -19 102 -21 113 -4 18 4 25 43 42 26 12 52 21 57 22 6 0 11 -48 13 -119z\r
m-2208 36 c-19 -23 -102 -124 -184 -225 -83 -101 -174 -217 -203 -258 l-52\r
-75 -5 33 c-3 18 -19 112 -36 210 -16 97 -30 183 -30 190 0 8 34 40 74 71 l75\r
56 123 15 c218 27 263 32 267 29 2 -2 -11 -22 -29 -46z m141 -138 c50 -100 87\r
-185 82 -189 -4 -4 -53 -17 -108 -29 -55 -12 -180 -41 -278 -65 -97 -24 -180\r
-40 -182 -35 -3 4 21 39 53 76 71 83 296 364 318 398 9 14 18 25 20 25 2 0 45\r
-82 95 -181z m-5866 61 c15 -52 28 -123 29 -158 l1 -63 -21 26 c-11 14 -28 48\r
-38 75 -10 28 -22 50 -27 50 -6 0 -5 9 1 21 6 11 9 28 7 37 -3 12 -5 11 -6 -5\r
0 -12 -4 -24 -9 -27 -4 -2 0 31 8 74 8 44 18 76 22 72 3 -4 19 -50 33 -102z\r
m7824 -1 c12 -61 20 -114 16 -117 -12 -12 -146 -14 -174 -2 -16 6 -40 24 -53\r
38 -24 26 -53 91 -44 99 7 8 210 92 222 92 6 1 21 -47 33 -110z m-4034 -89\r
c55 -27 119 -54 143 -61 23 -7 42 -16 42 -22 0 -5 -11 -30 -25 -56 -14 -25\r
-41 -81 -60 -124 -20 -42 -40 -75 -44 -72 -12 7 -330 454 -365 513 -4 7 41\r
-19 101 -59 59 -39 153 -93 208 -119z m2104 123 c103 -82 331 -281 331 -291 0\r
-4 -37 -4 -82 0 -46 3 -102 7 -125 7 l-42 1 -89 175 c-48 96 -86 175 -84 175\r
2 0 43 -30 91 -67z m-728 24 c-6 -8 -8 -17 -4 -21 4 -4 -1 -4 -11 0 -13 5 -17\r
4 -12 -4 5 -8 1 -10 -10 -5 -13 5 -15 3 -9 -7 5 -8 4 -11 -3 -7 -5 4 -18 4\r
-27 1 -11 -5 -13 -9 -5 -14 6 -4 -20 -21 -59 -39 -39 -18 -76 -29 -82 -25 -8\r
4 -9 3 -5 -4 8 -13 -16 -17 -28 -5 -9 10 114 64 128 56 6 -3 8 -3 4 2 -4 4 18\r
21 50 38 31 16 61 33 67 38 14 14 19 11 6 -4z m-4899 -53 c-4 -22 -5 -55 -1\r
-74 9 -42 3 -54 -7 -14 -4 16 -11 35 -17 42 -7 9 -4 25 8 52 22 49 29 46 17\r
-6z m-865 -109 c25 -33 48 -67 51 -75 11 -34 117 -257 135 -285 17 -27 18 -27\r
11 -5 -6 23 66 -76 154 -211 l37 -56 74 -7 c41 -3 135 -6 210 -6 l136 0 -120\r
-115 c-66 -63 -122 -114 -125 -114 -3 0 -95 88 -206 197 l-201 197 -72 155\r
c-70 149 -172 377 -193 430 -8 23 -6 22 27 -10 20 -19 57 -62 82 -95z m8808\r
105 c-3 -5 -1 -10 6 -10 7 0 10 -2 8 -4 -8 -8 -109 -46 -109 -41 0 5 90 65 98\r
65 2 0 0 -4 -3 -10z m-8367 -43 c30 -11 56 -26 59 -32 2 -7 0 -50 -5 -96 -6\r
-56 -6 -91 1 -104 10 -19 9 -19 -9 -5 -32 25 -44 38 -44 48 0 5 -17 47 -39 93\r
-21 46 -42 95 -46 108 -6 21 -5 23 11 17 11 -5 43 -17 72 -29z m7140 -36 c28\r
-24 52 -41 52 -37 0 4 24 -7 53 -24 28 -17 79 -44 112 -60 33 -16 87 -56 121\r
-87 33 -32 84 -80 112 -106 29 -26 52 -50 52 -52 0 -5 -117 29 -165 49 -22 9\r
-47 27 -55 40 -23 37 -221 239 -227 232 -4 -3 44 -58 107 -121 62 -64 111\r
-118 109 -120 -6 -6 -219 41 -229 51 -5 5 -34 70 -65 144 -31 74 -59 142 -62\r
150 -8 18 -1 13 85 -59z m1332 64 c0 -2 -10 -9 -22 -15 -22 -11 -22 -10 -4 4\r
21 17 26 19 26 11z m-8559 -62 c76 -173 87 -209 89 -288 2 -44 2 -85 1 -92 -1\r
-9 -263 148 -294 177 -7 6 168 250 180 250 2 0 13 -21 24 -47z m489 -2 c5 -21\r
17 -42 26 -45 14 -5 15 0 9 40 -6 41 -5 46 10 40 9 -3 33 -9 54 -12 32 -5 38\r
-11 48 -42 6 -20 9 -40 7 -44 -2 -3 -29 -4 -58 -1 -30 3 -67 1 -83 -5 -15 -5\r
-59 -22 -96 -36 l-68 -26 32 47 c50 74 90 123 99 123 5 0 14 -18 20 -39z\r
m4969 -66 c29 -143 61 -338 57 -343 -9 -8 -521 151 -539 168 -5 4 19 22 53 39\r
64 34 138 77 305 179 54 34 100 60 101 59 2 -1 12 -47 23 -102z m-5233 -20\r
c33 -65 36 -77 23 -88 -8 -6 -22 -21 -29 -32 -15 -19 -14 -19 10 -3 34 23 139\r
74 229 110 59 24 85 29 123 26 27 -3 51 -8 55 -12 7 -7 -45 -204 -56 -210 -4\r
-3 -31 4 -61 14 -68 24 -104 25 -169 3 -44 -14 -57 -14 -92 -3 -68 23 -85 46\r
-92 128 -8 76 0 155 14 147 4 -3 24 -39 45 -80z m4891 69 c-3 -3 -12 -4 -19\r
-1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m1818 -113 c50 -52 110 -110 135 -129 43\r
-33 43 -34 15 -28 -25 5 -28 4 -15 -6 9 -7 14 -22 12 -33 -6 -28 -80 -113\r
-129 -146 -39 -27 -43 -28 -80 -15 -21 7 -112 26 -203 41 -91 15 -170 29 -176\r
30 -7 2 -8 27 -3 76 15 138 14 136 77 168 31 16 100 58 152 94 76 51 98 62\r
110 53 8 -6 56 -53 105 -105z m-1665 88 c-22 -18 -216 -136 -277 -167 -20 -11\r
-21 -11 -10 19 18 48 44 64 177 118 69 27 127 50 130 50 3 0 -6 -9 -20 -20z\r
m1920 -109 c71 -157 95 -237 81 -272 -20 -52 -35 -32 -65 85 -24 94 -52 195\r
-83 302 -13 47 18 -7 67 -115z m-6157 73 c4 -7 -67 -190 -77 -200 -1 -2 -36\r
30 -77 70 -41 40 -92 87 -114 104 l-40 32 152 0 c83 1 154 -2 156 -6z m-348\r
-63 c14 -27 30 -50 35 -50 18 0 9 -15 -46 -74 -76 -83 -86 -69 -48 69 15 58\r
30 105 31 105 1 0 14 -22 28 -50z m82 -22 c28 -26 47 -48 42 -48 -6 0 -7 -4\r
-4 -10 4 -6 -3 -6 -21 0 -43 17 -38 5 7 -15 22 -10 47 -28 55 -39 8 -11 14\r
-16 14 -10 0 5 -7 20 -16 33 l-17 23 26 -16 c22 -15 43 -45 35 -51 -6 -3 -186\r
-25 -212 -25 -24 0 -26 2 -16 21 7 11 28 39 48 61 31 34 40 39 66 35 l31 -6\r
-28 13 c-15 7 -25 15 -21 18 3 4 -3 4 -13 2 -21 -6 -44 20 -58 66 -7 23 -7 24\r
11 10 10 -8 42 -36 71 -62z m3609 47 c99 -21 141 -25 295 -25 124 0 203 5 255\r
16 42 8 81 13 87 11 24 -8 -52 -35 -173 -62 -69 -15 -186 -43 -260 -62 -74\r
-18 -189 -45 -254 -59 -66 -14 -141 -34 -167 -43 l-46 -18 28 61 c61 134 99\r
206 109 206 6 0 62 -11 126 -25z m-3306 -140 c6 -71 25 -215 41 -320 31 -204\r
33 -231 21 -239 -6 -3 -207 92 -229 108 -4 3 47 166 52 166 2 0 16 -21 31 -47\r
56 -98 137 -223 142 -219 2 3 -23 47 -56 98 -62 96 -109 185 -101 191 63 47\r
91 73 100 90 11 21 10 21 -6 5 -17 -16 -20 -15 -56 14 -59 48 -61 85 -8 209\r
26 61 45 95 50 87 4 -7 12 -71 19 -143z m6963 148 c-7 -2 -19 -2 -25 0 -7 3\r
-2 5 12 5 14 0 19 -2 13 -5z m-55 -40 c-10 -2 -28 -2 -40 0 -13 2 -5 4 17 4\r
22 1 32 -1 23 -4z m-3017 -51 c-19 -36 -22 -38 -93 -49 -221 -34 -593 -94\r
-656 -106 -109 -21 -73 -2 43 22 55 12 208 48 340 81 330 81 358 88 373 89 9\r
1 7 -10 -7 -37z m2709 12 c47 -9 95 -18 108 -20 12 -2 23 -12 23 -22 1 -15 2\r
-15 6 0 3 12 19 17 61 20 31 2 58 3 60 2 1 0 -34 -29 -79 -64 -73 -57 -79 -60\r
-65 -32 9 17 16 37 16 44 0 7 -11 -11 -25 -40 -30 -65 -27 -66 -150 53 -65 64\r
-83 86 -65 81 14 -3 63 -13 110 -22z m465 -1 c-5 -10 -11 -69 -15 -131 -4 -61\r
-9 -114 -12 -117 -6 -6 -298 50 -331 63 -14 6 -3 19 60 72 109 92 104 89 190\r
104 57 10 80 10 85 2 5 -7 8 -4 8 7 0 9 5 17 11 17 7 0 8 -7 4 -17z m-7939\r
-90 c16 -12 43 -25 58 -29 25 -6 21 -10 -56 -44 l-83 -38 -7 91 c-4 50 -10 98\r
-13 107 -3 8 12 -3 33 -25 20 -23 51 -50 68 -62z m6239 81 c59 -6 58 -3 43\r
-128 -10 -91 -14 -100 -80 -183 -48 -60 -52 -63 -94 -63 -37 0 -44 3 -44 19 0\r
29 113 191 194 278 16 18 27 35 24 38 -8 8 -76 -72 -149 -175 -35 -49 -64 -88\r
-66 -86 -6 6 -41 301 -36 309 4 7 83 4 208 -9z m-226 -16 c13 -34 44 -314 37\r
-336 -6 -17 -17 -19 -120 -20 -63 0 -122 -3 -133 -6 -12 -4 -35 4 -64 24 l-46\r
30 111 113 c61 62 133 132 159 156 27 23 46 45 43 49 -4 3 -75 -63 -159 -146\r
-85 -84 -159 -152 -166 -152 -14 0 -226 145 -237 161 -3 6 -4 13 -1 16 3 3 97\r
27 209 54 112 27 228 56 258 63 82 20 99 19 109 -6z m-6279 -91 c109 -65 150\r
-96 150 -113 0 -28 -39 -13 -121 46 -90 63 -185 153 -139 130 14 -7 63 -35\r
110 -63z m4997 31 c-3 -7 -53 -119 -112 -248 -59 -129 -129 -289 -157 -355\r
-27 -66 -51 -121 -53 -123 -2 -2 -61 70 -131 159 -227 286 -336 424 -351 440\r
-16 19 -51 12 392 80 143 21 278 43 300 48 64 14 118 13 112 -1z m226 -42 c89\r
-29 206 -66 260 -81 53 -15 97 -31 97 -36 0 -14 -59 -54 -418 -278 -406 -255\r
-462 -287 -462 -271 0 12 253 587 296 673 17 33 30 47 45 47 11 0 93 -24 182\r
-54z m2243 34 c94 -19 101 -22 139 -63 22 -24 55 -65 74 -92 40 -56 51 -60\r
-160 66 -83 50 -153 88 -156 86 -2 -3 51 -37 119 -77 68 -40 153 -91 190 -112\r
l67 -40 -35 -76 c-50 -108 -156 -374 -151 -378 2 -2 34 69 71 158 98 235 118\r
279 127 276 9 -3 169 -219 169 -228 0 -6 -1 -7 -198 -126 -103 -63 -160 -92\r
-177 -90 -19 2 -52 35 -124 122 l-98 119 7 90 c4 50 15 107 24 127 9 21 16 48\r
17 60 0 22 1 22 10 3 8 -18 51 -176 120 -435 12 -46 24 -80 26 -74 3 9 -31\r
144 -139 549 -34 128 -39 155 -28 155 4 0 52 -9 106 -20z m-7452 -123 c37 -40\r
59 -58 48 -42 -11 17 -29 39 -41 49 -43 39 -19 35 38 -7 32 -23 67 -48 77 -55\r
17 -11 17 -12 -6 -6 -14 4 -23 5 -20 3 3 -2 20 -17 39 -34 28 -25 32 -26 22\r
-8 -6 12 -11 25 -11 28 0 6 106 -48 277 -141 29 -16 53 -32 53 -36 0 -10 -65\r
-10 -232 -1 -114 5 -128 8 -128 24 0 35 -21 117 -36 135 -12 17 -12 14 0 -17\r
8 -20 18 -60 22 -90 l6 -54 -59 85 c-136 195 -193 283 -193 295 0 12 69 -50\r
144 -128z m555 86 c36 -20 111 -67 166 -103 55 -37 114 -71 130 -75 l30 -7\r
-25 -10 c-14 -5 -94 -39 -178 -75 -84 -36 -154 -64 -156 -62 -6 6 -73 256 -81\r
301 -15 79 14 87 114 31z m6655 15 c17 -7 30 -24 36 -47 12 -45 13 -134 1\r
-146 -15 -16 -81 -136 -71 -130 5 3 29 33 52 67 37 52 43 58 46 39 6 -39 -6\r
-65 -42 -90 -69 -46 -71 -42 -72 104 -1 72 3 138 8 149 7 13 6 21 -3 27 -10 6\r
-10 10 0 23 16 19 14 19 45 4z m-6785 -45 c54 -196 77 -293 71 -293 -14 0\r
-315 171 -334 190 -28 28 -13 40 111 90 59 24 112 47 118 52 16 14 21 9 34\r
-39z m518 31 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-37 -13\r
c0 -5 -12 -12 -27 -14 -26 -4 -25 -4 5 -6 20 0 31 -5 27 -11 -4 -7 3 -8 20 -4\r
21 5 26 4 23 -7 -5 -15 -26 -17 -73 -6 -22 6 -26 5 -15 -3 13 -9 11 -14 -14\r
-34 -24 -20 -34 -22 -56 -15 -28 10 -97 75 -89 84 17 16 199 31 199 16z\r
m-1010 -36 c0 -5 -5 -3 -10 5 -5 8 -10 20 -10 25 0 6 5 3 10 -5 5 -8 10 -19\r
10 -25z m785 24 c11 -17 2 -18 -19 -3 -17 12 -17 14 -4 14 9 0 20 -5 23 -11z\r
m265 7 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10\r
-4z m4729 -13 c9 -19 36 -139 45 -208 l6 -40 -25 48 c-14 26 -28 47 -31 47 -3\r
0 10 -29 30 -65 20 -36 36 -68 36 -71 0 -11 -93 62 -116 91 -13 17 -24 26 -24\r
20 0 -17 43 -60 99 -100 52 -38 53 -39 47 -79 -4 -23 -17 -61 -29 -86 -22 -43\r
-25 -45 -67 -45 -44 0 -45 0 -52 40 -4 22 -7 72 -7 111 -1 64 1 72 22 83 l22\r
12 -23 -5 c-23 -4 -23 -3 -19 64 5 72 12 94 27 85 4 -3 6 4 3 15 -6 22 24 100\r
38 100 5 0 12 -8 18 -17z m2038 -16 l72 -21 -27 -48 c-15 -26 -30 -48 -33 -48\r
-7 0 -62 66 -99 119 -22 31 -22 34 -4 27 10 -4 51 -17 91 -29z m-3553 -36 c13\r
-11 433 -536 474 -592 12 -17 -76 21 -458 201 -96 45 -301 139 -455 210 -294\r
134 -455 210 -455 213 0 1 197 -2 438 -8 347 -8 443 -13 456 -24z m1719 -90\r
c20 -13 37 -27 36 -30 0 -3 -35 -34 -77 -68 -63 -52 -78 -60 -85 -47 -5 8 -17\r
62 -27 118 -10 57 -22 115 -26 130 -6 27 -4 26 67 -25 41 -29 91 -64 112 -78z\r
m1262 -108 c-3 -13 -10 -23 -16 -23 -12 0 -149 92 -149 100 0 3 22 21 50 40\r
27 19 64 55 82 80 l33 45 3 -110 c2 -60 0 -120 -3 -132z m-3825 191 c36 -17\r
202 -94 370 -171 293 -135 845 -391 922 -428 l37 -18 -51 -56 c-28 -31 -139\r
-153 -247 -271 -391 -429 -461 -501 -468 -483 -3 10 -73 171 -156 358 -82 187\r
-187 426 -232 530 -125 287 -205 465 -231 517 -25 50 -29 62 -16 56 4 -2 36\r
-17 72 -34z m-95 4 c-7 -32 -50 -538 -75 -883 -11 -159 -24 -312 -28 -339 l-7\r
-50 -64 90 c-214 296 -412 568 -459 627 -46 59 -52 70 -39 80 9 7 97 73 198\r
147 100 74 245 183 323 242 77 59 144 107 149 108 4 0 5 -10 2 -22z m-2312\r
-23 c-3 -36 -6 -38 -43 -30 l-32 7 28 29 c33 35 50 32 47 -6z m178 -29 c-5 -6\r
-24 -20 -42 -30 l-32 -19 6 24 c4 13 7 39 7 57 l0 33 35 -27 c24 -18 32 -30\r
26 -38z m6894 34 c82 -17 151 -33 153 -35 2 -2 -9 -21 -24 -43 -48 -65 -176\r
-236 -184 -245 -4 -5 -46 45 -94 110 l-86 118 137 17 c76 10 163 22 193 27 96\r
15 -4 13 -132 -3 -104 -14 -171 -20 -191 -17 -15 2 46 101 62 101 9 0 83 -14\r
166 -30z m-7035 -5 c0 -8 -4 -17 -10 -20 -6 -4 -10 5 -10 20 0 15 4 24 10 20\r
6 -3 10 -12 10 -20z m39 -35 c1 -13 0 -13 -9 0 -5 8 -9 24 -9 35 l0 20 9 -20\r
c5 -11 9 -27 9 -35z m18 -17 c-2 -16 -4 -5 -4 22 0 28 2 40 4 28 2 -13 2 -35\r
0 -50z m2348 -183 c59 -135 131 -299 160 -365 29 -66 120 -273 203 -460 82\r
-187 153 -351 157 -365 4 -14 18 -38 30 -55 12 -16 89 -140 171 -275 81 -135\r
172 -285 201 -333 l54 -89 -23 -36 c-27 -46 -232 -361 -301 -464 -29 -42 -55\r
-73 -59 -70 -5 6 -170 302 -298 537 -15 28 -85 154 -155 280 -358 646 -358\r
646 -356 700 1 59 16 268 36 525 56 696 59 730 69 719 2 -2 52 -114 111 -249z\r
m3285 144 l85 -86 -80 7 c-44 4 -110 13 -147 19 l-68 11 53 67 c28 37 57 67\r
62 68 6 0 49 -39 95 -86z m130 50 c80 -14 156 -32 168 -38 23 -12 19 -15 -61\r
-51 -127 -56 -130 -55 -242 63 -50 53 -55 63 -35 58 14 -3 90 -17 170 -32z\r
m-5800 -10 c0 -16 -16 -19 -25 -4 -8 13 4 32 16 25 5 -4 9 -13 9 -21z m6355\r
-11 c-21 -49 -25 -52 -25 -17 0 17 5 35 12 42 23 23 28 12 13 -25z m-1774\r
-163 l-6 -175 -225 -47 c-124 -25 -314 -66 -423 -91 -109 -24 -195 -41 -190\r
-37 4 3 114 71 243 150 129 80 318 197 419 262 101 65 185 117 186 116 2 -2 0\r
-82 -4 -178z m2597 123 c-10 -48 -91 -336 -109 -383 -23 -64 5 103 31 180 15\r
47 33 107 40 134 12 52 36 116 43 116 3 0 0 -21 -5 -47z m-7150 2 c5 -5 -50\r
-185 -57 -185 -3 0 -91 13 -194 28 l-189 28 89 38 c256 111 245 107 298 101\r
27 -4 51 -8 53 -10z m7103 -48 c-32 -74 -73 -253 -80 -351 l-6 -91 -38 110\r
c-20 61 -37 119 -37 130 0 18 170 258 177 251 2 -2 -5 -24 -16 -49z m-2128 16\r
l39 -27 -32 -11 c-17 -6 -29 -13 -25 -16 6 -6 -93 -85 -119 -95 -7 -3 -25 5\r
-40 18 l-27 23 78 67 c43 37 80 67 82 67 3 1 23 -11 44 -26z m982 10 c-4 -10\r
-14 -43 -22 -73 -17 -65 -29 -81 -50 -73 -10 4 -14 2 -10 -4 4 -5 -5 -15 -18\r
-21 -22 -10 -26 -9 -40 18 -8 16 -15 36 -15 45 0 9 -7 18 -15 21 -18 7 -20 24\r
-2 24 7 0 49 18 92 39 95 47 89 45 80 24z m92 -39 c72 -52 72 -54 -17 -73\r
-101 -22 -100 -22 -95 -9 2 7 11 39 20 71 8 31 18 57 22 57 3 0 35 -21 70 -46z\r
m-762 -21 c-4 -16 -8 -29 -9 -31 -2 -1 -36 11 -77 27 l-74 30 84 1 83 0 -7\r
-27z m-208 -49 c17 -32 29 -62 25 -65 -4 -3 -39 -21 -78 -39 l-71 -32 -52 34\r
c-28 18 -51 35 -51 38 1 11 174 130 184 127 6 -2 25 -30 43 -63z m117 33 c86\r
-35 103 -53 59 -62 -15 -3 -50 -12 -77 -20 -53 -15 -66 -13 -66 12 0 9 -11 36\r
-25 60 l-26 43 28 0 c15 -1 64 -15 107 -33z m151 25 c6 -4 23 -24 38 -44 l28\r
-38 -31 0 c-32 0 -90 25 -90 38 1 42 28 64 55 44z m325 -10 l85 -7 -115 -29\r
c-182 -46 -187 -46 -215 -24 -14 11 -32 33 -41 49 l-15 29 108 -5 c59 -3 146\r
-9 193 -13z m600 -24 c0 -13 -4 -29 -9 -37 -7 -10 -12 -8 -25 10 -10 15 -16\r
18 -16 9 0 -8 -9 -30 -21 -49 -16 -27 -23 -31 -30 -20 -5 8 -9 26 -9 42 0 21\r
5 27 23 27 12 0 33 9 47 20 32 25 40 25 40 -2z m-506 -16 c9 -27 -19 -86 -61\r
-132 -28 -32 -40 -39 -57 -34 -32 10 -169 105 -162 112 7 6 241 70 263 71 6 1\r
14 -7 17 -17z m366 -21 c0 -27 -15 -36 -106 -60 -98 -26 -104 -26 -104 -2 0\r
26 8 30 109 57 108 28 101 27 101 5z m-5275 -66 c734 -173 667 -154 660 -178\r
-4 -12 -35 -103 -70 -202 -35 -99 -68 -198 -74 -220 -6 -22 -14 -45 -19 -52\r
-4 -6 -160 -61 -347 -121 -187 -60 -348 -113 -357 -117 -20 -8 -24 5 -33 110\r
-4 39 -13 115 -22 170 -8 55 -31 232 -52 393 -33 257 -36 292 -22 292 9 0 160\r
-34 336 -75z m-1100 40 c98 -14 180 -27 181 -28 1 -1 -37 -84 -84 -184 -48\r
-100 -90 -179 -93 -175 -9 10 -206 373 -215 395 -8 22 -6 22 211 -8z m765\r
-200 c12 -99 34 -270 50 -380 34 -238 44 -332 36 -325 -3 4 -23 37 -44 75 -21\r
39 -74 131 -117 205 -43 74 -87 155 -98 180 -11 25 -31 62 -44 82 -29 43 -37\r
21 91 236 77 130 92 149 98 130 4 -13 16 -104 28 -203z m4800 215 c8 -5 11\r
-10 5 -10 -5 0 -17 5 -25 10 -8 5 -10 10 -5 10 6 0 17 -5 25 -10z m920 -8 c0\r
-10 -11 -29 -25 -42 -29 -28 -31 -23 -8 25 18 38 33 46 33 17z m-6511 -365\r
c13 -21 21 -40 18 -43 -5 -5 -260 69 -352 102 -22 8 -58 29 -79 47 l-40 34 75\r
69 c41 39 96 91 124 116 l49 46 91 -167 c50 -91 101 -183 114 -204z m5075 344\r
c15 -16 15 -19 2 -24 -10 -4 -18 2 -22 16 -7 22 -8 22 -15 -3 -6 -22 -7 -22\r
-8 -4 -2 37 17 44 43 15z m995 -2 c12 -20 11 -21 -5 -15 -10 4 -15 4 -11 0 4\r
-4 1 -14 -6 -22 -10 -13 -8 -14 13 -8 21 6 20 4 -7 -14 -44 -30 -42 -35 6 -11\r
29 15 41 17 50 8 8 -8 4 -14 -17 -23 l-27 -13 32 6 c30 5 32 3 38 -31 10 -50\r
1 -66 -37 -67 l-33 -2 36 -6 c33 -5 36 -8 28 -28 -5 -13 -14 -23 -21 -23 -14\r
0 -118 90 -118 102 0 4 17 16 38 27 20 11 33 20 29 21 -4 0 -22 -7 -38 -16\r
-17 -8 -32 -14 -34 -12 -5 4 58 148 65 148 3 0 11 -10 19 -21z m331 -14 c0 -8\r
-16 -32 -35 -54 -27 -30 -41 -38 -62 -35 -26 3 -26 3 -4 -4 21 -7 22 -9 8 -21\r
-10 -7 -25 -10 -39 -6 -23 7 -23 7 -3 -9 17 -13 18 -17 5 -26 -22 -14 -28 -13\r
-41 12 -9 17 -9 23 1 26 8 3 4 9 -11 18 -23 13 -23 13 14 14 21 0 36 4 33 9\r
-4 5 0 11 6 14 7 3 -7 4 -31 4 -27 -1 -46 3 -48 11 -3 7 3 12 14 12 10 0 54\r
11 98 24 99 30 95 29 95 11z m-6056 -53 c60 -31 111 -62 113 -68 2 -5 -32 -30\r
-74 -54 -43 -24 -132 -75 -198 -113 -66 -38 -124 -72 -129 -75 -5 -3 -7 -1 -5\r
4 3 5 43 89 89 186 47 97 87 177 90 177 3 0 54 -25 114 -57z m5836 38 c0 -28\r
-24 -35 -51 -16 l-23 15 25 10 c37 15 49 13 49 -9z m329 -58 c-17 -26 -28 -38\r
-24 -27 4 11 10 28 12 38 3 9 9 17 13 17 4 0 11 12 16 28 5 20 8 23 11 9 3\r
-10 -10 -39 -28 -65z m-1334 22 c33 -22 32 -34 -5 -34 -39 0 -103 55 -80 69\r
10 7 22 6 37 -4 13 -8 34 -22 48 -31z m-110 -22 c8 -37 -4 -45 -55 -40 l-31 3\r
32 43 c34 46 43 45 54 -6z m1355 44 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0\r
6 5 11 10 11 6 0 10 -2 10 -4z m308 -175 l60 -77 -67 -145 c-37 -79 -78 -170\r
-91 -201 -25 -61 -34 -65 -43 -20 -3 15 -35 110 -71 211 l-66 182 29 43 c16\r
23 44 75 62 116 l33 73 47 -52 c26 -29 74 -87 107 -130z m-373 109 c-21 -22\r
-41 -37 -44 -35 -2 3 13 23 34 45 21 22 41 37 44 35 2 -3 -13 -23 -34 -45z\r
m116 23 c-8 -15 -10 -15 -11 -2 0 17 10 32 18 25 2 -3 -1 -13 -7 -23z m-1295\r
-29 c9 3 12 1 9 -5 -4 -5 -1 -17 7 -27 9 -12 5 -10 -17 4 -48 34 -75 46 -75\r
35 0 -6 14 -18 31 -26 16 -9 48 -32 70 -52 l40 -36 -53 -18 c-29 -10 -56 -18\r
-59 -19 -4 0 -10 21 -14 46 -3 25 -9 44 -11 41 -3 -3 -1 -28 4 -56 5 -28 6\r
-51 1 -51 -4 0 -10 30 -14 68 -3 37 -8 84 -12 105 l-5 39 42 -27 c23 -15 48\r
-24 56 -21z m1009 36 c3 -6 -1 -7 -9 -4 -18 7 -21 14 -7 14 6 0 13 -4 16 -10z\r
m1014 -16 c6 -14 27 -73 46 -131 l34 -106 -50 -136 c-28 -75 -55 -141 -60\r
-147 -5 -6 -6 -14 -3 -17 7 -7 -51 -184 -67 -207 -9 -12 -10 -11 -4 5 25 72\r
47 156 50 190 1 22 8 61 14 87 32 138 54 379 39 430 l-11 38 -59 -177 c-32\r
-98 -85 -268 -118 -377 -33 -110 -61 -201 -63 -202 -2 -2 -34 114 -71 259 -37\r
144 -69 269 -72 277 -3 11 10 23 38 37 24 12 108 62 188 112 80 49 148 90 151\r
91 3 0 11 -12 18 -26z m-1229 -13 c-6 -12 -15 -21 -21 -21 -5 0 -2 11 8 24 21\r
28 29 27 13 -3z m214 -6 c44 -42 46 -61 7 -67 -25 -4 -30 -1 -35 23 -3 15 -8\r
38 -12 53 -8 34 -3 33 40 -9z m246 10 c-7 -9 -15 -13 -17 -11 -7 7 7 26 19 26\r
6 0 6 -6 -2 -15z m-710 -11 c22 -9 40 -21 40 -26 0 -6 -6 -8 -14 -5 -8 3 -31\r
9 -50 13 -35 6 -43 14 -29 27 8 9 7 9 53 -9z m-130 -8 c0 -3 -4 -8 -10 -11 -5\r
-3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-771 -10 c-2 -3 -139 -141\r
-305 -308 l-300 -303 -94 -219 -94 -219 -235 7 c-435 12 -590 19 -603 27 -9 6\r
6 28 58 81 39 40 209 225 378 410 218 240 315 340 334 344 15 3 70 17 122 29\r
52 13 226 51 385 84 160 33 299 62 310 64 29 7 49 8 44 3z m1616 -6 c-3 -5\r
-11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m752 -97\r
c-10 -166 -72 -464 -107 -513 -11 -16 -42 -47 -69 -69 l-50 -42 21 73 c11 40\r
52 174 90 298 39 124 79 255 91 293 11 37 22 67 25 67 3 0 2 -48 -1 -107z\r
m-2318 -13 c14 -62 84 -319 141 -517 l38 -133 -226 -115 c-124 -64 -228 -114\r
-232 -113 -7 3 -312 337 -339 371 -13 16 11 44 284 317 298 299 299 299 310\r
272 7 -15 17 -52 24 -82z m70 94 c2 -2 -2 -11 -10 -20 -12 -14 -14 -14 -26 2\r
-19 26 -16 36 10 28 12 -3 24 -8 26 -10z m131 -49 c0 -36 -1 -65 -3 -65 -2 0\r
-18 21 -36 46 -18 25 -36 43 -39 40 -3 -3 2 -14 10 -23 21 -24 50 -83 41 -83\r
-4 0 -20 12 -37 28 -17 15 -24 18 -16 8 14 -18 14 -18 -5 -9 -11 6 -30 22 -43\r
36 -20 21 -21 25 -7 37 13 10 15 9 15 -9 0 -11 4 -21 9 -21 4 0 6 12 3 26 -4\r
21 -2 25 9 19 11 -7 12 -6 2 7 -18 21 -7 28 49 28 l48 0 0 -65z m884 57 c2 -4\r
-2 -18 -9 -31 -12 -24 -13 -24 -23 -4 -8 14 -8 23 0 31 14 14 25 15 32 4z\r
m-5442 -88 c20 -66 23 -84 11 -80 -8 3 -12 2 -9 -2 8 -13 -132 -142 -154 -142\r
-4 0 20 70 54 155 34 85 64 155 67 155 3 0 17 -39 31 -86z m-110 -66 c-30 -79\r
-57 -145 -58 -147 -4 -4 -241 39 -268 49 -15 5 7 22 100 77 102 60 276 161\r
280 162 1 1 -23 -63 -54 -141z m4896 125 c2 -9 -8 -13 -32 -13 -32 0 -44 8\r
-31 21 10 10 59 3 63 -8z m749 -47 c30 -28 39 -42 30 -48 -35 -22 -119 11\r
-125 50 -2 11 2 30 8 42 13 24 17 22 87 -44z m-433 48 c13 -5 10 -13 -18 -42\r
l-35 -35 -46 13 c-46 13 -46 14 -24 26 22 12 18 13 -31 9 -50 -4 -52 -4 -23 6\r
34 12 103 4 103 -11 0 -6 -6 -10 -12 -11 -7 0 -4 -4 7 -9 30 -13 39 -12 27 3\r
-6 7 -9 23 -5 35 5 22 26 28 57 16z m165 -8 c7 -8 21 -12 31 -9 11 3 20 1 20\r
-5 0 -20 -20 -23 -52 -8 -17 9 -45 16 -62 17 -17 1 -42 5 -56 9 -18 6 -7 8 41\r
9 46 1 70 -3 78 -13z m659 -6 c-7 -11 -16 -20 -20 -20 -11 0 -10 9 5 25 18 21\r
29 18 15 -5z m-781 -20 c1 -11 -1 -19 -5 -16 -4 2 -16 0 -27 -5 -16 -6 -17 -8\r
-3 -8 11 -1 16 -8 13 -21 -3 -17 10 -27 73 -59 42 -22 90 -53 106 -70 l30 -31\r
-29 -30 c-16 -16 -32 -30 -36 -30 -3 0 -9 14 -13 31 -4 22 -30 56 -81 105 -41\r
41 -69 74 -63 74 7 0 3 6 -7 14 -22 16 -14 43 17 56 13 5 23 9 23 9 1 1 1 -8\r
2 -19z m239 11 c-3 -5 1 -12 10 -15 9 -4 15 -9 12 -12 -7 -7 -58 17 -58 28 0\r
4 9 8 21 8 11 0 18 -4 15 -9z m309 -7 c-42 -33 -55 -36 -55 -15 0 22 13 29 50\r
30 24 0 25 0 5 -15z m-4119 -365 c269 -369 293 -402 294 -410 0 -8 -162 -73\r
-450 -181 -231 -87 -238 -89 -244 -75 -3 8 -11 5 -23 -9 -10 -12 -36 -28 -58\r
-37 -22 -8 -75 -32 -119 -51 -64 -30 -77 -33 -72 -19 4 10 90 268 192 573 101\r
305 187 562 190 570 8 22 41 -18 290 -361z m3224 360 c0 -11 -57 -12 -64 -1\r
-3 4 11 9 30 9 19 1 34 -3 34 -8z m63 4 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5\r
17 0 24 -2 18 -5z m370 -3 c11 0 15 -5 11 -11 -4 -8 1 -9 16 -4 19 6 22 4 17\r
-9 -4 -9 -2 -16 3 -16 6 0 10 -4 10 -10 0 -5 -7 -7 -16 -3 -8 3 -13 11 -11 17\r
3 7 -11 12 -36 13 -27 1 -36 -2 -26 -8 8 -5 21 -9 30 -9 19 0 69 -44 69 -60 0\r
-17 -75 26 -104 60 -32 39 -33 54 -3 46 12 -3 30 -6 40 -6z m-769 -84 c65 -38\r
142 -55 259 -57 59 -1 107 -3 107 -5 0 -1 -12 -28 -27 -60 -14 -33 -61 -144\r
-103 -249 -68 -167 -81 -192 -109 -209 -19 -11 -36 -15 -41 -10 -5 5 -27 79\r
-50 164 -23 85 -59 214 -80 286 -21 73 -42 154 -46 180 l-7 49 28 -33 c15 -18\r
46 -43 69 -56z m946 39 c0 -2 -5 -15 -11 -28 -8 -18 -17 -22 -39 -19 -16 2\r
-31 11 -35 19 -9 24 2 27 31 9 14 -10 28 -15 31 -12 3 3 -11 13 -31 22 -34 17\r
-44 33 -30 47 6 6 84 -29 84 -38z m-455 17 c33 -10 59 -22 57 -28 -3 -11 -109\r
-53 -136 -53 -15 -1 -17 4 -13 27 3 15 3 32 -1 37 -10 14 -32 17 -32 5 0 -5\r
-18 -10 -40 -10 -29 0 -40 4 -40 15 0 12 12 15 55 14 31 -1 59 1 62 5 9 9 22\r
7 88 -12z m885 14 c0 -11 -19 -15 -25 -6 -3 5 1 10 9 10 9 0 16 -2 16 -4z\r
m-44 -21 c-4 -11 2 -15 24 -15 17 0 30 -4 30 -10 0 -5 8 -7 18 -5 9 3 3 -1\r
-14 -9 -17 -8 -48 -16 -70 -18 -21 -2 -43 -7 -47 -13 -5 -6 -7 -4 -4 5 2 8 10\r
14 16 12 7 -1 10 2 6 7 -7 12 23 61 37 61 6 0 8 -7 4 -15z m-1011 -73 c-5 -5\r
-146 16 -153 22 -8 9 28 34 63 45 27 8 33 5 62 -28 17 -20 30 -37 28 -39z\r
m671 31 c-7 -7 -26 7 -26 19 0 6 6 6 15 -2 9 -7 13 -15 11 -17z m-608 -15 c4\r
-34 -14 -37 -52 -7 -36 28 -33 41 12 37 32 -3 37 -7 40 -30z m391 -5 c39 -20\r
71 -40 71 -45 0 -5 -24 4 -52 19 -29 16 -69 37 -88 45 -19 9 -28 17 -19 17 10\r
1 49 -15 88 -36z m431 27 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11\r
10 2 0 4 -4 4 -10z m-505 -72 c98 -97 105 -123 74 -260 l-23 -100 -34 68 c-36\r
72 -126 293 -138 338 -5 23 -3 26 21 26 20 0 45 -19 100 -72z m779 30 c8 -24\r
33 -90 55 -148 42 -113 73 -211 68 -217 -6 -5 -251 127 -270 146 -18 18 -18\r
21 17 96 20 43 36 84 36 92 0 14 58 73 71 73 4 0 14 -19 23 -42z m-905 -10\r
c19 -63 95 -246 136 -328 20 -40 35 -74 33 -76 -2 -2 -72 1 -154 7 l-150 11\r
-132 -66 -131 -66 25 68 c30 80 135 333 161 388 15 33 29 43 93 71 41 18 82\r
33 91 33 10 0 20 -15 28 -42z m647 6 c-27 -20 -46 -18 -46 5 0 13 8 21 23 23\r
33 6 46 -10 23 -28z m-6345 -29 c78 -25 148 -45 156 -45 18 0 43 -42 48 -80\r
l4 -32 -46 7 c-81 12 -145 42 -223 105 -93 76 -108 90 -93 90 6 0 76 -20 154\r
-45z m6034 39 c14 -6 14 -8 0 -30 -9 -14 -13 -29 -10 -34 10 -16 -11 -11 -25\r
5 -10 12 -10 15 1 15 10 0 10 3 1 12 -28 28 -7 47 33 32z m90 -4 c-3 -5 -12\r
-10 -20 -10 -8 0 -17 5 -20 10 -4 6 5 10 20 10 15 0 24 -4 20 -10z m342 4 c-3\r
-3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-179 -21 c2 -9 -8 -13 -34\r
-13 -35 0 -37 1 -18 15 22 17 45 16 52 -2z m746 -336 l55 -208 -44 -156 c-25\r
-86 -47 -158 -49 -161 -3 -2 -57 103 -121 234 l-117 238 48 111 c26 60 68 153\r
92 205 l44 95 18 -75 c10 -41 43 -169 74 -283z m-954 333 c0 -5 -5 -10 -11\r
-10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m285 -22 c-12 -7 -65 -7\r
-65 0 0 1 15 9 32 17 24 10 35 10 40 2 4 -7 1 -15 -7 -19z m45 20 c0 -10 3 -9\r
9 1 6 10 13 11 27 3 17 -10 16 -11 -8 -17 -28 -7 -48 -1 -48 16 0 5 5 9 10 9\r
6 0 10 -6 10 -12z m-5727 -15 c-2 -10 -16 -27 -31 -37 -26 -20 -26 -19 3 17\r
34 43 35 43 28 20z m5807 -10 c0 -10 -12 -43 -26 -73 -29 -60 -34 -57 -48 25\r
-7 39 -6 41 26 51 47 16 48 16 48 -3z m-324 -18 c-11 -8 -22 -12 -25 -9 -6 6\r
19 24 34 24 6 -1 1 -7 -9 -15z m110 -2 c-2 -10 -8 -46 -11 -81 -6 -50 -10 -62\r
-22 -58 -8 3 -20 6 -26 6 -7 1 -1 10 13 22 16 14 19 19 8 15 -16 -6 -18 1 -18\r
53 l0 60 31 0 c24 0 29 -4 25 -17z m129 -54 c8 -29 13 -55 11 -56 -5 -5 -66\r
92 -66 105 0 13 22 22 33 12 4 -4 14 -31 22 -61z m-285 51 c0 -13 -48 -32 -64\r
-26 -6 2 5 11 24 19 43 20 40 19 40 7z m87 -22 c-3 -7 -5 -2 -5 12 0 14 2 19\r
5 13 2 -7 2 -19 0 -25z m147 -22 c19 -30 42 -68 50 -85 l16 -31 -62 7 c-35 3\r
-68 10 -75 15 -14 11 -7 34 17 63 30 35 34 51 7 26 -21 -19 -27 -21 -27 -8 0\r
25 18 67 29 67 6 0 26 -24 45 -54z m-168 19 c-3 -8 -1 -15 4 -15 6 0 10 -18\r
10 -41 l0 -40 -59 32 c-59 33 -69 49 -30 49 11 0 27 7 35 15 9 8 22 15 31 15\r
9 0 13 -6 9 -15z m-5839 -25 c59 -11 117 -24 128 -29 19 -8 18 -10 -8 -20 -16\r
-6 -72 -14 -125 -17 l-97 -7 -22 47 c-28 56 -32 55 124 26z m336 -12 c-3 -15\r
-9 -25 -14 -22 -5 3 -7 10 -4 15 8 12 -2 11 -26 -1 -10 -6 -19 -9 -19 -6 0 5\r
63 46 66 43 1 -1 0 -14 -3 -29z m5395 -12 c97 -50 109 -60 93 -80 -12 -14 -92\r
-64 -226 -141 l-49 -28 51 64 c64 82 113 158 113 178 -1 9 -9 0 -19 -20 -21\r
-42 -105 -161 -126 -179 -12 -10 -13 -7 -6 17 5 17 12 58 16 94 6 53 13 69 40\r
96 18 18 36 33 39 33 4 0 37 -15 74 -34z m-5850 -41 c-3 -3 -9 2 -12 12 -6 14\r
-5 15 5 6 7 -7 10 -15 7 -18z m402 4 c0 -17 -51 -58 -65 -52 -7 2 -16 -1 -21\r
-8 -5 -9 -2 -10 12 -5 14 5 16 4 8 -4 -17 -17 -54 5 -54 30 0 11 2 20 4 20 2\r
0 11 3 20 6 11 4 16 1 16 -11 0 -9 5 -13 10 -10 6 4 7 11 4 17 -4 6 0 14 7 19\r
20 13 59 11 59 -2z m40 7 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10\r
11 6 0 10 -2 10 -4z m104 -121 c14 -44 26 -87 26 -95 0 -26 -70 -150 -85 -150\r
-8 0 -25 4 -39 10 -31 11 -33 32 -12 135 24 115 42 172 49 155 4 -8 4 -5 1 7\r
-3 13 -2 28 2 34 11 19 30 -12 58 -96z m114 -57 c135 -230 146 -256 175 -408\r
15 -74 36 -179 47 -234 12 -54 19 -100 17 -102 -10 -11 -83 158 -138 321 -34\r
99 -92 269 -129 378 -37 108 -66 197 -65 197 2 0 43 -69 93 -152z m-505 125\r
c-13 -2 -33 -2 -45 0 -13 2 -3 4 22 4 25 0 35 -2 23 -4z m122 -33 c-2 -4 -20\r
-4 -39 -2 -24 3 -36 9 -36 19 0 11 7 14 25 11 14 -3 25 -1 25 5 0 6 6 2 14 -8\r
8 -11 13 -22 11 -25z m147 34 c6 -6 -20 -94 -28 -94 -3 0 -16 7 -30 16 -13 9\r
-27 14 -31 10 -3 -3 -2 -6 4 -6 5 0 20 -8 31 -19 19 -16 21 -22 11 -50 -14\r
-39 -23 -33 -44 30 l-17 50 38 35 c38 33 54 40 66 28z m5624 -16 c3 -5 23 -56\r
43 -113 l38 -103 -31 -4 c-68 -7 -81 0 -104 54 -12 28 -20 53 -19 55 2 1 20\r
-9 40 -23 20 -13 37 -23 37 -20 0 3 -19 18 -42 34 -24 17 -52 47 -63 67 l-19\r
37 21 17 c22 18 88 18 99 -1z m102 2 l44 0 -7 -97 c-11 -169 -22 -172 -82 -22\r
-49 124 -51 133 -20 125 12 -3 42 -6 65 -6z m-5971 -12 c-8 -5 -7 -8 3 -8 11\r
-1 10 -4 -4 -15 -17 -13 -18 -15 -3 -15 11 0 17 -8 17 -25 l0 -25 -48 24 c-27\r
13 -54 32 -61 40 -8 9 -20 16 -27 16 -8 0 -14 3 -14 8 0 4 33 7 74 7 41 0 69\r
-3 63 -7z m6201 -70 c152 -81 142 -61 112 -233 -11 -60 -20 -112 -20 -115 0\r
-6 -88 89 -135 145 -32 39 -125 240 -125 272 0 20 6 17 168 -69z m-443 12 c10\r
-22 22 -37 26 -34 5 3 6 -1 3 -9 -3 -8 2 -32 11 -53 11 -27 14 -53 10 -84 -10\r
-74 -16 -78 -71 -52 -44 22 -46 24 -40 56 7 38 15 34 -134 52 -84 10 -88 17\r
-28 49 29 16 84 48 123 72 38 24 72 43 76 43 3 0 14 -18 24 -40z m-5855 4 c0\r
-7 13 -20 30 -29 34 -18 44 -19 35 -5 -4 6 5 5 19 -2 14 -6 26 -16 26 -22 0\r
-6 -5 -5 -12 2 -7 7 -17 12 -22 12 -6 -1 0 -9 12 -20 23 -19 24 -24 28 -226 2\r
-114 2 -205 0 -203 -10 9 -135 428 -141 472 -6 41 -5 46 9 41 9 -3 16 -12 16\r
-20z m227 -19 c30 -54 29 -58 -14 -50 -58 10 -83 30 -83 66 0 29 2 30 37 27\r
32 -3 41 -9 60 -43z m5938 -55 c20 -47 39 -91 42 -98 6 -13 4 -13 -69 3 -25 5\r
-28 10 -28 49 0 46 11 138 16 134 1 -2 19 -42 39 -88z m-6012 0 c7 -6 34 -25\r
61 -43 27 -17 61 -48 75 -67 l26 -34 -46 32 c-57 41 -147 121 -136 122 4 0 13\r
-5 20 -10z m89 -14 c9 0 15 -2 13 -4 -2 -3 8 -21 23 -41 26 -35 26 -36 2 -15\r
-14 12 -43 34 -65 49 -28 19 -33 25 -15 19 14 -4 33 -8 42 -8z m78 -33 l-1\r
-48 -15 27 c-12 23 -12 31 -2 48 7 11 14 20 15 20 2 0 3 -21 3 -47z m1116 -20\r
c-72 -228 -201 -603 -207 -603 -3 0 -107 91 -229 203 -207 188 -250 225 -250\r
214 0 -5 175 -164 367 -335 51 -46 93 -87 93 -91 0 -7 -291 -141 -306 -141\r
-24 0 -66 95 -90 201 -47 210 -73 362 -64 379 5 10 83 40 207 78 152 48 491\r
157 499 161 1 1 -8 -29 -20 -66z m-1204 -37 c43 -34 78 -66 78 -72 0 -7 -37\r
-74 -82 -150 -72 -122 -83 -135 -89 -114 -4 14 -7 112 -8 218 -1 152 2 192 12\r
186 6 -4 47 -35 89 -68z m287 7 c7 -25 19 -59 27 -75 9 -18 11 -28 4 -28 -23\r
0 -101 23 -106 31 -6 10 46 119 56 119 4 0 13 -21 19 -47z m4711 27 c-6 -11\r
-18 -20 -28 -19 -14 0 -14 2 3 9 11 5 16 9 10 9 -5 1 -3 6 5 11 21 14 22 13\r
10 -10z m80 10 c12 -7 12 -12 2 -22 -9 -9 -12 -8 -13 8 0 17 -1 17 -9 -3 -11\r
-27 -25 -30 -34 -7 -6 15 -4 15 11 3 15 -13 16 -12 11 9 -7 24 6 29 32 12z\r
m79 -24 c-10 -21 -15 -24 -26 -14 -12 10 -11 14 9 29 28 22 32 19 17 -15z m99\r
19 c1 -1 -3 -14 -9 -28 -14 -31 -23 -27 -45 15 l-16 30 34 -7 c18 -4 34 -8 36\r
-10z m-1327 -90 c144 -155 249 -274 249 -283 0 -5 -17 -18 -39 -30 -37 -21\r
-51 -22 -260 -22 -184 0 -221 2 -221 14 0 22 172 417 180 414 4 -2 45 -44 91\r
-93z m1377 64 l-11 -32 -14 24 c-10 17 -12 18 -8 4 16 -45 16 -52 1 -64 -12\r
-10 -17 -9 -25 8 -16 29 15 91 45 91 21 0 22 -2 12 -31z m35 11 c3 -10 -1 -24\r
-8 -30 -9 -8 -12 -5 -10 12 5 46 9 50 18 18z m1358 6 c-6 -7 -9 -22 -5 -32 4\r
-14 3 -15 -3 -6 -12 16 -35 -44 -52 -138 -7 -36 -28 -112 -46 -170 -19 -58\r
-36 -116 -39 -130 -3 -14 -2 4 2 40 3 36 6 122 7 192 l0 127 65 66 c35 36 68\r
65 73 65 5 0 4 -6 -2 -14z m-377 -194 c130 -262 123 -239 85 -300 l-32 -51\r
-67 114 -68 114 -7 138 c-4 76 -11 148 -16 161 -6 15 -5 21 1 17 6 -4 53 -91\r
104 -193z m-874 178 c-12 -8 -12 -10 -1 -10 8 0 12 -3 8 -6 -9 -9 -28 6 -22\r
17 4 5 12 9 18 9 7 0 6 -4 -3 -10z m55 0 c-3 -5 -1 -10 6 -10 10 0 10 -3 1\r
-12 -9 -9 -7 -14 5 -23 12 -9 13 -16 5 -31 -7 -11 -12 -13 -12 -6 0 7 -4 11\r
-8 8 -5 -3 -7 11 -6 30 2 24 -1 34 -11 34 -8 0 -15 5 -15 10 0 6 9 10 21 10\r
11 0 17 -4 14 -10z m-376 -14 c9 -11 10 -20 1 -36 l-11 -21 -19 23 c-13 16\r
-15 27 -8 36 14 16 23 15 37 -2z m291 -16 c0 -5 -8 -8 -18 -7 -10 0 -18 9 -18\r
18 0 14 4 15 18 8 10 -5 18 -14 18 -19z m116 -7 c-11 -11 -17 4 -9 23 7 18 8\r
18 11 1 2 -10 1 -21 -2 -24z m685 -108 c5 -76 8 -140 5 -142 -2 -2 -12 9 -22\r
26 -10 16 -21 28 -25 25 -8 -5 -6 22 11 144 7 51 15 91 17 88 3 -2 9 -66 14\r
-141z m-1296 104 c9 -17 14 -33 11 -37 -3 -3 -6 0 -6 7 0 7 -4 9 -10 6 -5 -3\r
-21 2 -36 11 l-26 17 24 13 c12 7 24 13 25 14 1 0 10 -14 18 -31z m264 -12 c1\r
-5 -4 -5 -10 -1 -6 3 -3 -5 6 -20 10 -14 13 -26 9 -27 -5 0 -20 -2 -34 -5 -14\r
-2 -20 -1 -15 3 6 5 10 13 11 18 0 6 4 26 9 45 7 29 9 31 16 15 4 -11 8 -24 8\r
-28z m565 34 c14 -5 16 -10 8 -15 -7 -4 -16 -4 -22 -1 -5 3 -7 0 -4 -8 3 -8 1\r
-17 -4 -21 -5 -3 -8 5 -7 17 1 12 -3 25 -9 29 -15 10 13 9 38 -1z m-774 -5 c0\r
-2 -7 -9 -15 -16 -12 -10 -15 -10 -15 4 0 9 7 16 15 16 8 0 15 -2 15 -4z m240\r
-43 c0 -7 5 -13 11 -13 5 0 7 -5 4 -10 -9 -15 -30 10 -38 45 -7 28 -6 29 8 11\r
8 -11 15 -26 15 -33z m580 32 c0 -15 -38 -40 -47 -31 -7 7 26 46 39 46 4 0 8\r
-7 8 -15z m30 6 c0 -6 -4 -13 -10 -16 -5 -3 -10 1 -10 9 0 9 5 16 10 16 6 0\r
10 -4 10 -9z m-831 -35 c-11 -24 -29 -36 -29 -18 0 12 31 54 36 49 3 -2 -1\r
-16 -7 -31z m35 12 c-17 -55 -31 -80 -39 -68 -8 13 23 90 37 90 5 0 6 -10 2\r
-22z m336 8 c0 -8 -14 -17 -31 -21 -17 -4 -28 -9 -25 -12 3 -3 19 -1 35 5 27\r
10 32 8 42 -10 10 -19 9 -20 -33 -13 -61 10 -65 15 -32 42 34 27 44 29 44 9z\r
m114 -1 c3 -8 1 -15 -3 -15 -5 0 -11 7 -15 15 -3 8 -1 15 3 15 5 0 11 -7 15\r
-15z m440 -8 c13 -20 0 -35 -16 -19 -9 9 -9 12 1 12 7 0 9 5 6 10 -4 6 -11 8\r
-16 5 -5 -4 -9 -1 -9 5 0 16 21 8 34 -13z m-470 -17 c7 -17 15 -28 18 -25 3 3\r
11 -2 19 -12 13 -15 12 -16 -6 -9 -11 5 -31 8 -45 7 -20 -1 -28 6 -37 29 -14\r
37 -2 39 27 3 l22 -28 -16 27 c-19 32 -20 38 -6 38 6 0 17 -14 24 -30z m256\r
-7 c0 -7 -4 -13 -10 -13 -5 0 -10 12 -10 28 0 21 2 24 10 12 5 -8 10 -21 10\r
-27z m245 5 c-8 -45 -13 -46 -13 -4 0 20 4 36 9 36 5 0 7 -14 4 -32z m726 5\r
c-12 -20 -14 -14 -5 12 4 9 9 14 11 11 3 -2 0 -13 -6 -23z m-1858 -2 c-3 -13\r
-10 -18 -20 -14 -14 5 -13 8 3 20 23 17 23 17 17 -6z m262 -17 l-6 28 25 -28\r
c13 -16 22 -31 20 -34 -3 -2 -9 1 -13 8 -6 10 -11 10 -21 -3 -16 -19 -50 -20\r
-50 -1 0 8 5 27 11 43 l11 28 14 -35 c12 -30 13 -31 9 -6z m924 9 c10 -19 9\r
-23 -4 -23 -10 0 -15 9 -15 27 0 29 2 29 19 -4z m-371 -20 c6 -3 12 -16 12\r
-30 0 -25 2 -25 48 -19 161 20 162 20 162 -2 0 -16 -22 -34 -87 -73 -49 -28\r
-102 -61 -118 -74 l-31 -23 -94 54 c-52 30 -99 54 -105 54 -5 1 0 6 12 13 16\r
9 56 10 148 5 69 -4 136 -3 148 1 14 5 -33 10 -124 12 -104 3 -151 8 -163 18\r
-29 24 -17 31 38 25 l54 -6 7 41 7 41 36 -16 c21 -9 43 -18 50 -21z m203 14\r
c-13 -13 -26 -3 -16 12 3 6 11 8 17 5 6 -4 6 -10 -1 -17z m135 -25 c-12 -11\r
-18 7 -10 30 l8 23 4 -23 c2 -13 1 -26 -2 -30z m-1092 13 c13 -20 14 -26 4\r
-29 -37 -12 -54 4 -42 42 6 19 20 14 38 -13z m923 10 c0 -8 -7 -15 -15 -15\r
-12 0 -12 3 -2 15 7 8 13 15 15 15 1 0 2 -7 2 -15z m884 -16 c-5 -13 -10 -19\r
-10 -12 -1 15 10 45 15 40 3 -2 0 -15 -5 -28z m-6484 -11 c18 -11 64 -54 102\r
-95 61 -66 74 -87 97 -156 31 -92 69 -178 114 -256 18 -29 27 -51 22 -47 -13\r
8 -88 135 -97 163 -3 13 -10 22 -15 20 -4 -1 -34 36 -66 83 -31 47 -97 138\r
-146 203 -90 121 -91 134 -11 85z m4573 16 c0 -8 -4 -12 -10 -9 -5 3 -10 10\r
-10 16 0 5 5 9 10 9 6 0 10 -7 10 -16z m1115 6 c3 -6 -1 -7 -9 -4 -18 7 -21\r
14 -7 14 6 0 13 -4 16 -10z m-5659 -165 c99 -122 184 -253 184 -284 -1 -14 -7\r
-37 -14 -50 -13 -23 -15 -21 -72 81 -33 57 -88 161 -124 231 -35 69 -66 124\r
-68 122 -9 -9 184 -376 263 -500 18 -27 42 -70 54 -93 12 -24 25 -41 28 -38 3\r
3 -13 39 -36 80 -22 41 -41 79 -41 84 0 5 7 27 16 47 l16 38 30 -49 c17 -27\r
49 -76 71 -108 38 -57 39 -60 21 -73 -10 -8 -30 -17 -43 -20 -13 -3 -73 -28\r
-134 -54 -61 -27 -112 -49 -114 -49 -6 0 -109 511 -147 733 -3 15 -8 37 -11\r
50 -4 12 7 2 25 -23 17 -25 60 -81 96 -125z m4579 145 c0 -7 -6 -15 -12 -17\r
-8 -3 -13 4 -13 17 0 13 5 20 13 18 6 -3 12 -11 12 -18z m125 16 c0 -3 -4 -8\r
-10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m830 0 c0 -2 -7\r
-7 -16 -10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z m-5649 -118 c11 -57 42 -219\r
70 -362 27 -142 48 -260 46 -262 -2 -2 -45 53 -95 124 -51 70 -121 165 -157\r
212 -37 49 -63 92 -61 102 5 21 170 298 174 293 2 -2 13 -50 23 -107z m191 81\r
c20 -8 32 -25 47 -70 11 -32 19 -59 18 -59 -2 0 -38 36 -81 80 -74 74 -76 79\r
-45 70 19 -6 46 -15 61 -21z m4408 11 c0 -6 -7 -13 -15 -16 -8 -4 -12 -10 -9\r
-15 3 -5 0 -9 -6 -9 -13 0 -9 32 5 42 14 11 25 10 25 -2z m44 -21 c-11 -18\r
-32 -9 -27 11 4 16 8 18 19 9 8 -6 11 -15 8 -20z m186 -9 c-7 -16 -16 -27 -21\r
-24 -5 3 -2 18 8 34 21 37 30 31 13 -10z m427 24 c34 -5 59 -36 47 -55 -7 -12\r
-103 -7 -124 6 -5 3 -11 18 -11 33 -1 27 -1 27 -8 -3 -6 -28 -12 -31 -101 -56\r
-52 -15 -129 -40 -171 -56 -72 -29 -77 -29 -124 -15 l-49 14 59 34 c33 19 71\r
37 85 41 14 3 28 10 31 15 3 4 43 15 90 24 46 8 100 19 119 24 33 8 81 6 157\r
-6z m643 6 c-12 -8 -12 -10 -1 -10 8 0 12 -2 9 -5 -7 -8 -38 5 -38 16 0 5 10\r
9 23 9 18 0 19 -2 7 -10z m-8 -89 c55 -41 89 -73 93 -89 9 -37 -2 -39 -38 -5\r
-17 17 -66 54 -107 83 -41 29 -76 53 -76 54 -1 0 -5 11 -8 23 -7 21 -6 22 21\r
10 16 -6 68 -41 115 -76z m651 12 c-8 -38 -35 -162 -59 -278 l-44 -210 4 110\r
c4 88 11 133 39 225 19 63 40 139 47 168 6 28 15 52 20 52 4 0 1 -30 -7 -67z\r
m-1993 47 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4\r
10 -10z m310 1 c0 -5 -7 -11 -14 -14 -10 -4 -13 -1 -9 9 6 15 23 19 23 5z\r
m-345 -11 c-3 -5 -14 -10 -23 -10 -15 0 -15 2 -2 10 20 13 33 13 25 0z m261\r
-2 c5 -7 3 -8 -6 -3 -10 6 -12 4 -7 -7 3 -9 1 -15 -6 -14 -18 3 -37 16 -37 27\r
0 13 47 11 56 -3z m1650 -155 c-8 -206 -27 -323 -58 -366 -11 -14 -13 10 -12\r
135 0 142 2 161 32 261 18 59 32 114 32 122 0 8 3 15 7 15 3 0 3 -75 -1 -167z\r
m-501 136 c10 -30 4 -30 -30 -3 l-30 24 27 0 c18 0 29 -7 33 -21z m-1281 2 c3\r
-5 -3 -20 -13 -32 -23 -28 -44 -16 -35 19 6 22 38 31 48 13z m1350 -36 c4 -11\r
-2 -14 -20 -13 -21 2 -23 4 -11 12 13 8 12 12 -7 28 -21 19 -21 19 6 3 14 -9\r
29 -23 32 -30z m-1431 16 c4 -17 2 -18 -19 -9 -29 13 -31 28 -5 28 10 0 21 -9\r
24 -19z m152 9 c3 -6 -2 -8 -12 -5 -10 3 -8 0 5 -6 29 -16 28 -23 -5 -38 -36\r
-17 -51 0 -29 33 17 27 31 32 41 16z m1045 -4 c0 -8 12 -29 27 -47 l27 -32\r
-25 8 c-13 4 -39 15 -57 24 -30 15 -32 19 -18 30 14 11 16 11 16 -3 0 -10 5\r
-14 10 -11 6 4 8 15 5 26 -4 11 -2 19 4 19 6 0 11 -6 11 -14z m-1284 -52 c-4\r
-14 -11 -22 -16 -19 -15 9 -12 27 3 19 6 -4 3 3 -8 15 -16 19 -17 24 -5 31 20\r
12 34 -14 26 -46z m25 43 c-1 -4 -1 -17 -1 -29 0 -27 -5 -21 -14 15 -5 20 -3\r
28 4 25 6 -2 11 -7 11 -11z m732 -7 c8 -7 -58 -75 -103 -107 -18 -13 -24 -11\r
-66 19 -36 26 -42 34 -28 36 11 2 31 7 46 12 26 8 26 8 22 -28 -3 -35 -3 -36\r
5 -6 4 17 11 37 16 44 6 10 3 11 -16 6 -13 -4 -49 -10 -79 -12 -75 -7 -45 12\r
52 32 40 8 75 17 77 20 7 6 64 -6 74 -16z m-805 -37 c15 -46 -10 -51 -42 -8\r
-20 26 -23 34 -11 39 10 3 12 0 9 -12 -2 -9 1 -7 7 6 14 26 22 21 37 -25z\r
m1460 -31 c49 -40 54 -57 15 -48 -27 6 -94 70 -115 110 -9 17 -6 16 23 -4 19\r
-13 53 -39 77 -58z m-3747 -397 c121 -220 244 -443 274 -495 171 -307 277\r
-502 273 -505 -2 -2 -87 31 -188 75 -102 43 -342 142 -535 220 -400 162 -409\r
166 -401 185 14 37 306 934 312 959 l7 29 19 -34 c11 -19 118 -214 239 -434z\r
m2402 450 c1 -5 -6 -11 -15 -13 -11 -2 -18 3 -18 13 0 17 30 18 33 0z m802\r
-15 c2 -4 -10 -4 -27 -1 -17 4 -33 12 -35 18 -4 10 3 10 26 2 17 -6 33 -14 36\r
-19z m-3489 -22 c-7 -24 -62 -189 -121 -368 -59 -179 -125 -380 -146 -447 -22\r
-67 -43 -125 -48 -127 -16 -10 -746 85 -759 99 -9 9 81 420 108 489 6 17 40\r
37 126 75 64 29 120 49 124 44 4 -4 77 -134 163 -288 223 -402 230 -415 235\r
-411 3 4 -177 335 -324 596 -30 52 -54 99 -54 105 0 7 111 53 248 105 136 51\r
288 110 337 131 122 51 128 50 111 -3z m3486 -69 c37 -52 68 -99 68 -106 0 -6\r
-26 -17 -57 -23 -32 -7 -87 -23 -123 -36 -41 -15 -68 -20 -75 -14 -7 6 -14 7\r
-18 4 -10 -10 -45 15 -73 52 l-27 35 38 39 c22 22 45 40 52 40 7 0 28 -14 48\r
-31 19 -17 35 -26 35 -21 0 6 -16 23 -35 37 l-34 27 57 49 c31 26 61 47 67 45\r
5 -1 40 -45 77 -97z m348 91 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10\r
11 10 2 0 4 -4 4 -10z m-1351 -37 c-1 -34 -2 -35 -9 -13 -11 36 -11 50 0 50 6\r
0 10 -17 9 -37z m205 12 c-13 -21 -19 -23 -31 -13 -12 10 -11 14 9 24 35 20\r
40 17 22 -11z m56 16 c0 -5 -6 -14 -14 -20 -12 -10 -13 -8 -9 8 5 21 23 30 23\r
12z m1131 -15 c0 -6 7 -58 14 -116 l14 -105 -5 93 c-2 51 -7 99 -10 107 -8 20\r
19 20 59 0 30 -15 87 -82 87 -103 0 -12 -105 -104 -138 -121 -38 -20 -52 -7\r
-52 47 0 41 -8 82 -36 180 -5 16 -2 22 9 22 8 0 17 -3 20 -7 2 -5 3 -3 1 4 -1\r
6 0 13 3 16 8 9 33 -4 34 -17z m-1415 -40 c-2 -6 -5 -2 -5 9 -1 15 -4 16 -10\r
7 -5 -9 -17 -11 -36 -6 l-28 7 34 18 c33 17 34 17 42 -4 4 -11 6 -25 3 -31z\r
m326 47 c-6 -2 -10 -8 -7 -12 2 -5 -8 -14 -23 -20 l-27 -13 24 26 c14 14 29\r
26 35 25 6 0 5 -3 -2 -6z m728 -7 c9 -2 41 -17 72 -32 55 -27 57 -29 41 -46\r
-16 -18 -19 -17 -67 29 -28 26 -42 37 -31 23 10 -14 32 -37 48 -51 27 -23 28\r
-27 16 -47 -8 -12 -18 -22 -24 -22 -17 0 -115 130 -115 154 0 4 10 5 23 2 12\r
-4 29 -8 37 -10z m-885 -33 c-5 -27 -5 -28 5 -4 7 17 14 21 21 14 8 -8 6 -21\r
-6 -44 l-18 -33 -11 34 c-8 22 -9 40 -3 48 15 19 18 15 12 -15z m292 8 c9 -5\r
-16 -21 -79 -51 -51 -24 -133 -66 -182 -92 -49 -26 -91 -48 -93 -48 -2 0 14\r
23 35 52 30 41 59 63 133 105 81 45 99 52 133 47 22 -2 45 -8 53 -13z m222 2\r
c5 -10 12 -40 16 -66 9 -57 -4 -76 -75 -112 -88 -44 -87 -44 -120 27 -53 114\r
-54 110 42 141 99 31 124 33 137 10z m663 -35 c9 -29 20 -89 23 -133 l7 -80\r
-47 45 c-25 25 -62 66 -81 92 -35 47 -35 47 -54 28 -11 -11 -26 -20 -32 -20\r
-9 0 -9 -3 1 -9 10 -7 19 -5 26 6 7 9 16 14 21 12 17 -7 124 -128 124 -140 0\r
-18 -57 -3 -140 38 -92 45 -89 42 -65 59 11 8 20 20 20 26 0 18 136 120 152\r
114 8 -3 11 -1 8 4 -3 6 0 10 8 10 7 0 20 -22 29 -52z m-1278 33 c3 -5 -1 -11\r
-9 -15 -9 -3 -15 0 -15 9 0 16 16 20 24 6z m676 -20 l35 -29 -24 -26 c-14 -14\r
-28 -26 -32 -26 -4 0 -10 17 -13 38 -4 20 -9 45 -12 55 -8 25 7 21 46 -12z\r
m1020 8 c0 -7 8 -18 18 -25 16 -13 16 -13 0 -14 -10 0 -18 5 -18 11 0 6 -9 8\r
-20 4 -22 -7 -23 -5 -14 19 7 18 34 22 34 5z m-1891 -31 c-24 -45 -45 -67 -59\r
-58 -10 6 -8 9 6 13 16 4 16 5 -3 6 -13 0 -23 5 -23 9 0 6 71 48 88 51 1 1 -3\r
-9 -9 -21z m101 2 c10 -1 -65 -39 -77 -40 -9 0 -9 7 -2 29 10 27 13 29 42 20\r
18 -5 34 -9 37 -9z m125 10 c8 -13 -5 -13 -25 0 -13 8 -13 10 2 10 9 0 20 -4\r
23 -10z m1592 -12 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z\r
m-6232 -58 c-3 -5 14 -34 39 -65 25 -30 49 -63 54 -72 5 -10 5 -76 1 -148 -5\r
-71 -16 -274 -25 -450 -21 -418 -28 -466 -36 -265 -4 85 -16 310 -27 500 -11\r
190 -23 386 -26 435 -2 50 -7 101 -11 115 -5 22 -3 20 15 -8 12 -18 19 -37 16\r
-42z m6180 48 c2 -2 -8 -12 -24 -21 -27 -16 -28 -16 -38 6 -10 20 -8 22 24 21\r
18 -1 35 -3 38 -6z m-1629 -10 c5 -7 3 -8 -6 -3 -10 6 -12 4 -7 -9 5 -11 3\r
-15 -5 -10 -8 5 -9 2 -5 -9 10 -25 -2 -20 -14 6 -9 21 -9 21 -6 -5 3 -23 1\r
-26 -22 -22 -53 9 -57 15 -21 31 19 8 40 16 47 17 7 1 16 5 19 9 10 9 12 9 20\r
-5z m60 3 c-4 -5 0 -11 6 -14 9 -3 7 -10 -7 -26 l-20 -23 -7 24 c-6 18 -7 16\r
-3 -8 3 -26 0 -33 -21 -43 -14 -6 -27 -11 -29 -11 -12 0 52 100 65 103 8 3 16\r
5 18 6 2 0 1 -3 -2 -8z m414 -84 c21 -49 29 -82 23 -88 -9 -9 -264 -40 -272\r
-33 -2 1 43 51 100 109 56 58 106 102 110 98 4 -5 21 -43 39 -86z m-170 -14\r
c-93 -99 -162 -145 -184 -123 -7 7 -2 10 15 10 19 1 16 4 -15 15 -22 8 -43 12\r
-48 9 -4 -3 -8 -1 -8 4 0 5 12 18 28 28 34 24 284 153 295 154 5 0 -32 -44\r
-83 -97z m1483 -38 c3 -16 4 -31 3 -32 -5 -6 -86 144 -86 157 0 25 78 -93 83\r
-125z m-3 125 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11\r
-4 11 -10z m-130 -10 c0 -6 -7 -27 -16 -48 l-16 -37 -16 33 c-15 30 -15 33 4\r
47 22 17 44 19 44 5z m-1558 -20 c-41 -25 -50 -25 -27 0 10 11 28 20 39 20 17\r
0 15 -4 -12 -20z m1723 10 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4\r
10 3 0 8 -4 11 -10z m-2862 -19 l227 -6 -184 -310 c-102 -170 -194 -325 -206\r
-343 l-21 -33 -96 158 c-53 87 -110 183 -128 213 -17 30 -61 102 -96 160 -36\r
58 -76 122 -89 144 l-23 38 194 -7 c107 -4 296 -11 422 -14z m822 -1 c3 -5 1\r
-10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m1908 -42 c2\r
-24 8 -51 12 -60 10 -25 -8 -22 -38 6 -26 24 -26 25 -10 65 19 49 29 46 36\r
-11z m-1746 23 c7 -3 9 -11 5 -18 -5 -8 -21 -4 -52 13 l-45 25 40 -7 c22 -3\r
45 -9 52 -13z m187 7 c-4 -7 -22 -32 -41 -55 -33 -41 -53 -50 -87 -37 -31 12\r
-15 30 57 66 84 43 80 42 71 26z m-844 -194 c29 -72 51 -138 48 -146 -3 -7\r
-41 -35 -84 -62 -300 -183 -453 -280 -450 -284 3 -2 123 68 267 157 144 89\r
265 161 269 161 4 0 10 -30 13 -67 7 -72 63 -421 98 -611 12 -62 19 -115 16\r
-118 -3 -3 -63 36 -134 87 -129 94 -287 204 -443 311 -46 32 -87 64 -91 71 -3\r
6 86 166 199 355 l206 343 16 -33 c10 -18 41 -92 70 -164z m260 151 c-47 -24\r
-90 -44 -96 -44 -6 -1 -54 19 -105 43 l-94 45 190 0 190 0 -85 -44z m2049 22\r
c15 -28 4 -60 -32 -99 -23 -24 -28 -26 -68 -17 -24 6 -46 13 -49 16 -5 5 120\r
123 131 123 3 0 11 -10 18 -23z m-2267 -29 c103 -46 107 -49 93 -55 -38 -14\r
-40 -20 -15 -72 13 -28 26 -51 29 -51 3 1 46 11 95 24 86 23 90 23 128 6 21\r
-9 40 -19 43 -21 4 -5 -322 -109 -341 -109 -5 0 -16 17 -23 38 -8 20 -35 89\r
-62 153 -49 116 -53 129 -44 129 2 0 46 -19 97 -42z m348 32 c0 -5 -10 -10\r
-22 -10 -19 0 -20 2 -8 10 19 13 30 13 30 0z m40 0 c0 -5 -7 -10 -15 -10 -8 0\r
-15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m36 -17 c-10 -10 -19 5 -10 18\r
6 11 8 11 12 0 2 -7 1 -15 -2 -18z m39 11 c-9 -9 -19 -13 -23 -10 -3 4 0 11 8\r
16 24 15 33 11 15 -6z m955 -44 c0 -3 18 -16 40 -30 38 -24 51 -40 31 -40 -5\r
0 -16 -3 -24 -6 -10 -3 -18 5 -25 25 -6 17 -14 31 -17 31 -3 0 1 -16 9 -35\r
l15 -34 -37 -11 c-46 -13 -109 -13 -117 -1 -5 10 43 98 74 134 14 17 16 17 33\r
-5 10 -13 18 -25 18 -28z m1030 -63 c0 -17 -25 0 -47 33 -13 18 -23 45 -23 59\r
0 23 5 19 35 -29 19 -30 35 -58 35 -63z m-1911 94 c10 -6 3 -9 -22 -8 -22 1\r
-32 4 -24 9 16 10 29 10 46 -1z m2151 -134 l0 -133 -29 -17 c-16 -9 -48 -33\r
-71 -52 -51 -43 -64 -44 -55 -7 3 16 1 41 -5 56 -7 20 -7 34 4 53 13 26 14 26\r
20 5 4 -12 11 -22 15 -22 9 0 21 49 21 87 0 30 80 174 92 167 4 -3 8 -65 8\r
-137z m-185 115 c-3 -3 -11 0 -18 7 -9 10 -8 11 6 5 10 -3 15 -9 12 -12z\r
m-2185 1 c0 -1 -9 -7 -20 -13 -16 -8 -20 -8 -20 4 0 9 8 14 20 13 11 -1 20 -2\r
20 -4z m1020 1 c0 -10 -61 -94 -68 -94 -12 1 -57 38 -52 43 8 8 105 56 113 57\r
4 0 7 -3 7 -6z m-1087 -18 c4 -10 -10 -20 -46 -34 -53 -20 -114 -29 -88 -13 7\r
5 23 7 35 5 12 -3 15 -1 7 2 -10 5 -1 14 30 30 53 28 55 28 62 10z m149 -2\r
c-13 -9 -30 -13 -40 -9 -14 5 -14 7 -2 15 8 6 26 10 40 10 l24 0 -22 -16z\r
m1292 -18 c-30 -26 -89 -40 -140 -34 l-29 4 40 18 c41 18 147 46 154 40 2 -2\r
-10 -14 -25 -28z m84 1 c3 -21 -1 -27 -15 -27 -13 0 -14 -3 -5 -8 9 -7 7 -16\r
-10 -42 -29 -42 -68 -56 -109 -40 l-30 13 32 33 c18 19 41 34 52 34 10 0 15 5\r
12 11 -9 14 35 60 55 57 8 -2 16 -16 18 -31z m122 -24 c3 -2 -20 -3 -50 -1\r
-52 2 -55 4 -56 30 l-1 27 51 -26 c28 -14 53 -27 56 -30z m403 17 c-3 -10 -13\r
-20 -23 -23 -18 -5 -18 -3 -2 29 16 34 34 29 25 -6z m236 26 c11 -14 6 -15\r
-27 -7 -4 1 8 21 12 21 2 0 9 -6 15 -14z m-1981 -1 c-13 -13 -138 -43 -132\r
-32 18 32 30 37 82 37 30 0 53 -2 50 -5z m-208 -15 c13 -9 12 -13 -9 -30 -27\r
-23 -61 -26 -61 -6 0 8 10 22 22 30 26 19 28 19 48 6z m312 -6 l32 -17 -37\r
-18 c-55 -29 -211 -79 -243 -79 -16 0 -47 8 -68 18 l-39 18 159 46 c87 26 160\r
47 162 47 2 1 17 -6 34 -15z m1858 -72 c17 -51 18 -67 8 -85 -11 -20 -12 -18\r
-26 33 -7 30 -16 75 -18 100 -6 58 8 39 36 -48z m-100 8 c0 -8 -25 -20 -40\r
-20 -5 0 -10 10 -12 23 -2 12 -13 26 -25 32 -13 5 -23 15 -23 22 0 7 21 -1 50\r
-19 28 -17 50 -34 50 -38z m118 35 c-3 -3 -9 2 -12 12 -6 14 -5 15 5 6 7 -7\r
10 -15 7 -18z m-2283 -4 c-3 -6 -11 -8 -17 -5 -6 4 -5 9 3 15 16 10 23 4 14\r
-10z m984 -15 c34 -35 33 -43 -9 -46 -45 -4 -60 0 -60 15 0 18 21 65 30 65 3\r
0 21 -15 39 -34z m-839 20 c0 -2 -9 -6 -20 -9 -11 -3 -18 -1 -14 4 5 9 34 13\r
34 5z m2173 -21 c-7 -21 -12 -19 -10 4 0 11 5 18 9 15 4 -3 5 -11 1 -19z\r
m-1785 0 c4 -4 -4 -4 -18 0 l-25 8 25 -21 c21 -18 23 -23 10 -32 -15 -10 -170\r
-15 -170 -5 0 2 23 18 51 34 50 28 108 36 127 16z m371 -12 c-8 -22 -7 -30 7\r
-40 16 -12 16 -13 1 -13 -9 0 -17 5 -17 10 0 7 -6 7 -19 0 -11 -5 -32 -11 -46\r
-12 -21 -2 -23 -4 -11 -13 11 -9 -3 -15 -67 -28 -117 -24 -127 -23 -159 22\r
-20 29 -24 41 -16 49 19 19 25 14 22 -15 l-4 -28 10 26 c12 30 21 33 169 49\r
52 6 97 13 100 15 2 3 12 5 22 5 16 0 17 -4 8 -27z m474 5 c-20 -20 -25 -20\r
-50 -8 l-28 14 40 7 c22 3 44 7 50 8 5 0 0 -9 -12 -21z m167 16 c0 -3 -9 -17\r
-20 -31 -11 -14 -20 -32 -20 -39 0 -8 -5 -14 -10 -14 -11 0 31 89 43 90 4 0 7\r
-3 7 -6z m118 -10 c4 -4 -6 -4 -23 0 l-30 6 28 -16 c16 -8 27 -18 24 -21 -6\r
-5 -63 23 -71 36 -6 10 63 6 72 -5z m96 4 c-3 -5 -13 -7 -21 -4 -8 3 -11 2 -8\r
-3 12 -21 -18 -22 -38 -2 l-22 21 47 -1 c26 -1 45 -6 42 -11z m278 -27 c-4\r
-28 -6 -29 -58 -29 -46 1 -52 3 -43 15 7 8 18 12 25 9 8 -3 17 1 21 8 10 15\r
45 36 54 31 3 -2 4 -17 1 -34z m66 15 c2 -10 -2 -22 -10 -27 -25 -17 -38 -9\r
-38 22 0 26 3 30 22 27 13 -2 24 -11 26 -22z m412 -256 c-18 -191 -41 -333\r
-61 -375 -10 -22 -16 -29 -13 -15 4 13 8 128 9 255 2 213 4 233 23 265 11 19\r
26 62 34 94 l13 59 3 -84 c2 -46 -2 -136 -8 -199z m-2650 266 c0 -2 -7 -6 -15\r
-10 -8 -3 -15 -1 -15 4 0 6 7 10 15 10 8 0 15 -2 15 -4z m94 -2 c9 -3 16 -10\r
16 -14 0 -10 -75 -40 -101 -40 -17 0 -18 3 -8 21 9 18 17 20 52 16 23 -3 34\r
-3 25 0 -10 2 -18 9 -18 14 0 10 12 12 34 3z m1320 -3 c4 -5 3 -11 -1 -14 -5\r
-2 -2 -2 5 -1 16 4 62 -16 62 -28 0 -11 -11 -10 -58 6 -22 8 -50 12 -61 9 -28\r
-7 -27 11 2 25 28 14 44 14 51 3z m585 -13 c14 -23 14 -23 -16 -32 -19 -6 -23\r
-3 -24 16 l-2 23 -4 -22 c-4 -22 -14 -26 -58 -26 -39 1 -40 4 -8 31 40 34 94\r
39 112 10z m66 -5 c-24 -17 -49 -13 -53 8 -2 12 5 14 34 11 35 -4 36 -6 19\r
-19z m-5807 -163 l110 -154 -20 -51 c-12 -27 -74 -189 -138 -360 -65 -170\r
-124 -326 -133 -345 l-15 -35 -1 70 c-1 39 6 153 13 255 8 102 20 318 26 480\r
6 162 13 301 16 309 7 21 15 11 142 -169z m5491 156 l24 -14 -42 -26 c-62 -39\r
-68 -40 -73 -12 -11 54 38 81 91 52z m-434 -16 c-3 -5 -14 -10 -23 -10 -9 0\r
-24 -5 -32 -11 -11 -7 -6 -8 20 -3 31 6 33 5 21 -10 -7 -8 -16 -14 -20 -13 -3\r
2 -19 9 -34 17 l-28 14 38 12 c49 15 66 16 58 4z m-895 -35 c-34 -35 -64 -50\r
-39 -18 13 15 12 15 -9 4 -13 -7 -35 -10 -50 -6 -21 5 -24 4 -13 -8 10 -12 5\r
-16 -26 -19 -21 -3 -44 -1 -50 5 -9 6 -13 6 -13 -1 0 -6 -19 -16 -42 -23 -24\r
-6 -59 -19 -78 -29 -26 -13 -47 -16 -80 -11 l-45 6 95 24 c52 13 104 29 115\r
34 11 6 43 16 70 23 28 7 82 22 120 33 39 10 72 20 74 20 3 1 -10 -15 -29 -34z\r
m1020 22 c14 -7 26 -21 28 -31 4 -18 -1 -18 -74 -12 -43 4 -80 9 -82 11 -2 2\r
1 13 8 24 8 16 20 21 53 21 23 0 53 -6 67 -13z m396 4 c-3 -5 -15 -11 -26 -14\r
-17 -4 -19 -3 -9 9 12 15 44 20 35 5z m479 -12 c8 -25 7 -25 -28 -34 -26 -7\r
-27 -5 -25 22 1 22 7 29 24 31 15 1 25 -5 29 -19z m-5231 -76 c-13 -49 -39\r
-157 -58 -242 -19 -84 -37 -155 -40 -158 -9 -9 -206 307 -206 332 0 13 -6 10\r
175 94 72 33 135 61 141 61 7 0 2 -32 -12 -87z m3629 55 c16 -32 15 -33 -5\r
-36 -17 -3 -18 -6 -7 -13 10 -6 7 -9 -13 -9 -15 0 -30 5 -33 11 -5 7 -14 4\r
-28 -8 -20 -18 -20 -18 -6 2 36 52 63 85 70 85 3 0 14 -15 22 -32z m1047 11\r
c-21 -17 -22 -20 -5 -15 16 5 14 1 -8 -19 -30 -26 -44 -30 -65 -16 -10 6 1 17\r
40 39 63 36 72 39 38 11z m322 11 c6 0 5 -6 -2 -15 -10 -12 -16 -13 -26 -4\r
-19 16 -18 33 2 25 9 -3 20 -6 26 -6z m168 -15 c0 -21 -5 -25 -30 -25 -25 0\r
-30 4 -30 25 0 21 5 25 30 25 25 0 30 -4 30 -25z m97 3 c-3 -8 -6 -5 -6 6 -1\r
11 2 17 5 13 3 -3 4 -12 1 -19z m-1888 -5 c-12 -15 -12 -16 4 -10 10 4 51 8\r
90 9 l72 2 -70 6 -70 7 83 0 83 0 -26 -27 c-30 -32 -78 -41 -140 -28 -22 5\r
-46 9 -53 10 -8 1 -4 10 10 25 25 27 37 31 17 6z m666 8 c10 -17 -12 -21 -25\r
-6 -10 12 -10 15 3 15 9 0 18 -4 22 -9z m40 -1 c-4 -6 5 -10 19 -10 14 0 26\r
-4 26 -9 0 -9 -34 -21 -62 -21 -15 0 -16 4 -6 25 6 14 15 25 20 25 5 0 6 -4 3\r
-10z m350 0 c3 -5 0 -11 -7 -11 -7 -1 1 -5 17 -9 l30 -8 -32 -1 c-26 -1 -31 3\r
-30 19 1 21 12 26 22 10z m330 0 c-3 -5 2 -10 11 -10 10 0 15 -3 11 -6 -3 -3\r
-15 -3 -28 1 -17 6 -19 9 -8 16 18 11 22 11 14 -1z m326 -30 c5 -21 3 -37 -3\r
-41 -5 -3 1 -9 13 -12 13 -4 20 -9 16 -13 -3 -4 -32 8 -62 27 l-56 34 27 23\r
c35 31 57 25 65 -18z m-1081 15 c20 -24 4 -29 -42 -15 -40 12 -41 14 -18 21\r
38 11 47 10 60 -6z m558 -18 c4 -18 -30 -23 -63 -10 -14 5 -12 8 11 19 35 15\r
48 13 52 -9z m332 13 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10\r
6 0 10 -4 10 -10z m-162 -12 c8 -10 4 -13 -14 -14 -20 -2 -23 1 -13 12 14 17\r
14 17 27 2z m112 2 c-8 -5 -26 -9 -40 -9 -23 0 -23 1 -5 9 11 5 29 9 40 9 17\r
1 17 -1 5 -9z m390 -25 c0 -20 -5 -25 -25 -25 -31 0 -32 14 -3 34 29 20 28 21\r
28 -9z m54 9 c11 -28 6 -39 -9 -20 -8 11 -15 23 -15 28 0 14 18 9 24 -8z\r
m-319 -4 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z\r
m185 3 c0 -17 -19 -35 -29 -29 -18 12 -12 36 9 36 11 0 20 -3 20 -7z m-1765\r
-13 c27 -7 27 -8 5 -8 -14 0 -36 4 -50 8 -20 6 -21 8 -5 8 11 0 34 -4 50 -8z\r
m-135 -25 c-17 -18 -34 -25 -62 -25 -21 0 -38 4 -38 9 0 11 68 39 99 40 l24 1\r
-23 -25z m1220 15 c0 -5 -6 -10 -14 -10 -8 0 -18 5 -21 10 -3 6 3 10 14 10 12\r
0 21 -4 21 -10z m810 -44 c0 -28 -17 -8 -25 29 -7 29 -7 29 8 10 9 -11 17 -29\r
17 -39z m-1862 28 c9 -7 -77 -24 -118 -24 l-45 1 24 19 c19 17 32 19 80 14 31\r
-4 58 -8 59 -10z m-308 -14 c-20 -13 -33 -13 -25 0 3 6 14 10 23 10 15 0 15\r
-2 2 -10z m683 3 c-13 -2 -35 -2 -50 0 -16 2 -5 4 22 4 28 0 40 -2 28 -4z\r
m1380 0 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m67 -3 c0 -13\r
-20 -13 -40 0 -12 8 -9 10 13 10 15 0 27 -4 27 -10z m-2194 -15 c-8 -8 -18\r
-15 -22 -15 -3 0 -1 7 6 15 7 8 17 15 22 15 5 0 3 -7 -6 -15z m647 8 c-7 -2\r
-19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m197 -3 c-20 -13 -50 -13 -50\r
0 0 6 15 10 33 10 24 0 28 -3 17 -10z m1583 -104 c-6 -106 -6 -106 -27 -91\r
-12 9 -36 25 -53 36 -18 12 -31 24 -29 28 3 4 0 13 -6 21 -8 12 -9 12 -4 -2 5\r
-18 -8 -25 -18 -10 -8 14 130 138 142 128 1 -2 -1 -51 -5 -110z m-1643 95 c0\r
-13 -19 -18 -112 -31 -45 -7 -116 -18 -155 -24 -69 -12 -73 -12 -73 6 0 10 6\r
21 13 23 9 4 151 19 315 34 6 0 12 -3 12 -8z m351 -25 c57 -8 128 -18 157 -21\r
52 -7 53 -7 50 -39 -3 -27 -6 -31 -31 -28 -35 4 -299 100 -312 114 -7 7 -4 7\r
11 0 11 -6 67 -17 125 -26z m-1228 9 c0 -6 -7 -11 -16 -11 -16 -2 -16 -1 -1 3\r
14 4 15 7 3 15 -11 7 -11 9 -1 6 8 -2 14 -8 15 -13z m57 5 c0 -5 -8 -10 -17\r
-10 -15 0 -16 2 -3 10 19 12 20 12 20 0z m88 3 c-10 -2 -26 -2 -35 0 -10 3 -2\r
5 17 5 19 0 27 -2 18 -5z m926 -6 c16 -12 11 -19 -55 -81 l-73 -69 -17 64\r
c-10 35 -18 68 -19 72 -1 25 133 37 164 14z m1004 -45 c8 -24 11 -46 8 -49\r
-12 -12 -146 75 -146 95 0 4 28 5 62 2 l61 -5 15 -43z m-2156 27 c24 -12 54\r
-37 67 -58 23 -36 23 -38 17 -226 -9 -263 -18 -456 -22 -453 -1 2 -25 140 -53\r
308 -51 306 -69 450 -58 450 4 0 26 -9 49 -21z m2022 -62 c10 -43 16 -80 13\r
-83 -3 -4 -30 14 -59 40 -29 25 -57 46 -62 46 -6 0 6 17 25 37 l34 37 -41 -32\r
-41 -31 -38 27 -38 27 74 5 c121 8 112 13 133 -73z m-1419 43 c0 -15 -7 -24\r
-20 -27 -42 -7 -181 -8 -205 0 l-25 8 25 -15 c23 -14 19 -15 -75 -16 l-100 0\r
50 -24 c28 -13 103 -53 166 -89 63 -35 161 -88 217 -116 56 -28 102 -56 102\r
-61 0 -16 -132 -230 -141 -230 -5 0 -119 110 -254 244 -239 238 -266 272 -232\r
293 6 4 62 8 123 9 60 1 120 6 131 13 12 6 41 11 65 12 24 0 68 7 98 14 68 15\r
75 14 75 -15z m389 -53 c10 -43 16 -80 12 -84 -8 -8 -62 3 -236 52 -172 48\r
-177 50 -109 63 108 20 294 49 304 48 6 -2 19 -37 29 -79z m-4224 58 c4 -5 47\r
-84 95 -175 97 -184 145 -263 153 -255 7 7 32 -15 32 -28 0 -6 -7 -2 -16 9\r
-15 19 -16 19 -9 -1 46 -135 84 -259 81 -263 -3 -2 4 -20 14 -40 10 -21 21\r
-44 24 -52 3 -8 4 -5 2 8 -2 12 0 20 5 16 5 -3 9 -26 9 -51 l0 -46 -29 54\r
c-15 30 -48 90 -72 134 -23 44 -55 112 -70 150 -105 274 -132 342 -177 438\r
-28 59 -54 107 -57 107 -10 0 3 -34 68 -180 85 -193 167 -393 163 -397 -5 -5\r
-205 330 -276 460 -29 54 -50 100 -48 102 21 22 93 28 108 10z m4573 -35 c70\r
-24 127 -47 127 -51 0 -5 -3 -9 -8 -9 -4 0 -48 -24 -97 -54 -65 -39 -92 -50\r
-97 -41 -4 7 -21 48 -37 91 -16 44 -33 88 -37 98 -6 15 -4 18 7 14 8 -2 71\r
-24 142 -48z m475 35 c59 -31 58 -30 21 -72 -19 -22 -44 -52 -57 -67 -13 -15\r
-28 -26 -35 -24 -7 2 -33 35 -59 73 -32 48 -43 72 -35 77 15 10 102 1 127 -12\r
10 -5 22 -10 27 -10 4 1 -5 8 -21 16 -22 13 -26 18 -15 25 18 11 15 11 47 -6z\r
m-589 -127 c36 -105 42 -102 -109 -54 l-105 33 80 76 c93 87 82 92 134 -55z\r
m359 122 c13 -1 10 -7 -11 -25 -35 -31 -47 -31 -47 -2 0 29 9 39 28 32 7 -3\r
21 -5 30 -5z m693 -33 l85 -44 -17 -39 -18 -39 0 43 c-1 23 -4 42 -8 42 -5 0\r
-6 -23 -4 -51 3 -53 -25 -148 -39 -132 -12 13 -30 98 -32 150 -1 46 -1 47 -5\r
9 l-4 -40 -30 50 c-28 47 -38 94 -21 94 5 0 47 -20 93 -43z m-158 -22 c62 -31\r
62 -32 103 -126 l41 -94 -56 -43 c-31 -23 -70 -56 -88 -72 l-32 -29 15 34 c8\r
19 14 58 14 86 l0 51 26 -17 c14 -9 28 -14 32 -11 3 3 1 6 -5 6 -5 0 -22 11\r
-37 25 l-26 24 0 -50 c0 -60 -17 -134 -35 -149 -14 -12 -18 6 -34 157 -6 58\r
-4 76 7 87 13 13 26 7 103 -45 49 -32 92 -59 96 -59 4 0 -10 12 -33 28 -23 15\r
-66 47 -97 72 -48 39 -57 52 -67 95 -20 90 -20 87 -4 74 9 -7 43 -27 77 -44z\r
m-5412 -78 c35 -61 115 -200 179 -307 64 -107 136 -229 160 -270 23 -41 52\r
-90 63 -108 24 -41 -203 191 -410 418 -190 209 -278 301 -261 274 22 -35 402\r
-448 565 -615 84 -86 153 -163 153 -171 0 -13 -621 -648 -634 -648 -6 0 -13\r
87 -26 320 -6 107 -15 245 -20 305 -5 61 -12 151 -15 200 -10 156 -25 365 -36\r
494 -7 88 -7 127 1 135 14 14 203 95 212 90 3 -2 34 -55 69 -117z m4962 47\r
c53 -86 54 -85 -73 -28 l-74 35 29 18 c17 10 36 25 44 34 7 10 17 17 21 17 4\r
0 28 -34 53 -76z m263 16 c21 -16 54 -40 71 -52 21 -15 31 -28 27 -38 -3 -8\r
-7 -76 -7 -150 l-2 -134 -65 -13 c-108 -22 -240 -39 -240 -32 0 4 21 24 46 45\r
l45 37 51 -21 c67 -28 73 -22 9 8 l-50 23 52 46 c29 25 73 68 99 95 l47 50\r
-47 12 c-26 7 -77 15 -115 19 -37 4 -69 10 -72 14 -5 9 92 121 104 121 5 0 26\r
-13 47 -30z m-1279 -107 c40 -70 71 -128 70 -130 -4 -4 -266 134 -367 193\r
l-85 49 115 6 c63 3 133 6 155 7 l40 2 72 -127z m227 50 c114 -31 118 -21 -43\r
-114 l-98 -56 -15 26 c-9 14 -39 64 -67 111 -28 47 -51 90 -51 97 0 7 29 3 88\r
-13 48 -14 132 -37 186 -51z m1538 -103 c-1 -85 -5 -181 -8 -214 l-6 -58 -59\r
111 c-54 103 -57 112 -45 138 7 15 28 63 47 106 28 63 38 77 54 75 19 -3 20\r
-9 17 -158z m116 108 c23 -16 42 -34 42 -41 0 -13 -150 -311 -154 -305 -4 5\r
15 372 19 386 5 15 24 7 93 -40z m-1005 14 c40 -44 90 -218 58 -197 -7 4 -81\r
27 -164 50 l-151 42 54 35 c78 50 152 88 171 88 9 0 23 -8 32 -18z m-1263\r
-160 c85 -88 192 -194 238 -236 46 -43 82 -80 79 -82 -2 -3 -101 -42 -218 -88\r
-118 -46 -232 -91 -253 -100 l-39 -17 6 128 c4 70 10 224 13 341 4 116 10 212\r
13 212 3 0 76 -71 161 -158z m1450 70 c0 -17 -14 -38 -42 -64 -23 -21 -45 -38\r
-49 -38 -5 0 -11 12 -14 28 -6 25 -33 106 -49 144 -6 13 8 10 73 -15 71 -27\r
81 -34 81 -55z m-5275 -432 c14 -206 32 -481 40 -610 8 -129 16 -252 19 -272\r
2 -21 3 -38 1 -38 -1 0 -31 42 -66 93 -34 50 -125 178 -201 284 -76 105 -138\r
201 -138 213 0 11 9 44 19 73 44 120 196 521 239 632 l47 120 7 -60 c4 -33 19\r
-229 33 -435z m4658 444 c51 -14 96 -30 100 -34 17 -16 -250 -114 -343 -126\r
-50 -7 -132 19 -114 35 9 9 256 151 262 151 2 0 45 -12 95 -26z m763 -1 c36\r
-5 43 -8 29 -14 -14 -5 -7 -8 25 -8 72 -2 76 -11 22 -63 -63 -60 -243 -211\r
-247 -206 -13 15 -63 127 -58 132 4 3 1 6 -5 6 -24 0 -10 19 46 61 31 24 64\r
42 72 41 11 -2 12 0 3 5 -7 5 -10 18 -6 31 6 24 30 27 119 15z m710 -146 c-37\r
-183 -69 -317 -76 -317 -3 0 -23 30 -45 67 l-39 66 50 96 c111 214 128 243\r
132 232 2 -6 -8 -71 -22 -144z m-1326 34 c0 -37 -3 -89 -6 -115 -8 -55 2 -55\r
-139 -7 -49 17 -116 38 -148 47 l-59 16 99 33 c54 18 130 47 168 64 39 17 73\r
30 78 31 4 0 7 -31 7 -69z m170 34 c25 -7 72 -21 105 -30 l60 -17 -70 -28 -70\r
-28 -45 38 c-25 21 -58 52 -74 69 l-29 30 39 -10 c21 -6 59 -16 84 -24z m-51\r
-53 l64 -58 -84 -40 -84 -41 -3 56 c-2 31 -1 80 3 108 8 63 8 63 104 -25z\r
m1238 -19 c-4 -77 -11 -110 -31 -153 -15 -30 -25 -44 -22 -30 3 14 15 82 27\r
153 12 70 24 127 27 127 3 0 2 -44 -1 -97z m-262 -74 l56 -110 -23 -36 c-41\r
-68 -192 -243 -209 -243 -3 0 -18 33 -32 73 l-26 74 45 104 c81 185 73 171 68\r
119 -3 -38 -2 -35 11 19 13 57 37 111 50 111 3 0 30 -50 60 -111z m-129 25\r
c-19 -38 -53 -109 -76 -158 -22 -49 -42 -87 -44 -85 -2 2 -13 26 -25 53 l-21\r
48 38 37 c20 20 46 42 57 48 17 11 15 11 -10 2 -16 -6 -40 -20 -52 -31 -41\r
-38 -24 -9 25 43 48 53 132 122 139 116 2 -3 -12 -35 -31 -73z m-4936 26 c159\r
-16 514 -61 518 -65 5 -5 -223 -402 -244 -424 -3 -4 -418 400 -465 454 -14 17\r
-29 39 -33 51 -6 20 -5 20 56 8 35 -8 110 -18 168 -24z m2444 -203 c133 -94\r
261 -184 286 -201 l45 -31 -65 -7 c-36 -4 -204 -19 -375 -33 -170 -14 -355\r
-29 -410 -35 -55 -5 -123 -10 -152 -10 l-52 0 165 253 c91 138 174 264 185\r
279 l19 28 57 -36 c31 -20 164 -113 297 -207z m1916 153 c22 -44 40 -82 40\r
-85 0 -7 -277 -4 -335 4 l-50 7 38 23 c53 33 46 36 -13 5 -28 -15 -53 -25 -55\r
-22 -3 2 21 16 53 30 31 14 102 47 157 72 55 25 106 46 112 46 7 0 31 -36 53\r
-80z m-844 29 c16 -17 87 -76 157 -131 71 -56 125 -104 120 -108 -4 -5 -60 -2\r
-123 5 -63 8 -158 17 -211 21 -53 3 -102 10 -108 14 -8 4 9 42 55 118 37 62\r
70 112 73 112 4 0 20 -14 37 -31z m84 1 c16 -14 18 -20 9 -20 -8 0 -20 5 -27\r
12 -9 9 -12 9 -12 0 0 -6 12 -19 28 -29 15 -9 50 -36 79 -60 67 -56 79 -55 23\r
3 l-45 45 60 -26 c33 -15 75 -38 93 -52 28 -21 32 -30 27 -51 -5 -20 -4 -23 7\r
-15 7 6 22 7 33 3 18 -7 18 -9 -8 -19 -37 -15 -33 -16 -81 24 -24 19 -47 35\r
-51 35 -14 0 -140 98 -172 134 -30 35 -30 36 -9 36 13 0 33 -9 46 -20z m170\r
-46 c190 -76 224 -94 202 -108 -5 -3 -60 21 -124 53 -63 32 -137 66 -164 75\r
-27 9 -56 21 -64 26 -28 20 42 -2 150 -46z m-3123 -142 c56 -75 130 -172 163\r
-214 l61 -78 -290 0 c-160 0 -291 3 -291 7 0 4 17 34 38 67 55 86 134 220 173\r
293 19 35 36 62 39 62 3 0 51 -62 107 -137z m3121 109 c64 -33 103 -60 86 -61\r
-6 0 -22 8 -35 19 -13 10 -46 30 -74 44 -27 14 -46 26 -42 27 4 0 33 -13 65\r
-29z m-3067 -32 c68 -28 230 -93 359 -146 355 -144 534 -219 566 -237 28 -16\r
25 -17 -81 -12 -60 3 -230 9 -378 12 l-267 7 -30 33 c-42 49 -300 382 -300\r
388 0 9 -3 10 131 -45z m4620 -45 c-32 -111 -103 -303 -96 -259 3 22 8 65 11\r
95 6 59 22 110 34 110 4 0 20 29 36 65 15 35 29 63 31 61 2 -1 -6 -34 -16 -72z\r
m-5497 -28 c30 -103 47 -178 43 -183 -3 -3 -10 10 -15 29 -6 18 -28 82 -50\r
141 -38 101 -39 107 -16 86 13 -12 30 -45 38 -73z m4879 67 c-7 -2 -19 -2 -25\r
0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m-770 -39 c31 -17 31 -17 8 -25 -39 -15\r
-91 6 -76 31 9 14 32 12 68 -6z m744 -15 c-43 -23 -57 -20 -32 5 9 9 28 16 43\r
16 26 -1 25 -2 -11 -21z m-4692 -94 c44 -45 115 -114 159 -153 43 -40 74 -72\r
70 -72 -5 0 -85 75 -179 166 -93 91 -161 160 -150 153 11 -7 56 -49 100 -94z\r
m4085 96 c3 -1 -2 -5 -9 -10 -8 -5 -22 -6 -30 -2 -9 5 -23 6 -31 4 -11 -3 -12\r
-2 -3 4 10 7 54 10 73 4z m440 5 c0 -2 -9 -6 -20 -9 -11 -3 -20 -1 -20 4 0 5\r
9 9 20 9 11 0 20 -2 20 -4z m60 -1 c0 -2 -13 -11 -30 -20 -18 -9 -30 -11 -30\r
-5 0 6 10 15 23 20 26 10 37 12 37 5z m60 -4 c0 -15 -23 -29 -69 -41 -61 -16\r
-61 -6 1 24 58 28 68 30 68 17z m543 -51 c20 -33 37 -62 37 -65 0 -3 -25 -64\r
-55 -137 -31 -72 -54 -133 -52 -135 3 -2 28 52 57 119 56 131 57 134 65 126\r
13 -13 -90 -448 -107 -448 -4 0 -18 15 -32 33 -25 33 -26 53 -1 122 5 16 5 17\r
-4 5 -13 -19 -14 -27 4 137 21 200 36 303 44 303 3 0 23 -27 44 -60z m-734 46\r
c-2 -1 -20 -8 -39 -14 -32 -11 -33 -10 -16 3 16 12 69 23 55 11z m-4527 -73\r
c30 -38 71 -93 91 -123 45 -68 101 -131 93 -107 -4 11 -2 16 5 12 6 -4 8 -14\r
5 -22 -4 -9 -1 -22 5 -29 6 -8 8 -14 5 -14 -11 0 -189 126 -208 147 -9 10 -24\r
53 -33 96 -9 43 -19 85 -22 93 -10 27 5 13 59 -53z m4423 57 c-11 -5 -29 -8\r
-40 -8 -16 0 -15 2 5 8 34 11 60 11 35 0z m347 -27 c-17 -21 -46 -54 -66 -72\r
-36 -35 -52 -69 -18 -38 10 10 21 14 25 11 3 -3 14 7 24 22 l18 28 6 -29 7\r
-30 1 28 c1 29 55 117 71 117 5 0 19 -18 30 -40 l21 -40 -39 -58 c-22 -31 -46\r
-71 -55 -88 l-16 -32 -46 41 c-30 27 -42 44 -35 51 19 19 10 29 -9 11 -19 -17\r
-21 -16 -52 29 -18 25 -35 44 -37 41 -3 -2 1 -11 8 -20 7 -9 10 -18 7 -21 -9\r
-10 -27 34 -21 50 4 11 19 16 43 16 57 1 112 17 135 39 32 32 31 25 -2 -16z\r
m417 -28 c-11 -65 -39 -341 -39 -388 0 -21 -4 -37 -10 -37 -5 0 -43 52 -84\r
115 l-75 115 57 60 c32 33 80 89 108 124 27 35 50 63 51 62 1 0 -3 -23 -8 -51z\r
m-1129 25 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11\r
-10z m-534 -81 c116 -89 190 -156 182 -164 -6 -6 -415 18 -646 37 -78 6 -139\r
15 -135 19 5 4 103 44 218 89 116 45 219 85 230 90 35 15 42 12 151 -71z m154\r
60 c74 -6 149 -14 165 -18 l30 -8 -48 -47 c-48 -47 -97 -111 -97 -127 0 -24\r
56 -3 124 47 58 42 81 54 98 49 16 -4 19 -3 9 3 -16 12 -7 18 41 27 28 5 51 1\r
93 -16 57 -23 59 -32 14 -43 -20 -4 -36 1 -64 24 -51 41 -60 38 -11 -3 l39\r
-33 -44 -12 c-64 -17 -229 -54 -264 -59 -25 -3 -40 5 -90 48 -33 29 -96 79\r
-140 112 -110 82 -108 80 -45 73 30 -3 116 -11 190 -17z m624 12 c4 -5 3 -16\r
0 -25 -5 -14 -8 -14 -30 1 -13 8 -24 19 -24 24 0 12 47 12 54 0z m108 -11\r
c-13 -10 -23 -23 -23 -27 1 -10 -50 -24 -66 -18 -32 11 5 56 39 48 19 -4 20\r
-3 8 6 -12 8 -6 11 25 11 l40 -1 -23 -19z m138 10 c0 -14 -35 -27 -96 -35 -46\r
-7 -48 -6 -33 10 26 26 129 46 129 25z m-520 -10 c13 -8 12 -12 -4 -27 -10\r
-10 -16 -12 -12 -5 10 17 -4 15 -18 -3 -10 -13 -16 -12 -45 7 -30 19 -32 23\r
-15 29 27 11 76 10 94 -1z m144 -5 c-7 -17 -20 -20 -29 -6 -3 5 3 12 12 14 10\r
3 19 5 20 6 1 0 0 -6 -3 -14z m101 -22 l39 -26 -25 -10 c-13 -6 -37 -16 -53\r
-23 -36 -17 -44 -12 -52 32 -11 60 27 71 91 27z m-114 -29 c11 -19 19 -38 17\r
-43 -2 -5 -30 2 -62 15 -33 13 -69 24 -80 24 -20 0 -20 1 2 16 28 19 72 33 89\r
26 7 -2 22 -19 34 -38z m-221 15 c16 -13 21 -22 13 -25 -7 -3 -28 -18 -48 -34\r
-51 -40 -135 -93 -140 -88 -7 7 56 78 70 78 7 0 18 6 25 14 6 8 19 12 28 9 14\r
-4 15 -3 2 5 -8 6 -18 8 -24 5 -11 -7 1 15 22 40 19 21 21 21 52 -4z m649 -15\r
c12 -19 21 -37 21 -39 0 -3 -48 -4 -107 -3 -59 2 -96 5 -82 9 16 5 18 7 7 8\r
-38 2 -16 29 35 43 85 25 102 23 126 -18z m344 -51 c16 -49 22 -82 16 -88 -8\r
-8 -170 -46 -176 -41 -4 4 122 206 128 206 4 0 18 -35 32 -77z m-608 38 c-6\r
-5 -21 -11 -35 -15 -21 -5 -20 -3 5 9 35 17 42 18 30 6z m65 -5 c0 -19 -14\r
-23 -96 -30 -67 -5 -68 -5 -19 5 28 6 60 11 72 11 12 0 22 3 21 7 -1 14 3 21\r
12 21 6 0 10 -6 10 -14z m251 -18 c11 -21 11 -22 -4 -9 -10 7 -17 17 -17 22 0\r
15 9 10 21 -13z m-4517 -24 c5 -14 4 -15 -9 -4 -17 14 -19 20 -6 20 5 0 12 -7\r
15 -16z m4515 -10 c2 -2 -20 -14 -50 -26 -30 -12 -102 -46 -160 -74 l-107 -52\r
-34 36 c-39 41 -82 101 -77 107 2 2 36 8 74 13 61 9 343 5 354 -4z m94 -41\r
c22 -21 36 -42 32 -50 -3 -8 -5 -19 -5 -24 0 -5 -8 -9 -17 -9 -13 0 -24 18\r
-40 60 -12 33 -18 60 -15 60 4 0 25 -16 45 -37z m-4585 2 c-3 -3 -9 2 -12 12\r
-6 14 -5 15 5 6 7 -7 10 -15 7 -18z m4088 -32 l33 -52 -47 20 c-59 26 -112 58\r
-112 69 0 10 35 18 69 16 17 -1 33 -16 57 -53z m449 20 c30 -71 30 -80 -2 -87\r
-15 -3 -93 -8 -173 -12 -89 -5 -135 -10 -120 -15 23 -6 23 -7 3 -8 -27 -1 -37\r
13 -19 28 17 14 267 130 283 130 7 1 20 -16 28 -36z m-4457 -33 c51 -57 52\r
-60 28 -60 -20 0 -30 9 -47 43 -12 23 -28 50 -37 60 -8 9 -11 17 -6 17 5 0 33\r
-27 62 -60z m-91 -53 c81 -56 172 -117 201 -136 28 -18 52 -35 52 -37 0 -3\r
-30 11 -67 31 -37 20 -125 54 -195 76 -116 37 -127 43 -132 67 -12 69 -17 102\r
-12 102 2 0 71 -46 153 -103z m3986 79 c18 -13 68 -41 112 -62 73 -35 77 -38\r
50 -42 -35 -5 -487 49 -479 57 5 6 248 68 272 70 7 0 28 -10 45 -23z m-1263\r
-12 c0 -3 -96 -132 -213 -287 -290 -385 -291 -386 -299 -386 -4 -1 -62 61\r
-130 136 -68 76 -188 206 -267 291 -79 84 -141 155 -139 158 5 4 135 16 718\r
64 140 12 257 23 259 26 6 6 71 5 71 -2z m255 -8 c88 -8 257 -20 375 -26 118\r
-6 218 -12 221 -13 4 -1 -81 -87 -188 -191 l-194 -189 -217 216 c-199 199\r
-215 217 -187 217 17 0 102 -7 190 -14z m-102 -116 c131 -126 302 -308 296\r
-314 -9 -9 -922 -237 -927 -232 -2 3 66 99 153 213 87 114 199 263 249 331 49\r
67 93 122 97 122 4 0 63 -54 132 -120z m2041 -13 c44 -64 78 -118 75 -120 -2\r
-3 -78 17 -169 43 -91 26 -177 50 -192 54 -25 6 -28 11 -28 46 0 21 5 42 11\r
46 12 7 149 42 149 38 0 -1 -28 -20 -63 -42 -34 -22 -69 -47 -77 -57 -8 -10 8\r
-2 37 19 66 47 155 97 168 93 5 -2 45 -56 89 -120z m-4173 75 l96 -3 127 -158\r
c69 -87 144 -178 166 -201 22 -24 40 -44 40 -46 0 -6 -85 19 -174 51 -54 20\r
-104 34 -110 32 -20 -7 258 -100 336 -112 15 -2 46 -14 69 -26 24 -12 71 -32\r
107 -45 35 -14 186 -85 335 -159 l272 -134 -75 -2 c-41 -1 -88 -3 -105 -4 -83\r
-5 -325 133 -552 316 -35 28 -63 46 -63 41 0 -5 8 -16 19 -23 32 -24 201 -162\r
201 -165 0 -5 -135 68 -150 81 -8 7 -78 44 -155 83 -180 90 -297 157 -288 165\r
3 4 -1 7 -10 7 -19 0 -79 32 -332 175 -99 56 -193 110 -210 118 -28 16 -20 17\r
165 15 107 -1 238 -4 291 -6z m3132 -17 c105 -13 217 -26 247 -27 l55 -3 -40\r
-21 c-22 -12 -87 -36 -145 -54 -195 -59 -665 -210 -717 -230 -29 -11 -53 -17\r
-53 -12 0 9 301 307 348 345 42 34 58 34 305 2z m-2458 -1 c140 -5 226 -11\r
237 -19 19 -13 270 -283 433 -465 60 -68 100 -120 89 -117 -10 3 -104 22 -209\r
41 -104 20 -264 54 -355 76 -91 22 -214 52 -275 66 -60 14 -123 31 -139 37\r
-18 7 -72 63 -145 151 -160 195 -191 233 -191 242 0 4 75 4 168 1 92 -4 266\r
-10 387 -13z m3173 -39 l3 -37 -48 6 c-181 25 -262 40 -257 47 3 5 47 9 97 10\r
51 0 112 4 137 8 62 11 65 10 68 -34z m-4371 -2 c61 -68 132 -157 128 -161 -9\r
-10 -234 164 -243 189 -2 5 15 9 39 9 36 0 47 -5 76 -37z m-306 -183 c147\r
-424 389 -1144 387 -1150 -2 -4 -142 82 -313 192 -170 109 -416 264 -545 345\r
-129 81 -236 147 -238 148 -1 1 142 150 320 330 177 180 324 323 325 319 2 -5\r
30 -88 64 -184z m109 148 c115 -37 271 -117 348 -178 45 -36 91 -95 212 -273\r
85 -125 188 -275 228 -332 40 -58 69 -105 64 -105 -12 0 -675 616 -902 838\r
-67 66 -88 92 -70 87 14 -4 68 -21 120 -37z m4375 12 c88 -12 166 -23 173 -25\r
11 -4 19 -95 8 -95 -2 0 -46 11 -98 25 -51 13 -133 31 -183 40 -114 21 -165\r
34 -165 43 0 15 56 40 80 36 14 -2 97 -13 185 -24z m-4120 -370 c158 -151 381\r
-358 533 -495 67 -60 122 -114 122 -120 0 -10 -609 -330 -614 -323 -2 1 -37\r
107 -78 233 -64 197 -185 550 -321 940 -19 55 -38 111 -42 125 -8 24 88 -62\r
400 -360z m177 273 c93 -55 122 -82 78 -70 -13 3 -20 0 -20 -9 0 -20 -23 -18\r
-80 7 -39 17 -61 37 -105 95 -30 40 -55 76 -55 80 0 3 19 -6 43 -20 23 -14 86\r
-51 139 -83z m3670 -245 l-5 -307 -52 -6 c-59 -8 -255 18 -265 35 -5 8 -167 1\r
-571 -23 l-564 -34 -170 49 c-93 26 -190 56 -215 65 l-44 16 469 119 c326 83\r
483 118 513 116 29 -2 41 0 38 9 -6 15 21 25 339 126 504 160 520 165 526 153\r
4 -6 4 -149 1 -318z m677 264 l134 -37 -167 -8 c-93 -5 -170 -7 -172 -4 -2 2\r
-1 25 2 51 8 57 -7 57 203 -2z m-474 3 c226 -44 266 -58 249 -88 -12 -21 -218\r
-245 -226 -246 -3 -1 -11 14 -17 32 -10 29 -85 170 -157 295 l-25 43 23 -5\r
c13 -3 82 -17 153 -31z m-5417 -157 c71 -101 161 -230 201 -287 70 -103 71\r
-105 52 -125 -43 -48 -309 -354 -337 -389 l-31 -38 -6 113 c-4 62 -7 172 -7\r
243 0 72 -5 243 -11 382 -10 227 -9 283 5 283 2 0 62 -82 134 -182z m5365 -56\r
l69 -133 -94 -97 c-99 -103 -110 -113 -116 -107 -3 2 -1 131 3 286 l7 282 31\r
-49 c17 -27 62 -109 100 -182z m725 141 c12 -10 26 -34 31 -53 l11 -35 -5 34\r
c-4 29 -3 32 11 20 22 -18 10 -54 -38 -108 -22 -25 -65 -83 -95 -129 l-55 -82\r
-17 22 c-10 13 -54 75 -99 138 -45 63 -96 131 -113 150 -44 49 -21 15 109\r
-165 63 -86 112 -157 110 -158 -1 -1 -29 -26 -60 -55 -46 -42 -64 -52 -91 -52\r
l-35 0 -7 158 c-4 86 -10 171 -15 187 -6 21 -7 11 -4 -35 2 -36 6 -120 9 -187\r
l5 -122 -53 6 c-28 3 -54 7 -56 9 -7 6 42 410 53 434 11 25 12 25 181 30 94 3\r
177 7 186 8 9 1 26 -6 37 -15z m-4393 -11 c-3 -3 -11 0 -18 7 -9 10 -8 11 6 5\r
10 -3 15 -9 12 -12z m-157 -33 c18 -6 29 -15 26 -20 -8 -14 -19 -11 -45 11\r
-28 22 -24 24 19 9z m208 -30 c56 -31 113 -89 139 -139 l16 -30 -68 42 c-38\r
24 -103 68 -146 98 -63 44 -75 56 -60 62 26 10 61 1 119 -33z m3906 -56 c-6\r
-37 -16 -125 -23 -195 l-13 -128 -46 0 c-44 0 -45 1 -66 48 l-22 47 54 105\r
c61 121 113 205 120 197 3 -3 1 -36 -4 -74z m-3991 26 c26 -16 53 -36 59 -44\r
10 -12 7 -13 -20 -5 -36 10 -116 55 -125 70 -13 21 41 8 86 -21z m-1803 -454\r
l9 -380 -88 -175 c-82 -165 -239 -452 -239 -439 0 4 36 96 81 205 l80 199 29\r
230 c38 302 91 727 98 790 l6 50 8 -50 c4 -27 11 -221 16 -430z m2067 365 c41\r
-49 41 -50 16 -50 -12 0 -33 23 -60 66 -34 55 -37 62 -16 46 13 -11 40 -38 60\r
-62z m-160 -61 c63 -45 122 -90 130 -102 8 -12 15 -38 15 -59 0 -21 7 -85 16\r
-144 8 -58 14 -108 12 -110 -3 -2 -20 18 -38 44 -72 101 -196 282 -267 391\r
l-74 113 45 -26 c25 -15 98 -63 161 -107z m3770 21 c-31 -61 -60 -108 -65\r
-105 -4 3 -11 19 -15 35 -6 27 1 38 61 105 37 41 69 75 71 75 2 0 -22 -50 -52\r
-110z m571 58 c-8 -18 -23 -76 -35 -129 l-22 -97 -39 -10 c-40 -10 -50 -3 -50\r
33 0 20 143 235 156 235 2 0 -3 -15 -10 -32z m-4282 -48 c60 -34 90 -68 84\r
-95 -2 -11 -33 5 -118 66 -63 45 -119 85 -123 89 -18 17 102 -29 157 -60z\r
m193 1 c-1 -5 9 -18 23 -29 l25 -20 -27 5 c-31 6 -47 22 -53 52 -3 18 -1 20\r
15 11 11 -6 19 -14 17 -19z m628 -52 c195 -47 348 -79 547 -114 l97 -17 82\r
-72 81 -71 -170 -9 -170 -9 -309 150 c-169 83 -334 161 -365 173 -32 12 -58\r
24 -58 27 0 6 24 1 265 -58z m-525 -5 c0 -11 -22 -1 -47 21 l-28 26 38 -22\r
c20 -11 37 -23 37 -25z m-111 -11 c44 -32 132 -125 126 -131 -13 -13 -89 37\r
-146 94 -56 56 -61 64 -40 64 13 0 40 -12 60 -27z m-8 -75 c8 -16 7 -17 -15\r
-8 -50 19 -66 34 -66 64 l0 30 36 -35 c20 -18 40 -42 45 -51z m84 52 c3 -5 15\r
-15 26 -21 20 -10 20 -10 4 15 -16 24 -16 26 -1 26 9 0 19 -7 22 -15 4 -8 10\r
-13 14 -10 11 7 60 -16 60 -27 0 -5 -4 -6 -10 -3 -5 3 -7 0 -4 -8 12 -31 -28\r
-25 -85 13 -60 40 -95 73 -53 51 12 -6 24 -16 27 -21z m3369 -19 c18 -38 18\r
-39 -11 -97 l-28 -59 -87 -21 c-48 -12 -86 -18 -83 -14 3 5 -1 10 -7 13 -11 3\r
177 214 193 216 3 1 14 -16 23 -38z m-3114 14 c17 -9 30 -18 30 -21 0 -4 -59\r
23 -69 32 -10 9 13 3 39 -11z m-205 -65 c12 -19 -12 -10 -31 11 -19 22 -19 22\r
3 10 12 -6 25 -16 28 -21z m-117 -27 c62 -29 112 -69 112 -89 0 -8 -20 -81\r
-45 -162 -25 -81 -47 -151 -48 -155 -1 -5 -19 19 -38 52 -36 61 -51 126 -75\r
335 -7 58 -6 58 17 51 13 -4 48 -18 77 -32z m238 -21 c-5 -5 -66 20 -66 27 0\r
4 5 12 12 19 9 9 17 6 34 -15 12 -16 21 -29 20 -31z m69 21 c17 7 71 -27 85\r
-54 10 -17 9 -20 -2 -16 -7 3 -37 13 -67 22 -52 17 -91 44 -91 65 0 6 14 4 31\r
-5 17 -9 37 -14 44 -12z m3171 -4 c17 -35 14 -41 -32 -57 l-32 -10 22 49 c11\r
27 22 49 23 49 1 0 10 -14 19 -31z m437 0 c-3 -11 -17 -25 -30 -30 -38 -14\r
-39 -11 -8 21 34 35 45 38 38 9z m19 -11 c-7 -7 -12 -8 -12 -2 0 14 12 26 19\r
19 2 -3 -1 -11 -7 -17z m-2352 -74 l105 -29 -50 -7 c-27 -3 -83 -7 -124 -7\r
l-73 -1 -67 65 -66 65 85 -29 c47 -15 132 -41 190 -57z m-1343 58 c13 -4 19\r
-12 15 -18 -5 -8 -16 -5 -37 7 -30 19 -20 23 22 11z m3773 -7 c0 -9 -9 -15\r
-25 -15 -26 0 -34 15 -12 23 23 10 37 7 37 -8z m-3507 -64 c22 -37 18 -38 -33\r
-6 -34 22 -60 51 -60 70 0 16 77 -37 93 -64z m-378 49 c3 -5 2 -10 -4 -10 -5\r
0 -13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m104 -19 c41 -27 147 -137\r
111 -116 -89 52 -180 122 -180 137 0 15 23 8 69 -21z m254 -78 c77 -53 75 -59\r
-21 -69 -56 -6 -60 -5 -86 22 -27 28 -106 138 -106 147 0 13 154 -60 213 -100z\r
m3467 97 c0 -5 -9 -10 -21 -10 -11 0 -17 5 -14 10 3 6 13 10 21 10 8 0 14 -4\r
14 -10z m-376 -16 c11 -4 16 -18 16 -43 l-1 -36 -21 40 c-12 22 -23 34 -25 28\r
-3 -7 2 -20 11 -29 18 -17 32 -62 22 -71 -7 -8 -55 99 -49 110 5 9 26 9 47 1z\r
m-3359 -59 c28 -23 76 -58 108 -78 31 -20 57 -39 57 -42 0 -17 -132 68 -184\r
119 -67 65 -58 65 19 1z m375 9 c109 -62 111 -69 20 -64 -31 2 -82 30 -80 44\r
0 4 -7 20 -15 36 -9 17 -13 30 -10 30 3 0 42 -21 85 -46z m2235 41 c-32 -12\r
-634 -118 -740 -131 -29 -3 -77 7 -170 35 l-130 40 60 1 c33 1 258 14 500 29\r
463 30 496 32 480 26z m697 -37 c7 -24 20 -52 30 -62 13 -15 15 -23 7 -33 -17\r
-20 -32 -15 -26 8 4 15 -4 37 -24 66 -17 24 -27 48 -24 53 12 20 24 9 37 -32z\r
m118 28 c0 -8 -9 -24 -20 -37 l-19 -24 -1 38 c0 30 3 37 20 37 11 0 20 -6 20\r
-14z m360 4 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4\r
15 -10z m-5615 -68 c278 -173 948 -601 962 -615 12 -12 -26 -43 -746 -605\r
-251 -196 -283 -223 -277 -229 3 -3 29 14 58 39 29 24 154 123 278 219 392\r
305 604 471 650 509 25 20 51 40 58 44 19 11 17 -387 -2 -407 -14 -13 -318\r
-137 -829 -337 -114 -44 -212 -78 -217 -75 -5 3 -21 -2 -35 -11 l-25 -16 0\r
776 c0 427 3 776 8 776 4 0 57 -31 117 -68z m-137 -691 c-1 -412 -6 -744 -9\r
-738 -11 20 -103 271 -177 482 -39 110 -100 280 -137 378 l-66 177 38 48 c54\r
68 346 402 351 402 2 0 2 -337 0 -749z m5208 733 c-3 -9 -6 -25 -6 -35 0 -20\r
-1 -20 -32 1 l-33 22 30 -26 c31 -27 30 -42 -3 -32 -37 12 -40 70 -4 79 38 10\r
54 7 48 -9z m-3059 -270 c-3 -3 -190 -27 -304 -39 l-61 -7 8 34 c15 63 62 221\r
77 257 l15 36 135 -139 c73 -76 132 -140 130 -142z m2456 269 c-7 -3 -13 -10\r
-13 -16 -1 -15 -39 -66 -40 -52 0 6 7 21 16 33 9 13 14 25 12 28 -3 2 -13 -12\r
-24 -31 -10 -19 -27 -37 -36 -40 -10 -3 -27 -8 -38 -11 -15 -4 -25 3 -40 28\r
-11 18 -20 28 -20 23 0 -6 7 -21 16 -33 17 -25 17 -25 -56 -41 -33 -7 -47 -7\r
-52 2 -12 19 -10 24 17 45 13 11 22 21 20 24 -2 2 4 5 13 6 9 1 58 10 107 20\r
88 18 143 25 118 15z m646 -27 c22 -35 28 -76 12 -76 -5 0 -21 4 -35 10 -22 8\r
-25 14 -20 42 12 69 15 71 43 24z m215 3 c-8 -13 -24 -1 -24 18 0 13 3 13 15\r
3 8 -7 12 -16 9 -21z m-739 12 c28 -7 29 -8 8 -14 -58 -18 -62 -18 -73 3 -9\r
17 -8 20 12 19 13 -1 37 -4 53 -8z m840 0 c3 -5 1 -31 -5 -57 -13 -57 -7 -82\r
15 -64 12 10 15 10 15 -1 0 -8 -4 -20 -9 -28 -7 -10 -13 -6 -27 17 -10 17 -22\r
28 -27 25 -6 -3 -7 -1 -3 5 6 10 -30 82 -41 82 -3 0 5 -17 17 -37 l22 -38 -32\r
30 -31 30 28 22 c29 24 67 30 78 14z m-925 -28 c0 -9 -6 -13 -14 -10 -7 3 -19\r
0 -26 -6 -7 -7 -5 0 5 15 18 28 35 29 35 1z m458 15 c-3 -7 -16 -13 -31 -13\r
-20 -1 -24 2 -15 12 14 17 51 17 46 1z m522 2 c0 -6 -6 -26 -14 -45 -8 -18\r
-12 -36 -10 -39 2 -3 1 -4 -3 -1 -3 3 -12 -3 -19 -13 -16 -21 -17 -8 -3 58 8\r
39 15 50 30 50 10 0 19 -5 19 -10z m68 -9 c3 -10 0 -10 -15 -2 -14 7 -23 7\r
-31 -1 -9 -9 -12 -9 -12 -1 0 23 51 26 58 4z m-832 -2 c4 -6 8 -47 9 -90 1\r
-44 5 -82 8 -86 4 -3 7 -19 7 -35 0 -28 0 -28 -30 -13 -35 18 -36 19 -11 54\r
22 30 21 68 0 63 -9 -2 -8 3 4 16 20 22 23 39 4 23 -10 -8 -21 -3 -46 23 -18\r
19 -30 39 -27 45 9 14 73 14 82 0z m574 -24 c0 -5 -5 -3 -10 5 -5 8 -10 20\r
-10 25 0 6 5 3 10 -5 5 -8 10 -19 10 -25z m278 18 c-8 -10 -20 -32 -27 -49\r
-10 -27 -91 -118 -91 -103 0 17 34 118 46 137 12 18 18 20 34 12 16 -9 22 -7\r
26 5 3 8 11 15 17 15 5 0 3 -8 -5 -17z m-2086 -24 c59 -17 109 -36 111 -43 3\r
-7 -20 -12 -72 -13 -42 -2 -139 -5 -215 -8 l-139 -6 -44 43 -44 43 73 6 c174\r
13 219 10 330 -22z m1151 -36 c15 -58 16 -69 3 -81 -22 -22 -44 -7 -67 44\r
l-20 47 28 29 c15 15 29 28 33 28 3 0 13 -30 23 -67z m273 42 c13 -20 14 -28\r
4 -39 -6 -8 -17 -13 -24 -10 -13 5 -36 46 -36 64 0 20 40 9 56 -15z m339 -33\r
c-6 -16 -7 -16 -16 0 -7 12 -6 25 3 40 l13 23 3 -23 c2 -13 1 -31 -3 -40z\r
m-2109 -39 c-2 -2 -12 -5 -22 -7 -11 -2 -40 -14 -65 -26 l-46 -23 -128 59\r
c-104 48 -122 60 -99 62 16 1 85 6 154 10 l125 8 42 -40 c24 -22 41 -41 39\r
-43z m1059 67 c-14 -15 -21 -17 -26 -8 -11 17 -2 28 23 28 21 0 21 -1 3 -20z\r
m370 0 c-14 -16 -20 -17 -26 -8 -5 8 -2 16 9 20 30 12 35 8 17 -12z m275 -1\r
c11 -20 11 -20 -17 -4 l-28 17 25 -21 c14 -11 28 -21 31 -21 3 0 11 -11 17\r
-25 11 -24 10 -25 -7 -16 -27 15 -72 71 -65 82 9 16 33 10 44 -12z m95 12 c3\r
-5 1 -12 -4 -15 -5 -3 -11 1 -15 9 -6 16 9 21 19 6z m-805 -6 c0 -2 -10 -25\r
-22 -49 -17 -35 -25 -43 -35 -34 -7 6 -13 25 -13 44 0 28 4 33 28 37 15 2 30\r
5 35 6 4 0 7 -1 7 -4z m23 -48 c-10 -10 -26 -23 -35 -28 -16 -9 -15 -4 4 36\r
20 41 24 44 35 29 11 -15 10 -21 -4 -37z m-1799 28 c11 -8 18 -17 15 -19 -2\r
-3 -15 4 -29 14 -14 11 -20 20 -15 19 6 0 19 -6 29 -14z m2166 -5 c13 -25 -5\r
-27 -19 -2 -6 9 -11 12 -11 7 0 -6 5 -16 12 -23 9 -9 7 -16 -6 -31 -17 -19\r
-21 -19 -47 -5 -45 23 -34 57 21 67 14 2 28 5 32 6 4 0 12 -8 18 -19z m854\r
-83 c-10 -6 -33 -4 -60 3 -40 11 -44 16 -44 43 0 17 8 36 18 43 15 12 22 9 59\r
-33 36 -40 40 -49 27 -56z m-2524 37 c66 -32 120 -61 120 -65 0 -5 -8 -13 -18\r
-18 -13 -7 -31 -4 -62 10 -85 38 -313 120 -323 116 -7 -2 21 -16 61 -32 39\r
-15 72 -30 72 -32 0 -10 -68 11 -118 36 -65 32 -53 39 65 40 80 1 86 -1 203\r
-55z m1200 34 c0 -10 -2 -18 -3 -18 -2 0 -11 8 -20 18 -15 16 -15 18 3 18 13\r
0 20 -7 20 -18z m722 5 c8 -10 20 -47 26 -83 8 -53 7 -69 -4 -87 -17 -27 -34\r
-30 -34 -5 0 14 2 15 10 2 6 -9 10 -10 10 -3 0 6 -4 15 -10 18 -5 3 -10 15\r
-10 27 0 19 1 19 21 -3 12 -13 9 -7 -6 14 -20 29 -26 46 -22 70 2 18 0 40 -5\r
50 -5 9 -5 17 0 17 5 0 16 -8 24 -17z m210 -31 c2 -26 -1 -39 -9 -39 -7 0 -10\r
4 -7 8 2 5 -1 17 -7 27 -13 21 -5 57 10 48 5 -3 11 -23 13 -44z m63 27 c3 -4\r
3 -26 -1 -48 -7 -45 -34 -58 -34 -17 0 13 -3 37 -6 54 -6 28 -4 30 15 25 12\r
-3 24 -9 26 -14z m-1062 -9 c-6 -23 -26 -26 -42 -6 -10 11 -8 15 6 19 35 9 41\r
7 36 -13z m690 -4 c3 3 4 -2 3 -12 -3 -18 -26 -33 -26 -17 0 4 -3 19 -6 33 -5\r
23 -4 24 9 8 8 -10 17 -15 20 -12z m547 -10 c-14 -14 -24 0 -16 21 6 15 8 15\r
16 3 6 -9 5 -19 0 -24z m-3192 -79 c38 -37 49 -53 40 -59 -28 -17 -49 -5 -123\r
77 l-77 85 53 -27 c30 -14 78 -49 107 -76z m315 73 c54 -34 59 -43 20 -34 -29\r
6 -113 51 -113 59 0 15 53 1 93 -25z m147 -17 c5 -6 -37 3 -66 14 -14 5 -16 3\r
-11 -12 6 -15 5 -16 -7 -6 -8 7 -14 20 -13 30 1 18 3 18 46 -1 25 -11 48 -22\r
51 -25z m1412 -6 l-17 -42 -3 39 c-2 24 2 42 9 47 24 14 27 -1 11 -44z m464\r
38 c-23 -17 -36 -19 -36 -6 0 11 18 19 40 20 11 0 10 -3 -4 -14z m-496 -31 c0\r
-32 -2 -35 -16 -24 -18 16 -41 56 -26 46 6 -3 13 -2 17 4 13 21 25 9 25 -26z\r
m170 -9 c0 -14 -37 -27 -44 -17 -2 4 -2 20 1 35 5 27 6 27 24 11 11 -9 19 -23\r
19 -29z m138 33 c-3 -7 -13 -15 -24 -17 -16 -3 -17 -1 -5 13 16 19 34 21 29 4z\r
m142 -1 c0 -19 -102 -50 -112 -35 -10 17 -7 18 54 33 29 7 54 13 56 14 1 1 2\r
-5 2 -12z m778 7 c32 -9 25 -45 -11 -57 -35 -11 -41 -6 -32 32 7 33 8 34 43\r
25z m-2849 -35 l42 -31 -36 -25 -35 -24 -46 20 c-24 11 -58 29 -73 41 -16 11\r
-40 20 -53 20 -16 0 1 -13 54 -42 42 -23 75 -45 73 -49 -3 -3 -19 -9 -36 -11\r
-26 -4 -37 2 -75 41 -62 65 -59 73 31 84 87 11 111 7 154 -24z m1696 20 c7\r
-10 -21 -49 -36 -49 -4 0 -3 14 2 30 11 31 23 38 34 19z m595 7 c0 -2 3 -13 6\r
-23 6 -16 5 -16 -10 2 -16 19 -16 19 -5 -7 7 -15 15 -25 19 -23 4 2 7 -1 8 -8\r
8 -67 12 -61 -58 -68 -36 -4 -91 -7 -123 -8 l-58 -1 22 31 22 31 14 -27 15\r
-27 41 40 42 41 43 -26 c23 -14 42 -23 42 -20 0 3 -18 16 -40 28 l-40 23 22\r
23 c19 21 38 30 38 19z m289 -34 c17 -33 17 -40 5 -56 -8 -11 -16 -18 -18 -15\r
-7 7 -18 109 -12 109 3 0 14 -17 25 -38z m-1321 21 c-10 -2 -28 -2 -40 0 -13\r
2 -5 4 17 4 22 1 32 -1 23 -4z m262 -3 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10\r
-3 6 -1 10 4 10 6 0 11 -4 11 -10z m30 6 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1\r
-10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m553 -38 c-28 -41 -42 -52 -21 -15 7\r
12 14 27 14 32 1 6 2 13 3 16 0 3 7 6 15 6 10 0 7 -11 -11 -39z m86 24 l30\r
-18 -38 -38 -37 -37 -12 26 c-10 22 -9 32 5 56 10 16 18 29 20 29 1 0 16 -8\r
32 -18z m519 0 c2 -8 -3 -10 -15 -6 -10 3 -3 -4 14 -16 34 -23 35 -40 4 -40\r
-27 0 -44 26 -37 56 7 25 26 29 34 6z m192 14 c0 -3 -4 -8 -10 -11 -5 -3 -10\r
-1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-2855 -16 c3 -6 -1 -7 -9 -4 -18 7\r
-21 14 -7 14 6 0 13 -4 16 -10z m1459 -11 c5 -5 7 -11 4 -15 -7 -6 -68 23 -68\r
32 0 8 53 -5 64 -17z m435 -40 c-29 -41 -33 -42 -69 -4 -36 37 -36 36 30 53\r
27 7 38 6 47 -6 10 -12 8 -20 -8 -43z m136 18 c-9 -15 -14 -31 -11 -36 4 -5 1\r
-13 -5 -17 -8 -5 -10 -2 -5 7 4 8 -1 4 -10 -8 -23 -32 -30 -29 -54 17 -16 31\r
-18 42 -8 45 103 38 122 36 93 -8z m-606 8 c23 -10 41 -24 41 -31 0 -16 -28\r
-44 -43 -44 -9 0 -9 2 0 8 7 5 -2 17 -27 34 l-38 28 -12 -30 c-13 -31 -30 -40\r
-30 -17 0 7 7 23 16 35 19 28 -2 26 -27 -2 -18 -22 -39 -14 -39 15 0 17 6 20\r
34 18 19 -2 37 -1 40 2 10 10 43 4 85 -16z m251 10 c0 -14 -37 -35 -61 -35\r
-11 0 42 49 54 50 4 0 7 -7 7 -15z m735 -5 c-1 -10 -9 -29 -18 -44 -15 -22\r
-20 -24 -37 -14 -15 10 -17 15 -7 26 10 12 13 11 19 -9 6 -19 7 -18 3 7 -2 17\r
0 35 6 41 15 15 36 11 34 -7z m530 -20 c7 -25 7 -25 -10 -5 -13 16 -16 17 -11\r
3 3 -10 1 -20 -4 -23 -11 -7 -13 9 -4 43 7 26 18 19 29 -18z m-2852 10 c29 0\r
44 -10 102 -70 71 -74 81 -104 17 -53 -20 16 -57 41 -82 56 -50 29 -128 94\r
-93 77 12 -5 37 -10 56 -10z m880 13 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17\r
0 24 -2 18 -5z m1597 -3 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4\r
10 6 0 11 -4 11 -10z m310 7 c0 -2 -10 -12 -21 -23 -22 -19 -22 -19 -8 4 12\r
19 29 30 29 19z m-2640 -47 c25 -7 56 -14 69 -16 26 -5 105 -44 135 -67 19\r
-14 18 -15 -15 -30 -50 -22 -91 -27 -119 -14 -14 7 -59 47 -100 91 -56 58 -67\r
75 -45 63 17 -8 50 -20 75 -27z m603 24 c-2 -6 1 -15 8 -20 8 -4 10 -3 5 4 -5\r
8 2 12 21 13 l28 1 -25 9 -25 8 24 -2 c40 -3 34 -21 -15 -41 -25 -10 -47 -17\r
-49 -15 -8 9 8 56 20 56 7 0 11 -6 8 -13z m202 6 c-3 -5 -10 -10 -16 -10 -5 0\r
-9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z m79 -5 c-25 -19 -34 -19 -34 0 0\r
10 10 15 27 15 26 0 26 -1 7 -15z m138 0 c0 -8 1 -21 2 -27 1 -8 -10 -12 -29\r
-11 -26 2 -27 1 -10 -7 l20 -10 -20 3 c-11 1 -20 7 -20 12 -1 6 -6 20 -13 33\r
-12 21 -11 22 28 22 28 0 40 -4 42 -15z m288 -14 c7 -14 2 -19 -30 -27 l-38\r
-11 15 33 c17 34 36 36 53 5z m222 7 c-7 -7 -12 -8 -12 -2 0 14 12 26 19 19 2\r
-3 -1 -11 -7 -17z m1128 -4 c0 -19 -8 -28 -35 -40 -51 -21 -53 -18 -10 26 21\r
22 40 40 42 40 2 0 3 -11 3 -26z m123 16 c8 0 8 -3 0 -11 -13 -13 -43 -5 -43\r
12 0 6 7 8 16 5 9 -3 21 -6 27 -6z m-2539 -21 c31 -11 60 -18 66 -14 5 3 18 1\r
27 -5 15 -9 14 -10 -7 -5 -19 5 -21 4 -10 -4 8 -5 11 -13 8 -17 -7 -6 -38 6\r
-133 51 -46 21 -13 18 49 -6z m326 5 c0 -9 -5 -12 -12 -8 -8 5 -9 1 -4 -12 6\r
-15 5 -16 -5 -7 -10 10 -9 15 1 28 16 19 20 19 20 -1z m200 6 c0 -14 -39 -32\r
-56 -26 -8 3 -12 2 -9 -4 3 -5 -8 -16 -25 -25 -27 -14 -33 -12 -29 13 1 6 93\r
49 112 51 4 1 7 -3 7 -9z m737 -18 c-2 -26 -5 -28 -27 -22 -14 3 -26 14 -28\r
23 -4 20 18 22 37 5 10 -11 11 -10 6 5 -4 9 -3 17 4 17 5 0 9 -13 8 -28z\r
m1063 7 c-16 -29 -36 -33 -62 -14 -15 12 -17 15 -5 12 9 -4 17 -2 17 3 0 8 20\r
16 48 19 10 1 10 -4 2 -20z m-1750 -15 c0 -8 -2 -14 -4 -14 -2 0 -11 -3 -20\r
-6 -11 -4 -16 0 -16 14 0 20 18 33 33 25 4 -2 7 -11 7 -19z m883 -9 l17 -35\r
-38 0 c-21 0 -42 3 -45 6 -6 7 32 62 44 63 3 1 13 -15 22 -34z m670 21 c21\r
-16 21 -22 0 -30 -17 -7 -33 9 -33 32 0 15 10 15 33 -2z m481 -30 c-6 -21 -42\r
-55 -57 -56 -10 0 8 34 27 50 9 7 16 17 16 23 0 6 -14 -8 -32 -31 l-32 -42\r
-23 22 c-25 23 -30 48 -10 48 8 0 7 4 -3 11 -12 8 -11 9 6 4 12 -3 32 -1 45 3\r
35 13 71 -5 63 -32z m42 33 c3 -6 -3 -21 -15 -32 -11 -12 -21 -16 -21 -10 0 7\r
8 17 18 22 9 6 11 11 5 11 -15 0 -18 20 -4 20 6 0 13 -5 17 -11z m-3047 -41\r
c36 -23 79 -53 95 -66 l29 -23 -29 7 c-42 10 -195 64 -223 79 l-25 12 30 16\r
c42 23 51 21 123 -25z m1093 13 c3 -11 -8 -19 -37 -27 l-40 -12 43 1 c28 1 46\r
-4 52 -13 13 -21 12 -30 -4 -30 -18 0 -38 25 -28 35 6 7 -4 5 -42 -11 -9 -3\r
-17 6 -25 27 -6 18 -8 30 -4 26 3 -4 12 2 19 12 16 22 61 17 66 -8z m213 9\r
c-9 13 -8 13 7 2 20 -16 14 -38 -13 -45 -16 -4 -19 0 -19 30 0 34 1 35 18 16\r
9 -10 13 -12 7 -3z m430 -10 c35 -36 27 -47 -23 -32 -27 8 -38 17 -38 31 0 11\r
4 17 8 15 4 -3 8 0 8 5 0 19 15 12 45 -19z m-165 -6 c0 -17 -12 -18 -28 -2\r
-18 18 -15 27 8 21 11 -3 20 -12 20 -19z m1050 6 c0 -18 -3 -19 -20 -8 -14 9\r
-16 14 -7 20 20 13 27 9 27 -12z m-1955 0 c8 -13 -5 -13 -25 0 -13 8 -13 10 2\r
10 9 0 20 -4 23 -10z m227 -9 c-7 -4 -10 -15 -7 -23 8 -19 -13 -28 -48 -21\r
-37 7 -34 16 16 39 39 19 66 22 39 5z m374 -29 c-12 -11 -18 7 -10 30 l8 23 4\r
-23 c2 -13 1 -26 -2 -30z m1208 24 c-3 -9 -10 -16 -15 -16 -5 0 -4 9 3 20 14\r
22 21 20 12 -4z m173 2 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z\r
m206 -17 c-1 -40 -3 -42 -31 -34 -18 4 -21 10 -15 32 12 51 49 53 46 2z\r
m-1373 -22 c0 -55 2 -54 -60 -11 l-35 24 35 -30 35 -31 -33 -1 c-36 0 -48 16\r
-38 55 4 17 17 27 39 34 55 16 57 15 57 -40z m180 19 c0 -5 -12 -8 -26 -8 -17\r
0 -23 4 -18 13 4 6 -3 3 -16 -8 -21 -18 -23 -18 -17 -2 4 10 7 22 7 26 0 5 16\r
3 35 -3 19 -6 35 -14 35 -18z m917 -9 c22 -34 24 -42 12 -50 -23 -15 -42 -6\r
-63 30 -19 33 -19 34 -1 47 10 8 20 14 22 14 1 0 15 -18 30 -41z m113 26 c0\r
-1 -8 -10 -19 -19 -17 -16 -18 -16 -14 8 3 16 10 23 19 19 8 -3 14 -6 14 -8z\r
m-2035 -5 c3 -5 -1 -10 -9 -10 -8 0 -18 5 -21 10 -3 6 1 10 9 10 8 0 18 -4 21\r
-10z m139 -5 c4 -13 2 -14 -14 -5 -23 13 -26 20 -6 20 8 0 16 -7 20 -15z m126\r
5 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m260\r
-1 c0 -16 -20 -49 -30 -49 -16 0 -23 42 -9 51 19 12 39 11 39 -2z m376 -35\r
c-6 -16 -8 -16 -16 -4 -6 8 -10 24 -10 35 0 18 1 18 16 3 10 -10 14 -23 10\r
-34z m1232 24 c-7 -13 -11 -29 -9 -37 1 -7 -3 -36 -10 -63 -11 -50 -12 -50\r
-31 -30 -20 19 -20 20 14 85 18 37 37 67 41 67 4 0 2 -10 -5 -22z m-2611 -133\r
c28 -22 52 -43 52 -46 1 -4 -24 -25 -54 -48 l-55 -42 -87 27 c-78 23 -93 31\r
-135 76 -54 58 -78 103 -78 147 l0 30 153 -52 c112 -39 166 -63 204 -92z m813\r
138 c-1 -17 -29 -45 -39 -38 -15 9 -14 32 2 38 19 8 37 8 37 0z m1290 -8 c7\r
-8 9 -15 5 -15 -4 0 -3 -6 3 -12 6 -7 13 -30 17 -51 6 -29 4 -36 -6 -32 -12 5\r
-49 78 -49 97 0 4 8 5 18 2 9 -3 6 2 -8 10 -18 11 -20 15 -9 16 9 0 22 -7 29\r
-15z m235 -33 c-8 -8 -28 15 -31 35 -2 14 1 13 17 -6 11 -13 17 -26 14 -29z\r
m111 0 c-8 -7 -25 8 -37 31 -11 21 -10 21 15 -2 14 -14 24 -26 22 -29z m139\r
38 c-3 -5 -14 -10 -23 -10 -13 0 -14 -2 -4 -9 11 -7 11 -14 -3 -42 -24 -46\r
-22 -45 -50 -19 l-24 23 20 29 c11 15 25 26 30 23 5 -4 17 -1 26 4 23 13 36\r
14 28 1z m-2952 -46 c3 -33 17 -64 46 -105 23 -33 38 -59 32 -59 -5 0 -12 8\r
-15 17 -6 14 -9 15 -15 4 -7 -10 -10 -9 -14 3 -4 9 -11 16 -17 16 -6 0 -8 -4\r
-5 -10 3 -5 -1 -10 -9 -10 -14 0 -146 146 -146 161 0 10 36 17 48 10 5 -3 37\r
-41 71 -84 35 -43 65 -77 68 -74 5 6 -58 100 -94 138 -26 28 -21 37 23 38 18\r
1 22 -6 27 -45z m761 40 c22 -9 20 -24 -3 -24 -21 0 -34 13 -24 24 8 7 8 7 27\r
0z m166 -27 c0 -5 -4 -5 -10 -2 -5 3 -10 14 -10 23 0 15 2 15 10 2 5 -8 10\r
-19 10 -23z m490 21 c0 -4 -4 -8 -9 -8 -6 0 -12 4 -15 8 -3 5 1 9 9 9 8 0 15\r
-4 15 -9z m115 -10 c-3 -12 -11 -28 -19 -37 -12 -12 -18 -12 -30 -1 -25 20\r
-19 36 17 48 17 5 33 10 34 11 1 1 0 -9 -2 -21z m190 -56 c-2 -2 -13 -1 -24 3\r
-16 5 -21 15 -21 43 l0 37 24 -40 c14 -22 23 -41 21 -43z m635 66 c0 -7 -12\r
-25 -27 -40 -37 -39 -74 -37 -109 5 l-27 32 34 6 c62 11 129 10 129 -3z m35\r
-15 c-4 -16 -8 -38 -11 -51 -2 -13 -9 -20 -15 -17 -9 6 -7 22 12 73 12 31 21\r
28 14 -5z m730 -6 c5 5 3 0 -4 -10 -9 -12 -21 -15 -35 -11 -28 9 -29 9 -21 34\r
l7 22 22 -21 c12 -12 27 -18 31 -14z m-2228 17 c-3 -3 -12 -4 -19 -1 -8 3 -5\r
6 6 6 11 1 17 -2 13 -5z m82 -5 c29 -10 30 -12 14 -24 -20 -15 -47 -5 -57 20\r
-6 18 1 19 43 4z m1091 1 c0 -5 -13 -10 -29 -10 -17 0 -33 5 -36 10 -4 6 8 10\r
29 10 20 0 36 -4 36 -10z m108 3 c-10 -2 -28 -2 -40 0 -13 2 -5 4 17 4 22 1\r
32 -1 23 -4z m462 3 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21\r
21 13z m-1520 -31 c0 -8 -7 -11 -20 -8 -16 4 -18 8 -9 19 13 16 29 10 29 -11z\r
m73 5 c6 -23 -10 -37 -24 -23 -10 10 -2 43 11 43 4 0 10 -9 13 -20z m645 -7\r
c-3 -24 -8 -28 -40 -31 -32 -3 -38 0 -38 17 0 23 25 40 58 41 20 0 23 -4 20\r
-27z m127 6 c22 -11 32 -17 22 -14 -10 3 -26 1 -35 -4 -9 -4 -36 -11 -59 -15\r
-43 -6 -43 -6 -43 24 0 28 2 30 38 29 20 0 55 -9 77 -20z m467 -21 c10 -23 17\r
-42 15 -44 -1 -1 -15 0 -30 3 -19 4 -26 10 -23 20 3 8 6 26 6 39 0 36 13 29\r
32 -18z m94 27 c19 -15 19 -15 -1 -9 -18 5 -18 4 -2 -6 9 -6 21 -9 25 -6 4 2\r
9 -4 9 -15 1 -10 -7 -24 -17 -29 -15 -8 -21 -6 -30 11 -7 12 -10 29 -7 40 3\r
10 0 20 -7 23 -7 3 -7 5 0 5 5 1 19 -6 30 -14z m-2627 -74 l66 -74 -35 7 c-19\r
4 -111 25 -205 47 -165 38 -228 57 -195 58 41 2 265 32 269 37 13 13 39 -7\r
100 -75z m732 58 l24 -20 -30 17 c-39 24 -40 24 -28 24 6 0 21 -9 34 -21z\r
m284 1 c22 -10 33 -19 25 -19 -8 0 -26 6 -40 14 -33 19 -51 19 -44 0 5 -11 2\r
-13 -10 -9 -19 7 -21 20 -3 27 20 8 30 7 72 -13z m335 6 c0 -8 -4 -17 -9 -21\r
-12 -7 -24 12 -16 25 9 15 25 12 25 -4z m201 -7 c12 -24 5 -34 -32 -42 -23 -6\r
-26 -4 -26 24 0 16 3 25 7 19 5 -8 9 -7 13 4 9 22 24 20 38 -5z m729 0 c0 -13\r
-34 -11 -54 4 -16 12 -14 13 18 9 20 -2 36 -8 36 -13z m45 -17 c-9 -9 -35 8\r
-35 24 0 16 2 16 20 -1 11 -10 18 -20 15 -23z m477 16 c29 -20 30 -22 12 -35\r
-25 -18 -51 -16 -73 6 -11 11 -21 19 -23 18 -2 -1 5 6 15 16 25 22 33 22 69\r
-5z m468 -3 c-7 -8 -20 -15 -29 -15 -12 1 -11 5 8 21 26 22 41 18 21 -6z\r
m-1895 5 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z\r
m1749 4 c20 -8 21 -67 2 -83 -17 -15 -23 -6 -32 47 -7 43 -2 48 30 36z m-2409\r
-39 l40 -24 -70 1 c-69 1 -69 1 -20 8 l50 7 -50 2 c-49 2 -49 2 -25 16 32 18\r
29 19 75 -10z m275 15 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10\r
6 0 11 -4 11 -10z m199 -1 c30 -11 39 -23 24 -32 -5 -3 -28 3 -52 13 -28 11\r
-39 19 -30 23 21 8 23 8 58 -4z m231 0 c0 -5 -6 -7 -12 -3 -10 6 -10 4 0 -8\r
12 -15 7 -48 -8 -48 -23 0 -40 15 -40 35 0 22 4 25 53 34 4 0 7 -4 7 -10z m50\r
-16 c0 -19 -3 -24 -10 -17 -6 6 -8 18 -4 27 9 24 14 21 14 -10z m192 -10 c-6\r
-69 -7 -70 -26 -40 -17 25 -17 29 -2 52 23 35 33 31 28 -12z m514 -65 c-11 -3\r
-34 -6 -50 -7 -28 -1 -28 0 -22 37 3 20 6 46 6 57 0 15 10 8 44 -30 41 -47 43\r
-50 22 -57z m1014 93 c0 -5 -7 -11 -15 -15 -9 -3 -15 0 -15 9 0 8 7 15 15 15\r
8 0 15 -4 15 -9z m-2153 -27 c-7 -7 -37 7 -37 17 0 6 9 5 21 -1 11 -7 19 -14\r
16 -16z m1063 14 c0 -7 -3 -30 -6 -50 -8 -48 -17 -48 -119 2 -68 32 -75 38\r
-50 39 17 1 48 4 70 7 l40 6 -30 -27 -30 -27 32 22 c18 11 35 25 38 30 9 15\r
55 12 55 -2z m254 -22 c17 -18 18 -18 12 -2 -6 16 -3 18 26 12 40 -8 42 -10\r
28 -35 -14 -27 -33 -17 -24 12 l6 22 -23 -21 -24 -22 -37 24 c-21 13 -38 29\r
-38 34 0 17 53 0 74 -24z m86 24 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8\r
10 11 10 2 0 4 -4 4 -10z m476 -7 c25 -34 16 -46 -17 -23 -16 12 -32 20 -34\r
18 -2 -2 14 -15 35 -28 32 -20 40 -30 38 -51 -2 -30 -9 -30 -75 8 -42 24 -42\r
25 -26 49 28 44 58 54 79 27z m124 -78 c0 -6 -7 -20 -15 -31 -15 -19 -15 -19\r
-30 1 -9 11 -14 24 -11 30 15 36 16 48 3 26 -14 -24 -15 -24 -26 -3 -6 11 -11\r
33 -11 48 l0 28 45 -44 c25 -24 45 -49 45 -55z m184 60 c-14 -22 -56 -55 -69\r
-55 -13 0 -3 22 26 54 35 40 69 41 43 1z m-3491 -107 c100 -73 247 -179 327\r
-236 319 -227 350 -252 384 -305 19 -29 30 -54 25 -55 -5 -2 -40 5 -77 17\r
-189 57 -1118 299 -1366 356 l-118 28 213 110 c118 60 259 134 314 163 55 29\r
103 54 108 54 4 0 89 -59 190 -132z m32 84 c88 -22 194 -48 236 -57 85 -18 96\r
-27 186 -145 84 -110 120 -165 159 -241 21 -41 44 -82 53 -91 26 -32 1 -19\r
-77 40 -42 33 -108 81 -147 109 -286 203 -582 417 -590 426 -7 7 -5 8 5 5 8\r
-3 87 -24 175 -46z m1585 33 c0 -8 -2 -15 -4 -15 -2 0 -6 7 -10 15 -3 8 -1 15\r
4 15 6 0 10 -7 10 -15z m369 -40 l42 -55 -46 0 -45 0 0 55 c0 30 2 55 4 55 2\r
0 22 -25 45 -55z m93 47 c22 -5 14 -20 -28 -55 l-31 -26 -33 45 -32 45 53 -2\r
c30 -1 62 -4 71 -7z m-1278 -23 c30 -24 22 -48 -11 -34 -10 5 -20 9 -23 9 -3\r
1 -16 10 -30 20 -14 11 -18 16 -7 13 9 -4 17 -2 17 3 0 17 26 11 54 -11z m621\r
0 c5 -5 -5 -4 -23 2 -17 6 -32 13 -32 16 0 7 43 -8 55 -18z m429 -2 c-1 -10\r
-2 -23 -3 -30 0 -7 -7 -21 -14 -31 -11 -15 -20 -17 -48 -11 -29 7 -31 9 -14\r
16 17 6 17 8 3 8 -21 1 -21 2 -9 35 14 35 87 46 85 13z m611 12 c-3 -4 2 -9 9\r
-12 13 -5 42 -47 33 -47 -2 0 -18 15 -35 33 -21 22 -28 34 -18 34 8 0 13 -4\r
11 -8z m524 -3 c23 -13 22 -14 -40 -35 -78 -26 -89 -26 -56 -1 14 11 30 20 35\r
20 5 0 12 7 16 15 7 18 14 18 45 1z m375 -18 c5 -27 2 -37 -25 -63 -24 -23\r
-30 -25 -24 -10 4 11 12 39 18 63 12 50 22 54 31 10z m-2204 -5 c24 -14 20\r
-14 -29 2 -15 4 -21 3 -17 -3 4 -6 -2 -8 -14 -5 -28 8 -35 22 -8 16 19 -4 20\r
-3 8 7 -12 9 -10 10 10 4 14 -3 36 -13 50 -21z m1600 5 c27 -30 25 -38 -9 -38\r
-35 0 -42 8 -34 38 7 28 17 28 43 0z m332 0 c-6 -6 -15 -8 -19 -4 -4 4 -1 11\r
7 16 19 12 27 3 12 -12z m-1727 -6 c-3 -3 -11 0 -18 7 -9 10 -8 11 6 5 10 -3\r
15 -9 12 -12z m158 11 c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z\r
m63 -8 c20 -15 13 -18 -23 -9 -13 4 -23 10 -23 15 0 14 24 11 46 -6z m578 -21\r
c9 -20 15 -39 12 -41 -12 -12 -33 8 -43 41 -15 49 7 49 31 0z m364 11 c-3 -3\r
-9 2 -12 12 -6 14 -5 15 5 6 7 -7 10 -15 7 -18z m279 19 c29 -8 37 -40 9 -40\r
-20 0 -45 21 -46 39 0 8 8 9 37 1z m-1056 -27 c-10 -9 -11 -8 -5 6 3 10 9 15\r
12 12 3 -3 0 -11 -7 -18z m456 -11 c-7 -20 -24 -16 -35 8 -11 24 -10 25 14 14\r
13 -6 23 -16 21 -22z m-1082 -20 c108 -35 169 -63 115 -51 -14 2 -99 14 -190\r
25 -91 11 -178 25 -193 32 l-29 11 24 14 c38 22 148 10 273 -31z m326 20 c30\r
-14 49 -25 43 -25 -6 -1 -36 10 -65 23 -30 14 -49 25 -43 25 6 1 36 -10 65\r
-23z m631 -1 c-3 -16 -11 -25 -23 -25 -25 0 -24 15 3 34 12 9 23 16 24 16 1 0\r
-1 -11 -4 -25z m483 15 c-3 -5 -10 -10 -16 -10 -5 0 -9 5 -9 10 0 6 7 10 16\r
10 8 0 12 -4 9 -10z m570 -54 c18 -14 14 -15 -54 -14 -51 0 -69 3 -57 10 9 5\r
20 7 25 4 13 -9 23 26 11 38 -7 7 -10 5 -10 -5 0 -19 -41 -39 -78 -39 -24 0\r
-23 3 23 33 l49 34 36 -23 c19 -13 44 -30 55 -38z m-1564 42 c35 -12 49 -24\r
49 -45 0 -8 -17 -4 -50 10 -27 12 -50 28 -50 35 0 15 8 15 51 0z m338 -32 c-3\r
-3 -14 -3 -26 0 -15 4 -19 11 -15 26 5 20 5 20 25 -1 12 -11 19 -23 16 -25z\r
m1091 40 c0 -7 -78 -55 -96 -58 -41 -7 -17 26 31 43 53 18 65 21 65 15z m-870\r
-32 c0 -8 -4 -14 -10 -14 -5 0 -10 9 -10 21 0 11 5 17 10 14 6 -3 10 -13 10\r
-21z m1270 10 c0 -8 -4 -12 -10 -9 -5 3 -10 1 -10 -4 0 -6 -5 -11 -12 -11 -6\r
0 -3 9 7 20 22 24 25 25 25 4z m-1130 -4 c11 -7 5 -10 -22 -10 -21 0 -38 5\r
-38 10 0 13 40 13 60 0z m358 -2 c-6 -18 -43 -22 -56 -5 -9 10 -4 13 24 15 26\r
2 35 -1 32 -10z m-889 -24 l11 -26 -30 22 c-35 25 -37 30 -12 30 11 0 24 -12\r
31 -26z m917 -2 c-22 -5 -30 3 -21 18 5 8 11 7 22 -2 15 -12 14 -13 -1 -16z\r
m134 18 c0 -12 -17 -12 -45 0 -17 7 -15 9 13 9 17 1 32 -3 32 -9z m-1714 -40\r
c88 -10 201 -30 251 -44 50 -13 93 -23 95 -23 2 1 -12 -12 -32 -30 -69 -62\r
-64 -62 -217 1 -76 32 -176 71 -223 87 -85 30 -134 57 -69 39 19 -6 106 -19\r
195 -30z m222 5 c35 -14 89 -29 120 -33 32 -4 50 -10 42 -13 -24 -10 -161 27\r
-210 56 -50 30 -44 29 48 -10z m512 -12 c0 -22 -32 -11 -41 14 -7 21 -6 21 16\r
11 14 -6 25 -18 25 -25z m101 23 c9 0 15 -6 12 -13 -3 -7 -10 -10 -17 -6 -6 4\r
-17 8 -25 10 -7 1 -19 7 -25 13 -8 9 -5 10 14 4 14 -4 32 -8 41 -8z m544 0\r
c-19 -14 -45 -11 -45 5 0 5 14 9 32 9 30 0 30 -1 13 -14z m51 -20 c-6 -23 -9\r
-24 -31 -14 l-25 11 27 18 c32 21 38 19 29 -15z m101 11 c-6 -19 -25 -19 -36\r
1 -9 17 -7 18 15 14 14 -2 23 -9 21 -15z m253 13 c0 -5 -4 -10 -9 -10 -6 0\r
-13 5 -16 10 -3 6 1 10 9 10 9 0 16 -4 16 -10z m-2046 -30 c3 -16 9 -43 12\r
-60 6 -35 -4 -38 -57 -16 -19 7 -42 16 -53 20 -15 5 -11 12 30 46 27 22 52 40\r
56 40 3 0 9 -13 12 -30z m235 -154 c14 -14 22 -26 18 -26 -11 0 -212 72 -218\r
79 -4 3 -9 34 -13 69 l-6 63 98 -80 c53 -43 108 -91 121 -105z m662 165 l24\r
-20 -30 4 c-16 2 -33 4 -37 4 -5 1 -8 8 -8 16 0 21 23 19 51 -4z m622 9 c-2\r
-3 14 -9 37 -15 l42 -10 -30 -22 -30 -22 -64 21 c-34 12 -69 28 -76 37 -9 10\r
-11 11 -6 2 5 -11 3 -13 -10 -8 -10 4 -23 7 -29 8 -7 1 -1 5 13 9 26 9 162 9\r
153 0z m-4570 -320 c109 -304 196 -544 241 -663 14 -37 26 -75 26 -83 0 -9\r
-46 -68 -102 -133 -57 -64 -173 -200 -260 -301 -384 -454 -460 -541 -464 -538\r
-2 3 1 20 7 39 5 19 43 194 84 389 79 377 168 793 264 1235 33 149 62 290 66\r
315 9 54 15 67 25 49 5 -8 55 -147 113 -309z m2668 298 c26 -29 131 -189 127\r
-194 -4 -3 -168 203 -168 211 0 12 22 3 41 -17z m1179 12 c8 -5 11 -10 5 -10\r
-5 0 -17 5 -25 10 -8 5 -10 10 -5 10 6 0 17 -5 25 -10z m453 -10 c-6 -24 -12\r
-24 -38 -3 -16 13 -17 15 -2 10 9 -4 17 -2 17 3 0 6 6 10 14 10 9 0 12 -7 9\r
-20z m76 -39 c39 -55 39 -64 -1 -56 -58 12 -68 16 -68 31 0 18 4 18 42 -2 16\r
-9 28 -11 24 -6 -3 5 -19 15 -35 22 -27 11 -29 14 -19 42 11 32 12 32 57 -31z\r
m1 40 c13 -25 13 -34 0 -26 -16 10 -32 45 -21 45 6 0 15 -9 21 -19z m410 -6\r
c22 -23 22 -25 4 -25 -29 0 -45 15 -38 33 8 21 6 22 34 -8z m103 19 c9 -10\r
-14 -64 -28 -64 -23 0 -28 20 -11 45 16 25 27 30 39 19z m-2122 -91 c30 -42\r
53 -82 51 -89 -2 -8 3 -11 11 -8 18 6 59 -44 154 -187 97 -144 154 -239 145\r
-239 -4 0 -14 11 -22 24 -8 13 -51 68 -95 122 -44 54 -99 122 -123 152 -24 29\r
-46 51 -49 49 -2 -3 53 -76 123 -164 129 -159 129 -164 9 -68 -43 35 -149 212\r
-141 236 6 16 -11 49 -75 145 -62 94 -73 115 -56 108 7 -2 38 -39 68 -81z\r
m2191 62 c1 -12 -50 -50 -57 -43 -3 2 0 19 6 36 9 25 14 29 31 23 10 -4 20\r
-11 20 -16z m98 9 c0 -8 -5 -12 -10 -9 -6 4 -8 11 -5 16 9 14 15 11 15 -7z\r
m196 3 c2 -2 -3 -14 -13 -26 l-18 -22 -42 23 c-24 13 -43 26 -43 31 0 7 108 3\r
116 -6z m-2352 -57 c7 -7 -1 -22 -26 -47 -21 -20 -39 -35 -41 -32 -34 42 -97\r
129 -97 132 0 8 153 -42 164 -53z m346 26 c30 -13 106 -45 169 -72 l114 -49\r
-72 -22 c-93 -29 -107 -24 -226 91 -95 92 -94 96 15 52z m860 24 c8 -5 11 -10\r
5 -11 -5 0 -20 -2 -32 -5 -17 -3 -21 0 -17 11 7 17 22 19 44 5z m136 -1 c3 -6\r
2 -15 -3 -20 -5 -5 -14 0 -21 11 -10 17 -10 20 2 20 8 0 18 -5 22 -11z m210\r
-2 c6 -8 44 -88 44 -92 0 -4 -15 -5 -32 -3 -34 3 -48 22 -62 82 -7 27 -6 28\r
21 21 15 -3 29 -7 29 -8z m649 3 c22 -8 25 -13 15 -24 -10 -13 -14 -12 -31 5\r
-30 30 -26 35 16 19z m325 -7 c0 -9 -18 -13 -57 -13 -41 0 -54 3 -43 10 27 17\r
0 11 -40 -10 -50 -26 -54 -25 -34 5 15 24 21 25 95 22 55 -1 79 -6 79 -14z\r
m-700 -35 c0 -5 -7 -22 -15 -38 -12 -24 -23 -29 -67 -35 -29 -3 -73 -9 -98\r
-12 l-45 -5 40 35 c48 44 58 45 84 11 12 -15 21 -23 21 -18 0 4 -10 18 -22 31\r
l-22 24 29 23 c28 23 31 23 62 8 18 -9 33 -20 33 -24z m-4936 -263 c-35 -160\r
-78 -353 -94 -430 -16 -77 -56 -264 -89 -415 -32 -151 -80 -378 -105 -505 -25\r
-126 -51 -243 -56 -260 -6 -20 -8 165 -4 549 l6 579 64 131 c34 72 100 199\r
144 281 45 83 106 199 137 258 30 59 57 107 58 105 2 -2 -26 -134 -61 -293z\r
m4186 285 c0 -5 -7 -7 -15 -4 -8 4 -15 8 -15 10 0 2 7 4 15 4 8 0 15 -4 15\r
-10z m24 -5 c3 -8 1 -15 -4 -15 -6 0 -10 7 -10 15 0 8 2 15 4 15 2 0 6 -7 10\r
-15z m284 -8 c4 -19 -6 -21 -27 -8 -16 10 -5 34 12 28 7 -2 13 -11 15 -20z\r
m251 2 c44 -13 44 -18 2 -48 l-28 -20 -22 46 c-16 34 -18 44 -8 40 8 -3 33\r
-11 56 -18z m476 11 c-3 -5 -12 -10 -18 -10 -7 0 -6 4 3 10 19 12 23 12 15 0z\r
m-855 -31 c0 -16 -3 -29 -7 -27 -68 32 -77 43 -45 51 43 12 52 8 52 -24z\r
m-415 11 c3 -5 -1 -10 -10 -10 -9 0 -13 5 -10 10 3 6 8 10 10 10 2 0 7 -4 10\r
-10z m456 -1 c11 -6 18 -17 15 -24 -3 -9 4 -15 17 -18 12 -2 3 -5 -20 -6 -41\r
-1 -43 0 -43 29 0 33 2 35 31 19z m844 2 c-12 -10 -102 -25 -92 -15 4 4 26 11\r
50 15 23 3 44 7 47 8 2 0 0 -3 -5 -8z m95 -12 c0 -6 -4 -7 -10 -4 -5 3 -10 11\r
-10 16 0 6 5 7 10 4 6 -3 10 -11 10 -16z m59 -17 c-12 -2 -26 2 -30 10 -16 25\r
-9 29 22 11 29 -17 29 -18 8 -21z m218 31 c-4 -3 -37 -6 -75 -6 -54 1 -60 0\r
-32 -7 32 -7 31 -7 -20 -9 -52 -1 -54 0 -30 13 25 14 170 22 157 9z m-1627\r
-14 c0 -5 4 -7 10 -4 6 3 7 -1 4 -9 -5 -12 -11 -13 -25 -5 -23 12 -25 29 -4\r
29 8 0 15 -5 15 -11z m995 -9 c6 -10 -43 -50 -61 -50 -11 0 -10 7 2 34 12 25\r
21 32 35 29 11 -3 22 -9 24 -13z m-1715 -50 c4 -6 12 -48 19 -93 6 -45 18\r
-116 26 -157 24 -118 34 -218 21 -197 -66 109 -171 267 -218 329 -32 42 -58\r
80 -58 83 0 4 17 26 38 50 l37 43 64 -23 c35 -13 67 -29 71 -35z m2025 46 c7\r
3 16 0 20 -6 5 -8 -1 -11 -16 -9 -13 2 -30 0 -36 -4 -15 -9 -16 -6 -7 18 4 11\r
10 13 17 6 5 -5 15 -7 22 -5z m-1364 -15 c21 -17 22 -21 9 -34 -9 -8 -46 -17\r
-90 -21 -80 -7 -80 -6 -11 43 51 36 61 38 92 12z m146 13 c-3 -3 -12 -4 -19\r
-1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m1167 -9 c-4 -8 -14 -15 -24 -15 -9 0 -39\r
-3 -66 -6 -58 -8 -52 6 9 23 62 17 88 16 81 -2z m-224 -5 c0 -5 -2 -10 -4 -10\r
-2 0 -12 -3 -22 -7 -16 -6 -17 -5 -4 10 17 19 30 22 30 7z m-819 -25 l64 -25\r
-45 5 c-25 4 -70 7 -100 9 -106 4 -142 36 -41 36 39 0 80 -8 122 -25z m-221 5\r
c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m609\r
-21 c11 -6 1 -8 -34 -3 -27 3 -54 11 -60 16 -13 13 71 2 94 -13z m-1184 -29\r
c50 -19 102 -42 117 -52 30 -21 42 -23 32 -6 -4 7 -3 8 4 4 15 -9 6 -29 -38\r
-96 -20 -30 -63 -99 -94 -153 -32 -54 -59 -97 -61 -95 -2 2 -18 89 -35 193\r
-17 105 -33 203 -36 219 -5 22 -3 28 7 24 8 -3 55 -20 104 -38z m610 31 c3 -6\r
-3 -9 -14 -8 -11 0 -17 5 -15 9 7 11 22 10 29 -1z m670 -1 c-3 -5 -12 -10 -20\r
-10 -8 0 -17 5 -20 10 -4 6 5 10 20 10 15 0 24 -4 20 -10z m-605 -50 c27 -24\r
30 -30 15 -30 -28 0 -135 31 -135 40 0 33 77 26 120 -10z m108 2 c36 -16 33\r
-26 -10 -36 -21 -5 -35 1 -68 29 l-43 36 44 -7 c24 -4 59 -13 77 -22z m71 22\r
c40 -8 40 -20 0 -28 -31 -6 -59 6 -59 25 0 11 16 11 59 3z m-405 -46 c-16 -18\r
-32 -37 -35 -41 -10 -13 -49 2 -49 19 0 11 -10 14 -32 13 -18 -2 -53 -1 -78 0\r
l-45 3 45 9 c25 5 81 13 125 18 44 4 84 9 89 10 6 0 -3 -14 -20 -31z m79 25\r
c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m452 -33 c8 -16 15 -31\r
15 -35 0 -3 -27 -5 -59 -5 -42 0 -65 5 -82 18 l-22 19 59 16 c32 8 62 15 66\r
16 4 1 14 -12 23 -29z m105 15 c30 -7 45 -14 32 -14 -13 -1 -42 -10 -64 -21\r
-23 -11 -42 -19 -43 -17 -6 13 -25 59 -25 62 0 9 44 4 100 -10z m488 -152 c-9\r
-93 -17 -197 -18 -233 -1 -75 -14 -64 -24 20 -3 30 -13 112 -21 181 -17 139\r
-12 173 27 189 55 22 55 25 36 -157z m-3174 35 c94 -67 279 -196 411 -286 282\r
-194 539 -379 543 -393 2 -5 -25 -48 -60 -96 -36 -49 -108 -152 -162 -231\r
l-98 -144 -171 179 c-94 98 -278 287 -410 419 -219 221 -238 243 -228 263 8\r
14 8 21 1 21 -6 0 -10 67 -10 195 0 107 3 195 6 195 4 0 84 -55 178 -122z\r
m2136 93 c0 -38 -10 -44 -65 -36 l-44 7 21 29 c16 22 30 29 55 29 30 0 33 -3\r
33 -29z m171 1 c3 5 11 3 17 -5 9 -10 0 -16 -48 -26 -56 -13 -130 -9 -130 7 0\r
4 3 16 6 28 5 21 6 21 77 4 41 -10 75 -13 78 -8z m-1816 -141 c509 -134 867\r
-230 893 -241 20 -9 62 -64 62 -82 0 -3 -33 -26 -72 -51 -74 -45 -317 -193\r
-375 -228 l-31 -19 -99 73 c-110 82 -386 276 -508 357 -68 45 -407 286 -470\r
333 -24 18 87 -8 600 -142z m2327 137 c-7 -7 -12 -8 -12 -2 0 14 12 26 19 19\r
2 -3 -1 -11 -7 -17z m218 2 c-20 -16 -177 -80 -196 -80 -2 0 -4 4 -4 10 0 5\r
37 21 83 35 45 14 93 32 107 40 35 20 39 18 10 -5z m-252 -12 c-14 -22 -155\r
-128 -169 -128 -4 0 -9 14 -11 32 -7 43 23 69 109 96 87 26 88 26 71 0z m151\r
7 c-20 -7 -50 -20 -68 -30 -32 -16 -33 -16 -29 7 2 17 9 22 26 21 12 -2 22 2\r
22 7 0 6 19 10 43 9 l42 0 -36 -14z m-1053 -30 c38 -10 74 -22 81 -29 7 -6 37\r
-63 68 -126 47 -94 52 -111 31 -91 -14 13 -24 28 -23 34 1 6 -3 11 -9 12 -15\r
0 -244 205 -244 218 0 5 6 7 14 4 7 -3 45 -13 82 -22z m54 10 c11 -13 8 -13\r
-21 -3 -44 15 -48 18 -17 18 14 0 31 -7 38 -15z m514 0 c19 -14 18 -15 -11\r
-15 -37 0 -63 9 -63 21 0 14 53 10 74 -6z m639 -67 c4 -46 16 -146 27 -223 28\r
-201 30 -190 -42 -272 -163 -184 -338 -384 -382 -436 -26 -32 -51 -56 -53 -53\r
-3 3 4 36 15 73 11 37 46 165 77 283 86 329 83 320 190 485 138 212 147 225\r
155 225 4 0 10 -37 13 -82z m-717 57 c18 -13 17 -14 -18 -15 -37 0 -51 13 -25\r
23 19 8 22 8 43 -8z m643 -22 c-56 -93 -164 -260 -182 -283 l-20 -25 7 117 c3\r
64 9 123 12 132 3 8 43 29 87 46 45 17 89 35 97 40 23 14 23 13 -1 -27z m-981\r
-223 c52 -53 106 -129 98 -137 -5 -6 -383 12 -503 23 -35 4 -63 11 -63 16 0 9\r
80 149 158 276 l44 72 111 -102 c61 -57 131 -123 155 -148z m786 217 c-6 -22\r
-31 -47 -46 -47 -9 0 8 48 24 67 15 18 30 5 22 -20z m-814 14 c0 -18 -18 -21\r
-30 -6 -10 13 -9 15 9 15 11 0 21 -4 21 -9z m580 1 c0 -5 -9 -17 -19 -26 -18\r
-17 -21 -17 -47 1 l-28 18 29 6 c45 10 65 10 65 1z m-475 -8 c18 -5 20 -12 17\r
-84 -2 -44 -5 -80 -7 -80 -1 0 -18 6 -37 14 -26 11 -37 25 -51 63 -9 26 -17\r
58 -17 71 0 19 5 22 38 22 20 0 46 -3 57 -6z m70 -10 l-30 -14 30 7 c17 5 74\r
7 127 7 92 -2 101 -4 149 -34 41 -27 53 -31 59 -19 5 7 12 10 16 7 3 -4 -15\r
-22 -42 -40 -26 -18 -74 -55 -107 -82 l-59 -49 -92 30 c-88 29 -91 31 -89 59\r
1 16 2 55 4 87 3 57 3 57 33 57 l31 -1 -30 -15z m325 -9 c13 -14 18 -25 12\r
-25 -19 0 -27 4 -24 13 1 4 -6 7 -16 7 -10 0 -27 7 -38 15 -18 14 -17 14 12\r
15 20 0 39 -9 54 -25z m246 -29 c-10 -16 -31 -28 -63 -34 -26 -6 -49 -9 -51\r
-8 -1 2 26 22 60 44 64 42 83 41 54 -2z m-168 -42 c-2 -2 -13 -1 -25 2 l-21 6\r
21 25 22 25 3 -27 c2 -15 2 -28 0 -31z m221 -69 c-4 -55 -8 -115 -9 -134 l0\r
-33 -45 58 c-25 31 -45 60 -45 64 0 3 9 25 20 48 11 22 20 46 20 52 0 9 61 53\r
66 47 1 -1 -2 -47 -7 -102z m-91 21 c-12 -25 -25 -46 -28 -46 -11 0 -64 60\r
-58 66 7 6 101 32 106 29 2 -2 -7 -23 -20 -49z m-160 35 c10 -6 3 -26 -29 -87\r
-23 -43 -43 -80 -45 -82 -3 -5 -118 29 -127 38 -9 8 159 140 178 140 6 0 16\r
-4 23 -9z m96 -70 l29 -30 -18 -48 c-10 -26 -19 -49 -20 -51 -6 -7 -135 22\r
-135 30 0 13 40 88 63 120 23 31 35 28 81 -21z m-550 -1 c22 -8 24 -13 19 -47\r
-6 -44 -17 -60 -28 -42 -5 8 -4 10 3 5 16 -10 15 -5 -8 48 -10 25 -17 46 -15\r
46 2 0 15 -4 29 -10z m125 -35 c45 -14 81 -29 81 -33 -1 -10 -125 -102 -138\r
-102 -15 0 -32 57 -32 111 0 27 2 49 4 49 3 0 41 -11 85 -25z m-766 -84 c32\r
-24 55 -46 53 -48 -3 -3 -23 -2 -46 2 -35 6 -46 14 -71 53 -16 25 -29 50 -29\r
55 0 9 5 5 93 -62z m1280 20 c20 -26 37 -50 37 -53 0 -4 -110 12 -117 17 -5 3\r
32 85 37 85 3 0 23 -22 43 -49z m-329 2 c34 -9 62 -17 64 -18 1 -1 -5 -18 -13\r
-38 l-15 -37 -132 0 c-72 0 -129 2 -126 5 16 17 144 104 152 105 5 0 37 -7 70\r
-17z m159 -34 c59 -12 64 -17 47 -50 -9 -16 -22 -19 -80 -19 -76 0 -81 5 -58\r
55 13 29 15 29 91 14z m151 -31 c49 -9 55 -13 43 -25 -9 -10 -32 -13 -74 -11\r
-58 3 -60 4 -52 26 10 26 8 25 83 10z m-1233 -41 c-21 -21 -21 -21 -36 -2 -21\r
29 -19 31 21 27 l36 -4 -21 -21z m-1687 -2 c4 -14 2 -222 -4 -462 -5 -241 -12\r
-611 -16 -823 -3 -212 -8 -396 -9 -410 -2 -14 -3 -85 -4 -159 l-1 -135 -33 55\r
c-18 30 -152 230 -298 444 -146 215 -334 491 -418 615 -83 124 -190 280 -237\r
348 l-85 123 43 18 c24 10 123 49 221 87 98 38 321 126 495 196 174 69 322\r
127 328 127 7 1 15 -10 18 -24z m2148 9 l187 -7 5 -61 c3 -34 8 -110 11 -171\r
3 -60 10 -186 16 -278 6 -92 9 -170 6 -173 -2 -3 -49 51 -103 118 -146 183\r
-287 351 -384 458 -133 148 -131 134 -20 127 52 -4 179 -10 282 -13z m-369\r
-67 c19 -41 52 -119 72 -173 20 -54 40 -103 43 -109 18 -34 -25 26 -209 287\r
l-19 26 33 21 c17 11 35 21 38 21 4 0 22 -33 42 -73z m127 -92 c49 -54 181\r
-212 384 -459 36 -44 65 -81 63 -82 -1 -1 -51 11 -112 26 -60 15 -123 30 -138\r
34 -21 5 -42 29 -92 106 -82 127 -96 154 -138 276 -20 56 -54 139 -77 185\r
l-42 84 49 -55 c26 -30 73 -82 103 -115z m-1607 -124 c117 -119 284 -289 371\r
-379 144 -149 157 -165 144 -182 -7 -11 -92 -131 -187 -267 -96 -136 -258\r
-367 -360 -513 -101 -146 -205 -292 -230 -325 l-46 -60 -3 175 c-2 96 4 506\r
13 910 8 404 15 778 15 829 l0 95 34 -33 c19 -19 131 -131 249 -250z m2305\r
186 c-16 -45 -38 -103 -47 -130 l-16 -47 -53 92 c-29 51 -63 111 -76 133 l-24\r
40 123 -3 124 -3 -31 -82z m-150 -59 l80 -143 -68 -204 c-80 -236 -74 -241\r
-90 79 -6 118 -13 259 -17 313 -4 61 -2 97 4 97 5 0 46 -64 91 -142z m340 127\r
c9 -8 -100 -249 -140 -309 l-46 -68 -26 50 c-14 28 -26 57 -26 65 0 13 85 251\r
96 269 5 8 132 1 142 -7z m126 -17 c-17 -18 -65 -72 -109 -121 -43 -48 -80\r
-86 -82 -84 -2 2 17 53 41 113 l44 109 58 6 c33 3 63 6 68 7 6 1 -4 -13 -20\r
-30z m21 -148 c-20 -78 -49 -185 -66 -236 -16 -52 -37 -129 -45 -171 -15 -82\r
-32 -116 -64 -133 -18 -10 -22 -6 -39 32 -47 112 -47 105 -7 215 54 145 246\r
487 254 450 2 -8 -13 -78 -33 -157z m-1269 123 c86 -111 374 -541 374 -557 0\r
-3 -118 35 -262 85 -145 50 -335 116 -423 146 -88 30 -161 56 -163 58 -2 2 59\r
40 135 86 76 46 178 109 228 141 49 32 91 58 94 58 2 0 10 -8 17 -17z m1218\r
-45 c-4 -7 -15 -24 -24 -38 -34 -49 -138 -266 -160 -332 -12 -37 -25 -70 -30\r
-73 -9 -6 -30 48 -30 76 0 10 32 62 71 116 71 99 93 133 85 133 -4 0 -39 -44\r
-148 -186 -24 -32 -27 -33 -33 -14 -7 23 38 82 184 237 87 93 98 103 85 81z\r
m442 -50 c-20 -149 -116 -831 -140 -1003 -14 -93 -37 -258 -51 -365 -30 -222\r
-75 -518 -82 -540 -3 -8 -33 80 -68 195 -34 116 -76 253 -93 305 -76 234 -122\r
390 -122 410 0 12 13 40 29 63 15 23 70 118 122 211 91 164 95 170 144 193 44\r
21 29 26 -20 7 -21 -8 -26 -20 126 261 59 110 118 224 130 253 13 28 24 52 26\r
52 3 0 2 -19 -1 -42z m-73 -80 c-27 -51 -95 -177 -151 -280 l-103 -186 -63\r
-11 c-92 -16 -106 -15 -106 11 0 20 59 98 181 238 180 207 281 320 285 320 3\r
0 -17 -42 -43 -92z m-5233 -531 c-4 -334 -11 -611 -14 -614 -4 -4 -210 17\r
-459 46 -249 29 -514 60 -589 68 -76 9 -138 19 -137 22 0 3 44 44 97 90 99 86\r
550 493 905 819 110 100 201 181 202 180 2 -2 -1 -277 -5 -611z m5331 255 c0\r
-108 4 -264 9 -347 l9 -150 -41 -120 c-22 -66 -45 -129 -51 -140 -10 -18 -12\r
-15 -18 25 -4 25 -10 99 -14 165 -7 128 15 344 55 525 10 47 22 122 26 167 12\r
142 24 80 25 -125z m-782 147 l22 -50 -65 -102 c-117 -183 -120 -182 -52 22\r
33 99 63 181 67 181 3 0 16 -23 28 -51z m-1274 -334 c71 -181 167 -427 213\r
-545 46 -118 86 -224 89 -235 4 -19 -108 -243 -294 -590 -38 -71 -127 -238\r
-198 -370 -70 -132 -160 -301 -200 -375 -40 -74 -125 -236 -190 -360 -65 -124\r
-126 -240 -137 -258 -23 -37 -19 -55 4 -20 8 13 68 124 133 248 65 124 150\r
286 190 360 40 74 114 214 165 310 51 96 157 294 235 440 78 146 174 328 213\r
405 39 77 76 148 84 158 12 17 30 -12 180 -290 92 -169 178 -329 192 -354 l26\r
-46 -114 -136 c-63 -75 -212 -248 -332 -384 -119 -136 -269 -311 -334 -388\r
-192 -227 -162 -205 -345 -260 -88 -26 -191 -58 -228 -72 -37 -13 -76 -21 -86\r
-18 -11 3 -28 28 -39 58 -12 29 -78 200 -147 380 -69 181 -187 482 -261 669\r
l-135 341 30 41 c63 83 173 237 367 516 392 563 448 640 468 640 8 0 14 11 14\r
24 0 32 291 461 303 447 3 -3 64 -154 134 -336z m348 197 c219 -77 400 -142\r
403 -144 3 -3 11 -86 19 -184 l15 -179 -48 -48 -48 -48 -180 173 c-546 525\r
-604 579 -604 565 0 -3 96 -96 213 -208 116 -112 290 -279 386 -371 l173 -168\r
-27 -32 c-58 -69 -312 -328 -322 -328 -12 0 -25 30 -112 255 -38 99 -99 257\r
-136 350 -90 229 -181 465 -189 492 -6 20 -4 21 26 18 18 -2 212 -66 431 -143z\r
m-2797 -38 c-105 -741 -159 -1130 -269 -1919 l-22 -159 -67 154 c-37 85 -119\r
277 -183 425 -64 149 -129 299 -145 335 -15 36 -51 118 -79 183 -51 116 -52\r
118 -34 142 10 13 79 95 153 182 74 87 211 248 304 358 93 110 195 229 226\r
265 31 36 71 84 90 107 18 24 35 41 37 39 2 -2 -3 -53 -11 -112z m181 -86 c77\r
-112 202 -295 278 -408 354 -524 414 -613 495 -730 47 -69 89 -130 93 -137 5\r
-7 -41 -36 -130 -84 -76 -39 -165 -86 -198 -104 -353 -190 -503 -270 -695\r
-370 -124 -65 -240 -126 -258 -137 -18 -11 -35 -18 -38 -15 -3 3 4 68 15 144\r
11 76 46 318 76 538 31 220 78 555 105 745 46 319 100 727 100 750 0 29 31 -9\r
157 -192z m3543 123 c-23 -28 -43 -51 -45 -51 -2 0 12 24 31 52 19 29 34 57\r
34 62 0 6 5 5 11 -1 9 -9 1 -25 -31 -62z m64 -28 l20 -47 -23 -85 c-12 -47\r
-27 -89 -33 -92 -6 -4 -42 -10 -82 -13 -39 -4 -81 -10 -93 -13 -47 -11 -24 37\r
80 167 56 71 104 129 107 129 3 1 14 -20 24 -46z m63 -145 l21 -63 -36 -8\r
c-59 -13 -62 -9 -39 66 11 37 23 67 27 67 3 0 16 -28 27 -62z m-330 -42 c4 -4\r
-13 -23 -37 -43 -25 -20 -86 -78 -135 -129 -50 -52 -93 -94 -97 -94 -3 0 -8\r
48 -12 108 -4 59 -10 125 -13 147 -6 39 -5 40 14 23 25 -23 159 -78 189 -78\r
13 0 24 5 24 10 0 6 -16 10 -36 10 -35 0 -143 47 -176 77 -43 39 -19 40 127 8\r
80 -17 148 -35 152 -39z m443 -1 c0 -8 -7 -15 -16 -15 -14 0 -14 3 -4 15 7 8\r
14 15 16 15 2 0 4 -7 4 -15z m180 0 c0 -5 -98 -182 -171 -308 l-34 -59 -3 34\r
c-1 18 8 94 20 168 l23 134 75 17 c90 20 90 20 90 14z m-623 -48 c-3 -8 -15\r
-17 -26 -20 -21 -5 -21 -5 1 18 24 25 34 25 25 2z m432 -9 c0 -13 -9 -70 -19\r
-128 l-18 -105 -1 128 c-1 121 0 127 19 127 14 0 20 -6 19 -22z m-65 -25 c3\r
-21 6 -99 6 -173 l0 -135 -78 85 -78 84 16 80 c17 86 24 94 91 95 34 1 37 -1\r
43 -36z m-134 15 c0 -7 -8 -43 -18 -81 l-17 -67 -65 65 c-35 36 -69 65 -74 65\r
-6 0 23 -34 64 -75 l74 -74 -20 -88 -19 -88 -102 -3 c-57 -1 -103 1 -103 5 0\r
4 14 77 32 162 38 175 28 165 156 180 42 4 80 9 85 10 4 0 7 -5 7 -11z m-230\r
-15 c0 -18 -68 -322 -74 -332 -16 -26 -296 -9 -296 18 0 4 18 25 40 46 34 33\r
42 37 50 25 8 -12 10 -10 10 9 0 31 160 197 215 222 44 20 55 23 55 12z m1227\r
-228 c87 -60 219 -150 294 -201 l137 -91 -73 -182 c-40 -100 -75 -184 -77\r
-186 -2 -3 -100 131 -216 298 -117 166 -225 320 -241 342 -25 35 -27 47 -23\r
98 4 54 5 57 23 45 10 -7 89 -62 176 -123z m-857 -109 c0 -9 -187 -2 -196 7\r
-4 4 21 127 32 157 4 11 29 -10 85 -70 43 -47 79 -89 79 -94z m508 -135 c8\r
-45 5 -59 -50 -202 -33 -85 -56 -137 -53 -116 30 186 48 311 60 417 8 69 15\r
127 16 130 1 3 5 -37 10 -88 5 -51 12 -115 17 -141z m186 127 c19 -51 100\r
-259 181 -463 l147 -370 -21 -145 c-11 -80 -41 -325 -66 -545 -45 -394 -63\r
-499 -65 -385 0 30 -7 109 -15 175 -8 66 -24 208 -35 315 -12 107 -30 265 -40\r
350 -11 85 -29 241 -40 345 -11 105 -24 226 -30 270 -5 44 -19 168 -30 275\r
-11 107 -22 215 -25 239 -7 61 1 48 39 -61z m-29 -173 c13 -132 43 -397 65\r
-590 22 -192 52 -449 65 -570 14 -121 34 -292 45 -379 34 -273 30 -259 -103\r
404 -123 609 -210 1088 -204 1120 4 20 39 118 94 260 9 24 11 9 38 -245z m270\r
-111 l198 -286 -22 -51 c-12 -29 -35 -82 -49 -119 -15 -38 -29 -68 -32 -68 -4\r
1 -271 666 -333 828 l-17 47 28 -33 c16 -18 118 -161 227 -318z m-1512 272\r
c145 2 135 10 111 -96 -13 -58 -19 -70 -42 -79 -55 -21 -232 -67 -564 -145\r
-23 -5 9 32 182 212 l135 140 25 -17 c20 -13 49 -16 153 -15z m347 -32 c-5\r
-20 -12 -40 -17 -45 -5 -5 -55 -27 -111 -48 -113 -43 -110 -44 -92 39 22 101\r
8 90 124 90 l104 0 -8 -36z m213 30 c13 -5 10 -15 -16 -57 -42 -68 -257 -376\r
-267 -382 -12 -7 60 329 73 341 7 6 40 21 75 33 93 33 135 52 129 57 -3 3 -46\r
-11 -97 -30 -51 -20 -95 -36 -100 -36 -4 0 -2 18 3 40 l11 40 87 0 c48 0 94\r
-3 102 -6z m185 -504 c104 -331 134 -439 125 -453 -4 -7 -71 -84 -148 -172\r
-77 -88 -223 -256 -323 -372 -101 -117 -185 -213 -187 -213 -2 0 -2 6 0 13 2\r
6 20 89 40 182 82 382 117 544 165 757 28 122 73 322 101 443 27 121 55 240\r
61 264 l12 45 42 -135 c23 -74 73 -235 112 -359z m-182 435 c-13 -34 -173\r
-743 -251 -1110 -70 -328 -114 -527 -118 -531 -4 -4 -110 194 -252 472 l-88\r
172 136 185 c75 102 161 224 192 271 31 47 58 86 61 86 2 0 2 -10 -1 -23 -3\r
-12 -2 -34 4 -47 8 -21 10 -15 10 36 1 47 6 69 24 93 26 37 187 270 243 353\r
40 58 51 70 40 43z m-5311 -104 c237 -28 465 -53 508 -57 43 -4 75 -10 70 -15\r
-14 -13 -224 -138 -513 -304 -151 -87 -458 -263 -682 -391 -223 -129 -408\r
-234 -411 -234 -3 0 1 17 9 38 16 44 252 791 286 906 22 77 25 80 72 105 48\r
26 49 26 140 14 50 -7 285 -35 521 -62z m5071 53 c-3 -9 -22 -92 -41 -185 -19\r
-94 -42 -184 -51 -202 -29 -56 -334 -490 -353 -502 -5 -2 0 21 11 53 25 75\r
215 731 220 757 2 15 27 29 98 57 109 42 125 45 116 22z m1669 -109 c114 -67\r
235 -138 855 -507 245 -146 460 -273 478 -282 19 -10 32 -19 30 -20 -3 -3 -75\r
2 -573 39 -231 17 -489 45 -640 71 -92 15 -477 101 -507 113 -15 5 -13 15 16\r
86 18 44 42 100 53 125 11 25 55 134 97 242 43 109 81 196 84 194 4 -2 52 -29\r
107 -61z m-1895 36 c0 -5 -16 -65 -36 -133 -20 -68 -55 -190 -79 -273 -64\r
-226 -127 -429 -135 -438 -4 -4 -24 25 -45 65 -21 40 -105 196 -188 347 -82\r
150 -145 277 -140 281 4 5 97 29 207 55 109 26 241 59 295 75 109 32 121 34\r
121 21z m1040 -256 c51 -286 194 -1011 254 -1285 24 -113 43 -206 42 -207 -2\r
-2 -263 482 -362 672 -37 72 -91 174 -119 227 l-51 98 37 202 c20 112 49 239\r
63 283 27 82 89 245 92 242 1 -1 21 -105 44 -232z m-5152 -100 c66 -154 150\r
-347 185 -430 36 -82 97 -224 137 -314 39 -89 69 -168 67 -175 -3 -6 -45 -29\r
-93 -50 -49 -21 -246 -108 -439 -193 -192 -85 -444 -197 -560 -248 -299 -132\r
-406 -177 -411 -173 -3 4 126 252 629 1206 109 205 231 440 273 523 41 84 79\r
148 83 143 4 -5 62 -135 129 -289z m-208 183 c-152 -293 -491 -938 -799 -1523\r
-66 -126 -121 -233 -121 -238 0 -21 -32 23 -202 276 -100 150 -240 357 -311\r
461 -122 178 -128 190 -111 203 11 8 100 59 199 115 99 56 232 131 295 168 63\r
37 284 164 490 282 206 119 424 245 484 282 60 36 112 66 117 66 4 0 -14 -42\r
-41 -92z m1998 -453 c23 -44 297 -730 440 -1105 50 -129 105 -270 122 -313 17\r
-44 29 -81 27 -83 -2 -3 -91 33 -198 80 -829 360 -1457 635 -1574 688 -49 22\r
-110 49 -135 60 l-44 19 39 23 c22 13 211 113 420 224 209 110 439 232 510\r
270 278 149 360 190 366 184 3 -4 16 -25 27 -47z m4212 -545 c117 -162 312\r
-427 433 -588 121 -161 218 -294 216 -296 -2 -2 -96 14 -209 35 -113 22 -306\r
58 -430 80 -124 22 -292 53 -375 68 l-150 27 3 50 c5 78 81 751 108 951 13\r
100 24 187 24 194 0 7 37 -41 83 -107 46 -65 179 -252 297 -414z m-220 504\r
c226 -60 453 -101 725 -128 159 -17 803 -66 855 -66 17 0 30 -5 30 -12 -1 -7\r
-34 -67 -74 -133 l-73 -120 -249 -85 c-137 -47 -363 -125 -502 -173 -140 -48\r
-255 -87 -257 -87 -4 0 -11 11 -255 350 -293 408 -326 455 -334 468 -11 19 28\r
15 134 -14z m-770 -291 c52 -103 146 -282 208 -398 179 -331 254 -485 240\r
-490 -7 -2 -96 -18 -198 -35 -194 -32 -403 -73 -432 -85 -23 -9 -23 6 -3 220\r
28 309 64 741 71 858 4 64 9 117 13 117 3 0 49 -85 101 -187z m-140 -100 c-11\r
-142 -29 -355 -40 -473 -11 -118 -23 -258 -26 -310 -4 -52 -10 -103 -14 -114\r
-5 -16 -34 3 -201 129 -107 81 -233 177 -282 212 l-87 65 68 77 c37 42 122\r
139 187 216 248 292 406 468 413 461 2 -2 -6 -120 -18 -263z m-926 6 c43 -85\r
116 -226 162 -313 46 -87 84 -164 84 -171 0 -16 67 8 -545 -195 -286 -95 -564\r
-187 -618 -206 l-98 -34 19 28 c20 27 304 358 607 707 86 99 186 217 223 263\r
36 45 70 81 76 79 6 -2 46 -73 90 -158z m3258 -140 c-27 -40 -265 -429 -453\r
-736 -40 -68 -76 -123 -79 -122 -3 0 -100 128 -217 284 l-211 283 416 142\r
c230 78 451 154 492 169 41 15 76 27 78 25 2 -1 -10 -21 -26 -45z m-6684 -409\r
c226 -608 280 -755 278 -757 -2 -2 -92 17 -202 41 -229 50 -200 44 -1019 216\r
-341 71 -633 134 -650 139 -27 8 -28 9 -10 16 31 12 1103 485 1380 608 55 24\r
103 42 107 38 4 -3 56 -139 116 -301z m352 112 c162 -71 462 -203 665 -292\r
204 -89 447 -195 540 -235 234 -100 292 -127 280 -131 -5 -2 -118 -17 -250\r
-34 -272 -35 -858 -117 -1105 -155 -91 -13 -170 -25 -176 -25 -6 0 -48 102\r
-94 228 -46 125 -121 328 -168 452 -46 124 -95 254 -107 290 -13 36 -26 73\r
-30 83 -6 14 7 11 71 -17 44 -19 212 -93 374 -164z m3249 -209 c-157 -275\r
-837 -1398 -847 -1398 -5 0 -52 50 -104 110 -85 99 -399 443 -660 723 -54 58\r
-95 109 -91 113 16 15 458 147 462 137 1 -5 12 -1 23 9 16 15 1276 443 1286\r
437 2 -2 -29 -60 -69 -131z m181 -98 c45 -115 97 -246 116 -290 100 -241 305\r
-767 300 -772 -7 -7 -181 -39 -606 -113 -162 -28 -411 -71 -554 -96 -142 -25\r
-259 -44 -261 -42 -2 2 177 302 397 668 219 366 425 711 456 767 31 56 60 99\r
63 95 4 -4 44 -101 89 -217z m220 5 c118 -91 228 -174 243 -185 l28 -20 -15\r
-185 c-30 -356 -60 -623 -68 -604 -35 84 -467 1176 -473 1194 -9 27 -35 45\r
285 -200z m910 -107 c-121 -140 -670 -716 -676 -710 -2 2 8 124 21 273 14 148\r
25 286 25 307 0 49 0 49 285 102 418 78 387 76 345 28z m295 -3 c116 -21 359\r
-66 540 -100 182 -33 338 -64 348 -68 13 -5 -7 -17 -78 -45 -53 -21 -160 -66\r
-238 -99 -78 -33 -250 -104 -382 -158 -206 -85 -415 -170 -1062 -437 -62 -26\r
-116 -44 -119 -40 -4 4 -2 52 4 107 l11 101 119 122 c127 131 381 401 526 560\r
49 53 96 97 105 97 9 0 111 -18 226 -40z m-3283 -309 c24 -26 167 -183 319\r
-347 306 -332 465 -510 480 -536 14 -26 0 -24 -151 27 -74 25 -205 66 -290 91\r
-85 25 -281 83 -435 129 -154 46 -494 147 -755 225 -595 178 -763 230 -772\r
239 -8 7 309 57 777 121 160 22 385 53 500 69 290 40 275 41 327 -18z`}),u.jsx("path",{d:`M7690 17090 c0 -13 11 -13 30 0 12 8 11 10 -7 10 -13 0 -23 -4 -23\r
-10z`}),u.jsx("path",{d:"M9523 16723 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"}),u.jsx("path",{d:"M8553 16653 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z"}),u.jsx("path",{d:`M7065 16500 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0\r
-13 -4 -16 -10z`}),u.jsx("path",{d:"M5538 16493 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:"M8383 16433 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"}),u.jsx("path",{d:"M7328 16283 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:"M9801 16164 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}),u.jsx("path",{d:`M6010 16130 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
-4 -4 -4 -10z`}),u.jsx("path",{d:"M7098 16053 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:`M8420 16116 c0 -2 7 -9 15 -16 13 -11 14 -10 9 4 -5 14 -24 23 -24\r
12z`}),u.jsx("path",{d:"M6653 15933 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z"}),u.jsx("path",{d:"M7136 15992 c-3 -5 13 -9 36 -10 47 -2 47 4 1 13 -18 3 -34 1 -37 -3z"}),u.jsx("path",{d:"M9756 15951 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z"}),u.jsx("path",{d:"M10930 15991 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z"}),u.jsx("path",{d:"M6998 15943 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:"M6328 15883 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:`M9500 15810 c41 -21 80 -39 85 -39 6 0 -24 18 -65 39 -41 21 -79 39\r
-85 39 -5 0 24 -18 65 -39z`}),u.jsx("path",{d:`M6080 15709 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0\r
-10 -5 -10 -11z`}),u.jsx("path",{d:"M9648 15613 c18 -2 45 -2 60 0 15 2 0 4 -33 4 -33 0 -45 -2 -27 -4z"}),u.jsx("path",{d:"M6091 15634 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}),u.jsx("path",{d:"M7065 15500 c-13 -6 -2 -7 30 -3 28 3 52 7 54 9 9 8 -65 2 -84 -6z"}),u.jsx("path",{d:"M11070 15456 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z"}),u.jsx("path",{d:"M5861 15234 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}),u.jsx("path",{d:`M5089 15283 l-24 -28 30 25 c17 14 32 26 34 28 2 1 0 2 -6 2 -5 0\r
-20 -12 -34 -27z`}),u.jsx("path",{d:"M6768 15273 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:`M5935 15230 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0\r
-13 -4 -16 -10z`}),u.jsx("path",{d:`M11381 15127 c-1 -4 13 -33 31 -65 71 -128 304 -543 353 -627 29 -49\r
76 -134 105 -188 28 -54 54 -96 57 -93 5 5 -58 123 -255 471 -306 542 -290\r
515 -291 502z`}),u.jsx("path",{d:"M6683 14983 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z"}),u.jsx("path",{d:"M5365 14740 c-8 -13 -1 -24 14 -19 6 3 7 10 2 18 -6 10 -10 10 -16 1z"}),u.jsx("path",{d:"M5371 14644 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}),u.jsx("path",{d:`M6389 14582 l-34 -37 35 30 c19 17 37 31 39 33 2 1 2 4 -1 7 -2 3\r
-20 -12 -39 -33z`}),u.jsx("path",{d:`M5486 14455 c-11 -8 -15 -15 -9 -15 6 0 16 7 23 15 16 19 11 19 -14\r
0z`}),u.jsx("path",{d:"M5578 14443 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:`M5615 14420 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0\r
-13 -4 -16 -10z`}),u.jsx("path",{d:"M4375 14310 l-30 -8 32 -1 c17 0 35 4 38 9 7 11 3 11 -40 0z"}),u.jsx("path",{d:`M5625 14220 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3\r
0 -8 -4 -11 -10z`}),u.jsx("path",{d:"M5405 13970 c3 -5 14 -10 23 -10 15 0 15 2 2 10 -20 13 -33 13 -25 0z"}),u.jsx("path",{d:"M6310 13651 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z"}),u.jsx("path",{d:`M5480 13520 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
-4 -4 -4 -10z`}),u.jsx("path",{d:"M6580 13481 c0 -9 30 -24 36 -18 2 1 -6 8 -16 15 -11 7 -20 8 -20 3z"}),u.jsx("path",{d:"M4361 13409 c-7 -12 -10 -23 -8 -26 3 -3 11 5 17 17 15 28 8 35 -9 9z"}),u.jsx("path",{d:"M5956 13297 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z"}),u.jsx("path",{d:"M5995 13080 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"}),u.jsx("path",{d:`M5641 13113 c-1 -6 -4 -20 -7 -30 -5 -17 -5 -17 6 0 6 10 9 23 6 30\r
-3 9 -5 9 -5 0z`}),u.jsx("path",{d:"M5612 13010 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"}),u.jsx("path",{d:"M4762 13035 c0 -11 3 -29 8 -40 11 -25 11 1 0 35 -6 20 -8 21 -8 5z"}),u.jsx("path",{d:`M5074 13001 c7 -11 46 -35 46 -28 0 3 -12 12 -26 22 -15 9 -23 12\r
-20 6z`}),u.jsx("path",{d:`M4365 12960 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
-7 -4 -4 -10z`}),u.jsx("path",{d:"M5298 12873 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:"M8988 12063 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"}),u.jsx("path",{d:"M12302 11685 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"}),u.jsx("path",{d:"M6922 11680 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"}),u.jsx("path",{d:"M4757 11619 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 -14 6 -15 5 -6 -5z"}),u.jsx("path",{d:"M11128 11603 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:`M5160 11580 c-8 -5 -10 -10 -5 -10 6 0 17 5 25 10 8 5 11 10 5 10 -5\r
0 -17 -5 -25 -10z`}),u.jsx("path",{d:`M11105 11540 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10\r
-6 0 -7 -4 -4 -10z`}),u.jsx("path",{d:"M10648 11493 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:`M9031 11460 c14 -31 19 -36 19 -24 0 6 -7 19 -16 30 -14 18 -14 18\r
-3 -6z`}),u.jsx("path",{d:`M9056 11364 c-4 -14 -5 -28 -3 -31 3 -2 8 8 11 23 4 14 5 28 3 31 -3\r
2 -8 -8 -11 -23z`}),u.jsx("path",{d:`M7759 11423 c-13 -16 -12 -17 4 -4 16 13 21 21 13 21 -2 0 -10 -8\r
-17 -17z`}),u.jsx("path",{d:"M5351 11404 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}),u.jsx("path",{d:`M11247 11220 c6 -7 33 -14 60 -16 42 -3 44 -2 13 5 -19 4 -46 11 -60\r
15 -20 7 -22 6 -13 -4z`}),u.jsx("path",{d:`M8140 11166 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21\r
13z`}),u.jsx("path",{d:"M3855 11200 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"}),u.jsx("path",{d:"M11548 10973 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:`M12639 10123 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21\r
-13z`}),u.jsx("path",{d:`M11611 9736 c2 -2 15 -9 29 -15 24 -11 24 -11 6 3 -16 13 -49 24 -35\r
12z`}),u.jsx("path",{d:"M4818 9663 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:`M9641 9607 c-1 -21 25 -87 34 -87 3 0 3 5 -1 11 -4 7 -13 30 -20 53\r
-7 23 -13 33 -13 23z`}),u.jsx("path",{d:`M10660 9525 c40 -21 143 -45 198 -45 82 0 67 15 -17 16 -49 1 -97 9\r
-135 23 -68 24 -82 26 -46 6z`}),u.jsx("path",{d:`M10193 9349 c-18 -12 -33 -25 -33 -30 0 -6 16 2 35 17 30 23 41 34\r
33 34 -2 0 -18 -10 -35 -21z`}),u.jsx("path",{d:`M9900 9120 c-2 -8 -4 -20 -4 -26 -1 -6 -7 -19 -15 -28 -25 -29 5 -17\r
35 16 18 19 23 29 12 25 -11 -4 -18 0 -21 11 -4 14 -5 14 -7 2z`}),u.jsx("path",{d:`M10751 9056 c-9 -10 -9 -16 -1 -21 6 -4 14 -4 17 -1 4 3 0 6 -7 6 -9\r
0 -7 5 6 15 10 8 14 15 8 15 -6 0 -17 -6 -23 -14z`}),u.jsx("path",{d:`M10140 9035 c-19 -22 -8 -25 13 -3 9 10 13 18 8 18 -5 0 -14 -7 -21\r
-15z`}),u.jsx("path",{d:"M9958 9023 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"}),u.jsx("path",{d:"M5310 8711 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z"}),u.jsx("path",{d:`M10415 8290 l-30 -8 30 0 c17 0 39 3 50 8 l20 9 -20 -1 c-11 0 -33\r
-4 -50 -8z`}),u.jsx("path",{d:"M9825 7920 c27 -12 43 -12 25 0 -8 5 -22 9 -30 9 -10 0 -8 -3 5 -9z"}),u.jsx("path",{d:`M9900 7890 c19 -11 40 -19 45 -19 6 0 -6 8 -25 19 -19 11 -39 19 -45\r
19 -5 0 6 -8 25 -19z`}),u.jsx("path",{d:`M10936 7924 c-4 -9 -4 -19 -1 -22 2 -3 7 3 11 12 4 9 4 19 1 22 -2 3\r
-7 -3 -11 -12z`}),u.jsx("path",{d:`M5870 7705 c30 -30 57 -55 59 -55 3 0 -19 25 -49 55 -30 30 -57 55\r
-59 55 -3 0 19 -25 49 -55z`}),u.jsx("path",{d:`M10730 7845 c-14 -8 -20 -14 -14 -15 5 0 19 7 30 15 24 18 16 19 -16\r
0z`}),u.jsx("path",{d:"M11158 7818 c9 -9 15 -9 24 0 9 9 7 12 -12 12 -19 0 -21 -3 -12 -12z"}),u.jsx("path",{d:"M11245 7630 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"}),u.jsx("path",{d:`M10981 7563 c7 -12 15 -20 18 -17 3 2 -3 12 -13 22 -17 16 -18 16 -5\r
-5z`}),u.jsx("path",{d:"M10976 7283 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"}),u.jsx("path",{d:"M10828 7493 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:"M10768 7483 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"}),u.jsx("path",{d:"M11151 6964 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}),u.jsx("path",{d:`M11140 7315 c-17 -10 -20 -14 -9 -15 9 0 22 7 29 15 15 18 12 18 -20\r
0z`}),u.jsx("path",{d:"M11522 7080 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"}),u.jsx("path",{d:"M10268 7033 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:"M8865 5820 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"}),u.jsx("path",{d:`M9625 5780 c10 -11 20 -20 23 -20 3 0 -3 9 -13 20 -10 11 -20 20 -23\r
20 -3 0 3 -9 13 -20z`}),u.jsx("path",{d:"M10349 5743 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z"}),u.jsx("path",{d:"M9008 5663 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"}),u.jsx("path",{d:"M9460 5336 c0 -2 7 -7 16 -10 8 -3 12 -2 9 4 -6 10 -25 14 -25 6z"})]})})}function $a({skill:n="dark",color:e=!1}){const r={light:"bg-secondary text-primary outline-primary",dark:"bg-primary text-secondary outline-secondary",typescript:"bg-typescript text-white outline-white",javascript:"bg-javascript text-black outline-black",vue:"bg-vue-1 text-vue-2 outline-vue-2",react:"bg-white text-react outline-react",tailwindcss:"bg-tailwindcss text-white outline-white",html:"bg-html text-white outline-white",css:"bg-css text-white outline-white",git:"bg-git-1 text-git-2 outline-git-2",photoshop:"bg-photoshop-1 text-photoshop-2 outline-photoshop-2",figma:"bg-black text-white outline-white",github:"bg-black text-white outline-white"};return u.jsx("div",{className:N1("flex w-fit cursor-pointer rounded-full bg-primary px-3 py-1 font-CourierPrime text-xs font-bold leading-none text-secondary outline outline-2 outline-secondary hover:scale-105 hover:bg-secondary hover:text-primary hover:outline-primary lg:py-0 lg:text-sm",e&&r[n]),children:u.jsx("span",{className:"mt-1",children:n.charAt(0).toUpperCase()+n.slice(1)})})}function gt({skills:n,color:e}){const r=c=>{document.documentElement.className=c},t=()=>{document.documentElement.className=localStorage.getItem("theme")||"light"};return u.jsx("ul",{className:"flex flex-wrap items-center justify-center gap-2",children:n.map(c=>u.jsx("li",{onMouseEnter:()=>r(c),onMouseLeave:t,children:u.jsx($a,{skill:c,color:e})},c))})}function Wa(){const[n,e]=E.useState({width:window.innerWidth,height:window.innerHeight});return E.useEffect(()=>{const t=()=>{e({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),{sm:n.width>=640,md:n.width>=768,lg:n.width>=1024,xl:n.width>=1280,"2xl":n.width>=1536}}function Qa(){const n=Wa(),e=["typescript","javascript","vue","react","html","css","tailwindcss","git","github","photoshop","figma"];return u.jsx(tn,{children:u.jsxs("main",{className:"grid w-full place-items-center gap-6 px-4 py-6 md:grid-cols-2",children:[u.jsxs("div",{className:"flex max-w-[500px] flex-col gap-6 md:gap-10 lg:max-w-[650px]",children:[u.jsxs("section",{className:"flex flex-col gap-6 md:gap-10",children:[u.jsx(Ue,{smallText:"DESENVOLVEDOR",bigText:"FRONT-END"}),u.jsx(y5,{className:"text-justify",children:"Meu nome é Alan Lima, sou formado em Automação Industrial e Técnico em Eletrônica, com uma paixão crescente por desenvolvimento web. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e focando em me especializar como Desenvolvedor Front-End. Estou em busca de oportunidades para aplicar meus conhecimentos e contribuir para projetos inovadores."}),!n.md&&u.jsx(_7,{className:"mx-auto max-w-[400px] sm:max-w-[450px]"})]}),u.jsx("section",{children:u.jsx(gt,{skills:e})})]}),n.md&&u.jsx(_7,{className:"max-w-[450px]"})]})})}function Ka(){return u.jsx(tn,{children:u.jsxs("div",{className:"m-3 flex flex-col gap-5 text-primary transition-colors duration-200 ease-in-out",children:[u.jsx("h2",{className:"text-2xl text-[#FF0000]",children:"Error 404"}),u.jsx("p",{children:"A página que você procura não existe, para onde você gostaria de ir?"}),u.jsx("ul",{className:"flex gap-4 font-semibold",children:Ve.map(n=>n.path&&u.jsx("li",{className:"underline-offset-2 hover:underline",children:u.jsx(M5,{className:"flex py-1",to:n.path,children:n.id})},n.path))})]})})}const Ga=[{name:"Bingo!",url:"https://bingotestefront.netlify.app/",image:"/portfolio/assets/bingo.png",skills:["javascript","html","css"],description:"26/02/2023 - Foi a primeira vez que criei algo do zero. Um amigo meu, que é desenvolvedor, estava trabalhando em um projeto e precisava recriar um bingo, mas estava com dificuldade para encontrar um design adequado. Então, fiz este projeto e mostrei para ele. Utilizei sombras e movimento para dar a impressão de elementos 3D, embora tudo seja em 2D. Ele gostou tanto que acabou replicando o design no projeto dele."},{name:"Modern House",url:"https://modernrlshouse.netlify.app/",image:"/portfolio/assets/modernhouse.png",skills:["javascript","html","css"],description:"10/04/2023 - Minha primeira landing page, foi a primeira vez que tive contato com responsividade e componentização. Foi utilizado apenas HTML, CSS e Javascript puro nesta página web."},{name:"Travel Equator",url:"https://equatortravelwebsite.netlify.app/",image:"/portfolio/assets/equator.png",skills:["vue","javascript","tailwindcss","css","html","git","github"],description:"15/06/2023 - Encontrei um design que achei muito bonito, então resolvi criar uma página o replicando. O maior desafio foi que eu tinha apenas uma imagem como referência, então precisei criar os componentes apenas com base no visual. Além disso, havia um mapa interativo, que me deu um certo trabalho para funcionar da maneira que eu queria."},{name:"PokePlace",url:"https://pokeplace.netlify.app/",image:"/portfolio/assets/pokeplace.png",skills:["vue","javascript","tailwindcss","css","html","git","github","photoshop"],description:'18/08/2023 - Estava procurando projetos para aprender a usar APIs, mas só encontrava exemplos de Pokédex. Resolvi variar um pouco e encontrei essa API do jogo de cartas, então criei um "marketplace" de cartas NFT e adicionei esse efeito de movimentação 3D, que apesar de existirem inumeros parecidos na internet, me desafiei a criar sozinho e me orgulho muito de ter conseguido.'},{name:"Seriatonando",url:"https://seriatonando.netlify.app/pt-BR/trending",image:"/portfolio/assets/seriatonando.png",skills:["vue","typescript","tailwindcss","html","git","github","figma"],description:"12/12/2023 - Adoro filmes e séries, tenho mais de 900 filmes assistidos no letterboxd, então resolvi unir a minha paixão pelo cinema com a minha paixão pelo desenvolvimento. Enquanto aprendia Nuxt.js, criei esta página que utiliza a API do TMDB para acessar o banco de dados de filmes e séries e a API do JustWatch para localizar os serviços de streaming que disponibilizam essas mídias. Foi um desafio, principalmente porque eu ainda estava aprendendo a usar APIs e criando todos os componentes do zero, sem utilizar frameworks com componentes prontos.Minha intenção era adicionar mais funcionalidades à aplicação, como autenticação, criação de listas de filmes, avaliações e comentários. No entanto, percebi que estava tentando fazer muitas coisas para as quais ainda não tinha o conhecimento necessário, especialmente em back-end. Então, decidi deixar essas funcionalidades para um futuro aprimoramento do projeto. Mesmo assim, fiquei muito satisfeito com o resultado."},{name:"To-Do Timer",url:"https://todowithcountdown.netlify.app/",image:"/portfolio/assets/todotimer.png",skills:["vue","typescript","tailwindcss","html","git","github"],description:"25/04/2024 - Na época, minha fonte de renda eram jogos NFT que demandavam muita organização. Para isso, criei esta To-Do list simples, mas bem funcional. Implementei um sistema de timer que, ao chegar a zero, emite um alerta sonoro até ser desligado."},{name:"Pescaria Digital",url:"https://choke7pescaria.netlify.app/",image:"/portfolio/assets/pescariaDigital.png",skills:["vue","typescript","tailwindcss","html","git","github","photoshop"],description:"13/06/2024 - Meu primeiro projeto freelance, desenvolvido para uma streamer de variedades na plataforma Twitch.TV. Nesse projeto, eu deveria reinventar a tradicional brincadeira de festa junina conhecida como pescaria, mas de forma digital. O objetivo era criar uma página onde a influenciadora convidaria os participantes a escolherem um peixe virtual durante a transmissão ao vivo, com a chance de ganhar prêmios, dependendo da sorte. Gostaria de ter desenvolvido esse projeto com o framework Electron, porém eu não tinha conhecimento em Node.js para o back-end, e o tempo para aprender não seria suficiente. Por isso, optei por persistir os dados necessários utilizando o localStorage do navegador."},{name:"Button Ui Kit",url:"https://free-responsive-button-ui-kit-react.netlify.app/",image:"/portfolio/assets/buttonUI.png",skills:["react","typescript","tailwindcss","html","git","github","figma"],description:"03/10/2024 - Iniciei meu aprendizado em React, e a melhor maneira de aprender uma tecnologia nova, na minha opinião, é criando algo sozinho. Então procurei na comunidade do Figma algo que fosse simples, bonito e que me permitisse aplicar os conceitos que aprendi. Foi aí que encontrei este kit de botões com vários estados, e achei perfeito para treinar tanto minhas habilidades em React quanto em Figma. Os devidos créditos ao autor do design estão atribuídos na documentação do projeto no GitHub."},{name:"Portfolio React",url:"https://devalanlima.github.io/portfolio/",image:"/portfolio/assets/portfolioMockup.png",skills:["react","typescript","tailwindcss","html","git","github","figma","photoshop"],description:"08/11/2024 - Portfólio criado com o objetivo de demonstrar minhas habilidades nas tecnologias nas quais estou me aprofundando. Este foi meu primeiro projeto completo em React, pois eu estava mais acostumado a utilizar Vue. Meu maior desafio foi a sintaxe, que é um pouco diferente da do Vue, mas nada muito complexo. A principal diferença que notei é que minhas variáveis não são diretamente mutáveis e, para torná-las reativas, preciso sempre chamar uma função para modificar o valor original. No Vue, eu poderia simplesmente alterar o valor atribuindo um novo."}],Za=Ga.reverse();function Ya({className:n}){return u.jsx(u.Fragment,{children:u.jsx("svg",{className:N1("fill-primary w-[25px] h-[25px]",n),viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{d:"M2.8988625000000003 11.667708333333335v-1.4375h3.01875v1.4375h-3.01875Zm2.73125 5.534375000000001 -0.9583333333333334 -0.9583333333333334 2.1083333333333334 -2.1083333333333334 0.9583333333333334 0.9583333333333334 -2.1083333333333334 2.1083333333333334Zm1.15 -9.511458333333334 -2.1083333333333334 -2.1083333333333334 0.9583333333333334 -0.9583333333333334 2.1083333333333334 2.1083333333333334 -0.9583333333333334 0.9583333333333334Zm10.948958333333334 11.5 -4.504166666666667 -4.504166666666667 -1.0541666666666667 3.2583333333333333 -2.4916666666666667 -8.625 8.433333333333334 2.659375 -3.3062500000000004 1.1739583333333334 4.480208333333334 4.480208333333334 -1.5572916666666667 1.5572916666666667Zm-7.259375 -13.296875V2.875h1.4375v3.01875h-1.4375Zm5.127083333333333 1.796875 -0.9583333333333334 -0.9583333333333334 2.1083333333333334 -2.1083333333333334 0.9583333333333334 0.9583333333333334 -2.1083333333333334 2.1083333333333334Z"})})})}function Xa({className:n}){return u.jsx(u.Fragment,{children:u.jsx("svg",{className:N1("fill-primary w-[25px] h-[25px]",n),viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:u.jsx("path",{d:"M11.2125 17.25c-1.5333333333333334 -0.07987708333333333 -2.8270833333333334 -0.6708333333333333 -3.88125 -1.772916666666667C6.277083333333334 14.375 5.75 13.049289583333334 5.75 11.5c0 -1.59720625 0.5590437500000001 -2.9548770833333333 1.6770833333333335 -4.072916666666667 1.1180395833333334 -1.1180395833333334 2.475710416666667 -1.6770833333333335 4.072916666666667 -1.6770833333333335 1.5492895833333333 0 2.875 0.5270833333333333 3.9770833333333337 1.58125 1.1020833333333333 1.0541666666666667 1.6930395833333334 2.35591875 1.772916666666667 3.905208333333334l-1.509375 -0.4791666666666667c-0.17571041666666667 -1.0222062500000002 -0.6548770833333334 -1.8727270833333334 -1.4375 -2.5515625S12.586127083333334 7.1875 11.5 7.1875c-1.1979166666666667 0 -2.2161458333333335 0.41927083333333337 -3.0546875 1.2578125S7.1875 10.302083333333334 7.1875 11.5c0 1.0701229166666666 0.33939375000000005 2.0005208333333333 1.0182291666666667 2.7911458333333337 0.6788354166666667 0.790625 1.52935625 1.2737687500000001 2.5515625 1.4494791666666667L11.2125 17.25Zm8.457291666666666 4.3125 -4.096875000000001 -4.096875000000001L14.375 21.083333333333336l-2.875 -9.583333333333334 9.583333333333334 2.875 -3.6177083333333333 1.1979166666666667L21.5625 19.669791666666665 19.669791666666665 21.5625Z"})})})}function Ja({text:n,url:e}){const[r,t]=E.useState(!1),c=r?Ya:Xa,l=()=>{t(!0)},o=()=>{t(!1)};return u.jsxs(M5,{to:e,target:"_blank",rel:"noopener noreferrer",className:"group flex cursor-pointer items-center gap-1",onMouseEnter:l,onMouseLeave:o,children:[u.jsx("span",{className:"mt-1 font-CourierPrime group-hover:font-bold group-hover:underline",children:n}),u.jsx(c,{className:"h-[30px] w-[30px] rotate-90"})]})}function qa({project:n}){const[e,r]=E.useState(!1),t=()=>{r(o=>!o)},c=()=>u.jsxs("header",{className:"flex w-full items-center justify-between",children:[u.jsx("h3",{className:"font-DelaGothicOne text-xl",children:n.name}),u.jsx(Ja,{url:n.url,text:"Acesse"})]}),l=()=>u.jsx("div",{className:"max-h-[300px] overflow-y-auto px-2 text-justify md:px-5",children:n.description.length>=150?u.jsxs(y5,{children:[e?n.description+" ":n.description.substring(0,150)+"... ",u.jsx("button",{"aria-label":e?"Ver menos descrição":"Ver mais descrição",className:"font-bold",onClick:t,children:e?"ver menos":"ver mais"})]}):u.jsx(y5,{children:n.description})});return u.jsx(Fe,{className:"flex flex-col gap-3",children:u.jsxs("article",{className:`flex flex-col items-center justify-between gap-3 px-3 text-primary ${e?"max-h-[800px]":"max-h-[460px]"}`,children:[u.jsx(c,{}),u.jsx("img",{src:n.image,alt:`${n.name} project screenshot`}),u.jsx(gt,{skills:n.skills,color:!0}),u.jsx(l,{})]})})}function ns(){return u.jsx(tn,{children:u.jsx("main",{className:"lg:py-110 flex w-full flex-col gap-6 px-4 py-10",children:u.jsxs("section",{className:"flex flex-col gap-6 lg:gap-14",children:[u.jsx(Ue,{smallText:"MEUS",bigText:"PROJETOS"}),u.jsx("ul",{className:"gap-y-110 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10",children:Za.map(n=>u.jsx("li",{children:u.jsx(qa,{project:n})},n.name))})]})})})}const Ve=[{id:"Home",path:"/portfolio/",element:u.jsx(Qa,{})},{id:"Projetos",path:"/portfolio/projetos",element:u.jsx(ns,{})},{id:"Contatos",path:"/portfolio/contatos",element:u.jsx(Ha,{})},{path:"*",element:u.jsx(Ka,{})}],es=Ni(Ve);function rs(){return u.jsx(Ui,{router:es})}K9(document.getElementById("root")).render(u.jsx(E.StrictMode,{children:u.jsx(rs,{})}));
