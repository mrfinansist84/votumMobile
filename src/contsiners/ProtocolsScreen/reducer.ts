import {
    FILTERED_PROTOCOLS_SUCCESS,
    FILTERED_PROTOCOLS_REQUEST
} from './constants';
import { Protocol } from './interface';
import { ProtocolsPageActions } from './actions';

const initialState = {
    filteredProtocols: [] as [] | Protocol[],
    basicFilterName: '' as string, 
    advancedFilterName: '' as string, 
    advancedFilterValue: null as any,
};

export type ProtocolsPageState = typeof initialState;

const reducer = (
    state: ProtocolsPageState = initialState,
    action: ProtocolsPageActions
): ProtocolsPageState => {
    switch (action.type) {
        case FILTERED_PROTOCOLS_REQUEST:
        return {
            ...state,
            basicFilterName: action.basicFilterName, 
            advancedFilterName: action.advancedFilterName,  
            advancedFilterValue: action.advancedFilterValue,
        };
        case FILTERED_PROTOCOLS_SUCCESS:
            return {
                ...state,
                filteredProtocols: action.filteredProtocols 
                ? action.filteredProtocols : [],
            };
        default:
            return state
    }
};

export { initialState, reducer };

export default reducer;