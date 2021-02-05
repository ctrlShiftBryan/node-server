import { Request, Response } from 'express';
import foo from './test.json';


export default class UsersApi {
  static user(req: Request, res: Response) {
    // console.log(req.params, req.query, req.body, req.headers);
    // const { params, query, body, headers } = req;
    // console.log({ params, query, body, headers })
    // console.log(req)
    // stubs/test-api/test.json
    return res.send(foo);
  }
}
