import React from "react";
import { Block, Text, theme, Icon } from "galio-framework";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Images } from "../constants";

const CardBlock = (props) => {
  return <Block card flex style={styles.CardBlock} {...props} />;
};

const CommandeItem = () => {
  return (
    <CardBlock>
      <Block flex style={{ justifyContent: "center", padding: 5 }}>
        <Block row>
          <Block style={{ padding: 5 }}>
            <Text size={18}>#232323 </Text>
          </Block>
          <Block flex right>
            <TouchableOpacity
            //onPress={() => navigation.navigate("Map")}
            >
              <Image source={Images.localisationIcone} style={styles.img} />
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </CardBlock>
  );
};

export default class Commandes extends React.Component {
  render() {
    return (
      <Block flex>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <CommandeItem />
        </ScrollView>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  CardBlock: {
    minHeight: 90,
    margin: 10,
    backgroundColor: theme.COLORS.WHITE,
  },
  img: {
    marginRight: 20,
    width: 40,
    height: 40,
    borderRadius: 70,
    borderWidth: 0,
  },
});
