import {
    FILTERED_PROPOSALS_REQUEST,
    FILTERED_PROPOSALS_SUCCESS,
    VOTING_PROPOSALS_ACTION
} from './constants';
import { Proposal } from './interface';

export const filteredProposalsRequest = (
    basicFilterName: string, 
    advancedFilterName: string, 
    advancedFilterValue: any,
    userId: string
    ) => ({
    type: FILTERED_PROPOSALS_REQUEST,
    basicFilterName, 
    advancedFilterName, 
    advancedFilterValue,
    userId
} as const);

export const filteredProposalsSuccess = (filteredProposals: [] | Proposal[]) => ({
    type: FILTERED_PROPOSALS_SUCCESS,
    filteredProposals
} as const);

export const votingProposalsAction = (cardId?: number, controlName?: string, userId?: string, defenition?: string, filteredParams?: any) => ({
    type: VOTING_PROPOSALS_ACTION,
    cardId,
    controlName,
    userId,
    defenition,
    filteredParams
} as const);

export type ProposalsPageActions = 
  | ReturnType<typeof filteredProposalsRequest>
  | ReturnType<typeof filteredProposalsSuccess>;