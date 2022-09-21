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
// import UploadImage from './UploadImage';
// import React from 'react'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import * as ImagePicker from 'expo-image-picker';
// import { colors, font, fsize } from '../Helper/Constants';


// function ConfirmImage({ props, navigation, route }) {
//     //--------------image picker and permission----------------------

//     return (
//         <View style={styles.container}>
//             <ImageBackground source={require('../assets/Pattern.png')} style={styles.V_background}>
//                 <Pressable
//                     style={styles.B_backButton}
//                     onPress={() => navigation.navigate("UploadImage")}>
//                     <Icon
//                         name="chevron-left"
//                         color={colors.brown}
//                         size={20}></Icon>
//                 </Pressable>
//                 <ScrollView style={{ flex: 1, }}>
//                     {/* <View style={{ justifyContent: 'flex-end', flex: 1 }}> */}
//                     {/* <View> */}
//                     <View style={styles.V_Upload}>

//                         <Text style={styles.T_title}>
//                             Upload Your Profile{"\n"}photo
//                         </Text>

//                         <Text style={styles.T_subtitle}>
//                             This data will be displayed in your account{"\n"}profile for security
//                         </Text>

//                         <Image
//                             source={{ uri: route.params.selectedImage.localUri }}
//                             style={styles.image}
//                         />
//                     </View>
//                     {/* </View> */}
//                     <View style={styles.V_next}>
//                         <Pressable
//                             style={styles.B_next}
//                             onPress={() => navigation.push("LocationScreen")}>
//                             <Text style={styles.T_button_next}>Next</Text>
//                         </Pressable>
//                     </View>
//                     {/* </View> */}
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
//         justifyContent: 'flex-start',
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
//     V_next: {
//         flexDirection: 'column-reverse',
//         alignSelf: 'center',
//         //backgroundColor: colors.test_red,                      //test color red
//         alignItems: 'center',
//         marginTop: '20%',
//         marginBottom: '10%',
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
//     image: {
//         width: '60%',
//         aspectRatio: 1,
//         alignSelf: 'center',
//         marginTop: 50,
//         borderRadius: 10,
//     },

// })
// export default ConfirmImage;