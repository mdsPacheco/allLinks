import express from "express";
import validate from "../Middleware/auth";

import {
  Creat,
  List,
  Login,
  Refresh,
  Update,
} from "../Controllers/User/UserCore";
import {
  Creat_and_Index as Creat_and_Index_User_Type,
  Update_and_Index as Update_and_Index_User_Type,
  Delete_and_Index as Delete_and_Index_User_Type,
  Index as Index_User_Type,
} from "../Controllers/UserType/UserType";

import {
  Creat_and_Index as Creat_and_Index_Rout,
  Update_and_Index as Update_and_Index_Rout,
  Delete_and_Index as Delete_and_Index_Rout,
  Index as Index_Rout,
} from "../Controllers/Routs/Routs";

import {
  Creat_and_Index_By_User as Creat_and_Index_By_User_UserAndRouts,
  Delete_and_Index_By_User as Delete_and_Index_By_User_UserAndRouts,
  IndexBy_By_User as IndexBy_By_User_UserAndRouts,
} from "../Controllers/UserAndRouts/UserAndRouts";
import {
  Create_Page,
  Delete_Page,
  Index_Page,
  Index_Page_Url,
  Update_Page,
} from "../Controllers/PageClient/Page";
import {
  Create_Link,
  Delete_Link,
  Index_Link,
  Update_Link,
} from "../Controllers/Links/Links";

const routes = express.Router();

routes.get("/Index_Page_Url/:url_path", Index_Page_Url);

routes.post("/User", Creat);
routes.get("/User", List);
routes.put("/User", Update);
routes.post("/User_Login", Login);

routes.post("/Creat_and_Index_User_Type", Creat_and_Index_User_Type);
routes.put("/Update_and_Index_User_Type", Update_and_Index_User_Type);
routes.delete("/Delete_and_Index_User_Type", Delete_and_Index_User_Type);
routes.get("/Index_User_Type", Index_User_Type);

routes.post("/Creat_and_Index_Rout", Creat_and_Index_Rout);
routes.put("/Update_and_Index_Rout", Update_and_Index_Rout);
routes.delete("/Delete_and_Index_Rout", Delete_and_Index_Rout);
routes.get("/Index_Rout", Index_Rout);

routes.post(
  "/Creat_and_Index_By_User_UserAndRouts",
  Creat_and_Index_By_User_UserAndRouts
);
routes.delete(
  "/Delete_and_Index_By_User_UserAndRouts",
  Delete_and_Index_By_User_UserAndRouts
);
routes.post("/IndexBy_By_User_UserAndRouts", IndexBy_By_User_UserAndRouts);

routes.use(validate);
routes.get("/User_Refresh", Refresh);

routes.post("/Create_Page", Create_Page);
routes.get("/Index_Page", Index_Page);
routes.put("/Update_Page", Update_Page);
routes.delete("/Delete_Page", Delete_Page);

routes.post("/Create_Link", Create_Link);
routes.get("/Index_Link", Index_Link);
routes.delete("/Delete_Link/:id", Delete_Link);

export default routes;
