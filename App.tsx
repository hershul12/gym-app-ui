import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
const App = () => {
  return (
    <View style={{backgroundColor:"#121212",flex:1,gap:7,alignItems:'center'}}>
      <Text style={{color:"#FCF5ED",fontWeight:"bold",fontSize:30}}>Gym Bro</Text>
      <View style={{flexDirection:"row",borderRadius:30,width:"100%",height:"10%",gap:5,alignItems:"center",justifyContent:"center"}}>
        <TouchableOpacity style={{borderColor:"white",borderRadius:30,borderWidth:2,width:"22.5%",alignItems:"center"}}>
          <Text style={{color:"#FCF5ED",fontSize:30}}>1</Text>
        </TouchableOpacity >
        <TouchableOpacity style={{borderColor:"white",borderRadius:30,borderWidth:2,width:"22.5%",alignItems:"center"}}>
          <Text style={{color:"#FCF5ED",fontSize:30}}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderColor:"white",borderRadius:30,borderWidth:2,width:"22.5%",alignItems:"center"}}>
          <Text style={{color:"#FCF5ED",fontSize:30}}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderColor:"white",borderRadius:30,borderWidth:2,width:"22.5%",alignItems:"center"}}>
          <Text style={{color:"#FCF5ED",fontSize:30}}>4</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems:"center",justifyContent:'center',width:"100%",height:"45%",borderWidth:2,borderColor:'white'}}>
      <Image style={{width:"100%",height:"100%"}} source={require('./src/assets/image/gym.jpg')} />
      </View>
      <View style={{marginTop:20,gap:35,flexDirection:"row",width:"190%",height:"8%",justifyContent:"center"}}>
        <TouchableOpacity style={{borderColor:"white",borderWidth:2,borderRadius:30,width:"22.5%",alignItems:"center",justifyContent:"center"}}>
          <Text style={{color:"#FCF5ED",fontWeight:"bold",fontSize:30}}>Login</Text>
        </TouchableOpacity >
        <TouchableOpacity style={{borderColor:"white",borderWidth:2,borderRadius:30,width:"22.5%",alignItems:"center",justifyContent:"center"}}>
          <Text style={{color:"#FCF5ED",fontWeight:"bold",fontSize:30}}>Password</Text>
        </TouchableOpacity>
              </View>
      <View style={{alignItems:"center"}}>
      <Image style={{ width:"80%", height: undefined, aspectRatio: 1 }} source={require('./src2/image/GYM.jpg')}  resizeMode='contain'/>
      </View>
    </View>
  );
}
export default App;