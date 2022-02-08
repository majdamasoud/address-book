import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import App from './App';
import Addresses from './Components/addresses/Addresses';
import Display from './Components/display/Display';
import axiosMockResult from './axiosMockResult.json';
import mockAxios from "axios";

describe('Integration', () => {
  describe('API Call Successful', () => {
    it('API should have been called once', () => {
      // create mock API call
  
      // resolve components compelete render after call
  
      // assert API been called once
      // assert API called with correct URL
    });
  
    it('Should add list of people to addresses page', () => {
      // create mock API call
  
      // Render Addresses component nested in App component
  
      // Assert initial display before API competes call
  
      // resolve components complete render after call
  
      // assert the number of people displayed on addresses page
  
    });
  
    it('Should display details of person corresponding to url param on display page', () => {
      // create mock API call
  
      // Render Display component nested in App component
  
      // Assert initial display before API competes call
  
      // resolve components complete render after call
  
      // assert the correct person is displayed according to the display page URL param
    });
  });
  
  describe('API Call Failed', () => {
    it('Should display initial page on Addresses page', () => {
      // create mock API call
  
      // Render Addresses component nested in App component
  
      // Assert initial display before API competes call
  
      // resolve components complete render after call failed
  
      // assert the number of people displayed on addresses page is 0
  
    });
  
    it('Should display initial page on display page', () => {
      // create mock API call
  
      // Render Display component nested in App component
  
      // Assert initial display before API competes call
  
      // resolve components complete render after call failed
  
      // assert the display page is still the initial page
    });
  });  
});

describe('End to End', () => {
  it('Should successfully mimick user interaction upon successful API call', () => {
    // user visits site

    // assert site displays initial display for addresses page

    // mock API call

    // assert addresses page displays list of people on addresses page

    // user clicks a person directing them to display page

    // assert display page shows correct person

    // user clicks exit button on display page

    // user is redirected to addresses page
  });

  it('Should successfully mimick user interaction upon failed API call', () => {
    // user visits site

    // assert site displays initial display for addresses page

    // mock API call fails

    // assert site displays initial display for addresses page
  });
})