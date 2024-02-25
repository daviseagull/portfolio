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
        <CardTitle className="lg:text-2xl">{title}</CardTitle>
        <CardDescription className="text-justify lg:text-lg">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex gap-2">
          {stack.map((skill) => (
            <Badge className="lg:text-base" key={skill}>
              {skill}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
