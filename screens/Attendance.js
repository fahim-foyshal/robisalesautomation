import React, {useEffect, useState} from 'react';
import {
    Text,
    StatusBar,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet
  } from 'react-native';
  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import GetLocation from 'react-native-get-location';
import Geolocation from '@react-native-community/geolocation';


const Attendance = () => {
    const navigation = useNavigation();
    const [imagedata, setImagedata] = useState(null);
    const [location, setLocation] = useState(null);

    useEffect(() => {

      Geolocation.getCurrentPosition(info => {
       
      
        const { latitude, longitude, accuracy, altitude, heading, speed } = info.coords;
        const currentDate = new Date();
        const locationString = "http://192.144.82.199/~mepgroup/1027/sales_mod/pages/report/view_map.php?lat=" + latitude + "&long=" + longitude;
        setLocation(locationString);
   
        
      });

    }, []);
    const  navigateToHome=()=>{
        navigation.navigate('Home')
    }
    const handleImageUpload = () => {
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 300,
          maxWidth: 300,
          cameraType: 'front', // Specify 'front' to open the selfie camera
        };
    
        launchCamera(options, response => {
          if (response.didCancel) {
            console.log('User cancelled camera');
          } else if (response.error) {
            console.log('Camera Error: ', response.error);
          } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setImagedata(imageUri);
          }
        });
      };

  return (
 <>
 <View>
      <View className=" h-1/3 w-[] rounded-[20px]  flex flex-row justify-between p-3">
        <View className="w-[90%] m-4 rounded-md bg-white " style={{elevation:10,borderRadius:20}}>

        {location&&<WebView className=" w-[] m-3 rounded-xl"  source={{ uri:location}}/>

            
}
            </View> 
   </View>
      <View className=" h-[400px] w-[] rounded-[20px]  flex flex-row justify-between p-3">
        
                <View className="w-[90%] m-4 bg-[#fff]  rounded-xl" style={{elevation:10}}>
                {imagedata ? ( 
                    <View style={{position:'relative', alignItems: 'center', marginTop: 10 }}
                            className="-top-1 p-2"
                        >
                                
                        <Image className="rounded-md w-full h-full" source={{ uri:imagedata}} />
                            </View> ):
                ( <View className="my-auto mx-auto justify-center">
                <TouchableOpacity
                    onPress={handleImageUpload}
                    style={{
                 
                    borderRadius: 5,
                    alignItems: 'center',
                    width: '50px',
                    padding:5,
                    paddingVertical: 5,
                    // marginVertical: 10,
                   
                    
                    }}
                    >
        <FontAwesomeIcon icon={faCamera} size={60} color="purple" />
                </TouchableOpacity>
                </View>  )}
                </View>

            {/* <View  className="flex mx-auto justify-center">
        <TextInput
         label='Shop Name'
         placeholderTextColor={'#808080'}
         placeholder='Enter Shop Name'
         cursorColor={'#808080'}
         value={shopcreationdata.shop_name}
         mode="outlined"
         outlineColor="transparent"
         activeOutlineColor="#84CDEE"
         onChangeText={(text) => handleInputChange('shop_name', text)}
         
         className="  relative w-[180px] h-11 rounded-xl bg-white" style={styles.textInput}></TextInput>
            </View> */}
            
   </View>
               <TouchableOpacity
                            onPress={navigateToHome}
                            className="w-[] m-3 ">
                                <View style={styles.card}>
                                    <Text className="text-white" style={{fontFamily:"monospace",fontWeight:'900'}}>Submit</Text>
                                </View>
                          </TouchableOpacity>
                       
   </View>
 </>
  )
}

export default Attendance;

const styles = StyleSheet.create({
    cardContainer: {
        width:"90%",
      // This ensures three cards in each row
     

    },
    card: {
      width: '100%',
      height: 50,
      borderRadius: 10,
      backgroundColor: 'rgba(2,132,199,255)',
      elevation: 10,
    
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      color: 'white',
   
    },
    cardText: {
      fontFamily: 'monospace',
      fontWeight:'900',
      fontSize: 10,
      color: 'black',
    },
    cardAmount: {
      fontFamily: 'Roboto',
      fontSize: 14,
      color: 'white',
    },
  });
  
