import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { theme, Block } from "galio-framework";
const { width } = Dimensions.get("screen");
class CardBlock extends React.Component {
  render() {
    return <Block card flex style={styles.CardBlock} {...this.props} />;
  }
}

const styles = StyleSheet.create({
  CardBlock: {
    width: width - 20,
    padding: 10,
    minHeight: 90,
    margin: 10,
    backgroundColor: theme.COLORS.WHITE,
  },
});

export default CardBlock;
