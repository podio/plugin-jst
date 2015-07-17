jst
===========

[![npm version](https://badge.fury.io/js/plugin-jst.svg)](http://badge.fury.io/js/plugin-jst)
[![Build Status](https://travis-ci.org/podio/plugin-jst.svg?branch=master)](https://travis-ci.org/podio/plugin-jst)

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
