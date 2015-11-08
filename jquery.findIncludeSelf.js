jQuery.fn.extend({findIncludeSelf: function(selector) { return this.find(selector).addBack(selector); }});
