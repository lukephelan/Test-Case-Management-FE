<template>
  <b-modal ref="cardDetailModal" id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</template>

<script>
export default {
  name: "card-detail",
  methods: {
    open: function () {
      this.$refs.cardDetailModal.show();
    }
  }
};
</script>

<style lang="scss" scoped></style>
