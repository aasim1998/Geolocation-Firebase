import React , {useState , useRef} from 'react';
import {View , Text , StyleSheet} from 'react-native';
import MapView , {PROVIDER_GOOGLE , Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const MapScreen = () => {
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


    return(
        <View style={styles.container}>
        
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
        

    );
};

const styles = StyleSheet.create ({
    container:{
        flex:1,
        
    }

})

export default MapScreen;

