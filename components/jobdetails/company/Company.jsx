import React from 'react'
import { View, Text,Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { useCheckImageURL } from '../../../hooks/useCheckImageUrl'
import defaultImage from '../../../assets/default-job.png'

const Company = ({companyLogo,jobTitle,companyName,location}) => {
  const isImage = useCheckImageURL(companyLogo)
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={isImage ? {uri:companyLogo} : defaultImage}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitle}>
        <Text style={styles.jobTitle}>
          {jobTitle}
        </Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={companyName}>
          {companyName} /
        </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company