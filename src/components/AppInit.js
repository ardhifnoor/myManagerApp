import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'

import { alreadyLogin, notLoginYet } from '../actions'
import Main from './Main'

class AppInit extends Component {
    UNSAFE_componentWillMount(){
    
        // Your web app's Firebase configuration
        const config = {
          apiKey: 'AIzaSyBb5GrBawbaiYMwj5PfWMjt4WxyzTegNiY',
          authDomain: 'mymanagerapp-f9fc4.firebaseapp.com',
          databaseURL: 'https://mymanagerapp-f9fc4.firebaseio.com',
          projectId: 'mymanagerapp-f9fc4',
          storageBucket: 'mymanagerapp-f9fc4.appspot.com',
          messagingSenderId: '650910919976',
          appId: '1:650910919976:web:02c267580ebda913b3f41d'
        };
        
        // Initialize Firebase
        if(!firebase.apps.length){
          firebase.initializeApp(config);
        }

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.props.alreadyLogin(user)
            } else {
                this.props.notLoginYet()
            }
        })
    }

    render(){
        return(
            <Main/>
        )
    }
}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit)