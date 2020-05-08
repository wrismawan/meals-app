import React from 'react';
import { View, Text, StyleSheet, FlatList, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';

const categoryHandler = (data) => {
    console.log('data: ' + data.title)
}

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={categoryHandler(itemData.item)}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}
            />  
        ) 
    }

    return (
        <FlatList 
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderGridItem}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoriesScreen;
