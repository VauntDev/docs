---
sidebar_label: "Achievements"
title: Achievements
sidebar_position: 2
---

Achievements are a way for developers or organizations to incentivize other developers to make contributions to their repositories. By using a Vaunt achievements config
you can enable a set of achievements for contributors to your repository.  Developers can showcase their own achievements or a repository can showcase the achievements earned
by contributors.

## Example

The VauntDev [Example](https://github.com/VauntDev/example) repository provides an [example config](https://github.com/VauntDev/example/blob/main/.vaunt/config.yaml)
that can be placed in any repository that has Vaunt installed to enabled achievements.

The full yaml config looks like this:

```Yaml
version: 0.0.1
achievements:
  - achievement:
      name: Shooting Star
      icon: https://raw.githubusercontent.com/vauntdev/example/main/.vaunt/shooting_star.png
      description: Awarded for staring our repository, make a wish!
      triggers:
        - trigger:
            actor: author
            action: star
            condition: starred = true
  - achievement:
      name: Every Bit Counts
      icon: https://raw.githubusercontent.com/vauntdev/example/main/.vaunt/every_bit_counts.png
      description: No commit is to small!
      triggers:
        - trigger:
            actor: author
            action: commit
            condition: count() >= 1
  - achievement:
      name: Pull Request Hero
      icon: https://raw.githubusercontent.com/vauntdev/example/main/.vaunt/pull_request_hero.png
      description: You're a PR hero, rock on!
      triggers:
        - trigger:
            actor: author
            action: pull_request
            condition: merged = true
  - achievement:
      name: Closer
      icon: https://raw.githubusercontent.com/vauntdev/example/main/.vaunt/closer.png
      description: Only closers get coffee!
      triggers:
        - trigger:
            actor: author
            action: issue
            condition: closed = true
```

This example uses a standard set of achievements that are free for any Vaunt users.

## Vaunt Config Explanation

The Achievements defined in the Vaunt config have several attributes that will be customizable for plans in the future.

### Achievement Name

The name of the achievement.

### Achievement Icon

The url to an icon image to use for the achievement.  This can be displayed when showcasing achievements.

### Achievement Description

A description of the achievement that can be shown as hovertext when showcasing.

### Achievement Triggers

Triggers are used to define the conditions that must be reached for a user to earn a given achievement.
There are several fields to a trigger that allow you to customize the exact requirements.

#### Actor

The Actor controls the subject of the condition. For most actions this will be the author.
However, for pull_request specifically this can also be set to reviewers or assignees and for issues this may be set to resolved_by.

#### Action

Action defines the contribution action that this trigger uses.

| Action | description |
|--------|-------------|
| pull_request | create actions related to opening or merging pull requests |
| review | create actions related to reviewing pull requests |
| commit | create actions related to authoring commits |
| issue | create actions related to opening or resolving issues |
| discussion | create actions related to opening or answering discussions |
| star | create actions for starring the repository |

#### Pull Request Fields

| field | type | description |
|-------|------|-------------|
| merged | bool | whether the pull request has been merged |
| closed | bool | whether the pull request has been closed |
| comments | int | number of comments on the pull request |
| reactions | int | number of reactions on the pull request |
| additions | int | number of commit additions made in the pull request |
| deletions | int | number of commit deletions made in the pull request |
| changed_files | int | number of changed files in the pull request |
| commits | int | number of commits made in the pull request |
| labels | string array | list of labels assigned to the pull request |
| created_at | date | the date the pull request was created |
| closed_at | date | the date the pull request was closed |

#### Review Fields

| field | type | description |
|-------|------|-------------|
| created_at | date | the date the review was created |

#### Commit Fields

| field | type | description |
|-------|------|-------------|
| additions | int | number of commit addition |
| deletions | int | number of commit deletions |
| changed_files | int | number of changed files |
| created_at | date | the date the commit was created |

#### Issue Fields

| field | type | description |
|-------|------|-------------|
| closed | bool | whether the issue has been closed |
| comments | int | number of comments on the issue |
| reactions | int | number of reactions on the issue |
| labels | string array | list of labels assigned to the issue |
| created_at | date | the date the issue was created |
| closed_at | date | the date the issue was closed |

#### Discussion Fields

| field | type | description |
|-------|------|-------------|
| closed | bool | whether the discussion has been closed |
| comments | int | number of comments on the discussion |
| upvotes | int | number of upvotes on the discussion|
| reactions | int | number of reactions on the discussion |
| created_at | date | the date the discussion was created |
| closed_at | date | the date the discussion was closed |

#### Star Fields

| field | type | description |
|-------|------|-------------|
| starred | bool | whether the repository was starred |
| created_at | date | the date the star was given |

### Conditions

The condition uses one or more of the fields from the action to create a conditional check for the achievement.
The comparison should be appropriate for the type of the field such as equality for booleans or numeric comparison
for integers, for example: `merged = true` or `comments > 10`.

Multiple conditions can be combined in a single trigger with the `&` and `|` operators.

There are also a couple helpful functions that may be included.

#### Functions

- Count()

Count can be used to return the number of times an action has occurred. For example, the commit action
with a condition of `count() >= 10` would be fulfilled when a user has 10 or more commits in the repository.

You can additionally include conditionals inside the parenthesis of the count function to restrict which actions
would be included in the count. For example, on a pull_request action the condition `count(merged = true) >= 10`
would resolve for users that have created 10 or more pull requests that have been merged.

- Age({interval})

Age can be used to include the age of pull_request, issues, reviews, or discussions in the condition.
Age is defined as the time from open to close of the given action.

The {interval} value must be one of either seconds, minutes, hours, or days.

For example, the condition `age(days) < 10` on a pull_request action would resolve to pull_requests
that were merged in less than 10 days.
