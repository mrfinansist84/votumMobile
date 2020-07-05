import React from 'react';
import { Button } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

export const VotingButtonBox = (props: any) => {
    const { userId, voteDocument, votingAction, docType, filterParams } = props;
   
    const vote = (votingParam) => {
        votingAction(voteDocument.id, votingParam, userId, docType, filterParams)
    };

    const checkIfTheUserVoted = (userId, card) => {
        const voteResults = [...card.agrees, ...card.against, ...card.abstained];
        return voteResults.some((id) => id === userId);
    };

    return (
        <View style={style.btnContainer}>
            {checkIfTheUserVoted(userId, voteDocument) &&
                <Text style={{ color: "#0076e4" }}>Вы уже проголосовали за данный документ</Text>}

            {!(checkIfTheUserVoted(userId, voteDocument)) && <>
                <Button color='#0076e4' icon="check" compact={true} mode="outlined"
                    onPress={vote.bind(null, 'agrees')}>
                    ЗА
                  </Button>
                <Button icon="close" color='#0076e4' compact={true} mode="outlined"
                    onPress={vote.bind(null, 'against')}>
                    ПРОТИВ
                  </Button>
                <Button icon="home" color='#0076e4' compact={true} mode="outlined"
                    onPress={vote.bind(null, 'abstained')}>
                    ВОЗДЕРЖАТЬСЯ
                </Button>
            </>}
        </View>)
}

const style = StyleSheet.create({
    btnContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});