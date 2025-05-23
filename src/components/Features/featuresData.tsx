import { Feature } from "@/types/feature";
import { IconRobot, IconBrain, IconEye, IconLanguage } from "@tabler/icons-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <IconRobot className="h-10 w-10" />,
    title: "Embodied AI",
    paragraph:
      "Developing robots and agents that can interact with the physical world through perception, reasoning, and action.",
  },
  {
    id: 2,
    icon: <IconBrain className="h-10 w-10" />,
    title: "General Intelligence",
    paragraph:
      "Researching approaches to achieve human-like general intelligence through integrated learning and reasoning systems.",
  },
  {
    id: 3,
    icon: <IconEye className="h-10 w-10" />,
    title: "Computer Vision",
    paragraph:
      "Advancing visual perception capabilities for robust scene understanding and object recognition in complex environments.",
  },
  {
    id: 4,
    icon: <IconLanguage className="h-10 w-10" />,
    title: "Language Understanding",
    paragraph:
      "Building systems that can understand and generate natural language for effective human-robot interaction.",
  },
];

export default featuresData;
