(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09e83f35"],{"0d5f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"backpage backpage-orders"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.orders,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.created.datetime))]),e("td",[e("ul",t._l(a.products,(function(a,s){return e("li",{key:s+1},[t._v(" "+t._s(a.product.title)+" - "+t._s(a.quantity)+" 人 ")])})),0)]),e("td",[t._v(t._s(a.payment))]),e("td",[t._v(t._s(a.amount))]),e("td",[e("label",{staticClass:"switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.paid,expression:"item.paid"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.paid)?t._i(a.paid,null)>-1:a.paid},on:{change:[function(e){var s=a.paid,i=e.target,n=!!i.checked;if(Array.isArray(s)){var c=null,r=t._i(s,c);i.checked?r<0&&t.$set(a,"paid",s.concat([c])):r>-1&&t.$set(a,"paid",s.slice(0,r).concat(s.slice(r+1)))}else t.$set(a,"paid",n)},function(e){return t.setPaidStatus(a)}]}}),e("span",{staticClass:"slider round"})])])])})),0)])]),e("Pagination",{attrs:{pages:t.pagination},on:{emitpage:t.getOrders}})],1)])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("下單時間")]),e("th",{attrs:{scope:"col"}},[t._v("商品")]),e("th",{attrs:{scope:"col"}},[t._v("付款方式")]),e("th",{attrs:{scope:"col"}},[t._v("應付金額")]),e("th",{attrs:{scope:"col"}},[t._v("是否付款")])])])}],n=(e("99af"),e("1799")),c={components:{Pagination:n["a"]},data:function(){return{isLoading:!1,pagination:{},orders:[]}},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("27645507-6c88-4d1b-816f-1587210ac2be","/admin/ec/orders?page=").concat(a);this.$http.get(e).then((function(a){t.isLoading=!1,t.pagination=a.data.meta.pagination,t.orders=a.data.data})).catch((function(a){t.isLoading=!1,console.log(a)}))},setPaidStatus:function(t){var a=this,e="".concat("https://course-ec-api.hexschool.io/api","/").concat("27645507-6c88-4d1b-816f-1587210ac2be","/admin/ec/orders/").concat(t.id,"/paid");t.paid||(e="".concat("https://course-ec-api.hexschool.io/api","/").concat("27645507-6c88-4d1b-816f-1587210ac2be","/admin/ec/orders/").concat(t.id,"/unpaid")),this.$http.patch(e,t.id).then((function(){a.$bus.$emit("msg:push","付款狀態已修改囉","success"),a.getOrders()}))}},created:function(){this.getOrders()}},r=c,o=e("2877"),p=Object(o["a"])(r,s,i,!1,null,null,null);a["default"]=p.exports},1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination mx-auto"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.pageUpdate(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a){return e("li",{key:a.current_page,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.pageUpdate(a)}}},[t._v(" "+t._s(a)+" ")])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.pageUpdate(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},i=[],n={props:["pages"],methods:{pageUpdate:function(t){this.$emit("emitpage",t)}}},c=n,r=(e("fcd6"),e("2877")),o=Object(r["a"])(c,s,i,!1,null,"621de486",null);a["a"]=o.exports},"7e87":function(t,a,e){},fcd6:function(t,a,e){"use strict";var s=e("7e87"),i=e.n(s);i.a}}]);
//# sourceMappingURL=chunk-09e83f35.bf1563ca.js.map