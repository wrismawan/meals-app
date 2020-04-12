import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {
    console.log(props)
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
            <Button title="Go to Meals" onPress={() => {
                props.navigation.push('CategoryMeals')
            }} />
        </View>
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
