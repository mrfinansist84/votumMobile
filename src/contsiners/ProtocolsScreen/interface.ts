export interface ProtocolsPageProps {
  filteredProtocols: Protocol[];
  filteredProtocolsRequest: (
    basicFilterName: string, 
    advancedFilterName: string, 
    displayedItems:any,
    userId: string
  ) => void;
  votingAction: () => void;
  calcDocumentAmount: (documentsAmount: number) => void;
  openModalWithDetail: ()=>{};
  controlsAction: ()=>{};
};

export interface Protocol {
  id: number;
  serialNumber: string;
  title: string;
  link?: string;
  status?: string;
  createDate: number;
  voteDate?: number;
  total: number;
  result: string;
  agrees: string[];
  against: string[];
  abstained: string[];
};

export interface SagaProtocols { 
  type: string;
  basicFilterName: string, 
  advancedFilterName: string, 
  advancedFilterValue: any,
  userId: string
}