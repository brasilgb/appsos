import{q as p,j as s,Y as u,r as f}from"./app-a772108d.js";import{A as C,E as b,D as T}from"./index-24432b9c.js";import{C as g,a as B,b as M,c as l,d as y,e as H}from"./index-2bb1f88e.js";import{F as v}from"./index-440d6f9e.js";import{I as A,T as O,a as Y,b as t,c as a,d as D,e as d,P as E}from"./index-dc113c82.js";import{A as F,H as R,T as k,G as P,B as S}from"./AuthLayout-69ab9dc8.js";import{e as $}from"./mask-6e3149d8.js";import{h as G}from"./moment-a9aaa855.js";import"./index.esm-5efa0442.js";const Q=({orcamentos:i,servicos:n,marcas:o,modelos:c})=>{const{flash:x}=p().props,j=e=>o.filter(r=>r.id===e).map(r=>r.marca),h=e=>c.filter(r=>r.id===e).map(r=>r.modelo),m=e=>n.filter(r=>r.id===e).map(r=>r.servico);return s.jsxs(F,{children:[s.jsx(u,{title:"Orçamentos"}),s.jsxs(g,{children:[s.jsxs(R,{children:[s.jsxs(k,{children:[s.jsx(P,{size:30}),s.jsx("span",{className:"ml-2",children:"Orçamentos"})]}),s.jsx(S,{links:[{url:null,label:"Orçamentos"}]})]}),s.jsxs(B,{children:[s.jsxs(M,{children:[s.jsx(l,{children:s.jsx(A,{placeholder:"Buscar orçamento",url:"orcamentos.index"})}),s.jsx(l,{children:s.jsx(C,{url:"/orcamentos/create",label:"Orçamento"})})]}),s.jsx(v,{message:x}),s.jsx(y,{children:s.jsxs(O,{children:[s.jsx(Y,{children:s.jsxs(t,{children:[s.jsx(a,{children:"#"}),s.jsx(a,{children:"Serviço"}),s.jsx(a,{children:"Marca"}),s.jsx(a,{children:"Modelo"}),s.jsx(a,{children:"Preço"}),s.jsx(a,{children:"Cadastro"}),s.jsx(a,{})]})}),s.jsx(D,{children:i==null?void 0:i.data.map(e=>s.jsx(f.Fragment,{children:s.jsxs(t,{children:[s.jsx(d,{children:e.id}),s.jsx(d,{children:m(e.servico)}),s.jsx(d,{children:j(e.marca)}),s.jsx(d,{children:h(e.modelo)}),s.jsxs(d,{children:["R$ ",$(`${e.valor}`)]}),s.jsx(d,{children:G(e.created_at).format("DD/MM/YYYY")}),s.jsxs(d,{className:"flex items-center justify-end gap-2",children:[s.jsx(b,{url:route("orcamentos.edit",e.id)}),s.jsx(T,{url:"orcamentos.destroy",param:e.id,identify:`o orcamento ${e.descricao}`})]})]})},e.id))})]})}),s.jsx(H,{children:s.jsx(E,{data:i})})]})]})]})};export{Q as default};
