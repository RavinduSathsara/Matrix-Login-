import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  txt: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    paddingHorizontal: 20,
    color: 'gray',
    borderWidth: 2,
    borderRadius: 50 / 2,
    padding: 10,
  },
  tinyLogo: {
    marginLeft: 110,
    marginBottom: 100,
    marginTop: 40,
    height: 120,
    width: 150,
    alignItems: 'center',
  },
  touch: {
    height: 40,
    margin: 12,
    backgroundColor: '#000',
    borderRadius: 50 / 2,
  },
  btntxt: {
    textAlign: 'center',
    padding: 6,
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
