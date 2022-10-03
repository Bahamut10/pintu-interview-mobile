## Overview
This project is created to complete the technical assessment given as a part of the recruitment process for getting the Front Engineer role at Pintu.

## Description
[Pintu](https://pintu.co.id) is one of the finest Crypto Exchange platforms in Indonesia. This project is the replica of their mobile apps [crypto market](https://pintu.co.id/market) feature which displays a list of available cryptocurrencies to be traded on their platform as well as the search feature and top mover feature to find out the cryptocurrencies which have the most volatile movements (up/down).

## Getting Started

This is an [Expo](https://expo.dev/) project started with a typescript template called
```bash
expo-template-blank-typescript
```


First, install all node packages dependencies:
```bash
npm install
```

Second, run the development server:

```bash
npm start
```

A QR Code will be generated for development using real devices, but, if you prefer to use virtual devices, <b>press 'a'</b> in the terminal for development using Android emulator or <b>press 'i'</b> for development using iOS simulator.

## Tech Stack

This project uses :
 - [Expo](https://nextjs.org/) with TypeScript
 - [React Query](https://www.npmjs.com/package/react-query) for a better data fetching experience
 
And it's deployed to Expo with the link which can be accessed [here](https://expo.dev/@kenedy.lukito/pintu).

## Storybook

This project comes with [Storybook](https://storybook.js.org/) to help documenting the components used in this project.

To run the storybook, all you need to do is

1. Comment out all the code in App.tsx and type in
```bash
export { default } from './storybook';
```

2. Run the app
```bash
npm start
```


## Functionalities

This mobile app consists of several parts to support its functionality.

#### 1. Market Table

This is the main part of the web which displays the list of cryptocurrencies available to be traded in the platform. It displays the price movement along with the percentage within the last 24 hours.

![Market Table](https://i.ibb.co/gtmWZ0J/IMAGE-2022-10-03-11-15-50.jpg "Market Table")

#### 2. Search

Just like how it's named, this is an input form to make it easy for you to search for certain Currencies you are looking for. You can search it by typing down its name or its currencySymbol.

![Search](https://i.ibb.co/KqMF72w/IMAGE-2022-10-03-11-17-37.jpg "Search")

#### 3. Market Tags

This is the part which can be used to "filter" cryptocurrencies based on certain category.

![Market Tags](https://i.ibb.co/93xc70t/IMAGE-2022-10-03-11-17-35.jpg "Market Tags")

![Market Tags](https://i.ibb.co/1qjwMGj/telegram-cloud-photo-size-5-6183775024247321868-y.jpg "Market Tags")

### 4. Sort

This is a feature to sort the cryptocurrencies list based on:

- Default
- Gainers in 24 hours
- Losers in 24 hours
- Asset Name (A to Z)
- Asset Name (Z to A)

![Sort](https://i.ibb.co/QQwk3Sj/IMAGE-2022-10-03-11-19-24.jpg "Sort")
