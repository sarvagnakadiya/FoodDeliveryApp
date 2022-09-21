// import { View, Text, Pressable, StyleSheet } from 'react-native'
// import React from 'react'
// import { Camera } from 'expo-camera';
// import { colors } from '../Helper/Constants';

// function CameraScreen() {


//     //----------------------Accessing camera and permissions------------------------
//     const [hasPermission, setHasPermission] = React.useState(null);
//     const [type, setType] = React.useState(Camera.Constants.Type.back);

//     React.useEffect(() => {
//         (async () => {
//             const { status } = await Camera.requestCameraPermissionsAsync();
//             setHasPermission(status === 'granted');
//             if (this.camera) {
//                 let photo = await this.camera.takePictureAsync();
//             }
//         })();
//     }, []);

//     if (hasPermission === null) {
//         return <View />;
//     }
//     if (hasPermission === false) {
//         return <Text>No access to camera</Text>;
//     }
//     return (
//         <View style={{ flex: 1 }}>
//             <Camera style={{ flex: 1 }} type={type} ref={ref => {
//                 this.camera = ref;
//             }}>
//                 <View
//                     opacity={0.5}
//                     style={{ backgroundColor: colors.test_yellow, flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
//                     <Pressable
//                         style={styles.B_upload}
//                         onPress={() => {
//                             setType(
//                                 type === Camera.Constants.Type.back
//                                     ? Camera.Constants.Type.front
//                                     : Camera.Constants.Type.back
//                             );
//                         }}>

//                         {/* <Image source={require('../assets/camera.png')} style={{ width: 30, height: 30 }}></Image>

//                                         <Text style={styles.T_Button}>Camera</Text> */}
//                     </Pressable>
//                 </View>
//             </Camera>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     B_upload: {
//         marginBottom: 25,
//         backgroundColor: colors.WHITE,
//         //borderWidth: 1,
//         borderRadius: 50,
//         //flex: 1,
//         alignSelf: 'flex-end',      // justifyContent: 'space-evenly',
//         // alignContent: 'space-around',
//         // alignItems: 'center',
//         padding: 25,
//     }
// })
// export default CameraScreen;