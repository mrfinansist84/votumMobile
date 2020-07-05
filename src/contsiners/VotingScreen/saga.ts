import { takeLatest, call, put, delay } from 'redux-saga/effects';
import VotingPageService from './service';
import { votingProtocolsSuccess, votingAction } from './actions';
import { VOTING_PROTOCOLS_REQUEST, VOTING_ACTION } from './constants';
import { Protocol } from './interface';

export function* votingProtocolsSaga() {
    try {
       const votingProtocols: Protocol[] = yield call(VotingPageService.getVotingProtocols);
       yield put(votingProtocolsSuccess(votingProtocols));
    } catch (error) {
         console.log(error);
    }
}

export function* votingActionSaga(action: ReturnType<typeof votingAction>) {
    const {cardId, votingActionParam, userId, collection} = action;
    try {  
       yield call(VotingPageService.setVotingResult,  cardId, votingActionParam, userId, collection)
        yield delay(500);
       const votingProtocols: Protocol[] = yield call(VotingPageService.getVotingProtocols);
       yield put(votingProtocolsSuccess(votingProtocols));
    } catch (error) {
      console.log(error);
    }
}

export function* VotingProtocolsSagaWatcher() {
    yield takeLatest(VOTING_PROTOCOLS_REQUEST, votingProtocolsSaga);
    yield takeLatest(VOTING_ACTION, votingActionSaga);
}
