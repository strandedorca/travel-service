import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading3 from "./Heading3";

interface ServicesProps {
  goal: string;
}

function Services({ goal }: ServicesProps) {
  const services = [
    {
      goal: "productivity",
      title: "Increase productivity with...",
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
      title: "Streamline tasks with...",
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
      title: "Welcome client with...",
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
      title: "Stay organized with...",
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
    <div className="bg-sage text-white p-16">
      {services
        .filter((item) => item.goal === goal)
        .map((goal) => {
          return (
            <>
              <Heading3>{goal.title}</Heading3>
              <ul className="list-inside mt-10">
                {goal.services.map((service) => (
                  <li className="mt-3 ml-6">
                    <FontAwesomeIcon icon="circle-check" className="mr-5" />
                    {service}
                  </li>
                ))}
              </ul>
            </>
          );
        })}
    </div>
  );
}

export default Services;
