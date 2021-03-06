import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import TouchableScale from 'react-native-touchable-scale'
import { CheckBox, Icon } from 'react-native-elements'

import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    todoStyles: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingTop: 10,
        margin: 5,
        borderRadius: 5,
    },
    todoTextStyles: {
        paddingStart: 10,
        paddingEnd: 10,
        maxWidth: '70%'
    },
    todoButtonStyle: {
        flexDirection: 'row',
        paddingRight: 5,
    },
});

const Todo = props => {
    return (
        <View style={[props.todoStyle, styles.todoStyles]}>
            <CheckBox
                Component={TouchableScale}
                friction={90}
                tension={100}
                activeScale={1.5}
                onPress={props.onSwitch}
                checked={props.todo.checked}
            />
            <Text textBreakStrategy={"balanced"} style={[props.todoTextStyle, styles.todoTextStyles]}>
                {props.todo.text}
            </Text>
            <View style={styles.todoButtonStyle}>
               <Icon
                    Component={TouchableScale}
                    friction={90}
                    tension={100}
                    activeScale={1.5}
                    name={'edit'}
                    type={'material'}
                    color={'#cccccc'}
                    onPress={props.onEdit}
               />
               <Icon
                    Component={TouchableScale}
                    friction={90}
                    tension={100}
                    activeScale={1.5}
                    name='delete'
                    type='material'
                    color={'#cccccc'}
                    onPress={props.onDelete}
               />
            </View>
        </View>
    )
};
Todo.propTypes = {
    todo: PropTypes.shape({
        text: PropTypes.string.isRequired,
        checked: PropTypes.bool,
    }),
    todoStyle: PropTypes.object.isRequired,
    todoTextStyle: PropTypes.object.isRequired,
    onSwitch: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default Todo