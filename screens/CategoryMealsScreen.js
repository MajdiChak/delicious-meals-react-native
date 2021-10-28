import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import { Categories } from '../data/data'

function CategoryMealsScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>Category Meal screen id: gitgi</Text>

      <Button
        title="Detail"
        onPress={navigation.push.bind(this, 'MealDetail')}
      />
    </View>
  )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('CategoryId')
  const selectedCategory = Categories.find((cat) => cat.id === categoryId)
  return {
    headerTitle: selectedCategory.title,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CategoryMealsScreen
