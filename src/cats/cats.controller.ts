import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return `This action adds a new cat ${createCatDto}`;
  }

  @Get()
  findAll(): string {
    return `This action returns all cats items`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): string {
    console.log(id);
    return `This action returns a #${id} ${updateCatDto} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
