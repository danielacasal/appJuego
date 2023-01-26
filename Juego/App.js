import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import GameScreen from './src/screens/GameScreen';
import StartGameScreen from './src/screens/StartGameScreen';
import {useFonts} from "expo-font"

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handleStartGame}/>

  if(userNumber) {
    content = <GameScreen />
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title={"GUESS THE NUMBER"}></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
