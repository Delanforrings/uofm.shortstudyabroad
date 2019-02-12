import React from 'react';
import { Fetch } from 'react-request';

const InitialState = {
    France_Sport_Price: 0
}

class CurrencyConverter extends React.Component {
    constructor (props){
        super(props);
        this.rates=[];
        this.France_Sport_Price = localStorage.getItem("appState") ? JSON.parse(localStorage.getItem("appState")) : InitialState;
    }
    componentWillUnmount() {
        // Remember state for the next mount
        localStorage.setItem('appState', JSON.stringify(this.state));
    }
    render() {
        return (
            <Fetch
                url="https://api.exchangeratesapi.io/latest?base=USD"
            >
                {({ fetching, failed, data }) => {
                    if (fetching) {
                        console.log("Loading data...");
                    }

                    if (failed) {
                        console.log("Load failed");
                    }

                    if (data) {
                        return (
                            this.France_Sport_Price=parseInt(data.rates.AUD*4000)
                        );
                    }

                    return null;
                }}
            </Fetch>
        )
    }
}

export default CurrencyConverter;
