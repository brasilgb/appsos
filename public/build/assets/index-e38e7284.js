import{j as e,b as n,u as y,r as f,W as D,Y as S}from"./app-cdb7fc5d.js";import{b as v,A,H as I,T as k,c as $}from"./AuthLayout-5b6a2269.js";import{i as E,j as F,k as M,l as O,m as V,n as L,e as T,o as b}from"./index.esm-821338e0.js";import"./moment-a9aaa855.js";const h=({props:l})=>e.jsx(n,{href:l.url,children:e.jsxs("div",{className:"bg-gray-50 border border-white rounded shadow p-5 flex items-center justify-between hover:shadow-md",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-base text-gray-400",children:l==null?void 0:l.title}),e.jsx("h1",{className:"text-2xl font-bold text-gray-600 ",children:l==null?void 0:l.value})]}),e.jsx("div",{className:"flex items-center justify-center",children:l.icon})]})}),H=({produtos:l})=>{const{showModalPDV:a,setShowModalPDV:u,sendOrderParts:p,setSendOrderParts:g}=y(),[c,o]=f.useState([]),[t,m]=f.useState([]),{data:s,setData:d}=D({pecas:"",quantidade:"",valor:""}),N=r=>{const i=r.toLowerCase(),j=l.filter(x=>x.descricao.toLowerCase().includes(i));o(j)};f.useEffect(()=>{s.pecas===""&&o([])},[s]);const w=(r,i,j)=>{let x={id:r,descricao:i,valvenda:j};m([...t,x]),d(P=>({...P,pecas:""})),o([])},C=r=>{const i=t.filter((j,x)=>x!==r);m(i)},z=()=>{g(t),u(!1)};return e.jsx(e.Fragment,{children:a&&e.jsx("div",{className:"fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-800/90 z-40",children:e.jsxs("div",{className:"w-full sm:max-w-md mx-4 bg-gradient-to-t from-gray-300 via-white to-gray-200 shadow-md overflow-hidden rounded-md border border-white text-gray-600",children:[e.jsxs("div",{className:"h-8 flex items-center justify-between border-b px-2 bg-blue-cinco text-white rounded-t-lg",children:[e.jsx(v,{size:18}),e.jsx("h1",{className:"ml-2 flex-1 text-sm font-semibold",children:"Adicione peças/produtos a ordem"}),e.jsx("div",{className:"cursor-pointer",children:e.jsx(E,{size:20,onClick:()=>u(!1)})})]}),e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"flex flex-col col-span-2 relative",children:[e.jsx("label",{className:"label-form",htmlFor:"pecas",children:"Buscar Peça"}),e.jsx("input",{id:"pecas",type:"text",value:s.pecas,onChange:r=>{d("pecas",r.target.value),N(r.target.value)},className:"input-form"}),c.length>0&&e.jsx("div",{className:"absolute bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16 max-h-52 overflow-y-auto",children:e.jsx("ul",{className:"p-1",children:c.map((r,i)=>e.jsx("li",{className:`flex items-center justify-normal ${i<c.length-1?"border-b border-gray-200":""}`,children:e.jsx("div",{className:"text-sm text-gray-600 p-1 cursor-pointer inline-block w-full",onClick:()=>w(r.id,r.descricao,r.valvenda),children:r.descricao})},i))})})]}),t.length>0&&e.jsx("div",{className:"mt-4 p-2 border border-gray-300 rounded-md",children:t.map((r,i)=>e.jsxs("div",{className:`py-1 grid grid-cols-4 ${t.length-1==i?"":"border-b border-b-gray-300"}`,children:[e.jsx("div",{children:r.descricao}),e.jsx("div",{children:r.valvenda}),e.jsx("div",{children:e.jsx("button",{type:"button",onClick:()=>C(i),className:"bg-red-500 rounded text-white p-1",children:e.jsx(F,{})})})]},i))}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsxs("button",{onClick:z,className:"flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 py-1.5 px-3 rounded-md shadow text-gray-50 self-end",children:[e.jsx(v,{size:18}),e.jsx("span",{children:"Inserir peças"})]})})]})]})})})},W=({dashdata:l,statusorder:a})=>{var g,c,o,t,m;const{setShowModalPDV:u,showModalPDV:p}=y();return e.jsxs(e.Fragment,{children:[e.jsx(H,{produtos:p}),e.jsxs(A,{children:[e.jsx(S,{title:"Dashboard"}),e.jsxs("div",{className:"flex-col w-full md:p-4",children:[e.jsx(I,{children:e.jsxs(k,{children:[e.jsx($,{size:30}),e.jsx("span",{className:"ml-2",children:"Dashboard"})]})}),e.jsxs("div",{className:"grid md:md:grid-cols-5 sm:grid-cols-2 gap-6",children:[e.jsx(h,{props:{title:"Clientes",value:l.numcli,url:"/clientes",icon:e.jsx(M,{size:50,color:"#2671e2"})}}),e.jsx(h,{props:{title:"Ordens",value:l.numord,url:"/ordens",icon:e.jsx(O,{size:50,color:"#CA0156"})}}),e.jsx(h,{props:{title:"Produtos",value:l.numpro,url:"/produtos",icon:e.jsx(V,{size:50,color:"#EEA917"})}}),e.jsx(h,{props:{title:"Agendamentos",value:l.numage,url:"/agendas",icon:e.jsx(L,{size:50,color:"#0D9488"})}}),e.jsx(h,{props:{title:"Mensagens",value:l.nummen,url:"/mensagens",icon:e.jsx(T,{size:50,color:"#3FA1D4"})}})]}),e.jsxs("div",{className:"grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-4",children:[e.jsxs("div",{className:"bg-gray-50 rounded shadow-sm p-2",children:[e.jsxs("div",{className:"border-b mb-2 text-gray-500 flex items-center justify-start gap-1",children:[e.jsx(b,{size:20}),e.jsx("h1",{className:"text-sm uppercase font-medium",children:"Orçamentos gerados"})]}),e.jsx("div",{className:"grid md:grid-cols-5 gap-2 text-center max-h-96 overflow-y-auto",children:(g=a==null?void 0:a.gerados)==null?void 0:g.map((s,d)=>e.jsx(n,{href:`ordens/${s.id}`,className:"bg-rose-600 hover:bg-rose-600/90 text-sm font-medium text-gray-50 rounded shadow border-2 border-gray-50 py-1",children:s.id},d))})]}),e.jsxs("div",{className:"bg-gray-50 rounded shadow-sm p-2",children:[e.jsxs("div",{className:"border-b mb-2 text-gray-500 flex items-center justify-start gap-1",children:[e.jsx(b,{size:20}),e.jsx("h1",{className:"text-sm uppercase font-medium",children:"Orçamentos aprovados"})]}),e.jsx("div",{className:"grid md:grid-cols-5 gap-2 text-center max-h-96 overflow-y-auto",children:(c=a==null?void 0:a.aprovados)==null?void 0:c.map((s,d)=>e.jsx(n,{href:`ordens/${s.id}`,className:"bg-blue-500 hover:bg-blue-500/90 text-sm font-medium text-gray-50 rounded shadow border-2 border-gray-50 py-1",children:s.id},d))})]}),e.jsxs("div",{className:"bg-gray-50 rounded shadow-sm p-2",children:[e.jsxs("div",{className:"border-b mb-2 text-gray-500 flex items-center justify-start gap-1",children:[e.jsx(b,{size:20}),e.jsxs("h1",{className:"text-sm uppercase font-medium",children:["Serviços concluídos ",e.jsx("span",{className:"text-cyan-600",children:"(CA)"})," ",e.jsx("span",{className:"text-amber-500",children:"(CN)"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-5 gap-2 text-center max-h-96 overflow-y-auto",children:[(o=a==null?void 0:a.concluidosca)==null?void 0:o.map((s,d)=>e.jsx(n,{href:`ordens/${s.id}`,className:"bg-cyan-600 hover:bg-cyan-600/90 text-sm font-medium text-gray-50 rounded shadow border-2 border-gray-50 py-1",children:s.id},d)),(t=a==null?void 0:a.concluidoscn)==null?void 0:t.map((s,d)=>e.jsx(n,{href:`ordens/${s.id}`,className:"bg-amber-500 hover:bg-amber-500/90 text-sm font-medium text-gray-50 rounded shadow border-2 border-gray-50 py-1",children:s.id},d))]})]}),e.jsxs("div",{className:"bg-gray-50 rounded shadow-sm p-2",children:[e.jsxs("div",{className:"border-b mb-2 text-gray-500 flex items-center justify-start gap-1",children:[e.jsx(b,{size:20}),e.jsx("h1",{className:"text-sm uppercase font-medium",children:"Visitas agendadas"})]}),e.jsx("div",{className:"grid md:grid-cols-5 gap-2 text-center max-h-96 overflow-y-auto",children:(m=a==null?void 0:a.agendados)==null?void 0:m.map((s,d)=>e.jsx(n,{href:`agendas/${s.id}`,className:"bg-rose-600 hover:bg-rose-600/90 text-sm font-medium text-gray-50 rounded shadow border-2 border-gray-50 py-1",children:s.id},d))})]})]})]})]})]})};export{W as default};
