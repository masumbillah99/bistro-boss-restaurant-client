import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FcMoneyTransfer } from "react-icons/fc";
import { FiUsers } from "react-icons/fi";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  ResponsiveContainer,
} from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      // console.log(res.data);
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["chart-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/order-stats");
      return res.data;
    },
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full max-w-screen-xl p-10">
      <h2 className="text-3xl font-bold mb-5">
        Welcome Back, {user.displayName}
      </h2>
      <div className="stats grid-flow-row md:grid-flow-col shadow rounded-md">
        <div className="stat gap-3 text-white bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <FcMoneyTransfer className="text-2xl" />
            </svg>
          </div>
          <div className="stat-title text-white">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
        </div>
        <div className="stat gap-3 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <FiUsers className="text-2xl" />
            </svg>
          </div>
          <div className="stat-title">Customers</div>
          <div className="stat-value">{stats.customers}</div>
        </div>
        <div className="stat gap-3 text-white bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <FiUsers className="text-2xl" />
            </svg>
          </div>
          <div className="stat-title text-white">Products</div>
          <div className="stat-value">{stats.products}</div>
        </div>
        <div className="stat gap-3 text-white bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <FiUsers className="text-2xl" />
            </svg>
          </div>
          <div className="stat-title text-white">Orders</div>
          <div className="stat-value">{stats.orders}</div>
        </div>
      </div>
      {/* charts section */}
      <div className="flex mt-10">
        {/* bar charts */}
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="total"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        {/*  */}
        <div className="w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    name={entry.category}
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
