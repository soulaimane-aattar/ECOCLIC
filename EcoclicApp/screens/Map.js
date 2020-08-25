import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { Block } from "galio-framework";
import { StyleSheet, View } from "react-native";

export default class Map extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      <MapView
        style={styles.map}
        /* initialRegion={{
          latitude: 33.5166,
          longitude: -7.5884,
          latitudeDelta: 0.922,
          longitudeDelta: 0.0421,
        }}*/
        region={{
          latitude: 33.5166,
          longitude: -7.5884,
          latitudeDelta: 0.922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: 33.5166, longitude: -7.5884 }} />
        <Marker coordinate={{ latitude: 33.5266, longitude: -7.6884 }} />
      </MapView>

      //</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  map: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
});
