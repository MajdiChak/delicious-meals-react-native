import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function CategoryMealsScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>Category Meal screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CategoryMealsScreen
