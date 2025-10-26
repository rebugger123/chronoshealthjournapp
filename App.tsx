/**
 * ChronosApp
 * Main navigation container with bottom tabs
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, View, LogBox } from 'react-native';
import JournalScreen from './JournalScreen';
import PastEntriesScreen from './PastEntriesScreen';
import { COLORS } from './src/theme/colors';
import TabBarIcon from './src/components/TabBarIcon';

// Configure LogBox for development only
if (__DEV__) {
  LogBox.ignoreAllLogs(false); // show warnings in dev
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            primary: COLORS.foreground,
            background: COLORS.background,
            card: COLORS.background,
            text: COLORS.foreground,
            border: COLORS.background,
            notification: COLORS.foreground,
          },
        }}
      >
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: COLORS.background,
              borderTopColor: COLORS.background,
              borderTopWidth: 0,
              height: 60,
              paddingBottom: 8,
              paddingTop: 8,
              bottom: 35,
            },
            tabBarActiveTintColor: COLORS.foreground,
            tabBarInactiveTintColor: COLORS.foreground,
            tabBarLabelStyle: {
              color: COLORS.foreground,
              fontSize: 12,
              fontWeight: '600',
              fontFamily: 'Alegreya-Bold',
              letterSpacing: 0.5,
            },
            headerStyle: {
              backgroundColor: COLORS.background,
              borderBottomColor: COLORS.background,
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              color: COLORS.foreground,
              fontSize: 18,
              fontWeight: '700',
              fontFamily: 'Alegreya-Bold',
              letterSpacing: 0.3,
            },
            headerTintColor: COLORS.foreground,
            sceneContainerStyle: {
              backgroundColor: COLORS.background,
            },
          }}
        >
          <Tab.Screen
            name="Journal"
            component={JournalScreen}
            options={{
              title: 'Journal',
              headerTitle: 'JOURNAL',
              tabBarShowLabel: false,
              tabBarIcon: ({ focused, color, size, route }) => (
                <TabBarIcon 
                  routeName={route?.name || ''}
                  focused={focused}
                  color={color}
                  size={size ?? 30}
                />
              ),
            }}
          />
          <Tab.Screen
            name="History"
            component={PastEntriesScreen}
            options={{
              title: 'History',
              headerTitle: 'HISTORY',
              tabBarShowLabel: false,
              tabBarIcon: ({ focused, color, size, route }) => (
                <TabBarIcon 
                  routeName={route?.name || ''}
                  focused={focused}
                  color={color}
                  size={size ?? 30}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;