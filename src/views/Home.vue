<template>
  <div class="home">
    <navbar></navbar>
    <div class="py-5 wrapper">
      <router-view></router-view>
    </div>

    <footer class="out-footer">圖片、介紹皆取自網路，僅供練習之用</footer>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/NavbarFront.vue';

export default {
  name: 'Home',
  components: {
    navbar,
  },
  data() {
    return {};
  },
  // methods: {
  //   getCart() {
  //     this.isLoading = true;
  //     const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
  //     this.$http
  //       .get(api)
  //       .then((res) => {
  //         this.isLoading = false;
  //         this.carts = res.data.data;

  //         this.totalPrice = 0;
  //         this.totalQuantity = 0;
  //         // 計算總金額
  //         this.carts.forEach((item) => {
  //           this.totalPrice += item.product.price * item.quantity;
  //           this.totalQuantity += item.quantity;
  //         });
  //       })
  //       .catch((err) => {
  //         this.isLoading = false;
  //         console.log(err);
  //       });
  //   },
  //   removeAllCart() {
  //     const api = `${process.env.VUE_APP_APIPATH}/
  //  ${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
  //     this.$http
  //       .delete(api)
  //       .then(() => {
  //         this.carts = [];
  //         this.getCart();
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  //   mounted() {
  //     this.getCart();
  //   },
  // },
};
</script>
