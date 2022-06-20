import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import HomeScreen from '../Screens/HomeScreen'
import AddScreen from '../Screens/AddScreen'

const StackNavigator = createStackNavigator({
HomeScreen: {
    screen: HomeScreen
},
AddScreen:{
    screen: AddScreen
}
},
{
    initialRouteParams: 'ViewNotes',
    headerMode : 'none',
    mode: 'modal'
}
)

export default createAppContainer(StackNavigator)