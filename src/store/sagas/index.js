import { all, takeLatest } from 'redux-saga/effects';

import { Types as ModulesTypes } from '../ducks/modules';

import * as ModulesSagas from './modules';

export default function* rootSaga() {
  yield all([
    takeLatest(ModulesTypes.ADD_MODULE, ModulesSagas.load)
  ]);
}