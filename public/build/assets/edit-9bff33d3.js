import{u as $,r as g,W as P,j as e,q as A,Y as _,b as z,y as L,c as R}from"./app-28d11465.js";import{B as V,S as W}from"./index-fcdfe8a0.js";import{C as G,a as J,b as K,c as D,d as Q,e as U}from"./index-e1356bfb.js";import{F as X}from"./index-8d663dde.js";import{i as Z,j as B,d as ee,t as I}from"./index.esm-e4f4c16e.js";import{b as k,A as se,H as ae,T as le,B as te}from"./AuthLayout-df98c244.js";import{a as oe}from"./dataSelect-51f2092f.js";import{d as b,e as d,u as q}from"./mask-c14164de.js";import{h as Y}from"./moment-a9aaa855.js";const re=({produtos:t})=>{const{showModalParts:S,setShowModalParts:N,sendOrderParts:u,setSendOrderParts:p}=$(),[r,v]=g.useState([]),[o,y]=g.useState([]),{data:f,setData:C}=P({pecas:"",quantidade:"",valor:""}),n=l=>{const i=l.toLowerCase(),j=t.filter(m=>m.descricao.toLowerCase().includes(i));v(j)};g.useEffect(()=>{f.pecas===""&&v([])},[f]);const w=(l,i,j)=>{let m={id:l,descricao:i,valvenda:j};y([...o,m]),C(F=>({...F,pecas:""})),v([])},h=l=>{const i=o.filter((j,m)=>m!==l);y(i)},a=()=>{p(o),N(!1)};return e.jsx(e.Fragment,{children:S&&e.jsx("div",{className:"fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-800/90 z-40",children:e.jsxs("div",{className:"w-full sm:max-w-md mx-4 bg-gradient-to-t from-gray-300 via-white to-gray-200 shadow-md overflow-hidden rounded-md border border-white text-gray-600",children:[e.jsxs("div",{className:"h-8 flex items-center justify-between border-b px-2 bg-blue-cinco text-white rounded-t-lg",children:[e.jsx(k,{size:18}),e.jsx("h1",{className:"ml-2 flex-1 text-sm font-semibold",children:"Adicione peças/produtos a ordem"}),e.jsx("div",{className:"cursor-pointer",children:e.jsx(Z,{size:20,onClick:()=>N(!1)})})]}),e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"flex flex-col col-span-2 relative",children:[e.jsx("label",{className:"label-form",htmlFor:"pecas",children:"Buscar Peça"}),e.jsx("input",{id:"pecas",type:"text",value:f.pecas,onChange:l=>{C("pecas",l.target.value),n(l.target.value)},className:"input-form"}),r.length>0&&e.jsx("div",{className:"absolute bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16 max-h-52 overflow-y-auto",children:e.jsx("ul",{className:"p-1",children:r.map((l,i)=>e.jsx("li",{className:`flex items-center justify-normal ${i<r.length-1?"border-b border-gray-200":""}`,children:e.jsx("div",{className:"text-sm text-gray-600 p-1 cursor-pointer inline-block w-full",onClick:()=>w(l.id,l.descricao,l.valvenda),children:l.descricao})},i))})})]}),o.length>0&&e.jsx("div",{className:"mt-4 p-2 border border-gray-300 rounded-md",children:o.map((l,i)=>e.jsxs("div",{className:`py-1 grid grid-cols-4 ${o.length-1==i?"":"border-b border-b-gray-300"}`,children:[e.jsx("div",{children:l.descricao}),e.jsx("div",{children:l.valvenda}),e.jsx("div",{children:e.jsx("button",{type:"button",onClick:()=>h(i),className:"bg-red-500 rounded text-white p-1",children:e.jsx(B,{})})})]},i))}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsxs("button",{onClick:a,className:"flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",children:[e.jsx(k,{size:18}),e.jsx("span",{children:"Inserir peças"})]})})]})]})})})},fe=({ordens:t,tecnicos:S,produtos:N,ordemProduto:u,currentPage:p,gerais:r})=>{var M,O;const{setShowModalParts:v,sendOrderParts:o,setSendOrderParts:y}=$(),f=r!=null&&r.equtipo?(M=r==null?void 0:r.equtipo)==null?void 0:M.split(";"):[];r!=null&&r.equestado&&((O=r==null?void 0:r.equestado)==null||O.split(";"));const{flash:C,errors:n,ziggy:w}=A().props,{oc:h}=w.query;o.length>0;const{data:a,setData:l,progress:i,processing:j}=P({id:t.id,equipamento:t.equipamento,modelo:t.modelo,senha:t.senha,defeito:t.defeito,estado:t.estado,acessorios:t.acessorios,previsao:t.previsao,descorcamento:t.descorcamento,valorcamento:t.valorcamento?t.valorcamento:"0",pecas:t.pecas,valpecas:t.valpecas?t.valpecas:"0",valservico:t.valservico?t.valservico:"0",custo:t.custo?t.custo:"0",status:t.status,tecnico:t.tecnico,detalhes:t.detalhes,obs:t.obs,page:p});async function m(s){s.preventDefault(),L.post(`/ordens/${t.id}${h?"?oc="+h:""}`,{_method:"patch",id:a.id,equipamento:a.equipamento,modelo:a.modelo,senha:a.senha,defeito:a.defeito,estado:a.estado,acessorios:a.acessorios,previsao:a.previsao,descorcamento:a.descorcamento,valorcamento:d(a.valorcamento.toString()),pecas:a.pecas,produtos:o.map(c=>c.pecaid),valpecas:d(a.valpecas.toString()),valservico:d(a.valservico.toString()),custo:d(a.custo.toString()),status:a.status,tecnico:a.tecnico,detalhes:a.detalhes,obs:a.obs,page:p}),await R.post("orders",{ordens:[{id:a.id,cliente_id:t.cliente_id,detalhes:a.detalhes,defeito:a.defeito,descorcamento:a.descorcamento,valorcamento:d(a.valorcamento.toString()),valservico:d(a.valservico.toString()),custo:d(a.custo.toString()),valpecas:d(a.valpecas.toString()),dtentrada:Y(t.created_at).format("YYYY-MM-DD HH:mm:ss"),dtentrega:Y(t.updated_at).format("YYYY-MM-DD HH:mm:ss"),status:a.status}]}).then(c=>{console.log(c.data.response.message)}).catch(c=>{console.log(c)})}g.useEffect(()=>{(()=>{if(o.length>0){let c=(o.length>0?o:u).map(x=>parseFloat(x.valvenda)).reduce((x,T,ce)=>x+T);l(x=>({...x,valpecas:c}))}})()},[o]);const F=(s,c,x)=>parseInt(q(s))+parseInt(q(c))+parseInt(q(x)),{get:H}=P(),E=()=>{o.length>0?y([]):H(route("delpecaordem",t.id)),l(s=>({...s,valpecas:"0"}))};return g.useEffect(()=>{const s=F(a.valorcamento.toString(),a.valpecas.toString(),a.valservico.toString());l(c=>({...c,custo:s}))},[a]),e.jsxs(e.Fragment,{children:[e.jsx(re,{produtos:N}),e.jsxs(se,{children:[e.jsx(_,{title:"Ordens"}),e.jsxs(G,{children:[e.jsxs(ae,{children:[e.jsxs(le,{children:[e.jsx(ee,{size:30}),e.jsx("span",{className:"ml-2",children:"Ordens"})]}),e.jsx(te,{links:[{url:"/ordens",label:"Ordens"},{url:null,label:"Adicionar ordem"}]})]}),e.jsxs(J,{children:[e.jsx(X,{message:C}),e.jsxs(K,{children:[e.jsx(D,{children:e.jsx(V,{url:`/ordens?page=${p}${h?"&oc="+h:""}`,label:"Voltar"})}),e.jsx(D,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:m,autoComplete:"off",children:[e.jsx(Q,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-5 gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"ordem",children:"Ordem"}),e.jsx("input",{id:"ordem",type:"text",value:a.id,className:"input-form",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"cliente_id",children:"Nome do cliente"}),e.jsx("input",{id:"equipamento",type:"text",value:t.cliente.nome,className:"input-form",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"equipamento",children:"Tipo de equipamento"}),e.jsxs("select",{id:"equipamento",value:a.equipamento,onChange:s=>l("equipamento",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione o tipo de equipamento"}),e.jsx("option",{value:"Notebook",children:"Notebook"}),e.jsx("option",{value:"Mobile",children:"Mobile"}),e.jsx("option",{value:"PC",children:"PC"}),f.map((s,c)=>e.jsx("option",{value:s,children:s}))]}),n.equipamento&&e.jsx("div",{className:"text-red-500",children:n.equipamento})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"modelo",children:"Modelo do equipamento"}),e.jsx("input",{id:"modelo",type:"text",value:a.modelo,onChange:s=>l("modelo",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"senha",children:"Senha do equipamento"}),e.jsx("input",{id:"senha",type:"text",value:a.senha,onChange:s=>l("senha",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"previsao",children:"Previsão de entrega"}),e.jsx("input",{id:"previsao",type:"date",value:a.previsao,onChange:s=>l("previsao",s.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"defeito",children:"Defeito relatado/Serviço solicitado"}),e.jsx("textarea",{id:"defeito",value:a.defeito,onChange:s=>l("defeito",s.target.value),className:"input-form"}),n.defeito&&e.jsx("div",{className:"text-sm text-red-500",children:n.defeito})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"estado",children:"Estado do equipamento"}),e.jsx("textarea",{id:"estado",value:a.estado,onChange:s=>l("estado",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"acessorios",children:"Acessórios"}),e.jsx("textarea",{id:"acessorios",value:a.acessorios,onChange:s=>l("acessorios",s.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6 px-2 py-4 bg-gray-50 rounded-md border",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"valorcamento",children:"Valor orçamento"}),e.jsx("input",{id:"valorcamento",type:"text",value:b(a.valorcamento.toString()),onChange:s=>l("valorcamento",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"descorcamento",children:"Descrição do orçamento"}),e.jsx("textarea",{id:"descorcamento",value:a.descorcamento,onChange:s=>l("descorcamento",s.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-7 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"pecas",children:"Peças utilizadas (manual)"}),e.jsx("div",{className:"flex items-center justify-start gap-4 w-full",children:e.jsx("textarea",{id:"pecas",value:a.pecas,onChange:s=>l("pecas",s.target.value),className:"input-form !h-20 w-full"})})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"pecas",children:"Peças utilizadas (estoque)"}),e.jsx("div",{className:"flex items-center justify-start gap-4 w-full",children:e.jsxs("div",{className:"flex items-start justify-start w-full",children:[e.jsx("div",{className:"h-20 input-form !rounded-r-none overflow-y-auto w-full",children:(o.length>0?o:u).map((s,c)=>e.jsxs("div",{className:`py-1 flex justify-between ${(o.length>0?o:u).length-1==c?"":"border-b border-b-gray-300"}`,children:[e.jsx("div",{children:s.descricao}),e.jsx("div",{children:b(s.valvenda)})]},c))}),e.jsxs("div",{children:[e.jsx("button",{title:"Inserir peças",type:"button",className:"bg-blue-600 hover:bg-blue-600/90 py-2.5 px-3  shadow text-gray-50 h-10 rounded-tr-md",onClick:()=>v(!0),children:e.jsx(k,{size:22})}),e.jsx("button",{title:"Limpa peças",type:"button",onClick:E,className:"bg-red-600 hover:bg-red-600/90 py-2.5 px-3 shadow text-gray-50 h-10 rounded-br-md",children:e.jsx(B,{size:22})})]})]})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"valpecas",children:"Valor das peças"}),e.jsx("input",{id:"valpecas",type:"text",value:b(a.valpecas.toString()),onChange:s=>l("valpecas",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"valservico",children:"Valor do serviço"}),e.jsx("input",{id:"valservico",type:"text",value:b(a.valservico.toString()),onChange:s=>l("valservico",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"custo",children:"Custo total"}),e.jsx("input",{id:"custo",type:"text",value:b(a.custo.toString()),onChange:s=>l("custo",s.target.value),className:"input-form",readOnly:!0})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"tecnico",children:"Técnico"}),e.jsxs("select",{id:"tecnico",value:a.tecnico,onChange:s=>l("tecnico",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione o técnico"}),S.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),n.tecnico&&e.jsx("div",{className:"text-sm text-red-500",children:n.tecnico})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"status",children:"Status do serviço"}),e.jsxs("select",{id:"status",value:a.status,onChange:s=>l("status",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione o status"}),oe.map(s=>e.jsx("option",{value:s.value,children:s.label},s.value))]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"detalhes",children:"Detalhes do serviço"}),e.jsx("textarea",{id:"detalhes",value:a.detalhes,onChange:s=>l("detalhes",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"obs",children:"Observações"}),e.jsx("textarea",{id:"obs",value:a.obs,onChange:s=>l("obs",s.target.value),className:"input-form"})]})]})]})}),e.jsx(U,{children:e.jsxs("div",{className:"flex items-center justify-end gap-4",children:[t.status===8&&e.jsxs(e.Fragment,{children:[e.jsxs(z,{disabled:t.status!="8",as:"button",href:`/docs/printer?or=${t.id}&tp=2`,className:"flex items-center justify-center bg-teal-700 hover:bg-teal-700/90 py-1.5 px-3 rounded-md shadow text-gray-50 self-end transition-colors duration-300",children:[e.jsx(I,{size:18}),e.jsx("span",{className:"ml-2",children:"Recibo de entrega"})]}),e.jsxs(z,{disabled:t.status!="8",as:"button",href:`/docs/printer?or=${t.id}&tp=4`,className:"flex items-center justify-center bg-teal-700 hover:bg-teal-700/90 py-1.5 px-3 rounded-md shadow text-gray-50 self-end transition-colors duration-300",children:[e.jsx(I,{size:18}),e.jsx("span",{className:"ml-2",children:"Checklist de entrega"})]})]}),e.jsx(W,{})]})})]})]})]})]})]})};export{fe as default};
