import './App.css';
// import CreateForm from './components/CreateForm'; 
// import SearchData from './components/SearchData'
import TransactionItem from './components/TransactionItem';
import { useState, useEffect } from 'react';
import Transactions from './components/Transactions';


function App() {

  const [transactions, setTransactions]= useState([])
  
    useEffect(()=>{
        fetch('http://localhost:8000/transactions')
        .then((res)=>res.json)
        .then(data=>setTransactions(data))
    },[])
    
    console.log(transactions);

  return (
    <div className="App">
      <h1>Bank Of Flatiron</h1>
      <Transactions  transactions={transactions} />


      {/* <SearchData/>
      <CreateForm/> */}
    </div>
  );
}

export default App;
