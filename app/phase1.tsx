import { MaterialIcons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Cards } from './cards'
import { Cards2 } from './cards2'
import { scaleFont, scaleHeight, scaleWidth } from './thyscale'

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
            minHeight:scaleHeight(1200),
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
        thylabel1:{
            fontSize:scaleFont(18),
            paddingLeft:scaleWidth(50),
            marginTop:scaleHeight(-10),
            marginBottom:scaleHeight(-10)
        },
        selbox:{
            minHeight:scaleHeight(70),
            width:scaleWidth(295),
            borderWidth:scaleHeight(2),
            borderColor:"rgba(78, 75, 75, 1)",
            borderRadius:scaleHeight(10),
            marginLeft:scaleWidth(7),
            marginTop:scaleHeight(10)

        },
        thysel:{
            minHeight:scaleHeight(30),
            width:scaleWidth(50),
            borderRadius:scaleHeight(10),
            borderWidth:scaleHeight(2),
            marginLeft:scaleWidth(20)
        },
        seltxt:{
            fontSize:scaleFont(24),
            paddingLeft:scaleWidth(40),
            paddingTop:scaleHeight(5)
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
            <View style={{minHeight:scaleHeight(1570)}}>
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