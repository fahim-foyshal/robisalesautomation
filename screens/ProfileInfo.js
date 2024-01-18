import React, {useEffect, useState} from 'react';
import {
  Text,
  StatusBar,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ProfileInfo = () => {
//   const [selectedShift, setSelectedShift] = useState(null);

  const handleInButtonPress = () => {
    // Handle in button press
  };

  const handleOutButtonPress = () => {
    // Handle out button press
  };
  return (
    <>
        <View className=" w-[] h-full" style={styles.fullscreen}>
           
            <View className="mt-4  flex flex-row justify-center justify-items-center ">
                <View className=" bg-cyan-600 shadow-xl rounded-md">
                    <View className="w-80 h-24 flex-row">
                        <View className="flex-1 items-center mt-4">
                            <Text className='text-white ml-6'>February 28</Text>
                            <Text className='text-white font-bold ml-6'>2021</Text>
                        </View>
                        <View className="w-0.5 items-center mt-2 bg-white">
                        </View>
                        <View className="flex-1 items-center mt-4">
                            <Text className='text-white font-extrabold mr-6 mt-1 text-lg'>12:22 PM</Text>
                        </View>
                    </View> 
                        <Text className="text-white text-center p-2">Last In Time March 10, 2022 09:30 AM</Text>
                </View>
            </View>
                
              
              {/* <View className="mt-4  flex flex-row justify-center justify-items-center ">
                <View className=" bg-white w-80 shadow-xl rounded-md">               
                        
                  <View style={styles.container} >
                  <Text style={styles.headingText}>Shift</Text>
                  <View style={styles.dropdownContainer}>
                    <Picker
                      selectedValue={selectedShift}
                      onValueChange={(itemValue, itemIndex) => setSelectedShift(itemValue)}
                      style={styles.dropdown}
                    >
                      <Picker.Item label="Morning" value="Morning" />
                      <Picker.Item label="Afternoon" value="Afternoon" />
                      <Picker.Item label="Night" value="Night" />
                    </Picker>
                  </View>
                </View>
                         
                </View>
            </View> */}

            
            <View className="mt-4  flex flex-row justify-center justify-items-center">
                <View>
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity  style={styles.buttonIn} onPress={handleInButtonPress}>
                        <Text style={styles.buttonText}>In</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.buttonOut} onPress={handleOutButtonPress}>
                        <Text  style={styles.buttonText}>Out</Text>
                      </TouchableOpacity>
                  </View>
                </View>
            </View>


            <View className="mt-4  flex flex-row justify-center justify-items-center ">
                <View className=" bg-white w-80 p-2 shadow-xl rounded-md" > 
                    <Text style={{ lineHeight: 28 }}><Text className="font-bold ">Name:</Text>Ruhul Amin</Text>
                    <Text style={{ lineHeight: 28 }}><Text className="font-bold">Designation:</Text>Software Engineer</Text>
                    <Text style={{ lineHeight: 28 }}><Text className="font-bold">Code:</Text>00002</Text>
                    <View className="w-65 h-0.5 items-center mt-2 bg-black"></View>
                    <Text style={{ lineHeight: 28 }}><Text className="font-bold ">Market:</Text>Gulshan-0006</Text>
                    <Text style={{ lineHeight: 28 }}><Text className="font-bold">Distibutor Point:</Text>Gulshan-5550</Text>
                    <Text style={{ lineHeight: 28 }}><Text className="font-bold">Teritory:</Text>Dhaka Metropoliton 4002</Text>
                    <Text style={{ lineHeight: 28 }}><Text className="font-bold ">Division Region:</Text>centarl 3001</Text>
                    <Text style={{ lineHeight: 28 }}><Text className="font-bold">Section:</Text>LAUI 2001</Text>
                    <Text style={{ lineHeight: 28 }}><Text className="font-bold">Business wing:</Text>Electric Product 1600 </Text>
                </View>
                
            </View>



        </View>
    </>
  )
}
const styles = StyleSheet.create({
  fullscreen:{
    backgroundColor:'#DCF2F1'
  },
  container: {
    marginTop: 4,
  },
  headingText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  dropdownContainer: {
    backgroundColor: 'white',
    width: 300,
    marginTop: 8,
    marginLeft: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
  },
  dropdown: {
    height: 40,
    width: 300,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginTop: 10,
    marginLeft: 10,
  },
  buttonIn: {
    backgroundColor: '#00509d', 
    padding: 10,
    borderRadius: 25,
    width: 140,
    alignItems: 'center',
    elevation:10,
  },
  buttonOut: {
    backgroundColor: 'grey', 
    padding: 10,
    borderRadius: 25,
    width: 140,
    alignItems: 'center',
    elevation:10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileInfo