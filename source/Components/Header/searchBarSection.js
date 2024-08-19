import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Theme} from '../../Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBarSection = ({searchWorker}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputStyle}>
        <MaterialCommunityIcons
          name="magnify"
          size={25}
          color={Theme.colors.grey}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor={Theme.colors.grey}
          onChangeText={text => searchWorker(text)}
        />
      </View>

      <Pressable style={styles.filterIcon}></Pressable>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  filterIcon: {
    backgroundColor: Theme.colors.secondary,
    borderRadius: 8,
    width: '14%',
  },
});

export default SearchBarSection;
