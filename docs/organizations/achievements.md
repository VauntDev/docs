---
sidebar_label: "Achievements"
title: Achievements
sidebar_position: 1
---

**Achievements** are a way for developers or organizations to incentivize other developers to make contributions to their repositories. By using a Vaunt achievements config
you can enable a set of achievements for contributors to your repository. Developers can showcase their own achievements or a repository can showcase the achievements earned
by contributors.

## Example

This example shows some of the standard achievement definitions. You can place this file in your repository under `./.vaunt/config.yaml` with updated image urls for the icons to enable Achievements for you repository.

```Yaml
version: 0.0.1
achievements:
  - achievement:
      name: Shooting Star
      icon: <image_url>
      description: Awarded for starring our repository, make a wish!
      triggers:
        - trigger:
            actor: author
            action: star
            condition: starred = true
  - achievement:
      name: Every Bit Counts
      icon: <image_url>
      description: No commit is too small!
      triggers:
        - trigger:
            actor: author
            action: commit
            condition: count() >= 1
  - achievement:
      name: Pull Request Hero
      icon: <image_url>
      description: You're a PR hero, rock on!
      triggers:
        - trigger:
            actor: author
            action: pull_request
            condition: merged = true
  - achievement:
      name: Closer
      icon: <image_url>
      description: Only closers get coffee!
      triggers:
        - trigger:
            actor: author
            action: issue
            condition: closed = true
```

This example uses a standard set of achievements that are free for any Vaunt users.

Check out the **[webhooks](webhooks.md)** guide for information about setting up webhooks for your achievements.

## Vaunt Config Explanation

The Achievements defined in the Vaunt config have several attributes that will be customizable for plans in the future.

### Achievement Name

The name of the achievement. The name will be displayed on achievement card, Vaunt open source community. We recommend a maximum of **20 characters**.

We use the name for the primary identifier.

- If you change the name, it is a new achievement. The old achievement is active.
- If you want to stop giving out the old achievement, please contact us for support.
- If you change trigger, such as icon, description, and trigger, it is still a same achievement.
- If you remove the achievements from the yaml file, users will still have the achievements they earned.

### Achievement Icon

The url to an icon image to use for the achievement. This can be displayed when showcasing achievements. We recommend the following:

- **(Required) Aspect ratio: 1:1**
- **(Required) Format: PNG or JPEG**
- **(Suggested) Image size: 500 x 500 px**
- **(Suggested) Sharp: Round**
- **(Suggested) File Size: Under 1 MB**

### Achievement Description

A description of the achievement that can be shown as *hovertext* when showcasing. The discription will be only displayed on Vaunt open source community. We recommend a maximum of **100 characters**.

### Achievement Type

An optional field to specify the type of achievement. Achievements may be one of a number of types
that use some additional information to determine how achievements should be awarded.

The current supported types are:

- **ongoing** (default)
- **once**

An achievement of type *"ongoing"* is one that can be earned at any time that a user qualifies for it. The conditions
for this achievement will be checked periodically and awards granted to users when they meet the contribution
requirements.

An achievement of type "once" is awarded only at a configured date and then is no longer earnable even if users
meet the conditions after the fact. The date for this field must be provided in the `metadata.date` field of the achievement.

### Achievement Metadata

`Metadata` is an optional field that provides some metadata about the achievement that may vary based on the achievement type.
Currently, the only supported metadata field is **"Date"** which provides a date in month-day-year format on which to award an
achievement of type `"once"`.

For example:

```Yaml
  - achievement:
      type: once
      metadata:
          date: 01-19-2024
```

This achievement would be granted one time to qualified users on January 19th, 2024.

### Achievement Triggers

**Triggers** are used to define the conditions that must be reached for a user to earn a given achievement.
There are several fields to a trigger that allow you to customize the exact requirements.

#### Actor

The **Actor** controls the subject of the condition. For most actions this will be the author. However, for `pull_request` specifically this can also be set to reviewers or assignees and for issues this may be set to `resolved_by`.

| Actor           | Supported Actions                                     |
| --------------- | ----------------------------------------------------- |
| **author**      | pull_request, review, commit, issue, discussion, star |
| **resolved_by** | issue                                                 |
| **assignees**   | pull_request, issue                                   |
| **reviewers**   | pull_request                                          |

#### Action

**Action** defines the contribution action that this trigger uses.

