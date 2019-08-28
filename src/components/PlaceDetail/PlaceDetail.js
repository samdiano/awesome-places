import React from "react";
import {
  Modal,
  View,
  SafeAreaView,
  Image,
  Text,
  Button,
  StyleSheet
} from "react-native";

const PlaceDetail = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide">
      <SafeAreaView style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" />
          <Button title="Close" />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default PlaceDetail;
