---
sidebar_label: "General Concepts"
title: "General Concepts"
sidebar_position: 1
---

# General Concepts

## Base URL

All API requests should be made to the following URL:

```text
https://api.vaunt.dev
```

## URL Parameters

| Parameter | Type   | Required | Description                                            |
| --------- | ------ | -------- | ------------------------------------------------------ |
| provider  | string | Yes      | The platform provider. For now, we only support Github |
| name      | string | Yes      | Name of entity to look up (e.g., GitHub username)      |
| repo_name | string | No       | Name of specific repository to look up                 |

## Common Query Parameters

Unless otherwise stated, these query parameters are available on most endpoints:
| Parameter | Type | Required | Default | Max | Description |
| --------- | ------- | -------- | ------- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| limit | integer | No | 1 | 100 | Maximum number of items to return in a single response |
| after | string | No | - | - | Cursor value for pagination — retrieves items older than (or created before) this cursor |
| before | string | No | - | - | Cursor value for pagination — retrieves items newer than (or created after) this cursor |
| format | string | No | json | - | Determines the response's format. Can either be json or svg |

## Response Format

Unless specified otherwise, our API responses usually return data in the following format:

| Field           | Type   | Description                                                                                                                                                                                                                                                                                                     |
| --------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| meta_data       | object | Metadata about the response. Learn more on our [Objects Page](./objects.md#meta-data).                                                                                                                                                                                                                          |
| data            | array  | Array of either [Entity Details Objects](./objects.md#entity-details), [Contributors Details Object](./objects.md#contributor-details), [Achievement Awarded Object](./objects.md#achievement-awarded-details), [Key Object](./objects.md#key), or [Repository Details Object](./objects.md#repository-details) |
| previous_cursor | string | Cursor value for retrieving the previous page of results                                                                                                                                                                                                                                                        |
| next_cursor     | string | Cursor value for retrieving the next page of results                                                                                                                                                                                                                                                            |

### Example Response Format

```json
{
    "meta_data": {
        "count": 1,
        "data_type": 1
    },
    "data": [...], // The actual data returned, structure may vary by endpoint
    "previous_cursor": "MjAyNC0wNy0wOSAyMTowNDowNiArMDAwMCBVVEMvYTExNzE0ZWYtODZmZS00YmQyLWE4ODktYTg3YmFlNjYxZDY3",
    "next_cursor": "MjAyNC0wNy0wOSAyMTowNDowNiArMDAwMCBVVEMvYTExNzE0ZWYtODZmZS00YmQyLWE4ODktYTg3YmFlNjYxZDY3"
}
```

## Pagination

Vaunt uses UUIDs when storing objects. For pagination, we use a composite `UUID` and `CreatedDTTM` to create a base64 encoded `Cursor`.

The following is an example `base64(uuid + / + createddttm)`.

When making API requests, we support forward/backward operations.

API endpoint requests yield a `next_cursor` denoting the last retrieved object and a `previous_cursor` denoting the first object.

The query parameter `after` returns data after than the supplied cursor, while the query parameter `before` returns data before than the supplied cursor.

## Limits

All API routes enforce a `max` limit of 100 records.

## Caching

Caching is currently handled internally, we will be working on exposing cache control methods for API routes in the future.
