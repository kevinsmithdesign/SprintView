import * as React from "react";
import {
  Dialog,
  Button,
  TextField,
  MenuItem,
  Stack,
  Typography,
  Container,
  Box,
  Grid,
  Paper,
  Card,
  IconButton,
  Chip,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  useTheme,
} from "@mui/material";
// import { Close as CloseIcon, Add as AddIcon } from "@mui/icons-material";

export default function BasicModal({
  openCreateStoryDialog,
  setOpenCreateStoryDialog,
}) {
  const handleClose = () => setOpenCreateStoryDialog(false);
  const theme = useTheme();

  const [storyData, setStoryData] = React.useState({
    title: "",
    description: "",
    assignee: "",
    priority: "",
    points: "",
    role: "",
    timeline: "",
  });

  const handleChange = (field) => (event) => {
    setStoryData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitting story:", storyData);
    handleClose();
  };

  const priorityConfig = {
    High: { color: "#F16362", bg: "#fef2f2" },
    Medium: { color: "#FCD98E", bg: "#fffbeb" },
    Low: { color: "#77B8A0", bg: "#f0fdf4" },
  };

  const roleConfig = {
    "UI Design": { color: "#8cc8c8", bg: "#f0fdfd" },
    "UX Design": { color: "#c8a8e9", bg: "#faf5ff" },
    "Front-End": { color: "#fbbf24", bg: "#fffbeb" },
    "Back-End": { color: "#60a5fa", bg: "#eff6ff" },
    QA: { color: "#34d399", bg: "#f0fdf4" },
  };

  return (
    <Dialog
      fullScreen
      open={openCreateStoryDialog}
      onClose={handleClose}
      PaperProps={{
        sx: {
          bgcolor: "#F5F9FC",
          padding: 0,
        },
      }}
    >
      {/* Header */}
      {/* <Box
        sx={{
          bgcolor: "white",
          borderBottom: "1px solid #e2e8f0",
          px: 4,
          py: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="600" color="#1e293b">
            Create Story
          </Typography>
          <Typography variant="body2" color="#64748b" mt={0.5}>
            Add a new user story to your sprint
          </Typography>
        </Box>
        <IconButton
          onClick={handleClose}
          sx={{
            color: "#64748b",
            "&:hover": { bgcolor: "#f1f5f9" },
          }}
        >
          {/* <CloseIcon /> */}{" "}
      {/* </IconButton> */}
      {/* </Box> */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h2" mb={2}>
          Create Story
        </Typography>
        <Grid container spacing={3}>
          {/* Main Form */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Card
              sx={{
                background: "#fff",
              }}
            >
              <Stack spacing={3}>
                {/* Story Information */}
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    gutterBottom
                    sx={{ color: "#1e293b", mb: 3 }}
                  >
                    Story Information
                  </Typography>

                  <Stack spacing={3}>
                    <Stack>
                      <Typography fontWeight="bold" mb={0.5}>
                        Title
                      </Typography>
                      <TextField
                        placeholder="Enter story title"
                        fullWidth
                        required
                        value={storyData.title}
                        onChange={handleChange("title")}
                        // sx={{
                        //   "& .MuiOutlinedInput-root": {
                        //     borderRadius: 1.5,
                        //     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        //       borderColor: "#6366f1",
                        //       borderWidth: 2,
                        //     },
                        //   },
                        //   "& .MuiInputLabel-root.Mui-focused": {
                        //     color: "#6366f1",
                        //   },
                        // }}
                      />
                    </Stack>

                    <Stack>
                      <Typography fontWeight="bold" mb={0.5}>
                        Description
                      </Typography>
                      <TextField
                        placeholder="Describe the user story"
                        fullWidth
                        multiline
                        rows={3}
                        value={storyData.description}
                        onChange={handleChange("description")}
                        //   sx={{
                        //     "& .MuiOutlinedInput-root": {
                        //       borderRadius: 1.5,
                        //       "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        //         borderColor: "#6366f1",
                        //         borderWidth: 2,
                        //       },
                        //     },
                        //     "& .MuiInputLabel-root.Mui-focused": {
                        //       color: "#6366f1",
                        //     },
                        //   }}
                      />
                    </Stack>
                  </Stack>
                </Box>

                {/* Story Details */}
                <Box>
                  {/* <Typography
                    variant="h5"
                    fontWeight="600"
                    gutterBottom
                    sx={{ color: "#1e293b", mb: 3 }}
                  >
                    Story Details
                  </Typography> */}

                  <Grid container spacing={3}>
                    {/* Assignee */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography fontWeight="bold" mb={0.5}>
                        Assignee
                      </Typography>
                      <FormControl fullWidth>
                        <InputLabel>Assignee</InputLabel>
                        <Select
                          value={storyData.assignee}
                          onChange={handleChange("assignee")}
                          label="Assignee"
                          //   sx={{
                          //     borderRadius: 1.5,
                          //     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          //       borderColor: "#6366f1",
                          //     },
                          //   }}
                        >
                          {["Kevin Smith", "Becca Galli", "Sarah Mills"].map(
                            (person) => (
                              <MenuItem key={person} value={person}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                  }}
                                >
                                  <Avatar
                                    sx={{
                                      width: 24,
                                      height: 24,
                                      bgcolor: "#6366f1",
                                      fontSize: "0.75rem",
                                    }}
                                  >
                                    {person
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </Avatar>
                                  {person}
                                </Box>
                              </MenuItem>
                            )
                          )}
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Priority */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography fontWeight="bold" mb={0.5}>
                        Priority
                      </Typography>
                      <FormControl fullWidth>
                        <InputLabel>Priority</InputLabel>
                        <Select
                          value={storyData.priority}
                          onChange={handleChange("priority")}
                          label="Priority"
                          //   sx={{
                          //     borderRadius: 1.5,
                          //     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          //       borderColor: "#6366f1",
                          //     },
                          //   }}
                        >
                          {Object.entries(priorityConfig).map(
                            ([priority, config]) => (
                              <MenuItem key={priority} value={priority}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                  }}
                                >
                                  <Box
                                    sx={{
                                      width: 8,
                                      height: 8,
                                      borderRadius: "50%",
                                      bgcolor: config.color,
                                    }}
                                  />
                                  {priority}
                                </Box>
                              </MenuItem>
                            )
                          )}
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Story Points */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography fontWeight="bold" mb={0.5}>
                        Story Points
                      </Typography>
                      <FormControl fullWidth>
                        <InputLabel>Story Points</InputLabel>
                        <Select
                          value={storyData.points}
                          onChange={handleChange("points")}
                          label="Story Points"
                          //   sx={{
                          //     borderRadius: 1.5,
                          //     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          //       borderColor: "#6366f1",
                          //     },
                          //   }}
                        >
                          {["1", "2", "3", "5", "8"].map((point) => (
                            <MenuItem key={point} value={point}>
                              {point} {point === "1" ? "point" : "points"}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Role */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography fontWeight="bold" mb={0.5}>
                        Role
                      </Typography>
                      <FormControl fullWidth>
                        <InputLabel>Role</InputLabel>
                        <Select
                          value={storyData.role}
                          onChange={handleChange("role")}
                          label="Role"
                        >
                          {Object.entries(roleConfig).map(([role, config]) => (
                            <MenuItem key={role} value={role}>
                              <Chip label={role} size="small" />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    {/* Timeline */}
                    <Grid size={{ xs: 12 }}>
                      <Typography fontWeight="bold" mb={0.5}>
                        Timeline
                      </Typography>
                      <FormControl fullWidth>
                        <InputLabel>Timeline</InputLabel>
                        <Select
                          value={storyData.timeline}
                          onChange={handleChange("timeline")}
                          label="Timeline"
                          //   sx={{
                          //     borderRadius: 1.5,
                          //     "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          //       borderColor: "#6366f1",
                          //     },
                          //   }}
                        >
                          <MenuItem value="Backlog">Backlog</MenuItem>
                          <MenuItem value="Sprint 1">Sprint 1</MenuItem>
                          <MenuItem value="Sprint 2">Sprint 2</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Card>
          </Grid>

          {/* Preview Panel */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Card sx={{ background: "#fff" }}>
              <Typography
                variant="h5"
                fontWeight="600"
                gutterBottom
                sx={{ color: "#1e293b" }}
              >
                Story Preview
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography fontWeight="bold" mb={0.5}>
                  Title
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="500"
                  sx={{
                    mb: 2,
                    minHeight: 24,
                    color: theme.palette.secondary.main,
                  }}
                >
                  {storyData.title || "Untitled Story"}
                </Typography>

                <Typography fontWeight="bold" mb={0.5}>
                  Description
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 3, color: theme.palette.secondary.main }}
                >
                  {storyData.description || "No description provided"}
                </Typography>

                {/* Tags */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                  {storyData.priority && (
                    <Chip
                      label={storyData.priority}
                      size="small"
                      sx={{
                        bgcolor: priorityConfig[storyData.priority]?.bg,
                        color: priorityConfig[storyData.priority]?.color,
                        fontWeight: 500,
                        fontSize: "0.75rem",
                      }}
                    />
                  )}
                  {storyData.points && (
                    <Chip
                      label={`${storyData.points} pts`}
                      size="small"
                      sx={{
                        bgcolor: "#f1f5f9",
                        color: "#475569",
                        fontWeight: 500,
                        fontSize: "0.75rem",
                      }}
                    />
                  )}
                  {storyData.role && (
                    <Chip
                      label={storyData.role}
                      size="small"
                      //   sx={{
                      //     bgcolor: roleConfig[storyData.role]?.bg,
                      //     color: roleConfig[storyData.role]?.color,
                      //     fontWeight: 500,
                      //     fontSize: "0.75rem",
                      //   }}
                    />
                  )}
                </Box>

                {/* Assignee */}
                {storyData.assignee && (
                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="#64748b"
                      gutterBottom
                    >
                      Assignee
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar
                        sx={{
                          width: 32,
                          height: 32,
                          bgcolor: "#6366f1",
                          fontSize: "0.9rem",
                        }}
                      >
                        {storyData.assignee
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </Avatar>
                      <Typography variant="body2" color="#1e293b">
                        {storyData.assignee}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Action Buttons */}
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 4,
          borderTop: "1px solid #e2e8f0",
          background: "#fff",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={handleClose}
              variant="outlined"
              size="large"
              sx={{
                mr: 2,
                textTransform: "none",
                borderColor: "#d1d5db",
                color: "#6b7280",
                "&:hover": {
                  borderColor: "#9ca3af",
                  bgcolor: "#f9fafb",
                },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              size="large"
              disabled={!storyData.title.trim()}
              startIcon={"+"}
              sx={{
                textTransform: "none",
                "&:disabled": {
                  bgcolor: "#e2e8f0",
                  color: "#94a3b8",
                },
              }}
            >
              Create Story
            </Button>
          </Box>
        </Container>
      </Box>
    </Dialog>
  );
}
