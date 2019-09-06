import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { gotoDashboard } from '../actions/loginAction';
import { Actions } from 'react-native-router-flux';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // userName: 'hruday@gmail.com',
            // password: 'hruday123'
            username: '',
            password: ''
        }
    }

    onChanngeUserName = userName => {
        this.setState({ userName: userName });
    }

    onChanngePassword = password => {
        this.setState({ password: password });
    }
    checkLogin = () => {
        Keyboard.dismiss();
        this.setState({ isLoading: true })
        if (this.state.userName == '' || this.state.password == '') {
            Toast.show('Enter UserName and Password.');
        }
        else {
            if (this.state.userName == 'hruday@gmail.com' && this.state.password == 'hruday123') {
                this.props.dispatch(gotoDashboard(this.state.userName, this.state.password));
                Actions.employeeList();
            }
            else {
                Toast.show('You have entered wrong userName or password.');
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput style={[styles.inputText, { marginTop: 40 }]}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(userName) => { this.onChanngeUserName(userName) }}
                        value={this.state.userName}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='User Name'
                        underlineColorAndroid="transparent"
                        lowercase={true}
                    />
                    <TextInput style={[styles.inputText, { marginTop: 20, marginBottom: 20 }]}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(password) => { this.onChanngePassword(password) }}
                        value={this.state.password}
                        keyboardType='default'
                        returnKeyType="next"
                        placeholder='Password'
                        secureTextEntry={true}
                        underlineColorAndroid="transparent"
                        lowercase={true}
                    />

                    <TouchableOpacity
                        onPress={() => this.checkLogin()}
                        style={styles.buttonContainer}>
                        <Text
                            style={styles.buttonText} >
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        //userList: state.loginReducer.userList
    }
}
function mapDispatchToProps(dispatch) {
    let actions = bindActionCreators({
        gotoDashboard
    });
    return { ...actions, dispatch }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputView: {
        width: '80%',
    },
    inputText: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#000',
        width: '100%',
        fontSize: 15,
        height: 40
    },
    //button styles
    buttonContainer: {
        borderRadius: 4,
        height: 40,
        backgroundColor: '#2078B2',
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'center',

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(login);