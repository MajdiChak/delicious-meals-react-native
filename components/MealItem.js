import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { colors } from '../constants/colors'

function MealItem(props) {
  return (
    <TouchableOpacity>
      <View style={styles.mealItem}>
        <View style={styles.mealContent}>
          <ImageBackground
            source={{ uri: props.imageUrl }}
            style={styles.bgImage}
          >
            <Text numberOfLines={1} style={styles.mealTitle}>
              {props.title}
            </Text>
          </ImageBackground>
        </View>

        <View style={styles.mealFooter}>
          <Text>{props.duration}</Text>
          <Text>{props.complexity}</Text>
          <Text>{props.affordability}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 10,
    marginBottom: 0,
    backgroundColor: colors.gray,
    height: 180,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mealTitle: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    fontSize: 18,
    padding: 4,
    textAlign: 'center',
  },
  mealContent: {
    height: '80%',
  },
  mealFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: 5,
  },
  bgImage: { width: '100%', height: '100%', justifyContent: 'flex-end' },
})
export default MealItem
