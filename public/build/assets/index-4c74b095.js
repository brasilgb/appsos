import{j as e,b as a,W as i,r as c,q as f}from"./app-8560f7f4.js";import{G as p,z as g,s as j,A as y,t as d,i as x,y as v,p as w,l as N,j as z,B as k}from"./index.esm-46e23204.js";import{F as C,e as B}from"./AuthLayout-09b960ac.js";function I(t){return p({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"}},{tag:"path",attr:{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"}},{tag:"path",attr:{d:"M16 5l3 3"}}]})(t)}const E=({url:t,label:s,disabled:r=!1})=>e.jsxs(a,{className:`flex items-center justify-center ${r?"bg-blue-700/50":"bg-blue-700 hover:bg-blue-700/90"}  py-1.5 px-3 rounded-md shadow text-gray-50 self-end`,href:t,as:"button",type:"button",disabled:r,children:[e.jsx(g,{size:18}),e.jsx("span",{children:s})]}),A=({url:t,id:s,sttmessage:r})=>{const{patch:n}=i({status:r===0?1:0}),l=o=>{o.preventDefault(),n(route(t,s))};return e.jsx(a,{className:"flex items-center justify-center bg-gray-50 hover:bg-gray-100 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",href:"#",onClick:l,as:"button",type:"button",title:r===0?"Marcar como lida":"Mensagem lida",children:e.jsx(j,{size:22,color:r===0?"#6b6b6b":"#2a82ca"})})},S=({url:t,label:s})=>e.jsxs(a,{className:"flex items-center justify-center bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",href:t,as:"button",type:"button",children:[e.jsx(y,{size:18}),e.jsx("span",{children:s})]}),D=({url:t,status:s})=>{const[r,n]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"relative flex items-center justify-center bg-zinc-600 hover:bg-zinc-500 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",onClick:()=>n(!r),title:"Imprimir recibo",children:e.jsx(d,{size:18})}),r&&e.jsx("div",{className:"fixed w-full flex items-center justify-center bg-gray-800/90 top-0 right-0 bottom-0 left-0 z-50",children:e.jsxs("div",{className:"w-full sm:max-w-md mx-4 bg-gradient-to-t from-gray-300 via-white to-gray-200 shadow-md overflow-hidden rounded-md border border-white text-gray-600",children:[e.jsxs("div",{className:"h-8 flex items-center justify-between border-b px-2 bg-blue-cinco text-white rounded-t-lg",children:[e.jsx(d,{size:18}),e.jsx("h1",{className:"ml-2 flex-1 text-sm font-semibold",children:"Selecione o documento para impressão"}),e.jsx("button",{onClick:()=>n(!1),children:e.jsx(x,{size:18})})]}),e.jsxs("ul",{className:"p-2 uppercase text-xs font-medium flex flex-col gap-2",children:[e.jsx("li",{className:`${s=="1"?"bg-blue-quatro hover:bg-blue-quatro/90 text-white":"text-gray-200"} rounded-md text-center border border-white shadow transition-all duration-300`,children:e.jsx(a,{disabled:s!="1",as:"button",href:`/docs/printer?or=${t}&tp=1`,className:"py-1.5 w-full uppercase",children:"Recibo entrada de equipamento"})}),e.jsx("li",{className:`${s=="3"||s=="4"?"bg-blue-quatro hover:bg-blue-quatro/90 text-white":"text-gray-200"} rounded-md text-center border border-white shadow transition-all duration-300`,children:e.jsx(a,{disabled:!(s=="3"||s=="4"),as:"button",href:`/docs/printer?or=${t}&tp=3`,className:"py-1.5 w-full uppercase",children:"Recibo de orçamento de serviços"})}),e.jsx("li",{className:`${s=="8"?"bg-blue-quatro hover:bg-blue-quatro/90 text-white":"text-gray-200"} rounded-md text-center border border-white shadow transition-all duration-300`,children:e.jsx(a,{disabled:s!="8",as:"button",href:`/docs/printer?or=${t}&tp=2`,className:"py-1.5 w-full uppercase",children:"Recibo de entrega de equipamento"})}),e.jsx("li",{className:`${s=="6"||s=="7"?"bg-blue-quatro hover:bg-blue-quatro/90 text-white":"text-gray-200"} rounded-md text-center border border-white shadow transition-all duration-300`,children:e.jsx(a,{disabled:!(s=="6"||s=="7"),as:"button",href:`/docs/printer?or=${t}&tp=4`,className:"py-1.5 w-full uppercase",children:"Checklist de entrega de equipamento"})})]})]})})]})},R=({url:t})=>e.jsx("a",{className:"flex items-center justify-center bg-green-600 hover:bg-green-500 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",href:t,target:"_blank",title:"Enviar mensagem",children:e.jsx(v,{size:18})}),F=({url:t})=>e.jsx(a,{className:"flex items-center justify-center bg-sky-700 hover:bg-sky-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",href:`/imagens?or=${t}`,as:"button",type:"button",title:"Imagens da ordem",children:e.jsx(w,{size:18})}),O=({url:t})=>e.jsx(a,{className:"flex items-center justify-center bg-teal-600 hover:bg-teal-500 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",href:t,as:"button",type:"button",title:"Acessar agendamento",children:e.jsx(C,{size:18})}),W=({url:t})=>e.jsx(a,{className:"flex items-center justify-center bg-zinc-600 hover:bg-zinc-500 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",href:t,as:"button",type:"button",title:"Ordens do cliente",children:e.jsx(N,{size:18})}),L=({url:t,param:s})=>e.jsx(a,{className:"flex items-center justify-center bg-orange-600 hover:bg-orange-500 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",href:t,as:"button",type:"button",title:"Editar registro",data:{page:s},children:e.jsx(I,{size:18})}),P=({identify:t,param:s,url:r,disabled:n=!1})=>{f().props;const[l,o]=c.useState(!1),{delete:u}=i();function h(b){b.preventDefault(),u(route(r,s)),o(!1)}const m=()=>e.jsx("div",{onClick:()=>o(!1),className:"fixed z-20 top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-500 bg-opacity-40",children:e.jsxs("div",{className:"w-1/4 bg-gray-50 rounded-md shadow-md border border-white",children:[e.jsx("div",{className:"text-gray-400 flex justify-end pt-0.5 pr-0.5",children:e.jsx("button",{onClick:()=>o(!1),children:e.jsx(x,{size:18})})}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("div",{className:"text-red-500 pb-2",children:e.jsx(B,{size:40})}),e.jsx("div",{className:"text-xl",children:"Excluir registro"})]})}),e.jsxs("div",{className:"my-2 flex flex-col items-center justify-center",children:[e.jsxs("h2",{className:"text-base text-center",children:["Você realmente deseja excluir ",t,"?"]}),e.jsx("h2",{className:"test-sm mt-1",children:"Esta operação não pode ser desfeita."})]}),e.jsxs("div",{className:"flex items-center justify-end gap-3 p-3 mt-2",children:[e.jsx("button",{onClick:()=>o(!1),className:"py-2 px-3 flex-1 bg-zinc-600 hover:bg-zinc-700 rounded-md",children:e.jsx("span",{className:"text-sm text-gray-50",children:"Cancelar"})}),e.jsx("button",{onClick:h,className:"py-2 px-3 flex-1 bg-red-500 hover:bg-red-600 rounded-md",children:e.jsx("span",{className:"text-sm text-gray-50",children:"Excluir"})})]})]})});return e.jsxs(e.Fragment,{children:[l&&e.jsx(m,{}),e.jsx("button",{className:`flex items-center justify-center ${n?"bg-red-600/50":"bg-red-600 hover:bg-red-500/90"} py-1.5 px-3 rounded-md shadow text-gray-50 self-end`,onClick:()=>o(!0),title:`Deletar registro ${s}`,disabled:n,children:e.jsx(z,{size:18})})]})},T=({processing:t,value:s="Salvar"})=>e.jsx("div",{className:"flex justify-end",children:e.jsxs("button",{className:"flex items-center justify-center bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",disabled:t,type:"submit",children:[e.jsx(k,{size:18}),e.jsx("span",{className:"ml-1",children:s})]})});export{E as A,S as B,P as D,L as E,F as I,A as M,W as O,D as P,T as S,R as W,O as a};
