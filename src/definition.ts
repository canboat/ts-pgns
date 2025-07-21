/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @category PGN Definitions
 */
export enum Type {
  Single = 'Single',
  Fast = 'Fast'
}

/**
 * Enumeration of possible field types used in PGN (Parameter Group Number) definitions.
 * Each field type represents a specific data format or semantic meaning for a field within a PGN.
 *
 * @remarks
 * This enum is used to specify how a field should be interpreted, parsed, or displayed.
 *
 * @enum
 * - `Binary`: Raw binary data.
 * - `BitLookup`: Bitwise lookup value.
 * - `Date`: Date value.
 * - `Decimal`: Decimal number.
 * - `Duration`: Time duration.
 * - `DynamicFieldKey`: Key for dynamic field.
 * - `DynamicFieldLength`: Length for dynamic field.
 * - `DynamicFieldValue`: Value for dynamic field.
 * - `FieldIndex`: Index of the field.
 * - `Float`: Floating-point number.
 * - `IndirectLookup`: Indirect lookup value.
 * - `IsoName`: ISO-compliant name.
 * - `Lookup`: Lookup value.
 * - `MMSI`: Maritime Mobile Service Identity.
 * - `Number`: Generic number.
 * - `PGN`: Parameter Group Number.
 * - `Reserved`: Reserved field.
 * - `Spare`: Spare field.
 * - `StringFix`: Fixed-length string.
 * - `StringLAU`: LAU-encoded string.
 * - `StringLZ`: LZ-encoded string.
 * - `Time`: Time value.
 * - `Variable`: Variable-length field.
 *
 * @category PGN Definitions
 */
export enum FieldType {
  Binary = 'BINARY',
  BitLookup = 'BITLOOKUP',
  Date = 'DATE',
  Decimal = 'DECIMAL',
  Duration = 'DURATION',
  DynamicFieldKey = 'DYNAMIC_FIELD_KEY',
  DynamicFieldLength = 'DYNAMIC_FIELD_LENGTH',
  DynamicFieldValue = 'DYNAMIC_FIELD_VALUE',
  FieldIndex = 'FIELD_INDEX',
  Float = 'FLOAT',
  IndirectLookup = 'INDIRECT_LOOKUP',
  IsoName = 'ISO_NAME',
  Lookup = 'LOOKUP',
  MMSI = 'MMSI',
  Number = 'NUMBER',
  PGN = 'PGN',
  Reserved = 'RESERVED',
  Spare = 'SPARE',
  StringFix = 'STRING_FIX',
  StringLAU = 'STRING_LAU',
  StringLZ = 'STRING_LZ',
  Time = 'TIME',
  Variable = 'VARIABLE'
}

/**
 * Represents the various types of physical quantities that can be measured or represented.
 *
 * @remarks
 * This enum includes common physical quantities such as length, temperature, electrical power, and more.
 * Each member corresponds to a specific physical property, useful for scientific, engineering, or data modeling applications.
 *
 * @example
 * ```typescript
 * const quantity: PhysicalQuantity = PhysicalQuantity.Temperature;
 * ```
 * @category PGN Definitions
 */
export enum PhysicalQuantity {
  Angle = 'ANGLE',
  AngularVelocity = 'ANGULAR_VELOCITY',
  Concentration = 'CONCENTRATION',
  Date = 'DATE',
  Distance = 'DISTANCE',
  Duration = 'DURATION',
  ElectricalApparentPower = 'ELECTRICAL_APPARENT_POWER',
  ElectricalCharge = 'ELECTRICAL_CHARGE',
  ElectricalCurrent = 'ELECTRICAL_CURRENT',
  ElectricalEnergy = 'ELECTRICAL_ENERGY',
  ElectricalPower = 'ELECTRICAL_POWER',
  ElectricalReactivePower = 'ELECTRICAL_REACTIVE_POWER',
  Frequency = 'FREQUENCY',
  GeographicalLatitude = 'GEOGRAPHICAL_LATITUDE',
  GeographicalLongitude = 'GEOGRAPHICAL_LONGITUDE',
  Length = 'LENGTH',
  MagneticField = 'MAGNETIC_FIELD',
  PotentialDifference = 'POTENTIAL_DIFFERENCE',
  PressureRate = 'PRESSURE_RATE',
  Pressure = 'PRESSURE',
  SignalStrength = 'SIGNAL_STRENGTH',
  SignalToNoiseRatio = 'SIGNAL_TO_NOISE_RATIO',
  Speed = 'SPEED',
  Temperature = 'TEMPERATURE',
  Time = 'TIME',
  Volume = 'VOLUME',
  VolumetricFlow = 'VOLUMETRIC_FLOW'
}

/**
 * @category PGN Definitions
 */
export type EnumValue = {
  Name: string
  Value: number
}

/**
 * @category PGN Definitions
 */
export interface EnumBase {
  Name: string
}

/**
 * @category PGN Definitions
 */
export interface Enumeration extends EnumBase {
  MaxValue: number
  EnumValues: EnumValue[]
}

/**
 * @category PGN Definitions
 */
export type EnumBitValue = {
  Name: string
  Bit: number
}

/**
 * @category PGN Definitions
 */
