import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ReactNode, useEffect, useState } from 'react';
import { MainLogo, SosLogo } from '../../assets/images';

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  const [keyboardShown, setKeyboardShown] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardShown(true),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardShown(false),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.outerContainer}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.logo}>
          <Image source={MainLogo} resizeMode='contain' />
        </View>

        {children}
      </KeyboardAvoidingView>
      {!keyboardShown && (
        <View style={styles.developedBy}>
          <Text style={styles.developedByText}>Desarrollado por</Text>
          <Image source={SosLogo} resizeMode='contain' />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#25292E',
  },
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    paddingHorizontal: 24,
    backgroundColor: '#25292E',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  developedBy: {
    position: 'absolute',
    bottom: 16,
    right: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  developedByText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});
