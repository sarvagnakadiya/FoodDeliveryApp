import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TextInput,
    StatusBar,
    Pressable,
    ScrollView,
    TouchableOpacity,
    Alert,
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { colors, fsize } from '../Helper/Constants';



function ForgotPassword({ props, navigation }) {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Pattern.png')} style={styles.V_background}>
                <Pressable
                    style={styles.B_backButton}
                    onPress={() => navigation.navigate("SignupScreen")}>
                    <Icon
                        name="chevron-left"
                        color={colors.brown}
                        size={20}></Icon>
                </Pressable>
                <ScrollView>
                    <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                        <View style={styles.V_Upload}>

                            <Text style={styles.T_title}>
                                Forgot Password?
                            </Text>

                            <Text style={styles.T_subtitle}>
                                Select which contact Details should we{"\n"}use to reset your password
                            </Text>

                            {/* ---------V_buttons---------------- */}
                            <View style={styles.V_buttons}>
                                {/* ------------------------V_button------------------ */}
                                <View style={styles.V_button}>
                                    <Icon style={{ alignSelf: 'center', marginRight: 20 }}
                                        name="message-text-outline"
                                        color={colors.GREEN}
                                        size={30}>

                                    </Icon>
                                    {/* --------------------------V_btnText------------------ */}
                                    <View style={styles.V_btnText}>
                                        <Text style={styles.T_Button}>Via sms</Text>
                                        <Text style={styles.T_Button}>... ... 8647</Text>

                                    </View>
                                </View>
                                {/* ------------------------V_button------------------ */}
                                <View style={styles.V_button}>
                                    <Icon style={{ alignSelf: 'center', marginRight: 20 }}
                                        name="email-variant"
                                        color={colors.GREEN}
                                        size={30}>

                                    </Icon>
                                    {/* --------------------------V_btnText------------------ */}
                                    <View style={styles.V_btnText}>
                                        <Text style={styles.T_Button}>Via Email </Text>
                                        <Text style={styles.T_Button}>..........@gmail.com</Text>

                                    </View>
                                </View>







                            </View>
                        </View>
                        <View style={styles.V_next}>
                            <Pressable
                                style={styles.B_next}
                                onPress={() => navigation.push("Intro2")}>
                                <Text style={styles.T_button_next}>Next</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    V_background: {
        flex: 1,
        //backgroundColor: colors.BLACK,
        justifyContent: 'flex-end',
        //alignContent: 'flex-end',
        //alignItems: 'center',
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0
    },
    V_Upload: {
        //backgroundColor: colors.test_pink,                          //test color pink
        justifyContent: 'flex-start',
        marginHorizontal: 25,
        marginTop: 25,
        flex: 1,

    },
    V_buttons: {
        borderRadius: 10,
        justifyContent: 'space-evenly',
        //backgroundColor: colors.red,                      //test color red
        flex: 1
    },
    V_button: {
        borderRadius: 10,
        padding: 15,
        marginTop: 25,
        //justifyContent: 'space-evenly',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.WHITE,
        shadowColor: colors.shadow,
        //shadowOffset: { width: 20, height: 20 },
        shadowOpacity: 0.50,
        shadowRadius: 90,            //test color purple
    },
    V_btnText: {
        justifyContent: 'center',
        flex: 1,
        //backgroundColor: colors.test_yellow               //test color yellow
    },
    V_next: {
        flexDirection: 'column-reverse',
        alignSelf: 'center',
        //backgroundColor: colors.test_purple,                      //test color purple
        alignItems: 'center',
        marginVertical: '10%',
    },
    T_title: {
        //marginTop: 5,
        fontWeight: 'bold',
        fontSize: fsize.size25,
        alignSelf: 'flex-start'
    },
    T_subtitle: {
        marginTop: 20,
        fontWeight: 'normal',
        fontSize: fsize.size12,
        alignSelf: 'flex-start'
    },
    T_Button: {
        fontSize: fsize.size16,
        marginVertical: 5,
        fontWeight: 'normal',
    },
    T_button_next: {
        fontWeight: 'bold',
        fontSize: fsize.size13,
        color: colors.WHITE,
    },
    B_backButton:
    {
        //marginTop: '5%',
        marginTop: 25,
        marginLeft: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        //marginVertical: 30,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.peach,
    },
    B_upload: {
        marginBottom: 25,
        backgroundColor: colors.WHITE,
        //borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignContent: 'space-around',
        alignItems: 'center',
        padding: 25,
    },
    B_next: {
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
export default ForgotPassword;