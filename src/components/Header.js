import React from 'react';
import {
    View,
    Text
} from 'react-native';

const Header = (props) => {

    const { textStyle, viewStyle } = styles

    return (
    <View style={viewStyle}>
            <Text style={textStyle}>{props.textHeader}</Text> 
    </View>
    )
}


const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems : 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shaddowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}

export default Header;