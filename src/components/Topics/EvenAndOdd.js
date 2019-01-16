import React, {Component} from 'react';

export default class EvenAndOdd extends Component {

constructor() {
    super();

    this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ''
    }
}


handleChange(val){
    this.setState({userInput: val});
}

assignEvenAndOdds(input) {
    var arr = input.split(',');
    var evens =[];
    var odds = [];

    for (var i=0;i<arr.length; i++){
        if (arr[i]%2 ===0) {
            evens.push(+(arr[i],10));
        } else {
            odds.push(+(arr[i],10))
        }
    }

    this.setState({evenArray: evens, oddArray: odds});
}


//dynamic changed values typically indicate using this.state if values will be needed elsewhere
//value typed in inputs => this.handlechange => this.setstate({userinout: val}) values now in state and triggers re render of screen, 
//doesnt look any different, piece of data is userinput which is not referenced in either results box.

//now click button => this causes onclick function which then calls this.assignevenandodds, value is userinput, which was just store above in the inputline. Info saves to state, then info is passed to button function, the button function is assigedevenandodss, which sets state again, changing the state causes re render of state,

// this.state is pulling from state,
// this.setstate is updating state

    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4> Evens and Odds </h4>

                <input className = 'inputLine' onChange={(e)=> this.handleChange(e.target.value)}></input>

                <button className = 'confirmationButton'onClick={()=>{this.assignEvenAndOdds(this.state.userInput)}}> Split </button>

                <span className = 'resultsBox'> Evens:{JSON.stringify(this.state.evenArray)}</span>

                <span className = 'resultsBox'> Odds:{JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}


