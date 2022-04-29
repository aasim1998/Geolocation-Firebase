import React, {useEffect , useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import ChooseLocation from './screens/ChooseLocation'
import messaging from '@react-native-firebase/messaging';
import {View,Text} from 'react-native';
const Stack = createNativeStackNavigator();

const App = () => {
  const [notification , setNotification] = useState({title: undefined , body: undefined});


  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('.............' , token);

  };


  useEffect(() => {
    getToken();
    messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      setNotification({
        title: remoteMessage.notification.title,

        body: remoteMessage.notification.body,
      });

    }); 

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('onNotificationOpenedApp: ' , JSON.stringify(remoteMessage));
      setNotification({
        title: remoteMessage.notification.title,

        body: remoteMessage.notification.body,
      });
    });

    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          JSON.stringify(remoteMessage),
        );
        setNotification({
          title: remoteMessage.notification.title,
  
          body: remoteMessage.notification.body,
        });
       
      }
      
    });
}, []);
  return (
    
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false}}
        />
        <Stack.Screen name="Location"
        component={ChooseLocation}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    
)}; 

export default App;