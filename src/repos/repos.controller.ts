import { Controller, Get, Param, Query } from '@nestjs/common';
import { ReposService } from './repos.service';

@Controller('repos')
export class ReposController {
  constructor(private readonly reposService: ReposService) {}

  @Get('no-code-issues/:projectType')
  async getNoCodeIssues(
    @Param('projectType') projectType: string,
    @Query('numProjects') numProjects: number,
  ) {
    const issues = this.reposService.searchNoCodeIssues(
      projectType,
      numProjects,
    );
    if (!issues) return 'No issues found';
    return issues;
  }

  @Get('no-code-projects/:numProjects')
  async getNoCodeProjects(@Query() numProjects: number): Promise<any[]> {
    return this.reposService.searchNoCodeProjects(numProjects);
  }
}
