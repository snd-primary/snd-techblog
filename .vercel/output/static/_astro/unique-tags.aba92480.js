import{c as o,r as s,m as n}from"./render-template.ccaa46bc.js";import{u as r}from"./hoisted.25135171.js";import"./astro-assets-services.5d54009f.js";const e=`<h2 id="this-post-is-to-test-zod-transform">This post is to test zod transform</h2>
<p>If you open the file <code>src/content/post/unique-tags.md</code>, the tags array has a number of duplicate blog strings of various cases.</p>
<p>These are removed as part of the removeDupsAndLowercase function found in <code>src/content/config.ts</code>.</p>`,a={title:"Unique tags validation",publishDate:"30 January 2023",description:"This post is used for validating if duplicate tags are removed, regardless of the string case",tags:["blog","blog","Blog","test","bloG","Test","BLOG"],minutesRead:"1 min read"},i="/home/snd.webdev/prod/snd-techblog/src/content/post/unique-tags.md",d=void 0;function h(){return`
## This post is to test zod transform

If you open the file \`src/content/post/unique-tags.md\`, the tags array has a number of duplicate blog strings of various cases.

These are removed as part of the removeDupsAndLowercase function found in \`src/content/config.ts\`.
`}function b(){return e}function v(){return[{depth:2,slug:"this-post-is-to-test-zod-transform",text:"This post is to test zod transform"}]}const T=o((c,u,p)=>{const{layout:f,...t}=a;return t.file=i,t.url=d,s`${n()}${r(e)}`});export{T as Content,b as compiledContent,T as default,i as file,a as frontmatter,v as getHeadings,h as rawContent,d as url};
