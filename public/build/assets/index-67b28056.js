import{q as n,W as i,j as e,Y as h}from"./app-1dcad085.js";import{S as x}from"./index-3738122c.js";import{C as d,a as u,d as f,e as p}from"./index-352e46cd.js";import{F as b}from"./index-05797bab.js";import{A as j,H as k,T as g,B as v}from"./AuthLayout-0d8c86f5.js";import{e as N}from"./index.esm-0f5a83e5.js";import"./moment-a9aaa855.js";const R=({impressao:s})=>{const{flash:r}=n().props,{data:l,setData:o,patch:c,progress:C,processing:t,errors:F}=i({recebimento:s.recebimento,entrega:s.entrega,orcamento:s.orcamento,checkmobile:s.checkmobile,checkpc:s.checkpc,checknote:s.checknote,checkoutros:s.checkoutros});function m(a){a.preventDefault(),c(route("impressoes.update",s.id))}return e.jsxs(j,{children:[e.jsx(h,{title:"Impressões"}),e.jsxs(d,{children:[e.jsxs(k,{children:[e.jsxs(g,{children:[e.jsx(N,{size:30}),e.jsx("span",{className:"ml-2",children:"Impressão"})]}),e.jsx(v,{links:[{url:null,label:"Impressão"}]})]}),e.jsxs(u,{children:[e.jsx(b,{message:r}),e.jsxs("form",{onSubmit:m,autoComplete:"off",children:[e.jsx(f,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"flex flex-col mt-6",children:[e.jsx("label",{className:"label-form",htmlFor:"recebimento",children:"Recibo de recebimento de equipamento"}),e.jsx("textarea",{id:"recebimento",value:l.recebimento,onChange:a=>o("recebimento",a.target.value),className:"input-form",rows:2})]}),e.jsxs("div",{className:"flex flex-col mt-6",children:[e.jsx("label",{className:"label-form",htmlFor:"entrega",children:"Recibo de entrega do equipamento"}),e.jsx("textarea",{id:"entrega",value:l.entrega,onChange:a=>o("entrega",a.target.value),className:"input-form",rows:2})]}),e.jsxs("div",{className:"flex flex-col mt-6",children:[e.jsx("label",{className:"label-form",htmlFor:"orcamento",children:"Orçamento de equipamento"}),e.jsx("textarea",{id:"orcamento",value:l.orcamento,onChange:a=>o("orcamento",a.target.value),className:"input-form",rows:2})]}),e.jsxs("div",{className:"flex flex-col mt-6",children:[e.jsx("label",{className:"label-form",htmlFor:"checkmobile",children:"Checklist mobile (separar com ;)"}),e.jsx("textarea",{id:"checkmobile",value:l.checkmobile,onChange:a=>o("checkmobile",a.target.value),className:"input-form",rows:1})]}),e.jsxs("div",{className:"flex flex-col mt-6",children:[e.jsx("label",{className:"label-form",htmlFor:"checkpc",children:"Checklist Computadores (separar com ;)"}),e.jsx("textarea",{id:"checkpc",value:l.checkpc,onChange:a=>o("checkpc",a.target.value),className:"input-form",rows:1})]}),e.jsxs("div",{className:"flex flex-col mt-6",children:[e.jsx("label",{className:"label-form",htmlFor:"checknote",children:"Checklist notebooks (separar com ;)"}),e.jsx("textarea",{id:"checknote",value:l.checknote,onChange:a=>o("checknote",a.target.value),className:"input-form",rows:1})]}),e.jsxs("div",{className:"flex flex-col mt-6",children:[e.jsx("label",{className:"label-form",htmlFor:"checkoutros",children:"Checklist outros (separar com ;)"}),e.jsx("textarea",{id:"checkoutros",value:l.checkoutros,onChange:a=>o("checkoutros",a.target.value),className:"input-form",rows:1})]})]})}),e.jsx(p,{children:e.jsx(x,{processing:t})})]})]})]})]})};export{R as default};
