import React from "react";
import { Block, Text, theme, Button } from "galio-framework";
import { StyleSheet, FlatList, Dimensions } from "react-native";
import { argonTheme } from "../constants";
import { Icon } from "../components";

const { width } = Dimensions.get("screen");
const BASE_SIZE = theme.SIZES.BASE;
const COLOR_WHITE = theme.COLORS.WHITE;
const COLOR_GREY = theme.COLORS.MUTED; // '#D8DDE1';
const data = [
  { id: "1", title: "document 1 " },
  { id: "2", title: "document 2" },
];

const renderDocument = ({ item }) => {
  // const gradientColors = index % 2 ? GRADIENT_BLUE : GRADIENT_PINK;
  /*   <Block>
        <Icon
          size={BASE_SIZE * 1.8}
          name="user"
          color={COLOR_WHITE}
          family="Feather"
        />
      </Block> */
  return (
    <Block
      row
      center
      card
      shadow
      space="between"
      style={styles.card}
      // key={document.id}
    >
      <Block flex>
        <Text size={BASE_SIZE * 1.125}>{item.title}</Text>
        <Text size={BASE_SIZE * 0.875} muted>
          23/6/2019
        </Text>
      </Block>
      <Button
        style={styles.right}
        // onPress={() => navigation.navigate("ShowClient", { client: client })}
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

export default class Documents extends React.Component {
  /*
  <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  
  
  */
  render() {
    return (
      <Block flex safe>
        <Block style={styles.container}>
          <Block>
            <FlatList
              data={data}
              renderItem={renderDocument}
              keyExtractor={(item) => item.id}
            />
          </Block>
          <Block flex style={styles.bottomContent}>
            <Block row>
              <Text
                size={argonTheme.SIZES.MEDIUM}
                style={{
                  marginLeft: theme.SIZES.BASE / 2,
                  marginBottom: theme.SIZES.BASE / 2,
                }}
                color={argonTheme.COLORS.DEFAULT}
              >
                solde dette :
              </Text>
              <Text
                bold
                size={argonTheme.SIZES.MEDIUM}
                style={{ marginBottom: theme.SIZES.BASE / 2 }}
                color={argonTheme.COLORS.RED}
              >
                500 dh
              </Text>
            </Block>
            <Block>
              <Button
                shadowless
                style={styles.demandeBtn}
                textStyle={{
                  color: "white",
                  fontSize: 16,
                }}
                // onPress={() => navigation.navigate("Commandes")}
              >
                demander l’agent de recouvrement
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  bottomContent: {
    justifyContent: "flex-end",
  },
  demandeBtn: {
    margin: 10,
    justifyContent: "center",
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2,
  },
  card: {
    borderColor: "transparent",
    marginHorizontal: theme.SIZES.BASE / 4,
    marginVertical: theme.SIZES.BASE / 3,
    padding: theme.SIZES.BASE,
    backgroundColor: theme.COLORS.WHITE,
    shadowOpacity: 0.4,
  },
  right: {
    width: theme.SIZES.BASE * 2,
    backgroundColor: "transparent",
    elevation: 0,
  },
});
