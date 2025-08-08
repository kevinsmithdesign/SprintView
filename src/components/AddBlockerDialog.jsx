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
  FormControl,
  Select,
  useTheme,
} from "@mui/material";

export default function AddBlockerDialog({
  openAddBlockerDialog,
  setOpenAddBlockerDialog,
  onAddBlocker,
}) {
  const handleClose = () => setOpenAddBlockerDialog(false);
  const theme = useTheme();

  const [blockerData, setBlockerData] = React.useState({
    story: "",
    description: "",
    severity: "",
    category: "",
    reportedBy: "",
    dueDate: "",
  });

  const handleChange = (field) => (event) => {
    setBlockerData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    if (blockerData.story.trim() && onAddBlocker) {
      onAddBlocker(blockerData);
      // Reset form
      setBlockerData({
        story: "",
        description: "",
        severity: "",
        category: "",
        reportedBy: "",
        dueDate: "",
      });
    }
    handleClose();
  };

  return (
    <Dialog
      open={openAddBlockerDialog}
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
          Add Blocker
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Stack spacing={3} sx={{ mt: 1 }}>
          <Stack>
            <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
              Story
            </Typography>
            <FormControl fullWidth>
              <Select
                value={blockerData.story}
                onChange={handleChange("story")}
                displayEmpty
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <em style={{ color: "#999", fontStyle: "normal" }}>
                        Select story being blocked
                      </em>
                    );
                  }
                  return selected;
                }}
              >
                <MenuItem value="">
                  <em>Select story being blocked</em>
                </MenuItem>
                <MenuItem value="High Fidelity Checkout Mockups">High Fidelity Checkout Mockups</MenuItem>
                <MenuItem value="User Authentication Flow">User Authentication Flow</MenuItem>
                <MenuItem value="Payment Integration">Payment Integration</MenuItem>
                <MenuItem value="Mobile Responsive Design">Mobile Responsive Design</MenuItem>
                <MenuItem value="API Documentation">API Documentation</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Stack>
            <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
              Description
            </Typography>
            <TextField
              placeholder="Detailed description of the blocker and its impact"
              fullWidth
              multiline
              rows={3}
              value={blockerData.description}
              onChange={handleChange("description")}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            <Stack flex={1}>
              <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                Severity
              </Typography>
              <FormControl fullWidth>
                <Select
                  value={blockerData.severity}
                  onChange={handleChange("severity")}
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <em style={{ color: "#999", fontStyle: "normal" }}>
                          Select severity
                        </em>
                      );
                    }
                    return selected;
                  }}
                >
                  <MenuItem value="">
                    <em>Select severity</em>
                  </MenuItem>
                  <MenuItem value="Critical">Critical - Work completely stopped</MenuItem>
                  <MenuItem value="High">High - Significant delay expected</MenuItem>
                  <MenuItem value="Medium">Medium - Minor delay possible</MenuItem>
                  <MenuItem value="Low">Low - Minimal impact</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack flex={1}>
              <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                Category
              </Typography>
              <FormControl fullWidth>
                <Select
                  value={blockerData.category}
                  onChange={handleChange("category")}
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <em style={{ color: "#999", fontStyle: "normal" }}>
                          Select category
                        </em>
                      );
                    }
                    return selected;
                  }}
                >
                  <MenuItem value="">
                    <em>Select category</em>
                  </MenuItem>
                  <MenuItem value="Technical">Technical Issue</MenuItem>
                  <MenuItem value="Resource">Resource Unavailable</MenuItem>
                  <MenuItem value="External Dependency">External Dependency</MenuItem>
                  <MenuItem value="Requirements">Requirements Unclear</MenuItem>
                  <MenuItem value="Infrastructure">Infrastructure/Environment</MenuItem>
                  <MenuItem value="Approval">Waiting for Approval</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Stack flex={1}>
              <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                Reported By
              </Typography>
              <FormControl fullWidth>
                <Select
                  value={blockerData.reportedBy}
                  onChange={handleChange("reportedBy")}
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return (
                        <em style={{ color: "#999", fontStyle: "normal" }}>
                          Who reported this blocker?
                        </em>
                      );
                    }
                    return selected;
                  }}
                >
                  <MenuItem value="">
                    <em>Who reported this blocker?</em>
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
                Target Resolution Date
              </Typography>
              <TextField
                type="date"
                fullWidth
                value={blockerData.dueDate}
                onChange={handleChange("dueDate")}
                InputLabelProps={{
                  shrink: true,
                }}
              />
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
          disabled={!blockerData.story.trim()}
          sx={{
            textTransform: "none",
            "&:disabled": {
              bgcolor: "#e2e8f0",
              color: "#94a3b8",
            },
          }}
        >
          Add Blocker
        </Button>
      </DialogActions>
    </Dialog>
  );
}
