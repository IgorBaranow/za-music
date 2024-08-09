// This code imports the default export from './Hero' (Which is functional component from hero/index.js) AND re-exports it as a named export called 'Hero'
// With using of the method I can import the 'Hero' component in other parts of my App by importing if from 'components/HomePage';
// For example import { Hero } from 'components/HomePage';
export { default as Hero } from "./Hero";
export { default as Genres } from "./Genres";
export { default as Artists } from "./Artists";
