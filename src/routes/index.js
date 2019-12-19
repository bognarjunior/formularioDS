import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainScreen from '../screens/Main';
import ListScreen from '../screens/List';
import FeedBackScreen from '../screens/FeedBack';

const Routes = createAppContainer(
  createSwitchNavigator({
		Main: MainScreen,
    List: ListScreen,
    FeedBack: FeedBackScreen
	})
);

export default Routes;