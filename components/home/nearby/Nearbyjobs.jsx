import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style'
import {COLORS} from '../../../constants'

import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hooks/useFetch'

const Nearbyjobs = () => {
  const router = useRouter()

  // const data = [1,2,3,4,5]
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  const {data, isLoading, error} = useFetch(
    'search',
    {
      query: 'React developer',
      num_pages: '1'
    }
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS. tertiary} /> // react native  built in loader
        ) : error ? (
          <Text>Something went wrong :/</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              // key={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs