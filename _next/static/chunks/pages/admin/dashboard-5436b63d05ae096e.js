(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{2833:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/dashboard",function(){return n(8325)}])},869:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var i=n(5893),a=n(7294),o=n(1496),s=n(2293),r=n(7533),c=n(7212),l=n(8619),d=n(8885),p=n(9334),u=n(7357),h=n(6720),x=n(155),g=n(3946),j=n(7720),m=n(8462),f=n(6236),Z=n(1237),w=n(2855),y=n(1421),b=n(9332);let C=(e,t,n)=>({transition:e.transitions.create(t.join(","),{easing:e.transitions.easing.sharp,duration:n})}),k=e=>({width:240,...C(e,["width"],e.transitions.duration.enteringScreen),overflowX:"hidden"}),S=e=>({overflowX:"hidden",...C(e,["width"],e.transitions.duration.leavingScreen),width:"calc(".concat(e.spacing(7)," + 1px)"),[e.breakpoints.up("sm")]:{width:"calc(".concat(e.spacing(8)," + 1px)")}}),A=(0,o.ZP)("div")(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1),...t.mixins.toolbar}}),v=(0,o.ZP)(s.Z,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:t,open:n}=e;return{zIndex:t.zIndex.drawer+1,...C(t,["width","margin"],t.transitions.duration.leavingScreen),...n&&{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),...C(t,["width","margin"],t.transitions.duration.enteringScreen)}}}),P=(0,o.ZP)(r.ZP,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:t,open:n}=e;return{width:240,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",...n&&{...k(t),"& .MuiDrawer-paper":k(t)},...!n&&{...S(t),"& .MuiDrawer-paper":S(t)}}});function I(){let e=(0,b.useRouter)(),[t,n]=(0,a.useState)(!1),o=(e,n,a)=>(0,i.jsx)(c.ZP,{disablePadding:!0,sx:{display:"block"},children:(0,i.jsxs)(l.Z,{onClick:a,sx:{minHeight:48,justifyContent:t?"initial":"center",px:2.5},children:[(0,i.jsx)(d.Z,{sx:{minWidth:0,mr:t?3:"auto",justifyContent:"center"},children:n}),(0,i.jsx)(p.Z,{primary:e,sx:{opacity:t?1:0}})]})});return(0,i.jsxs)(u.Z,{sx:{display:"flex"},children:[(0,i.jsx)(h.ZP,{}),(0,i.jsx)(v,{position:"fixed",open:t,sx:{backgroundColor:"black"},children:(0,i.jsx)(x.Z,{children:(0,i.jsx)(g.Z,{"aria-label":"open drawer",onClick:()=>n(!0),edge:"start",sx:{marginRight:5,...t&&{visibility:"hidden"},color:"white"},children:(0,i.jsx)(f.Z,{})})})}),(0,i.jsxs)(P,{variant:"permanent",open:t,children:[(0,i.jsx)(A,{children:(0,i.jsx)(g.Z,{onClick:()=>n(!1),children:(0,i.jsx)(Z.Z,{})})}),(0,i.jsx)(j.Z,{}),(0,i.jsxs)(m.Z,{children:[o("Users",(0,i.jsx)(w.Z,{}),()=>e.push("dashboard")),o("Girls",(0,i.jsx)(y.Z,{}),()=>e.push("girls"))]})]}),(0,i.jsx)(u.Z,{component:"main",sx:{flexGrow:1,p:3}})]})}},3488:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(5893),a=n(7294),o=n(629),s=n(3970),r=n(3946),c=n(6506);function l(e){let{updatedListProp:t}=e,[n,l]=(0,a.useState)([]),d=e=>{""===e&&t(e),l(e)},p=e=>{e.preventDefault(),t(n)};return(0,i.jsxs)(o.Z,{component:"form",onSubmit:e=>p(e),sx:{display:"flex",width:"50%",marginTop:"75px"},children:[(0,i.jsx)(s.ZP,{sx:{ml:1,flex:1,mt:"6px"},placeholder:"Search by username",onChange:e=>d(e.target.value)}),(0,i.jsx)(r.Z,{type:"button",sx:{p:"10px"},"aria-label":"search",onClick:e=>{p(e)},children:(0,i.jsx)(c.Z,{})})]})}},8325:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var i=n(5893),a=n(869),o=n(7294),s=n(2882),r=n(629),c=n(7906),l=n(3184),d=n(3816),p=n(3252),u=n(295),h=n(2840),x=n(3946),g=n(3965),j=n(7922),m=n(7357),f=n(5861),Z=n(8678),w=n(5578),y=n(1797),b=n(3488),C=n(381),k=n.n(C),S=n(9332),A=n(7041),v=n(2024);function P(){let[e,t]=(0,o.useState)([]),[n,a]=(0,o.useState)(0),[x,g]=(0,o.useState)(5),[j,m]=(0,o.useState)(0),[f,Z]=(0,o.useState)("");var w=e=>{a(e.total),t(e.data)},y=e=>{"KeyboardArrowRightIcon"===e.target.getAttribute("data-testid")?m(j+=1):"KeyboardArrowLeftIcon"===e.target.getAttribute("data-testid")&&m(j-=1),(0,A.setCookie)("dashboard-page",j)},C=e=>{let t=e.target.value;g(t),(0,A.setCookie)("dashboard-per-page",t),m(0),(0,A.setCookie)("dashboard-page",0)};let k=async()=>{g(parseInt((0,A.getCookie)("dashboard-per-page"))),m(parseInt((0,A.getCookie)("dashboard-page")));let e=await (0,v.Rf)(f,j,x);w(e)};return(0,o.useEffect)(()=>{k()},[f,j,x]),(0,i.jsxs)("div",{children:[(0,i.jsx)(b.Z,{updatedListProp:Z}),(0,i.jsxs)(s.Z,{component:r.Z,sx:{marginTop:"75px",width:"80vw"},children:[(0,i.jsxs)(c.Z,{"aria-label":"collapsible table",children:[(0,i.jsx)(l.Z,{children:(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(p.Z,{}),(0,i.jsx)(p.Z,{children:"Apple ID"}),(0,i.jsx)(p.Z,{children:"Photo"}),(0,i.jsx)(p.Z,{align:"right",children:"Username"}),(0,i.jsx)(p.Z,{align:"right",children:"First"}),(0,i.jsx)(p.Z,{align:"right",children:"Last"}),(0,i.jsx)(p.Z,{align:"right",children:"Paid"})]})}),(0,i.jsx)(u.Z,{children:0===e?(0,i.jsx)("div",{}):e.map(e=>(0,i.jsx)(I,{row:e},e._id))})]}),(0,i.jsx)(h.Z,{component:"div",rowsPerPage:x,rowsPerPageOptions:[5,10,25,50],onRowsPerPageChange:C,page:j,onPageChange:y,count:n})]})]})}function I(e){let{row:t}=e,[n,a]=(0,o.useState)(!1),s=(0,S.useRouter)(),r=e=>{s.push("spec-user?user="+e)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.Z,{sx:{"& > *":{borderBottom:"unset"}},children:[(0,i.jsx)(p.Z,{children:(0,i.jsx)(x.Z,{"aria-label":"expand row",size:"small",onClick:()=>a(!n),children:n?(0,i.jsx)(Z.Z,{}):(0,i.jsx)(w.Z,{})})}),(0,i.jsx)(p.Z,{component:"th",scope:"row",children:t.appleID}),(0,i.jsx)(p.Z,{component:"th",scope:"row",children:(0,i.jsx)(g.Z,{component:"img",src:"https://gossa-images.s3-us-west-1.amazonaws.com/lush/users/".concat(t.appleID,"/profile_photo.jpeg"),sx:{width:"50px",height:"auto"}})}),(0,i.jsx)(p.Z,{align:"right",children:t.username}),(0,i.jsx)(p.Z,{align:"right",children:t.firstName}),(0,i.jsx)(p.Z,{align:"right",children:t.lastName}),(0,i.jsx)(p.Z,{align:"right",children:t.paid.toString()}),(0,i.jsx)(p.Z,{align:"right",children:(0,i.jsx)(x.Z,{type:"button",onClick:()=>r(t.appleID),children:(0,i.jsx)(y.Z,{color:"primary"})})})]}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(p.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:(0,i.jsx)(j.Z,{in:n,timeout:"auto",unmountOnExit:!0,children:(0,i.jsxs)(m.Z,{sx:{margin:1},children:[(0,i.jsxs)(f.Z,{variant:"h6",gutterBottom:!0,component:"div",children:["Data of ",t.username]}),(0,i.jsxs)(c.Z,{size:"small","aria-label":"purchases",children:[(0,i.jsx)(l.Z,{children:(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(p.Z,{children:"Created"}),(0,i.jsx)(p.Z,{children:"AI"}),(0,i.jsx)(p.Z,{align:"center",children:"Email"}),(0,i.jsx)(p.Z,{align:"right",children:"Total Messages"})]})}),(0,i.jsx)(u.Z,{children:(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(p.Z,{component:"th",scope:"row",children:k().unix(t.createdAt).format("dddd, MMMM Do, YYYY h:mm:ss A")}),(0,i.jsx)(p.Z,{children:t.isAI.toString()}),(0,i.jsx)(p.Z,{align:"center",children:t.email_address}),(0,i.jsx)(p.Z,{align:"right",children:t.messageCount})]})})]})]})})})})]})}function N(){return(0,i.jsxs)("div",{className:"usertable-container",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.Z,{})}),(0,i.jsx)("div",{className:"usertable-container",children:(0,i.jsx)(P,{})})]})}},2024:function(e,t,n){"use strict";n.d(t,{Di:function(){return r},KE:function(){return c},L1:function(){return d},Lf:function(){return o},Rf:function(){return l},Xe:function(){return u},Yp:function(){return p},cW:function(){return s},xH:function(){return h}});var i=n(7041);let a="https://intense-brook-83972.herokuapp.com";async function o(e){let t=await fetch("".concat(a,"/get-girl"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,i.getCookie)("username"),girlHandle:e})});return await t.json()}async function s(e,t){let n=await fetch("".concat(a,"/login"),{headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:e,pw:t}),method:"post",credentials:"same-origin"});return await n.json()}async function r(e){let t=await fetch("".concat(a,"/get-user"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,i.getCookie)("username"),appleID:e})});return await t.json()}async function c(e){let t=await fetch("".concat(a,"/admin-get-messages"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,i.getCookie)("username"),appleID:e})});return await t.json()}async function l(e,t,n){let o=await fetch("".concat(a,"/get-users"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,i.getCookie)("username"),userSearch:e,page:t,limit:n})});return await o.json()}async function d(){let e=await fetch("".concat(a,"/get-all-girls"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({})});return await e.json()}async function p(e,t){let n=await fetch("".concat(a,"/update-response-str"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,i.getCookie)("username"),appleID:e,newResStr:t})});return await n.json()}async function u(e,t){let n=await fetch("".concat(a,"/update-prompt"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,i.getCookie)("username"),appleID:e,newPrompt:t})});return await n.json()}async function h(e,t){let n=await fetch("".concat(a,"/update-ban-status"),{method:"post",headers:{Authorization:(0,i.getCookie)("token"),Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:(0,i.getCookie)("username"),appleID:e,banned:t})});return await n.json()}}},function(e){e.O(0,[885,298,238,74,756,170,519,774,888,179],function(){return e(e.s=2833)}),_N_E=e.O()}]);