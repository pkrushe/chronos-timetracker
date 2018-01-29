// @flow
import jira from '../jiraClient';

export function fetchProjects(): Promise<*> {
  return jira.client.project.getAllProjects();
}

export function fetchProjectStatuses(projectIdOrKey): Promise<*> {
  return jira.client.project.getStatuses({ projectIdOrKey });
}
