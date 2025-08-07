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
  Card,
  FormControl,
  InputLabel,
  Select,
  useTheme,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
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
    time: null,
    duration: "",
    meetingType: "",
    attendees: "",
    location: "",
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
        time: null,
        duration: "",
        meetingType: "",
        attendees: "",
        location: "",
      });
    }
    handleClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog
        fullScreen
        open={openScheduleMeetingDialog}
        onClose={handleClose}
        PaperProps={{
          sx: {
            bgcolor: "#F5F9FC",
            padding: 0,
          },
        }}
      >
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Typography variant="h2" mb={2}>
            Schedule Meeting
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
                  {/* Meeting Information */}
                  <Box>
                    <Typography
                      variant="h5"
                      fontWeight="600"
                      gutterBottom
                      sx={{ color: "#1e293b", mb: 3 }}
                    >
                      Meeting Information
                    </Typography>

                    <Stack spacing={3}>
                      <Stack>
                        <Typography fontWeight="bold" mb={0.5}>
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
                        <Typography fontWeight="bold" mb={0.5}>
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

                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <Typography fontWeight="bold" mb={0.5}>
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
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <Typography fontWeight="bold" mb={0.5}>
                            Time
                          </Typography>
                          <FormControl fullWidth>
                            <InputLabel>Time</InputLabel>
                            <Select
                              value={meetingData.time}
                              onChange={handleChange("time")}
                              label="Time"
                            >
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
                        </Grid>
                      </Grid>

                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <Typography fontWeight="bold" mb={0.5}>
                            Duration
                          </Typography>
                          <FormControl fullWidth>
                            <InputLabel>Duration</InputLabel>
                            <Select
                              value={meetingData.duration}
                              onChange={handleChange("duration")}
                              label="Duration"
                            >
                              <MenuItem value="15 minutes">15 minutes</MenuItem>
                              <MenuItem value="30 minutes">30 minutes</MenuItem>
                              <MenuItem value="45 minutes">45 minutes</MenuItem>
                              <MenuItem value="1 hour">1 hour</MenuItem>
                              <MenuItem value="1.5 hours">1.5 hours</MenuItem>
                              <MenuItem value="2 hours">2 hours</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <Typography fontWeight="bold" mb={0.5}>
                            Meeting Type
                          </Typography>
                          <FormControl fullWidth>
                            <InputLabel>Meeting Type</InputLabel>
                            <Select
                              value={meetingData.meetingType}
                              onChange={handleChange("meetingType")}
                              label="Meeting Type"
                            >
                              <MenuItem value="Stand-up">Stand-up</MenuItem>
                              <MenuItem value="Sprint Planning">Sprint Planning</MenuItem>
                              <MenuItem value="Sprint Review">Sprint Review</MenuItem>
                              <MenuItem value="Retrospective">Retrospective</MenuItem>
                              <MenuItem value="One-on-One">One-on-One</MenuItem>
                              <MenuItem value="Team Meeting">Team Meeting</MenuItem>
                              <MenuItem value="Client Meeting">Client Meeting</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>

                      <Stack>
                        <Typography fontWeight="bold" mb={0.5}>
                          Attendees
                        </Typography>
                        <TextField
                          placeholder="Enter attendee emails (comma separated)"
                          fullWidth
                          value={meetingData.attendees}
                          onChange={handleChange("attendees")}
                        />
                      </Stack>

                      <Stack>
                        <Typography fontWeight="bold" mb={0.5}>
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
                  </Box>
                </Stack>
              </Card>
            </Grid>

            {/* Preview Panel */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Card
                sx={{
                  background: "#fff",
                  position: "sticky",
                  top: 24,
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="600"
                  gutterBottom
                  sx={{ color: "#1e293b", mb: 3 }}
                >
                  Meeting Preview
                </Typography>

                {/* Meeting Title */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" fontWeight="600" gutterBottom>
                    {meetingData.title || "Meeting Title"}
                  </Typography>
                  {meetingData.description && (
                    <Typography variant="body2" color="#64748b" sx={{ mb: 2 }}>
                      {meetingData.description}
                    </Typography>
                  )}
                </Box>

                {/* Meeting Details */}
                <Stack spacing={2}>
                  {(meetingData.date || meetingData.time) && (
                    <Box>
                      <Typography variant="subtitle2" color="#64748b" gutterBottom>
                        Date & Time
                      </Typography>
                      <Typography variant="body2">
                        {meetingData.date ? dayjs(meetingData.date).format("MMMM D, YYYY") : "Date not set"}
                        {meetingData.time && ` at ${meetingData.time}`}
                      </Typography>
                    </Box>
                  )}

                  {meetingData.duration && (
                    <Box>
                      <Typography variant="subtitle2" color="#64748b" gutterBottom>
                        Duration
                      </Typography>
                      <Typography variant="body2">{meetingData.duration}</Typography>
                    </Box>
                  )}

                  {meetingData.meetingType && (
                    <Box>
                      <Typography variant="subtitle2" color="#64748b" gutterBottom>
                        Meeting Type
                      </Typography>
                      <Typography variant="body2">{meetingData.meetingType}</Typography>
                    </Box>
                  )}

                  {meetingData.attendees && (
                    <Box>
                      <Typography variant="subtitle2" color="#64748b" gutterBottom>
                        Attendees
                      </Typography>
                      <Typography variant="body2">{meetingData.attendees}</Typography>
                    </Box>
                  )}

                  {meetingData.location && (
                    <Box>
                      <Typography variant="subtitle2" color="#64748b" gutterBottom>
                        Location
                      </Typography>
                      <Typography variant="body2">{meetingData.location}</Typography>
                    </Box>
                  )}
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* Action Buttons */}
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
                disabled={!meetingData.title.trim()}
                startIcon="📅"
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
            </Box>
          </Container>
        </Box>
      </Dialog>
    </LocalizationProvider>
  );
}
