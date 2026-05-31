import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-0BrNG41E.js";var i,a,o,s,c,l=e((()=>{i=r(),a=t(n()),o=({color:e})=>(0,i.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:[(0,i.jsx)(`circle`,{cx:`11`,cy:`11`,r:`7`,stroke:e,strokeWidth:`1.6`,fill:`none`}),(0,i.jsx)(`line`,{x1:`16.5`,y1:`16.5`,x2:`21`,y2:`21`,stroke:e,strokeWidth:`1.6`,strokeLinecap:`round`})]}),s=({color:e})=>(0,i.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0,pointerEvents:`none`},children:[(0,i.jsx)(`line`,{x1:`7`,y1:`7`,x2:`17`,y2:`17`,stroke:e,strokeWidth:`1.6`,strokeLinecap:`round`}),(0,i.jsx)(`line`,{x1:`17`,y1:`7`,x2:`7`,y2:`17`,stroke:e,strokeWidth:`1.6`,strokeLinecap:`round`})]}),c=a.forwardRef(({size:e=`Regular`,state:t,value:n,defaultValue:r=``,placeholder:c=`Search`,onChange:l,onSearch:u,onClear:d,disabled:f=!1,fullWidth:p=!1,className:m=``,id:h},g)=>{let _=(0,a.useRef)(null),v=e=>{_.current=e,typeof g==`function`?g(e):g&&(g.current=e)},[y,b]=(0,a.useState)(r),[x,S]=(0,a.useState)(`Default`),C=n??y,w=f||t===`Disabled`,T=t??(w?`Disabled`:x===`Active`?`Active`:C.length>0?`Searched`:`Default`),E=T===`Active`,D=T===`Searched`,O=e===`Small`,k=w?`#A9A9A9`:E||D?`#004494`:`#616161`,A=w?`#A9A9A9`:E||D?`#303030`:`#616161`,j=O?`h-[32px]`:`h-[40px]`,M=O?`text-[14px] leading-[20px]`:`text-[16px] leading-[24px]`,N=``,P={};w?N=`border-[#CECECE]`:E?(N=`border-[#004494]`,P={boxShadow:`0px 0px 3px 2px rgba(0,68,148,0.25)`}):N=D?`border-[#004494]`:`border-[#616161]`;let F=()=>{w||S(`Active`)},I=()=>{S(C.length>0?`Searched`:`Default`)},L=e=>{let t=e.target.value;b(t),l?.(t)},R=e=>{e.key===`Enter`&&(u?.(C),_.current?.blur()),e.key===`Escape`&&z()},z=(0,a.useCallback)(()=>{b(``),S(`Default`),l?.(``),d?.(),_.current?.focus()},[l,d]);return(0,i.jsx)(`div`,{className:[`flex flex-col items-start`,p?`w-full`:`w-[260px]`,m].filter(Boolean).join(` `),children:(0,i.jsxs)(`div`,{className:[`flex gap-[8px] items-center`,`px-[12px] py-[8px]`,`w-full rounded-[4px]`,`border border-solid`,`bg-white`,`transition-all duration-150`,j,N].filter(Boolean).join(` `),style:P,children:[(0,i.jsx)(o,{color:k}),(0,i.jsx)(`input`,{ref:v,id:h,type:`text`,value:C,placeholder:c,disabled:w,onChange:L,onFocus:F,onBlur:I,onKeyDown:R,"aria-label":c,className:[`flex-1 min-w-0 bg-transparent outline-none border-none`,`font-["Inter",sans-serif] font-normal not-italic`,M,w?`cursor-not-allowed`:`cursor-text`].join(` `),style:{color:A,caretColor:`#004494`}}),D&&(0,i.jsx)(`button`,{type:`button`,"aria-label":`Clear search`,onMouseDown:e=>{e.preventDefault(),z()},className:`inline-flex items-center justify-center shrink-0 outline-none cursor-pointer bg-transparent`,children:(0,i.jsx)(s,{color:`#004494`})})]})})}),c.displayName=`SearchBar`,c.__docgenInfo={description:``,methods:[],displayName:`SearchBar`,props:{size:{required:!1,tsType:{name:`union`,raw:`'Regular' | 'Small'`,elements:[{name:`literal`,value:`'Regular'`},{name:`literal`,value:`'Small'`}]},description:``,defaultValue:{value:`'Regular'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'Default' | 'Active' | 'Disabled' | 'Searched'`,elements:[{name:`literal`,value:`'Default'`},{name:`literal`,value:`'Active'`},{name:`literal`,value:`'Disabled'`},{name:`literal`,value:`'Searched'`}]},description:`Controlled state — if omitted, state is managed internally`},value:{required:!1,tsType:{name:`string`},description:`Controlled value`},defaultValue:{required:!1,tsType:{name:`string`},description:`Default uncontrolled value`,defaultValue:{value:`''`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Search'`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onSearch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onClear:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`Fixed width or full width`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},id:{required:!1,tsType:{name:`string`},description:``}}}})),u,d,f,p,m,h,g,_,v,y,b;e((()=>{u=r(),d=t(n()),l(),f={title:`Components/SearchBar`,component:c,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`
The Search Bar component allows users to input and submit search queries within the application. It is designed for quick discoverability and ease of use, supporting consistent behavior across all screens where search functionality is needed.

