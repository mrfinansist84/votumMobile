import { combineReducers } from 'redux';
import votingScreenReducer from './contsiners/VotingScreen';
import protocolsScreenReducer from './contsiners/ProtocolsScreen';
import proposalsScreenReducer from './contsiners/ProposalsScreen';

export default combineReducers({
    votingScreenReducer,
    protocolsScreenReducer,
    proposalsScreenReducer
});
