
import { StyleSheet, View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import PersonalInfo from './components/PersonalInfo';
import MovieBooking from './components/MovieBooking';

export default function App() {
  return (
    <View style={styles.screencontainer}>
      <View style={styles.imgview}>
        <Image
          source={require('./assets/spider-man.jpg')}
          style={styles.img}
          resizeMode="contain"
        />
      </View>

      <Swiper showsButtons={true}>
        <PersonalInfo screenstyle={styles.screen} />
        <MovieBooking screenstyle={styles.screen} />
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  screencontainer: {
    flex: 1,
    padding: '1%',
    backgroundColor: 'lightgrey',
  },
  imgview: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  img: {
    width: 250,
    height: 150,
  },
  screen: {
    flex: 1,
    alignItems: 'flex-start',
    padding: '1%',
  },
});
