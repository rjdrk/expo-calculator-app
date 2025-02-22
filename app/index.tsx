import { View, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles';
import ThemeText from '../components/ThemeText';
import CalculatorButton from '../components/CalculatorButton';
import { Colors } from '@/constants/Colors';
import { useCalculator } from '@/hooks/useCalculator';

const CalculatorApp = () => {
    const {
        formula,
        prevNumber,
        buildNumber,
        clean,
        toogleSign,
        deleteLast,
        divideOperation,
        multiplyOperation,
        substractOperation,
        addOperation,
        calculateResult,
    } = useCalculator();
    return (
        <View style={globalStyles.calculatorContainer}>
            <View style={style.container}>
                <ThemeText variant='h1'>
                    {formula}
                </ThemeText>
                <ThemeText variant='h2'>
                    {
                        formula === prevNumber ? (
                            <ThemeText variant='h2'> </ThemeText>
                        ) : (
                            <ThemeText variant='h2'>{prevNumber}</ThemeText>
                        )
                    }
                </ThemeText>
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton
                    label='C'
                    blackText
                    color={Colors.lightGray}
                    onPress={clean}
                />
                <CalculatorButton
                    label='+/-'
                    blackText
                    color={Colors.lightGray}
                    onPress={toogleSign}
                />
                <CalculatorButton
                    label='del'
                    blackText
                    color={Colors.lightGray}
                    onPress={deleteLast}
                />
                <CalculatorButton
                    label='÷'
                    color={Colors.orange}
                    onPress={divideOperation}
                />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton
                    label='7'
                    color={Colors.darkGray}
                    onPress={() => buildNumber('7')}
                />
                <CalculatorButton
                    label='8'
                    color={Colors.darkGray}
                    onPress={() => buildNumber('8')}
                />
                <CalculatorButton
                    label='9'
                    color={Colors.darkGray}
                    onPress={() => buildNumber('9')}
                />
                <CalculatorButton
                    label='X'
                    color={Colors.orange}
                    onPress={multiplyOperation}
                />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton
                    label='4'
                    color={Colors.darkGray}
                    onPress={() => buildNumber('4')}
                />
                <CalculatorButton
                    label='5'
                    color={Colors.darkGray}
                    onPress={() => buildNumber('5')}
                />
                <CalculatorButton
                    label='6'
                    color={Colors.darkGray}
                    onPress={() => buildNumber('6')}
                />
                <CalculatorButton
                    label='-'
                    color={Colors.orange}
                    onPress={substractOperation}
                />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton
                    label='1'
                    color={Colors.darkGray}
                    onPress={() => buildNumber('1')}
                />
                <CalculatorButton
                    label='2'
                    color={Colors.darkGray}
                    onPress={() => buildNumber('2')}
                />
                <CalculatorButton
                    label='3'
                    color={Colors.darkGray}
                    onPress={() => buildNumber('3')}
                />
                <CalculatorButton
                    label='+'
                    color={Colors.orange}
                    onPress={addOperation}
                />
            </View>
            <View style={globalStyles.row}>
                <CalculatorButton
                    label='0'
                    color={Colors.darkGray}
                    doubleSize
                    onPress={() => buildNumber('0')}
                />
                <CalculatorButton
                    label='.'
                    color={Colors.darkGray}
                    onPress={() => buildNumber('.')}
                />

                <CalculatorButton
                    label='='
                    color={Colors.orange}
                    onPress={calculateResult}
                />
            </View>
        </View>
    )
}

export default CalculatorApp;

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingBottom: 20
    }
})
