import React from 'react'
import * as format from '../helpers/format-helpers.js'

export default function Parcela(data) {
    const { numberPart, value, valueDif, percent } = data.data;
    return (
        <div style={styles.divItem}>
            <div style={{ fontWeight: 'bold' }}>
                {numberPart}
            </div>
            <div style={{ ...styles.divInterna, ...isNegative(valueDif) }}>
                <div>{format.formatNumberRS(value)}</div>
                <div>{format.formatNumberRSPosNeg(valueDif)}</div>
                <div style={stylePercent(percent)}>{format.formatNumberPosNegPercent(percent)}</div>
            </div>
        </div>
    )
}

const isNegative = (value) => {
    return Math.sign(parseInt(value)) === -1 ? styles.negative : styles.colorDefault;
}

const stylePercent = (value) => {
    return Math.sign(parseInt(value)) === -1 ? styles.percentNegative : styles.percentDefault;
}

const styles = {
    divItem: {
        border: '1px solid lightgray',
        borderRadius: '8px',
        padding: '5px',
        margin: '5px',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        width: "140px",
        fontSize: "0.9rem"
    },

    divInterna: {
        display: 'flex',
        flexDirection: 'column',
        margin: '5px',
    },

    negative: {
        color: 'red',
        fontWeight: 'bold'
    },
    colorDefault: {
        color: 'green',
        fontWeight: 'bold'
    },
    percentNegative: {
        color: '#f37121',
        fontWeight: 'normal'
    },
    percentDefault: {
        color: 'blue',
        fontWeight: 'normal'
    }
};
