import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-D7K8adO_.js";var i,a,o,s=e((()=>{i=r(),a=t(n()),o=a.forwardRef(({version:e=`4.5.1.74`,branch:t=`master`,commit:n=`#d17bca`,commitDate:r=`2025/06/05 06:50 +00:00`,buildDate:a=`2025/06/05 06:52 +00:00`,className:o=``},s)=>{let c=`Version: [${e}], Branch: [${t}], Commit: [${n}] ${r} built @ ${a}`;return(0,i.jsx)(`footer`,{ref:s,className:[`flex h-[32px] w-full items-center justify-center px-4 py-[8px]`,`font-['Inter',sans-serif]`,o].filter(Boolean).join(` `),style:{backgroundColor:`#e1e1e1`},children:(0,i.jsx)(`p`,{className:`text-[12px] leading-[16px] font-normal whitespace-nowrap select-text`,style:{color:`#101010`},children:c})})}),o.displayName=`Footer`,o.__docgenInfo={description:``,methods:[],displayName:`Footer`,props:{version:{required:!1,tsType:{name:`string`},description:`FOSSology version string, e.g. "4.5.1.74"`,defaultValue:{value:`'4.5.1.74'`,computed:!1}},branch:{required:!1,tsType:{name:`string`},description:`Git branch name, e.g. "master"`,defaultValue:{value:`'master'`,computed:!1}},commit:{required:!1,tsType:{name:`string`},description:`Short commit hash, e.g. "#d17bca"`,defaultValue:{value:`'#d17bca'`,computed:!1}},commitDate:{required:!1,tsType:{name:`string`},description:`Commit timestamp, e.g. "2025/06/05 06:50 +00:00"`,defaultValue:{value:`'2025/06/05 06:50 +00:00'`,computed:!1}},buildDate:{required:!1,tsType:{name:`string`},description:`Build timestamp, e.g. "2025/06/05 06:52 +00:00"`,defaultValue:{value:`'2025/06/05 06:52 +00:00'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),c,l,u,d,f,p,m,h,g;e((()=>{c=r(),s(),l={title:`Components/Footer`,component:o,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Footer displays essential build metadata to help with version tracking and debugging. This component is typically fixed at the bottom of the screen and styled subtly to avoid drawing attention away from the main content while still being accessible.`}}},argTypes:{version:{control:`text`,description:`FOSSology version number`},branch:{control:`text`,description:`Git branch name`},commit:{control:`text`,description:`Short commit hash`},commitDate:{control:`text`,description:`Commit timestamp`},buildDate:{control:`text`,description:`Build timestamp`}}},u={args:{version:`4.5.1.74`,branch:`master`,commit:`#d17bca`,commitDate:`2025/06/05 06:50 +00:00`,buildDate:`2025/06/05 06:52 +00:00`}},d={name:`📋 All Variants`,parameters:{layout:`padded`},render:()=>(0,c.jsxs)(`div`,{className:`font-['Inter',sans-serif] space-y-8 p-6`,children:[(0,c.jsxs)(`section`,{children:[(0,c.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3`,children:`Default — Figma spec values`}),(0,c.jsx)(o,{})]}),(0,c.jsxs)(`section`,{children:[(0,c.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3`,children:`Custom build metadata`}),(0,c.jsx)(o,{version:`5.0.0.1`,branch:`dev`,commit:`#a1b2c3`,commitDate:`2025/01/15 12:00 +00:00`,buildDate:`2025/01/15 12:05 +00:00`})]}),(0,c.jsxs)(`section`,{children:[(0,c.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3`,children:`In context — pinned to bottom of viewport`}),(0,c.jsxs)(`div`,{className:`relative overflow-hidden rounded border border-gray-200`,style:{height:200},children:[(0,c.jsx)(`div`,{className:`p-4`,children:(0,c.jsx)(`p`,{className:`text-[13px] text-gray-500`,children:`Main application content area`})}),(0,c.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0`,children:(0,c.jsx)(o,{})})]})]})]})},f={name:`Default — Figma spec`,render:()=>(0,c.jsx)(o,{})},p={name:`Custom / Different build metadata`,render:()=>(0,c.jsx)(o,{version:`5.0.0.1`,branch:`release/5.0`,commit:`#f9e8d7`,commitDate:`2025/03/20 09:30 +00:00`,buildDate:`2025/03/20 09:35 +00:00`})},m={name:`Custom / Development branch`,render:()=>(0,c.jsx)(o,{version:`4.6.0.0-dev`,branch:`feature/new-ui`,commit:`#abc1234`,commitDate:`2025/04/10 14:22 +00:00`,buildDate:`2025/04/10 14:25 +00:00`})},h={name:`In context — pinned to bottom`,parameters:{layout:`fullscreen`},render:()=>(0,c.jsxs)(`div`,{className:`relative min-h-screen font-['Inter',sans-serif]`,style:{backgroundColor:`#fff`},children:[(0,c.jsx)(`div`,{className:`p-8`,children:(0,c.jsx)(`p`,{className:`text-[16px] text-[#101010] leading-[24px]`,children:`Application content renders here. The footer is fixed to the bottom of the screen.`})}),(0,c.jsx)(`div`,{className:`fixed bottom-0 left-0 right-0`,children:(0,c.jsx)(o,{})})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    version: '4.5.1.74',
    branch: 'master',
    commit: '#d17bca',
    commitDate: '2025/06/05 06:50 +00:00',
    buildDate: '2025/06/05 06:52 +00:00'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '📋 All Variants',
  parameters: {
    layout: 'padded'
  },
  render: () => <div className="font-['Inter',sans-serif] space-y-8 p-6">

      <section>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Default — Figma spec values
        </p>
        <Footer />
      </section>

      <section>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Custom build metadata
        </p>
        <Footer version="5.0.0.1" branch="dev" commit="#a1b2c3" commitDate="2025/01/15 12:00 +00:00" buildDate="2025/01/15 12:05 +00:00" />
      </section>

      <section>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
          In context — pinned to bottom of viewport
        </p>
        <div className="relative overflow-hidden rounded border border-gray-200" style={{
        height: 200
      }}>
          <div className="p-4">
            <p className="text-[13px] text-gray-500">Main application content area</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <Footer />
          </div>
        </div>
      </section>

    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Default — Figma spec',
  render: () => <Footer />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Custom / Different build metadata',
  render: () => <Footer version="5.0.0.1" branch="release/5.0" commit="#f9e8d7" commitDate="2025/03/20 09:30 +00:00" buildDate="2025/03/20 09:35 +00:00" />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Custom / Development branch',
  render: () => <Footer version="4.6.0.0-dev" branch="feature/new-ui" commit="#abc1234" commitDate="2025/04/10 14:22 +00:00" buildDate="2025/04/10 14:25 +00:00" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'In context — pinned to bottom',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div className="relative min-h-screen font-['Inter',sans-serif]" style={{
    backgroundColor: '#fff'
  }}>
      <div className="p-8">
        <p className="text-[16px] text-[#101010] leading-[24px]">
          Application content renders here. The footer is fixed to the bottom of the screen.
        </p>
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <Footer />
      </div>
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Playground`,`AllVariants`,`Default`,`CustomBuild`,`DevelopmentBranch`,`PinnedToBottom`]}))();export{d as AllVariants,p as CustomBuild,f as Default,m as DevelopmentBranch,h as PinnedToBottom,u as Playground,g as __namedExportsOrder,l as default};