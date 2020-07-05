import {
    VOTING_PROTOCOLS_REQUEST,
    VOTING_PROTOCOLS_SUCCESS,
    VOTING_ACTION
} from './constants';
import { Protocol } from './interface';

export const votingProtocolsRequest = () => ({
    type: VOTING_PROTOCOLS_REQUEST,
} as const);

export const votingProtocolsSuccess = (protocols: Protocol[]) => ({
    type: VOTING_PROTOCOLS_SUCCESS,
    protocols
} as const);

export const votingAction = (cardId?: number, votingActionParam?: string, userId?: string, collection?: string) => ({
    type: VOTING_ACTION,
    cardId,
    votingActionParam,
    userId,
    collection
} as const);

export type VotingActions = 
  | ReturnType<typeof votingProtocolsRequest>
  | ReturnType<typeof votingProtocolsSuccess>
  | ReturnType<typeof votingAction>;