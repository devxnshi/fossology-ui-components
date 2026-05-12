import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-_seQZ5lc.js";var i,a,o,s,c=e((()=>{i=r(),a=t(n()),o=()=>(0,i.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,i.jsx)(`path`,{d:`M4 4L12 12M12 4L4 12`,stroke:`#004494`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),s=a.forwardRef(({label:e,type:t=`Primary`,forceState:n,iconSwap:r,onDismiss:s,disabled:c=!1,className:l=``},u)=>{let[d,f]=a.useState(!1),[p,m]=a.useState(!1),h=t===`Not interactive`,g=t===`Primary`,_=t===`Secondary`,v=!h,y=(n??(p&&!h&&!c?`Active`:d&&!h&&!c?`Hover`:`Default`))===`Active`,b;b=g?y?`#e2efff`:`#ededed`:h?`#ffffff`:`transparent`;let x=`none`;_?x=`1px solid ${y?`#004494`:`#616161`}`:h&&(x=`1px solid #e1e1e1`);let S=!h&&!c&&!n;return(0,i.jsxs)(`div`,{ref:u,role:h?void 0:`button`,tabIndex:h||c?void 0:0,className:[`inline-flex items-center justify-center overflow-hidden rounded-[4px]`,`select-none transition-colors duration-100`,v?`gap-[4px]`:``,l].filter(Boolean).join(` `),style:{paddingLeft:8,paddingRight:8,paddingTop:4,paddingBottom:4,backgroundColor:b,border:x,cursor:h||c?`default`:`pointer`,opacity:c?.4:1,pointerEvents:c?`none`:void 0},onMouseEnter:()=>{S&&f(!0)},onMouseLeave:()=>{f(!1),m(!1)},onMouseDown:()=>{S&&m(!0)},onMouseUp:()=>m(!1),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&S&&m(!0)},onKeyUp:()=>m(!1),children:[(0,i.jsx)(`span`,{style:{fontFamily:`"Inter", sans-serif`,fontStyle:`normal`,fontSize:14,lineHeight:`20px`,fontWeight:400,color:`#101010`,textAlign:`center`,whiteSpace:`nowrap`,flexShrink:0},children:e}),v&&(0,i.jsx)(`button`,{type:`button`,"aria-label":`Remove ${e}`,className:`inline-flex items-center justify-center outline-none p-0`,style:{width:16,height:16,background:`transparent`,border:`none`,cursor:c?`default`:`pointer`,flexShrink:0},onClick:e=>{e.stopPropagation(),!c&&!n&&s?.()},children:r??(0,i.jsx)(o,{})})]})}),s.displayName=`ChipTag`,s.__docgenInfo={description:``,methods:[],displayName:`ChipTag`,props:{label:{required:!0,tsType:{name:`string`},description:``},type:{required:!1,tsType:{name:`union`,raw:`'Primary' | 'Secondary' | 'Not interactive'`,elements:[{name:`literal`,value:`'Primary'`},{name:`literal`,value:`'Secondary'`},{name:`literal`,value:`'Not interactive'`}]},description:``,defaultValue:{value:`'Primary'`,computed:!1}},forceState:{required:!1,tsType:{name:`union`,raw:`'Default' | 'Hover' | 'Active'`,elements:[{name:`literal`,value:`'Default'`},{name:`literal`,value:`'Hover'`},{name:`literal`,value:`'Active'`}]},description:`Force a visual state — used in stories/docs to show all states statically`},iconSwap:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}}));function l({label:e,children:t}){return(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:24},children:[(0,u.jsx)(`span`,{style:{fontSize:14,color:`#101010`,width:80,flexShrink:0,fontFamily:`Inter, sans-serif`},children:e}),t]})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{u=r(),d=t(n()),c(),f={title:`Components/ChipTag`,component:s,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`The Chip component is a compact, interactive UI element used to display brief contextual information such as uploaded files, filters, or tags with the option to dismiss them. It helps users track actions, inputs, or status without overwhelming the interface.`}}},argTypes:{type:{control:`select`,options:[`Primary`,`Secondary`,`Not interactive`]},forceState:{control:`select`,options:[void 0,`Default`,`Hover`,`Active`]},label:{control:`text`},disabled:{control:`boolean`}}},p=`components.zip from 2025-07-30 01:40:48 (open)`,m=`components`,h={args:{label:p,type:`Primary`,disabled:!1},render:e=>(0,u.jsx)(s,{...e,onDismiss:()=>alert(`Dismissed: ${e.label}`)})},g={name:`📋 All Variants`,parameters:{layout:`padded`},render:()=>(0,u.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,display:`flex`,flexDirection:`column`,gap:40},children:[(0,u.jsxs)(`section`,{children:[(0,u.jsx)(`p`,{style:T,children:`Primary`}),(0,u.jsxs)(`div`,{style:E,children:[(0,u.jsx)(l,{label:`Default`,children:(0,u.jsx)(s,{type:`Primary`,label:p,forceState:`Default`})}),(0,u.jsx)(l,{label:`Hover`,children:(0,u.jsx)(s,{type:`Primary`,label:p,forceState:`Hover`})}),(0,u.jsx)(l,{label:`Active`,children:(0,u.jsx)(s,{type:`Primary`,label:p,forceState:`Active`})})]})]}),(0,u.jsxs)(`section`,{children:[(0,u.jsx)(`p`,{style:T,children:`Secondary`}),(0,u.jsxs)(`div`,{style:E,children:[(0,u.jsx)(l,{label:`Default`,children:(0,u.jsx)(s,{type:`Secondary`,label:p,forceState:`Default`})}),(0,u.jsx)(l,{label:`Hover`,children:(0,u.jsx)(s,{type:`Secondary`,label:p,forceState:`Hover`})}),(0,u.jsx)(l,{label:`Active`,children:(0,u.jsx)(s,{type:`Secondary`,label:p,forceState:`Active`})})]})]}),(0,u.jsxs)(`section`,{children:[(0,u.jsx)(`p`,{style:T,children:`Not interactive`}),(0,u.jsx)(`div`,{style:E,children:(0,u.jsx)(l,{label:`Default`,children:(0,u.jsx)(s,{type:`Not interactive`,label:m})})})]})]})},_={name:`Primary / Interactive`,render:()=>(0,u.jsx)(s,{type:`Primary`,label:p,onDismiss:()=>alert(`Dismissed`)})},v={name:`Primary / Disabled`,render:()=>(0,u.jsx)(s,{type:`Primary`,label:p,disabled:!0})},y={name:`Secondary / Interactive`,render:()=>(0,u.jsx)(s,{type:`Secondary`,label:p,onDismiss:()=>alert(`Dismissed`)})},b={name:`Secondary / Disabled`,render:()=>(0,u.jsx)(s,{type:`Secondary`,label:p,disabled:!0})},x={name:`Not interactive / Default`,render:()=>(0,u.jsx)(s,{type:`Not interactive`,label:m})},S={name:`State / Disabled — all types`,render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`,padding:16},children:[(0,u.jsx)(s,{type:`Primary`,label:p,disabled:!0}),(0,u.jsx)(s,{type:`Secondary`,label:p,disabled:!0}),(0,u.jsx)(s,{type:`Not interactive`,label:m,disabled:!0})]})},C={name:`Real world / Dismissible list`,parameters:{layout:`padded`},render:()=>{let[e,t]=d.useState([{id:`1`,label:`components.zip from 2025-07-30 01:40:48 (open)`},{id:`2`,label:`report.pdf from 2025-07-31 09:12:00 (open)`},{id:`3`,label:`license.txt from 2025-08-01 14:05:33 (open)`}]);return(0,u.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24},children:[(0,u.jsx)(`p`,{style:{fontSize:13,color:`#6b7280`,marginBottom:16,marginTop:0},children:`Click the × to dismiss chips.`}),(0,u.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8},children:[e.map(e=>(0,u.jsx)(s,{type:`Primary`,label:e.label,onDismiss:()=>t(t=>t.filter(t=>t.id!==e.id))},e.id)),e.length===0&&(0,u.jsx)(`span`,{style:{fontSize:14,color:`#9ca3af`},children:`All chips dismissed.`})]})]})}},w={name:`Real world / Mixed types`,parameters:{layout:`padded`},render:()=>(0,u.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,display:`flex`,flexWrap:`wrap`,gap:8},children:[(0,u.jsx)(s,{type:`Primary`,label:`upload.zip (open)`,onDismiss:()=>{}}),(0,u.jsx)(s,{type:`Secondary`,label:`filter: GPL-2.0`,onDismiss:()=>{}}),(0,u.jsx)(s,{type:`Not interactive`,label:`components`}),(0,u.jsx)(s,{type:`Primary`,label:`report.pdf (open)`,onDismiss:()=>{}}),(0,u.jsx)(s,{type:`Secondary`,label:`filter: MIT`,onDismiss:()=>{}}),(0,u.jsx)(s,{type:`Not interactive`,label:`fossology-4.5.1`})]})},T={fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#9ca3af`,marginBottom:12,marginTop:0},E={display:`flex`,flexDirection:`column`,gap:12,alignItems:`flex-start`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: CHIP_LABEL,
    type: 'Primary',
    disabled: false
  },
  render: args => <ChipTag {...args} onDismiss={() => alert(\`Dismissed: \${args.label}\`)} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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

      {/* PRIMARY */}
      <section>
        <p style={sectionLabel}>Primary</p>
        <div style={stateGrid}>
          <StateRow label="Default">
            <ChipTag type="Primary" label={CHIP_LABEL} forceState="Default" />
          </StateRow>
          <StateRow label="Hover">
            <ChipTag type="Primary" label={CHIP_LABEL} forceState="Hover" />
          </StateRow>
          <StateRow label="Active">
            <ChipTag type="Primary" label={CHIP_LABEL} forceState="Active" />
          </StateRow>
        </div>
      </section>

      {/* SECONDARY */}
      <section>
        <p style={sectionLabel}>Secondary</p>
        <div style={stateGrid}>
          <StateRow label="Default">
            <ChipTag type="Secondary" label={CHIP_LABEL} forceState="Default" />
          </StateRow>
          <StateRow label="Hover">
            <ChipTag type="Secondary" label={CHIP_LABEL} forceState="Hover" />
          </StateRow>
          <StateRow label="Active">
            <ChipTag type="Secondary" label={CHIP_LABEL} forceState="Active" />
          </StateRow>
        </div>
      </section>

      {/* NOT INTERACTIVE */}
      <section>
        <p style={sectionLabel}>Not interactive</p>
        <div style={stateGrid}>
          <StateRow label="Default">
            <ChipTag type="Not interactive" label={SHORT_LABEL} />
          </StateRow>
        </div>
      </section>

    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Interactive',
  render: () => <ChipTag type="Primary" label={CHIP_LABEL} onDismiss={() => alert('Dismissed')} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Disabled',
  render: () => <ChipTag type="Primary" label={CHIP_LABEL} disabled />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Secondary / Interactive',
  render: () => <ChipTag type="Secondary" label={CHIP_LABEL} onDismiss={() => alert('Dismissed')} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Secondary / Disabled',
  render: () => <ChipTag type="Secondary" label={CHIP_LABEL} disabled />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Not interactive / Default',
  render: () => <ChipTag type="Not interactive" label={SHORT_LABEL} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'State / Disabled — all types',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    padding: 16
  }}>
      <ChipTag type="Primary" label={CHIP_LABEL} disabled />
      <ChipTag type="Secondary" label={CHIP_LABEL} disabled />
      <ChipTag type="Not interactive" label={SHORT_LABEL} disabled />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Real world / Dismissible list',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [chips, setChips] = React.useState([{
      id: '1',
      label: 'components.zip from 2025-07-30 01:40:48 (open)'
    }, {
      id: '2',
      label: 'report.pdf from 2025-07-31 09:12:00 (open)'
    }, {
      id: '3',
      label: 'license.txt from 2025-08-01 14:05:33 (open)'
    }]);
    return <div style={{
      fontFamily: 'Inter, sans-serif',
      padding: 24
    }}>
        <p style={{
        fontSize: 13,
        color: '#6b7280',
        marginBottom: 16,
        marginTop: 0
      }}>
          Click the × to dismiss chips.
        </p>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }}>
          {chips.map(chip => <ChipTag key={chip.id} type="Primary" label={chip.label} onDismiss={() => setChips(prev => prev.filter(c => c.id !== chip.id))} />)}
          {chips.length === 0 && <span style={{
          fontSize: 14,
          color: '#9ca3af'
        }}>All chips dismissed.</span>}
        </div>
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Real world / Mixed types',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    padding: 24,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
  }}>
      <ChipTag type="Primary" label="upload.zip (open)" onDismiss={() => {}} />
      <ChipTag type="Secondary" label="filter: GPL-2.0" onDismiss={() => {}} />
      <ChipTag type="Not interactive" label="components" />
      <ChipTag type="Primary" label="report.pdf (open)" onDismiss={() => {}} />
      <ChipTag type="Secondary" label="filter: MIT" onDismiss={() => {}} />
      <ChipTag type="Not interactive" label="fossology-4.5.1" />
    </div>
}`,...w.parameters?.docs?.source}}},D=[`Playground`,`AllVariants`,`PrimaryInteractive`,`PrimaryDisabled`,`SecondaryInteractive`,`SecondaryDisabled`,`NotInteractiveDefault`,`DisabledAll`,`DismissibleList`,`MixedTypes`]}))();export{g as AllVariants,S as DisabledAll,C as DismissibleList,w as MixedTypes,x as NotInteractiveDefault,h as Playground,v as PrimaryDisabled,_ as PrimaryInteractive,b as SecondaryDisabled,y as SecondaryInteractive,D as __namedExportsOrder,f as default};