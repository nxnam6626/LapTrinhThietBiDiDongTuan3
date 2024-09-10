import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';


const backgroundImage = require('./assets/FirstScreen/Rectangle25.png');
const circleImage = require('./assets/FirstScreen/Ellipse8.png');

const FirstScreen = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

      <View style={styles.contentContainer}>

        <View style={styles.circleContainer}>
          <Image source={circleImage} />
        </View>

        <Text style={styles.title}>GROW YOUR BUSINESS</Text>

        <Text style={styles.description}>
          We will help you to grow your business using online server
        </Text>

        {/* Nút Login và Sign Up */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom:20,
  },
  description: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
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
});

export default FirstScreen;
