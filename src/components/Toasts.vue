<template>
  <!-- <div>123</div> -->
  <div>
    <!-- Position toasts -->
    <div style="position: fixed; top: 15px; right: 15px; z-index:10000;">
      <div
        class="toast fade show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        v-for="(msg,idx) in msgs"
        :key="msg.timestamp"
        :id="`toast-${idx}`"
      >
        <div class="toast-header">
          <strong
            class="mr-auto"
            :class="`text-${msg.status}`"
          >
            <span>
              <i class="fas fa-comments"></i>
            </span> Tropic Go
          </strong>
          <small class="text-muted ml-3">現在</small>
          <button
            type="button"
            class="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
            data-autohide="false"
            @click="closeToast(`toast-${idx}`)"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          {{ msg.msg }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* global $ */
export default {
  name: 'Toast',
  data() {
    return {
      msgs: [
        // {
        //   msg: '', // 後端回傳
        //   status: 'danger',
        //   timestamp: 1234596,
        // },
      ],
    };
  },
  methods: {
    updateMsg(msg, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.msgs.push({
        msg,
        status,
        timestamp,
      });
      this.removeMsgWithTiming(timestamp); // 五秒後移除該 Toast
    },
    removeMsgWithTiming(timestamp) {
      setTimeout(() => {
        this.msgs.forEach((el, idx) => {
          if (el.timestamp === timestamp) {
            this.msgs.splice(idx, 1);
          }
        });
      }, 5000);
    },
    closeToast(el) {
      // 隱藏 Toast
      $(`#${el}`).toast('hide');
    },
  },
  created() {
    this.$bus.$on('msg:push', (msg, status = 'warning') => {
      this.updateMsg(msg, status);
    });
  },
};
</script>
