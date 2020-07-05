export interface ProposalsPageProps {
  filteredProposals: Proposal[];
  filteredProposalsRequest: (
    basicFilterName: string, 
    advancedFilterName: string, 
    displayedItems:any, 
    userId:string) => void;
    votingProposalsAction: () => void;
  basicFilterName: string, 
  advancedFilterName: string, 
  advancedFilterValue: any
};

export interface Proposal {
  id: number;
  title: string;
  text: string;
  createDate: number;
  agrees: string[];
  against: string[];
  abstained: string[];
};

export interface SagaProposals {
  type: string;
  basicFilterName: string,
  advancedFilterName: string,
  advancedFilterValue: any,
  userId: string
};