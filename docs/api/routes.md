---
sidebar_label: "Routes"
sidebar_position: 3
---

# Get Entity /entities/{name}

Returns a [Entity Detials Object](./objects.md#entity-details)

## Required Url Parameters
- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)


## Optional Query Parameters
- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older 
- before: cursor position indication data should be returned that is new 

## example 
```bash
curl api.vaunt.dev/v1/{provider}/entities/{{name}}
```

# Get Entity Contributions /entities/{name}/contributions

Returns a [Entity Detials Object](./objects.md#entity-details)

## Required Fields
- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

## Optional Query Parameters
- private: include private contributions 
- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older 
- before: cursor position indication data should be returned that is new 
- format: format of the response, supports JSON|SVG (default JSON)

## example 
```bash
curl https://api.vaunt.dev/v1/{provider}/entities/{{name}}/contributions?format=svg,private=true
```

