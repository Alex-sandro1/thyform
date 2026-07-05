import React, { FC, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { scaleFont, scaleHeight, scaleWidth } from './thyscale'

type thyvars={
    label:string,
    isselect:boolean,
    setisselect:()=>void
    
}
export const Cards:FC<thyvars>=({label,isselect, setisselect})=>{
    const[thyon,setthyon]=useState(true)
    const[col,setcol]=useState("white")
    const Styles=StyleSheet.create({
        container:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"flex-start",
            marginVertical:scaleHeight(2),
            marginRight:scaleWidth(8),
            paddingTop:scaleHeight(10),
            paddingLeft:scaleWidth(15),
        },
        thybutton:{
            height:scaleHeight(40),
            width:scaleWidth(40),
            backgroundColor:isselect?"rgb(51, 102, 255)":"white",
            borderRadius:scaleWidth(20),
            borderWidth:scaleWidth(2),
            borderColor:"rgba(78, 75, 75, 1)",
            marginRight:scaleWidth(6)
        },
        thylabel:{
            fontSize:scaleFont(22),
            color:"rgba(78, 75, 75, 1)",
            lineHeight:scaleHeight(24),
            includeFontPadding:false,
            textAlignVertical:"center"
        },
        
    })
    
    


    return(
        <TouchableOpacity onPress={setisselect} style={Styles.container}>
            <View style={Styles.thybutton}></View>
            <Text style={Styles.thylabel}>{label}</Text>
        </TouchableOpacity>
    )
}