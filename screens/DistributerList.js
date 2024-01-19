import React, {useEffect, useState} from 'react';
import {
    Text,
    TextInput,
    StatusBar,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet
  } from 'react-native';
  import { SafeAreaView} from 'react-native-safe-area-context';
  import * as Icon from "react-native-feather";
import FilterSheet from '../components/FilterSheet';
const DistributerList = () => {
    const [isFilterSheetVisible, setIsFilterSheetVisible] = useState(false);

    const handleBottomSheetPress = (categorydish) => {
     
  
        setIsFilterSheetVisible(true);
  
    };
  return (
    <>
    <View className="w-[]  p-3 flex flex-row justify-between items-center" style={{backgroundColor:"rgba(2, 132 ,199,255)"}}>
           <View className="bg-white h-12 w-[80%] rounded-md flex-row items-center space-x-2 px-4 pb-2 " style={{elevation:10}}>
            <View className="flex flex-row flex-1 items-center rounded-md my-3 px-2" >
                <Icon.Search height="25" width="25" stroke="gray" />
                <TextInput placeholder='Search for distributer' className="ml-2 h-full" keyboardType='default' />
                {/* <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                    <Icon.MapPin height="20" width="20" stroke="gray" />
                    <Text className="text-gray-600">New York, NYC</Text>
                </View> */}
            </View>
        </View>
        <TouchableOpacity
        onPress={handleBottomSheetPress}
         style={{backgroundColor: 'rgba(2, 132 ,199,255)'}} className="p-3 rounded-full">
                <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
            </TouchableOpacity>
        </View>


        <FilterSheet
        isVisible={isFilterSheetVisible}
        onClose={() => setIsFilterSheetVisible(false)}
        
      
      />
    </>
  )
}

export default DistributerList
