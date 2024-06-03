import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Colors from '../Assets/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../Redux/Slices/ProductSlice';

const HomeScreen = ({ navigation }) => {
  
// const product =useSelector(state=>state.product)
// const dispatch=useDispatch()
// console.log('product',product?.data)
// const obj={name:'HomeScreen',price:100}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={styles.mainView}>
        {/* <Text onPress={()=>dispatch(addProduct(obj))}>{product?.data?.price}</Text> */}
        <Card
          onPress={() => navigation.navigate("InformationScreen", { initialTab: 'TabOne' })}
          containerStyle={styles.card1}
          imageSource={require("../Assets/Images/Vector.png")}
          heading={"Property Data"}
          text1={"Inspection Report"}
        />
        <Card
          containerStyle={styles.mannualStyle}
          imageSource={require("../Assets/Images/document.png")}
          heading={"Subject Property"}
          text1={"Property"}
          text2={"Address"}
          text3={"Identification"}
          onPress={() => navigation.navigate("InformationScreen", { initialTab: 'TabTwo' })}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    justifyContent: "space-evenly"
  },
  card1: {
    height: 128
  },
  mannualStyle: {
    backgroundColor: Colors.pink,
    marginTop: 22,
    height: 178
  }
});