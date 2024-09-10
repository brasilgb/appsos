import{u as B,r as u,W as q,j as e,q as T,Y as $,b as z,y as A,c as _}from"./app-12962d72.js";import{B as L,S as R}from"./index-beeaaddc.js";import{C as V,a as W,b as G,c as D,d as J,e as K}from"./index-996f391f.js";import{F as Q}from"./index-3df874fb.js";import{i as U,j as H,d as X,t as I}from"./index.esm-603265bf.js";import{b as P,A as Z,H as ee,T as se,B as ae}from"./AuthLayout-e2b7b117.js";import{a as le}from"./dataSelect-51f2092f.js";import{d as N,e as m,u as F}from"./mask-c14164de.js";import{h as Y}from"./moment-a9aaa855.js";const te=({produtos:l})=>{const{showModalParts:S,setShowModalParts:f,sendOrderParts:p,setSendOrderParts:j}=B(),[c,b]=u.useState([]),[o,y]=u.useState([]),{data:g,setData:C}=q({pecas:"",quantidade:"",valor:""}),d=r=>{const n=r.toLowerCase(),v=l.filter(x=>x.descricao.toLowerCase().includes(n));b(v)};u.useEffect(()=>{g.pecas===""&&b([])},[g]);const a=(r,n,v)=>{let x={id:r,descricao:n,valvenda:v};y([...o,x]),C(w=>({...w,pecas:""})),b([])},t=r=>{const n=o.filter((v,x)=>x!==r);y(n)},k=()=>{j(o),f(!1)};return e.jsx(e.Fragment,{children:S&&e.jsx("div",{className:"fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-800/90 z-40",children:e.jsxs("div",{className:"w-full sm:max-w-md mx-4 bg-gradient-to-t from-gray-300 via-white to-gray-200 shadow-md overflow-hidden rounded-md border border-white text-gray-600",children:[e.jsxs("div",{className:"h-8 flex items-center justify-between border-b px-2 bg-blue-cinco text-white rounded-t-lg",children:[e.jsx(P,{size:18}),e.jsx("h1",{className:"ml-2 flex-1 text-sm font-semibold",children:"Adicione peças/produtos a ordem"}),e.jsx("div",{className:"cursor-pointer",children:e.jsx(U,{size:20,onClick:()=>f(!1)})})]}),e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"flex flex-col col-span-2 relative",children:[e.jsx("label",{className:"label-form",htmlFor:"pecas",children:"Buscar Peça"}),e.jsx("input",{id:"pecas",type:"text",value:g.pecas,onChange:r=>{C("pecas",r.target.value),d(r.target.value)},className:"input-form"}),c.length>0&&e.jsx("div",{className:"absolute bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16 max-h-52 overflow-y-auto",children:e.jsx("ul",{className:"p-1",children:c.map((r,n)=>e.jsx("li",{className:`flex items-center justify-normal ${n<c.length-1?"border-b border-gray-200":""}`,children:e.jsx("div",{className:"text-sm text-gray-600 p-1 cursor-pointer inline-block w-full",onClick:()=>a(r.id,r.descricao,r.valvenda),children:r.descricao})},n))})})]}),o.length>0&&e.jsx("div",{className:"mt-4 p-2 border border-gray-300 rounded-md",children:o.map((r,n)=>e.jsxs("div",{className:`py-1 grid grid-cols-4 ${o.length-1==n?"":"border-b border-b-gray-300"}`,children:[e.jsx("div",{children:r.descricao}),e.jsx("div",{children:r.valvenda}),e.jsx("div",{children:e.jsx("button",{type:"button",onClick:()=>t(n),className:"bg-red-500 rounded text-white p-1",children:e.jsx(H,{})})})]},n))}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsxs("button",{onClick:k,className:"flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",children:[e.jsx(P,{size:18}),e.jsx("span",{children:"Inserir peças"})]})})]})]})})})},pe=({ordens:l,tecnicos:S,produtos:f,ordemProduto:p,currentPage:j,gerais:c})=>{var M,O;const{setShowModalParts:b,sendOrderParts:o,setSendOrderParts:y}=B(),g=c!=null&&c.equtipo?(M=c==null?void 0:c.equtipo)==null?void 0:M.split(";"):[];c!=null&&c.equestado&&((O=c==null?void 0:c.equestado)==null||O.split(";"));const{flash:C,errors:d}=T().props;u.useState([]),u.useState("0"),f.map(s=>({value:s.id,label:s.descricao})),o.length>0,p.map(s=>({value:s.id,label:s.descricao}));const{data:a,setData:t,progress:k,processing:r}=q({id:l.id,equipamento:l.equipamento,modelo:l.modelo,senha:l.senha,defeito:l.defeito,estado:l.estado,acessorios:l.acessorios,previsao:l.previsao,descorcamento:l.descorcamento,valorcamento:l.valorcamento?l.valorcamento:"0",pecas:l.pecas,valpecas:l.valpecas?l.valpecas:"0",valservico:l.valservico?l.valservico:"0",custo:l.custo?l.custo:"0",status:l.status,tecnico:l.tecnico,detalhes:l.detalhes,obs:l.obs,page:j});async function n(s){s.preventDefault(),A.post(`/ordens/${l.id}`,{_method:"patch",id:a.id,equipamento:a.equipamento,modelo:a.modelo,senha:a.senha,defeito:a.defeito,estado:a.estado,acessorios:a.acessorios,previsao:a.previsao,descorcamento:a.descorcamento,valorcamento:m(a.valorcamento.toString()),pecas:a.pecas,produtos:o.map(i=>i.pecaid),valpecas:m(a.valpecas.toString()),valservico:m(a.valservico.toString()),custo:m(a.custo.toString()),status:a.status,tecnico:a.tecnico,detalhes:a.detalhes,obs:a.obs,page:j}),await _.post("orders",{ordens:[{id:a.id,cliente_id:l.cliente_id,detalhes:a.detalhes,defeito:a.defeito,descorcamento:a.descorcamento,valorcamento:m(a.valorcamento.toString()),valservico:m(a.valservico.toString()),custo:m(a.custo.toString()),valpecas:m(a.valpecas.toString()),dtentrada:Y(l.created_at).format("YYYY-MM-DD HH:mm:ss"),dtentrega:Y(l.updated_at).format("YYYY-MM-DD HH:mm:ss"),status:a.status}]}).then(i=>{console.log(i.data.response.message)}).catch(i=>{console.log(i)})}u.useEffect(()=>{(()=>{if(o.length>0){let i=(o.length>0?o:p).map(h=>parseFloat(h.valvenda)).reduce((h,E,oe)=>h+E);t(h=>({...h,valpecas:i}))}})()},[o]);const v=(s,i,h)=>parseInt(F(s))+parseInt(F(i))+parseInt(F(h)),{get:x}=q(),w=()=>{o.length>0?y([]):x(route("delpecaordem",l.id)),t(s=>({...s,valpecas:"0"}))};return u.useEffect(()=>{const s=v(a.valorcamento.toString(),a.valpecas.toString(),a.valservico.toString());t(i=>({...i,custo:s}))},[a]),e.jsxs(e.Fragment,{children:[e.jsx(te,{produtos:f}),e.jsxs(Z,{children:[e.jsx($,{title:"Ordens"}),e.jsxs(V,{children:[e.jsxs(ee,{children:[e.jsxs(se,{children:[e.jsx(X,{size:30}),e.jsx("span",{className:"ml-2",children:"Ordens"})]}),e.jsx(ae,{links:[{url:"/ordens",label:"Ordens"},{url:null,label:"Adicionar ordem"}]})]}),e.jsxs(W,{children:[e.jsx(Q,{message:C}),e.jsxs(G,{children:[e.jsx(D,{children:e.jsx(L,{url:`/ordens?page=${j}`,label:"Voltar"})}),e.jsx(D,{children:e.jsx(e.Fragment,{})})]}),e.jsxs("form",{onSubmit:n,autoComplete:"off",children:[e.jsx(J,{className:" border-y border-gray-100",children:e.jsxs("div",{className:"px-3 my-4",children:[e.jsxs("div",{className:"grid grid-cols-5 gap-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"ordem",children:"Ordem"}),e.jsx("input",{id:"ordem",type:"text",value:a.id,className:"input-form",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"cliente_id",children:"Nome do cliente"}),e.jsx("input",{id:"equipamento",type:"text",value:l.cliente.nome,className:"input-form",disabled:!0})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"equipamento",children:"Tipo de equipamento"}),e.jsxs("select",{id:"equipamento",value:a.equipamento,onChange:s=>t("equipamento",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione o tipo de equipamento"}),e.jsx("option",{value:"Notebook",children:"Notebook"}),e.jsx("option",{value:"Mobile",children:"Mobile"}),e.jsx("option",{value:"PC",children:"PC"}),g.map((s,i)=>e.jsx("option",{value:s,children:s}))]}),d.equipamento&&e.jsx("div",{className:"text-red-500",children:d.equipamento})]})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"modelo",children:"Modelo do equipamento"}),e.jsx("input",{id:"modelo",type:"text",value:a.modelo,onChange:s=>t("modelo",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"senha",children:"Senha do equipamento"}),e.jsx("input",{id:"senha",type:"text",value:a.senha,onChange:s=>t("senha",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"previsao",children:"Previsão de entrega"}),e.jsx("input",{id:"previsao",type:"date",value:a.previsao,onChange:s=>t("previsao",s.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"defeito",children:"Defeito relatado/Serviço solicitado"}),e.jsx("textarea",{id:"defeito",value:a.defeito,onChange:s=>t("defeito",s.target.value),className:"input-form"}),d.defeito&&e.jsx("div",{className:"text-sm text-red-500",children:d.defeito})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"estado",children:"Estado do equipamento"}),e.jsx("textarea",{id:"estado",value:a.estado,onChange:s=>t("estado",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"acessorios",children:"Acessórios"}),e.jsx("textarea",{id:"acessorios",value:a.acessorios,onChange:s=>t("acessorios",s.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6 px-2 py-4 bg-gray-50 rounded-md border",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"valorcamento",children:"Valor orçamento"}),e.jsx("input",{id:"valorcamento",type:"text",value:N(a.valorcamento.toString()),onChange:s=>t("valorcamento",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"descorcamento",children:"Descrição do orçamento"}),e.jsx("textarea",{id:"descorcamento",value:a.descorcamento,onChange:s=>t("descorcamento",s.target.value),className:"input-form"})]})]}),e.jsxs("div",{className:"grid grid-cols-7 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"pecas",children:"Peças utilizadas (manual)"}),e.jsx("div",{className:"flex items-center justify-start gap-4 w-full",children:e.jsx("textarea",{id:"pecas",value:a.pecas,onChange:s=>t("pecas",s.target.value),className:"input-form !h-20 w-full"})})]}),e.jsxs("div",{className:"flex flex-col col-span-2",children:[e.jsx("label",{className:"label-form",htmlFor:"pecas",children:"Peças utilizadas (estoque)"}),e.jsx("div",{className:"flex items-center justify-start gap-4 w-full",children:e.jsxs("div",{className:"flex items-start justify-start w-full",children:[e.jsx("div",{className:"h-20 input-form !rounded-r-none overflow-y-auto w-full",children:(o.length>0?o:p).map((s,i)=>e.jsxs("div",{className:`py-1 flex justify-between ${(o.length>0?o:p).length-1==i?"":"border-b border-b-gray-300"}`,children:[e.jsx("div",{children:s.descricao}),e.jsx("div",{children:N(s.valvenda)})]},i))}),e.jsxs("div",{children:[e.jsx("button",{title:"Inserir peças",type:"button",className:"bg-blue-600 hover:bg-blue-600/90 py-2.5 px-3  shadow text-gray-50 h-10 rounded-tr-md",onClick:()=>b(!0),children:e.jsx(P,{size:22})}),e.jsx("button",{title:"Limpa peças",type:"button",onClick:w,className:"bg-red-600 hover:bg-red-600/90 py-2.5 px-3 shadow text-gray-50 h-10 rounded-br-md",children:e.jsx(H,{size:22})})]})]})})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"valpecas",children:"Valor das peças"}),e.jsx("input",{id:"valpecas",type:"text",value:N(a.valpecas.toString()),onChange:s=>t("valpecas",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"valservico",children:"Valor do serviço"}),e.jsx("input",{id:"valservico",type:"text",value:N(a.valservico.toString()),onChange:s=>t("valservico",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"custo",children:"Custo total"}),e.jsx("input",{id:"custo",type:"text",value:N(a.custo.toString()),onChange:s=>t("custo",s.target.value),className:"input-form",readOnly:!0})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"tecnico",children:"Técnico"}),e.jsxs("select",{id:"tecnico",value:a.tecnico,onChange:s=>t("tecnico",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione o técnico"}),S.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),d.tecnico&&e.jsx("div",{className:"text-sm text-red-500",children:d.tecnico})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"status",children:"Status do serviço"}),e.jsxs("select",{id:"status",value:a.status,onChange:s=>t("status",s.target.value),className:"input-form",children:[e.jsx("option",{value:"",children:"Selecione o status"}),le.map(s=>e.jsx("option",{value:s.value,children:s.label},s.value))]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-6",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"detalhes",children:"Detalhes do serviço"}),e.jsx("textarea",{id:"detalhes",value:a.detalhes,onChange:s=>t("detalhes",s.target.value),className:"input-form"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"label-form",htmlFor:"obs",children:"Observações"}),e.jsx("textarea",{id:"obs",value:a.obs,onChange:s=>t("obs",s.target.value),className:"input-form"})]})]})]})}),e.jsx(K,{children:e.jsxs("div",{className:"flex items-center justify-end gap-4",children:[l.status===8&&e.jsxs(e.Fragment,{children:[e.jsxs(z,{disabled:l.status!="8",as:"button",href:`/docs/printer?or=${l.id}&tp=2`,className:"flex items-center justify-center bg-teal-700 hover:bg-teal-700/90 py-1.5 px-3 rounded-md shadow text-gray-50 self-end transition-colors duration-300",children:[e.jsx(I,{size:18}),e.jsx("span",{className:"ml-2",children:"Recibo de entrega"})]}),e.jsxs(z,{disabled:l.status!="8",as:"button",href:`/docs/printer?or=${l.id}&tp=4`,className:"flex items-center justify-center bg-teal-700 hover:bg-teal-700/90 py-1.5 px-3 rounded-md shadow text-gray-50 self-end transition-colors duration-300",children:[e.jsx(I,{size:18}),e.jsx("span",{className:"ml-2",children:"Checklist de entrega"})]})]}),e.jsx(R,{})]})})]})]})]})]})]})};export{pe as default};
