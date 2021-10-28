import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

function MealDetailScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
      <Button
        title="Back"
        onPress={() => {
          props.navigation.pop()
        }}
      />
      <Button
        title="Home"
        onPress={() => {
          props.navigation.popToTop()
        }}
      />
      <Button
        title="Replavce"
        onPress={() => {
          props.navigation.replace('Categories')
        }}
      />
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
