import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native"
import { Stack,useRouter } from "expo-router";

import {COLORS, icons, images, SIZES} from '../constants'

import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'

const Home = () => {
    const router = useRouter()
    const handlePress= () => {
        console.log('handlePress clicked');
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={handlePress}/> // iconUrl,dimension prop passed down
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                    ),
                    headerTitle: ""                 
                }}
            />
            <ScrollView showsVerticalScrollIndicator={true}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium //TODO: remove this and add it to child components to make popularJobsCards look better
                    }}
                >
                    <Welcome
                        
                    />

                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
     
};

export default Home;