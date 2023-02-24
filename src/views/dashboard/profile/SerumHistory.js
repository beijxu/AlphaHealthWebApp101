import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
    {name: '09/2020', uv: 400, pv: 2400, amt: 2400}, 
    {name: '11/2020', uv: 200, pv: 1400, amt: 2400},
    {name: '07/2021', uv: 300, pv: 1400, amt: 2400},
];

export default function SerumHistory() {
    return (
        <>
        <p><b>History of Serum PSA</b></p>
    <LineChart width={400} height={200} data={data} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis label={{value: 'PSA (ng/ml)', angle: -90, position: 'insideLeft', offset: 12, fontSize: '15px'}} />
    </LineChart>
    </>
    );
    
}