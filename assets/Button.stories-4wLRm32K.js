import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-_seQZ5lc.js";function i(e,t,n,r,i){let a=l[n],o=t===`fixed`?a.fixedPx:a.flexPx,s=t===`fixed`?a.fixedMinW:``,c=`inline-flex items-center justify-center rounded-[4px] outline-none select-none whitespace-nowrap font-["Inter",sans-serif] font-medium transition-colors duration-150`,u=`${a.height} ${o} ${a.py} ${i?a.gap:``} ${s}`.trim(),d=`focus-visible:ring-2 focus-visible:ring-offset-2`;return e===`primary`?r?{wrapper:`${c} ${u} bg-[#B0C4DE] cursor-not-allowed`,text:`text-white`,iconColor:`#FFFFFF`}:{wrapper:`${c} ${u} bg-[#004494] hover:bg-[#000B54] cursor-pointer ${d} focus-visible:ring-[#004494]`,text:`text-white`,iconColor:`#FFFFFF`}:e===`secondary`?r?{wrapper:`${c} ${u} bg-white border border-[#B0C4DE] cursor-not-allowed`,text:`text-[#B0C4DE]`,iconColor:`#B0C4DE`}:{wrapper:`${c} ${u} bg-white border border-[#004494] hover:bg-[#E2EFFF] cursor-pointer ${d} focus-visible:ring-[#004494]`,text:`text-[#004494]`,iconColor:`#004494`}:r?{wrapper:`${c} ${u} cursor-not-allowed`,text:`text-[#B0C4DE] border-b border-transparent`,iconColor:`#B0C4DE`}:{wrapper:`${c} ${u} cursor-pointer ${d} focus-visible:ring-[#004494]`,text:`text-[#004494] hover:text-[#000B54] border-b border-transparent hover:border-[#000B54]`,iconColor:`#004494`}}var a,o,s,c,l,u,d=e((()=>{a=r(),o=t(n()),s=({color:e})=>(0,a.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:[(0,a.jsx)(`line`,{x1:`1.5`,y1:`8`,x2:`10`,y2:`8`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,a.jsx)(`polyline`,{points:`6.5,4.5 10.5,8 6.5,11.5`,fill:`none`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,a.jsx)(`line`,{x1:`13.5`,y1:`3`,x2:`13.5`,y2:`13`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`})]}),c=({color:e})=>(0,a.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:[(0,a.jsx)(`line`,{x1:`2`,y1:`10`,x2:`13`,y2:`10`,stroke:e,strokeWidth:`1.6`,strokeLinecap:`round`}),(0,a.jsx)(`polyline`,{points:`8,5.5 13.5,10 8,14.5`,fill:`none`,stroke:e,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,a.jsx)(`line`,{x1:`17`,y1:`4`,x2:`17`,y2:`16`,stroke:e,strokeWidth:`1.6`,strokeLinecap:`round`})]}),l={regular:{height:`h-[40px]`,textSize:`text-[16px]`,lineHeight:`leading-[24px]`,fixedPx:`px-[32px]`,flexPx:`px-[16px]`,fixedMinW:`min-w-[183px]`,py:`py-[8px]`,gap:`gap-[4px]`},medium:{height:`h-[32px]`,textSize:`text-[16px]`,lineHeight:`leading-[24px]`,fixedPx:`px-[32px]`,flexPx:`px-[16px]`,fixedMinW:`min-w-[183px]`,py:`py-[4px]`,gap:`gap-[4px]`},small:{height:`h-[24px]`,textSize:`text-[14px]`,lineHeight:`leading-[16px]`,fixedPx:`px-[32px]`,flexPx:`px-[12px]`,fixedMinW:`min-w-[183px]`,py:`py-[4px]`,gap:`gap-[4px]`}},u=o.forwardRef(({variant:e=`primary`,size:t=`regular`,layout:n=`fixed`,icon:r,children:o,className:u=``,disabled:d=!1,type:f=`button`,...p},m)=>{let h=l[t],g=!!r,{wrapper:_,text:v,iconColor:y}=i(e,n,t,d,g),b=r??(e===`primary`?(0,a.jsx)(c,{color:y}):(0,a.jsx)(s,{color:y}));return(0,a.jsxs)(`button`,{ref:m,type:f,disabled:d,className:[_,u].filter(Boolean).join(` `),...p,children:[g&&b,(0,a.jsx)(`span`,{className:[h.textSize,h.lineHeight,v,`text-center`].join(` `),children:o})]})}),u.displayName=`Button`,u.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'tertiary'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'tertiary'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'regular' | 'medium' | 'small'`,elements:[{name:`literal`,value:`'regular'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'small'`}]},description:``,defaultValue:{value:`'regular'`,computed:!1}},layout:{required:!1,tsType:{name:`union`,raw:`'fixed' | 'flexible'`,elements:[{name:`literal`,value:`'fixed'`},{name:`literal`,value:`'flexible'`}]},description:``,defaultValue:{value:`'fixed'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{defaultValue:{value:`''`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},type:{defaultValue:{value:`'button'`,computed:!1},required:!1}}}})),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{f=r(),d(),p={title:`Components/Button`,component:u,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`This page documents the button components used across the interface to ensure consistency in interaction, appearance, and behavior. It includes primary and secondary button styles along with their various states—default, hover and disabled. Buttons are designed to be accessible and responsive, with clearly defined sizes, color themes, and icon support.`}}},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`]},size:{control:`select`,options:[`regular`,`medium`,`small`]},layout:{control:`select`,options:[`fixed`,`flexible`]},disabled:{control:`boolean`},children:{control:`text`}}},m={args:{variant:`primary`,size:`regular`,layout:`fixed`,disabled:!1,children:`Button text`}},h={name:`📋 All Variants`,parameters:{layout:`padded`},render:()=>(0,f.jsxs)(`div`,{className:`font-['Inter',sans-serif] space-y-10 p-6`,children:[(0,f.jsxs)(`section`,{children:[(0,f.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4`,children:`Primary`}),(0,f.jsx)(`div`,{className:`space-y-3`,children:[`regular`,`medium`,`small`].map(e=>(0,f.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,f.jsx)(`span`,{className:`text-[11px] text-gray-400 w-14`,children:e}),(0,f.jsx)(u,{variant:`primary`,size:e,layout:`fixed`,children:`Button text`}),(0,f.jsx)(u,{variant:`primary`,size:e,layout:`fixed`,icon:(0,f.jsx)(f.Fragment,{}),children:`Button text`}),(0,f.jsx)(u,{variant:`primary`,size:e,layout:`flexible`,children:`Button text`}),(0,f.jsx)(u,{variant:`primary`,size:e,layout:`fixed`,disabled:!0,children:`Button text`})]},e))})]}),(0,f.jsxs)(`section`,{children:[(0,f.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4`,children:`Secondary`}),(0,f.jsx)(`div`,{className:`space-y-3`,children:[`regular`,`medium`,`small`].map(e=>(0,f.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,f.jsx)(`span`,{className:`text-[11px] text-gray-400 w-14`,children:e}),(0,f.jsx)(u,{variant:`secondary`,size:e,layout:`fixed`,children:`Button text`}),(0,f.jsx)(u,{variant:`secondary`,size:e,layout:`fixed`,icon:(0,f.jsx)(f.Fragment,{}),children:`Button text`}),(0,f.jsx)(u,{variant:`secondary`,size:e,layout:`flexible`,children:`Button text`}),(0,f.jsx)(u,{variant:`secondary`,size:e,layout:`fixed`,disabled:!0,children:`Button text`})]},e))})]}),(0,f.jsxs)(`section`,{children:[(0,f.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4`,children:`Tertiary`}),(0,f.jsx)(`div`,{className:`space-y-3`,children:[`regular`,`medium`,`small`].map(e=>(0,f.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,f.jsx)(`span`,{className:`text-[11px] text-gray-400 w-14`,children:e}),(0,f.jsx)(u,{variant:`tertiary`,size:e,layout:`fixed`,children:`Button text`}),(0,f.jsx)(u,{variant:`tertiary`,size:e,layout:`fixed`,icon:(0,f.jsx)(f.Fragment,{}),children:`Button text`}),(0,f.jsx)(u,{variant:`tertiary`,size:e,layout:`flexible`,children:`Button text`}),(0,f.jsx)(u,{variant:`tertiary`,size:e,layout:`fixed`,disabled:!0,children:`Button text`})]},e))})]})]})},g={name:`Primary / Regular`,render:()=>(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-3 items-center`,children:[(0,f.jsx)(u,{variant:`primary`,size:`regular`,layout:`fixed`,children:`Button text`}),(0,f.jsx)(u,{variant:`primary`,size:`regular`,layout:`fixed`,icon:(0,f.jsx)(f.Fragment,{}),children:`Button text`}),(0,f.jsx)(u,{variant:`primary`,size:`regular`,layout:`flexible`,children:`Button text`}),(0,f.jsx)(u,{variant:`primary`,size:`regular`,layout:`fixed`,disabled:!0,children:`Button text`})]})},_={name:`Primary / Medium`,render:()=>(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-3 items-center`,children:[(0,f.jsx)(u,{variant:`primary`,size:`medium`,layout:`fixed`,children:`Button text`}),(0,f.jsx)(u,{variant:`primary`,size:`medium`,layout:`fixed`,icon:(0,f.jsx)(f.Fragment,{}),children:`Button text`}),(0,f.jsx)(u,{variant:`primary`,size:`medium`,layout:`flexible`,children:`Button text`}),(0,f.jsx)(u,{variant:`primary`,size:`medium`,layout:`fixed`,disabled:!0,children:`Button text`})]})},v={name:`Primary / Small`,render:()=>(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-3 items-center`,children:[(0,f.jsx)(u,{variant:`primary`,size:`small`,layout:`fixed`,children:`Button text`}),(0,f.jsx)(u,{variant:`primary`,size:`small`,layout:`fixed`,icon:(0,f.jsx)(f.Fragment,{}),children:`Button text`}),(0,f.jsx)(u,{variant:`primary`,size:`small`,layout:`flexible`,children:`Button text`}),(0,f.jsx)(u,{variant:`primary`,size:`small`,layout:`fixed`,disabled:!0,children:`Button text`})]})},y={name:`Secondary / Regular`,render:()=>(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-3 items-center`,children:[(0,f.jsx)(u,{variant:`secondary`,size:`regular`,layout:`fixed`,children:`Button text`}),(0,f.jsx)(u,{variant:`secondary`,size:`regular`,layout:`fixed`,icon:(0,f.jsx)(f.Fragment,{}),children:`Button text`}),(0,f.jsx)(u,{variant:`secondary`,size:`regular`,layout:`flexible`,children:`Button text`}),(0,f.jsx)(u,{variant:`secondary`,size:`regular`,layout:`fixed`,disabled:!0,children:`Button text`})]})},b={name:`Secondary / Medium`,render:()=>(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-3 items-center`,children:[(0,f.jsx)(u,{variant:`secondary`,size:`medium`,layout:`fixed`,children:`Button text`}),(0,f.jsx)(u,{variant:`secondary`,size:`medium`,layout:`fixed`,icon:(0,f.jsx)(f.Fragment,{}),children:`Button text`}),(0,f.jsx)(u,{variant:`secondary`,size:`medium`,layout:`flexible`,children:`Button text`}),(0,f.jsx)(u,{variant:`secondary`,size:`medium`,layout:`fixed`,disabled:!0,children:`Button text`})]})},x={name:`Secondary / Small`,render:()=>(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-3 items-center`,children:[(0,f.jsx)(u,{variant:`secondary`,size:`small`,layout:`fixed`,children:`Button text`}),(0,f.jsx)(u,{variant:`secondary`,size:`small`,layout:`fixed`,icon:(0,f.jsx)(f.Fragment,{}),children:`Button text`}),(0,f.jsx)(u,{variant:`secondary`,size:`small`,layout:`flexible`,children:`Button text`}),(0,f.jsx)(u,{variant:`secondary`,size:`small`,layout:`fixed`,disabled:!0,children:`Button text`})]})},S={name:`Tertiary / Regular`,render:()=>(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-3 items-center`,children:[(0,f.jsx)(u,{variant:`tertiary`,size:`regular`,layout:`fixed`,children:`Button text`}),(0,f.jsx)(u,{variant:`tertiary`,size:`regular`,layout:`fixed`,icon:(0,f.jsx)(f.Fragment,{}),children:`Button text`}),(0,f.jsx)(u,{variant:`tertiary`,size:`regular`,layout:`flexible`,children:`Button text`}),(0,f.jsx)(u,{variant:`tertiary`,size:`regular`,layout:`fixed`,disabled:!0,children:`Button text`})]})},C={name:`Tertiary / Medium`,render:()=>(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-3 items-center`,children:[(0,f.jsx)(u,{variant:`tertiary`,size:`medium`,layout:`fixed`,children:`Button text`}),(0,f.jsx)(u,{variant:`tertiary`,size:`medium`,layout:`fixed`,icon:(0,f.jsx)(f.Fragment,{}),children:`Button text`}),(0,f.jsx)(u,{variant:`tertiary`,size:`medium`,layout:`flexible`,children:`Button text`}),(0,f.jsx)(u,{variant:`tertiary`,size:`medium`,layout:`fixed`,disabled:!0,children:`Button text`})]})},w={name:`Tertiary / Small`,render:()=>(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-3 items-center`,children:[(0,f.jsx)(u,{variant:`tertiary`,size:`small`,layout:`fixed`,children:`Button text`}),(0,f.jsx)(u,{variant:`tertiary`,size:`small`,layout:`fixed`,icon:(0,f.jsx)(f.Fragment,{}),children:`Button text`}),(0,f.jsx)(u,{variant:`tertiary`,size:`small`,layout:`flexible`,children:`Button text`}),(0,f.jsx)(u,{variant:`tertiary`,size:`small`,layout:`fixed`,disabled:!0,children:`Button text`})]})},T={name:`State / Disabled — all variants`,render:()=>(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-4 items-center`,children:[(0,f.jsx)(u,{variant:`primary`,size:`regular`,disabled:!0,children:`Button text`}),(0,f.jsx)(u,{variant:`secondary`,size:`regular`,disabled:!0,children:`Button text`}),(0,f.jsx)(u,{variant:`tertiary`,size:`regular`,disabled:!0,children:`Button text`})]})},E={name:`Layout / Fixed vs Flexible`,parameters:{layout:`padded`},render:()=>(0,f.jsxs)(`div`,{className:`space-y-4 font-['Inter',sans-serif]`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`text-[11px] text-gray-400 mb-2`,children:`Fixed (min-width 183px)`}),(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,f.jsx)(u,{variant:`primary`,size:`regular`,layout:`fixed`,children:`OK`}),(0,f.jsx)(u,{variant:`secondary`,size:`regular`,layout:`fixed`,children:`Cancel`})]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`text-[11px] text-gray-400 mb-2`,children:`Flexible (hugs content)`}),(0,f.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,f.jsx)(u,{variant:`primary`,size:`regular`,layout:`flexible`,children:`OK`}),(0,f.jsx)(u,{variant:`secondary`,size:`regular`,layout:`flexible`,children:`Cancel`})]})]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'regular',
    layout: 'fixed',
    disabled: false,
    children: 'Button text'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '📋 All Variants',
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="font-['Inter',sans-serif] space-y-10 p-6">

      {/* PRIMARY */}
      <section>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Primary
        </p>
        <div className="space-y-3">
          {(['regular', 'medium', 'small'] as const).map(size => <div key={size} className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] text-gray-400 w-14">{size}</span>
              <Button variant="primary" size={size} layout="fixed">Button text</Button>
              <Button variant="primary" size={size} layout="fixed" icon={<></>}>Button text</Button>
              <Button variant="primary" size={size} layout="flexible">Button text</Button>
              <Button variant="primary" size={size} layout="fixed" disabled>Button text</Button>
            </div>)}
        </div>
      </section>

      {/* SECONDARY */}
      <section>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Secondary
        </p>
        <div className="space-y-3">
          {(['regular', 'medium', 'small'] as const).map(size => <div key={size} className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] text-gray-400 w-14">{size}</span>
              <Button variant="secondary" size={size} layout="fixed">Button text</Button>
              <Button variant="secondary" size={size} layout="fixed" icon={<></>}>Button text</Button>
              <Button variant="secondary" size={size} layout="flexible">Button text</Button>
              <Button variant="secondary" size={size} layout="fixed" disabled>Button text</Button>
            </div>)}
        </div>
      </section>

      {/* TERTIARY */}
      <section>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Tertiary
        </p>
        <div className="space-y-3">
          {(['regular', 'medium', 'small'] as const).map(size => <div key={size} className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] text-gray-400 w-14">{size}</span>
              <Button variant="tertiary" size={size} layout="fixed">Button text</Button>
              <Button variant="tertiary" size={size} layout="fixed" icon={<></>}>Button text</Button>
              <Button variant="tertiary" size={size} layout="flexible">Button text</Button>
              <Button variant="tertiary" size={size} layout="fixed" disabled>Button text</Button>
            </div>)}
        </div>
      </section>

    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Regular',
  render: () => <div className="flex flex-wrap gap-3 items-center">
      <Button variant="primary" size="regular" layout="fixed">Button text</Button>
      <Button variant="primary" size="regular" layout="fixed" icon={<></>}>Button text</Button>
      <Button variant="primary" size="regular" layout="flexible">Button text</Button>
      <Button variant="primary" size="regular" layout="fixed" disabled>Button text</Button>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Medium',
  render: () => <div className="flex flex-wrap gap-3 items-center">
      <Button variant="primary" size="medium" layout="fixed">Button text</Button>
      <Button variant="primary" size="medium" layout="fixed" icon={<></>}>Button text</Button>
      <Button variant="primary" size="medium" layout="flexible">Button text</Button>
      <Button variant="primary" size="medium" layout="fixed" disabled>Button text</Button>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Primary / Small',
  render: () => <div className="flex flex-wrap gap-3 items-center">
      <Button variant="primary" size="small" layout="fixed">Button text</Button>
      <Button variant="primary" size="small" layout="fixed" icon={<></>}>Button text</Button>
      <Button variant="primary" size="small" layout="flexible">Button text</Button>
      <Button variant="primary" size="small" layout="fixed" disabled>Button text</Button>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Secondary / Regular',
  render: () => <div className="flex flex-wrap gap-3 items-center">
      <Button variant="secondary" size="regular" layout="fixed">Button text</Button>
      <Button variant="secondary" size="regular" layout="fixed" icon={<></>}>Button text</Button>
      <Button variant="secondary" size="regular" layout="flexible">Button text</Button>
      <Button variant="secondary" size="regular" layout="fixed" disabled>Button text</Button>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Secondary / Medium',
  render: () => <div className="flex flex-wrap gap-3 items-center">
      <Button variant="secondary" size="medium" layout="fixed">Button text</Button>
      <Button variant="secondary" size="medium" layout="fixed" icon={<></>}>Button text</Button>
      <Button variant="secondary" size="medium" layout="flexible">Button text</Button>
      <Button variant="secondary" size="medium" layout="fixed" disabled>Button text</Button>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Secondary / Small',
  render: () => <div className="flex flex-wrap gap-3 items-center">
      <Button variant="secondary" size="small" layout="fixed">Button text</Button>
      <Button variant="secondary" size="small" layout="fixed" icon={<></>}>Button text</Button>
      <Button variant="secondary" size="small" layout="flexible">Button text</Button>
      <Button variant="secondary" size="small" layout="fixed" disabled>Button text</Button>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Tertiary / Regular',
  render: () => <div className="flex flex-wrap gap-3 items-center">
      <Button variant="tertiary" size="regular" layout="fixed">Button text</Button>
      <Button variant="tertiary" size="regular" layout="fixed" icon={<></>}>Button text</Button>
      <Button variant="tertiary" size="regular" layout="flexible">Button text</Button>
      <Button variant="tertiary" size="regular" layout="fixed" disabled>Button text</Button>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Tertiary / Medium',
  render: () => <div className="flex flex-wrap gap-3 items-center">
      <Button variant="tertiary" size="medium" layout="fixed">Button text</Button>
      <Button variant="tertiary" size="medium" layout="fixed" icon={<></>}>Button text</Button>
      <Button variant="tertiary" size="medium" layout="flexible">Button text</Button>
      <Button variant="tertiary" size="medium" layout="fixed" disabled>Button text</Button>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Tertiary / Small',
  render: () => <div className="flex flex-wrap gap-3 items-center">
      <Button variant="tertiary" size="small" layout="fixed">Button text</Button>
      <Button variant="tertiary" size="small" layout="fixed" icon={<></>}>Button text</Button>
      <Button variant="tertiary" size="small" layout="flexible">Button text</Button>
      <Button variant="tertiary" size="small" layout="fixed" disabled>Button text</Button>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'State / Disabled — all variants',
  render: () => <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary" size="regular" disabled>Button text</Button>
      <Button variant="secondary" size="regular" disabled>Button text</Button>
      <Button variant="tertiary" size="regular" disabled>Button text</Button>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Layout / Fixed vs Flexible',
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="space-y-4 font-['Inter',sans-serif]">
      <div>
        <p className="text-[11px] text-gray-400 mb-2">Fixed (min-width 183px)</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="regular" layout="fixed">OK</Button>
          <Button variant="secondary" size="regular" layout="fixed">Cancel</Button>
        </div>
      </div>
      <div>
        <p className="text-[11px] text-gray-400 mb-2">Flexible (hugs content)</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="regular" layout="flexible">OK</Button>
          <Button variant="secondary" size="regular" layout="flexible">Cancel</Button>
        </div>
      </div>
    </div>
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`AllVariants`,`PrimaryRegular`,`PrimaryMedium`,`PrimarySmall`,`SecondaryRegular`,`SecondaryMedium`,`SecondarySmall`,`TertiaryRegular`,`TertiaryMedium`,`TertiarySmall`,`DisabledAll`,`FixedVsFlexible`]}))();export{h as AllVariants,T as DisabledAll,E as FixedVsFlexible,m as Playground,_ as PrimaryMedium,g as PrimaryRegular,v as PrimarySmall,b as SecondaryMedium,y as SecondaryRegular,x as SecondarySmall,C as TertiaryMedium,S as TertiaryRegular,w as TertiarySmall,D as __namedExportsOrder,p as default};