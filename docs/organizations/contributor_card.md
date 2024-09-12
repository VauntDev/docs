---
sidebar_label: "Contributor Card"
title: Contributor Card
sidebar_position: 3
---
<p>
  <img src="https://api.vaunt.dev/v1/github/entities/VauntDev/repositories/example/contributors?format=svg&limit=12" width="450" />
</p>

## Organization Level 

Add the following code to the .github repository’s profile/README.md to display on the organization README, or anywhere else you would like it displayed. Also, replace {{org_aname}} with your organization name

```html
<p>
<a href="https://community.vaunt.dev/board/{{org_name}}">
  <img src="https://api.vaunt.dev/v1/github/entities/{{org_name}}/contributors?limit=15&format=svg" width="350" />
</p>
```

NOTE: By changing the limit, you can display more than 15 contributors by changing the limit. Max is 70.

## Repository level

Add the following code to the repository README, or anywhere else you would like it displayed. Also, replace {{org_aname}} with your organization name and {{repo_name}} with your repository name 

```html
<p>
<a href="https://community.vaunt.dev/board/{{org_name}}/repository/{{repo_name}}">
  <img src="https://api.vaunt.dev/v1/github/entities/{{org_name}}}/repositories/{{repo_name}}/contributors?format=svg&limit=15" width="350" />
</p>
```

NOTE: By changing the limit, you can display more than 15 contributors by changing the limit. Max is 70.
