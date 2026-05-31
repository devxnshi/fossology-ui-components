import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-D7K8adO_.js";function i({item:e,isActive:t,size:n,onSelect:r}){let[i,s]=o.useState(!1),c=n===`Regular`,l=!!e.disabled,u=c?8:4;return(0,a.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":t,"aria-disabled":l,disabled:l,className:`flex items-center shrink-0 outline-none select-none`,style:{paddingLeft:4,paddingRight:4,paddingTop:u,paddingBottom:u,borderBottom:t||i&&!l?`4px solid #004494`:`4px solid transparent`,borderRadius:t&&c?`4px 4px 0 0`:void 0,marginBottom:-4,background:`transparent`,borderTop:`none`,borderLeft:`none`,borderRight:`none`,cursor:l?`not-allowed`:`pointer`,opacity:1,position:`relative`,zIndex:+!!t},onClick:l?void 0:r,onMouseEnter:()=>!l&&!t&&s(!0),onMouseLeave:()=>s(!1),children:(0,a.jsx)(`span`,{style:{fontFamily:`"Inter", sans-serif`,fontStyle:`normal`,fontSize:14,lineHeight:`20px`,fontWeight:t?500:400,color:l?`#a9a9a9`:t?`#101010`:`#004494`,whiteSpace:`nowrap`},children:e.label})})}var a,o,s,c=e((()=>{a=r(),o=t(n()),s=o.forwardRef(({items:e,activeId:t,onTabChange:n,size:r=`Regular`,className:o=``},s)=>(0,a.jsx)(`div`,{ref:s,className:[`flex flex-col items-start overflow-hidden`,`rounded-tl-[4px] rounded-tr-[4px]`,o].filter(Boolean).join(` `),style:{paddingBottom:4},children:(0,a.jsx)(`div`,{role:`tablist`,"aria-label":`Tabs`,className:`flex items-center w-full`,style:{gap:16,borderBottom:`4px solid #cecece`},children:e.map(e=>(0,a.jsx)(i,{item:e,isActive:e.id===t,size:r,onSelect:()=>n(e.id)},e.id))})})),s.displayName=`Tabs`,s.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`TabItem`}],raw:`TabItem[]`},description:``},activeId:{required:!0,tsType:{name:`string`},description:``},onTabChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},size:{required:!1,tsType:{name:`union`,raw:`'Regular' | 'Small'`,elements:[{name:`literal`,value:`'Regular'`},{name:`literal`,value:`'Small'`}]},description:``,defaultValue:{value:`'Regular'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}}));function l(e){let[t,n]=d.useState(e.initialActiveId??e.items[0]?.id??``);return(0,u.jsx)(s,{...e,activeId:t,onTabChange:n})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{u=r(),d=t(n()),c(),f={fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#9ca3af`,marginBottom:12,marginTop:0},p={fontFamily:`Inter, sans-serif`,fontSize:14,lineHeight:`20px`,color:`#303030`,margin:0},m=[{id:`report`,label:`Report Settings`},{id:`spdx`,label:`SPDX Report Settings`},{id:`decision`,label:`Decision Settings`},{id:`copyright`,label:`Copyright Settings`},{id:`ecc`,label:`ECC Settings`}],h=[{id:`info`,label:`File Info`},{id:`licenses`,label:`Licenses`},{id:`ecc`,label:`ECC`},{id:`keyword`,label:`Keyword`},{id:`copyright`,label:`Copyright`},{id:`disabled`,label:`Disabled`,disabled:!0}],g=[{id:`summary`,label:`Summary`},{id:`license`,label:`License`},{id:`copyright`,label:`Copyright`}],_={title:`Components/Tabs`,component:s,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Tabs\xA0component is used to organize content into a set of layered sections, known as\xA0tab panels where only one panel is displayed at a time. It helps users navigate between related views or categories without leaving the current page, improving content accessibility and reducing visual clutter.`}}},argTypes:{size:{control:`select`,options:[`Regular`,`Small`]}}},v={args:{items:m,activeId:`report`,size:`Regular`},render:e=>(0,u.jsx)(l,{...e,initialActiveId:e.activeId})},y={name:`📋 All Variants`,parameters:{layout:`padded`},render:()=>(0,u.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,display:`flex`,flexDirection:`column`,gap:40},children:[(0,u.jsxs)(`section`,{children:[(0,u.jsx)(`p`,{style:{...f,marginBottom:4},children:`Tab items`}),(0,u.jsx)(`p`,{style:{fontSize:12,color:`#9ca3af`,marginBottom:16,marginTop:0},children:`Default / Hover / Active / Disabled — shown side by side`}),(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-end`,gap:0,borderBottom:`4px solid #cecece`},children:[(0,u.jsx)(`div`,{style:{paddingLeft:4,paddingRight:4,paddingTop:8,paddingBottom:8,borderBottom:`4px solid transparent`,marginBottom:-4},children:(0,u.jsx)(`span`,{style:{fontFamily:`Inter, sans-serif`,fontSize:14,lineHeight:`20px`,fontWeight:400,color:`#004494`,whiteSpace:`nowrap`},children:`File`})}),(0,u.jsx)(`div`,{style:{paddingLeft:4,paddingRight:4,paddingTop:8,paddingBottom:8,borderBottom:`4px solid #004494`,marginBottom:-4},children:(0,u.jsx)(`span`,{style:{fontFamily:`Inter, sans-serif`,fontSize:14,lineHeight:`20px`,fontWeight:400,color:`#004494`,whiteSpace:`nowrap`},children:`File (hover)`})}),(0,u.jsx)(`div`,{style:{paddingLeft:4,paddingRight:4,paddingTop:8,paddingBottom:8,borderBottom:`4px solid #004494`,marginBottom:-4,borderRadius:`4px 4px 0 0`},children:(0,u.jsx)(`span`,{style:{fontFamily:`Inter, sans-serif`,fontSize:14,lineHeight:`20px`,fontWeight:500,color:`#101010`,whiteSpace:`nowrap`},children:`File (active)`})}),(0,u.jsx)(`div`,{style:{paddingLeft:4,paddingRight:4,paddingTop:8,paddingBottom:8,borderBottom:`4px solid transparent`,marginBottom:-4,opacity:1},children:(0,u.jsx)(`span`,{style:{fontFamily:`Inter, sans-serif`,fontSize:14,lineHeight:`20px`,fontWeight:400,color:`#a9a9a9`,whiteSpace:`nowrap`},children:`File (disabled)`})})]})]}),(0,u.jsxs)(`section`,{children:[(0,u.jsx)(`p`,{style:f,children:`Tabs menu — Regular`}),(0,u.jsx)(l,{items:m,size:`Regular`,initialActiveId:`report`})]}),(0,u.jsxs)(`section`,{children:[(0,u.jsx)(`p`,{style:f,children:`Tabs menu — Regular (middle tab active)`}),(0,u.jsx)(l,{items:m,size:`Regular`,initialActiveId:`decision`})]}),(0,u.jsxs)(`section`,{children:[(0,u.jsx)(`p`,{style:f,children:`Tabs menu — Small`}),(0,u.jsx)(l,{items:m,size:`Small`,initialActiveId:`report`})]}),(0,u.jsxs)(`section`,{children:[(0,u.jsx)(`p`,{style:f,children:`With disabled tab`}),(0,u.jsx)(l,{items:h,size:`Regular`,initialActiveId:`info`})]})]})},b={name:`🔲 Tab item — all states`,render:()=>(0,u.jsx)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,display:`flex`,flexDirection:`column`,gap:16},children:[{label:`Default`,state:`default`},{label:`Active`,state:`active`},{label:`Disabled`,state:`disabled`}].map(({label:e,state:t})=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:24},children:[(0,u.jsx)(`span`,{style:{fontSize:14,color:`#101010`,width:80,flexShrink:0},children:e}),(0,u.jsx)(`div`,{style:{borderBottom:`4px solid #cecece`},children:(0,u.jsx)(s,{items:[{id:`tab`,label:`File`},...t===`disabled`?[]:[{id:`tab2`,label:`Other`}]],activeId:t===`active`?`tab`:`tab2`,size:`Regular`,onTabChange:()=>{}})})]},t))})},x={name:`Size / Regular`,render:()=>(0,u.jsx)(l,{items:m,size:`Regular`,initialActiveId:`report`})},S={name:`Size / Small`,render:()=>(0,u.jsx)(l,{items:m,size:`Small`,initialActiveId:`report`})},C={name:`State / First tab active`,render:()=>(0,u.jsx)(l,{items:m,size:`Regular`,initialActiveId:`report`})},w={name:`State / Middle tab active`,render:()=>(0,u.jsx)(l,{items:m,size:`Regular`,initialActiveId:`decision`})},T={name:`State / Last tab active`,render:()=>(0,u.jsx)(l,{items:m,size:`Regular`,initialActiveId:`ecc`})},E={name:`State / With disabled tab`,render:()=>(0,u.jsx)(l,{items:h,size:`Regular`,initialActiveId:`info`})},D={name:`Labels / Short`,render:()=>(0,u.jsx)(l,{items:g,size:`Regular`,initialActiveId:`summary`})},O={name:`Labels / Long (Figma spec)`,render:()=>(0,u.jsx)(l,{items:m,size:`Regular`,initialActiveId:`report`})},k={name:`In context — tabbed content panel`,parameters:{layout:`padded`},render:()=>{let[e,t]=d.useState(`report`);return(0,u.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,maxWidth:720},children:[(0,u.jsx)(s,{items:m,activeId:e,onTabChange:t,size:`Regular`}),(0,u.jsx)(`div`,{style:{border:`1px solid #cecece`,borderTop:`none`,padding:24,background:`#ffffff`},children:{report:(0,u.jsx)(`p`,{style:p,children:`Configure the report output format, author, and version details here.`}),spdx:(0,u.jsx)(`p`,{style:p,children:`SPDX-specific settings for license expression format and document namespace.`}),decision:(0,u.jsx)(`p`,{style:p,children:`Manage clearing decision defaults and bulk-action behavior.`}),copyright:(0,u.jsx)(`p`,{style:p,children:`Copyright statement extraction settings and filtering rules.`}),ecc:(0,u.jsx)(`p`,{style:p,children:`Export Control Compliance classification options.`})}[e]??(0,u.jsx)(`p`,{style:p,children:`No content.`})})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: REPORT_TABS,
    activeId: 'report',
    size: 'Regular'
  },
  render: args => <Stateful {...args} initialActiveId={args.activeId} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '📋 All Variants',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>

      {/* Tab Items — all states */}
      <section>
        <p style={{
        ...sectionLabel,
        marginBottom: 4
      }}>Tab items</p>
        <p style={{
        fontSize: 12,
        color: '#9ca3af',
        marginBottom: 16,
        marginTop: 0
      }}>
          Default / Hover / Active / Disabled — shown side by side
        </p>
        {/* Static display of all states */}
        <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: 0,
        borderBottom: '4px solid #cecece'
      }}>
          {/* Default */}
          <div style={{
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 8,
          paddingBottom: 8,
          borderBottom: '4px solid transparent',
          marginBottom: -4
        }}>
            <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: 400,
            color: '#004494',
            whiteSpace: 'nowrap'
          }}>
              File
            </span>
          </div>
          {/* Hover (forced) */}
          <div style={{
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 8,
          paddingBottom: 8,
          borderBottom: '4px solid #004494',
          marginBottom: -4
        }}>
            <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: 400,
            color: '#004494',
            whiteSpace: 'nowrap'
          }}>
              File (hover)
            </span>
          </div>
          {/* Active */}
          <div style={{
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 8,
          paddingBottom: 8,
          borderBottom: '4px solid #004494',
          marginBottom: -4,
          borderRadius: '4px 4px 0 0'
        }}>
            <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: 500,
            color: '#101010',
            whiteSpace: 'nowrap'
          }}>
              File (active)
            </span>
          </div>
          {/* Disabled */}
          <div style={{
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 8,
          paddingBottom: 8,
          borderBottom: '4px solid transparent',
          marginBottom: -4,
          opacity: 1
        }}>
            <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 14,
            lineHeight: '20px',
            fontWeight: 400,
            color: '#a9a9a9',
            whiteSpace: 'nowrap'
          }}>
              File (disabled)
            </span>
          </div>
        </div>
      </section>

      {/* Tabs menu — Regular */}
      <section>
        <p style={sectionLabel}>Tabs menu — Regular</p>
        <Stateful items={REPORT_TABS} size="Regular" initialActiveId="report" />
      </section>

      {/* Tabs menu — Regular, middle active */}
      <section>
        <p style={sectionLabel}>Tabs menu — Regular (middle tab active)</p>
        <Stateful items={REPORT_TABS} size="Regular" initialActiveId="decision" />
      </section>

      {/* Tabs menu — Small */}
      <section>
        <p style={sectionLabel}>Tabs menu — Small</p>
        <Stateful items={REPORT_TABS} size="Small" initialActiveId="report" />
      </section>

      {/* With disabled */}
      <section>
        <p style={sectionLabel}>With disabled tab</p>
        <Stateful items={FILE_TABS} size="Regular" initialActiveId="info" />
      </section>

    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '🔲 Tab item — all states',
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {([{
      label: 'Default',
      state: 'default'
    }, {
      label: 'Active',
      state: 'active'
    }, {
      label: 'Disabled',
      state: 'disabled'
    }] as const).map(({
      label,
      state
    }) => <div key={state} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }}>
          <span style={{
        fontSize: 14,
        color: '#101010',
        width: 80,
        flexShrink: 0
      }}>{label}</span>
          <div style={{
        borderBottom: '4px solid #cecece'
      }}>
            <Tabs items={[{
          id: 'tab',
          label: 'File'
        }, ...(state === 'disabled' ? [] : [{
          id: 'tab2',
          label: 'Other'
        }])]} activeId={state === 'active' ? 'tab' : 'tab2'} size="Regular" onTabChange={() => {}} />
          </div>
        </div>)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Size / Regular',
  render: () => <Stateful items={REPORT_TABS} size="Regular" initialActiveId="report" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Size / Small',
  render: () => <Stateful items={REPORT_TABS} size="Small" initialActiveId="report" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'State / First tab active',
  render: () => <Stateful items={REPORT_TABS} size="Regular" initialActiveId="report" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'State / Middle tab active',
  render: () => <Stateful items={REPORT_TABS} size="Regular" initialActiveId="decision" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'State / Last tab active',
  render: () => <Stateful items={REPORT_TABS} size="Regular" initialActiveId="ecc" />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'State / With disabled tab',
  render: () => <Stateful items={FILE_TABS} size="Regular" initialActiveId="info" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Labels / Short',
  render: () => <Stateful items={SHORT_TABS} size="Regular" initialActiveId="summary" />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Labels / Long (Figma spec)',
  render: () => <Stateful items={REPORT_TABS} size="Regular" initialActiveId="report" />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'In context — tabbed content panel',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [active, setActive] = React.useState('report');
    const content: Record<string, React.ReactNode> = {
      report: <p style={bodyText}>Configure the report output format, author, and version details here.</p>,
      spdx: <p style={bodyText}>SPDX-specific settings for license expression format and document namespace.</p>,
      decision: <p style={bodyText}>Manage clearing decision defaults and bulk-action behavior.</p>,
      copyright: <p style={bodyText}>Copyright statement extraction settings and filtering rules.</p>,
      ecc: <p style={bodyText}>Export Control Compliance classification options.</p>
    };
    return <div style={{
      fontFamily: 'Inter, sans-serif',
      maxWidth: 720
    }}>
        <Tabs items={REPORT_TABS} activeId={active} onTabChange={setActive} size="Regular" />
        <div style={{
        border: '1px solid #cecece',
        borderTop: 'none',
        padding: 24,
        background: '#ffffff'
      }}>
          {content[active] ?? <p style={bodyText}>No content.</p>}
        </div>
      </div>;
  }
}`,...k.parameters?.docs?.source}}},A=[`Playground`,`AllVariants`,`TabItemStates`,`SizeRegular`,`SizeSmall`,`FirstTabActive`,`MiddleTabActive`,`LastTabActive`,`WithDisabled`,`ShortLabels`,`LongLabels`,`InContext`]}))();export{y as AllVariants,C as FirstTabActive,k as InContext,T as LastTabActive,O as LongLabels,w as MiddleTabActive,v as Playground,D as ShortLabels,x as SizeRegular,S as SizeSmall,b as TabItemStates,E as WithDisabled,A as __namedExportsOrder,_ as default};