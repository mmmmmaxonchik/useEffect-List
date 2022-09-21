import React from 'react';

const List2 = () => {
  const [list, setList] = React.useState([1, 2, 3]);
  let newList = [...list];
  const addNumber = () => {
    const randNum = Math.round(Math.random() * 10);
    newList = [...list, randNum];
    setList(newList);
  };

  React.useEffect(() => {
    //componentDidMoun
    console.log('Компонент создан');
  }, [list]); //данный компонент отслеживает когда объект был создан один раз, из за массива(если убрать массив будет отображаться много раз), также можно передать в массив ту переменную за которой надо следить(это уже будет обновление, так как react сравнивает занчение предидущей переменной с той котрорая находится в данный момент - componentDidUpdate)

  React.useEffect(() => {
    return () => {
      console.log('Компонент удален');
    };
  }, []);

  return (
    <div>
      <div>
        <button onClick={addNumber}>New number</button>
      </div>
      {newList.map((num) => (
        <div>{num}</div>
      ))}
    </div>
  );
};
export default List2;
