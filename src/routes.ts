import { SwaggerRouter } from "koa-swagger-decorator";
import user from "./controller";

const userRoutes = new SwaggerRouter();

userRoutes.get("/users", user.getUsers);
userRoutes.get("/users/:id", user.getUser);
userRoutes.post("/users", user.createUser);
userRoutes.put("/users/:id", user.updateUser);
userRoutes.delete("/users/:id", user.deleteUser);
userRoutes.delete("/testusers", user.deleteTestUsers);

export default userRoutes;
