import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
} from 'react-native';

const App = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.tinyLogo} source={require('./assets/img/bit.png')} />
      <Text style={styles.txt}>Bit Login</Text>
      <TextInput
        placeholder="UserName"
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <View style={styles.btn}>
        <Button
          title="Login"
          onPress={() => {
            console.log(userName + '  ' + password);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  txt: {
    fontSize: 40,

    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    paddingHorizontal: 20,

    borderWidth: 2,
    borderRadius: 50 / 2,
    padding: 10,
  },
  tinyLogo: {
    margin: 50,
  },
  btn: {
    margin: 20,
  },
});

export default App;
