var $ = function (selector) {
  var elements = [];
  var findElements = new FindElements().parser(elements, selector);
  return elements;
};

var FindElements = function() { 

};

FindElements.prototype.parser = function(elements, selector) {
  if(selector[0].match(/^[\.#]/)) { 
    this._filterIDOrClass(elements, selector);
  } else { 	
    this._sortElementsByNumberOfSelectors(elements, selector.split(/(?=\.|#[A-z0-9]+)/g));
  }
};

FindElements.prototype._filterIDOrClass = function(elements, selector) {
  if(selector[0] == '#') { 
    this._findElementById(elements, selector);
  } else { 
    this._findElementByClass(elements, selector);
  }
};

FindElements.prototype._findElementById = function(elements, id) {
  this._addElements(elements, [document.getElementById(id.slice(1))]);
};

FindElements.prototype._findElementByClass = function(elements, selectorClass) { 
  var items = document.body.children;
  for(var i = 0; i < items.length; i++) { 
    if(items[i].className.match(selectorClass.slice(1))) { 
      this._addElements(elements, [items[i]]);
    }
  }
};

FindElements.prototype._sortElementsByNumberOfSelectors = function(elements, selectors) { 
  if(selectors.length === 1) { 
    var foundElements = this._findElementByTag(selectors);
    this._addElements(elements, foundElements);
  } else { 
    this._findElementsWithClassOrId(elements, selectors);
  }
};

FindElements.prototype._findElementByTag = function(selector) {
  return document.getElementsByTagName(selector);
};

FindElements.prototype._findElementsWithClassOrId = function(elements, selectors) { 
  var tag = this._findElementByTag(selectors[0]);
  for(var i = 0; i < tag.length; i++) { 
    if(tag[i].id == selectors[i].slice(1) || tag[i].className.match(selectors[1].slice(1))) { 
      this._addElements(elements, [tag[i]]);
    }
  }
};

FindElements.prototype._addElements = function(elements, foundElements) {
  var length = foundElements.length;
  for(var i = 0; i < length; i++) { 
    elements.push(foundElements[i]);
  }
};
