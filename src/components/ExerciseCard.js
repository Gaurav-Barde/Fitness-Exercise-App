import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ExerciseCard({ exercise }) {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button sx={styles.button}>{exercise.bodyPart}</Button>
        <Button sx={[styles.button, { backgroundColor: "#fcc757" }]}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="black"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="18px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
}

const styles = {
  button: {
    ml: "21px",
    color: "#fff",
    background: "#ffa9a9",
    fontSize: "14px",
    borderRadius: "20px",
    textTransform: "capitalize",
  },
};

export default ExerciseCard;
