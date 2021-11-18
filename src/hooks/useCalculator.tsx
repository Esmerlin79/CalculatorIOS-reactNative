import { useRef, useState } from 'react'


enum Operators {
    sum, subtract, multiply, divide
}

const useCalculator = () => {
    
    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0');
    
    const lastOperation = useRef<Operators>();

    const clear = () => {
        setNumber('0');
        setPreviousNumber('');
    }

    const buildText = ( value: string ) => {
        if( value === '.' && number.includes('.')) return;
        if( value === '0' && number === '-0') return;
        setNumber( number !== '0' || value === '.' ? number + value : value );
    }

    const assignSigns = () => {
        number.includes('-') ? setNumber( number.replace('-', '') ) : setNumber( '-' + number );
    }

    const deleteNumber = () => {
        setNumber( number.slice( 0, -1) );
        if(number.length === 1 || ( number.includes('-') && number.length === 2)) setNumber('0');
    }

    const changeNumberToPrevious = () => {
        if( lastOperation.current === Operators.divide && number === '0' ) return;
        number.endsWith('.') ? setPreviousNumber( number.slice(0, -1) ) : setPreviousNumber( number );
        setNumber('0');
    }

    const btnDivide = () => {
        lastOperation.current = Operators.divide;
        changeNumberToPrevious();
    }

    const btnMultiply = () => {
        changeNumberToPrevious();
        lastOperation.current = Operators.multiply;
    }

    const btnSubtract = () => {
        changeNumberToPrevious();
        lastOperation.current = Operators.subtract;
    }

    const btnSum = () => {
        changeNumberToPrevious();
        lastOperation.current = Operators.sum;
    }

    const calculate = () => {
        const num1 = Number( number );
        const num2 = Number( previousNumber );

        switch( lastOperation.current ) {
            case Operators.divide: 
                if( number === '0' ) return;
                setNumber(`${num2 / num1}` );
                break;

            case Operators.multiply:
                setNumber(`${num2 * num1}`);
                break;

            case Operators.subtract:
                 setNumber(`${num2 - num1}`);
                 break;

            case Operators.sum:
                setNumber(`${num2 + num1}`);
                break;
        }
        setPreviousNumber('');
    }



    return {
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
    }

}

export default useCalculator;
