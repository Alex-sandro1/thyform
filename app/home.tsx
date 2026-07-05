import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Cards } from './cards'
import { Cards1 } from './cards1'
import { scaleFont, scaleHeight, scaleWidth } from './thyscale'

export default function thyHome(){
    const[val,setval]=useState("")
    const[ismal,setismal]=useState(false)
    const[genopt,setgenopt]=useState<number|null>(null)
    const[thyag,setthyag]=useState<number|null>(null)
    const[exp,setexp]=useState<number|null>(null)
    const[pos,setpos]=useState<number|null>(null)
    const[pos1,setpos1]=useState<string|null>(null)
    const[othEdu,setothEdu]=useState("")
    const[thyopn,setthyopn]=useState(false)
    const[edId, setedId]=useState<number|null>(null)
    const thyconver=(thyopts:{id:number,label:string}[],id:number|null)=>{
        return thyopts.find(op=>op.id==id)?.label
    }
    
    const Styles=StyleSheet.create({
        header:{
            fontSize:scaleFont(50),
            paddingLeft:scaleWidth(40),
            paddingTop:scaleHeight(20)
        },
        thysub:{
            fontSize:scaleFont(23),
            paddingLeft:scaleWidth(43),
            color:"rgba(78, 75, 75, 1)"
        },
        insd:{
            height:scaleHeight(1600),
            width:scaleWidth(700),
            backgroundColor:"white",
            marginLeft:scaleWidth(40),
            marginTop:scaleHeight(20),
            borderRadius:scaleHeight(20),
            borderWidth:scaleHeight(2),
            borderColor:"rgba(78, 75, 75, 1)"


        },
        inn:{
            borderColor:"rgba(78, 75, 75, 1)",
            borderWidth:scaleHeight(2),
            height:scaleHeight(70),
            width:scaleWidth(595),
            marginLeft:scaleWidth(50),
            borderRadius:scaleHeight(10),
            fontSize:scaleFont(25),
            paddingLeft:scaleWidth(20),
            zIndex:0
        },
        inn1:{
            borderColor:"rgba(78, 75, 75, 1)",
            borderWidth:scaleHeight(2),
            height:scaleHeight(70),
            width:scaleWidth(595),
            marginLeft:scaleWidth(50),
            borderRadius:scaleHeight(10),
            fontSize:scaleFont(25),
            paddingLeft:scaleWidth(20),
            zIndex:0,
            elevation:0,
            opacity:thyopn?0:1
            
        },
        thylabel1:{
            fontSize:scaleFont(25),
            paddingLeft:scaleWidth(50),
            paddingTop:scaleHeight(20),
            paddingBottom:scaleHeight(10),
            marginTop:0,
            zIndex:0,
            elevation:0,
            opacity:thyopn?0:1
        },
        thylabel:{
            fontSize:scaleFont(25),
            paddingLeft:scaleWidth(50),
            paddingTop:scaleHeight(20),
            paddingBottom:scaleHeight(10)
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
        thyexp:{
            minHeight:scaleHeight(70),
            width:scaleWidth(595),
            borderWidth:scaleHeight(2),
            borderRadius:scaleHeight(10),
            marginTop:scaleHeight(10)

        },
        thypress:{
            minHeight:scaleHeight(90),
            width:scaleWidth(700),
            backgroundColor:"rgb(51, 102, 255)",
            marginLeft:scaleWidth(40),
            borderRadius:scaleHeight(20),
            marginTop:scaleHeight(30)
        },
        presstxt:{
            fontSize:scaleFont(40),
            color:"white",
            paddingLeft:scaleWidth(270),
            paddingTop:scaleHeight(13)
        }

    })
    const genOpt=[
        {id:1,label:"Male"},
        {id:2,label:"Female"}
    ]
    const thyage1=[
        {id:1, label:"18-28"},
        {id:2, label:"29-39"},
        {id:3, label:"40-50"},
        {id:4, label:"51-60"}
    ]
    
    const thyexp=[
        {id:1, label:"Below 5"},
        {id:2, label:"6-10"},
        {id:3, label:"11-15"},
        {id:4, label:"16-20"},
        {id:5, label:"Over 20"}
    ]
    const thypos=[
        {id:1, label:"Mathematics Teacher"},
        {id:2, label:"Academic Teacher"},
        {id:3, label:"Head Teacher"}
    ]
    const thyeduc=[
        {id:1, label:"Certificate"},
        {id:2, label:"Diploma"},
        {id:3, label:"Bachelor"},
        {id:4, label:"Master"}
    ] 
    const thyobj=[
            {id:1, label:"Certificate"},
            {id:2, label:"Diploma"},
            {id:3, label:"Bachelor"},
            {id:4, label:"Masters"}
    ]
       
    let thyformobj={
        name:val,
        gendr:thyconver(genOpt,genopt),
        thyage:thyconver(thyage1,thyag),
        exp:thyconver(thyexp,genopt),
        pos:thyconver(thypos,pos),
        educ:thyconver(thyobj,edId),
    

    }
    const thyconf=()=>{
            const thy1=Object.values(thyformobj).some((value)=>value===""||value==null)
            if(!thy1){
                router.push({pathname:"/phase1",params:thyformobj})
            } 
            else{
                Alert.alert("Warning","Please fill all the fields")
            } 
            
                
        }
    
   
    
    return(
        <View>
            <ScrollView>
                <View style={{minHeight:scaleHeight(1900)}}>
                    <Text style={Styles.header}>Demographic Information</Text>
                    <Text style={Styles.thysub}>Step 1 of 4</Text>
                    <View style={Styles.insd}>
                        <Text style={Styles.thylabel}>Name</Text>
                        <TextInput 
                            onChangeText={(txt:any)=>setval(txt)}
                            value={val}
                            placeholder="Enter your name"
                            style={Styles.inn}
                        />
                        <Text style={Styles.thylabel}>Gender</Text>  
                        <View style={{flexDirection:"row", marginLeft:40}}>
                            {genOpt.map((genOpt)=>(
                                <Cards key={genOpt.id} label={genOpt.label} setisselect={()=>{setgenopt(genOpt.id)}} isselect={genopt==genOpt.id} />
                            ))}
                            
                        </View> 
                        <Text style={Styles.thylabel}>Age group</Text>
                        <View style={{flexDirection:"row",flexWrap:"wrap", marginLeft:40}}>
                            {thyage1.map((thyage1)=>(
                                <View style={Styles.selbox}>
                                    <Cards key={thyage1.id} label={thyage1.label} setisselect={()=>{setthyag(thyage1.id)}} isselect={thyag==thyage1.id}/>
                                </View>    
                            ))}
                        </View>
                        
                        <Text style={Styles.thylabel}>Teaching Experience</Text>
                        <View style={{flexDirection:"column",marginLeft:40}}>
                            {thyexp.map((thyexp)=>(
                                <View style={Styles.thyexp}>    
                                    <Cards key={thyexp.id} label={thyexp.label} setisselect={()=>{setexp(thyexp.id)}} isselect={exp==thyexp.id}/>
                                </View>    
                            ))}
                        </View>
                        <Text style={Styles.thylabel}>Current Position</Text>
                        <View style={{marginLeft:40}}>
                            {thypos.map((thypos)=>(
                                <View style={Styles.thyexp}>     
                                    <Cards key={thypos.id} label={thypos.label} setisselect={()=>{setpos(thypos.id)}} isselect={pos==thypos.id}/>
                                </View>    
                            ))}
                        </View>
                        <Text style={Styles.thylabel}>Education Level</Text>   
                        <View style={{marginLeft:40}}>
                            <Cards1 thyopn={thyopn} setthyopn={setthyopn} thyobj={thyobj} thyid={edId} setthyid={setedId}/>
                        </View>
                        <Text style={Styles.thylabel1}>Other(Specify)</Text>
                        <TextInput
                            value={othEdu}
                            onChangeText={(txt)=>{setothEdu(txt)}}
                            placeholder="Specify if other"
                            style={Styles.inn1}
                        />
                    </View>
                    <TouchableOpacity style={Styles.thypress} onPress={()=>{thyconf()}}>
                        <Text style={Styles.presstxt}>Next  <Ionicons name="arrow-forward" size={40} color="white"/></Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
        </View>    
            
    ) 
}