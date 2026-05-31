import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-0BrNG41E.js";var i,a,o,s,c,l=e((()=>{i=r(),a=t(n()),o=({color:e})=>(0,i.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:[(0,i.jsx)(`rect`,{x:`5`,y:`1`,width:`9`,height:`11`,rx:`1.5`,stroke:e,strokeWidth:`1.25`,fill:`none`}),(0,i.jsx)(`rect`,{x:`2`,y:`4`,width:`9`,height:`11`,rx:`1.5`,stroke:e,strokeWidth:`1.25`,fill:`none`})]}),s=a.forwardRef(({linkType:e=`Small`,active:t=!1,icon:n=!1,iconSwap:r,children:s=`Link`,className:c=``,disabled:l=!1,type:u=`button`,onMouseEnter:d,onMouseLeave:f,...p},m)=>{let[h,g]=a.useState(!1),_=e===`Medium`,v=h&&!l&&!t,y=_?`text-[14px] leading-[20px]`:`text-[13px] leading-[16px]`,b=v?`font-semibold`:`font-normal`,x=v?`#000b54`:t?`#303030`:`#004494`,S=_?`inline-flex items-center gap-[4px] h-[28px] px-[2px] py-[4px]`:`inline-flex items-start p-[2px]`,C=v?`border-b border-[#000b54]`:``;return t?(0,i.jsxs)(`div`,{className:[S,_?`gap-[4px]`:`flex-col`,c].filter(Boolean).join(` `),children:[n&&(r??(0,i.jsx)(o,{color:x})),(0,i.jsx)(`span`,{className:`${y} font-normal`,style:{color:x},children:s})]}):(0,i.jsxs)(`button`,{ref:m,type:u,disabled:l,className:[S,C,`cursor-pointer outline-none select-none`,`focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#000b54]`,`transition-colors duration-150`,c].filter(Boolean).join(` `),onMouseEnter:e=>{g(!0),d?.(e)},onMouseLeave:e=>{g(!1),f?.(e)},...p,children:[n&&(r??(0,i.jsx)(o,{color:x})),(0,i.jsx)(`span`,{className:`${y} ${b}`,style:{color:x},children:s})]})}),s.displayName=`LinkItem`,c=a.forwardRef(({notInteractive:e=!1,disabled:t=!1,children:n=`@radix-ui/react-alert-dialog`,className:r=``,style:o,onMouseEnter:s,onMouseLeave:c,...l},u)=>{let[d,f]=a.useState(!1),p=d&&!t&&!e,m=e?`#101010`:p?`#000b54`:`#004494`,h=p?{borderBottom:`1px solid #000b54`}:{borderBottom:`1px solid transparent`},g=[`inline-flex items-start p-[4px] rounded-[4px]`,`font-['Inter',sans-serif] font-bold text-[16px] leading-[24px]`,t?`opacity-40 cursor-not-allowed`:``,e?`cursor-default select-text`:`cursor-pointer`,`transition-colors duration-150`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#000b54]`,r].filter(Boolean).join(` `);return e||t?(0,i.jsx)(`span`,{className:g,style:{color:m,...o},"aria-disabled":t,children:n}):(0,i.jsx)(`a`,{ref:u,className:g,style:{color:m,textDecoration:`none`,...o},onMouseEnter:e=>{f(!0),s?.(e)},onMouseLeave:e=>{f(!1),c?.(e)},...l,children:(0,i.jsx)(`span`,{style:{...h},children:n})})}),c.displayName=`InlineLink`,s.__docgenInfo={description:``,methods:[],displayName:`LinkItem`,props:{linkType:{required:!1,tsType:{name:`union`,raw:`'Small' | 'Medium'`,elements:[{name:`literal`,value:`'Small'`},{name:`literal`,value:`'Medium'`}]},description:``,defaultValue:{value:`'Small'`,computed:!1}},active:{required:!1,tsType:{name:`boolean`},description:`When true renders as static (non-clickable) active text — no button`,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},iconSwap:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``,defaultValue:{value:`'Link'`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},type:{defaultValue:{value:`'button'`,computed:!1},required:!1}}},c.__docgenInfo={description:``,methods:[],displayName:`InlineLink`,props:{notInteractive:{required:!1,tsType:{name:`boolean`},description:`Force a non-interactive display (no anchor tag rendered)`,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``,defaultValue:{value:`'@radix-ui/react-alert-dialog'`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{u=r(),l(),d={title:`Components/LinkItem`,component:s,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`The Inline Link is used within blocks of text to reference external pages, internal navigation, or contextual actions.`}}},argTypes:{linkType:{control:`select`,options:[`Small`,`Medium`]},active:{control:`boolean`},icon:{control:`boolean`},disabled:{control:`boolean`},children:{control:`text`}}},f={args:{linkType:`Small`,active:!1,icon:!1,disabled:!1,children:`Link`}},p={name:`📋 All Variants`,parameters:{layout:`padded`},render:()=>(0,u.jsxs)(`div`,{className:`font-['Inter',sans-serif] space-y-10 p-6`,children:[(0,u.jsxs)(`section`,{children:[(0,u.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4`,children:`Small — no icon`}),(0,u.jsxs)(`div`,{className:`flex flex-wrap items-center gap-6`,children:[(0,u.jsxs)(`div`,{className:`flex flex-col items-start gap-4`,children:[(0,u.jsx)(`span`,{className:`text-[11px] text-gray-400`,children:`Default (hover me)`}),(0,u.jsx)(s,{linkType:`Small`,children:`Link`})]}),(0,u.jsxs)(`div`,{className:`flex flex-col items-start gap-4`,children:[(0,u.jsx)(`span`,{className:`text-[11px] text-gray-400`,children:`Active (static)`}),(0,u.jsx)(s,{linkType:`Small`,active:!0,children:`Link`})]}),(0,u.jsxs)(`div`,{className:`flex flex-col items-start gap-4`,children:[(0,u.jsx)(`span`,{className:`text-[11px] text-gray-400`,children:`Default Highlight (hover me)`}),(0,u.jsx)(s,{linkType:`Small`,children:`Link`})]})]})]}),(0,u.jsxs)(`section`,{children:[(0,u.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4`,children:`Medium — with icon`}),(0,u.jsxs)(`div`,{className:`flex flex-wrap items-center gap-6`,children:[(0,u.jsxs)(`div`,{className:`flex flex-col items-start gap-4`,children:[(0,u.jsx)(`span`,{className:`text-[11px] text-gray-400`,children:`Default (hover me)`}),(0,u.jsx)(s,{linkType:`Medium`,icon:!0,children:`Link`})]}),(0,u.jsxs)(`div`,{className:`flex flex-col items-start gap-4`,children:[(0,u.jsx)(`span`,{className:`text-[11px] text-gray-400`,children:`Active (static)`}),(0,u.jsx)(s,{linkType:`Medium`,icon:!0,active:!0,children:`Link`})]}),(0,u.jsxs)(`div`,{className:`flex flex-col items-start gap-4`,children:[(0,u.jsx)(`span`,{className:`text-[11px] text-gray-400`,children:`Default Highlight (hover me)`}),(0,u.jsx)(s,{linkType:`Medium`,icon:!0,children:`Link`})]})]})]}),(0,u.jsxs)(`section`,{children:[(0,u.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4`,children:`Inline Link (body text)`}),(0,u.jsxs)(`div`,{className:`flex flex-wrap items-center gap-6`,children:[(0,u.jsxs)(`div`,{className:`flex flex-col items-start gap-2`,children:[(0,u.jsx)(`span`,{className:`text-[11px] text-gray-400`,children:`Default (hover me)`}),(0,u.jsx)(c,{href:`#`,children:`@radix-ui/react-alert-dialog`})]}),(0,u.jsxs)(`div`,{className:`flex flex-col items-start gap-2`,children:[(0,u.jsx)(`span`,{className:`text-[11px] text-gray-400`,children:`Disabled`}),(0,u.jsx)(c,{disabled:!0,children:`@radix-ui/react-alert-dialog`})]}),(0,u.jsxs)(`div`,{className:`flex flex-col items-start gap-2`,children:[(0,u.jsx)(`span`,{className:`text-[11px] text-gray-400`,children:`Not interactive`}),(0,u.jsx)(c,{notInteractive:!0,children:`@radix-ui/react-alert-dialog`})]})]})]})]})},m={name:`Small / Default`,render:()=>(0,u.jsx)(`div`,{className:`flex flex-wrap gap-6 items-center`,children:(0,u.jsx)(s,{linkType:`Small`,children:`Link`})})},h={name:`Small / Active (static)`,render:()=>(0,u.jsx)(`div`,{className:`flex flex-wrap gap-6 items-center`,children:(0,u.jsx)(s,{linkType:`Small`,active:!0,children:`Link`})})},g={name:`Medium / Default`,render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap gap-6 items-center`,children:[(0,u.jsx)(s,{linkType:`Medium`,children:`Link`}),(0,u.jsx)(s,{linkType:`Medium`,icon:!0,children:`Link`})]})},_={name:`Medium / Active (static)`,render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap gap-6 items-center`,children:[(0,u.jsx)(s,{linkType:`Medium`,active:!0,children:`Link`}),(0,u.jsx)(s,{linkType:`Medium`,icon:!0,active:!0,children:`Link`})]})},v={name:`Icon / Medium with copy icon`,render:()=>(0,u.jsxs)(`div`,{className:`flex flex-wrap gap-6 items-center`,children:[(0,u.jsx)(s,{linkType:`Medium`,icon:!0,children:`Default (hover me)`}),(0,u.jsx)(s,{linkType:`Medium`,icon:!0,active:!0,children:`Active`})]})},y={name:`State / All states — Small`,render:()=>(0,u.jsx)(`div`,{className:`font-['Inter',sans-serif] space-y-4 p-4`,children:[{label:`Default (hover me)`,node:(0,u.jsx)(s,{linkType:`Small`,children:`Link`})},{label:`Active (static)`,node:(0,u.jsx)(s,{linkType:`Small`,active:!0,children:`Link`})},{label:`Default Highlight`,node:(0,u.jsx)(s,{linkType:`Small`,children:`Link`})}].map(({label:e,node:t})=>(0,u.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,u.jsx)(`span`,{className:`text-[12px] text-gray-400 w-44`,children:e}),t]},e))})},b={name:`State / All states — Medium`,render:()=>(0,u.jsx)(`div`,{className:`font-['Inter',sans-serif] space-y-4 p-4`,children:[{label:`Default (hover me)`,node:(0,u.jsx)(s,{linkType:`Medium`,icon:!0,children:`Link`})},{label:`Active (static)`,node:(0,u.jsx)(s,{linkType:`Medium`,icon:!0,active:!0,children:`Link`})},{label:`Default Highlight`,node:(0,u.jsx)(s,{linkType:`Medium`,icon:!0,children:`Link`})}].map(({label:e,node:t})=>(0,u.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,u.jsx)(`span`,{className:`text-[12px] text-gray-400 w-44`,children:e}),t]},e))})},x={name:`Inline Link / Default`,render:()=>(0,u.jsxs)(`p`,{className:`font-['Inter',sans-serif] text-[16px] leading-[24px] text-[#101010]`,children:[`Install via`,` `,(0,u.jsx)(c,{href:`#`,children:`@radix-ui/react-alert-dialog`}),` `,`to get started.`]})},S={name:`Inline Link / Disabled`,render:()=>(0,u.jsxs)(`p`,{className:`font-['Inter',sans-serif] text-[16px] leading-[24px] text-[#101010]`,children:[`This package`,` `,(0,u.jsx)(c,{disabled:!0,children:`@radix-ui/react-alert-dialog`}),` `,`is currently unavailable.`]})},C={name:`Inline Link / Not interactive`,render:()=>(0,u.jsxs)(`p`,{className:`font-['Inter',sans-serif] text-[16px] leading-[24px] text-[#101010]`,children:[`You are viewing`,` `,(0,u.jsx)(c,{notInteractive:!0,children:`@radix-ui/react-alert-dialog`}),` `,`in read-only mode.`]})},w={name:`Inline Link / All states`,parameters:{layout:`padded`},render:()=>(0,u.jsx)(`div`,{className:`font-['Inter',sans-serif] space-y-4 p-4`,children:[{label:`Default (hover me)`,node:(0,u.jsx)(c,{href:`#`,children:`@radix-ui/react-alert-dialog`})},{label:`Disabled`,node:(0,u.jsx)(c,{disabled:!0,children:`@radix-ui/react-alert-dialog`})},{label:`Not interactive`,node:(0,u.jsx)(c,{notInteractive:!0,children:`@radix-ui/react-alert-dialog`})}].map(({label:e,node:t})=>(0,u.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,u.jsx)(`span`,{className:`text-[12px] text-gray-400 w-36`,children:e}),t]},e))})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    linkType: 'Small',
    active: false,
    icon: false,
    disabled: false,
    children: 'Link'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '📋 All Variants',
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="font-['Inter',sans-serif] space-y-10 p-6">

      {/* SMALL — no icon */}
      <section>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Small — no icon
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-start gap-4">
            <span className="text-[11px] text-gray-400">Default (hover me)</span>
            <LinkItem linkType="Small">Link</LinkItem>
          </div>
          <div className="flex flex-col items-start gap-4">
            <span className="text-[11px] text-gray-400">Active (static)</span>
            <LinkItem linkType="Small" active>Link</LinkItem>
          </div>
          <div className="flex flex-col items-start gap-4">
            <span className="text-[11px] text-gray-400">Default Highlight (hover me)</span>
            <LinkItem linkType="Small">Link</LinkItem>
          </div>
        </div>
      </section>

      {/* MEDIUM — with icon */}
      <section>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Medium — with icon
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-start gap-4">
            <span className="text-[11px] text-gray-400">Default (hover me)</span>
            <LinkItem linkType="Medium" icon>Link</LinkItem>
          </div>
          <div className="flex flex-col items-start gap-4">
            <span className="text-[11px] text-gray-400">Active (static)</span>
            <LinkItem linkType="Medium" icon active>Link</LinkItem>
          </div>
          <div className="flex flex-col items-start gap-4">
            <span className="text-[11px] text-gray-400">Default Highlight (hover me)</span>
            <LinkItem linkType="Medium" icon>Link</LinkItem>
          </div>
        </div>
      </section>

      {/* INLINE LINK */}
      <section>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Inline Link (body text)
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex flex-col items-start gap-2">
            <span className="text-[11px] text-gray-400">Default (hover me)</span>
            <InlineLink href="#">@radix-ui/react-alert-dialog</InlineLink>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-[11px] text-gray-400">Disabled</span>
            <InlineLink disabled>@radix-ui/react-alert-dialog</InlineLink>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-[11px] text-gray-400">Not interactive</span>
            <InlineLink notInteractive>@radix-ui/react-alert-dialog</InlineLink>
          </div>
        </div>
      </section>

    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Small / Default',
  render: () => <div className="flex flex-wrap gap-6 items-center">
      <LinkItem linkType="Small">Link</LinkItem>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Small / Active (static)',
  render: () => <div className="flex flex-wrap gap-6 items-center">
      <LinkItem linkType="Small" active>Link</LinkItem>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Medium / Default',
  render: () => <div className="flex flex-wrap gap-6 items-center">
      <LinkItem linkType="Medium">Link</LinkItem>
      <LinkItem linkType="Medium" icon>Link</LinkItem>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Medium / Active (static)',
  render: () => <div className="flex flex-wrap gap-6 items-center">
      <LinkItem linkType="Medium" active>Link</LinkItem>
      <LinkItem linkType="Medium" icon active>Link</LinkItem>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Icon / Medium with copy icon',
  render: () => <div className="flex flex-wrap gap-6 items-center">
      <LinkItem linkType="Medium" icon>Default (hover me)</LinkItem>
      <LinkItem linkType="Medium" icon active>Active</LinkItem>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'State / All states — Small',
  render: () => <div className="font-['Inter',sans-serif] space-y-4 p-4">
      {([{
      label: 'Default (hover me)',
      node: <LinkItem linkType="Small">Link</LinkItem>
    }, {
      label: 'Active (static)',
      node: <LinkItem linkType="Small" active>Link</LinkItem>
    }, {
      label: 'Default Highlight',
      node: <LinkItem linkType="Small">Link</LinkItem>
    }] as {
      label: string;
      node: React.ReactNode;
    }[]).map(({
      label,
      node
    }) => <div key={label} className="flex items-center gap-6">
          <span className="text-[12px] text-gray-400 w-44">{label}</span>
          {node}
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'State / All states — Medium',
  render: () => <div className="font-['Inter',sans-serif] space-y-4 p-4">
      {([{
      label: 'Default (hover me)',
      node: <LinkItem linkType="Medium" icon>Link</LinkItem>
    }, {
      label: 'Active (static)',
      node: <LinkItem linkType="Medium" icon active>Link</LinkItem>
    }, {
      label: 'Default Highlight',
      node: <LinkItem linkType="Medium" icon>Link</LinkItem>
    }] as {
      label: string;
      node: React.ReactNode;
    }[]).map(({
      label,
      node
    }) => <div key={label} className="flex items-center gap-6">
          <span className="text-[12px] text-gray-400 w-44">{label}</span>
          {node}
        </div>)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Inline Link / Default',
  render: () => <p className="font-['Inter',sans-serif] text-[16px] leading-[24px] text-[#101010]">
      Install via{' '}
      <InlineLink href="#">@radix-ui/react-alert-dialog</InlineLink>
      {' '}to get started.
    </p>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Inline Link / Disabled',
  render: () => <p className="font-['Inter',sans-serif] text-[16px] leading-[24px] text-[#101010]">
      This package{' '}
      <InlineLink disabled>@radix-ui/react-alert-dialog</InlineLink>
      {' '}is currently unavailable.
    </p>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Inline Link / Not interactive',
  render: () => <p className="font-['Inter',sans-serif] text-[16px] leading-[24px] text-[#101010]">
      You are viewing{' '}
      <InlineLink notInteractive>@radix-ui/react-alert-dialog</InlineLink>
      {' '}in read-only mode.
    </p>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Inline Link / All states',
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="font-['Inter',sans-serif] space-y-4 p-4">
      {([{
      label: 'Default (hover me)',
      node: <InlineLink href="#">@radix-ui/react-alert-dialog</InlineLink>
    }, {
      label: 'Disabled',
      node: <InlineLink disabled>@radix-ui/react-alert-dialog</InlineLink>
    }, {
      label: 'Not interactive',
      node: <InlineLink notInteractive>@radix-ui/react-alert-dialog</InlineLink>
    }] as {
      label: string;
      node: React.ReactNode;
    }[]).map(({
      label,
      node
    }) => <div key={label} className="flex items-center gap-6">
          <span className="text-[12px] text-gray-400 w-36">{label}</span>
          {node}
        </div>)}
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`AllVariants`,`SmallDefault`,`SmallActive`,`MediumDefault`,`MediumActive`,`WithIcon`,`AllStates`,`AllStatesMedium`,`InlineLinkDefault`,`InlineLinkDisabled`,`InlineLinkNotInteractive`,`InlineLinkAllStates`]}))();export{y as AllStates,b as AllStatesMedium,p as AllVariants,w as InlineLinkAllStates,x as InlineLinkDefault,S as InlineLinkDisabled,C as InlineLinkNotInteractive,_ as MediumActive,g as MediumDefault,f as Playground,h as SmallActive,m as SmallDefault,v as WithIcon,T as __namedExportsOrder,d as default};