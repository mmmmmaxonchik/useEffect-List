import React from 'react';
class List extends React.Component {
  state = {
    number: [1, 2, 3, 4],
  };

  addNumber = () => {
    const randNum = Math.round(Math.random() * 10);
    this.setState({
      number: [...this.state.number, randNum],
    });
  };

  componentDidMount() {
    console.log('Компонент создан');
  }

  componentDidUpdate() {
    console.log('Компонент обновлен');
  }

  componentWillUnmount() {
    console.log('Компонент удален');
  }

  render() {
    return (
      <div className="List">
        <div className="click">
          <button onClick={this.addNumber}>New number</button>
        </div>
        {this.state.number.map((num) => (
          <div>{num}</div>
        ))}
      </div>
    );
  }
}
export default List;
