'use strict';

var chunkOWCFWPAL_js = require('./chunk-OWCFWPAL.js');
var p = require('qs');

function g(t=""){return `${process.env.NEXT_PUBLIC_STRAPI_API_URL||"http://localhost:1337"}${t}`}function d(){return chunkOWCFWPAL_js.d(this,arguments,function*(t={},o={}){let s=chunkOWCFWPAL_js.a({headers:{"Content-Type":"application/json"}},t),e=p.stringify(o),a=`${g(`/api/navs${e?`?${e}`:""}`)}`,r=yield fetch(a,s);if(!r.ok)throw console.error(r.statusText),new Error("An error occured please try again");return (yield r.json()).data})}

exports.fetchNavData = d;
exports.getStrapiURL = g;
