# Hot Pocket Converter

You can use hot pockets as a measurement for just about anything.

All conversions are based on the following:
  * A hot pocket is 12.699 cm long
  * A hot pocket weighs 128 g
  * A hot pocket takes 120 s to cook
  * A hot pocket costs $2 USD
  * A hot pocket is 60&deg; C when cooked
  * A hot pocket is 360 calories
  
### Features   
 * **Test** - *Mocha* with *Chai*
 
### Commands
 * `npm test` - Run tests
  
### Usage
Install the package using npm:

    npm install hot-pocket-converter --save

Require the package and use it like so:

var hotPocketConverter = require('hot-pocket-converter');

    console.log(hotPocketConverter('weight', 'kg', 36));    // 281.2500
    console.log(hotPocketConverter('length', 'ft', 12));    // 28.7998 
  
### License
MIT &copy; Marcus E. Turnbo    
