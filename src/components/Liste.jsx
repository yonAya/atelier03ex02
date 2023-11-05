import { Component } from "react";

export class Liste extends Component{
    render(){
        return <div>
            <h1>To do list</h1>
            <ul className="liste">
                {this.props.elements.map(e => (
                    <li key={e.id} className={e.completed && 'completed'}>{e.text}</li>
                ))}
            </ul>
    </div>
    }
}