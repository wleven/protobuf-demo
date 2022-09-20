/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  user: {
    nested: {
      User: {
        fields: {
          name: {
            rule: "required",
            type: "string",
            id: 0
          },
          age: {
            rule: "required",
            type: "int32",
            id: 1
          },
          admin: {
            rule: "required",
            type: "bool",
            id: 2
          }
        }
      }
    }
  }
});

module.exports = $root;
