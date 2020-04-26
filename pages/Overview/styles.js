import { StyleSheet } from 'react-native';

const circleDiameter = 120;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  circle: {
    height: circleDiameter,
    width: circleDiameter,
    borderRadius: circleDiameter / 2,
    backgroundColor: 'lightgray',
    borderWidth: 2,
    borderColor: 'white'
  },
  title: {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: '600'
  },
  body: {
    fontSize: 14,
  },
});

export default styles;