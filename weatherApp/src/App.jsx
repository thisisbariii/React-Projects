import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import "./app.css";

export function App() {
  return (
    <>
      <div className="App">
        <Input />
        <Button value="Search" />
        <Card />
        <Button  value="Refresh"/>
      </div>
    </>
  );
}
export default App;