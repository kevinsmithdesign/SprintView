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
  PieChart,
  Pie,
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
import TeamMemberStats from "../components/TeamMemberStats";

import VelocityIcon from "../assets/icons/VelocityIcon";
import CheckmarkCircleIcon from "../assets/icons/CheckmarkCircleIcon";
import ClockIcon from "../assets/icons/ClockIcon";
import WarningCircleIcon from "../assets/icons/WarningCircleIcon";
import TrophyIcon from "../assets/icons/TrophyIcon";
import CalendarIcon from "../assets/icons/CalendarIcon";
import ScopeChangeIcon from "../assets/icons/ScopeChange";
import RightArrowCircle from "../assets/icons/RightArrowCircle";

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

  const pieData = [
    { name: "Planned Work", value: 70, color: "#B6BAEA" }, // purple
    { name: "Unplanned Work", value: 20, color: "#FCD98E" }, // yellow
    { name: "Bugs/Issues", value: 10, color: "#FED2D7" }, // pink
  ];

  const theme = useTheme();

  const analyticsData = [
    {
      icon: <VelocityIcon />, // Leave blank as requested
      bgColor: "#B6BAEA", // Light blue
      title: "SPRINT VELOCITY",
      stat: "48",
      description: "Story points complete",
    },
    {
      icon: <CheckmarkCircleIcon />,
      bgColor: "#77B8A0", // Light green
      title: "COMPLETION RATE",
      stat: "83%",
      description: "Tasks completed on time",
    },
    {
      icon: <ClockIcon />, // Leave blank as requested
      bgColor: "#FCD98E", // Light orange
      title: "AVG CYCLE TIME",
      stat: "3.8",
      description: "Days from start to done",
    },
    {
      icon: <WarningCircleIcon />, // Leave blank as requested
      bgColor: "#F7946F", // Light red
      title: "ACTIVE BLOCKERS",
      stat: "2",
      description: "Tasks currently blocked",
    },
  ];

  const teamMateStats = [
    {
      name: "Kevin Smith",
      jobTitle: "Product Design",
      complete: "90%",
      tasks: "4/5",
      points: "18",
      blockers: "1",
    },
    {
      name: "Nolan Ryan",
      jobTitle: "Front-End Developer",
      complete: "90%",
      tasks: "4/5",
      points: "14",
      blockers: "1",
    },
    {
      name: "Andrea Johnson",
      jobTitle: "Back-End Developer",
      complete: "70%",
      tasks: "3/5",
      points: "10",
      blockers: "0",
    },
    {
      name: "Becca Galli",
      jobTitle: "QA Engineer",
      complete: "90%",
      tasks: "4/5",
      points: "18",
      blockers: "1",
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </Box>
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
            <Stack flexDirection="row" mb={3}>
              <Stack flexGrow={1}>
                <Typography fontWeight="bold">BURNDOWN CHART</Typography>
              </Stack>

              <Stack flexDirection="row" alignItems="center" gap={3}>
                <Stack flexDirection="row" alignItems="center">
                  <Box
                    sx={{
                      height: "9px",
                      width: "9px",
                      borderRadius: "2px",
                      background: "#FED2D7",
                      mr: 0.5,
                    }}
                  />
                  <Typography
                    fontSize="9px"
                    fontWeight="bold"
                    color={theme.palette.secondary.main}
                  >
                    Ideal
                  </Typography>
                </Stack>
                <Stack flexDirection="row" alignItems="center">
                  <Box
                    sx={{
                      height: "9px",
                      width: "9px",
                      borderRadius: "2px",
                      background: "#B6BAEA",
                      mr: 0.5,
                    }}
                  />
                  <Typography
                    fontSize="9px"
                    fontWeight="bold"
                    color={theme.palette.secondary.main}
                  >
                    Actual
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

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
        <Grid size={{ xs: 12, md: 6 }} mb={2}>
          <Card>
            <Typography fontWeight="bold" mb={3}>
              CURRENT VELOCITY
            </Typography>
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
      <Grid container spacing={2} mb={2}>
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
          <Card sx={{ flexGrow: 1 }}>
            <Typography fontWeight="bold" mb={2}>
              WORK DISTRIBUTION
            </Typography>
            <Box
              sx={{
                height: 220,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  margin: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                    <Box
                      sx={{
                        height: "9px",
                        width: "9px",
                        borderRadius: "2px",
                        background: "#B6BAEA",
                        mr: 0.5,
                      }}
                    />
                    <Typography
                      color={theme.palette.secondary.main}
                      fontWeight="bold"
                      sx={{ fontSize: "9px" }}
                    >
                      Planned Work
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                    <Box
                      sx={{
                        height: "9px",
                        width: "9px",
                        borderRadius: "2px",
                        background: "#FED2D7",
                        mr: 0.5,
                      }}
                    />
                    <Typography
                      color={theme.palette.secondary.main}
                      fontWeight="bold"
                      sx={{ fontSize: "9px" }}
                    >
                      Unplanned Work
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 0 }}>
                    <Box
                      sx={{
                        height: "9px",
                        width: "9px",
                        borderRadius: "2px",
                        background: "#FCD98E",
                        mr: 0.5,
                      }}
                    />
                    <Typography
                      color={theme.palette.secondary.main}
                      fontWeight="bold"
                      sx={{ fontSize: "9px" }}
                    >
                      Bugs/Issues
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={5}
                    cornerRadius={10}
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>

                  {/* Simple custom legend in the middle: use a separate Box for real layout */}
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Grid container spacing={2} mb={2}>
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
              <Card sx={{ flexGrow: 1 }}>
                <Stack flexDirection="row" alignItems="center" mb={1}>
                  <Stack flexGrow={1}>
                    <Typography fontWeight="bold">SPRINT GOAL</Typography>
                  </Stack>
                  <Box
                    sx={{
                      height: "40px",
                      width: "40px",
                      background: "#FCD98E",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TrophyIcon />
                  </Box>
                </Stack>
                <Typography>
                  Complete user authentication and dashboard redesign flow.
                </Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
              <Card sx={{ flexGrow: 1 }}>
                <Stack flexDirection="row" alignItems="center" mb={1}>
                  <Stack flexGrow={1}>
                    <Typography fontWeight="bold">
                      DAYS LEFT IN SPRINT
                    </Typography>
                  </Stack>
                  <Box
                    sx={{
                      height: "40px",
                      width: "40px",
                      background: "#F7946F",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CalendarIcon />
                  </Box>
                </Stack>
                <Typography variant="h1">7 days</Typography>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
              <Card sx={{ flexGrow: 1 }}>
                <Stack flexDirection="row" alignItems="center" mb={1}>
                  <Stack flexGrow={1}>
                    <Typography fontWeight="bold">SCOPE CHANGE</Typography>
                  </Stack>
                  <Box
                    sx={{
                      height: "40px",
                      width: "40px",
                      background: "#77B8A0",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ScopeChangeIcon />
                  </Box>
                </Stack>
                <Typography variant="h1">+5 pts</Typography>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
              <Card sx={{ flexGrow: 1 }}>
                <Stack flexDirection="row" alignItems="center" mb={1}>
                  <Stack flexGrow={1}>
                    <Typography fontWeight="bold">CARRYOVER WORK</Typography>
                  </Stack>
                  <Box
                    sx={{
                      height: "40px",
                      width: "40px",
                      background: "#B6BAEA",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <RightArrowCircle />
                  </Box>
                </Stack>
                <Typography variant="h1">+3 pts</Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} mb={8}>
        {teamMateStats.map(
          ({ name, jobTitle, complete, tasks, points, blockers }) => (
            <Grid size={{ xs: 12, md: 3 }}>
              <TeamMemberStats
                name={name}
                jobTitle={jobTitle}
                complete={complete}
                tasks={tasks}
                points={points}
                blockers={blockers}
              />{" "}
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
};

export default AnalyticsPage;