**The component is available in two predefined sizes to adapt to different layout needs:**
- Regular: Default size, suitable for prominent placements such as page headers or dashboards.
- Small: Compact version, ideal for use within dense layouts like tables, toolbars, or side panels.
`}}},argTypes:{size:{control:`select`,options:[`Regular`,`Small`]},state:{control:`select`,options:[`Default`,`Active`,`Disabled`,`Searched`]},fullWidth:{control:`boolean`},disabled:{control:`boolean`}}},p={args:{size:`Regular`,placeholder:`Search`,fullWidth:!1}},m={name:`📋 All States — as in Figma`,render:()=>(0,u.jsxs)(`div`,{className:`font-['Inter',sans-serif] space-y-8`,children:[(0,u.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400`,children:`Search Bar — All States × Both Sizes`}),(0,u.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,u.jsxs)(`div`,{className:`flex items-center gap-8`,children:[(0,u.jsx)(`span`,{className:`w-24 shrink-0`}),(0,u.jsx)(`span`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 w-[260px]`,children:`Regular`}),(0,u.jsx)(`span`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 w-[260px]`,children:`Small`})]}),[{state:`Default`,disabled:!1,value:``},{state:`Active`,disabled:!1,value:``},{state:`Disabled`,disabled:!0,value:``},{state:`Searched`,disabled:!1,value:`Searching`}].map(({state:e,disabled:t,value:n})=>(0,u.jsxs)(`div`,{className:`flex items-center gap-8`,children:[(0,u.jsx)(`span`,{className:`text-[14px] text-[#101010] w-24 shrink-0`,children:e}),(0,u.jsx)(c,{size:`Regular`,state:e,disabled:t,defaultValue:n}),(0,u.jsx)(c,{size:`Small`,state:e,disabled:t,defaultValue:n})]},e))]})]})},h={name:`Size / Regular — All States`,render:()=>(0,u.jsx)(`div`,{className:`space-y-4 font-['Inter',sans-serif]`,children:[{state:`Default`,label:`Default — grey border, grey placeholder`},{state:`Active`,label:`Active — blue border + glow (simulate by clicking)`},{state:`Disabled`,label:`Disabled — light grey border, no interaction`},{state:`Searched`,label:`Searched — blue border + × clear button`}].map(({state:e,label:t})=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{className:`text-[11px] text-gray-400 mb-1`,children:t}),(0,u.jsx)(c,{size:`Regular`,state:e,disabled:e===`Disabled`,defaultValue:e===`Searched`?`Searching`:``})]},e))})},g={name:`Size / Small — All States`,render:()=>(0,u.jsx)(`div`,{className:`space-y-4 font-['Inter',sans-serif]`,children:[{state:`Default`,label:`Default`},{state:`Active`,label:`Active`},{state:`Disabled`,label:`Disabled`},{state:`Searched`,label:`Searched`}].map(({state:e,label:t})=>(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{className:`text-[11px] text-gray-400 mb-1`,children:t}),(0,u.jsx)(c,{size:`Small`,state:e,disabled:e===`Disabled`,defaultValue:e===`Searched`?`Searching`:``})]},e))})},_={name:`Interactive — type, search, clear`,render:()=>{let[e,t]=(0,d.useState)(``),[n,r]=(0,d.useState)(``);return(0,u.jsxs)(`div`,{className:`space-y-4 font-['Inter',sans-serif]`,children:[(0,u.jsxs)(`div`,{className:`space-y-2`,children:[(0,u.jsx)(`p`,{className:`text-[11px] text-gray-400`,children:`Regular`}),(0,u.jsx)(c,{size:`Regular`,value:e,onChange:t,onSearch:e=>r(`Searched: "${e}"`),onClear:()=>r(`Cleared`)})]}),(0,u.jsxs)(`div`,{className:`space-y-2`,children:[(0,u.jsx)(`p`,{className:`text-[11px] text-gray-400`,children:`Small`}),(0,u.jsx)(c,{size:`Small`,value:e,onChange:t,onSearch:e=>r(`Searched: "${e}"`),onClear:()=>r(`Cleared`)})]}),e&&(0,u.jsxs)(`p`,{className:`text-xs text-gray-400`,children:[`Query: `,(0,u.jsx)(`strong`,{children:e})]}),n&&(0,u.jsx)(`p`,{className:`text-xs text-[#004494]`,children:n}),(0,u.jsx)(`p`,{className:`text-[11px] text-gray-400`,children:`Tip: Click to focus (Active), type to enter query (Searched), press Enter to search, press × or Escape to clear.`})]})}},v={name:`Full Width`,render:()=>(0,u.jsxs)(`div`,{className:`space-y-3 w-full font-['Inter',sans-serif]`,children:[(0,u.jsx)(c,{size:`Regular`,fullWidth:!0,placeholder:`Search across all files...`}),(0,u.jsx)(c,{size:`Small`,fullWidth:!0,placeholder:`Search...`})]})},y={name:`Size Comparison — Regular vs Small`,render:()=>(0,u.jsxs)(`div`,{className:`flex items-center gap-6 font-['Inter',sans-serif]`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{className:`text-[11px] text-gray-400 mb-2`,children:`Regular (40px)`}),(0,u.jsx)(c,{size:`Regular`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{className:`text-[11px] text-gray-400 mb-2`,children:`Small (32px)`}),(0,u.jsx)(c,{size:`Small`})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'Regular',
    placeholder: 'Search',
    fullWidth: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '📋 All States — as in Figma',
  render: () => <div className="font-['Inter',sans-serif] space-y-8">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
        Search Bar — All States × Both Sizes
      </p>

      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center gap-8">
          <span className="w-24 shrink-0" />
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 w-[260px]">Regular</span>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 w-[260px]">Small</span>
        </div>
        {/* Rows */}
        {([{
        state: 'Default',
        disabled: false,
        value: ''
      }, {
        state: 'Active',
        disabled: false,
        value: ''
      }, {
        state: 'Disabled',
        disabled: true,
        value: ''
      }, {
        state: 'Searched',
        disabled: false,
        value: 'Searching'
      }] as const).map(({
        state,
        disabled,
        value
      }) => <div key={state} className="flex items-center gap-8">
            <span className="text-[14px] text-[#101010] w-24 shrink-0">{state}</span>
            <SearchBar size="Regular" state={state} disabled={disabled} defaultValue={value} />
            <SearchBar size="Small" state={state} disabled={disabled} defaultValue={value} />
          </div>)}
      </div>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Size / Regular — All States',
  render: () => <div className="space-y-4 font-['Inter',sans-serif]">
      {([{
      state: 'Default',
      label: 'Default — grey border, grey placeholder'
    }, {
      state: 'Active',
      label: 'Active — blue border + glow (simulate by clicking)'
    }, {
      state: 'Disabled',
      label: 'Disabled — light grey border, no interaction'
    }, {
      state: 'Searched',
      label: 'Searched — blue border + × clear button'
    }] as const).map(({
      state,
      label
    }) => <div key={state}>
          <p className="text-[11px] text-gray-400 mb-1">{label}</p>
          <SearchBar size="Regular" state={state} disabled={state === 'Disabled'} defaultValue={state === 'Searched' ? 'Searching' : ''} />
        </div>)}
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Size / Small — All States',
  render: () => <div className="space-y-4 font-['Inter',sans-serif]">
      {([{
      state: 'Default',
      label: 'Default'
    }, {
      state: 'Active',
      label: 'Active'
    }, {
      state: 'Disabled',
      label: 'Disabled'
    }, {
      state: 'Searched',
      label: 'Searched'
    }] as const).map(({
      state,
      label
    }) => <div key={state}>
          <p className="text-[11px] text-gray-400 mb-1">{label}</p>
          <SearchBar size="Small" state={state} disabled={state === 'Disabled'} defaultValue={state === 'Searched' ? 'Searching' : ''} />
        </div>)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Interactive — type, search, clear',
  render: () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState('');
    return <div className="space-y-4 font-['Inter',sans-serif]">
        <div className="space-y-2">
          <p className="text-[11px] text-gray-400">Regular</p>
          <SearchBar size="Regular" value={query} onChange={setQuery} onSearch={v => setResult(\`Searched: "\${v}"\`)} onClear={() => setResult('Cleared')} />
        </div>
        <div className="space-y-2">
          <p className="text-[11px] text-gray-400">Small</p>
          <SearchBar size="Small" value={query} onChange={setQuery} onSearch={v => setResult(\`Searched: "\${v}"\`)} onClear={() => setResult('Cleared')} />
        </div>
        {query && <p className="text-xs text-gray-400">Query: <strong>{query}</strong></p>}
        {result && <p className="text-xs text-[#004494]">{result}</p>}
        <p className="text-[11px] text-gray-400">
          Tip: Click to focus (Active), type to enter query (Searched), press Enter to search, press × or Escape to clear.
        </p>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Full Width',
  render: () => <div className="space-y-3 w-full font-['Inter',sans-serif]">
      <SearchBar size="Regular" fullWidth placeholder="Search across all files..." />
      <SearchBar size="Small" fullWidth placeholder="Search..." />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Size Comparison — Regular vs Small',
  render: () => <div className="flex items-center gap-6 font-['Inter',sans-serif]">
      <div>
        <p className="text-[11px] text-gray-400 mb-2">Regular (40px)</p>
        <SearchBar size="Regular" />
      </div>
      <div>
        <p className="text-[11px] text-gray-400 mb-2">Small (32px)</p>
        <SearchBar size="Small" />
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`AllStates`,`RegularStates`,`SmallStates`,`Interactive`,`FullWidth`,`SizeComparison`]}))();export{m as AllStates,v as FullWidth,_ as Interactive,p as Playground,h as RegularStates,y as SizeComparison,g as SmallStates,b as __namedExportsOrder,f as default};