import React, { Component, Fragment } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Input } from "react-native-elements";
import { argonTheme } from "../../constants";
const { width } = Dimensions.get("screen");
import { Block, Checkbox, theme, Text, Button } from "galio-framework";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient as Gradient } from "expo-linear-gradient";
// import { Icon } from "../../components";
import Icon from "react-native-vector-icons/FontAwesome";

import { connect } from "react-redux";
const BASE_SIZE = theme.SIZES.BASE;
const GRADIENT_BLUE = ["#6B84CA", "#8F44CE"];
const GRADIENT_PINK = ["#D442F8", "#B645F5", "#9B40F8"];
const COLOR_WHITE = theme.COLORS.WHITE;
const COLOR_GREY = theme.COLORS.MUTED; // '#D8DDE1';
class Roles extends Component {
  renderCard = (role, index) => {
    const { navigation } = this.props;
    const gradientColors = index % 2 ? GRADIENT_BLUE : GRADIENT_PINK;

    return (
      <Block
        row
        center
        card
        shadow
        space="between"
        style={styles.card}
        key={role.roleId}
      >
        <Gradient
          start={[0.45, 0.45]}
          end={[0.9, 0.9]}
          colors={gradientColors}
          style={[styles.gradient, styles.left]}
        >
          {/* <Icon
            size={BASE_SIZE * 1.8}
            name="universal-access"
            color={COLOR_WHITE}
            family="FontAwesome"
          /> */}
          <Icon name="universal-access" size={30} />
        </Gradient>

        <Block flex>
          <Text size={BASE_SIZE * 1.125}>{role.roleName}</Text>
          <Text size={BASE_SIZE * 0.875} muted>
            {role.roleName}
          </Text>
        </Block>
        <Button
          style={styles.right}
          onPress={() => navigation.navigate("ShowRole", { role: role })}
        >
          <Icon
            size={BASE_SIZE * 2}
            name="chevron-right"
            family="Entypo"
            color={COLOR_GREY}
          />
        </Button>
      </Block>
    );
  };
  // renderCards = () => cards.map((card, index) => this.renderCard(card, index));
  renderCards = () =>
    this.props.roles.map((role, index) => this.renderCard(role, index));
  render() {
    const { navigation } = this.props;

    return (
      <Block flex safe>
        <ScrollView style={{ paddingTop: BASE_SIZE, flex: 1 }}>
          {this.renderCards()}
        </ScrollView>
        <Block right style={{ zIndex: 0, justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate("AjoutRole")}
          >
            <Icon
              size={25}
              style={{ margin: 15 }}
              color={argonTheme.COLORS.WHITE}
              name="plus"
              family="AntDesign"
            />
          </TouchableOpacity>
        </Block>
      </Block>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
    roles: state.adminReducer.roles,
  };
};

const styles = StyleSheet.create({
  addButton: {
    margin: 15,
    borderRadius: 60,
    backgroundColor: argonTheme.COLORS.PRIMARY,
  },
  CardBlock: {
    width: width - 20,
    padding: 10,
    //minHeight: 90,
    margin: 10,
    backgroundColor: theme.COLORS.WHITE,
  },
  //
  left: {
    marginRight: BASE_SIZE,
  },
  right: {
    width: BASE_SIZE * 2,
    backgroundColor: "transparent",
    elevation: 0,
  },
  gradient: {
    width: BASE_SIZE * 3.25,
    height: BASE_SIZE * 3.25,
    borderRadius: BASE_SIZE * 3.25,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderColor: "transparent",
    marginHorizontal: BASE_SIZE,
    marginVertical: BASE_SIZE / 2,
    padding: BASE_SIZE,
    backgroundColor: COLOR_WHITE,
    shadowOpacity: 0.4,
  },
});

//validationSchema
validationSchema = yup.object().shape({
  roleName: yup.string().min(2).required("le nom de role est requis"),
});
export default connect(mapStateToProps)(Roles);
