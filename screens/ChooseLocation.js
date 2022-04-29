import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View , Text , StyleSheet , ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native'

//reusable components
import AddressPickup from '../components/AddressPickup';
import CustomBtn from '../components/CustomBtn';

const ChooseLocation = ({ }) => {
    const navigation = useNavigation ()

    const onDone = () => {
        navigation.goBack()

    }

    const fetchAddressCords = (lat , lng) => {
        console.log('lattitude' , lat)
        console.log('longitude' , lng)
    }

    const fetchDestinationCords = (lat , lng) => {
        console.log('lattitude' , lat)
        console.log('longitude' , lng)
    }


    return(
        <View style={styles.container}>
            <ScrollView
            //keyboardShouldPersistTaps="handle"
            style={{backgroundColor:'white' , flex:1 , padding: 24}}
            >
            <AddressPickup
            placeholderText={'Enter pickup Location'}
            fetchAddress={fetchAddressCords}
            />
            <View style={{marginBottom: 16}}/>

            <AddressPickup
            placeholderText={'Enter Destination Location'}
            fetchAddress={fetchDestinationCords}
            />
            <CustomBtn
            btnText="Done"
            btnStyle={{marginTop: 24}}
            onPress={onDone}
            />
            </ScrollView>
       
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1 , 
        
    }
});

export default ChooseLocation;