// Inside StartScreen:
// Render a TouchableHighlight button in the centre of the screen. 
// It should be 200 wide and 50 high, and have a border radius of 8, 
// with a background colour of #388E3C.
// Inside the button, render a text label 'View Image' - this should be bold, 
// white, of size 18 and centered in the button

import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text, View, FlatList } from 'react-native';
import contacts from '../assets/contacts.json';

class StartScreen extends Component {
	constructor(props) {
    	super(props);
    	this.onPress = this.onPress.bind(this);
        this.renderItem = this.renderItem.bind(this);
  	}

    static navigationOptions = {
        title: 'Contacts',
    }



    // onPress({id, name, gender, company, email, address, picture, filmName, filmUrl}) {
    onPress({item}) {        
        this.props.navigation.navigate('Detail', {
            id:      item.id,
            name:    item.name,
            gender:  item.gender,
            company: item.company,
            email:   item.email,
            address: item.address,
            picture: item.picture,
            filmName:item.filmName,
            filmUrl: item.filmUrl,
        });
    }


    renderItem({item}) {
        return  <TouchableHighlight style={styles.touchable}
                                    backgroundColor='#fff'
                                    underlayColor="#e4e4e4" 
                                    onPress={()=>this.onPress({item})}>
                    <React.Fragment>
                        <Text style={styles.textName}>{item.name}</Text>
                        <Text style={styles.textCompany}>{item.company}</Text>
                    </React.Fragment>
                </TouchableHighlight>

    }

    keyExtractor(item, index) {
        return `${index}`;  // must return a string here.
    }

    renderSeparator() {
        const style = { height: 1, backgroundColor: '#777', marginLeft: 10 };
        return <View style={style} />;
    }

    render() {
        const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
        return <FlatList data={contacts} 
                         renderItem={this.renderItem} 
                         keyExtractor={this.keyExtractor} 
                         ItemSeparatorComponent={this.renderSeparator}
                />;
    }

};
