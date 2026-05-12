import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-_seQZ5lc.js";function i({size:e,color:t=`#101010`}){return(0,s.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 ${e} ${e}`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,s.jsx)(`path`,{d:e===24?`M5 8.5L12 15.5L19 8.5`:`M4 7L10 13L16 7`,stroke:t,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function a({size:e,color:t=`#101010`}){return(0,s.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 ${e} ${e}`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,s.jsx)(`path`,{d:e===24?`M5 15.5L12 8.5L19 15.5`:`M4 13L10 7L16 13`,stroke:t,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function o({item:e,isOpen:t,size:n,onToggle:r}){let o=n===`Regular`,c=!!e.disabled,l=o?16:4,u=o?24:4,d=o?20:13,f=o?`24px`:`16px`,p=o?24:20,m=c?`#a9a9a9`:`#101010`;return(0,s.jsxs)(`div`,{style:{backgroundColor:`#ffffff`,width:`100%`},children:[(0,s.jsx)(`div`,{style:{height:1,backgroundColor:`#e1e1e1`,width:`100%`}}),(0,s.jsxs)(`button`,{type:`button`,disabled:c,"aria-expanded":t,className:`flex items-center justify-between w-full outline-none`,style:{paddingTop:l,paddingBottom:l,paddingLeft:0,paddingRight:0,background:`transparent`,border:`none`,cursor:c?`not-allowed`:`pointer`,width:`100%`,display:`flex`,alignItems:`center`,justifyContent:`space-between`},onClick:c?void 0:r,children:[(0,s.jsx)(`span`,{style:{fontFamily:`"Inter", sans-serif`,fontStyle:`normal`,fontSize:d,lineHeight:f,fontWeight:600,color:m,textAlign:`left`,flex:`1 0 0`,minWidth:1},children:e.label}),(0,s.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,flexShrink:0},children:t?(0,s.jsx)(a,{size:p,color:m}):(0,s.jsx)(i,{size:p,color:m})})]}),t&&!c&&(0,s.jsx)(`div`,{style:{width:`100%`,paddingBottom:u},children:e.content}),(0,s.jsx)(`div`,{style:{height:1,backgroundColor:`#e1e1e1`,width:`100%`}})]})}var s,c,l,u=e((()=>{s=r(),c=t(n()),l=c.forwardRef(({items:e,defaultOpen:t=[],multiple:n=!1,size:r=`Regular`,className:i=``},a)=>{let[l,u]=c.useState(t),d=e=>{u(t=>t.includes(e)?t.filter(t=>t!==e):n?[...t,e]:[e])};return(0,s.jsx)(`div`,{ref:a,className:i,style:{backgroundColor:`#ffffff`,width:`100%`},children:e.map(e=>(0,s.jsx)(o,{item:e,isOpen:l.includes(e.id),size:r,onToggle:()=>d(e.id)},e.id))})}),l.displayName=`Accordion`,l.__docgenInfo={description:``,methods:[],displayName:`Accordion`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`AccordionItem`}],raw:`AccordionItem[]`},description:`List of accordion items`},defaultOpen:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`IDs of initially open items`,defaultValue:{value:`[]`,computed:!1}},multiple:{required:!1,tsType:{name:`boolean`},description:`Allow multiple items open at once`,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'Regular' | 'Small'`,elements:[{name:`literal`,value:`'Regular'`},{name:`literal`,value:`'Small'`}]},description:``,defaultValue:{value:`'Regular'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}}));function d({text:e}){return(0,f.jsx)(`p`,{style:{fontFamily:`Inter, sans-serif`,fontSize:14,lineHeight:`20px`,color:`#303030`,margin:0},children:e})}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{f=r(),u(),p={fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#9ca3af`,marginBottom:12,marginTop:0},m=[{id:`limit`,label:`Limit search to:`,content:(0,f.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[`All files`,`Source files only`,`License files only`,`Copyright statements`].map(e=>(0,f.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:8,fontFamily:`Inter, sans-serif`,fontSize:14,color:`#101010`,cursor:`pointer`},children:[(0,f.jsx)(`input`,{type:`checkbox`,style:{width:16,height:16}}),e]},e))})},{id:`scanner`,label:`Scanner agents:`,content:(0,f.jsx)(d,{text:`Select which scanner agents to use: Monk, Nomos, OJO, Copyright, ECC, Keyword.`})},{id:`advanced`,label:`Advanced options:`,content:(0,f.jsx)(d,{text:`Configure advanced scan options including recursive directory scanning and file exclusion patterns.`})},{id:`disabled-item`,label:`Disabled section:`,content:(0,f.jsx)(d,{text:`This content is not accessible.`}),disabled:!0}],h=[{id:`license`,label:`License Detection`,content:(0,f.jsx)(d,{text:`FOSSology uses multiple scanner agents to detect software licenses. Monk performs exact text matching against known license templates. Nomos uses a rule-based approach. OJO looks for SPDX identifiers.`})},{id:`copyright`,label:`Copyright Analysis`,content:(0,f.jsx)(d,{text:`Copyright statements are extracted from source files using pattern matching. Results can be reviewed, edited, and cleared in the Copyright view.`})},{id:`ecc`,label:`Export Control & Compliance`,content:(0,f.jsx)(d,{text:`ECC scanning identifies cryptographic algorithms and export-controlled technology within uploaded software packages.`})}],g={title:`Components/Accordion`,component:l,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`The Accordion component allows users to expand and collapse sections of related content within a page. It is ideal for managing dense information in a compact space and improving page scannability.`}}},argTypes:{size:{control:`select`,options:[`Regular`,`Small`]},multiple:{control:`boolean`,description:`Allow multiple panels open simultaneously`}}},_={args:{items:m,defaultOpen:[],multiple:!1,size:`Regular`}},v={name:`📋 All Variants`,parameters:{layout:`padded`},render:()=>(0,f.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,display:`flex`,flexDirection:`column`,gap:40,maxWidth:840},children:[(0,f.jsxs)(`section`,{children:[(0,f.jsx)(`p`,{style:p,children:`Regular — all closed (default)`}),(0,f.jsx)(`div`,{style:{border:`1px solid #f0f0f0`,borderRadius:4,padding:24},children:(0,f.jsx)(l,{items:m,size:`Regular`})})]}),(0,f.jsxs)(`section`,{children:[(0,f.jsx)(`p`,{style:p,children:`Regular — first item open`}),(0,f.jsx)(`div`,{style:{border:`1px solid #f0f0f0`,borderRadius:4,padding:24},children:(0,f.jsx)(l,{items:m,size:`Regular`,defaultOpen:[`limit`]})})]}),(0,f.jsxs)(`section`,{children:[(0,f.jsx)(`p`,{style:p,children:`Regular — multiple open`}),(0,f.jsx)(`div`,{style:{border:`1px solid #f0f0f0`,borderRadius:4,padding:24},children:(0,f.jsx)(l,{items:h,size:`Regular`,defaultOpen:[`license`,`copyright`],multiple:!0})})]}),(0,f.jsxs)(`section`,{children:[(0,f.jsx)(`p`,{style:p,children:`Small — all closed`}),(0,f.jsx)(`div`,{style:{border:`1px solid #f0f0f0`,borderRadius:4,padding:24},children:(0,f.jsx)(l,{items:m,size:`Small`})})]}),(0,f.jsxs)(`section`,{children:[(0,f.jsx)(`p`,{style:p,children:`Small — first item open`}),(0,f.jsx)(`div`,{style:{border:`1px solid #f0f0f0`,borderRadius:4,padding:24},children:(0,f.jsx)(l,{items:m,size:`Small`,defaultOpen:[`limit`]})})]})]})},y={name:`Size / Regular`,render:()=>(0,f.jsx)(l,{items:h,size:`Regular`,defaultOpen:[`license`]})},b={name:`Size / Small`,render:()=>(0,f.jsx)(l,{items:m,size:`Small`,defaultOpen:[`limit`]})},x={name:`State / All closed`,render:()=>(0,f.jsx)(l,{items:h,size:`Regular`})},S={name:`State / First item open`,render:()=>(0,f.jsx)(l,{items:h,size:`Regular`,defaultOpen:[`license`]})},C={name:`State / Multiple items open`,render:()=>(0,f.jsx)(l,{items:h,size:`Regular`,defaultOpen:[`license`,`copyright`,`ecc`],multiple:!0})},w={name:`State / With disabled item`,render:()=>(0,f.jsx)(l,{items:m,size:`Regular`,defaultOpen:[`limit`]})},T={name:`In context — search filter panel`,parameters:{layout:`padded`},render:()=>(0,f.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,maxWidth:320,padding:24},children:[(0,f.jsx)(`h3`,{style:{fontSize:16,fontWeight:600,color:`#101010`,margin:`0 0 12px 0`},children:`Filter options`}),(0,f.jsx)(l,{items:m.filter(e=>!e.disabled),size:`Small`,defaultOpen:[`limit`]})]})},E={name:`In context — full-width content panel`,parameters:{layout:`padded`},render:()=>(0,f.jsx)(`div`,{style:{fontFamily:`Inter, sans-serif`,maxWidth:840,padding:24},children:(0,f.jsx)(l,{items:h,size:`Regular`,defaultOpen:[`license`],multiple:!0})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: SEARCH_ITEMS,
    defaultOpen: [],
    multiple: false,
    size: 'Regular'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '📋 All Variants',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    maxWidth: 840
  }}>

      <section>
        <p style={sectionLabel}>Regular — all closed (default)</p>
        <div style={{
        border: '1px solid #f0f0f0',
        borderRadius: 4,
        padding: 24
      }}>
          <Accordion items={SEARCH_ITEMS} size="Regular" />
        </div>
      </section>

      <section>
        <p style={sectionLabel}>Regular — first item open</p>
        <div style={{
        border: '1px solid #f0f0f0',
        borderRadius: 4,
        padding: 24
      }}>
          <Accordion items={SEARCH_ITEMS} size="Regular" defaultOpen={['limit']} />
        </div>
      </section>

      <section>
        <p style={sectionLabel}>Regular — multiple open</p>
        <div style={{
        border: '1px solid #f0f0f0',
        borderRadius: 4,
        padding: 24
      }}>
          <Accordion items={LONG_ITEMS} size="Regular" defaultOpen={['license', 'copyright']} multiple />
        </div>
      </section>

      <section>
        <p style={sectionLabel}>Small — all closed</p>
        <div style={{
        border: '1px solid #f0f0f0',
        borderRadius: 4,
        padding: 24
      }}>
          <Accordion items={SEARCH_ITEMS} size="Small" />
        </div>
      </section>

      <section>
        <p style={sectionLabel}>Small — first item open</p>
        <div style={{
        border: '1px solid #f0f0f0',
        borderRadius: 4,
        padding: 24
      }}>
          <Accordion items={SEARCH_ITEMS} size="Small" defaultOpen={['limit']} />
        </div>
      </section>

    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Size / Regular',
  render: () => <Accordion items={LONG_ITEMS} size="Regular" defaultOpen={['license']} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Size / Small',
  render: () => <Accordion items={SEARCH_ITEMS} size="Small" defaultOpen={['limit']} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'State / All closed',
  render: () => <Accordion items={LONG_ITEMS} size="Regular" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'State / First item open',
  render: () => <Accordion items={LONG_ITEMS} size="Regular" defaultOpen={['license']} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'State / Multiple items open',
  render: () => <Accordion items={LONG_ITEMS} size="Regular" defaultOpen={['license', 'copyright', 'ecc']} multiple />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'State / With disabled item',
  render: () => <Accordion items={SEARCH_ITEMS} size="Regular" defaultOpen={['limit']} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'In context — search filter panel',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    maxWidth: 320,
    padding: 24
  }}>
      <h3 style={{
      fontSize: 16,
      fontWeight: 600,
      color: '#101010',
      margin: '0 0 12px 0'
    }}>
        Filter options
      </h3>
      <Accordion items={SEARCH_ITEMS.filter(i => !i.disabled)} size="Small" defaultOpen={['limit']} />
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'In context — full-width content panel',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    maxWidth: 840,
    padding: 24
  }}>
      <Accordion items={LONG_ITEMS} size="Regular" defaultOpen={['license']} multiple />
    </div>
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`AllVariants`,`SizeRegular`,`SizeSmall`,`AllClosed`,`FirstOpen`,`MultipleOpen`,`WithDisabled`,`InContext`,`InContextLarge`]}))();export{x as AllClosed,v as AllVariants,S as FirstOpen,T as InContext,E as InContextLarge,C as MultipleOpen,_ as Playground,y as SizeRegular,b as SizeSmall,w as WithDisabled,D as __namedExportsOrder,g as default};