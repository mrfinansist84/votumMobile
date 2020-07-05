import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import Filter from "../../components/Filter";
import { translater } from "../../global/translation";
import { filterSettingProposals } from "./helpers";
import { Card } from "react-native-paper";
import { filteredProposalsRequest, votingProposalsAction } from "./actions";
import { ProposalsPageProps, Proposal } from './interface';
import ModalProposal from '../../components/ModalProposal';
import VotingButtonBox from '../../components/VotingButtonBox';

export const ProposalsScreen: React.FC<ProposalsPageProps>  = (props) => {
    const userId = "23";
    const { filteredProposalsRequest, filteredProposals, votingProposalsAction, basicFilterName, advancedFilterName, advancedFilterValue } = props;
    const [display, setDisplay] = useState(false);
    const [info, setInfo] = useState({text: '', title: ''});
  
  const cardHandler = (text: string, title: string) => {
    setDisplay(true);
    setInfo({text, title})
  };
    return (
        <SafeAreaView>
      <View>
        <Filter
          settings={filterSettingProposals(translater)}
          filterAction={filteredProposalsRequest}
          userId={userId}
        />
        <ModalProposal 
        isDisplay={display}
        text={info.text}
        title={info.title}
        controls={(flag)=>setDisplay(flag)}
        />
         {!filteredProposals.length && (
         <View  style={style.center}>
         <Text>Выберете выше критерии поиска предложений</Text>
         </View>
        )}
        <ScrollView>
          {filteredProposals.length !== 0 &&
            filteredProposals.map((filteredProposal: Proposal, i: number) => (
              <TouchableOpacity key={i} onPress={cardHandler.bind(null, filteredProposal.text, filteredProposal.title)}>
                <Card style={style.card}>
                  <Text>{filteredProposal.title}</Text>
                  <VotingButtonBox 
                userId={userId} 
                voteDocument={filteredProposal}
                 votingAction={props.votingProposalsAction}
                 docType='proposals'
                filterParams={{
                    basicFilterName,
                    advancedFilterName,
                    advancedFilterValue
                }}
                />
                </Card>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
            </SafeAreaView>
    )
};

const style = StyleSheet.create({
    center: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
       borderLeftWidth: 10,
    borderLeftColor: "#0076e4",
    margin: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5
      },
});

const mapStateToProps = (state: any) => ({
    filteredProposals: state.proposalsScreenReducer.filteredProposals,
    basicFilterName: state.proposalsScreenReducer.basicFilterName,
    advancedFilterName: state.proposalsScreenReducer.advancedFilterName,
    advancedFilterValue: state.proposalsScreenReducer.advancedFilterValue,
  });
  
  const mapDispatchToProps = {
    filteredProposalsRequest,
    votingProposalsAction
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProposalsScreen);
  