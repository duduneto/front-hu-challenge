import { all, takeLatest } from 'redux-saga/effects';

import { AvenuesTypes } from './avenues/types';
import { load, loadSingle, loadCreate, loadUpdate, loadDestroy} from './avenues/sagas';

export default function* rootSaga(){
  return yield all([
    takeLatest(AvenuesTypes.LOAD_REQUEST, load),
    takeLatest(AvenuesTypes.LOAD_REQUEST_SINGLE, loadSingle),
    takeLatest(AvenuesTypes.LOAD_CREATE, loadCreate),
    takeLatest(AvenuesTypes.LOAD_UPDATE, loadUpdate),
    takeLatest(AvenuesTypes.LOAD_DESTROY, loadDestroy),
  ])
};
