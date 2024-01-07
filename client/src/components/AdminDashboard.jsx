import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

function AdminDashboard() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  return (
    <main className="main-container p-5 text-dark">
      <div className="d-flex justify-content-between text-dark p-1">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card d-flex flex-column justify-content-around p-3 rounded">
          <h4>PRODUCTS</h4>
          <h1>300</h1>
        </div>
        <div className="card d-flex flex-column justify-content-around p-3 rounded">
          <h4>CATEGORIES</h4>
          <h1>12</h1>
        </div>
        <div className="card d-flex flex-column justify-content-around p-3 rounded">
          <h4>CUSTOMERS</h4>
          <h1>33</h1>
        </div>
        <div className="card d-flex flex-column justify-content-around p-3 rounded">
          <h4>ALERTS</h4>
          <h1>42</h1>
        </div>
      </div>

      <div className="charts mt-5 h-50">
        <ResponsiveContainer className="h-100 w-100">
          <BarChart
            className="w-100 h-100"
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default AdminDashboard;
