import React, { FC, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

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
            height:40,
            width:40,
            backgroundColor:isselect?"rgb(51, 102, 255)":"white",
            borderRadius:20,
            borderWidth:2,
            borderColor:"rgba(78, 75, 75, 1)",
            margin:10            
        },
        thylabel:{
            paddingLeft:60,
            fontSize:22,
            marginTop:-43
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