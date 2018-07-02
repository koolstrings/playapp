import React from 'react'
import {View} from 'react-native'
import Router from './commons/router'
import AppStyles from  './commons/styles'

const TriviaApp = ()=>{
  return (
    <View style={AppStyles.home}>
      <Router/>
    </View>
  )
}

export default TriviaApp;
