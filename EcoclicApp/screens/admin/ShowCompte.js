import React from "react";
import { Block, Text, theme } from "galio-framework";
import { StyleSheet, ScrollView, View, Alert } from "react-native";
import { Card, Button } from "react-native-elements";
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import * as actions from "../../actios/actionCreator";
class showCompte extends React.Component {
  render() {
    const { compte } = this.props.route.params;
    const { navigation } = this.props;

    return (
      <ScrollView>
        <Card style={styles.container}>
          <View style={styles.subContainer}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Nom du société:
              </Text>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>
                {compte.compteIntitule}
              </Text>
            </View>

            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Numéro de société:{" "}
              </Text>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>
                {compte.compteNum}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Button
              icon={
                <Icon name="edit" type="font-awesome" size={15} color="black" />
              }
              type="outline"
              title="modifier"
              titleStyle={styles.titleStyle}
              onPress={() =>
                navigation.navigate("EditCompte", {
                  compte: this.props.route.params,
                })
              }
            />
            <Button
              icon={
                <AntIcon
                  name="deleteuser"
                  type="ant-design"
                  size={15}
                  color="black"
                />
              }
              type="outline"
              title="supprimer"
              titleStyle={styles.titleStyle}
              onPress={() => {
                this.props.dispatch(
                  actions.deletteCompany(this.props.token, compte)
                );
                if (this.props.compteSupprime == true) {
                  Alert.alert(
                    "",
                    "le compte est suprimé avec succée",
                    [
                      {
                        text: "voir vos comptes",
                        onPress: () => navigation.navigate("Comptes"),
                      },
                    ],
                    { cancelable: false }
                  );
                }
              }}
            />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: theme.COLORS.WHITE,
  },
  borders: {
    minWidth: "45%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#808080",
  },
});

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
    compteSupprime: state.adminReducer.compteSupprime,
  };
};

export default connect(mapStateToProps)(showCompte);
