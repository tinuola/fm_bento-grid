import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  let title = props.title;

  const clickBtn = () => {
    title = 'New Title';
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
