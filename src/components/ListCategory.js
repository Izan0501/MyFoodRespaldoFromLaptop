import {
    StyleSheet,
    Text,
    FlatList,
    View,
    Image,
    Pressable
} from 'react-native'

const RenderCategories = ({
    categories,
    onSelectedCategory,
    selectedCategory,
    route
}) => {

    /*const {category: categorySelected} = route.params

    const { data: productsFetched, error: errorFetched, isLoading } = useGetProductsByCategoryQuery(categorySelected);

    console.log(productsFetched);
    console.log(errorFetched);
    console.log(isLoading);*/
    

    const renderItem = ({
        item
    }) => {

        return (
            <Pressable
                style={{
                    marginTop: -19,
                    padding: 10,
                    paddingBottom: 20,
                    backgroundColor: (selectedCategory === item) ? "#FC6D3F" : 'white',
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
                        backgroundColor: (selectedCategory === item) ? "white" : '#e3d7bf'//'#898C95',
                    }}
                >
                    <Image
                        source={item.image[0]}
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
                        color: (selectedCategory === item) ? "white" : '#000',
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
                keyExtractor={item => `${item}`}
                renderItem={renderItem}
                contentContainerStyle={{ paddingVertical: 20 }}
            />

        </View>
    );
};

export default RenderCategories

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