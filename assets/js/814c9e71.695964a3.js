"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25446],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52400:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],c={id:"core.flusheventargs",title:"Interface: FlushEventArgs",sidebar_label:"FlushEventArgs",custom_edit_url:null,hide_title:!0},s="Interface: FlushEventArgs",l={unversionedId:"api/interfaces/core.flusheventargs",id:"version-4.5/api/interfaces/core.flusheventargs",isDocsHomePage:!1,title:"Interface: FlushEventArgs",description:"core.FlushEventArgs",source:"@site/versioned_docs/version-4.5/api/interfaces/core.flusheventargs.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.flusheventargs",permalink:"/docs/api/interfaces/core.flusheventargs",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1638748856,formattedLastUpdatedAt:"12/6/2021",frontMatter:{id:"core.flusheventargs",title:"Interface: FlushEventArgs",sidebar_label:"FlushEventArgs",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"FlatQueryOrderMap",permalink:"/docs/api/interfaces/core.flatqueryordermap"},next:{title:"FormulaOptions",permalink:"/docs/api/interfaces/core.formulaoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"changeSet",id:"changeset",children:[],level:3},{value:"em",id:"em",children:[],level:3},{value:"uow",id:"uow",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface-flusheventargs"},"Interface: FlushEventArgs"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".FlushEventArgs"),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Omit"),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventargs"},(0,o.kt)("em",{parentName:"a"},"EventArgs")),"<unknown",">",", ",(0,o.kt)("em",{parentName:"p"},"entity"),">"),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},"FlushEventArgs")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"changeset"},"changeSet"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"changeSet"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.changeset"},(0,o.kt)("em",{parentName:"a"},"ChangeSet")),"<unknown",">"),(0,o.kt)("p",null,"Inherited from: void"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L9"},"packages/core/src/events/EventSubscriber.ts:9")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"em"},"em"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"em"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,o.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,o.kt)("p",null,"Inherited from: void"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L8"},"packages/core/src/events/EventSubscriber.ts:8")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"uow"},"uow"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"uow"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.unitofwork"},(0,o.kt)("em",{parentName:"a"},"UnitOfWork"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/events/EventSubscriber.ts#L13"},"packages/core/src/events/EventSubscriber.ts:13")))}m.isMDXComponent=!0}}]);