import {Icon} from '@rneui/themed';
import React, {memo} from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {mainColor, text} from '../constants/colors';

interface InputProps {
  label: string;
  placeholder: string;
  type?: KeyboardTypeOptions | undefined;
  secure?: boolean;
  value: string;
  setValue: (value: string) => void;
  autoCap?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  isPasswordShow: boolean;
  setIsPasswordShow: (isPasswordShow: boolean) => void;
  icon: string;
  errorMsg?: string;
  disable?: boolean;
}

const FieldInput = memo((props: InputProps) => {
  const {
    icon,
    label,
    placeholder,
    type,
    secure,
    value = 'default',
    setValue,
    autoCap = 'none',
    isPasswordShow,
    setIsPasswordShow,
    errorMsg,
    disable = true,
  } = props;

  const handleChangeInput = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setValue(event.nativeEvent.text);
  };

  return (
    <View>
      <Text style={{color: '#AEAEAE'}}>{label}</Text>
      <View style={{marginBottom: 10, paddingTop: 5}}>
        <View style={styles.inputSubContainer}>
          <Icon
            name={icon}
            size={22}
            color={!disable ? '#fff' : mainColor}
            style={{paddingRight: 5}}
          />

          <TextInput
            placeholderTextColor={'#fff'}
            selectionColor={'#fff'}
            style={{...styles.inputText, color: disable ? '#fff' : '#999'}}
            placeholder={placeholder}
            keyboardType={type}
            secureTextEntry={isPasswordShow}
            aria-label={label}
            value={value}
            autoCapitalize={autoCap}
            onChange={handleChangeInput}
            editable={disable}
          />
          {secure && (
            <Icon
              name={!isPasswordShow ? 'visibility' : 'visibility-off'}
              size={22}
              color={'#fff'}
              style={{marginRight: 10}}
              onPress={() => setIsPasswordShow(!isPasswordShow)}
            />
          )}
        </View>
        {errorMsg && <Text style={{color: 'red'}}>{errorMsg}</Text>}
      </View>
    </View>
  );
});

export default FieldInput;

const styles = StyleSheet.create({
  input: {
    borderColor: '#fff',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: text,
    minWidth: '45%',
    height: 50,
    padding: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    justifyContent: 'center',
    color: 'white',
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: '100%',
    width: '100%',
    color: '#fff',
    flex: 1,
  },
});
