import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'

export default function thst(){
    const seeFun=()=>{
        return(
            <View>
                <View style={{borderRadius:10, overflow:"hidden",marginTop:440, marginLeft:50}}>
                    <Image source={require("../assets/images/thyicn1.png")} style={{height:200,width:200}}></Image> 
                </View>    
                    <Text style={{fontSize:37, fontWeight:"bold",color:"rgb(51, 102, 255)", marginLeft:50, marginTop:10}}>DataCollect</Text>
                <Text style={{paddingTop:20, fontSize:25, marginLeft:-20}}>Developed by Kitaraju Mgonja</Text>
            </View>
        )
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/home1")
        },2000)
    })
        
    
    return(
        <View style={{marginLeft:220}}>
            {seeFun()}
        </View>
    )
}