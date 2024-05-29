import { Button, Card, Form, Input } from "antd";
import { useState } from "react";

function App() {
  const [price, setPrice] = useState(0);
  const [mass, setMass] = useState({
    width: 0,
    height: 0,
    price: 0,
    widthFinish: 0,
    heightFinish: 0,
  });

  const handleClick = () => {
    console.log(mass);
    const area = mass.width * 100;
    const square = mass.price / area;
    setPrice(Math.round(square * (mass.widthFinish * mass.heightFinish)));
  };

  return (
    <div className="App">
      <Card className="card">
        <h1> Home Comfort</h1>
        <Form>
          Ширина в см
          <Input
            className="input"
            onChange={(e) => {
              setMass((prev) => ({ ...prev, width: Number(e.target.value) }));
            }}
          />
          Цена за метр
          <Input
            className="input"
            onChange={(e) => {
              setMass((prev) => ({
                ...prev,
                price: Number(e.target.value),
              }));
            }}
          />
          Ширина изделия в см
          <Input
            className="input"
            onChange={(e) => {
              setMass((prev) => ({
                ...prev,
                widthFinish: Number(e.target.value),
              }));
            }}
          />
          Длина изделия в см
          <Input
            className="input"
            onChange={(e) => {
              setMass((prev) => ({
                ...prev,
                heightFinish: Number(e.target.value),
              }));
            }}
          />
          <Button type="primary" onClick={handleClick}>
            Запросить
          </Button>
        </Form>

        <div className="price">
          <h2>
            Цена: <span className="priceColor">{price} руб</span>
          </h2>
        </div>
      </Card>
    </div>
  );
}

export default App;
