(()=>{"use strict";var e,t={748:()=>{const e=window.wp.blocks,t=window.React,l=window.wp.blockEditor,c=window.wp.components,r=window.wp.i18n,i=JSON.parse('{"N9":"blockylicious/piccy-gallery","Et":"blockylicious"}'),n=window.wp.element,o=window.wp.data,a=e=>{const l=(c=e.imageId,(0,o.useSelect)((e=>e("core").getEntityRecord("postType","attachment",c)),[c]));var c;return l?.source_url?(0,t.createElement)("img",{style:{display:"block",width:"100%",height:e.height||150,objectFit:"cover"},onClick:e.onClick,src:l.source_url,className:e.className}):null};(0,e.registerBlockType)(i.N9,{edit:function(e){const s=(0,l.useBlockProps)(),d=(0,l.useInnerBlocksProps)({className:"piccy-gallery-inner-blocks"},{allowedBlocks:["blockylicious/piccy-image"]}),[m,u]=(0,n.useState)(!0),p=(0,o.useSelect)((t=>{const{getBlocksByClientId:l}=t("core/block-editor"),c=l(e.clientId)?.[0];return c?.innerBlocks}),[e.clientId]),[g,v]=(0,n.useState)({imageId:p?.[0]?.attributes?.imageId,blockId:p?.[0]?.clientId});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{...s},!!m&&(0,t.createElement)("div",{className:"edit-mode"},(0,t.createElement)("span",{className:"piccy-label"},(0,r.__)("Piccy image gallery",i.Et)),(0,t.createElement)("div",{...d})),!m&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"preview-mode"},p.map((e=>(0,t.createElement)(a,{key:e.clientId,imageId:e.attributes.imageId,height:75,onClick:()=>{v({imageId:e.attributes.imageId,blockId:e.clientId})},className:"thumb "+(e.clientId===g.blockId?"selected":"")})))),(0,t.createElement)("div",null,(0,t.createElement)(a,{imageId:g?.imageId,height:"initial"})))),(0,t.createElement)(l.BlockControls,null,(0,t.createElement)(c.ToolbarGroup,null,(0,t.createElement)(c.ToolbarButton,{icon:m?(0,t.createElement)(c.Icon,{icon:"welcome-view-site"}):(0,t.createElement)(c.Icon,{icon:"edit"}),label:m?(0,r.__)("Preview gallery",i.Et):(0,r.__)("Edit gallery",i.Et),onClick:()=>{u((e=>!e))}}))))},save:function(e){const t=l.useBlockProps.save();return l.useInnerBlocksProps.save(t).children}})}},l={};function c(e){var r=l[e];if(void 0!==r)return r.exports;var i=l[e]={exports:{}};return t[e](i,i.exports,c),i.exports}c.m=t,e=[],c.O=(t,l,r,i)=>{if(!l){var n=1/0;for(d=0;d<e.length;d++){for(var[l,r,i]=e[d],o=!0,a=0;a<l.length;a++)(!1&i||n>=i)&&Object.keys(c.O).every((e=>c.O[e](l[a])))?l.splice(a--,1):(o=!1,i<n&&(n=i));if(o){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[l,r,i]},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={816:0,404:0};c.O.j=t=>0===e[t];var t=(t,l)=>{var r,i,[n,o,a]=l,s=0;if(n.some((t=>0!==e[t]))){for(r in o)c.o(o,r)&&(c.m[r]=o[r]);if(a)var d=a(c)}for(t&&t(l);s<n.length;s++)i=n[s],c.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return c.O(d)},l=globalThis.webpackChunkcurvy=globalThis.webpackChunkcurvy||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var r=c.O(void 0,[404],(()=>c(748)));r=c.O(r)})();