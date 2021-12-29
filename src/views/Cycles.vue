<template>
  <div class="container mt-5">
    <b-row align-h="between" align-v="center" no-gutters>
      <h1>Test Cycles</h1>
      <b-button variant="primary" class="h-100" @click="onStartNewCycle"
        >Start New Cycle</b-button
      >
    </b-row>
    <div class="my-3">
      <b-table
        striped
        hover
        :items="cycleList"
        clickable
        @row-clicked="onRowClicked"
      ></b-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import router from "../router/index";
import { TRY_GET_CYCLE_LIST } from "../store/actions";
import { CYCLE_LIST } from "../store/getters";

export default {
  name: "Cycles",
  computed: { ...mapGetters({ cycleList: CYCLE_LIST }) },
  mounted() {
    this.$store.dispatch(TRY_GET_CYCLE_LIST);
  },
  methods: {
    onRowClicked(val) {
      console.log(val);
      router.push("board");
    },
    onStartNewCycle() {
      router.push("board");
    }
  }
};
</script>
