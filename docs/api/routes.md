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
curl -X GET "https://api.vaunt.dev/v1/github/entities/simonmazzaroth"
```

#### Example Response Data

```json
{
  "data": [
    {
      "id": "75482228-c3e7-494a-aee9-eb2cfc4f269a",
      "provider": "github",
      "type": "user",
      "name": "simonmazzaroth",
      "display_name": "Simon Cheng",
      "url": "https://api.github.com/users/simonmazzaroth",
      "avatar_url": "https://avatars.githubusercontent.com/u/111379562?v=4",
      "website": "",
      "socials": {
        "socials": []
      },
      "description": "I'm a DevRel at Vaunt.",
      "followers": 6,
      "following": 7,
      "experience": 0,
      "level": 0,
      "created_dttm": "2024-06-19T18:50:32Z",
      "updated_dttm": "2025-05-12T06:14:36Z"
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
curl -X GET "https://api.vaunt.dev/v1/github/entities/simonmazzaroth/contributions?format=svg&private=true"
```

#### Example Response Data

The following is an example response data in JSON format:

```json
{
  "data": [
    {
      "id": "75482228-c3e7-494a-aee9-eb2cfc4f269a",
      "provider": "github",
      "type": "user",
      "name": "simonmazzaroth",
      "display_name": "Simon Cheng",
      "url": "https://api.github.com/users/simonmazzaroth",
      "avatar_url": "https://avatars.githubusercontent.com/u/111379562?v=4",
      "website": "",
      "socials": null,
      "description": "",
      "followers": 0,
      "following": 0,
      "experience": 284,
      "level": 2,
      "contributions": {
        "commits": 197,
        "issues": 7,
        "pull_requests": 17,
        "reviews": 13,
        "stars": 9,
        "contributed_to": 24,
        "issues_closed": 2,
        "pull_requests_merged": 14,
        "discussions": 1,
        "discussions_answered": 0
      },
      "created_dttm": "2024-06-19T18:50:32Z",
      "updated_dttm": "2025-05-12T06:14:36Z"
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
curl -X GET https://api.vaunt.dev/v1/github/entities/simonmazzaroth/achievements?limit=30&format=svg
```

#### Example Response Data

```json
{
  "data": [
    {
      "id": "90d822c9-6f35-4d4e-8bfa-07e7c70d7807",
      "repository_name": "docs",
      "name": "Merge hero",
      "icon_url": "https://raw.githubusercontent.com/vauntdev/docs/main/.vaunt/merge_hero.png",
      "description": "Congratulations, your PR is merged under the Doc Sprint!",
      "awarded_dttm": "2025-04-16T09:31:00Z"
    }
  ]
}
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
curl -H "Authorization: Bearer <YOUR-TOKEN>" https://api.vaunt.dev/v1/github/entities/simonmazzaroth/repositories?limit=10
```

#### Example Response Data

```json
{
  "data": [
    {
      "id": "0432e4e2-b567-497c-9a04-ab848bcdff13",
      "provider": "github",
      "owner": "simonmazzaroth",
      "name": "serverpod",
      "url": "https://api.github.com/repos/simonmazzaroth/serverpod",
      "deleted": false,
      "fork": true,
      "forks": 0,
      "private": false,
      "description": "Serverpod is a next-generation app and web server, explicitly built for the Flutter and Dart ecosystem.",
      "language": "",
      "open_issues": 0,
      "stars": 0,
      "size": 12216,
      "license": "BSD 3-Clause \"New\" or \"Revised\" License",
      "default_branch_name": "",
      "created_dttm": "2024-12-04T20:16:58Z",
      "updated_dttm": "2025-05-12T06:23:44Z"
    }
  ]
}
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
curl  -H "Authorization: Bearer <YOUR-TOKEN>" https://api.vaunt.dev/v1/github/entities/VauntDev/repositories/example/contributors?limit=10&format=svg
```

#### Example Response Data

```json
{
  "data": [
    {
      "id": "18da114c-a543-45c8-a759-06ca6d136e91",
      "provider": "github",
      "type": "user",
      "name": "elewis787",
      "display_name": "Ethan M Lewis",
      "url": "https://api.github.com/users/elewis787",
      "avatar_url": "https://avatars.githubusercontent.com/u/10167943?v=4",
      "contributions": 33,
      "created_dttm": "2024-06-19T18:50:47Z"
    }
  ]
}
```
