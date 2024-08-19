import React from 'react';
import {Categories} from '../SampleData/Categories';
import {workerList} from '../SampleData/WorkerList';
import {CountryList} from '../SampleData/CountryList';

const useCategories = () => {
  const [state, setState] = React.useState({
    selectedCategory: '',
    categories: Categories,
    workerListReadOnly: workerList,
    workerList: workerList,
    countryList: CountryList,
  });

  //function that changes selected category in state
  const changeCategory = id => {
    console.log('change Cantegory to id ', id);

    setState(prev => ({
      ...prev,
      selectedCategory: id,
    }));
  };

  //worker list updated based on category selected
  const sortWorkerListBasedOnCategory = () => {
    //finding the worker role of the id selected
    const selectedRole = state.categories.find(
      value => value.id == state.selectedCategory,
    )?.worker_role;
    //filtering workerList with worker role selected
    const updatedWorkerList = state.workerListReadOnly.filter(
      value => value.role == selectedRole,
    );
    //updating worker list to display
    setState(prev => ({
      ...prev,
      workerList: updatedWorkerList,
    }));
  };

  //worker list updated based on search text
  const sortWorkerListBasedOnSearchText = searchText => {
    //filtering list that holds search text in three props
    const updatedWorkerList = state.workerListReadOnly.filter(value => {
      const combinedText = value.name + value.role + value.country;
      return combinedText.toUpperCase().includes(searchText.toUpperCase());
    });
    //updating worker list to display
    setState(prev => ({
      ...prev,
      workerList: updatedWorkerList,
    }));
  };

  React.useEffect(() => {
    state.selectedCategory && sortWorkerListBasedOnCategory();
  }, [state.selectedCategory]);

  return {changeCategory, sortWorkerListBasedOnSearchText, ...state};
};

export default useCategories;
