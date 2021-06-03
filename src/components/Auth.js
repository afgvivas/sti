import React, { useState, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


import YoutubePlayer from 'react-native-youtube-iframe';

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);


    const [playing, setPlaying] = useState(false);

    const changeForm = () => {
        console.warn(isLogin);
        setIsLogin(!isLogin);
    }

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <View style={styles.view}>

            <YoutubePlayer
                height={400}
                width={400}
                play={playing}
                videoId={"X-RoXqCoHK0"}
            />

            <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />


            <Image style={styles.logo} source={require('../assets/logoV1.jpg')} />
            {isLogin ? (
                <LoginForm changeForm={changeForm} />
            ) : (
                <RegisterForm changeForm={changeForm} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        // backgroundColor: "black",
        flex: 1,
        alignItems: 'center',
    },

    logo: {
        width: '50%',
        height: '20%',
        marginTop: 50,
        marginBottom: 50,
        opacity: 0.5,
    }
})