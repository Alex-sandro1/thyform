import { MaterialIcons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Animated, { FadeIn, FadeOut, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { Cards } from './cards'
import { scaleFont, scaleHeight, scaleWidth } from './thyscale'

export default function thyph3(){
    const[chall,setchall]=useState<number|null>(null)
    const[othval,setothval]=useState("")
    const[thyresrc,setthyresrc]=useState("")
    const thyform=useLocalSearchParams<{thyform1:any}>()
    const[thysugg,setthysugg]=useState("")
    const thyon=chall==7
    const thyanim=useAnimatedStyle(()=>({
        height:withTiming(thyon?170:70,{duration:200})
    }))
    
    const Styles=StyleSheet.create({
        header:{
            fontSize:scaleFont(40),
            paddingLeft:scaleWidth(40),
            paddingTop:scaleHeight(20)
        },
        thysub:{
            fontSize:scaleFont(20),
            paddingLeft:scaleWidth(43),
            color:"rgba(78, 75, 75, 1)"
        },
        insd:{
            height:scaleHeight(1150),
            width:scaleWidth(700),
            backgroundColor:"white",
            marginLeft:scaleWidth(40),
            marginTop:scaleHeight(20),
            borderRadius:scaleHeight(20),
            borderWidth:scaleHeight(2),
            borderColor:"rgba(78, 75, 75, 1)",
            overflow:"hidden",
            paddingBottom:scaleHeight(10)

        },
        thylabel:{
            fontSize:scaleFont(22),
            paddingLeft:scaleWidth(50),
            paddingTop:scaleHeight(20),
            paddingBottom:scaleHeight(10)
        },
        thyexp:{
            height:scaleHeight(70),
            width:scaleWidth(595),
            borderWidth:scaleHeight(2),
            borderRadius:scaleHeight(10),
            marginTop:scaleHeight(20)

        },
        thyexp1:{
            height:scaleHeight(170),
            width:scaleWidth(595),
            borderWidth:scaleHeight(2),
            borderRadius:scaleHeight(10),
            marginTop:scaleHeight(20),
            

        },
        inn:{
            borderColor:"rgba(78, 75, 75, 1)",
            borderWidth:scaleHeight(2),
            height:scaleHeight(70),
            width:scaleWidth(570),
            marginLeft:scaleWidth(10),
            marginTop:scaleHeight(14),
            borderRadius:scaleHeight(10),
            fontSize:scaleFont(20),
            paddingLeft:scaleWidth(20),
            zIndex:0,
            
        },
        inn1:{
            borderColor:"rgba(78, 75, 75, 1)",
            borderWidth:scaleHeight(2),
            height:scaleHeight(70),
            width:scaleWidth(570),
            marginLeft:scaleWidth(10),
            marginTop:scaleHeight(14),
            borderRadius:scaleHeight(10),
            fontSize:scaleFont(20),
            paddingLeft:scaleWidth(20),
            zIndex:0,
           
            
        },
        thypress:{
            height:scaleHeight(90),
            width:scaleWidth(350),
            backgroundColor:"rgb(51, 102, 255)",
            marginLeft:scaleWidth(40),
            borderRadius:scaleHeight(20),
            marginTop:scaleHeight(30)
        },
        presstxt:{
            fontSize:scaleFont(32),
            color:"white",
            paddingLeft:scaleWidth(120),
            paddingTop:scaleHeight(13)
        },
        arr:{
            marginLeft:scaleWidth(220),
            marginTop:scaleHeight(-44)
        },
        thypress1:{
            height:scaleHeight(90),
            width:scaleWidth(350),
            backgroundColor:"white",
            marginLeft:scaleWidth(40),
            borderRadius:scaleHeight(20),
            marginTop:scaleHeight(30),
            borderWidth:scaleHeight(2)
        },
        presstxt1:{
            fontSize:scaleFont(32),
            color:"black",
            paddingLeft:scaleWidth(120),
            paddingTop:scaleHeight(13)
        },
        arr1:{
            marginLeft:scaleWidth(70),
            marginTop:scaleHeight(-44),

        }
    })
    const thychall=[
        {id:1, label:"Lack of resources"},
        {id:2, label:"Time constraints"},
        {id:3, label:"Large class size"},
        {id:4, label:"Diverse abilities"},
        {id:5, label:"Limited space"},
        {id:6, label:"Inaduaquate training"}
    
    ] 
    const thyconnv=(thyopt:{id:number, label:string}[],id:number|null)=>{
        return thyopt.find(optt=>optt.id==id)?.label
    }
    const thyfinform={
        ...thyform,
        chall:thyconnv(thychall,chall),
        support:thyresrc,
        comment:thysugg
    }
    console.log(thyfinform)
    const thysend=async()=>{
        const thydata=await fetch("https://thybackend.vercel.app/api/submit",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(thyfinform)
        })
        
    }
    const thyconf=async()=>{
            const thy1=Object.values(thyfinform).some((value)=>value===""||value==null)
            if(!thy1){
                const thhy=await thysend()
                router.push("/fin")

            } 
            else{
                Alert.alert("Warning","Please fill all the fields")
            } 
              
                
    }
    
    return(
        <ScrollView>
            <View style={{height:1450}}>
                <Text style={Styles.header}>Challenges & Feedback</Text>
                <Text style={Styles.thysub}>Step 4 of 4</Text>
                <View style={Styles.insd}>
                    <Text style={Styles.thylabel}>MOST CRITICAL CHALLENGE</Text>
                    <View style={{marginLeft:scaleWidth(40)}}>
                        {thychall.map((thychall)=>(
                            <View style={Styles.thyexp}>     
                                <Cards key={thychall.id} label={thychall.label} setisselect={()=>{setchall(thychall.id)}} isselect={chall==thychall.id}/>
                            </View>    
                        ))}
                        <Animated.View style={[Styles.thyexp1,thyanim]}>    
                                <Animated.View entering={FadeIn} exiting={FadeOut}>
                                    <Cards label="Other" setisselect={()=>{setchall(7);}} isselect={thyon}/>
                                       {thyon &&( <TextInput
                                            value={othval}
                                            onChangeText={(txt)=>{setothval(txt)}}
                                            placeholder="Specify if other"
                                            style={Styles.inn1}
                                        />
                                       )}
                                </Animated.View> 
                               
                                  
                                
                        </Animated.View>  
                    </View> 
                    <Text style={[Styles.thylabel,{marginTop:scaleHeight(10),marginBottom:scaleHeight(-15)}]}>Support or resources needed</Text>   
                    <TextInput 
                        value={thyresrc}
                        onChangeText={(txt)=>{setthyresrc(txt)}}
                        placeholder="What would help you the mostt"
                        style={[Styles.inn,{marginLeft:scaleWidth(40)}]}
                    />
                    <Text style={[Styles.thylabel,{marginTop:scaleHeight(10),marginBottom:scaleHeight(-15)}]}>Additional comments or suggesstion</Text>   
                    <TextInput 
                        value={thysugg}
                        onChangeText={(txt)=>{setthysugg(txt)}}
                        placeholder="Anything else you'd like to share"
                        style={[Styles.inn,{marginLeft:scaleWidth(40)}]}
                    />
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={Styles.thypress1} onPress={()=>{router.push("/phase2")}}>
                        <Text style={Styles.presstxt1}>Back</Text>
                        <MaterialIcons name="arrow-back" size={40} style={Styles.arr1} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.thypress} onPress={()=>{thyconf()}}>
                        <Text style={Styles.presstxt}>Submit</Text>
                        <MaterialIcons name="arrow-forward" size={40} style={[Styles.arr,{marginLeft:scaleWidth(250)}]} color="white"/>
                    </TouchableOpacity>
                </View>       
            </View> 
        </ScrollView>    
               
    )
}