import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

const SearchBar = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.inputContainer}>
                <Icon
                    source={'magnify'}
                    color='black'
                    size={28}
                />
                <TextInput
                    style={[styles.input, styles.boxShadow]}
                    placeholder="Search for food"
                    cursorColor={'gray'}
                />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Settings')}
            >
                <View style={styles.navBtn}>
                    <Icon
                        source={'tune'}
                        size={28}
                        color='white'
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar

const styles = StyleSheet.create({
    boxShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.6,
        shadowRadius: 5,
    },
    inputContainer: {
        marginBottom: 1.5,
        width: '75%',
        margin: 20,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#BEBEBE',           
        alignItems: 'center',
        paddingHorizontal: 15
    },
    input: {
        flex: 1,
        fontSize: 18,
        marginLeft: 10
    },
    navBtn: {
        marginTop: -53,
        width: 50,
        height: 50,
        marginLeft: 325,
        backgroundColor: '#f77f00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
});