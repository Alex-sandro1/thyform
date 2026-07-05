import { MaterialIcons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Cards } from './cards3'
import { scaleFont, scaleHeight, scaleWidth } from './thyscale'

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
            height:scaleHeight(1250),
            width:scaleWidth(700),
            backgroundColor:"white",
            marginLeft:scaleWidth(40),
            marginTop:scaleHeight(20),
            borderRadius:scaleHeight(20),
            borderWidth:scaleHeight(2),
            borderColor:"rgba(78, 75, 75, 1)",
            overflow:"hidden",
            

        },
        thylabel:{
            fontSize:scaleFont(22),
            paddingLeft:scaleWidth(30),
            paddingTop:scaleHeight(20),
            paddingBottom:scaleHeight(10),
            color:"rgb(25, 27, 35)"
        },
        thylabel1:{
            fontSize:scaleFont(18),
            paddingLeft:scaleWidth(50),
            marginTop:scaleHeight(-10),
            marginBottom:scaleHeight(-10),
            color:"rgb(25, 27, 35)"
        },
        thylabel2:{
            fontSize:scaleFont(24),
            paddingLeft:scaleWidth(50),
            paddingTop:scaleHeight(20),
            paddingBottom:scaleHeight(10),
            fontWeight:"600",
            color:"rgb(25, 27, 35)"
        },
        thycol:{
            height:scaleHeight(200),
            width:scaleWidth(595),
            borderWidth:scaleHeight(2),
            marginLeft:scaleWidth(50),
            marginTop:scaleHeight(20),
            borderRadius:scaleHeight(10),
            borderColor:"rgb(36,36,36)",
            backgroundColor:"rgba(82, 78, 78, 0.11)"
        },
        inn:{
            borderColor:"rgba(78, 75, 75, 1)",
            borderWidth:scaleHeight(2),
            height:scaleHeight(80),
            width:scaleWidth(595),
            marginLeft:scaleWidth(50),
            borderRadius:scaleHeight(10),
            fontSize:scaleFont(20),
            paddingLeft:scaleWidth(20),
            zIndex:0
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
            <View style={{backgroundColor:"rgb(250, 248, 255)",height:scaleHeight(1600)}}>
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