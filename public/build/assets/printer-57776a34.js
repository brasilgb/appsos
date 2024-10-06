import{j as s,Y as g}from"./app-31ddb676.js";import{m as w,d as k}from"./mask-c14164de.js";import{h as f}from"./moment-a9aaa855.js";const q=({empresa:c,ordem:l,printer:a,tipo:t,codigobarras:u})=>{var n,x,h,j;const b=a!=null&&a.checkmobile?(n=a==null?void 0:a.checkmobile)==null?void 0:n.split(";"):[],d=a!=null&&a.checknote?(x=a==null?void 0:a.checknote)==null?void 0:x.split(";"):[],N=a!=null&&a.checkpc?(h=a==null?void 0:a.checkpc)==null?void 0:h.split(";"):[],o=a!=null&&a.checkoutros?(j=a==null?void 0:a.checkoutros)==null?void 0:j.split(";"):[],v=i=>{switch(i){case 1:return" entrada ";case 3:return" orçamento ";case 6:return" entrega ";case 7:return" entrega ";case 8:return" entrega "}},e=({tipo:i})=>s.jsx(s.Fragment,{children:i.map((r,y)=>s.jsxs("div",{className:"flex items-center justify-start",children:[s.jsx("div",{className:"w-3 h-3 rounded-sm border border-gray-600"}),s.jsx("div",{className:"text-sm ml-2",children:r})]},y))});return s.jsxs(s.Fragment,{children:[s.jsx(g,{title:"Ordens"}),s.jsxs("div",{className:"text-[10px] text-gray-600 relative",children:[s.jsxs("div",{className:"flex items-start justify-start py-1 px-2 border-b border-gray-200 font-semibold",children:[s.jsx("div",{className:"flex items-center justify-start w-8 mr-4",children:s.jsx("img",{src:`/storage/images/${c!=null&&c.logo?c==null?void 0:c.logo:"default.png"}`,alt:""})}),s.jsxs("div",{className:"flex-1 flex-col items-start justify-start",children:[s.jsx("h1",{children:c==null?void 0:c.razao}),s.jsxs("h1",{children:["CNPJ: ",c==null?void 0:c.cnpj]})]}),s.jsxs("div",{className:"flex-1 flex-col items-start justify-start",children:[s.jsxs("h1",{children:[c==null?void 0:c.endereco," - ",c==null?void 0:c.bairro]}),s.jsxs("h1",{children:[c==null?void 0:c.cidade," - ",c==null?void 0:c.telefone]})]})]}),s.jsxs("div",{className:"flex items-center justify-between px-2 py-0.5 bg-gray-200",children:[s.jsx("div",{children:s.jsxs("span",{className:"font-semibold mr-2 uppercase",children:["Recibo de ",v(l==null?void 0:l.status)," de equipamento"]})}),s.jsxs("div",{children:[s.jsx("span",{className:"font-semibold mr-2",children:"O.S. N°:"}),s.jsx("span",{children:("00000000"+(l==null?void 0:l.id)).slice(-8)})]}),s.jsxs("div",{children:[s.jsx("span",{className:"font-semibold mr-2 uppercase",children:"Entrada:"}),s.jsx("span",{children:f(l==null?void 0:l.created_at).format("DD/MM/YYYY")})]})]}),s.jsxs("div",{className:"flex flex-col items-start justify-start pb-1 border border-gray-200 px-2 py-0.5",children:[s.jsx("div",{className:"mb-1 flex items-center justify-center w-full",children:s.jsx("h1",{className:"border-b w-full border-gray-100 uppercase font-semibold text-center",children:"Dados do cliente"})}),s.jsxs("div",{className:"flex items-start justify-start w-full",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("h1",{children:[s.jsx("span",{className:"font-semibold mr-1",children:"Nome:"}),l==null?void 0:l.cliente.nome]}),s.jsxs("h1",{children:[s.jsx("span",{className:"font-semibold mr-1",children:"Endereço:"}),l==null?void 0:l.cliente.endereco," - ",l==null?void 0:l.cliente.bairro," - ",l==null?void 0:l.cliente.cidade]})]}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("h1",{children:[s.jsx("span",{className:"font-semibold mr-1",children:"CPF/CNPJ:"}),l!=null&&l.cliente.cpf?w(l==null?void 0:l.cliente.cpf):""]}),s.jsxs("h1",{children:[s.jsx("span",{className:"font-semibold mr-1",children:"Contato:"}),l==null?void 0:l.cliente.telefone]})]})]})]}),s.jsxs("div",{className:"flex flex-col items-start justify-start pb-2 border border-gray-200 mt-2 p-2",children:[s.jsx("div",{className:"mb-1 flex items-center justify-center w-full",children:s.jsx("h1",{className:"border-b w-full border-gray-100 uppercase font-semibold text-center",children:"Informações sobre o produto"})}),s.jsxs("div",{className:"flex items-start justify-start w-full",children:[s.jsx("div",{className:"flex-1",children:s.jsxs("h1",{children:[s.jsx("span",{className:"font-semibold mr-1",children:"Equipamento:"}),l==null?void 0:l.equipamento]})}),s.jsx("div",{className:"flex-1",children:s.jsxs("h1",{children:[s.jsx("span",{className:"font-semibold mr-1",children:"Modelo:"}),l==null?void 0:l.modelo]})})]}),s.jsxs("div",{className:"flex items-start justify-start w-full",children:[s.jsx("div",{className:"flex-1",children:s.jsxs("h1",{children:[s.jsx("span",{className:"font-semibold mr-1",children:"Defeito relatado:"}),l==null?void 0:l.defeito]})}),s.jsx("div",{className:"flex-1",children:s.jsxs("h1",{children:[s.jsx("span",{className:"font-semibold mr-0.5",children:"Pré-orçamento: R$"}),k(l!=null&&l.valorcamento?l==null?void 0:l.valorcamento:"0")]})})]}),s.jsx("div",{className:"flex items-start justify-start w-full",children:s.jsxs("h1",{children:[s.jsx("span",{className:"font-semibold mr-1",children:"Estado do equipamento:"}),l==null?void 0:l.estado]})})]}),s.jsxs("div",{className:"flex flex-col items-start justify-start pb-2 border border-gray-200 mt-4 p-2",children:[s.jsx("div",{className:"mb-1 flex items-center justify-center w-full",children:s.jsx("h1",{className:"border-b w-full border-gray-100 uppercase font-semibold text-center",children:"Garantias e/ou observações"})}),s.jsx("div",{className:"flex items-start justify-start w-full",children:s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"mb-1",children:t=="4"?s.jsx("p",{dangerouslySetInnerHTML:{__html:`${a?a.entrega:""}`}}):s.jsx("p",{dangerouslySetInnerHTML:{__html:`${a||""}`}})}),s.jsx("div",{children:l==null?void 0:l.obs})]})})]}),t=="4"&&s.jsxs("div",{className:"p-2",children:[s.jsx("div",{className:"mb-1 flex items-center justify-center w-full",children:s.jsx("h1",{className:"border-b w-full border-gray-100 uppercase font-semibold text-center mt-8",children:"Checklist"})}),s.jsxs("div",{className:"bg-gray-100 border rounded-md grid grid-cols-2 py-4 px-8 gap-2",children:[l.equipamento==="Mobile"&&s.jsx(e,{tipo:b}),l.equipamento==="Notebook"&&s.jsx(e,{tipo:d}),l.equipamento==="PC"&&s.jsx(e,{tipo:N}),l.equipamento!="Mobile"&&l.equipamento!="Notebook"&&l.equipamento!="PC"&&s.jsx(e,{tipo:o})]})]}),t!=="1"&&s.jsxs("div",{className:"flex flex-col items-start justify-start border border-gray-200 mt-4 py-0.5 px-0.5",children:[s.jsx("div",{className:"mb-1 flex items-center justify-center w-full",children:s.jsx("h1",{className:"font-semibold",children:(l==null?void 0:l.status)==3?"Orçamento":"Serviços prestados"})}),s.jsx("div",{className:`${(l==null?void 0:l.status)==3?"":"border-b"} w-full`,children:(l==null?void 0:l.status)==3?l==null?void 0:l.descorcamento:l==null?void 0:l.detalhes}),(l==null?void 0:l.status)===8&&s.jsxs("div",{className:"flex items-start justify-between w-full bg-gray-200 px-2",children:[s.jsxs("div",{children:[s.jsx("span",{className:"mr-2",children:"Valor dos serviços:"}),s.jsx("span",{className:"font-semibold",children:(l!=null&&l.valservico?Number(l==null?void 0:l.valservico):0).toLocaleString("pt-br",{style:"currency",currency:"BRL"})})]}),s.jsxs("div",{children:[s.jsx("span",{className:"mr-2",children:"Valor de peças/produtos:"}),s.jsx("span",{className:"font-semibold",children:(l!=null&&l.valpecas?Number(l==null?void 0:l.valpecas):0).toLocaleString("pt-br",{style:"currency",currency:"BRL"})})]}),s.jsxs("div",{children:[s.jsx("span",{className:"mr-2",children:"Valor total:"}),s.jsx("span",{className:"font-semibold",children:(Number(l==null?void 0:l.valservico)+Number(l==null?void 0:l.valpecas)).toLocaleString("pt-br",{style:"currency",currency:"BRL"})})]})]})]}),s.jsxs("div",{className:"flex items-center justify-around mt-8",children:[s.jsx("div",{className:"w-80 border-t border-gray-400 text-center",children:"Assinatura Cliente"}),t!=="1"&&t!=="4"?s.jsx("div",{className:"w-80 border-t border-gray-400 text-center",children:"Assinatura Responsável Técnico"}):t=="4"?s.jsxs("p",{children:[c==null?void 0:c.cidade," ",s.jsx("span",{className:"ml-2 text-base",children:"__/__/____"})]}):s.jsx("div",{className:"w-80"})]}),t!=="4"&&s.jsx("div",{className:"mt-4 mb-2 ml-8",children:s.jsxs("p",{className:"",children:[c==null?void 0:c.cidade,", ",f().locale("pt").format("LL"),"."]})}),u&&t=="1"&&s.jsxs("div",{className:"flex-auto pr-8 flex flex-col items-end justify-end absolute right-0 -bottom-16",children:[s.jsxs("p",{className:"text-center",children:["Acompanhe o status de  sua ordem de serviço em  ",s.jsx("br",{}),"https://eplusteutonia.com.br/login ",s.jsx("br",{}),"Usuário: CPF/CNPJ - senha: 12345"]}),s.jsx("div",{className:"w-full flex justify-end pr-16",children:s.jsx("img",{className:"w-24",src:"/storage/images/qrcodeeplus.jpeg",alt:"QRCode Eplus"})})]})]})]})};export{q as default};
