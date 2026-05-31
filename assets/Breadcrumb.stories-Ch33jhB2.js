import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-0BrNG41E.js";function i({item:e,isCurrent:t,isHighlight:n}){let[r,i]=c.useState(!1);if(t)return(0,s.jsx)(`span`,{className:`inline-flex items-start p-[2px]`,"aria-current":`page`,children:(0,s.jsx)(`span`,{className:`text-[13px] leading-[16px] font-normal whitespace-nowrap`,style:{color:`#303030`},children:e.label})});let a=r?`#000b54`:`#004494`,o=n?`font-semibold`:`font-normal`,l=r?{borderBottom:`1px solid #000b54`}:{borderBottom:`1px solid transparent`},u=[`inline-flex items-start p-[2px] cursor-pointer`,`outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#000b54]`,`transition-colors duration-150`].join(` `),d=(0,s.jsx)(`span`,{className:`text-[13px] leading-[16px] ${o} whitespace-nowrap`,style:{color:a,...l},children:e.label});return e.href?(0,s.jsx)(`a`,{href:e.href,className:u,style:{textDecoration:`none`},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:d}):(0,s.jsx)(`button`,{type:`button`,className:u,onClick:e.onClick,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:d})}function a(){return(0,s.jsx)(`span`,{className:`text-[13px] leading-[16px] font-normal whitespace-nowrap select-none`,style:{color:`#303030`},"aria-hidden":`true`,children:`/`})}function o({onClick:e}){return(0,s.jsx)(`button`,{type:`button`,onClick:e,"aria-label":`Show hidden breadcrumbs`,className:[`inline-flex items-center justify-center px-[4px] rounded-[4px]`,`cursor-pointer outline-none`,`focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#000b54]`,`transition-colors duration-150 hover:bg-[#d6d6d6]`].join(` `),style:{backgroundColor:`#ededed`},children:(0,s.jsx)(l,{})})}var s,c,l,u,d=e((()=>{s=r(),c=t(n()),l=()=>(0,s.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:[(0,s.jsx)(`circle`,{cx:`3.333`,cy:`8`,r:`1.333`,fill:`#303030`}),(0,s.jsx)(`circle`,{cx:`8`,cy:`8`,r:`1.333`,fill:`#303030`}),(0,s.jsx)(`circle`,{cx:`12.667`,cy:`8`,r:`1.333`,fill:`#303030`})]}),u=c.forwardRef(({items:e,collapsed:t=!1,visibleTail:n=5,highlightFirst:r=!0,className:l=``},u)=>{let[d,f]=c.useState(!1);if(!e.length)return null;let p=t&&!d&&e.length>n+1,m=e;return p&&(m=[e[0],`__ellipsis__`,...e.slice(e.length-n)]),(0,s.jsx)(`nav`,{ref:u,"aria-label":`Breadcrumb`,className:[`inline-flex flex-wrap items-center gap-[4px] h-[20px]`,`font-['Inter',sans-serif]`,l].filter(Boolean).join(` `),children:(0,s.jsx)(`ol`,{className:`inline-flex flex-wrap items-center gap-[4px] list-none m-0 p-0`,children:m.map((t,n)=>{if(t===`__ellipsis__`)return(0,s.jsxs)(c.Fragment,{children:[(0,s.jsx)(`li`,{className:`inline-flex items-center`,children:(0,s.jsx)(o,{onClick:()=>f(!0)})}),(0,s.jsx)(`li`,{className:`inline-flex items-center`,"aria-hidden":`true`,children:(0,s.jsx)(a,{})})]},`__ellipsis__`);let l=e.indexOf(t),u=l===e.length-1,d=l===0&&r,p=n===m.length-1;return(0,s.jsxs)(c.Fragment,{children:[(0,s.jsx)(`li`,{className:`inline-flex items-center`,children:(0,s.jsx)(i,{item:t,isCurrent:u,isHighlight:d})}),!p&&(0,s.jsx)(`li`,{className:`inline-flex items-center`,"aria-hidden":`true`,children:(0,s.jsx)(a,{})})]},`${t.label}-${l}`)})})})}),u.displayName=`Breadcrumb`,u.__docgenInfo={description:``,methods:[],displayName:`Breadcrumb`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BreadcrumbItem`}],raw:`BreadcrumbItem[]`},description:`Ordered list of crumbs. The last item is always the current (non-interactive) page.`},collapsed:{required:!1,tsType:{name:`boolean`},description:`collapsed — hide middle crumbs behind a "…" pill, showing only
the first crumb + last N visible crumbs (default 5).`,defaultValue:{value:`false`,computed:!1}},visibleTail:{required:!1,tsType:{name:`number`},description:`How many trailing crumbs to show when collapsed (default 5)`,defaultValue:{value:`5`,computed:!1}},highlightFirst:{required:!1,tsType:{name:`boolean`},description:`First crumb rendered semi-bold as "highlighted" root`,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{f=r(),d(),p=[{label:`azure-sdk-for-go-sdk-azcore-v1.7.1.zip`},{label:`azure-sdk-for-go-sdk-azcore-v1.7.1`},{label:`sdk`},{label:`keyvault`},{label:`azsecrets`},{label:`testdata`},{label:`recordings`}],m=[{label:`project-root`},{label:`src`},{label:`components`}],h=[{label:`project-root`},{label:`packages`},{label:`ui`},{label:`Button.tsx`}],g={title:`Components/Breadcrumb`,component:u,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
Breadcrumbs visually represent a folder and file structure, helping users understand their current location in the hierarchy, especially when navigating deeply nested directories. This component is typically placed below the secondary navigation.
The breadcrumb is built using a horizontal group of Breadcrumb Link Items, each representing a parent folder or file in the path.

**Note:**
- Default state is used for non-current, navigable links in the hierarchy.
- Hover state indicates interactivity when a user hovers over a breadcrumb.
- Active state represents the currently opened page or file. It is non-interactive and visually distinct to indicate the end of the path.
- Highlighted state is used to visually mark the starting point or root folder in the breadcrumb.
`}}},argTypes:{collapsed:{control:`boolean`},highlightFirst:{control:`boolean`},visibleTail:{control:`number`}}},_={args:{items:p,collapsed:!1,highlightFirst:!0,visibleTail:5}},v={name:`📋 All Variants`,parameters:{layout:`padded`},render:()=>(0,f.jsxs)(`div`,{className:`font-['Inter',sans-serif] space-y-10 p-6`,children:[(0,f.jsxs)(`section`,{children:[(0,f.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4`,children:`Default — all crumbs visible`}),(0,f.jsxs)(`div`,{className:`space-y-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`span`,{className:`text-[11px] text-gray-400 block mb-1`,children:`Short path (3 crumbs)`}),(0,f.jsx)(u,{items:m})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`span`,{className:`text-[11px] text-gray-400 block mb-1`,children:`Medium path (4 crumbs)`}),(0,f.jsx)(u,{items:h})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`span`,{className:`text-[11px] text-gray-400 block mb-1`,children:`Full path (7 crumbs)`}),(0,f.jsx)(u,{items:p})]})]})]}),(0,f.jsxs)(`section`,{children:[(0,f.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4`,children:`Collapsed — middle crumbs hidden (click … to expand)`}),(0,f.jsxs)(`div`,{className:`space-y-4`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`span`,{className:`text-[11px] text-gray-400 block mb-1`,children:`Full path collapsed (visibleTail=5)`}),(0,f.jsx)(u,{items:p,collapsed:!0,visibleTail:5})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`span`,{className:`text-[11px] text-gray-400 block mb-1`,children:`Full path collapsed (visibleTail=3)`}),(0,f.jsx)(u,{items:p,collapsed:!0,visibleTail:3})]})]})]}),(0,f.jsxs)(`section`,{children:[(0,f.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4`,children:`Without highlight on first crumb`}),(0,f.jsx)(u,{items:p,highlightFirst:!1})]})]})},y={name:`Type / Default`,render:()=>(0,f.jsx)(u,{items:p})},b={name:`Type / Default — short path`,render:()=>(0,f.jsx)(u,{items:m})},x={name:`Type / Default — medium path`,render:()=>(0,f.jsx)(u,{items:h})},S={name:`Type / Collapsed (click … to expand)`,render:()=>(0,f.jsx)(u,{items:p,collapsed:!0,visibleTail:5})},C={name:`Type / Collapsed — tight tail (3 visible)`,render:()=>(0,f.jsx)(u,{items:p,collapsed:!0,visibleTail:3})},w={name:`Highlight / First crumb highlighted (default)`,render:()=>(0,f.jsx)(u,{items:p,highlightFirst:!0})},T={name:`Highlight / No highlight`,render:()=>(0,f.jsx)(u,{items:p,highlightFirst:!1})},E={name:`State / Crumb states explained`,parameters:{layout:`padded`},render:()=>(0,f.jsxs)(`div`,{className:`font-['Inter',sans-serif] space-y-6 p-6`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-2`,children:`Default (hover any crumb to see hover state)`}),(0,f.jsx)(u,{items:p})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-2`,children:`Current / Active — last crumb is always non-interactive grey`}),(0,f.jsx)(u,{items:m})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-2`,children:`Collapsed — ellipsis pill hides middle crumbs`}),(0,f.jsx)(u,{items:p,collapsed:!0,visibleTail:5})]})]})},D={name:`In context — below secondary nav`,parameters:{layout:`padded`},render:()=>(0,f.jsxs)(`div`,{className:`font-['Inter',sans-serif] p-6 space-y-2`,children:[(0,f.jsx)(`div`,{className:`w-full h-[40px] rounded-[4px] flex items-center px-4`,style:{backgroundColor:`#f5f5f5`,borderBottom:`1px solid #e0e0e0`},children:(0,f.jsx)(`span`,{className:`text-[13px] text-[#303030]`,children:`Secondary Navigation`})}),(0,f.jsx)(`div`,{className:`px-1 pt-2`,children:(0,f.jsx)(u,{items:p,collapsed:!0,visibleTail:5})})]})},O={name:`Interactive / With onClick handlers`,parameters:{layout:`padded`},render:()=>(0,f.jsx)(u,{items:p.map((e,t)=>({...e,onClick:t<p.length-1?()=>alert(`Navigating to: ${e.label}`):void 0}))})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: FULL_PATH,
    collapsed: false,
    highlightFirst: true,
    visibleTail: 5
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '📋 All Variants',
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="font-['Inter',sans-serif] space-y-10 p-6">

      <section>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Default — all crumbs visible
        </p>
        <div className="space-y-4">
          <div>
            <span className="text-[11px] text-gray-400 block mb-1">Short path (3 crumbs)</span>
            <Breadcrumb items={SHORT_PATH} />
          </div>
          <div>
            <span className="text-[11px] text-gray-400 block mb-1">Medium path (4 crumbs)</span>
            <Breadcrumb items={MEDIUM_PATH} />
          </div>
          <div>
            <span className="text-[11px] text-gray-400 block mb-1">Full path (7 crumbs)</span>
            <Breadcrumb items={FULL_PATH} />
          </div>
        </div>
      </section>

      <section>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Collapsed — middle crumbs hidden (click … to expand)
        </p>
        <div className="space-y-4">
          <div>
            <span className="text-[11px] text-gray-400 block mb-1">Full path collapsed (visibleTail=5)</span>
            <Breadcrumb items={FULL_PATH} collapsed visibleTail={5} />
          </div>
          <div>
            <span className="text-[11px] text-gray-400 block mb-1">Full path collapsed (visibleTail=3)</span>
            <Breadcrumb items={FULL_PATH} collapsed visibleTail={3} />
          </div>
        </div>
      </section>

      <section>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Without highlight on first crumb
        </p>
        <Breadcrumb items={FULL_PATH} highlightFirst={false} />
      </section>

    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Type / Default',
  render: () => <Breadcrumb items={FULL_PATH} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Type / Default — short path',
  render: () => <Breadcrumb items={SHORT_PATH} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Type / Default — medium path',
  render: () => <Breadcrumb items={MEDIUM_PATH} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Type / Collapsed (click … to expand)',
  render: () => <Breadcrumb items={FULL_PATH} collapsed visibleTail={5} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Type / Collapsed — tight tail (3 visible)',
  render: () => <Breadcrumb items={FULL_PATH} collapsed visibleTail={3} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Highlight / First crumb highlighted (default)',
  render: () => <Breadcrumb items={FULL_PATH} highlightFirst />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Highlight / No highlight',
  render: () => <Breadcrumb items={FULL_PATH} highlightFirst={false} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'State / Crumb states explained',
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="font-['Inter',sans-serif] space-y-6 p-6">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Default (hover any crumb to see hover state)
        </p>
        <Breadcrumb items={FULL_PATH} />
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Current / Active — last crumb is always non-interactive grey
        </p>
        <Breadcrumb items={SHORT_PATH} />
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Collapsed — ellipsis pill hides middle crumbs
        </p>
        <Breadcrumb items={FULL_PATH} collapsed visibleTail={5} />
      </div>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'In context — below secondary nav',
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="font-['Inter',sans-serif] p-6 space-y-2">
      {/* Simulated secondary nav bar */}
      <div className="w-full h-[40px] rounded-[4px] flex items-center px-4" style={{
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid #e0e0e0'
    }}>
        <span className="text-[13px] text-[#303030]">Secondary Navigation</span>
      </div>
      {/* Breadcrumb sits below it */}
      <div className="px-1 pt-2">
        <Breadcrumb items={FULL_PATH} collapsed visibleTail={5} />
      </div>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Interactive / With onClick handlers',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const items: BreadcrumbItem[] = FULL_PATH.map((item, i) => ({
      ...item,
      onClick: i < FULL_PATH.length - 1 ? () => alert(\`Navigating to: \${item.label}\`) : undefined
    }));
    return <Breadcrumb items={items} />;
  }
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`AllVariants`,`Default`,`DefaultShort`,`DefaultMedium`,`Collapsed`,`CollapsedTight`,`HighlightFirst`,`NoHighlight`,`AllCrumbStates`,`InContext`,`WithClickHandlers`]}))();export{E as AllCrumbStates,v as AllVariants,S as Collapsed,C as CollapsedTight,y as Default,x as DefaultMedium,b as DefaultShort,w as HighlightFirst,D as InContext,T as NoHighlight,_ as Playground,O as WithClickHandlers,k as __namedExportsOrder,g as default};