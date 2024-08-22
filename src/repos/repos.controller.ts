import { Controller, Get, Param, Query } from '@nestjs/common';
import { ReposService } from './repos.service';

@Controller('repos')
export class ReposController {
  constructor(private readonly reposService: ReposService) {}

  @Get('no-code-issues/:projectType')
  async filterNoCodeIssues(
    @Param('projectType') projectType: string,
    @Query('numProjects') numProjects: number,
  ) {
    const issues = this.reposService.filterNoCodeIssues(
      projectType,
      numProjects,
    );
    if (!issues) return 'No issues found';
    return issues;
  }

  @Get('no-code-issues')
  async getNoCodeIssues(@Query('numProjects') numProjects: number) {
    const issues = this.reposService.getNoCodeIssues(numProjects);
    if (!issues) return 'No issues found';
    return issues;
  }

  // @Get('no-code-projects/:numProjects')
  // async getNoCodeProjects(@Query() numProjects: number): Promise<any[]> {
  //   return this.reposService.searchNoCodeProjects(numProjects);
  // }

  // @Get('/issue/:id')
  // async searchNoCodeIssuesById(
  //   @Param ('id') id: number
  // ){
  //   const issue = this.reposService.searchNoCodeIssuesById(id)
  //   return issue
  // }

  // @Get('/user/:projectType')
  // async getUserDetails(
  //   @Param('projectType') projectType: string,
  //   @Query('numProjects') numProjects: number,
  // ){
  //   return this.reposService.getUserName(projectType, numProjects)
  // }
}
