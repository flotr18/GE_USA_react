import './App.css';
import React from 'react';

import {states} from "./state";






export default class Hello extends React.Component {
    ID  = {
        name : 'az',
    }

    DEL = {
        number : states[42].number,
        dem : [],
        rep : []
    }









    state = {
        call : 'Too Close to Call !',
        color : '#999999',


    }
    result = () => {


        if (this.state.call === 'Too Close to Call !'){
            this.setState({
                call : 'Rep',
                color : '#d22532'
            })
            this.DEL.rep.push(this.DEL.number);
            this.DEL.dem.pop();


            console.log('Trump won ' + this.DEL.rep.reduce(function (a,b) {
                return a + b

            },0) + ' delegates')

        }

        else if (this.state.call === 'Rep'){
            this.setState({
                call : 'Dem',
                color : '#244999'
            })
            this.DEL.dem.push(this.DEL.number);
            this.DEL.rep.pop();

            console.log('Biden won ' + this.DEL.dem.reduce(function (a,b) {
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
                {states.map((usa, index) =>
                    <div key={usa.text + index}  className={this.ID.name} id={usa.text} onClick={this.result} style={{backgroundColor: this.state.color}}>
                        <p className={"NAME"}>{usa.value} {usa.number}</p>
                    </div>
                )

                }
            </div>




        )
    }


}

