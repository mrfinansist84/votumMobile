import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-paper';
import { votingProtocolsRequest, votingAction } from './actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import VotingButtonBox from '../../components/VotingButtonBox';
import ModalProtocol from '../../components/ModalProtocol';

export const VotingScreen = (props: any) => {
  const userId = '23';
  const [display, setDisplay] = useState(false);
  const [link, setLink] = useState('');

  React.useEffect(() => {
    props.votingProtocolsRequest();
  }, []);

  const cardHandler = (link: any) => {
    setDisplay(true);
    setLink(link)
  };
  
  return (
    <SafeAreaView>
       <ModalProtocol 
        isDisplay={display}
        link={link}
        controls={(flag)=>setDisplay(flag)}
        componentName='protocol'
        />
      {!props.protocols.length && (
        <View style={style.center}>
          <Text>Нет  протоколов на голосовании</Text>
        </View>
      )}
      <ScrollView>
        {props.protocols.length !== 0 &&
          props.protocols.map((protocol: any, i: number) => (
            <TouchableOpacity onPress={cardHandler.bind(null, protocol.link)} key={i}>
              <Card style={style.card}>
                <Text>{protocol.title}</Text>
                <VotingButtonBox 
                userId={userId} 
                voteDocument={protocol}
                 votingAction={props.votingAction}
                 docType='protocols'
                />
              </Card>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </SafeAreaView>
  )
};

const style = StyleSheet.create({
  center: {
    paddingTop: '50%',
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
  btnItem: {
    color: '#0076e4'
  }
});

const mapStateToProps = (state: any) => ({
  protocols: state.votingScreenReducer.protocols,
});

const mapDispatchToProps = {
  votingProtocolsRequest,
  votingAction
}

export default connect(mapStateToProps, mapDispatchToProps)(VotingScreen)