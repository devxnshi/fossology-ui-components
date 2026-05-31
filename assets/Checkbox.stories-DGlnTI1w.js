import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-D7K8adO_.js";var i,a,o,s,c,l,u=e((()=>{i=r(),a=t(n()),o=({size:e,state:t})=>{let n=e===`Medium`?18:16,r=t===`Active`,a=t===`Disabled`?`#A9A9A9`:r?`#004494`:`#616161`,o=r?`#004494`:`white`;return(0,i.jsxs)(`svg`,{width:n,height:n,viewBox:`0 0 ${n} ${n}`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0,pointerEvents:`none`},children:[(0,i.jsx)(`rect`,{x:`1`,y:`1`,width:n-2,height:n-2,rx:`2`,fill:o,stroke:a,strokeWidth:`1.5`}),r&&(0,i.jsx)(`polyline`,{points:e===`Medium`?`4.5,9.5 7.5,12.5 13.5,5.5`:`3.5,8.5 6.5,11.5 12.5,4.5`,fill:`none`,stroke:`white`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})]})},s=a.forwardRef(({size:e=`Medium`,state:t,checked:n,defaultChecked:r=!1,onChange:s,name:c,value:l,id:u,className:d=``,"aria-label":f},p)=>{let[m,h]=(0,a.useState)(r),g=n!==void 0,_=g?n:m,v=t===`Disabled`,y=v?`Disabled`:t===`Active`||_?`Active`:`Default`,b=e===`Medium`?32:24;return(0,i.jsxs)(`span`,{style:{width:b,height:b,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,flexShrink:0,cursor:v?`not-allowed`:`pointer`},className:d,children:[(0,i.jsx)(`input`,{ref:p,type:`checkbox`,name:c,value:l,id:u,checked:_,disabled:v,onChange:e=>{v||(g||h(e.target.checked),s?.(e.target.checked))},"aria-label":f,style:{position:`absolute`,opacity:0,width:0,height:0,margin:0,padding:0,border:0,appearance:`none`,WebkitAppearance:`none`,pointerEvents:`none`}}),(0,i.jsx)(o,{size:e,state:y})]})}),s.displayName=`Checkbox`,c=a.forwardRef(({label:e=`Label`,labelPosition:t=`Right`,state:n,checked:r,defaultChecked:o=!1,onChange:c,name:l,value:u,className:d=``},f)=>{let p=(0,a.useId)(),m=n===`Disabled`,h=t===`Top`||t===`Bottom`,g=(0,i.jsx)(`label`,{htmlFor:p,style:{cursor:m?`not-allowed`:`pointer`,userSelect:`none`},className:[`font-["Inter",sans-serif] font-normal text-[16px] leading-[24px] not-italic whitespace-nowrap`,m?`text-[#A9A9A9]`:`text-[#101010]`].join(` `),children:e}),_=(0,i.jsx)(s,{ref:f,size:`Medium`,state:n,checked:r,defaultChecked:o,onChange:c,name:l,value:u,id:p,"aria-label":e});return(0,i.jsxs)(`div`,{className:[`inline-flex items-center gap-[4px]`,h?`flex-col`:`flex-row`,d].filter(Boolean).join(` `),children:[(t===`Left`||t===`Top`)&&g,_,(t===`Right`||t===`Bottom`)&&g]})}),c.displayName=`CheckboxLabel`,l=({options:e,value:t,defaultValue:n=[],onChange:r,name:o,labelPosition:s=`Right`,orientation:l=`vertical`,className:u=``})=>{let[d,f]=(0,a.useState)(n),p=t??d,m=(e,t)=>{let n=t?[...p,e]:p.filter(t=>t!==e);f(n),r?.(n)};return(0,i.jsx)(`div`,{role:`group`,className:[`flex`,l===`horizontal`?`flex-row flex-wrap gap-[16px]`:`flex-col gap-[8px]`,u].filter(Boolean).join(` `),children:e.map(e=>(0,i.jsx)(c,{label:e.label,labelPosition:s,state:e.disabled?`Disabled`:void 0,checked:p.includes(e.value),onChange:t=>m(e.value,t),name:o,value:e.value},e.value))})},l.displayName=`CheckboxGroup`,s.__docgenInfo={description:``,methods:[],displayName:`Checkbox`,props:{size:{required:!1,tsType:{name:`union`,raw:`'Small' | 'Medium'`,elements:[{name:`literal`,value:`'Small'`},{name:`literal`,value:`'Medium'`}]},description:``,defaultValue:{value:`'Medium'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'Default' | 'Active' | 'Disabled'`,elements:[{name:`literal`,value:`'Default'`},{name:`literal`,value:`'Active'`},{name:`literal`,value:`'Disabled'`}]},description:`Visual state override — use for static story display.
 For interactive use, leave this unset and use checked/onChange.`},checked:{required:!1,tsType:{name:`boolean`},description:``},defaultChecked:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},name:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},id:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:``}}},c.__docgenInfo={description:``,methods:[],displayName:`CheckboxLabel`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Label'`,computed:!1}},labelPosition:{required:!1,tsType:{name:`union`,raw:`'Right' | 'Left' | 'Top' | 'Bottom'`,elements:[{name:`literal`,value:`'Right'`},{name:`literal`,value:`'Left'`},{name:`literal`,value:`'Top'`},{name:`literal`,value:`'Bottom'`}]},description:``,defaultValue:{value:`'Right'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'Default' | 'Active' | 'Disabled'`,elements:[{name:`literal`,value:`'Default'`},{name:`literal`,value:`'Active'`},{name:`literal`,value:`'Disabled'`}]},description:`Visual state override — for interactive use, leave unset`},checked:{required:!1,tsType:{name:`boolean`},description:``},defaultChecked:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},name:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},l.__docgenInfo={description:``,methods:[],displayName:`CheckboxGroup`,props:{options:{required:!0,tsType:{name:`Array`,elements:[{name:`CheckboxGroupOption`}],raw:`CheckboxGroupOption[]`},description:``},value:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},defaultValue:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`value`}],return:{name:`void`}}},description:``},name:{required:!1,tsType:{name:`string`},description:``},labelPosition:{required:!1,tsType:{name:`union`,raw:`'Right' | 'Left' | 'Top' | 'Bottom'`,elements:[{name:`literal`,value:`'Right'`},{name:`literal`,value:`'Left'`},{name:`literal`,value:`'Top'`},{name:`literal`,value:`'Bottom'`}]},description:``,defaultValue:{value:`'Right'`,computed:!1}},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),d,f,p,m,h,g,_,v,y,b,x;e((()=>{d=r(),f=t(n()),u(),p={title:`Components/Checkbox`,component:c,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`The checkbox component allows users to select one or more options from a list. Use checkboxes when multiple selections are allowed or when toggling individual settings on or off. States: Default (unchecked), Active (checked, blue), Disabled (non-interactive). Labels can be positioned to the right, left, top, or bottom.`}}},argTypes:{labelPosition:{control:`select`,options:[`Right`,`Left`,`Top`,`Bottom`]},state:{control:`select`,options:[void 0,`Default`,`Active`,`Disabled`]},label:{control:`text`}}},m={render:e=>{let[t,n]=(0,f.useState)(!1);return(0,d.jsx)(c,{...e,checked:t,onChange:n,state:e.state===`Disabled`?`Disabled`:void 0})},args:{label:`Label`,labelPosition:`Right`}},h={name:`📋 Checkbox Without Label — All States`,render:()=>(0,d.jsxs)(`table`,{className:`font-['Inter',sans-serif] border-separate border-spacing-x-8 border-spacing-y-5`,children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 text-left w-24`,children:`State`}),(0,d.jsx)(`th`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400`,children:`Small`}),(0,d.jsx)(`th`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400`,children:`Medium`})]})}),(0,d.jsxs)(`tbody`,{children:[(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`text-[14px] text-[#101010] align-middle`,children:`Default`}),(0,d.jsx)(`td`,{className:`align-middle`,children:(0,d.jsx)(s,{size:`Small`,state:`Default`,"aria-label":`small default`})}),(0,d.jsx)(`td`,{className:`align-middle`,children:(0,d.jsx)(s,{size:`Medium`,state:`Default`,"aria-label":`medium default`})})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`text-[14px] text-[#101010] align-middle`,children:`Active`}),(0,d.jsx)(`td`,{className:`align-middle`,children:(0,d.jsx)(s,{size:`Small`,state:`Active`,"aria-label":`small active`})}),(0,d.jsx)(`td`,{className:`align-middle`,children:(0,d.jsx)(s,{size:`Medium`,state:`Active`,"aria-label":`medium active`})})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`text-[14px] text-[#101010] align-middle`,children:`Disabled`}),(0,d.jsx)(`td`,{className:`align-middle`,children:(0,d.jsx)(s,{size:`Small`,state:`Disabled`,"aria-label":`small disabled`})}),(0,d.jsx)(`td`,{className:`align-middle`,children:(0,d.jsx)(s,{size:`Medium`,state:`Disabled`,"aria-label":`medium disabled`})})]})]})]})},g={name:`📋 Checkbox With Label — All States × All Positions`,render:()=>(0,d.jsx)(`div`,{className:`font-['Inter',sans-serif] space-y-10`,children:[`Default`,`Active`,`Disabled`].map(e=>(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`text-[14px] font-semibold text-[#101010] mb-4`,children:e}),(0,d.jsx)(`div`,{className:`flex items-start gap-16`,children:[`Right`,`Left`,`Top`,`Bottom`].map(t=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-1 items-start`,children:[(0,d.jsx)(`p`,{className:`text-[11px] text-gray-400`,children:t}),(0,d.jsx)(c,{label:`Label`,labelPosition:t,state:e})]},t))})]},e))})},_={name:`CheckboxGroup / Vertical (default)`,render:()=>{let[e,t]=(0,f.useState)([`option1`]);return(0,d.jsxs)(`div`,{className:`space-y-3 font-['Inter',sans-serif]`,children:[(0,d.jsx)(l,{name:`demo-v`,value:e,onChange:t,options:[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:`Option 3`,value:`option3`},{label:`Option 4 (disabled)`,value:`option4`,disabled:!0}]}),(0,d.jsxs)(`p`,{className:`text-xs text-gray-400`,children:[`Selected: [`,e.join(`, `),`]`]})]})}},v={name:`CheckboxGroup / Horizontal`,render:()=>{let[e,t]=(0,f.useState)([`a`]);return(0,d.jsxs)(`div`,{className:`space-y-3 font-['Inter',sans-serif]`,children:[(0,d.jsx)(l,{name:`demo-h`,value:e,onChange:t,orientation:`horizontal`,options:[{label:`Option A`,value:`a`},{label:`Option B`,value:`b`},{label:`Option C`,value:`c`}]}),(0,d.jsxs)(`p`,{className:`text-xs text-gray-400`,children:[`Selected: [`,e.join(`, `),`]`]})]})}},y={name:`Label Positions`,render:()=>(0,d.jsx)(`div`,{className:`flex flex-wrap gap-12 items-start font-['Inter',sans-serif]`,children:[`Right`,`Left`,`Top`,`Bottom`].map(e=>(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`text-[11px] text-gray-400 mb-3`,children:e}),(0,d.jsx)(c,{label:`Label`,labelPosition:e})]},e))})},b={name:`States — Default / Active / Disabled`,render:()=>(0,d.jsx)(`div`,{className:`flex gap-12 items-center font-['Inter',sans-serif]`,children:[`Default`,`Active`,`Disabled`].map(e=>(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(c,{label:`Label`,state:e}),(0,d.jsx)(`p`,{className:`text-[11px] text-gray-400`,children:e})]},e))})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <CheckboxLabel {...args} checked={checked} onChange={setChecked}
    // Only pass state if explicitly set to Disabled
    state={args.state === 'Disabled' ? 'Disabled' : undefined} />;
  },
  args: {
    label: 'Label',
    labelPosition: 'Right'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '📋 Checkbox Without Label — All States',
  render: () => <table className="font-['Inter',sans-serif] border-separate border-spacing-x-8 border-spacing-y-5">
      <thead>
        <tr>
          <th className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 text-left w-24">State</th>
          <th className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Small</th>
          <th className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Medium</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-[14px] text-[#101010] align-middle">Default</td>
          <td className="align-middle"><Checkbox size="Small" state="Default" aria-label="small default" /></td>
          <td className="align-middle"><Checkbox size="Medium" state="Default" aria-label="medium default" /></td>
        </tr>
        <tr>
          <td className="text-[14px] text-[#101010] align-middle">Active</td>
          <td className="align-middle"><Checkbox size="Small" state="Active" aria-label="small active" /></td>
          <td className="align-middle"><Checkbox size="Medium" state="Active" aria-label="medium active" /></td>
        </tr>
        <tr>
          <td className="text-[14px] text-[#101010] align-middle">Disabled</td>
          <td className="align-middle"><Checkbox size="Small" state="Disabled" aria-label="small disabled" /></td>
          <td className="align-middle"><Checkbox size="Medium" state="Disabled" aria-label="medium disabled" /></td>
        </tr>
      </tbody>
    </table>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '📋 Checkbox With Label — All States × All Positions',
  render: () => <div className="font-['Inter',sans-serif] space-y-10">
      {(['Default', 'Active', 'Disabled'] as const).map(state => <div key={state}>
          <p className="text-[14px] font-semibold text-[#101010] mb-4">{state}</p>
          <div className="flex items-start gap-16">
            {(['Right', 'Left', 'Top', 'Bottom'] as const).map(pos => <div key={pos} className="flex flex-col gap-1 items-start">
                <p className="text-[11px] text-gray-400">{pos}</p>
                <CheckboxLabel label="Label" labelPosition={pos} state={state} />
              </div>)}
          </div>
        </div>)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'CheckboxGroup / Vertical (default)',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['option1']);
    return <div className="space-y-3 font-['Inter',sans-serif]">
        <CheckboxGroup name="demo-v" value={selected} onChange={setSelected} options={[{
        label: 'Option 1',
        value: 'option1'
      }, {
        label: 'Option 2',
        value: 'option2'
      }, {
        label: 'Option 3',
        value: 'option3'
      }, {
        label: 'Option 4 (disabled)',
        value: 'option4',
        disabled: true
      }]} />
        <p className="text-xs text-gray-400">Selected: [{selected.join(', ')}]</p>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'CheckboxGroup / Horizontal',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['a']);
    return <div className="space-y-3 font-['Inter',sans-serif]">
        <CheckboxGroup name="demo-h" value={selected} onChange={setSelected} orientation="horizontal" options={[{
        label: 'Option A',
        value: 'a'
      }, {
        label: 'Option B',
        value: 'b'
      }, {
        label: 'Option C',
        value: 'c'
      }]} />
        <p className="text-xs text-gray-400">Selected: [{selected.join(', ')}]</p>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Label Positions',
  render: () => <div className="flex flex-wrap gap-12 items-start font-['Inter',sans-serif]">
      {(['Right', 'Left', 'Top', 'Bottom'] as const).map(pos => <div key={pos}>
          <p className="text-[11px] text-gray-400 mb-3">{pos}</p>
          <CheckboxLabel label="Label" labelPosition={pos} />
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'States — Default / Active / Disabled',
  render: () => <div className="flex gap-12 items-center font-['Inter',sans-serif]">
      {(['Default', 'Active', 'Disabled'] as const).map(state => <div key={state} className="flex flex-col items-center gap-2">
          <CheckboxLabel label="Label" state={state} />
          <p className="text-[11px] text-gray-400">{state}</p>
        </div>)}
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`WithoutLabel`,`WithLabel`,`GroupVertical`,`GroupHorizontal`,`LabelPositions`,`States`]}))();export{v as GroupHorizontal,_ as GroupVertical,y as LabelPositions,m as Playground,b as States,g as WithLabel,h as WithoutLabel,x as __namedExportsOrder,p as default};