import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table, Row, Rows } from 'react-native-table-component';

class employeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ["Id", "Name", "Age", "Gender", "Email", "Ph No"],
            tableData: [],
            widhtArr: [30, 60, 40, 60, 80, 80]
        }
    }

    componentDidMount() {
        let arr = [];
        for (let i = 0; i < this.props.userList.length; i++) {
            let ar = this.props.userList[i];
            let br = [ar.id, ar.name, ar.age, ar.gender, ar.email, ar.phoneNo];
            arr.push(br);
        }
        this.setState({ tableData: arr });

    }
    render() {
        return (
            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row widthArr={this.state.widhtArr} data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                    <Rows widthArr={this.state.widhtArr} data={this.state.tableData} textStyle={styles.text} />
                </Table>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        userList:state.loginReducer.UserResponse
    }
}
function mapDispatchToProps(dispatch) {
    let actions = bindActionCreators({

    });
    return { ...actions, dispatch }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff', },
    text: { margin: 6, width: '100%' }
});

export default connect(mapStateToProps, mapDispatchToProps)(employeeList);