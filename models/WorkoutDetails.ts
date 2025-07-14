export interface WorkoutDetails {
  id: string;
  name: string;
  exercises: WorkoutExerciseDetails[];
}

export interface WorkoutExerciseDetails {
  id: string;
  workoutId: string;
  name: string;
  sets: WorkoutSetDetails[];
}

export interface WorkoutSetDetails {
  id: string;
  exerciseId: string;
  weight: number;
  reps: number;
}
