import React from "react";
import { Block, Text, theme } from "galio-framework";
import { StyleSheet, ScrollView, View, Alert } from "react-native";
import { Card, Button } from "react-native-elements";
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import * as actions from "../../actios/actionCreator";
class ShowClient extends React.Component {
  render() {
    const { client } = this.props.route.params;
    const { navigation } = this.props;

    return (
      <ScrollView>
        <Card style={styles.container}>
          <View style={styles.subContainer}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                username:
              </Text>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>
                {client.username}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Nom: </Text>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>
                {client.userFirstName}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Prénom: </Text>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>
                {client.userLastName}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                société:{" "}
              </Text>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>
                {client.compteIntitule}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>role: </Text>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>
                {client.roleName}
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
              // onPress={this.props.dispatch(
              //   actions.deletteClient(this.props.token, client.userId)
              // )}
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
                console.log(client.userId);
                this.props.dispatch(
                  actions.deletteClient(this.props.token, client)
                );
                if (this.props.supprime == true) {
                  Alert.alert("client supprime avec succes");
                  navigation.goBack();
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
    supprime: state.adminReducer.supprime,
  };
};

export default connect(mapStateToProps)(ShowClient);
