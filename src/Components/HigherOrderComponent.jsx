import React, {Component} from 'react';

export default function HigherOrderComponent(HigherOrderComponent, data){
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }
        
        render(){
            return (
                <HigherOrderComponent data={this.state.data} {...this.props} />
            );
        }
    } 
}