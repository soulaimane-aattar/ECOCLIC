import React, { Component, Fragment } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Input } from "react-native-elements";

export default class Roles extends Component {
  render() {
    this.state = {
      roleName: "",
    };
    return (
      <Formik
        initialValues={this.state}
        onSubmit={(values) => {
          this.props.dispatch(actions.login(values));
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
              value={values.roleName}
              onChangeText={handleChange("roleName")}
              onBlur={() => setFieldTouched("roleName")}
              placeholder="Nom de role"
            />
            {touched.roleName && errors.roleName && (
              <Text
                style={{
                  marginLeft: width * 0.1,
                  fontSize: 12,
                  color: "red",
                }}
              >
                {errors.roleName}
              </Text>
            )}
          </Fragment>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
  };
};

//validationSchema
validationSchema = yup.object().shape({
  roleName: yup.string().min(2).required("le nom de role est requis"),
});
