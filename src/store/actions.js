import axios from "axios";
import {
  SET_CYCLES,
  SET_CYCLE_DETAIL,
  SET_CASES,
  SET_CASE_DETAIL
} from "./mutations";

export const TRY_GET_CYCLE_LIST = "TRY_GET_CYCLE_LIST";
export const TRY_GET_CYCLE_DETAIL = "TRY_GET_CYCLE_DETAIL";
export const TRY_GET_CASE_LIST = "TRY_GET_CASE_LIST";
export const TRY_GET_CASE_DETAIL = "TRY_GET_CASE_DETAIL";

export const actions = {
  [TRY_GET_CYCLE_LIST]({ commit }) {
    axios.get("/cycles").then((response) => {
      commit(SET_CYCLES, response.data);
    });
  },
  [TRY_GET_CYCLE_DETAIL]({ commit }, cycle) {
    axios.get(`/cycles/${cycle.id}`).then((response) => {
      commit(SET_CYCLE_DETAIL, response.data);
    });
  },
  [TRY_GET_CASE_LIST]({ commit }) {
    axios.get("/cases").then((response) => {
      commit(SET_CASES, response.data);
    });
  },
  [TRY_GET_CASE_DETAIL]({ commit }, testCase) {
    console.log(testCase.id);
    axios.get(`/cases/${testCase.id}`).then((response) => {
      commit(SET_CASE_DETAIL, response.data);
    });
  }
};
