import React, { useState, useEffect } from "react";
import { Button, Text, TextInput, View, FlatList } from "react-native";

const VaccineDemo = (props) => {
  const [loading,setLoading] = useState(true)
  const [state, setState] = useState('--');
  const [text, setText] = useState('');
  const [data,setData] = useState([]);



  useEffect(() => {
    fetch('https://data.cdc.gov/resource/w9zu-fywh.json?jurisdiction='+state)
      .then((response) => response.json())
      .then((cdata) => {
          setData(cdata)

        })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [state]);

  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection:'row'}}>
        <Text style={{flex:1,backgroundColor:'#aaa'}}>{item['_1st_dose_allocations']}</Text>

     </View>
  )}

  return (
    <View style={{padding:50,margin:40,border: 'thick solid blue'}}>
      <Text style={{fontSize:40,color:'blue'}}>
        Vaccine data of different states in USA
      </Text>
      <br />

      <View style={{flexDirection:'row',fontSize:20,color:'blue'}}>
        <Text style={{flexDirection:'row',fontSize:20,color:'purple'}}>Enter a state address :  </Text>
        <TextInput
          style={{fontSize:20,height: 70}}
          placeholder="State "
          onChangeText={text => {setText(text)}}
        />
      </View>
      <Button
        onPress={() => {
          setState(text)
        }}
        title="Get Vaccine Data Now"
      />
      <br />
      <br />
      <br />
      <Text style={{fontSize:20,color:'black'}}> The newest dose allocations Data for {state} is :</Text>
      <View style={{flexDirection:'row'}}>
     </View>
      <FlatList
        data={data.slice(0,1)}
        renderItem={renderItem}
        keyExtractor={item => item._1st_dose_allocations}
      />

    </View>
  );
}

export default VaccineDemo;
