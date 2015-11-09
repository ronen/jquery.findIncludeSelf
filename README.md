# jQuery.findIncludeSelf

[![GitHub version](https://badge.fury.io/gh/ronen%2Fjquery.findIncludeSelf.png)](http://badge.fury.io/gh/ronen%2FfindIncludeSelf)
[![Build Status](https://travis-ci.org/ronen/jquery.findIncludeSelf.svg)](https://travis-ci.org/ronen/jquery.findIncludeSelf)

Trivial jQuery plugin, `$(root).findIncludeSelf(selector)` is the same as `find(selector)` but includes the subject node itself, if it matches the selector.

Specifically:

    $foo.findIncludeSelf(selector)
    
is shorthand for

    $foo.find(selector).addBack(selector)

# Testing

```
$ bower install
$ npm install
$ npm test
```

# Release Notes
* O.1.2 - Use https://api.jquery.com/jquery.fn.extend/.  Thanks to [JelteF](https://github.com/JelteF)

# Credits

Taken from the stackoverflow [answer](http://stackoverflow.com/a/17538213/1056941) provided by stackoverflow user [Robert](http://stackoverflow.com/users/149097/robert)
