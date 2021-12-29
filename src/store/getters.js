export const CYCLE_LIST = "CYCLE_LIST";
export const CASE_LIST = "CASE_LIST";

export const getters = {
  [CYCLE_LIST](state) {
    return state.cycles;
  },
  [CASE_LIST](state) {
    return state.cases;
  }
};
