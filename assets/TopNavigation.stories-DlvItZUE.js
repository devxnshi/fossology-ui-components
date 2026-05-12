import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r,u as i}from"./iframe-_seQZ5lc.js";function a({item:e,onClose:t,parentRef:n}){let[r,i]=h.useState(!1),[a,s]=h.useState(null),c=h.useRef(null),l=!!e.subItems?.length;return(0,m.jsxs)(`div`,{className:`relative w-full`,onMouseEnter:()=>{if(i(!0),l&&c.current){let e=c.current.getBoundingClientRect();s({top:e.top,left:e.right})}},onMouseLeave:()=>{i(!1),s(null)},children:[(0,m.jsxs)(`button`,{ref:c,type:`button`,disabled:e.disabled,className:`flex gap-[8px] items-center px-[12px] py-[10px] w-full text-left outline-none`,style:{fontFamily:`Inter, sans-serif`,fontSize:14,lineHeight:`20px`,fontWeight:e.disabled?400:r?500:400,color:e.disabled?`#a9a9a9`:`#101010`,backgroundColor:e.disabled?`#f6f6f6`:r?`#ededed`:`#ffffff`,cursor:e.disabled?`not-allowed`:`pointer`,minHeight:40},onClick:!e.disabled&&!l?t:void 0,children:[(0,m.jsx)(`span`,{className:`flex-1 min-w-0`,children:e.label}),l&&!e.disabled&&(r?(0,m.jsx)(C,{color:`#101010`}):(0,m.jsx)(S,{color:`#101010`}))]}),l&&r&&a&&e.subItems&&(0,m.jsx)(o,{items:e.subItems,top:a.top,left:a.left,onClose:t})]})}function o({items:e,top:t,left:n,onClose:r}){return s((0,m.jsx)(`div`,{style:{position:`fixed`,top:t,left:n,zIndex:9999,background:`#ffffff`,border:`1px solid #e1e1e1`,boxShadow:`0px 4px 6px 0px rgba(0,0,0,0.09)`,minWidth:180},onMouseEnter:()=>{},onMouseLeave:()=>{},children:e.map(e=>(0,m.jsx)(a,{item:e,onClose:r,parentRef:{current:null}},e.label))}))}function s(e){return(0,m.jsx)(c,{children:e})}function c({children:e}){let[t]=h.useState(()=>typeof document<`u`?document.createElement(`div`):null);return h.useEffect(()=>{if(t)return document.body.appendChild(t),()=>{document.body.removeChild(t)}},[t]),t?(0,g.createPortal)(e,t):null}function l({items:e,rect:t,width:n=180,onClose:r}){let i=h.useRef(null);return s((0,m.jsx)(`div`,{ref:i,style:{position:`fixed`,top:t.bottom,left:t.left,zIndex:9999,background:`#ffffff`,border:`1px solid #e1e1e1`,boxShadow:`0px 4px 6px 0px rgba(0,0,0,0.09)`,width:n},children:e.map(e=>(0,m.jsx)(a,{item:e,onClose:r,parentRef:i},e.label))}))}function u({item:e,isActive:t,isOpen:n,onToggle:r,onSlide:i}){let[a,o]=h.useState(!1),s=h.useRef(null),c=!!e.hasDropdown&&!!e.subItems?.length,l=t||n;return(0,m.jsxs)(`button`,{ref:s,type:`button`,className:`flex items-center justify-center outline-none cursor-pointer select-none shrink-0`,style:{fontFamily:`Inter, sans-serif`,fontSize:14,lineHeight:`20px`,fontWeight:l||a?500:400,color:`#101010`,height:52,padding:c?`16px 12px 16px 16px`:`16px`,gap:c?4:0,background:`transparent`,border:`none`,boxShadow:l?`inset 0 -3px 0 0 #c31230`:`none`,outline:`none`},onMouseEnter:()=>{o(!0),c&&i()},onMouseLeave:()=>o(!1),onClick:()=>{s.current&&r(s.current.getBoundingClientRect())},children:[(0,m.jsx)(`span`,{className:`whitespace-nowrap`,children:e.label}),c&&(n?(0,m.jsx)(y,{color:l?`#c31230`:`#101010`}):(0,m.jsx)(v,{color:l?`#c31230`:`#101010`}))]})}function d({groups:e,selected:t,onSelect:n,disabled:r=!1}){let[i,a]=h.useState(!1),[o,s]=h.useState(null);return(0,m.jsxs)(`div`,{className:`relative rounded-[4px]`,style:{width:156,border:`1px solid ${r?`#e1e1e1`:`#cecece`}`,opacity:r?.5:1,pointerEvents:r?`none`:`auto`},children:[(0,m.jsxs)(`button`,{type:`button`,className:`flex gap-[8px] items-center px-[12px] py-[8px] w-full outline-none cursor-pointer`,style:{fontFamily:`Inter, sans-serif`,fontSize:14,lineHeight:`20px`,fontWeight:400,color:`#101010`,background:`#ffffff`,borderRadius:i?`4px 4px 0 0`:`4px`},onClick:()=>a(e=>!e),children:[(0,m.jsx)(`span`,{className:`flex-1 text-left`,style:{minWidth:0},children:t}),i?(0,m.jsx)(x,{color:`#101010`}):(0,m.jsx)(b,{color:`#101010`})]}),i&&(0,m.jsx)(`div`,{className:`absolute left-[-1px] z-50 flex flex-col overflow-hidden`,style:{top:`100%`,width:158,border:`1px solid #cecece`,borderTop:`none`,background:`#ffffff`,boxShadow:`0px 4px 6px 0px rgba(0,0,0,0.09)`,borderRadius:`0 0 4px 4px`},children:e.map(e=>{let r=e===t,i=o===e;return(0,m.jsx)(`button`,{type:`button`,className:`flex items-center px-[12px] py-[10px] w-full text-left outline-none cursor-pointer`,style:{fontFamily:`Inter, sans-serif`,fontSize:14,lineHeight:`20px`,fontWeight:r||i?500:400,color:`#101010`,backgroundColor:r||i?`#ededed`:`#ffffff`,minHeight:40},onMouseEnter:()=>s(e),onMouseLeave:()=>s(null),onClick:()=>{n(e),a(!1)},children:e},e)})})]})}function f({groups:e,selectedGroup:t,userName:n,rect:r,onGroupChange:i,onLogout:a,onClose:o}){let[c,l]=h.useState(!1);return s((0,m.jsxs)(`div`,{style:{position:`fixed`,top:r.bottom,left:r.left-15,zIndex:9999,width:180,background:`#ffffff`,border:`1px solid #e1e1e1`,boxShadow:`0px 4px 6px 0px rgba(0,0,0,0.09)`,display:`flex`,flexDirection:`column`,gap:8,padding:`8px 12px 12px 12px`},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,alignItems:`flex-start`,width:`100%`},children:[(0,m.jsx)(`span`,{style:{fontFamily:`Inter, sans-serif`,fontSize:14,lineHeight:`20px`,fontWeight:500,color:`#101010`,width:`100%`},children:`Group:`}),(0,m.jsx)(d,{groups:e,selected:t,onSelect:i})]}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,paddingRight:12,paddingTop:10,paddingBottom:10,fontFamily:`Inter, sans-serif`,fontSize:14,lineHeight:`20px`,color:`#101010`},children:[(0,m.jsx)(`span`,{style:{fontWeight:500,whiteSpace:`nowrap`},children:`User:`}),(0,m.jsx)(`span`,{style:{fontWeight:400},children:n})]}),(0,m.jsxs)(`button`,{type:`button`,style:{display:`flex`,gap:4,alignItems:`center`,justifyContent:`center`,width:`100%`,height:40,paddingLeft:10,paddingRight:16,paddingTop:8,paddingBottom:8,border:`1px solid #004494`,borderRadius:4,background:c?`#e2efff`:`#ffffff`,cursor:`pointer`,outline:`none`,transition:`background 150ms`},onClick:()=>{a(),o()},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[(0,m.jsx)(T,{}),(0,m.jsx)(`span`,{style:{fontFamily:`Inter, sans-serif`,fontSize:16,lineHeight:`24px`,fontWeight:500,color:`#004494`,whiteSpace:`nowrap`},children:`Logout`})]})]}))}function p({currentGroup:e,isOpen:t,onClick:n}){let[r,i]=h.useState(!1),a=h.useRef(null),o=t?`#c31230`:`#101010`;return(0,m.jsxs)(`button`,{ref:a,type:`button`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:52,padding:`16px 8px`,gap:8,fontFamily:`Inter, sans-serif`,fontSize:14,lineHeight:`20px`,fontWeight:t||r?500:400,background:`transparent`,border:`none`,boxShadow:t?`inset 0 -3px 0 0 #c31230`:`none`,cursor:`pointer`,outline:`none`,flexShrink:0},onClick:()=>{a.current&&n(a.current.getBoundingClientRect())},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[(0,m.jsx)(w,{color:o}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:4,alignItems:`center`},children:[(0,m.jsxs)(`span`,{style:{color:o,whiteSpace:`nowrap`},children:[`Group: `,e]}),t?(0,m.jsx)(x,{color:o}):(0,m.jsx)(b,{color:o})]})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A=e((()=>{m=r(),h=t(n()),g=t(i()),_=()=>(0,m.jsxs)(`svg`,{width:`35`,height:`35`,viewBox:`0 0 53 52`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,"aria-label":`FOSSology`,style:{display:`block`,flexShrink:0},children:[(0,m.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M24.6874 15.3839C20.4129 15.911 16.9205 18.9724 15.7567 23.0196H24.6874V29.8723H15.3426V42.5571H8.5V25.9757C8.5 16.7415 15.6376 9.17415 24.6885 8.5V15.3839H24.6874Z`,fill:`#C31230`}),(0,m.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M27.6887 8.5C36.7396 9.17299 43.876 16.7403 43.876 25.9745C43.876 35.6523 36.0397 43.5 26.3757 43.5C23.479 43.5 20.7501 42.7934 18.3439 41.5459V32.9882C20.2977 35.2295 23.1701 36.6485 26.3757 36.6485C32.2604 36.6485 37.0346 31.8692 37.0346 25.9757C37.0346 20.5281 32.9545 16.0326 27.6887 15.3828V8.5Z`,fill:`#807F82`})]}),v=({color:e=`#101010`})=>(0,m.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,m.jsx)(`path`,{d:`M5 7.5L10 12.5L15 7.5`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),y=({color:e=`#101010`})=>(0,m.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 20 20`,fill:`none`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,m.jsx)(`path`,{d:`M5 12.5L10 7.5L15 12.5`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),b=({color:e=`#101010`})=>(0,m.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,m.jsx)(`path`,{d:`M4 6L8 10L12 6`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),x=({color:e=`#101010`})=>(0,m.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,m.jsx)(`path`,{d:`M4 10L8 6L12 10`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),S=({color:e=`#101010`})=>(0,m.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,m.jsx)(`path`,{d:`M6 4L10 8L6 12`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),C=({color:e=`#101010`})=>(0,m.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:(0,m.jsx)(`path`,{d:`M10 4L6 8L10 12`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),w=({color:e=`#101010`})=>(0,m.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:[(0,m.jsx)(`circle`,{cx:`12`,cy:`8`,r:`4`,stroke:e,strokeWidth:`1.5`}),(0,m.jsx)(`path`,{d:`M4 20c0-4 3.582-7 8-7s8 3 8 7`,stroke:e,strokeWidth:`1.5`,strokeLinecap:`round`})]}),T=()=>(0,m.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":`true`,style:{display:`block`,flexShrink:0},children:[(0,m.jsx)(`path`,{d:`M15 3H19C19.5523 3 20 3.44772 20 4V20C20 20.5523 19.5523 21 19 21H15`,stroke:`#004494`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,m.jsx)(`path`,{d:`M10 17L15 12L10 7`,stroke:`#004494`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,m.jsx)(`path`,{d:`M15 12H3`,stroke:`#004494`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),E=[{label:`Home`},{label:`Search`},{label:`Browse`},{label:`Uploads`,hasDropdown:!0,subItems:[{label:`From File`},{label:`From Server`},{label:`From URL`},{label:`From Version Control System`},{label:`Import FOSSology Dump`},{label:`Import Report`},{label:`Instructions`},{label:`One-Shot Copyright/ Email/ URL Analysis`},{label:`One-Shot Monk Analysis`},{label:`One-Shot Nomos Analysis`}]},{label:`Jobs`,hasDropdown:!0,subItems:[{label:`My Recent Jobs`},{label:`All Recent Jobs`},{label:`Schedule Agents`}]},{label:`Organize`,hasDropdown:!0,subItems:[{label:`Folder`,subItems:[{label:`Create`},{label:`Delete Folder`},{label:`Edit Properties`},{label:`Move or Copy`},{label:`Unlink Content`}]},{label:`Licenses`},{label:`Uploads`,subItems:[{label:`Upload Permissions`}]}]},{label:`Admin`,hasDropdown:!0,subItems:[{label:`License Admin`},{label:`Obligation Admin`},{label:`Upload Permissions`},{label:`Dashboards`},{label:`Users`},{label:`Customize`},{label:`Groups`},{label:`Maintenance`},{label:`Scheduler`},{label:`Tag`},{label:`Agent`},{label:`Duplicate Bucketpool`},{label:`Fossdash`}]},{label:`Help`,hasDropdown:!0,subItems:[{label:`About`},{label:`Debug`,subItems:[{label:`Create`},{label:`Delete Folder`},{label:`Edit Properties`},{label:`Move or Copy`},{label:`Unlink Content`}]},{label:`Documentation`},{label:`Getting Started`,subItems:[{label:`Getting Started Guide`}]},{label:`Third Party Licenses`}]}],D=[`fossy`,`fossy 2`,`fossy 3`],O={Uploads:230,Jobs:180,Organize:180,Admin:180,Help:180},k=h.forwardRef(({items:e=E,activeItem:t,showLogin:n=!0,groupName:r=`fossy 2`,userName:i=`fossy`,groups:a=D,onNavClick:o,onLogout:s,onGroupChange:c,className:d=``},g)=>{let[v,y]=h.useState(null),[b,x]=h.useState(null),[S,C]=h.useState(!1),[w,T]=h.useState(null),[k,A]=h.useState(r),j=h.useRef(null);h.useEffect(()=>{function e(e){j.current&&!j.current.contains(e.target)&&(y(null),C(!1))}return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),h.useEffect(()=>{if(!v&&!S)return;let e=()=>{y(null),C(!1)};return window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[v,S]);let M=e=>{j.current=e,typeof g==`function`?g(e):g&&(g.current=e)},N=e=>{A(e),c?.(e)},P=(t,n)=>{let r=e.find(e=>e.label===t);r?.hasDropdown&&r.subItems?.length?v===t?(y(null),x(null)):(y(t),x(n)):(y(null),x(null)),C(!1),o?.(t)},F=(t,n)=>{e.find(e=>e.label===t)?.hasDropdown&&v!==null&&v!==t&&(y(t),x(n))},I=e.find(e=>e.label===v);return(0,m.jsxs)(`nav`,{ref:M,"aria-label":`Primary navigation`,className:[`flex items-center w-full`,`font-['Inter',sans-serif]`,d].filter(Boolean).join(` `),style:{backgroundColor:`#e1e1e1`,borderBottom:`1px solid #cecece`,height:52,paddingLeft:24,paddingRight:24,overflowX:`auto`,overflowY:`visible`,flexWrap:`nowrap`,position:`relative`},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,flex:`1 1 auto`,minWidth:0,overflow:`hidden`},children:[(0,m.jsx)(`div`,{style:{padding:8.5,display:`flex`,alignItems:`center`,flexShrink:0},children:(0,m.jsx)(_,{})}),(0,m.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:52,overflowX:`auto`,overflowY:`visible`},children:e.map(e=>(0,m.jsx)(u,{item:e,isActive:e.label===t,isOpen:v===e.label,onToggle:t=>P(e.label,t),onSlide:()=>{if(e.hasDropdown&&e.subItems?.length&&v!==null&&v!==e.label){let t=j.current?.querySelector(`[data-nav-label="${e.label}"]`);t&&F(e.label,t.getBoundingClientRect())}}},e.label))})]}),n&&(0,m.jsx)(`div`,{style:{flexShrink:0,marginLeft:8},children:(0,m.jsx)(p,{currentGroup:k,isOpen:S,onClick:e=>{C(e=>!e),T(e),y(null)}})}),v&&b&&I?.subItems&&(0,m.jsx)(l,{items:I.subItems,rect:b,width:O[v]??180,onClose:()=>{y(null),x(null)}}),S&&w&&(0,m.jsx)(f,{groups:a,selectedGroup:k,userName:i,rect:w,onGroupChange:N,onLogout:()=>{s?.(),C(!1)},onClose:()=>C(!1)})]})}),k.displayName=`TopNavigation`,d.__docgenInfo={description:``,methods:[],displayName:`GroupSelector`,props:{groups:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},selected:{required:!0,tsType:{name:`string`},description:``},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(g: string) => void`,signature:{arguments:[{type:{name:`string`},name:`g`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},k.__docgenInfo={description:``,methods:[],displayName:`TopNavigation`,props:{items:{required:!1,tsType:{name:`Array`,elements:[{name:`NavItem`}],raw:`NavItem[]`},description:``,defaultValue:{value:`[
  { label: 'Home' },
  { label: 'Search' },
  { label: 'Browse' },
  {
    label: 'Uploads', hasDropdown: true,
    subItems: [
      { label: 'From File' }, { label: 'From Server' }, { label: 'From URL' },
      { label: 'From Version Control System' }, { label: 'Import FOSSology Dump' },
      { label: 'Import Report' }, { label: 'Instructions' },
      { label: 'One-Shot Copyright/ Email/ URL Analysis' },
      { label: 'One-Shot Monk Analysis' }, { label: 'One-Shot Nomos Analysis' },
    ],
  },
  {
    label: 'Jobs', hasDropdown: true,
    subItems: [
      { label: 'My Recent Jobs' }, { label: 'All Recent Jobs' }, { label: 'Schedule Agents' },
    ],
  },
  {
    label: 'Organize', hasDropdown: true,
    subItems: [
      { label: 'Folder', subItems: [{ label: 'Create' }, { label: 'Delete Folder' }, { label: 'Edit Properties' }, { label: 'Move or Copy' }, { label: 'Unlink Content' }] },
      { label: 'Licenses' },
      { label: 'Uploads', subItems: [{ label: 'Upload Permissions' }] },
    ],
  },
  {
    label: 'Admin', hasDropdown: true,
    subItems: [
      { label: 'License Admin' }, { label: 'Obligation Admin' }, { label: 'Upload Permissions' },
      { label: 'Dashboards' }, { label: 'Users' }, { label: 'Customize' },
      { label: 'Groups' }, { label: 'Maintenance' }, { label: 'Scheduler' },
      { label: 'Tag' }, { label: 'Agent' }, { label: 'Duplicate Bucketpool' }, { label: 'Fossdash' },
    ],
  },
  {
    label: 'Help', hasDropdown: true,
    subItems: [
      { label: 'About' },
      { label: 'Debug', subItems: [{ label: 'Create' }, { label: 'Delete Folder' }, { label: 'Edit Properties' }, { label: 'Move or Copy' }, { label: 'Unlink Content' }] },
      { label: 'Documentation' },
      { label: 'Getting Started', subItems: [{ label: 'Getting Started Guide' }] },
      { label: 'Third Party Licenses' },
    ],
  },
]`,computed:!1}},activeItem:{required:!1,tsType:{name:`string`},description:``},showLogin:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},groupName:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'fossy 2'`,computed:!1}},userName:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'fossy'`,computed:!1}},groups:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`['fossy', 'fossy 2', 'fossy 3']`,computed:!1}},onNavClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(label: string) => void`,signature:{arguments:[{type:{name:`string`},name:`label`}],return:{name:`void`}}},description:``},onLogout:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onGroupChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(group: string) => void`,signature:{arguments:[{type:{name:`string`},name:`group`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}}));function j(e){let[t,n]=P.useState(e.initialActive??e.activeItem??``),[r,i]=P.useState(e.groupName??`fossy 2`);return(0,N.jsx)(k,{...e,activeItem:t,groupName:r,onNavClick:e=>n(t=>t===e?``:e),onGroupChange:i,onLogout:()=>alert(`Logout`)})}function M({label:e,state:t}){let[n,r]=P.useState(t===`hover`),i=t===`active`;return(0,N.jsx)(`button`,{type:`button`,style:{fontFamily:`Inter, sans-serif`,fontSize:14,lineHeight:`20px`,fontWeight:i||n?500:400,color:`#101010`,height:52,padding:`16px`,background:`transparent`,border:`none`,cursor:`pointer`,boxShadow:i?`inset 0 -3px 0 0 #c31230`:`none`,whiteSpace:`nowrap`,outline:`none`},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(t===`hover`),children:e})}var N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{N=r(),P=t(n()),A(),F={title:`Components/TopNavigation`,component:k,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Header is a persistent top-level navigation component that provides users with access to key areas of the application. It appears at the top of every page and helps establish brand identity while offering easy access to menus and user actions.`}}},argTypes:{activeItem:{control:`select`,options:[``,`Home`,`Search`,`Browse`,`Uploads`,`Jobs`,`Organize`,`Admin`,`Help`]},showLogin:{control:`boolean`},groupName:{control:`text`},userName:{control:`text`}}},I={args:{showLogin:!0,groupName:`fossy 2`,userName:`fossy`,activeItem:`Home`},render:e=>(0,N.jsx)(j,{...e,initialActive:e.activeItem})},L={name:`State / Default`,render:()=>(0,N.jsx)(j,{showLogin:!0,groupName:`fossy 2`,userName:`fossy`})},R={name:`State / Active — Browse`,render:()=>(0,N.jsx)(j,{showLogin:!0,groupName:`fossy 2`,userName:`fossy`,initialActive:`Browse`})},z={name:`State / Active with dropdown — Uploads (click to open)`,render:()=>(0,N.jsx)(j,{showLogin:!0,groupName:`fossy 2`,userName:`fossy`,initialActive:`Uploads`})},B={name:`Login / Without user section`,render:()=>(0,N.jsx)(j,{showLogin:!1})},V={name:`🔲 Item States — all interactions`,parameters:{layout:`padded`},render:()=>(0,N.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,display:`flex`,flexDirection:`column`,gap:32},children:[(0,N.jsx)(`p`,{style:{fontSize:13,color:`#6b7280`,margin:0},children:`Hover any item to see bold text. Click a dropdown item to see open state (red underline + up chevron). Click the user trigger to open the group/logout panel.`}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{style:{fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#9ca3af`,marginBottom:8},children:`Plain items — default / hover / active`}),(0,N.jsxs)(`div`,{style:{background:`#e1e1e1`,borderBottom:`1px solid #cecece`,display:`flex`,alignItems:`center`,height:52,gap:0,paddingLeft:16},children:[(0,N.jsx)(M,{label:`Home`,state:`default`}),(0,N.jsx)(M,{label:`Search`,state:`hover`}),(0,N.jsx)(M,{label:`Browse`,state:`active`})]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{style:{fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#9ca3af`,marginBottom:8},children:`Dropdown items — default / hover / active (open). Click each to toggle.`}),(0,N.jsx)(j,{showLogin:!1,items:[{label:`Uploads`,hasDropdown:!0,subItems:E[3].subItems},{label:`Jobs`,hasDropdown:!0,subItems:E[4].subItems},{label:`Organize`,hasDropdown:!0,subItems:E[5].subItems},{label:`Admin`,hasDropdown:!0,subItems:E[6].subItems},{label:`Help`,hasDropdown:!0,subItems:E[7].subItems}]})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{style:{fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#9ca3af`,marginBottom:8},children:`User trigger — click to open group/logout panel`}),(0,N.jsx)(j,{showLogin:!0,groupName:`fossy 2`,userName:`fossy`,items:[{label:`Home`}]})]})]})},H={name:`🔲 Group Selector — all states`,parameters:{layout:`padded`},render:()=>{let[e,t]=P.useState(`fossy 2`);return(0,N.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,display:`flex`,flexDirection:`column`,gap:32},children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{style:{fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#9ca3af`,marginBottom:12},children:`Default (closed)`}),(0,N.jsx)(d,{groups:D,selected:e,onSelect:t})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{style:{fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#9ca3af`,marginBottom:12},children:`Active (click to open)`}),(0,N.jsx)(d,{groups:D,selected:e,onSelect:t})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{style:{fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#9ca3af`,marginBottom:12},children:`Disabled`}),(0,N.jsx)(d,{groups:D,selected:`fossy 2`,onSelect:()=>{},disabled:!0})]})]})}},U={name:`In context — full page`,parameters:{layout:`fullscreen`},render:()=>(0,N.jsxs)(`div`,{style:{minHeight:`100vh`,display:`flex`,flexDirection:`column`,background:`#ffffff`},children:[(0,N.jsx)(j,{showLogin:!0,groupName:`fossy 2`,userName:`fossy`,initialActive:`Browse`}),(0,N.jsxs)(`main`,{style:{flex:1,padding:32},children:[(0,N.jsx)(`h1`,{style:{fontFamily:`Inter, sans-serif`,fontSize:24,fontWeight:600,color:`#101010`,marginBottom:12},children:`Browse`}),(0,N.jsx)(`p`,{style:{fontFamily:`Inter, sans-serif`,fontSize:14,color:`#303030`,lineHeight:`20px`},children:`Click any nav item to set it active. Click dropdown items (Uploads, Jobs, Organize, Admin, Help) to open their menus. Hover items with sub-menus to see the flyout. Click "Group: fossy 2" to open the user panel.`})]})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    showLogin: true,
    groupName: 'fossy 2',
    userName: 'fossy',
    activeItem: 'Home'
  },
  render: args => <StatefulNav {...args} initialActive={args.activeItem} />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'State / Default',
  render: () => <StatefulNav showLogin groupName="fossy 2" userName="fossy" />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'State / Active — Browse',
  render: () => <StatefulNav showLogin groupName="fossy 2" userName="fossy" initialActive="Browse" />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'State / Active with dropdown — Uploads (click to open)',
  render: () => <StatefulNav showLogin groupName="fossy 2" userName="fossy" initialActive="Uploads" />
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Login / Without user section',
  render: () => <StatefulNav showLogin={false} />
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '🔲 Item States — all interactions',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>

      <p style={{
      fontSize: 13,
      color: '#6b7280',
      margin: 0
    }}>
        Hover any item to see bold text. Click a dropdown item to see open state (red underline + up chevron).
        Click the user trigger to open the group/logout panel.
      </p>

      {/* Plain item states */}
      <div>
        <p style={{
        fontSize: 11,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: '#9ca3af',
        marginBottom: 8
      }}>
          Plain items — default / hover / active
        </p>
        <div style={{
        background: '#e1e1e1',
        borderBottom: '1px solid #cecece',
        display: 'flex',
        alignItems: 'center',
        height: 52,
        gap: 0,
        paddingLeft: 16
      }}>
          {/* Default */}
          <PlainItemDemo label="Home" state="default" />
          {/* Hover — forced via CSS class trick: we just render a note, actual hover is real */}
          <PlainItemDemo label="Search" state="hover" />
          {/* Active */}
          <PlainItemDemo label="Browse" state="active" />
        </div>
      </div>

      {/* Dropdown item states */}
      <div>
        <p style={{
        fontSize: 11,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: '#9ca3af',
        marginBottom: 8
      }}>
          Dropdown items — default / hover / active (open). Click each to toggle.
        </p>
        <StatefulNav showLogin={false} items={[{
        label: 'Uploads',
        hasDropdown: true,
        subItems: DEFAULT_NAV_ITEMS[3].subItems
      }, {
        label: 'Jobs',
        hasDropdown: true,
        subItems: DEFAULT_NAV_ITEMS[4].subItems
      }, {
        label: 'Organize',
        hasDropdown: true,
        subItems: DEFAULT_NAV_ITEMS[5].subItems
      }, {
        label: 'Admin',
        hasDropdown: true,
        subItems: DEFAULT_NAV_ITEMS[6].subItems
      }, {
        label: 'Help',
        hasDropdown: true,
        subItems: DEFAULT_NAV_ITEMS[7].subItems
      }]} />
      </div>

      {/* User trigger states */}
      <div>
        <p style={{
        fontSize: 11,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: '#9ca3af',
        marginBottom: 8
      }}>
          User trigger — click to open group/logout panel
        </p>
        <StatefulNav showLogin groupName="fossy 2" userName="fossy" items={[{
        label: 'Home'
      }]} />
      </div>

    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: '🔲 Group Selector — all states',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const [sel, setSel] = React.useState('fossy 2');
    return <div style={{
      fontFamily: 'Inter, sans-serif',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }}>
        <div>
          <p style={{
          fontSize: 11,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: '#9ca3af',
          marginBottom: 12
        }}>
            Default (closed)
          </p>
          <GroupSelector groups={DEFAULT_GROUPS} selected={sel} onSelect={setSel} />
        </div>
        <div>
          <p style={{
          fontSize: 11,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: '#9ca3af',
          marginBottom: 12
        }}>
            Active (click to open)
          </p>
          <GroupSelector groups={DEFAULT_GROUPS} selected={sel} onSelect={setSel} />
        </div>
        <div>
          <p style={{
          fontSize: 11,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: '#9ca3af',
          marginBottom: 12
        }}>
            Disabled
          </p>
          <GroupSelector groups={DEFAULT_GROUPS} selected="fossy 2" onSelect={() => {}} disabled />
        </div>
      </div>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'In context — full page',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#ffffff'
  }}>
      <StatefulNav showLogin groupName="fossy 2" userName="fossy" initialActive="Browse" />
      <main style={{
      flex: 1,
      padding: 32
    }}>
        <h1 style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 24,
        fontWeight: 600,
        color: '#101010',
        marginBottom: 12
      }}>Browse</h1>
        <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 14,
        color: '#303030',
        lineHeight: '20px'
      }}>
          Click any nav item to set it active. Click dropdown items (Uploads, Jobs, Organize, Admin, Help) to open their menus.
          Hover items with sub-menus to see the flyout. Click "Group: fossy 2" to open the user panel.
        </p>
      </main>
    </div>
}`,...U.parameters?.docs?.source}}},W=[`Playground`,`DefaultNoActive`,`ActiveBrowse`,`ActiveUploads`,`WithoutLogin`,`ItemStates`,`GroupSelectorDemo`,`InContext`]}))();export{R as ActiveBrowse,z as ActiveUploads,L as DefaultNoActive,H as GroupSelectorDemo,U as InContext,V as ItemStates,I as Playground,B as WithoutLogin,W as __namedExportsOrder,F as default};