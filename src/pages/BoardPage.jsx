import React, { useState } from "react";
import { useNavigate } from "react-router";
import dayjs from "dayjs";
import { Grid, Container, Box, Typography, Card } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import TeamViewCard from "../components/TeamViewCard";
import QuickActions from "../components/QuickActions";
import TaskCard from "../components/TaskCard";

import User1 from "../assets/images/Users/User1.jpg";
import User2 from "../assets/images/Users/User2.jpg";
import User3 from "../assets/images/Users/User3.jpg";
import User4 from "../assets/images/Users/User4.jpg";
import User5 from "../assets/images/Users/User5.jpg";
import User6 from "../assets/images/Users/User6.jpg";

import AddIcon from "../assets/icons/AddIcon";
import AddMeetingIcon from "../assets/icons/AddMeetingIcon";
import FilterIcon from "../assets/icons/FilterIcon";
import ArrowUpLeftIcon from "../assets/icons/ArrowUpLeftIcon";
import DropdownIcon from "../assets/icons/DropdownIcon";
import PlanningPokerIcon from "../assets/icons/PlanningPokerIcon";
import WarningCircleIcon from "../assets/icons/WarningCircleIcon";
import FireIcon from "../assets/icons/FireIcon";

import CreateStoryDialog from "../components/CreateStoryDialog";
import ScheduleMeetingDialog from "../components/ScheduleMeetingDialog";
import AddBlockerDialog from "../components/AddBlockerDialog";

