import{W as m,j as e,b as a}from"./app-6d7fd69c.js";import{x as j,G as n}from"./index.esm-7432d296.js";const v=({placeholder:t,url:r,date:s})=>{const{data:l,setData:h,post:p,get:d,processing:g,errors:y}=m({q:""});function f(i){i.preventDefault(),d(route(r))}return e.jsx("div",{className:" w-96 border border-gray-300 rounded-md pl-2 py-1",children:e.jsxs("form",{onSubmit:f,className:"flex items-center justify-between",children:[e.jsx("div",{className:"w-full",children:e.jsx("input",{name:"search",value:l.q,onChange:i=>h("q",i.target.value),className:"w-full p-1 ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none text-gray-500 placeholder:text-gray-400",type:s?"date":"search",placeholder:t,autoComplete:"off"})}),e.jsx("button",{type:"submit",disabled:g,children:e.jsx("div",{className:"mx-2 text-gray-500",children:e.jsx(j,{size:20})})})]})})};function o(t){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.83594 12.0001L11.043 18.2072L12.4573 16.793L7.66436 12.0001L12.4573 7.20718L11.043 5.79297L4.83594 12.0001ZM10.4858 12.0001L16.6929 18.2072L18.1072 16.793L13.3143 12.0001L18.1072 7.20718L16.6929 5.79297L10.4858 12.0001Z"}}]})(t)}function x(t){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"}}]})(t)}function c(t){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.1643 12.0001L12.9572 5.79297L11.543 7.20718L16.3359 12.0001L11.543 16.793L12.9572 18.2072L19.1643 12.0001ZM13.5144 12.0001L7.30728 5.79297L5.89307 7.20718L10.686 12.0001L5.89307 16.793L7.30728 18.2072L13.5144 12.0001Z"}}]})(t)}function u(t){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"}}]})(t)}const w=({data:t})=>{const r=[...t.links];return r.shift(),r.pop(),e.jsxs("ul",{className:"flex items-center justify-center py-2 gap-2",children:[e.jsx("li",{children:t.prev_page_url!==null?e.jsx(a,{className:"flex items-center jus h-10 w-10 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-600 duration-300 rounded-full",href:t.first_page_url,children:e.jsx(x,{size:16})}):e.jsx("span",{className:"flex items-center jus h-10 w-10 text-sm text-gray-300",children:e.jsx(x,{size:16})})}),e.jsx("li",{children:t.prev_page_url!==null?e.jsx(a,{className:"flex items-center justify-center h-10 w-10 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-600 duration-300 rounded-full",href:t.prev_page_url,children:e.jsx(o,{size:16})}):e.jsx("span",{className:"flex items-center justify-center h-10 w-10 text-sm text-gray-300",children:e.jsx(o,{size:16})})}),r.map((s,l)=>e.jsx("li",{children:e.jsx(a,{className:`flex items-center justify-center h-10 w-10 text-sm ${s.active?"text-gray-50 bg-blue-700 border-2 border-gray-50 shadow":"text-gray-500 hover:bg-gray-100 hover:text-gray-600"} duration-300 rounded-full`,href:s.url,children:s.label})},l)),e.jsx("li",{children:t.next_page_url!==null?e.jsx(a,{className:"flex items-center justify-center h-10 w-10 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-600 duration-300 rounded-full",href:t.next_page_url,children:e.jsx(c,{size:16})}):e.jsx("span",{className:"flex items-center justify-center h-10 w-10 text-sm text-gray-300 duration-300",children:e.jsx(c,{size:16})})}),e.jsx("li",{children:t.next_page_url!==null?e.jsx(a,{className:"flex items-center justify-center h-10 w-10 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-600 duration-300 rounded-full",href:t.last_page_url,children:e.jsx(u,{size:16})}):e.jsx("span",{className:"flex items-center justify-center h-10 w-10 text-sm text-gray-300 duration-300",children:e.jsx(u,{size:16})})})]})},N=({children:t,className:r})=>e.jsx("table",{className:`table-fixed w-full ${r} text-sm`,children:t}),_=({children:t})=>e.jsx("thead",{children:t}),z=({children:t})=>e.jsx("tbody",{children:t}),R=({children:t,className:r,key:s})=>e.jsx("tr",{className:`${r}`,children:t},s),T=({children:t,className:r})=>e.jsx("th",{className:`text-left py-3 px-2 bg-gray-200 text-gray-600 ${r}`,children:t}),M=({children:t,className:r})=>e.jsx("td",{className:`border-b py-2 px-2 text-gray-500 !whitespace-nowrap ${r}`,children:t});export{v as I,w as P,N as T,_ as a,R as b,T as c,z as d,M as e};