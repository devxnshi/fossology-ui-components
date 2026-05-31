import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r,u as i}from"./iframe-0BrNG41E.js";function a({children:e}){let[t]=d.useState(()=>typeof document<`u`?document.createElement(`div`):null);return d.useEffect(()=>{if(t)return document.body.appendChild(t),()=>{document.body.removeChild(t)}},[t]),t?(0,f.createPortal)(e,t):null}function o({items:e,activeId:t,onSelect:n,triggerRef:r}){let[i,o]=d.useState({top:0,left:0});return d.useEffect(()=>{if(r.current){let e=r.current.getBoundingClientRect();o({top:e.bottom,left:e.left-70})}},[r]),(0,u.jsx)(a,{children:(0,u.jsx)(`div`,{style:{position:`fixed`,top:i.top,left:i.left,zIndex:9999,width:152,backgroundColor:`#ffffff`,borderLeft:`1px solid #e1e1e1`,borderRight:`1px solid #e1e1e1`,borderBottom:`1px solid #e1e1e1`,boxShadow:`0px 4px 3px 0px rgba(0,0,0,0.09)`,display:`flex`,flexDirection:`column`},children:e.map(e=>{let r=e.id===t;return(0,u.jsx)(`button`,{type:`button`,className:`flex items-center outline-none cursor-pointer w-full text-left`,style:{paddingLeft:12,paddingRight:12,paddingTop:8,paddingBottom:8,backgroundColor:r?`#004494`:`#ffffff`},onClick:()=>{n(e.id)},children:(0,u.jsx)(`span`,{style:{flex:`1 0 0`,fontFamily:`"Inter", sans-serif`,fontSize:14,lineHeight:`20px`,fontWeight:r?600:400,color:r?`#ffffff`:`#101010`,minWidth:1},children:e.label})},e.id)})})})}function s({heading:e,navItems:t,activeNavId:n,onNavChange:r,maxVisible:i}){let[a,s]=d.useState(!1),l=d.useRef(null),f=t.slice(0,i),h=t.slice(i),g=h.some(e=>e.id===n);return d.useEffect(()=>{if(!a)return;function e(e){l.current&&!l.current.contains(e.target)&&s(!1)}return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[a]),(0,u.jsxs)(`div`,{style:{backgroundColor:`#f6f6f6`,height:72,width:`100%`,flexShrink:0,display:`flex`,alignItems:`flex-end`,paddingLeft:32,paddingRight:32,paddingBottom:0},children:[(0,u.jsx)(`span`,{style:{fontFamily:`"Inter", sans-serif`,fontStyle:`normal`,fontSize:32,lineHeight:`40px`,fontWeight:700,color:`#101010`,whiteSpace:`nowrap`,flex:`1 0 0`,marginBottom:16},children:e}),(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-end`},children:[f.map(e=>(0,u.jsx)(c,{item:e,isActive:e.id===n,onSelect:()=>r?.(e.id)},e.id)),h.length>0&&(0,u.jsxs)(`button`,{ref:l,type:`button`,className:`flex items-center gap-[4px] outline-none cursor-pointer shrink-0`,style:{paddingLeft:16,paddingRight:12,paddingTop:8,paddingBottom:8,backgroundColor:g?`#ffffff`:`#f6f6f6`,borderTop:g?`1px solid #cecece`:`none`,borderLeft:g?`1px solid #cecece`:`none`,borderRight:g?`1px solid #cecece`:`none`,borderBottom:`none`},onClick:()=>s(e=>!e),children:[(0,u.jsx)(`span`,{style:{fontFamily:`"Inter", sans-serif`,fontSize:14,lineHeight:`20px`,fontWeight:g?500:400,color:g?`#004494`:`#101010`,whiteSpace:`nowrap`},children:`More`}),a?(0,u.jsx)(m,{color:g?`#004494`:`#101010`}):(0,u.jsx)(p,{color:g?`#004494`:`#101010`})]})]}),a&&(0,u.jsx)(o,{items:h,activeId:n,triggerRef:l,onSelect:e=>{r?.(e),s(!1)}})]})}function c({item:e,isActive:t,onSelect:n}){let[r,i]=d.useState(!1);return(0,u.jsx)(`button`,{type:`button`,className:`flex items-center justify-end outline-none cursor-pointer shrink-0`,style:{paddingLeft:16,paddingRight:16,paddingTop:8,paddingBottom:8,backgroundColor:t?`#ffffff`:`#f6f6f6`,borderTop:t?`1px solid #cecece`:`none`,borderLeft:t?`1px solid #cecece`:`none`,borderRight:t?`1px solid #cecece`:`none`,borderBottom:`none`,alignSelf:`flex-end`},onClick:n,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:(0,u.jsx)(`span`,{style:{fontFamily:`"Inter", sans-serif`,fontSize:14,lineHeight:`20px`,fontWeight:t?500:400,color:t||r?`#004494`:`#101010`,whiteSpace:`nowrap`,transition:`color 100ms`},children:e.label})})}function l({items:e}){return(0,u.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,alignItems:`center`,gap:4,height:20},children:e.map((t,n)=>{let r=n===e.length-1;return t.isCurrent?(0,u.jsx)(`span`,{style:{fontFamily:`"Inter", sans-serif`,fontSize:13,lineHeight:`16px`,fontWeight:400,color:`#101010`,padding:2,whiteSpace:`nowrap`},children:t.label},n):(0,u.jsxs)(d.Fragment,{children:[(0,u.jsx)(`button`,{type:`button`,className:`flex flex-col items-start outline-none cursor-pointer`,style:{padding:2},onClick:t.onClick,children:(0,u.jsx)(`span`,{style:{fontFamily:`"Inter", sans-serif`,fontSize:13,lineHeight:`16px`,fontWeight:t.isRoot?600:400,color:`#004494`,whiteSpace:`nowrap`},children:t.label})}),!r&&(0,u.jsx)(`span`,{style:{fontFamily:`"Inter", sans-serif`,fontSize:13,lineHeight:`16px`,fontWeight:400,color:`#101010`,whiteSpace:`nowrap`},children:`/`})]},n)})})}var u,d,f,p,m,h,g=e((()=>{u=r(),d=t(n()),f=t(i()),p=({color:e=`#101010`})=>(0,u.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,u.jsx)(`path`,{d:`M4 6L8 10L12 6`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),m=({color:e=`#101010`})=>(0,u.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,u.jsx)(`path`,{d:`M4 10L8 6L12 10`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),h=d.forwardRef(({heading:e,navItems:t,activeNavId:n,onNavChange:r,breadcrumbs:i=[],maxVisible:a=5,className:o=``},c)=>(0,u.jsxs)(`div`,{ref:c,className:[`flex flex-col items-center isolate w-full`,o].filter(Boolean).join(` `),style:{backgroundColor:`#ffffff`,gap:8},children:[(0,u.jsx)(s,{heading:e,navItems:t,activeNavId:n,onNavChange:r,maxVisible:a}),i.length>0&&(0,u.jsxs)(`div`,{style:{width:`100%`,paddingLeft:32,paddingRight:32,display:`flex`,flexDirection:`column`,gap:8,alignItems:`flex-start`},children:[i.map((e,t)=>(0,u.jsx)(l,{items:e.items},t)),(0,u.jsx)(`div`,{style:{height:1,backgroundColor:`#cecece`,width:`100%`}})]})]})),h.displayName=`SecondaryNavArea`,h.__docgenInfo={description:``,methods:[],displayName:`SecondaryNavArea`,props:{heading:{required:!0,tsType:{name:`string`},description:`Page heading shown in the bar`},navItems:{required:!0,tsType:{name:`Array`,elements:[{name:`SecondaryNavItem`}],raw:`SecondaryNavItem[]`},description:`All nav items — first 5 shown directly, rest go into "More" dropdown`},activeNavId:{required:!1,tsType:{name:`string`},description:`ID of the currently active item`},onNavChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:`Called when a nav item is selected`},breadcrumbs:{required:!1,tsType:{name:`Array`,elements:[{name:`BreadcrumbRow`}],raw:`BreadcrumbRow[]`},description:`Up to 2 breadcrumb rows`,defaultValue:{value:`[]`,computed:!1}},maxVisible:{required:!1,tsType:{name:`number`},description:`Max items shown before "More" dropdown (default 5)`,defaultValue:{value:`5`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}}));function _(e){let[t,n]=y.useState(e.initialActiveId??e.navItems[0]?.id??``);return(0,v.jsx)(h,{...e,activeNavId:t,onNavChange:n})}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{v=r(),y=t(n()),g(),b={fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#9ca3af`,marginBottom:12,marginTop:0},x=[{id:`license-browser`,label:`License Browser`},{id:`copyright`,label:`Copyright`},{id:`ecc`,label:`ECC`},{id:`ipra`,label:`IPRA`},{id:`conf`,label:`Conf`},{id:`software-heritage`,label:`Software Heritage`},{id:`email-url-author`,label:`Email/URL/Author`},{id:`file-browser`,label:`File Browser`},{id:`spasht`,label:`Spasht`},{id:`keyword`,label:`Keyword`},{id:`export-list`,label:`Export List`},{id:`search`,label:`Search`},{id:`bucket`,label:`Bucket`},{id:`view`,label:`View`},{id:`info`,label:`Info`}],S=[{id:`summary`,label:`Summary`},{id:`copyright`,label:`Copyright`},{id:`license`,label:`License`},{id:`ecc`,label:`ECC`},{id:`keyword`,label:`Keyword`}],C=[{items:[{label:`Folder: Software Repository`,isRoot:!0,onClick:()=>{}},{label:`sdk`,onClick:()=>{}}]}],w=[{items:[{label:`azure-sdk-for-go-sdk-azcore-v1.7.1.zip`,isRoot:!0,onClick:()=>{}},{label:`azure-sdk-for-go-sdk-azcore-v1.7.1`,onClick:()=>{}},{label:`sdk`,onClick:()=>{}},{label:`keyvault`,onClick:()=>{}},{label:`azsecrets`,onClick:()=>{}},{label:`testdata`,onClick:()=>{}},{label:`recordings`,isCurrent:!0}]}],T=[...C,...w],E={title:`Components/SecondaryNavArea`,component:h,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`
The\xA0Secondary Navigation Area\xA0provides contextual navigation for pages that require an additional layer of structure. It appears only on select pages where users need quick access to\xA0related pages within a feature or module.

**This area typically includes:**
- Page Heading: Clearly indicates the title or purpose of the current page.
- Secondary Navigation Bar: Displays the\xA0five most-used pages\xA0as direct links, with remaining items grouped under a\xA0‘More’ dropdown\xA0for easy access without overwhelming the layout.
- Breadcrumbs: Show the user’s location within the site or content hierarchy, helping with orientation and navigation.
`}}},argTypes:{heading:{control:`text`},maxVisible:{control:{type:`number`,min:1,max:10}}}},D={args:{heading:`License Browser`,navItems:x,activeNavId:`license-browser`,maxVisible:5,breadcrumbs:T},render:e=>(0,v.jsx)(_,{...e,initialActiveId:e.activeNavId})},O={name:`📋 All Variants`,parameters:{layout:`padded`},render:()=>(0,v.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,display:`flex`,flexDirection:`column`,gap:40,padding:24},children:[(0,v.jsxs)(`section`,{children:[(0,v.jsx)(`p`,{style:b,children:`Default — first item active, no breadcrumbs`}),(0,v.jsx)(_,{heading:`License Browser`,navItems:x,initialActiveId:`license-browser`,maxVisible:5})]}),(0,v.jsxs)(`section`,{children:[(0,v.jsx)(`p`,{style:b,children:`With breadcrumbs — one row`}),(0,v.jsx)(_,{heading:`License Browser`,navItems:x,initialActiveId:`license-browser`,maxVisible:5,breadcrumbs:C})]}),(0,v.jsxs)(`section`,{children:[(0,v.jsx)(`p`,{style:b,children:`With breadcrumbs — two rows (Figma spec)`}),(0,v.jsx)(_,{heading:`License Browser`,navItems:x,initialActiveId:`license-browser`,maxVisible:5,breadcrumbs:T})]}),(0,v.jsxs)(`section`,{children:[(0,v.jsx)(`p`,{style:b,children:`Item in "More" dropdown is active`}),(0,v.jsx)(_,{heading:`License Browser`,navItems:x,initialActiveId:`email-url-author`,maxVisible:5,breadcrumbs:C})]}),(0,v.jsxs)(`section`,{children:[(0,v.jsx)(`p`,{style:b,children:`Fewer nav items — no More button`}),(0,v.jsx)(_,{heading:`Upload Analysis`,navItems:S,initialActiveId:`summary`,maxVisible:5})]})]})},k={name:`State / Default — first item active`,render:()=>(0,v.jsx)(_,{heading:`License Browser`,navItems:x,initialActiveId:`license-browser`,maxVisible:5})},A={name:`State / Middle item active`,render:()=>(0,v.jsx)(_,{heading:`License Browser`,navItems:x,initialActiveId:`ecc`,maxVisible:5})},j={name:`State / "More" dropdown item active (click More to see)`,render:()=>(0,v.jsx)(_,{heading:`License Browser`,navItems:x,initialActiveId:`email-url-author`,maxVisible:5,breadcrumbs:C})},M={name:`Breadcrumbs / None`,render:()=>(0,v.jsx)(_,{heading:`License Browser`,navItems:x,initialActiveId:`license-browser`,maxVisible:5})},N={name:`Breadcrumbs / One row (folder)`,render:()=>(0,v.jsx)(_,{heading:`License Browser`,navItems:x,initialActiveId:`license-browser`,maxVisible:5,breadcrumbs:C})},P={name:`Breadcrumbs / Two rows (Figma spec)`,render:()=>(0,v.jsx)(_,{heading:`License Browser`,navItems:x,initialActiveId:`license-browser`,maxVisible:5,breadcrumbs:T})},F={name:`maxVisible / 3 (tight)`,render:()=>(0,v.jsx)(_,{heading:`License Browser`,navItems:x,initialActiveId:`license-browser`,maxVisible:3})},I={name:`maxVisible / 7 (wider)`,render:()=>(0,v.jsx)(_,{heading:`License Browser`,navItems:x,initialActiveId:`license-browser`,maxVisible:7})},L={name:`In context — below top nav`,parameters:{layout:`fullscreen`},render:()=>{let[e,t]=y.useState(`license-browser`);return(0,v.jsxs)(`div`,{style:{minHeight:`100vh`,display:`flex`,flexDirection:`column`,fontFamily:`Inter, sans-serif`,background:`#fff`},children:[(0,v.jsx)(`div`,{style:{height:52,backgroundColor:`#e1e1e1`,borderBottom:`1px solid #cecece`,display:`flex`,alignItems:`center`,paddingLeft:24,fontWeight:500,fontSize:14,color:`#101010`,flexShrink:0},children:`FOSSology Top Navigation`}),(0,v.jsx)(h,{heading:`License Browser`,navItems:x,activeNavId:e,onNavChange:t,maxVisible:5,breadcrumbs:T}),(0,v.jsx)(`main`,{style:{flex:1,padding:32},children:(0,v.jsxs)(`p`,{style:{fontSize:14,color:`#303030`,lineHeight:`20px`,margin:0},children:[`Active section: `,(0,v.jsx)(`strong`,{style:{color:`#004494`},children:x.find(t=>t.id===e)?.label??e}),(0,v.jsx)(`br`,{}),(0,v.jsx)(`br`,{}),`Click any nav item to switch. Click `,(0,v.jsx)(`strong`,{children:`More`}),` to open the dropdown and select from the overflow items.`]})})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'License Browser',
    navItems: LICENSE_NAV_ITEMS,
    activeNavId: 'license-browser',
    maxVisible: 5,
    breadcrumbs: BOTH_BREADCRUMBS
  },
  render: (args: React.ComponentProps<typeof SecondaryNavArea>) => <Stateful {...args} initialActiveId={args.activeNavId} />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '📋 All Variants',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    padding: 24
  }}>

      <section>
        <p style={sectionLabel}>Default — first item active, no breadcrumbs</p>
        <Stateful heading="License Browser" navItems={LICENSE_NAV_ITEMS} initialActiveId="license-browser" maxVisible={5} />
      </section>

      <section>
        <p style={sectionLabel}>With breadcrumbs — one row</p>
        <Stateful heading="License Browser" navItems={LICENSE_NAV_ITEMS} initialActiveId="license-browser" maxVisible={5} breadcrumbs={FOLDER_BREADCRUMBS} />
      </section>

      <section>
        <p style={sectionLabel}>With breadcrumbs — two rows (Figma spec)</p>
        <Stateful heading="License Browser" navItems={LICENSE_NAV_ITEMS} initialActiveId="license-browser" maxVisible={5} breadcrumbs={BOTH_BREADCRUMBS} />
      </section>

      <section>
        <p style={sectionLabel}>Item in "More" dropdown is active</p>
        <Stateful heading="License Browser" navItems={LICENSE_NAV_ITEMS} initialActiveId="email-url-author" maxVisible={5} breadcrumbs={FOLDER_BREADCRUMBS} />
      </section>

      <section>
        <p style={sectionLabel}>Fewer nav items — no More button</p>
        <Stateful heading="Upload Analysis" navItems={UPLOAD_NAV_ITEMS} initialActiveId="summary" maxVisible={5} />
      </section>

    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'State / Default — first item active',
  render: () => <Stateful heading="License Browser" navItems={LICENSE_NAV_ITEMS} initialActiveId="license-browser" maxVisible={5} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'State / Middle item active',
  render: () => <Stateful heading="License Browser" navItems={LICENSE_NAV_ITEMS} initialActiveId="ecc" maxVisible={5} />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'State / "More" dropdown item active (click More to see)',
  render: () => <Stateful heading="License Browser" navItems={LICENSE_NAV_ITEMS} initialActiveId="email-url-author" maxVisible={5} breadcrumbs={FOLDER_BREADCRUMBS} />
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Breadcrumbs / None',
  render: () => <Stateful heading="License Browser" navItems={LICENSE_NAV_ITEMS} initialActiveId="license-browser" maxVisible={5} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Breadcrumbs / One row (folder)',
  render: () => <Stateful heading="License Browser" navItems={LICENSE_NAV_ITEMS} initialActiveId="license-browser" maxVisible={5} breadcrumbs={FOLDER_BREADCRUMBS} />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Breadcrumbs / Two rows (Figma spec)',
  render: () => <Stateful heading="License Browser" navItems={LICENSE_NAV_ITEMS} initialActiveId="license-browser" maxVisible={5} breadcrumbs={BOTH_BREADCRUMBS} />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'maxVisible / 3 (tight)',
  render: () => <Stateful heading="License Browser" navItems={LICENSE_NAV_ITEMS} initialActiveId="license-browser" maxVisible={3} />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'maxVisible / 7 (wider)',
  render: () => <Stateful heading="License Browser" navItems={LICENSE_NAV_ITEMS} initialActiveId="license-browser" maxVisible={7} />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'In context — below top nav',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => {
    const [active, setActive] = React.useState('license-browser');
    return <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Inter, sans-serif',
      background: '#fff'
    }}>
        {/* Simulated top nav */}
        <div style={{
        height: 52,
        backgroundColor: '#e1e1e1',
        borderBottom: '1px solid #cecece',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 24,
        fontWeight: 500,
        fontSize: 14,
        color: '#101010',
        flexShrink: 0
      }}>
          FOSSology Top Navigation
        </div>

        {/* Secondary nav area */}
        <SecondaryNavArea heading="License Browser" navItems={LICENSE_NAV_ITEMS} activeNavId={active} onNavChange={setActive} maxVisible={5} breadcrumbs={BOTH_BREADCRUMBS} />

        {/* Page content */}
        <main style={{
        flex: 1,
        padding: 32
      }}>
          <p style={{
          fontSize: 14,
          color: '#303030',
          lineHeight: '20px',
          margin: 0
        }}>
            Active section: <strong style={{
            color: '#004494'
          }}>
              {LICENSE_NAV_ITEMS.find(i => i.id === active)?.label ?? active}
            </strong>
            <br /><br />
            Click any nav item to switch. Click <strong>More</strong> to open the dropdown and select from the overflow items.
          </p>
        </main>
      </div>;
  }
}`,...L.parameters?.docs?.source}}},R=[`Playground`,`AllVariants`,`DefaultFirstActive`,`MiddleItemActive`,`MoreItemActive`,`NoBreadcrumbs`,`OneBreadcrumbRow`,`TwoBreadcrumbRows`,`MaxVisible3`,`MaxVisible7`,`InContext`]}))();export{O as AllVariants,k as DefaultFirstActive,L as InContext,F as MaxVisible3,I as MaxVisible7,A as MiddleItemActive,j as MoreItemActive,M as NoBreadcrumbs,N as OneBreadcrumbRow,D as Playground,P as TwoBreadcrumbRows,R as __namedExportsOrder,E as default};