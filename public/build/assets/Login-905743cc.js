import{q as k,r as a,W as I,j as e,b as z,d as L}from"./app-39d32580.js";import{G as O,C as P,a as T}from"./index.esm-82fdef20.js";import{I as $,a as q,b as A,c as D}from"./index.esm-2158556a.js";import"./moment-fbc5633a.js";function B({status:l,canResetPassword:p}){var x,u,f,g,j,h,b;const{confemp:i,confger:t,userexist:w}=k().props,[o,v]=a.useState(!1),[n,N]=a.useState(!1),[y,d]=a.useState(!1),{data:c,setData:m,post:S,processing:C,errors:r,reset:E}=I({email:"",password:"",remember:!1});a.useEffect(()=>()=>{E("password")},[]);const F=s=>{s.preventDefault(),d(!0),setTimeout(()=>{d(!1)},200),S(route("login"))};return e.jsxs(O,{children:[e.jsx(z,{title:"Acesso ao Sistema"}),l&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:l}),e.jsx("div",{className:"fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center",style:{backgroundColor:(x=t[0])!=null&&x.bgcolor?(u=t[0])==null?void 0:u.bgcolor:"#0161a0",backgroundImage:`url("/storage/images/${(f=t[0])!=null&&f.bgimage?(g=t[0])==null?void 0:g.bgimage:""}")`,backgroundSize:"cover"},children:e.jsxs("div",{className:"w-full sm:max-w-md mx-4 p-4 bg-gradient-to-t from-gray-300 via-white to-gray-200 shadow-md overflow-hidden rounded-md border border-white",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center mb-10",children:[e.jsxs("div",{className:"flex items-start justify-between mb-6 border-b border-gray-300 w-full",children:[e.jsx("h1",{className:"text-sm font-medium text-gray-500",children:"Faça login em sua conta"}),e.jsx("span",{className:"text-sm font-medium text-gray-500",children:e.jsx(P,{})})]}),e.jsx("div",{className:"w-32 flex items-center justify-center",children:e.jsx("img",{src:`/storage/images/${(j=i[0])!=null&&j.logo?(h=i[0])==null?void 0:h.logo:"default.png"}`,alt:`${(b=i[0])==null?void 0:b.empresa}`,className:""})})]}),e.jsxs("form",{onSubmit:F,children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"email",className:"label-form",children:"E-mail"}),e.jsxs("div",{className:"relative flex items-center justify-between",children:[e.jsx("input",{id:"email",type:"text",value:c.email,onChange:s=>m("email",s.target.value),className:"input-form w-full"}),e.jsx("div",{className:"absolute right-1",children:e.jsx($,{size:22,color:"#4b5563"})})]}),r.email&&e.jsx("div",{className:"text-red-500 text-sm",children:r.email})]}),e.jsxs("div",{className:"mt-4 flex flex-col",children:[e.jsx("label",{htmlFor:"password",className:"label-form",children:"Senha"}),e.jsxs("div",{className:"relative flex items-center justify-between",children:[e.jsx("input",{id:"password",type:o?"text":"password",name:"password",value:c.password,className:"input-form w-full",onChange:s=>m("password",s.target.value)}),e.jsx("div",{className:"absolute right-1 cursor-pointer",onClick:()=>v(!o),children:o?e.jsx(q,{size:22,color:"#4b5563"}):e.jsx(A,{size:22,color:"#4b5563"})})]}),r.password&&e.jsx("div",{className:"text-red-500 text-sm",children:r.password})]}),e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx("div",{children:!w[0]&&e.jsx(L,{href:route("register"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Registrar administrador"})}),e.jsx("div",{children:p&&e.jsx("span",{onClick:()=>N(!n),className:"cursor-pointer underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Esqueceu sua senha?"})})]}),n&&e.jsx("div",{className:"bg-yellow-100 border border-red-200 rounded p-2 mt-4",children:e.jsx("p",{className:"text-xs text-center text-red-500",children:"Solicite uma nova senha ao administrador do sistema"})}),e.jsx("div",{className:"flex items-center justify-between mt-8",children:e.jsx("button",{className:"btn-login",disabled:C,children:y?e.jsx(T,{size:24}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex-1",children:"Entrar"}),e.jsx(D,{})]})})})]})]})})]})}export{B as default};
