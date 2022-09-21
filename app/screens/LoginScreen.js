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
import React, { useContext, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { colors, fsize } from '../Helper/Constants';
import { AuthContext } from '../authentication/AuthProvider';
import auth from '@react-native-firebase/auth';


function LoginScreen({ props, navigation }) {
    //---------------Text input useState------------------------------

    const { user, setUser, login, register } = useContext(AuthContext);


    const onAuthStateChanged = (user) => {
        setUser(user);
    };
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

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
    // let [foundUser, setFoundUser] = React.useState(false);
    //let foundUser = false;

    const loginHandle = async (userName, password) => {

        // const foundUser = Users.filter(item => {
        //     return userName == item.username && password == item.password;
        // });

        // if (data.username.length == 0 || data.password.length == 0) {
        //     Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
        //         { text: 'Okay' }
        //     ]);
        //     return;
        // }

        // if (foundUser.length == 0) {
        //     Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        //         { text: 'Okay' }
        //     ]);
        //     return;
        // }
        //signIn(foundUser);

        // const foundUser = login(userName, password)
        // return;



        // const foundUser = (login.userName,login.password) => {
        //     navigation.push("Intro1")
        // }
        if (validateForm()) {
            let user = await login(userName, password)
            if (user) {
                navigation.push("BottomTab")
            }
            else {
                Alert.alert('Enter valid Username or Password',
                    [{ text: 'Okay' }]);
            }
            // foundUser = true;
        }

    }


    //console.log(data)
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
                            Login to your Account
                        </Text>

                        <View style={styles.V_textInput}>
                            <View style={styles.V_passeye}>
                                <TextInput
                                    style={styles.TI_input}
                                    placeholder="Enter Email"
                                    value={data.username}
                                    autoCapitalize="none"
                                    onChangeText={(val) => textInputChange(val)}         //original
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
                                <TextInput
                                    style={styles.TI_input}
                                    value={data.password}
                                    placeholder="Password"
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
                        <Text style={[styles.T_loginText, { fontSize: fsize.size12, marginVertical: 7 }]}>
                            Or login with
                        </Text>

                        <View style={styles.V_buttons}>
                            <Pressable
                                style={styles.loginButton}
                                onPress={() => navigation.push("SignupDetails")}>

                                <Image source={require('../assets/facebook.png')} style={{ width: 20, height: 20 }}></Image>

                                <Text style={styles.T_Button}>Facebook</Text>
                            </Pressable>
                            <Pressable
                                style={styles.loginButton}
                                onPress={() => navigation.push("SignupDetails")}>
                                <Image source={require('../assets/google.png')} style={{ width: 20, height: 20 }}></Image>

                                <Text style={styles.T_Button}>Google</Text>
                            </Pressable>
                        </View>
                        <Text onPress={() => navigation.push("ForgotPassword")}
                            style={styles.T_forgot}>Forgot Your Password</Text>
                        <Pressable
                            style={styles.button}
                            onPress={() => {
                                // if
                                //login(data.username, data.password)
                                loginHandle(data.username, data.password);
                            }}>
                            <Text style={styles.T_button_next}>Next</Text>
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
    V_logo: {
        //backgroundColor: colors.test2,
        marginTop: '5%',
        alignItems: 'center',
    },
    V_input: {
        flex: 1,
        justifyContent: 'flex-end',
        //backgroundColor: colors.test_yellow,                //test color YELLOW
        marginVertical: '10%',


    },
    V_textInput: {
        //backgroundColor: colors.test_pink,                      //test color pink
        marginHorizontal: 25,
        marginVertical: 30,
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
        //backgroundColor: colors.test3,
        justifyContent: 'space-evenly',
        flexDirection: 'row'

    },
    loginButton: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.GREY,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        borderRadius: 10,
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
        //backgroundColor: colors.red,                //test color red
        padding: 10,
    },
    T_loginText: {
        //marginTop: 5,
        //fontWeight:'bold',
        fontSize: fsize.size20,
        alignSelf: 'center'
    },
    T_Button: {
        marginLeft: 10,
        // fontWeight: 'normal',
        fontSize: fsize.size14,
    },

    T_head: {
        //fontWeight:'bold',
        fontSize: fsize.size40,
        color: colors.GREEN,

    },
    T_tagline: {
        // fontWeight: 'bold',
        fontSize: fsize.size13,
        color: colors.BLACK,
    },
    T_error: {
        // fontWeight: 'normal',,
        fontSize: fsize.size10,
        color: colors.red,
    },
    T_forgot: {
        textDecorationLine: 'underline',
        // fontWeight: 'normal',
        color: colors.GREEN,
        alignSelf: 'center',
        marginTop: 15,
    },
    button: {
        width: 140,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        //flexDirection: 'row',
        marginTop: '5%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.GREEN,
    },
    T_button_next: {
        //fontWeight:'bold',
        fontSize: fsize.size13,
        color: colors.WHITE,

    }
})
export default LoginScreen;