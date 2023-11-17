import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

import defaultImage from '../../../../assets/default-job.png'
import { useCheckImageURL } from '../../../../hooks/useCheckImageUrl'

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  // const isImageUrl = useCheckImageUrl(item.employer_logo)
  // console.log('ImageUrl---> ', item.employer_logo)
  // console.log('checking---> ', isImageUrl)
  const isImage = useCheckImageURL(item.employer_logo)
  console.log(isImage,item.employer_logo)

  return (
    <TouchableOpacity // we wrap the whole card component in TouchableOpacity because it acts like a button
      style={styles.container(selectedJob, item)}
      // onPress={() => handleCardPress(item)}
      onPress={() => console.log('selectedJob-->', selectedJob, 'item--->', item)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
        // handle cases in which employer_logo is null
          source= {isImage ? {uri: item.employer_logo} : defaultImage}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob,item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob,item)}>
            {item?.job_publisher} - {}
          </Text>
          <Text style={styles.location}>
            {item.job_country}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard