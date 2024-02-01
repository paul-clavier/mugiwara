# Mugiwara

## Content

### Components

This library is using [shadcn](https://ui.shadcn.com/) component library. If you're willing to test the components, please feel free to use
their own playground on their website

### Hooks

This library contains useful hooks that can be imported in React projects

### Monads

Monads are based on the [boxed package](https://swan-io.github.io/boxed/) and enable doing functional programming in Typescript

## Package

### Build

This was made following this [article](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)

## Release

### Working locally

For a release from your computer's terminal, please follow this [link](https://docs.github.com/en/packages/learn-github-packages/publishing-a-package)

Token<br/>
Go to Github to create a Personal Access Token

Login

```sh
npm login --scope=@paul-clavier --auth-type=legacy --registry=https://npm.pkg.github.com
>Username: paul-clavier
>Password: <YOUR_PERSONAL_ACCESS_TOKEN>
```

### Publish a patch

When working locally on the package you can try testing it by running

```sh
npm run publish:patch
```

This command will push a new patched version to GitHub, that you can install in your repository.

### Deployment

The CD will take charge of releasing a minor bump of the library every time a MR is merged (not implemented yet)

## to do

-   Add css variables to styles components with custom theme (look how to integrate it with tailwing)
-   Add hooks into the package
-   Add monads into the package
-   Add a CD to deploy a new minor version of the app everytime a change is brought
