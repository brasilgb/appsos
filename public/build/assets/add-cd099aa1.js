import{q as c,W as x,j as e,Y as h}from"./app-cdb7fc5d.js";import{B as j,S as u}from"./index-9ef29a48.js";import{C as g,a as p,b as f,c as i,d as v,e as b}from"./index-2cebc3bf.js";import{A as C,H as N,T as B,B as y}from"./AuthLayout-5b6a2269.js";import{e as F}from"./index.esm-821338e0.js";import"./moment-a9aaa855.js";const E=({users:l})=>{const{auth:n}=c().props,{data:t,setData:r,post:m,progress:M,processing:d,errors:a}=x({remetente:n.user.id,destinatario:"",mensagem:"",status:"0"});function o(s){s.preventDefault(),m(route("mensagens.store"))}return e.jsxs(C,{children:[e.jsx(h,{title:"Mensagens"}),e.jsxs(g,{children:[e.jsxs(N,{children:[e.jsxs(B,{children:[e.jsx(F,{size:30}),e.jsx("span",{className:"ml-2",children:"Mensagem"})]}),e.jsx(y,{links:[{url:"/mensagens",label:"Mensagem"},{url:null,label:"Adicionar mensagem"}]})]}),e.jsxs(p,{children:[e.jsxs(f,{children:[e.jsx(i,{children:e.jsx(j,{url:"/mensagens",label:"Voltar"})}),e.jsx(i,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:o,autoComplete:"off",children:[e.jsx(v,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"remetente",children:"Remetente"}),e.jsx("select",{id:"remetente",value:t.remetente,onChange:s=>r("remetente",s.target.value),className:"input-form",disabled:!0,children:l.map(s=>e.jsx("option",{value:s.id,children:s.name},s.value))}),a.remetente&&e.jsx("div",{className:"text-sm text-red-500",children:a.remetente})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"destinatario",children:"Destinatário"}),e.jsxs("select",{id:"destinatario",value:t.destinatario,onChange:s=>r("destinatario",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione o destinatário"}),l.filter(s=>s.id!==n.user.id).map(s=>e.jsx("option",{value:s.id,children:s.name},s.value))]}),a.destinatario&&e.jsx("div",{className:"text-sm text-red-500",children:a.destinatario})]})]}),e.jsxs("div",{className:"flex flex-col mt-6",children:[e.jsx("label",{className:"label-form",htmlFor:"mensagem",children:"Mensagem"}),e.jsx("textarea",{id:"mensagem",value:t.mensagem,onChange:s=>r("mensagem",s.target.value),className:"input-form"}),a.mensagem&&e.jsx("div",{className:"text-sm text-red-500",children:a.mensagem})]})]})}),e.jsx(b,{children:e.jsx(u,{processing:d})})]})]})]})]})};export{E as default};
