import {
  StyleSheet,
  Platform,
  Text,
  Animated,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator
} from "react-native";

import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import icons from "../constants/icons";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../features/Counter/counterSlice";
import { setIdSelected } from "../features/Products/productsSlice";
import { useGetProductsByIdQuery } from "../services/shopServices";
import COLORS from "../constants/colors";

const Restaurant = ({ route, navigation }) => {

  const count = useSelector(state => state.counterReducer.value);
  const itemIdSelected = useSelector(state => state.shopReducer.value.itemIdSelected);
  const dispatch = useDispatch();

  const [restaurants, setRestaurants] = React.useState(null);
  const [currentLocation, setcurrentLocation] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState([]);
  const scrollX = new Animated.Value(0);
  const screenWidth = Dimensions.get("window").width;

  const { data, error, isLoading } = useGetProductsByIdQuery(itemIdSelected)

  React.useEffect(() => {
    let item = route.params;
    let currentLocation = route.params;


    menuSelected(item)
    setRestaurants(item);
    setcurrentLocation(currentLocation);
  })

  if (isLoading === true) {
    return (
      <View
        style={styles.IndicatorContainer}
      >
        <ActivityIndicator
          size={'large'}
          color={'orange'}
        />
      </View>
    )
  }

  function menuSelected(item, image) {
    let menu = item.menu

    dispatch(setIdSelected(menu))
  }

  {
    /**Function to edit product quantity (add and substract) */
  }

  function editOrderProductsQuantity(action, menuId, price, image, name) {
    let orderList = orderItems.slice();
    let item = orderList.filter(a => a.menuId == menuId)

    if (action == '+') {

      if (item.length > 0) {
        let NewQuantity = item[0].quantity + 1
        item[0].quantity = NewQuantity
        item[0].total = item[0].quantity * price

      } else {
        const newItem = {
          menuId: menuId,
          quantity: 1,
          price: price,
          total: price,
        }
        orderList.push(newItem)
      }
      setOrderItems(orderList)

    } else {
      if (item?.length > 0) {
        if (item[0].quantity > 0) {
          let NewQuantity = item[0].quantity - 1
          item[0].quantity = NewQuantity
          item[0].total = NewQuantity * price
        }
      }
      setOrderItems(orderList)
    }
  }

  {
    /**get quantity of products */
  }

  function getOrderQuantity(menuId) {

    let orderItem = orderItems.filter(a => a.menuId == menuId)

    if (orderItem.length > 0) {
      return orderItem[0].quantity
    } else {
      return 0
    }

  }

  {
    /**show the number of products added  */
  }

  function getProductsQuantity() {

    let itemCount = orderItems.reduce((a, b) => a + (b.quantity || 0), 0)

    return itemCount
  }

  {
    /**show the total price function */
  }

  function getTotalPrice() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);

    return total.toFixed(2)

  }


  {/**render goBack arrow / function */ }

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="keyboard-backspace"
            size={30}
            color="black"
            style={{
              marginLeft: 10.5,
              marginTop: 10,
            }}
          />
        </TouchableOpacity>

        {/**Restaurant Name Section */}

        <View style={styles.contain}>
          <View style={styles.titleRestaurantContain}>
            <Text style={styles.txtTitle}>{restaurants?.name}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.iconList}>
          <Feather name="list" size={30} color="black" />
        </TouchableOpacity>
      </View>
    );
  }

  {
    /**show restaurant products */
  }

  function renderFoodData() {

    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment={"center"}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } }
        ], { useNativeDriver: false })}
      >
        {restaurants?.menu.map((item, index) => (
          <View key={`menu-${index}`} style={{ alignItems: "center" }}>
            <View
              style={{
                height: "50%",
              }}
            >
              <Image
                source={{ uri: item.image }}
                resizeMod="cover"
                style={{
                  marginRight: 4,
                  marginTop: 0,
                  width: screenWidth,
                  height: "100%",
                  borderRadius: 35,
                }}
              />

              {/**ProductQuantityButton */}

              <View
                style={{
                  position: "absolute",
                  bottom: -20,
                  width: screenWidth,
                  height: 50,
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  onPress={() => dispatch(decrement()) && editOrderProductsQuantity('-', item.menuId, item.price)}
                  style={{
                    width: 50,
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                    ...styles.shadow,
                  }}
                >
                  <Text
                    style={{
                      marginTop: 0,
                      fontSize: 25,
                      fontWeight: "bold",
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 50,
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    //...styles.shadow
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {count && getOrderQuantity(item.menuId)}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    dispatch(increment()) && editOrderProductsQuantity('+', item.menuId, item.price)
                  }
                  style={{
                    width: 50,
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                    ...styles.shadow,
                  }}
                >
                  <Text
                    style={{
                      marginTop: 0,
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/**name & desciption*/}

            <View
              style={{
                width: screenWidth,
                alignItems: "center",
                marginTop: 15,
                paddingHorizontal: 25,
              }}
            >
              <Text
                style={{
                  marginVertical: 15,
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {`${item.name} - $${item.price}`}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                {item.description}
              </Text>
            </View>

            {/**caloriesInfo*/}

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                marginTop: 15,
              }}
            >
              <Image
                source={icons.fire}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 7,
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                }}
              >
                {item.calories.toFixed(2)} cal
              </Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    )
  }

  {/**render dots Navigation function */ }

  function renderDots() {

    const dotPosition = Animated.divide(scrollX, screenWidth)

    return (
      <View
        style={{ height: 30 }}
      >
        <View style={styles.dotsContain}>
          {restaurants?.menu.map((item, index) => {

            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp'
            })

            const dotsSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [8 * 0.8, 10, 8 * 0.8],
              extrapolate: 'clamp'
            })

            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: ['#898C95', '#FC6D3F', '#898C95'],
              extrapolate: 'clamp'
            })

            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: 30,
                  marginHorizontal: 6,
                  width: dotsSize,
                  height: dotsSize,
                  backgroundColor: dotColor
                }}
              />
            )
          })}
        </View>
      </View>
    )
  }

  {/*render order in the bottom of the screen*/ }

  function renderOrder() {
    return (
      <View>
        {
          renderDots()
        }
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 20,
              paddingHorizontal: 20,
              borderBottomColor: '#F6F6F7',
              borderBottomWidth: 1
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                paddingRight: 10
              }}
            >
              You added {
                getProductsQuantity()
              } products
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
              }}
            >
              ${getTotalPrice()}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 20,
              paddingHorizontal: 20
            }}
          >
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <Image
                source={icons.pin}
                style={{
                  marginTop: 3.5,
                  width: 20,
                  height: 20,
                  tintColor: 'darkgray'
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 20,
                  fontWeight: 'bold'
                }}
              >
                Location
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                source={icons.master_card}
                tintColor={COLORS.secondary2}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 18,
                  lineHeight: 22,

                }}
              >
                888888
              </Text>
            </View>
          </View>

          {/**Order button */}

          <TouchableOpacity
            style={{
              width: screenWidth * 0.9,
              padding: 10,
              backgroundColor: '#f77f00',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              marginLeft: 20,
              marginBottom: 20
            }}
            onPress={() => navigation.navigate('OrderDelivery', {
              restaurants: restaurants,
              currentLocation: currentLocation,
              menuId: restaurants.menu.menuId,
            })}

          >
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 22,
                  lineHeight: 30,
                  fontWeight: 'bold'
                }}
              >
                Order
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View >
    )
  }

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      {renderHeader()}
      {renderFoodData()}
      {renderOrder()}
    </SafeAreaView>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS == "android" ? 10 : 0,
    haderButton: {
      width: 50,
      paddingLeft: 40,
      justifyContent: "center",
    },
  },
  contain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5.5,
  },
  titleRestaurantContain: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    borderRadius: 35,
    backgroundColor: "#EFEFF1",
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 22,
  },
  iconList: {
    width: 50,
    paddingRight: 20,
    justifyContent: "center",
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
  },
  dotsContain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 10
  },
  IndicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
