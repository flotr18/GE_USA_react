import './App.css';
import React from 'react';

import {states} from "./state";



export default class Hello extends React.Component {
    ID  = {
        name : 'az',
    }

    DEL = {
        biden : [],
        trump : []
    }



    state = {
        call : 'Too Close to Call !',
        color : '#999999',


    }
    increment = () => {


        if (this.state.call === 'Too Close to Call !'){
            this.setState({
                call : 'Rep',
                color : '#F91104'
            })
            this.DEL.trump.push(this.state.number);
            this.DEL.biden.pop();


            console.log('Trump won ' + this.DEL.trump.reduce(function (a,b) {
                return a + b

            },0) + ' delegates')

        }

        else if (this.state.call === 'Rep'){
            this.setState({
                call : 'Dem',
                color : '#0000FF'
            })
            this.DEL.biden.push(this.state.number);
            this.DEL.trump.pop();

            console.log('Biden won ' + this.DEL.biden.reduce(function (a,b) {
                return a + b

            },0) + ' delegates')

        }

        else {
            this.setState({
                call : 'Too Close to Call !',
                color : '#999999'
            })
            console.log('Too Close to Call !')

        }
    }


    render() {


        return(

            <div>
                {states.map(title => (
                    <div key={title} className={this.ID.name} onClick={this.increment} style={{backgroundColor: this.state.color}}>
                        <p className={"NAME"}>{title}</p>
                    </div>
                ))}
            </div>


        )
    }


}





