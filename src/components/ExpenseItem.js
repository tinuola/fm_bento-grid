import './ExpenseItem.css';

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 25);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-item'>
      {/* <div>{props.date.toISOString()}</div> */}
      {/* Change how dates are displayed */}
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
