/**
 * @category Enumerations
 */
export enum Acceptability {
  BadLevel = 'Bad level',
  BadFrequency = 'Bad frequency',
  BeingQualified = 'Being qualified',
  Good = 'Good',
}

/**
 * @category Enumerations
 */
export const AcceptabilityValues: {[key: string]: number} = {
  [Acceptability.BadLevel]: 0x0,
  [Acceptability.BadFrequency]: 0x1,
  [Acceptability.BeingQualified]: 0x2,
  [Acceptability.Good]: 0x3,
}

/**
 * @category Enumerations
 */
export enum AccessLevel {
  Locked = 'Locked',
  UnlockedLevel1 = 'unlocked level 1',
  UnlockedLevel2 = 'unlocked level 2',
}

/**
 * @category Enumerations
 */
export const AccessLevelValues: {[key: string]: number} = {
  [AccessLevel.Locked]: 0x0,
  [AccessLevel.UnlockedLevel1]: 0x1,
  [AccessLevel.UnlockedLevel2]: 0x2,
}

/**
 * @category Enumerations
 */
export enum AcLine {
  Line1 = 'Line 1',
  Line2 = 'Line 2',
  Line3 = 'Line 3',
}

/**
 * @category Enumerations
 */
export const AcLineValues: {[key: string]: number} = {
  [AcLine.Line1]: 0x0,
  [AcLine.Line2]: 0x1,
  [AcLine.Line3]: 0x2,
}

/**
 * @category Enumerations
 */
export enum AgsGeneratingState {
  Preheating = 'Preheating',
  StartDelay = 'Start delay',
  Cranking = 'Cranking',
  StarterCooling = 'Starter cooling',
  WarmingUp = 'Warming up',
  CoolingDown = 'Cooling down',
  SpinningUp = 'Spinning up',
  ShutdownBypass = 'Shutdown bypass',
  Stopping = 'Stopping',
  Running = 'Running',
  Stopped = 'Stopped',
  CrankDelaty = 'Crank delaty',
}

/**
 * @category Enumerations
 */
export const AgsGeneratingStateValues: {[key: string]: number} = {
  [AgsGeneratingState.Preheating]: 0x0,
  [AgsGeneratingState.StartDelay]: 0x1,
  [AgsGeneratingState.Cranking]: 0x2,
  [AgsGeneratingState.StarterCooling]: 0x3,
  [AgsGeneratingState.WarmingUp]: 0x4,
  [AgsGeneratingState.CoolingDown]: 0x5,
  [AgsGeneratingState.SpinningUp]: 0x6,
  [AgsGeneratingState.ShutdownBypass]: 0x7,
  [AgsGeneratingState.Stopping]: 0x8,
  [AgsGeneratingState.Running]: 0x9,
  [AgsGeneratingState.Stopped]: 0xa,
  [AgsGeneratingState.CrankDelaty]: 0xb,
}

/**
 * @category Enumerations
 */
export enum AgsMode {
  Off = 'Off',
  On = 'On',
  Automatic = 'Automatic',
}

/**
 * @category Enumerations
 */
export const AgsModeValues: {[key: string]: number} = {
  [AgsMode.Off]: 0x0,
  [AgsMode.On]: 0x1,
  [AgsMode.Automatic]: 0x2,
}

/**
 * @category Enumerations
 */
export enum AgsOffReason {
  NotOff = 'Not off',
  DcVoltageHigh = 'DC voltage high',
  BatteryStateOfChargeHigh = 'Battery state of charge high',
  AcCurrentLow = 'AC current low',
  ContactOpened = 'Contact opened',
  ReachedAbsorption = 'Reached absorption',
  ReachedFloat = 'Reached float',
  ManualOff = 'Manual off',
  MaxRunTime = 'Max run time',
  MaxAutoCycle = 'Max auto cycle',
  ExerciseDone = 'Exercise done',
  QuietTime = 'Quiet time',
  ExternalOffViaAgs = 'External off via AGS',
  SafeMode = 'Safe mode',
  ExternalOffViaGenerator = 'External off via generator',
  ExternalShutdown = 'External shutdown',
  AutoOff = 'Auto off',
  Fault = 'Fault',
  UnableToStart = 'Unable to start',
}

/**
 * @category Enumerations
 */
export const AgsOffReasonValues: {[key: string]: number} = {
  [AgsOffReason.NotOff]: 0x0,
  [AgsOffReason.DcVoltageHigh]: 0x1,
  [AgsOffReason.BatteryStateOfChargeHigh]: 0x2,
  [AgsOffReason.AcCurrentLow]: 0x3,
  [AgsOffReason.ContactOpened]: 0x4,
  [AgsOffReason.ReachedAbsorption]: 0x5,
  [AgsOffReason.ReachedFloat]: 0x6,
  [AgsOffReason.ManualOff]: 0x7,
  [AgsOffReason.MaxRunTime]: 0x8,
  [AgsOffReason.MaxAutoCycle]: 0x9,
  [AgsOffReason.ExerciseDone]: 0xa,
  [AgsOffReason.QuietTime]: 0xb,
  [AgsOffReason.ExternalOffViaAgs]: 0xc,
  [AgsOffReason.SafeMode]: 0xd,
  [AgsOffReason.ExternalOffViaGenerator]: 0xe,
  [AgsOffReason.ExternalShutdown]: 0xf,
  [AgsOffReason.AutoOff]: 0x10,
  [AgsOffReason.Fault]: 0x11,
  [AgsOffReason.UnableToStart]: 0x12,
}

/**
 * @category Enumerations
 */
export enum AgsOnReason {
  NotOn = 'Not on',
  DcVoltageLow = 'DC voltage low',
  BatteryStateOfChargeLow = 'Battery state of charge low',
  AcCurrentHigh = 'AC current high',
  ContactClosed = 'Contact closed',
  ManualOn = 'Manual on',
  Exercise = 'Exercise',
  NonQuietTime = 'Non Quiet time',
  ExternalOnViaAgs = 'External on via AGS',
  ExternalOnViaGenerator = 'External on via generator',
  UnableToStop = 'Unable to stop',
}

/**
 * @category Enumerations
 */
export const AgsOnReasonValues: {[key: string]: number} = {
  [AgsOnReason.NotOn]: 0x0,
  [AgsOnReason.DcVoltageLow]: 0x1,
  [AgsOnReason.BatteryStateOfChargeLow]: 0x2,
  [AgsOnReason.AcCurrentHigh]: 0x3,
  [AgsOnReason.ContactClosed]: 0x4,
  [AgsOnReason.ManualOn]: 0x5,
  [AgsOnReason.Exercise]: 0x6,
  [AgsOnReason.NonQuietTime]: 0x7,
  [AgsOnReason.ExternalOnViaAgs]: 0x8,
  [AgsOnReason.ExternalOnViaGenerator]: 0x9,
  [AgsOnReason.UnableToStop]: 0xa,
}

/**
 * @category Enumerations
 */
export enum AgsOperatingState {
  QuietTime = 'Quiet time',
  AutoOn = 'Auto on',
  AutoOff = 'Auto off',
  ManualOn = 'Manual On',
  ManualOff = 'Manual Off',
  GeneratorShutdown = 'Generator shutdown',
  ExternalShutdown = 'External shutdown',
  Fault = 'Fault',
  Suspend = 'Suspend',
  NotOperating = 'Not operating',
}

/**
 * @category Enumerations
 */
export const AgsOperatingStateValues: {[key: string]: number} = {
  [AgsOperatingState.QuietTime]: 0x0,
  [AgsOperatingState.AutoOn]: 0x1,
  [AgsOperatingState.AutoOff]: 0x2,
  [AgsOperatingState.ManualOn]: 0x3,
  [AgsOperatingState.ManualOff]: 0x4,
  [AgsOperatingState.GeneratorShutdown]: 0x5,
  [AgsOperatingState.ExternalShutdown]: 0x6,
  [AgsOperatingState.Fault]: 0x7,
  [AgsOperatingState.Suspend]: 0x8,
  [AgsOperatingState.NotOperating]: 0x9,
}

/**
 * @category Enumerations
 */
export enum AirmarCalibrateFunction {
  NormalcancelCalibration = 'Normal/cancel calibration',
  EnterCalibrationMode = 'Enter calibration mode',
  ResetCalibrationTo0 = 'Reset calibration to 0',
  Verify = 'Verify',
  ResetCompassToDefaults = 'Reset compass to defaults',
  ResetDampingToDefaults = 'Reset damping to defaults',
}

/**
 * @category Enumerations
 */
export const AirmarCalibrateFunctionValues: {[key: string]: number} = {
  [AirmarCalibrateFunction.NormalcancelCalibration]: 0x0,
  [AirmarCalibrateFunction.EnterCalibrationMode]: 0x1,
  [AirmarCalibrateFunction.ResetCalibrationTo0]: 0x2,
  [AirmarCalibrateFunction.Verify]: 0x3,
  [AirmarCalibrateFunction.ResetCompassToDefaults]: 0x4,
  [AirmarCalibrateFunction.ResetDampingToDefaults]: 0x5,
}

/**
 * @category Enumerations
 */
export enum AirmarCalibrateStatus {
  Queried = 'Queried',
  Passed = 'Passed',
  FailedTimeout = 'Failed - timeout',
  FailedTiltError = 'Failed - tilt error',
  FailedOther = 'Failed - other',
  InProgress = 'In progress',
}

/**
 * @category Enumerations
 */
export const AirmarCalibrateStatusValues: {[key: string]: number} = {
  [AirmarCalibrateStatus.Queried]: 0x0,
  [AirmarCalibrateStatus.Passed]: 0x1,
  [AirmarCalibrateStatus.FailedTimeout]: 0x2,
  [AirmarCalibrateStatus.FailedTiltError]: 0x3,
  [AirmarCalibrateStatus.FailedOther]: 0x4,
  [AirmarCalibrateStatus.InProgress]: 0x5,
}

/**
 * @category Enumerations
 */
export enum AirmarCommand {
  AttitudeOffsets = 'Attitude Offsets',
  CalibrateCompass = 'Calibrate Compass',
  TrueWindOptions = 'True Wind Options',
  SimulateMode = 'Simulate Mode',
  CalibrateDepth = 'Calibrate Depth',
  CalibrateSpeed = 'Calibrate Speed',
  CalibrateTemperature = 'Calibrate Temperature',
  SpeedFilter = 'Speed Filter',
  TemperatureFilter = 'Temperature Filter',
  Nmea2000Options = 'NMEA 2000 options',
}

/**
 * @category Enumerations
 */
export const AirmarCommandValues: {[key: string]: number} = {
  [AirmarCommand.AttitudeOffsets]: 0x20,
  [AirmarCommand.CalibrateCompass]: 0x21,
  [AirmarCommand.TrueWindOptions]: 0x22,
  [AirmarCommand.SimulateMode]: 0x23,
  [AirmarCommand.CalibrateDepth]: 0x28,
  [AirmarCommand.CalibrateSpeed]: 0x29,
  [AirmarCommand.CalibrateTemperature]: 0x2a,
  [AirmarCommand.SpeedFilter]: 0x2b,
  [AirmarCommand.TemperatureFilter]: 0x2c,
  [AirmarCommand.Nmea2000Options]: 0x2e,
}

/**
 * @category Enumerations
 */
export enum AirmarDepthQualityFactor {
  DepthUnlocked = 'Depth unlocked',
  Quality10 = 'Quality 10%',
  Quality20 = 'Quality 20%',
  Quality30 = 'Quality 30%',
  Quality40 = 'Quality 40%',
  Quality50 = 'Quality 50%',
  Quality60 = 'Quality 60%',
  Quality70 = 'Quality 70%',
  Quality80 = 'Quality 80%',
  Quality90 = 'Quality 90%',
  Quality100 = 'Quality 100%',
}

/**
 * @category Enumerations
 */
export const AirmarDepthQualityFactorValues: {[key: string]: number} = {
  [AirmarDepthQualityFactor.DepthUnlocked]: 0x0,
  [AirmarDepthQualityFactor.Quality10]: 0x1,
  [AirmarDepthQualityFactor.Quality20]: 0x2,
  [AirmarDepthQualityFactor.Quality30]: 0x3,
  [AirmarDepthQualityFactor.Quality40]: 0x4,
  [AirmarDepthQualityFactor.Quality50]: 0x5,
  [AirmarDepthQualityFactor.Quality60]: 0x6,
  [AirmarDepthQualityFactor.Quality70]: 0x7,
  [AirmarDepthQualityFactor.Quality80]: 0x8,
  [AirmarDepthQualityFactor.Quality90]: 0x9,
  [AirmarDepthQualityFactor.Quality100]: 0xa,
}

/**
 * @category Enumerations
 */
export enum AirmarPostControl {
  ReportPreviousValues = 'Report previous values',
  GenerateNewValues = 'Generate new values',
}

/**
 * @category Enumerations
 */
export const AirmarPostControlValues: {[key: string]: number} = {
  [AirmarPostControl.ReportPreviousValues]: 0x0,
  [AirmarPostControl.GenerateNewValues]: 0x1,
}

/**
 * @category Enumerations
 */
export enum AirmarPostId {
  FormatCode = 'Format Code',
  FactoryEeprom = 'Factory EEPROM',
  UserEeprom = 'User EEPROM',
  WaterTemperatureSensor = 'Water Temperature Sensor',
  SonarTransceiver = 'Sonar Transceiver',
  SpeedSensor = 'Speed sensor',
  InternalTemperatureSensor = 'Internal temperature sensor',
  BatteryVoltageSensor = 'Battery voltage sensor',
}

/**
 * @category Enumerations
 */
export const AirmarPostIdValues: {[key: string]: number} = {
  [AirmarPostId.FormatCode]: 0x1,
  [AirmarPostId.FactoryEeprom]: 0x2,
  [AirmarPostId.UserEeprom]: 0x3,
  [AirmarPostId.WaterTemperatureSensor]: 0x4,
  [AirmarPostId.SonarTransceiver]: 0x5,
  [AirmarPostId.SpeedSensor]: 0x6,
  [AirmarPostId.InternalTemperatureSensor]: 0x7,
  [AirmarPostId.BatteryVoltageSensor]: 0x8,
}

/**
 * @category Enumerations
 */
export enum AirmarTemperatureInstance {
  DeviceSensor = 'Device Sensor',
  OnboardWaterSensor = 'Onboard Water Sensor',
  OptionalWaterSensor = 'Optional Water Sensor',
}

/**
 * @category Enumerations
 */
export const AirmarTemperatureInstanceValues: {[key: string]: number} = {
  [AirmarTemperatureInstance.DeviceSensor]: 0x0,
  [AirmarTemperatureInstance.OnboardWaterSensor]: 0x1,
  [AirmarTemperatureInstance.OptionalWaterSensor]: 0x2,
}

/**
 * @category Enumerations
 */
export enum AirmarTransmissionInterval {
  MeasureInterval = 'Measure interval',
  RequestedByUser = 'Requested by user',
}

/**
 * @category Enumerations
 */
export const AirmarTransmissionIntervalValues: {[key: string]: number} = {
  [AirmarTransmissionInterval.MeasureInterval]: 0x0,
  [AirmarTransmissionInterval.RequestedByUser]: 0x1,
}

/**
 * @category Enumerations
 */
export enum AisAssignedMode {
  AutonomousAndContinuous = 'Autonomous and continuous',
  AssignedMode = 'Assigned mode',
}

/**
 * @category Enumerations
 */
export const AisAssignedModeValues: {[key: string]: number} = {
  [AisAssignedMode.AutonomousAndContinuous]: 0x0,
  [AisAssignedMode.AssignedMode]: 0x1,
}

/**
 * @category Enumerations
 */
export enum AisBand {
  Top525KHzOfMarineBand = 'Top 525 kHz of marine band',
  EntireMarineBand = 'Entire marine band',
}

/**
 * @category Enumerations
 */
export const AisBandValues: {[key: string]: number} = {
  [AisBand.Top525KHzOfMarineBand]: 0x0,
  [AisBand.EntireMarineBand]: 0x1,
}

/**
 * @category Enumerations
 */
export enum AisCommunicationState {
  Sotdma = 'SOTDMA',
  Itdma = 'ITDMA',
}

/**
 * @category Enumerations
 */
export const AisCommunicationStateValues: {[key: string]: number} = {
  [AisCommunicationState.Sotdma]: 0x0,
  [AisCommunicationState.Itdma]: 0x1,
}

/**
 * @category Enumerations
 */
export enum AisMessageId {
  ScheduledClassAPositionReport = 'Scheduled Class A position report',
  AssignedScheduledClassAPositionReport = 'Assigned scheduled Class A position report',
  InterrogatedClassAPositionReport = 'Interrogated Class A position report',
  BaseStationReport = 'Base station report',
  StaticAndVoyageRelatedData = 'Static and voyage related data',
  BinaryAddressedMessage = 'Binary addressed message',
  BinaryAcknowledgement = 'Binary acknowledgement',
  BinaryBroadcastMessage = 'Binary broadcast message',
  StandardSarAircraftPositionReport = 'Standard SAR aircraft position report',
  UtcdateInquiry = 'UTC/date inquiry',
  UtcdateResponse = 'UTC/date response',
  SafetyRelatedAddressedMessage = 'Safety related addressed message',
  SafetyRelatedAcknowledgement = 'Safety related acknowledgement',
  SatetyRelatedBroadcastMessage = 'Satety related broadcast message',
  Interrogation = 'Interrogation',
  AssignmentModeCommand = 'Assignment mode command',
  DgnssBroadcastBinaryMessage = 'DGNSS broadcast binary message',
  StandardClassBPositionReport = 'Standard Class B position report',
  ExtendedClassBPositionReport = 'Extended Class B position report',
  DataLinkManagementMessage = 'Data link management message',
  AtonReport = 'ATON report',
  ChannelManagement = 'Channel management',
  GroupAssignmentCommand = 'Group assignment command',
  StaticDataReport = 'Static data report',
  SingleSlotBinaryMessage = 'Single slot binary message',
  MultipleSlotBinaryMessage = 'Multiple slot binary message',
  PositionReportForLongRangeApplications = 'Position report for long range applications',
}

/**
 * @category Enumerations
 */
export const AisMessageIdValues: {[key: string]: number} = {
  [AisMessageId.ScheduledClassAPositionReport]: 0x1,
  [AisMessageId.AssignedScheduledClassAPositionReport]: 0x2,
  [AisMessageId.InterrogatedClassAPositionReport]: 0x3,
  [AisMessageId.BaseStationReport]: 0x4,
  [AisMessageId.StaticAndVoyageRelatedData]: 0x5,
  [AisMessageId.BinaryAddressedMessage]: 0x6,
  [AisMessageId.BinaryAcknowledgement]: 0x7,
  [AisMessageId.BinaryBroadcastMessage]: 0x8,
  [AisMessageId.StandardSarAircraftPositionReport]: 0x9,
  [AisMessageId.UtcdateInquiry]: 0xa,
  [AisMessageId.UtcdateResponse]: 0xb,
  [AisMessageId.SafetyRelatedAddressedMessage]: 0xc,
  [AisMessageId.SafetyRelatedAcknowledgement]: 0xd,
  [AisMessageId.SatetyRelatedBroadcastMessage]: 0xe,
  [AisMessageId.Interrogation]: 0xf,
  [AisMessageId.AssignmentModeCommand]: 0x10,
  [AisMessageId.DgnssBroadcastBinaryMessage]: 0x11,
  [AisMessageId.StandardClassBPositionReport]: 0x12,
  [AisMessageId.ExtendedClassBPositionReport]: 0x13,
  [AisMessageId.DataLinkManagementMessage]: 0x14,
  [AisMessageId.AtonReport]: 0x15,
  [AisMessageId.ChannelManagement]: 0x16,
  [AisMessageId.GroupAssignmentCommand]: 0x17,
  [AisMessageId.StaticDataReport]: 0x18,
  [AisMessageId.SingleSlotBinaryMessage]: 0x19,
  [AisMessageId.MultipleSlotBinaryMessage]: 0x1a,
  [AisMessageId.PositionReportForLongRangeApplications]: 0x1b,
}

/**
 * @category Enumerations
 */
export enum AisMode {
  Autonomous = 'Autonomous',
  Assigned = 'Assigned',
}

/**
 * @category Enumerations
 */
export const AisModeValues: {[key: string]: number} = {
  [AisMode.Autonomous]: 0x0,
  [AisMode.Assigned]: 0x1,
}

/**
 * @category Enumerations
 */
export enum AisSpecialManeuver {
  NotAvailable = 'Not available',
  NotEngagedInSpecialManeuver = 'Not engaged in special maneuver',
  EngagedInSpecialManeuver = 'Engaged in special maneuver',
  Reserved = 'Reserved',
}

/**
 * @category Enumerations
 */
export const AisSpecialManeuverValues: {[key: string]: number} = {
  [AisSpecialManeuver.NotAvailable]: 0x0,
  [AisSpecialManeuver.NotEngagedInSpecialManeuver]: 0x1,
  [AisSpecialManeuver.EngagedInSpecialManeuver]: 0x2,
  [AisSpecialManeuver.Reserved]: 0x3,
}

/**
 * @category Enumerations
 */
export enum AisTransceiver {
  ChannelAVdlReception = 'Channel A VDL reception',
  ChannelBVdlReception = 'Channel B VDL reception',
  ChannelAVdlTransmission = 'Channel A VDL transmission',
  ChannelBVdlTransmission = 'Channel B VDL transmission',
  OwnInformationNotBroadcast = 'Own information not broadcast',
  Reserved = 'Reserved',
}

/**
 * @category Enumerations
 */
export const AisTransceiverValues: {[key: string]: number} = {
  [AisTransceiver.ChannelAVdlReception]: 0x0,
  [AisTransceiver.ChannelBVdlReception]: 0x1,
  [AisTransceiver.ChannelAVdlTransmission]: 0x2,
  [AisTransceiver.ChannelBVdlTransmission]: 0x3,
  [AisTransceiver.OwnInformationNotBroadcast]: 0x4,
  [AisTransceiver.Reserved]: 0x5,
}

/**
 * @category Enumerations
 */
export enum AisType {
  Sotdma = 'SOTDMA',
  Cs = 'CS',
}

/**
 * @category Enumerations
 */
export const AisTypeValues: {[key: string]: number} = {
  [AisType.Sotdma]: 0x0,
  [AisType.Cs]: 0x1,
}

/**
 * @category Enumerations
 */
export enum AisVersion {
  ItuRM13711 = 'ITU-R M.1371-1',
  ItuRM13713 = 'ITU-R M.1371-3',
  ItuRM13715 = 'ITU-R M.1371-5',
  ItuRM1371FutureEdition = 'ITU-R M.1371 future edition',
}

/**
 * @category Enumerations
 */
export const AisVersionValues: {[key: string]: number} = {
  [AisVersion.ItuRM13711]: 0x0,
  [AisVersion.ItuRM13713]: 0x1,
  [AisVersion.ItuRM13715]: 0x2,
  [AisVersion.ItuRM1371FutureEdition]: 0x3,
}

/**
 * @category Enumerations
 */
export enum AlertCategory {
  Navigational = 'Navigational',
  Technical = 'Technical',
}

/**
 * @category Enumerations
 */
export const AlertCategoryValues: {[key: string]: number} = {
  [AlertCategory.Navigational]: 0x0,
  [AlertCategory.Technical]: 0x1,
}

/**
 * @category Enumerations
 */
export enum AlertLanguageId {
  Englishus = 'English (US)',
  Englishuk = 'English (UK)',
  Arabic = 'Arabic',
  Chinesesimplified = 'Chinese (simplified)',
  Croatian = 'Croatian',
  Danish = 'Danish',
  Dutch = 'Dutch',
  Finnish = 'Finnish',
  French = 'French',
  German = 'German',
  Greek = 'Greek',
  Italian = 'Italian',
  Japanese = 'Japanese',
  Korean = 'Korean',
  Norwegian = 'Norwegian',
  Polish = 'Polish',
  Portuguese = 'Portuguese',
  Russian = 'Russian',
  Spanish = 'Spanish',
  Swedish = 'Swedish',
}

/**
 * @category Enumerations
 */
export const AlertLanguageIdValues: {[key: string]: number} = {
  [AlertLanguageId.Englishus]: 0x0,
  [AlertLanguageId.Englishuk]: 0x1,
  [AlertLanguageId.Arabic]: 0x2,
  [AlertLanguageId.Chinesesimplified]: 0x3,
  [AlertLanguageId.Croatian]: 0x4,
  [AlertLanguageId.Danish]: 0x5,
  [AlertLanguageId.Dutch]: 0x6,
  [AlertLanguageId.Finnish]: 0x7,
  [AlertLanguageId.French]: 0x8,
  [AlertLanguageId.German]: 0x9,
  [AlertLanguageId.Greek]: 0xa,
  [AlertLanguageId.Italian]: 0xb,
  [AlertLanguageId.Japanese]: 0xc,
  [AlertLanguageId.Korean]: 0xd,
  [AlertLanguageId.Norwegian]: 0xe,
  [AlertLanguageId.Polish]: 0xf,
  [AlertLanguageId.Portuguese]: 0x10,
  [AlertLanguageId.Russian]: 0x11,
  [AlertLanguageId.Spanish]: 0x12,
  [AlertLanguageId.Swedish]: 0x13,
}

/**
 * @category Enumerations
 */
export enum AlertResponseCommand {
  Acknowledge = 'Acknowledge',
  TemporarySilence = 'Temporary Silence',
  TestCommandOff = 'Test Command off',
  TestCommandOn = 'Test Command on',
}

/**
 * @category Enumerations
 */
export const AlertResponseCommandValues: {[key: string]: number} = {
  [AlertResponseCommand.Acknowledge]: 0x0,
  [AlertResponseCommand.TemporarySilence]: 0x1,
  [AlertResponseCommand.TestCommandOff]: 0x2,
  [AlertResponseCommand.TestCommandOn]: 0x3,
}

/**
 * @category Enumerations
 */
export enum AlertState {
  Disabled = 'Disabled',
  Normal = 'Normal',
  Active = 'Active',
  Silenced = 'Silenced',
  Acknowledged = 'Acknowledged',
  AwaitingAcknowledge = 'Awaiting Acknowledge',
}

/**
 * @category Enumerations
 */
export const AlertStateValues: {[key: string]: number} = {
  [AlertState.Disabled]: 0x0,
  [AlertState.Normal]: 0x1,
  [AlertState.Active]: 0x2,
  [AlertState.Silenced]: 0x3,
  [AlertState.Acknowledged]: 0x4,
  [AlertState.AwaitingAcknowledge]: 0x5,
}

/**
 * @category Enumerations
 */
export enum AlertThresholdStatus {
  Normal = 'Normal',
  ThresholdExceeded = 'Threshold Exceeded',
  ExtremeThresholdExceeded = 'Extreme Threshold Exceeded',
  LowThresholdExceeded = 'Low Threshold Exceeded',
  Acknowledged = 'Acknowledged',
  AwaitingAcknowledge = 'Awaiting Acknowledge',
}

/**
 * @category Enumerations
 */
export const AlertThresholdStatusValues: {[key: string]: number} = {
  [AlertThresholdStatus.Normal]: 0x0,
  [AlertThresholdStatus.ThresholdExceeded]: 0x1,
  [AlertThresholdStatus.ExtremeThresholdExceeded]: 0x2,
  [AlertThresholdStatus.LowThresholdExceeded]: 0x3,
  [AlertThresholdStatus.Acknowledged]: 0x4,
  [AlertThresholdStatus.AwaitingAcknowledge]: 0x5,
}

/**
 * @category Enumerations
 */
export enum AlertTriggerCondition {
  Manual = 'Manual',
  Auto = 'Auto',
  Test = 'Test',
  Disabled = 'Disabled',
}

/**
 * @category Enumerations
 */
export const AlertTriggerConditionValues: {[key: string]: number} = {
  [AlertTriggerCondition.Manual]: 0x0,
  [AlertTriggerCondition.Auto]: 0x1,
  [AlertTriggerCondition.Test]: 0x2,
  [AlertTriggerCondition.Disabled]: 0x3,
}

/**
 * @category Enumerations
 */
export enum AlertType {
  EmergencyAlarm = 'Emergency Alarm',
  Alarm = 'Alarm',
  Warning = 'Warning',
  Caution = 'Caution',
}

/**
 * @category Enumerations
 */
export const AlertTypeValues: {[key: string]: number} = {
  [AlertType.EmergencyAlarm]: 0x1,
  [AlertType.Alarm]: 0x2,
  [AlertType.Warning]: 0x5,
  [AlertType.Caution]: 0x8,
}

/**
 * @category Enumerations
 */
export enum AtonType {
  DefaultTypeOfAtoNNotSpecified = 'Default: Type of AtoN not specified',
  ReferencePoint = 'Reference point',
  Racon = 'RACON',
  FixedStructureOffShore = 'Fixed structure off-shore',
  ReservedForFutureUse = 'Reserved for future use',
  FixedLightWithoutSectors = 'Fixed light: without sectors',
  FixedLightWithSectors = 'Fixed light: with sectors',
  FixedLeadingLightFront = 'Fixed leading light front',
  FixedLeadingLightRear = 'Fixed leading light rear',
  FixedBeaconCardinalN = 'Fixed beacon: cardinal N',
  FixedBeaconCardinalE = 'Fixed beacon: cardinal E',
  FixedBeaconCardinalS = 'Fixed beacon: cardinal S',
  FixedBeaconCardinalW = 'Fixed beacon: cardinal W',
  FixedBeaconPortHand = 'Fixed beacon: port hand',
  FixedBeaconStarboardHand = 'Fixed beacon: starboard hand',
  FixedBeaconPreferredChannelPortHand = 'Fixed beacon: preferred channel port hand',
  FixedBeaconPreferredChannelStarboardHand = 'Fixed beacon: preferred channel starboard hand',
  FixedBeaconIsolatedDanger = 'Fixed beacon: isolated danger',
  FixedBeaconSafeWater = 'Fixed beacon: safe water',
  FixedBeaconSpecialMark = 'Fixed beacon: special mark',
  FloatingAtoNCardinalN = 'Floating AtoN: cardinal N',
  FloatingAtoNCardinalE = 'Floating AtoN: cardinal E',
  FloatingAtoNCardinalS = 'Floating AtoN: cardinal S',
  FloatingAtoNCardinalW = 'Floating AtoN: cardinal W',
  FloatingAtoNPortHandMark = 'Floating AtoN: port hand mark',
  FloatingAtoNStarboardHandMark = 'Floating AtoN: starboard hand mark',
  FloatingAtoNPreferredChannelPortHand = 'Floating AtoN: preferred channel port hand',
  FloatingAtoNPreferredChannelStarboardHand = 'Floating AtoN: preferred channel starboard hand',
  FloatingAtoNIsolatedDanger = 'Floating AtoN: isolated danger',
  FloatingAtoNSafeWater = 'Floating AtoN: safe water',
  FloatingAtoNSpecialMark = 'Floating AtoN: special mark',
  FloatingAtoNLightVessellanbyrigs = 'Floating AtoN: light vessel/LANBY/rigs',
}

/**
 * @category Enumerations
 */
export const AtonTypeValues: {[key: string]: number} = {
  [AtonType.DefaultTypeOfAtoNNotSpecified]: 0x0,
  [AtonType.ReferencePoint]: 0x1,
  [AtonType.Racon]: 0x2,
  [AtonType.FixedStructureOffShore]: 0x3,
  [AtonType.ReservedForFutureUse]: 0x4,
  [AtonType.FixedLightWithoutSectors]: 0x5,
  [AtonType.FixedLightWithSectors]: 0x6,
  [AtonType.FixedLeadingLightFront]: 0x7,
  [AtonType.FixedLeadingLightRear]: 0x8,
  [AtonType.FixedBeaconCardinalN]: 0x9,
  [AtonType.FixedBeaconCardinalE]: 0xa,
  [AtonType.FixedBeaconCardinalS]: 0xb,
  [AtonType.FixedBeaconCardinalW]: 0xc,
  [AtonType.FixedBeaconPortHand]: 0xd,
  [AtonType.FixedBeaconStarboardHand]: 0xe,
  [AtonType.FixedBeaconPreferredChannelPortHand]: 0xf,
  [AtonType.FixedBeaconPreferredChannelStarboardHand]: 0x10,
  [AtonType.FixedBeaconIsolatedDanger]: 0x11,
  [AtonType.FixedBeaconSafeWater]: 0x12,
  [AtonType.FixedBeaconSpecialMark]: 0x13,
  [AtonType.FloatingAtoNCardinalN]: 0x14,
  [AtonType.FloatingAtoNCardinalE]: 0x15,
  [AtonType.FloatingAtoNCardinalS]: 0x16,
  [AtonType.FloatingAtoNCardinalW]: 0x17,
  [AtonType.FloatingAtoNPortHandMark]: 0x18,
  [AtonType.FloatingAtoNStarboardHandMark]: 0x19,
  [AtonType.FloatingAtoNPreferredChannelPortHand]: 0x1a,
  [AtonType.FloatingAtoNPreferredChannelStarboardHand]: 0x1b,
  [AtonType.FloatingAtoNIsolatedDanger]: 0x1c,
  [AtonType.FloatingAtoNSafeWater]: 0x1d,
  [AtonType.FloatingAtoNSpecialMark]: 0x1e,
  [AtonType.FloatingAtoNLightVessellanbyrigs]: 0x1f,
}

/**
 * @category Enumerations
 */
export enum AutomaticManual {
  Automatic = 'Automatic',
  Manual = 'Manual',
}

/**
 * @category Enumerations
 */
export const AutomaticManualValues: {[key: string]: number} = {
  [AutomaticManual.Automatic]: 0x0,
  [AutomaticManual.Manual]: 0x1,
}

/**
 * @category Enumerations
 */
export enum Available {
  Available = 'Available',
  NotAvailable = 'Not available',
}

/**
 * @category Enumerations
 */
export const AvailableValues: {[key: string]: number} = {
  [Available.Available]: 0x0,
  [Available.NotAvailable]: 0x1,
}

/**
 * @category Enumerations
 */
export enum BandgDecimals {
  _0 = '0',
  _1 = '1',
  _2 = '2',
  _3 = '3',
  _4 = '4',
  Auto = 'Auto',
}

/**
 * @category Enumerations
 */
export const BandgDecimalsValues: {[key: string]: number} = {
  [BandgDecimals._0]: 0x0,
  [BandgDecimals._1]: 0x1,
  [BandgDecimals._2]: 0x2,
  [BandgDecimals._3]: 0x3,
  [BandgDecimals._4]: 0x4,
  [BandgDecimals.Auto]: 0xfe,
}

/**
 * @category Enumerations
 */
export enum Bandwidth {
  Default = 'Default',
  _125KHz = '12.5 kHz',
}

/**
 * @category Enumerations
 */
export const BandwidthValues: {[key: string]: number} = {
  [Bandwidth.Default]: 0x0,
  [Bandwidth._125KHz]: 0x1,
}

/**
 * @category Enumerations
 */
export enum BatteryChemistry {
  Pblead = 'Pb (Lead)',
  Li = 'Li',
  NiCd = 'NiCd',
  ZnO = 'ZnO',
  NiMh = 'NiMH',
}

/**
 * @category Enumerations
 */
export const BatteryChemistryValues: {[key: string]: number} = {
  [BatteryChemistry.Pblead]: 0x0,
  [BatteryChemistry.Li]: 0x1,
  [BatteryChemistry.NiCd]: 0x2,
  [BatteryChemistry.ZnO]: 0x3,
  [BatteryChemistry.NiMh]: 0x4,
}

/**
 * @category Enumerations
 */
export enum BatteryType {
  Flooded = 'Flooded',
  Gel = 'Gel',
  Agm = 'AGM',
}

/**
 * @category Enumerations
 */
export const BatteryTypeValues: {[key: string]: number} = {
  [BatteryType.Flooded]: 0x0,
  [BatteryType.Gel]: 0x1,
  [BatteryType.Agm]: 0x2,
}

/**
 * @category Enumerations
 */
export enum BatteryVoltage {
  _6V = '6V',
  _12V = '12V',
  _24V = '24V',
  _32V = '32V',
  _36V = '36V',
  _42V = '42V',
  _48V = '48V',
}

/**
 * @category Enumerations
 */
export const BatteryVoltageValues: {[key: string]: number} = {
  [BatteryVoltage._6V]: 0x0,
  [BatteryVoltage._12V]: 0x1,
  [BatteryVoltage._24V]: 0x2,
  [BatteryVoltage._32V]: 0x3,
  [BatteryVoltage._36V]: 0x4,
  [BatteryVoltage._42V]: 0x5,
  [BatteryVoltage._48V]: 0x6,
}

/**
 * @category Enumerations
 */
export enum BearingMode {
  GreatCircle = 'Great Circle',
  Rhumbline = 'Rhumbline',
}

/**
 * @category Enumerations
 */
export const BearingModeValues: {[key: string]: number} = {
  [BearingMode.GreatCircle]: 0x0,
  [BearingMode.Rhumbline]: 0x1,
}

/**
 * @category Enumerations
 */
export enum BluetoothSourceStatus {
  Reserved = 'Reserved',
  Connected = 'Connected',
  Connecting = 'Connecting',
  NotConnected = 'Not connected',
}

/**
 * @category Enumerations
 */
export const BluetoothSourceStatusValues: {[key: string]: number} = {
  [BluetoothSourceStatus.Reserved]: 0x0,
  [BluetoothSourceStatus.Connected]: 0x1,
  [BluetoothSourceStatus.Connecting]: 0x2,
  [BluetoothSourceStatus.NotConnected]: 0x3,
}

/**
 * @category Enumerations
 */
export enum BluetoothStatus {
  Connected = 'Connected',
  NotConnected = 'Not connected',
  NotPaired = 'Not paired',
}

/**
 * @category Enumerations
 */
export const BluetoothStatusValues: {[key: string]: number} = {
  [BluetoothStatus.Connected]: 0x0,
  [BluetoothStatus.NotConnected]: 0x1,
  [BluetoothStatus.NotPaired]: 0x2,
}

/**
 * @category Enumerations
 */
export enum BootState {
  InStartupMonitor = 'in Startup Monitor',
  RunningBootloader = 'running Bootloader',
  RunningApplication = 'running Application',
}

/**
 * @category Enumerations
 */
export const BootStateValues: {[key: string]: number} = {
  [BootState.InStartupMonitor]: 0x0,
  [BootState.RunningBootloader]: 0x1,
  [BootState.RunningApplication]: 0x2,
}

/**
 * @category Enumerations
 */
export enum BroadcastIndicator {
  BroadcastGeoAreaMessage = 'Broadcast geo area message',
  AddressedMessage = 'Addressed message',
}

/**
 * @category Enumerations
 */
export const BroadcastIndicatorValues: {[key: string]: number} = {
  [BroadcastIndicator.BroadcastGeoAreaMessage]: 0x0,
  [BroadcastIndicator.AddressedMessage]: 0x1,
}

/**
 * @category Enumerations
 */
export enum CertificationLevel {
  LevelA = 'Level A',
  LevelB = 'Level B',
}

/**
 * @category Enumerations
 */
export const CertificationLevelValues: {[key: string]: number} = {
  [CertificationLevel.LevelA]: 0x0,
  [CertificationLevel.LevelB]: 0x1,
}

/**
 * @category Enumerations
 */
export enum ChargerMode {
  Standalone = 'Standalone',
  Primary = 'Primary',
  Secondary = 'Secondary',
  Echo = 'Echo',
}

/**
 * @category Enumerations
 */
export const ChargerModeValues: {[key: string]: number} = {
  [ChargerMode.Standalone]: 0x0,
  [ChargerMode.Primary]: 0x1,
  [ChargerMode.Secondary]: 0x2,
  [ChargerMode.Echo]: 0x3,
}

/**
 * @category Enumerations
 */
export enum ChargerState {
  NotCharging = 'Not charging',
  Bulk = 'Bulk',
  Absorption = 'Absorption',
  Overcharge = 'Overcharge',
  Equalise = 'Equalise',
  Float = 'Float',
  NoFloat = 'No float',
  ConstantVi = 'Constant VI',
  Disabled = 'Disabled',
  Fault = 'Fault',
}

/**
 * @category Enumerations
 */
export const ChargerStateValues: {[key: string]: number} = {
  [ChargerState.NotCharging]: 0x0,
  [ChargerState.Bulk]: 0x1,
  [ChargerState.Absorption]: 0x2,
  [ChargerState.Overcharge]: 0x3,
  [ChargerState.Equalise]: 0x4,
  [ChargerState.Float]: 0x5,
  [ChargerState.NoFloat]: 0x6,
  [ChargerState.ConstantVi]: 0x7,
  [ChargerState.Disabled]: 0x8,
  [ChargerState.Fault]: 0x9,
}

/**
 * @category Enumerations
 */
export enum ChargingAlgorithm {
  Trickle = 'Trickle',
  ConstantVoltageConstantCurrent = 'Constant voltage / Constant current',
  _2StagenoFloat = '2 stage (no float)',
  _3Stage = '3 stage',
}

/**
 * @category Enumerations
 */
export const ChargingAlgorithmValues: {[key: string]: number} = {
  [ChargingAlgorithm.Trickle]: 0x0,
  [ChargingAlgorithm.ConstantVoltageConstantCurrent]: 0x1,
  [ChargingAlgorithm._2StagenoFloat]: 0x2,
  [ChargingAlgorithm._3Stage]: 0x3,
}

/**
 * @category Enumerations
 */
export enum ControllerState {
  ErrorActive = 'Error Active',
  ErrorPassive = 'Error Passive',
  BusOff = 'Bus Off',
}

/**
 * @category Enumerations
 */
export const ControllerStateValues: {[key: string]: number} = {
  [ControllerState.ErrorActive]: 0x0,
  [ControllerState.ErrorPassive]: 0x1,
  [ControllerState.BusOff]: 0x2,
}

/**
 * @category Enumerations
 */
export enum ConverterState {
  Off = 'Off',
  LowPowerMode = 'Low Power Mode',
  Fault = 'Fault',
  Bulk = 'Bulk',
  Absorption = 'Absorption',
  Float = 'Float',
  Storage = 'Storage',
  Equalize = 'Equalize',
  PassThru = 'Pass thru',
  Inverting = 'Inverting',
  Assisting = 'Assisting',
}

/**
 * @category Enumerations
 */
export const ConverterStateValues: {[key: string]: number} = {
  [ConverterState.Off]: 0x0,
  [ConverterState.LowPowerMode]: 0x1,
  [ConverterState.Fault]: 0x2,
  [ConverterState.Bulk]: 0x3,
  [ConverterState.Absorption]: 0x4,
  [ConverterState.Float]: 0x5,
  [ConverterState.Storage]: 0x6,
  [ConverterState.Equalize]: 0x7,
  [ConverterState.PassThru]: 0x8,
  [ConverterState.Inverting]: 0x9,
  [ConverterState.Assisting]: 0xa,
}

/**
 * @category Enumerations
 */
export enum CzoneAlarmType {
  AcVoltageError = 'AC Voltage Error',
  AcFrequencyError = 'AC Frequency Error',
  AcHighPower = 'AC High Power',
  DcLowVoltage = 'DC Low Voltage',
  DcVeryLowVoltage = 'DC Very Low Voltage',
  DcHighVoltage = 'DC High Voltage',
  DcLowBatteryCapacity = 'DC Low Battery Capacity',
  OutOfRange = 'Out of Range',
  LowRunCurrent = 'Low Run Current',
  OverCurrent = 'Over Current',
  ShortCircuit = 'Short Circuit',
  MissingCommander = 'Missing Commander',
  ReverseCurrent = 'Reverse Current',
  CalibrationError = 'Calibration Error',
  MissingOutput = 'Missing Output',
  SystemsOn = 'Systems On',
  AcVeryHighPower = 'AC Very High Power',
  AcLowPower = 'AC Low Power',
  DcVeryLowBatteryCapacity = 'DC Very Low Battery Capacity',
  BatteryFull = 'Battery Full',
  DcLoadShedLow = 'DC Load Shed Low',
  DcLoadShedVeryLow = 'DC Load Shed Very Low',
  AcLoadShedLow = 'AC Load Shed Low',
  AcLoadShedVeryLow = 'AC Load Shed Very Low',
  ReversePolarity = 'Reverse Polarity',
  ManualOverride = 'Manual Override',
  Mastervolt = 'Mastervolt',
  HardwareFault = 'Hardware Fault',
  NoAcSupply = 'No AC Supply',
  PgnSwitchingOn = 'PGN Switching On',
  LowCanbusVoltage = 'Low Canbus Voltage',
  BlownFuse = 'Blown Fuse',
  ManualBypass = 'Manual Bypass',
  GenericAlarm = 'Generic Alarm',
  BatteryTemperatureAlarm = 'Battery Temperature Alarm',
  TemperatureSensorError = 'Temperature Sensor Error',
  AcInOutOfRange = 'AC IN Out Of Range',
  DeviceInOverload = 'Device In Overload',
  HighTemperature = 'High Temperature',
  InverterchargerInstallationError = 'Inverter/Charger Installation Error',
  InverterInstallationError = 'Inverter Installation Error',
  ChargerInstallationError = 'Charger Installation Error',
  CableVoltageDropTooHigh = 'Cable Voltage Drop Too High',
  ShuntMismatch = 'Shunt mismatch',
  CoolingFanError = 'Cooling Fan Error',
  MastershuntFuseBlown = 'Mastershunt Fuse Blown',
  OverPressure = 'Over Pressure',
  LowPressure = 'Low Pressure',
  RapidDeflation = 'Rapid Deflation',
  InverterchargerOverTemperature = 'Inverter/Charger Over Temperature',
  ConfirmOn = 'Confirm On',
  BatterySafety = 'Battery Safety',
  StopCharging = 'Stop Charging',
  CheckBatteryRelay = 'Check Battery Relay',
  BatteryHardwareFailure = 'Battery Hardware Failure',
  BatteryOverCurrent = 'Battery Over Current',
  BatteryTemperatureLow = 'Battery Temperature Low',
  BatteryTemperatureHigh = 'Battery Temperature High',
  BatteryLast100 = 'Battery Last 100',
}

/**
 * @category Enumerations
 */
export const CzoneAlarmTypeValues: {[key: string]: number} = {
  [CzoneAlarmType.AcVoltageError]: 0x1,
  [CzoneAlarmType.AcFrequencyError]: 0x2,
  [CzoneAlarmType.AcHighPower]: 0x3,
  [CzoneAlarmType.DcLowVoltage]: 0x4,
  [CzoneAlarmType.DcVeryLowVoltage]: 0x5,
  [CzoneAlarmType.DcHighVoltage]: 0x6,
  [CzoneAlarmType.DcLowBatteryCapacity]: 0x7,
  [CzoneAlarmType.OutOfRange]: 0xa,
  [CzoneAlarmType.LowRunCurrent]: 0xb,
  [CzoneAlarmType.OverCurrent]: 0xc,
  [CzoneAlarmType.ShortCircuit]: 0xd,
  [CzoneAlarmType.MissingCommander]: 0xe,
  [CzoneAlarmType.ReverseCurrent]: 0xf,
  [CzoneAlarmType.CalibrationError]: 0x10,
  [CzoneAlarmType.MissingOutput]: 0x11,
  [CzoneAlarmType.SystemsOn]: 0x12,
  [CzoneAlarmType.AcVeryHighPower]: 0x13,
  [CzoneAlarmType.AcLowPower]: 0x14,
  [CzoneAlarmType.DcVeryLowBatteryCapacity]: 0x15,
  [CzoneAlarmType.BatteryFull]: 0x16,
  [CzoneAlarmType.DcLoadShedLow]: 0x17,
  [CzoneAlarmType.DcLoadShedVeryLow]: 0x18,
  [CzoneAlarmType.AcLoadShedLow]: 0x19,
  [CzoneAlarmType.AcLoadShedVeryLow]: 0x1a,
  [CzoneAlarmType.ReversePolarity]: 0x1b,
  [CzoneAlarmType.ManualOverride]: 0x1c,
  [CzoneAlarmType.Mastervolt]: 0x1d,
  [CzoneAlarmType.HardwareFault]: 0x1e,
  [CzoneAlarmType.NoAcSupply]: 0x1f,
  [CzoneAlarmType.PgnSwitchingOn]: 0x22,
  [CzoneAlarmType.LowCanbusVoltage]: 0x23,
  [CzoneAlarmType.BlownFuse]: 0x24,
  [CzoneAlarmType.ManualBypass]: 0x25,
  [CzoneAlarmType.GenericAlarm]: 0x26,
  [CzoneAlarmType.BatteryTemperatureAlarm]: 0x27,
  [CzoneAlarmType.TemperatureSensorError]: 0x28,
  [CzoneAlarmType.AcInOutOfRange]: 0x29,
  [CzoneAlarmType.DeviceInOverload]: 0x2a,
  [CzoneAlarmType.HighTemperature]: 0x2b,
  [CzoneAlarmType.InverterchargerInstallationError]: 0x2c,
  [CzoneAlarmType.InverterInstallationError]: 0x2d,
  [CzoneAlarmType.ChargerInstallationError]: 0x2e,
  [CzoneAlarmType.CableVoltageDropTooHigh]: 0x2f,
  [CzoneAlarmType.ShuntMismatch]: 0x30,
  [CzoneAlarmType.CoolingFanError]: 0x31,
  [CzoneAlarmType.MastershuntFuseBlown]: 0x32,
  HighTemperature2: 0x33,
  [CzoneAlarmType.OverPressure]: 0x34,
  [CzoneAlarmType.LowPressure]: 0x35,
  [CzoneAlarmType.RapidDeflation]: 0x36,
  [CzoneAlarmType.InverterchargerOverTemperature]: 0x37,
  [CzoneAlarmType.ConfirmOn]: 0x38,
  [CzoneAlarmType.BatterySafety]: 0x39,
  [CzoneAlarmType.StopCharging]: 0x3a,
  [CzoneAlarmType.CheckBatteryRelay]: 0x3b,
  [CzoneAlarmType.BatteryHardwareFailure]: 0x3c,
  [CzoneAlarmType.BatteryOverCurrent]: 0x3d,
  [CzoneAlarmType.BatteryTemperatureLow]: 0x3e,
  [CzoneAlarmType.BatteryTemperatureHigh]: 0x3f,
  [CzoneAlarmType.BatteryLast100]: 0x40,
}

/**
 * @category Enumerations
 */
export enum DcSource {
  Battery = 'Battery',
  Alternator = 'Alternator',
  Convertor = 'Convertor',
  SolarCell = 'Solar cell',
  WindGenerator = 'Wind generator',
}

/**
 * @category Enumerations
 */
export const DcSourceValues: {[key: string]: number} = {
  [DcSource.Battery]: 0x0,
  [DcSource.Alternator]: 0x1,
  [DcSource.Convertor]: 0x2,
  [DcSource.SolarCell]: 0x3,
  [DcSource.WindGenerator]: 0x4,
}

/**
 * @category Enumerations
 */
export enum DeviceClass {
  ReservedFor2000Use = 'Reserved for 2000 Use',
  SystemTools = 'System tools',
  SafetySystems = 'Safety systems',
  InternetworkDevice = 'Internetwork device',
  ElectricalDistribution = 'Electrical Distribution',
  ElectricalGeneration = 'Electrical Generation',
  SteeringAndControlSurfaces = 'Steering and Control surfaces',
  Propulsion = 'Propulsion',
  Navigation = 'Navigation',
  Communication = 'Communication',
  SensorCommunicationInterface = 'Sensor Communication Interface',
  InstrumentationgeneralSystems = 'Instrumentation/general systems',
  ExternalEnvironment = 'External Environment',
  InternalEnvironment = 'Internal Environment',
  DeckPlusCargoPlusFishingEquipmentSystems = 'Deck + cargo + fishing equipment systems',
  HumanInterface = 'Human Interface',
  Display = 'Display',
  Entertainment = 'Entertainment',
}

/**
 * @category Enumerations
 */
export const DeviceClassValues: {[key: string]: number} = {
  [DeviceClass.ReservedFor2000Use]: 0x0,
  [DeviceClass.SystemTools]: 0xa,
  [DeviceClass.SafetySystems]: 0x14,
  [DeviceClass.InternetworkDevice]: 0x19,
  [DeviceClass.ElectricalDistribution]: 0x1e,
  [DeviceClass.ElectricalGeneration]: 0x23,
  [DeviceClass.SteeringAndControlSurfaces]: 0x28,
  [DeviceClass.Propulsion]: 0x32,
  [DeviceClass.Navigation]: 0x3c,
  [DeviceClass.Communication]: 0x46,
  [DeviceClass.SensorCommunicationInterface]: 0x4b,
  [DeviceClass.InstrumentationgeneralSystems]: 0x50,
  [DeviceClass.ExternalEnvironment]: 0x55,
  [DeviceClass.InternalEnvironment]: 0x5a,
  [DeviceClass.DeckPlusCargoPlusFishingEquipmentSystems]: 0x64,
  [DeviceClass.HumanInterface]: 0x6e,
  [DeviceClass.Display]: 0x78,
  [DeviceClass.Entertainment]: 0x7d,
}

/**
 * @category Enumerations
 */
export enum DeviceTempState {
  Cold = 'Cold',
  Warm = 'Warm',
  Hot = 'Hot',
}

/**
 * @category Enumerations
 */
export const DeviceTempStateValues: {[key: string]: number} = {
  [DeviceTempState.Cold]: 0x0,
  [DeviceTempState.Warm]: 0x1,
  [DeviceTempState.Hot]: 0x2,
}

/**
 * @category Enumerations
 */
export enum DgnssMode {
  None = 'None',
  SbasIfAvailable = 'SBAS if available',
  Sbas = 'SBAS',
}

/**
 * @category Enumerations
 */
export const DgnssModeValues: {[key: string]: number} = {
  [DgnssMode.None]: 0x0,
  [DgnssMode.SbasIfAvailable]: 0x1,
  [DgnssMode.Sbas]: 0x3,
}

/**
 * @category Enumerations
 */
export enum DifferentialMode {
  Manual = 'Manual',
  AutoPower = 'Auto Power',
  AutoRange = 'Auto Range',
}

/**
 * @category Enumerations
 */
export const DifferentialModeValues: {[key: string]: number} = {
  [DifferentialMode.Manual]: 0x0,
  [DifferentialMode.AutoPower]: 0x1,
  [DifferentialMode.AutoRange]: 0x2,
}

/**
 * @category Enumerations
 */
export enum DifferentialSource {
  Auto = 'Auto',
  Loran = 'Loran',
  MskBeacon = 'MSK Beacon',
  FmSubcarrier = 'FM Subcarrier',
  Ais = 'AIS',
  GroundBasedRadio = 'Ground based radio',
  Sbas = 'SBAS',
  Satellite = 'Satellite',
}

/**
 * @category Enumerations
 */
export const DifferentialSourceValues: {[key: string]: number} = {
  [DifferentialSource.Auto]: 0x0,
  [DifferentialSource.Loran]: 0x1,
  [DifferentialSource.MskBeacon]: 0x2,
  [DifferentialSource.FmSubcarrier]: 0x3,
  [DifferentialSource.Ais]: 0x4,
  [DifferentialSource.GroundBasedRadio]: 0x5,
  [DifferentialSource.Sbas]: 0x6,
  [DifferentialSource.Satellite]: 0x7,
}

/**
 * @category Enumerations
 */
export enum Direction {
  Forward = 'Forward',
  Reverse = 'Reverse',
}

/**
 * @category Enumerations
 */
export const DirectionValues: {[key: string]: number} = {
  [Direction.Forward]: 0x0,
  [Direction.Reverse]: 0x1,
}

/**
 * @category Enumerations
 */
export enum DirectionReference {
  True = 'True',
  Magnetic = 'Magnetic',
  Error = 'Error',
}

/**
 * @category Enumerations
 */
export const DirectionReferenceValues: {[key: string]: number} = {
  [DirectionReference.True]: 0x0,
  [DirectionReference.Magnetic]: 0x1,
  [DirectionReference.Error]: 0x2,
}

/**
 * @category Enumerations
 */
export enum DirectionRudder {
  NoOrder = 'No Order',
  MoveToStarboard = 'Move to starboard',
  MoveToPort = 'Move to port',
}

/**
 * @category Enumerations
 */
export const DirectionRudderValues: {[key: string]: number} = {
  [DirectionRudder.NoOrder]: 0x0,
  [DirectionRudder.MoveToStarboard]: 0x1,
  [DirectionRudder.MoveToPort]: 0x2,
}

/**
 * @category Enumerations
 */
export enum DockingStatus {
  NotDocked = 'Not docked',
  FullyDocked = 'Fully docked',
}

/**
 * @category Enumerations
 */
export const DockingStatusValues: {[key: string]: number} = {
  [DockingStatus.NotDocked]: 0x0,
  [DockingStatus.FullyDocked]: 0x1,
}

/**
 * @category Enumerations
 */
export enum DscCategory {
  Routine = 'Routine',
  Safety = 'Safety',
  Urgency = 'Urgency',
  Distress = 'Distress',
}

/**
 * @category Enumerations
 */
export const DscCategoryValues: {[key: string]: number} = {
  [DscCategory.Routine]: 0x64,
  [DscCategory.Safety]: 0x6c,
  [DscCategory.Urgency]: 0x6e,
  [DscCategory.Distress]: 0x70,
}

/**
 * @category Enumerations
 */
export enum DscExpansionData {
  EnhancedPosition = 'Enhanced position',
  SourceAndDatumOfPosition = 'Source and datum of position',
  Sog = 'SOG',
  Cog = 'COG',
  AdditionalStationIdentification = 'Additional station identification',
  EnhancedGeographicArea = 'Enhanced geographic area',
  NumberOfPersonsOnBoard = 'Number of persons on board',
}

/**
 * @category Enumerations
 */
export const DscExpansionDataValues: {[key: string]: number} = {
  [DscExpansionData.EnhancedPosition]: 0x64,
  [DscExpansionData.SourceAndDatumOfPosition]: 0x65,
  [DscExpansionData.Sog]: 0x66,
  [DscExpansionData.Cog]: 0x67,
  [DscExpansionData.AdditionalStationIdentification]: 0x68,
  [DscExpansionData.EnhancedGeographicArea]: 0x69,
  [DscExpansionData.NumberOfPersonsOnBoard]: 0x6a,
}

/**
 * @category Enumerations
 */
export enum DscFirstTelecommand {
  F3Eg3EAllModesTp = 'F3E/G3E All modes TP',
  F3Eg3EDuplexTp = 'F3E/G3E duplex TP',
  Polling = 'Polling',
  UnableToComply = 'Unable to comply',
  EndOfCall = 'End of call',
  Data = 'Data',
  J3ETp = 'J3E TP',
  DistressAcknowledgement = 'Distress acknowledgement',
  DistressRelay = 'Distress relay',
  F1Bj2BTtyFec = 'F1B/J2B TTY-FEC',
  F1Bj2BTtyArq = 'F1B/J2B TTY-ARQ',
  Test = 'Test',
  ShipPositionOrLocationRegistrationUpdating = 'Ship position or location registration updating',
  NoInformation = 'No information',
}

/**
 * @category Enumerations
 */
export const DscFirstTelecommandValues: {[key: string]: number} = {
  [DscFirstTelecommand.F3Eg3EAllModesTp]: 0x64,
  [DscFirstTelecommand.F3Eg3EDuplexTp]: 0x65,
  [DscFirstTelecommand.Polling]: 0x67,
  [DscFirstTelecommand.UnableToComply]: 0x68,
  [DscFirstTelecommand.EndOfCall]: 0x69,
  [DscFirstTelecommand.Data]: 0x6a,
  [DscFirstTelecommand.J3ETp]: 0x6d,
  [DscFirstTelecommand.DistressAcknowledgement]: 0x6e,
  [DscFirstTelecommand.DistressRelay]: 0x70,
  [DscFirstTelecommand.F1Bj2BTtyFec]: 0x71,
  [DscFirstTelecommand.F1Bj2BTtyArq]: 0x73,
  [DscFirstTelecommand.Test]: 0x76,
  [DscFirstTelecommand.ShipPositionOrLocationRegistrationUpdating]: 0x79,
  [DscFirstTelecommand.NoInformation]: 0x7e,
}

/**
 * @category Enumerations
 */
export enum DscFormat {
  GeographicalArea = 'Geographical area',
  Distress = 'Distress',
  CommonInterest = 'Common interest',
  AllShips = 'All ships',
  IndividualStations = 'Individual stations',
  NonCallingPurpose = 'Non-calling purpose',
  IndividualStationAutomatic = 'Individual station automatic',
}

/**
 * @category Enumerations
 */
export const DscFormatValues: {[key: string]: number} = {
  [DscFormat.GeographicalArea]: 0x66,
  [DscFormat.Distress]: 0x70,
  [DscFormat.CommonInterest]: 0x72,
  [DscFormat.AllShips]: 0x74,
  [DscFormat.IndividualStations]: 0x78,
  [DscFormat.NonCallingPurpose]: 0x79,
  [DscFormat.IndividualStationAutomatic]: 0x7b,
}

/**
 * @category Enumerations
 */
export enum DscNature {
  Fire = 'Fire',
  Flooding = 'Flooding',
  Collision = 'Collision',
  Grounding = 'Grounding',
  Listing = 'Listing',
  Sinking = 'Sinking',
  DisabledAndAdrift = 'Disabled and adrift',
  Undesignated = 'Undesignated',
  AbandoningShip = 'Abandoning ship',
  Piracy = 'Piracy',
  ManOverboard = 'Man overboard',
  EpirbEmission = 'EPIRB emission',
}

/**
 * @category Enumerations
 */
export const DscNatureValues: {[key: string]: number} = {
  [DscNature.Fire]: 0x64,
  [DscNature.Flooding]: 0x65,
  [DscNature.Collision]: 0x66,
  [DscNature.Grounding]: 0x67,
  [DscNature.Listing]: 0x68,
  [DscNature.Sinking]: 0x69,
  [DscNature.DisabledAndAdrift]: 0x6a,
  [DscNature.Undesignated]: 0x6b,
  [DscNature.AbandoningShip]: 0x6c,
  [DscNature.Piracy]: 0x6d,
  [DscNature.ManOverboard]: 0x6e,
  [DscNature.EpirbEmission]: 0x70,
}

/**
 * @category Enumerations
 */
export enum DscSecondTelecommand {
  NoReasonGiven = 'No reason given',
  CongestionAtMsc = 'Congestion at MSC',
  Busy = 'Busy',
  QueueIndication = 'Queue indication',
  StationBarred = 'Station barred',
  NoOperatorAvailable = 'No operator available',
  OperatorTemporarilyUnavailable = 'Operator temporarily unavailable',
  EquipmentDisabled = 'Equipment disabled',
  UnableToUseProposedChannel = 'Unable to use proposed channel',
  UnableToUseProposedMode = 'Unable to use proposed mode',
  ShipsAndAircraftOfStatesNotPartiesToAnArmedConflict = 'Ships and aircraft of States not parties to an armed conflict',
  MedicalTransports = 'Medical transports',
  PayPhonepublicCallOffice = 'Pay phone/public call office',
  Faxdata = 'Fax/data',
  NoInformation = 'No information',
}

/**
 * @category Enumerations
 */
export const DscSecondTelecommandValues: {[key: string]: number} = {
  [DscSecondTelecommand.NoReasonGiven]: 0x64,
  [DscSecondTelecommand.CongestionAtMsc]: 0x65,
  [DscSecondTelecommand.Busy]: 0x66,
  [DscSecondTelecommand.QueueIndication]: 0x67,
  [DscSecondTelecommand.StationBarred]: 0x68,
  [DscSecondTelecommand.NoOperatorAvailable]: 0x69,
  [DscSecondTelecommand.OperatorTemporarilyUnavailable]: 0x6a,
  [DscSecondTelecommand.EquipmentDisabled]: 0x6b,
  [DscSecondTelecommand.UnableToUseProposedChannel]: 0x6c,
  [DscSecondTelecommand.UnableToUseProposedMode]: 0x6d,
  [DscSecondTelecommand.ShipsAndAircraftOfStatesNotPartiesToAnArmedConflict]: 0x6e,
  [DscSecondTelecommand.MedicalTransports]: 0x6f,
  [DscSecondTelecommand.PayPhonepublicCallOffice]: 0x70,
  [DscSecondTelecommand.Faxdata]: 0x71,
  [DscSecondTelecommand.NoInformation]: 0x7e,
}

/**
 * @category Enumerations
 */
export enum EngineInstance {
  SingleEngineOrDualEnginePort = 'Single Engine or Dual Engine Port',
  DualEngineStarboard = 'Dual Engine Starboard',
}

/**
 * @category Enumerations
 */
export const EngineInstanceValues: {[key: string]: number} = {
  [EngineInstance.SingleEngineOrDualEnginePort]: 0x0,
  [EngineInstance.DualEngineStarboard]: 0x1,
}

/**
 * @category Enumerations
 */
export enum EntertainmentChannel {
  AllChannels = 'All channels',
  StereoFullRange = 'Stereo full range',
  StereoFront = 'Stereo front',
  StereoBack = 'Stereo back',
  StereoSurround = 'Stereo surround',
  Center = 'Center',
  Subwoofer = 'Subwoofer',
  FrontLeft = 'Front left',
  FrontRight = 'Front right',
  BackLeft = 'Back left',
  BackRight = 'Back right',
  SurroundLeft = 'Surround left',
  SurroundRight = 'Surround right',
}

/**
 * @category Enumerations
 */
export const EntertainmentChannelValues: {[key: string]: number} = {
  [EntertainmentChannel.AllChannels]: 0x0,
  [EntertainmentChannel.StereoFullRange]: 0x1,
  [EntertainmentChannel.StereoFront]: 0x2,
  [EntertainmentChannel.StereoBack]: 0x3,
  [EntertainmentChannel.StereoSurround]: 0x4,
  [EntertainmentChannel.Center]: 0x5,
  [EntertainmentChannel.Subwoofer]: 0x6,
  [EntertainmentChannel.FrontLeft]: 0x7,
  [EntertainmentChannel.FrontRight]: 0x8,
  [EntertainmentChannel.BackLeft]: 0x9,
  [EntertainmentChannel.BackRight]: 0xa,
  [EntertainmentChannel.SurroundLeft]: 0xb,
  [EntertainmentChannel.SurroundRight]: 0xc,
}

/**
 * @category Enumerations
 */
export enum EntertainmentDefaultSettings {
  SaveCurrentSettingsAsUserDefault = 'Save current settings as user default',
  LoadUserDefault = 'Load user default',
  LoadManufacturerDefault = 'Load manufacturer default',
}

/**
 * @category Enumerations
 */
export const EntertainmentDefaultSettingsValues: {[key: string]: number} = {
  [EntertainmentDefaultSettings.SaveCurrentSettingsAsUserDefault]: 0x0,
  [EntertainmentDefaultSettings.LoadUserDefault]: 0x1,
  [EntertainmentDefaultSettings.LoadManufacturerDefault]: 0x2,
}

/**
 * @category Enumerations
 */
export enum EntertainmentEq {
  Flat = 'Flat',
  Rock = 'Rock',
  Hall = 'Hall',
  Jazz = 'Jazz',
  Pop = 'Pop',
  Live = 'Live',
  Classic = 'Classic',
  Vocal = 'Vocal',
  Arena = 'Arena',
  Cinema = 'Cinema',
  Custom = 'Custom',
}

/**
 * @category Enumerations
 */
export const EntertainmentEqValues: {[key: string]: number} = {
  [EntertainmentEq.Flat]: 0x0,
  [EntertainmentEq.Rock]: 0x1,
  [EntertainmentEq.Hall]: 0x2,
  [EntertainmentEq.Jazz]: 0x3,
  [EntertainmentEq.Pop]: 0x4,
  [EntertainmentEq.Live]: 0x5,
  [EntertainmentEq.Classic]: 0x6,
  [EntertainmentEq.Vocal]: 0x7,
  [EntertainmentEq.Arena]: 0x8,
  [EntertainmentEq.Cinema]: 0x9,
  [EntertainmentEq.Custom]: 0xa,
}

/**
 * @category Enumerations
 */
export enum EntertainmentFilter {
  FullRange = 'Full range',
  HighPass = 'High pass',
  LowPass = 'Low pass',
  BandPass = 'Band pass',
  NotchFilter = 'Notch filter',
}

/**
 * @category Enumerations
 */
export const EntertainmentFilterValues: {[key: string]: number} = {
  [EntertainmentFilter.FullRange]: 0x0,
  [EntertainmentFilter.HighPass]: 0x1,
  [EntertainmentFilter.LowPass]: 0x2,
  [EntertainmentFilter.BandPass]: 0x3,
  [EntertainmentFilter.NotchFilter]: 0x4,
}

/**
 * @category Enumerations
 */
export enum EntertainmentGroup {
  File = 'File',
  PlaylistName = 'Playlist Name',
  GenreName = 'Genre Name',
  AlbumName = 'Album Name',
  ArtistName = 'Artist Name',
  TrackName = 'Track Name',
  StationName = 'Station Name',
  StationNumber = 'Station Number',
  FavouriteNumber = 'Favourite Number',
  PlayQueue = 'Play Queue',
  ContentInfo = 'Content Info',
}

/**
 * @category Enumerations
 */
export const EntertainmentGroupValues: {[key: string]: number} = {
  [EntertainmentGroup.File]: 0x0,
  [EntertainmentGroup.PlaylistName]: 0x1,
  [EntertainmentGroup.GenreName]: 0x2,
  [EntertainmentGroup.AlbumName]: 0x3,
  [EntertainmentGroup.ArtistName]: 0x4,
  [EntertainmentGroup.TrackName]: 0x5,
  [EntertainmentGroup.StationName]: 0x6,
  [EntertainmentGroup.StationNumber]: 0x7,
  [EntertainmentGroup.FavouriteNumber]: 0x8,
  [EntertainmentGroup.PlayQueue]: 0x9,
  [EntertainmentGroup.ContentInfo]: 0xa,
}

/**
 * @category Enumerations
 */
export enum EntertainmentIdType {
  Group = 'Group',
  File = 'File',
  EncryptedGroup = 'Encrypted group',
  EncryptedFile = 'Encrypted file',
}

/**
 * @category Enumerations
 */
export const EntertainmentIdTypeValues: {[key: string]: number} = {
  [EntertainmentIdType.Group]: 0x0,
  [EntertainmentIdType.File]: 0x1,
  [EntertainmentIdType.EncryptedGroup]: 0x2,
  [EntertainmentIdType.EncryptedFile]: 0x3,
}

/**
 * @category Enumerations
 */
export enum EntertainmentLikeStatus {
  None = 'None',
  ThumbsUp = 'Thumbs up',
  ThumbsDown = 'Thumbs down',
}

/**
 * @category Enumerations
 */
export const EntertainmentLikeStatusValues: {[key: string]: number} = {
  [EntertainmentLikeStatus.None]: 0x0,
  [EntertainmentLikeStatus.ThumbsUp]: 0x1,
  [EntertainmentLikeStatus.ThumbsDown]: 0x2,
}

/**
 * @category Enumerations
 */
export enum EntertainmentPlayStatus {
  Play = 'Play',
  Pause = 'Pause',
  Stop = 'Stop',
  Ff1X = 'FF 1x',
  Ff2X = 'FF 2x',
  Ff3X = 'FF 3x',
  Ff4X = 'FF 4x',
  Rw1X = 'RW 1x',
  Rw2X = 'RW 2x',
  Rw3X = 'RW 3x',
  Rw4X = 'RW 4x',
  SkipAhead = 'Skip ahead',
  SkipBack = 'Skip back',
  JogAhead = 'Jog ahead',
  JogBack = 'Jog back',
  SeekUp = 'Seek up',
  SeekDown = 'Seek down',
  ScanUp = 'Scan up',
  ScanDown = 'Scan down',
  TuneUp = 'Tune up',
  TuneDown = 'Tune down',
  SlowMotion75X = 'Slow motion .75x',
  SlowMotion5X = 'Slow motion .5x',
  SlowMotion25X = 'Slow motion .25x',
  SlowMotion125X = 'Slow motion .125x',
}

/**
 * @category Enumerations
 */
export const EntertainmentPlayStatusValues: {[key: string]: number} = {
  [EntertainmentPlayStatus.Play]: 0x0,
  [EntertainmentPlayStatus.Pause]: 0x1,
  [EntertainmentPlayStatus.Stop]: 0x2,
  [EntertainmentPlayStatus.Ff1X]: 0x3,
  [EntertainmentPlayStatus.Ff2X]: 0x4,
  [EntertainmentPlayStatus.Ff3X]: 0x5,
  [EntertainmentPlayStatus.Ff4X]: 0x6,
  [EntertainmentPlayStatus.Rw1X]: 0x7,
  [EntertainmentPlayStatus.Rw2X]: 0x8,
  [EntertainmentPlayStatus.Rw3X]: 0x9,
  [EntertainmentPlayStatus.Rw4X]: 0xa,
  [EntertainmentPlayStatus.SkipAhead]: 0xb,
  [EntertainmentPlayStatus.SkipBack]: 0xc,
  [EntertainmentPlayStatus.JogAhead]: 0xd,
  [EntertainmentPlayStatus.JogBack]: 0xe,
  [EntertainmentPlayStatus.SeekUp]: 0xf,
  [EntertainmentPlayStatus.SeekDown]: 0x10,
  [EntertainmentPlayStatus.ScanUp]: 0x11,
  [EntertainmentPlayStatus.ScanDown]: 0x12,
  [EntertainmentPlayStatus.TuneUp]: 0x13,
  [EntertainmentPlayStatus.TuneDown]: 0x14,
  [EntertainmentPlayStatus.SlowMotion75X]: 0x15,
  [EntertainmentPlayStatus.SlowMotion5X]: 0x16,
  [EntertainmentPlayStatus.SlowMotion25X]: 0x17,
  [EntertainmentPlayStatus.SlowMotion125X]: 0x18,
}

/**
 * @category Enumerations
 */
export enum EntertainmentRegions {
  Usa = 'USA',
  Europe = 'Europe',
  Asia = 'Asia',
  MiddleEast = 'Middle East',
  LatinAmerica = 'Latin America',
  Australia = 'Australia',
  Russia = 'Russia',
  Japan = 'Japan',
}

/**
 * @category Enumerations
 */
export const EntertainmentRegionsValues: {[key: string]: number} = {
  [EntertainmentRegions.Usa]: 0x0,
  [EntertainmentRegions.Europe]: 0x1,
  [EntertainmentRegions.Asia]: 0x2,
  [EntertainmentRegions.MiddleEast]: 0x3,
  [EntertainmentRegions.LatinAmerica]: 0x4,
  [EntertainmentRegions.Australia]: 0x5,
  [EntertainmentRegions.Russia]: 0x6,
  [EntertainmentRegions.Japan]: 0x7,
}

/**
 * @category Enumerations
 */
export enum EntertainmentRepeatStatus {
  Off = 'Off',
  One = 'One',
  All = 'All',
}

/**
 * @category Enumerations
 */
export const EntertainmentRepeatStatusValues: {[key: string]: number} = {
  [EntertainmentRepeatStatus.Off]: 0x0,
  [EntertainmentRepeatStatus.One]: 0x1,
  [EntertainmentRepeatStatus.All]: 0x2,
}

/**
 * @category Enumerations
 */
export enum EntertainmentShuffleStatus {
  Off = 'Off',
  PlayQueue = 'Play queue',
  All = 'All',
}

/**
 * @category Enumerations
 */
export const EntertainmentShuffleStatusValues: {[key: string]: number} = {
  [EntertainmentShuffleStatus.Off]: 0x0,
  [EntertainmentShuffleStatus.PlayQueue]: 0x1,
  [EntertainmentShuffleStatus.All]: 0x2,
}

/**
 * @category Enumerations
 */
export enum EntertainmentSource {
  VesselAlarm = 'Vessel alarm',
  Am = 'AM',
  Fm = 'FM',
  Weather = 'Weather',
  Dab = 'DAB',
  Aux = 'Aux',
  Usb = 'USB',
  Cd = 'CD',
  Mp3 = 'MP3',
  AppleIOs = 'Apple iOS',
  Android = 'Android',
  Bluetooth = 'Bluetooth',
  SiriusXm = 'Sirius XM',
  Pandora = 'Pandora',
  Spotify = 'Spotify',
  Slacker = 'Slacker',
  Songza = 'Songza',
  AppleRadio = 'Apple Radio',
  LastFm = 'Last FM',
  Ethernet = 'Ethernet',
  VideoMp4 = 'Video MP4',
  VideoDvd = 'Video DVD',
  VideoBluRay = 'Video BluRay',
  Hdmi = 'HDMI',
  Video = 'Video',
}

/**
 * @category Enumerations
 */
export const EntertainmentSourceValues: {[key: string]: number} = {
  [EntertainmentSource.VesselAlarm]: 0x0,
  [EntertainmentSource.Am]: 0x1,
  [EntertainmentSource.Fm]: 0x2,
  [EntertainmentSource.Weather]: 0x3,
  [EntertainmentSource.Dab]: 0x4,
  [EntertainmentSource.Aux]: 0x5,
  [EntertainmentSource.Usb]: 0x6,
  [EntertainmentSource.Cd]: 0x7,
  [EntertainmentSource.Mp3]: 0x8,
  [EntertainmentSource.AppleIOs]: 0x9,
  [EntertainmentSource.Android]: 0xa,
  [EntertainmentSource.Bluetooth]: 0xb,
  [EntertainmentSource.SiriusXm]: 0xc,
  [EntertainmentSource.Pandora]: 0xd,
  [EntertainmentSource.Spotify]: 0xe,
  [EntertainmentSource.Slacker]: 0xf,
  [EntertainmentSource.Songza]: 0x10,
  [EntertainmentSource.AppleRadio]: 0x11,
  [EntertainmentSource.LastFm]: 0x12,
  [EntertainmentSource.Ethernet]: 0x13,
  [EntertainmentSource.VideoMp4]: 0x14,
  [EntertainmentSource.VideoDvd]: 0x15,
  [EntertainmentSource.VideoBluRay]: 0x16,
  [EntertainmentSource.Hdmi]: 0x17,
  [EntertainmentSource.Video]: 0x18,
}

/**
 * @category Enumerations
 */
export enum EntertainmentType {
  File = 'File',
  PlaylistName = 'Playlist Name',
  GenreName = 'Genre Name',
  AlbumName = 'Album Name',
  ArtistName = 'Artist Name',
  TrackName = 'Track Name',
  StationName = 'Station Name',
  StationNumber = 'Station Number',
  FavouriteNumber = 'Favourite Number',
  PlayQueue = 'Play Queue',
  ContentInfo = 'Content Info',
}

/**
 * @category Enumerations
 */
export const EntertainmentTypeValues: {[key: string]: number} = {
  [EntertainmentType.File]: 0x0,
  [EntertainmentType.PlaylistName]: 0x1,
  [EntertainmentType.GenreName]: 0x2,
  [EntertainmentType.AlbumName]: 0x3,
  [EntertainmentType.ArtistName]: 0x4,
  [EntertainmentType.TrackName]: 0x5,
  [EntertainmentType.StationName]: 0x6,
  [EntertainmentType.StationNumber]: 0x7,
  [EntertainmentType.FavouriteNumber]: 0x8,
  [EntertainmentType.PlayQueue]: 0x9,
  [EntertainmentType.ContentInfo]: 0xa,
}

/**
 * @category Enumerations
 */
export enum EntertainmentVolumeControl {
  Up = 'Up',
  Down = 'Down',
}

/**
 * @category Enumerations
 */
export const EntertainmentVolumeControlValues: {[key: string]: number} = {
  [EntertainmentVolumeControl.Up]: 0x0,
  [EntertainmentVolumeControl.Down]: 0x1,
}

/**
 * @category Enumerations
 */
export enum EntertainmentZone {
  AllZones = 'All zones',
  Zone1 = 'Zone 1',
  Zone2 = 'Zone 2',
  Zone3 = 'Zone 3',
  Zone4 = 'Zone 4',
}

/**
 * @category Enumerations
 */
export const EntertainmentZoneValues: {[key: string]: number} = {
  [EntertainmentZone.AllZones]: 0x0,
  [EntertainmentZone.Zone1]: 0x1,
  [EntertainmentZone.Zone2]: 0x2,
  [EntertainmentZone.Zone3]: 0x3,
  [EntertainmentZone.Zone4]: 0x4,
}

/**
 * @category Enumerations
 */
export enum EquipmentStatus {
  Operational = 'Operational',
  Fault = 'Fault',
}

/**
 * @category Enumerations
 */
export const EquipmentStatusValues: {[key: string]: number} = {
  [EquipmentStatus.Operational]: 0x0,
  [EquipmentStatus.Fault]: 0x1,
}

/**
 * @category Enumerations
 */
export enum FloodState {
  Flood = 'Flood',
  Slack = 'Slack',
  Ebb = 'Ebb',
}

/**
 * @category Enumerations
 */
export const FloodStateValues: {[key: string]: number} = {
  [FloodState.Flood]: 0x0,
  [FloodState.Slack]: 0x1,
  [FloodState.Ebb]: 0x2,
}

/**
 * @category Enumerations
 */
export enum FusionCommand {
  Play = 'Play',
  Pause = 'Pause',
  Next = 'Next',
  Prev = 'Prev',
}

/**
 * @category Enumerations
 */
export const FusionCommandValues: {[key: string]: number} = {
  [FusionCommand.Play]: 0x1,
  [FusionCommand.Pause]: 0x2,
  [FusionCommand.Next]: 0x4,
  [FusionCommand.Prev]: 0x6,
}

/**
 * @category Enumerations
 */
export enum FusionLowPassFilter {
  _50Hz = '50 Hz',
  _80Hz = '80 Hz',
  _120Hz = '120 Hz',
  _160Hz = '160 Hz',
}

/**
 * @category Enumerations
 */
export const FusionLowPassFilterValues: {[key: string]: number} = {
  [FusionLowPassFilter._50Hz]: 0x1,
  [FusionLowPassFilter._80Hz]: 0x2,
  [FusionLowPassFilter._120Hz]: 0x3,
  [FusionLowPassFilter._160Hz]: 0x4,
}

/**
 * @category Enumerations
 */
export enum FusionMenuAction {
  Open = 'Open',
  Select = 'Select',
  StepBack = 'Step Back',
  Close = 'Close',
  Exit = 'Exit',
}

/**
 * @category Enumerations
 */
export const FusionMenuActionValues: {[key: string]: number} = {
  [FusionMenuAction.Open]: 0x1,
  [FusionMenuAction.Select]: 0x2,
  [FusionMenuAction.StepBack]: 0x3,
  [FusionMenuAction.Close]: 0x4,
  [FusionMenuAction.Exit]: 0x5,
}

/**
 * @category Enumerations
 */
export enum FusionMenuStatus {
  OpenedAtRoot = 'Opened At Root',
  Opened = 'Opened',
  ItemUpdated = 'Item Updated',
  Closed = 'Closed',
  Locked = 'Locked',
}

/**
 * @category Enumerations
 */
export const FusionMenuStatusValues: {[key: string]: number} = {
  [FusionMenuStatus.OpenedAtRoot]: 0x1,
  [FusionMenuStatus.Opened]: 0x2,
  [FusionMenuStatus.ItemUpdated]: 0x3,
  [FusionMenuStatus.Closed]: 0x4,
  [FusionMenuStatus.Locked]: 0x5,
}

/**
 * @category Enumerations
 */
export enum FusionMessageId {
  RequestStatus = 'Request Status',
  SetSource = 'Set Source',
  MediaCommand = 'Media Command',
  TunerCommand = 'Tuner Command',
  MarineTunerCommand = 'Marine Tuner Command',
  SetMarineTunerSquelch = 'Set Marine Tuner Squelch',
  SetMarineTunerScanMode = 'Set Marine Tuner Scan Mode',
  MenuAction = 'Menu Action',
  RequestMenuCount = 'Request Menu Count',
  RequestMenuItem = 'Request Menu Item',
  RequestMenuLockId = 'Request Menu Lock ID',
  SetAuxGain = 'Set Aux Gain',
  SetSettings = 'Set Settings',
  DabUpdateCommand = 'DAB Update Command',
  SetMute = 'Set Mute',
  SetBalance = 'Set Balance',
  SetLowPassFilter = 'Set Low Pass Filter',
  SetSublevel = 'Set Sublevel',
  SetAllSublevels = 'Set All Sublevels',
  SetEqualizer = 'Set Equalizer',
  SetVolumeLimit = 'Set Volume Limit',
  SetZoneVolume = 'Set Zone Volume',
  SetAllVolumes = 'Set All Volumes',
  SetLineLevelControl = 'Set Line Level Control',
  Power = 'Power',
  SetDeviceName = 'Set Device Name',
  SendSiriusCommand = 'Send Sirius Command',
  SetSiriusParental = 'Set Sirius Parental',
  SendFactoryResetCommand = 'Send Factory Reset Command',
  SetZoneName = 'Set Zone Name',
  SendDvdCommand = 'Send DVD Command',
  DvdPressIrKey = 'DVD Press IR Key',
  SendSelectSiriusTeam = 'Send Select Sirius Team',
  SendSelectSiriusArtist = 'Send Select Sirius Artist',
  SendSiriusSportAlertUserAction = 'Send Sirius Sport Alert User Action',
  SendSiriusArtistSongUserAction = 'Send Sirius Artist Song User Action',
  SendMultiroomCommand = 'Send Multiroom Command',
  GetMultiroomDeviceRecord = 'Get Multiroom Device Record',
  ScanMultiroomDevices = 'Scan Multiroom Devices',
  SendFileTransfer = 'Send File Transfer',
  SetLoud = 'Set Loud',
  SetSourceMultiroomEnabled = 'Set Source Multiroom Enabled',
  RequestHeadUnitDspSettings = 'Request Head Unit DSP Settings',
  SendTransferStatus = 'Send Transfer Status',
  GetServerInfo = 'Get Server Info',
  SetSourceEnabled = 'Set Source Enabled',
  SetSourceName = 'Set Source Name',
  SendExternalAmpGain = 'Send External Amp Gain',
  SendInternalAmpGain = 'Send Internal Amp Gain',
  SendMono = 'Send Mono',
}

/**
 * @category Enumerations
 */
export const FusionMessageIdValues: {[key: string]: number} = {
  [FusionMessageId.RequestStatus]: 0x1,
  [FusionMessageId.SetSource]: 0x2,
  [FusionMessageId.MediaCommand]: 0x3,
  [FusionMessageId.TunerCommand]: 0x5,
  [FusionMessageId.MarineTunerCommand]: 0x6,
  [FusionMessageId.SetMarineTunerSquelch]: 0x7,
  [FusionMessageId.SetMarineTunerScanMode]: 0x8,
  [FusionMessageId.MenuAction]: 0x9,
  [FusionMessageId.RequestMenuCount]: 0xa,
  [FusionMessageId.RequestMenuItem]: 0xb,
  [FusionMessageId.RequestMenuLockId]: 0xc,
  [FusionMessageId.SetAuxGain]: 0xd,
  [FusionMessageId.SetSettings]: 0xf,
  [FusionMessageId.DabUpdateCommand]: 0x10,
  [FusionMessageId.SetMute]: 0x11,
  [FusionMessageId.SetBalance]: 0x12,
  [FusionMessageId.SetLowPassFilter]: 0x13,
  [FusionMessageId.SetSublevel]: 0x14,
  [FusionMessageId.SetAllSublevels]: 0x15,
  [FusionMessageId.SetEqualizer]: 0x16,
  [FusionMessageId.SetVolumeLimit]: 0x17,
  [FusionMessageId.SetZoneVolume]: 0x18,
  [FusionMessageId.SetAllVolumes]: 0x19,
  [FusionMessageId.SetLineLevelControl]: 0x1b,
  [FusionMessageId.Power]: 0x1c,
  [FusionMessageId.SetDeviceName]: 0x1d,
  [FusionMessageId.SendSiriusCommand]: 0x1e,
  [FusionMessageId.SetSiriusParental]: 0x1f,
  [FusionMessageId.SendFactoryResetCommand]: 0x21,
  [FusionMessageId.SetZoneName]: 0x22,
  [FusionMessageId.SendDvdCommand]: 0x23,
  [FusionMessageId.DvdPressIrKey]: 0x24,
  [FusionMessageId.SendSelectSiriusTeam]: 0x27,
  [FusionMessageId.SendSelectSiriusArtist]: 0x28,
  [FusionMessageId.SendSiriusSportAlertUserAction]: 0x29,
  [FusionMessageId.SendSiriusArtistSongUserAction]: 0x2d,
  [FusionMessageId.SendMultiroomCommand]: 0x32,
  [FusionMessageId.GetMultiroomDeviceRecord]: 0x33,
  [FusionMessageId.ScanMultiroomDevices]: 0x34,
  [FusionMessageId.SendFileTransfer]: 0x35,
  [FusionMessageId.SetLoud]: 0x36,
  [FusionMessageId.SetSourceMultiroomEnabled]: 0x38,
  [FusionMessageId.RequestHeadUnitDspSettings]: 0x39,
  [FusionMessageId.SendTransferStatus]: 0x40,
  [FusionMessageId.GetServerInfo]: 0x41,
  [FusionMessageId.SetSourceEnabled]: 0x45,
  [FusionMessageId.SetSourceName]: 0x46,
  [FusionMessageId.SendExternalAmpGain]: 0x49,
  [FusionMessageId.SendInternalAmpGain]: 0x4a,
  [FusionMessageId.SendMono]: 0x4b,
}

/**
 * @category Enumerations
 */
export enum FusionMuteCommand {
  MuteOn = 'Mute On',
  MuteOff = 'Mute Off',
}

/**
 * @category Enumerations
 */
export const FusionMuteCommandValues: {[key: string]: number} = {
  [FusionMuteCommand.MuteOn]: 0x1,
  [FusionMuteCommand.MuteOff]: 0x2,
}

/**
 * @category Enumerations
 */
export enum FusionPlayStatus {
  Invalid = 'Invalid',
  Playing = 'Playing',
  Paused = 'Paused',
  Stopped = 'Stopped',
  SkipForward = 'Skip Forward',
  SkipRewind = 'Skip Rewind',
}

/**
 * @category Enumerations
 */
export const FusionPlayStatusValues: {[key: string]: number} = {
  [FusionPlayStatus.Invalid]: 0x0,
  [FusionPlayStatus.Playing]: 0x1,
  [FusionPlayStatus.Paused]: 0x2,
  [FusionPlayStatus.Stopped]: 0x3,
  [FusionPlayStatus.SkipForward]: 0x4,
  [FusionPlayStatus.SkipRewind]: 0x5,
}

/**
 * @category Enumerations
 */
export enum FusionPowerState {
  On = 'On',
  Off = 'Off',
}

/**
 * @category Enumerations
 */
export const FusionPowerStateValues: {[key: string]: number} = {
  [FusionPowerState.On]: 0x1,
  [FusionPowerState.Off]: 0x2,
}

/**
 * @category Enumerations
 */
export enum FusionRadioSource {
  Am = 'AM',
  Fm = 'FM',
}

/**
 * @category Enumerations
 */
export const FusionRadioSourceValues: {[key: string]: number} = {
  [FusionRadioSource.Am]: 0x0,
  [FusionRadioSource.Fm]: 0x1,
}

/**
 * @category Enumerations
 */
export enum FusionRepeatStatus {
  Off = 'Off',
  Onetrack = 'One/Track',
  Allalbum = 'All/Album',
}

/**
 * @category Enumerations
 */
export const FusionRepeatStatusValues: {[key: string]: number} = {
  [FusionRepeatStatus.Off]: 0x0,
  [FusionRepeatStatus.Onetrack]: 0x1,
  [FusionRepeatStatus.Allalbum]: 0x2,
}

/**
 * @category Enumerations
 */
export enum FusionSetting {
  AlphaSearchThreshold = 'Alpha Search Threshold',
  IPodSubtitles = 'iPod Subtitles',
  Zone2Linked = 'Zone 2 Linked',
  Zone2Enabled = 'Zone 2 Enabled',
  Zone3Enabled = 'Zone 3 Enabled',
  Zone4Enabled = 'Zone 4 Enabled',
  Telemute = 'Telemute',
  TunerRegion = 'Tuner Region',
  MarineZone = 'Marine Zone',
  UsbRepeat = 'USB Repeat',
  UsbShuffle = 'USB Shuffle',
  IPodAlbumArtwork = 'iPod Album Artwork',
  IPodRepeat = 'iPod Repeat',
  IPodShuffle = 'iPod Shuffle',
  AmPreset0 = 'AM Preset 0',
  AmPreset1 = 'AM Preset 1',
  AmPreset2 = 'AM Preset 2',
  AmPreset3 = 'AM Preset 3',
  AmPreset4 = 'AM Preset 4',
  AmPreset5 = 'AM Preset 5',
  AmPreset6 = 'AM Preset 6',
  AmPreset7 = 'AM Preset 7',
  AmPreset8 = 'AM Preset 8',
  AmPreset9 = 'AM Preset 9',
  AmPreset10 = 'AM Preset 10',
  AmPreset11 = 'AM Preset 11',
  AmPreset12 = 'AM Preset 12',
  AmPreset13 = 'AM Preset 13',
  AmPreset14 = 'AM Preset 14',
  FmPreset0 = 'FM Preset 0',
  FmPreset1 = 'FM Preset 1',
  FmPreset2 = 'FM Preset 2',
  FmPreset3 = 'FM Preset 3',
  FmPreset4 = 'FM Preset 4',
  FmPreset5 = 'FM Preset 5',
  FmPreset6 = 'FM Preset 6',
  FmPreset7 = 'FM Preset 7',
  FmPreset8 = 'FM Preset 8',
  FmPreset9 = 'FM Preset 9',
  FmPreset10 = 'FM Preset 10',
  FmPreset11 = 'FM Preset 11',
  FmPreset12 = 'FM Preset 12',
  FmPreset13 = 'FM Preset 13',
  FmPreset14 = 'FM Preset 14',
  VhfPreset0 = 'VHF Preset 0',
  VhfPreset1 = 'VHF Preset 1',
  VhfPreset2 = 'VHF Preset 2',
  VhfPreset3 = 'VHF Preset 3',
  VhfPreset4 = 'VHF Preset 4',
  VhfPreset5 = 'VHF Preset 5',
  VhfPreset6 = 'VHF Preset 6',
  VhfPreset7 = 'VHF Preset 7',
  VhfPreset8 = 'VHF Preset 8',
  VhfPreset9 = 'VHF Preset 9',
  VhfPreset10 = 'VHF Preset 10',
  VhfPreset11 = 'VHF Preset 11',
  VhfPreset12 = 'VHF Preset 12',
  VhfPreset13 = 'VHF Preset 13',
  VhfPreset14 = 'VHF Preset 14',
  ClockTime = 'Clock Time',
  ClockAlarm = 'Clock Alarm',
  IPodVideoSignal = 'iPod Video Signal',
  IPodMonitorAspect = 'iPod Monitor Aspect',
  AuxNameIndex = 'Aux Name Index',
  AmEnabled = 'AM Enabled',
  VhfEnabled = 'VHF Enabled',
  Language = 'Language',
  InternalAmpsOn = 'Internal Amps On',
  MtpRepeat = 'MTP Repeat',
  MtpShuffle = 'MTP Shuffle',
  IdAccessorySource = 'ID Accessory Source',
  NmeaPower = 'NMEA Power',
  LowPowerMode = 'Low Power Mode',
  DvdRegion = 'DVD Region',
  VolumeZoneSync = 'Volume Zone Sync',
  MaxVolumeStart = 'Max Volume Start',
  BtAutoConnect = 'BT Auto Connect',
  TunerAntennasPowerStatus = 'Tuner Antennas Power Status',
  FmAntennaIndex = 'FM Antenna Index',
  DabAntennaIndex = 'DAB Antenna Index',
  DabServiceFollowing = 'DAB Service Following',
  FmFrequencyFollowing = 'FM Frequency Following',
  DabFmServiceFollowing = 'DAB FM Service Following',
  HdmiVolumeZoneSync = 'HDMI Volume Zone Sync',
  ArcInputAudioDelay = 'ARC Input Audio Delay',
  NullSetting = 'Null Setting',
}

/**
 * @category Enumerations
 */
export const FusionSettingValues: {[key: string]: number} = {
  [FusionSetting.AlphaSearchThreshold]: 0x0,
  [FusionSetting.IPodSubtitles]: 0x1,
  [FusionSetting.Zone2Linked]: 0x2,
  [FusionSetting.Zone2Enabled]: 0x3,
  [FusionSetting.Zone3Enabled]: 0x4,
  [FusionSetting.Zone4Enabled]: 0x5,
  [FusionSetting.Telemute]: 0x6,
  [FusionSetting.TunerRegion]: 0x7,
  [FusionSetting.MarineZone]: 0x8,
  [FusionSetting.UsbRepeat]: 0x9,
  [FusionSetting.UsbShuffle]: 0xa,
  [FusionSetting.IPodAlbumArtwork]: 0xb,
  [FusionSetting.IPodRepeat]: 0xc,
  [FusionSetting.IPodShuffle]: 0xd,
  [FusionSetting.AmPreset0]: 0xe,
  [FusionSetting.AmPreset1]: 0xf,
  [FusionSetting.AmPreset2]: 0x10,
  [FusionSetting.AmPreset3]: 0x11,
  [FusionSetting.AmPreset4]: 0x12,
  [FusionSetting.AmPreset5]: 0x13,
  [FusionSetting.AmPreset6]: 0x14,
  [FusionSetting.AmPreset7]: 0x15,
  [FusionSetting.AmPreset8]: 0x16,
  [FusionSetting.AmPreset9]: 0x17,
  [FusionSetting.AmPreset10]: 0x18,
  [FusionSetting.AmPreset11]: 0x19,
  [FusionSetting.AmPreset12]: 0x1a,
  [FusionSetting.AmPreset13]: 0x1b,
  [FusionSetting.AmPreset14]: 0x1c,
  [FusionSetting.FmPreset0]: 0x1d,
  [FusionSetting.FmPreset1]: 0x1e,
  [FusionSetting.FmPreset2]: 0x1f,
  [FusionSetting.FmPreset3]: 0x20,
  [FusionSetting.FmPreset4]: 0x21,
  [FusionSetting.FmPreset5]: 0x22,
  [FusionSetting.FmPreset6]: 0x23,
  [FusionSetting.FmPreset7]: 0x24,
  [FusionSetting.FmPreset8]: 0x25,
  [FusionSetting.FmPreset9]: 0x26,
  [FusionSetting.FmPreset10]: 0x27,
  [FusionSetting.FmPreset11]: 0x28,
  [FusionSetting.FmPreset12]: 0x29,
  [FusionSetting.FmPreset13]: 0x2a,
  [FusionSetting.FmPreset14]: 0x2b,
  [FusionSetting.VhfPreset0]: 0x2c,
  [FusionSetting.VhfPreset1]: 0x2d,
  [FusionSetting.VhfPreset2]: 0x2e,
  [FusionSetting.VhfPreset3]: 0x2f,
  [FusionSetting.VhfPreset4]: 0x30,
  [FusionSetting.VhfPreset5]: 0x31,
  [FusionSetting.VhfPreset6]: 0x32,
  [FusionSetting.VhfPreset7]: 0x33,
  [FusionSetting.VhfPreset8]: 0x34,
  [FusionSetting.VhfPreset9]: 0x35,
  [FusionSetting.VhfPreset10]: 0x36,
  [FusionSetting.VhfPreset11]: 0x37,
  [FusionSetting.VhfPreset12]: 0x38,
  [FusionSetting.VhfPreset13]: 0x39,
  [FusionSetting.VhfPreset14]: 0x3a,
  [FusionSetting.ClockTime]: 0x3b,
  [FusionSetting.ClockAlarm]: 0x3c,
  [FusionSetting.IPodVideoSignal]: 0x3d,
  [FusionSetting.IPodMonitorAspect]: 0x3e,
  [FusionSetting.AuxNameIndex]: 0x3f,
  [FusionSetting.AmEnabled]: 0x40,
  [FusionSetting.VhfEnabled]: 0x41,
  [FusionSetting.Language]: 0x42,
  [FusionSetting.InternalAmpsOn]: 0x43,
  [FusionSetting.MtpRepeat]: 0x44,
  [FusionSetting.MtpShuffle]: 0x45,
  [FusionSetting.IdAccessorySource]: 0x46,
  [FusionSetting.NmeaPower]: 0x47,
  [FusionSetting.LowPowerMode]: 0x48,
  [FusionSetting.DvdRegion]: 0x49,
  [FusionSetting.VolumeZoneSync]: 0x4a,
  [FusionSetting.MaxVolumeStart]: 0x4c,
  [FusionSetting.BtAutoConnect]: 0x4d,
  [FusionSetting.TunerAntennasPowerStatus]: 0x4f,
  [FusionSetting.FmAntennaIndex]: 0x50,
  [FusionSetting.DabAntennaIndex]: 0x51,
  [FusionSetting.DabServiceFollowing]: 0x52,
  [FusionSetting.FmFrequencyFollowing]: 0x53,
  [FusionSetting.DabFmServiceFollowing]: 0x73,
  [FusionSetting.HdmiVolumeZoneSync]: 0x7d,
  [FusionSetting.ArcInputAudioDelay]: 0x7e,
  [FusionSetting.NullSetting]: 0x3e8,
}

/**
 * @category Enumerations
 */
export enum FusionSiriusCommand {
  Next = 'Next',
  Prev = 'Prev',
}

/**
 * @category Enumerations
 */
export const FusionSiriusCommandValues: {[key: string]: number} = {
  [FusionSiriusCommand.Next]: 0x1,
  [FusionSiriusCommand.Prev]: 0x2,
}

/**
 * @category Enumerations
 */
export enum FusionSiriusComState {
  Unknown = 'Unknown',
  Off = 'Off',
  Initialising = 'Initialising',
  On = 'On',
}

/**
 * @category Enumerations
 */
export const FusionSiriusComStateValues: {[key: string]: number} = {
  [FusionSiriusComState.Unknown]: 0xff,
  [FusionSiriusComState.Off]: 0x1,
  [FusionSiriusComState.Initialising]: 0x2,
  [FusionSiriusComState.On]: 0x3,
}

/**
 * @category Enumerations
 */
export enum FusionSiriusTuningMode {
  Normal = 'Normal',
  Category = 'Category',
  Preset = 'Preset',
}

/**
 * @category Enumerations
 */
export const FusionSiriusTuningModeValues: {[key: string]: number} = {
  [FusionSiriusTuningMode.Normal]: 0x1,
  [FusionSiriusTuningMode.Category]: 0x2,
  [FusionSiriusTuningMode.Preset]: 0x3,
}

/**
 * @category Enumerations
 */
export enum FusionSourceType {
  Am = 'AM',
  Fm = 'FM',
  Aux = 'Aux',
  Sirius = 'Sirius',
  IPod = 'iPod',
  Usb = 'USB',
  Dvd = 'DVD',
  Vhf = 'VHF',
  Invalid = 'Invalid',
  Mtp = 'MTP',
  Bluetooth = 'Bluetooth',
  Arc = 'ARC',
  Android = 'Android',
  Pandora = 'Pandora',
  Dab = 'DAB',
  AirPlay = 'AirPlay',
  Upnp = 'UPNP',
  Unknown = 'Unknown',
}

/**
 * @category Enumerations
 */
export const FusionSourceTypeValues: {[key: string]: number} = {
  [FusionSourceType.Am]: 0x0,
  [FusionSourceType.Fm]: 0x1,
  [FusionSourceType.Aux]: 0x2,
  [FusionSourceType.Sirius]: 0x3,
  [FusionSourceType.IPod]: 0x4,
  [FusionSourceType.Usb]: 0x5,
  [FusionSourceType.Dvd]: 0x6,
  [FusionSourceType.Vhf]: 0x7,
  [FusionSourceType.Invalid]: 0x8,
  [FusionSourceType.Mtp]: 0x9,
  [FusionSourceType.Bluetooth]: 0xa,
  [FusionSourceType.Arc]: 0xb,
  [FusionSourceType.Android]: 0xc,
  [FusionSourceType.Pandora]: 0xd,
  [FusionSourceType.Dab]: 0xe,
  [FusionSourceType.AirPlay]: 0xf,
  [FusionSourceType.Upnp]: 0x10,
  [FusionSourceType.Unknown]: 0x11,
}

/**
 * @category Enumerations
 */
export enum FusionStatusMessageId {
  Unknown = 'Unknown',
  ApiVersion = 'API Version',
  Source = 'Source',
  SourceCount = 'Source Count',
  TrackInfo = 'Track Info',
  TrackTitle = 'Track Title',
  TrackArtist = 'Track Artist',
  TrackAlbum = 'Track Album',
  CoverArt = 'Cover Art',
  TrackProgress = 'Track Progress',
  TunerAlign = 'Tuner Align',
  Tuner = 'Tuner',
  MarineTuner = 'Marine Tuner',
  MarineSquelch = 'Marine Squelch',
  MarineScanMode = 'Marine Scan Mode',
  MenuAction = 'Menu Action',
  MenuCount = 'Menu Count',
  MenuItem = 'Menu Item',
  MenuLockId = 'Menu Lock ID',
  AuxGain = 'Aux Gain',
  Setting = 'Setting',
  Settings = 'Settings',
  UpdateFirmwareResult = 'Update Firmware Result',
  Mute = 'Mute',
  Balance = 'Balance',
  LowPassFilter = 'Low Pass Filter',
  Sublevels = 'Sublevels',
  Tone = 'Tone',
  VolumeLimits = 'Volume Limits',
  Volume = 'Volume',
  Capabilities = 'Capabilities',
  LineLevelControl = 'Line Level Control',
  Power = 'Power',
  UnitName = 'Unit Name',
  Sirius = 'Sirius',
  SiriusXmPresetEvent = 'SiriusXM Preset Event',
  SiriusXmChannel = 'SiriusXM Channel',
  SiriusXmTitle = 'SiriusXM Title',
  SiriusXmArtist = 'SiriusXM Artist',
  SiriusXmGenre = 'SiriusXM Genre',
  SiriusXmCategory = 'SiriusXM Category',
  SiriusXmSignal = 'SiriusXM Signal',
  SiriusXmParentalRequest = 'SiriusXM Parental Request',
  SiriusXmDiagnostics = 'SiriusXM Diagnostics',
  SiriusXmPresets = 'SiriusXM Presets',
  ZoneName = 'Zone Name',
  DvdState = 'DVD State',
  DvdTrack = 'DVD Track',
  DvdTrackPosition = 'DVD Track Position',
  DvdTrackName = 'DVD Track Name',
  DvdArtistName = 'DVD Artist Name',
  IpSetting = 'IP Setting',
  MediaLoadingProgress = 'Media Loading Progress',
  MediaUserNotification = 'Media User Notification',
  SystemAlert = 'System Alert',
  Multiroom = 'Multiroom',
  MultiroomStatus = 'Multiroom Status',
  MultiroomDeviceCount = 'Multiroom Device Count',
  MultiroomDeviceRecord = 'Multiroom Device Record',
  SystemCapabilities = 'System Capabilities',
  PartNumber = 'Part Number',
  Loudness = 'Loudness',
  ProcessingBypass = 'Processing Bypass',
  ReceivedFileCount = 'Received File Count',
  ReceivedFileTransfer = 'Received File Transfer',
  SiriusXmReplayIndicator = 'SiriusXM Replay Indicator',
  SiriusXmTeamInfo = 'SiriusXM Team Info',
  SiriusXmTeamEvent = 'SiriusXM Team Event',
  SiriusXmArtistSongInfo = 'SiriusXM Artist Song Info',
  SiriusXmArtistSongEvent = 'SiriusXM Artist Song Event',
  SiriusXmSportAlert = 'SiriusXM Sport Alert',
  SiriusXmArtistSongAlert = 'SiriusXM Artist Song Alert',
  SiriusXmTunemixChanged = 'SiriusXM Tunemix Changed',
  SiriusXmTunemix = 'SiriusXM Tunemix',
  ServerInfo = 'Server Info',
  RdsData = 'RDS Data',
  SourceName = 'Source Name',
  RemoteUpgradeStatus = 'Remote Upgrade Status',
  BtPairingPopup = 'BT Pairing Popup',
  FileTransferConfiguration = 'File Transfer Configuration',
  IgnitionSwitchState = 'Ignition Switch State',
  ExternalAmpGain = 'External Amp Gain',
  InternalAmpGain = 'Internal Amp Gain',
  Mono = 'Mono',
  SpeedVolumeCurrentSpeed = 'Speed Volume Current Speed',
  ZoneCapabilitiesExtended = 'Zone Capabilities Extended',
  BtPairingRequestDone = 'BT Pairing Request Done',
}

/**
 * @category Enumerations
 */
export const FusionStatusMessageIdValues: {[key: string]: number} = {
  [FusionStatusMessageId.Unknown]: 0x0,
  [FusionStatusMessageId.ApiVersion]: 0x8001,
  [FusionStatusMessageId.Source]: 0x8002,
  [FusionStatusMessageId.SourceCount]: 0x8003,
  [FusionStatusMessageId.TrackInfo]: 0x8004,
  [FusionStatusMessageId.TrackTitle]: 0x8005,
  [FusionStatusMessageId.TrackArtist]: 0x8006,
  [FusionStatusMessageId.TrackAlbum]: 0x8007,
  [FusionStatusMessageId.CoverArt]: 0x8008,
  [FusionStatusMessageId.TrackProgress]: 0x8009,
  [FusionStatusMessageId.TunerAlign]: 0x800a,
  [FusionStatusMessageId.Tuner]: 0x800b,
  [FusionStatusMessageId.MarineTuner]: 0x800c,
  [FusionStatusMessageId.MarineSquelch]: 0x800d,
  [FusionStatusMessageId.MarineScanMode]: 0x800e,
  [FusionStatusMessageId.MenuAction]: 0x800f,
  [FusionStatusMessageId.MenuCount]: 0x8010,
  [FusionStatusMessageId.MenuItem]: 0x8011,
  [FusionStatusMessageId.MenuLockId]: 0x8012,
  [FusionStatusMessageId.AuxGain]: 0x8013,
  [FusionStatusMessageId.Setting]: 0x8014,
  [FusionStatusMessageId.Settings]: 0x8015,
  [FusionStatusMessageId.UpdateFirmwareResult]: 0x8016,
  [FusionStatusMessageId.Mute]: 0x8017,
  [FusionStatusMessageId.Balance]: 0x8018,
  [FusionStatusMessageId.LowPassFilter]: 0x8019,
  [FusionStatusMessageId.Sublevels]: 0x801a,
  [FusionStatusMessageId.Tone]: 0x801b,
  [FusionStatusMessageId.VolumeLimits]: 0x801c,
  [FusionStatusMessageId.Volume]: 0x801d,
  [FusionStatusMessageId.Capabilities]: 0x801e,
  [FusionStatusMessageId.LineLevelControl]: 0x801f,
  [FusionStatusMessageId.Power]: 0x8020,
  [FusionStatusMessageId.UnitName]: 0x8021,
  [FusionStatusMessageId.Sirius]: 0x8022,
  [FusionStatusMessageId.SiriusXmPresetEvent]: 0x8023,
  [FusionStatusMessageId.SiriusXmChannel]: 0x8024,
  [FusionStatusMessageId.SiriusXmTitle]: 0x8025,
  [FusionStatusMessageId.SiriusXmArtist]: 0x8026,
  [FusionStatusMessageId.SiriusXmGenre]: 0x8027,
  [FusionStatusMessageId.SiriusXmCategory]: 0x8028,
  [FusionStatusMessageId.SiriusXmSignal]: 0x8029,
  [FusionStatusMessageId.SiriusXmParentalRequest]: 0x802a,
  [FusionStatusMessageId.SiriusXmDiagnostics]: 0x802b,
  [FusionStatusMessageId.SiriusXmPresets]: 0x802c,
  [FusionStatusMessageId.ZoneName]: 0x802d,
  [FusionStatusMessageId.DvdState]: 0x802e,
  [FusionStatusMessageId.DvdTrack]: 0x802f,
  [FusionStatusMessageId.DvdTrackPosition]: 0x8030,
  [FusionStatusMessageId.DvdTrackName]: 0x8031,
  [FusionStatusMessageId.DvdArtistName]: 0x8032,
  [FusionStatusMessageId.IpSetting]: 0x8033,
  [FusionStatusMessageId.MediaLoadingProgress]: 0x8034,
  [FusionStatusMessageId.MediaUserNotification]: 0x8035,
  [FusionStatusMessageId.SystemAlert]: 0x8036,
  [FusionStatusMessageId.Multiroom]: 0x8038,
  [FusionStatusMessageId.MultiroomStatus]: 0x8039,
  [FusionStatusMessageId.MultiroomDeviceCount]: 0x803a,
  [FusionStatusMessageId.MultiroomDeviceRecord]: 0x803b,
  [FusionStatusMessageId.SystemCapabilities]: 0x803d,
  [FusionStatusMessageId.PartNumber]: 0x803e,
  [FusionStatusMessageId.Loudness]: 0x803f,
  [FusionStatusMessageId.ProcessingBypass]: 0x8040,
  [FusionStatusMessageId.ReceivedFileCount]: 0x8041,
  [FusionStatusMessageId.ReceivedFileTransfer]: 0x8042,
  [FusionStatusMessageId.SiriusXmReplayIndicator]: 0x8043,
  [FusionStatusMessageId.SiriusXmTeamInfo]: 0x8045,
  [FusionStatusMessageId.SiriusXmTeamEvent]: 0x8046,
  [FusionStatusMessageId.SiriusXmArtistSongInfo]: 0x8047,
  [FusionStatusMessageId.SiriusXmArtistSongEvent]: 0x8048,
  [FusionStatusMessageId.SiriusXmSportAlert]: 0x8049,
  [FusionStatusMessageId.SiriusXmArtistSongAlert]: 0x804a,
  [FusionStatusMessageId.SiriusXmTunemixChanged]: 0x804b,
  [FusionStatusMessageId.SiriusXmTunemix]: 0x804c,
  [FusionStatusMessageId.ServerInfo]: 0x804e,
  [FusionStatusMessageId.RdsData]: 0x8052,
  [FusionStatusMessageId.SourceName]: 0x8056,
  [FusionStatusMessageId.RemoteUpgradeStatus]: 0x8057,
  [FusionStatusMessageId.BtPairingPopup]: 0x8058,
  [FusionStatusMessageId.FileTransferConfiguration]: 0x805a,
  [FusionStatusMessageId.IgnitionSwitchState]: 0x805b,
  [FusionStatusMessageId.ExternalAmpGain]: 0x805c,
  [FusionStatusMessageId.InternalAmpGain]: 0x805d,
  [FusionStatusMessageId.Mono]: 0x805e,
  [FusionStatusMessageId.SpeedVolumeCurrentSpeed]: 0x805f,
  [FusionStatusMessageId.ZoneCapabilitiesExtended]: 0x8061,
  [FusionStatusMessageId.BtPairingRequestDone]: 0x806d,
}

/**
 * @category Enumerations
 */
export enum FusionTunerCommand {
  SeekUp = 'Seek Up',
  TuneUp = 'Tune Up',
  SeekDown = 'Seek Down',
  TuneDown = 'Tune Down',
  TuneDirect = 'Tune Direct',
}

/**
 * @category Enumerations
 */
export const FusionTunerCommandValues: {[key: string]: number} = {
  [FusionTunerCommand.SeekUp]: 0x1,
  [FusionTunerCommand.TuneUp]: 0x2,
  [FusionTunerCommand.SeekDown]: 0x3,
  [FusionTunerCommand.TuneDown]: 0x4,
  [FusionTunerCommand.TuneDirect]: 0x5,
}

/**
 * @category Enumerations
 */
export enum GarminAttMessageId {
  CalibrationMatrixPresent = 'Calibration Matrix Present',
  SetNorthState = 'Set North State',
  DeviceFlags = 'Device Flags',
  CogSourceValidFlag = 'COG Source Valid Flag',
}

/**
 * @category Enumerations
 */
export const GarminAttMessageIdValues: {[key: string]: number} = {
  [GarminAttMessageId.CalibrationMatrixPresent]: 0x28,
  [GarminAttMessageId.SetNorthState]: 0x34,
  [GarminAttMessageId.DeviceFlags]: 0x41,
  [GarminAttMessageId.CogSourceValidFlag]: 0x43,
}

/**
 * @category Enumerations
 */
export enum GarminAutopilotField {
  Heartbeat = 'Heartbeat',
  ModeState = 'Mode State',
  HeadingToSteer = 'Heading to Steer',
  ResponseSetting = 'Response Setting',
  RateOfTurn = 'Rate of Turn',
  RateOfTurnOrder = 'Rate of Turn Order',
  TurnAngleOrder = 'Turn Angle Order',
  SystemVoltage = 'System Voltage',
  TurnAngleMeasured = 'Turn Angle Measured',
  EngineRpmB = 'Engine RPM B',
  EngineRpmA = 'Engine RPM A',
  Speed = 'Speed',
}

/**
 * @category Enumerations
 */
export const GarminAutopilotFieldValues: {[key: string]: number} = {
  [GarminAutopilotField.Heartbeat]: 0x3,
  [GarminAutopilotField.ModeState]: 0xa,
  [GarminAutopilotField.HeadingToSteer]: 0xb,
  [GarminAutopilotField.ResponseSetting]: 0x3e,
  [GarminAutopilotField.RateOfTurn]: 0x72,
  [GarminAutopilotField.RateOfTurnOrder]: 0x73,
  [GarminAutopilotField.TurnAngleOrder]: 0x74,
  [GarminAutopilotField.SystemVoltage]: 0x9e,
  [GarminAutopilotField.TurnAngleMeasured]: 0xa1,
  [GarminAutopilotField.EngineRpmB]: 0xef,
  [GarminAutopilotField.EngineRpmA]: 0xf0,
  [GarminAutopilotField.Speed]: 0xf6,
}

/**
 * @category Enumerations
 */
export enum GarminAutopilotManeuverCode {
  DecreaseHeading1Degree = 'Decrease Heading 1 Degree',
  DecreaseHeading10Degrees = 'Decrease Heading 10 Degrees',
  IncreaseHeading1Degree = 'Increase Heading 1 Degree',
  IncreaseHeading10Degrees = 'Increase Heading 10 Degrees',
}

/**
 * @category Enumerations
 */
export const GarminAutopilotManeuverCodeValues: {[key: string]: number} = {
  [GarminAutopilotManeuverCode.DecreaseHeading1Degree]: 0x0,
  [GarminAutopilotManeuverCode.DecreaseHeading10Degrees]: 0x1,
  [GarminAutopilotManeuverCode.IncreaseHeading1Degree]: 0x2,
  [GarminAutopilotManeuverCode.IncreaseHeading10Degrees]: 0x3,
}

/**
 * @category Enumerations
 */
export enum GarminAutopilotModeState {
  Standby = 'Standby',
  ShadowDrive = 'Shadow Drive',
  Engaged = 'Engaged',
}

/**
 * @category Enumerations
 */
export const GarminAutopilotModeStateValues: {[key: string]: number} = {
  [GarminAutopilotModeState.Standby]: 0x2,
  [GarminAutopilotModeState.ShadowDrive]: 0x3,
  [GarminAutopilotModeState.Engaged]: 0x5,
}

/**
 * @category Enumerations
 */
export enum GarminBacklightLevel {
  _0 = '0%',
  _5 = '5%',
  _10 = '10%',
  _15 = '15%',
  _20 = '20%',
  _25 = '25%',
  _30 = '30%',
  _35 = '35%',
  _40 = '40%',
  _45 = '45%',
  _50 = '50%',
  _55 = '55%',
  _60 = '60%',
  _65 = '65%',
  _70 = '70%',
  _75 = '75%',
  _80 = '80%',
  _85 = '85%',
  _90 = '90%',
  _95 = '95%',
  _100 = '100%',
}

/**
 * @category Enumerations
 */
export const GarminBacklightLevelValues: {[key: string]: number} = {
  [GarminBacklightLevel._0]: 0x0,
  [GarminBacklightLevel._5]: 0x1,
  [GarminBacklightLevel._10]: 0x2,
  [GarminBacklightLevel._15]: 0x3,
  [GarminBacklightLevel._20]: 0x4,
  [GarminBacklightLevel._25]: 0x5,
  [GarminBacklightLevel._30]: 0x6,
  [GarminBacklightLevel._35]: 0x7,
  [GarminBacklightLevel._40]: 0x8,
  [GarminBacklightLevel._45]: 0x9,
  [GarminBacklightLevel._50]: 0xa,
  [GarminBacklightLevel._55]: 0xb,
  [GarminBacklightLevel._60]: 0xc,
  [GarminBacklightLevel._65]: 0xd,
  [GarminBacklightLevel._70]: 0xe,
  [GarminBacklightLevel._75]: 0xf,
  [GarminBacklightLevel._80]: 0x10,
  [GarminBacklightLevel._85]: 0x11,
  [GarminBacklightLevel._90]: 0x12,
  [GarminBacklightLevel._95]: 0x13,
  [GarminBacklightLevel._100]: 0x14,
}

/**
 * @category Enumerations
 */
export enum GarminColor {
  DayFullColor = 'Day full color',
  DayHighContrast = 'Day high contrast',
  NightFullColor = 'Night full color',
  NightRedblack = 'Night red/black',
  NightGreenblack = 'Night green/black',
}

/**
 * @category Enumerations
 */
export const GarminColorValues: {[key: string]: number} = {
  [GarminColor.DayFullColor]: 0x0,
  [GarminColor.DayHighContrast]: 0x1,
  [GarminColor.NightFullColor]: 0x2,
  [GarminColor.NightRedblack]: 0x3,
  [GarminColor.NightGreenblack]: 0x4,
}

/**
 * @category Enumerations
 */
export enum GarminColorMode {
  Day = 'Day',
  Night = 'Night',
  Color = 'Color',
}

/**
 * @category Enumerations
 */
export const GarminColorModeValues: {[key: string]: number} = {
  [GarminColorMode.Day]: 0x0,
  [GarminColorMode.Night]: 0x1,
  [GarminColorMode.Color]: 0xd,
}

/**
 * @category Enumerations
 */
export enum GarminMessageId {
  AhrsAttTransport = 'AHRS ATT transport',
  AutopilotTransport = 'Autopilot transport',
}

/**
 * @category Enumerations
 */
export const GarminMessageIdValues: {[key: string]: number} = {
  [GarminMessageId.AhrsAttTransport]: 0x76c,
  [GarminMessageId.AutopilotTransport]: 0x1710,
}

/**
 * @category Enumerations
 */
export enum GearStatus {
  Forward = 'Forward',
  Neutral = 'Neutral',
  Reverse = 'Reverse',
}

/**
 * @category Enumerations
 */
export const GearStatusValues: {[key: string]: number} = {
  [GearStatus.Forward]: 0x0,
  [GearStatus.Neutral]: 0x1,
  [GearStatus.Reverse]: 0x2,
}

/**
 * @category Enumerations
 */
export enum Gns {
  Gps = 'GPS',
  Glonass = 'GLONASS',
  GpsPlusglonass = 'GPS+GLONASS',
  GpsPlussbaswaas = 'GPS+SBAS/WAAS',
  GpsPlussbaswaasPlusglonass = 'GPS+SBAS/WAAS+GLONASS',
  Chayka = 'Chayka',
  Integrated = 'integrated',
  Surveyed = 'surveyed',
  Galileo = 'Galileo',
}

/**
 * @category Enumerations
 */
export const GnsValues: {[key: string]: number} = {
  [Gns.Gps]: 0x0,
  [Gns.Glonass]: 0x1,
  [Gns.GpsPlusglonass]: 0x2,
  [Gns.GpsPlussbaswaas]: 0x3,
  [Gns.GpsPlussbaswaasPlusglonass]: 0x4,
  [Gns.Chayka]: 0x5,
  [Gns.Integrated]: 0x6,
  [Gns.Surveyed]: 0x7,
  [Gns.Galileo]: 0x8,
}

/**
 * @category Enumerations
 */
export enum GnssMode {
  _1D = '1D',
  _2D = '2D',
  _3D = '3D',
  Auto = 'Auto',
}

/**
 * @category Enumerations
 */
export const GnssModeValues: {[key: string]: number} = {
  [GnssMode._1D]: 0x0,
  [GnssMode._2D]: 0x1,
  [GnssMode._3D]: 0x2,
  [GnssMode.Auto]: 0x3,
}

/**
 * @category Enumerations
 */
export enum GnssSystem {
  Gps = 'GPS',
  Glonass = 'GLONASS',
  Galileo = 'Galileo',
  BeiDou = 'BeiDou',
  Qzss = 'QZSS',
}

/**
 * @category Enumerations
 */
export const GnssSystemValues: {[key: string]: number} = {
  [GnssSystem.Gps]: 0x0,
  [GnssSystem.Glonass]: 0x1,
  [GnssSystem.Galileo]: 0x2,
  [GnssSystem.BeiDou]: 0x3,
  [GnssSystem.Qzss]: 0x4,
}

/**
 * @category Enumerations
 */
export enum GnsIntegrity {
  NoIntegrityChecking = 'No integrity checking',
  Safe = 'Safe',
  Caution = 'Caution',
  Unsafe = 'Unsafe',
}

/**
 * @category Enumerations
 */
export const GnsIntegrityValues: {[key: string]: number} = {
  [GnsIntegrity.NoIntegrityChecking]: 0x0,
  [GnsIntegrity.Safe]: 0x1,
  [GnsIntegrity.Caution]: 0x2,
  [GnsIntegrity.Unsafe]: 0x3,
}

/**
 * @category Enumerations
 */
export enum GnsMethod {
  NoGnss = 'no GNSS',
  GnssFix = 'GNSS fix',
  DgnssFix = 'DGNSS fix',
  PreciseGnss = 'Precise GNSS',
  RtkFixedInteger = 'RTK Fixed Integer',
  RtkFloat = 'RTK float',
  EstimateddrMode = 'Estimated (DR) mode',
  ManualInput = 'Manual Input',
  SimulateMode = 'Simulate mode',
}

/**
 * @category Enumerations
 */
export const GnsMethodValues: {[key: string]: number} = {
  [GnsMethod.NoGnss]: 0x0,
  [GnsMethod.GnssFix]: 0x1,
  [GnsMethod.DgnssFix]: 0x2,
  [GnsMethod.PreciseGnss]: 0x3,
  [GnsMethod.RtkFixedInteger]: 0x4,
  [GnsMethod.RtkFloat]: 0x5,
  [GnsMethod.EstimateddrMode]: 0x6,
  [GnsMethod.ManualInput]: 0x7,
  [GnsMethod.SimulateMode]: 0x8,
}

/**
 * @category Enumerations
 */
export enum GoodWarningError {
  Good = 'Good',
  Warning = 'Warning',
  Error = 'Error',
}

/**
 * @category Enumerations
 */
export const GoodWarningErrorValues: {[key: string]: number} = {
  [GoodWarningError.Good]: 0x0,
  [GoodWarningError.Warning]: 0x1,
  [GoodWarningError.Error]: 0x2,
}

/**
 * @category Enumerations
 */
export enum GroupFunction {
  Request = 'Request',
  Command = 'Command',
  Acknowledge = 'Acknowledge',
  ReadFields = 'Read Fields',
  ReadFieldsReply = 'Read Fields Reply',
  WriteFields = 'Write Fields',
  WriteFieldsReply = 'Write Fields Reply',
}

/**
 * @category Enumerations
 */
export const GroupFunctionValues: {[key: string]: number} = {
  [GroupFunction.Request]: 0x0,
  [GroupFunction.Command]: 0x1,
  [GroupFunction.Acknowledge]: 0x2,
  [GroupFunction.ReadFields]: 0x3,
  [GroupFunction.ReadFieldsReply]: 0x4,
  [GroupFunction.WriteFields]: 0x5,
  [GroupFunction.WriteFieldsReply]: 0x6,
}

/**
 * @category Enumerations
 */
export enum HumiditySource {
  Inside = 'Inside',
  Outside = 'Outside',
}

/**
 * @category Enumerations
 */
export const HumiditySourceValues: {[key: string]: number} = {
  [HumiditySource.Inside]: 0x0,
  [HumiditySource.Outside]: 0x1,
}

/**
 * @category Enumerations
 */
export enum IndustryCode {
  Global = 'Global',
  Highway = 'Highway',
  Agriculture = 'Agriculture',
  Construction = 'Construction',
  MarineIndustry = 'Marine Industry',
  Industrial = 'Industrial',
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  Marine = 'Marine Industry',
}

/**
 * @category Enumerations
 */
export const IndustryCodeValues: {[key: string]: number} = {
  [IndustryCode.Global]: 0x0,
  [IndustryCode.Highway]: 0x1,
  [IndustryCode.Agriculture]: 0x2,
  [IndustryCode.Construction]: 0x3,
  [IndustryCode.MarineIndustry]: 0x4,
  [IndustryCode.Industrial]: 0x5,
  Marine: 0x4,
}

/**
 * @category Enumerations
 */
export enum InverterMode {
  Standalone = 'Standalone',
  SeriesMaster = 'Series Master',
  SeriesSlave = 'Series Slave',
  ParallelMaster = 'Parallel Master',
  ParallelSlave = 'Parallel Slave',
}

/**
 * @category Enumerations
 */
export const InverterModeValues: {[key: string]: number} = {
  [InverterMode.Standalone]: 0x0,
  [InverterMode.SeriesMaster]: 0x1,
  [InverterMode.SeriesSlave]: 0x2,
  [InverterMode.ParallelMaster]: 0x3,
  [InverterMode.ParallelSlave]: 0x4,
}

/**
 * @category Enumerations
 */
export enum InverterState {
  Invert = 'Invert',
  AcPassthru = 'AC passthru',
  LoadSense = 'Load sense',
  Fault = 'Fault',
  Disabled = 'Disabled',
}

/**
 * @category Enumerations
 */
export const InverterStateValues: {[key: string]: number} = {
  [InverterState.Invert]: 0x0,
  [InverterState.AcPassthru]: 0x1,
  [InverterState.LoadSense]: 0x2,
  [InverterState.Fault]: 0x3,
  [InverterState.Disabled]: 0x4,
}

/**
 * @category Enumerations
 */
export enum IsoCommand {
  Ack = 'ACK',
  Rts = 'RTS',
  Cts = 'CTS',
  Eom = 'EOM',
  Bam = 'BAM',
  Abort = 'Abort',
}

/**
 * @category Enumerations
 */
export const IsoCommandValues: {[key: string]: number} = {
  [IsoCommand.Ack]: 0x0,
  [IsoCommand.Rts]: 0x10,
  [IsoCommand.Cts]: 0x11,
  [IsoCommand.Eom]: 0x13,
  [IsoCommand.Bam]: 0x20,
  [IsoCommand.Abort]: 0xff,
}

/**
 * @category Enumerations
 */
export enum IsoControl {
  Ack = 'ACK',
  Nak = 'NAK',
  AccessDenied = 'Access Denied',
  AddressBusy = 'Address Busy',
}

/**
 * @category Enumerations
 */
export const IsoControlValues: {[key: string]: number} = {
  [IsoControl.Ack]: 0x0,
  [IsoControl.Nak]: 0x1,
  [IsoControl.AccessDenied]: 0x2,
  [IsoControl.AddressBusy]: 0x3,
}

/**
 * @category Enumerations
 */
export enum LightingCommand {
  Idle = 'Idle',
  DetectDevices = 'Detect Devices',
  Reboot = 'Reboot',
  FactoryReset = 'Factory Reset',
  PoweringUp = 'Powering Up',
}

/**
 * @category Enumerations
 */
export const LightingCommandValues: {[key: string]: number} = {
  [LightingCommand.Idle]: 0x0,
  [LightingCommand.DetectDevices]: 0x1,
  [LightingCommand.Reboot]: 0x2,
  [LightingCommand.FactoryReset]: 0x3,
  [LightingCommand.PoweringUp]: 0x4,
}

/**
 * @category Enumerations
 */
export enum Line {
  Line1 = 'Line 1',
  Line2 = 'Line 2',
  Line3 = 'Line 3',
}

/**
 * @category Enumerations
 */
export const LineValues: {[key: string]: number} = {
  [Line.Line1]: 0x0,
  [Line.Line2]: 0x1,
  [Line.Line3]: 0x2,
}

/**
 * @category Enumerations
 */
export enum LowBattery {
  Good = 'Good',
  Low = 'Low',
}

/**
 * @category Enumerations
 */
export const LowBatteryValues: {[key: string]: number} = {
  [LowBattery.Good]: 0x0,
  [LowBattery.Low]: 0x1,
}

/**
 * @category Enumerations
 */
export enum MagneticVariation {
  Manual = 'Manual',
  AutomaticChart = 'Automatic Chart',
  AutomaticTable = 'Automatic Table',
  AutomaticCalculation = 'Automatic Calculation',
  Wmm2000 = 'WMM 2000',
  Wmm2005 = 'WMM 2005',
  Wmm2010 = 'WMM 2010',
  Wmm2015 = 'WMM 2015',
  Wmm2020 = 'WMM 2020',
  Wmm2025 = 'WMM 2025',
}

/**
 * @category Enumerations
 */
export const MagneticVariationValues: {[key: string]: number} = {
  [MagneticVariation.Manual]: 0x0,
  [MagneticVariation.AutomaticChart]: 0x1,
  [MagneticVariation.AutomaticTable]: 0x2,
  [MagneticVariation.AutomaticCalculation]: 0x3,
  [MagneticVariation.Wmm2000]: 0x4,
  [MagneticVariation.Wmm2005]: 0x5,
  [MagneticVariation.Wmm2010]: 0x6,
  [MagneticVariation.Wmm2015]: 0x7,
  [MagneticVariation.Wmm2020]: 0x8,
  [MagneticVariation.Wmm2025]: 0x9,
}

/**
 * @category Enumerations
 */
export enum ManufacturerCode {
  ArksEnterprises = 'ARKS Enterprises',
  FwMurphyenovationControls = 'FW Murphy/Enovation Controls',
  TwinDisc = 'Twin Disc',
  KohlerPowerSystems = 'Kohler Power Systems',
  HemisphereGps = 'Hemisphere GPS',
  Airmar = 'Airmar',
  Maretron = 'Maretron',
  Lowrance = 'Lowrance',
  MercuryMarine = 'Mercury Marine',
  NautibusElectronic = 'Nautibus Electronic',
  BlueWaterData = 'Blue Water Data',
  Westerbeke = 'Westerbeke',
  Isspro = 'ISSPRO',
  OffshoreSystemsuk = 'Offshore Systems (UK)',
  Evinrudebrp = 'Evinrude/BRP',
  CpacSystems = 'CPAC Systems',
  XantrexTechnology = 'Xantrex Technology',
  MarlinTechnologies = 'Marlin Technologies',
  YanmarMarine = 'Yanmar Marine',
  VolvoPenta = 'Volvo Penta',
  CarlingTechnologiesIncmoritzAerospace = 'Carling Technologies Inc. (Moritz Aerospace)',
  BeedeInstruments = 'Beede Instruments',
  FloscanInstrument = 'Floscan Instrument',
  Nobeltec = 'Nobeltec',
  MysticValleyCommunications = 'Mystic Valley Communications',
  Actia = 'Actia',
  DisenosYTechnologia = 'Disenos Y Technologia',
  DigitalSwitchingSystems = 'Digital Switching Systems',
  Xintexatena = 'Xintex/Atena',
  EmmiNetwork = 'EMMI NETWORK',
  Zf = 'ZF',
  Garmin = 'Garmin',
  YachtMonitoringSolutions = 'Yacht Monitoring Solutions',
  SailormadeMarineTelemetrytetraTechnology = 'Sailormade Marine Telemetry/Tetra Technology',
  Eride = 'Eride',
  HondaMotor = 'Honda Motor',
  Groco = 'Groco',
  Actisense = 'Actisense',
  AmphenolLtwTechnology = 'Amphenol LTW Technology',
  Navico = 'Navico',
  HamiltonJet = 'Hamilton Jet',
  SeaRecovery = 'Sea Recovery',
  CoelmoSrlItaly = 'Coelmo SRL Italy',
  BepMarine = 'BEP Marine',
  EmpirBus = 'Empir Bus',
  NovAtel = 'NovAtel',
  SleipnerMotor = 'Sleipner Motor',
  MbwTechnologies = 'MBW Technologies',
  Icom = 'ICOM',
  Qwerty = 'Qwerty',
  Dief = 'Dief',
  BoeningAutomationstechnologie = 'Boening Automationstechnologie',
  KoreanMaritimeUniversity = 'Korean Maritime University',
  ThraneAndThrane = 'Thrane and Thrane',
  Mastervolt = 'Mastervolt',
  FischerPandaGenerators = 'Fischer Panda Generators',
  VictronEnergy = 'Victron Energy',
  RollsRoyceMarine = 'Rolls Royce Marine',
  ElectronicDesign = 'Electronic Design',
  NorthernLights = 'Northern Lights',
  Glendinning = 'Glendinning',
  BG = 'B & G',
  RosePointNavigationSystems = 'Rose Point Navigation Systems',
  JohnsonOutdoorsMarineElectronicsIncGeonav = 'Johnson Outdoors Marine Electronics Inc Geonav',
  Capi2 = 'Capi 2',
  BeyondMeasure = 'Beyond Measure',
  LivorsiMarine = 'Livorsi Marine',
  ComNav = 'ComNav',
  Chetco = 'Chetco',
  FusionElectronics = 'Fusion Electronics',
  StandardHorizon = 'Standard Horizon',
  TrueHeading = 'True Heading',
  EgersundMarineElectronics = 'Egersund Marine Electronics',
  EmTrakMarineElectronics = 'em-trak Marine Electronics',
  TohatsuCoJp = 'Tohatsu Co, JP',
  DigitalYacht = 'Digital Yacht',
  ComarSystemsLimited = 'Comar Systems Limited',
  Cummins = 'Cummins',
  VdoakaContinentalCorporation = 'VDO (aka Continental-Corporation)',
  ParkerHannifinAkaVillageMarineTech = 'Parker Hannifin aka Village Marine Tech',
  AlltekMarineElectronics = 'Alltek Marine Electronics',
  SanGiorgioSEIN = 'SAN GIORGIO S.E.I.N',
  VeethreeElectronicsMarine = 'Veethree Electronics & Marine',
  SiTexMarineElectronics = 'SI-TEX Marine Electronics',
  SeaCrossMarine = 'Sea Cross Marine',
  GmeAkaStandardCommunications = 'GME aka Standard Communications',
  HumminbirdMarineElectronics = 'Humminbird Marine Electronics',
  OceanSat = 'Ocean Sat',
  ChetcoDigitalInstruments = 'Chetco Digital Instruments',
  Watcheye = 'Watcheye',
  LcjCapteurs = 'Lcj Capteurs',
  AttwoodMarine = 'Attwood Marine',
  NaviopSRL = 'Naviop S.R.L.',
  VesperMarine = 'Vesper Marine',
  Marinesoft = 'Marinesoft',
  Simarine = 'Simarine',
  NoLandEngineering = 'NoLand Engineering',
  TransasUsa = 'Transas USA',
  NationalInstrumentsKorea = 'National Instruments Korea',
  NationalMarineElectronicsAssociation = 'National Marine Electronics Association',
  OnwaMarine = 'Onwa Marine',
  Webasto = 'Webasto',
  MarinecraftsouthKorea = 'Marinecraft (South Korea)',
  McMurdoGroupAkaOrolia = 'McMurdo Group aka Orolia',
  Advansea = 'Advansea',
  Kvh = 'KVH',
  SanJoseTechnology = 'San Jose Technology',
  YachtControl = 'Yacht Control',
  SuzukiMotor = 'Suzuki Motor',
  UsCoastGuard = 'US Coast Guard',
  ShipModuleAkaCustomware = 'Ship Module aka Customware',
  AquaticAv = 'Aquatic AV',
  Aventics = 'Aventics',
  Intellian = 'Intellian',
  SamwonIt = 'SamwonIT',
  ArltTecnologies = 'Arlt Tecnologies',
  BavariaYachts = 'Bavaria Yachts',
  DiverseYachtServices = 'Diverse Yacht Services',
  WemaUSADbaKus = 'Wema U.S.A dba KUS',
  ShenzhenJiuzhouHimunication = 'Shenzhen Jiuzhou Himunication',
  Rockford = 'Rockford',
  HarmanInternational = 'Harman International',
  JlAudio = 'JL Audio',
  LarsThrane = 'Lars Thrane',
  Autonnic = 'Autonnic',
  YachtDevices = 'Yacht Devices',
  ReapSystems = 'REAP Systems',
  AemPerformanceElectronics = 'AEM Performance Electronics',
  LxNav = 'LxNav',
  LittelfuseIncformerlyCarlingTechnologies = 'Littelfuse, Inc (formerly Carling Technologies)',
  DaeMyung = 'DaeMyung',
  Woosung = 'Woosung',
  IsottaIfraSrl = 'ISOTTA IFRA srl',
  ClarionUs = 'Clarion US',
  HmiSystems = 'HMI Systems',
  OceanSignal = 'Ocean Signal',
  Seakeeper = 'Seakeeper',
  PolyPlanar = 'Poly Planar',
  FischerPandaDe = 'Fischer Panda DE',
  BroydaIndustries = 'Broyda Industries',
  CanadianAutomotive = 'Canadian Automotive',
  TidesMarine = 'Tides Marine',
  Lumishore = 'Lumishore',
  StillWaterDesignsAndAudio = 'Still Water Designs and Audio',
  BjTechnologiesbeneteau = 'BJ Technologies (Beneteau)',
  GillSensors = 'Gill Sensors',
  BlueWaterDesalination = 'Blue Water Desalination',
  Flir = 'FLIR',
  UndheimSystems = 'Undheim Systems',
  Lewmar = 'Lewmar',
  TeamSurv = 'TeamSurv',
  FellMarine = 'Fell Marine',
  Oceanvolt = 'Oceanvolt',
  Prospec = 'Prospec',
  DataPanel = 'Data Panel',
  L3Technologies = 'L3 Technologies',
  RhodanMarineSystems = 'Rhodan Marine Systems',
  NexfourSolutions = 'Nexfour Solutions',
  AsaElectronics = 'ASA Electronics',
  MarinesCosouthKorea = 'Marines Co (South Korea)',
  NauticOn = 'Nautic-on',
  Sentinel = 'Sentinel',
  JlMarineSystems = 'JL Marine Systems',
  Ecotronix = 'Ecotronix',
  ZontisaMarine = 'Zontisa Marine',
  ExorInternational = 'EXOR International',
  TimbolierIndustries = 'Timbolier Industries',
  TjcMicro = 'TJC Micro',
  CoxPowertrain = 'Cox Powertrain',
  BlueSeas = 'Blue Seas',
  KobeltManufacturing = 'Kobelt Manufacturing',
  BlueOceanIot = 'Blue Ocean IOT',
  XentaSystems = 'Xenta Systems',
  SignalK = 'Signal K',
  Ultraflex = 'Ultraflex',
  LintestSmartBoat = 'Lintest SmartBoat',
  Soundmax = 'Soundmax',
  TeamItaliaMarineonyxMarineAutomationSRL = 'Team Italia Marine (Onyx Marine Automation s.r.l)',
  Entratech = 'Entratech',
  Itc = 'ITC',
  TheMarineGuardian = 'The Marine Guardian',
  Sonic = 'Sonic',
  ProNav = 'ProNav',
  VetusMaxwellInc = 'Vetus Maxwell INC.',
  LithiumPros = 'Lithium Pros',
  Boatrax = 'Boatrax',
  MarolCoLtd = 'Marol Co ltd',
  CalypsoInstruments = 'CALYPSO Instruments',
  SpotZeroWater = 'Spot Zero Water',
  LithionicsBattery = 'Lithionics Battery',
  QuickTeckElectronics = 'Quick-teck Electronics',
  UnidenAmerica = 'Uniden America',
  Nauticoncept = 'Nauticoncept',
  ShadowCasterLedLighting = 'Shadow-Caster LED lighting',
  WetSounds = 'Wet Sounds',
  ETACircuitBreakers = 'E-T-A Circuit Breakers',
  Scheiber = 'Scheiber',
  SmartYachtsInternationalLimited = 'Smart Yachts International Limited',
  Dockmate = 'Dockmate',
  BobsMachine = 'Bobs Machine',
  L3HarrisAsv = 'L3Harris ASV',
  Balmar = 'Balmar',
  Elettromedia = 'Elettromedia',
  Electromaax = 'Electromaax',
  AcrossOceansSystems = 'Across Oceans Systems',
  KiwiYachting = 'Kiwi Yachting',
  BsbArtificialIntelligence = 'BSB Artificial Intelligence',
  OrcaTechnologies = 'Orca Technologies',
  TbsElectronics = 'TBS Electronics',
  TechnotonElectroics = 'Technoton Electroics',
  MgEnergySystems = 'MG Energy Systems',
  SeaMachineRobotics = 'Sea Machine Robotics',
  VistaManufacturing = 'Vista Manufacturing',
  Zipwake = 'Zipwake',
  Sailmon = 'Sailmon',
  AirmoniqProKft = 'Airmoniq Pro Kft',
  SierraMarine = 'Sierra Marine',
  XinuoInformationTechnologyxiamen = 'Xinuo Information Technology (Xiamen)',
  Septentrio = 'Septentrio',
  NkeMarineElectronics = 'NKE Marine Electronics',
  SuperTrackAps = 'SuperTrack Aps',
  HondaElectronics = 'Honda Electronics',
  RaritanEngineering = 'Raritan Engineering',
  IntegratedPowerSolutionsAg = 'Integrated Power Solutions AG',
  InteractiveTechnologies = 'Interactive Technologies',
  LtgTech = 'LTG-Tech',
  EnergySolutionsuk = 'Energy Solutions (UK)',
  WattFuelCell = 'WATT Fuel Cell',
  ProMainer = 'Pro Mainer',
  DragonflyEnergy = 'Dragonfly Energy',
  KodenElectronics = 'Koden Electronics',
  Humphree = 'Humphree',
  HinkleyYachts = 'Hinkley Yachts',
  GlobalMarineManagementGmbHgmm = 'Global Marine Management GmbH (GMM)',
  TriskelMarine = 'Triskel Marine',
  WarwickControlTechnologies = 'Warwick Control Technologies',
  DolphinCharger = 'Dolphin Charger',
  BarnacleSystems = 'Barnacle Systems',
  RadianIoT = 'Radian IoT',
  OceanLedMarine = 'Ocean LED Marine',
  BluNav = 'BluNav',
  OvanantongSaiyangElectronicsCoLtd = 'OVA (Nantong Saiyang Electronics Co., Ltd)',
  RadPropulsion = 'RAD Propulsion',
  ElectricYacht = 'Electric Yacht',
  ElcoMotorYachts = 'Elco Motor Yachts',
  TecnosealFoundrySRL = 'Tecnoseal Foundry S.r.l',
  ProChargingSystems = 'Pro Charging Systems',
  Evex = 'EVEX',
  GobiusSensorTechnology = 'Gobius Sensor Technology',
  ArcoMarine = 'Arco Marine',
  LencoMarine = 'Lenco Marine',
  Naocontrol = 'Naocontrol',
  Revatek = 'Revatek',
  Aeolionics = 'Aeolionics',
  PredictWind = 'PredictWind',
  EgisMobileElectric = 'Egis Mobile Electric',
  StarboardYachtGroup = 'Starboard Yacht Group',
  RoswellMarine = 'Roswell Marine',
  EPropulsionguangdongEPropulsionTechnologyLtd = 'ePropulsion (Guangdong ePropulsion Technology Ltd.)',
  MicroAir = 'Micro-Air',
  VitalBattery = 'Vital Battery',
  RideController = 'Ride Controller',
  TocaroBlue = 'Tocaro Blue',
  VanquishYachts = 'Vanquish Yachts',
  FtTechnologies = 'FT Technologies',
  AlpsAlpine = 'Alps Alpine',
  EForceMarine = 'E-Force Marine',
  CmcMarine = 'CMC Marine',
  NanjingSandemarineInformationTechnology = 'Nanjing Sandemarine Information Technology',
  TeleflexMarineseaStarSolutions = 'Teleflex Marine (SeaStar Solutions)',
  Raymarine = 'Raymarine',
  Navionics = 'Navionics',
  JapanRadio = 'Japan Radio',
  NorthstarTechnologies = 'Northstar Technologies',
  Furuno = 'Furuno',
  Trimble = 'Trimble',
  Simrad = 'Simrad',
  Litton = 'Litton',
  Kvasar = 'Kvasar',
  Mmp = 'MMP',
  VectorCantech = 'Vector Cantech',
  YamahaMarine = 'Yamaha Marine',
  FariaInstruments = 'Faria Instruments',
}

/**
 * @category Enumerations
 */
export const ManufacturerCodeValues: {[key: string]: number} = {
  [ManufacturerCode.ArksEnterprises]: 0x45,
  [ManufacturerCode.FwMurphyenovationControls]: 0x4e,
  [ManufacturerCode.TwinDisc]: 0x50,
  [ManufacturerCode.KohlerPowerSystems]: 0x55,
  [ManufacturerCode.HemisphereGps]: 0x58,
  [ManufacturerCode.Airmar]: 0x87,
  [ManufacturerCode.Maretron]: 0x89,
  [ManufacturerCode.Lowrance]: 0x8c,
  [ManufacturerCode.MercuryMarine]: 0x90,
  [ManufacturerCode.NautibusElectronic]: 0x93,
  [ManufacturerCode.BlueWaterData]: 0x94,
  [ManufacturerCode.Westerbeke]: 0x9a,
  [ManufacturerCode.Isspro]: 0x9d,
  [ManufacturerCode.OffshoreSystemsuk]: 0xa1,
  [ManufacturerCode.Evinrudebrp]: 0xa3,
  [ManufacturerCode.CpacSystems]: 0xa5,
  [ManufacturerCode.XantrexTechnology]: 0xa8,
  [ManufacturerCode.MarlinTechnologies]: 0xa9,
  [ManufacturerCode.YanmarMarine]: 0xac,
  [ManufacturerCode.VolvoPenta]: 0xae,
  [ManufacturerCode.CarlingTechnologiesIncmoritzAerospace]: 0xb0,
  [ManufacturerCode.BeedeInstruments]: 0xb9,
  [ManufacturerCode.FloscanInstrument]: 0xc0,
  [ManufacturerCode.Nobeltec]: 0xc1,
  [ManufacturerCode.MysticValleyCommunications]: 0xc6,
  [ManufacturerCode.Actia]: 0xc7,
  [ManufacturerCode.DisenosYTechnologia]: 0xc9,
  [ManufacturerCode.DigitalSwitchingSystems]: 0xd3,
  [ManufacturerCode.Xintexatena]: 0xd7,
  [ManufacturerCode.EmmiNetwork]: 0xe0,
  [ManufacturerCode.Zf]: 0xe4,
  [ManufacturerCode.Garmin]: 0xe5,
  [ManufacturerCode.YachtMonitoringSolutions]: 0xe9,
  [ManufacturerCode.SailormadeMarineTelemetrytetraTechnology]: 0xeb,
  [ManufacturerCode.Eride]: 0xf3,
  [ManufacturerCode.HondaMotor]: 0x101,
  [ManufacturerCode.Groco]: 0x110,
  [ManufacturerCode.Actisense]: 0x111,
  [ManufacturerCode.AmphenolLtwTechnology]: 0x112,
  [ManufacturerCode.Navico]: 0x113,
  [ManufacturerCode.HamiltonJet]: 0x11b,
  [ManufacturerCode.SeaRecovery]: 0x11d,
  [ManufacturerCode.CoelmoSrlItaly]: 0x11e,
  [ManufacturerCode.BepMarine]: 0x127,
  [ManufacturerCode.EmpirBus]: 0x130,
  [ManufacturerCode.NovAtel]: 0x131,
  [ManufacturerCode.SleipnerMotor]: 0x132,
  [ManufacturerCode.MbwTechnologies]: 0x133,
  [ManufacturerCode.Icom]: 0x13b,
  [ManufacturerCode.Qwerty]: 0x148,
  [ManufacturerCode.Dief]: 0x149,
  [ManufacturerCode.BoeningAutomationstechnologie]: 0x155,
  [ManufacturerCode.KoreanMaritimeUniversity]: 0x159,
  [ManufacturerCode.ThraneAndThrane]: 0x15f,
  [ManufacturerCode.Mastervolt]: 0x163,
  [ManufacturerCode.FischerPandaGenerators]: 0x164,
  [ManufacturerCode.VictronEnergy]: 0x166,
  [ManufacturerCode.RollsRoyceMarine]: 0x172,
  [ManufacturerCode.ElectronicDesign]: 0x175,
  [ManufacturerCode.NorthernLights]: 0x176,
  [ManufacturerCode.Glendinning]: 0x17a,
  [ManufacturerCode.BG]: 0x17d,
  [ManufacturerCode.RosePointNavigationSystems]: 0x180,
  [ManufacturerCode.JohnsonOutdoorsMarineElectronicsIncGeonav]: 0x181,
  [ManufacturerCode.Capi2]: 0x18a,
  [ManufacturerCode.BeyondMeasure]: 0x18c,
  [ManufacturerCode.LivorsiMarine]: 0x190,
  [ManufacturerCode.ComNav]: 0x194,
  [ManufacturerCode.Chetco]: 0x199,
  [ManufacturerCode.FusionElectronics]: 0x1a3,
  [ManufacturerCode.StandardHorizon]: 0x1a5,
  [ManufacturerCode.TrueHeading]: 0x1a6,
  [ManufacturerCode.EgersundMarineElectronics]: 0x1aa,
  [ManufacturerCode.EmTrakMarineElectronics]: 0x1ab,
  [ManufacturerCode.TohatsuCoJp]: 0x1af,
  [ManufacturerCode.DigitalYacht]: 0x1b5,
  [ManufacturerCode.ComarSystemsLimited]: 0x1b6,
  [ManufacturerCode.Cummins]: 0x1b8,
  [ManufacturerCode.VdoakaContinentalCorporation]: 0x1bb,
  [ManufacturerCode.ParkerHannifinAkaVillageMarineTech]: 0x1c3,
  [ManufacturerCode.AlltekMarineElectronics]: 0x1cb,
  [ManufacturerCode.SanGiorgioSEIN]: 0x1cc,
  [ManufacturerCode.VeethreeElectronicsMarine]: 0x1d2,
  [ManufacturerCode.SiTexMarineElectronics]: 0x1d6,
  [ManufacturerCode.SeaCrossMarine]: 0x1d7,
  [ManufacturerCode.GmeAkaStandardCommunications]: 0x1db,
  [ManufacturerCode.HumminbirdMarineElectronics]: 0x1dc,
  [ManufacturerCode.OceanSat]: 0x1de,
  [ManufacturerCode.ChetcoDigitalInstruments]: 0x1e1,
  [ManufacturerCode.Watcheye]: 0x1ed,
  [ManufacturerCode.LcjCapteurs]: 0x1f3,
  [ManufacturerCode.AttwoodMarine]: 0x1f6,
  [ManufacturerCode.NaviopSRL]: 0x1f7,
  [ManufacturerCode.VesperMarine]: 0x1f8,
  [ManufacturerCode.Marinesoft]: 0x1fe,
  [ManufacturerCode.Simarine]: 0x201,
  [ManufacturerCode.NoLandEngineering]: 0x205,
  [ManufacturerCode.TransasUsa]: 0x206,
  [ManufacturerCode.NationalInstrumentsKorea]: 0x211,
  [ManufacturerCode.NationalMarineElectronicsAssociation]: 0x212,
  [ManufacturerCode.OnwaMarine]: 0x214,
  [ManufacturerCode.Webasto]: 0x21c,
  [ManufacturerCode.MarinecraftsouthKorea]: 0x23b,
  [ManufacturerCode.McMurdoGroupAkaOrolia]: 0x23d,
  [ManufacturerCode.Advansea]: 0x242,
  [ManufacturerCode.Kvh]: 0x243,
  [ManufacturerCode.SanJoseTechnology]: 0x244,
  [ManufacturerCode.YachtControl]: 0x247,
  [ManufacturerCode.SuzukiMotor]: 0x24a,
  [ManufacturerCode.UsCoastGuard]: 0x24f,
  [ManufacturerCode.ShipModuleAkaCustomware]: 0x253,
  [ManufacturerCode.AquaticAv]: 0x258,
  [ManufacturerCode.Aventics]: 0x25d,
  [ManufacturerCode.Intellian]: 0x25e,
  [ManufacturerCode.SamwonIt]: 0x264,
  [ManufacturerCode.ArltTecnologies]: 0x266,
  [ManufacturerCode.BavariaYachts]: 0x27d,
  [ManufacturerCode.DiverseYachtServices]: 0x281,
  [ManufacturerCode.WemaUSADbaKus]: 0x284,
  [ManufacturerCode.ShenzhenJiuzhouHimunication]: 0x292,
  [ManufacturerCode.Rockford]: 0x2b0,
  [ManufacturerCode.HarmanInternational]: 0x2bb,
  [ManufacturerCode.JlAudio]: 0x2c0,
  [ManufacturerCode.LarsThrane]: 0x2c4,
  [ManufacturerCode.Autonnic]: 0x2cb,
  [ManufacturerCode.YachtDevices]: 0x2cd,
  [ManufacturerCode.ReapSystems]: 0x2de,
  [ManufacturerCode.AemPerformanceElectronics]: 0x2df,
  [ManufacturerCode.LxNav]: 0x2e3,
  [ManufacturerCode.LittelfuseIncformerlyCarlingTechnologies]: 0x2e5,
  [ManufacturerCode.DaeMyung]: 0x2e7,
  [ManufacturerCode.Woosung]: 0x2e8,
  [ManufacturerCode.IsottaIfraSrl]: 0x2ec,
  [ManufacturerCode.ClarionUs]: 0x305,
  [ManufacturerCode.HmiSystems]: 0x308,
  [ManufacturerCode.OceanSignal]: 0x309,
  [ManufacturerCode.Seakeeper]: 0x30a,
  [ManufacturerCode.PolyPlanar]: 0x30d,
  [ManufacturerCode.FischerPandaDe]: 0x311,
  [ManufacturerCode.BroydaIndustries]: 0x31b,
  [ManufacturerCode.CanadianAutomotive]: 0x31c,
  [ManufacturerCode.TidesMarine]: 0x31d,
  [ManufacturerCode.Lumishore]: 0x31e,
  [ManufacturerCode.StillWaterDesignsAndAudio]: 0x31f,
  [ManufacturerCode.BjTechnologiesbeneteau]: 0x322,
  [ManufacturerCode.GillSensors]: 0x323,
  [ManufacturerCode.BlueWaterDesalination]: 0x32b,
  [ManufacturerCode.Flir]: 0x32f,
  [ManufacturerCode.UndheimSystems]: 0x338,
  [ManufacturerCode.Lewmar]: 0x33a,
  [ManufacturerCode.TeamSurv]: 0x346,
  [ManufacturerCode.FellMarine]: 0x34c,
  [ManufacturerCode.Oceanvolt]: 0x34f,
  [ManufacturerCode.Prospec]: 0x35e,
  [ManufacturerCode.DataPanel]: 0x364,
  [ManufacturerCode.L3Technologies]: 0x37a,
  [ManufacturerCode.RhodanMarineSystems]: 0x37e,
  [ManufacturerCode.NexfourSolutions]: 0x380,
  [ManufacturerCode.AsaElectronics]: 0x389,
  [ManufacturerCode.MarinesCosouthKorea]: 0x38d,
  [ManufacturerCode.NauticOn]: 0x38f,
  [ManufacturerCode.Sentinel]: 0x395,
  [ManufacturerCode.JlMarineSystems]: 0x3a1,
  [ManufacturerCode.Ecotronix]: 0x3a2,
  [ManufacturerCode.ZontisaMarine]: 0x3b0,
  [ManufacturerCode.ExorInternational]: 0x3b7,
  [ManufacturerCode.TimbolierIndustries]: 0x3c2,
  [ManufacturerCode.TjcMicro]: 0x3c3,
  [ManufacturerCode.CoxPowertrain]: 0x3c8,
  [ManufacturerCode.BlueSeas]: 0x3c9,
  [ManufacturerCode.KobeltManufacturing]: 0x3d5,
  [ManufacturerCode.BlueOceanIot]: 0x3e0,
  [ManufacturerCode.XentaSystems]: 0x3e5,
  [ManufacturerCode.SignalK]: 0x3e7,
  [ManufacturerCode.Ultraflex]: 0x3ec,
  [ManufacturerCode.LintestSmartBoat]: 0x3f0,
  [ManufacturerCode.Soundmax]: 0x3f3,
  [ManufacturerCode.TeamItaliaMarineonyxMarineAutomationSRL]: 0x3fc,
  [ManufacturerCode.Entratech]: 0x3fd,
  [ManufacturerCode.Itc]: 0x3fe,
  [ManufacturerCode.TheMarineGuardian]: 0x405,
  [ManufacturerCode.Sonic]: 0x417,
  [ManufacturerCode.ProNav]: 0x41b,
  [ManufacturerCode.VetusMaxwellInc]: 0x41d,
  [ManufacturerCode.LithiumPros]: 0x420,
  [ManufacturerCode.Boatrax]: 0x423,
  [ManufacturerCode.MarolCoLtd]: 0x426,
  [ManufacturerCode.CalypsoInstruments]: 0x429,
  [ManufacturerCode.SpotZeroWater]: 0x42a,
  [ManufacturerCode.LithionicsBattery]: 0x42d,
  [ManufacturerCode.QuickTeckElectronics]: 0x42e,
  [ManufacturerCode.UnidenAmerica]: 0x433,
  [ManufacturerCode.Nauticoncept]: 0x43b,
  [ManufacturerCode.ShadowCasterLedLighting]: 0x43c,
  [ManufacturerCode.WetSounds]: 0x43d,
  [ManufacturerCode.ETACircuitBreakers]: 0x440,
  [ManufacturerCode.Scheiber]: 0x444,
  [ManufacturerCode.SmartYachtsInternationalLimited]: 0x44c,
  [ManufacturerCode.Dockmate]: 0x455,
  [ManufacturerCode.BobsMachine]: 0x45a,
  [ManufacturerCode.L3HarrisAsv]: 0x45e,
  [ManufacturerCode.Balmar]: 0x45f,
  [ManufacturerCode.Elettromedia]: 0x460,
  [ManufacturerCode.Electromaax]: 0x467,
  [ManufacturerCode.AcrossOceansSystems]: 0x474,
  [ManufacturerCode.KiwiYachting]: 0x479,
  [ManufacturerCode.BsbArtificialIntelligence]: 0x47e,
  [ManufacturerCode.OrcaTechnologies]: 0x47f,
  [ManufacturerCode.TbsElectronics]: 0x482,
  [ManufacturerCode.TechnotonElectroics]: 0x486,
  [ManufacturerCode.MgEnergySystems]: 0x488,
  [ManufacturerCode.SeaMachineRobotics]: 0x491,
  [ManufacturerCode.VistaManufacturing]: 0x493,
  [ManufacturerCode.Zipwake]: 0x49f,
  [ManufacturerCode.Sailmon]: 0x4a2,
  [ManufacturerCode.AirmoniqProKft]: 0x4a8,
  [ManufacturerCode.SierraMarine]: 0x4aa,
  [ManufacturerCode.XinuoInformationTechnologyxiamen]: 0x4b0,
  [ManufacturerCode.Septentrio]: 0x4c2,
  [ManufacturerCode.NkeMarineElectronics]: 0x4d1,
  [ManufacturerCode.SuperTrackAps]: 0x4d6,
  [ManufacturerCode.HondaElectronics]: 0x4d7,
  [ManufacturerCode.RaritanEngineering]: 0x4dd,
  [ManufacturerCode.IntegratedPowerSolutionsAg]: 0x4e1,
  [ManufacturerCode.InteractiveTechnologies]: 0x4ec,
  [ManufacturerCode.LtgTech]: 0x503,
  [ManufacturerCode.EnergySolutionsuk]: 0x513,
  [ManufacturerCode.WattFuelCell]: 0x514,
  [ManufacturerCode.ProMainer]: 0x516,
  [ManufacturerCode.DragonflyEnergy]: 0x519,
  [ManufacturerCode.KodenElectronics]: 0x51a,
  [ManufacturerCode.Humphree]: 0x51f,
  [ManufacturerCode.HinkleyYachts]: 0x524,
  [ManufacturerCode.GlobalMarineManagementGmbHgmm]: 0x525,
  [ManufacturerCode.TriskelMarine]: 0x528,
  [ManufacturerCode.WarwickControlTechnologies]: 0x532,
  [ManufacturerCode.DolphinCharger]: 0x533,
  [ManufacturerCode.BarnacleSystems]: 0x539,
  [ManufacturerCode.RadianIoT]: 0x544,
  [ManufacturerCode.OceanLedMarine]: 0x549,
  [ManufacturerCode.BluNav]: 0x54f,
  [ManufacturerCode.OvanantongSaiyangElectronicsCoLtd]: 0x551,
  [ManufacturerCode.RadPropulsion]: 0x558,
  [ManufacturerCode.ElectricYacht]: 0x559,
  [ManufacturerCode.ElcoMotorYachts]: 0x55c,
  [ManufacturerCode.TecnosealFoundrySRL]: 0x568,
  [ManufacturerCode.ProChargingSystems]: 0x569,
  [ManufacturerCode.Evex]: 0x56d,
  [ManufacturerCode.GobiusSensorTechnology]: 0x576,
  [ManufacturerCode.ArcoMarine]: 0x57b,
  [ManufacturerCode.LencoMarine]: 0x580,
  [ManufacturerCode.Naocontrol]: 0x585,
  [ManufacturerCode.Revatek]: 0x589,
  [ManufacturerCode.Aeolionics]: 0x59e,
  [ManufacturerCode.PredictWind]: 0x59f,
  [ManufacturerCode.EgisMobileElectric]: 0x5a0,
  [ManufacturerCode.StarboardYachtGroup]: 0x5a5,
  [ManufacturerCode.RoswellMarine]: 0x5a6,
  [ManufacturerCode.EPropulsionguangdongEPropulsionTechnologyLtd]: 0x5ab,
  [ManufacturerCode.MicroAir]: 0x5ac,
  [ManufacturerCode.VitalBattery]: 0x5ad,
  [ManufacturerCode.RideController]: 0x5b2,
  [ManufacturerCode.TocaroBlue]: 0x5b4,
  [ManufacturerCode.VanquishYachts]: 0x5b5,
  [ManufacturerCode.FtTechnologies]: 0x5bf,
  [ManufacturerCode.AlpsAlpine]: 0x5c6,
  [ManufacturerCode.EForceMarine]: 0x5c9,
  [ManufacturerCode.CmcMarine]: 0x5ca,
  [ManufacturerCode.NanjingSandemarineInformationTechnology]: 0x5cb,
  [ManufacturerCode.TeleflexMarineseaStarSolutions]: 0x73a,
  [ManufacturerCode.Raymarine]: 0x73b,
  [ManufacturerCode.Navionics]: 0x73c,
  [ManufacturerCode.JapanRadio]: 0x73d,
  [ManufacturerCode.NorthstarTechnologies]: 0x73e,
  [ManufacturerCode.Furuno]: 0x73f,
  [ManufacturerCode.Trimble]: 0x740,
  [ManufacturerCode.Simrad]: 0x741,
  [ManufacturerCode.Litton]: 0x742,
  [ManufacturerCode.Kvasar]: 0x743,
  [ManufacturerCode.Mmp]: 0x744,
  [ManufacturerCode.VectorCantech]: 0x745,
  [ManufacturerCode.YamahaMarine]: 0x746,
  [ManufacturerCode.FariaInstruments]: 0x747,
}

/**
 * @category Enumerations
 */
export enum MaretronCommand {
  DeviationCalibration = 'Deviation calibration',
}

/**
 * @category Enumerations
 */
export const MaretronCommandValues: {[key: string]: number} = {
  [MaretronCommand.DeviationCalibration]: 0x50,
}

/**
 * @category Enumerations
 */
export enum MaretronOpcode {
  ReadAll = 'Read All',
  WriteRegister = 'Write Register',
  ReadConfig = 'Read Config',
  WriteConfig = 'Write Config',
  Calibrate = 'Calibrate',
  ClearCalibration = 'Clear Calibration',
  Status = 'Status',
  ClearStatus = 'Clear Status',
  ResetFactoryDefault = 'Reset Factory Default',
  Debug = 'Debug',
  WriteInstance = 'Write Instance',
  ReadInstance = 'Read Instance',
  WriteLabel = 'Write Label',
  ReadLabel = 'Read Label',
  WriteSwitchConfig = 'Write Switch Config',
  ReadSwitchConfig = 'Read Switch Config',
  WriteAlertConfig = 'Write Alert Config',
  ReadAlertConfig = 'Read Alert Config',
  WriteChannelConfig = 'Write Channel Config',
  ReadChannelConfig = 'Read Channel Config',
  ReadChannelConfigExtended = 'Read Channel Config Extended',
  WriteChannelConfigExtended = 'Write Channel Config Extended',
}

/**
 * @category Enumerations
 */
export const MaretronOpcodeValues: {[key: string]: number} = {
  [MaretronOpcode.ReadAll]: 0x0,
  [MaretronOpcode.WriteRegister]: 0x1,
  [MaretronOpcode.ReadConfig]: 0x2,
  [MaretronOpcode.WriteConfig]: 0x3,
  [MaretronOpcode.Calibrate]: 0x4,
  [MaretronOpcode.ClearCalibration]: 0x5,
  [MaretronOpcode.Status]: 0x6,
  [MaretronOpcode.ClearStatus]: 0x7,
  [MaretronOpcode.ResetFactoryDefault]: 0x8,
  [MaretronOpcode.Debug]: 0x9,
  [MaretronOpcode.WriteInstance]: 0x10,
  [MaretronOpcode.ReadInstance]: 0x11,
  [MaretronOpcode.WriteLabel]: 0x20,
  [MaretronOpcode.ReadLabel]: 0x21,
  [MaretronOpcode.WriteSwitchConfig]: 0x30,
  [MaretronOpcode.ReadSwitchConfig]: 0x31,
  [MaretronOpcode.WriteAlertConfig]: 0x40,
  [MaretronOpcode.ReadAlertConfig]: 0x41,
  [MaretronOpcode.WriteChannelConfig]: 0x50,
  [MaretronOpcode.ReadChannelConfig]: 0x51,
  [MaretronOpcode.ReadChannelConfigExtended]: 0x56,
  [MaretronOpcode.WriteChannelConfigExtended]: 0x57,
}

/**
 * @category Enumerations
 */
export enum MaretronProductCode {
  Ssc200 = 'SSC200',
  Sms100 = 'SMS100',
  Mbb200C = 'MBB200C',
  Dst110 = 'DST110',
  Gps100 = 'GPS100',
  Clm100 = 'CLM100',
  Ssc300 = 'SSC300',
  Tla100 = 'TLA100',
  Gps200 = 'GPS200',
  Dst100 = 'DST100',
  Ffm100 = 'FFM100',
  Nbe100 = 'NBE100',
  Raa100 = 'RAA100',
  Rim100 = 'RIM100',
  J2K100 = 'J2K100',
  Alm100 = 'ALM100',
  Ipg100 = 'IPG100',
  Dcm100 = 'DCM100',
  Ems100 = 'EMS100',
  Clmd16 = 'CLMD16',
  Dsm250 = 'DSM250',
  Tmp100 = 'TMP100',
  Dsm150 = 'DSM150',
  Fpm100 = 'FPM100',
  Dcr100 = 'DCR100',
  Sim100 = 'SIM100',
  Acm100 = 'ACM100',
  Mbb300C = 'MBB300C',
  MConnect = 'MConnect',
}

/**
 * @category Enumerations
 */
export const MaretronProductCodeValues: {[key: string]: number} = {
  [MaretronProductCode.Ssc200]: 0x1b2,
  [MaretronProductCode.Sms100]: 0x417,
  [MaretronProductCode.Mbb200C]: 0x47f,
  [MaretronProductCode.Dst110]: 0x5fe,
  [MaretronProductCode.Gps100]: 0x6f0,
  [MaretronProductCode.Clm100]: 0xa2e,
  [MaretronProductCode.Ssc300]: 0xa7e,
  [MaretronProductCode.Tla100]: 0xadd,
  [MaretronProductCode.Gps200]: 0xd2d,
  [MaretronProductCode.Dst100]: 0xdeb,
  [MaretronProductCode.Ffm100]: 0xe35,
  [MaretronProductCode.Nbe100]: 0xf8b,
  [MaretronProductCode.Raa100]: 0xfb2,
  [MaretronProductCode.Rim100]: 0xfee,
  [MaretronProductCode.J2K100]: 0x10df,
  [MaretronProductCode.Alm100]: 0x1fe5,
  [MaretronProductCode.Ipg100]: 0x247b,
  [MaretronProductCode.Dcm100]: 0x249f,
  [MaretronProductCode.Ems100]: 0x2675,
  [MaretronProductCode.Clmd16]: 0x3031,
  [MaretronProductCode.Dsm250]: 0x4032,
  [MaretronProductCode.Tmp100]: 0x4e63,
  [MaretronProductCode.Dsm150]: 0x4f4a,
  [MaretronProductCode.Fpm100]: 0x54c7,
  [MaretronProductCode.Dcr100]: 0x5839,
  [MaretronProductCode.Sim100]: 0x5c33,
  [MaretronProductCode.Acm100]: 0x677d,
  [MaretronProductCode.Mbb300C]: 0x6a6c,
  [MaretronProductCode.MConnect]: 0x6dad,
}

/**
 * @category Enumerations
 */
export enum MaretronSoftwareCode {
  Version1 = 'Version 1',
}

/**
 * @category Enumerations
 */
export const MaretronSoftwareCodeValues: {[key: string]: number} = {
  [MaretronSoftwareCode.Version1]: 0x1,
}

/**
 * @category Enumerations
 */
export enum MaretronStatusDeviation {
  Started = 'Started',
  CompletedSuccessfully = 'Completed successfully',
  FailedToComplete = 'Failed to complete',
  TurningTooFast = 'Turning too fast',
  TurningTooSlow = 'Turning too slow',
  InvalidMovement = 'Invalid movement',
}

/**
 * @category Enumerations
 */
export const MaretronStatusDeviationValues: {[key: string]: number} = {
  [MaretronStatusDeviation.Started]: 0x1,
  [MaretronStatusDeviation.CompletedSuccessfully]: 0x2,
  [MaretronStatusDeviation.FailedToComplete]: 0x3,
  [MaretronStatusDeviation.TurningTooFast]: 0x4,
  [MaretronStatusDeviation.TurningTooSlow]: 0x5,
  [MaretronStatusDeviation.InvalidMovement]: 0x6,
}

/**
 * @category Enumerations
 */
export enum MarkType {
  Collision = 'Collision',
  TurningPoint = 'Turning point',
  Reference = 'Reference',
  Wheelover = 'Wheelover',
  Waypoint = 'Waypoint',
}

/**
 * @category Enumerations
 */
export const MarkTypeValues: {[key: string]: number} = {
  [MarkType.Collision]: 0x0,
  [MarkType.TurningPoint]: 0x1,
  [MarkType.Reference]: 0x2,
  [MarkType.Wheelover]: 0x3,
  [MarkType.Waypoint]: 0x4,
}

/**
 * @category Enumerations
 */
export enum MercuryCommandOpcode {
  HornControl = 'Horn Control',
  MaintenanceResetCommand = 'Maintenance Reset Command',
  MaintenanceResetResponse = 'Maintenance Reset Response',
  CruiseControl = 'Cruise Control',
  GlobalBrightness = 'Global Brightness',
  ActiveTrimCommand = 'Active Trim Command',
  ActiveTrimStatus = 'Active Trim Status',
  AutopilotCommand = 'Autopilot Command',
  ActiveExhaust = 'Active Exhaust',
  OilLevelCheckCommand = 'Oil Level Check Command',
  OilLevelResetResponse = 'Oil Level Reset Response',
}

/**
 * @category Enumerations
 */
export const MercuryCommandOpcodeValues: {[key: string]: number} = {
  [MercuryCommandOpcode.HornControl]: 0x0,
  [MercuryCommandOpcode.MaintenanceResetCommand]: 0x1,
  [MercuryCommandOpcode.MaintenanceResetResponse]: 0x2,
  [MercuryCommandOpcode.CruiseControl]: 0x4,
  [MercuryCommandOpcode.GlobalBrightness]: 0x5,
  [MercuryCommandOpcode.ActiveTrimCommand]: 0x6,
  [MercuryCommandOpcode.ActiveTrimStatus]: 0x7,
  [MercuryCommandOpcode.AutopilotCommand]: 0x8,
  [MercuryCommandOpcode.ActiveExhaust]: 0x9,
  [MercuryCommandOpcode.OilLevelCheckCommand]: 0xc,
  [MercuryCommandOpcode.OilLevelResetResponse]: 0xd,
}

/**
 * @category Enumerations
 */
export enum MobPositionSource {
  PositionEstimatedByTheVessel = 'Position estimated by the vessel',
  PositionReportedByMobEmitter = 'Position reported by MOB emitter',
}

/**
 * @category Enumerations
 */
export const MobPositionSourceValues: {[key: string]: number} = {
  [MobPositionSource.PositionEstimatedByTheVessel]: 0x0,
  [MobPositionSource.PositionReportedByMobEmitter]: 0x1,
}

/**
 * @category Enumerations
 */
export enum MobStatus {
  MobEmitterActivated = 'MOB Emitter Activated',
  ManualOnBoardMobButtonActivation = 'Manual on-board MOB Button Activation',
  TestMode = 'Test mode',
  MobNotActive = 'MOB Not Active',
}

/**
 * @category Enumerations
 */
export const MobStatusValues: {[key: string]: number} = {
  [MobStatus.MobEmitterActivated]: 0x0,
  [MobStatus.ManualOnBoardMobButtonActivation]: 0x1,
  [MobStatus.TestMode]: 0x2,
  [MobStatus.MobNotActive]: 0x3,
}

/**
 * @category Enumerations
 */
export enum NavicoDataType {
  Altitude = 'Altitude',
  Position = 'Position',
  PositionError = 'Position Error',
  Hdop = 'HDOP',
  Vdop = 'VDOP',
  Tdop = 'TDOP',
  Pdop = 'PDOP',
  GeoidalSeparation = 'Geoidal Separation',
  Cog = 'COG',
  PositionQuality = 'Position Quality',
  PositionIntegrity = 'Position Integrity',
  SatsInView = 'Sats In View',
  WaasStatus = 'Waas Status',
  Bearing = 'Bearing',
  Course = 'Course',
  CdiGraphic = 'CDI Graphic',
  CourseToSteer = 'Course To Steer',
  CrossTrack = 'Cross Track',
  VelocityMadeGood = 'Velocity Made Good',
  Destination = 'Destination',
  DistanceToTurn = 'Distance To Turn',
  DistanceToDest = 'Distance To Dest',
  TimeToTurn = 'Time To Turn',
  TimeToDest = 'Time To Dest',
  EtaAtTurn = 'ETA At Turn',
  EtaAtDest = 'ETA At Dest',
  TotalDistance = 'Total Distance',
  SteerArrow = 'Steer Arrow',
  Odometer = 'Odometer',
  TripDistance = 'Trip Distance',
  TripTime = 'Trip Time',
  Date = 'Date',
  Time = 'Time',
  UtcDate = 'UTC Date',
  UtcTime = 'UTC Time',
  LocalTimeOffset = 'Local Time Offset',
  Heading = 'Heading',
  WasVoltage = 'Was Voltage',
  CurrentSet = 'Current Set',
  CurrentDrift = 'Current Drift',
  SpeedSog = 'Speed SOG',
  SpeedWater = 'Speed Water',
  SpeedPitot = 'Speed Pitot',
  SpeedTripAvg = 'Speed Trip Avg',
  SpeedTripMax = 'Speed Trip Max',
  SpeedWindApp = 'Speed Wind App',
  SpeedWindTrue = 'Speed Wind True',
  TempWater = 'Temp Water',
  TempOutside = 'Temp Outside',
  TempInside = 'Temp Inside',
  TempEngineRoom = 'Temp Engine Room',
  TempMainCabin = 'Temp Main Cabin',
  TempLiveWell = 'Temp Live Well',
  TempBaitWell = 'Temp Bait Well',
  TempRefrigeration = 'Temp Refrigeration',
  TempHeatingSystem = 'Temp Heating System',
  TempDewPoint = 'Temp Dew Point',
  TempWindChillApp = 'Temp Wind Chill App',
  TempWindChillTheoretic = 'Temp Wind Chill Theoretic',
  TempHeatIndex = 'Temp Heat Index',
  TempFreezer = 'Temp Freezer',
  EngineTemp = 'Engine Temp',
  EngineAirTemp = 'Engine Air Temp',
  EngineOilTemp = 'Engine Oil Temp',
  TempBattery = 'Temp Battery',
  PressureAtmospheric = 'Pressure Atmospheric',
  EngineBoostPres = 'Engine Boost Pres',
  EngineOilPres = 'Engine Oil Pres',
  EngineWaterPres = 'Engine Water Pres',
  EngineFuelPres = 'Engine Fuel Pres',
  EngineManifoldPres = 'Engine Manifold Pres',
  PressureSteam = 'Pressure Steam',
  PressureComprAir = 'Pressure Compr Air',
  PressureHydraulic = 'Pressure Hydraulic',
  WasGenericPressureLo = 'Was Generic Pressure Lo',
  WasGenericPressureHi = 'Was Generic Pressure Hi',
  Depth = 'Depth',
  WaterDistance = 'Water Distance',
  EngineRpm = 'Engine RPM',
  EngineTrim = 'Engine Trim',
  EngineAlternatorPotential = 'Engine Alternator Potential',
  EngineFuelRate = 'Engine Fuel Rate',
  EnginePercentLoad = 'Engine Percent Load',
  EnginePercentTorque = 'Engine Percent Torque',
  WasSuzukiAlarmLevLo = 'Was Suzuki Alarm Lev Lo',
  WasSuzukiAlarmLevHigh = 'Was Suzuki Alarm Lev High',
  TankFuelLevel = 'Tank Fuel Level',
  FluidLevelFreshWater = 'Fluid Level Fresh Water',
  FluidLevelGrayWater = 'Fluid Level Gray Water',
  FluidLevelLiveWell = 'Fluid Level Live Well',
  FluidLevelOil = 'Fluid Level Oil',
  FluidLevelBlackWater = 'Fluid Level Black Water',
  TankFuelRemaining = 'Tank Fuel Remaining',
  FluidVolumeFreshWater = 'Fluid Volume Fresh Water',
  FluidVolumeGrayWater = 'Fluid Volume Gray Water',
  FluidVolumeLiveWell = 'Fluid Volume Live Well',
  FluidVolumeOil = 'Fluid Volume Oil',
  FluidVolumeBlackWater = 'Fluid Volume Black Water',
  GenFluidVolume = 'Gen Fluid Volume',
  WasTankFuelLevelLo = 'Was Tank Fuel Level Lo',
  WasFluidLevelLoFreshWater = 'Was Fluid Level Lo Fresh Water',
  WasFluidLevelLoGrayWater = 'Was Fluid Level Lo Gray Water',
  WasFluidLevelLoLiveWell = 'Was Fluid Level Lo Live Well',
  WasFluidLevelLoOil = 'Was Fluid Level Lo Oil',
  GenTankCapacity = 'Gen Tank Capacity',
  TankFuelCapacity = 'Tank Fuel Capacity',
  TankCapacityFreshWater = 'Tank Capacity Fresh Water',
  TankCapacityGrayWater = 'Tank Capacity Gray Water',
  TankCapacityLiveWell = 'Tank Capacity Live Well',
  TankCapacityOil = 'Tank Capacity Oil',
  TankCapacityBlackWater = 'Tank Capacity Black Water',
  WasTankFuelUsed = 'Was Tank Fuel Used',
  EngineFuelUsed = 'Engine Fuel Used',
  EngineFuelUsedTrip = 'Engine Fuel Used Trip',
  EngineFuelUsedSeasonal = 'Engine Fuel Used Seasonal',
  EngineFuelKValue = 'Engine Fuel K Value',
  BatteryPotential = 'Battery Potential',
  BatteryCurrent = 'Battery Current',
  TrimTab = 'Trim Tab',
  WasTrimStbdTab = 'Was Trim Stbd Tab',
  RateOfTurn = 'Rate Of Turn',
  AttitudeYaw = 'Attitude Yaw',
  AttitudePitch = 'Attitude Pitch',
  AttitudeRoll = 'Attitude Roll',
  MagneticVariation = 'Magnetic Variation',
  Deviation = 'Deviation',
  FuelEconomyWtr = 'Fuel Economy Wtr',
  FuelEconomyGps = 'Fuel Economy GPS',
  WasFuelRemaining = 'Was Fuel Remaining',
  WasFuelRangeWtr = 'Was Fuel Range Wtr',
  WasFuelRangeGps = 'Was Fuel Range GPS',
  EngineHoursUsed = 'Engine Hours Used',
  EngineType = 'Engine Type',
  VesselFuelRate = 'Vessel Fuel Rate',
  VesselFuelEconomyWtr = 'Vessel Fuel Economy Wtr',
  VesselFuelEconomyGps = 'Vessel Fuel Economy GPS',
  VesselFuelRemaining = 'Vessel Fuel Remaining',
  VesselFuelRangeWtr = 'Vessel Fuel Range Wtr',
  VesselFuelRangeGps = 'Vessel Fuel Range GPS',
  WindAppAngle = 'Wind App Angle',
  WindTrueAngle = 'Wind True Angle',
  WindTrueDirection = 'Wind True Direction',
  HumidityInside = 'Humidity Inside',
  HumidityOutside = 'Humidity Outside',
  SetHumidity = 'Set Humidity',
  RudderAngle = 'Rudder Angle',
  TransGear = 'Trans Gear',
  TransOilPressure = 'Trans Oil Pressure',
  TransOilTemp = 'Trans Oil Temp',
  CmdRudderAngle = 'Cmd Rudder Angle',
  RudderLimit = 'Rudder Limit',
  OffHeadingLim = 'Off Heading Lim',
  RadiusOfTurnOrder = 'Radius Of Turn Order',
  RateOfTurnOrder = 'Rate Of Turn Order',
  OffTrackLim = 'Off Track Lim',
  LoggingTimeRemaining = 'Logging Time Remaining',
  PositionFixType = 'Position Fix Type',
  EngineDiscreteStatus = 'Engine Discrete Status',
  TransmissionDiscreteStatus = 'Transmission Discrete Status',
  GpsBestOfFourSnr = 'GPS Best Of Four Snr',
  GenFluidLevel = 'Gen Fluid Level',
  GenPressure = 'Gen Pressure',
  GenTemperature = 'Gen Temperature',
  InternalVoltage = 'Internal Voltage',
  DepthOffset = 'Depth Offset',
  StructureDepth = 'Structure Depth',
  LoranPosition = 'Loran Position',
  VesselStatus = 'Vessel Status',
  BatteryDcType = 'Battery DC Type',
  BatteryStateOfCharge = 'Battery State Of Charge',
  BatteryStateOfHealth = 'Battery State Of Health',
  BatteryTimeRemaining = 'Battery Time Remaining',
  BatteryRippleVoltage = 'Battery Ripple Voltage',
  Ac1Acceptability = 'Ac1 Acceptability',
  Ac2Acceptability = 'Ac2 Acceptability',
  Ac3Acceptability = 'Ac3 Acceptability',
  Ac1Voltage = 'Ac1 Voltage',
  Ac2Voltage = 'Ac2 Voltage',
  Ac3Voltage = 'Ac3 Voltage',
  Ac1Current = 'Ac1 Current',
  Ac2Current = 'Ac2 Current',
  Ac3Current = 'Ac3 Current',
  Ac1Frequency = 'Ac1 Frequency',
  Ac2Frequency = 'Ac2 Frequency',
  Ac3Frequency = 'Ac3 Frequency',
  Ac1BreakerSize = 'Ac1 Breaker Size',
  Ac2BreakerSize = 'Ac2 Breaker Size',
  Ac3BreakerSize = 'Ac3 Breaker Size',
  Ac1RealPower = 'Ac1 Real Power',
  Ac2RealPower = 'Ac2 Real Power',
  Ac3RealPower = 'Ac3 Real Power',
  Ac1ReactivePower = 'Ac1 Reactive Power',
  Ac2ReactivePower = 'Ac2 Reactive Power',
  Ac3ReactivePower = 'Ac3 Reactive Power',
  Ac1PowerFactor = 'Ac1 Power Factor',
  Ac2PowerFactor = 'Ac2 Power Factor',
  Ac3PowerFactor = 'Ac3 Power Factor',
  SwitchState = 'Switch State',
  SwitchCurrent = 'Switch Current',
  SwitchFault = 'Switch Fault',
  SwitchDimLevel = 'Switch Dim Level',
  PreviousCmdHeading = 'Previous Cmd Heading',
  CmdWindAngle = 'Cmd Wind Angle',
  WasCmdBearingOffset = 'Was Cmd Bearing Offset',
  CmdBearing = 'Cmd Bearing',
  CmdDepthContour = 'Cmd Depth Contour',
  CmdCourseChange = 'Cmd Course Change',
  PilotDrift = 'Pilot Drift',
  PilotDistanceToTurn = 'Pilot Distance To Turn',
  PilotTimeToTurn = 'Pilot Time To Turn',
  PilotReferencePosition = 'Pilot Reference Position',
  DcStatus = 'DC Status',
  Ac1Status = 'Ac1 Status',
  WasSwitchVoltage = 'Was Switch Voltage',
  BatteryCapacityRemaining = 'Battery Capacity Remaining',
  PilotHeadingReference = 'Pilot Heading Reference',
  BAndGLinear1 = 'B And G Linear 1',
  BAndGLinear2 = 'B And G Linear 2',
  BAndGLinear3 = 'B And G Linear 3',
  BoomPosition = 'Boom Position',
  SailingCourse = 'Sailing Course',
  DaggerboardPosition = 'Daggerboard Position',
  BAndGLinear4 = 'B And G Linear 4',
  HeadingOnNextTack = 'Heading On Next Tack',
  KeelAngle = 'Keel Angle',
  Leeway = 'Leeway',
  MastAngle = 'Mast Angle',
  TargetTrueWindAngle = 'Target True Wind Angle',
  KeelTrimTab = 'Keel Trim Tab',
  RaceTimer = 'Race Timer',
  CanardAngle = 'Canard Angle',
  NextLegApparentWindAngle = 'Next Leg Apparent Wind Angle',
  NextLegApparentWindSpeed = 'Next Leg Apparent Wind Speed',
  TargetBoatSpeed = 'Target Boat Speed',
  VmgToWind = 'VMG To Wind',
  TimeToLaylines = 'Time To Laylines',
  DistanceToLaylines = 'Distance To Laylines',
  AftDepth = 'Aft Depth',
  Forestay = 'Forestay',
  PolarSpeed = 'Polar Speed',
  PolarPerformance = 'Polar Performance',
  TackingPerformance = 'Tacking Performance',
  WindAngleToMast = 'Wind Angle To Mast',
  CanBusVoltage = 'Can Bus Voltage',
  InternalTemperature = 'Internal Temperature',
  EngageCurrent = 'Engage Current',
  UrefVoltage = 'Uref Voltage',
  SupplyVoltage = 'Supply Voltage',
  DestinationPosition = 'Destination Position',
  CompassHeadingReference = 'Compass Heading Reference',
  CmdRudderDirection = 'Cmd Rudder Direction',
  WasEngineSyncState = 'Was Engine Sync State',
  EngineGeneralMaintenance = 'Engine General Maintenance',
  EnginePercentThrottle = 'Engine Percent Throttle',
  EngineSteeringAngle = 'Engine Steering Angle',
  EngineBreakInReqd = 'Engine Break In Reqd',
  GpsAll = 'GPS All',
  EngineBreakInAccum = 'Engine Break In Accum',
  EngineTrimStatus = 'Engine Trim Status',
  PilotPresent = 'Pilot Present',
  Ac1OutWaveform = 'Ac1 Out Waveform',
  Ac2OutWaveform = 'Ac2 Out Waveform',
  Ac3OutWaveform = 'Ac3 Out Waveform',
  Ac1OutVoltage = 'Ac1 Out Voltage',
  Ac2OutVoltage = 'Ac2 Out Voltage',
  Ac3OutVoltage = 'Ac3 Out Voltage',
  Ac1OutCurrent = 'Ac1 Out Current',
  Ac2OutCurrent = 'Ac2 Out Current',
  Ac3OutCurrent = 'Ac3 Out Current',
  Ac1OutFrequency = 'Ac1 Out Frequency',
  Ac2OutFrequency = 'Ac2 Out Frequency',
  Ac3OutFrequency = 'Ac3 Out Frequency',
  Ac1OutBreakerSize = 'Ac1 Out Breaker Size',
  Ac2OutBreakerSize = 'Ac2 Out Breaker Size',
  Ac3OutBreakerSize = 'Ac3 Out Breaker Size',
  Ac1OutRealPower = 'Ac1 Out Real Power',
  Ac2OutRealPower = 'Ac2 Out Real Power',
  Ac3OutRealPower = 'Ac3 Out Real Power',
  Ac1OutReactivePower = 'Ac1 Out Reactive Power',
  Ac2OutReactivePower = 'Ac2 Out Reactive Power',
  Ac3OutReactivePower = 'Ac3 Out Reactive Power',
  Ac1OutPowerFactor = 'Ac1 Out Power Factor',
  Ac2OutPowerFactor = 'Ac2 Out Power Factor',
  Ac3OutPowerFactor = 'Ac3 Out Power Factor',
  Ac2Status = 'Ac2 Status',
  Ac3Status = 'Ac3 Status',
  Ac1OutStatus = 'Ac1 Out Status',
  Ac2OutStatus = 'Ac2 Out Status',
  Ac3OutStatus = 'Ac3 Out Status',
  SwitchManualOverride = 'Switch Manual Override',
  SwitchReversePolarity = 'Switch Reverse Polarity',
  SwitchAcsourceAvailable = 'Switch Acsource Available',
  SwitchAccontactorSystemsonstate = 'Switch Accontactor Systemsonstate',
  ChargerBatteryInstance = 'Charger Battery Instance',
  ChargerOperatingState = 'Charger Operating State',
  ChargerMode = 'Charger Mode',
  ChargerEnabled = 'Charger Enabled',
  ChargerEqualizationPending = 'Charger Equalization Pending',
  ChargerEqualizationTimeRemaining = 'Charger Equalization Time Remaining',
  InverterAcInstance = 'Inverter AC Instance',
  InverterDcInstance = 'Inverter DC Instance',
  InverterOperatingState = 'Inverter Operating State',
  InverterEnabled = 'Inverter Enabled',
  ThrusterPower = 'Thruster Power',
  FuelToTurn = 'Fuel To Turn',
  EngineMil = 'Engine Mil',
  EngineWarningFlags = 'Engine Warning Flags',
  SpeedStw = 'Speed Stw',
  EnginePerformanceSog = 'Engine Performance SOG',
  EnginePerformanceStw = 'Engine Performance Stw',
  EngineControlFlags = 'Engine Control Flags',
  EngineTrollRpmSetpoint = 'Engine Troll RPM Setpoint',
  ActiveHelm = 'Active Helm',
  CruiseRpmSetpoint = 'Cruise RPM Setpoint',
  CruiseSpeedSetpoint = 'Cruise Speed Setpoint',
  CmdPatternDir = 'Cmd Pattern Dir',
  SmartContextual = 'Smart Contextual',
  SailingTimeToWaypoint = 'Sailing Time To Waypoint',
  SailingDistanceToWaypoint = 'Sailing Distance To Waypoint',
  SailingEta = 'Sailing ETA',
  GeneratorTemp = 'Generator Temp',
  GeneratorOilTemp = 'Generator Oil Temp',
  GeneratorOilPres = 'Generator Oil Pres',
  GeneratorWaterPres = 'Generator Water Pres',
  GeneratorFuelPres = 'Generator Fuel Pres',
  GeneratorFuelRate = 'Generator Fuel Rate',
  GeneratorHoursUsed = 'Generator Hours Used',
  GeneratorDiscreteStatus = 'Generator Discrete Status',
  GeneratorPercentLoad = 'Generator Percent Load',
  GeneratorPercentTorque = 'Generator Percent Torque',
  GeneratorBatteryVoltage = 'Generator Battery Voltage',
  GeneratorAverageVoltage = 'Generator Average Voltage',
  GeneratorAverageFrequency = 'Generator Average Frequency',
  GeneratorAverageCurrent = 'Generator Average Current',
  PilotMode = 'Pilot Mode',
  PilotResponseLevel = 'Pilot Response Level',
  CruiseSmarttowOvershoot = 'Cruise Smarttow Overshoot',
  PilotCmdHeading = 'Pilot Cmd Heading',
  MobDrPosition = 'MOB Dr Position',
  MobDrRange = 'MOB Dr Range',
  MobDrBearing = 'MOB Dr Bearing',
  BowPosition = 'Bow Position',
  StartLineBearing = 'Start Line Bearing',
  StartLineBias = 'Start Line Bias',
  DistanceToStartLine = 'Distance To Start Line',
  DistanceToStartLinePortEnd = 'Distance To Start Line Port End',
  DistanceToStartLineStbdEnd = 'Distance To Start Line Stbd End',
  StartLinePortPosition = 'Start Line Port Position',
  StartLineStbdPosition = 'Start Line Stbd Position',
  StartLineBoatLengthAdvantage = 'Start Line Boat Length Advantage',
  DistanceToStartLineBoatLengths = 'Distance To Start Line Boat Lengths',
  Backstay = 'Backstay',
  BoomAngle = 'Boom Angle',
  BoomVang = 'Boom Vang',
  ChainLength = 'Chain Length',
  Cunningham = 'Cunningham',
  InnerForestayLoad = 'Inner Forestay Load',
  InnerForestayHalyardLoad = 'Inner Forestay Halyard Load',
  JibFurl = 'Jib Furl',
  JibHalyardLoad = 'Jib Halyard Load',
  OptimumWindAngle = 'Optimum Wind Angle',
  OuthaulLoad = 'Outhaul Load',
  PitchRate = 'Pitch Rate',
  PlowAngle = 'Plow Angle',
  RollRate = 'Roll Rate',
  VmgPerformance = 'VMG Performance',
  BAndGLinear5 = 'B And G Linear 5',
  BAndGLinear6 = 'B And G Linear 6',
  BAndGLinear7 = 'B And G Linear 7',
  BAndGLinear8 = 'B And G Linear 8',
  BAndGLinear9 = 'B And G Linear 9',
  BAndGLinear10 = 'B And G Linear 10',
  BAndGLinear11 = 'B And G Linear 11',
  BAndGLinear12 = 'B And G Linear 12',
  BAndGLinear13 = 'B And G Linear 13',
  BAndGLinear14 = 'B And G Linear 14',
  BAndGLinear15 = 'B And G Linear 15',
  BAndGLinear16 = 'B And G Linear 16',
  KeelDraught = 'Keel Draught',
  PoolTemperature = 'Pool Temperature',
  JacuzziTemperature = 'Jacuzzi Temperature',
  TripDrBearing = 'Trip Dr Bearing',
  TripDrDistance = 'Trip Dr Distance',
  CodeZeroLoad = 'Code Zero Load',
  BAndGMobPosition = 'B And G MOB Position',
  DistanceBehindStartLine = 'Distance Behind Start Line',
  DistanceBehindStartLineBoatLengths = 'Distance Behind Start Line Boat Lengths',
  BiasAdvantage = 'Bias Advantage',
  OppositeTackCog = 'Opposite Tack COG',
  OppositeTackTargetHeading = 'Opposite Tack Target Heading',
  MastRake = 'Mast Rake',
  NextLegBearing = 'Next Leg Bearing',
  NextLegTargetSpeed = 'Next Leg Target Speed',
  GroundWindDirection = 'Ground Wind Direction',
  GroundWindSpeed = 'Ground Wind Speed',
  MastCantAngle = 'Mast Cant Angle',
  RudderToeIn = 'Rudder Toe In',
  DaggerboardPort = 'Daggerboard Port',
  DaggerboardStarboard = 'Daggerboard Starboard',
  BAndGRemote0 = 'B And G Remote 0',
  BAndGRemote1 = 'B And G Remote 1',
  BAndGRemote2 = 'B And G Remote 2',
  BAndGRemote3 = 'B And G Remote 3',
  BAndGRemote4 = 'B And G Remote 4',
  BAndGRemote5 = 'B And G Remote 5',
  BAndGRemote6 = 'B And G Remote 6',
  BAndGRemote7 = 'B And G Remote 7',
  BAndGRemote8 = 'B And G Remote 8',
  BAndGRemote9 = 'B And G Remote 9',
  ForwardDepth = 'Forward Depth',
  CriticalRange = 'Critical Range',
  CautionRange = 'Caution Range',
  MaxRange = 'Max Range',
  GeneratorAlternatorVoltage = 'Generator Alternator Voltage',
  TrollingPropRate = 'Trolling Prop Rate',
  TrollingCruiseControlSpeed = 'Trolling Cruise Control Speed',
  VesselFuelUsed = 'Vessel Fuel Used',
  SuzukiEngineBaroPressure = 'Suzuki Engine Baro Pressure',
  SuzukiCylinderTemperature = 'Suzuki Cylinder Temperature',
  SuzukiIntakeAirTemperature = 'Suzuki Intake Air Temperature',
  SuzukiIgnitionTiming = 'Suzuki Ignition Timing',
  SuzukiFuelInjectorPulseWidth = 'Suzuki Fuel Injector Pulse Width',
  WasSuzukiInjectedFuelAmount = 'Was Suzuki Injected Fuel Amount',
  SuzukiIacValveDuty = 'Suzuki Iac Valve Duty',
  SuzukiDiscreteStatus1 = 'Suzuki Discrete Status 1',
  SuzukiDiscreteStatus2 = 'Suzuki Discrete Status 2',
  SuzukiDiscreteStatus3 = 'Suzuki Discrete Status 3',
  SuzukiDiscreteStatus4 = 'Suzuki Discrete Status 4',
  FuelEconomyPit = 'Fuel Economy Pit',
  VesselFuelEconomyPit = 'Vessel Fuel Economy Pit',
  VesselFuelRangePit = 'Vessel Fuel Range Pit',
  Waypoint = 'Waypoint',
  AverageWindDirection = 'Average Wind Direction',
  WindPhase = 'Wind Phase',
  WindLift = 'Wind Lift',
  FuelRangeSeasonalAverage = 'Fuel Range Seasonal Average',
  FuelRangeInstantaneous = 'Fuel Range Instantaneous',
  VesselFuelEconomy = 'Vessel Fuel Economy',
  AverageFuelEconomySeasonal = 'Average Fuel Economy Seasonal',
  AverageFuelEconomyTrip = 'Average Fuel Economy Trip',
  BestFuelEconomySeasonal = 'Best Fuel Economy Seasonal',
  BestFuelEconomyTrip = 'Best Fuel Economy Trip',
  VesselFuelLevel = 'Vessel Fuel Level',
  VesselFuelUsedTrip = 'Vessel Fuel Used Trip',
  BAndGLinear17 = 'B And G Linear 17',
  BAndGLinear18 = 'B And G Linear 18',
  BAndGLinear19 = 'B And G Linear 19',
  BAndGLinear20 = 'B And G Linear 20',
  BAndGLinear21 = 'B And G Linear 21',
  BAndGLinear22 = 'B And G Linear 22',
  BAndGLinear23 = 'B And G Linear 23',
  BAndGLinear24 = 'B And G Linear 24',
  BAndGLinear25 = 'B And G Linear 25',
  BAndGLinear26 = 'B And G Linear 26',
  BAndGLinear27 = 'B And G Linear 27',
  BAndGLinear28 = 'B And G Linear 28',
  BAndGLinear29 = 'B And G Linear 29',
  BAndGLinear30 = 'B And G Linear 30',
  BAndGLinear31 = 'B And G Linear 31',
  BAndGLinear32 = 'B And G Linear 32',
  OriginWayPointNumber = 'Origin Way Point Number',
  DestWayPointNumber = 'Dest Way Point Number',
  ArrivalNotification = 'Arrival Notification',
  ArrivalCircleNotification = 'Arrival Circle Notification',
  WasNavTerminated = 'Was Nav Terminated',
  Bobstay = 'Bobstay',
  J1 = 'J1',
  J2 = 'J2',
  J3 = 'J3',
  MastBase = 'Mast Base',
  Mainsheet = 'Mainsheet',
  D0Port = 'D0 Port',
  D0Starboard = 'D0 Starboard',
  RunnerPort = 'Runner Port',
  RunnerStarboard = 'Runner Starboard',
  FoilPort = 'Foil Port',
  FoilStarboard = 'Foil Starboard',
  SailtackPort = 'Sailtack Port',
  SailtackStarboard = 'Sailtack Starboard',
  DeflectPort = 'Deflect Port',
  DeflectStarboard = 'Deflect Starboard',
  RudderLoadPort = 'Rudder Load Port',
  RudderLoadStarboard = 'Rudder Load Starboard',
  D1Port = 'D1 Port',
  D1Starboard = 'D1 Starboard',
  V0Port = 'V0 Port',
  V0Starboard = 'V0 Starboard',
  V1Port = 'V1 Port',
  V1Starboard = 'V1 Starboard',
  GnssSystem = 'Gnss System',
  SvCount = 'Sv Count',
  GnssOpMode = 'Gnss Op Mode',
  DgnssMode = 'Dgnss Mode',
  SuzukiFuelPumpDuty = 'Suzuki Fuel Pump Duty',
  SpeedLogWaterLongitudinal = 'Speed Log Water Longitudinal',
  SpeedLogWaterTransverse = 'Speed Log Water Transverse',
  SpeedLogWaterResultant = 'Speed Log Water Resultant',
  SpeedLogWaterAngle = 'Speed Log Water Angle',
  SpeedLogGroundLongitudinal = 'Speed Log Ground Longitudinal',
  SpeedLogGroundTransverse = 'Speed Log Ground Transverse',
  SpeedLogGroundResultant = 'Speed Log Ground Resultant',
  SpeedLogGroundAngle = 'Speed Log Ground Angle',
  SpeedLogSternWaterTransverse = 'Speed Log Stern Water Transverse',
  SpeedLogSternGroundTransverse = 'Speed Log Stern Ground Transverse',
  PositionDatum = 'Position Datum',
  SpeedBoat = 'Speed Boat',
  WasEngineFuelUsedMercury = 'Was Engine Fuel Used Mercury',
  Heave = 'Heave',
  SpeedTripMaxRpm = 'Speed Trip Max RPM',
  HondaEngineStatusParams = 'Honda Engine Status Params',
  PilotFeatures = 'Pilot Features',
  PilotSetpointHeading = 'Pilot Setpoint Heading',
  IdleSpeedControlMode = 'Idle Speed Control Mode',
  IdleSpeedControlValue = 'Idle Speed Control Value',
  TrollingMode = 'Trolling Mode',
  ImmobilizerLockStatus = 'Immobilizer Lock Status',
  EngineDiscreteParams1 = 'Engine Discrete Params 1',
  EngineDiscreteParams2 = 'Engine Discrete Params 2',
  EngineDiscreteParams3 = 'Engine Discrete Params 3',
  EngineDiscreteParams4 = 'Engine Discrete Params 4',
  EngineDiscreteParams5 = 'Engine Discrete Params 5',
  EngineDiscreteParams6 = 'Engine Discrete Params 6',
  IdleSpeedLimitLow = 'Idle Speed Limit Low',
  IdleSpeedLimitHigh = 'Idle Speed Limit High',
  WasTrollingVariableRpmInfo = 'Was Trolling Variable RPM Info',
  IdleSpeedControlTargetRev = 'Idle Speed Control Target Rev',
  IdleControl = 'Idle Control',
  IdleFeedback = 'Idle Feedback',
  ImmediatelyAfterStartingControl = 'Immediately After Starting Control',
  GatewayParams = 'Gateway Params',
  GatewayProtocol = 'Gateway Protocol',
  EngineWallTemp = 'Engine Wall Temp',
  SubstituteBatteryVoltage = 'Substitute Battery Voltage',
  YamahaEngineM6DiagCode = 'Yamaha Engine M6 Diag Code',
  WirelessSensorBatteryStatus = 'Wireless Sensor Battery Status',
  WirelessSensorBatteryChargeStatus = 'Wireless Sensor Battery Charge Status',
  WirelessSensorBatteryStatusVoltage = 'Wireless Sensor Battery Status Voltage',
  WirelessSensorBatteryChargeStatusCurrent = 'Wireless Sensor Battery Charge Status Current',
  FluidTypeMode = 'Fluid Type Mode',
  Datetime = 'Datetime',
  ReacherLoad = 'Reacher Load',
  BladeLoad = 'Blade Load',
  StaysailLoad = 'Staysail Load',
  TackLoad = 'Tack Load',
  J4Load = 'J4 Load',
  SolentLoad = 'Solent Load',
  TackPortLoad = 'Tack Port Load',
  TackStarboardLoad = 'Tack Starboard Load',
  DeflectUpperLoad = 'Deflect Upper Load',
  DeflectLowerLoad = 'Deflect Lower Load',
  WinchPortLoad = 'Winch Port Load',
  WinchStarboardLoad = 'Winch Starboard Load',
  SpinHalyardPortLoad = 'Spin Halyard Port Load',
  SpinHalyardStarboardLoad = 'Spin Halyard Starboard Load',
  MainHalyward = 'Main Halyward',
  Load1Load = 'Load 1 Load',
  Load2Load = 'Load 2 Load',
  MastBase2Load = 'Mast Base 2 Load',
  PilotActivePerfMode = 'Pilot Active Perf Mode',
  PilotGust = 'Pilot Gust',
  PilotTwsResponse = 'Pilot Tws Response',
  PilotHeelComp = 'Pilot Heel Comp',
  PilotNetCourse = 'Pilot Net Course',
  PilotTargetWindAngle = 'Pilot Target Wind Angle',
  PilotWeatherHelm = 'Pilot Weather Helm',
  PilotMeanHeel = 'Pilot Mean Heel',
  PropellerShaftPitchAngle = 'Propeller Shaft Pitch Angle',
  PropellerShaftPitchPercent = 'Propeller Shaft Pitch Percent',
  PropellerShaftRpm = 'Propeller Shaft RPM',
  ThrusterPitchAngle = 'Thruster Pitch Angle',
  ThrusterPitchPercent = 'Thruster Pitch Percent',
  GroundWindAngle = 'Ground Wind Angle',
  FuelFlowOffset = 'Fuel Flow Offset',
  FluidLevelGasoline = 'Fluid Level Gasoline',
  FluidVolumeGasoline = 'Fluid Volume Gasoline',
  TankCapacityGasoline = 'Tank Capacity Gasoline',
  CmdXteOffset = 'Cmd Xte Offset',
  Engine4StrokeOil = 'Engine 4Stroke Oil',
  WirelessSensorSignalStrength = 'Wireless Sensor Signal Strength',
  WirelessSensorSoftwareUpdateProgress = 'Wireless Sensor Software Update Progress',
  TrollingStatus = 'Trolling Status',
  MercuryExhaustValve = 'Mercury Exhaust Valve',
  MercuryExhaustStatus = 'Mercury Exhaust Status',
  YanmarEngineEcuAlarms = 'Yanmar Engine Ecu Alarms',
  YanmarHelmEcuAlarms = 'Yanmar Helm Ecu Alarms',
  YanmarDriveEcuAlarms = 'Yanmar Drive Ecu Alarms',
  DgpsCorrectionData = 'Dgps Correction Data',
  DgpsReferenceStationId = 'Dgps Reference Station Id',
  DgpsReferenceStationHealth = 'Dgps Reference Station Health',
  DgpsSignalSnr = 'Dgps Signal Snr',
  DgpsSignalFrequency = 'Dgps Signal Frequency',
  DgpsSignalStrength = 'Dgps Signal Strength',
  EngineFuelTemp = 'Engine Fuel Temp',
  DepthQuality = 'Depth Quality',
  NumberOfActiveDtc = 'Number Of Active Dtc',
  YanmarFuelLevelTank1Port = 'Yanmar Fuel Level Tank1 Port',
  YanmarFuelLevelTank2Port = 'Yanmar Fuel Level Tank2 Port',
  YanmarFuelLevelTank1Stbd = 'Yanmar Fuel Level Tank1 Stbd',
  YanmarFuelLevelTank2Stbd = 'Yanmar Fuel Level Tank2 Stbd',
  YanmarFuelLevelTank1Center = 'Yanmar Fuel Level Tank1 Center',
  YanmarFuelLevelTank2Center = 'Yanmar Fuel Level Tank2 Center',
  YanmarFreshWaterLevelTank1Port = 'Yanmar Fresh Water Level Tank1 Port',
  YanmarFreshWaterLevelTank2Port = 'Yanmar Fresh Water Level Tank2 Port',
  YanmarFreshWaterLevelTank1Stbd = 'Yanmar Fresh Water Level Tank1 Stbd',
  YanmarFreshWaterLevelTank2Stbd = 'Yanmar Fresh Water Level Tank2 Stbd',
  YanmarFreshWaterLevelTank1Center = 'Yanmar Fresh Water Level Tank1 Center',
  YanmarFreshWaterLevelTank2Center = 'Yanmar Fresh Water Level Tank2 Center',
  YanmarGrayWaterLevelTank1Port = 'Yanmar Gray Water Level Tank1 Port',
  YanmarGrayWaterLevelTank2Port = 'Yanmar Gray Water Level Tank2 Port',
  YanmarGrayWaterLevelTank1Stbd = 'Yanmar Gray Water Level Tank1 Stbd',
  YanmarGrayWaterLevelTank2Stbd = 'Yanmar Gray Water Level Tank2 Stbd',
  YanmarGrayWaterLevelTank1Center = 'Yanmar Gray Water Level Tank1 Center',
  YanmarGrayWaterLevelTank2Center = 'Yanmar Gray Water Level Tank2 Center',
  RudderAnglePercentage = 'Rudder Angle Percentage',
  TrollActiveHelm = 'Troll Active Helm',
  TidesGraphic = 'Tides Graphic',
  AnchorDistance = 'Anchor Distance',
  AnchorSize = 'Anchor Size',
  AnchorDepth = 'Anchor Depth',
  AnchorBearing = 'Anchor Bearing',
  HondaEngineWarningParams = 'Honda Engine Warning Params',
  HondaEngineDiscreteParams1 = 'Honda Engine Discrete Params 1',
  HondaEngineDiscreteParams2 = 'Honda Engine Discrete Params 2',
  HondaEngineDiscreteParams3 = 'Honda Engine Discrete Params 3',
  HondaEngineDiscreteParams4 = 'Honda Engine Discrete Params 4',
  MainsailHeadLoad = 'Mainsail Head Load',
  MainsailClewLoad = 'Mainsail Clew Load',
  MainsailTackLoad = 'Mainsail Tack Load',
  J1HeadLoad = 'J1 Head Load',
  J1ClewLoad = 'J1 Clew Load',
  J1TackLoad = 'J1 Tack Load',
  J2HeadLoad = 'J2 Head Load',
  J2ClewLoad = 'J2 Clew Load',
  J2TackLoad = 'J2 Tack Load',
  J3HeadLoad = 'J3 Head Load',
  J3ClewLoad = 'J3 Clew Load',
  J3TackLoad = 'J3 Tack Load',
  CodeZeroHeadLoad = 'Code Zero Head Load',
  CodeZeroClewLoad = 'Code Zero Clew Load',
  CodeZeroTackLoad = 'Code Zero Tack Load',
  SuzukiEngineAlertI = 'Suzuki Engine Alert I',
  EngineOilLife = 'Engine Oil Life',
  EngineOilLevelStatus = 'Engine Oil Level Status',
  TransFluidStatus = 'Trans Fluid Status',
  HondaEcoStatusAllEngines = 'Honda Eco Status All Engines',
  OutputRpm = 'Output RPM',
  SuzukiEngineAlertA = 'Suzuki Engine Alert A',
  SuzukiEngineAlertB = 'Suzuki Engine Alert B',
  SuzukiEngineAlertC = 'Suzuki Engine Alert C',
  SuzukiEngineAlertD = 'Suzuki Engine Alert D',
  SuzukiEngineAlertE = 'Suzuki Engine Alert E',
  SuzukiEngineAlertF = 'Suzuki Engine Alert F',
  SuzukiEngineAlertG = 'Suzuki Engine Alert G',
  SuzukiEngineAlertH = 'Suzuki Engine Alert H',
  SuzukiEngineAlertJ = 'Suzuki Engine Alert J',
  SuzukiBcmFault = 'Suzuki Bcm Fault',
  SuzukiBcmMode = 'Suzuki Bcm Mode',
  SuzukiEngineKlsStatus = 'Suzuki Engine Kls Status',
  SuzukiSwitchFault = 'Suzuki Switch Fault',
  SuzukiShiftPositionStatus = 'Suzuki Shift Position Status',
  VesselFuelUsedSeasonal = 'Vessel Fuel Used Seasonal',
  VesselFuelCapacity = 'Vessel Fuel Capacity',
  SuzukiEngineAutoTrimStatus = 'Suzuki Engine Auto Trim Status',
  TrollingModeActive = 'Trolling Mode Active',
  TrollingModeActiveMaster = 'Trolling Mode Active Master',
  KeylessCommunicationState = 'Keyless Communication State',
  LinearActuatorPosition = 'Linear Actuator Position',
  EngineExhaustTemp = 'Engine Exhaust Temp',
  EngineGuardianPowerLimit = 'Engine Guardian Power Limit',
  EngineState = 'Engine State',
  SailingTimeToBurn = 'Sailing Time To Burn',
  MastTwist = 'Mast Twist',
  VhfChannel = 'VHF Channel',
  TrollingLowerUnitDirection = 'Trolling Lower Unit Direction',
  PropulsionBatteryStatus = 'Propulsion Battery Status',
  PropulsionBatteryIsolationStatus = 'Propulsion Battery Isolation Status',
  PropulsionBatteryError = 'Propulsion Battery Error',
  PropulsionBatteryVoltage = 'Propulsion Battery Voltage',
  PropulsionBatteryCurrent = 'Propulsion Battery Current',
  PropulsionBatteryStateOfCharge = 'Propulsion Battery State Of Charge',
  PropulsionBatteryTimeRemaining = 'Propulsion Battery Time Remaining',
  PropulsionBatteryHighestCellTemperature = 'Propulsion Battery Highest Cell Temperature',
  PropulsionBatteryLowestCellTemperature = 'Propulsion Battery Lowest Cell Temperature',
  PropulsionBatteryAverageCellTemperature = 'Propulsion Battery Average Cell Temperature',
  PropulsionBatteryMaximumDischargeCurrent = 'Propulsion Battery Maximum Discharge Current',
  PropulsionBatteryMaximumChargeCurrent = 'Propulsion Battery Maximum Charge Current',
  PropulsionBatteryCoolingSystemStatus = 'Propulsion Battery Cooling System Status',
  PropulsionBatteryHeatingSystemStatus = 'Propulsion Battery Heating System Status',
  PropulsionBatteryStorageMode = 'Propulsion Battery Storage Mode',
  PropulsionBatteryChemistry = 'Propulsion Battery Chemistry',
  PropulsionBatteryMaximumTemperatureDerating = 'Propulsion Battery Maximum Temperature Derating',
  PropulsionBatteryMaximumTemperatureShutoff = 'Propulsion Battery Maximum Temperature Shutoff',
  PropulsionBatteryMinimumTemperatureDerating = 'Propulsion Battery Minimum Temperature Derating',
  PropulsionBatteryMinimumTemperatureShutoff = 'Propulsion Battery Minimum Temperature Shutoff',
  PropulsionBatteryUsableEnergy = 'Propulsion Battery Usable Energy',
  PropulsionBatteryStateOfHealth = 'Propulsion Battery State Of Health',
  PropulsionBatteryDischargeCyclesCount = 'Propulsion Battery Discharge Cycles Count',
  PropulsionBatteryFullStatus = 'Propulsion Battery Full Status',
  PropulsionBatteryEmptyStatus = 'Propulsion Battery Empty Status',
  PropulsionBatteryMaximumChargeSoc = 'Propulsion Battery Maximum Charge Soc',
  PropulsionBatteryMinimumDischargeSoc = 'Propulsion Battery Minimum Discharge Soc',
  ActiveMotorMode = 'Active Motor Mode',
  MotorBrakeMode = 'Motor Brake Mode',
  MotorRotationalShaftSpeed = 'Motor Rotational Shaft Speed',
  MotorVoltage = 'Motor Voltage',
  MotorCurrent = 'Motor Current',
  MotorOperatingMode = 'Motor Operating Mode',
  MotorTemperature = 'Motor Temperature',
  MotorInverterTemperature = 'Motor Inverter Temperature',
  MotorCoolantTemperature = 'Motor Coolant Temperature',
  MotorGearTemperature = 'Motor Gear Temperature',
  MotorShaftTorquePercent = 'Motor Shaft Torque Percent',
  MotorVoltageType = 'Motor Voltage Type',
  MotorVoltageRating = 'Motor Voltage Rating',
  MotorMaxContinuousPower = 'Motor Max Continuous Power',
  MotorMaxBoostPower = 'Motor Max Boost Power',
  MotorMaxTemperatureRating = 'Motor Max Temperature Rating',
  MotorRatedSpeed = 'Motor Rated Speed',
  MotorMaxControllerTemperatureRating = 'Motor Max Controller Temperature Rating',
  MotorShaftTorqueRating = 'Motor Shaft Torque Rating',
  MotorDcVoltageDeratingThreshold = 'Motor DC Voltage Derating Threshold',
  MotorDcVoltageCutoffThreshold = 'Motor DC Voltage Cutoff Threshold',
  MotorRuntime = 'Motor Runtime',
  SailingPingTimePort = 'Sailing Ping Time Port',
  SailingPingTimeStbd = 'Sailing Ping Time Stbd',
  HeadingSource = 'Heading Source',
  Invalid = 'Invalid',
}

/**
 * @category Enumerations
 */
export const NavicoDataTypeValues: {[key: string]: number} = {
  [NavicoDataType.Altitude]: 0x0,
  [NavicoDataType.Position]: 0x1,
  [NavicoDataType.PositionError]: 0x2,
  [NavicoDataType.Hdop]: 0x3,
  [NavicoDataType.Vdop]: 0x4,
  [NavicoDataType.Tdop]: 0x5,
  [NavicoDataType.Pdop]: 0x6,
  [NavicoDataType.GeoidalSeparation]: 0x7,
  [NavicoDataType.Cog]: 0x8,
  [NavicoDataType.PositionQuality]: 0x9,
  [NavicoDataType.PositionIntegrity]: 0xa,
  [NavicoDataType.SatsInView]: 0xb,
  [NavicoDataType.WaasStatus]: 0xc,
  [NavicoDataType.Bearing]: 0xd,
  [NavicoDataType.Course]: 0xe,
  [NavicoDataType.CdiGraphic]: 0xf,
  [NavicoDataType.CourseToSteer]: 0x10,
  [NavicoDataType.CrossTrack]: 0x11,
  [NavicoDataType.VelocityMadeGood]: 0x12,
  [NavicoDataType.Destination]: 0x13,
  [NavicoDataType.DistanceToTurn]: 0x14,
  [NavicoDataType.DistanceToDest]: 0x15,
  [NavicoDataType.TimeToTurn]: 0x16,
  [NavicoDataType.TimeToDest]: 0x17,
  [NavicoDataType.EtaAtTurn]: 0x18,
  [NavicoDataType.EtaAtDest]: 0x19,
  [NavicoDataType.TotalDistance]: 0x1a,
  [NavicoDataType.SteerArrow]: 0x1b,
  [NavicoDataType.Odometer]: 0x1c,
  [NavicoDataType.TripDistance]: 0x1d,
  [NavicoDataType.TripTime]: 0x1e,
  [NavicoDataType.Date]: 0x1f,
  [NavicoDataType.Time]: 0x20,
  [NavicoDataType.UtcDate]: 0x21,
  [NavicoDataType.UtcTime]: 0x22,
  [NavicoDataType.LocalTimeOffset]: 0x23,
  [NavicoDataType.Heading]: 0x24,
  [NavicoDataType.WasVoltage]: 0x25,
  [NavicoDataType.CurrentSet]: 0x26,
  [NavicoDataType.CurrentDrift]: 0x27,
  [NavicoDataType.SpeedSog]: 0x28,
  [NavicoDataType.SpeedWater]: 0x29,
  [NavicoDataType.SpeedPitot]: 0x2a,
  [NavicoDataType.SpeedTripAvg]: 0x2b,
  [NavicoDataType.SpeedTripMax]: 0x2c,
  [NavicoDataType.SpeedWindApp]: 0x2d,
  [NavicoDataType.SpeedWindTrue]: 0x2e,
  [NavicoDataType.TempWater]: 0x2f,
  [NavicoDataType.TempOutside]: 0x30,
  [NavicoDataType.TempInside]: 0x31,
  [NavicoDataType.TempEngineRoom]: 0x32,
  [NavicoDataType.TempMainCabin]: 0x33,
  [NavicoDataType.TempLiveWell]: 0x34,
  [NavicoDataType.TempBaitWell]: 0x35,
  [NavicoDataType.TempRefrigeration]: 0x36,
  [NavicoDataType.TempHeatingSystem]: 0x37,
  [NavicoDataType.TempDewPoint]: 0x38,
  [NavicoDataType.TempWindChillApp]: 0x39,
  [NavicoDataType.TempWindChillTheoretic]: 0x3a,
  [NavicoDataType.TempHeatIndex]: 0x3b,
  [NavicoDataType.TempFreezer]: 0x3c,
  [NavicoDataType.EngineTemp]: 0x3d,
  [NavicoDataType.EngineAirTemp]: 0x3e,
  [NavicoDataType.EngineOilTemp]: 0x3f,
  [NavicoDataType.TempBattery]: 0x40,
  [NavicoDataType.PressureAtmospheric]: 0x41,
  [NavicoDataType.EngineBoostPres]: 0x42,
  [NavicoDataType.EngineOilPres]: 0x43,
  [NavicoDataType.EngineWaterPres]: 0x44,
  [NavicoDataType.EngineFuelPres]: 0x45,
  [NavicoDataType.EngineManifoldPres]: 0x46,
  [NavicoDataType.PressureSteam]: 0x47,
  [NavicoDataType.PressureComprAir]: 0x48,
  [NavicoDataType.PressureHydraulic]: 0x49,
  [NavicoDataType.WasGenericPressureLo]: 0x4a,
  [NavicoDataType.WasGenericPressureHi]: 0x4b,
  [NavicoDataType.Depth]: 0x4c,
  [NavicoDataType.WaterDistance]: 0x4d,
  [NavicoDataType.EngineRpm]: 0x4e,
  [NavicoDataType.EngineTrim]: 0x4f,
  [NavicoDataType.EngineAlternatorPotential]: 0x50,
  [NavicoDataType.EngineFuelRate]: 0x51,
  [NavicoDataType.EnginePercentLoad]: 0x52,
  [NavicoDataType.EnginePercentTorque]: 0x53,
  [NavicoDataType.WasSuzukiAlarmLevLo]: 0x54,
  [NavicoDataType.WasSuzukiAlarmLevHigh]: 0x55,
  [NavicoDataType.TankFuelLevel]: 0x56,
  [NavicoDataType.FluidLevelFreshWater]: 0x57,
  [NavicoDataType.FluidLevelGrayWater]: 0x58,
  [NavicoDataType.FluidLevelLiveWell]: 0x59,
  [NavicoDataType.FluidLevelOil]: 0x5a,
  [NavicoDataType.FluidLevelBlackWater]: 0x5b,
  [NavicoDataType.TankFuelRemaining]: 0x5c,
  [NavicoDataType.FluidVolumeFreshWater]: 0x5d,
  [NavicoDataType.FluidVolumeGrayWater]: 0x5e,
  [NavicoDataType.FluidVolumeLiveWell]: 0x5f,
  [NavicoDataType.FluidVolumeOil]: 0x60,
  [NavicoDataType.FluidVolumeBlackWater]: 0x61,
  [NavicoDataType.GenFluidVolume]: 0x62,
  [NavicoDataType.WasTankFuelLevelLo]: 0x63,
  [NavicoDataType.WasFluidLevelLoFreshWater]: 0x64,
  [NavicoDataType.WasFluidLevelLoGrayWater]: 0x65,
  [NavicoDataType.WasFluidLevelLoLiveWell]: 0x66,
  [NavicoDataType.WasFluidLevelLoOil]: 0x67,
  [NavicoDataType.GenTankCapacity]: 0x68,
  [NavicoDataType.TankFuelCapacity]: 0x69,
  [NavicoDataType.TankCapacityFreshWater]: 0x6a,
  [NavicoDataType.TankCapacityGrayWater]: 0x6b,
  [NavicoDataType.TankCapacityLiveWell]: 0x6c,
  [NavicoDataType.TankCapacityOil]: 0x6d,
  [NavicoDataType.TankCapacityBlackWater]: 0x6e,
  [NavicoDataType.WasTankFuelUsed]: 0x6f,
  [NavicoDataType.EngineFuelUsed]: 0x70,
  [NavicoDataType.EngineFuelUsedTrip]: 0x71,
  [NavicoDataType.EngineFuelUsedSeasonal]: 0x72,
  [NavicoDataType.EngineFuelKValue]: 0x73,
  [NavicoDataType.BatteryPotential]: 0x74,
  [NavicoDataType.BatteryCurrent]: 0x75,
  [NavicoDataType.TrimTab]: 0x76,
  [NavicoDataType.WasTrimStbdTab]: 0x77,
  [NavicoDataType.RateOfTurn]: 0x78,
  [NavicoDataType.AttitudeYaw]: 0x79,
  [NavicoDataType.AttitudePitch]: 0x7a,
  [NavicoDataType.AttitudeRoll]: 0x7b,
  [NavicoDataType.MagneticVariation]: 0x7c,
  [NavicoDataType.Deviation]: 0x7d,
  [NavicoDataType.FuelEconomyWtr]: 0x7e,
  [NavicoDataType.FuelEconomyGps]: 0x7f,
  [NavicoDataType.WasFuelRemaining]: 0x80,
  [NavicoDataType.WasFuelRangeWtr]: 0x81,
  [NavicoDataType.WasFuelRangeGps]: 0x82,
  [NavicoDataType.EngineHoursUsed]: 0x83,
  [NavicoDataType.EngineType]: 0x84,
  [NavicoDataType.VesselFuelRate]: 0x85,
  [NavicoDataType.VesselFuelEconomyWtr]: 0x86,
  [NavicoDataType.VesselFuelEconomyGps]: 0x87,
  [NavicoDataType.VesselFuelRemaining]: 0x88,
  [NavicoDataType.VesselFuelRangeWtr]: 0x89,
  [NavicoDataType.VesselFuelRangeGps]: 0x8a,
  [NavicoDataType.WindAppAngle]: 0x8b,
  [NavicoDataType.WindTrueAngle]: 0x8c,
  [NavicoDataType.WindTrueDirection]: 0x8d,
  [NavicoDataType.HumidityInside]: 0x8e,
  [NavicoDataType.HumidityOutside]: 0x8f,
  [NavicoDataType.SetHumidity]: 0x90,
  [NavicoDataType.RudderAngle]: 0x91,
  [NavicoDataType.TransGear]: 0x92,
  [NavicoDataType.TransOilPressure]: 0x93,
  [NavicoDataType.TransOilTemp]: 0x94,
  [NavicoDataType.CmdRudderAngle]: 0x95,
  [NavicoDataType.RudderLimit]: 0x96,
  [NavicoDataType.OffHeadingLim]: 0x97,
  [NavicoDataType.RadiusOfTurnOrder]: 0x98,
  [NavicoDataType.RateOfTurnOrder]: 0x99,
  [NavicoDataType.OffTrackLim]: 0x9a,
  [NavicoDataType.LoggingTimeRemaining]: 0x9b,
  [NavicoDataType.PositionFixType]: 0x9c,
  [NavicoDataType.EngineDiscreteStatus]: 0x9d,
  [NavicoDataType.TransmissionDiscreteStatus]: 0x9e,
  [NavicoDataType.GpsBestOfFourSnr]: 0x9f,
  [NavicoDataType.GenFluidLevel]: 0xa0,
  [NavicoDataType.GenPressure]: 0xa1,
  [NavicoDataType.GenTemperature]: 0xa2,
  [NavicoDataType.InternalVoltage]: 0xa3,
  [NavicoDataType.DepthOffset]: 0xa4,
  [NavicoDataType.StructureDepth]: 0xa5,
  [NavicoDataType.LoranPosition]: 0xa6,
  [NavicoDataType.VesselStatus]: 0xa7,
  [NavicoDataType.BatteryDcType]: 0xa8,
  [NavicoDataType.BatteryStateOfCharge]: 0xa9,
  [NavicoDataType.BatteryStateOfHealth]: 0xaa,
  [NavicoDataType.BatteryTimeRemaining]: 0xab,
  [NavicoDataType.BatteryRippleVoltage]: 0xac,
  [NavicoDataType.Ac1Acceptability]: 0xad,
  [NavicoDataType.Ac2Acceptability]: 0xae,
  [NavicoDataType.Ac3Acceptability]: 0xaf,
  [NavicoDataType.Ac1Voltage]: 0xb0,
  [NavicoDataType.Ac2Voltage]: 0xb1,
  [NavicoDataType.Ac3Voltage]: 0xb2,
  [NavicoDataType.Ac1Current]: 0xb3,
  [NavicoDataType.Ac2Current]: 0xb4,
  [NavicoDataType.Ac3Current]: 0xb5,
  [NavicoDataType.Ac1Frequency]: 0xb6,
  [NavicoDataType.Ac2Frequency]: 0xb7,
  [NavicoDataType.Ac3Frequency]: 0xb8,
  [NavicoDataType.Ac1BreakerSize]: 0xb9,
  [NavicoDataType.Ac2BreakerSize]: 0xba,
  [NavicoDataType.Ac3BreakerSize]: 0xbb,
  [NavicoDataType.Ac1RealPower]: 0xbc,
  [NavicoDataType.Ac2RealPower]: 0xbd,
  [NavicoDataType.Ac3RealPower]: 0xbe,
  [NavicoDataType.Ac1ReactivePower]: 0xbf,
  [NavicoDataType.Ac2ReactivePower]: 0xc0,
  [NavicoDataType.Ac3ReactivePower]: 0xc1,
  [NavicoDataType.Ac1PowerFactor]: 0xc2,
  [NavicoDataType.Ac2PowerFactor]: 0xc3,
  [NavicoDataType.Ac3PowerFactor]: 0xc4,
  [NavicoDataType.SwitchState]: 0xc5,
  [NavicoDataType.SwitchCurrent]: 0xc6,
  [NavicoDataType.SwitchFault]: 0xc7,
  [NavicoDataType.SwitchDimLevel]: 0xc8,
  [NavicoDataType.PreviousCmdHeading]: 0xc9,
  [NavicoDataType.CmdWindAngle]: 0xca,
  [NavicoDataType.WasCmdBearingOffset]: 0xcb,
  [NavicoDataType.CmdBearing]: 0xcc,
  [NavicoDataType.CmdDepthContour]: 0xcd,
  [NavicoDataType.CmdCourseChange]: 0xce,
  [NavicoDataType.PilotDrift]: 0xcf,
  [NavicoDataType.PilotDistanceToTurn]: 0xd0,
  [NavicoDataType.PilotTimeToTurn]: 0xd1,
  [NavicoDataType.PilotReferencePosition]: 0xd2,
  [NavicoDataType.DcStatus]: 0xd3,
  [NavicoDataType.Ac1Status]: 0xd4,
  [NavicoDataType.WasSwitchVoltage]: 0xd5,
  [NavicoDataType.BatteryCapacityRemaining]: 0xd6,
  [NavicoDataType.PilotHeadingReference]: 0xd7,
  [NavicoDataType.BAndGLinear1]: 0xd8,
  [NavicoDataType.BAndGLinear2]: 0xd9,
  [NavicoDataType.BAndGLinear3]: 0xda,
  [NavicoDataType.BoomPosition]: 0xdb,
  [NavicoDataType.SailingCourse]: 0xdc,
  [NavicoDataType.DaggerboardPosition]: 0xdd,
  [NavicoDataType.BAndGLinear4]: 0xde,
  [NavicoDataType.HeadingOnNextTack]: 0xdf,
  [NavicoDataType.KeelAngle]: 0xe0,
  [NavicoDataType.Leeway]: 0xe1,
  [NavicoDataType.MastAngle]: 0xe2,
  [NavicoDataType.TargetTrueWindAngle]: 0xe3,
  [NavicoDataType.KeelTrimTab]: 0xe4,
  [NavicoDataType.RaceTimer]: 0xe5,
  [NavicoDataType.CanardAngle]: 0xe6,
  [NavicoDataType.NextLegApparentWindAngle]: 0xe7,
  [NavicoDataType.NextLegApparentWindSpeed]: 0xe8,
  [NavicoDataType.TargetBoatSpeed]: 0xe9,
  [NavicoDataType.VmgToWind]: 0xea,
  [NavicoDataType.TimeToLaylines]: 0xeb,
  [NavicoDataType.DistanceToLaylines]: 0xec,
  [NavicoDataType.AftDepth]: 0xed,
  [NavicoDataType.Forestay]: 0xee,
  [NavicoDataType.PolarSpeed]: 0xef,
  [NavicoDataType.PolarPerformance]: 0xf0,
  [NavicoDataType.TackingPerformance]: 0xf1,
  [NavicoDataType.WindAngleToMast]: 0xf2,
  [NavicoDataType.CanBusVoltage]: 0xf3,
  [NavicoDataType.InternalTemperature]: 0xf4,
  [NavicoDataType.EngageCurrent]: 0xf5,
  [NavicoDataType.UrefVoltage]: 0xf6,
  [NavicoDataType.SupplyVoltage]: 0xf7,
  [NavicoDataType.DestinationPosition]: 0xf8,
  [NavicoDataType.CompassHeadingReference]: 0xf9,
  [NavicoDataType.CmdRudderDirection]: 0xfa,
  [NavicoDataType.WasEngineSyncState]: 0xfb,
  [NavicoDataType.EngineGeneralMaintenance]: 0xfc,
  [NavicoDataType.EnginePercentThrottle]: 0xfd,
  [NavicoDataType.EngineSteeringAngle]: 0xfe,
  [NavicoDataType.EngineBreakInReqd]: 0xff,
  [NavicoDataType.GpsAll]: 0x100,
  [NavicoDataType.EngineBreakInAccum]: 0x101,
  [NavicoDataType.EngineTrimStatus]: 0x102,
  [NavicoDataType.PilotPresent]: 0x103,
  [NavicoDataType.Ac1OutWaveform]: 0x104,
  [NavicoDataType.Ac2OutWaveform]: 0x105,
  [NavicoDataType.Ac3OutWaveform]: 0x106,
  [NavicoDataType.Ac1OutVoltage]: 0x107,
  [NavicoDataType.Ac2OutVoltage]: 0x108,
  [NavicoDataType.Ac3OutVoltage]: 0x109,
  [NavicoDataType.Ac1OutCurrent]: 0x10a,
  [NavicoDataType.Ac2OutCurrent]: 0x10b,
  [NavicoDataType.Ac3OutCurrent]: 0x10c,
  [NavicoDataType.Ac1OutFrequency]: 0x10d,
  [NavicoDataType.Ac2OutFrequency]: 0x10e,
  [NavicoDataType.Ac3OutFrequency]: 0x10f,
  [NavicoDataType.Ac1OutBreakerSize]: 0x110,
  [NavicoDataType.Ac2OutBreakerSize]: 0x111,
  [NavicoDataType.Ac3OutBreakerSize]: 0x112,
  [NavicoDataType.Ac1OutRealPower]: 0x113,
  [NavicoDataType.Ac2OutRealPower]: 0x114,
  [NavicoDataType.Ac3OutRealPower]: 0x115,
  [NavicoDataType.Ac1OutReactivePower]: 0x116,
  [NavicoDataType.Ac2OutReactivePower]: 0x117,
  [NavicoDataType.Ac3OutReactivePower]: 0x118,
  [NavicoDataType.Ac1OutPowerFactor]: 0x119,
  [NavicoDataType.Ac2OutPowerFactor]: 0x11a,
  [NavicoDataType.Ac3OutPowerFactor]: 0x11b,
  [NavicoDataType.Ac2Status]: 0x11c,
  [NavicoDataType.Ac3Status]: 0x11d,
  [NavicoDataType.Ac1OutStatus]: 0x11e,
  [NavicoDataType.Ac2OutStatus]: 0x11f,
  [NavicoDataType.Ac3OutStatus]: 0x120,
  [NavicoDataType.SwitchManualOverride]: 0x121,
  [NavicoDataType.SwitchReversePolarity]: 0x122,
  [NavicoDataType.SwitchAcsourceAvailable]: 0x123,
  [NavicoDataType.SwitchAccontactorSystemsonstate]: 0x124,
  [NavicoDataType.ChargerBatteryInstance]: 0x125,
  [NavicoDataType.ChargerOperatingState]: 0x126,
  [NavicoDataType.ChargerMode]: 0x127,
  [NavicoDataType.ChargerEnabled]: 0x128,
  [NavicoDataType.ChargerEqualizationPending]: 0x129,
  [NavicoDataType.ChargerEqualizationTimeRemaining]: 0x12a,
  [NavicoDataType.InverterAcInstance]: 0x12b,
  [NavicoDataType.InverterDcInstance]: 0x12c,
  [NavicoDataType.InverterOperatingState]: 0x12d,
  [NavicoDataType.InverterEnabled]: 0x12e,
  [NavicoDataType.ThrusterPower]: 0x12f,
  [NavicoDataType.FuelToTurn]: 0x130,
  [NavicoDataType.EngineMil]: 0x131,
  [NavicoDataType.EngineWarningFlags]: 0x132,
  [NavicoDataType.SpeedStw]: 0x133,
  [NavicoDataType.EnginePerformanceSog]: 0x134,
  [NavicoDataType.EnginePerformanceStw]: 0x135,
  [NavicoDataType.EngineControlFlags]: 0x136,
  [NavicoDataType.EngineTrollRpmSetpoint]: 0x137,
  [NavicoDataType.ActiveHelm]: 0x138,
  [NavicoDataType.CruiseRpmSetpoint]: 0x139,
  [NavicoDataType.CruiseSpeedSetpoint]: 0x13a,
  [NavicoDataType.CmdPatternDir]: 0x13b,
  [NavicoDataType.SmartContextual]: 0x13c,
  [NavicoDataType.SailingTimeToWaypoint]: 0x13d,
  [NavicoDataType.SailingDistanceToWaypoint]: 0x13e,
  [NavicoDataType.SailingEta]: 0x13f,
  [NavicoDataType.GeneratorTemp]: 0x140,
  [NavicoDataType.GeneratorOilTemp]: 0x141,
  [NavicoDataType.GeneratorOilPres]: 0x142,
  [NavicoDataType.GeneratorWaterPres]: 0x143,
  [NavicoDataType.GeneratorFuelPres]: 0x144,
  [NavicoDataType.GeneratorFuelRate]: 0x145,
  [NavicoDataType.GeneratorHoursUsed]: 0x146,
  [NavicoDataType.GeneratorDiscreteStatus]: 0x147,
  [NavicoDataType.GeneratorPercentLoad]: 0x148,
  [NavicoDataType.GeneratorPercentTorque]: 0x149,
  [NavicoDataType.GeneratorBatteryVoltage]: 0x14a,
  [NavicoDataType.GeneratorAverageVoltage]: 0x14b,
  [NavicoDataType.GeneratorAverageFrequency]: 0x14c,
  [NavicoDataType.GeneratorAverageCurrent]: 0x14d,
  [NavicoDataType.PilotMode]: 0x14e,
  [NavicoDataType.PilotResponseLevel]: 0x14f,
  [NavicoDataType.CruiseSmarttowOvershoot]: 0x150,
  [NavicoDataType.PilotCmdHeading]: 0x151,
  [NavicoDataType.MobDrPosition]: 0x152,
  [NavicoDataType.MobDrRange]: 0x153,
  [NavicoDataType.MobDrBearing]: 0x154,
  [NavicoDataType.BowPosition]: 0x155,
  [NavicoDataType.StartLineBearing]: 0x156,
  [NavicoDataType.StartLineBias]: 0x157,
  [NavicoDataType.DistanceToStartLine]: 0x158,
  [NavicoDataType.DistanceToStartLinePortEnd]: 0x159,
  [NavicoDataType.DistanceToStartLineStbdEnd]: 0x15a,
  [NavicoDataType.StartLinePortPosition]: 0x15b,
  [NavicoDataType.StartLineStbdPosition]: 0x15c,
  [NavicoDataType.StartLineBoatLengthAdvantage]: 0x15d,
  [NavicoDataType.DistanceToStartLineBoatLengths]: 0x15e,
  [NavicoDataType.Backstay]: 0x15f,
  [NavicoDataType.BoomAngle]: 0x160,
  [NavicoDataType.BoomVang]: 0x161,
  [NavicoDataType.ChainLength]: 0x162,
  [NavicoDataType.Cunningham]: 0x163,
  [NavicoDataType.InnerForestayLoad]: 0x164,
  [NavicoDataType.InnerForestayHalyardLoad]: 0x165,
  [NavicoDataType.JibFurl]: 0x166,
  [NavicoDataType.JibHalyardLoad]: 0x167,
  [NavicoDataType.OptimumWindAngle]: 0x168,
  [NavicoDataType.OuthaulLoad]: 0x169,
  [NavicoDataType.PitchRate]: 0x16a,
  [NavicoDataType.PlowAngle]: 0x16b,
  [NavicoDataType.RollRate]: 0x16c,
  [NavicoDataType.VmgPerformance]: 0x16d,
  [NavicoDataType.BAndGLinear5]: 0x16e,
  [NavicoDataType.BAndGLinear6]: 0x16f,
  [NavicoDataType.BAndGLinear7]: 0x170,
  [NavicoDataType.BAndGLinear8]: 0x171,
  [NavicoDataType.BAndGLinear9]: 0x172,
  [NavicoDataType.BAndGLinear10]: 0x173,
  [NavicoDataType.BAndGLinear11]: 0x174,
  [NavicoDataType.BAndGLinear12]: 0x175,
  [NavicoDataType.BAndGLinear13]: 0x176,
  [NavicoDataType.BAndGLinear14]: 0x177,
  [NavicoDataType.BAndGLinear15]: 0x178,
  [NavicoDataType.BAndGLinear16]: 0x179,
  [NavicoDataType.KeelDraught]: 0x17a,
  [NavicoDataType.PoolTemperature]: 0x17b,
  [NavicoDataType.JacuzziTemperature]: 0x17c,
  [NavicoDataType.TripDrBearing]: 0x17d,
  [NavicoDataType.TripDrDistance]: 0x17e,
  [NavicoDataType.CodeZeroLoad]: 0x17f,
  [NavicoDataType.BAndGMobPosition]: 0x180,
  [NavicoDataType.DistanceBehindStartLine]: 0x181,
  [NavicoDataType.DistanceBehindStartLineBoatLengths]: 0x182,
  [NavicoDataType.BiasAdvantage]: 0x183,
  [NavicoDataType.OppositeTackCog]: 0x184,
  [NavicoDataType.OppositeTackTargetHeading]: 0x185,
  [NavicoDataType.MastRake]: 0x186,
  [NavicoDataType.NextLegBearing]: 0x187,
  [NavicoDataType.NextLegTargetSpeed]: 0x188,
  [NavicoDataType.GroundWindDirection]: 0x189,
  [NavicoDataType.GroundWindSpeed]: 0x18a,
  [NavicoDataType.MastCantAngle]: 0x18b,
  [NavicoDataType.RudderToeIn]: 0x18c,
  [NavicoDataType.DaggerboardPort]: 0x18d,
  [NavicoDataType.DaggerboardStarboard]: 0x18e,
  [NavicoDataType.BAndGRemote0]: 0x18f,
  [NavicoDataType.BAndGRemote1]: 0x190,
  [NavicoDataType.BAndGRemote2]: 0x191,
  [NavicoDataType.BAndGRemote3]: 0x192,
  [NavicoDataType.BAndGRemote4]: 0x193,
  [NavicoDataType.BAndGRemote5]: 0x194,
  [NavicoDataType.BAndGRemote6]: 0x195,
  [NavicoDataType.BAndGRemote7]: 0x196,
  [NavicoDataType.BAndGRemote8]: 0x197,
  [NavicoDataType.BAndGRemote9]: 0x198,
  [NavicoDataType.ForwardDepth]: 0x199,
  [NavicoDataType.CriticalRange]: 0x19a,
  [NavicoDataType.CautionRange]: 0x19b,
  [NavicoDataType.MaxRange]: 0x19c,
  [NavicoDataType.GeneratorAlternatorVoltage]: 0x19d,
  [NavicoDataType.TrollingPropRate]: 0x19e,
  [NavicoDataType.TrollingCruiseControlSpeed]: 0x19f,
  [NavicoDataType.VesselFuelUsed]: 0x1a0,
  [NavicoDataType.SuzukiEngineBaroPressure]: 0x1a1,
  [NavicoDataType.SuzukiCylinderTemperature]: 0x1a2,
  [NavicoDataType.SuzukiIntakeAirTemperature]: 0x1a3,
  [NavicoDataType.SuzukiIgnitionTiming]: 0x1a4,
  [NavicoDataType.SuzukiFuelInjectorPulseWidth]: 0x1a5,
  [NavicoDataType.WasSuzukiInjectedFuelAmount]: 0x1a6,
  [NavicoDataType.SuzukiIacValveDuty]: 0x1a7,
  [NavicoDataType.SuzukiDiscreteStatus1]: 0x1a8,
  [NavicoDataType.SuzukiDiscreteStatus2]: 0x1a9,
  [NavicoDataType.SuzukiDiscreteStatus3]: 0x1aa,
  [NavicoDataType.SuzukiDiscreteStatus4]: 0x1ab,
  [NavicoDataType.FuelEconomyPit]: 0x1ac,
  [NavicoDataType.VesselFuelEconomyPit]: 0x1ad,
  [NavicoDataType.VesselFuelRangePit]: 0x1ae,
  [NavicoDataType.Waypoint]: 0x1af,
  [NavicoDataType.AverageWindDirection]: 0x1b0,
  [NavicoDataType.WindPhase]: 0x1b1,
  [NavicoDataType.WindLift]: 0x1b2,
  [NavicoDataType.FuelRangeSeasonalAverage]: 0x1b3,
  [NavicoDataType.FuelRangeInstantaneous]: 0x1b4,
  [NavicoDataType.VesselFuelEconomy]: 0x1b5,
  [NavicoDataType.AverageFuelEconomySeasonal]: 0x1b6,
  [NavicoDataType.AverageFuelEconomyTrip]: 0x1b7,
  [NavicoDataType.BestFuelEconomySeasonal]: 0x1b8,
  [NavicoDataType.BestFuelEconomyTrip]: 0x1b9,
  [NavicoDataType.VesselFuelLevel]: 0x1ba,
  [NavicoDataType.VesselFuelUsedTrip]: 0x1bb,
  [NavicoDataType.BAndGLinear17]: 0x1bc,
  [NavicoDataType.BAndGLinear18]: 0x1bd,
  [NavicoDataType.BAndGLinear19]: 0x1be,
  [NavicoDataType.BAndGLinear20]: 0x1bf,
  [NavicoDataType.BAndGLinear21]: 0x1c0,
  [NavicoDataType.BAndGLinear22]: 0x1c1,
  [NavicoDataType.BAndGLinear23]: 0x1c2,
  [NavicoDataType.BAndGLinear24]: 0x1c3,
  [NavicoDataType.BAndGLinear25]: 0x1c4,
  [NavicoDataType.BAndGLinear26]: 0x1c5,
  [NavicoDataType.BAndGLinear27]: 0x1c6,
  [NavicoDataType.BAndGLinear28]: 0x1c7,
  [NavicoDataType.BAndGLinear29]: 0x1c8,
  [NavicoDataType.BAndGLinear30]: 0x1c9,
  [NavicoDataType.BAndGLinear31]: 0x1ca,
  [NavicoDataType.BAndGLinear32]: 0x1cb,
  [NavicoDataType.OriginWayPointNumber]: 0x1cc,
  [NavicoDataType.DestWayPointNumber]: 0x1cd,
  [NavicoDataType.ArrivalNotification]: 0x1ce,
  [NavicoDataType.ArrivalCircleNotification]: 0x1cf,
  [NavicoDataType.WasNavTerminated]: 0x1d0,
  [NavicoDataType.Bobstay]: 0x1d1,
  [NavicoDataType.J1]: 0x1d2,
  [NavicoDataType.J2]: 0x1d3,
  [NavicoDataType.J3]: 0x1d4,
  [NavicoDataType.MastBase]: 0x1d5,
  [NavicoDataType.Mainsheet]: 0x1d6,
  [NavicoDataType.D0Port]: 0x1d7,
  [NavicoDataType.D0Starboard]: 0x1d8,
  [NavicoDataType.RunnerPort]: 0x1d9,
  [NavicoDataType.RunnerStarboard]: 0x1da,
  [NavicoDataType.FoilPort]: 0x1db,
  [NavicoDataType.FoilStarboard]: 0x1dc,
  [NavicoDataType.SailtackPort]: 0x1dd,
  [NavicoDataType.SailtackStarboard]: 0x1de,
  [NavicoDataType.DeflectPort]: 0x1df,
  [NavicoDataType.DeflectStarboard]: 0x1e0,
  [NavicoDataType.RudderLoadPort]: 0x1e1,
  [NavicoDataType.RudderLoadStarboard]: 0x1e2,
  [NavicoDataType.D1Port]: 0x1e3,
  [NavicoDataType.D1Starboard]: 0x1e4,
  [NavicoDataType.V0Port]: 0x1e5,
  [NavicoDataType.V0Starboard]: 0x1e6,
  [NavicoDataType.V1Port]: 0x1e7,
  [NavicoDataType.V1Starboard]: 0x1e8,
  [NavicoDataType.GnssSystem]: 0x1e9,
  [NavicoDataType.SvCount]: 0x1ea,
  [NavicoDataType.GnssOpMode]: 0x1eb,
  [NavicoDataType.DgnssMode]: 0x1ec,
  [NavicoDataType.SuzukiFuelPumpDuty]: 0x1ed,
  [NavicoDataType.SpeedLogWaterLongitudinal]: 0x1ee,
  [NavicoDataType.SpeedLogWaterTransverse]: 0x1ef,
  [NavicoDataType.SpeedLogWaterResultant]: 0x1f0,
  [NavicoDataType.SpeedLogWaterAngle]: 0x1f1,
  [NavicoDataType.SpeedLogGroundLongitudinal]: 0x1f2,
  [NavicoDataType.SpeedLogGroundTransverse]: 0x1f3,
  [NavicoDataType.SpeedLogGroundResultant]: 0x1f4,
  [NavicoDataType.SpeedLogGroundAngle]: 0x1f5,
  [NavicoDataType.SpeedLogSternWaterTransverse]: 0x1f6,
  [NavicoDataType.SpeedLogSternGroundTransverse]: 0x1f7,
  [NavicoDataType.PositionDatum]: 0x1f8,
  [NavicoDataType.SpeedBoat]: 0x1f9,
  [NavicoDataType.WasEngineFuelUsedMercury]: 0x1fa,
  [NavicoDataType.Heave]: 0x1fb,
  [NavicoDataType.SpeedTripMaxRpm]: 0x1fc,
  [NavicoDataType.HondaEngineStatusParams]: 0x1fd,
  [NavicoDataType.PilotFeatures]: 0x1fe,
  [NavicoDataType.PilotSetpointHeading]: 0x1ff,
  [NavicoDataType.IdleSpeedControlMode]: 0x200,
  [NavicoDataType.IdleSpeedControlValue]: 0x201,
  [NavicoDataType.TrollingMode]: 0x202,
  [NavicoDataType.ImmobilizerLockStatus]: 0x203,
  [NavicoDataType.EngineDiscreteParams1]: 0x204,
  [NavicoDataType.EngineDiscreteParams2]: 0x205,
  [NavicoDataType.EngineDiscreteParams3]: 0x206,
  [NavicoDataType.EngineDiscreteParams4]: 0x207,
  [NavicoDataType.EngineDiscreteParams5]: 0x208,
  [NavicoDataType.EngineDiscreteParams6]: 0x209,
  [NavicoDataType.IdleSpeedLimitLow]: 0x20a,
  [NavicoDataType.IdleSpeedLimitHigh]: 0x20b,
  [NavicoDataType.WasTrollingVariableRpmInfo]: 0x20c,
  [NavicoDataType.IdleSpeedControlTargetRev]: 0x20d,
  [NavicoDataType.IdleControl]: 0x20e,
  [NavicoDataType.IdleFeedback]: 0x20f,
  [NavicoDataType.ImmediatelyAfterStartingControl]: 0x210,
  [NavicoDataType.GatewayParams]: 0x211,
  [NavicoDataType.GatewayProtocol]: 0x212,
  [NavicoDataType.EngineWallTemp]: 0x213,
  [NavicoDataType.SubstituteBatteryVoltage]: 0x214,
  [NavicoDataType.YamahaEngineM6DiagCode]: 0x215,
  [NavicoDataType.WirelessSensorBatteryStatus]: 0x216,
  [NavicoDataType.WirelessSensorBatteryChargeStatus]: 0x217,
  [NavicoDataType.WirelessSensorBatteryStatusVoltage]: 0x218,
  [NavicoDataType.WirelessSensorBatteryChargeStatusCurrent]: 0x219,
  [NavicoDataType.FluidTypeMode]: 0x21a,
  [NavicoDataType.Datetime]: 0x21b,
  [NavicoDataType.ReacherLoad]: 0x21c,
  [NavicoDataType.BladeLoad]: 0x21d,
  [NavicoDataType.StaysailLoad]: 0x21e,
  [NavicoDataType.TackLoad]: 0x21f,
  [NavicoDataType.J4Load]: 0x220,
  [NavicoDataType.SolentLoad]: 0x221,
  [NavicoDataType.TackPortLoad]: 0x222,
  [NavicoDataType.TackStarboardLoad]: 0x223,
  [NavicoDataType.DeflectUpperLoad]: 0x224,
  [NavicoDataType.DeflectLowerLoad]: 0x225,
  [NavicoDataType.WinchPortLoad]: 0x226,
  [NavicoDataType.WinchStarboardLoad]: 0x227,
  [NavicoDataType.SpinHalyardPortLoad]: 0x228,
  [NavicoDataType.SpinHalyardStarboardLoad]: 0x229,
  [NavicoDataType.MainHalyward]: 0x22a,
  [NavicoDataType.Load1Load]: 0x22b,
  [NavicoDataType.Load2Load]: 0x22c,
  [NavicoDataType.MastBase2Load]: 0x22d,
  [NavicoDataType.PilotActivePerfMode]: 0x22e,
  [NavicoDataType.PilotGust]: 0x22f,
  [NavicoDataType.PilotTwsResponse]: 0x230,
  [NavicoDataType.PilotHeelComp]: 0x231,
  [NavicoDataType.PilotNetCourse]: 0x232,
  [NavicoDataType.PilotTargetWindAngle]: 0x233,
  [NavicoDataType.PilotWeatherHelm]: 0x234,
  [NavicoDataType.PilotMeanHeel]: 0x235,
  [NavicoDataType.PropellerShaftPitchAngle]: 0x236,
  [NavicoDataType.PropellerShaftPitchPercent]: 0x237,
  [NavicoDataType.PropellerShaftRpm]: 0x238,
  [NavicoDataType.ThrusterPitchAngle]: 0x239,
  [NavicoDataType.ThrusterPitchPercent]: 0x23a,
  [NavicoDataType.GroundWindAngle]: 0x23b,
  [NavicoDataType.FuelFlowOffset]: 0x23c,
  [NavicoDataType.FluidLevelGasoline]: 0x23d,
  [NavicoDataType.FluidVolumeGasoline]: 0x23e,
  [NavicoDataType.TankCapacityGasoline]: 0x23f,
  [NavicoDataType.CmdXteOffset]: 0x240,
  [NavicoDataType.Engine4StrokeOil]: 0x241,
  [NavicoDataType.WirelessSensorSignalStrength]: 0x242,
  [NavicoDataType.WirelessSensorSoftwareUpdateProgress]: 0x243,
  [NavicoDataType.TrollingStatus]: 0x244,
  [NavicoDataType.MercuryExhaustValve]: 0x245,
  [NavicoDataType.MercuryExhaustStatus]: 0x246,
  [NavicoDataType.YanmarEngineEcuAlarms]: 0x247,
  [NavicoDataType.YanmarHelmEcuAlarms]: 0x248,
  [NavicoDataType.YanmarDriveEcuAlarms]: 0x249,
  [NavicoDataType.DgpsCorrectionData]: 0x24a,
  [NavicoDataType.DgpsReferenceStationId]: 0x24b,
  [NavicoDataType.DgpsReferenceStationHealth]: 0x24c,
  [NavicoDataType.DgpsSignalSnr]: 0x24d,
  [NavicoDataType.DgpsSignalFrequency]: 0x24e,
  [NavicoDataType.DgpsSignalStrength]: 0x24f,
  [NavicoDataType.EngineFuelTemp]: 0x250,
  [NavicoDataType.DepthQuality]: 0x251,
  [NavicoDataType.NumberOfActiveDtc]: 0x252,
  [NavicoDataType.YanmarFuelLevelTank1Port]: 0x253,
  [NavicoDataType.YanmarFuelLevelTank2Port]: 0x254,
  [NavicoDataType.YanmarFuelLevelTank1Stbd]: 0x255,
  [NavicoDataType.YanmarFuelLevelTank2Stbd]: 0x256,
  [NavicoDataType.YanmarFuelLevelTank1Center]: 0x257,
  [NavicoDataType.YanmarFuelLevelTank2Center]: 0x258,
  [NavicoDataType.YanmarFreshWaterLevelTank1Port]: 0x259,
  [NavicoDataType.YanmarFreshWaterLevelTank2Port]: 0x25a,
  [NavicoDataType.YanmarFreshWaterLevelTank1Stbd]: 0x25b,
  [NavicoDataType.YanmarFreshWaterLevelTank2Stbd]: 0x25c,
  [NavicoDataType.YanmarFreshWaterLevelTank1Center]: 0x25d,
  [NavicoDataType.YanmarFreshWaterLevelTank2Center]: 0x25e,
  [NavicoDataType.YanmarGrayWaterLevelTank1Port]: 0x25f,
  [NavicoDataType.YanmarGrayWaterLevelTank2Port]: 0x260,
  [NavicoDataType.YanmarGrayWaterLevelTank1Stbd]: 0x261,
  [NavicoDataType.YanmarGrayWaterLevelTank2Stbd]: 0x262,
  [NavicoDataType.YanmarGrayWaterLevelTank1Center]: 0x263,
  [NavicoDataType.YanmarGrayWaterLevelTank2Center]: 0x264,
  [NavicoDataType.RudderAnglePercentage]: 0x265,
  [NavicoDataType.TrollActiveHelm]: 0x266,
  [NavicoDataType.TidesGraphic]: 0x267,
  [NavicoDataType.AnchorDistance]: 0x268,
  [NavicoDataType.AnchorSize]: 0x269,
  [NavicoDataType.AnchorDepth]: 0x26a,
  [NavicoDataType.AnchorBearing]: 0x26b,
  [NavicoDataType.HondaEngineWarningParams]: 0x26c,
  [NavicoDataType.HondaEngineDiscreteParams1]: 0x26d,
  [NavicoDataType.HondaEngineDiscreteParams2]: 0x26e,
  [NavicoDataType.HondaEngineDiscreteParams3]: 0x26f,
  [NavicoDataType.HondaEngineDiscreteParams4]: 0x270,
  [NavicoDataType.MainsailHeadLoad]: 0x271,
  [NavicoDataType.MainsailClewLoad]: 0x272,
  [NavicoDataType.MainsailTackLoad]: 0x273,
  [NavicoDataType.J1HeadLoad]: 0x274,
  [NavicoDataType.J1ClewLoad]: 0x275,
  [NavicoDataType.J1TackLoad]: 0x276,
  [NavicoDataType.J2HeadLoad]: 0x277,
  [NavicoDataType.J2ClewLoad]: 0x278,
  [NavicoDataType.J2TackLoad]: 0x279,
  [NavicoDataType.J3HeadLoad]: 0x27a,
  [NavicoDataType.J3ClewLoad]: 0x27b,
  [NavicoDataType.J3TackLoad]: 0x27c,
  [NavicoDataType.CodeZeroHeadLoad]: 0x27d,
  [NavicoDataType.CodeZeroClewLoad]: 0x27e,
  [NavicoDataType.CodeZeroTackLoad]: 0x27f,
  [NavicoDataType.SuzukiEngineAlertI]: 0x280,
  [NavicoDataType.EngineOilLife]: 0x281,
  [NavicoDataType.EngineOilLevelStatus]: 0x282,
  [NavicoDataType.TransFluidStatus]: 0x283,
  [NavicoDataType.HondaEcoStatusAllEngines]: 0x284,
  [NavicoDataType.OutputRpm]: 0x285,
  [NavicoDataType.SuzukiEngineAlertA]: 0x286,
  [NavicoDataType.SuzukiEngineAlertB]: 0x287,
  [NavicoDataType.SuzukiEngineAlertC]: 0x288,
  [NavicoDataType.SuzukiEngineAlertD]: 0x289,
  [NavicoDataType.SuzukiEngineAlertE]: 0x28a,
  [NavicoDataType.SuzukiEngineAlertF]: 0x28b,
  [NavicoDataType.SuzukiEngineAlertG]: 0x28c,
  [NavicoDataType.SuzukiEngineAlertH]: 0x28d,
  [NavicoDataType.SuzukiEngineAlertJ]: 0x28e,
  [NavicoDataType.SuzukiBcmFault]: 0x28f,
  [NavicoDataType.SuzukiBcmMode]: 0x290,
  [NavicoDataType.SuzukiEngineKlsStatus]: 0x291,
  [NavicoDataType.SuzukiSwitchFault]: 0x292,
  [NavicoDataType.SuzukiShiftPositionStatus]: 0x293,
  [NavicoDataType.VesselFuelUsedSeasonal]: 0x294,
  [NavicoDataType.VesselFuelCapacity]: 0x295,
  [NavicoDataType.SuzukiEngineAutoTrimStatus]: 0x296,
  [NavicoDataType.TrollingModeActive]: 0x297,
  [NavicoDataType.TrollingModeActiveMaster]: 0x298,
  [NavicoDataType.KeylessCommunicationState]: 0x299,
  [NavicoDataType.LinearActuatorPosition]: 0x29a,
  [NavicoDataType.EngineExhaustTemp]: 0x29b,
  [NavicoDataType.EngineGuardianPowerLimit]: 0x29c,
  [NavicoDataType.EngineState]: 0x29d,
  [NavicoDataType.SailingTimeToBurn]: 0x29e,
  [NavicoDataType.MastTwist]: 0x29f,
  [NavicoDataType.VhfChannel]: 0x2a0,
  [NavicoDataType.TrollingLowerUnitDirection]: 0x2a1,
  [NavicoDataType.PropulsionBatteryStatus]: 0x2a2,
  [NavicoDataType.PropulsionBatteryIsolationStatus]: 0x2a3,
  [NavicoDataType.PropulsionBatteryError]: 0x2a4,
  [NavicoDataType.PropulsionBatteryVoltage]: 0x2a5,
  [NavicoDataType.PropulsionBatteryCurrent]: 0x2a6,
  [NavicoDataType.PropulsionBatteryStateOfCharge]: 0x2a7,
  [NavicoDataType.PropulsionBatteryTimeRemaining]: 0x2a8,
  [NavicoDataType.PropulsionBatteryHighestCellTemperature]: 0x2a9,
  [NavicoDataType.PropulsionBatteryLowestCellTemperature]: 0x2aa,
  [NavicoDataType.PropulsionBatteryAverageCellTemperature]: 0x2ab,
  [NavicoDataType.PropulsionBatteryMaximumDischargeCurrent]: 0x2ac,
  [NavicoDataType.PropulsionBatteryMaximumChargeCurrent]: 0x2ad,
  [NavicoDataType.PropulsionBatteryCoolingSystemStatus]: 0x2ae,
  [NavicoDataType.PropulsionBatteryHeatingSystemStatus]: 0x2af,
  [NavicoDataType.PropulsionBatteryStorageMode]: 0x2b0,
  [NavicoDataType.PropulsionBatteryChemistry]: 0x2b1,
  [NavicoDataType.PropulsionBatteryMaximumTemperatureDerating]: 0x2b2,
  [NavicoDataType.PropulsionBatteryMaximumTemperatureShutoff]: 0x2b3,
  [NavicoDataType.PropulsionBatteryMinimumTemperatureDerating]: 0x2b4,
  [NavicoDataType.PropulsionBatteryMinimumTemperatureShutoff]: 0x2b5,
  [NavicoDataType.PropulsionBatteryUsableEnergy]: 0x2b6,
  [NavicoDataType.PropulsionBatteryStateOfHealth]: 0x2b7,
  [NavicoDataType.PropulsionBatteryDischargeCyclesCount]: 0x2b8,
  [NavicoDataType.PropulsionBatteryFullStatus]: 0x2b9,
  [NavicoDataType.PropulsionBatteryEmptyStatus]: 0x2ba,
  [NavicoDataType.PropulsionBatteryMaximumChargeSoc]: 0x2bb,
  [NavicoDataType.PropulsionBatteryMinimumDischargeSoc]: 0x2bc,
  [NavicoDataType.ActiveMotorMode]: 0x2bd,
  [NavicoDataType.MotorBrakeMode]: 0x2be,
  [NavicoDataType.MotorRotationalShaftSpeed]: 0x2bf,
  [NavicoDataType.MotorVoltage]: 0x2c0,
  [NavicoDataType.MotorCurrent]: 0x2c1,
  [NavicoDataType.MotorOperatingMode]: 0x2c2,
  [NavicoDataType.MotorTemperature]: 0x2c3,
  [NavicoDataType.MotorInverterTemperature]: 0x2c4,
  [NavicoDataType.MotorCoolantTemperature]: 0x2c5,
  [NavicoDataType.MotorGearTemperature]: 0x2c6,
  [NavicoDataType.MotorShaftTorquePercent]: 0x2c7,
  [NavicoDataType.MotorVoltageType]: 0x2c8,
  [NavicoDataType.MotorVoltageRating]: 0x2c9,
  [NavicoDataType.MotorMaxContinuousPower]: 0x2ca,
  [NavicoDataType.MotorMaxBoostPower]: 0x2cb,
  [NavicoDataType.MotorMaxTemperatureRating]: 0x2cc,
  [NavicoDataType.MotorRatedSpeed]: 0x2cd,
  [NavicoDataType.MotorMaxControllerTemperatureRating]: 0x2ce,
  [NavicoDataType.MotorShaftTorqueRating]: 0x2cf,
  [NavicoDataType.MotorDcVoltageDeratingThreshold]: 0x2d0,
  [NavicoDataType.MotorDcVoltageCutoffThreshold]: 0x2d1,
  [NavicoDataType.MotorRuntime]: 0x2d2,
  [NavicoDataType.SailingPingTimePort]: 0x2d3,
  [NavicoDataType.SailingPingTimeStbd]: 0x2d4,
  [NavicoDataType.HeadingSource]: 0x2d5,
  [NavicoDataType.Invalid]: 0x2d6,
}

/**
 * @category Enumerations
 */
export enum NavStatus {
  UnderWayUsingEngine = 'Under way using engine',
  AtAnchor = 'At anchor',
  NotUnderCommand = 'Not under command',
  RestrictedManeuverability = 'Restricted maneuverability',
  ConstrainedByHerDraught = 'Constrained by her draught',
  Moored = 'Moored',
  Aground = 'Aground',
  EngagedInFishing = 'Engaged in Fishing',
  UnderWaySailing = 'Under way sailing',
  HazardousMaterialHighSpeed = 'Hazardous material - High Speed',
  HazardousMaterialWingInGround = 'Hazardous material - Wing in Ground',
  PowerDrivenVesselTowingAstern = 'Power-driven vessel towing astern',
  PowerDrivenVesselPushingAheadOrTowingAlongside = 'Power-driven vessel pushing ahead or towing alongside',
  AisSart = 'AIS-SART',
}

/**
 * @category Enumerations
 */
export const NavStatusValues: {[key: string]: number} = {
  [NavStatus.UnderWayUsingEngine]: 0x0,
  [NavStatus.AtAnchor]: 0x1,
  [NavStatus.NotUnderCommand]: 0x2,
  [NavStatus.RestrictedManeuverability]: 0x3,
  [NavStatus.ConstrainedByHerDraught]: 0x4,
  [NavStatus.Moored]: 0x5,
  [NavStatus.Aground]: 0x6,
  [NavStatus.EngagedInFishing]: 0x7,
  [NavStatus.UnderWaySailing]: 0x8,
  [NavStatus.HazardousMaterialHighSpeed]: 0x9,
  [NavStatus.HazardousMaterialWingInGround]: 0xa,
  [NavStatus.PowerDrivenVesselTowingAstern]: 0xb,
  [NavStatus.PowerDrivenVesselPushingAheadOrTowingAlongside]: 0xc,
  [NavStatus.AisSart]: 0xe,
}

/**
 * @category Enumerations
 */
export enum OffOn {
  Off = 'Off',
  On = 'On',
}

/**
 * @category Enumerations
 */
export const OffOnValues: {[key: string]: number} = {
  [OffOn.Off]: 0x0,
  [OffOn.On]: 0x1,
}

/**
 * @category Enumerations
 */
export enum OffOnControl {
  Off = 'Off',
  On = 'On',
  Reserved = 'Reserved',
  TakeNoActionnoChange = 'Take no action (no change)',
}

/**
 * @category Enumerations
 */
export const OffOnControlValues: {[key: string]: number} = {
  [OffOnControl.Off]: 0x0,
  [OffOnControl.On]: 0x1,
  [OffOnControl.Reserved]: 0x2,
  [OffOnControl.TakeNoActionnoChange]: 0x3,
}

/**
 * @category Enumerations
 */
export enum OkWarning {
  Ok = 'OK',
  Warning = 'Warning',
}

/**
 * @category Enumerations
 */
export const OkWarningValues: {[key: string]: number} = {
  [OkWarning.Ok]: 0x0,
  [OkWarning.Warning]: 0x1,
}

/**
 * @category Enumerations
 */
export enum ParameterField {
  Acknowledge = 'Acknowledge',
  InvalidParameterField = 'Invalid parameter field',
  TemporaryError = 'Temporary error',
  ParameterOutOfRange = 'Parameter out of range',
  AccessDenied = 'Access denied',
  NotSupported = 'Not supported',
  ReadOrWriteNotSupported = 'Read or Write not supported',
}

/**
 * @category Enumerations
 */
export const ParameterFieldValues: {[key: string]: number} = {
  [ParameterField.Acknowledge]: 0x0,
  [ParameterField.InvalidParameterField]: 0x1,
  [ParameterField.TemporaryError]: 0x2,
  [ParameterField.ParameterOutOfRange]: 0x3,
  [ParameterField.AccessDenied]: 0x4,
  [ParameterField.NotSupported]: 0x5,
  [ParameterField.ReadOrWriteNotSupported]: 0x6,
}

/**
 * @category Enumerations
 */
export enum PgnErrorCode {
  Acknowledge = 'Acknowledge',
  PgnNotSupported = 'PGN not supported',
  PgnNotAvailable = 'PGN not available',
  AccessDenied = 'Access denied',
  NotSupported = 'Not supported',
  TagNotSupported = 'Tag not supported',
  ReadOrWriteNotSupported = 'Read or Write not supported',
}

/**
 * @category Enumerations
 */
export const PgnErrorCodeValues: {[key: string]: number} = {
  [PgnErrorCode.Acknowledge]: 0x0,
  [PgnErrorCode.PgnNotSupported]: 0x1,
  [PgnErrorCode.PgnNotAvailable]: 0x2,
  [PgnErrorCode.AccessDenied]: 0x3,
  [PgnErrorCode.NotSupported]: 0x4,
  [PgnErrorCode.TagNotSupported]: 0x5,
  [PgnErrorCode.ReadOrWriteNotSupported]: 0x6,
}

/**
 * @category Enumerations
 */
export enum PgnListFunction {
  TransmitPgnList = 'Transmit PGN list',
  ReceivePgnList = 'Receive PGN list',
}

/**
 * @category Enumerations
 */
export const PgnListFunctionValues: {[key: string]: number} = {
  [PgnListFunction.TransmitPgnList]: 0x0,
  [PgnListFunction.ReceivePgnList]: 0x1,
}

/**
 * @category Enumerations
 */
export enum PositionAccuracy {
  Low = 'Low',
  High = 'High',
}

/**
 * @category Enumerations
 */
export const PositionAccuracyValues: {[key: string]: number} = {
  [PositionAccuracy.Low]: 0x0,
  [PositionAccuracy.High]: 0x1,
}

/**
 * @category Enumerations
 */
export enum PositionFixDevice {
  DefaultUndefined = 'Default: undefined',
  Gps = 'GPS',
  Glonass = 'GLONASS',
  CombinedGpsglonass = 'Combined GPS/GLONASS',
  LoranC = 'Loran-C',
  Chayka = 'Chayka',
  IntegratedNavigationSystem = 'Integrated navigation system',
  Surveyed = 'Surveyed',
  Galileo = 'Galileo',
}

/**
 * @category Enumerations
 */
export const PositionFixDeviceValues: {[key: string]: number} = {
  [PositionFixDevice.DefaultUndefined]: 0x0,
  [PositionFixDevice.Gps]: 0x1,
  [PositionFixDevice.Glonass]: 0x2,
  [PositionFixDevice.CombinedGpsglonass]: 0x3,
  [PositionFixDevice.LoranC]: 0x4,
  [PositionFixDevice.Chayka]: 0x5,
  [PositionFixDevice.IntegratedNavigationSystem]: 0x6,
  [PositionFixDevice.Surveyed]: 0x7,
  [PositionFixDevice.Galileo]: 0x8,
}

/**
 * @category Enumerations
 */
export enum PowerFactor {
  Leading = 'Leading',
  Lagging = 'Lagging',
  Error = 'Error',
}

/**
 * @category Enumerations
 */
export const PowerFactorValues: {[key: string]: number} = {
  [PowerFactor.Leading]: 0x0,
  [PowerFactor.Lagging]: 0x1,
  [PowerFactor.Error]: 0x2,
}

/**
 * @category Enumerations
 */
export enum PowerMode {
  High = 'High',
  Low = 'Low',
}

/**
 * @category Enumerations
 */
export const PowerModeValues: {[key: string]: number} = {
  [PowerMode.High]: 0x0,
  [PowerMode.Low]: 0x1,
}

/**
 * @category Enumerations
 */
export enum PressureSource {
  Atmospheric = 'Atmospheric',
  Water = 'Water',
  Steam = 'Steam',
  CompressedAir = 'Compressed Air',
  Hydraulic = 'Hydraulic',
  Filter = 'Filter',
  AltimeterSetting = 'AltimeterSetting',
  Oil = 'Oil',
  Fuel = 'Fuel',
}

/**
 * @category Enumerations
 */
export const PressureSourceValues: {[key: string]: number} = {
  [PressureSource.Atmospheric]: 0x0,
  [PressureSource.Water]: 0x1,
  [PressureSource.Steam]: 0x2,
  [PressureSource.CompressedAir]: 0x3,
  [PressureSource.Hydraulic]: 0x4,
  [PressureSource.Filter]: 0x5,
  [PressureSource.AltimeterSetting]: 0x6,
  [PressureSource.Oil]: 0x7,
  [PressureSource.Fuel]: 0x8,
}

/**
 * @category Enumerations
 */
export enum Priority {
  _0 = '0',
  _1 = '1',
  _2 = '2',
  _3 = '3',
  _4 = '4',
  _5 = '5',
  _6 = '6',
  _7 = '7',
  LeaveUnchanged = 'Leave unchanged',
  ResetToDefault = 'Reset to default',
}

/**
 * @category Enumerations
 */
export const PriorityValues: {[key: string]: number} = {
  [Priority._0]: 0x0,
  [Priority._1]: 0x1,
  [Priority._2]: 0x2,
  [Priority._3]: 0x3,
  [Priority._4]: 0x4,
  [Priority._5]: 0x5,
  [Priority._6]: 0x6,
  [Priority._7]: 0x7,
  [Priority.LeaveUnchanged]: 0x8,
  [Priority.ResetToDefault]: 0x9,
}

/**
 * @category Enumerations
 */
export enum RaimFlag {
  NotInUse = 'not in use',
  InUse = 'in use',
}

/**
 * @category Enumerations
 */
export const RaimFlagValues: {[key: string]: number} = {
  [RaimFlag.NotInUse]: 0x0,
  [RaimFlag.InUse]: 0x1,
}

/**
 * @category Enumerations
 */
export enum RangeResidualMode {
  RangeResidualsWereUsedToCalculateData = 'Range residuals were used to calculate data',
  RangeResidualsWereCalculatedAfterThePosition = 'Range residuals were calculated after the position',
}

/**
 * @category Enumerations
 */
export const RangeResidualModeValues: {[key: string]: number} = {
  [RangeResidualMode.RangeResidualsWereUsedToCalculateData]: 0x0,
  [RangeResidualMode.RangeResidualsWereCalculatedAfterThePosition]: 0x1,
}

/**
 * @category Enumerations
 */
export enum RepeatIndicator {
  Initial = 'Initial',
  FirstRetransmission = 'First retransmission',
  SecondRetransmission = 'Second retransmission',
  FinalRetransmission = 'Final retransmission',
}

/**
 * @category Enumerations
 */
export const RepeatIndicatorValues: {[key: string]: number} = {
  [RepeatIndicator.Initial]: 0x0,
  [RepeatIndicator.FirstRetransmission]: 0x1,
  [RepeatIndicator.SecondRetransmission]: 0x2,
  [RepeatIndicator.FinalRetransmission]: 0x3,
}

/**
 * @category Enumerations
 */
export enum ReportingInterval {
  AsGivenByTheAutonomousMode = 'As given by the autonomous mode',
  _10Min = '10 min',
  _6Min = '6 min',
  _3Min = '3 min',
  _1Min = '1 min',
  _30Sec = '30 sec',
  _15Sec = '15 sec',
  _10Sec = '10 sec',
  _5Sec = '5 sec',
  _2SecnotApplicableToClassBCs = '2 sec (not applicable to Class B CS)',
  NextShorterReportingInterval = 'Next shorter reporting interval',
  NextLongerReportingInterval = 'Next longer reporting interval',
}

/**
 * @category Enumerations
 */
export const ReportingIntervalValues: {[key: string]: number} = {
  [ReportingInterval.AsGivenByTheAutonomousMode]: 0x0,
  [ReportingInterval._10Min]: 0x1,
  [ReportingInterval._6Min]: 0x2,
  [ReportingInterval._3Min]: 0x3,
  [ReportingInterval._1Min]: 0x4,
  [ReportingInterval._30Sec]: 0x5,
  [ReportingInterval._15Sec]: 0x6,
  [ReportingInterval._10Sec]: 0x7,
  [ReportingInterval._5Sec]: 0x8,
  [ReportingInterval._2SecnotApplicableToClassBCs]: 0x9,
  [ReportingInterval.NextShorterReportingInterval]: 0xa,
  [ReportingInterval.NextLongerReportingInterval]: 0xb,
}

/**
 * @category Enumerations
 */
export enum ResidualMode {
  Autonomous = 'Autonomous',
  DifferentialEnhanced = 'Differential enhanced',
  Estimated = 'Estimated',
  Simulator = 'Simulator',
  Manual = 'Manual',
}

/**
 * @category Enumerations
 */
export const ResidualModeValues: {[key: string]: number} = {
  [ResidualMode.Autonomous]: 0x0,
  [ResidualMode.DifferentialEnhanced]: 0x1,
  [ResidualMode.Estimated]: 0x2,
  [ResidualMode.Simulator]: 0x3,
  [ResidualMode.Manual]: 0x4,
}

/**
 * @category Enumerations
 */
export enum RodeType {
  ChainPresentlyDetected = 'Chain presently detected',
  RopePresentlyDetected = 'Rope presently detected',
}

/**
 * @category Enumerations
 */
export const RodeTypeValues: {[key: string]: number} = {
  [RodeType.ChainPresentlyDetected]: 0x0,
  [RodeType.RopePresentlyDetected]: 0x1,
}

/**
 * @category Enumerations
 */
export enum SatelliteStatus {
  NotTracked = 'Not tracked',
  Tracked = 'Tracked',
  Used = 'Used',
  NotTrackedPlusdiff = 'Not tracked+Diff',
  TrackedPlusdiff = 'Tracked+Diff',
  UsedPlusdiff = 'Used+Diff',
}

/**
 * @category Enumerations
 */
export const SatelliteStatusValues: {[key: string]: number} = {
  [SatelliteStatus.NotTracked]: 0x0,
  [SatelliteStatus.Tracked]: 0x1,
  [SatelliteStatus.Used]: 0x2,
  [SatelliteStatus.NotTrackedPlusdiff]: 0x3,
  [SatelliteStatus.TrackedPlusdiff]: 0x4,
  [SatelliteStatus.UsedPlusdiff]: 0x5,
}

/**
 * @category Enumerations
 */
export enum SbasSv {
  _120 = '120',
  _121 = '121',
  _122 = '122',
  _123 = '123',
  _124 = '124',
  _125 = '125',
  _126 = '126',
  _127 = '127',
  _128 = '128',
  _129 = '129',
  _130 = '130',
  _131 = '131',
  _132 = '132',
  _133 = '133',
  _134 = '134',
  _135 = '135',
  _136 = '136',
  _137 = '137',
  _138 = '138',
}

/**
 * @category Enumerations
 */
export const SbasSvValues: {[key: string]: number} = {
  [SbasSv._120]: 0x0,
  [SbasSv._121]: 0x1,
  [SbasSv._122]: 0x2,
  [SbasSv._123]: 0x3,
  [SbasSv._124]: 0x4,
  [SbasSv._125]: 0x5,
  [SbasSv._126]: 0x6,
  [SbasSv._127]: 0x7,
  [SbasSv._128]: 0x8,
  [SbasSv._129]: 0x9,
  [SbasSv._130]: 0xa,
  [SbasSv._131]: 0xb,
  [SbasSv._132]: 0xc,
  [SbasSv._133]: 0xd,
  [SbasSv._134]: 0xe,
  [SbasSv._135]: 0xf,
  [SbasSv._136]: 0x10,
  [SbasSv._137]: 0x11,
  [SbasSv._138]: 0x12,
}

/**
 * @category Enumerations
 */
export enum Seatalk1Command {
  DepthBelowTransducer = 'Depth Below Transducer',
  EquipmentId = 'Equipment ID',
  EngineRpmAndPitch = 'Engine RPM and PITCH',
  ApparentWindAngle = 'Apparent Wind Angle',
  ApparentWindSpeed = 'Apparent Wind Speed',
  SpeedThroughWater = 'Speed through water',
  TripMileage = 'Trip Mileage',
  TotalMileage = 'Total Mileage',
  WaterTemperaturest50 = 'Water temperature (ST50)',
  DisplayUnitsForMileageSpeed = 'Display units for Mileage & Speed',
  TotalTripLog = 'Total & Trip Log',
  SpeedThroughWaterwithAverage = 'Speed through water (with average)',
  WaterTemperature = 'Water temperature',
  SetLampIntensity = 'Set lamp Intensity',
  CancelMobmanOverBoardCondition = 'Cancel MOB (Man Over Board) condition',
  CodelockData = 'Codelock data',
  LatPosition = 'LAT position',
  LonPosition = 'LON position',
  SpeedOverGround = 'Speed over Ground',
  CourseOverGroundcog = 'Course over Ground (COG)',
  GmtTime = 'GMT-time',
  TrackKeystrokeOnGpsUnit = 'TRACK keystroke on GPS unit',
  Date = 'Date',
  SatInfo = 'Sat Info',
  LatlonrawUnfiltered = 'LAT/LON (raw unfiltered)',
  SetCountDownTimer = 'Set Count Down Timer',
  IssuedByE80MultifunctionDisplayAtInitialization = 'Issued by E-80 multifunction display at initialization',
  SelectFathomDisplayUnitsForDepthDisplay = 'Select Fathom display units for depth display',
  WindAlarm = 'Wind alarm',
  AlarmAcknowledgmentKeystroke = 'Alarm acknowledgment keystroke',
  SecondEquipmentIdDatagram = 'Second equipment-ID datagram',
  MobmanOverBoard = 'MOB (Man Over Board)',
  KeystrokeOnRaymarineA25006St60MaxiviewRemoteControl = 'Keystroke on Raymarine A25006 ST60 Maxiview Remote Control',
  SentByCourseComputerDuringSetup = 'Sent by course computer during setup',
  TargetWaypointName = 'Target waypoint name',
  SentByCourseComputer = 'Sent by course computer',
  CompassHeadingAutopilotCourseAndRudderPosition = 'Compass heading Autopilot course and Rudder position',
  NavigationToWaypointInformation = 'Navigation to waypoint information',
  Keystroke = 'Keystroke',
  SetResponseLevel = 'Set Response level',
  AutopilotParameter = 'Autopilot Parameter',
  CompassHeadingSentBySt40CompassInstrument = 'Compass heading sent by ST40 compass instrument',
  DeviceIdentification = 'Device Identification',
  SetRudderGain = 'Set Rudder gain',
  SetAutopilotParameter = 'Set Autopilot Parameter',
  EnterApSetup = 'Enter AP-Setup',
  ReplacesCommand84WhileAutopilotIsInValueSettingMode = 'Replaces command 84 while autopilot is in value setting mode',
  CompassVariation = 'Compass variation',
  VersionString = 'Version String',
  CompassHeadingAndRudderPosition = 'Compass heading and Rudder position',
  WaypointDefinition = 'Waypoint definition',
  DestinationWaypointInfo = 'Destination Waypoint Info',
  ArrivalInfo = 'Arrival Info',
  BroadcastQueryresponseToIdentifyDevices = 'Broadcast query/response to identify devices',
  GpsAndDgpsInfo = 'GPS and DGPS Info',
  UnknownMeaning = 'Unknown meaning',
  AlarmOnoffForGuard = 'Alarm ON/OFF for Guard',
}

/**
 * @category Enumerations
 */
export const Seatalk1CommandValues: {[key: string]: number} = {
  [Seatalk1Command.DepthBelowTransducer]: 0x0,
  [Seatalk1Command.EquipmentId]: 0x1,
  [Seatalk1Command.EngineRpmAndPitch]: 0x5,
  [Seatalk1Command.ApparentWindAngle]: 0x10,
  [Seatalk1Command.ApparentWindSpeed]: 0x11,
  [Seatalk1Command.SpeedThroughWater]: 0x20,
  [Seatalk1Command.TripMileage]: 0x21,
  [Seatalk1Command.TotalMileage]: 0x22,
  [Seatalk1Command.WaterTemperaturest50]: 0x23,
  [Seatalk1Command.DisplayUnitsForMileageSpeed]: 0x24,
  [Seatalk1Command.TotalTripLog]: 0x25,
  [Seatalk1Command.SpeedThroughWaterwithAverage]: 0x26,
  [Seatalk1Command.WaterTemperature]: 0x27,
  [Seatalk1Command.SetLampIntensity]: 0x30,
  [Seatalk1Command.CancelMobmanOverBoardCondition]: 0x36,
  [Seatalk1Command.CodelockData]: 0x38,
  [Seatalk1Command.LatPosition]: 0x50,
  [Seatalk1Command.LonPosition]: 0x51,
  [Seatalk1Command.SpeedOverGround]: 0x52,
  [Seatalk1Command.CourseOverGroundcog]: 0x53,
  [Seatalk1Command.GmtTime]: 0x54,
  [Seatalk1Command.TrackKeystrokeOnGpsUnit]: 0x55,
  [Seatalk1Command.Date]: 0x56,
  [Seatalk1Command.SatInfo]: 0x57,
  [Seatalk1Command.LatlonrawUnfiltered]: 0x58,
  [Seatalk1Command.SetCountDownTimer]: 0x59,
  [Seatalk1Command.IssuedByE80MultifunctionDisplayAtInitialization]: 0x61,
  [Seatalk1Command.SelectFathomDisplayUnitsForDepthDisplay]: 0x65,
  [Seatalk1Command.WindAlarm]: 0x66,
  [Seatalk1Command.AlarmAcknowledgmentKeystroke]: 0x68,
  [Seatalk1Command.SecondEquipmentIdDatagram]: 0x6c,
  [Seatalk1Command.MobmanOverBoard]: 0x6e,
  [Seatalk1Command.KeystrokeOnRaymarineA25006St60MaxiviewRemoteControl]: 0x70,
  SetLampIntensity2: 0x80,
  [Seatalk1Command.SentByCourseComputerDuringSetup]: 0x81,
  [Seatalk1Command.TargetWaypointName]: 0x82,
  [Seatalk1Command.SentByCourseComputer]: 0x83,
  [Seatalk1Command.CompassHeadingAutopilotCourseAndRudderPosition]: 0x84,
  [Seatalk1Command.NavigationToWaypointInformation]: 0x85,
  [Seatalk1Command.Keystroke]: 0x86,
  [Seatalk1Command.SetResponseLevel]: 0x87,
  [Seatalk1Command.AutopilotParameter]: 0x88,
  [Seatalk1Command.CompassHeadingSentBySt40CompassInstrument]: 0x89,
  [Seatalk1Command.DeviceIdentification]: 0x90,
  [Seatalk1Command.SetRudderGain]: 0x91,
  [Seatalk1Command.SetAutopilotParameter]: 0x92,
  [Seatalk1Command.EnterApSetup]: 0x93,
  [Seatalk1Command.ReplacesCommand84WhileAutopilotIsInValueSettingMode]: 0x95,
  [Seatalk1Command.CompassVariation]: 0x99,
  [Seatalk1Command.VersionString]: 0x9a,
  [Seatalk1Command.CompassHeadingAndRudderPosition]: 0x9c,
  [Seatalk1Command.WaypointDefinition]: 0x9e,
  [Seatalk1Command.DestinationWaypointInfo]: 0xa1,
  [Seatalk1Command.ArrivalInfo]: 0xa2,
  [Seatalk1Command.BroadcastQueryresponseToIdentifyDevices]: 0xa4,
  [Seatalk1Command.GpsAndDgpsInfo]: 0xa5,
  [Seatalk1Command.UnknownMeaning]: 0xa7,
  [Seatalk1Command.AlarmOnoffForGuard]: 0xa8,
  AlarmOnoffForGuard2: 0xab,
}

/**
 * @category Enumerations
 */
export enum SeatalkAlarmGroup {
  Instrument = 'Instrument',
  Autopilot = 'Autopilot',
  Radar = 'Radar',
  ChartPlotter = 'Chart Plotter',
  Ais = 'AIS',
  BluetoothAccessory = 'Bluetooth Accessory',
}

/**
 * @category Enumerations
 */
export const SeatalkAlarmGroupValues: {[key: string]: number} = {
  [SeatalkAlarmGroup.Instrument]: 0x0,
  [SeatalkAlarmGroup.Autopilot]: 0x1,
  [SeatalkAlarmGroup.Radar]: 0x2,
  [SeatalkAlarmGroup.ChartPlotter]: 0x3,
  [SeatalkAlarmGroup.Ais]: 0x4,
  [SeatalkAlarmGroup.BluetoothAccessory]: 0x5,
}

/**
 * @category Enumerations
 */
export enum SeatalkAlarmId {
  NoAlarm = 'No Alarm',
  ShallowDepth = 'Shallow Depth',
  DeepDepth = 'Deep Depth',
  ShallowAnchor = 'Shallow Anchor',
  DeepAnchor = 'Deep Anchor',
  OffCourse = 'Off Course',
  AwaHigh = 'AWA High',
  AwaLow = 'AWA Low',
  AwsHigh = 'AWS High',
  AwsLow = 'AWS Low',
  TwaHigh = 'TWA High',
  TwaLow = 'TWA Low',
  TwsHigh = 'TWS High',
  TwsLow = 'TWS Low',
  WpArrival = 'WP Arrival',
  BoatSpeedHigh = 'Boat Speed High',
  BoatSpeedLow = 'Boat Speed Low',
  SeaTemperatureHigh = 'Sea Temperature High',
  SeaTemperatureLow = 'Sea Temperature Low',
  PilotWatch = 'Pilot Watch',
  PilotOffCourse = 'Pilot Off Course',
  PilotWindShift = 'Pilot Wind Shift',
  PilotLowBattery = 'Pilot Low Battery',
  PilotLastMinuteOfWatch = 'Pilot Last Minute Of Watch',
  PilotNoNmeaData = 'Pilot No NMEA Data',
  PilotLargeXte = 'Pilot Large XTE',
  PilotNmeaDataError = 'Pilot NMEA DataError',
  PilotCuDisconnected = 'Pilot CU Disconnected',
  PilotAutoRelease = 'Pilot Auto Release',
  PilotWayPointAdvance = 'Pilot Way Point Advance',
  PilotDriveStopped = 'Pilot Drive Stopped',
  PilotTypeUnspecified = 'Pilot Type Unspecified',
  PilotCalibrationRequired = 'Pilot Calibration Required',
  PilotLastHeading = 'Pilot Last Heading',
  PilotNoPilot = 'Pilot No Pilot',
  PilotRouteComplete = 'Pilot Route Complete',
  PilotVariableText = 'Pilot Variable Text',
  GpsFailure = 'GPS Failure',
  Mob = 'MOB',
  Seatalk1Anchor = 'Seatalk1 Anchor',
  PilotSwappedMotorPower = 'Pilot Swapped Motor Power',
  PilotStandbyTooFastToFish = 'Pilot Standby Too Fast To Fish',
  PilotNoGpsFix = 'Pilot No GPS Fix',
  PilotNoGpsCog = 'Pilot No GPS COG',
  PilotStartUp = 'Pilot Start Up',
  PilotTooSlow = 'Pilot Too Slow',
  PilotNoCompass = 'Pilot No Compass',
  PilotRateGyroFault = 'Pilot Rate Gyro Fault',
  PilotCurrentLimit = 'Pilot Current Limit',
  PilotWayPointAdvancePort = 'Pilot Way Point Advance Port',
  PilotWayPointAdvanceStbd = 'Pilot Way Point Advance Stbd',
  PilotNoWindData = 'Pilot No Wind Data',
  PilotNoSpeedData = 'Pilot No Speed Data',
  PilotSeatalkFail1 = 'Pilot Seatalk Fail1',
  PilotSeatalkFail2 = 'Pilot Seatalk Fail2',
  PilotWarningTooFastToFish = 'Pilot Warning Too Fast To Fish',
  PilotAutoDocksideFail = 'Pilot Auto Dockside Fail',
  PilotTurnTooFast = 'Pilot Turn Too Fast',
  PilotNoNavData = 'Pilot No Nav Data',
  PilotLostWaypointData = 'Pilot Lost Waypoint Data',
  PilotEepromCorrupt = 'Pilot EEPROM Corrupt',
  PilotRudderFeedbackFail = 'Pilot Rudder Feedback Fail',
  PilotAutolearnFail1 = 'Pilot Autolearn Fail1',
  PilotAutolearnFail2 = 'Pilot Autolearn Fail2',
  PilotAutolearnFail3 = 'Pilot Autolearn Fail3',
  PilotAutolearnFail4 = 'Pilot Autolearn Fail4',
  PilotAutolearnFail5 = 'Pilot Autolearn Fail5',
  PilotAutolearnFail6 = 'Pilot Autolearn Fail6',
  PilotWarningCalRequired = 'Pilot Warning Cal Required',
  PilotWarningOffCourse = 'Pilot Warning OffCourse',
  PilotWarningXte = 'Pilot Warning XTE',
  PilotWarningWindShift = 'Pilot Warning Wind Shift',
  PilotWarningDriveShort = 'Pilot Warning Drive Short',
  PilotWarningClutchShort = 'Pilot Warning Clutch Short',
  PilotWarningSolenoidShort = 'Pilot Warning Solenoid Short',
  PilotJoystickFault = 'Pilot Joystick Fault',
  PilotNoJoystickData = 'Pilot No Joystick Data',
  PilotInvalidCommand = 'Pilot Invalid Command',
  AisTxMalfunction = 'AIS TX Malfunction',
  AisAntennaVswrFault = 'AIS Antenna VSWR fault',
  AisRxChannel1Malfunction = 'AIS Rx channel 1 malfunction',
  AisRxChannel2Malfunction = 'AIS Rx channel 2 malfunction',
  AisNoSensorPositionInUse = 'AIS No sensor position in use',
  AisNoValidSogInformation = 'AIS No valid SOG information',
  AisNoValidCogInformation = 'AIS No valid COG information',
  Ais12VAlarm = 'AIS 12V alarm',
  Ais6VAlarm = 'AIS 6V alarm',
  AisNoiseThresholdExceededChannelA = 'AIS Noise threshold exceeded channel A',
  AisNoiseThresholdExceededChannelB = 'AIS Noise threshold exceeded channel B',
  AisTransmitterPaFault = 'AIS Transmitter PA fault',
  Ais3V3Alarm = 'AIS 3V3 alarm',
  AisRxChannel70Malfunction = 'AIS Rx channel 70 malfunction',
  AisHeadingLostinvalid = 'AIS Heading lost/invalid',
  AisInternalGpsLost = 'AIS internal GPS lost',
  AisNoSensorPosition = 'AIS No sensor position',
  AisLockFailure = 'AIS Lock failure',
  AisInternalGgaTimeout = 'AIS Internal GGA timeout',
  AisProtocolStackRestart = 'AIS Protocol stack restart',
  PilotNoIpsCommunications = 'Pilot No IPS communications',
  PilotPowerOnOrSleepSwitchResetWhileEngaged = 'Pilot Power-On or Sleep-Switch Reset While Engaged',
  PilotUnexpectedResetWhileEngaged = 'Pilot Unexpected Reset While Engaged',
  AisDangerousTarget = 'AIS Dangerous Target',
  AisLostTarget = 'AIS Lost Target',
  AisSafetyRelatedMessageusedToSilence = 'AIS Safety Related Message (used to silence)',
  AisConnectionLost = 'AIS Connection Lost',
  NoFix = 'No Fix',
  PilotCompassCalibrationComplete = 'Pilot Compass Calibration Complete',
  AisTransmitterDisabledMmsiRequired = 'AIS Transmitter Disabled - MMSI Required',
  BluetoothDeviceLowBattery = 'Bluetooth Device Low Battery',
  BluetoothDeviceSleepMode = 'Bluetooth Device Sleep Mode',
  BluetoothDeviceHighBatteryTemperature = 'Bluetooth Device High Battery Temperature',
  BluetoothDeviceLostCommunications = 'Bluetooth Device Lost Communications',
}

/**
 * @category Enumerations
 */
export const SeatalkAlarmIdValues: {[key: string]: number} = {
  [SeatalkAlarmId.NoAlarm]: 0x0,
  [SeatalkAlarmId.ShallowDepth]: 0x1,
  [SeatalkAlarmId.DeepDepth]: 0x2,
  [SeatalkAlarmId.ShallowAnchor]: 0x3,
  [SeatalkAlarmId.DeepAnchor]: 0x4,
  [SeatalkAlarmId.OffCourse]: 0x5,
  [SeatalkAlarmId.AwaHigh]: 0x6,
  [SeatalkAlarmId.AwaLow]: 0x7,
  [SeatalkAlarmId.AwsHigh]: 0x8,
  [SeatalkAlarmId.AwsLow]: 0x9,
  [SeatalkAlarmId.TwaHigh]: 0xa,
  [SeatalkAlarmId.TwaLow]: 0xb,
  [SeatalkAlarmId.TwsHigh]: 0xc,
  [SeatalkAlarmId.TwsLow]: 0xd,
  [SeatalkAlarmId.WpArrival]: 0xe,
  [SeatalkAlarmId.BoatSpeedHigh]: 0xf,
  [SeatalkAlarmId.BoatSpeedLow]: 0x10,
  [SeatalkAlarmId.SeaTemperatureHigh]: 0x11,
  [SeatalkAlarmId.SeaTemperatureLow]: 0x12,
  [SeatalkAlarmId.PilotWatch]: 0x13,
  [SeatalkAlarmId.PilotOffCourse]: 0x14,
  [SeatalkAlarmId.PilotWindShift]: 0x15,
  [SeatalkAlarmId.PilotLowBattery]: 0x16,
  [SeatalkAlarmId.PilotLastMinuteOfWatch]: 0x17,
  [SeatalkAlarmId.PilotNoNmeaData]: 0x18,
  [SeatalkAlarmId.PilotLargeXte]: 0x19,
  [SeatalkAlarmId.PilotNmeaDataError]: 0x1a,
  [SeatalkAlarmId.PilotCuDisconnected]: 0x1b,
  [SeatalkAlarmId.PilotAutoRelease]: 0x1c,
  [SeatalkAlarmId.PilotWayPointAdvance]: 0x1d,
  [SeatalkAlarmId.PilotDriveStopped]: 0x1e,
  [SeatalkAlarmId.PilotTypeUnspecified]: 0x1f,
  [SeatalkAlarmId.PilotCalibrationRequired]: 0x20,
  [SeatalkAlarmId.PilotLastHeading]: 0x21,
  [SeatalkAlarmId.PilotNoPilot]: 0x22,
  [SeatalkAlarmId.PilotRouteComplete]: 0x23,
  [SeatalkAlarmId.PilotVariableText]: 0x24,
  [SeatalkAlarmId.GpsFailure]: 0x25,
  [SeatalkAlarmId.Mob]: 0x26,
  [SeatalkAlarmId.Seatalk1Anchor]: 0x27,
  [SeatalkAlarmId.PilotSwappedMotorPower]: 0x28,
  [SeatalkAlarmId.PilotStandbyTooFastToFish]: 0x29,
  [SeatalkAlarmId.PilotNoGpsFix]: 0x2a,
  [SeatalkAlarmId.PilotNoGpsCog]: 0x2b,
  [SeatalkAlarmId.PilotStartUp]: 0x2c,
  [SeatalkAlarmId.PilotTooSlow]: 0x2d,
  [SeatalkAlarmId.PilotNoCompass]: 0x2e,
  [SeatalkAlarmId.PilotRateGyroFault]: 0x2f,
  [SeatalkAlarmId.PilotCurrentLimit]: 0x30,
  [SeatalkAlarmId.PilotWayPointAdvancePort]: 0x31,
  [SeatalkAlarmId.PilotWayPointAdvanceStbd]: 0x32,
  [SeatalkAlarmId.PilotNoWindData]: 0x33,
  [SeatalkAlarmId.PilotNoSpeedData]: 0x34,
  [SeatalkAlarmId.PilotSeatalkFail1]: 0x35,
  [SeatalkAlarmId.PilotSeatalkFail2]: 0x36,
  [SeatalkAlarmId.PilotWarningTooFastToFish]: 0x37,
  [SeatalkAlarmId.PilotAutoDocksideFail]: 0x38,
  [SeatalkAlarmId.PilotTurnTooFast]: 0x39,
  [SeatalkAlarmId.PilotNoNavData]: 0x3a,
  [SeatalkAlarmId.PilotLostWaypointData]: 0x3b,
  [SeatalkAlarmId.PilotEepromCorrupt]: 0x3c,
  [SeatalkAlarmId.PilotRudderFeedbackFail]: 0x3d,
  [SeatalkAlarmId.PilotAutolearnFail1]: 0x3e,
  [SeatalkAlarmId.PilotAutolearnFail2]: 0x3f,
  [SeatalkAlarmId.PilotAutolearnFail3]: 0x40,
  [SeatalkAlarmId.PilotAutolearnFail4]: 0x41,
  [SeatalkAlarmId.PilotAutolearnFail5]: 0x42,
  [SeatalkAlarmId.PilotAutolearnFail6]: 0x43,
  [SeatalkAlarmId.PilotWarningCalRequired]: 0x44,
  [SeatalkAlarmId.PilotWarningOffCourse]: 0x45,
  [SeatalkAlarmId.PilotWarningXte]: 0x46,
  [SeatalkAlarmId.PilotWarningWindShift]: 0x47,
  [SeatalkAlarmId.PilotWarningDriveShort]: 0x48,
  [SeatalkAlarmId.PilotWarningClutchShort]: 0x49,
  [SeatalkAlarmId.PilotWarningSolenoidShort]: 0x4a,
  [SeatalkAlarmId.PilotJoystickFault]: 0x4b,
  [SeatalkAlarmId.PilotNoJoystickData]: 0x4c,
  [SeatalkAlarmId.PilotInvalidCommand]: 0x50,
  [SeatalkAlarmId.AisTxMalfunction]: 0x51,
  [SeatalkAlarmId.AisAntennaVswrFault]: 0x52,
  [SeatalkAlarmId.AisRxChannel1Malfunction]: 0x53,
  [SeatalkAlarmId.AisRxChannel2Malfunction]: 0x54,
  [SeatalkAlarmId.AisNoSensorPositionInUse]: 0x55,
  [SeatalkAlarmId.AisNoValidSogInformation]: 0x56,
  [SeatalkAlarmId.AisNoValidCogInformation]: 0x57,
  [SeatalkAlarmId.Ais12VAlarm]: 0x58,
  [SeatalkAlarmId.Ais6VAlarm]: 0x59,
  [SeatalkAlarmId.AisNoiseThresholdExceededChannelA]: 0x5a,
  [SeatalkAlarmId.AisNoiseThresholdExceededChannelB]: 0x5b,
  [SeatalkAlarmId.AisTransmitterPaFault]: 0x5c,
  [SeatalkAlarmId.Ais3V3Alarm]: 0x5d,
  [SeatalkAlarmId.AisRxChannel70Malfunction]: 0x5e,
  [SeatalkAlarmId.AisHeadingLostinvalid]: 0x5f,
  [SeatalkAlarmId.AisInternalGpsLost]: 0x60,
  [SeatalkAlarmId.AisNoSensorPosition]: 0x61,
  [SeatalkAlarmId.AisLockFailure]: 0x62,
  [SeatalkAlarmId.AisInternalGgaTimeout]: 0x63,
  [SeatalkAlarmId.AisProtocolStackRestart]: 0x64,
  [SeatalkAlarmId.PilotNoIpsCommunications]: 0x65,
  [SeatalkAlarmId.PilotPowerOnOrSleepSwitchResetWhileEngaged]: 0x66,
  [SeatalkAlarmId.PilotUnexpectedResetWhileEngaged]: 0x67,
  [SeatalkAlarmId.AisDangerousTarget]: 0x68,
  [SeatalkAlarmId.AisLostTarget]: 0x69,
  [SeatalkAlarmId.AisSafetyRelatedMessageusedToSilence]: 0x6a,
  [SeatalkAlarmId.AisConnectionLost]: 0x6b,
  [SeatalkAlarmId.NoFix]: 0x6c,
  [SeatalkAlarmId.PilotCompassCalibrationComplete]: 0x70,
  [SeatalkAlarmId.AisTransmitterDisabledMmsiRequired]: 0x71,
  [SeatalkAlarmId.BluetoothDeviceLowBattery]: 0x7a,
  [SeatalkAlarmId.BluetoothDeviceSleepMode]: 0x7b,
  [SeatalkAlarmId.BluetoothDeviceHighBatteryTemperature]: 0x7c,
  [SeatalkAlarmId.BluetoothDeviceLostCommunications]: 0x7d,
}

/**
 * @category Enumerations
 */
export enum SeatalkAlarmStatus {
  AlarmConditionNotMet = 'Alarm condition not met',
  AlarmConditionMetAndNotSilenced = 'Alarm condition met and not silenced',
  AlarmConditionMetAndSilenced = 'Alarm condition met and silenced',
}

/**
 * @category Enumerations
 */
export const SeatalkAlarmStatusValues: {[key: string]: number} = {
  [SeatalkAlarmStatus.AlarmConditionNotMet]: 0x0,
  [SeatalkAlarmStatus.AlarmConditionMetAndNotSilenced]: 0x1,
  [SeatalkAlarmStatus.AlarmConditionMetAndSilenced]: 0x2,
}

/**
 * @category Enumerations
 */
export enum SeatalkCommand {
  Seatalk1 = 'Seatalk1',
  HullType = 'Hull Type',
  AutoTurn = 'Auto Turn',
  Settings = 'Settings',
  RudderLimit = 'Rudder Limit',
  RudderDamping = 'Rudder Damping',
  RudderOffset = 'Rudder Offset',
  ReverseRudderReference = 'Reverse Rudder Reference',
  CruiseSpeed = 'Cruise Speed',
  PowerSteerMode = 'Power Steer Mode',
  WindType = 'Wind Type',
  CalibrationLock = 'Calibration Lock',
  GybeInhibit = 'Gybe Inhibit',
  CompassOffset = 'Compass Offset',
  DriveType = 'Drive Type',
  ResponseLevel = 'Response Level',
  MaxCompassDeviation = 'Max Compass Deviation',
  HardOverTime = 'Hard Over Time',
  DebugLevel = 'Debug Level',
  CompassLock = 'Compass Lock',
  SpeedInput = 'Speed Input',
  CompassLinearisationProgress = 'Compass Linearisation Progress',
  AcuDebugLevel = 'ACU Debug Level',
  WindShiftAlarm = 'Wind Shift Alarm',
  AutoTurnTimeout = 'Auto Turn Timeout',
}

/**
 * @category Enumerations
 */
export const SeatalkCommandValues: {[key: string]: number} = {
  [SeatalkCommand.Seatalk1]: 0x81,
  [SeatalkCommand.HullType]: 0x16,
  [SeatalkCommand.AutoTurn]: 0x26,
  [SeatalkCommand.Settings]: 0xc,
  [SeatalkCommand.RudderLimit]: 0x2,
  [SeatalkCommand.RudderDamping]: 0x3,
  [SeatalkCommand.RudderOffset]: 0x4,
  [SeatalkCommand.ReverseRudderReference]: 0x6,
  [SeatalkCommand.CruiseSpeed]: 0x8,
  [SeatalkCommand.PowerSteerMode]: 0xb,
  [SeatalkCommand.WindType]: 0xf,
  AutoTurn2: 0x11,
  [SeatalkCommand.CalibrationLock]: 0x12,
  [SeatalkCommand.GybeInhibit]: 0x14,
  [SeatalkCommand.CompassOffset]: 0x15,
  [SeatalkCommand.DriveType]: 0x17,
  [SeatalkCommand.ResponseLevel]: 0x19,
  [SeatalkCommand.MaxCompassDeviation]: 0x1a,
  [SeatalkCommand.HardOverTime]: 0x1b,
  [SeatalkCommand.DebugLevel]: 0x1d,
  [SeatalkCommand.CompassLock]: 0x21,
  [SeatalkCommand.SpeedInput]: 0x22,
  [SeatalkCommand.CompassLinearisationProgress]: 0x23,
  [SeatalkCommand.AcuDebugLevel]: 0x24,
  [SeatalkCommand.WindShiftAlarm]: 0x25,
  [SeatalkCommand.AutoTurnTimeout]: 0x27,
}

/**
 * @category Enumerations
 */
export enum SeatalkDeviceId {
  S100 = 'S100',
  CourseComputer = 'Course Computer',
}

/**
 * @category Enumerations
 */
export const SeatalkDeviceIdValues: {[key: string]: number} = {
  [SeatalkDeviceId.S100]: 0x3,
  [SeatalkDeviceId.CourseComputer]: 0x5,
}

/**
 * @category Enumerations
 */
export enum SeatalkDisplayColor {
  Day1 = 'Day 1',
  Day2 = 'Day 2',
  Redblack = 'Red/Black',
  Inverse = 'Inverse',
}

/**
 * @category Enumerations
 */
export const SeatalkDisplayColorValues: {[key: string]: number} = {
  [SeatalkDisplayColor.Day1]: 0x0,
  [SeatalkDisplayColor.Day2]: 0x2,
  [SeatalkDisplayColor.Redblack]: 0x3,
  [SeatalkDisplayColor.Inverse]: 0x4,
}

/**
 * @category Enumerations
 */
export enum SeatalkKeystroke {
  Auto = 'Auto',
  Standby = 'Standby',
  Wind = 'Wind',
  _1 = '-1',
  _10 = '-10',
  Plus1 = '+1',
  Plus10 = '+10',
  _1And10 = '-1 and -10',
  Plus1AndPlus10 = '+1 and +10',
  Track = 'Track',
}

/**
 * @category Enumerations
 */
export const SeatalkKeystrokeValues: {[key: string]: number} = {
  [SeatalkKeystroke.Auto]: 0x1,
  [SeatalkKeystroke.Standby]: 0x2,
  [SeatalkKeystroke.Wind]: 0x3,
  [SeatalkKeystroke._1]: 0x5,
  [SeatalkKeystroke._10]: 0x6,
  [SeatalkKeystroke.Plus1]: 0x7,
  [SeatalkKeystroke.Plus10]: 0x8,
  [SeatalkKeystroke._1And10]: 0x21,
  [SeatalkKeystroke.Plus1AndPlus10]: 0x22,
  [SeatalkKeystroke.Track]: 0x23,
}

/**
 * @category Enumerations
 */
export enum SeatalkMessageId {
  Seatalk1Encoded = 'Seatalk 1 Encoded',
  Display = 'Display',
  PilotConfiguration = 'Pilot Configuration',
}

/**
 * @category Enumerations
 */
export const SeatalkMessageIdValues: {[key: string]: number} = {
  [SeatalkMessageId.Seatalk1Encoded]: 0xf0,
  [SeatalkMessageId.Display]: 0x8c,
  [SeatalkMessageId.PilotConfiguration]: 0x6c,
}

/**
 * @category Enumerations
 */
export enum SeatalkNetworkGroup {
  None = 'None',
  Helm1 = 'Helm 1',
  Helm2 = 'Helm 2',
  Cockpit = 'Cockpit',
  Flybridge = 'Flybridge',
  Mast = 'Mast',
  Group1 = 'Group 1',
  Group2 = 'Group 2',
  Group3 = 'Group 3',
  Group4 = 'Group 4',
  Group5 = 'Group 5',
}

/**
 * @category Enumerations
 */
export const SeatalkNetworkGroupValues: {[key: string]: number} = {
  [SeatalkNetworkGroup.None]: 0x0,
  [SeatalkNetworkGroup.Helm1]: 0x1,
  [SeatalkNetworkGroup.Helm2]: 0x2,
  [SeatalkNetworkGroup.Cockpit]: 0x3,
  [SeatalkNetworkGroup.Flybridge]: 0x4,
  [SeatalkNetworkGroup.Mast]: 0x5,
  [SeatalkNetworkGroup.Group1]: 0x6,
  [SeatalkNetworkGroup.Group2]: 0x7,
  [SeatalkNetworkGroup.Group3]: 0x8,
  [SeatalkNetworkGroup.Group4]: 0x9,
  [SeatalkNetworkGroup.Group5]: 0xa,
}

/**
 * @category Enumerations
 */
export enum SeatalkPilotHullType {
  Sail = 'Sail',
  SailslowTurn = 'Sail (slow turn)',
  SailCatamaran = 'Sail Catamaran',
  PowerslowTurn = 'Power (slow turn)',
  PowerfastTurn = 'Power (fast turn)',
  Power = 'Power',
}

/**
 * @category Enumerations
 */
export const SeatalkPilotHullTypeValues: {[key: string]: number} = {
  [SeatalkPilotHullType.Sail]: 0x0,
  [SeatalkPilotHullType.SailslowTurn]: 0x1,
  [SeatalkPilotHullType.SailCatamaran]: 0x2,
  [SeatalkPilotHullType.PowerslowTurn]: 0x3,
  [SeatalkPilotHullType.PowerfastTurn]: 0x4,
  [SeatalkPilotHullType.Power]: 0x8,
}

/**
 * @category Enumerations
 */
export enum SeatalkPilotMode {
  Standby = 'Standby',
  Auto = 'Auto',
  Wind = 'Wind',
  Track = 'Track',
}

/**
 * @category Enumerations
 */
export const SeatalkPilotModeValues: {[key: string]: number} = {
  [SeatalkPilotMode.Standby]: 0x40,
  [SeatalkPilotMode.Auto]: 0x42,
  [SeatalkPilotMode.Wind]: 0x46,
  [SeatalkPilotMode.Track]: 0x4a,
}

/**
 * @category Enumerations
 */
export enum SeatalkPilotMode16 {
  Standby = 'Standby',
  AutoCompassCommanded = 'Auto, compass commanded',
  VaneWindMode = 'Vane, Wind Mode',
  TrackMode = 'Track Mode',
  NoDriftCogReferencedinTrackCourseChanges = 'No Drift, COG referenced (In track, course changes)',
}

/**
 * @category Enumerations
 */
export const SeatalkPilotMode16Values: {[key: string]: number} = {
  [SeatalkPilotMode16.Standby]: 0x0,
  [SeatalkPilotMode16.AutoCompassCommanded]: 0x40,
  [SeatalkPilotMode16.VaneWindMode]: 0x100,
  [SeatalkPilotMode16.TrackMode]: 0x180,
  [SeatalkPilotMode16.NoDriftCogReferencedinTrackCourseChanges]: 0x181,
}

/**
 * @category Enumerations
 */
export enum SeatalkShared {
  Shared = 'Shared',
  NotShared = 'Not Shared',
}

/**
 * @category Enumerations
 */
export const SeatalkSharedValues: {[key: string]: number} = {
  [SeatalkShared.Shared]: 0x1,
  [SeatalkShared.NotShared]: 0x2,
}

/**
 * @category Enumerations
 */
export enum SerialBitRate {
  _25 = '25',
  _50 = '50',
  _100 = '100',
  _200 = '200',
  _300 = '300',
  _600 = '600',
  _1200 = '1200',
  _2400 = '2400',
  _4800 = '4800',
  _9600 = '9600',
  _19200 = '19200',
  _38400 = '38400',
  _57600 = '57600',
}

/**
 * @category Enumerations
 */
export const SerialBitRateValues: {[key: string]: number} = {
  [SerialBitRate._25]: 0x0,
  [SerialBitRate._50]: 0x1,
  [SerialBitRate._100]: 0x2,
  [SerialBitRate._200]: 0x3,
  [SerialBitRate._300]: 0x4,
  [SerialBitRate._600]: 0x5,
  [SerialBitRate._1200]: 0x6,
  [SerialBitRate._2400]: 0x7,
  [SerialBitRate._4800]: 0x8,
  [SerialBitRate._9600]: 0x9,
  [SerialBitRate._19200]: 0xa,
  [SerialBitRate._38400]: 0xb,
  [SerialBitRate._57600]: 0xc,
}

/**
 * @category Enumerations
 */
export enum SerialDetectionMode {
  AutoBitRate = 'Auto bit rate',
  ManualBitRate = 'Manual bit rate',
}

/**
 * @category Enumerations
 */
export const SerialDetectionModeValues: {[key: string]: number} = {
  [SerialDetectionMode.AutoBitRate]: 0x0,
  [SerialDetectionMode.ManualBitRate]: 0x1,
}

/**
 * @category Enumerations
 */
export enum ShipType {
  Unavailable = 'Unavailable',
  WingInGround = 'Wing In Ground',
  WingInGroundhazardCatX = 'Wing In Ground (hazard cat X)',
  WingInGroundhazardCatY = 'Wing In Ground (hazard cat Y)',
  WingInGroundhazardCatZ = 'Wing In Ground (hazard cat Z)',
  WingInGroundhazardCatOs = 'Wing In Ground (hazard cat OS)',
  WingInGroundnoAdditionalInformation = 'Wing In Ground (no additional information)',
  Fishing = 'Fishing',
  Towing = 'Towing',
  TowingExceeds200MOrWiderThan25M = 'Towing exceeds 200m or wider than 25m',
  EngagedInDredgingOrUnderwaterOperations = 'Engaged in dredging or underwater operations',
  EngagedInDivingOperations = 'Engaged in diving operations',
  EngagedInMilitaryOperations = 'Engaged in military operations',
  Sailing = 'Sailing',
  Pleasure = 'Pleasure',
  HighSpeedCraft = 'High speed craft',
  HighSpeedCrafthazardCatX = 'High speed craft (hazard cat X)',
  HighSpeedCrafthazardCatY = 'High speed craft (hazard cat Y)',
  HighSpeedCrafthazardCatZ = 'High speed craft (hazard cat Z)',
  HighSpeedCrafthazardCatOs = 'High speed craft (hazard cat OS)',
  HighSpeedCraftnoAdditionalInformation = 'High speed craft (no additional information)',
  PilotVessel = 'Pilot vessel',
  Sar = 'SAR',
  Tug = 'Tug',
  PortTender = 'Port tender',
  AntiPollution = 'Anti-pollution',
  LawEnforcement = 'Law enforcement',
  Spare = 'Spare',
  Spare2 = 'Spare #2',
  Medical = 'Medical',
  ShipsAndAircraftOfStatesNotPartiesToAnArmedConflict = 'Ships and aircraft of States not parties to an armed conflict',
  PassengerShip = 'Passenger ship',
  PassengerShiphazardCatX = 'Passenger ship (hazard cat X)',
  PassengerShiphazardCatY = 'Passenger ship (hazard cat Y)',
  PassengerShiphazardCatZ = 'Passenger ship (hazard cat Z)',
  PassengerShiphazardCatOs = 'Passenger ship (hazard cat OS)',
  PassengerShipnoAdditionalInformation = 'Passenger ship (no additional information)',
  CargoShip = 'Cargo ship',
  CargoShiphazardCatX = 'Cargo ship (hazard cat X)',
  CargoShiphazardCatY = 'Cargo ship (hazard cat Y)',
  CargoShiphazardCatZ = 'Cargo ship (hazard cat Z)',
  CargoShiphazardCatOs = 'Cargo ship (hazard cat OS)',
  CargoShipnoAdditionalInformation = 'Cargo ship (no additional information)',
  Tanker = 'Tanker',
  TankerhazardCatX = 'Tanker (hazard cat X)',
  TankerhazardCatY = 'Tanker (hazard cat Y)',
  TankerhazardCatZ = 'Tanker (hazard cat Z)',
  TankerhazardCatOs = 'Tanker (hazard cat OS)',
  TankernoAdditionalInformation = 'Tanker (no additional information)',
  Other = 'Other',
  OtherhazardCatX = 'Other (hazard cat X)',
  OtherhazardCatY = 'Other (hazard cat Y)',
  OtherhazardCatZ = 'Other (hazard cat Z)',
  OtherhazardCatOs = 'Other (hazard cat OS)',
  OthernoAdditionalInformation = 'Other (no additional information)',
}

/**
 * @category Enumerations
 */
export const ShipTypeValues: {[key: string]: number} = {
  [ShipType.Unavailable]: 0x0,
  [ShipType.WingInGround]: 0x14,
  [ShipType.WingInGroundhazardCatX]: 0x15,
  [ShipType.WingInGroundhazardCatY]: 0x16,
  [ShipType.WingInGroundhazardCatZ]: 0x17,
  [ShipType.WingInGroundhazardCatOs]: 0x18,
  [ShipType.WingInGroundnoAdditionalInformation]: 0x1d,
  [ShipType.Fishing]: 0x1e,
  [ShipType.Towing]: 0x1f,
  [ShipType.TowingExceeds200MOrWiderThan25M]: 0x20,
  [ShipType.EngagedInDredgingOrUnderwaterOperations]: 0x21,
  [ShipType.EngagedInDivingOperations]: 0x22,
  [ShipType.EngagedInMilitaryOperations]: 0x23,
  [ShipType.Sailing]: 0x24,
  [ShipType.Pleasure]: 0x25,
  [ShipType.HighSpeedCraft]: 0x28,
  [ShipType.HighSpeedCrafthazardCatX]: 0x29,
  [ShipType.HighSpeedCrafthazardCatY]: 0x2a,
  [ShipType.HighSpeedCrafthazardCatZ]: 0x2b,
  [ShipType.HighSpeedCrafthazardCatOs]: 0x2c,
  [ShipType.HighSpeedCraftnoAdditionalInformation]: 0x31,
  [ShipType.PilotVessel]: 0x32,
  [ShipType.Sar]: 0x33,
  [ShipType.Tug]: 0x34,
  [ShipType.PortTender]: 0x35,
  [ShipType.AntiPollution]: 0x36,
  [ShipType.LawEnforcement]: 0x37,
  [ShipType.Spare]: 0x38,
  [ShipType.Spare2]: 0x39,
  [ShipType.Medical]: 0x3a,
  [ShipType.ShipsAndAircraftOfStatesNotPartiesToAnArmedConflict]: 0x3b,
  [ShipType.PassengerShip]: 0x3c,
  [ShipType.PassengerShiphazardCatX]: 0x3d,
  [ShipType.PassengerShiphazardCatY]: 0x3e,
  [ShipType.PassengerShiphazardCatZ]: 0x3f,
  [ShipType.PassengerShiphazardCatOs]: 0x40,
  [ShipType.PassengerShipnoAdditionalInformation]: 0x45,
  [ShipType.CargoShip]: 0x46,
  [ShipType.CargoShiphazardCatX]: 0x47,
  [ShipType.CargoShiphazardCatY]: 0x48,
  [ShipType.CargoShiphazardCatZ]: 0x49,
  [ShipType.CargoShiphazardCatOs]: 0x4a,
  [ShipType.CargoShipnoAdditionalInformation]: 0x4f,
  [ShipType.Tanker]: 0x50,
  [ShipType.TankerhazardCatX]: 0x51,
  [ShipType.TankerhazardCatY]: 0x52,
  [ShipType.TankerhazardCatZ]: 0x53,
  [ShipType.TankerhazardCatOs]: 0x54,
  [ShipType.TankernoAdditionalInformation]: 0x59,
  [ShipType.Other]: 0x5a,
  [ShipType.OtherhazardCatX]: 0x5b,
  [ShipType.OtherhazardCatY]: 0x5c,
  [ShipType.OtherhazardCatZ]: 0x5d,
  [ShipType.OtherhazardCatOs]: 0x5e,
  [ShipType.OthernoAdditionalInformation]: 0x63,
}

/**
 * @category Enumerations
 */
export enum SimnetAlarmCommand {
  Deactivate = 'Deactivate',
  Activate = 'Activate',
  Acknowledge = 'Acknowledge',
  Silence = 'Silence',
  TackgybeConfirm = 'Tack/Gybe Confirm',
  AlarmHistory = 'Alarm History',
  MobActivated = 'MOB Activated',
  MobCancelled = 'MOB Cancelled',
}

/**
 * @category Enumerations
 */
export const SimnetAlarmCommandValues: {[key: string]: number} = {
  [SimnetAlarmCommand.Deactivate]: 0x38,
  [SimnetAlarmCommand.Activate]: 0x39,
  [SimnetAlarmCommand.Acknowledge]: 0x3a,
  [SimnetAlarmCommand.Silence]: 0x44,
  [SimnetAlarmCommand.TackgybeConfirm]: 0x58,
  [SimnetAlarmCommand.AlarmHistory]: 0x68,
  [SimnetAlarmCommand.MobActivated]: 0x6b,
  [SimnetAlarmCommand.MobCancelled]: 0x6c,
}

/**
 * @category Enumerations
 */
export enum SimnetAlarmId {
  ShallowWater = 'Shallow water',
  DeepWater = 'Deep water',
  AnchorDepth = 'Anchor depth',
  TrueWindShift = 'True wind shift',
  TrueWindHigh = 'True wind high',
  TrueWindLow = 'True wind low',
  LowBoatSpeed = 'Low boat speed',
  HighVoltage = 'High voltage',
  LowVoltage = 'Low voltage',
  DepthDataMissing = 'Depth data missing',
  WindDataMissing = 'Wind data missing',
  NavDataMissing = 'Nav data missing',
  HeadingMissing = 'Heading missing',
  Xte = 'XTE',
  RudderDataMissing = 'Rudder data missing',
  RudderControllerFault = 'Rudder controller fault',
  NoRudderResponse = 'No rudder response',
  RudderDriveOverload = 'Rudder drive overload',
  HighInternalTemperature = 'High internal temperature',
  ApClutchOverload = 'AP clutch overload',
  ApClutchDisengaged = 'AP clutch disengaged',
  HighDriveSupply = 'High drive supply',
  LowDriveSupply = 'Low drive supply',
  NoActiveAutopilotControlUnit = 'No active autopilot control unit',
  NoAutopilotComputer = 'No autopilot computer',
  MemoryFail = 'Memory fail',
  WaterTempMissing = 'Water temp missing',
  LowWaterTemp = 'Low water temp',
  HighWaterTemp = 'High water temp',
  WaterTempRate = 'Water temp rate',
  Fish = 'Fish',
  NoGpsFix = 'No GPS fix',
  Waasdgps = 'WAAS/DGPS',
  Arrival = 'Arrival',
  Anchor = 'Anchor',
  FuelLow = 'Fuel low',
  FuelHigh = 'Fuel high',
  TankLow = 'Tank low',
  TankHigh = 'Tank high',
  Bep = 'BEP',
  WaypointRadius = 'Waypoint radius',
  Cpa = 'CPA',
  AisRangeToVessel = 'AIS range to vessel',
  AisVesselLost = 'AIS vessel lost',
  VesselMessage = 'Vessel message',
  Lightning = 'Lightning',
  SevereWeather = 'Severe weather',
  Storm = 'Storm',
  EngineCheck = 'Engine Check',
  EngineOverTemperature = 'Engine over temperature',
  EngineLowOilPressure = 'Engine low oil pressure',
  EngineLowOilLevel = 'Engine low oil level',
  EngineLowFuelPressure = 'Engine low fuel pressure',
  EngineLowVoltage = 'Engine low voltage',
  EngineLowCoolantLevel = 'Engine low coolant level',
  EngineWaterFlow = 'Engine water flow',
  EngineWaterInFuel = 'Engine water in fuel',
  EngineCharge = 'Engine charge',
  EnginePreheat = 'Engine preheat',
  EngineHighBoostPressure = 'Engine high boost pressure',
  EngineRevLimit = 'Engine rev limit',
  EngineEgrSystem = 'Engine EGR system',
  EngineThrottlePosition = 'Engine throttle position',
  EngineEmergencyStop = 'Engine emergency stop',
  EngineWarningLevel1 = 'Engine warning level 1',
  EngineWarningLevel2 = 'Engine warning level 2',
  EnginePowerReduction = 'Engine power reduction',
  EngineMaintenance = 'Engine maintenance',
  EngineCommError = 'Engine comm error',
  EngineThrottle = 'Engine throttle',
  EngineStartProtect = 'Engine start protect',
  EngineShuttingDown = 'Engine shutting down',
  TransmissionCheck = 'Transmission Check',
  TransmissionOverTemperature = 'Transmission over temperature',
  TransmissionLowOilPressure = 'Transmission low oil pressure',
  TransmissionLowOilLevel = 'Transmission low oil level',
  SailDrive = 'Sail drive',
  FreshWaterLow = 'Fresh water low',
  FreshWaterHigh = 'Fresh water high',
  GrayWaterLow = 'Gray water low',
  GrayWaterHigh = 'Gray water high',
  LiveWellLow = 'Live well low',
  LiveWellHigh = 'Live well high',
  OilLow = 'Oil low',
  OilHigh = 'Oil high',
  BlackWaterLow = 'Black water low',
  BlackWaterHigh = 'Black water high',
  WeatherDataMissing = 'Weather data missing',
  ApPositionDataMissing = 'AP Position data missing',
  ApSpeedDataMissing = 'AP Speed data missing',
  ApDepthDataMissing = 'AP Depth data missing',
  ApHeadingDataMissing = 'AP Heading data missing',
  ApNavDataMissing = 'AP Nav data missing',
  ApOffCourse = 'AP Off course',
  ApRudderDataMissing = 'AP Rudder data missing',
  ApWindDataMissing = 'AP Wind data missing',
  RadarGuardZone = 'Radar guard zone',
  MarpaTargetLost = 'MARPA target lost',
  MarpaUnavailable = 'MARPA unavailable',
  DangerousVessel = 'Dangerous vessel',
  RadarError = 'Radar error',
  CZoneCritical = 'CZone critical',
  CZoneImportant = 'CZone important',
  CZoneStandard = 'CZone standard',
  CZoneWarning = 'CZone warning',
  EvcComError = 'EVC Com Error',
  EvcOverride = 'EVC override',
  HighDriveTemperature = 'High drive temperature',
  DriveInhibit = 'Drive inhibit',
  CanBusSupplyOverload = 'CAN bus supply overload',
  DriveRefVoltageMissing = 'Drive ref voltage missing',
  RudderLimit = 'Rudder limit',
  CompassDifference = 'Compass difference',
  ApLowBoatSpeed = 'AP Low boat speed',
  MonitorCompassMissing = 'Monitor compass missing',
  CrossTrackDistanceLimit = 'Cross track distance limit',
  EndOfRoute = 'End of route',
  CompassAlignment = 'Compass alignment',
  RAIM = 'R.A.I.M',
  OffHeading = 'Off heading',
  SupplyVoltage = 'Supply voltage',
  LowCanBusVoltage = 'Low CAN bus voltage',
  CanBusFailure = 'CAN bus failure',
  DriveReadyMissing = 'Drive ready missing',
  DriveComputerMissing = 'Drive computer missing',
  ExternalModeIllegal = 'External mode illegal',
  RudderTooSlow = 'Rudder too slow',
  WheelOver = 'Wheel over',
  ThrusterInhibited = 'Thruster inhibited',
  CheckHeading = 'Check heading',
  TrueWindSpeedHigh = 'True wind speed high',
  Override = 'Override',
  SpeedThroughWaterRationalityFault = 'Speed through water rationality fault',
  NoDrivesAvailable = 'No drives available',
  FuelRemainingLow = 'Fuel remaining low',
  FuelRemainingHigh = 'Fuel remaining high',
  GeneratorCheck = 'Generator Check',
  GeneratorOverTemperature = 'Generator over temperature',
  GeneratorLowOilPressure = 'Generator low oil pressure',
  GeneratorLowOilLevel = 'Generator low oil level',
  GeneratorLowFuelPressure = 'Generator low fuel pressure',
  GeneratorLowVoltage = 'Generator low voltage',
  GeneratorLowCoolantLevel = 'Generator low coolant level',
  GeneratorWaterFlow = 'Generator water flow',
  GeneratorWaterInFuel = 'Generator water in fuel',
  GeneratorCharge = 'Generator charge',
  GeneratorPreheat = 'Generator preheat',
  GeneratorHighBoostPressure = 'Generator high boost pressure',
  GeneratorRevLimit = 'Generator rev limit',
  GeneratorEgrSystem = 'Generator EGR system',
  GeneratorThrottlePosition = 'Generator throttle position',
  GeneratorEmergencyStop = 'Generator emergency stop',
  GeneratorWarningLevel1 = 'Generator warning level 1',
  GeneratorWarningLevel2 = 'Generator warning level 2',
  GeneratorPowerReduction = 'Generator power reduction',
  GeneratorMaintenance = 'Generator maintenance',
  GeneratorCommError = 'Generator comm error',
  GeneratorThrottle = 'Generator throttle',
  GeneratorStartProtect = 'Generator start protect',
  GeneratorShuttingDown = 'Generator shutting down',
  ShallowAftDepth = 'Shallow aft depth',
  ForwardRange = 'Forward range',
  AlarmSourceMissing = 'Alarm source missing',
  External = 'External',
  WindSensorBatteryLow = 'Wind sensor battery low',
  GasolineLow = 'Gasoline low',
  GasolineHigh = 'Gasoline high',
  ChargingSystem = 'Charging System',
  SeawaterFlow = 'Seawater Flow',
  WaterInDriveSeal = 'Water in Drive Seal',
  Turnover = 'Turnover',
  HelmEcuDetectFailure = 'Helm ECU Detect Failure',
  JoystickEcuDetectFailure = 'Joystick ECU Detect Failure',
  DriveEcuDetectFailure = 'Drive ECU Detect Failure',
  HotTransmission = 'Hot Transmission',
  LowGearOilPressure = 'Low Gear Oil Pressure',
  LowDriveLubOilLevel = 'Low Drive Lub Oil Level',
  CheckThermostat = 'Check Thermostat',
  TrackOffsetActive = 'Track offset active',
  NavigationNotSupported = 'Navigation Not Supported',
}

/**
 * @category Enumerations
 */
export const SimnetAlarmIdValues: {[key: string]: number} = {
  [SimnetAlarmId.ShallowWater]: 0xa,
  [SimnetAlarmId.DeepWater]: 0xb,
  [SimnetAlarmId.AnchorDepth]: 0xc,
  [SimnetAlarmId.TrueWindShift]: 0xd,
  [SimnetAlarmId.TrueWindHigh]: 0xe,
  [SimnetAlarmId.TrueWindLow]: 0xf,
  [SimnetAlarmId.LowBoatSpeed]: 0x10,
  [SimnetAlarmId.HighVoltage]: 0x11,
  [SimnetAlarmId.LowVoltage]: 0x12,
  [SimnetAlarmId.DepthDataMissing]: 0x13,
  [SimnetAlarmId.WindDataMissing]: 0x14,
  [SimnetAlarmId.NavDataMissing]: 0x15,
  [SimnetAlarmId.HeadingMissing]: 0x16,
  [SimnetAlarmId.Xte]: 0x17,
  [SimnetAlarmId.RudderDataMissing]: 0x18,
  [SimnetAlarmId.RudderControllerFault]: 0x19,
  [SimnetAlarmId.NoRudderResponse]: 0x1a,
  [SimnetAlarmId.RudderDriveOverload]: 0x1b,
  [SimnetAlarmId.HighInternalTemperature]: 0x1c,
  [SimnetAlarmId.ApClutchOverload]: 0x1d,
  [SimnetAlarmId.ApClutchDisengaged]: 0x1e,
  [SimnetAlarmId.HighDriveSupply]: 0x1f,
  [SimnetAlarmId.LowDriveSupply]: 0x20,
  [SimnetAlarmId.NoActiveAutopilotControlUnit]: 0x21,
  [SimnetAlarmId.NoAutopilotComputer]: 0x22,
  [SimnetAlarmId.MemoryFail]: 0x23,
  [SimnetAlarmId.WaterTempMissing]: 0x24,
  [SimnetAlarmId.LowWaterTemp]: 0x25,
  [SimnetAlarmId.HighWaterTemp]: 0x26,
  [SimnetAlarmId.WaterTempRate]: 0x27,
  [SimnetAlarmId.Fish]: 0x28,
  [SimnetAlarmId.NoGpsFix]: 0x29,
  [SimnetAlarmId.Waasdgps]: 0x2a,
  [SimnetAlarmId.Arrival]: 0x2d,
  [SimnetAlarmId.Anchor]: 0x2e,
  [SimnetAlarmId.FuelLow]: 0x2f,
  [SimnetAlarmId.FuelHigh]: 0x30,
  [SimnetAlarmId.TankLow]: 0x31,
  [SimnetAlarmId.TankHigh]: 0x32,
  [SimnetAlarmId.Bep]: 0x33,
  [SimnetAlarmId.WaypointRadius]: 0x34,
  [SimnetAlarmId.Cpa]: 0x35,
  [SimnetAlarmId.AisRangeToVessel]: 0x36,
  [SimnetAlarmId.AisVesselLost]: 0x37,
  [SimnetAlarmId.VesselMessage]: 0x38,
  [SimnetAlarmId.Lightning]: 0x39,
  [SimnetAlarmId.SevereWeather]: 0x3a,
  [SimnetAlarmId.Storm]: 0x3b,
  [SimnetAlarmId.EngineCheck]: 0x3d,
  [SimnetAlarmId.EngineOverTemperature]: 0x3e,
  [SimnetAlarmId.EngineLowOilPressure]: 0x3f,
  [SimnetAlarmId.EngineLowOilLevel]: 0x40,
  [SimnetAlarmId.EngineLowFuelPressure]: 0x41,
  [SimnetAlarmId.EngineLowVoltage]: 0x42,
  [SimnetAlarmId.EngineLowCoolantLevel]: 0x43,
  [SimnetAlarmId.EngineWaterFlow]: 0x44,
  [SimnetAlarmId.EngineWaterInFuel]: 0x45,
  [SimnetAlarmId.EngineCharge]: 0x46,
  [SimnetAlarmId.EnginePreheat]: 0x47,
  [SimnetAlarmId.EngineHighBoostPressure]: 0x48,
  [SimnetAlarmId.EngineRevLimit]: 0x49,
  [SimnetAlarmId.EngineEgrSystem]: 0x4a,
  [SimnetAlarmId.EngineThrottlePosition]: 0x4b,
  [SimnetAlarmId.EngineEmergencyStop]: 0x4c,
  [SimnetAlarmId.EngineWarningLevel1]: 0x4d,
  [SimnetAlarmId.EngineWarningLevel2]: 0x4e,
  [SimnetAlarmId.EnginePowerReduction]: 0x4f,
  [SimnetAlarmId.EngineMaintenance]: 0x50,
  [SimnetAlarmId.EngineCommError]: 0x51,
  [SimnetAlarmId.EngineThrottle]: 0x52,
  [SimnetAlarmId.EngineStartProtect]: 0x53,
  [SimnetAlarmId.EngineShuttingDown]: 0x54,
  [SimnetAlarmId.TransmissionCheck]: 0x55,
  [SimnetAlarmId.TransmissionOverTemperature]: 0x56,
  [SimnetAlarmId.TransmissionLowOilPressure]: 0x57,
  [SimnetAlarmId.TransmissionLowOilLevel]: 0x58,
  [SimnetAlarmId.SailDrive]: 0x59,
  [SimnetAlarmId.FreshWaterLow]: 0x60,
  [SimnetAlarmId.FreshWaterHigh]: 0x61,
  [SimnetAlarmId.GrayWaterLow]: 0x62,
  [SimnetAlarmId.GrayWaterHigh]: 0x63,
  [SimnetAlarmId.LiveWellLow]: 0x64,
  [SimnetAlarmId.LiveWellHigh]: 0x65,
  [SimnetAlarmId.OilLow]: 0x66,
  [SimnetAlarmId.OilHigh]: 0x67,
  [SimnetAlarmId.BlackWaterLow]: 0x68,
  [SimnetAlarmId.BlackWaterHigh]: 0x69,
  [SimnetAlarmId.WeatherDataMissing]: 0x6a,
  [SimnetAlarmId.ApPositionDataMissing]: 0x6b,
  [SimnetAlarmId.ApSpeedDataMissing]: 0x6c,
  [SimnetAlarmId.ApDepthDataMissing]: 0x6d,
  [SimnetAlarmId.ApHeadingDataMissing]: 0x6e,
  [SimnetAlarmId.ApNavDataMissing]: 0x6f,
  [SimnetAlarmId.ApOffCourse]: 0x70,
  [SimnetAlarmId.ApRudderDataMissing]: 0x71,
  [SimnetAlarmId.ApWindDataMissing]: 0x72,
  [SimnetAlarmId.RadarGuardZone]: 0x73,
  [SimnetAlarmId.MarpaTargetLost]: 0x74,
  [SimnetAlarmId.MarpaUnavailable]: 0x75,
  [SimnetAlarmId.DangerousVessel]: 0x76,
  [SimnetAlarmId.RadarError]: 0x77,
  [SimnetAlarmId.CZoneCritical]: 0x78,
  [SimnetAlarmId.CZoneImportant]: 0x79,
  [SimnetAlarmId.CZoneStandard]: 0x7a,
  [SimnetAlarmId.CZoneWarning]: 0x7b,
  TrueWindShift2: 0x7c,
  [SimnetAlarmId.EvcComError]: 0x7d,
  [SimnetAlarmId.EvcOverride]: 0x7e,
  [SimnetAlarmId.HighDriveTemperature]: 0x7f,
  [SimnetAlarmId.DriveInhibit]: 0x80,
  [SimnetAlarmId.CanBusSupplyOverload]: 0x81,
  [SimnetAlarmId.DriveRefVoltageMissing]: 0x82,
  [SimnetAlarmId.RudderLimit]: 0x83,
  [SimnetAlarmId.CompassDifference]: 0x84,
  [SimnetAlarmId.ApLowBoatSpeed]: 0x85,
  [SimnetAlarmId.MonitorCompassMissing]: 0x86,
  [SimnetAlarmId.CrossTrackDistanceLimit]: 0x87,
  [SimnetAlarmId.EndOfRoute]: 0x89,
  [SimnetAlarmId.CompassAlignment]: 0x8a,
  [SimnetAlarmId.RAIM]: 0x8b,
  [SimnetAlarmId.OffHeading]: 0x8d,
  [SimnetAlarmId.SupplyVoltage]: 0x8e,
  [SimnetAlarmId.LowCanBusVoltage]: 0x8f,
  [SimnetAlarmId.CanBusFailure]: 0x90,
  [SimnetAlarmId.DriveReadyMissing]: 0x91,
  [SimnetAlarmId.DriveComputerMissing]: 0x92,
  [SimnetAlarmId.ExternalModeIllegal]: 0x93,
  [SimnetAlarmId.RudderTooSlow]: 0x94,
  [SimnetAlarmId.WheelOver]: 0x95,
  [SimnetAlarmId.ThrusterInhibited]: 0x96,
  [SimnetAlarmId.CheckHeading]: 0x97,
  [SimnetAlarmId.TrueWindSpeedHigh]: 0x98,
  [SimnetAlarmId.Override]: 0x99,
  [SimnetAlarmId.SpeedThroughWaterRationalityFault]: 0x9a,
  [SimnetAlarmId.NoDrivesAvailable]: 0x9b,
  [SimnetAlarmId.FuelRemainingLow]: 0x9c,
  [SimnetAlarmId.FuelRemainingHigh]: 0x9d,
  [SimnetAlarmId.GeneratorCheck]: 0x9e,
  [SimnetAlarmId.GeneratorOverTemperature]: 0x9f,
  [SimnetAlarmId.GeneratorLowOilPressure]: 0xa0,
  [SimnetAlarmId.GeneratorLowOilLevel]: 0xa1,
  [SimnetAlarmId.GeneratorLowFuelPressure]: 0xa2,
  [SimnetAlarmId.GeneratorLowVoltage]: 0xa3,
  [SimnetAlarmId.GeneratorLowCoolantLevel]: 0xa4,
  [SimnetAlarmId.GeneratorWaterFlow]: 0xa5,
  [SimnetAlarmId.GeneratorWaterInFuel]: 0xa6,
  [SimnetAlarmId.GeneratorCharge]: 0xa7,
  [SimnetAlarmId.GeneratorPreheat]: 0xa8,
  [SimnetAlarmId.GeneratorHighBoostPressure]: 0xa9,
  [SimnetAlarmId.GeneratorRevLimit]: 0xaa,
  [SimnetAlarmId.GeneratorEgrSystem]: 0xab,
  [SimnetAlarmId.GeneratorThrottlePosition]: 0xac,
  [SimnetAlarmId.GeneratorEmergencyStop]: 0xad,
  [SimnetAlarmId.GeneratorWarningLevel1]: 0xae,
  [SimnetAlarmId.GeneratorWarningLevel2]: 0xaf,
  [SimnetAlarmId.GeneratorPowerReduction]: 0xb0,
  [SimnetAlarmId.GeneratorMaintenance]: 0xb1,
  [SimnetAlarmId.GeneratorCommError]: 0xb2,
  [SimnetAlarmId.GeneratorThrottle]: 0xb3,
  [SimnetAlarmId.GeneratorStartProtect]: 0xb4,
  [SimnetAlarmId.GeneratorShuttingDown]: 0xb5,
  [SimnetAlarmId.ShallowAftDepth]: 0xb6,
  [SimnetAlarmId.ForwardRange]: 0xb7,
  [SimnetAlarmId.AlarmSourceMissing]: 0xf5,
  [SimnetAlarmId.External]: 0xf6,
  EvcComError2: 0xf7,
  [SimnetAlarmId.WindSensorBatteryLow]: 0xf8,
  [SimnetAlarmId.GasolineLow]: 0x10a,
  [SimnetAlarmId.GasolineHigh]: 0x10b,
  [SimnetAlarmId.ChargingSystem]: 0x10c,
  [SimnetAlarmId.SeawaterFlow]: 0x10d,
  [SimnetAlarmId.WaterInDriveSeal]: 0x10e,
  [SimnetAlarmId.Turnover]: 0x110,
  [SimnetAlarmId.HelmEcuDetectFailure]: 0x111,
  [SimnetAlarmId.JoystickEcuDetectFailure]: 0x112,
  [SimnetAlarmId.DriveEcuDetectFailure]: 0x113,
  [SimnetAlarmId.HotTransmission]: 0x114,
  [SimnetAlarmId.LowGearOilPressure]: 0x115,
  [SimnetAlarmId.LowDriveLubOilLevel]: 0x116,
  [SimnetAlarmId.CheckThermostat]: 0x11d,
  [SimnetAlarmId.TrackOffsetActive]: 0x11f,
  [SimnetAlarmId.NavigationNotSupported]: 0x181,
}

/**
 * @category Enumerations
 */
export enum SimnetApEvents {
  FollownonFollow = 'Follow/Non Follow',
  Standby = 'Standby',
  HeadingMode = 'Heading mode',
  NavMode = 'Nav mode',
  NoDriftMode = 'No Drift mode',
  NonFollowUpMode = 'Non Follow Up mode',
  FollowUpMode = 'Follow Up mode',
  WindMode = 'Wind mode',
  Tack = 'Tack',
  Squareturn = 'Square (Turn)',
  CTurn = 'C-Turn',
  UTurn = 'U-Turn',
  Spiralturn = 'Spiral (Turn)',
  ZigZagturn = 'Zig Zag (Turn)',
  LazySturn = 'Lazy-S (Turn)',
  Depthturn = 'Depth (Turn)',
  ChangeCourse = 'Change course',
  TimerSync = 'Timer sync',
  MobActivated = 'MOB Activated',
  MobDeactivated = 'MOB Deactivated',
  PingPortEnd = 'Ping port end',
  PingStarboardEnd = 'Ping starboard end',
}

/**
 * @category Enumerations
 */
export const SimnetApEventsValues: {[key: string]: number} = {
  [SimnetApEvents.FollownonFollow]: 0x2,
  [SimnetApEvents.Standby]: 0x6,
  [SimnetApEvents.HeadingMode]: 0x9,
  [SimnetApEvents.NavMode]: 0xa,
  [SimnetApEvents.NoDriftMode]: 0xc,
  [SimnetApEvents.NonFollowUpMode]: 0xd,
  [SimnetApEvents.FollowUpMode]: 0xe,
  [SimnetApEvents.WindMode]: 0xf,
  [SimnetApEvents.Tack]: 0x11,
  [SimnetApEvents.Squareturn]: 0x12,
  [SimnetApEvents.CTurn]: 0x13,
  [SimnetApEvents.UTurn]: 0x14,
  [SimnetApEvents.Spiralturn]: 0x15,
  [SimnetApEvents.ZigZagturn]: 0x16,
  [SimnetApEvents.LazySturn]: 0x17,
  [SimnetApEvents.Depthturn]: 0x18,
  [SimnetApEvents.ChangeCourse]: 0x1a,
  [SimnetApEvents.TimerSync]: 0x3d,
  [SimnetApEvents.MobActivated]: 0x6b,
  [SimnetApEvents.MobDeactivated]: 0x6c,
  [SimnetApEvents.PingPortEnd]: 0x70,
  [SimnetApEvents.PingStarboardEnd]: 0x71,
}

/**
 * @category Enumerations
 */
export enum SimnetApMode {
  Heading = 'Heading',
  Wind = 'Wind',
  Nav = 'Nav',
  NoDrift = 'No Drift',
}

/**
 * @category Enumerations
 */
export const SimnetApModeValues: {[key: string]: number} = {
  [SimnetApMode.Heading]: 0x2,
  [SimnetApMode.Wind]: 0x3,
  [SimnetApMode.Nav]: 0xa,
  [SimnetApMode.NoDrift]: 0xb,
}

/**
 * @category Enumerations
 */
export enum SimnetApStatus {
  Manual = 'Manual',
  Automatic = 'Automatic',
}

/**
 * @category Enumerations
 */
export const SimnetApStatusValues: {[key: string]: number} = {
  [SimnetApStatus.Manual]: 0x2,
  [SimnetApStatus.Automatic]: 0x10,
}

/**
 * @category Enumerations
 */
export enum SimnetAutopilotMode {
  Standby = 'Standby',
  Heading = 'Heading',
  Mode4 = 'Mode 4',
  Wind = 'Wind',
  NonFollowUp = 'Non-Follow-Up',
  Navigation = 'Navigation',
}

/**
 * @category Enumerations
 */
export const SimnetAutopilotModeValues: {[key: string]: number} = {
  [SimnetAutopilotMode.Standby]: 0x0,
  [SimnetAutopilotMode.Heading]: 0x1,
  [SimnetAutopilotMode.Mode4]: 0x3,
  [SimnetAutopilotMode.Wind]: 0x4,
  [SimnetAutopilotMode.NonFollowUp]: 0x5,
  [SimnetAutopilotMode.Navigation]: 0x6,
}

/**
 * @category Enumerations
 */
export enum SimnetAutopilotModeClass {
  Standby = 'Standby',
  Engaged = 'Engaged',
}

/**
 * @category Enumerations
 */
export const SimnetAutopilotModeClassValues: {[key: string]: number} = {
  [SimnetAutopilotModeClass.Standby]: 0x0,
  [SimnetAutopilotModeClass.Engaged]: 0x10,
}

/**
 * @category Enumerations
 */
export enum SimnetBacklightLevel {
  _10min = '10% (Min)',
  DayMode = 'Day mode',
  NightMode = 'Night mode',
  _20 = '20%',
  _30 = '30%',
  _40 = '40%',
  _50 = '50%',
  _60 = '60%',
  _70 = '70%',
  _80 = '80%',
  _90 = '90%',
  _100max = '100% (Max)',
}

/**
 * @category Enumerations
 */
export const SimnetBacklightLevelValues: {[key: string]: number} = {
  [SimnetBacklightLevel._10min]: 0x0,
  [SimnetBacklightLevel.DayMode]: 0x1,
  [SimnetBacklightLevel.NightMode]: 0x4,
  [SimnetBacklightLevel._20]: 0xb,
  [SimnetBacklightLevel._30]: 0x16,
  [SimnetBacklightLevel._40]: 0x21,
  [SimnetBacklightLevel._50]: 0x2c,
  [SimnetBacklightLevel._60]: 0x37,
  [SimnetBacklightLevel._70]: 0x42,
  [SimnetBacklightLevel._80]: 0x4d,
  [SimnetBacklightLevel._90]: 0x58,
  [SimnetBacklightLevel._100max]: 0x63,
}

/**
 * @category Enumerations
 */
export enum SimnetBaroPressureUnit {
  Millibar = 'Millibar',
  Hectopascal = 'Hectopascal',
  InchesOfMercury = 'Inches of mercury',
}

/**
 * @category Enumerations
 */
export const SimnetBaroPressureUnitValues: {[key: string]: number} = {
  [SimnetBaroPressureUnit.Millibar]: 0x0,
  [SimnetBaroPressureUnit.Hectopascal]: 0x2,
  [SimnetBaroPressureUnit.InchesOfMercury]: 0x5,
}

/**
 * @category Enumerations
 */
export enum SimnetCommand {
  Text = 'Text',
}

/**
 * @category Enumerations
 */
export const SimnetCommandValues: {[key: string]: number} = {
  [SimnetCommand.Text]: 0x32,
}

/**
 * @category Enumerations
 */
export enum SimnetCompassAutocalMode {
  Off = 'Off',
  On = 'On',
  AutoLocked = 'Auto locked',
  Auto = 'Auto',
}

/**
 * @category Enumerations
 */
export const SimnetCompassAutocalModeValues: {[key: string]: number} = {
  [SimnetCompassAutocalMode.Off]: 0x0,
  [SimnetCompassAutocalMode.On]: 0x1,
  [SimnetCompassAutocalMode.AutoLocked]: 0x2,
  [SimnetCompassAutocalMode.Auto]: 0x3,
}

/**
 * @category Enumerations
 */
export enum SimnetDataSource {
  Heading = 'Heading',
  Navigation = 'Navigation',
  Position = 'Position',
  ApparentWind = 'Apparent Wind',
  TrueWind = 'True Wind',
  SpeedThroughWater = 'Speed Through Water',
  SeaTemperature = 'Sea Temperature',
  DistanceLog = 'Distance Log',
  Depth = 'Depth',
  RudderFeedback = 'Rudder Feedback',
  MonitorCompass = 'Monitor Compass',
  PositionBackup = 'Position Backup',
  BoatSpeedBackup = 'Boat Speed Backup',
  AirTemperature = 'Air Temperature',
  BarometricPressure = 'Barometric Pressure',
  HeelAngle = 'Heel Angle',
  SailingNavigation = 'Sailing Navigation',
  TrimAngle = 'Trim Angle',
  Sailing = 'Sailing',
  AftDepth = 'Aft Depth',
  SpeedLog = 'Speed Log',
  RtcmSignal = 'RTCM Signal',
  RtcmCorrections = 'RTCM Corrections',
  Autopilot = 'Autopilot',
  AutopilotFunctionBackup = 'Autopilot Function Backup',
  AutopilotControl = 'Autopilot Control',
}

/**
 * @category Enumerations
 */
export const SimnetDataSourceValues: {[key: string]: number} = {
  [SimnetDataSource.Heading]: 0x0,
  [SimnetDataSource.Navigation]: 0x1,
  [SimnetDataSource.Position]: 0x2,
  [SimnetDataSource.ApparentWind]: 0x3,
  [SimnetDataSource.TrueWind]: 0x4,
  [SimnetDataSource.SpeedThroughWater]: 0x5,
  [SimnetDataSource.SeaTemperature]: 0x6,
  [SimnetDataSource.DistanceLog]: 0x7,
  [SimnetDataSource.Depth]: 0x8,
  [SimnetDataSource.RudderFeedback]: 0x9,
  [SimnetDataSource.MonitorCompass]: 0x13,
  [SimnetDataSource.PositionBackup]: 0x14,
  [SimnetDataSource.BoatSpeedBackup]: 0x15,
  [SimnetDataSource.AirTemperature]: 0x16,
  [SimnetDataSource.BarometricPressure]: 0x1c,
  [SimnetDataSource.HeelAngle]: 0x1e,
  [SimnetDataSource.SailingNavigation]: 0x22,
  [SimnetDataSource.TrimAngle]: 0x23,
  [SimnetDataSource.Sailing]: 0x24,
  [SimnetDataSource.AftDepth]: 0x25,
  [SimnetDataSource.SpeedLog]: 0x26,
  [SimnetDataSource.RtcmSignal]: 0x27,
  [SimnetDataSource.RtcmCorrections]: 0x28,
  [SimnetDataSource.Autopilot]: 0x36,
  [SimnetDataSource.AutopilotFunctionBackup]: 0x3b,
  [SimnetDataSource.AutopilotControl]: 0x68,
}

/**
 * @category Enumerations
 */
export enum SimnetDepthUnit {
  Meters = 'Meters',
  Feet = 'Feet',
  Fathoms = 'Fathoms',
}

/**
 * @category Enumerations
 */
export const SimnetDepthUnitValues: {[key: string]: number} = {
  [SimnetDepthUnit.Meters]: 0x0,
  [SimnetDepthUnit.Feet]: 0x1,
  [SimnetDepthUnit.Fathoms]: 0x2,
}

/**
 * @category Enumerations
 */
export enum SimnetDeviceModel {
  Ac = 'AC',
  OtherDevice = 'Other device',
  Nac = 'NAC',
}

/**
 * @category Enumerations
 */
export const SimnetDeviceModelValues: {[key: string]: number} = {
  [SimnetDeviceModel.Ac]: 0x0,
  [SimnetDeviceModel.OtherDevice]: 0x1,
  [SimnetDeviceModel.Nac]: 0x64,
}

/**
 * @category Enumerations
 */
export enum SimnetDeviceReport {
  Status = 'Status',
  SendStatus = 'Send Status',
  Mode = 'Mode',
  SendMode = 'Send Mode',
  SailingProcessorStatus = 'Sailing Processor Status',
}

/**
 * @category Enumerations
 */
export const SimnetDeviceReportValues: {[key: string]: number} = {
  [SimnetDeviceReport.Status]: 0x2,
  [SimnetDeviceReport.SendStatus]: 0x3,
  [SimnetDeviceReport.Mode]: 0xa,
  [SimnetDeviceReport.SendMode]: 0xb,
  [SimnetDeviceReport.SailingProcessorStatus]: 0x17,
}

/**
 * @category Enumerations
 */
export enum SimnetDirection {
  Port = 'Port',
  Starboard = 'Starboard',
  LeftRudderport = 'Left rudder (port)',
  RightRudderstarboard = 'Right rudder (starboard)',
}

/**
 * @category Enumerations
 */
export const SimnetDirectionValues: {[key: string]: number} = {
  [SimnetDirection.Port]: 0x2,
  [SimnetDirection.Starboard]: 0x3,
  [SimnetDirection.LeftRudderport]: 0x4,
  [SimnetDirection.RightRudderstarboard]: 0x5,
}

/**
 * @category Enumerations
 */
export enum SimnetDistanceSmallUnit {
  Feet = 'Feet',
  Meters = 'Meters',
  Yards = 'Yards',
}

/**
 * @category Enumerations
 */
export const SimnetDistanceSmallUnitValues: {[key: string]: number} = {
  [SimnetDistanceSmallUnit.Feet]: 0x0,
  [SimnetDistanceSmallUnit.Meters]: 0x1,
  [SimnetDistanceSmallUnit.Yards]: 0x2,
}

/**
 * @category Enumerations
 */
export enum SimnetDistanceUnit {
  NauticalMiles = 'Nautical miles',
  Kilometers = 'Kilometers',
  Miles = 'Miles',
}

/**
 * @category Enumerations
 */
export const SimnetDistanceUnitValues: {[key: string]: number} = {
  [SimnetDistanceUnit.NauticalMiles]: 0x0,
  [SimnetDistanceUnit.Kilometers]: 0x1,
  [SimnetDistanceUnit.Miles]: 0x2,
}

/**
 * @category Enumerations
 */
export enum SimnetEventType {
  FollowUp = 'Follow Up',
  ApCommand = 'AP Command',
  Timer = 'Timer',
  Siren = 'Siren',
  AisVesselSelected = 'AIS vessel selected',
  Alarm = 'Alarm',
}

/**
 * @category Enumerations
 */
export const SimnetEventTypeValues: {[key: string]: number} = {
  [SimnetEventType.FollowUp]: 0x2,
  [SimnetEventType.ApCommand]: 0xa,
  [SimnetEventType.Timer]: 0x17,
  [SimnetEventType.Siren]: 0x1f,
  [SimnetEventType.AisVesselSelected]: 0x24,
  [SimnetEventType.Alarm]: 0xff,
}

/**
 * @category Enumerations
 */
export enum SimnetHeadingUnit {
  Magnetic = 'Magnetic',
  True = 'True',
}

/**
 * @category Enumerations
 */
export const SimnetHeadingUnitValues: {[key: string]: number} = {
  [SimnetHeadingUnit.Magnetic]: 0x0,
  [SimnetHeadingUnit.True]: 0x1,
}

/**
 * @category Enumerations
 */
export enum SimnetHourDisplay {
  _24Hour = '24 hour',
  _12Hour = '12 hour',
}

/**
 * @category Enumerations
 */
export const SimnetHourDisplayValues: {[key: string]: number} = {
  [SimnetHourDisplay._24Hour]: 0x0,
  [SimnetHourDisplay._12Hour]: 0x1,
}

/**
 * @category Enumerations
 */
export enum SimnetKeyOperation {
  Read = 'Read',
  Set = 'Set',
  Reply = 'Reply',
}

/**
 * @category Enumerations
 */
export const SimnetKeyOperationValues: {[key: string]: number} = {
  [SimnetKeyOperation.Read]: 0x0,
  [SimnetKeyOperation.Set]: 0x1,
  [SimnetKeyOperation.Reply]: 0x2,
}

/**
 * @category Enumerations
 */
export enum SimnetNetworkGroup {
  None = 'None',
  Default = 'Default',
  Group1 = 'Group 1',
  Group2 = 'Group 2',
  Group3 = 'Group 3',
  Group4 = 'Group 4',
  Group5 = 'Group 5',
  Group6 = 'Group 6',
}

/**
 * @category Enumerations
 */
export const SimnetNetworkGroupValues: {[key: string]: number} = {
  [SimnetNetworkGroup.None]: 0x0,
  [SimnetNetworkGroup.Default]: 0x1,
  [SimnetNetworkGroup.Group1]: 0x2,
  [SimnetNetworkGroup.Group2]: 0x3,
  [SimnetNetworkGroup.Group3]: 0x4,
  [SimnetNetworkGroup.Group4]: 0x5,
  [SimnetNetworkGroup.Group5]: 0x6,
  [SimnetNetworkGroup.Group6]: 0x7,
}

/**
 * @category Enumerations
 */
export enum SimnetNightMode {
  Day = 'Day',
  Night = 'Night',
}

/**
 * @category Enumerations
 */
export const SimnetNightModeValues: {[key: string]: number} = {
  [SimnetNightMode.Day]: 0x2,
  [SimnetNightMode.Night]: 0x4,
}

/**
 * @category Enumerations
 */
export enum SimnetNightModeColor {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
  White = 'White',
  Magenta = 'Magenta',
}

/**
 * @category Enumerations
 */
export const SimnetNightModeColorValues: {[key: string]: number} = {
  [SimnetNightModeColor.Red]: 0x0,
  [SimnetNightModeColor.Green]: 0x1,
  [SimnetNightModeColor.Blue]: 0x2,
  [SimnetNightModeColor.White]: 0x3,
  [SimnetNightModeColor.Magenta]: 0x4,
}

/**
 * @category Enumerations
 */
export enum SimnetPressureUnit {
  Psi = 'PSI',
  Kilopascal = 'Kilopascal',
  InchesOfMercury = 'Inches of mercury',
  Bar = 'Bar',
}

/**
 * @category Enumerations
 */
export const SimnetPressureUnitValues: {[key: string]: number} = {
  [SimnetPressureUnit.Psi]: 0x1,
  [SimnetPressureUnit.Kilopascal]: 0x3,
  [SimnetPressureUnit.InchesOfMercury]: 0x5,
  [SimnetPressureUnit.Bar]: 0x6,
}

/**
 * @category Enumerations
 */
export enum SimnetSpeedUnit {
  Knots = 'Knots',
  KilometersPerHour = 'Kilometers per hour',
  MilesPerHour = 'Miles per hour',
}

/**
 * @category Enumerations
 */
export const SimnetSpeedUnitValues: {[key: string]: number} = {
  [SimnetSpeedUnit.Knots]: 0x0,
  [SimnetSpeedUnit.KilometersPerHour]: 0x1,
  [SimnetSpeedUnit.MilesPerHour]: 0x2,
}

/**
 * @category Enumerations
 */
export enum SimnetTemperatureUnit {
  Celsius = 'Celsius',
  Fahrenheit = 'Fahrenheit',
}

/**
 * @category Enumerations
 */
export const SimnetTemperatureUnitValues: {[key: string]: number} = {
  [SimnetTemperatureUnit.Celsius]: 0x0,
  [SimnetTemperatureUnit.Fahrenheit]: 0x1,
}

/**
 * @category Enumerations
 */
export enum SimnetTimerEvent {
  RaceTimerStart = 'Race Timer Start',
  RaceTimerStop = 'Race Timer Stop',
  RaceTimerSync = 'Race Timer Sync',
  RaceTimerReset = 'Race Timer Reset',
  TripTimerResetAll = 'Trip Timer Reset All',
  TripTimerEnable = 'Trip Timer Enable',
  TripTimerDisable = 'Trip Timer Disable',
}

/**
 * @category Enumerations
 */
export const SimnetTimerEventValues: {[key: string]: number} = {
  [SimnetTimerEvent.RaceTimerStart]: 0x3d,
  [SimnetTimerEvent.RaceTimerStop]: 0x3e,
  [SimnetTimerEvent.RaceTimerSync]: 0x3f,
  [SimnetTimerEvent.RaceTimerReset]: 0x40,
  [SimnetTimerEvent.TripTimerResetAll]: 0x41,
  [SimnetTimerEvent.TripTimerEnable]: 0x64,
  [SimnetTimerEvent.TripTimerDisable]: 0x65,
}

/**
 * @category Enumerations
 */
export enum SimnetTimeFormat {
  Mmddyyyy = 'MM/dd/yyyy',
  Ddmmyyyy = 'dd/MM/yyyy',
}

/**
 * @category Enumerations
 */
export const SimnetTimeFormatValues: {[key: string]: number} = {
  [SimnetTimeFormat.Mmddyyyy]: 0x1,
  [SimnetTimeFormat.Ddmmyyyy]: 0x2,
}

/**
 * @category Enumerations
 */
export enum SimnetVolumeUnit {
  Liters = 'Liters',
  Gallons = 'Gallons',
}

/**
 * @category Enumerations
 */
export const SimnetVolumeUnitValues: {[key: string]: number} = {
  [SimnetVolumeUnit.Liters]: 0x0,
  [SimnetVolumeUnit.Gallons]: 0x1,
}

/**
 * @category Enumerations
 */
export enum SimnetWindSpeedUnit {
  Knots = 'Knots',
  MetersPerSecond = 'Meters per second',
  MilesPerHour = 'Miles per hour',
  KilometersPerHour = 'Kilometers per hour',
}

/**
 * @category Enumerations
 */
export const SimnetWindSpeedUnitValues: {[key: string]: number} = {
  [SimnetWindSpeedUnit.Knots]: 0x0,
  [SimnetWindSpeedUnit.MetersPerSecond]: 0x1,
  [SimnetWindSpeedUnit.MilesPerHour]: 0x2,
  [SimnetWindSpeedUnit.KilometersPerHour]: 0x3,
}

/**
 * @category Enumerations
 */
export enum SimnetZcFunction {
  Key = 'Key',
  Knob = 'Knob',
}

/**
 * @category Enumerations
 */
export const SimnetZcFunctionValues: {[key: string]: number} = {
  [SimnetZcFunction.Key]: 0x84,
  [SimnetZcFunction.Knob]: 0x85,
}

/**
 * @category Enumerations
 */
export enum SimnetZcKey {
  StandbyAuto = 'Standby Auto',
  Win = 'Win',
  Display = 'Display',
  Goto = 'Goto',
  Pages = 'Pages',
  Menu = 'Menu',
  Power = 'Power',
  Echo = 'Echo',
  Nav = 'Nav',
  Chart = 'Chart',
  Plot = 'Plot',
  Info = 'Info',
  Mob = 'MOB',
  _1 = '1',
  _2 = '2',
  _3 = '3',
  _4 = '4',
  _5 = '5',
  _6 = '6',
  _7 = '7',
  _8 = '8',
  _9 = '9',
  _0 = '0',
  Check = 'Check',
  Cancel = 'Cancel',
  Right = 'Right',
  Left = 'Left',
  Down = 'Down',
  Up = 'Up',
  ZoomOut = 'Zoom out',
  ZoomIn = 'Zoom in',
  KnobPush = 'Knob push',
}

/**
 * @category Enumerations
 */
export const SimnetZcKeyValues: {[key: string]: number} = {
  [SimnetZcKey.StandbyAuto]: 0x4,
  [SimnetZcKey.Win]: 0x6,
  [SimnetZcKey.Display]: 0x7,
  [SimnetZcKey.Goto]: 0xa,
  [SimnetZcKey.Pages]: 0xd,
  [SimnetZcKey.Menu]: 0x10,
  [SimnetZcKey.Power]: 0x14,
  [SimnetZcKey.Echo]: 0x15,
  [SimnetZcKey.Nav]: 0x17,
  [SimnetZcKey.Chart]: 0x1a,
  [SimnetZcKey.Plot]: 0x1b,
  [SimnetZcKey.Info]: 0x1c,
  [SimnetZcKey.Mob]: 0x1d,
  [SimnetZcKey._1]: 0x1e,
  [SimnetZcKey._2]: 0x1f,
  [SimnetZcKey._3]: 0x20,
  [SimnetZcKey._4]: 0x21,
  [SimnetZcKey._5]: 0x22,
  [SimnetZcKey._6]: 0x23,
  [SimnetZcKey._7]: 0x24,
  [SimnetZcKey._8]: 0x25,
  [SimnetZcKey._9]: 0x26,
  [SimnetZcKey._0]: 0x27,
  [SimnetZcKey.Check]: 0x28,
  [SimnetZcKey.Cancel]: 0x29,
  [SimnetZcKey.Right]: 0x4f,
  [SimnetZcKey.Left]: 0x50,
  [SimnetZcKey.Down]: 0x51,
  [SimnetZcKey.Up]: 0x52,
  [SimnetZcKey.ZoomOut]: 0x56,
  [SimnetZcKey.ZoomIn]: 0x57,
  [SimnetZcKey.KnobPush]: 0x58,
}

/**
 * @category Enumerations
 */
export enum SimnetZcKeyEvent {
  Release = 'Release',
  LongPress = 'Long press',
  Press = 'Press',
}

/**
 * @category Enumerations
 */
export const SimnetZcKeyEventValues: {[key: string]: number} = {
  [SimnetZcKeyEvent.Release]: 0x33,
  [SimnetZcKeyEvent.LongPress]: 0x80,
  [SimnetZcKeyEvent.Press]: 0xb3,
}

/**
 * @category Enumerations
 */
export enum SleipnerThrusterAction {
  Active = 'Active',
  Standby = 'Standby',
}

/**
 * @category Enumerations
 */
export const SleipnerThrusterActionValues: {[key: string]: number} = {
  [SleipnerThrusterAction.Active]: 0x1,
  [SleipnerThrusterAction.Standby]: 0x2,
}

/**
 * @category Enumerations
 */
export enum SleipnerThrusterDirection {
  None = 'None',
  Direction1 = 'Direction 1',
  Direction2 = 'Direction 2',
}

/**
 * @category Enumerations
 */
export const SleipnerThrusterDirectionValues: {[key: string]: number} = {
  [SleipnerThrusterDirection.None]: 0x0,
  [SleipnerThrusterDirection.Direction1]: 0x1,
  [SleipnerThrusterDirection.Direction2]: 0x2,
}

/**
 * @category Enumerations
 */
export enum SleipnerThrusterState {
  StowingOrDeploying = 'Stowing or deploying',
  Off = 'Off',
  Ready = 'Ready',
  Thrusting = 'Thrusting',
}

/**
 * @category Enumerations
 */
export const SleipnerThrusterStateValues: {[key: string]: number} = {
  [SleipnerThrusterState.StowingOrDeploying]: 0x0,
  [SleipnerThrusterState.Off]: 0x1,
  [SleipnerThrusterState.Ready]: 0xa,
  [SleipnerThrusterState.Thrusting]: 0xb,
}

/**
 * @category Enumerations
 */
export enum SonichubCommand {
  Init2 = 'Init #2',
  AmRadio = 'AM Radio',
  ZoneInfo = 'Zone Info',
  Source = 'Source',
  SourceList = 'Source List',
  Control = 'Control',
  FmRadio = 'FM Radio',
  Playlist = 'Playlist',
  Track = 'Track',
  Artist = 'Artist',
  Album = 'Album',
  MenuItem = 'Menu Item',
  Zones = 'Zones',
  MaxVolume = 'Max Volume',
  Volume = 'Volume',
  Init1 = 'Init #1',
  Position = 'Position',
  Init3 = 'Init #3',
}

/**
 * @category Enumerations
 */
export const SonichubCommandValues: {[key: string]: number} = {
  [SonichubCommand.Init2]: 0x1,
  [SonichubCommand.AmRadio]: 0x4,
  [SonichubCommand.ZoneInfo]: 0x5,
  [SonichubCommand.Source]: 0x6,
  [SonichubCommand.SourceList]: 0x8,
  [SonichubCommand.Control]: 0x9,
  [SonichubCommand.FmRadio]: 0xc,
  [SonichubCommand.Playlist]: 0xd,
  [SonichubCommand.Track]: 0xe,
  [SonichubCommand.Artist]: 0xf,
  [SonichubCommand.Album]: 0x10,
  [SonichubCommand.MenuItem]: 0x13,
  [SonichubCommand.Zones]: 0x14,
  [SonichubCommand.MaxVolume]: 0x17,
  [SonichubCommand.Volume]: 0x18,
  [SonichubCommand.Init1]: 0x19,
  [SonichubCommand.Position]: 0x30,
  [SonichubCommand.Init3]: 0x32,
}

/**
 * @category Enumerations
 */
export enum SonichubControl {
  Set = 'Set',
  Ack = 'Ack',
}

/**
 * @category Enumerations
 */
export const SonichubControlValues: {[key: string]: number} = {
  [SonichubControl.Set]: 0x0,
  [SonichubControl.Ack]: 0x80,
}

/**
 * @category Enumerations
 */
export enum SonichubPlaylist {
  Report = 'Report',
  NextSong = 'Next song',
  PreviousSong = 'Previous song',
}

/**
 * @category Enumerations
 */
export const SonichubPlaylistValues: {[key: string]: number} = {
  [SonichubPlaylist.Report]: 0x1,
  [SonichubPlaylist.NextSong]: 0x4,
  [SonichubPlaylist.PreviousSong]: 0x6,
}

/**
 * @category Enumerations
 */
export enum SonichubSource {
  Am = 'AM',
  Fm = 'FM',
  IPod = 'iPod',
  Usb = 'USB',
  Aux = 'AUX',
  Aux2 = 'AUX 2',
  Mic = 'Mic',
}

/**
 * @category Enumerations
 */
export const SonichubSourceValues: {[key: string]: number} = {
  [SonichubSource.Am]: 0x0,
  [SonichubSource.Fm]: 0x1,
  [SonichubSource.IPod]: 0x2,
  [SonichubSource.Usb]: 0x3,
  [SonichubSource.Aux]: 0x4,
  [SonichubSource.Aux2]: 0x5,
  [SonichubSource.Mic]: 0x6,
}

/**
 * @category Enumerations
 */
export enum SonichubTuning {
  SeekingUp = 'Seeking up',
  Tuned = 'Tuned',
  SeekingDown = 'Seeking down',
}

/**
 * @category Enumerations
 */
export const SonichubTuningValues: {[key: string]: number} = {
  [SonichubTuning.SeekingUp]: 0x1,
  [SonichubTuning.Tuned]: 0x2,
  [SonichubTuning.SeekingDown]: 0x3,
}

/**
 * @category Enumerations
 */
export enum SpeedType {
  SingleSpeed = 'Single speed',
  DualSpeed = 'Dual speed',
  ProportionalSpeed = 'Proportional speed',
}

/**
 * @category Enumerations
 */
export const SpeedTypeValues: {[key: string]: number} = {
  [SpeedType.SingleSpeed]: 0x0,
  [SpeedType.DualSpeed]: 0x1,
  [SpeedType.ProportionalSpeed]: 0x2,
}

/**
 * @category Enumerations
 */
export enum StationHealth {
  NotWorking = 'Not Working',
  Unmonitored = 'Unmonitored',
  HealthyOperational = 'Healthy Operational',
  HealthyTestMode = 'Healthy Test Mode',
  TestMode = 'Test Mode',
}

/**
 * @category Enumerations
 */
export const StationHealthValues: {[key: string]: number} = {
  [StationHealth.NotWorking]: 0x0,
  [StationHealth.Unmonitored]: 0x1,
  [StationHealth.HealthyOperational]: 0x2,
  [StationHealth.HealthyTestMode]: 0x3,
  [StationHealth.TestMode]: 0x4,
}

/**
 * @category Enumerations
 */
export enum StationType {
  AllTypesOfMobileStation = 'All types of mobile station',
  AllTypesOfClassBMobileStation = 'All types of Class B mobile station',
  SarAirborneMobileStation = 'SAR airborne mobile station',
  AtoNStation = 'AtoN station',
  ClassBCsShipborneMobileStation = 'Class B CS shipborne mobile station',
  InlandWaterways = 'Inland waterways',
  RegionalUse7 = 'Regional use 7',
  RegionalUse8 = 'Regional use 8',
  RegionalUse9 = 'Regional use 9',
}

/**
 * @category Enumerations
 */
export const StationTypeValues: {[key: string]: number} = {
  [StationType.AllTypesOfMobileStation]: 0x0,
  [StationType.AllTypesOfClassBMobileStation]: 0x2,
  [StationType.SarAirborneMobileStation]: 0x3,
  [StationType.AtoNStation]: 0x4,
  [StationType.ClassBCsShipborneMobileStation]: 0x5,
  [StationType.InlandWaterways]: 0x6,
  [StationType.RegionalUse7]: 0x7,
  [StationType.RegionalUse8]: 0x8,
  [StationType.RegionalUse9]: 0x9,
}

/**
 * @category Enumerations
 */
export enum SteeringMode {
  MainSteering = 'Main Steering',
  NonFollowUpDevice = 'Non-Follow-Up Device',
  FollowUpDevice = 'Follow-Up Device',
  HeadingControlStandalone = 'Heading Control Standalone',
  HeadingControl = 'Heading Control',
  TrackControl = 'Track Control',
}

/**
 * @category Enumerations
 */
export const SteeringModeValues: {[key: string]: number} = {
  [SteeringMode.MainSteering]: 0x0,
  [SteeringMode.NonFollowUpDevice]: 0x1,
  [SteeringMode.FollowUpDevice]: 0x2,
  [SteeringMode.HeadingControlStandalone]: 0x3,
  [SteeringMode.HeadingControl]: 0x4,
  [SteeringMode.TrackControl]: 0x5,
}

/**
 * @category Enumerations
 */
export enum SystemTime {
  Gps = 'GPS',
  Glonass = 'GLONASS',
  RadioStation = 'Radio Station',
  LocalCesiumClock = 'Local Cesium clock',
  LocalRubidiumClock = 'Local Rubidium clock',
  LocalCrystalClock = 'Local Crystal clock',
}

/**
 * @category Enumerations
 */
export const SystemTimeValues: {[key: string]: number} = {
  [SystemTime.Gps]: 0x0,
  [SystemTime.Glonass]: 0x1,
  [SystemTime.RadioStation]: 0x2,
  [SystemTime.LocalCesiumClock]: 0x3,
  [SystemTime.LocalRubidiumClock]: 0x4,
  [SystemTime.LocalCrystalClock]: 0x5,
}

/**
 * @category Enumerations
 */
export enum TankType {
  Fuel = 'Fuel',
  Water = 'Water',
  GrayWater = 'Gray water',
  LiveWell = 'Live well',
  Oil = 'Oil',
  BlackWater = 'Black water',
}

/**
 * @category Enumerations
 */
export const TankTypeValues: {[key: string]: number} = {
  [TankType.Fuel]: 0x0,
  [TankType.Water]: 0x1,
  [TankType.GrayWater]: 0x2,
  [TankType.LiveWell]: 0x3,
  [TankType.Oil]: 0x4,
  [TankType.BlackWater]: 0x5,
}

/**
 * @category Enumerations
 */
export enum TargetAcquisition {
  Manual = 'Manual',
  Automatic = 'Automatic',
}

/**
 * @category Enumerations
 */
export const TargetAcquisitionValues: {[key: string]: number} = {
  [TargetAcquisition.Manual]: 0x0,
  [TargetAcquisition.Automatic]: 0x1,
}

/**
 * @category Enumerations
 */
export enum TelephoneMode {
  F3Eg3ESimplexTelephone = 'F3E/G3E simplex, telephone',
  F3Eg3EDuplexTelephone = 'F3E/G3E duplex, telephone',
  J3ETelephone = 'J3E, telephone',
  H3ETelephone = 'H3E, telephone',
  F1Bj2BFecNbdpTelexteleprinter = 'F1B/J2B FEC NBDP, telex/teleprinter',
  F1Bj2BArqNbdpTelexteleprinter = 'F1B/J2B ARQ NBDP, telex/teleprinter',
  F1Bj2BReceiveOnlyTeleprinterdsc = 'F1B/J2B receive only, teleprinter/DSC',
  F1Bj2BTeleprinterdsc = 'F1B/J2B, teleprinter/DSC',
  A1AMorseTapeRecorder = 'A1A Morse, tape recorder',
  A1AMorseMorseKeyheadSet = 'A1A Morse, Morse key/head set',
  F1Cf2Cf3CFaxMachine = 'F1C/F2C/F3C, FAX machine',
}

/**
 * @category Enumerations
 */
export const TelephoneModeValues: {[key: string]: number} = {
  [TelephoneMode.F3Eg3ESimplexTelephone]: 0x0,
  [TelephoneMode.F3Eg3EDuplexTelephone]: 0x1,
  [TelephoneMode.J3ETelephone]: 0x2,
  [TelephoneMode.H3ETelephone]: 0x3,
  [TelephoneMode.F1Bj2BFecNbdpTelexteleprinter]: 0x4,
  [TelephoneMode.F1Bj2BArqNbdpTelexteleprinter]: 0x5,
  [TelephoneMode.F1Bj2BReceiveOnlyTeleprinterdsc]: 0x6,
  [TelephoneMode.F1Bj2BTeleprinterdsc]: 0x7,
  [TelephoneMode.A1AMorseTapeRecorder]: 0x8,
  [TelephoneMode.A1AMorseMorseKeyheadSet]: 0x9,
  [TelephoneMode.F1Cf2Cf3CFaxMachine]: 0xa,
}

/**
 * @category Enumerations
 */
export enum TemperatureSource {
  SeaTemperature = 'Sea Temperature',
  OutsideTemperature = 'Outside Temperature',
  InsideTemperature = 'Inside Temperature',
  EngineRoomTemperature = 'Engine Room Temperature',
  MainCabinTemperature = 'Main Cabin Temperature',
  LiveWellTemperature = 'Live Well Temperature',
  BaitWellTemperature = 'Bait Well Temperature',
  RefrigerationTemperature = 'Refrigeration Temperature',
  HeatingSystemTemperature = 'Heating System Temperature',
  DewPointTemperature = 'Dew Point Temperature',
  ApparentWindChillTemperature = 'Apparent Wind Chill Temperature',
  TheoreticalWindChillTemperature = 'Theoretical Wind Chill Temperature',
  HeatIndexTemperature = 'Heat Index Temperature',
  FreezerTemperature = 'Freezer Temperature',
  ExhaustGasTemperature = 'Exhaust Gas Temperature',
  ShaftSealTemperature = 'Shaft Seal Temperature',
}

/**
 * @category Enumerations
 */
export const TemperatureSourceValues: {[key: string]: number} = {
  [TemperatureSource.SeaTemperature]: 0x0,
  [TemperatureSource.OutsideTemperature]: 0x1,
  [TemperatureSource.InsideTemperature]: 0x2,
  [TemperatureSource.EngineRoomTemperature]: 0x3,
  [TemperatureSource.MainCabinTemperature]: 0x4,
  [TemperatureSource.LiveWellTemperature]: 0x5,
  [TemperatureSource.BaitWellTemperature]: 0x6,
  [TemperatureSource.RefrigerationTemperature]: 0x7,
  [TemperatureSource.HeatingSystemTemperature]: 0x8,
  [TemperatureSource.DewPointTemperature]: 0x9,
  [TemperatureSource.ApparentWindChillTemperature]: 0xa,
  [TemperatureSource.TheoreticalWindChillTemperature]: 0xb,
  [TemperatureSource.HeatIndexTemperature]: 0xc,
  [TemperatureSource.FreezerTemperature]: 0xd,
  [TemperatureSource.ExhaustGasTemperature]: 0xe,
  [TemperatureSource.ShaftSealTemperature]: 0xf,
}

/**
 * @category Enumerations
 */
export enum ThrusterDirectionControl {
  Off = 'Off',
  Ready = 'Ready',
  ToPort = 'To Port',
  ToStarboard = 'To Starboard',
}

/**
 * @category Enumerations
 */
export const ThrusterDirectionControlValues: {[key: string]: number} = {
  [ThrusterDirectionControl.Off]: 0x0,
  [ThrusterDirectionControl.Ready]: 0x1,
  [ThrusterDirectionControl.ToPort]: 0x2,
  [ThrusterDirectionControl.ToStarboard]: 0x3,
}

/**
 * @category Enumerations
 */
export enum ThrusterMotorType {
  _12Vdc = '12VDC',
  _24Vdc = '24VDC',
  _48Vdc = '48VDC',
  _24Vac = '24VAC',
  Hydraulic = 'Hydraulic',
}

/**
 * @category Enumerations
 */
export const ThrusterMotorTypeValues: {[key: string]: number} = {
  [ThrusterMotorType._12Vdc]: 0x0,
  [ThrusterMotorType._24Vdc]: 0x1,
  [ThrusterMotorType._48Vdc]: 0x2,
  [ThrusterMotorType._24Vac]: 0x3,
  [ThrusterMotorType.Hydraulic]: 0x4,
}

/**
 * @category Enumerations
 */
export enum ThrusterRetractControl {
  Off = 'Off',
  Extend = 'Extend',
  Retract = 'Retract',
}

/**
 * @category Enumerations
 */
export const ThrusterRetractControlValues: {[key: string]: number} = {
  [ThrusterRetractControl.Off]: 0x0,
  [ThrusterRetractControl.Extend]: 0x1,
  [ThrusterRetractControl.Retract]: 0x2,
}

/**
 * @category Enumerations
 */
export enum Tide {
  Falling = 'Falling',
  Rising = 'Rising',
}

/**
 * @category Enumerations
 */
export const TideValues: {[key: string]: number} = {
  [Tide.Falling]: 0x0,
  [Tide.Rising]: 0x1,
}

/**
 * @category Enumerations
 */
export enum TimeStamp {
  NotAvailable = 'Not available',
  ManualInputMode = 'Manual input mode',
  DeadReckoningMode = 'Dead reckoning mode',
  PositioningSystemIsInoperative = 'Positioning system is inoperative',
}

/**
 * @category Enumerations
 */
export const TimeStampValues: {[key: string]: number} = {
  [TimeStamp.NotAvailable]: 0x3c,
  [TimeStamp.ManualInputMode]: 0x3d,
  [TimeStamp.DeadReckoningMode]: 0x3e,
  [TimeStamp.PositioningSystemIsInoperative]: 0x3f,
}

/**
 * @category Enumerations
 */
export enum Tracking {
  Cancelled = 'Cancelled',
  Acquiring = 'Acquiring',
  Tracking = 'Tracking',
  Lost = 'Lost',
}

/**
 * @category Enumerations
 */
export const TrackingValues: {[key: string]: number} = {
  [Tracking.Cancelled]: 0x0,
  [Tracking.Acquiring]: 0x1,
  [Tracking.Tracking]: 0x2,
  [Tracking.Lost]: 0x3,
}

/**
 * @category Enumerations
 */
export enum TransmissionInterval {
  Acknowledge = 'Acknowledge',
  TransmitIntervalpriorityNotSupported = 'Transmit Interval/Priority not supported',
  TransmitIntervalTooLow = 'Transmit Interval too low',
  AccessDenied = 'Access denied',
  NotSupported = 'Not supported',
}

/**
 * @category Enumerations
 */
export const TransmissionIntervalValues: {[key: string]: number} = {
  [TransmissionInterval.Acknowledge]: 0x0,
  [TransmissionInterval.TransmitIntervalpriorityNotSupported]: 0x1,
  [TransmissionInterval.TransmitIntervalTooLow]: 0x2,
  [TransmissionInterval.AccessDenied]: 0x3,
  [TransmissionInterval.NotSupported]: 0x4,
}

/**
 * @category Enumerations
 */
export enum TurnMode {
  RudderLimitControlled = 'Rudder limit controlled',
  TurnRateControlled = 'Turn rate controlled',
  RadiusControlled = 'Radius controlled',
}

/**
 * @category Enumerations
 */
export const TurnModeValues: {[key: string]: number} = {
  [TurnMode.RudderLimitControlled]: 0x0,
  [TurnMode.TurnRateControlled]: 0x1,
  [TurnMode.RadiusControlled]: 0x2,
}

/**
 * @category Enumerations
 */
export enum TxRxMode {
  TxAtxBRxArxB = 'Tx A/Tx B, Rx A/Rx B',
  TxARxArxB = 'Tx A, Rx A/Rx B',
  TxBRxArxB = 'Tx B, Rx A/Rx B',
}

/**
 * @category Enumerations
 */
export const TxRxModeValues: {[key: string]: number} = {
  [TxRxMode.TxAtxBRxArxB]: 0x0,
  [TxRxMode.TxARxArxB]: 0x1,
  [TxRxMode.TxBRxArxB]: 0x2,
}

/**
 * @category Enumerations
 */
export enum VideoProtocols {
  Pal = 'PAL',
  Ntsc = 'NTSC',
}

/**
 * @category Enumerations
 */
export const VideoProtocolsValues: {[key: string]: number} = {
  [VideoProtocols.Pal]: 0x0,
  [VideoProtocols.Ntsc]: 0x1,
}

/**
 * @category Enumerations
 */
export enum WatermakerState {
  Stopped = 'Stopped',
  Starting = 'Starting',
  Running = 'Running',
  Stopping = 'Stopping',
  Flushing = 'Flushing',
  Rinsing = 'Rinsing',
  Initiating = 'Initiating',
  Manual = 'Manual',
}

/**
 * @category Enumerations
 */
export const WatermakerStateValues: {[key: string]: number} = {
  [WatermakerState.Stopped]: 0x0,
  [WatermakerState.Starting]: 0x1,
  [WatermakerState.Running]: 0x2,
  [WatermakerState.Stopping]: 0x3,
  [WatermakerState.Flushing]: 0x4,
  [WatermakerState.Rinsing]: 0x5,
  [WatermakerState.Initiating]: 0x6,
  [WatermakerState.Manual]: 0x7,
}

/**
 * @category Enumerations
 */
export enum WaterReference {
  PaddleWheel = 'Paddle wheel',
  PitotTube = 'Pitot tube',
  Doppler = 'Doppler',
  CorrelationultraSound = 'Correlation (ultra sound)',
  ElectroMagnetic = 'Electro Magnetic',
}

/**
 * @category Enumerations
 */
export const WaterReferenceValues: {[key: string]: number} = {
  [WaterReference.PaddleWheel]: 0x0,
  [WaterReference.PitotTube]: 0x1,
  [WaterReference.Doppler]: 0x2,
  [WaterReference.CorrelationultraSound]: 0x3,
  [WaterReference.ElectroMagnetic]: 0x4,
}

/**
 * @category Enumerations
 */
export enum Waveform {
  SineWave = 'Sine wave',
  ModifiedSineWave = 'Modified sine wave',
}

/**
 * @category Enumerations
 */
export const WaveformValues: {[key: string]: number} = {
  [Waveform.SineWave]: 0x0,
  [Waveform.ModifiedSineWave]: 0x1,
}

/**
 * @category Enumerations
 */
export enum WindlassDirection {
  Off = 'Off',
  Down = 'Down',
  Up = 'Up',
}

/**
 * @category Enumerations
 */
export const WindlassDirectionValues: {[key: string]: number} = {
  [WindlassDirection.Off]: 0x0,
  [WindlassDirection.Down]: 0x1,
  [WindlassDirection.Up]: 0x2,
}

/**
 * @category Enumerations
 */
export enum WindlassMotion {
  WindlassStopped = 'Windlass stopped',
  DeploymentOccurring = 'Deployment occurring',
  RetrievalOccurring = 'Retrieval occurring',
}

/**
 * @category Enumerations
 */
export const WindlassMotionValues: {[key: string]: number} = {
  [WindlassMotion.WindlassStopped]: 0x0,
  [WindlassMotion.DeploymentOccurring]: 0x1,
  [WindlassMotion.RetrievalOccurring]: 0x2,
}

/**
 * @category Enumerations
 */
export enum WindReference {
  TruegroundReferencedToNorth = 'True (ground referenced to North)',
  MagneticgroundReferencedToMagneticNorth = 'Magnetic (ground referenced to Magnetic North)',
  Apparent = 'Apparent',
  TrueboatReferenced = 'True (boat referenced)',
  TruewaterReferenced = 'True (water referenced)',
}

/**
 * @category Enumerations
 */
export const WindReferenceValues: {[key: string]: number} = {
  [WindReference.TruegroundReferencedToNorth]: 0x0,
  [WindReference.MagneticgroundReferencedToMagneticNorth]: 0x1,
  [WindReference.Apparent]: 0x2,
  [WindReference.TrueboatReferenced]: 0x3,
  [WindReference.TruewaterReferenced]: 0x4,
}

/**
 * @category Enumerations
 */
export enum WpIdentificationMethod {
  WaypointsInWpList = 'Waypoints in WP list',
  WaypointsEmbeddedInRoute = 'Waypoints embedded in route',
}

/**
 * @category Enumerations
 */
export const WpIdentificationMethodValues: {[key: string]: number} = {
  [WpIdentificationMethod.WaypointsInWpList]: 0x0,
  [WpIdentificationMethod.WaypointsEmbeddedInRoute]: 0x1,
}

/**
 * @category Enumerations
 */
export enum WpNavigationMethod {
  GreatCircle = 'Great Circle',
  RhumbLine = 'Rhumb Line',
}

/**
 * @category Enumerations
 */
export const WpNavigationMethodValues: {[key: string]: number} = {
  [WpNavigationMethod.GreatCircle]: 0x0,
  [WpNavigationMethod.RhumbLine]: 0x1,
}

/**
 * @category Enumerations
 */
export enum WpPositionResolution {
  MoreThan01Min = 'more than 0.1 min',
  _00101Min = '<0.01 .. 0.1] min',
  _0001001Min = '<0.001 .. 0.01] min',
  _000010001Min = '<0.0001 .. 0.001] min',
  _000001Min = '<0 .. 0.0001] min',
}

/**
 * @category Enumerations
 */
export const WpPositionResolutionValues: {[key: string]: number} = {
  [WpPositionResolution.MoreThan01Min]: 0x0,
  [WpPositionResolution._00101Min]: 0x1,
  [WpPositionResolution._0001001Min]: 0x2,
  [WpPositionResolution._000010001Min]: 0x3,
  [WpPositionResolution._000001Min]: 0x4,
}

/**
 * @category Enumerations
 */
export enum WpRouteStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Deleted = 'Deleted',
}

/**
 * @category Enumerations
 */
export const WpRouteStatusValues: {[key: string]: number} = {
  [WpRouteStatus.Active]: 0x0,
  [WpRouteStatus.Inactive]: 0x1,
  [WpRouteStatus.Deleted]: 0x2,
}

/**
 * @category Enumerations
 */
export enum YesNo {
  No = 'No',
  Yes = 'Yes',
}

/**
 * @category Enumerations
 */
export const YesNoValues: {[key: string]: number} = {
  [YesNo.No]: 0x0,
  [YesNo.Yes]: 0x1,
}

/**
 * @category Enumerations
 */
export enum YesNo1Bit {
  No = 'No',
  Yes = 'Yes',
}

/**
 * @category Enumerations
 */
export const YesNo1BitValues: {[key: string]: number} = {
  [YesNo1Bit.No]: 0x0,
  [YesNo1Bit.Yes]: 0x1,
}

/**
 * @category Enumerations
 */
export enum ZoneSize {
  _1Nm = '1 nm',
  _2Nm = '2 nm',
  _3Nm = '3 nm',
  _4Nm = '4 nm',
  _5Nm = '5 nm',
  _6Nm = '6 nm',
}

/**
 * @category Enumerations
 */
export const ZoneSizeValues: {[key: string]: number} = {
  [ZoneSize._1Nm]: 0x0,
  [ZoneSize._2Nm]: 0x1,
  [ZoneSize._3Nm]: 0x2,
  [ZoneSize._4Nm]: 0x3,
  [ZoneSize._5Nm]: 0x4,
  [ZoneSize._6Nm]: 0x5,
}

/**
 * @category Enumerations
 */
export enum DeviceFunction {
  Diagnostic = 'Diagnostic',
  BusTrafficLogger = 'Bus Traffic Logger',
  AlarmEnunciator = 'Alarm Enunciator',
  EmergencyPositionIndicatingRadioBeaconepirb = 'Emergency Position Indicating Radio Beacon (EPIRB)',
  ManOverboard = 'Man Overboard',
  VoyageDataRecorder = 'Voyage Data Recorder',
  Camera = 'Camera',
  PcGateway = 'PC Gateway',
  Nmea2000ToAnalogGateway = 'NMEA 2000 to Analog Gateway',
  AnalogToNmea2000Gateway = 'Analog to NMEA 2000 Gateway',
  Nmea2000ToSerialGateway = 'NMEA 2000 to Serial Gateway',
  Nmea0183Gateway = 'NMEA 0183 Gateway',
  NmeaNetworkGateway = 'NMEA Network Gateway',
  Nmea2000WirelessGateway = 'NMEA 2000 Wireless Gateway',
  Router = 'Router',
  Bridge = 'Bridge',
  Repeater = 'Repeater',
  BinaryEventMonitor = 'Binary Event Monitor',
  LoadController = 'Load Controller',
  AcdcInput = 'AC/DC Input',
  FunctionController = 'Function Controller',
  Engine = 'Engine',
  DcGeneratoralternator = 'DC Generator/Alternator',
  SolarPanelsolarArray = 'Solar Panel (Solar Array)',
  WindGeneratordc = 'Wind Generator (DC)',
  FuelCell = 'Fuel Cell',
  NetworkPowerSupply = 'Network Power Supply',
  AcGenerator = 'AC Generator',
  AcBus = 'AC Bus',
  AcMainsutilityshore = 'AC Mains (Utility/Shore)',
  AcOutput = 'AC Output',
  PowerConverterBatteryCharger = 'Power Converter - Battery Charger',
  PowerConverterBatteryChargerPlusinverter = 'Power Converter - Battery Charger+Inverter',
  PowerConverterInverter = 'Power Converter - Inverter',
  PowerConverterDc = 'Power Converter - DC',
  Battery = 'Battery',
  EngineGateway = 'Engine Gateway',
  FollowUpController = 'Follow-up Controller',
  ModeController = 'Mode Controller',
  Autopilot = 'Autopilot',
  Rudder = 'Rudder',
  HeadingSensors = 'Heading Sensors',
  Trimtabsinterceptors = 'Trim (Tabs)/Interceptors',
  AttitudepitchRollYawControl = 'Attitude (Pitch, Roll, Yaw) Control',
  EngineroomMonitoring = 'Engineroom Monitoring',
  EngineController = 'Engine Controller',
  Motor = 'Motor',
  Transmission = 'Transmission',
  ThrottleshiftControl = 'Throttle/Shift Control',
  Actuator = 'Actuator',
  GaugeInterface = 'Gauge Interface',
  GaugeLarge = 'Gauge Large',
  GaugeSmall = 'Gauge Small',
  BottomDepth = 'Bottom Depth',
  BottomDepthspeed = 'Bottom Depth/Speed',
  BottomDepthspeedtemperature = 'Bottom Depth/Speed/Temperature',
  OwnshipAttitude = 'Ownship Attitude',
  OwnshipPositiongnss = 'Ownship Position (GNSS)',
  OwnshipPositionloranC = 'Ownship Position (Loran C)',
  Speed = 'Speed',
  TurnRateIndicator = 'Turn Rate Indicator',
  IntegratedNavigation = 'Integrated Navigation',
  IntegratedNavigationSystem = 'Integrated Navigation System',
  NavigationManagement = 'Navigation Management',
  AutomaticIdentificationSystemais = 'Automatic Identification System (AIS)',
  Radar = 'Radar',
  InfraredImaging = 'Infrared Imaging',
  Ecdis = 'ECDIS',
  Ecs = 'ECS',
  DirectionFinder = 'Direction Finder',
  VoyageStatus = 'Voyage Status',
  Epirb = 'EPIRB',
  Ais = 'AIS',
  Dsc = 'DSC',
  DataReceivertransceiver = 'Data Receiver/Transceiver',
  Satellite = 'Satellite',
  RadioTelephonemfhf = 'Radio-telephone (MF/HF)',
  Radiotelephone = 'Radiotelephone',
  Temperature = 'Temperature',
  Pressure = 'Pressure',
  FluidLevel = 'Fluid Level',
  Flow = 'Flow',
  Humidity = 'Humidity',
  TimedateSystems = 'Time/Date Systems',
  Vdr = 'VDR',
  IntegratedInstrumentation = 'Integrated Instrumentation',
  GeneralPurposeDisplays = 'General Purpose Displays',
  GeneralSensorBox = 'General Sensor Box',
  WeatherInstruments = 'Weather Instruments',
  Transducergeneral = 'Transducer/General',
  Nmea0183Converter = 'NMEA 0183 Converter',
  Atmospheric = 'Atmospheric',
  Aquatic = 'Aquatic',
  Hvac = 'HVAC',
  Scalecatch = 'Scale (Catch)',
  ButtonInterface = 'Button Interface',
  SwitchInterface = 'Switch Interface',
  AnalogInterface = 'Analog Interface',
  Display = 'Display',
  MultimediaPlayer = 'Multimedia Player',
  MultimediaController = 'Multimedia Controller',
}

/**
 * @category Enumerations
 */
export enum FusionSettingValue {
  Usa = 'USA',
  Europe = 'Europe',
  Japan = 'Japan',
  Australasia = 'Australasia',
}

/**
 * @category Enumerations
 */
export enum DisabledSatellites {
  DisableSv1 = 'Disable SV #1',
  DisableSv2 = 'Disable SV #2',
  DisableSv3 = 'Disable SV #3',
  DisableSv4 = 'Disable SV #4',
  DisableSv5 = 'Disable SV #5',
  DisableSv6 = 'Disable SV #6',
  DisableSv7 = 'Disable SV #7',
  DisableSv8 = 'Disable SV #8',
  DisableSv9 = 'Disable SV #9',
  DisableSv10 = 'Disable SV #10',
  DisableSv11 = 'Disable SV #11',
  DisableSv12 = 'Disable SV #12',
  DisableSv13 = 'Disable SV #13',
  DisableSv14 = 'Disable SV #14',
  DisableSv15 = 'Disable SV #15',
  DisableSv16 = 'Disable SV #16',
  DisableSv17 = 'Disable SV #17',
  DisableSv18 = 'Disable SV #18',
  DisableSv19 = 'Disable SV #19',
  DisableSv20 = 'Disable SV #20',
  DisableSv21 = 'Disable SV #21',
  DisableSv22 = 'Disable SV #22',
  DisableSv23 = 'Disable SV #23',
  DisableSv24 = 'Disable SV #24',
  DisableSv25 = 'Disable SV #25',
  DisableSv26 = 'Disable SV #26',
  DisableSv27 = 'Disable SV #27',
  DisableSv28 = 'Disable SV #28',
  DisableSv29 = 'Disable SV #29',
  DisableSv30 = 'Disable SV #30',
  DisableSv31 = 'Disable SV #31',
  DisableSv32 = 'Disable SV #32',
  DisableSv33 = 'Disable SV #33',
  DisableSv34 = 'Disable SV #34',
  DisableSv35 = 'Disable SV #35',
  DisableSv36 = 'Disable SV #36',
  DisableSv37 = 'Disable SV #37',
  DisableSv38 = 'Disable SV #38',
  DisableSv39 = 'Disable SV #39',
  DisableSv40 = 'Disable SV #40',
}

/**
 * @category Enumerations
 */
export enum EngineStatus1 {
  CheckEngine = 'Check Engine',
  OverTemperature = 'Over Temperature',
  LowOilPressure = 'Low Oil Pressure',
  LowOilLevel = 'Low Oil Level',
  LowFuelPressure = 'Low Fuel Pressure',
  LowSystemVoltage = 'Low System Voltage',
  LowCoolantLevel = 'Low Coolant Level',
  WaterFlow = 'Water Flow',
  WaterInFuel = 'Water In Fuel',
  ChargeIndicator = 'Charge Indicator',
  PreheatIndicator = 'Preheat Indicator',
  HighBoostPressure = 'High Boost Pressure',
  RevLimitExceeded = 'Rev Limit Exceeded',
  EgrSystem = 'EGR System',
  ThrottlePositionSensor = 'Throttle Position Sensor',
  EmergencyStop = 'Emergency Stop',
}

/**
 * @category Enumerations
 */
export enum EngineStatus2 {
  WarningLevel1 = 'Warning Level 1',
  WarningLevel2 = 'Warning Level 2',
  PowerReduction = 'Power Reduction',
  MaintenanceNeeded = 'Maintenance Needed',
  EngineCommError = 'Engine Comm Error',
  SubOrSecondaryThrottle = 'Sub or Secondary Throttle',
  NeutralStartProtect = 'Neutral Start Protect',
  EngineShuttingDown = 'Engine Shutting Down',
}

/**
 * @category Enumerations
 */
export enum EntertainmentGroupBitfield {
  File = 'File',
  PlaylistName = 'Playlist Name',
  GenreName = 'Genre Name',
  AlbumName = 'Album Name',
  ArtistName = 'Artist Name',
  TrackName = 'Track Name',
  StationName = 'Station Name',
  StationNumber = 'Station Number',
  FavouriteNumber = 'Favourite Number',
  PlayQueue = 'Play Queue',
  ContentInfo = 'Content Info',
}

/**
 * @category Enumerations
 */
export enum EntertainmentPlayStatusBitfield {
  Play = 'Play',
  Pause = 'Pause',
  Stop = 'Stop',
  Ff1X = 'FF 1x',
  Ff2X = 'FF 2x',
  Ff3X = 'FF 3x',
  Ff4X = 'FF 4x',
  Rw1X = 'RW 1x',
  Rw2X = 'RW 2x',
  Rw3X = 'RW 3x',
  Rw4X = 'RW 4x',
  SkipAhead = 'Skip ahead',
  SkipBack = 'Skip back',
  JogAhead = 'Jog ahead',
  JogBack = 'Jog back',
  SeekUp = 'Seek up',
  SeekDown = 'Seek down',
  ScanUp = 'Scan up',
  ScanDown = 'Scan down',
  TuneUp = 'Tune up',
  TuneDown = 'Tune down',
  SlowMotion75X = 'Slow motion .75x',
  SlowMotion5X = 'Slow motion .5x',
  SlowMotion25X = 'Slow motion .25x',
  SlowMotion125X = 'Slow motion .125x',
  SourceRenaming = 'Source renaming',
}

/**
 * @category Enumerations
 */
export enum EntertainmentRepeatBitfield {
  Song = 'Song',
  PlayQueue = 'Play queue',
}

/**
 * @category Enumerations
 */
export enum EntertainmentShuffleBitfield {
  PlayQueue = 'Play queue',
  All = 'All',
}

/**
 * @category Enumerations
 */
export enum FurunoBaselineStatus {
  BaselineAntenna12 = 'Baseline Antenna 1-2',
  BaselineAntenna23 = 'Baseline Antenna 2-3',
  BaselineAntenna34 = 'Baseline Antenna 3-4',
  BaselineAntenna41 = 'Baseline Antenna 4-1',
  BaselineAntenna13 = 'Baseline Antenna 1-3',
  BaselineAntenna24 = 'Baseline Antenna 2-4',
}

/**
 * @category Enumerations
 */
export enum FusionCapabilityBitfield {
  Volume = 'Volume',
  VolumeLimit = 'Volume Limit',
  Balance = 'Balance',
  Subwoofer = 'Subwoofer',
  LowPassFilter = 'Low Pass Filter',
  HighPassFilter = 'High Pass Filter',
  EqBass = 'EQ Bass',
  EqMid = 'EQ Mid',
  EqTreble = 'EQ Treble',
  LineOut = 'Line Out',
  Dsp = 'DSP',
  InternalAmp = 'Internal Amp',
  Loudness = 'Loudness',
  Tweeter = 'Tweeter',
  SubwooferOnAmp = 'Subwoofer On Amp',
  Mono = 'Mono',
}

/**
 * @category Enumerations
 */
export enum FusionMenuItemFlags {
  Selected = 'Selected',
}

/**
 * @category Enumerations
 */
export enum FusionSystemCapabilityBitfield {
  Ant = 'ANT',
  Bluetooth = 'Bluetooth',
  WiFi = 'Wi-Fi',
  Ethernet = 'Ethernet',
  Nmea2000 = 'NMEA 2000',
  RvVisPort = 'RV VIS Port',
  Lcd = 'LCD',
  PowerButton = 'Power Button',
  ButtonMatrix = 'Button Matrix',
  TouchPanel = 'Touch Panel',
  UsbConnector = 'USB Connector',
  UsbConnector2 = 'USB Connector 2',
  Dsp = 'DSP',
  AmfmAntenna = 'AM/FM Antenna',
  DabAntenna = 'DAB Antenna',
  SiriusXmConnector = 'SiriusXM Connector',
  Spdif = 'S/PDIF',
  HdmiArc = 'HDMI ARC',
  Hdmi = 'HDMI',
  TelephoneMute = 'Telephone Mute',
  DimmerWire = 'Dimmer Wire',
  IgnitionWire = 'Ignition Wire',
  Nmea2000Power = 'NMEA 2000 Power',
  Stm32Coprocessor = 'STM32 Coprocessor',
  Standby = 'Standby',
  MultiroomSource = 'Multiroom Source',
  MultiroomRenderer = 'Multiroom Renderer',
  AmplifierAndLineOutIndependent = 'Amplifier and Line Out Independent',
  WakeOnLan = 'Wake on LAN',
  SiriusXmInstantReplay = 'SiriusXM Instant Replay',
  SiriusXmTuneMix = 'SiriusXM TuneMix',
  ArtistAndSongAlert = 'Artist and Song Alert',
  GameAlert = 'Game Alert',
  SportsFlash = 'Sports Flash',
  Zone1Amplifier2OhmStable = 'Zone 1 Amplifier 2 Ohm Stable',
  Zone1Amplifier4OhmStable = 'Zone 1 Amplifier 4 Ohm Stable',
  Zone2Amplifier2OhmStable = 'Zone 2 Amplifier 2 Ohm Stable',
  Zone2Amplifier4OhmStable = 'Zone 2 Amplifier 4 Ohm Stable',
  AppleAirPlay = 'Apple AirPlay',
  VolumeSyncZone = 'Volume Sync Zone',
  SourceDisable = 'Source Disable',
  SourceRename = 'Source Rename',
  InternalDabModule = 'Internal DAB Module',
}

/**
 * @category Enumerations
 */
export enum SimnetAlertBitfield {
  NoGpsFix = 'No GPS fix',
  NoActiveAutopilotControlUnit = 'No active autopilot control unit',
  NoAutopilotComputer = 'No autopilot computer',
  ApClutchOverload = 'AP clutch overload',
  ApClutchDisengaged = 'AP clutch disengaged',
  RudderControllerFault = 'Rudder controller fault',
  NoRudderResponse = 'No rudder response',
  RudderDriveOverload = 'Rudder drive overload',
  HighDriveSupply = 'High drive supply',
  LowDriveSupply = 'Low drive supply',
  MemoryFail = 'Memory fail',
  ApPositionDataMissing = 'AP position data missing',
  ApSpeedDataMissing = 'AP speed data missing',
  ApDepthDataMissing = 'AP depth data missing',
  ApHeadingDataMissing = 'AP heading data missing',
  ApNavDataMissing = 'AP nav data missing',
  ApRudderDataMissing = 'AP rudder data missing',
  ApWindDataMissing = 'AP wind data missing',
  ApOffCourse = 'AP off course',
  HighDriveTemperature = 'High drive temperature',
  DriveInhibit = 'Drive inhibit',
  RudderLimit = 'Rudder limit',
  DriveComputerMissing = 'Drive computer missing',
  DriveReadyMissing = 'Drive ready missing',
  EvcComError = 'EVC com error',
  EvcOverride = 'EVC override',
  LowCanBusVoltage = 'Low CAN bus voltage',
  CanBusSupplyOverload = 'CAN bus supply overload',
  WindSensorBatteryLow = 'Wind sensor battery low',
}

/**
 * @category Enumerations
 */
export enum SimnetApModeBitfield {
  Standby = 'Standby',
  Heading = 'Heading',
  Nav = 'Nav',
  NoDrift = 'No Drift',
  Wind = 'Wind',
}

/**
 * @category Enumerations
 */
export enum StationStatus {
  StationInUse = 'Station in use',
  LowSnr = 'Low SNR',
  CycleError = 'Cycle Error',
  Blink = 'Blink',
}

/**
 * @category Enumerations
 */
export enum ThrusterControlEvents {
  AnotherDeviceControllingThruster = 'Another device controlling thruster',
  BoatSpeedTooFastToSafelyUseThruster = 'Boat speed too fast to safely use thruster',
}

/**
 * @category Enumerations
 */
export enum ThrusterMotorEvents {
  MotorOverTemperatureCutout = 'Motor over temperature cutout',
  MotorOverCurrentCutout = 'Motor over current cutout',
  LowOilLevelWarning = 'Low oil level warning',
  OilOverTemperatureWarning = 'Oil over temperature warning',
  ControllerUnderVoltageCutout = 'Controller under voltage cutout',
  ManufacturerDefined = 'Manufacturer defined',
}

/**
 * @category Enumerations
 */
export enum TransmissionStatus1 {
  CheckTransmission = 'Check Transmission',
  OverTemperature = 'Over Temperature',
  LowOilPressure = 'Low Oil Pressure',
  LowOilLevel = 'Low Oil Level',
  SailDrive = 'Sail Drive',
}

/**
 * @category Enumerations
 */
export enum WindlassControl {
  AnotherDeviceControllingWindlass = 'Another device controlling windlass',
}

/**
 * @category Enumerations
 */
export enum WindlassMonitoring {
  ControllerUnderVoltageCutOut = 'Controller under voltage cut-out',
  ControllerOverCurrentCutOut = 'Controller over current cut-out',
  ControllerOverTemperatureCutOut = 'Controller over temperature cut-out',
  ManufacturerDefined = 'Manufacturer defined',
}

/**
 * @category Enumerations
 */
export enum WindlassOperation {
  SystemError = 'System error',
  SensorError = 'Sensor error',
  NoWindlassMotionDetected = 'No windlass motion detected',
  RetrievalDockingDistanceReached = 'Retrieval docking distance reached',
  EndOfRodeReached = 'End of rode reached',
}

/**
 * @category Enumerations
 */
export enum WpChange {
  ChangeInMainDatapositionName = 'Change in main data (Position, Name)',
  ChangeInSupplementaryParametersorNewAdded = 'Change in supplementary parameters (or new added)',
  ChangedNumberOfWPsInRoutewpListAndorNameChangedadded = 'Changed number of WPs in Route/WP-List, and/or name changed/added',
  RouteChangeSupplementaryParametersorNewAdded = 'Route: Change supplementary parameters (or new added)',
  OtherNotSpecifiedChanged = 'Other not specified changed',
}

/**
 * @category Enumerations
 */
export enum WpCriticalParameters {
  NavigationMethod = 'Navigation Method',
  XteLimit = 'XTE Limit',
}

