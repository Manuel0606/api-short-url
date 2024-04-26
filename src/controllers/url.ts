import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getUrl = (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_GET_URL')
  }
}

const getUrls = (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_GET_URLS')
  }
}

const postUrl = (req: Request, res: Response) => {
  try {
    const body = req.body
    res.send(body)
  } catch (error) {
    handleHttp(res, 'ERROR_POST_URL')
  }
}

const deletUrl = (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_URL')
  }
}

export { getUrl, getUrls, postUrl, deletUrl }