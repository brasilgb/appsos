import{q as j,j as e,b as h,r as b,d as m}from"./app-39d32580.js";import{A as g,W as _,I as f,P as y,E as C,D as B}from"./index-a22c4d29.js";import{C as T,a as $,b as H,c as d,d as I,e as O}from"./index-801a1316.js";import{F as Y}from"./index-f8683352.js";import{I as q,T as A,a as D,b as l,c as r,d as E,e as t,P as M}from"./index-7a5c1ab0.js";import{A as N,H as P,T as k,B as R}from"./AuthLayout-cd96a75d.js";import{a as F}from"./functions-e928f381.js";import{h as i}from"./moment-fbc5633a.js";import{i as v,r as z}from"./index.esm-2158556a.js";const X=({ordens:n,whats:a,printers:o})=>{const{flash:c,ziggy:x}=j().props,{oc:u}=x.query,p=s=>{switch(s){case 1:return"bg-gray-300/50 border border-gray-300 text-gray-500 text-xs uppercase";case 2:return"bg-cyan-600/50 border border-cyan-600 text-cyan-800 text-xs uppercase";case 3:return"bg-orange-600/50 border border-orange-600 text-orange-800 text-xs uppercase";case 4:return"bg-sky-600/50 border border-sky-600 text-sky-800 text-xs uppercase";case 5:return"bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase";case 6:return"bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";case 7:return"bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";case 8:return"bg-blue-600/50 border border-blue-600 text-blue-800 text-xs uppercase"}};return e.jsxs(N,{children:[e.jsx(h,{title:"Ordens"}),e.jsxs(T,{children:[e.jsxs(P,{children:[e.jsxs(k,{children:[e.jsx(v,{size:30}),e.jsx("span",{className:"ml-2 text-",children:"Ordens"})]}),e.jsx(R,{links:[{url:null,label:"Ordens"}]})]}),e.jsxs($,{children:[e.jsxs(H,{children:[e.jsx(d,{children:e.jsx(q,{placeholder:"Buscar ordem de serviço",url:"ordens.index"})}),e.jsx(d,{children:e.jsx(g,{url:route("ordens.create"),label:"Ordem"})})]}),e.jsx(Y,{message:c}),e.jsx(I,{children:e.jsxs(A,{children:[e.jsx(D,{children:e.jsxs(l,{children:[e.jsx(r,{children:"#"}),e.jsx(r,{children:"Nome"}),e.jsx(r,{children:"Telefone"}),e.jsx(r,{children:"Recebimento"}),e.jsx(r,{children:"Equipamento"}),e.jsx(r,{children:"Modelo"}),e.jsx(r,{children:"Status"}),e.jsx(r,{children:"Entrega"}),e.jsx(r,{})]})}),e.jsx(E,{children:n.data.map(s=>e.jsx(b.Fragment,{children:e.jsxs(l,{children:[e.jsx(t,{children:s.id}),e.jsx(t,{children:e.jsx(m,{className:"text-blue-quatro hover:text-blue-quatro/80 font-medium underline",href:`/ordens?oc=${s.cliente_id}`,title:`Ordens do cliente ${s.cliente.nome}`,children:s.cliente.nome})}),e.jsx(t,{children:s.cliente.telefone}),e.jsx(t,{children:i(s.created_at).format("DD/MM/YYYY")}),e.jsx(t,{children:s.equipamento}),e.jsx(t,{children:s.modelo}),e.jsx(t,{children:e.jsx("span",{className:`px-3 py-1  rounded-full font-medium ${p(s.status)}`,children:F(s.status)})}),e.jsx(t,{children:s.dtentrega!="0000-00-00 00:00:00"&&s.dtentrega!==null?i(s.dtentrega).format("DD/MM/YYYY HH:mm"):"__/__/____ __:__"}),e.jsxs(t,{className:"flex items-center justify-end gap-2",children:[e.jsx(_,{url:`https://api.whatsapp.com/send?phone=${encodeURIComponent(s.cliente.whatsapp)}&text=${encodeURIComponent(s.status==6||s.status==7?a==null?void 0:a.concluido:s.status==3?a==null?void 0:a.orcamento:"")}`}),e.jsx(f,{url:`${s.id}`}),o?e.jsx(y,{url:`${s.id}`,status:s.status}):e.jsx("div",{title:"Preencha os dados de impressão em configurações > impressões",className:"py-1.5 px-3 rounded-md shadow bg-gray-200",children:e.jsx(z,{size:18})}),e.jsx(C,{url:`/ordens/${s.id}`,param:n.current_page}),e.jsx(B,{url:"ordens.destroy",param:s.id,identify:`a ordem ${s.id}`})]})]})},s.id))})]})}),e.jsx(O,{children:e.jsx(M,{data:n,oc:u})})]})]})]})};export{X as default};
