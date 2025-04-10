---
sidebar_label: "Vaunt Open Source Community"
title: Vaunt Open Source Community
sidebar_position: 2
---

Vaunt Community Boards provide comprehensive analytics and visibility for open-source projects. These boards display essential community statistics, detailed repository insights, and a showcase of repository achievements all in one place. Community Boards serve as a central dashboard where maintainers and contributors can monitor project health and engagement.

## Benefits and Use Cases

Community Boards offer multiple advantages for open-source projects and their maintainers:
- **Track Growth**: Monitor the development and increasing popularity of your open-source projects over time through visual metrics and trends.
- **Identify Trends**: Spot patterns in community engagement, contribution frequency, and other key performance indicators.
- **Recognize Contributors**: Showcase the valuable contributions of individual developers and teams, fostering a culture of appreciation.
- **Attract New Contributors**: A well-maintained Community Board demonstrates project activity and can help attract new developers to your project.
- 
Below is an example of a repository board showcasing key metrics and insights:

<p align="center">
  <img src={require('./assets/community_board.png').default} alt="Vaunt Community Board showing repository metrics including PR merge age, issue resolution time, and contribution activity" width="100%" style="max-width: 900px; border-radius: 6px; box-shadow: 0 3px 10px rgba(0,0,0,0.15);" />
</p>

*Key components of a Community Board:*

1. **Repository Profile** - View essential repository information including license type, primary language, and engagement metrics like stars and forks
2. **Performance Analytics** - Track efficiency metrics such as pull request merge age and issue resolution time
3. **Activity Visualization** - Monitor project momentum through star acquisition and contribution trends
4. **Contributor Insights** - See unique contributor count and participation patterns over time


### How to install the Organization Board on readme profile?

- Install [Vaunt](https://github.com/marketplace/vaunt-dev) from GitHub Marketplace.
- Make sure you have granted permission to the repository where you want to utilize Vaunt.
- Add this code to your readme file and replace **\{github_organization_username\}** with your **organization username**.

```html

    [![Vaunt Community](https://api.vaunt.dev/v1/github/entities/{github_organization_username}/badges/community)](https://community.vaunt.dev/board/{github_organization_username})

```


### How to install the Repository Board on readme profile?

- Install [Vaunt](https://github.com/marketplace/vaunt-dev) from GitHub Marketplace.
- Make sure you have granted permission to the repository where you want to utilize Vaunt.
- Add this code to your readme file and replace **\{github_organization_username\}** with your **organization name** and **\{github_repository_name \}** with your **repository name**. 

```html

[![Vaunt Community](https://api.vaunt.dev/v1/github/entities/{github_organization_username}/repositories/{github_repository_name}/badges/community)](https://community.vaunt.dev/board/{github_organization_username}/repository/{github_repository_name})

```
<br></br>

#### After successfully installing the preferred board in your repository, you will notice the community board image attached below in your readme file. Click on it, and it will lead you to your community board.


<p>
    <img src={require('./assets/community_badge.png').default}  width="150" height="50"/>
</p>
