(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(4759)}])},4759:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var o=n(5893),a=n(7294),i=n(9661),r=n(3321),s=n(6720),c=n(2474),u=n(480),p=n(5071),l=n(3795),d=n(629),m=n(7357),h=n(6886),g=n(3845),f=n(5861),j=n(8239),y=n(1927),x=n(9332),k=n(7041),w=n(2024);function C(e){return(0,o.jsxs)(f.Z,{variant:"body2",color:"text.secondary",align:"center",...e,children:["Copyright \xa9 ",(0,o.jsx)(l.Z,{color:"inherit",href:"https://mui.com/",children:"Lush Virtual"})," ",new Date().getFullYear(),"."]})}let b=(0,j.Z)();function Z(){let e=(0,x.useRouter)(),[t,n]=(0,a.useState)(""),[j,Z]=(0,a.useState)(""),S=(t,n)=>{"Success"===n.message?((0,k.setCookie)("username",t),(0,k.setCookie)("token",n.token),e.push("admin/dashboard")):alert("There was an error logging in")},A=async(e,t)=>{let n=await (0,w.cW)(e,t);S(e,n)},v=e=>{e.preventDefault(),A(t,j)};return(0,o.jsx)(y.Z,{theme:b,children:(0,o.jsxs)(h.ZP,{container:!0,component:"main",sx:{height:"100vh"},children:[(0,o.jsx)(s.ZP,{}),(0,o.jsx)(h.ZP,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://gossa-images.s3.us-west-1.amazonaws.com/lush/girls/kaili_bae/images/kaili_bae_13.jpg)",backgroundRepeat:"no-repeat",backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"}}),(0,o.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:5,component:d.Z,elevation:6,square:!0,children:(0,o.jsxs)(m.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)(i.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,o.jsx)(g.Z,{})}),(0,o.jsx)(f.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,o.jsxs)("form",{sx:{mt:1},children:[(0,o.jsx)(c.Z,{onChange:e=>n(e.target.value),margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0}),(0,o.jsx)(c.Z,{onChange:e=>Z(e.target.value),margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,o.jsx)(u.Z,{control:(0,o.jsx)(p.Z,{value:"remember",color:"primary"}),label:"Remember me"}),(0,o.jsx)(r.Z,{type:"button",onClick:e=>v(e),fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),(0,o.jsxs)(h.ZP,{container:!0,children:[(0,o.jsx)(h.ZP,{item:!0,xs:!0,children:(0,o.jsx)(l.Z,{href:"#",variant:"body2",children:"Forgot password?"})}),(0,o.jsx)(h.ZP,{item:!0,children:(0,o.jsx)(l.Z,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]}),(0,o.jsx)(C,{sx:{mt:5}})]})]})})]})})}},2024:function(e,t,n){"use strict";n.d(t,{Di:function(){return s},KE:function(){return c},L1:function(){return p},Lf:function(){return i},Rf:function(){return u},Xe:function(){return d},Yp:function(){return l},cW:function(){return r},xH:function(){return m}});var o=n(7041);let a="https://intense-brook-83972.herokuapp.com";async function i(e){let t=await fetch("".concat(a,"/get-girl"),{method:"post",headers:{Authorization:(0,o.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,o.getCookie)("username"),girlHandle:e})});return await t.json()}async function r(e,t){let n=await fetch("".concat(a,"/login"),{headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:e,pw:t}),method:"post",credentials:"same-origin"});return await n.json()}async function s(e){let t=await fetch("".concat(a,"/get-user"),{method:"post",headers:{Authorization:(0,o.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,o.getCookie)("username"),appleID:e})});return await t.json()}async function c(e){let t=await fetch("".concat(a,"/admin-get-messages"),{method:"post",headers:{Authorization:(0,o.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,o.getCookie)("username"),appleID:e})});return await t.json()}async function u(e,t,n){let i=await fetch("".concat(a,"/get-users"),{method:"post",headers:{Authorization:(0,o.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,o.getCookie)("username"),userSearch:e,page:t,limit:n})});return await i.json()}async function p(){let e=await fetch("".concat(a,"/get-all-girls"),{method:"post",headers:{Authorization:(0,o.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({})});return await e.json()}async function l(e,t){let n=await fetch("".concat(a,"/update-response-str"),{method:"post",headers:{Authorization:(0,o.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,o.getCookie)("username"),appleID:e,newResStr:t})});return await n.json()}async function d(e,t){let n=await fetch("".concat(a,"/update-prompt"),{method:"post",headers:{Authorization:(0,o.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,o.getCookie)("username"),appleID:e,newPrompt:t})});return await n.json()}async function m(e,t){let n=await fetch("".concat(a,"/update-ban-status"),{method:"post",headers:{Authorization:(0,o.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,o.getCookie)("username"),appleID:e,banned:t})});return await n.json()}}},function(e){e.O(0,[591,74,756,862,337,774,888,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);