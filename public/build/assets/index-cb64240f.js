import{q as x,j as e,Y as c,r as j}from"./app-177f901d.js";import{A as h,E as m,D as u}from"./index-fbcf1b82.js";import{C as p,a as f,b,c as l,d as C,e as T}from"./index-3e20d8b5.js";import{F as g}from"./index-92f803b3.js";import{I as B,T as y,a as U,b as n,c as r,d as H,e as a,P as F}from"./index-aa20f8d5.js";import{A as Y,H as A,T as D,B as E}from"./AuthLayout-1509ff2e.js";import{r as I,b as N}from"./functions-e928f381.js";import{h as M}from"./moment-a9aaa855.js";import{I as P}from"./index.esm-221377a0.js";const _=({usuarios:t})=>{const{flash:o,auth:d}=x().props,i=s=>{switch(s){case 1:return"bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";case 2:return"bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase"}};return e.jsxs(Y,{children:[e.jsx(c,{title:"Usuários"}),e.jsxs(p,{children:[e.jsxs(A,{children:[e.jsxs(D,{children:[e.jsx(P,{size:30}),e.jsx("span",{className:"ml-2",children:"Usuários"})]}),e.jsx(E,{links:[{url:null,label:"Usuários"}]})]}),e.jsxs(f,{children:[e.jsxs(b,{children:[e.jsx(l,{children:e.jsx(B,{placeholder:"Buscar usuário",url:"usuarios.index"})}),e.jsx(l,{children:e.jsx(h,{url:"/usuarios/create",label:"Usuário",disabled:d.user.role!==1})})]}),e.jsx(g,{message:o}),e.jsx(C,{children:e.jsxs(y,{children:[e.jsx(U,{children:e.jsxs(n,{children:[e.jsx(r,{children:"#"}),e.jsx(r,{children:"Nome"}),e.jsx(r,{children:"Telefone"}),e.jsx(r,{children:"Função"}),e.jsx(r,{children:"Status"}),e.jsx(r,{children:"Cadastro"}),e.jsx(r,{})]})}),e.jsx(H,{children:t.data.map(s=>e.jsx(j.Fragment,{children:e.jsxs(n,{children:[e.jsx(a,{children:s.id}),e.jsx(a,{children:s.name}),e.jsx(a,{children:s.telefone}),e.jsx(a,{children:I(s.role)}),e.jsx(a,{children:e.jsx("span",{className:`px-3 py-1  rounded-full font-medium ${i(s.status)}`,children:N(s.status)})}),e.jsx(a,{children:M(s.created_at).format("DD/MM/YYYY")}),e.jsxs(a,{className:"flex items-center justify-end gap-2",children:[e.jsx(m,{url:route("usuarios.edit",s.id)}),e.jsx(u,{url:"usuarios.destroy",param:s.id,identify:`o usuário ${s.name}`,disabled:d.user.role!==1})]})]})},s.id))})]})}),e.jsx(T,{children:e.jsx(F,{data:t})})]})]})]})};export{_ as default};
