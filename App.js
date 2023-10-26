
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import ShowScreen from './src/ShowScreen';
const Stack = createNativeStackNavigator();

const App =()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}
          options={{
            title: 'Restaurant Search',
            headerTintColor:'#fff',
            headerStyle:{
              backgroundColor:'#8c2641',
            },
          }}
        />
        <Stack.Screen name='Show' component={ShowScreen}
          options={{
            title: 'Show',
            headerTintColor:'#fff',
            headerStyle:{
              backgroundColor:'#8c2641',
            },
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
