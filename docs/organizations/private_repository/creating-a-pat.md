---
sidebar_label: "Creating a PAT"
title: Creating a PAT
sidebar_position: 1
---

A few of the Vaunt API routes require the user to provide authorization with a provider such as Github. We refer to this authorization as attestation as we are
using Github to validate that you are who you say you are. Once attestation is performed with a valid Github personal access token you can generate a Vaunt JWT that can
be used for future API calls.

This can be done on Github by creating and using a fine-grained Personal Access Token. See [Creating a fine-grained personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) on Github for instructions on creating a token.

For the purposes of attestation a token for your own user does not need to have any additional permissions selected. It is only used to verify that you are
the entity that you are requesting data for. You additionally do not need to select any repositories for access with this token. The only thing Vaunt will do is verify
that your user id in Github matches the entity.

See an example of the permissions for a user token below.

<p>
    <img src={require('../assets/user_pat.png').default} width="500" />
</p>

If you want to create a token that can be used to validate you are an Admin of an organization to retrieve data for then you should create a token for that organization and give the token Read-only access to the Members under the organization permissions. Read access to members is used to confirm with Github that you are an Admin of the organization. Currently, an admin of the organization must be the one to create the token for attestation.

See an example of the permissions for an organization token below.

<p>
    <img src={require('../assets/organization_permissions.png').default} width="500" />
</p>

After generating a token you can use the token value with the `Authorization` header in requests to the Vaunt API, for Example:

```Bash
curl -v -H "content-type: application/json" -H "Authorization: Bearer <GITHUB_PAT>" http://api.vaunt.dev/v1/github/entities/<entity>/token
```
