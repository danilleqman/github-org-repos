import { all, fork } from "redux-saga/effects";

import orgSagas from "./org/sagas";

export default function* () {
  yield all([fork(orgSagas)]);
}
