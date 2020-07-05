import {
    FILTERED_PROTOCOLS_REQUEST,
    FILTERED_PROTOCOLS_SUCCESS
} from './constants';
import { Protocol } from './interface';

export const filteredProtocolsRequest = (
    basicFilterName: string, 
    advancedFilterName: string, 
    advancedFilterValue: any,
    userId: string) => ({
    type: FILTERED_PROTOCOLS_REQUEST,
    basicFilterName, 
    advancedFilterName, 
    advancedFilterValue,
    userId
} as const);

export const filteredProtocolsSuccess = (filteredProtocols: Protocol[] | []) => ({
    type: FILTERED_PROTOCOLS_SUCCESS,
    filteredProtocols
} as const);

export type ProtocolsPageActions = 
  | ReturnType<typeof filteredProtocolsRequest>
  | ReturnType<typeof filteredProtocolsSuccess>;