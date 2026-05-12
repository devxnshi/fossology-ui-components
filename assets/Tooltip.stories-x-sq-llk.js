import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-H6Kf-PS5.js";function i(){return(0,u.jsx)(`svg`,{width:`6`,height:`12`,viewBox:`0 0 6 12`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,u.jsx)(`path`,{d:`M6 0L0 6L6 12V0Z`,fill:`#303030`})})}function a(){return(0,u.jsx)(`svg`,{width:`6`,height:`12`,viewBox:`0 0 6 12`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,u.jsx)(`path`,{d:`M0 0L6 6L0 12V0Z`,fill:`#303030`})})}function o(){return(0,u.jsx)(`svg`,{width:`12`,height:`6`,viewBox:`0 0 12 6`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,u.jsx)(`path`,{d:`M0 6L6 0L12 6H0Z`,fill:`#303030`})})}function s(){return(0,u.jsx)(`svg`,{width:`12`,height:`6`,viewBox:`0 0 12 6`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,u.jsx)(`path`,{d:`M0 0L6 6L12 0H0Z`,fill:`#303030`})})}function c(){return(0,u.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:[(0,u.jsx)(`circle`,{cx:`10`,cy:`10`,r:`9`,stroke:`#303030`,strokeWidth:`1.5`}),(0,u.jsx)(`path`,{d:`M10 9V14`,stroke:`#303030`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,u.jsx)(`circle`,{cx:`10`,cy:`6.5`,r:`0.75`,fill:`#303030`,stroke:`#303030`,strokeWidth:`0.5`})]})}function l({text:e}){return(0,u.jsx)(`div`,{style:{backgroundColor:`#303030`,borderRadius:2,padding:`4px 8px`,maxWidth:180,flexShrink:0},children:(0,u.jsx)(`span`,{style:{fontFamily:`"Inter", sans-serif`,fontStyle:`normal`,fontSize:12,lineHeight:`16px`,fontWeight:500,color:`#ffffff`,display:`block`,wordBreak:`break-word`},children:e})})}var u,d,f,p,m=e((()=>{u=r(),d=t(n()),f=d.forwardRef(({text:e,type:t=`Right`,className:n=``},r)=>(0,u.jsxs)(`div`,{ref:r,className:n,style:{display:`inline-flex`,flexDirection:t===`Right`||t===`Left`?`row`:`column`,alignItems:`center`,justifyContent:t===`Left`||t===`Top`?`flex-end`:void 0,position:`relative`},role:`tooltip`,children:[t===`Top`&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{text:e}),(0,u.jsx)(s,{})]}),t===`Left`&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{text:e}),(0,u.jsx)(a,{})]}),t===`Right`&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{}),(0,u.jsx)(l,{text:e})]}),t===`Bottom`&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{}),(0,u.jsx)(l,{text:e})]})]})),f.displayName=`Tooltip`,p=d.forwardRef(({tooltipText:e,icon:t,className:n=``},r)=>{let[i,a]=d.useState(!1);return(0,u.jsxs)(`div`,{ref:r,className:n,style:{display:`inline-flex`,alignItems:`center`,gap:i?4:0,height:30,cursor:`default`,position:`relative`},onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[(0,u.jsx)(`div`,{style:{width:20,height:20,flexShrink:0},children:t??(0,u.jsx)(c,{})}),i&&(0,u.jsx)(f,{text:e,type:`Right`})]})}),p.displayName=`IconWithTooltip`,f.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{text:{required:!0,tsType:{name:`string`},description:``},type:{required:!1,tsType:{name:`union`,raw:`'Right' | 'Bottom' | 'Left' | 'Top'`,elements:[{name:`literal`,value:`'Right'`},{name:`literal`,value:`'Bottom'`},{name:`literal`,value:`'Left'`},{name:`literal`,value:`'Top'`}]},description:``,defaultValue:{value:`'Right'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},p.__docgenInfo={description:``,methods:[],displayName:`IconWithTooltip`,props:{tooltipText:{required:!0,tsType:{name:`string`},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}}));function h({label:e,children:t}){return(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:24},children:[(0,g.jsx)(`span`,{style:{fontSize:14,color:`#101010`,width:180,flexShrink:0,fontFamily:`Inter, sans-serif`},children:e}),t]})}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{g=r(),m(),_={fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#9ca3af`,marginBottom:16,marginTop:0},v={title:`Components/Tooltip`,component:f,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`The Tooltip component provides brief, contextual information when users hover over or tap an element. It helps clarify the function of interface elements or provide additional details without cluttering the UI. Tooltips can appear above, below, to the left, or to the right of the trigger element, depending on context. A compact variation where only the icon is visible by default, and the tooltip appears on hover to provide a brief label or explanation is also shown below.`}}},argTypes:{type:{control:`select`,options:[`Right`,`Bottom`,`Left`,`Top`],description:`Direction the tooltip appears relative to its anchor`},text:{control:`text`,description:`Tooltip text content`}}},y=`Tooltip`,b=`Configure mimetypes from Admin › Customize › Skip MimeTypes from scanning`,x={args:{text:y,type:`Right`}},S={name:`📋 All Variants`,parameters:{layout:`padded`},render:()=>(0,g.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:48,display:`flex`,flexDirection:`column`,gap:40},children:[(0,g.jsxs)(`section`,{children:[(0,g.jsx)(`p`,{style:_,children:`Tooltip — all directions`}),(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,alignItems:`flex-start`},children:[(0,g.jsx)(h,{label:`Right`,children:(0,g.jsx)(f,{text:y,type:`Right`})}),(0,g.jsx)(h,{label:`Bottom`,children:(0,g.jsx)(f,{text:y,type:`Bottom`})}),(0,g.jsx)(h,{label:`Left`,children:(0,g.jsx)(f,{text:y,type:`Left`})}),(0,g.jsx)(h,{label:`Top`,children:(0,g.jsx)(f,{text:y,type:`Top`})})]})]}),(0,g.jsxs)(`section`,{children:[(0,g.jsx)(`p`,{style:_,children:`Icon with tooltip`}),(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,alignItems:`flex-start`},children:[(0,g.jsx)(h,{label:`Default (static icon)`,children:(0,g.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,g.jsx)(`circle`,{cx:`10`,cy:`10`,r:`9`,stroke:`#303030`,strokeWidth:`1.5`}),(0,g.jsx)(`path`,{d:`M10 9V14`,stroke:`#303030`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,g.jsx)(`circle`,{cx:`10`,cy:`6.5`,r:`0.75`,fill:`#303030`,stroke:`#303030`,strokeWidth:`0.5`})]})}),(0,g.jsx)(h,{label:`Hover (mouse over icon)`,children:(0,g.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:4,height:30},children:[(0,g.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,g.jsx)(`circle`,{cx:`10`,cy:`10`,r:`9`,stroke:`#303030`,strokeWidth:`1.5`}),(0,g.jsx)(`path`,{d:`M10 9V14`,stroke:`#303030`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,g.jsx)(`circle`,{cx:`10`,cy:`6.5`,r:`0.75`,fill:`#303030`,stroke:`#303030`,strokeWidth:`0.5`})]}),(0,g.jsx)(f,{text:b,type:`Right`})]})}),(0,g.jsx)(h,{label:`Interactive (hover me)`,children:(0,g.jsx)(p,{tooltipText:b})})]})]})]})},C={name:`Direction / Right`,render:()=>(0,g.jsx)(f,{text:y,type:`Right`})},w={name:`Direction / Bottom`,render:()=>(0,g.jsx)(f,{text:y,type:`Bottom`})},T={name:`Direction / Left`,render:()=>(0,g.jsx)(f,{text:y,type:`Left`})},E={name:`Direction / Top`,render:()=>(0,g.jsx)(f,{text:y,type:`Top`})},D={name:`Long text / Right`,render:()=>(0,g.jsx)(f,{text:b,type:`Right`})},O={name:`Long text / Bottom`,render:()=>(0,g.jsx)(f,{text:b,type:`Bottom`})},k={name:`Long text / Left`,render:()=>(0,g.jsx)(f,{text:b,type:`Left`})},A={name:`Long text / Top`,render:()=>(0,g.jsx)(f,{text:b,type:`Top`})},j={name:`IconWithTooltip / Default (hover to reveal)`,render:()=>(0,g.jsx)(p,{tooltipText:b})},M={name:`IconWithTooltip / Short tooltip text`,render:()=>(0,g.jsx)(p,{tooltipText:`Scan settings`})},N={name:`In context — form field with info icon`,parameters:{layout:`padded`},render:()=>(0,g.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,maxWidth:400},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,marginBottom:8},children:[(0,g.jsx)(`label`,{style:{fontSize:14,fontWeight:500,color:`#101010`},children:`Scan scope`}),(0,g.jsx)(p,{tooltipText:`Select whether to scan the entire upload or only the current folder.`})]}),(0,g.jsxs)(`select`,{style:{width:`100%`,height:36,border:`1px solid #cecece`,borderRadius:4,padding:`0 12px`,fontSize:14,fontFamily:`Inter, sans-serif`,color:`#101010`},children:[(0,g.jsx)(`option`,{children:`Whole Upload`}),(0,g.jsx)(`option`,{children:`Current Folder`})]})]})},P={name:`In context — anchor element with all directions`,parameters:{layout:`centered`},render:()=>(0,g.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,display:`grid`,gridTemplateColumns:`1fr auto 1fr`,gridTemplateRows:`1fr auto 1fr`,gap:16,alignItems:`center`,justifyItems:`center`,padding:48},children:[(0,g.jsx)(`div`,{style:{gridColumn:2,gridRow:1,display:`flex`,justifyContent:`center`},children:(0,g.jsx)(f,{text:`Top`,type:`Top`})}),(0,g.jsx)(`div`,{style:{gridColumn:1,gridRow:2,display:`flex`,justifyContent:`flex-end`},children:(0,g.jsx)(f,{text:`Left`,type:`Left`})}),(0,g.jsx)(`div`,{style:{gridColumn:2,gridRow:2,width:60,height:36,background:`#e1e1e1`,border:`1px solid #cecece`,borderRadius:4,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:13,color:`#303030`},children:`anchor`}),(0,g.jsx)(`div`,{style:{gridColumn:3,gridRow:2,display:`flex`,justifyContent:`flex-start`},children:(0,g.jsx)(f,{text:`Right`,type:`Right`})}),(0,g.jsx)(`div`,{style:{gridColumn:2,gridRow:3,display:`flex`,justifyContent:`center`},children:(0,g.jsx)(f,{text:`Bottom`,type:`Bottom`})})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    text: DEFAULT_TEXT,
    type: 'Right'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '📋 All Variants',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    padding: 48,
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>

      {/* Tooltip directions */}
      <section>
        <p style={sectionLabel}>Tooltip — all directions</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        alignItems: 'flex-start'
      }}>
          <StateRow label="Right">
            <Tooltip text={DEFAULT_TEXT} type="Right" />
          </StateRow>
          <StateRow label="Bottom">
            <Tooltip text={DEFAULT_TEXT} type="Bottom" />
          </StateRow>
          <StateRow label="Left">
            <Tooltip text={DEFAULT_TEXT} type="Left" />
          </StateRow>
          <StateRow label="Top">
            <Tooltip text={DEFAULT_TEXT} type="Top" />
          </StateRow>
        </div>
      </section>

      {/* Icon with tooltip */}
      <section>
        <p style={sectionLabel}>Icon with tooltip</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        alignItems: 'flex-start'
      }}>
          <StateRow label="Default (static icon)">
            {/* Show icon without hover state for static display */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="9" stroke="#303030" strokeWidth="1.5" />
              <path d="M10 9V14" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="10" cy="6.5" r="0.75" fill="#303030" stroke="#303030" strokeWidth="0.5" />
            </svg>
          </StateRow>
          <StateRow label="Hover (mouse over icon)">
            {/* Static representation of hover state */}
            <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            height: 30
          }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" stroke="#303030" strokeWidth="1.5" />
                <path d="M10 9V14" stroke="#303030" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="6.5" r="0.75" fill="#303030" stroke="#303030" strokeWidth="0.5" />
              </svg>
              <Tooltip text={LONG_TEXT} type="Right" />
            </div>
          </StateRow>
          <StateRow label="Interactive (hover me)">
            <IconWithTooltip tooltipText={LONG_TEXT} />
          </StateRow>
        </div>
      </section>

    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Direction / Right',
  render: () => <Tooltip text={DEFAULT_TEXT} type="Right" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Direction / Bottom',
  render: () => <Tooltip text={DEFAULT_TEXT} type="Bottom" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Direction / Left',
  render: () => <Tooltip text={DEFAULT_TEXT} type="Left" />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Direction / Top',
  render: () => <Tooltip text={DEFAULT_TEXT} type="Top" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Long text / Right',
  render: () => <Tooltip text={LONG_TEXT} type="Right" />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Long text / Bottom',
  render: () => <Tooltip text={LONG_TEXT} type="Bottom" />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Long text / Left',
  render: () => <Tooltip text={LONG_TEXT} type="Left" />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Long text / Top',
  render: () => <Tooltip text={LONG_TEXT} type="Top" />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'IconWithTooltip / Default (hover to reveal)',
  render: () => <IconWithTooltip tooltipText={LONG_TEXT} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'IconWithTooltip / Short tooltip text',
  render: () => <IconWithTooltip tooltipText="Scan settings" />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'In context — form field with info icon',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    padding: 24,
    maxWidth: 400
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }}>
        <label style={{
        fontSize: 14,
        fontWeight: 500,
        color: '#101010'
      }}>
          Scan scope
        </label>
        <IconWithTooltip tooltipText="Select whether to scan the entire upload or only the current folder." />
      </div>
      <select style={{
      width: '100%',
      height: 36,
      border: '1px solid #cecece',
      borderRadius: 4,
      padding: '0 12px',
      fontSize: 14,
      fontFamily: 'Inter, sans-serif',
      color: '#101010'
    }}>
        <option>Whole Upload</option>
        <option>Current Folder</option>
      </select>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'In context — anchor element with all directions',
  parameters: {
    layout: 'centered'
  },
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    gridTemplateRows: '1fr auto 1fr',
    gap: 16,
    alignItems: 'center',
    justifyItems: 'center',
    padding: 48
  }}>
      {/* Top */}
      <div style={{
      gridColumn: 2,
      gridRow: 1,
      display: 'flex',
      justifyContent: 'center'
    }}>
        <Tooltip text="Top" type="Top" />
      </div>

      {/* Left */}
      <div style={{
      gridColumn: 1,
      gridRow: 2,
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
        <Tooltip text="Left" type="Left" />
      </div>

      {/* Anchor element */}
      <div style={{
      gridColumn: 2,
      gridRow: 2,
      width: 60,
      height: 36,
      background: '#e1e1e1',
      border: '1px solid #cecece',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      color: '#303030'
    }}>
        anchor
      </div>

      {/* Right */}
      <div style={{
      gridColumn: 3,
      gridRow: 2,
      display: 'flex',
      justifyContent: 'flex-start'
    }}>
        <Tooltip text="Right" type="Right" />
      </div>

      {/* Bottom */}
      <div style={{
      gridColumn: 2,
      gridRow: 3,
      display: 'flex',
      justifyContent: 'center'
    }}>
        <Tooltip text="Bottom" type="Bottom" />
      </div>
    </div>
}`,...P.parameters?.docs?.source}}},F=[`Playground`,`AllVariants`,`DirectionRight`,`DirectionBottom`,`DirectionLeft`,`DirectionTop`,`LongTextRight`,`LongTextBottom`,`LongTextLeft`,`LongTextTop`,`IconTooltipDefault`,`IconTooltipShortText`,`InContext`,`AllDirectionsInContext`]}))();export{P as AllDirectionsInContext,S as AllVariants,w as DirectionBottom,T as DirectionLeft,C as DirectionRight,E as DirectionTop,j as IconTooltipDefault,M as IconTooltipShortText,N as InContext,O as LongTextBottom,k as LongTextLeft,D as LongTextRight,A as LongTextTop,x as Playground,F as __namedExportsOrder,v as default};