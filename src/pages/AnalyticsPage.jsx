import React from "react";
import {
  Grid,
  Container,
  Box,
  Card,
  Chip,
  Typography,
  Stack,
  Avatar,
  useTheme,
} from "@mui/material";
import {
  LineChart,
  Line,
  Bar,
  BarChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AnalyticsPage = () => {
  const data = [
    { day: 0, Ideal: 100, Actual: 100 },
    { day: 1, Ideal: 90, Actual: 98 },
    { day: 2, Ideal: 80, Actual: 90 },
    { day: 3, Ideal: 70, Actual: 70 },
    { day: 4, Ideal: 60, Actual: 70 },
    { day: 5, Ideal: 50, Actual: 65 },
    { day: 6, Ideal: 40, Actual: 50 },
    { day: 7, Ideal: 30, Actual: 30 },
    { day: 8, Ideal: 20, Actual: 15 },
    { day: 9, Ideal: 10, Actual: 5 },
    { day: 10, Ideal: 0, Actual: 0 },
  ];

  const velocityData = [
    { name: "Committed", value: 100, fill: "#B6BAEA" }, // purple-ish
    { name: "Not Started", value: 35, fill: "#FED2D7" }, // pink
    { name: "In Progress", value: 50, fill: "#FCD98E" }, // yellow
    { name: "Blocked", value: 25, fill: "#F7946F" }, // orange/red
    { name: "Completed", value: 70, fill: "#77B8A0" }, // green
  ];

  const theme = useTheme();

  const analyticsData = [
    {
      icon: "", // Leave blank as requested
      bgColor: "#B6BAEA", // Light blue
      title: "SPRINT VELOCITY",
      stat: "48",
      description: "Story points complete",
    },
    {
      icon: "", // Leave blank as requested
      bgColor: "#77B8A0", // Light green
      title: "COMPLETION RATE",
      stat: "83%",
      description: "Tasks completed on time",
    },
    {
      icon: "", // Leave blank as requested
      bgColor: "#FCD98E", // Light orange
      title: "AVG CYCLE TIME",
      stat: "3.8",
      description: "Days from start to done",
    },
    {
      icon: "", // Leave blank as requested
      bgColor: "#F7946F", // Light red
      title: "ACTIVE BLOCKERS",
      stat: "2",
      description: "Tasks currently blocked",
    },
  ];

  return (
    <Container>
      <Grid container spacing={2} mb={2}>
        {analyticsData.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 3 }}>
            <Card>
              <Stack flexDirection="row" alignItems="center" mb={1}>
                <Stack flexGrow={1}>
                  <Typography fontWeight="bold">{item.title}</Typography>
                </Stack>
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                    background: item.bgColor,
                    borderRadius: "50%",
                  }}
                ></Box>
              </Stack>
              <Typography variant="h1">{item.stat}</Typography>
              <Typography variant="body2" color={theme.palette.secondary.main}>
                {item.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <Box sx={{ height: 300, background: "" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <defs>
                    <linearGradient
                      id="colorActual"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  {/* ✅ 2️⃣ Only horizontal grid lines */}
                  <CartesianGrid
                    stroke="#e2e8f0"
                    strokeDasharray="3 3"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="day"
                    stroke="#e2e8f0"
                    strokeDasharray="3 3"
                    tickFormatter={(tick) => `${tick}d`}
                    tick={{ fontSize: 12, fill: "#8B8E96" }}
                  />
                  <YAxis
                    tickFormatter={(tick) => `${tick} pts`}
                    stroke="transparent"
                    tick={{ fontSize: 12, fill: "#8B8E96" }}
                  />

                  <Tooltip
                    contentStyle={{ fontSize: "12px", borderRadius: "4px" }}
                  />

                  <Line
                    type="monotone"
                    dataKey="Ideal"
                    stroke="#FED2D7"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                  />

                  {/* ✅ 3️⃣ Actual line with gradient area */}
                  <Line
                    type="monotone"
                    dataKey="Actual"
                    stroke="#B6BAEA"
                    strokeWidth={2}
                    dot={{ r: 2 }}
                    fillOpacity={1}
                    fill="url(#colorActual)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={velocityData} barSize={48}>
                  <CartesianGrid
                    stroke="#e2e8f0"
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="#e2e8f0"
                    strokeDasharray="3 3"
                    tick={{ fontSize: 12, fill: "#8B8E96" }}
                  />
                  <YAxis
                    tickFormatter={(tick) => `${tick} pts`}
                    tick={{ fontSize: 12, fill: "#8B8E96" }}
                    stroke="transparent"
                  />
                  <Tooltip
                    contentStyle={{ fontSize: "12px", borderRadius: "4px" }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {velocityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnalyticsPage;
