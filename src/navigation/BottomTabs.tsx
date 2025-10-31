import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JournalScreen from '../../JournalScreen';
import PastEntriesScreen from '../../PastEntriesScreen';
import { icons } from '../assets/icons';
import { COLORS } from '../theme/colors';

const Tab = createBottomTabNavigator();

const TabIcon =
  (img: any) =>
  ({ color, size }: { color: string; size: number }) =>
    (
      <Image
        source={img}                // module reference; NOT a string path
        style={{ width: size, height: size, tintColor: color, resizeMode: 'contain' }}
      />
    );

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
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
        sceneContainerStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Tab.Screen
        name="Journal"
        component={JournalScreen}
        options={{ tabBarIcon: TabIcon(icons.journal) }}
      />
      <Tab.Screen
        name="Past"
        component={PastEntriesScreen}
        options={{ tabBarIcon: TabIcon(icons.past) }}
      />
    </Tab.Navigator>
  );
}

