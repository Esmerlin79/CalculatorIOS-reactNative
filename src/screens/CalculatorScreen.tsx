import React from 'react'
import { Text, View } from 'react-native'
import BotonCalc from '../components/BotonCalc'
import useCalculator from '../hooks/useCalculator'
import { styles } from '../theme/appTheme'

const CalculatorScreen = () => {

    const {
        number,
        previousNumber,
        clear,
        buildText,
        assignSigns,
        deleteNumber,
        btnDivide,
        btnMultiply,
        btnSubtract,
        btnSum,
        calculate
    } = useCalculator();

    return (
        <View style={ styles.containerCalculator }>
            <Text style={styles.smallResult }>{ previousNumber }</Text>
            <Text 
                style={styles.result }
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >{ number }</Text>

            <View style={ styles.row }>
                <BotonCalc text="C"  color="#9B9B9B" action={ clear }/>
                <BotonCalc text="+/-"  color="#9B9B9B" action={ assignSigns }/>
                <BotonCalc text="del" color="#9B9B9B" action={ deleteNumber }/>
                <BotonCalc text="/" color="#FF9427" action={ btnDivide }/>
            </View>

            <View style={ styles.row }>
                <BotonCalc text="7"  action={ buildText }/>
                <BotonCalc text="8"  action={ buildText }/>
                <BotonCalc text="9" action={ buildText }/>
                <BotonCalc text="x" color="#FF9427" action={ btnMultiply }/>
            </View>

            <View style={ styles.row }>
                <BotonCalc text="4"  action={ buildText }/>
                <BotonCalc text="5"  action={ buildText }/>
                <BotonCalc text="6" action={ buildText }/>
                <BotonCalc text="-" color="#FF9427" action={ btnSubtract }/>
            </View>

            <View style={ styles.row }>
                <BotonCalc text="1"  action={ buildText }/>
                <BotonCalc text="2" action={ buildText }/>
                <BotonCalc text="3" action={ buildText }/>
                <BotonCalc text="+" color="#FF9427" action={ btnSum }/>
            </View>

            <View style={ styles.row }>
                <BotonCalc text="0"  ancho action={ buildText }/>
                <BotonCalc text="."  action={ buildText }/>
                <BotonCalc text="=" color="#FF9427" action={ calculate }/>
            </View>
            
        </View>
    )
}

export default CalculatorScreen
