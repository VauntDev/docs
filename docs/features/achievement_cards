---
sidebar_label: “Achievement Cards"
title: Achievement Cards
sidebar_position: 2
---

Similar to developer cards, developers can use Vaunt's API to embed Achievement cards they have earned! The primary goal of achievement cards is to provide a easy way for developers to showcase your more contributions.

Over time, we will be adding more customization for achievement cards. We have initially added support for GitHub and will be evaluating adding other VCS vendors in the future.


# Types of Cards 

Cards are embeddable images that contain various information. We will be adding more and more cards to Vaunt as development continues.

# How to install the Achievement Card on Github profile?

GitHub provides users with the ability to customize their profile pages by creating a profile readme file. You can learn more about managing your GitHub readme here.

In short, the readme file is a simple markdown file that can be used to describe yourself. GitHub has a wide range of support for markdown features and if you are new to markdown, you can find an introduction from GitHub here.

We have taken advantage of this awesome Github feature by leveraging the basic HTML support provided to embed our Developer Cards.

Once you have created a user repository with a readme file, simply add the following lines and replace github_username with your username.

```html
<p>
  <img src="https://api.vaunt.dev/v1/github/entities/{{github_username}}/achievements?format=svg&limit=3" width="350" />
</p>
```

By changing the limit, you can display more than 3 achievements. The maximum value is 50.
