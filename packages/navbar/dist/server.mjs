import { d, a } from './chunk-MIGENICT.mjs';
import s from 'qs';

function p(t=""){return `${process.env.NEXT_PUBLIC_STRAPI_API_URL||"http://localhost:1337"}${t}`}function c(){return d(this,arguments,function*(t={},l={}){let n=a({headers:{"Content-Type":"application/json"}},t),e=s.stringify({populate:{variant1:{populate:["tile","subTiles"]},variant2:{populate:["components"]},variant3:{populate:["*"]},brandLogo:{populate:["*"]}}},{encodeValuesOnly:!0}),o=`${p(`/api/nav-datas${e?`?${e}`:""}`)}`,a$1=yield fetch(o,n);if(!a$1.ok)throw console.error(a$1.statusText),new Error("An error occured please try again");return (yield a$1.json()).data[0].attributes})}

export { c as fetchNavData, p as getStrapiURL };
