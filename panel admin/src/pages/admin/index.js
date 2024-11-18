import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function AdminPage() {
    const { data: logData, isLoading, error } = useSWR(`http://localhost:3000/api/getLogs`, fetcher);

    if (error) return <h1>{error}</h1>
    if (isLoading) return <h1>LOADING...!</h1>

    const endpointCount = logData.reduce((acc, log) => {
        acc[log.endpoint] = (acc[log.endpoint] || 0) + 1;
        return acc
    }, {});

    const chartData = Object.keys(endpointCount).map(endpoint => ({
        endpoint,
        count: endpointCount[endpoint]
    }));

    const statusCount = logData.reduce((acc, log) => {
        acc[log.status] = (acc[log.status] || 0) + 1;
        return acc
    }, {});

    const statusChartData = Object.keys(statusCount).map(status => ({
        status,
        count: statusCount[status],
    }));

    console.log(chartData);
    console.log(statusChartData);
    

    return (
        <div className="admin">
            <h1>PANEL ADMIN</h1>

            <h3>endpointer :</h3>
            <BarChart width={600} height={300} data={chartData}>
                <XAxis dataKey="endpoint" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>

            <h3>status counts :</h3>
            <LineChart width={600} height={300} data={statusChartData}>
                <XAxis dataKey="status" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
        </div>
    )

};