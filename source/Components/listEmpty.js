import {Image, StyleSheet, Text, View} from 'react-native';
import {Theme} from '../Theme';

const ListEmpty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>No Data Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginVertical: 10,
  },

  textStyle: {
    color: Theme.colors.black,
    fontSize: 15,
  },
});

export default ListEmpty;
