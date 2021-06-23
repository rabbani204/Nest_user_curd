import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AdminUser } from '../models/adminuser.interface';
import { AdminuseService } from '../services/adminuse.service';

@Controller('adminuse')
export class AdminuseController {
  constructor(private adminuseService: AdminuseService) {
    
  }

  // @Post()
  // async addUser(
  //   @Body('name') name: string,
  //   @Body('mobile') mobile: string,
  //   @Body('password') password: string
  // ) {
  //   const generatedId = await this.adminuseService.createUser(
  //     name,
  //     mobile,
  //     password
  //   )

  //   return { id: generatedId }
  // }

  @Post()
  create(@Body() user: AdminUser): Observable<AdminUser>{
    return this.adminuseService.createUser(user)
  }

  @Post('/login')
  async login(
    @Body('mobile') mobile,
    @Body('password') password
  ) {
    const token = await this.adminuseService.login(mobile, password)
    // console.log(token)
    return token;
  }

}
