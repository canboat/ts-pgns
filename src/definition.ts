/* eslint-disable @typescript-eslint/no-explicit-any */

export type PGNMap = {
  [key: number]: Definition[]
}

export enum Type {
  Single = 'Single',
  Fast = 'Fast'
}

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

export type EnumValue = {
  Name: string
  Value: number
}

export interface EnumBase {
  Name: string
}

export interface Enumeration extends EnumBase {
  MaxValue: number
  EnumValues: EnumValue[]
}

export type EnumBitValue = {
  Name: string
  Bit: number
}

export interface BitEnumeration extends EnumBase {
  MaxValue: number
  EnumBitValues: EnumBitValue[]
}

export type EnumFieldTypeValue = {
  name: string
  value: number
  FieldType: string
  Resolution?: number
  Unit?: string
  Bits: string
}

export interface FieldTypeEnumeration extends EnumBase {
  MaxValue: number
  EnumFieldTypeValues: EnumFieldTypeValue[]
}

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
