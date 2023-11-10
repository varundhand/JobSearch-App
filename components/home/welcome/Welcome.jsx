import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

import TypeWriter from 'react-native-typewriter'
// import {LinearGradient} from 'expo-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient'

const Welcome = () => {
  const router = useRouter()
  return (
    <View>
      {/* Header */}
      <View style={styles.container}>
        <Text style={styles.userName}>
          Hello{' '} 
            <Text style={{ fontFamily: 'DMBold' }}>Varun</Text>
        </Text>
        <TypeWriter
          style={styles.welcomeMessage}
          typing={1}  
          maxDelay={100}
          minDelay={50}
          delay={200}
        >
          Find your prefect job!
        </TypeWriter>
      </View>

      {/* Searchbar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => {}}
            placeholder='What are you looking for?'
            placeholderTextColor='darkgrey'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            // resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome