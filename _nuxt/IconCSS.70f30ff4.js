import{d as l,J as m,z as _,c as o,k as f,l as d,E as z,_ as x}from"./entry.0b6ca3ae.js";const S=l({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(r){const n=r;m(e=>({"17e81e26":u.value}));const s=_(),p=o(()=>{var e;return((((e=s.nuxtIcon)==null?void 0:e.aliases)||{})[n.name]||n.name).replace(/^i-/,"")}),u=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),a=o(()=>{var t,c,i;if(!n.size&&typeof((t=s.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((c=s.nuxtIcon)!=null&&c.size))return;const e=n.size||((i=s.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,t)=>(f(),d("span",{style:z({width:a.value,height:a.value})},null,4))}}),g="",v=x(S,[["styles",[g]],["__scopeId","data-v-2717c442"]]);export{v as default};
