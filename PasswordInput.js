import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import TextInput from './RNTextInput'

class PasswordInput extends Component {
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
      validate,
      errorText,
      iconElement,
      onChangeText,
      returnKeyType,
      errorTextStyle,
      onSubmitEditing,
      borderBottomColor,
      editableTextStyle,
      readOnlyTextStyle,
      togglePasswordControlColor
    } = this.props
    return (
      <View>
        <TextInput
          onRef={onRef}
          value={value}
          valid={valid}
          validate={validate}
          editable={editable}
          secureTextEntry={!this.state.show}
          returnKeyType={returnKeyType}
          label={confirm ? 'Confirm password' : 'Password'}
          errorText={errorText}
          errorTextStyle={errorTextStyle}
          editableTextStyle={editableTextStyle}
          readOnlyTextStyle={readOnlyTextStyle}
          borderBottomColor={borderBottomColor}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          iconElement={iconElement || <Icon size={20} name='lock' style={{ color: borderBottomColor }} />}
        />
        <TouchableOpacity onPress={this.toggleShow.bind(this)} style={{ position: 'absolute', top: 10, right: 0, padding: 10 }}>
          <Text style={{ color: togglePasswordControlColor }}>{this.state.show ? 'HIDE' : 'SHOW'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

PasswordInput.defaultProps = {
  confirm: false
}

PasswordInput.propTypes = {
  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  validate: PropTypes.oneOf(['onBlur', 'onChangeText'])
}

export default PasswordInput
