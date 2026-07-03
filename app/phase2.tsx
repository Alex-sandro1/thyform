import { MaterialIcons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Cards } from './cards3'

export default function thyph2(){
    const[thyval,setthyval]=useState("")
    const[thystr,setthystr]=useState(0)
    const[thystr1,setthystr1]=useState(0)
    const[thystr2,setthystr2]=useState(0)
    const[thystr3,setthystr3]=useState(0)
    const[thystr4,setthystr4]=useState(0)
    const[thystr5,setthystr5]=useState(0)
    const[thystr6,setthystr6]=useState(0)
    const[thyselect,setthyselect]=useState<number|null>(null)
    const[thyselect1,setthyselect1]=useState<number|null>(null)
    const thyform=useLocalSearchParams<{thyform1:any}>()
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
            height:1250,
            width:700,
            backgroundColor:"white",
            marginLeft:40,
            marginTop:20,
            borderRadius:20,
            borderWidth:2,
            borderColor:"rgba(78, 75, 75, 1)",
            overflow:"hidden",
            

        },
        thylabel:{
            fontSize:27,
            paddingLeft:30,
            paddingTop:20,
            paddingBottom:10,
            color:"rgb(25, 27, 35)"
        },
        thylabel1:{
            fontSize:20,
            paddingLeft:50,
            marginTop:-10,
            marginBottom:-10,
            color:"rgb(25, 27, 35)"
        },
        thylabel2:{
            fontSize:30,
            paddingLeft:50,
            paddingTop:20,
            paddingBottom:10,
            fontWeight:"600",
            color:"rgb(25, 27, 35)"
        },
        thycol:{
            height:200,
            width:595,
            borderWidth:2,
            marginLeft:50,
            marginTop:20,
            borderRadius:10,
            borderColor:"rgb(36,36,36)",
            backgroundColor:"rgba(82, 78, 78, 0.11)"
        },
        inn:{
            borderColor:"rgba(78, 75, 75, 1)",
            borderWidth:2,
            height:80,
            width:595,
            marginLeft:50,
            borderRadius:10,
            fontSize:25,
            paddingLeft:20,
            zIndex:0
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
    const thyarr=[
        {id:5},
        {id:4},
        {id:3},
        {id:2},
        {id:1}
    ]
    const thyform1={
        ...thyform,
        differentiatedfreq:thyselect,
        differentiatedeffect:thyselect1,
        collabfreq:thystr,
        collabeffect:thystr1,
        activefreq:thystr2,
        activeeffect:thystr3,
        thyrepeatfreq:thystr4,
        thyrepeateffect:thystr5,
        othmethod:thyval
    }
    
    const thypass=()=>{
        const cond=Object.values(thyform1).some(value=>value==null||value==="")
        if(!cond){
            router.push({pathname:"/phase3",params:thyform1})
        }
        else{
            Alert.alert("Warning","Please fill all the fields")
        }
    }
    return(
        <ScrollView>
            <View style={{backgroundColor:"rgb(250, 248, 255)",height:1600}}>
                <Text style={Styles.header}>Nature Of Your Mathematics Class</Text>
                <Text style={Styles.thysub}>Step 3 of 4</Text>
                <View style={Styles.insd}>
                    <Text style={[Styles.thylabel2,{marginBottom:20, fontWeight:"700"}]}>TEACHING STRATEGIES:FREQUENCY AND EFFECTIVENESS</Text>
                    <Text style={Styles.thylabel1}>Key:(1:Not Effective, 2:Slightly Effective, 3:Moderately Effective, 4:Very Effective, 5:Extremely Effective)</Text>
                    <View style={Styles.thycol}>
                        <Text style={[Styles.thylabel,{marginBottom:-20, marginTop:-3,fontWeight:"700"}]}>Differentiated Instruction</Text>
                        <Text style={[Styles.thylabel,{marginBottom:8}]}>FREQUENCY</Text>
                        <Text style={[Styles.thylabel,{marginTop:-73,marginLeft:320}]}>EFFECTIVENESS</Text>
                        <View style={{flexDirection:"row", marginLeft:7}}>
                            {thyarr.map((thyarr)=>(
                                <Cards key={thyarr.id} label={thyarr.id} isselect={thyselect==thyarr.id} setisselect={()=>{setthyselect(thyarr.id)}}/>
                            ))}
                            <View style={{marginLeft:50, flexDirection:"row"}}>
                                {thyarr.map((thyarr)=>(
                                <Cards key={thyarr.id} label={thyarr.id} isselect={thyselect1==thyarr.id} setisselect={()=>{setthyselect1(thyarr.id)}}/>
                                ))}
                            </View>
                        </View>
                    </View>
                    <View style={Styles.thycol}>
                        <Text style={[Styles.thylabel,{marginBottom:-20, marginTop:-3,fontWeight:"700"}]}>Collaborative Work/ Peer Teaching</Text>
                        <Text style={[Styles.thylabel,{marginBottom:8}]}>FREQUENCY</Text>
                        <Text style={[Styles.thylabel,{marginTop:-73,marginLeft:320}]}>EFFECTIVENESS</Text>
                        <View style={{flexDirection:"row", marginLeft:7}}>
                            {thyarr.map((thyarr)=>(
                                <Cards key={thyarr.id} label={thyarr.id} isselect={thystr==thyarr.id} setisselect={()=>{setthystr(thyarr.id)}}/>
                            ))}
                            <View style={{marginLeft:50, flexDirection:"row"}}>
                                {thyarr.map((thyarr)=>(
                                <Cards key={thyarr.id} label={thyarr.id} isselect={thystr1==thyarr.id} setisselect={()=>{setthystr1(thyarr.id)}}/>
                                ))}
                            </View>
                        
                        </View>
                    </View>
                    <View style={Styles.thycol}>
                        <Text style={[Styles.thylabel,{marginBottom:-20, marginTop:-3,fontWeight:"700"}]}>Active Learning and Games</Text>
                        <Text style={[Styles.thylabel,{marginBottom:8}]}>FREQUENCY</Text>
                        <Text style={[Styles.thylabel,{marginTop:-73,marginLeft:320}]}>EFFECTIVENESS</Text>
                        <View style={{flexDirection:"row", marginLeft:7}}>
                            {thyarr.map((thyarr)=>(
                                <Cards key={thyarr.id} label={thyarr.id} isselect={thystr2==thyarr.id} setisselect={()=>{setthystr2(thyarr.id)}}/>
                            ))}
                            <View style={{marginLeft:50, flexDirection:"row"}}>
                                {thyarr.map((thyarr)=>(
                                <Cards key={thyarr.id} label={thyarr.id} isselect={thystr3==thyarr.id} setisselect={()=>{setthystr3(thyarr.id)}}/>
                                ))}
                            </View>
                        
                        </View>
                    </View>
                    <View style={Styles.thycol}>
                        <Text style={[Styles.thylabel,{marginBottom:-20, marginTop:-3,fontWeight:"700"}]}>Repetition and Conceptual Models</Text>
                        <Text style={[Styles.thylabel,{marginBottom:8}]}>FREQUENCY</Text>
                        <Text style={[Styles.thylabel,{marginTop:-73,marginLeft:320}]}>EFFECTIVENESS</Text>
                        <View style={{flexDirection:"row", marginLeft:7}}>
                            {thyarr.map((thyarr)=>(
                                <Cards key={thyarr.id} label={thyarr.id} isselect={thystr4==thyarr.id} setisselect={()=>{setthystr4(thyarr.id)}}/>
                            ))}
                            <View style={{marginLeft:50, flexDirection:"row"}}>
                                {thyarr.map((thyarr)=>(
                                <Cards key={thyarr.id} label={thyarr.id} isselect={thystr5==thyarr.id} setisselect={()=>{setthystr5(thyarr.id)}}/>
                                ))}
                            </View>
                        
                        </View>
                    </View>
                    <Text style={[Styles.thylabel,{marginLeft:20}]}>Other Methods Used</Text>
                    <TextInput
                        value={thyval}
                        onChangeText={(thytxt)=>{setthyval(thytxt)}}
                        placeholder="List any other methods you employ..."
                        style={Styles.inn}
                    />
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={Styles.thypress1} onPress={()=>{router.push("/phase1")}}>
                        <Text style={Styles.presstxt1}>Back</Text>
                        <MaterialIcons name="arrow-back" size={40} style={Styles.arr1} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.thypress} onPress={thypass}>
                        <Text style={Styles.presstxt}>Next</Text>
                        <MaterialIcons name="arrow-forward" size={40} style={Styles.arr} color="white"/>
                    </TouchableOpacity>
                </View>  
            </View>
        </ScrollView>    
            
    )
}