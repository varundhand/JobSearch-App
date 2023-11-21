import { useCallback,useState } from 'react'

import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl,TouchableOpacity} from 'react-native'
import { Stack, useRouter,useLocalSearchParams, Link } from 'expo-router' // useLocalSearchParams
import { Company,JobAbout,JobFooter,JobTabs, ScreenHeaderBtn,Specifics, LinkBtn } from '../../components' // changed the naming convention in index.js of components

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

//   //TODO: make separate component for this
//     const LinkButton = () => {
//         return (
//             <View style={{margin:SIZES.small}}>
//                 <TouchableOpacity
//                     style={{paddingVertical:SIZES.medium, paddingHorizontal:SIZES.xLarge, backgroundColor: COLORS.tertiary, borderRadius:SIZES.medium, marginLeft: 2, shadowColor:COLORS.white}}
//                 >
//                     <Text style={{color:COLORS.primary}}>yeet</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }

  // Destructured data //! ASYNC error cus it takes time to fetch data
    const { job_description } = data.length > 0 ? data[0] : {job_description : ["No data provided"]}
    const {job_highlights: {Qualifications : points = ['N/A']}} = data.length > 0 ? data[0] : {job_highlights:{Qualifications :['N/A']}} // default value as 'N/A' and when the data is being fetched its set to ['N/A']
    const {job_highlights: {Responsibilities : responsibilities = ['N/A']}} = data.length > 0 ? data[0] : {job_highlights:{Responsibilities :['N/A']}} // default value as 'N/A' and when the data is being fetched its set to ['N/A']
    // console.log('YEEEET',responsibilities)
    // console.log('job_highlights',points)
    // console.log('job_description',job_description)
    

    // const handleShare = () => { //TODO: add share functionality

    // }

    const displayTabContent = () => {
        switch (activetab) {
            case "About":
                return <JobAbout
                    info={job_description}
                />
                break;
            case "Qualifications":
                return <Specifics
                    title="Qualifications"
                    points={points}
                />
                break;
            case "Responsibilities":
                return <Specifics
                    title="Responsibilities"
                    points={responsibilities}
                />
                break;
            default:
                break;
        }
    }

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
                headerTitle: (props) => <LinkBtn {...props}/>
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
                    <View style={{alignContent: 'center', justifyContent: 'center'}}>
                        <Text >We dont have the sufficient data at the moment.</Text>
                    </View>
                ) : (
                    <View style={{padding: SIZES.medium,paddingTop:0 , paddingBottom:100}}>
                        <Company
                            companyLogo={data[0].employer_logo}
                            jobTitle={data[0].job_title}
                            companyName={data[0].employer_name}
                            location={data[0].estimated_salaries[0]?.location}
                        />

                        <JobTabs
                            tabs={tabs}
                            activetab={activetab}
                            setActivetab={setActivetab}
                        />
                       
                        {displayTabContent()}
                    </View>
                )}
            </ScrollView>
        </>
    </SafeAreaView>
  ) 
}

export default JobDetails