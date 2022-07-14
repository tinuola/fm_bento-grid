import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // React hooks start with "use"
  // Hooks are called directly inside component-functions

  // useState returns array of two elements: [value (current state), updating function]

  const [title, setTitle] = useState(props.title);

  const clickBtn = () => {
    setTitle('Update meee!');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickBtn}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
