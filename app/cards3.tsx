import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { scaleFont, scaleHeight, scaleWidth } from './thyscale'

type theevars={
    label:number,
    isselect:boolean,
    setisselect:()=>void
}
export const Cards:FC<theevars>=({label, isselect, setisselect})=>{
    const Styles=StyleSheet.create({
        thysel:{
            height:scaleHeight(50),
            width:scaleWidth(40),
            borderRadius:scaleWidth(10),
            borderWidth:scaleWidth(2),
            borderColor:isselect?"rgb(51, 102, 255)":"black",
            marginLeft:scaleWidth(20),
            backgroundColor:"rgba(82, 78, 78, 0.01)",
            margin:scaleHeight(-10)
        },
        seltxt:{
            fontSize:scaleFont(24),
            paddingLeft:scaleWidth(10),
            paddingTop:scaleHeight(5),
            color:isselect?"rgb(51, 102, 255)":"black"
        }

    })
    
    return(
       <TouchableOpacity style={Styles.thysel} onPress={setisselect}>
            <Text style={Styles.seltxt}>{label}</Text>
        </TouchableOpacity> 
    )
}