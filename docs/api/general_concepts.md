---
sidebar_label: "General Concepts"
title: "General Concepts"
sidebar_position: 1
---

# Pagination 

Vaunt uses UUIDs when storing objects. For pagination, we use a composite `UUID` and `CreatedDTTM` to create a base64 encoded `Cursor`.

The following is an example `base64(uuid + / + createddttm)`. 

When making API requests, we support forward/backward operations. 

The query parameter `after` returns data older than the supplied cursor, while the query parameter `before` returns data newer than the supplied cursor. 

# Limits

All API routes enforce a `max` limit of 100 records. 

# Caching 

Caching is currently handled internally, we will be working on exposing cache control methods for API routes in the future. 