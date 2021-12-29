<template>
  <div class="container mt-5">
    <b-row align-h="between" align-v="center" no-gutters>
      <h1>Test Cases</h1>
      <b-button variant="primary" class="h-100" @click="onCreateNewCase"
        >Create Case</b-button
      >
    </b-row>
    <div class="my-3">
      <b-table
        striped
        hover
        :items="caseList"
        clickable
        @row-clicked="onRowClicked"
      ></b-table>
    </div>

    <card-detail ref="cardDetail"></card-detail>
  </div>
</template>

<script>
import CardDetail from "../components/CardDetail.vue";
import { mapGetters } from "vuex";
import { TRY_GET_CASE_LIST, TRY_GET_CASE_DETAIL } from "../store/actions";
import { CASE_LIST } from "../store/getters";

export default {
  name: "cases",
  components: {
    CardDetail
  },
  computed: { ...mapGetters({ caseList: CASE_LIST }) },
  mounted() {
    this.$store.dispatch(TRY_GET_CASE_LIST);
  },
  methods: {
    onRowClicked: function (caseDefinition) {
      this.$store
        .dispatch(TRY_GET_CASE_DETAIL, caseDefinition)
        .then(() => this.$refs.cardDetail.open());
    },
    onCreateNewCase: function () {
      return;
    }
  }
};
</script>

<style lang="scss" scoped></style>
