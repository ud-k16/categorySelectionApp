import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Theme} from '../../Theme';

const SearchBarSection = ({searchWorker}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Search"
        placeholderTextColor={Theme.colors.grey}
        onChangeText={text => searchWorker(text)}
      />
      <Pressable style={styles.filterIcon}>
        <Text
          style={{
            color: Theme.colors.grey,
            textAlign: 'center',
            paddingTop: 2,
          }}>
          filter icon
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputStyle: {
    backgroundColor: Theme.colors.secondary,
    borderRadius: 8,
    fontSize: 16,
    width: '82%',
  },
  filterIcon: {
    backgroundColor: Theme.colors.secondary,
    borderRadius: 8,
    width: '14%',
  },
});

export default SearchBarSection;
