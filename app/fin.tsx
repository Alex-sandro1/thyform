import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { BackHandler, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { scaleFont, scaleHeight, scaleWidth } from './thyscale'

export default function FinalFlash(){
    const Styles=StyleSheet.create({
        tikiTiki:{
            height:scaleHeight(300),
            width:scaleWidth(300),
            borderRadius:scaleWidth(150),
            backgroundColor:"rgb(51, 102, 255)",
            justifyContent:"center",
            alignItems:"center",
            marginLeft:scaleWidth(250),
            marginTop:scaleHeight(90),
        },
        succ:{
            fontSize:scaleFont(46),
            color:"blue",
            paddingLeft:scaleWidth(210),
            paddingTop:scaleHeight(15),
            fontWeight:"700",

        },
        succ1:{
            fontSize:scaleFont(46),
            color:"blue",
            paddingLeft:scaleWidth(250),
            paddingTop:scaleHeight(-10),
            fontWeight:"700",
        },
        expl:{
            fontSize:scaleFont(26),
            paddingLeft:scaleWidth(120)
        },
        thypress:{
            height:scaleHeight(90),
            width:scaleWidth(700),
            backgroundColor:"rgb(51, 102, 255)",
            marginLeft:scaleWidth(40),
            borderRadius:scaleWidth(20),
            marginTop:scaleHeight(90)
        },
        presstxt:{
            fontSize:scaleFont(32),
            color:"white",
            paddingLeft:scaleWidth(290),
            paddingTop:scaleHeight(20)
        }
    })
    
    return(
        <View>
            <View style={Styles.tikiTiki}>
                <Ionicons name="checkmark-circle-outline" size={140} color="white" />
            </View>
            <Text style={Styles.succ}>Survey Submitted</Text>
            <Text style={Styles.succ1}>Successfully</Text>
            <Text style={[Styles.expl,{marginTop:scaleHeight(10)}]}>Thanks for your cooperation.Your insights will be</Text>
            <Text style={Styles.expl}>very usefull in improving Mathematics education</Text>
            <Text style={[Styles.expl,{paddingLeft:scaleWidth(320)}]}>strategies</Text>
            <Text style={[Styles.expl,{marginTop:scaleHeight(10)}]}>This app is made for one time use only. Feel free</Text>
            <Text style={[Styles.expl,{paddingLeft:scaleWidth(200)}]}>to close the app and uninstall it</Text>
            {Platform.OS=="android"?<TouchableOpacity style={Styles.thypress} onPress={()=>{BackHandler.exitApp()}}>
                                        <Text style={Styles.presstxt}>Exit app</Text>
                                    </TouchableOpacity>:<Text></Text>}
            
        </View>
    )
}