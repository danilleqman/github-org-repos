import { all, call, put, select, takeEvery } from "redux-saga/effects";

import { setOrgInfo, setRepos, types } from "./index";
import { hideLoader, noError, setError, showLoader } from "../loading";
import { orgAPI } from "../../api/api";
import { getOrgSelector, getPageSelector } from "./selectors";

function* sagaRepos() {
  try {
    yield put(noError());
    const org = yield select(getOrgSelector);
    const page = yield select(getPageSelector);
    yield put(showLoader());
    const payload = yield call(orgAPI.getRepos, { org, page });
    yield put(setRepos(payload.data));
    yield put(hideLoader());
  } catch (e) {
    console.log("Что-то пошло не так");
    yield put(setError());
    yield put(hideLoader());
  }
}

function* sagaOrgInfo() {
  try {
    yield put(noError());
    const org = yield select(getOrgSelector);
    yield put(showLoader());
    const payload = yield call(orgAPI.getOrgInfo, { org });
    yield put(setOrgInfo(payload.data));
    yield put(hideLoader());
  } catch (e) {
    console.log("Что-то пошло не так");
    yield put(setError());
    yield put(hideLoader());
  }
}

export default function* () {
  yield all([
    yield takeEvery(types.FETCH_REPOS, sagaRepos),
    yield takeEvery(types.FETCH_ORG_INFO, sagaOrgInfo),
  ]);
}
