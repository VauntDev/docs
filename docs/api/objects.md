---
sidebar_label: "Objects"
title: objects
sidebar_position: 2
---

# Objects

:::info

Objects are returned from the API in JSON format using snake case.

:::

## Providers

| field  | type   | description         |
| ------ | ------ | ------------------- |
| github | string | GitHub vcs provider |

## Response

| field    | type                                         | description                                                                       |
| -------- | -------------------------------------------- | --------------------------------------------------------------------------------- |
| MetaData | Object, **[MetaData](#meta-data)**           | Metadata about the response, **omittable**                                        |
| Data     | []T                                          | Array of type T, where T is a supported **[Data Type](#data-types)**              |
| Cursor   | string                                       | cursor used for **[Pagination](./general_concepts.md#pagination)**, **omittable** |
| Error    | Object, **[ErrorResponse](#error-response)** | Error response containing information about the cause, **omittable**              |

## Meta Data

| field    | type | description                                                            |
| -------- | ---- | ---------------------------------------------------------------------- |
| Count    | int  | number of records in the response data array                           |
| DataType | int  | **[Object type](#data-types)** of data from in the response data array |

## Data Types

Data types is a metadata value that describes the type of data found in the

| value | type                                 |
| ----- | ------------------------------------ |
| 0     | Unknown                              |
| 1     | **[EntityDetails](#entity-details)** |

## Entity Details

| field         | type                                                     | description                                      |
| ------------- | -------------------------------------------------------- | ------------------------------------------------ |
| Id            | UUID, string                                             | Vaunt UUID of the entity                         |
| Provider      | string                                                   | VCS provider :: GitHub                           |
| Type          | string                                                   | entity type :: organization, user, bot           |
| Name          | string                                                   | name of the entity                               |
| DisplayName   | string                                                   | display name of the entity                       |
| URL           | string                                                   | URL of the entity                                |
| AvatarURL     | string                                                   | URL pointing to the entities avatar icon         |
| Experience    | int64                                                    | entity experience level                          |
| Contributions | Object, **[ContributionSummary](#contribution-summary)** | contribution summary for a entity, **omittable** |
| CreatedDttm   | date time                                                | Date entity was added to Vaunt.                  |
| UpdatedDttm   | date time                                                | Last updated time to an entity in Vaunt.         |

## Repository Details

| field             | type         | description                                           |
| ----------------- | ------------ | ----------------------------------------------------- |
| Id                | UUID, string | Vaunt UUID of the repository                          |
| Provider          | string       | VCS provider :: GitHub                                |
| Owner             | string       | name of the repository owner                          |
| Name              | string       | name of the repository                                |
| URL               | string       | URL of the repository                                 |
| Deleted           | boolean      | whether this repo has been deleted                    |
| Fork              | boolean      | whether this is a fork                                |
| Forks             | int64        | number of times this repo has been forked             |
| Private           | boolean      | whether this is a private repository                  |
| Description       | string       | the description of the repository                     |
| Language          | string       | primary language of the repository                    |
| OpenIssues        | int64        | number of open issues                                 |
| Stars             | int64        | number of stars                                       |
| Size              | int64        | size of the repository                                |
| License           | string       | the name of the license used by the repository        |
| DefaultBranchName | string       | the name of the default branch used by the repository |
| CreatedDttm       | date time    | Date entity was added to Vaunt.                       |

## Contributor Details

| field         | type         | description                                  |
| ------------- | ------------ | -------------------------------------------- |
| Id            | UUID, string | Vaunt UUID of the Contributor                |
| Provider      | string       | VCS provider :: GitHub                       |
| Type          | string       | Contributor type :: organization, user, bot  |
| Name          | string       | name of the Contributor                      |
| DisplayName   | string       | display name of the Contributor              |
| URL           | string       | URL of the Contributor                       |
| AvatarURL     | string       | URL pointing to the Contributors avatar icon |
| Contributions | int64,       | number of contributions                      |
| CreatedDttm   | date time    | Date Contributor was added to Vaunt.         |

## Contribution Summary

| field               | type   | description                |
| ------------------- | ------ | -------------------------- |
| Commits             | uint64 | total commits              |
| Issues              | uint64 | total issues               |
| PullRequests        | uint64 | total pull requests        |
| Reviews             | uint64 | total reviews              |
| Stars               | uint64 | total stars earned         |
| Discussions         | uint64 | total discussions          |
| IssuesClosed        | uint64 | total closed issues        |
| PullRequestsMerged  | uint64 | total pull requests merged |
| DiscussionsAnswered | uint64 | total answered discussions |

## Achievement Awarded Details

| field          | type         | description                      |
| -------------- | ------------ | -------------------------------- |
| Id             | UUID, string | id of the achievement            |
| RepositoryName | string       | achievement Repository name      |
| Name           | string       | total pull requests              |
| IconUrl        | string       | url of achievement icon          |
| Description    | string       | description of the achievement   |
| AwardedDttm    | date time    | time the achievement was awarded |

## Key

| field | type   | description                                                  |
| ----- | ------ | ------------------------------------------------------------ |
| Key   | string | the public key for an entity used to validate JWT signatures |

## Key ID

| field | type   | description                            |
| ----- | ------ | -------------------------------------- |
| Id    | string | the id (Sha256 Hash) of the public key |

## Token

| field | type   | description                                                              |
| ----- | ------ | ------------------------------------------------------------------------ |
| Token | string | the Vaunt token that can be used for authorization for a specific entity |

## Error Response

| field   | type                                 | description                  |
| ------- | ------------------------------------ | ---------------------------- |
| Message | string                               | Human readable error message |
| Code    | int32, **[ErrorCode](#error-codes)** | internal error code          |

## Error Codes

| value | type                   |
| ----- | ---------------------- |
| 0     | Unknown                |
| 1     | Missing Required Field |
| 2     | No data                |
| 3     | Format Error           |
