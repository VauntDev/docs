---
sidebar_label: "General Concepts"
title: "General Concepts"
sidebar_position: 1
---

# General Concepts

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
