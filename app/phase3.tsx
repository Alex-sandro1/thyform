import { MaterialIcons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Animated, { FadeIn, FadeOut, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { Cards } from './cards'

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
            fontSize:50,
            paddingLeft:40,
            paddingTop:20
        },
        thysub:{
            fontSize:23,
            paddingLeft:43,
            color:"rgba(78, 75, 75, 1)"
        },
        insd:{
            height:1150,
            width:700,
            backgroundColor:"white",
            marginLeft:40,
            marginTop:20,
            borderRadius:20,
            borderWidth:2,
            borderColor:"rgba(78, 75, 75, 1)",
            overflow:"hidden",
            paddingBottom:10

        },
        thylabel:{
            fontSize:25,
            paddingLeft:50,
            paddingTop:20,
            paddingBottom:10
        },
        thyexp:{
            height:70,
            width:595,
            borderWidth:2,
            borderRadius:10,
            marginTop:20

        },
        thyexp1:{
            height:170,
            width:595,
            borderWidth:2,
            borderRadius:10,
            marginTop:20,
            

        },
        inn:{
            borderColor:"rgba(78, 75, 75, 1)",
            borderWidth:2,
            height:70,
            width:570,
            marginLeft:10,
            marginTop:14,
            borderRadius:10,
            fontSize:25,
            paddingLeft:20,
            zIndex:0,
            
        },
        inn1:{
            borderColor:"rgba(78, 75, 75, 1)",
            borderWidth:2,
            height:70,
            width:570,
            marginLeft:10,
            marginTop:14,
            borderRadius:10,
            fontSize:25,
            paddingLeft:20,
            zIndex:0,
           
            
        },
        thypress:{
            height:90,
            width:350,
            backgroundColor:"rgb(51, 102, 255)",
            marginLeft:40,
            borderRadius:20,
            marginTop:30
        },
        presstxt:{
            fontSize:40,
            color:"white",
            paddingLeft:120,
            paddingTop:13
        },
        arr:{
            marginLeft:220,
            marginTop:-44
        },
        thypress1:{
            height:90,
            width:350,
            backgroundColor:"white",
            marginLeft:40,
            borderRadius:20,
            marginTop:30,
            borderWidth:2
        },
        presstxt1:{
            fontSize:40,
            color:"black",
            paddingLeft:120,
            paddingTop:13
        },
        arr1:{
            marginLeft:70,
            marginTop:-44,

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
                    <View style={{marginLeft:40}}>
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
                    <Text style={[Styles.thylabel,{marginTop:10,marginBottom:-15}]}>Support or resources needed</Text>   
                    <TextInput 
                        value={thyresrc}
                        onChangeText={(txt)=>{setthyresrc(txt)}}
                        placeholder="What would help you the mostt"
                        style={[Styles.inn,{marginLeft:40}]}
                    />
                    <Text style={[Styles.thylabel,{marginTop:10,marginBottom:-15}]}>Additional comments or suggesstion</Text>   
                    <TextInput 
                        value={thysugg}
                        onChangeText={(txt)=>{setthysugg(txt)}}
                        placeholder="Anything else you'd like to share"
                        style={[Styles.inn,{marginLeft:40}]}
                    />
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={Styles.thypress1} onPress={()=>{router.push("/phase2")}}>
                        <Text style={Styles.presstxt1}>Back</Text>
                        <MaterialIcons name="arrow-back" size={40} style={Styles.arr1} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.thypress} onPress={()=>{thyconf()}}>
                        <Text style={Styles.presstxt}>Submit</Text>
                        <MaterialIcons name="arrow-forward" size={40} style={[Styles.arr,{marginLeft:250}]} color="white"/>
                    </TouchableOpacity>
                </View>       
            </View> 
        </ScrollView>    
               
    )
}