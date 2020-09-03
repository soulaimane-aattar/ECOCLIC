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
class AjoutClient extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.getRoles(this.props.token));
    this.props.dispatch(actions.getCompanies(this.props.token));
  }
  render() {
    this.state = {
      username: "",
      password: "",
      userFirstName: "",
      userLastName: "",
      company: "",
      role: "",
      checkPassword: "",
    };
    let added = this.props.added;
    const { navigation } = this.props;

    return (
      <ScrollView>
        <Block flex>
          <Block style={styles.container}>
            <Formik
              initialValues={this.state}
              onSubmit={(values) => {
                const roleName = this.props.roles.find(
                  (role) => role.roleId == values.role
                ).roleName;
                const compteIntitule = this.props.companies.find(
                  (com) => com.compteNum == values.company
                ).compteIntitule;
                const vauesTosend = {
                  ...values,
                  roleName,
                  compteIntitule,
                };

                this.props.dispatch(
                  actions.addClient(this.props.token, vauesTosend)
                );
                if (added) {
                  Alert.alert(this.props.messageAddClient);
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
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onBlur={() => setFieldTouched("username")}
                    placeholder="username"
                    leftIcon={<Icon name="user" size={24} color="black" />}
                  />
                  {touched.username && errors.username && (
                    <Text style={styles.errorStyle}>{errors.username}</Text>
                  )}
                  <Input
                    inputContainerStyle={styles.inputStyle}
                    secureTextEntry={true}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={() => setFieldTouched("password")}
                    placeholder="mot de passe"
                    leftIcon={
                      <Icon
                        name="key"
                        type="font-awesome"
                        size={24}
                        color="black"
                      />
                    }
                  />
                  {touched.password && errors.password && (
                    <Text
                      style={{
                        marginLeft: width * 0.1,
                        fontSize: 12,
                        color: "red",
                      }}
                    >
                      {errors.password}
                    </Text>
                  )}
                  <Input
                    inputContainerStyle={styles.inputStyle}
                    secureTextEntry={true}
                    value={values.checkPassword}
                    onChangeText={handleChange("checkPassword")}
                    onBlur={() => setFieldTouched("checkPassword")}
                    placeholder="ressaisir le mot de passe"
                    leftIcon={
                      <Icon
                        name="key"
                        type="font-awesome"
                        size={24}
                        color="black"
                      />
                    }
                  />
                  {touched.checkPassword && errors.checkPassword && (
                    <Text
                      style={{
                        marginLeft: width * 0.1,
                        fontSize: 12,
                        color: "red",
                      }}
                    >
                      {errors.checkPassword}
                    </Text>
                  )}
                  <Input
                    inputContainerStyle={styles.inputStyle}
                    value={values.userLastName}
                    onChangeText={handleChange("userLastName")}
                    onBlur={() => setFieldTouched("userLastName")}
                    placeholder="Nom"
                    leftIcon={<Icon name="user" size={24} color="black" />}
                  />
                  {touched.userLastName && errors.userLastName && (
                    <Text
                      style={{
                        marginLeft: width * 0.1,
                        fontSize: 12,
                        color: "red",
                      }}
                    >
                      {errors.userLastName}
                    </Text>
                  )}
                  <Input
                    inputContainerStyle={styles.inputStyle}
                    value={values.userFirstName}
                    onChangeText={handleChange("userFirstName")}
                    onBlur={() => setFieldTouched("userFirstName")}
                    placeholder="Prénom"
                    leftIcon={<Icon name="user" size={24} color="black" />}
                  />
                  {touched.userFirstName && errors.userFirstName && (
                    <Text
                      style={{
                        marginLeft: width * 0.1,
                        fontSize: 12,
                        color: "red",
                      }}
                    >
                      {errors.userFirstName}
                    </Text>
                  )}

                  <Picker
                    selectedValue={values.company}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => {
                      setFieldValue("company", itemValue);
                    }}
                    prompt="choisir une société"
                  >
                    {this.props.companies.map((company) => {
                      return (
                        <Picker.Item
                          label={company.compteIntitule}
                          value={company.compteNum}
                        />
                      );
                    })}
                  </Picker>

                  <Picker
                    selectedValue={values.role}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => {
                      setFieldValue("role", itemValue);
                    }}
                    prompt="choisir un role"
                  >
                    {this.props.roles.map((role) => {
                      return (
                        <Picker.Item
                          label={role.roleName}
                          value={role.roleId}
                        />
                      );
                    })}
                  </Picker>
                  {/* <ModalDropdown
                  onSelect={(idx, value) => console.log(idx)}
                  dropdownStyle={styles.dropdown}
                  options={this.props.roles.map((role) => {
                    return role.roleName;
                  })}
                /> */}
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
    added: state.adminReducer.added,
    token: state.userReducer.token,
    companies: state.adminReducer.companies,
    roles: state.adminReducer.roles,
    messageAddClient: state.adminReducer.messageAddClient,
  };
};
//validationSchema
validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "le nom d'utilisateur doit comporter au moins quatre caractères")
    .required("le nom d'utilisateur est requis"),
  password: yup
    .string()
    .min(8, "Le mot de passe doit comporter au moins huit caractères")
    .required("le mot de passe est requis"),
  userFirstName: yup.string().min(3).required("le prénom du client est requis"),
  userLastName: yup.string().min(3).required("le nom du client est requis"),
  checkPassword: yup
    .string()
    .required("confirmez votre mot de passe")
    .oneOf([yup.ref("password")], "les mots de passe ne correspondent pas"),
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

export default connect(mapStateToProps)(AjoutClient);