| Action                   | description                                                   |
| ------------------------ | ------------------------------------------------------------- |
| **pull_request**         | create actions related to opening or merging pull requests    |
| **review**               | create actions related to reviewing pull requests             |
| **commit**               | create actions related to authoring commits                   |
| **issue**                | create actions related to opening or resolving issues         |
| **issue_comment**        | create actions related to authoring comments on issues        |
| **pull_request_comment** | create actions related to authoring comments on pull requests |
| **discussion**           | create actions related to opening or answering discussions    |
| **star**                 | create actions for starring the repository                    |
| **point**                | special action that uses point values from action definitions |

#### Pull Request Fields

| field             | type         | description                                           |
| ----------------- | ------------ | ----------------------------------------------------- |
| **merged**        | bool         | whether the pull request has been merged              |
| **closed**        | bool         | whether the pull request has been closed              |
| **comments**      | int          | number of comments on the pull request                |
| **reactions**     | int          | number of reactions on the pull request               |
| **additions**     | int          | number of commit additions made in the pull request   |
| **deletions**     | int          | number of commit deletions made in the pull request   |
| **changed_files** | int          | number of changed files in the pull request           |
| **commits**       | int          | number of commits made in the pull request            |
| **labels**        | string array | list of labels assigned to the pull request           |
| **emojis**        | string array | list of reaction emojis on the pull request body      |
| **reactors**      | string array | list of users that have reacted to the pull request   |
| **created_at**    | date         | the date the pull request was created                 |
| **merged_at**     | date         | the date the pull request was merged                  |
| **closed_at**     | date         | the date the pull request was closed                  |
| **actor**         | string array | list of users to include or exclude from this trigger |

#### Review Fields

| field          | type         | description                                           |
| -------------- | ------------ | ----------------------------------------------------- |
| **created_at** | date         | the date the review was created                       |
| **actor**      | string array | list of users to include or exclude from this trigger |

#### Commit Fields

| field             | type         | description                                           |
| ----------------- | ------------ | ----------------------------------------------------- |
| **additions**     | int          | number of commit addition                             |
| **deletions**     | int          | number of commit deletions                            |
| **changed_files** | int          | number of changed files                               |
| **created_at**    | date         | the date the commit was created                       |
| **actor**         | string array | list of users to include or exclude from this trigger |

#### Issue Fields

| field          | type         | description                                                                      |
| -------------- | ------------ | -------------------------------------------------------------------------------- |
| **closed**     | bool         | whether the issue has been closed                                                |
| **comments**   | int          | number of comments on the issue                                                  |
| **reactions**  | int          | number of reactions on the issue                                                 |
| **labels**     | string array | list of labels assigned to the issue                                             |
| **emojis**     | string array | list of reaction emojis on the issue body                                        |
| **reactors**   | string array | list of users that have reacted to the issue                                     |
| **reason**     | string       | the state reason for an issue, can be either REOPENED, COMPLETED, or NOT_PLANNED |
| **created_at** | date         | the date the issue was created                                                   |
| **closed_at**  | date         | the date the issue was closed                                                    |
| **actor**      | string array | list of users to include or exclude from this trigger                            |

#### Issue Comment Fields

| field          | type         | description                                           |
| -------------- | ------------ | ----------------------------------------------------- |
| **reactions**  | int          | number of reactions on the issue                      |
| **emojis**     | string array | list of reaction emojis on the issue comment          |
| **reactors**   | string array | list of users that have reacted to the comment        |
| **created_at** | date         | the date the issue was created                        |
| **actor**      | string array | list of users to include or exclude from this trigger |

#### Pull Request Comment Fields

| field          | type         | description                                           |
| -------------- | ------------ | ----------------------------------------------------- |
| **reactions**  | int          | number of reactions on the issue                      |
| **emojis**     | string array | list of reaction emojis on the pull request comment   |
| **reactors**   | string array | list of users that have reacted to the comment        |
| **created_at** | date         | the date the issue was created                        |
| **actor**      | string array | list of users to include or exclude from this trigger |

#### Discussion Fields

| field          | type         | description                                           |
| -------------- | ------------ | ----------------------------------------------------- |
| **closed**     | bool         | whether the discussion has been closed                |
| **comments**   | int          | number of comments on the discussion                  |
| **upvotes**    | int          | number of upvotes on the discussion                   |
| **reactions**  | int          | number of reactions on the discussion                 |
| **created_at** | date         | the date the discussion was created                   |
| **closed_at**  | date         | the date the discussion was closed                    |
| **actor**      | string array | list of users to include or exclude from this trigger |

