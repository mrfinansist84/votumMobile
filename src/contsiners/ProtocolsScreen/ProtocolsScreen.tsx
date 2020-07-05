import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { filteredProtocolsRequest } from "./actions";
import { translater } from "../../global/translation";
import { filterSettingProtocol } from "./helpers";
import { Card } from "react-native-paper";
import { Protocol } from "./interface";
import { SafeAreaView } from "react-native-safe-area-context";
import Filter from "../../components/Filter";
import ModalProtocol from '../../components/ModalProtocol';

export const ProtocolsScreen = (props: any) => {
  const { filteredProtocolsRequest, filteredProtocols } = props;
  const userId = "23";
  const [display, setDisplay] = useState(false);
  const [link, setLink] = useState('');

const cardHandler = (link: any) => {
  setDisplay(true);
  setLink(link)
};

  return (
    <SafeAreaView>
      <View>
        <Filter
          settings={filterSettingProtocol(translater)}
          filterAction={filteredProtocolsRequest}
          userId={userId}
        />
        <ModalProtocol 
        isDisplay={display}
        link={link}
        controls={(flag)=>setDisplay(flag)}
        componentName='protocol'
        />
        {!filteredProtocols.length && (
          <View  style={style.center}>
          <Text>Выберете выше критерии поиска протоколов</Text>
          </View>
        )}
        <ScrollView>
          {filteredProtocols.length !== 0 &&
            filteredProtocols.map((protocol: Protocol, i: number) => (
              <TouchableOpacity key={i} onPress={cardHandler.bind(null, protocol.link)}>
                <Card style={style.card}>
                  <Text>{protocol.title}</Text>
                </Card>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
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
    padding: 20,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
});

const mapStateToProps = (state: any) => ({
  filteredProtocols: state.protocolsScreenReducer.filteredProtocols,
});

const mapDispatchToProps = {
  filteredProtocolsRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProtocolsScreen);
