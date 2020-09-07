import React from "react";
import { StyleSheet, Dimensions, ScrollView, FlatList } from "react-native";
import { Block, theme } from "galio-framework";
import { connect } from "react-redux";
import * as actions from "../actios/actionCreator";
import argonTheme from "../constants/Theme";

import { Card, Input, Icon } from "../components";

const { width } = Dimensions.get("screen");

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.articles,
    };

    this.arrayholder = props.articles;
  }

  filterArticlesByName = (text) => {
    const newData = this.arrayholder.filter((item) => {
      const itemData = item.articleName.toUpperCase();
      return itemData.indexOf(text.toUpperCase()) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  componentDidMount() {
    console.log("token", this.props.token);
    this.props.dispatch(actions.getArticlesForThatUser(this.props.token));
  }
  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Block style={styles.searchContainer}>
        <Input
          right
          color="black"
          style={styles.search}
          placeholder="What are you looking for?"
          placeholderTextColor={"#8898AA"}
          onChangeText={(text) => this.filterArticlesByName(text)}
          //  onFocus={() => navigation.navigate("Pro")}
          iconContent={
            <Icon
              size={16}
              color={theme.COLORS.MUTED}
              name="search-zoom-in"
              family="ArgonExtra"
            />
          }
        />
      </Block>
    );
  };
  renderArticles = () => {
    console.log("data", this.state.data);
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          <FlatList
            data={
              this.state.data.length > 0 ? this.state.data : this.props.articles
            }
            renderItem={({ index, item }) => (
              <Card item={item} idx={index} horizontal /*={idx % 3 == 0}*/ />
            )}
            keyExtractor={(item) => item.articleId}
          />

          {/* this.state.data.map((article, idx) => (
            <Card item={article} idx={idx} horizontal={idx % 3 == 0} />
          ))*/}
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderSearch()}

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
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER,
  },
  searchContainer: {
    zIndex: 2,
    backgroundColor: theme.COLORS.WHITE,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 2,
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
