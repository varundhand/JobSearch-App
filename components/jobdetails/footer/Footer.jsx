import React from 'react'
import { View, Text,TouchableOpacity,Linking,Image } from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants'

const Footer = ({url}) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image //TODO: Add favourites feature
          source={icons.heartOutline}
          style={styles.likeBtnImage}
          resizeMode='contain'
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyBtn}>
        <Text 
          style={styles.applyBtnText}
          onPress={() => Linking.openURL(url)}  
        >
          Apply for job
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer