import { Request, Response } from "express";
import Fetch from "../../utils/fetch";
class Exchange {
  public static async getTop100(req: Request, res: Response) {
    const { status, data, error } = await Fetch.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (error) {
      console.log(" this thing is wrong");
    } else {
      console.log(data);
    }

    res.json({ message: " this is the home for me" });
  }
}
export default Exchange;
