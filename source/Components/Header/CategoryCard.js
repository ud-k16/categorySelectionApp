import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Theme} from '../../Theme';

const CategoryCard = ({
  item: category,
  changeCategory = () => {},
  selectedCategory,
}) => {
  const isSelected = selectedCategory == category.id;
  return (
    <Pressable
      style={[styles.container, isSelected && styles.selectedStyle]}
      onPress={() => {
        changeCategory(category.id);
      }}>
      <Image source={{uri: category.icon}} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{category.worker_role}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  selectedStyle: {
    borderColor: Theme.colors.lightBlue,
    borderWidth: 1,
    borderRadius: 2,
  },
  textStyle: {
    fontSize: 10,
  },
  imageStyle: {
    width: 75,
    height: 70,
    borderRadius: 40,
  },
});

export default CategoryCard;
