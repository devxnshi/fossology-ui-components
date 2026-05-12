import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-H6Kf-PS5.js";function i({option:e,isActive:t,height:n,py:r,onSelect:i}){let o=t?`#ffffff`:`transparent`,s=t?`1px solid #004494`:`none`;return(0,a.jsx)(`button`,{type:`button`,role:`radio`,"aria-checked":t,"aria-label":e.label,className:`flex items-center justify-center shrink-0 outline-none select-none`,style:{height:n,paddingLeft:12,paddingRight:12,paddingTop:r,paddingBottom:r,backgroundColor:o,border:s,borderRadius:4,cursor:`pointer`,zIndex:t?2:1},onClick:i,children:(0,a.jsx)(`span`,{style:{fontFamily:`"Inter", sans-serif`,fontStyle:`normal`,fontSize:14,lineHeight:`20px`,fontWeight:t?500:400,color:t?`#004494`:`#303030`,textAlign:`center`,whiteSpace:`nowrap`,flexShrink:0},children:e.label})})}var a,o,s,c=e((()=>{a=r(),o=t(n()),s=o.forwardRef(({options:e,value:t,onChange:n,size:r=`Small`,disabled:o=!1,className:s=``},c)=>{let l=r===`Regular`,u=l?40:32,d=l?8:6;return(0,a.jsx)(`div`,{ref:c,className:[`inline-flex items-center gap-[2px] rounded-[4px] overflow-hidden`,s].filter(Boolean).join(` `),style:{backgroundColor:`#ededed`,height:u,opacity:o?.4:1,pointerEvents:o?`none`:void 0},role:`group`,"aria-label":`Toggle switch`,children:e.map(e=>(0,a.jsx)(i,{option:e,isActive:e.value===t,height:u,py:d,onSelect:()=>!o&&n(e.value)},e.value))})}),s.displayName=`ButtonSwitch`,s.__docgenInfo={description:``,methods:[],displayName:`ButtonSwitch`,props:{options:{required:!0,tsType:{name:`tuple`,raw:`[ButtonSwitchOption, ButtonSwitchOption]`,elements:[{name:`ButtonSwitchOption`},{name:`ButtonSwitchOption`}]},description:`The two options to toggle between`},value:{required:!0,tsType:{name:`string`},description:`Currently selected value`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called when the user selects an option`},size:{required:!1,tsType:{name:`union`,raw:`'Regular' | 'Small'`,elements:[{name:`literal`,value:`'Regular'`},{name:`literal`,value:`'Small'`}]},description:``,defaultValue:{value:`'Small'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}}));function l(e){let[t,n]=f.useState(e.initialValue??e.options[0].value);return(0,d.jsx)(s,{...e,value:t,onChange:n})}function u({label:e,children:t}){return(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:24},children:[(0,d.jsx)(`span`,{style:{fontSize:14,color:`#101010`,width:120,flexShrink:0,fontFamily:`Inter, sans-serif`},children:e}),t]})}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{d=r(),f=t(n()),c(),p={title:`Components/ButtonSwitch`,component:s,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`The Button Switch component allows users to toggle between two mutually exclusive options within a defined scope. It presents choices as paired buttons, where selecting one deactivates the other, making it ideal for switching between modes, views, or contexts such as upload targets, filter ranges, or display preferences.`}}},argTypes:{size:{control:`select`,options:[`Regular`,`Small`]},disabled:{control:`boolean`}}},m=[{value:`whole`,label:`Whole Upload`},{value:`folder`,label:`Current Folder`}],h=[{value:`list`,label:`List View`},{value:`grid`,label:`Grid View`}],g=[{value:`quick`,label:`Quick Scan`},{value:`deep`,label:`Deep Scan`}],_={args:{options:m,value:`whole`,size:`Small`,disabled:!1},render:e=>(0,d.jsx)(l,{...e,initialValue:e.value})},v={name:`📋 All Variants`,parameters:{layout:`padded`},render:()=>(0,d.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,display:`flex`,flexDirection:`column`,gap:40},children:[(0,d.jsxs)(`section`,{children:[(0,d.jsx)(`p`,{style:O,children:`Small (32px)`}),(0,d.jsxs)(`div`,{style:k,children:[(0,d.jsx)(u,{label:`First active`,children:(0,d.jsx)(l,{options:m,size:`Small`,initialValue:`whole`})}),(0,d.jsx)(u,{label:`Second active`,children:(0,d.jsx)(l,{options:m,size:`Small`,initialValue:`folder`})}),(0,d.jsx)(u,{label:`Disabled`,children:(0,d.jsx)(s,{options:m,value:`whole`,size:`Small`,onChange:()=>{},disabled:!0})})]})]}),(0,d.jsxs)(`section`,{children:[(0,d.jsx)(`p`,{style:O,children:`Regular (40px)`}),(0,d.jsxs)(`div`,{style:k,children:[(0,d.jsx)(u,{label:`First active`,children:(0,d.jsx)(l,{options:m,size:`Regular`,initialValue:`whole`})}),(0,d.jsx)(u,{label:`Second active`,children:(0,d.jsx)(l,{options:m,size:`Regular`,initialValue:`folder`})}),(0,d.jsx)(u,{label:`Disabled`,children:(0,d.jsx)(s,{options:m,value:`whole`,size:`Regular`,onChange:()=>{},disabled:!0})})]})]})]})},y={name:`Size / Small (32px)`,render:()=>(0,d.jsx)(l,{options:m,size:`Small`,initialValue:`whole`})},b={name:`Size / Regular (40px)`,render:()=>(0,d.jsx)(l,{options:m,size:`Regular`,initialValue:`whole`})},x={name:`State / First option active`,render:()=>(0,d.jsx)(l,{options:m,size:`Small`,initialValue:`whole`})},S={name:`State / Second option active`,render:()=>(0,d.jsx)(l,{options:m,size:`Small`,initialValue:`folder`})},C={name:`State / Disabled`,render:()=>(0,d.jsx)(s,{options:m,value:`whole`,size:`Small`,onChange:()=>{},disabled:!0})},w={name:`Labels / Whole Upload ↔ Current Folder`,render:()=>(0,d.jsx)(l,{options:m,size:`Small`,initialValue:`whole`})},T={name:`Labels / List View ↔ Grid View`,render:()=>(0,d.jsx)(l,{options:h,size:`Small`,initialValue:`list`})},E={name:`Labels / Quick Scan ↔ Deep Scan`,render:()=>(0,d.jsx)(l,{options:g,size:`Small`,initialValue:`quick`})},D={name:`In context — inside a form`,parameters:{layout:`padded`},render:()=>{let[e,t]=f.useState(`whole`);return(0,d.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,maxWidth:480},children:[(0,d.jsx)(`p`,{style:{fontSize:14,color:`#303030`,marginBottom:16,marginTop:0,lineHeight:`20px`},children:`Select scan scope:`}),(0,d.jsx)(s,{options:m,value:e,size:`Regular`,onChange:t}),(0,d.jsxs)(`p`,{style:{fontSize:13,color:`#9ca3af`,marginTop:12,marginBottom:0},children:[`Selected: `,(0,d.jsx)(`strong`,{style:{color:`#004494`},children:e})]})]})}},O={fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#9ca3af`,marginBottom:12,marginTop:0},k={display:`flex`,flexDirection:`column`,gap:16},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    options: UPLOAD_OPTIONS,
    value: 'whole',
    size: 'Small',
    disabled: false
  },
  render: args => <Stateful {...args} initialValue={args.value} />
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
    gap: 40
  }}>

      {/* Small */}
      <section>
        <p style={sectionLabel}>Small (32px)</p>
        <div style={stateGrid}>
          <StateRow label="First active">
            <Stateful options={UPLOAD_OPTIONS} size="Small" initialValue="whole" />
          </StateRow>
          <StateRow label="Second active">
            <Stateful options={UPLOAD_OPTIONS} size="Small" initialValue="folder" />
          </StateRow>
          <StateRow label="Disabled">
            <ButtonSwitch options={UPLOAD_OPTIONS} value="whole" size="Small" onChange={() => {}} disabled />
          </StateRow>
        </div>
      </section>

      {/* Regular */}
      <section>
        <p style={sectionLabel}>Regular (40px)</p>
        <div style={stateGrid}>
          <StateRow label="First active">
            <Stateful options={UPLOAD_OPTIONS} size="Regular" initialValue="whole" />
          </StateRow>
          <StateRow label="Second active">
            <Stateful options={UPLOAD_OPTIONS} size="Regular" initialValue="folder" />
          </StateRow>
          <StateRow label="Disabled">
            <ButtonSwitch options={UPLOAD_OPTIONS} value="whole" size="Regular" onChange={() => {}} disabled />
          </StateRow>
        </div>
      </section>

    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Size / Small (32px)',
  render: () => <Stateful options={UPLOAD_OPTIONS} size="Small" initialValue="whole" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Size / Regular (40px)',
  render: () => <Stateful options={UPLOAD_OPTIONS} size="Regular" initialValue="whole" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'State / First option active',
  render: () => <Stateful options={UPLOAD_OPTIONS} size="Small" initialValue="whole" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'State / Second option active',
  render: () => <Stateful options={UPLOAD_OPTIONS} size="Small" initialValue="folder" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'State / Disabled',
  render: () => <ButtonSwitch options={UPLOAD_OPTIONS} value="whole" size="Small" onChange={() => {}} disabled />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Labels / Whole Upload ↔ Current Folder',
  render: () => <Stateful options={UPLOAD_OPTIONS} size="Small" initialValue="whole" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Labels / List View ↔ Grid View',
  render: () => <Stateful options={VIEW_OPTIONS} size="Small" initialValue="list" />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Labels / Quick Scan ↔ Deep Scan',
  render: () => <Stateful options={SCAN_OPTIONS} size="Small" initialValue="quick" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'In context — inside a form',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [scope, setScope] = React.useState('whole');
    return <div style={{
      fontFamily: 'Inter, sans-serif',
      padding: 24,
      maxWidth: 480
    }}>
        <p style={{
        fontSize: 14,
        color: '#303030',
        marginBottom: 16,
        marginTop: 0,
        lineHeight: '20px'
      }}>
          Select scan scope:
        </p>
        <ButtonSwitch options={UPLOAD_OPTIONS} value={scope} size="Regular" onChange={setScope} />
        <p style={{
        fontSize: 13,
        color: '#9ca3af',
        marginTop: 12,
        marginBottom: 0
      }}>
          Selected: <strong style={{
          color: '#004494'
        }}>{scope}</strong>
        </p>
      </div>;
  }
}`,...D.parameters?.docs?.source}}},A=[`Playground`,`AllVariants`,`SizeSmall`,`SizeRegular`,`FirstActive`,`SecondActive`,`DisabledState`,`UploadSwitch`,`ViewSwitch`,`ScanSwitch`,`InContext`]}))();export{v as AllVariants,C as DisabledState,x as FirstActive,D as InContext,_ as Playground,E as ScanSwitch,S as SecondActive,b as SizeRegular,y as SizeSmall,w as UploadSwitch,T as ViewSwitch,A as __namedExportsOrder,p as default};