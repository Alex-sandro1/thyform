import { MaterialIcons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Cards } from './cards'
import { Cards2 } from './cards2'

export default function thph1(){
    const[ag,setag]=useState<number|null>(null)
    const[thysel, setthysel]=useState<number|null>(null)
    const[isselect,setisselect]=useState<number|null>(null)
    const[thyacd,setacd]=useState<number|null>(null)
    const[thyacd1,setacd1]=useState<number|null>(null)
    const[thyacd2,setacd2]=useState<number|null>(null)
    const[thyacd3,setacd3]=useState<number|null>(null)
    const[thyval,setthyval]=useState("")
    const thyform=useLocalSearchParams<{thyformobj:any}>()
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
            height:1200,
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
        thylabel1:{
            fontSize:20,
            paddingLeft:50,
            marginTop:-10,
            marginBottom:-10
        },
        selbox:{
            height:70,
            width:295,
            borderWidth:2,
            borderColor:"rgba(78, 75, 75, 1)",
            borderRadius:10,
            marginLeft:7,
            marginTop:10

        },
        thysel:{
            height:60,
            width:100,
            borderRadius:10,
            borderWidth:2,
            marginLeft:20
        },
        seltxt:{
            fontSize:30,
            paddingLeft:40,
            paddingTop:5
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
    const thyconnv=(thyopt:{id:number, label:string}[],id:number|null)=>{
        return thyopt.find(optt=>optt.id==id)?.label
    }

    const thynum=[
        {id:1, label:"20-30"},
        {id:2, label:"31-40"},
        {id:3, label:"41-50"},
        {id:4, label:"51-70"},
        {id:5, label:"Above 70"}
    ]
    const thyarr=[
        {id:5},
        {id:4},
        {id:3},
        {id:2},
        {id:1}
    ]
    const thyarr1=[
        {id:5},
        {id:4},
        {id:3},
        {id:2},
        {id:1}
    ]
    const thyform1={
        ...thyform,
        num:thyconnv(thynum,ag),
        acd:isselect,
        eng:thyacd,
        part:thyacd1,
        attendance:thyacd2,
        disc:thyacd3,
        addChar:thyval,
    }
    const thyconf=()=>{
        const thy1=Object.values(thyform1).some((value)=>value===""||value==null)
        if(!thy1){
            router.push({pathname:"/phase2",params:thyform1})
        } 
        else{
            Alert.alert("Warning","Please fill all the fields")
        } 
         
            
    }

    return(
        <ScrollView>
            <View style={{height:1570}}>
                <Text style={Styles.header}>Nature Of Your Mathematics Class</Text>
                <Text style={Styles.thysub}>Step 2 of 4</Text>
                <View style={Styles.insd}>
                    <Text style={Styles.thylabel}>Average number of pupils</Text>
                    <View style={{flexDirection:"row",flexWrap:"wrap",marginLeft:40}}>
                        {thynum.map((thynum)=>(
                            <View style={Styles.selbox}>
                                <Cards key={thynum.id} label={thynum.label} isselect={ag==thynum.id} setisselect={()=>{setag(thynum.id)}}/>
                            </View>        
                        ))}  
                    </View>
                    <Text style={Styles.thylabel}>PERFORMANCE AND ENGAGEMENT RATINGS</Text>
                    <Text style={Styles.thylabel1}>Key:(1:Not Effective, 2:Slightly Effective, 3:Moderately Effective, 4:Very Effective, 5:Extremely Effective)</Text>
                    <Text style={Styles.thylabel}>Academic Performance</Text>
                    <View style={{flexDirection:"row", marginLeft:40}}>
                        {thyarr.map((thyarr)=>(
                            <Cards2 key={thyarr.id} label={thyarr.id} isselect={isselect==thyarr.id} setisselect={()=>{setisselect(thyarr.id)}}/>
                        ))}
                    </View>
                    <Text style={Styles.thylabel}>Student Engagement</Text>
                    <View style={{flexDirection:"row", marginLeft:40}}>
                        {thyarr1.map((thyarr1)=>(
                            <Cards2 key={thyarr1.id} label={thyarr1.id} isselect={thyacd==thyarr1.id} setisselect={()=>{setacd(thyarr1.id)}}/>
                        ))}
                    </View>
                    <Text style={Styles.thylabel}>Student Participation</Text>
                    <View style={{flexDirection:"row", marginLeft:40}}>
                        {thyarr1.map((thyarr1)=>(
                            <Cards2 key={thyarr1.id} label={thyarr1.id} isselect={thyacd1==thyarr1.id} setisselect={()=>{setacd1(thyarr1.id)}}/>
                        ))}
                    </View>
                    <Text style={Styles.thylabel}>Student Attendance</Text>
                    <View style={{flexDirection:"row", marginLeft:40}}>
                        {thyarr1.map((thyarr1)=>(
                            <Cards2 key={thyarr1.id} label={thyarr1.id} isselect={thyacd2==thyarr1.id} setisselect={()=>{setacd2(thyarr1.id)}}/>
                        ))}
                    </View>
                    <Text style={Styles.thylabel}>Classroom Discipline</Text>
                    <View style={{flexDirection:"row", marginLeft:40}}>
                        {thyarr1.map((thyarr1)=>(
                            <Cards2 key={thyarr1.id} label={thyarr1.id} isselect={thyacd3==thyarr1.id} setisselect={()=>{setacd3(thyarr1.id)}}/>
                        ))}
                    </View>
                    <Text style={Styles.thylabel}>Additional Charateristics</Text>
                    <TextInput
                        value={thyval}
                        onChangeText={(txt)=>{setthyval(txt)}}
                        placeholder="Briefly describe the dynamics of your class"
                        style={Styles.inn}
                        multiline={true}
                        />
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={Styles.thypress1} onPress={()=>{router.push("/home")}}>
                        <Text style={Styles.presstxt1}>Back</Text>
                        <MaterialIcons name="arrow-back" size={40} style={Styles.arr1} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.thypress} onPress={()=>{thyconf()}}>
                        <Text style={Styles.presstxt}>Next</Text>
                        <MaterialIcons name="arrow-forward" size={40} style={Styles.arr} color="white"/>
                    </TouchableOpacity>
                </View>    
                    
                        
            </View>
        </ScrollView>    
            
    )
}