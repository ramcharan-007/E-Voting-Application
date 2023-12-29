import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import LoginPage from './Screens/Login';
import Dashboard from './Screens/Dashboard';
import AdminPanel from './Screens/AdminPanel';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Election from './Screens/Election';
import ParticipateSection from './Screens/ParticipateSection';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        {/* <Stack.Screen name='Login' component={LoginPage}/> */}
        {/* <Stack.Screen name='Dashboard' component={Dashboard}/> */}
        {/* <Stack.Screen name='AdminPanel' component={AdminPanel} /> */}
        {/* <Stack.Screen name='ElectionScreen' component={Election} /> */}
        <Stack.Screen name='VotingScreen' component={ParticipateSection} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

