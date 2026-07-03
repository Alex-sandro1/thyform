import { Octicons } from '@expo/vector-icons'
import { FC, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'

type thyvarr={
    thyopn:boolean,
    setthyopn:(value:boolean)=>void,
    thyobj:{id:number, label:string}[],
    thyid:number|null,
    setthyid:(value:number)=>void

}
export const Cards1:FC<thyvarr>=({thyopn,setthyopn, thyobj, thyid, setthyid})=>{
    const[dist,setdist]=useState(0)
    const[op,setop]=useState(0)
    const[selopt,setselopt]=useState("Certificate")
    const Styles=StyleSheet.create({
        thybutton:{
            height:70,
            width:595,
            backgroundColor:"white",
            borderRadius:13,
            borderWidth:2,
            borderColor:"rgba(78, 75, 75, 1)"
        },
        drp:{
            opacity:thyopn?1:0,
            height:thyopn?230:0,
            width:595,
            backgroundColor:"white",
            marginLeft:0,
            marginTop:-10,
            borderBottomRightRadius:10,
            borderBottomLeftRadius:10,
            borderTopWidth:0,
            borderLeftWidth:2,
            borderBottomWidth:2,
            borderRightWidth:2,
            animationName:{
                "0%":{transform:[{translateY:0}]},
                "100%":{transform:[{translateY:230}]}
            },
            transitionDuration:'400ms',
            zIndex:2,
        },
        txt:{
            fontSize:25,
            marginTop:17,
            marginLeft:20,
            zIndex:0
        },
        arr:{
            marginLeft:540,
            marginTop:-35,
        },
        thyopts:{
            opacity:thyopn?1:0,
            zIndex:999,
            elevation:999
        }

    })
    
    
    return(
        <View>
            <Pressable style={Styles.thybutton} onPress={()=>{setthyopn(!thyopn)}}>
                <Text style={Styles.txt}>{selopt}</Text>
                {thyopn?<Octicons name="chevron-up" style={Styles.arr} size={40} color="black"/>:<Octicons name="chevron-down" style={Styles.arr} size={40} color="black"/>}
            </Pressable>
            <Animated.Text style={Styles.drp}>
                <View style={Styles.thyopts}>
                    {thyobj.map((thyobj)=>(
                        <Pressable onPress={()=>{setselopt(thyobj.label);setthyid(thyobj.id);setthyopn(!thyopn)}}><Text style={Styles.txt}>{thyobj.label}</Text></Pressable>
                    ))}    
                        
                </View>
            </Animated.Text>
                
        </View>   
    )
}
