jst
===========

SystemJS's underscore template `jst` loading plugin.

## How to use

```javascript
import './sample.jst!'
```

It requires to have `underscore` installed as a peer dependency, although you can also use it for `lodash` as long you alias it to `underscore` in your configuration, i.e.:

```javascript
System.config({
	map: {
		underscore: 'lodash'
	}
})
```

## Testing

```javascript
$ npm install
$ npm test
```

## License

[MIT](https://github.com/podio/plugin-jst/blob/master/LICENSE)
