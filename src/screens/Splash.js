import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { COLORS, images } from '../constants';


const Splash = ({ navigation }) => {
    const [hasAnimationPlayedOnce, setHasAnimationPlayedOnce] = React.useState(false)
    const handleSignIn = () => {
        navigation.navigate('Onboarding');
    };


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton={5000}
                    source={images.logoprin}
                    style={styles.logo}
                    resizeMode="stretch"
                />
                <Text style={styles.title}>Eydon Petroleum</Text>
            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: COLORS.primary
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[styles.title, {
                    color: COLORS.white
                }]}>Find the best station in your locality!</Text>
                <Text style={styles.text}>Discover Our Services</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={handleSignIn}>
                        <View
                            style={[styles.signIn, {
                                backgroundColor: COLORS.tertiary,
                                borderRadius: 50,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }]}
                        >
                            <Text style={styles.textSign}>Discover</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

  export default Splash;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: COLORS.primary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: COLORS.tertiary,
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: COLORS.secondary,
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});
