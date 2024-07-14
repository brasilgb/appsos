import{u as D,r as x,W as q,j as e,q as A,Y as H,b as z,y as L}from"./app-1dcad085.js";import{B as R,S as V}from"./index-3738122c.js";import{C as _,a as W,b as Y,c as I,d as G,e as J}from"./index-352e46cd.js";import{F as K}from"./index-05797bab.js";import{i as Q,j as E,d as U,t as M}from"./index.esm-0f5a83e5.js";import{b as P,A as X,H as Z,T as ee,B as se}from"./AuthLayout-0d8c86f5.js";import{a as ae}from"./dataSelect-51f2092f.js";import{d as y,e as F,u as B}from"./mask-c14164de.js";import"./moment-a9aaa855.js";const le=({produtos:l})=>{const{showModalParts:C,setShowModalParts:p,sendOrderParts:h,setSendOrderParts:v}=D(),[c,f]=x.useState([]),[o,g]=x.useState([]),{data:j,setData:N}=q({pecas:"",quantidade:"",valor:""}),S=r=>{const i=r.toLowerCase(),u=l.filter(m=>m.descricao.toLowerCase().includes(i));f(u)};x.useEffect(()=>{j.pecas===""&&f([])},[j]);const d=(r,i,u)=>{let m={id:r,descricao:i,valvenda:u};g([...o,m]),N(w=>({...w,pecas:""})),f([])},a=r=>{const i=o.filter((u,m)=>m!==r);g(i)},t=()=>{v(o),p(!1)};return e.jsx(e.Fragment,{children:C&&e.jsx("div",{className:"fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-800/90 z-40",children:e.jsxs("div",{className:"w-full sm:max-w-md mx-4 bg-gradient-to-t from-gray-300 via-white to-gray-200 shadow-md overflow-hidden rounded-md border border-white text-gray-600",children:[e.jsxs("div",{className:"h-8 flex items-center justify-between border-b px-2 bg-blue-cinco text-white rounded-t-lg",children:[e.jsx(P,{size:18}),e.jsx("h1",{className:"ml-2 flex-1 text-sm font-semibold",children:"Adicione peças/produtos a ordem"}),e.jsx("div",{className:"cursor-pointer",children:e.jsx(Q,{size:20,onClick:()=>p(!1)})})]}),e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"flex flex-col col-span-2 relative",children:[e.jsx("label",{className:"label-form",htmlFor:"pecas",children:"Buscar Peça"}),e.jsx("input",{id:"pecas",type:"text",value:j.pecas,onChange:r=>{N("pecas",r.target.value),S(r.target.value)},className:"input-form"}),c.length>0&&e.jsx("div",{className:"absolute bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16 max-h-52 overflow-y-auto",children:e.jsx("ul",{className:"p-1",children:c.map((r,i)=>e.jsx("li",{className:`flex items-center justify-normal ${i<c.length-1?"border-b border-gray-200":""}`,children:e.jsx("div",{className:"text-sm text-gray-600 p-1 cursor-pointer inline-block w-full",onClick:()=>d(r.id,r.descricao,r.valvenda),children:r.descricao})},i))})})]}),o.length>0&&e.jsx("div",{className:"mt-4 p-2 border border-gray-300 rounded-md",children:o.map((r,i)=>e.jsxs("div",{className:`py-1 grid grid-cols-4 ${o.length-1==i?"":"border-b border-b-gray-300"}`,children:[e.jsx("div",{children:r.descricao}),e.jsx("div",{children:r.valvenda}),e.jsx("div",{children:e.jsx("button",{type:"button",onClick:()=>a(i),className:"bg-red-500 rounded text-white p-1",children:e.jsx(E,{})})})]},i))}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsxs("button",{onClick:t,className:"flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",children:[e.jsx(P,{size:18}),e.jsx("span",{children:"Inserir peças"})]})})]})]})})})},ue=({ordens:l,tecnicos:C,produtos:p,ordemProduto:h,currentPage:v,gerais:c})=>{var k,O;const{setShowModalParts:f,sendOrderParts:o,setSendOrderParts:g}=D(),j=c!=null&&c.equtipo?(k=c==null?void 0:c.equtipo)==null?void 0:k.split(";"):[],N=c!=null&&c.equestado?(O=c==null?void 0:c.equestado)==null?void 0:O.split(";"):[],{flash:S,errors:d}=A().props;x.useState([]),x.useState("0"),p.map(s=>({value:s.id,label:s.descricao})),o.length>0,h.map(s=>({value:s.id,label:s.descricao}));const{data:a,setData:t,progress:r,processing:i}=q({id:l.id,equipamento:l.equipamento,modelo:l.modelo,senha:l.senha,defeito:l.defeito,estado:l.estado,acessorios:l.acessorios,previsao:l.previsao,descorcamento:l.descorcamento,valorcamento:l.valorcamento,preorcamento:l.preorcamento,pecas:l.pecas,valpecas:l.valpecas?l.valpecas:"0",valservico:l.valservico?l.valservico:"0",custo:l.custo?l.custo:"0",status:l.status,tecnico:l.tecnico,detalhes:l.detalhes,obs:l.obs,page:v});function u(s){s.preventDefault(),L.post(`/ordens/${l.id}`,{_method:"patch",id:a.id,equipamento:a.equipamento,modelo:a.modelo,senha:a.senha,defeito:a.defeito,estado:a.estado,acessorios:a.acessorios,previsao:a.previsao,descorcamento:a.descorcamento,valorcamento:a.valorcamento,preorcamento:a.preorcamento,pecas:a.pecas,produtos:o.map(n=>n.pecaid),valpecas:F(a.valpecas.toString()),valservico:F(a.valservico.toString()),custo:F(a.custo.toString()),status:a.status,tecnico:a.tecnico,detalhes:a.detalhes,obs:a.obs,page:v})}x.useEffect(()=>{(()=>{if(o.length>0){let n=(o.length>0?o:h).map(b=>parseFloat(b.valvenda)).reduce((b,$,te)=>b+$);t(b=>({...b,valpecas:n}))}})()},[o]);const m=(s,n)=>parseInt(B(s))+parseInt(B(n)),{get:w}=q(),T=()=>{o.length>0?g([]):w(route("delpecaordem",l.id)),t(s=>({...s,valpecas:"0"}))};return x.useEffect(()=>{const s=m(a.valpecas.toString(),a.valservico.toString());t(n=>({...n,custo:s}))},[a]),e.jsxs(e.Fragment,{children:[e.jsx(le,{produtos:p}),e.jsxs(X,{children:[e.jsx(H,{title:"Ordens"}),e.jsxs(_,{children:[e.jsxs(Z,{children:[e.jsxs(ee,{children:[e.jsx(U,{size:30}),e.jsx("span",{className:"ml-2",children:"Ordens"})]}),e.jsx(se,{links:[{url:"/ordens",label:"Ordens"},{url:null,label:"Adicionar ordem"}]})]}),e.jsxs(W,{children:[e.jsx(K,{message:S}),e.jsxs(Y,{children:[e.jsx(I,{children:e.jsx(R,{url:`/ordens?page=${v}`,label:"Voltar"})}),e.jsx(I,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:u,autoComplete:"off",children:[e.jsx(G,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-5 gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"ordem",children:"Ordem"}),e.jsx("input",{id:"ordem",type:"text",value:a.id,className:"input-form",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"cliente_id",children:"Nome do cliente"}),e.jsx("input",{id:"equipamento",type:"text",value:l.cliente.nome,className:"input-form",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"equipamento",children:"Tipo de equipamento"}),e.jsxs("select",{id:"equipamento",value:a.equipamento,onChange:s=>t("equipamento",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione o tipo de equipamento"}),j.map((s,n)=>e.jsx("option",{value:s,children:s}))]}),d.equipamento&&e.jsx("div",{className:"text-red-500",children:d.equipamento})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"modelo",children:"Modelo do equipamento"}),e.jsx("input",{id:"modelo",type:"text",value:a.modelo,onChange:s=>t("modelo",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"senha",children:"Senha do equipamento"}),e.jsx("input",{id:"senha",type:"text",value:a.senha,onChange:s=>t("senha",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"previsao",children:"Previsão de entrega"}),e.jsx("input",{id:"previsao",type:"date",value:a.previsao,onChange:s=>t("previsao",s.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"defeito",children:"Defeito relatado/Serviço solicitado"}),e.jsx("textarea",{id:"defeito",value:a.defeito,onChange:s=>t("defeito",s.target.value),className:"input-form"}),d.defeito&&e.jsx("div",{className:"text-sm text-red-500",children:d.defeito})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"estado",children:"Estado do equipamento"}),e.jsxs("select",{id:"estado",value:a.estado,onChange:s=>t("estado",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione o estado equipamento"}),N.map((s,n)=>e.jsx("option",{value:s,children:s}))]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"acessorios",children:"Acessórios"}),e.jsx("textarea",{id:"acessorios",value:a.acessorios,onChange:s=>t("acessorios",s.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-7 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"pecas",children:"Peças utilizadas (manual)"}),e.jsx("div",{className:"flex items-center justify-start gap-4 w-full",children:e.jsx("textarea",{id:"pecas",value:a.pecas,onChange:s=>t("pecas",s.target.value),className:"input-form !h-20 w-full"})})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"pecas",children:"Peças utilizadas (estoque)"}),e.jsx("div",{className:"flex items-center justify-start gap-4 w-full",children:e.jsxs("div",{className:"flex items-start justify-start w-full",children:[e.jsx("div",{className:"h-20 input-form !rounded-r-none overflow-y-auto w-full",children:(o.length>0?o:h).map((s,n)=>e.jsxs("div",{className:`py-1 flex justify-between ${(o.length>0?o:h).length-1==n?"":"border-b border-b-gray-300"}`,children:[e.jsx("div",{children:s.descricao}),e.jsx("div",{children:y(s.valvenda)})]},n))}),e.jsxs("div",{children:[e.jsx("button",{title:"Inserir peças",type:"button",className:"bg-blue-700 hover:bg-blue-700/90 py-2.5 px-3 rounded-t-md rounded-l-none  shadow text-gray-50 h-10",onClick:()=>f(!0),children:e.jsx(P,{size:22})}),e.jsx("button",{title:"Limpa peças",type:"button",onClick:T,className:"bg-red-600 hover:bg-red-600/90 py-2.5 px-3 rounded-r-md rounded-t-none shadow text-gray-50 h-10",children:e.jsx(E,{size:22})})]})]})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"valpecas",children:"Valor das peças"}),e.jsx("input",{id:"valpecas",type:"text",value:y(a.valpecas.toString()),onChange:s=>t("valpecas",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"valservico",children:"Valor do serviço"}),e.jsx("input",{id:"valservico",type:"text",value:y(a.valservico.toString()),onChange:s=>t("valservico",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"custo",children:"Custo total"}),e.jsx("input",{id:"custo",type:"text",value:y(a.custo.toString()),onChange:s=>t("custo",s.target.value),className:"input-form",readOnly:!0})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"tecnico",children:"Técnico"}),e.jsxs("select",{id:"tecnico",value:a.tecnico,onChange:s=>t("tecnico",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Slecione o técnico"}),C.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),d.tecnico&&e.jsx("div",{className:"text-sm text-red-500",children:d.tecnico})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"status",children:"Status do serviço"}),e.jsxs("select",{id:"status",value:a.status,onChange:s=>t("status",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione o status"}),ae.map(s=>e.jsx("option",{value:s.value,children:s.label},s.value))]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"preorcamento",children:"Pré-orçamento"}),e.jsx("textarea",{id:"preorcamento",value:a.preorcamento,onChange:s=>t("preorcamento",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"descorcamento",children:"Descrição do orçamento"}),e.jsx("textarea",{id:"descorcamento",value:a.descorcamento,onChange:s=>t("descorcamento",s.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"detalhes",children:"Detalhes do serviço"}),e.jsx("textarea",{id:"detalhes",value:a.detalhes,onChange:s=>t("detalhes",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"obs",children:"Observações"}),e.jsx("textarea",{id:"obs",value:a.obs,onChange:s=>t("obs",s.target.value),className:"input-form"})]})]})]})}),e.jsx(J,{children:e.jsxs("div",{className:"flex items-center justify-end gap-4",children:[l.status===8&&e.jsxs(e.Fragment,{children:[e.jsxs(z,{disabled:l.status!="8",as:"button",href:`/docs/printer?or=${l.id}&tp=2`,className:"flex items-center justify-center bg-teal-700 hover:bg-teal-700/90 py-1.5 px-3 rounded-md shadow text-gray-50 self-end transition-colors duration-300",children:[e.jsx(M,{size:18}),e.jsx("span",{className:"ml-2",children:"Recibo de entrega"})]}),e.jsxs(z,{disabled:l.status!="8",as:"button",href:`/docs/printer?or=${l.id}&tp=4`,className:"flex items-center justify-center bg-teal-700 hover:bg-teal-700/90 py-1.5 px-3 rounded-md shadow text-gray-50 self-end transition-colors duration-300",children:[e.jsx(M,{size:18}),e.jsx("span",{className:"ml-2",children:"Checklist de entrega"})]})]}),e.jsx(V,{})]})})]})]})]})]})]})};export{ue as default};
