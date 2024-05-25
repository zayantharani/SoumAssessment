/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import AppNavigation from './AppNavigation'
export default class App extends Component {
  render() {
    return (
      <AppNavigation
              isLogin={true}
              user={true}
            />
    )
  }
}

