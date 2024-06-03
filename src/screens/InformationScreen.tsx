import {StyleSheet, SafeAreaView, View, TouchableOpacity, Text, Image,ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Colors from '../Assets/Colors';
import TextFields from '../components/TextFields';
import { moderateScale } from '../Assets/scale/scale';
import TabOne from '../CustomTabs/TabOne';
import TabTwo from '../CustomTabs/TabTwo';

const InformationScreen = ({ navigation, route }) => {
  const { initialTab } = route.params;
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);
  const getButtonStyle = (tab) => {
    return {
      backgroundColor: activeTab === tab ? Colors.darkGrey : 'white',
    };
  };
  const getTextStyle = (tab) => {
    return {
      color: activeTab === tab ? 'white' : 'black',
    };
  };
  const getImageStyle = (tab) => {
    return {
      tintColor: activeTab === tab ? 'white' : 'black',
    };
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, getButtonStyle('TabOne')]}
          onPress={() => setActiveTab('TabOne')}
        >
          <Image
            style={[styles.ImageStyles, getImageStyle('TabOne')]}
            source={require('../Assets/Images/HomeTab.png')}
          />
          <Text
            style={[styles.BtnText, getTextStyle('TabOne')]}
          >Property Data
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, getButtonStyle('TabTwo')]}
          onPress={() => setActiveTab('TabTwo')}
        >
          <Image
            style={[styles.ImageStyles2, getImageStyle('TabTwo')]}
            source={require('../Assets/Images/document.png')} />
          <Text
            style={[styles.BtnText, getTextStyle('TabTwo')]}>
            Subject Property
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView  style={{flex:1}}>
      <View style={styles.contentContainer}>
        {activeTab === 'TabOne' ? <TabOne /> : <TabTwo />}
      </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  buttonContainer: {
    width: moderateScale(196) ,
    height: moderateScale(78),
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    width:moderateScale(98) ,
    height: moderateScale(78),
  },
  BtnText: {
    fontSize:moderateScale(10) ,
    marginTop: moderateScale(8),
    lineHeight: moderateScale(18),
  },
  ImageStyles: {
    resizeMode: 'contain',
    width:moderateScale(27),
    height: moderateScale(27),
    marginTop: moderateScale(18),
  },
  ImageStyles2: {
    resizeMode: 'contain',
    width: moderateScale(21),
    height: moderateScale(28),
    marginTop: moderateScale(18),
  },
  contentContainer: {
    alignItems: 'center',
  },
  tabContainer: {
    alignItems: 'center',
    width:moderateScale(338) ,
    height: moderateScale(320),
    marginTop: moderateScale(28),
    // backgroundColor: "red"
  },
  // ToggleStyle: {
  //   width:moderateScale(5.15) ,
  //   height: moderateScale(3),
  //   tintColor: "white",
  //   margin: moderateScale(10)
  // },
  // Txt: {
  //   color: 'white',
  // },
  headingtxt: {
    flexDirection: "row",
    backgroundColor: "#00324E",
    width: "100%",
    height: moderateScale(30),
    alignItems: "center",
    borderWidth:moderateScale(1), 
  },
  headingtxt3: {
    flexDirection: "row",
    backgroundColor: Colors.darkMixBlue,
    width: "100%",
    height: moderateScale(30),
    alignItems: "center",
    marginTop: moderateScale(10),
    borderWidth:moderateScale(0.3)  },
  Txt2: {
    color: Colors.black
  },
  ToggleStyle2: {
    width: moderateScale(5.15),
    height: moderateScale(3),
    // tintColor: "white",
    margin: moderateScale(10)
  },
  PhoneView: {
    width: "100%",
    height: moderateScale(30),
    // backgroundColor: "yellow",
    // borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
  },
  EmailView: {
    width: "100%",
    height: moderateScale(30),
    alignItems: "center",
    flexDirection: "row",
  },
  phoneImg: {
    width: moderateScale(18),
    height: moderateScale(18),
  },
  PhoneInput: {
    width: moderateScale(156),
    height: moderateScale(28),
    borderWidth: moderateScale(0.5),
    justifyContent: "center",
    marginLeft: moderateScale(7)
  },
  Input: {
    width: moderateScale(156),
    height: moderateScale(28),
    borderWidth: moderateScale(0.5),
    justifyContent: "center",
  },
  EmailImg: {
    width: moderateScale(18),
    height: moderateScale(18),
  },
  EmailInput: {
    width: moderateScale(156),
    height: moderateScale(28),
    borderWidth: moderateScale(0.5),
    justifyContent: "center",
    marginLeft: 7
  },
  tabContainer2: {
    alignItems: 'center',
    width: moderateScale(338),
    height: moderateScale(320),
    marginTop: moderateScale(28),
  },
 
  Txt3: {
    color: 'white',
  },
 
  headingtxt2: {
    flexDirection: "row",
    // backgroundColor: "white",
    width: "100%",
    height: moderateScale(30),
    alignItems: "center",
    marginTop: moderateScale(10),
    borderWidth: moderateScale(0.3)
  },

  ToggleStyle3: {
    width: moderateScale(5.15),
    height: moderateScale(3),
    tintColor: "white",
    margin: moderateScale(10)
  },

 
 
  Identification: {
    width: "100%",
    height: moderateScale(30),
    alignItems: "center",
    flexDirection: "row",
    marginTop: moderateScale(10),
    borderWidth: moderateScale(0.3),
    backgroundColor: "#00324E"
  },
  latitude: {
    width: moderateScale(169),
    height: moderateScale(28),
    borderWidth: moderateScale(0.5),
    justifyContent: "center",
    //marginLeft: 7
    backgroundColor:"#ECECEC"
  },

});
export default InformationScreen;
