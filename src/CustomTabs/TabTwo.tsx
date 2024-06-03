import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { allData } from '../Redux/Slices/ProductSlice';
import TextFields from '../components/TextFields';

const TabTwo = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state?.product);
  console.log("STATE_DATA_SEcodnTab",state.data)

  const [CollectionType, SetCollectionType] = useState(state.data.CollectionType || '');
  const [CaseFileId, SetCaseFileId] = useState(state.CaseFileID || '');
  const [PDAcollectionId, SetPDAcollectionId] = useState(state.PDAcollectionId || '');
  const [PropertyCollectorType, SetPropertyDataType] = useState(state.PropertyDataCollector || '');
  const [CollectorTypeDiscription, SetDiscription] = useState(state.PropertyDataCollectorDiscription || '');
  const [dataAcknowledgement, SetAcknowledgement] = useState(state.DataAcknowlegdment || '');
  const [dataCollectionDate, SetCollectionDate] = useState(state.CollectionDate || '');

  useEffect(() => {
    SetCollectionType(state.data.CollectionType || '');
    SetCaseFileId(state.data.CaseFileID || '');
    SetPDAcollectionId(state.data.PDAcollectionId || '');
    SetPropertyDataType(state.data.PropertyDataCollector || '');
    SetDiscription(state.data.PropertyDataCollectorDiscription || '');
    SetAcknowledgement(state.data.DataAcknowlegdment || '');
    SetCollectionDate(state.data.CollectionDate || '');
  }, [state]);

  const handleSave = () => {
    const data = {
      ...state,
      CollectionType,
      CaseFileID: CaseFileId,
      PDAcollectionId,
      PropertyDataCollector: PropertyCollectorType,
      PropertyDataCollectorDiscription: CollectorTypeDiscription,
      DataAcknowlegdment: dataAcknowledgement,
      CollectionDate: dataCollectionDate
    };
    dispatch(allData(data));
  };

  return (
    <KeyboardAvoidingView style={styles.tabContainer2}>
      <View style={styles.headingtxt}>
        <Image
          style={styles.ToggleStyle}
          source={require('../Assets/Images/Assignment.png')} />
        <Text style={styles.Txt}>Property</Text>
      </View>
      <TextFields
        placeholder="Collection Type"
        value={CollectionType}
        onChangeText={(val) => SetCollectionType(val)}
      />
      <TextFields
        placeholder="Case File ID"
        value={CaseFileId}
        onChangeText={(val) => SetCaseFileId(val)}
      />
      <View style={styles.headingtxt3}>
        <Image
          style={styles.ToggleStyle3}
          source={require('../Assets/Images/Assignment.png')} />
        <Text style={styles.Txt3}>Address</Text>
      </View>
      <View style={{ marginTop: 8 }}>
        <TextFields
          placeholder={'PDA Collection ID'}
          value={PDAcollectionId}
          onChangeText={(val) => SetPDAcollectionId(val)}
        />
        <TextFields
          placeholder={'Property Data Collector Type'}
          value={PropertyCollectorType}
          onChangeText={(val) => SetPropertyDataType(val)}
        />
        <TextFields
          placeholder={'Property Data Collector Type Description'}
          value={CollectorTypeDiscription}
          onChangeText={(val) => SetDiscription(val)}
        />
        <TextFields
          placeholder={'Data Collector Acknowledgment'}
          value={dataAcknowledgement}
          onChangeText={(val) => SetAcknowledgement(val)}
        />
        <TextFields
          placeholder={'Data Collection Date'}
          value={dataCollectionDate}
          onChangeText={(val) => SetCollectionDate(val)}
        />
      </View>
      <View style={styles.Identification}>
        <Image
          style={styles.ToggleStyle3}
          source={require('../Assets/Images/Assignment.png')} />
        <Text style={{ color: "white" }}>Identification</Text>
      </View>
      <View style={styles.headingtxt2}>
        <Image
          style={styles.ToggleStyle2}
          source={require('../Assets/Images/Assignment.png')} />
        <Text style={styles.Txt2}> GPS Coordinates</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.latitude}>
          <Text style={{ marginLeft: 5 }}>Latitude</Text>
        </View>
        <View>
          <View style={styles.latitude}>
            <Text style={{ marginLeft: 5 }}>34° 17' 36.708'' N</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.latitude}>
          <Text style={{ marginLeft: 5 }}>Longitude</Text>
        </View>
        <View>
          <View style={styles.latitude}>
            <Text style={{ marginLeft: 5 }}>97° 32' 56.598'' W</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.SaveBtn} onPress={handleSave}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default TabTwo;