import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Header } from 'react-native-elements'
import _ from 'lodash'

import { getEmployeeList } from '../actions'
import EmployeeListItem from './EmployeeListItem'
import { CardSection } from './common'

class EmployeeList extends Component {
    static navigationOptions = {
        drawerLabel: 'Employee List'
    }

    UNSAFE_componentWillMount(){
        this.props.getEmployeeList()
    }
    
    renderRow = ({item}) => {
        return(
            <EmployeeListItem
                employee={item}
                navigation={this.props.navigation}
            />
        )
    }

    render(){
        console.log(this.props.employees)
        const DATA = this.props.employees
        return(
            <View>
                <Header
                    placement="left"
                    leftComponent={{
                        icon: 'menu',
                        color: '#fff',
                        onPress: () => this.props.navigation.toggleDrawer()
                    }}
                    centerComponent={{ text: 'Employee List', style: { color: '#fff' }}}
                />
                <FlatList
                    data={DATA}
                    renderItem={this.renderRow}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid}
    })
    return{employees}
}

export default connect(mapStateToProps, { getEmployeeList })(EmployeeList)