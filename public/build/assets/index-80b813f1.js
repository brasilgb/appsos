import{q as f,W as p,j as e,b as h,y as u}from"./app-39d32580.js";import{S as j}from"./index-a22c4d29.js";import{C as g,a as b,d as N,e as v}from"./index-801a1316.js";import{F as C}from"./index-f8683352.js";import{A as y,H as F,T as z,B as E}from"./AuthLayout-cd96a75d.js";import{c as k,a as B,b as L,u as S}from"./mask-c14164de.js";import{e as T}from"./index.esm-2158556a.js";import"./moment-fbc5633a.js";const J=({empresa:r})=>{const{flash:n}=f().props,{data:l,setData:s,patch:w,progress:I,processing:c,errors:i}=p({empresa:r.empresa,razao:r.razao,cnpj:r.cnpj,logo:null,endereco:r.endereco,bairro:r.bairro,uf:r.uf,cidade:r.cidade,cep:r.cep,telefone:r.telefone,site:r.site,email:r.email});function d(a){a.preventDefault(),u.post(`empresa/${r.id}`,{_method:"put",empresa:l.empresa,razao:l.razao,cnpj:l.cnpj,logo:l.logo,endereco:l.endereco,bairro:l.bairro,uf:l.uf,cidade:l.cidade,cep:l.cep,telefone:l.telefone,site:l.site,email:l.email})}const m=a=>{const x=S(a);fetch(`https://viacep.com.br/ws/${x}/json/`).then(o=>o.json()).then(o=>{s(t=>({...t,uf:o.uf})),s(t=>({...t,cidade:o.localidade})),s(t=>({...t,bairro:o.bairro})),s(t=>({...t,endereco:o.logradouro}))}).catch(o=>console.error(o))};return e.jsxs(y,{children:[e.jsx(h,{title:"Empresa"}),e.jsxs(g,{children:[e.jsxs(F,{children:[e.jsxs(z,{children:[e.jsx(T,{size:30}),e.jsx("span",{className:"ml-2",children:"Empresa"})]}),e.jsx(E,{links:[{url:null,label:"Empresa"}]})]}),e.jsxs(b,{children:[e.jsx(C,{message:n}),e.jsxs("form",{onSubmit:d,autoComplete:"off",children:[e.jsx(N,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsx("div",{className:"w-24 my-10",children:e.jsx("img",{src:`/storage/images/${r.logo?r.logo:"default.png"}`,alt:"Imagem de logo"})}),e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"logo",children:"Logo da empresa"}),e.jsx("input",{id:"logo",type:"file",onChange:a=>s("logo",a.target.files[0]),className:`block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent`})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"empresa",children:"Nome fantasia"}),e.jsx("input",{id:"empresa",type:"text",value:l.empresa,onChange:a=>s("empresa",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"razao",children:"Razão social"}),e.jsx("input",{id:"razao",type:"text",value:l.razao,onChange:a=>s("razao",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"cnpj",children:"CNPJ"}),e.jsx("input",{id:"cnpj",type:"text",value:k(l.cnpj),onChange:a=>s("cnpj",a.target.value),className:"input-form",maxLength:18})]})]}),e.jsxs("div",{className:"grid grid-cols-6 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"cep",children:"CEP"}),e.jsx("input",{id:"cep",type:"text",value:B(l.cep),onChange:a=>s("cep",a.target.value),onBlur:a=>m(a.target.value),className:"input-form",maxLength:9})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"uf",children:"UF"}),e.jsx("input",{id:"uf",type:"text",value:l.uf,onChange:a=>s("uf",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"cidade",children:"Cidade"}),e.jsx("input",{id:"cidade",type:"text",value:l.cidade,onChange:a=>s("cidade",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"bairro",children:"Bairro"}),e.jsx("input",{id:"bairro",type:"text",value:l.bairro,onChange:a=>s("bairro",a.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"endereco",children:"Endereço"}),e.jsx("input",{id:"endereco",type:"text",value:l.endereco,onChange:a=>s("endereco",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"telefone",children:"Telefone"}),e.jsx("input",{id:"telefone",type:"text",value:L(l.telefone),onChange:a=>s("telefone",a.target.value),className:"input-form",maxLength:15})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"site",children:"Site"}),e.jsx("input",{id:"site",type:"text",value:l.site,onChange:a=>s("site",a.target.value),className:"input-form"}),i.site&&e.jsx("div",{className:"text-sm text-red-500",children:i.site})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"email",children:"E-mail"}),e.jsx("input",{id:"email",type:"text",value:l.email,onChange:a=>s("email",a.target.value),className:"input-form"}),i.email&&e.jsx("div",{className:"text-sm text-red-500",children:i.email})]})]})]})}),e.jsx(v,{children:e.jsx(j,{processing:c})})]})]})]})]})};export{J as default};
