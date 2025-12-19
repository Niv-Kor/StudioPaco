import { IProjectData } from "Content/Projects/types";
import { Projects } from "Content/Projects/data";

export const PROJECTS: Array<IProjectData> = Projects.flatMap(category => category.projects);