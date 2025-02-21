import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import userController from "./controllers/UserController"
import courseController from "./controllers/CourseController";
import reviewController from "./controllers/ReviewController";

const app = new Elysia();

app.use(
  swagger({
    path: "/docs",
    documentation: {
      info: { title: "Nisit Com Sci", version: "1.0.0" },
      tags: [
        { name: "User", description: "User endpoint" },
        { name: "Course", description: "Course endpoint" },
        { name: "Review", description: "Review endpoint" },
      ],
    },
  })
);


app.use(userController);
app.use(courseController);
app.use(reviewController);

app.listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );