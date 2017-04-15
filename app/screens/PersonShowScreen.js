         /** <Icon name="chevron-right" size={20} style={styles.personMoreIcon} /> */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict'
import React, { Component } from 'react'
import { AppRegistry, Text, View, StyleSheet, ListView, TouchableOpacity } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import _ from 'lodash'
// import Icon from 'react-native-vector-icons/FontAwesome'

class PersonShowScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ViewContainer style={{backgroundColor: 'dodgerblue'}}>
        <StatusBarBackground />
        <Text style={{marginTop: 100, fontSize: 20}}>{`PERSON SHOW SCREEN`}</Text>
        <Text style={styles.personName}> {`${_.capitalize(this.props.person.firstName)} ${_.capitalize(this.props.person.lastName)}`} </Text>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  personName: {
    marginLeft: 25
  }
});

module.exports = PersonShowScreen