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
import { colors, font, fsize } from '../Helper/Constants';



function OtpScreen({ props, navigation }) {

    const [otp, onChangeOtp] = React.useState('');

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
                        <View style={styles.V_main}>

                            <Text style={styles.T_title}>
                                Enter 4-digit{"\n"}Verification Code
                            </Text>

                            <Text style={styles.T_subtitle}>
                                code sent to +919898983161{"\n"}the code will expire in 01:30
                            </Text>
                            <View style={styles.V_TextInput}>
                                <TextInput
                                    style={styles.TI_opt}
                                    maxLength='4'
                                    onChangeNumber={(otp) => onChangeOtp(otp)}
                                    //value={otp}
                                    keyboardType='numeric'
                                    textAlign={'center'}>

                                </TextInput>
                            </View>
                        </View>
                        <View style={styles.V_next}>
                            <Pressable
                                style={styles.B_next}
                                onPress={() => navigation.push("UploadImage")}>
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
    V_main: {
        //backgroundColor: colors.test_pink,                          //test color pink
        justifyContent: 'flex-start',
        marginHorizontal: 25,
        marginTop: 30,
        flex: 1,

    },
    V_next: {
        flexDirection: 'column-reverse',
        alignSelf: 'center',
        //backgroundColor: colors.test_purple,                      //test color purple
        alignItems: 'center',
        marginVertical: '10%',
    },
    V_TextInput: {
        marginTop: 12,
        flex: 1,
        alignItems: 'center',
        //marginLeft: 35,
        backgroundColor: colors.WHITE,                       //test color RED
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: colors.GREY,
        //borderWidth: 1,
        shadowColor: colors.shadow,
        shadowOffset: { width: 20, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 90,

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
        //marginTop: 25,
        fontWeight: 'bold',
        fontSize: fsize.size14,
        paddingTop: 10,
        //alignSelf: 'flex-start'
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
    TI_opt: {
        //backgroundColor: colors.brown,                //test color brown
        flex: 1,
        fontSize: fsize.size40,
        //padding: 20,

        letterSpacing: 50,
        paddingVertical: 15,
    }

})
export default OtpScreen;