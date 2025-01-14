import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

class CreateCatDto {}

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<string> {
    return this.catsService.findAll();
  }
}
