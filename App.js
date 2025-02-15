// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import SuccessScreen from './screens/SuccessScreen';
import AddBabyScreen from './screens/AddBabyScreen';
import AddProfileScreen from './screens/AddProfileScreen';
import DashboardScreen from './screens/DashboardScreen';
import InsightsScreen from './screens/InsightsScreen';
import RoutineLogsScreen from './screens/RoutineLogsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="AddBaby" component={AddBabyScreen} />
        <Stack.Screen name="AddProfile" component={AddProfileScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Insights" component={InsightsScreen} />
        <Stack.Screen name="RoutineLogs" component={RoutineLogsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
