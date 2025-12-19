import { PROJECTS } from "./consts";
import { IProjectData } from "Content/Projects/types";

export const generateProjects = (amount: number): IProjectData[] => {
    const projectsSet = new Set(PROJECTS);
    const res: IProjectData[] = [];

    for (let i = 0; i < Math.min(amount, projectsSet.size); i++) {
        const index = Math.floor(Math.random() * projectsSet.size);
        const randomProj = Array.from(projectsSet)[index];

        projectsSet.delete(randomProj);
        res.push(randomProj);
    }

    return res;
}