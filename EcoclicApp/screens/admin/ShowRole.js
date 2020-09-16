import React from "react";
import { Block, Text, theme } from "galio-framework";
import { StyleSheet, ScrollView, View, Alert } from "react-native";
import { Card, Button } from "react-native-elements";
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import * as actions from "../../actios/actionCreator";
class ShowRole extends React.Component {
  render() {
    const { role } = this.props.route.params;
    const { navigation } = this.props;

    return (
      <ScrollView>
        <Card style={styles.container}>
          <View style={styles.subContainer}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Nom du role:{" "}
              </Text>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>
                {role.roleName}
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
                navigation.navigate("EditRole", {
                  role: this.props.route.params,
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
                  actions.deletteRole(this.props.token, role)
                );
                if (this.props.roleSupprime == true) {
                  Alert.alert(
                    "",
                    "le role est suprimé avec succée",
                    [
                      {
                        text: "voir vos modification",
                        onPress: () => navigation.navigate("Roles"),
                      },
                    ],
                    { cancelable: false }
                  );
                }
                // Alert.alert(this.props.messageEditRole);
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
    roleSupprime: state.adminReducer.roleSupprime,
    roles: state.adminReducer.roles,
  };
};

export default connect(mapStateToProps)(ShowRole);
