# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start Metro bundler
yarn start

# Run on iOS simulator
yarn ios

# Run on Android emulator
yarn android

# Run all tests
yarn test

# Run a single test file
yarn test __tests__/App-test.js

# Lint
yarn lint
```

Tests use Jest with the `react-native` preset. There is no TypeScript — the project uses plain JavaScript with Flow annotations (`// @flow`, `@format` docblock tags) in the styles layer.

## Architecture

This is a React Native 0.61.5 boilerplate using **react-navigation v4** (stack navigator) with **Redux** for state management.

### Navigation

`App.js` wraps everything in a Redux `<Provider>` and a `createAppContainer`. The single `RootStack` (defined in `app/views/RootStackNavigator.js`) registers four screens: `Home → Redux → Profile → Details`. Navigation between screens uses `this.props.navigation.navigate('ScreenName')`.

Stack-level header config (font, style, platform-specific `headerMode`) lives in `app/views/StackNavigatorConfig.js` and is imported where needed.

### Redux

The store is created in `app/store/configureStore.js` via `combineReducers`. Currently there is one reducer: `countReducer` (keyed as `state.countReducer`).

The pattern for adding state:
1. Add a constant to `app/constants/index.js`
2. Create an action creator in `app/actions/` and re-export it from `app/actions/index.js`
3. Create a reducer in `app/reducers/`
4. Register it in `configureStore.js` via `combineReducers`

Components access Redux state with `connect(mapStateToProps, mapDispatchToProps)` (class components, no hooks pattern established yet).

### Styling

`app/styles/` contains three centralised modules:
- `Colors.js` — brand, semantic, and gray-scale palette (rgb strings)
- `Fonts.js` — typography scale using OpenSans and Oswald font families, each with `default` and `bold` variants
- `Styles.js` — shared StyleSheet fragments (shadow, modal overlay, header style, info-text containers) that compose from Colors and Fonts

New styles should reference these primitives rather than hardcoding values.
