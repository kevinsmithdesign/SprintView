import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Stack,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  useTheme,
} from "@mui/material";

export default function BasicModal({
  openCreateStoryDialog,
  setOpenCreateStoryDialog,
  onCreateStory,
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
    if (storyData.title.trim() && onCreateStory) {
      onCreateStory(storyData);
      // Reset form
      setStoryData({
        title: "",
        description: "",
        assignee: "",
        priority: "",
        points: "",
        role: "",
        timeline: "",
      });
    }
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
      open={openCreateStoryDialog}
      onClose={handleClose}
      PaperProps={{
        sx: {
          borderRadius: 2,
          maxWidth: "800px",
          width: "100%",
        },
      }}
    >
      <DialogTitle sx={{ pb: 2 }}>
        <Typography variant="h5" fontWeight="600">
          Create Story
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Stack spacing={3} sx={{ mt: 1 }}>
          <Stack>
            <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
              Title
            </Typography>
            <TextField
              placeholder="Enter story title"
              fullWidth
              required
              value={storyData.title}
              onChange={handleChange("title")}
            />
          </Stack>

          <Stack>
            <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
              Description
            </Typography>
            <TextField
              placeholder="Describe the user story"
              fullWidth
              multiline
              rows={3}
              value={storyData.description}
              onChange={handleChange("description")}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <Stack flex={1}>
              <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                Assignee
              </Typography>
              <FormControl fullWidth>
                <Select
                  value={storyData.assignee}
                  onChange={handleChange("assignee")}
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <em style={{ color: "#999", fontStyle: "normal" }}>
                          Select assignee
                        </em>
                      );
                    }
                    return selected;
                  }}
                >
                  <MenuItem value="">
                    <em>Select assignee</em>
                  </MenuItem>
                  <MenuItem value="John Doe">John Doe</MenuItem>
                  <MenuItem value="Jane Smith">Jane Smith</MenuItem>
                  <MenuItem value="Mike Johnson">Mike Johnson</MenuItem>
                  <MenuItem value="Sarah Wilson">Sarah Wilson</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack flex={1}>
              <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                Priority
              </Typography>
              <FormControl fullWidth>
                <Select
                  value={storyData.priority}
                  onChange={handleChange("priority")}
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <em style={{ color: "#999", fontStyle: "normal" }}>
                          Select priority
                        </em>
                      );
                    }
                    return selected;
                  }}
                >
                  <MenuItem value="">
                    <em>Select priority</em>
                  </MenuItem>
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack flex={1}>
              <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                Story Points
              </Typography>
              <FormControl fullWidth>
                <Select
                  value={storyData.points}
                  onChange={handleChange("points")}
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <em style={{ color: "#999", fontStyle: "normal" }}>
                          Select points
                        </em>
                      );
                    }
                    return selected;
                  }}
                >
                  <MenuItem value="">
                    <em>Select points</em>
                  </MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                  <MenuItem value="8">8</MenuItem>
                  <MenuItem value="13">13</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Stack flex={1}>
              <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                Role
              </Typography>
              <FormControl fullWidth>
                <Select
                  value={storyData.role}
                  onChange={handleChange("role")}
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <em style={{ color: "#999", fontStyle: "normal" }}>
                          Select role
                        </em>
                      );
                    }
                    return selected;
                  }}
                >
                  <MenuItem value="">
                    <em>Select role</em>
                  </MenuItem>
                  <MenuItem value="UI Design">UI Design</MenuItem>
                  <MenuItem value="UX Design">UX Design</MenuItem>
                  <MenuItem value="Front-End">Front-End</MenuItem>
                  <MenuItem value="Back-End">Back-End</MenuItem>
                  <MenuItem value="QA">QA</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack flex={1}>
              <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                Timeline
              </Typography>
              <FormControl fullWidth>
                <Select
                  value={storyData.timeline}
                  onChange={handleChange("timeline")}
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <em style={{ color: "#999", fontStyle: "normal" }}>
                          Select timeline
                        </em>
                      );
                    }
                    return selected;
                  }}
                >
                  <MenuItem value="">
                    <em>Select timeline</em>
                  </MenuItem>
                  <MenuItem value="Backlog">Backlog</MenuItem>
                  <MenuItem value="Sprint 1">Sprint 1</MenuItem>
                  <MenuItem value="Sprint 2">Sprint 2</MenuItem>
                  <MenuItem value="Sprint 3">Sprint 3</MenuItem>
                  <MenuItem value="Next Quarter">Next Quarter</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 2 }}>
        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{
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
          disabled={!storyData.title.trim()}
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
      </DialogActions>
    </Dialog>
  );
}
