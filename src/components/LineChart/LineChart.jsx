import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const mathMarksData = [
    { id: 1, name: "Alice", physics: 85, chemistry: 90, math: 85 },
    { id: 2, name: "Bob", physics: 78, chemistry: 85, math: 78 },
    { id: 3, name: "Charlie", physics: 92, chemistry: 88, math: 92 },
    { id: 4, name: "David", physics: 88, chemistry: 84, math: 67 },
    { id: 5, name: "Eve", physics: 70, chemistry: 75, math: 80 },
    { id: 6, name: "Frank", physics: 95, chemistry: 91, math: 88 },
    { id: 7, name: "Grace", physics: 82, chemistry: 78, math: 72 },
    { id: 8, name: "Helen", physics: 79, chemistry: 83, math: 95 },
    { id: 9, name: "Ivy", physics: 87, chemistry: 89, math: 83 },
    { id: 10, name: "Jack", physics: 90, chemistry: 88, math: 90 }
  ];

  return (
    <div>
      <LChart width={900} height={400} data={mathMarksData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey={'physics'} stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
