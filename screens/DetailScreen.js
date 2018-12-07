//Inside this component, render an image using the URI https://picsum.photos/400/600/?random. 
//Make sure the image is 200 wide, 300 high, horizontally centered and spaced vertically
// from the headerbar by a margin of 10.

import React, { Component } from 'react';
import { StyleSheet, Image, View, Text} from 'react-native';

class ImageScreen extends Component {
	constructor(props) {
    	super(props);
  	}

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('name'),
    });


    render() {

        const heShe    = this.props.navigation.getParam('gender') === "male" ? "He" : "She";
        const id       = this.props.navigation.getParam('id');
        const name     = this.props.navigation.getParam('name');
        const gender   = this.props.navigation.getParam('gender');
        const company  = this.props.navigation.getParam('company');
        const email    = this.props.navigation.getParam('email');
        const address  = this.props.navigation.getParam('address');
        const picture  = this.props.navigation.getParam('picture');
        const filmName = this.props.navigation.getParam('filmName');
        const filmUrl  = this.props.navigation.getParam('filmUrl');

        const hisHer     = heShe === "He" ? "His" : "Her";
        const maleFemale = heShe === "He" ? "Male" : "Female";

        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: picture}} />
                </View>
                <Text style={styles.text}>{`${name} is a ${maleFemale}`}</Text>
                <Text style={styles.text}>{`${heShe} lives at ${address}`}</Text>
                <Text style={styles.text}>{`${heShe} works at ${company}`}</Text>
                <Text style={styles.text}>{`${hisHer} favourite film is ${filmName}`}</Text>
            </View>
        );
    }
};

export default ImageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight:20,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 200,
        width: 200,
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'flex-start',
    },
});