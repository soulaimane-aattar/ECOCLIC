import React from "react";
import { Block, Text, theme } from "galio-framework";

import {
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  ListView,
  FlatList,
} from "react-native";
import { argonTheme, Images } from "../constants/";
import { Icon } from "../components";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

const DATA = [
  {
    id: 1,
    title: "Last message",
    description: "Let's meet at Startbucks at 11:30. wdyt?",
    time: "1 day",
  },
  {
    id: 2,
    title: "Product issue",
    description: "A new issue has been reported for Argon.",
    time: "2 day ",
  },
  {
    id: 3,
    title: "New likes",
    description: "Your post have been liked a lot.",
    time: "4 day",
  },
];

const unreadNotif = [
  {
    id: 5,
    title: " New order",
    description: "A confirmed request by one party",
    time: "2 hrs",
  },
  {
    id: 6,
    title: " New message",
    description: "The new message from the author",
    time: "3 hrs",
  },
];

const NotificationsList = ({ item }) => {
  const { title, description, time } = item;
  return (
    <Block flex style={Styles.NotifItem}>
      <Block row>
        <Block>
          <Image source={Images.notification} style={Styles.avatar} />
        </Block>
        <Block flex style={Styles.ItemDescription}>
          <Block flex>
            <Block row>
              <Block>
                <Text size={18}>{title}</Text>
              </Block>
              <Block flex right style={Styles.ItemTime}>
                <Block row>
                  <Block>
                    <Icon
                      name="ios-time"
                      family="Ionicon"
                      color="#8295a9"
                      style={{ marginRight: 10 }}
                    />
                  </Block>
                  <Block>
                    <Text size={12}>{time} ago</Text>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
          <Block flex>
            <Text bold>{description}</Text>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default class Notifications extends React.Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.Container}
      >
        <Block
          //  showsVerticalScrollIndicator={false}
          //contentContainerStyle={Styles.NotifContainer}
          style={Styles.NotifContainer}
        >
          <Block style={Styles.BlockTitle}>
            <Block style={{ margin: 20 }}>
              <Text
                bold
                size={24}
                style={Styles.Title}
                style={{ marginBottom: theme.SIZES.BASE / 2 }}
                color={argonTheme.COLORS.DEFAULT}
              >
                Unread notifications
              </Text>
            </Block>
          </Block>

          <FlatList
            data={unreadNotif}
            renderItem={NotificationsList}
            keyExtractor={(item) => item.id}
          />
        </Block>

        <Block
          //showsVerticalScrollIndicator={false}
          //contentContainerStyle={Styles.NotifContainer}
          style={Styles.NotifContainer}
        >
          <Block style={Styles.BlockTitle}>
            <Block style={{ margin: 20 }}>
              <Text
                bold
                size={24}
                style={Styles.Title}
                style={{ marginBottom: theme.SIZES.BASE / 2 }}
                color={argonTheme.COLORS.DEFAULT}
              >
                Read notifications
              </Text>
            </Block>
          </Block>

          <FlatList
            data={DATA}
            renderItem={NotificationsList}
            keyExtractor={(item) => item.id}
          />
        </Block>
      </ScrollView>
    );
  }
}

const Styles = StyleSheet.create({
  Container: {
    width: width,
    height: height,
  },
  NotifContainer: {
    backgroundColor: theme.COLORS.WHITE,
    margin: 30,
    marginBottom: 0,
  },
  BlockTitle: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA",
  },
  avatar: {
    //flex: 1,
    margin: 10,
    width: 40,
    height: 40,
    borderRadius: 62,
    borderWidth: 0,
  },
  NotifItem: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
  },
  ItemDescription: {
    maxWidth: width,
    justifyContent: "center",
  },
  ItemTime: {
    marginTop: 5,
  },
});
