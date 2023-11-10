import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Restaurant } from "./entities/restaurant.entity";
import { Repository } from "typeorm";


@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant) 
    private readonly restaurant: Repository<Restaurant>
  ) {}

  getAll(): Promise<Restaurant[]> {
    return this.restaurant.find();
  }
}