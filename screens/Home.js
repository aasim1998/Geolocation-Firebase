import { NavigationContainer } from '@react-navigation/native';
import React , {useState , useRef} from 'react';
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native';
import MapView , {PROVIDER_GOOGLE , Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const Home = ({navigation}) => {
    const [state , setState] =  useState({
        pickupCords:{
            latitude:29.2806,
            longitude:77.4704,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },

        droplocationCords:{
            latitude:29.4727,
            longitude:77.7085,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,

        }

    })

    const mapRef = useRef()

    const {pickupCords , droplocationCords} = state

    const onPressLocation = () => {
        navigation.navigate('Location')
    }


    return(
        <View style={styles.container}>
            <View style={{flex:1}}>
        
            <MapView
            ref={mapRef}
            style={StyleSheet.absoluteFill}
            provider={PROVIDER_GOOGLE}
            zoom={true}
            initialRegion={pickupCords}
            >
                <Marker
                coordinate={pickupCords}
                />
                <Marker
                coordinate={droplocationCords}
                />
              
            
                <MapViewDirections
                 origin={pickupCords}
                 destination={droplocationCords}
                 apikey={'AIzaSyBbzEALufpsH8XvlVkmCodXpLsHM9zIzC0'}
                 optimizeWaypoints={true}
                 onReady={result =>{
                     mapRef.current.fitToCoordidinates(result.coordinates,{
                         edgePadding:{
                             right:30,
                             bottom:300,
                             left:30,
                             top:100

                         }

                     })

                 }}
                />

            </MapView>
            </View>
            <View style={styles.bottomCard}>
                <Text>Where are you going ? </Text>
                <TouchableOpacity
                style={styles.inputStyle}
                onPress={onPressLocation}
                >
                    <Text>Choose your location</Text>

                </TouchableOpacity>
            </View>
            </View>
        

    );
};

const styles = StyleSheet.create ({
    container:{
        flex:1,
    },

    bottomCard:{
        backgroundColor:'white',
        width:'100%',
        padding:30,
        borderTopEndRadius:24,
        borderBottomStartRadius:24
    },

    inputStyle:{
        backgroundColor:'white',
        borderRedius:4,
        borderWidth:1,
        alignItems: 'center',
        justifyContent:'center',
        height:48,
        marginTop:16

    }

        

})

export default Home;


