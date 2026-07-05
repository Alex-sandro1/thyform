import { Tabs } from 'expo-router'
import { scaleFont } from './thyscale'
 
export default function thyTabs(){
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{headerShown:false,tabBarStyle:{height:0}}}></Tabs.Screen>
            <Tabs.Screen name="home" options={{
                headerShown:true,
                headerTitle:"DataCollect",
                headerTitleAlign:"left",
                headerTintColor:"rgba(78, 75, 75, 1)",
                headerTitleStyle:{
                    fontSize:scaleFont(34),
                    paddingLeft:20,
                    paddingBottom:10,
                    fontWeight:"600",
                    color:"rgb(51, 102, 255)"
                },
                headerStyle:{
                    height:87,
                    backgroundColor:"rgba(255,255,255,1)",
                    
                },
                tabBarStyle:{
                    height:0,
                }
                }}></Tabs.Screen>
            <Tabs.Screen name="cards" options ={{headerShown:false}}></Tabs.Screen>
            <Tabs.Screen name="cards1" options ={{headerShown:false}}></Tabs.Screen>
            <Tabs.Screen name="cards2" options ={{headerShown:false}}></Tabs.Screen>
            <Tabs.Screen name="cards3" options ={{headerShown:false}}></Tabs.Screen>
            <Tabs.Screen name="thyscale" options ={{headerShown:false}}></Tabs.Screen>
            <Tabs.Screen name="phase1" options={{
                headerShown:true,
                headerTitle:"DataCollect",
                headerTitleAlign:"left",
                headerTintColor:"rgba(78, 75, 75, 1)",
                headerTitleStyle:{
                    fontSize:scaleFont(34),
                    paddingLeft:20,
                    paddingBottom:10,
                    fontWeight:"600",
                    color:"rgb(51, 102, 255)"
                },
                headerStyle:{
                    height:87,
                    backgroundColor:"rgba(255,255,255,1)",
                    
                },
                tabBarStyle:{
                    height:0,
                }
            }}></Tabs.Screen>
            <Tabs.Screen name="phase2" options={{
                headerShown:true,
                headerTitle:"DataCollect",
                headerTitleAlign:"left",
                headerTintColor:"rgba(78, 75, 75, 1)",
                headerTitleStyle:{
                    fontSize:scaleFont(34),
                    paddingLeft:20,
                    paddingBottom:10,
                    fontWeight:"600",
                    color:"rgb(51, 102, 255)"
                },
                headerStyle:{
                    height:87,
                    backgroundColor:"rgba(255,255,255,1)",
                    
                },
                tabBarStyle:{
                    height:0,
                }
            }}></Tabs.Screen>
            <Tabs.Screen name="phase3" options={{
                headerShown:true,
                headerTitle:"DataCollect",
                headerTitleAlign:"left",
                headerTintColor:"rgba(78, 75, 75, 1)",
                headerTitleStyle:{
                    fontSize:scaleFont(34),
                    paddingLeft:20,
                    paddingBottom:10,
                    fontWeight:"600",
                    color:"rgb(51, 102, 255)"
                },
                headerStyle:{
                    height:87,
                    backgroundColor:"rgba(255,255,255,1)",
                    
                },
                tabBarStyle:{
                    height:0,
                }
            }}></Tabs.Screen>
            <Tabs.Screen name="fin" options={{
                headerShown:true,
                headerTitle:"DataCollect",
                headerTitleAlign:"left",
                headerTintColor:"rgba(78, 75, 75, 1)",
                headerTitleStyle:{
                    fontSize:scaleFont(34),
                    paddingLeft:20,
                    paddingBottom:10,
                    fontWeight:"600",
                    color:"rgb(51, 102, 255)"
                },
                headerStyle:{
                    height:87,
                    backgroundColor:"rgba(255,255,255,1)",
                    
                },
                tabBarStyle:{
                    height:0,
                }
            }}></Tabs.Screen>
        </Tabs>
    )
}