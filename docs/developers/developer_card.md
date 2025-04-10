---
sidebar_label: "Developer Card"
title: Developer Card
sidebar_position: 2
---

Developers Cards are a new way for developers to showcase their experience and contributions to repositories. The primary goal of developer cards is to provide more visibility into how a developer is engaging with various public or private projects.

<p>    
<a href="https://community.vaunt.dev/board/simonmazzaroth">
        <img src="https://api.vaunt.dev/v1/github/entities/simonmazzaroth/contributions?format=svg" width="300" title="Includes public contributions"/>
    </a>
</p>

Over time, we will be adding more flexibility and customization for developers to create personalized cards. We have initially added support for GitHub and will be evaluating adding other VCS vendors in the future

## Profile Cards

Profile cards summarize contributions and calculate a user experience level.

These cards contain the following information


These cards contain the following information 
- **Pull Requests**: count of pull requests 
- **Reviews**: count of pull request reviews  
- **Commits**: count of commits 
- **Issues**: count of issues 
- **Stars**: count of stars earned 
- **Contributed to**: count of unique repositories contributed to. 
- **Level**: level based on user experience


## Setup

We have taken advantage of this awesome Github feature by leveraging the basic HTML support provided to embed our Developer Cards.

Once you have created a user repository with a readme file, simply add the following lines and replace \{github_username\} with your username.

```html
<p>
  <a href="https://vaunt.dev">
    <img
      src="https://api.vaunt.dev/v1/github/entities/{github_username}/contributions?format=svg"
      width="350"
      title="Includes public contributions"
    />
  </a>
</p>
```

Optionally, you can include private repositories by passing `private=true` as a query parameter

Here is an updated example **including** private contributions.

```html
<p>
  <a href="https://vaunt.dev">
    <img
      src="https://api.vaunt.dev/v1/github/entities/{github_username}/contributions?format=svg&private=true"
      width="350"
      title="Includes public and private contributions"
    />
  </a>
</p>
```

You can also feel free to adjust the width of the SVG cards.

You can find a complete readme example **[here](https://github.com/simonmazzaroth/simonmazzaroth/blob/main/README.md)**.
