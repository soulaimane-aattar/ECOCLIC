import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme } from "galio-framework";
import { connect } from "react-redux";
import * as actions from "../actios/actionCreator";

import { Card } from "../components";

const { width } = Dimensions.get("screen");

class Home extends React.Component {
  componentDidMount() {
    console.log("token", this.props.token);
    this.props.dispatch(actions.getArticlesForThatUser(this.props.token));
  }
  renderArticles = () => {
    console.log(this.props.articles);
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          {this.props.articles.map((article, idx) => (
            <Card item={article} idx={idx} horizontal /*={idx % 3 == 0}*/ />
          ))}
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

//redux config

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
    ///
    articles: state.articles.articles,
    loading: state.articles.loading,
  };
};
export default connect(mapStateToProps)(Home);
