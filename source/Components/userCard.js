import {Image, StyleSheet, Text, View} from 'react-native';
import {Theme} from '../Theme';

const UserCard = ({item: user, countryList = []}) => {
  const flagSource = countryList.find(
    value => value.name == user.country,
  )?.flag;
  return (
    <View style={styles.container} key={user.id}>
      <Image source={{uri: user.profile_image}} style={styles.imageStyle} />
      <Image source={{uri: flagSource}} style={styles.flagStyle} />
      <Text style={styles.textStyle}>{user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  flagStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    zIndex: 50,
    position: 'absolute',
    left: 50,
    borderColor: Theme.colors.grey,
    borderWidth: 1,
  },
  textStyle: {
    color: Theme.colors.black,
    marginVertical: 5,
  },
});

export default UserCard;
