import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import { AdminUserEntity } from '../models/admin.user.enity';
import { AdminUser } from '../models/adminuser.interface';
import * as jwt from 'jsonwebtoken';

import * as bcrypt from 'bcrypt';
import {JWT_SECRET} from '../../constants';

@Injectable()
export class AdminuseService {
  constructor(
    @InjectRepository(AdminUserEntity)
    private readonly adminUserRepository: Repository<AdminUserEntity>) { }

  //  async createUser(name: string, mobile: string, password: string) {
  //    const salt = await bcrypt.genSalt();
  //    const newPass = await bcrypt.hash(password, salt);

  //   let user 

  //    return result.id as string;
  //       // return from(this.adminUserRepository.save(adminuser))
  //   }

  createUser(adminuser: AdminUser): Observable<AdminUser> {
    const salt = '';
    bcrypt.genSalt().then(salt => {
      salt = salt
      bcrypt.hash(adminuser.password, salt).then(hashpass => {
        adminuser.password = hashpass
        this.adminUserRepository.save(adminuser)
      })
    })
    return
  }
  
  async login(mobile: string, password: string) {
    // const user = await this.adminUserRepository.findOne({ mobile })
    const user = await this.adminUserRepository.findOne({ mobile });
    console.log(user)
    
    if (!user) {
      console.log("User does exist on the database.");
      throw new UnauthorizedException();
    }

    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      throw new UnauthorizedException();
    }

    const authJwtToken = await jwt.sign(
      { name: user.name, mobile: user.mobile },
      "testSecreate"
    );
    const response = {
      name: user.name,
      mobile: user.mobile,
      token: authJwtToken,
    };
    console.log(response);
    return response;
  }



  // updateUser(id: number, adminuser: AdminUser): Observable<UpdateResult> {
  //   return from(this.adminUserRepository.update(id, adminuser))
  // }

}
