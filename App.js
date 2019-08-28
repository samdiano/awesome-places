import React, { Fragment, Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  TextInput,
  Text,
  StatusBar
} from "react-native";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import PlaceImage from "./src/assets/beautiful-place.jpg"

class App extends Component {
  state = {
    placeName: "",
    places: [],
    selectedPlace: null
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: [prevState.placeName],
          image: PlaceImage
        })
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    })
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter((place, i) => {
    //       return place.key !== key;
    //     })
    //   };
    // });
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <PlaceDetail selectedPlace={this.state.selectedPlace} />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.placeInput}
              placeholder="An Awesome Place"
              value={this.state.placeName}
              onChangeText={this.placeNameChangedHandler}
            />
            <Button
              title="Add"
              style={styles.placeButton}
              onPress={this.placeSubmitHandler}
            />
          </View>
          <PlaceList
            places={this.state.places}
            onItemSelected={this.placeSelectedHandler}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 26,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  inputContainer: {
    // flex: 1,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "90%"
  }
});

export default App;
