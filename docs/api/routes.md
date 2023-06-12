---
sidebar_label: "Routes"
sidebar_position: 3
---

# Get Entity v1/{provider}/entities/{name}

Returns a [Entity Details Object](./objects.md#entity-details)

## Required Url Parameters

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

## Optional Query Parameters

- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older
- before: cursor position indication data should be returned that is new

## example

```bash
curl api.vaunt.dev/v1/{provider}/entities/{name}
```

# Get Entity Contributions  v1/{provider}/entities/{name}/contributions

Returns a [Entity Details Object](./objects.md#entity-details)

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
curl https://api.vaunt.dev/v1/{provider}/entities/{name}/contributions?format=svg,private=true
```

# Get Entity Contributors  v1/{provider}/entities/{name}/contributors

Returns a [Contributors Details Object](./objects.md#contributor-details)

## Required Fields

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

## Optional Query Parameters

- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older
- before: cursor position indication data should be returned that is new
- format: format of the response, supports JSON|SVG (default JSON)

## example

```bash
curl https://api.vaunt.dev/v1/{provider}/entities/{name}/contributors?format=svg&limit=10
```

# Get Entity achievements  v1/{provider}/entities/{name}/achievements

Returns a [Achievement Awarded Object](./objects.md#achievement-awarded-details)

## Required Fields

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

## Optional Query Parameters

- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older
- before: cursor position indication data should be returned that is new
- format: format of the response, supports JSON|SVG (default JSON)

## example

```bash
curl https://api.vaunt.dev/v1/{provider}/entities/{name}/achievements?format=svg&limit=10
```

# Get Entity Repositories  v1/{provider}/entities/{name}/repositories

Returns a [Repository Details Object](./objects.md#repository-details)

## Required Fields

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

## Optional Query Parameters

- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older
- before: cursor position indication data should be returned that is new

## Headers

- Authorization: "Bearer <YOUR-TOKEN>"
Optional authorization using a Vaunt JWT to include private repositories.

## example

```bash
curl -H "Authorization: Bearer <YOUR-TOKEN>" https://api.vaunt.dev/v1/{provider}/entities/{name}/repositories/{repo_name}/contributorscontributors?format=svg&limit=10
```

# Get Repository Contributors  v1/{provider}/entities/{name}/repositories/{repo_name}/contributors

Returns a [Contributors Details Object](./objects.md#contributor-details)

## Required Fields

- provider: (i.e github)
- name: name of the entity to be looked up (i.e GitHub username)

## Optional Query Parameters

- limit: limit of data returned (max 100)
- after: cursor position indication data should be returned that is older
- before: cursor position indication data should be returned that is new
- format: format of the response, supports JSON|SVG (default JSON)

## Headers

- Authorization: "Bearer <YOUR-TOKEN>"
Authorization required for private repositories.

## example

```bash
curl  -H "Authorization: Bearer <YOUR-TOKEN>" https://api.vaunt.dev/v1/{provider}/entities/{name}/repositories/{repo_name}/contributorscontributors?format=svg&limit=10
```
