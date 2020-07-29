import { put, call } from "redux-saga/effects";
import api from "../../../services/api";

import { loadSuccess, loadFailure } from "./actions";

// interface IDataToAdd {
//   payload: {
//     name: string;
//     extension_km: number;
//     has_cycle_track: boolean;
//     cycle_track_extension_km: number | null;
//   };
// }

export function* load() {
  try {
    const response = yield call(api.get, "/avenue");
    yield put(loadSuccess(response));
  } catch (error) {
    yield put(loadFailure());
  }
}
export function* loadSingle({ payload }: any) {
  try {
    const response = yield call(api.get, `/avenue/${payload}`);
    yield put(loadSuccess(response));
  } catch (error) {
    yield put(loadFailure());
  }
}
export function* loadCreate(info: any) {
  try {
    const response = yield call(api.post,`/avenue`, info.payload);
    const toPayload = {
      ...response,
      refresh: true
    }
    yield put(loadSuccess(toPayload));
  } catch (error) {
    yield put(loadFailure());
  }
}
export function* loadUpdate({ payload }: any) {
  try {
    const response = yield call(api.put, `/avenue/${payload.id}`, payload.data);
    const toPayload = {
      ...response,
      refresh: true
    }
    yield put(loadSuccess(toPayload));
  } catch (error) {
    yield put(loadFailure());
  }
}
export function* loadDestroy({ payload }: any) {
  try {
    const response = yield call(api.get, `/avenue/${payload}`);
    yield put(loadSuccess(response));
  } catch (error) {
    yield put(loadFailure());
  }
}
