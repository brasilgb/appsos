import{q as i,j as s,Y as o,r as c}from"./app-8560f7f4.js";import{A as x,E as j,D as h}from"./index-4c74b095.js";import{C as m,a as p,b as u,c as d,d as f,e as C}from"./index-29173369.js";import{F as T}from"./index-49a7555b.js";import{I as b,T as A,a as B,b as l,c as a,d as y,e as r,P as H}from"./index-284323ef.js";import{A as g,H as F,T as D,F as Y,B as E}from"./AuthLayout-09b960ac.js";import{s as M}from"./functions-e928f381.js";import{h as P}from"./moment-a9aaa855.js";import"./index.esm-46e23204.js";const V=({agendas:t})=>{const{flash:n}=i().props;return s.jsxs(g,{children:[s.jsx(o,{title:"Agendas"}),s.jsxs(m,{children:[s.jsxs(F,{children:[s.jsxs(D,{children:[s.jsx(Y,{size:30}),s.jsx("span",{className:"ml-2",children:"Agenda"})]}),s.jsx(E,{links:[{url:null,label:"Agendamentos"}]})]}),s.jsxs(p,{children:[s.jsxs(u,{children:[s.jsx(d,{children:s.jsx(b,{placeholder:"Buscar por cliente",url:"agendas.index",date:!0})}),s.jsx(d,{children:s.jsx(x,{url:"/agendas/create",label:"Agendamento"})})]}),s.jsx(T,{message:n}),s.jsx(f,{children:s.jsxs(A,{children:[s.jsx(B,{children:s.jsxs(l,{children:[s.jsx(a,{children:"#"}),s.jsx(a,{children:"Cliente"}),s.jsx(a,{children:"Período"}),s.jsx(a,{children:"Técnico"}),s.jsx(a,{children:"Status"}),s.jsx(a,{})]})}),s.jsx(y,{children:t.data.map(e=>s.jsx(c.Fragment,{children:s.jsxs(l,{children:[s.jsx(r,{children:e.id}),s.jsx(r,{children:e.cliente.nome}),s.jsx(r,{children:P(e.datahora).format("DD/MM/YYYY HH:mm:ss")}),s.jsx(r,{children:e.tecnico}),s.jsx(r,{children:M(e.status)}),s.jsxs(r,{className:"flex items-center justify-end gap-2",children:[s.jsx(j,{url:route("agendas.edit",e.id)}),s.jsx(h,{url:"agendas.destroy",param:e.id,identify:`o agendamento para ${e.cliente.nome}`})]})]})},e.id))})]})}),s.jsx(C,{children:s.jsx(H,{data:t})})]})]})]})};export{V as default};
