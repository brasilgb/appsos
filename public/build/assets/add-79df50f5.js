<<<<<<<< HEAD:public/build/assets/add-9206c4ba.js
import{r as o,W as p,j as e,Y as f}from"./app-177f901d.js";import{B as j,S as v}from"./index-fbcf1b82.js";import{C as N,a as g,b,c as n,d as w,e as C}from"./index-3e20d8b5.js";import{A as y,H as F,T as S,B}from"./AuthLayout-1509ff2e.js";import{r as k,b as P}from"./dataSelect-51f2092f.js";import{b as U,f as z}from"./mask-c14164de.js";import{I as A,v as d,w as c}from"./index.esm-221377a0.js";import"./moment-a9aaa855.js";const V=()=>{const[t,m]=o.useState(!1),[i,x]=o.useState(!1),{data:l,setData:r,post:u,progress:E,processing:T,errors:a}=p({name:"",email:"",telefone:"",whatsapp:"",role:"",status:"1",password:"",password_confirmation:""});function h(s){s.preventDefault(),u(route("usuarios.store"))}return e.jsxs(y,{children:[e.jsx(f,{title:"Usuários"}),e.jsxs(N,{children:[e.jsxs(F,{children:[e.jsxs(S,{children:[e.jsx(A,{size:30}),e.jsx("span",{className:"ml-2",children:"Usuários"})]}),e.jsx(B,{links:[{url:"/usuarios",label:"Usuários"},{url:null,label:"Adicionar usuário"}]})]}),e.jsxs(g,{children:[e.jsxs(b,{children:[e.jsx(n,{children:e.jsx(j,{url:"/usuarios",label:"Voltar"})}),e.jsx(n,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:h,autoComplete:"off",children:[e.jsx(w,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-4",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"nome",children:"Nome"}),e.jsx("input",{id:"name",type:"text",value:l.name,onChange:s=>r("name",s.target.value),className:"input-form"}),a.name&&e.jsx("div",{className:"text-sm text-red-500",children:a.name})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"email",children:"E-mail"}),e.jsx("input",{id:"email",type:"text",value:l.email,onChange:s=>r("email",s.target.value),className:"input-form"}),a.email&&e.jsx("div",{className:"text-red-500",children:a.email})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"telefone",children:"Telefone"}),e.jsx("input",{id:"telefone",type:"text",value:U(l.telefone),onChange:s=>r("telefone",s.target.value),className:"input-form",maxLength:15}),a.telefone&&e.jsx("div",{className:"text-sm text-red-500",children:a.telefone})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"whatsapp",children:"Whatsapp (5551995874158)"}),e.jsx("input",{id:"whatsapp",type:"text",value:z(l.whatsapp),onChange:s=>r("whatsapp",s.target.value),className:"input-form",maxLength:13})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"password",children:"Senha"}),e.jsxs("div",{className:"flex items-center justify-between relative",children:[e.jsx("input",{id:"password",type:t?"text":"password",value:l.password,onChange:s=>r("password",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>m(s=>!s),children:t?e.jsx(d,{size:24}):e.jsx(c,{size:24})})]}),a.password&&e.jsx("div",{className:"text-sm text-red-500",children:a.password})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"password_confirmation",children:"Repita a senha"}),e.jsxs("div",{className:"flex items-center justify-between relative",children:[e.jsx("input",{id:"password_confirmation",type:i?"text":"password",value:l.password_confirmation,onChange:s=>r("password_confirmation",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>x(s=>!s),children:i?e.jsx(d,{size:24}):e.jsx(c,{size:24})})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"role",children:"Função"}),e.jsxs("select",{id:"role",value:l.role,onChange:s=>r("role",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione a função"}),k.map(s=>e.jsx("option",{value:s==null?void 0:s.value,children:s==null?void 0:s.label},s==null?void 0:s.value))]}),a.role&&e.jsx("div",{className:"text-sm text-red-500",children:a.role})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"status",children:"Status"}),e.jsx("select",{id:"status",value:l.status,onChange:s=>r("status",s.target.value),className:"input-form",children:P.map(s=>e.jsx("option",{value:s==null?void 0:s.value,children:s==null?void 0:s.label},s==null?void 0:s.value))})]})]})]})}),e.jsx(C,{children:e.jsx(v,{})})]})]})]})]})};export{V as default};
========
import{r as o,W as p,j as e,Y as f}from"./app-109e0d25.js";import{B as j,S as v}from"./index-701a8fcd.js";import{C as N,a as g,b,c as n,d as w,e as C}from"./index-0f6f0fc0.js";import{A as y,H as F,T as S,B}from"./AuthLayout-1c709568.js";import{r as k,b as P}from"./dataSelect-51f2092f.js";import{b as U,f as z}from"./mask-c14164de.js";import{I as A,v as d,w as c}from"./index.esm-d3789500.js";import"./moment-a9aaa855.js";const V=()=>{const[t,m]=o.useState(!1),[i,x]=o.useState(!1),{data:l,setData:r,post:u,progress:E,processing:T,errors:a}=p({name:"",email:"",telefone:"",whatsapp:"",role:"",status:"1",password:"",password_confirmation:""});function h(s){s.preventDefault(),u(route("usuarios.store"))}return e.jsxs(y,{children:[e.jsx(f,{title:"Usuários"}),e.jsxs(N,{children:[e.jsxs(F,{children:[e.jsxs(S,{children:[e.jsx(A,{size:30}),e.jsx("span",{className:"ml-2",children:"Usuários"})]}),e.jsx(B,{links:[{url:"/usuarios",label:"Usuários"},{url:null,label:"Adicionar usuário"}]})]}),e.jsxs(g,{children:[e.jsxs(b,{children:[e.jsx(n,{children:e.jsx(j,{url:"/usuarios",label:"Voltar"})}),e.jsx(n,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:h,autoComplete:"off",children:[e.jsx(w,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-4",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"nome",children:"Nome"}),e.jsx("input",{id:"name",type:"text",value:l.name,onChange:s=>r("name",s.target.value),className:"input-form"}),a.name&&e.jsx("div",{className:"text-sm text-red-500",children:a.name})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"email",children:"E-mail"}),e.jsx("input",{id:"email",type:"text",value:l.email,onChange:s=>r("email",s.target.value),className:"input-form"}),a.email&&e.jsx("div",{className:"text-red-500",children:a.email})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"telefone",children:"Telefone"}),e.jsx("input",{id:"telefone",type:"text",value:U(l.telefone),onChange:s=>r("telefone",s.target.value),className:"input-form",maxLength:15}),a.telefone&&e.jsx("div",{className:"text-sm text-red-500",children:a.telefone})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"whatsapp",children:"Whatsapp (5551995874158)"}),e.jsx("input",{id:"whatsapp",type:"text",value:z(l.whatsapp),onChange:s=>r("whatsapp",s.target.value),className:"input-form",maxLength:13})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"password",children:"Senha"}),e.jsxs("div",{className:"flex items-center justify-between relative",children:[e.jsx("input",{id:"password",type:t?"text":"password",value:l.password,onChange:s=>r("password",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>m(s=>!s),children:t?e.jsx(d,{size:24}):e.jsx(c,{size:24})})]}),a.password&&e.jsx("div",{className:"text-sm text-red-500",children:a.password})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"password_confirmation",children:"Repita a senha"}),e.jsxs("div",{className:"flex items-center justify-between relative",children:[e.jsx("input",{id:"password_confirmation",type:i?"text":"password",value:l.password_confirmation,onChange:s=>r("password_confirmation",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-2 cursor-pointer text-gray-500",onClick:()=>x(s=>!s),children:i?e.jsx(d,{size:24}):e.jsx(c,{size:24})})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"role",children:"Função"}),e.jsxs("select",{id:"role",value:l.role,onChange:s=>r("role",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione a função"}),k.map(s=>e.jsx("option",{value:s==null?void 0:s.value,children:s==null?void 0:s.label},s==null?void 0:s.value))]}),a.role&&e.jsx("div",{className:"text-sm text-red-500",children:a.role})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"status",children:"Status"}),e.jsx("select",{id:"status",value:l.status,onChange:s=>r("status",s.target.value),className:"input-form",children:P.map(s=>e.jsx("option",{value:s==null?void 0:s.value,children:s==null?void 0:s.label},s==null?void 0:s.value))})]})]})]})}),e.jsx(C,{children:e.jsx(v,{})})]})]})]})]})};export{V as default};
>>>>>>>> 4c05d9a (Push):public/build/assets/add-79df50f5.js
