import Counter from "./counter"
import React, { Component } from "react";

class Counters extends Component {
    constructor(props) {
        super(props);
        this.state = { counter:[
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:1},
            {id:4,value:0},
            {id:5,value:6},
        ] };
    }


    handleReset=()=>{
        const counter = this.state.counter.map(c=>{
            c.value = 0;
            return c;
        })
        this.setState({counter})
    }


    handleIncrement = (counterId)=>{
        const counter = this.state.counter.map(counter=>{
            if(counter.id == counterId){
                counter.value += 1;
            }
            return counter;
        })
        this.setState({counter})
    }


    handleDelete=(counterId)=>{
        const counter = this.state.counter.filter(c=> c.id !== counterId);
        this.setState({counter : counter})
    }

    render() {
        return (
            <div class="column">
                <button
          onClick={this.handleReset}
          className="btn btn-info btn-sm m-2"
        >
          Reset
        </button>
                <ul>
            {this.state.counter.map(counter => (
                <li key={counter.id}><Counter counter={counter} onDelete={this.handleDelete} onIncrement={this.handleIncrement}/></li>
            ))}
            </ul>
            </div>
        );
    }
}

export default Counters;