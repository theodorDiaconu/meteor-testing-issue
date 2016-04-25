// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by demo.js.
import { name as packageName } from "meteor/demo";

// Write your tests here!
// Here is an example.
Tinytest.add('demo - example', function (test) {
  test.equal(packageName, "demo");
});
