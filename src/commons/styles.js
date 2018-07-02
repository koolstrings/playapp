import { StyleSheet } from 'react-native';

const AppStyles =  StyleSheet.create({
  home:{
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'cornsilk',
    width: '100%',
    height: '100%'
  },
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  },
  welcomeTextStyle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkkhaki'
  },
  welcomeTitleStyle:{
    paddingTop: 20,
    fontSize: 45,
    color: 'indianred',
    shadowOffset:{  width: 1,  height: 1  },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    fontFamily: 'AvenirNextCondensed-Heavy'
  },
  descriptionStyle:{
    backgroundColor: 'red'
  },
  descriptionTextStyle:{
    color: 'darkkhaki',
    fontSize: 15
  },
  challangeTextStyle:{
    color: 'red',
    fontSize: 25
  },
  flexColumns:{
    display: 'flex',
    flexDirection: 'column',
  },
  activityIndicatorStyle:{
    flex: 1, padding: 20, justifyContent: 'space-around'
  },
  pageStyle:{
     flex: 1, alignItems: 'center', justifyContent: 'space-around'
   },
  questionsCatStyle:{
   fontSize: 30, fontWeight: 'bold'
  },
  questionsContainer:{
    width: '80%', height: 200, alignItems: 'center', justifyContent: 'center'
  },
  questionsBlock:{ alignSelf: 'stretch', height: 200,
    backgroundColor:'indianred',
    shadowOffset:{  width: 1,  height: 1  },
    shadowColor: 'black',
    shadowOpacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'yellow'
  },
  questionTextStyle:{
    padding: 20, textAlign:'center', color: 'white', fontSize: 20
  },
  questionsCounter:{paddingTop: 20
  },
  buttonsBlock:{
    width: '100%', flexDirection:'row',  alignItems: 'center', justifyContent: 'space-around'
  },
  flex1:{
    flex: 1
  },
  resultsPageContainer:{
    flex: 1, alignItems:'center', justifyContent:'center'
  },
  scoreStyle:{
    fontSize: 25, fontWeight:'bold'
  },
  listContainer:{
    alignSelf:'stretch', display: 'flex', flexDirection:'row', padding: 5
  },
  returlListText:{
    fontSize: 14,
    color: 'grey'
  },
  correctTextColor:{
    color:'black'
  }
})

export default AppStyles;
