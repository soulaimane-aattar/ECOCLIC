import React from "react";
import { Block, Text } from "galio-framework";

export default class ShowClient extends React.Component {
  render() {
    const { client } = this.props.route.params;
    return (
      <Block safe>
        <Block middle>
          <Text h2> {client.intituler} </Text>
        </Block>
        <Block>
          <Text> code client : {client.codeClient} </Text>
          <Text> intituler : {client.intituler} </Text>
          <Text> mode passe : {client.password} </Text>
        </Block>
      </Block>
    );
  }
}
