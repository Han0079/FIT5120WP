(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{14:function(e,t,n){}}]),function(e){function t(t){for(var o,l,c=t[0],a=t[1],s=t[2],m=0,d=[];m<c.length;m++)l=c[m],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(u&&u(t);d.length;)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={1:0},i=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=a;i.push([17,2]),n()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var l=r.apply(null,o);l&&e.push(l)}else if("object"===i)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t,n){var o=n(9),r=n(10),i=n(11),l=n(13);e.exports=function(e,t){return o(e)||r(e,t)||i(e,t)||l()}},function(e){e.exports=JSON.parse('{"name":"getwid-megamenu/menu-item","category":"layout","parent":["getwid-megamenu/menu"],"attributes":{"url":{"type":"string","default":""},"id":{"type":"string"},"kind":{"type":"string"},"text":{"type":"string"},"linkTarget":{"type":"string"},"rel":{"type":"string"},"textColor":{"type":"string"},"customTextColor":{"type":"string"},"fontSize":{"type":"string"},"customFontSize":{"type":"string"}},"supports":{"anchor":false,"align":false,"alignWide":false,"reusable":false,"lightBlockWrapper":false}}')},function(e){e.exports=JSON.parse('{"name":"getwid-megamenu/plain-menu-item","category":"layout","parent":["getwid-megamenu/plain-menu"],"attributes":{"url":{"type":"string","default":""},"id":{"type":"string"},"kind":{"type":"string"},"text":{"type":"string"},"linkTarget":{"type":"string"},"rel":{"type":"string"},"textColor":{"type":"string"},"customTextColor":{"type":"string"},"fontSize":{"type":"string"},"customFontSize":{"type":"string"}},"supports":{"anchor":false,"align":false,"alignWide":false,"reusable":false,"lightBlockWrapper":false}}')},function(e){e.exports=JSON.parse('{"name":"getwid-megamenu/menu","title":"","category":"layout","attributes":{"itemsJustification":{"type":"string"},"expandDropdown":{"type":"boolean","default":false},"menuMaxWidth":{"type":"number"},"dropdownMaxWidth":{"type":"number"},"dropdownContentMaxWidth":{"type":"number"},"collapseOnMobile":{"type":"boolean","default":true},"responsiveBreakpoint":{"type":"number","default":600},"menuItemFontSize":{"type":"string"},"customMenuItemFontSize":{"type":"string"},"menuItemColor":{"type":"string"},"customMenuItemColor":{"type":"string"},"toggleButtonAlignment":{"type":"string"}},"supports":{"anchor":false,"align":["wide","full"],"reusable":false,"customClassName":true,"lightBlockWrapper":false}}')},function(e){e.exports=JSON.parse('{"name":"getwid-megamenu/plain-menu","title":"","category":"layout","attributes":{"itemsJustification":{"type":"string"},"orientation":{"type":"string","default":"horizontal"},"menuItemFontSize":{"type":"string"},"customMenuItemFontSize":{"type":"string"},"menuItemColor":{"type":"string"},"customMenuItemColor":{"type":"string"}},"supports":{"anchor":false,"align":false,"reusable":false,"customClassName":true,"lightBlockWrapper":false}}')},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(o=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}},function(e,t,n){var o=n(12);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var o=n(6),r=n(0),i=wp.blockEditor.InnerBlocks;var l=n(1),c=n.n(l),a=n(2),s=n.n(a),u=wp.components,m=u.BaseControl,d=u.ColorIndicator,p=wp.blockEditor.ColorPalette;var g=function(e){var t=e.label,n=e.color,o=e.disableCustomColors,i=e.clearable,l=e.onChange;return Object(r.createElement)(m,null,Object(r.createElement)(m.VisualLabel,null,t,n&&Object(r.createElement)(d,{colorValue:n,style:{verticalAlign:"text-bottom",background:n}})),Object(r.createElement)(p,{value:n,onChange:l,disableCustomColors:o,clearable:i}))};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var f=wp.i18n.__,w=wp.element.useEffect,k=wp.blockEditor,h=k.BlockControls,v=k.InspectorControls,O=k.withFontSizes,y=k.withColors,C=k.getFontSizeObjectByValue,j=wp.components,E=j.PanelBody,S=j.Toolbar,I=j.ToolbarButton,B=j.ToolbarGroup,x=j.RangeControl,_=j.BaseControl,z=j.ButtonGroup,M=j.Button,P=j.ToggleControl,A=j.FontSizePicker,D=wp.data,T=D.withDispatch,F=D.withSelect;var J=(0,wp.compose.compose)([y({menuItemColor:"color"}),O("menuItemFontSize"),F((function(e,t){return{fontSizes:e("core/block-editor").getSettings().fontSizes}})),T((function(e,t,n){return{updateChildBlocksAttributes:function(o){var r=e("core/block-editor").updateBlockAttributes;(0,n.select("core/block-editor").getBlocksByClientId)(t.clientId)[0].innerBlocks.forEach((function(e){r(e.clientId,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o))}))}}}))])((function(e){var t=e.setAttributes,n=e.attributes,o=e.menuItemFontSize,i=e.menuItemColor,l=e.setMenuItemColor,c=e.updateChildBlocksAttributes,a=e.fontSizes;function s(e){return function(){var o=n.itemsJustification===e?void 0:e;t({itemsJustification:o})}}function u(){t({expandDropdown:!n.expandDropdown})}return w((function(){c({fontSize:o.slug,customFontSize:o.slug?void 0:o.size})}),[o.size]),w((function(){c({textColor:i.slug,customTextColor:i.slug?void 0:i.color})}),[i.color]),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(h,null,Object(r.createElement)(S,{icon:n.itemsJustification?"editor-align".concat(n.itemsJustification):"editor-alignleft",label:f("Change items justification"),isCollapsed:!0,controls:[{icon:"editor-alignleft",title:f("Justify items left"),isActive:"left"===n.itemsJustification,onClick:s("left")},{icon:"editor-aligncenter",title:f("Justify items center"),isActive:"center"===n.itemsJustification,onClick:s("center")},{icon:"editor-alignright",title:f("Justify items right"),isActive:"right"===n.itemsJustification,onClick:s("right")}]}),Object(r.createElement)(B,null,Object(r.createElement)(I,{name:"expand",icon:n.expandDropdown?"editor-contract":"editor-expand",title:f("Expand dropdown"),onClick:u}))),Object(r.createElement)(v,null,Object(r.createElement)(E,{title:f("Styles"),initialOpen:!0},Object(r.createElement)(A,{fontSizes:a,value:o.size,onChange:function(e){var n=C(a,e).slug;t({menuItemFontSize:n,customMenuItemFontSize:n||null==e?void 0:e.toString()})}}),Object(r.createElement)(g,{label:f("Menu Item Color"),disableCustomColors:!1,color:i.color,onChange:l,clearable:!0}),Object(r.createElement)(P,{label:f("Expand dropdown"),help:n.expandDropdown?f("Dropdown width same as window width."):f("Dropdown width same as menu width."),checked:n.expandDropdown,onChange:u})),Object(r.createElement)(E,{title:f("Width Settings"),initialOpen:!1},Object(r.createElement)(x,{label:f("Maximum width of top-level menu in pixels"),value:n.menuMaxWidth,onChange:function(e){return t({menuMaxWidth:e})},min:0,max:2e3}),Object(r.createElement)(x,{label:f("Maximum width of dropdown in pixels"),value:n.dropdownMaxWidth,onChange:function(e){return t({dropdownMaxWidth:e})},min:0,max:2e3}),Object(r.createElement)(x,{label:f("Maximum width of dropdown content in pixels"),value:n.dropdownContentMaxWidth,onChange:function(e){return t({dropdownContentMaxWidth:e})},min:0,max:2e3})),Object(r.createElement)(E,{title:f("Responsive Settings"),initialOpen:!1},Object(r.createElement)(x,{label:f("Mobile device breakpoint in pixels"),value:n.responsiveBreakpoint,onChange:function(e){return t({responsiveBreakpoint:e})},min:0,max:2e3}),Object(r.createElement)(P,{label:f("Collapse on mobile?"),help:n.collapseOnMobile?f("Menu will be transformed to burger."):f("Menu will be as it is."),checked:n.collapseOnMobile,onChange:function(e){return t({collapseOnMobile:e})}}),Object(r.createElement)(_,{label:f("Toggle button alignment")},Object(r.createElement)(z,null,Object(r.createElement)(M,{icon:"editor-alignleft",isSecondary:!0,onClick:function(){t({toggleButtonAlignment:"left"})},isPrimary:"left"===n.toggleButtonAlignment}),Object(r.createElement)(M,{icon:"editor-aligncenter",isSecondary:!0,onClick:function(){t({toggleButtonAlignment:"center"})},isPrimary:"center"===n.toggleButtonAlignment}),Object(r.createElement)(M,{icon:"editor-alignright",isSecondary:!0,onClick:function(){t({toggleButtonAlignment:"right"})},isPrimary:"right"===n.toggleButtonAlignment}))))))})),N=(wp.i18n.__,wp.element.useRef),W=wp.blockEditor.InnerBlocks,L=wp.data.withSelect,R=wp.compose.compose,H=[["getwid-megamenu/menu-item",{}]],G=["getwid-megamenu/menu-item"];var U=R([L((function(e,t){var n,o=t.clientId,r=e("core/block-editor"),i=r.getClientIdsOfDescendants,l=r.hasSelectedInnerBlock,c=r.getSelectedBlockClientId,a=r.getBlocksByClientId;return{isImmediateParentOfSelectedBlock:l(o,!1),selectedBlockHasDescendants:!!(null===(n=i([c()]))||void 0===n?void 0:n.length),menuItems:a(o)[0].innerBlocks}}))])((function(e){var t,n=e.selectedBlockHasDescendants,o=e.isImmediateParentOfSelectedBlock,i=e.isSelected,l=e.attributes,a=N(),u=s()("wp-block-getwid-megamenu","gw-mm",(t={},c()(t,"justify-items-".concat(l.itemsJustification),l.itemsJustification),c()(t,"has-full-width-dropdown",l.expandDropdown),t)),m={maxWidth:l.menuMaxWidth};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(J,e),Object(r.createElement)("div",{className:u},Object(r.createElement)("div",{className:"gw-mm__wrapper",style:m},Object(r.createElement)("div",{className:"gw-mm__content-wrapper"},Object(r.createElement)("div",{className:"gw-mm__content"},Object(r.createElement)(W,{ref:a,template:H,templateLock:!1,allowedBlocks:G,templateInsertUpdatesSelection:!1,renderAppender:!!(o&&!n||i)&&W.DefaultAppender,__experimentalMoverDirection:"horizontal",orientation:"horizontal"}))))))})),q=wp.blocks.registerBlockType,V=wp.i18n.__;q(o.name,{title:V("Mega Menu","getwid-megamenu"),keywords:[V("navigation","getwid-megamenu"),V("links","getwid-megamenu")],icon:"menu",category:o.category,attributes:o.attributes,supports:o.supports,edit:U,save:function(){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(i.Content,null))}});var $=n(4),K=wp.blockEditor.InnerBlocks;var Q=n(8),X=n.n(Q),Y=n(3),Z=n.n(Y),ee=lodash.escape,te=wp.i18n.__,ne=wp.element,oe=ne.useCallback,re=ne.useState,ie=ne.useEffect,le=wp.components,ce=le.PanelBody,ae=le.TextControl,se=le.ToggleControl,ue=le.ToolbarButton,me=le.ToolbarGroup,de=le.Popover,pe=wp.blockEditor,ge=pe.BlockControls,be=pe.InspectorControls,fe=pe.__experimentalLinkControl;var we=function(e){var t=e.isSelected,n=e.attributes,o=e.setAttributes,i=e.toggleItemDropdown,l=n.linkTarget,c=n.rel,a=n.text,s=n.url,u=re(!1),m=Z()(u,2),d=m[0],p=m[1],g=!(void 0===s||0===s.trim().length),b=oe((function(e){var t=e?"_blank":void 0,n=c;t&&!c?n="noreferrer noopener":t||"noreferrer noopener"!==c||(n=void 0),o({linkTarget:t,rel:n})}),[c,o]),f=oe((function(e){o({rel:e})}),[o]);return ie((function(){t&&!s&&p(!0)}),[t]),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(ge,null,Object(r.createElement)(me,null,Object(r.createElement)(ue,{name:"link",icon:"admin-links",title:te("Edit Link"),onClick:function(){return p(!0),!1},isActive:g}),Object(r.createElement)(ue,{name:"unlink",icon:"editor-unlink",title:te("Unlink"),onClick:function(){o({url:void 0,linkTarget:void 0,rel:void 0}),p(!1)},isDisabled:!g})),Object(r.createElement)(me,null,Object(r.createElement)(ue,{name:"submenu",icon:"download",title:te("Add submenu"),onClick:i}))),d&&Object(r.createElement)(de,{position:"top center",onClose:function(){return p(!1)}},Object(r.createElement)(fe,{value:{url:s,opensInNewTab:"_blank"===l},onChange:function(e){var t=e.title,n=void 0===t?"":t,r=e.url,i=void 0===r?"":r,c=e.opensInNewTab,s=e.id,u=void 0===s?"":s,m=e.kind;o({id:u,kind:void 0===m?"":m,url:i,text:a||(""!==n&&a!==n?ee(n):void 0)}),"_blank"===l!==c&&b(c),p(!1)}})),Object(r.createElement)(be,null,Object(r.createElement)(ce,{title:te("Link settings")},Object(r.createElement)(se,{label:te("Open in new tab"),onChange:b,checked:"_blank"===l}),Object(r.createElement)(ae,{label:te("Link rel"),value:c||"",onChange:f}))))},ke=lodash,he=ke.head,ve=ke.isEqual,Oe=wp.i18n.__,ye=wp.element,Ce=ye.useState,je=ye.useEffect,Ee=wp.compose.compose,Se=wp.data,Ie=Se.withSelect,Be=Se.withDispatch,xe=wp.blockEditor,_e=xe.RichText,ze=xe.InnerBlocks;var Me=Ee([Ie((function(e,t){var n=e("core/block-editor"),o=n.hasSelectedInnerBlock,r=n.getClientIdsOfDescendants,i=n.getBlockParentsByBlockName,l=n.getBlock,c=t.clientId,a=o(c,!0),s=!!r([c]).length,u=he(i(c,"getwid-megamenu/menu"));return{isParentOfSelectedBlock:a,hasDescendants:s,rootBlockClientId:u,clientId:c,parentAttributes:l(u).attributes}})),Be((function(e,t){var n=t.clientId;return{updateInnerBlocks:function(t){e("core/block-editor").replaceInnerBlocks(n,[],!1)}}}))])((function(e){var t,n=e.attributes,o=e.setAttributes,i=e.isSelected,l=e.onReplace,a=e.mergeBlocks,u=e.isParentOfSelectedBlock,m=e.hasDescendants,d=e.updateInnerBlocks,p=e.rootBlockClientId,g=e.clientId,b=e.parentAttributes,f=n.text,w=Oe("Add link…"),k=Ce(m),h=Z()(k,2),v=h[0],O=h[1],y=v||m,C=(i||u)&&y,j=Ce({left:0,width:"auto"}),E=Z()(j,2),S=E[0],I=E[1],B=function(){var e,t=document.querySelector('[data-block="'+g+'"]').getBoundingClientRect(),n=(b.expandDropdown?document.querySelector(".editor-styles-wrapper"):document.querySelector('[data-block="'+p+'"] .wp-block-getwid-megamenu')).getBoundingClientRect(),o=-(t.x-n.x);b.dropdownMaxWidth&&n.width>b.dropdownMaxWidth&&(o+=(n.width-b.dropdownMaxWidth)/2),e={left:o,width:n.width},ve(e,S)||I(e)};je((function(){B()}),[i]),je((function(){window.addEventListener("resize",B)}),[]),je((function(){o({fontSize:b.menuItemFontSize,customFontSize:b.customMenuItemFontSize,textColor:b.menuItemColor,customTextColor:b.customMenuItemColor})}),[]);var x={left:S.left,width:S.width,maxWidth:b.dropdownMaxWidth},_={backgroundColor:n.customDropdownBackgroundColor},z={maxWidth:b.dropdownContentMaxWidth},M=s()("gw-mm-item__dropdown",c()({"has-background":n.dropdownBackgroundColor||n.customDropdownBackgroundColor},"has-".concat(n.dropdownBackgroundColor,"-background-color"),!!n.dropdownBackgroundColor)),P=s()("wp-block-getwid-megamenu-item","gw-mm-item",{"has-child":m,"is-opened":C}),A=s()("gw-mm-item__link",(t={"has-text-color":n.textColor||n.customTextColor},c()(t,"has-".concat(n.textColor,"-color"),!!n.textColor),c()(t,"has-".concat(n.fontSize,"-font-size"),!!n.fontSize),t)),D={color:n.customTextColor,fontSize:n.customFontSize};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:P},Object(r.createElement)("div",{className:A,style:D},Object(r.createElement)("a",{href:"#",onClick:function(){return!1}},Object(r.createElement)(_e,{placeholder:w,value:f,onChange:function(e){return o({text:e})},withoutInteractiveFormatting:!0,onReplace:l,onMerge:a,identifier:"text"}),y&&Object(r.createElement)("span",{className:"gw-mm-item__dropdown-icon"},Object(r.createElement)("span",{className:"dashicons dashicons-arrow-down"})))),C&&Object(r.createElement)("div",{className:"gw-mm-item__dropdown-wrapper",style:x},Object(r.createElement)("div",{className:M,style:_},Object(r.createElement)("div",{className:"gw-mm-item__dropdown-content",style:z},Object(r.createElement)(ze,null))))),Object(r.createElement)(we,X()({},e,{toggleItemDropdown:function(){return O(!v),m&&d(),!1},isItemDropdownOpened:v})))})),Pe=wp.blocks.registerBlockType,Ae=wp.i18n.__;Pe($.name,{title:Ae("Menu Item","getwid-megamenu"),icon:"admin-links",category:$.category,parent:$.parent,attributes:$.attributes,supports:$.supports,edit:Me,save:function(){return Object(r.createElement)(K.Content,null)}});var De=n(7),Te=wp.blockEditor.InnerBlocks;function Fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var Je=wp.i18n.__,Ne=wp.element.useEffect,We=wp.blockEditor,Le=We.BlockControls,Re=We.InspectorControls,He=We.withFontSizes,Ge=We.withColors,Ue=We.getFontSizeObjectByValue,qe=wp.components,Ve=qe.PanelBody,$e=qe.Toolbar,Ke=qe.ToolbarButton,Qe=qe.ToolbarGroup,Xe=qe.FontSizePicker,Ye=wp.data,Ze=Ye.withDispatch,et=Ye.withSelect;var tt=(0,wp.compose.compose)([Ge({menuItemColor:"color"}),He("menuItemFontSize"),et((function(e,t){return{fontSizes:e("core/block-editor").getSettings().fontSizes}})),Ze((function(e,t,n){return{updateChildBlocksAttributes:function(o){var r=e("core/block-editor").updateBlockAttributes;(0,n.select("core/block-editor").getBlocksByClientId)(t.clientId)[0].innerBlocks.forEach((function(e){r(e.clientId,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o))}))}}}))])((function(e){var t=e.setAttributes,n=e.attributes,o=e.menuItemFontSize,i=e.menuItemColor,l=e.setMenuItemColor,c=e.updateChildBlocksAttributes,a=e.fontSizes;function s(e){return function(){var o=n.itemsJustification===e?void 0:e;t({itemsJustification:o})}}return Ne((function(){c({fontSize:o.slug,customFontSize:o.slug?void 0:o.size})}),[o.size]),Ne((function(){c({textColor:i.slug,customTextColor:i.slug?void 0:i.color})}),[i.color]),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(Le,null,Object(r.createElement)($e,{icon:n.itemsJustification?"editor-align".concat(n.itemsJustification):"editor-alignleft",label:Je("Change items justification"),isCollapsed:!0,controls:[{icon:"editor-alignleft",title:Je("Justify items left"),isActive:"left"===n.itemsJustification,onClick:s("left")},{icon:"editor-aligncenter",title:Je("Justify items center"),isActive:"center"===n.itemsJustification,onClick:s("center")},{icon:"editor-alignright",title:Je("Justify items right"),isActive:"right"===n.itemsJustification,onClick:s("right")}]}),Object(r.createElement)(Qe,null,Object(r.createElement)(Ke,{name:"orientation",icon:"image-rotate-right",title:"vertical"===n.orientation?Je("Make horizontal"):Je("Make vertical"),isActive:"vertical"===n.orientation,onClick:function(){t({orientation:"vertical"===n.orientation?"horizontal":"vertical"})}}))),Object(r.createElement)(Re,null,Object(r.createElement)(Ve,{title:Je("Settings"),initialOpen:!0},Object(r.createElement)(Xe,{fontSizes:a,value:o.size,onChange:function(e){var n=Ue(a,e).slug;t({menuItemFontSize:n,customMenuItemFontSize:n||null==e?void 0:e.toString()})}}),Object(r.createElement)(g,{label:Je("Color"),disableCustomColors:!1,color:i.color,onChange:l,clearable:!0}))))})),nt=wp.element.useRef,ot=wp.blockEditor.InnerBlocks,rt=wp.data.withSelect,it=wp.compose.compose,lt=[["getwid-megamenu/plain-menu-item",{}]],ct=["getwid-megamenu/plain-menu-item"];var at=it([rt((function(e,t){var n,o=t.clientId,r=e("core/block-editor"),i=r.getClientIdsOfDescendants,l=r.hasSelectedInnerBlock,c=r.getSelectedBlockClientId;return{isImmediateParentOfSelectedBlock:l(o,!1),selectedBlockHasDescendants:!!(null===(n=i([c()]))||void 0===n?void 0:n.length)}}))])((function(e){var t,n=e.selectedBlockHasDescendants,o=e.isImmediateParentOfSelectedBlock,i=e.isSelected,l=e.attributes,a=nt(),u=s()("wp-block-getwid-plain-menu","gw-pm",(t={},c()(t,"justify-items-".concat(l.itemsJustification),l.itemsJustification),c()(t,"is-orientation-".concat(l.orientation),l.orientation),t));return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(tt,e),Object(r.createElement)("div",{className:u},Object(r.createElement)("div",{className:"gw-pm__content"},Object(r.createElement)(ot,{ref:a,template:lt,templateLock:!1,allowedBlocks:ct,templateInsertUpdatesSelection:!1,renderAppender:!!(o&&!n||i)&&ot.DefaultAppender,__experimentalMoverDirection:l.orientation,orientation:l.orientation}))))})),st=wp.blocks.registerBlockType,ut=wp.i18n.__;st(De.name,{title:ut("Plain Menu","getwid-megamenu"),icon:"menu",category:De.category,attributes:De.attributes,supports:De.supports,edit:at,save:function(){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(Te.Content,null))}});var mt=n(5),dt=wp.blockEditor.InnerBlocks;var pt=lodash.escape,gt=wp.i18n.__,bt=wp.element,ft=bt.useCallback,wt=bt.useState,kt=bt.useEffect,ht=wp.components,vt=ht.PanelBody,Ot=ht.TextControl,yt=ht.ToggleControl,Ct=ht.ToolbarButton,jt=ht.ToolbarGroup,Et=ht.Popover,St=wp.blockEditor,It=St.BlockControls,Bt=St.InspectorControls,xt=St.__experimentalLinkControl;var _t=function(e){var t=e.isSelected,n=e.attributes,o=e.setAttributes,i=e.insertPlainMenuItem,l=n.linkTarget,c=n.rel,a=n.text,s=n.url,u=wt(!1),m=Z()(u,2),d=m[0],p=m[1],g=!(void 0===s||0===s.trim().length),b=ft((function(e){o({rel:e})}),[o]),f=ft((function(e){var t=e?"_blank":void 0,n=c;t&&!c?n="noreferrer noopener":t||"noreferrer noopener"!==c||(n=void 0),o({linkTarget:t,rel:n})}),[c,o]);return kt((function(){t&&!s&&p(!0)}),[t]),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(It,null,Object(r.createElement)(jt,null,Object(r.createElement)(Ct,{name:"link",icon:"admin-links",title:gt("Edit Link"),onClick:function(){return p(!0),!1},isActive:g}),Object(r.createElement)(Ct,{name:"unlink",icon:"editor-unlink",title:gt("Unlink"),onClick:function(){o({url:void 0,linkTarget:void 0,rel:void 0}),p(!1)},isDisabled:!g})),Object(r.createElement)(jt,null,Object(r.createElement)(Ct,{name:"submenu",icon:"download",title:gt("Add submenu"),onClick:i}))),d&&Object(r.createElement)(Et,{position:"bottom center",onClose:function(){return p(!1)}},Object(r.createElement)(xt,{value:{url:s,opensInNewTab:"_blank"===l},onChange:function(e){var t=e.title,n=void 0===t?"":t,r=e.url,i=void 0===r?"":r,c=e.opensInNewTab,s=e.id,u=void 0===s?"":s,m=e.kind;o({id:u,kind:void 0===m?"":m,url:i,text:a||(""!==n&&a!==n?pt(n):void 0)}),"_blank"===l!==c&&f(c)}})),Object(r.createElement)(Bt,null,Object(r.createElement)(vt,{title:gt("Link settings")},Object(r.createElement)(yt,{label:gt("Open in new tab"),onChange:f,checked:"_blank"===l}),Object(r.createElement)(Ot,{label:gt("Link rel"),value:c||"",onChange:b}))))},zt=lodash.head,Mt=wp.i18n.__,Pt=wp.element,At=Pt.useState,Dt=Pt.useEffect,Tt=wp.compose.compose,Ft=wp.data,Jt=Ft.withSelect,Nt=Ft.withDispatch,Wt=wp.blockEditor,Lt=Wt.RichText,Rt=Wt.InnerBlocks,Ht=wp.blocks.createBlock;var Gt=Tt([Jt((function(e,t){var n,o=e("core/block-editor"),r=o.hasSelectedInnerBlock,i=o.getClientIdsOfDescendants,l=o.getBlockParentsByBlockName,c=o.getSelectedBlockClientId,a=o.getBlock,s=t.clientId,u=r(s,!0),m=r(s,!1),d=!!i([s]).length,p=!!(null===(n=i([c()]))||void 0===n?void 0:n.length),g=zt(l(s,"getwid-megamenu/plain-menu")),b=zt(l(s,"getwid-megamenu/plain-menu-item"));return{isParentOfSelectedBlock:u,isImmediateParentOfSelectedBlock:m,selectedBlockHasDescendants:p,hasDescendants:d,rootBlockClientId:g,clientId:s,parentAttributes:a(g).attributes,parentItemClientId:b}})),Nt((function(e,t,n){return{clearInnerBlocks:function(n){e("core/block-editor").replaceInnerBlocks(t.clientId,[],!1)},insertPlainMenuItem:function(){var o=e("core/block-editor").insertBlock,r=(0,n.select("core/block-editor").getClientIdsOfDescendants)([t.clientId]),i=r.length?r.length:0;o(Ht("getwid-megamenu/plain-menu-item"),i,t.clientId)}}}))])((function(e){var t,n=e.attributes,o=e.setAttributes,i=e.isSelected,l=e.onReplace,a=e.mergeBlocks,u=e.isParentOfSelectedBlock,m=e.isImmediateParentOfSelectedBlock,d=e.hasDescendants,p=e.insertPlainMenuItem,g=e.selectedBlockHasDescendants,b=e.parentAttributes,f=e.parentItemClientId,w=n.text,k=Mt("Add link…"),h=At(d),v=Z()(h,2),O=v[0],y=(v[1],i||u),C=O||d,j=y&&C,E=s()("wp-block-getwid-plain-menu-item","gw-pm-item",{"has-child":d,"has-child-selected":u,"is-opened":j});Dt((function(){o({fontSize:f?void 0:b.menuItemFontSize,customFontSize:f?void 0:b.customMenuItemFontSize,textColor:f?void 0:b.menuItemColor,customTextColor:f?void 0:b.customMenuItemColor})}),[]);var S=s()("gw-pm-item__link",(t={"has-text-color":n.textColor||n.customTextColor},c()(t,"has-".concat(n.textColor,"-color"),!!n.textColor),c()(t,"has-".concat(n.fontSize,"-font-size"),!!n.fontSize),t)),I={color:n.customTextColor,fontSize:n.customFontSize};return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:E},Object(r.createElement)("div",{className:S,style:I},Object(r.createElement)("a",{href:"#",onClick:function(){return!1}},Object(r.createElement)(Lt,{placeholder:k,value:w,onChange:function(e){return o({text:e})},withoutInteractiveFormatting:!0,onReplace:l,onMerge:a,identifier:"text"}),C&&Object(r.createElement)("span",{className:"gw-pm-item__dropdown-icon"},Object(r.createElement)("span",{className:"dashicons dashicons-arrow-down"})))),y&&Object(r.createElement)("div",{className:"gw-pm-item__dropdown"},Object(r.createElement)("div",{className:"gw-pm-item__dropdown-content"},Object(r.createElement)(Rt,{allowedBlocks:["getwid-megamenu/plain-menu-item"],renderAppender:!!(i&&d||m&&!g)&&Rt.DefaultAppender})))),Object(r.createElement)(_t,X()({},e,{insertPlainMenuItem:p})))})),Ut=wp.blocks.registerBlockType,qt=wp.i18n.__;Ut(mt.name,{title:qt("Plain Menu Item","getwid-megamenu"),icon:"admin-links",category:mt.category,parent:mt.parent,attributes:mt.attributes,supports:mt.supports,edit:Gt,save:function(){return Object(r.createElement)(dt.Content,null)}});n(14),n(15)}]);