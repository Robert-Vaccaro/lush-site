(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(8716)}])},8716:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var r=t(5893),o=t(9661),s=t(3321),a=t(6720),i=t(2474),l=t(480),c=t(5071),m=t(3795),u=t(629),d=t(7357),h=t(6886),p=t(3845),x=t(5861),g=t(8239),j=t(1927),Z=t(9332),f=t(7041);let b=async(e,n)=>{let t=await fetch("https://intense-brook-83972.herokuapp.com/login",{headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({username:e,pw:n}),method:"post",credentials:"same-origin"});return await t.json()};function w(e){return(0,r.jsxs)(x.Z,{variant:"body2",color:"text.secondary",align:"center",...e,children:["Copyright \xa9 ",(0,r.jsx)(m.Z,{color:"inherit",href:"https://mui.com/",children:"GF Chatter"})," ",new Date().getFullYear(),"."]})}let y=(0,g.Z)();function k(){let e=(0,Z.useRouter)(),n=(n,t)=>{"Success"===t.message?((0,f.setCookie)("username",n),(0,f.setCookie)("token",t.token),e.push("/dashboard")):console.log(t.message)},t=async(e,t)=>{let r=await b(e,t);n(e,r)},g=e=>{e.preventDefault();let n=new FormData(e.currentTarget);t(n.get("username"),n.get("password"))};return(0,r.jsx)(j.Z,{theme:y,children:(0,r.jsxs)(h.ZP,{container:!0,component:"main",sx:{height:"100vh"},children:[(0,r.jsx)(a.ZP,{}),(0,r.jsx)(h.ZP,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"}}),(0,r.jsx)(h.ZP,{item:!0,xs:12,sm:8,md:5,component:u.Z,elevation:6,square:!0,children:(0,r.jsxs)(d.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.jsx)(o.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(x.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,r.jsxs)(d.Z,{component:"form",noValidate:!0,onSubmit:g,sx:{mt:1},children:[(0,r.jsx)(i.Z,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0}),(0,r.jsx)(i.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,r.jsx)(l.Z,{control:(0,r.jsx)(c.Z,{value:"remember",color:"primary"}),label:"Remember me"}),(0,r.jsx)(s.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),(0,r.jsxs)(h.ZP,{container:!0,children:[(0,r.jsx)(h.ZP,{item:!0,xs:!0,children:(0,r.jsx)(m.Z,{href:"#",variant:"body2",children:"Forgot password?"})}),(0,r.jsx)(h.ZP,{item:!0,children:(0,r.jsx)(m.Z,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]}),(0,r.jsx)(w,{sx:{mt:5}})]})]})})]})})}}},function(e){e.O(0,[591,74,756,862,337,774,888,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);