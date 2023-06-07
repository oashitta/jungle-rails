"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58],{57924:function(e,n,a){a.d(n,{u:function(){return c}});var r=a(4337),s=a(35250),t=a(15838),i=a(19841);a(70079);var l=a(34303);function o(){var e=(0,r._)(["relative top-[-3px] h-2 w-2 rotate-45 transform border-r border-b border-black/10 bg-gray-900 shadow-xs"]);return o=function(){return e},e}var c=function(e){var n=e.label,a=e.side,r=e.sideOffset,l=e.withArrow,o=e.wide,c=e.interactive,u=e.usePortal,p=e.className,m=e.children,h=e.delayDuration,x=e.closeOnOutsideClick,f=(0,s.jsxs)(t.VY,{onPointerDownOutside:void 0===x||x?void 0:function(e){return e.preventDefault()},side:void 0===a?"bottom":a,sideOffset:void 0===r?14:r,className:(0,i.Z)("relative rounded-lg border border-black/10 bg-gray-900 p-1 shadow-xs transition-opacity",void 0!==o&&o?"max-w-sm":"max-w-xs"),children:[(0,s.jsx)("span",{className:"flex items-center whitespace-pre-wrap px-2 py-1 text-center text-sm font-medium normal-case text-white",children:n}),(void 0===l||l)&&(0,s.jsx)(t.Eh,{asChild:!0,children:(0,s.jsx)(d,{})})]});return(0,s.jsxs)(t.fC,{delayDuration:void 0===h?300:h,disableHoverableContent:!(void 0!==c&&c),children:[(0,s.jsx)(t.xz,{asChild:!0,children:(0,s.jsx)("span",{className:p,children:m})}),void 0===u||u?(0,s.jsx)(t.h_,{children:f}):f]})},d=l.Z.div(o())},48432:function(e,n,a){a.d(n,{Z:function(){return w}});var r=a(21722),s=a(22830),t=a(39889),i=a(35250),l=a(16578),o=a.n(l),c=a(68555),d=a(70079),u=a(1454),p=a(82841),m=a(36218),h=a(24274),x=a(64135),f=a(97688),b=a(44925),v=a(74853),g=a(99652),y=a(1220);function w(e){var n=e.isOpen,a=e.onClose,l=(0,x.hz)(),w=(0,p.WS)(),j=(0,s._)((0,d.useState)(!1),2),N=j[0],k=j[1],C=(0,c.useRouter)(),_=(0,d.useCallback)(function(){w(m.s6.closeAccountPaymentModal),a()},[a,w]),P=(0,d.useCallback)((0,r._)(function(){var e;return(0,t.Jh)(this,function(n){switch(n.label){case 0:k(!0),w(m.s6.clickAccountPaymentCheckout),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,h.ZP.getCheckoutLink()];case 2:return e=n.sent(),C.push(e.url),[3,5];case 3:return n.sent(),f.m.warning("The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",{hasCloseButton:!0}),[3,5];case 4:return k(!1),[7];case 5:return[2]}})}),[C,w,k]),A=(0,d.useCallback)((0,r._)(function(){var e;return(0,t.Jh)(this,function(n){switch(n.label){case 0:k(!0),w(m.s6.clickAccountCustomerPortal),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,h.ZP.fetchCustomerPortalUrl()];case 2:return e=n.sent(),C.push(e.url),[3,5];case 3:return n.sent(),f.m.warning("The account management page encountered an error. Please try again. If the problem continues, please visit help.openai.com.",{hasCloseButton:!0}),[3,5];case 4:return k(!1),[7];case 5:return[2]}})}),[C,w,k]),S=(0,d.useCallback)(function(){w(m.s6.clickAccountPaymentGetHelp)},[w]),Z=(0,x.YD)(),T=l.has("disable_upgrade_ui");return(0,i.jsxs)(v.x,{isOpen:n,onClose:a,children:[(0,i.jsxs)("div",{className:"flex w-full flex-row items-center justify-between border-b px-4 py-3 dark:border-gray-700",children:[(0,i.jsx)("span",{className:"text-base font-semibold sm:text-base",children:"Your plan"}),(0,i.jsx)("button",{className:"text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",onClick:_,children:(0,i.jsx)(u.q5L,{className:"h-6 w-6"})})]}),(0,i.jsxs)("div",{className:"grid sm:grid-cols-2",children:[(0,i.jsx)("div",{className:"relative order-2 col-span-1 border-r-0 border-t dark:border-gray-700 sm:order-1 sm:border-r sm:border-t-0",children:(0,i.jsx)(g.Oi,{rowElements:[(0,i.jsx)(g.Cu,{text:"Free plan"},"row-free-plan-name"),(0,i.jsx)(g.hi,{variant:"disabled",disabled:!0,text:y.S.free.callToAction.active},"row-free-plan-button"),(0,i.jsx)(g.G,{variant:"secondary",text:y.S.free.demandAccess},"row-free-plan-demand"),(0,i.jsx)(g.G,{variant:"secondary",text:y.S.free.responseSpeed},"row-free-plan-speed"),(0,i.jsx)(g.G,{className:"sm:pb-2",variant:"secondary",text:y.S.free.modelFeatures},"row-free-plan-updates")]})}),(0,i.jsx)("div",{className:"relative order-1 col-span-1 sm:order-2",children:(0,i.jsx)(g.Oi,{rowElements:[(0,i.jsx)(g.Cu,{text:y.S.plus.name,children:(0,i.jsx)("span",{className:"font-semibold text-gray-500",children:y.S.plus.costInDollars})},"row-plus-plan-title"),(0,i.jsx)(g.hi,{variant:"primary",disabledText:T?"Due to high demand, we've temporarily paused upgrades.":"",disabled:N,isLoading:N,onClick:P,text:y.S.plus.callToAction.inactivePayment},"row-plus-plan-button"),(0,i.jsx)(g.G,{variant:"primary",text:y.S.plus.demandAccess},"row-plus-plan-demand"),(0,i.jsx)(g.G,{variant:"primary",text:y.S.plus.responseSpeed},"row-plus-plan-speed"),(0,i.jsx)(g.G,{className:"sm:pb-2",variant:"primary",text:y.S.plus.modelFeatures},"row-plus-plan-updates"),Z&&(0,i.jsx)(g.nR,{className:"sm:pb-1",isLoading:N,text:y.S.manageSubscriptionWeb.callToAction,onClick:A},"row-plus-plan-manage"),(0,i.jsx)(o(),{target:"_blank",href:b.ti,passHref:!0,children:(0,i.jsx)(g.nR,{className:"sm:pb-1",isLoading:!1,text:y.S.getHelp.callToAction,onClick:S},"row-plus-plan-help")},"row-plus-plan-help-link")]})})]})]})}},74853:function(e,n,a){a.d(n,{x:function(){return o}});var r=a(4337),s=a(35250),t=a(34303),i=a(88040);function l(){var e=(0,r._)(["flex grow justify-center bg-white dark:bg-gray-900 rounded-md flex-col items-start overflow-hidden border shadow-md dark:border-gray-700"]);return l=function(){return e},e}var o=function(e){var n=e.children,a=e.isOpen,r=e.onClose;return(0,s.jsx)(i.Z,{size:"fullscreen",isOpen:a,onModalClose:r,type:"success",className:"md:w-[672px] lg:w-[896px] xl:w-[1024px]",children:(0,s.jsx)("div",{className:"flex h-full flex-col items-center justify-start",children:(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)(c,{children:n})})})})},c=t.Z.div(l())},99652:function(e,n,a){a.d(n,{Cu:function(){return f},G:function(){return g},Oi:function(){return x},hi:function(){return v},nR:function(){return y}});var r=a(4337),s=a(35250),t=a(19841),i=a(70079),l=a(1454),o=a(34303),c=a(66958),d=a(38317),u=a(57924);function p(){var e=(0,r._)(["p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900"]);return p=function(){return e},e}function m(){var e=(0,r._)(["gap-2 flex flex-row justify-start items-center text-sm"]);return m=function(){return e},e}function h(){var e=(0,r._)(["text-xl font-semibold justify-between items-center flex"]);return h=function(){return e},e}var x=function(e){var n=e.rowElements;return(0,s.jsx)(w,{children:n.map(function(e){return e})})},f=function(e){var n=e.className,a=e.text,r=e.children;return(0,s.jsxs)(N,{className:n,children:[(0,s.jsx)("span",{children:a}),r]})},b={"primary-disabled":"border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",primary:"border-none py-3 font-semibold",disabled:"dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100"},v=(0,i.forwardRef)(function(e,n){var a=e.isLoading,r=void 0!==a&&a,i=e.disabled,o=e.onClick,p=e.variant,m=void 0===p?"primary":p,h=e.text,x=e.disabledText;return x?(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)(u.u,{side:"bottom",sideOffset:20,label:x,usePortal:!1,children:(0,s.jsxs)(c.z,{ref:n,as:"button",color:"disabled",className:(0,t.Z)("w-full",b[m]),children:[h,r&&(0,s.jsx)(d.ZP,{className:"animate-spin",icon:l.dAq})]})})}):(0,s.jsxs)(c.z,{disabled:void 0!==i&&i,onClick:o,ref:n,as:"button",className:(0,t.Z)(b[m]),children:[(0,s.jsx)("span",{className:(0,t.Z)("inline-block",{"text-gray-700":"primary-disabled"===m,"text-white":"primary"===m}),children:h}),r&&(0,s.jsx)(d.ZP,{className:"animate-spin",icon:l.dAq})]})});v.displayName="PricingPlanButton";var g=function(e){var n=e.variant,a=void 0===n?"primary":n,r=e.className,i=e.text;return(0,s.jsxs)(j,{className:r,children:[(0,s.jsx)(d.ZP,{icon:l._rq,className:(0,t.Z)("h-5 w-5",{"text-green-700":"primary"==a,"text-gray-400":"secondary"==a})}),(0,s.jsx)("span",{children:i})]})},y=function(e){var n=e.className,a=e.text,r=e.isLoading,t=e.onClick;return(0,s.jsx)(j,{className:n,children:(0,s.jsxs)("button",{onClick:t,className:"flex flex-row items-center space-x-1 underline",children:[(0,s.jsx)("span",{children:a}),r&&(0,s.jsx)(d.ZP,{className:"animate-spin",icon:l.dAq})]})})},w=o.Z.div(p()),j=o.Z.div(m()),N=o.Z.div(h())},44925:function(e,n,a){a.d(n,{_4:function(){return t},m1:function(){return s},ti:function(){return r}});var r="https://help.openai.com/en/collections/3943089-billing",s="https://help.openai.com/en/articles/7905690-how-do-i-cancel-my-apple-subscription-for-chatgpt-plus-in-the-chatgpt-ios-app",t={WEBAPP:"chatgpt_web",MOBILE_IOS:"chatgpt_mobile_ios",GRANTED:"chatgpt_gratis_recepient",NOT_PURCHASED:"chatgpt_not_purchased"}},1220:function(e,n,a){a.d(n,{S:function(){return r}});var r={free:{name:"Free plan",callToAction:{active:"Your current plan",inactive:"Your current plan"},costInDollars:"",demandAccess:"Available when demand is low",responseSpeed:"Standard response speed",modelFeatures:"Regular model updates"},plus:{name:"ChatGPT Plus",callToAction:{active:"Your current plan",inactive:"I'm interested",inactivePayment:"Upgrade plan"},costInDollars:"USD $20/mo",demandAccess:"Available even when demand is high",responseSpeed:"Faster response speed",modelFeatures:"Priority access to new features"},manageSubscriptionWeb:{callToAction:"Manage my subscription"},manageSubscriptionIos:{callToAction:"Manage my subscription in the ChatGPT iOS app"},getHelp:{callToAction:"I need help with a billing issue"},business:{callToAction:"Buy for my team"}}},87316:function(e,n,a){a.d(n,{g:function(){return o}});var r=a(96237),s=a(39324),t=a(71209),i=a(81292),l={flags:{isUserInCanPayGroup:!1,failwhaleBypassEnabled:!1,sharingEnabled:!1,messageRedesign:!1}},o=(0,i.ZP)()(function(e,n){return(0,t._)((0,s._)({},l),{updateFlagValue:function(a,i){var l=n().flags;e({flags:(0,t._)((0,s._)({},l),(0,r._)({},a,i))})}})})}}]);