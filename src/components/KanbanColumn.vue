<template>
  <div class="p-2 alert" :class="columnClass">
    <h3>{{ title }}</h3>
    <draggable class="list-group kanban-column" :list="testCases" group="tasks">
      <div
        class="list-group-item"
        v-for="testCase in testCases"
        :key="testCase.name"
        @click="onItemClick"
      >
        {{ testCase.name }}
      </div>
    </draggable>

    <card-detail ref="cardDetail"></card-detail>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import CardDetail from "./CardDetail.vue";

export default {
  name: "kanban-column",
  components: {
    draggable,
    CardDetail
  },
  props: {
    title: {
      type: String,
      required: true
    },
    cardType: {
      type: String,
      validator: function (value) {
        return (
          ["primary", "secondary", "danger", "warning", "success"].indexOf(
            value
          ) !== -1
        );
      }
    },
    testCases: {
      type: Array,
      required: true
    }
  },
  computed: {
    columnClass() {
      return `alert-${this.cardType}`;
    }
  },
  methods: {
    onItemClick: function (me) {
      console.log("You clicked", me);
      this.$refs.cardDetail.open();
    }
  }
};
</script>

<style lang="scss" scoped>
.kanban-column {
  min-height: 300px;
}
</style>
