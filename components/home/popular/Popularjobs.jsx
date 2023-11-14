import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants'

import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hooks/useFetch'

const Popularjobs = () => {
  const router = useRouter()
  const [data, setdata] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {

  }
  // const {data, isLoading, error} = useFetch(
  //   'search',
  //   {
  //     query: 'React developer',
  //     num_pages: '1'
  //   }
  // );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.tertiary} /> // react native built in loader
        ) : error ? (
          <Text>Something went wrong :/</Text>
        ) : (
          <FlatList
            data={[1,2,3,4,5]}
            renderItem={({item}) => (
              <PopularJobCard
                item={item} 
                handleCardPress={handleCardPress}
                // selectedJob={selectedJob}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs