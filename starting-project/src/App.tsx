import Header from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg';
import CourseGoals from "./components/CourseGoals.tsx";
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";

function App() {
  const [goals, setGoals] = useState(
    [
      {id: 1, title: 'Learn TS', description: 'Learn TS from the ground up'},
      {id: 2, title: 'Practice TS', description: 'Practice working with TypeScript'}
    ]
  );

  const handleDelete = (id : number) => {
    setGoals(prevGoals => prevGoals.filter( goal => goal.id !== id))
  }

  const handleAddGoal = (text: string, summary: string) => {
    setGoals((prevGoals) =>
      prevGoals.concat(({id: Math.random(), title: text, description: summary}))
    )
  }

  return (
    <main>
        <Header image={{src: goalsImg, alt: 'A list of goals'}}>
          <h1>Your course goals</h1>
        </Header>
        <NewGoal onAdd={handleAddGoal}/>
        <CourseGoals goals={goals} onDelete={handleDelete}/>
    </main>
  )
}

export default App
