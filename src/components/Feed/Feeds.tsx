import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Feed from "./Feed";
import { Container } from "@mui/system";
import Employee from "./Employee";
import { SelectChangeEvent } from "@mui/material/Select";
import useStyles from "./Style";

function Feeds() {
  const classes = useStyles();
  const [feeds, setFeeds] = React.useState([
    {
      initials: "SB",
      username: "Shivangi Bhatt",
      date: "Februrary 28, 2022",
      image: "./assets/Post.png",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
      tags: ["Tag1", "Tag2", "Tag3"],
      type: "Social",
      shortQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    },
    {
      initials: "HB",
      username: "Hardik Bhatt",
      date: "Februrary 28, 2022",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
      tags: ["Tag1", "Tag2", "Tag3"],
      type: "Technical",
      shortQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    },
    {
      initials: "DS",
      username: "Donna Singh",
      date: "Februrary 29, 2022",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
      tags: ["Tag1", "Tag2", "Tag3"],
      type: "Social",
      shortQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    },
    {
      initials: "AS",
      username: "Aadesh Shah",
      date: "January 28, 2022",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
      tags: ["Tag1", "Tag2", "Tag3"],
      type: "Technical",
      shortQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    },
    {
      initials: "BS",
      username: "Bhushan Singh",
      date: "Februrary 28, 2022",
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet tellus vel cursus luctus. Cras molestie lacus auctor, volutpat felis et, bibendum ipsum. Praesent tincidunt consequat enim et aliquam. Cras tempor orci vel lorem imperdiet, at egestas ipsum tempus. Aenean nec felis tristique, congue sem quis, euismod leo.",
      tags: ["Tag1", "Tag2", "Tag3"],
      type: "Technical",
      shortQuestion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    },
  ]);
  const [employees, setEmployees] = React.useState([
    {
      username: "Shivangi Bhatt",
      image: "./assets/userImage.jpg",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet",
      score: 100,
      badge: "Gold",
    },

    {
      username: "Raj Patel",
      image: "./assets/userImage.jpg",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet",
      score: 90,
      badge: "Gold",
    },

    {
      username: "Donna Singh",
      image: "./assets/userImage.jpg",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet",
      score: 80,
      badge: "Silver",
    },
  ]);

  const [filter, setFilter] = useState("");

  const handleFilterChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <div className={classes.flex}>
              <Typography
                variant="h5"
                component="div"
                style={{ margin: "20px" }}
              >
                My Feed{" "}
              </Typography>
              {/* The below code was referred from https://mui.com/material-ui/react-menu/#max-height-menu */}
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Filter
                </InputLabel>
                <Select
                  value={filter}
                  onChange={handleFilterChange}
                  label="Filter"
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value={"hotTopics"}>Hot Topics</MenuItem>
                  <MenuItem value={"social"}>Social</MenuItem>
                  <MenuItem value={"technical"}>Technical</MenuItem>
                  <MenuItem value={"subscribed"}>Subscribed</MenuItem>
                </Select>
              </FormControl>
            </div>
            {feeds.map((feed: any) => (
              <Feed {...feed} />
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="div" style={{ margin: "20px" }}>
              Star Employees{" "}
            </Typography>
            {employees.map((employee: any) => (
              <Employee {...employee} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default Feeds;