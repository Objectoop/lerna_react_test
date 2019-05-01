import React , {Component} from 'react';


class KritRButton extends Component{


    handleClick(){
        alert('1234');
    }

    render(){
        return (
            <div>
                <h1 onClick={this.handleClick}>Hello K Button</h1>
            </div>
        );
    }
}

export default KritRButton;