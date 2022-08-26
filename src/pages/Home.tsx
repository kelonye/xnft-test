import React, { useState } from 'react';
import { View, Text } from 'react-xnft';

export function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <View
      style={{
        height: '100%',
        background: clicked ? 'red' : 'blue',
        padding: '0px 20px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}
      onClick={() => setClicked((clicked) => !clicked)}
    >
      <Text>Click me</Text>
    </View>
  );
}
