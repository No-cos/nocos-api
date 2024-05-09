// github.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ReposService {
  async searchNoCodeIssues(projectType: string, numProjects: number) {
    const url = 'https://api.github.com/search/issues';
    const params = {
      // q: 'label:no-code,nocode,documentation state:open',
      q: `label:nocode,no-code,${projectType} state:open`,
      sort: 'stars',
      order: 'desc',
      per_page: numProjects,
    };

    try {
      const response = await axios.get(url, { params });
      const projects = response.data.items;
      const users = projects.map(project => project.user);
      return {projects, users};
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      return null;
    }
  }


  // async getUserName(projectType, numProjects) {
  //   const issueDetails = await this.searchNoCodeIssues(projectType, numProjects);
  //   console.log(issueDetails)
  //   // console.log(repoDetails.map((details) => details.user));
  //   let user = issueDetails.map((details) => details.user);
  //   return user;
  // }

  async searchNoCodeProjects(numProjects: number) {
    const url = 'https://api.github.com/search/repositories';
    const params = {
      q: 'label:no-code,nocode state:open',
      sort: 'stars',
      order: 'desc',
      per_page: numProjects,
    };

    try {
      const response = await axios.get(url, { params });
      const projects = response.data.items;
      return projects;
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      return null;
    }
  }
}
