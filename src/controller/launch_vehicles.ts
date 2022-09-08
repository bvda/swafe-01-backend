import { Request, Response } from "express"
import { LAUNCH_VEHICLES } from "../data"

export const list = function(req: Request, res: Response) {
  res.json(LAUNCH_VEHICLES)  
}
export const update = function(req:Request, res: Response) {
  res.send({"success": true})
}