export interface BitEnumeration extends EnumBase {
  MaxValue: number
  EnumBitValues: EnumBitValue[]
}

/**
 * @category PGN Definitions
 */
export type EnumFieldTypeValue = {
  name: string
  value: number
  FieldType: string
  Resolution?: number
  Unit?: string
  Bits: string
}

/**
 * @category PGN Definitions
 */
export interface FieldTypeEnumeration extends EnumBase {
  MaxValue: number
  EnumFieldTypeValues: EnumFieldTypeValue[]
}


/**
 * Represents a field definition within a data structure, including metadata and configuration options.
 *
 * @property Id - Unique identifier for the field.
 * @property Name - Human-readable name of the field.
 * @property Description - Optional description of the field.
 * @property BitLengthVariable - Indicates if the bit length is variable.
 * @property BitLength - Optional fixed bit length of the field.
 * @property BitOffset - Bit offset from the start of the structure.
 * @property BitStart - Starting bit position of the field.
 * @property Condition - Optional condition for field inclusion.
 * @property Match - Optional value to match for conditional fields.
 * @property Unit - Optional unit of measurement for the field value.
 * @property Resolution - Optional resolution or scaling factor.
 * @property Signed - Indicates if the field value is signed.
 * @property Offset - Optional offset to apply to the field value.
 * @property RangeMin - Optional minimum allowed value.
 * @property RangeMax - Optional maximum allowed value.
 * @property FieldType - Type of the field, as defined by {@link FieldType}.
 * @property PhysicalQuantity - Optional physical quantity represented by the field.
 * @property EnumBitValues - Optional enumeration of bit values.
 * @property PartOfPrimaryKey - Indicates if the field is part of the primary key.
 * @property LookupEnumeration - Optional reference to a lookup enumeration.
 * @property LookupIndirectEnumeration - Optional reference to an indirect lookup enumeration.
 * @property LookupIndirectEnumerationFieldOrder - Optional order for indirect enumeration fields.
 * @property LookupBitEnumeration - Optional reference to a bit enumeration.
 * @property LookupFieldTypeEnumeration - Reference to the field type enumeration.
 * @category PGN Definitions
 */
export type Field = {
  Id: string
  Name: string
  Description?: string
  BitLengthVariable?: boolean
  BitLength?: number
  BitOffset: number
  BitStart: number
  Condition?: string
  Match?: number
  Unit?: string
  Resolution?: number
  Signed?: boolean
  Offset?: number
  RangeMin?: number
  RangeMax?: number
  FieldType: FieldType
  PhysicalQuantity?: PhysicalQuantity
  EnumBitValues?: any
  PartOfPrimaryKey?: boolean
  LookupEnumeration?: string
  LookupIndirectEnumeration?: string
  LookupIndirectEnumerationFieldOrder?: number
  LookupBitEnumeration?: string
  LookupFieldTypeEnumeration: string
}

/**
 * Represents the definition of a PGN (Parameter Group Number), including metadata, configuration, and field definitions.
 *
 * @property PGN - The numeric identifier for the PGN.
 * @property Id - Unique string identifier for the PGN.
 * @property Description - Human-readable description of the PGN.
 * @property Explanation - Optional detailed explanation of the PGN.
 * @property URL - Optional reference URL for documentation.
 * @property Complete - Indicates if the PGN definition is complete.
 * @property Length - Optional fixed length of the PGN in bytes.
 * @property MinLength - Optional minimum length of the PGN in bytes.
 * @property TransmissionInterval - Optional transmission interval in milliseconds.
 * @property TransmissionIrregular - Indicates if transmission interval is irregular.
 * @property Missing - Optional list of missing fields or elements.
 * @property Type - Type of PGN, as defined by {@link Type}.
 * @property Priority - Transmission priority of the PGN.
 * @property Fallback - Indicates if fallback is allowed for this PGN.
 * @property FieldCount - Optional number of fields in the PGN.
 * @property RepeatingFieldSet1Size - Optional size of the first repeating field set.
 * @property RepeatingFieldSet1StartField - Optional start index for the first repeating field set.
 * @property RepeatingFieldSet1CountField - Optional count field for the first repeating field set.
 * @property RepeatingFieldSet2Size - Optional size of the second repeating field set.
 * @property RepeatingFieldSet2StartField - Optional start index for the second repeating field set.
 * @property RepeatingFieldSet2CountField - Optional count field for the second repeating field set.
 * @property Fields - Array of field definitions for the PGN.
 * @category PGN Definitions
 */
export type Definition = {
  PGN: number
  Id: string
  Description: string
  Explanation?: string
  URL?: string
  Complete: boolean
  Length?: number
  MinLength?: number
  TransmissionInterval?: number
  TransmissionIrregular?: boolean
  Missing?: string[]
  Type: Type
  Priority: number
  Fallback?: boolean
  FieldCount?: number
  RepeatingFieldSet1Size?: number
  RepeatingFieldSet1StartField?: number
  RepeatingFieldSet1CountField?: number
  RepeatingFieldSet2Size?: number
  RepeatingFieldSet2StartField?: number
  RepeatingFieldSet2CountField?: number
  Fields: Field[]
}
