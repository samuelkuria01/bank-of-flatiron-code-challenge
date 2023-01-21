import TransactionItem from "./TransactionItem"
function Transactions (transactions){
    return(
        <table>
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>category</th>
            <th>amount</th>
        </tr>
        //transactions items
        {transactions.map((data)=> <TransactionItem key={data.id} date= {data.date})}


        {/* {transactions.map(data=>{
            return <TransactionItem  
            date = {data.date}
            description = {data.description}
            category = {data.category}
            amount = {data.amount}
            key = {data.id}
            />
             
        })} */}
    </table>
    )
}
export default Transactions;