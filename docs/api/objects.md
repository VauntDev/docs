---
sidebar_label: "Objects"
sidebar_position: 2
---

:::info

Objects are returned from the API in Json format uses snake case.

:::

# Response 
| field | type | description | 
|-------|------|-------------|
| MetaData | Object, [MetaData](#meta-data) | Metadata about the response, **omittable** | 
| Data | []T | Array of type T, where T is a supported [Data Type](#data-types) |
| Cursor | string | cursor used for [Pagination](./general_concepts.md#pagination), **omittable** |
| Error | Object, [ErrorResponse](#error-response) | Error response containing information about the cause, **omittable** | 

# Meta Data 
| field | type | description | 
|-------|------|-------------|
| Count | int | number of records in the response data array | 
| DataType | int | [Object type](#data-types) of data from in the response data array | 

# Data Types
Data types is a metadata value that describes the type of data found in the 

| value | type | 
|-------|------|
| 0 | Unknown |
| 1 | [EntityDetails](#entity-details) |

# Entity Details
| field | type | description | 
|-------|------|-------------|
| Id | UUID, string | Vaunt UUID of the entity  |       
| Provider | string | VCS provider :: GitHub |          
| Type |  string |  entity type :: organization, user, bot | 
| Name | string | name of the entity | 
| DisplayName | string | display name of the entity | 
| URL   | string | URL of the entity |
| AvatarURL | string | URL pointing to the entities avatar icon | 
| Experience | int64 | entity experience level | 
| Contributions | Object, [ContributionSummary](#contribution-summary) | contribution summary for a entity, **omittable** | 
| CreatedDttm | date time | Date entity was added to Vaunt. |
| UpdatedDttm | date time | Last updated time to an entity in Vaunt. |

# Contribution Summary 
| field | type | description | 
|-------|------|-------------|
| Commits | uint64 | total commits 
| Issues | uint64 | total issues |
| PullRequests | uint64 | total pull requests | 
| Reviews | uint64 | total reviews |
| Stars | uint64 | total stars earned | 
| Discussions | uint64 | total discussions | 
| IssuesClosed | uint64 | total closed issues | 
| PullRequestsMerged | uint64 | total pull requests merged | 
| DiscussionsAnswered | uint64 | total answered discussions |  

# Error Response 
| field | type | description | 
|-------|------|-------------|
| Message | string | Human readable error message | 
| Code | int32,[ErrorCode](#error-codes) | internal error code | 

# Error Codes 

| value | type | 
|-------|------|
| 0 | Unknown |
| 1 | Missing Required Field | 
| 2 | No data | 
| 3 | Format Error | 