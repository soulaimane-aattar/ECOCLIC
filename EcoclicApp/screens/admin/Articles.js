import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
} from "react-native";
//galio
import { Block, Text, theme } from "galio-framework";
//argon
import CardAdmin from "./CardAdmin";
import { connect } from "react-redux";
const { width } = Dimensions.get("screen");
import * as actions from "../../actios/actionCreator";

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

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
      <Block flex>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderCards()}
        </ScrollView>
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
const styles = StyleSheet.create({});

export default connect(mapStateToProps)(Articles);
