import React, { Component, Fragment } from "react";
import { Text, StyleSheet, Dimensions, Alert } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { Input } from "react-native-elements";
const { width, height } = Dimensions.get("screen");
import * as actions from "../../actios/actionCreator";
class AjoutCompte extends Component {
  render() {
    this.state = {
      compteIntitule: "",
      compteNum: "",
    };
    const { navigation } = this.props;
    return (
      <Formik
        initialValues={this.state}
        onSubmit={(values) => {
          this.props.dispatch(actions.addCompany(this.props.token, values));

          Alert.alert(
            "",
            "compte ajouté avec succés",
            [
              {
                text: "voir vos modification",
                onPress: () => navigation.navigate("Comptes"),
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
            <Button
              type="outline"
              title="Ajouter"
              titleStyle={styles.titleStyle}
              buttonStyle={styles.createButton}
              disabled={!isValid}
              onPress={() => handleSubmit()}
            />
          </Fragment>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
    messageAddCompany: state.adminReducer.messageAddCompany,
  };
};
const styles = StyleSheet.create({
  createButton: {
    width: width * 0.5,
    // marginTop: 25,
    marginTop: 9,
    marginLeft: width * 0.2,
    color: "black",
    margin: "auto",
  },
  titleStyle: {
    color: "black",
  },
});
//validationSchema
validationSchema = yup.object().shape({
  compteIntitule: yup.string().min(2).required("le nom de compte est requis"),
  compteNum: yup.number().required("le nom de compte est requis"),
});
export default connect(mapStateToProps)(AjoutCompte);
