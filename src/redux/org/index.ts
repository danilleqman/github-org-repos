import { createSlice } from "@reduxjs/toolkit";

const orgSlice = createSlice({
  name: "org",
  initialState: {
    org: "github",
    repos: [],
    orgInfo: {},
    page: 1,
  },
  reducers: {
    setOrg(state: any, action: any) {
      const { payload } = action;
      state.org = payload;
    },
    setRepos(state: any, action: any) {
      const { payload } = action;
      state.repos = payload;
    },
    setOrgInfo(state: any, action: any) {
      const { payload } = action;
      state.orgInfo = payload;
    },
    setPage(state: any, action: any) {
      const { payload } = action;
      state.page = payload;
    },
  },
});
export const { setOrg, setRepos, setOrgInfo, setPage } = orgSlice.actions;
export default orgSlice.reducer;

//sagas
export const types = {
  FETCH_REPOS: "FETCH_REPOS",
  FETCH_ORG_INFO: "FETCH_ORG_INFO",
};
const fetchRepos = () => {
  return {
    type: types.FETCH_REPOS,
  };
};
const fetchOrgInfo = () => {
  return {
    type: types.FETCH_ORG_INFO,
  };
};
export { fetchRepos, fetchOrgInfo };
