import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../constants/colors'

import { Categories } from '../data/data'
import CategoryMealsScreen from './CategoryMealsScreen'

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: { CategoryId: itemData.item.id },
          })
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Categories}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Home',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    backgroundColor: colors.secondary,
  },
})

export default CategoriesScreen
