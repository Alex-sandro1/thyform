import { Octicons } from '@expo/vector-icons'
import { FC, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { scaleFont, scaleHeight, scaleWidth } from './thyscale'

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
            height:scaleHeight(70),
            width:scaleWidth(595),
            backgroundColor:"white",
            borderRadius:scaleWidth(13),
            borderWidth:scaleWidth(2),
            borderColor:"rgba(78, 75, 75, 1)"
        },
        drp:{
            opacity:thyopn?1:0,
            height:thyopn?scaleHeight(230):0,
            width:scaleWidth(595),
            backgroundColor:"white",
            marginLeft:0,
            marginTop:scaleHeight(-10),
            borderBottomRightRadius:scaleWidth(10),
            borderBottomLeftRadius:scaleWidth(10),
            borderTopWidth:0,
            borderLeftWidth:scaleWidth(2),
            borderBottomWidth:scaleWidth(2),
            borderRightWidth:scaleWidth(2),
            animationName:{
                "0%":{transform:[{translateY:0}]},
                "100%":{transform:[{translateY:scaleHeight(230)}]}
            },
            transitionDuration:'400ms',
            zIndex:2,
        },
        txt:{
            fontSize:scaleFont(22),
            marginTop:scaleHeight(17),
            marginLeft:scaleWidth(20),
            zIndex:0
        },
        arr:{
            marginLeft:scaleWidth(540),
            marginTop:scaleHeight(-35),
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
                {thyopn?<Octicons name="chevron-up" style={Styles.arr} size={scaleWidth(40)} color="black"/>:<Octicons name="chevron-down" style={Styles.arr} size={scaleWidth(40)} color="black"/>}
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
