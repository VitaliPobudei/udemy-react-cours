import ExpenseItem from "./components/ExpenseItem";

function App() {
  // const para = document.createElement("p");
  // para.textContent = "This is also visible";
  // document.getElementsById("root").append(para);
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
      <p></p>
    </div>
  );
}

export default App;
