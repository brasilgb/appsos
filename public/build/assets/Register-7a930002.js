<<<<<<<< HEAD:public/build/assets/Register-7a930002.js
import{q as E,r as t,W as I,j as e,Y as F,b as L}from"./app-177f901d.js";import{G as V,C as O,a as P}from"./index.esm-482ba6f8.js";import{I as p,a as b,b as w}from"./index.esm-221377a0.js";import"./moment-a9aaa855.js";function q(){var d,x,f,u,j,g,h;const{confemp:o,confger:r,userexist:v}=E().props,[n,N]=t.useState(!1),[c,y]=t.useState(!1),[C,m]=t.useState(!1),{data:i,setData:l,post:_,get:k,processing:z,errors:a,reset:R}=I({name:"",email:"",password:"",password_confirmation:""});t.useEffect(()=>()=>{R("password","password_confirmation")},[]);const S=s=>{s.preventDefault(),m(!0),setTimeout(()=>{m(!1)},200),_(route("register"))};return t.useEffect(()=>{(()=>{v[0]&&k("/")})()},[]),e.jsxs(V,{children:[e.jsx(F,{title:"Register"}),e.jsx("div",{className:"fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center",style:{backgroundColor:(d=r[0])!=null&&d.bgcolor?(x=r[0])==null?void 0:x.bgcolor:"#0161a0",backgroundImage:`url("/storage/images/${(f=r[0])!=null&&f.bgimage?(u=r[0])==null?void 0:u.bgimage:""}")`,backgroundSize:"cover"},children:e.jsx("div",{className:"w-full sm:max-w-md mx-4 p-4 bg-gradient-to-t from-gray-300 via-white to-gray-200 shadow-md overflow-hidden rounded-md border border-white",children:e.jsxs("div",{className:" p-4",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center mb-10",children:[e.jsxs("div",{className:"flex items-start justify-between mb-6 border-b border-gray-200 w-full",children:[e.jsx("h1",{className:"text-sm font-medium text-blue-dark",children:"Registrar administrador"}),e.jsx("span",{className:"text-sm font-medium text-blue-dark",children:e.jsx(O,{})})]}),e.jsx("div",{className:"w-32 flex items-center justify-center",children:e.jsx("img",{src:`/storage/images/${(j=o[0])!=null&&j.logo?(g=o[0])==null?void 0:g.logo:"default.png"}`,alt:`${(h=o[0])==null?void 0:h.empresa}`,className:""})})]}),e.jsxs("form",{onSubmit:S,children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"name",className:"label-form",children:"Nome"}),e.jsxs("div",{className:"relative flex items-center justify-between",children:[e.jsx("input",{id:"name",type:"text",value:i.name,onChange:s=>l("name",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-1",children:e.jsx(p,{size:22,color:"#4b5563"})})]}),a.name&&e.jsx("div",{className:"text-red-500 text-sm",children:a.name})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{htmlFor:"email",className:"label-form",children:"E-mail"}),e.jsxs("div",{className:"relative flex items-center justify-between",children:[e.jsx("input",{id:"email",type:"text",value:i.email,onChange:s=>l("email",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-1",children:e.jsx(p,{size:22,color:"#4b5563"})})]}),a.email&&e.jsx("div",{className:"text-red-500 text-sm",children:a.email})]}),e.jsxs("div",{className:"mt-4 flex flex-col",children:[e.jsx("label",{htmlFor:"password",className:"label-form",children:"Senha"}),e.jsxs("div",{className:"relative flex items-center justify-between",children:[e.jsx("input",{id:"password",type:n?"text":"password",name:"password",value:i.password,className:"input-form w-full",onChange:s=>l("password",s.target.value)}),e.jsx("div",{className:"absolute right-1 cursor-pointer",onClick:()=>N(!n),children:n?e.jsx(b,{size:22,color:"#4b5563"}):e.jsx(w,{size:22,color:"#4b5563"})})]}),a.password&&e.jsx("div",{className:"text-red-500 text-sm",children:a.password})]}),e.jsxs("div",{className:"mt-4 flex flex-col",children:[e.jsx("label",{htmlFor:"password_confirmation",className:"label-form",children:"Senha"}),e.jsxs("div",{className:"relative flex items-center justify-between",children:[e.jsx("input",{id:"password_confirmation",type:c?"text":"password",name:"password_confirmation",value:i.password_confirmation,className:"input-form w-full",onChange:s=>l("password_confirmation",s.target.value)}),e.jsx("div",{className:"absolute right-1 cursor-pointer",onClick:()=>y(!c),children:c?e.jsx(b,{size:22,color:"#4b5563"}):e.jsx(w,{size:22,color:"#4b5563"})})]}),a.password_confirmation&&e.jsx("div",{className:"text-red-500 text-sm",children:a.password_confirmation})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{children:e.jsx(L,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Retornar ao login"})})}),e.jsx("div",{className:"mt-8",children:e.jsx("button",{className:"btn-login",disabled:z,children:C?e.jsx(P,{size:24}):e.jsx("span",{children:"Registrar"})})})]})]})]})})})]})}export{q as default};
========
import{q as E,r as t,W as I,j as e,Y as F,b as L}from"./app-109e0d25.js";import{G as V,C as O,a as P}from"./index.esm-4a63762e.js";import{I as p,a as b,b as w}from"./index.esm-d3789500.js";import"./moment-a9aaa855.js";function q(){var d,x,f,u,j,g,h;const{confemp:o,confger:r,userexist:v}=E().props,[n,N]=t.useState(!1),[c,y]=t.useState(!1),[C,m]=t.useState(!1),{data:i,setData:l,post:_,get:k,processing:z,errors:a,reset:R}=I({name:"",email:"",password:"",password_confirmation:""});t.useEffect(()=>()=>{R("password","password_confirmation")},[]);const S=s=>{s.preventDefault(),m(!0),setTimeout(()=>{m(!1)},200),_(route("register"))};return t.useEffect(()=>{(()=>{v[0]&&k("/")})()},[]),e.jsxs(V,{children:[e.jsx(F,{title:"Register"}),e.jsx("div",{className:"fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center",style:{backgroundColor:(d=r[0])!=null&&d.bgcolor?(x=r[0])==null?void 0:x.bgcolor:"#0161a0",backgroundImage:`url("/storage/images/${(f=r[0])!=null&&f.bgimage?(u=r[0])==null?void 0:u.bgimage:""}")`,backgroundSize:"cover"},children:e.jsx("div",{className:"w-full sm:max-w-md mx-4 p-4 bg-gradient-to-t from-gray-300 via-white to-gray-200 shadow-md overflow-hidden rounded-md border border-white",children:e.jsxs("div",{className:" p-4",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center mb-10",children:[e.jsxs("div",{className:"flex items-start justify-between mb-6 border-b border-gray-200 w-full",children:[e.jsx("h1",{className:"text-sm font-medium text-blue-dark",children:"Registrar administrador"}),e.jsx("span",{className:"text-sm font-medium text-blue-dark",children:e.jsx(O,{})})]}),e.jsx("div",{className:"w-32 flex items-center justify-center",children:e.jsx("img",{src:`/storage/images/${(j=o[0])!=null&&j.logo?(g=o[0])==null?void 0:g.logo:"default.png"}`,alt:`${(h=o[0])==null?void 0:h.empresa}`,className:""})})]}),e.jsxs("form",{onSubmit:S,children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"name",className:"label-form",children:"Nome"}),e.jsxs("div",{className:"relative flex items-center justify-between",children:[e.jsx("input",{id:"name",type:"text",value:i.name,onChange:s=>l("name",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-1",children:e.jsx(p,{size:22,color:"#4b5563"})})]}),a.name&&e.jsx("div",{className:"text-red-500 text-sm",children:a.name})]}),e.jsxs("div",{className:"flex flex-col mt-4",children:[e.jsx("label",{htmlFor:"email",className:"label-form",children:"E-mail"}),e.jsxs("div",{className:"relative flex items-center justify-between",children:[e.jsx("input",{id:"email",type:"text",value:i.email,onChange:s=>l("email",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-1",children:e.jsx(p,{size:22,color:"#4b5563"})})]}),a.email&&e.jsx("div",{className:"text-red-500 text-sm",children:a.email})]}),e.jsxs("div",{className:"mt-4 flex flex-col",children:[e.jsx("label",{htmlFor:"password",className:"label-form",children:"Senha"}),e.jsxs("div",{className:"relative flex items-center justify-between",children:[e.jsx("input",{id:"password",type:n?"text":"password",name:"password",value:i.password,className:"input-form w-full",onChange:s=>l("password",s.target.value)}),e.jsx("div",{className:"absolute right-1 cursor-pointer",onClick:()=>N(!n),children:n?e.jsx(b,{size:22,color:"#4b5563"}):e.jsx(w,{size:22,color:"#4b5563"})})]}),a.password&&e.jsx("div",{className:"text-red-500 text-sm",children:a.password})]}),e.jsxs("div",{className:"mt-4 flex flex-col",children:[e.jsx("label",{htmlFor:"password_confirmation",className:"label-form",children:"Senha"}),e.jsxs("div",{className:"relative flex items-center justify-between",children:[e.jsx("input",{id:"password_confirmation",type:c?"text":"password",name:"password_confirmation",value:i.password_confirmation,className:"input-form w-full",onChange:s=>l("password_confirmation",s.target.value)}),e.jsx("div",{className:"absolute right-1 cursor-pointer",onClick:()=>y(!c),children:c?e.jsx(b,{size:22,color:"#4b5563"}):e.jsx(w,{size:22,color:"#4b5563"})})]}),a.password_confirmation&&e.jsx("div",{className:"text-red-500 text-sm",children:a.password_confirmation})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("div",{children:e.jsx(L,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Retornar ao login"})})}),e.jsx("div",{className:"mt-8",children:e.jsx("button",{className:"btn-login",disabled:z,children:C?e.jsx(P,{size:24}):e.jsx("span",{children:"Registrar"})})})]})]})]})})})]})}export{q as default};
>>>>>>>> 4c05d9a (Push):public/build/assets/Register-901867cc.js
