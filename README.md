# Week 5 Lab - A React Native Cinema Booking Application

Goals
The goals for this weeks lab are

- To build on React Native UI Components knowledge
- To use a Swiper to access different screens
- To use a Dropdown "Picker" to select different items
- To use a DateTimePicker to access the calendar function of the device
- To use the Javascript array map function to populate a picker with data from a json array

This app is designed to be completed by cloning the repository onto a Desktop computer but can also be completed using Expo.dev as a Snack. If using the Snack approach, you must create a Snack, and import the repo. After importing git repo into your snack, create a folder called assets and add movieV3.png into that folder.

If your Expo Go on your mobile doesn't support SDK 55 and requires 57, uninstall that app. Visit expo.dev/go. Choose SDK version 55 and your mobile OS and install that apk.

Working on VS Code: 

Step 1: Open command prompt \
Step 2: cd to Documents \
Step 3: Type ``` git clone https://github.com/BusinessInformationSystemBlanch/MADWeek05.git ``` \
Step 4: cd to MADWeek05 \
Step 5: Type ``` npm install expo -g ``` \
Step 6: Open your project in VS Code. \
Step 7: Click on View -- Open View -- Terminal \
Step 8: Type  ``` Set-ExecutionPolicy -Scope CurrentUser Unrestricted   ``` on the terminal, so the current user can run expo project.  \
Step 9: Type ``` npx expo install react-dom react-native-web ``` to enable web preview of the app. \
Step 10: Tyep ``` npx expo start  ``` to start the project \

### Web preview notes

- The image reference in App.js must match the existing assets/spider-man.jpg file.
- The entry point imports setimmediate so the existing Swiper arrow buttons work in browsers.
- Screen padding is reduced to 1% to fit the booking form in a maximised desktop browser without a ScrollView; the date section is grouped to prevent overlapping controls.
- The image height is 150 pixels with an 8-pixel top margin, and the slider bottom margin is 14 pixels, to leave room for the forms below browser toolbars.
- The existing native DateTimePicker does not support web. Test date selection on Android or iOS; its component and props are unchanged.


# Part 1

This app includes the ability to add additional screens using a Swiper. So far just one screen for the Cinema booking (PersonalInfo) has been included. To include a second screen MovieBooking we need to do two things

- Import the MovieBooking component from the file ./components/MovieBooking.js
- Add the component inside the `<Swiper></Swiper>` Component - alongside the PersonalInfo component.
  Do both of these in an identical fashion to the way in which the PersonalInfo component has been added. I.e. pass screenstyle={styles.screen} as a prop.
  When you get this working, commit and push your changes.

# Part 2

Change the image at the top of the screen to something else associated with Movies. To do this, download a file (jpg or png) from the web. Save it (or upload it) to the assets folder and then change the reference to the file within App.js inside the IMG tag.
When you get this working, commit and push your changes.

# Part 3

Add a Toggle Switch to the MovieBooking Component. To do this:

- Add a new useState hook to the top of the file with the other useState hooks. Call this [balcony, setBalcony] set this initiall to false `useState(false)` on the right side of the equals.
- Add a Switch component to the list of components being imported from react-native at the top of the Screen
- Add the `<Switch/>` in the placeholder provided at the bottom of the MovieBooking Component - pass the following props to the Switch component - **_value={balcony} onValueChange={setBalcony}_** this first ties the value of the Switch to whatever is stored in the balcony useState hook. The second make sure that whenever the toggle switch changes that the new value (true or false) is passed to the balcony state using the setBalcony hook function.
  When you get this working, commit and push your changes.

# Part 4

Replace the hardcoded items in the dropdown picker list with values from a Json array. To do this add the following snippet of code inside the MovieBooking function but before the return statement - after the other useState hooks.

```
const [movieList, setMovieList] = useState([
   {'id': 1, "title": "Kneecap", "age": 16},
   {'id' : 2, "title": "Joker, Folie a Deux", "age": 18},
   {'id': 3, "title": "Deadpool and Wolverine", "age": 12}
  ]);
```

This code sets up an array of movies, each one with it's own unique key and some information about each movie. Currently the dropdown `<Picker></Picker>` component has two hard coded movies in the list inside `<Picker.Item></Picker.Item>` tags. We need to **_replace_** these with a function which will loop through each item in our movieList array and add a new `<Picker.Item>` for each element in the array. The following snippet of code will loop through each element in the array.

```
{ movieList.map((movie) => {
          return //add code here which will produce an appropriate <Picker.Item> tag for each movie.
                 //instead of hard coding the label and value use {movie.title}
          })}
```
