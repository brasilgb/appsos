import{q as x,W as h,j as e,b as j}from"./app-39d32580.js";import{B as u,M as p,S as g}from"./index-a22c4d29.js";import{C as f,a as b,b as v,c as i,d as C,e as N}from"./index-801a1316.js";import{F as B}from"./index-f8683352.js";import{A as M,H as F,T as y,B as E}from"./AuthLayout-cd96a75d.js";import{e as H}from"./index.esm-2158556a.js";import"./moment-fbc5633a.js";const I=({mensagens:s,users:r})=>{const{flash:m,auth:S}=x().props,{data:t,setData:l,patch:d,progress:T,processing:o,errors:n}=h({remetente:s.remetente,destinatario:s.destinatario,mensagem:s.mensagem});function c(a){a.preventDefault(),d(route("mensagens.update",s.id))}return e.jsxs(M,{children:[e.jsx(j,{title:"Mensagens"}),e.jsxs(f,{children:[e.jsxs(F,{children:[e.jsxs(y,{children:[e.jsx(H,{size:30}),e.jsx("span",{className:"ml-2",children:"Mensagem"})]}),e.jsx(E,{links:[{url:"/mensagens",label:"Mensagem"},{url:null,label:"Editar mensagem"}]})]}),e.jsxs(b,{children:[e.jsx(B,{message:m}),e.jsxs(v,{children:[e.jsx(i,{children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(u,{url:"/mensagens",label:"Voltar"}),e.jsx(p,{url:"mensagens.update",id:`${s.id}`,sttmessage:s.status})]})}),e.jsx(i,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:c,autoComplete:"off",children:[e.jsx(C,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"remetente",children:"Remetente"}),e.jsx("select",{id:"remetente",value:t.remetente,onChange:a=>l("remetente",a.target.value),className:"input-form",disabled:!0,children:r.map(a=>e.jsx("option",{value:a.id,children:a.name},a.value))})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"destinatario",children:"Destinatário"}),e.jsx("select",{id:"destinatario",value:t.destinatario,onChange:a=>l("destinatario",a.target.value),className:"input-form",disabled:!0,children:r.map(a=>e.jsx("option",{value:a.id,children:a.name},a.value))})]})]}),e.jsxs("div",{className:"flex flex-col mt-6",children:[e.jsx("label",{className:"label-form",htmlFor:"mensagem",children:"Mensagem"}),e.jsx("textarea",{id:"mensagem",value:t.mensagem,onChange:a=>l("mensagem",a.target.value),className:"input-form"}),n.mensagem&&e.jsx("div",{className:"text-sm text-red-500",children:n.mensagem})]})]})}),e.jsx(N,{children:e.jsx(g,{processing:o})})]})]})]})]})};export{I as default};
