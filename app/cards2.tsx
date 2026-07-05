import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { scaleFont, scaleHeight } from './thyscale'

type theevars={
    label:number,
    isselect:boolean,
    setisselect:()=>void
}
export const Cards2:FC<theevars>=({label, isselect, setisselect})=>{
    const Styles=StyleSheet.create({
        thysel:{
            minHeight:60,
            width:100,
            paddingBottom:scaleHeight(2),
            borderRadius:10,
            borderWidth:2,
            borderColor:isselect?"rgb(51, 102, 255)":"black",
            marginLeft:20,
            backgroundColor:"white"
        },
        seltxt:{
            fontSize:scaleFont(24),
            paddingLeft:40,
            paddingTop:5,
            color:isselect?"rgb(51, 102, 255)":"black"
        }

    })
    
    return(
       <TouchableOpacity style={Styles.thysel} onPress={setisselect}>
            <Text style={Styles.seltxt}>{label}</Text>
        </TouchableOpacity> 
    )
}