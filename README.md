# duplicate-mfe-issue

## The Setup
Visualization:
![image](https://user-images.githubusercontent.com/3267412/144610674-28875689-457d-4130-bfb2-209c16195ab6.png)


### mfe-button
An mfe that simply mounts a button element and triggers an alert.
It installs one dependency called `faker` and attempts to share it via `ModuleFederation`.

To run in isolation:
```shell
$ cd mfe-button
$ npm install
$ npm run start
```

Visit http://localhost:8091

### my-app

A simple app that contains places two entry points onto the page (`index1.js` and `index2.js`).
Each entry point attempts to use the same MFE, `mfe-button`.

```shell
$ cd my-app
$ npm install
$ npm run start
```

Visit http://localhost:8090


## The issue
Running both of the applications below locally results in the following error:

```
Container initialization failed as it has already been initialized with a different share scope
while loading "./MfeButton" from webpack/container/reference/mfeButton
```

The error goes away if you turn off the `shared` config in `mfe-button`.
