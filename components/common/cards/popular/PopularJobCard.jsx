import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

import defaultImage from '../../../../assets/default-job.png'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity // we wrap the whole card component in TouchableOpacity because it acts like a button
      style={styles.container(selectedJob, item)}
      // onPress={() => handleCardPress(item)}
      onPress={() => console.log('selectedJob-->', selectedJob, 'item--->', item)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        {/* <Image
          source={defaultImage}
        /> */}
        <Image
        // handle cases in which employer_logo is null
          source= {item.employer_logo !== null ? { uri: item.employer_logo } : defaultImage} 
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob,item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>
          {item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard