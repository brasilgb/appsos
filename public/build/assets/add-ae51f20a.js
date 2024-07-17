import{W as h,j as e,Y as f}from"./app-1a5f548b.js";import{B as u,S as j}from"./index-4b386597.js";import{C as v,a as N,b,c,d as g,e as C}from"./index-eb8144d5.js";import{A as y,H as F,T as B,B as w}from"./AuthLayout-28b1b4b4.js";import{m as k,a as L,b as i,u as T}from"./mask-c14164de.js";import{d as P}from"./index.esm-c25bae60.js";import"./moment-a9aaa855.js";const J=({cliente:r})=>{const{data:s,setData:l,post:m,progress:S,processing:A,errors:t}=h({id:r>0?r+1:1,cpf:"",nascimento:"",nome:"",email:"",cep:"",uf:"",cidade:"",bairro:"",endereco:"",complemento:"",telefone:"",whatsapp:"",contato:"",telcontato:"",obs:""});function d(a){a.preventDefault(),m(route("clientes.store"))}const x=a=>{const p=T(a);fetch(`https://viacep.com.br/ws/${p}/json/`).then(o=>o.json()).then(o=>{l(n=>({...n,uf:o.uf})),l(n=>({...n,cidade:o.localidade})),l(n=>({...n,bairro:o.bairro})),l(n=>({...n,endereco:o.logradouro})),l(n=>({...n,complemento:o.complemento}))}).catch(o=>console.error(o))};return e.jsxs(y,{children:[e.jsx(f,{title:"Clientes"}),e.jsxs(v,{children:[e.jsxs(F,{children:[e.jsxs(B,{children:[e.jsx(P,{size:30}),e.jsx("span",{className:"ml-2",children:"Clientes"})]}),e.jsx(w,{links:[{url:"/clientes",label:"Clientes"},{url:null,label:"Adicionar cliente"}]})]}),e.jsxs(N,{children:[e.jsxs(b,{children:[e.jsx(c,{children:e.jsx(u,{url:"/clientes",label:"Voltar"})}),e.jsx(c,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:d,autoComplete:"off",children:[e.jsx(g,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-6 gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"cpf",children:"CPF/CNPJ"}),e.jsx("input",{id:"cpf",type:"text",value:k(s.cpf),onChange:a=>l("cpf",a.target.value),className:"input-form",maxLength:18}),t.cpf&&e.jsx("div",{className:"text-sm text-red-500",children:t.cpf})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"nascimento",children:"Nascimento"}),e.jsx("input",{id:"nascimento",type:"date",value:s.nascimento,onChange:a=>l("nascimento",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"nome",children:"Nome"}),e.jsx("input",{id:"nome",type:"text",value:s.nome,onChange:a=>l("nome",a.target.value),className:"input-form"}),t.nome&&e.jsx("div",{className:"text-sm text-red-500",children:t.nome})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"email",children:"E-mail"}),e.jsx("input",{id:"email",type:"text",value:s.email,onChange:a=>l("email",a.target.value),className:"input-form"}),t.email&&e.jsx("div",{className:"text-red-500",children:t.email})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"cep",children:"CEP"}),e.jsx("input",{id:"cep",type:"text",value:L(s.cep),onChange:a=>l("cep",a.target.value),onBlur:a=>x(a.target.value),className:"input-form",maxLength:9})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"uf",children:"UF"}),e.jsx("input",{id:"uf",type:"text",value:s.uf,onChange:a=>l("uf",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"cidade",children:"Cidade"}),e.jsx("input",{id:"cidade",type:"text",value:s.cidade,onChange:a=>l("cidade",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"bairro",children:"Bairro"}),e.jsx("input",{id:"bairro",type:"text",value:s.bairro,onChange:a=>l("bairro",a.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"endereco",children:"Endereço"}),e.jsx("input",{id:"endereco",type:"text",value:s.endereco,onChange:a=>l("endereco",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"complemento",children:"Complemento"}),e.jsx("input",{id:"complemento",type:"text",value:s.complemento,onChange:a=>l("complemento",a.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-5 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"telefone",children:"Telefone"}),e.jsx("input",{id:"telefone",type:"text",value:i(s.telefone),onChange:a=>l("telefone",a.target.value),className:"input-form",maxLength:15}),t.telefone&&e.jsx("div",{className:"text-sm text-red-500",children:t.telefone})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"whatsapp",children:"Whatsapp(Utilizar número padrão)"}),e.jsx("input",{id:"whatsapp",type:"text",value:s.whatsapp,onChange:a=>l("whatsapp",a.target.value),className:"input-form",maxLength:13,placeholder:"5551985471163"}),t.whatsapp&&e.jsx("div",{className:"text-sm text-red-500",children:t.whatsapp})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"contato",children:"Contato"}),e.jsx("input",{id:"contato",type:"text",value:s.contato,onChange:a=>l("contato",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"telcontato",children:"Telefone contato"}),e.jsx("input",{id:"telcontato",type:"text",value:i(s.telcontato),onChange:a=>l("telcontato",a.target.value),className:"input-form",maxLength:15})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"obs",children:"Observação"}),e.jsx("textarea",{id:"obs",value:s.obs,onChange:a=>l("obs",a.target.value),className:"input-form"})]})})]})}),e.jsx(C,{children:e.jsx(j,{})})]})]})]})]})};export{J as default};