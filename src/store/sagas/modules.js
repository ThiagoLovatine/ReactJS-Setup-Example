import { put, /*call */ } from 'redux-saga/effects';

import {Creators as ModulesActions} from '../ducks/modules';

//import api from '../../services/api';

export function* load(action) {
    try {
        const data = {id: 1, text: 'Hello'};

        // Get data from API
        //const { moduleId } = action.payload;

        /*let { data: { data } } = yield call(api.get, `${moduleId}/modules`);

        for (let i in data) {
            // Process the response
        } */

        yield put(ModulesActions.addModule(data));
    } catch(err) {
        yield put(ModulesActions.loadFailure());
    }
}