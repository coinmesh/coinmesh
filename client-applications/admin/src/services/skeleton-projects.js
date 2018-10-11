import {HttpWrapper} from './http-wrapper';
import {SkeletonProject} from '../models/skeleton-project';

export class SkeletonProjectsService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getSkeletonProjects() {
    return this.http.get('http://localhost:3002/v0/registry/skeleton-projects').then(result => {
      return result.skeletonProjects.map(project => {
        return new SkeletonProject(project);
      });
    });
  }
}
