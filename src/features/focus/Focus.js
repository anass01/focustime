import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native-paper';
// You can import from local files
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes.js';
// or any pure javascript modules available in npm

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
        what would you like to focus on?
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md,}}
            onChangeText={(text) => setTmpItem(text)}
            onSubmitEditing={({ nativeEvent }) => {
              setTmpItem(nativeEvent.text);
              addSubject(tmpItem);
            }}
          />
          <RoundedButton
            size={50}
            title="GO"
            onPress={() => {
              addSubject(tmpItem);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingTop: spacing.md,
    alignItems: 'center',
  },
});
