import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-_seQZ5lc.js";var i,a,o,s=e((()=>{i=r(),a=t(n()),o=a.forwardRef(({label:e=`Your description`,helperText:t,button:n=!1,buttonLabel:r=`Button text`,state:o=`Default`,placeholder:s=`Type your description here`,value:c,defaultValue:l,onChange:u,onButtonClick:d,rows:f=3,fullWidth:p=!1,className:m=``,id:h},g)=>{let _=(0,a.useId)(),v=h??_,y=o===`Disabled`,b=o===`Active`,x=typeof e==`string`?e:e?`Your description`:null,S=!!x,C=typeof t==`string`?t:t?`Helper text`:null,w=!!C&&!n,T=n,E=y?`border-[#CECECE]`:b?`border-[#004494]`:`border-[#616161]`,D=b?{boxShadow:`0px 0px 3px 0px rgba(0,68,148,0.25)`}:{},O=y?`text-[#A9A9A9]`:b?`text-[#303030]`:`text-[#616161]`,k=y?`text-[#A9A9A9]`:`text-[#101010]`;return(0,i.jsxs)(`div`,{className:[`flex flex-col gap-[4px]`,p?`w-full`:`w-[360px]`,m].filter(Boolean).join(` `),children:[S&&(0,i.jsx)(`label`,{htmlFor:v,className:[`font-["Inter",sans-serif] font-normal text-[14px] leading-[20px] not-italic shrink-0`,k,y?`cursor-not-allowed`:`cursor-default`].join(` `),children:x}),(0,i.jsx)(`textarea`,{ref:g,id:v,disabled:y,value:c,defaultValue:l,placeholder:s,rows:f,onChange:e=>u?.(e.target.value),className:[`w-full resize-y rounded-[4px] border border-solid`,`px-[12px] py-[8px]`,`font-["Inter",sans-serif] font-normal text-[14px] leading-[20px] not-italic`,`min-h-[40px]`,`bg-white outline-none`,`transition-colors duration-150`,`placeholder:font-["Inter",sans-serif] placeholder:font-normal placeholder:text-[14px]`,E,O,y?`cursor-not-allowed placeholder:text-[#A9A9A9]`:`cursor-text focus:border-[#004494] placeholder:text-[#616161]`].filter(Boolean).join(` `),style:D}),w&&(0,i.jsx)(`p`,{className:[`font-["Inter",sans-serif] font-normal text-[12px] leading-[16px] not-italic w-full`,y?`text-[#E1F5FE]`:`text-[#00669D]`].join(` `),children:C}),T&&(0,i.jsx)(`button`,{type:`button`,disabled:y,onClick:d,className:[`inline-flex items-center justify-center self-start`,`h-[40px] px-[16px] py-[8px] rounded-[4px]`,`font-["Inter",sans-serif] font-medium text-[16px] leading-[24px] not-italic`,`text-white whitespace-nowrap`,`transition-colors duration-150 outline-none`,y?`bg-[#B0C4DE] cursor-not-allowed`:`bg-[#004494] hover:bg-[#000B54] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#004494] focus-visible:ring-offset-2`].filter(Boolean).join(` `),children:r})]})}),o.displayName=`DescriptionTextField`,o.__docgenInfo={description:``,methods:[],displayName:`DescriptionTextField`,props:{label:{required:!1,tsType:{name:`union`,raw:`string | boolean`,elements:[{name:`string`},{name:`boolean`}]},description:`Field label — hidden when false`,defaultValue:{value:`'Your description'`,computed:!1}},helperText:{required:!1,tsType:{name:`union`,raw:`string | boolean`,elements:[{name:`string`},{name:`boolean`}]},description:`Helper text below the textarea`},button:{required:!1,tsType:{name:`boolean`},description:`Show a primary action button below the textarea`,defaultValue:{value:`false`,computed:!1}},buttonLabel:{required:!1,tsType:{name:`string`},description:`Button label`,defaultValue:{value:`'Button text'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'Default' | 'Active' | 'Disabled'`,elements:[{name:`literal`,value:`'Default'`},{name:`literal`,value:`'Active'`},{name:`literal`,value:`'Disabled'`}]},description:`Interaction state`,defaultValue:{value:`'Default'`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text inside the textarea`,defaultValue:{value:`'Type your description here'`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:`Controlled value`},defaultValue:{required:!1,tsType:{name:`string`},description:`Default uncontrolled value`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onButtonClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},rows:{required:!1,tsType:{name:`number`},description:`Number of visible rows`,defaultValue:{value:`3`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`Full width or fixed 360px`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},id:{required:!1,tsType:{name:`string`},description:``}}}})),c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{c=r(),l=t(n()),s(),u={title:`Components/DescriptionTextField`,component:o,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`This Description Text Field is a multi-line input component used for capturing extended user input, such as comments, descriptions, or additional details. It supports longer text entries compared to standard single-line input fields and is commonly used in forms, file metadata panels, or dialog boxes.`}}},argTypes:{state:{control:`select`,options:[`Default`,`Active`,`Disabled`]},label:{control:`text`},helperText:{control:`text`},button:{control:`boolean`},fullWidth:{control:`boolean`},placeholder:{control:`text`}}},d={args:{label:`Your description`,placeholder:`Type your description here`,helperText:`Helper text`,button:!1,state:`Default`}},f={name:`📋 All Variants — as in Figma`,parameters:{layout:`padded`},render:()=>(0,c.jsxs)(`div`,{className:`font-['Inter',sans-serif] flex flex-wrap gap-x-8 gap-y-8`,children:[(0,c.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,c.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400`,children:`With Helper Text`}),(0,c.jsx)(o,{label:`Your description`,helperText:`Helper text`,state:`Default`,placeholder:`Type your description here`}),(0,c.jsx)(o,{label:`Your description`,helperText:`Helper text`,state:`Active`,placeholder:`Type your description here`}),(0,c.jsx)(o,{label:`Your description`,helperText:`Helper text`,state:`Disabled`,placeholder:`Type your description here`})]}),(0,c.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,c.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400`,children:`With Button (flexible — hugs text)`}),(0,c.jsx)(o,{label:`Your description`,button:!0,state:`Default`,placeholder:`Type your description here`}),(0,c.jsx)(o,{label:`Your description`,button:!0,state:`Active`,placeholder:`Type your description here`}),(0,c.jsx)(o,{label:`Your description`,button:!0,state:`Disabled`,placeholder:`Type your message here`})]}),(0,c.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,c.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400`,children:`Label only`}),(0,c.jsx)(o,{label:`Your description`,state:`Default`,placeholder:`Type your description here`}),(0,c.jsx)(o,{label:`Your description`,state:`Active`,placeholder:`Type your description here`}),(0,c.jsx)(o,{label:`Your description`,state:`Disabled`,placeholder:`Type your description here`})]}),(0,c.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,c.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400`,children:`No Label`}),(0,c.jsx)(o,{label:!1,state:`Default`,placeholder:`Type your description here`}),(0,c.jsx)(o,{label:!1,state:`Active`,placeholder:`Type your description here`}),(0,c.jsx)(o,{label:!1,state:`Disabled`,placeholder:`Type your description here`})]})]})},p={name:`State / Default`,args:{label:`Your description`,helperText:`Helper text`,state:`Default`,placeholder:`Type your description here`}},m={name:`State / Active`,args:{label:`Your description`,helperText:`Helper text`,state:`Active`,placeholder:`Type your description here`}},h={name:`State / Disabled`,args:{label:`Your description`,helperText:`Helper text`,state:`Disabled`,placeholder:`Type your description here`}},g={name:`With Button`,render:()=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-6 font-['Inter',sans-serif]`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`p`,{className:`text-[11px] text-gray-400 mb-2`,children:`Default`}),(0,c.jsx)(o,{label:`Your description`,button:!0,state:`Default`,placeholder:`Type your description here`})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`p`,{className:`text-[11px] text-gray-400 mb-2`,children:`Active`}),(0,c.jsx)(o,{label:`Your description`,button:!0,state:`Active`,placeholder:`Type your description here`})]}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`p`,{className:`text-[11px] text-gray-400 mb-2`,children:`Disabled`}),(0,c.jsx)(o,{label:`Your description`,button:!0,state:`Disabled`,placeholder:`Type your message here`})]})]})},_={name:`Without Label`,args:{label:!1,state:`Default`,placeholder:`Type your description here`}},v={name:`Interactive — live character count`,render:()=>{let[e,t]=(0,l.useState)(``);return(0,c.jsx)(o,{label:`Your description`,helperText:`${e.length} / 500 characters`,placeholder:`Type your description here`,value:e,onChange:t})}},y={name:`Full Width`,args:{label:`Your description`,helperText:`Helper text`,state:`Default`,placeholder:`Type your description here`,fullWidth:!0}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Your description',
    placeholder: 'Type your description here',
    helperText: 'Helper text',
    button: false,
    state: 'Default'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '📋 All Variants — as in Figma',
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="font-['Inter',sans-serif] flex flex-wrap gap-x-8 gap-y-8">

      {/* ── Column 1: With Helper Text ── */}
      <div className="flex flex-col gap-6">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
          With Helper Text
        </p>
        <DescriptionTextField label="Your description" helperText="Helper text" state="Default" placeholder="Type your description here" />
        <DescriptionTextField label="Your description" helperText="Helper text" state="Active" placeholder="Type your description here" />
        <DescriptionTextField label="Your description" helperText="Helper text" state="Disabled" placeholder="Type your description here" />
      </div>

      {/* ── Column 2: With Button ── */}
      <div className="flex flex-col gap-6">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
          With Button (flexible — hugs text)
        </p>
        <DescriptionTextField label="Your description" button state="Default" placeholder="Type your description here" />
        <DescriptionTextField label="Your description" button state="Active" placeholder="Type your description here" />
        <DescriptionTextField label="Your description" button state="Disabled" placeholder="Type your message here" />
      </div>

      {/* ── Column 3: No Helper / No Button ── */}
      <div className="flex flex-col gap-6">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
          Label only
        </p>
        <DescriptionTextField label="Your description" state="Default" placeholder="Type your description here" />
        <DescriptionTextField label="Your description" state="Active" placeholder="Type your description here" />
        <DescriptionTextField label="Your description" state="Disabled" placeholder="Type your description here" />
      </div>

      {/* ── Column 4: No Label ── */}
      <div className="flex flex-col gap-6">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
          No Label
        </p>
        <DescriptionTextField label={false} state="Default" placeholder="Type your description here" />
        <DescriptionTextField label={false} state="Active" placeholder="Type your description here" />
        <DescriptionTextField label={false} state="Disabled" placeholder="Type your description here" />
      </div>

    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'State / Default',
  args: {
    label: 'Your description',
    helperText: 'Helper text',
    state: 'Default',
    placeholder: 'Type your description here'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'State / Active',
  args: {
    label: 'Your description',
    helperText: 'Helper text',
    state: 'Active',
    placeholder: 'Type your description here'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'State / Disabled',
  args: {
    label: 'Your description',
    helperText: 'Helper text',
    state: 'Disabled',
    placeholder: 'Type your description here'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Button',
  render: () => <div className="flex flex-col gap-6 font-['Inter',sans-serif]">
      <div>
        <p className="text-[11px] text-gray-400 mb-2">Default</p>
        <DescriptionTextField label="Your description" button state="Default" placeholder="Type your description here" />
      </div>
      <div>
        <p className="text-[11px] text-gray-400 mb-2">Active</p>
        <DescriptionTextField label="Your description" button state="Active" placeholder="Type your description here" />
      </div>
      <div>
        <p className="text-[11px] text-gray-400 mb-2">Disabled</p>
        <DescriptionTextField label="Your description" button state="Disabled" placeholder="Type your message here" />
      </div>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Without Label',
  args: {
    label: false,
    state: 'Default',
    placeholder: 'Type your description here'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Interactive — live character count',
  render: () => {
    const [val, setVal] = useState('');
    return <DescriptionTextField label="Your description" helperText={\`\${val.length} / 500 characters\`} placeholder="Type your description here" value={val} onChange={setVal} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Full Width',
  args: {
    label: 'Your description',
    helperText: 'Helper text',
    state: 'Default',
    placeholder: 'Type your description here',
    fullWidth: true
  }
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`AllVariants`,`StateDefault`,`StateActive`,`StateDisabled`,`WithButton`,`NoLabel`,`Interactive`,`FullWidth`]}))();export{f as AllVariants,y as FullWidth,v as Interactive,_ as NoLabel,d as Playground,m as StateActive,p as StateDefault,h as StateDisabled,g as WithButton,b as __namedExportsOrder,u as default};