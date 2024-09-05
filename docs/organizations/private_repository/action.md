---
sidebar_label: "Github Action"
title: Github Action
sidebar_position: 2
---

GitHub Actions provide a way to automate and customize workflows within a GitHub repository. Refer to the [GitHub documentation](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) for more information about how to create and use your own actions. Here we will discuss how we created the Vaunt action and what it does as well as how you can add it to your own repositories.

The Vaunt action is published on the GitHub Marketplace [here](https://github.com/marketplace/actions/vaunt-cards-action) and you may find the action source code in the repository [here](https://github.com/VauntDev/vaunt-cards-action). Once you have added the workflow you will also need to make sure that your repository gives Workflows Read and Write permissions as it uses this to check-in the contributors file. To do this in your repository go to settings->Actions->General and scroll down to the Workflow permissions section:

<p>
    <img src={require('./assets/workflow_permissions.png').default} width="500" height="500"/>
</p>

The last thing to know, if you are installing this on a private repository you will need to generate a GitHub Personal Access Token and provide it as a secret to the Action as input. The authentication process is described in more detail in another blog, but for the purposes of this action you just need to know that you will use a GitHub token for input to validate that you are the owner or admin of the repository.

Once you have created a token as described here you can add the token as a repository secret to be provided as a parameter in the workflow. You can do this by going to settings in your repository and selecting Secrets and variables->actions:

<p>
    <img src={require('./assets/actions_secrets.png').default} width="500" height="500"/>
</p>

Click the button that says New repository secret, give it a name that you will use in the workflow such as “PAT” for Personal Access Token, and paste the token string as the secret. Then in your workflow file, make sure that you have the token provided as input using the with field like this:

```Yaml
  with:
    # Github Personal Access Token for private repositories
    token: ${{ secrets.PAT }}
```

## Workflow Explanation

See the example Workflow below:

```Yaml
name: Vaunt Cards Update
on:
  workflow_dispatch:
  schedule:
  - cron: 30 * * * *

jobs:
  my_job:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v3
    - name: Update Vaunt Cards
      uses: VauntDev/vaunt-cards-action@main
      with:
        # Github Personal Access Token for private repositories
        token: ${{ secrets.PAT }}
        limit: 10
```

The workflow_dispatch status event is a way to have a workflow manually triggered. In our case we want the workflow to start on a cron schedule and attempt to pull down the Vaunt status cards if they have updated. In this example it is using `cron: 30 * * * *` which means it will run every hour at 30 minutes after the hour. Feel free to adjust this to a time that you prefer. One thing to note about this workflow_dispatch method is that the action will only run when this is added to the default branch of your repository.

This particular job checks out the current default branch, then calls the Vaunt Cards Action, which will update the contributors card at `.vaunt/cards/contributors.svg` and then check-in the updated file.

Additionally, if you would prefer to keep your files in a separate branch you can modify the Checkout step to pick a specific branch of your repository to checkout.  For example, if you use an assets branch your Checkout step would look like this:

```Yaml
    - name: Checkout
      uses: actions/checkout@v3
      with: { ref: assets }
```

There are also two optional input values you can set on the vaunt-cards-action. The first value is token which sets the GitHub Personal Access Token to use for authentication if you want to run this action on a private repository. This should be the name of the repository secret that was explained earlier. The other input value is limit, and this sets the maximum number of contributors to include in the response. By default it uses 10, but this value can be set to up to 100 to return the maximum number of contributors.

Using the Card

Once you have the workflow up and running you will now have a location where the contributors.svg file is being updated and you can reference this file in your repository readme. One way to do this is with a simple markdown image link. Assuming you have the card on your main branch you would do that by adding the following to your readme:

```Markdown
![Contributors](.vaunt/cards/contributors.svg)
```

If you placed you setup your workflow to checkout and place the image in a separate branch then you can still use a markdown link, but you must use the full url path:

```Markdown
![Contributors](https://github.com/<owner>/<repo>/blob/<branch>/.vaunt/cards/contributors.svg)
```

If you would like a bit more control over the display of the image you can embed an html img link in your readme also using the full url path:

```HTML
<p>
    <a href="https://vaunt.dev">
        <img src="https://github.com/<owner>/<repo>/blog/<branch>/.vaunt/cards/contributors.svg" width="350" />
    </a>
</p>
```
