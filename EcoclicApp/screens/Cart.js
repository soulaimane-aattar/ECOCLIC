import React from "react";
import { StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import { Block, theme, Text } from "galio-framework";

import { Card, Select, Button } from "../components";
import articles from "../constants/articles";
import { argonTheme } from "../constants/";
import { block } from "react-native-reanimated";
const { width } = Dimensions.get("screen");

//  <Block flex style={(styles.imgContainer, styles.shadow)}>
const CardItem = ({ item }) => {
  return (
    <Block card flex style={(styles.cardItem, styles.shadow)}>
      <Block row style={{ backgroundColor: theme.COLORS.WHITE }}>
        <Image source={{ uri: item.image }} style={styles.img} />
        <Block flex space="between" style={styles.cardDescription}>
          <Text bold size={18} style={styles.cardTitle}>
            {item.title}
          </Text>
          <Block flex right>
            <Text size={16} muted={true} color={argonTheme.COLORS.ACTIVE} bold>
              ${item.prix}
            </Text>
          </Block>
        </Block>
      </Block>
      <Block row space="evenly" style={styles.itemFooter}>
        <Block flex left>
          <Select defaultIndex={1} options={["01", "02", "03", "04", "05"]} />
        </Block>
        <Block flex center>
          <Button small center color="default" style={styles.optionsButton}>
            DELETE
          </Button>
        </Block>
        <Block flex={1.25} right>
          <Button center color="default" style={styles.optionsButton}>
            SAVE FOR LATER
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default class Cart extends React.Component {
  renderArticles = () => {
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
              Card subtotal (5 items):
            </Text>
            <Text
              bold
              style={{ marginBottom: theme.SIZES.BASE / 2 }}
              color={argonTheme.COLORS.RED}
            >
              $725
            </Text>
          </Block>

          <Button
            shadowless
            style={styles.checkout}
            textStyle={{
              color: "white",
              fontSize: 14,
            }}
          >
            Proceed to checkout
          </Button>
        </Block>

        <Block flex space="around">
          <Block style={{ marginBottom: 30 }}>
            <CardItem item={articles[0]} />
          </Block>
          <Block>
            <CardItem item={articles[1]} />
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
  checkout: {
    marginBottom: 14,
    marginTop: 20,
  },
  cardItem: {
    paddingBottom: 30,
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
