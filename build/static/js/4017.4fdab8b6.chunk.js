"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[4017],{37903:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(1413),i=n(45987),o=n(57829),a=n(35898),s=n(61113),c=n(3404),l=n(90891),d=n(2135),u=n(46417);function h(e){var t=e.link,n=e.activeLast,i=e.disabled,a=t.name,s=t.href,c=t.icon,h=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},i&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[c&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),a]});return s?(0,u.jsx)(l.Z,{component:d.rU,to:s,sx:h,children:x}):(0,u.jsxs)(o.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function p(e){var t=e.links,n=e.action,d=e.heading,p=e.moreLink,m=e.activeLast,f=e.sx,g=(0,i.Z)(e,x),j=t[t.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,r.Z)({mb:5},f),children:[(0,u.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!t.length&&(0,u.jsx)(c.Z,(0,r.Z)((0,r.Z)({separator:(0,u.jsx)(Z,{})},g),{},{children:t.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:m,disabled:e.name===j},e.name||"")}))}))]}),n&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!p&&(0,u.jsx)(o.Z,{sx:{mt:2},children:p.map((function(e){return(0,u.jsx)(l.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function Z(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},24017:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var r=n(65964),i=n(57829),o=n(70178),a=n(35898),s=n(70501),c=n(76025),l=n(37903),d=n(14461),u=n(29439),h=n(1413),x=n(4942),p=n(47313),Z=n(17592),m=n(17551),f=n(80123),g=n(29701),j=n(54982),v=n(78490),b=n(80315),w=n(61113),S=n(24193),y=n(18551),C=n(16335),k=n(46417),F=["Select campaign settings","Create an ad group","Create an ad"],L=(0,Z.ZP)(f.Z)((function(e){var t,n=e.theme;return t={},(0,x.Z)(t,"&.".concat(g.Z.alternativeLabel),{top:10,left:"calc(-50% + 16px)",right:"calc(50% + 16px)"}),(0,x.Z)(t,"&.".concat(g.Z.active),(0,x.Z)({},"& .".concat(g.Z.line),{borderColor:n.palette.success.main})),(0,x.Z)(t,"&.".concat(g.Z.completed),(0,x.Z)({},"& .".concat(g.Z.line),{borderColor:n.palette.success.main})),(0,x.Z)(t,"& .".concat(g.Z.line),{borderRadius:1,borderTopWidth:3,borderColor:n.palette.divider}),t})),I=(0,Z.ZP)("div")((function(e){var t=e.theme,n=e.ownerState;return(0,h.Z)((0,h.Z)({height:22,display:"flex",alignItems:"center",color:t.palette.text.disabled},n.active&&{color:t.palette.success.main}),{},{"& .QontoStepIcon-completedIcon":{zIndex:1,fontSize:18,color:t.palette.success.main},"& .QontoStepIcon-circle":{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})}));function R(e){var t=e.active,n=e.completed,r=e.className;return(0,k.jsx)(I,{ownerState:{active:t},className:r,children:n?(0,k.jsx)(C.Z,{icon:"eva:checkmark-fill",className:"QontoStepIcon-completedIcon",width:24,height:24}):(0,k.jsx)("div",{className:"QontoStepIcon-circle"})})}var N=(0,Z.ZP)(f.Z)((function(e){var t,n=e.theme;return t={},(0,x.Z)(t,"&.".concat(g.Z.alternativeLabel),{top:22}),(0,x.Z)(t,"&.".concat(g.Z.active),(0,x.Z)({},"& .".concat(g.Z.line),(0,h.Z)({},(0,y.v3)({startColor:n.palette.error.light,endColor:n.palette.error.main})))),(0,x.Z)(t,"&.".concat(g.Z.completed),(0,x.Z)({},"& .".concat(g.Z.line),(0,h.Z)({},(0,y.v3)({startColor:n.palette.error.light,endColor:n.palette.error.main})))),(0,x.Z)(t,"& .".concat(g.Z.line),{height:3,border:0,borderRadius:1,backgroundColor:n.palette.divider}),t})),_=(0,Z.ZP)("div")((function(e){var t=e.theme,n=e.ownerState;return(0,h.Z)((0,h.Z)({zIndex:1,width:50,height:50,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:t.palette.text.disabled,backgroundColor:"light"===t.palette.mode?t.palette.grey[300]:t.palette.grey[700]},n.active&&(0,h.Z)({boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)",color:t.palette.common.white},(0,y.v3)({startColor:t.palette.error.light,endColor:t.palette.error.main}))),n.completed&&(0,h.Z)({color:t.palette.common.white},(0,y.v3)({startColor:t.palette.error.light,endColor:t.palette.error.main})))}));function q(e){var t=e.active,n=e.completed,r=e.className,i=e.icon,o={1:(0,k.jsx)(C.Z,{icon:"eva:settings-2-outline",width:24}),2:(0,k.jsx)(C.Z,{icon:"eva:person-add-outline",width:24}),3:(0,k.jsx)(C.Z,{icon:"eva:monitor-outline",width:24})};return(0,k.jsx)(_,{ownerState:{completed:n,active:t},className:r,children:o[String(i)]})}function z(e){switch(e){case 0:return"Select campaign settings...";case 1:return"What is an ad group anyways?";case 2:return"This is the bit I really care about!";default:return"Unknown step"}}function A(){var e=(0,p.useState)(0),t=(0,u.Z)(e,2),n=t[0],r=t[1];return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(j.Z,{alternativeLabel:!0,activeStep:n,connector:(0,k.jsx)(L,{}),children:F.map((function(e){return(0,k.jsx)(v.Z,{children:(0,k.jsx)(b.Z,{StepIconComponent:R,children:e})},e)}))}),(0,k.jsx)(i.Z,{sx:{mb:5}}),(0,k.jsx)(j.Z,{alternativeLabel:!0,activeStep:n,connector:(0,k.jsx)(N,{}),children:F.map((function(e){return(0,k.jsx)(v.Z,{children:(0,k.jsx)(b.Z,{StepIconComponent:q,children:e})},e)}))}),n===F.length?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:function(e){return(0,m.Fq)(e.palette.grey[500],.12)}},children:(0,k.jsx)(w.Z,{sx:{my:1},children:"All steps completed - you're finished"})}),(0,k.jsx)(S.Z,{color:"inherit",onClick:function(){r(0)},sx:{mr:1},children:"Reset"})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:function(e){return(0,m.Fq)(e.palette.grey[500],.12)}},children:(0,k.jsx)(w.Z,{sx:{my:1},children:z(n)})}),(0,k.jsxs)(i.Z,{sx:{textAlign:"right"},children:[(0,k.jsx)(S.Z,{disabled:0===n,onClick:function(){r((function(e){return e-1}))},sx:{mr:1},children:"Back"}),(0,k.jsx)(S.Z,{variant:"contained",onClick:function(){r((function(e){return e+1}))},sx:{mr:1},children:n===F.length-1?"Finish":"Next"})]})]})]})}var H=n(63366),P=n(87462),T=n(83061),M=n(21921),B=n(77342),G=n(65033),E=n(23054),Q=n(70984),U=n(77430),W=n(32298);function D(e){return(0,W.Z)("MuiStepContent",e)}(0,U.Z)("MuiStepContent",["root","last","transition"]);var O=["children","className","TransitionComponent","transitionDuration","TransitionProps"],Y=(0,Z.ZP)("div",{name:"MuiStepContent",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.last&&t.last]}})((function(e){var t=e.ownerState,n=e.theme;return(0,P.Z)({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:n.vars?"1px solid ".concat(n.vars.palette.StepContent.border):"1px solid ".concat("light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600])},t.last&&{borderLeft:"none"})})),V=(0,Z.ZP)(G.Z,{name:"MuiStepContent",slot:"Transition",overridesResolver:function(e,t){return t.transition}})({}),J=p.forwardRef((function(e,t){var n=(0,B.Z)({props:e,name:"MuiStepContent"}),r=n.children,i=n.className,o=n.TransitionComponent,a=void 0===o?G.Z:o,s=n.transitionDuration,c=void 0===s?"auto":s,l=n.TransitionProps,d=(0,H.Z)(n,O),u=(p.useContext(E.Z).orientation,p.useContext(Q.Z)),h=u.active,x=u.last,Z=u.expanded,m=(0,P.Z)({},n,{last:x}),f=function(e){var t=e.classes,n={root:["root",e.last&&"last"],transition:["transition"]};return(0,M.Z)(n,D,t)}(m);var g=c;return"auto"!==c||a.muiSupportAuto||(g=void 0),(0,k.jsx)(Y,(0,P.Z)({className:(0,T.Z)(f.root,i),ref:t,ownerState:m},d,{children:(0,k.jsx)(V,(0,P.Z)({as:a,in:h||Z,className:f.transition,ownerState:m,timeout:g,unmountOnExit:!0},l,{children:r}))}))})),K=[{label:"Select campaign settings",description:"For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more."},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:"Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues."}];function X(){var e=(0,p.useState)(0),t=(0,u.Z)(e,2),n=t[0],r=t[1],o=function(){r((function(e){return e+1}))},a=function(){r((function(e){return e-1}))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(j.Z,{activeStep:n,orientation:"vertical",children:K.map((function(e,t){return(0,k.jsxs)(v.Z,{children:[(0,k.jsx)(b.Z,{optional:2===t?(0,k.jsx)(w.Z,{variant:"caption",children:"Last step"}):null,children:e.label}),(0,k.jsxs)(J,{children:[(0,k.jsx)(w.Z,{children:e.description}),(0,k.jsxs)(i.Z,{sx:{mt:3},children:[(0,k.jsx)(S.Z,{variant:"contained",onClick:o,children:t===K.length-1?"Finish":"Continue"}),(0,k.jsx)(S.Z,{disabled:0===t,onClick:a,children:"Back"})]})]})]},e.label)}))}),n===K.length&&(0,k.jsxs)(s.Z,{sx:{p:3,mt:3,bgcolor:function(e){return(0,m.Fq)(e.palette.grey[500],.12)}},children:[(0,k.jsx)(w.Z,{paragraph:!0,children:"All steps completed - you're finished"}),(0,k.jsx)(S.Z,{onClick:function(){r(0)},children:"Reset"})]})]})}var $=["Select campaign settings","Create an ad group","Create an ad"];function ee(){var e=(0,p.useState)(0),t=(0,u.Z)(e,2),n=t[0],r=t[1],o=(0,p.useState)(new Set),a=(0,u.Z)(o,2),c=a[0],l=a[1],d=function(e){return 1===e},x=function(e){return c.has(e)};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(j.Z,{activeStep:n,alternativeLabel:!0,children:$.map((function(e,t){var n={};return x(t)&&(n.completed=!1),(0,k.jsx)(v.Z,(0,h.Z)((0,h.Z)({},n),{},{children:(0,k.jsx)(b.Z,(0,h.Z)((0,h.Z)({},{}),{},{children:e}))}),e)}))}),n===$.length?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:function(e){return(0,m.Fq)(e.palette.grey[500],.12)}},children:(0,k.jsx)(w.Z,{sx:{my:1},children:"All steps completed - you're finished"})}),(0,k.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,k.jsx)(i.Z,{sx:{flexGrow:1}}),(0,k.jsx)(S.Z,{onClick:function(){r(0)},children:"Reset"})]})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:function(e){return(0,m.Fq)(e.palette.grey[500],.12)}},children:(0,k.jsxs)(w.Z,{sx:{my:1},children:[" Step ",n+1]})}),(0,k.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,k.jsx)(S.Z,{color:"inherit",disabled:0===n,onClick:function(){r((function(e){return e-1}))},sx:{mr:1},children:"Back"}),(0,k.jsx)(i.Z,{sx:{flexGrow:1}}),d(n)&&(0,k.jsx)(S.Z,{color:"inherit",onClick:function(){if(!d(n))throw new Error("You can't skip a step that isn't optional.");r((function(e){return e+1})),l((function(e){var t=new Set(e.values());return t.add(n),t}))},sx:{mr:1},children:"Skip"}),(0,k.jsx)(S.Z,{variant:"contained",onClick:function(){var e=c;x(n)&&(e=new Set(e.values())).delete(n),r((function(e){return e+1})),l(e)},children:n===$.length-1?"Finish":"Next"})]})]})]})}var te=["Select campaign settings","Create an ad group","Create an ad"];function ne(){var e=(0,p.useState)(0),t=(0,u.Z)(e,2),n=t[0],r=t[1],o=(0,p.useState)(new Set),a=(0,u.Z)(o,2),c=a[0],l=a[1],d=function(e){return 1===e},x=function(e){return c.has(e)};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(j.Z,{activeStep:n,children:te.map((function(e,t){var n={},r={};return d(t)&&(r.optional=(0,k.jsx)(w.Z,{variant:"caption",children:"Optional"})),x(t)&&(n.completed=!1),(0,k.jsx)(v.Z,(0,h.Z)((0,h.Z)({},n),{},{children:(0,k.jsx)(b.Z,(0,h.Z)((0,h.Z)({},r),{},{children:e}))}),e)}))}),n===te.length?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:function(e){return(0,m.Fq)(e.palette.grey[500],.12)}},children:(0,k.jsx)(w.Z,{sx:{my:1},children:"All steps completed - you're finished"})}),(0,k.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,k.jsx)(i.Z,{sx:{flexGrow:1}}),(0,k.jsx)(S.Z,{onClick:function(){r(0)},children:"Reset"})]})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s.Z,{sx:{p:3,my:3,minHeight:120,bgcolor:function(e){return(0,m.Fq)(e.palette.grey[500],.12)}},children:(0,k.jsxs)(w.Z,{sx:{my:1},children:[" Step ",n+1]})}),(0,k.jsxs)(i.Z,{sx:{display:"flex"},children:[(0,k.jsx)(S.Z,{color:"inherit",disabled:0===n,onClick:function(){r((function(e){return e-1}))},sx:{mr:1},children:"Back"}),(0,k.jsx)(i.Z,{sx:{flexGrow:1}}),d(n)&&(0,k.jsx)(S.Z,{color:"inherit",onClick:function(){if(!d(n))throw new Error("You can't skip a step that isn't optional.");r((function(e){return e+1})),l((function(e){var t=new Set(e.values());return t.add(n),t}))},sx:{mr:1},children:"Skip"}),(0,k.jsx)(S.Z,{variant:"contained",onClick:function(){var e=c;x(n)&&(e=new Set(e.values())).delete(n),r((function(e){return e+1})),l(e)},children:n===te.length-1?"Finish":"Next"})]})]})]})}function re(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(r.ql,{children:(0,k.jsx)("title",{children:" MUI Components: Stepper | Minimal UI"})}),(0,k.jsx)(i.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,k.jsx)(o.Z,{children:(0,k.jsx)(l.Z,{heading:"Stepper",links:[{name:"Components",href:c.ko.components},{name:"Stepper"}],moreLink:["https://mui.com/components/steppers"]})})}),(0,k.jsx)(o.Z,{sx:{my:10},children:(0,k.jsxs)(a.Z,{spacing:3,children:[(0,k.jsx)(d.g,{title:"Horizontal Linear Stepper",children:(0,k.jsx)(s.Z,{sx:{p:3,width:"100%",boxShadow:function(e){return e.customShadows.z8}},children:(0,k.jsx)(ne,{})})}),(0,k.jsx)(d.g,{title:"Linear Alternative Label",children:(0,k.jsx)(s.Z,{sx:{p:3,width:"100%",boxShadow:function(e){return e.customShadows.z8}},children:(0,k.jsx)(ee,{})})}),(0,k.jsx)(d.g,{title:"Vertical Linear Stepper",children:(0,k.jsx)(s.Z,{sx:{p:3,width:"100%",boxShadow:function(e){return e.customShadows.z8}},children:(0,k.jsx)(X,{})})}),(0,k.jsx)(d.g,{title:"Customized Stepper",children:(0,k.jsx)(s.Z,{sx:{p:3,width:"100%",boxShadow:function(e){return e.customShadows.z8}},children:(0,k.jsx)(A,{})})})]})})]})}},14461:function(e,t,n){n.d(t,{_:function(){return u},g:function(){return d}});var r=n(1413),i=n(17551),o=n(70501),a=n(54641),s=n(57829),c=n(61113),l=n(46417);function d(e){var t=e.title,n=e.sx,c=e.children;return(0,l.jsxs)(o.Z,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return(0,i.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,l.jsx)(a.Z,{title:t}),(0,l.jsx)(s.Z,{sx:(0,r.Z)({p:5,minHeight:180},n),children:c})]})}function u(e){var t=e.title;return(0,l.jsx)(c.Z,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}}}]);