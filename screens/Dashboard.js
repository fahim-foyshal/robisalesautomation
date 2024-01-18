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
import { faUserCircle,faAreaChart,faShop,faFileCircleCheck,faPlugCircleBolt,faMoneyBill1,faChartBar,faNewspaper, faBuildingCircleArrowRight, faBox, faBoxOpen, faFloppyDisk, faFlagCheckered, faFileClipboard, faClipboardCheck, faBullseye, faInfo, faMapLocation, faNoteSticky, faMoneyBill, faMoneyBillWave, faUmbrellaBeach, faStickyNote, faGear, faUserCheck, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';




const Dashboard = () => {
    const navigation = useNavigation();
    
    const  navigateToAttendance=()=>{
        navigation.navigate('SelfieAttendance')
    }
    const  navigateToTodaytask=()=>{
        navigation.navigate('tasks')
    }
    
  return (
    <>
    <StatusBar
      barStyle="default"
      translucent
    //   backgroundColor={"rgba(255,74,79,255)"}
       backgroundColor={"rgba(2,132, 199,255)"}
    
    />
    
    <View className="w-full h-full" style={{marginTop: 20}}>
    
      {/* {user ? (
      <View>
        <Text>User ID: {user.user_id}</Text>
        <Text>User: {user.user}</Text>
        <Text>Full Name: {user.full_name}</Text>
        
      </View>
    ) : (
      <Text>No user data found</Text>
    )} */}
      <View className="bg-white h-[100px] w-[] rounded-bl-3xl rounded-br-3xl p-3" style={{backgroundColor:"rgba(2, 132 ,199,255)"}}>
        <View className="fixed flex flex-row items-center left-4"
          style={{elevation: 10}}>
          {/* <Image
            source={require('../assest/logo1.png')}
            className="w-[60px] h-[60px]"
          /> */}
         
        </View>
        <View className="flex flex-row">
          <View
            className="w-[50px] m-3 h-[50px] bg-white rounded-full"
            style={{elevation: 0,}}>
            {/* <Image
              source={require('../assest/images.jpeg')} // Replace with the actual path to your image
              style={{
                width: 80,
                height: 80,
                borderRadius: 38, // Half of the width and height to make it circular
              }}
            /> */}
          </View>
          <View
            className="w-[130px] m-3 h-[80px] rounded-xl "
            style={{elevation: 0}}>
             <Text   style={{fontWeight:'800', fontSize: 15,  color: 'white',fontFamily:"monospace"}}>kamal hossain</Text>
              <Text style={{ fontSize: 15, color: 'white',fontFamily:"DMMono-Regular" }}>sales manager</Text>
              <Text style={{ fontSize: 15, color: 'white',fontFamily:"DMMono-Regular" }}>ID :00155</Text>
            </View>
        </View>
      </View>

      <View style={{marginTop:20,}}>
       
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
  {/* First Card */}
                            <View style={styles.cardContainer}>
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faBuildingCircleArrowRight} size={60} color="purple" />
                                <Text style={styles.cardText}>Distributer</Text>
                                </View>
                            </View>

                            {/* Second Card */}
                            <View style={styles.cardContainer}>
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faShop} size={60} color="rgb(217, 237, 191)" />
                                <Text style={styles.cardText}>Orders Amount</Text>
                                
                                </View>
                            </View>

                            {/* Third Card */}
                            <View style={styles.cardContainer}>
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faBoxOpen} size={60} color="#FFB996" />
                                <Text style={styles.cardText}>Product</Text>
                                
                                </View>
                          </View>
                            <View style={styles.cardContainer}>
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faFloppyDisk} size={60} color="#FFCF81" />
                                <Text style={styles.cardText}>Saved Info</Text>
                                
                                </View>
                          </View>
                            <View style={styles.cardContainer}>
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faFileClipboard} size={60} color="#B3A492" />
                                <Text style={styles.cardText}>Pending</Text>
                                
                                </View>
                          </View>
                            <View style={styles.cardContainer}>
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faClipboardCheck} size={60} color="#4F6F52" />
                                <Text style={styles.cardText}>Report</Text>
                                
                                </View>
                          </View>
                            <View style={styles.cardContainer}>
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faBullseye} size={60} color="#6B240C" />
                                <Text style={styles.cardText}>target</Text>
                                
                                </View>
                          </View>
                            <View style={styles.cardContainer}>
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faInfo} size={60} color="rgba(255,74,79,255)" />
                                <Text style={styles.cardText}>KPI</Text>
                                
                                </View>
                          </View>
                            <View style={styles.cardContainer}>
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faMapLocation} size={60} color="skyblue" />
                                <Text style={styles.cardText}>Tour Plan</Text>
                                
                                </View>
                          </View>
                            <View style={styles.cardContainer}>
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faMoneyBillWave} size={60} color="#365486" />
                                <Text style={styles.cardText}>TA DA</Text>
                                
                                </View>
                          </View>
                            <View style={styles.cardContainer}>
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faUmbrellaBeach} size={60} color="#A2C579" />
                                <Text style={styles.cardText}>leave</Text>
                                
                                </View>
                          </View>

                            <View style={styles.cardContainer}>
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faStickyNote} size={60} color="#80BCBD" />
                                <Text style={styles.cardText}>Notice</Text>
                                
                                </View>
                          </View>
                            <View style={styles.cardContainer}>
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faGear} size={60} color="#DF826C" />
                                <Text style={styles.cardText}>Settings</Text>
                                
                                </View>
                          </View>
                          
                            <TouchableOpacity
                            onPress={navigateToAttendance}
                            style={styles.cardContainer} >
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faUserCheck} size={60} color="#C85250" />
                                <Text style={styles.cardText}>Attendance</Text>
                                
                                </View>
                          </TouchableOpacity>
                            <TouchableOpacity
                            onPress={navigateToTodaytask}
                            style={styles.cardContainer} >
                                <View style={styles.card}>
                                <FontAwesomeIcon icon={faListCheck} size={60} color="#C85250" />
                                <Text style={styles.cardText}>Attendance</Text>
                                
                                </View>
                          </TouchableOpacity>
                       
  {/* Add more cards as needed */}




        </View>      
    
        
      </View>
    </View>
  </>
  )
}

export default Dashboard
const styles = StyleSheet.create({
    cardContainer: {
      flexBasis: '33%', // This ensures three cards in each row
      padding: 5,
    },
    card: {
      width: '100%',
      height: 120,
      borderRadius: 10,
      backgroundColor: 'white',
      elevation: 10,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      color: 'white',
    },
    cardText: {
      fontFamily: 'monospace',
      fontSize: 10,
      color: 'black',
    },
    cardAmount: {
      fontFamily: 'Roboto',
      fontSize: 14,
      color: 'white',
    },
  });
  