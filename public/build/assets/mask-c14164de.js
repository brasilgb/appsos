function n(r){if(r)return r=r.replace(/\D/g,""),r=r.replace(/^(\d{5})(\d)/,"$1-$2"),r}function $(r){if(r)return r.length<11?(r=r.replace(/\D/g,""),r=r.replace(/^(\d{2})(\d{4})(\d{4})/,"($1) $2-$3"),r):(r=r.replace(/\D/g,""),r=r.replace(/^(\d{2})(\d{5})(\d{4})/,"($1) $2-$3"),r)}function c(r){if(r)return r=r.replace(/\D/g,""),r=r.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})/,"$1$2$3$4"),r}function p(r){return r.length<12?(r=r.replace(/\D/g,""),r=r.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4"),r):(r=r.replace(/\D/g,""),r=r.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5"),r)}function t(r){if(r)return r=r.replace(/\D/g,""),r=r.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5"),r}function e(r){if(r)return r=r.replace(/\D/g,""),r}function s(r){var d=r;return d=d.replace(/\D/g,""),d=d.replace(/(\d+)(\d{2})$/,"$1,$2"),d=d.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1."),d=d,r=d}function f(r){var d=r;return d=d.replace(/\D/g,""),d=d.replace(/(\d+)(\d{2})$/,"$1.$2"),d=d,r=d}export{n as a,$ as b,t as c,s as d,f as e,c as f,p as m,e as u};