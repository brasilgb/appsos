import{q as t,j as s,Y as x,r as j}from"./app-109e0d25.js";import{A as c,a as h,O as m,E as p,D as u}from"./index-701a8fcd.js";import{C,a as f,b as T,c as l,d as b,e as B}from"./index-0f6f0fc0.js";import{F as g}from"./index-a25d1aa3.js";import{I as y,T as H,a as A,b as n,c as r,d as E,e as a,P as F}from"./index-8f0daa87.js";import{A as Y,H as D,T as P,B as I}from"./AuthLayout-1c709568.js";import{h as M}from"./moment-a9aaa855.js";import{d as N}from"./index.esm-d3789500.js";const L=({clientes:d})=>{const{flash:i,ziggy:o}=t().props;return o.query,s.jsxs(Y,{children:[s.jsx(x,{title:"Clientes"}),s.jsxs(C,{children:[s.jsxs(D,{children:[s.jsxs(P,{children:[s.jsx(N,{size:30}),s.jsx("span",{className:"ml-2",children:"Clientes"})]}),s.jsx(I,{links:[{url:null,label:"Clientes"}]})]}),s.jsxs(f,{children:[s.jsxs(T,{children:[s.jsx(l,{children:s.jsx(y,{placeholder:"Buscar por nome ou cpf/cnpj",url:"clientes.index"})}),s.jsx(l,{children:s.jsx(c,{url:"/clientes/create",label:"Cliente"})})]}),s.jsx(g,{message:i}),s.jsx(b,{children:s.jsxs(H,{children:[s.jsx(A,{children:s.jsxs(n,{children:[s.jsx(r,{children:"#"}),s.jsx(r,{children:"Nome"}),s.jsx(r,{children:"E-mail"}),s.jsx(r,{children:"CPF"}),s.jsx(r,{children:"Telefone"}),s.jsx(r,{children:"Cadastro"}),s.jsx(r,{})]})}),s.jsx(E,{children:d.data.map(e=>s.jsx(j.Fragment,{children:s.jsxs(n,{children:[s.jsx(a,{children:e.id}),s.jsx(a,{children:e.nome}),s.jsx(a,{children:e.email}),s.jsx(a,{children:e.cpf}),s.jsx(a,{children:e.telefone}),s.jsx(a,{children:M(e.created_at).format("DD/MM/YYYY")}),s.jsxs(a,{className:"flex items-center justify-end gap-2",children:[s.jsx(h,{url:`/agendas?ac=${e.id}`}),s.jsx(m,{url:`/ordens?oc=${e.id}`}),s.jsx(p,{url:route("clientes.edit",e.id)}),s.jsx(u,{url:"clientes.destroy",param:e.id,identify:`o cliente ${e.nome}`})]})]})},e.id))})]})}),s.jsx(B,{children:s.jsx(F,{data:d})})]})]})]})};export{L as default};
