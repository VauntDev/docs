---
sidebar_label: "Creating a PAT"
title: Creating a PAT
sidebar_position: 2
---

A few of the Vaunt API routes require the user to provide authorization with a provider such as Github.

This can be done on Github by creating and using a fine-grained Personal Access Token. See [Creating a fine-grained personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) on Github for instructions on creating a token.

For the purposes of Vaunt Authorization a token for your own user does not need to have any additional permissions selected. It is only used to verify that you are
the entity that you are requesting data for.

If you want to create a token that can be used to validate you are an Admin of an organization to retrieve data for then you should create a Token for that organization and give the token Read-only access to the Members under the Organization permissions.

After generating a token you can use the token value with the `Authorization` header in requests to the Vaunt API, for Example:

```Bash
curl -v -H "content-type: application/json"   -H "Authorization: Bearer <GITHUB_PAT>" http://api.vaunt.dev/v1/github/entities/<entity>/token
```
