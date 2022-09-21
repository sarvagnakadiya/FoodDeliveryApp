// import {
//     View,
//     Text,
//     Image,
//     StyleSheet
// } from 'react-native'
// import React from 'react'
// import { colors, font } from '../Helper/Constants';

// function SplashScreen() {

//     return (
//         <View style={styles.container}>
//             <View style={styles.V_pattern}>
//                 <Image source={require('../assets/Pattern.png')} />
//             </View>

//             <View style={styles.V_logo}>
//                 <Image source={require('../assets/Logo.png')} />
//                 <Text style={styles.T_head}>Food Ninja</Text>
//                 <Text style={styles.T_tagline}>Deliver favourite food</Text>
//             </View>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     V_logo: {
//         alignItems: 'center',
//     },
//     V_pattern: {
//         position: 'absolute',
//         top: 0,
//         bottom: 0,
//         left: 0,
//         right: 0
//     },
//     T_tagline: {
//         fontFamily: font.OS_Bold
//     },
//     T_head: {
//         fontWeight:'bold',
//         fontSize: 40,
//         color: colors.GREEN,

//     },
// })
// export default SplashScreen;