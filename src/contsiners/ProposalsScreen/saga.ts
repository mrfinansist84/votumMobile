import { takeLatest, call, put, delay } from 'redux-saga/effects';
import ProtocolsPageService from '../ProtocolsScreen/service';
import VotingPageService from '../VotingScreen/service';
import { filteredProposalsSuccess } from './actions';
import { FILTERED_PROPOSALS_REQUEST, VOTING_PROPOSALS_ACTION } from './constants';
import { SagaProposals } from './interface';

export function* filteredProposalsSaga(data: SagaProposals) {
    const { basicFilterName, advancedFilterName,  advancedFilterValue, userId } = data;
    try {
        const filteredProposals = yield call(ProtocolsPageService.getFilteredProtocols, 
            basicFilterName, 
            advancedFilterName, 
            advancedFilterValue,
            'proposals',
            userId);   
        yield put(filteredProposalsSuccess(filteredProposals));
    } catch (error) {
        console.log(error);
    }
}

export function* votingProposalsActionSaga(action: any) {
    const {cardId, controlName, userId, defenition, filteredParams } = action;
    
    try {
        yield call(VotingPageService.setVotingResult,  cardId, controlName, userId, defenition)
        yield delay(500);
        yield filteredProposalsSaga({...filteredParams, userId});
    } catch (error) {
        console.log(error);
    }
}; 


export function* FilteredProposalsSagaWatcher() {
    yield takeLatest(FILTERED_PROPOSALS_REQUEST, filteredProposalsSaga);
    yield takeLatest(VOTING_PROPOSALS_ACTION, votingProposalsActionSaga);
}
