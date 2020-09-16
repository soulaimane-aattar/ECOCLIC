import React, { Component, Fragment } from "react";
import { StyleSheet, Dimensions, Alert, View, ScrollView } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button, Input } from "react-native-elements";
import AntIcon from "react-native-vector-icons/AntDesign";
import * as yup from "yup";
import { Formik } from "formik";
import Icon from "react-native-vector-icons/FontAwesome";
import * as actions from "../../actios/actionCreator";
import { connect } from "react-redux";
import { Picker } from "@react-native-community/picker";
const { width, height } = Dimensions.get("screen");
class EditRole extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(actions.getRoles(this.props.token));
  //   this.props.dispatch(actions.getCompanies(this.props.token));
  // }
  render() {
    const { role } = this.props.route.params;
    this.state = {
      roleName: role.role.roleName,
      roleId: role.role.roleId,
    };
    let roleModifie = this.props.roleModifie;
    const { navigation } = this.props;

    return (
      <ScrollView>
        <Block flex>
          <Block style={styles.container}>
            <Formik
              initialValues={this.state}
              onSubmit={(values) => {
                this.props.dispatch(actions.editRole(this.props.token, values));
                if (this.props.roleModifie == true) {
                  Alert.alert(
                    "",
                    "le role est modifié avec succée",
                    [
                      {
                        text: "voir vos modification",
                        onPress: () => navigation.navigate("Roles"),
                      },
                    ],
                    { cancelable: false }
                  );

                  // Alert.alert(this.props.messageEditRole);
                }
              }}
              validationSchema={validationSchema}
            >
              {({
                values,
                handleChange,
                errors,
                setFieldTouched,
                touched,
                isValid,
                handleSubmit,
                setFieldValue,
              }) => (
                <Fragment>
                  <Input
                    inputContainerStyle={styles.inputStyle}
                    value={values.roleName}
                    onChangeText={handleChange("roleName")}
                    onBlur={() => setFieldTouched("roleName")}
                    placeholder="roleName"
                    leftIcon={
                      <Icon name="universal-access" size={24} color="black" />
                    }
                  />
                  {touched.roleName && errors.roleName && (
                    <Text style={styles.errorStyle}>{errors.roleName}</Text>
                  )}

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <Button
                      icon={
                        <AntIcon
                          name="save"
                          type="ant-design"
                          size={15}
                          color="black"
                        />
                      }
                      containerStyle={styles.buttonAjouter}
                      type="outline"
                      title="enregistrer"
                      titleStyle={styles.titleStyle}
                      onPress={() => handleSubmit()}
                    />
                    <Button
                      // icon={
                      //   <AntIcon name="login" type="ant-design" size={15} color="black" />
                      // }
                      containerStyle={styles.buttonAnnuler}
                      type="outline"
                      title="Annuler"
                      titleStyle={styles.titleStyle}
                      onPress={() => navigation.goBack()}
                    />
                  </View>
                </Fragment>
              )}
            </Formik>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    roleModifie: state.adminReducer.roleModifie,
    token: state.userReducer.token,
    roles: state.adminReducer.roles,
    messageEditRole: state.adminReducer.messageEditRole,
  };
};
//validationSchema
validationSchema = yup.object().shape({
  roleName: yup
    .string()
    .min(4, "le role doit comporter au moins quatre caractères")
    .required("le nom du role est requis"),
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    marginTop: 5,
    margin: 4,
    padding: 0,
  },
  errorStyle: {
    marginLeft: width * 0.1,
    fontSize: 12,
    color: "red",
  },
  // buttonAjouter: {
  //   width: width * 0.3,
  //   marginLeft: width * 0.2,
  // },
  // buttonAnnuler: {
  //   width: width * 0.3,
  //   marginLeft: width * 0.6,
  // },
  // inputStyle: {
  //   height: 37,
  // },
  dropdown: {
    marginTop: 8,
    marginLeft: -16,
    width: 100,
  },
});

export default connect(mapStateToProps)(EditRole);
