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
    SafeAreaView,
    FlatList
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { colors, font, fsize } from '../Helper/Constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantData from '../model/RestaurantData';
import Profiles from '../model/Profiles';

function Chats({ props, navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../assets/Pattern.png')} style={styles.V_background}>
                {/* ---------------------------------------------header------------------------------------------------------------ */}
                <View style={{ marginHorizontal: 25, justifyContent: 'space-around', justifyContent: 'center' }}>
                    <Pressable
                        style={styles.B_notification}
                        onPress={() => navigation.navigate("Home")}>
                        <Icon
                            name="chevron-left"
                            color={colors.brown}
                            size={30}></Icon>
                    </Pressable>
                    <Text style={styles.T_title}>
                        Chats
                    </Text>
                </View>


                {/* ---------------------------------------------home---------------------------------------------------------- */}


                <View style={styles.V_home}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={styles.V_passeye}>
                            <TouchableOpacity>
                                <Icon
                                    style={{ paddingHorizontal: 10 }}
                                    name='magnify'
                                    color={colors.brown}
                                    size={20}
                                ></Icon>
                            </TouchableOpacity>
                            <TextInput
                                style={styles.TI_input}
                                placeholder="What do You want to order"

                            />
                        </View>
                        <TouchableOpacity style={styles.B_filter}>
                            <Icon
                                style={{ padding: 10 }}
                                name='filter-variant'
                                color={colors.brown}
                                size={20}>
                            </Icon>
                        </TouchableOpacity>
                    </View>





                    <FlatList
                        data={Profiles}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <Pressable key={index} style={styles.B_foodmenu}>
                                    <Image source={item.image}></Image>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ marginHorizontal: 10, fontSize: fsize.size16, fontWeight: 'bold' }}>{item.name}</Text>
                                        <Text style={{ marginHorizontal: 10 }}>{item.chat}</Text>
                                    </View>
                                    <Text style={{ fontSize: fsize.size14, fontWeight: 'normal', }}>{item.time}</Text>

                                </Pressable>
                            )
                        }} />


                </View>
            </ImageBackground>
        </SafeAreaView>
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
        //justifyContent: 'center',
    },
    V_special_deal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: colors.GREEN,
        width: '100%',
        height: '100%',
        borderRadius: 20
    },
    V_home: {
        marginTop: 12,
        //backgroundColor: colors.test_red,                          //test color RED
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        flex: 1,

    },
    V_button: {
        borderRadius: 10,
        //padding: 15,
        marginTop: 25,
        //justifyContent: 'space-evenly',
        flex: 1,
        flexDirection: 'row',
        //backgroundColor: colors.test_pink,
        shadowColor: colors.shadow,
        //shadowOffset: { width: 20, height: 20 },
        shadowOpacity: 0.50,
        shadowRadius: 90,
    },
    V_btnText: {

        justifyContent: 'space-evenly',
        flex: 1,
        alignItems: 'center',
        //backgroundColor: colors.test_yellow               //test color yellow
    },
    V_passeye: {
        //marginTop: 20,
        height: 40,
        flex: 1,
        alignItems: 'center',
        //backgroundColor: colors.test_red,                       //test color RED
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: colors.peach,
    },
    B_filter: {
        //marginTop: 20,
        marginLeft: 10,
        //flex: 1,
        alignItems: 'center',
        //backgroundColor: colors.test_red,                       //test color RED
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: colors.peach,

    },
    B_restaurants: {
        margin: 10,
        padding: 10,
        backgroundColor: colors.WHITE, alignItems: 'center', marginRight: 10, shadowColor: colors.shadow,
        //shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.30,
        shadowRadius: 10,
        borderRadius: 15,
    },
    B_foodmenu: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: colors.WHITE, alignItems: 'center', marginRight: 10, shadowColor: colors.shadow,
        //shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.30,
        shadowRadius: 10,
        borderRadius: 15,
    },
    V_next: {
        flexDirection: 'column-reverse',
        alignSelf: 'center',
        //backgroundColor: colors.test_purple,                      //test color purple
        alignItems: 'center',
        marginVertical: '10%',
    },
    TI_input: {
        flexDirection: 'column',
        //marginTop: 12,
        // borderWidth: 1,
        // borderColor: colors.GREY,
        // borderRadius: 10,
        height: 40,
        //width: '100%',
        //flex: 1,
        //backgroundColor: colors.red,                //test color red
        //padding: 10,
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
        fontSize: fsize.size17,
        //paddingTop: 10,
        textAlign: 'center'
        //alignSelf: 'flex-start'
    },
    T_button_next: {
        fontWeight: 'bold',
        fontSize: fsize.size13,
        color: colors.WHITE,
    },
    B_notification:
    {
        shadowColor: colors.shadow,
        //shadowOffset: { width: 20, height: 20 },
        shadowOpacity: 0.50,
        shadowRadius: 10,
        width: 50,
        height: 50,
        justifyContent: 'center',
        //flexDirection: 'row',
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
    button: {
        width: 100,
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        //marginVertical: 30,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.WHITE,
    },
    B_text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.GREEN,
    },

})
export default Chats;