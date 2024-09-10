import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';

const circleImage = require('./assets/ManHinh1b/Vector.png');

const Manhinh_1a = () => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.header}>CODE</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>VERIFICATION</Text>
        <Text style={styles.description}>
          Enter ontime password sent on ++849092605798
        </Text>
      </View>
      <View style={styles.container}>
        {/* Tạo 6 ô vuông liên tiếp */}
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1F4F6',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 36,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 60,
  },
  description: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#FFC107',
    padding: 12,
    marginHorizontal: 4,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  container: {
    flexDirection: 'row', 
    padding: 20,
  },
  square: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',

  },
});

export default Manhinh_1a;
