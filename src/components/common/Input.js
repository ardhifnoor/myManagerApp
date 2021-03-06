import React from 'react'
import { TextInput, View, Text } from 'react-native'

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        height: 35,
        width: 100,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

const { labelStyle, inputStyle, containerStyle } = styles

const Input = ({ label, placeholder, secureTextEntry, value, onChangeText }) => {
    return(
        <View style={ containerStyle }>
            <Text style={ labelStyle }>{ label }</Text>
            <TextInput 
                style={ inputStyle }
                secureTextEntry={ secureTextEntry }
                placeholder={ placeholder } 
                autoCorrect={ false }
                value={ value }
                onChangeText={ onChangeText }
            />
        </View>
    )
}

export { Input }