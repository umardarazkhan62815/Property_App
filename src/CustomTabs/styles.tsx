import Colors from "../Assets/Colors";
import { moderateScale } from "../Assets/scale/scale";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
    },
    buttonContainer: {
        width: moderateScale(196),
        height: moderateScale(78),
        flexDirection: 'row',
    },
    button: {
        alignItems: 'center',
        width: moderateScale(98),
        height: moderateScale(78),
    },
    BtnText: {
        fontSize: moderateScale(10),
        marginTop: moderateScale(8),
        lineHeight: moderateScale(18),
    },
    ImageStyles: {
        resizeMode: 'contain',
        width: moderateScale(27),
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
        width: moderateScale(338),
        // height: moderateScale(320),
        marginTop: moderateScale(28),
        // backgroundColor: "red"
    },
    ToggleStyle: {
        width: moderateScale(5.15),
        height: moderateScale(3),
        tintColor: "white",
        margin: moderateScale(10)
    },
    Txt: {
        color: 'white',
    },
    headingtxt3: {
        flexDirection: "row",
        backgroundColor: Colors.darkMixBlue,
        width: "100%",
        height: moderateScale(30),
        alignItems: "center",
        marginTop: moderateScale(10),
        borderWidth: moderateScale(0.3)
    },
    ToggleStyle2: {
        width: moderateScale(5.15),
        height: moderateScale(3),
        // tintColor: "white",
        margin: moderateScale(10)
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
    EmailInput: {
        width: moderateScale(156),
        height: moderateScale(28),
        borderWidth: moderateScale(0.5),
        justifyContent: "center",
        marginLeft: 7,
    },
    tabContainer2: {
        alignItems: 'center',
        width: moderateScale(338),
        // height: moderateScale(320),
        marginTop: moderateScale(28),
    },
  
    Txt3: {
        color: 'white',
    },
    headingtxt: {
        flexDirection: "row",
        backgroundColor: "#00324E",
        width: "100%",
        height: moderateScale(30),
        alignItems: "center",
        borderWidth: moderateScale(0.5)
    },
    headingtxt2: {
        flexDirection: "row",
        width: "100%",
        height: moderateScale(30),
        alignItems: "center",
        marginTop: moderateScale(10),
        borderWidth: moderateScale(0.3)
    },
    Txt2: {
        color: Colors.black
    },
    ToggleStyle3: {
        width: moderateScale(5.15),
        height: moderateScale(3),
        tintColor: "white",
        margin: moderateScale(10)
    },
    PhoneView: {
        width: "100%",
        height: moderateScale(30),
        flexDirection: "row",
        alignItems: "center",
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
        borderWidth: moderateScale(0.2),
        justifyContent: "center",
        //marginLeft: 7
        backgroundColor: "#ECECEC"
    },
    LableText: {
        width: moderateScale(140),
        height: moderateScale(28),
        marginLeft:moderateScale(7),
        borderWidth: moderateScale(0.5),
        justifyContent: 'center',
        paddingLeft: moderateScale(7)
    },
    RemoveIcon: {
        width: moderateScale(18),
        height: moderateScale(18),
        marginLeft: moderateScale(7),
   


    },
    SaveBtn:{
        height:moderateScale(28),
        width:"50%",
       alignSelf:"center",
       backgroundColor:Colors.darkMixBlue,
       alignItems:'center',
       justifyContent:'center',
       marginVertical:moderateScale(20)
       
         },
         btnText:{
           textAlign:"center",
           color:Colors.white
         }
});