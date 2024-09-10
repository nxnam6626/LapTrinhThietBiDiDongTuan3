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
      <View style={styles.circleContainer}>
        <Image source={circleImage} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>FORGET PASSWORD</Text>
        <Text style={styles.description}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Image
          source={require('./assets/ManHinh1b/email-icon.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
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
  circleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 24,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor:'#ccc'


  },
  icon: {
    width: 40,
    height: 40,
  },
  input: {
    flex: 1, // Chiếm toàn bộ không gian còn lại
    fontSize: 20,
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
});

export default Manhinh_1a;
