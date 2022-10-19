import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  @ApiProperty({
    type: Number,
    minimum: 1,
  })
  no: number;
  @IsString()
  @MinLength(1)
  @ApiProperty({
    type: String,
    minLength: 1,
  })
  name: string;
}
