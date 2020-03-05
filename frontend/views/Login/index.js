import React, { useState, useContext } from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import { TextInput } from 'react-native-paper'
import axios from 'axios'
import { Formik } from 'formik'

const Login = () => {
    return (
        <SafeAreaView>
            <Formik>
                <Text>oi</Text>
            </Formik>
        </SafeAreaView>
    )
}

/*

<TextInput label='Username' mode='outlined' onChangeText={(name) => setUsername(name)}/>
Home.navigationOptions = ({ navigation }) => ({
    title: t('home'),
    headerStyle: {
        backgroundColor: colors.primary,
    },
    headerTitleStyle: {
        color: 'white'
    },
    headerLeft: <Icon
        onPress={() => navigation.toggleDrawer()}
        style={{ paddingLeft: 10 }}
        size={26}
        color="white"
        name="bars"
    />
})

 const getEmail = () => {
        axios
            .get(`http://localhost:3333/getoneuser/${username}`)
            .then(res => {
                //setEndereco(res.data.email)
            })
    }
*/

export default Login
