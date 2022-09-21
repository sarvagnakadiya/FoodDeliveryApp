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
} from 'react-native'
import React, { useContext, useEffect } from 'react'
import { colors, font, fsize } from '../Helper/Constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../authentication/AuthProvider';
import auth from '@react-native-firebase/auth';

function SignupScreen({ props, navigation }) {
    const { user, setUser, login, register } = useContext(AuthContext);
    const onAuthStateChanged = (user) => {
        setUser(user);
    };
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    //---------------Text input useState------------------------------

    const [data, setData] = React.useState({
        username: 'sarvagna@gmail.com',
        password: '12345678',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        isValidEmail: true,
    });

    const textInputChange = (val) => {
        setData({
            ...data,
            username: val
        })
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,

        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    //----------------------------EMAIL and PASSWORD VALIDATIONS-------------------------------- ___@___.___  <=
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    const validateForm = () => {
        if (reg.test(data.username) === false) {
            setData({
                ...data,
                isValidEmail: false
            });
            return false
        }

        if (data.password.length < 8) {
            setData({
                ...data,
                isValidEmail: true,
                isValidPassword: false
            });
            return false
        }

        return true
    }

    //-------------------------USER VALIDATE---------------------------------------LOGIC-----------------------------

    const SignupHandle = (userName, password) => {
        if (validateForm()) {
            register(userName, password)
            navigation.push("SignupDetails")
        }
    }
    //-----------------------------radio change-----------------------------------
    const [signinRadio, setSigninRadio] = React.useState(false);
    const [emailRadio, setEmailRadio] = React.useState(false);
    const handleSigninRadioChange = () => {
        setSigninRadio(!signinRadio)
    }
    const handleEmailRadioChange = () => {
        setEmailRadio(!emailRadio)
    }
    // let color;

    // if (value == true) {
    //     color = "green";
    // } else if (value == false) {
    //     color = "red";

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/Pattern.png')} style={styles.V_background}>
                <ScrollView>
                    <View style={styles.V_logo}>
                        <Image source={require('../assets/Logo.png')} />
                        <Text style={styles.T_head}>Food Ninja</Text>
                        <Text style={styles.T_tagline}>Deliver favourite food</Text>
                    </View>

                    <View style={styles.V_input}>
                        <Text style={styles.T_loginText}>
                            Sign Up For Free
                        </Text>

                        <View style={styles.V_textInput}>
                            <View style={[styles.V_passeye]}>
                                <Icon style={{ marginLeft: 10 }}
                                    name="account"
                                    color={colors.GREEN}
                                    size={20}></Icon>
                                <TextInput
                                    style={styles.TI_input}
                                    placeholder="Enter Name"
                                    autoCapitalize="none"
                                // onChangeText={(val) => textInputChange(val)}
                                // onEndEditing={(e) => handleValidEmail(e.nativeEvent.text)}
                                />
                            </View>
                            <View style={styles.V_passeye}>
                                <Icon style={{ marginLeft: 10 }}
                                    name="email-variant"
                                    color={colors.GREEN}
                                    size={20}></Icon>
                                <TextInput
                                    style={styles.TI_input}
                                    placeholder="Enter Email"
                                    value={data.username}
                                    autoCapitalize="none"
                                    onChangeText={(val) => textInputChange(val)}
                                />
                            </View>
                            {data.isValidUser ? null :
                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={styles.T_error}>Username must be 4 characters long.</Text>
                                </Animatable.View>
                            }
                            {data.isValidEmail ? null :
                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={styles.T_error}>Enter Valid Email ID</Text>
                                </Animatable.View>
                            }
                            <View style={styles.V_passeye}>
                                {/* <View> */}
                                <Icon style={{ marginLeft: 10 }}
                                    name="lock"
                                    color={colors.GREEN}
                                    size={20}></Icon>
                                <TextInput
                                    style={styles.TI_input}
                                    placeholder="Password"
                                    value={data.password}
                                    secureTextEntry={data.secureTextEntry ? true : false}
                                    autoCapitalize="none"
                                    onChangeText={(val) => handlePasswordChange(val)}

                                />
                                {/* </View> */}
                                {/* <View> */}
                                <TouchableOpacity style={{ marginHorizontal: 15 }}
                                    onPress={updateSecureTextEntry}>

                                    {data.secureTextEntry ?
                                        <Icon
                                            name="eye-off"
                                            color="grey"
                                            size={20}
                                        />
                                        :
                                        <Icon
                                            name="eye"
                                            color="grey"
                                            size={20}
                                        />
                                    }

                                </TouchableOpacity>
                                {/* </View> */}
                            </View>
                            {data.isValidPassword ? null :
                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={styles.T_error}>Password must be 8 characters long.</Text>
                                </Animatable.View>}
                        </View>


                        {/* --------------------------------------------------------radio button-------------------------------------------------------                         */}
                        <View style={styles.V_buttonsv}>
                            <Pressable style={[styles.V_buttons]} onPress={handleSigninRadioChange}>
                                <View style={styles.V_radioButton}>
                                    {signinRadio ?
                                        <Pressable style={styles.V_radioButton_uncheck}></Pressable>
                                        :
                                        <Icon
                                            name="check"
                                            color="white"
                                            size={20}
                                        />
                                    }
                                </View>
                                <Text style={styles.T_radio}>Keep Me Signed In</Text>
                            </Pressable>

                            <Pressable style={[styles.V_buttons]} onPress={handleEmailRadioChange}>
                                <View style={[styles.V_radioButton, {}]}>
                                    {emailRadio ?
                                        <Pressable style={styles.V_radioButton_uncheck}></Pressable>
                                        :
                                        <Icon
                                            name="check"
                                            color="white"
                                            size={20}
                                        />
                                    }
                                </View>
                                <Text style={styles.T_radio}>Email me about special pricing</Text>
                            </Pressable>

                            {/* <View style={styles.V_buttons}>
                                <Pressable
                                    style={styles.loginButton}
                                    onPress={() => navigation.push("Intro2")}>
                                </Pressable>
                                <Text style={styles.T_radio}>Email me about special Pricing</Text>
                            </View> */}


                        </View>
                        <Pressable
                            style={styles.button}
                            onPress={() => {
                                SignupHandle(data.username, data.password);
                            }}>
                            <Text style={styles.B_text}>Create Account</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                navigation.push("LoginScreen")
                            }}>
                            <Text style={styles.T_forgot}>Already Have an Account</Text>
                        </Pressable>

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
        //backgroundColor: colors.BLACK,
        justifyContent: 'flex-start',
        // alignItems: 'center',
        flex: 1,
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0
    },
    checkbox: {
        alignSelf: "center",
    },
    V_logo: {
        //backgroundColor: colors.test_red,       //test color
        marginTop: '5%',
        alignItems: 'center',
    },
    V_input: {
        flex: 1,
        justifyContent: 'flex-end',
        //backgroundColor: colors.test_yellow,           //test color
        marginVertical: '10%',

    },
    V_textInput: {
        //backgroundColor: colors.test_green,           //test green
        marginHorizontal: 25,
        marginTop: 40,
        marginBottom: 20

    },
    V_passeye: {
        marginTop: 12,
        flex: 1,
        alignItems: 'center',
        //backgroundColor: colors.test_red,                       //test color RED
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: colors.GREY,
        borderWidth: 1,
    },
    V_buttons: {
        marginTop: 10,
        marginLeft: 30,
        //backgroundColor: colors.test_yellow,            //test color
        justifyContent: 'flex-start',
        flexDirection: 'row'

    },
    V_buttonsv: {
        marginTop: 10,
        //backgroundColor: colors.test_pink,            //test color
        justifyContent: 'space-evenly',
        flexDirection: 'column'

    },
    V_radioButton: {
        borderWidth: 1,
        borderColor: colors.GREY,
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: colors.GREEN,
    },
    V_radioButton_uncheck: {
        flex: 1,
        //borderWidth: 1,
        borderColor: colors.BLACK,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: colors.WHITE,
    },

    TI_input: {
        flexDirection: 'column',
        //marginTop: 12,
        // borderWidth: 1,
        // borderColor: colors.GREY,
        // borderRadius: 10,
        height: 40,
        //width: '100%',
        flex: 1,
        //backgroundColor: colors.test4,
        padding: 10,
    },
    T_loginText: {
        //marginTop: 5,
        fontWeight: 'bold',
        fontSize: fsize.size20,
        alignSelf: 'center'
    },
    T_Button: {
        marginLeft: 10,
        fontWeight: 'normal',
        fontSize: fsize.size14,
    },
    T_error: {
        fontWeight: 'normal',
        fontSize: fsize.size10,
        color: colors.red,
    },

    T_head: {
        fontWeight: 'bold',
        fontSize: fsize.size40,
        color: colors.GREEN,

    },
    T_tagline: {
        fontWeight: 'bold',
        fontSize: fsize.size13,
        color: colors.BLACK,
    },
    T_forgot: {
        textDecorationLine: 'underline',
        fontWeight: 'normal',
        color: colors.GREEN,
        alignSelf: 'center',
        marginTop: 15,
    },
    T_radio: {
        fontWeight: 'normal',
        fontSize: fsize.size12,
        color: colors.BLACK,
        alignSelf: 'center',
        marginLeft: 10,
    },
    button: {
        width: 140,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '5%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.GREEN,
    },
    B_text: {
        fontWeight: 'bold',
        fontSize: fsize.size13,
        color: colors.WHITE,
    }
})
export default SignupScreen;