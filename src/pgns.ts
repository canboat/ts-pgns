/* eslint-disable @typescript-eslint/no-explicit-any */
import * as enums from './enums'

/**
 * @category Field Types
 */
export type N2K_Number = number
/**
 * @category Field Types
 */
export type N2K_Float = number
/**
 * @category Field Types
 */
export type N2K_Decimal = number
/**
 * @category Field Types
 */
export type N2K_DynamicFieldKey = string
/**
 * @category Field Types
 */
export type N2K_DynamicFieldLength = number
/**
 * @category Field Types
 */
export type N2K_DynamicFieldValue = any
/**
 * @category Field Types
 */
export type N2K_Time = string
/**
 * @category Field Types
 */
export type N2K_Duration = number
/**
 * @category Field Types
 */
export type N2K_Date = string
/**
 * @category Field Types
 */
export type N2K_Pgn = number
/**
 * @category Field Types
 */
export type N2K_IsoName = number
/**
 * @category Field Types
 */
export type N2K_StringFix = string
/**
 * @category Field Types
 */
export type N2K_StringLz = string
/**
 * @category Field Types
 */
export type N2K_StringLau = string
/**
 * @category Field Types
 */
export type N2K_Binary = number
/**
 * @category Field Types
 */
export type N2K_Reserved = number
/**
 * @category Field Types
 */
export type N2K_Spare = number
/**
 * @category Field Types
 */
export type N2K_Mmsi = string
/**
 * @category Field Types
 */
export type N2K_Variable = any
/**
 * @category Field Types
 */
export type N2K_FieldIndex = number

/**
 * @category PGN Definitions
 */
export interface PGNFields {
}

/**
 * @category PGN Definitions
 */
export interface PGN {
  pgn: number
  prio: number
  src?: number
  dst: number
  timestamp?: string
  input?: string[]
  description?: string
  fields: PGNFields
}

/**
  * PGN: 59392
  *
  * Description: ISO Acknowledgement
  *
  * Explanation: This message is provided by ISO 11783 for a handshake mechanism between transmitting and receiving devices. This message is the possible response to acknowledge the reception of a 'normal broadcast' message or the response to a specific command to indicate compliance or failure.
  *
  * @category PGN_59392
 */
export interface PGN_59392 extends PGN {
 fields: PGN_59392Fields
}

/**
 * @category PGN_59392
 */
export interface PGN_59392Fields {
  control?: enums.IsoControl|number
  groupFunction?: N2K_Number
  reserved?: number
  pgn?: N2K_Pgn
}

/**
 * @category PGN_59392
 */
export const PGN_59392Defaults = {
  pgn: 59392,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_59392
 */
export const newPGN_59392 = (fields: PGN_59392Fields, dst:number=255) : PGN_59392 => {
  return {
    ...PGN_59392Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 59904
  *
  * Description: ISO Request
  *
  * Explanation: As defined by ISO, this message has a data length of 3 bytes with no padding added to complete the single frame. The appropriate response to this message is based on the PGN being requested, and whether the receiver supports the requested PGN.
  *
  * @category PGN_59904
 */
export interface PGN_59904 extends PGN {
 fields: PGN_59904Fields
}

/**
 * @category PGN_59904
 */
export interface PGN_59904Fields {
  pgn?: N2K_Pgn
}

/**
 * @category PGN_59904
 */
export const PGN_59904Defaults = {
  pgn: 59904,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_59904
 */
export const newPGN_59904 = (fields: PGN_59904Fields, dst:number=255) : PGN_59904 => {
  return {
    ...PGN_59904Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 60160
  *
  * Description: ISO Transport Protocol, Data Transfer
  *
  * Explanation: ISO 11783 defines this PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN represents a single packet of a multipacket message.
  *
  * @category PGN_60160
 */
export interface PGN_60160 extends PGN {
 fields: PGN_60160Fields
}

/**
 * @category PGN_60160
 */
export interface PGN_60160Fields {
  sid?: N2K_Number
  data?: N2K_Binary
}

/**
 * @category PGN_60160
 */
export const PGN_60160Defaults = {
  pgn: 60160,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_60160
 */
export const newPGN_60160 = (fields: PGN_60160Fields, dst:number=255) : PGN_60160 => {
  return {
    ...PGN_60160Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 60416
  *
  * Description: ISO Transport Protocol, Connection Management - Request To Send
  *
  * Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to prepare the receiver for the fact that this sender wants to transmit a long message. The receiver will respond with CTS.
  *
  * Match: Group Function Code == RTS<br>
  *
  * @category PGN_60416_IsoTransportProtocolConnectionManagementRequestToSend
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementRequestToSend extends PGN {
 fields: PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendFields
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementRequestToSend
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendFields {
  groupFunctionCode?: enums.IsoCommand|number
  messageSize?: N2K_Number
  packets?: N2K_Number
  packetsReply?: N2K_Number
  pgn?: N2K_Pgn
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementRequestToSend
 */
export const PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendDefaults = {
  pgn: 60416,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementRequestToSend
 */
export const PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendMatchFields = {
  groupFunctionCode: enums.IsoCommand.Rts,
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementRequestToSend
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendCreateArgs {
  messageSize?: N2K_Number
  packets?: N2K_Number
  packetsReply?: N2K_Number
  pgn?: N2K_Pgn
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementRequestToSend
 */
export const newPGN_60416_IsoTransportProtocolConnectionManagementRequestToSend = (fields: PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendCreateArgs, dst:number=255) : PGN_60416_IsoTransportProtocolConnectionManagementRequestToSend => {
  return {
    ...PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendDefaults,
    dst,
    fields: {
      ...PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 60416
  *
  * Description: ISO Transport Protocol, Connection Management - Clear To Send
  *
  * Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to signal to the sender that the receive is ready to receive a number of frames.
  *
  * Match: Group Function Code == CTS<br>
  *
  * @category PGN_60416_IsoTransportProtocolConnectionManagementClearToSend
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementClearToSend extends PGN {
 fields: PGN_60416_IsoTransportProtocolConnectionManagementClearToSendFields
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementClearToSend
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementClearToSendFields {
  groupFunctionCode?: enums.IsoCommand|number
  maxPackets?: N2K_Number
  nextSid?: N2K_Number
  reserved?: number
  pgn?: N2K_Pgn
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementClearToSend
 */
export const PGN_60416_IsoTransportProtocolConnectionManagementClearToSendDefaults = {
  pgn: 60416,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementClearToSend
 */
export const PGN_60416_IsoTransportProtocolConnectionManagementClearToSendMatchFields = {
  groupFunctionCode: enums.IsoCommand.Cts,
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementClearToSend
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementClearToSendCreateArgs {
  maxPackets?: N2K_Number
  nextSid?: N2K_Number
  reserved?: number
  pgn?: N2K_Pgn
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementClearToSend
 */
export const newPGN_60416_IsoTransportProtocolConnectionManagementClearToSend = (fields: PGN_60416_IsoTransportProtocolConnectionManagementClearToSendCreateArgs, dst:number=255) : PGN_60416_IsoTransportProtocolConnectionManagementClearToSend => {
  return {
    ...PGN_60416_IsoTransportProtocolConnectionManagementClearToSendDefaults,
    dst,
    fields: {
      ...PGN_60416_IsoTransportProtocolConnectionManagementClearToSendMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 60416
  *
  * Description: ISO Transport Protocol, Connection Management - End Of Message
  *
  * Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to mark the end of the message.
  *
  * Match: Group Function Code == EOM<br>
  *
  * @category PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessage
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessage extends PGN {
 fields: PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageFields
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessage
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageFields {
  groupFunctionCode?: enums.IsoCommand|number
  totalMessageSize?: N2K_Number
  totalNumberOfFramesReceived?: N2K_Number
  reserved?: number
  pgn?: N2K_Pgn
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessage
 */
export const PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageDefaults = {
  pgn: 60416,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessage
 */
export const PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageMatchFields = {
  groupFunctionCode: enums.IsoCommand.Eom,
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessage
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageCreateArgs {
  totalMessageSize?: N2K_Number
  totalNumberOfFramesReceived?: N2K_Number
  reserved?: number
  pgn?: N2K_Pgn
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessage
 */
export const newPGN_60416_IsoTransportProtocolConnectionManagementEndOfMessage = (fields: PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageCreateArgs, dst:number=255) : PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessage => {
  return {
    ...PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageDefaults,
    dst,
    fields: {
      ...PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 60416
  *
  * Description: ISO Transport Protocol, Connection Management - Broadcast Announce
  *
  * Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to announce a broadcast of a long message spanning multiple frames.
  *
  * Match: Group Function Code == BAM<br>
  *
  * @category PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounce
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounce extends PGN {
 fields: PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceFields
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounce
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceFields {
  groupFunctionCode?: enums.IsoCommand|number
  messageSize?: N2K_Number
  packets?: N2K_Number
  reserved?: number
  pgn?: N2K_Pgn
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounce
 */
export const PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceDefaults = {
  pgn: 60416,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounce
 */
export const PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceMatchFields = {
  groupFunctionCode: enums.IsoCommand.Bam,
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounce
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceCreateArgs {
  messageSize?: N2K_Number
  packets?: N2K_Number
  reserved?: number
  pgn?: N2K_Pgn
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounce
 */
export const newPGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounce = (fields: PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceCreateArgs, dst:number=255) : PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounce => {
  return {
    ...PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceDefaults,
    dst,
    fields: {
      ...PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 60416
  *
  * Description: ISO Transport Protocol, Connection Management - Abort
  *
  * Explanation: ISO 11783 defines this group function PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN's role in the transport process is to announce an abort of a long message spanning multiple frames.
  *
  * Match: Group Function Code == Abort<br>
  *
  * @category PGN_60416_IsoTransportProtocolConnectionManagementAbort
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementAbort extends PGN {
 fields: PGN_60416_IsoTransportProtocolConnectionManagementAbortFields
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementAbort
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementAbortFields {
  groupFunctionCode?: enums.IsoCommand|number
  reason?: N2K_Binary
  reserved?: number
  pgn?: N2K_Pgn
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementAbort
 */
export const PGN_60416_IsoTransportProtocolConnectionManagementAbortDefaults = {
  pgn: 60416,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementAbort
 */
export const PGN_60416_IsoTransportProtocolConnectionManagementAbortMatchFields = {
  groupFunctionCode: enums.IsoCommand.Abort,
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementAbort
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementAbortCreateArgs {
  reason?: N2K_Binary
  reserved?: number
  pgn?: N2K_Pgn
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementAbort
 */
export const newPGN_60416_IsoTransportProtocolConnectionManagementAbort = (fields: PGN_60416_IsoTransportProtocolConnectionManagementAbortCreateArgs, dst:number=255) : PGN_60416_IsoTransportProtocolConnectionManagementAbort => {
  return {
    ...PGN_60416_IsoTransportProtocolConnectionManagementAbortDefaults,
    dst,
    fields: {
      ...PGN_60416_IsoTransportProtocolConnectionManagementAbortMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 60928
  *
  * Description: ISO Address Claim
  *
  * Explanation: This network management message is used to claim network address, reply to devices requesting the claimed address, and to respond with device information (NAME) requested by the ISO Request or Complex Request Group Function. This PGN contains several fields that are requestable, either independently or in any combination. Note that there are several places where this 64-bit data also occurs, these are named ISO_NAME and can be recursively explained.
  *
  * @category PGN_60928
 */
export interface PGN_60928 extends PGN {
 fields: PGN_60928Fields
}

/**
 * @category PGN_60928
 */
export interface PGN_60928Fields {
  uniqueNumber?: N2K_Number
  manufacturerCode?: enums.ManufacturerCode|number
  deviceInstanceLower?: N2K_Number
  deviceInstanceUpper?: N2K_Number
  deviceFunction?: enums.DeviceFunction|number
  spare?: number
  deviceClass?: enums.DeviceClass|number
  systemInstance?: N2K_Number
  industryGroup?: enums.IndustryCode|number
  arbitraryAddressCapable: enums.YesNo|number
}

/**
 * @category PGN_60928
 */
export const PGN_60928Defaults = {
  pgn: 60928,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_60928
 */
export const newPGN_60928 = (fields: PGN_60928Fields, dst:number=255) : PGN_60928 => {
  return {
    ...PGN_60928Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 61184
  *
  * Description: Seatalk: Wireless Keypad Light Control
  *
  * Match: Manufacturer Code == Raymarine<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Wireless Keypad Light Control<br>
  *
  * @category PGN_61184_SeatalkWirelessKeypadLightControl
 */
export interface PGN_61184_SeatalkWirelessKeypadLightControl extends PGN {
 fields: PGN_61184_SeatalkWirelessKeypadLightControlFields
}

/**
 * @category PGN_61184_SeatalkWirelessKeypadLightControl
 */
export interface PGN_61184_SeatalkWirelessKeypadLightControlFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: N2K_Number
  variant?: N2K_Number
  wirelessSetting?: N2K_Number
  wiredSetting?: N2K_Number
  reserved8?: number
}

/**
 * @category PGN_61184_SeatalkWirelessKeypadLightControl
 */
export const PGN_61184_SeatalkWirelessKeypadLightControlDefaults = {
  pgn: 61184,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_61184_SeatalkWirelessKeypadLightControl
 */
export const PGN_61184_SeatalkWirelessKeypadLightControlMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Raymarine,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: 1,
}

/**
 * @category PGN_61184_SeatalkWirelessKeypadLightControl
 */
export interface PGN_61184_SeatalkWirelessKeypadLightControlCreateArgs {
  reserved?: number
  variant?: N2K_Number
  wirelessSetting?: N2K_Number
  wiredSetting?: N2K_Number
  reserved8?: number
}

/**
 * @category PGN_61184_SeatalkWirelessKeypadLightControl
 */
export const newPGN_61184_SeatalkWirelessKeypadLightControl = (fields: PGN_61184_SeatalkWirelessKeypadLightControlCreateArgs, dst:number=255) : PGN_61184_SeatalkWirelessKeypadLightControl => {
  return {
    ...PGN_61184_SeatalkWirelessKeypadLightControlDefaults,
    dst,
    fields: {
      ...PGN_61184_SeatalkWirelessKeypadLightControlMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 61184
  *
  * Description: Seatalk: Wireless Keypad Control
  *
  * Match: Manufacturer Code == Raymarine<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_61184_SeatalkWirelessKeypadControl
 */
export interface PGN_61184_SeatalkWirelessKeypadControl extends PGN {
 fields: PGN_61184_SeatalkWirelessKeypadControlFields
}

/**
 * @category PGN_61184_SeatalkWirelessKeypadControl
 */
export interface PGN_61184_SeatalkWirelessKeypadControlFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  PID: N2K_Number
  variant?: N2K_Number
  beepControl?: N2K_Number
  reserved7?: number
}

/**
 * @category PGN_61184_SeatalkWirelessKeypadControl
 */
export const PGN_61184_SeatalkWirelessKeypadControlDefaults = {
  pgn: 61184,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_61184_SeatalkWirelessKeypadControl
 */
export const PGN_61184_SeatalkWirelessKeypadControlMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Raymarine,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_61184_SeatalkWirelessKeypadControl
 */
export interface PGN_61184_SeatalkWirelessKeypadControlCreateArgs {
  reserved?: number
  PID: N2K_Number
  variant?: N2K_Number
  beepControl?: N2K_Number
  reserved7?: number
}

/**
 * @category PGN_61184_SeatalkWirelessKeypadControl
 */
export const newPGN_61184_SeatalkWirelessKeypadControl = (fields: PGN_61184_SeatalkWirelessKeypadControlCreateArgs, dst:number=255) : PGN_61184_SeatalkWirelessKeypadControl => {
  return {
    ...PGN_61184_SeatalkWirelessKeypadControlDefaults,
    dst,
    fields: {
      ...PGN_61184_SeatalkWirelessKeypadControlMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 61184
  *
  * Description: Victron Battery Register
  *
  * Match: Manufacturer Code == Victron Energy<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_61184_VictronBatteryRegister
 */
export interface PGN_61184_VictronBatteryRegister extends PGN {
 fields: PGN_61184_VictronBatteryRegisterFields
}

/**
 * @category PGN_61184_VictronBatteryRegister
 */
export interface PGN_61184_VictronBatteryRegisterFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  registerId?: N2K_Number
  payload?: N2K_Number
}

/**
 * @category PGN_61184_VictronBatteryRegister
 */
export const PGN_61184_VictronBatteryRegisterDefaults = {
  pgn: 61184,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_61184_VictronBatteryRegister
 */
export const PGN_61184_VictronBatteryRegisterMatchFields = {
  manufacturerCode: enums.ManufacturerCode.VictronEnergy,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_61184_VictronBatteryRegister
 */
export interface PGN_61184_VictronBatteryRegisterCreateArgs {
  reserved?: number
  registerId?: N2K_Number
  payload?: N2K_Number
}

/**
 * @category PGN_61184_VictronBatteryRegister
 */
export const newPGN_61184_VictronBatteryRegister = (fields: PGN_61184_VictronBatteryRegisterCreateArgs, dst:number=255) : PGN_61184_VictronBatteryRegister => {
  return {
    ...PGN_61184_VictronBatteryRegisterDefaults,
    dst,
    fields: {
      ...PGN_61184_VictronBatteryRegisterMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 65001
  *
  * Description: Bus #1 Phase C Basic AC Quantities
  *
  * @category PGN_65001
 */
export interface PGN_65001 extends PGN {
 fields: PGN_65001Fields
}

/**
 * @category PGN_65001
 */
export interface PGN_65001Fields {
  lineLineAcRmsVoltage?: N2K_Number
  lineNeutralAcRmsVoltage?: N2K_Number
  acFrequency?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_65001
 */
export const PGN_65001Defaults = {
  pgn: 65001,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65001
 */
export const newPGN_65001 = (fields: PGN_65001Fields, dst:number=255) : PGN_65001 => {
  return {
    ...PGN_65001Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65002
  *
  * Description: Bus #1 Phase B Basic AC Quantities
  *
  * @category PGN_65002
 */
export interface PGN_65002 extends PGN {
 fields: PGN_65002Fields
}

/**
 * @category PGN_65002
 */
export interface PGN_65002Fields {
  lineLineAcRmsVoltage?: N2K_Number
  lineNeutralAcRmsVoltage?: N2K_Number
  acFrequency?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_65002
 */
export const PGN_65002Defaults = {
  pgn: 65002,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65002
 */
export const newPGN_65002 = (fields: PGN_65002Fields, dst:number=255) : PGN_65002 => {
  return {
    ...PGN_65002Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65003
  *
  * Description: Bus #1 Phase A Basic AC Quantities
  *
  * @category PGN_65003
 */
export interface PGN_65003 extends PGN {
 fields: PGN_65003Fields
}

/**
 * @category PGN_65003
 */
export interface PGN_65003Fields {
  lineLineAcRmsVoltage?: N2K_Number
  lineNeutralAcRmsVoltage?: N2K_Number
  acFrequency?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_65003
 */
export const PGN_65003Defaults = {
  pgn: 65003,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65003
 */
export const newPGN_65003 = (fields: PGN_65003Fields, dst:number=255) : PGN_65003 => {
  return {
    ...PGN_65003Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65004
  *
  * Description: Bus #1 Average Basic AC Quantities
  *
  * @category PGN_65004
 */
export interface PGN_65004 extends PGN {
 fields: PGN_65004Fields
}

/**
 * @category PGN_65004
 */
export interface PGN_65004Fields {
  lineLineAcRmsVoltage?: N2K_Number
  lineNeutralAcRmsVoltage?: N2K_Number
  acFrequency?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_65004
 */
export const PGN_65004Defaults = {
  pgn: 65004,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65004
 */
export const newPGN_65004 = (fields: PGN_65004Fields, dst:number=255) : PGN_65004 => {
  return {
    ...PGN_65004Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65005
  *
  * Description: Utility Total AC Energy
  *
  * @category PGN_65005
 */
export interface PGN_65005 extends PGN {
 fields: PGN_65005Fields
}

/**
 * @category PGN_65005
 */
export interface PGN_65005Fields {
  totalEnergyExport?: N2K_Number
  totalEnergyImport?: N2K_Number
}

/**
 * @category PGN_65005
 */
export const PGN_65005Defaults = {
  pgn: 65005,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65005
 */
export const newPGN_65005 = (fields: PGN_65005Fields, dst:number=255) : PGN_65005 => {
  return {
    ...PGN_65005Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65006
  *
  * Description: Utility Phase C AC Reactive Power
  *
  * @category PGN_65006
 */
export interface PGN_65006 extends PGN {
 fields: PGN_65006Fields
}

/**
 * @category PGN_65006
 */
export interface PGN_65006Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

/**
 * @category PGN_65006
 */
export const PGN_65006Defaults = {
  pgn: 65006,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65006
 */
export const newPGN_65006 = (fields: PGN_65006Fields, dst:number=255) : PGN_65006 => {
  return {
    ...PGN_65006Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65007
  *
  * Description: Utility Phase C AC Power
  *
  * @category PGN_65007
 */
export interface PGN_65007 extends PGN {
 fields: PGN_65007Fields
}

/**
 * @category PGN_65007
 */
export interface PGN_65007Fields {
  realPower?: N2K_Number
  apparentPower?: N2K_Number
}

/**
 * @category PGN_65007
 */
export const PGN_65007Defaults = {
  pgn: 65007,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65007
 */
export const newPGN_65007 = (fields: PGN_65007Fields, dst:number=255) : PGN_65007 => {
  return {
    ...PGN_65007Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65008
  *
  * Description: Utility Phase C Basic AC Quantities
  *
  * @category PGN_65008
 */
export interface PGN_65008 extends PGN {
 fields: PGN_65008Fields
}

/**
 * @category PGN_65008
 */
export interface PGN_65008Fields {
  lineLineAcRmsVoltage?: N2K_Number
  lineNeutralAcRmsVoltage?: N2K_Number
  acFrequency?: N2K_Number
  acRmsCurrent?: N2K_Number
}

/**
 * @category PGN_65008
 */
export const PGN_65008Defaults = {
  pgn: 65008,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65008
 */
export const newPGN_65008 = (fields: PGN_65008Fields, dst:number=255) : PGN_65008 => {
  return {
    ...PGN_65008Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65009
  *
  * Description: Utility Phase B AC Reactive Power
  *
  * @category PGN_65009
 */
export interface PGN_65009 extends PGN {
 fields: PGN_65009Fields
}

/**
 * @category PGN_65009
 */
export interface PGN_65009Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

/**
 * @category PGN_65009
 */
export const PGN_65009Defaults = {
  pgn: 65009,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65009
 */
export const newPGN_65009 = (fields: PGN_65009Fields, dst:number=255) : PGN_65009 => {
  return {
    ...PGN_65009Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65010
  *
  * Description: Utility Phase B AC Power
  *
  * @category PGN_65010
 */
export interface PGN_65010 extends PGN {
 fields: PGN_65010Fields
}

/**
 * @category PGN_65010
 */
export interface PGN_65010Fields {
  realPower?: N2K_Number
  apparentPower?: N2K_Number
}

/**
 * @category PGN_65010
 */
export const PGN_65010Defaults = {
  pgn: 65010,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65010
 */
export const newPGN_65010 = (fields: PGN_65010Fields, dst:number=255) : PGN_65010 => {
  return {
    ...PGN_65010Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65011
  *
  * Description: Utility Phase B Basic AC Quantities
  *
  * @category PGN_65011
 */
export interface PGN_65011 extends PGN {
 fields: PGN_65011Fields
}

/**
 * @category PGN_65011
 */
export interface PGN_65011Fields {
  lineLineAcRmsVoltage?: N2K_Number
  lineNeutralAcRmsVoltage?: N2K_Number
  acFrequency?: N2K_Number
  acRmsCurrent?: N2K_Number
}

/**
 * @category PGN_65011
 */
export const PGN_65011Defaults = {
  pgn: 65011,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65011
 */
export const newPGN_65011 = (fields: PGN_65011Fields, dst:number=255) : PGN_65011 => {
  return {
    ...PGN_65011Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65012
  *
  * Description: Utility Phase A AC Reactive Power
  *
  * @category PGN_65012
 */
export interface PGN_65012 extends PGN {
 fields: PGN_65012Fields
}

/**
 * @category PGN_65012
 */
export interface PGN_65012Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

/**
 * @category PGN_65012
 */
export const PGN_65012Defaults = {
  pgn: 65012,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65012
 */
export const newPGN_65012 = (fields: PGN_65012Fields, dst:number=255) : PGN_65012 => {
  return {
    ...PGN_65012Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65013
  *
  * Description: Utility Phase A AC Power
  *
  * @category PGN_65013
 */
export interface PGN_65013 extends PGN {
 fields: PGN_65013Fields
}

/**
 * @category PGN_65013
 */
export interface PGN_65013Fields {
  realPower?: N2K_Number
  apparentPower?: N2K_Number
}

/**
 * @category PGN_65013
 */
export const PGN_65013Defaults = {
  pgn: 65013,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65013
 */
export const newPGN_65013 = (fields: PGN_65013Fields, dst:number=255) : PGN_65013 => {
  return {
    ...PGN_65013Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65014
  *
  * Description: Utility Phase A Basic AC Quantities
  *
  * @category PGN_65014
 */
export interface PGN_65014 extends PGN {
 fields: PGN_65014Fields
}

/**
 * @category PGN_65014
 */
export interface PGN_65014Fields {
  lineLineAcRmsVoltage?: N2K_Number
  lineNeutralAcRmsVoltage?: N2K_Number
  acFrequency?: N2K_Number
  acRmsCurrent?: N2K_Number
}

/**
 * @category PGN_65014
 */
export const PGN_65014Defaults = {
  pgn: 65014,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65014
 */
export const newPGN_65014 = (fields: PGN_65014Fields, dst:number=255) : PGN_65014 => {
  return {
    ...PGN_65014Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65015
  *
  * Description: Utility Total AC Reactive Power
  *
  * @category PGN_65015
 */
export interface PGN_65015 extends PGN {
 fields: PGN_65015Fields
}

/**
 * @category PGN_65015
 */
export interface PGN_65015Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

/**
 * @category PGN_65015
 */
export const PGN_65015Defaults = {
  pgn: 65015,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65015
 */
export const newPGN_65015 = (fields: PGN_65015Fields, dst:number=255) : PGN_65015 => {
  return {
    ...PGN_65015Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65016
  *
  * Description: Utility Total AC Power
  *
  * @category PGN_65016
 */
export interface PGN_65016 extends PGN {
 fields: PGN_65016Fields
}

/**
 * @category PGN_65016
 */
export interface PGN_65016Fields {
  realPower?: N2K_Number
  apparentPower?: N2K_Number
}

/**
 * @category PGN_65016
 */
export const PGN_65016Defaults = {
  pgn: 65016,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65016
 */
export const newPGN_65016 = (fields: PGN_65016Fields, dst:number=255) : PGN_65016 => {
  return {
    ...PGN_65016Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65017
  *
  * Description: Utility Average Basic AC Quantities
  *
  * @category PGN_65017
 */
export interface PGN_65017 extends PGN {
 fields: PGN_65017Fields
}

/**
 * @category PGN_65017
 */
export interface PGN_65017Fields {
  lineLineAcRmsVoltage?: N2K_Number
  lineNeutralAcRmsVoltage?: N2K_Number
  acFrequency?: N2K_Number
  acRmsCurrent?: N2K_Number
}

/**
 * @category PGN_65017
 */
export const PGN_65017Defaults = {
  pgn: 65017,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65017
 */
export const newPGN_65017 = (fields: PGN_65017Fields, dst:number=255) : PGN_65017 => {
  return {
    ...PGN_65017Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65018
  *
  * Description: Generator Total AC Energy
  *
  * @category PGN_65018
 */
export interface PGN_65018 extends PGN {
 fields: PGN_65018Fields
}

/**
 * @category PGN_65018
 */
export interface PGN_65018Fields {
  totalEnergyExport?: N2K_Number
  totalEnergyImport?: N2K_Number
}

/**
 * @category PGN_65018
 */
export const PGN_65018Defaults = {
  pgn: 65018,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65018
 */
export const newPGN_65018 = (fields: PGN_65018Fields, dst:number=255) : PGN_65018 => {
  return {
    ...PGN_65018Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65019
  *
  * Description: Generator Phase C AC Reactive Power
  *
  * @category PGN_65019
 */
export interface PGN_65019 extends PGN {
 fields: PGN_65019Fields
}

/**
 * @category PGN_65019
 */
export interface PGN_65019Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

/**
 * @category PGN_65019
 */
export const PGN_65019Defaults = {
  pgn: 65019,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65019
 */
export const newPGN_65019 = (fields: PGN_65019Fields, dst:number=255) : PGN_65019 => {
  return {
    ...PGN_65019Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65020
  *
  * Description: Generator Phase C AC Power
  *
  * @category PGN_65020
 */
export interface PGN_65020 extends PGN {
 fields: PGN_65020Fields
}

/**
 * @category PGN_65020
 */
export interface PGN_65020Fields {
  realPower?: N2K_Number
  apparentPower?: N2K_Number
}

/**
 * @category PGN_65020
 */
export const PGN_65020Defaults = {
  pgn: 65020,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65020
 */
export const newPGN_65020 = (fields: PGN_65020Fields, dst:number=255) : PGN_65020 => {
  return {
    ...PGN_65020Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65021
  *
  * Description: Generator Phase C Basic AC Quantities
  *
  * @category PGN_65021
 */
export interface PGN_65021 extends PGN {
 fields: PGN_65021Fields
}

/**
 * @category PGN_65021
 */
export interface PGN_65021Fields {
  lineLineAcRmsVoltage?: N2K_Number
  lineNeutralAcRmsVoltage?: N2K_Number
  acFrequency?: N2K_Number
  acRmsCurrent?: N2K_Number
}

/**
 * @category PGN_65021
 */
export const PGN_65021Defaults = {
  pgn: 65021,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65021
 */
export const newPGN_65021 = (fields: PGN_65021Fields, dst:number=255) : PGN_65021 => {
  return {
    ...PGN_65021Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65022
  *
  * Description: Generator Phase B AC Reactive Power
  *
  * @category PGN_65022
 */
export interface PGN_65022 extends PGN {
 fields: PGN_65022Fields
}

/**
 * @category PGN_65022
 */
export interface PGN_65022Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

/**
 * @category PGN_65022
 */
export const PGN_65022Defaults = {
  pgn: 65022,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65022
 */
export const newPGN_65022 = (fields: PGN_65022Fields, dst:number=255) : PGN_65022 => {
  return {
    ...PGN_65022Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65023
  *
  * Description: Generator Phase B AC Power
  *
  * @category PGN_65023
 */
export interface PGN_65023 extends PGN {
 fields: PGN_65023Fields
}

/**
 * @category PGN_65023
 */
export interface PGN_65023Fields {
  realPower?: N2K_Number
  apparentPower?: N2K_Number
}

/**
 * @category PGN_65023
 */
export const PGN_65023Defaults = {
  pgn: 65023,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65023
 */
export const newPGN_65023 = (fields: PGN_65023Fields, dst:number=255) : PGN_65023 => {
  return {
    ...PGN_65023Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65024
  *
  * Description: Generator Phase B Basic AC Quantities
  *
  * @category PGN_65024
 */
export interface PGN_65024 extends PGN {
 fields: PGN_65024Fields
}

/**
 * @category PGN_65024
 */
export interface PGN_65024Fields {
  lineLineAcRmsVoltage?: N2K_Number
  lineNeutralAcRmsVoltage?: N2K_Number
  acFrequency?: N2K_Number
  acRmsCurrent?: N2K_Number
}

/**
 * @category PGN_65024
 */
export const PGN_65024Defaults = {
  pgn: 65024,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65024
 */
export const newPGN_65024 = (fields: PGN_65024Fields, dst:number=255) : PGN_65024 => {
  return {
    ...PGN_65024Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65025
  *
  * Description: Generator Phase A AC Reactive Power
  *
  * @category PGN_65025
 */
export interface PGN_65025 extends PGN {
 fields: PGN_65025Fields
}

/**
 * @category PGN_65025
 */
export interface PGN_65025Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

/**
 * @category PGN_65025
 */
export const PGN_65025Defaults = {
  pgn: 65025,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65025
 */
export const newPGN_65025 = (fields: PGN_65025Fields, dst:number=255) : PGN_65025 => {
  return {
    ...PGN_65025Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65026
  *
  * Description: Generator Phase A AC Power
  *
  * @category PGN_65026
 */
export interface PGN_65026 extends PGN {
 fields: PGN_65026Fields
}

/**
 * @category PGN_65026
 */
export interface PGN_65026Fields {
  realPower?: N2K_Number
  apparentPower?: N2K_Number
}

/**
 * @category PGN_65026
 */
export const PGN_65026Defaults = {
  pgn: 65026,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65026
 */
export const newPGN_65026 = (fields: PGN_65026Fields, dst:number=255) : PGN_65026 => {
  return {
    ...PGN_65026Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65027
  *
  * Description: Generator Phase A Basic AC Quantities
  *
  * @category PGN_65027
 */
export interface PGN_65027 extends PGN {
 fields: PGN_65027Fields
}

/**
 * @category PGN_65027
 */
export interface PGN_65027Fields {
  lineLineAcRmsVoltage?: N2K_Number
  lineNeutralAcRmsVoltage?: N2K_Number
  acFrequency?: N2K_Number
  acRmsCurrent?: N2K_Number
}

/**
 * @category PGN_65027
 */
export const PGN_65027Defaults = {
  pgn: 65027,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65027
 */
export const newPGN_65027 = (fields: PGN_65027Fields, dst:number=255) : PGN_65027 => {
  return {
    ...PGN_65027Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65028
  *
  * Description: Generator Total AC Reactive Power
  *
  * @category PGN_65028
 */
export interface PGN_65028 extends PGN {
 fields: PGN_65028Fields
}

/**
 * @category PGN_65028
 */
export interface PGN_65028Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor|number
  reserved?: number
}

/**
 * @category PGN_65028
 */
export const PGN_65028Defaults = {
  pgn: 65028,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65028
 */
export const newPGN_65028 = (fields: PGN_65028Fields, dst:number=255) : PGN_65028 => {
  return {
    ...PGN_65028Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65029
  *
  * Description: Generator Total AC Power
  *
  * @category PGN_65029
 */
export interface PGN_65029 extends PGN {
 fields: PGN_65029Fields
}

/**
 * @category PGN_65029
 */
export interface PGN_65029Fields {
  realPower?: N2K_Number
  apparentPower?: N2K_Number
}

/**
 * @category PGN_65029
 */
export const PGN_65029Defaults = {
  pgn: 65029,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65029
 */
export const newPGN_65029 = (fields: PGN_65029Fields, dst:number=255) : PGN_65029 => {
  return {
    ...PGN_65029Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65030
  *
  * Description: Generator Average Basic AC Quantities
  *
  * @category PGN_65030
 */
export interface PGN_65030 extends PGN {
 fields: PGN_65030Fields
}

/**
 * @category PGN_65030
 */
export interface PGN_65030Fields {
  lineLineAcRmsVoltage?: N2K_Number
  lineNeutralAcRmsVoltage?: N2K_Number
  acFrequency?: N2K_Number
  acRmsCurrent?: N2K_Number
}

/**
 * @category PGN_65030
 */
export const PGN_65030Defaults = {
  pgn: 65030,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65030
 */
export const newPGN_65030 = (fields: PGN_65030Fields, dst:number=255) : PGN_65030 => {
  return {
    ...PGN_65030Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65240
  *
  * Description: ISO Commanded Address
  *
  * Explanation: ISO 11783 defined this message to provide a mechanism for assigning a network address to a node. The NAME information in the data portion of the message must match the name information of the node whose network address is to be set. ISO 11783-5 requires that this mesage to be sent using the BAM Transport Protocol method. The appropriate response to this message is defined in section 5.2.3 of 11783-5.
  *
  * @category PGN_65240
 */
export interface PGN_65240 extends PGN {
 fields: PGN_65240Fields
}

/**
 * @category PGN_65240
 */
export interface PGN_65240Fields {
  uniqueNumber?: N2K_Binary
  manufacturerCode?: enums.ManufacturerCode|number
  deviceInstanceLower?: N2K_Number
  deviceInstanceUpper?: N2K_Number
  deviceFunction?: enums.DeviceFunction|number
  reserved?: number
  deviceClass?: enums.DeviceClass|number
  systemInstance?: N2K_Number
  industryCode?: enums.IndustryCode|number
  reserved10?: number
  newSourceAddress?: N2K_Number
}

/**
 * @category PGN_65240
 */
export const PGN_65240Defaults = {
  pgn: 65240,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65240
 */
export const newPGN_65240 = (fields: PGN_65240Fields, dst:number=255) : PGN_65240 => {
  return {
    ...PGN_65240Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65280
  *
  * Description: Furuno: Heave
  *
  * @category PGN_65280
 */
export interface PGN_65280 extends PGN {
 fields: PGN_65280Fields
}

/**
 * @category PGN_65280
 */
export interface PGN_65280Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  heave?: N2K_Number
  reserved5?: number
}

/**
 * @category PGN_65280
 */
export const PGN_65280Defaults = {
  pgn: 65280,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_65280
 */
export const newPGN_65280 = (fields: PGN_65280Fields, dst:number=255) : PGN_65280 => {
  return {
    ...PGN_65280Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65284
  *
  * Description: Maretron: Proprietary DC Breaker Current
  *
  * @category PGN_65284
 */
export interface PGN_65284 extends PGN {
 fields: PGN_65284Fields
}

/**
 * @category PGN_65284
 */
export interface PGN_65284Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  bankInstance: N2K_Number
  indicatorNumber?: N2K_Number
  breakerCurrent?: N2K_Number
  reserved7?: number
}

/**
 * @category PGN_65284
 */
export const PGN_65284Defaults = {
  pgn: 65284,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_65284
 */
export const newPGN_65284 = (fields: PGN_65284Fields, dst:number=255) : PGN_65284 => {
  return {
    ...PGN_65284Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65285
  *
  * Description: Airmar: Boot State Acknowledgment
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_65285_AirmarBootStateAcknowledgment
 */
export interface PGN_65285_AirmarBootStateAcknowledgment extends PGN {
 fields: PGN_65285_AirmarBootStateAcknowledgmentFields
}

/**
 * @category PGN_65285_AirmarBootStateAcknowledgment
 */
export interface PGN_65285_AirmarBootStateAcknowledgmentFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  bootState?: enums.BootState|number
  reserved5?: number
}

/**
 * @category PGN_65285_AirmarBootStateAcknowledgment
 */
export const PGN_65285_AirmarBootStateAcknowledgmentDefaults = {
  pgn: 65285,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_65285_AirmarBootStateAcknowledgment
 */
export const PGN_65285_AirmarBootStateAcknowledgmentMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_65285_AirmarBootStateAcknowledgment
 */
export interface PGN_65285_AirmarBootStateAcknowledgmentCreateArgs {
  reserved?: number
  bootState?: enums.BootState|number
  reserved5?: number
}

/**
 * @category PGN_65285_AirmarBootStateAcknowledgment
 */
export const newPGN_65285_AirmarBootStateAcknowledgment = (fields: PGN_65285_AirmarBootStateAcknowledgmentCreateArgs, dst:number=255) : PGN_65285_AirmarBootStateAcknowledgment => {
  return {
    ...PGN_65285_AirmarBootStateAcknowledgmentDefaults,
    dst,
    fields: {
      ...PGN_65285_AirmarBootStateAcknowledgmentMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 65285
  *
  * Description: Lowrance: Temperature
  *
  * Match: Manufacturer Code == Lowrance<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_65285_LowranceTemperature
 */
export interface PGN_65285_LowranceTemperature extends PGN {
 fields: PGN_65285_LowranceTemperatureFields
}

/**
 * @category PGN_65285_LowranceTemperature
 */
export interface PGN_65285_LowranceTemperatureFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  temperatureSource?: enums.TemperatureSource|number
  actualTemperature?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_65285_LowranceTemperature
 */
export const PGN_65285_LowranceTemperatureDefaults = {
  pgn: 65285,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65285_LowranceTemperature
 */
export const PGN_65285_LowranceTemperatureMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Lowrance,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_65285_LowranceTemperature
 */
export interface PGN_65285_LowranceTemperatureCreateArgs {
  reserved?: number
  temperatureSource?: enums.TemperatureSource|number
  actualTemperature?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_65285_LowranceTemperature
 */
export const newPGN_65285_LowranceTemperature = (fields: PGN_65285_LowranceTemperatureCreateArgs, dst:number=255) : PGN_65285_LowranceTemperature => {
  return {
    ...PGN_65285_LowranceTemperatureDefaults,
    dst,
    fields: {
      ...PGN_65285_LowranceTemperatureMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 65286
  *
  * Description: Chetco: Dimmer
  *
  * Match: Manufacturer Code == Chetco<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_65286_ChetcoDimmer
 */
export interface PGN_65286_ChetcoDimmer extends PGN {
 fields: PGN_65286_ChetcoDimmerFields
}

/**
 * @category PGN_65286_ChetcoDimmer
 */
export interface PGN_65286_ChetcoDimmerFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  instance: N2K_Number
  dimmer1?: N2K_Number
  dimmer2?: N2K_Number
  dimmer3?: N2K_Number
  dimmer4?: N2K_Number
  control?: N2K_Number
}

/**
 * @category PGN_65286_ChetcoDimmer
 */
export const PGN_65286_ChetcoDimmerDefaults = {
  pgn: 65286,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65286_ChetcoDimmer
 */
export const PGN_65286_ChetcoDimmerMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Chetco,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_65286_ChetcoDimmer
 */
export interface PGN_65286_ChetcoDimmerCreateArgs {
  reserved?: number
  instance: N2K_Number
  dimmer1?: N2K_Number
  dimmer2?: N2K_Number
  dimmer3?: N2K_Number
  dimmer4?: N2K_Number
  control?: N2K_Number
}

/**
 * @category PGN_65286_ChetcoDimmer
 */
export const newPGN_65286_ChetcoDimmer = (fields: PGN_65286_ChetcoDimmerCreateArgs, dst:number=255) : PGN_65286_ChetcoDimmer => {
  return {
    ...PGN_65286_ChetcoDimmerDefaults,
    dst,
    fields: {
      ...PGN_65286_ChetcoDimmerMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 65286
  *
  * Description: Airmar: Boot State Request
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_65286_AirmarBootStateRequest
 */
export interface PGN_65286_AirmarBootStateRequest extends PGN {
 fields: PGN_65286_AirmarBootStateRequestFields
}

/**
 * @category PGN_65286_AirmarBootStateRequest
 */
export interface PGN_65286_AirmarBootStateRequestFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
}

/**
 * @category PGN_65286_AirmarBootStateRequest
 */
export const PGN_65286_AirmarBootStateRequestDefaults = {
  pgn: 65286,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65286_AirmarBootStateRequest
 */
export const PGN_65286_AirmarBootStateRequestMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_65286_AirmarBootStateRequest
 */
export interface PGN_65286_AirmarBootStateRequestCreateArgs {
  reserved?: number
  reserved4?: number
}

/**
 * @category PGN_65286_AirmarBootStateRequest
 */
export const newPGN_65286_AirmarBootStateRequest = (fields: PGN_65286_AirmarBootStateRequestCreateArgs, dst:number=255) : PGN_65286_AirmarBootStateRequest => {
  return {
    ...PGN_65286_AirmarBootStateRequestDefaults,
    dst,
    fields: {
      ...PGN_65286_AirmarBootStateRequestMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 65287
  *
  * Description: Airmar: Access Level
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_65287_AirmarAccessLevel
 */
export interface PGN_65287_AirmarAccessLevel extends PGN {
 fields: PGN_65287_AirmarAccessLevelFields
}

/**
 * @category PGN_65287_AirmarAccessLevel
 */
export interface PGN_65287_AirmarAccessLevelFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  formatCode?: N2K_Number
  accessLevel?: enums.AccessLevel|number
  reserved6?: number
  accessSeedKey?: N2K_Number
}

/**
 * @category PGN_65287_AirmarAccessLevel
 */
export const PGN_65287_AirmarAccessLevelDefaults = {
  pgn: 65287,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65287_AirmarAccessLevel
 */
export const PGN_65287_AirmarAccessLevelMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_65287_AirmarAccessLevel
 */
export interface PGN_65287_AirmarAccessLevelCreateArgs {
  reserved?: number
  formatCode?: N2K_Number
  accessLevel?: enums.AccessLevel|number
  reserved6?: number
  accessSeedKey?: N2K_Number
}

/**
 * @category PGN_65287_AirmarAccessLevel
 */
export const newPGN_65287_AirmarAccessLevel = (fields: PGN_65287_AirmarAccessLevelCreateArgs, dst:number=255) : PGN_65287_AirmarAccessLevel => {
  return {
    ...PGN_65287_AirmarAccessLevelDefaults,
    dst,
    fields: {
      ...PGN_65287_AirmarAccessLevelMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 65287
  *
  * Description: Simnet: Configure Temperature Sensor
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_65287_SimnetConfigureTemperatureSensor
 */
export interface PGN_65287_SimnetConfigureTemperatureSensor extends PGN {
 fields: PGN_65287_SimnetConfigureTemperatureSensorFields
}

/**
 * @category PGN_65287_SimnetConfigureTemperatureSensor
 */
export interface PGN_65287_SimnetConfigureTemperatureSensorFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
}

/**
 * @category PGN_65287_SimnetConfigureTemperatureSensor
 */
export const PGN_65287_SimnetConfigureTemperatureSensorDefaults = {
  pgn: 65287,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65287_SimnetConfigureTemperatureSensor
 */
export const PGN_65287_SimnetConfigureTemperatureSensorMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_65287_SimnetConfigureTemperatureSensor
 */
export interface PGN_65287_SimnetConfigureTemperatureSensorCreateArgs {
  reserved?: number
  reserved4?: number
}

/**
 * @category PGN_65287_SimnetConfigureTemperatureSensor
 */
export const newPGN_65287_SimnetConfigureTemperatureSensor = (fields: PGN_65287_SimnetConfigureTemperatureSensorCreateArgs, dst:number=255) : PGN_65287_SimnetConfigureTemperatureSensor => {
  return {
    ...PGN_65287_SimnetConfigureTemperatureSensorDefaults,
    dst,
    fields: {
      ...PGN_65287_SimnetConfigureTemperatureSensorMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 65288
  *
  * Description: Seatalk: Alarm
  *
  * @category PGN_65288
 */
export interface PGN_65288 extends PGN {
 fields: PGN_65288Fields
}

/**
 * @category PGN_65288
 */
export interface PGN_65288Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: N2K_Binary
  alarmStatus?: enums.SeatalkAlarmStatus|number
  alarmId?: enums.SeatalkAlarmId|number
  alarmGroup?: enums.SeatalkAlarmGroup|number
  alarmPriority?: N2K_Binary
}

/**
 * @category PGN_65288
 */
export const PGN_65288Defaults = {
  pgn: 65288,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_65288
 */
export const newPGN_65288 = (fields: PGN_65288Fields, dst:number=255) : PGN_65288 => {
  return {
    ...PGN_65288Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65289
  *
  * Description: Simnet: Trim Tab Sensor Calibration
  *
  * @category PGN_65289
 */
export interface PGN_65289 extends PGN {
 fields: PGN_65289Fields
}

/**
 * @category PGN_65289
 */
export interface PGN_65289Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
}

/**
 * @category PGN_65289
 */
export const PGN_65289Defaults = {
  pgn: 65289,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65289
 */
export const newPGN_65289 = (fields: PGN_65289Fields, dst:number=255) : PGN_65289 => {
  return {
    ...PGN_65289Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65290
  *
  * Description: Simnet: Paddle Wheel Speed Configuration
  *
  * @category PGN_65290
 */
export interface PGN_65290 extends PGN {
 fields: PGN_65290Fields
}

/**
 * @category PGN_65290
 */
export interface PGN_65290Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
}

/**
 * @category PGN_65290
 */
export const PGN_65290Defaults = {
  pgn: 65290,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65290
 */
export const newPGN_65290 = (fields: PGN_65290Fields, dst:number=255) : PGN_65290 => {
  return {
    ...PGN_65290Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65292
  *
  * Description: Simnet: Clear Fluid Level Warnings
  *
  * @category PGN_65292
 */
export interface PGN_65292 extends PGN {
 fields: PGN_65292Fields
}

/**
 * @category PGN_65292
 */
export interface PGN_65292Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
}

/**
 * @category PGN_65292
 */
export const PGN_65292Defaults = {
  pgn: 65292,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65292
 */
export const newPGN_65292 = (fields: PGN_65292Fields, dst:number=255) : PGN_65292 => {
  return {
    ...PGN_65292Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65293
  *
  * Description: Simnet: LGC-2000 Configuration
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_65293_SimnetLgc2000Configuration
 */
export interface PGN_65293_SimnetLgc2000Configuration extends PGN {
 fields: PGN_65293_SimnetLgc2000ConfigurationFields
}

/**
 * @category PGN_65293_SimnetLgc2000Configuration
 */
export interface PGN_65293_SimnetLgc2000ConfigurationFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
}

/**
 * @category PGN_65293_SimnetLgc2000Configuration
 */
export const PGN_65293_SimnetLgc2000ConfigurationDefaults = {
  pgn: 65293,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65293_SimnetLgc2000Configuration
 */
export const PGN_65293_SimnetLgc2000ConfigurationMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_65293_SimnetLgc2000Configuration
 */
export interface PGN_65293_SimnetLgc2000ConfigurationCreateArgs {
  reserved?: number
  reserved4?: number
}

/**
 * @category PGN_65293_SimnetLgc2000Configuration
 */
export const newPGN_65293_SimnetLgc2000Configuration = (fields: PGN_65293_SimnetLgc2000ConfigurationCreateArgs, dst:number=255) : PGN_65293_SimnetLgc2000Configuration => {
  return {
    ...PGN_65293_SimnetLgc2000ConfigurationDefaults,
    dst,
    fields: {
      ...PGN_65293_SimnetLgc2000ConfigurationMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 65293
  *
  * Description: Diverse Yacht Services: Load Cell
  *
  * Match: Manufacturer Code == Diverse Yacht Services<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_65293_DiverseYachtServicesLoadCell
 */
export interface PGN_65293_DiverseYachtServicesLoadCell extends PGN {
 fields: PGN_65293_DiverseYachtServicesLoadCellFields
}

/**
 * @category PGN_65293_DiverseYachtServicesLoadCell
 */
export interface PGN_65293_DiverseYachtServicesLoadCellFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  instance: N2K_Number
  reserved5?: number
  loadCell?: N2K_Number
}

/**
 * @category PGN_65293_DiverseYachtServicesLoadCell
 */
export const PGN_65293_DiverseYachtServicesLoadCellDefaults = {
  pgn: 65293,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_65293_DiverseYachtServicesLoadCell
 */
export const PGN_65293_DiverseYachtServicesLoadCellMatchFields = {
  manufacturerCode: enums.ManufacturerCode.DiverseYachtServices,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_65293_DiverseYachtServicesLoadCell
 */
export interface PGN_65293_DiverseYachtServicesLoadCellCreateArgs {
  reserved?: number
  instance: N2K_Number
  reserved5?: number
  loadCell?: N2K_Number
}

/**
 * @category PGN_65293_DiverseYachtServicesLoadCell
 */
export const newPGN_65293_DiverseYachtServicesLoadCell = (fields: PGN_65293_DiverseYachtServicesLoadCellCreateArgs, dst:number=255) : PGN_65293_DiverseYachtServicesLoadCell => {
  return {
    ...PGN_65293_DiverseYachtServicesLoadCellDefaults,
    dst,
    fields: {
      ...PGN_65293_DiverseYachtServicesLoadCellMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 65302
  *
  * Description: Simnet: AP Unknown 1
  *
  * Explanation: Seen as sent by AC-42 only so far.
  *
  * @category PGN_65302
 */
export interface PGN_65302 extends PGN {
 fields: PGN_65302Fields
}

/**
 * @category PGN_65302
 */
export interface PGN_65302Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  reserved8?: number
}

/**
 * @category PGN_65302
 */
export const PGN_65302Defaults = {
  pgn: 65302,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_65302
 */
export const newPGN_65302 = (fields: PGN_65302Fields, dst:number=255) : PGN_65302 => {
  return {
    ...PGN_65302Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65305
  *
  * Description: Simnet: Device Status
  *
  * Explanation: This PGN is reported by an Autopilot Computer (AC/NAC)
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Report == Status<br>
  *
  * @category PGN_65305_SimnetDeviceStatus
 */
export interface PGN_65305_SimnetDeviceStatus extends PGN {
 fields: PGN_65305_SimnetDeviceStatusFields
}

/**
 * @category PGN_65305_SimnetDeviceStatus
 */
export interface PGN_65305_SimnetDeviceStatusFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  model?: enums.SimnetDeviceModel|number
  report?: enums.SimnetDeviceReport|number
  status?: enums.SimnetApStatus|number
  spare7?: number
}

/**
 * @category PGN_65305_SimnetDeviceStatus
 */
export const PGN_65305_SimnetDeviceStatusDefaults = {
  pgn: 65305,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65305_SimnetDeviceStatus
 */
export const PGN_65305_SimnetDeviceStatusMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
  report: enums.SimnetDeviceReport.Status,
}

/**
 * @category PGN_65305_SimnetDeviceStatus
 */
export interface PGN_65305_SimnetDeviceStatusCreateArgs {
  reserved?: number
  model?: enums.SimnetDeviceModel|number
  status?: enums.SimnetApStatus|number
  spare7?: number
}

/**
 * @category PGN_65305_SimnetDeviceStatus
 */
export const newPGN_65305_SimnetDeviceStatus = (fields: PGN_65305_SimnetDeviceStatusCreateArgs, dst:number=255) : PGN_65305_SimnetDeviceStatus => {
  return {
    ...PGN_65305_SimnetDeviceStatusDefaults,
    dst,
    fields: {
      ...PGN_65305_SimnetDeviceStatusMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 65305
  *
  * Description: Simnet: Device Status Request
  *
  * Explanation: This PGN is sent by an active AutoPilot head controller (AP, MFD, Triton2). It is used by the AC (AutoPilot Controller) to verify that there is an active controller. If this PGN is not sent regularly the AC may report an error and go to standby.
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Report == Send Status<br>
  *
  * @category PGN_65305_SimnetDeviceStatusRequest
 */
export interface PGN_65305_SimnetDeviceStatusRequest extends PGN {
 fields: PGN_65305_SimnetDeviceStatusRequestFields
}

/**
 * @category PGN_65305_SimnetDeviceStatusRequest
 */
export interface PGN_65305_SimnetDeviceStatusRequestFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  model?: enums.SimnetDeviceModel|number
  report?: enums.SimnetDeviceReport|number
  spare6?: number
}

/**
 * @category PGN_65305_SimnetDeviceStatusRequest
 */
export const PGN_65305_SimnetDeviceStatusRequestDefaults = {
  pgn: 65305,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65305_SimnetDeviceStatusRequest
 */
export const PGN_65305_SimnetDeviceStatusRequestMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
  report: enums.SimnetDeviceReport.SendStatus,
}

/**
 * @category PGN_65305_SimnetDeviceStatusRequest
 */
export interface PGN_65305_SimnetDeviceStatusRequestCreateArgs {
  reserved?: number
  model?: enums.SimnetDeviceModel|number
  spare6?: number
}

/**
 * @category PGN_65305_SimnetDeviceStatusRequest
 */
export const newPGN_65305_SimnetDeviceStatusRequest = (fields: PGN_65305_SimnetDeviceStatusRequestCreateArgs, dst:number=255) : PGN_65305_SimnetDeviceStatusRequest => {
  return {
    ...PGN_65305_SimnetDeviceStatusRequestDefaults,
    dst,
    fields: {
      ...PGN_65305_SimnetDeviceStatusRequestMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 65305
  *
  * Description: Simnet: Pilot Mode
  *
  * Explanation: This PGN is reported by an Autopilot Computer (AC/NAC)
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Report == Mode<br>
  *
  * @category PGN_65305_SimnetPilotMode
 */
export interface PGN_65305_SimnetPilotMode extends PGN {
 fields: PGN_65305_SimnetPilotModeFields
}

/**
 * @category PGN_65305_SimnetPilotMode
 */
export interface PGN_65305_SimnetPilotModeFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  model?: enums.SimnetDeviceModel|number
  report?: enums.SimnetDeviceReport|number
  mode?: enums.SimnetApModeBitfield[]
  spare7?: number
}

/**
 * @category PGN_65305_SimnetPilotMode
 */
export const PGN_65305_SimnetPilotModeDefaults = {
  pgn: 65305,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65305_SimnetPilotMode
 */
export const PGN_65305_SimnetPilotModeMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
  report: enums.SimnetDeviceReport.Mode,
}

/**
 * @category PGN_65305_SimnetPilotMode
 */
export interface PGN_65305_SimnetPilotModeCreateArgs {
  reserved?: number
  model?: enums.SimnetDeviceModel|number
  mode?: enums.SimnetApModeBitfield[]
  spare7?: number
}

/**
 * @category PGN_65305_SimnetPilotMode
 */
export const newPGN_65305_SimnetPilotMode = (fields: PGN_65305_SimnetPilotModeCreateArgs, dst:number=255) : PGN_65305_SimnetPilotMode => {
  return {
    ...PGN_65305_SimnetPilotModeDefaults,
    dst,
    fields: {
      ...PGN_65305_SimnetPilotModeMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 65305
  *
  * Description: Simnet: Device Mode Request
  *
  * Explanation: This PGN is sent by an active AutoPilot head controller (AP, MFD, Triton2). It is used by the AC (AutoPilot Controller) to verify that there is an active controller. If this PGN is not sent regularly the AC may report an error and go to standby.
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Report == Send Mode<br>
  *
  * @category PGN_65305_SimnetDeviceModeRequest
 */
export interface PGN_65305_SimnetDeviceModeRequest extends PGN {
 fields: PGN_65305_SimnetDeviceModeRequestFields
}

/**
 * @category PGN_65305_SimnetDeviceModeRequest
 */
export interface PGN_65305_SimnetDeviceModeRequestFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  model?: enums.SimnetDeviceModel|number
  report?: enums.SimnetDeviceReport|number
  spare6?: number
}

/**
 * @category PGN_65305_SimnetDeviceModeRequest
 */
export const PGN_65305_SimnetDeviceModeRequestDefaults = {
  pgn: 65305,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65305_SimnetDeviceModeRequest
 */
export const PGN_65305_SimnetDeviceModeRequestMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
  report: enums.SimnetDeviceReport.SendMode,
}

/**
 * @category PGN_65305_SimnetDeviceModeRequest
 */
export interface PGN_65305_SimnetDeviceModeRequestCreateArgs {
  reserved?: number
  model?: enums.SimnetDeviceModel|number
  spare6?: number
}

/**
 * @category PGN_65305_SimnetDeviceModeRequest
 */
export const newPGN_65305_SimnetDeviceModeRequest = (fields: PGN_65305_SimnetDeviceModeRequestCreateArgs, dst:number=255) : PGN_65305_SimnetDeviceModeRequest => {
  return {
    ...PGN_65305_SimnetDeviceModeRequestDefaults,
    dst,
    fields: {
      ...PGN_65305_SimnetDeviceModeRequestMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 65305
  *
  * Description: Simnet: Sailing Processor Status
  *
  * Explanation: This PGN has been seen to be reported by a Sailing Processor.
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Report == Sailing Processor Status<br>
  *
  * @category PGN_65305_SimnetSailingProcessorStatus
 */
export interface PGN_65305_SimnetSailingProcessorStatus extends PGN {
 fields: PGN_65305_SimnetSailingProcessorStatusFields
}

/**
 * @category PGN_65305_SimnetSailingProcessorStatus
 */
export interface PGN_65305_SimnetSailingProcessorStatusFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  model?: enums.SimnetDeviceModel|number
  report?: enums.SimnetDeviceReport|number
  data?: N2K_Binary
}

/**
 * @category PGN_65305_SimnetSailingProcessorStatus
 */
export const PGN_65305_SimnetSailingProcessorStatusDefaults = {
  pgn: 65305,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65305_SimnetSailingProcessorStatus
 */
export const PGN_65305_SimnetSailingProcessorStatusMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
  report: enums.SimnetDeviceReport.SailingProcessorStatus,
}

/**
 * @category PGN_65305_SimnetSailingProcessorStatus
 */
export interface PGN_65305_SimnetSailingProcessorStatusCreateArgs {
  reserved?: number
  model?: enums.SimnetDeviceModel|number
  data?: N2K_Binary
}

/**
 * @category PGN_65305_SimnetSailingProcessorStatus
 */
export const newPGN_65305_SimnetSailingProcessorStatus = (fields: PGN_65305_SimnetSailingProcessorStatusCreateArgs, dst:number=255) : PGN_65305_SimnetSailingProcessorStatus => {
  return {
    ...PGN_65305_SimnetSailingProcessorStatusDefaults,
    dst,
    fields: {
      ...PGN_65305_SimnetSailingProcessorStatusMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 65309
  *
  * Description: Navico: Wireless Battery Status
  *
  * @category PGN_65309
 */
export interface PGN_65309 extends PGN {
 fields: PGN_65309Fields
}

/**
 * @category PGN_65309
 */
export interface PGN_65309Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  status?: N2K_Number
  batteryStatus?: N2K_Number
  batteryChargeStatus?: N2K_Number
  reserved7?: number
}

/**
 * @category PGN_65309
 */
export const PGN_65309Defaults = {
  pgn: 65309,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_65309
 */
export const newPGN_65309 = (fields: PGN_65309Fields, dst:number=255) : PGN_65309 => {
  return {
    ...PGN_65309Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65312
  *
  * Description: Navico: Wireless Signal Status
  *
  * @category PGN_65312
 */
export interface PGN_65312 extends PGN {
 fields: PGN_65312Fields
}

/**
 * @category PGN_65312
 */
export interface PGN_65312Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  unknown?: N2K_Number
  signalStrength?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_65312
 */
export const PGN_65312Defaults = {
  pgn: 65312,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_65312
 */
export const newPGN_65312 = (fields: PGN_65312Fields, dst:number=255) : PGN_65312 => {
  return {
    ...PGN_65312Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65340
  *
  * Description: Simnet: AP Unknown 2
  *
  * Explanation: Seen as sent by AC-42 only so far.
  *
  * @category PGN_65340
 */
export interface PGN_65340 extends PGN {
 fields: PGN_65340Fields
}

/**
 * @category PGN_65340
 */
export interface PGN_65340Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
  reserved9?: number
}

/**
 * @category PGN_65340
 */
export const PGN_65340Defaults = {
  pgn: 65340,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65340
 */
export const newPGN_65340 = (fields: PGN_65340Fields, dst:number=255) : PGN_65340 => {
  return {
    ...PGN_65340Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65341
  *
  * Description: Simnet: Autopilot Angle
  *
  * @category PGN_65341
 */
export interface PGN_65341 extends PGN {
 fields: PGN_65341Fields
}

/**
 * @category PGN_65341
 */
export interface PGN_65341Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  mode?: enums.SimnetApMode|number
  reserved6?: number
  angle?: N2K_Number
}

/**
 * @category PGN_65341
 */
export const PGN_65341Defaults = {
  pgn: 65341,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_65341
 */
export const newPGN_65341 = (fields: PGN_65341Fields, dst:number=255) : PGN_65341 => {
  return {
    ...PGN_65341Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65345
  *
  * Description: Seatalk: Pilot Wind Datum
  *
  * @category PGN_65345
 */
export interface PGN_65345 extends PGN {
 fields: PGN_65345Fields
}

/**
 * @category PGN_65345
 */
export interface PGN_65345Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  windDatum?: N2K_Number
  rollingAverageWindAngle?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_65345
 */
export const PGN_65345Defaults = {
  pgn: 65345,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65345
 */
export const newPGN_65345 = (fields: PGN_65345Fields, dst:number=255) : PGN_65345 => {
  return {
    ...PGN_65345Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65350
  *
  * Description: Simnet: Magnetic Field
  *
  * @category PGN_65350
 */
export interface PGN_65350 extends PGN {
 fields: PGN_65350Fields
}

/**
 * @category PGN_65350
 */
export interface PGN_65350Fields {
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_65350
 */
export const PGN_65350Defaults = {
  pgn: 65350,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65350
 */
export const newPGN_65350 = (fields: PGN_65350Fields, dst:number=255) : PGN_65350 => {
  return {
    ...PGN_65350Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65359
  *
  * Description: Seatalk: Pilot Heading
  *
  * @category PGN_65359
 */
export interface PGN_65359 extends PGN {
 fields: PGN_65359Fields
}

/**
 * @category PGN_65359
 */
export interface PGN_65359Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: N2K_Binary
  headingTrue?: N2K_Number
  headingMagnetic?: N2K_Number
  reserved7?: number
}

/**
 * @category PGN_65359
 */
export const PGN_65359Defaults = {
  pgn: 65359,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_65359
 */
export const newPGN_65359 = (fields: PGN_65359Fields, dst:number=255) : PGN_65359 => {
  return {
    ...PGN_65359Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65360
  *
  * Description: Seatalk: Pilot Locked Heading
  *
  * @category PGN_65360
 */
export interface PGN_65360 extends PGN {
 fields: PGN_65360Fields
}

/**
 * @category PGN_65360
 */
export interface PGN_65360Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: N2K_Binary
  targetHeadingTrue?: N2K_Number
  targetHeadingMagnetic?: N2K_Number
  reserved7?: number
}

/**
 * @category PGN_65360
 */
export const PGN_65360Defaults = {
  pgn: 65360,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_65360
 */
export const newPGN_65360 = (fields: PGN_65360Fields, dst:number=255) : PGN_65360 => {
  return {
    ...PGN_65360Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65361
  *
  * Description: Seatalk: Silence Alarm
  *
  * @category PGN_65361
 */
export interface PGN_65361 extends PGN {
 fields: PGN_65361Fields
}

/**
 * @category PGN_65361
 */
export interface PGN_65361Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  alarmId?: enums.SeatalkAlarmId|number
  alarmGroup?: enums.SeatalkAlarmGroup|number
  reserved6?: number
}

/**
 * @category PGN_65361
 */
export const PGN_65361Defaults = {
  pgn: 65361,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65361
 */
export const newPGN_65361 = (fields: PGN_65361Fields, dst:number=255) : PGN_65361 => {
  return {
    ...PGN_65361Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65371
  *
  * Description: Seatalk: Keypad Message
  *
  * @category PGN_65371
 */
export interface PGN_65371 extends PGN {
 fields: PGN_65371Fields
}

/**
 * @category PGN_65371
 */
export interface PGN_65371Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: N2K_Number
  firstKey?: N2K_Number
  secondKey?: N2K_Number
  firstKeyState?: N2K_Number
  secondKeyState?: N2K_Number
  reserved9?: number
  encoderPosition?: N2K_Number
  reserved11?: number
}

/**
 * @category PGN_65371
 */
export const PGN_65371Defaults = {
  pgn: 65371,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65371
 */
export const newPGN_65371 = (fields: PGN_65371Fields, dst:number=255) : PGN_65371 => {
  return {
    ...PGN_65371Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65374
  *
  * Description: SeaTalk: Keypad Heartbeat
  *
  * @category PGN_65374
 */
export interface PGN_65374 extends PGN {
 fields: PGN_65374Fields
}

/**
 * @category PGN_65374
 */
export interface PGN_65374Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: N2K_Number
  variant?: N2K_Number
  status?: N2K_Number
  reserved7?: number
}

/**
 * @category PGN_65374
 */
export const PGN_65374Defaults = {
  pgn: 65374,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65374
 */
export const newPGN_65374 = (fields: PGN_65374Fields, dst:number=255) : PGN_65374 => {
  return {
    ...PGN_65374Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65379
  *
  * Description: Seatalk: Pilot Mode
  *
  * @category PGN_65379
 */
export interface PGN_65379 extends PGN {
 fields: PGN_65379Fields
}

/**
 * @category PGN_65379
 */
export interface PGN_65379Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  pilotMode?: enums.SeatalkPilotMode16|number
  subMode?: N2K_Binary
  pilotModeData?: N2K_Binary
  reserved7?: number
}

/**
 * @category PGN_65379
 */
export const PGN_65379Defaults = {
  pgn: 65379,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_65379
 */
export const newPGN_65379 = (fields: PGN_65379Fields, dst:number=255) : PGN_65379 => {
  return {
    ...PGN_65379Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65408
  *
  * Description: Airmar: Depth Quality Factor
  *
  * @category PGN_65408
 */
export interface PGN_65408 extends PGN {
 fields: PGN_65408Fields
}

/**
 * @category PGN_65408
 */
export interface PGN_65408Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: N2K_Number
  depthQualityFactor?: enums.AirmarDepthQualityFactor|number
  reserved6?: number
}

/**
 * @category PGN_65408
 */
export const PGN_65408Defaults = {
  pgn: 65408,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_65408
 */
export const newPGN_65408 = (fields: PGN_65408Fields, dst:number=255) : PGN_65408 => {
  return {
    ...PGN_65408Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65409
  *
  * Description: Airmar: Speed Pulse Count
  *
  * @category PGN_65409
 */
export interface PGN_65409 extends PGN {
 fields: PGN_65409Fields
}

/**
 * @category PGN_65409
 */
export interface PGN_65409Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: N2K_Number
  durationOfInterval?: N2K_Duration
  numberOfPulsesReceived?: N2K_Number
  reserved7?: number
}

/**
 * @category PGN_65409
 */
export const PGN_65409Defaults = {
  pgn: 65409,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_65409
 */
export const newPGN_65409 = (fields: PGN_65409Fields, dst:number=255) : PGN_65409 => {
  return {
    ...PGN_65409Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65410
  *
  * Description: Airmar: Device Information
  *
  * @category PGN_65410
 */
export interface PGN_65410 extends PGN {
 fields: PGN_65410Fields
}

/**
 * @category PGN_65410
 */
export interface PGN_65410Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: N2K_Number
  internalDeviceTemperature?: N2K_Number
  supplyVoltage?: N2K_Number
  reserved7?: number
}

/**
 * @category PGN_65410
 */
export const PGN_65410Defaults = {
  pgn: 65410,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_65410
 */
export const newPGN_65410 = (fields: PGN_65410Fields, dst:number=255) : PGN_65410 => {
  return {
    ...PGN_65410Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65420
  *
  * Description: Simnet: AP Unknown 3
  *
  * Explanation: Seen as sent by AC-42 only so far.
  *
  * @category PGN_65420
 */
export interface PGN_65420 extends PGN {
 fields: PGN_65420Fields
}

/**
 * @category PGN_65420
 */
export interface PGN_65420Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
  reserved9?: number
}

/**
 * @category PGN_65420
 */
export const PGN_65420Defaults = {
  pgn: 65420,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_65420
 */
export const newPGN_65420 = (fields: PGN_65420Fields, dst:number=255) : PGN_65420 => {
  return {
    ...PGN_65420Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 65480
  *
  * Description: Simnet: Autopilot Mode
  *
  * @category PGN_65480
 */
export interface PGN_65480 extends PGN {
 fields: PGN_65480Fields
}

/**
 * @category PGN_65480
 */
export interface PGN_65480Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
}

/**
 * @category PGN_65480
 */
export const PGN_65480Defaults = {
  pgn: 65480,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_65480
 */
export const newPGN_65480 = (fields: PGN_65480Fields, dst:number=255) : PGN_65480 => {
  return {
    ...PGN_65480Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 126208
  *
  * Description: NMEA - Request group function
  *
  * Explanation: This is the Request variation of this group function PGN. The receiver shall respond by sending the requested PGN, at the desired transmission interval.
  *
  *
  * @category PGN_126208_NmeaRequestGroupFunction
 */
export interface PGN_126208_NmeaRequestGroupFunction extends PGN {
 fields: PGN_126208_NmeaRequestGroupFunctionFields
}

/**
 * @category PGN_126208_NmeaRequestGroupFunction
 */
export interface PGN_126208_NmeaRequestGroupFunctionFields {
  functionCode?: enums.GroupFunction|number
  pgn?: N2K_Pgn
  transmissionInterval?: N2K_Duration
  transmissionIntervalOffset?: N2K_Duration
  numberOfParameters?: N2K_Number
  list: {
    parameter?: N2K_FieldIndex
    value?: N2K_Variable
  }[]
}

/**
 * @category PGN_126208_NmeaRequestGroupFunction
 */
export const PGN_126208_NmeaRequestGroupFunctionDefaults = {
  pgn: 126208,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126208_NmeaRequestGroupFunction
 */
export const PGN_126208_NmeaRequestGroupFunctionMatchFields = {
}

/**
 * @category PGN_126208_NmeaRequestGroupFunction
 */
export interface PGN_126208_NmeaRequestGroupFunctionCreateArgs {
  functionCode?: enums.GroupFunction|number
  pgn?: N2K_Pgn
  transmissionInterval?: N2K_Duration
  transmissionIntervalOffset?: N2K_Duration
  numberOfParameters?: N2K_Number
  list: {
    parameter?: N2K_FieldIndex
    value?: N2K_Variable
  }[]
}

/**
 * @category PGN_126208_NmeaRequestGroupFunction
 */
export const newPGN_126208_NmeaRequestGroupFunction = (fields: PGN_126208_NmeaRequestGroupFunctionCreateArgs, dst:number=255) : PGN_126208_NmeaRequestGroupFunction => {
  return {
    ...PGN_126208_NmeaRequestGroupFunctionDefaults,
    dst,
    fields: {
      ...PGN_126208_NmeaRequestGroupFunctionMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126208
  *
  * Description: NMEA - Command group function
  *
  * Explanation: This is the Command variation of this group function PGN. This instructs the receiver to modify its internal state for the passed parameters. The receiver shall reply with an Acknowledge reply.
  *
  * Match: Function Code == Command<br>
  *
  * @category PGN_126208_NmeaCommandGroupFunction
 */
export interface PGN_126208_NmeaCommandGroupFunction extends PGN {
 fields: PGN_126208_NmeaCommandGroupFunctionFields
}

/**
 * @category PGN_126208_NmeaCommandGroupFunction
 */
export interface PGN_126208_NmeaCommandGroupFunctionFields {
  functionCode?: enums.GroupFunction|number
  pgn?: N2K_Pgn
  priority?: enums.Priority|number
  reserved?: number
  numberOfParameters?: N2K_Number
  list: {
    parameter?: N2K_FieldIndex
    value?: N2K_Variable
  }[]
}

/**
 * @category PGN_126208_NmeaCommandGroupFunction
 */
export const PGN_126208_NmeaCommandGroupFunctionDefaults = {
  pgn: 126208,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126208_NmeaCommandGroupFunction
 */
export const PGN_126208_NmeaCommandGroupFunctionMatchFields = {
  functionCode: enums.GroupFunction.Command,
}

/**
 * @category PGN_126208_NmeaCommandGroupFunction
 */
export interface PGN_126208_NmeaCommandGroupFunctionCreateArgs {
  pgn?: N2K_Pgn
  priority?: enums.Priority|number
  reserved?: number
  numberOfParameters?: N2K_Number
  list: {
    parameter?: N2K_FieldIndex
    value?: N2K_Variable
  }[]
}

/**
 * @category PGN_126208_NmeaCommandGroupFunction
 */
export const newPGN_126208_NmeaCommandGroupFunction = (fields: PGN_126208_NmeaCommandGroupFunctionCreateArgs, dst:number=255) : PGN_126208_NmeaCommandGroupFunction => {
  return {
    ...PGN_126208_NmeaCommandGroupFunctionDefaults,
    dst,
    fields: {
      ...PGN_126208_NmeaCommandGroupFunctionMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126208
  *
  * Description: NMEA - Acknowledge group function
  *
  * Explanation: This is the Acknowledge variation of this group function PGN. When a device receives a Command, it will attempt to perform the command (change its parameters) and reply positively or negatively.
  *
  * Match: Function Code == Acknowledge<br>
  *
  * @category PGN_126208_NmeaAcknowledgeGroupFunction
 */
export interface PGN_126208_NmeaAcknowledgeGroupFunction extends PGN {
 fields: PGN_126208_NmeaAcknowledgeGroupFunctionFields
}

/**
 * @category PGN_126208_NmeaAcknowledgeGroupFunction
 */
export interface PGN_126208_NmeaAcknowledgeGroupFunctionFields {
  functionCode?: enums.GroupFunction|number
  pgn?: N2K_Pgn
  pgnErrorCode?: enums.PgnErrorCode|number
  transmissionIntervalPriorityErrorCode?: enums.TransmissionInterval|number
  numberOfParameters?: N2K_Number
  list: {
    parameter?: enums.ParameterField|number
  }[]
}

/**
 * @category PGN_126208_NmeaAcknowledgeGroupFunction
 */
export const PGN_126208_NmeaAcknowledgeGroupFunctionDefaults = {
  pgn: 126208,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126208_NmeaAcknowledgeGroupFunction
 */
export const PGN_126208_NmeaAcknowledgeGroupFunctionMatchFields = {
  functionCode: enums.GroupFunction.Acknowledge,
}

/**
 * @category PGN_126208_NmeaAcknowledgeGroupFunction
 */
export interface PGN_126208_NmeaAcknowledgeGroupFunctionCreateArgs {
  pgn?: N2K_Pgn
  pgnErrorCode?: enums.PgnErrorCode|number
  transmissionIntervalPriorityErrorCode?: enums.TransmissionInterval|number
  numberOfParameters?: N2K_Number
  list: {
    parameter?: enums.ParameterField|number
  }[]
}

/**
 * @category PGN_126208_NmeaAcknowledgeGroupFunction
 */
export const newPGN_126208_NmeaAcknowledgeGroupFunction = (fields: PGN_126208_NmeaAcknowledgeGroupFunctionCreateArgs, dst:number=255) : PGN_126208_NmeaAcknowledgeGroupFunction => {
  return {
    ...PGN_126208_NmeaAcknowledgeGroupFunctionDefaults,
    dst,
    fields: {
      ...PGN_126208_NmeaAcknowledgeGroupFunctionMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126208
  *
  * Description: NMEA - Read Fields group function
  *
  * Explanation: This is the Read Fields variation of this group function PGN. The receiver shall respond by sending a Read Reply variation of this PGN, containing the desired values. This PGN is special as it contains two sets of repeating fields, and the fields that contain the information how many repetitions there are do not have a fixed offset in the PGN as the fields 3 to 5 are only present if field 2 is for a proprietary PGN
  *
  * Match: Function Code == Read Fields<br>
  *
  * @category PGN_126208_NmeaReadFieldsGroupFunction
 */
export interface PGN_126208_NmeaReadFieldsGroupFunction extends PGN {
 fields: PGN_126208_NmeaReadFieldsGroupFunctionFields
}

/**
 * @category PGN_126208_NmeaReadFieldsGroupFunction
 */
export interface PGN_126208_NmeaReadFieldsGroupFunctionFields {
  functionCode?: enums.GroupFunction|number
  pgn?: N2K_Pgn
  manufacturerCode?: enums.ManufacturerCode|number
  reserved?: number
  industryCode?: enums.IndustryCode|number
  uniqueId?: N2K_Number
  numberOfSelectionPairs?: N2K_Number
  numberOfParameters?: N2K_Number
  parameter?: N2K_FieldIndex
  list: {
    selectionParameter?: N2K_FieldIndex
    selectionValue?: N2K_Variable
  }[]
  list2: any[]
}

/**
 * @category PGN_126208_NmeaReadFieldsGroupFunction
 */
export const PGN_126208_NmeaReadFieldsGroupFunctionDefaults = {
  pgn: 126208,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126208_NmeaReadFieldsGroupFunction
 */
export const PGN_126208_NmeaReadFieldsGroupFunctionMatchFields = {
  functionCode: enums.GroupFunction.ReadFields,
}

/**
 * @category PGN_126208_NmeaReadFieldsGroupFunction
 */
export interface PGN_126208_NmeaReadFieldsGroupFunctionCreateArgs {
  pgn?: N2K_Pgn
  manufacturerCode?: enums.ManufacturerCode|number
  reserved?: number
  industryCode?: enums.IndustryCode|number
  uniqueId?: N2K_Number
  numberOfSelectionPairs?: N2K_Number
  numberOfParameters?: N2K_Number
  parameter?: N2K_FieldIndex
  list: {
    selectionParameter?: N2K_FieldIndex
    selectionValue?: N2K_Variable
  }[]
  list2: any[]
}

/**
 * @category PGN_126208_NmeaReadFieldsGroupFunction
 */
export const newPGN_126208_NmeaReadFieldsGroupFunction = (fields: PGN_126208_NmeaReadFieldsGroupFunctionCreateArgs, dst:number=255) : PGN_126208_NmeaReadFieldsGroupFunction => {
  return {
    ...PGN_126208_NmeaReadFieldsGroupFunctionDefaults,
    dst,
    fields: {
      ...PGN_126208_NmeaReadFieldsGroupFunctionMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126208
  *
  * Description: NMEA - Read Fields reply group function
  *
  * Explanation: This is the Read Fields Reply variation of this group function PGN. The receiver is responding to a Read Fields request. This PGN is special as it contains two sets of repeating fields, and the fields that contain the information how many repetitions there are do not have a fixed offset in the PGN as the fields 3 to 5 are only present if field 2 is for a proprietary PGN
  *
  * Match: Function Code == Read Fields Reply<br>
  *
  * @category PGN_126208_NmeaReadFieldsReplyGroupFunction
 */
export interface PGN_126208_NmeaReadFieldsReplyGroupFunction extends PGN {
 fields: PGN_126208_NmeaReadFieldsReplyGroupFunctionFields
}

/**
 * @category PGN_126208_NmeaReadFieldsReplyGroupFunction
 */
export interface PGN_126208_NmeaReadFieldsReplyGroupFunctionFields {
  functionCode?: enums.GroupFunction|number
  pgn?: N2K_Pgn
  manufacturerCode?: enums.ManufacturerCode|number
  reserved?: number
  industryCode?: enums.IndustryCode|number
  uniqueId?: N2K_Number
  numberOfSelectionPairs?: N2K_Number
  numberOfParameters?: N2K_Number
  parameter?: N2K_FieldIndex
  value?: N2K_Variable
  list: {
    selectionParameter?: N2K_FieldIndex
    selectionValue?: N2K_Variable
  }[]
  list2: any[]
}

/**
 * @category PGN_126208_NmeaReadFieldsReplyGroupFunction
 */
export const PGN_126208_NmeaReadFieldsReplyGroupFunctionDefaults = {
  pgn: 126208,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126208_NmeaReadFieldsReplyGroupFunction
 */
export const PGN_126208_NmeaReadFieldsReplyGroupFunctionMatchFields = {
  functionCode: enums.GroupFunction.ReadFieldsReply,
}

/**
 * @category PGN_126208_NmeaReadFieldsReplyGroupFunction
 */
export interface PGN_126208_NmeaReadFieldsReplyGroupFunctionCreateArgs {
  pgn?: N2K_Pgn
  manufacturerCode?: enums.ManufacturerCode|number
  reserved?: number
  industryCode?: enums.IndustryCode|number
  uniqueId?: N2K_Number
  numberOfSelectionPairs?: N2K_Number
  numberOfParameters?: N2K_Number
  parameter?: N2K_FieldIndex
  value?: N2K_Variable
  list: {
    selectionParameter?: N2K_FieldIndex
    selectionValue?: N2K_Variable
  }[]
  list2: any[]
}

/**
 * @category PGN_126208_NmeaReadFieldsReplyGroupFunction
 */
export const newPGN_126208_NmeaReadFieldsReplyGroupFunction = (fields: PGN_126208_NmeaReadFieldsReplyGroupFunctionCreateArgs, dst:number=255) : PGN_126208_NmeaReadFieldsReplyGroupFunction => {
  return {
    ...PGN_126208_NmeaReadFieldsReplyGroupFunctionDefaults,
    dst,
    fields: {
      ...PGN_126208_NmeaReadFieldsReplyGroupFunctionMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126208
  *
  * Description: NMEA - Write Fields group function
  *
  * Explanation: This is the Write Fields variation of this group function PGN. The receiver shall modify internal state and reply with a Write Fields Reply message. This PGN is special as it contains two sets of repeating fields, and the fields that contain the information how many repetitions there are do not have a fixed offset in the PGN as the fields 3 to 5 are only present if field 2 is for a proprietary PGN
  *
  * Match: Function Code == Write Fields<br>
  *
  * @category PGN_126208_NmeaWriteFieldsGroupFunction
 */
export interface PGN_126208_NmeaWriteFieldsGroupFunction extends PGN {
 fields: PGN_126208_NmeaWriteFieldsGroupFunctionFields
}

/**
 * @category PGN_126208_NmeaWriteFieldsGroupFunction
 */
export interface PGN_126208_NmeaWriteFieldsGroupFunctionFields {
  functionCode?: enums.GroupFunction|number
  pgn?: N2K_Pgn
  manufacturerCode?: enums.ManufacturerCode|number
  reserved?: number
  industryCode?: enums.IndustryCode|number
  uniqueId?: N2K_Number
  numberOfSelectionPairs?: N2K_Number
  numberOfParameters?: N2K_Number
  parameter?: N2K_FieldIndex
  value?: N2K_Variable
  list: {
    selectionParameter?: N2K_FieldIndex
    selectionValue?: N2K_Variable
  }[]
  list2: any[]
}

/**
 * @category PGN_126208_NmeaWriteFieldsGroupFunction
 */
export const PGN_126208_NmeaWriteFieldsGroupFunctionDefaults = {
  pgn: 126208,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126208_NmeaWriteFieldsGroupFunction
 */
export const PGN_126208_NmeaWriteFieldsGroupFunctionMatchFields = {
  functionCode: enums.GroupFunction.WriteFields,
}

/**
 * @category PGN_126208_NmeaWriteFieldsGroupFunction
 */
export interface PGN_126208_NmeaWriteFieldsGroupFunctionCreateArgs {
  pgn?: N2K_Pgn
  manufacturerCode?: enums.ManufacturerCode|number
  reserved?: number
  industryCode?: enums.IndustryCode|number
  uniqueId?: N2K_Number
  numberOfSelectionPairs?: N2K_Number
  numberOfParameters?: N2K_Number
  parameter?: N2K_FieldIndex
  value?: N2K_Variable
  list: {
    selectionParameter?: N2K_FieldIndex
    selectionValue?: N2K_Variable
  }[]
  list2: any[]
}

/**
 * @category PGN_126208_NmeaWriteFieldsGroupFunction
 */
export const newPGN_126208_NmeaWriteFieldsGroupFunction = (fields: PGN_126208_NmeaWriteFieldsGroupFunctionCreateArgs, dst:number=255) : PGN_126208_NmeaWriteFieldsGroupFunction => {
  return {
    ...PGN_126208_NmeaWriteFieldsGroupFunctionDefaults,
    dst,
    fields: {
      ...PGN_126208_NmeaWriteFieldsGroupFunctionMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126208
  *
  * Description: NMEA - Write Fields reply group function
  *
  * Explanation: This is the Write Fields Reply variation of this group function PGN. The receiver is responding to a Write Fields request. This PGN is special as it contains two sets of repeating fields, and the fields that contain the information how many repetitions there are do not have a fixed offset in the PGN as the fields 3 to 5 are only present if field 2 is for a proprietary PGN
  *
  * Match: Function Code == Write Fields Reply<br>
  *
  * @category PGN_126208_NmeaWriteFieldsReplyGroupFunction
 */
export interface PGN_126208_NmeaWriteFieldsReplyGroupFunction extends PGN {
 fields: PGN_126208_NmeaWriteFieldsReplyGroupFunctionFields
}

/**
 * @category PGN_126208_NmeaWriteFieldsReplyGroupFunction
 */
export interface PGN_126208_NmeaWriteFieldsReplyGroupFunctionFields {
  functionCode?: enums.GroupFunction|number
  pgn?: N2K_Pgn
  manufacturerCode?: enums.ManufacturerCode|number
  reserved?: number
  industryCode?: enums.IndustryCode|number
  uniqueId?: N2K_Number
  numberOfSelectionPairs?: N2K_Number
  numberOfParameters?: N2K_Number
  parameter?: N2K_FieldIndex
  value?: N2K_Variable
  list: {
    selectionParameter?: N2K_FieldIndex
    selectionValue?: N2K_Variable
  }[]
  list2: any[]
}

/**
 * @category PGN_126208_NmeaWriteFieldsReplyGroupFunction
 */
export const PGN_126208_NmeaWriteFieldsReplyGroupFunctionDefaults = {
  pgn: 126208,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126208_NmeaWriteFieldsReplyGroupFunction
 */
export const PGN_126208_NmeaWriteFieldsReplyGroupFunctionMatchFields = {
  functionCode: enums.GroupFunction.WriteFieldsReply,
}

/**
 * @category PGN_126208_NmeaWriteFieldsReplyGroupFunction
 */
export interface PGN_126208_NmeaWriteFieldsReplyGroupFunctionCreateArgs {
  pgn?: N2K_Pgn
  manufacturerCode?: enums.ManufacturerCode|number
  reserved?: number
  industryCode?: enums.IndustryCode|number
  uniqueId?: N2K_Number
  numberOfSelectionPairs?: N2K_Number
  numberOfParameters?: N2K_Number
  parameter?: N2K_FieldIndex
  value?: N2K_Variable
  list: {
    selectionParameter?: N2K_FieldIndex
    selectionValue?: N2K_Variable
  }[]
  list2: any[]
}

/**
 * @category PGN_126208_NmeaWriteFieldsReplyGroupFunction
 */
export const newPGN_126208_NmeaWriteFieldsReplyGroupFunction = (fields: PGN_126208_NmeaWriteFieldsReplyGroupFunctionCreateArgs, dst:number=255) : PGN_126208_NmeaWriteFieldsReplyGroupFunction => {
  return {
    ...PGN_126208_NmeaWriteFieldsReplyGroupFunctionDefaults,
    dst,
    fields: {
      ...PGN_126208_NmeaWriteFieldsReplyGroupFunctionMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126464
  *
  * Description: PGN List (Transmit and Receive)
  *
  * @category PGN_126464
 */
export interface PGN_126464 extends PGN {
 fields: PGN_126464Fields
}

/**
 * @category PGN_126464
 */
export interface PGN_126464Fields {
  functionCode?: enums.PgnListFunction|number
  list: {
    pgn?: N2K_Pgn
  }[]
}

/**
 * @category PGN_126464
 */
export const PGN_126464Defaults = {
  pgn: 126464,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126464
 */
export const newPGN_126464 = (fields: PGN_126464Fields, dst:number=255) : PGN_126464 => {
  return {
    ...PGN_126464Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Seatalk1: Pilot Mode
  *
  * Match: Manufacturer Code == Raymarine<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == 0x81f0<br>
  * Match: command == 0x84<br>
  *
  * @category PGN_126720_Seatalk1PilotMode
 */
export interface PGN_126720_Seatalk1PilotMode extends PGN {
 fields: PGN_126720_Seatalk1PilotModeFields
}

/**
 * @category PGN_126720_Seatalk1PilotMode
 */
export interface PGN_126720_Seatalk1PilotModeFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: N2K_Number
  command?: N2K_Number
  unknown1?: N2K_Binary
  pilotMode?: enums.SeatalkPilotMode|number
  subMode?: N2K_Number
  pilotModeData?: N2K_Binary
  unknown2?: N2K_Binary
}

/**
 * @category PGN_126720_Seatalk1PilotMode
 */
export const PGN_126720_Seatalk1PilotModeDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_Seatalk1PilotMode
 */
export const PGN_126720_Seatalk1PilotModeMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Raymarine,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: 33264,
  command: 132,
}

/**
 * @category PGN_126720_Seatalk1PilotMode
 */
export interface PGN_126720_Seatalk1PilotModeCreateArgs {
  reserved?: number
  unknown1?: N2K_Binary
  pilotMode?: enums.SeatalkPilotMode|number
  subMode?: N2K_Number
  pilotModeData?: N2K_Binary
  unknown2?: N2K_Binary
}

/**
 * @category PGN_126720_Seatalk1PilotMode
 */
export const newPGN_126720_Seatalk1PilotMode = (fields: PGN_126720_Seatalk1PilotModeCreateArgs, dst:number=255) : PGN_126720_Seatalk1PilotMode => {
  return {
    ...PGN_126720_Seatalk1PilotModeDefaults,
    dst,
    fields: {
      ...PGN_126720_Seatalk1PilotModeMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Fusion: Media Control
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Media Control<br>
  *
  * @category PGN_126720_FusionMediaControl
 */
export interface PGN_126720_FusionMediaControl extends PGN {
 fields: PGN_126720_FusionMediaControlFields
}

/**
 * @category PGN_126720_FusionMediaControl
 */
export interface PGN_126720_FusionMediaControlFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: N2K_Number
  unknown?: N2K_Number
  sourceId?: N2K_Number
  command?: enums.FusionCommand|number
}

/**
 * @category PGN_126720_FusionMediaControl
 */
export const PGN_126720_FusionMediaControlDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_FusionMediaControl
 */
export const PGN_126720_FusionMediaControlMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: 3,
}

/**
 * @category PGN_126720_FusionMediaControl
 */
export interface PGN_126720_FusionMediaControlCreateArgs {
  reserved?: number
  unknown?: N2K_Number
  sourceId?: N2K_Number
  command?: enums.FusionCommand|number
}

/**
 * @category PGN_126720_FusionMediaControl
 */
export const newPGN_126720_FusionMediaControl = (fields: PGN_126720_FusionMediaControlCreateArgs, dst:number=255) : PGN_126720_FusionMediaControl => {
  return {
    ...PGN_126720_FusionMediaControlDefaults,
    dst,
    fields: {
      ...PGN_126720_FusionMediaControlMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Fusion: Sirius Control
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Sirius Control<br>
  *
  * @category PGN_126720_FusionSiriusControl
 */
export interface PGN_126720_FusionSiriusControl extends PGN {
 fields: PGN_126720_FusionSiriusControlFields
}

/**
 * @category PGN_126720_FusionSiriusControl
 */
export interface PGN_126720_FusionSiriusControlFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: N2K_Number
  unknown?: N2K_Number
  sourceId?: N2K_Number
  command?: enums.FusionSiriusCommand|number
}

/**
 * @category PGN_126720_FusionSiriusControl
 */
export const PGN_126720_FusionSiriusControlDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_FusionSiriusControl
 */
export const PGN_126720_FusionSiriusControlMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: 30,
}

/**
 * @category PGN_126720_FusionSiriusControl
 */
export interface PGN_126720_FusionSiriusControlCreateArgs {
  reserved?: number
  unknown?: N2K_Number
  sourceId?: N2K_Number
  command?: enums.FusionSiriusCommand|number
}

/**
 * @category PGN_126720_FusionSiriusControl
 */
export const newPGN_126720_FusionSiriusControl = (fields: PGN_126720_FusionSiriusControlCreateArgs, dst:number=255) : PGN_126720_FusionSiriusControl => {
  return {
    ...PGN_126720_FusionSiriusControlDefaults,
    dst,
    fields: {
      ...PGN_126720_FusionSiriusControlMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Fusion: Request Status
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Request Status<br>
  *
  * @category PGN_126720_FusionRequestStatus
 */
export interface PGN_126720_FusionRequestStatus extends PGN {
 fields: PGN_126720_FusionRequestStatusFields
}

/**
 * @category PGN_126720_FusionRequestStatus
 */
export interface PGN_126720_FusionRequestStatusFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.FusionMessageId|number
  unknown?: N2K_Number
}

/**
 * @category PGN_126720_FusionRequestStatus
 */
export const PGN_126720_FusionRequestStatusDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_FusionRequestStatus
 */
export const PGN_126720_FusionRequestStatusMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.FusionMessageId.RequestStatus,
}

/**
 * @category PGN_126720_FusionRequestStatus
 */
export interface PGN_126720_FusionRequestStatusCreateArgs {
  reserved?: number
  unknown?: N2K_Number
}

/**
 * @category PGN_126720_FusionRequestStatus
 */
export const newPGN_126720_FusionRequestStatus = (fields: PGN_126720_FusionRequestStatusCreateArgs, dst:number=255) : PGN_126720_FusionRequestStatus => {
  return {
    ...PGN_126720_FusionRequestStatusDefaults,
    dst,
    fields: {
      ...PGN_126720_FusionRequestStatusMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Fusion: Set Source
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Source<br>
  *
  * @category PGN_126720_FusionSetSource
 */
export interface PGN_126720_FusionSetSource extends PGN {
 fields: PGN_126720_FusionSetSourceFields
}

/**
 * @category PGN_126720_FusionSetSource
 */
export interface PGN_126720_FusionSetSourceFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.FusionMessageId|number
  unknown?: N2K_Number
  sourceId?: N2K_Number
}

/**
 * @category PGN_126720_FusionSetSource
 */
export const PGN_126720_FusionSetSourceDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_FusionSetSource
 */
export const PGN_126720_FusionSetSourceMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.FusionMessageId.Source,
}

/**
 * @category PGN_126720_FusionSetSource
 */
export interface PGN_126720_FusionSetSourceCreateArgs {
  reserved?: number
  unknown?: N2K_Number
  sourceId?: N2K_Number
}

/**
 * @category PGN_126720_FusionSetSource
 */
export const newPGN_126720_FusionSetSource = (fields: PGN_126720_FusionSetSourceCreateArgs, dst:number=255) : PGN_126720_FusionSetSource => {
  return {
    ...PGN_126720_FusionSetSourceDefaults,
    dst,
    fields: {
      ...PGN_126720_FusionSetSourceMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Fusion: Set Mute
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == 23<br>
  *
  * @category PGN_126720_FusionSetMute
 */
export interface PGN_126720_FusionSetMute extends PGN {
 fields: PGN_126720_FusionSetMuteFields
}

/**
 * @category PGN_126720_FusionSetMute
 */
export interface PGN_126720_FusionSetMuteFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.FusionMessageId|number
  command?: enums.FusionMuteCommand|number
}

/**
 * @category PGN_126720_FusionSetMute
 */
export const PGN_126720_FusionSetMuteDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_FusionSetMute
 */
export const PGN_126720_FusionSetMuteMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: 23,
}

/**
 * @category PGN_126720_FusionSetMute
 */
export interface PGN_126720_FusionSetMuteCreateArgs {
  reserved?: number
  command?: enums.FusionMuteCommand|number
}

/**
 * @category PGN_126720_FusionSetMute
 */
export const newPGN_126720_FusionSetMute = (fields: PGN_126720_FusionSetMuteCreateArgs, dst:number=255) : PGN_126720_FusionSetMute => {
  return {
    ...PGN_126720_FusionSetMuteDefaults,
    dst,
    fields: {
      ...PGN_126720_FusionSetMuteMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Fusion: Set Zone Volume
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Set Zone Volume<br>
  *
  * @category PGN_126720_FusionSetZoneVolume
 */
export interface PGN_126720_FusionSetZoneVolume extends PGN {
 fields: PGN_126720_FusionSetZoneVolumeFields
}

/**
 * @category PGN_126720_FusionSetZoneVolume
 */
export interface PGN_126720_FusionSetZoneVolumeFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.FusionMessageId|number
  unknown?: N2K_Number
  zone?: N2K_Number
  volume?: N2K_Number
}

/**
 * @category PGN_126720_FusionSetZoneVolume
 */
export const PGN_126720_FusionSetZoneVolumeDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_FusionSetZoneVolume
 */
export const PGN_126720_FusionSetZoneVolumeMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.FusionMessageId.SetZoneVolume,
}

/**
 * @category PGN_126720_FusionSetZoneVolume
 */
export interface PGN_126720_FusionSetZoneVolumeCreateArgs {
  reserved?: number
  unknown?: N2K_Number
  zone?: N2K_Number
  volume?: N2K_Number
}

/**
 * @category PGN_126720_FusionSetZoneVolume
 */
export const newPGN_126720_FusionSetZoneVolume = (fields: PGN_126720_FusionSetZoneVolumeCreateArgs, dst:number=255) : PGN_126720_FusionSetZoneVolume => {
  return {
    ...PGN_126720_FusionSetZoneVolumeDefaults,
    dst,
    fields: {
      ...PGN_126720_FusionSetZoneVolumeMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Fusion: Set All Volumes
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Set All Volumes<br>
  *
  * @category PGN_126720_FusionSetAllVolumes
 */
export interface PGN_126720_FusionSetAllVolumes extends PGN {
 fields: PGN_126720_FusionSetAllVolumesFields
}

/**
 * @category PGN_126720_FusionSetAllVolumes
 */
export interface PGN_126720_FusionSetAllVolumesFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.FusionMessageId|number
  unknown?: N2K_Number
  zone1?: N2K_Number
  zone2?: N2K_Number
  zone3?: N2K_Number
  zone4?: N2K_Number
}

/**
 * @category PGN_126720_FusionSetAllVolumes
 */
export const PGN_126720_FusionSetAllVolumesDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_FusionSetAllVolumes
 */
export const PGN_126720_FusionSetAllVolumesMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.FusionMessageId.SetAllVolumes,
}

/**
 * @category PGN_126720_FusionSetAllVolumes
 */
export interface PGN_126720_FusionSetAllVolumesCreateArgs {
  reserved?: number
  unknown?: N2K_Number
  zone1?: N2K_Number
  zone2?: N2K_Number
  zone3?: N2K_Number
  zone4?: N2K_Number
}

/**
 * @category PGN_126720_FusionSetAllVolumes
 */
export const newPGN_126720_FusionSetAllVolumes = (fields: PGN_126720_FusionSetAllVolumesCreateArgs, dst:number=255) : PGN_126720_FusionSetAllVolumes => {
  return {
    ...PGN_126720_FusionSetAllVolumesDefaults,
    dst,
    fields: {
      ...PGN_126720_FusionSetAllVolumesMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Seatalk1: Keystroke
  *
  * Match: Manufacturer Code == Raymarine<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == 0x81f0<br>
  * Match: command == 0x86<br>
  *
  * @category PGN_126720_Seatalk1Keystroke
 */
export interface PGN_126720_Seatalk1Keystroke extends PGN {
 fields: PGN_126720_Seatalk1KeystrokeFields
}

/**
 * @category PGN_126720_Seatalk1Keystroke
 */
export interface PGN_126720_Seatalk1KeystrokeFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: N2K_Number
  command?: N2K_Number
  device?: N2K_Number
  key?: enums.SeatalkKeystroke|number
  keyinverted?: N2K_Number
  unknownData?: N2K_Binary
}

/**
 * @category PGN_126720_Seatalk1Keystroke
 */
export const PGN_126720_Seatalk1KeystrokeDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_Seatalk1Keystroke
 */
export const PGN_126720_Seatalk1KeystrokeMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Raymarine,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: 33264,
  command: 134,
}

/**
 * @category PGN_126720_Seatalk1Keystroke
 */
export interface PGN_126720_Seatalk1KeystrokeCreateArgs {
  reserved?: number
  device?: N2K_Number
  key?: enums.SeatalkKeystroke|number
  keyinverted?: N2K_Number
  unknownData?: N2K_Binary
}

/**
 * @category PGN_126720_Seatalk1Keystroke
 */
export const newPGN_126720_Seatalk1Keystroke = (fields: PGN_126720_Seatalk1KeystrokeCreateArgs, dst:number=255) : PGN_126720_Seatalk1Keystroke => {
  return {
    ...PGN_126720_Seatalk1KeystrokeDefaults,
    dst,
    fields: {
      ...PGN_126720_Seatalk1KeystrokeMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Seatalk1: Device Identification
  *
  * Match: Manufacturer Code == Raymarine<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == 0x81f0<br>
  * Match: command == 0x90<br>
  *
  * @category PGN_126720_Seatalk1DeviceIdentification
 */
export interface PGN_126720_Seatalk1DeviceIdentification extends PGN {
 fields: PGN_126720_Seatalk1DeviceIdentificationFields
}

/**
 * @category PGN_126720_Seatalk1DeviceIdentification
 */
export interface PGN_126720_Seatalk1DeviceIdentificationFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: N2K_Number
  command?: N2K_Number
  reserved6?: number
  device?: enums.SeatalkDeviceId|number
}

/**
 * @category PGN_126720_Seatalk1DeviceIdentification
 */
export const PGN_126720_Seatalk1DeviceIdentificationDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_Seatalk1DeviceIdentification
 */
export const PGN_126720_Seatalk1DeviceIdentificationMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Raymarine,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: 33264,
  command: 144,
}

/**
 * @category PGN_126720_Seatalk1DeviceIdentification
 */
export interface PGN_126720_Seatalk1DeviceIdentificationCreateArgs {
  reserved?: number
  reserved6?: number
  device?: enums.SeatalkDeviceId|number
}

/**
 * @category PGN_126720_Seatalk1DeviceIdentification
 */
export const newPGN_126720_Seatalk1DeviceIdentification = (fields: PGN_126720_Seatalk1DeviceIdentificationCreateArgs, dst:number=255) : PGN_126720_Seatalk1DeviceIdentification => {
  return {
    ...PGN_126720_Seatalk1DeviceIdentificationDefaults,
    dst,
    fields: {
      ...PGN_126720_Seatalk1DeviceIdentificationMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Seatalk1: Display Brightness
  *
  * Match: Manufacturer Code == Raymarine<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == 0x0c8c<br>
  *
  * @category PGN_126720_Seatalk1DisplayBrightness
 */
export interface PGN_126720_Seatalk1DisplayBrightness extends PGN {
 fields: PGN_126720_Seatalk1DisplayBrightnessFields
}

/**
 * @category PGN_126720_Seatalk1DisplayBrightness
 */
export interface PGN_126720_Seatalk1DisplayBrightnessFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: N2K_Number
  group?: enums.SeatalkNetworkGroup|number
  unknown1?: N2K_Binary
  command?: N2K_Number
  brightness?: N2K_Number
  unknown2?: N2K_Binary
}

/**
 * @category PGN_126720_Seatalk1DisplayBrightness
 */
export const PGN_126720_Seatalk1DisplayBrightnessDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_Seatalk1DisplayBrightness
 */
export const PGN_126720_Seatalk1DisplayBrightnessMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Raymarine,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: 3212,
}

/**
 * @category PGN_126720_Seatalk1DisplayBrightness
 */
export interface PGN_126720_Seatalk1DisplayBrightnessCreateArgs {
  reserved?: number
  group?: enums.SeatalkNetworkGroup|number
  unknown1?: N2K_Binary
  command?: N2K_Number
  brightness?: N2K_Number
  unknown2?: N2K_Binary
}

/**
 * @category PGN_126720_Seatalk1DisplayBrightness
 */
export const newPGN_126720_Seatalk1DisplayBrightness = (fields: PGN_126720_Seatalk1DisplayBrightnessCreateArgs, dst:number=255) : PGN_126720_Seatalk1DisplayBrightness => {
  return {
    ...PGN_126720_Seatalk1DisplayBrightnessDefaults,
    dst,
    fields: {
      ...PGN_126720_Seatalk1DisplayBrightnessMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Seatalk1: Display Color
  *
  * Match: Manufacturer Code == Raymarine<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == 0x0c8c<br>
  * Match: Command == Color<br>
  *
  * @category PGN_126720_Seatalk1DisplayColor
 */
export interface PGN_126720_Seatalk1DisplayColor extends PGN {
 fields: PGN_126720_Seatalk1DisplayColorFields
}

/**
 * @category PGN_126720_Seatalk1DisplayColor
 */
export interface PGN_126720_Seatalk1DisplayColorFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: N2K_Number
  group?: enums.SeatalkNetworkGroup|number
  unknown1?: N2K_Binary
  command?: N2K_Number
  color?: enums.SeatalkDisplayColor|number
  unknown2?: N2K_Binary
}

/**
 * @category PGN_126720_Seatalk1DisplayColor
 */
export const PGN_126720_Seatalk1DisplayColorDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_Seatalk1DisplayColor
 */
export const PGN_126720_Seatalk1DisplayColorMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Raymarine,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: 3212,
  command: 1,
}

/**
 * @category PGN_126720_Seatalk1DisplayColor
 */
export interface PGN_126720_Seatalk1DisplayColorCreateArgs {
  reserved?: number
  group?: enums.SeatalkNetworkGroup|number
  unknown1?: N2K_Binary
  color?: enums.SeatalkDisplayColor|number
  unknown2?: N2K_Binary
}

/**
 * @category PGN_126720_Seatalk1DisplayColor
 */
export const newPGN_126720_Seatalk1DisplayColor = (fields: PGN_126720_Seatalk1DisplayColorCreateArgs, dst:number=255) : PGN_126720_Seatalk1DisplayColor => {
  return {
    ...PGN_126720_Seatalk1DisplayColorDefaults,
    dst,
    fields: {
      ...PGN_126720_Seatalk1DisplayColorMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Airmar: Attitude Offset
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Attitude Offsets<br>
  *
  * @category PGN_126720_AirmarAttitudeOffset
 */
export interface PGN_126720_AirmarAttitudeOffset extends PGN {
 fields: PGN_126720_AirmarAttitudeOffsetFields
}

/**
 * @category PGN_126720_AirmarAttitudeOffset
 */
export interface PGN_126720_AirmarAttitudeOffsetFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  azimuthOffset?: N2K_Number
  pitchOffset?: N2K_Number
  rollOffset?: N2K_Number
}

/**
 * @category PGN_126720_AirmarAttitudeOffset
 */
export const PGN_126720_AirmarAttitudeOffsetDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_AirmarAttitudeOffset
 */
export const PGN_126720_AirmarAttitudeOffsetMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.AirmarCommand.AttitudeOffsets,
}

/**
 * @category PGN_126720_AirmarAttitudeOffset
 */
export interface PGN_126720_AirmarAttitudeOffsetCreateArgs {
  reserved?: number
  azimuthOffset?: N2K_Number
  pitchOffset?: N2K_Number
  rollOffset?: N2K_Number
}

/**
 * @category PGN_126720_AirmarAttitudeOffset
 */
export const newPGN_126720_AirmarAttitudeOffset = (fields: PGN_126720_AirmarAttitudeOffsetCreateArgs, dst:number=255) : PGN_126720_AirmarAttitudeOffset => {
  return {
    ...PGN_126720_AirmarAttitudeOffsetDefaults,
    dst,
    fields: {
      ...PGN_126720_AirmarAttitudeOffsetMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Airmar: Calibrate Compass
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Calibrate Compass<br>
  *
  * @category PGN_126720_AirmarCalibrateCompass
 */
export interface PGN_126720_AirmarCalibrateCompass extends PGN {
 fields: PGN_126720_AirmarCalibrateCompassFields
}

/**
 * @category PGN_126720_AirmarCalibrateCompass
 */
export interface PGN_126720_AirmarCalibrateCompassFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  calibrateFunction?: enums.AirmarCalibrateFunction|number
  calibrationStatus?: enums.AirmarCalibrateStatus|number
  verifyScore?: N2K_Number
  xAxisGainValue?: N2K_Number
  yAxisGainValue?: N2K_Number
  zAxisGainValue?: N2K_Number
  xAxisLinearOffset?: N2K_Number
  yAxisLinearOffset?: N2K_Number
  zAxisLinearOffset?: N2K_Number
  xAxisAngularOffset?: N2K_Number
  pitchAndRollDamping?: N2K_Duration
  compassRateGyroDamping?: N2K_Duration
}

/**
 * @category PGN_126720_AirmarCalibrateCompass
 */
export const PGN_126720_AirmarCalibrateCompassDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_AirmarCalibrateCompass
 */
export const PGN_126720_AirmarCalibrateCompassMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.AirmarCommand.CalibrateCompass,
}

/**
 * @category PGN_126720_AirmarCalibrateCompass
 */
export interface PGN_126720_AirmarCalibrateCompassCreateArgs {
  reserved?: number
  calibrateFunction?: enums.AirmarCalibrateFunction|number
  calibrationStatus?: enums.AirmarCalibrateStatus|number
  verifyScore?: N2K_Number
  xAxisGainValue?: N2K_Number
  yAxisGainValue?: N2K_Number
  zAxisGainValue?: N2K_Number
  xAxisLinearOffset?: N2K_Number
  yAxisLinearOffset?: N2K_Number
  zAxisLinearOffset?: N2K_Number
  xAxisAngularOffset?: N2K_Number
  pitchAndRollDamping?: N2K_Duration
  compassRateGyroDamping?: N2K_Duration
}

/**
 * @category PGN_126720_AirmarCalibrateCompass
 */
export const newPGN_126720_AirmarCalibrateCompass = (fields: PGN_126720_AirmarCalibrateCompassCreateArgs, dst:number=255) : PGN_126720_AirmarCalibrateCompass => {
  return {
    ...PGN_126720_AirmarCalibrateCompassDefaults,
    dst,
    fields: {
      ...PGN_126720_AirmarCalibrateCompassMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Airmar: True Wind Options
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == True Wind Options<br>
  *
  * @category PGN_126720_AirmarTrueWindOptions
 */
export interface PGN_126720_AirmarTrueWindOptions extends PGN {
 fields: PGN_126720_AirmarTrueWindOptionsFields
}

/**
 * @category PGN_126720_AirmarTrueWindOptions
 */
export interface PGN_126720_AirmarTrueWindOptionsFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  cogSubstitutionForHdg?: enums.YesNo|number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarTrueWindOptions
 */
export const PGN_126720_AirmarTrueWindOptionsDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_AirmarTrueWindOptions
 */
export const PGN_126720_AirmarTrueWindOptionsMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.AirmarCommand.TrueWindOptions,
}

/**
 * @category PGN_126720_AirmarTrueWindOptions
 */
export interface PGN_126720_AirmarTrueWindOptionsCreateArgs {
  reserved?: number
  cogSubstitutionForHdg?: enums.YesNo|number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarTrueWindOptions
 */
export const newPGN_126720_AirmarTrueWindOptions = (fields: PGN_126720_AirmarTrueWindOptionsCreateArgs, dst:number=255) : PGN_126720_AirmarTrueWindOptions => {
  return {
    ...PGN_126720_AirmarTrueWindOptionsDefaults,
    dst,
    fields: {
      ...PGN_126720_AirmarTrueWindOptionsMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Airmar: Simulate Mode
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Simulate Mode<br>
  *
  * @category PGN_126720_AirmarSimulateMode
 */
export interface PGN_126720_AirmarSimulateMode extends PGN {
 fields: PGN_126720_AirmarSimulateModeFields
}

/**
 * @category PGN_126720_AirmarSimulateMode
 */
export interface PGN_126720_AirmarSimulateModeFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  simulateMode?: enums.OffOn|number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarSimulateMode
 */
export const PGN_126720_AirmarSimulateModeDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_AirmarSimulateMode
 */
export const PGN_126720_AirmarSimulateModeMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.AirmarCommand.SimulateMode,
}

/**
 * @category PGN_126720_AirmarSimulateMode
 */
export interface PGN_126720_AirmarSimulateModeCreateArgs {
  reserved?: number
  simulateMode?: enums.OffOn|number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarSimulateMode
 */
export const newPGN_126720_AirmarSimulateMode = (fields: PGN_126720_AirmarSimulateModeCreateArgs, dst:number=255) : PGN_126720_AirmarSimulateMode => {
  return {
    ...PGN_126720_AirmarSimulateModeDefaults,
    dst,
    fields: {
      ...PGN_126720_AirmarSimulateModeMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Airmar: Calibrate Depth
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Calibrate Depth<br>
  *
  * @category PGN_126720_AirmarCalibrateDepth
 */
export interface PGN_126720_AirmarCalibrateDepth extends PGN {
 fields: PGN_126720_AirmarCalibrateDepthFields
}

/**
 * @category PGN_126720_AirmarCalibrateDepth
 */
export interface PGN_126720_AirmarCalibrateDepthFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  speedOfSoundMode?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarCalibrateDepth
 */
export const PGN_126720_AirmarCalibrateDepthDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_AirmarCalibrateDepth
 */
export const PGN_126720_AirmarCalibrateDepthMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.AirmarCommand.CalibrateDepth,
}

/**
 * @category PGN_126720_AirmarCalibrateDepth
 */
export interface PGN_126720_AirmarCalibrateDepthCreateArgs {
  reserved?: number
  speedOfSoundMode?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarCalibrateDepth
 */
export const newPGN_126720_AirmarCalibrateDepth = (fields: PGN_126720_AirmarCalibrateDepthCreateArgs, dst:number=255) : PGN_126720_AirmarCalibrateDepth => {
  return {
    ...PGN_126720_AirmarCalibrateDepthDefaults,
    dst,
    fields: {
      ...PGN_126720_AirmarCalibrateDepthMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Airmar: Calibrate Speed
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Calibrate Speed<br>
  *
  * @category PGN_126720_AirmarCalibrateSpeed
 */
export interface PGN_126720_AirmarCalibrateSpeed extends PGN {
 fields: PGN_126720_AirmarCalibrateSpeedFields
}

/**
 * @category PGN_126720_AirmarCalibrateSpeed
 */
export interface PGN_126720_AirmarCalibrateSpeedFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  numberOfPairsOfDataPoints?: N2K_Number
  list: {
    inputFrequency?: N2K_Number
    outputSpeed?: N2K_Number
  }[]
}

/**
 * @category PGN_126720_AirmarCalibrateSpeed
 */
export const PGN_126720_AirmarCalibrateSpeedDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_AirmarCalibrateSpeed
 */
export const PGN_126720_AirmarCalibrateSpeedMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.AirmarCommand.CalibrateSpeed,
}

/**
 * @category PGN_126720_AirmarCalibrateSpeed
 */
export interface PGN_126720_AirmarCalibrateSpeedCreateArgs {
  reserved?: number
  numberOfPairsOfDataPoints?: N2K_Number
  list: {
    inputFrequency?: N2K_Number
    outputSpeed?: N2K_Number
  }[]
}

/**
 * @category PGN_126720_AirmarCalibrateSpeed
 */
export const newPGN_126720_AirmarCalibrateSpeed = (fields: PGN_126720_AirmarCalibrateSpeedCreateArgs, dst:number=255) : PGN_126720_AirmarCalibrateSpeed => {
  return {
    ...PGN_126720_AirmarCalibrateSpeedDefaults,
    dst,
    fields: {
      ...PGN_126720_AirmarCalibrateSpeedMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Airmar: Calibrate Temperature
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Calibrate Temperature<br>
  *
  * @category PGN_126720_AirmarCalibrateTemperature
 */
export interface PGN_126720_AirmarCalibrateTemperature extends PGN {
 fields: PGN_126720_AirmarCalibrateTemperatureFields
}

/**
 * @category PGN_126720_AirmarCalibrateTemperature
 */
export interface PGN_126720_AirmarCalibrateTemperatureFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  temperatureInstance: enums.AirmarTemperatureInstance|number
  reserved6?: number
  temperatureOffset?: N2K_Number
}

/**
 * @category PGN_126720_AirmarCalibrateTemperature
 */
export const PGN_126720_AirmarCalibrateTemperatureDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_AirmarCalibrateTemperature
 */
export const PGN_126720_AirmarCalibrateTemperatureMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.AirmarCommand.CalibrateTemperature,
}

/**
 * @category PGN_126720_AirmarCalibrateTemperature
 */
export interface PGN_126720_AirmarCalibrateTemperatureCreateArgs {
  reserved?: number
  temperatureInstance: enums.AirmarTemperatureInstance|number
  reserved6?: number
  temperatureOffset?: N2K_Number
}

/**
 * @category PGN_126720_AirmarCalibrateTemperature
 */
export const newPGN_126720_AirmarCalibrateTemperature = (fields: PGN_126720_AirmarCalibrateTemperatureCreateArgs, dst:number=255) : PGN_126720_AirmarCalibrateTemperature => {
  return {
    ...PGN_126720_AirmarCalibrateTemperatureDefaults,
    dst,
    fields: {
      ...PGN_126720_AirmarCalibrateTemperatureMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Airmar: Speed Filter None
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Speed Filter<br>
  *
  * @category PGN_126720_AirmarSpeedFilterNone
 */
export interface PGN_126720_AirmarSpeedFilterNone extends PGN {
 fields: PGN_126720_AirmarSpeedFilterNoneFields
}

/**
 * @category PGN_126720_AirmarSpeedFilterNone
 */
export interface PGN_126720_AirmarSpeedFilterNoneFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  filterType?: N2K_Number
  reserved6?: number
  sampleInterval?: N2K_Duration
}

/**
 * @category PGN_126720_AirmarSpeedFilterNone
 */
export const PGN_126720_AirmarSpeedFilterNoneDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_AirmarSpeedFilterNone
 */
export const PGN_126720_AirmarSpeedFilterNoneMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.AirmarCommand.SpeedFilter,
}

/**
 * @category PGN_126720_AirmarSpeedFilterNone
 */
export interface PGN_126720_AirmarSpeedFilterNoneCreateArgs {
  reserved?: number
  filterType?: N2K_Number
  reserved6?: number
  sampleInterval?: N2K_Duration
}

/**
 * @category PGN_126720_AirmarSpeedFilterNone
 */
export const newPGN_126720_AirmarSpeedFilterNone = (fields: PGN_126720_AirmarSpeedFilterNoneCreateArgs, dst:number=255) : PGN_126720_AirmarSpeedFilterNone => {
  return {
    ...PGN_126720_AirmarSpeedFilterNoneDefaults,
    dst,
    fields: {
      ...PGN_126720_AirmarSpeedFilterNoneMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Airmar: Speed Filter IIR
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Speed Filter<br>
  * Match: Filter type == IIR filter<br>
  *
  * @category PGN_126720_AirmarSpeedFilterIir
 */
export interface PGN_126720_AirmarSpeedFilterIir extends PGN {
 fields: PGN_126720_AirmarSpeedFilterIirFields
}

/**
 * @category PGN_126720_AirmarSpeedFilterIir
 */
export interface PGN_126720_AirmarSpeedFilterIirFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  filterType?: N2K_Number
  reserved6?: number
  sampleInterval?: N2K_Duration
  filterDuration?: N2K_Duration
}

/**
 * @category PGN_126720_AirmarSpeedFilterIir
 */
export const PGN_126720_AirmarSpeedFilterIirDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_AirmarSpeedFilterIir
 */
export const PGN_126720_AirmarSpeedFilterIirMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.AirmarCommand.SpeedFilter,
  filterType: 1,
}

/**
 * @category PGN_126720_AirmarSpeedFilterIir
 */
export interface PGN_126720_AirmarSpeedFilterIirCreateArgs {
  reserved?: number
  reserved6?: number
  sampleInterval?: N2K_Duration
  filterDuration?: N2K_Duration
}

/**
 * @category PGN_126720_AirmarSpeedFilterIir
 */
export const newPGN_126720_AirmarSpeedFilterIir = (fields: PGN_126720_AirmarSpeedFilterIirCreateArgs, dst:number=255) : PGN_126720_AirmarSpeedFilterIir => {
  return {
    ...PGN_126720_AirmarSpeedFilterIirDefaults,
    dst,
    fields: {
      ...PGN_126720_AirmarSpeedFilterIirMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Airmar: Temperature Filter None
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Temperature Filter<br>
  *
  * @category PGN_126720_AirmarTemperatureFilterNone
 */
export interface PGN_126720_AirmarTemperatureFilterNone extends PGN {
 fields: PGN_126720_AirmarTemperatureFilterNoneFields
}

/**
 * @category PGN_126720_AirmarTemperatureFilterNone
 */
export interface PGN_126720_AirmarTemperatureFilterNoneFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  filterType?: N2K_Number
  reserved6?: number
  sampleInterval?: N2K_Duration
}

/**
 * @category PGN_126720_AirmarTemperatureFilterNone
 */
export const PGN_126720_AirmarTemperatureFilterNoneDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_AirmarTemperatureFilterNone
 */
export const PGN_126720_AirmarTemperatureFilterNoneMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.AirmarCommand.TemperatureFilter,
}

/**
 * @category PGN_126720_AirmarTemperatureFilterNone
 */
export interface PGN_126720_AirmarTemperatureFilterNoneCreateArgs {
  reserved?: number
  filterType?: N2K_Number
  reserved6?: number
  sampleInterval?: N2K_Duration
}

/**
 * @category PGN_126720_AirmarTemperatureFilterNone
 */
export const newPGN_126720_AirmarTemperatureFilterNone = (fields: PGN_126720_AirmarTemperatureFilterNoneCreateArgs, dst:number=255) : PGN_126720_AirmarTemperatureFilterNone => {
  return {
    ...PGN_126720_AirmarTemperatureFilterNoneDefaults,
    dst,
    fields: {
      ...PGN_126720_AirmarTemperatureFilterNoneMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Airmar: Temperature Filter IIR
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Temperature Filter<br>
  * Match: Filter type == IIR filter<br>
  *
  * @category PGN_126720_AirmarTemperatureFilterIir
 */
export interface PGN_126720_AirmarTemperatureFilterIir extends PGN {
 fields: PGN_126720_AirmarTemperatureFilterIirFields
}

/**
 * @category PGN_126720_AirmarTemperatureFilterIir
 */
export interface PGN_126720_AirmarTemperatureFilterIirFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  filterType?: N2K_Number
  reserved6?: number
  sampleInterval?: N2K_Duration
  filterDuration?: N2K_Duration
}

/**
 * @category PGN_126720_AirmarTemperatureFilterIir
 */
export const PGN_126720_AirmarTemperatureFilterIirDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_AirmarTemperatureFilterIir
 */
export const PGN_126720_AirmarTemperatureFilterIirMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.AirmarCommand.TemperatureFilter,
  filterType: 1,
}

/**
 * @category PGN_126720_AirmarTemperatureFilterIir
 */
export interface PGN_126720_AirmarTemperatureFilterIirCreateArgs {
  reserved?: number
  reserved6?: number
  sampleInterval?: N2K_Duration
  filterDuration?: N2K_Duration
}

/**
 * @category PGN_126720_AirmarTemperatureFilterIir
 */
export const newPGN_126720_AirmarTemperatureFilterIir = (fields: PGN_126720_AirmarTemperatureFilterIirCreateArgs, dst:number=255) : PGN_126720_AirmarTemperatureFilterIir => {
  return {
    ...PGN_126720_AirmarTemperatureFilterIirDefaults,
    dst,
    fields: {
      ...PGN_126720_AirmarTemperatureFilterIirMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Airmar: NMEA 2000 options
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == NMEA 2000 options<br>
  *
  * @category PGN_126720_AirmarNmea2000Options
 */
export interface PGN_126720_AirmarNmea2000Options extends PGN {
 fields: PGN_126720_AirmarNmea2000OptionsFields
}

/**
 * @category PGN_126720_AirmarNmea2000Options
 */
export interface PGN_126720_AirmarNmea2000OptionsFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.AirmarCommand|number
  transmissionInterval?: enums.AirmarTransmissionInterval|number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarNmea2000Options
 */
export const PGN_126720_AirmarNmea2000OptionsDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_AirmarNmea2000Options
 */
export const PGN_126720_AirmarNmea2000OptionsMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.AirmarCommand.Nmea2000Options,
}

/**
 * @category PGN_126720_AirmarNmea2000Options
 */
export interface PGN_126720_AirmarNmea2000OptionsCreateArgs {
  reserved?: number
  transmissionInterval?: enums.AirmarTransmissionInterval|number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarNmea2000Options
 */
export const newPGN_126720_AirmarNmea2000Options = (fields: PGN_126720_AirmarNmea2000OptionsCreateArgs, dst:number=255) : PGN_126720_AirmarNmea2000Options => {
  return {
    ...PGN_126720_AirmarNmea2000OptionsDefaults,
    dst,
    fields: {
      ...PGN_126720_AirmarNmea2000OptionsMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Airmar: Addressable Multi-Frame
  *
  * Match: Manufacturer Code == Airmar<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_126720_AirmarAddressableMultiFrame
 */
export interface PGN_126720_AirmarAddressableMultiFrame extends PGN {
 fields: PGN_126720_AirmarAddressableMultiFrameFields
}

/**
 * @category PGN_126720_AirmarAddressableMultiFrame
 */
export interface PGN_126720_AirmarAddressableMultiFrameFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: N2K_Number
}

/**
 * @category PGN_126720_AirmarAddressableMultiFrame
 */
export const PGN_126720_AirmarAddressableMultiFrameDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_AirmarAddressableMultiFrame
 */
export const PGN_126720_AirmarAddressableMultiFrameMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Airmar,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_126720_AirmarAddressableMultiFrame
 */
export interface PGN_126720_AirmarAddressableMultiFrameCreateArgs {
  reserved?: number
  proprietaryId: N2K_Number
}

/**
 * @category PGN_126720_AirmarAddressableMultiFrame
 */
export const newPGN_126720_AirmarAddressableMultiFrame = (fields: PGN_126720_AirmarAddressableMultiFrameCreateArgs, dst:number=255) : PGN_126720_AirmarAddressableMultiFrame => {
  return {
    ...PGN_126720_AirmarAddressableMultiFrameDefaults,
    dst,
    fields: {
      ...PGN_126720_AirmarAddressableMultiFrameMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Maretron: Slave Response
  *
  * Match: Manufacturer Code == Maretron<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_126720_MaretronSlaveResponse
 */
export interface PGN_126720_MaretronSlaveResponse extends PGN {
 fields: PGN_126720_MaretronSlaveResponseFields
}

/**
 * @category PGN_126720_MaretronSlaveResponse
 */
export interface PGN_126720_MaretronSlaveResponseFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  productCode?: N2K_Number
  softwareCode?: N2K_Number
  command?: N2K_Number
  status?: N2K_Number
}

/**
 * @category PGN_126720_MaretronSlaveResponse
 */
export const PGN_126720_MaretronSlaveResponseDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_MaretronSlaveResponse
 */
export const PGN_126720_MaretronSlaveResponseMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Maretron,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_126720_MaretronSlaveResponse
 */
export interface PGN_126720_MaretronSlaveResponseCreateArgs {
  reserved?: number
  productCode?: N2K_Number
  softwareCode?: N2K_Number
  command?: N2K_Number
  status?: N2K_Number
}

/**
 * @category PGN_126720_MaretronSlaveResponse
 */
export const newPGN_126720_MaretronSlaveResponse = (fields: PGN_126720_MaretronSlaveResponseCreateArgs, dst:number=255) : PGN_126720_MaretronSlaveResponse => {
  return {
    ...PGN_126720_MaretronSlaveResponseDefaults,
    dst,
    fields: {
      ...PGN_126720_MaretronSlaveResponseMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Garmin: Day Mode
  *
  * Match: Manufacturer Code == Garmin<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Unknown ID 1 == Always 222<br>
  * Match: Unknown ID 2 == Always 5<br>
  * Match: Unknown ID 3 == Always 5<br>
  * Match: Unknown ID 4 == Always 5<br>
  *
  * @category PGN_126720_GarminDayMode
 */
export interface PGN_126720_GarminDayMode extends PGN {
 fields: PGN_126720_GarminDayModeFields
}

/**
 * @category PGN_126720_GarminDayMode
 */
export interface PGN_126720_GarminDayModeFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  unknownId1?: N2K_Number
  unknownId2?: N2K_Number
  unknownId3?: N2K_Number
  unknownId4?: N2K_Number
  spare8?: number
  mode?: enums.GarminColorMode|number
  spare10?: number
  backlight?: enums.GarminBacklightLevel|number
}

/**
 * @category PGN_126720_GarminDayMode
 */
export const PGN_126720_GarminDayModeDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_GarminDayMode
 */
export const PGN_126720_GarminDayModeMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Garmin,
  industryCode: enums.IndustryCode.Marine,
  unknownId1: 222,
  unknownId2: 5,
  unknownId3: 5,
  unknownId4: 5,
}

/**
 * @category PGN_126720_GarminDayMode
 */
export interface PGN_126720_GarminDayModeCreateArgs {
  reserved?: number
  spare8?: number
  mode?: enums.GarminColorMode|number
  spare10?: number
  backlight?: enums.GarminBacklightLevel|number
}

/**
 * @category PGN_126720_GarminDayMode
 */
export const newPGN_126720_GarminDayMode = (fields: PGN_126720_GarminDayModeCreateArgs, dst:number=255) : PGN_126720_GarminDayMode => {
  return {
    ...PGN_126720_GarminDayModeDefaults,
    dst,
    fields: {
      ...PGN_126720_GarminDayModeMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Garmin: Night Mode
  *
  * Match: Manufacturer Code == Garmin<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Unknown ID 1 == Always 222<br>
  * Match: Unknown ID 2 == Always 5<br>
  * Match: Unknown ID 3 == Always 5<br>
  * Match: Unknown ID 4 == Always 5<br>
  * Match: Mode == Night<br>
  *
  * @category PGN_126720_GarminNightMode
 */
export interface PGN_126720_GarminNightMode extends PGN {
 fields: PGN_126720_GarminNightModeFields
}

/**
 * @category PGN_126720_GarminNightMode
 */
export interface PGN_126720_GarminNightModeFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  unknownId1?: N2K_Number
  unknownId2?: N2K_Number
  unknownId3?: N2K_Number
  unknownId4?: N2K_Number
  spare8?: number
  mode?: enums.GarminColorMode|number
  spare10?: number
  backlight?: enums.GarminBacklightLevel|number
}

/**
 * @category PGN_126720_GarminNightMode
 */
export const PGN_126720_GarminNightModeDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_GarminNightMode
 */
export const PGN_126720_GarminNightModeMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Garmin,
  industryCode: enums.IndustryCode.Marine,
  unknownId1: 222,
  unknownId2: 5,
  unknownId3: 5,
  unknownId4: 5,
  mode: enums.GarminColorMode.Night,
}

/**
 * @category PGN_126720_GarminNightMode
 */
export interface PGN_126720_GarminNightModeCreateArgs {
  reserved?: number
  spare8?: number
  spare10?: number
  backlight?: enums.GarminBacklightLevel|number
}

/**
 * @category PGN_126720_GarminNightMode
 */
export const newPGN_126720_GarminNightMode = (fields: PGN_126720_GarminNightModeCreateArgs, dst:number=255) : PGN_126720_GarminNightMode => {
  return {
    ...PGN_126720_GarminNightModeDefaults,
    dst,
    fields: {
      ...PGN_126720_GarminNightModeMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126720
  *
  * Description: Garmin: Color mode
  *
  * Match: Manufacturer Code == Garmin<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Unknown ID 1 == Always 222<br>
  * Match: Unknown ID 2 == Always 5<br>
  * Match: Unknown ID 3 == Always 5<br>
  * Match: Unknown ID 4 == Always 5<br>
  * Match: Mode == Color<br>
  *
  * @category PGN_126720_GarminColorMode
 */
export interface PGN_126720_GarminColorMode extends PGN {
 fields: PGN_126720_GarminColorModeFields
}

/**
 * @category PGN_126720_GarminColorMode
 */
export interface PGN_126720_GarminColorModeFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  unknownId1?: N2K_Number
  unknownId2?: N2K_Number
  unknownId3?: N2K_Number
  unknownId4?: N2K_Number
  spare8?: number
  mode?: enums.GarminColorMode|number
  spare10?: number
  color?: enums.GarminColor|number
}

/**
 * @category PGN_126720_GarminColorMode
 */
export const PGN_126720_GarminColorModeDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126720_GarminColorMode
 */
export const PGN_126720_GarminColorModeMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Garmin,
  industryCode: enums.IndustryCode.Marine,
  unknownId1: 222,
  unknownId2: 5,
  unknownId3: 5,
  unknownId4: 5,
  mode: enums.GarminColorMode.Color,
}

/**
 * @category PGN_126720_GarminColorMode
 */
export interface PGN_126720_GarminColorModeCreateArgs {
  reserved?: number
  spare8?: number
  spare10?: number
  color?: enums.GarminColor|number
}

/**
 * @category PGN_126720_GarminColorMode
 */
export const newPGN_126720_GarminColorMode = (fields: PGN_126720_GarminColorModeCreateArgs, dst:number=255) : PGN_126720_GarminColorMode => {
  return {
    ...PGN_126720_GarminColorModeDefaults,
    dst,
    fields: {
      ...PGN_126720_GarminColorModeMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 126983
  *
  * Description: Alert
  *
  * @category PGN_126983
 */
export interface PGN_126983 extends PGN {
 fields: PGN_126983Fields
}

/**
 * @category PGN_126983
 */
export interface PGN_126983Fields {
  alertType?: enums.AlertType|number
  alertCategory?: enums.AlertCategory|number
  alertSystem?: N2K_Number
  alertSubSystem?: N2K_Number
  alertId?: N2K_Number
  dataSourceNetworkIdName?: N2K_IsoName
  dataSourceInstance: N2K_Number
  dataSourceIndexSource?: N2K_Number
  alertOccurrenceNumber?: N2K_Number
  temporarySilenceStatus: enums.YesNo|number
  acknowledgeStatus: enums.YesNo|number
  escalationStatus: enums.YesNo|number
  temporarySilenceSupport: enums.YesNo|number
  acknowledgeSupport: enums.YesNo|number
  escalationSupport: enums.YesNo|number
  reserved?: number
  acknowledgeSourceNetworkIdName?: N2K_IsoName
  triggerCondition?: enums.AlertTriggerCondition|number
  thresholdStatus?: enums.AlertThresholdStatus|number
  alertPriority?: N2K_Number
  alertState?: enums.AlertState|number
}

/**
 * @category PGN_126983
 */
export const PGN_126983Defaults = {
  pgn: 126983,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126983
 */
export const newPGN_126983 = (fields: PGN_126983Fields, dst:number=255) : PGN_126983 => {
  return {
    ...PGN_126983Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 126984
  *
  * Description: Alert Response
  *
  * @category PGN_126984
 */
export interface PGN_126984 extends PGN {
 fields: PGN_126984Fields
}

/**
 * @category PGN_126984
 */
export interface PGN_126984Fields {
  alertType?: enums.AlertType|number
  alertCategory?: enums.AlertCategory|number
  alertSystem?: N2K_Number
  alertSubSystem?: N2K_Number
  alertId?: N2K_Number
  dataSourceNetworkIdName?: N2K_IsoName
  dataSourceInstance: N2K_Number
  dataSourceIndexSource?: N2K_Number
  alertOccurrenceNumber?: N2K_Number
  acknowledgeSourceNetworkIdName?: N2K_IsoName
  responseCommand?: enums.AlertResponseCommand|number
  reserved?: number
}

/**
 * @category PGN_126984
 */
export const PGN_126984Defaults = {
  pgn: 126984,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126984
 */
export const newPGN_126984 = (fields: PGN_126984Fields, dst:number=255) : PGN_126984 => {
  return {
    ...PGN_126984Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 126985
  *
  * Description: Alert Text
  *
  * @category PGN_126985
 */
export interface PGN_126985 extends PGN {
 fields: PGN_126985Fields
}

/**
 * @category PGN_126985
 */
export interface PGN_126985Fields {
  alertType?: enums.AlertType|number
  alertCategory?: enums.AlertCategory|number
  alertSystem?: N2K_Number
  alertSubSystem?: N2K_Number
  alertId?: N2K_Number
  dataSourceNetworkIdName?: N2K_IsoName
  dataSourceInstance: N2K_Number
  dataSourceIndexSource?: N2K_Number
  alertOccurrenceNumber?: N2K_Number
  languageId?: enums.AlertLanguageId|number
  alertTextDescription?: N2K_StringLau
  alertLocationTextDescription?: N2K_StringLau
}

/**
 * @category PGN_126985
 */
export const PGN_126985Defaults = {
  pgn: 126985,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126985
 */
export const newPGN_126985 = (fields: PGN_126985Fields, dst:number=255) : PGN_126985 => {
  return {
    ...PGN_126985Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 126986
  *
  * Description: Alert Configuration
  *
  * @category PGN_126986
 */
export interface PGN_126986 extends PGN {
 fields: PGN_126986Fields
}

/**
 * @category PGN_126986
 */
export interface PGN_126986Fields {
  alertType?: enums.AlertType|number
  alertCategory?: enums.AlertCategory|number
  alertSystem?: N2K_Number
  alertSubSystem?: N2K_Number
  alertId?: N2K_Number
  dataSourceNetworkIdName?: N2K_IsoName
  dataSourceInstance: N2K_Number
  dataSourceIndexSource?: N2K_Number
  alertOccurrenceNumber?: N2K_Number
  alertControl?: N2K_Number
  userDefinedAlertAssignment?: N2K_Number
  reserved?: number
  reactivationPeriod?: N2K_Number
  temporarySilencePeriod?: N2K_Number
  escalationPeriod?: N2K_Number
}

/**
 * @category PGN_126986
 */
export const PGN_126986Defaults = {
  pgn: 126986,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126986
 */
export const newPGN_126986 = (fields: PGN_126986Fields, dst:number=255) : PGN_126986 => {
  return {
    ...PGN_126986Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 126987
  *
  * Description: Alert Threshold
  *
  * @category PGN_126987
 */
export interface PGN_126987 extends PGN {
 fields: PGN_126987Fields
}

/**
 * @category PGN_126987
 */
export interface PGN_126987Fields {
  alertType?: enums.AlertType|number
  alertCategory?: enums.AlertCategory|number
  alertSystem?: N2K_Number
  alertSubSystem?: N2K_Number
  alertId?: N2K_Number
  dataSourceNetworkIdName?: N2K_IsoName
  dataSourceInstance: N2K_Number
  dataSourceIndexSource?: N2K_Number
  alertOccurrenceNumber?: N2K_Number
  numberOfParameters?: N2K_Number
  list: {
    parameterNumber?: N2K_Number
    triggerMethod?: N2K_Number
    thresholdDataFormat?: N2K_Number
    thresholdLevel?: N2K_Number
  }[]
}

/**
 * @category PGN_126987
 */
export const PGN_126987Defaults = {
  pgn: 126987,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126987
 */
export const newPGN_126987 = (fields: PGN_126987Fields, dst:number=255) : PGN_126987 => {
  return {
    ...PGN_126987Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 126988
  *
  * Description: Alert Value
  *
  * @category PGN_126988
 */
export interface PGN_126988 extends PGN {
 fields: PGN_126988Fields
}

/**
 * @category PGN_126988
 */
export interface PGN_126988Fields {
  alertType?: enums.AlertType|number
  alertCategory?: enums.AlertCategory|number
  alertSystem?: N2K_Number
  alertSubSystem?: N2K_Number
  alertId?: N2K_Number
  dataSourceNetworkIdName?: N2K_IsoName
  dataSourceInstance: N2K_Number
  dataSourceIndexSource?: N2K_Number
  alertOccurrenceNumber?: N2K_Number
  numberOfParameters?: N2K_Number
  list: {
    valueParameterNumber?: N2K_Number
    valueDataFormat?: N2K_Number
    valueData?: N2K_Number
  }[]
}

/**
 * @category PGN_126988
 */
export const PGN_126988Defaults = {
  pgn: 126988,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126988
 */
export const newPGN_126988 = (fields: PGN_126988Fields, dst:number=255) : PGN_126988 => {
  return {
    ...PGN_126988Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 126992
  *
  * Description: System Time
  *
  * Explanation: The purpose of this PGN is twofold: To provide a regular transmission of UTC time and date. To provide synchronism for measurement data.
  *
  * @category PGN_126992
 */
export interface PGN_126992 extends PGN {
 fields: PGN_126992Fields
}

/**
 * @category PGN_126992
 */
export interface PGN_126992Fields {
  sid?: N2K_Number
  source: enums.SystemTime|number
  reserved?: number
  date?: N2K_Date
  time?: N2K_Time
}

/**
 * @category PGN_126992
 */
export const PGN_126992Defaults = {
  pgn: 126992,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_126992
 */
export const newPGN_126992 = (fields: PGN_126992Fields, dst:number=255) : PGN_126992 => {
  return {
    ...PGN_126992Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 126993
  *
  * Description: Heartbeat
  *
  * Explanation: Reception of this PGN confirms that a device is still present on the network.  Reception of this PGN may also be used to maintain an address to NAME association table within the receiving device.  The transmission interval may be used by the receiving unit to determine the time-out value for the connection supervision.  The value contained in Field 1 of this PGN reflects the PGN's current Transmission Interval. Changes to this PGN's Transmission Interval shall be reflected in Field 1.  The transmission interval can only be changed by using the Request Group Function PGN 126208 with no pairs of request parameters provided. Field 3 of the Request Group Function PGN 126208 may contain values between 1,000ms and 60,000ms.  This PGN cannot be requested by the ISO Request PGN 059904 or Request Group Function PGN 126208. In Request Group Function PGN 126208, setting Field 3 to a value of 0xFFFF FFFF and Field 4 to a value of 0xFFFF: 'Transmit now without changing timing variables.' is prohibited.  The Command Group Function PGN 126208 shall not be used with this PGN.  Fields 3 and 4 of this PGN provide information which can be used to distinguish short duration disturbances from permanent failures. See ISO 11898 -1 Sections 6.12, 6.13, 6.14, 13.1.1, 13.1.4, 13.1.4.3 and Figure 16 ( node status transition diagram) for additional context.
  *
  * @category PGN_126993
 */
export interface PGN_126993 extends PGN {
 fields: PGN_126993Fields
}

/**
 * @category PGN_126993
 */
export interface PGN_126993Fields {
  dataTransmitOffset?: N2K_Duration
  sequenceCounter?: N2K_Number
  controller1State?: enums.ControllerState|number
  controller2State?: enums.ControllerState|number
  equipmentStatus?: enums.EquipmentStatus|number
  reserved?: number
}

/**
 * @category PGN_126993
 */
export const PGN_126993Defaults = {
  pgn: 126993,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_126993
 */
export const newPGN_126993 = (fields: PGN_126993Fields, dst:number=255) : PGN_126993 => {
  return {
    ...PGN_126993Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 126996
  *
  * Description: Product Information
  *
  * Explanation: Provides product information onto the network that could be important for determining quality of data coming from this product.
  *
  * @category PGN_126996
 */
export interface PGN_126996 extends PGN {
 fields: PGN_126996Fields
}

/**
 * @category PGN_126996
 */
export interface PGN_126996Fields {
  nmea2000Version?: N2K_Number
  productCode?: N2K_Number
  modelId?: N2K_StringFix
  softwareVersionCode?: N2K_StringFix
  modelVersion?: N2K_StringFix
  modelSerialCode?: N2K_StringFix
  certificationLevel?: enums.CertificationLevel|number
  loadEquivalency?: N2K_Number
}

/**
 * @category PGN_126996
 */
export const PGN_126996Defaults = {
  pgn: 126996,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_126996
 */
export const newPGN_126996 = (fields: PGN_126996Fields, dst:number=255) : PGN_126996 => {
  return {
    ...PGN_126996Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 126998
  *
  * Description: Configuration Information
  *
  * Explanation: Free-form alphanumeric fields describing the installation (e.g., starboard engine room location) of the device and installation notes (e.g., calibration data).
  *
  * @category PGN_126998
 */
export interface PGN_126998 extends PGN {
 fields: PGN_126998Fields
}

/**
 * @category PGN_126998
 */
export interface PGN_126998Fields {
  installationDescription1?: N2K_StringLau
  installationDescription2?: N2K_StringLau
  manufacturerInformation?: N2K_StringLau
}

/**
 * @category PGN_126998
 */
export const PGN_126998Defaults = {
  pgn: 126998,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_126998
 */
export const newPGN_126998 = (fields: PGN_126998Fields, dst:number=255) : PGN_126998 => {
  return {
    ...PGN_126998Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127233
  *
  * Description: Man Overboard Notification
  *
  * Explanation: The MOB PGN is intended to provide notification from a MOB monitoring system. The included position information may be that of the vessel or the MOB device itself as identified in field 'X', position source. Additional information may include the current state of the MOB device, time of activation, and MOB device battery status.
This PGN may be used to set a MOB waypoint, or to initiate an alert process.
This PGN may be used to command or register a MOB device emitter Ids or other applicable fields in the message with an MOB System or other equipment. If the fields in this PGN are configured over the network, the Command Group Function (PGN 126208) shall be used.
Queries for this PGN shall be requested using either the ISO Request (PGN 059904) or the NMEA Request Group Function (PGN 126208).
A device receiving an ISO (PGN 059904) for this PGN (127233), shall respond by providing as many of these PGNs (127233) as necessary for every MOB Emitter ID that has associated data fields.
If a Request Group Function (PGN 126208) requesting this PGN (127233) is received, the receiving device shall respond in the following manner:
* If no requested fields have been included with the Request Group Function then the response is to return one or more PGNs, just like responding to the ISO Request (PGN 055904) described above.
* If the Request Group Function (PGN 126208) includes the MOB Emitter ID field or MOB Status field, then the response shall be filtered by these fields contained within this request resulting in one or more PGN (127233) responses.
If the MOB Emitter ID requested is not considered a valid MOB Emitter ID by the receiving device, then the appropriate response would be the Acknowledge Group Function (PGN 126208), containing the error state for PGN error code (Field 3) of '0x3 = Access denied.' And the requested MOB Emitter ID field parameter error code (Field 6) of '0x3 = Requested or command parameter out-of- range;'.
The Default update rate of this PGN is autonomous, as it is dependant upon notification rates of MOB devices.
  *
  * @category PGN_127233
 */
export interface PGN_127233 extends PGN {
 fields: PGN_127233Fields
}

/**
 * @category PGN_127233
 */
export interface PGN_127233Fields {
  sid?: N2K_Number
  mobEmitterId?: N2K_Number
  manOverboardStatus?: enums.MobStatus|number
  reserved?: number
  activationTime?: N2K_Time
  positionSource?: enums.MobPositionSource|number
  reserved7?: number
  positionDate?: N2K_Date
  positionTime?: N2K_Time
  latitude?: N2K_Number
  longitude?: N2K_Number
  cogReference?: enums.DirectionReference|number
  reserved13?: number
  cog?: N2K_Number
  sog?: N2K_Number
  mmsiOfVesselOfOrigin: N2K_Mmsi
  mobEmitterBatteryLowStatus?: enums.LowBattery|number
  reserved18?: number
}

/**
 * @category PGN_127233
 */
export const PGN_127233Defaults = {
  pgn: 127233,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127233
 */
export const newPGN_127233 = (fields: PGN_127233Fields, dst:number=255) : PGN_127233 => {
  return {
    ...PGN_127233Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127237
  *
  * Description: Heading/Track control
  *
  * @category PGN_127237
 */
export interface PGN_127237 extends PGN {
 fields: PGN_127237Fields
}

/**
 * @category PGN_127237
 */
export interface PGN_127237Fields {
  rudderLimitExceeded?: enums.YesNo|number
  offHeadingLimitExceeded?: enums.YesNo|number
  offTrackLimitExceeded?: enums.YesNo|number
  override?: enums.YesNo|number
  steeringMode?: enums.SteeringMode|number
  turnMode?: enums.TurnMode|number
  headingReference?: enums.DirectionReference|number
  reserved?: number
  commandedRudderDirection?: enums.DirectionRudder|number
  commandedRudderAngle?: N2K_Number
  headingToSteerCourse?: N2K_Number
  track?: N2K_Number
  rudderLimit?: N2K_Number
  offHeadingLimit?: N2K_Number
  radiusOfTurnOrder?: N2K_Number
  rateOfTurnOrder?: N2K_Number
  offTrackLimit?: N2K_Number
  vesselHeading?: N2K_Number
}

/**
 * @category PGN_127237
 */
export const PGN_127237Defaults = {
  pgn: 127237,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_127237
 */
export const newPGN_127237 = (fields: PGN_127237Fields, dst:number=255) : PGN_127237 => {
  return {
    ...PGN_127237Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127245
  *
  * Description: Rudder
  *
  * @category PGN_127245
 */
export interface PGN_127245 extends PGN {
 fields: PGN_127245Fields
}

/**
 * @category PGN_127245
 */
export interface PGN_127245Fields {
  instance: N2K_Number
  directionOrder?: enums.DirectionRudder|number
  reserved?: number
  angleOrder?: N2K_Number
  position?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_127245
 */
export const PGN_127245Defaults = {
  pgn: 127245,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_127245
 */
export const newPGN_127245 = (fields: PGN_127245Fields, dst:number=255) : PGN_127245 => {
  return {
    ...PGN_127245Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127250
  *
  * Description: Vessel Heading
  *
  * @category PGN_127250
 */
export interface PGN_127250 extends PGN {
 fields: PGN_127250Fields
}

/**
 * @category PGN_127250
 */
export interface PGN_127250Fields {
  sid?: N2K_Number
  heading?: N2K_Number
  deviation?: N2K_Number
  variation?: N2K_Number
  reference?: enums.DirectionReference|number
  reserved?: number
}

/**
 * @category PGN_127250
 */
export const PGN_127250Defaults = {
  pgn: 127250,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_127250
 */
export const newPGN_127250 = (fields: PGN_127250Fields, dst:number=255) : PGN_127250 => {
  return {
    ...PGN_127250Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127251
  *
  * Description: Rate of Turn
  *
  * @category PGN_127251
 */
export interface PGN_127251 extends PGN {
 fields: PGN_127251Fields
}

/**
 * @category PGN_127251
 */
export interface PGN_127251Fields {
  sid?: N2K_Number
  rate?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_127251
 */
export const PGN_127251Defaults = {
  pgn: 127251,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_127251
 */
export const newPGN_127251 = (fields: PGN_127251Fields, dst:number=255) : PGN_127251 => {
  return {
    ...PGN_127251Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127252
  *
  * Description: Heave
  *
  * @category PGN_127252
 */
export interface PGN_127252 extends PGN {
 fields: PGN_127252Fields
}

/**
 * @category PGN_127252
 */
export interface PGN_127252Fields {
  sid?: N2K_Number
  heave?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_127252
 */
export const PGN_127252Defaults = {
  pgn: 127252,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127252
 */
export const newPGN_127252 = (fields: PGN_127252Fields, dst:number=255) : PGN_127252 => {
  return {
    ...PGN_127252Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127257
  *
  * Description: Attitude
  *
  * @category PGN_127257
 */
export interface PGN_127257 extends PGN {
 fields: PGN_127257Fields
}

/**
 * @category PGN_127257
 */
export interface PGN_127257Fields {
  sid?: N2K_Number
  yaw?: N2K_Number
  pitch?: N2K_Number
  roll?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_127257
 */
export const PGN_127257Defaults = {
  pgn: 127257,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127257
 */
export const newPGN_127257 = (fields: PGN_127257Fields, dst:number=255) : PGN_127257 => {
  return {
    ...PGN_127257Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127258
  *
  * Description: Magnetic Variation
  *
  * @category PGN_127258
 */
export interface PGN_127258 extends PGN {
 fields: PGN_127258Fields
}

/**
 * @category PGN_127258
 */
export interface PGN_127258Fields {
  sid?: N2K_Number
  source?: enums.MagneticVariation|number
  reserved?: number
  ageOfService?: N2K_Date
  variation?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_127258
 */
export const PGN_127258Defaults = {
  pgn: 127258,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_127258
 */
export const newPGN_127258 = (fields: PGN_127258Fields, dst:number=255) : PGN_127258 => {
  return {
    ...PGN_127258Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127488
  *
  * Description: Engine Parameters, Rapid Update
  *
  * @category PGN_127488
 */
export interface PGN_127488 extends PGN {
 fields: PGN_127488Fields
}

/**
 * @category PGN_127488
 */
export interface PGN_127488Fields {
  instance: enums.EngineInstance|number
  speed?: N2K_Number
  boostPressure?: N2K_Number
  tiltTrim?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_127488
 */
export const PGN_127488Defaults = {
  pgn: 127488,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_127488
 */
export const newPGN_127488 = (fields: PGN_127488Fields, dst:number=255) : PGN_127488 => {
  return {
    ...PGN_127488Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127489
  *
  * Description: Engine Parameters, Dynamic
  *
  * @category PGN_127489
 */
export interface PGN_127489 extends PGN {
 fields: PGN_127489Fields
}

/**
 * @category PGN_127489
 */
export interface PGN_127489Fields {
  instance: enums.EngineInstance|number
  oilPressure?: N2K_Number
  oilTemperature?: N2K_Number
  temperature?: N2K_Number
  alternatorPotential?: N2K_Number
  fuelRate?: N2K_Number
  totalEngineHours?: N2K_Duration
  coolantPressure?: N2K_Number
  fuelPressure?: N2K_Number
  reserved?: number
  discreteStatus1?: enums.EngineStatus1[]
  discreteStatus2?: enums.EngineStatus2[]
  engineLoad?: N2K_Number
  engineTorque?: N2K_Number
}

/**
 * @category PGN_127489
 */
export const PGN_127489Defaults = {
  pgn: 127489,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_127489
 */
export const newPGN_127489 = (fields: PGN_127489Fields, dst:number=255) : PGN_127489 => {
  return {
    ...PGN_127489Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127490
  *
  * Description: Electric Drive Status, Dynamic
  *
  * Explanation: This PGN is used to report status of Electric Drive Status control and can be used with Command Group Function (PGN Electric propulsion motor status) to command equipment. 
  *
  * @category PGN_127490
 */
export interface PGN_127490 extends PGN {
 fields: PGN_127490Fields
}

/**
 * @category PGN_127490
 */
export interface PGN_127490Fields {
  inverterMotorIdentifier: N2K_Number
  operatingMode?: N2K_Number
  reserved?: number
  motorTemperature?: N2K_Number
  inverterTemperature?: N2K_Number
  coolantTemperature?: N2K_Number
  gearTemperature?: N2K_Number
  shaftTorque?: N2K_Number
}

/**
 * @category PGN_127490
 */
export const PGN_127490Defaults = {
  pgn: 127490,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127490
 */
export const newPGN_127490 = (fields: PGN_127490Fields, dst:number=255) : PGN_127490 => {
  return {
    ...PGN_127490Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127491
  *
  * Description: Electric Energy Storage Status, Dynamic
  *
  * Explanation: This PGN is used to provide electric propulsion motor status and relevant data.
  *
  * @category PGN_127491
 */
export interface PGN_127491 extends PGN {
 fields: PGN_127491Fields
}

/**
 * @category PGN_127491
 */
export interface PGN_127491Fields {
  energyStorageIdentifier: N2K_Number
  stateOfCharge?: N2K_Number
  timeRemaining?: N2K_Duration
  highestCellTemperature?: N2K_Number
  lowestCellTemperature?: N2K_Number
  averageCellTemperature?: N2K_Number
  maxDischargeCurrent?: N2K_Number
  maxChargeCurrent?: N2K_Number
  coolingSystemStatus?: N2K_Number
  heatingSystemStatus?: N2K_Number
}

/**
 * @category PGN_127491
 */
export const PGN_127491Defaults = {
  pgn: 127491,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127491
 */
export const newPGN_127491 = (fields: PGN_127491Fields, dst:number=255) : PGN_127491 => {
  return {
    ...PGN_127491Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127493
  *
  * Description: Transmission Parameters, Dynamic
  *
  * @category PGN_127493
 */
export interface PGN_127493 extends PGN {
 fields: PGN_127493Fields
}

/**
 * @category PGN_127493
 */
export interface PGN_127493Fields {
  instance: enums.EngineInstance|number
  transmissionGear?: enums.GearStatus|number
  reserved?: number
  oilPressure?: N2K_Number
  oilTemperature?: N2K_Number
  discreteStatus1?: N2K_Number
  reserved7?: number
}

/**
 * @category PGN_127493
 */
export const PGN_127493Defaults = {
  pgn: 127493,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_127493
 */
export const newPGN_127493 = (fields: PGN_127493Fields, dst:number=255) : PGN_127493 => {
  return {
    ...PGN_127493Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127494
  *
  * Description: Electric Drive Information
  *
  * Explanation: This PGN is used to provide information about electric motor specifications and ratings.
  *
  * @category PGN_127494
 */
export interface PGN_127494 extends PGN {
 fields: PGN_127494Fields
}

/**
 * @category PGN_127494
 */
export interface PGN_127494Fields {
  inverterMotorIdentifier: N2K_Number
  motorType?: N2K_Number
  reserved?: number
  motorVoltageRating?: N2K_Number
  maximumContinuousMotorPower?: N2K_Number
  maximumBoostMotorPower?: N2K_Number
  maximumMotorTemperatureRating?: N2K_Number
  ratedMotorSpeed?: N2K_Number
  maximumControllerTemperatureRating?: N2K_Number
  motorShaftTorqueRating?: N2K_Number
  motorDcVoltageDeratingThreshold?: N2K_Number
  motorDcVoltageCutOffThreshold?: N2K_Number
  driveMotorHours?: N2K_Duration
}

/**
 * @category PGN_127494
 */
export const PGN_127494Defaults = {
  pgn: 127494,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127494
 */
export const newPGN_127494 = (fields: PGN_127494Fields, dst:number=255) : PGN_127494 => {
  return {
    ...PGN_127494Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127495
  *
  * Description: Electric Energy Storage Information
  *
  * Explanation: This PGN is used to provide the status on power storage sources such as batteries.This PGN is new in v3.0 and has not been observed yet; field lengths and precisions are guesses.
  *
  * @category PGN_127495
 */
export interface PGN_127495 extends PGN {
 fields: PGN_127495Fields
}

/**
 * @category PGN_127495
 */
export interface PGN_127495Fields {
  energyStorageIdentifier: N2K_Number
  motorType?: N2K_Number
  reserved?: number
  storageChemistryConversion?: N2K_Number
  maximumTemperatureDerating?: N2K_Number
  maximumTemperatureShutOff?: N2K_Number
  minimumTemperatureDerating?: N2K_Number
  minimumTemperatureShutOff?: N2K_Number
  usableBatteryEnergy?: N2K_Number
  stateOfHealth?: N2K_Number
  batteryCycleCounter?: N2K_Number
  batteryFullStatus?: N2K_Number
  batteryEmptyStatus?: N2K_Number
  reserved14?: number
  maximumChargeSoc?: N2K_Number
  minimumChargeSoc?: N2K_Number
}

/**
 * @category PGN_127495
 */
export const PGN_127495Defaults = {
  pgn: 127495,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127495
 */
export const newPGN_127495 = (fields: PGN_127495Fields, dst:number=255) : PGN_127495 => {
  return {
    ...PGN_127495Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127496
  *
  * Description: Trip Parameters, Vessel
  *
  * @category PGN_127496
 */
export interface PGN_127496 extends PGN {
 fields: PGN_127496Fields
}

/**
 * @category PGN_127496
 */
export interface PGN_127496Fields {
  timeToEmpty?: N2K_Duration
  distanceToEmpty?: N2K_Number
  estimatedFuelRemaining?: N2K_Number
  tripRunTime?: N2K_Duration
}

/**
 * @category PGN_127496
 */
export const PGN_127496Defaults = {
  pgn: 127496,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_127496
 */
export const newPGN_127496 = (fields: PGN_127496Fields, dst:number=255) : PGN_127496 => {
  return {
    ...PGN_127496Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127497
  *
  * Description: Trip Parameters, Engine
  *
  * @category PGN_127497
 */
export interface PGN_127497 extends PGN {
 fields: PGN_127497Fields
}

/**
 * @category PGN_127497
 */
export interface PGN_127497Fields {
  instance: enums.EngineInstance|number
  tripFuelUsed?: N2K_Number
  fuelRateAverage?: N2K_Number
  fuelRateEconomy?: N2K_Number
  instantaneousFuelEconomy?: N2K_Number
}

/**
 * @category PGN_127497
 */
export const PGN_127497Defaults = {
  pgn: 127497,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_127497
 */
export const newPGN_127497 = (fields: PGN_127497Fields, dst:number=255) : PGN_127497 => {
  return {
    ...PGN_127497Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127498
  *
  * Description: Engine Parameters, Static
  *
  * @category PGN_127498
 */
export interface PGN_127498 extends PGN {
 fields: PGN_127498Fields
}

/**
 * @category PGN_127498
 */
export interface PGN_127498Fields {
  instance: enums.EngineInstance|number
  ratedEngineSpeed?: N2K_Number
  vin?: N2K_StringLau
  softwareId?: N2K_StringLau
}

/**
 * @category PGN_127498
 */
export const PGN_127498Defaults = {
  pgn: 127498,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_127498
 */
export const newPGN_127498 = (fields: PGN_127498Fields, dst:number=255) : PGN_127498 => {
  return {
    ...PGN_127498Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127500
  *
  * Description: Load Controller Connection State/Control
  *
  * @category PGN_127500
 */
export interface PGN_127500 extends PGN {
 fields: PGN_127500Fields
}

/**
 * @category PGN_127500
 */
export interface PGN_127500Fields {
  sequenceId?: N2K_Number
  connectionId?: N2K_Number
  state?: N2K_Number
  status?: N2K_Number
  operationalStatusControl?: N2K_Number
  pwmDutyCycle?: N2K_Number
  timeon?: N2K_Number
  timeoff?: N2K_Number
}

/**
 * @category PGN_127500
 */
export const PGN_127500Defaults = {
  pgn: 127500,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127500
 */
export const newPGN_127500 = (fields: PGN_127500Fields, dst:number=255) : PGN_127500 => {
  return {
    ...PGN_127500Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127501
  *
  * Description: Binary Switch Bank Status
  *
  * @category PGN_127501
 */
export interface PGN_127501 extends PGN {
 fields: PGN_127501Fields
}

/**
 * @category PGN_127501
 */
export interface PGN_127501Fields {
  instance: N2K_Number
  indicator1?: enums.OffOn|number
  indicator2?: enums.OffOn|number
  indicator3?: enums.OffOn|number
  indicator4?: enums.OffOn|number
  indicator5?: enums.OffOn|number
  indicator6?: enums.OffOn|number
  indicator7?: enums.OffOn|number
  indicator8?: enums.OffOn|number
  indicator9?: enums.OffOn|number
  indicator10?: enums.OffOn|number
  indicator11?: enums.OffOn|number
  indicator12?: enums.OffOn|number
  indicator13?: enums.OffOn|number
  indicator14?: enums.OffOn|number
  indicator15?: enums.OffOn|number
  indicator16?: enums.OffOn|number
  indicator17?: enums.OffOn|number
  indicator18?: enums.OffOn|number
  indicator19?: enums.OffOn|number
  indicator20?: enums.OffOn|number
  indicator21?: enums.OffOn|number
  indicator22?: enums.OffOn|number
  indicator23?: enums.OffOn|number
  indicator24?: enums.OffOn|number
  indicator25?: enums.OffOn|number
  indicator26?: enums.OffOn|number
  indicator27?: enums.OffOn|number
  indicator28?: enums.OffOn|number
}

/**
 * @category PGN_127501
 */
export const PGN_127501Defaults = {
  pgn: 127501,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127501
 */
export const newPGN_127501 = (fields: PGN_127501Fields, dst:number=255) : PGN_127501 => {
  return {
    ...PGN_127501Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127502
  *
  * Description: Switch Bank Control
  *
  * @category PGN_127502
 */
export interface PGN_127502 extends PGN {
 fields: PGN_127502Fields
}

/**
 * @category PGN_127502
 */
export interface PGN_127502Fields {
  instance: N2K_Number
  switch1?: enums.OffOnControl|number
  switch2?: enums.OffOnControl|number
  switch3?: enums.OffOnControl|number
  switch4?: enums.OffOnControl|number
  switch5?: enums.OffOnControl|number
  switch6?: enums.OffOnControl|number
  switch7?: enums.OffOnControl|number
  switch8?: enums.OffOnControl|number
  switch9?: enums.OffOnControl|number
  switch10?: enums.OffOnControl|number
  switch11?: enums.OffOnControl|number
  switch12?: enums.OffOnControl|number
  switch13?: enums.OffOnControl|number
  switch14?: enums.OffOnControl|number
  switch15?: enums.OffOnControl|number
  switch16?: enums.OffOnControl|number
  switch17?: enums.OffOnControl|number
  switch18?: enums.OffOnControl|number
  switch19?: enums.OffOnControl|number
  switch20?: enums.OffOnControl|number
  switch21?: enums.OffOnControl|number
  switch22?: enums.OffOnControl|number
  switch23?: enums.OffOnControl|number
  switch24?: enums.OffOnControl|number
  switch25?: enums.OffOnControl|number
  switch26?: enums.OffOnControl|number
  switch27?: enums.OffOnControl|number
  switch28?: enums.OffOnControl|number
}

/**
 * @category PGN_127502
 */
export const PGN_127502Defaults = {
  pgn: 127502,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127502
 */
export const newPGN_127502 = (fields: PGN_127502Fields, dst:number=255) : PGN_127502 => {
  return {
    ...PGN_127502Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127503
  *
  * Description: AC Input Status
  *
  * @category PGN_127503
 */
export interface PGN_127503 extends PGN {
 fields: PGN_127503Fields
}

/**
 * @category PGN_127503
 */
export interface PGN_127503Fields {
  instance: N2K_Number
  numberOfLines?: N2K_Number
  list: {
    line?: enums.AcLine|number
    acceptability?: enums.Acceptability|number
    reserved?: number
    voltage?: N2K_Number
    current?: N2K_Number
    frequency?: N2K_Number
    breakerSize?: N2K_Number
    realPower?: N2K_Number
    reactivePower?: N2K_Number
    powerFactor?: N2K_Number
  }[]
}

/**
 * @category PGN_127503
 */
export const PGN_127503Defaults = {
  pgn: 127503,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_127503
 */
export const newPGN_127503 = (fields: PGN_127503Fields, dst:number=255) : PGN_127503 => {
  return {
    ...PGN_127503Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127504
  *
  * Description: AC Output Status
  *
  * @category PGN_127504
 */
export interface PGN_127504 extends PGN {
 fields: PGN_127504Fields
}

/**
 * @category PGN_127504
 */
export interface PGN_127504Fields {
  instance: N2K_Number
  numberOfLines?: N2K_Number
  list: {
    line?: enums.Line|number
    waveform?: enums.Waveform|number
    reserved?: number
    voltage?: N2K_Number
    current?: N2K_Number
    frequency?: N2K_Number
    breakerSize?: N2K_Number
    realPower?: N2K_Number
    reactivePower?: N2K_Number
    powerFactor?: N2K_Number
  }[]
}

/**
 * @category PGN_127504
 */
export const PGN_127504Defaults = {
  pgn: 127504,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_127504
 */
export const newPGN_127504 = (fields: PGN_127504Fields, dst:number=255) : PGN_127504 => {
  return {
    ...PGN_127504Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127505
  *
  * Description: Fluid Level
  *
  * @category PGN_127505
 */
export interface PGN_127505 extends PGN {
 fields: PGN_127505Fields
}

/**
 * @category PGN_127505
 */
export interface PGN_127505Fields {
  instance: N2K_Number
  type?: enums.TankType|number
  level?: N2K_Number
  capacity?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_127505
 */
export const PGN_127505Defaults = {
  pgn: 127505,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_127505
 */
export const newPGN_127505 = (fields: PGN_127505Fields, dst:number=255) : PGN_127505 => {
  return {
    ...PGN_127505Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127506
  *
  * Description: DC Detailed Status
  *
  * @category PGN_127506
 */
export interface PGN_127506 extends PGN {
 fields: PGN_127506Fields
}

/**
 * @category PGN_127506
 */
export interface PGN_127506Fields {
  sid?: N2K_Number
  instance: N2K_Number
  dcType: enums.DcSource|number
  stateOfCharge?: N2K_Number
  stateOfHealth?: N2K_Number
  timeRemaining?: N2K_Duration
  rippleVoltage?: N2K_Number
  remainingCapacity?: N2K_Number
}

/**
 * @category PGN_127506
 */
export const PGN_127506Defaults = {
  pgn: 127506,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_127506
 */
export const newPGN_127506 = (fields: PGN_127506Fields, dst:number=255) : PGN_127506 => {
  return {
    ...PGN_127506Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127507
  *
  * Description: Charger Status
  *
  * @category PGN_127507
 */
export interface PGN_127507 extends PGN {
 fields: PGN_127507Fields
}

/**
 * @category PGN_127507
 */
export interface PGN_127507Fields {
  instance: N2K_Number
  batteryInstance: N2K_Number
  operatingState?: enums.ChargerState|number
  chargeMode?: enums.ChargerMode|number
  enabled?: enums.OffOn|number
  equalizationPending?: enums.OffOn|number
  reserved?: number
  equalizationTimeRemaining?: N2K_Duration
}

/**
 * @category PGN_127507
 */
export const PGN_127507Defaults = {
  pgn: 127507,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_127507
 */
export const newPGN_127507 = (fields: PGN_127507Fields, dst:number=255) : PGN_127507 => {
  return {
    ...PGN_127507Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127508
  *
  * Description: Battery Status
  *
  * @category PGN_127508
 */
export interface PGN_127508 extends PGN {
 fields: PGN_127508Fields
}

/**
 * @category PGN_127508
 */
export interface PGN_127508Fields {
  instance: N2K_Number
  voltage?: N2K_Number
  current?: N2K_Number
  temperature?: N2K_Number
  sid?: N2K_Number
}

/**
 * @category PGN_127508
 */
export const PGN_127508Defaults = {
  pgn: 127508,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_127508
 */
export const newPGN_127508 = (fields: PGN_127508Fields, dst:number=255) : PGN_127508 => {
  return {
    ...PGN_127508Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127509
  *
  * Description: Inverter Status
  *
  * Explanation: The NMEA wrote in the link in the URL that this PGN is obsolete and superceded by PGN 127751, but that PGN reference is obviously incorrect. They probably meant PGN 127511. The other interesting thing is that this PGN is only four bytes long but still referenced as a Fast PGN, which matches various sources; see github issue #428.
  *
  * @category PGN_127509
 */
export interface PGN_127509 extends PGN {
 fields: PGN_127509Fields
}

/**
 * @category PGN_127509
 */
export interface PGN_127509Fields {
  instance: N2K_Number
  acInstance: N2K_Number
  dcInstance: N2K_Number
  operatingState?: enums.InverterState|number
  inverterEnable?: enums.OffOn|number
  reserved?: number
}

/**
 * @category PGN_127509
 */
export const PGN_127509Defaults = {
  pgn: 127509,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_127509
 */
export const newPGN_127509 = (fields: PGN_127509Fields, dst:number=255) : PGN_127509 => {
  return {
    ...PGN_127509Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127510
  *
  * Description: Charger Configuration Status
  *
  * @category PGN_127510
 */
export interface PGN_127510 extends PGN {
 fields: PGN_127510Fields
}

/**
 * @category PGN_127510
 */
export interface PGN_127510Fields {
  instance: N2K_Number
  batteryInstance: N2K_Number
  chargerEnableDisable?: enums.OffOn|number
  reserved?: number
  chargeCurrentLimit?: N2K_Number
  chargingAlgorithm?: enums.ChargingAlgorithm|number
  chargerMode?: enums.ChargerMode|number
  estimatedTemperature?: enums.DeviceTempState|number
  equalizeOneTimeEnableDisable?: enums.OffOn|number
  overChargeEnableDisable?: enums.OffOn|number
  equalizeTime?: N2K_Duration
}

/**
 * @category PGN_127510
 */
export const PGN_127510Defaults = {
  pgn: 127510,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_127510
 */
export const newPGN_127510 = (fields: PGN_127510Fields, dst:number=255) : PGN_127510 => {
  return {
    ...PGN_127510Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127511
  *
  * Description: Inverter Configuration Status
  *
  * @category PGN_127511
 */
export interface PGN_127511 extends PGN {
 fields: PGN_127511Fields
}

/**
 * @category PGN_127511
 */
export interface PGN_127511Fields {
  instance: N2K_Number
  acInstance: N2K_Number
  dcInstance: N2K_Number
  inverterEnableDisable?: enums.OffOn|number
  inverterMode?: enums.InverterMode|number
  loadSenseEnableDisable?: enums.OffOn|number
  loadSensePowerThreshold?: N2K_Number
  loadSenseInterval?: N2K_Duration
}

/**
 * @category PGN_127511
 */
export const PGN_127511Defaults = {
  pgn: 127511,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_127511
 */
export const newPGN_127511 = (fields: PGN_127511Fields, dst:number=255) : PGN_127511 => {
  return {
    ...PGN_127511Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127512
  *
  * Description: AGS Configuration Status
  *
  * @category PGN_127512
 */
export interface PGN_127512 extends PGN {
 fields: PGN_127512Fields
}

/**
 * @category PGN_127512
 */
export interface PGN_127512Fields {
  instance: N2K_Number
  generatorInstance: N2K_Number
  agsMode?: enums.AgsMode|number
  reserved?: number
}

/**
 * @category PGN_127512
 */
export const PGN_127512Defaults = {
  pgn: 127512,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_127512
 */
export const newPGN_127512 = (fields: PGN_127512Fields, dst:number=255) : PGN_127512 => {
  return {
    ...PGN_127512Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127513
  *
  * Description: Battery Configuration Status
  *
  * @category PGN_127513
 */
export interface PGN_127513 extends PGN {
 fields: PGN_127513Fields
}

/**
 * @category PGN_127513
 */
export interface PGN_127513Fields {
  instance: N2K_Number
  batteryType?: enums.BatteryType|number
  supportsEqualization?: enums.YesNo|number
  reserved?: number
  nominalVoltage?: enums.BatteryVoltage|number
  chemistry?: enums.BatteryChemistry|number
  capacity?: N2K_Number
  temperatureCoefficient?: N2K_Number
  peukertExponent?: N2K_Number
  chargeEfficiencyFactor?: N2K_Number
}

/**
 * @category PGN_127513
 */
export const PGN_127513Defaults = {
  pgn: 127513,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_127513
 */
export const newPGN_127513 = (fields: PGN_127513Fields, dst:number=255) : PGN_127513 => {
  return {
    ...PGN_127513Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127514
  *
  * Description: AGS Status
  *
  * @category PGN_127514
 */
export interface PGN_127514 extends PGN {
 fields: PGN_127514Fields
}

/**
 * @category PGN_127514
 */
export interface PGN_127514Fields {
  instance: N2K_Number
  generatorInstance: N2K_Number
  agsOperatingState?: enums.AgsOperatingState|number
  generatorState?: enums.AgsGeneratingState|number
  generatorOnReason?: enums.AgsOnReason|number
  generatorOffReason?: enums.AgsOffReason|number
}

/**
 * @category PGN_127514
 */
export const PGN_127514Defaults = {
  pgn: 127514,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_127514
 */
export const newPGN_127514 = (fields: PGN_127514Fields, dst:number=255) : PGN_127514 => {
  return {
    ...PGN_127514Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127744
  *
  * Description: AC Power / Current - Phase A
  *
  * @category PGN_127744
 */
export interface PGN_127744 extends PGN {
 fields: PGN_127744Fields
}

/**
 * @category PGN_127744
 */
export interface PGN_127744Fields {
  sid?: N2K_Number
  connectionNumber?: N2K_Number
  acRmsCurrent?: N2K_Number
  power?: N2K_Number
}

/**
 * @category PGN_127744
 */
export const PGN_127744Defaults = {
  pgn: 127744,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127744
 */
export const newPGN_127744 = (fields: PGN_127744Fields, dst:number=255) : PGN_127744 => {
  return {
    ...PGN_127744Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127745
  *
  * Description: AC Power / Current - Phase B
  *
  * @category PGN_127745
 */
export interface PGN_127745 extends PGN {
 fields: PGN_127745Fields
}

/**
 * @category PGN_127745
 */
export interface PGN_127745Fields {
  sid?: N2K_Number
  connectionNumber?: N2K_Number
  acRmsCurrent?: N2K_Number
  power?: N2K_Number
}

/**
 * @category PGN_127745
 */
export const PGN_127745Defaults = {
  pgn: 127745,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127745
 */
export const newPGN_127745 = (fields: PGN_127745Fields, dst:number=255) : PGN_127745 => {
  return {
    ...PGN_127745Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127746
  *
  * Description: AC Power / Current - Phase C
  *
  * @category PGN_127746
 */
export interface PGN_127746 extends PGN {
 fields: PGN_127746Fields
}

/**
 * @category PGN_127746
 */
export interface PGN_127746Fields {
  sid?: N2K_Number
  connectionNumber?: N2K_Number
  acRmsCurrent?: N2K_Number
  power?: N2K_Number
}

/**
 * @category PGN_127746
 */
export const PGN_127746Defaults = {
  pgn: 127746,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127746
 */
export const newPGN_127746 = (fields: PGN_127746Fields, dst:number=255) : PGN_127746 => {
  return {
    ...PGN_127746Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127747
  *
  * Description: AC Voltage / Frequency - Phase A
  *
  * @category PGN_127747
 */
export interface PGN_127747 extends PGN {
 fields: PGN_127747Fields
}

/**
 * @category PGN_127747
 */
export interface PGN_127747Fields {
  sid?: N2K_Number
  connectionNumber?: N2K_Number
  acVoltageLineToNeutral?: N2K_Number
  acVoltageLineToLine?: N2K_Number
  frequency?: N2K_Number
}

/**
 * @category PGN_127747
 */
export const PGN_127747Defaults = {
  pgn: 127747,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127747
 */
export const newPGN_127747 = (fields: PGN_127747Fields, dst:number=255) : PGN_127747 => {
  return {
    ...PGN_127747Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127748
  *
  * Description: AC Voltage / Frequency - Phase B
  *
  * @category PGN_127748
 */
export interface PGN_127748 extends PGN {
 fields: PGN_127748Fields
}

/**
 * @category PGN_127748
 */
export interface PGN_127748Fields {
  sid?: N2K_Number
  connectionNumber?: N2K_Number
  acVoltageLineToNeutral?: N2K_Number
  acVoltageLineToLine?: N2K_Number
  frequency?: N2K_Number
}

/**
 * @category PGN_127748
 */
export const PGN_127748Defaults = {
  pgn: 127748,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127748
 */
export const newPGN_127748 = (fields: PGN_127748Fields, dst:number=255) : PGN_127748 => {
  return {
    ...PGN_127748Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127749
  *
  * Description: AC Voltage / Frequency - Phase C
  *
  * @category PGN_127749
 */
export interface PGN_127749 extends PGN {
 fields: PGN_127749Fields
}

/**
 * @category PGN_127749
 */
export interface PGN_127749Fields {
  sid?: N2K_Number
  connectionNumber?: N2K_Number
  acVoltageLineToNeutral?: N2K_Number
  acVoltageLineToLine?: N2K_Number
  frequency?: N2K_Number
}

/**
 * @category PGN_127749
 */
export const PGN_127749Defaults = {
  pgn: 127749,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127749
 */
export const newPGN_127749 = (fields: PGN_127749Fields, dst:number=255) : PGN_127749 => {
  return {
    ...PGN_127749Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127750
  *
  * Description: Converter Status
  *
  * @category PGN_127750
 */
export interface PGN_127750 extends PGN {
 fields: PGN_127750Fields
}

/**
 * @category PGN_127750
 */
export interface PGN_127750Fields {
  sid?: N2K_Binary
  connectionNumber?: N2K_Number
  operatingState?: enums.ConverterState|number
  temperatureState?: enums.GoodWarningError|number
  overloadState?: enums.GoodWarningError|number
  lowDcVoltageState?: enums.GoodWarningError|number
  rippleState?: enums.GoodWarningError|number
  reserved?: number
}

/**
 * @category PGN_127750
 */
export const PGN_127750Defaults = {
  pgn: 127750,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127750
 */
export const newPGN_127750 = (fields: PGN_127750Fields, dst:number=255) : PGN_127750 => {
  return {
    ...PGN_127750Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 127751
  *
  * Description: DC Voltage/Current
  *
  * @category PGN_127751
 */
export interface PGN_127751 extends PGN {
 fields: PGN_127751Fields
}

/**
 * @category PGN_127751
 */
export interface PGN_127751Fields {
  sid?: N2K_Binary
  connectionNumber?: N2K_Number
  dcVoltage?: N2K_Number
  dcCurrent?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_127751
 */
export const PGN_127751Defaults = {
  pgn: 127751,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_127751
 */
export const newPGN_127751 = (fields: PGN_127751Fields, dst:number=255) : PGN_127751 => {
  return {
    ...PGN_127751Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128000
  *
  * Description: Leeway Angle
  *
  * Explanation: This PGN provides the Nautical Leeway Angle. Nautical leeway angle is defined as the angle between the direction a vessel is heading (pointing) and the direction it is actually travelling (tracking thru the water). It is commonly provided by dual-axis speed sensors.
  *
  * @category PGN_128000
 */
export interface PGN_128000 extends PGN {
 fields: PGN_128000Fields
}

/**
 * @category PGN_128000
 */
export interface PGN_128000Fields {
  sid?: N2K_Number
  leewayAngle?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_128000
 */
export const PGN_128000Defaults = {
  pgn: 128000,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128000
 */
export const newPGN_128000 = (fields: PGN_128000Fields, dst:number=255) : PGN_128000 => {
  return {
    ...PGN_128000Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128001
  *
  * Description: Vessel Acceleration
  *
  * Explanation: The Vessel Acceleration PGN transmits the acceleration of the vessel in all three axes, ahead/astern, port/starboard, and up/down.
  *
  * @category PGN_128001
 */
export interface PGN_128001 extends PGN {
 fields: PGN_128001Fields
}

/**
 * @category PGN_128001
 */
export interface PGN_128001Fields {
  sid?: N2K_Number
  longitudinalAcceleration?: N2K_Number
  transverseAcceleration?: N2K_Number
  verticalAcceleration?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_128001
 */
export const PGN_128001Defaults = {
  pgn: 128001,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128001
 */
export const newPGN_128001 = (fields: PGN_128001Fields, dst:number=255) : PGN_128001 => {
  return {
    ...PGN_128001Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128002
  *
  * Description: Electric Drive Status, Rapid Update
  *
  * Explanation: This PGN is used to provide the Electric Propulsion Drive System Status.
  *
  * @category PGN_128002
 */
export interface PGN_128002 extends PGN {
 fields: PGN_128002Fields
}

/**
 * @category PGN_128002
 */
export interface PGN_128002Fields {
  inverterMotorController?: N2K_Number
  activeMotorMode?: N2K_Number
  brakeMode?: N2K_Number
  reserved?: number
  rotationalShaftSpeed?: N2K_Number
  motorDcVoltage?: N2K_Number
  motorDcCurrent?: N2K_Number
}

/**
 * @category PGN_128002
 */
export const PGN_128002Defaults = {
  pgn: 128002,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128002
 */
export const newPGN_128002 = (fields: PGN_128002Fields, dst:number=255) : PGN_128002 => {
  return {
    ...PGN_128002Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128003
  *
  * Description: Electric Energy Storage Status, Rapid Update
  *
  * Explanation: Electric Energy Storage Status message provides important energy storage information global at a rapid update rate.
  *
  * @category PGN_128003
 */
export interface PGN_128003 extends PGN {
 fields: PGN_128003Fields
}

/**
 * @category PGN_128003
 */
export interface PGN_128003Fields {
  energyStorageIdentifier?: N2K_Number
  batteryStatus?: N2K_Number
  isolationStatus?: N2K_Number
  batteryError?: N2K_Number
  batteryVoltage?: N2K_Number
  batteryCurrent?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_128003
 */
export const PGN_128003Defaults = {
  pgn: 128003,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128003
 */
export const newPGN_128003 = (fields: PGN_128003Fields, dst:number=255) : PGN_128003 => {
  return {
    ...PGN_128003Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128006
  *
  * Description: Thruster Control Status
  *
  * @category PGN_128006
 */
export interface PGN_128006 extends PGN {
 fields: PGN_128006Fields
}

/**
 * @category PGN_128006
 */
export interface PGN_128006Fields {
  sid?: N2K_Number
  identifier?: N2K_Number
  directionControl?: enums.ThrusterDirectionControl|number
  powerEnabled?: enums.OffOn|number
  retractControl?: enums.ThrusterRetractControl|number
  speedControl?: N2K_Number
  controlEvents?: enums.ThrusterControlEvents[]
  commandTimeout?: N2K_Duration
  azimuthControl?: N2K_Number
}

/**
 * @category PGN_128006
 */
export const PGN_128006Defaults = {
  pgn: 128006,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128006
 */
export const newPGN_128006 = (fields: PGN_128006Fields, dst:number=255) : PGN_128006 => {
  return {
    ...PGN_128006Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128007
  *
  * Description: Thruster Information
  *
  * @category PGN_128007
 */
export interface PGN_128007 extends PGN {
 fields: PGN_128007Fields
}

/**
 * @category PGN_128007
 */
export interface PGN_128007Fields {
  identifier?: N2K_Number
  motorType?: enums.ThrusterMotorType|number
  reserved?: number
  powerRating?: N2K_Number
  maximumTemperatureRating?: N2K_Number
  maximumRotationalSpeed?: N2K_Number
}

/**
 * @category PGN_128007
 */
export const PGN_128007Defaults = {
  pgn: 128007,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128007
 */
export const newPGN_128007 = (fields: PGN_128007Fields, dst:number=255) : PGN_128007 => {
  return {
    ...PGN_128007Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128008
  *
  * Description: Thruster Motor Status
  *
  * @category PGN_128008
 */
export interface PGN_128008 extends PGN {
 fields: PGN_128008Fields
}

/**
 * @category PGN_128008
 */
export interface PGN_128008Fields {
  sid?: N2K_Number
  identifier?: N2K_Number
  motorEvents?: enums.ThrusterMotorEvents[]
  current?: N2K_Number
  temperature?: N2K_Number
  operatingTime?: N2K_Duration
}

/**
 * @category PGN_128008
 */
export const PGN_128008Defaults = {
  pgn: 128008,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128008
 */
export const newPGN_128008 = (fields: PGN_128008Fields, dst:number=255) : PGN_128008 => {
  return {
    ...PGN_128008Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128259
  *
  * Description: Speed
  *
  * @category PGN_128259
 */
export interface PGN_128259 extends PGN {
 fields: PGN_128259Fields
}

/**
 * @category PGN_128259
 */
export interface PGN_128259Fields {
  sid?: N2K_Number
  speedWaterReferenced?: N2K_Number
  speedGroundReferenced?: N2K_Number
  speedWaterReferencedType?: enums.WaterReference|number
  speedDirection?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_128259
 */
export const PGN_128259Defaults = {
  pgn: 128259,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_128259
 */
export const newPGN_128259 = (fields: PGN_128259Fields, dst:number=255) : PGN_128259 => {
  return {
    ...PGN_128259Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128267
  *
  * Description: Water Depth
  *
  * @category PGN_128267
 */
export interface PGN_128267 extends PGN {
 fields: PGN_128267Fields
}

/**
 * @category PGN_128267
 */
export interface PGN_128267Fields {
  sid?: N2K_Number
  depth?: N2K_Number
  offset?: N2K_Number
  range?: N2K_Number
}

/**
 * @category PGN_128267
 */
export const PGN_128267Defaults = {
  pgn: 128267,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128267
 */
export const newPGN_128267 = (fields: PGN_128267Fields, dst:number=255) : PGN_128267 => {
  return {
    ...PGN_128267Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128275
  *
  * Description: Distance Log
  *
  * @category PGN_128275
 */
export interface PGN_128275 extends PGN {
 fields: PGN_128275Fields
}

/**
 * @category PGN_128275
 */
export interface PGN_128275Fields {
  date?: N2K_Date
  time?: N2K_Time
  log?: N2K_Number
  tripLog?: N2K_Number
}

/**
 * @category PGN_128275
 */
export const PGN_128275Defaults = {
  pgn: 128275,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_128275
 */
export const newPGN_128275 = (fields: PGN_128275Fields, dst:number=255) : PGN_128275 => {
  return {
    ...PGN_128275Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128520
  *
  * Description: Tracked Target Data
  *
  * @category PGN_128520
 */
export interface PGN_128520 extends PGN {
 fields: PGN_128520Fields
}

/**
 * @category PGN_128520
 */
export interface PGN_128520Fields {
  sid?: N2K_Number
  targetId?: N2K_Number
  trackStatus?: enums.Tracking[]
  reportedTarget: enums.YesNo|number
  targetAcquisition: enums.TargetAcquisition|number
  bearingReference?: enums.DirectionReference|number
  reserved?: number
  bearing?: N2K_Number
  distance?: N2K_Number
  course?: N2K_Number
  speed?: N2K_Number
  cpa?: N2K_Number
  tcpa?: N2K_Duration
  utcOfFix?: N2K_Time
  name?: N2K_StringLau
  referenceTarget?: enums.YesNo|number
  reserved17?: number
}

/**
 * @category PGN_128520
 */
export const PGN_128520Defaults = {
  pgn: 128520,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_128520
 */
export const newPGN_128520 = (fields: PGN_128520Fields, dst:number=255) : PGN_128520 => {
  return {
    ...PGN_128520Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128538
  *
  * Description: Elevator Car Status
  *
  * Explanation: This PGN provides the status information of an elevator car. This includes the elevator car id and type, sensors for load and weight limits, smoke detection, door status, motor status, and brake status. Also provided are weight and speed measurements, current and destination deck location, proximity switch status, inertial measurement unit status and Emergency button and buzzer status.
  *
  * @category PGN_128538
 */
export interface PGN_128538 extends PGN {
 fields: PGN_128538Fields
}

/**
 * @category PGN_128538
 */
export interface PGN_128538Fields {
  sid?: N2K_Number
  elevatorCarId?: N2K_Number
  elevatorCarUsage?: N2K_Number
  smokeSensorStatus?: N2K_Number
  limitSwitchSensorStatus?: N2K_Number
  proximitySwitchSensorStatus?: N2K_Number
  inertialMeasurementUnitImuSensorStatus?: N2K_Number
  elevatorLoadLimitStatus?: N2K_Number
  elevatorLoadBalanceStatus?: N2K_Number
  elevatorLoadSensor1Status?: N2K_Number
  elevatorLoadSensor2Status?: N2K_Number
  elevatorLoadSensor3Status?: N2K_Number
  elevatorLoadSensor4Status?: N2K_Number
  reserved?: number
  elevatorCarMotionStatus?: N2K_Number
  elevatorCarDoorStatus?: N2K_Number
  elevatorCarEmergencyButtonStatus?: N2K_Number
  elevatorCarBuzzerStatus?: N2K_Number
  openDoorButtonStatus?: N2K_Number
  closeDoorButtonStatus?: N2K_Number
  reserved21?: number
  currentDeck?: N2K_Number
  destinationDeck?: N2K_Number
  totalNumberOfDecks?: N2K_Number
  weightOfLoadCell1?: N2K_Number
  weightOfLoadCell2?: N2K_Number
  weightOfLoadCell3?: N2K_Number
  weightOfLoadCell4?: N2K_Number
  speedOfElevatorCar?: N2K_Number
  elevatorBrakeStatus?: N2K_Number
  elevatorMotorRotationControlStatus?: N2K_Number
  reserved32?: number
}

/**
 * @category PGN_128538
 */
export const PGN_128538Defaults = {
  pgn: 128538,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128538
 */
export const newPGN_128538 = (fields: PGN_128538Fields, dst:number=255) : PGN_128538 => {
  return {
    ...PGN_128538Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128768
  *
  * Description: Elevator Motor Control
  *
  * Explanation: This PGN provides the status of an elevator motor controller. Settings of the elevator motor controller may be changed using the NMEA Command Group Function.
  *
  * @category PGN_128768
 */
export interface PGN_128768 extends PGN {
 fields: PGN_128768Fields
}

/**
 * @category PGN_128768
 */
export interface PGN_128768Fields {
  sid?: N2K_Number
  elevatorCarId?: N2K_Number
  elevatorCarUsage?: N2K_Number
  motorAccelerationDecelerationProfileSelection?: N2K_Number
  motorRotationalControlStatus?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_128768
 */
export const PGN_128768Defaults = {
  pgn: 128768,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128768
 */
export const newPGN_128768 = (fields: PGN_128768Fields, dst:number=255) : PGN_128768 => {
  return {
    ...PGN_128768Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128769
  *
  * Description: Elevator Deck Push Button
  *
  * Explanation: Transmit data of Deck controller to Elevator Main controller.
  *
  * @category PGN_128769
 */
export interface PGN_128769 extends PGN {
 fields: PGN_128769Fields
}

/**
 * @category PGN_128769
 */
export interface PGN_128769Fields {
  sid?: N2K_Number
  elevatorCallButtonId?: N2K_Number
  deckButtonId?: N2K_Number
  elevatorCarUsage?: N2K_Number
  elevatorCarButtonSelection?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_128769
 */
export const PGN_128769Defaults = {
  pgn: 128769,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128769
 */
export const newPGN_128769 = (fields: PGN_128769Fields, dst:number=255) : PGN_128769 => {
  return {
    ...PGN_128769Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128776
  *
  * Description: Windlass Control Status
  *
  * @category PGN_128776
 */
export interface PGN_128776 extends PGN {
 fields: PGN_128776Fields
}

/**
 * @category PGN_128776
 */
export interface PGN_128776Fields {
  sid?: N2K_Number
  windlassId?: N2K_Number
  windlassDirectionControl?: enums.WindlassDirection|number
  anchorDockingControl?: enums.OffOn|number
  speedControlType?: enums.SpeedType|number
  reserved?: number
  speedControl?: N2K_Binary
  powerEnable?: enums.OffOn|number
  mechanicalLock?: enums.OffOn|number
  deckAndAnchorWash?: enums.OffOn|number
  anchorLight?: enums.OffOn|number
  commandTimeout?: N2K_Duration
  windlassControlEvents?: enums.WindlassControl[]
  reserved14?: number
}

/**
 * @category PGN_128776
 */
export const PGN_128776Defaults = {
  pgn: 128776,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128776
 */
export const newPGN_128776 = (fields: PGN_128776Fields, dst:number=255) : PGN_128776 => {
  return {
    ...PGN_128776Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128777
  *
  * Description: Anchor Windlass Operating Status
  *
  * @category PGN_128777
 */
export interface PGN_128777 extends PGN {
 fields: PGN_128777Fields
}

/**
 * @category PGN_128777
 */
export interface PGN_128777Fields {
  sid?: N2K_Number
  windlassId?: N2K_Number
  windlassDirectionControl?: enums.WindlassDirection|number
  windlassMotionStatus?: enums.WindlassMotion|number
  rodeTypeStatus?: enums.RodeType|number
  reserved?: number
  rodeCounterValue?: N2K_Number
  windlassLineSpeed?: N2K_Number
  anchorDockingStatus?: enums.DockingStatus|number
  windlassOperatingEvents?: enums.WindlassOperation[]
}

/**
 * @category PGN_128777
 */
export const PGN_128777Defaults = {
  pgn: 128777,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128777
 */
export const newPGN_128777 = (fields: PGN_128777Fields, dst:number=255) : PGN_128777 => {
  return {
    ...PGN_128777Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128778
  *
  * Description: Anchor Windlass Monitoring Status
  *
  * @category PGN_128778
 */
export interface PGN_128778 extends PGN {
 fields: PGN_128778Fields
}

/**
 * @category PGN_128778
 */
export interface PGN_128778Fields {
  sid?: N2K_Number
  windlassId?: N2K_Number
  windlassMonitoringEvents?: enums.WindlassMonitoring[]
  controllerVoltage?: N2K_Number
  motorCurrent?: N2K_Number
  totalMotorTime?: N2K_Duration
  reserved?: number
}

/**
 * @category PGN_128778
 */
export const PGN_128778Defaults = {
  pgn: 128778,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128778
 */
export const newPGN_128778 = (fields: PGN_128778Fields, dst:number=255) : PGN_128778 => {
  return {
    ...PGN_128778Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 128780
  *
  * Description: Linear Actuator Control/Status
  *
  * Explanation: Actuator is a broad description of any device that embodies moving an object between two fixed limits, such as raising or lowering an outboard engine assembly. In the context of this PGN, the word "Device" refers to the object being moved. In the case of multiple Actuators per controller, the Actuator Identifier field specifies which Actuator the PGN message is intended for, and all following data fields refer only to that Actuator. This PGN supports manufacturer calibrated systems and retrofit systems where it is impractical for the installer to enter the Maximum Travel distance of the device.
  *
  * @category PGN_128780
 */
export interface PGN_128780 extends PGN {
 fields: PGN_128780Fields
}

/**
 * @category PGN_128780
 */
export interface PGN_128780Fields {
  actuatorIdentifier?: N2K_Number
  commandedDevicePosition?: N2K_Number
  devicePosition?: N2K_Number
  maximumDeviceTravel?: N2K_Number
  directionOfTravel?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_128780
 */
export const PGN_128780Defaults = {
  pgn: 128780,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_128780
 */
export const newPGN_128780 = (fields: PGN_128780Fields, dst:number=255) : PGN_128780 => {
  return {
    ...PGN_128780Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129025
  *
  * Description: Position, Rapid Update
  *
  * @category PGN_129025
 */
export interface PGN_129025 extends PGN {
 fields: PGN_129025Fields
}

/**
 * @category PGN_129025
 */
export interface PGN_129025Fields {
  latitude?: N2K_Number
  longitude?: N2K_Number
}

/**
 * @category PGN_129025
 */
export const PGN_129025Defaults = {
  pgn: 129025,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_129025
 */
export const newPGN_129025 = (fields: PGN_129025Fields, dst:number=255) : PGN_129025 => {
  return {
    ...PGN_129025Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129026
  *
  * Description: COG & SOG, Rapid Update
  *
  * @category PGN_129026
 */
export interface PGN_129026 extends PGN {
 fields: PGN_129026Fields
}

/**
 * @category PGN_129026
 */
export interface PGN_129026Fields {
  sid?: N2K_Number
  cogReference?: enums.DirectionReference|number
  reserved?: number
  cog?: N2K_Number
  sog?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_129026
 */
export const PGN_129026Defaults = {
  pgn: 129026,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_129026
 */
export const newPGN_129026 = (fields: PGN_129026Fields, dst:number=255) : PGN_129026 => {
  return {
    ...PGN_129026Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129027
  *
  * Description: Position Delta, Rapid Update
  *
  * @category PGN_129027
 */
export interface PGN_129027 extends PGN {
 fields: PGN_129027Fields
}

/**
 * @category PGN_129027
 */
export interface PGN_129027Fields {
  sid?: N2K_Number
  timeDelta?: N2K_Duration
  latitudeDelta?: N2K_Number
  longitudeDelta?: N2K_Number
}

/**
 * @category PGN_129027
 */
export const PGN_129027Defaults = {
  pgn: 129027,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_129027
 */
export const newPGN_129027 = (fields: PGN_129027Fields, dst:number=255) : PGN_129027 => {
  return {
    ...PGN_129027Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129028
  *
  * Description: Altitude Delta, Rapid Update
  *
  * @category PGN_129028
 */
export interface PGN_129028 extends PGN {
 fields: PGN_129028Fields
}

/**
 * @category PGN_129028
 */
export interface PGN_129028Fields {
  sid?: N2K_Number
  timeDelta?: N2K_Duration
  gnssQuality?: enums.GnsMethod|number
  direction?: enums.DirectionReference|number
  reserved?: number
  cog?: N2K_Number
  altitudeDelta?: N2K_Number
}

/**
 * @category PGN_129028
 */
export const PGN_129028Defaults = {
  pgn: 129028,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_129028
 */
export const newPGN_129028 = (fields: PGN_129028Fields, dst:number=255) : PGN_129028 => {
  return {
    ...PGN_129028Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129029
  *
  * Description: GNSS Position Data
  *
  * @category PGN_129029
 */
export interface PGN_129029 extends PGN {
 fields: PGN_129029Fields
}

/**
 * @category PGN_129029
 */
export interface PGN_129029Fields {
  sid?: N2K_Number
  date?: N2K_Date
  time?: N2K_Time
  latitude?: N2K_Number
  longitude?: N2K_Number
  altitude?: N2K_Number
  gnssType?: enums.Gns|number
  method?: enums.GnsMethod|number
  integrity?: enums.GnsIntegrity|number
  reserved?: number
  numberOfSvs?: N2K_Number
  hdop?: N2K_Number
  pdop?: N2K_Number
  geoidalSeparation?: N2K_Number
  referenceStations?: N2K_Number
  list: {
    referenceStationType?: enums.Gns|number
    referenceStationId?: N2K_Number
    ageOfDgnssCorrections?: N2K_Duration
  }[]
}

/**
 * @category PGN_129029
 */
export const PGN_129029Defaults = {
  pgn: 129029,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_129029
 */
export const newPGN_129029 = (fields: PGN_129029Fields, dst:number=255) : PGN_129029 => {
  return {
    ...PGN_129029Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129033
  *
  * Description: Time & Date
  *
  * @category PGN_129033
 */
export interface PGN_129033 extends PGN {
 fields: PGN_129033Fields
}

/**
 * @category PGN_129033
 */
export interface PGN_129033Fields {
  date?: N2K_Date
  time?: N2K_Time
  localOffset?: N2K_Duration
}

/**
 * @category PGN_129033
 */
export const PGN_129033Defaults = {
  pgn: 129033,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_129033
 */
export const newPGN_129033 = (fields: PGN_129033Fields, dst:number=255) : PGN_129033 => {
  return {
    ...PGN_129033Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129038
  *
  * Description: AIS Class A Position Report
  *
  * @category PGN_129038
 */
export interface PGN_129038 extends PGN {
 fields: PGN_129038Fields
}

/**
 * @category PGN_129038
 */
export interface PGN_129038Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: N2K_Mmsi
  longitude?: N2K_Number
  latitude?: N2K_Number
  positionAccuracy: enums.PositionAccuracy|number
  raim: enums.RaimFlag|number
  timeStamp?: enums.TimeStamp|number
  cog?: N2K_Number
  sog?: N2K_Number
  communicationState?: N2K_Binary
  aisTransceiverInformation?: enums.AisTransceiver|number
  heading?: N2K_Number
  rateOfTurn?: N2K_Number
  navStatus?: enums.NavStatus|number
  specialManeuverIndicator?: enums.AisSpecialManeuver|number
  reserved?: number
  spare18?: number
  reserved19?: number
  sequenceId?: N2K_Number
}

/**
 * @category PGN_129038
 */
export const PGN_129038Defaults = {
  pgn: 129038,
  dst: 255,
  prio: 4
}

/**
 * @category PGN_129038
 */
export const newPGN_129038 = (fields: PGN_129038Fields, dst:number=255) : PGN_129038 => {
  return {
    ...PGN_129038Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129039
  *
  * Description: AIS Class B Position Report
  *
  * @category PGN_129039
 */
export interface PGN_129039 extends PGN {
 fields: PGN_129039Fields
}

/**
 * @category PGN_129039
 */
export interface PGN_129039Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: N2K_Mmsi
  longitude?: N2K_Number
  latitude?: N2K_Number
  positionAccuracy: enums.PositionAccuracy|number
  raim: enums.RaimFlag|number
  timeStamp?: enums.TimeStamp|number
  cog?: N2K_Number
  sog?: N2K_Number
  communicationState?: N2K_Binary
  aisTransceiverInformation?: enums.AisTransceiver|number
  heading?: N2K_Number
  regionalApplication?: number
  regionalApplicationB?: number
  unitType: enums.AisType|number
  integratedDisplay: enums.YesNo|number
  dsc: enums.YesNo|number
  band: enums.AisBand|number
  canHandleMsg22: enums.YesNo|number
  aisMode: enums.AisMode|number
  aisCommunicationState: enums.AisCommunicationState|number
  reserved?: number
}

/**
 * @category PGN_129039
 */
export const PGN_129039Defaults = {
  pgn: 129039,
  dst: 255,
  prio: 4
}

/**
 * @category PGN_129039
 */
export const newPGN_129039 = (fields: PGN_129039Fields, dst:number=255) : PGN_129039 => {
  return {
    ...PGN_129039Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129040
  *
  * Description: AIS Class B Extended Position Report
  *
  * @category PGN_129040
 */
export interface PGN_129040 extends PGN {
 fields: PGN_129040Fields
}

/**
 * @category PGN_129040
 */
export interface PGN_129040Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: N2K_Mmsi
  longitude?: N2K_Number
  latitude?: N2K_Number
  positionAccuracy: enums.PositionAccuracy|number
  raim: enums.RaimFlag|number
  timeStamp?: enums.TimeStamp|number
  cog?: N2K_Number
  sog?: N2K_Number
  regionalApplication?: number
  regionalApplicationB?: number
  reserved?: number
  typeOfShip?: enums.ShipType|number
  trueHeading?: N2K_Number
  reserved16?: number
  gnssType?: enums.PositionFixDevice|number
  length?: N2K_Number
  beam?: N2K_Number
  positionReferenceFromStarboard?: N2K_Number
  positionReferenceFromBow?: N2K_Number
  name?: N2K_StringFix
  dte: enums.Available|number
  aisMode: enums.AisMode|number
  spare25?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  reserved27?: number
}

/**
 * @category PGN_129040
 */
export const PGN_129040Defaults = {
  pgn: 129040,
  dst: 255,
  prio: 4
}

/**
 * @category PGN_129040
 */
export const newPGN_129040 = (fields: PGN_129040Fields, dst:number=255) : PGN_129040 => {
  return {
    ...PGN_129040Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129041
  *
  * Description: AIS Aids to Navigation (AtoN) Report
  *
  * @category PGN_129041
 */
export interface PGN_129041 extends PGN {
 fields: PGN_129041Fields
}

/**
 * @category PGN_129041
 */
export interface PGN_129041Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: N2K_Mmsi
  longitude?: N2K_Number
  latitude?: N2K_Number
  positionAccuracy: enums.PositionAccuracy|number
  raim: enums.RaimFlag|number
  timeStamp?: enums.TimeStamp|number
  lengthDiameter?: N2K_Number
  beamDiameter?: N2K_Number
  positionReferenceFromStarboardEdge?: N2K_Number
  positionReferenceFromTrueNorthFacingEdge?: N2K_Number
  atonType?: enums.AtonType|number
  offPositionIndicator: enums.YesNo|number
  virtualAtonFlag: enums.YesNo|number
  assignedModeFlag: enums.AisAssignedMode|number
  spare?: number
  positionFixingDeviceType?: enums.PositionFixDevice|number
  reserved19?: number
  atonStatus?: N2K_Binary
  aisTransceiverInformation?: enums.AisTransceiver|number
  reserved22?: number
  atonName?: N2K_StringLau
}

/**
 * @category PGN_129041
 */
export const PGN_129041Defaults = {
  pgn: 129041,
  dst: 255,
  prio: 4
}

/**
 * @category PGN_129041
 */
export const newPGN_129041 = (fields: PGN_129041Fields, dst:number=255) : PGN_129041 => {
  return {
    ...PGN_129041Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129044
  *
  * Description: Datum
  *
  * @category PGN_129044
 */
export interface PGN_129044 extends PGN {
 fields: PGN_129044Fields
}

/**
 * @category PGN_129044
 */
export interface PGN_129044Fields {
  localDatum?: N2K_StringFix
  deltaLatitude?: N2K_Number
  deltaLongitude?: N2K_Number
  deltaAltitude?: N2K_Number
  referenceDatum?: N2K_StringFix
}

/**
 * @category PGN_129044
 */
export const PGN_129044Defaults = {
  pgn: 129044,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129044
 */
export const newPGN_129044 = (fields: PGN_129044Fields, dst:number=255) : PGN_129044 => {
  return {
    ...PGN_129044Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129045
  *
  * Description: User Datum
  *
  * @category PGN_129045
 */
export interface PGN_129045 extends PGN {
 fields: PGN_129045Fields
}

/**
 * @category PGN_129045
 */
export interface PGN_129045Fields {
  deltaX?: N2K_Number
  deltaY?: N2K_Number
  deltaZ?: N2K_Number
  rotationInX?: N2K_Float
  rotationInY?: N2K_Float
  rotationInZ?: N2K_Float
  scale?: N2K_Float
  ellipsoidSemiMajorAxis?: N2K_Number
  ellipsoidFlatteningInverse?: N2K_Float
  datumName?: N2K_StringFix
}

/**
 * @category PGN_129045
 */
export const PGN_129045Defaults = {
  pgn: 129045,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129045
 */
export const newPGN_129045 = (fields: PGN_129045Fields, dst:number=255) : PGN_129045 => {
  return {
    ...PGN_129045Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129283
  *
  * Description: Cross Track Error
  *
  * @category PGN_129283
 */
export interface PGN_129283 extends PGN {
 fields: PGN_129283Fields
}

/**
 * @category PGN_129283
 */
export interface PGN_129283Fields {
  sid?: N2K_Number
  xteMode?: enums.ResidualMode|number
  reserved?: number
  navigationTerminated?: enums.YesNo|number
  xte?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_129283
 */
export const PGN_129283Defaults = {
  pgn: 129283,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_129283
 */
export const newPGN_129283 = (fields: PGN_129283Fields, dst:number=255) : PGN_129283 => {
  return {
    ...PGN_129283Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129284
  *
  * Description: Navigation Data
  *
  * @category PGN_129284
 */
export interface PGN_129284 extends PGN {
 fields: PGN_129284Fields
}

/**
 * @category PGN_129284
 */
export interface PGN_129284Fields {
  sid?: N2K_Number
  distanceToWaypoint?: N2K_Number
  courseBearingReference?: enums.DirectionReference|number
  perpendicularCrossed?: enums.YesNo|number
  arrivalCircleEntered?: enums.YesNo|number
  calculationType?: enums.BearingMode|number
  etaTime?: N2K_Time
  etaDate?: N2K_Date
  bearingOriginToDestinationWaypoint?: N2K_Number
  bearingPositionToDestinationWaypoint?: N2K_Number
  originWaypointNumber?: N2K_Number
  destinationWaypointNumber?: N2K_Number
  destinationLatitude?: N2K_Number
  destinationLongitude?: N2K_Number
  waypointClosingVelocity?: N2K_Number
}

/**
 * @category PGN_129284
 */
export const PGN_129284Defaults = {
  pgn: 129284,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_129284
 */
export const newPGN_129284 = (fields: PGN_129284Fields, dst:number=255) : PGN_129284 => {
  return {
    ...PGN_129284Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129285
  *
  * Description: Navigation - Route/WP Information
  *
  * @category PGN_129285
 */
export interface PGN_129285 extends PGN {
 fields: PGN_129285Fields
}

/**
 * @category PGN_129285
 */
export interface PGN_129285Fields {
  startRps?: N2K_Number
  nitems?: N2K_Number
  databaseId?: N2K_Number
  routeId?: N2K_Number
  navigationDirectionInRoute?: enums.Direction|number
  supplementaryRouteWpDataAvailable?: enums.OffOn|number
  reserved?: number
  routeName?: N2K_StringLau
  reserved9?: number
  list: {
    wpId?: N2K_Number
    wpName?: N2K_StringLau
    wpLatitude?: N2K_Number
    wpLongitude?: N2K_Number
  }[]
}

/**
 * @category PGN_129285
 */
export const PGN_129285Defaults = {
  pgn: 129285,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129285
 */
export const newPGN_129285 = (fields: PGN_129285Fields, dst:number=255) : PGN_129285 => {
  return {
    ...PGN_129285Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129291
  *
  * Description: Set & Drift, Rapid Update
  *
  * @category PGN_129291
 */
export interface PGN_129291 extends PGN {
 fields: PGN_129291Fields
}

/**
 * @category PGN_129291
 */
export interface PGN_129291Fields {
  sid?: N2K_Number
  setReference?: enums.DirectionReference|number
  reserved?: number
  set?: N2K_Number
  drift?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_129291
 */
export const PGN_129291Defaults = {
  pgn: 129291,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_129291
 */
export const newPGN_129291 = (fields: PGN_129291Fields, dst:number=255) : PGN_129291 => {
  return {
    ...PGN_129291Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129301
  *
  * Description: Navigation - Route / Time to+from Mark
  *
  * @category PGN_129301
 */
export interface PGN_129301 extends PGN {
 fields: PGN_129301Fields
}

/**
 * @category PGN_129301
 */
export interface PGN_129301Fields {
  sid?: N2K_Number
  timeToMark?: N2K_Duration
  markType?: enums.MarkType|number
  reserved?: number
  markId?: N2K_Number
}

/**
 * @category PGN_129301
 */
export const PGN_129301Defaults = {
  pgn: 129301,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_129301
 */
export const newPGN_129301 = (fields: PGN_129301Fields, dst:number=255) : PGN_129301 => {
  return {
    ...PGN_129301Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129302
  *
  * Description: Bearing and Distance between two Marks
  *
  * @category PGN_129302
 */
export interface PGN_129302 extends PGN {
 fields: PGN_129302Fields
}

/**
 * @category PGN_129302
 */
export interface PGN_129302Fields {
  sid?: N2K_Number
  bearingReference?: enums.DirectionReference|number
  calculationType?: enums.BearingMode|number
  reserved?: number
  bearingOriginToDestination?: N2K_Number
  distance?: N2K_Number
  originMarkType?: enums.MarkType|number
  destinationMarkType?: enums.MarkType|number
  originMarkId?: N2K_Number
  destinationMarkId?: N2K_Number
}

/**
 * @category PGN_129302
 */
export const PGN_129302Defaults = {
  pgn: 129302,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129302
 */
export const newPGN_129302 = (fields: PGN_129302Fields, dst:number=255) : PGN_129302 => {
  return {
    ...PGN_129302Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129538
  *
  * Description: GNSS Control Status
  *
  * @category PGN_129538
 */
export interface PGN_129538 extends PGN {
 fields: PGN_129538Fields
}

/**
 * @category PGN_129538
 */
export interface PGN_129538Fields {
  svElevationMask?: N2K_Number
  pdopMask?: N2K_Number
  pdopSwitch?: N2K_Number
  snrMask?: N2K_Number
  gnssModeDesired?: enums.GnssMode|number
  dgnssModeDesired?: enums.DgnssMode|number
  positionVelocityFilter?: enums.YesNo|number
  maxCorrectionAge?: N2K_Duration
  antennaAltitudeFor2dMode?: N2K_Number
  useAntennaAltitudeFor2dMode?: enums.YesNo|number
  reserved?: number
}

/**
 * @category PGN_129538
 */
export const PGN_129538Defaults = {
  pgn: 129538,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129538
 */
export const newPGN_129538 = (fields: PGN_129538Fields, dst:number=255) : PGN_129538 => {
  return {
    ...PGN_129538Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129539
  *
  * Description: GNSS DOPs
  *
  * @category PGN_129539
 */
export interface PGN_129539 extends PGN {
 fields: PGN_129539Fields
}

/**
 * @category PGN_129539
 */
export interface PGN_129539Fields {
  sid?: N2K_Number
  desiredMode?: enums.GnssMode|number
  actualMode?: enums.GnssMode|number
  reserved?: number
  hdop?: N2K_Number
  vdop?: N2K_Number
  tdop?: N2K_Number
}

/**
 * @category PGN_129539
 */
export const PGN_129539Defaults = {
  pgn: 129539,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129539
 */
export const newPGN_129539 = (fields: PGN_129539Fields, dst:number=255) : PGN_129539 => {
  return {
    ...PGN_129539Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129540
  *
  * Description: GNSS Sats in View
  *
  * @category PGN_129540
 */
export interface PGN_129540 extends PGN {
 fields: PGN_129540Fields
}

/**
 * @category PGN_129540
 */
export interface PGN_129540Fields {
  sid?: N2K_Number
  rangeResidualMode?: enums.RangeResidualMode|number
  reserved?: number
  satsInView?: N2K_Number
  list: {
    prn?: N2K_Number
    elevation?: N2K_Number
    azimuth?: N2K_Number
    snr?: N2K_Number
    rangeResiduals?: N2K_Number
    status?: enums.SatelliteStatus|number
    reserved11?: number
  }[]
}

/**
 * @category PGN_129540
 */
export const PGN_129540Defaults = {
  pgn: 129540,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129540
 */
export const newPGN_129540 = (fields: PGN_129540Fields, dst:number=255) : PGN_129540 => {
  return {
    ...PGN_129540Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129541
  *
  * Description: GPS Almanac Data
  *
  * @category PGN_129541
 */
export interface PGN_129541 extends PGN {
 fields: PGN_129541Fields
}

/**
 * @category PGN_129541
 */
export interface PGN_129541Fields {
  prn?: N2K_Number
  gpsWeekNumber?: N2K_Number
  svHealthBits?: N2K_Binary
  eccentricity?: N2K_Number
  almanacReferenceTime?: N2K_Number
  inclinationAngle?: N2K_Number
  rateOfRightAscension?: N2K_Number
  rootOfSemiMajorAxis?: N2K_Number
  argumentOfPerigee?: N2K_Number
  longitudeOfAscensionNode?: N2K_Number
  meanAnomaly?: N2K_Number
  clockParameter1?: N2K_Number
  clockParameter2?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_129541
 */
export const PGN_129541Defaults = {
  pgn: 129541,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129541
 */
export const newPGN_129541 = (fields: PGN_129541Fields, dst:number=255) : PGN_129541 => {
  return {
    ...PGN_129541Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129542
  *
  * Description: GNSS Pseudorange Noise Statistics
  *
  * @category PGN_129542
 */
export interface PGN_129542 extends PGN {
 fields: PGN_129542Fields
}

/**
 * @category PGN_129542
 */
export interface PGN_129542Fields {
  sid?: N2K_Number
  rmsOfPositionUncertainty?: N2K_Number
  stdOfMajorAxis?: N2K_Number
  stdOfMinorAxis?: N2K_Number
  orientationOfMajorAxis?: N2K_Number
  stdOfLatError?: N2K_Number
  stdOfLonError?: N2K_Number
  stdOfAltError?: N2K_Number
}

/**
 * @category PGN_129542
 */
export const PGN_129542Defaults = {
  pgn: 129542,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129542
 */
export const newPGN_129542 = (fields: PGN_129542Fields, dst:number=255) : PGN_129542 => {
  return {
    ...PGN_129542Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129545
  *
  * Description: GNSS RAIM Output
  *
  * @category PGN_129545
 */
export interface PGN_129545 extends PGN {
 fields: PGN_129545Fields
}

/**
 * @category PGN_129545
 */
export interface PGN_129545Fields {
  sid?: N2K_Number
  integrityFlag?: enums.GnsIntegrity|number
  reserved?: number
  latitudeExpectedError?: N2K_Number
  longitudeExpectedError?: N2K_Number
  altitudeExpectedError?: N2K_Number
  svIdOfMostLikelyFailedSat?: N2K_Number
  probabilityOfMissedDetection?: N2K_Number
  estimateOfPseudorangeBias?: N2K_Number
  stdDeviationOfBias?: N2K_Number
}

/**
 * @category PGN_129545
 */
export const PGN_129545Defaults = {
  pgn: 129545,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129545
 */
export const newPGN_129545 = (fields: PGN_129545Fields, dst:number=255) : PGN_129545 => {
  return {
    ...PGN_129545Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129546
  *
  * Description: GNSS RAIM Settings
  *
  * @category PGN_129546
 */
export interface PGN_129546 extends PGN {
 fields: PGN_129546Fields
}

/**
 * @category PGN_129546
 */
export interface PGN_129546Fields {
  radialPositionErrorMaximumThreshold?: N2K_Number
  probabilityOfFalseAlarm?: N2K_Number
  probabilityOfMissedDetection?: N2K_Number
  pseudorangeResidualFilteringTimeConstant?: N2K_Duration
  reserved?: number
}

/**
 * @category PGN_129546
 */
export const PGN_129546Defaults = {
  pgn: 129546,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129546
 */
export const newPGN_129546 = (fields: PGN_129546Fields, dst:number=255) : PGN_129546 => {
  return {
    ...PGN_129546Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129547
  *
  * Description: GNSS Pseudorange Error Statistics
  *
  * @category PGN_129547
 */
export interface PGN_129547 extends PGN {
 fields: PGN_129547Fields
}

/**
 * @category PGN_129547
 */
export interface PGN_129547Fields {
  sid?: N2K_Number
  rmsStdDevOfRangeInputs?: N2K_Number
  stdDevOfMajorErrorEllipse?: N2K_Number
  stdDevOfMinorErrorEllipse?: N2K_Number
  orientationOfErrorEllipse?: N2K_Number
  stdDevLatError?: N2K_Number
  stdDevLonError?: N2K_Number
  stdDevAltError?: N2K_Number
}

/**
 * @category PGN_129547
 */
export const PGN_129547Defaults = {
  pgn: 129547,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129547
 */
export const newPGN_129547 = (fields: PGN_129547Fields, dst:number=255) : PGN_129547 => {
  return {
    ...PGN_129547Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129549
  *
  * Description: DGNSS Corrections
  *
  * @category PGN_129549
 */
export interface PGN_129549 extends PGN {
 fields: PGN_129549Fields
}

/**
 * @category PGN_129549
 */
export interface PGN_129549Fields {
  sid?: N2K_Number
  referenceStationId?: N2K_Number
  referenceStationType?: enums.Gns|number
  timeOfCorrections?: N2K_Duration
  stationHealth?: enums.StationHealth|number
  reserved?: number
  satelliteId?: N2K_Number
  prc?: N2K_Number
  rrc?: N2K_Number
  udre?: N2K_Number
  iod?: N2K_Number
}

/**
 * @category PGN_129549
 */
export const PGN_129549Defaults = {
  pgn: 129549,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129549
 */
export const newPGN_129549 = (fields: PGN_129549Fields, dst:number=255) : PGN_129549 => {
  return {
    ...PGN_129549Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129550
  *
  * Description: GNSS Differential Correction Receiver Interface
  *
  * @category PGN_129550
 */
export interface PGN_129550 extends PGN {
 fields: PGN_129550Fields
}

/**
 * @category PGN_129550
 */
export interface PGN_129550Fields {
  channel?: N2K_Number
  frequency?: N2K_Number
  serialInterfaceBitRate?: enums.SerialBitRate|number
  serialInterfaceDetectionMode?: enums.SerialDetectionMode|number
  differentialSource?: enums.DifferentialSource|number
  differentialOperationMode?: enums.DifferentialMode|number
  reserved?: number
}

/**
 * @category PGN_129550
 */
export const PGN_129550Defaults = {
  pgn: 129550,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129550
 */
export const newPGN_129550 = (fields: PGN_129550Fields, dst:number=255) : PGN_129550 => {
  return {
    ...PGN_129550Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129551
  *
  * Description: GNSS Differential Correction Receiver Signal
  *
  * @category PGN_129551
 */
export interface PGN_129551 extends PGN {
 fields: PGN_129551Fields
}

/**
 * @category PGN_129551
 */
export interface PGN_129551Fields {
  sid?: N2K_Number
  channel?: N2K_Number
  signalStrength?: N2K_Number
  signalSnr?: N2K_Number
  frequency?: N2K_Number
  stationType?: enums.Gns|number
  referenceStationId?: N2K_Number
  differentialSignalBitRate?: enums.SerialBitRate|number
  differentialSignalDetectionMode?: enums.SerialDetectionMode|number
  usedAsCorrectionSource?: enums.YesNo|number
  reserved?: number
  differentialSource?: enums.DifferentialSource|number
  timeSinceLastSatDifferentialSync?: N2K_Duration
  satelliteServiceIdNo?: N2K_Number
}

/**
 * @category PGN_129551
 */
export const PGN_129551Defaults = {
  pgn: 129551,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129551
 */
export const newPGN_129551 = (fields: PGN_129551Fields, dst:number=255) : PGN_129551 => {
  return {
    ...PGN_129551Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129556
  *
  * Description: GLONASS Almanac Data
  *
  * Explanation: Almanac data for GLONASS products. The alamant contains satellite vehicle course orbital parameters. These parameters are described in the GLONASS ICS Section 4.5 Table 4.3. See URL.
  *
  * @category PGN_129556
 */
export interface PGN_129556 extends PGN {
 fields: PGN_129556Fields
}

/**
 * @category PGN_129556
 */
export interface PGN_129556Fields {
  prn?: N2K_Number
  na?: N2K_Number
  reserved?: number
  cna: N2K_Number
  hna?: N2K_Number
  EpsilonNa?: N2K_Number
  DeltatnaDot?: N2K_Number
  OmegaNa?: N2K_Number
  DeltaTna?: N2K_Number
  tna?: N2K_Number
  LambdaNa?: N2K_Number
  DeltaIna?: N2K_Number
  TauCa?: N2K_Number
  TauNa?: N2K_Number
}

/**
 * @category PGN_129556
 */
export const PGN_129556Defaults = {
  pgn: 129556,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129556
 */
export const newPGN_129556 = (fields: PGN_129556Fields, dst:number=255) : PGN_129556 => {
  return {
    ...PGN_129556Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129792
  *
  * Description: AIS DGNSS Broadcast Binary Message
  *
  * @category PGN_129792
 */
export interface PGN_129792 extends PGN {
 fields: PGN_129792Fields
}

/**
 * @category PGN_129792
 */
export interface PGN_129792Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: N2K_Number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: number
  longitude?: N2K_Number
  latitude?: N2K_Number
  reserved9?: number
  spare10?: number
  numberOfBitsInBinaryDataField?: N2K_Number
  binaryData?: N2K_Binary
}

/**
 * @category PGN_129792
 */
export const PGN_129792Defaults = {
  pgn: 129792,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129792
 */
export const newPGN_129792 = (fields: PGN_129792Fields, dst:number=255) : PGN_129792 => {
  return {
    ...PGN_129792Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129793
  *
  * Description: AIS UTC and Date Report
  *
  * @category PGN_129793
 */
export interface PGN_129793 extends PGN {
 fields: PGN_129793Fields
}

/**
 * @category PGN_129793
 */
export interface PGN_129793Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: N2K_Mmsi
  longitude?: N2K_Number
  latitude?: N2K_Number
  positionAccuracy: enums.PositionAccuracy|number
  raim: enums.RaimFlag|number
  reserved?: number
  positionTime?: N2K_Time
  communicationState?: N2K_Binary
  aisTransceiverInformation?: enums.AisTransceiver|number
  positionDate?: N2K_Date
  reserved13?: number
  gnssType?: enums.PositionFixDevice|number
}

/**
 * @category PGN_129793
 */
export const PGN_129793Defaults = {
  pgn: 129793,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_129793
 */
export const newPGN_129793 = (fields: PGN_129793Fields, dst:number=255) : PGN_129793 => {
  return {
    ...PGN_129793Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129794
  *
  * Description: AIS Class A Static and Voyage Related Data
  *
  * @category PGN_129794
 */
export interface PGN_129794 extends PGN {
 fields: PGN_129794Fields
}

/**
 * @category PGN_129794
 */
export interface PGN_129794Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: N2K_Mmsi
  imoNumber?: N2K_Number
  callsign?: N2K_StringFix
  name?: N2K_StringFix
  typeOfShip?: enums.ShipType|number
  length?: N2K_Number
  beam?: N2K_Number
  positionReferenceFromStarboard?: N2K_Number
  positionReferenceFromBow?: N2K_Number
  etaDate?: N2K_Date
  etaTime?: N2K_Time
  draft?: N2K_Number
  destination?: N2K_StringFix
  aisVersionIndicator?: enums.AisVersion|number
  gnssType?: enums.PositionFixDevice|number
  dte: enums.Available|number
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  reserved21?: number
}

/**
 * @category PGN_129794
 */
export const PGN_129794Defaults = {
  pgn: 129794,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129794
 */
export const newPGN_129794 = (fields: PGN_129794Fields, dst:number=255) : PGN_129794 => {
  return {
    ...PGN_129794Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129795
  *
  * Description: AIS Addressed Binary Message
  *
  * @category PGN_129795
 */
export interface PGN_129795 extends PGN {
 fields: PGN_129795Fields
}

/**
 * @category PGN_129795
 */
export interface PGN_129795Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  sequenceNumber?: N2K_Number
  destinationId: N2K_Mmsi
  reserved8?: number
  retransmitFlag: enums.YesNo|number
  reserved10?: number
  numberOfBitsInBinaryDataField?: N2K_Number
  binaryData?: N2K_Binary
}

/**
 * @category PGN_129795
 */
export const PGN_129795Defaults = {
  pgn: 129795,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_129795
 */
export const newPGN_129795 = (fields: PGN_129795Fields, dst:number=255) : PGN_129795 => {
  return {
    ...PGN_129795Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129796
  *
  * Description: AIS Acknowledge
  *
  * @category PGN_129796
 */
export interface PGN_129796 extends PGN {
 fields: PGN_129796Fields
}

/**
 * @category PGN_129796
 */
export interface PGN_129796Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: number
  list: {
    destinationId: N2K_Mmsi
    sequenceNumber?: N2K_Number
    reserved9?: number
  }[]
}

/**
 * @category PGN_129796
 */
export const PGN_129796Defaults = {
  pgn: 129796,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_129796
 */
export const newPGN_129796 = (fields: PGN_129796Fields, dst:number=255) : PGN_129796 => {
  return {
    ...PGN_129796Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129797
  *
  * Description: AIS Binary Broadcast Message
  *
  * @category PGN_129797
 */
export interface PGN_129797 extends PGN {
 fields: PGN_129797Fields
}

/**
 * @category PGN_129797
 */
export interface PGN_129797Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId?: N2K_Number
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: number
  numberOfBitsInBinaryDataField?: N2K_Number
  binaryData?: N2K_Binary
}

/**
 * @category PGN_129797
 */
export const PGN_129797Defaults = {
  pgn: 129797,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_129797
 */
export const newPGN_129797 = (fields: PGN_129797Fields, dst:number=255) : PGN_129797 => {
  return {
    ...PGN_129797Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129798
  *
  * Description: AIS SAR Aircraft Position Report
  *
  * @category PGN_129798
 */
export interface PGN_129798 extends PGN {
 fields: PGN_129798Fields
}

/**
 * @category PGN_129798
 */
export interface PGN_129798Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: N2K_Mmsi
  longitude?: N2K_Number
  latitude?: N2K_Number
  positionAccuracy: enums.PositionAccuracy|number
  raim: enums.RaimFlag|number
  timeStamp?: enums.TimeStamp|number
  cog?: N2K_Number
  sog?: N2K_Number
  communicationState?: N2K_Binary
  aisTransceiverInformation?: enums.AisTransceiver|number
  altitude?: N2K_Number
  reservedForRegionalApplications?: N2K_Binary
  dte: enums.Available|number
  spare?: number
  reserved17?: number
}

/**
 * @category PGN_129798
 */
export const PGN_129798Defaults = {
  pgn: 129798,
  dst: 255,
  prio: 4
}

/**
 * @category PGN_129798
 */
export const newPGN_129798 = (fields: PGN_129798Fields, dst:number=255) : PGN_129798 => {
  return {
    ...PGN_129798Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129799
  *
  * Description: Radio Frequency/Mode/Power
  *
  * Explanation: The Radio Channel is NOT a numeric field, it has been observed to contain values such as 9000L1-L3 and 9000F1-F3 (indicating private channels as allowed in some countries.)
  *
  * @category PGN_129799
 */
export interface PGN_129799 extends PGN {
 fields: PGN_129799Fields
}

/**
 * @category PGN_129799
 */
export interface PGN_129799Fields {
  rxFrequency?: N2K_Number
  txFrequency?: N2K_Number
  radioChannel?: N2K_StringFix
  txPower?: N2K_Number
  mode?: enums.TelephoneMode|number
  channelBandwidth?: N2K_Number
}

/**
 * @category PGN_129799
 */
export const PGN_129799Defaults = {
  pgn: 129799,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_129799
 */
export const newPGN_129799 = (fields: PGN_129799Fields, dst:number=255) : PGN_129799 => {
  return {
    ...PGN_129799Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129800
  *
  * Description: AIS UTC/Date Inquiry
  *
  * @category PGN_129800
 */
export interface PGN_129800 extends PGN {
 fields: PGN_129800Fields
}

/**
 * @category PGN_129800
 */
export interface PGN_129800Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: number
  destinationId: N2K_Mmsi
}

/**
 * @category PGN_129800
 */
export const PGN_129800Defaults = {
  pgn: 129800,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_129800
 */
export const newPGN_129800 = (fields: PGN_129800Fields, dst:number=255) : PGN_129800 => {
  return {
    ...PGN_129800Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129801
  *
  * Description: AIS Addressed Safety Related Message
  *
  * @category PGN_129801
 */
export interface PGN_129801 extends PGN {
 fields: PGN_129801Fields
}

/**
 * @category PGN_129801
 */
export interface PGN_129801Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  sequenceNumber?: N2K_Number
  destinationId: N2K_Mmsi
  reserved8?: number
  retransmitFlag: enums.YesNo|number
  spare10?: number
  safetyRelatedText?: N2K_StringLau
}

/**
 * @category PGN_129801
 */
export const PGN_129801Defaults = {
  pgn: 129801,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_129801
 */
export const newPGN_129801 = (fields: PGN_129801Fields, dst:number=255) : PGN_129801 => {
  return {
    ...PGN_129801Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129802
  *
  * Description: AIS Safety Related Broadcast Message
  *
  * @category PGN_129802
 */
export interface PGN_129802 extends PGN {
 fields: PGN_129802Fields
}

/**
 * @category PGN_129802
 */
export interface PGN_129802Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: number
  safetyRelatedText?: N2K_StringLau
}

/**
 * @category PGN_129802
 */
export const PGN_129802Defaults = {
  pgn: 129802,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_129802
 */
export const newPGN_129802 = (fields: PGN_129802Fields, dst:number=255) : PGN_129802 => {
  return {
    ...PGN_129802Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129803
  *
  * Description: AIS Interrogation
  *
  * @category PGN_129803
 */
export interface PGN_129803 extends PGN {
 fields: PGN_129803Fields
}

/**
 * @category PGN_129803
 */
export interface PGN_129803Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: number
  destinationId1: N2K_Mmsi
  reserved8?: number
  messageId11?: enums.AisMessageId|number
  slotOffset11?: N2K_Number
  spare11?: number
  messageId12?: enums.AisMessageId|number
  slotOffset12?: N2K_Number
  reserved14?: number
  reserved15?: number
  destinationId2: N2K_Mmsi
  reserved17?: number
  messageId21?: enums.AisMessageId|number
  slotOffset21?: N2K_Number
  spare20?: number
  reserved21?: number
  sid?: N2K_Number
}

/**
 * @category PGN_129803
 */
export const PGN_129803Defaults = {
  pgn: 129803,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_129803
 */
export const newPGN_129803 = (fields: PGN_129803Fields, dst:number=255) : PGN_129803 => {
  return {
    ...PGN_129803Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129804
  *
  * Description: AIS Assignment Mode Command
  *
  * @category PGN_129804
 */
export interface PGN_129804 extends PGN {
 fields: PGN_129804Fields
}

/**
 * @category PGN_129804
 */
export interface PGN_129804Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: number
  destinationIdA: N2K_Mmsi
  offsetA?: N2K_Number
  incrementA?: N2K_Number
  destinationIdB: N2K_Mmsi
  offsetB?: N2K_Number
  incrementB?: N2K_Number
  spare13?: number
  reserved14?: number
}

/**
 * @category PGN_129804
 */
export const PGN_129804Defaults = {
  pgn: 129804,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_129804
 */
export const newPGN_129804 = (fields: PGN_129804Fields, dst:number=255) : PGN_129804 => {
  return {
    ...PGN_129804Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129805
  *
  * Description: AIS Data Link Management Message
  *
  * @category PGN_129805
 */
export interface PGN_129805 extends PGN {
 fields: PGN_129805Fields
}

/**
 * @category PGN_129805
 */
export interface PGN_129805Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: number
  list: {
    offset?: N2K_Number
    numberOfSlots?: N2K_Number
    timeout?: N2K_Duration
    increment?: N2K_Number
  }[]
}

/**
 * @category PGN_129805
 */
export const PGN_129805Defaults = {
  pgn: 129805,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_129805
 */
export const newPGN_129805 = (fields: PGN_129805Fields, dst:number=255) : PGN_129805 => {
  return {
    ...PGN_129805Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129806
  *
  * Description: AIS Channel Management
  *
  * @category PGN_129806
 */
export interface PGN_129806 extends PGN {
 fields: PGN_129806Fields
}

/**
 * @category PGN_129806
 */
export interface PGN_129806Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver|number
  spare6?: number
  channelA?: N2K_Number
  channelB?: N2K_Number
  reserved9?: number
  power: enums.PowerMode|number
  txRxMode?: enums.TxRxMode|number
  northEastLongitudeCorner1?: N2K_Number
  northEastLatitudeCorner1?: N2K_Number
  southWestLongitudeCorner2?: N2K_Number
  southWestLatitudeCorner2?: N2K_Number
  reserved16?: number
  addressedOrBroadcastMessageIndicator: enums.BroadcastIndicator|number
  channelABandwidth: enums.Bandwidth|number
  channelBBandwidth: enums.Bandwidth|number
  reserved20?: number
  transitionalZoneSize?: enums.ZoneSize|number
  spare22?: number
  reserved23?: number
}

/**
 * @category PGN_129806
 */
export const PGN_129806Defaults = {
  pgn: 129806,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_129806
 */
export const newPGN_129806 = (fields: PGN_129806Fields, dst:number=255) : PGN_129806 => {
  return {
    ...PGN_129806Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129807
  *
  * Description: AIS Class B Group Assignment
  *
  * @category PGN_129807
 */
export interface PGN_129807 extends PGN {
 fields: PGN_129807Fields
}

/**
 * @category PGN_129807
 */
export interface PGN_129807Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  sourceId: N2K_Mmsi
  spare?: number
  txRxMode?: enums.TxRxMode|number
  reserved6?: number
  northEastLongitudeCorner1?: N2K_Number
  northEastLatitudeCorner1?: N2K_Number
  southWestLongitudeCorner2?: N2K_Number
  southWestLatitudeCorner2?: N2K_Number
  stationType?: enums.StationType|number
  reserved12?: number
  shipAndCargoFilter?: enums.ShipType|number
  spare14?: number
  reserved15?: number
  reportingInterval?: enums.ReportingInterval|number
  quietTime?: N2K_Duration
  spare18?: number
  reserved19?: number
}

/**
 * @category PGN_129807
 */
export const PGN_129807Defaults = {
  pgn: 129807,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_129807
 */
export const newPGN_129807 = (fields: PGN_129807Fields, dst:number=255) : PGN_129807 => {
  return {
    ...PGN_129807Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129808
  *
  * Description: DSC Distress Call Information
  *
  * Match: DSC Category == Distress<br>
  *
  * @category PGN_129808_DscDistressCallInformation
 */
export interface PGN_129808_DscDistressCallInformation extends PGN {
 fields: PGN_129808_DscDistressCallInformationFields
}

/**
 * @category PGN_129808_DscDistressCallInformation
 */
export interface PGN_129808_DscDistressCallInformationFields {
  dscFormat?: enums.DscFormat|number
  dscCategory?: enums.DscCategory|number
  dscMessageAddress?: N2K_Decimal
  natureOfDistress?: enums.DscNature|number
  subsequentCommunicationModeOr2ndTelecommand?: enums.DscSecondTelecommand|number
  proposedRxFrequencyChannel?: N2K_StringFix
  proposedTxFrequencyChannel?: N2K_StringFix
  telephoneNumber?: N2K_StringLau
  latitudeOfVesselReported?: N2K_Number
  longitudeOfVesselReported?: N2K_Number
  timeOfPosition?: N2K_Time
  mmsiOfShipInDistress?: N2K_Decimal
  dscEosSymbol?: N2K_Number
  expansionEnabled?: enums.YesNo|number
  reserved?: number
  callingRxFrequencyChannel?: N2K_StringFix
  callingTxFrequencyChannel?: N2K_StringFix
  timeOfReceipt?: N2K_Time
  dateOfReceipt?: N2K_Date
  dscEquipmentAssignedMessageId?: N2K_Number
  list: {
    dscExpansionFieldSymbol?: enums.DscExpansionData|number
    dscExpansionFieldData?: N2K_StringLau
  }[]
}

/**
 * @category PGN_129808_DscDistressCallInformation
 */
export const PGN_129808_DscDistressCallInformationDefaults = {
  pgn: 129808,
  dst: 255,
  prio: 4
}

/**
 * @category PGN_129808_DscDistressCallInformation
 */
export const PGN_129808_DscDistressCallInformationMatchFields = {
  dscCategory: enums.DscCategory.Distress,
}

/**
 * @category PGN_129808_DscDistressCallInformation
 */
export interface PGN_129808_DscDistressCallInformationCreateArgs {
  dscFormat?: enums.DscFormat|number
  dscMessageAddress?: N2K_Decimal
  natureOfDistress?: enums.DscNature|number
  subsequentCommunicationModeOr2ndTelecommand?: enums.DscSecondTelecommand|number
  proposedRxFrequencyChannel?: N2K_StringFix
  proposedTxFrequencyChannel?: N2K_StringFix
  telephoneNumber?: N2K_StringLau
  latitudeOfVesselReported?: N2K_Number
  longitudeOfVesselReported?: N2K_Number
  timeOfPosition?: N2K_Time
  mmsiOfShipInDistress?: N2K_Decimal
  dscEosSymbol?: N2K_Number
  expansionEnabled?: enums.YesNo|number
  reserved?: number
  callingRxFrequencyChannel?: N2K_StringFix
  callingTxFrequencyChannel?: N2K_StringFix
  timeOfReceipt?: N2K_Time
  dateOfReceipt?: N2K_Date
  dscEquipmentAssignedMessageId?: N2K_Number
  list: {
    dscExpansionFieldSymbol?: enums.DscExpansionData|number
    dscExpansionFieldData?: N2K_StringLau
  }[]
}

/**
 * @category PGN_129808_DscDistressCallInformation
 */
export const newPGN_129808_DscDistressCallInformation = (fields: PGN_129808_DscDistressCallInformationCreateArgs, dst:number=255) : PGN_129808_DscDistressCallInformation => {
  return {
    ...PGN_129808_DscDistressCallInformationDefaults,
    dst,
    fields: {
      ...PGN_129808_DscDistressCallInformationMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 129808
  *
  * Description: DSC Call Information
  *
  *
  * @category PGN_129808
 */
export interface PGN_129808 extends PGN {
 fields: PGN_129808Fields
}

/**
 * @category PGN_129808
 */
export interface PGN_129808Fields {
  dscFormatSymbol?: enums.DscFormat|number
  dscCategorySymbol?: enums.DscCategory|number
  dscMessageAddress?: N2K_Decimal
  _1stTelecommand?: enums.DscFirstTelecommand|number
  subsequentCommunicationModeOr2ndTelecommand?: enums.DscSecondTelecommand|number
  proposedRxFrequencyChannel?: N2K_StringFix
  proposedTxFrequencyChannel?: N2K_StringFix
  telephoneNumber?: N2K_StringLau
  latitudeOfVesselReported?: N2K_Number
  longitudeOfVesselReported?: N2K_Number
  timeOfPosition?: N2K_Time
  mmsiOfShipInDistress?: N2K_Decimal
  dscEosSymbol?: N2K_Number
  expansionEnabled?: enums.YesNo|number
  reserved?: number
  callingRxFrequencyChannel?: N2K_StringFix
  callingTxFrequencyChannel?: N2K_StringFix
  timeOfReceipt?: N2K_Time
  dateOfReceipt?: N2K_Date
  dscEquipmentAssignedMessageId?: N2K_Number
  list: {
    dscExpansionFieldSymbol?: enums.DscExpansionData|number
    dscExpansionFieldData?: N2K_StringLau
  }[]
}

/**
 * @category PGN_129808
 */
export const PGN_129808Defaults = {
  pgn: 129808,
  dst: 255,
  prio: 4
}

/**
 * @category PGN_129808
 */
export const newPGN_129808 = (fields: PGN_129808Fields, dst:number=255) : PGN_129808 => {
  return {
    ...PGN_129808Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129809
  *
  * Description: AIS Class B static data (msg 24 Part A)
  *
  * @category PGN_129809
 */
export interface PGN_129809 extends PGN {
 fields: PGN_129809Fields
}

/**
 * @category PGN_129809
 */
export interface PGN_129809Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: N2K_Mmsi
  name?: N2K_StringFix
  aisTransceiverInformation?: enums.AisTransceiver|number
  reserved?: number
  sequenceId?: N2K_Number
}

/**
 * @category PGN_129809
 */
export const PGN_129809Defaults = {
  pgn: 129809,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129809
 */
export const newPGN_129809 = (fields: PGN_129809Fields, dst:number=255) : PGN_129809 => {
  return {
    ...PGN_129809Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 129810
  *
  * Description: AIS Class B static data (msg 24 Part B)
  *
  * @category PGN_129810
 */
export interface PGN_129810 extends PGN {
 fields: PGN_129810Fields
}

/**
 * @category PGN_129810
 */
export interface PGN_129810Fields {
  messageId?: enums.AisMessageId|number
  repeatIndicator?: enums.RepeatIndicator|number
  userId: N2K_Mmsi
  typeOfShip?: enums.ShipType|number
  vendorId?: N2K_StringFix
  callsign?: N2K_StringFix
  length?: N2K_Number
  beam?: N2K_Number
  positionReferenceFromStarboard?: N2K_Number
  positionReferenceFromBow?: N2K_Number
  mothershipUserId: N2K_Mmsi
  reserved?: number
  spare13?: number
  gnssType?: enums.PositionFixDevice|number
  aisTransceiverInformation?: enums.AisTransceiver|number
  reserved16?: number
  sequenceId?: N2K_Number
}

/**
 * @category PGN_129810
 */
export const PGN_129810Defaults = {
  pgn: 129810,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_129810
 */
export const newPGN_129810 = (fields: PGN_129810Fields, dst:number=255) : PGN_129810 => {
  return {
    ...PGN_129810Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130052
  *
  * Description: Loran-C TD Data
  *
  * @category PGN_130052
 */
export interface PGN_130052 extends PGN {
 fields: PGN_130052Fields
}

/**
 * @category PGN_130052
 */
export interface PGN_130052Fields {
  groupRepetitionIntervalGri?: N2K_Duration
  masterRange?: N2K_Duration
  vSecondaryTd?: N2K_Duration
  wSecondaryTd?: N2K_Duration
  xSecondaryTd?: N2K_Duration
  ySecondaryTd?: N2K_Duration
  zSecondaryTd?: N2K_Duration
  stationStatusMaster?: enums.StationStatus[]
  stationStatusV?: enums.StationStatus[]
  stationStatusW?: enums.StationStatus[]
  stationStatusX?: enums.StationStatus[]
  stationStatusY?: enums.StationStatus[]
  stationStatusZ?: enums.StationStatus[]
  mode?: enums.ResidualMode|number
  reserved?: number
}

/**
 * @category PGN_130052
 */
export const PGN_130052Defaults = {
  pgn: 130052,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130052
 */
export const newPGN_130052 = (fields: PGN_130052Fields, dst:number=255) : PGN_130052 => {
  return {
    ...PGN_130052Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130053
  *
  * Description: Loran-C Range Data
  *
  * @category PGN_130053
 */
export interface PGN_130053 extends PGN {
 fields: PGN_130053Fields
}

/**
 * @category PGN_130053
 */
export interface PGN_130053Fields {
  groupRepetitionIntervalGri?: N2K_Duration
  masterRange?: N2K_Duration
  vSecondaryRange?: N2K_Duration
  wSecondaryRange?: N2K_Duration
  xSecondaryRange?: N2K_Duration
  ySecondaryRange?: N2K_Duration
  zSecondaryRange?: N2K_Duration
  stationStatusMaster?: enums.StationStatus[]
  stationStatusV?: enums.StationStatus[]
  stationStatusW?: enums.StationStatus[]
  stationStatusX?: enums.StationStatus[]
  stationStatusY?: enums.StationStatus[]
  stationStatusZ?: enums.StationStatus[]
  mode?: enums.ResidualMode|number
  reserved?: number
}

/**
 * @category PGN_130053
 */
export const PGN_130053Defaults = {
  pgn: 130053,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130053
 */
export const newPGN_130053 = (fields: PGN_130053Fields, dst:number=255) : PGN_130053 => {
  return {
    ...PGN_130053Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130054
  *
  * Description: Loran-C Signal Data
  *
  * @category PGN_130054
 */
export interface PGN_130054 extends PGN {
 fields: PGN_130054Fields
}

/**
 * @category PGN_130054
 */
export interface PGN_130054Fields {
  groupRepetitionIntervalGri?: N2K_Duration
  stationIdentifier?: N2K_StringFix
  stationSnr?: N2K_Number
  stationEcd?: N2K_Duration
  stationAsf?: N2K_Duration
}

/**
 * @category PGN_130054
 */
export const PGN_130054Defaults = {
  pgn: 130054,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130054
 */
export const newPGN_130054 = (fields: PGN_130054Fields, dst:number=255) : PGN_130054 => {
  return {
    ...PGN_130054Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130060
  *
  * Description: Label
  *
  * @category PGN_130060
 */
export interface PGN_130060 extends PGN {
 fields: PGN_130060Fields
}

/**
 * @category PGN_130060
 */
export interface PGN_130060Fields {
  hardwareChannelId?: N2K_Number
  pgn?: N2K_Pgn
  dataSourceInstanceFieldNumber?: N2K_Number
  dataSourceInstanceValue?: N2K_Number
  secondaryEnumerationFieldNumber?: N2K_Number
  secondaryEnumerationFieldValue?: N2K_Number
  parameterFieldNumber?: N2K_Number
  label?: N2K_StringLau
}

/**
 * @category PGN_130060
 */
export const PGN_130060Defaults = {
  pgn: 130060,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130060
 */
export const newPGN_130060 = (fields: PGN_130060Fields, dst:number=255) : PGN_130060 => {
  return {
    ...PGN_130060Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130061
  *
  * Description: Channel Source Configuration
  *
  * @category PGN_130061
 */
export interface PGN_130061 extends PGN {
 fields: PGN_130061Fields
}

/**
 * @category PGN_130061
 */
export interface PGN_130061Fields {
  dataSourceChannelId?: N2K_Number
  sourceSelectionStatus?: N2K_Number
  reserved?: number
  nameSelectionCriteriaMask?: N2K_Binary
  sourceName?: N2K_IsoName
  pgn?: N2K_Pgn
  dataSourceInstanceFieldNumber?: N2K_Number
  dataSourceInstanceValue?: N2K_Number
  secondaryEnumerationFieldNumber?: N2K_Number
  secondaryEnumerationFieldValue?: N2K_Number
  parameterFieldNumber?: N2K_Number
}

/**
 * @category PGN_130061
 */
export const PGN_130061Defaults = {
  pgn: 130061,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130061
 */
export const newPGN_130061 = (fields: PGN_130061Fields, dst:number=255) : PGN_130061 => {
  return {
    ...PGN_130061Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130064
  *
  * Description: Route and WP Service - Database List
  *
  * @category PGN_130064
 */
export interface PGN_130064 extends PGN {
 fields: PGN_130064Fields
}

/**
 * @category PGN_130064
 */
export interface PGN_130064Fields {
  startDatabaseId?: N2K_Number
  nitems?: N2K_Number
  numberOfDatabasesAvailable?: N2K_Number
  list: {
    databaseId?: N2K_Number
    databaseName?: N2K_StringLau
    databaseTimestamp?: N2K_Time
    databaseDatestamp?: N2K_Date
    wpPositionResolution?: enums.WpPositionResolution|number
    reserved?: number
    numberOfRoutesInDatabase?: N2K_Number
    numberOfWpsInDatabase?: N2K_Number
    numberOfBytesInDatabase?: N2K_Number
  }[]
}

/**
 * @category PGN_130064
 */
export const PGN_130064Defaults = {
  pgn: 130064,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130064
 */
export const newPGN_130064 = (fields: PGN_130064Fields, dst:number=255) : PGN_130064 => {
  return {
    ...PGN_130064Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130065
  *
  * Description: Route and WP Service - Route List
  *
  * @category PGN_130065
 */
export interface PGN_130065 extends PGN {
 fields: PGN_130065Fields
}

/**
 * @category PGN_130065
 */
export interface PGN_130065Fields {
  startRouteId?: N2K_Number
  nitems?: N2K_Number
  numberOfRoutesInDatabase?: N2K_Number
  databaseId?: N2K_Number
  list: {
    routeId?: N2K_Number
    routeName?: N2K_StringLau
    reserved?: number
    wpIdentificationMethod?: enums.WpIdentificationMethod|number
    routeStatus?: enums.WpRouteStatus|number
  }[]
}

/**
 * @category PGN_130065
 */
export const PGN_130065Defaults = {
  pgn: 130065,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130065
 */
export const newPGN_130065 = (fields: PGN_130065Fields, dst:number=255) : PGN_130065 => {
  return {
    ...PGN_130065Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130066
  *
  * Description: Route and WP Service - Route/WP-List Attributes
  *
  * @category PGN_130066
 */
export interface PGN_130066 extends PGN {
 fields: PGN_130066Fields
}

/**
 * @category PGN_130066
 */
export interface PGN_130066Fields {
  databaseId?: N2K_Number
  routeId?: N2K_Number
  routeWpListName?: N2K_StringLau
  routeWpListTimestamp?: N2K_Time
  routeWpListDatestamp?: N2K_Date
  changeAtLastTimestamp?: enums.WpChange[]
  numberOfWpsInTheRouteWpList?: N2K_Number
  criticalSupplementaryParameters?: enums.WpCriticalParameters[]
  navigationMethod?: enums.WpNavigationMethod|number
  wpIdentificationMethod?: enums.WpIdentificationMethod|number
  routeStatus?: enums.WpRouteStatus|number
  xteLimitForTheRoute?: N2K_Number
}

/**
 * @category PGN_130066
 */
export const PGN_130066Defaults = {
  pgn: 130066,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130066
 */
export const newPGN_130066 = (fields: PGN_130066Fields, dst:number=255) : PGN_130066 => {
  return {
    ...PGN_130066Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130067
  *
  * Description: Route and WP Service - Route - WP Name & Position
  *
  * @category PGN_130067
 */
export interface PGN_130067 extends PGN {
 fields: PGN_130067Fields
}

/**
 * @category PGN_130067
 */
export interface PGN_130067Fields {
  startRps?: N2K_Number
  nitems?: N2K_Number
  numberOfWpsInTheRouteWpList?: N2K_Number
  databaseId?: N2K_Number
  routeId?: N2K_Number
  list: {
    wpId?: N2K_Number
    wpName?: N2K_StringLau
    wpLatitude?: N2K_Number
    wpLongitude?: N2K_Number
  }[]
}

/**
 * @category PGN_130067
 */
export const PGN_130067Defaults = {
  pgn: 130067,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130067
 */
export const newPGN_130067 = (fields: PGN_130067Fields, dst:number=255) : PGN_130067 => {
  return {
    ...PGN_130067Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130068
  *
  * Description: Route and WP Service - Route - WP Name
  *
  * @category PGN_130068
 */
export interface PGN_130068 extends PGN {
 fields: PGN_130068Fields
}

/**
 * @category PGN_130068
 */
export interface PGN_130068Fields {
  startRps?: N2K_Number
  nitems?: N2K_Number
  numberOfWpsInTheRouteWpList?: N2K_Number
  databaseId?: N2K_Number
  routeId?: N2K_Number
  list: {
    wpId?: N2K_Number
    wpName?: N2K_StringLau
  }[]
}

/**
 * @category PGN_130068
 */
export const PGN_130068Defaults = {
  pgn: 130068,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130068
 */
export const newPGN_130068 = (fields: PGN_130068Fields, dst:number=255) : PGN_130068 => {
  return {
    ...PGN_130068Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130069
  *
  * Description: Route and WP Service - XTE Limit & Navigation Method
  *
  * @category PGN_130069
 */
export interface PGN_130069 extends PGN {
 fields: PGN_130069Fields
}

/**
 * @category PGN_130069
 */
export interface PGN_130069Fields {
  startRps?: N2K_Number
  nitems?: N2K_Number
  numberOfWpsWithASpecificXteLimitOrNavMethod?: N2K_Number
  list: {
    databaseId?: N2K_Number
    routeId?: N2K_Number
    rps?: N2K_Number
    xteLimitInTheLegAfterWp?: N2K_Number
    navMethodInTheLegAfterWp?: enums.WpNavigationMethod|number
    reserved?: number
  }[]
}

/**
 * @category PGN_130069
 */
export const PGN_130069Defaults = {
  pgn: 130069,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130069
 */
export const newPGN_130069 = (fields: PGN_130069Fields, dst:number=255) : PGN_130069 => {
  return {
    ...PGN_130069Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130070
  *
  * Description: Route and WP Service - WP Comment
  *
  * @category PGN_130070
 */
export interface PGN_130070 extends PGN {
 fields: PGN_130070Fields
}

/**
 * @category PGN_130070
 */
export interface PGN_130070Fields {
  startId?: N2K_Number
  nitems?: N2K_Number
  numberOfWpsWithComments?: N2K_Number
  databaseId?: N2K_Number
  routeId?: N2K_Number
  list: {
    wpIdRps?: N2K_Number
    comment?: N2K_StringLau
  }[]
}

/**
 * @category PGN_130070
 */
export const PGN_130070Defaults = {
  pgn: 130070,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130070
 */
export const newPGN_130070 = (fields: PGN_130070Fields, dst:number=255) : PGN_130070 => {
  return {
    ...PGN_130070Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130071
  *
  * Description: Route and WP Service - Route Comment
  *
  * @category PGN_130071
 */
export interface PGN_130071 extends PGN {
 fields: PGN_130071Fields
}

/**
 * @category PGN_130071
 */
export interface PGN_130071Fields {
  startRouteId?: N2K_Number
  nitems?: N2K_Number
  numberOfRoutesWithComments?: N2K_Number
  databaseId?: N2K_Number
  list: {
    routeId?: N2K_Number
    comment?: N2K_StringLau
  }[]
}

/**
 * @category PGN_130071
 */
export const PGN_130071Defaults = {
  pgn: 130071,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130071
 */
export const newPGN_130071 = (fields: PGN_130071Fields, dst:number=255) : PGN_130071 => {
  return {
    ...PGN_130071Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130072
  *
  * Description: Route and WP Service - Database Comment
  *
  * @category PGN_130072
 */
export interface PGN_130072 extends PGN {
 fields: PGN_130072Fields
}

/**
 * @category PGN_130072
 */
export interface PGN_130072Fields {
  startDatabaseId?: N2K_Number
  nitems?: N2K_Number
  numberOfDatabasesWithComments?: N2K_Number
  list: {
    databaseId?: N2K_Number
    comment?: N2K_StringLau
  }[]
}

/**
 * @category PGN_130072
 */
export const PGN_130072Defaults = {
  pgn: 130072,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130072
 */
export const newPGN_130072 = (fields: PGN_130072Fields, dst:number=255) : PGN_130072 => {
  return {
    ...PGN_130072Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130073
  *
  * Description: Route and WP Service - Radius of Turn
  *
  * @category PGN_130073
 */
export interface PGN_130073 extends PGN {
 fields: PGN_130073Fields
}

/**
 * @category PGN_130073
 */
export interface PGN_130073Fields {
  startRps?: N2K_Number
  nitems?: N2K_Number
  numberOfWpsWithASpecificRadiusOfTurn?: N2K_Number
  databaseId?: N2K_Number
  routeId?: N2K_Number
  list: {
    rps?: N2K_Number
    radiusOfTurn?: N2K_Number
  }[]
}

/**
 * @category PGN_130073
 */
export const PGN_130073Defaults = {
  pgn: 130073,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130073
 */
export const newPGN_130073 = (fields: PGN_130073Fields, dst:number=255) : PGN_130073 => {
  return {
    ...PGN_130073Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130074
  *
  * Description: Route and WP Service - WP List - WP Name & Position
  *
  * @category PGN_130074
 */
export interface PGN_130074 extends PGN {
 fields: PGN_130074Fields
}

/**
 * @category PGN_130074
 */
export interface PGN_130074Fields {
  startWpId?: N2K_Number
  nitems?: N2K_Number
  numberOfValidWpsInTheWpList?: N2K_Number
  databaseId?: N2K_Number
  reserved?: number
  list: {
    wpId?: N2K_Number
    wpName?: N2K_StringLau
    wpLatitude?: N2K_Number
    wpLongitude?: N2K_Number
  }[]
}

/**
 * @category PGN_130074
 */
export const PGN_130074Defaults = {
  pgn: 130074,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130074
 */
export const newPGN_130074 = (fields: PGN_130074Fields, dst:number=255) : PGN_130074 => {
  return {
    ...PGN_130074Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130306
  *
  * Description: Wind Data
  *
  * @category PGN_130306
 */
export interface PGN_130306 extends PGN {
 fields: PGN_130306Fields
}

/**
 * @category PGN_130306
 */
export interface PGN_130306Fields {
  sid?: N2K_Number
  windSpeed?: N2K_Number
  windAngle?: N2K_Number
  reference: enums.WindReference|number
  reserved?: number
}

/**
 * @category PGN_130306
 */
export const PGN_130306Defaults = {
  pgn: 130306,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_130306
 */
export const newPGN_130306 = (fields: PGN_130306Fields, dst:number=255) : PGN_130306 => {
  return {
    ...PGN_130306Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130310
  *
  * Description: Environmental Parameters (obsolete)
  *
  * Explanation: This PGN was succeeded by PGN 130310, but it should no longer be generated and separate PGNs in range 130312..130315 should be used
  *
  * @category PGN_130310
 */
export interface PGN_130310 extends PGN {
 fields: PGN_130310Fields
}

/**
 * @category PGN_130310
 */
export interface PGN_130310Fields {
  sid?: N2K_Number
  waterTemperature?: N2K_Number
  outsideAmbientAirTemperature?: N2K_Number
  atmosphericPressure?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_130310
 */
export const PGN_130310Defaults = {
  pgn: 130310,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_130310
 */
export const newPGN_130310 = (fields: PGN_130310Fields, dst:number=255) : PGN_130310 => {
  return {
    ...PGN_130310Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130311
  *
  * Description: Environmental Parameters
  *
  * Explanation: This PGN was introduced as a better version of PGN 130310, but it should no longer be generated and separate PGNs in range 130312..130315 should be used
  *
  * @category PGN_130311
 */
export interface PGN_130311 extends PGN {
 fields: PGN_130311Fields
}

/**
 * @category PGN_130311
 */
export interface PGN_130311Fields {
  sid?: N2K_Number
  temperatureSource: enums.TemperatureSource|number
  humiditySource?: enums.HumiditySource|number
  temperature?: N2K_Number
  humidity?: N2K_Number
  atmosphericPressure?: N2K_Number
}

/**
 * @category PGN_130311
 */
export const PGN_130311Defaults = {
  pgn: 130311,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_130311
 */
export const newPGN_130311 = (fields: PGN_130311Fields, dst:number=255) : PGN_130311 => {
  return {
    ...PGN_130311Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130312
  *
  * Description: Temperature
  *
  * @category PGN_130312
 */
export interface PGN_130312 extends PGN {
 fields: PGN_130312Fields
}

/**
 * @category PGN_130312
 */
export interface PGN_130312Fields {
  sid?: N2K_Number
  instance: N2K_Number
  source: enums.TemperatureSource|number
  actualTemperature?: N2K_Number
  setTemperature?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_130312
 */
export const PGN_130312Defaults = {
  pgn: 130312,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_130312
 */
export const newPGN_130312 = (fields: PGN_130312Fields, dst:number=255) : PGN_130312 => {
  return {
    ...PGN_130312Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130313
  *
  * Description: Humidity
  *
  * @category PGN_130313
 */
export interface PGN_130313 extends PGN {
 fields: PGN_130313Fields
}

/**
 * @category PGN_130313
 */
export interface PGN_130313Fields {
  sid?: N2K_Number
  instance: N2K_Number
  source: enums.HumiditySource|number
  actualHumidity?: N2K_Number
  setHumidity?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_130313
 */
export const PGN_130313Defaults = {
  pgn: 130313,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_130313
 */
export const newPGN_130313 = (fields: PGN_130313Fields, dst:number=255) : PGN_130313 => {
  return {
    ...PGN_130313Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130314
  *
  * Description: Actual Pressure
  *
  * @category PGN_130314
 */
export interface PGN_130314 extends PGN {
 fields: PGN_130314Fields
}

/**
 * @category PGN_130314
 */
export interface PGN_130314Fields {
  sid?: N2K_Number
  instance: N2K_Number
  source: enums.PressureSource|number
  pressure?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_130314
 */
export const PGN_130314Defaults = {
  pgn: 130314,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_130314
 */
export const newPGN_130314 = (fields: PGN_130314Fields, dst:number=255) : PGN_130314 => {
  return {
    ...PGN_130314Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130315
  *
  * Description: Set Pressure
  *
  * @category PGN_130315
 */
export interface PGN_130315 extends PGN {
 fields: PGN_130315Fields
}

/**
 * @category PGN_130315
 */
export interface PGN_130315Fields {
  sid?: N2K_Number
  instance: N2K_Number
  source: enums.PressureSource|number
  pressure?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_130315
 */
export const PGN_130315Defaults = {
  pgn: 130315,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_130315
 */
export const newPGN_130315 = (fields: PGN_130315Fields, dst:number=255) : PGN_130315 => {
  return {
    ...PGN_130315Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130316
  *
  * Description: Temperature Extended Range
  *
  * @category PGN_130316
 */
export interface PGN_130316 extends PGN {
 fields: PGN_130316Fields
}

/**
 * @category PGN_130316
 */
export interface PGN_130316Fields {
  sid?: N2K_Number
  instance: N2K_Number
  source: enums.TemperatureSource|number
  temperature?: N2K_Number
  setTemperature?: N2K_Number
}

/**
 * @category PGN_130316
 */
export const PGN_130316Defaults = {
  pgn: 130316,
  dst: 255,
  prio: 5
}

/**
 * @category PGN_130316
 */
export const newPGN_130316 = (fields: PGN_130316Fields, dst:number=255) : PGN_130316 => {
  return {
    ...PGN_130316Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130320
  *
  * Description: Tide Station Data
  *
  * @category PGN_130320
 */
export interface PGN_130320 extends PGN {
 fields: PGN_130320Fields
}

/**
 * @category PGN_130320
 */
export interface PGN_130320Fields {
  mode?: enums.ResidualMode|number
  tideTendency?: enums.Tide|number
  reserved?: number
  measurementDate?: N2K_Date
  measurementTime?: N2K_Time
  stationLatitude?: N2K_Number
  stationLongitude?: N2K_Number
  tideLevel?: N2K_Number
  tideLevelStandardDeviation?: N2K_Number
  stationId: N2K_StringLau
  stationName?: N2K_StringLau
}

/**
 * @category PGN_130320
 */
export const PGN_130320Defaults = {
  pgn: 130320,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_130320
 */
export const newPGN_130320 = (fields: PGN_130320Fields, dst:number=255) : PGN_130320 => {
  return {
    ...PGN_130320Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130321
  *
  * Description: Salinity Station Data
  *
  * @category PGN_130321
 */
export interface PGN_130321 extends PGN {
 fields: PGN_130321Fields
}

/**
 * @category PGN_130321
 */
export interface PGN_130321Fields {
  mode?: enums.ResidualMode|number
  reserved?: number
  measurementDate?: N2K_Date
  measurementTime?: N2K_Time
  stationLatitude?: N2K_Number
  stationLongitude?: N2K_Number
  salinity?: N2K_Float
  waterTemperature?: N2K_Number
  stationId?: N2K_StringLau
  stationName?: N2K_StringLau
}

/**
 * @category PGN_130321
 */
export const PGN_130321Defaults = {
  pgn: 130321,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_130321
 */
export const newPGN_130321 = (fields: PGN_130321Fields, dst:number=255) : PGN_130321 => {
  return {
    ...PGN_130321Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130322
  *
  * Description: Current Station Data
  *
  * @category PGN_130322
 */
export interface PGN_130322 extends PGN {
 fields: PGN_130322Fields
}

/**
 * @category PGN_130322
 */
export interface PGN_130322Fields {
  mode?: enums.ResidualMode|number
  state?: enums.FloodState|number
  reserved?: number
  measurementDate?: N2K_Date
  measurementTime?: N2K_Time
  stationLatitude?: N2K_Number
  stationLongitude?: N2K_Number
  measurementDepth?: N2K_Number
  currentSpeed?: N2K_Number
  currentFlowDirection?: N2K_Number
  waterTemperature?: N2K_Number
  stationId: N2K_StringLau
  stationName?: N2K_StringLau
}

/**
 * @category PGN_130322
 */
export const PGN_130322Defaults = {
  pgn: 130322,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_130322
 */
export const newPGN_130322 = (fields: PGN_130322Fields, dst:number=255) : PGN_130322 => {
  return {
    ...PGN_130322Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130323
  *
  * Description: Meteorological Station Data
  *
  * @category PGN_130323
 */
export interface PGN_130323 extends PGN {
 fields: PGN_130323Fields
}

/**
 * @category PGN_130323
 */
export interface PGN_130323Fields {
  mode?: enums.ResidualMode|number
  reserved?: number
  measurementDate?: N2K_Date
  measurementTime?: N2K_Time
  stationLatitude?: N2K_Number
  stationLongitude?: N2K_Number
  windSpeed?: N2K_Number
  windDirection?: N2K_Number
  windReference?: enums.WindReference|number
  reserved10?: number
  windGusts?: N2K_Number
  atmosphericPressure?: N2K_Number
  ambientTemperature?: N2K_Number
  stationId: N2K_StringLau
  stationName?: N2K_StringLau
}

/**
 * @category PGN_130323
 */
export const PGN_130323Defaults = {
  pgn: 130323,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_130323
 */
export const newPGN_130323 = (fields: PGN_130323Fields, dst:number=255) : PGN_130323 => {
  return {
    ...PGN_130323Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130324
  *
  * Description: Moored Buoy Station Data
  *
  * @category PGN_130324
 */
export interface PGN_130324 extends PGN {
 fields: PGN_130324Fields
}

/**
 * @category PGN_130324
 */
export interface PGN_130324Fields {
  mode?: enums.ResidualMode|number
  reserved?: number
  measurementDate?: N2K_Date
  measurementTime?: N2K_Time
  stationLatitude?: N2K_Number
  stationLongitude?: N2K_Number
  windSpeed?: N2K_Number
  windDirection?: N2K_Number
  windReference?: enums.WindReference|number
  reserved10?: number
  windGusts?: N2K_Number
  waveHeight?: N2K_Number
  dominantWavePeriod?: N2K_Duration
  atmosphericPressure?: N2K_Number
  pressureTendencyRate?: N2K_Number
  airTemperature?: N2K_Number
  waterTemperature?: N2K_Number
  stationId: N2K_StringLau
}

/**
 * @category PGN_130324
 */
export const PGN_130324Defaults = {
  pgn: 130324,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_130324
 */
export const newPGN_130324 = (fields: PGN_130324Fields, dst:number=255) : PGN_130324 => {
  return {
    ...PGN_130324Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130330
  *
  * Description: Lighting System Settings
  *
  * Explanation: This PGN provides a lighting controller settings and number of supported capabilities.
  *
  * @category PGN_130330
 */
export interface PGN_130330 extends PGN {
 fields: PGN_130330Fields
}

/**
 * @category PGN_130330
 */
export interface PGN_130330Fields {
  globalEnable?: N2K_Number
  defaultSettingsCommand?: enums.LightingCommand|number
  reserved?: number
  nameOfTheLightingController?: N2K_StringLau
  maxScenes?: N2K_Number
  maxSceneConfigurationCount?: N2K_Number
  maxZones?: N2K_Number
  maxColorSequences?: N2K_Number
  maxColorSequenceColorCount?: N2K_Number
  numberOfPrograms?: N2K_Number
  controllerCapabilities?: N2K_Number
  identifyDevice?: N2K_Number
}

/**
 * @category PGN_130330
 */
export const PGN_130330Defaults = {
  pgn: 130330,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130330
 */
export const newPGN_130330 = (fields: PGN_130330Fields, dst:number=255) : PGN_130330 => {
  return {
    ...PGN_130330Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130560
  *
  * Description: Payload Mass
  *
  * @category PGN_130560
 */
export interface PGN_130560 extends PGN {
 fields: PGN_130560Fields
}

/**
 * @category PGN_130560
 */
export interface PGN_130560Fields {
  sid?: N2K_Number
  measurementStatus?: N2K_Number
  reserved?: number
  measurementId?: N2K_Number
  payloadMass?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_130560
 */
export const PGN_130560Defaults = {
  pgn: 130560,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130560
 */
export const newPGN_130560 = (fields: PGN_130560Fields, dst:number=255) : PGN_130560 => {
  return {
    ...PGN_130560Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130561
  *
  * Description: Lighting Zone
  *
  * Explanation: This PGN is used to report or configure a name for a given zone. A zone is a grouping of devices that are controlled by a Scene. This PGN is only sent upon request.
  *
  * @category PGN_130561
 */
export interface PGN_130561 extends PGN {
 fields: PGN_130561Fields
}

/**
 * @category PGN_130561
 */
export interface PGN_130561Fields {
  zoneIndex?: N2K_Number
  zoneName?: N2K_StringLau
  redComponent?: N2K_Number
  greenComponent?: N2K_Number
  blueComponent?: N2K_Number
  colorTemperature?: N2K_Number
  intensity?: N2K_Number
  programId?: N2K_Number
  programColorSequenceIndex?: N2K_Number
  programIntensity?: N2K_Number
  programRate?: N2K_Number
  programColorSequence?: N2K_Number
  zoneEnabled?: enums.OffOn|number
  reserved?: number
}

/**
 * @category PGN_130561
 */
export const PGN_130561Defaults = {
  pgn: 130561,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130561
 */
export const newPGN_130561 = (fields: PGN_130561Fields, dst:number=255) : PGN_130561 => {
  return {
    ...PGN_130561Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130562
  *
  * Description: Lighting Scene
  *
  * Explanation: A Lighting Scene is a sequence of zone program configurations.
  *
  * @category PGN_130562
 */
export interface PGN_130562 extends PGN {
 fields: PGN_130562Fields
}

/**
 * @category PGN_130562
 */
export interface PGN_130562Fields {
  sceneIndex?: N2K_Number
  zoneName?: N2K_StringLau
  control?: N2K_Number
  configurationCount?: N2K_Number
  list: {
    configurationIndex?: N2K_Number
    zoneIndex?: N2K_Number
    devicesId?: N2K_Number
    programIndex?: N2K_Number
    programColorSequenceIndex?: N2K_Number
    programIntensity?: N2K_Number
    programRate?: N2K_Number
    programColorSequenceRate?: N2K_Number
  }[]
}

/**
 * @category PGN_130562
 */
export const PGN_130562Defaults = {
  pgn: 130562,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130562
 */
export const newPGN_130562 = (fields: PGN_130562Fields, dst:number=255) : PGN_130562 => {
  return {
    ...PGN_130562Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130563
  *
  * Description: Lighting Device
  *
  * Explanation: This PGN is used to provide status and capabilities of a lighting device. A lighting device may be a virtual device connected to a lighting controller or physical device on the network.
  *
  * @category PGN_130563
 */
export interface PGN_130563 extends PGN {
 fields: PGN_130563Fields
}

/**
 * @category PGN_130563
 */
export interface PGN_130563Fields {
  deviceId?: N2K_Number
  deviceCapabilities?: N2K_Number
  colorCapabilities?: N2K_Number
  zoneIndex?: N2K_Number
  nameOfLightingDevice?: N2K_StringLau
  status?: N2K_Number
  redComponent?: N2K_Number
  greenComponent?: N2K_Number
  blueComponent?: N2K_Number
  colorTemperature?: N2K_Number
  intensity?: N2K_Number
  programId?: N2K_Number
  programColorSequenceIndex?: N2K_Number
  programIntensity?: N2K_Number
  programRate?: N2K_Number
  programColorSequenceRate?: N2K_Number
  enabled?: enums.OffOn|number
  reserved?: number
}

/**
 * @category PGN_130563
 */
export const PGN_130563Defaults = {
  pgn: 130563,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130563
 */
export const newPGN_130563 = (fields: PGN_130563Fields, dst:number=255) : PGN_130563 => {
  return {
    ...PGN_130563Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130564
  *
  * Description: Lighting Device Enumeration
  *
  * Explanation: This PGN allows for enumeration of the lighting devices on the controller.
  *
  * @category PGN_130564
 */
export interface PGN_130564 extends PGN {
 fields: PGN_130564Fields
}

/**
 * @category PGN_130564
 */
export interface PGN_130564Fields {
  indexOfFirstDevice?: N2K_Number
  totalNumberOfDevices?: N2K_Number
  numberOfDevices?: N2K_Number
  list: {
    deviceId?: N2K_Number
    status?: N2K_Number
  }[]
}

/**
 * @category PGN_130564
 */
export const PGN_130564Defaults = {
  pgn: 130564,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130564
 */
export const newPGN_130564 = (fields: PGN_130564Fields, dst:number=255) : PGN_130564 => {
  return {
    ...PGN_130564Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130565
  *
  * Description: Lighting Color Sequence
  *
  * Explanation: Sequences could be 1 to (PGN Lighting - System Configuration) Max Color Sequence Color Count colors.
  *
  * @category PGN_130565
 */
export interface PGN_130565 extends PGN {
 fields: PGN_130565Fields
}

/**
 * @category PGN_130565
 */
export interface PGN_130565Fields {
  sequenceIndex?: N2K_Number
  colorCount?: N2K_Number
  list: {
    colorIndex?: N2K_Number
    redComponent?: N2K_Number
    greenComponent?: N2K_Number
    blueComponent?: N2K_Number
    colorTemperature?: N2K_Number
    intensity?: N2K_Number
  }[]
}

/**
 * @category PGN_130565
 */
export const PGN_130565Defaults = {
  pgn: 130565,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130565
 */
export const newPGN_130565 = (fields: PGN_130565Fields, dst:number=255) : PGN_130565 => {
  return {
    ...PGN_130565Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130566
  *
  * Description: Lighting Program
  *
  * Explanation: This PGN describes an available program on the controller. Can be a built in required NMEA one or a custom vendor program.
  *
  * @category PGN_130566
 */
export interface PGN_130566 extends PGN {
 fields: PGN_130566Fields
}

/**
 * @category PGN_130566
 */
export interface PGN_130566Fields {
  programId?: N2K_Number
  nameOfProgram?: N2K_StringLau
  description?: N2K_StringLau
  programCapabilities?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_130566
 */
export const PGN_130566Defaults = {
  pgn: 130566,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130566
 */
export const newPGN_130566 = (fields: PGN_130566Fields, dst:number=255) : PGN_130566 => {
  return {
    ...PGN_130566Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130567
  *
  * Description: Watermaker Input Setting and Status
  *
  * @category PGN_130567
 */
export interface PGN_130567 extends PGN {
 fields: PGN_130567Fields
}

/**
 * @category PGN_130567
 */
export interface PGN_130567Fields {
  watermakerOperatingState?: enums.WatermakerState|number
  productionStartStop?: enums.YesNo|number
  rinseStartStop?: enums.YesNo|number
  lowPressurePumpStatus?: enums.YesNo|number
  highPressurePumpStatus?: enums.YesNo|number
  emergencyStop?: enums.YesNo|number
  productSolenoidValveStatus?: enums.OkWarning|number
  flushModeStatus?: enums.YesNo|number
  salinityStatus?: enums.OkWarning|number
  sensorStatus?: enums.OkWarning|number
  oilChangeIndicatorStatus?: enums.OkWarning|number
  filterStatus?: enums.OkWarning|number
  systemStatus?: enums.OkWarning|number
  reserved?: number
  salinity?: N2K_Number
  productWaterTemperature?: N2K_Number
  preFilterPressure?: N2K_Number
  postFilterPressure?: N2K_Number
  feedPressure?: N2K_Number
  systemHighPressure?: N2K_Number
  productWaterFlow?: N2K_Number
  brineWaterFlow?: N2K_Number
  runTime?: N2K_Duration
}

/**
 * @category PGN_130567
 */
export const PGN_130567Defaults = {
  pgn: 130567,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130567
 */
export const newPGN_130567 = (fields: PGN_130567Fields, dst:number=255) : PGN_130567 => {
  return {
    ...PGN_130567Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130569
  *
  * Description: Current Status and File
  *
  * @category PGN_130569
 */
export interface PGN_130569 extends PGN {
 fields: PGN_130569Fields
}

/**
 * @category PGN_130569
 */
export interface PGN_130569Fields {
  zone?: enums.EntertainmentZone|number
  source?: enums.EntertainmentSource|number
  number?: N2K_Number
  id?: N2K_Number
  playStatus?: enums.EntertainmentPlayStatus|number
  elapsedTrackTime?: N2K_Duration
  trackTime?: N2K_Duration
  repeatStatus?: enums.EntertainmentRepeatStatus|number
  shuffleStatus?: enums.EntertainmentShuffleStatus|number
  saveFavoriteNumber?: N2K_Number
  playFavoriteNumber?: N2K_Number
  thumbsUpDown?: enums.EntertainmentLikeStatus|number
  signalStrength?: N2K_Number
  radioFrequency?: N2K_Number
  hdFrequencyMulticast?: N2K_Number
  deleteFavoriteNumber?: N2K_Number
  totalNumberOfTracks?: N2K_Number
}

/**
 * @category PGN_130569
 */
export const PGN_130569Defaults = {
  pgn: 130569,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130569
 */
export const newPGN_130569 = (fields: PGN_130569Fields, dst:number=255) : PGN_130569 => {
  return {
    ...PGN_130569Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130570
  *
  * Description: Library Data File
  *
  * @category PGN_130570
 */
export interface PGN_130570 extends PGN {
 fields: PGN_130570Fields
}

/**
 * @category PGN_130570
 */
export interface PGN_130570Fields {
  source?: enums.EntertainmentSource|number
  number?: N2K_Number
  id?: N2K_Number
  type?: enums.EntertainmentType|number
  name?: N2K_StringLau
  track?: N2K_Number
  station?: N2K_Number
  favorite?: N2K_Number
  radioFrequency?: N2K_Number
  hdFrequency?: N2K_Number
  zone?: enums.EntertainmentZone|number
  inPlayQueue?: enums.YesNo|number
  locked?: enums.YesNo|number
  reserved?: number
  artistName?: N2K_StringLau
  albumName?: N2K_StringLau
  stationName?: N2K_StringLau
}

/**
 * @category PGN_130570
 */
export const PGN_130570Defaults = {
  pgn: 130570,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130570
 */
export const newPGN_130570 = (fields: PGN_130570Fields, dst:number=255) : PGN_130570 => {
  return {
    ...PGN_130570Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130571
  *
  * Description: Library Data Group
  *
  * @category PGN_130571
 */
export interface PGN_130571 extends PGN {
 fields: PGN_130571Fields
}

/**
 * @category PGN_130571
 */
export interface PGN_130571Fields {
  source?: enums.EntertainmentSource|number
  number?: N2K_Number
  type?: enums.EntertainmentType|number
  zone?: enums.EntertainmentZone|number
  groupId?: N2K_Number
  idOffset?: N2K_Number
  idCount?: N2K_Number
  totalIdCount?: N2K_Number
  artist?: N2K_StringLau
  list: {
    idType?: enums.EntertainmentIdType|number
    id?: N2K_Number
    name?: N2K_StringLau
  }[]
}

/**
 * @category PGN_130571
 */
export const PGN_130571Defaults = {
  pgn: 130571,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130571
 */
export const newPGN_130571 = (fields: PGN_130571Fields, dst:number=255) : PGN_130571 => {
  return {
    ...PGN_130571Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130572
  *
  * Description: Library Data Search
  *
  * @category PGN_130572
 */
export interface PGN_130572 extends PGN {
 fields: PGN_130572Fields
}

/**
 * @category PGN_130572
 */
export interface PGN_130572Fields {
  source?: enums.EntertainmentSource|number
  number?: N2K_Number
  groupId?: N2K_Number
  groupType1?: enums.EntertainmentGroup|number
  groupName1?: N2K_StringLau
  groupType2?: enums.EntertainmentGroup|number
  groupName2?: N2K_StringLau
  groupType3?: enums.EntertainmentGroup|number
  groupName3?: N2K_StringLau
}

/**
 * @category PGN_130572
 */
export const PGN_130572Defaults = {
  pgn: 130572,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130572
 */
export const newPGN_130572 = (fields: PGN_130572Fields, dst:number=255) : PGN_130572 => {
  return {
    ...PGN_130572Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130573
  *
  * Description: Supported Source Data
  *
  * @category PGN_130573
 */
export interface PGN_130573 extends PGN {
 fields: PGN_130573Fields
}

/**
 * @category PGN_130573
 */
export interface PGN_130573Fields {
  idOffset?: N2K_Number
  idCount?: N2K_Number
  totalIdCount?: N2K_Number
  list: {
    id?: N2K_Number
    source?: enums.EntertainmentSource|number
    number?: N2K_Number
    name?: N2K_StringLau
    playSupport?: enums.EntertainmentPlayStatusBitfield[]
    browseSupport?: enums.EntertainmentGroupBitfield[]
    thumbsSupport?: enums.YesNo|number
    connected?: enums.YesNo|number
    repeatSupport?: enums.EntertainmentRepeatBitfield[]
    shuffleSupport?: enums.EntertainmentShuffleBitfield[]
  }[]
}

/**
 * @category PGN_130573
 */
export const PGN_130573Defaults = {
  pgn: 130573,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130573
 */
export const newPGN_130573 = (fields: PGN_130573Fields, dst:number=255) : PGN_130573 => {
  return {
    ...PGN_130573Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130574
  *
  * Description: Supported Zone Data
  *
  * @category PGN_130574
 */
export interface PGN_130574 extends PGN {
 fields: PGN_130574Fields
}

/**
 * @category PGN_130574
 */
export interface PGN_130574Fields {
  firstZoneId?: N2K_Number
  zoneCount?: N2K_Number
  totalZoneCount?: N2K_Number
  list: {
    zoneId?: enums.EntertainmentZone|number
    name?: N2K_StringLau
  }[]
}

/**
 * @category PGN_130574
 */
export const PGN_130574Defaults = {
  pgn: 130574,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130574
 */
export const newPGN_130574 = (fields: PGN_130574Fields, dst:number=255) : PGN_130574 => {
  return {
    ...PGN_130574Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130576
  *
  * Description: Small Craft Status
  *
  * @category PGN_130576
 */
export interface PGN_130576 extends PGN {
 fields: PGN_130576Fields
}

/**
 * @category PGN_130576
 */
export interface PGN_130576Fields {
  portTrimTab?: N2K_Number
  starboardTrimTab?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_130576
 */
export const PGN_130576Defaults = {
  pgn: 130576,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_130576
 */
export const newPGN_130576 = (fields: PGN_130576Fields, dst:number=255) : PGN_130576 => {
  return {
    ...PGN_130576Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130577
  *
  * Description: Direction Data
  *
  * @category PGN_130577
 */
export interface PGN_130577 extends PGN {
 fields: PGN_130577Fields
}

/**
 * @category PGN_130577
 */
export interface PGN_130577Fields {
  dataMode?: enums.ResidualMode|number
  cogReference?: enums.DirectionReference|number
  reserved?: number
  sid?: N2K_Number
  cog?: N2K_Number
  sog?: N2K_Number
  heading?: N2K_Number
  speedThroughWater?: N2K_Number
  set?: N2K_Number
  drift?: N2K_Number
}

/**
 * @category PGN_130577
 */
export const PGN_130577Defaults = {
  pgn: 130577,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130577
 */
export const newPGN_130577 = (fields: PGN_130577Fields, dst:number=255) : PGN_130577 => {
  return {
    ...PGN_130577Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130578
  *
  * Description: Vessel Speed Components
  *
  * @category PGN_130578
 */
export interface PGN_130578 extends PGN {
 fields: PGN_130578Fields
}

/**
 * @category PGN_130578
 */
export interface PGN_130578Fields {
  longitudinalSpeedWaterReferenced?: N2K_Number
  transverseSpeedWaterReferenced?: N2K_Number
  longitudinalSpeedGroundReferenced?: N2K_Number
  transverseSpeedGroundReferenced?: N2K_Number
  sternSpeedWaterReferenced?: N2K_Number
  sternSpeedGroundReferenced?: N2K_Number
}

/**
 * @category PGN_130578
 */
export const PGN_130578Defaults = {
  pgn: 130578,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_130578
 */
export const newPGN_130578 = (fields: PGN_130578Fields, dst:number=255) : PGN_130578 => {
  return {
    ...PGN_130578Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130579
  *
  * Description: System Configuration
  *
  * @category PGN_130579
 */
export interface PGN_130579 extends PGN {
 fields: PGN_130579Fields
}

/**
 * @category PGN_130579
 */
export interface PGN_130579Fields {
  power?: enums.YesNo|number
  defaultSettings?: enums.EntertainmentDefaultSettings|number
  tunerRegions?: enums.EntertainmentRegions|number
  maxFavorites?: N2K_Number
  videoProtocols?: enums.VideoProtocols|number
  reserved?: number
}

/**
 * @category PGN_130579
 */
export const PGN_130579Defaults = {
  pgn: 130579,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130579
 */
export const newPGN_130579 = (fields: PGN_130579Fields, dst:number=255) : PGN_130579 => {
  return {
    ...PGN_130579Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130580
  *
  * Description: System Configuration (deprecated)
  *
  * @category PGN_130580
 */
export interface PGN_130580 extends PGN {
 fields: PGN_130580Fields
}

/**
 * @category PGN_130580
 */
export interface PGN_130580Fields {
  power?: enums.YesNo|number
  defaultSettings?: enums.EntertainmentDefaultSettings|number
  tunerRegions?: enums.EntertainmentRegions|number
  maxFavorites?: N2K_Number
}

/**
 * @category PGN_130580
 */
export const PGN_130580Defaults = {
  pgn: 130580,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130580
 */
export const newPGN_130580 = (fields: PGN_130580Fields, dst:number=255) : PGN_130580 => {
  return {
    ...PGN_130580Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130581
  *
  * Description: Zone Configuration (deprecated)
  *
  * @category PGN_130581
 */
export interface PGN_130581 extends PGN {
 fields: PGN_130581Fields
}

/**
 * @category PGN_130581
 */
export interface PGN_130581Fields {
  firstZoneId?: N2K_Number
  zoneCount?: N2K_Number
  totalZoneCount?: N2K_Number
  list: {
    zoneId?: enums.EntertainmentZone|number
    zoneName?: N2K_StringLau
  }[]
}

/**
 * @category PGN_130581
 */
export const PGN_130581Defaults = {
  pgn: 130581,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130581
 */
export const newPGN_130581 = (fields: PGN_130581Fields, dst:number=255) : PGN_130581 => {
  return {
    ...PGN_130581Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130582
  *
  * Description: Zone Volume
  *
  * @category PGN_130582
 */
export interface PGN_130582 extends PGN {
 fields: PGN_130582Fields
}

/**
 * @category PGN_130582
 */
export interface PGN_130582Fields {
  zoneId?: enums.EntertainmentZone|number
  volume?: N2K_Number
  volumeChange?: enums.EntertainmentVolumeControl|number
  mute?: enums.YesNo|number
  reserved?: number
  channel?: enums.EntertainmentChannel|number
  reserved7?: number
}

/**
 * @category PGN_130582
 */
export const PGN_130582Defaults = {
  pgn: 130582,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130582
 */
export const newPGN_130582 = (fields: PGN_130582Fields, dst:number=255) : PGN_130582 => {
  return {
    ...PGN_130582Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130583
  *
  * Description: Available Audio EQ presets
  *
  * @category PGN_130583
 */
export interface PGN_130583 extends PGN {
 fields: PGN_130583Fields
}

/**
 * @category PGN_130583
 */
export interface PGN_130583Fields {
  firstPreset?: N2K_Number
  presetCount?: N2K_Number
  totalPresetCount?: N2K_Number
  list: {
    presetType?: enums.EntertainmentEq|number
    presetName?: N2K_StringLau
  }[]
}

/**
 * @category PGN_130583
 */
export const PGN_130583Defaults = {
  pgn: 130583,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130583
 */
export const newPGN_130583 = (fields: PGN_130583Fields, dst:number=255) : PGN_130583 => {
  return {
    ...PGN_130583Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130584
  *
  * Description: Available Bluetooth addresses
  *
  * @category PGN_130584
 */
export interface PGN_130584 extends PGN {
 fields: PGN_130584Fields
}

/**
 * @category PGN_130584
 */
export interface PGN_130584Fields {
  firstAddress?: N2K_Number
  addressCount?: N2K_Number
  totalAddressCount?: N2K_Number
  list: {
    bluetoothAddress?: N2K_Binary
    status?: enums.BluetoothStatus|number
    deviceName?: N2K_StringLau
    signalStrength?: N2K_Number
  }[]
}

/**
 * @category PGN_130584
 */
export const PGN_130584Defaults = {
  pgn: 130584,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130584
 */
export const newPGN_130584 = (fields: PGN_130584Fields, dst:number=255) : PGN_130584 => {
  return {
    ...PGN_130584Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130585
  *
  * Description: Bluetooth source status
  *
  * @category PGN_130585
 */
export interface PGN_130585 extends PGN {
 fields: PGN_130585Fields
}

/**
 * @category PGN_130585
 */
export interface PGN_130585Fields {
  sourceNumber?: N2K_Number
  status?: enums.BluetoothSourceStatus|number
  forgetDevice?: enums.YesNo|number
  discovering?: enums.YesNo|number
  bluetoothAddress?: N2K_Binary
}

/**
 * @category PGN_130585
 */
export const PGN_130585Defaults = {
  pgn: 130585,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130585
 */
export const newPGN_130585 = (fields: PGN_130585Fields, dst:number=255) : PGN_130585 => {
  return {
    ...PGN_130585Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130586
  *
  * Description: Zone Configuration
  *
  * @category PGN_130586
 */
export interface PGN_130586 extends PGN {
 fields: PGN_130586Fields
}

/**
 * @category PGN_130586
 */
export interface PGN_130586Fields {
  zoneId?: enums.EntertainmentZone|number
  volumeLimit?: N2K_Number
  fade?: N2K_Number
  balance?: N2K_Number
  subVolume?: N2K_Number
  eqTreble?: N2K_Number
  eqMidRange?: N2K_Number
  eqBass?: N2K_Number
  presetType?: enums.EntertainmentEq|number
  audioFilter?: enums.EntertainmentFilter|number
  highPassFilterFrequency?: N2K_Number
  lowPassFilterFrequency?: N2K_Number
  channel?: enums.EntertainmentChannel|number
}

/**
 * @category PGN_130586
 */
export const PGN_130586Defaults = {
  pgn: 130586,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130586
 */
export const newPGN_130586 = (fields: PGN_130586Fields, dst:number=255) : PGN_130586 => {
  return {
    ...PGN_130586Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Init #2
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Init #2<br>
  *
  * @category PGN_130816_SonichubInit2
 */
export interface PGN_130816_SonichubInit2 extends PGN {
 fields: PGN_130816_SonichubInit2Fields
}

/**
 * @category PGN_130816_SonichubInit2
 */
export interface PGN_130816_SonichubInit2Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  a?: N2K_Number
  b?: N2K_Number
}

/**
 * @category PGN_130816_SonichubInit2
 */
export const PGN_130816_SonichubInit2Defaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubInit2
 */
export const PGN_130816_SonichubInit2MatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.Init2,
}

/**
 * @category PGN_130816_SonichubInit2
 */
export interface PGN_130816_SonichubInit2CreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  a?: N2K_Number
  b?: N2K_Number
}

/**
 * @category PGN_130816_SonichubInit2
 */
export const newPGN_130816_SonichubInit2 = (fields: PGN_130816_SonichubInit2CreateArgs, dst:number=255) : PGN_130816_SonichubInit2 => {
  return {
    ...PGN_130816_SonichubInit2Defaults,
    dst,
    fields: {
      ...PGN_130816_SonichubInit2MatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: AM Radio
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == AM Radio<br>
  *
  * @category PGN_130816_SonichubAmRadio
 */
export interface PGN_130816_SonichubAmRadio extends PGN {
 fields: PGN_130816_SonichubAmRadioFields
}

/**
 * @category PGN_130816_SonichubAmRadio
 */
export interface PGN_130816_SonichubAmRadioFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: enums.SonichubTuning|number
  frequency?: N2K_Number
  noiseLevel?: N2K_Number
  signalLevel?: N2K_Number
  reserved11?: number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubAmRadio
 */
export const PGN_130816_SonichubAmRadioDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubAmRadio
 */
export const PGN_130816_SonichubAmRadioMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.AmRadio,
}

/**
 * @category PGN_130816_SonichubAmRadio
 */
export interface PGN_130816_SonichubAmRadioCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  item?: enums.SonichubTuning|number
  frequency?: N2K_Number
  noiseLevel?: N2K_Number
  signalLevel?: N2K_Number
  reserved11?: number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubAmRadio
 */
export const newPGN_130816_SonichubAmRadio = (fields: PGN_130816_SonichubAmRadioCreateArgs, dst:number=255) : PGN_130816_SonichubAmRadio => {
  return {
    ...PGN_130816_SonichubAmRadioDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubAmRadioMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Zone info
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Zone Info<br>
  *
  * @category PGN_130816_SonichubZoneInfo
 */
export interface PGN_130816_SonichubZoneInfo extends PGN {
 fields: PGN_130816_SonichubZoneInfoFields
}

/**
 * @category PGN_130816_SonichubZoneInfo
 */
export interface PGN_130816_SonichubZoneInfoFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  zone?: N2K_Number
}

/**
 * @category PGN_130816_SonichubZoneInfo
 */
export const PGN_130816_SonichubZoneInfoDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubZoneInfo
 */
export const PGN_130816_SonichubZoneInfoMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.ZoneInfo,
}

/**
 * @category PGN_130816_SonichubZoneInfo
 */
export interface PGN_130816_SonichubZoneInfoCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  zone?: N2K_Number
}

/**
 * @category PGN_130816_SonichubZoneInfo
 */
export const newPGN_130816_SonichubZoneInfo = (fields: PGN_130816_SonichubZoneInfoCreateArgs, dst:number=255) : PGN_130816_SonichubZoneInfo => {
  return {
    ...PGN_130816_SonichubZoneInfoDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubZoneInfoMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Source
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Source<br>
  *
  * @category PGN_130816_SonichubSource
 */
export interface PGN_130816_SonichubSource extends PGN {
 fields: PGN_130816_SonichubSourceFields
}

/**
 * @category PGN_130816_SonichubSource
 */
export interface PGN_130816_SonichubSourceFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  source?: enums.SonichubSource|number
}

/**
 * @category PGN_130816_SonichubSource
 */
export const PGN_130816_SonichubSourceDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubSource
 */
export const PGN_130816_SonichubSourceMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.Source,
}

/**
 * @category PGN_130816_SonichubSource
 */
export interface PGN_130816_SonichubSourceCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  source?: enums.SonichubSource|number
}

/**
 * @category PGN_130816_SonichubSource
 */
export const newPGN_130816_SonichubSource = (fields: PGN_130816_SonichubSourceCreateArgs, dst:number=255) : PGN_130816_SonichubSource => {
  return {
    ...PGN_130816_SonichubSourceDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubSourceMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Source List
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Source List<br>
  *
  * @category PGN_130816_SonichubSourceList
 */
export interface PGN_130816_SonichubSourceList extends PGN {
 fields: PGN_130816_SonichubSourceListFields
}

/**
 * @category PGN_130816_SonichubSourceList
 */
export interface PGN_130816_SonichubSourceListFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  sourceId?: N2K_Number
  a?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubSourceList
 */
export const PGN_130816_SonichubSourceListDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubSourceList
 */
export const PGN_130816_SonichubSourceListMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.SourceList,
}

/**
 * @category PGN_130816_SonichubSourceList
 */
export interface PGN_130816_SonichubSourceListCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  sourceId?: N2K_Number
  a?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubSourceList
 */
export const newPGN_130816_SonichubSourceList = (fields: PGN_130816_SonichubSourceListCreateArgs, dst:number=255) : PGN_130816_SonichubSourceList => {
  return {
    ...PGN_130816_SonichubSourceListDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubSourceListMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Control
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Control<br>
  *
  * @category PGN_130816_SonichubControl
 */
export interface PGN_130816_SonichubControl extends PGN {
 fields: PGN_130816_SonichubControlFields
}

/**
 * @category PGN_130816_SonichubControl
 */
export interface PGN_130816_SonichubControlFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: enums.FusionMuteCommand|number
}

/**
 * @category PGN_130816_SonichubControl
 */
export const PGN_130816_SonichubControlDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubControl
 */
export const PGN_130816_SonichubControlMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.Control,
}

/**
 * @category PGN_130816_SonichubControl
 */
export interface PGN_130816_SonichubControlCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  item?: enums.FusionMuteCommand|number
}

/**
 * @category PGN_130816_SonichubControl
 */
export const newPGN_130816_SonichubControl = (fields: PGN_130816_SonichubControlCreateArgs, dst:number=255) : PGN_130816_SonichubControl => {
  return {
    ...PGN_130816_SonichubControlDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubControlMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: FM Radio
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == FM Radio<br>
  *
  * @category PGN_130816_SonichubFmRadio
 */
export interface PGN_130816_SonichubFmRadio extends PGN {
 fields: PGN_130816_SonichubFmRadioFields
}

/**
 * @category PGN_130816_SonichubFmRadio
 */
export interface PGN_130816_SonichubFmRadioFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: enums.SonichubTuning|number
  frequency?: N2K_Number
  noiseLevel?: N2K_Number
  signalLevel?: N2K_Number
  reserved11?: number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubFmRadio
 */
export const PGN_130816_SonichubFmRadioDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubFmRadio
 */
export const PGN_130816_SonichubFmRadioMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.FmRadio,
}

/**
 * @category PGN_130816_SonichubFmRadio
 */
export interface PGN_130816_SonichubFmRadioCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  item?: enums.SonichubTuning|number
  frequency?: N2K_Number
  noiseLevel?: N2K_Number
  signalLevel?: N2K_Number
  reserved11?: number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubFmRadio
 */
export const newPGN_130816_SonichubFmRadio = (fields: PGN_130816_SonichubFmRadioCreateArgs, dst:number=255) : PGN_130816_SonichubFmRadio => {
  return {
    ...PGN_130816_SonichubFmRadioDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubFmRadioMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Playlist
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Playlist<br>
  *
  * @category PGN_130816_SonichubPlaylist
 */
export interface PGN_130816_SonichubPlaylist extends PGN {
 fields: PGN_130816_SonichubPlaylistFields
}

/**
 * @category PGN_130816_SonichubPlaylist
 */
export interface PGN_130816_SonichubPlaylistFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: enums.SonichubPlaylist|number
  a?: N2K_Number
  currentTrack?: N2K_Number
  tracks?: N2K_Number
  length?: N2K_Duration
  positionInTrack?: N2K_Duration
}

/**
 * @category PGN_130816_SonichubPlaylist
 */
export const PGN_130816_SonichubPlaylistDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubPlaylist
 */
export const PGN_130816_SonichubPlaylistMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.Playlist,
}

/**
 * @category PGN_130816_SonichubPlaylist
 */
export interface PGN_130816_SonichubPlaylistCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  item?: enums.SonichubPlaylist|number
  a?: N2K_Number
  currentTrack?: N2K_Number
  tracks?: N2K_Number
  length?: N2K_Duration
  positionInTrack?: N2K_Duration
}

/**
 * @category PGN_130816_SonichubPlaylist
 */
export const newPGN_130816_SonichubPlaylist = (fields: PGN_130816_SonichubPlaylistCreateArgs, dst:number=255) : PGN_130816_SonichubPlaylist => {
  return {
    ...PGN_130816_SonichubPlaylistDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubPlaylistMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Track
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Track<br>
  *
  * @category PGN_130816_SonichubTrack
 */
export interface PGN_130816_SonichubTrack extends PGN {
 fields: PGN_130816_SonichubTrackFields
}

/**
 * @category PGN_130816_SonichubTrack
 */
export interface PGN_130816_SonichubTrackFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubTrack
 */
export const PGN_130816_SonichubTrackDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubTrack
 */
export const PGN_130816_SonichubTrackMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.Track,
}

/**
 * @category PGN_130816_SonichubTrack
 */
export interface PGN_130816_SonichubTrackCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  item?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubTrack
 */
export const newPGN_130816_SonichubTrack = (fields: PGN_130816_SonichubTrackCreateArgs, dst:number=255) : PGN_130816_SonichubTrack => {
  return {
    ...PGN_130816_SonichubTrackDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubTrackMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Artist
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Artist<br>
  *
  * @category PGN_130816_SonichubArtist
 */
export interface PGN_130816_SonichubArtist extends PGN {
 fields: PGN_130816_SonichubArtistFields
}

/**
 * @category PGN_130816_SonichubArtist
 */
export interface PGN_130816_SonichubArtistFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubArtist
 */
export const PGN_130816_SonichubArtistDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubArtist
 */
export const PGN_130816_SonichubArtistMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.Artist,
}

/**
 * @category PGN_130816_SonichubArtist
 */
export interface PGN_130816_SonichubArtistCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  item?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubArtist
 */
export const newPGN_130816_SonichubArtist = (fields: PGN_130816_SonichubArtistCreateArgs, dst:number=255) : PGN_130816_SonichubArtist => {
  return {
    ...PGN_130816_SonichubArtistDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubArtistMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Album
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Album<br>
  *
  * @category PGN_130816_SonichubAlbum
 */
export interface PGN_130816_SonichubAlbum extends PGN {
 fields: PGN_130816_SonichubAlbumFields
}

/**
 * @category PGN_130816_SonichubAlbum
 */
export interface PGN_130816_SonichubAlbumFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubAlbum
 */
export const PGN_130816_SonichubAlbumDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubAlbum
 */
export const PGN_130816_SonichubAlbumMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.Album,
}

/**
 * @category PGN_130816_SonichubAlbum
 */
export interface PGN_130816_SonichubAlbumCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  item?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubAlbum
 */
export const newPGN_130816_SonichubAlbum = (fields: PGN_130816_SonichubAlbumCreateArgs, dst:number=255) : PGN_130816_SonichubAlbum => {
  return {
    ...PGN_130816_SonichubAlbumDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubAlbumMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Menu Item
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Menu Item<br>
  *
  * @category PGN_130816_SonichubMenuItem
 */
export interface PGN_130816_SonichubMenuItem extends PGN {
 fields: PGN_130816_SonichubMenuItemFields
}

/**
 * @category PGN_130816_SonichubMenuItem
 */
export interface PGN_130816_SonichubMenuItemFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  item?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubMenuItem
 */
export const PGN_130816_SonichubMenuItemDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubMenuItem
 */
export const PGN_130816_SonichubMenuItemMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.MenuItem,
}

/**
 * @category PGN_130816_SonichubMenuItem
 */
export interface PGN_130816_SonichubMenuItemCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  item?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubMenuItem
 */
export const newPGN_130816_SonichubMenuItem = (fields: PGN_130816_SonichubMenuItemCreateArgs, dst:number=255) : PGN_130816_SonichubMenuItem => {
  return {
    ...PGN_130816_SonichubMenuItemDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubMenuItemMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Zones
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Zones<br>
  *
  * @category PGN_130816_SonichubZones
 */
export interface PGN_130816_SonichubZones extends PGN {
 fields: PGN_130816_SonichubZonesFields
}

/**
 * @category PGN_130816_SonichubZones
 */
export interface PGN_130816_SonichubZonesFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  zones?: N2K_Number
}

/**
 * @category PGN_130816_SonichubZones
 */
export const PGN_130816_SonichubZonesDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubZones
 */
export const PGN_130816_SonichubZonesMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.Zones,
}

/**
 * @category PGN_130816_SonichubZones
 */
export interface PGN_130816_SonichubZonesCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  zones?: N2K_Number
}

/**
 * @category PGN_130816_SonichubZones
 */
export const newPGN_130816_SonichubZones = (fields: PGN_130816_SonichubZonesCreateArgs, dst:number=255) : PGN_130816_SonichubZones => {
  return {
    ...PGN_130816_SonichubZonesDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubZonesMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Max Volume
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Max Volume<br>
  *
  * @category PGN_130816_SonichubMaxVolume
 */
export interface PGN_130816_SonichubMaxVolume extends PGN {
 fields: PGN_130816_SonichubMaxVolumeFields
}

/**
 * @category PGN_130816_SonichubMaxVolume
 */
export interface PGN_130816_SonichubMaxVolumeFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  zone?: N2K_Number
  level?: N2K_Number
}

/**
 * @category PGN_130816_SonichubMaxVolume
 */
export const PGN_130816_SonichubMaxVolumeDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubMaxVolume
 */
export const PGN_130816_SonichubMaxVolumeMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.MaxVolume,
}

/**
 * @category PGN_130816_SonichubMaxVolume
 */
export interface PGN_130816_SonichubMaxVolumeCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  zone?: N2K_Number
  level?: N2K_Number
}

/**
 * @category PGN_130816_SonichubMaxVolume
 */
export const newPGN_130816_SonichubMaxVolume = (fields: PGN_130816_SonichubMaxVolumeCreateArgs, dst:number=255) : PGN_130816_SonichubMaxVolume => {
  return {
    ...PGN_130816_SonichubMaxVolumeDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubMaxVolumeMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Volume
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Volume<br>
  *
  * @category PGN_130816_SonichubVolume
 */
export interface PGN_130816_SonichubVolume extends PGN {
 fields: PGN_130816_SonichubVolumeFields
}

/**
 * @category PGN_130816_SonichubVolume
 */
export interface PGN_130816_SonichubVolumeFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  zone?: N2K_Number
  level?: N2K_Number
}

/**
 * @category PGN_130816_SonichubVolume
 */
export const PGN_130816_SonichubVolumeDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubVolume
 */
export const PGN_130816_SonichubVolumeMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.Volume,
}

/**
 * @category PGN_130816_SonichubVolume
 */
export interface PGN_130816_SonichubVolumeCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  zone?: N2K_Number
  level?: N2K_Number
}

/**
 * @category PGN_130816_SonichubVolume
 */
export const newPGN_130816_SonichubVolume = (fields: PGN_130816_SonichubVolumeCreateArgs, dst:number=255) : PGN_130816_SonichubVolume => {
  return {
    ...PGN_130816_SonichubVolumeDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubVolumeMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Init #1
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Init #1<br>
  *
  * @category PGN_130816_SonichubInit1
 */
export interface PGN_130816_SonichubInit1 extends PGN {
 fields: PGN_130816_SonichubInit1Fields
}

/**
 * @category PGN_130816_SonichubInit1
 */
export interface PGN_130816_SonichubInit1Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
}

/**
 * @category PGN_130816_SonichubInit1
 */
export const PGN_130816_SonichubInit1Defaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubInit1
 */
export const PGN_130816_SonichubInit1MatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.Init1,
}

/**
 * @category PGN_130816_SonichubInit1
 */
export interface PGN_130816_SonichubInit1CreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
}

/**
 * @category PGN_130816_SonichubInit1
 */
export const newPGN_130816_SonichubInit1 = (fields: PGN_130816_SonichubInit1CreateArgs, dst:number=255) : PGN_130816_SonichubInit1 => {
  return {
    ...PGN_130816_SonichubInit1Defaults,
    dst,
    fields: {
      ...PGN_130816_SonichubInit1MatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Position
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Position<br>
  *
  * @category PGN_130816_SonichubPosition
 */
export interface PGN_130816_SonichubPosition extends PGN {
 fields: PGN_130816_SonichubPositionFields
}

/**
 * @category PGN_130816_SonichubPosition
 */
export interface PGN_130816_SonichubPositionFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  position?: N2K_Duration
}

/**
 * @category PGN_130816_SonichubPosition
 */
export const PGN_130816_SonichubPositionDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubPosition
 */
export const PGN_130816_SonichubPositionMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.Position,
}

/**
 * @category PGN_130816_SonichubPosition
 */
export interface PGN_130816_SonichubPositionCreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  position?: N2K_Duration
}

/**
 * @category PGN_130816_SonichubPosition
 */
export const newPGN_130816_SonichubPosition = (fields: PGN_130816_SonichubPositionCreateArgs, dst:number=255) : PGN_130816_SonichubPosition => {
  return {
    ...PGN_130816_SonichubPositionDefaults,
    dst,
    fields: {
      ...PGN_130816_SonichubPositionMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: SonicHub: Init #3
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Init #3<br>
  *
  * @category PGN_130816_SonichubInit3
 */
export interface PGN_130816_SonichubInit3 extends PGN {
 fields: PGN_130816_SonichubInit3Fields
}

/**
 * @category PGN_130816_SonichubInit3
 */
export interface PGN_130816_SonichubInit3Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SonichubCommand|number
  control?: enums.SonichubControl|number
  a?: N2K_Number
  b?: N2K_Number
}

/**
 * @category PGN_130816_SonichubInit3
 */
export const PGN_130816_SonichubInit3Defaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SonichubInit3
 */
export const PGN_130816_SonichubInit3MatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SonichubCommand.Init3,
}

/**
 * @category PGN_130816_SonichubInit3
 */
export interface PGN_130816_SonichubInit3CreateArgs {
  reserved?: number
  reserved4?: number
  control?: enums.SonichubControl|number
  a?: N2K_Number
  b?: N2K_Number
}

/**
 * @category PGN_130816_SonichubInit3
 */
export const newPGN_130816_SonichubInit3 = (fields: PGN_130816_SonichubInit3CreateArgs, dst:number=255) : PGN_130816_SonichubInit3 => {
  return {
    ...PGN_130816_SonichubInit3Defaults,
    dst,
    fields: {
      ...PGN_130816_SonichubInit3MatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130816
  *
  * Description: Simrad: Text Message
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Text<br>
  *
  * @category PGN_130816_SimradTextMessage
 */
export interface PGN_130816_SimradTextMessage extends PGN {
 fields: PGN_130816_SimradTextMessageFields
}

/**
 * @category PGN_130816_SimradTextMessage
 */
export interface PGN_130816_SimradTextMessageFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  proprietaryId: enums.SimnetCommand|number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  sid?: N2K_Number
  prio?: N2K_Number
  text?: N2K_StringFix
}

/**
 * @category PGN_130816_SimradTextMessage
 */
export const PGN_130816_SimradTextMessageDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130816_SimradTextMessage
 */
export const PGN_130816_SimradTextMessageMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SimnetCommand.Text,
}

/**
 * @category PGN_130816_SimradTextMessage
 */
export interface PGN_130816_SimradTextMessageCreateArgs {
  reserved?: number
  reserved4?: number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  sid?: N2K_Number
  prio?: N2K_Number
  text?: N2K_StringFix
}

/**
 * @category PGN_130816_SimradTextMessage
 */
export const newPGN_130816_SimradTextMessage = (fields: PGN_130816_SimradTextMessageCreateArgs, dst:number=255) : PGN_130816_SimradTextMessage => {
  return {
    ...PGN_130816_SimradTextMessageDefaults,
    dst,
    fields: {
      ...PGN_130816_SimradTextMessageMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130817
  *
  * Description: Navico: Unknown
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130817_NavicoUnknown
 */
export interface PGN_130817_NavicoUnknown extends PGN {
 fields: PGN_130817_NavicoUnknownFields
}

/**
 * @category PGN_130817_NavicoUnknown
 */
export interface PGN_130817_NavicoUnknownFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
}

/**
 * @category PGN_130817_NavicoUnknown
 */
export const PGN_130817_NavicoUnknownDefaults = {
  pgn: 130817,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130817_NavicoUnknown
 */
export const PGN_130817_NavicoUnknownMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130817_NavicoUnknown
 */
export interface PGN_130817_NavicoUnknownCreateArgs {
  reserved?: number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
}

/**
 * @category PGN_130817_NavicoUnknown
 */
export const newPGN_130817_NavicoUnknown = (fields: PGN_130817_NavicoUnknownCreateArgs, dst:number=255) : PGN_130817_NavicoUnknown => {
  return {
    ...PGN_130817_NavicoUnknownDefaults,
    dst,
    fields: {
      ...PGN_130817_NavicoUnknownMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130817
  *
  * Description: Lowrance: Product Information
  *
  * Match: Manufacturer Code == Lowrance<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130817_LowranceProductInformation
 */
export interface PGN_130817_LowranceProductInformation extends PGN {
 fields: PGN_130817_LowranceProductInformationFields
}

/**
 * @category PGN_130817_LowranceProductInformation
 */
export interface PGN_130817_LowranceProductInformationFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  productCode?: N2K_Number
  model?: N2K_StringFix
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  firmwareVersion?: N2K_StringFix
  firmwareDate?: N2K_StringFix
  firmwareTime?: N2K_StringFix
}

/**
 * @category PGN_130817_LowranceProductInformation
 */
export const PGN_130817_LowranceProductInformationDefaults = {
  pgn: 130817,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130817_LowranceProductInformation
 */
export const PGN_130817_LowranceProductInformationMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Lowrance,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130817_LowranceProductInformation
 */
export interface PGN_130817_LowranceProductInformationCreateArgs {
  reserved?: number
  productCode?: N2K_Number
  model?: N2K_StringFix
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  firmwareVersion?: N2K_StringFix
  firmwareDate?: N2K_StringFix
  firmwareTime?: N2K_StringFix
}

/**
 * @category PGN_130817_LowranceProductInformation
 */
export const newPGN_130817_LowranceProductInformation = (fields: PGN_130817_LowranceProductInformationCreateArgs, dst:number=255) : PGN_130817_LowranceProductInformation => {
  return {
    ...PGN_130817_LowranceProductInformationDefaults,
    dst,
    fields: {
      ...PGN_130817_LowranceProductInformationMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130818
  *
  * Description: Simnet: Reprogram Data
  *
  * @category PGN_130818
 */
export interface PGN_130818 extends PGN {
 fields: PGN_130818Fields
}

/**
 * @category PGN_130818
 */
export interface PGN_130818Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  version?: N2K_Number
  sequence?: N2K_Number
  data?: N2K_Binary
}

/**
 * @category PGN_130818
 */
export const PGN_130818Defaults = {
  pgn: 130818,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130818
 */
export const newPGN_130818 = (fields: PGN_130818Fields, dst:number=255) : PGN_130818 => {
  return {
    ...PGN_130818Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130819
  *
  * Description: Simnet: Request Reprogram
  *
  * @category PGN_130819
 */
export interface PGN_130819 extends PGN {
 fields: PGN_130819Fields
}

/**
 * @category PGN_130819
 */
export interface PGN_130819Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

/**
 * @category PGN_130819
 */
export const PGN_130819Defaults = {
  pgn: 130819,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130819
 */
export const newPGN_130819 = (fields: PGN_130819Fields, dst:number=255) : PGN_130819 => {
  return {
    ...PGN_130819Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Simnet: Reprogram Status
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130820_SimnetReprogramStatus
 */
export interface PGN_130820_SimnetReprogramStatus extends PGN {
 fields: PGN_130820_SimnetReprogramStatusFields
}

/**
 * @category PGN_130820_SimnetReprogramStatus
 */
export interface PGN_130820_SimnetReprogramStatusFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  reserved4?: number
  status?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_130820_SimnetReprogramStatus
 */
export const PGN_130820_SimnetReprogramStatusDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_SimnetReprogramStatus
 */
export const PGN_130820_SimnetReprogramStatusMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130820_SimnetReprogramStatus
 */
export interface PGN_130820_SimnetReprogramStatusCreateArgs {
  reserved?: number
  reserved4?: number
  status?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_130820_SimnetReprogramStatus
 */
export const newPGN_130820_SimnetReprogramStatus = (fields: PGN_130820_SimnetReprogramStatusCreateArgs, dst:number=255) : PGN_130820_SimnetReprogramStatus => {
  return {
    ...PGN_130820_SimnetReprogramStatusDefaults,
    dst,
    fields: {
      ...PGN_130820_SimnetReprogramStatusMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Furuno: Unknown 130820
  *
  * Match: Manufacturer Code == Furuno<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130820_FurunoUnknown130820
 */
export interface PGN_130820_FurunoUnknown130820 extends PGN {
 fields: PGN_130820_FurunoUnknown130820Fields
}

/**
 * @category PGN_130820_FurunoUnknown130820
 */
export interface PGN_130820_FurunoUnknown130820Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
}

/**
 * @category PGN_130820_FurunoUnknown130820
 */
export const PGN_130820_FurunoUnknown130820Defaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FurunoUnknown130820
 */
export const PGN_130820_FurunoUnknown130820MatchFields = {
  manufacturerCode: enums.ManufacturerCode.Furuno,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130820_FurunoUnknown130820
 */
export interface PGN_130820_FurunoUnknown130820CreateArgs {
  reserved?: number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
}

/**
 * @category PGN_130820_FurunoUnknown130820
 */
export const newPGN_130820_FurunoUnknown130820 = (fields: PGN_130820_FurunoUnknown130820CreateArgs, dst:number=255) : PGN_130820_FurunoUnknown130820 => {
  return {
    ...PGN_130820_FurunoUnknown130820Defaults,
    dst,
    fields: {
      ...PGN_130820_FurunoUnknown130820MatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Versions
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == API Version<br>
  *
  * @category PGN_130820_FusionVersions
 */
export interface PGN_130820_FusionVersions extends PGN {
 fields: PGN_130820_FusionVersionsFields
}

/**
 * @category PGN_130820_FusionVersions
 */
export interface PGN_130820_FusionVersionsFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId?: enums.FusionStatusMessageId|number
  hwVersionMajor?: N2K_Number
  hwVersionMinor?: N2K_Number
  swVersionMajor?: N2K_Number
  swVersionMinor?: N2K_Number
  buildNumber?: N2K_Number
}

/**
 * @category PGN_130820_FusionVersions
 */
export const PGN_130820_FusionVersionsDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionVersions
 */
export const PGN_130820_FusionVersionsMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.ApiVersion,
}

/**
 * @category PGN_130820_FusionVersions
 */
export interface PGN_130820_FusionVersionsCreateArgs {
  reserved?: number
  hwVersionMajor?: N2K_Number
  hwVersionMinor?: N2K_Number
  swVersionMajor?: N2K_Number
  swVersionMinor?: N2K_Number
  buildNumber?: N2K_Number
}

/**
 * @category PGN_130820_FusionVersions
 */
export const newPGN_130820_FusionVersions = (fields: PGN_130820_FusionVersionsCreateArgs, dst:number=255) : PGN_130820_FusionVersions => {
  return {
    ...PGN_130820_FusionVersionsDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionVersionsMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Source
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Source<br>
  *
  * @category PGN_130820_FusionSource
 */
export interface PGN_130820_FusionSource extends PGN {
 fields: PGN_130820_FusionSourceFields
}

/**
 * @category PGN_130820_FusionSource
 */
export interface PGN_130820_FusionSourceFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId?: enums.FusionStatusMessageId|number
  sourceId?: N2K_Number
  currentSourceId?: N2K_Number
  sourceType?: enums.FusionSourceType|number
  flags?: N2K_Number
  source?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionSource
 */
export const PGN_130820_FusionSourceDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionSource
 */
export const PGN_130820_FusionSourceMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.Source,
}

/**
 * @category PGN_130820_FusionSource
 */
export interface PGN_130820_FusionSourceCreateArgs {
  reserved?: number
  sourceId?: N2K_Number
  currentSourceId?: N2K_Number
  sourceType?: enums.FusionSourceType|number
  flags?: N2K_Number
  source?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionSource
 */
export const newPGN_130820_FusionSource = (fields: PGN_130820_FusionSourceCreateArgs, dst:number=255) : PGN_130820_FusionSource => {
  return {
    ...PGN_130820_FusionSourceDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionSourceMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Source Count
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Source Count<br>
  *
  * @category PGN_130820_FusionSourceCount
 */
export interface PGN_130820_FusionSourceCount extends PGN {
 fields: PGN_130820_FusionSourceCountFields
}

/**
 * @category PGN_130820_FusionSourceCount
 */
export interface PGN_130820_FusionSourceCountFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId?: enums.FusionStatusMessageId|number
  sourceCount?: N2K_Number
}

/**
 * @category PGN_130820_FusionSourceCount
 */
export const PGN_130820_FusionSourceCountDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionSourceCount
 */
export const PGN_130820_FusionSourceCountMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.SourceCount,
}

/**
 * @category PGN_130820_FusionSourceCount
 */
export interface PGN_130820_FusionSourceCountCreateArgs {
  reserved?: number
  sourceCount?: N2K_Number
}

/**
 * @category PGN_130820_FusionSourceCount
 */
export const newPGN_130820_FusionSourceCount = (fields: PGN_130820_FusionSourceCountCreateArgs, dst:number=255) : PGN_130820_FusionSourceCount => {
  return {
    ...PGN_130820_FusionSourceCountDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionSourceCountMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Media
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Track Info<br>
  *
  * @category PGN_130820_FusionMedia
 */
export interface PGN_130820_FusionMedia extends PGN {
 fields: PGN_130820_FusionMediaFields
}

/**
 * @category PGN_130820_FusionMedia
 */
export interface PGN_130820_FusionMediaFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  flags?: enums.FusionPlayStatus|number
  track?: N2K_Number
  trackCount?: N2K_Number
  length?: N2K_Duration
  positionInTrack?: N2K_Duration
}

/**
 * @category PGN_130820_FusionMedia
 */
export const PGN_130820_FusionMediaDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionMedia
 */
export const PGN_130820_FusionMediaMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.TrackInfo,
}

/**
 * @category PGN_130820_FusionMedia
 */
export interface PGN_130820_FusionMediaCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  flags?: enums.FusionPlayStatus|number
  track?: N2K_Number
  trackCount?: N2K_Number
  length?: N2K_Duration
  positionInTrack?: N2K_Duration
}

/**
 * @category PGN_130820_FusionMedia
 */
export const newPGN_130820_FusionMedia = (fields: PGN_130820_FusionMediaCreateArgs, dst:number=255) : PGN_130820_FusionMedia => {
  return {
    ...PGN_130820_FusionMediaDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionMediaMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Track Name
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Track Title<br>
  *
  * @category PGN_130820_FusionTrackName
 */
export interface PGN_130820_FusionTrackName extends PGN {
 fields: PGN_130820_FusionTrackNameFields
}

/**
 * @category PGN_130820_FusionTrackName
 */
export interface PGN_130820_FusionTrackNameFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  index?: N2K_Number
  track?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionTrackName
 */
export const PGN_130820_FusionTrackNameDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionTrackName
 */
export const PGN_130820_FusionTrackNameMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.TrackTitle,
}

/**
 * @category PGN_130820_FusionTrackName
 */
export interface PGN_130820_FusionTrackNameCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  index?: N2K_Number
  track?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionTrackName
 */
export const newPGN_130820_FusionTrackName = (fields: PGN_130820_FusionTrackNameCreateArgs, dst:number=255) : PGN_130820_FusionTrackName => {
  return {
    ...PGN_130820_FusionTrackNameDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionTrackNameMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Artist Name
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Track Artist<br>
  *
  * @category PGN_130820_FusionArtistName
 */
export interface PGN_130820_FusionArtistName extends PGN {
 fields: PGN_130820_FusionArtistNameFields
}

/**
 * @category PGN_130820_FusionArtistName
 */
export interface PGN_130820_FusionArtistNameFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  index?: N2K_Number
  artist?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionArtistName
 */
export const PGN_130820_FusionArtistNameDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionArtistName
 */
export const PGN_130820_FusionArtistNameMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.TrackArtist,
}

/**
 * @category PGN_130820_FusionArtistName
 */
export interface PGN_130820_FusionArtistNameCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  index?: N2K_Number
  artist?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionArtistName
 */
export const newPGN_130820_FusionArtistName = (fields: PGN_130820_FusionArtistNameCreateArgs, dst:number=255) : PGN_130820_FusionArtistName => {
  return {
    ...PGN_130820_FusionArtistNameDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionArtistNameMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Album Name
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Track Album<br>
  *
  * @category PGN_130820_FusionAlbumName
 */
export interface PGN_130820_FusionAlbumName extends PGN {
 fields: PGN_130820_FusionAlbumNameFields
}

/**
 * @category PGN_130820_FusionAlbumName
 */
export interface PGN_130820_FusionAlbumNameFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  index?: N2K_Number
  album?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionAlbumName
 */
export const PGN_130820_FusionAlbumNameDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionAlbumName
 */
export const PGN_130820_FusionAlbumNameMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.TrackAlbum,
}

/**
 * @category PGN_130820_FusionAlbumName
 */
export interface PGN_130820_FusionAlbumNameCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  index?: N2K_Number
  album?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionAlbumName
 */
export const newPGN_130820_FusionAlbumName = (fields: PGN_130820_FusionAlbumNameCreateArgs, dst:number=255) : PGN_130820_FusionAlbumName => {
  return {
    ...PGN_130820_FusionAlbumNameDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionAlbumNameMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Device Name
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Unit Name<br>
  *
  * @category PGN_130820_FusionDeviceName
 */
export interface PGN_130820_FusionDeviceName extends PGN {
 fields: PGN_130820_FusionDeviceNameFields
}

/**
 * @category PGN_130820_FusionDeviceName
 */
export interface PGN_130820_FusionDeviceNameFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  name?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionDeviceName
 */
export const PGN_130820_FusionDeviceNameDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionDeviceName
 */
export const PGN_130820_FusionDeviceNameMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.UnitName,
}

/**
 * @category PGN_130820_FusionDeviceName
 */
export interface PGN_130820_FusionDeviceNameCreateArgs {
  reserved?: number
  name?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionDeviceName
 */
export const newPGN_130820_FusionDeviceName = (fields: PGN_130820_FusionDeviceNameCreateArgs, dst:number=255) : PGN_130820_FusionDeviceName => {
  return {
    ...PGN_130820_FusionDeviceNameDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionDeviceNameMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Zone Name
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Zone Name<br>
  *
  * @category PGN_130820_FusionZoneName
 */
export interface PGN_130820_FusionZoneName extends PGN {
 fields: PGN_130820_FusionZoneNameFields
}

/**
 * @category PGN_130820_FusionZoneName
 */
export interface PGN_130820_FusionZoneNameFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  number: N2K_Number
  name?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionZoneName
 */
export const PGN_130820_FusionZoneNameDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionZoneName
 */
export const PGN_130820_FusionZoneNameMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.ZoneName,
}

/**
 * @category PGN_130820_FusionZoneName
 */
export interface PGN_130820_FusionZoneNameCreateArgs {
  reserved?: number
  number: N2K_Number
  name?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionZoneName
 */
export const newPGN_130820_FusionZoneName = (fields: PGN_130820_FusionZoneNameCreateArgs, dst:number=255) : PGN_130820_FusionZoneName => {
  return {
    ...PGN_130820_FusionZoneNameDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionZoneNameMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Track Position
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Track Progress<br>
  *
  * @category PGN_130820_FusionTrackPosition
 */
export interface PGN_130820_FusionTrackPosition extends PGN {
 fields: PGN_130820_FusionTrackPositionFields
}

/**
 * @category PGN_130820_FusionTrackPosition
 */
export interface PGN_130820_FusionTrackPositionFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  progress?: N2K_Duration
}

/**
 * @category PGN_130820_FusionTrackPosition
 */
export const PGN_130820_FusionTrackPositionDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionTrackPosition
 */
export const PGN_130820_FusionTrackPositionMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.TrackProgress,
}

/**
 * @category PGN_130820_FusionTrackPosition
 */
export interface PGN_130820_FusionTrackPositionCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  progress?: N2K_Duration
}

/**
 * @category PGN_130820_FusionTrackPosition
 */
export const newPGN_130820_FusionTrackPosition = (fields: PGN_130820_FusionTrackPositionCreateArgs, dst:number=255) : PGN_130820_FusionTrackPosition => {
  return {
    ...PGN_130820_FusionTrackPositionDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionTrackPositionMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Tuner
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Tuner<br>
  *
  * @category PGN_130820_FusionTuner
 */
export interface PGN_130820_FusionTuner extends PGN {
 fields: PGN_130820_FusionTunerFields
}

/**
 * @category PGN_130820_FusionTuner
 */
export interface PGN_130820_FusionTunerFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: enums.FusionRadioSource|number
  scanning?: N2K_Number
  frequency?: N2K_Number
  signalStrength?: N2K_Number
  track?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionTuner
 */
export const PGN_130820_FusionTunerDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionTuner
 */
export const PGN_130820_FusionTunerMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.Tuner,
}

/**
 * @category PGN_130820_FusionTuner
 */
export interface PGN_130820_FusionTunerCreateArgs {
  reserved?: number
  sourceId: enums.FusionRadioSource|number
  scanning?: N2K_Number
  frequency?: N2K_Number
  signalStrength?: N2K_Number
  track?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionTuner
 */
export const newPGN_130820_FusionTuner = (fields: PGN_130820_FusionTunerCreateArgs, dst:number=255) : PGN_130820_FusionTuner => {
  return {
    ...PGN_130820_FusionTunerDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionTunerMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: MARINE_TUNER
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Marine Tuner<br>
  *
  * @category PGN_130820_FusionMarineTuner
 */
export interface PGN_130820_FusionMarineTuner extends PGN {
 fields: PGN_130820_FusionMarineTunerFields
}

/**
 * @category PGN_130820_FusionMarineTuner
 */
export interface PGN_130820_FusionMarineTunerFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  channel?: N2K_Number
  signalStrength?: N2K_Number
  name?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionMarineTuner
 */
export const PGN_130820_FusionMarineTunerDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionMarineTuner
 */
export const PGN_130820_FusionMarineTunerMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.MarineTuner,
}

/**
 * @category PGN_130820_FusionMarineTuner
 */
export interface PGN_130820_FusionMarineTunerCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  channel?: N2K_Number
  signalStrength?: N2K_Number
  name?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionMarineTuner
 */
export const newPGN_130820_FusionMarineTuner = (fields: PGN_130820_FusionMarineTunerCreateArgs, dst:number=255) : PGN_130820_FusionMarineTuner => {
  return {
    ...PGN_130820_FusionMarineTunerDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionMarineTunerMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Marine Squelch
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Marine Squelch<br>
  *
  * @category PGN_130820_FusionMarineSquelch
 */
export interface PGN_130820_FusionMarineSquelch extends PGN {
 fields: PGN_130820_FusionMarineSquelchFields
}

/**
 * @category PGN_130820_FusionMarineSquelch
 */
export interface PGN_130820_FusionMarineSquelchFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  squelch?: N2K_Number
}

/**
 * @category PGN_130820_FusionMarineSquelch
 */
export const PGN_130820_FusionMarineSquelchDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionMarineSquelch
 */
export const PGN_130820_FusionMarineSquelchMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.MarineSquelch,
}

/**
 * @category PGN_130820_FusionMarineSquelch
 */
export interface PGN_130820_FusionMarineSquelchCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  squelch?: N2K_Number
}

/**
 * @category PGN_130820_FusionMarineSquelch
 */
export const newPGN_130820_FusionMarineSquelch = (fields: PGN_130820_FusionMarineSquelchCreateArgs, dst:number=255) : PGN_130820_FusionMarineSquelch => {
  return {
    ...PGN_130820_FusionMarineSquelchDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionMarineSquelchMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Marine Scan Mode
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Marine Scan Mode<br>
  *
  * @category PGN_130820_FusionMarineScanMode
 */
export interface PGN_130820_FusionMarineScanMode extends PGN {
 fields: PGN_130820_FusionMarineScanModeFields
}

/**
 * @category PGN_130820_FusionMarineScanMode
 */
export interface PGN_130820_FusionMarineScanModeFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  scan?: enums.YesNo|number
}

/**
 * @category PGN_130820_FusionMarineScanMode
 */
export const PGN_130820_FusionMarineScanModeDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionMarineScanMode
 */
export const PGN_130820_FusionMarineScanModeMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.MarineScanMode,
}

/**
 * @category PGN_130820_FusionMarineScanMode
 */
export interface PGN_130820_FusionMarineScanModeCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  scan?: enums.YesNo|number
}

/**
 * @category PGN_130820_FusionMarineScanMode
 */
export const newPGN_130820_FusionMarineScanMode = (fields: PGN_130820_FusionMarineScanModeCreateArgs, dst:number=255) : PGN_130820_FusionMarineScanMode => {
  return {
    ...PGN_130820_FusionMarineScanModeDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionMarineScanModeMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Menu Item
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Menu Item<br>
  *
  * @category PGN_130820_FusionMenuItem
 */
export interface PGN_130820_FusionMenuItem extends PGN {
 fields: PGN_130820_FusionMenuItemFields
}

/**
 * @category PGN_130820_FusionMenuItem
 */
export interface PGN_130820_FusionMenuItemFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  itemIndex?: N2K_Number
  flags?: N2K_Number
  lockId?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionMenuItem
 */
export const PGN_130820_FusionMenuItemDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionMenuItem
 */
export const PGN_130820_FusionMenuItemMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.MenuItem,
}

/**
 * @category PGN_130820_FusionMenuItem
 */
export interface PGN_130820_FusionMenuItemCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  itemIndex?: N2K_Number
  flags?: N2K_Number
  lockId?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionMenuItem
 */
export const newPGN_130820_FusionMenuItem = (fields: PGN_130820_FusionMenuItemCreateArgs, dst:number=255) : PGN_130820_FusionMenuItem => {
  return {
    ...PGN_130820_FusionMenuItemDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionMenuItemMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Aux Gain
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Aux Gain<br>
  *
  * @category PGN_130820_FusionAuxGain
 */
export interface PGN_130820_FusionAuxGain extends PGN {
 fields: PGN_130820_FusionAuxGainFields
}

/**
 * @category PGN_130820_FusionAuxGain
 */
export interface PGN_130820_FusionAuxGainFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  gain?: N2K_Number
}

/**
 * @category PGN_130820_FusionAuxGain
 */
export const PGN_130820_FusionAuxGainDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionAuxGain
 */
export const PGN_130820_FusionAuxGainMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.AuxGain,
}

/**
 * @category PGN_130820_FusionAuxGain
 */
export interface PGN_130820_FusionAuxGainCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  gain?: N2K_Number
}

/**
 * @category PGN_130820_FusionAuxGain
 */
export const newPGN_130820_FusionAuxGain = (fields: PGN_130820_FusionAuxGainCreateArgs, dst:number=255) : PGN_130820_FusionAuxGain => {
  return {
    ...PGN_130820_FusionAuxGainDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionAuxGainMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: USB Repeat Status
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Setting<br>
  * Match: ID == USB repeat<br>
  *
  * @category PGN_130820_FusionUsbRepeatStatus
 */
export interface PGN_130820_FusionUsbRepeatStatus extends PGN {
 fields: PGN_130820_FusionUsbRepeatStatusFields
}

/**
 * @category PGN_130820_FusionUsbRepeatStatus
 */
export interface PGN_130820_FusionUsbRepeatStatusFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  id?: enums.FusionSetting|number
  status?: enums.FusionRepeatStatus|number
}

/**
 * @category PGN_130820_FusionUsbRepeatStatus
 */
export const PGN_130820_FusionUsbRepeatStatusDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionUsbRepeatStatus
 */
export const PGN_130820_FusionUsbRepeatStatusMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.Setting,
  id: enums.FusionSetting.UsbRepeat,
}

/**
 * @category PGN_130820_FusionUsbRepeatStatus
 */
export interface PGN_130820_FusionUsbRepeatStatusCreateArgs {
  reserved?: number
  status?: enums.FusionRepeatStatus|number
}

/**
 * @category PGN_130820_FusionUsbRepeatStatus
 */
export const newPGN_130820_FusionUsbRepeatStatus = (fields: PGN_130820_FusionUsbRepeatStatusCreateArgs, dst:number=255) : PGN_130820_FusionUsbRepeatStatus => {
  return {
    ...PGN_130820_FusionUsbRepeatStatusDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionUsbRepeatStatusMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Setting
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Setting<br>
  *
  * @category PGN_130820_FusionSetting
 */
export interface PGN_130820_FusionSetting extends PGN {
 fields: PGN_130820_FusionSettingFields
}

/**
 * @category PGN_130820_FusionSetting
 */
export interface PGN_130820_FusionSettingFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  id?: enums.FusionSetting|number
  value?: N2K_Number
}

/**
 * @category PGN_130820_FusionSetting
 */
export const PGN_130820_FusionSettingDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionSetting
 */
export const PGN_130820_FusionSettingMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.Setting,
}

/**
 * @category PGN_130820_FusionSetting
 */
export interface PGN_130820_FusionSettingCreateArgs {
  reserved?: number
  id?: enums.FusionSetting|number
  value?: N2K_Number
}

/**
 * @category PGN_130820_FusionSetting
 */
export const newPGN_130820_FusionSetting = (fields: PGN_130820_FusionSettingCreateArgs, dst:number=255) : PGN_130820_FusionSetting => {
  return {
    ...PGN_130820_FusionSettingDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionSettingMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Settings
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Settings<br>
  *
  * @category PGN_130820_FusionSettings
 */
export interface PGN_130820_FusionSettings extends PGN {
 fields: PGN_130820_FusionSettingsFields
}

/**
 * @category PGN_130820_FusionSettings
 */
export interface PGN_130820_FusionSettingsFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  count?: N2K_Number
  list: {
    id?: enums.FusionSetting|number
    value?: N2K_Number
  }[]
}

/**
 * @category PGN_130820_FusionSettings
 */
export const PGN_130820_FusionSettingsDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionSettings
 */
export const PGN_130820_FusionSettingsMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.Settings,
}

/**
 * @category PGN_130820_FusionSettings
 */
export interface PGN_130820_FusionSettingsCreateArgs {
  reserved?: number
  count?: N2K_Number
  list: {
    id?: enums.FusionSetting|number
    value?: N2K_Number
  }[]
}

/**
 * @category PGN_130820_FusionSettings
 */
export const newPGN_130820_FusionSettings = (fields: PGN_130820_FusionSettingsCreateArgs, dst:number=255) : PGN_130820_FusionSettings => {
  return {
    ...PGN_130820_FusionSettingsDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionSettingsMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Mute
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Mute<br>
  *
  * @category PGN_130820_FusionMute
 */
export interface PGN_130820_FusionMute extends PGN {
 fields: PGN_130820_FusionMuteFields
}

/**
 * @category PGN_130820_FusionMute
 */
export interface PGN_130820_FusionMuteFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  mute?: enums.FusionMuteCommand|number
}

/**
 * @category PGN_130820_FusionMute
 */
export const PGN_130820_FusionMuteDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionMute
 */
export const PGN_130820_FusionMuteMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.Mute,
}

/**
 * @category PGN_130820_FusionMute
 */
export interface PGN_130820_FusionMuteCreateArgs {
  reserved?: number
  mute?: enums.FusionMuteCommand|number
}

/**
 * @category PGN_130820_FusionMute
 */
export const newPGN_130820_FusionMute = (fields: PGN_130820_FusionMuteCreateArgs, dst:number=255) : PGN_130820_FusionMute => {
  return {
    ...PGN_130820_FusionMuteDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionMuteMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Balance
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Balance<br>
  *
  * @category PGN_130820_FusionBalance
 */
export interface PGN_130820_FusionBalance extends PGN {
 fields: PGN_130820_FusionBalanceFields
}

/**
 * @category PGN_130820_FusionBalance
 */
export interface PGN_130820_FusionBalanceFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone: N2K_Number
  value?: N2K_Number
}

/**
 * @category PGN_130820_FusionBalance
 */
export const PGN_130820_FusionBalanceDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionBalance
 */
export const PGN_130820_FusionBalanceMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.Balance,
}

/**
 * @category PGN_130820_FusionBalance
 */
export interface PGN_130820_FusionBalanceCreateArgs {
  reserved?: number
  zone: N2K_Number
  value?: N2K_Number
}

/**
 * @category PGN_130820_FusionBalance
 */
export const newPGN_130820_FusionBalance = (fields: PGN_130820_FusionBalanceCreateArgs, dst:number=255) : PGN_130820_FusionBalance => {
  return {
    ...PGN_130820_FusionBalanceDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionBalanceMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Low Pass Filter
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Low Pass Filter<br>
  *
  * @category PGN_130820_FusionLowPassFilter
 */
export interface PGN_130820_FusionLowPassFilter extends PGN {
 fields: PGN_130820_FusionLowPassFilterFields
}

/**
 * @category PGN_130820_FusionLowPassFilter
 */
export interface PGN_130820_FusionLowPassFilterFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone: N2K_Number
  filter?: N2K_Number
}

/**
 * @category PGN_130820_FusionLowPassFilter
 */
export const PGN_130820_FusionLowPassFilterDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionLowPassFilter
 */
export const PGN_130820_FusionLowPassFilterMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.LowPassFilter,
}

/**
 * @category PGN_130820_FusionLowPassFilter
 */
export interface PGN_130820_FusionLowPassFilterCreateArgs {
  reserved?: number
  zone: N2K_Number
  filter?: N2K_Number
}

/**
 * @category PGN_130820_FusionLowPassFilter
 */
export const newPGN_130820_FusionLowPassFilter = (fields: PGN_130820_FusionLowPassFilterCreateArgs, dst:number=255) : PGN_130820_FusionLowPassFilter => {
  return {
    ...PGN_130820_FusionLowPassFilterDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionLowPassFilterMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Sublevels
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Sublevels<br>
  *
  * @category PGN_130820_FusionSublevels
 */
export interface PGN_130820_FusionSublevels extends PGN {
 fields: PGN_130820_FusionSublevelsFields
}

/**
 * @category PGN_130820_FusionSublevels
 */
export interface PGN_130820_FusionSublevelsFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone1?: N2K_Number
  zone2?: N2K_Number
  zone3?: N2K_Number
  zone4?: N2K_Number
}

/**
 * @category PGN_130820_FusionSublevels
 */
export const PGN_130820_FusionSublevelsDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionSublevels
 */
export const PGN_130820_FusionSublevelsMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.Sublevels,
}

/**
 * @category PGN_130820_FusionSublevels
 */
export interface PGN_130820_FusionSublevelsCreateArgs {
  reserved?: number
  zone1?: N2K_Number
  zone2?: N2K_Number
  zone3?: N2K_Number
  zone4?: N2K_Number
}

/**
 * @category PGN_130820_FusionSublevels
 */
export const newPGN_130820_FusionSublevels = (fields: PGN_130820_FusionSublevelsCreateArgs, dst:number=255) : PGN_130820_FusionSublevels => {
  return {
    ...PGN_130820_FusionSublevelsDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionSublevelsMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: EQ
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Tone<br>
  *
  * @category PGN_130820_FusionEq
 */
export interface PGN_130820_FusionEq extends PGN {
 fields: PGN_130820_FusionEqFields
}

/**
 * @category PGN_130820_FusionEq
 */
export interface PGN_130820_FusionEqFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone: N2K_Number
  bass?: N2K_Number
  mid?: N2K_Number
  treble?: N2K_Number
}

/**
 * @category PGN_130820_FusionEq
 */
export const PGN_130820_FusionEqDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionEq
 */
export const PGN_130820_FusionEqMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.Tone,
}

/**
 * @category PGN_130820_FusionEq
 */
export interface PGN_130820_FusionEqCreateArgs {
  reserved?: number
  zone: N2K_Number
  bass?: N2K_Number
  mid?: N2K_Number
  treble?: N2K_Number
}

/**
 * @category PGN_130820_FusionEq
 */
export const newPGN_130820_FusionEq = (fields: PGN_130820_FusionEqCreateArgs, dst:number=255) : PGN_130820_FusionEq => {
  return {
    ...PGN_130820_FusionEqDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionEqMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Volume Limits
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Volume Limits<br>
  *
  * @category PGN_130820_FusionVolumeLimits
 */
export interface PGN_130820_FusionVolumeLimits extends PGN {
 fields: PGN_130820_FusionVolumeLimitsFields
}

/**
 * @category PGN_130820_FusionVolumeLimits
 */
export interface PGN_130820_FusionVolumeLimitsFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone1VolumeLimit?: N2K_Number
  zone2VolumeLimit?: N2K_Number
  zone3VolumeLimit?: N2K_Number
  zone4VolumeLimit?: N2K_Number
}

/**
 * @category PGN_130820_FusionVolumeLimits
 */
export const PGN_130820_FusionVolumeLimitsDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionVolumeLimits
 */
export const PGN_130820_FusionVolumeLimitsMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.VolumeLimits,
}

/**
 * @category PGN_130820_FusionVolumeLimits
 */
export interface PGN_130820_FusionVolumeLimitsCreateArgs {
  reserved?: number
  zone1VolumeLimit?: N2K_Number
  zone2VolumeLimit?: N2K_Number
  zone3VolumeLimit?: N2K_Number
  zone4VolumeLimit?: N2K_Number
}

/**
 * @category PGN_130820_FusionVolumeLimits
 */
export const newPGN_130820_FusionVolumeLimits = (fields: PGN_130820_FusionVolumeLimitsCreateArgs, dst:number=255) : PGN_130820_FusionVolumeLimits => {
  return {
    ...PGN_130820_FusionVolumeLimitsDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionVolumeLimitsMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Volumes
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Volume<br>
  *
  * @category PGN_130820_FusionVolumes
 */
export interface PGN_130820_FusionVolumes extends PGN {
 fields: PGN_130820_FusionVolumesFields
}

/**
 * @category PGN_130820_FusionVolumes
 */
export interface PGN_130820_FusionVolumesFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone1?: N2K_Number
  zone2?: N2K_Number
  zone3?: N2K_Number
  zone4?: N2K_Number
}

/**
 * @category PGN_130820_FusionVolumes
 */
export const PGN_130820_FusionVolumesDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionVolumes
 */
export const PGN_130820_FusionVolumesMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.Volume,
}

/**
 * @category PGN_130820_FusionVolumes
 */
export interface PGN_130820_FusionVolumesCreateArgs {
  reserved?: number
  zone1?: N2K_Number
  zone2?: N2K_Number
  zone3?: N2K_Number
  zone4?: N2K_Number
}

/**
 * @category PGN_130820_FusionVolumes
 */
export const newPGN_130820_FusionVolumes = (fields: PGN_130820_FusionVolumesCreateArgs, dst:number=255) : PGN_130820_FusionVolumes => {
  return {
    ...PGN_130820_FusionVolumesDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionVolumesMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Capabilities
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Capabilities<br>
  *
  * @category PGN_130820_FusionCapabilities
 */
export interface PGN_130820_FusionCapabilities extends PGN {
 fields: PGN_130820_FusionCapabilitiesFields
}

/**
 * @category PGN_130820_FusionCapabilities
 */
export interface PGN_130820_FusionCapabilitiesFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone1?: N2K_Number
  zone2?: N2K_Number
  zone3?: N2K_Number
  zone4?: N2K_Number
  global?: N2K_Number
}

/**
 * @category PGN_130820_FusionCapabilities
 */
export const PGN_130820_FusionCapabilitiesDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionCapabilities
 */
export const PGN_130820_FusionCapabilitiesMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.Capabilities,
}

/**
 * @category PGN_130820_FusionCapabilities
 */
export interface PGN_130820_FusionCapabilitiesCreateArgs {
  reserved?: number
  zone1?: N2K_Number
  zone2?: N2K_Number
  zone3?: N2K_Number
  zone4?: N2K_Number
  global?: N2K_Number
}

/**
 * @category PGN_130820_FusionCapabilities
 */
export const newPGN_130820_FusionCapabilities = (fields: PGN_130820_FusionCapabilitiesCreateArgs, dst:number=255) : PGN_130820_FusionCapabilities => {
  return {
    ...PGN_130820_FusionCapabilitiesDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionCapabilitiesMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Line Level Control
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Line Level Control<br>
  *
  * @category PGN_130820_FusionLineLevelControl
 */
export interface PGN_130820_FusionLineLevelControl extends PGN {
 fields: PGN_130820_FusionLineLevelControlFields
}

/**
 * @category PGN_130820_FusionLineLevelControl
 */
export interface PGN_130820_FusionLineLevelControlFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  zone: N2K_Number
  control?: N2K_Number
}

/**
 * @category PGN_130820_FusionLineLevelControl
 */
export const PGN_130820_FusionLineLevelControlDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionLineLevelControl
 */
export const PGN_130820_FusionLineLevelControlMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.LineLevelControl,
}

/**
 * @category PGN_130820_FusionLineLevelControl
 */
export interface PGN_130820_FusionLineLevelControlCreateArgs {
  reserved?: number
  zone: N2K_Number
  control?: N2K_Number
}

/**
 * @category PGN_130820_FusionLineLevelControl
 */
export const newPGN_130820_FusionLineLevelControl = (fields: PGN_130820_FusionLineLevelControlCreateArgs, dst:number=255) : PGN_130820_FusionLineLevelControl => {
  return {
    ...PGN_130820_FusionLineLevelControlDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionLineLevelControlMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: Power State
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Power<br>
  *
  * @category PGN_130820_FusionPowerState
 */
export interface PGN_130820_FusionPowerState extends PGN {
 fields: PGN_130820_FusionPowerStateFields
}

/**
 * @category PGN_130820_FusionPowerState
 */
export interface PGN_130820_FusionPowerStateFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  state?: enums.FusionPowerState|number
}

/**
 * @category PGN_130820_FusionPowerState
 */
export const PGN_130820_FusionPowerStateDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionPowerState
 */
export const PGN_130820_FusionPowerStateMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.Power,
}

/**
 * @category PGN_130820_FusionPowerState
 */
export interface PGN_130820_FusionPowerStateCreateArgs {
  reserved?: number
  state?: enums.FusionPowerState|number
}

/**
 * @category PGN_130820_FusionPowerState
 */
export const newPGN_130820_FusionPowerState = (fields: PGN_130820_FusionPowerStateCreateArgs, dst:number=255) : PGN_130820_FusionPowerState => {
  return {
    ...PGN_130820_FusionPowerStateDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionPowerStateMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: SiriusXM
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Sirius<br>
  *
  * @category PGN_130820_FusionSiriusxm
 */
export interface PGN_130820_FusionSiriusxm extends PGN {
 fields: PGN_130820_FusionSiriusxmFields
}

/**
 * @category PGN_130820_FusionSiriusxm
 */
export interface PGN_130820_FusionSiriusxmFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  comState?: enums.FusionSiriusComState|number
  alert?: enums.FusionSiriusComState|number
  advisoryChannel?: N2K_Number
  tuningMode?: enums.FusionSiriusTuningMode|number
}

/**
 * @category PGN_130820_FusionSiriusxm
 */
export const PGN_130820_FusionSiriusxmDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionSiriusxm
 */
export const PGN_130820_FusionSiriusxmMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.Sirius,
}

/**
 * @category PGN_130820_FusionSiriusxm
 */
export interface PGN_130820_FusionSiriusxmCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  comState?: enums.FusionSiriusComState|number
  alert?: enums.FusionSiriusComState|number
  advisoryChannel?: N2K_Number
  tuningMode?: enums.FusionSiriusTuningMode|number
}

/**
 * @category PGN_130820_FusionSiriusxm
 */
export const newPGN_130820_FusionSiriusxm = (fields: PGN_130820_FusionSiriusxmCreateArgs, dst:number=255) : PGN_130820_FusionSiriusxm => {
  return {
    ...PGN_130820_FusionSiriusxmDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionSiriusxmMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: SiriusXM Channel
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == SiriusXM Channel<br>
  *
  * @category PGN_130820_FusionSiriusxmChannel
 */
export interface PGN_130820_FusionSiriusxmChannel extends PGN {
 fields: PGN_130820_FusionSiriusxmChannelFields
}

/**
 * @category PGN_130820_FusionSiriusxmChannel
 */
export interface PGN_130820_FusionSiriusxmChannelFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  channelNumber?: N2K_Number
  channel?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionSiriusxmChannel
 */
export const PGN_130820_FusionSiriusxmChannelDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionSiriusxmChannel
 */
export const PGN_130820_FusionSiriusxmChannelMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.SiriusXmChannel,
}

/**
 * @category PGN_130820_FusionSiriusxmChannel
 */
export interface PGN_130820_FusionSiriusxmChannelCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  channelNumber?: N2K_Number
  channel?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionSiriusxmChannel
 */
export const newPGN_130820_FusionSiriusxmChannel = (fields: PGN_130820_FusionSiriusxmChannelCreateArgs, dst:number=255) : PGN_130820_FusionSiriusxmChannel => {
  return {
    ...PGN_130820_FusionSiriusxmChannelDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionSiriusxmChannelMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: SiriusXM Title
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == SiriusXM Title<br>
  *
  * @category PGN_130820_FusionSiriusxmTitle
 */
export interface PGN_130820_FusionSiriusxmTitle extends PGN {
 fields: PGN_130820_FusionSiriusxmTitleFields
}

/**
 * @category PGN_130820_FusionSiriusxmTitle
 */
export interface PGN_130820_FusionSiriusxmTitleFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  channel?: N2K_Number
  title?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionSiriusxmTitle
 */
export const PGN_130820_FusionSiriusxmTitleDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionSiriusxmTitle
 */
export const PGN_130820_FusionSiriusxmTitleMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.SiriusXmTitle,
}

/**
 * @category PGN_130820_FusionSiriusxmTitle
 */
export interface PGN_130820_FusionSiriusxmTitleCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  channel?: N2K_Number
  title?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionSiriusxmTitle
 */
export const newPGN_130820_FusionSiriusxmTitle = (fields: PGN_130820_FusionSiriusxmTitleCreateArgs, dst:number=255) : PGN_130820_FusionSiriusxmTitle => {
  return {
    ...PGN_130820_FusionSiriusxmTitleDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionSiriusxmTitleMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: SiriusXM Artist
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == SiriusXM Artist<br>
  *
  * @category PGN_130820_FusionSiriusxmArtist
 */
export interface PGN_130820_FusionSiriusxmArtist extends PGN {
 fields: PGN_130820_FusionSiriusxmArtistFields
}

/**
 * @category PGN_130820_FusionSiriusxmArtist
 */
export interface PGN_130820_FusionSiriusxmArtistFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  channel?: N2K_Number
  artist?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionSiriusxmArtist
 */
export const PGN_130820_FusionSiriusxmArtistDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionSiriusxmArtist
 */
export const PGN_130820_FusionSiriusxmArtistMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.SiriusXmArtist,
}

/**
 * @category PGN_130820_FusionSiriusxmArtist
 */
export interface PGN_130820_FusionSiriusxmArtistCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  channel?: N2K_Number
  artist?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionSiriusxmArtist
 */
export const newPGN_130820_FusionSiriusxmArtist = (fields: PGN_130820_FusionSiriusxmArtistCreateArgs, dst:number=255) : PGN_130820_FusionSiriusxmArtist => {
  return {
    ...PGN_130820_FusionSiriusxmArtistDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionSiriusxmArtistMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: SiriusXM Content Info
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == SiriusXM Genre<br>
  *
  * @category PGN_130820_FusionSiriusxmContentInfo
 */
export interface PGN_130820_FusionSiriusxmContentInfo extends PGN {
 fields: PGN_130820_FusionSiriusxmContentInfoFields
}

/**
 * @category PGN_130820_FusionSiriusxmContentInfo
 */
export interface PGN_130820_FusionSiriusxmContentInfoFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  channel?: N2K_Number
  genre?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionSiriusxmContentInfo
 */
export const PGN_130820_FusionSiriusxmContentInfoDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionSiriusxmContentInfo
 */
export const PGN_130820_FusionSiriusxmContentInfoMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.SiriusXmGenre,
}

/**
 * @category PGN_130820_FusionSiriusxmContentInfo
 */
export interface PGN_130820_FusionSiriusxmContentInfoCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  channel?: N2K_Number
  genre?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionSiriusxmContentInfo
 */
export const newPGN_130820_FusionSiriusxmContentInfo = (fields: PGN_130820_FusionSiriusxmContentInfoCreateArgs, dst:number=255) : PGN_130820_FusionSiriusxmContentInfo => {
  return {
    ...PGN_130820_FusionSiriusxmContentInfoDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionSiriusxmContentInfoMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: SiriusXM Category
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == SiriusXM Category<br>
  *
  * @category PGN_130820_FusionSiriusxmCategory
 */
export interface PGN_130820_FusionSiriusxmCategory extends PGN {
 fields: PGN_130820_FusionSiriusxmCategoryFields
}

/**
 * @category PGN_130820_FusionSiriusxmCategory
 */
export interface PGN_130820_FusionSiriusxmCategoryFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  channel?: N2K_Number
  name?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionSiriusxmCategory
 */
export const PGN_130820_FusionSiriusxmCategoryDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionSiriusxmCategory
 */
export const PGN_130820_FusionSiriusxmCategoryMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.SiriusXmCategory,
}

/**
 * @category PGN_130820_FusionSiriusxmCategory
 */
export interface PGN_130820_FusionSiriusxmCategoryCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  channel?: N2K_Number
  name?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionSiriusxmCategory
 */
export const newPGN_130820_FusionSiriusxmCategory = (fields: PGN_130820_FusionSiriusxmCategoryCreateArgs, dst:number=255) : PGN_130820_FusionSiriusxmCategory => {
  return {
    ...PGN_130820_FusionSiriusxmCategoryDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionSiriusxmCategoryMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: SiriusXM Signal
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == SiriusXm Signal<br>
  *
  * @category PGN_130820_FusionSiriusxmSignal
 */
export interface PGN_130820_FusionSiriusxmSignal extends PGN {
 fields: PGN_130820_FusionSiriusxmSignalFields
}

/**
 * @category PGN_130820_FusionSiriusxmSignal
 */
export interface PGN_130820_FusionSiriusxmSignalFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  signal?: N2K_Number
}

/**
 * @category PGN_130820_FusionSiriusxmSignal
 */
export const PGN_130820_FusionSiriusxmSignalDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionSiriusxmSignal
 */
export const PGN_130820_FusionSiriusxmSignalMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.SiriusXmSignal,
}

/**
 * @category PGN_130820_FusionSiriusxmSignal
 */
export interface PGN_130820_FusionSiriusxmSignalCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  signal?: N2K_Number
}

/**
 * @category PGN_130820_FusionSiriusxmSignal
 */
export const newPGN_130820_FusionSiriusxmSignal = (fields: PGN_130820_FusionSiriusxmSignalCreateArgs, dst:number=255) : PGN_130820_FusionSiriusxmSignal => {
  return {
    ...PGN_130820_FusionSiriusxmSignalDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionSiriusxmSignalMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130820
  *
  * Description: Fusion: SiriusXM Presets
  *
  * Match: Manufacturer Code == Fusion Electronics<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == SiriusXM Presets<br>
  *
  * @category PGN_130820_FusionSiriusxmPresets
 */
export interface PGN_130820_FusionSiriusxmPresets extends PGN {
 fields: PGN_130820_FusionSiriusxmPresetsFields
}

/**
 * @category PGN_130820_FusionSiriusxmPresets
 */
export interface PGN_130820_FusionSiriusxmPresetsFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: enums.FusionStatusMessageId|number
  sourceId: N2K_Number
  count?: N2K_Number
  values?: N2K_Binary
}

/**
 * @category PGN_130820_FusionSiriusxmPresets
 */
export const PGN_130820_FusionSiriusxmPresetsDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130820_FusionSiriusxmPresets
 */
export const PGN_130820_FusionSiriusxmPresetsMatchFields = {
  manufacturerCode: enums.ManufacturerCode.FusionElectronics,
  industryCode: enums.IndustryCode.Marine,
  messageId: enums.FusionStatusMessageId.SiriusXmPresets,
}

/**
 * @category PGN_130820_FusionSiriusxmPresets
 */
export interface PGN_130820_FusionSiriusxmPresetsCreateArgs {
  reserved?: number
  sourceId: N2K_Number
  count?: N2K_Number
  values?: N2K_Binary
}

/**
 * @category PGN_130820_FusionSiriusxmPresets
 */
export const newPGN_130820_FusionSiriusxmPresets = (fields: PGN_130820_FusionSiriusxmPresetsCreateArgs, dst:number=255) : PGN_130820_FusionSiriusxmPresets => {
  return {
    ...PGN_130820_FusionSiriusxmPresetsDefaults,
    dst,
    fields: {
      ...PGN_130820_FusionSiriusxmPresetsMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130821
  *
  * Description: Navico: ASCII Data
  *
  * Match: Manufacturer Code == Navico<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130821_NavicoAsciiData
 */
export interface PGN_130821_NavicoAsciiData extends PGN {
 fields: PGN_130821_NavicoAsciiDataFields
}

/**
 * @category PGN_130821_NavicoAsciiData
 */
export interface PGN_130821_NavicoAsciiDataFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: N2K_Number
  message?: N2K_StringFix
}

/**
 * @category PGN_130821_NavicoAsciiData
 */
export const PGN_130821_NavicoAsciiDataDefaults = {
  pgn: 130821,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130821_NavicoAsciiData
 */
export const PGN_130821_NavicoAsciiDataMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Navico,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130821_NavicoAsciiData
 */
export interface PGN_130821_NavicoAsciiDataCreateArgs {
  reserved?: number
  a?: N2K_Number
  message?: N2K_StringFix
}

/**
 * @category PGN_130821_NavicoAsciiData
 */
export const newPGN_130821_NavicoAsciiData = (fields: PGN_130821_NavicoAsciiDataCreateArgs, dst:number=255) : PGN_130821_NavicoAsciiData => {
  return {
    ...PGN_130821_NavicoAsciiDataDefaults,
    dst,
    fields: {
      ...PGN_130821_NavicoAsciiDataMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130821
  *
  * Description: Furuno: Unknown 130821
  *
  * Match: Manufacturer Code == Furuno<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130821_FurunoUnknown130821
 */
export interface PGN_130821_FurunoUnknown130821 extends PGN {
 fields: PGN_130821_FurunoUnknown130821Fields
}

/**
 * @category PGN_130821_FurunoUnknown130821
 */
export interface PGN_130821_FurunoUnknown130821Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: N2K_Number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
  f?: N2K_Number
  g?: N2K_Number
  h?: N2K_Number
  i?: N2K_Number
}

/**
 * @category PGN_130821_FurunoUnknown130821
 */
export const PGN_130821_FurunoUnknown130821Defaults = {
  pgn: 130821,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130821_FurunoUnknown130821
 */
export const PGN_130821_FurunoUnknown130821MatchFields = {
  manufacturerCode: enums.ManufacturerCode.Furuno,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130821_FurunoUnknown130821
 */
export interface PGN_130821_FurunoUnknown130821CreateArgs {
  reserved?: number
  sid?: N2K_Number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
  f?: N2K_Number
  g?: N2K_Number
  h?: N2K_Number
  i?: N2K_Number
}

/**
 * @category PGN_130821_FurunoUnknown130821
 */
export const newPGN_130821_FurunoUnknown130821 = (fields: PGN_130821_FurunoUnknown130821CreateArgs, dst:number=255) : PGN_130821_FurunoUnknown130821 => {
  return {
    ...PGN_130821_FurunoUnknown130821Defaults,
    dst,
    fields: {
      ...PGN_130821_FurunoUnknown130821MatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130822
  *
  * Description: Navico: Unknown 1
  *
  * @category PGN_130822
 */
export interface PGN_130822 extends PGN {
 fields: PGN_130822Fields
}

/**
 * @category PGN_130822
 */
export interface PGN_130822Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  data?: N2K_Binary
}

/**
 * @category PGN_130822
 */
export const PGN_130822Defaults = {
  pgn: 130822,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130822
 */
export const newPGN_130822 = (fields: PGN_130822Fields, dst:number=255) : PGN_130822 => {
  return {
    ...PGN_130822Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130823
  *
  * Description: Maretron: Proprietary Temperature High Range
  *
  * @category PGN_130823
 */
export interface PGN_130823 extends PGN {
 fields: PGN_130823Fields
}

/**
 * @category PGN_130823
 */
export interface PGN_130823Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: N2K_Number
  instance: N2K_Number
  source?: enums.TemperatureSource|number
  actualTemperature?: N2K_Number
  setTemperature?: N2K_Number
}

/**
 * @category PGN_130823
 */
export const PGN_130823Defaults = {
  pgn: 130823,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130823
 */
export const newPGN_130823 = (fields: PGN_130823Fields, dst:number=255) : PGN_130823 => {
  return {
    ...PGN_130823Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130824
  *
  * Description: B&G: key-value data
  *
  * Explanation: Contains any number of key/value pairs, sent by various B&G devices such as MFDs and Sailing Processors.
  *
  * Match: Manufacturer Code == B & G<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130824_BGkeyValueData
 */
export interface PGN_130824_BGkeyValueData extends PGN {
 fields: PGN_130824_BGkeyValueDataFields
}

/**
 * @category PGN_130824_BGkeyValueData
 */
export interface PGN_130824_BGkeyValueDataFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  list: {
    key?: N2K_DynamicFieldKey
    length?: N2K_DynamicFieldLength
    value?: N2K_DynamicFieldValue
  }[]
}

/**
 * @category PGN_130824_BGkeyValueData
 */
export const PGN_130824_BGkeyValueDataDefaults = {
  pgn: 130824,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_130824_BGkeyValueData
 */
export const PGN_130824_BGkeyValueDataMatchFields = {
  manufacturerCode: enums.ManufacturerCode.BG,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130824_BGkeyValueData
 */
export interface PGN_130824_BGkeyValueDataCreateArgs {
  reserved?: number
  list: {
    key?: N2K_DynamicFieldKey
    length?: N2K_DynamicFieldLength
    value?: N2K_DynamicFieldValue
  }[]
}

/**
 * @category PGN_130824_BGkeyValueData
 */
export const newPGN_130824_BGkeyValueData = (fields: PGN_130824_BGkeyValueDataCreateArgs, dst:number=255) : PGN_130824_BGkeyValueData => {
  return {
    ...PGN_130824_BGkeyValueDataDefaults,
    dst,
    fields: {
      ...PGN_130824_BGkeyValueDataMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130824
  *
  * Description: Maretron: Annunciator
  *
  * Match: Manufacturer Code == Maretron<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130824_MaretronAnnunciator
 */
export interface PGN_130824_MaretronAnnunciator extends PGN {
 fields: PGN_130824_MaretronAnnunciatorFields
}

/**
 * @category PGN_130824_MaretronAnnunciator
 */
export interface PGN_130824_MaretronAnnunciatorFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  field4?: N2K_Number
  field5?: N2K_Number
  field6?: N2K_Number
  field7?: N2K_Number
  field8?: N2K_Number
}

/**
 * @category PGN_130824_MaretronAnnunciator
 */
export const PGN_130824_MaretronAnnunciatorDefaults = {
  pgn: 130824,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130824_MaretronAnnunciator
 */
export const PGN_130824_MaretronAnnunciatorMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Maretron,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130824_MaretronAnnunciator
 */
export interface PGN_130824_MaretronAnnunciatorCreateArgs {
  reserved?: number
  field4?: N2K_Number
  field5?: N2K_Number
  field6?: N2K_Number
  field7?: N2K_Number
  field8?: N2K_Number
}

/**
 * @category PGN_130824_MaretronAnnunciator
 */
export const newPGN_130824_MaretronAnnunciator = (fields: PGN_130824_MaretronAnnunciatorCreateArgs, dst:number=255) : PGN_130824_MaretronAnnunciator => {
  return {
    ...PGN_130824_MaretronAnnunciatorDefaults,
    dst,
    fields: {
      ...PGN_130824_MaretronAnnunciatorMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130825
  *
  * Description: Navico: Unknown 2
  *
  * @category PGN_130825
 */
export interface PGN_130825 extends PGN {
 fields: PGN_130825Fields
}

/**
 * @category PGN_130825
 */
export interface PGN_130825Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  data?: N2K_Binary
}

/**
 * @category PGN_130825
 */
export const PGN_130825Defaults = {
  pgn: 130825,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130825
 */
export const newPGN_130825 = (fields: PGN_130825Fields, dst:number=255) : PGN_130825 => {
  return {
    ...PGN_130825Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130827
  *
  * Description: Lowrance: unknown
  *
  * @category PGN_130827
 */
export interface PGN_130827 extends PGN {
 fields: PGN_130827Fields
}

/**
 * @category PGN_130827
 */
export interface PGN_130827Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
  f?: N2K_Number
}

/**
 * @category PGN_130827
 */
export const PGN_130827Defaults = {
  pgn: 130827,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130827
 */
export const newPGN_130827 = (fields: PGN_130827Fields, dst:number=255) : PGN_130827 => {
  return {
    ...PGN_130827Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130828
  *
  * Description: Simnet: Set Serial Number
  *
  * @category PGN_130828
 */
export interface PGN_130828 extends PGN {
 fields: PGN_130828Fields
}

/**
 * @category PGN_130828
 */
export interface PGN_130828Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

/**
 * @category PGN_130828
 */
export const PGN_130828Defaults = {
  pgn: 130828,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130828
 */
export const newPGN_130828 = (fields: PGN_130828Fields, dst:number=255) : PGN_130828 => {
  return {
    ...PGN_130828Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130831
  *
  * Description: Suzuki: Engine and Storage Device Config
  *
  * @category PGN_130831
 */
export interface PGN_130831 extends PGN {
 fields: PGN_130831Fields
}

/**
 * @category PGN_130831
 */
export interface PGN_130831Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

/**
 * @category PGN_130831
 */
export const PGN_130831Defaults = {
  pgn: 130831,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130831
 */
export const newPGN_130831 = (fields: PGN_130831Fields, dst:number=255) : PGN_130831 => {
  return {
    ...PGN_130831Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130832
  *
  * Description: Simnet: Fuel Used - High Resolution
  *
  * @category PGN_130832
 */
export interface PGN_130832 extends PGN {
 fields: PGN_130832Fields
}

/**
 * @category PGN_130832
 */
export interface PGN_130832Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

/**
 * @category PGN_130832
 */
export const PGN_130832Defaults = {
  pgn: 130832,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130832
 */
export const newPGN_130832 = (fields: PGN_130832Fields, dst:number=255) : PGN_130832 => {
  return {
    ...PGN_130832Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130833
  *
  * Description: B&G: User and Remote rename
  *
  * @category PGN_130833
 */
export interface PGN_130833 extends PGN {
 fields: PGN_130833Fields
}

/**
 * @category PGN_130833
 */
export interface PGN_130833Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  dataType?: N2K_DynamicFieldKey
  length?: N2K_Number
  reserved6?: number
  decimals?: enums.BandgDecimals|number
  shortName?: N2K_StringFix
  longName?: N2K_StringFix
}

/**
 * @category PGN_130833
 */
export const PGN_130833Defaults = {
  pgn: 130833,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130833
 */
export const newPGN_130833 = (fields: PGN_130833Fields, dst:number=255) : PGN_130833 => {
  return {
    ...PGN_130833Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130834
  *
  * Description: Simnet: Engine and Tank Configuration
  *
  * @category PGN_130834
 */
export interface PGN_130834 extends PGN {
 fields: PGN_130834Fields
}

/**
 * @category PGN_130834
 */
export interface PGN_130834Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

/**
 * @category PGN_130834
 */
export const PGN_130834Defaults = {
  pgn: 130834,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130834
 */
export const newPGN_130834 = (fields: PGN_130834Fields, dst:number=255) : PGN_130834 => {
  return {
    ...PGN_130834Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130835
  *
  * Description: Simnet: Set Engine and Tank Configuration
  *
  * @category PGN_130835
 */
export interface PGN_130835 extends PGN {
 fields: PGN_130835Fields
}

/**
 * @category PGN_130835
 */
export interface PGN_130835Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

/**
 * @category PGN_130835
 */
export const PGN_130835Defaults = {
  pgn: 130835,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130835
 */
export const newPGN_130835 = (fields: PGN_130835Fields, dst:number=255) : PGN_130835 => {
  return {
    ...PGN_130835Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130836
  *
  * Description: Simnet: Fluid Level Sensor Configuration
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130836_SimnetFluidLevelSensorConfiguration
 */
export interface PGN_130836_SimnetFluidLevelSensorConfiguration extends PGN {
 fields: PGN_130836_SimnetFluidLevelSensorConfigurationFields
}

/**
 * @category PGN_130836_SimnetFluidLevelSensorConfiguration
 */
export interface PGN_130836_SimnetFluidLevelSensorConfigurationFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  c?: N2K_Number
  device: N2K_Number
  instance: N2K_Number
  f?: N2K_Number
  tankType?: enums.TankType|number
  capacity?: N2K_Number
  g?: N2K_Number
  h?: N2K_Number
  i?: N2K_Number
}

/**
 * @category PGN_130836_SimnetFluidLevelSensorConfiguration
 */
export const PGN_130836_SimnetFluidLevelSensorConfigurationDefaults = {
  pgn: 130836,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130836_SimnetFluidLevelSensorConfiguration
 */
export const PGN_130836_SimnetFluidLevelSensorConfigurationMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130836_SimnetFluidLevelSensorConfiguration
 */
export interface PGN_130836_SimnetFluidLevelSensorConfigurationCreateArgs {
  reserved?: number
  c?: N2K_Number
  device: N2K_Number
  instance: N2K_Number
  f?: N2K_Number
  tankType?: enums.TankType|number
  capacity?: N2K_Number
  g?: N2K_Number
  h?: N2K_Number
  i?: N2K_Number
}

/**
 * @category PGN_130836_SimnetFluidLevelSensorConfiguration
 */
export const newPGN_130836_SimnetFluidLevelSensorConfiguration = (fields: PGN_130836_SimnetFluidLevelSensorConfigurationCreateArgs, dst:number=255) : PGN_130836_SimnetFluidLevelSensorConfiguration => {
  return {
    ...PGN_130836_SimnetFluidLevelSensorConfigurationDefaults,
    dst,
    fields: {
      ...PGN_130836_SimnetFluidLevelSensorConfigurationMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130836
  *
  * Description: Maretron: Switch Status Counter
  *
  * Match: Manufacturer Code == Maretron<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130836_MaretronSwitchStatusCounter
 */
export interface PGN_130836_MaretronSwitchStatusCounter extends PGN {
 fields: PGN_130836_MaretronSwitchStatusCounterFields
}

/**
 * @category PGN_130836_MaretronSwitchStatusCounter
 */
export interface PGN_130836_MaretronSwitchStatusCounterFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  instance: N2K_Number
  indicatorNumber?: N2K_Number
  startDate?: N2K_Date
  startTime?: N2K_Time
  offCounter?: N2K_Number
  onCounter?: N2K_Number
  errorCounter?: N2K_Number
  switchStatus?: enums.OffOn|number
  reserved12?: number
}

/**
 * @category PGN_130836_MaretronSwitchStatusCounter
 */
export const PGN_130836_MaretronSwitchStatusCounterDefaults = {
  pgn: 130836,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_130836_MaretronSwitchStatusCounter
 */
export const PGN_130836_MaretronSwitchStatusCounterMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Maretron,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130836_MaretronSwitchStatusCounter
 */
export interface PGN_130836_MaretronSwitchStatusCounterCreateArgs {
  reserved?: number
  instance: N2K_Number
  indicatorNumber?: N2K_Number
  startDate?: N2K_Date
  startTime?: N2K_Time
  offCounter?: N2K_Number
  onCounter?: N2K_Number
  errorCounter?: N2K_Number
  switchStatus?: enums.OffOn|number
  reserved12?: number
}

/**
 * @category PGN_130836_MaretronSwitchStatusCounter
 */
export const newPGN_130836_MaretronSwitchStatusCounter = (fields: PGN_130836_MaretronSwitchStatusCounterCreateArgs, dst:number=255) : PGN_130836_MaretronSwitchStatusCounter => {
  return {
    ...PGN_130836_MaretronSwitchStatusCounterDefaults,
    dst,
    fields: {
      ...PGN_130836_MaretronSwitchStatusCounterMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130837
  *
  * Description: Simnet: Fuel Flow Turbine Configuration
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130837_SimnetFuelFlowTurbineConfiguration
 */
export interface PGN_130837_SimnetFuelFlowTurbineConfiguration extends PGN {
 fields: PGN_130837_SimnetFuelFlowTurbineConfigurationFields
}

/**
 * @category PGN_130837_SimnetFuelFlowTurbineConfiguration
 */
export interface PGN_130837_SimnetFuelFlowTurbineConfigurationFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

/**
 * @category PGN_130837_SimnetFuelFlowTurbineConfiguration
 */
export const PGN_130837_SimnetFuelFlowTurbineConfigurationDefaults = {
  pgn: 130837,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130837_SimnetFuelFlowTurbineConfiguration
 */
export const PGN_130837_SimnetFuelFlowTurbineConfigurationMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130837_SimnetFuelFlowTurbineConfiguration
 */
export interface PGN_130837_SimnetFuelFlowTurbineConfigurationCreateArgs {
  reserved?: number
}

/**
 * @category PGN_130837_SimnetFuelFlowTurbineConfiguration
 */
export const newPGN_130837_SimnetFuelFlowTurbineConfiguration = (fields: PGN_130837_SimnetFuelFlowTurbineConfigurationCreateArgs, dst:number=255) : PGN_130837_SimnetFuelFlowTurbineConfiguration => {
  return {
    ...PGN_130837_SimnetFuelFlowTurbineConfigurationDefaults,
    dst,
    fields: {
      ...PGN_130837_SimnetFuelFlowTurbineConfigurationMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130837
  *
  * Description: Maretron: Switch Status Timer
  *
  * Match: Manufacturer Code == Maretron<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130837_MaretronSwitchStatusTimer
 */
export interface PGN_130837_MaretronSwitchStatusTimer extends PGN {
 fields: PGN_130837_MaretronSwitchStatusTimerFields
}

/**
 * @category PGN_130837_MaretronSwitchStatusTimer
 */
export interface PGN_130837_MaretronSwitchStatusTimerFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  instance: N2K_Number
  indicatorNumber?: N2K_Number
  startDate?: N2K_Date
  startTime?: N2K_Time
  accumulatedOffPeriod?: N2K_Duration
  accumulatedOnPeriod?: N2K_Duration
  accumulatedErrorPeriod?: N2K_Duration
  switchStatus?: enums.OffOn|number
  reserved12?: number
}

/**
 * @category PGN_130837_MaretronSwitchStatusTimer
 */
export const PGN_130837_MaretronSwitchStatusTimerDefaults = {
  pgn: 130837,
  dst: 255,
  prio: 6
}

/**
 * @category PGN_130837_MaretronSwitchStatusTimer
 */
export const PGN_130837_MaretronSwitchStatusTimerMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Maretron,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130837_MaretronSwitchStatusTimer
 */
export interface PGN_130837_MaretronSwitchStatusTimerCreateArgs {
  reserved?: number
  instance: N2K_Number
  indicatorNumber?: N2K_Number
  startDate?: N2K_Date
  startTime?: N2K_Time
  accumulatedOffPeriod?: N2K_Duration
  accumulatedOnPeriod?: N2K_Duration
  accumulatedErrorPeriod?: N2K_Duration
  switchStatus?: enums.OffOn|number
  reserved12?: number
}

/**
 * @category PGN_130837_MaretronSwitchStatusTimer
 */
export const newPGN_130837_MaretronSwitchStatusTimer = (fields: PGN_130837_MaretronSwitchStatusTimerCreateArgs, dst:number=255) : PGN_130837_MaretronSwitchStatusTimer => {
  return {
    ...PGN_130837_MaretronSwitchStatusTimerDefaults,
    dst,
    fields: {
      ...PGN_130837_MaretronSwitchStatusTimerMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130838
  *
  * Description: Simnet: Fluid Level Warning
  *
  * @category PGN_130838
 */
export interface PGN_130838 extends PGN {
 fields: PGN_130838Fields
}

/**
 * @category PGN_130838
 */
export interface PGN_130838Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

/**
 * @category PGN_130838
 */
export const PGN_130838Defaults = {
  pgn: 130838,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130838
 */
export const newPGN_130838 = (fields: PGN_130838Fields, dst:number=255) : PGN_130838 => {
  return {
    ...PGN_130838Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130839
  *
  * Description: Simnet: Pressure Sensor Configuration
  *
  * @category PGN_130839
 */
export interface PGN_130839 extends PGN {
 fields: PGN_130839Fields
}

/**
 * @category PGN_130839
 */
export interface PGN_130839Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

/**
 * @category PGN_130839
 */
export const PGN_130839Defaults = {
  pgn: 130839,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130839
 */
export const newPGN_130839 = (fields: PGN_130839Fields, dst:number=255) : PGN_130839 => {
  return {
    ...PGN_130839Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130840
  *
  * Description: Simnet: Data User Group Configuration
  *
  * @category PGN_130840
 */
export interface PGN_130840 extends PGN {
 fields: PGN_130840Fields
}

/**
 * @category PGN_130840
 */
export interface PGN_130840Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

/**
 * @category PGN_130840
 */
export const PGN_130840Defaults = {
  pgn: 130840,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130840
 */
export const newPGN_130840 = (fields: PGN_130840Fields, dst:number=255) : PGN_130840 => {
  return {
    ...PGN_130840Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130842
  *
  * Description: Simnet: AIS Class B static data (msg 24 Part A)
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130842_SimnetAisClassBstaticDataMsg24PartA
 */
export interface PGN_130842_SimnetAisClassBstaticDataMsg24PartA extends PGN {
 fields: PGN_130842_SimnetAisClassBstaticDataMsg24PartAFields
}

/**
 * @category PGN_130842_SimnetAisClassBstaticDataMsg24PartA
 */
export interface PGN_130842_SimnetAisClassBstaticDataMsg24PartAFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: N2K_Number
  repeatIndicator?: enums.RepeatIndicator|number
  d?: N2K_Number
  e?: N2K_Number
  userId: N2K_Mmsi
  name?: N2K_StringFix
}

/**
 * @category PGN_130842_SimnetAisClassBstaticDataMsg24PartA
 */
export const PGN_130842_SimnetAisClassBstaticDataMsg24PartADefaults = {
  pgn: 130842,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130842_SimnetAisClassBstaticDataMsg24PartA
 */
export const PGN_130842_SimnetAisClassBstaticDataMsg24PartAMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130842_SimnetAisClassBstaticDataMsg24PartA
 */
export interface PGN_130842_SimnetAisClassBstaticDataMsg24PartACreateArgs {
  reserved?: number
  messageId: N2K_Number
  repeatIndicator?: enums.RepeatIndicator|number
  d?: N2K_Number
  e?: N2K_Number
  userId: N2K_Mmsi
  name?: N2K_StringFix
}

/**
 * @category PGN_130842_SimnetAisClassBstaticDataMsg24PartA
 */
export const newPGN_130842_SimnetAisClassBstaticDataMsg24PartA = (fields: PGN_130842_SimnetAisClassBstaticDataMsg24PartACreateArgs, dst:number=255) : PGN_130842_SimnetAisClassBstaticDataMsg24PartA => {
  return {
    ...PGN_130842_SimnetAisClassBstaticDataMsg24PartADefaults,
    dst,
    fields: {
      ...PGN_130842_SimnetAisClassBstaticDataMsg24PartAMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130842
  *
  * Description: Furuno: Six Degrees Of Freedom Movement
  *
  * Match: Manufacturer Code == Furuno<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130842_FurunoSixDegreesOfFreedomMovement
 */
export interface PGN_130842_FurunoSixDegreesOfFreedomMovement extends PGN {
 fields: PGN_130842_FurunoSixDegreesOfFreedomMovementFields
}

/**
 * @category PGN_130842_FurunoSixDegreesOfFreedomMovement
 */
export interface PGN_130842_FurunoSixDegreesOfFreedomMovementFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
  f?: N2K_Number
  g?: N2K_Number
  h?: N2K_Number
  i?: N2K_Number
}

/**
 * @category PGN_130842_FurunoSixDegreesOfFreedomMovement
 */
export const PGN_130842_FurunoSixDegreesOfFreedomMovementDefaults = {
  pgn: 130842,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130842_FurunoSixDegreesOfFreedomMovement
 */
export const PGN_130842_FurunoSixDegreesOfFreedomMovementMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Furuno,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130842_FurunoSixDegreesOfFreedomMovement
 */
export interface PGN_130842_FurunoSixDegreesOfFreedomMovementCreateArgs {
  reserved?: number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
  f?: N2K_Number
  g?: N2K_Number
  h?: N2K_Number
  i?: N2K_Number
}

/**
 * @category PGN_130842_FurunoSixDegreesOfFreedomMovement
 */
export const newPGN_130842_FurunoSixDegreesOfFreedomMovement = (fields: PGN_130842_FurunoSixDegreesOfFreedomMovementCreateArgs, dst:number=255) : PGN_130842_FurunoSixDegreesOfFreedomMovement => {
  return {
    ...PGN_130842_FurunoSixDegreesOfFreedomMovementDefaults,
    dst,
    fields: {
      ...PGN_130842_FurunoSixDegreesOfFreedomMovementMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130842
  *
  * Description: Simnet: AIS Class B static data (msg 24 Part B)
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Message ID == Msg 24 Part B<br>
  *
  * @category PGN_130842_SimnetAisClassBstaticDataMsg24PartB
 */
export interface PGN_130842_SimnetAisClassBstaticDataMsg24PartB extends PGN {
 fields: PGN_130842_SimnetAisClassBstaticDataMsg24PartBFields
}

/**
 * @category PGN_130842_SimnetAisClassBstaticDataMsg24PartB
 */
export interface PGN_130842_SimnetAisClassBstaticDataMsg24PartBFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId: N2K_Number
  repeatIndicator?: enums.RepeatIndicator|number
  d?: N2K_Number
  e?: N2K_Number
  userId: N2K_Mmsi
  typeOfShip?: enums.ShipType|number
  vendorId?: N2K_StringFix
  callsign?: N2K_StringFix
  length?: N2K_Number
  beam?: N2K_Number
  positionReferenceFromStarboard?: N2K_Number
  positionReferenceFromBow?: N2K_Number
  mothershipUserId: N2K_Mmsi
  spare17?: number
  reserved18?: number
}

/**
 * @category PGN_130842_SimnetAisClassBstaticDataMsg24PartB
 */
export const PGN_130842_SimnetAisClassBstaticDataMsg24PartBDefaults = {
  pgn: 130842,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130842_SimnetAisClassBstaticDataMsg24PartB
 */
export const PGN_130842_SimnetAisClassBstaticDataMsg24PartBMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
  messageId: 1,
}

/**
 * @category PGN_130842_SimnetAisClassBstaticDataMsg24PartB
 */
export interface PGN_130842_SimnetAisClassBstaticDataMsg24PartBCreateArgs {
  reserved?: number
  repeatIndicator?: enums.RepeatIndicator|number
  d?: N2K_Number
  e?: N2K_Number
  userId: N2K_Mmsi
  typeOfShip?: enums.ShipType|number
  vendorId?: N2K_StringFix
  callsign?: N2K_StringFix
  length?: N2K_Number
  beam?: N2K_Number
  positionReferenceFromStarboard?: N2K_Number
  positionReferenceFromBow?: N2K_Number
  mothershipUserId: N2K_Mmsi
  spare17?: number
  reserved18?: number
}

/**
 * @category PGN_130842_SimnetAisClassBstaticDataMsg24PartB
 */
export const newPGN_130842_SimnetAisClassBstaticDataMsg24PartB = (fields: PGN_130842_SimnetAisClassBstaticDataMsg24PartBCreateArgs, dst:number=255) : PGN_130842_SimnetAisClassBstaticDataMsg24PartB => {
  return {
    ...PGN_130842_SimnetAisClassBstaticDataMsg24PartBDefaults,
    dst,
    fields: {
      ...PGN_130842_SimnetAisClassBstaticDataMsg24PartBMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130843
  *
  * Description: Furuno: Heel Angle, Roll Information
  *
  * Match: Manufacturer Code == Furuno<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130843_FurunoHeelAngleRollInformation
 */
export interface PGN_130843_FurunoHeelAngleRollInformation extends PGN {
 fields: PGN_130843_FurunoHeelAngleRollInformationFields
}

/**
 * @category PGN_130843_FurunoHeelAngleRollInformation
 */
export interface PGN_130843_FurunoHeelAngleRollInformationFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: N2K_Number
  b?: N2K_Number
  yaw?: N2K_Number
  pitch?: N2K_Number
  roll?: N2K_Number
}

/**
 * @category PGN_130843_FurunoHeelAngleRollInformation
 */
export const PGN_130843_FurunoHeelAngleRollInformationDefaults = {
  pgn: 130843,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130843_FurunoHeelAngleRollInformation
 */
export const PGN_130843_FurunoHeelAngleRollInformationMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Furuno,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130843_FurunoHeelAngleRollInformation
 */
export interface PGN_130843_FurunoHeelAngleRollInformationCreateArgs {
  reserved?: number
  a?: N2K_Number
  b?: N2K_Number
  yaw?: N2K_Number
  pitch?: N2K_Number
  roll?: N2K_Number
}

/**
 * @category PGN_130843_FurunoHeelAngleRollInformation
 */
export const newPGN_130843_FurunoHeelAngleRollInformation = (fields: PGN_130843_FurunoHeelAngleRollInformationCreateArgs, dst:number=255) : PGN_130843_FurunoHeelAngleRollInformation => {
  return {
    ...PGN_130843_FurunoHeelAngleRollInformationDefaults,
    dst,
    fields: {
      ...PGN_130843_FurunoHeelAngleRollInformationMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130843
  *
  * Description: Simnet: Sonar Status, Frequency and DSP Voltage
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130843_SimnetSonarStatusFrequencyAndDspVoltage
 */
export interface PGN_130843_SimnetSonarStatusFrequencyAndDspVoltage extends PGN {
 fields: PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageFields
}

/**
 * @category PGN_130843_SimnetSonarStatusFrequencyAndDspVoltage
 */
export interface PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

/**
 * @category PGN_130843_SimnetSonarStatusFrequencyAndDspVoltage
 */
export const PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageDefaults = {
  pgn: 130843,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130843_SimnetSonarStatusFrequencyAndDspVoltage
 */
export const PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130843_SimnetSonarStatusFrequencyAndDspVoltage
 */
export interface PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageCreateArgs {
  reserved?: number
}

/**
 * @category PGN_130843_SimnetSonarStatusFrequencyAndDspVoltage
 */
export const newPGN_130843_SimnetSonarStatusFrequencyAndDspVoltage = (fields: PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageCreateArgs, dst:number=255) : PGN_130843_SimnetSonarStatusFrequencyAndDspVoltage => {
  return {
    ...PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageDefaults,
    dst,
    fields: {
      ...PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130845
  *
  * Description: Furuno: Multi Sats In View Extended
  *
  * Match: Manufacturer Code == Furuno<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130845_FurunoMultiSatsInViewExtended
 */
export interface PGN_130845_FurunoMultiSatsInViewExtended extends PGN {
 fields: PGN_130845_FurunoMultiSatsInViewExtendedFields
}

/**
 * @category PGN_130845_FurunoMultiSatsInViewExtended
 */
export interface PGN_130845_FurunoMultiSatsInViewExtendedFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

/**
 * @category PGN_130845_FurunoMultiSatsInViewExtended
 */
export const PGN_130845_FurunoMultiSatsInViewExtendedDefaults = {
  pgn: 130845,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130845_FurunoMultiSatsInViewExtended
 */
export const PGN_130845_FurunoMultiSatsInViewExtendedMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Furuno,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130845_FurunoMultiSatsInViewExtended
 */
export interface PGN_130845_FurunoMultiSatsInViewExtendedCreateArgs {
  reserved?: number
}

/**
 * @category PGN_130845_FurunoMultiSatsInViewExtended
 */
export const newPGN_130845_FurunoMultiSatsInViewExtended = (fields: PGN_130845_FurunoMultiSatsInViewExtendedCreateArgs, dst:number=255) : PGN_130845_FurunoMultiSatsInViewExtended => {
  return {
    ...PGN_130845_FurunoMultiSatsInViewExtendedDefaults,
    dst,
    fields: {
      ...PGN_130845_FurunoMultiSatsInViewExtendedMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130845
  *
  * Description: Simnet: Key Value
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130845_SimnetKeyValue
 */
export interface PGN_130845_SimnetKeyValue extends PGN {
 fields: PGN_130845_SimnetKeyValueFields
}

/**
 * @category PGN_130845_SimnetKeyValue
 */
export interface PGN_130845_SimnetKeyValueFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  address?: N2K_Number
  repeatIndicator?: enums.RepeatIndicator|number
  displayGroup?: enums.SimnetDisplayGroup|number
  reserved7?: number
  key?: N2K_DynamicFieldKey
  spare9?: number
  minlength?: N2K_Number
  value?: N2K_DynamicFieldValue
}

/**
 * @category PGN_130845_SimnetKeyValue
 */
export const PGN_130845_SimnetKeyValueDefaults = {
  pgn: 130845,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130845_SimnetKeyValue
 */
export const PGN_130845_SimnetKeyValueMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130845_SimnetKeyValue
 */
export interface PGN_130845_SimnetKeyValueCreateArgs {
  reserved?: number
  address?: N2K_Number
  repeatIndicator?: enums.RepeatIndicator|number
  displayGroup?: enums.SimnetDisplayGroup|number
  reserved7?: number
  key?: N2K_DynamicFieldKey
  spare9?: number
  minlength?: N2K_Number
  value?: N2K_DynamicFieldValue
}

/**
 * @category PGN_130845_SimnetKeyValue
 */
export const newPGN_130845_SimnetKeyValue = (fields: PGN_130845_SimnetKeyValueCreateArgs, dst:number=255) : PGN_130845_SimnetKeyValue => {
  return {
    ...PGN_130845_SimnetKeyValueDefaults,
    dst,
    fields: {
      ...PGN_130845_SimnetKeyValueMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130846
  *
  * Description: Simnet: Parameter Set
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130846_SimnetParameterSet
 */
export interface PGN_130846_SimnetParameterSet extends PGN {
 fields: PGN_130846_SimnetParameterSetFields
}

/**
 * @category PGN_130846_SimnetParameterSet
 */
export interface PGN_130846_SimnetParameterSetFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  address?: N2K_Number
  b?: N2K_Number
  displayGroup?: enums.SimnetDisplayGroup|number
  d?: N2K_Number
  key?: N2K_DynamicFieldKey
  spare9?: number
  length?: N2K_Number
  value?: N2K_DynamicFieldValue
}

/**
 * @category PGN_130846_SimnetParameterSet
 */
export const PGN_130846_SimnetParameterSetDefaults = {
  pgn: 130846,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130846_SimnetParameterSet
 */
export const PGN_130846_SimnetParameterSetMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130846_SimnetParameterSet
 */
export interface PGN_130846_SimnetParameterSetCreateArgs {
  reserved?: number
  address?: N2K_Number
  b?: N2K_Number
  displayGroup?: enums.SimnetDisplayGroup|number
  d?: N2K_Number
  key?: N2K_DynamicFieldKey
  spare9?: number
  length?: N2K_Number
  value?: N2K_DynamicFieldValue
}

/**
 * @category PGN_130846_SimnetParameterSet
 */
export const newPGN_130846_SimnetParameterSet = (fields: PGN_130846_SimnetParameterSetCreateArgs, dst:number=255) : PGN_130846_SimnetParameterSet => {
  return {
    ...PGN_130846_SimnetParameterSetDefaults,
    dst,
    fields: {
      ...PGN_130846_SimnetParameterSetMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130846
  *
  * Description: Furuno: Motion Sensor Status Extended
  *
  * Match: Manufacturer Code == Furuno<br>
  * Match: Industry Code == Marine Industry<br>
  *
  * @category PGN_130846_FurunoMotionSensorStatusExtended
 */
export interface PGN_130846_FurunoMotionSensorStatusExtended extends PGN {
 fields: PGN_130846_FurunoMotionSensorStatusExtendedFields
}

/**
 * @category PGN_130846_FurunoMotionSensorStatusExtended
 */
export interface PGN_130846_FurunoMotionSensorStatusExtendedFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
}

/**
 * @category PGN_130846_FurunoMotionSensorStatusExtended
 */
export const PGN_130846_FurunoMotionSensorStatusExtendedDefaults = {
  pgn: 130846,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130846_FurunoMotionSensorStatusExtended
 */
export const PGN_130846_FurunoMotionSensorStatusExtendedMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Furuno,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130846_FurunoMotionSensorStatusExtended
 */
export interface PGN_130846_FurunoMotionSensorStatusExtendedCreateArgs {
  reserved?: number
}

/**
 * @category PGN_130846_FurunoMotionSensorStatusExtended
 */
export const newPGN_130846_FurunoMotionSensorStatusExtended = (fields: PGN_130846_FurunoMotionSensorStatusExtendedCreateArgs, dst:number=255) : PGN_130846_FurunoMotionSensorStatusExtended => {
  return {
    ...PGN_130846_FurunoMotionSensorStatusExtendedDefaults,
    dst,
    fields: {
      ...PGN_130846_FurunoMotionSensorStatusExtendedMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130847
  *
  * Description: SeaTalk: Node Statistics
  *
  * @category PGN_130847
 */
export interface PGN_130847 extends PGN {
 fields: PGN_130847Fields
}

/**
 * @category PGN_130847
 */
export interface PGN_130847Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  productCode?: N2K_Number
  year?: N2K_Number
  month?: N2K_Number
  deviceNumber?: N2K_Number
  nodeVoltage?: N2K_Number
}

/**
 * @category PGN_130847
 */
export const PGN_130847Defaults = {
  pgn: 130847,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130847
 */
export const newPGN_130847 = (fields: PGN_130847Fields, dst:number=255) : PGN_130847 => {
  return {
    ...PGN_130847Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130848
  *
  * Description: SeaTalk: Waypoint Information
  *
  * @category PGN_130848
 */
export interface PGN_130848 extends PGN {
 fields: PGN_130848Fields
}

/**
 * @category PGN_130848
 */
export interface PGN_130848Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  sid?: N2K_Number
  waypointName?: N2K_StringFix
  waypointSequence?: N2K_StringFix
  bearingToWaypointTrue?: N2K_Number
  bearingToWaypointMagnetic?: N2K_Number
  distanceToWaypoint?: N2K_Number
}

/**
 * @category PGN_130848
 */
export const PGN_130848Defaults = {
  pgn: 130848,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130848
 */
export const newPGN_130848 = (fields: PGN_130848Fields, dst:number=255) : PGN_130848 => {
  return {
    ...PGN_130848Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130850
  *
  * Description: Simnet: AP Command
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Autopilot<br>
  *
  * @category PGN_130850_SimnetApCommand
 */
export interface PGN_130850_SimnetApCommand extends PGN {
 fields: PGN_130850_SimnetApCommandFields
}

/**
 * @category PGN_130850_SimnetApCommand
 */
export interface PGN_130850_SimnetApCommandFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  address?: N2K_Number
  reserved5?: number
  proprietaryId: enums.SimnetEventCommand|number
  apStatus?: enums.SimnetApStatus|number
  apCommand?: enums.SimnetApEvents|number
  spare9?: number
  direction?: enums.SimnetDirection|number
  angle?: N2K_Number
}

/**
 * @category PGN_130850_SimnetApCommand
 */
export const PGN_130850_SimnetApCommandDefaults = {
  pgn: 130850,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_130850_SimnetApCommand
 */
export const PGN_130850_SimnetApCommandMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SimnetEventCommand.Autopilot,
}

/**
 * @category PGN_130850_SimnetApCommand
 */
export interface PGN_130850_SimnetApCommandCreateArgs {
  reserved?: number
  address?: N2K_Number
  reserved5?: number
  apStatus?: enums.SimnetApStatus|number
  apCommand?: enums.SimnetApEvents|number
  spare9?: number
  direction?: enums.SimnetDirection|number
  angle?: N2K_Number
}

/**
 * @category PGN_130850_SimnetApCommand
 */
export const newPGN_130850_SimnetApCommand = (fields: PGN_130850_SimnetApCommandCreateArgs, dst:number=255) : PGN_130850_SimnetApCommand => {
  return {
    ...PGN_130850_SimnetApCommandDefaults,
    dst,
    fields: {
      ...PGN_130850_SimnetApCommandMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130850
  *
  * Description: Simnet: Event Command: AP command
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == AP command<br>
  *
  * @category PGN_130850_SimnetEventCommandApCommand
 */
export interface PGN_130850_SimnetEventCommandApCommand extends PGN {
 fields: PGN_130850_SimnetEventCommandApCommandFields
}

/**
 * @category PGN_130850_SimnetEventCommandApCommand
 */
export interface PGN_130850_SimnetEventCommandApCommandFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.SimnetEventCommand|number
  unusedA?: N2K_Number
  controllingDevice?: N2K_Number
  event?: enums.SimnetApEvents|number
  unusedB?: N2K_Number
  direction?: enums.SimnetDirection|number
  angle?: N2K_Number
  unusedC?: N2K_Number
}

/**
 * @category PGN_130850_SimnetEventCommandApCommand
 */
export const PGN_130850_SimnetEventCommandApCommandDefaults = {
  pgn: 130850,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_130850_SimnetEventCommandApCommand
 */
export const PGN_130850_SimnetEventCommandApCommandMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SimnetEventCommand.ApCommand,
}

/**
 * @category PGN_130850_SimnetEventCommandApCommand
 */
export interface PGN_130850_SimnetEventCommandApCommandCreateArgs {
  reserved?: number
  unusedA?: N2K_Number
  controllingDevice?: N2K_Number
  event?: enums.SimnetApEvents|number
  unusedB?: N2K_Number
  direction?: enums.SimnetDirection|number
  angle?: N2K_Number
  unusedC?: N2K_Number
}

/**
 * @category PGN_130850_SimnetEventCommandApCommand
 */
export const newPGN_130850_SimnetEventCommandApCommand = (fields: PGN_130850_SimnetEventCommandApCommandCreateArgs, dst:number=255) : PGN_130850_SimnetEventCommandApCommand => {
  return {
    ...PGN_130850_SimnetEventCommandApCommandDefaults,
    dst,
    fields: {
      ...PGN_130850_SimnetEventCommandApCommandMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130850
  *
  * Description: Simnet: Alarm
  *
  * Explanation: There may follow a PGN 130856 'Simnet: Alarm Text' message with a textual explanation of the alarm
  *
  * Match: Manufacturer Code == Simrad<br>
  * Match: Industry Code == Marine Industry<br>
  * Match: Proprietary ID == Alarm<br>
  *
  * @category PGN_130850_SimnetAlarm
 */
export interface PGN_130850_SimnetAlarm extends PGN {
 fields: PGN_130850_SimnetAlarmFields
}

/**
 * @category PGN_130850_SimnetAlarm
 */
export interface PGN_130850_SimnetAlarmFields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  address?: N2K_Number
  reserved5?: number
  proprietaryId: enums.SimnetEventCommand|number
  reserved7?: number
  alarm?: enums.SimnetAlarm|number
  messageId?: N2K_Number
  f?: N2K_Number
  g?: N2K_Number
}

/**
 * @category PGN_130850_SimnetAlarm
 */
export const PGN_130850_SimnetAlarmDefaults = {
  pgn: 130850,
  dst: 255,
  prio: 2
}

/**
 * @category PGN_130850_SimnetAlarm
 */
export const PGN_130850_SimnetAlarmMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
  proprietaryId: enums.SimnetEventCommand.Alarm,
}

/**
 * @category PGN_130850_SimnetAlarm
 */
export interface PGN_130850_SimnetAlarmCreateArgs {
  reserved?: number
  address?: N2K_Number
  reserved5?: number
  reserved7?: number
  alarm?: enums.SimnetAlarm|number
  messageId?: N2K_Number
  f?: N2K_Number
  g?: N2K_Number
}

/**
 * @category PGN_130850_SimnetAlarm
 */
export const newPGN_130850_SimnetAlarm = (fields: PGN_130850_SimnetAlarmCreateArgs, dst:number=255) : PGN_130850_SimnetAlarm => {
  return {
    ...PGN_130850_SimnetAlarmDefaults,
    dst,
    fields: {
      ...PGN_130850_SimnetAlarmMatchFields,
      ...fields
    }
  }
}
/**
  * PGN: 130851
  *
  * Description: Simnet: Event Reply: AP command
  *
  * @category PGN_130851
 */
export interface PGN_130851 extends PGN {
 fields: PGN_130851Fields
}

/**
 * @category PGN_130851
 */
export interface PGN_130851Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  proprietaryId: enums.SimnetEventCommand|number
  b?: N2K_Number
  address?: N2K_Number
  event?: enums.SimnetApEvents|number
  c?: N2K_Number
  direction?: enums.SimnetDirection|number
  angle?: N2K_Number
  g?: N2K_Number
}

/**
 * @category PGN_130851
 */
export const PGN_130851Defaults = {
  pgn: 130851,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130851
 */
export const newPGN_130851 = (fields: PGN_130851Fields, dst:number=255) : PGN_130851 => {
  return {
    ...PGN_130851Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130856
  *
  * Description: Simnet: Alarm Message
  *
  * Explanation: Usually accompanied by a PGN 130850 'Simnet: Alarm' message with the same information in binary form.
  *
  * @category PGN_130856
 */
export interface PGN_130856 extends PGN {
 fields: PGN_130856Fields
}

/**
 * @category PGN_130856
 */
export interface PGN_130856Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  messageId?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  text?: N2K_StringFix
}

/**
 * @category PGN_130856
 */
export const PGN_130856Defaults = {
  pgn: 130856,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130856
 */
export const newPGN_130856 = (fields: PGN_130856Fields, dst:number=255) : PGN_130856 => {
  return {
    ...PGN_130856Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130860
  *
  * Description: Simnet: AP Unknown 4
  *
  * Explanation: Seen as sent by AC-42 and H5000 AP only so far.
  *
  * @category PGN_130860
 */
export interface PGN_130860 extends PGN {
 fields: PGN_130860Fields
}

/**
 * @category PGN_130860
 */
export interface PGN_130860Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  a?: N2K_Number
  b?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
  f?: N2K_Number
}

/**
 * @category PGN_130860
 */
export const PGN_130860Defaults = {
  pgn: 130860,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130860
 */
export const newPGN_130860 = (fields: PGN_130860Fields, dst:number=255) : PGN_130860 => {
  return {
    ...PGN_130860Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130880
  *
  * Description: Airmar: Additional Weather Data
  *
  * @category PGN_130880
 */
export interface PGN_130880 extends PGN {
 fields: PGN_130880Fields
}

/**
 * @category PGN_130880
 */
export interface PGN_130880Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  c?: N2K_Number
  apparentWindchillTemperature?: N2K_Number
  trueWindchillTemperature?: N2K_Number
  dewpoint?: N2K_Number
}

/**
 * @category PGN_130880
 */
export const PGN_130880Defaults = {
  pgn: 130880,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130880
 */
export const newPGN_130880 = (fields: PGN_130880Fields, dst:number=255) : PGN_130880 => {
  return {
    ...PGN_130880Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130881
  *
  * Description: Airmar: Heater Control
  *
  * @category PGN_130881
 */
export interface PGN_130881 extends PGN {
 fields: PGN_130881Fields
}

/**
 * @category PGN_130881
 */
export interface PGN_130881Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  c?: N2K_Number
  plateTemperature?: N2K_Number
  airTemperature?: N2K_Number
  dewpoint?: N2K_Number
}

/**
 * @category PGN_130881
 */
export const PGN_130881Defaults = {
  pgn: 130881,
  dst: 255,
  prio: 3
}

/**
 * @category PGN_130881
 */
export const newPGN_130881 = (fields: PGN_130881Fields, dst:number=255) : PGN_130881 => {
  return {
    ...PGN_130881Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130918
  *
  * Description: SeaTalk: Route Information
  *
  * @category PGN_130918
 */
export interface PGN_130918 extends PGN {
 fields: PGN_130918Fields
}

/**
 * @category PGN_130918
 */
export interface PGN_130918Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  currentWaypointSequence?: N2K_Number
  currentWaypointName?: N2K_StringFix
  nextWaypointSequence?: N2K_Number
  nextWaypointName?: N2K_StringFix
  unknown?: N2K_Number
  distancePositionToNextWaypoint?: N2K_Number
  bearingPositionToNextWaypointTrue?: N2K_Number
  bearingCurrentWaypointToNextWaypointTrue?: N2K_Number
}

/**
 * @category PGN_130918
 */
export const PGN_130918Defaults = {
  pgn: 130918,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130918
 */
export const newPGN_130918 = (fields: PGN_130918Fields, dst:number=255) : PGN_130918 => {
  return {
    ...PGN_130918Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
/**
  * PGN: 130944
  *
  * Description: Airmar: POST
  *
  * @category PGN_130944
 */
export interface PGN_130944 extends PGN {
 fields: PGN_130944Fields
}

/**
 * @category PGN_130944
 */
export interface PGN_130944Fields {
  manufacturerCode: enums.ManufacturerCode|number
  reserved?: number
  industryCode: enums.IndustryCode|number
  control: enums.AirmarPostControl|number
  reserved5?: number
  numberOfIdTestResultPairsToFollow?: N2K_Number
  testId?: enums.AirmarPostId|number
  testResult?: N2K_Number
}

/**
 * @category PGN_130944
 */
export const PGN_130944Defaults = {
  pgn: 130944,
  dst: 255,
  prio: 7
}

/**
 * @category PGN_130944
 */
export const newPGN_130944 = (fields: PGN_130944Fields, dst:number=255) : PGN_130944 => {
  return {
    ...PGN_130944Defaults,
    dst,
    fields: {
      ...fields
    }
  }
}
