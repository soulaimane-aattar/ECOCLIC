import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme } from "galio-framework";
import { connect } from "react-redux";
import * as actions from "../actios/actionCreator";

import { Card } from "../components";

const { width } = Dimensions.get("screen");

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.getArticlesForThatUser(this.props.token));
  }
  renderArticles = () => {
    console.log("i am home i haev the artcile");
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          <Block flex row>
            {this.props.articles.map((article) => {
              <Card item={article} />;
              console.log("article 1 passe");
            })}
          </Block>
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
    isLogged: state.userReducer.isLogged,
    isLoading: state.userReducer.isLoading,
    error: state.userReducer.errorMessage,
    errorOrNot: state.userReducer.errorOrNot,
    token: state.userReducer.tokesn,
    ///
    articles: state.userReducer.articles,
    articleIsLoading: state.userReducer.articleIsLoading,
  };
};
export default connect(mapStateToProps)(Home);
