# @canboat/ts-pgns

[![npm version](https://img.shields.io/npm/v/@canboat/ts-pgns.svg)](https://www.npmjs.com/@canboat/ts-pgns)
[![Node.js CI & Test](https://github.com/canboat/ts-pgns/actions/workflows/test.yml/badge.svg)](https://github.com/canboat/ts-pgns/actions/workflows/test.yml)

A comprehensive TypeScript library providing strongly-typed NMEA 2000 Parameter Group Number (PGN) definitions and utilities for marine electronics communication.

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [API Documentation](#-api-documentation)
- [Usage Examples](#-usage-examples)
- [PGN Classes](#-pgn-classes)
- [Utilities](#-utilities)
- [Type Safety](#-type-safety)
- [Building from Source](#-building-from-source)
- [Contributing](#-contributing)
- [Version Policy](#-version-policy)
- [License](#-license)
- [Related Projects](#-related-projects)

## 🌊 Overview

This library provides TypeScript definitions and utilities for working with NMEA 2000 Parameter Group Numbers (PGNs), which are standardized data messages used in marine electronics networks. Built on top of the Canboat project's PGN definitions, it offers type-safe access to hundreds of marine data message formats.

**What are PGNs?** Parameter Group Numbers are standardized message formats in the NMEA 2000 protocol that define how different types of marine data (GPS position, engine data, weather information, etc.) are structured and transmitted over the network.

## ✨ Features

- **🔒 Type Safety**: Fully typed PGN classes with TypeScript interfaces
- **📊 Comprehensive Coverage**: Supports hundreds of standard NMEA 2000 PGNs
- **🛠️ Utility Functions**: Helper functions for PGN manipulation and conversion
- **🔍 Enumeration Support**: Built-in support for NMEA 2000 enumerations and bit fields
- **🎯 Field Validation**: Type-safe field access with proper validation
- **📖 Well Documented**: Comprehensive JSDoc documentation and examples
- **🔄 Conversion Utilities**: Convert between different PGN representations
- **⚡ Performance Optimized**: Efficient lookup and creation of PGN objects

## 📦 Installation

```bash
npm install @canboat/ts-pgns
```

## 🚀 Quick Start

```typescript
import { PGN_129029, PGN_127488 } from '@canboat/ts-pgns'
import { pgnToActisenseSerialFormat } from '@canboat/canboatjs'

// Create a GPS Position PGN (129029)
const gpsPosition = new PGN_129029({
  latitude: 47.6062, // Seattle latitude
  longitude: -122.3321, // Seattle longitude
  altitude: 56.0,
  gnssType: 3, // GPS
  method: 1, // GNSS fix
  integrity: 0, // No integrity checking
  numberOfSvs: 8, // 8 satellites
  hdop: 1.2, // Horizontal dilution of precision
  geoidalSeparation: -34.0
})

// Create an Engine Parameters PGN (127488)
const engineData = new PGN_127488({
  engineInstance: 0,
  oilPressure: 275000, // 275 kPa
  oilTemperature: 363.15, // 90°C in Kelvin
  temperature: 353.15, // 80°C coolant temp
  alternatorPotential: 14.2,
  fuelRate: 15.5, // L/h
  totalEngineHours: 1250.5,
  coolantPressure: 95000,
  fuelPressure: 280000
})

console.log(
  `GPS Position: ${gpsPosition.fields.latitude}, ${gpsPosition.fields.longitude}`
)
console.log(`Engine Oil Pressure: ${engineData.fields.oilPressure} Pa`)

//Generate actisense serial formated position
const n2k = pgnToActisenseSerialFormat(gpsPosition)
console.log(`actisense posistion ${n2k}`)
```

## 📚 API Documentation

[Complete API Documentation](https://canboat.github.io/ts-pgns/index.html)

## 💡 Usage Examples

### Working with PGN Definitions

```typescript
import {
  getPGNWithNumber,
  getPGNWithId,
  findMatchingDefinition
} from '@canboat/ts-pgns'

// Get PGN definition by number
const windDefs = getPGNWithNumber(130306) // Wind Data
if (windDefs) {
  console.log(`Found ${windDefs.length} wind data variants`)
}

// Get specific PGN definition by ID
const gpsPosition = getPGNWithId('gnssPositionData')
if (gpsPosition) {
  console.log(`PGN Description: ${gpsPosition.Description}`)
  console.log(`Field count: ${gpsPosition.Fields.length}`)
}
```

### Working with Enumerations

```typescript
import {
  getEnumerationValue,
  getEnumerationName,
  getBitEnumerationValue
} from '@canboat/ts-pgns'

// Get numeric value for enumeration
const gnssType = getEnumerationValue('GNSS_TYPE', 'GPS')
console.log(`GPS type value: ${gnssType}`) // 3

// Get name from numeric value
const methodName = getEnumerationName('GNSS_METHOD', 1)
console.log(`Method: ${methodName}`) // "GNSS fix"

// Work with bit enumerations
const alertBit = getBitEnumerationValue('ENGINE_ALERT', 'Warning')
```

### PGN Field Manipulation

```typescript
import { mapCamelCaseKeys, mapNameKeysToCamelCase } from '@canboat/ts-pgns'

// Convert PGN field IDs to camelCase names
const pgn = new PGN_129029({
  /* ... */
})
const camelCasePgn = mapCamelCaseKeys(pgn)

// Now you can access fields by name instead of ID
console.log(camelCasePgn.fields.latitude) // instead of fields.latitude
console.log(camelCasePgn.fields.longitude) // instead of fields.longitude
```

### Creating Group Function Messages

```typescript
import {
  createNmeaGroupFunction,
  GroupFunction,
  SeatalkPilotMode16
  PGN_65379_SeatalkPilotMode
} from '@canboat/ts-pgns'

const pgn = new PGN_65379_SeatalkPilotMode({
  pilotMode: SeatalkPilotMode16.TrackMode,
  subMode: 0xffff
}),

// Create a command group function to change this data
const requestMsg = createNmeaGroupFunction(
  GroupFunction.Command,
  pgn,
  42 // destination address
)
```

## 🏗️ PGN Classes

The library includes type-safe classes for hundreds of NMEA 2000 PGNs. Some commonly used ones include:

### Navigation & Positioning

- `PGN_129029` - GNSS Position Data
- `PGN_129025` - Position, Rapid Update
- `PGN_129026` - COG & SOG, Rapid Update
- `PGN_127250` - Vessel Heading
- `PGN_130306` - Wind Data

### Engine & Propulsion

- `PGN_127488` - Engine Parameters, Rapid Update
- `PGN_127489` - Engine Parameters, Dynamic
- `PGN_127505` - Fluid Level
- `PGN_130312` - Temperature

### Electrical Systems

- `PGN_127508` - Battery Status
- `PGN_127506` - DC Detailed Status
- `PGN_127513` - Battery Configuration Status

### Environmental

- `PGN_130310` - Environmental Parameters
- `PGN_130311` - Environmental Parameters
- `PGN_130316` - Temperature, Extended Range

Each PGN class provides:

- Type-safe field access
- Proper TypeScript interfaces
- Built-in validation
- Access to the underlying PGN definition

## 🔧 Utilities

### Core Utilities

- `createPGN(id, fields, dst?)` - Create PGN instances by ID
- `findMatchingDefinition(pgn)` - Find the matching definition for a PGN
- `getPGNWithNumber(num)` - Get PGN definitions by number
- `getPGNWithId(id)` - Get PGN definition by ID

### Field Conversion

- `mapCamelCaseKeys(pgn)` - Convert field IDs to camelCase names
- `mapNameKeysToCamelCase(pgn)` - Convert field names to camelCase IDs
- `isMatch(pgn, matchFields)` - Check if PGN matches specific field values

### Enumeration Helpers

- `getEnumeration(name)` / `getEnumerations()` - Access enumerations
- `getEnumerationValue(enumName, value)` - Get numeric value from name
- `getEnumerationName(enumName, value)` - Get name from numeric value
- `getBitEnumeration(name)` - Access bit enumerations
- `getBitEnumerationValue(enumName, value)` - Get bit value from name

### SignalK Server Integration

- `convertCamelCase(pluginApp, pgn)` - Convert keys based on server capability
- `convertNamesToCamel(pluginApp, pgn)` - Convert names based on server capability

## 🛡️ Type Safety

This library provides comprehensive TypeScript support:

```typescript
// Strongly typed fields
const gps = new PGN_129029({
  latitude: 47.6062, // number
  longitude: -122.3321, // number
  gnssType: 3, // number (enumeration)
  method: 1 // number (enumeration)
})

// TypeScript will catch field type errors
const badGps = new PGN_129029({
  latitude: 'invalid', // ❌ TypeScript error: string not assignable to number
  gnssType: 'GPS' // ❌ TypeScript error: string not assignable to number
})

// Proper enumeration usage
import { GnssType } from '@canboat/ts-pgns'
const correctGps = new PGN_129029({
  latitude: 47.6062,
  longitude: -122.3321,
  gnssType: GnssType.Gps, // ✅ Type-safe enumeration
  method: 1
})
```

## 🏗️ Building from Source

```bash
# Clone the repository
git clone https://github.com/canboat/ts-pgns.git
cd ts-pgns

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Generate documentation
npm run build:docs

# Format code
npm run format
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Run prettier and lint: `npm run format`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to the branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## 📋 Version Policy

**Important Note:** This library is currently in active development. Minor releases may include breaking changes. Please pin to specific minor versions (e.g., `1.10.x`) in your dependencies.

Once the API stabilizes, breaking changes will only be introduced in major releases.

```json
{
  "dependencies": {
    "@canboat/ts-pgns": "~1.10.0" // Pin to minor version
  }
}
```

## 📄 License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for details.

## 🔗 Related Projects

- **[canboat](https://github.com/canboat/canboat)** - Core Canboat
- **[canboatjs](https://github.com/canboat/canboatjs)** - Core Canboat JavaScript library
- **[signalk-server](https://github.com/SignalK/signalk-server-node)** - Signal K server implementation

---

Made with ⚓ by the Canboat project contributors
