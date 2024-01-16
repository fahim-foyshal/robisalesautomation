import React, {useEffect, useState} from 'react';
import {
  Text,
  StatusBar,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle,faAreaChart,faShop,faFileCircleCheck,faPlugCircleBolt,faMoneyBill1,faChartBar,faNewspaper } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <>
    <StatusBar
      barStyle="default"
      translucent
      backgroundColor={"rgba(255,74,79,255)"}
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
      <View className="bg-white h-[150px] w-[] rounded-bl-3xl p-3" style={{backgroundColor:"rgba(255,74,79,255)"}}>
        <View className="fixed flex flex-row items-center left-4"
          style={{elevation: 10}}>
          {/* <Image
            source={require('../assest/logo1.png')}
            className="w-[60px] h-[60px]"
          /> */}
         
        </View>
        <View className="flex flex-row">
          <View
            className="w-[80px] m-3 h-[80px] bg-[#f2f2f2] rounded-full"
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
             <Text   style={{ fontSize: 15,  color: 'white', fontFamily:"DMMono-Regular"}}>kamal hossain</Text>
              <Text style={{ fontSize: 15, color: 'white',fontFamily:"DMMono-Regular" }}>sales manager</Text>
              <Text style={{ fontSize: 15, color: 'white',fontFamily:"DMMono-Regular" }}>ID :00155</Text>
            </View>
        </View>
      </View>
      {/* <View className="flex flex-row flex-wrap rounded-[40px]" 
            style={{backgroundColor:'#DBE2E9',
            marginTop:-40,
            height:260,
            paddingTop:13,
            }}>
        <View className="flex flex-row flex-wrap " style={{}} >
          <View style={{  alignItems: 'center', marginLeft:15, }}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                    backgroundColor: 'white',
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon icon={faUserCircle} size={75} color="#E97451" />
                </View>
                <Text style={{ fontWeight: 'bold' }}>Manager</Text>
            </View>


            <View style={{  alignItems: 'center', marginLeft:8, }}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                    backgroundColor: '#4169E1',
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft:15,
                  }}
                >
                  <FontAwesomeIcon icon={faShop} size={45} color="white" />
                </View>
                <Text style={{ fontWeight: 'bold' }}>Manager</Text>
            </View>

            <View style={{  alignItems: 'center', marginLeft:8, }}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                    backgroundColor: '#228B22',
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft:15,
                  }}
                >
                  <FontAwesomeIcon icon={faMoneyBill1} size={45} color="white" />
                </View>
                <Text style={{ fontWeight: 'bold' }}>Manager</Text>
            </View>

            <View style={{  alignItems: 'center', marginLeft:8, }}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                    backgroundColor: '#E34234',
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft:15,
                  }}
                >
                  <FontAwesomeIcon icon={faAreaChart} size={45} color="white" />
                </View>
                <Text style={{ fontWeight: 'bold' }}>Manager</Text>
            </View>
        </View>      

        
        
        <View className="flex flex-row flex-wrap " style={{marginTop:20}} >
          <View style={{  alignItems: 'center', marginLeft:15, }}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                    backgroundColor: '#B2BEB5',
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon icon={faFileCircleCheck} size={45} color="#4169E1" />
                </View>
                <Text style={{ fontWeight: 'bold' }}>Manager</Text>
            </View>


            <View style={{  alignItems: 'center', marginLeft:8, }}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                    backgroundColor: '#FFC000',
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft:15,
                  }}
                >
                  <FontAwesomeIcon icon={faPlugCircleBolt} size={45} color="white" />
                </View>
                <Text style={{ fontWeight: 'bold' }}>Manager</Text>
            </View>

            <View style={{  alignItems: 'center', marginLeft:8, }}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                    backgroundColor: '#DAF7A6',
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft:15,
                  }}
                >
                  <FontAwesomeIcon icon={faMoneyBill1} size={45} color="white" />
                </View>
                <Text style={{ fontWeight: 'bold' }}>Manager</Text>
            </View>

            <View style={{  alignItems: 'center', marginLeft:8, }}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                    backgroundColor: '#FF7518',
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft:15,
                  }}
                >
                  <FontAwesomeIcon icon={faChartBar} size={45} color="white" />
                </View>
                <Text style={{ fontWeight: 'bold' }}>Manager</Text>
            </View>
        </View> 

        
      </View> */}
      <View style={{marginTop:20,}}>
        <View className="flex flex-row flex-wrap " style={{}} >
          <View style={{  alignItems: 'center', marginLeft:10, }}>
                <View
                  style={{
                    width: 115,
                    height: 80,
                    borderRadius: 10,
                    backgroundColor: '#FFA500',
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon icon={faNewspaper} size={25} color="white" />
                  <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: 'white' }}>Today's Orders</Text>
                  <Text style={{ fontFamily: 'Roboto', fontSize: 20, color: 'white' }}>10</Text>
                </View>
             
            </View>


            <View style={{  alignItems: 'center', marginLeft:1, }}>
                <View
                  style={{
                    width: 115,
                    height: 80,
                    borderRadius: 10,
                    backgroundColor: '#FF5F1F',
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft:15,
                    fontWeight:'Bold',
                    color:'white'
                  }}
                >
                  <FontAwesomeIcon icon={faMoneyBill1} size={30} color="white" />
                  <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: 'white' }}>Orders Amount</Text>
                  <Text style={{ fontFamily: 'Roboto', fontSize: 20, color: 'white' }}>20</Text>
                </View>
             
            </View>

            <View style={{  alignItems: 'center', marginLeft:1, }}>
                <View
                  style={{
                    width: 117,
                    height: 80,
                    borderRadius: 10,
                    backgroundColor: '#FF7F50',
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft:15,
                  }}
                >
                  <FontAwesomeIcon icon={faShop} size={30} color="white" />
                  <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: 'white' }}>Total Shop</Text>
                  <Text style={{ fontFamily: 'Roboto', fontSize: 20, color: 'yellow' }}>20</Text>
                </View>
               
            </View>


        </View>      
        <View className="flex flex-row flex-wrap " style={{marginTop:20,}} >
          <View style={{  alignItems: 'center', marginLeft:10, }}>
                <View
                  style={{
                    width: 117,
                    height: 80,
                    borderRadius: 10,
                    backgroundColor: '#0096FF',
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon icon={faMoneyBill1} size={30} color="white" />
                  <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: 'white' }}>Orders Amount</Text>
                  <Text style={{ fontFamily: 'Roboto', fontSize: 20, color: 'yellow' }}>20</Text>
                </View>
               
            </View>


            <View style={{  alignItems: 'center', marginLeft:1, }}>
                <View
                  style={{
                    width: 117,
                    height: 80,
                    borderRadius: 10,
                    backgroundColor: '#4169E1',
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft:15,
                  }}
                >
                  <FontAwesomeIcon icon={faShop} size={30} color="white" />
                  <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: 'white' }}>Total Shop</Text>
                  <Text style={{ fontFamily: 'Roboto', fontSize: 20, color: 'yellow' }}>20</Text>
                </View>
               
            </View>

            <View style={{  alignItems: 'center', marginLeft:10, }}>
                <View
                  style={{
                    width: 115,
                    height: 80,
                    borderRadius: 10,
                    backgroundColor: 'rgb(8 145 178)',
                    elevation: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesomeIcon icon={faNewspaper} size={25} color="white" />
                  <Text style={{ fontFamily: 'Roboto', fontSize: 15, color: 'white' }}>Today's Orders</Text>
                  <Text style={{ fontFamily: 'Roboto', fontSize: 20, color: 'yellow' }}>10</Text>
                </View>
             
            </View>


        </View>  
        
      </View>
    </View>
  </>
  )
}

export default Dashboard
