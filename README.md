> Application in Development

<h1 align="center">
	<img
		width="100%"
		alt="The Lounge"
		src="./assets/docs/logo-banner.png">
</h1>

<h4 align="center">Sales Analytics and Counter</h4>
<p align="center">
	<strong>
		<a href="#overview">Overview</a>
    •
		<a href="#features">Features</a>
    •
		<a href="#installation">Installation</a>
    •
		<a href="#to-do">To-do</a>
    •
		<a href="#contributing">Contributing</a>
	</strong>
</p>
<p align="center">
	<a href="https://expo.dev">
    <img
      alt="#Expo"
      src="https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=fff">
  </a>
	<a href="https://reactnative.dev/">
    <img
      alt="#React Native"
      src="https://img.shields.io/badge/React_Native-%2320232a.svg?logo=react&logoColor=%2361DAFB">
  </a>
	<a href="https://npm.io/">
    <img
      alt="#NPM"
      src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff">
  </a>
	<a href="https://www.typescriptlang.org/">
    <img
      alt="#TypeScript"
      src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff">
  </a>
</p>

<!-- TODO: Add Video Showcase -->

## Overview

An app that shows sales analytics of spring roll wrappers. Kind of like a _dumb_ POS (point-of-sale) system or a counter for sales but I was overthinking the features.

Built with [Expo](https://expo.dev/), [Nativewind](https://www.nativewind.dev/), [React Native Reusables](https://reactnativereusables.com/), [InstantDB](https://www.instantdb.com)

## Features

- **Sales Counter**: Quick and easy tracking of spring roll wrapper sales
- **Analytics Dashboard**: View sales data with charts and statistics
- **Real-time Updates**: Instant synchronization across devices using InstantDB
- **Offline Support**: Works without internet connection with automatic sync when online
- **Clean UI**: Beautiful and intuitive interface built with Nativewind and React Native Reusables

## Installation

### Running Stable Releases

> Stable releases coming soon! The app is currently in active development.

### Running from Source

1. **Clone the repository**

   ```bash
   git clone https://github.com/ivanleopoldo/wrapper-counter.git
   cd wrapper-counter
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Run on your preferred platform**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your physical device

### Building for Production

```bash
# iOS
npx expo build:ios

# Android
npx expo build:android
```

## To-do

- [ ] Add user authentication
- [ ] Implement InstantDB integration
- [ ] Create analytics charts and visualizations
- [ ] Add data export functionality

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT

---

<p align="center">Made with ❤️ and ☕</p>
