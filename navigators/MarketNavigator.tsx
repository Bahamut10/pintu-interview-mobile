import { createStackNavigator } from "@react-navigation/stack";
import SearchBar from "../components/Searchbar";
import SortButton from "../components/SortButton";
import Market from "../screens/Market";

const Stack = createStackNavigator();

const MarketNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="News List"
        component={Market}
        options={{
          title: '',
          headerLeft: () => <SearchBar />,
          headerRight: () => <SortButton />,
          headerStyle: {
            shadowOpacity: 0,
          }
          // headerStyle: {
          //   paddingHorizontal: 20
          // }
        }}
      />
    </Stack.Navigator>
  );
}

const screenOptions = {
  // cardStyle: {
  //   backgroundColor: color.primary
  // },
  // headerStyle: {
  //   backgroundColor: color.primary,
  // },
  // headerTintColor: color.secondary,
};

export default MarketNavigator;
