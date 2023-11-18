import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

import defaultImage from '../../../../assets/default-job.png'
import { useCheckImageURL } from '../../../../hooks/useCheckImageUrl'

const NearbyJobCard = ({job, handleNavigate}) => {
  const isImage = useCheckImageURL(job.employer_logo)  

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate }>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
        // handle cases in which employer_logo is null
          source= {isImage ? {uri: job.employer_logo} : defaultImage}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
    
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
       <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard