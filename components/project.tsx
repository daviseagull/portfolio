import { Badge } from "./ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type ProjectProps = {
  title: string;
  description: string;
  stack: string[];
};

export default function Project({ title, description, stack }: ProjectProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-justify">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex gap-2">
          {stack.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
