import { Request, Response } from "express";
class Home {
  public static indexView(req: Request, res: Response) {
    res.json({ message: " this is the home for me" });
  }
  public static aboutView(req: Request, res: Response) {
    res.json({ message: " this is the about page" });
  }
}
export default Home;
