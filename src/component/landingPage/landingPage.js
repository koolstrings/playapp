import React, {Component} from 'react'
import { Trivia_Landing_Header, Trivia_Landing_Body, BeginButton } from './landingPageSnippets'
import { View } from 'react-native'

const LandingPage = (props)=>{
    const { navigation } = props
    const onBegin = ()=>{
      navigation.push('QuizPage')
    }
    return(
      <View style={{flex:1}}>
        <Trivia_Landing_Header />
        <View style={{flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems:'center'}}>
          <Trivia_Landing_Body/>
          <BeginButton _onPressButton={onBegin} />
        </View>
      </View>
    )
}

export default LandingPage
