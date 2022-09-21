import {
    View,
    SafeAreaView,
    Text,
    Image,
    StyleSheet,
    Pressable,
    StatusBar,
    Platform,
} from 'react-native'
import React from 'react'
import { colors, font } from '../Helper/Constants';

function Intro2({ props, navigation }) {

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.V_image}>
                <Image source={require('../assets/Illustration2.png')} resizeMode='cover' style={{ width: '100%' }} />
            </View>

            <View style={styles.V_next}>
                <Text style={styles.T_head}>Food Ninja Is Where Your{"\n"}Comfort Food Lives</Text>
                <Text style={styles.T_tagline}>Enjoy a fast and smooth food delivery at{"\n"}your doorstep</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.push("SignupScreen")}>
                    <Text style={styles.B_text}>Next</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    V_image: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0
    },
    V_next: {
        marginBottom: 50,
        alignItems: 'center',
    },
    T_head: {
        marginTop: 50,
        marginBottom: 20,
        //fontWeight:'bold',
        fontSize: 22,
        color: colors.BLACK,
        textAlign: 'center'
    },
    T_tagline: {
        marginBottom: 25,
        fontSize: 12,
        //fontWeight:'bold',
        textAlign: 'center'
    },
    B_text: {
        fontSize: 16,
        //fontWeight:'bold',
        color: colors.WHITE,
    },
    button: {
        width: 140,
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        //marginVertical: 30,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.GREEN,
    },
})
export default Intro2;