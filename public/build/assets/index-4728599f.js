import{q as x,r as o,W as p,j as e,Y as b,y as f}from"./app-177f901d.js";import{S as h}from"./index-fbcf1b82.js";import{C as j,a as v,d as C,e as N}from"./index-3e20d8b5.js";import{F as y}from"./index-92f803b3.js";import{A as q,H as S,T as w,a as F,B as T}from"./AuthLayout-1509ff2e.js";import{g as d,i as I}from"./index.esm-221377a0.js";import"./moment-a9aaa855.js";const Y=({geral:a,clientes:z,ordens:B})=>{const{flash:n}=x().props;o.useState(!1);const[t,D]=o.useState(!1),[i,U]=o.useState(!1),{data:r,setData:l,post:k,delete:m,progress:A,processing:c,reset:M,errors:O}=p({bgimage:a.bgimage,bgcolor:a.bgcolor,equtipo:a.equtipo,equestado:a.equestado});function g(s){s.preventDefault(),f.post(`gerais/${a.id}`,{_method:"put",bgimage:r.bgimage,bgcolor:r.bgcolor,equtipo:r.equtipo,equestado:r.equestado})}const u=s=>{s.preventDefault(),m(route("gerais.destroy",a.id))};return e.jsxs(q,{children:[e.jsx(b,{title:"Gerais"}),e.jsxs(j,{children:[e.jsxs(S,{children:[e.jsxs(w,{children:[e.jsx(F,{size:30}),e.jsx("span",{className:"ml-2",children:"Configurações gerais"})]}),e.jsx(T,{links:[{url:null,label:"Configurações gerais"}]})]}),e.jsxs(v,{className:"",children:[e.jsx(y,{message:n}),e.jsxs("form",{onSubmit:g,autoComplete:"off",children:[e.jsxs(C,{className:" border-y border-gray-100 rounded-t-md",children:[t&&e.jsxs("div",{className:"flex items-center bg-green-100 p-4 mb-0 text-sm text-green-700 border border-green-200 gap-1",children:[e.jsx(d,{size:20}),t]}),i&&e.jsxs("div",{className:"flex items-center bg-green-100 p-4 mb-0 text-sm text-green-700 border border-green-200 gap-1",children:[e.jsx(d,{size:20}),i]}),a.bgimage&&e.jsxs("div",{className:"relative w-48",children:[e.jsx("div",{className:"absolute rounded-full w-5 h-5 bg-red-500 text-white top-0 right-0",children:e.jsx("button",{onClick:s=>u(s),children:e.jsx(I,{size:20})})}),e.jsx("div",{className:"w-44 my-10",children:e.jsx("img",{src:`/storage/images/${a.bgimage?a.bgimage:""}`,alt:""})})]}),e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"bgimage",children:"Imagem de fundo (tela de login)"}),e.jsx("input",{id:"bgimage",type:"file",onChange:s=>l("bgimage",s.target.files[0]),className:`block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent`})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"bgcolor",children:"Cor de fundo (tela de login)"}),e.jsx("input",{id:"bgcolor",type:"color",value:r.bgcolor,onChange:s=>l("bgcolor",s.target.value),className:"input-form !p-0 !h-10 w-full"})]})]}),e.jsxs("div",{className:"flex flex-col mt-6",children:[e.jsx("label",{className:"label-form",htmlFor:"equtipo",children:"Tipo de equipamento (separar com ;)"}),e.jsx("textarea",{id:"equtipo",value:r.equtipo,onChange:s=>l("equtipo",s.target.value),className:"input-form",rows:2})]})]})]}),e.jsx(N,{children:e.jsx(h,{value:"Salvar",processing:c})})]})]})]})]})};export{Y as default};