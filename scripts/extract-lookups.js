#!/usr/bin/env node
/**
 * Extracts lookup tables from canboat.json into a standalone
 * canboat-lookups.json for lightweight browser-side imports.
 */

const fs = require('fs')
const path = require('path')

const canboatPath = path.join(__dirname, '..', 'canboat.json')
const outputPath = path.join(__dirname, '..', 'canboat-lookups.json')

const canboat = JSON.parse(fs.readFileSync(canboatPath, 'utf-8'))

const lookups = {
  LookupEnumerations: canboat.LookupEnumerations,
  LookupBitEnumerations: canboat.LookupBitEnumerations,
  LookupFieldTypeEnumerations: canboat.LookupFieldTypeEnumerations
}

fs.writeFileSync(outputPath, JSON.stringify(lookups))

const sizeKB = (fs.statSync(outputPath).size / 1024).toFixed(0)
console.log(`canboat-lookups.json: ${sizeKB} KB`)
