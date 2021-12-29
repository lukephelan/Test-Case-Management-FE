export const SET_CYCLES = "SET_CYCLES";
export const SET_CYCLE_DETAIL = "SET_CYCLE_DETAIL";
export const SET_CASES = "SET CASES";
export const SET_CASE_DETAIL = "SET_CASE_DETAIL";

export const mutations = {
  [SET_CYCLES]: (state, cycles) => {
    state.cycles = cycles;
  },
  [SET_CYCLE_DETAIL]: (state, cycleDetail) => {
    const cycleIndex = state.cycles.findIndex((c) => c.id === cycleDetail.id);
    state.cycles[cycleIndex] = cycleDetail;
  },
  [SET_CASES]: (state, cases) => {
    console.log(cases);
    state.cases = cases;
  },
  [SET_CASE_DETAIL]: (state, caseDetail) => {
    const caseIndex = state.cases.findIndex((c) => c.id === caseDetail.id);
    state.cases[caseIndex] = caseDetail;
  }
};
