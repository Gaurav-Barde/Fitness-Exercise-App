import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ exerciseTargetMuscles, exerciseEquipments }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }} mb="60px">
        {exerciseTargetMuscles.length ? (
          <HorizontalScrollBar data={exerciseTargetMuscles} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h3" mb="33px">
        Exercises that target the same equipments
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {exerciseEquipments.length ? (
          <HorizontalScrollBar data={exerciseEquipments} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
