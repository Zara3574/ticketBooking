import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TabNavigation from './TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import GetTicket from '../screens/GetTicket/GetTicket';
import FilteredREsults from '../screens/FilteredResults/FilteredREsults';
import ShowTimesScreen from '../screens/ShowTimeScreen/ShowTimeScreen';


const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Nav" component={TabNavigation} />
                <Stack.Screen name="FilteredResults" component={FilteredREsults} />
                <Stack.Screen name="Getticket" component={GetTicket} />
                <Stack.Screen name="ShowTimeSreen" component={ShowTimesScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MainStack;