import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function MealDetailScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
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

export default MealDetailScreen