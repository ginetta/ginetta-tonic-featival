import * as pulumi from '@pulumi/pulumi';
import * as cloudflare from '@pulumi/cloudflare';

const projectName = 'ginetta-tonic-festival';
const CLOUDFLARE_DOMAIN = 'festival.ginetta.net';
const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID as string;

// Cloudflare Pages Project
const pagesProject = new cloudflare.PagesProject(
  projectName,
  {
    accountId: CLOUDFLARE_ACCOUNT_ID,
    deploymentConfigs: {
      preview: {
        compatibilityDate: '2024-05-30',
        d1Databases: {},
        durableObjectNamespaces: {},
        environmentVariables: {},
        failOpen: true,
        kvNamespaces: {},
        r2Buckets: {},
        secrets: pulumi.secret({}),
        usageModel: 'standard',
      },
      production: {
        compatibilityDate: '2024-05-30',
        d1Databases: {},
        durableObjectNamespaces: {},
        environmentVariables: {},
        failOpen: true,
        kvNamespaces: {},
        r2Buckets: {},
        secrets: pulumi.secret({}),
        usageModel: 'standard',
      },
    },
    name: projectName,
    productionBranch: 'prod',
  },
  {
    protect: true,
  },
);

// Cloudflare Pages Domain
const pagesDomain = new cloudflare.PagesDomain(
  projectName,
  {
    accountId: CLOUDFLARE_ACCOUNT_ID,
    projectName: pagesProject.name,
    domain: CLOUDFLARE_DOMAIN,
  },
  {
    protect: true,
  },
);

export const pagesUrl = pagesProject.domains.apply((d) => `https://${d}`);
export const dnsRecords = pagesDomain.domain;
