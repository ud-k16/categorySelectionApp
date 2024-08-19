import {StyleSheet, Text, View} from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WelcomeScreen;
