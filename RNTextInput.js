import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Text } from 'react-native'

import styles from './Styles'
import { Colors } from './Themes'

class RNTextInput extends Component {
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
      label,
      editable,
      errorText,
      iconElement,
      autoCorrect,
      keyboardType,
      returnKeyType,
      errorTextStyle,
      autoCapitalize,
      onSubmitEditing,
      secureTextEntry,
      borderBottomColor,
      editableTextStyle,
      readOnlyTextStyle
    } = this.props
    const showError = this.state.validate && !valid
    const finalErrorText = errorText || `${label} is not valid.`
    const borderColor = showError ? Colors.error : borderBottomColor
    const inputStyle = editable ? editableTextStyle : readOnlyTextStyle
    return (
      <View style={styles.container}>
        <View style={[ styles.row, { borderBottomColor: borderColor } ]}>
          {
            iconElement ? (
              <View style={styles.iconContainer}>
                {iconElement}
              </View>
            ) : null
          }
          <TextInput
            ref={r => onRef(r)}
            value={value}
            style={[{ flex: 1 }, inputStyle]}
            editable={editable}
            autoCorrect={autoCorrect}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            autoCapitalize={autoCapitalize}
            onBlur={this.onBlur.bind(this)}
            secureTextEntry={secureTextEntry}
            onChangeText={this.onChangeText.bind(this)}
            underlineColorAndroid='transparent'
            onSubmitEditing={onSubmitEditing}
            placeholder={label}
          />
        </View>
        { showError ? <Text style={errorTextStyle}>{finalErrorText}</Text> : null }
      </View>
    )
  }
}

RNTextInput.defaultProps = {
  validate: 'onBlur',
  autoCorrect: false,
  returnKeyType: 'go',
  autoCapitalize: 'none',
  keyboardType: 'default',
  label: 'Placeholder text',
  errorTextStyle: styles.errorText,
  editableTextStyle: styles.editableText,
  readOnlyTextStyle: styles.readOnlyText,
  borderBottomColor: Colors.panther
}

RNTextInput.propTypes = {
  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  validate: PropTypes.oneOf(['onBlur', 'onChangeText'])
}

export default RNTextInput
