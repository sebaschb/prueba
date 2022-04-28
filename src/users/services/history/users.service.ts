import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction, User as UserEntity} from 'src/typeorm';
import { Transaction as TransactionEntity} from 'src/typeorm';
import { CreateCoordinateDto } from 'src/users/dtos/CreateCoordinate.Dto';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

const axios = require('axios');

@Injectable()
export class HistoryService {

  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionRepository: Repository<TransactionEntity>,
  ) {}

  async getAllRestaurants (createCoordinateDto: CreateCoordinateDto) {
    let restaurantes = [];
    const requi = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${createCoordinateDto.latitud},${createCoordinateDto.longitud}&radius=${createCoordinateDto.radio}&type=restaurant&key=AIzaSyA2-SjgDnLblHdXwy7ZlTIE-dxS81-4Xxo`
    const response = await axios.get(requi)
    if (!response){
      console.log('Error: Not found')
    } else {
      response.data.results.forEach(rest => {
        let dataRest = {
           name:rest.name,
           address:rest.vicinity,
           latitud: rest.geometry.location.lat,
           longitud: rest.geometry.location.lng,
        }
      restaurantes.push(dataRest)
     })
    }
    return restaurantes;
  }
}
