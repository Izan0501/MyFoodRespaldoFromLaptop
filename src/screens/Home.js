import {
    StyleSheet,
    Text,
    FlatList,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Pressable,
    Platform
} from 'react-native'

import React from 'react';
import Carousel from '../components/Carousel';
import SearchBar from '../components/SearchBar';
import { setCategorySelected, setIdSelected } from '../features/Products/productsSlice';
import icons from '../constants/icons';
import { useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductsByIdQuery } from "../services/shopServices";
import { useDispatch, useSelector } from 'react-redux';

const Home = ({
    navigation,
    route
}) => {

    // Restaurant list & category list (data)

    const categorySelected = useSelector(state => state.shopReducer.value)
    // const itemIdSelected = useSelector(state => state.shopReducer.value.itemIdSelected)

    const [restaurants, setRestaurants] = React.useState(null);

    const [selectedCategory, setSelectedCategory] = React.useState(null);

    const { data: categories, error } = useGetCategoriesQuery();

    const { data: productsFetched, error: errorFetched, isLoading } = useGetProductsByCategoryQuery(categorySelected);

    const dispatch = useDispatch()

    console.log(categorySelected);
    // console.log(productsFetched);
    //console.log(selectedCategory);

    // selectCategory function
    function onSelectedCategory(category) {

        const restaurantList = productsFetched.filter(a => a.categoryId == (category.id)
            || a.categoryId == (category.idRes)
            || a.categoryId == (category.idResTwo)
        )

        setSelectedCategory(category)
        dispatch(setCategorySelected(category))
        setRestaurants(restaurantList);
    }

    console.log(restaurants);

    //rendeder categories section
    function renderCategories() {

        const renderItem = ({ item }) => {

            return (
                <Pressable
                    style={{
                        marginTop: -19,
                        padding: 10,
                        paddingBottom: 20,
                        backgroundColor: (selectedCategory?.id === item.id) ? "#FC6D3F" : 'white',
                        alignItems: 'center',
                        borderRadius: 30,
                        justifyContent: 'center',
                        marginRight: 20,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectedCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: 'center',
                            backgroundColor: (selectedCategory?.id === item.id) ? "white" : '#e3d7bf'//'#898C95',
                        }}
                    >
                        <Image
                            source={{ uri: item.image[0] }}
                            resizeMode='contain'
                            style={{
                                marginTop: 10,
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            fontSize: 13,
                            marginTop: 10,
                            color: (selectedCategory?.id === item.id) ? "white" : '#000',
                            fontWeight: 'bold',
                        }}
                    >
                        {item.name}
                    </Text>
                </Pressable>
            )
        }

        return (
            <View style={{ padding: 20 }}>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(category) => category.id}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: 20 }}
                />
            </View>
        );
    };

    //render Restaurant List mainMenu
    function renderRestaurantList() {

        const renderItem = ({ item }) => (

            <TouchableOpacity
                style={{
                    marginBottom: 20,
                    // ...styles.shadow
                }}
                onPress={() => navigation.navigate('Restaurant', item)}
            >
                <View
                    style={{
                        marginBottom: 10,
                    }}>
                    <Image
                        source={{ uri: item.image }}
                        resizeMode='cover'
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 30
                        }}
                    />
                    <View style={{
                        position: 'absolute',
                        bottom: 0,
                        height: 50,
                        width: 123.5,
                        backgroundColor: 'white',
                        borderTopRightRadius: 30,
                        borderBottomLeftRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...styles.shadow
                    }}>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: '#000',
                                fontSize: 16.5
                            }}
                        >{item.duration}</Text>
                    </View>
                </View>

                {/*restaurant-info*/}

                <Text style={{
                    fontSize: 20,
                    lineHeight: 30,
                    fontWeight: 'bold'
                }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: 10,
                        flexDirection: 'row'
                    }}
                >
                    {/**Rating  */}

                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: "#FC6D3F",
                            marginRight: 10
                        }}
                    />
                    <Text
                        style={{
                            fontWeight: '600',
                            marginBottom: 10
                        }}
                    >{item.rating}</Text>

                    {/**Price Rating */}

                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        marginTop: -5,
                                        lineHeight: 22,
                                        color: (priceRating <= item.priceRating) ?
                                            '#000' : '#898C95',
                                        fontSize: 14,
                                        fontWeight: '600'
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>

        )

        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={(restaurants === null) ?
                    productsFetched : restaurants}
                keyExtractor={(item) => item.categoryId}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingBottom: 30,
                }}
            ></FlatList>
        )

    }

    //render Home Components
    return (
        <SafeAreaView style={styles.androidSafeArea}>
            <View
                style={{
                    height: '100%'
                }}>
                <Carousel />
                <SearchBar />
                {renderCategories()}
                {renderRestaurantList(navigation)}
            </View>
        </SafeAreaView>
    );

}

export default Home

const styles = StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        backgroundColor: '#F1f1f1',
        paddingTop: Platform.OS == "android" ? -0 : 0,
        haderButton: {
            width: 50,
            paddingLeft: 40,
            justifyContent: "center",
        },
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})