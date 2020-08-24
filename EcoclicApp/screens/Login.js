import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Block, Checkbox, theme } from "galio-framework";
import * as yup from "yup";
import { Formik } from "formik";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { TextInput, Text, Alert } from "react-native";
import { Images, argonTheme } from "../constants";
import { Button } from "react-native-elements";
const { width, height } = Dimensions.get("screen");
import axios from "axios";
export default class Login extends React.Component {
  render() {
    this.state = {
      username: "",
      password: "",
    };
    const checkLogin = (values) => {
      const username = values.username;
      const password = values.password;
      axios
        .post("http://localhost:3000/auth/login", {
          username: username,
          password: password,
        })
        .then(() => navigation.navigate("App"))
        .catch((respance) => {
          Alert.alert(respance.response.data);
        });
    };
    const { navigation } = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block flex={0.25} middle style={styles.socialConnect}>
                <Text bold color="#8898AA" size={25}>
                  LOGIN
                </Text>
              </Block>
              <Formik
                initialValues={this.state}
                onSubmit={(values) => checkLogin(values)}
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
                      value={values.username}
                      onChangeText={handleChange("username")}
                      onBlur={() => setFieldTouched("username")}
                      placeholder="username"
                      leftIcon={<Icon name="user" size={24} color="black" />}
                    />
                    {touched.username && errors.username && (
                      <Text style={{ fontSize: 10, color: "red" }}>
                        {errors.username}
                      </Text>
                    )}
                    <Input
                      value={values.password}
                      onChangeText={handleChange("password")}
                      placeholder="Password"
                      onBlur={() => setFieldTouched("password")}
                      secureTextEntry={true}
                    />
                    {touched.password && errors.password && (
                      <Text style={{ fontSize: 10, color: "red" }}>
                        {errors.password}
                      </Text>
                    )}
                    <Button
                      title="login"
                      disabled={!isValid}
                      onPress={() => handleSubmit()}
                    />
                  </Fragment>
                )}
              </Formik>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

//validationSchema
validationSchema = yup.object().shape({
  username: yup.string().min(2).required("le nom d'utilisateur est requis"),
  password: yup.string().min(2).required("le mot de passe est requis"),
});
const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.78,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA",
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14,
  },
  inputIcons: {
    marginRight: 12,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
  },
});
