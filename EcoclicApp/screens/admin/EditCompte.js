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
class EditCompte extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(actions.getRoles(this.props.token));
  //   this.props.dispatch(actions.getCompanies(this.props.token));
  // }
  render() {
    const { compte } = this.props.route.params;
    this.state = {
      compteIntitule: compte.compte.compteIntitule,
      compteNum: compte.compte.compteNum,
    };
    let modifie = this.props.modifie;
    console.log(compte);
    const { navigation } = this.props;

    return (
      <ScrollView>
        <Block flex>
          <Block style={styles.container}>
            <Formik
              initialValues={this.state}
              onSubmit={(values) => {
                this.props.dispatch(
                  actions.editCompte(this.props.token, values)
                );
                Alert.alert(
                  "",
                  "" + this.props.messageEditcompte.data,
                  [
                    {
                      text: "voir vos modification",
                      onPress: () => navigation.navigate("comptes"),
                    },
                  ],
                  { cancelable: false }
                );

                // Alert.alert(this.props.messageEditcompte);
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
                    value={values.compteIntitule}
                    onChangeText={handleChange("compteIntitule")}
                    onBlur={() => setFieldTouched("compteIntitule")}
                    placeholder="Nom du compte"
                  />
                  {touched.compteIntitule && errors.compteIntitule && (
                    <Text
                      style={{
                        marginLeft: width * 0.1,
                        fontSize: 12,
                        color: "red",
                      }}
                    >
                      {errors.compteIntitule}
                    </Text>
                  )}
                  <Input
                    value={values.compteNum}
                    onChangeText={handleChange("compteNum")}
                    onBlur={() => setFieldTouched("compteNum")}
                    placeholder="Numéro du compte"
                  />
                  {touched.compteNum && errors.compteNum && (
                    <Text
                      style={{
                        marginLeft: width * 0.1,
                        fontSize: 12,
                        color: "red",
                      }}
                    >
                      {errors.compteNum}
                    </Text>
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
    modifie: state.adminReducer.modifie,
    token: state.userReducer.token,
    messageEditcompte: state.adminReducer.messageEditcompte,
  };
};
//validationSchema
validationSchema = yup.object().shape({
  compteIntitule: yup.string().min(2).required("le nom de compte est requis"),
  compteNum: yup.number().required("le numéro de compte est requis"),
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

export default connect(mapStateToProps)(EditCompte);
