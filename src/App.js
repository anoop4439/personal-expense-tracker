import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Sanitizer',
      amount: 94.12,
      date: new Date(2021, 6, 14),
    },
    { id: 'e2', title: 'New Monitor', amount: 10299, date: new Date(2021, 6, 16) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 13576,
      date: new Date(2021, 6, 18),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 14500,
      date: new Date(2021, 6, 20),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </div>
  );
}

export default App;
