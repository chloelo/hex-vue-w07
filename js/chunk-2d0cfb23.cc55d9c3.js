(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfb23"],{"658f":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("h2",{staticClass:"mb-5"},[t._v(t._s(t.product.title))]),s("div",{staticClass:"img-wrap mb-3"},[s("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl[0],alt:""}})]),s("p",[t._v(t._s(t.product.content))]),s("p",[t._v(t._s(t.product.description))]),s("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[s("div",[s("del",[t._v("原價 "+t._s(t._f("money")(t.product.origin_price)))])]),s("div",{staticClass:"text-info"},[t._v(" 現在只要 "),s("span",{staticClass:"h4"},[t._v(t._s(t._f("money")(t.product.price)))])])]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.product.quantity,expression:"product.quantity"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.product,"quantity",a.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"0",disabled:"",selected:""}},[t._v("請選擇人數")]),t._l(10,(function(a){return s("option",{key:a,domProps:{value:a}},[t._v("選擇 "+t._s(a)+" 位")])}))],2),s("div",{staticClass:"d-flex justify-content-between align-items-center mt-3"},[t.product.quantity?s("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v(" 小計 "),s("strong",[t._v(t._s(t._f("money")(t.product.quantity*t.product.price||0)))]),t._v(" 元 ")]):t._e(),s("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(a){return t.addToCart(t.product.id,t.product.quantity)}}},[t.product.id===t.status.loadingItem?s("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):s("span",[s("i",{staticClass:"fas fa-shopping-cart"})]),t._v(" 加到購物車 ")])])],1)},n=[],e=(s("99af"),{data:function(){return{isLoading:!1,product:{imageUrl:[],quantity:1},status:{loadingItem:""}}},methods:{getProduct:function(){var t=this;this.isLoading=!0;var a=this.$route.params.id;this.$http.get("".concat("https://course-ec-api.hexschool.io/api","/").concat("27645507-6c88-4d1b-816f-1587210ac2be","/ec/product/").concat(a)).then((function(a){t.isLoading=!1,t.product=a.data.data,t.$set(t.product,"quantity",1)})).catch((function(a){t.isLoading=!1,console.log(a)}))},addToCart:function(t){var a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0,this.status.loadingItem=t;var i="".concat("https://course-ec-api.hexschool.io/api","/").concat("27645507-6c88-4d1b-816f-1587210ac2be","/ec/shopping"),n={product:t,quantity:s};this.$http.post(i,n).then((function(){a.isLoading=!1,a.status.loadingItem="",a.$bus.$emit("msg:push","商品成功加入購物車~","success"),a.$bus.$emit("get-cart")})).catch((function(t){a.isLoading=!1,a.status.loadingItem="",a.$bus.$emit("msg:push","登愣~~出現錯誤！ ".concat(t.response.data.errors[0]),"danger")}))}},created:function(){this.getProduct()}}),o=e,c=s("2877"),r=Object(c["a"])(o,i,n,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0cfb23.cc55d9c3.js.map