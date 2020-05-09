import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES, MEALS }  from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
    const categoryId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(categoryId) >= 0
    );
    
    return (
        <MealList 
            listData={displayedMeals}
            navigation={props.navigation}
        />
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId);

    return {
        headerTitle: selectedCategory.title
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoryMealsScreen;
