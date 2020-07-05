import { all } from 'redux-saga/effects';
import { VotingProtocolsSagaWatcher } from './contsiners/VotingScreen';
import { FilteredProtocolsSagaWatcher } from './contsiners/ProtocolsScreen';
import { FilteredProposalsSagaWatcher } from './contsiners/ProposalsScreen';

export default function* rootSaga(): Generator {
  yield all([
    VotingProtocolsSagaWatcher(),
    FilteredProtocolsSagaWatcher(),
    FilteredProposalsSagaWatcher()
  ]);
}
