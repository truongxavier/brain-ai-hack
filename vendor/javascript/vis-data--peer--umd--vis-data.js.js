var r=typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:global;var t={};
/**
 * vis-data
 * http://visjs.org/
 *
 * Manage unstructured data using DataSet. Add, update, and remove data, and listen for changes in the data.
 *
 * @version 7.1.9
 * @date    2023-11-24T17:53:34.179Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
 *
 * @license
 * vis.js is dual licensed under both
 *
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   and
 *
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 *
 * vis.js may be distributed under either license.
 */(function(r,a){a(t)})(0,(function(t){function _classCallCheck(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}var a=typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof r!=="undefined"?r:typeof self!=="undefined"?self:{};function getDefaultExportFromCjs(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var o={exports:{}};var check=function(r){return r&&r.Math===Math&&r};var i=check(typeof globalThis=="object"&&globalThis)||check(typeof window=="object"&&window)||check(typeof self=="object"&&self)||check(typeof a=="object"&&a)||function(){return this||r}()||a||Function("return this")();var fails$u=function(r){try{return!!r()}catch(r){return true}};var v=fails$u;var u=!v((function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")}));var c=u;var l=Function.prototype;var h=l.apply;var p=l.call;var d=typeof Reflect=="object"&&Reflect.apply||(c?p.bind(h):function(){return p.apply(h,arguments)});var y=u;var g=Function.prototype;var m=g.call;var _=y&&g.bind.bind(m,m);var b=y?_:function(r){return function(){return m.apply(r,arguments)}};var w=b;var E=w({}.toString);var T=w("".slice);var classofRaw$2=function(r){return T(E(r),8,-1)};var A=classofRaw$2;var S=b;var functionUncurryThisClause=function(r){if(A(r)==="Function")return S(r)};var x=typeof document=="object"&&document.all;var O=typeof x=="undefined"&&x!==void 0;var I={all:x,IS_HTMLDDA:O};var k=I;var P=k.all;var D=k.IS_HTMLDDA?function(r){return typeof r=="function"||r===P}:function(r){return typeof r=="function"};var j={};var C=fails$u;var L=!C((function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}));var R=u;var M=Function.prototype.call;var N=R?M.bind(M):function(){return M.apply(M,arguments)};var z={};var $={}.propertyIsEnumerable;var q=Object.getOwnPropertyDescriptor;var H=q&&!$.call({1:2},1);z.f=H?function propertyIsEnumerable(t){var a=q(this||r,t);return!!a&&a.enumerable}:$;var createPropertyDescriptor$7=function(r,t){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:t}};var U=b;var G=fails$u;var W=classofRaw$2;var V=Object;var Y=U("".split);var B=G((function(){return!V("z").propertyIsEnumerable(0)}))?function(r){return W(r)==="String"?Y(r,""):V(r)}:V;var isNullOrUndefined$6=function(r){return r===null||r===void 0};var X=isNullOrUndefined$6;var K=TypeError;var requireObjectCoercible$3=function(r){if(X(r))throw new K("Can't call method on "+r);return r};var Q=B;var J=requireObjectCoercible$3;var toIndexedObject$a=function(r){return Q(J(r))};var Z=D;var rr=I;var tr=rr.all;var er=rr.IS_HTMLDDA?function(r){return typeof r=="object"?r!==null:Z(r)||r===tr}:function(r){return typeof r=="object"?r!==null:Z(r)};var ar={};var nr=ar;var or=i;var ir=D;var aFunction=function(r){return ir(r)?r:void 0};var getBuiltIn$f=function(r,t){return arguments.length<2?aFunction(nr[r])||aFunction(or[r]):nr[r]&&nr[r][t]||or[r]&&or[r][t]};var vr=b;var ur=vr({}.isPrototypeOf);var sr=typeof navigator!="undefined"&&String(navigator.userAgent)||"";var cr=i;var lr=sr;var fr=cr.process;var hr=cr.Deno;var pr=fr&&fr.versions||hr&&hr.version;var dr=pr&&pr.v8;var yr,gr;if(dr){yr=dr.split(".");gr=yr[0]>0&&yr[0]<4?1:+(yr[0]+yr[1])}if(!gr&&lr){yr=lr.match(/Edge\/(\d+)/);if(!yr||yr[1]>=74){yr=lr.match(/Chrome\/(\d+)/);yr&&(gr=+yr[1])}}var mr=gr;var _r=mr;var br=fails$u;var wr=i;var Er=wr.String;var Tr=!!Object.getOwnPropertySymbols&&!br((function(){var r=Symbol("symbol detection");return!Er(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&_r&&_r<41}));var Ar=Tr;var Sr=Ar&&!Symbol.sham&&typeof Symbol.iterator=="symbol";var xr=getBuiltIn$f;var Or=D;var Ir=ur;var kr=Sr;var Pr=Object;var Dr=kr?function(r){return typeof r=="symbol"}:function(r){var t=xr("Symbol");return Or(t)&&Ir(t.prototype,Pr(r))};var jr=String;var tryToString$6=function(r){try{return jr(r)}catch(r){return"Object"}};var Cr=D;var Fr=tryToString$6;var Lr=TypeError;var aCallable$e=function(r){if(Cr(r))return r;throw new Lr(Fr(r)+" is not a function")};var Rr=aCallable$e;var Mr=isNullOrUndefined$6;var getMethod$3=function(r,t){var a=r[t];return Mr(a)?void 0:Rr(a)};var Nr=N;var zr=D;var $r=er;var qr=TypeError;var ordinaryToPrimitive$1=function(r,t){var a,o;if(t==="string"&&zr(a=r.toString)&&!$r(o=Nr(a,r)))return o;if(zr(a=r.valueOf)&&!$r(o=Nr(a,r)))return o;if(t!=="string"&&zr(a=r.toString)&&!$r(o=Nr(a,r)))return o;throw new qr("Can't convert object to primitive value")};var Hr={exports:{}};var Ur=true;var Gr=i;var Wr=Object.defineProperty;var defineGlobalProperty$1=function(r,t){try{Wr(Gr,r,{value:t,configurable:true,writable:true})}catch(a){Gr[r]=t}return t};var Vr=i;var Yr=defineGlobalProperty$1;var Br="__core-js_shared__";var Xr=Vr[Br]||Yr(Br,{});var Kr=Xr;var Qr=Kr;(Hr.exports=function(r,t){return Qr[r]||(Qr[r]=t!==void 0?t:{})})("versions",[]).push({version:"3.33.2",mode:"pure",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",source:"https://github.com/zloirock/core-js"});var Jr=Hr.exports;var Zr=requireObjectCoercible$3;var rt=Object;var toObject$e=function(r){return rt(Zr(r))};var tt=b;var et=toObject$e;var at=tt({}.hasOwnProperty);var nt=Object.hasOwn||function hasOwn(r,t){return at(et(r),t)};var ot=b;var it=0;var vt=Math.random();var ut=ot(1..toString);var uid$4=function(r){return"Symbol("+(r===void 0?"":r)+")_"+ut(++it+vt,36)};var st=i;var ct=Jr;var lt=nt;var ft=uid$4;var ht=Tr;var pt=Sr;var dt=st.Symbol;var yt=ct("wks");var gt=pt?dt.for||dt:dt&&dt.withoutSetter||ft;var wellKnownSymbol$n=function(r){lt(yt,r)||(yt[r]=ht&&lt(dt,r)?dt[r]:gt("Symbol."+r));return yt[r]};var mt=N;var _t=er;var bt=Dr;var wt=getMethod$3;var Et=ordinaryToPrimitive$1;var Tt=wellKnownSymbol$n;var At=TypeError;var St=Tt("toPrimitive");var toPrimitive$6=function(r,t){if(!_t(r)||bt(r))return r;var a=wt(r,St);var o;if(a){t===void 0&&(t="default");o=mt(a,r,t);if(!_t(o)||bt(o))return o;throw new At("Can't convert object to primitive value")}t===void 0&&(t="number");return Et(r,t)};var xt=toPrimitive$6;var Ot=Dr;var toPropertyKey$4=function(r){var t=xt(r,"string");return Ot(t)?t:t+""};var It=i;var kt=er;var Pt=It.document;var Dt=kt(Pt)&&kt(Pt.createElement);var documentCreateElement$1=function(r){return Dt?Pt.createElement(r):{}};var jt=L;var Ct=fails$u;var Ft=documentCreateElement$1;var Lt=!jt&&!Ct((function(){return Object.defineProperty(Ft("div"),"a",{get:function(){return 7}}).a!==7}));var Rt=L;var Mt=N;var Nt=z;var zt=createPropertyDescriptor$7;var $t=toIndexedObject$a;var qt=toPropertyKey$4;var Ht=nt;var Ut=Lt;var Gt=Object.getOwnPropertyDescriptor;j.f=Rt?Gt:function getOwnPropertyDescriptor(r,t){r=$t(r);t=qt(t);if(Ut)try{return Gt(r,t)}catch(r){}if(Ht(r,t))return zt(!Mt(Nt.f,r,t),r[t])};var Wt=fails$u;var Vt=D;var Yt=/#|\.prototype\./;var isForced$2=function(r,t){var a=Xt[Bt(r)];return a===Qt||a!==Kt&&(Vt(t)?Wt(t):!!t)};var Bt=isForced$2.normalize=function(r){return String(r).replace(Yt,".").toLowerCase()};var Xt=isForced$2.data={};var Kt=isForced$2.NATIVE="N";var Qt=isForced$2.POLYFILL="P";var Jt=isForced$2;var Zt=functionUncurryThisClause;var re=aCallable$e;var te=u;var ee=Zt(Zt.bind);var functionBindContext=function(r,t){re(r);return t===void 0?r:te?ee(r,t):function(){return r.apply(t,arguments)}};var ae={};var ne=L;var oe=fails$u;var ie=ne&&oe((function(){return Object.defineProperty((function(){}),"prototype",{value:42,writable:false}).prototype!==42}));var ve=er;var ue=String;var se=TypeError;var anObject$d=function(r){if(ve(r))return r;throw new se(ue(r)+" is not an object")};var ce=L;var le=Lt;var fe=ie;var he=anObject$d;var pe=toPropertyKey$4;var de=TypeError;var ye=Object.defineProperty;var ge=Object.getOwnPropertyDescriptor;var me="enumerable";var _e="configurable";var be="writable";ae.f=ce?fe?function defineProperty(r,t,a){he(r);t=pe(t);he(a);if(typeof r==="function"&&t==="prototype"&&"value"in a&&be in a&&!a[be]){var o=ge(r,t);if(o&&o[be]){r[t]=a.value;a={configurable:_e in a?a[_e]:o[_e],enumerable:me in a?a[me]:o[me],writable:false}}}return ye(r,t,a)}:ye:function defineProperty(r,t,a){he(r);t=pe(t);he(a);if(le)try{return ye(r,t,a)}catch(r){}if("get"in a||"set"in a)throw new de("Accessors not supported");"value"in a&&(r[t]=a.value);return r};var we=L;var Ee=ae;var Te=createPropertyDescriptor$7;var Ae=we?function(r,t,a){return Ee.f(r,t,Te(1,a))}:function(r,t,a){r[t]=a;return r};var Se=i;var xe=d;var Oe=functionUncurryThisClause;var Ie=D;var ke=j.f;var Pe=Jt;var De=ar;var je=functionBindContext;var Ce=Ae;var Fe=nt;var wrapConstructor=function(t){var Wrapper=function(a,o,i){if((this||r)instanceof Wrapper){switch(arguments.length){case 0:return new t;case 1:return new t(a);case 2:return new t(a,o)}return new t(a,o,i)}return xe(t,this||r,arguments)};Wrapper.prototype=t.prototype;return Wrapper};var _export=function(r,t){var a=r.target;var o=r.global;var i=r.stat;var v=r.proto;var u=o?Se:i?Se[a]:(Se[a]||{}).prototype;var c=o?De:De[a]||Ce(De,a,{})[a];var l=c.prototype;var h,p,d;var y,g,m,_,b,w;for(y in t){h=Pe(o?y:a+(i?".":"#")+y,r.forced);p=!h&&u&&Fe(u,y);m=c[y];if(p)if(r.dontCallGetSet){w=ke(u,y);_=w&&w.value}else _=u[y];g=p&&_?_:t[y];if(!p||typeof m!=typeof g){b=r.bind&&p?je(g,Se):r.wrap&&p?wrapConstructor(g):v&&Ie(g)?Oe(g):g;(r.sham||g&&g.sham||m&&m.sham)&&Ce(b,"sham",true);Ce(c,y,b);if(v){d=a+"Prototype";Fe(De,d)||Ce(De,d,{});Ce(De[d],y,g);r.real&&l&&(h||!l[y])&&Ce(l,y,g)}}}};var Le=_export;var Re=L;var Me=ae.f;Le({target:"Object",stat:true,forced:Object.defineProperty!==Me,sham:!Re},{defineProperty:Me});var Ne=ar;var ze=Ne.Object;var $e=o.exports=function defineProperty(r,t,a){return ze.defineProperty(r,t,a)};ze.defineProperty.sham&&($e.sham=true);var qe=o.exports;var He=qe;var Ue=He;var Ge=Ue;var We=Ge;var Ve=We;var Ye=Ve;var Be=Ye;var Xe=getDefaultExportFromCjs(Be);var Ke=classofRaw$2;var Qe=Array.isArray||function isArray(r){return Ke(r)==="Array"};var Je=Math.ceil;var Ze=Math.floor;var ra=Math.trunc||function trunc(r){var t=+r;return(t>0?Ze:Je)(t)};var ta=ra;var toIntegerOrInfinity$4=function(r){var t=+r;return t!==t||t===0?0:ta(t)};var ea=toIntegerOrInfinity$4;var aa=Math.min;var toLength$1=function(r){return r>0?aa(ea(r),9007199254740991):0};var na=toLength$1;var lengthOfArrayLike$d=function(r){return na(r.length)};var oa=TypeError;var ia=9007199254740991;var doesNotExceedSafeInteger$4=function(r){if(r>ia)throw oa("Maximum allowed index exceeded");return r};var va=toPropertyKey$4;var ua=ae;var sa=createPropertyDescriptor$7;var createProperty$6=function(r,t,a){var o=va(t);o in r?ua.f(r,o,sa(0,a)):r[o]=a};var ca=wellKnownSymbol$n;var la=ca("toStringTag");var fa={};fa[la]="z";var ha=String(fa)==="[object z]";var pa=ha;var da=D;var ya=classofRaw$2;var ga=wellKnownSymbol$n;var ma=ga("toStringTag");var _a=Object;var ba=ya(function(){return arguments}())==="Arguments";var tryGet=function(r,t){try{return r[t]}catch(r){}};var wa=pa?ya:function(r){var t,a,o;return r===void 0?"Undefined":r===null?"Null":typeof(a=tryGet(t=_a(r),ma))=="string"?a:ba?ya(t):(o=ya(t))==="Object"&&da(t.callee)?"Arguments":o};var Ea=b;var Ta=D;var Aa=Kr;var Sa=Ea(Function.toString);Ta(Aa.inspectSource)||(Aa.inspectSource=function(r){return Sa(r)});var xa=Aa.inspectSource;var Oa=b;var Ia=fails$u;var ka=D;var Pa=wa;var Da=getBuiltIn$f;var ja=xa;var noop=function(){};var Ca=[];var Fa=Da("Reflect","construct");var La=/^\s*(?:class|function)\b/;var Ra=Oa(La.exec);var Ma=!La.test(noop);var Na=function isConstructor(r){if(!ka(r))return false;try{Fa(noop,Ca,r);return true}catch(r){return false}};var za=function isConstructor(r){if(!ka(r))return false;switch(Pa(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return false}try{return Ma||!!Ra(La,ja(r))}catch(r){return true}};za.sham=true;var $a=!Fa||Ia((function(){var r;return Na(Na.call)||!Na(Object)||!Na((function(){r=true}))||r}))?za:Na;var qa=Qe;var Ha=$a;var Ua=er;var Ga=wellKnownSymbol$n;var Wa=Ga("species");var Va=Array;var arraySpeciesConstructor$1=function(r){var t;if(qa(r)){t=r.constructor;if(Ha(t)&&(t===Va||qa(t.prototype)))t=void 0;else if(Ua(t)){t=t[Wa];t===null&&(t=void 0)}}return t===void 0?Va:t};var Ya=arraySpeciesConstructor$1;var arraySpeciesCreate$4=function(r,t){return new(Ya(r))(t===0?0:t)};var Ba=fails$u;var Xa=wellKnownSymbol$n;var Ka=mr;var Qa=Xa("species");var arrayMethodHasSpeciesSupport$5=function(r){return Ka>=51||!Ba((function(){var t=[];var a=t.constructor={};a[Qa]=function(){return{foo:1}};return t[r](Boolean).foo!==1}))};var Ja=_export;var Za=fails$u;var rn=Qe;var tn=er;var en=toObject$e;var an=lengthOfArrayLike$d;var nn=doesNotExceedSafeInteger$4;var vn=createProperty$6;var un=arraySpeciesCreate$4;var sn=arrayMethodHasSpeciesSupport$5;var cn=wellKnownSymbol$n;var ln=mr;var fn=cn("isConcatSpreadable");var hn=ln>=51||!Za((function(){var r=[];r[fn]=false;return r.concat()[0]!==r}));var isConcatSpreadable=function(r){if(!tn(r))return false;var t=r[fn];return t!==void 0?!!t:rn(r)};var pn=!hn||!sn("concat");Ja({target:"Array",proto:true,arity:1,forced:pn},{concat:function concat(t){var a=en(this||r);var o=un(a,0);var i=0;var v,u,c,l,h;for(v=-1,c=arguments.length;v<c;v++){h=v===-1?a:arguments[v];if(isConcatSpreadable(h)){l=an(h);nn(i+l);for(u=0;u<l;u++,i++)u in h&&vn(o,i,h[u])}else{nn(i+1);vn(o,i++,h)}}o.length=i;return o}});var dn=wa;var yn=String;var toString$7=function(r){if(dn(r)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return yn(r)};var gn={};var mn=toIntegerOrInfinity$4;var _n=Math.max;var bn=Math.min;var toAbsoluteIndex$4=function(r,t){var a=mn(r);return a<0?_n(a+t,0):bn(a,t)};var wn=toIndexedObject$a;var En=toAbsoluteIndex$4;var Tn=lengthOfArrayLike$d;var createMethod$3=function(r){return function(t,a,o){var i=wn(t);var v=Tn(i);var u=En(o,v);var c;if(r&&a!==a)while(v>u){c=i[u++];if(c!==c)return true}else for(;v>u;u++)if((r||u in i)&&i[u]===a)return r||u||0;return!r&&-1}};var An={includes:createMethod$3(true),indexOf:createMethod$3(false)};var Sn={};var xn=b;var On=nt;var In=toIndexedObject$a;var kn=An.indexOf;var Pn=Sn;var Dn=xn([].push);var objectKeysInternal=function(r,t){var a=In(r);var o=0;var i=[];var v;for(v in a)!On(Pn,v)&&On(a,v)&&Dn(i,v);while(t.length>o)On(a,v=t[o++])&&(~kn(i,v)||Dn(i,v));return i};var jn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];var Cn=objectKeysInternal;var Fn=jn;var Ln=Object.keys||function keys(r){return Cn(r,Fn)};var Rn=L;var Mn=ie;var Nn=ae;var zn=anObject$d;var $n=toIndexedObject$a;var qn=Ln;gn.f=Rn&&!Mn?Object.defineProperties:function defineProperties(r,t){zn(r);var a=$n(t);var o=qn(t);var i=o.length;var v=0;var u;while(i>v)Nn.f(r,u=o[v++],a[u]);return r};var Hn=getBuiltIn$f;var Un=Hn("document","documentElement");var Gn=Jr;var Wn=uid$4;var Vn=Gn("keys");var sharedKey$4=function(r){return Vn[r]||(Vn[r]=Wn(r))};var Yn=anObject$d;var Bn=gn;var Xn=jn;var Kn=Sn;var Qn=Un;var Jn=documentCreateElement$1;var Zn=sharedKey$4;var ro=">";var eo="<";var ao="prototype";var no="script";var oo=Zn("IE_PROTO");var EmptyConstructor=function(){};var scriptTag=function(r){return eo+no+ro+r+eo+"/"+no+ro};var NullProtoObjectViaActiveX=function(r){r.write(scriptTag(""));r.close();var t=r.parentWindow.Object;r=null;return t};var NullProtoObjectViaIFrame=function(){var r=Jn("iframe");var t="java"+no+":";var a;r.style.display="none";Qn.appendChild(r);r.src=String(t);a=r.contentWindow.document;a.open();a.write(scriptTag("document.F=Object"));a.close();return a.F};var io;var NullProtoObject=function(){try{io=new ActiveXObject("htmlfile")}catch(r){}NullProtoObject=typeof document!="undefined"?document.domain&&io?NullProtoObjectViaActiveX(io):NullProtoObjectViaIFrame():NullProtoObjectViaActiveX(io);var r=Xn.length;while(r--)delete NullProtoObject[ao][Xn[r]];return NullProtoObject()};Kn[oo]=true;var vo=Object.create||function create(r,t){var a;if(r!==null){EmptyConstructor[ao]=Yn(r);a=new EmptyConstructor;EmptyConstructor[ao]=null;a[oo]=r}else a=NullProtoObject();return t===void 0?a:Bn.f(a,t)};var uo={};var so=objectKeysInternal;var co=jn;var lo=co.concat("length","prototype");uo.f=Object.getOwnPropertyNames||function getOwnPropertyNames(r){return so(r,lo)};var fo={};var ho=toAbsoluteIndex$4;var po=lengthOfArrayLike$d;var yo=createProperty$6;var go=Array;var mo=Math.max;var arraySliceSimple=function(r,t,a){var o=po(r);var i=ho(t,o);var v=ho(a===void 0?o:a,o);var u=go(mo(v-i,0));var c=0;for(;i<v;i++,c++)yo(u,c,r[i]);u.length=c;return u};var _o=classofRaw$2;var bo=toIndexedObject$a;var wo=uo.f;var Eo=arraySliceSimple;var To=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];var getWindowNames=function(r){try{return wo(r)}catch(r){return Eo(To)}};fo.f=function getOwnPropertyNames(r){return To&&_o(r)==="Window"?getWindowNames(r):wo(bo(r))};var Ao={};Ao.f=Object.getOwnPropertySymbols;var So=Ae;var defineBuiltIn$6=function(r,t,a,o){o&&o.enumerable?r[t]=a:So(r,t,a);return r};var xo=ae;var defineBuiltInAccessor$3=function(r,t,a){return xo.f(r,t,a)};var Oo={};var Io=wellKnownSymbol$n;Oo.f=Io;var ko=ar;var Po=nt;var Do=Oo;var jo=ae.f;var wellKnownSymbolDefine=function(r){var t=ko.Symbol||(ko.Symbol={});Po(t,r)||jo(t,r,{value:Do.f(r)})};var Co=N;var Fo=getBuiltIn$f;var Lo=wellKnownSymbol$n;var Ro=defineBuiltIn$6;var symbolDefineToPrimitive=function(){var t=Fo("Symbol");var a=t&&t.prototype;var o=a&&a.valueOf;var i=Lo("toPrimitive");a&&!a[i]&&Ro(a,i,(function(t){return Co(o,this||r)}),{arity:1})};var Mo=ha;var No=wa;var zo=Mo?{}.toString:function toString(){return"[object "+No(this||r)+"]"};var $o=ha;var qo=ae.f;var Ho=Ae;var Uo=nt;var Go=zo;var Wo=wellKnownSymbol$n;var Vo=Wo("toStringTag");var setToStringTag$7=function(r,t,a,o){if(r){var i=a?r:r.prototype;Uo(i,Vo)||qo(i,Vo,{configurable:true,value:t});o&&!$o&&Ho(i,"toString",Go)}};var Yo=i;var Bo=D;var Xo=Yo.WeakMap;var Ko=Bo(Xo)&&/native code/.test(String(Xo));var Qo=Ko;var Jo=i;var Zo=er;var ri=Ae;var ti=nt;var ei=Kr;var ai=sharedKey$4;var ni=Sn;var oi="Object already initialized";var ii=Jo.TypeError;var vi=Jo.WeakMap;var ui,si,ci;var enforce=function(r){return ci(r)?si(r):ui(r,{})};var getterFor=function(r){return function(t){var a;if(!Zo(t)||(a=si(t)).type!==r)throw new ii("Incompatible receiver, "+r+" required");return a}};if(Qo||ei.state){var li=ei.state||(ei.state=new vi);li.get=li.get;li.has=li.has;li.set=li.set;ui=function(r,t){if(li.has(r))throw new ii(oi);t.facade=r;li.set(r,t);return t};si=function(r){return li.get(r)||{}};ci=function(r){return li.has(r)}}else{var fi=ai("state");ni[fi]=true;ui=function(r,t){if(ti(r,fi))throw new ii(oi);t.facade=r;ri(r,fi,t);return t};si=function(r){return ti(r,fi)?r[fi]:{}};ci=function(r){return ti(r,fi)}}var hi={set:ui,get:si,has:ci,enforce:enforce,getterFor:getterFor};var pi=functionBindContext;var di=b;var yi=B;var gi=toObject$e;var mi=lengthOfArrayLike$d;var _i=arraySpeciesCreate$4;var bi=di([].push);var createMethod$2=function(r){var t=r===1;var a=r===2;var o=r===3;var i=r===4;var v=r===6;var u=r===7;var c=r===5||v;return function(l,h,p,d){var y=gi(l);var g=yi(y);var m=pi(h,p);var _=mi(g);var b=0;var w=d||_i;var E=t?w(l,_):a||u?w(l,0):void 0;var T,A;for(;_>b;b++)if(c||b in g){T=g[b];A=m(T,b,y);if(r)if(t)E[b]=A;else if(A)switch(r){case 3:return true;case 5:return T;case 6:return b;case 2:bi(E,T)}else switch(r){case 4:return false;case 7:bi(E,T)}}return v?-1:o||i?i:E}};var wi={forEach:createMethod$2(0),map:createMethod$2(1),filter:createMethod$2(2),some:createMethod$2(3),every:createMethod$2(4),find:createMethod$2(5),findIndex:createMethod$2(6),filterReject:createMethod$2(7)};var Ei=_export;var Ti=i;var Ai=N;var Si=b;var xi=L;var Oi=Tr;var Ii=fails$u;var ki=nt;var Pi=ur;var Di=anObject$d;var ji=toIndexedObject$a;var Ci=toPropertyKey$4;var Fi=toString$7;var Li=createPropertyDescriptor$7;var Ri=vo;var Mi=Ln;var Ni=uo;var zi=fo;var $i=Ao;var qi=j;var Hi=ae;var Ui=gn;var Gi=z;var Wi=defineBuiltIn$6;var Vi=defineBuiltInAccessor$3;var Yi=Jr;var Bi=sharedKey$4;var Xi=Sn;var Ki=uid$4;var Qi=wellKnownSymbol$n;var Ji=Oo;var Zi=wellKnownSymbolDefine;var rv=symbolDefineToPrimitive;var tv=setToStringTag$7;var ev=hi;var av=wi.forEach;var nv=Bi("hidden");var ov="Symbol";var iv="prototype";var vv=ev.set;var uv=ev.getterFor(ov);var sv=Object[iv];var cv=Ti.Symbol;var lv=cv&&cv[iv];var fv=Ti.RangeError;var hv=Ti.TypeError;var pv=Ti.QObject;var dv=qi.f;var yv=Hi.f;var gv=zi.f;var mv=Gi.f;var _v=Si([].push);var bv=Yi("symbols");var wv=Yi("op-symbols");var Ev=Yi("wks");var Tv=!pv||!pv[iv]||!pv[iv].findChild;var fallbackDefineProperty=function(r,t,a){var o=dv(sv,t);o&&delete sv[t];yv(r,t,a);o&&r!==sv&&yv(sv,t,o)};var Av=xi&&Ii((function(){return Ri(yv({},"a",{get:function(){return yv(this||r,"a",{value:7}).a}})).a!==7}))?fallbackDefineProperty:yv;var wrap=function(r,t){var a=bv[r]=Ri(lv);vv(a,{type:ov,tag:r,description:t});xi||(a.description=t);return a};var Sv=function defineProperty(r,t,a){r===sv&&Sv(wv,t,a);Di(r);var o=Ci(t);Di(a);if(ki(bv,o)){if(a.enumerable){ki(r,nv)&&r[nv][o]&&(r[nv][o]=false);a=Ri(a,{enumerable:Li(0,false)})}else{ki(r,nv)||yv(r,nv,Li(1,{}));r[nv][o]=true}return Av(r,o,a)}return yv(r,o,a)};var xv=function defineProperties(r,t){Di(r);var a=ji(t);var o=Mi(a).concat($getOwnPropertySymbols(a));av(o,(function(t){xi&&!Ai(Iv,a,t)||Sv(r,t,a[t])}));return r};var Ov=function create(r,t){return t===void 0?Ri(r):xv(Ri(r),t)};var Iv=function propertyIsEnumerable(t){var a=Ci(t);var o=Ai(mv,this||r,a);return!((this||r)===sv&&ki(bv,a)&&!ki(wv,a))&&(!(o||!ki(this||r,a)||!ki(bv,a)||ki(this||r,nv)&&(this||r)[nv][a])||o)};var kv=function getOwnPropertyDescriptor(r,t){var a=ji(r);var o=Ci(t);if(a!==sv||!ki(bv,o)||ki(wv,o)){var i=dv(a,o);!i||!ki(bv,o)||ki(a,nv)&&a[nv][o]||(i.enumerable=true);return i}};var Pv=function getOwnPropertyNames(r){var t=gv(ji(r));var a=[];av(t,(function(r){ki(bv,r)||ki(Xi,r)||_v(a,r)}));return a};var $getOwnPropertySymbols=function(r){var t=r===sv;var a=gv(t?wv:ji(r));var o=[];av(a,(function(r){!ki(bv,r)||t&&!ki(sv,r)||_v(o,bv[r])}));return o};if(!Oi){cv=function Symbol(){if(Pi(lv,this||r))throw new hv("Symbol is not a constructor");var t=arguments.length&&arguments[0]!==void 0?Fi(arguments[0]):void 0;var a=Ki(t);var setter=function(t){var o=(this||r)===void 0?Ti:this||r;o===sv&&Ai(setter,wv,t);ki(o,nv)&&ki(o[nv],a)&&(o[nv][a]=false);var i=Li(1,t);try{Av(o,a,i)}catch(r){if(!(r instanceof fv))throw r;fallbackDefineProperty(o,a,i)}};xi&&Tv&&Av(sv,a,{configurable:true,set:setter});return wrap(a,t)};lv=cv[iv];Wi(lv,"toString",(function toString(){return uv(this||r).tag}));Wi(cv,"withoutSetter",(function(r){return wrap(Ki(r),r)}));Gi.f=Iv;Hi.f=Sv;Ui.f=xv;qi.f=kv;Ni.f=zi.f=Pv;$i.f=$getOwnPropertySymbols;Ji.f=function(r){return wrap(Qi(r),r)};xi&&Vi(lv,"description",{configurable:true,get:function description(){return uv(this||r).description}})}Ei({global:true,constructor:true,wrap:true,forced:!Oi,sham:!Oi},{Symbol:cv});av(Mi(Ev),(function(r){Zi(r)}));Ei({target:ov,stat:true,forced:!Oi},{useSetter:function(){Tv=true},useSimple:function(){Tv=false}});Ei({target:"Object",stat:true,forced:!Oi,sham:!xi},{create:Ov,defineProperty:Sv,defineProperties:xv,getOwnPropertyDescriptor:kv});Ei({target:"Object",stat:true,forced:!Oi},{getOwnPropertyNames:Pv});rv();tv(cv,ov);Xi[nv]=true;var Dv=Tr;var jv=Dv&&!!Symbol.for&&!!Symbol.keyFor;var Cv=_export;var Fv=getBuiltIn$f;var Lv=nt;var Rv=toString$7;var Mv=Jr;var Nv=jv;var zv=Mv("string-to-symbol-registry");var $v=Mv("symbol-to-string-registry");Cv({target:"Symbol",stat:true,forced:!Nv},{for:function(r){var t=Rv(r);if(Lv(zv,t))return zv[t];var a=Fv("Symbol")(t);zv[t]=a;$v[a]=t;return a}});var qv=_export;var Hv=nt;var Uv=Dr;var Gv=tryToString$6;var Wv=Jr;var Vv=jv;var Yv=Wv("symbol-to-string-registry");qv({target:"Symbol",stat:true,forced:!Vv},{keyFor:function keyFor(r){if(!Uv(r))throw new TypeError(Gv(r)+" is not a symbol");if(Hv(Yv,r))return Yv[r]}});var Bv=b;var Xv=Bv([].slice);var Kv=b;var Qv=Qe;var Jv=D;var Zv=classofRaw$2;var ru=toString$7;var tu=Kv([].push);var getJsonReplacerFunction=function(t){if(Jv(t))return t;if(Qv(t)){var a=t.length;var o=[];for(var i=0;i<a;i++){var v=t[i];typeof v=="string"?tu(o,v):typeof v!="number"&&Zv(v)!=="Number"&&Zv(v)!=="String"||tu(o,ru(v))}var u=o.length;var c=true;return function(t,a){if(c){c=false;return a}if(Qv(this||r))return a;for(var i=0;i<u;i++)if(o[i]===t)return a}}};var eu=_export;var au=getBuiltIn$f;var nu=d;var ou=N;var iu=b;var vu=fails$u;var uu=D;var su=Dr;var cu=Xv;var lu=getJsonReplacerFunction;var fu=Tr;var hu=String;var pu=au("JSON","stringify");var du=iu(/./.exec);var yu=iu("".charAt);var gu=iu("".charCodeAt);var mu=iu("".replace);var _u=iu(1..toString);var bu=/[\uD800-\uDFFF]/g;var wu=/^[\uD800-\uDBFF]$/;var Eu=/^[\uDC00-\uDFFF]$/;var Tu=!fu||vu((function(){var r=au("Symbol")("stringify detection");return pu([r])!=="[null]"||pu({a:r})!=="{}"||pu(Object(r))!=="{}"}));var Au=vu((function(){return pu("\udf06\ud834")!=='"\\udf06\\ud834"'||pu("\udead")!=='"\\udead"'}));var stringifyWithSymbolsFix=function(t,a){var o=cu(arguments);var i=lu(a);if(uu(i)||t!==void 0&&!su(t)){o[1]=function(t,a){uu(i)&&(a=ou(i,this||r,hu(t),a));if(!su(a))return a};return nu(pu,null,o)}};var fixIllFormed=function(r,t,a){var o=yu(a,t-1);var i=yu(a,t+1);return du(wu,r)&&!du(Eu,i)||du(Eu,r)&&!du(wu,o)?"\\u"+_u(gu(r,0),16):r};pu&&eu({target:"JSON",stat:true,arity:3,forced:Tu||Au},{stringify:function stringify(r,t,a){var o=cu(arguments);var i=nu(Tu?stringifyWithSymbolsFix:pu,null,o);return Au&&typeof i=="string"?mu(i,bu,fixIllFormed):i}});var Su=_export;var xu=Tr;var Ou=fails$u;var Iu=Ao;var ku=toObject$e;var Pu=!xu||Ou((function(){Iu.f(1)}));Su({target:"Object",stat:true,forced:Pu},{getOwnPropertySymbols:function getOwnPropertySymbols(r){var t=Iu.f;return t?t(ku(r)):[]}});var Du=wellKnownSymbolDefine;Du("asyncIterator");var ju=wellKnownSymbolDefine;ju("hasInstance");var Cu=wellKnownSymbolDefine;Cu("isConcatSpreadable");var Fu=wellKnownSymbolDefine;Fu("iterator");var Lu=wellKnownSymbolDefine;Lu("match");var Ru=wellKnownSymbolDefine;Ru("matchAll");var Mu=wellKnownSymbolDefine;Mu("replace");var Nu=wellKnownSymbolDefine;Nu("search");var zu=wellKnownSymbolDefine;zu("species");var $u=wellKnownSymbolDefine;$u("split");var qu=wellKnownSymbolDefine;var Hu=symbolDefineToPrimitive;qu("toPrimitive");Hu();var Uu=getBuiltIn$f;var Gu=wellKnownSymbolDefine;var Wu=setToStringTag$7;Gu("toStringTag");Wu(Uu("Symbol"),"Symbol");var Vu=wellKnownSymbolDefine;Vu("unscopables");var Yu=i;var Bu=setToStringTag$7;Bu(Yu.JSON,"JSON",true);var Xu=ar;var Ku=Xu.Symbol;var Qu={};var Ju=L;var Zu=nt;var rs=Function.prototype;var ts=Ju&&Object.getOwnPropertyDescriptor;var es=Zu(rs,"name");var as=es&&function something(){}.name==="something";var ns=es&&(!Ju||Ju&&ts(rs,"name").configurable);var os={EXISTS:es,PROPER:as,CONFIGURABLE:ns};var is=fails$u;var vs=!is((function(){function F(){}F.prototype.constructor=null;return Object.getPrototypeOf(new F)!==F.prototype}));var us=nt;var ss=D;var cs=toObject$e;var ls=sharedKey$4;var fs=vs;var hs=ls("IE_PROTO");var ps=Object;var ds=ps.prototype;var ys=fs?ps.getPrototypeOf:function(r){var t=cs(r);if(us(t,hs))return t[hs];var a=t.constructor;return ss(a)&&t instanceof a?a.prototype:t instanceof ps?ds:null};var gs=fails$u;var ms=D;var _s=er;var bs=vo;var ws=ys;var Es=defineBuiltIn$6;var Ts=wellKnownSymbol$n;var As=Ts("iterator");var Ss=false;var xs,Os,Is;if([].keys){Is=[].keys();if("next"in Is){Os=ws(ws(Is));Os!==Object.prototype&&(xs=Os)}else Ss=true}var ks=!_s(xs)||gs((function(){var r={};return xs[As].call(r)!==r}));xs=ks?{}:bs(xs);ms(xs[As])||Es(xs,As,(function(){return this||r}));var Ps={IteratorPrototype:xs,BUGGY_SAFARI_ITERATORS:Ss};var Ds=Ps.IteratorPrototype;var js=vo;var Cs=createPropertyDescriptor$7;var Fs=setToStringTag$7;var Ls=Qu;var returnThis$1=function(){return this||r};var iteratorCreateConstructor=function(r,t,a,o){var i=t+" Iterator";r.prototype=js(Ds,{next:Cs(+!o,a)});Fs(r,i,false,true);Ls[i]=returnThis$1;return r};var Rs=b;var Ms=aCallable$e;var functionUncurryThisAccessor=function(r,t,a){try{return Rs(Ms(Object.getOwnPropertyDescriptor(r,t)[a]))}catch(r){}};var Ns=D;var zs=String;var $s=TypeError;var aPossiblePrototype$1=function(r){if(typeof r=="object"||Ns(r))return r;throw new $s("Can't set "+zs(r)+" as a prototype")};var qs=functionUncurryThisAccessor;var Hs=anObject$d;var Us=aPossiblePrototype$1;var Gs=Object.setPrototypeOf||("__proto__"in{}?function(){var r=false;var t={};var a;try{a=qs(Object.prototype,"__proto__","set");a(t,[]);r=t instanceof Array}catch(r){}return function setPrototypeOf(t,o){Hs(t);Us(o);r?a(t,o):t.__proto__=o;return t}}():void 0);var Ws=_export;var Vs=N;var Ys=os;var Bs=iteratorCreateConstructor;var Xs=ys;var Ks=setToStringTag$7;var Qs=defineBuiltIn$6;var Js=wellKnownSymbol$n;var Zs=Qu;var rc=Ps;var tc=Ys.PROPER;Ys.CONFIGURABLE;rc.IteratorPrototype;var ec=rc.BUGGY_SAFARI_ITERATORS;var ac=Js("iterator");var nc="keys";var oc="values";var ic="entries";var returnThis=function(){return this||r};var iteratorDefine=function(t,a,o,i,v,u,c){Bs(o,a,i);var getIterationMethod=function(t){if(t===v&&y)return y;if(!ec&&t&&t in p)return p[t];switch(t){case nc:return function keys(){return new o(this||r,t)};case oc:return function values(){return new o(this||r,t)};case ic:return function entries(){return new o(this||r,t)}}return function(){return new o(this||r)}};var l=a+" Iterator";var h=false;var p=t.prototype;var d=p[ac]||p["@@iterator"]||v&&p[v];var y=!ec&&d||getIterationMethod(v);var g=a==="Array"&&p.entries||d;var m,_,b;if(g){m=Xs(g.call(new t));if(m!==Object.prototype&&m.next){Ks(m,l,true,true);Zs[l]=returnThis}}if(tc&&v===oc&&d&&d.name!==oc){h=true;y=function values(){return Vs(d,this||r)}}if(v){_={values:getIterationMethod(oc),keys:u?y:getIterationMethod(nc),entries:getIterationMethod(ic)};if(c)for(b in _)(ec||h||!(b in p))&&Qs(p,b,_[b]);else Ws({target:a,proto:true,forced:ec||h},_)}c&&p[ac]!==y&&Qs(p,ac,y,{name:v});Zs[a]=y;return _};var createIterResultObject$3=function(r,t){return{value:r,done:t}};var vc=toIndexedObject$a;var uc=Qu;var sc=hi;ae.f;var cc=iteratorDefine;var lc=createIterResultObject$3;var fc="Array Iterator";var hc=sc.set;var pc=sc.getterFor(fc);cc(Array,"Array",(function(t,a){hc(this||r,{type:fc,target:vc(t),index:0,kind:a})}),(function(){var t=pc(this||r);var a=t.target;var o=t.index++;if(!a||o>=a.length){t.target=void 0;return lc(void 0,true)}switch(t.kind){case"keys":return lc(o,false);case"values":return lc(a[o],false)}return lc([o,a[o]],false)}),"values");uc.Arguments=uc.Array;var dc={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};var yc=dc;var gc=i;var mc=wa;var _c=Ae;var bc=Qu;var wc=wellKnownSymbol$n;var Ec=wc("toStringTag");for(var Tc in yc){var Ac=gc[Tc];var Sc=Ac&&Ac.prototype;Sc&&mc(Sc)!==Ec&&_c(Sc,Ec,Tc);bc[Tc]=bc.Array}var xc=Ku;var Oc=xc;var Ic=wellKnownSymbol$n;var kc=ae.f;var Pc=Ic("metadata");var Dc=Function.prototype;Dc[Pc]===void 0&&kc(Dc,Pc,{value:null});var jc=wellKnownSymbolDefine;jc("asyncDispose");var Cc=wellKnownSymbolDefine;Cc("dispose");var Fc=wellKnownSymbolDefine;Fc("metadata");var Lc=Oc;var Rc=Lc;var Mc=getBuiltIn$f;var Nc=b;var zc=Mc("Symbol");var $c=zc.keyFor;var qc=Nc(zc.prototype.valueOf);var Hc=zc.isRegisteredSymbol||function isRegisteredSymbol(r){try{return $c(qc(r))!==void 0}catch(r){return false}};var Uc=_export;var Gc=Hc;Uc({target:"Symbol",stat:true},{isRegisteredSymbol:Gc});var Wc=Jr;var Vc=getBuiltIn$f;var Yc=b;var Bc=Dr;var Xc=wellKnownSymbol$n;var Kc=Vc("Symbol");var Qc=Kc.isWellKnownSymbol;var Jc=Vc("Object","getOwnPropertyNames");var Zc=Yc(Kc.prototype.valueOf);var rl=Wc("wks");for(var tl=0,el=Jc(Kc),al=el.length;tl<al;tl++)try{var nl=el[tl];Bc(Kc[nl])&&Xc(nl)}catch(r){}var ol=function isWellKnownSymbol(r){if(Qc&&Qc(r))return true;try{var t=Zc(r);for(var a=0,o=Jc(rl),i=o.length;a<i;a++)if(rl[o[a]]==t)return true}catch(r){}return false};var il=_export;var vl=ol;il({target:"Symbol",stat:true,forced:true},{isWellKnownSymbol:vl});var ul=wellKnownSymbolDefine;ul("matcher");var sl=wellKnownSymbolDefine;sl("observable");var cl=_export;var ll=Hc;cl({target:"Symbol",stat:true,name:"isRegisteredSymbol"},{isRegistered:ll});var fl=_export;var hl=ol;fl({target:"Symbol",stat:true,name:"isWellKnownSymbol",forced:true},{isWellKnown:hl});var pl=wellKnownSymbolDefine;pl("metadataKey");var dl=wellKnownSymbolDefine;dl("patternMatch");var yl=wellKnownSymbolDefine;yl("replaceAll");var gl=Rc;var ml=gl;var _l=ml;var bl=getDefaultExportFromCjs(_l);var wl=b;var El=toIntegerOrInfinity$4;var Tl=toString$7;var Al=requireObjectCoercible$3;var Sl=wl("".charAt);var xl=wl("".charCodeAt);var Ol=wl("".slice);var createMethod$1=function(r){return function(t,a){var o=Tl(Al(t));var i=El(a);var v=o.length;var u,c;if(i<0||i>=v)return r?"":void 0;u=xl(o,i);return u<55296||u>56319||i+1===v||(c=xl(o,i+1))<56320||c>57343?r?Sl(o,i):u:r?Ol(o,i,i+2):c-56320+(u-55296<<10)+65536}};var Il={codeAt:createMethod$1(false),charAt:createMethod$1(true)};var kl=Il.charAt;var Pl=toString$7;var Dl=hi;var jl=iteratorDefine;var Cl=createIterResultObject$3;var Fl="String Iterator";var Ll=Dl.set;var Rl=Dl.getterFor(Fl);jl(String,"String",(function(t){Ll(this||r,{type:Fl,string:Pl(t),index:0})}),(function next(){var t=Rl(this||r);var a=t.string;var o=t.index;var i;if(o>=a.length)return Cl(void 0,true);i=kl(a,o);t.index+=i.length;return Cl(i,false)}));var Ml=Oo;var Nl=Ml.f("iterator");var zl=Nl;var $l=zl;var ql=$l;var Hl=ql;var Ul=Hl;var Gl=Ul;var Wl=Gl;var Vl=getDefaultExportFromCjs(Wl);function _typeof$1(r){return _typeof$1="function"==typeof bl&&"symbol"==typeof Vl?function(r){return typeof r}:function(r){return r&&"function"==typeof bl&&r.constructor===bl&&r!==bl.prototype?"symbol":typeof r},_typeof$1(r)}var Yl=Oo;var Bl=Yl.f("toPrimitive");var Xl=Bl;var Kl=Xl;var Ql=Kl;var Jl=Ql;var Zl=Jl;var rf=Zl;var tf=rf;var ef=getDefaultExportFromCjs(tf);function _toPrimitive(r,t){if(_typeof$1(r)!=="object"||r===null)return r;var a=r[ef];if(a!==void 0){var o=a.call(r,t||"default");if(_typeof$1(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function _toPropertyKey(r){var t=_toPrimitive(r,"string");return _typeof$1(t)==="symbol"?t:String(t)}function _defineProperties(r,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||false;o.configurable=true;"value"in o&&(o.writable=true);Xe(r,_toPropertyKey(o.key),o)}}function _createClass(r,t,a){t&&_defineProperties(r.prototype,t);a&&_defineProperties(r,a);Xe(r,"prototype",{writable:false});return r}function _defineProperty(r,t,a){t=_toPropertyKey(t);t in r?Xe(r,t,{value:a,enumerable:true,configurable:true,writable:true}):r[t]=a;return r}var af=b;var nf=aCallable$e;var of=er;var vf=nt;var uf=Xv;var sf=u;var cf=Function;var lf=af([].concat);var ff=af([].join);var hf={};var construct$3=function(r,t,a){if(!vf(hf,t)){var o=[];var i=0;for(;i<t;i++)o[i]="a["+i+"]";hf[t]=cf("C,a","return new C("+ff(o,",")+")")}return hf[t](r,a)};var pf=sf?cf.bind:function bind(t){var a=nf(this||r);var o=a.prototype;var i=uf(arguments,1);var v=function bound(){var o=lf(i,uf(arguments));return(this||r)instanceof v?construct$3(a,o.length,o):a.apply(t,o)};of(o)&&(v.prototype=o);return v};var df=_export;var yf=pf;df({target:"Function",proto:true,forced:Function.bind!==yf},{bind:yf});var gf=i;var mf=ar;var getBuiltInPrototypeMethod$g=function(r,t){var a=mf[r+"Prototype"];var o=a&&a[t];if(o)return o;var i=gf[r];var v=i&&i.prototype;return v&&v[t]};var _f=getBuiltInPrototypeMethod$g;var bf=_f("Function","bind");var wf=ur;var Ef=bf;var Tf=Function.prototype;var bind$d=function(r){var t=r.bind;return r===Tf||wf(Tf,r)&&t===Tf.bind?Ef:t};var Af=bind$d;var Sf=Af;var xf=Sf;var Of=getDefaultExportFromCjs(xf);var If=aCallable$e;var kf=toObject$e;var Pf=B;var Df=lengthOfArrayLike$d;var jf=TypeError;var createMethod=function(r){return function(t,a,o,i){If(a);var v=kf(t);var u=Pf(v);var c=Df(v);var l=r?c-1:0;var h=r?-1:1;if(o<2)while(true){if(l in u){i=u[l];l+=h;break}l+=h;if(r?l<0:c<=l)throw new jf("Reduce of empty array with no initial value")}for(;r?l>=0:c>l;l+=h)l in u&&(i=a(i,u[l],l,v));return i}};var Cf={left:createMethod(false),right:createMethod(true)};var Ff=fails$u;var arrayMethodIsStrict$4=function(r,t){var a=[][r];return!!a&&Ff((function(){a.call(null,t||function(){return 1},1)}))};var Lf=i;var Rf=classofRaw$2;var Mf=Rf(Lf.process)==="process";var Nf=_export;var zf=Cf.left;var $f=arrayMethodIsStrict$4;var qf=mr;var Hf=Mf;var Uf=!Hf&&qf>79&&qf<83;var Gf=Uf||!$f("reduce");Nf({target:"Array",proto:true,forced:Gf},{reduce:function reduce(t){var a=arguments.length;return zf(this||r,t,a,a>1?arguments[1]:void 0)}});var Wf=getBuiltInPrototypeMethod$g;var Vf=Wf("Array","reduce");var Yf=ur;var Bf=Vf;var Xf=Array.prototype;var reduce$2=function(r){var t=r.reduce;return r===Xf||Yf(Xf,r)&&t===Xf.reduce?Bf:t};var Kf=reduce$2;var Qf=Kf;var Jf=Qf;var Zf=getDefaultExportFromCjs(Jf);var rh=_export;var th=wi.filter;var eh=arrayMethodHasSpeciesSupport$5;var ah=eh("filter");rh({target:"Array",proto:true,forced:!ah},{filter:function filter(t){return th(this||r,t,arguments.length>1?arguments[1]:void 0)}});var nh=getBuiltInPrototypeMethod$g;var oh=nh("Array","filter");var ih=ur;var vh=oh;var uh=Array.prototype;var filter$2=function(r){var t=r.filter;return r===uh||ih(uh,r)&&t===uh.filter?vh:t};var sh=filter$2;var ch=sh;var lh=ch;var fh=getDefaultExportFromCjs(lh);var hh=_export;var ph=wi.map;var dh=arrayMethodHasSpeciesSupport$5;var yh=dh("map");hh({target:"Array",proto:true,forced:!yh},{map:function map(t){return ph(this||r,t,arguments.length>1?arguments[1]:void 0)}});var gh=getBuiltInPrototypeMethod$g;var mh=gh("Array","map");var _h=ur;var bh=mh;var wh=Array.prototype;var map$5=function(r){var t=r.map;return r===wh||_h(wh,r)&&t===wh.map?bh:t};var Eh=map$5;var Th=Eh;var Ah=Th;var Sh=getDefaultExportFromCjs(Ah);var xh=Qe;var Oh=lengthOfArrayLike$d;var Ih=doesNotExceedSafeInteger$4;var kh=functionBindContext;var flattenIntoArray$1=function(r,t,a,o,i,v,u,c){var l=i;var h=0;var p=!!u&&kh(u,c);var d,y;while(h<o){if(h in a){d=p?p(a[h],h,t):a[h];if(v>0&&xh(d)){y=Oh(d);l=flattenIntoArray$1(r,t,d,y,l,v-1)-1}else{Ih(l+1);r[l]=d}l++}h++}return l};var Ph=flattenIntoArray$1;var Dh=_export;var jh=Ph;var Ch=aCallable$e;var Fh=toObject$e;var Lh=lengthOfArrayLike$d;var Rh=arraySpeciesCreate$4;Dh({target:"Array",proto:true},{flatMap:function flatMap(t){var a=Fh(this||r);var o=Lh(a);var i;Ch(t);i=Rh(a,0);i.length=jh(i,a,a,o,0,1,t,arguments.length>1?arguments[1]:void 0);return i}});var Mh=getBuiltInPrototypeMethod$g;var Nh=Mh("Array","flatMap");var zh=ur;var $h=Nh;var qh=Array.prototype;var flatMap$2=function(r){var t=r.flatMap;return r===qh||zh(qh,r)&&t===qh.flatMap?$h:t};var Hh=flatMap$2;var Uh=Hh;var Gh=Uh;var Wh=getDefaultExportFromCjs(Gh);
/**
   * Create new data pipe.
   *
   * @param from - The source data set or data view.
   * @remarks
   * Example usage:
   * ```typescript
   * interface AppItem {
   *   whoami: string;
   *   appData: unknown;
   *   visData: VisItem;
   * }
   * interface VisItem {
   *   id: number;
   *   label: string;
   *   color: string;
   *   x: number;
   *   y: number;
   * }
   *
   * const ds1 = new DataSet<AppItem, "whoami">([], { fieldId: "whoami" });
   * const ds2 = new DataSet<VisItem, "id">();
   *
   * const pipe = createNewDataPipeFrom(ds1)
   *   .filter((item): boolean => item.enabled === true)
   *   .map<VisItem, "id">((item): VisItem => item.visData)
   *   .to(ds2);
   *
   * pipe.start();
   * ```
   * @returns A factory whose methods can be used to configure the pipe.
   */function createNewDataPipeFrom(r){return new Yh(r)}
/**
   * Internal implementation of the pipe. This should be accessible only through
   * `createNewDataPipeFrom` from the outside.
   *
   * @typeParam SI - Source item type.
   * @typeParam SP - Source item type's id property name.
   * @typeParam TI - Target item type.
   * @typeParam TP - Target item type's id property name.
   */var Vh=function(){
/**
     * Create a new data pipe.
     *
     * @param _source - The data set or data view that will be observed.
     * @param _transformers - An array of transforming functions to be used to
     * filter or transform the items in the pipe.
     * @param _target - The data set or data view that will receive the items.
     */
function SimpleDataPipe(t,a,o){var i,v,u;_classCallCheck(this||r,SimpleDataPipe);_defineProperty(this||r,"_listeners",{add:Of(i=(this||r)._add).call(i,this||r),remove:Of(v=(this||r)._remove).call(v,this||r),update:Of(u=(this||r)._update).call(u,this||r)});(this||r)._source=t;(this||r)._transformers=a;(this||r)._target=o}_createClass(SimpleDataPipe,[{key:"all",value:function all(){(this||r)._target.update(this._transformItems((this||r)._source.get()));return this||r}},{key:"start",value:function start(){(this||r)._source.on("add",(this||r)._listeners.add);(this||r)._source.on("remove",(this||r)._listeners.remove);(this||r)._source.on("update",(this||r)._listeners.update);return this||r}},{key:"stop",value:function stop(){(this||r)._source.off("add",(this||r)._listeners.add);(this||r)._source.off("remove",(this||r)._listeners.remove);(this||r)._source.off("update",(this||r)._listeners.update);return this||r}
/**
       * Apply the transformers to the items.
       *
       * @param items - The items to be transformed.
       * @returns The transformed items.
       */},{key:"_transformItems",value:function _transformItems(t){var a;return Zf(a=(this||r)._transformers).call(a,(function(r,t){return t(r)}),t)}
/**
       * Handle an add event.
       *
       * @param _name - Ignored.
       * @param payload - The payload containing the ids of the added items.
       */},{key:"_add",value:function _add(t,a){a!=null&&(this||r)._target.add(this._transformItems((this||r)._source.get(a.items)))}
/**
       * Handle an update event.
       *
       * @param _name - Ignored.
       * @param payload - The payload containing the ids of the updated items.
       */},{key:"_update",value:function _update(t,a){a!=null&&(this||r)._target.update(this._transformItems((this||r)._source.get(a.items)))}
/**
       * Handle a remove event.
       *
       * @param _name - Ignored.
       * @param payload - The payload containing the data of the removed items.
       */},{key:"_remove",value:function _remove(t,a){a!=null&&(this||r)._target.remove(this._transformItems(a.oldData))}}]);return SimpleDataPipe}();
/**
   * Internal implementation of the pipe factory. This should be accessible
   * only through `createNewDataPipeFrom` from the outside.
   *
   * @typeParam TI - Target item type.
   * @typeParam TP - Target item type's id property name.
   */var Yh=function(){
/**
     * Create a new data pipe factory. This is an internal constructor that
     * should never be called from outside of this file.
     *
     * @param _source - The source data set or data view for this pipe.
     */
function DataPipeUnderConstruction(t){_classCallCheck(this||r,DataPipeUnderConstruction);_defineProperty(this||r,"_transformers",[]);(this||r)._source=t}
/**
     * Filter the items.
     *
     * @param callback - A filtering function that returns true if given item
     * should be piped and false if not.
     * @returns This factory for further configuration.
     */_createClass(DataPipeUnderConstruction,[{key:"filter",value:function filter(t){(this||r)._transformers.push((function(r){return fh(r).call(r,t)}));return this||r}
/**
       * Map each source item to a new type.
       *
       * @param callback - A mapping function that takes a source item and returns
       * corresponding mapped item.
       * @typeParam TI - Target item type.
       * @typeParam TP - Target item type's id property name.
       * @returns This factory for further configuration.
       */},{key:"map",value:function map(t){(this||r)._transformers.push((function(r){return Sh(r).call(r,t)}));return this||r}
/**
       * Map each source item to zero or more items of a new type.
       *
       * @param callback - A mapping function that takes a source item and returns
       * an array of corresponding mapped items.
       * @typeParam TI - Target item type.
       * @typeParam TP - Target item type's id property name.
       * @returns This factory for further configuration.
       */},{key:"flatMap",value:function flatMap(t){(this||r)._transformers.push((function(r){return Wh(r).call(r,t)}));return this||r}
/**
       * Connect this pipe to given data set.
       *
       * @param target - The data set that will receive the items from this pipe.
       * @returns The pipe connected between given data sets and performing
       * configured transformation on the processed items.
       */},{key:"to",value:function to(t){return new Vh((this||r)._source,(this||r)._transformers,t)}}]);return DataPipeUnderConstruction}();var Bh=N;var Xh=anObject$d;var Kh=getMethod$3;var iteratorClose$2=function(r,t,a){var o,i;Xh(r);try{o=Kh(r,"return");if(!o){if(t==="throw")throw a;return a}o=Bh(o,r)}catch(r){i=true;o=r}if(t==="throw")throw a;if(i)throw o;Xh(o);return a};var Qh=anObject$d;var Jh=iteratorClose$2;var callWithSafeIterationClosing$1=function(r,t,a,o){try{return o?t(Qh(a)[0],a[1]):t(a)}catch(t){Jh(r,"throw",t)}};var Zh=wellKnownSymbol$n;var rp=Qu;var tp=Zh("iterator");var ep=Array.prototype;var isArrayIteratorMethod$2=function(r){return r!==void 0&&(rp.Array===r||ep[tp]===r)};var ap=wa;var np=getMethod$3;var op=isNullOrUndefined$6;var ip=Qu;var vp=wellKnownSymbol$n;var up=vp("iterator");var getIteratorMethod$9=function(r){if(!op(r))return np(r,up)||np(r,"@@iterator")||ip[ap(r)]};var sp=N;var cp=aCallable$e;var lp=anObject$d;var fp=tryToString$6;var hp=getIteratorMethod$9;var pp=TypeError;var getIterator$8=function(r,t){var a=arguments.length<2?hp(r):t;if(cp(a))return lp(sp(a,r));throw new pp(fp(r)+" is not iterable")};var dp=functionBindContext;var yp=N;var gp=toObject$e;var mp=callWithSafeIterationClosing$1;var _p=isArrayIteratorMethod$2;var bp=$a;var wp=lengthOfArrayLike$d;var Ep=createProperty$6;var Tp=getIterator$8;var Ap=getIteratorMethod$9;var Sp=Array;var xp=function from(t){var a=gp(t);var o=bp(this||r);var i=arguments.length;var v=i>1?arguments[1]:void 0;var u=v!==void 0;u&&(v=dp(v,i>2?arguments[2]:void 0));var c=Ap(a);var l=0;var h,p,d,y,g,m;if(!c||(this||r)===Sp&&_p(c)){h=wp(a);p=o?new(this||r)(h):Sp(h);for(;h>l;l++){m=u?v(a[l],l):a[l];Ep(p,l,m)}}else{y=Tp(a,c);g=y.next;p=o?new(this||r):[];for(;!(d=yp(g,y)).done;l++){m=u?mp(y,v,[d.value,l],true):d.value;Ep(p,l,m)}}p.length=l;return p};var Op=wellKnownSymbol$n;var Ip=Op("iterator");var kp=false;try{var Pp=0;var Dp={next:function(){return{done:!!Pp++}},return:function(){kp=true}};Dp[Ip]=function(){return this||r};Array.from(Dp,(function(){throw 2}))}catch(r){}var checkCorrectnessOfIteration$2=function(r,t){try{if(!t&&!kp)return false}catch(r){return false}var a=false;try{var o={};o[Ip]=function(){return{next:function(){return{done:a=true}}}};r(o)}catch(r){}return a};var jp=_export;var Cp=xp;var Fp=checkCorrectnessOfIteration$2;var Lp=!Fp((function(r){Array.from(r)}));jp({target:"Array",stat:true,forced:Lp},{from:Cp});var Rp=ar;var Mp=Rp.Array.from;var Np=Mp;var zp=Np;var $p=zp;var qp=getDefaultExportFromCjs($p);var Hp=getIteratorMethod$9;var Up=Hp;var Gp=Up;var Wp=Gp;var Vp=Wp;var Yp=Vp;var Bp=Yp;var Xp=Bp;var Kp=Xp;var Qp=getDefaultExportFromCjs(Kp);var Jp=Kp;var Zp=getDefaultExportFromCjs(Jp);var rd=_export;var td=Qe;rd({target:"Array",stat:true},{isArray:td});var ed=ar;var ad=ed.Array.isArray;var nd=ad;var od=nd;var id=od;var vd=id;var ud=vd;var sd=ud;var cd=sd;var ld=getDefaultExportFromCjs(cd);function _arrayWithHoles(r){if(ld(r))return r}var fd=L;var hd=Qe;var pd=TypeError;var dd=Object.getOwnPropertyDescriptor;var yd=fd&&!function(){if((this||r)!==void 0)return true;try{Object.defineProperty([],"length",{writable:false}).length=1}catch(r){return r instanceof TypeError}}();var gd=yd?function(r,t){if(hd(r)&&!dd(r,"length").writable)throw new pd("Cannot set read only .length");return r.length=t}:function(r,t){return r.length=t};var md=_export;var _d=toObject$e;var bd=lengthOfArrayLike$d;var wd=gd;var Ed=doesNotExceedSafeInteger$4;var Td=fails$u;var Ad=Td((function(){return[].push.call({length:4294967296},1)!==4294967297}));var properErrorOnNonWritableLength=function(){try{Object.defineProperty([],"length",{writable:false}).push()}catch(r){return r instanceof TypeError}};var Sd=Ad||!properErrorOnNonWritableLength();md({target:"Array",proto:true,arity:1,forced:Sd},{push:function push(t){var a=_d(this||r);var o=bd(a);var i=arguments.length;Ed(o+i);for(var v=0;v<i;v++){a[o]=arguments[v];o++}wd(a,o);return o}});var xd=getBuiltInPrototypeMethod$g;var Od=xd("Array","push");var Id=ur;var kd=Od;var Pd=Array.prototype;var push$7=function(r){var t=r.push;return r===Pd||Id(Pd,r)&&t===Pd.push?kd:t};var Dd=push$7;var jd=Dd;var Cd=jd;var Fd=Cd;var Ld=Fd;var Rd=Ld;var Md=Rd;var Nd=getDefaultExportFromCjs(Md);function _iterableToArrayLimit(r,t){var a=null==r?null:"undefined"!=typeof bl&&Qp(r)||r["@@iterator"];if(null!=a){var o,i,v,u,c=[],l=!0,h=!1;try{if(v=(a=a.call(r)).next,0===t){if(Object(a)!==a)return;l=!1}else for(;!(l=(o=v.call(a)).done)&&(Nd(c).call(c,o.value),c.length!==t);l=!0);}catch(r){h=!0,i=r}finally{try{if(!l&&null!=a.return&&(u=a.return(),Object(u)!==u))return}finally{if(h)throw i}}return c}}var zd=_export;var $d=Qe;var qd=$a;var Hd=er;var Ud=toAbsoluteIndex$4;var Gd=lengthOfArrayLike$d;var Wd=toIndexedObject$a;var Vd=createProperty$6;var Yd=wellKnownSymbol$n;var Bd=arrayMethodHasSpeciesSupport$5;var Xd=Xv;var Kd=Bd("slice");var Qd=Yd("species");var Jd=Array;var Zd=Math.max;zd({target:"Array",proto:true,forced:!Kd},{slice:function slice(t,a){var o=Wd(this||r);var i=Gd(o);var v=Ud(t,i);var u=Ud(a===void 0?i:a,i);var c,l,h;if($d(o)){c=o.constructor;if(qd(c)&&(c===Jd||$d(c.prototype)))c=void 0;else if(Hd(c)){c=c[Qd];c===null&&(c=void 0)}if(c===Jd||c===void 0)return Xd(o,v,u)}l=new(c===void 0?Jd:c)(Zd(u-v,0));for(h=0;v<u;v++,h++)v in o&&Vd(l,h,o[v]);l.length=h;return l}});var ry=getBuiltInPrototypeMethod$g;var ty=ry("Array","slice");var ey=ur;var ay=ty;var ny=Array.prototype;var slice$5=function(r){var t=r.slice;return r===ny||ey(ny,r)&&t===ny.slice?ay:t};var oy=slice$5;var iy=oy;var vy=iy;var uy=vy;var sy=uy;var cy=sy;var ly=cy;var fy=getDefaultExportFromCjs(ly);var hy=zp;var py=hy;var dy=py;var yy=dy;var gy=yy;var my=getDefaultExportFromCjs(gy);function _arrayLikeToArray$4(r,t){(t==null||t>r.length)&&(t=r.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=r[a];return o}function _unsupportedIterableToArray$4(r,t){var a;if(r){if(typeof r==="string")return _arrayLikeToArray$4(r,t);var o=fy(a=Object.prototype.toString.call(r)).call(a,8,-1);o==="Object"&&r.constructor&&(o=r.constructor.name);return o==="Map"||o==="Set"?my(r):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray$4(r,t):void 0}}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _slicedToArray(r,t){return _arrayWithHoles(r)||_iterableToArrayLimit(r,t)||_unsupportedIterableToArray$4(r,t)||_nonIterableRest()}function _arrayWithoutHoles(r){if(ld(r))return _arrayLikeToArray$4(r)}function _iterableToArray(r){if(typeof bl!=="undefined"&&Qp(r)!=null||r["@@iterator"]!=null)return my(r)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray$4(r)||_nonIterableSpread()}var _y=Oc;var by=getDefaultExportFromCjs(_y);var wy=getBuiltInPrototypeMethod$g;var Ey=wy("Array","concat");var Ty=ur;var Ay=Ey;var Sy=Array.prototype;var concat$4=function(r){var t=r.concat;return r===Sy||Ty(Sy,r)&&t===Sy.concat?Ay:t};var xy=concat$4;var Oy=xy;var Iy=Oy;var ky=getDefaultExportFromCjs(Iy);var Py=iy;var Dy=getDefaultExportFromCjs(Py);var jy=getBuiltIn$f;var Cy=b;var Fy=uo;var Ly=Ao;var Ry=anObject$d;var My=Cy([].concat);var Ny=jy("Reflect","ownKeys")||function ownKeys(r){var t=Fy.f(Ry(r));var a=Ly.f;return a?My(t,a(r)):t};var zy=_export;var $y=Ny;zy({target:"Reflect",stat:true},{ownKeys:$y});var qy=ar;var Hy=qy.Reflect.ownKeys;var Uy=Hy;var Gy=Uy;var Wy=Gy;var Vy=getDefaultExportFromCjs(Wy);var Yy=od;var By=getDefaultExportFromCjs(Yy);var Xy=_export;var Ky=toObject$e;var Qy=Ln;var Jy=fails$u;var Zy=Jy((function(){Qy(1)}));Xy({target:"Object",stat:true,forced:Zy},{keys:function keys(r){return Qy(Ky(r))}});var rg=ar;var tg=rg.Object.keys;var eg=tg;var ag=eg;var ng=ag;var og=getDefaultExportFromCjs(ng);var ig=wi.forEach;var vg=arrayMethodIsStrict$4;var ug=vg("forEach");var sg=ug?[].forEach:function forEach(t){return ig(this||r,t,arguments.length>1?arguments[1]:void 0)};var cg=_export;var lg=sg;cg({target:"Array",proto:true,forced:[].forEach!==lg},{forEach:lg});var fg=getBuiltInPrototypeMethod$g;var hg=fg("Array","forEach");var pg=hg;var dg=pg;var yg=wa;var gg=nt;var mg=ur;var _g=dg;var bg=Array.prototype;var wg={DOMTokenList:true,NodeList:true};var forEach$5=function(r){var t=r.forEach;return r===bg||mg(bg,r)&&t===bg.forEach||gg(wg,yg(r))?_g:t};var Eg=forEach$5;var Tg=getDefaultExportFromCjs(Eg);var Ag=_export;var Sg=b;var xg=Qe;var Og=Sg([].reverse);var Ig=[1,2];Ag({target:"Array",proto:true,forced:String(Ig)===String(Ig.reverse())},{reverse:function reverse(){xg(this||r)&&((this||r).length=(this||r).length);return Og(this||r)}});var kg=getBuiltInPrototypeMethod$g;var Pg=kg("Array","reverse");var Dg=ur;var jg=Pg;var Cg=Array.prototype;var reverse$5=function(r){var t=r.reverse;return r===Cg||Dg(Cg,r)&&t===Cg.reverse?jg:t};var Fg=reverse$5;var Lg=Fg;var Rg=Lg;var Mg=getDefaultExportFromCjs(Rg);var Ng=tryToString$6;var zg=TypeError;var deletePropertyOrThrow$2=function(r,t){if(!delete r[t])throw new zg("Cannot delete property "+Ng(t)+" of "+Ng(r))};var $g=_export;var qg=toObject$e;var Hg=toAbsoluteIndex$4;var Ug=toIntegerOrInfinity$4;var Gg=lengthOfArrayLike$d;var Wg=gd;var Vg=doesNotExceedSafeInteger$4;var Yg=arraySpeciesCreate$4;var Bg=createProperty$6;var Xg=deletePropertyOrThrow$2;var Kg=arrayMethodHasSpeciesSupport$5;var Qg=Kg("splice");var Jg=Math.max;var Zg=Math.min;$g({target:"Array",proto:true,forced:!Qg},{splice:function splice(t,a){var o=qg(this||r);var i=Gg(o);var v=Hg(t,i);var u=arguments.length;var c,l,h,p,d,y;if(u===0)c=l=0;else if(u===1){c=0;l=i-v}else{c=u-2;l=Zg(Jg(Ug(a),0),i-v)}Vg(i+c-l);h=Yg(o,l);for(p=0;p<l;p++){d=v+p;d in o&&Bg(h,p,o[d])}h.length=l;if(c<l){for(p=v;p<i-l;p++){d=p+l;y=p+c;d in o?o[y]=o[d]:Xg(o,y)}for(p=i;p>i-l+c;p--)Xg(o,p-1)}else if(c>l)for(p=i-l;p>v;p--){d=p+l-1;y=p+c-1;d in o?o[y]=o[d]:Xg(o,y)}for(p=0;p<c;p++)o[p+v]=arguments[p+2];Wg(o,i-l+c);return h}});var rm=getBuiltInPrototypeMethod$g;var tm=rm("Array","splice");var em=ur;var am=tm;var nm=Array.prototype;var splice$2=function(r){var t=r.splice;return r===nm||em(nm,r)&&t===nm.splice?am:t};var om=splice$2;var im=om;var vm=im;var um=getDefaultExportFromCjs(vm);var sm=L;var cm=b;var lm=N;var fm=fails$u;var hm=Ln;var pm=Ao;var dm=z;var ym=toObject$e;var gm=B;var mm=Object.assign;var _m=Object.defineProperty;var bm=cm([].concat);var wm=!mm||fm((function(){if(sm&&mm({b:1},mm(_m({},"a",{enumerable:true,get:function(){_m(this||r,"b",{value:3,enumerable:false})}}),{b:2})).b!==1)return true;var t={};var a={};var o=Symbol("assign detection");var i="abcdefghijklmnopqrst";t[o]=7;i.split("").forEach((function(r){a[r]=r}));return mm({},t)[o]!==7||hm(mm({},a)).join("")!==i}))?function assign(r,t){var a=ym(r);var o=arguments.length;var i=1;var v=pm.f;var u=dm.f;while(o>i){var c=gm(arguments[i++]);var l=v?bm(hm(c),v(c)):hm(c);var h=l.length;var p=0;var d;while(h>p){d=l[p++];sm&&!lm(u,c,d)||(a[d]=c[d])}}return a}:mm;var Em=_export;var Tm=wm;Em({target:"Object",stat:true,arity:2,forced:Object.assign!==Tm},{assign:Tm});var Am=ar;var Sm=Am.Object.assign;var xm=Sm;var Om=xm;var Im=Om;var km=getDefaultExportFromCjs(Im);var Pm=_export;var Dm=fails$u;var jm=toObject$e;var Cm=ys;var Fm=vs;var Lm=Dm((function(){Cm(1)}));Pm({target:"Object",stat:true,forced:Lm,sham:!Fm},{getPrototypeOf:function getPrototypeOf(r){return Cm(jm(r))}});var Rm=ar;var Mm=Rm.Object.getPrototypeOf;var Nm=Mm;var zm=Nm;var $m=_export;var qm=L;var Hm=vo;$m({target:"Object",stat:true,sham:!qm},{create:Hm});var Um=ar;var Gm=Um.Object;var Wm=function create(r,t){return Gm.create(r,t)};var Vm=Wm;var Ym=Vm;var Bm=Ym;var Xm=getDefaultExportFromCjs(Bm);var Km=ar;var Qm=d;Km.JSON||(Km.JSON={stringify:JSON.stringify});var Jm=function stringify(r,t,a){return Qm(Km.JSON.stringify,null,arguments)};var Zm=Jm;var r_=Zm;var t_=r_;var e_=getDefaultExportFromCjs(t_);var a_=typeof Bun=="function"&&Bun&&typeof Bun.version=="string";var n_=TypeError;var validateArgumentsLength$2=function(r,t){if(r<t)throw new n_("Not enough arguments");return r};var o_=i;var i_=d;var v_=D;var u_=a_;var s_=sr;var c_=Xv;var l_=validateArgumentsLength$2;var f_=o_.Function;var h_=/MSIE .\./.test(s_)||u_&&function(){var r=o_.Bun.version.split(".");return r.length<3||r[0]==="0"&&(r[1]<3||r[1]==="3"&&r[2]==="0")}();var schedulersFix$2=function(t,a){var o=a?2:1;return h_?function(i,v){var u=l_(arguments.length,1)>o;var c=v_(i)?i:f_(i);var l=u?c_(arguments,o):[];var h=u?function(){i_(c,this||r,l)}:c;return a?t(h,v):t(h)}:t};var p_=_export;var d_=i;var y_=schedulersFix$2;var g_=y_(d_.setInterval,true);p_({global:true,bind:true,forced:d_.setInterval!==g_},{setInterval:g_});var m_=_export;var __=i;var b_=schedulersFix$2;var w_=b_(__.setTimeout,true);m_({global:true,bind:true,forced:__.setTimeout!==w_},{setTimeout:w_});var E_=ar;var T_=E_.setTimeout;var A_=T_;var S_=getDefaultExportFromCjs(A_);var x_={exports:{}};(function(t){function Emitter(t){if(t)return mixin(t);(this||r)._callbacks=new Map}function mixin(r){Object.assign(r,Emitter.prototype);r._callbacks=new Map;return r}Emitter.prototype.on=function(t,a){const o=(this||r)._callbacks.get(t)??[];o.push(a);(this||r)._callbacks.set(t,o);return this||r};Emitter.prototype.once=function(t,a){const on=(...o)=>{this.off(t,on);a.apply(this||r,o)};on.fn=a;this.on(t,on);return this||r};Emitter.prototype.off=function(t,a){if(t===void 0&&a===void 0){(this||r)._callbacks.clear();return this||r}if(a===void 0){(this||r)._callbacks.delete(t);return this||r}const o=(this||r)._callbacks.get(t);if(o){for(const[r,t]of o.entries())if(t===a||t.fn===a){o.splice(r,1);break}o.length===0?(this||r)._callbacks.delete(t):(this||r)._callbacks.set(t,o)}return this||r};Emitter.prototype.emit=function(t,...a){const o=(this||r)._callbacks.get(t);if(o){const t=[...o];for(const o of t)o.apply(this||r,a)}return this||r};Emitter.prototype.listeners=function(t){return(this||r)._callbacks.get(t)??[]};Emitter.prototype.listenerCount=function(t){if(t)return this.listeners(t).length;let a=0;for(const t of(this||r)._callbacks.values())a+=t.length;return a};Emitter.prototype.hasListeners=function(r){return this.listenerCount(r)>0};Emitter.prototype.addEventListener=Emitter.prototype.on;Emitter.prototype.removeListener=Emitter.prototype.off;Emitter.prototype.removeEventListener=Emitter.prototype.off;Emitter.prototype.removeAllListeners=Emitter.prototype.off;t.exports=Emitter})(x_);var O_=x_.exports;var I_=getDefaultExportFromCjs(O_);function _extends(){_extends=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r};return _extends.apply(this||r,arguments)}function _inheritsLoose(r,t){r.prototype=Object.create(t.prototype);r.prototype.constructor=r;r.__proto__=t}function _assertThisInitialized$1(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}
/**
   * @private
   * extend object.
   * means that properties in dest will be overwritten by the ones in src.
   * @param {Object} target
   * @param {...Object} objects_to_assign
   * @returns {Object} target
   */var k_;k_=typeof Object.assign!=="function"?function assign(r){if(r===void 0||r===null)throw new TypeError("Cannot convert undefined or null to object");var t=Object(r);for(var a=1;a<arguments.length;a++){var o=arguments[a];if(o!==void 0&&o!==null)for(var i in o)o.hasOwnProperty(i)&&(t[i]=o[i])}return t}:Object.assign;var P_=k_;var D_=["","webkit","Moz","MS","ms","o"];var j_=typeof document==="undefined"?{style:{}}:document.createElement("div");var C_="function";var F_=Math.round,L_=Math.abs;var R_=Date.now;
/**
   * @private
   * get the prefixed property
   * @param {Object} obj
   * @param {String} property
   * @returns {String|Undefined} prefixed
   */function prefixed(r,t){var a;var o;var i=t[0].toUpperCase()+t.slice(1);var v=0;while(v<D_.length){a=D_[v];o=a?a+i:t;if(o in r)return o;v++}}var M_;M_=typeof window==="undefined"?{}:window;var N_=prefixed(j_.style,"touchAction");var z_=N_!==void 0;function getTouchActionProps(){if(!z_)return false;var r={};var t=M_.CSS&&M_.CSS.supports;["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(a){return r[a]=!t||M_.CSS.supports("touch-action",a)}));return r}var $_="compute";var q_="auto";var H_="manipulation";var U_="none";var G_="pan-x";var W_="pan-y";var V_=getTouchActionProps();var Y_=/mobile|tablet|ip(ad|hone|od)|android/i;var B_="ontouchstart"in M_;var X_=prefixed(M_,"PointerEvent")!==void 0;var K_=B_&&Y_.test(navigator.userAgent);var Q_="touch";var J_="pen";var Z_="mouse";var rb="kinect";var tb=25;var eb=1;var ab=2;var nb=4;var ob=8;var ib=1;var vb=2;var ub=4;var sb=8;var cb=16;var lb=vb|ub;var fb=sb|cb;var hb=lb|fb;var pb=["x","y"];var db=["clientX","clientY"];
/**
   * @private
   * walk objects and arrays
   * @param {Object} obj
   * @param {Function} iterator
   * @param {Object} context
   */function each(r,t,a){var o;if(r)if(r.forEach)r.forEach(t,a);else if(r.length!==void 0){o=0;while(o<r.length){t.call(a,r[o],o,r);o++}}else for(o in r)r.hasOwnProperty(o)&&t.call(a,r[o],o,r)}
/**
   * @private
   * let a boolean value also be a function that must return a boolean
   * this first item in args will be used as the context
   * @param {Boolean|Function} val
   * @param {Array} [args]
   * @returns {Boolean}
   */function boolOrFn(r,t){return typeof r===C_?r.apply(t&&t[0]||void 0,t):r}
/**
   * @private
   * small indexOf wrapper
   * @param {String} str
   * @param {String} find
   * @returns {Boolean} found
   */function inStr(r,t){return r.indexOf(t)>-1}
/**
   * @private
   * when the touchActions are collected they are not a valid value, so we need to clean things up. *
   * @param {String} actions
   * @returns {*}
   */function cleanTouchActions(r){if(inStr(r,U_))return U_;var t=inStr(r,G_);var a=inStr(r,W_);return t&&a?U_:t||a?t?G_:W_:inStr(r,H_)?H_:q_}
/**
   * @private
   * Touch Action
   * sets the touchAction property or uses the js alternative
   * @param {Manager} manager
   * @param {String} value
   * @constructor
   */var yb=function(){function TouchAction(t,a){(this||r).manager=t;this.set(a)}
/**
     * @private
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */var t=TouchAction.prototype;t.set=function set(t){t===$_&&(t=this.compute());z_&&(this||r).manager.element.style&&V_[t]&&((this||r).manager.element.style[N_]=t);(this||r).actions=t.toLowerCase().trim()};t.update=function update(){this.set((this||r).manager.options.touchAction)};
/**
     * @private
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */t.compute=function compute(){var t=[];each((this||r).manager.recognizers,(function(r){boolOrFn(r.options.enable,[r])&&(t=t.concat(r.getTouchAction()))}));return cleanTouchActions(t.join(" "))};
/**
     * @private
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */t.preventDefaults=function preventDefaults(t){var a=t.srcEvent;var o=t.offsetDirection;if((this||r).manager.session.prevented)a.preventDefault();else{var i=(this||r).actions;var v=inStr(i,U_)&&!V_[U_];var u=inStr(i,W_)&&!V_[W_];var c=inStr(i,G_)&&!V_[G_];if(v){var l=t.pointers.length===1;var h=t.distance<2;var p=t.deltaTime<250;if(l&&h&&p)return}if(!c||!u)return v||u&&o&lb||c&&o&fb?this.preventSrc(a):void 0}};
/**
     * @private
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */t.preventSrc=function preventSrc(t){(this||r).manager.session.prevented=true;t.preventDefault()};return TouchAction}();
/**
   * @private
   * find if a node is in the given parent
   * @method hasParent
   * @param {HTMLElement} node
   * @param {HTMLElement} parent
   * @return {Boolean} found
   */function hasParent(r,t){while(r){if(r===t)return true;r=r.parentNode}return false}
/**
   * @private
   * get the center of all the pointers
   * @param {Array} pointers
   * @return {Object} center contains `x` and `y` properties
   */function getCenter(r){var t=r.length;if(t===1)return{x:F_(r[0].clientX),y:F_(r[0].clientY)};var a=0;var o=0;var i=0;while(i<t){a+=r[i].clientX;o+=r[i].clientY;i++}return{x:F_(a/t),y:F_(o/t)}}
/**
   * @private
   * create a simple clone from the input used for storage of firstInput and firstMultiple
   * @param {Object} input
   * @returns {Object} clonedInputData
   */function simpleCloneInputData(r){var t=[];var a=0;while(a<r.pointers.length){t[a]={clientX:F_(r.pointers[a].clientX),clientY:F_(r.pointers[a].clientY)};a++}return{timeStamp:R_(),pointers:t,center:getCenter(t),deltaX:r.deltaX,deltaY:r.deltaY}}
/**
   * @private
   * calculate the absolute distance between two points
   * @param {Object} p1 {x, y}
   * @param {Object} p2 {x, y}
   * @param {Array} [props] containing x and y keys
   * @return {Number} distance
   */function getDistance(r,t,a){a||(a=pb);var o=t[a[0]]-r[a[0]];var i=t[a[1]]-r[a[1]];return Math.sqrt(o*o+i*i)}
/**
   * @private
   * calculate the angle between two coordinates
   * @param {Object} p1
   * @param {Object} p2
   * @param {Array} [props] containing x and y keys
   * @return {Number} angle
   */function getAngle(r,t,a){a||(a=pb);var o=t[a[0]]-r[a[0]];var i=t[a[1]]-r[a[1]];return Math.atan2(i,o)*180/Math.PI}
/**
   * @private
   * get the direction between two points
   * @param {Number} x
   * @param {Number} y
   * @return {Number} direction
   */function getDirection(r,t){return r===t?ib:L_(r)>=L_(t)?r<0?vb:ub:t<0?sb:cb}function computeDeltaXY(r,t){var a=t.center;var o=r.offsetDelta||{};var i=r.prevDelta||{};var v=r.prevInput||{};if(t.eventType===eb||v.eventType===nb){i=r.prevDelta={x:v.deltaX||0,y:v.deltaY||0};o=r.offsetDelta={x:a.x,y:a.y}}t.deltaX=i.x+(a.x-o.x);t.deltaY=i.y+(a.y-o.y)}
/**
   * @private
   * calculate the velocity between two points. unit is in px per ms.
   * @param {Number} deltaTime
   * @param {Number} x
   * @param {Number} y
   * @return {Object} velocity `x` and `y`
   */function getVelocity(r,t,a){return{x:t/r||0,y:a/r||0}}
/**
   * @private
   * calculate the scale factor between two pointersets
   * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
   * @param {Array} start array of pointers
   * @param {Array} end array of pointers
   * @return {Number} scale
   */function getScale(r,t){return getDistance(t[0],t[1],db)/getDistance(r[0],r[1],db)}
/**
   * @private
   * calculate the rotation degrees between two pointersets
   * @param {Array} start array of pointers
   * @param {Array} end array of pointers
   * @return {Number} rotation
   */function getRotation(r,t){return getAngle(t[1],t[0],db)+getAngle(r[1],r[0],db)}
/**
   * @private
   * velocity is calculated every x ms
   * @param {Object} session
   * @param {Object} input
   */function computeIntervalInputData(r,t){var a=r.lastInterval||t;var o=t.timeStamp-a.timeStamp;var i;var v;var u;var c;if(t.eventType!==ob&&(o>tb||a.velocity===void 0)){var l=t.deltaX-a.deltaX;var h=t.deltaY-a.deltaY;var p=getVelocity(o,l,h);v=p.x;u=p.y;i=L_(p.x)>L_(p.y)?p.x:p.y;c=getDirection(l,h);r.lastInterval=t}else{i=a.velocity;v=a.velocityX;u=a.velocityY;c=a.direction}t.velocity=i;t.velocityX=v;t.velocityY=u;t.direction=c}
/**
  * @private
   * extend the data with some usable properties like scale, rotate, velocity etc
   * @param {Object} manager
   * @param {Object} input
   */function computeInputData(r,t){var a=r.session;var o=t.pointers;var i=o.length;a.firstInput||(a.firstInput=simpleCloneInputData(t));i>1&&!a.firstMultiple?a.firstMultiple=simpleCloneInputData(t):i===1&&(a.firstMultiple=false);var v=a.firstInput,u=a.firstMultiple;var c=u?u.center:v.center;var l=t.center=getCenter(o);t.timeStamp=R_();t.deltaTime=t.timeStamp-v.timeStamp;t.angle=getAngle(c,l);t.distance=getDistance(c,l);computeDeltaXY(a,t);t.offsetDirection=getDirection(t.deltaX,t.deltaY);var h=getVelocity(t.deltaTime,t.deltaX,t.deltaY);t.overallVelocityX=h.x;t.overallVelocityY=h.y;t.overallVelocity=L_(h.x)>L_(h.y)?h.x:h.y;t.scale=u?getScale(u.pointers,o):1;t.rotation=u?getRotation(u.pointers,o):0;t.maxPointers=a.prevInput?t.pointers.length>a.prevInput.maxPointers?t.pointers.length:a.prevInput.maxPointers:t.pointers.length;computeIntervalInputData(a,t);var p=r.element;var d=t.srcEvent;var y;y=d.composedPath?d.composedPath()[0]:d.path?d.path[0]:d.target;hasParent(y,p)&&(p=y);t.target=p}
/**
   * @private
   * handle input events
   * @param {Manager} manager
   * @param {String} eventType
   * @param {Object} input
   */function inputHandler(r,t,a){var o=a.pointers.length;var i=a.changedPointers.length;var v=t&eb&&o-i===0;var u=t&(nb|ob)&&o-i===0;a.isFirst=!!v;a.isFinal=!!u;v&&(r.session={});a.eventType=t;computeInputData(r,a);r.emit("hammer.input",a);r.recognize(a);r.session.prevInput=a}
/**
   * @private
   * split string on whitespace
   * @param {String} str
   * @returns {Array} words
   */function splitStr(r){return r.trim().split(/\s+/g)}
/**
   * @private
   * addEventListener with multiple events at once
   * @param {EventTarget} target
   * @param {String} types
   * @param {Function} handler
   */function addEventListeners(r,t,a){each(splitStr(t),(function(t){r.addEventListener(t,a,false)}))}
/**
   * @private
   * removeEventListener with multiple events at once
   * @param {EventTarget} target
   * @param {String} types
   * @param {Function} handler
   */function removeEventListeners(r,t,a){each(splitStr(t),(function(t){r.removeEventListener(t,a,false)}))}
/**
   * @private
   * get the window object of an element
   * @param {HTMLElement} element
   * @returns {DocumentView|Window}
   */function getWindowForElement(r){var t=r.ownerDocument||r;return t.defaultView||t.parentWindow||window}
/**
   * @private
   * create new input type manager
   * @param {Manager} manager
   * @param {Function} callback
   * @returns {Input}
   * @constructor
   */var gb=function(){function Input(t,a){var o=this||r;(this||r).manager=t;(this||r).callback=a;(this||r).element=t.element;(this||r).target=t.options.inputTarget;(this||r).domHandler=function(r){boolOrFn(t.options.enable,[t])&&o.handler(r)};this.init()}var t=Input.prototype;t.handler=function handler(){};t.init=function init(){(this||r).evEl&&addEventListeners((this||r).element,(this||r).evEl,(this||r).domHandler);(this||r).evTarget&&addEventListeners((this||r).target,(this||r).evTarget,(this||r).domHandler);(this||r).evWin&&addEventListeners(getWindowForElement((this||r).element),(this||r).evWin,(this||r).domHandler)};t.destroy=function destroy(){(this||r).evEl&&removeEventListeners((this||r).element,(this||r).evEl,(this||r).domHandler);(this||r).evTarget&&removeEventListeners((this||r).target,(this||r).evTarget,(this||r).domHandler);(this||r).evWin&&removeEventListeners(getWindowForElement((this||r).element),(this||r).evWin,(this||r).domHandler)};return Input}();
/**
   * @private
   * find if a array contains the object using indexOf or a simple polyFill
   * @param {Array} src
   * @param {String} find
   * @param {String} [findByKey]
   * @return {Boolean|Number} false when not found, or the index
   */function inArray(r,t,a){if(r.indexOf&&!a)return r.indexOf(t);var o=0;while(o<r.length){if(a&&r[o][a]==t||!a&&r[o]===t)return o;o++}return-1}var mb={pointerdown:eb,pointermove:ab,pointerup:nb,pointercancel:ob,pointerout:ob};var _b={2:Q_,3:J_,4:Z_,5:rb};var bb="pointerdown";var wb="pointermove pointerup pointercancel";if(M_.MSPointerEvent&&!M_.PointerEvent){bb="MSPointerDown";wb="MSPointerMove MSPointerUp MSPointerCancel"}var Eb=function(t){_inheritsLoose(PointerEventInput,t);function PointerEventInput(){var a;var o=PointerEventInput.prototype;o.evEl=bb;o.evWin=wb;a=t.apply(this||r,arguments)||this||r;a.store=a.manager.session.pointerEvents=[];return a}
/**
     * @private
     * handle mouse events
     * @param {Object} ev
     */var a=PointerEventInput.prototype;a.handler=function handler(t){var a=(this||r).store;var o=false;var i=t.type.toLowerCase().replace("ms","");var v=mb[i];var u=_b[t.pointerType]||t.pointerType;var c=u===Q_;var l=inArray(a,t.pointerId,"pointerId");if(v&eb&&(t.button===0||c)){if(l<0){a.push(t);l=a.length-1}}else v&(nb|ob)&&(o=true);if(!(l<0)){a[l]=t;this.callback((this||r).manager,v,{pointers:a,changedPointers:[t],pointerType:u,srcEvent:t});o&&a.splice(l,1)}};return PointerEventInput}(gb);
/**
   * @private
   * convert array-like objects to real arrays
   * @param {Object} obj
   * @returns {Array}
   */function toArray(r){return Array.prototype.slice.call(r,0)}
/**
   * @private
   * unique array with objects based on a key (like 'id') or just by the array's value
   * @param {Array} src [{id:1},{id:2},{id:1}]
   * @param {String} [key]
   * @param {Boolean} [sort=False]
   * @returns {Array} [{id:1},{id:2}]
   */function uniqueArray(r,t,a){var o=[];var i=[];var v=0;while(v<r.length){var u=t?r[v][t]:r[v];inArray(i,u)<0&&o.push(r[v]);i[v]=u;v++}a&&(o=t?o.sort((function(r,a){return r[t]>a[t]})):o.sort());return o}var Tb={touchstart:eb,touchmove:ab,touchend:nb,touchcancel:ob};var Ab="touchstart touchmove touchend touchcancel";var Sb=function(t){_inheritsLoose(TouchInput,t);function TouchInput(){var a;TouchInput.prototype.evTarget=Ab;a=t.apply(this||r,arguments)||this||r;a.targetIds={};return a}var a=TouchInput.prototype;a.handler=function handler(t){var a=Tb[t.type];var o=getTouches.call(this||r,t,a);o&&this.callback((this||r).manager,a,{pointers:o[0],changedPointers:o[1],pointerType:Q_,srcEvent:t})};return TouchInput}(gb);function getTouches(t,a){var o=toArray(t.touches);var i=(this||r).targetIds;if(a&(eb|ab)&&o.length===1){i[o[0].identifier]=true;return[o,o]}var v;var u;var c=toArray(t.changedTouches);var l=[];var h=(this||r).target;u=o.filter((function(r){return hasParent(r.target,h)}));if(a===eb){v=0;while(v<u.length){i[u[v].identifier]=true;v++}}v=0;while(v<c.length){i[c[v].identifier]&&l.push(c[v]);a&(nb|ob)&&delete i[c[v].identifier];v++}if(l.length)return[uniqueArray(u.concat(l),"identifier",true),l]}var xb={mousedown:eb,mousemove:ab,mouseup:nb};var Ob="mousedown";var Ib="mousemove mouseup";var kb=function(t){_inheritsLoose(MouseInput,t);function MouseInput(){var a;var o=MouseInput.prototype;o.evEl=Ob;o.evWin=Ib;a=t.apply(this||r,arguments)||this||r;a.pressed=false;return a}
/**
     * @private
     * handle mouse events
     * @param {Object} ev
     */var a=MouseInput.prototype;a.handler=function handler(t){var a=xb[t.type];a&eb&&t.button===0&&((this||r).pressed=true);a&ab&&t.which!==1&&(a=nb);if((this||r).pressed){a&nb&&((this||r).pressed=false);this.callback((this||r).manager,a,{pointers:[t],changedPointers:[t],pointerType:Z_,srcEvent:t})}};return MouseInput}(gb);var Pb=2500;var Db=25;function setLastTouch(t){var a=t.changedPointers,o=a[0];if(o.identifier===(this||r).primaryTouch){var i={x:o.clientX,y:o.clientY};var v=(this||r).lastTouches;(this||r).lastTouches.push(i);var u=function removeLastTouch(){var r=v.indexOf(i);r>-1&&v.splice(r,1)};setTimeout(u,Pb)}}function recordTouches(t,a){if(t&eb){(this||r).primaryTouch=a.changedPointers[0].identifier;setLastTouch.call(this||r,a)}else t&(nb|ob)&&setLastTouch.call(this||r,a)}function isSyntheticEvent(t){var a=t.srcEvent.clientX;var o=t.srcEvent.clientY;for(var i=0;i<(this||r).lastTouches.length;i++){var v=(this||r).lastTouches[i];var u=Math.abs(a-v.x);var c=Math.abs(o-v.y);if(u<=Db&&c<=Db)return true}return false}var jb=function(){var t=function(t){_inheritsLoose(TouchMouseInput,t);function TouchMouseInput(a,o){var i;i=t.call(this||r,a,o)||this||r;i.handler=function(r,t,a){var o=a.pointerType===Q_;var v=a.pointerType===Z_;if(!(v&&a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents)){if(o)recordTouches.call(_assertThisInitialized$1(_assertThisInitialized$1(i)),t,a);else if(v&&isSyntheticEvent.call(_assertThisInitialized$1(_assertThisInitialized$1(i)),a))return;i.callback(r,t,a)}};i.touch=new Sb(i.manager,i.handler);i.mouse=new kb(i.manager,i.handler);i.primaryTouch=null;i.lastTouches=[];return i}
/**
       * @private
       * handle mouse and touch events
       * @param {Hammer} manager
       * @param {String} inputEvent
       * @param {Object} inputData
       */var a=TouchMouseInput.prototype;a.destroy=function destroy(){(this||r).touch.destroy();(this||r).mouse.destroy()};return TouchMouseInput}(gb);return t}();
/**
   * @private
   * create new input type manager
   * called by the Manager constructor
   * @param {Hammer} manager
   * @returns {Input}
   */function createInputInstance(r){var t;var a=r.options.inputClass;t=a||(X_?Eb:K_?Sb:B_?jb:kb);return new t(r,inputHandler)}
/**
   * @private
   * if the argument is an array, we want to execute the fn on each entry
   * if it aint an array we don't want to do a thing.
   * this is used by all the methods that accept a single and array argument.
   * @param {*|Array} arg
   * @param {String} fn
   * @param {Object} [context]
   * @returns {Boolean}
   */function invokeArrayArg(r,t,a){if(Array.isArray(r)){each(r,a[t],a);return true}return false}var Cb=1;var Fb=2;var Lb=4;var Rb=8;var Mb=Rb;var Nb=16;var zb=32;
/**
   * @private
   * get a unique id
   * @returns {number} uniqueId
   */var $b=1;function uniqueId(){return $b++}
/**
   * @private
   * get a recognizer by name if it is bound to a manager
   * @param {Recognizer|String} otherRecognizer
   * @param {Recognizer} recognizer
   * @returns {Recognizer}
   */function getRecognizerByNameIfManager(r,t){var a=t.manager;return a?a.get(r):r}
/**
   * @private
   * get a usable string, used as event postfix
   * @param {constant} state
   * @returns {String} state
   */function stateStr(r){return r&Nb?"cancel":r&Rb?"end":r&Lb?"move":r&Fb?"start":""}
/**
   * @private
   * Recognizer
   * Every recognizer needs to extend from this class.
   * @constructor
   * @param {Object} options
   */var qb=function(){function Recognizer(t){t===void 0&&(t={});(this||r).options=_extends({enable:true},t);(this||r).id=uniqueId();(this||r).manager=null;(this||r).state=Cb;(this||r).simultaneous={};(this||r).requireFail=[]}
/**
     * @private
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */var t=Recognizer.prototype;t.set=function set(t){P_((this||r).options,t);(this||r).manager&&(this||r).manager.touchAction.update();return this||r};
/**
     * @private
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */t.recognizeWith=function recognizeWith(t){if(invokeArrayArg(t,"recognizeWith",this||r))return this||r;var a=(this||r).simultaneous;t=getRecognizerByNameIfManager(t,this||r);if(!a[t.id]){a[t.id]=t;t.recognizeWith(this||r)}return this||r};
/**
     * @private
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */t.dropRecognizeWith=function dropRecognizeWith(t){if(invokeArrayArg(t,"dropRecognizeWith",this||r))return this||r;t=getRecognizerByNameIfManager(t,this||r);delete(this||r).simultaneous[t.id];return this||r};
/**
     * @private
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */t.requireFailure=function requireFailure(t){if(invokeArrayArg(t,"requireFailure",this||r))return this||r;var a=(this||r).requireFail;t=getRecognizerByNameIfManager(t,this||r);if(inArray(a,t)===-1){a.push(t);t.requireFailure(this||r)}return this||r};
/**
     * @private
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */t.dropRequireFailure=function dropRequireFailure(t){if(invokeArrayArg(t,"dropRequireFailure",this||r))return this||r;t=getRecognizerByNameIfManager(t,this||r);var a=inArray((this||r).requireFail,t);a>-1&&(this||r).requireFail.splice(a,1);return this||r};
/**
     * @private
     * has require failures boolean
     * @returns {boolean}
     */t.hasRequireFailures=function hasRequireFailures(){return(this||r).requireFail.length>0};
/**
     * @private
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */t.canRecognizeWith=function canRecognizeWith(t){return!!(this||r).simultaneous[t.id]};
/**
     * @private
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */t.emit=function emit(t){var a=this||r;var o=(this||r).state;function emit(r){a.manager.emit(r,t)}o<Rb&&emit(a.options.event+stateStr(o));emit(a.options.event);t.additionalEvent&&emit(t.additionalEvent);o>=Rb&&emit(a.options.event+stateStr(o))};
/**
     * @private
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */t.tryEmit=function tryEmit(t){if(this.canEmit())return this.emit(t);(this||r).state=zb};
/**
     * @private
     * can we emit?
     * @returns {boolean}
     */t.canEmit=function canEmit(){var t=0;while(t<(this||r).requireFail.length){if(!((this||r).requireFail[t].state&(zb|Cb)))return false;t++}return true};
/**
     * @private
     * update the recognizer
     * @param {Object} inputData
     */t.recognize=function recognize(t){var a=P_({},t);if(boolOrFn((this||r).options.enable,[this||r,a])){(this||r).state&(Mb|Nb|zb)&&((this||r).state=Cb);(this||r).state=this.process(a);(this||r).state&(Fb|Lb|Rb|Nb)&&this.tryEmit(a)}else{this.reset();(this||r).state=zb}};
/**
     * @private
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {constant} STATE
     */t.process=function process(r){};
/**
     * @private
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */t.getTouchAction=function getTouchAction(){};t.reset=function reset(){};return Recognizer}();var Hb=function(t){_inheritsLoose(TapRecognizer,t);function TapRecognizer(a){var o;a===void 0&&(a={});o=t.call(this||r,_extends({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},a))||this||r;o.pTime=false;o.pCenter=false;o._timer=null;o._input=null;o.count=0;return o}var a=TapRecognizer.prototype;a.getTouchAction=function getTouchAction(){return[H_]};a.process=function process(t){var a=this||r;var o=(this||r).options;var i=t.pointers.length===o.pointers;var v=t.distance<o.threshold;var u=t.deltaTime<o.time;this.reset();if(t.eventType&eb&&(this||r).count===0)return this.failTimeout();if(v&&u&&i){if(t.eventType!==nb)return this.failTimeout();var c=!(this||r).pTime||t.timeStamp-(this||r).pTime<o.interval;var l=!(this||r).pCenter||getDistance((this||r).pCenter,t.center)<o.posThreshold;(this||r).pTime=t.timeStamp;(this||r).pCenter=t.center;l&&c?(this||r).count+=1:(this||r).count=1;(this||r)._input=t;var h=(this||r).count%o.taps;if(h===0){if(this.hasRequireFailures()){(this||r)._timer=setTimeout((function(){a.state=Mb;a.tryEmit()}),o.interval);return Fb}return Mb}}return zb};a.failTimeout=function failTimeout(){var t=this||r;(this||r)._timer=setTimeout((function(){t.state=zb}),(this||r).options.interval);return zb};a.reset=function reset(){clearTimeout((this||r)._timer)};a.emit=function emit(){if((this||r).state===Mb){(this||r)._input.tapCount=(this||r).count;(this||r).manager.emit((this||r).options.event,(this||r)._input)}};return TapRecognizer}(qb);var Ub=function(t){_inheritsLoose(AttrRecognizer,t);function AttrRecognizer(a){a===void 0&&(a={});return t.call(this||r,_extends({pointers:1},a))||this||r}
/**
     * @private
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */var a=AttrRecognizer.prototype;a.attrTest=function attrTest(t){var a=(this||r).options.pointers;return a===0||t.pointers.length===a};
/**
     * @private
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */a.process=function process(t){var a=(this||r).state;var o=t.eventType;var i=a&(Fb|Lb);var v=this.attrTest(t);return i&&(o&ob||!v)?a|Nb:i||v?o&nb?a|Rb:a&Fb?a|Lb:Fb:zb};return AttrRecognizer}(qb);
/**
   * @private
   * direction cons to string
   * @param {constant} direction
   * @returns {String}
   */function directionStr(r){return r===cb?"down":r===sb?"up":r===vb?"left":r===ub?"right":""}var Gb=function(t){_inheritsLoose(PanRecognizer,t);function PanRecognizer(a){var o;a===void 0&&(a={});o=t.call(this||r,_extends({event:"pan",threshold:10,pointers:1,direction:hb},a))||this||r;o.pX=null;o.pY=null;return o}var a=PanRecognizer.prototype;a.getTouchAction=function getTouchAction(){var t=(this||r).options.direction;var a=[];t&lb&&a.push(W_);t&fb&&a.push(G_);return a};a.directionTest=function directionTest(t){var a=(this||r).options;var o=true;var i=t.distance;var v=t.direction;var u=t.deltaX;var c=t.deltaY;if(!(v&a.direction))if(a.direction&lb){v=u===0?ib:u<0?vb:ub;o=u!==(this||r).pX;i=Math.abs(t.deltaX)}else{v=c===0?ib:c<0?sb:cb;o=c!==(this||r).pY;i=Math.abs(t.deltaY)}t.direction=v;return o&&i>a.threshold&&v&a.direction};a.attrTest=function attrTest(t){return Ub.prototype.attrTest.call(this||r,t)&&((this||r).state&Fb||!((this||r).state&Fb)&&this.directionTest(t))};a.emit=function emit(a){(this||r).pX=a.deltaX;(this||r).pY=a.deltaY;var o=directionStr(a.direction);o&&(a.additionalEvent=(this||r).options.event+o);t.prototype.emit.call(this||r,a)};return PanRecognizer}(Ub);var Wb=function(t){_inheritsLoose(SwipeRecognizer,t);function SwipeRecognizer(a){a===void 0&&(a={});return t.call(this||r,_extends({event:"swipe",threshold:10,velocity:.3,direction:lb|fb,pointers:1},a))||this||r}var a=SwipeRecognizer.prototype;a.getTouchAction=function getTouchAction(){return Gb.prototype.getTouchAction.call(this||r)};a.attrTest=function attrTest(a){var o=(this||r).options.direction;var i;o&(lb|fb)?i=a.overallVelocity:o&lb?i=a.overallVelocityX:o&fb&&(i=a.overallVelocityY);return t.prototype.attrTest.call(this||r,a)&&o&a.offsetDirection&&a.distance>(this||r).options.threshold&&a.maxPointers===(this||r).options.pointers&&L_(i)>(this||r).options.velocity&&a.eventType&nb};a.emit=function emit(t){var a=directionStr(t.offsetDirection);a&&(this||r).manager.emit((this||r).options.event+a,t);(this||r).manager.emit((this||r).options.event,t)};return SwipeRecognizer}(Ub);var Vb=function(t){_inheritsLoose(PinchRecognizer,t);function PinchRecognizer(a){a===void 0&&(a={});return t.call(this||r,_extends({event:"pinch",threshold:0,pointers:2},a))||this||r}var a=PinchRecognizer.prototype;a.getTouchAction=function getTouchAction(){return[U_]};a.attrTest=function attrTest(a){return t.prototype.attrTest.call(this||r,a)&&(Math.abs(a.scale-1)>(this||r).options.threshold||(this||r).state&Fb)};a.emit=function emit(a){if(a.scale!==1){var o=a.scale<1?"in":"out";a.additionalEvent=(this||r).options.event+o}t.prototype.emit.call(this||r,a)};return PinchRecognizer}(Ub);var Yb=function(t){_inheritsLoose(RotateRecognizer,t);function RotateRecognizer(a){a===void 0&&(a={});return t.call(this||r,_extends({event:"rotate",threshold:0,pointers:2},a))||this||r}var a=RotateRecognizer.prototype;a.getTouchAction=function getTouchAction(){return[U_]};a.attrTest=function attrTest(a){return t.prototype.attrTest.call(this||r,a)&&(Math.abs(a.rotation)>(this||r).options.threshold||(this||r).state&Fb)};return RotateRecognizer}(Ub);var Bb=function(t){_inheritsLoose(PressRecognizer,t);function PressRecognizer(a){var o;a===void 0&&(a={});o=t.call(this||r,_extends({event:"press",pointers:1,time:251,threshold:9},a))||this||r;o._timer=null;o._input=null;return o}var a=PressRecognizer.prototype;a.getTouchAction=function getTouchAction(){return[q_]};a.process=function process(t){var a=this||r;var o=(this||r).options;var i=t.pointers.length===o.pointers;var v=t.distance<o.threshold;var u=t.deltaTime>o.time;(this||r)._input=t;if(!v||!i||t.eventType&(nb|ob)&&!u)this.reset();else if(t.eventType&eb){this.reset();(this||r)._timer=setTimeout((function(){a.state=Mb;a.tryEmit()}),o.time)}else if(t.eventType&nb)return Mb;return zb};a.reset=function reset(){clearTimeout((this||r)._timer)};a.emit=function emit(t){if((this||r).state===Mb)if(t&&t.eventType&nb)(this||r).manager.emit((this||r).options.event+"up",t);else{(this||r)._input.timeStamp=R_();(this||r).manager.emit((this||r).options.event,(this||r)._input)}};return PressRecognizer}(qb);var Xb={
/**
     * @private
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
domEvents:false,
/**
     * @private
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
touchAction:$_,
/**
     * @private
     * @type {Boolean}
     * @default true
     */
enable:true,
/**
     * @private
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
inputTarget:null,
/**
     * @private
     * force an input class
     * @type {Null|Function}
     * @default null
     */
inputClass:null,cssProps:{
/**
       * @private
       * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
       * @type {String}
       * @default 'none'
       */
userSelect:"none",
/**
       * @private
       * Disable the Windows Phone grippers when pressing an element.
       * @type {String}
       * @default 'none'
       */
touchSelect:"none",
/**
       * @private
       * Disables the default callout shown when you touch and hold a touch target.
       * On iOS, when you touch and hold a touch target such as a link, Safari displays
       * a callout containing information about the link. This property allows you to disable that callout.
       * @type {String}
       * @default 'none'
       */
touchCallout:"none",
/**
       * @private
       * Specifies whether zooming is enabled. Used by IE10>
       * @type {String}
       * @default 'none'
       */
contentZooming:"none",
/**
       * @private
       * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
       * @type {String}
       * @default 'none'
       */
userDrag:"none",
/**
       * @private
       * Overrides the highlight color shown when the user taps a link or a JavaScript
       * clickable element in iOS. This property obeys the alpha value, if specified.
       * @type {String}
       * @default 'rgba(0,0,0,0)'
       */
tapHighlightColor:"rgba(0,0,0,0)"}};
/**
   * @private
   * Default recognizer setup when calling `Hammer()`
   * When creating a new Manager these will be skipped.
   * This is separated with other defaults because of tree-shaking.
   * @type {Array}
   */var Kb=[[Yb,{enable:false}],[Vb,{enable:false},["rotate"]],[Wb,{direction:lb}],[Gb,{direction:lb},["swipe"]],[Hb],[Hb,{event:"doubletap",taps:2},["tap"]],[Bb]];var Qb=1;var Jb=2;
/**
   * @private
   * add/remove the css properties as defined in manager.options.cssProps
   * @param {Manager} manager
   * @param {Boolean} add
   */function toggleCssProps(r,t){var a=r.element;if(a.style){var o;each(r.options.cssProps,(function(i,v){o=prefixed(a.style,v);if(t){r.oldCssProps[o]=a.style[o];a.style[o]=i}else a.style[o]=r.oldCssProps[o]||""}));t||(r.oldCssProps={})}}
/**
   * @private
   * trigger dom event
   * @param {String} event
   * @param {Object} data
   */function triggerDomEvent(r,t){var a=document.createEvent("Event");a.initEvent(r,true,true);a.gesture=t;t.target.dispatchEvent(a)}
/**
  * @private
   * Manager
   * @param {HTMLElement} element
   * @param {Object} [options]
   * @constructor
   */var Zb=function(){function Manager(t,a){var o=this||r;(this||r).options=P_({},Xb,a||{});(this||r).options.inputTarget=(this||r).options.inputTarget||t;(this||r).handlers={};(this||r).session={};(this||r).recognizers=[];(this||r).oldCssProps={};(this||r).element=t;(this||r).input=createInputInstance(this||r);(this||r).touchAction=new yb(this||r,(this||r).options.touchAction);toggleCssProps(this||r,true);each((this||r).options.recognizers,(function(r){var t=o.add(new r[0](r[1]));r[2]&&t.recognizeWith(r[2]);r[3]&&t.requireFailure(r[3])}),this||r)}
/**
     * @private
     * set options
     * @param {Object} options
     * @returns {Manager}
     */var t=Manager.prototype;t.set=function set(t){P_((this||r).options,t);t.touchAction&&(this||r).touchAction.update();if(t.inputTarget){(this||r).input.destroy();(this||r).input.target=t.inputTarget;(this||r).input.init()}return this||r};
/**
     * @private
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */t.stop=function stop(t){(this||r).session.stopped=t?Jb:Qb};
/**
     * @private
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */t.recognize=function recognize(t){var a=(this||r).session;if(!a.stopped){(this||r).touchAction.preventDefaults(t);var o;var i=(this||r).recognizers;var v=a.curRecognizer;if(!v||v&&v.state&Mb){a.curRecognizer=null;v=null}var u=0;while(u<i.length){o=i[u];a.stopped===Jb||v&&o!==v&&!o.canRecognizeWith(v)?o.reset():o.recognize(t);if(!v&&o.state&(Fb|Lb|Rb)){a.curRecognizer=o;v=o}u++}}};
/**
     * @private
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */t.get=function get(t){if(t instanceof qb)return t;var a=(this||r).recognizers;for(var o=0;o<a.length;o++)if(a[o].options.event===t)return a[o];return null};
/**
     * @private add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */t.add=function add(t){if(invokeArrayArg(t,"add",this||r))return this||r;var a=this.get(t.options.event);a&&this.remove(a);(this||r).recognizers.push(t);t.manager=this||r;(this||r).touchAction.update();return t};
/**
     * @private
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */t.remove=function remove(t){if(invokeArrayArg(t,"remove",this||r))return this||r;var a=this.get(t);if(t){var o=(this||r).recognizers;var i=inArray(o,a);if(i!==-1){o.splice(i,1);(this||r).touchAction.update()}}return this||r};
/**
     * @private
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */t.on=function on(t,a){if(t===void 0||a===void 0)return this||r;var o=(this||r).handlers;each(splitStr(t),(function(r){o[r]=o[r]||[];o[r].push(a)}));return this||r};
/**
     * @private unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */t.off=function off(t,a){if(t===void 0)return this||r;var o=(this||r).handlers;each(splitStr(t),(function(r){a?o[r]&&o[r].splice(inArray(o[r],a),1):delete o[r]}));return this||r};
/**
     * @private emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */t.emit=function emit(t,a){(this||r).options.domEvents&&triggerDomEvent(t,a);var o=(this||r).handlers[t]&&(this||r).handlers[t].slice();if(o&&o.length){a.type=t;a.preventDefault=function(){a.srcEvent.preventDefault()};var i=0;while(i<o.length){o[i](a);i++}}};t.destroy=function destroy(){(this||r).element&&toggleCssProps(this||r,false);(this||r).handlers={};(this||r).session={};(this||r).input.destroy();(this||r).element=null};return Manager}();var rw={touchstart:eb,touchmove:ab,touchend:nb,touchcancel:ob};var tw="touchstart";var ew="touchstart touchmove touchend touchcancel";var aw=function(t){_inheritsLoose(SingleTouchInput,t);function SingleTouchInput(){var a;var o=SingleTouchInput.prototype;o.evTarget=tw;o.evWin=ew;a=t.apply(this||r,arguments)||this||r;a.started=false;return a}var a=SingleTouchInput.prototype;a.handler=function handler(t){var a=rw[t.type];a===eb&&((this||r).started=true);if((this||r).started){var o=normalizeSingleTouches.call(this||r,t,a);a&(nb|ob)&&o[0].length-o[1].length===0&&((this||r).started=false);this.callback((this||r).manager,a,{pointers:o[0],changedPointers:o[1],pointerType:Q_,srcEvent:t})}};return SingleTouchInput}(gb);function normalizeSingleTouches(r,t){var a=toArray(r.touches);var o=toArray(r.changedTouches);t&(nb|ob)&&(a=uniqueArray(a.concat(o),"identifier",true));return[a,o]}
/**
   * @private
   * wrap a method with a deprecation warning and stack trace
   * @param {Function} method
   * @param {String} name
   * @param {String} message
   * @returns {Function} A new function wrapping the supplied method.
   */function deprecate(t,a,o){var i="DEPRECATED METHOD: "+a+"\n"+o+" AT \n";return function(){var a=new Error("get-stack-trace");var o=a&&a.stack?a.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace";var v=window.console&&(window.console.warn||window.console.log);v&&v.call(window.console,i,o);return t.apply(this||r,arguments)}}
/**
   * @private
   * extend object.
   * means that properties in dest will be overwritten by the ones in src.
   * @param {Object} dest
   * @param {Object} src
   * @param {Boolean} [merge=false]
   * @returns {Object} dest
   */var nw=deprecate((function(r,t,a){var o=Object.keys(t);var i=0;while(i<o.length){(!a||a&&r[o[i]]===void 0)&&(r[o[i]]=t[o[i]]);i++}return r}),"extend","Use `assign`.");
/**
   * @private
   * merge the values from src in the dest.
   * means that properties that exist in dest will not be overwritten by src
   * @param {Object} dest
   * @param {Object} src
   * @returns {Object} dest
   */var ow=deprecate((function(r,t){return nw(r,t,true)}),"merge","Use `assign`.");
/**
   * @private
   * simple class inheritance
   * @param {Function} child
   * @param {Function} base
   * @param {Object} [properties]
   */function inherit(r,t,a){var o=t.prototype;var i;i=r.prototype=Object.create(o);i.constructor=r;i._super=o;a&&P_(i,a)}
/**
   * @private
   * simple function bind
   * @param {Function} fn
   * @param {Object} context
   * @returns {Function}
   */function bindFn(r,t){return function boundFn(){return r.apply(t,arguments)}}
/**
   * @private
   * Simple way to create a manager with a default set of recognizers.
   * @param {HTMLElement} element
   * @param {Object} [options]
   * @constructor
   */var iw=function(){var r=function Hammer(r,t){t===void 0&&(t={});return new Zb(r,_extends({recognizers:Kb.concat()},t))};r.VERSION="2.0.17-rc";r.DIRECTION_ALL=hb;r.DIRECTION_DOWN=cb;r.DIRECTION_LEFT=vb;r.DIRECTION_RIGHT=ub;r.DIRECTION_UP=sb;r.DIRECTION_HORIZONTAL=lb;r.DIRECTION_VERTICAL=fb;r.DIRECTION_NONE=ib;r.DIRECTION_DOWN=cb;r.INPUT_START=eb;r.INPUT_MOVE=ab;r.INPUT_END=nb;r.INPUT_CANCEL=ob;r.STATE_POSSIBLE=Cb;r.STATE_BEGAN=Fb;r.STATE_CHANGED=Lb;r.STATE_ENDED=Rb;r.STATE_RECOGNIZED=Mb;r.STATE_CANCELLED=Nb;r.STATE_FAILED=zb;r.Manager=Zb;r.Input=gb;r.TouchAction=yb;r.TouchInput=Sb;r.MouseInput=kb;r.PointerEventInput=Eb;r.TouchMouseInput=jb;r.SingleTouchInput=aw;r.Recognizer=qb;r.AttrRecognizer=Ub;r.Tap=Hb;r.Pan=Gb;r.Swipe=Wb;r.Pinch=Vb;r.Rotate=Yb;r.Press=Bb;r.on=addEventListeners;r.off=removeEventListeners;r.each=each;r.merge=ow;r.extend=nw;r.bindFn=bindFn;r.assign=P_;r.inherit=inherit;r.bindFn=bindFn;r.prefixed=prefixed;r.toArray=toArray;r.inArray=inArray;r.uniqueArray=uniqueArray;r.splitStr=splitStr;r.boolOrFn=boolOrFn;r.hasParent=hasParent;r.addEventListeners=addEventListeners;r.removeEventListeners=removeEventListeners;r.defaults=P_({},Xb,{preset:Kb});return r}();var vw=iw;function _createForOfIteratorHelper$3(r,t){var a=typeof by!=="undefined"&&Zp(r)||r["@@iterator"];if(!a){if(By(r)||(a=_unsupportedIterableToArray$3(r))||t&&r&&typeof r.length==="number"){a&&(r=a);var o=0;var i=function F(){};return{s:i,n:function n(){return o>=r.length?{done:true}:{done:false,value:r[o++]}},e:function e(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var v,u=true,c=false;return{s:function s(){a=a.call(r)},n:function n(){var r=a.next();u=r.done;return r},e:function e(r){c=true;v=r},f:function f(){try{u||a.return==null||a.return()}finally{if(c)throw v}}}}function _unsupportedIterableToArray$3(r,t){var a;if(r){if(typeof r==="string")return _arrayLikeToArray$3(r,t);var o=Dy(a=Object.prototype.toString.call(r)).call(a,8,-1);o==="Object"&&r.constructor&&(o=r.constructor.name);return o==="Map"||o==="Set"?qp(r):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray$3(r,t):void 0}}function _arrayLikeToArray$3(r,t){(t==null||t>r.length)&&(t=r.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=r[a];return o}var uw=by("DELETE");
/**
   * Pure version of deepObjectAssign, it doesn't modify any of it's arguments.
   *
   * @param base - The base object that fullfils the whole interface T.
   * @param updates - Updates that may change or delete props.
   * @returns A brand new instance with all the supplied objects deeply merged.
   */function pureDeepObjectAssign(r){var t;for(var a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];return deepObjectAssign.apply(void 0,ky(t=[{},r]).call(t,o))}
/**
   * Deep version of object assign with additional deleting by the DELETE symbol.
   *
   * @param values - Objects to be deeply merged.
   * @returns The first object from values.
   */function deepObjectAssign(){var r=deepObjectAssignNonentry.apply(void 0,arguments);stripDelete(r);return r}
/**
   * Deep version of object assign with additional deleting by the DELETE symbol.
   *
   * @remarks
   * This doesn't strip the DELETE symbols so they may end up in the final object.
   * @param values - Objects to be deeply merged.
   * @returns The first object from values.
   */function deepObjectAssignNonentry(){for(var r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];if(t.length<2)return t[0];if(t.length>2){var o;return deepObjectAssignNonentry.apply(void 0,ky(o=[deepObjectAssign(t[0],t[1])]).call(o,_toConsumableArray(Dy(t).call(t,2))))}var i=t[0];var v=t[1];if(i instanceof Date&&v instanceof Date){i.setTime(v.getTime());return i}var u,c=_createForOfIteratorHelper$3(Vy(v));try{for(c.s();!(u=c.n()).done;){var l=u.value;Object.prototype.propertyIsEnumerable.call(v,l)&&(v[l]===uw?delete i[l]:i[l]===null||v[l]===null||typeof i[l]!=="object"||typeof v[l]!=="object"||By(i[l])||By(v[l])?i[l]=clone(v[l]):i[l]=deepObjectAssignNonentry(i[l],v[l]))}}catch(r){c.e(r)}finally{c.f()}return i}
/**
   * Deep clone given object or array. In case of primitive simply return.
   *
   * @param a - Anything.
   * @returns Deep cloned object/array or unchanged a.
   */function clone(r){return By(r)?Sh(r).call(r,(function(r){return clone(r)})):typeof r==="object"&&r!==null?r instanceof Date?new Date(r.getTime()):deepObjectAssignNonentry({},r):r}
/**
   * Strip DELETE from given object.
   *
   * @param a - Object which may contain DELETE but won't after this is executed.
   */function stripDelete(r){for(var t=0,a=og(r);t<a.length;t++){var o=a[t];r[o]===uw?delete r[o]:typeof r[o]==="object"&&r[o]!==null&&stripDelete(r[o])}}
/**
   * Setup a mock hammer.js object, for unit testing.
   *
   * Inspiration: https://github.com/uber/deck.gl/pull/658
   *
   * @returns {{on: noop, off: noop, destroy: noop, emit: noop, get: get}}
   */function hammerMock(){var r=function noop(){};return{on:r,off:r,destroy:r,emit:r,get(){return{set:r}}}}var sw=typeof window!=="undefined"?window.Hammer||vw:function(){return hammerMock()};
/**
   * Turn an element into an clickToUse element.
   * When not active, the element has a transparent overlay. When the overlay is
   * clicked, the mode is changed to active.
   * When active, the element is displayed with a blue border around it, and
   * the interactive contents of the element can be used. When clicked outside
   * the element, the elements mode is changed to inactive.
   *
   * @param {Element} container
   * @class Activator
   */function Activator$1(t){var a,o=this||r;(this||r)._cleanupQueue=[];(this||r).active=false;(this||r)._dom={container:t,overlay:document.createElement("div")};(this||r)._dom.overlay.classList.add("vis-overlay");(this||r)._dom.container.appendChild((this||r)._dom.overlay);(this||r)._cleanupQueue.push((function(){o._dom.overlay.parentNode.removeChild(o._dom.overlay)}));var i=sw((this||r)._dom.overlay);i.on("tap",Of(a=(this||r)._onTapOverlay).call(a,this||r));(this||r)._cleanupQueue.push((function(){i.destroy()}));var v=["tap","doubletap","press","pinch","pan","panstart","panmove","panend"];Tg(v).call(v,(function(r){i.on(r,(function(r){r.srcEvent.stopPropagation()}))}));if(document&&document.body){(this||r)._onClick=function(r){_hasParent(r.target,t)||o.deactivate()};document.body.addEventListener("click",(this||r)._onClick);(this||r)._cleanupQueue.push((function(){document.body.removeEventListener("click",o._onClick)}))}(this||r)._escListener=function(r){("key"in r?r.key==="Escape":r.keyCode===27)&&o.deactivate()}}I_(Activator$1.prototype);Activator$1.current=null;Activator$1.prototype.destroy=function(){var t,a;this.deactivate();var o,i=_createForOfIteratorHelper$3(Mg(t=um(a=(this||r)._cleanupQueue).call(a,0)).call(t));try{for(i.s();!(o=i.n()).done;){var v=o.value;v()}}catch(r){i.e(r)}finally{i.f()}};Activator$1.prototype.activate=function(){Activator$1.current&&Activator$1.current.deactivate();Activator$1.current=this||r;(this||r).active=true;(this||r)._dom.overlay.style.display="none";(this||r)._dom.container.classList.add("vis-active");this.emit("change");this.emit("activate");document.body.addEventListener("keydown",(this||r)._escListener)};Activator$1.prototype.deactivate=function(){(this||r).active=false;(this||r)._dom.overlay.style.display="block";(this||r)._dom.container.classList.remove("vis-active");document.body.removeEventListener("keydown",(this||r)._escListener);this.emit("change");this.emit("deactivate")};
/**
   * Handle a tap event: activate the container
   *
   * @param {Event}  event   The event
   * @private
   */Activator$1.prototype._onTapOverlay=function(r){this.activate();r.srcEvent.stopPropagation()};
/**
   * Test whether the element has the requested parent element somewhere in
   * its chain of parent nodes.
   *
   * @param {HTMLElement} element
   * @param {HTMLElement} parent
   * @returns {boolean} Returns true when the parent is found somewhere in the
   *                    chain of parent nodes.
   * @private
   */function _hasParent(r,t){while(r){if(r===t)return true;r=r.parentNode}return false}var cw=$a;var lw=tryToString$6;var fw=TypeError;var aConstructor$2=function(r){if(cw(r))return r;throw new fw(lw(r)+" is not a constructor")};var hw=_export;var pw=getBuiltIn$f;var dw=d;var yw=pf;var gw=aConstructor$2;var mw=anObject$d;var _w=er;var bw=vo;var ww=fails$u;var Ew=pw("Reflect","construct");var Tw=Object.prototype;var Aw=[].push;var Sw=ww((function(){function F(){}return!(Ew((function(){}),[],F)instanceof F)}));var xw=!ww((function(){Ew((function(){}))}));var Ow=Sw||xw;hw({target:"Reflect",stat:true,forced:Ow,sham:Ow},{construct:function construct(r,t){gw(r);mw(t);var a=arguments.length<3?r:gw(arguments[2]);if(xw&&!Sw)return Ew(r,t,a);if(r===a){switch(t.length){case 0:return new r;case 1:return new r(t[0]);case 2:return new r(t[0],t[1]);case 3:return new r(t[0],t[1],t[2]);case 4:return new r(t[0],t[1],t[2],t[3])}var o=[null];dw(Aw,o,t);return new(dw(yw,r,o))}var i=a.prototype;var v=bw(_w(i)?i:Tw);var u=dw(r,v,t);return _w(u)?u:v}});var Iw=ar;var kw=Iw.Reflect.construct;var Pw=kw;var Dw=Pw;var jw=Dw;var Cw=getDefaultExportFromCjs(jw);var Fw=ar;var Lw=Fw.Object.getOwnPropertySymbols;var Rw=Lw;var Mw=Rw;var Nw=Mw;var zw=getDefaultExportFromCjs(Nw);var $w={exports:{}};var qw=_export;var Hw=fails$u;var Uw=toIndexedObject$a;var Gw=j.f;var Ww=L;var Vw=!Ww||Hw((function(){Gw(1)}));qw({target:"Object",stat:true,forced:Vw,sham:!Ww},{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(r,t){return Gw(Uw(r),t)}});var Yw=ar;var Bw=Yw.Object;var Xw=$w.exports=function getOwnPropertyDescriptor(r,t){return Bw.getOwnPropertyDescriptor(r,t)};Bw.getOwnPropertyDescriptor.sham&&(Xw.sham=true);var Kw=$w.exports;var Qw=Kw;var Jw=Qw;var Zw=Jw;var rE=getDefaultExportFromCjs(Zw);var tE=_export;var eE=L;var aE=Ny;var nE=toIndexedObject$a;var oE=j;var iE=createProperty$6;tE({target:"Object",stat:true,sham:!eE},{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(r){var t=nE(r);var a=oE.f;var o=aE(t);var i={};var v=0;var u,c;while(o.length>v){c=a(t,u=o[v++]);c!==void 0&&iE(i,u,c)}return i}});var vE=ar;var uE=vE.Object.getOwnPropertyDescriptors;var sE=uE;var cE=sE;var lE=cE;var fE=getDefaultExportFromCjs(lE);var hE={exports:{}};var pE=_export;var dE=L;var yE=gn.f;pE({target:"Object",stat:true,forced:Object.defineProperties!==yE,sham:!dE},{defineProperties:yE});var gE=ar;var mE=gE.Object;var _E=hE.exports=function defineProperties(r,t){return mE.defineProperties(r,t)};mE.defineProperties.sham&&(_E.sham=true);var bE=hE.exports;var wE=bE;var EE=wE;var TE=EE;var AE=getDefaultExportFromCjs(TE);var SE=Ue;var xE=getDefaultExportFromCjs(SE);function _assertThisInitialized(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var OE=Ym;var IE=OE;var kE=IE;var PE=kE;var DE=PE;var jE=getDefaultExportFromCjs(DE);var CE=_export;var FE=Gs;CE({target:"Object",stat:true},{setPrototypeOf:FE});var LE=ar;var RE=LE.Object.setPrototypeOf;var ME=RE;var NE=ME;var zE=NE;var $E=zE;var qE=$E;var HE=qE;var UE=HE;var GE=getDefaultExportFromCjs(UE);var WE=Sf;var VE=WE;var YE=VE;var BE=YE;var XE=BE;var KE=getDefaultExportFromCjs(XE);function _setPrototypeOf(r,t){var a;_setPrototypeOf=GE?KE(a=GE).call(a):function _setPrototypeOf(r,t){r.__proto__=t;return r};return _setPrototypeOf(r,t)}function _inherits(r,t){if(typeof t!=="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=jE(t&&t.prototype,{constructor:{value:r,writable:true,configurable:true}});Xe(r,"prototype",{writable:false});t&&_setPrototypeOf(r,t)}function _possibleConstructorReturn(r,t){if(t&&(_typeof$1(t)==="object"||typeof t==="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(r)}var QE=zm;var JE=QE;var ZE=JE;var rT=ZE;var tT=rT;var eT=getDefaultExportFromCjs(tT);function _getPrototypeOf(r){var t;_getPrototypeOf=GE?KE(t=eT).call(t):function _getPrototypeOf(r){return r.__proto__||eT(r)};return _getPrototypeOf(r)}var aT={exports:{}};var nT={exports:{}};(function(r){var t=_l;var a=Wl;function _typeof(o){return r.exports=_typeof="function"==typeof t&&"symbol"==typeof a?function(r){return typeof r}:function(r){return r&&"function"==typeof t&&r.constructor===t&&r!==t.prototype?"symbol":typeof r},r.exports.__esModule=true,r.exports.default=r.exports,_typeof(o)}r.exports=_typeof,r.exports.__esModule=true,r.exports.default=r.exports})(nT);var oT=nT.exports;var iT=forEach$5;var vT=iT;var uT=vT;var sT=uT;var cT=sT;var lT=nt;var fT=Ny;var hT=j;var pT=ae;var copyConstructorProperties$1=function(r,t,a){var o=fT(t);var i=pT.f;var v=hT.f;for(var u=0;u<o.length;u++){var c=o[u];lT(r,c)||a&&lT(a,c)||i(r,c,v(t,c))}};var dT=er;var yT=Ae;var installErrorCause$1=function(r,t){dT(t)&&"cause"in t&&yT(r,"cause",t.cause)};var gT=b;var mT=Error;var _T=gT("".replace);var bT=function(r){return String(new mT(r).stack)}("zxcasd");var wT=/\n\s*at [^:]*:[^\n]*/;var ET=wT.test(bT);var errorStackClear=function(r,t){if(ET&&typeof r=="string"&&!mT.prepareStackTrace)while(t--)r=_T(r,wT,"");return r};var TT=fails$u;var AT=createPropertyDescriptor$7;var ST=!TT((function(){var r=new Error("a");if(!("stack"in r))return true;Object.defineProperty(r,"stack",AT(1,7));return r.stack!==7}));var xT=Ae;var OT=errorStackClear;var IT=ST;var kT=Error.captureStackTrace;var errorStackInstall=function(r,t,a,o){IT&&(kT?kT(r,t):xT(r,"stack",OT(a,o)))};var PT=functionBindContext;var DT=N;var jT=anObject$d;var CT=tryToString$6;var FT=isArrayIteratorMethod$2;var LT=lengthOfArrayLike$d;var RT=ur;var MT=getIterator$8;var NT=getIteratorMethod$9;var zT=iteratorClose$2;var $T=TypeError;var Result=function(t,a){(this||r).stopped=t;(this||r).result=a};var qT=Result.prototype;var iterate$7=function(r,t,a){var o=a&&a.that;var i=!!(a&&a.AS_ENTRIES);var v=!!(a&&a.IS_RECORD);var u=!!(a&&a.IS_ITERATOR);var c=!!(a&&a.INTERRUPTED);var l=PT(t,o);var h,p,d,y,g,m,_;var stop=function(r){h&&zT(h,"normal",r);return new Result(true,r)};var callFn=function(r){if(i){jT(r);return c?l(r[0],r[1],stop):l(r[0],r[1])}return c?l(r,stop):l(r)};if(v)h=r.iterator;else if(u)h=r;else{p=NT(r);if(!p)throw new $T(CT(r)+" is not iterable");if(FT(p)){for(d=0,y=LT(r);y>d;d++){g=callFn(r[d]);if(g&&RT(qT,g))return g}return new Result(false)}h=MT(r,p)}m=v?r.next:h.next;while(!(_=DT(m,h)).done){try{g=callFn(_.value)}catch(r){zT(h,"throw",r)}if(typeof g=="object"&&g&&RT(qT,g))return g}return new Result(false)};var HT=toString$7;var normalizeStringArgument$1=function(r,t){return r===void 0?arguments.length<2?"":t:HT(r)};var UT=_export;var GT=ur;var WT=ys;var VT=Gs;var YT=copyConstructorProperties$1;var BT=vo;var XT=Ae;var KT=createPropertyDescriptor$7;var QT=installErrorCause$1;var JT=errorStackInstall;var ZT=iterate$7;var rA=normalizeStringArgument$1;var tA=wellKnownSymbol$n;var eA=tA("toStringTag");var aA=Error;var nA=[].push;var oA=function AggregateError(t,a){var o=GT(iA,this||r);var i;if(VT)i=VT(new aA,o?WT(this||r):iA);else{i=o?this||r:BT(iA);XT(i,eA,"Error")}a!==void 0&&XT(i,"message",rA(a));JT(i,oA,i.stack,1);arguments.length>2&&QT(i,arguments[2]);var v=[];ZT(t,nA,{that:v});XT(i,"errors",v);return i};VT?VT(oA,aA):YT(oA,aA,{name:true});var iA=oA.prototype=BT(aA.prototype,{constructor:KT(1,oA),message:KT(1,""),name:KT(1,"AggregateError")});UT({global:true,constructor:true,arity:2},{AggregateError:oA});var vA=getBuiltIn$f;var uA=defineBuiltInAccessor$3;var sA=wellKnownSymbol$n;var cA=L;var lA=sA("species");var setSpecies$2=function(t){var a=vA(t);cA&&a&&!a[lA]&&uA(a,lA,{configurable:true,get:function(){return this||r}})};var fA=ur;var hA=TypeError;var anInstance$3=function(r,t){if(fA(t,r))return r;throw new hA("Incorrect invocation")};var pA=anObject$d;var dA=aConstructor$2;var yA=isNullOrUndefined$6;var gA=wellKnownSymbol$n;var mA=gA("species");var speciesConstructor$2=function(r,t){var a=pA(r).constructor;var o;return a===void 0||yA(o=pA(a)[mA])?t:dA(o)};var _A=sr;var bA=/(?:ipad|iphone|ipod).*applewebkit/i.test(_A);var wA=i;var EA=d;var TA=functionBindContext;var AA=D;var SA=nt;var xA=fails$u;var OA=Un;var IA=Xv;var kA=documentCreateElement$1;var PA=validateArgumentsLength$2;var DA=bA;var jA=Mf;var CA=wA.setImmediate;var FA=wA.clearImmediate;var LA=wA.process;var RA=wA.Dispatch;var MA=wA.Function;var NA=wA.MessageChannel;var zA=wA.String;var $A=0;var qA={};var HA="onreadystatechange";var UA,GA,WA,VA;xA((function(){UA=wA.location}));var run=function(r){if(SA(qA,r)){var t=qA[r];delete qA[r];t()}};var runner=function(r){return function(){run(r)}};var eventListener=function(r){run(r.data)};var globalPostMessageDefer=function(r){wA.postMessage(zA(r),UA.protocol+"//"+UA.host)};if(!CA||!FA){CA=function setImmediate(r){PA(arguments.length,1);var t=AA(r)?r:MA(r);var a=IA(arguments,1);qA[++$A]=function(){EA(t,void 0,a)};GA($A);return $A};FA=function clearImmediate(r){delete qA[r]};if(jA)GA=function(r){LA.nextTick(runner(r))};else if(RA&&RA.now)GA=function(r){RA.now(runner(r))};else if(NA&&!DA){WA=new NA;VA=WA.port2;WA.port1.onmessage=eventListener;GA=TA(VA.postMessage,VA)}else if(wA.addEventListener&&AA(wA.postMessage)&&!wA.importScripts&&UA&&UA.protocol!=="file:"&&!xA(globalPostMessageDefer)){GA=globalPostMessageDefer;wA.addEventListener("message",eventListener,false)}else GA=HA in kA("script")?function(t){OA.appendChild(kA("script"))[HA]=function(){OA.removeChild(this||r);run(t)}}:function(r){setTimeout(runner(r),0)}}var YA={set:CA,clear:FA};var Queue$3=function(){(this||r).head=null;(this||r).tail=null};Queue$3.prototype={add:function(t){var a={item:t,next:null};var o=(this||r).tail;o?o.next=a:(this||r).head=a;(this||r).tail=a},get:function(){var t=(this||r).head;if(t){var a=(this||r).head=t.next;a===null&&((this||r).tail=null);return t.item}}};var BA=Queue$3;var XA=sr;var KA=/ipad|iphone|ipod/i.test(XA)&&typeof Pebble!="undefined";var QA=sr;var JA=/web0s(?!.*chrome)/i.test(QA);var ZA=i;var rS=functionBindContext;var tS=j.f;var eS=YA.set;var aS=BA;var nS=bA;var oS=KA;var iS=JA;var vS=Mf;var uS=ZA.MutationObserver||ZA.WebKitMutationObserver;var sS=ZA.document;var cS=ZA.process;var lS=ZA.Promise;var fS=tS(ZA,"queueMicrotask");var hS=fS&&fS.value;var pS,dS,yS,gS,mS;if(!hS){var _S=new aS;var flush=function(){var r,t;vS&&(r=cS.domain)&&r.exit();while(t=_S.get())try{t()}catch(r){_S.head&&pS();throw r}r&&r.enter()};if(nS||vS||iS||!uS||!sS)if(!oS&&lS&&lS.resolve){gS=lS.resolve(void 0);gS.constructor=lS;mS=rS(gS.then,gS);pS=function(){mS(flush)}}else if(vS)pS=function(){cS.nextTick(flush)};else{eS=rS(eS,ZA);pS=function(){eS(flush)}}else{dS=true;yS=sS.createTextNode("");new uS(flush).observe(yS,{characterData:true});pS=function(){yS.data=dS=!dS}}hS=function(r){_S.head||pS();_S.add(r)}}var bS=hS;var hostReportErrors$1=function(r,t){try{arguments.length===1?console.error(r):console.error(r,t)}catch(r){}};var perform$6=function(r){try{return{error:false,value:r()}}catch(r){return{error:true,value:r}}};var wS=i;var ES=wS.Promise;var TS=typeof Deno=="object"&&Deno&&typeof Deno.version=="object";var AS=TS;var SS=Mf;var xS=!AS&&!SS&&typeof window=="object"&&typeof document=="object";var OS=i;var IS=ES;var kS=D;var PS=Jt;var DS=xa;var jS=wellKnownSymbol$n;var CS=xS;var FS=TS;var LS=mr;var RS=IS&&IS.prototype;var MS=jS("species");var NS=false;var zS=kS(OS.PromiseRejectionEvent);var $S=PS("Promise",(function(){var r=DS(IS);var t=r!==String(IS);if(!t&&LS===66)return true;if(!(RS.catch&&RS.finally))return true;if(!LS||LS<51||!/native code/.test(r)){var a=new IS((function(r){r(1)}));var FakePromise=function(r){r((function(){}),(function(){}))};var o=a.constructor={};o[MS]=FakePromise;NS=a.then((function(){}))instanceof FakePromise;if(!NS)return true}return!t&&(CS||FS)&&!zS}));var qS={CONSTRUCTOR:$S,REJECTION_EVENT:zS,SUBCLASSING:NS};var HS={};var US=aCallable$e;var GS=TypeError;var PromiseCapability=function(t){var a,o;(this||r).promise=new t((function(r,t){if(a!==void 0||o!==void 0)throw new GS("Bad Promise constructor");a=r;o=t}));(this||r).resolve=US(a);(this||r).reject=US(o)};HS.f=function(r){return new PromiseCapability(r)};var WS=_export;var VS=Mf;var YS=i;var BS=N;var XS=defineBuiltIn$6;var KS=setToStringTag$7;var QS=setSpecies$2;var JS=aCallable$e;var ZS=D;var rx=er;var tx=anInstance$3;var ex=speciesConstructor$2;var ax=YA.set;var nx=bS;var ox=hostReportErrors$1;var ix=perform$6;var vx=BA;var ux=hi;var sx=ES;var cx=qS;var lx=HS;var fx="Promise";var hx=cx.CONSTRUCTOR;var px=cx.REJECTION_EVENT;cx.SUBCLASSING;var dx=ux.getterFor(fx);var yx=ux.set;var gx=sx&&sx.prototype;var mx=sx;var _x=gx;var bx=YS.TypeError;var wx=YS.document;var Ex=YS.process;var Tx=lx.f;var Ax=Tx;var Sx=!!(wx&&wx.createEvent&&YS.dispatchEvent);var xx="unhandledrejection";var Ox="rejectionhandled";var Ix=0;var kx=1;var Px=2;var Dx=1;var jx=2;var Cx,Fx,Lx;var isThenable=function(r){var t;return!(!rx(r)||!ZS(t=r.then))&&t};var callReaction=function(r,t){var a=t.value;var o=t.state===kx;var i=o?r.ok:r.fail;var v=r.resolve;var u=r.reject;var c=r.domain;var l,h,p;try{if(i){if(!o){t.rejection===jx&&onHandleUnhandled(t);t.rejection=Dx}if(i===true)l=a;else{c&&c.enter();l=i(a);if(c){c.exit();p=true}}l===r.promise?u(new bx("Promise-chain cycle")):(h=isThenable(l))?BS(h,l,v,u):v(l)}else u(a)}catch(r){c&&!p&&c.exit();u(r)}};var notify=function(r,t){if(!r.notified){r.notified=true;nx((function(){var a=r.reactions;var o;while(o=a.get())callReaction(o,r);r.notified=false;t&&!r.rejection&&onUnhandled(r)}))}};var dispatchEvent=function(r,t,a){var o,i;if(Sx){o=wx.createEvent("Event");o.promise=t;o.reason=a;o.initEvent(r,false,true);YS.dispatchEvent(o)}else o={promise:t,reason:a};!px&&(i=YS["on"+r])?i(o):r===xx&&ox("Unhandled promise rejection",a)};var onUnhandled=function(r){BS(ax,YS,(function(){var t=r.facade;var a=r.value;var o=isUnhandled(r);var i;if(o){i=ix((function(){VS?Ex.emit("unhandledRejection",a,t):dispatchEvent(xx,t,a)}));r.rejection=VS||isUnhandled(r)?jx:Dx;if(i.error)throw i.value}}))};var isUnhandled=function(r){return r.rejection!==Dx&&!r.parent};var onHandleUnhandled=function(r){BS(ax,YS,(function(){var t=r.facade;VS?Ex.emit("rejectionHandled",t):dispatchEvent(Ox,t,r.value)}))};var bind$1=function(r,t,a){return function(o){r(t,o,a)}};var internalReject=function(r,t,a){if(!r.done){r.done=true;a&&(r=a);r.value=t;r.state=Px;notify(r,true)}};var internalResolve=function(r,t,a){if(!r.done){r.done=true;a&&(r=a);try{if(r.facade===t)throw new bx("Promise can't be resolved itself");var o=isThenable(t);if(o)nx((function(){var a={done:false};try{BS(o,t,bind$1(internalResolve,a,r),bind$1(internalReject,a,r))}catch(t){internalReject(a,t,r)}}));else{r.value=t;r.state=kx;notify(r,false)}}catch(t){internalReject({done:false},t,r)}}};if(hx){mx=function Promise(t){tx(this||r,_x);JS(t);BS(Cx,this||r);var a=dx(this||r);try{t(bind$1(internalResolve,a),bind$1(internalReject,a))}catch(r){internalReject(a,r)}};_x=mx.prototype;Cx=function Promise(t){yx(this||r,{type:fx,done:false,notified:false,parent:false,reactions:new vx,rejection:false,state:Ix,value:void 0})};Cx.prototype=XS(_x,"then",(function then(t,a){var o=dx(this||r);var i=Tx(ex(this||r,mx));o.parent=true;i.ok=!ZS(t)||t;i.fail=ZS(a)&&a;i.domain=VS?Ex.domain:void 0;o.state===Ix?o.reactions.add(i):nx((function(){callReaction(i,o)}));return i.promise}));Fx=function(){var t=new Cx;var a=dx(t);(this||r).promise=t;(this||r).resolve=bind$1(internalResolve,a);(this||r).reject=bind$1(internalReject,a)};lx.f=Tx=function(r){return r===mx||r===Lx?new Fx(r):Ax(r)}}WS({global:true,constructor:true,wrap:true,forced:hx},{Promise:mx});KS(mx,fx,false,true);QS(fx);var Rx=ES;var Mx=checkCorrectnessOfIteration$2;var Nx=qS.CONSTRUCTOR;var zx=Nx||!Mx((function(r){Rx.all(r).then(void 0,(function(){}))}));var $x=_export;var qx=N;var Hx=aCallable$e;var Ux=HS;var Gx=perform$6;var Wx=iterate$7;var Vx=zx;$x({target:"Promise",stat:true,forced:Vx},{all:function all(t){var a=this||r;var o=Ux.f(a);var i=o.resolve;var v=o.reject;var u=Gx((function(){var r=Hx(a.resolve);var o=[];var u=0;var c=1;Wx(t,(function(t){var l=u++;var h=false;c++;qx(r,a,t).then((function(r){if(!h){h=true;o[l]=r;--c||i(o)}}),v)}));--c||i(o)}));u.error&&v(u.value);return o.promise}});var Yx=_export;var Bx=qS.CONSTRUCTOR;var Xx=ES;Xx&&Xx.prototype;Yx({target:"Promise",proto:true,forced:Bx,real:true},{catch:function(r){return this.then(void 0,r)}});var Kx=_export;var Qx=N;var Jx=aCallable$e;var Zx=HS;var rO=perform$6;var tO=iterate$7;var eO=zx;Kx({target:"Promise",stat:true,forced:eO},{race:function race(t){var a=this||r;var o=Zx.f(a);var i=o.reject;var v=rO((function(){var r=Jx(a.resolve);tO(t,(function(t){Qx(r,a,t).then(o.resolve,i)}))}));v.error&&i(v.value);return o.promise}});var aO=_export;var nO=N;var oO=HS;var iO=qS.CONSTRUCTOR;aO({target:"Promise",stat:true,forced:iO},{reject:function reject(t){var a=oO.f(this||r);nO(a.reject,void 0,t);return a.promise}});var vO=anObject$d;var uO=er;var sO=HS;var promiseResolve$2=function(r,t){vO(r);if(uO(t)&&t.constructor===r)return t;var a=sO.f(r);var o=a.resolve;o(t);return a.promise};var cO=_export;var lO=getBuiltIn$f;var fO=Ur;var hO=ES;var pO=qS.CONSTRUCTOR;var dO=promiseResolve$2;var yO=lO("Promise");var gO=!pO;cO({target:"Promise",stat:true,forced:fO},{resolve:function resolve(t){return dO(gO&&(this||r)===yO?hO:this||r,t)}});var mO=_export;var _O=N;var bO=aCallable$e;var wO=HS;var EO=perform$6;var TO=iterate$7;var AO=zx;mO({target:"Promise",stat:true,forced:AO},{allSettled:function allSettled(t){var a=this||r;var o=wO.f(a);var i=o.resolve;var v=o.reject;var u=EO((function(){var r=bO(a.resolve);var o=[];var v=0;var u=1;TO(t,(function(t){var c=v++;var l=false;u++;_O(r,a,t).then((function(r){if(!l){l=true;o[c]={status:"fulfilled",value:r};--u||i(o)}}),(function(r){if(!l){l=true;o[c]={status:"rejected",reason:r};--u||i(o)}}))}));--u||i(o)}));u.error&&v(u.value);return o.promise}});var SO=_export;var xO=N;var OO=aCallable$e;var IO=getBuiltIn$f;var kO=HS;var PO=perform$6;var DO=iterate$7;var jO=zx;var CO="No one promise resolved";SO({target:"Promise",stat:true,forced:jO},{any:function any(t){var a=this||r;var o=IO("AggregateError");var i=kO.f(a);var v=i.resolve;var u=i.reject;var c=PO((function(){var r=OO(a.resolve);var i=[];var c=0;var l=1;var h=false;DO(t,(function(t){var p=c++;var d=false;l++;xO(r,a,t).then((function(r){if(!d&&!h){h=true;v(r)}}),(function(r){if(!d&&!h){d=true;i[p]=r;--l||u(new o(i,CO))}}))}));--l||u(new o(i,CO))}));c.error&&u(c.value);return i.promise}});var FO=_export;var LO=ES;var RO=fails$u;var MO=getBuiltIn$f;var NO=D;var zO=speciesConstructor$2;var $O=promiseResolve$2;var qO=LO&&LO.prototype;var HO=!!LO&&RO((function(){qO.finally.call({then:function(){}},(function(){}))}));FO({target:"Promise",proto:true,real:true,forced:HO},{finally:function(t){var a=zO(this||r,MO("Promise"));var o=NO(t);return this.then(o?function(r){return $O(a,t()).then((function(){return r}))}:t,o?function(r){return $O(a,t()).then((function(){throw r}))}:t)}});var UO=ar;var GO=UO.Promise;var WO=GO;var VO=WO;var YO=_export;var BO=HS;YO({target:"Promise",stat:true},{withResolvers:function withResolvers(){var t=BO.f(this||r);return{promise:t.promise,resolve:t.resolve,reject:t.reject}}});var XO=VO;var KO=XO;var QO=_export;var JO=HS;var ZO=perform$6;QO({target:"Promise",stat:true,forced:true},{try:function(t){var a=JO.f(this||r);var o=ZO(t);(o.error?a.reject:a.resolve)(o.value);return a.promise}});var rI=KO;var tI=rI;var eI=tI;var aI=Lg;var nI=aI;var oI=nI;var iI=oI;var vI=iI;(function(t){var a=oT.default;var o=Be;var i=_l;var v=DE;var u=tT;var c=cT;var l=Md;var h=UE;var p=eI;var d=vI;var y=ly;function _regeneratorRuntime(){t.exports=_regeneratorRuntime=function _regeneratorRuntime(){return m},t.exports.__esModule=true,t.exports.default=t.exports;var g,m={},_=Object.prototype,b=_.hasOwnProperty,w=o||function(r,t,a){r[t]=a.value},E="function"==typeof i?i:{},T=E.iterator||"@@iterator",A=E.asyncIterator||"@@asyncIterator",S=E.toStringTag||"@@toStringTag";function define(r,t,a){return o(r,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),r[t]}try{define({},"")}catch(g){define=function define(r,t,a){return r[t]=a}}function wrap(r,t,a,o){var i=t&&t.prototype instanceof Generator?t:Generator,u=v(i.prototype),c=new Context(o||[]);return w(u,"_invoke",{value:makeInvokeMethod(r,a,c)}),u}function tryCatch(r,t,a){try{return{type:"normal",arg:r.call(t,a)}}catch(r){return{type:"throw",arg:r}}}m.wrap=wrap;var x="suspendedStart",O="suspendedYield",I="executing",k="completed",P={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var D={};define(D,T,(function(){return this||r}));var j=u,C=j&&j(j(values([])));C&&C!==_&&b.call(C,T)&&(D=C);var L=GeneratorFunctionPrototype.prototype=Generator.prototype=v(D);function defineIteratorMethods(r){var t;c(t=["next","throw","return"]).call(t,(function(t){define(r,t,(function(r){return this._invoke(t,r)}))}))}function AsyncIterator(t,o){function invoke(r,i,v,u){var c=tryCatch(t[r],t,i);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==a(h)&&b.call(h,"__await")?o.resolve(h.__await).then((function(r){invoke("next",r,v,u)}),(function(r){invoke("throw",r,v,u)})):o.resolve(h).then((function(r){l.value=r,v(l)}),(function(r){return invoke("throw",r,v,u)}))}u(c.arg)}var i;w(this||r,"_invoke",{value:function value(r,t){function callInvokeWithMethodAndArg(){return new o((function(a,o){invoke(r,t,a,o)}))}return i=i?i.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(r,t,a){var o=x;return function(i,v){if(o===I)throw new Error("Generator is already running");if(o===k){if("throw"===i)throw v;return{value:g,done:!0}}for(a.method=i,a.arg=v;;){var u=a.delegate;if(u){var c=maybeInvokeDelegate(u,a);if(c){if(c===P)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(o===x)throw o=k,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);o=I;var l=tryCatch(r,t,a);if("normal"===l.type){if(o=a.done?k:O,l.arg===P)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(o=k,a.method="throw",a.arg=l.arg)}}}function maybeInvokeDelegate(r,t){var a=t.method,o=r.iterator[a];if(o===g)return t.delegate=null,"throw"===a&&r.iterator.return&&(t.method="return",t.arg=g,maybeInvokeDelegate(r,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),P;var i=tryCatch(o,r.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,P;var v=i.arg;return v?v.done?(t[r.resultName]=v.value,t.next=r.nextLoc,"return"!==t.method&&(t.method="next",t.arg=g),t.delegate=null,P):v:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,P)}function pushTryEntry(t){var a;var o={tryLoc:t[0]};1 in t&&(o.catchLoc=t[1]),2 in t&&(o.finallyLoc=t[2],o.afterLoc=t[3]),l(a=(this||r).tryEntries).call(a,o)}function resetTryEntry(r){var t=r.completion||{};t.type="normal",delete t.arg,r.completion=t}function Context(t){(this||r).tryEntries=[{tryLoc:"root"}],c(t).call(t,pushTryEntry,this||r),this.reset(!0)}function values(r){if(r||""===r){var t=r[T];if(t)return t.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function next(){for(;++o<r.length;)if(b.call(r,o))return next.value=r[o],next.done=!1,next;return next.value=g,next.done=!0,next};return i.next=i}}throw new TypeError(a(r)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,w(L,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),w(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,S,"GeneratorFunction"),m.isGeneratorFunction=function(r){var t="function"==typeof r&&r.constructor;return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},m.mark=function(r){return h?h(r,GeneratorFunctionPrototype):(r.__proto__=GeneratorFunctionPrototype,define(r,S,"GeneratorFunction")),r.prototype=v(L),r},m.awrap=function(r){return{__await:r}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,A,(function(){return this||r})),m.AsyncIterator=AsyncIterator,m.async=function(r,t,a,o,i){void 0===i&&(i=p);var v=new AsyncIterator(wrap(r,t,a,o),i);return m.isGeneratorFunction(t)?v:v.next().then((function(r){return r.done?r.value:v.next()}))},defineIteratorMethods(L),define(L,S,"Generator"),define(L,T,(function(){return this||r})),define(L,"toString",(function(){return"[object Generator]"})),m.keys=function(r){var t=Object(r),a=[];for(var o in t)l(a).call(a,o);return d(a).call(a),function next(){for(;a.length;){var r=a.pop();if(r in t)return next.value=r,next.done=!1,next}return next.done=!0,next}},m.values=values,Context.prototype={constructor:Context,reset:function reset(t){var a;if((this||r).prev=0,(this||r).next=0,(this||r).sent=(this||r)._sent=g,(this||r).done=!1,(this||r).delegate=null,(this||r).method="next",(this||r).arg=g,c(a=(this||r).tryEntries).call(a,resetTryEntry),!t)for(var o in this||r)"t"===o.charAt(0)&&b.call(this||r,o)&&!isNaN(+y(o).call(o,1))&&((this||r)[o]=g)},stop:function stop(){(this||r).done=!0;var t=(this||r).tryEntries[0].completion;if("throw"===t.type)throw t.arg;return(this||r).rval},dispatchException:function dispatchException(t){if((this||r).done)throw t;var a=this||r;function handle(r,o){return v.type="throw",v.arg=t,a.next=r,o&&(a.method="next",a.arg=g),!!o}for(var o=(this||r).tryEntries.length-1;o>=0;--o){var i=(this||r).tryEntries[o],v=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=(this||r).prev){var u=b.call(i,"catchLoc"),c=b.call(i,"finallyLoc");if(u&&c){if((this||r).prev<i.catchLoc)return handle(i.catchLoc,!0);if((this||r).prev<i.finallyLoc)return handle(i.finallyLoc)}else if(u){if((this||r).prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if((this||r).prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,a){for(var o=(this||r).tryEntries.length-1;o>=0;--o){var i=(this||r).tryEntries[o];if(i.tryLoc<=(this||r).prev&&b.call(i,"finallyLoc")&&(this||r).prev<i.finallyLoc){var v=i;break}}v&&("break"===t||"continue"===t)&&v.tryLoc<=a&&a<=v.finallyLoc&&(v=null);var u=v?v.completion:{};return u.type=t,u.arg=a,v?((this||r).method="next",(this||r).next=v.finallyLoc,P):this.complete(u)},complete:function complete(t,a){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?(this||r).next=t.arg:"return"===t.type?((this||r).rval=(this||r).arg=t.arg,(this||r).method="return",(this||r).next="end"):"normal"===t.type&&a&&((this||r).next=a),P},finish:function finish(t){for(var a=(this||r).tryEntries.length-1;a>=0;--a){var o=(this||r).tryEntries[a];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),resetTryEntry(o),P}},catch:function _catch(t){for(var a=(this||r).tryEntries.length-1;a>=0;--a){var o=(this||r).tryEntries[a];if(o.tryLoc===t){var i=o.completion;if("throw"===i.type){var v=i.arg;resetTryEntry(o)}return v}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(t,a,o){return(this||r).delegate={iterator:values(t),resultName:a,nextLoc:o},"next"===(this||r).method&&((this||r).arg=g),P}},m}t.exports=_regeneratorRuntime,t.exports.__esModule=true,t.exports.default=t.exports})(aT);var uI=aT.exports;var sI=uI();var cI=sI;try{r.regeneratorRuntime=sI}catch(r){typeof globalThis==="object"?globalThis.regeneratorRuntime=sI:Function("r","regeneratorRuntime = r")(sI)}var lI=getDefaultExportFromCjs(cI);var fI={exports:{}};var hI=fails$u;var pI=hI((function(){if(typeof ArrayBuffer=="function"){var r=new ArrayBuffer(8);Object.isExtensible(r)&&Object.defineProperty(r,"a",{value:8})}}));var dI=fails$u;var yI=er;var gI=classofRaw$2;var mI=pI;var _I=Object.isExtensible;var bI=dI((function(){_I(1)}));var wI=bI||mI?function isExtensible(r){return!!yI(r)&&((!mI||gI(r)!=="ArrayBuffer")&&(!_I||_I(r)))}:_I;var EI=fails$u;var TI=!EI((function(){return Object.isExtensible(Object.preventExtensions({}))}));var AI=_export;var SI=b;var xI=Sn;var OI=er;var II=nt;var kI=ae.f;var PI=uo;var DI=fo;var jI=wI;var CI=uid$4;var FI=TI;var LI=false;var RI=CI("meta");var MI=0;var setMetadata=function(r){kI(r,RI,{value:{objectID:"O"+MI++,weakData:{}}})};var fastKey$1=function(r,t){if(!OI(r))return typeof r=="symbol"?r:(typeof r=="string"?"S":"P")+r;if(!II(r,RI)){if(!jI(r))return"F";if(!t)return"E";setMetadata(r)}return r[RI].objectID};var getWeakData=function(r,t){if(!II(r,RI)){if(!jI(r))return true;if(!t)return false;setMetadata(r)}return r[RI].weakData};var onFreeze=function(r){FI&&LI&&jI(r)&&!II(r,RI)&&setMetadata(r);return r};var enable=function(){NI.enable=function(){};LI=true;var r=PI.f;var t=SI([].splice);var a={};a[RI]=1;if(r(a).length){PI.f=function(a){var o=r(a);for(var i=0,v=o.length;i<v;i++)if(o[i]===RI){t(o,i,1);break}return o};AI({target:"Object",stat:true,forced:true},{getOwnPropertyNames:DI.f})}};var NI=fI.exports={enable:enable,fastKey:fastKey$1,getWeakData:getWeakData,onFreeze:onFreeze};xI[RI]=true;var zI=fI.exports;var $I=_export;var qI=i;var HI=zI;var UI=fails$u;var GI=Ae;var WI=iterate$7;var VI=anInstance$3;var YI=D;var BI=er;var XI=isNullOrUndefined$6;var KI=setToStringTag$7;var QI=ae.f;var JI=wi.forEach;var ZI=L;var rk=hi;var tk=rk.set;var ek=rk.getterFor;var collection$2=function(t,a,o){var i=t.indexOf("Map")!==-1;var v=t.indexOf("Weak")!==-1;var u=i?"set":"add";var c=qI[t];var l=c&&c.prototype;var h={};var p;if(ZI&&YI(c)&&(v||l.forEach&&!UI((function(){(new c).entries().next()})))){p=a((function(r,a){tk(VI(r,d),{type:t,collection:new c});XI(a)||WI(a,r[u],{that:r,AS_ENTRIES:i})}));var d=p.prototype;var y=ek(t);JI(["add","clear","delete","forEach","get","has","set","keys","values","entries"],(function(t){var a=t==="add"||t==="set";!(t in l)||v&&t==="clear"||GI(d,t,(function(o,i){var u=y(this||r).collection;if(!a&&v&&!BI(o))return t==="get"&&void 0;var c=u[t](o===0?0:o,i);return a?this||r:c}))}));v||QI(d,"size",{configurable:true,get:function(){return y(this||r).collection.size}})}else{p=o.getConstructor(a,t,i,u);HI.enable()}KI(p,t,false,true);h[t]=p;$I({global:true,forced:true},h);v||o.setStrong(p,t,i);return p};var ak=defineBuiltIn$6;var defineBuiltIns$1=function(r,t,a){for(var o in t)a&&a.unsafe&&r[o]?r[o]=t[o]:ak(r,o,t[o],a);return r};var nk=vo;var ok=defineBuiltInAccessor$3;var ik=defineBuiltIns$1;var vk=functionBindContext;var uk=anInstance$3;var sk=isNullOrUndefined$6;var ck=iterate$7;var lk=iteratorDefine;var fk=createIterResultObject$3;var hk=setSpecies$2;var pk=L;var dk=zI.fastKey;var yk=hi;var gk=yk.set;var mk=yk.getterFor;var _k={getConstructor:function(t,a,o,i){var v=t((function(r,t){uk(r,u);gk(r,{type:a,index:nk(null),first:void 0,last:void 0,size:0});pk||(r.size=0);sk(t)||ck(t,r[i],{that:r,AS_ENTRIES:o})}));var u=v.prototype;var c=mk(a);var define=function(r,t,a){var o=c(r);var i=getEntry(r,t);var v,u;if(i)i.value=a;else{o.last=i={index:u=dk(t,true),key:t,value:a,previous:v=o.last,next:void 0,removed:false};o.first||(o.first=i);v&&(v.next=i);pk?o.size++:r.size++;u!=="F"&&(o.index[u]=i)}return r};var getEntry=function(r,t){var a=c(r);var o=dk(t);var i;if(o!=="F")return a.index[o];for(i=a.first;i;i=i.next)if(i.key===t)return i};ik(u,{clear:function clear(){var t=this||r;var a=c(t);var o=a.index;var i=a.first;while(i){i.removed=true;i.previous&&(i.previous=i.previous.next=void 0);delete o[i.index];i=i.next}a.first=a.last=void 0;pk?a.size=0:t.size=0},delete:function(t){var a=this||r;var o=c(a);var i=getEntry(a,t);if(i){var v=i.next;var u=i.previous;delete o.index[i.index];i.removed=true;u&&(u.next=v);v&&(v.previous=u);o.first===i&&(o.first=v);o.last===i&&(o.last=u);pk?o.size--:a.size--}return!!i},forEach:function forEach(t){var a=c(this||r);var o=vk(t,arguments.length>1?arguments[1]:void 0);var i;while(i=i?i.next:a.first){o(i.value,i.key,this||r);while(i&&i.removed)i=i.previous}},has:function has(t){return!!getEntry(this||r,t)}});ik(u,o?{get:function get(t){var a=getEntry(this||r,t);return a&&a.value},set:function set(t,a){return define(this||r,t===0?0:t,a)}}:{add:function add(t){return define(this||r,t=t===0?0:t,t)}});pk&&ok(u,"size",{configurable:true,get:function(){return c(this||r).size}});return v},setStrong:function(t,a,o){var i=a+" Iterator";var v=mk(a);var u=mk(i);lk(t,a,(function(t,a){gk(this||r,{type:i,target:t,state:v(t),kind:a,last:void 0})}),(function(){var t=u(this||r);var a=t.kind;var o=t.last;while(o&&o.removed)o=o.previous;if(!t.target||!(t.last=o=o?o.next:t.state.first)){t.target=void 0;return fk(void 0,true)}return fk(a==="keys"?o.key:a==="values"?o.value:[o.key,o.value],false)}),o?"entries":"values",!o,true);hk(a)}};var bk=collection$2;var wk=_k;bk("Map",(function(t){return function Map(){return t(this||r,arguments.length?arguments[0]:void 0)}}),wk);var Ek=ar;var Tk=Ek.Map;var Ak=Tk;var Sk=Ak;var xk=Sk;var Ok=getDefaultExportFromCjs(xk);var Ik=_export;var kk=wi.some;var Pk=arrayMethodIsStrict$4;var Dk=Pk("some");Ik({target:"Array",proto:true,forced:!Dk},{some:function some(t){return kk(this||r,t,arguments.length>1?arguments[1]:void 0)}});var jk=getBuiltInPrototypeMethod$g;var Ck=jk("Array","some");var Fk=ur;var Lk=Ck;var Rk=Array.prototype;var some$2=function(r){var t=r.some;return r===Rk||Fk(Rk,r)&&t===Rk.some?Lk:t};var Mk=some$2;var Nk=Mk;var zk=Nk;var $k=getDefaultExportFromCjs(zk);var qk=getBuiltInPrototypeMethod$g;var Hk=qk("Array","keys");var Uk=Hk;var Gk=Uk;var Wk=wa;var Vk=nt;var Yk=ur;var Bk=Gk;var Xk=Array.prototype;var Kk={DOMTokenList:true,NodeList:true};var keys$1=function(r){var t=r.keys;return r===Xk||Yk(Xk,r)&&t===Xk.keys||Vk(Kk,Wk(r))?Bk:t};var Qk=keys$1;var Jk=getDefaultExportFromCjs(Qk);var Zk=arraySliceSimple;var rP=Math.floor;var mergeSort=function(r,t){var a=r.length;var o=rP(a/2);return a<8?insertionSort(r,t):merge(r,mergeSort(Zk(r,0,o),t),mergeSort(Zk(r,o),t),t)};var insertionSort=function(r,t){var a=r.length;var o=1;var i,v;while(o<a){v=o;i=r[o];while(v&&t(r[v-1],i)>0)r[v]=r[--v];v!==o++&&(r[v]=i)}return r};var merge=function(r,t,a,o){var i=t.length;var v=a.length;var u=0;var c=0;while(u<i||c<v)r[u+c]=u<i&&c<v?o(t[u],a[c])<=0?t[u++]:a[c++]:u<i?t[u++]:a[c++];return r};var tP=mergeSort;var eP=sr;var aP=eP.match(/firefox\/(\d+)/i);var nP=!!aP&&+aP[1];var oP=sr;var iP=/MSIE|Trident/.test(oP);var vP=sr;var uP=vP.match(/AppleWebKit\/(\d+)\./);var sP=!!uP&&+uP[1];var cP=_export;var lP=b;var fP=aCallable$e;var hP=toObject$e;var pP=lengthOfArrayLike$d;var dP=deletePropertyOrThrow$2;var yP=toString$7;var gP=fails$u;var mP=tP;var _P=arrayMethodIsStrict$4;var bP=nP;var wP=iP;var EP=mr;var TP=sP;var AP=[];var SP=lP(AP.sort);var xP=lP(AP.push);var OP=gP((function(){AP.sort(void 0)}));var IP=gP((function(){AP.sort(null)}));var kP=_P("sort");var PP=!gP((function(){if(EP)return EP<70;if(!(bP&&bP>3)){if(wP)return true;if(TP)return TP<603;var r="";var t,a,o,i;for(t=65;t<76;t++){a=String.fromCharCode(t);switch(t){case 66:case 69:case 70:case 72:o=3;break;case 68:case 71:o=4;break;default:o=2}for(i=0;i<47;i++)AP.push({k:a+i,v:o})}AP.sort((function(r,t){return t.v-r.v}));for(i=0;i<AP.length;i++){a=AP[i].k.charAt(0);r.charAt(r.length-1)!==a&&(r+=a)}return r!=="DGBEFHACIJK"}}));var DP=OP||!IP||!kP||!PP;var getSortCompare=function(r){return function(t,a){return a===void 0?-1:t===void 0?1:r!==void 0?+r(t,a)||0:yP(t)>yP(a)?1:-1}};cP({target:"Array",proto:true,forced:DP},{sort:function sort(t){t!==void 0&&fP(t);var a=hP(this||r);if(PP)return t===void 0?SP(a):SP(a,t);var o=[];var i=pP(a);var v,u;for(u=0;u<i;u++)u in a&&xP(o,a[u]);mP(o,getSortCompare(t));v=pP(o);u=0;while(u<v)a[u]=o[u++];while(u<i)dP(a,u++);return a}});var jP=getBuiltInPrototypeMethod$g;var CP=jP("Array","sort");var FP=ur;var LP=CP;var RP=Array.prototype;var sort$2=function(r){var t=r.sort;return r===RP||FP(RP,r)&&t===RP.sort?LP:t};var MP=sort$2;var NP=MP;var zP=NP;var $P=getDefaultExportFromCjs(zP);var qP=getBuiltInPrototypeMethod$g;var HP=qP("Array","values");var UP=HP;var GP=UP;var WP=wa;var VP=nt;var YP=ur;var BP=GP;var XP=Array.prototype;var KP={DOMTokenList:true,NodeList:true};var values$1=function(r){var t=r.values;return r===XP||YP(XP,r)&&t===XP.values||VP(KP,WP(r))?BP:t};var QP=values$1;var JP=getDefaultExportFromCjs(QP);var ZP=$l;var rD=getDefaultExportFromCjs(ZP);var tD=getBuiltInPrototypeMethod$g;var eD=tD("Array","entries");var aD=eD;var nD=aD;var oD=wa;var iD=nt;var vD=ur;var uD=nD;var sD=Array.prototype;var cD={DOMTokenList:true,NodeList:true};var entries$1=function(r){var t=r.entries;return r===sD||vD(sD,r)&&t===sD.entries||iD(cD,oD(r))?uD:t};var lD=entries$1;var fD=getDefaultExportFromCjs(lD);let hD;const pD=new Uint8Array(16);function rng(){if(!hD){hD=typeof crypto!=="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto);if(!hD)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported")}return hD(pD)}const dD=[];for(let r=0;r<256;++r)dD.push((r+256).toString(16).slice(1));function unsafeStringify(r,t=0){return dD[r[t+0]]+dD[r[t+1]]+dD[r[t+2]]+dD[r[t+3]]+"-"+dD[r[t+4]]+dD[r[t+5]]+"-"+dD[r[t+6]]+dD[r[t+7]]+"-"+dD[r[t+8]]+dD[r[t+9]]+"-"+dD[r[t+10]]+dD[r[t+11]]+dD[r[t+12]]+dD[r[t+13]]+dD[r[t+14]]+dD[r[t+15]]}const yD=typeof crypto!=="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var gD={randomUUID:yD};function v4(r,t,a){if(gD.randomUUID&&!t&&!r)return gD.randomUUID();r=r||{};const o=r.random||(r.rng||rng)();o[6]=o[6]&15|64;o[8]=o[8]&63|128;if(t){a=a||0;for(let r=0;r<16;++r)t[a+r]=o[r];return t}return unsafeStringify(o)}
/**
   * Determine whether a value can be used as an id.
   *
   * @param value - Input value of unknown type.
   * @returns True if the value is valid id, false otherwise.
   */function isId(r){return typeof r==="string"||typeof r==="number"}
/**
   * A queue.
   *
   * @typeParam T - The type of method names to be replaced by queued versions.
   */var mD=function(){
/**
     * Construct a new Queue.
     *
     * @param options - Queue configuration.
     */
function Queue(t){_classCallCheck(this||r,Queue);_defineProperty(this||r,"_queue",[]);_defineProperty(this||r,"_timeout",null);_defineProperty(this||r,"_extended",null);(this||r).delay=null;(this||r).max=Infinity;this.setOptions(t)}
/**
     * Update the configuration of the queue.
     *
     * @param options - Queue configuration.
     */_createClass(Queue,[{key:"setOptions",value:function setOptions(t){t&&typeof t.delay!=="undefined"&&((this||r).delay=t.delay);t&&typeof t.max!=="undefined"&&((this||r).max=t.max);this._flushIfNeeded()}
/**
       * Extend an object with queuing functionality.
       * The object will be extended with a function flush, and the methods provided in options.replace will be replaced with queued ones.
       *
       * @param object - The object to be extended.
       * @param options - Additional options.
       * @returns The created queue.
       */},{key:"destroy",value:function destroy(){this.flush();if((this||r)._extended){var t=(this||r)._extended.object;var a=(this||r)._extended.methods;for(var o=0;o<a.length;o++){var i=a[o];i.original?t[i.name]=i.original:delete t[i.name]}(this||r)._extended=null}}
/**
       * Replace a method on an object with a queued version.
       *
       * @param object - Object having the method.
       * @param method - The method name.
       */},{key:"replace",value:function replace(t,a){
/* eslint-disable-next-line @typescript-eslint/no-this-alias -- Function this is necessary in the function bellow, so class this has to be saved into a variable here. */
var o=this||r;var i=t[a];if(!i)throw new Error("Method "+a+" undefined");t[a]=function(){for(var t=arguments.length,a=new Array(t),v=0;v<t;v++)a[v]=arguments[v];o.queue({args:a,fn:i,context:this||r})}}
/**
       * Queue a call.
       *
       * @param entry - The function or entry to be queued.
       */},{key:"queue",value:function queue(t){typeof t==="function"?(this||r)._queue.push({fn:t}):(this||r)._queue.push(t);this._flushIfNeeded()}},{key:"_flushIfNeeded",value:function _flushIfNeeded(){var t=this||r;(this||r)._queue.length>(this||r).max&&this.flush();if((this||r)._timeout!=null){clearTimeout((this||r)._timeout);(this||r)._timeout=null}(this||r).queue.length>0&&typeof(this||r).delay==="number"&&((this||r)._timeout=S_((function(){t.flush()}),(this||r).delay))}},{key:"flush",value:function flush(){var t,a;Tg(t=um(a=(this||r)._queue).call(a,0)).call(t,(function(r){r.fn.apply(r.context||r.fn,r.args||[])}))}}],[{key:"extend",value:function extend(r,t){var a=new Queue(t);if(r.flush!==void 0)throw new Error("Target object already has a property flush");r.flush=function(){a.flush()};var o=[{name:"flush",original:void 0}];if(t&&t.replace)for(var i=0;i<t.replace.length;i++){var v=t.replace[i];o.push({name:v,original:r[v]});a.replace(r,v)}a._extended={object:r,methods:o};return a}}]);return Queue}();
/**
   * {@link DataSet} code that can be reused in {@link DataView} or other similar implementations of {@link DataInterface}.
   *
   * @typeParam Item - Item type that may or may not have an id.
   * @typeParam IdProp - Name of the property that contains the id.
   */var _D=function(){function DataSetPart(){_classCallCheck(this||r,DataSetPart);_defineProperty(this||r,"_subscribers",{"*":[],add:[],remove:[],update:[]});
/**
       * @deprecated Use on instead (PS: DataView.subscribe === DataView.on).
       */_defineProperty(this||r,"subscribe",DataSetPart.prototype.on);
/**
       * @deprecated Use off instead (PS: DataView.unsubscribe === DataView.off).
       */_defineProperty(this||r,"unsubscribe",DataSetPart.prototype.off)}_createClass(DataSetPart,[{key:"_trigger",value:
/**
       * Trigger an event
       *
       * @param event - Event name.
       * @param payload - Event payload.
       * @param senderId - Id of the sender.
       */
function _trigger(t,a,o){var i,v;if(t==="*")throw new Error("Cannot trigger event *");Tg(i=ky(v=[]).call(v,_toConsumableArray((this||r)._subscribers[t]),_toConsumableArray((this||r)._subscribers["*"]))).call(i,(function(r){r(t,a,o!=null?o:null)}))}
/**
       * Subscribe to an event, add an event listener.
       *
       * @remarks Non-function callbacks are ignored.
       * @param event - Event name.
       * @param callback - Callback method.
       */},{key:"on",value:function on(t,a){typeof a==="function"&&(this||r)._subscribers[t].push(a)}
/**
       * Unsubscribe from an event, remove an event listener.
       *
       * @remarks If the same callback was subscribed more than once **all** occurences will be removed.
       * @param event - Event name.
       * @param callback - Callback method.
       */},{key:"off",value:function off(t,a){var o;(this||r)._subscribers[t]=fh(o=(this||r)._subscribers[t]).call(o,(function(r){return r!==a}))}}]);return DataSetPart}();var bD=collection$2;var wD=_k;bD("Set",(function(t){return function Set(){return t(this||r,arguments.length?arguments[0]:void 0)}}),wD);var ED=ar;var TD=ED.Set;var AD=TD;var SD=AD;var xD=SD;var OD=getDefaultExportFromCjs(xD);var ID=getIterator$8;var kD=ID;var PD=kD;var DD=PD;var jD=DD;var CD=jD;var FD=CD;var LD=FD;var RD=LD;var MD=RD;var ND=getDefaultExportFromCjs(MD);function _createForOfIteratorHelper$2(r,t){var a=typeof by!=="undefined"&&Zp(r)||r["@@iterator"];if(!a){if(By(r)||(a=_unsupportedIterableToArray$2(r))||t&&r&&typeof r.length==="number"){a&&(r=a);var o=0;var i=function F(){};return{s:i,n:function n(){return o>=r.length?{done:true}:{done:false,value:r[o++]}},e:function e(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var v,u=true,c=false;return{s:function s(){a=a.call(r)},n:function n(){var r=a.next();u=r.done;return r},e:function e(r){c=true;v=r},f:function f(){try{u||a.return==null||a.return()}finally{if(c)throw v}}}}function _unsupportedIterableToArray$2(r,t){var a;if(r){if(typeof r==="string")return _arrayLikeToArray$2(r,t);var o=Dy(a=Object.prototype.toString.call(r)).call(a,8,-1);o==="Object"&&r.constructor&&(o=r.constructor.name);return o==="Map"||o==="Set"?qp(r):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray$2(r,t):void 0}}function _arrayLikeToArray$2(r,t){(t==null||t>r.length)&&(t=r.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=r[a];return o}
/**
   * Data stream
   *
   * @remarks
   * {@link DataStream} offers an always up to date stream of items from a {@link DataSet} or {@link DataView}.
   * That means that the stream is evaluated at the time of iteration, conversion to another data type or when {@link cache} is called, not when the {@link DataStream} was created.
   * Multiple invocations of for example {@link toItemArray} may yield different results (if the data source like for example {@link DataSet} gets modified).
   * @typeParam Item - The item type this stream is going to work with.
   */var zD=function(t){
/**
     * Create a new data stream.
     *
     * @param pairs - The id, item pairs.
     */
function DataStream(t){_classCallCheck(this||r,DataStream);(this||r)._pairs=t}_createClass(DataStream,[{key:t,value:lI.mark((function value(){var t,a,o,i,v;return lI.wrap((function value$(u){while(1)switch(u.prev=u.next){case 0:t=_createForOfIteratorHelper$2((this||r)._pairs);u.prev=1;t.s();case 3:if((a=t.n()).done){u.next=9;break}o=_slicedToArray(a.value,2),i=o[0],v=o[1];u.next=7;return[i,v];case 7:u.next=3;break;case 9:u.next=14;break;case 11:u.prev=11;u.t0=u.catch(1);t.e(u.t0);case 14:u.prev=14;t.f();return u.finish(14);case 17:case"end":return u.stop()}}),value,this||r,[[1,11,14,17]])}))},{key:"entries",value:lI.mark((function entries(){var t,a,o,i,v;return lI.wrap((function entries$(u){while(1)switch(u.prev=u.next){case 0:t=_createForOfIteratorHelper$2((this||r)._pairs);u.prev=1;t.s();case 3:if((a=t.n()).done){u.next=9;break}o=_slicedToArray(a.value,2),i=o[0],v=o[1];u.next=7;return[i,v];case 7:u.next=3;break;case 9:u.next=14;break;case 11:u.prev=11;u.t0=u.catch(1);t.e(u.t0);case 14:u.prev=14;t.f();return u.finish(14);case 17:case"end":return u.stop()}}),entries,this||r,[[1,11,14,17]])}))},{key:"keys",value:lI.mark((function keys(){var t,a,o,i;return lI.wrap((function keys$(v){while(1)switch(v.prev=v.next){case 0:t=_createForOfIteratorHelper$2((this||r)._pairs);v.prev=1;t.s();case 3:if((a=t.n()).done){v.next=9;break}o=_slicedToArray(a.value,1),i=o[0];v.next=7;return i;case 7:v.next=3;break;case 9:v.next=14;break;case 11:v.prev=11;v.t0=v.catch(1);t.e(v.t0);case 14:v.prev=14;t.f();return v.finish(14);case 17:case"end":return v.stop()}}),keys,this||r,[[1,11,14,17]])}))},{key:"values",value:lI.mark((function values(){var t,a,o,i;return lI.wrap((function values$(v){while(1)switch(v.prev=v.next){case 0:t=_createForOfIteratorHelper$2((this||r)._pairs);v.prev=1;t.s();case 3:if((a=t.n()).done){v.next=9;break}o=_slicedToArray(a.value,2),i=o[1];v.next=7;return i;case 7:v.next=3;break;case 9:v.next=14;break;case 11:v.prev=11;v.t0=v.catch(1);t.e(v.t0);case 14:v.prev=14;t.f();return v.finish(14);case 17:case"end":return v.stop()}}),values,this||r,[[1,11,14,17]])}))
/**
       * Return an array containing all the ids in this stream.
       *
       * @remarks
       * The array may contain duplicities.
       * @returns The array with all ids from this stream.
       */},{key:"toIdArray",value:function toIdArray(){var t;return Sh(t=_toConsumableArray((this||r)._pairs)).call(t,(function(r){return r[0]}))}
/**
       * Return an array containing all the items in this stream.
       *
       * @remarks
       * The array may contain duplicities.
       * @returns The array with all items from this stream.
       */},{key:"toItemArray",value:function toItemArray(){var t;return Sh(t=_toConsumableArray((this||r)._pairs)).call(t,(function(r){return r[1]}))}
/**
       * Return an array containing all the entries in this stream.
       *
       * @remarks
       * The array may contain duplicities.
       * @returns The array with all entries from this stream.
       */},{key:"toEntryArray",value:function toEntryArray(){return _toConsumableArray((this||r)._pairs)}
/**
       * Return an object map containing all the items in this stream accessible by ids.
       *
       * @remarks
       * In case of duplicate ids (coerced to string so `7 == '7'`) the last encoutered appears in the returned object.
       * @returns The object map of all id → item pairs from this stream.
       */},{key:"toObjectMap",value:function toObjectMap(){var t=Xm(null);var a,o=_createForOfIteratorHelper$2((this||r)._pairs);try{for(o.s();!(a=o.n()).done;){var i=_slicedToArray(a.value,2),v=i[0],u=i[1];t[v]=u}}catch(r){o.e(r)}finally{o.f()}return t}
/**
       * Return a map containing all the items in this stream accessible by ids.
       *
       * @returns The map of all id → item pairs from this stream.
       */},{key:"toMap",value:function toMap(){return new Ok((this||r)._pairs)}
/**
       * Return a set containing all the (unique) ids in this stream.
       *
       * @returns The set of all ids from this stream.
       */},{key:"toIdSet",value:function toIdSet(){return new OD(this.toIdArray())}
/**
       * Return a set containing all the (unique) items in this stream.
       *
       * @returns The set of all items from this stream.
       */},{key:"toItemSet",value:function toItemSet(){return new OD(this.toItemArray())}
/**
       * Cache the items from this stream.
       *
       * @remarks
       * This method allows for items to be fetched immediatelly and used (possibly multiple times) later.
       * It can also be used to optimize performance as {@link DataStream} would otherwise reevaluate everything upon each iteration.
       *
       * ## Example
       * ```javascript
       * const ds = new DataSet([…])
       *
       * const cachedStream = ds.stream()
       *   .filter(…)
       *   .sort(…)
       *   .map(…)
       *   .cached(…) // Data are fetched, processed and cached here.
       *
       * ds.clear()
       * chachedStream // Still has all the items.
       * ```
       * @returns A new {@link DataStream} with cached items (detached from the original {@link DataSet}).
       */},{key:"cache",value:function cache(){return new DataStream(_toConsumableArray((this||r)._pairs))}
/**
       * Get the distinct values of given property.
       *
       * @param callback - The function that picks and possibly converts the property.
       * @typeParam T - The type of the distinct value.
       * @returns A set of all distinct properties.
       */},{key:"distinct",value:function distinct(t){var a=new OD;var o,i=_createForOfIteratorHelper$2((this||r)._pairs);try{for(i.s();!(o=i.n()).done;){var v=_slicedToArray(o.value,2),u=v[0],c=v[1];a.add(t(c,u))}}catch(r){i.e(r)}finally{i.f()}return a}
/**
       * Filter the items of the stream.
       *
       * @param callback - The function that decides whether an item will be included.
       * @returns A new data stream with the filtered items.
       */},{key:"filter",value:function filter(t){var a=(this||r)._pairs;return new DataStream({[rD](){return lI.mark((function _callee(){var r,o,i,v,u;return lI.wrap((function _callee$(c){while(1)switch(c.prev=c.next){case 0:r=_createForOfIteratorHelper$2(a);c.prev=1;r.s();case 3:if((o=r.n()).done){c.next=10;break}i=_slicedToArray(o.value,2),v=i[0],u=i[1];if(!t(u,v)){c.next=8;break}c.next=8;return[v,u];case 8:c.next=3;break;case 10:c.next=15;break;case 12:c.prev=12;c.t0=c.catch(1);r.e(c.t0);case 15:c.prev=15;r.f();return c.finish(15);case 18:case"end":return c.stop()}}),_callee,null,[[1,12,15,18]])}))()}})}
/**
       * Execute a callback for each item of the stream.
       *
       * @param callback - The function that will be invoked for each item.
       */},{key:"forEach",value:function forEach(t){var a,o=_createForOfIteratorHelper$2((this||r)._pairs);try{for(o.s();!(a=o.n()).done;){var i=_slicedToArray(a.value,2),v=i[0],u=i[1];t(u,v)}}catch(r){o.e(r)}finally{o.f()}}
/**
       * Map the items into a different type.
       *
       * @param callback - The function that does the conversion.
       * @typeParam Mapped - The type of the item after mapping.
       * @returns A new data stream with the mapped items.
       */},{key:"map",value:function map(t){var a=(this||r)._pairs;return new DataStream({[rD](){return lI.mark((function _callee2(){var r,o,i,v,u;return lI.wrap((function _callee2$(c){while(1)switch(c.prev=c.next){case 0:r=_createForOfIteratorHelper$2(a);c.prev=1;r.s();case 3:if((o=r.n()).done){c.next=9;break}i=_slicedToArray(o.value,2),v=i[0],u=i[1];c.next=7;return[v,t(u,v)];case 7:c.next=3;break;case 9:c.next=14;break;case 11:c.prev=11;c.t0=c.catch(1);r.e(c.t0);case 14:c.prev=14;r.f();return c.finish(14);case 17:case"end":return c.stop()}}),_callee2,null,[[1,11,14,17]])}))()}})}
/**
       * Get the item with the maximum value of given property.
       *
       * @param callback - The function that picks and possibly converts the property.
       * @returns The item with the maximum if found otherwise null.
       */},{key:"max",value:function max(t){var a=ND((this||r)._pairs);var o=a.next();if(o.done)return null;var i=o.value[1];var v=t(o.value[1],o.value[0]);while(!(o=a.next()).done){var u=_slicedToArray(o.value,2),c=u[0],l=u[1];var h=t(l,c);if(h>v){v=h;i=l}}return i}
/**
       * Get the item with the minimum value of given property.
       *
       * @param callback - The function that picks and possibly converts the property.
       * @returns The item with the minimum if found otherwise null.
       */},{key:"min",value:function min(t){var a=ND((this||r)._pairs);var o=a.next();if(o.done)return null;var i=o.value[1];var v=t(o.value[1],o.value[0]);while(!(o=a.next()).done){var u=_slicedToArray(o.value,2),c=u[0],l=u[1];var h=t(l,c);if(h<v){v=h;i=l}}return i}
/**
       * Reduce the items into a single value.
       *
       * @param callback - The function that does the reduction.
       * @param accumulator - The initial value of the accumulator.
       * @typeParam T - The type of the accumulated value.
       * @returns The reduced value.
       */},{key:"reduce",value:function reduce(t,a){var o,i=_createForOfIteratorHelper$2((this||r)._pairs);try{for(i.s();!(o=i.n()).done;){var v=_slicedToArray(o.value,2),u=v[0],c=v[1];a=t(a,c,u)}}catch(r){i.e(r)}finally{i.f()}return a}
/**
       * Sort the items.
       *
       * @param callback - Item comparator.
       * @returns A new stream with sorted items.
       */},{key:"sort",value:function sort(t){var a=this||r;return new DataStream({[rD]:function(){var r;return ND($P(r=_toConsumableArray(a._pairs)).call(r,(function(r,a){var o=_slicedToArray(r,2),i=o[0],v=o[1];var u=_slicedToArray(a,2),c=u[0],l=u[1];return t(v,l,i,c)})))}})}}]);return DataStream}(rD);function ownKeys(r,t){var a=og(r);if(zw){var o=zw(r);t&&(o=fh(o).call(o,(function(t){return rE(r,t).enumerable}))),a.push.apply(a,o)}return a}function _objectSpread(r){for(var t=1;t<arguments.length;t++){var a,o;var i=null!=arguments[t]?arguments[t]:{};t%2?Tg(a=ownKeys(Object(i),!0)).call(a,(function(t){_defineProperty(r,t,i[t])})):fE?AE(r,fE(i)):Tg(o=ownKeys(Object(i))).call(o,(function(t){xE(r,t,rE(i,t))}))}return r}function _createForOfIteratorHelper$1(r,t){var a=typeof by!=="undefined"&&Zp(r)||r["@@iterator"];if(!a){if(By(r)||(a=_unsupportedIterableToArray$1(r))||t&&r&&typeof r.length==="number"){a&&(r=a);var o=0;var i=function F(){};return{s:i,n:function n(){return o>=r.length?{done:true}:{done:false,value:r[o++]}},e:function e(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var v,u=true,c=false;return{s:function s(){a=a.call(r)},n:function n(){var r=a.next();u=r.done;return r},e:function e(r){c=true;v=r},f:function f(){try{u||a.return==null||a.return()}finally{if(c)throw v}}}}function _unsupportedIterableToArray$1(r,t){var a;if(r){if(typeof r==="string")return _arrayLikeToArray$1(r,t);var o=Dy(a=Object.prototype.toString.call(r)).call(a,8,-1);o==="Object"&&r.constructor&&(o=r.constructor.name);return o==="Map"||o==="Set"?qp(r):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray$1(r,t):void 0}}function _arrayLikeToArray$1(r,t){(t==null||t>r.length)&&(t=r.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=r[a];return o}function _createSuper$1(t){var a=_isNativeReflectConstruct$1();return function _createSuperInternal(){var o,i=_getPrototypeOf(t);if(a){var v=_getPrototypeOf(this||r).constructor;o=Cw(i,arguments,v)}else o=i.apply(this||r,arguments);return _possibleConstructorReturn(this||r,o)}}function _isNativeReflectConstruct$1(){if(typeof Reflect==="undefined"||!Cw)return false;if(Cw.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Cw(Boolean,[],(function(){})));return true}catch(r){return false}}
/**
   * Add an id to given item if it doesn't have one already.
   *
   * @remarks
   * The item will be modified.
   * @param item - The item that will have an id after a call to this function.
   * @param idProp - The key of the id property.
   * @typeParam Item - Item type that may or may not have an id.
   * @typeParam IdProp - Name of the property that contains the id.
   * @returns true
   */function ensureFullItem(r,t){r[t]==null&&(r[t]=v4());return r}
/**
   * # DataSet
   *
   * Vis.js comes with a flexible DataSet, which can be used to hold and
   * manipulate unstructured data and listen for changes in the data. The DataSet
   * is key/value based. Data items can be added, updated and removed from the
   * DataSet, and one can subscribe to changes in the DataSet. The data in the
   * DataSet can be filtered and ordered. Data can be normalized when appending it
   * to the DataSet as well.
   *
   * ## Example
   *
   * The following example shows how to use a DataSet.
   *
   * ```javascript
   * // create a DataSet
   * var options = {};
   * var data = new vis.DataSet(options);
   *
   * // add items
   * // note that the data items can contain different properties and data formats
   * data.add([
   *   {id: 1, text: 'item 1', date: new Date(2013, 6, 20), group: 1, first: true},
   *   {id: 2, text: 'item 2', date: '2013-06-23', group: 2},
   *   {id: 3, text: 'item 3', date: '2013-06-25', group: 2},
   *   {id: 4, text: 'item 4'}
   * ]);
   *
   * // subscribe to any change in the DataSet
   * data.on('*', function (event, properties, senderId) {
   *   console.log('event', event, properties);
   * });
   *
   * // update an existing item
   * data.update({id: 2, group: 1});
   *
   * // remove an item
   * data.remove(4);
   *
   * // get all ids
   * var ids = data.getIds();
   * console.log('ids', ids);
   *
   * // get a specific item
   * var item1 = data.get(1);
   * console.log('item1', item1);
   *
   * // retrieve a filtered subset of the data
   * var items = data.get({
   *   filter: function (item) {
   *     return item.group == 1;
   *   }
   * });
   * console.log('filtered items', items);
   * ```
   *
   * @typeParam Item - Item type that may or may not have an id.
   * @typeParam IdProp - Name of the property that contains the id.
   */var $D=function(t){_inherits(DataSet,t);var a=_createSuper$1(DataSet);
/**
     * Construct a new DataSet.
     *
     * @param data - Initial data or options.
     * @param options - Options (type error if data is also options).
     */function DataSet(t,o){var i;_classCallCheck(this||r,DataSet);i=a.call(this||r);_defineProperty(_assertThisInitialized(i),"_queue",null);if(t&&!By(t)){o=t;t=[]}i._options=o||{};i._data=new Ok;i.length=0;i._idProp=i._options.fieldId||"id";t&&t.length&&i.add(t);i.setOptions(o);return i}
/**
     * Set new options.
     *
     * @param options - The new options.
     */_createClass(DataSet,[{key:"idProp",get:function get(){return(this||r)._idProp}},{key:"setOptions",value:function setOptions(t){if(t&&t.queue!==void 0)if(t.queue===false){if((this||r)._queue){(this||r)._queue.destroy();(this||r)._queue=null}}else{(this||r)._queue||((this||r)._queue=mD.extend(this||r,{replace:["add","update","remove"]}));t.queue&&typeof t.queue==="object"&&(this||r)._queue.setOptions(t.queue)}}
/**
       * Add a data item or an array with items.
       *
       * After the items are added to the DataSet, the DataSet will trigger an event `add`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
       *
       * ## Example
       *
       * ```javascript
       * // create a DataSet
       * const data = new vis.DataSet()
       *
       * // add items
       * const ids = data.add([
       *   { id: 1, text: 'item 1' },
       *   { id: 2, text: 'item 2' },
       *   { text: 'item without an id' }
       * ])
       *
       * console.log(ids) // [1, 2, '<UUIDv4>']
       * ```
       *
       * @param data - Items to be added (ids will be generated if missing).
       * @param senderId - Sender id.
       * @returns addedIds - Array with the ids (generated if not present) of the added items.
       * @throws When an item with the same id as any of the added items already exists.
       */},{key:"add",value:function add(t,a){var o=this||r;var i=[];var v;if(By(t)){var u=Sh(t).call(t,(function(r){return r[o._idProp]}));if($k(u).call(u,(function(r){return o._data.has(r)})))throw new Error("A duplicate id was found in the parameter array.");for(var c=0,l=t.length;c<l;c++){v=this._addItem(t[c]);i.push(v)}}else{if(!t||typeof t!=="object")throw new Error("Unknown dataType");v=this._addItem(t);i.push(v)}i.length&&this._trigger("add",{items:i},a);return i}
/**
       * Update existing items. When an item does not exist, it will be created.
       *
       * @remarks
       * The provided properties will be merged in the existing item. When an item does not exist, it will be created.
       *
       * After the items are updated, the DataSet will trigger an event `add` for the added items, and an event `update`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
       *
       * ## Example
       *
       * ```javascript
       * // create a DataSet
       * const data = new vis.DataSet([
       *   { id: 1, text: 'item 1' },
       *   { id: 2, text: 'item 2' },
       *   { id: 3, text: 'item 3' }
       * ])
       *
       * // update items
       * const ids = data.update([
       *   { id: 2, text: 'item 2 (updated)' },
       *   { id: 4, text: 'item 4 (new)' }
       * ])
       *
       * console.log(ids) // [2, 4]
       * ```
       *
       * ## Warning for TypeScript users
       * This method may introduce partial items into the data set. Use add or updateOnly instead for better type safety.
       * @param data - Items to be updated (if the id is already present) or added (if the id is missing).
       * @param senderId - Sender id.
       * @returns updatedIds - The ids of the added (these may be newly generated if there was no id in the item from the data) or updated items.
       * @throws When the supplied data is neither an item nor an array of items.
       */},{key:"update",value:function update(t,a){var o=this||r;var i=[];var v=[];var u=[];var c=[];var l=(this||r)._idProp;var h=function addOrUpdate(r){var t=r[l];if(t!=null&&o._data.has(t)){var a=r;var h=km({},o._data.get(t));var p=o._updateItem(a);v.push(p);c.push(a);u.push(h)}else{var d=o._addItem(r);i.push(d)}};if(By(t))for(var p=0,d=t.length;p<d;p++)t[p]&&typeof t[p]==="object"?h(t[p]):console.warn("Ignoring input item, which is not an object at index "+p);else{if(!t||typeof t!=="object")throw new Error("Unknown dataType");h(t)}i.length&&this._trigger("add",{items:i},a);if(v.length){var y={items:v,oldData:u,data:c};this._trigger("update",y,a)}return ky(i).call(i,v)}
/**
       * Update existing items. When an item does not exist, an error will be thrown.
       *
       * @remarks
       * The provided properties will be deeply merged into the existing item.
       * When an item does not exist (id not present in the data set or absent), an error will be thrown and nothing will be changed.
       *
       * After the items are updated, the DataSet will trigger an event `update`.
       * When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
       *
       * ## Example
       *
       * ```javascript
       * // create a DataSet
       * const data = new vis.DataSet([
       *   { id: 1, text: 'item 1' },
       *   { id: 2, text: 'item 2' },
       *   { id: 3, text: 'item 3' },
       * ])
       *
       * // update items
       * const ids = data.update([
       *   { id: 2, text: 'item 2 (updated)' }, // works
       *   // { id: 4, text: 'item 4 (new)' }, // would throw
       *   // { text: 'item 4 (new)' }, // would also throw
       * ])
       *
       * console.log(ids) // [2]
       * ```
       * @param data - Updates (the id and optionally other props) to the items in this data set.
       * @param senderId - Sender id.
       * @returns updatedIds - The ids of the updated items.
       * @throws When the supplied data is neither an item nor an array of items, when the ids are missing.
       */},{key:"updateOnly",value:function updateOnly(t,a){var o,i=this||r;By(t)||(t=[t]);var v=Sh(o=Sh(t).call(t,(function(r){var t=i._data.get(r[i._idProp]);if(t==null)throw new Error("Updating non-existent items is not allowed.");return{oldData:t,update:r}}))).call(o,(function(r){var t=r.oldData,a=r.update;var o=t[i._idProp];var v=pureDeepObjectAssign(t,a);i._data.set(o,v);return{id:o,oldData:t,updatedData:v}}));if(v.length){var u={items:Sh(v).call(v,(function(r){return r.id})),oldData:Sh(v).call(v,(function(r){return r.oldData})),data:Sh(v).call(v,(function(r){return r.updatedData}))};this._trigger("update",u,a);return u.items}return[]}},{key:"get",value:function get(t,a){var o=void 0;var i=void 0;var v=void 0;if(isId(t)){o=t;v=a}else if(By(t)){i=t;v=a}else v=t;var u=v&&v.returnType==="Object"?"Object":"Array";var c=v&&fh(v);var l=[];var h=void 0;var p=void 0;var d=void 0;if(o!=null){h=(this||r)._data.get(o);h&&c&&!c(h)&&(h=void 0)}else if(i!=null)for(var y=0,g=i.length;y<g;y++){h=(this||r)._data.get(i[y]);h==null||c&&!c(h)||l.push(h)}else{var m;p=_toConsumableArray(Jk(m=(this||r)._data).call(m));for(var _=0,b=p.length;_<b;_++){d=p[_];h=(this||r)._data.get(d);h==null||c&&!c(h)||l.push(h)}}v&&v.order&&o==void 0&&this._sort(l,v.order);if(v&&v.fields){var w=v.fields;if(o!=void 0&&h!=null)h=this._filterFields(h,w);else for(var E=0,T=l.length;E<T;E++)l[E]=this._filterFields(l[E],w)}if(u=="Object"){var A={};for(var S=0,x=l.length;S<x;S++){var O=l[S];var I=O[(this||r)._idProp];A[I]=O}return A}if(o!=null){var k;return(k=h)!==null&&k!==void 0?k:null}return l}},{key:"getIds",value:function getIds(t){var a=(this||r)._data;var o=t&&fh(t);var i=t&&t.order;var v=_toConsumableArray(Jk(a).call(a));var u=[];if(o)if(i){var c=[];for(var l=0,h=v.length;l<h;l++){var p=v[l];var d=(this||r)._data.get(p);d!=null&&o(d)&&c.push(d)}this._sort(c,i);for(var y=0,g=c.length;y<g;y++)u.push(c[y][(this||r)._idProp])}else for(var m=0,_=v.length;m<_;m++){var b=v[m];var w=(this||r)._data.get(b);w!=null&&o(w)&&u.push(w[(this||r)._idProp])}else if(i){var E=[];for(var T=0,A=v.length;T<A;T++){var S=v[T];E.push(a.get(S))}this._sort(E,i);for(var x=0,O=E.length;x<O;x++)u.push(E[x][(this||r)._idProp])}else for(var I=0,k=v.length;I<k;I++){var P=v[I];var D=a.get(P);D!=null&&u.push(D[(this||r)._idProp])}return u}},{key:"getDataSet",value:function getDataSet(){return this||r}},{key:"forEach",value:function forEach(t,a){var o=a&&fh(a);var i=(this||r)._data;var v=_toConsumableArray(Jk(i).call(i));if(a&&a.order){var u=this.get(a);for(var c=0,l=u.length;c<l;c++){var h=u[c];var p=h[(this||r)._idProp];t(h,p)}}else for(var d=0,y=v.length;d<y;d++){var g=v[d];var m=(this||r)._data.get(g);m==null||o&&!o(m)||t(m,g)}}},{key:"map",value:function map(t,a){var o=a&&fh(a);var i=[];var v=(this||r)._data;var u=_toConsumableArray(Jk(v).call(v));for(var c=0,l=u.length;c<l;c++){var h=u[c];var p=(this||r)._data.get(h);p==null||o&&!o(p)||i.push(t(p,h))}a&&a.order&&this._sort(i,a.order);return i}
/**
       * Filter the fields of an item.
       *
       * @param item - The item whose fields should be filtered.
       * @param fields - The names of the fields that will be kept.
       * @typeParam K - Field name type.
       * @returns The item without any additional fields.
       */},{key:"_filterFields",value:function _filterFields(r,t){var a;return r?Zf(a=By(t)?t:og(t)).call(a,(function(t,a){t[a]=r[a];return t}),{}):r}
/**
       * Sort the provided array with items.
       *
       * @param items - Items to be sorted in place.
       * @param order - A field name or custom sort function.
       * @typeParam T - The type of the items in the items array.
       */},{key:"_sort",value:function _sort(r,t){if(typeof t==="string"){var a=t;$P(r).call(r,(function(r,t){var o=r[a];var i=t[a];return o>i?1:o<i?-1:0}))}else{if(typeof t!=="function")throw new TypeError("Order must be a function or a string");$P(r).call(r,t)}}
/**
       * Remove an item or multiple items by “reference” (only the id is used) or by id.
       *
       * The method ignores removal of non-existing items, and returns an array containing the ids of the items which are actually removed from the DataSet.
       *
       * After the items are removed, the DataSet will trigger an event `remove` for the removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
       *
       * ## Example
       * ```javascript
       * // create a DataSet
       * const data = new vis.DataSet([
       *   { id: 1, text: 'item 1' },
       *   { id: 2, text: 'item 2' },
       *   { id: 3, text: 'item 3' }
       * ])
       *
       * // remove items
       * const ids = data.remove([2, { id: 3 }, 4])
       *
       * console.log(ids) // [2, 3]
       * ```
       *
       * @param id - One or more items or ids of items to be removed.
       * @param senderId - Sender id.
       * @returns The ids of the removed items.
       */},{key:"remove",value:function remove(t,a){var o=[];var i=[];var v=By(t)?t:[t];for(var u=0,c=v.length;u<c;u++){var l=this._remove(v[u]);if(l){var h=l[(this||r)._idProp];if(h!=null){o.push(h);i.push(l)}}}o.length&&this._trigger("remove",{items:o,oldData:i},a);return o}
/**
       * Remove an item by its id or reference.
       *
       * @param id - Id of an item or the item itself.
       * @returns The removed item if removed, null otherwise.
       */},{key:"_remove",value:function _remove(t){var a;isId(t)?a=t:t&&typeof t==="object"&&(a=t[(this||r)._idProp]);if(a!=null&&(this||r)._data.has(a)){var o=(this||r)._data.get(a)||null;(this||r)._data.delete(a);--(this||r).length;return o}return null}
/**
       * Clear the entire data set.
       *
       * After the items are removed, the {@link DataSet} will trigger an event `remove` for all removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
       *
       * @param senderId - Sender id.
       * @returns removedIds - The ids of all removed items.
       */},{key:"clear",value:function clear(t){var a;var o=_toConsumableArray(Jk(a=(this||r)._data).call(a));var i=[];for(var v=0,u=o.length;v<u;v++)i.push((this||r)._data.get(o[v]));(this||r)._data.clear();(this||r).length=0;this._trigger("remove",{items:o,oldData:i},t);return o}
/**
       * Find the item with maximum value of a specified field.
       *
       * @param field - Name of the property that should be searched for max value.
       * @returns Item containing max value, or null if no items.
       */},{key:"max",value:function max(t){var a;var max=null;var o=null;var i,v=_createForOfIteratorHelper$1(JP(a=(this||r)._data).call(a));try{for(v.s();!(i=v.n()).done;){var u=i.value;var c=u[t];if(typeof c==="number"&&(o==null||c>o)){max=u;o=c}}}catch(r){v.e(r)}finally{v.f()}return max||null}
/**
       * Find the item with minimum value of a specified field.
       *
       * @param field - Name of the property that should be searched for min value.
       * @returns Item containing min value, or null if no items.
       */},{key:"min",value:function min(t){var a;var min=null;var o=null;var i,v=_createForOfIteratorHelper$1(JP(a=(this||r)._data).call(a));try{for(v.s();!(i=v.n()).done;){var u=i.value;var c=u[t];if(typeof c==="number"&&(o==null||c<o)){min=u;o=c}}}catch(r){v.e(r)}finally{v.f()}return min||null}
/**
       * Find all distinct values of a specified field
       *
       * @param prop - The property name whose distinct values should be returned.
       * @returns Unordered array containing all distinct values. Items without specified property are ignored.
       */},{key:"distinct",value:function distinct(t){var a=(this||r)._data;var o=_toConsumableArray(Jk(a).call(a));var i=[];var v=0;for(var u=0,c=o.length;u<c;u++){var l=o[u];var h=a.get(l);var p=h[t];var d=false;for(var y=0;y<v;y++)if(i[y]==p){d=true;break}if(!d&&p!==void 0){i[v]=p;v++}}return i}
/**
       * Add a single item. Will fail when an item with the same id already exists.
       *
       * @param item - A new item to be added.
       * @returns Added item's id. An id is generated when it is not present in the item.
       */},{key:"_addItem",value:function _addItem(t){var a=ensureFullItem(t,(this||r)._idProp);var o=a[(this||r)._idProp];if((this||r)._data.has(o))throw new Error("Cannot add item: item with id "+o+" already exists");(this||r)._data.set(o,a);++(this||r).length;return o}
/**
       * Update a single item: merge with existing item.
       * Will fail when the item has no id, or when there does not exist an item with the same id.
       *
       * @param update - The new item
       * @returns The id of the updated item.
       */},{key:"_updateItem",value:function _updateItem(t){var a=t[(this||r)._idProp];if(a==null)throw new Error("Cannot update item: item has no id (item: "+e_(t)+")");var o=(this||r)._data.get(a);if(!o)throw new Error("Cannot update item: no item with id "+a+" found");(this||r)._data.set(a,_objectSpread(_objectSpread({},o),t));return a}},{key:"stream",value:function stream(t){if(t){var a=(this||r)._data;return new zD({[rD](){return lI.mark((function _callee(){var r,o,i,v;return lI.wrap((function _callee$(u){while(1)switch(u.prev=u.next){case 0:r=_createForOfIteratorHelper$1(t);u.prev=1;r.s();case 3:if((o=r.n()).done){u.next=11;break}i=o.value;v=a.get(i);if(!(v!=null)){u.next=9;break}u.next=9;return[i,v];case 9:u.next=3;break;case 11:u.next=16;break;case 13:u.prev=13;u.t0=u.catch(1);r.e(u.t0);case 16:u.prev=16;r.f();return u.finish(16);case 19:case"end":return u.stop()}}),_callee,null,[[1,13,16,19]])}))()}})}var o;return new zD({[rD]:Of(o=fD((this||r)._data)).call(o,(this||r)._data)})}}]);return DataSet}(_D);function _createForOfIteratorHelper(r,t){var a=typeof by!=="undefined"&&Zp(r)||r["@@iterator"];if(!a){if(By(r)||(a=_unsupportedIterableToArray(r))||t&&r&&typeof r.length==="number"){a&&(r=a);var o=0;var i=function F(){};return{s:i,n:function n(){return o>=r.length?{done:true}:{done:false,value:r[o++]}},e:function e(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var v,u=true,c=false;return{s:function s(){a=a.call(r)},n:function n(){var r=a.next();u=r.done;return r},e:function e(r){c=true;v=r},f:function f(){try{u||a.return==null||a.return()}finally{if(c)throw v}}}}function _unsupportedIterableToArray(r,t){var a;if(r){if(typeof r==="string")return _arrayLikeToArray(r,t);var o=Dy(a=Object.prototype.toString.call(r)).call(a,8,-1);o==="Object"&&r.constructor&&(o=r.constructor.name);return o==="Map"||o==="Set"?qp(r):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(r,t):void 0}}function _arrayLikeToArray(r,t){(t==null||t>r.length)&&(t=r.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=r[a];return o}function _createSuper(t){var a=_isNativeReflectConstruct();return function _createSuperInternal(){var o,i=_getPrototypeOf(t);if(a){var v=_getPrototypeOf(this||r).constructor;o=Cw(i,arguments,v)}else o=i.apply(this||r,arguments);return _possibleConstructorReturn(this||r,o)}}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Cw)return false;if(Cw.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Cw(Boolean,[],(function(){})));return true}catch(r){return false}}
/**
   * DataView
   *
   * A DataView offers a filtered and/or formatted view on a DataSet. One can subscribe to changes in a DataView, and easily get filtered or formatted data without having to specify filters and field types all the time.
   *
   * ## Example
   * ```javascript
   * // create a DataSet
   * var data = new vis.DataSet();
   * data.add([
   *   {id: 1, text: 'item 1', date: new Date(2013, 6, 20), group: 1, first: true},
   *   {id: 2, text: 'item 2', date: '2013-06-23', group: 2},
   *   {id: 3, text: 'item 3', date: '2013-06-25', group: 2},
   *   {id: 4, text: 'item 4'}
   * ]);
   *
   * // create a DataView
   * // the view will only contain items having a property group with value 1,
   * // and will only output fields id, text, and date.
   * var view = new vis.DataView(data, {
   *   filter: function (item) {
   *     return (item.group == 1);
   *   },
   *   fields: ['id', 'text', 'date']
   * });
   *
   * // subscribe to any change in the DataView
   * view.on('*', function (event, properties, senderId) {
   *   console.log('event', event, properties);
   * });
   *
   * // update an item in the data set
   * data.update({id: 2, group: 1});
   *
   * // get all ids in the view
   * var ids = view.getIds();
   * console.log('ids', ids); // will output [1, 2]
   *
   * // get all items in the view
   * var items = view.get();
   * ```
   *
   * @typeParam Item - Item type that may or may not have an id.
   * @typeParam IdProp - Name of the property that contains the id.
   */var qD=function(t){_inherits(DataView,t);var a=_createSuper(DataView);
/**
     * Create a DataView.
     *
     * @param data - The instance containing data (directly or indirectly).
     * @param options - Options to configure this data view.
     */function DataView(t,o){var i;var v;_classCallCheck(this||r,DataView);v=a.call(this||r);_defineProperty(_assertThisInitialized(v),"length",0);_defineProperty(_assertThisInitialized(v),"_ids",new OD);v._options=o||{};v._listener=Of(i=v._onEvent).call(i,_assertThisInitialized(v));v.setData(t);return v}
/**
     * Set a data source for the view.
     *
     * @param data - The instance containing data (directly or indirectly).
     * @remarks
     * Note that when the data view is bound to a data set it won't be garbage
     * collected unless the data set is too. Use `dataView.setData(null)` or
     * `dataView.dispose()` to enable garbage collection before you lose the last
     * reference.
     */_createClass(DataView,[{key:"idProp",get:function get(){return this.getDataSet().idProp}},{key:"setData",value:function setData(t){if((this||r)._data){(this||r)._data.off&&(this||r)._data.off("*",(this||r)._listener);var a=(this||r)._data.getIds({filter:fh((this||r)._options)});var o=(this||r)._data.get(a);(this||r)._ids.clear();(this||r).length=0;this._trigger("remove",{items:a,oldData:o})}if(t!=null){(this||r)._data=t;var i=(this||r)._data.getIds({filter:fh((this||r)._options)});for(var v=0,u=i.length;v<u;v++){var c=i[v];(this||r)._ids.add(c)}(this||r).length=i.length;this._trigger("add",{items:i})}else(this||r)._data=new $D;(this||r)._data.on&&(this||r)._data.on("*",(this||r)._listener)}},{key:"refresh",value:function refresh(){var t=(this||r)._data.getIds({filter:fh((this||r)._options)});var a=_toConsumableArray((this||r)._ids);var o={};var i=[];var v=[];var u=[];for(var c=0,l=t.length;c<l;c++){var h=t[c];o[h]=true;if(!(this||r)._ids.has(h)){i.push(h);(this||r)._ids.add(h)}}for(var p=0,d=a.length;p<d;p++){var y=a[p];var g=(this||r)._data.get(y);if(g==null)console.error("If you see this, report it please.");else if(!o[y]){v.push(y);u.push(g);(this||r)._ids.delete(y)}}(this||r).length+=i.length-v.length;i.length&&this._trigger("add",{items:i});v.length&&this._trigger("remove",{items:v,oldData:u})}},{key:"get",value:function get(t,a){if((this||r)._data==null)return null;var o=null;var i;if(isId(t)||By(t)){o=t;i=a}else i=t;var v=km({},(this||r)._options,i);var u=fh((this||r)._options);var c=i&&fh(i);u&&c&&(v.filter=function(r){return u(r)&&c(r)});return o==null?(this||r)._data.get(v):(this||r)._data.get(o,v)}},{key:"getIds",value:function getIds(t){if((this||r)._data.length){var a=fh((this||r)._options);var o=t!=null?fh(t):null;var i;i=o?a?function filter(r){return a(r)&&o(r)}:o:a;return(this||r)._data.getIds({filter:i,order:t&&t.order})}return[]}},{key:"forEach",value:function forEach(t,a){if((this||r)._data){var o;var i=fh((this||r)._options);var v=a&&fh(a);var u;u=v?i?function filter(r){return i(r)&&v(r)}:v:i;Tg(o=(this||r)._data).call(o,t,{filter:u,order:a&&a.order})}}},{key:"map",value:function map(t,a){if((this||r)._data){var o;var i=fh((this||r)._options);var v=a&&fh(a);var u;u=v?i?function filter(r){return i(r)&&v(r)}:v:i;return Sh(o=(this||r)._data).call(o,t,{filter:u,order:a&&a.order})}return[]}},{key:"getDataSet",value:function getDataSet(){return(this||r)._data.getDataSet()}},{key:"stream",value:function stream(t){var a;return(this||r)._data.stream(t||{[rD]:Of(a=Jk((this||r)._ids)).call(a,(this||r)._ids)})}},{key:"dispose",value:function dispose(){var t;(t=(this||r)._data)!==null&&t!==void 0&&t.off&&(this||r)._data.off("*",(this||r)._listener);var a="This data view has already been disposed of.";var o={get:function get(){throw new Error(a)},set:function set(){throw new Error(a)},configurable:false};var i,v=_createForOfIteratorHelper(Vy(DataView.prototype));try{for(v.s();!(i=v.n()).done;){var u=i.value;xE(this||r,u,o)}}catch(r){v.e(r)}finally{v.f()}}
/**
       * Event listener. Will propagate all events from the connected data set to the subscribers of the DataView, but will filter the items and only trigger when there are changes in the filtered data set.
       *
       * @param event - The name of the event.
       * @param params - Parameters of the event.
       * @param senderId - Id supplied by the sender.
       */},{key:"_onEvent",value:function _onEvent(t,a,o){if(a&&a.items&&(this||r)._data){var i=a.items;var v=[];var u=[];var c=[];var l=[];var h=[];var p=[];switch(t){case"add":for(var d=0,y=i.length;d<y;d++){var g=i[d];var m=this.get(g);if(m){(this||r)._ids.add(g);v.push(g)}}break;case"update":for(var _=0,b=i.length;_<b;_++){var w=i[_];var E=this.get(w);if(E)if((this||r)._ids.has(w)){u.push(w);h.push(a.data[_]);l.push(a.oldData[_])}else{(this||r)._ids.add(w);v.push(w)}else if((this||r)._ids.has(w)){(this||r)._ids.delete(w);c.push(w);p.push(a.oldData[_])}}break;case"remove":for(var T=0,A=i.length;T<A;T++){var S=i[T];if((this||r)._ids.has(S)){(this||r)._ids.delete(S);c.push(S);p.push(a.oldData[T])}}break}(this||r).length+=v.length-c.length;v.length&&this._trigger("add",{items:v},o);u.length&&this._trigger("update",{items:u,oldData:l,data:h},o);c.length&&this._trigger("remove",{items:c,oldData:p},o)}}}]);return DataView}(_D);
/**
   * Check that given value is compatible with Vis Data Set interface.
   *
   * @param idProp - The expected property to contain item id.
   * @param v - The value to be tested.
   * @returns True if all expected values and methods match, false otherwise.
   */function isDataSetLike(r,t){return typeof t==="object"&&t!==null&&r===t.idProp&&typeof t.add==="function"&&typeof t.clear==="function"&&typeof t.distinct==="function"&&typeof Tg(t)==="function"&&typeof t.get==="function"&&typeof t.getDataSet==="function"&&typeof t.getIds==="function"&&typeof t.length==="number"&&typeof Sh(t)==="function"&&typeof t.max==="function"&&typeof t.min==="function"&&typeof t.off==="function"&&typeof t.on==="function"&&typeof t.remove==="function"&&typeof t.setOptions==="function"&&typeof t.stream==="function"&&typeof t.update==="function"&&typeof t.updateOnly==="function"}
/**
   * Check that given value is compatible with Vis Data View interface.
   *
   * @param idProp - The expected property to contain item id.
   * @param v - The value to be tested.
   * @returns True if all expected values and methods match, false otherwise.
   */function isDataViewLike(r,t){return typeof t==="object"&&t!==null&&r===t.idProp&&typeof Tg(t)==="function"&&typeof t.get==="function"&&typeof t.getDataSet==="function"&&typeof t.getIds==="function"&&typeof t.length==="number"&&typeof Sh(t)==="function"&&typeof t.off==="function"&&typeof t.on==="function"&&typeof t.stream==="function"&&isDataSetLike(r,t.getDataSet())}t.DELETE=uw;t.DataSet=$D;t.DataStream=zD;t.DataView=qD;t.Queue=mD;t.createNewDataPipeFrom=createNewDataPipeFrom;t.isDataSetLike=isDataSetLike;t.isDataViewLike=isDataViewLike}));const a=t.__esModule,o=t.DELETE,i=t.DataSet,v=t.DataStream,u=t.Queue,c=t.createNewDataPipeFrom,l=t.isDataSetLike,h=t.isDataViewLike;const p=t.DataView;export{o as DELETE,i as DataSet,v as DataStream,p as DataView,u as Queue,a as __esModule,c as createNewDataPipeFrom,t as default,l as isDataSetLike,h as isDataViewLike};

