import React from "react";
import { Block, Text, theme } from "galio-framework";
import { StyleSheet } from "react-native";

export default class ShowClient extends React.Component {
  render() {
    const { client } = this.props.route.params;
    return (
      <Block safe>
        <Block style={styles.container}>
          <Block middle>
            <Text h2> {client.intituler} </Text>
          </Block>
          <Block middle style={{ margin: 10 }}>
            <Block row>
              <Block style={[styles.borders, { borderBottomWidth: 0 }]}>
                <Text size={20}> code client </Text>
              </Block>
              <Block
                style={[
                  styles.borders,
                  { borderLeftWidth: 0, borderBottomWidth: 0 },
                ]}
              >
                <Text size={20}> {client.codeClient} </Text>
              </Block>
            </Block>
            <Block row>
              <Block style={[styles.borders, { borderBottomWidth: 0 }]}>
                <Text size={20}> intituler </Text>
              </Block>
              <Block
                style={[
                  styles.borders,
                  { borderLeftWidth: 0, borderBottomWidth: 0 },
                ]}
              >
                <Text size={20}> {client.intituler} </Text>
              </Block>
            </Block>
            <Block row>
              <Block style={styles.borders}>
                <Text size={20}> mode passe </Text>
              </Block>
              <Block style={[styles.borders, { borderLeftWidth: 0 }]}>
                <Text size={20}> {client.password} </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: theme.COLORS.WHITE,
  },
  borders: {
    minWidth: "45%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#808080",
  },
});
