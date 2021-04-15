import React, {useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Auth(){
    const [isLogin, setIsLogin] = useState(true);

    const changeForm = () => {
        console.warn(isLogin);
        setIsLogin(!isLogin);
    }

    return(
        <View style={styles.view}>
            <Image style={styles.logo} source={require('../assets/logoV1.jpg')} />
            {isLogin ? (
                <LoginForm changeForm={changeForm}/>
            ) : (
                <RegisterForm changeForm={changeForm}/>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
    },

    logo: {
        width: '70%',
        height: '40%',
        marginTop: 50,
        marginBottom: 50,
        opacity: 0.5,
    }
})