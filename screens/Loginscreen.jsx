import { StyleSheet, Image, Text, StatusBar, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useFonts } from 'expo-font';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

const Loginscreen = () => {
    const [secureEntry, setSecureEntry] = useState(true);
    const navigation = useNavigation();
    const handleGoback = () => {
        navigation.goBack();
    };
    const handleSignup = () => {
        navigation.navigate('Signup');
    };
    const [loaded] = useFonts({
        Poppinslight: require('../assets/fonts/Poppins-Light.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoback}>
                <FontAwesome6 name={"arrow-left"} color="red" size={25} />
            </TouchableOpacity>
            <View style={styles.textcontainer}>
                <Text style={styles.headingtext}>Hey,</Text>
                <Text style={styles.headingtext}>Welcome</Text>
                <Text style={styles.headingtext}>Back</Text>
            </View>
            <View style={styles.formcontainer}>
                <View style={styles.inputcontainer}>
                    <Fontisto name={"email"} size={30} color={'red'} />
                    <TextInput style={styles.textInput} placeholder='Enter your email' placeholderTextColor={'red'}
                        keyboardType='email-address'
                    />
                </View>
                <View style={styles.inputcontainer}>
                    <Ionicons name={"lock-closed-outline"} size={30} color={'red'} />
                    <TextInput style={styles.textInput} placeholder='Enter your password' placeholderTextColor={'red'}
                        secureTextEntry={secureEntry}
                    />
                    <TouchableOpacity onPress={() => {
                        setSecureEntry((prev) => !prev);
                    }}>
                        <Ionicons name={"eye-outline"} size={20} color={'red'} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotpsswrd}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButtonWrapper}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.continue}>or continue with</Text>
                <TouchableOpacity style={styles.googleButtonContainer}>
                    <Image source={require("../assets/images/google-color-icon.png")} style={styles.googleImage} />
                    <Text style={styles.googleText}>Google</Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.accountText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={handleSignup}>
                        <Text style={styles.signupText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Loginscreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: StatusBar.currentHeight,
        padding: 10
    },
    backButtonWrapper: {
        height: 40,
        width: 40,
        backgroundColor: '#D9D9D9',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textcontainer: {
        marginVertical: 20,
    },
    headingtext: {
        fontSize: 32,
        color: '#1287A5',
        fontFamily: 'Poppins',
    },
    formcontainer: {
        marginTop: 20,
    },
    inputcontainer: {
        borderWidth: 1,
        borderColor: '#252f40',
        borderRadius: 100,
        paddingHorizontal: 20,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginVertical: 15,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: 10,
        fontFamily: 'Poppinslight',
    },
    forgotpsswrd: {
        textAlign: 'right',
        color: 'red',
        fontFamily: 'Poppins',
    },
    loginButtonWrapper: {
        backgroundColor: 'red',
        borderRadius: 80,
        marginTop: 20,
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 17,
        fontFamily: 'Poppins',
        textAlign: 'center',
        padding: 10,
    },
    continue: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 13,
        fontFamily: 'Poppins',
        color: '#1287A5',
    },
    googleImage: {
        height: 25,
        width: 25,
    },
    googleButtonContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        gap: 10,
    },
    googleText: {
        fontSize: 17,
        fontFamily: 'Poppins',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        gap: 2,
    },
    accountText: {
        color: "#1287A5",
        fontFamily: 'Poppins',
    },
    signupText: {
        color: '#1287A5',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
    },
});
