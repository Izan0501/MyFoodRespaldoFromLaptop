import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native'

const Carousel = () => {

  //get dimensions
  const screenWidth = Dimensions.get('window').width;


  //dataCarousel
  const carouselData = [
    {
      id: '001',
      image: require('../assets/slider_1.jpg')
    },
    {
      id: '002',
      image: require('../assets/slider 6.png')
    },
    {
      id: '003',
      image: require('../assets/slider 5.png')
    },
    {
      id: '004',
      image: require('../assets/slider_7.png')
    }
  ];

  //displayImages
  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{
            height: 200,
            width: screenWidth,
            borderRadius: 20,
            marginRight: 4,
          }}
        />
      </View>
    );
  };

  //render Carousel Images
  return (
    <View style={styles.container}>
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 1,
  },
  searchIcon: {
    color: 'white',
    marginRight: -20,
    zIndex: 111
  },
});

