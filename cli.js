#!/usr/bin/env node
'use strict';
const meow = require('meow');
const { createYo } = require('.');

const cli = meow(
  `
    Usage
      $ create-yo generatorname

    Examples
      $ create-yo node
      $ npm init yo node
`);

createYo(cli.input[0], process.argv.slice(3));
