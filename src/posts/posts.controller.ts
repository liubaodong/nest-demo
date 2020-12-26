import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

class CreatePostDto {
  @ApiProperty({ description: '帖子标题', required: false })
  title: string;
  @ApiProperty({ description: '帖子内容' })
  content: string;
}

export class Posts {}
@ApiTags('帖子模块')
@Controller('posts')
export class PostsController {
  @ApiOperation({ summary: '帖子列表' })
  @Get()
  findAll(): object[] {
    return [{}, {}];
  }
  @ApiOperation({ summary: '查看帖子详情' })
  @Get(':id')
  detail(@Param('id') id: string): object {
    return { id };
  }
  @ApiOperation({ summary: '删除帖子' })
  @Delete(':id')
  remove(@Param('id') id: string): object {
    return {
      success: true,
      id,
    };
  }
  @ApiOperation({ summary: '修改帖子' })
  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreatePostDto): object {
    return {
      success: true,
      body,
    };
  }
  @ApiOperation({ summary: '新增帖子' })
  @Post()
  create(@Body() body: CreatePostDto): object {
    body;
    return { body };
  }
}
