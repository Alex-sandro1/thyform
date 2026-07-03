import { Tabs } from 'expo-router'
 
export default function thyTabs(){
    return(
        <Tabs>
            <Tabs.Screen name="home" options={{headerShown:false,tabBarStyle:{height:0}}}></Tabs.Screen>
            <Tabs.Screen name="home1" options={{
                headerShown:true,
                headerTitle:"DataCollect",
                headerTitleAlign:"left",
                headerTintColor:"rgba(78, 75, 75, 1)",
                headerTitleStyle:{
                    fontSize:40,
                    paddingLeft:20,
                    paddingBottom:10,
                    fontWeight:"600",
                    color:"rgb(51, 102, 255)"
                },
                headerStyle:{
                    height:107,
                    backgroundColor:"rgba(255,255,255,1)",
                    
                },
                tabBarStyle:{
                    height:0,
                }
                }}></Tabs.Screen>
            <Tabs.Screen name="cards" options ={{headerShown:false}}></Tabs.Screen>
            <Tabs.Screen name="phase1" options={{
                headerShown:true,
                headerTitle:"DataCollect",
                headerTitleAlign:"left",
                headerTintColor:"rgba(78, 75, 75, 1)",
                headerTitleStyle:{
                    fontSize:40,
                    paddingLeft:20,
                    paddingBottom:10,
                    fontWeight:"600",
                    color:"rgb(51, 102, 255)"
                },
                headerStyle:{
                    height:107,
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
                    fontSize:40,
                    paddingLeft:20,
                    paddingBottom:10,
                    fontWeight:"600",
                    color:"rgb(51, 102, 255)"
                },
                headerStyle:{
                    height:107,
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
                    fontSize:40,
                    paddingLeft:20,
                    paddingBottom:10,
                    fontWeight:"600",
                    color:"rgb(51, 102, 255)"
                },
                headerStyle:{
                    height:107,
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
                    fontSize:40,
                    paddingLeft:20,
                    paddingBottom:10,
                    fontWeight:"600",
                    color:"rgb(51, 102, 255)"
                },
                headerStyle:{
                    height:107,
                    backgroundColor:"rgba(255,255,255,1)",
                    
                },
                tabBarStyle:{
                    height:0,
                }
            }}></Tabs.Screen>
        </Tabs>
    )
}