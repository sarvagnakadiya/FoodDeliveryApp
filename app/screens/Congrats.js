import {
    View,
    Text,
    Image,
    StyleSheet,
    Pressable,
} from 'react-native'
import React from 'react'
import { colors, font, fsize } from '../Helper/Constants';

function Congrats({ props, navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.V_pattern}>
                <Image source={require('../assets/Pattern.png')} />
            </View>

            <View style={styles.V_logo}>
                <Image source={require('../assets/congrats.png')} />
                <Text style={styles.T_head}>Congrats!</Text>
                <Text style={styles.T_tagline}>Your Profile Is Ready To Use</Text>
            </View>
            <View style={styles.V_next}>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.push("BottomTab")}>
                    <Text style={styles.B_text}>Try Order</Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    V_logo: {
        //backgroundColor: colors.brown,               //test color brown
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0
    },
    V_pattern: {
        backgroundColor: colors.WHITE,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    T_tagline: {
        fontWeight: 'bold',
        fontSize: fsize.size22
    },
    T_head: {
        fontWeight: 'bold',
        fontSize: fsize.size40,
        color: colors.GREEN,

    },
    button: {
        width: 140,
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        //marginVertical: '30%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.GREEN,
    },
})
export default Congrats;
