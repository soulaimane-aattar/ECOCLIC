import React, { Fragment } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
  ImageBackground,
  Platform,
  StatusBar,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Picker } from "@react-native-community/picker";
import { Input } from "react-native-elements";
import * as yup from "yup";
import { Formik } from "formik";

import { Button } from "../../components";
import { argonTheme } from "../../constants";
import { HeaderHeight } from "../../constants/utils";

import { connect } from "react-redux";
const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class AdminProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      company: "",
      price: "",
    };
  }

  render() {
    const { route, navigation } = this.props;
    const { product } = route.params;
    //console.log(product);
    return (
      <Block flex style={styles.container} /*style={styles.profile}*/>
        <StatusBar barStyle="light-content" />
        <Block>
          <ImageBackground
            source={{ uri: product.articlePhoto }}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <Block style={styles.DescriptionContainer}>
              <Block flex style={styles.profileCard}>
                <Text
                  h3
                  style={{ marginBottom: theme.SIZES.BASE / 2 }}
                  color={argonTheme.COLORS.DEFAULT}
                >
                  {product.articleName}
                </Text>
                <Formik
                  initialValues={this.state}
                  onSubmit={(values) => {
                    console.log("cliqued save ");
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
                      <Block flex row space="between">
                        <Block left>
                          <Text size={16}> {product.articleDescription}</Text>
                        </Block>

                        <Block right>
                          {this.state.isClicked ? (
                            [
                              <Input
                                inputContainerStyle={styles.inputStyle}
                                // value={values.price}
                                onChangeText={handleChange("price")}
                                onBlur={() => setFieldTouched("price")}
                                placeholder="prix"
                                // leftIcon={<Icon name="user" size={24} color="black" />}
                              />,

                              touched.price && errors.price && (
                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: "red",
                                  }}
                                >
                                  {errors.price}
                                </Text>
                              ),
                            ]
                          ) : (
                            <Text size={20} bold>
                              {product.articlePrice} dh
                            </Text>
                          )}
                        </Block>
                      </Block>

                      <Block
                        middle
                        style={{
                          justifyContent: "flex-end",
                          marginBottom: 20,
                        }}
                      >
                        <Button
                          color="primary"
                          textStyle={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "700",
                          }}
                          style={styles.affecterA}
                        >
                          <Text bold color={theme.COLORS.WHITE}>
                            Affecter à
                          </Text>
                        </Button>
                        <Picker
                          // selectedValue={values.company}
                          style={styles.pickerStyle}
                          onValueChange={(itemValue, itemIndex) => {
                            // setFieldValue("company", itemValue);
                          }}
                          prompt="Affecter à"
                        >
                          {this.props.companies.map((company) => {
                            console.log(company);
                            return (
                              <Picker.Item
                                label={company.compteIntitule}
                                value={company.compteNum}
                              />
                            );
                          })}
                        </Picker>
                        <Button
                          color="primary"
                          textStyle={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "700",
                          }}
                          style={styles.editPrice}
                          onPress={() => {
                            this.setState({ isClicked: !this.state.isClicked });
                          }}
                        >
                          <Text bold color={theme.COLORS.WHITE}>
                            {this.state.isClicked ? "annuler" : "personliser"}
                          </Text>
                        </Button>

                        <Text style={styles.inputStyle}>{"\n"}</Text>
                        <Button
                          color="primary"
                          textStyle={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "700",
                          }}
                          style={styles.save}
                          onPress={() => {
                            handleSubmit();
                          }}
                        >
                          <Text bold color={theme.COLORS.WHITE}>
                            Enregister
                          </Text>
                        </Button>
                      </Block>
                    </Fragment>
                  )}
                </Formik>
              </Block>
            </Block>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companies: state.adminReducer.companies,
  };
};
export default connect(mapStateToProps)(AdminProduct);

validationSchema = yup.object().shape({
  price: yup.number().required("le prix est requis"),
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
    //marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
  },

  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1,
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  },
  profileBackground: {
    zIndex: 0,
    width: width,
    height: height / 3,
  },

  DescriptionContainer: {
    width: width,
    marginTop: "42%",
    height: height - thumbMeasure,
  },
  profileCard: {
    position: "relative",
    height: height,
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  info: {
    paddingHorizontal: 40,
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
  },
  nameInfo: {
    marginTop: 35,
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  save: {
    width: width * 0.3,
    //  position: "absolute",
    bottom: width * 0.2,
  },
  editPrice: {
    width: width * 0.3,
    left: 80,
    bottom: height * 0.068,
  },
  affecterA: {
    width: width * 0.3,
    top: height * 0.1,
    right: 94,
    bottom: 0,
  },
  inputStyle: {
    width: 70,
    height: height * 0.08,
    // left: width * 0.6,
  },
  pickerStyle: {
    height: 50,
    width: 100,
    top: height * 0.1,
    right: width * 0.3,
  },
});
