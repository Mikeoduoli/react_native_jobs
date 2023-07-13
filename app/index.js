import { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES, icons, images } from '../constants'
import { 
    Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome 
} from '../components';

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.
        lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle: { backgroundColor:COLORS.lightwhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="60%" />
                ),
                headerTitle: ""
            }}
            />

            <ScrollView showsHorizontalScrollIndicator={false}>
                <View
                 style={{
                    flex: 1,
                    padding: SIZES.medium
                 }}
                 >
                    <Welcome
                        searchTerm={searchTerm}
                        handleClick={() => {
                            if(searchTerm) {
                                router.push(`/search/search${searchTerm}`)
                            }
                        }}
                    />

                <Popularjobs />
                <Nearbyjobs />
                 </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;