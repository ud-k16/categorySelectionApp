import {FlatList, StyleSheet, View} from 'react-native';
import {Theme} from '../../Theme';
import CategoryCard from './CategoryCard';
import SearchBarSection from './searchBarSection';

const Header = ({
  categories,
  changeCategory,
  selectedCategory,
  searchWorker,
}) => {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={props => (
          <CategoryCard
            {...props}
            changeCategory={changeCategory}
            selectedCategory={selectedCategory}
          />
        )}
        horizontal
        style={styles.categoryContainer}
        scrollEnabled
      />
      <SearchBarSection searchWorker={searchWorker} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  categoryContainer: {
    backgroundColor: Theme.colors.secondary,
    paddingTop: 10,
    paddingHorizontal: 2,
  },
});

export default Header;
