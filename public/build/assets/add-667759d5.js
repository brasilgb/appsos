import{r as c,W as v,j as e,Y as N}from"./app-8560f7f4.js";import{B as b,S as g}from"./index-4c74b095.js";import{C,a as y,b as F,c as m,d as q,e as S}from"./index-29173369.js";import{A as k,H as w,T as B,B as O}from"./AuthLayout-09b960ac.js";import{d as _}from"./index.esm-46e23204.js";import"./moment-a9aaa855.js";const P=({clientes:x,ordem:d})=>{const[i,n]=c.useState([]),{data:s,setData:l,post:h,errors:t}=v({id:d>0?d+1:1,cliente_id:"",cliente:"",equipamento:"",modelo:"",senha:"",defeito:"",estado:"",acessorios:"",preorcamento:"",status:!1,previsao:"",obs:""});function u(a){a.preventDefault(),h(route("ordens.store"))}const f=a=>{const r=a.toLowerCase(),o=x.filter(j=>j.nome.toLowerCase().includes(r));n(o)};c.useEffect(()=>{s.cliente===""&&n([])},[s]);const p=(a,r)=>{l(o=>({...o,cliente_id:a})),l(o=>({...o,cliente:r})),n([])};return e.jsxs(k,{children:[e.jsx(N,{title:"Ordens"}),e.jsxs(C,{children:[e.jsxs(w,{children:[e.jsxs(B,{children:[e.jsx(_,{size:30}),e.jsx("span",{className:"ml-2",children:"Ordens"})]}),e.jsx(O,{links:[{url:"/ordens",label:"Ordens"},{url:null,label:"Adicionar ordem"}]})]}),e.jsxs(y,{children:[e.jsxs(F,{children:[e.jsx(m,{children:e.jsx(b,{url:"/ordens",label:"Voltar"})}),e.jsx(m,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:u,autoComplete:"off",children:[e.jsx(q,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-5 gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"ordem",children:"Ordem"}),e.jsx("input",{id:"ordem",type:"text",value:s.id,className:"input-form",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col col-span-2 relative",children:[e.jsx("label",{className:"label-form",htmlFor:"cliente",children:"Nome do cliente"}),e.jsx("input",{type:"text",value:s.cliente_id,onChange:a=>l("cliente_id",a.target.value),className:"hidden"}),e.jsx("input",{id:"cliente",type:"text",value:s.cliente,onChange:a=>{l("cliente",a.target.value),f(a.target.value)},className:"input-form"}),i.length>0&&e.jsx("div",{className:"absolute bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16 max-h-52 overflow-y-auto",children:e.jsx("ul",{className:"p-1",children:i.map((a,r)=>e.jsx("li",{className:`flex items-center justify-normal ${r<i.length-1?"border-b border-gray-200":""}`,children:e.jsx("div",{className:"text-sm text-gray-600 p-1 cursor-pointer inline-block w-full",onClick:()=>p(a.id,a.nome),children:a.nome})},r))})}),t.cliente_id&&e.jsx("div",{className:"text-sm text-red-500",children:t.cliente_id})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"equipamento",children:"Tipo de equipamento"}),e.jsx("input",{id:"equipamento",type:"text",value:s.equipamento,onChange:a=>l("equipamento",a.target.value),className:"input-form"}),t.equipamento&&e.jsx("div",{className:"text-red-500",children:t.equipamento})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"modelo",children:"Modelo do equipamento"}),e.jsx("input",{id:"modelo",type:"text",value:s.modelo,onChange:a=>l("modelo",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"senha",children:"Senha do equipamento"}),e.jsx("input",{id:"senha",type:"text",value:s.senha,onChange:a=>l("senha",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"previsao",children:"Previsão de entrega"}),e.jsx("input",{id:"previsao",type:"date",value:s.previsao,onChange:a=>l("previsao",a.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"defeito",children:"Defeito relatado/Serviço solicitado"}),e.jsx("textarea",{id:"defeito",value:s.defeito,onChange:a=>l("defeito",a.target.value),className:"input-form"}),t.defeito&&e.jsx("div",{className:"text-red-500",children:t.defeito})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"estado",children:"Estado do equipamento"}),e.jsx("textarea",{id:"estado",value:s.estado,onChange:a=>l("estado",a.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"acessorios",children:"Acessórios"}),e.jsx("textarea",{id:"acessorios",value:s.acessorios,onChange:a=>l("acessorios",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"preorcamento",children:"Pré-orçamento"}),e.jsx("textarea",{id:"preorcamento",value:s.preorcamento,onChange:a=>l("preorcamento",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"h-full flex items-center justify-center",children:[e.jsx("label",{className:"label-form mr-2",htmlFor:"status",children:"Orçamento aprovado"}),e.jsx("input",{id:"status",type:"checkbox",checked:s.status,onChange:a=>l("status",a.target.checked)})]})]}),e.jsxs("div",{className:"flex flex-col mt-6",children:[e.jsx("label",{className:"label-form",htmlFor:"obs",children:"Observações"}),e.jsx("textarea",{id:"obs",value:s.obs,onChange:a=>l("obs",a.target.value),className:"input-form"})]})]})}),e.jsx(S,{children:e.jsx(g,{})})]})]})]})]})};export{P as default};
