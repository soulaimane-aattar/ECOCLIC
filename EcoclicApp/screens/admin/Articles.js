import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
//galio
import { Block, Text, theme } from "galio-framework";
//argon
import Icon from "react-native-vector-icons/FontAwesome";
import { argonTheme } from "../../constants";

import CardAdmin from "./CardAdmin";
import { connect } from "react-redux";
const { width } = Dimensions.get("screen");
import * as actions from "../../actios/actionCreator";

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const BASE_SIZE = theme.SIZES.BASE;

class Articles extends React.Component {
  componentDidMount() {
    console.log("je suis apple");
    this.props.dispatch(actions.getAllArticles(this.props.token));
  }

  renderCards = () => {
    return (
      <Block flex style={styles.group}>
        <Block flex>
          {this.props.articles.map((article, idx) => (
            <CardAdmin
              item={article}
              idx={idx}
              horizontal /*={idx % 3 == 0}*/
            />
          ))}
        </Block>
      </Block>
    );
  };

  render() {
    return (
      // <Block flex>
      //   <ScrollView showsVerticalScrollIndicator={false}>
      //     {this.renderCards()}
      //   </ScrollView>
      // </Block>
      <Block flex safe>
        <ScrollView style={{ paddingTop: BASE_SIZE, flex: 1 }}>
          {this.renderCards()}
        </ScrollView>
        <Block right style={{ zIndex: 0, justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate("AjoutCompte")}
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
    articles: state.adminReducer.articles,
    token: state.userReducer.token,
  };
};
const styles = StyleSheet.create({
  addButton: {
    margin: 15,
    borderRadius: 60,
    backgroundColor: argonTheme.COLORS.PRIMARY,
  },
});

export default connect(mapStateToProps)(Articles);
