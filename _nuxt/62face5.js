(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{315:function(e,t,r){var content=r(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(75).default)("62d6e664",content,!0,{sourceMap:!1})},317:function(e,t,r){var content=r(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(75).default)("2d0742ad",content,!0,{sourceMap:!1})},318:function(e,t,r){"use strict";r(315)},319:function(e,t,r){var o=r(74)(!1);o.push([e.i,'.logo[data-v-49e31973]{width:100%;height:0;position:-webkit-sticky;position:sticky;align-self:flex-start;top:2rem;font-size:3.25rem;font-family:"Nova-Regular",sans-serif;line-height:1em;padding-bottom:100%;border:1px solid;border-radius:50%;background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center}@media (max-width:767px){.logo[data-v-49e31973]{width:100%;height:auto;top:0;border:0;border-bottom:1px solid;border-radius:0;padding:1rem 0 .5rem}}@media (max-width:480px){.logo[data-v-49e31973]{font-size:3rem;padding:.5rem 0}}.logo .logo-o[data-v-49e31973]{width:50%;top:50%;position:absolute;transform:translateY(-50%)}@media (max-width:767px){.logo .logo-o[data-v-49e31973]{display:none}}@media (min-width:767px){.logo span[data-v-49e31973]{display:none}}',""]),e.exports=o},320:function(e,t,r){var content=r(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(75).default)("d82ee350",content,!0,{sourceMap:!1})},321:function(e,t,r){var content=r(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(75).default)("70b18b10",content,!0,{sourceMap:!1})},322:function(e,t,r){var content=r(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(75).default)("1a1e5a40",content,!0,{sourceMap:!1})},323:function(e,t,r){"use strict";var o={name:"LetterSVG"},n=r(45),d={name:"LogoCircle",components:{LetterSVG:Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"logo-o",staticStyle:{"enable-background":"new 0 0 250 295.7"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 250 295.7","xml:space":"preserve"}},[t("g",[t("path",{attrs:{d:"M243.7,50.8c2,1.7,3.5,4.1,4.7,7.2c1.1,3.1,1.7,5.8,1.7,8v141.3c0,2.3-0.6,4.9-1.7,8c-1.1,3.1-2.7,5.5-4.7,7.2l-66.8,66.8\n  \t\tc-1.7,1.7-4,3.2-7,4.4c-3,1.3-5.7,1.9-8.2,1.9H88.8c-2.5,0-5.4-0.6-8.5-1.9c-3.1-1.3-5.5-2.7-7.2-4.4L6.3,222.5\n  \t\tc-1.7-1.7-3.2-4.1-4.4-7.2c-1.3-3.1-1.9-5.8-1.9-8V66c0-2.3,0.6-4.9,1.9-8c1.3-3.1,2.7-5.5,4.4-7.2l44-44c2-2,4.4-3.6,7.4-4.9\n  \t\tC60.7,0.6,63.5,0,66,0h118c2.5,0,5.4,0.6,8.5,1.9c3.1,1.3,5.5,2.9,7.2,4.9L243.7,50.8z M227.6,49.1c0-3.1-0.8-6.2-2.3-9.3\n  \t\tc-1.6-3.1-3.6-5.9-6.1-8.5c-2.5-2.5-5.4-4.6-8.5-6.1c-3.1-1.5-6.2-2.3-9.3-2.3H49.1c-6.5,0-12.5,2.7-18,8.2\n  \t\tc-5.5,5.5-8.2,11.5-8.2,18v175.1c0,2.5,0.6,5.3,1.9,8.2c1.3,3,2.8,5.4,4.4,7.4l27.1,26.6c1.7,2,4.1,3.6,7.2,4.9\n  \t\tc3.1,1.3,5.8,1.9,8,1.9h107c2.5,0,5.3-0.6,8.2-1.9c3-1.3,5.4-2.9,7.4-4.9l26.6-26.6c2-2,3.6-4.4,4.9-7.4c1.3-3,1.9-5.7,1.9-8.2\n  \t\tV49.1z"}})])])}),[],!1,null,"5f49f322",null).exports}},c=(r(318),Object(n.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[r("LetterSVG"),e._v(" "),r("span",[e._v("oneacre.online")])],1)}),[],!1,null,"49e31973",null));t.a=c.exports},324:function(e,t,r){"use strict";var o={props:{product:{type:Object,required:!0}},methods:{addShopItem:function(e){this.$store.commit("addShopItem",this.product),this.$router.push({path:"/more/payment"})}}},n=(r(325),r(45)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shop-purchase"},[r("p",[e._v("Price")]),e._v(" "),r("p",{staticClass:"price"},[e._v("€"+e._s(e.product.price))]),e._v(" "),r("div",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.addShopItem(t)}}},[e._v("Purchase")])])}),[],!1,null,"9f88a802",null);t.a=component.exports},325:function(e,t,r){"use strict";r(317)},326:function(e,t,r){var o=r(74)(!1);o.push([e.i,'.shop-purchase[data-v-9f88a802]{border-top:1px solid;padding-top:.75rem;margin-top:4rem;display:flex;justify-content:space-between;flex-wrap:wrap}@media (max-width:767px){.shop-purchase[data-v-9f88a802]{width:100%;position:fixed;left:50%;bottom:0;transform:translateX(-50%);padding:1rem 2rem 2rem;border-top:0;background:#fff}}@media (max-width:767px) and (max-width:480px){.shop-purchase[data-v-9f88a802]{padding:1rem 1rem 2rem}}@media (max-width:767px){.shop-purchase[data-v-9f88a802]:before{content:"";width:calc(100% - 4rem);height:1px;background:#1a1a1a;position:absolute;top:0}}@media (max-width:767px) and (max-width:480px){.shop-purchase[data-v-9f88a802]:before{width:calc(100% - 2rem)}}.shop-purchase p[data-v-9f88a802]{color:rgba(26,26,26,.4);font-size:1.375rem}.shop-purchase p.price[data-v-9f88a802]{color:#1a1a1a}.shop-purchase .button[data-v-9f88a802]{width:100%;padding:1rem 1.5rem .875rem;line-height:1em;text-transform:uppercase;color:#fff;background:#1a1a1a;letter-spacing:2px;border-radius:.375rem;margin-top:2rem;cursor:pointer;display:flex;align-items:center;justify-content:center}@media (max-width:767px){.shop-purchase .button[data-v-9f88a802]{margin-top:1.5rem}}@media (max-width:480px){.shop-purchase .button[data-v-9f88a802]{margin-top:1rem}}',""]),e.exports=o},329:function(e,t,r){"use strict";r(320)},330:function(e,t,r){var o=r(74)(!1);o.push([e.i,".product-description[data-v-109e6c90]{font-size:2rem;line-height:1.25em}@media (max-width:1200px){.product-description[data-v-109e6c90]{font-size:1.75rem}}@media (max-width:992px){.product-description[data-v-109e6c90]{font-size:1.75rem}}@media (max-width:480px){.product-description[data-v-109e6c90]{font-size:1.5rem;line-height:1.375em}}.product-description p[data-v-109e6c90]:not(:last-child){margin-bottom:1.25em}",""]),e.exports=o},331:function(e,t,r){"use strict";r(321)},332:function(e,t,r){var o=r(74)(!1);o.push([e.i,".product-images .image-content[data-v-14d1e1b9]{display:grid;grid-auto-rows:auto;grid-gap:1rem}.product-images .image-content.portrait[data-v-14d1e1b9]{grid-template-columns:1fr 1fr}@media (max-width:767px){.product-images .image-content.portrait[data-v-14d1e1b9]{grid-template-columns:1fr}}.product-images figure[data-v-14d1e1b9]{width:100%;margin:0;background:#d9d9d9}.product-images figure[data-v-14d1e1b9]:nth-of-type(2n){justify-self:flex-end}.product-images figure img[data-v-14d1e1b9]{width:100%;display:block}",""]),e.exports=o},333:function(e,t,r){"use strict";r(322)},334:function(e,t,r){var o=r(74)(!1);o.push([e.i,".product-specs .info-section[data-v-4d31ac2a]{font-size:1.375rem;display:grid;grid-template-columns:1fr 1fr;grid-gap:0 1.5rem;list-style:none;padding:0;margin:0;align-items:flex-end}@media (max-width:992px){.product-specs .info-section[data-v-4d31ac2a]{font-size:1.25rem}}@media (max-width:767px){.product-specs .info-section[data-v-4d31ac2a]{grid-template-columns:1fr;grid-gap:1.5rem}}.product-specs .info-section li[data-v-4d31ac2a]{padding:2rem 0 .25rem;border-bottom:1px solid #d9d9d9}@media (max-width:767px){.product-specs .info-section li[data-v-4d31ac2a]{padding:0 0 .25rem}}.product-specs .info-section li p[data-v-4d31ac2a]:first-of-type{color:rgba(26,26,26,.5)}",""]),e.exports=o},337:function(e,t,r){"use strict";var o={name:"ProductDescription"},n=(r(329),r(45)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("section",{staticClass:"product-description"},[e._t("default")],2)}),[],!1,null,"109e6c90",null);t.a=component.exports},338:function(e,t,r){"use strict";var o={name:"ProductImages"},n=(r(331),r(45)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("section",{staticClass:"product-images"},[e._t("default")],2)}),[],!1,null,"14d1e1b9",null);t.a=component.exports},339:function(e,t,r){"use strict";var o={name:"ProductSpecs"},n=(r(333),r(45)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("section",{staticClass:"product-specs"},[e._t("default")],2)}),[],!1,null,"4d31ac2a",null);t.a=component.exports},401:function(e,t,r){var content=r(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(75).default)("458f43f0",content,!0,{sourceMap:!1})},480:function(e,t,r){e.exports=r.p+"img/CathleenOwens_01.c41c972.jpg"},481:function(e,t,r){e.exports=r.p+"img/CathleenOwens_02.5f4dcb0.jpg"},482:function(e,t,r){e.exports=r.p+"img/CathleenOwens_03.1f89b61.jpg"},483:function(e,t,r){e.exports=r.p+"img/CathleenOwens_04.d4e740e.jpg"},484:function(e,t,r){"use strict";r(401)},485:function(e,t,r){var o=r(74)(!1);o.push([e.i,'.shop-wrapper[data-v-f9afdc2e]{width:100%;max-width:1600px;padding:2rem 2rem 4rem;margin:0 auto;display:grid;grid-template-columns:fit-content(15rem) fit-content(80rem);grid-gap:4rem;align-items:flex-start;justify-content:center}@media (max-width:1200px){.shop-wrapper[data-v-f9afdc2e]{grid-gap:3rem}}@media (max-width:992px){.shop-wrapper[data-v-f9afdc2e]{grid-template-columns:fit-content(12.5rem) fit-content(80rem)}}@media (max-width:767px){.shop-wrapper[data-v-f9afdc2e]{grid-template-columns:1fr;padding:0 2rem 10rem}}@media (max-width:480px){.shop-wrapper[data-v-f9afdc2e]{padding:0 1rem 10rem}}.shop-wrapper .shop-side[data-v-f9afdc2e]{height:calc(100vh - 2rem);position:-webkit-sticky;position:sticky;display:flex;flex-direction:column;justify-content:space-between;top:2rem;padding:0 0 2rem}@media (max-width:767px){.shop-wrapper .shop-side[data-v-f9afdc2e]{top:0;height:auto}}.shop-wrapper .shop-side .shop-purchase[data-v-f9afdc2e]{border-top:1px solid;padding-top:.75rem;margin-top:4rem;display:flex;justify-content:space-between;flex-wrap:wrap}@media (max-width:767px){.shop-wrapper .shop-side .shop-purchase[data-v-f9afdc2e]{width:100%;position:fixed;left:50%;bottom:0;transform:translateX(-50%);padding:1rem 2rem 2rem;border-top:0;background:#fff}}@media (max-width:767px) and (max-width:480px){.shop-wrapper .shop-side .shop-purchase[data-v-f9afdc2e]{padding:1rem 1rem 2rem}}@media (max-width:767px){.shop-wrapper .shop-side .shop-purchase[data-v-f9afdc2e]:before{content:"";width:calc(100% - 4rem);height:1px;background:#1a1a1a;position:absolute;top:0}}@media (max-width:767px) and (max-width:480px){.shop-wrapper .shop-side .shop-purchase[data-v-f9afdc2e]:before{width:calc(100% - 2rem)}}.shop-wrapper .shop-side .shop-purchase p[data-v-f9afdc2e]{color:rgba(26,26,26,.4);font-size:1.375rem}.shop-wrapper .shop-side .shop-purchase p.price[data-v-f9afdc2e]{color:#1a1a1a}.shop-wrapper .shop-side .shop-purchase a[data-v-f9afdc2e]{width:100%;padding:1rem 1.5rem .875rem;line-height:1em;text-transform:uppercase;color:#fff;background:#1a1a1a;letter-spacing:2px;border-radius:.375rem;margin-top:2rem;display:flex;align-items:center;justify-content:center}@media (max-width:767px){.shop-wrapper .shop-side .shop-purchase a[data-v-f9afdc2e]{margin-top:1.5rem}}@media (max-width:480px){.shop-wrapper .shop-side .shop-purchase a[data-v-f9afdc2e]{margin-top:1rem}}.shop-wrapper .product[data-v-f9afdc2e]{display:grid;grid-auto-rows:auto;grid-gap:6rem;padding-top:1rem;border-top:1px solid}@media (max-width:767px){.shop-wrapper .product[data-v-f9afdc2e]{border-top:0;padding-top:15vh;grid-gap:4rem}}.shop-wrapper .product h1[data-v-f9afdc2e]{width:100%;font-size:6rem;font-family:"Nova-Regular",sans-serif;line-height:1em;padding-bottom:4rem;text-transform:lowercase;display:flex;flex-direction:column;flex-wrap:wrap;color:rgba(26,26,26,.25);margin:0}@media (max-width:1200px){.shop-wrapper .product h1[data-v-f9afdc2e]{font-size:5.5rem}}@media (max-width:992px){.shop-wrapper .product h1[data-v-f9afdc2e]{font-size:5rem}}@media (max-width:767px){.shop-wrapper .product h1[data-v-f9afdc2e]{padding-bottom:0}}@media (max-width:480px){.shop-wrapper .product h1[data-v-f9afdc2e]{font-size:4rem}}.shop-wrapper .product h1 span[data-v-f9afdc2e]{color:#1a1a1a}.shop-wrapper .product section[data-v-f9afdc2e]{border-top:1px solid;padding-top:.75rem;padding-bottom:2rem}.shop-wrapper .product section h4[data-v-f9afdc2e]{margin:0;font-size:1rem;line-height:1em;text-transform:uppercase;letter-spacing:2px;padding-bottom:2rem}@media (max-width:480px){.shop-wrapper .product section h4[data-v-f9afdc2e]{padding-bottom:2.5rem}}',""]),e.exports=o},532:function(e,t,r){"use strict";r.r(t);var o=r(323),n=r(337),d=r(338),c=r(339),m=r(324),l={components:{ProductDescription:n.a,ProductImages:d.a,ProductSpecs:c.a,LogoCircle:o.a,PurchaseButton:m.a},data:function(){return{product:{name:"When an art institution",price:10,quantity:1}}}},f=(r(484),r(45)),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"shop-wrapper"},[o("div",{staticClass:"shop-side"},[o("LogoCircle"),e._v(" "),o("PurchaseButton",{attrs:{product:e.product}})],1),e._v(" "),o("div",{staticClass:"product"},[e._m(0),e._v(" "),o("ProductDescription",[o("h4",[e._v("Description")]),e._v(" "),o("p",[e._v("\n        Upon the occasion of her upcoming publication When an Art\n        Institution Asks You to Fill Out an Application, You Do It , artist\n        Cathleen Ownes has handcrafted a limited series of tote bags for\n        oneacre.online. Gently grounded in the personal experience of a\n        subject aware of herself caught in a system of representations and\n        networks of value. When an Art Institution Asks You to Fill Out an\n        Application, You Do It is a detail oriented performative publication\n        experiment, critically engaged with systems of representation and\n        networks of value that enjoys working in teams but achieves more when\n        working alone.\n      ")])]),e._v(" "),o("ProductImages",[o("h4",[e._v("Images")]),e._v(" "),o("div",{staticClass:"image-content portrait"},[o("figure",[o("img",{attrs:{src:r(480)}})]),e._v(" "),o("figure",[o("img",{attrs:{src:r(481)}})]),e._v(" "),o("figure",[o("img",{attrs:{src:r(482)}})]),e._v(" "),o("figure",[o("img",{attrs:{src:r(483)}})])])]),e._v(" "),o("ProductSpecs",[o("h4",[e._v("Information")]),e._v(" "),o("ul",{staticClass:"info-section"},[o("li",[o("p",[e._v("Title")]),e._v(" "),o("p",[e._v("\n            When an Art Institution Asks You to Fill Out an Application, You\n            Do It\n          ")])]),e._v(" "),o("li",[o("p",[e._v("Creator")]),e._v(" "),o("p",[e._v("Cathleen Owens")])]),e._v(" "),o("li",[o("p",[e._v("Size")]),e._v(" "),o("p",[e._v("40 x 38 cm 10 liter")])]),e._v(" "),o("li",[o("p",[e._v("Size")]),e._v(" "),o("p",[e._v("140 g/m2 100% katoen with vinyl print")])]),e._v(" "),o("li",[o("p",[e._v("Price")]),e._v(" "),o("p",[e._v("€10 + VAT + Shipping")])])])])],1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("More by "),r("span",[e._v("Cathleen Owens")])])}],!1,null,"f9afdc2e",null);t.default=component.exports}}]);