import React, {Component} from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';
import AppStyles from '../commons/styles';
import getQuestions from '../commons/services'

export default class Questions extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      questions: [],
      fetchErrorOccured: false,
      userAnswers: [],
      score: 0,
      onIndex: 0,
      showResults: false
    };
    this.recordUserAnswer = this.recordUserAnswer.bind(this);
  };

  componentDidMount(){
    getQuestions()
    .then((resp)=>resp.json())
    .then((respJson)=>{
        this.setState({
          loading: false,
          questions: formatText(respJson.results),
        })
    })
    .catch((error) =>{
      this.setState({
        loading: false,
        fetchErrorOccured: true
      })
    });
  }

  recordUserAnswer(val, i, actual){
    let { onIndex, score, userAnswers, questions, showResults } = this.state;
    let newScore = score;

    (val === actual) && (newScore = score+1)
    if(!showResults){
      this.setState({
        userAnswers : userAnswers.concat(val),
        score: newScore,
        onIndex: this.state.onIndex+1,
        showResults: (this.state.onIndex >= questions.length-1)? true: false
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.showResults){
      nextProps.navigation.push('ResultPage', {
        score: nextState.score,
        questions : nextState.questions,
        userAnswers: nextState.userAnswers
      })
      return false
    }
    return true
  }

  render(){
    let { onIndex, questions , userAnswers, score, loading } = this.state, currentQ, answerProps;

    if(loading){
      return(
        <View style={activityIndicatorStyle}>
          <ActivityIndicator size="large" color="blue"/>
        </View>
      )
    }

    currentQ = questions[onIndex];
    answerProps = [onIndex, currentQ['correct_answer']];

    return (
        <View style={pageStyle}>
          <Text style={questionsCatStyle}>{currentQ.category}</Text>
          <View style={questionsContainer}>
            <View style={questionsBlock}>
              <Text style={questionTextStyle}>{currentQ.question}</Text>
            </View>
            <Text style={questionsCounter}>{onIndex+1} of {questions.length}</Text>
          </View>
          <View style={buttonsBlock}>
            <Btn callBack={this.recordUserAnswer} params={['True', ...answerProps]}/>
            <Btn callBack={this.recordUserAnswer} params={['False', ...answerProps]}/>
          </View>
        </View>
      )
  }
}
const Btn = (props)=>{
  let callBack = props.callBack
  return (
    <Button
      style={flex1}
      onPress={()=>callBack.apply(null, props.params)}
      title={props.params[0]}
    />
  )
}

const formatText = (allQuestions)=>{
  //replace unicode or html entities
  return allQuestions.map((q)=>{
    return {...q, question: q.question.replace(/&quot;/g, '\"').replace(/&#039;/g, '\'')}
  })
}
const { activityIndicatorStyle, pageStyle,questionsCatStyle,questionsContainer, questionsBlock, questionTextStyle, questionsCounter, buttonsBlock, flex1} = AppStyles
