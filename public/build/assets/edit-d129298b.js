import{q as m,W as x,j as a,Y as j}from"./app-a772108d.js";import{B as p,S as h}from"./index-24432b9c.js";import{C as u,a as f,b as C,c as l,d as b,e as g}from"./index-2bb1f88e.js";import{A as v,H as B,T as F,d as M,B as N}from"./AuthLayout-69ab9dc8.js";import{F as y}from"./index-440d6f9e.js";import"./index.esm-5efa0442.js";import"./moment-a9aaa855.js";const z=({marcas:r})=>{const{flash:t}=m().props,{data:c,setData:o,patch:d,progress:A,processing:i,errors:e}=x({marca:r.marca});function n(s){s.preventDefault(),d(route("marcas.update",r.id))}return a.jsxs(v,{children:[a.jsx(j,{title:"Marcas"}),a.jsxs(u,{children:[a.jsxs(B,{children:[a.jsxs(F,{children:[a.jsx(M,{size:30}),a.jsx("span",{className:"ml-2",children:"Marcas"})]}),a.jsx(N,{links:[{url:"/marcas",label:"Marcas"},{url:null,label:"Adicionar marca"}]})]}),a.jsxs(f,{children:[a.jsx(y,{message:t}),a.jsxs(C,{children:[a.jsx(l,{children:a.jsx(p,{url:"/marcas",label:"Voltar"})}),a.jsx(l,{children:a.jsx(a.Fragment,{})})]}),a.jsxs("form",{onSubmit:n,autoComplete:"off",children:[a.jsx(b,{className:" border-y border-gray-100",children:a.jsx("div",{className:"px-3 my-4",children:a.jsxs("div",{className:"flex flex-col",children:[a.jsx("label",{className:"label-form",htmlFor:"descricao",children:"Marca"}),a.jsx("input",{id:"marca",type:"text",value:c.marca,onChange:s=>o("marca",s.target.value),className:"input-form"}),e.marca&&a.jsx("div",{className:"text-sm text-red-500",children:e.marca})]})})}),a.jsx(g,{children:a.jsx(h,{processing:i})})]})]})]})]})};export{z as default};
