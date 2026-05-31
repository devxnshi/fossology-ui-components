import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-D7K8adO_.js";function i({color:e}){return(0,s.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,s.jsx)(`path`,{d:`M6 6L18 18M18 6L6 18`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function a(e,t=15){let n=parseInt(e.replace(`#`,``),16);return`#${[Math.max(0,(n>>16)-t),Math.max(0,(n>>8&255)-t),Math.max(0,(n&255)-t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function o({label:e,bgColor:t,onClick:n}){let[r,i]=c.useState(!1);return(0,s.jsx)(`button`,{type:`button`,className:`flex items-center justify-center rounded-[4px] cursor-pointer outline-none`,style:{backgroundColor:r?a(t):t,padding:`8px 16px`,border:`none`,flexShrink:0,transition:`background-color 150ms`},onClick:n,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:(0,s.jsx)(`span`,{style:{fontFamily:`"Inter", sans-serif`,fontStyle:`normal`,fontSize:16,lineHeight:`24px`,fontWeight:500,color:`#ffffff`,whiteSpace:`nowrap`},children:e})})}var s,c,l,u,d,f,p,m,h=e((()=>{s=r(),c=t(n()),l={Error:{fill:`#ffebee`,main:`#d02216`,text:`#a41411`},Warning:{fill:`#fff3e0`,main:`#ef6c00`,text:`#af4f00`},Info:{fill:`#e1f5fe`,main:`#0076b6`,text:`#00669d`},Success:{fill:`#e8f5e9`,main:`#2e7d32`,text:`#1e4620`}},u=()=>(0,s.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:[(0,s.jsx)(`circle`,{cx:`12`,cy:`12`,r:`11`,fill:`#d02216`}),(0,s.jsx)(`path`,{d:`M12 7v6`,stroke:`#ffffff`,strokeWidth:`2`,strokeLinecap:`round`}),(0,s.jsx)(`circle`,{cx:`12`,cy:`16.5`,r:`1`,fill:`#ffffff`})]}),d=()=>(0,s.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:[(0,s.jsx)(`path`,{d:`M12 2.5L22.5 21H1.5L12 2.5Z`,fill:`#ef6c00`}),(0,s.jsx)(`path`,{d:`M12 9.5v5`,stroke:`#ffffff`,strokeWidth:`2`,strokeLinecap:`round`}),(0,s.jsx)(`circle`,{cx:`12`,cy:`17.5`,r:`1`,fill:`#ffffff`})]}),f=()=>(0,s.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:[(0,s.jsx)(`circle`,{cx:`12`,cy:`12`,r:`11`,fill:`#0076b6`}),(0,s.jsx)(`path`,{d:`M12 11v6`,stroke:`#ffffff`,strokeWidth:`2`,strokeLinecap:`round`}),(0,s.jsx)(`circle`,{cx:`12`,cy:`7.5`,r:`1`,fill:`#ffffff`})]}),p=()=>(0,s.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:[(0,s.jsx)(`circle`,{cx:`12`,cy:`12`,r:`11`,fill:`#2e7d32`}),(0,s.jsx)(`path`,{d:`M7 12.5L10.5 16L17 9`,stroke:`#ffffff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),m=c.forwardRef(({type:e=`Error`,title:t,description:n=`Description`,showButton:r=!1,buttonLabel:a=`Button text`,showClose:c=!0,onClose:m,onButtonClick:h,className:g=``},_)=>{let v=l[e],y=!!t,b=e===`Error`?u:e===`Warning`?d:e===`Info`?f:p;return(0,s.jsxs)(`div`,{ref:_,role:`alert`,className:[`flex items-start rounded-[4px] w-full`,g].filter(Boolean).join(` `),style:{backgroundColor:v.fill,gap:12,padding:`12px 16px`},children:[(0,s.jsx)(b,{}),(0,s.jsxs)(`div`,{className:`flex flex-1 min-w-0`,style:{flexDirection:r?`row`:`column`,alignItems:r?`flex-start`:void 0,gap:r?12:4},children:[(0,s.jsxs)(`div`,{className:`flex flex-col min-w-0`,style:{flex:`1 0 0`,gap:4},children:[y&&(0,s.jsx)(`p`,{style:{fontFamily:`"Inter", sans-serif`,fontStyle:`normal`,fontSize:16,lineHeight:`24px`,fontWeight:600,color:v.text,margin:0,width:`100%`},children:t}),(0,s.jsx)(`p`,{style:{fontFamily:`"Inter", sans-serif`,fontStyle:`normal`,fontSize:14,lineHeight:`20px`,fontWeight:400,color:v.text,margin:0,width:`100%`},children:n})]}),r&&(0,s.jsx)(o,{label:a,bgColor:v.main,onClick:h})]}),c&&(0,s.jsx)(`button`,{type:`button`,"aria-label":`Dismiss alert`,className:`flex items-center justify-center shrink-0 outline-none cursor-pointer`,style:{width:24,height:24,background:`transparent`,border:`none`,padding:0},onClick:m,children:(0,s.jsx)(i,{color:v.text})})]})}),m.displayName=`Alert`,m.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{type:{required:!1,tsType:{name:`union`,raw:`'Error' | 'Warning' | 'Info' | 'Success'`,elements:[{name:`literal`,value:`'Error'`},{name:`literal`,value:`'Warning'`},{name:`literal`,value:`'Info'`},{name:`literal`,value:`'Success'`}]},description:`Semantic type — controls colour scheme and icon`,defaultValue:{value:`'Error'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Title text — required for V1 and V2`},description:{required:!1,tsType:{name:`string`},description:`Body description text`,defaultValue:{value:`'Description'`,computed:!1}},showButton:{required:!1,tsType:{name:`boolean`},description:`Show the action button`,defaultValue:{value:`false`,computed:!1}},buttonLabel:{required:!1,tsType:{name:`string`},description:`Button label`,defaultValue:{value:`'Button text'`,computed:!1}},showClose:{required:!1,tsType:{name:`boolean`},description:`Show the close/dismiss button`,defaultValue:{value:`true`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when close is clicked`},onButtonClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the action button is clicked`},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{g=r(),_=t(n()),h(),v={fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#9ca3af`,marginBottom:12,marginTop:0},y={title:`Components/Alert`,component:m,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`The Alert component displays contextual messages to inform users of important actions or system statuses—such as success, warning, error, and info.It supports multiple variations, including with or without a title, and optional close icons for dismissible alerts.`}}},argTypes:{type:{control:`select`,options:[`Error`,`Warning`,`Info`,`Success`]},title:{control:`text`},description:{control:`text`},showButton:{control:`boolean`},showClose:{control:`boolean`},buttonLabel:{control:`text`}}},b={args:{type:`Error`,title:`Title`,description:`Description`,showButton:!0,showClose:!0,buttonLabel:`Button text`}},x={name:`📋 All Variants`,parameters:{layout:`padded`},render:()=>(0,g.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,display:`flex`,flexDirection:`column`,gap:48,maxWidth:920},children:[(0,g.jsxs)(`section`,{children:[(0,g.jsx)(`p`,{style:v,children:`Version 1 — Title, description and button`}),(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,g.jsx)(m,{type:`Error`,title:`Title`,description:`Description`,showButton:!0,showClose:!0,buttonLabel:`Button text`}),(0,g.jsx)(m,{type:`Warning`,title:`Title`,description:`Description`,showButton:!0,showClose:!0,buttonLabel:`Button text`}),(0,g.jsx)(m,{type:`Info`,title:`Title`,description:`Description`,showButton:!0,showClose:!0,buttonLabel:`Button text`}),(0,g.jsx)(m,{type:`Success`,title:`Title`,description:`Description`,showButton:!0,showClose:!0,buttonLabel:`Button text`})]})]}),(0,g.jsxs)(`section`,{children:[(0,g.jsx)(`p`,{style:v,children:`Version 2 — Title and description`}),(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,g.jsx)(m,{type:`Error`,title:`Title`,description:`Description`,showButton:!1,showClose:!0}),(0,g.jsx)(m,{type:`Warning`,title:`Title`,description:`Description`,showButton:!1,showClose:!0}),(0,g.jsx)(m,{type:`Info`,title:`Title`,description:`Description`,showButton:!1,showClose:!0}),(0,g.jsx)(m,{type:`Success`,title:`Title`,description:`Description`,showButton:!1,showClose:!0})]})]}),(0,g.jsxs)(`section`,{children:[(0,g.jsx)(`p`,{style:v,children:`Version 3 — Description and button`}),(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,g.jsx)(m,{type:`Error`,description:`Description`,showButton:!0,showClose:!0,buttonLabel:`Button text`}),(0,g.jsx)(m,{type:`Warning`,description:`Description`,showButton:!0,showClose:!0,buttonLabel:`Button text`}),(0,g.jsx)(m,{type:`Info`,description:`Description`,showButton:!0,showClose:!0,buttonLabel:`Button text`}),(0,g.jsx)(m,{type:`Success`,description:`Description`,showButton:!0,showClose:!0,buttonLabel:`Button text`})]})]}),(0,g.jsxs)(`section`,{children:[(0,g.jsx)(`p`,{style:v,children:`Version 4 — Only description`}),(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,g.jsx)(m,{type:`Error`,description:`Description`,showButton:!1,showClose:!0}),(0,g.jsx)(m,{type:`Warning`,description:`Description`,showButton:!1,showClose:!0}),(0,g.jsx)(m,{type:`Info`,description:`Description`,showButton:!1,showClose:!0}),(0,g.jsx)(m,{type:`Success`,description:`Description`,showButton:!1,showClose:!0})]})]})]})},S={name:`Type / Error`,render:()=>(0,g.jsx)(m,{type:`Error`,title:`Something went wrong`,description:`The upload failed due to a server error. Please try again.`,showButton:!0,showClose:!0,buttonLabel:`Retry`})},C={name:`Type / Warning`,render:()=>(0,g.jsx)(m,{type:`Warning`,title:`Action required`,description:`Your session will expire in 5 minutes. Save your work to avoid losing changes.`,showButton:!0,showClose:!0,buttonLabel:`Save now`})},w={name:`Type / Info`,render:()=>(0,g.jsx)(m,{type:`Info`,title:`Scan in progress`,description:`The license scan for your upload is running. Results will appear shortly.`,showButton:!1,showClose:!0})},T={name:`Type / Success`,render:()=>(0,g.jsx)(m,{type:`Success`,title:`Upload complete`,description:`Your file has been uploaded and queued for analysis successfully.`,showButton:!1,showClose:!0})},E={name:`Version 1 / Title + Description + Button`,render:()=>(0,g.jsx)(m,{type:`Error`,title:`Title`,description:`Description`,showButton:!0,showClose:!0,buttonLabel:`Button text`})},D={name:`Version 2 / Title + Description`,render:()=>(0,g.jsx)(m,{type:`Info`,title:`Title`,description:`Description`,showButton:!1,showClose:!0})},O={name:`Version 3 / Description + Button`,render:()=>(0,g.jsx)(m,{type:`Warning`,description:`Description`,showButton:!0,showClose:!0,buttonLabel:`Button text`})},k={name:`Version 4 / Description only`,render:()=>(0,g.jsx)(m,{type:`Success`,description:`Description`,showButton:!1,showClose:!0})},A={name:`State / Without close button (non-dismissible)`,render:()=>(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,maxWidth:920},children:[(0,g.jsx)(m,{type:`Error`,title:`Error`,description:`This alert cannot be dismissed.`,showButton:!1,showClose:!1}),(0,g.jsx)(m,{type:`Warning`,title:`Warning`,description:`This alert cannot be dismissed.`,showButton:!1,showClose:!1}),(0,g.jsx)(m,{type:`Info`,title:`Info`,description:`This alert cannot be dismissed.`,showButton:!1,showClose:!1}),(0,g.jsx)(m,{type:`Success`,title:`Success`,description:`This alert cannot be dismissed.`,showButton:!1,showClose:!1})]})},j={name:`Real world / Dismissible alerts`,parameters:{layout:`padded`},render:()=>{let[e,t]=_.useState([{id:`1`,type:`Error`,title:`Upload failed`,description:`The file could not be uploaded. Please check your connection and try again.`},{id:`2`,type:`Warning`,title:`Scan incomplete`,description:`Some agents did not finish scanning. Results may be incomplete.`},{id:`3`,type:`Info`,title:`New version available`,description:`FOSSology 4.6.0 is available. Update from Admin → Maintenance.`},{id:`4`,type:`Success`,title:`Report generated`,description:`Your SPDX report has been created and is ready to download.`}]);return(0,g.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,display:`flex`,flexDirection:`column`,gap:12,maxWidth:920},children:[(0,g.jsx)(`p`,{style:{fontSize:13,color:`#6b7280`,marginBottom:4,marginTop:0},children:`Click the × to dismiss each alert.`}),e.map(e=>(0,g.jsx)(m,{type:e.type,title:e.title,description:e.description,showButton:!1,showClose:!0,onClose:()=>t(t=>t.filter(t=>t.id!==e.id))},e.id)),e.length===0&&(0,g.jsx)(`p`,{style:{fontSize:14,color:`#9ca3af`},children:`All alerts dismissed.`})]})}},M={name:`In context — above a form`,parameters:{layout:`padded`},render:()=>(0,g.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,maxWidth:640,display:`flex`,flexDirection:`column`,gap:16},children:[(0,g.jsx)(m,{type:`Error`,title:`Form submission failed`,description:`Please correct the errors below and resubmit.`,showButton:!1,showClose:!0}),(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,g.jsx)(`label`,{style:{fontSize:14,fontWeight:500,color:`#101010`},children:`Upload name`}),(0,g.jsx)(`input`,{type:`text`,placeholder:`Enter upload name`,style:{height:36,border:`1px solid #d02216`,borderRadius:4,padding:`0 12px`,fontSize:14,fontFamily:`Inter, sans-serif`,color:`#101010`}}),(0,g.jsx)(`span`,{style:{fontSize:12,color:`#d02216`},children:`Upload name is required.`})]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Error',
    title: 'Title',
    description: 'Description',
    showButton: true,
    showClose: true,
    buttonLabel: 'Button text'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '📋 All Variants',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 48,
    maxWidth: 920
  }}>

      {/* V1 — Title + Description + Button */}
      <section>
        <p style={sectionLabel}>Version 1 — Title, description and button</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Alert type="Error" title="Title" description="Description" showButton showClose buttonLabel="Button text" />
          <Alert type="Warning" title="Title" description="Description" showButton showClose buttonLabel="Button text" />
          <Alert type="Info" title="Title" description="Description" showButton showClose buttonLabel="Button text" />
          <Alert type="Success" title="Title" description="Description" showButton showClose buttonLabel="Button text" />
        </div>
      </section>

      {/* V2 — Title + Description */}
      <section>
        <p style={sectionLabel}>Version 2 — Title and description</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Alert type="Error" title="Title" description="Description" showButton={false} showClose />
          <Alert type="Warning" title="Title" description="Description" showButton={false} showClose />
          <Alert type="Info" title="Title" description="Description" showButton={false} showClose />
          <Alert type="Success" title="Title" description="Description" showButton={false} showClose />
        </div>
      </section>

      {/* V3 — Description + Button */}
      <section>
        <p style={sectionLabel}>Version 3 — Description and button</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Alert type="Error" description="Description" showButton showClose buttonLabel="Button text" />
          <Alert type="Warning" description="Description" showButton showClose buttonLabel="Button text" />
          <Alert type="Info" description="Description" showButton showClose buttonLabel="Button text" />
          <Alert type="Success" description="Description" showButton showClose buttonLabel="Button text" />
        </div>
      </section>

      {/* V4 — Description only */}
      <section>
        <p style={sectionLabel}>Version 4 — Only description</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Alert type="Error" description="Description" showButton={false} showClose />
          <Alert type="Warning" description="Description" showButton={false} showClose />
          <Alert type="Info" description="Description" showButton={false} showClose />
          <Alert type="Success" description="Description" showButton={false} showClose />
        </div>
      </section>

    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Type / Error',
  render: () => <Alert type="Error" title="Something went wrong" description="The upload failed due to a server error. Please try again." showButton showClose buttonLabel="Retry" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Type / Warning',
  render: () => <Alert type="Warning" title="Action required" description="Your session will expire in 5 minutes. Save your work to avoid losing changes." showButton showClose buttonLabel="Save now" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Type / Info',
  render: () => <Alert type="Info" title="Scan in progress" description="The license scan for your upload is running. Results will appear shortly." showButton={false} showClose />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Type / Success',
  render: () => <Alert type="Success" title="Upload complete" description="Your file has been uploaded and queued for analysis successfully." showButton={false} showClose />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Version 1 / Title + Description + Button',
  render: () => <Alert type="Error" title="Title" description="Description" showButton showClose buttonLabel="Button text" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Version 2 / Title + Description',
  render: () => <Alert type="Info" title="Title" description="Description" showButton={false} showClose />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Version 3 / Description + Button',
  render: () => <Alert type="Warning" description="Description" showButton showClose buttonLabel="Button text" />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Version 4 / Description only',
  render: () => <Alert type="Success" description="Description" showButton={false} showClose />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'State / Without close button (non-dismissible)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 920
  }}>
      <Alert type="Error" title="Error" description="This alert cannot be dismissed." showButton={false} showClose={false} />
      <Alert type="Warning" title="Warning" description="This alert cannot be dismissed." showButton={false} showClose={false} />
      <Alert type="Info" title="Info" description="This alert cannot be dismissed." showButton={false} showClose={false} />
      <Alert type="Success" title="Success" description="This alert cannot be dismissed." showButton={false} showClose={false} />
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Real world / Dismissible alerts',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [alerts, setAlerts] = React.useState([{
      id: '1',
      type: 'Error' as const,
      title: 'Upload failed',
      description: 'The file could not be uploaded. Please check your connection and try again.'
    }, {
      id: '2',
      type: 'Warning' as const,
      title: 'Scan incomplete',
      description: 'Some agents did not finish scanning. Results may be incomplete.'
    }, {
      id: '3',
      type: 'Info' as const,
      title: 'New version available',
      description: 'FOSSology 4.6.0 is available. Update from Admin → Maintenance.'
    }, {
      id: '4',
      type: 'Success' as const,
      title: 'Report generated',
      description: 'Your SPDX report has been created and is ready to download.'
    }]);
    return <div style={{
      fontFamily: 'Inter, sans-serif',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 920
    }}>
        <p style={{
        fontSize: 13,
        color: '#6b7280',
        marginBottom: 4,
        marginTop: 0
      }}>
          Click the × to dismiss each alert.
        </p>
        {alerts.map(a => <Alert key={a.id} type={a.type} title={a.title} description={a.description} showButton={false} showClose onClose={() => setAlerts(prev => prev.filter(x => x.id !== a.id))} />)}
        {alerts.length === 0 && <p style={{
        fontSize: 14,
        color: '#9ca3af'
      }}>All alerts dismissed.</p>}
      </div>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'In context — above a form',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    padding: 24,
    maxWidth: 640,
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Alert type="Error" title="Form submission failed" description="Please correct the errors below and resubmit." showButton={false} showClose />
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <label style={{
        fontSize: 14,
        fontWeight: 500,
        color: '#101010'
      }}>Upload name</label>
        <input type="text" placeholder="Enter upload name" style={{
        height: 36,
        border: '1px solid #d02216',
        borderRadius: 4,
        padding: '0 12px',
        fontSize: 14,
        fontFamily: 'Inter, sans-serif',
        color: '#101010'
      }} />
        <span style={{
        fontSize: 12,
        color: '#d02216'
      }}>Upload name is required.</span>
      </div>
    </div>
}`,...M.parameters?.docs?.source}}},N=[`Playground`,`AllVariants`,`TypeError`,`TypeWarning`,`TypeInfo`,`TypeSuccess`,`V1TitleDescButton`,`V2TitleDesc`,`V3DescButton`,`V4DescOnly`,`NoClose`,`DismissibleAlerts`,`InContext`]}))();export{x as AllVariants,j as DismissibleAlerts,M as InContext,A as NoClose,b as Playground,S as TypeError,w as TypeInfo,T as TypeSuccess,C as TypeWarning,E as V1TitleDescButton,D as V2TitleDesc,O as V3DescButton,k as V4DescOnly,N as __namedExportsOrder,y as default};