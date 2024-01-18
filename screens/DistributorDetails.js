import React from 'react'
import { 
    View,
    Text,
    StatusBar,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
 } from 'react-native'
 import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
 import {faFileCirclePlus,faList,faLocationDot,faFileInvoiceDollar,faLayerGroup,faHandshake} from '@fortawesome/free-solid-svg-icons';

const DistributorDetails = () => {
  return (
    <View className="w-full h-full" >
       <View
        className="bg-white h-[165px] w-[]   p-3" style={{backgroundColor:"rgba(2, 132 ,199,255)"}}>
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
                        className="w-[170px] m-3 h-[80px] rounded-xl "
                        style={{elevation: 0}}>
                        <Text   style={{fontWeight:'800', fontSize: 15,  color: 'white',fontFamily:"monospace"}}>SUVESSA ENTERPRISE-GOURNADI(EAP)</Text>
                        <Text style={{ fontSize: 10, color: 'white',fontFamily:"DMMono-Regular" }}>Code: 390898</Text>
                        <Text style={{ fontSize: 10, color: 'white',fontFamily:"DMMono-Regular" }}>Credit Limit:5465665</Text>
                        <Text style={{ fontSize: 10, color: 'white',fontFamily:"DMMono-Regular" }}>Due:24343434.0</Text>
                        <Text style={{ fontSize: 10, color: 'white',fontFamily:"DMMono-Regular" }}>Available Credit Limit:1777.28999</Text>
                    </View>
            </View>
      </View> 

      {/*Card Section Start*/}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop:20}}>
        {/*1st Card Start*/}
            <TouchableOpacity  style={styles.cardContainer}>
                <View style={styles.card}>
                    <FontAwesomeIcon icon={faFileCirclePlus} size={50} color="#ec415a" />
                    <Text style={styles.cardText}>Add Order</Text>
                </View>
            </TouchableOpacity>
        {/*1st Card end*/} 
        {/*2 Card Start*/}
            <TouchableOpacity  style={styles.cardContainer}>
                <View style={styles.card}>
                    <FontAwesomeIcon icon={faList} size={50} color="#65ec80" />
                    <Text style={styles.cardText}>Order List</Text>
                </View>
            </TouchableOpacity>
        {/*2 Card end*/} 
        {/*3 Card Start*/}
            <TouchableOpacity  style={styles.cardContainer}>
                <View style={styles.card}>
                    <FontAwesomeIcon icon={faLocationDot} size={50} color="#f59af2" />
                    <Text style={styles.cardText}>Update Location</Text>
                </View>
            </TouchableOpacity>
        {/*3 Card end*/} 
        {/*4 Card Start*/}
            <TouchableOpacity  style={styles.cardContainer}>
                <View style={styles.card}>
                    <FontAwesomeIcon icon={faFileInvoiceDollar} size={50} color="#ffd84d" />
                    <Text style={styles.cardText}>Payment List</Text>
                </View>
            </TouchableOpacity>
        {/*4 Card end*/} 
        {/*5 Card Start*/}
            <TouchableOpacity  style={styles.cardContainer}>
                <View style={styles.card}>
                    <FontAwesomeIcon icon={faLayerGroup} size={50} color="#e6bb1e" />
                    <Text style={styles.cardText}>Stock List</Text>
                </View>
            </TouchableOpacity>
        {/*5 Card end*/} 
        {/*6 Card Start*/}
            <TouchableOpacity  style={styles.cardContainer}>
                <View style={styles.card}>
                    <FontAwesomeIcon icon={faHandshake} size={50} color="#6a96e2" />
                    <Text style={styles.cardText}>Visit List</Text>
                </View>
            </TouchableOpacity>
        {/*6 Card end*/} 

      </View>



    </View>
  )
}

export default DistributorDetails

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
  