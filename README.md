My approach with this test was to try and get as much browser compatibility as possible whilst making the test clear and simple to read. To begin with I tried to use functions within the starting function but this proved problematic by the time I got to the third or fourth test.

I decided that it would be easier to create an object which would parse the selectors. This parsing function would then serve as the public interface for the object and this is all that would need to be called to pass the tests. This was going well until I realised that IE8 doesn't support #getElementByClass which made it considerably harder and I had to think about how I was going to get the classes I needed out of the DOM (at one point I considered doing this recursively, whist fun, it wasn't the best tactic ;).  

It was a good test and I learnt a lot about manipulating the DOM. Thanks!

