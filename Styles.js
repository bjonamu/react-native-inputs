import { StyleSheet } from 'react-native'
import { Colors, Metrics } from './Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: Metrics.baseMargin
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1
  },
  iconContainer: {
    paddingHorizontal: Metrics.baseMargin
  },
  editableText: {
    height: Metrics.sizes.normal,
    color: Colors.coal
  },
  readOnlyText: {
    height: Metrics.sizes.normal,
    color: Colors.steel
  },
  errorText: {
    color: Colors.error,
    fontSize: Metrics.text.tiny
  }
})
