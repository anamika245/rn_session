import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, AppState, View, PixelRatio} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {activateSession, deactivateSession} from '../store/action/session';

const Home = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const session = useSelector(state => state.session);
  const dispatch = useDispatch();
  const appState = useRef(AppState.currentState);
  const backgroundTimestamp = useRef();

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        (appState.current === 'inactive' ||
          appState.current === 'background') &&
        nextAppState === 'active'
      ) {
        const currentTimestamp = Date.now();
        if (
          backgroundTimestamp?.current &&
          currentTimestamp - backgroundTimestamp.current > 1000 * 10 * 60
        ) {
          dispatch(deactivateSession());
          setIsToggleOn(false);
        }
        backgroundTimestamp.current = null;
      } else if (
        appState.current === 'active' &&
        (nextAppState === 'inactive' || nextAppState === 'background')
      ) {
        backgroundTimestamp.current = Date.now();
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const handleToggleSessionStatus = () => {
    if (isToggleOn) {
      dispatch(deactivateSession());
    } else {
      dispatch(activateSession());
    }
    setIsToggleOn(!isToggleOn);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Session status: {session?.isSessionActive ? 'Active' : 'Inactive'}
      </Text>
      <View style={styles.toggleSwitchStyle}>
        <ToggleSwitch
          isOn={isToggleOn}
          onColor="green"
          offColor="grey"
          label="Change session status"
          labelStyle={{
            color: 'black',
            fontWeight: '900',
            textAlign: 'center',
            fontSize: 20,
          }}
          size="large"
          onToggle={handleToggleSessionStatus}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: PixelRatio.roundToNearestPixel(30),
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
  },
  toggleSwitchStyle: {
    display: 'flex',
    justifyContent: 'center',
  },
});
export default Home;
