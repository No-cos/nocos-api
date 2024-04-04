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
      return projects;
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      return null;
    }
  }

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
