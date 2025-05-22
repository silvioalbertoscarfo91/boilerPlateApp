import { Platform } from 'react-native';
import Styles from '../styles/Styles';
import Fonts from '../styles/Fonts';

const defaultNavigationOptions = {
  headerStyle: Styles.headerStyle,
  headerTitleStyle: {
    ...Fonts.headline.bold,
  },
};

export default {
  headerLayoutPreset: 'center',
  ...Platform.select({
    ios: {
      headerMode: 'float',
    },
    android: {
      headerMode: 'screen',
    },
  }),
  defaultNavigationOptions,
};
