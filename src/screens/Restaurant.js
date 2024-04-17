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
  FlatList,
} from "react-native";

import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import icons from "../constants/icons";
import { Feather } from "@expo/vector-icons";

const Restaurant = ({ route, navigation }) => {

  const [restaurants, setRestaurants] = React.useState(null);
  const [currentLocation, setcurrentLocation] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState([]);

  const screenWidth = Dimensions.get("window").width;

  React.useEffect(() => {
    let item = route.params;
    let currentLocation = route.params;

    setRestaurants(item);
    setcurrentLocation(currentLocation);
  });

  {
    /**Function to edit product quantity */
  }

  function editOrderProductsQuantity(action, menuId, price) {

    if (action == '+') {
      let orderList = orderItems.slice();
      let item = orderList.filter(a => a.menuId == menuId)

      if (item.length > 0) {
        let NewQuantity = item[0].quantity + 1
        item[0].quantity = NewQuantity
        item[0].total = item[0].quantity * price
      } else {
        const newItem = {
          menuId: menuId,
          quantity: 1,
          price: price,
          total: price
        }
        orderList.push(newItem)
      }
      setOrderItems(orderList)
    } else {

    }
  }

  {
    /**get quantity of products */
  }

  function getOrderQuantity(menuId) {

    let orderItem = orderItems.filter(a => a.menuId == menuId)
  
    if(orderItem.length > 0) {
      return orderItem[0].quantity
    } else {
      return 0
    }
    
  }

  /**render goBack arrow and function */

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", marginBottom: 10}}>
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
      >
        {restaurants?.menu.map((item, index) => (
          <View key={`menu-${index}`} style={{ alignItems: "center" }}>
            <View
              style={{
                height: "45%",
              }}
            >
              <Image
                source={item.image}
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
                  //onPress={()=>{}}
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
                    {getOrderQuantity(item.menuId)}
                  </Text>
                </View>
                <TouchableOpacity
                onPress={() => editOrderProductsQuantity('+', item.menuId, item.price)}
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

            {/**caloriesInfo */}

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

  {/*render order in the bottom of the screen*/ }

  function renderOrder() {
    return (
      <View>
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
              paddingVertical: 20,
              paddingHorizontal: 20,
              borderBottomColor: '#F6F6F7',
              borderBottomWidth: 1
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: '800',
              }}
            >
              Items in cart
            </Text>

            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
              }}
            >
              45
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

          <View
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
          >
            <TouchableOpacity>
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
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    paddingTop: Platform.OS == "android" ? 40 : 0,
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
});
