import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

// import {LinearGradient} from 'expo-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient'

const Welcome = () => {
  const router = useRouter()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>
          Hello{' '} 
          {/* <LinearGradient
            colors={['#00FFFF', '#00FF00']} // Define your gradient colors
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          > */}
            <Text style={{ fontFamily: 'DMBold' }}>Varun</Text>
          {/* </LinearGradient> */}
        </Text>
        
      </View>
    </View>
  )
}

export default Welcome