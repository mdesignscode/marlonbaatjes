import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import allProjects, { type TProjectInfo } from '../../allProjects';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export function load({ params }) {
        const { query, title } = params;

        const group = (allProjects as Record<string, Record<string, TProjectInfo>>)[query];
        const projectInfo = group?.[title];
        if (!projectInfo) error(404, 'Project not found');

        return projectInfo;
}

