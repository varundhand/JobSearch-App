import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity // we wrap the whole card component in TouchableOpacity because it acts like a button
      style={styles.container(selectedJob, item)}
      // onPress={() => handleCardPress(item)}
      onPress={() => console.log('selectedJob-->', selectedJob, 'item--->', item)}
    >
      <TouchableOpacity style={styles.logoContainer}>
         <Image
          source={{uri: item.employer_logo}}
          resizeMode='contain'
          style={styles.logoImage}
         />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob,item)} numberOfLines={1}>
          {item.job_title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard