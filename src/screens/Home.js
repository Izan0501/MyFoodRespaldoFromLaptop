import {
    StyleSheet,
    Text,
    FlatList,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Pressable
} from 'react-native'

import React from 'react';
import Carousel from '../components/Carousel';
import SearchBar from '../components/SearchBar';
import categories from '../constants/categories';
import restaurantData from '../constants/restaurants';
import icons from '../constants/icons';
import { useNavigation } from '@react-navigation/native';



const Home = () => {

    const navigation = useNavigation()
    // Restaurant list & category list (data)
    const [restaurants, setRestaurants] = React.useState(restaurantData);
    const [selectedCategory, setSelectedCategory] = React.useState(null);


    return (

        <SafeAreaView>
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

    // selectCategory function
    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id === id)

        if (category.length > 0)
            return category[0].name
        return ''


    }

    function onSelectedCategory(category) {
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)
        setSelectedCategory(category)
    }

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
                            source={item.image}
                            //resizeMode='contain'
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
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: 20 }}
                />

            </View>
        );
    };

    //render Restaurant List mainMenu
    function renderRestaurantList() {
        //console.log(itemIdSelected);

        const renderItem = ({ item }) => (

            <TouchableOpacity
                style={{
                    marginBottom: 20,
                }}
                onPress={() => navigation.navigate('Restaurant', item) }
            >
                <View
                    style={{
                        marginBottom: 10,
                    }}>
                    <Image
                        source={item.image}
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

                    {/**Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{
                                            flexDirection: 'row'
                                        }}
                                        key={categoryId}
                                    >
                                        <Text
                                            style={{
                                                fontWeight: '500'

                                            }}
                                        >{getCategoryNameById(categoryId)}</Text>
                                        <Text
                                            style={{
                                                color: '#898C95',
                                                lineHeight: 22,
                                                fontSize: 20
                                            }}
                                        > . </Text>
                                    </View>
                                )
                            })
                        }
                        {/**Price */}
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
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem} setItemIdSelected
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingBottom: 30,
                }}
            ></FlatList>
        )

    }

}
export default Home

const styles = StyleSheet.create({
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