"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[6759],{86121:function(e,t,r){r.d(t,{b8:function(){return m},ZQ:function(){return l},tR:function(){return g}});var n=r(17551),i=r(35898),a=r(57829),s=r(61113),o=r(46417);function l(e){var t=e.colors,r=e.limit,l=void 0===r?3:r,c=e.sx,d=t.slice(0,l),x=t.length-l;return(0,o.jsxs)(i.Z,{component:"span",direction:"row",alignItems:"center",justifyContent:"flex-end",sx:c,children:[d.map((function(e,t){return(0,o.jsx)(a.Z,{sx:{ml:-.75,width:16,height:16,borderRadius:"50%",border:function(e){return"solid 2px ".concat(e.palette.background.paper)},boxShadow:function(e){return"inset -1px 1px 2px ".concat((0,n.Fq)(e.palette.common.black,.24))},bgcolor:e}},e+t)})),t.length>l&&(0,o.jsx)(s.Z,{variant:"subtitle2",children:"+".concat(x)})]})}var c=r(1413),d=r(45987),x=r(44758),h=r(16335),u=["checked","whiteColor","sx"];function Z(e){var t=e.checked,r=e.whiteColor,i=e.sx,s=(0,d.Z)(e,u),l=(0,o.jsx)(a.Z,{sx:{width:1,height:1,opacity:.48,borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"}}),x=(0,o.jsx)(h.Z,{icon:"eva:checkmark-fill",sx:(0,c.Z)({opacity:0},t&&(0,c.Z)({opacity:1,color:"common.white"},r&&{color:"common.black"}))});return(0,o.jsxs)(a.Z,(0,c.Z)((0,c.Z)({sx:(0,c.Z)((0,c.Z)((0,c.Z)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(e){return e.transitions.create("all",{duration:e.transitions.duration.shortest})}},r&&{border:function(e){return"solid 1px ".concat(e.palette.divider)},boxShadow:function(e){return"4px 4px 8px 0 ".concat((0,n.Fq)(e.palette.grey[500],.24))}}),t&&{transform:"scale(1.4)"}),i)},s),{},{children:[t&&l,x]}))}var p=["colors","selected","onChangeColor","sx"];function m(e){var t=e.colors,r=e.selected,n=e.onChangeColor,i=e.sx,s=(0,d.Z)(e,p);return(0,o.jsx)(a.Z,{sx:i,children:t.map((function(e){var t="#FFFFFF"===e||"white"===e;return(0,o.jsx)(x.Z,(0,c.Z)({size:"small",value:e,color:"default",checked:r.includes(e),onChange:function(){return n(e)},icon:(0,o.jsx)(Z,{whiteColor:t}),checkedIcon:(0,o.jsx)(Z,{checked:!0,whiteColor:t}),sx:{color:e,"&:hover":{opacity:.72},"& svg":{width:12,height:12}}},s),e)}))})}var j=r(47313),v=r(54299),f=r(33827),b=["colors"],g=(0,j.forwardRef)((function(e,t){var r=e.colors,n=(0,d.Z)(e,b);return(0,o.jsx)(v.Z,(0,c.Z)((0,c.Z)({row:!0,ref:t},n),{},{children:r.map((function(e){var t="#FFFFFF"===e||"white"===e;return(0,o.jsx)(f.Z,{value:e,color:"default",icon:(0,o.jsx)(Z,{whiteColor:t}),checkedIcon:(0,o.jsx)(Z,{checked:!0,whiteColor:t}),sx:{color:e,"&:hover":{opacity:.72},"& svg":{width:12,height:12}}},e)}))}))}))},86759:function(e,t,r){r.r(t),r.d(t,{default:function(){return Ze}});var n=r(65964),i=r(19860),a=r(70178),s=r(9019),o=r(24193),l=r(74484),c=r(96626),d=r(59519),x=r(45987),h=r(1413),u=r(17592),Z=r(17551),p=r(73428),m=r(57829),j=r(93405),v=r(61113),f=r(18551),b=r(9651),g=r(86061),w=r(46417),y=["list"],k=(0,u.ZP)("div")((function(e){var t=e.theme;return(0,h.Z)((0,h.Z)({},(0,f.v3)({startColor:"".concat((0,Z.Fq)(t.palette.common.black,0)," 0%"),endColor:"".concat(t.palette.common.black," 75%")})),{},{top:0,left:0,right:0,bottom:0,zIndex:8,position:"absolute"})}));function C(e){var t=e.list,r=(0,x.Z)(e,y),n=(0,i.Z)(),a=(0,h.Z)({speed:1e3,dots:!0,arrows:!1,autoplay:!0,slidesToShow:1,slidesToScroll:1,rtl:Boolean("rtl"===n.direction)},(0,g.A0)({sx:{right:24,bottom:24,position:"absolute"}}));return(0,w.jsx)(p.Z,(0,h.Z)((0,h.Z)({},r),{},{children:(0,w.jsx)(g.ZP,(0,h.Z)((0,h.Z)({},a),{},{children:t.map((function(e){return(0,w.jsx)(F,{item:e},e.id)}))}))}))}function F(e){var t=e.item,r=t.image,n=t.name;return(0,w.jsxs)(m.Z,{sx:{position:"relative"},children:[(0,w.jsxs)(j.Z,{sx:{left:0,bottom:0,zIndex:9,maxWidth:"80%",position:"absolute",color:"common.white"},children:[(0,w.jsx)(v.Z,{variant:"overline",sx:{opacity:.48},children:"New"}),(0,w.jsx)(v.Z,{noWrap:!0,variant:"h5",sx:{mt:1,mb:3},children:n}),(0,w.jsx)(o.Z,{variant:"contained",children:"Buy Now"})]}),(0,w.jsx)(k,{}),(0,w.jsx)(b.Z,{alt:n,src:r,sx:{height:{xs:280,xl:320}}})]})}var P=r(29439),S=r(47313),T=r(54641),_=r(2943),B=r(5465),I=["title","subheader","chart"];function W(e){var t=e.title,r=e.subheader,n=e.chart,i=(0,x.Z)(e,I),a=n.colors,s=n.categories,o=n.series,l=n.options,c=(0,S.useState)("2019"),d=(0,P.Z)(c,2),u=d[0],Z=d[1],j=(0,B.Q8)((0,h.Z)({colors:a,legend:{position:"top",horizontalAlign:"right"},xaxis:{categories:s}},l));return(0,w.jsxs)(p.Z,(0,h.Z)((0,h.Z)({},i),{},{children:[(0,w.jsx)(T.Z,{title:t,subheader:r,action:(0,w.jsx)(_.fY,{value:u,onChange:function(e){return Z(e.target.value)},children:o.map((function(e){return(0,w.jsx)("option",{value:e.year,children:e.year},e.year)}))})}),o.map((function(e){return(0,w.jsx)(m.Z,{sx:{mt:3,mx:3},dir:"ltr",children:e.year===u&&(0,w.jsx)(B.ZP,{type:"area",series:e.data,options:j,height:364})},e.year)}))]}))}var A=r(51629),R=r(66835),q=r(57861),z=r(24076),E=r(67478),G=r(35898),L=r(63585),D=r(48148),K=r(16528),Q=r(59743),Y=r(31126),M=["title","subheader","tableData","tableLabels"];function N(e){var t=e.title,r=e.subheader,n=e.tableData,i=e.tableLabels,a=(0,x.Z)(e,M);return(0,w.jsxs)(p.Z,(0,h.Z)((0,h.Z)({},a),{},{children:[(0,w.jsx)(T.Z,{title:t,subheader:r,sx:{mb:3}}),(0,w.jsx)(A.Z,{sx:{overflow:"unset"},children:(0,w.jsx)(Q.Z,{children:(0,w.jsxs)(R.Z,{sx:{minWidth:720},children:[(0,w.jsx)(Y.K,{headLabel:i}),(0,w.jsx)(q.Z,{children:n.map((function(e){return(0,w.jsx)(J,{row:e},e.id)}))})]})})})]}))}function J(e){var t=e.row;return(0,w.jsxs)(z.Z,{children:[(0,w.jsx)(E.Z,{children:(0,w.jsxs)(G.Z,{direction:"row",alignItems:"center",children:[(0,w.jsx)(L.Z,{alt:t.name,src:t.avatar}),(0,w.jsxs)(m.Z,{sx:{ml:2},children:[(0,w.jsxs)(v.Z,{variant:"subtitle2",children:[" ",t.name," "]}),(0,w.jsx)(v.Z,{variant:"body2",sx:{color:"text.secondary"},children:t.email})]})]})}),(0,w.jsx)(E.Z,{children:t.category}),(0,w.jsx)(E.Z,{children:(0,w.jsx)(b.Z,{src:t.flag,alt:"country flag",sx:{maxWidth:28,mx:"auto"}})}),(0,w.jsx)(E.Z,{children:(0,D.e_)(t.total)}),(0,w.jsx)(E.Z,{align:"right",children:(0,w.jsx)(K.Z,{variant:"soft",color:("Top 1"===t.rank?"primary":"Top 2"===t.rank&&"info")||"Top 3"===t.rank&&"success"||"Top 4"===t.rank&&"warning"||"error",children:t.rank})})]})}var O=["title","subheader","total","chart"],U=(0,u.ZP)("div")((function(e){var t=e.theme;return{height:400,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:400},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(328,"px) !important")}}}));function X(e){var t=e.title,r=e.subheader,n=e.total,a=e.chart,s=(0,x.Z)(e,O),o=(0,i.Z)(),l=a.colors,c=a.series,d=a.options,u=c.map((function(e){return e.value})),Z=l||[[o.palette.primary.light,o.palette.primary.main],[o.palette.warning.light,o.palette.warning.main]],m=(0,B.Q8)((0,h.Z)({chart:{sparkline:{enabled:!0}},labels:c.map((function(e){return e.label})),legend:{floating:!0,horizontalAlign:"center"},fill:{type:"gradient",gradient:{colorStops:Z.map((function(e){return[{offset:0,color:e[0]},{offset:100,color:e[1]}]}))}},plotOptions:{radialBar:{hollow:{size:"68%"},dataLabels:{value:{offsetY:16},total:{formatter:function(){return(0,D.FK)(n)}}}}}},d));return(0,w.jsxs)(p.Z,(0,h.Z)((0,h.Z)({},s),{},{children:[(0,w.jsx)(T.Z,{title:t,subheader:r}),(0,w.jsx)(U,{dir:"ltr",children:(0,w.jsx)(B.ZP,{type:"radialBar",series:u,options:m,height:300})})]}))}var $=r(79176),H=["title","subheader","data"];function V(e){var t=e.title,r=e.subheader,n=e.data,i=(0,x.Z)(e,H);return(0,w.jsxs)(p.Z,(0,h.Z)((0,h.Z)({},i),{},{children:[(0,w.jsx)(T.Z,{title:t,subheader:r}),(0,w.jsx)(G.Z,{spacing:4,sx:{p:3},children:n.map((function(e){return(0,w.jsx)(ee,{progress:e},e.label)}))})]}))}function ee(e){var t=e.progress;return(0,w.jsxs)(G.Z,{spacing:1,children:[(0,w.jsxs)(G.Z,{direction:"row",alignItems:"center",children:[(0,w.jsx)(v.Z,{variant:"subtitle2",sx:{flexGrow:1},children:t.label}),(0,w.jsx)(v.Z,{variant:"subtitle2",children:(0,D.e_)(t.amount)}),(0,w.jsxs)(v.Z,{variant:"body2",sx:{color:"text.secondary"},children:["\xa0(",(0,D.f2)(t.value),")"]})]}),(0,w.jsx)($.Z,{variant:"determinate",value:t.value,color:("Total Income"===t.label?"info":"Total Expenses"===t.label&&"warning")||"primary"})]})}var te=r(16335),re=["title","percent","total","chart","sx"];function ne(e){var t=e.title,r=e.percent,n=e.total,i=e.chart,a=e.sx,s=(0,x.Z)(e,re),o=i.colors,l=i.series,c=i.options,d=(0,B.Q8)((0,h.Z)({colors:o,chart:{animations:{enabled:!0},sparkline:{enabled:!0}},stroke:{width:2},tooltip:{x:{show:!1},y:{formatter:function(e){return(0,D.FK)(e)},title:{formatter:function(){return""}}},marker:{show:!1}}},c));return(0,w.jsxs)(p.Z,(0,h.Z)((0,h.Z)({sx:(0,h.Z)({display:"flex",alignItems:"center",p:3},a)},s),{},{children:[(0,w.jsxs)(m.Z,{sx:{flexGrow:1},children:[(0,w.jsx)(v.Z,{variant:"subtitle2",paragraph:!0,children:t}),(0,w.jsx)(v.Z,{variant:"h3",gutterBottom:!0,children:(0,D.FK)(n)}),(0,w.jsx)(ie,{percent:r})]}),(0,w.jsx)(B.ZP,{type:"line",series:[{data:l}],options:d,width:120,height:80})]}))}function ie(e){var t=e.percent;return(0,w.jsxs)(G.Z,{direction:"row",alignItems:"center",sx:{mt:2,mb:1},children:[(0,w.jsx)(te.Z,{icon:t<0?"eva:trending-down-fill":"eva:trending-up-fill",sx:(0,h.Z)({mr:1,p:.5,width:24,height:24,borderRadius:"50%",color:"success.main",bgcolor:function(e){return(0,Z.Fq)(e.palette.success.main,.16)}},t<0&&{color:"error.main",bgcolor:function(e){return(0,Z.Fq)(e.palette.error.main,.16)}})}),(0,w.jsxs)(v.Z,{variant:"subtitle2",component:"div",noWrap:!0,children:[t>0&&"+",(0,D.f2)(t),(0,w.jsx)(m.Z,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:" than last week"})]})]})}var ae=r(90891),se=r(86121),oe=["title","subheader","list"];function le(e){var t=e.title,r=e.subheader,n=e.list,i=(0,x.Z)(e,oe);return(0,w.jsxs)(p.Z,(0,h.Z)((0,h.Z)({},i),{},{children:[(0,w.jsx)(T.Z,{title:t,subheader:r}),(0,w.jsx)(Q.Z,{children:(0,w.jsx)(G.Z,{spacing:3,sx:{p:3,pr:0},children:n.map((function(e){return(0,w.jsx)(ce,{product:e},e.id)}))})})]}))}function ce(e){var t=e.product,r=t.name,n=t.image,i=t.price,a=t.priceSale,s=a>0;return(0,w.jsxs)(G.Z,{direction:"row",spacing:2,children:[(0,w.jsx)(b.Z,{alt:r,src:n,sx:{width:48,height:48,borderRadius:1.5,flexShrink:0}}),(0,w.jsxs)(m.Z,{sx:{flexGrow:1,minWidth:200},children:[(0,w.jsx)(ae.Z,{sx:{color:"text.primary",typography:"subtitle2"},children:r}),(0,w.jsxs)(G.Z,{direction:"row",children:[s&&(0,w.jsx)(v.Z,{variant:"body2",sx:{color:"text.secondary",textDecoration:"line-through"},children:(0,D.e_)(a)}),"\xa0",(0,w.jsx)(v.Z,{variant:"body2",sx:{color:a?"error.main":"text.secondary"},children:(0,D.e_)(i)})]})]}),(0,w.jsx)(se.ZQ,{limit:3,colors:t.colors,sx:{minWidth:72,pr:3}})]})}var de=["title","sentAmount","currentBalance","sx"];function xe(e){var t=e.title,r=e.sentAmount,n=e.currentBalance,i=e.sx,a=(0,x.Z)(e,de),s=n-r;return(0,w.jsxs)(p.Z,(0,h.Z)((0,h.Z)({sx:(0,h.Z)({p:3},i)},a),{},{children:[(0,w.jsx)(v.Z,{variant:"subtitle2",gutterBottom:!0,children:t}),(0,w.jsxs)(G.Z,{spacing:2,children:[(0,w.jsx)(v.Z,{variant:"h3",children:(0,D.e_)(s)}),(0,w.jsxs)(G.Z,{direction:"row",justifyContent:"space-between",children:[(0,w.jsx)(v.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Your Current Balance"}),(0,w.jsx)(v.Z,{variant:"body2",children:(0,D.e_)(n)})]}),(0,w.jsxs)(G.Z,{direction:"row",justifyContent:"space-between",children:[(0,w.jsx)(v.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Sent Amount"}),(0,w.jsxs)(v.Z,{variant:"body2",children:["- ",(0,D.e_)(r)]})]}),(0,w.jsxs)(G.Z,{direction:"row",justifyContent:"space-between",children:[(0,w.jsx)(v.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Total Amount"}),(0,w.jsx)(v.Z,{variant:"subtitle1",children:(0,D.e_)(s)})]}),(0,w.jsxs)(G.Z,{direction:"row",spacing:1.5,children:[(0,w.jsx)(o.Z,{fullWidth:!0,variant:"contained",color:"warning",children:"Transfer"}),(0,w.jsx)(o.Z,{fullWidth:!0,variant:"contained",children:"Receive"})]})]})]}))}var he=r(83597),ue=r(62316);function Ze(){var e=(0,l.E)().user,t=(0,i.Z)(),r=(0,d.K$)().themeStretch;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(n.ql,{children:(0,w.jsx)("title",{children:" General: E-commerce | Minimal UI"})}),(0,w.jsx)(a.Z,{maxWidth:!r&&"xl",children:(0,w.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,w.jsx)(s.ZP,{item:!0,xs:12,md:8,children:(0,w.jsx)(he.E0,{title:"Congratulations! \n ".concat(null===e||void 0===e?void 0:e.displayName),description:"Best seller of the month You have done 57.6% more sales today.",img:(0,w.jsx)(ue.bq,{sx:{p:3,width:360,margin:{xs:"auto",md:"inherit"}}}),action:(0,w.jsx)(o.Z,{variant:"contained",children:"Go Now"})})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,w.jsx)(C,{list:c.jX})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,w.jsx)(ne,{title:"Product Sold",percent:2.6,total:765,chart:{colors:[t.palette.primary.main],series:[22,8,35,50,82,84,77,12,87,43]}})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,w.jsx)(ne,{title:"Total Balance",percent:-.1,total:18765,chart:{colors:[t.palette.info.main],series:[56,47,40,62,73,30,23,54,67,68]}})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,w.jsx)(ne,{title:"Sales Profit",percent:.6,total:4876,chart:{colors:[t.palette.warning.main],series:[40,70,75,70,50,28,7,64,38,27]}})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,w.jsx)(X,{title:"Sale By Gender",total:2324,chart:{series:[{label:"Mens",value:44},{label:"Womens",value:75}]}})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,w.jsx)(W,{title:"Yearly Sales",subheader:"(+43%) than last year",chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],series:[{year:"2019",data:[{name:"Total Income",data:[10,41,35,151,49,62,69,91,48]},{name:"Total Expenses",data:[10,34,13,56,77,88,99,77,45]}]},{year:"2020",data:[{name:"Total Income",data:[148,91,69,62,49,51,35,41,10]},{name:"Total Expenses",data:[45,77,99,88,77,56,13,34,10]}]}]}})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,w.jsx)(V,{title:"Sales Overview",data:c.ww})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,w.jsx)(xe,{title:"Current Balance",currentBalance:187650,sentAmount:25500})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,w.jsx)(N,{title:"Best Salesman",tableData:c.IF,tableLabels:[{id:"seller",label:"Seller"},{id:"product",label:"Product"},{id:"country",label:"Country",align:"center"},{id:"total",label:"Total"},{id:"rank",label:"Rank",align:"right"}]})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,w.jsx)(le,{title:"Latest Products",list:c.WD})})]})})]})}}}]);