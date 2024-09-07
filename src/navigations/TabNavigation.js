import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabNavigation = () => {
    const bottomNavItemsData = [
        { title: "Dashboard", icon: "th-large" },
        { title: "Watch", icon: "youtube-play" },
        { title: "Media Library", icon: "folder" },
        { title: "More", icon: "list" },
    ];

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    borderRadius: 30,
                    backgroundColor: '#2e2e2d',
                    height: 65, // Adjust the height of the tab bar
                    justifyContent: 'center',
                    paddingHorizontal:20,
                     // Center items vertically
                },
                tabBarActiveTintColor: '#ffffff', // Active icon and text color
                tabBarInactiveTintColor: '#bfbfbd', // Inactive icon and text color
                tabBarLabelStyle: {
                    fontSize: 12, // Adjust the font size
                    marginBottom: 15,
                     // Center the label with the icon
                },
                tabBarIconStyle: {
                    marginTop:10,
                    marginBottom: 0, // Align icon and text centrally
                },
            }}
        >
            {
                bottomNavItemsData.map((item, index) => (
                    <Tab.Screen
                        key={index}
                        name={item.title}
                        component={HomeScreen}
                        options={{
                            tabBarLabel: item.title,
                            tabBarIcon: ({ color, focused }) => (
                                <Icon
                                    name={item.icon}
                                    size={20} // Adjust icon size as needed
                                    color={color}
                                />
                            ),
                        }}
                    />
                ))
            }
        </Tab.Navigator>
    );
}

export default TabNavigation;
