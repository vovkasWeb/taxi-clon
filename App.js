import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from './Home';
import Settings from './Settings';
import { StyleSheet, Text, View } from "react-native";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
	<>
     <NavigationContainer>
      <Drawer.Navigator style={styles.o} initialRouteName="Home" >
        <Drawer.Screen name="Home" component={Home} />
		  
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
	 </>
  );
}

const styles = StyleSheet.create({
  o: {

    backgroundColor: "#fff",

  },
});