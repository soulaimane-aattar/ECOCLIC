import React from "react";
import { Block, Text, Button, theme } from "galio-framework";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Icon } from "../../components";
import { argonTheme } from "../../constants";

import { LinearGradient as Gradient } from "expo-linear-gradient";
const { width } = Dimensions.get("screen");

const BASE_SIZE = theme.SIZES.BASE;
const GRADIENT_BLUE = ["#6B84CA", "#8F44CE"];
const GRADIENT_PINK = ["#D442F8", "#B645F5", "#9B40F8"];
const COLOR_WHITE = theme.COLORS.WHITE;
const COLOR_GREY = theme.COLORS.MUTED; // '#D8DDE1';

// mock data
const cards = [
  {
    id: 1,
    codeClient: "343454",
    intituler: "Ecoclic",
    password: "1234",
  },

  {
    id: 2,
    codeClient: "343454",
    intituler: "PROGICIEL",
    password: "1234",
  },
  {
    id: 3,
    codeClient: "343454",
    intituler: "HAMZA",
    password: "1234",
  },

  {
    id: 4,
    codeClient: "343454",
    intituler: "Soulaimane",
    password: "1234",
  },
];

const ClientItem = ({ item }) => {
  const { codeClient, intituler, password } = item;
  return (
    <CardBlock>
      <Block row space="evenly">
        <Block flex left>
          <Icon size={30} family="ArgonExtra" name="nav-right" />
        </Block>
        <Block flex center></Block>
        <Block flex={1.25} right>
          <Icon size={60} family="EvilIcons" name="chevron-right" />
        </Block>
      </Block>
    </CardBlock>
  );
};

export default class Clients extends React.Component {
  renderCard = (client, index) => {
    const { navigation } = this.props;
    const gradientColors = index % 2 ? GRADIENT_BLUE : GRADIENT_PINK;

    return (
      <TouchableOpacity
        key={client.id}
        onPress={() => navigation.navigate("ShowClient", { client: client })}
      >
        <Block
          row
          center
          card
          shadow
          space="between"
          style={styles.card}
          key={client.id}
        >
          <Gradient
            start={[0.45, 0.45]}
            end={[0.9, 0.9]}
            colors={gradientColors}
            style={[styles.gradient, styles.left]}
          >
            <Icon
              size={BASE_SIZE * 1.8}
              name="user"
              color={COLOR_WHITE}
              family="Feather"
            />
          </Gradient>

          <Block flex>
            <Text size={BASE_SIZE * 1.125}>{client.intituler}</Text>
            <Text size={BASE_SIZE * 0.875} muted>
              {client.codeClient}
            </Text>
          </Block>
          <Button style={styles.right}>
            <Icon
              size={BASE_SIZE * 2}
              name="chevron-right"
              family="Entypo"
              color={COLOR_GREY}
            />
          </Button>
        </Block>
      </TouchableOpacity>
    );
  };
  renderCards = () => cards.map((card, index) => this.renderCard(card, index));
  render() {
    const { navigation } = this.props;

    return (
      <Block flex safe>
        <ScrollView style={{ paddingTop: BASE_SIZE, flex: 1 }}>
          {this.renderCards()}
        </ScrollView>
        <Block right style={{ zIndex: 0, justifyContent: "flex-end" }}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate("AjoutClient")}
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

const styles = StyleSheet.create({
  addButton: {
    margin: 15,
    borderRadius: 60,
    backgroundColor: argonTheme.COLORS.PRIMARY,
  },
  CardBlock: {
    width: width - 20,
    padding: 10,
    //minHeight: 90,
    margin: 10,
    backgroundColor: theme.COLORS.WHITE,
  },
  //
  left: {
    marginRight: BASE_SIZE,
  },
  right: {
    width: BASE_SIZE * 2,
    backgroundColor: "transparent",
    elevation: 0,
  },
  gradient: {
    width: BASE_SIZE * 3.25,
    height: BASE_SIZE * 3.25,
    borderRadius: BASE_SIZE * 3.25,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    borderColor: "transparent",
    marginHorizontal: BASE_SIZE,
    marginVertical: BASE_SIZE / 2,
    padding: BASE_SIZE,
    backgroundColor: COLOR_WHITE,
    shadowOpacity: 0.4,
  },
});

/*      
     <FlatList
            data={dataClient}
            renderItem={ClientItem}
            keyExtractor={(client) => client.id}
          />
           <Block flex>
          <Block flex right style={{ justifyContent: "flex-end" }}>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate("AjoutClient")}
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
    
    */
