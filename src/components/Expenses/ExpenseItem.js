import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const clickBtn = () => console.log('Consoled again!');
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={() => console.log('Consoled!')}>Change Title</button> */}
      <button onClick={clickBtn}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
