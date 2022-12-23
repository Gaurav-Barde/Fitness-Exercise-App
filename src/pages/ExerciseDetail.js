import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import {
  exerciseOptions,
  fetchData,
  youtubeVideosOptions,
} from "../utils/fetchData";
import { useParams } from "react-router-dom";

function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [exerciseTargetMuscles, setExerciseTargetMuscles] = useState([]);
  const [exerciseEquipments, setExerciseEquipments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

      const youtubeSearchDbUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchDbUrl}/search?query=${exerciseDetailData.name}`,
        youtubeVideosOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const exerciseTargetMuscleData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setExerciseTargetMuscles(exerciseTargetMuscleData);

      const exerciseEquipmentData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setExerciseEquipments(exerciseEquipmentData);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        exerciseTargetMuscles={exerciseTargetMuscles}
        exerciseEquipments={exerciseEquipments}
      />
    </Box>
  );
}

export default ExerciseDetail;
