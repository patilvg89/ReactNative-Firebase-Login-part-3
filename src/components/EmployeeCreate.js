import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from "./common";
import {connect} from 'react-redux';
import {employeeCreate, employeeUpdate} from "../actions";
import {Picker, Text} from "react-native";

class EmployeeCreate extends Component {
    onButtonPress() {
        const {name, phone, shift} = this.props

        this.props.employeeCreate({name, phone, shift: shift || 'Monday'})
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={"Name"}
                        placeholder={"Virendra"}
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label={"Phone"}
                        placeholder={"555-555-5555"}
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({prop: 'phone', value: text})}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        style={{flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({prop: 'shift', value})}>

                        <Picker.Item label="Sunday" value="Sunday"/>
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}> Create</Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
    }
};

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};

};

export default connect(mapStateToProps, {employeeCreate, employeeUpdate})(EmployeeCreate);