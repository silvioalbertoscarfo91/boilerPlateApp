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
