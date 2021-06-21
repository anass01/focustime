import React from "react";
import {View, StyleSheet} from 'react-native';

import {RoundedButton} from '../../components/RoundedButton';

export const Timing = ({changeTime}) =>{
  return(
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={50} title='1' onPress={() => changeTime(1)}/>
      </View>

      
      <View style={styles.timingButton}>
        <RoundedButton size={50} title='5' onPress={() => changeTime(5)}/>
      </View>

      <View style={styles.timingButton}>
        <RoundedButton size={50} title='15' onPress={() => changeTime(15)}/>
      </View>
    </>
  )
}

const styles = StyleSheet.create(
  {
    timingButton:{
      flex: 1 ,
      alignItems:"center"
    }
  }
)