#!/usr/bin/env node
'use strict';
const Troco = require('./Troco.js')
let troco = new Troco()
let notas = troco.getQtdeNotas(process.argv[2] || 0)
console.log(notas)
