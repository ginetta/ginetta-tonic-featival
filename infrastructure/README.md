# Ginetta Pulumi Cloudflare Infrastructure

## Prerequisites

- [Pulumi](https://www.pulumi.com/docs/get-started/install/)
- [Cloudflare Account](https://dash.cloudflare.com/sign-up)

```bash
yarn install
cp .env.example .env
code .env
yarn run setenv
```

## Use

### GitHub Actions

The project is setup to run on GitHub Actions, and will automatically update the infrastructure when changes are pushed to the `prod` branch. A PR will be created, and the changes can be reviewed before merging. When the PR is merged, the infrastructure will be updated.

### Manually

To update the infrastructure, run the following command and follow prompts in the CLI:

```bash
curl -fsSL https://get.pulumi.com | sh
pulumi login
pulumi preview
pulumi up
```

## Import Commands

As the project was setup on Cloudflare Pages using the Web UI, the following commands were used to pull/import the config for the project.

```bash
pulumi import cloudflare:index/pagesProject:PagesProject ginetta-tonic-festival ${CLOUDFLARE_ACCOUNT_ID}/ginetta-tonic-festival

pulumi import cloudflare:index/pagesDomain:PagesDomain pagesDomain ${CLOUDFLARE_ACCOUNT_ID}/ginetta-tonic-festival/festival.ginetta.net
```
