import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image
} from 'react-native';

// import HomeScreen from './src/components/Home'
// import DetailsScreen from './src/components/Detail'
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer'
import MyApp from './src/components/Navigation';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>
    )
  }
}

// const HomeNavigator = createStackNavigator({
//   Home: HomeScreen,
// },
//   {
//     defaultNavigationOptions: ({ navigation }) => {
//       return {
//         headerStyle: {
//           backgroundColor: '#3a9ad3'
//         },
//         headerTitle: 'Home',
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//           textAlign: 'center',
//           flex: 1
//         },
//         headerLeft: (
//           <Button
//             title="Open"
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//         headerRight: (
//           <View />
//         )
//       }
//     }
//   }
// )

// const DetailsNavigator = createStackNavigator({
//   Details: DetailsScreen,
// },
//   {
//     defaultNavigationOptions: ({ navigate }) => {
//       return {
//         headerStyle: {
//           backgroundColor: '#3a9ad3'
//         },
//         headerTitle: 'Details',
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//           textAlign: 'center',
//           flex: 1
//         },
//         headerLeft: (
//           <Button
//             title="Open"
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//         headerRight: (
//           <View />
//         )
//       }
//     }
//   }
// )

// const DrawerNavigator = createDrawerNavigator({
//   Home: HomeNavigator,
//   Details: DetailsNavigator,
// });

// const MyApp = createAppContainer(DrawerNavigator);

// export default <Provider store={store}>{App}</Provider>

