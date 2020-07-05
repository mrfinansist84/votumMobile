import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { SagaProtocols } from './interface';
import { filteredProtocolsSuccess } from './actions';
import { FILTERED_PROTOCOLS_REQUEST } from './constants';
import ProtocolsPageService from './service';

export function* filteredProtocolsSaga(data: SagaProtocols) {
    const { basicFilterName, advancedFilterName, advancedFilterValue, userId } = data;
    try {
        const filteredProtocols = yield call(ProtocolsPageService.getFilteredProtocols, 
            basicFilterName, 
            advancedFilterName, 
            advancedFilterValue,
            'protocols',
            userId);
        yield put(filteredProtocolsSuccess(filteredProtocols));
    } catch (error) {
       console.log(error);
    }
};

export function* FilteredProtocolsSagaWatcher() {
    yield takeLatest(FILTERED_PROTOCOLS_REQUEST, filteredProtocolsSaga);
}
