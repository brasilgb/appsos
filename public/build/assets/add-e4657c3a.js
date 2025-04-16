import{r as h,W as y,j as e,Y as q,c as F}from"./app-1838d4c8.js";import{B as S,S as k}from"./index-a79115cb.js";import{C as _,a as w,b as B,c as u,d as D,e as O}from"./index-f525e2bb.js";import{A,H,T as M,B as T}from"./AuthLayout-f1e4e6c2.js";import{d as Y,e as p}from"./mask-c14164de.js";import{h as E}from"./moment-a9aaa855.js";import{d as L}from"./index.esm-91c63e0c.js";const G=({clientes:f,ordem:d,gerais:o})=>{var m,x;const[i,c]=h.useState([]),j=o!=null&&o.equtipo?(m=o==null?void 0:o.equtipo)==null?void 0:m.split(";"):[];o!=null&&o.equestado&&((x=o==null?void 0:o.equestado)==null||x.split(";"));const{data:s,setData:l,post:v,errors:r}=y({id:d>0?d+1:1,cliente_id:"",cliente:"",equipamento:"",modelo:"",senha:"",defeito:"",estado:"",acessorios:"",descorcamento:"",valorcamento:"0",status:!1,previsao:"",obs:""});async function N(a){a.preventDefault(),l("valorcamento",p(s.valorcamento.toString())),v(route("ordens.store")),await F.post("insert-order",{orders:[{id:s.id,cliente_id:s.cliente_id,detalhes:"",defeito:s.defeito,descorcamento:s.descorcamento,valorcamento:p(s.valorcamento.toString()),custo:"0",valservico:"0",valpecas:"0",created_at:E().format("YYYY-MM-DD H:mm:ss"),dtentrega:null,status:1}]}).then(t=>{console.log(t.data.response.message)}).catch(t=>{console.log(t)})}const b=a=>{const t=a.toLowerCase(),n=f.filter(C=>C.nome.toLowerCase().includes(t));c(n)};h.useEffect(()=>{s.cliente===""&&c([])},[s]);const g=(a,t)=>{l(n=>({...n,cliente_id:a})),l(n=>({...n,cliente:t})),c([])};return e.jsxs(A,{children:[e.jsx(q,{title:"Ordens"}),e.jsxs(_,{children:[e.jsxs(H,{children:[e.jsxs(M,{children:[e.jsx(L,{size:30}),e.jsx("span",{className:"ml-2",children:"Ordens"})]}),e.jsx(T,{links:[{url:"/ordens",label:"Ordens"},{url:null,label:"Adicionar ordem"}]})]}),e.jsxs(w,{children:[e.jsxs(B,{children:[e.jsx(u,{children:e.jsx(S,{url:"/ordens",label:"Voltar"})}),e.jsx(u,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:N,autoComplete:"off",children:[e.jsx(D,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-5 gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"ordem",children:"Ordem"}),e.jsx("input",{id:"ordem",type:"text",value:s.id,className:"input-form",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col col-span-2 relative",children:[e.jsx("label",{className:"label-form",htmlFor:"cliente",children:"Nome do cliente"}),e.jsx("input",{type:"text",value:s.cliente_id,onChange:a=>l("cliente_id",a.target.value),className:"hidden"}),e.jsx("input",{id:"cliente",type:"text",value:s.cliente,onChange:a=>{l("cliente",a.target.value),b(a.target.value)},className:"input-form"}),i.length>0&&e.jsx("div",{className:"absolute bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16 max-h-52 overflow-y-auto",children:e.jsx("ul",{className:"p-1",children:i.map((a,t)=>e.jsx("li",{className:`flex items-center justify-normal ${t<i.length-1?"border-b border-gray-200":""}`,children:e.jsx("div",{className:"text-sm text-gray-600 p-1 cursor-pointer inline-block w-full",onClick:()=>g(a.id,a.nome),children:a.nome})},t))})}),r.cliente_id&&e.jsx("div",{className:"text-sm text-red-500",children:r.cliente_id})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"equipamento",children:"Tipo de equipamento"}),e.jsxs("select",{id:"equipamento",value:s.equipamento,onChange:a=>l("equipamento",a.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione o tipo de equipamento"}),j.map((a,t)=>e.jsx("option",{value:a.trim(),children:a},t))]}),r.equipamento&&e.jsx("div",{className:"text-red-500",children:r.equipamento})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"modelo",children:"Modelo do equipamento"}),e.jsx("input",{id:"modelo",type:"text",value:s.modelo,onChange:a=>l("modelo",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"senha",children:"Senha do equipamento"}),e.jsx("input",{id:"senha",type:"text",value:s.senha,onChange:a=>l("senha",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"previsao",children:"Previsão de entrega"}),e.jsx("input",{id:"previsao",type:"date",value:s.previsao,onChange:a=>l("previsao",a.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"defeito",children:"Defeito relatado/Serviço solicitado"}),e.jsx("textarea",{id:"defeito",value:s.defeito,onChange:a=>l("defeito",a.target.value),className:"input-form"}),r.defeito&&e.jsx("div",{className:"text-red-500",children:r.defeito})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"estado",children:"Estado do equipamento"}),e.jsx("textarea",{id:"estado",value:s.estado,onChange:a=>l("estado",a.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"acessorios",children:"Acessórios"}),e.jsx("textarea",{id:"acessorios",value:s.acessorios,onChange:a=>l("acessorios",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"descorcamento",children:"Descrição pré-orçamento"}),e.jsx("textarea",{id:"descorcamento",value:s.descorcamento,onChange:a=>l("descorcamento",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"valorcamento",children:"Valor pré-orçamento"}),e.jsx("input",{type:"text",id:"valorcamento",value:Y(s.valorcamento.toString()),onChange:a=>l("valorcamento",a.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex items-center justify-center h-full",children:[e.jsx("label",{className:"label-form mr-2",htmlFor:"status",children:"Orçamento aprovado"}),e.jsx("input",{id:"status",type:"checkbox",checked:s.status,onChange:a=>l("status",a.target.checked)})]})]}),e.jsxs("div",{className:"flex flex-col mt-6",children:[e.jsx("label",{className:"label-form",htmlFor:"obs",children:"Observações"}),e.jsx("textarea",{id:"obs",value:s.obs,onChange:a=>l("obs",a.target.value),className:"input-form"})]})]})}),e.jsx(O,{children:e.jsx(k,{})})]})]})]})]})};export{G as default};
