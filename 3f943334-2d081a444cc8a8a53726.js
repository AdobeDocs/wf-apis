"use strict";(self.webpackChunkWorkfront_api_docs=self.webpackChunkWorkfront_api_docs||[]).push([[231],{32199:function(e,i,n){n.d(i,{BA:function(){return b},NN:function(){return R},Rp:function(){return h},__:function(){return I},ck:function(){return N},mQ:function(){return Z},ms:function(){return L}});var t=n(87462),a=n(63366),r=n(15007),o=n(75900),s=n.n(o),l=n(31404),c=n(77158),d=n(158),m=["orientation","isQuiet","children","className","onFontsReady"],u=["elementType","isSelected","className","children","icon","label"],p=["elementType","icon","isSelected","className","children","iconSize"],v=["className"],f=["elementType","isHidden","className","children"],g=["theme","orientation","className"];var b=function(e,i){e.current.style.transform="translate("+i.current.offsetLeft+"px, 0px)",e.current.style.width=i.current.offsetWidth+"px"},h=function(e,i){e.current.style.transition=i?"":"none"},y="480px",w=function(e){var i;return"img"===(null==e||null===(i=e.props)||void 0===i?void 0:i.mdxType)?(0,r.cloneElement)(e,{loading:"eager"}):e},z=function(e){var i=e.image,n=void 0===i?"":i,t=e.styles,a=void 0===t?"":t;return n?(0,r.cloneElement)(n,{children:(0,d.ve)(n.props.children,w),css:(0,l.iv)("display:flex;align-items:center;justify-content:center;height:100%;width:100%;margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",a,";","")}):null},x=function(e){var i=e.icon,n=e.styles;return i?(0,r.cloneElement)(i,{alt:"",css:(0,l.iv)("height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600);margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",n,";","")}):null},Z=(0,r.forwardRef)((function(e,i){var n=e.orientation,o=void 0===n?"horizontal":n,c=e.isQuiet,d=void 0===c||c,u=e.children,p=e.className,v=e.onFontsReady,f=(0,a.Z)(e,m);return(0,r.useEffect)((function(){document.fonts.ready.then((function(){v&&v()}))}),[v]),(0,l.tZ)("div",(0,t.Z)({ref:i},f,{role:"tablist","aria-orientation":o,className:s()(p,"spectrum-Tabs","spectrum-Tabs--sizeM","spectrum-Tabs--"+o,{"spectrum-Tabs--quiet":d})}),u)})),N=(0,r.forwardRef)((function(e,i){var n=e.elementType,r=void 0===n?"div":n,o=e.isSelected,d=void 0!==o&&o,m=e.className,p=e.children,v=e.icon,f=e.label,g=(0,a.Z)(e,u),b=r,h=(0,c.ZP)();return(0,l.tZ)(b,(0,t.Z)({},g,{ref:i,role:"tab","aria-selected":d,"aria-controls":h,className:s()(m,"spectrum-Tabs-item",{"is-selected":d})}),v?(0,l.tZ)(T,{icon:v,isSelected:d}):null,f?(0,l.tZ)(I,null," ",f," "):null,p)})),k={name:"16l42sl",styles:"height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-550);z-index:1"},T=(0,r.forwardRef)((function(e,i){var n=e.elementType,r=void 0===n?"div":n,o=e.icon,c=e.isSelected,d=e.className,m=(e.children,e.iconSize),u=void 0===m?"xl":m,v=(0,a.Z)(e,p),f=r;return(0,l.tZ)(f,(0,t.Z)({},v,{ref:i,className:s()(d,"spectrum-Icon",{"is-selected":c}),css:k}),o?function(e,i,n){var t,a,r;return"img"===(null==e||null===(t=e.props)||void 0===t||null===(a=t.children)||void 0===a||null===(r=a.props)||void 0===r?void 0:r.mdxType)?(0,l.tZ)(z,{image:e,className:s()(i,"spectrum-Icon--spectrum-icon-size-"+n)}):(0,l.tZ)(x,{icon:e,className:s()(i,"spectrum-Icon--spectrum-icon-size-"+n)})}(o,d,u):null)})),S={name:"pwo431",styles:"transition-property:transform,width"},R=(0,r.forwardRef)((function(e,i){var n=e.className,r=(0,a.Z)(e,v);return(0,l.tZ)("div",(0,t.Z)({},r,{ref:i,className:s()(n,"spectrum-Tabs-selectionIndicator"),css:S}))})),I=function(e){var i=e.children;return(0,l.tZ)("span",{className:"spectrum-Tabs-itemLabel"},i)},M=(0,r.forwardRef)((function(e,i){var n=e.elementType,r=void 0===n?"div":n,o=e.isHidden,c=e.className,d=e.children,m=(0,a.Z)(e,f),u=r;return(0,l.tZ)(u,(0,t.Z)({},m,{ref:i,hidden:o,className:s()(c)}),d)})),_={name:"ilo42r",styles:"background:var(--spectrum-global-color-gray-100);width:100%;overflow:hidden!important;margin:0;padding-bottom:calc(var(--spectrum-global-dimension-size-1250) + var(--spectrum-global-dimension-size-250))"},L=function(e){var i=e.theme,n=void 0===i?"light":i,t=e.orientation,o=void 0===t?"horizontal":t,c=e.className,m=(0,a.Z)(e,g),u=(0,r.useState)([])[0],p=(0,r.useRef)(null),v=(0,r.useState)({tab:0}),f=v[0],h=v[1],w=Object.keys(m).filter((function(e){return e.startsWith("heading")})).map((function(e){return e})).map((function(e,i){var n,t;return{heading:(null==m||null===(n=m["heading"+i])||void 0===n||null===(t=n.props)||void 0===t?void 0:t.children)||(null==m?void 0:m.heading),content:(null==m?void 0:m["content"+i])||(null==m?void 0:m.content),image:(null==m?void 0:m["image"+i])||(null==m?void 0:m.image)}})),z=function(e){void 0===e&&(e=f.tab);var i=u.filter((function(e){return null==e?void 0:e.current}))[e];b(p,i)},x=function(e){h({tab:e}),z(e)};return(0,l.tZ)("section",{className:s()(c,"tabsBlock spectrum--"+n),css:_},(0,l.tZ)("div",{css:(0,l.iv)("display:","vertical"===o?"inline-flex":"",";@media only screen and (min-width: ",d.LU,"){margin:0 auto!important;}@media only screen and (max-width: ",y,"){flex-direction:column;}","")},(0,l.tZ)("div",{css:(0,l.iv)("display:","vertical"===o?"grid":"block",";position:relative;grid-template-columns:300px calc(100% - 300px);margin-top:","vertical"===o?"var(--spectrum-global-dimension-size-300)":"",";width:inherit;@media only screen and (max-width: ",y,"){display:block!important;width:",(0,d.MY)(2.5),"!important;}@media only screen and (device-width: ",d.q9,"){width:",(0,d.MY)(6.4),"!important;}@media only screen and (device-width: ",d.LU,"){width:",(0,d.MY)(8),"!important;}","")},(null==w?void 0:w.length)>0?(0,l.tZ)(Z,{orientation:o,isQuiet:!0,onFontsReady:z},w.map((function(e,i){var n=(0,r.createRef)();u.push(n);var t=f.tab===i;return(0,l.tZ)(N,{className:"tabItem",key:"tabItem_"+i,id:"tabItem_"+i,ref:n,isSelected:t,"aria-controls":"tabView"+i,tabIndex:i===f.tab?0:-1,"aria-label":e.heading,"aria-selected":i===f.tab,label:(0,l.tZ)("b",null,e.heading),icon:e.image,onKeyDown:function(e){"ArrowDown"!==e.key&&"ArrowRight"!==e.key&&"Enter"!==e.key||e.currentTarget.nextSibling&&e.currentTarget.nextSibling.focus(),"ArrowUp"!==e.key&&"ArrowLeft"!==e.key||e.currentTarget.previousSibling&&e.currentTarget.previousSibling.focus()},onFocus:function(){x(i)},onClick:function(){x(i)},css:(0,l.iv)("text-align:left;white-space:normal;width:","vertical"===o?"calc(var(--spectrum-global-dimension-size-2000) + var(--spectrum-global-dimension-size-600))":"calc(var(--spectrum-global-dimension-static-grid-fixed-max-width) / var(--spectrum-global-dimension-static-grid-columns))","!important;font-size:var(--spectrum-global-dimension-size-200);margin-bottom:","vertical"===o?"2.4rem !important":"0rem",";display:flex!important;padding:var(--spectrum-global-dimension-size-125)!important;height:auto!important;line-height:initial;.spectrum-Tabs-itemLabel{margin-top:5px;margin-bottom:5px;}.spectrum-Icon{background-size:var(--spectrum-global-dimension-size-225) var(--spectrum-global-dimension-size-275);width:var(--spectrum-global-dimension-size-500);height:var(--spectrum-global-dimension-size-400);}&.is-disabled{pointer-events:none;}&::before{left:var(--spectrum-global-dimension-size-0)!important;right:var(--spectrum-global-dimension-size-0)!important;}@media only screen and (max-width: ",y,"){margin-top:var(--spectrum-global-dimension-size-25)!important;margin-bottom:var(--spectrum-global-dimension-size-25)!important;}@media only screen and (min-width: ",d.LU,"){left:var(--spectrum-global-dimension-size-250)!important;}","")})})),(0,l.tZ)(R,{ref:p})):null,(null==w?void 0:w.length)>0?w.map((function(e,i){var n=f.tab===i;return(0,l.tZ)(M,{key:"tabView_"+i,className:"tabView",isHidden:!n,css:(0,l.iv)("text-align:left;max-width:100%!important;padding:","vertical"===o?"":(0,d.MY)(.125)+" "+(0,d.MY)(.25),";@media only screen and (max-width: ",y,"){padding-left:inherit!important;max-width:",(0,d.MY)(3),"!important;}@media only screen and (device-width: ",d.q9,"){max-width:",(0,d.MY)(3.5),"!important;}@media only screen and (device-width: ",d.LU,"){max-width:",(0,d.MY)(6.5),"!important;padding-left:var(--spectrum-global-dimension-size-500);}","")},e.content?e.content:null)})):null)))}}}]);
//# sourceMappingURL=3f943334-2d081a444cc8a8a53726.js.map