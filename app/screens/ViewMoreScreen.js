import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    StatusBar,
    Image,
    ScrollView,
    Pressable
} from 'react-native'
import React from 'react'
import { colors, fsize } from '../Helper/Constants'
import { addToCart, increment, removeFromCart, viewMore } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ViewMoreScreen({ props, navigation }) {
    const dispatch = useDispatch();
    //const ViewMoreConst = (item) => dispatch(viewMore(item))
    const addToCartConst = (item) => dispatch(increment(item))
    //const addToCartConst = (item) => dispatch(addToCart(item), increment(item))
    const { foodList } = useSelector(state => state.reducer)

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                {/* --------------------------------------ImageBackground-------------------------------------- */}
                {foodList.map((item, key) => (
                    <Image style={styles.imageData} key={key} source={item.image} />
                ))}

                {/* --------------------------------------ScrollView-------------------------------------- */}
                <ScrollView>
                    <View style={styles.V_main}>
                        <View style={{ margin: 20 }}>

                            {foodList.map((item, key) => (
                                <Text style={styles.T_title} key={key}>{item.title}</Text>
                            ))}

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                                <View style={styles.V_ratings_orders}>
                                    <Icon
                                        style={{ paddingRight: 10 }}
                                        name='star-half-full'
                                        color={colors.GREEN}
                                        size={20}>
                                    </Icon>
                                    {foodList.map((item, key) => (
                                        <Text style={styles.T_subtitle} key={key}>{item.ratings} ratings</Text>
                                    ))}
                                </View>
                                <View style={styles.V_ratings_orders}>
                                    <Icon
                                        style={{ paddingRight: 10 }}
                                        name='bag-personal-outline'
                                        color={colors.GREEN}
                                        size={20}>
                                    </Icon>
                                    {foodList.map((item, key) => (
                                        <Text style={styles.T_subtitle} key={key}>{item.orders} orders</Text>
                                    ))}
                                </View>
                            </View>
                            {foodList.map((item, key) => (
                                <Text style={styles.T_subtitle} key={key}>{item.description}</Text>
                            ))}
                        </View>
                    </View>

                </ScrollView>

                <View style={styles.V_button}>
                    {foodList.map((item, key) => (

                        <Pressable key={key}
                            onPress={() => {
                                navigation.navigate("CartScreen"), addToCartConst(item)
                            }}
                            style={styles.B_addToCart}>
                            <Text style={styles.T_button_addToCart}>Add to cart</Text>
                        </Pressable>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    V_main: {
        backgroundColor: colors.WHITE,
        borderRadius: 40,
        paddingBottom: 500,
        marginTop: 400,
        zIndex: 2,
    },
    V_ratings_orders: {
        //backgroundColor: colors.test_green,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'

    },
    imageData: {
        //backgroundColor: colors.BLACK,
        flex: 1,
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
        position: 'absolute',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
    },
    V_button: {
        flex: 1,
        position: 'absolute',
        top: '91%',
        alignSelf: 'center',

        justifyContent: 'center',
        alignItems: 'center'
    },
    B_addToCart: {
        backgroundColor: colors.GREEN,
        // marginHorizontal: 20,
        paddingHorizontal: 130,
        paddingVertical: 10,
        borderColor: colors.BLACK,
        // borderWidth: 1,
        borderRadius: 10,

    },
    T_title: {
        fontWeight: 'bold',
        fontSize: fsize.size25,
        alignSelf: 'flex-start'
    },
    T_subtitle: {
        fontWeight: 'normal',
        fontSize: fsize.size12,
        //color: colors.BLACK,
    },
    T_button_addToCart: {
        //fontWeight:'bold',
        fontSize: fsize.size13,
        color: colors.WHITE,

    }
})
export default ViewMoreScreen;