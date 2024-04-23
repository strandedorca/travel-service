import { useState } from "react";
import Button from "./Button";
import Heading3 from "./Heading3";

interface GoalsProps {
  onChooseGoal: (goal: string) => void;
}

function Goals({ onChooseGoal }: GoalsProps) {
  const [chosenGoal, setChosenGoal] = useState("productivity");
  const goals = [
    {
      key: "productivity",
      content: "Enhance productivity",
    },
    {
      key: "streamline",
      content: "Streamline tasks",
    },
    {
      key: "welcome",
      content: "Welcome clients",
    },
    {
      key: "organization",
      content: "Stay organized",
    },
  ];
  return (
    <div className="p-10 relative">
      <Heading3 className="text-center">
        Experience the power of seamless virtual assistance
      </Heading3>
      <p className="my-6">
        Choose your virtual assistance goal and explore from a diverse range of
        efficient solutions.
      </p>
      <div className="my-4 flex flex-wrap gap-4 justify-center mb-6">
        {goals.map((goal) => {
          return (
            <Button
              key={goal.key}
              onClick={() => {
                setChosenGoal(goal.key);
                onChooseGoal(goal.key);
              }}
              className={`rounded-lg
              ${
                chosenGoal === goal.key
                  ? "bg-midnight text-white animate-none active:animate-none"
                  : "bg-transparent"
              }`}
            >
              {goal.content}
            </Button>
          );
        })}
      </div>

      <div className="text-right">
        <Button>Get started</Button>
      </div>
    </div>
  );
}

export default Goals;
