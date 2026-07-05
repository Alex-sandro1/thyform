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
            minHeight:scaleHeight(64),
            width:scaleHeight(82),
            paddingBottom:scaleHeight(2),
            borderRadius:scaleHeight(8),
            borderWidth:2,
            borderColor:isselect?"rgb(51, 102, 255)":"black",
            marginLeft:scaleHeight(12),
            backgroundColor:"white",
            justifyContent:"center",
            alignItems:"center"
        },
        seltxt:{
            fontSize:scaleFont(18),
            color:isselect?"rgb(51, 102, 255)":"black",
            textAlign:"center"
        }

    })
    
    return(
       <TouchableOpacity style={Styles.thysel} onPress={setisselect}>
            <Text style={Styles.seltxt}>{label}</Text>
        </TouchableOpacity> 
    )
}