(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{284:function(e,t,o){"use strict";e.exports=e=>{if("string"!=typeof e)throw new TypeError("Expected a string");try{return new URL(e),!0}catch{return!1}}},285:function(e,t,o){var content=o(288);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(63).default)("3464a4be",content,!0,{sourceMap:!1})},287:function(e,t,o){"use strict";o(285)},288:function(e,t,o){(t=o(62)(!1)).push([e.i,'.oa_payment_wrapper[data-v-a4a6e4de]{width:100%;max-width:800px;border:1px solid var(--font-color);box-sizing:border-box;font-size:24px;font-family:"NEXTBook-Regular",sans-serif;text-align:center;margin:50px auto;color:var(--font-color);background-color:var(--bg-color);position:relative}.oa_payment_wrapper a[data-v-a4a6e4de]{color:var(--primary);font-weight:700}.oa_p_label[data-v-a4a6e4de]{padding:15px;border-bottom:1px solid var(--font-color)}.oa_p_content[data-v-a4a6e4de]{padding:30px 30px 35px;font-size:19px;font-family:"NEXTBook-Regular",serif;line-height:1.35em;text-align:left}.oa_p_content[data-v-a4a6e4de]:after{content:" ";display:block;height:0;clear:both}.oa_left[data-v-a4a6e4de]{width:50%;padding-right:30px;float:left}.oa_left img[data-v-a4a6e4de]{width:100%;display:block}.oa_right[data-v-a4a6e4de]{width:50%;float:right;padding-left:30px;border-left:1px solid var(--primary)}.oa_mid[data-v-a4a6e4de]{width:100%;margin:0 auto}.oa_small_font[data-v-a4a6e4de]{font-size:14px;line-height:18px}.oa_p_content form[data-v-a4a6e4de]{margin:0}.oa_p_content .oa_input[data-v-a4a6e4de]{width:100%;padding:5px 10px;margin-top:20px;font-family:"Alverata-Regular",sans-serif;height:30px;font-size:16px;color:var(--font-color);border:1px solid var(--font-color);background-color:var(--bg-color);box-sizing:border-box}.oa_p_content .oa_input[data-v-a4a6e4de]:placeholder{color:rgba(25,25,25,.4)}.oa_p_content #oa_submit[data-v-a4a6e4de]{border:1px solid var(--primary);background-color:var(--primary);color:var(--bg-color);height:35px;cursor:pointer;transition:.15s;line-height:1.1em;box-shadow:inset 0 -2px 0 rgba(0,0,0,.1)}.oa_p_content #oa_submit[data-v-a4a6e4de]:hover{box-shadow:none}.horizontal_slider[data-v-a4a6e4de]{margin:20px 0 15px;background-color:var(--font-color);color:var(--bg-color);padding:10px 0;width:100%;outline:none}.horizontal_slider[data-v-a4a6e4de]:focus{outline:none}.horizontal_slider[type=range][data-v-a4a6e4de]::-moz-focus-outer{border:0}.horizontal_slider[type=range][data-v-a4a6e4de]{-webkit-appearance:none;width:100%;background:transparent;outline:none}.horizontal_slider[type=range][data-v-a4a6e4de]::-webkit-slider-thumb{-webkit-appearance:none;border:1px solid var(--font-color);height:25px;width:36px;background:var(--bg-color);border-radius:0;cursor:pointer;margin-top:-14px;outline:none}.horizontal_slider[type=range][data-v-a4a6e4de]::-moz-range-thumb{border:1px solid var(--font-color);height:25px;width:36px;border-radius:0;background:var(--bg-color);cursor:pointer;outline:none}.horizontal_slider[type=range][data-v-a4a6e4de]::-ms-thumb{border:1px solid var(--font-color);height:25px;width:36px;border-radius:0;background:var(--bg-color);cursor:pointer;outline:none}.horizontal_slider[type=range][data-v-a4a6e4de]:focus{outline:none}.horizontal_slider[type=range][data-v-a4a6e4de]::-webkit-slider-runnable-track{width:100%;height:1px;cursor:pointer;background:var(--font-color);outline:none}.horizontal_slider[type=range][data-v-a4a6e4de]::-moz-range-track{width:100%;height:1px;cursor:pointer;background:var(--font-color);outline:none}.horizontal_slider[type=range][data-v-a4a6e4de]::-ms-track{width:100%;height:1px;cursor:pointer;background:transparent;border-color:transparent;border-width:16px 0;color:transparent;outline:none}@media only screen and (max-width:768px){body[data-v-a4a6e4de]{padding:0}.oa_payment_wrapper[data-v-a4a6e4de]{margin-top:0;font-size:24px}.oa_p_content[data-v-a4a6e4de]{font-size:16px;line-height:1.45em;padding:20px 15px}.oa_left[data-v-a4a6e4de]{float:none;text-align:center;position:relative;display:table;margin:auto auto 40px}.oa_left img[data-v-a4a6e4de]{max-width:350px}.oa_right[data-v-a4a6e4de]{float:none;max-width:none;padding-left:0;border-left:0}.oa_p_content[data-v-a4a6e4de]:after{clear:none;height:auto}}',""]),e.exports=t},291:function(e,t,o){"use strict";o(23),o(17);var n=o(3),r=o(284),l=o.n(r),d=o(86),c={props:{publication:{type:String,required:!0},artist:{type:Object,required:!0}},data:function(){return{payment_amount:99,name:"test stef",discountcode:void 0,email:"test@example.com",exlibris:void 0,path:Object(d.b)()}},methods:{checkForm:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={name:e.name,email:e.email,redirectUrl:e.path,exlibris:e.exlibris,payment_amount:e.payment_amount,publication:e.publication,discountcode:e.discountcode},t.next=3,e.$axios.$post("/shop/catalog/submit",o);case 3:if(n=t.sent,l()(n)){t.next=6;break}return t.abrupt("return",e.$router.push({path:e.path,query:{id:n}}));case 6:window.location=n;case 7:case"end":return t.stop()}}),t)})))()}}},h=(o(287),o(30)),component=Object(h.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"oa_payment_wrapper",attrs:{id:e.publication}},[o("div",{staticClass:"oa_p_label"},[e._v("order summary")]),e._v(" "),o("div",{staticClass:"oa_p_content"},[o("div",{staticClass:"oa_mid"},[o("span",[e._v("As the publications produced by oneacre.online exist only temporarily\n        on the website, oneacre.online offers the opportunity to preserve a\n        copy of the publication. By acquiring a permanent private link, the\n        publication remains accessible to you or whomever else you choose to\n        share the link with, past the 3 months for which the work will be\n        available at oneacre.online. The donation starting at 3 euros, will\n        support the creation of further unprintable publications as well as\n        the artists that fuel their content.")]),e._v(" "),o("form",{staticClass:"oa_mid",attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),e.checkForm(t)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"oa_input",attrs:{type:"text",name:"name",placeholder:"Name",required:"required"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"oa_input",attrs:{type:"email",name:"email",placeholder:"Email",required:"required"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.exlibris,expression:"exlibris"}],staticClass:"oa_input",attrs:{type:"exlibris",name:"exlibris",placeholder:"Ex Libris - optional"},domProps:{value:e.exlibris},on:{input:function(t){t.target.composing||(e.exlibris=t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.discountcode,expression:"discountcode"}],staticClass:"oa_input",attrs:{type:"discountcode",name:"discountcode",placeholder:"Cipher - if applicable "},domProps:{value:e.discountcode},on:{input:function(t){t.target.composing||(e.discountcode=t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.payment_amount,expression:"payment_amount"}],staticClass:"horizontal_slider",attrs:{type:"range",name:"payment_amount",min:"3",max:"100",id:"range_value"},domProps:{value:e.payment_amount},on:{__r:function(t){e.payment_amount=t.target.value}}}),e._v(" "),o("div",{attrs:{id:"show_value"}},[e._v("\n          Choose your price: € "),o("span",{attrs:{id:"value"}},[e._v(e._s(e.payment_amount))])]),e._v(" "),o("input",{staticClass:"oa_input",attrs:{type:"hidden",name:"publication"},domProps:{value:e.publication}}),e._v(" "),o("input",{staticClass:"oa_input",attrs:{id:"oa_submit",type:"submit",value:"Purchase"}})]),e._v(" "),e._m(0)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"oa_small_font"},[t("p",[t("br"),this._v("\n          Much like books, oneacre.online hopes that the acquired links will\n          be borrowed, lend, and shared, perhaps forgotten at a friend’s inbox\n          or messenger app to keep versions of the work alive and circulating\n          when the publication will be no longer be available at\n          oneacre.online.\n        ")]),this._v(" "),t("br"),this._v(" "),t("p",[this._v("\n          Ex Libris: is usually a small print or decorative label pasted into\n          a book, often on the inside front cover, to indicate its owner. Ex\n          Libris follow a similar function at oneacre.online, where a word,\n          sentence or phrase of your choice will be added in the url you\n          purchase to designated that the link is part of your collection. ex.\n          Ex Libris: possessive pronoun url containing Ex Libris:\n          http://oneacre.online/publication-one-possessive-pronoun-48010513293185144\n        ")]),this._v(" "),t("br"),this._v(" "),t("p",[this._v("\n          Cipher: magic word or code that gives a discount or a free copy.\n          Probably somebody told you about it.\n        ")])])}],!1,null,"a4a6e4de",null);t.a=component.exports},293:function(e,t,o){var content=o(294);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(63).default)("10d8cac4",content,!0,{sourceMap:!1})},294:function(e,t,o){(t=o(62)(!1)).push([e.i,".resize-observer[data-v-2b830392]{border:none;background-color:transparent;opacity:0}.resize-observer[data-v-2b830392],.resize-observer[data-v-2b830392] object{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;pointer-events:none;display:block;overflow:hidden}",""]),e.exports=t},304:function(e,t,o){var content=o(328);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(63).default)("7ce374e4",content,!0,{sourceMap:!1})},327:function(e,t,o){"use strict";o(304)},328:function(e,t,o){(t=o(62)(!1)).push([e.i,".sophieeline{--primary:#114526;--secondary:#fff;--bg-color:#fff;--font-color:#114526}#canvas{position:fixed;top:0}.resizer{position:relative;width:100vw;height:100vh}",""]),e.exports=t},353:function(e,t,o){"use strict";o.r(t);o(87),o(21),o(22),o(12),o(64);var n=o(48),r=o(291),l=(o(293),o(86));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=l.c.sophieeline,m={components:{Form:r.a},data:function(){return c(c({},h),{},{artist:h,description:"oneacre.online is an experimental publication project, of size exactly equal to the area of 1 chain by 1 furlong that aims to utilise the omnidirectional website space to seed works."})},head:function(){return{title:this.title,meta:Object(l.d)(this.title,this.description,this.image),bodyAttrs:{class:this.dir}}},mounted:function(){this.handleResize({width:4e3,height:4e3})},methods:{handleResize:function(e){var t=e.width,o=e.height;console.log("draw");var canvas=document.getElementById("canvas"),n=canvas.getContext("2d");canvas.width=t,canvas.height=o,n.fillStyle="rgba(17,69,38, 1)",this.drawBox(0,0,t,o),this.drawBox(0,0,t,o);for(var i=0;i<10;i++)this.drawBox(this.getRandomInt(-200,t-100),this.getRandomInt(-200,o-100),this.getRandomInt(200,300),this.getRandomInt(200,600))},drawBox:function(e,t,o,n){for(var r=document.getElementById("canvas").getContext("2d"),l=(o=e+o)*(n=t+n)/60,i=0;i<l;i++){var d=this.getRandomInt(e,o),c=this.getRandomInt(t,n);r.fillRect(d,c,1,1)}},getRandomInt:function(e,t){return Math.floor(e+Math.random()*(t-e))}}},v=(o(327),o(30)),component=Object(v.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrapper"},[t("canvas",{attrs:{id:"canvas"}}),this._v(" "),t("Form",{attrs:{publication:this.artist.dir,artist:this.artist}}),this._v(" "),t("resize-observer",{staticClass:"resizer",on:{notify:this.handleResize}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);