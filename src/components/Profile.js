import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header } from 'react-native-elements'
import { connect } from 'react-redux'

import { Card, CardSection, Button } from './common'
import { logoutUser } from '../actions'

class Profile extends Component {
    static navigationOptions = {
        drawerLabel: 'Profile'
    }

    state = {
        email: ''
    }

    UNSAFE_componentWillMount(){
        if(this.props.user){
            this.setState({email: this.props.user.email})
        }
    }

    logOut = () => {
        this.props.logoutUser()
        this.props.screenProps.rootNavigation.navigate('Login')
    }

    render(){
        return(
            <View>
                <Header
                    placement="left"
                    leftComponent={{
                        icon: 'menu',
                        color: '#fff',
                        onPress: () => this.props.navigation.toggleDrawer()
                    }}
                    centerComponent={{ text: 'Employee Profile', style: { color: '#fff' }}}
                    rightComponent={{
                        icon: 'home',
                        color: '#fff',
                        onPress: () => this.props.navigation.navigate('EmployeeList')
                    }}
                />
                <Card>
                    <CardSection>
                        <Text>Email: {this.state.email}</Text>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.logOut}>Logout</Button>
                    </CardSection>
                </Card>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { user } = state.auth
    return { user }
}

export default connect(mapStateToProps, {logoutUser})(Profile)