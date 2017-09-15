# react-native-inputs

React native inputs for real world apps. Easy to setup, configure and use. 

[![Screenshot](https://s26.postimg.org/961r3xvmx/Simulator_Screen_Shot_15_Sep_2017_10.17.31_PM.png)](https://postimg.org/image/iqldqtkyt/)

## Installation

  ```
  npm install react-native-inputs --save
  ```
  or
  ```
  yarn add react-native-inputs
  ```

## Usage

```
import { TextInput, PasswordInput } from 'react-native-inputs'
```

### TextInput

```
<TextInput
  onRef={r => { this.email = r }}
  value={email}
  editable={!this.props.fetching}
  valid={isEmail(email)}
  label='Email address'
  returnKeyType='next'
  borderBottomColor='#F70044'
  iconElement={<Icon size={20} name='at-sign' style={{ color: '#F70044'}} />}
  onChangeText={text => this.handleChange(text)}
  onSubmitEditing={() => this.password.focus()}
/>
```

#### TextInput props

| Props             | Default values           | Possible values                                                                                    |
| ----------------- | ------------------------ | -------------------------------------------------------------------------------------------------- |
| label             | ''                       | **any string**                                                                                     |
| value             |                          | **any string**                                                                                     |
| borderBottomColor |                          | **any string**                                                                                     |
| valid             | false                    | Boolean                                                                                            |
| editable          | false                    | Boolean                                                                                            |
| iconElement       | **none**                 | Icon element e.g [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) |
| errorText         | `${label} is not valid.` | **any string**                                                                                     |
| autoCorrect       | false                    | Boolean                                                                                            |
| autoCapitalize    | false                    | Boolean                                                                                            |
| secureTextEntry   | false                    | Boolean                                                                                            |
| keyboardType      | default                  | **keyboard types supported by RN**                                                                 |
| returnKeyType     | go                       | **returnKeyTypes supported by RN**                                                                 |
| errorTextStyle    |                          | **style objects**                                                                                  |
| editableTextStyle |                          | **style objects**                                                                                  |
| readOnlyTextStyle |                          | **style objects**                                                                                  |
| onRef             | **none**                 | function                                                                                           |
| onSubmitEditing   | **none**                 | function                                                                                           |


### PasswordInput

```
<PasswordInput
  value={password}
  valid={!!password}
  editable={!this.props.fetching}
  onRef={r => { this.password = r }}
  togglePasswordControlColor='#F70044'
  borderBottomColor='#F70044'
  onChangeText={text => this.handleChange(text)}
  onSubmitEditing={() => null}
/>
```

#### PasswordInput props

* All of the props for TextInput except label

| Props                      | Default values | Possible values             |
| -------------------------- | -------------- | --------------------------- |
| confirm                    | false          | Boolean                     |
| togglePasswordControlColor | **none**       | Color string (hex or rbg/a) |