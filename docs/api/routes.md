---
sidebar_label: "Routes"
sidebar_position: 3
---

# Get Entity /entities/{name}

Returns a [Entity Detials Object](./objects.md#entity-details)

## Required Url Parameters
- name: name of the entity to be looked up (i.e GitHub username)

## Optional Query Parameters
- provider: VCS provider 
- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older 
- before: cursor position indication data should be returned that is new 

## example 
```bash
curl https://api.vaunt.dev/entities/{{name}}
```

# Get Entity Contributions /entities/{name}/contributions

Returns a [Entity Detials Object](./objects.md#entity-details)

## Required Fields
- name: name of the entity to be looked up (i.e GitHub username)

## Optional Query Parameters
- provider: VCS provider 
- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older 
- before: cursor position indication data should be returned that is new 
- format: format of the response, supports JSON|SVG (default JSON)

## example 
```bash
curl https://api.vaunt.dev/entities/{{name}}/contributions?format=svg
```

