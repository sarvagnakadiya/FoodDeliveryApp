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
import { colors, font, fsize } from '../Helper/Constants';
import RestaurantData from '../model/RestaurantData';
import MenuData from '../model/MenuData';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increment, removeFromCart, viewMore } from '../redux/actions/action';
//firestore stuff
import firestore from '@react-native-firebase/firestore';
const ref = firestore().collection('foodlist');

function Home({ props, navigation }) {
    //firestore stuff
    //const [food, setFood] = useState('');
    firestore()
        .collection('foodlist')
        .get()
        .then(querySnapshot => {
            console.log('Total users: ', querySnapshot.size);

            querySnapshot.forEach(documentSnapshot => {
                console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            });
        });
    const [loading, setLoading] = React.useState(true);
    const [foods, setFoods] = React.useState([]);

    React.useEffect(() => {
        return ref.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { title, price } = doc.data();
                list.push({
                    //id: doc.id,
                    title,
                    price,
                });
            });

            setFoods(list);

            if (loading) {
                setLoading(false);
            }
        });
    }, []);
    console.log(foods);


    const dispatch = useDispatch();
    const submitData = (item) => dispatch(addToCart(item), increment(item))
    const removeData = (item) => dispatch(removeFromCart(item))
    const ViewMoreConst = (item) => dispatch(viewMore(item), navigation.push("ViewMoreScreen"))

    const { foodList } = useSelector(state => state.reducer)


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../assets/Pattern.png')} style={styles.V_background}>
                <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', }}>
                    <Text style={styles.T_title}>
                        Find Your{'\n'}Favourite Food
                    </Text>
                    <Pressable
                        style={styles.B_notification}
                        onPress={() => navigation.navigate("CartScreen")}>
                        <Text>{foodList.length}</Text>
                        <Icon
                            name="cart-outline"
                            color={colors.GREEN}
                            size={25}></Icon>
                    </Pressable>
                </View>


                {/* --------------------------home---------------------- */}

                <ScrollView>
                    <View style={styles.V_home}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.V_passeye}>
                                <TouchableOpacity>
                                    <Icon
                                        style={{ padding: 10 }}
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

                        {/* -----------------------------------------special deal---------------------------------  */}
                        <View style={styles.V_button}>
                            <ImageBackground style={styles.V_special_deal}
                                source={require('../assets/Pattern_special_deal.png')}>
                                <Image source={require('../assets/product_special_deal.png')} style={{ resizeMode: 'contain' }}></Image>
                                {/* ------------------------------------V_btnText------------------ */}
                                <View style={styles.V_btnText}>
                                    <Text
                                        style={styles.T_Button}>Special Deal for{"\n"}october</Text>
                                    <Pressable
                                        style={styles.button}
                                        onPress={() => navigation.push("Chats")}>
                                        <Text style={styles.B_text}>Buy Now</Text>
                                    </Pressable>
                                </View>
                            </ImageBackground>
                        </View>

                        {/* ----------------------------------------nearest Restaurant---------------------------- */}
                        <View style={{ marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: fsize.size15, fontWeight: 'bold', color: colors.BLACK, }}>Nearest Restaurant</Text>
                            <Pressable onPress={() => navigation.push("ExploreRestaurant")}>
                                <Text style={{ fontSize: fsize.size12, fontWeight: 'normal', color: colors.orange }}>View More</Text>
                            </Pressable>
                        </View>

                        <FlatList horizontal
                            data={RestaurantData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <Pressable key={index} style={styles.B_restaurants}>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={item.image}></Image>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ marginHorizontal: 20, fontSize: fsize.size16, fontWeight: 'bold', color: colors.BLACK, }}>{item.title}</Text>
                                            <Text style={{ marginTop: 5, marginHorizontal: 20, color: colors.BLACK, }}>{item.time}</Text>
                                        </View>
                                    </Pressable>
                                )
                            }}
                        />
                        {/* ----------------------------------------testing flatlist---------------------------------------- */}
                        {/* <Image style={{ flex: 1, height: 100, width: 100, backgroundColor: colors.test_pink }} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/ether-9898.appspot.com/o/GreenNoodle.png?alt=media&token=dc60bbf0-a7ae-4d11-9121-2634ca3d3a47' }}></Image>
                        <FlatList horizontal
                            data={foods}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                console.log("data from flatlist");
                                return (
                                    <Pressable key={index} style={styles.B_restaurants}>

                                        <Image style={{ flex: 1, height: 100, width: 100, backgroundColor: colors.test_pink }} source={item.image}></Image>

                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ marginHorizontal: 20, fontSize: fsize.size16, fontWeight: 'bold' }}>{item.title}</Text>
                                            <Text style={{ marginTop: 5, marginHorizontal: 20 }}>{item.price}</Text>
                                        </View>
                                    </Pressable>
                                )
                            }}
                        /> */}


                        {/* -----------------------------popular menu------------------------ */}
                        <View style={{ marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: fsize.size15, fontWeight: 'bold', color: colors.BLACK, }}>Popular Menu</Text>
                            <Pressable onPress={() => navigation.push("ExploreMenu")}>
                                <Text style={{ fontSize: fsize.size12, fontWeight: 'normal', color: colors.orange, }}>View More</Text>
                            </Pressable>
                        </View>
                        {/* -------------------------------------popular menu FLatList-------------------------------------------- */}
                        <FlatList
                            horizontal
                            data={MenuData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <Pressable key={index} onPress={() => ViewMoreConst(item)} style={styles.B_foodmenu}>
                                        <Image source={item.image}></Image>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ marginHorizontal: 10, fontSize: fsize.size16, fontWeight: 'bold', color: colors.BLACK, }}>{item.title}</Text>
                                            <Text style={{ marginHorizontal: 10, color: colors.BLACK, }}>{item.restaurant}</Text>
                                        </View>
                                        <Text style={{ marginHorizontal: 20, fontSize: fsize.size22, fontWeight: 'bold', color: colors.price, }}>{item.price}</Text>

                                        {/* ---------------------add/remove buttons--------------------- */}
                                        <Pressable onPress={() => {
                                            submitData(item)
                                        }} style={{ backgroundColor: colors.red, borderRadius: 5, height: 25, width: 25, alignItems: 'center', justifyContent: 'center', marginRight: 5 }}>
                                            <Icon
                                                name='plus'
                                                size={10}
                                                color={colors.WHITE}></Icon>
                                        </Pressable>
                                        <Pressable onPress={() => {
                                            removeData(item)
                                        }} style={{ backgroundColor: colors.red, borderRadius: 5, height: 25, width: 25, alignItems: 'center', justifyContent: 'center' }}>
                                            <Icon
                                                name='minus'
                                                size={10}
                                                color={colors.WHITE}></Icon>
                                        </Pressable>
                                    </Pressable>

                                )
                            }}
                        />
                    </View>
                </ScrollView>
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
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.30,
        shadowRadius: 10,
        borderRadius: 15,
    },
    B_foodmenu: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: colors.WHITE, alignItems: 'center', marginRight: 10, shadowColor: colors.shadow,
        shadowOffset: { width: 10, height: 10 },
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
        height: 40,
        color: colors.BLACK,
        //marginTop: 12,
        // borderWidth: 1,
        // borderColor: colors.GREY,
        // borderRadius: 10,
        //width: '100%',
        // flex: 1,
        // //backgroundColor: colors.red,                //test color red
        // padding: 10,
    },

    T_title: {
        //marginTop: 5,

        fontWeight: 'bold',
        fontSize: fsize.size25,
        alignSelf: 'flex-start',
        color: colors.BLACK,
    },
    T_subtitle: {
        marginTop: 20,
        fontWeight: 'normal',
        fontSize: fsize.size12,
        alignSelf: 'flex-start',
        color: colors.BLACK,
    },
    T_Button: {
        //marginTop: 25,
        color: colors.BLACK,
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
        flexDirection: 'row',
        //marginVertical: 30,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.WHITE,
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
export default Home;