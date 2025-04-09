---
sidebar_label: "Vaunt Open Source Community"
title: Vaunt Open Source Community
sidebar_position: 2
---

Vaunt Community Boards provide community statistics, repository insights, and a view into repository achievements. They can be used to track the growth and popularity of open-source projects, as well as to identify trends in the open-source community. They can also be used to showcase the contributions of individual developers and teams.

Below is an example of a repository board.

<p>
    <img src={require('./assets/community_board.png').default}  width="500" height="200"/>
</p>

### How to install the Organization Board on readme profile?

- Install **[Vaunt](https://github.com/marketplace/vaunt-dev)** from GitHub Marketplace.
- Make sure you have granted permission to the repository where you want to utilize Vaunt.
- Add this code to your readme file and replace **\{github_organization_username\}** with your **organization username**.

```html
[![Vaunt
Community](https://api.vaunt.dev/v1/github/entities/{github_organization_username}/badges/community)](https://community.vaunt.dev/board/{github_organization_username})
```

### How to install the Repository Board on readme profile?

- Install **[Vaunt](https://github.com/marketplace/vaunt-dev)** from GitHub Marketplace.
- Make sure you have granted permission to the repository where you want to utilize Vaunt.
- Add this code to your readme file and replace **\{github_organization_username\}** with your **organization name** and **\{github_repository_name \}** with your **repository name**.

```html
[![Vaunt
Community](https://api.vaunt.dev/v1/github/entities/{github_organization_username}/repositories/{github_repository_name}/badges/community)](https://community.vaunt.dev/board/{github_organization_username}/repository/{github_repository_name})
```

<br></br>

#### After successfully installing the preferred board in your repository, you will notice the community board image attached below in your readme file. Click on it, and it will lead you to your community board.

<p>
    <img src={require('./assets/community_badge.png').default}  width="150" height="50"/>
</p>
