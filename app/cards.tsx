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
        thybutton:{
            height:scaleHeight(40),
            width:scaleWidth(40),
            backgroundColor:isselect?"rgb(51, 102, 255)":"white",
            borderRadius:scaleWidth(20),
            borderWidth:scaleWidth(2),
            borderColor:"rgba(78, 75, 75, 1)",
            margin:10            
        },
        thylabel:{
            paddingLeft:scaleWidth(67),
            fontSize:scaleFont(22),
            marginTop:scaleHeight(-37)
        },
        
    })
    
    


    return(
        <View>
            <TouchableOpacity onPress={setisselect}>
                <View style={Styles.thybutton}></View>
                <Text style={Styles.thylabel}>{label}</Text>
            </TouchableOpacity>    
                
            
        </View>
            
    )
}