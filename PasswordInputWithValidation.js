import React, { Component } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import TextInputWithValidation from './TextInputWithValidation'

export default class PasswordInputWithValidation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }

  toggleShow () {
    this.setState({ show: !this.state.show })
  }

  render () {
    const {
      onRef,
      value,
      valid,
      confirm,
      editable,
      onChangeText,
      returnKeyType,
      textInputStyle,
      errorTextStyle,
      onSubmitEditing,
      togglePasswordControlColor,
      inputContainerStyle
    } = this.props
    return (
      <View>
        <TextInputWithValidation
          onRef={onRef}
          value={value}
          valid={valid}
          secureTextEntry={!this.state.show}
          editable={editable}
          returnKeyType={returnKeyType}
          placeholder={confirm ? 'Confirm password' : 'Password'}
          errorTextStyle={errorTextStyle}
          textInputStyle={textInputStyle}
          inputContainerStyle={inputContainerStyle}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <TouchableOpacity onPress={this.toggleShow.bind(this)} style={{ position: 'absolute', top: 10, right: 0, padding: 10 }}>
          <Text style={{ color: togglePasswordControlColor }}>{this.state.show ? 'HIDE' : 'SHOW'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
