import React from "react";
import {View,StyleSheet,FlatList , Text ,SafeAreaView} from "react-native";

import {fontSizes, spacing} from "../../utils/sizes";
import {RoundedButton} from "../../components/RoundedButton";

const renderItem = ({ item }) => (
    <Text style={styles.historyItem(item.status)}>{item.subject} </Text>
  );

export const FocusHistory = ({focusHistory , onClear})=>{
  console.log("focushistory");
  console.log(focusHistory.length);
  const clearHistory=()=>{
    onClear();
  }
  return(
    <>
      <View style={{flex:2, alignItems:"center"}}>
        <Text style={styles.title}>
        Things we've focused on
        </Text>
        {focusHistory.length > 0 ? (
          <FlatList
            data={focusHistory}
            renderItem={renderItem}
          />
        ):(
          <Text>nothing
          </Text>
        )
          
        }
      </View>
      <View style={styles.clearContainer}>
        <RoundedButton size={75} title="Clear" onPress={()=>onClear()} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({

  historyItem: (status) => ({
    color: status>1? 'gray' : 'black',
    fontWeight:status>1? 'light' : 'Bold',
    fontSize:fontSizes.md,
  }),
  title:{
    fontSize: fontSizes.lg,
  },
  clearContainer:{
    
    alignItems:"center",

  }
})
