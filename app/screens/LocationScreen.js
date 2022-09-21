// import {
//     View,
//     Text,
//     Image,
//     StyleSheet,
//     ImageBackground,
//     TextInput,
//     StatusBar,
//     Pressable,
//     ScrollView,
//     TouchableOpacity,
//     Alert,
// } from 'react-native'
// import * as Location from 'expo-location';
// import React from 'react'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import * as Animatable from 'react-native-animatable';
// import { colors, font, fsize } from '../Helper/Constants';


// function LocationScreen({ props, navigation }) {

//     //--------------location use states----------------------
//     const [location, setLocation] = React.useState(null);
//     const [address, setAddress] = React.useState(null);
//     const [errorMsg, setErrorMsg] = React.useState(null);

//     let text = 'Waiting..';
//     if (errorMsg) {
//         text = errorMsg;
//     } else if (location) {
//         text = JSON.stringify(location);
//     }
//     let text_a = 'Waiting..';
//     if (errorMsg) {
//         text_a = errorMsg;
//     } else if (address) {
//         text_a = JSON.stringify(address);
//     }
//     //const set = () => { }


//     React.useEffect(() => {
//         (async () => {
//             //const set= () => {}
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 return;
//             }

//             let location = await Location.getCurrentPositionAsync({});
//             let address = await Location.reverseGeocodeAsync(location.coords);
//             setLocation(location.coords);
//             setAddress(address);
//             console.log(address)
//         })();
//     }, []);




//     return (
//         <View style={styles.container}>
//             <ImageBackground source={require('../assets/Pattern.png')} style={styles.V_background}>
//                 <Pressable
//                     style={styles.B_backButton}
//                     onPress={() => navigation.navigate("SignupScreen")}>
//                     <Icon
//                         name="chevron-left"
//                         color={colors.brown}
//                         size={20}></Icon>
//                 </Pressable>
//                 <ScrollView>
//                     <View style={{ justifyContent: 'flex-end', flex: 1 }}>
//                         <View style={styles.V_Upload}>

//                             <Text style={styles.T_title}>
//                                 Set Your Location
//                             </Text>
//                             <Text style={styles.T_subtitle}>
//                                 This data will be displayed in your account{"\n"}profile for security
//                             </Text>
//                             <View style={styles.V_buttons}>

//                                 <View>
//                                     {/* <Text style={styles.paragraph}>{text}</Text> */}
//                                     <Text style={styles.paragraph}>{text_a}</Text>
//                                 </View>
//                             </View>
//                         </View>
//                         <View style={styles.V_next}>
//                             {/* <Pressable
//                                 style={styles.B_next}
//                                 onPress={() => { set(); }}>
//                                 <Text style={styles.T_button_next}>set</Text>
//                             </Pressable> */}
//                             <Pressable
//                                 style={styles.B_next}
//                                 onPress={() => navigation.push("Congrats")}>
//                                 <Text style={styles.T_button_next}>Next</Text>
//                             </Pressable>
//                         </View>
//                     </View>
//                 </ScrollView>
//             </ImageBackground>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.WHITE,
//         paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     },
//     V_background: {
//         flex: 1,
//         //backgroundColor: colors.BLACK,
//         justifyContent: 'flex-end',
//         //alignContent: 'flex-end',
//         //alignItems: 'center',
//         // position: 'absolute',
//         // top: 0,
//         // bottom: 0,
//         // left: 0,
//         // right: 0
//     },
//     V_Upload: {
//         //backgroundColor: colors.test_pink,                          //test color pink
//         justifyContent: 'flex-start',
//         marginHorizontal: 25,
//         marginTop: 25,
//         flex: 1,

//     },
//     V_buttons: {
//         //backgroundColor: colors.test_red,                          //test color red
//         justifyContent: 'space-evenly',
//         //marginHorizontal: 25,
//         marginTop: 25,
//         shadowColor: colors.shadow,
//         //shadowOffset: { width: 20, height: 20 },
//         shadowOpacity: 0.30,
//         shadowRadius: 90,

//     },
//     V_next: {
//         flexDirection: 'column-reverse',
//         alignSelf: 'center',
//         //backgroundColor: colors.test_purple,                      //test color purple
//         alignItems: 'center',
//         marginVertical: '10%',
//     },
//     T_title: {
//         //marginTop: 5,
//         fontWeight:'bold',
//         fontSize: fsize.size25,
//         alignSelf: 'flex-start'
//     },
//     T_subtitle: {
//         marginTop: 20,
//          fontWeight: 'normal',,
//         fontSize: fsize.size12,
//         alignSelf: 'flex-start'
//     },
//     T_Button: {
//         //marginTop: 25,
//         fontWeight:'bold',
//         fontSize: fsize.size14,
//         paddingTop: 10,
//         //alignSelf: 'flex-start'
//     },
//     T_button_next: {
//         fontWeight:'bold',
//         fontSize: fsize.size13,
//         color: colors.WHITE,
//     },
//     B_backButton:
//     {
//         //marginTop: '5%',
//         marginTop: 25,
//         marginLeft: 25,
//         width: 50,
//         height: 50,
//         justifyContent: 'center',
//         flexDirection: 'row',
//         //marginVertical: 30,
//         alignItems: 'center',
//         borderRadius: 10,
//         backgroundColor: colors.peach,
//     },
//     B_upload: {
//         marginBottom: 25,
//         backgroundColor: colors.WHITE,
//         //borderWidth: 1,
//         borderRadius: 10,
//         justifyContent: 'space-evenly',
//         alignContent: 'space-around',
//         alignItems: 'center',
//         padding: 25,
//     },
//     B_next: {
//         width: 140,
//         height: 50,
//         justifyContent: 'center',
//         flexDirection: 'row',
//         //marginVertical: 30,
//         alignItems: 'center',
//         borderRadius: 10,
//         backgroundColor: colors.GREEN,
//     },

// })
// export default LocationScreen;