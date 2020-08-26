import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text, Button } from "galio-framework";
import { Input } from "../../components";

export default class AjoutClient extends React.Component {
  render() {
    return (
      <Block flex>
        <Block style={styles.container}>
          <Block>
            <Input hasIcon={false} placeholder="code client" />
            <Input hasIcon={false} placeholder="label client" />
            <Input hasIcon={false} placeholder="password" />
          </Block>
          <Block middle style={{ marginTop: 20 }}>
            <Button>ENREGISTRER </Button>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
});
