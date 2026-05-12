import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-H6Kf-PS5.js";function i(e,t,n){if(t<=n*2+3+2)return Array.from({length:t},(e,t)=>t+1);let r=Math.max(e-n,2),i=Math.min(e+n,t-1),a=r>2,o=i<t-1,s=[1];a&&s.push(`...`);for(let e=r;e<=i;e++)s.push(e);return o&&s.push(`...`),s.push(t),s}var a,o,s,c,l,u,d,f=e((()=>{a=r(),o=t(n()),s=({color:e})=>(0,a.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:[(0,a.jsx)(`line`,{x1:`13`,y1:`8`,x2:`4`,y2:`8`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,a.jsx)(`polyline`,{points:`7,4.5 3,8 7,11.5`,fill:`none`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),c=({color:e})=>(0,a.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:[(0,a.jsx)(`line`,{x1:`3`,y1:`8`,x2:`12`,y2:`8`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,a.jsx)(`polyline`,{points:`9,4.5 13,8 9,11.5`,fill:`none`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),l=({page:e,isSelected:t,isDisabled:n,onClick:r})=>e===`...`?(0,a.jsx)(`div`,{className:`flex flex-col items-center justify-center min-w-[24px] px-[8px] py-[4px] rounded-[4px] bg-white select-none`,children:(0,a.jsx)(`span`,{className:`font-['Inter',sans-serif] font-normal text-[13px] leading-[16px] text-[#101010]`,children:`…`})}):t?(0,a.jsx)(`div`,{role:`button`,"aria-current":`page`,"aria-label":`Page ${e}`,className:`flex flex-col items-center justify-center min-w-[24px] px-[8px] py-[4px] rounded-[4px] bg-[#004494] cursor-pointer select-none`,children:(0,a.jsx)(`span`,{className:`font-['Inter',sans-serif] font-medium text-[13px] leading-[16px] text-white`,children:e})}):n?(0,a.jsx)(`div`,{className:`flex flex-col items-center justify-center min-w-[24px] px-[8px] py-[4px] rounded-[4px] bg-white opacity-40 cursor-not-allowed select-none`,"aria-disabled":`true`,children:(0,a.jsx)(`span`,{className:`font-['Inter',sans-serif] font-normal text-[13px] leading-[16px] text-[#101010]`,children:e})}):(0,a.jsx)(`button`,{type:`button`,"aria-label":`Go to page ${e}`,onClick:r,className:`flex flex-col items-center justify-center min-w-[24px] px-[8px] py-[4px] rounded-[4px] bg-white hover:bg-[#E2EFFF] cursor-pointer transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[#004494] focus-visible:ring-offset-1`,children:(0,a.jsx)(`span`,{className:`font-['Inter',sans-serif] font-normal text-[13px] leading-[16px] text-[#101010]`,children:e})}),u=({direction:e,disabled:t,onClick:n})=>{let r=e===`previous`,i=`#004494`,o=r?`Previous`:`Next`;return t?(0,a.jsxs)(`div`,{className:`flex gap-[4px] items-center justify-center px-[8px] py-[4px] rounded-[4px] bg-white opacity-40 cursor-not-allowed select-none`,"aria-disabled":`true`,"aria-label":`${o} page`,children:[r&&(0,a.jsx)(s,{color:i}),(0,a.jsx)(`span`,{className:`font-['Inter',sans-serif] font-normal text-[13px] leading-[16px] text-[#004494] whitespace-nowrap`,children:o}),!r&&(0,a.jsx)(c,{color:i})]}):(0,a.jsxs)(`button`,{type:`button`,onClick:n,"aria-label":`${o} page`,className:`flex gap-[4px] items-center justify-center px-[8px] py-[4px] rounded-[4px] bg-white hover:bg-[#E2EFFF] cursor-pointer transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[#004494] focus-visible:ring-offset-1`,children:[r&&(0,a.jsx)(s,{color:i}),(0,a.jsx)(`span`,{className:`font-['Inter',sans-serif] font-normal text-[13px] leading-[16px] text-[#004494] whitespace-nowrap`,children:o}),!r&&(0,a.jsx)(c,{color:i})]})},d=({totalPages:e,currentPage:t,onPageChange:n,siblingCount:r=1,className:s=``})=>{let[c,d]=(0,o.useState)(1),f=t??c,p=t=>{t<1||t>e||t===f||(d(t),n?.(t))},m=i(f,e,r);return(0,a.jsxs)(`nav`,{"aria-label":`Pagination`,className:[`flex items-center gap-[8px]`,s].join(` `),children:[(0,a.jsx)(u,{direction:`previous`,disabled:f===1,onClick:()=>p(f-1)}),m.map((e,t)=>(0,a.jsx)(l,{page:e,isSelected:e===f,onClick:()=>typeof e==`number`&&p(e)},`${e}-${t}`)),(0,a.jsx)(u,{direction:`next`,disabled:f===e,onClick:()=>p(f+1)})]})},d.__docgenInfo={description:``,methods:[],displayName:`Pagination`,props:{totalPages:{required:!0,tsType:{name:`number`},description:`Total number of pages`},currentPage:{required:!1,tsType:{name:`number`},description:`Currently active page (1-indexed)`},onPageChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(page: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`void`}}},description:`Called when user clicks a page or Previous/Next`},siblingCount:{required:!1,tsType:{name:`number`},description:`Max consecutive page numbers to show around the current page.
Pages beyond this range are collapsed into "...".
Default: 3`,defaultValue:{value:`1`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),p,m,h,g,_,v,y,b,x;e((()=>{p=r(),m=t(n()),f(),h={title:`Components/Pagination`,component:d,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`The Pagination component allows users to navigate through large sets of content divided across multiple pages. It provides quick access to the first, last, previous, and next pages, along with direct page number links.`}}},argTypes:{totalPages:{control:{type:`number`,min:1,max:100}},currentPage:{control:{type:`number`,min:1,max:100}},siblingCount:{control:{type:`number`,min:0,max:3}}}},g={render:e=>{let[t,n]=(0,m.useState)(e.currentPage??1);return(0,p.jsxs)(`div`,{className:`space-y-3`,children:[(0,p.jsx)(d,{...e,currentPage:t,onPageChange:n}),(0,p.jsxs)(`p`,{className:`text-xs text-gray-400`,children:[`Current page: `,t]})]})},args:{totalPages:64,currentPage:1,siblingCount:1}},_={name:`📋 Figma — Exact (page 1 of 64)`,render:()=>(0,p.jsx)(d,{totalPages:64,currentPage:1,siblingCount:1})},v={name:`📋 All States`,render:()=>(0,p.jsxs)(`div`,{className:`space-y-8 font-['Inter',sans-serif]`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3`,children:`Page 1 of 64 — Previous disabled`}),(0,p.jsx)(d,{totalPages:64,currentPage:1})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3`,children:`Page 32 of 64 — Both nav active, ellipsis both sides`}),(0,p.jsx)(d,{totalPages:64,currentPage:32})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3`,children:`Page 64 of 64 — Next disabled`}),(0,p.jsx)(d,{totalPages:64,currentPage:64})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3`,children:`Short (5 pages) — No ellipsis`}),(0,p.jsx)(d,{totalPages:5,currentPage:3})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3`,children:`Single page`}),(0,p.jsx)(d,{totalPages:1,currentPage:1})]})]})},y={name:`Interactive — click to navigate`,render:()=>{let[e,t]=(0,m.useState)(1);return(0,p.jsxs)(`div`,{className:`space-y-4`,children:[(0,p.jsx)(d,{totalPages:64,currentPage:e,onPageChange:t,siblingCount:1}),(0,p.jsxs)(`p`,{className:`text-xs text-gray-400`,children:[`Showing page `,(0,p.jsx)(`strong`,{children:e}),` of `,(0,p.jsx)(`strong`,{children:`64`})]})]})}},b={name:`Sibling Count Variants`,render:()=>(0,p.jsx)(`div`,{className:`space-y-6 font-['Inter',sans-serif]`,children:[0,1,2].map(e=>(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`p`,{className:`text-[11px] text-gray-400 mb-2`,children:[`siblingCount=`,e]}),(0,p.jsx)(d,{totalPages:20,currentPage:10,siblingCount:e})]},e))})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(args.currentPage ?? 1);
    return <div className="space-y-3">
        <Pagination {...args} currentPage={page} onPageChange={setPage} />
        <p className="text-xs text-gray-400">Current page: {page}</p>
      </div>;
  },
  args: {
    totalPages: 64,
    currentPage: 1,
    siblingCount: 1
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '📋 Figma — Exact (page 1 of 64)',
  render: () => <Pagination totalPages={64} currentPage={1} siblingCount={1} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '📋 All States',
  render: () => <div className="space-y-8 font-['Inter',sans-serif]">

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Page 1 of 64 — Previous disabled
        </p>
        <Pagination totalPages={64} currentPage={1} />
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Page 32 of 64 — Both nav active, ellipsis both sides
        </p>
        <Pagination totalPages={64} currentPage={32} />
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Page 64 of 64 — Next disabled
        </p>
        <Pagination totalPages={64} currentPage={64} />
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Short (5 pages) — No ellipsis
        </p>
        <Pagination totalPages={5} currentPage={3} />
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Single page
        </p>
        <Pagination totalPages={1} currentPage={1} />
      </div>

    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Interactive — click to navigate',
  render: () => {
    const [page, setPage] = useState(1);
    return <div className="space-y-4">
        <Pagination totalPages={64} currentPage={page} onPageChange={setPage} siblingCount={1} />
        <p className="text-xs text-gray-400">
          Showing page <strong>{page}</strong> of <strong>64</strong>
        </p>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Sibling Count Variants',
  render: () => <div className="space-y-6 font-['Inter',sans-serif]">
      {[0, 1, 2].map(s => <div key={s}>
          <p className="text-[11px] text-gray-400 mb-2">siblingCount={s}</p>
          <Pagination totalPages={20} currentPage={10} siblingCount={s} />
        </div>)}
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`FigmaExact`,`AllStates`,`Interactive`,`SiblingVariants`]}))();export{v as AllStates,_ as FigmaExact,y as Interactive,g as Playground,b as SiblingVariants,x as __namedExportsOrder,h as default};