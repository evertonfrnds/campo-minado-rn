import React from 'react'
import { StyleSheet, View } from 'react-native'
import params from '../params'

export default props => {
    const stylesField = [styles.field]
    if(stylesField.length == 1) stylesField.push(styles.regular)

    return (
        <View style={stylesField}>

        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        width: params.blockSize,
        height: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderBottomColor: '#333',
        borderRightColor: '#333',
    }
})