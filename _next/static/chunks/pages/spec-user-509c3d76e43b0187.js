(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[173],{6242:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var i=n(7462),a=n(3366),o=n(7294),s=n(6010),r=n(4780),l=n(1496),c=n(7623),d=n(629),u=n(1588),p=n(4867);function h(e){return(0,p.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var f=n(5893);let m=["className","raised"],x=e=>{let{classes:t}=e;return(0,r.Z)({root:["root"]},h,t)},j=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),g=o.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:r=!1}=n,l=(0,a.Z)(n,m),d=(0,i.Z)({},n,{raised:r}),u=x(d);return(0,f.jsx)(j,(0,i.Z)({className:(0,s.Z)(u.root,o),elevation:r?8:void 0,ref:t,ownerState:d},l))});var Z=g},4267:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var i=n(7462),a=n(3366),o=n(7294),s=n(6010),r=n(4780),l=n(1496),c=n(7623),d=n(1588),u=n(4867);function p(e){return(0,u.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var h=n(5893);let f=["className","component"],m=e=>{let{classes:t}=e;return(0,r.Z)({root:["root"]},p,t)},x=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),j=o.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:o,component:r="div"}=n,l=(0,a.Z)(n,f),d=(0,i.Z)({},n,{component:r}),u=m(d);return(0,h.jsx)(x,(0,i.Z)({as:r,className:(0,s.Z)(u.root,o),ownerState:d,ref:t},l))});var g=j},6016:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spec-user",function(){return n(6735)}])},6735:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var i=n(5893),a=n(7294),o=n(1163),s=n(3321),r=n(6242),l=n(4267),c=n(5861),d=n(3366),u=n(7462),p=n(6010),h=n(4780),f=n(1496),m=n(7623),x=n(1588),j=n(4867);function g(e){return(0,j.Z)("MuiCardActions",e)}(0,x.Z)("MuiCardActions",["root","spacing"]);let Z=["disableSpacing","className"],C=e=>{let{classes:t,disableSpacing:n}=e;return(0,h.Z)({root:["root",!n&&"spacing"]},g,t)},b=(0,f.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,u.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),y=a.forwardRef(function(e,t){let n=(0,m.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:a=!1,className:o}=n,s=(0,d.Z)(n,Z),r=(0,u.Z)({},n,{disableSpacing:a}),l=C(r);return(0,i.jsx)(b,(0,u.Z)({className:(0,p.Z)(l.root,o),ownerState:r,ref:t},s))});var w=n(381),S=n.n(w),v=n(2743),k=n(7357),A=n(2474);n(7041);var M=n(2024);let R={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",bgcolor:"background.paper",boxShadow:24,pt:2,px:4,pb:3,display:"flex",justifyContent:"center",flexDirection:"column"};function D(e){let{appleID:t,changeUser:n,previousPrompt:o}=e,r=(0,a.useRef)(),[l,c]=(0,a.useState)(!1),[d,u]=(0,a.useState)(""),p=()=>{c(!0)},h=()=>{c(!1)},f=async()=>{await (0,M.Xe)(t,d),n()};return(0,a.useEffect)(()=>{l&&setTimeout(()=>{r.current.select();let e=setTimeout(()=>{},250);return()=>clearTimeout(e)},1)},[l]),(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{onClick:p,children:"Change Prompt"}),(0,i.jsx)(v.Z,{open:l,onClose:h,"aria-labelledby":"parent-modal-title","aria-describedby":"parent-modal-description",children:(0,i.jsxs)(k.Z,{sx:{...R},children:[(0,i.jsx)("h2",{id:"parent-modal-title",children:"Change User's Prompt"}),(0,i.jsx)(A.Z,{id:"filled-multiline-static",label:"Prompt",autoFocus:!0,multiline:!0,rows:4,inputRef:r,defaultValue:o,variant:"filled",onChange:e=>u(e.target.value)}),(0,i.jsx)(s.Z,{onClick:()=>{d!==o&&f(),h()},variant:"contained",children:"Submit"})]})})]})}let N={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,pt:2,px:4,pb:3,display:"flex",justifyContent:"center",flexDirection:"column"};function I(e){let t=(0,a.useRef)(),[n,o]=(0,a.useState)(""),[r,l]=(0,a.useState)(!1),c=()=>{l(!0)},d=()=>{l(!1)},u=async()=>{await (0,M.Yp)(e.appleID,n),e.changeUser()};return(0,a.useEffect)(()=>{r&&setTimeout(()=>{t.current.select();let e=setTimeout(()=>{},250);return()=>clearTimeout(e)},1)},[r]),(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{onClick:c,children:"Change Response String"}),(0,i.jsx)(v.Z,{open:r,onClose:d,"aria-labelledby":"parent-modal-title","aria-describedby":"parent-modal-description",children:(0,i.jsxs)(k.Z,{sx:{...N,width:400},children:[(0,i.jsx)("h2",{id:"parent-modal-title",children:"Change Reponse String"}),(0,i.jsx)(A.Z,{id:"filled-multiline-static",label:"Response String",multiline:!0,rows:4,inputRef:t,defaultValue:e.previousResponseStr,variant:"filled",onChange:e=>o(e.target.value)}),(0,i.jsx)("br",{}),(0,i.jsx)(s.Z,{onClick:()=>{u(),d()},variant:"contained",children:"Submit"})]})})]})}let Y={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,pt:2,px:4,pb:3,display:"flex",justifyContent:"center",flexDirection:"column"};function T(e){let[t,n]=a.useState(""),[o,r]=a.useState(!1),l=()=>{r(!0)},c=()=>{r(!1)},d=async t=>{await (0,M.xH)(e.appleID,t),e.changeUser()};return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{onClick:l,children:"Update Ban Status"}),(0,i.jsx)(v.Z,{open:o,onClose:c,"aria-labelledby":"parent-modal-title","aria-describedby":"parent-modal-description",children:(0,i.jsxs)(k.Z,{sx:{...Y,width:400},children:[(0,i.jsx)("h2",{id:"parent-modal-title",children:"Update Ban Status"}),(0,i.jsxs)("p",{children:["Current Ban Status: ",e.currentBanStatus.toString()]}),(0,i.jsx)("br",{}),(0,i.jsx)(s.Z,{onClick:()=>{d(!0),c()},variant:"contained",children:"Ban"}),(0,i.jsx)("br",{}),(0,i.jsx)(s.Z,{onClick:()=>{d(!1),c()},variant:"contained",children:"Unban"})]})})]})}function _(){let e=(0,o.useRouter)(),[t,n]=(0,a.useState)([]),[d,u]=(0,a.useState)([]),[p,h]=(0,a.useState)(!0),f=async e=>{let t=await (0,M.Di)(e);n(t)},m=async e=>{let t=await (0,M.KE)(e);console.log(t),u(t)};return(0,a.useEffect)(()=>{e.isReady&&(f(e.query.user),m(e.query.user))},[e.isReady,p]),(0,i.jsx)("div",{children:0===t.length?(0,i.jsx)("div",{}):(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{size:"small",onClick:()=>e.push("lush-site/dashboard"),children:"Back"}),(0,i.jsxs)(r.Z,{sx:{minWidth:275},children:[(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(c.Z,{variant:"h5",children:(0,i.jsx)("u",{children:"User Information"})}),(0,i.jsxs)(c.Z,{children:["Username: ",t.username]}),(0,i.jsxs)(c.Z,{children:["AppleID: ",t.appleID]}),(0,i.jsxs)(c.Z,{children:["Email Address: ",t.email_address]}),(0,i.jsxs)(c.Z,{children:["First name: ",t.firstName]}),(0,i.jsxs)(c.Z,{children:["Last name: ",t.lastName]}),(0,i.jsxs)(c.Z,{children:["Created:"," ",S().unix(t.createdAt).format("dddd, MMMM Do, YYYY h:mm:ss A")]}),(0,i.jsxs)(c.Z,{children:["Last Login:"," ",S().unix(t.lastLogin).format("dddd, MMMM Do, YYYY h:mm:ss A")]}),(0,i.jsxs)(c.Z,{children:["Updated:"," ",S().unix(t.updatedAt).format("dddd, MMMM Do, YYYY h:mm:ss A")]}),(0,i.jsxs)(c.Z,{children:["Database ID: ",t._id]}),(0,i.jsxs)(c.Z,{children:["Paid: ",void 0===t.paid?"":t.paid.toString()]}),(0,i.jsxs)(c.Z,{children:["Banned:"," ",void 0===t.banned?"":t.banned.toString()]}),(0,i.jsxs)(c.Z,{children:["Is AI On: ",void 0===t.isAI?"":t.isAI.toString()]}),(0,i.jsxs)(c.Z,{children:["Messages: ",t.messageCount]}),(0,i.jsxs)(c.Z,{children:["Prompt: ",t.prompt]}),(0,i.jsxs)(c.Z,{children:["Response String: ",t.responseStr]})]}),(0,i.jsxs)(y,{children:[(0,i.jsx)(D,{appleID:e.query.user,changeUser:()=>h(!p),previousPrompt:t.prompt}),(0,i.jsx)(I,{appleID:e.query.user,changeUser:()=>h(!p),previousResponseStr:t.responseStr}),(0,i.jsx)(T,{appleID:e.query.user,currentBanStatus:t.banned,changeUser:()=>h(!p)})]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(r.Z,{sx:{minWidth:275},children:[(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(c.Z,{variant:"h5",children:"Messages"}),(0,i.jsx)("br",{}),0===d.length?(0,i.jsx)("div",{}):d.map((e,t)=>(0,i.jsxs)("div",{children:[(0,i.jsx)("u",{children:(0,i.jsxs)("b",{children:[e.sentFrom," @ ",S().unix(e.timeSent).format(" h:mm:ss A, dddd, MMMM Do, YYYY")]})}),":",""===e.message?(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:e.downloadURL,width:75})}):(0,i.jsx)(c.Z,{children:e.message}),(0,i.jsx)("br",{})]},t))]}),(0,i.jsx)(y,{children:(0,i.jsx)(s.Z,{size:"small",children:"Delete Chat"})})]})]})})}},2024:function(e,t,n){"use strict";n.d(t,{Di:function(){return r},KE:function(){return l},L1:function(){return d},Lf:function(){return o},Rf:function(){return c},Xe:function(){return p},Yp:function(){return u},cW:function(){return s},xH:function(){return h}});var i=n(7041);let a="https://intense-brook-83972.herokuapp.com";async function o(e){let t=await fetch("".concat(a,"/get-girl"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,i.getCookie)("username"),girlHandle:e})});return await t.json()}async function s(e,t){let n=await fetch("".concat(a,"/login"),{headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:e,pw:t}),method:"post",credentials:"same-origin"});return await n.json()}async function r(e){let t=await fetch("".concat(a,"/get-user"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,i.getCookie)("username"),appleID:e})});return await t.json()}async function l(e){let t=await fetch("".concat(a,"/admin-get-messages"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,i.getCookie)("username"),appleID:e})});return await t.json()}async function c(e,t,n){let o=await fetch("".concat(a,"/get-users"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,i.getCookie)("username"),userSearch:e,page:t,limit:n})});return await o.json()}async function d(){let e=await fetch("".concat(a,"/get-all-girls"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({})});return await e.json()}async function u(e,t){let n=await fetch("".concat(a,"/update-response-str"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,i.getCookie)("username"),appleID:e,newResStr:t})});return await n.json()}async function p(e,t){let n=await fetch("".concat(a,"/update-prompt"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,i.getCookie)("username"),appleID:e,newPrompt:t})});return await n.json()}async function h(e,t){let n=await fetch("".concat(a,"/update-ban-status"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,i.getCookie)("username"),appleID:e,banned:t})});return await n.json()}},1163:function(e,t,n){e.exports=n(6885)}},function(e){e.O(0,[885,591,74,756,862,774,888,179],function(){return e(e.s=6016)}),_N_E=e.O()}]);