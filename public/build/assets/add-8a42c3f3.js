<<<<<<<< HEAD:public/build/assets/add-9fd9a0da.js
import{W as h,j as e,Y as f,c as u}from"./app-177f901d.js";import{B as j,S as v}from"./index-fbcf1b82.js";import{C as N,a as g,b,c as i,d as C,e as y}from"./index-3e20d8b5.js";import{A as F,H as w,T as B,B as k}from"./AuthLayout-1509ff2e.js";import{m as L,a as T,b as m,u as P}from"./mask-c14164de.js";import{d as S}from"./index.esm-221377a0.js";import"./moment-a9aaa855.js";const M=({cliente:r})=>{const{data:s,setData:l,post:d,progress:A,processing:E,errors:t}=h({id:r>0?r+1:1,cpf:"",nascimento:"",nome:"",email:"",cep:"",uf:"",cidade:"",bairro:"",endereco:"",complemento:"",telefone:"",whatsapp:"",contato:"",telcontato:"",obs:""});async function x(a){a.preventDefault(),d(route("clientes.store")),await u.post("customers",{clientes:[{id:s.id,nome:s.nome,cpf:s.cpf,email:s.email}]}).then(c=>{console.log(c.data.response.message)}).catch(c=>{console.log(c)})}const p=a=>{const c=P(a);fetch(`https://viacep.com.br/ws/${c}/json/`).then(o=>o.json()).then(o=>{l(n=>({...n,uf:o.uf})),l(n=>({...n,cidade:o.localidade})),l(n=>({...n,bairro:o.bairro})),l(n=>({...n,endereco:o.logradouro})),l(n=>({...n,complemento:o.complemento}))}).catch(o=>console.error(o))};return e.jsxs(F,{children:[e.jsx(f,{title:"Clientes"}),e.jsxs(N,{children:[e.jsxs(w,{children:[e.jsxs(B,{children:[e.jsx(S,{size:30}),e.jsx("span",{className:"ml-2",children:"Clientes"})]}),e.jsx(k,{links:[{url:"/clientes",label:"Clientes"},{url:null,label:"Adicionar cliente"}]})]}),e.jsxs(g,{children:[e.jsxs(b,{children:[e.jsx(i,{children:e.jsx(j,{url:"/clientes",label:"Voltar"})}),e.jsx(i,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:x,autoComplete:"off",children:[e.jsx(C,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"cpf",children:"CPF/CNPJ"}),e.jsx("input",{id:"cpf",type:"text",value:L(s.cpf),onChange:a=>l("cpf",a.target.value),className:"input-form",maxLength:18}),t.cpf&&e.jsx("div",{className:"text-sm text-red-500",children:t.cpf})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"nascimento",children:"Nascimento"}),e.jsx("input",{id:"nascimento",type:"date",value:s.nascimento,onChange:a=>l("nascimento",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"nome",children:"Nome"}),e.jsx("input",{id:"nome",type:"text",value:s.nome,onChange:a=>l("nome",a.target.value),className:"input-form"}),t.nome&&e.jsx("div",{className:"text-sm text-red-500",children:t.nome})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"email",children:"E-mail"}),e.jsx("input",{id:"email",type:"text",value:s.email,onChange:a=>l("email",a.target.value),className:"input-form"}),t.email&&e.jsx("div",{className:"text-red-500",children:t.email})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"cep",children:"CEP"}),e.jsx("input",{id:"cep",type:"text",value:T(s.cep),onChange:a=>l("cep",a.target.value),onBlur:a=>p(a.target.value),className:"input-form",maxLength:9})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"uf",children:"UF"}),e.jsx("input",{id:"uf",type:"text",value:s.uf,onChange:a=>l("uf",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"cidade",children:"Cidade"}),e.jsx("input",{id:"cidade",type:"text",value:s.cidade,onChange:a=>l("cidade",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"bairro",children:"Bairro"}),e.jsx("input",{id:"bairro",type:"text",value:s.bairro,onChange:a=>l("bairro",a.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"endereco",children:"Endereço"}),e.jsx("input",{id:"endereco",type:"text",value:s.endereco,onChange:a=>l("endereco",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"complemento",children:"Complemento"}),e.jsx("input",{id:"complemento",type:"text",value:s.complemento,onChange:a=>l("complemento",a.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-5 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"telefone",children:"Telefone"}),e.jsx("input",{id:"telefone",type:"text",value:m(s.telefone),onChange:a=>l("telefone",a.target.value),className:"input-form",maxLength:15}),t.telefone&&e.jsx("div",{className:"text-sm text-red-500",children:t.telefone})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"whatsapp",children:"Whatsapp(Utilizar número padrão)"}),e.jsx("input",{id:"whatsapp",type:"text",value:s.whatsapp,onChange:a=>l("whatsapp",a.target.value),className:"input-form",maxLength:13,placeholder:"5551985471163"}),t.whatsapp&&e.jsx("div",{className:"text-sm text-red-500",children:t.whatsapp})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"contato",children:"Contato"}),e.jsx("input",{id:"contato",type:"text",value:s.contato,onChange:a=>l("contato",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"telcontato",children:"Telefone contato"}),e.jsx("input",{id:"telcontato",type:"text",value:m(s.telcontato),onChange:a=>l("telcontato",a.target.value),className:"input-form",maxLength:15})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"obs",children:"Observação"}),e.jsx("textarea",{id:"obs",value:s.obs,onChange:a=>l("obs",a.target.value),className:"input-form"})]})})]})}),e.jsx(y,{children:e.jsx(v,{})})]})]})]})]})};export{M as default};
========
import{W as h,j as e,Y as f,c as u}from"./app-109e0d25.js";import{B as j,S as v}from"./index-701a8fcd.js";import{C as N,a as g,b,c as i,d as C,e as y}from"./index-0f6f0fc0.js";import{A as F,H as w,T as B,B as k}from"./AuthLayout-1c709568.js";import{m as L,a as T,b as m,u as P}from"./mask-c14164de.js";import{d as S}from"./index.esm-d3789500.js";import"./moment-a9aaa855.js";const M=({cliente:r})=>{const{data:s,setData:l,post:d,progress:A,processing:E,errors:t}=h({id:r>0?r+1:1,cpf:"",nascimento:"",nome:"",email:"",cep:"",uf:"",cidade:"",bairro:"",endereco:"",complemento:"",telefone:"",whatsapp:"",contato:"",telcontato:"",obs:""});async function x(a){a.preventDefault(),d(route("clientes.store")),await u.post("customers",{clientes:[{id:s.id,nome:s.nome,cpf:s.cpf,email:s.email}]}).then(c=>{console.log(c.data.response.message)}).catch(c=>{console.log(c)})}const p=a=>{const c=P(a);fetch(`https://viacep.com.br/ws/${c}/json/`).then(o=>o.json()).then(o=>{l(n=>({...n,uf:o.uf})),l(n=>({...n,cidade:o.localidade})),l(n=>({...n,bairro:o.bairro})),l(n=>({...n,endereco:o.logradouro})),l(n=>({...n,complemento:o.complemento}))}).catch(o=>console.error(o))};return e.jsxs(F,{children:[e.jsx(f,{title:"Clientes"}),e.jsxs(N,{children:[e.jsxs(w,{children:[e.jsxs(B,{children:[e.jsx(S,{size:30}),e.jsx("span",{className:"ml-2",children:"Clientes"})]}),e.jsx(k,{links:[{url:"/clientes",label:"Clientes"},{url:null,label:"Adicionar cliente"}]})]}),e.jsxs(g,{children:[e.jsxs(b,{children:[e.jsx(i,{children:e.jsx(j,{url:"/clientes",label:"Voltar"})}),e.jsx(i,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:x,autoComplete:"off",children:[e.jsx(C,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"cpf",children:"CPF/CNPJ"}),e.jsx("input",{id:"cpf",type:"text",value:L(s.cpf),onChange:a=>l("cpf",a.target.value),className:"input-form",maxLength:18}),t.cpf&&e.jsx("div",{className:"text-sm text-red-500",children:t.cpf})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"nascimento",children:"Nascimento"}),e.jsx("input",{id:"nascimento",type:"date",value:s.nascimento,onChange:a=>l("nascimento",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"nome",children:"Nome"}),e.jsx("input",{id:"nome",type:"text",value:s.nome,onChange:a=>l("nome",a.target.value),className:"input-form"}),t.nome&&e.jsx("div",{className:"text-sm text-red-500",children:t.nome})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"email",children:"E-mail"}),e.jsx("input",{id:"email",type:"text",value:s.email,onChange:a=>l("email",a.target.value),className:"input-form"}),t.email&&e.jsx("div",{className:"text-red-500",children:t.email})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"cep",children:"CEP"}),e.jsx("input",{id:"cep",type:"text",value:T(s.cep),onChange:a=>l("cep",a.target.value),onBlur:a=>p(a.target.value),className:"input-form",maxLength:9})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"uf",children:"UF"}),e.jsx("input",{id:"uf",type:"text",value:s.uf,onChange:a=>l("uf",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"cidade",children:"Cidade"}),e.jsx("input",{id:"cidade",type:"text",value:s.cidade,onChange:a=>l("cidade",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"bairro",children:"Bairro"}),e.jsx("input",{id:"bairro",type:"text",value:s.bairro,onChange:a=>l("bairro",a.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"endereco",children:"Endereço"}),e.jsx("input",{id:"endereco",type:"text",value:s.endereco,onChange:a=>l("endereco",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"complemento",children:"Complemento"}),e.jsx("input",{id:"complemento",type:"text",value:s.complemento,onChange:a=>l("complemento",a.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-5 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"telefone",children:"Telefone"}),e.jsx("input",{id:"telefone",type:"text",value:m(s.telefone),onChange:a=>l("telefone",a.target.value),className:"input-form",maxLength:15}),t.telefone&&e.jsx("div",{className:"text-sm text-red-500",children:t.telefone})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"whatsapp",children:"Whatsapp(Utilizar número padrão)"}),e.jsx("input",{id:"whatsapp",type:"text",value:s.whatsapp,onChange:a=>l("whatsapp",a.target.value),className:"input-form",maxLength:13,placeholder:"5551985471163"}),t.whatsapp&&e.jsx("div",{className:"text-sm text-red-500",children:t.whatsapp})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"contato",children:"Contato"}),e.jsx("input",{id:"contato",type:"text",value:s.contato,onChange:a=>l("contato",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"telcontato",children:"Telefone contato"}),e.jsx("input",{id:"telcontato",type:"text",value:m(s.telcontato),onChange:a=>l("telcontato",a.target.value),className:"input-form",maxLength:15})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"obs",children:"Observação"}),e.jsx("textarea",{id:"obs",value:s.obs,onChange:a=>l("obs",a.target.value),className:"input-form"})]})})]})}),e.jsx(y,{children:e.jsx(v,{})})]})]})]})]})};export{M as default};
>>>>>>>> 4c05d9a (Push):public/build/assets/add-8a42c3f3.js
