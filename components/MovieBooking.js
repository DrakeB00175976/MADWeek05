
import {Text, SafeAreaView, TextInput, StyleSheet, View, Switch, Button, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import DatePicker from '../components/DatePicker';

import { useState } from 'react';

export default function MovieBooking({ screenstyle }) {
  const [movieChoice, setMovieChoice] = useState("");
  const [totalTickets, setTotaltickets] = useState(1);
  const [balcony, setBalcony] = useState(false);
  const [movieDate, setMoviedate] = useState(new Date());

  // TODO 1:
  // Create a movieList state variable using useState().
  // Add an array of three movie objects.
  // Each movie should have an id, title and age.
  const [movieList, setMovieList] = useState([
    { id: 1, title: 'Kneecap', age: 16 },
    { id: 2, title: 'Joker, Folie a Deux', age: 18 },
    { id: 3, title: 'Deadpool and Wolverine', age: 12 }
  ]);

  return (
    <View style={screenstyle}>
      <Text style={styles.label}>Choose Movie</Text>

      <Picker
        style={styles.textbox}
        selectedValue={movieChoice}
        onValueChange={(itemValue) => setMovieChoice(itemValue)}>
        {/* TODO 2:
            Use the map() function to loop through movieList.
            Return a Picker.Item for each movie.
            Use movie.title for the label and value.
            Use movie.id as the key.
        */}
        {movieList.map((movie) => {
          return (
            <Picker.Item
              key={movie.id}
              label={movie.title}
              value={movie.title}
            />
          );
        })}
      </Picker>

      <View style={{ width: "100%" }}>
        <DatePicker
          thisDate={movieDate}
          setThisdate={setMoviedate}
          datelabel="Showing Date"
        />
      </View>

      <Text style={styles.label}>
        Number of Tickets: {totalTickets}
      </Text>

      <Slider
        minimumValue={0}
        maximumValue={5}
        step={1}
        style={styles.sliderstyle}
        onValueChange={setTotaltickets}
      />

      <Text style={styles.label}>Balcony</Text>

      <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
        <Switch
          value={balcony}
          onValueChange={setBalcony}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderstyle: {
    width: "100%",
    marginBottom: 14
  },

  label: {
    flexDirection: "row",
    fontSize: 24,
    fontWeight: "bold"
  },

  textbox: {
    flexDirection: "row",
    borderRadius: 5,
    padding: 7,
    width: "100%",
    marginBottom: 14,
    backgroundColor: "white"
  }
});
