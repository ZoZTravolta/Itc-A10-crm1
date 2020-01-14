import React from 'react';
import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 42,
    }
  }

  handleClick() {

    // this.setState(prevState => { return { counter: ++prevState.counter } })
    let prevState = this.state.counter
    this.setState({ counter: prevState + 1 })
  }

  render() {
    return (
      <>
        <div>
          <h2 className='counter'>{this.state.counter}</h2>
          <button className='counter-button' onClick={() => this.handleClick()}>Click</button>
        </div>
        <style>{`
                  .counter-button {
                      font-size: 1rem;
                      padding: 5px 10px;
                      color:  #585858;
                  }
              `}</style>
      </>
    );
  }
}

export default App;
