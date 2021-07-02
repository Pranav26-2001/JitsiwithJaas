/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {useState} from 'react';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';
import Jitsi from './Jitsi';
import {View, Text, TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import Config from './Config';
const App = () => {
    const [join,setJoin] = useState(false);
    const [room,setRoom] = useState('');
    const [userName,setuserName] = useState('');

    return (
      (join) ? <Jitsi room = {room} user = {userName}/>
      :
      (
        <View>
          <TextInput
              style={styles.input}
              value={room}
              onChangeText={tex => setRoom(tex)}
              placeholder = "Enter Room Name"
            />
            <TextInput
              style={styles.input}
              value={userName}
              onChangeText={tex => setuserName(tex)}
              placeholder = "Enter Your Name"
            />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setJoin(true)}
          >
            <Text style = {{fontWeight:'bold'}}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      )
    );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#40C4FF',
    padding: 10,
  },
  input: {
    textAlign:'center',
    height: 40,
    margin: 12,
    borderWidth: 1,
    fontStyle: 'italic',
  },
});

export default App;
