import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MealItem from '../components/MealItem'
import { colors } from '../constants/colors'
import { CATEGORIES, MEALS } from '../data/dummy-data'

function CategoryMealsScreen({ navigation }) {
  const categoryId = navigation.getParam('CategoryId')
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  )
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        imageUrl={item.imageUrl}
        affordability={item.affordability}
      />
    )
  }
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('CategoryId')
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId)
  {
    console.log(categoryId)
  }
  return {
    headerTitle: selectedCategory.title,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
})

export default CategoryMealsScreen
