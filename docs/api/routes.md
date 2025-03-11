---
sidebar_label: "Routes"
sidebar_position: 3
title: Routes
---

## Get Entity v1/\{provider\}/entities/\{name\}

Returns a [Entity Details Object](./objects.md#entity-details)

### Required Url Parameters

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

### Optional Query Parameters

- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older
- before: cursor position indication data should be returned that is new

### Example

```bash
curl api.vaunt.dev/v1/{provider}/entities/{name}
```

## Get Entity Contributions  v1/\{provider\}/entities/\{name\}/contributions

Returns a [Entity Details Object](./objects.md#entity-details)

## Required Fields

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

### Optional Query Parameters

- private: include private contributions
- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older
- before: cursor position indication data should be returned that is new
- format: format of the response, supports JSON|SVG (default JSON)

### Example

```bash
curl https://api.vaunt.dev/v1/{provider}/entities/{name}/contributions?format=svg,private=true
```

## Get Entity Contributors  v1/\{provider\}/entities/{name}/contributors

Returns a [Contributors Details Object](./objects.md#contributor-details)

### Required Fields

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

### Optional Query Parameters

- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older
- before: cursor position indication data should be returned that is new
- format: format of the response, supports JSON|SVG (default JSON)

### Example

```bash
curl https://api.vaunt.dev/v1/{provider}/entities/{name}/contributors?format=svg&limit=10
```

## Get Entity achievements  v1/\{provider\}/entities/{name}/achievements

Returns a [Achievement Awarded Object](./objects.md#achievement-awarded-details)

### Required Fields

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

## Optional Query Parameters

- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older
- before: cursor position indication data should be returned that is new
- format: format of the response, supports JSON|SVG (default JSON)

### Example

```bash
curl https://api.vaunt.dev/v1/{provider}/entities/{name}/achievements?format=svg&limit=10
```

## Get Entity Keys v1/\{provider\}/entities/{name}/keys

Returns a [Key Object](./objects.md#key)

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

## Put Entity Keys v1/\{provider\}/entities/{name}/keys

Sets a [Key Object](./objects.md#key) and returns the [Key Id](./objects.md#key-id)

### Required Fields

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

### Headers

- Authorization: "Bearer \<PROVIDER-TOKEN\>"
Required authorization using a provider Personal Access Token.

### Example

```bash
curl -X PUT -H "Authorization: Bearer <PROVIDER-TOKEN>" https://api.vaunt.dev/v1/{provider}/entities/{name}/keys --data '{ "data": {"key": "<YOUR-KEY>"}}'
```

## Get Entity Token v1/\{provider\}/entities/\{name\}/token

Returns a [Token](./objects.md#token)

### Required Fields

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

### Headers

- Authorization: "Bearer \<PROVIDER-TOKEN\>"
Required authorization using a provider Personal Access Token.

### Example

```bash
curl -H "Authorization: Bearer <PROVIDER-TOKEN>" https://api.vaunt.dev/v1/{provider}/entities/{name}/token
```

## Get Entity Repositories  v1/\{provider\}/entities/\{name\}/repositories

Returns a [Repository Details Object](./objects.md#repository-details)

### Required Fields

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

### Optional Query Parameters

- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older
- before: cursor position indication data should be returned that is new

### Headers

- Authorization: "Bearer \<YOUR-TOKEN\>"
Optional authorization using a Vaunt JWT to include private repositories.

### Example

```bash
curl -H "Authorization: Bearer <YOUR-TOKEN>" https://api.vaunt.dev/v1/{provider}/entities/{name}/repositoriesg&limit=10
```

## Get Repository Contributors v1/\{provider\}/entities/\{name\}/repositories/\{repo_name\}/contributors

Returns a [Contributors Details Object](./objects.md#contributor-details)

### Required Fields

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

### Optional Query Parameters

- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older
- before: cursor position indication data should be returned that is new
- format: format of the response, supports JSON|SVG (default JSON)

### Headers

- Authorization: "Bearer \<YOUR-TOKEN\>"
Authorization required for private repositories.

### Example

```bash
curl  -H "Authorization: Bearer <YOUR-TOKEN>" https://api.vaunt.dev/v1/{provider}/entities/{name}/repositories/{repo_name}/contributors?format=svg&limit=10
```
