<template>
  <div class="container mt-5">
    <!-- <div class="row">
      <div class="col form-inline">
        <b-form-input
          id="input-2"
          v-model="newTask"
          required
          placeholder="Enter Task"
          @keyup.enter="add"
        ></b-form-input>
        <b-button @click="add" variant="primary" class="ml-3">Add</b-button>
      </div>
    </div> -->
    <b-row align-h="between" align-v="center" no-gutters>
      <h1>Active Test Case</h1>
      <b-button variant="primary" class="h-100" @click="onFinishCycle"
        >Finish Cycle</b-button
      >
    </b-row>

    <div class="row mt-5">
      <div class="col">
        <kanban-column
          title="To Test"
          cardType="secondary"
          :testCases="cycleDetail.arrBackLog"
        ></kanban-column>
      </div>
      <div class="col">
        <kanban-column
          title="Testing"
          cardType="primary"
          :testCases="cycleDetail.arrTested"
        ></kanban-column>
      </div>

      <div class="col">
        <kanban-column
          title="Failed"
          cardType="danger"
          :testCases="cycleDetail.arrFailed"
        ></kanban-column>
      </div>

      <div class="col">
        <kanban-column
          title="Passed"
          cardType="success"
          :testCases="cycleDetail.arrDone"
        ></kanban-column>
      </div>
    </div>
  </div>
</template>

<script>
import KanbanColumn from "../components/KanbanColumn.vue";
import { TRY_GET_CYCLE_DETAIL } from "../store/actions";
// import { CYCLE_LIST } from "../store/getters";

export default {
  name: "kanban-board",
  components: {
    KanbanColumn
  },
  props: {
    cycle: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      // for new tasks
      newTask: "",
      // 4 arrays to keep track of our 4 statuses
      cycleDetail: {
        arrBackLog: [
          // { name: "Dashboard Widgets" },
          // { name: "Sync" },
          // { name: "Webstore Provisioning" },
          // { name: "Onboarding" }
        ],
        arrInProgress: [],
        arrTested: [],
        arrFailed: [],
        arrDone: []
      }
    };
  },
  mounted() {
    console.log("Mounted");
    if (this.cycle) {
      this.$store
        .dispatch(TRY_GET_CYCLE_DETAIL, this.cycle)
        .then((cycle) => (this.cycleDetail = cycle));
    }
  },
  methods: {
    //add new tasks method
    // add: function () {
    //   if (this.newTask) {
    //     this.arrBackLog.push({ name: this.newTask });
    //     this.newTask = "";
    //   }
    // }
    onFinishCycle: function () {
      return;
    }
  }
};
</script>

<style></style>
