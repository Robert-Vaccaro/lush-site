(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{3321:function(e,t,o){"use strict";o.d(t,{Z:function(){return k}});var r=o(3366),n=o(7462),a=o(7294),i=o(6010),l=o(7925),s=o(4780),c=o(1796),d=o(1496),u=o(7623),f=o(7739),p=o(8216),h=o(1588),g=o(4867);function v(e){return(0,g.Z)("MuiButton",e)}let m=(0,h.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),b=a.createContext({});var y=o(5893);let x=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>{let{color:t,disableElevation:o,fullWidth:r,size:a,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,p.Z)(t)}`,`size${(0,p.Z)(a)}`,`${i}Size${(0,p.Z)(a)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,p.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,p.Z)(a)}`]},d=(0,s.Z)(c,v,l);return(0,n.Z)({},l,d)},w=e=>(0,n.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,d.ZP)(f.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,p.Z)(o.color)}`],t[`size${(0,p.Z)(o.size)}`],t[`${o.variant}Size${(0,p.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var o,r;return(0,n.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,n.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${m.focusVisible}`]:(0,n.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${m.disabled}`]:(0,n.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(r=e.palette).getContrastText)?void 0:o.call(r,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${m.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${m.disabled}`]:{boxShadow:"none"}}),C=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,p.Z)(o.size)}`]]}})(({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},w(e))),E=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,p.Z)(o.size)}`]]}})(({ownerState:e})=>(0,n.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},w(e))),I=a.forwardRef(function(e,t){let o=a.useContext(b),s=(0,l.Z)(o,e),c=(0,u.Z)({props:s,name:"MuiButton"}),{children:d,color:f="primary",component:p="button",className:h,disabled:g=!1,disableElevation:v=!1,disableFocusRipple:m=!1,endIcon:w,focusVisibleClassName:I,fullWidth:k=!1,size:R="medium",startIcon:_,type:M,variant:j="text"}=c,Z=(0,r.Z)(c,x),O=(0,n.Z)({},c,{color:f,component:p,disabled:g,disableElevation:v,disableFocusRipple:m,fullWidth:k,size:R,type:M,variant:j}),P=S(O),$=_&&(0,y.jsx)(C,{className:P.startIcon,ownerState:O,children:_}),L=w&&(0,y.jsx)(E,{className:P.endIcon,ownerState:O,children:w});return(0,y.jsxs)(z,(0,n.Z)({ownerState:O,className:(0,i.Z)(o.className,P.root,h),component:p,disabled:g,focusRipple:!m,focusVisibleClassName:(0,i.Z)(P.focusVisible,I),ref:t,type:M},Z,{classes:P,children:[$,d,L]}))});var k=I},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(6495).Z,n=o(2648).Z,a=o(1598).Z,i=o(7273).Z,l=a(o(7294)),s=n(o(2636)),c=o(7757),d=o(3735),u=o(3341);o(4210);var f=n(o(7746));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function v(e,t,o,n,a,i,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===o&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,a=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let m=l.forwardRef((e,t)=>{var{imgAttributes:o,heightInt:n,widthInt:a,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:p,placeholder:h,loading:g,srcString:m,config:b,unoptimized:y,loader:x,onLoadRef:S,onLoadingCompleteRef:w,setBlurComplete:z,setShowAltText:C,onLoad:E,onError:I}=e,k=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},k,{loading:g,width:a,height:n,decoding:"async","data-nimg":p?"fill":"1",className:c,style:r({},d,u)},o,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(I&&(e.src=e.src),e.complete&&v(e,m,h,S,w,z,y))},[m,h,S,w,z,I,y,t]),onLoad:e=>{let t=e.currentTarget;v(t,m,h,S,w,z,y)},onError:e=>{C(!0),"blur"===h&&z(!0),I&&I(e)}})))}),b=l.forwardRef((e,t)=>{let o,n;var a,{src:v,sizes:b,unoptimized:y=!1,priority:x=!1,loading:S,className:w,quality:z,width:C,height:E,fill:I,style:k,onLoad:R,onLoadingComplete:_,placeholder:M="empty",blurDataURL:j,layout:Z,objectFit:O,objectPosition:P,lazyBoundary:$,lazyRoot:L}=e,T=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let N=l.useContext(u.ImageConfigContext),B=l.useMemo(()=>{let e=p||N||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),o=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:o})},[N]),A=T,W=A.loader||f.default;delete A.loader;let F="__next_img_default"in W;if(F){if("custom"===B.loader)throw Error('Image with src "'.concat(v,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=W;W=t=>{let{config:o}=t,r=i(t,["config"]);return e(r)}}if(Z){"fill"===Z&&(I=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[Z];e&&(k=r({},k,e));let t={responsive:"100vw",fill:"100vw"}[Z];t&&!b&&(b=t)}let D="",q=g(C),V=g(E);if("object"==typeof(a=v)&&(h(a)||void 0!==a.src)){let e=h(v)?v.default:v;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(o=e.blurWidth,n=e.blurHeight,j=j||e.blurDataURL,D=e.src,!I){if(q||V){if(q&&!V){let t=q/e.width;V=Math.round(e.height*t)}else if(!q&&V){let t=V/e.height;q=Math.round(e.width*t)}}else q=e.width,V=e.height}}let U=!x&&("lazy"===S||void 0===S);((v="string"==typeof v?v:D).startsWith("data:")||v.startsWith("blob:"))&&(y=!0,U=!1),B.unoptimized&&(y=!0),F&&v.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(y=!0);let[G,H]=l.useState(!1),[K,J]=l.useState(!1),Y=g(z),Q=Object.assign(I?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:P}:{},K?{}:{color:"transparent"},k),X="blur"===M&&j&&!G?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:q,heightInt:V,blurWidth:o,blurHeight:n,blurDataURL:j,objectFit:Q.objectFit}),'")')}:{},ee=function(e){let{config:t,src:o,unoptimized:r,width:n,quality:a,sizes:i,loader:l}=e;if(r)return{src:o,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,o){let{deviceSizes:r,allSizes:n}=e;if(o){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(o);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let a=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:a,kind:"x"}}(t,n,i),d=s.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:s.map((e,r)=>"".concat(l({config:t,src:o,quality:a,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:l({config:t,src:o,quality:a,width:s[d]})}}({config:B,src:v,unoptimized:y,width:q,quality:Y,sizes:b,loader:W}),et=v,eo={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:A.crossOrigin},er=l.useRef(R);l.useEffect(()=>{er.current=R},[R]);let en=l.useRef(_);l.useEffect(()=>{en.current=_},[_]);let ea=r({isLazy:U,imgAttributes:ee,heightInt:V,widthInt:q,qualityInt:Y,className:w,imgStyle:Q,blurStyle:X,loading:S,config:B,fill:I,unoptimized:y,placeholder:M,loader:W,srcString:et,onLoadRef:er,onLoadingCompleteRef:en,setBlurComplete:H,setShowAltText:J},A);return l.default.createElement(l.default.Fragment,null,l.default.createElement(m,Object.assign({},ea,{ref:t})),x?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},eo))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,n=o(7273).Z,a=r(o(7294)),i=o(4532),l=o(3353),s=o(1410),c=o(9064),d=o(370),u=o(9955),f=o(4224),p=o(508),h=o(1516),g=o(4266);let v=new Set;function m(e,t,o,r,n){if(n||l.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let n=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,a=t+"%"+o+"%"+n;if(v.has(a))return;v.add(a)}Promise.resolve(e.prefetch(t,o,r)).catch(e=>{})}}function b(e){return"string"==typeof e?e:s.formatUrl(e)}let y=a.default.forwardRef(function(e,t){let o,r;let{href:s,as:v,children:y,prefetch:x,passHref:S,replace:w,shallow:z,scroll:C,locale:E,onClick:I,onMouseEnter:k,onTouchStart:R,legacyBehavior:_=!1}=e,M=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=y,_&&("string"==typeof o||"number"==typeof o)&&(o=a.default.createElement("a",null,o));let j=!1!==x,Z=a.default.useContext(u.RouterContext),O=a.default.useContext(f.AppRouterContext),P=null!=Z?Z:O,$=!Z,{href:L,as:T}=a.default.useMemo(()=>{if(!Z){let e=b(s);return{href:e,as:v?b(v):e}}let[e,t]=i.resolveHref(Z,s,!0);return{href:e,as:v?i.resolveHref(Z,v):t||e}},[Z,s,v]),N=a.default.useRef(L),B=a.default.useRef(T);_&&(r=a.default.Children.only(o));let A=_?r&&"object"==typeof r&&r.ref:t,[W,F,D]=p.useIntersection({rootMargin:"200px"}),q=a.default.useCallback(e=>{(B.current!==T||N.current!==L)&&(D(),B.current=T,N.current=L),W(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[T,A,L,D,W]);a.default.useEffect(()=>{P&&F&&j&&m(P,L,T,{locale:E},$)},[T,L,F,E,j,null==Z?void 0:Z.locale,P,$]);let V={ref:q,onClick(e){_||"function"!=typeof I||I(e),_&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,o,r,n,i,s,c,d,u){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let t=e.currentTarget,o=t.getAttribute("target");return o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!d&&!l.isLocalURL(o)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[n?"replace":"push"](o,r,{shallow:i,locale:c,scroll:s}):t[n?"replace":"push"](r||o,{forceOptimisticNavigation:!u})};d?a.default.startTransition(h):h()}(e,P,L,T,w,z,C,E,$,j)},onMouseEnter(e){_||"function"!=typeof k||k(e),_&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),P&&(j||!$)&&m(P,L,T,{locale:E,priority:!0,bypassPrefetchedCheck:!0},$)},onTouchStart(e){_||"function"!=typeof R||R(e),_&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),P&&(j||!$)&&m(P,L,T,{locale:E,priority:!0,bypassPrefetchedCheck:!0},$)}};if(c.isAbsoluteUrl(T))V.href=T;else if(!_||S||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==Z?void 0:Z.locale,t=(null==Z?void 0:Z.isLocaleDomain)&&h.getDomainLocale(T,e,null==Z?void 0:Z.locales,null==Z?void 0:Z.domainLocales);V.href=t||g.addBasePath(d.addLocale(T,e,null==Z?void 0:Z.defaultLocale))}return _?a.default.cloneElement(r,V):a.default.createElement("a",Object.assign({},M,V),o)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:s}=e,c=s||!a,[d,u]=r.useState(!1),f=r.useRef(null),p=r.useCallback(e=>{f.current=e},[]);r.useEffect(()=>{if(a){if(c||d)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,o){let{id:r,observer:n,elements:a}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===o.root&&e.margin===o.margin);if(r&&(t=i.get(r)))return t;let n=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:a,elements:n},l.push(o),i.set(o,t),t}(o);return a.set(e,t),n.observe(e),function(){if(a.delete(e),n.unobserve(e),0===a.size){n.disconnect(),i.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:o});return r}}else if(!d){let e=n.requestIdleCallback(()=>u(!0));return()=>n.cancelIdleCallback(e)}},[c,o,t,d,f.current]);let h=r.useCallback(()=>{u(!1)},[]);return[p,d,h]};var r=o(7294),n=o(29);let a="function"==typeof IntersectionObserver,i=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:o,blurWidth:r,blurHeight:n,blurDataURL:a,objectFit:i}=e,l=r||t,s=n||o,c=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function o(e){let{config:t,src:o,width:r,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(o),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o.__next_img_default=!0,t.default=o},9008:function(e,t,o){o(2636)},5675:function(e,t,o){e.exports=o(3740)},1664:function(e,t,o){o(5569)},1163:function(e,t,o){e.exports=o(6885)}}]);