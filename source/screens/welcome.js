import {StyleSheet, Text, View} from 'react-native';
import {Theme} from '../Theme';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    color: Theme.colors.black,
    alignSelf: 'center',
  },
});

export default WelcomeScreen;
