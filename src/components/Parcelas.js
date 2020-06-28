import React from 'react'
import Parcela from './Parcela'

export default function Parcelas(data) {
    const { data: dataParcelas } = data;
    if (dataParcelas.length <= 0)
        return (<h1>Aguardando...</h1>)
    else {
        return (
            <div style={styles.divPrincipal}>
                {dataParcelas.map((item) => {
                    return (
                      <Parcela data={item} key={item.numberPart} />
                    );
                })}
            </div>
        )
    }
}

const styles = {
    divPrincipal: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: '10px'
    },
};

