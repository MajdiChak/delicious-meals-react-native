import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CategoryItem = ({ itemData, onSelect }) => {
  return (
    <TouchableOpacity
      style={[styles.gridItem, { backgroundColor: itemData.color }]}
      onPress={onSelect}
    >
      <View>
        <Text style={styles.title}>{itemData.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 15,
  },
  title: { fontSize: 22, fontWeight: 'bold' },
})

export default CategoryItem
