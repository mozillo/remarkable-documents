###Fetch for all devices
webpack config:
```
webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals),
  new webpack.ProvidePlugin({
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  })
]
```
and 
```
$ npm i imports-loader exports-loader -D
```
if you get error, just update your node fom 4.x to 6.x
```
sudo npm i -g n
sudo n latest
```
