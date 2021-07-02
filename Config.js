/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const Config = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    fetch('http://192.168.21.124:5000/token', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Pranav',
      email: 'developer.pranav19@gmail.com',
      room: 'App Discussion',
    }),
  })
      .then((response) => response.text())
      .then((text) => setToken(text))
      .catch((error) => console.error(error));
  }, []);

  console.log(token);
    return (
      <View>
        <Text> {token} </Text>
      </View>
    );
};

export default Config;
