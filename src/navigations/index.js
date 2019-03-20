import HomeScreen from 'screens/Home';
import CONTANTS from 'contants';
const screenNames = CONTANTS.screenNames;
import { 
    createStackNavigator, createAppContainer, 
} from 'react-navigation';


const mainNavigationStack = createStackNavigator({
    [screenNames.HOME_SCREEN]: HomeScreen
}, {
    headerMode: 'none',
    initialRouteName: screenNames.HOME_SCREEN
})

const mainNavigation = createAppContainer(mainNavigationStack)
export default mainNavigation;