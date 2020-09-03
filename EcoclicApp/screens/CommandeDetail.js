import React from "react";
import { Block, Text, theme } from "galio-framework";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { argonTheme } from "../constants/";
const { width } = Dimensions.get("screen");
import { Select, Button } from "../components";

const CardItem = (props) => {
  const { item } = props;
  console.log("item", item);
  return (
    <Block>
      <Block card flex style={[styles.cardItem, styles.shadow]}>
        <Block row style={{ backgroundColor: theme.COLORS.WHITE }}>
          <Image
            source={{ uri: item.f_article.articlePhoto }}
            style={styles.img}
          />
          <Block flex space="between" style={styles.cardDescription}>
            <Text bold size={18} style={styles.cardTitle}>
              {item.f_article.articleDescription}
            </Text>
            <Block flex right>
              <Text
                size={16}
                muted={true}
                color={argonTheme.COLORS.ACTIVE}
                bold
              >
                {item.f_article.articlePrice} dh
              </Text>
            </Block>
          </Block>
        </Block>
        <Block row space="evenly" style={styles.itemFooter}>
          <Block flex left>
            <Text bold size={16}>
              quantite :
              <Text
                size={16}
                muted={true}
                color={argonTheme.COLORS.ACTIVE}
                bold
              >
                {item.quantite}
              </Text>
            </Text>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};
class CommandeDetail extends React.Component {
  renderArticles = () => {
    const { navigation } = this.props;
    const { cmdLines, prixTotal } = this.props.route.params;
    console.log("lines", this.props.route.params);
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block>
          <Block row>
            <Text
              style={{ marginBottom: theme.SIZES.BASE / 2 }}
              color={argonTheme.COLORS.DEFAULT}
            >
              subtotal commande ({cmdLines.length} article):
            </Text>
            <Text
              bold
              style={{ marginBottom: theme.SIZES.BASE / 2 }}
              color={argonTheme.COLORS.RED}
            >
              {prixTotal}dh
            </Text>
          </Block>
        </Block>

        <Block flex space="around">
          <FlatList
            data={cmdLines}
            renderItem={({ item }) => <CardItem item={item} {...this.props} />}
            keyExtractor={(item) => item.id}
          />
        </Block>
      </ScrollView>
    );
  };

  render() {
    const { navigation } = this.props;
    console.log(this.props.commandes);
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
  checkout: {
    width: width,
    marginBottom: 14,
    marginTop: 20,
  },
  cardItem: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    minHeight: 114,
    marginBottom: 16,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  imgContainer: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  img: {
    margin: 12,
    height: 90,
    width: 100,
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2,
    backgroundColor: theme.COLORS.WHITE,
  },
  cardTitle: {
    flex: 1,
    flexWrap: "wrap",
    paddingBottom: 6,
    marginTop: 20,
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10,
  },
  itemFooter: {
    backgroundColor: theme.COLORS.WHITE,
    margin: 12,
    marginTop: 0,
  },
});
export default CommandeDetail;
