import Heading3 from "./Heading3";

interface ScreenshotProps {
  goal: string;
}

function Screenshot({ goal }: ScreenshotProps) {
  const services = [
    {
      goal: "productivity",
      services: [
        "Time management assistance",
        "Task prioritization guidance",
        "Workflow optimization strategies",
        "Proactive reminders and alerts",
        "Virtual meeting scheduling and coordination",
        "Personalized productivity tools recommendations",
        "Email and calendar management support",
        "Collaboration platform setup and maintenance",
        "Streamlining communication channels",
        "Document organization and version control",
      ],
    },
    {
      goal: "streamline",
      services: [
        "Automation of repetitive tasks",
        "Standard operating procedure (SOP) creation",
        "Task delegation strategies and recommendations",
        "Workflow analysis and optimization",
        "Integration of task management tools",
        "Centralized task tracking and monitoring",
        "Real-time task status updates",
        "Streamlined approval processes",
        "Document and file management solutions",
        "Cross-platform task synchronization",
      ],
    },
    {
      goal: "welcome",
      services: [
        "Client onboarding assistance",
        "Personalized welcome packages creation",
        "Customized client communication templates",
        "Dedicated client inquiry response management",
        "Virtual receptionist services",
        "Client appointment scheduling and reminders",
        "Client database management and organization",
        "Follow-up communication and feedback collection",
        "Client satisfaction surveys implementation",
        "Loyalty program management and engagement",
      ],
    },
    {
      goal: "organization",
      services: [
        "Digital and physical workspace organization",
        "Filing system setup and maintenance",
        "Calendar synchronization and management",
        "Task categorization and labeling",
        "Time blocking and scheduling strategies",
        "Information and document retrieval assistance",
        "Cloud storage setup and organization",
        "Inbox decluttering and email management",
        "Project management platform customization",
        "Mind mapping and brainstorming facilitation",
      ],
    },
  ];
  return (
    <div className="bg-sage text-white">
      {/* {services.filter((goal) => goal === goal)}; */}
      {/* {services.map((goal) => {
        return (
          <>
            <Heading3>
              {goal.goal[0].toUpperCase() + goal.goal.slice(1)}
            </Heading3>
            <ul className="list-disc">
              {goal.services.map((service) => (
                <li>{service}</li>
              ))}
            </ul>
          </>
        );
      })} */}
    </div>
  );
}

export default Screenshot;
