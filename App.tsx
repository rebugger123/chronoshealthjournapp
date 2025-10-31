/**
 * ChronosApp
 * Main navigation container with bottom tabs
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View, LogBox } from 'react-native';
import BottomTabs from './src/navigation/BottomTabs';
import { COLORS } from './src/theme/colors';

// Configure LogBox for development only
if (__DEV__) {
  LogBox.ignoreAllLogs(false); // show warnings in dev
}

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
        <BottomTabs />
      </NavigationContainer>
    </View>
  );
}

export default App;