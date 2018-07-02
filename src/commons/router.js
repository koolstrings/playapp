import { createStackNavigator } from 'react-navigation';
import LandingPage from '../component/landingPage/landingPage';
import QuizPage from '../component/questionsPage';
import ResultPage from '../component/resultsPage'

export default createStackNavigator(
    {
      Landing : LandingPage,
      QuizPage : QuizPage,
      ResultPage: ResultPage
    },{
      initialRouteName: 'Landing',
       headerMode: 'none',
       cardStyle:{backgroundColor:'cornsilk', shadowOpacity:0}
    }
)
