---
sidebar_label: "Routes"
sidebar_position: 3
title: API Routes
---

# Endpoint Routes

## Public APIs (No Authentication Required)

### Get Entity Details

> **GET** `/v1/{provider}/entities/{name}`

Returns detailed information about a specific entity.

#### Query Parameters

This endpoint supports the [common query parameters](./general_concepts.md#common-query-parameters) with the exception of the `format` parameter.

#### Response Format

The response follows the [standard API format](./general_concepts.md#response-format) and returns an [Entity Details Objects](./objects.md#entity-details) containing the relevant data.

#### Example Request

```bash
curl -X GET "https://api.vaunt.dev/v1/github/entities/ade555"
```

#### Example Response Data

```json
{
  "data": [
    {
      "id": "a11714ef-86fe-4bd2-a889-a87bae661d67",
      "provider": "github",
      "type": "user",
      "name": "ade555",
      "display_name": "",
      "url": "https://api.github.com/users/ade555",
      "avatar_url": "https://avatars.githubusercontent.com/u/68414111?v=4",
      "website": "",
      "socials": {
        "socials": []
      },
      "description": "",
      "followers": 0,
      "following": 0,
      "experience": 0,
      "level": 0,
      "created_dttm": "2024-07-09T21:04:06Z",
      "updated_dttm": "2025-04-24T16:49:57Z"
    }
  ]
}
```

### Get Entity Contributions

> **GET** `/v1/{provider}/entities/{name}/contributions`

Returns a history of contributions made by a specific entity.

#### Query Parameters

This endpoint supports the [common query parameters](./general_concepts.md#common-query-parameters). It also accepts the following additional parameter:

| Parameter | Type    | Required | Default | Max | Description                                                                                                                                                           |
| --------- | ------- | -------- | ------- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| private   | boolean | No       | false   | -   | Specifies whether to include private contributions in the response. Note that Vaunt must be installed on private repositories for these contributions to be included. |

#### Response Format

The response follows the [standard API format](./general_concepts.md#response-format) and returns an [Entity Details Objects](./objects.md#entity-details) containing the relevant data.

#### Example Request

```bash
curl -X GET "https://api.vaunt.dev/v1/github/entities/ade555/contributions?format=svg&private=true"
```

#### Example Response Data

The following is an example response data in JSON format:

```json
{
  "data": [
    {
      "id": "a11714ef-86fe-4bd2-a889-a87bae661d67",
      "provider": "github",
      "type": "user",
      "name": "ade555",
      "display_name": "",
      "url": "https://api.github.com/users/ade555",
      "avatar_url": "https://avatars.githubusercontent.com/u/68414111?",
      "website": "",
      "socials": null,
      "description": "",
      "followers": 0,
      "following": 0,
      "experience": 83,
      "level": 1,
      "contributions": {
        "commits": 0,
        "issues": 5,
        "pull_requests": 17,
        "reviews": 16,
        "stars": 2,
        "contributed_to": 43,
        "issues_closed": 4,
        "pull_requests_merged": 10,
        "discussions": 0,
        "discussions_answered": 0
      },
      "created_dttm": "2024-07-09T21:04:06Z",
      "updated_dttm": "2025-04-24T23:56:48Z"
    }
  ]
}
```

### Get Entity Contributors

> **GET** `/v1/{provider}/entities/{name}/contributors`

This endpoint returns a **[Contributors Details Object](./objects.md#contributor-details)** with the structure of the response depending on the account type.

- For organization accounts, it lists users who have contributed to the organization’s repositories.

- For personal accounts, it lists users who have contributed to the user's public repositories — for example, contributors to your open-source projects will appear here.

#### Query Parameters

This endpoint supports the [common query parameters](./general_concepts.md#common-query-parameters).

#### Example Request

```bash
curl -X GET "https://api.vaunt.dev/v1/github/entities/vauntDev/contributors?limit=30"
```

#### Example Response Data

```json
"data": [
  {
      "id": "18da114c-a543-45c8-a759-06ca6d136e91",
      "provider": "github",
      "type": "user",
      "name": "elewis787",
      "display_name": "Ethan M Lewis",
      "url": "https://api.github.com/users/elewis787",
      "avatar_url": "https://avatars.githubusercontent.com/u/10167943?v=4",
      "contributions": 247,
      "created_dttm": "2024-06-19T18:50:47Z"
  }
    ]
```

### Get Entity achievements

> **GET** `/v1/{provider}/entities/{name}/achievements`

Returns all the achievements of a specific entity.

#### Query Parameters

This endpoint supports all the [common query parameters](./general_concepts.md#common-query-parameters)

#### Response Format

The response follows the [standard API format](./general_concepts.md#response-format) and returns a [Achievement Awarded Object](./objects.md#achievement-awarded-details)

#### Example Request

```bash
https://api.vaunt.dev/v1/github/entities/jeff1010322/achievements?limit=30&format=svg
```

#### Example Response Data

```json
 "data": [
  {
      "id": "90d822c9-6f35-4d4e-8bfa-07e7c70d7807",
      "repository_name": "docs",
      "name": "Merge hero",
      "icon_url": "https://raw.githubusercontent.com/vauntdev/docs/main/.vaunt/merge_hero.png",
      "description": "Congratulations, your PR is merged under the Doc Sprint!",
      "awarded_dttm": "2025-04-21T16:11:34Z"
  },
 ]
```

## Authenticated APIs

<!--  ===LEAVING OUT THE ENTITY KEYS ENDPOINTS UNTL THEY GET FIXED=== -->
<!-- ### Get Entity Keys

> **GET** `/v1/{provider}/entities/{name}/keys`

## Get Entity Keys v1/\{provider\}/entities/\{name\}/keys

Returns a **[Key Object](./objects.md#key)**

### Required Fields

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

### Headers

- Authorization: "Bearer \<YOUR-TOKEN\>"
  Required authorization using a Vaunt JWT.

### Example

```bash
curl -H "Authorization: Bearer <YOUR-TOKEN>" https://api.vaunt.dev/v1/{provider}/entities/{name}/keys
```

## Put Entity Keys v1/\{provider\}/entities/\{name\}/keys

Sets a **[Key Object](./objects.md#key)** and returns the **[Key Id](./objects.md#key-id)**

### Required Fields

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

### Headers

- Authorization: "Bearer \<PROVIDER-TOKEN\>"
  Required authorization using a provider Personal Access Token.

### Example

```bash
curl -X PUT -H "Authorization: Bearer <PROVIDER-TOKEN>" https://api.vaunt.dev/v1/{provider}/entities/{name}/keys --data '{ "data": {"key": "<YOUR-KEY>"}}'
```-->

### Get Entity Token

> GET `/v1/{provider}/entities/{name}/token`

This endpoint returns a **[Vaunt token](./objects.md#token)**. You can use this token to authorize your requests for authenticated endpoints.

#### Query Parameters

This endpoint does not support any query parameter.

#### Headers

This endpoint requires a **provider token**. For Github, this token is called a Personal Access Token.

See Creating a [fine-grained personal access token on Github](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) for instructions on creating a token.

#### Example Request

```bash
curl -H "Authorization: Bearer <PROVIDER-TOKEN>" https://api.vaunt.dev/v1/{provider}/entities/{name}/token
```

#### Example Response

```json
{
  "meta_data": { "count": 1, "data_type": 4 },
  "data": {
    "token": "your_token"
  }
}
```

### Get Entity Repositories

> GET `/v1/{provider}/entities/{name}/repositories`

This endpoint returns an array of all the repositories owned by a specific entity.

#### Query Parameters

This endpoint supports all the [common query parameters](./general_concepts.md#common-query-parameters) with the exception of the `format` query parameter.

#### Headers

This endpoint requires a Vaunt token. You can generate your token by using the [Get Entity Token](#get-entity-token) endpoint.

#### Response Format

The response follows the [standard API format](./general_concepts.md#response-format) and returns a **[Repository Details Object](./objects.md#repository-details)**.

#### Example Request

```bash
curl -H "Authorization: Bearer <YOUR-TOKEN>" https://api.vaunt.dev/v1/github/entities/ade555/repositories?limit=10
```

#### Example Response Data

```json
"data": [
  {
      "id": "repo_id",
      "provider": "github",
      "owner": "your_username",
      "name": "repository-name",
      "url": "repository_url",
      "deleted": false,
      "fork": true,
      "forks": 0,
      "private": true,
      "description": "",
      "language": "JavaScript",
      "open_issues": 0,
      "stars": 0,
      "size": 355,
      "license": "",
      "default_branch_name": "",
      "created_dttm": "2025-05-04T00:39:34Z",
      "updated_dttm": "2025-05-07T22:57:49Z"
  }
]
```

### Get Repository Contributors

> GET `/v1/{provider}/entities/{name}/repositories/{repo_name}/contributors`

This endpoint returns an array of all the contributors to a specific repository.

#### Query Parameters

This endpoint supports all the [common query parameters](./general_concepts.md#common-query-parameters).

#### Headers

This endpoint requires a Vaunt token. You can generate your token by using the [Get Entity Token](#get-entity-token) endpoint.

#### Response Format

The response follows the [standard API format](./general_concepts.md#response-format) and returns a **[Contributors Details Object](./objects.md#contributor-details)**.

#### Example Request

```bash
curl  -H "Authorization: Bearer <YOUR-TOKEN>" https://api.vaunt.dev/v1/github/entities/ade555/repositories/BlogBridger/contributors?limit=10&format=svg
```

#### Example Response Data

```json
"data": [
  {
      "id": "a11714ef-86fe-4bd2-a889-a87bae661d67",
      "provider": "github",
      "type": "user",
      "name": "ade555",
      "display_name": "SuperheroJT",
      "url": "https://api.github.com/users/ade555",
      "avatar_url": "https://avatars.githubusercontent.com/u/68414111?v=4",
      "contributions": 62,
      "created_dttm": "2024-07-09T21:04:06Z"
  }
],
```
