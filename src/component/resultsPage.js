import React, {Component} from 'react';
import {View, Text, ListView, Button} from 'react-native';
import AppStyles from '../commons/styles'
import AppTexts from '../commons/texts'

export default class ResultPage extends Component{
  constructor(props){
    super(props)

    const { navigation } = this.props;
    const questionsList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      score: navigation.getParam('score', 0),
      userAnswers: navigation.getParam('userAnswers', ''),
      questionsListSource : questionsList.cloneWithRows(navigation.getParam('questions', []))
    }
  }
  render(){
    const { navigation } = this.props;
    return(
      <View style={pageStyle}>
        <View style={resultsPageContainer}>
          <Text style={scoreStyle}>{youScored}</Text>
          <Text style={scoreStyle}>{this.state.score}/{this.state.userAnswers.length}</Text>
        </View>
        <View style={{flex: 5}}>
          <ListView  style={{flex: 3}}
            dataSource={this.state.questionsListSource}
            renderRow={(rowData, sectionID, rowID, higlightRow) => {
              let txtStyle = [returlListText], symbl = '- ';
              if(rowData['correct_answer'] === this.state.userAnswers[rowID]){
                txtStyle.push(correctTextColor),
                symbl = '+ '
              }
              return (
                <View style={listContainer}>
                  <Text style={txtStyle}>{symbl}</Text>
                  <Text style={txtStyle}>{rowData.question}</Text>
                </View>
              )
            }}
          />
        </View>
        <Button
          style={{flex: 1}}
          onPress={()=>this.props.navigation.push('Landing')}
          title={playAgain}
        />
      </View>
    )
  }
}
const { youScored, playAgain } = AppTexts;
const { pageStyle, resultsPageContainer, scoreStyle, listContainer, returlListText, correctTextColor } = AppStyles;
