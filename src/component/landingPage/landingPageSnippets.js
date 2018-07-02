import AppStyles from '../../commons/styles';
import AppTexts from '../../commons/texts';
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
const {home, headerStyle, flexColumns, welcomeTextStyle, welcomeTitleStyle} = AppStyles;
const {welcomText, appTitle, gameDescription, challangeText, beginText, TouchableOpacity} = AppTexts;

export const Trivia_Landing_Header = ()=>{
  return (
    <View style={[headerStyle, flexColumns]}>
      <Text style={welcomeTextStyle}>{welcomText}</Text>
      <Text style={welcomeTitleStyle}>{appTitle}</Text>
    </View>
  )
}

export const TrueOrFalse = ()=>{
  return (
    <Text style={{fontSize: 20}}>
      <Text style={{color: 'green'}}> True </Text> or
      <Text style={{color: 'red'}}> False </Text> questions
    </Text>
  )
}

export const GameContext = (props)=>{
  return(
    <View>
    <Text style={{color: 'darkolivegreen', padding: 30, textAlign: 'center'}}>
      <Text style={{fontSize: 20}}> {gameDescription} </Text>
      <Text style={{fontSize: 30}}>{props.questionCount || 10} </Text>
      <TrueOrFalse />
    </Text>
      <View>
        <Text style={{color: 'indianred', padding: 30, textAlign: 'center', fontSize: 35}}> {challangeText}</Text>
      </View>
    </View>
  )
}

export const Trivia_Landing_Body = ()=>{
  return(
    <View style={{flex: 1,
        flexDirection: 'column',
        alignItems:'flex-start'}}>
        <GameContext />
      </View>
    )
}

export const BeginButton = (props)=>{
  return (
    <TouchableHighlight onPress={props._onPressButton}  style={{width: '100%'}}>
      <Text style={{padding: 5, fontSize: 35, color:'cornsilk', backgroundColor:'darkolivegreen', textAlign:'center', fontFamily:'Georgia-Bold'}}>Begin</Text>
    </TouchableHighlight>
  );
}
