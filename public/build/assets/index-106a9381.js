import{q as t,j as s,Y as n,r as c}from"./app-a772108d.js";import{A as x,E as j,D as h}from"./index-24432b9c.js";import{C as m,a as p,b as u,c as l,d as f,e as C}from"./index-2bb1f88e.js";import{F as b}from"./index-440d6f9e.js";import{I as M,T,a as B,b as i,c as e,d as H,e as r,P as y}from"./index-dc113c82.js";import{A as F,H as g,T as A,d as Y,B as D}from"./AuthLayout-69ab9dc8.js";import{h as E}from"./moment-a9aaa855.js";import"./index.esm-5efa0442.js";const L=({modelos:d})=>{const{flash:o}=t().props;return s.jsxs(F,{children:[s.jsx(n,{title:"Modelos"}),s.jsxs(m,{children:[s.jsxs(g,{children:[s.jsxs(A,{children:[s.jsx(Y,{size:30}),s.jsx("span",{className:"ml-2",children:"Modelos"})]}),s.jsx(D,{links:[{url:null,label:"Modelos"}]})]}),s.jsxs(p,{children:[s.jsxs(u,{children:[s.jsx(l,{children:s.jsx(M,{placeholder:"Buscar por marca",url:"modelos.index"})}),s.jsx(l,{children:s.jsx(x,{url:"/modelos/create",label:"Modelos"})})]}),s.jsx(b,{message:o}),s.jsx(f,{children:s.jsxs(T,{children:[s.jsx(B,{children:s.jsxs(i,{children:[s.jsx(e,{children:"#"}),s.jsx(e,{children:"Modelo"}),s.jsx(e,{children:"Marca"}),s.jsx(e,{children:"Cadastro"}),s.jsx(e,{})]})}),s.jsx(H,{children:d.data.map(a=>s.jsx(c.Fragment,{children:s.jsxs(i,{children:[s.jsx(r,{children:a.id}),s.jsx(r,{children:a.modelo}),s.jsx(r,{children:a.marca.marca}),s.jsx(r,{children:E(a.created_at).format("DD/MM/YYYY HH:mm")}),s.jsxs(r,{className:"flex items-center justify-end gap-2",children:[s.jsx(j,{url:route("modelos.edit",a.id)}),s.jsx(h,{url:"modelos.destroy",param:a.id,identify:`a modelo de ${a.marca}`})]})]})},a.id))})]})}),s.jsx(C,{children:s.jsx(y,{data:d})})]})]})]})};export{L as default};
