import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-0BrNG41E.js";function i(e,t=!1){return e===`Disabled`?`border-[#CECECE]`:e===`Active`||t?`border-[#004494]`:`border-[#616161]`}function a(e){return e===`Disabled`?`text-[#A9A9A9]`:e===`Active`?`text-[#303030]`:`text-[#616161]`}var o,s,c,l,u,d,f=e((()=>{o=r(),s=t(n()),c=({color:e,open:t})=>(0,o.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0,transition:`transform 150ms`,transform:t?`scaleY(-1)`:`scaleY(1)`},children:(0,o.jsx)(`polyline`,{points:`5,8 10,13 15,8`,fill:`none`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),l={Regular:{height:`h-[40px]`,py:`py-[8px]`,font:`text-[16px] leading-[24px]`,labelFont:`text-[16px] leading-[24px]`,helperFont:`text-[14px] leading-[20px]`},Medium:{height:`h-[32px]`,py:`py-[4px]`,font:`text-[14px] leading-[20px]`,labelFont:`text-[14px] leading-[20px]`,helperFont:`text-[12px] leading-[16px]`}},u=s.forwardRef(({size:e=`Regular`,state:t=`Default`,label:n,helperText:r,placeholder:c=`Label`,value:u,defaultValue:d=``,onChange:f,cta:p=!1,ctaLabel:m=`Button text`,onCtaClick:h,fullWidth:g=!1,className:_=``,id:v},y)=>{let b=(0,s.useId)(),x=v??b,[S,C]=(0,s.useState)(d),w=u??S,T=t===`Disabled`,E=t===`Active`,D=l[e],O=n!==!1&&n!==void 0,k=r!==!1&&r!==void 0,A=T?`text-[#A9A9A9]`:`text-[#101010]`,j=T?`text-[#E1F5FE]`:`text-[#00669D]`,M=a(t),N=i(t),P=E&&!p?{boxShadow:`0px 0px 3px 2px rgba(0,68,148,0.25)`}:{};return(0,o.jsxs)(`div`,{className:[`flex flex-col`,O?`gap-[8px]`:``,g?`w-full`:`w-[260px]`,_].filter(Boolean).join(` `),children:[O&&(0,o.jsx)(`label`,{htmlFor:x,className:[`font-["Inter",sans-serif] font-normal not-italic shrink-0`,D.labelFont,A,T?`cursor-not-allowed`:`cursor-default`].join(` `),children:n}),(0,o.jsxs)(`div`,{className:[`flex flex-col`,k?`gap-[4px]`:``].join(` `),children:[(0,o.jsxs)(`div`,{className:[`flex items-center border border-solid rounded-[4px] bg-white w-full overflow-hidden`,D.height,N,`transition-all duration-150`].join(` `),style:P,children:[(0,o.jsx)(`input`,{ref:y,id:x,type:`text`,value:w,placeholder:c,disabled:T,onChange:e=>{C(e.target.value),f?.(e.target.value)},className:[`flex-1 min-w-0 bg-transparent outline-none border-none appearance-none`,`font-["Inter",sans-serif] font-normal not-italic`,D.font,M,p?`pl-[12px] pr-[4px]`:`px-[12px]`,D.py,T?`cursor-not-allowed`:`cursor-text`].join(` `),style:{caretColor:`#004494`}}),p&&(0,o.jsx)(`button`,{type:`button`,disabled:T,onClick:T?void 0:h,className:[`flex items-center justify-center shrink-0 px-[16px]`,D.height,`rounded-tr-[4px] rounded-br-[4px]`,`font-["Inter",sans-serif] font-medium text-[16px] leading-[24px] text-white not-italic whitespace-nowrap`,T?`bg-[#B0C4DE] cursor-not-allowed`:`bg-[#004494] hover:bg-[#000B54] cursor-pointer`,`transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#004494]`].join(` `),children:m})]}),k&&(0,o.jsx)(`p`,{className:[`font-["Inter",sans-serif] font-normal not-italic shrink-0 w-full`,D.helperFont,j].join(` `),children:r})]})]})}),u.displayName=`InputField`,d=({size:e=`Regular`,state:t=`Default`,label:n,options:r=[],value:u,defaultValue:d=``,placeholder:f=`Label`,onChange:p,fullWidth:m=!1,className:h=``,id:g})=>{let _=(0,s.useId)(),v=g??_,y=(0,s.useRef)(null),[b,x]=(0,s.useState)(!1),[S,C]=(0,s.useState)(d),w=t===`Disabled`,T=u??S,E=r.find(e=>e.value===T)?.label??f,D=l[e],O=b&&!w,k=n!==!1&&n!==void 0,A=i(t,O),j=a(t),M=w?`#CECECE`:O||t===`Active`?`#004494`:`#616161`,N=w?`text-[#A9A9A9]`:`text-[#101010]`;(0,s.useEffect)(()=>{let e=e=>{y.current&&!y.current.contains(e.target)&&x(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let P=e=>{C(e.value),p?.(e.value),x(!1)};return(0,o.jsxs)(`div`,{ref:y,className:[`flex flex-col relative`,k?`gap-[8px]`:``,m?`w-full`:`w-[260px]`,h].filter(Boolean).join(` `),children:[k&&(0,o.jsx)(`label`,{htmlFor:v,className:[`font-["Inter",sans-serif] font-normal not-italic shrink-0`,D.labelFont,N,w?`cursor-not-allowed`:`cursor-default`].join(` `),children:n}),(0,o.jsxs)(`div`,{className:`relative flex flex-col w-full`,children:[(0,o.jsxs)(`button`,{id:v,type:`button`,disabled:w,onClick:()=>!w&&x(e=>!e),"aria-haspopup":`listbox`,"aria-expanded":O,className:[`flex items-center justify-between border border-solid bg-white w-full`,O?`rounded-tl-[4px] rounded-tr-[4px] border-b-0`:`rounded-[4px]`,D.height,A,`pl-[12px] pr-[8px]`,D.py,w?`cursor-not-allowed`:`cursor-pointer`,`transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[#004494] focus-visible:ring-offset-1`].filter(Boolean).join(` `),children:[(0,o.jsx)(`span`,{className:[`font-["Inter",sans-serif] font-normal not-italic truncate`,D.font,j].join(` `),children:E}),(0,o.jsx)(c,{color:M,open:O})]}),O&&(0,o.jsx)(`div`,{role:`listbox`,className:`absolute top-full left-0 right-0 z-50 bg-white border border-solid border-[#004494] border-t-0 rounded-bl-[4px] rounded-br-[4px]`,style:{boxShadow:`0px 4px 6px rgba(0,0,0,0.09)`},children:r.map(t=>{let n=t.value===T;return(0,o.jsx)(`button`,{type:`button`,role:`option`,"aria-selected":n,onClick:()=>P(t),className:[`flex items-center w-full pl-[12px] pr-[8px] text-left`,e===`Regular`?`py-[8px]`:`py-[4px]`,`font-["Inter",sans-serif] font-normal text-[14px] leading-[20px] not-italic text-[#101010]`,n?`bg-[#E2EFFF]`:`hover:bg-[#F5F5F5]`,`cursor-pointer outline-none transition-colors duration-100`].join(` `),children:t.label},t.value)})})]})]})},d.displayName=`Dropdown`,u.__docgenInfo={description:``,methods:[],displayName:`InputField`,props:{size:{required:!1,tsType:{name:`union`,raw:`'Regular' | 'Medium'`,elements:[{name:`literal`,value:`'Regular'`},{name:`literal`,value:`'Medium'`}]},description:``,defaultValue:{value:`'Regular'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'Default' | 'Active' | 'Disabled'`,elements:[{name:`literal`,value:`'Default'`},{name:`literal`,value:`'Active'`},{name:`literal`,value:`'Disabled'`}]},description:``,defaultValue:{value:`'Default'`,computed:!1}},label:{required:!1,tsType:{name:`union`,raw:`string | false`,elements:[{name:`string`},{name:`literal`,value:`false`}]},description:``},helperText:{required:!1,tsType:{name:`union`,raw:`string | false`,elements:[{name:`string`},{name:`literal`,value:`false`}]},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Label'`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(v: string) => void`,signature:{arguments:[{type:{name:`string`},name:`v`}],return:{name:`void`}}},description:``},cta:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},ctaLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Button text'`,computed:!1}},onCtaClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},id:{required:!1,tsType:{name:`string`},description:``}}},d.__docgenInfo={description:``,methods:[],displayName:`Dropdown`,props:{size:{required:!1,tsType:{name:`union`,raw:`'Regular' | 'Medium'`,elements:[{name:`literal`,value:`'Regular'`},{name:`literal`,value:`'Medium'`}]},description:``,defaultValue:{value:`'Regular'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'Default' | 'Active' | 'Disabled'`,elements:[{name:`literal`,value:`'Default'`},{name:`literal`,value:`'Active'`},{name:`literal`,value:`'Disabled'`}]},description:``,defaultValue:{value:`'Default'`,computed:!1}},label:{required:!1,tsType:{name:`union`,raw:`string | false`,elements:[{name:`string`},{name:`literal`,value:`false`}]},description:``},options:{required:!1,tsType:{name:`Array`,elements:[{name:`DropdownOption`}],raw:`DropdownOption[]`},description:``,defaultValue:{value:`[]`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Label'`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(v: string) => void`,signature:{arguments:[{type:{name:`string`},name:`v`}],return:{name:`void`}}},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},id:{required:!1,tsType:{name:`string`},description:``}}}})),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{p=r(),m=t(n()),f(),h={title:`Components/InputField`,component:u,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`The Input Fields & Dropdowns component includes both text inputs and selection dropdowns, designed to handle a range of use cases in forms and data entry. It supports multiple variations such as fields with or without labels, optional helper text, and both typeable inputs and predefined dropdown options. Each variant is also available in a compact small-size version for use in dense or space-constrained layouts, maintaining consistency in behavior, styling, and accessibility across different states like default, active and disabled.`}}},argTypes:{size:{control:`select`,options:[`Regular`,`Medium`]},state:{control:`select`,options:[`Default`,`Active`,`Disabled`]},cta:{control:`boolean`}}},g=[{label:`Dropdown menu item`,value:`item1`},{label:`Dropdown menu item`,value:`item2`},{label:`Dropdown menu item`,value:`item3`}],_=[{label:`10`,value:`10`},{label:`25`,value:`25`},{label:`50`,value:`50`},{label:`100`,value:`100`}],v=({label:e,children:t})=>(0,p.jsxs)(`div`,{className:`flex items-start gap-6`,children:[(0,p.jsx)(`span`,{className:`w-[80px] shrink-0 text-[14px] text-[#101010] font-['Inter',sans-serif] pt-2`,children:e}),(0,p.jsx)(`div`,{className:`flex items-start gap-6 flex-wrap`,children:t})]}),y=({children:e})=>(0,p.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-5`,children:e}),b={name:`Playground / InputField`,args:{size:`Regular`,state:`Default`,label:`Label`,placeholder:`Label`,helperText:!1,cta:!1}},x={name:`1. Dropdown with label`,render:()=>{let[e,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(``);return(0,p.jsxs)(`div`,{className:`font-['Inter',sans-serif] flex flex-col gap-5`,children:[(0,p.jsx)(y,{children:`Dropdown with label`}),(0,p.jsxs)(v,{label:`Default`,children:[(0,p.jsx)(d,{size:`Regular`,state:`Default`,label:`Label`,options:g,value:e,onChange:t}),(0,p.jsx)(d,{size:`Medium`,state:`Default`,label:`Label`,options:g,value:n,onChange:r})]}),(0,p.jsxs)(v,{label:`Active`,children:[(0,p.jsx)(d,{size:`Regular`,state:`Active`,label:`Label`,options:g,defaultValue:`item2`}),(0,p.jsx)(d,{size:`Medium`,state:`Active`,label:`Label`,options:g,defaultValue:`item2`})]}),(0,p.jsxs)(v,{label:`Disabled`,children:[(0,p.jsx)(d,{size:`Regular`,state:`Disabled`,label:`Label`,options:g}),(0,p.jsx)(d,{size:`Medium`,state:`Disabled`,label:`Label`,options:g})]})]})}},S={name:`2. Input Field with label`,render:()=>{let[e,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(``);return(0,p.jsxs)(`div`,{className:`font-['Inter',sans-serif] flex flex-col gap-5`,children:[(0,p.jsx)(y,{children:`Input Field with label`}),(0,p.jsxs)(v,{label:`Default`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Default`,label:`Label`,placeholder:`Label`,value:e,onChange:t}),(0,p.jsx)(u,{size:`Medium`,state:`Default`,label:`Label`,placeholder:`Label`,value:n,onChange:r})]}),(0,p.jsxs)(v,{label:`Active`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Active`,label:`Label`,placeholder:`Label`}),(0,p.jsx)(u,{size:`Medium`,state:`Active`,label:`Label`,placeholder:`Label`})]}),(0,p.jsxs)(v,{label:`Disabled`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Disabled`,label:`Label`,placeholder:`Label`}),(0,p.jsx)(u,{size:`Medium`,state:`Disabled`,label:`Label`,placeholder:`Label`})]})]})}},C={name:`3. Input Field with label and helper text`,render:()=>{let[e,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(``);return(0,p.jsxs)(`div`,{className:`font-['Inter',sans-serif] flex flex-col gap-5`,children:[(0,p.jsx)(y,{children:`Input Field with label and helper text`}),(0,p.jsxs)(v,{label:`Default`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Default`,label:`Label`,helperText:`Label`,placeholder:`Label`,value:e,onChange:t}),(0,p.jsx)(u,{size:`Medium`,state:`Default`,label:`Label`,helperText:`Label`,placeholder:`Label`,value:n,onChange:r})]}),(0,p.jsxs)(v,{label:`Active`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Active`,label:`Label`,helperText:`Label`,placeholder:`| type here`}),(0,p.jsx)(u,{size:`Medium`,state:`Active`,label:`Label`,helperText:`Label`,placeholder:`| type here`})]}),(0,p.jsxs)(v,{label:`Disabled`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Disabled`,label:`Label`,helperText:`Label`,placeholder:`Label`}),(0,p.jsx)(u,{size:`Medium`,state:`Disabled`,label:`Label`,helperText:`Label`,placeholder:`Label`})]})]})}},w={name:`4. Dropdown without label`,render:()=>{let[e,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(`50`);return(0,p.jsxs)(`div`,{className:`font-['Inter',sans-serif] flex flex-col gap-5`,children:[(0,p.jsx)(y,{children:`Dropdown without label`}),(0,p.jsxs)(v,{label:`Default`,children:[(0,p.jsx)(d,{size:`Regular`,state:`Default`,label:!1,options:g,value:e,onChange:t}),(0,p.jsx)(d,{size:`Medium`,state:`Default`,label:!1,options:_,value:n,onChange:r})]}),(0,p.jsxs)(v,{label:`Active`,children:[(0,p.jsx)(d,{size:`Regular`,state:`Active`,label:!1,options:g,defaultValue:`item2`}),(0,p.jsx)(d,{size:`Medium`,state:`Active`,label:!1,options:_,defaultValue:`50`})]}),(0,p.jsxs)(v,{label:`Disabled`,children:[(0,p.jsx)(d,{size:`Regular`,state:`Disabled`,label:!1,options:g}),(0,p.jsx)(d,{size:`Medium`,state:`Disabled`,label:!1,options:_})]})]})}},T={name:`5. Input Field without label`,render:()=>{let[e,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(``);return(0,p.jsxs)(`div`,{className:`font-['Inter',sans-serif] flex flex-col gap-5`,children:[(0,p.jsx)(y,{children:`Input Field without label`}),(0,p.jsxs)(v,{label:`Default`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Default`,label:!1,placeholder:`Label`,value:e,onChange:t}),(0,p.jsx)(u,{size:`Medium`,state:`Default`,label:!1,placeholder:`Label`,value:n,onChange:r})]}),(0,p.jsxs)(v,{label:`Active`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Active`,label:!1,placeholder:`|`}),(0,p.jsx)(u,{size:`Medium`,state:`Active`,label:!1,placeholder:`|`})]}),(0,p.jsxs)(v,{label:`Disabled`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Disabled`,label:!1,placeholder:`Label`}),(0,p.jsx)(u,{size:`Medium`,state:`Disabled`,label:!1,placeholder:`Label`})]})]})}},E={name:`6. Input Field without label and CTA`,render:()=>{let[e,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(``),[i,a]=(0,m.useState)(``);return(0,p.jsxs)(`div`,{className:`font-['Inter',sans-serif] flex flex-col gap-5`,children:[(0,p.jsx)(y,{children:`Input Field without label and CTA`}),(0,p.jsxs)(v,{label:`Default`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Default`,label:!1,cta:!0,placeholder:`Label`,value:e,onChange:t,onCtaClick:()=>a(`Submitted: "${e}"`)}),(0,p.jsx)(u,{size:`Medium`,state:`Default`,label:!1,cta:!0,placeholder:`Label`,value:n,onChange:r,onCtaClick:()=>a(`Submitted: "${n}"`)})]}),(0,p.jsxs)(v,{label:`Active`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Active`,label:!1,cta:!0,placeholder:`| type here`}),(0,p.jsx)(u,{size:`Medium`,state:`Active`,label:!1,cta:!0,placeholder:`Input |`})]}),(0,p.jsxs)(v,{label:`Disabled`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Disabled`,label:!1,cta:!0,placeholder:`Label`}),(0,p.jsx)(u,{size:`Medium`,state:`Disabled`,label:!1,cta:!0,placeholder:`Label`})]}),i&&(0,p.jsx)(`p`,{className:`text-xs text-[#004494] mt-2`,children:i})]})}},D={name:`📋 All Variants — as in Figma`,parameters:{layout:`padded`},render:()=>{let[e,t]=(0,m.useState)({}),n=e=>n=>t(t=>({...t,[e]:n}));return(0,p.jsxs)(`div`,{className:`font-['Inter',sans-serif] flex flex-col gap-12`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(y,{children:`1. Dropdown with label`}),(0,p.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,p.jsxs)(v,{label:`Default`,children:[(0,p.jsx)(d,{size:`Regular`,label:`Label`,options:g,value:e.d1r,onChange:n(`d1r`)}),(0,p.jsx)(d,{size:`Medium`,label:`Label`,options:g,value:e.d1m,onChange:n(`d1m`)})]}),(0,p.jsxs)(v,{label:`Active`,children:[(0,p.jsx)(d,{size:`Regular`,state:`Active`,label:`Label`,options:g,defaultValue:`item2`}),(0,p.jsx)(d,{size:`Medium`,state:`Active`,label:`Label`,options:g,defaultValue:`item2`})]}),(0,p.jsxs)(v,{label:`Disabled`,children:[(0,p.jsx)(d,{size:`Regular`,state:`Disabled`,label:`Label`,options:g}),(0,p.jsx)(d,{size:`Medium`,state:`Disabled`,label:`Label`,options:g})]})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(y,{children:`2. Input Field with label`}),(0,p.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,p.jsxs)(v,{label:`Default`,children:[(0,p.jsx)(u,{size:`Regular`,label:`Label`,placeholder:`Label`,value:e.i2r,onChange:n(`i2r`)}),(0,p.jsx)(u,{size:`Medium`,label:`Label`,placeholder:`Label`,value:e.i2m,onChange:n(`i2m`)})]}),(0,p.jsxs)(v,{label:`Active`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Active`,label:`Label`,placeholder:`Label`}),(0,p.jsx)(u,{size:`Medium`,state:`Active`,label:`Label`,placeholder:`Label`})]}),(0,p.jsxs)(v,{label:`Disabled`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Disabled`,label:`Label`,placeholder:`Label`}),(0,p.jsx)(u,{size:`Medium`,state:`Disabled`,label:`Label`,placeholder:`Label`})]})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(y,{children:`3. Input Field with label and helper text`}),(0,p.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,p.jsxs)(v,{label:`Default`,children:[(0,p.jsx)(u,{size:`Regular`,label:`Label`,helperText:`Label`,placeholder:`Label`,value:e.i3r,onChange:n(`i3r`)}),(0,p.jsx)(u,{size:`Medium`,label:`Label`,helperText:`Label`,placeholder:`Label`,value:e.i3m,onChange:n(`i3m`)})]}),(0,p.jsxs)(v,{label:`Active`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Active`,label:`Label`,helperText:`Label`,placeholder:`| type here`}),(0,p.jsx)(u,{size:`Medium`,state:`Active`,label:`Label`,helperText:`Label`,placeholder:`| type here`})]}),(0,p.jsxs)(v,{label:`Disabled`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Disabled`,label:`Label`,helperText:`Label`,placeholder:`Label`}),(0,p.jsx)(u,{size:`Medium`,state:`Disabled`,label:`Label`,helperText:`Label`,placeholder:`Label`})]})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(y,{children:`4. Dropdown without label`}),(0,p.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,p.jsxs)(v,{label:`Default`,children:[(0,p.jsx)(d,{size:`Regular`,label:!1,options:g,value:e.d4r,onChange:n(`d4r`)}),(0,p.jsx)(d,{size:`Medium`,label:!1,options:_,value:e.d4m??`50`,onChange:n(`d4m`)})]}),(0,p.jsxs)(v,{label:`Active`,children:[(0,p.jsx)(d,{size:`Regular`,state:`Active`,label:!1,options:g,defaultValue:`item2`}),(0,p.jsx)(d,{size:`Medium`,state:`Active`,label:!1,options:_,defaultValue:`50`})]}),(0,p.jsxs)(v,{label:`Disabled`,children:[(0,p.jsx)(d,{size:`Regular`,state:`Disabled`,label:!1,options:g}),(0,p.jsx)(d,{size:`Medium`,state:`Disabled`,label:!1,options:_})]})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(y,{children:`5. Input Field without label`}),(0,p.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,p.jsxs)(v,{label:`Default`,children:[(0,p.jsx)(u,{size:`Regular`,label:!1,placeholder:`Label`,value:e.i5r,onChange:n(`i5r`)}),(0,p.jsx)(u,{size:`Medium`,label:!1,placeholder:`Label`,value:e.i5m,onChange:n(`i5m`)})]}),(0,p.jsxs)(v,{label:`Active`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Active`,label:!1,placeholder:`|`}),(0,p.jsx)(u,{size:`Medium`,state:`Active`,label:!1,placeholder:`|`})]}),(0,p.jsxs)(v,{label:`Disabled`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Disabled`,label:!1,placeholder:`Label`}),(0,p.jsx)(u,{size:`Medium`,state:`Disabled`,label:!1,placeholder:`Label`})]})]})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(y,{children:`6. Input Field without label and CTA`}),(0,p.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,p.jsxs)(v,{label:`Default`,children:[(0,p.jsx)(u,{size:`Regular`,label:!1,cta:!0,placeholder:`Label`,value:e.i6r,onChange:n(`i6r`)}),(0,p.jsx)(u,{size:`Medium`,label:!1,cta:!0,placeholder:`Label`,value:e.i6m,onChange:n(`i6m`)})]}),(0,p.jsxs)(v,{label:`Active`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Active`,label:!1,cta:!0,placeholder:`| type here`}),(0,p.jsx)(u,{size:`Medium`,state:`Active`,label:!1,cta:!0,placeholder:`Input |`})]}),(0,p.jsxs)(v,{label:`Disabled`,children:[(0,p.jsx)(u,{size:`Regular`,state:`Disabled`,label:!1,cta:!0,placeholder:`Label`}),(0,p.jsx)(u,{size:`Medium`,state:`Disabled`,label:!1,cta:!0,placeholder:`Label`})]})]})]})]})}},O={name:`Interactive — mini form`,render:()=>{let[e,t]=(0,m.useState)(``),[n,r]=(0,m.useState)(``),[i,a]=(0,m.useState)(``);return(0,p.jsxs)(`div`,{className:`font-['Inter',sans-serif] flex flex-col gap-4 max-w-[300px] p-4`,children:[(0,p.jsx)(u,{label:`Full name`,placeholder:`Enter your name`,value:e,onChange:t}),(0,p.jsx)(d,{label:`Role`,options:[{label:`Contributor`,value:`contributor`},{label:`Maintainer`,value:`maintainer`},{label:`Reviewer`,value:`reviewer`}],value:n,onChange:r}),(0,p.jsx)(u,{label:!1,cta:!0,ctaLabel:`Submit`,value:e,onChange:t,placeholder:`Or type here...`,onCtaClick:()=>a(`Submitted: ${e} (${n||`no role`})`)}),i&&(0,p.jsx)(`p`,{className:`text-xs text-[#004494]`,children:i})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Playground / InputField',
  args: {
    size: 'Regular',
    state: 'Default',
    label: 'Label',
    placeholder: 'Label',
    helperText: false,
    cta: false
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '1. Dropdown with label',
  render: () => {
    const [r, setR] = useState('');
    const [m, setM] = useState('');
    return <div className="font-['Inter',sans-serif] flex flex-col gap-5">
        <SectionTitle>Dropdown with label</SectionTitle>
        <Row label="Default">
          <Dropdown size="Regular" state="Default" label="Label" options={menuOptions} value={r} onChange={setR} />
          <Dropdown size="Medium" state="Default" label="Label" options={menuOptions} value={m} onChange={setM} />
        </Row>
        <Row label="Active">
          <Dropdown size="Regular" state="Active" label="Label" options={menuOptions} defaultValue="item2" />
          <Dropdown size="Medium" state="Active" label="Label" options={menuOptions} defaultValue="item2" />
        </Row>
        <Row label="Disabled">
          <Dropdown size="Regular" state="Disabled" label="Label" options={menuOptions} />
          <Dropdown size="Medium" state="Disabled" label="Label" options={menuOptions} />
        </Row>
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '2. Input Field with label',
  render: () => {
    const [r, setR] = useState('');
    const [m, setM] = useState('');
    return <div className="font-['Inter',sans-serif] flex flex-col gap-5">
        <SectionTitle>Input Field with label</SectionTitle>
        <Row label="Default">
          <InputField size="Regular" state="Default" label="Label" placeholder="Label" value={r} onChange={setR} />
          <InputField size="Medium" state="Default" label="Label" placeholder="Label" value={m} onChange={setM} />
        </Row>
        <Row label="Active">
          <InputField size="Regular" state="Active" label="Label" placeholder="Label" />
          <InputField size="Medium" state="Active" label="Label" placeholder="Label" />
        </Row>
        <Row label="Disabled">
          <InputField size="Regular" state="Disabled" label="Label" placeholder="Label" />
          <InputField size="Medium" state="Disabled" label="Label" placeholder="Label" />
        </Row>
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '3. Input Field with label and helper text',
  render: () => {
    const [r, setR] = useState('');
    const [m, setM] = useState('');
    return <div className="font-['Inter',sans-serif] flex flex-col gap-5">
        <SectionTitle>Input Field with label and helper text</SectionTitle>
        <Row label="Default">
          <InputField size="Regular" state="Default" label="Label" helperText="Label" placeholder="Label" value={r} onChange={setR} />
          <InputField size="Medium" state="Default" label="Label" helperText="Label" placeholder="Label" value={m} onChange={setM} />
        </Row>
        <Row label="Active">
          <InputField size="Regular" state="Active" label="Label" helperText="Label" placeholder="| type here" />
          <InputField size="Medium" state="Active" label="Label" helperText="Label" placeholder="| type here" />
        </Row>
        <Row label="Disabled">
          <InputField size="Regular" state="Disabled" label="Label" helperText="Label" placeholder="Label" />
          <InputField size="Medium" state="Disabled" label="Label" helperText="Label" placeholder="Label" />
        </Row>
      </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '4. Dropdown without label',
  render: () => {
    const [r, setR] = useState('');
    const [m, setM] = useState('50');
    return <div className="font-['Inter',sans-serif] flex flex-col gap-5">
        <SectionTitle>Dropdown without label</SectionTitle>
        <Row label="Default">
          <Dropdown size="Regular" state="Default" label={false} options={menuOptions} value={r} onChange={setR} />
          <Dropdown size="Medium" state="Default" label={false} options={pageOptions} value={m} onChange={setM} />
        </Row>
        <Row label="Active">
          <Dropdown size="Regular" state="Active" label={false} options={menuOptions} defaultValue="item2" />
          <Dropdown size="Medium" state="Active" label={false} options={pageOptions} defaultValue="50" />
        </Row>
        <Row label="Disabled">
          <Dropdown size="Regular" state="Disabled" label={false} options={menuOptions} />
          <Dropdown size="Medium" state="Disabled" label={false} options={pageOptions} />
        </Row>
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '5. Input Field without label',
  render: () => {
    const [r, setR] = useState('');
    const [m, setM] = useState('');
    return <div className="font-['Inter',sans-serif] flex flex-col gap-5">
        <SectionTitle>Input Field without label</SectionTitle>
        <Row label="Default">
          <InputField size="Regular" state="Default" label={false} placeholder="Label" value={r} onChange={setR} />
          <InputField size="Medium" state="Default" label={false} placeholder="Label" value={m} onChange={setM} />
        </Row>
        <Row label="Active">
          <InputField size="Regular" state="Active" label={false} placeholder="|" />
          <InputField size="Medium" state="Active" label={false} placeholder="|" />
        </Row>
        <Row label="Disabled">
          <InputField size="Regular" state="Disabled" label={false} placeholder="Label" />
          <InputField size="Medium" state="Disabled" label={false} placeholder="Label" />
        </Row>
      </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '6. Input Field without label and CTA',
  render: () => {
    const [rVal, setRVal] = useState('');
    const [mVal, setMVal] = useState('');
    const [result, setResult] = useState('');
    return <div className="font-['Inter',sans-serif] flex flex-col gap-5">
        <SectionTitle>Input Field without label and CTA</SectionTitle>
        <Row label="Default">
          <InputField size="Regular" state="Default" label={false} cta placeholder="Label" value={rVal} onChange={setRVal} onCtaClick={() => setResult(\`Submitted: "\${rVal}"\`)} />
          <InputField size="Medium" state="Default" label={false} cta placeholder="Label" value={mVal} onChange={setMVal} onCtaClick={() => setResult(\`Submitted: "\${mVal}"\`)} />
        </Row>
        <Row label="Active">
          <InputField size="Regular" state="Active" label={false} cta placeholder="| type here" />
          <InputField size="Medium" state="Active" label={false} cta placeholder="Input |" />
        </Row>
        <Row label="Disabled">
          <InputField size="Regular" state="Disabled" label={false} cta placeholder="Label" />
          <InputField size="Medium" state="Disabled" label={false} cta placeholder="Label" />
        </Row>
        {result && <p className="text-xs text-[#004494] mt-2">{result}</p>}
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '📋 All Variants — as in Figma',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [vals, setVals] = useState<Record<string, string>>({});
    const set = (k: string) => (v: string) => setVals(p => ({
      ...p,
      [k]: v
    }));
    return <div className="font-['Inter',sans-serif] flex flex-col gap-12">

        {/* 1 — Dropdown with label */}
        <div>
          <SectionTitle>1. Dropdown with label</SectionTitle>
          <div className="flex flex-col gap-5">
            <Row label="Default">
              <Dropdown size="Regular" label="Label" options={menuOptions} value={vals.d1r} onChange={set('d1r')} />
              <Dropdown size="Medium" label="Label" options={menuOptions} value={vals.d1m} onChange={set('d1m')} />
            </Row>
            <Row label="Active">
              <Dropdown size="Regular" state="Active" label="Label" options={menuOptions} defaultValue="item2" />
              <Dropdown size="Medium" state="Active" label="Label" options={menuOptions} defaultValue="item2" />
            </Row>
            <Row label="Disabled">
              <Dropdown size="Regular" state="Disabled" label="Label" options={menuOptions} />
              <Dropdown size="Medium" state="Disabled" label="Label" options={menuOptions} />
            </Row>
          </div>
        </div>

        {/* 2 — Input with label */}
        <div>
          <SectionTitle>2. Input Field with label</SectionTitle>
          <div className="flex flex-col gap-5">
            <Row label="Default">
              <InputField size="Regular" label="Label" placeholder="Label" value={vals.i2r} onChange={set('i2r')} />
              <InputField size="Medium" label="Label" placeholder="Label" value={vals.i2m} onChange={set('i2m')} />
            </Row>
            <Row label="Active">
              <InputField size="Regular" state="Active" label="Label" placeholder="Label" />
              <InputField size="Medium" state="Active" label="Label" placeholder="Label" />
            </Row>
            <Row label="Disabled">
              <InputField size="Regular" state="Disabled" label="Label" placeholder="Label" />
              <InputField size="Medium" state="Disabled" label="Label" placeholder="Label" />
            </Row>
          </div>
        </div>

        {/* 3 — Input with label + helper */}
        <div>
          <SectionTitle>3. Input Field with label and helper text</SectionTitle>
          <div className="flex flex-col gap-5">
            <Row label="Default">
              <InputField size="Regular" label="Label" helperText="Label" placeholder="Label" value={vals.i3r} onChange={set('i3r')} />
              <InputField size="Medium" label="Label" helperText="Label" placeholder="Label" value={vals.i3m} onChange={set('i3m')} />
            </Row>
            <Row label="Active">
              <InputField size="Regular" state="Active" label="Label" helperText="Label" placeholder="| type here" />
              <InputField size="Medium" state="Active" label="Label" helperText="Label" placeholder="| type here" />
            </Row>
            <Row label="Disabled">
              <InputField size="Regular" state="Disabled" label="Label" helperText="Label" placeholder="Label" />
              <InputField size="Medium" state="Disabled" label="Label" helperText="Label" placeholder="Label" />
            </Row>
          </div>
        </div>

        {/* 4 — Dropdown without label */}
        <div>
          <SectionTitle>4. Dropdown without label</SectionTitle>
          <div className="flex flex-col gap-5">
            <Row label="Default">
              <Dropdown size="Regular" label={false} options={menuOptions} value={vals.d4r} onChange={set('d4r')} />
              <Dropdown size="Medium" label={false} options={pageOptions} value={vals.d4m ?? '50'} onChange={set('d4m')} />
            </Row>
            <Row label="Active">
              <Dropdown size="Regular" state="Active" label={false} options={menuOptions} defaultValue="item2" />
              <Dropdown size="Medium" state="Active" label={false} options={pageOptions} defaultValue="50" />
            </Row>
            <Row label="Disabled">
              <Dropdown size="Regular" state="Disabled" label={false} options={menuOptions} />
              <Dropdown size="Medium" state="Disabled" label={false} options={pageOptions} />
            </Row>
          </div>
        </div>

        {/* 5 — Input without label */}
        <div>
          <SectionTitle>5. Input Field without label</SectionTitle>
          <div className="flex flex-col gap-5">
            <Row label="Default">
              <InputField size="Regular" label={false} placeholder="Label" value={vals.i5r} onChange={set('i5r')} />
              <InputField size="Medium" label={false} placeholder="Label" value={vals.i5m} onChange={set('i5m')} />
            </Row>
            <Row label="Active">
              <InputField size="Regular" state="Active" label={false} placeholder="|" />
              <InputField size="Medium" state="Active" label={false} placeholder="|" />
            </Row>
            <Row label="Disabled">
              <InputField size="Regular" state="Disabled" label={false} placeholder="Label" />
              <InputField size="Medium" state="Disabled" label={false} placeholder="Label" />
            </Row>
          </div>
        </div>

        {/* 6 — Input without label + CTA */}
        <div>
          <SectionTitle>6. Input Field without label and CTA</SectionTitle>
          <div className="flex flex-col gap-5">
            <Row label="Default">
              <InputField size="Regular" label={false} cta placeholder="Label" value={vals.i6r} onChange={set('i6r')} />
              <InputField size="Medium" label={false} cta placeholder="Label" value={vals.i6m} onChange={set('i6m')} />
            </Row>
            <Row label="Active">
              <InputField size="Regular" state="Active" label={false} cta placeholder="| type here" />
              <InputField size="Medium" state="Active" label={false} cta placeholder="Input |" />
            </Row>
            <Row label="Disabled">
              <InputField size="Regular" state="Disabled" label={false} cta placeholder="Label" />
              <InputField size="Medium" state="Disabled" label={false} cta placeholder="Label" />
            </Row>
          </div>
        </div>

      </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Interactive — mini form',
  render: () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [msg, setMsg] = useState('');
    return <div className="font-['Inter',sans-serif] flex flex-col gap-4 max-w-[300px] p-4">
        <InputField label="Full name" placeholder="Enter your name" value={name} onChange={setName} />
        <Dropdown label="Role" options={[{
        label: 'Contributor',
        value: 'contributor'
      }, {
        label: 'Maintainer',
        value: 'maintainer'
      }, {
        label: 'Reviewer',
        value: 'reviewer'
      }]} value={type} onChange={setType} />
        <InputField label={false} cta ctaLabel="Submit" value={name} onChange={setName} placeholder="Or type here..." onCtaClick={() => setMsg(\`Submitted: \${name} (\${type || 'no role'})\`)} />
        {msg && <p className="text-xs text-[#004494]">{msg}</p>}
      </div>;
  }
}`,...O.parameters?.docs?.source}}},k=[`PlaygroundInput`,`DropdownWithLabel`,`InputWithLabel`,`InputWithLabelAndHelper`,`DropdownWithoutLabel`,`InputWithoutLabel`,`InputWithCTA`,`AllVariants`,`InteractiveForm`]}))();export{D as AllVariants,x as DropdownWithLabel,w as DropdownWithoutLabel,E as InputWithCTA,S as InputWithLabel,C as InputWithLabelAndHelper,T as InputWithoutLabel,O as InteractiveForm,b as PlaygroundInput,k as __namedExportsOrder,h as default};