import React from "react";
import { Block, Text, theme } from "galio-framework";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
const { width } = Dimensions.get("screen");
import { Images, argonTheme } from "../constants";
import { Icon } from "../components";
import { connect } from "react-redux";
import * as actions from "../actios/actionCreator";
import ACTION_TYPES from "../actios/acctionTypes";
import { formatDate } from "../lib/utilities";

const CardBlock = (props) => {
  return <Block card flex style={styles.CardBlock} {...props} />;
};

const CommandeItem = (props) => {
  const { navigation, commande } = props;
  console.log(commande);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CommandeDetail", {
          cmdLines: commande.f_docligne,
          prixTotal: commande.prixTotal,
        })
      }
    >
      <CardBlock>
        <Block flex style={{ justifyContent: "center", padding: 5 }}>
          <Block row space="evenly">
            <Block flex left>
              <Block>
                <Text size={18}>#EC{commande.docentiteId} </Text>
              </Block>
              <Block>
                <Text color={argonTheme.COLORS.SUCCESS}> en cours </Text>
              </Block>
            </Block>
            <Block flex center>
              <Block flex row>
                <Block>
                  <Icon name="calendar-date" family="ArgonExtra" size={18} />
                </Block>
                <Block style={{ marginLeft: 5 }}>
                  <Text>{formatDate(commande.createdAt)}</Text>
                </Block>
              </Block>
            </Block>
            <Block flex={1.25} right>
              <TouchableOpacity onPress={() => navigation.navigate("Map")}>
                <Image source={Images.localisationIcone} style={styles.img} />
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      </CardBlock>
    </TouchableOpacity>
  );
};

class Commandes extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.getUserCommandes(this.props.token));
  }

  render() {
    const { navigation } = this.props;
    console.log(this.props.commandes);
    if (this.props.error) {
      console.log(this.props.error);
      Alert.alert(
        "Erreur inattendue ...",
        this.props.error.message,
        [
          {
            text: "Cancel",
            onPress: () =>
              this.props.dispatch({
                type: ACTION_TYPES.UNSET_USER_COMMANDES_ERROR,
              }),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () =>
              this.props.dispatch({
                type: ACTION_TYPES.UNSET_USER_COMMANDES_ERROR,
              }),
          },
        ],
        { cancelable: true }
      );
    }

    return (
      <Block flex>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <FlatList
            data={this.props.commandes}
            renderItem={({ item }) => (
              <CommandeItem navigation={navigation} commande={item} />
            )}
            keyExtractor={(item) => `${item.docentiteId}`}
          />
        </ScrollView>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  CardBlock: {
    padding: 10,
    minHeight: 90,
    margin: 10,
    backgroundColor: theme.COLORS.WHITE,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 70,
    borderWidth: 0,
  },
});

const mapStateToProps = (state) => {
  return {
    commandes: state.commandes.commandes,
    token: state.userReducer.token,
    error: state.commandes.error,
  };
};

export default connect(mapStateToProps)(Commandes);
