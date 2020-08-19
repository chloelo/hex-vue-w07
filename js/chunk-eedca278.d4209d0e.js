(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eedca278"],{1799:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination mx-auto"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.pageUpdate(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e.current_page,staticClass:"page-item",class:{active:e===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.pageUpdate(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.pageUpdate(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},s=[],i={props:["pages"],methods:{pageUpdate:function(t){this.$emit("emitpage",t)}}},r=i,c=(a("fcd6"),a("2877")),n=Object(c["a"])(r,o,s,!1,null,"621de486",null);e["a"]=n.exports},"372d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"backpage backpage-products"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"d-flex justify-content-end my-3"},[a("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){return t.openModal("new")}}},[t._v(" 建立新的產品 ")])]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e.category))]),a("td",[a("img",{staticClass:"sm-img",attrs:{src:e.imageUrl[0]}})]),a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.origin_price))]),a("td",[t._v(t._s(e.price))]),a("td",[a("label",{staticClass:"switch"},[a("input",{attrs:{type:"checkbox",disabled:""},domProps:{checked:e.enabled}}),a("span",{staticClass:"slider round"})])]),a("td",[a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[a("button",{staticClass:"btn btn-outline-info",attrs:{type:"button",disabled:t.btnLoading===e.id},on:{click:function(a){return t.openModal("edit",e)}}},[t._v(" 編輯 "),t.btnLoading===e.id?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e()]),a("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:function(a){return t.openModal("del",e)}}},[t._v(" 刪除 ")])])])])})),0)])]),a("ProductModal",{attrs:{"is-new":t.isNew,"temp-product":t.tempProduct},on:{update:t.getProducts}}),a("ProductModalDel",{attrs:{"temp-product":t.tempProduct},on:{update:t.getProducts}}),a("Pagination",{attrs:{pages:t.pagination},on:{emitpage:t.getProducts}})],1)])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("分類")]),a("th",{attrs:{scope:"col"}},[t._v("產品圖")]),a("th",{attrs:{scope:"col"}},[t._v("產品名稱")]),a("th",{attrs:{scope:"col"}},[t._v("原價")]),a("th",{attrs:{scope:"col"}},[t._v("售價")]),a("th",{attrs:{scope:"col"}},[t._v("是否啟用")]),a("th",{attrs:{scope:"col"}},[t._v("編輯")])])])}],i=(a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v(t._s(t.isNew?"新增產品":"修改產品資訊"))])]),t._m(0)]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[t._l(5,(function(e){return a("div",{key:"img"+e,staticClass:"form-group"},[a("label",{attrs:{for:"img"+e}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[e-1],expression:"tempProduct.imageUrl[idx - 1]"}],staticClass:"form-control",attrs:{id:"img"+e,type:"text",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl[e-1]},on:{input:function(a){a.target.composing||t.$set(t.tempProduct.imageUrl,e-1,a.target.value)}}})])})),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v(" 或 上傳圖片 "),t.imgUploading?a("span",[a("i",{staticClass:"fas fa-spinner fa-spin"})]):t._e()]),a("input",{staticClass:"form-control",attrs:{id:"customFile",type:"file"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.imageUrl[0]}})],2),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{id:"title",type:"text",placeholder:"請輸入標題",required:""},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{id:"category",type:"text",placeholder:"請輸入分類",required:""},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"unit"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{id:"unit",type:"text",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{id:"origin_price",type:"number",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{id:"price",type:"number",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品說明")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入產品說明",required:""},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{id:"content",type:"text",placeholder:"請輸入產品描述",required:""},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.enabled,expression:"tempProduct.enabled"}],staticClass:"form-check-input",attrs:{id:"enabled",type:"checkbox"},domProps:{checked:Array.isArray(t.tempProduct.enabled)?t._i(t.tempProduct.enabled,null)>-1:t.tempProduct.enabled},on:{change:function(e){var a=t.tempProduct.enabled,o=e.target,s=!!o.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);o.checked?r<0&&t.$set(t.tempProduct,"enabled",a.concat([i])):r>-1&&t.$set(t.tempProduct,"enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"enabled",s)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"enabled"}},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn bg-info text-white",attrs:{type:"button"},on:{click:function(e){return t.updateProduct()}}},[t._v("確認")])])])])])}),r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],c={props:["isNew","tempProduct"],data:function(){return{imgUploading:!1}},methods:{updateProduct:function(){var t=this,e="post",a="".concat("https://course-ec-api.hexschool.io/api","/").concat("27645507-6c88-4d1b-816f-1587210ac2be","/admin/ec/product"),o="新增成功囉，ya ~";this.isNew||(e="patch",a="".concat("https://course-ec-api.hexschool.io/api","/").concat("27645507-6c88-4d1b-816f-1587210ac2be","/admin/ec/product/").concat(this.tempProduct.id),o="更新成功囉，ya ~"),this.$http[e](a,this.tempProduct).then((function(){$("#productModal").modal("hide"),t.$bus.$emit("msg:push",o,"success"),t.$emit("update")})).catch((function(){$("#productModal").modal("hide"),t.$bus.$emit("msg:push","登愣~~出現錯誤了！","danger")}))},uploadFile:function(){var t=this;this.imgUploading=!0;var e=document.querySelector("#customFile").files[0],a=new FormData;a.append("file",e);var o="".concat("https://course-ec-api.hexschool.io/api","/").concat("27645507-6c88-4d1b-816f-1587210ac2be","/admin/storage");this.$http.post(o,a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200===e.status&&(t.$bus.$emit("msg:push","上傳成功囉，ya ~","success"),t.imgUploading=!1,t.tempProduct.imageUrl.push(e.data.data.path))})).catch((function(){t.$bus.$emit("msg:push","登愣~~出現錯誤了！","danger"),t.imgUploading=!0}))}}},n=c,d=a("2877"),l=Object(d["a"])(n,i,r,!1,null,null,null),u=l.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(0),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品 (刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteProduct(t.tempProduct.id)}}},[t._v(" 確認刪除 ")])])])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],g={props:["tempProduct"],data:function(){return{}},methods:{deleteProduct:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api","/").concat("27645507-6c88-4d1b-816f-1587210ac2be","/admin/ec/product/").concat(this.tempProduct.id);this.$http.delete(e).then((function(){$("#delProductModal").modal("hide"),t.$bus.$emit("msg:push","刪除成功囉，ya ~","success"),t.$emit("update")})).catch((function(){$("#delProductModal").modal("hide"),t.$bus.$emit("msg:push","登愣~~出現錯誤了！","danger")}))}}},v=g,h=Object(d["a"])(v,p,m,!1,null,null,null),b=h.exports,f=a("1799"),P={props:["token"],components:{ProductModal:u,ProductModalDel:b,Pagination:f["a"]},data:function(){return{isLoading:!1,products:[],pagination:{},tempProduct:{imageUrl:[]},isNew:!1,btnLoading:""}},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("27645507-6c88-4d1b-816f-1587210ac2be","/admin/ec/products?page=").concat(e);this.$http.get(a).then((function(e){t.isLoading=!1,t.products=e.data.data,t.pagination=e.data.meta.pagination,(t.tempProduct.id||t.isNew)&&(t.tempProduct={imageUrl:[]})})).catch((function(e){t.isLoading=!1,console.log(e)}))},openModal:function(t,e){var a=this;switch(t){case"new":this.tempProduct={imageUrl:[]},this.isNew=!0,$("#productModal").modal("show");break;case"edit":this.isNew=!1,this.btnLoading=e.id;var o="".concat("https://course-ec-api.hexschool.io/api","/").concat("27645507-6c88-4d1b-816f-1587210ac2be","/admin/ec/product/").concat(e.id);this.$http.get(o).then((function(t){a.btnLoading="",a.tempProduct=t.data.data,$("#productModal").modal("show")})).catch((function(t){a.btnLoading="",console.log(t)}));break;case"del":this.tempProduct=JSON.parse(JSON.stringify(e)),$("#delProductModal").modal("show");break;default:break}}},created:function(){this.getProducts()}},_=P,C=Object(d["a"])(_,o,s,!1,null,null,null);e["default"]=C.exports},"7e87":function(t,e,a){},fcd6:function(t,e,a){"use strict";var o=a("7e87"),s=a.n(o);s.a}}]);
//# sourceMappingURL=chunk-eedca278.d4209d0e.js.map