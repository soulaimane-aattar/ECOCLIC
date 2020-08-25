import React from "react";
import { Block, Text, theme } from "galio-framework";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Images, argonTheme } from "../constants";
import { Icon } from "../components";
const CardBlock = (props) => {
  return <Block card flex style={styles.CardBlock} {...props} />;
};

const CommandeItem = (props) => {
  const { navigation } = props;
  return (
    <CardBlock>
      <Block flex style={{ justifyContent: "center", padding: 5 }}>
        <Block row space="evenly">
          <Block flex left>
            <Block>
              <Text size={18}>#232323 </Text>
            </Block>
            <Block>
              <Text color={argonTheme.COLORS.SUCCESS}> en cours </Text>
            </Block>
          </Block>
          <Block flex center>
            <Block flex row>
              <Block>
                <Icon name="calendar-date" family="ArgonExtra" size={18} />
              </Block>
              <Block style={{ marginLeft: 5 }}>
                <Text> 13/6/2020</Text>
              </Block>
            </Block>
          </Block>
          <Block flex={1.25} right>
            <TouchableOpacity onPress={() => navigation.navigate("Map")}>
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
    const { navigation } = this.props;
    return (
      <Block flex>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <CommandeItem navigation={navigation} />
        </ScrollView>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  CardBlock: {
    padding: 10,
    minHeight: 90,
    margin: 10,
    backgroundColor: theme.COLORS.WHITE,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 70,
    borderWidth: 0,
  },
});
