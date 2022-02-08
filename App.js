import React, {useState} from 'react';
import styles from './style/main';

import {
  SafeAreaView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.tinyLogo} source={require('./assets/img/bit.png')} />
      <Text style={styles.txt}>BIT Login</Text>
      <TextInput
        placeholderTextColor="gray"
        placeholder="UserName"
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          console.log(userName + '  ' + password);
        }}>
        <Text style={styles.btntxt}>LOG IN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
