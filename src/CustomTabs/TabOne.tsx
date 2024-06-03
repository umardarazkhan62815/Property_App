import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import TextFields from '../components/TextFields';
import { moderateScale } from '../Assets/scale/scale';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPhoneFieldValue,
  setEmailFieldValue,
  allData,
} from '../Redux/Slices/ProductSlice'
import { useNavigation } from '@react-navigation/native';

const TabOne = () => {
  const navigation=useNavigation()
  const state = useSelector(state => state.product)
  console.log('state.data', state.data)
  const dispatch = useDispatch();
  const [phoneFields, setPhoneFields] = useState([{ id: 1, value: '' }]);
  const [emailFields, setEmailFields] = useState([{ id: 1, value: '' }]);
  const [CollectionType, setCollectionType] = useState('')
  const [CaseFileID, setCaseFileID] = useState('')
  const [LPAID, setLPAID] = useState('')
  const [PDAEntity, setPDAEntity] = useState('')
  const [PDAHyperlink, setPDAHyperlink] = useState('')
  const [PDAcollectionId,SetPDACollectionId] = useState('')
  const [PropertyDataCollector,SetPropertyCollectorType] = useState('')
  const [PropertyDataCollectorDiscription,SetPropertyCollectorDiscription] = useState('')
  const [DataAcknowlegdment,SetDataAcknowledgment] = useState('')
  const [CollectionDate,SetCollectionDate] = useState('')

  const addPhoneField = () => {
    setPhoneFields([...phoneFields, { id: phoneFields.length + 1, value: '' }]);
  };

  const addEmailField = () => {
    setEmailFields([...emailFields, { id: emailFields.length + 1, value: '' }]);
  };

  const removePhoneField = (id) => {
    setPhoneFields(phoneFields.filter(field => field.id !== id));
  };

  const removeEmailField = (id) => {
    setEmailFields(emailFields.filter(field => field.id !== id));
  };
  const handleSave = () => {
    const data = {
      phone: phoneFields,
      email: emailFields,
      CollectionType: CollectionType,
      CaseFileID: CaseFileID,
      LPAID: LPAID,
      PDAEntity: PDAEntity,
      PDAHyperlink: PDAHyperlink,
      PDAcollectionId:PDAcollectionId,
      PropertyDataCollector:PropertyDataCollector,
      PropertyDataCollectorDiscription:PropertyDataCollectorDiscription,
      DataAcknowlegdment:DataAcknowlegdment,
      CollectionDate:CollectionDate

    }
    dispatch(allData(data))
 
  };

  return (
    <KeyboardAvoidingView style={styles.tabContainer}>
      <View style={styles.headingtxt}>
        <Image
          style={styles.ToggleStyle}
          source={require('../Assets/Images/Assignment.png')} />
        <Text style={styles.Txt}>Inspection Report</Text>
      </View>
      <TextFields placeholder="Collection Type" 
       value={CollectionType}
       onChangeText={(val)=>setCollectionType(val)}
      />
      <TextFields
      value={CaseFileID}
      onChangeText={(val)=>setCaseFileID(val)}
      placeholder="Case File ID" />
      <TextFields 
      value={LPAID}
      onChangeText={(val)=>setLPAID(val)}
      placeholder="LPA ID" />
      <TextFields placeholder="PDA submitter Entity"
      value={PDAEntity}
      onChangeText={(val)=>setPDAEntity(val)}
       />
      <TextFields placeholder="PDA Hyperlink"
      value={PDAHyperlink}
      onChangeText={(val)=>setPDAHyperlink(val)}  />
      <View style={styles.headingtxt2}>
        <Image
          style={styles.ToggleStyle2}
          source={require('../Assets/Images/Assignment.png')} />
        <Text style={styles.Txt2}> Property Data Collector Contacts</Text>
      </View>
      {phoneFields.map((field, index) => (
        <View key={field.id} style={styles.PhoneView}>

          <TouchableOpacity onPress={addPhoneField}>
            <Image
              style={styles.phoneImg}
              source={require('../Assets/Images/math-plus.png')} />
          </TouchableOpacity>
          <View style={styles.LableText}>
            <Text>Phone Number</Text>
          </View>

          <View style={styles.PhoneInput}>
            <TextInput
              style={{ marginft: 5 }}
              placeholder="Phone Number"
              value={field.value}
              onChangeText={(text) => {
                const newPhoneFields = [...phoneFields];
                newPhoneFields[index].value = text;
                setPhoneFields(newPhoneFields);
              }}
            />
          </View>
          {index > 0 && (
            <TouchableOpacity onPress={() => removePhoneField(field.id)}>
              <Image
                style={styles.RemoveIcon}
                source={require('../Assets/Images/bin.png')} />
            </TouchableOpacity>
          )}
        </View>
      ))}
      {emailFields.map((field, index) => (
        <View key={field.id} style={styles.EmailView}>
          <TouchableOpacity onPress={addEmailField}>
            <Image
              style={styles.EmailImg}
              source={require('../Assets/Images/math-plus.png')} />
          </TouchableOpacity>
          <View style={styles.LableText}>
            <Text style={{ textAlign: "justify" }}>
              E-Mail
            </Text>
          </View>

          <View style={styles.EmailInput}>
            <TextInput
              style={{ marginLeft: 5 }}
              placeholder="Email Address"
              value={field.value}
              onChangeText={(text) => {
                const newEmailFields = [...emailFields];
                newEmailFields[index].value = text;
                setEmailFields(newEmailFields);
              }}
            />
          </View>
          {index > 0 && (
            <TouchableOpacity onPress={() => removeEmailField(field.id)}>
              <Image
                style={styles.RemoveIcon}
                source={require('../Assets/Images/bin.png')} />
            </TouchableOpacity>
          )}
        </View>
      ))}

      <TextFields placeholder={'PDA Collection ID'}
      value={PDAcollectionId}
      onChangeText={(val)=>SetPDACollectionId(val)} />
      <TextFields placeholder={'Property Data Collector Type'}
      value={PropertyDataCollector}
      onChangeText={(val)=>SetPropertyCollectorType(val)} />
      <TextFields placeholder={'Property Data Collector Type Description'}
      value={PropertyDataCollectorDiscription}
      onChangeText={(val)=>SetPropertyCollectorDiscription(val)} />
      <TextFields placeholder={'Data Collector Acknowledgment'}
      value={DataAcknowlegdment}
      onChangeText={(val)=>SetDataAcknowledgment(val)} />
      <TextFields placeholder={'Data Collection Date'}
      value={CollectionDate}
      onChangeText={(val)=>SetCollectionDate(val)} />

      <TouchableOpacity style={styles.SaveBtn} onPress={() => handleSave()}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>

  );
};
export default TabOne;