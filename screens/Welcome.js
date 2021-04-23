import React from 'react';
import { ImageBackground, View, StyleSheet, Text, Image } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function Welcome() {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.jpg')} />
        <Text style={styles.tagline}>Give&Get</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
    color: colors.primary,
  },
});

export default Welcome;