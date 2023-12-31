import { ArgsType, Field, InputType, Int, PartialType } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./create-restaurant.dto";

@InputType()
export class UpdateRestaurantInputType extends PartialType(
  CreateRestaurantDto
) {}

@ArgsType()
export class UpdateRestaurantDto {
  @Field(type => Int)
  id: number;

  @Field(type => UpdateRestaurantInputType)
  data: UpdateRestaurantInputType;
}