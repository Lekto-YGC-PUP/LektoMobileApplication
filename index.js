/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Main from './src/features/main/main.page';
import { Emotions } from './src/features/emotions/emotions.page';
import {name as appName} from './app.json';
import { Recording } from './src/features/recording/recording.page';

AppRegistry.registerComponent(appName, () => Recording);
