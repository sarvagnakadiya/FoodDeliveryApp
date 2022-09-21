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

function Intro1({ props, navigation }) {

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.V_image}>
                <Image source={require('../assets/Illustartion.png')} resizeMode='cover' style={{ width: '100%' }} />
            </View>

            <View style={styles.V_next}>
                <Text style={styles.T_head}>Find your comfort {"\n"}Food here</Text>
                <Text style={styles.T_tagline}>Here you can find a chef or dish for every {"\n"}taste and color. Enjoy!</Text>
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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    V_image: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'stretch',
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
        marginBottom: 20,
        //fontWeight:'bold',
        fontSize: 22,
        color: colors.BLACK,
        textAlign: 'center'
    },
    T_tagline: {
        marginBottom: 30,
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
export default Intro1;