import React, { Component, Fragment } from "react";
import { StyleSheet, Dimensions, Alert, View, ScrollView } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button, Input } from "react-native-elements";
// import { Input } from "../../components";
import ModalDropdown from "react-native-modal-dropdown";
import * as yup from "yup";
import { Formik } from "formik";
import Icon from "react-native-vector-icons/FontAwesome";
import * as actions from "../../actios/actionCreator";
import { connect } from "react-redux";
import { Picker } from "@react-native-community/picker";
// import RNPickerSelect from "react-native-picker-select";
const { width, height } = Dimensions.get("screen");
class AjoutRole extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(actions.getRoles(this.props.token));
  //   this.props.dispatch(actions.getCompanies(this.props.token));
  // }
  render() {
    this.state = {
      roleName: "",
    };
    const { navigation } = this.props;

    return (
      <ScrollView>
        <Block flex>
          <Block style={styles.container}>
            <Formik
              initialValues={this.state}
              onSubmit={(values) => {
                this.props.dispatch(actions.addRole(this.props.token, values));
                Alert.alert(
                  "",
                  "" + this.props.messageAddRole,
                  [
                    {
                      text: "voir la liste des roles",
                      onPress: () => navigation.navigate("Roles"),
                    },
                  ],
                  { cancelable: false }
                );
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
                      // icon={
                      //   <AntIcon name="login" type="ant-design" size={15} color="black" />
                      // }
                      containerStyle={styles.buttonAjouter}
                      type="outline"
                      title="Ajouter"
                      titleStyle={styles.titleStyle}
                      disabled={!isValid}
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
    roleAdded: state.adminReducer.roleAdded,
    token: state.userReducer.token,
    messageAddRole: state.adminReducer.messageAddRole,
  };
};
//validationSchema
validationSchema = yup.object().shape({
  roleName: yup
    .string()
    .min(4, "le nom du role doit comporter au moins quatre caractères")
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
});

export default connect(mapStateToProps)(AjoutRole);
