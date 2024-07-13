import{r as f,W as b,j as e,Y as N}from"./app-8560f7f4.js";import{B as y,S as v}from"./index-4c74b095.js";import{C,a as w,b as I,c,d as k,e as S}from"./index-29173369.js";import{A as z,H as B,T as _,B as T}from"./AuthLayout-09b960ac.js";import{p as $,q as A,j as D,i as H}from"./index.esm-46e23204.js";import"./moment-a9aaa855.js";const P=({imagens:m,ordem:a})=>{var n;const[l,i]=f.useState(null),{data:r,setData:o,post:x,delete:h,errors:d}=b({ordem_id:a,imagem:null});function j(s){s.preventDefault(),x(route("imagens.store"))}function g(s,t){s.preventDefault(),h(route("imagens.destroy",t))}const u=s=>{i(s)},p=()=>e.jsx("div",{onClick:()=>i(!1),className:"fixed z-50 top-0 right-0 bottom-0 left-0 bg-gray-700 bg-opacity-20 flex items-center justify-center",children:e.jsxs("div",{className:"w-auto bg-gray-50 border border-white rounded-md shadow-md p-2",children:[e.jsx("div",{className:"flex items-center justify-end mb-1",children:e.jsx("div",{className:"text-gray-600 cursor-pointer",children:e.jsx(H,{size:24})})}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("figure",{className:"max-w-lg",children:e.jsx("img",{className:"object-cover",src:`/storage/ordens/${a}/${l}`,alt:""})})})]})});return e.jsxs(z,{children:[e.jsx(N,{title:"Imagens"}),l&&e.jsx(p,{}),e.jsxs(C,{children:[e.jsxs(B,{children:[e.jsxs(_,{children:[e.jsx($,{size:30}),e.jsx("span",{className:"ml-2",children:"Imagens"})]}),e.jsx(T,{links:[{url:null,label:"Imagens"}]})]}),e.jsxs(w,{children:[e.jsxs(I,{children:[e.jsx(c,{children:e.jsx(y,{url:"/ordens",label:"Voltar"})}),e.jsx(c,{children:e.jsxs("h1",{className:"text-xl text-sky-700 font-bold",children:["Ordem N° #",("00000000"+a).slice(-8)]})})]}),e.jsxs("form",{onSubmit:j,children:[e.jsx(k,{className:"border-y border-gray-100",children:e.jsxs("div",{className:"p-3",children:[e.jsx("input",{id:"ordem_id",type:"text",value:r.ordem_id,onChange:s=>o("ordem_id",s.target.value),className:"hidden"}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs("label",{htmlFor:"dropzone-file",className:"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[e.jsx("svg",{className:"w-8 h-8 mb-4 text-gray-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16",children:e.jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})}),e.jsx("p",{className:"mb-2 text-sm text-gray-500",children:e.jsx("span",{className:"font-semibold",children:"Clique para fazer upload"})}),e.jsx("p",{className:"text-xs text-gray-500",children:"PNG ou JPG"}),e.jsxs("h1",{className:"text-lg mt-2 text-gray-500",children:["Arquivos selecionados"," ",r!=null&&r.imagem?(n=r==null?void 0:r.imagem)==null?void 0:n.length:"0"]})]}),e.jsx("input",{id:"dropzone-file",type:"file",onChange:s=>o("imagem",s.target.files),className:"hidden",multiple:!0,draggable:!0})]})}),e.jsx("div",{className:"mt-4",children:d.imagem&&e.jsx("div",{className:"text-sm text-red-500",children:d.imagem})}),e.jsx("div",{className:"grid grid-cols-8 gap-4 mt-8 md:container mx-auto",children:m.map(s=>e.jsxs("div",{className:"relative bg-gray-50 border border-gray-200 hover:opacity-70 shadow rounded-md",children:[e.jsxs("div",{className:"absolute flex items-center justify-between left-0.5 right-1 top-0.2",children:[e.jsx("div",{className:"text-blue-600 cursor-pointer",children:e.jsx(A,{size:20,onClick:()=>u(s.imagem)})}),e.jsx("div",{className:"text-red-600",children:e.jsx(D,{size:20,className:"cursor-pointer",onClick:t=>g(t,s.id)})})]}),e.jsx("div",{className:"p-2",children:e.jsx("figure",{className:"max-w-lg",children:e.jsx("img",{className:"object-fill h-48 w-96",src:`/storage/ordens/${s.ordem_id}/${s.imagem}`,alt:`Imagem ordem ${s.ordem_id}`})})})]}))})]})}),e.jsx(S,{children:e.jsx(v,{})})]})]})]})]})};export{P as default};
