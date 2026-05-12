import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-_seQZ5lc.js";var i,a,o,s,c,l,u=e((()=>{i=r(),a=t(n()),o=({size:e,state:t})=>{let n=e===`Medium`?18:16,r=e===`Medium`?8:7,a=e===`Medium`?4:3.5,o=n/2,s=t===`Active`,c=t===`Disabled`?`#A9A9A9`:`#004494`;return(0,i.jsxs)(`svg`,{width:n,height:n,viewBox:`0 0 ${n} ${n}`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0,pointerEvents:`none`},children:[(0,i.jsx)(`circle`,{cx:o,cy:o,r:r-1,stroke:c,strokeWidth:`1.5`,fill:`white`}),s&&(0,i.jsx)(`circle`,{cx:o,cy:o,r:a,fill:c})]})},s=a.forwardRef(({size:e=`Medium`,state:t=`Default`,checked:n,defaultChecked:r,onChange:a,name:s,value:c,id:l,className:u=``,"aria-label":d},f)=>{let p=t===`Disabled`,m=e===`Medium`?32:24;return(0,i.jsxs)(`span`,{style:{width:m,height:m,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,flexShrink:0,cursor:p?`not-allowed`:`pointer`},className:u,children:[(0,i.jsx)(`input`,{ref:f,type:`radio`,name:s,value:c,id:l,checked:n,defaultChecked:r,disabled:p,onChange:e=>a?.(e.target.checked),"aria-label":d,style:{position:`absolute`,opacity:0,width:0,height:0,margin:0,padding:0,border:0,appearance:`none`,WebkitAppearance:`none`,pointerEvents:`none`}}),(0,i.jsx)(o,{size:e,state:p?`Disabled`:n?`Active`:t})]})}),s.displayName=`Radio`,c=a.forwardRef(({label:e=`Label`,labelPosition:t=`Right`,state:n=`Default`,checked:r,defaultChecked:o,onChange:c,name:l,value:u,className:d=``},f)=>{let p=(0,a.useId)(),m=n===`Disabled`,h=t===`Top`||t===`Bottom`,g=(0,i.jsx)(`label`,{htmlFor:p,style:{cursor:m?`not-allowed`:`pointer`,userSelect:`none`},className:[`font-["Inter",sans-serif] font-normal text-[16px] leading-[24px] not-italic`,m?`text-[#A9A9A9]`:`text-[#101010]`].join(` `),children:e}),_=(0,i.jsx)(s,{ref:f,size:`Medium`,state:n,checked:r,defaultChecked:o,onChange:c,name:l,value:u,id:p,"aria-label":e});return(0,i.jsxs)(`div`,{className:[`inline-flex items-center gap-[4px]`,h?`flex-col`:`flex-row`,d].filter(Boolean).join(` `),children:[(t===`Left`||t===`Top`)&&g,_,(t===`Right`||t===`Bottom`)&&g]})}),c.displayName=`RadioButton`,l=({options:e,value:t,defaultValue:n,onChange:r,name:o,labelPosition:s=`Right`,orientation:l=`vertical`,className:u=``})=>{let[d,f]=a.useState(n??``),p=t??d,m=(e,t)=>{t&&(f(e),r?.(e))};return(0,i.jsx)(`div`,{role:`radiogroup`,className:[`flex`,l===`horizontal`?`flex-row flex-wrap gap-[16px]`:`flex-col gap-[8px]`,u].filter(Boolean).join(` `),children:e.map(e=>(0,i.jsx)(c,{label:e.label,labelPosition:s,state:e.disabled?`Disabled`:p===e.value?`Active`:`Default`,checked:p===e.value,onChange:t=>m(e.value,t),name:o,value:e.value},e.value))})},l.displayName=`RadioGroup`,s.__docgenInfo={description:``,methods:[],displayName:`Radio`,props:{size:{required:!1,tsType:{name:`union`,raw:`'Small' | 'Medium'`,elements:[{name:`literal`,value:`'Small'`},{name:`literal`,value:`'Medium'`}]},description:``,defaultValue:{value:`'Medium'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'Default' | 'Active' | 'Disabled'`,elements:[{name:`literal`,value:`'Default'`},{name:`literal`,value:`'Active'`},{name:`literal`,value:`'Disabled'`}]},description:``,defaultValue:{value:`'Default'`,computed:!1}},checked:{required:!1,tsType:{name:`boolean`},description:``},defaultChecked:{required:!1,tsType:{name:`boolean`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},name:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},id:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:``}}},c.__docgenInfo={description:``,methods:[],displayName:`RadioButton`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Label'`,computed:!1}},labelPosition:{required:!1,tsType:{name:`union`,raw:`'Right' | 'Left' | 'Top' | 'Bottom'`,elements:[{name:`literal`,value:`'Right'`},{name:`literal`,value:`'Left'`},{name:`literal`,value:`'Top'`},{name:`literal`,value:`'Bottom'`}]},description:``,defaultValue:{value:`'Right'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'Default' | 'Active' | 'Disabled'`,elements:[{name:`literal`,value:`'Default'`},{name:`literal`,value:`'Active'`},{name:`literal`,value:`'Disabled'`}]},description:``,defaultValue:{value:`'Default'`,computed:!1}},checked:{required:!1,tsType:{name:`boolean`},description:``},defaultChecked:{required:!1,tsType:{name:`boolean`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},name:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},l.__docgenInfo={description:``,methods:[],displayName:`RadioGroup`,props:{options:{required:!0,tsType:{name:`Array`,elements:[{name:`RadioGroupOption`}],raw:`RadioGroupOption[]`},description:``},value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},name:{required:!1,tsType:{name:`string`},description:``},labelPosition:{required:!1,tsType:{name:`union`,raw:`'Right' | 'Left' | 'Top' | 'Bottom'`,elements:[{name:`literal`,value:`'Right'`},{name:`literal`,value:`'Left'`},{name:`literal`,value:`'Top'`},{name:`literal`,value:`'Bottom'`}]},description:``,defaultValue:{value:`'Right'`,computed:!1}},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),d,f,p,m,h,g,_,v,y,b;e((()=>{d=r(),f=t(n()),u(),p={title:`Components/Radio`,component:c,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`The radio button component allows users to select one option from a group of mutually exclusive choices. Use radio buttons when users must make a single selection from a short list of options. Labels can be positioned to the right, left, top, or bottom of the radio button, but right-aligned is the most standard.`}}},argTypes:{labelPosition:{control:`select`,options:[`Right`,`Left`,`Top`,`Bottom`]},state:{control:`select`,options:[`Default`,`Active`,`Disabled`]},label:{control:`text`}}},m={args:{label:`Label`,labelPosition:`Right`,state:`Default`}},h={name:`📋 Radio Without Label — All States`,render:()=>(0,d.jsxs)(`table`,{className:`font-['Inter',sans-serif] border-separate border-spacing-x-8 border-spacing-y-4`,children:[(0,d.jsx)(`thead`,{children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 text-left w-24`,children:`State`}),(0,d.jsx)(`th`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400`,children:`Small`}),(0,d.jsx)(`th`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400`,children:`Medium`})]})}),(0,d.jsx)(`tbody`,{children:[`Default`,`Active`,`Disabled`].map(e=>(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`text-[14px] text-black`,children:e}),(0,d.jsx)(`td`,{children:(0,d.jsx)(s,{size:`Small`,state:e,"aria-label":`Small ${e}`})}),(0,d.jsx)(`td`,{children:(0,d.jsx)(s,{size:`Medium`,state:e,"aria-label":`Medium ${e}`})})]},e))})]})},g={name:`📋 Radio With Label — All States × All Positions`,render:()=>(0,d.jsx)(`div`,{className:`font-['Inter',sans-serif] space-y-10`,children:[`Default`,`Active`,`Disabled`].map(e=>(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`text-[14px] font-semibold text-[#101010] mb-4`,children:e}),(0,d.jsxs)(`div`,{className:`flex items-start gap-16`,children:[(0,d.jsxs)(`div`,{className:`flex flex-col gap-1 items-start`,children:[(0,d.jsx)(`p`,{className:`text-[11px] text-gray-400`,children:`Right`}),(0,d.jsx)(c,{label:`Label`,labelPosition:`Right`,state:e})]}),(0,d.jsxs)(`div`,{className:`flex flex-col gap-1 items-start`,children:[(0,d.jsx)(`p`,{className:`text-[11px] text-gray-400`,children:`Left`}),(0,d.jsx)(c,{label:`Label`,labelPosition:`Left`,state:e})]}),(0,d.jsxs)(`div`,{className:`flex flex-col gap-1 items-start`,children:[(0,d.jsx)(`p`,{className:`text-[11px] text-gray-400`,children:`Top`}),(0,d.jsx)(c,{label:`Label`,labelPosition:`Top`,state:e})]}),(0,d.jsxs)(`div`,{className:`flex flex-col gap-1 items-start`,children:[(0,d.jsx)(`p`,{className:`text-[11px] text-gray-400`,children:`Bottom`}),(0,d.jsx)(c,{label:`Label`,labelPosition:`Bottom`,state:e})]})]})]},e))})},_={name:`RadioGroup / Vertical (default)`,render:()=>{let[e,t]=(0,f.useState)(`option1`);return(0,d.jsxs)(`div`,{className:`space-y-3`,children:[(0,d.jsx)(l,{name:`demo-v`,value:e,onChange:t,options:[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:`Option 3`,value:`option3`},{label:`Option 4 (disabled)`,value:`option4`,disabled:!0}]}),(0,d.jsxs)(`p`,{className:`text-xs text-gray-400`,children:[`Selected: `,e]})]})}},v={name:`RadioGroup / Horizontal`,render:()=>{let[e,t]=(0,f.useState)(`a`);return(0,d.jsxs)(`div`,{className:`space-y-3`,children:[(0,d.jsx)(l,{name:`demo-h`,value:e,onChange:t,orientation:`horizontal`,options:[{label:`Option A`,value:`a`},{label:`Option B`,value:`b`},{label:`Option C`,value:`c`}]}),(0,d.jsxs)(`p`,{className:`text-xs text-gray-400`,children:[`Selected: `,e]})]})}},y={name:`States — Default / Active / Disabled`,render:()=>(0,d.jsx)(`div`,{className:`flex gap-12 items-center font-['Inter',sans-serif]`,children:[`Default`,`Active`,`Disabled`].map(e=>(0,d.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,d.jsx)(c,{label:`Label`,state:e}),(0,d.jsx)(`p`,{className:`text-[11px] text-gray-400`,children:e})]},e))})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    labelPosition: 'Right',
    state: 'Default'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '📋 Radio Without Label — All States',
  render: () => <table className="font-['Inter',sans-serif] border-separate border-spacing-x-8 border-spacing-y-4">
      <thead>
        <tr>
          <th className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 text-left w-24">State</th>
          <th className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Small</th>
          <th className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">Medium</th>
        </tr>
      </thead>
      <tbody>
        {(['Default', 'Active', 'Disabled'] as const).map(state => <tr key={state}>
            <td className="text-[14px] text-black">{state}</td>
            <td><Radio size="Small" state={state} aria-label={\`Small \${state}\`} /></td>
            <td><Radio size="Medium" state={state} aria-label={\`Medium \${state}\`} /></td>
          </tr>)}
      </tbody>
    </table>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '📋 Radio With Label — All States × All Positions',
  render: () => <div className="font-['Inter',sans-serif] space-y-10">
      {(['Default', 'Active', 'Disabled'] as const).map(state => <div key={state}>
          <p className="text-[14px] font-semibold text-[#101010] mb-4">{state}</p>
          <div className="flex items-start gap-16">
            <div className="flex flex-col gap-1 items-start">
              <p className="text-[11px] text-gray-400">Right</p>
              <RadioButton label="Label" labelPosition="Right" state={state} />
            </div>
            <div className="flex flex-col gap-1 items-start">
              <p className="text-[11px] text-gray-400">Left</p>
              <RadioButton label="Label" labelPosition="Left" state={state} />
            </div>
            <div className="flex flex-col gap-1 items-start">
              <p className="text-[11px] text-gray-400">Top</p>
              <RadioButton label="Label" labelPosition="Top" state={state} />
            </div>
            <div className="flex flex-col gap-1 items-start">
              <p className="text-[11px] text-gray-400">Bottom</p>
              <RadioButton label="Label" labelPosition="Bottom" state={state} />
            </div>
          </div>
        </div>)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'RadioGroup / Vertical (default)',
  render: () => {
    const [val, setVal] = useState('option1');
    return <div className="space-y-3">
        <RadioGroup name="demo-v" value={val} onChange={setVal} options={[{
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
        <p className="text-xs text-gray-400">Selected: {val}</p>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'RadioGroup / Horizontal',
  render: () => {
    const [val, setVal] = useState('a');
    return <div className="space-y-3">
        <RadioGroup name="demo-h" value={val} onChange={setVal} orientation="horizontal" options={[{
        label: 'Option A',
        value: 'a'
      }, {
        label: 'Option B',
        value: 'b'
      }, {
        label: 'Option C',
        value: 'c'
      }]} />
        <p className="text-xs text-gray-400">Selected: {val}</p>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'States — Default / Active / Disabled',
  render: () => <div className="flex gap-12 items-center font-['Inter',sans-serif]">
      {(['Default', 'Active', 'Disabled'] as const).map(state => <div key={state} className="flex flex-col items-center gap-2">
          <RadioButton label="Label" state={state} />
          <p className="text-[11px] text-gray-400">{state}</p>
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`WithoutLabel`,`WithLabel`,`GroupVertical`,`GroupHorizontal`,`States`]}))();export{v as GroupHorizontal,_ as GroupVertical,m as Playground,y as States,g as WithLabel,h as WithoutLabel,b as __namedExportsOrder,p as default};