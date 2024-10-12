// src/components/WorkoutLog.js
import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { auth } from "../firebaseConfig";

const WorkoutLog = () => {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");

  const user = auth.currentUser;

  const addWorkout = async () => {
    await addDoc(collection(db, "workouts"), {
      userId: user.uid,
      exercise,
      duration,
      date: new Date(),
    });
    fetchWorkouts(); // Refresh workouts list
  };

  const fetchWorkouts = async () => {
    const q = query(collection(db, "workouts"), where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    setWorkouts(querySnapshot.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    if (user) {
      fetchWorkouts();
    }
  }, [user]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Add Workout</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Duration (mins)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addWorkout}
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Add Workout
        </button>
      </div>

      <h2 className="text-2xl font-bold mt-8">Your Workouts</h2>
      <ul className="mt-4 space-y-2">
        {workouts.map((workout, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <strong>{workout.exercise}</strong> - {workout.duration} mins on{" "}
            {workout.date.toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutLog;
