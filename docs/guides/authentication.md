---
sidebar_label: "Authentication"
title: Authentication
sidebar_position: 2
---

If you choose to install Vaunt on one or more private repositories then you will need to use Authentication to retrieve the data
for those repositories. By default Vaunt APIs only return information about public repositories and contributions made to public
repositories to protect the privacy of users that choose to install on private repos.

Authentication works in two steps for the Vaunt APIs.

First, you must prove that you are the user that has either owns the private repository on the given provider or you are
and admin of the Organization that owns the repository.

This can be done, for example, by using a Personal Access Token from Github. See our [docs here](./github/creating-a-pat) for
an example of how to do this.

Second, you can use the provider token to generate a Vaunt API Token that can be used to access the other API routes or to set
a long-term public key that can used to verify signed Tokens generated outside of Vaunt.

## Example Flow

For an example, on how Authentication may work for a Github user accessing private repositories first you would generate fine-grained
access token as the Github user.

Then you could make the following API request to Vaunt, replacing <entity\> with the user and <GITHUB_PAT\> with the token:

```Bash
curl -v -H "content-type: application/json" -H "Authorization: Bearer <GITHUB_PAT>" http://api.vaunt.dev/v1/github/entities/<entity>/token
```

If successful, the response should look like this:

```Bash
{"meta_data":{"count":1,"data_type":4},"data":{"token":"<VAUNT_JWT>"}}
```

You can now use the <VAUNT_JWT> in other API requests which will authorize you to retrieve private repository data for only the given entity.

For example, you can retrieve private repos for the entity with this API request:

```Bash
curl -v -H "content-type: application/json" -H "Authorization: Bearer <VAUNT_JWT>" http://api.vaunt.dev/v1/github/entities/<entity>/repositories?limit=10
```
