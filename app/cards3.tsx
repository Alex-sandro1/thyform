import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type theevars={
    label:number,
    isselect:boolean,
    setisselect:()=>void
}
export const Cards:FC<theevars>=({label, isselect, setisselect})=>{
    const Styles=StyleSheet.create({
        thysel:{
            height:50,
            width:40,
            borderRadius:10,
            borderWidth:2,
            borderColor:isselect?"rgb(51, 102, 255)":"black",
            marginLeft:20,
            backgroundColor:"rgba(82, 78, 78, 0.01)",
            margin:-10
        },
        seltxt:{
            fontSize:30,
            paddingLeft:10,
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