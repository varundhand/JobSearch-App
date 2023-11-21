import React from 'react'

import styles from './linkBtn.styles'
import { View,TouchableOpacity,Text } from 'react-native'

const LinkBtn = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>About Company ➡️</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LinkBtn