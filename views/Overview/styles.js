import { StyleSheet } from 'react-native';

const circleDiameter = 120;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 120,
    paddingRight: 150,
  },
  circle: {
    height: circleDiameter,
    width: circleDiameter,
    borderRadius: circleDiameter / 2,
    backgroundColor: 'lightgray',
    borderWidth: 2,
    borderColor: 'white',
  },
  title: {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: '600',
  },
  body: {
    fontSize: 14,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(240,240,240,0.7)',
    borderRadius: circleDiameter,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    fontSize: 50,
    color: '#333333',
  },
});

export default styles;
