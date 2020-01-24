// @flow

import Colors from './Colors';
import Fonts from './Fonts';

const Styles = {
  headerStyle: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.brand.accent,
    height: 56,
  },

  shadow: {
    elevation: 1,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: Colors.dark,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },

  modal: {
    background: Colors.dark,
    opacity: 0.5,
  },

  infoTextContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  infoTextSubtitleBold: {
    ...Fonts.infoTextSubtitle.bold,
    marginBottom: 0,
  },
  infoText: {
    ...Fonts.infoText.default,
  },
  infoTextHyperlink: {
    ...Fonts.infoText.default,
    color: Colors.brand.accent,
  },
};

export default Styles;
