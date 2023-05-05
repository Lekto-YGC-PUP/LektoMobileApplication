/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Main from './src/features/main/main.page';
import { Emotions } from './src/features/emotions/emotions.page';
import { Results } from './src/features/results/results.page';
import {name as appName} from './app.json';
import { Recording } from './src/features/recording/recording.page';
import { StartScreen } from './src/features/start/start-screen';

AppRegistry.registerComponent(appName, () => StartScreen );
