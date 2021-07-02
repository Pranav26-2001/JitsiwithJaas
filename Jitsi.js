/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';

const Jitsi = (props) => {
  // const [jwt, setJwt] = useState('');
  useEffect(() => {
    fetch('http://192.168.21.124:5000/token', {
      method: 'POST',
      body: JSON.stringify({
        name: 'pranav',
        email:'developer.pranav19@gmail.com',
        room: 'roomsample',
      }),
    })
      .then((response) => response.json())
      .then((text) => {
        const options = {
          // eslint-disable-next-line prettier/prettier
          room:'vpaas-magic-cookie-f389da4afa464d6e86de9de6736143a9/roomsample',
          token: 'eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtZjM4OWRhNGFmYTQ2NGQ2ZTg2ZGU5ZGU2NzM2MTQzYTkvMmRlMzJlLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImV4cCI6MTYyNTIzMDA2MSwibmJmIjoxNjI1MjIyODU2LCJpc3MiOiJjaGF0Iiwicm9vbSI6IioiLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtZjM4OWRhNGFmYTQ2NGQ2ZTg2ZGU5ZGU2NzM2MTQzYTkiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJtb2RlcmF0b3IiOnRydWUsIm5hbWUiOiJ2eW9tZ3VwdGE0NTYiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTAxMDAzNDcyMDk5ODEwMTkyMzkzIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJ2eW9tZ3VwdGE0NTZAZ21haWwuY29tIn19fQ.e2WEC7_WtlveMRoToDhUJvuJ_536QoA6RQLluetzisIJj3iZD5PY8APaImO2uRCKdwjvkEm82r13TQ2LqWZE2aolKMYMI9LT2hHVrep2wv5wrF_Q3Qv_XUTkPYKxBMDCPD9KV_zRTHQO9oxV17uIYO7W_dF_tXcQ73VC0HsiONRkXZwuQH5XByqqG8IL24-eEMtPQ5CxB3NgH28Hj-rzcAmTCRIJgIi3ve6Mr-uA60qmok2pxN7KQr8oOTzb2GMXfZtYm5SnQQYPv06lqayPAU2Pb5JNxZDReo-7Ybc_NSWI8s8RzGri6J86BiNsTMOs0hT0tvBFnNc2Q758PF9yxA',
          audioMuted: false,
          audioOnly: false,
          videoMuted: false,
          subject: 'String',
        };
        //const params = {jwt: jwt};
        const room = 'vpaas-magic-cookie-f389da4afa464d6e86de9de6736143a9/roomsample';
        const serverUrl = 'https://8x8.vc/';
        const url = serverUrl; // here you need to give join url + room name
        const userInfo = {
          displayName: 'vyomgupta456',
          email: 'vyomgupta456@gmail.com',
          avatar: '',
          id: 'google-oauth2|101003472099810192393',
        };
        JitsiMeet.call(url, userInfo, options);
      })
      .catch((error) => console.error(error));
  });
  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    console.log(nativeEvent);
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log(nativeEvent);
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log(nativeEvent);
  }
  return (
    <JitsiMeetView
    onConferenceTerminated={e => onConferenceTerminated(e)}
    onConferenceJoined={e => onConferenceJoined(e)}
    onConferenceWillJoin={e => onConferenceWillJoin(e)}
      style={{
        flex: 0.98,
        height: '100%',
        width: '100%',
      }}
    />
  );
};

export default Jitsi;
