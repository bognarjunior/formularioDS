import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainScreen from '../components/Main';
import ListScreen from '../components/List';
import FeedBackScreen from '../components/FeedBack';

const Routes = createAppContainer(
  createSwitchNavigator({
		Main: MainScreen,
    List: ListScreen,
    FeedBack: FeedBackScreen
	})
);

export default Routes;