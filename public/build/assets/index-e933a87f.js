import{q as c,j as s,Y as x,r as j}from"./app-177f901d.js";import{A as h,E as m,D as p}from"./index-fbcf1b82.js";import{C as u,a as f,b as C,c as n,d as b,e as T}from"./index-3e20d8b5.js";import{F as B}from"./index-92f803b3.js";import{I as P,T as g,a as y,b as t,c as a,d as H,e as r,P as D}from"./index-aa20f8d5.js";import{A as E,H as F,T as Y,d as k,B as A}from"./AuthLayout-1509ff2e.js";import{d as M}from"./mask-c14164de.js";import{h as R}from"./moment-a9aaa855.js";import"./index.esm-221377a0.js";const L=({produtos:d,estoque:l})=>{const{flash:o}=c().props;return console.log(l),s.jsxs(E,{children:[s.jsx(x,{title:"Produtos"}),s.jsxs(u,{children:[s.jsxs(F,{children:[s.jsxs(Y,{children:[s.jsx(k,{size:30}),s.jsx("span",{className:"ml-2",children:"Produtos"})]}),s.jsx(A,{links:[{url:null,label:"Produtos"}]})]}),s.jsxs(f,{children:[s.jsxs(C,{children:[s.jsx(n,{children:s.jsx(P,{placeholder:"Buscar produto",url:"produtos.index"})}),s.jsx(n,{children:s.jsx(h,{url:"/produtos/create",label:"Produto"})})]}),s.jsx(B,{message:o}),s.jsx(b,{children:s.jsxs(g,{children:[s.jsx(y,{children:s.jsxs(t,{children:[s.jsx(a,{children:"#"}),s.jsx(a,{children:"Descrição"}),s.jsx(a,{children:"Estoque"}),s.jsx(a,{children:"Preço"}),s.jsx(a,{children:"Cadastro"}),s.jsx(a,{})]})}),s.jsx(H,{children:d==null?void 0:d.data.map(e=>s.jsx(j.Fragment,{children:s.jsxs(t,{children:[s.jsx(r,{children:e.id}),s.jsx(r,{children:e.descricao}),s.jsx(r,{children:l.filter(i=>i.produto_id===e.id).map(i=>i.quantidade)}),s.jsxs(r,{children:["R$ ",M(e.valvenda)]}),s.jsx(r,{children:R(e.created_at).format("DD/MM/YYYY")}),s.jsxs(r,{className:"flex items-center justify-end gap-2",children:[s.jsx(m,{url:route("produtos.edit",e.id)}),s.jsx(p,{url:"produtos.destroy",param:e.id,identify:`o produto ${e.descricao}`})]})]})},e.id))})]})}),s.jsx(T,{children:s.jsx(D,{data:d})})]})]})]})};export{L as default};
