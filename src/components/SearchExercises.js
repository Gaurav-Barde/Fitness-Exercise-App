import React, { useState, useEffect } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    console.log("lll");
    if (search) {
      const excerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      console.log(excerciseData);
    }
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"} p="20px" mt="37px">
      <Typography
        fontWeight={700}
        textAlign="center"
        mb="50px"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position={"relative"} mb={"72px"}>
        <TextField
          sx={{
            input: {
              fontWeight: 700,
              border: "none",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#FFF",
            borderRadius: "40px",
          }}
          placeholder="Search Excercises"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#FF2625",
            color: "#FFF",
            width: { lg: "175px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          onClick={() => handleSearch()}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
