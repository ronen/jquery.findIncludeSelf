# jQuery.findIncludeSelf

[![GitHub version](https://badge.fury.io/gh/ronen%2Fjquery.findIncludeSelf.png)](http://badge.fury.io/gh/ronen%2FfindIncludeSelf) 

Trivial jQuery plugin, `$(root).findIncludeSelf(selector)` is the same as `find(selector)` but includes the subject node itself, if it matches the selector.

Specifically:

    $foo.findIncludeSelf(selector)
    
is shorthand for

    $foo.find(selector).addBack(selector)


# Credits

Taken from the stackoverflow [answer](http://stackoverflow.com/a/17538213/1056941) provided by stackoverflow user [Robert](http://stackoverflow.com/users/149097/robert)
