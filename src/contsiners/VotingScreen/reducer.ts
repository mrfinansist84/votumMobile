import {
    VOTING_PROTOCOLS_SUCCESS,
} from './constants';
import {VotingActions} from './actions';
import {Protocol} from './interface';

const initialState = {
    protocols: [] as [] | Protocol[],
};
export type IReduxState = typeof initialState;

const reducer = (state: IReduxState = initialState, action: VotingActions): IReduxState => {
    switch (action.type) {
       
        case VOTING_PROTOCOLS_SUCCESS: 
            return {
                ...state,
                protocols: action.protocols ? action.protocols : [],
            };
        default:
            return state
    }
};

export { initialState, reducer };

export default reducer;