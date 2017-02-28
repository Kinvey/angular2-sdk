# Kinvey Angular2 SDK
[Kinvey](http://www.kinvey.com) (pronounced Kin-vey, like convey) makes it ridiculously easy for developers to setup, use and operate a cloud backend for their mobile apps. They don't have to worry about connecting to various cloud services, setting up servers for their backend, or maintaining and scaling them.

This npm package makes it very easy to connect your Angular2 app with Kinvey

## Troubleshooting
__1) I have imported the SDK into my app but I get a message that `kinvey-angular2-sdk cannot be found`. What should I do?__

Turns out, mixing JavaScript and TypeScript can be problematic when TypeScript doesn't understand the extra code. In order to get the `kinvey-angular2-sdk` to be recognized by your Angular2 app you will need to create a typings definition file. Please refer to [Typings for NPM Packages](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html) on how to create a typings definition file for the `kinvey-angular2-sdk`. You will then have to refer to [Angular TypeScript Configuration](https://angular.io/docs/ts/latest/guide/typescript-configuration.html) on how to integrate this typings definition file into your project. Feel free to submit a pull request to help us integrate it into the repository.

If you would prefer to just get started without creating a typings definition file you can instead write your Angular2 app with JavaScript and not TypeScript. The [Angular2 Starter](https://github.com/blacksonic/angular2-esnext-starter) is a good starting point for writing your Angular2 application with just JavaScript. You can use the `kinvey-angular2-sdk` with this project without any additional setup.

## How to use

#### 1. Sign up for Kinvey
To use the SDK, sign up for Kinvey if you have not already done so. Go to the [sign up](https://console.kinvey.com/#signup) page, and follow the steps provided.

#### 2. Install the SDK
You can install the module using npm:

```bash
npm install kinvey-angular2-sdk --save
```

#### 3. Configure the SDK
Import the SDK in your code.

```javascript
import Kinvey from 'kinvey-angular2-sdk';
```

Next, use `Kinvey.initialize` to configure your app. Replace `<appKey>` and `<appSecret>` with your apps app key and secret. You can find these for your app using the [Kinvey Console App](https://console.kinvey.com).

```javascript
Kinvey.initialize({
  appKey: '<appKey>',
  appSecret: '<appSecret>'
})
  .then((activeUser) => {
    // ...
  });
```

## What’s next?
You are now ready to start building your awesome apps! Next we recommend diving into the [User guide](http://devcenter.kinvey.com/angular2/guides/users) or [Data store guide](http://devcenter.kinvey.com/angular2/guides/datastore) to learn more about our service, or explore the [sample apps](http://devcenter.kinvey.com/angular2/samples) to go straight to working projects.

## Build
Execute `npm run build` to build the package.

## Release
[TravisCI](https://travis-ci.org/Kinvey/angular2-sdk) will deploy the pacakge to [NPM](https://www.npmjs.com/package/kinvey-angular2-sdk).

1. Checkout the master branch.
2. Update the CHANGELOG.md.
3. Execute `npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]`. See [Version Management](#version-management) for more info on incrementing the version.
4. Done.

### Version Management
Updating the package version should follow [Semantic Version 2.0.0](http://semver.org/):

* Major (x.0.0): when making an incompatible API changes.
* Minor (3.x.0): when adding functionality in a backwards-compatible manner.
* Patch (3.0.x): when making backwards-compatible bug fixes or enhancements.

## Test
_Note: Before running any tests you will need to run `npm install` to install any dependencies required._

### Unit Tests
The steps for running the unit tests is as follows:

1. Open a terminal window and execute `npm test`.

### End to End Tests
The steps for running the end to end tests is as follows:

#### Start Selenium Web Server
1. Open a terminal window.
2. Change directory to the location of the project.
3. Execute `npm run e2e:server`. __Keep this terminal window open.__

#### Start App
__Requirement:__ Execute `npm install -g yo generator-kinvey-html` to globally install [Yeoman](http://yeoman.io/) and [generator-kinvey-html](https://www.npmjs.com/package/generator-kinvey-html). You only need to do this once.

1. Open a terminal window.
2. Change directory to the location of the project.
3. Execute `npm run e2e:app`. __Keep this terminal window open.__

#### Run End to End Tests
1. Open a terminal window.
2. Change directory to the location of the project.
3. Execute `npm run e2e:test`.

## License
See [LICENSE](LICENSE) for details.

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for details on reporting bugs and making contributions.
