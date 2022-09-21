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


function SignupDetails({ props, navigation }) {

    const [name, onChangeName] = React.useState('');
    const [surname, onChangeSurname] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

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
                                Fill in Your Bio to get {"\n"}started
                            </Text>
                            <Text style={styles.T_subtitle}>
                                This data will be displayed in your account{"\n"}profile for security
                            </Text>
                            <View style={styles.V_buttons}>
                                <View style={styles.V_passeye}>
                                    <TextInput
                                        style={styles.TI_input}
                                        placeholder="First Name"
                                        //value={data.username}
                                        autoCapitalize="none"
                                    //onChangeText={(val) => textInputChange(val)}         //original
                                    />
                                </View>
                                <View style={styles.V_passeye}>
                                    <TextInput
                                        style={styles.TI_input}
                                        placeholder="Last Name"
                                        //value={data.username}
                                        autoCapitalize="none"
                                    //onChangeText={(val) => textInputChange(val)}         //original
                                    />
                                </View>
                                <View style={styles.V_passeye}>
                                    <TextInput
                                        style={styles.TI_input}
                                        placeholder="Mobile Number"
                                        //value={data.username}
                                        autoCapitalize="none"
                                        keyboardType='numeric'
                                        maxLength={10}
                                        onChangeText={(number) => onChangeNumber(number)}
                                        value={number}
                                    />
                                </View>






                            </View>
                        </View>
                        <View style={styles.V_next}>
                            <Pressable
                                style={styles.B_next}
                                onPress={() => navigation.push("BottomTab")}>
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
        //backgroundColor: colors.test_red,                          //test color red
        justifyContent: 'space-evenly',
        //marginHorizontal: 25,
        marginTop: 25,
        shadowColor: colors.shadow,
        //shadowOffset: { width: 20, height: 20 },
        shadowOpacity: 0.30,
        shadowRadius: 90,

    },
    V_next: {
        flexDirection: 'column-reverse',
        alignSelf: 'center',
        //backgroundColor: colors.test_purple,                      //test color purple
        alignItems: 'center',
        marginVertical: '10%',
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
export default SignupDetails;