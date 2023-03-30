'use strict';

var chunkOWCFWPAL_js = require('./chunk-OWCFWPAL.js');
var u = require('react');
var i = require('@radix-ui/react-navigation-menu');
var classVarianceAuthority = require('class-variance-authority');
var lucideReact = require('lucide-react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var E = require('next/link');

function _interopNamespaceDefault(e) {
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var u__namespace = /*#__PURE__*/_interopNamespaceDefault(u);
var i__namespace = /*#__PURE__*/_interopNamespaceDefault(i);

function s(...o){return tailwindMerge.twMerge(clsx.clsx(o))}var h=u__namespace.forwardRef((t,a)=>{var f=t,{className:o,children:n}=f,r=chunkOWCFWPAL_js.c(f,["className","children"]);return jsxRuntime.jsxs(i__namespace.Root,chunkOWCFWPAL_js.b(chunkOWCFWPAL_js.a({ref:a,className:s("relative z-10 flex flex-1 items-center justify-center",o)},r),{children:[n,jsxRuntime.jsx(b,{})]}))});h.displayName=i__namespace.Root.displayName;var x=u__namespace.forwardRef((a,r)=>{var t=a,{className:o}=t,n=chunkOWCFWPAL_js.c(t,["className"]);return jsxRuntime.jsx(i__namespace.List,chunkOWCFWPAL_js.a({ref:r,className:s("group flex flex-1 list-none items-center justify-center",o)},n))});x.displayName=i__namespace.List.displayName;var v=i__namespace.Item,w=classVarianceAuthority.cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-slate-100 disabled:opacity-50 dark:focus:bg-slate-800 disabled:pointer-events-none bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-slate-50 dark:data-[state=open]:bg-slate-800 data-[active]:bg-slate-50 dark:data-[active]:bg-slate-800 h-10 py-2 px-4 group w-max"),c=u__namespace.forwardRef((t,a)=>{var f=t,{className:o,children:n}=f,r=chunkOWCFWPAL_js.c(f,["className","children"]);return jsxRuntime.jsxs(i__namespace.Trigger,chunkOWCFWPAL_js.b(chunkOWCFWPAL_js.a({ref:a,className:s(w(),"group",o)},r),{children:[n," ",jsxRuntime.jsx(lucideReact.ChevronDown,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180","aria-hidden":"true"})]}))});c.displayName=i__namespace.Trigger.displayName;var N=u__namespace.forwardRef((a,r)=>{var t=a,{className:o}=t,n=chunkOWCFWPAL_js.c(t,["className"]);return jsxRuntime.jsx(i__namespace.Content,chunkOWCFWPAL_js.a({ref:r,className:s("top-0 left-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=to-start]:slide-out-to-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-end]:slide-in-from-right-52 md:absolute md:w-auto ",o)},n))});N.displayName=i__namespace.Content.displayName;var M=i__namespace.Link,b=u__namespace.forwardRef((a,r)=>{var t=a,{className:o}=t,n=chunkOWCFWPAL_js.c(t,["className"]);return jsxRuntime.jsx("div",{className:s("absolute left-0 top-full flex justify-center"),children:jsxRuntime.jsx(i__namespace.Viewport,chunkOWCFWPAL_js.a({className:s("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-90 data-[state=closed]:zoom-out-95 dark:border-slate-700 dark:bg-slate-800 md:w-[var(--radix-navigation-menu-viewport-width)]",o),ref:r},n))})});b.displayName=i__namespace.Viewport.displayName;var j=u__namespace.forwardRef((a,r)=>{var t=a,{className:o}=t,n=chunkOWCFWPAL_js.c(t,["className"]);return jsxRuntime.jsx(i__namespace.Indicator,chunkOWCFWPAL_js.b(chunkOWCFWPAL_js.a({ref:r,className:s("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=visible]:fade-in data-[state=hidden]:fade-out",o)},n),{children:jsxRuntime.jsx("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md dark:bg-slate-800"})}))});j.displayName=i__namespace.Indicator.displayName;var U=({components:o,navData:n,final:r})=>jsxRuntime.jsx("header",{className:"body-font text-gray-600",children:jsxRuntime.jsxs("div",{className:"container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row",children:[jsxRuntime.jsxs("a",{className:"title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0",children:[jsxRuntime.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"h-10 w-10 rounded-full bg-indigo-500 p-2 text-white",viewBox:"0 0 24 24",children:jsxRuntime.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),jsxRuntime.jsx("span",{className:"ml-3 text-xl",children:n.brandLogo.logoText})]}),jsxRuntime.jsx("nav",{className:"flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto",children:jsxRuntime.jsx(h,{children:jsxRuntime.jsx(x,{children:r.map(a=>{if(a.type==="variant1")return jsxRuntime.jsxs(v,{children:[jsxRuntime.jsx(c,{children:a.title}),jsxRuntime.jsx(N,{children:jsxRuntime.jsxs("ul",{className:"grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",children:[jsxRuntime.jsx("li",{className:"row-span-3",children:jsxRuntime.jsx(M,{asChild:!0,children:jsxRuntime.jsxs("a",{className:"flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md",href:"/",children:[jsxRuntime.jsx("div",{className:"mt-4 mb-2 text-lg font-medium text-white",children:a.tile.text}),jsxRuntime.jsx("p",{className:"text-sm leading-tight text-white/90",children:a.tile.description})]})})}),a.subTiles.map(t=>jsxRuntime.jsx(y,{href:t.href,title:t.title,children:t.description}))]})})]});if(a.type==="variant2")return jsxRuntime.jsxs(v,{children:[jsxRuntime.jsx(c,{children:a.title}),jsxRuntime.jsx(N,{children:jsxRuntime.jsx("ul",{className:"grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ",children:a.components.map(t=>jsxRuntime.jsx(y,{title:t.attributes.title,href:t.attributes.href,children:t.attributes.description},t.id))})})]});if(a.type==="variant3")return jsxRuntime.jsx(v,{children:jsxRuntime.jsx(E,{href:a.href,legacyBehavior:!0,passHref:!0,children:jsxRuntime.jsx(M,{className:w(),children:a.title})})})})})})})]})}),y=u.forwardRef((f,t)=>{var R=f,{className:o,title:n,children:r}=R,a=chunkOWCFWPAL_js.c(R,["className","title","children"]);return jsxRuntime.jsx("li",{children:jsxRuntime.jsx(M,{asChild:!0,children:jsxRuntime.jsxs("a",chunkOWCFWPAL_js.b(chunkOWCFWPAL_js.a({ref:t,className:s("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",o)},a),{children:[jsxRuntime.jsx("div",{className:"text-sm font-medium leading-none",children:n}),jsxRuntime.jsx("p",{className:"line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400",children:r})]}))})})});y.displayName="ListItem";

exports.NavDemo = U;
exports.NavigationMenu = h;
exports.NavigationMenuContent = N;
exports.NavigationMenuIndicator = j;
exports.NavigationMenuItem = v;
exports.NavigationMenuLink = M;
exports.NavigationMenuList = x;
exports.NavigationMenuTrigger = c;
exports.NavigationMenuViewport = b;
exports.navigationMenuTriggerStyle = w;
