import { d as d$1, a } from './chunk-MIGENICT.mjs';
import p from 'qs';

function g(t=""){return `${process.env.NEXT_PUBLIC_STRAPI_API_URL||"http://localhost:1337"}${t}`}function d(){return d$1(this,arguments,function*(t={},o={}){let s=a({headers:{"Content-Type":"application/json"}},t),e=p.stringify(o),a$1=`${g(`/api/navs${e?`?${e}`:""}`)}`,r=yield fetch(a$1,s);if(!r.ok)throw console.error(r.statusText),new Error("An error occured please try again");return (yield r.json()).data})}

export { d as fetchNavData, g as getStrapiURL };
