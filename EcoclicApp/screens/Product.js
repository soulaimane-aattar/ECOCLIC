import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { block } from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

export default class Product extends React.Component {
  render() {
    const { route } = this.props;
    const { product } = route.params;
    console.log(product);
    return (
      <Block flex style={styles.container} /*style={styles.profile}*/>
        <StatusBar barStyle="light-content" />
        <Block>
          <ImageBackground
            source={{ uri: product.image }}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <Block style={{ width, height, marginTop: "78%" }}>
              <Block flex style={styles.profileCard}>
                <Text
                  h3
                  style={{ marginBottom: theme.SIZES.BASE / 2 }}
                  color={argonTheme.COLORS.DEFAULT}
                >
                  {product.name}
                </Text>

                <Block row space="between">
                  <Block left>
                    <Text size={16}> {product.title}</Text>
                  </Block>
                  <Block right>
                    <Text size={20} bold>
                      ${product.prix}
                    </Text>
                  </Block>
                </Block>

                <Block
                  middle
                  style={{
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    color="primary"
                    textStyle={{
                      color: "white",
                      fontSize: 16,
                      fontWeight: "700",
                    }}
                    style={styles.addToCard}
                  >
                    <Text bold color={theme.COLORS.WHITE}>
                      Add to card
                    </Text>
                  </Button>
                </Block>
              </Block>
            </Block>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

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
    height: height / 2,
  },
  profileCard: {
    // position: "relative",
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
  addToCard: {
    width: width * 0.8,
    //  position: "absolute",
    bottom: 0,
  },
});
