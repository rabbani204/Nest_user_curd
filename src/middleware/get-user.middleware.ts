import {Injectable, NestMiddleware, UnauthorizedException} from '@nestjs/common';
import {Request, Response} from "express";
import * as jwt from 'jsonwebtoken';

import {JWT_SECRET} from '../constants';

@Injectable()
export class GetUserMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: () => void){

        const authJwtToken = req.headers.authorization;

        if(!authJwtToken) {
            // next();
            throw new UnauthorizedException("Authenticaion failed for some reason.");
            return;
        }

        try {

            const user = jwt.verify(authJwtToken, "testSecreate");

            if (user) {
                console.log("Found user details in JWT: ", user);
                req["user"] = user;
            }
        }
        catch(err) {
            console.log("Error handling authentication JWT: ", err);
        }
        next();
    }

}
