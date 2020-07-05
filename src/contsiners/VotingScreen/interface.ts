export interface VotingPageProps {
    protocols: Protocol[];
    votingProtocolsRequest: () => void; 
    votingAction: () => void;
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
  