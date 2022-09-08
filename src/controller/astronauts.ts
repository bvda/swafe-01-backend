import { Request, Response } from 'express';
import { ASTRONAUTS } from "../data";

export const list = function(req: Request, res: Response) {
  res.json(ASTRONAUTS)
}

export const remove = function(req: Request, res: Response) {
  res.json({
    message: 'Deleted'
  })

}

export const update = function(req: Request, res: Response) {
  res.json({
    message: 'patch'
  })
}