#### Star Fields

| field          | type         | description                                           |
| -------------- | ------------ | ----------------------------------------------------- |
| **starred**    | bool         | whether the repository was starred                    |
| **created_at** | date         | the date the star was given                           |
| **actor**      | string array | list of users to include or exclude from this trigger |

### Point fields

| field      | type         | description                                           |
| ---------- | ------------ | ----------------------------------------------------- |
| **points** | int          | number of points the user has earned                  |
| **actor**  | string array | list of users to include or exclude from this trigger |

### Conditions

The condition uses one or more of the fields from the action to create a conditional check for the achievement.
The comparison should be appropriate for the type of the field such as equality for booleans or numeric comparison
for integers, for example: `merged = true` or `comments > 10`.

The string array fields `labels` and `files` use a special list comparison `in` with a list of strings to check against.
There are several options for comparing the list based on way the list is provided. The short description is that `[]` means any,
`![]` means not any, `{}` means all, and `!{}` means not all.

The easiest way to understand is by looking at some examples. The following conditions compare the labels of an issue:

- `labels in ['bug', 'good first issue']` matches if the item has either of these labels
- `labels in !['spam', 'duplicate']` matches if the item does NOT have any of these labels
- `labels in {'bug', good first issue']` matches if the item has ALL of these labels
- `labels in !{'bug', 'good first issue'}` matches if the item has does NOT have ALL of these labels (would still match on label "bug", but not on "bug" and "good first issue")

Multiple conditions can be combined in a single trigger with the `&` and `|` operators. `AND` doesn’t work.

There are also a couple helpful functions that may be included.

## Actions

In addition to standard achievements, the Vaunt config can be used to create custom actions that may be referenced by achievements.
Actions have many of the same fields as achievements with a few minor differences.

An action must specify the type field, which denotes the type of action being defined. Currently only `point` actions are supported,
but we plan on adding additional types in the future.

Also the trigger object for actions has an addtional `value` field which specifies a numeric value for the action, which for the `point`
type is the number of points awarded for completing the action.

Below is an example Vaunt config with actions and an achievement referencing the action:

```Yaml
version: 0.0.1
actions:
  - action:
      type: point
      name: commits
      triggers:
        - trigger:
            actor: author
            action: commit
            condition: count(created_at >= 01-01-2023) >= 1
            value: 4
  - action:
      type: point
      name: prs
      triggers:
        - trigger:
            actor: author
            action: pull_request
            condition: merged = true & created_at >= 01-01-2023
            value: 10
achievements:
  - achievement:
      name: Top Contributor 2023
      icon: contributor.png
      description: Awarded to the top contributor of 2023
      type: once
      metadata:
        date: 01-01-2024
      triggers:
          - trigger:
                actor: author
                action: point
                condition: rank(1) sum(commits, prs)
```

## Functions

### count()

Count can be used to return the number of times an action has occurred. For example, the commit action
with a condition of `count() >= 10` would be fulfilled when a user has 10 or more commits in the repository. Since we are not able to do everything in real-time, it will be safer to use `>=` to make sure contributors get the achievement

You can additionally include conditionals inside the parenthesis of the count function to restrict which actions
would be included in the count. For example, on a pull_request action the condition `count(merged = true) >= 10`
would resolve for users that have created 10 or more pull requests that have been merged.

### age(\{interval\})

Age can be used to include the age of pull_request, issues, reviews, or discussions in the condition.
Age is defined as the time from open to close of the given action.

The \{interval\} value must be one of either seconds, minutes, hours, or days.

For example, the condition `age(days) < 10` on a pull_request action would resolve to pull_requests
that were merged in less than 10 days.

### sum(\{actions\})

Sum can be used to aggregate the values of one or more defined actions to award achievements for.
Multiple actions can be provided as a comma delimited list. For example the condition `sum(commits, prs) > 10`
would award an achievement to users that have earned at least 10 points across the user defined commits and prs
actions.

### rank(\{num\})

Rank can be used with the point action to specify that an achievement is awarded specifically to the user at the
provided rank. This can be used alongside the sum() function to order users by a given action.
For example, `rank(1) & sum(my_action)` would award the achievement to the user that has the most number of points
based on their contributions and the criteria of `my_action`.
