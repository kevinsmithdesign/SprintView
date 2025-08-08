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
  Select,
  useTheme,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function ScheduleMeetingDialog({
  openScheduleMeetingDialog,
  setOpenScheduleMeetingDialog,
  onScheduleMeeting,
}) {
  const handleClose = () => setOpenScheduleMeetingDialog(false);
  const theme = useTheme();

  const [meetingData, setMeetingData] = React.useState({
    title: "",
    description: "",
    date: null,
    time: "",
    duration: "",
    meetingType: "",
    attendees: "",
    location: "",
    color: "#3B82F6", // Default blue color
  });

  const handleChange = (field) => (event) => {
    setMeetingData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleDateTimeChange = (field) => (value) => {
    setMeetingData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (meetingData.title.trim() && onScheduleMeeting) {
      onScheduleMeeting(meetingData);
      // Reset form
      setMeetingData({
        title: "",
        description: "",
        date: null,
        time: "",
        duration: "",
        meetingType: "",
        attendees: "",
        location: "",
        color: "#3B82F6",
      });
    }
    handleClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog
        open={openScheduleMeetingDialog}
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
            Schedule Meeting
          </Typography>
        </DialogTitle>

        <DialogContent>
          <Stack spacing={3} sx={{ mt: 1 }}>
            <Stack>
              <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                Meeting Title
              </Typography>
              <TextField
                placeholder="Enter meeting title"
                fullWidth
                required
                value={meetingData.title}
                onChange={handleChange("title")}
              />
            </Stack>

            <Stack>
              <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                Description
              </Typography>
              <TextField
                placeholder="Enter meeting description"
                fullWidth
                multiline
                rows={3}
                value={meetingData.description}
                onChange={handleChange("description")}
              />
            </Stack>

            <Stack direction="row" spacing={2}>
              <Stack flex={1}>
                <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                  Date
                </Typography>
                <DatePicker
                  value={meetingData.date}
                  onChange={handleDateTimeChange("date")}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      placeholder: "Select date",
                    },
                  }}
                />
              </Stack>
              <Stack flex={1}>
                <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                  Time
                </Typography>
                <FormControl fullWidth>
                  <Select
                    value={meetingData.time}
                    onChange={handleChange("time")}
                    displayEmpty
                    renderValue={(selected) => {
                      if (!selected) {
                        return (
                          <em style={{ color: "#999", fontStyle: "normal" }}>
                            Select time
                          </em>
                        );
                      }
                      return selected;
                    }}
                  >
                    <MenuItem value="">
                      <em>Select time</em>
                    </MenuItem>
                    <MenuItem value="09:00 AM">9:00 AM</MenuItem>
                    <MenuItem value="09:30 AM">9:30 AM</MenuItem>
                    <MenuItem value="10:00 AM">10:00 AM</MenuItem>
                    <MenuItem value="10:30 AM">10:30 AM</MenuItem>
                    <MenuItem value="11:00 AM">11:00 AM</MenuItem>
                    <MenuItem value="11:30 AM">11:30 AM</MenuItem>
                    <MenuItem value="12:00 PM">12:00 PM</MenuItem>
                    <MenuItem value="12:30 PM">12:30 PM</MenuItem>
                    <MenuItem value="01:00 PM">1:00 PM</MenuItem>
                    <MenuItem value="01:30 PM">1:30 PM</MenuItem>
                    <MenuItem value="02:00 PM">2:00 PM</MenuItem>
                    <MenuItem value="02:30 PM">2:30 PM</MenuItem>
                    <MenuItem value="03:00 PM">3:00 PM</MenuItem>
                    <MenuItem value="03:30 PM">3:30 PM</MenuItem>
                    <MenuItem value="04:00 PM">4:00 PM</MenuItem>
                    <MenuItem value="04:30 PM">4:30 PM</MenuItem>
                    <MenuItem value="05:00 PM">5:00 PM</MenuItem>
                    <MenuItem value="05:30 PM">5:30 PM</MenuItem>
                    <MenuItem value="06:00 PM">6:00 PM</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2}>
              <Stack flex={1}>
                <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                  Duration
                </Typography>
                <FormControl fullWidth>
                  <Select
                    value={meetingData.duration}
                    onChange={handleChange("duration")}
                    displayEmpty
                    renderValue={(selected) => {
                      if (!selected) {
                        return (
                          <em style={{ color: "#999", fontStyle: "normal" }}>
                            Select duration
                          </em>
                        );
                      }
                      return selected;
                    }}
                  >
                    <MenuItem value="">
                      <em>Select duration</em>
                    </MenuItem>
                    <MenuItem value="15 minutes">15 minutes</MenuItem>
                    <MenuItem value="30 minutes">30 minutes</MenuItem>
                    <MenuItem value="45 minutes">45 minutes</MenuItem>
                    <MenuItem value="1 hour">1 hour</MenuItem>
                    <MenuItem value="1.5 hours">1.5 hours</MenuItem>
                    <MenuItem value="2 hours">2 hours</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack flex={1}>
                <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                  Meeting Type
                </Typography>
                <FormControl fullWidth>
                  <Select
                    value={meetingData.meetingType}
                    onChange={handleChange("meetingType")}
                    displayEmpty
                    renderValue={(selected) => {
                      if (!selected) {
                        return (
                          <em style={{ color: "#999", fontStyle: "normal" }}>
                            Select meeting type
                          </em>
                        );
                      }
                      return selected;
                    }}
                  >
                    <MenuItem value="">
                      <em>Select meeting type</em>
                    </MenuItem>
                    <MenuItem value="Stand-up">Stand-up</MenuItem>
                    <MenuItem value="Sprint Planning">Sprint Planning</MenuItem>
                    <MenuItem value="Sprint Review">Sprint Review</MenuItem>
                    <MenuItem value="Retrospective">Retrospective</MenuItem>
                    <MenuItem value="One-on-One">One-on-One</MenuItem>
                    <MenuItem value="Team Meeting">Team Meeting</MenuItem>
                    <MenuItem value="Client Meeting">Client Meeting</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={2}>
              <Stack flex={1}>
                <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                  Attendees
                </Typography>
                <TextField
                  placeholder="Enter attendee emails (comma separated)"
                  fullWidth
                  value={meetingData.attendees}
                  onChange={handleChange("attendees")}
                />
              </Stack>
              <Stack flex={1}>
                <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                  Location/Link
                </Typography>
                <TextField
                  placeholder="Enter meeting location or video link"
                  fullWidth
                  value={meetingData.location}
                  onChange={handleChange("location")}
                />
              </Stack>
            </Stack>

            <Stack>
              <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                Meeting Color
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {[
                  { name: "Blue", value: "#3B82F6" },
                  { name: "Green", value: "#10B981" },
                  { name: "Purple", value: "#8B5CF6" },
                  { name: "Orange", value: "#F59E0B" },
                  { name: "Red", value: "#EF4444" },
                  { name: "Pink", value: "#EC4899" },
                  { name: "Teal", value: "#14B8A6" },
                  { name: "Indigo", value: "#6366F1" },
                ].map((color) => (
                  <Box
                    key={color.value}
                    onClick={() => setMeetingData(prev => ({ ...prev, color: color.value }))}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 1,
                      bgcolor: color.value,
                      cursor: "pointer",
                      border: meetingData.color === color.value ? "3px solid #1f2937" : "2px solid transparent",
                      transition: "all 0.2s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                    title={color.name}
                  />
                ))}
              </Box>
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
            disabled={!meetingData.title.trim()}
            sx={{
              textTransform: "none",
              "&:disabled": {
                bgcolor: "#e2e8f0",
                color: "#94a3b8",
              },
            }}
          >
            Schedule Meeting
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
}
