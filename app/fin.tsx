import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { BackHandler, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function FinalFlash(){
    const Styles=StyleSheet.create({
        tikiTiki:{
            height:300,
            width:300,
            borderRadius:150,
            backgroundColor:"rgb(51, 102, 255)",
            justifyContent:"center",
            alignItems:"center",
            marginLeft:220,
            marginTop:90,
        },
        succ:{
            fontSize:60,
            color:"blue",
            paddingLeft:130,
            paddingTop:15,
            fontWeight:"700",

        },
        succ1:{
            fontSize:60,
            color:"blue",
            paddingLeft:190,
            paddingTop:-10,
            fontWeight:"700",
        },
        expl:{
            fontSize:30,
            paddingLeft:60
        },
        thypress:{
            height:90,
            width:700,
            backgroundColor:"rgb(51, 102, 255)",
            marginLeft:40,
            borderRadius:20,
            marginTop:90
        },
        presstxt:{
            fontSize:40,
            color:"white",
            paddingLeft:250,
            paddingTop:13
        }
    })
    
    return(
        <View>
            <View style={Styles.tikiTiki}>
                <Ionicons name="checkmark-circle-outline" size={140} color="white" />
            </View>
            <Text style={Styles.succ}>Survey Submitted</Text>
            <Text style={Styles.succ1}>Successfully</Text>
            <Text style={Styles.expl}>Thanks for your cooperation.Your insights will be</Text>
            <Text style={Styles.expl}>very usefull in improving Mathematics education</Text>
            <Text style={[Styles.expl,{paddingLeft:270}]}>strategies</Text>
            <Text style={Styles.expl}>This app is made for one time use only. Feel free</Text>
            <Text style={[Styles.expl,{paddingLeft:170}]}>to close the app and uninstall it</Text>
            {Platform.OS=="android"?<TouchableOpacity style={Styles.thypress} onPress={()=>{BackHandler.exitApp()}}>
                                        <Text style={Styles.presstxt}>Exit app</Text>
                                    </TouchableOpacity>:<Text></Text>}
            
        </View>
    )
}