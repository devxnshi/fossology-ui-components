import{n as e,o as t}from"./chunk-BEldbCjX.js";import{A as n,d as r}from"./iframe-D7K8adO_.js";var i,a,o,s,c=e((()=>{i=r(),a=t(n()),o=a.forwardRef(({type:e=`Filter`,option:t,isActive:n=!1,onSelect:r,className:o=``},s)=>{let[c,l]=a.useState(!1),u=e===`Filter`,d=!!t.disabled,f=n?`#e2efff`:c&&!d&&!n?`#f6f6f6`:`transparent`;return(0,i.jsx)(`button`,{ref:s,type:`button`,disabled:d,className:[`flex items-center outline-none transition-colors duration-100`,`w-full`,o].filter(Boolean).join(` `),style:{height:u?28:`auto`,paddingLeft:12,paddingRight:12,paddingTop:u?4:8,paddingBottom:u?4:8,backgroundColor:f,cursor:d?`not-allowed`:`pointer`,opacity:d?.4:1,flexShrink:0},onMouseEnter:()=>!d&&l(!0),onMouseLeave:()=>l(!1),onClick:()=>!d&&r?.(t.value),children:(0,i.jsx)(`span`,{style:{fontFamily:`"Inter", sans-serif`,fontStyle:`normal`,fontSize:14,lineHeight:`20px`,fontWeight:400,color:`#101010`,textAlign:`left`,...u?{flex:`1 0 0`,height:20,minWidth:1}:{flexShrink:0,whiteSpace:`nowrap`}},children:t.label})})}),o.displayName=`DropdownMenuItem`,s=a.forwardRef(({type:e=`Filter`,options:t,value:n,onChange:r,className:a=``},s)=>{let c=e===`Filter`;return(0,i.jsx)(`div`,{ref:s,className:[`flex flex-col items-start`,a].filter(Boolean).join(` `),style:{...c?{width:84,minWidth:84}:{},backgroundColor:`#ffffff`,borderLeft:`1px solid #e1e1e1`,borderRight:`1px solid #e1e1e1`,borderBottom:`1px solid #e1e1e1`,boxShadow:`0px 4px 6px 0px rgba(0,0,0,0.09)`,cursor:`pointer`},children:t.map(t=>(0,i.jsx)(o,{type:e,option:t,isActive:t.value===n,onSelect:r},t.value))})}),s.displayName=`DropdownMenuPanel`,o.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuItem`,props:{type:{required:!1,tsType:{name:`union`,raw:`'Filter' | 'InputField'`,elements:[{name:`literal`,value:`'Filter'`},{name:`literal`,value:`'InputField'`}]},description:`Filter = compact 28px rows; InputField = full-width 36px rows`,defaultValue:{value:`'Filter'`,computed:!1}},option:{required:!0,tsType:{name:`DropdownOption`},description:``},isActive:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},s.__docgenInfo={description:``,methods:[],displayName:`DropdownMenuPanel`,props:{type:{required:!1,tsType:{name:`union`,raw:`'Filter' | 'InputField'`,elements:[{name:`literal`,value:`'Filter'`},{name:`literal`,value:`'InputField'`}]},description:``,defaultValue:{value:`'Filter'`,computed:!1}},options:{required:!0,tsType:{name:`Array`,elements:[{name:`DropdownOption`}],raw:`DropdownOption[]`},description:``},value:{required:!1,tsType:{name:`string`},description:`Controlled selected value`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}}));function l(e){let[t,n]=d.useState(e.initialValue??``);return(0,u.jsx)(s,{...e,value:t,onChange:n})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{u=r(),d=t(n()),c(),f=[{value:`10`,label:`10`},{value:`25`,label:`25`},{value:`50`,label:`50`},{value:`100`,label:`100`}],p=[{value:`opt1`,label:`Dropdown menu item`},{value:`opt2`,label:`Dropdown menu item`},{value:`opt3`,label:`Dropdown menu item`},{value:`opt4`,label:`Dropdown menu item`}],m={title:`Components/DropdownMenuItem`,component:o,tags:[`autodocs`],parameters:{layout:`centered`,docs:{description:{component:`The dropdown menu item is a selectable option within a dropdown menu. It allows users to choose from a list of related actions. Menu items appear when a user interacts with a trigger, such as a button or input field.`}}},argTypes:{type:{control:`select`,options:[`Filter`,`InputField`]},isActive:{control:`boolean`},option:{control:`object`}}},h={args:{type:`Filter`,isActive:!1,option:{value:`50`,label:`50`}}},g={name:`🔲 Item States — all types`,parameters:{layout:`padded`},render:()=>(0,u.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,display:`flex`,flexDirection:`column`,gap:40},children:[(0,u.jsxs)(`section`,{children:[(0,u.jsx)(`p`,{style:x,children:`Filter type (84px wide, 28px tall)`}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:32,alignItems:`flex-start`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`Default`}),(0,u.jsx)(`div`,{style:{border:`1px solid #e1e1e1`,width:84},children:(0,u.jsx)(o,{type:`Filter`,option:{value:`50`,label:`50`},isActive:!1})})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`Hover (mouse over)`}),(0,u.jsx)(`div`,{style:{border:`1px solid #e1e1e1`,width:84},children:(0,u.jsx)(o,{type:`Filter`,option:{value:`50`,label:`50`},isActive:!1})})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`Active`}),(0,u.jsx)(`div`,{style:{border:`1px solid #e1e1e1`,width:84},children:(0,u.jsx)(o,{type:`Filter`,option:{value:`50`,label:`50`},isActive:!0})})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`Disabled`}),(0,u.jsx)(`div`,{style:{border:`1px solid #e1e1e1`,width:84},children:(0,u.jsx)(o,{type:`Filter`,option:{value:`50`,label:`50`,disabled:!0}})})]})]})]}),(0,u.jsxs)(`section`,{children:[(0,u.jsx)(`p`,{style:x,children:`Input field type (content-width, 36px tall)`}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:32,alignItems:`flex-start`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`Default`}),(0,u.jsx)(`div`,{style:{border:`1px solid #e1e1e1`},children:(0,u.jsx)(o,{type:`InputField`,option:{value:`opt`,label:`Dropdown menu item`},isActive:!1})})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`Hover (mouse over)`}),(0,u.jsx)(`div`,{style:{border:`1px solid #e1e1e1`},children:(0,u.jsx)(o,{type:`InputField`,option:{value:`opt`,label:`Dropdown menu item`},isActive:!1})})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`Active`}),(0,u.jsx)(`div`,{style:{border:`1px solid #e1e1e1`},children:(0,u.jsx)(o,{type:`InputField`,option:{value:`opt`,label:`Dropdown menu item`},isActive:!0})})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`Disabled`}),(0,u.jsx)(`div`,{style:{border:`1px solid #e1e1e1`},children:(0,u.jsx)(o,{type:`InputField`,option:{value:`opt`,label:`Dropdown menu item`,disabled:!0}})})]})]})]})]})},_={name:`Panel / Filter (rows-per-page picker)`,parameters:{layout:`padded`},render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:40,alignItems:`flex-start`,padding:24,fontFamily:`Inter, sans-serif`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`No selection`}),(0,u.jsx)(l,{type:`Filter`,options:f})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`50 selected`}),(0,u.jsx)(l,{type:`Filter`,options:f,initialValue:`50`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`100 selected`}),(0,u.jsx)(l,{type:`Filter`,options:f,initialValue:`100`})]})]})},v={name:`Panel / Input field`,parameters:{layout:`padded`},render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:40,alignItems:`flex-start`,padding:24,fontFamily:`Inter, sans-serif`},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`No selection`}),(0,u.jsx)(l,{type:`InputField`,options:p})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`Second item selected`}),(0,u.jsx)(l,{type:`InputField`,options:p,initialValue:`opt2`})]})]})},y={name:`Figma spec — Standard Dropdown (both types side by side)`,parameters:{layout:`padded`},render:()=>(0,u.jsxs)(`div`,{style:{fontFamily:`Inter, sans-serif`,padding:24,display:`flex`,flexDirection:`column`,gap:24},children:[(0,u.jsx)(`h2`,{style:{fontSize:18,fontWeight:500,color:`#101010`,margin:0,textTransform:`capitalize`},children:`Standard Dropdown (example)`}),(0,u.jsx)(`p`,{style:{fontSize:16,fontWeight:400,lineHeight:`24px`,color:`#101010`,margin:0,maxWidth:640},children:`The dropdown menu item is a selectable option within a dropdown menu. It allows users to choose from a list of related actions. Menu items appear when a user interacts with a trigger, such as a button or input field.`}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:40,alignItems:`flex-start`},children:[(0,u.jsx)(l,{type:`Filter`,options:f,initialValue:`50`}),(0,u.jsx)(l,{type:`InputField`,options:p,initialValue:`opt2`})]})]})},b={name:`State / With disabled items`,parameters:{layout:`padded`},render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:40,alignItems:`flex-start`,padding:24},children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`Filter — one disabled`}),(0,u.jsx)(l,{type:`Filter`,options:[{value:`10`,label:`10`},{value:`25`,label:`25`,disabled:!0},{value:`50`,label:`50`},{value:`100`,label:`100`}],initialValue:`50`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{style:S,children:`InputField — one disabled`}),(0,u.jsx)(l,{type:`InputField`,options:[{value:`opt1`,label:`Dropdown menu item`},{value:`opt2`,label:`Dropdown menu item (disabled)`,disabled:!0},{value:`opt3`,label:`Dropdown menu item`},{value:`opt4`,label:`Dropdown menu item`}],initialValue:`opt1`})]})]})},x={fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`#9ca3af`,marginBottom:12,marginTop:0},S={fontSize:12,color:`#6b7280`,marginBottom:8,marginTop:0,fontFamily:`Inter, sans-serif`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'Filter',
    isActive: false,
    option: {
      value: '50',
      label: '50'
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '🔲 Item States — all types',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>

      {/* Filter */}
      <section>
        <p style={sectionLabel}>Filter type (84px wide, 28px tall)</p>
        <div style={{
        display: 'flex',
        gap: 32,
        alignItems: 'flex-start'
      }}>
          <div>
            <p style={stateLabel}>Default</p>
            <div style={{
            border: '1px solid #e1e1e1',
            width: 84
          }}>
              <DropdownMenuItem type="Filter" option={{
              value: '50',
              label: '50'
            }} isActive={false} />
            </div>
          </div>
          <div>
            <p style={stateLabel}>Hover (mouse over)</p>
            <div style={{
            border: '1px solid #e1e1e1',
            width: 84
          }}>
              <DropdownMenuItem type="Filter" option={{
              value: '50',
              label: '50'
            }} isActive={false} />
            </div>
          </div>
          <div>
            <p style={stateLabel}>Active</p>
            <div style={{
            border: '1px solid #e1e1e1',
            width: 84
          }}>
              <DropdownMenuItem type="Filter" option={{
              value: '50',
              label: '50'
            }} isActive />
            </div>
          </div>
          <div>
            <p style={stateLabel}>Disabled</p>
            <div style={{
            border: '1px solid #e1e1e1',
            width: 84
          }}>
              <DropdownMenuItem type="Filter" option={{
              value: '50',
              label: '50',
              disabled: true
            }} />
            </div>
          </div>
        </div>
      </section>

      {/* InputField */}
      <section>
        <p style={sectionLabel}>Input field type (content-width, 36px tall)</p>
        <div style={{
        display: 'flex',
        gap: 32,
        alignItems: 'flex-start'
      }}>
          <div>
            <p style={stateLabel}>Default</p>
            <div style={{
            border: '1px solid #e1e1e1'
          }}>
              <DropdownMenuItem type="InputField" option={{
              value: 'opt',
              label: 'Dropdown menu item'
            }} isActive={false} />
            </div>
          </div>
          <div>
            <p style={stateLabel}>Hover (mouse over)</p>
            <div style={{
            border: '1px solid #e1e1e1'
          }}>
              <DropdownMenuItem type="InputField" option={{
              value: 'opt',
              label: 'Dropdown menu item'
            }} isActive={false} />
            </div>
          </div>
          <div>
            <p style={stateLabel}>Active</p>
            <div style={{
            border: '1px solid #e1e1e1'
          }}>
              <DropdownMenuItem type="InputField" option={{
              value: 'opt',
              label: 'Dropdown menu item'
            }} isActive />
            </div>
          </div>
          <div>
            <p style={stateLabel}>Disabled</p>
            <div style={{
            border: '1px solid #e1e1e1'
          }}>
              <DropdownMenuItem type="InputField" option={{
              value: 'opt',
              label: 'Dropdown menu item',
              disabled: true
            }} />
            </div>
          </div>
        </div>
      </section>

    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Panel / Filter (rows-per-page picker)',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    gap: 40,
    alignItems: 'flex-start',
    padding: 24,
    fontFamily: 'Inter, sans-serif'
  }}>
      <div>
        <p style={stateLabel}>No selection</p>
        <StatefulPanel type="Filter" options={FILTER_OPTIONS} />
      </div>
      <div>
        <p style={stateLabel}>50 selected</p>
        <StatefulPanel type="Filter" options={FILTER_OPTIONS} initialValue="50" />
      </div>
      <div>
        <p style={stateLabel}>100 selected</p>
        <StatefulPanel type="Filter" options={FILTER_OPTIONS} initialValue="100" />
      </div>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Panel / Input field',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    gap: 40,
    alignItems: 'flex-start',
    padding: 24,
    fontFamily: 'Inter, sans-serif'
  }}>
      <div>
        <p style={stateLabel}>No selection</p>
        <StatefulPanel type="InputField" options={INPUT_OPTIONS} />
      </div>
      <div>
        <p style={stateLabel}>Second item selected</p>
        <StatefulPanel type="InputField" options={INPUT_OPTIONS} initialValue="opt2" />
      </div>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Figma spec — Standard Dropdown (both types side by side)',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    fontFamily: 'Inter, sans-serif',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <h2 style={{
      fontSize: 18,
      fontWeight: 500,
      color: '#101010',
      margin: 0,
      textTransform: 'capitalize'
    }}>
        Standard Dropdown (example)
      </h2>
      <p style={{
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '24px',
      color: '#101010',
      margin: 0,
      maxWidth: 640
    }}>
        The dropdown menu item is a selectable option within a dropdown menu. It allows users to
        choose from a list of related actions. Menu items appear when a user interacts with a
        trigger, such as a button or input field.
      </p>
      <div style={{
      display: 'flex',
      gap: 40,
      alignItems: 'flex-start'
    }}>
        {/* Filter — 84px, matches Figma layout */}
        <StatefulPanel type="Filter" options={FILTER_OPTIONS} initialValue="50" />
        {/* InputField — content-width, matches Figma layout */}
        <StatefulPanel type="InputField" options={INPUT_OPTIONS} initialValue="opt2" />
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'State / With disabled items',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    gap: 40,
    alignItems: 'flex-start',
    padding: 24
  }}>
      <div>
        <p style={stateLabel}>Filter — one disabled</p>
        <StatefulPanel type="Filter" options={[{
        value: '10',
        label: '10'
      }, {
        value: '25',
        label: '25',
        disabled: true
      }, {
        value: '50',
        label: '50'
      }, {
        value: '100',
        label: '100'
      }]} initialValue="50" />
      </div>
      <div>
        <p style={stateLabel}>InputField — one disabled</p>
        <StatefulPanel type="InputField" options={[{
        value: 'opt1',
        label: 'Dropdown menu item'
      }, {
        value: 'opt2',
        label: 'Dropdown menu item (disabled)',
        disabled: true
      }, {
        value: 'opt3',
        label: 'Dropdown menu item'
      }, {
        value: 'opt4',
        label: 'Dropdown menu item'
      }]} initialValue="opt1" />
      </div>
    </div>
}`,...b.parameters?.docs?.source}}},C=[`Playground`,`ItemStates`,`FilterPanel`,`InputFieldPanel`,`FigmaSpec`,`WithDisabled`]}))();export{y as FigmaSpec,_ as FilterPanel,v as InputFieldPanel,g as ItemStates,h as Playground,b as WithDisabled,C as __namedExportsOrder,m as default};