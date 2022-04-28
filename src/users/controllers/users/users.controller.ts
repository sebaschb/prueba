import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCoordinateDto } from 'src/users/dtos/CreateCoordinate.Dto';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from '../../services/users/users.service';
const axios = require('axios');

@Controller('users')
export class UsersController {
  constructor( @Inject('USER_SERVICE') private readonly userService: UsersService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto){
    return this.userService.createUser(createUserDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getAllUser(){
    return this.userService.getAllUser();
  }

  @Get('restaurants')
  async getrestaurants(@Param() createCoordinateDto: CreateCoordinateDto ){
    return this.userService.getAllRestaurants(createCoordinateDto);
  }
}
