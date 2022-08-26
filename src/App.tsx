import React from 'react';
import ReactXnft, { Tab, View } from 'react-xnft';
import { HomeIcon } from './icons/Home';
import { Home } from './pages/Home';

//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on('connect', () => {
  // no-op
});

export function App() {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#1A1A1A',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        fotnFamily: 'Montserrat',
      }}
    >
      <Tab.Navigator
        style={{
          backgroundColor: '#1A1A1A',
        }}
        options={({ route }) => {
          return {
            tabBarIcon: ({ focused }) => {
              const color = focused ? '#f9fafb' : '#6b7280';
              return <Tab.Icon element={<HomeIcon fill={color} />} />;
            },
            tabBarActiveTintColor: '#f9fafb',
            tabBarInactiveTintColor: '#6b7280',
          };
        }}
      >
        <Tab.Screen name={'home'} component={() => <Home />} />
      </Tab.Navigator>
    </View>
  );
}
