import React,{Component} from 'react';
import { Text, View,Button,Alert } from 'react-native';
import{Audio} from 'expo-av'

export default class App extends Component{
 
render(){
  return(
    <View>
  
    <View style={{width:200 , height:100 , marginTop:50 , marginLeft:75}}>
    <Button
    title="Sound 1"
    color="red"
    onPress={()=>{var url = "";
    this.playSound(url);
    }}>

</View>

 <View style={{width:200 , height:100 , marginTop:0 , marginLeft:75}}>
    <Button
    title="Sound 2"
    color="blue"
    onPress={()=> {var url = "http://cd.textfiles.com/sbsw/BEEPCHMS/BUZZ2.WAV";
    this.playSound(url);
    }}
    />

</View>
 <View style={{width:200 , height:100 , marginTop:5 , marginLeft:75}}>
    <Button
    title="Sound 3"
    color="purple"
    onPress={()=> {var url = "";
    this.playSound(url);
    }}
    />

</View>
    <View style={{width:200 , height:100 , marginTop:8 , marginLeft:75}}>
    <Button
    title="Sound 4"
    color="green"
    onPress={()=> {var url = "http://thewavsite.com/ComputerEvents/Alarm.wav";
    this.playSound(url);
    }}>
    
</View>
    <View style={{width:200 , height:100 , marginTop:10 , marginLeft:75}}>
    <Button
    title="Sound 5"
    color="yellow"
   onPress={()=> {var url = "http://thewavsite.com/ComputerEvents/Alarm.wav";
    this.playSound(url);
    }}>
    
</View>
    <View style={{width:200 , height:100 , marginTop:10  , marginLeft:75}}>
    <Button
    title="Stop Sound"
    color="red"
    onPress={()=> alert("play sound !!!")}
    />

</View>

</View>
)

}
}



