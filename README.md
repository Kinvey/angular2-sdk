# Kinvey Angular2 SDK
[Kinvey](http://www.kinvey.com) (pronounced Kin-vey, like convey) makes it ridiculously easy for developers to setup, use and operate a cloud backend for their mobile apps. They don't have to worry about connecting to various cloud services, setting up servers for their backend, or maintaining and scaling them.

This node and bower module makes it very easy to connect your Angular2 app with Kinvey

## Troubleshooting
__1) I have imported the SDK into my app but I get a message that `kinvey-angular2-sdk cannot be found`. What should I do?__

Turns out, mixing JavaScript and TypeScript can be problematic when TypeScript doesn't understand the extra code. In order to get the `kinvey-angular2-sdk` to be recognized by your Angular2 app you will need to create a typings definition file. Please refer to [Typings for NPM Packages](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html) on how to create a typings definition file for the `kinvey-angular2-sdk`. You will then have to refer to [Angular TypeScript Configuration](https://angular.io/docs/ts/latest/guide/typescript-configuration.html) on how to integrate this typings definition file into your project. Feel free to submit a pull request to help us integrate it into the repository.

If you would prefer to just get started without creating a typings definition file you can instead write your Angular2 app with JavaScript and not TypeScript. The [Angular2 Starter](https://github.com/blacksonic/angular2-esnext-starter) is a good starting point for writing your Angular2 application with just JavaScript. You can use the `kinvey-angular2-sdk` with this project without any additional setup.


## How to use

#### 0. Sign up for Kinvey
To use the SDK, sign up for Kinvey if you have not already done so. Go to the [sign up](https://console.kinvey.com/#signup) page, and follow the steps provided.

#### 1. Create A TypeScript Definitions File
To use the SDK, you will need to create a TypeScript Definitions File. Please take a look at https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html for help creating a Typescript definitions file. We love contributions from the community. If you would like to submit a PR with a Typescript definitions file we will review it and accept it if it is satisfactory.

#### 2. Install the SDK
You can install the module using npm:

```bash
npm install kinvey-angular2-sdk --save
```

#### 3. Configure the SDK
Import the SDK in your code.

```javascript
import { Kinvey} from 'kinvey-angular2-sdk';
```


Next, use `Kinvey.init` to configure your app. Replace `<appKey>` and `<appSecret>` with your apps app key and secret. You can find these for your app using the [Kinvey Console App](https://console.kinvey.com).

```javascript
Kinvey.init({
  appKey: '<appKey>',
  appSecret: '<appSecret>'
});
```

#### 4. Verify Set Up
You can use the following snippet to verify the app credentials were entered correctly. This function will contact the backend and verify that the SDK can communicate with your app.

```javascript
var promise = Kinvey.ping();
promise.then(function(response) {
  console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
}).catch(function(error) {
  console.log('Kinvey Ping Failed. Response: ' + error.message);
});
```

## What’s next?
You are now ready to start building your awesome apps! Next we recommend diving into the [User guide](http://devcenter.kinvey.com/angular2-v3.0/guides/users) or [Data store guide](http://devcenter.kinvey.com/angular2-v3.0/guides/datastore) to learn more about our service, or explore the [sample apps](http://devcenter.kinvey.com/angular2-v3.0/samples) to go straight to working projects.

## Build
The simplest way to build the sdk is by running `gulp`. More advanced tasks are available.

* `gulp build`: build the sdk
* `gulp bump`: bump the pacakge version. Please see [Flags](#Flags).
* `gulp bundle`: bundle the sdk for dist
* `gulp clean`: remove files created by the build process
* `gulp lint`: lint the src files
* `gulp tag`: create a git tag for the version
* `gulp upload`: upload dist files to AWS S3

#### Flags
The following flags are available when running `gulp bump`:

* `--type <major|minor|patch|prerelease>`: Bumps the package version using the [Semantic Version 2.0.0](http://semver.org/) spec. Defaults to `patch`.
* `--version <version>`: Sets the package version to the provided version.

## Test

You can run the tests using `npm test`.

## Release
The workflow for releasing a new version of the sdk is as follows:

1. Commit all changes on the develop branch.
2. Checkout the master branch and merge the develop branch.
3. Update the [Changelog](CHANGELOG.md).
4. Run `gulp bump --type <type>` replacing `<type>` with major, minor, patch, or prerelease. See [Flags](#Flags) above.
5. Run `gulp bundle` and commit file changes.
6. Run `gulp tag`.
6. Make sure all changes are committed on the master branch and push.
7. Checkout the develop branch and merge the master branch.
8. __Optional:__ Update Dev Center and Sample apps.

*Note: The [Angular2 Release Job](https://build.kinvey.com/jenkins/view/Libraries/job/angular2-sdk-release/) will upload the build to [AWS S3](https://aws.amazon.com/s3/) and publish the [pacakge](https://www.npmjs.com/package/kinvey-angular2-sdk) on NPM.*

## License

    Copyright 2016 Kinvey, Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
