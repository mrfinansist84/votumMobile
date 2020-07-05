import {
    FILTERED_PROPOSALS_REQUEST,
    FILTERED_PROPOSALS_SUCCESS, 
} from './constants';
import { Proposal } from './interface';
import { ProposalsPageActions } from './actions';

const initialState = {
    filteredProposals: [] as [] | Proposal[],
    basicFilterName: '' as string, 
    advancedFilterName: '' as string, 
    advancedFilterValue: null as any,
};

export type ProposalsReduxState = typeof initialState;

const reducer = (state: ProposalsReduxState = initialState, action: ProposalsPageActions)
: ProposalsReduxState => {
    switch (action.type) {
        case FILTERED_PROPOSALS_REQUEST:
            return {
                ...state,
                basicFilterName: action.basicFilterName, 
                advancedFilterName: action.advancedFilterName,  
                advancedFilterValue: action.advancedFilterValue,
            };
        case FILTERED_PROPOSALS_SUCCESS: 
            return {
                ...state,
                filteredProposals: action.filteredProposals ? action.filteredProposals : [],
            };
        default:
            return state
    }
};

export { initialState, reducer };

export default reducer;