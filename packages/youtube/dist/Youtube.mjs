"use client";var l=(n,s,e)=>new Promise((a,r)=>{var i=t=>{try{o(e.next(t))}catch(c){r(c)}},d=t=>{try{o(e.throw(t))}catch(c){r(c)}},o=t=>t.done?a(t.value):Promise.resolve(t.value).then(i,d);o((e=e.apply(n,s)).next())});import g,{useEffect as D,useState as V}from"react";import p from"react";var y=({videoId:n,width:s,height:e})=>{let a=`https://www.youtube.com/embed/${n}`;return p.createElement("div",{className:"bg-white p-4 rounded shadow-md w-full"},p.createElement("div",{className:"aspect-w-16 aspect-h-9"},p.createElement("iframe",{width:s,height:e,src:a,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))},m=y;var I=(n,s)=>l(void 0,null,function*(){let e=[];try{let d=yield(yield fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${n}&maxResults=50&key=${s}`)).json(),{items:o}=d;e=o.map(t=>({videoId:t.contentDetails.videoId,videoPublishedAt:t.contentDetails.videoPublishedAt}))}catch(i){return console.log(i),[]}let a=e.map(i=>l(void 0,null,function*(){let d=i.videoId;try{let t=yield(yield fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${d}&key=${s}`)).json(),{items:c}=t;return c[0]}catch(o){return console.log(o),null}}));return(yield Promise.all(a)).filter(i=>i!==null)}),f=I;var b=n=>l(void 0,null,function*(){let s=n.sort((e,a)=>{let r=parseInt(e.statistics.viewCount,10);return parseInt(a.statistics.viewCount,10)-r});return console.log(s),s}),h=b;var P=({playlistId:n,height:s,width:e,title:a,API_Key:r,count:i,sort:d})=>{let[o,t]=V([]);D(()=>{(()=>l(void 0,null,function*(){let v=yield f(n,r);if(t(v),d){let w=yield h(v);t(w)}}))()},[n,r,d]);let c=i?o.slice(0,i):o;return g.createElement("div",{className:"container mx-auto p-8"},g.createElement("h1",{className:"text-3xl mb-6 text-center text-white"},a),g.createElement("div",{className:"space-y-10"},c.map(u=>g.createElement(m,{key:u.id,videoId:u.id,width:e,height:s}))))},B=P;export{B as default};
