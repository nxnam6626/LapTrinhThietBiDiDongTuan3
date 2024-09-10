import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const eyeImage = require('./assets/ManHinh1d/eye_1.png');

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.header}>LOGIN</Text>
      </View>
      <View style={{ flex: 1, width: '100%' }}>
        <TextInput placeholder="Email" style={styles.input} />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
          />
          <Image source={eyeImage} size={20} style={styles.eyeIcon} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1,
          alignItems: 'center',
          justifyContent: 'center',}}>
        <Text style={{textAlign: 'center',}}>
          When you agree to terms and conditions
        </Text>

        <TouchableOpacity>
          <Text style={{color: 'blue', marginBottom: 20,}}>Forgot your password?</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          Or login with
        </Text>
      </View>

      <View style={styles.socialIconsContainer}>
        <Icon name="facebook" size={30} color="#3b5998" />
        <Icon name="twitter" size={30} color="#00acee" />
        <Icon name="google" size={30} color="#db4437" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#D1F4F6', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  loginButton: {
    backgroundColor: 'red',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
  },

  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default LoginScreen;
