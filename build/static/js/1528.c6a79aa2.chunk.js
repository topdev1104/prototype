"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[1528],{37903:function(e,n,r){r.d(n,{Z:function(){return g}});var t=r(1413),i=r(45987),a=r(57829),s=r(35898),l=r(61113),o=r(3404),c=r(90891),d=r(2135),h=r(46417);function u(e){var n=e.link,r=e.activeLast,i=e.disabled,s=n.name,l=n.href,o=n.icon,u=(0,t.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},i&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,h.jsxs)(h.Fragment,{children:[o&&(0,h.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:o}),s]});return l?(0,h.jsx)(c.Z,{component:d.rU,to:l,sx:u,children:x}):(0,h.jsxs)(a.Z,{sx:u,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function g(e){var n=e.links,r=e.action,d=e.heading,g=e.moreLink,j=e.activeLast,m=e.sx,p=(0,i.Z)(e,x),f=n[n.length-1].name;return(0,h.jsxs)(a.Z,{sx:(0,t.Z)({mb:5},m),children:[(0,h.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,h.jsxs)(a.Z,{sx:{flexGrow:1},children:[d&&(0,h.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,h.jsx)(o.Z,(0,t.Z)((0,t.Z)({separator:(0,h.jsx)(Z,{})},p),{},{children:n.map((function(e){return(0,h.jsx)(u,{link:e,activeLast:j,disabled:e.name===f},e.name||"")}))}))]}),r&&(0,h.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!g&&(0,h.jsx)(a.Z,{sx:{mt:2},children:g.map((function(e){return(0,h.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function Z(){return(0,h.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},38618:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(1413),i=r(45987),a=r(35898),s=r(61113),l=r(9651),o=r(46417),c=["title","description","img","sx"];function d(e){var n=e.title,r=e.description,d=e.img,h=e.sx,u=(0,i.Z)(e,c);return(0,o.jsxs)(a.Z,(0,t.Z)((0,t.Z)({alignItems:"center",justifyContent:"center",sx:(0,t.Z)({height:1,textAlign:"center",p:function(e){return e.spacing(8,2)}},h)},u),{},{children:[(0,o.jsx)(l.Z,{disabledEffect:!0,alt:"empty content",src:d||"/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),(0,o.jsx)(s.Z,{variant:"h5",gutterBottom:!0,children:n}),r&&(0,o.jsx)(s.Z,{variant:"body2",sx:{color:"text.secondary"},children:r})]}))}},31126:function(e,n,r){function t(e,n,r){return e>0?Math.max(0,(1+e)*n-r):0}function i(e,n,r){return n[r]<e[r]?-1:n[r]>e[r]?1:0}function a(e,n){return"desc"===e?function(e,r){return i(e,r,n)}:function(e,r){return-i(e,r,n)}}r.d(n,{$W:function(){return f},K:function(){return y},et:function(){return x},S_:function(){return _},Z4:function(){return I},hM:function(){return p},fQ:function(){return t},sQ:function(){return a},x6:function(){return o}});var s=r(29439),l=r(47313);function o(e){var n=(0,l.useState)(!(null===e||void 0===e||!e.defaultDense)),r=(0,s.Z)(n,2),t=r[0],i=r[1],a=(0,l.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),o=(0,s.Z)(a,2),c=o[0],d=o[1],h=(0,l.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),u=(0,s.Z)(h,2),x=u[0],g=u[1],Z=(0,l.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),j=(0,s.Z)(Z,2),m=j[0],p=j[1],f=(0,l.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),b=(0,s.Z)(f,2),v=b[0],w=b[1],C=(0,l.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),S=(0,s.Z)(C,2),y=S[0],k=S[1],P=(0,l.useCallback)((function(e){""!==e&&(g(c===e&&"asc"===x?"desc":"asc"),d(e))}),[x,c]),R=(0,l.useCallback)((function(e){var n=y.indexOf(e),r=[];-1===n?r=r.concat(y,e):0===n?r=r.concat(y.slice(1)):n===y.length-1?r=r.concat(y.slice(0,-1)):n>0&&(r=r.concat(y.slice(0,n),y.slice(n+1))),k(r)}),[y]),I=(0,l.useCallback)((function(e,n){k(e?n:[])}),[]),D=(0,l.useCallback)((function(e,n){p(n)}),[]),F=(0,l.useCallback)((function(e){p(0),w(parseInt(e.target.value,10))}),[]),W=(0,l.useCallback)((function(e){i(e.target.checked)}),[]);return{dense:t,order:x,page:m,orderBy:c,rowsPerPage:v,selected:y,onSelectRow:R,onSelectAllRows:I,onSort:P,onChangePage:D,onChangeDense:W,onChangeRowsPerPage:F,setPage:p,setDense:i,setOrder:g,setOrderBy:d,setSelected:k,setRowsPerPage:w}}var c=r(24076),d=r(67478),h=r(38618),u=r(46417);function x(e){var n=e.isNotFound;return(0,u.jsx)(c.Z,{children:n?(0,u.jsx)(d.Z,{colSpan:12,children:(0,u.jsx)(h.Z,{title:"No Data",sx:{"& span.MuiBox-root":{height:160}}})}):(0,u.jsx)(d.Z,{colSpan:12,sx:{p:0}})})}var g=r(1413),Z=r(36459),j=r(35898),m=r(84488);function p(e){var n=Object.assign({},((0,Z.Z)(e),e));return(0,u.jsx)(c.Z,(0,g.Z)((0,g.Z)({},n),{},{children:(0,u.jsx)(d.Z,{colSpan:12,children:(0,u.jsxs)(j.Z,{spacing:3,direction:"row",alignItems:"center",children:[(0,u.jsx)(m.Z,{variant:"rectangular",width:40,height:40,sx:{borderRadius:1,flexShrink:0}}),(0,u.jsx)(m.Z,{variant:"text",width:"100%",height:20}),(0,u.jsx)(m.Z,{variant:"text",width:160,height:20}),(0,u.jsx)(m.Z,{variant:"text",width:160,height:20}),(0,u.jsx)(m.Z,{variant:"text",width:160,height:20}),(0,u.jsx)(m.Z,{variant:"text",width:160,height:20})]})})}))}function f(e){var n=e.emptyRows,r=e.height;return n?(0,u.jsx)(c.Z,{sx:(0,g.Z)({},r&&{height:r*n}),children:(0,u.jsx)(d.Z,{colSpan:9})}):null}var b=r(23477),v=r(44758),w=r(82558),C=r(57829),S={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function y(e){var n=e.order,r=e.orderBy,t=e.rowCount,i=void 0===t?0:t,a=e.headLabel,s=e.numSelected,l=void 0===s?0:s,o=e.onSort,h=e.onSelectAllRows,x=e.sx;return(0,u.jsx)(b.Z,{sx:x,children:(0,u.jsxs)(c.Z,{children:[h&&(0,u.jsx)(d.Z,{padding:"checkbox",children:(0,u.jsx)(v.Z,{indeterminate:l>0&&l<i,checked:i>0&&l===i,onChange:function(e){return h(e.target.checked)}})}),a.map((function(e){return(0,u.jsx)(d.Z,{align:e.align||"left",sortDirection:r===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:o?(0,u.jsxs)(w.Z,{hideSortIcon:!0,active:r===e.id,direction:r===e.id?n:"asc",onClick:function(){return o(e.id)},sx:{textTransform:"capitalize"},children:[e.label,r===e.id?(0,u.jsx)(C.Z,{sx:(0,g.Z)({},S),children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var k=r(45987),P=r(61113),R=["dense","action","rowCount","numSelected","onSelectAllRows","sx"];function I(e){var n=e.dense,r=e.action,t=e.rowCount,i=e.numSelected,a=e.onSelectAllRows,s=e.sx,l=(0,k.Z)(e,R);return i?(0,u.jsxs)(j.Z,(0,g.Z)((0,g.Z)({direction:"row",alignItems:"center",sx:(0,g.Z)((0,g.Z)({pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter"},n&&{height:38}),s)},l),{},{children:[(0,u.jsx)(v.Z,{indeterminate:i>0&&i<t,checked:t>0&&i===t,onChange:function(e){return a(e.target.checked)}}),(0,u.jsxs)(P.Z,{variant:"subtitle1",sx:(0,g.Z)({ml:2,flexGrow:1,color:"primary.main"},n&&{ml:3}),children:[i," selected"]}),r&&r]})):null}var D=r(41493),F=r(83929),W=r(67426),B=["dense","onChangeDense","rowsPerPageOptions","sx"];function _(e){var n=e.dense,r=e.onChangeDense,t=e.rowsPerPageOptions,i=void 0===t?[5,10,25]:t,a=e.sx,s=(0,k.Z)(e,B);return(0,u.jsxs)(C.Z,{sx:(0,g.Z)({position:"relative"},a),children:[(0,u.jsx)(D.Z,(0,g.Z)({rowsPerPageOptions:i,component:"div"},s)),r&&(0,u.jsx)(F.Z,{label:"Dense",control:(0,u.jsx)(W.Z,{checked:n,onChange:r}),sx:{pl:2,py:1.5,top:0,position:{sm:"absolute"}}})]})}},51528:function(e,n,r){r.r(n),r.d(n,{default:function(){return Q}});var t=r(65964),i=r(57829),a=r(70178),s=r(35898),l=r(73428),o=r(54641),c=r(76025),d=r(37903),h=r(51629),u=r(66835),x=r(57861),g=r(24076),Z=r(67478),j=r(59743),m=r(31126),p=r(46417);function f(e,n,r,t,i){return{name:e,calories:n,fat:r,carbs:t,protein:i}}var b=[f("Frozen yoghurt",159,6,24,4),f("Ice cream sandwich",237,9,37,4.3),f("Eclair",262,16,24,6),f("Cupcake",305,3.7,67,4.3),f("Gingerbread",356,16,49,3.9)],v=[{id:"dessert",label:"Dessert (100g serving)"},{id:"calories",label:"Calories",align:"right"},{id:"fat",label:"Fat (g)",align:"right"},{id:"carbs",label:"Carbs (g)",align:"right"},{id:"protein",label:"Protein (g)",align:"right"}];function w(){return(0,p.jsx)(h.Z,{sx:{mt:3,overflow:"unset"},children:(0,p.jsx)(j.Z,{children:(0,p.jsxs)(u.Z,{sx:{minWidth:800},children:[(0,p.jsx)(m.K,{headLabel:v}),(0,p.jsx)(x.Z,{children:b.map((function(e){return(0,p.jsxs)(g.Z,{children:[(0,p.jsx)(Z.Z,{children:e.name}),(0,p.jsx)(Z.Z,{align:"right",children:e.calories}),(0,p.jsx)(Z.Z,{align:"right",children:e.fat}),(0,p.jsx)(Z.Z,{align:"right",children:e.carbs}),(0,p.jsx)(Z.Z,{align:"right",children:e.protein})]},e.name)}))})]})})})}var C=r(23477);function S(e,n,r,t,i,a){return{name:e,calories:n,fat:r,carbs:t,protein:i,price:a,history:[{date:"2020-01-05",customerId:"11091700",amount:3},{date:"2020-01-02",customerId:"Anonymous",amount:1}]}}var y=r(1413),k=r(29439),P=r(47313),R=r(47131),I=r(65033),D=r(70501),F=r(61113),W=r(16335);function B(e){var n=e.row,r=(0,P.useState)(!1),t=(0,k.Z)(r,2),i=t[0],a=t[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(g.Z,{children:[(0,p.jsx)(Z.Z,{children:(0,p.jsx)(R.Z,{size:"small",color:i?"inherit":"default",onClick:function(){return a(!i)},children:(0,p.jsx)(W.Z,{icon:i?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})})}),(0,p.jsx)(Z.Z,{component:"th",scope:"row",children:n.name}),(0,p.jsx)(Z.Z,{align:"right",children:n.calories}),(0,p.jsx)(Z.Z,{align:"right",children:n.fat}),(0,p.jsx)(Z.Z,{align:"right",children:n.carbs}),(0,p.jsx)(Z.Z,{align:"right",children:n.protein})]}),(0,p.jsx)(g.Z,{children:(0,p.jsx)(Z.Z,{sx:{py:0},colSpan:6,children:(0,p.jsx)(I.Z,{in:i,unmountOnExit:!0,children:(0,p.jsxs)(D.Z,{variant:"outlined",sx:(0,y.Z)({py:2,borderRadius:1.5},i&&{boxShadow:function(e){return e.customShadows.z20}}),children:[(0,p.jsx)(F.Z,{variant:"h6",sx:{m:2,mt:0},children:"History"}),(0,p.jsxs)(u.Z,{size:"small","aria-label":"purchases",children:[(0,p.jsx)(C.Z,{children:(0,p.jsxs)(g.Z,{children:[(0,p.jsx)(Z.Z,{children:"Date"}),(0,p.jsx)(Z.Z,{children:"Customer"}),(0,p.jsx)(Z.Z,{align:"right",children:"Amount"}),(0,p.jsx)(Z.Z,{align:"right",children:"Total price ($)"})]})}),(0,p.jsx)(x.Z,{children:n.history.map((function(e){return(0,p.jsxs)(g.Z,{children:[(0,p.jsx)(Z.Z,{component:"th",scope:"row",children:e.date}),(0,p.jsx)(Z.Z,{children:e.customerId}),(0,p.jsx)(Z.Z,{align:"right",children:e.amount}),(0,p.jsx)(Z.Z,{align:"right",children:Math.round(e.amount*n.price*100)/100})]},e.date)}))})]})]})})})})]})}var _=[S("Frozen yoghurt",159,6,24,4,3.99),S("Ice cream sandwich",237,9,37,4.3,4.99),S("Eclair",262,16,24,6,3.79),S("Cupcake",305,3.7,67,4.3,2.5),S("Gingerbread",356,16,49,3.9,1.5)];function z(){return(0,p.jsx)(h.Z,{sx:{mt:3,overflow:"unset"},children:(0,p.jsx)(j.Z,{children:(0,p.jsxs)(u.Z,{sx:{minWidth:800},children:[(0,p.jsx)(C.Z,{children:(0,p.jsxs)(g.Z,{children:[(0,p.jsx)(Z.Z,{}),(0,p.jsx)(Z.Z,{children:"Dessert (100g serving)"}),(0,p.jsx)(Z.Z,{align:"right",children:"Calories"}),(0,p.jsx)(Z.Z,{align:"right",children:"Fat\xa0(g)"}),(0,p.jsx)(Z.Z,{align:"right",children:"Carbs\xa0(g)"}),(0,p.jsx)(Z.Z,{align:"right",children:"Protein\xa0(g)"})]})}),(0,p.jsx)(x.Z,{children:_.map((function(e){return(0,p.jsx)(B,{row:e},e.name)}))})]})})})}var A=r(61689),L=r(44758);function O(){return(0,p.jsxs)(s.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3},children:[(0,p.jsx)(F.Z,{variant:"h6",children:"Sorting & Selecting"}),(0,p.jsx)(A.Z,{title:"Filter list",children:(0,p.jsx)(R.Z,{children:(0,p.jsx)(W.Z,{icon:"ic:round-filter-list"})})})]})}function U(e,n,r,t,i){return{name:e,calories:n,fat:r,carbs:t,protein:i}}var E=[U("Cupcake",305,3.7,67,4.3),U("Donut",452,25,51,4.9),U("Eclair",262,16,24,6),U("Frozen yoghurt",159,6,24,4),U("Gingerbread",356,16,49,3.9),U("Honeycomb",408,3.2,87,6.5),U("Ice cream sandwich",237,9,37,4.3),U("Jelly Bean",375,0,94,0),U("KitKat",518,26,65,7),U("Lollipop",392,.2,98,0),U("Marshmallow",318,0,81,2),U("Nougat",360,19,9,37)],G=[{id:"name",label:"Dessert\xa0(100g serving)",align:"left"},{id:"calories",label:"Calories",align:"center"},{id:"fat",label:"Fat\xa0(g)",align:"center"},{id:"carbs",label:"Carbs\xa0(g)",align:"center"},{id:"protein",label:"Protein\xa0(g)",align:"center"}];function M(){var e=(0,m.x6)({defaultOrderBy:"calories"}),n=e.dense,r=e.page,t=e.order,i=e.orderBy,a=e.rowsPerPage,s=e.selected,l=e.onSelectRow,o=e.onSelectAllRows,c=e.onSort,d=e.onChangeDense,f=e.onChangePage,b=e.onChangeRowsPerPage,v=(0,P.useState)([]),w=(0,k.Z)(v,2),C=w[0],S=w[1];(0,P.useEffect)((function(){S(E)}),[]);var y=function(e){var n=e.inputData,r=e.comparator,t=n.map((function(e,n){return[e,n]}));return t.sort((function(e,n){var t=r(e[0],n[0]);return 0!==t?t:e[1]-n[1]})),n=t.map((function(e){return e[0]}))}({inputData:C,comparator:(0,m.sQ)(t,i)}),I=n?34:54;return(0,p.jsxs)("div",{children:[(0,p.jsx)(O,{}),(0,p.jsxs)(h.Z,{sx:{position:"relative",overflow:"unset"},children:[(0,p.jsx)(m.Z4,{dense:n,numSelected:s.length,rowCount:C.length,onSelectAllRows:function(e){return o(e,C.map((function(e){return e.name})))},action:(0,p.jsx)(A.Z,{title:"Delete",children:(0,p.jsx)(R.Z,{color:"primary",children:(0,p.jsx)(W.Z,{icon:"eva:trash-2-outline"})})})}),(0,p.jsx)(j.Z,{children:(0,p.jsxs)(u.Z,{size:n?"small":"medium",sx:{minWidth:800},children:[(0,p.jsx)(m.K,{order:t,orderBy:i,headLabel:G,rowCount:C.length,numSelected:s.length,onSort:c,onSelectAllRows:function(e){return o(e,C.map((function(e){return e.name})))}}),(0,p.jsxs)(x.Z,{children:[y.slice(r*a,r*a+a).map((function(e){return(0,p.jsxs)(g.Z,{hover:!0,onClick:function(){return l(e.name)},selected:s.includes(e.name),children:[(0,p.jsx)(Z.Z,{padding:"checkbox",children:(0,p.jsx)(L.Z,{checked:s.includes(e.name)})}),(0,p.jsxs)(Z.Z,{children:[" ",e.name," "]}),(0,p.jsx)(Z.Z,{align:"center",children:e.calories}),(0,p.jsx)(Z.Z,{align:"center",children:e.fat}),(0,p.jsx)(Z.Z,{align:"center",children:e.carbs}),(0,p.jsx)(Z.Z,{align:"center",children:e.protein})]},e.name)})),(0,p.jsx)(m.$W,{height:I,emptyRows:(0,m.fQ)(r,a,C.length)})]})]})})]}),(0,p.jsx)(m.S_,{count:y.length,page:r,rowsPerPage:a,onPageChange:f,onRowsPerPageChange:b,dense:n,onChangeDense:d})]})}function N(e,n,r,t){return{name:e,code:n,population:r,size:t,density:r/t}}var T=[N("India","IN",1324171354,3287263),N("China","CN",1403500365,9596961),N("Italy","IT",60483973,301340),N("United States","US",327167434,9833520),N("Canada","CA",37602103,9984670),N("Australia","AU",25475400,7692024),N("Germany","DE",83019200,357578),N("Ireland","IE",4857e3,70273),N("Mexico","MX",126577691,1972550),N("Japan","JP",126317e3,377973),N("France","FR",67022e3,640679),N("United Kingdom","GB",67545757,242495),N("Russia","RU",146793744,17098246),N("Nigeria","NG",200962417,923768),N("Brazil","BR",210147125,8515767)],K=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"density",label:"Density",minWidth:170,align:"right",format:function(e){return e.toFixed(2)}}];function H(){var e=(0,m.x6)({defaultRowsPerPage:10}),n=e.page,r=e.rowsPerPage,t=e.onChangePage,i=e.onChangeRowsPerPage;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h.Z,{sx:{overflow:"unset"},children:(0,p.jsx)(j.Z,{sx:{maxHeight:400},children:(0,p.jsxs)(u.Z,{stickyHeader:!0,sx:{minWidth:800},children:[(0,p.jsxs)(C.Z,{children:[(0,p.jsxs)(g.Z,{children:[(0,p.jsx)(Z.Z,{align:"center",colSpan:2,sx:{background:function(e){return e.palette.background.paper}},children:"Country"}),(0,p.jsx)(Z.Z,{align:"center",colSpan:3,sx:{background:function(e){return e.palette.background.paper}},children:"Details"})]}),(0,p.jsx)(g.Z,{children:K.map((function(e){return(0,p.jsx)(Z.Z,{align:e.align,style:{top:56,minWidth:e.minWidth},children:e.label},e.id)}))})]}),(0,p.jsx)(x.Z,{children:T.slice(n*r,n*r+r).map((function(e){return(0,p.jsx)(g.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:K.map((function(n){var r=e[n.id];return(0,p.jsx)(Z.Z,{align:n.align,children:n.format&&"number"===typeof r?n.format(r):r},n.id)}))},e.code)}))})]})})}),(0,p.jsx)(m.S_,{count:T.length,page:n,rowsPerPage:r,onPageChange:t,onRowsPerPageChange:i})]})}function Q(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.ql,{children:(0,p.jsx)("title",{children:" MUI Components: Table | Minimal UI"})}),(0,p.jsx)(i.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,p.jsx)(a.Z,{children:(0,p.jsx)(d.Z,{heading:"Table",links:[{name:"Components",href:c.ko.components},{name:"Table"}],moreLink:["https://mui.com/components/tables"]})})}),(0,p.jsx)(a.Z,{sx:{my:10},children:(0,p.jsxs)(s.Z,{spacing:3,children:[(0,p.jsxs)(l.Z,{children:[(0,p.jsx)(o.Z,{title:"Basic Table"}),(0,p.jsx)(w,{})]}),(0,p.jsx)(l.Z,{children:(0,p.jsx)(M,{})}),(0,p.jsxs)(l.Z,{children:[(0,p.jsx)(o.Z,{title:"Grouping & FixedHeader"}),(0,p.jsx)(H,{})]}),(0,p.jsxs)(l.Z,{children:[(0,p.jsx)(o.Z,{title:"Collapsible Table"}),(0,p.jsx)(z,{})]})]})})]})}}}]);