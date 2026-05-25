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

This is a React Native 0.85.3 boilerplate using **react-navigation v7** (stack navigator) with **Redux** for state management. Hermes is the JS engine. New Architecture (`newArchEnabled=true`) is enabled in `android/gradle.properties`.

### Navigation

`App.js` wraps everything in `GestureHandlerRootView` → `SafeAreaProvider` → Redux `<Provider>` → `NavigationContainer`. The single `RootStack` (defined in `app/views/RootStackNavigator.js`) is now a function component using `Stack.Navigator` / `Stack.Screen` from `@react-navigation/stack`. Screen titles and shared header styles (`Styles.headerStyle`, `Fonts.headline.bold`) are defined in `screenOptions` on `Stack.Navigator`; per-screen titles are set via the `options` prop on each `Stack.Screen`.

Navigation between screens uses `this.props.navigation.navigate('ScreenName')` (class components) or the `useNavigation` hook (function components).

`app/views/StackNavigatorConfig.js` is kept for reference but is no longer imported — its content was merged into `RootStackNavigator.js`.

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

## Post-migration manual steps

After running `yarn install`, a few steps require native tooling and cannot be scripted:

**iOS**
- In Xcode rename `AppDelegate.m` → `AppDelegate.mm` (File inspector → rename) so Objective-C++ is enabled for Hermes. The pbxproj is already tracking the file by name, so Xcode will update the reference automatically.
- Run `cd ios && pod install` to regenerate the Podfile.lock with the new simplified Podfile.
- Delete `ios/Podfile.lock` before `pod install` if it conflicts with old pod versions.

**Android**
- `android/app/src/debug/` no longer needs a Flipper integration file; it only needs its `AndroidManifest.xml` (already correct).
- `android/app/BUCK` and `android/app/build_defs.bzl` are Buck build system artifacts that are no longer used; they can be deleted.

**Redux deprecation warning**
- `createStore` from `redux` 5 emits a deprecation notice. It still works but the recommended path is [Redux Toolkit](https://redux-toolkit.js.org/) (`configureStore` from `@reduxjs/toolkit`).

**Tests**
- `__tests__/App-test.js` renders `<App />` which now includes `GestureHandlerRootView` and `NavigationContainer`. Add this to `jest.setup.js` (and register it in `jest.setupFilesAfterFramework`) to avoid gesture-handler warnings in tests:
  ```js
  import 'react-native-gesture-handler/jestSetup';
  ```

---

## Behavioral Guidelines

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.
