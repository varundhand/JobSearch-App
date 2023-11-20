import { useCallback,useState } from 'react'

import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter,useLocalSearchParams } from 'expo-router' // useLocalSearchParams
import { Company,JobAbout,JobFooter,JobTabs, ScreenHeaderBtn,Specifics } from '../../components' // changed the naming convention in index.js of components

import { COLORS,SIZES,icons } from '../../constants'
import useFetch from '../../hooks/useFetch'
// import { isLoading } from 'expo-font'

const tabs = ["About", "Qualifications","Responsibilities"]

const JobDetails = () => {
    const params = useLocalSearchParams()
    const router = useRouter()
    
    const [refreshing, setRefreshing] = useState(false);
    const [activetab, setActivetab] = useState(tabs[0]);

    const onRefresh = () => {

    }

  const {data, isLoading, error, refetch} = useFetch('job-details', {
        job_id: params.id,
        // extended_publisher_details: 'false' 
    }
  )
  console.log(params.id)

    // const handleShare = () => { //TODO: add share functionality

    // }

//   console.log(data)

    // const data = [12,3,4,5]

  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen
            options={{
                headerStyle: {backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerBackVisible:false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension= "60%"
                        handlePress={() => router.back()}
                    />
                    ),
                headerRight: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.share}
                        dimension="60%"
                        handlePress={() => console.log("share button clicked")}
                    />
                ),
                headerTitle: ''
            }}
        />

        <>
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl
                refreshing={refreshing} onRefresh={onRefresh}
            />}> 
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.tertiary}/>
                ) : error ? (
                    <Text>Something went wrong :/</Text>
                ) : data.length === 0 ? (
                    <Text>We dont have the sufficient data at the moment.</Text>
                ) : (
                    <View style={{padding: SIZES.medium, paddingBottom:100}}>
                        <Company
                            companyLogo={data[0].employer_logo}
                            jobTitle={data[0].job_title}
                            companyName={data[0].employer_name}
                            location={data[0].estimated_salaries[0].location}
                        />

                        <JobTabs
                            tabs={tabs}
                            activetab={activetab}
                            setActivetab={setActivetab}
                        />
                    </View>
                )}
            </ScrollView>
        </>
    </SafeAreaView>
  ) 
}

export default JobDetails