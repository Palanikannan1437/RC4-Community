'use strict';

var chunkOWCFWPAL_js = require('./chunk-OWCFWPAL.js');
var s = require('qs');

function p(t=""){return `${process.env.NEXT_PUBLIC_STRAPI_API_URL||"http://localhost:1337"}${t}`}function c(){return chunkOWCFWPAL_js.d(this,arguments,function*(t={},l={}){let n=chunkOWCFWPAL_js.a({headers:{"Content-Type":"application/json"}},t),e=s.stringify({populate:{variant1:{populate:["tile","subTiles"]},variant2:{populate:["components"]},variant3:{populate:["*"]},brandLogo:{populate:["*"]}}},{encodeValuesOnly:!0}),o=`${p(`/api/nav-datas${e?`?${e}`:""}`)}`,a=yield fetch(o,n);if(!a.ok)throw console.error(a.statusText),new Error("An error occured please try again");return (yield a.json()).data[0].attributes})}

exports.fetchNavData = c;
exports.getStrapiURL = p;
