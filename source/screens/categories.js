import {FlatList, StyleSheet, View} from 'react-native';
import Header from '../Components/Header';
import {Theme} from '../Theme';
import useCategories from '../Hooks/useCategories';
import UserCard from '../Components/userCard';
import ListEmpty from '../Components/listEmpty';

const Categories = () => {
  const {
    categories,
    changeCategory,
    workerList,
    selectedCategory,
    countryList,
    sortWorkerListBasedOnSearchText,
  } = useCategories();

  return (
    <View style={styles.container}>
      <Header
        categories={categories}
        changeCategory={changeCategory}
        selectedCategory={selectedCategory}
        searchWorker={sortWorkerListBasedOnSearchText}
      />
      <FlatList
        keyExtractor={props => props.id}
        data={workerList}
        renderItem={props => <UserCard {...props} countryList={countryList} />}
        ListEmptyComponent={ListEmpty}
        numColumns={4}
        style={styles.workerListContainer}
        columnWrapperStyle={styles.listColumnStyle}
        contentContainerStyle={styles.listRowStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
  workerListContainer: {
    alignSelf: 'center',
    paddingTop: 10,
    width: '95%',
  },
  listColumnStyle: {gap: 10},
  listRowStyle: {gap: 10},
});

export default Categories;
