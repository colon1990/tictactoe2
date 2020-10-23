import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }


    render() {
        return (
            // <button className="square" onClick={function () { alert('iClick') }}>
            <button className='square' onClick={() => alert('iClick2')}>
                {this.props.value}
            </button>
        );
    }

}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />
    }
    render() {
        const status = "Next player: X";
        return (
            <div>
                <div className="status "> {status} </div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                </div>
                <div className="board-row">
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board"> <Board /></div>
                <div className="game-info">
                    {/* <div> <Square.setState.infoMessage></Square.setState.infoMessage></div> */}
                    <div></div>
                    <ol></ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();