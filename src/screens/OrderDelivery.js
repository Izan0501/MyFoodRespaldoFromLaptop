import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native'

import { MaterialIcons } from "@expo/vector-icons";
import React from 'react';
//import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from "@expo/vector-icons";
import icons from '../constants/icons';

const screenWidth = Dimensions.get("window").width;


/**const INITIAL_REGION = {
  latitude: -26.82,
  longitude: -65.22,
  latitudeDelta: 2,
  longitudeDelta: 2
}*/

const OrderDelivery = ({ route, navigation }) => {

  const [restaurants, setRestaurants] = React.useState(null);
  const [streetName, setStreetName] = React.useState('')

  React.useEffect(() => {

    let { restaurants, currentLocation } = route.params;

    let street = currentLocation.streetName

    setRestaurants(restaurants);
    setStreetName(street)


  })

  {/**zoomInFuncion */ }

  function zoomIn() {
    {/**Function widh regions */}
  }

  function zoomOut(){
    {/**Function Width Regions */}
  }

  {/**Map delivery section  */ }

  function renderMap() {
    return (
      <MapView
        style={styles.map}
        INITIAL_REGION={INITIAL_REGION}
        showsUserLocation

      />
    )
  }

  {/**order delivery header info */ }

  function renderDeliveryHeader() {
    return (
      <View
        style={styles.deliveryHeaderContainer}
      >
        <View
          style={styles.deliveryHeaderContent}
        >
          <Image
            source={icons.red_pin}
            style={{
              width: 30,
              height: 30,
              marginRight: 20
            }}
          />
          <View
            style={{ flex: 1 }}
          >
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
              }}
            >
              {restaurants?.name}
            </Text>
          </View>
          <View style={{ flex: 1, }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                marginLeft: 25
              }}
            >
              {restaurants?.duration}
            </Text>
          </View>
        </View>
      </View >
    )
  }

  {/**delivery order & info  */ }
  function renderDeliveryInfo() {

    {/**Name & Rating DeliveryMan */ }

    return (
      <View
        style={styles.deliveryInfoContainer}
      >
        <View
          style={styles.deliveryContent}
        >
          <View
            style={styles.deliverySection}
          >

            <Image
              style={styles.deliveryProfileImage}
              source={restaurants?.deliveryMan.avatar}
            />
            <View
              style={{
                flex: 1,
                marginLeft: 20,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#000',
                    bottom: 0
                  }}
                >
                  {restaurants?.deliveryMan.name}
                </Text>
                <View
                  style={{ flexDirection: 'row', paddingLeft: 50, paddingTop: 10 }}
                >
                  <Image
                    source={icons.star}
                    style={{
                      width: 18,
                      height: 18,
                      tintColor: '#FC6D3F'
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 16,
                      marginLeft: 15
                    }}
                  >
                    {restaurants?.rating}
                  </Text>
                </View>
              </View>
              {/**Restaurant */}
              <Text style={{
                color: '#898C95',
                fontSize: 13,
                lineHeight: 22
              }}>
                {restaurants?.name}
              </Text>
            </View>
          </View>

          {/**Buttons */}

          <View
            style={styles.deliveryBtnContainer}
          >
            <TouchableOpacity
              style={styles.deliveryBtn}
            >
              <Text
                style={styles.btnText}
              >
                Call
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.deliveryBtn2}
            >
              <Text
                style={styles.btnText}
              >
                Show Products
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    )
  }

  function renderMapZoomButtons() {
    return (
      <View
        style={styles.zoomBtnContainer}
      >
        {/**zoom in */}
        <TouchableOpacity
          onPress={() => zoomIn()}
          style={styles.zoomBtn}
        >
          <Text
            style={styles.zoomBtnTxt}
          >
            +
          </Text>
        </TouchableOpacity>

        {/**zoom out*/}
        <TouchableOpacity
          style={styles.zoomBtn}
          onPress={() => zoomOut()}
        >
          <Text
            style={styles.zoomBtnTxt}
          >
            -
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <View
      >
        
        {renderDeliveryHeader()}
        {renderDeliveryInfo()}
        {renderMapZoomButtons()}
      </View>
    </SafeAreaView>

  )
}

export default OrderDelivery

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
  map: {
    width: '100%',
    height: '100%',
  },
  deliveryHeaderContainer: {
    position: 'absolute',
    //bottom: 630,
    top: 35,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deliveryHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth * 0.9,
    paddingVertical: 8,
    paddingHorizontal: 20 * 2,
    borderRadius: 30,
    backgroundColor: 'white'
  },
  deliveryInfoContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deliveryContent: {
    width: screenWidth * 0.9,
    paddingVertical: 11 * 3,
    paddingHorizontal: 20 * 2,
    borderRadius: 30,
    backgroundColor: 'white'
  },
  deliverySection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  deliveryProfileImage: {
    height: 50,
    width: 50,
    borderRadius: 30
  },
  deliveryBtnContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    marginLeft: -10
  },
  deliveryBtn2: {
    height: 50,
    width: screenWidth * 0.5 - 60,
    backgroundColor: '#56008c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  deliveryBtn: {
    height: 50,
    width: screenWidth * 0.5 - 60,
    backgroundColor: '#FC6D3F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 20,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 22,
    color: 'white',
    fontWeight: 'bold'
  },
  zoomBtnContainer: {
    position: 'absolute',
    bottom: screenWidth * 0.75,
    right: 20,
    width: 60,
    height: 130,
    justifyContent: 'space-between'
  },
  zoomBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  zoomBtnTxt: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '400'
  },
})