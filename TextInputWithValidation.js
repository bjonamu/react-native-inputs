import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Text } from 'react-native'

class TextInputWithValidation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      validate: false
    }
  }

  onBlur () {
    if (this.props.validate === 'onBlur') {
      this.setState({ validate: true })
    }
  }

  onChangeText (text) {
    if (this.props.validate === 'onChangeText') {
      this.setState({ validate: true })
    }
    this.props.onChangeText(text)
  }

  render () {
    const {
      onRef,
      value,
      valid,
      editable,
      errorText,
      placeholder,
      autoCorrect,
      keyboardType,
      returnKeyType,
      textInputStyle,
      errorTextStyle,
      autoCapitalize,
      onSubmitEditing,
      secureTextEntry,
      inputContainerStyle
    } = this.props
    const finalErrorText = errorText || `${placeholder} is not valid.`
    return (
      <View style={[ { flexDirection: 'column' }, inputContainerStyle ]}>
        { this.state.validate && !valid ? <Text style={errorTextStyle}>{finalErrorText}</Text> : null }
        <TextInput
          ref={r => onRef(r)}
          style={textInputStyle}
          value={value}
          editable={editable}
          secureTextEntry={secureTextEntry}
          onBlur={this.onBlur.bind(this)}
          keyboardType={keyboardType || 'default'}
          returnKeyType={returnKeyType || 'go'}
          autoCapitalize={autoCapitalize || 'none'}
          autoCorrect={autoCorrect || false}
          onChangeText={this.onChangeText.bind(this)}
          underlineColorAndroid='transparent'
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
        />
      </View>
    )
  }
}

TextInputWithValidation.defaultProps = {
  validate: 'onBlur'
}

TextInputWithValidation.propTypes = {
  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  validate: PropTypes.oneOf(['onBlur', 'onChangeText'])
}

export default TextInputWithValidation
