import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { scaleFont, scaleHeight, scaleWidth } from './thyscale'

export default function thst(){
    const seeFun=()=>{
        return(
            <View style={{alignItems:"center", justifyContent:"center"}}>
                <View style={{borderRadius:scaleHeight(10), overflow:"hidden", marginTop:scaleHeight(40)}}>
                    <Image source={require("../assets/images/thyicn1.png")} style={{height:scaleHeight(200),width:scaleWidth(200)}}></Image> 
                </View>    
                <Text style={{fontSize:scaleFont(34), fontWeight:"bold",color:"rgb(51, 102, 255)", marginTop:scaleHeight(10)}}>DataCollect</Text>
                <Text style={{paddingTop:scaleHeight(20), fontSize:scaleFont(25)}}>Developed by Kitaraju Mgonja</Text>
            </View>
        )
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/home")
        },2000)
    })
        
    
    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            {seeFun()}
        </View>
    )
}