const BoardPage = ({ onAddMeeting }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("sprint");
  const [openCreateStoryDialog, setOpenCreateStoryDialog] = useState(false);
  const [openScheduleMeetingDialog, setOpenScheduleMeetingDialog] =
    useState(false);
  const [openAddBlockerDialog, setOpenAddBlockerDialog] = useState(false);
  const [stories, setStories] = useState([
    {
      id: 1,
      title: "High Fidelity Checkout Mockups",
      commentCount: "2",
      label: "UI Design",
      variant: "ui-design",
      avatars: [
        { src: User6, alt: "User 6" },
        { src: User1, alt: "User 1" },
      ],
      status: "TODO",
    },
    {
      id: 2,
      title: "High Fidelity Checkout Mockups",
      commentCount: "2",
      label: "UI Design",
      variant: "ui-design",
      avatars: [{ src: User6, alt: "User 6" }],
      status: "TODO",
    },
    {
      id: 3,
      title: "High Fidelity Checkout Mockups",
      commentCount: "2",
      label: "UI Design",
      variant: "ui-design",
      avatars: [
        { src: User4, alt: "User 4" },
        { src: User2, alt: "User 2" },
      ],
      status: "TODO",
    },
  ]);

  const createStoryBtn = () => {
    setOpenCreateStoryDialog(true);
  };

  const scheduleMeetingBtn = () => {
    setOpenScheduleMeetingDialog(true);
  };

  const planningPokerBtn = () => {
    console.log("planning poker btn");
  };

  const addBlockerBtn = () => {
    setOpenAddBlockerDialog(true);
  };

  const retroBoardBtn = () => {
    console.log("retro board");
  };

  const filterBoardBtn = () => {
    console.log("filter board");
  };

  const handleCreateStory = (storyData) => {
    const newStory = {
      id: Date.now(), // Simple ID generation
      title: storyData.title,
      commentCount: "0",
      label: storyData.role || "General",
      variant: storyData.role
        ? storyData.role.toLowerCase().replace(/[^a-z0-9]/g, "-")
        : "general",
      avatars: storyData.assignee
        ? [{ src: User1, alt: storyData.assignee }]
        : [],
      status: storyData.timeline === "Backlog" ? "BACKLOG" : "TODO",
      description: storyData.description,
      priority: storyData.priority,
      points: storyData.points,
      timeline: storyData.timeline,
    };

    // Add new story to the beginning of the array (top of list)
    setStories((prevStories) => [newStory, ...prevStories]);
  };

  const handleScheduleMeeting = (meetingData) => {
    console.log("Meeting scheduled:", meetingData);
    // Add meeting to the centralized state via the callback
    if (onAddMeeting) {
      onAddMeeting(meetingData);
    }
  };

  const handleAddBlocker = (blockerData) => {
    console.log("Blocker added:", blockerData);
    // Here you could add the blocker to your state or send to API
    // For now, we'll just log it
  };

  const meetings = [
    {
      id: 1,
      title: "Create Story",
      link: "",
      iconColor: "#77B8A0",
      icon: <AddIcon />,
      onClick: createStoryBtn,
    },
    {
      id: 2,
      title: "Schedule Meeting",
      link: "",
      iconColor: "#B6BAEA",
      icon: <AddMeetingIcon />,
      onClick: scheduleMeetingBtn,
    },
    {
      id: 3,
      title: "Planning Poker",
      link: "",
      iconColor: "#FED2D7",
      icon: <PlanningPokerIcon />,
      onClick: planningPokerBtn,
    },
  ];

  const other = [
    {
      id: 3,
      title: "Add Blocker",
      link: "",
      iconColor: "#F16362",
      icon: <WarningCircleIcon />,
      onClick: addBlockerBtn,
    },
    {
      id: 1,
      title: "Retro Board",
      link: "",
      iconColor: "#F7946F",
      icon: <FireIcon />,
      onClick: retroBoardBtn,
    },
    {
      id: 2,
      title: "Filter Board",
      link: "",
      iconColor: "#FCD98E",
      icon: <FilterIcon />,
      onClick: filterBoardBtn,
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container>
          <Card sx={{ mb: 2 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <TeamViewCard
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <Card sx={{ background: "#fff" }}>
                  <Typography fontWeight="bold" mb={1.5}>
                    SPRINT PLANNING
                  </Typography>
                  {meetings.map(
                    ({
                      id,
                      meetings,
                      title,
                      link,
                      iconColor,
                      icon,
                      onClick,
                    }) => (
                      <QuickActions
                        id={id}
                        meetings={meetings}
                        title={title}
                        link={link}
                        iconColor={iconColor}
                        icon={icon}
                        onClick={onClick}
                      />
                    )
                  )}
                </Card>
              </Grid>
              <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <Card sx={{ background: "#fff" }}>
                  <Typography fontWeight="bold" mb={1.5}>
                    SPRINT ACTIONS
                  </Typography>
                  {other.map(
                    ({
                      id,
                      meetings,
                      title,
                      link,
                      iconColor,
                      icon,
                      onClick,
                    }) => (
                      <QuickActions
                        id={id}
                        meetings={meetings}
                        title={title}
                        link={link}
                        iconColor={iconColor}
                        icon={icon}
                        onClick={onClick}
                      />
                    )
                  )}
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Container>
        <Box
          sx={{
            background: "#F5F9FC",
            py: 4,
            flex: 1,
          }}
        >
          {activeTab === "sprint" ? (
            <Container>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <Typography fontWeight="bold" mb={1.5}>
                    TODO
                  </Typography>
                  {stories
                    .filter((story) => story.status === "TODO")
                    .map((story) => (
                      <TaskCard
                        key={story.id}
                        title={story.title}
                        commentCount={story.commentCount}
                        label={story.label}
                        variant={story.variant}
                        avatars={story.avatars}
                      />
                    ))}
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <Typography fontWeight="bold" mb={1.5}>
                    IN PROGRESS
                  </Typography>
                  <TaskCard
                    title="High Fidelity Checkout Mockups"
                    commentCount="2"
                    label="UX Design"
                    variant="ux-design"
                    avatars={[
                      { src: User3, alt: "User 3" },
                      { src: User2, alt: "User 2" },
                    ]}
                  />
                  <TaskCard
                    title="High Fidelity Checkout Mockups"
                    commentCount="2"
                    label="UI Design"
                    variant="ui-design"
                    avatars={[
                      { src: User6, alt: "User 6" },
                      { src: User2, alt: "User 2" },
                      { src: User5, alt: "User 5" },
                    ]}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <Typography fontWeight="bold" mb={1.5}>
                    REVIEW
                  </Typography>
                  <TaskCard
                    title="High Fidelity Checkout Mockups"
                    commentCount="2"
                    label="Front-End"
                    variant="front-end"
                    avatars={[
                      { src: User6, alt: "User 6" },
                      { src: User3, alt: "User 3" },
                      { src: User5, alt: "User 5" },
                    ]}
                  />
                  <TaskCard
                    title="High Fidelity Checkout Mockups"
                    commentCount="2"
                    label="UI Design"
                    variant="ui-design"
                    avatars={[
                      { src: User1, alt: "User 1" },
                      { src: User2, alt: "User 2" },
                    ]}
                  />
                  <TaskCard
                    title="High Fidelity Checkout Mockups"
                    commentCount="2"
                    label="UI Design"
                    variant="ui-design"
                    avatars={[{ src: User3, alt: "User 3" }]}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <Typography fontWeight="bold" mb={1.5}>
                    DONE
                  </Typography>
                  <TaskCard
                    title="High Fidelity Checkout Mockups"
                    commentCount="2"
                    label="Back-End"
                    variant="back-end"
                    avatars={[{ src: User6, alt: "User 6" }]}
                  />
                  <TaskCard
                    title="High Fidelity Checkout Mockups"
                    commentCount="2"
                    label="UI Design"
                    variant="ui-design"
                    avatars={[
                      { src: User3, alt: "User 3" },
                      { src: User2, alt: "User 2" },
                    ]}
                  />
                  <TaskCard
                    title="High Fidelity Checkout Mockups"
                    commentCount="2"
                    label="UI Design"
                    variant="ui-design"
                    avatars={[
                      { src: User1, alt: "User 1" },
                      { src: User2, alt: "User 2" },
                    ]}
                  />
                </Grid>
              </Grid>
            </Container>
          ) : (
            <Container>
              {stories
                .filter((story) => story.status === "BACKLOG")
                .map((story) => (
                  <TaskCard
                    key={story.id}
                    title={story.title}
                    commentCount={story.commentCount}
                    label={story.label}
                    variant={story.variant}
                    avatars={story.avatars}
                  />
                ))}
              {/* Show default tasks if no backlog stories */}
              {stories.filter((story) => story.status === "BACKLOG").length ===
                0 && (
                <>
                  <Card sx={{ background: "white", mb: 0.5 }}>Task 1</Card>
                  <Card sx={{ background: "white", mb: 0.5 }}>Task 2</Card>
                  <Card sx={{ background: "white", mb: 0.5 }}>Task 3</Card>
                </>
              )}
            </Container>
          )}
        </Box>
      </LocalizationProvider>

      {openCreateStoryDialog && (
        <CreateStoryDialog
          openCreateStoryDialog={openCreateStoryDialog}
          setOpenCreateStoryDialog={setOpenCreateStoryDialog}
          onCreateStory={handleCreateStory}
        />
      )}

      {openScheduleMeetingDialog && (
        <ScheduleMeetingDialog
          openScheduleMeetingDialog={openScheduleMeetingDialog}
          setOpenScheduleMeetingDialog={setOpenScheduleMeetingDialog}
          onScheduleMeeting={handleScheduleMeeting}
        />
      )}

      {openAddBlockerDialog && (
        <AddBlockerDialog
          openAddBlockerDialog={openAddBlockerDialog}
          setOpenAddBlockerDialog={setOpenAddBlockerDialog}
          onAddBlocker={handleAddBlocker}
        />
      )}
    </Box>
  );
};

export default BoardPage;
