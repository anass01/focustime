import React,{useState} from 'react';
import { View, StyleSheet, Text , Button, Vibration, Platform} from 'react-native';
import { fontSizes, spacing} from "../../utils/sizes";
import {ProgressBar} from "react-native-paper";
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';

import {Countdown} from "../../components/Countdown";
import {RoundedButton} from "../../components/RoundedButton";
import {Timing} from "./Timing";

export const Timer = ({focusSubject, onTimerEnd ,clearSubject}) => {
  const [minutes , setMinutes]=useState(0.1);
  const [isStarted , setIsStarted]=useState(false);
  const [prog , setProg]=useState(1)
  const onProgress = (progress) => {
    setProg(progress)
  }
  const onEnd=()=>{
    Vibration.vibrate(300)
    setMinutes(0)
    setProg(1)
    setIsStarted(false)
    onTimerEnd();
  }
  const changeTime = (min) => {
    setMinutes(min)
    setProg(1)
    setIsStarted(false)
  }
  return (
    <View style={styles.container}>
    <View> 
      <Text style={styles.title}>focusing on:</Text>
      <Text style={styles.task}>{focusSubject}</Text>
    </View>
    <View>
      <ProgressBar color='black' progress = {Math.abs(1-prog)}/>
    </View>
    <Countdown minutes={minutes} isPaused = {!isStarted} onProgress={onProgress} onEnd={onEnd}/>
    <View style={styles.controls}>
      <Timing changeTime = {changeTime}/>
    </View>
    <View> 
      <ProgressBar color='black' progress = {prog}/>
    </View> 
    <View style={styles.controls}>
    {isStarted ? (
      activateKeepAwake(),
      <RoundedButton title="pause" size={100} onPress={() => setIsStarted(false)}/>
    ):(
      deactivateKeepAwake,
      <RoundedButton title="start" size={100} onPress={() => setIsStarted(true)}/>
    )

    }
    </View>
    <View style={styles.clearSubject}>
      <RoundedButton title="cancel" size={50} onPress={()=> clearSubject()}/>
    </View>
    
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    textAlign:"center",
    fontSize:fontSizes.md
  },
  task:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:fontSizes.xl
  },
  controls:{
    flex:0.3,
    flexDirection:"row",
    justifyContent:"center",
    padding:spacing.md,
    alignItems:"center",
  },
  clearSubject:{
    paddingBottom:25,
    paddingLeft:25,
    
  }
});
