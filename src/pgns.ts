/* eslint-disable @typescript-eslint/no-explicit-any */
import * as enums from './enums'

import {isMatch} from './utilities'

const pgnIdToClass: {[key:string]: any} = {}

export const getPGNClass = (id: string) => {
  return pgnIdToClass[id]
}
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
export interface PGNFields {}

/**'
 * @category PGN Definitions
 */
export interface PGNInterface {
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
 * @category PGN Definitions
 */
export class PGN {
  pgn: number
  prio: number
  src?: number
  dst: number
  timestamp?: string
  input?: string[]
  description?: string
  fields: PGNFields
  
  constructor(fields: PGN) {
    this.pgn = fields.pgn
    this.prio = fields.prio
    this.src = fields.src
    this.dst = fields.dst !== undefined ? fields.dst : 255
    this.timestamp = fields.timestamp
    this.fields = fields.fields
  }
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
export interface PGN_59392Interface extends PGNInterface {
  fields: PGN_59392Fields
}

/**
 * @category PGN_59392
 */
export interface PGN_59392Fields {
  control?: enums.IsoControl | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_59392
 */
export class PGN_59392 extends PGN implements PGN_59392Interface {
  fields: PGN_59392Fields

  constructor(fields: PGN_59392Fields, dst: number = 255) {
    super(PGN_59392Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['isoAcknowledgement'] = (fields:any, dst:number) => new PGN_59392(fields, dst)


/**
 * PGN: 59904
 *
 * Description: ISO Request
 *
 * Explanation: As defined by ISO, this message has a data length of 3 bytes with no padding added to complete the single frame. The appropriate response to this message is based on the PGN being requested, and whether the receiver supports the requested PGN.
 *
 * @category PGN_59904
 */
export interface PGN_59904Interface extends PGNInterface {
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_59904
 */
export class PGN_59904 extends PGN implements PGN_59904Interface {
  fields: PGN_59904Fields

  constructor(fields: PGN_59904Fields, dst: number = 255) {
    super(PGN_59904Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['isoRequest'] = (fields:any, dst:number) => new PGN_59904(fields, dst)


/**
 * PGN: 60160
 *
 * Description: ISO Transport Protocol, Data Transfer
 *
 * Explanation: ISO 11783 defines this PGN as part of the Transport Protocol method used for transmitting messages that have 9 or more data bytes. This PGN represents a single packet of a multipacket message.
 *
 * @category PGN_60160
 */
export interface PGN_60160Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_60160
 */
export class PGN_60160 extends PGN implements PGN_60160Interface {
  fields: PGN_60160Fields

  constructor(fields: PGN_60160Fields, dst: number = 255) {
    super(PGN_60160Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['isoTransportProtocolDataTransfer'] = (fields:any, dst:number) => new PGN_60160(fields, dst)


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
export interface PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendInterface extends PGNInterface {
  fields: PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendFields
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementRequestToSend
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendFields {
  groupFunctionCode?: enums.IsoCommand | number
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
  prio: 3,
  fields: []
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
export class PGN_60416_IsoTransportProtocolConnectionManagementRequestToSend extends PGN implements PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendInterface {
  fields: PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendFields

  constructor(fields: PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendCreateArgs, dst: number = 255) {
    super(PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendDefaults)
    this.dst = dst
    this.fields = { ...PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_60416_IsoTransportProtocolConnectionManagementRequestToSendMatchFields)
}
}
pgnIdToClass['isoTransportProtocolConnectionManagementRequestToSend'] = (fields:any, dst:number) => new PGN_60416_IsoTransportProtocolConnectionManagementRequestToSend(fields, dst)


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
export interface PGN_60416_IsoTransportProtocolConnectionManagementClearToSendInterface extends PGNInterface {
  fields: PGN_60416_IsoTransportProtocolConnectionManagementClearToSendFields
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementClearToSend
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementClearToSendFields {
  groupFunctionCode?: enums.IsoCommand | number
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
  prio: 3,
  fields: []
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
export class PGN_60416_IsoTransportProtocolConnectionManagementClearToSend extends PGN implements PGN_60416_IsoTransportProtocolConnectionManagementClearToSendInterface {
  fields: PGN_60416_IsoTransportProtocolConnectionManagementClearToSendFields

  constructor(fields: PGN_60416_IsoTransportProtocolConnectionManagementClearToSendCreateArgs, dst: number = 255) {
    super(PGN_60416_IsoTransportProtocolConnectionManagementClearToSendDefaults)
    this.dst = dst
    this.fields = { ...PGN_60416_IsoTransportProtocolConnectionManagementClearToSendMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_60416_IsoTransportProtocolConnectionManagementClearToSendMatchFields)
}
}
pgnIdToClass['isoTransportProtocolConnectionManagementClearToSend'] = (fields:any, dst:number) => new PGN_60416_IsoTransportProtocolConnectionManagementClearToSend(fields, dst)


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
export interface PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageInterface extends PGNInterface {
  fields: PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageFields
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessage
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageFields {
  groupFunctionCode?: enums.IsoCommand | number
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
  prio: 3,
  fields: []
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
export class PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessage extends PGN implements PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageInterface {
  fields: PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageFields

  constructor(fields: PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageCreateArgs, dst: number = 255) {
    super(PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageDefaults)
    this.dst = dst
    this.fields = { ...PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessageMatchFields)
}
}
pgnIdToClass['isoTransportProtocolConnectionManagementEndOfMessage'] = (fields:any, dst:number) => new PGN_60416_IsoTransportProtocolConnectionManagementEndOfMessage(fields, dst)


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
export interface PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceInterface extends PGNInterface {
  fields: PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceFields
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounce
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceFields {
  groupFunctionCode?: enums.IsoCommand | number
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
  prio: 3,
  fields: []
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
export class PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounce extends PGN implements PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceInterface {
  fields: PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceFields

  constructor(fields: PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceCreateArgs, dst: number = 255) {
    super(PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceDefaults)
    this.dst = dst
    this.fields = { ...PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounceMatchFields)
}
}
pgnIdToClass['isoTransportProtocolConnectionManagementBroadcastAnnounce'] = (fields:any, dst:number) => new PGN_60416_IsoTransportProtocolConnectionManagementBroadcastAnnounce(fields, dst)


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
export interface PGN_60416_IsoTransportProtocolConnectionManagementAbortInterface extends PGNInterface {
  fields: PGN_60416_IsoTransportProtocolConnectionManagementAbortFields
}

/**
 * @category PGN_60416_IsoTransportProtocolConnectionManagementAbort
 */
export interface PGN_60416_IsoTransportProtocolConnectionManagementAbortFields {
  groupFunctionCode?: enums.IsoCommand | number
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
  prio: 3,
  fields: []
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
export class PGN_60416_IsoTransportProtocolConnectionManagementAbort extends PGN implements PGN_60416_IsoTransportProtocolConnectionManagementAbortInterface {
  fields: PGN_60416_IsoTransportProtocolConnectionManagementAbortFields

  constructor(fields: PGN_60416_IsoTransportProtocolConnectionManagementAbortCreateArgs, dst: number = 255) {
    super(PGN_60416_IsoTransportProtocolConnectionManagementAbortDefaults)
    this.dst = dst
    this.fields = { ...PGN_60416_IsoTransportProtocolConnectionManagementAbortMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_60416_IsoTransportProtocolConnectionManagementAbortMatchFields)
}
}
pgnIdToClass['isoTransportProtocolConnectionManagementAbort'] = (fields:any, dst:number) => new PGN_60416_IsoTransportProtocolConnectionManagementAbort(fields, dst)


/**
 * PGN: 60928
 *
 * Description: ISO Address Claim
 *
 * Explanation: This network management message is used to claim network address, reply to devices requesting the claimed address, and to respond with device information (NAME) requested by the ISO Request or Complex Request Group Function. This PGN contains several fields that are requestable, either independently or in any combination. Note that there are several places where this 64-bit data also occurs, these are named ISO_NAME and can be recursively explained.
 *
 * @category PGN_60928
 */
export interface PGN_60928Interface extends PGNInterface {
  fields: PGN_60928Fields
}

/**
 * @category PGN_60928
 */
export interface PGN_60928Fields {
  uniqueNumber?: N2K_Number
  manufacturerCode?: enums.ManufacturerCode | number
  deviceInstanceLower?: N2K_Number
  deviceInstanceUpper?: N2K_Number
  deviceFunction?: enums.DeviceFunction | number
  spare?: number
  deviceClass?: enums.DeviceClass | number
  systemInstance?: N2K_Number
  industryGroup?: enums.IndustryCode | number
  arbitraryAddressCapable: enums.YesNo | number
}

/**
 * @category PGN_60928
 */
export const PGN_60928Defaults = {
  pgn: 60928,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_60928
 */
export class PGN_60928 extends PGN implements PGN_60928Interface {
  fields: PGN_60928Fields

  constructor(fields: PGN_60928Fields, dst: number = 255) {
    super(PGN_60928Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['isoAddressClaim'] = (fields:any, dst:number) => new PGN_60928(fields, dst)


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
export interface PGN_61184_SeatalkWirelessKeypadLightControlInterface extends PGNInterface {
  fields: PGN_61184_SeatalkWirelessKeypadLightControlFields
}

/**
 * @category PGN_61184_SeatalkWirelessKeypadLightControl
 */
export interface PGN_61184_SeatalkWirelessKeypadLightControlFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
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
export class PGN_61184_SeatalkWirelessKeypadLightControl extends PGN implements PGN_61184_SeatalkWirelessKeypadLightControlInterface {
  fields: PGN_61184_SeatalkWirelessKeypadLightControlFields

  constructor(fields: PGN_61184_SeatalkWirelessKeypadLightControlCreateArgs, dst: number = 255) {
    super(PGN_61184_SeatalkWirelessKeypadLightControlDefaults)
    this.dst = dst
    this.fields = { ...PGN_61184_SeatalkWirelessKeypadLightControlMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_61184_SeatalkWirelessKeypadLightControlMatchFields)
}
}
pgnIdToClass['seatalkWirelessKeypadLightControl'] = (fields:any, dst:number) => new PGN_61184_SeatalkWirelessKeypadLightControl(fields, dst)


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
export interface PGN_61184_SeatalkWirelessKeypadControlInterface extends PGNInterface {
  fields: PGN_61184_SeatalkWirelessKeypadControlFields
}

/**
 * @category PGN_61184_SeatalkWirelessKeypadControl
 */
export interface PGN_61184_SeatalkWirelessKeypadControlFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
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
export class PGN_61184_SeatalkWirelessKeypadControl extends PGN implements PGN_61184_SeatalkWirelessKeypadControlInterface {
  fields: PGN_61184_SeatalkWirelessKeypadControlFields

  constructor(fields: PGN_61184_SeatalkWirelessKeypadControlCreateArgs, dst: number = 255) {
    super(PGN_61184_SeatalkWirelessKeypadControlDefaults)
    this.dst = dst
    this.fields = { ...PGN_61184_SeatalkWirelessKeypadControlMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_61184_SeatalkWirelessKeypadControlMatchFields)
}
}
pgnIdToClass['seatalkWirelessKeypadControl'] = (fields:any, dst:number) => new PGN_61184_SeatalkWirelessKeypadControl(fields, dst)


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
export interface PGN_61184_VictronBatteryRegisterInterface extends PGNInterface {
  fields: PGN_61184_VictronBatteryRegisterFields
}

/**
 * @category PGN_61184_VictronBatteryRegister
 */
export interface PGN_61184_VictronBatteryRegisterFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  registerId?: N2K_Number
  payload?: N2K_Number
}

/**
 * @category PGN_61184_VictronBatteryRegister
 */
export const PGN_61184_VictronBatteryRegisterDefaults = {
  pgn: 61184,
  dst: 255,
  prio: 3,
  fields: []
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
export class PGN_61184_VictronBatteryRegister extends PGN implements PGN_61184_VictronBatteryRegisterInterface {
  fields: PGN_61184_VictronBatteryRegisterFields

  constructor(fields: PGN_61184_VictronBatteryRegisterCreateArgs, dst: number = 255) {
    super(PGN_61184_VictronBatteryRegisterDefaults)
    this.dst = dst
    this.fields = { ...PGN_61184_VictronBatteryRegisterMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_61184_VictronBatteryRegisterMatchFields)
}
}
pgnIdToClass['victronBatteryRegister'] = (fields:any, dst:number) => new PGN_61184_VictronBatteryRegister(fields, dst)


/**
 * PGN: 65001
 *
 * Description: Bus #1 Phase C Basic AC Quantities
 *
 * @category PGN_65001
 */
export interface PGN_65001Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65001
 */
export class PGN_65001 extends PGN implements PGN_65001Interface {
  fields: PGN_65001Fields

  constructor(fields: PGN_65001Fields, dst: number = 255) {
    super(PGN_65001Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['bus1PhaseCBasicAcQuantities'] = (fields:any, dst:number) => new PGN_65001(fields, dst)


/**
 * PGN: 65002
 *
 * Description: Bus #1 Phase B Basic AC Quantities
 *
 * @category PGN_65002
 */
export interface PGN_65002Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65002
 */
export class PGN_65002 extends PGN implements PGN_65002Interface {
  fields: PGN_65002Fields

  constructor(fields: PGN_65002Fields, dst: number = 255) {
    super(PGN_65002Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['bus1PhaseBBasicAcQuantities'] = (fields:any, dst:number) => new PGN_65002(fields, dst)


/**
 * PGN: 65003
 *
 * Description: Bus #1 Phase A Basic AC Quantities
 *
 * @category PGN_65003
 */
export interface PGN_65003Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65003
 */
export class PGN_65003 extends PGN implements PGN_65003Interface {
  fields: PGN_65003Fields

  constructor(fields: PGN_65003Fields, dst: number = 255) {
    super(PGN_65003Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['bus1PhaseABasicAcQuantities'] = (fields:any, dst:number) => new PGN_65003(fields, dst)


/**
 * PGN: 65004
 *
 * Description: Bus #1 Average Basic AC Quantities
 *
 * @category PGN_65004
 */
export interface PGN_65004Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65004
 */
export class PGN_65004 extends PGN implements PGN_65004Interface {
  fields: PGN_65004Fields

  constructor(fields: PGN_65004Fields, dst: number = 255) {
    super(PGN_65004Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['bus1AverageBasicAcQuantities'] = (fields:any, dst:number) => new PGN_65004(fields, dst)


/**
 * PGN: 65005
 *
 * Description: Utility Total AC Energy
 *
 * @category PGN_65005
 */
export interface PGN_65005Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65005
 */
export class PGN_65005 extends PGN implements PGN_65005Interface {
  fields: PGN_65005Fields

  constructor(fields: PGN_65005Fields, dst: number = 255) {
    super(PGN_65005Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['utilityTotalAcEnergy'] = (fields:any, dst:number) => new PGN_65005(fields, dst)


/**
 * PGN: 65006
 *
 * Description: Utility Phase C AC Reactive Power
 *
 * @category PGN_65006
 */
export interface PGN_65006Interface extends PGNInterface {
  fields: PGN_65006Fields
}

/**
 * @category PGN_65006
 */
export interface PGN_65006Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor | number
  reserved?: number
}

/**
 * @category PGN_65006
 */
export const PGN_65006Defaults = {
  pgn: 65006,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_65006
 */
export class PGN_65006 extends PGN implements PGN_65006Interface {
  fields: PGN_65006Fields

  constructor(fields: PGN_65006Fields, dst: number = 255) {
    super(PGN_65006Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['utilityPhaseCAcReactivePower'] = (fields:any, dst:number) => new PGN_65006(fields, dst)


/**
 * PGN: 65007
 *
 * Description: Utility Phase C AC Power
 *
 * @category PGN_65007
 */
export interface PGN_65007Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65007
 */
export class PGN_65007 extends PGN implements PGN_65007Interface {
  fields: PGN_65007Fields

  constructor(fields: PGN_65007Fields, dst: number = 255) {
    super(PGN_65007Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['utilityPhaseCAcPower'] = (fields:any, dst:number) => new PGN_65007(fields, dst)


/**
 * PGN: 65008
 *
 * Description: Utility Phase C Basic AC Quantities
 *
 * @category PGN_65008
 */
export interface PGN_65008Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65008
 */
export class PGN_65008 extends PGN implements PGN_65008Interface {
  fields: PGN_65008Fields

  constructor(fields: PGN_65008Fields, dst: number = 255) {
    super(PGN_65008Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['utilityPhaseCBasicAcQuantities'] = (fields:any, dst:number) => new PGN_65008(fields, dst)


/**
 * PGN: 65009
 *
 * Description: Utility Phase B AC Reactive Power
 *
 * @category PGN_65009
 */
export interface PGN_65009Interface extends PGNInterface {
  fields: PGN_65009Fields
}

/**
 * @category PGN_65009
 */
export interface PGN_65009Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor | number
  reserved?: number
}

/**
 * @category PGN_65009
 */
export const PGN_65009Defaults = {
  pgn: 65009,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_65009
 */
export class PGN_65009 extends PGN implements PGN_65009Interface {
  fields: PGN_65009Fields

  constructor(fields: PGN_65009Fields, dst: number = 255) {
    super(PGN_65009Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['utilityPhaseBAcReactivePower'] = (fields:any, dst:number) => new PGN_65009(fields, dst)


/**
 * PGN: 65010
 *
 * Description: Utility Phase B AC Power
 *
 * @category PGN_65010
 */
export interface PGN_65010Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65010
 */
export class PGN_65010 extends PGN implements PGN_65010Interface {
  fields: PGN_65010Fields

  constructor(fields: PGN_65010Fields, dst: number = 255) {
    super(PGN_65010Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['utilityPhaseBAcPower'] = (fields:any, dst:number) => new PGN_65010(fields, dst)


/**
 * PGN: 65011
 *
 * Description: Utility Phase B Basic AC Quantities
 *
 * @category PGN_65011
 */
export interface PGN_65011Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65011
 */
export class PGN_65011 extends PGN implements PGN_65011Interface {
  fields: PGN_65011Fields

  constructor(fields: PGN_65011Fields, dst: number = 255) {
    super(PGN_65011Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['utilityPhaseBBasicAcQuantities'] = (fields:any, dst:number) => new PGN_65011(fields, dst)


/**
 * PGN: 65012
 *
 * Description: Utility Phase A AC Reactive Power
 *
 * @category PGN_65012
 */
export interface PGN_65012Interface extends PGNInterface {
  fields: PGN_65012Fields
}

/**
 * @category PGN_65012
 */
export interface PGN_65012Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor | number
  reserved?: number
}

/**
 * @category PGN_65012
 */
export const PGN_65012Defaults = {
  pgn: 65012,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_65012
 */
export class PGN_65012 extends PGN implements PGN_65012Interface {
  fields: PGN_65012Fields

  constructor(fields: PGN_65012Fields, dst: number = 255) {
    super(PGN_65012Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['utilityPhaseAAcReactivePower'] = (fields:any, dst:number) => new PGN_65012(fields, dst)


/**
 * PGN: 65013
 *
 * Description: Utility Phase A AC Power
 *
 * @category PGN_65013
 */
export interface PGN_65013Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65013
 */
export class PGN_65013 extends PGN implements PGN_65013Interface {
  fields: PGN_65013Fields

  constructor(fields: PGN_65013Fields, dst: number = 255) {
    super(PGN_65013Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['utilityPhaseAAcPower'] = (fields:any, dst:number) => new PGN_65013(fields, dst)


/**
 * PGN: 65014
 *
 * Description: Utility Phase A Basic AC Quantities
 *
 * @category PGN_65014
 */
export interface PGN_65014Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65014
 */
export class PGN_65014 extends PGN implements PGN_65014Interface {
  fields: PGN_65014Fields

  constructor(fields: PGN_65014Fields, dst: number = 255) {
    super(PGN_65014Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['utilityPhaseABasicAcQuantities'] = (fields:any, dst:number) => new PGN_65014(fields, dst)


/**
 * PGN: 65015
 *
 * Description: Utility Total AC Reactive Power
 *
 * @category PGN_65015
 */
export interface PGN_65015Interface extends PGNInterface {
  fields: PGN_65015Fields
}

/**
 * @category PGN_65015
 */
export interface PGN_65015Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor | number
  reserved?: number
}

/**
 * @category PGN_65015
 */
export const PGN_65015Defaults = {
  pgn: 65015,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_65015
 */
export class PGN_65015 extends PGN implements PGN_65015Interface {
  fields: PGN_65015Fields

  constructor(fields: PGN_65015Fields, dst: number = 255) {
    super(PGN_65015Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['utilityTotalAcReactivePower'] = (fields:any, dst:number) => new PGN_65015(fields, dst)


/**
 * PGN: 65016
 *
 * Description: Utility Total AC Power
 *
 * @category PGN_65016
 */
export interface PGN_65016Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65016
 */
export class PGN_65016 extends PGN implements PGN_65016Interface {
  fields: PGN_65016Fields

  constructor(fields: PGN_65016Fields, dst: number = 255) {
    super(PGN_65016Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['utilityTotalAcPower'] = (fields:any, dst:number) => new PGN_65016(fields, dst)


/**
 * PGN: 65017
 *
 * Description: Utility Average Basic AC Quantities
 *
 * @category PGN_65017
 */
export interface PGN_65017Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65017
 */
export class PGN_65017 extends PGN implements PGN_65017Interface {
  fields: PGN_65017Fields

  constructor(fields: PGN_65017Fields, dst: number = 255) {
    super(PGN_65017Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['utilityAverageBasicAcQuantities'] = (fields:any, dst:number) => new PGN_65017(fields, dst)


/**
 * PGN: 65018
 *
 * Description: Generator Total AC Energy
 *
 * @category PGN_65018
 */
export interface PGN_65018Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65018
 */
export class PGN_65018 extends PGN implements PGN_65018Interface {
  fields: PGN_65018Fields

  constructor(fields: PGN_65018Fields, dst: number = 255) {
    super(PGN_65018Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['generatorTotalAcEnergy'] = (fields:any, dst:number) => new PGN_65018(fields, dst)


/**
 * PGN: 65019
 *
 * Description: Generator Phase C AC Reactive Power
 *
 * @category PGN_65019
 */
export interface PGN_65019Interface extends PGNInterface {
  fields: PGN_65019Fields
}

/**
 * @category PGN_65019
 */
export interface PGN_65019Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor | number
  reserved?: number
}

/**
 * @category PGN_65019
 */
export const PGN_65019Defaults = {
  pgn: 65019,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_65019
 */
export class PGN_65019 extends PGN implements PGN_65019Interface {
  fields: PGN_65019Fields

  constructor(fields: PGN_65019Fields, dst: number = 255) {
    super(PGN_65019Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['generatorPhaseCAcReactivePower'] = (fields:any, dst:number) => new PGN_65019(fields, dst)


/**
 * PGN: 65020
 *
 * Description: Generator Phase C AC Power
 *
 * @category PGN_65020
 */
export interface PGN_65020Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65020
 */
export class PGN_65020 extends PGN implements PGN_65020Interface {
  fields: PGN_65020Fields

  constructor(fields: PGN_65020Fields, dst: number = 255) {
    super(PGN_65020Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['generatorPhaseCAcPower'] = (fields:any, dst:number) => new PGN_65020(fields, dst)


/**
 * PGN: 65021
 *
 * Description: Generator Phase C Basic AC Quantities
 *
 * @category PGN_65021
 */
export interface PGN_65021Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65021
 */
export class PGN_65021 extends PGN implements PGN_65021Interface {
  fields: PGN_65021Fields

  constructor(fields: PGN_65021Fields, dst: number = 255) {
    super(PGN_65021Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['generatorPhaseCBasicAcQuantities'] = (fields:any, dst:number) => new PGN_65021(fields, dst)


/**
 * PGN: 65022
 *
 * Description: Generator Phase B AC Reactive Power
 *
 * @category PGN_65022
 */
export interface PGN_65022Interface extends PGNInterface {
  fields: PGN_65022Fields
}

/**
 * @category PGN_65022
 */
export interface PGN_65022Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor | number
  reserved?: number
}

/**
 * @category PGN_65022
 */
export const PGN_65022Defaults = {
  pgn: 65022,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_65022
 */
export class PGN_65022 extends PGN implements PGN_65022Interface {
  fields: PGN_65022Fields

  constructor(fields: PGN_65022Fields, dst: number = 255) {
    super(PGN_65022Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['generatorPhaseBAcReactivePower'] = (fields:any, dst:number) => new PGN_65022(fields, dst)


/**
 * PGN: 65023
 *
 * Description: Generator Phase B AC Power
 *
 * @category PGN_65023
 */
export interface PGN_65023Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65023
 */
export class PGN_65023 extends PGN implements PGN_65023Interface {
  fields: PGN_65023Fields

  constructor(fields: PGN_65023Fields, dst: number = 255) {
    super(PGN_65023Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['generatorPhaseBAcPower'] = (fields:any, dst:number) => new PGN_65023(fields, dst)


/**
 * PGN: 65024
 *
 * Description: Generator Phase B Basic AC Quantities
 *
 * @category PGN_65024
 */
export interface PGN_65024Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65024
 */
export class PGN_65024 extends PGN implements PGN_65024Interface {
  fields: PGN_65024Fields

  constructor(fields: PGN_65024Fields, dst: number = 255) {
    super(PGN_65024Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['generatorPhaseBBasicAcQuantities'] = (fields:any, dst:number) => new PGN_65024(fields, dst)


/**
 * PGN: 65025
 *
 * Description: Generator Phase A AC Reactive Power
 *
 * @category PGN_65025
 */
export interface PGN_65025Interface extends PGNInterface {
  fields: PGN_65025Fields
}

/**
 * @category PGN_65025
 */
export interface PGN_65025Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor | number
  reserved?: number
}

/**
 * @category PGN_65025
 */
export const PGN_65025Defaults = {
  pgn: 65025,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_65025
 */
export class PGN_65025 extends PGN implements PGN_65025Interface {
  fields: PGN_65025Fields

  constructor(fields: PGN_65025Fields, dst: number = 255) {
    super(PGN_65025Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['generatorPhaseAAcReactivePower'] = (fields:any, dst:number) => new PGN_65025(fields, dst)


/**
 * PGN: 65026
 *
 * Description: Generator Phase A AC Power
 *
 * @category PGN_65026
 */
export interface PGN_65026Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65026
 */
export class PGN_65026 extends PGN implements PGN_65026Interface {
  fields: PGN_65026Fields

  constructor(fields: PGN_65026Fields, dst: number = 255) {
    super(PGN_65026Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['generatorPhaseAAcPower'] = (fields:any, dst:number) => new PGN_65026(fields, dst)


/**
 * PGN: 65027
 *
 * Description: Generator Phase A Basic AC Quantities
 *
 * @category PGN_65027
 */
export interface PGN_65027Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65027
 */
export class PGN_65027 extends PGN implements PGN_65027Interface {
  fields: PGN_65027Fields

  constructor(fields: PGN_65027Fields, dst: number = 255) {
    super(PGN_65027Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['generatorPhaseABasicAcQuantities'] = (fields:any, dst:number) => new PGN_65027(fields, dst)


/**
 * PGN: 65028
 *
 * Description: Generator Total AC Reactive Power
 *
 * @category PGN_65028
 */
export interface PGN_65028Interface extends PGNInterface {
  fields: PGN_65028Fields
}

/**
 * @category PGN_65028
 */
export interface PGN_65028Fields {
  reactivePower?: N2K_Number
  powerFactor?: N2K_Number
  powerFactorLagging?: enums.PowerFactor | number
  reserved?: number
}

/**
 * @category PGN_65028
 */
export const PGN_65028Defaults = {
  pgn: 65028,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_65028
 */
export class PGN_65028 extends PGN implements PGN_65028Interface {
  fields: PGN_65028Fields

  constructor(fields: PGN_65028Fields, dst: number = 255) {
    super(PGN_65028Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['generatorTotalAcReactivePower'] = (fields:any, dst:number) => new PGN_65028(fields, dst)


/**
 * PGN: 65029
 *
 * Description: Generator Total AC Power
 *
 * @category PGN_65029
 */
export interface PGN_65029Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65029
 */
export class PGN_65029 extends PGN implements PGN_65029Interface {
  fields: PGN_65029Fields

  constructor(fields: PGN_65029Fields, dst: number = 255) {
    super(PGN_65029Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['generatorTotalAcPower'] = (fields:any, dst:number) => new PGN_65029(fields, dst)


/**
 * PGN: 65030
 *
 * Description: Generator Average Basic AC Quantities
 *
 * @category PGN_65030
 */
export interface PGN_65030Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65030
 */
export class PGN_65030 extends PGN implements PGN_65030Interface {
  fields: PGN_65030Fields

  constructor(fields: PGN_65030Fields, dst: number = 255) {
    super(PGN_65030Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['generatorAverageBasicAcQuantities'] = (fields:any, dst:number) => new PGN_65030(fields, dst)


/**
 * PGN: 65240
 *
 * Description: ISO Commanded Address
 *
 * Explanation: ISO 11783 defined this message to provide a mechanism for assigning a network address to a node. The NAME information in the data portion of the message must match the name information of the node whose network address is to be set. ISO 11783-5 requires that this mesage to be sent using the BAM Transport Protocol method. The appropriate response to this message is defined in section 5.2.3 of 11783-5.
 *
 * @category PGN_65240
 */
export interface PGN_65240Interface extends PGNInterface {
  fields: PGN_65240Fields
}

/**
 * @category PGN_65240
 */
export interface PGN_65240Fields {
  uniqueNumber?: N2K_Binary
  manufacturerCode?: enums.ManufacturerCode | number
  deviceInstanceLower?: N2K_Number
  deviceInstanceUpper?: N2K_Number
  deviceFunction?: enums.DeviceFunction | number
  reserved?: number
  deviceClass?: enums.DeviceClass | number
  systemInstance?: N2K_Number
  industryCode?: enums.IndustryCode | number
  reserved10?: number
  newSourceAddress?: N2K_Number
}

/**
 * @category PGN_65240
 */
export const PGN_65240Defaults = {
  pgn: 65240,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_65240
 */
export class PGN_65240 extends PGN implements PGN_65240Interface {
  fields: PGN_65240Fields

  constructor(fields: PGN_65240Fields, dst: number = 255) {
    super(PGN_65240Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['isoCommandedAddress'] = (fields:any, dst:number) => new PGN_65240(fields, dst)


/**
 * PGN: 65280
 *
 * Description: Furuno: Heave
 *
 * @category PGN_65280
 */
export interface PGN_65280Interface extends PGNInterface {
  fields: PGN_65280Fields
}

/**
 * @category PGN_65280
 */
export interface PGN_65280Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  heave?: N2K_Number
  reserved5?: number
}

/**
 * @category PGN_65280
 */
export const PGN_65280Defaults = {
  pgn: 65280,
  dst: 255,
  prio: 2,
  fields: []
}

/**
 * @category PGN_65280
 */
export class PGN_65280 extends PGN implements PGN_65280Interface {
  fields: PGN_65280Fields

  constructor(fields: PGN_65280Fields, dst: number = 255) {
    super(PGN_65280Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['furunoHeave'] = (fields:any, dst:number) => new PGN_65280(fields, dst)


/**
 * PGN: 65284
 *
 * Description: Maretron: Proprietary DC Breaker Current
 *
 * @category PGN_65284
 */
export interface PGN_65284Interface extends PGNInterface {
  fields: PGN_65284Fields
}

/**
 * @category PGN_65284
 */
export interface PGN_65284Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_65284
 */
export class PGN_65284 extends PGN implements PGN_65284Interface {
  fields: PGN_65284Fields

  constructor(fields: PGN_65284Fields, dst: number = 255) {
    super(PGN_65284Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['maretronProprietaryDcBreakerCurrent'] = (fields:any, dst:number) => new PGN_65284(fields, dst)


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
export interface PGN_65285_AirmarBootStateAcknowledgmentInterface extends PGNInterface {
  fields: PGN_65285_AirmarBootStateAcknowledgmentFields
}

/**
 * @category PGN_65285_AirmarBootStateAcknowledgment
 */
export interface PGN_65285_AirmarBootStateAcknowledgmentFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  bootState?: enums.BootState | number
  reserved5?: number
}

/**
 * @category PGN_65285_AirmarBootStateAcknowledgment
 */
export const PGN_65285_AirmarBootStateAcknowledgmentDefaults = {
  pgn: 65285,
  dst: 255,
  prio: 5,
  fields: []
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
  bootState?: enums.BootState | number
  reserved5?: number
}

/**
 * @category PGN_65285_AirmarBootStateAcknowledgment
 */
export class PGN_65285_AirmarBootStateAcknowledgment extends PGN implements PGN_65285_AirmarBootStateAcknowledgmentInterface {
  fields: PGN_65285_AirmarBootStateAcknowledgmentFields

  constructor(fields: PGN_65285_AirmarBootStateAcknowledgmentCreateArgs, dst: number = 255) {
    super(PGN_65285_AirmarBootStateAcknowledgmentDefaults)
    this.dst = dst
    this.fields = { ...PGN_65285_AirmarBootStateAcknowledgmentMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_65285_AirmarBootStateAcknowledgmentMatchFields)
}
}
pgnIdToClass['airmarBootStateAcknowledgment'] = (fields:any, dst:number) => new PGN_65285_AirmarBootStateAcknowledgment(fields, dst)


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
export interface PGN_65285_LowranceTemperatureInterface extends PGNInterface {
  fields: PGN_65285_LowranceTemperatureFields
}

/**
 * @category PGN_65285_LowranceTemperature
 */
export interface PGN_65285_LowranceTemperatureFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  temperatureSource?: enums.TemperatureSource | number
  actualTemperature?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_65285_LowranceTemperature
 */
export const PGN_65285_LowranceTemperatureDefaults = {
  pgn: 65285,
  dst: 255,
  prio: 3,
  fields: []
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
  temperatureSource?: enums.TemperatureSource | number
  actualTemperature?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_65285_LowranceTemperature
 */
export class PGN_65285_LowranceTemperature extends PGN implements PGN_65285_LowranceTemperatureInterface {
  fields: PGN_65285_LowranceTemperatureFields

  constructor(fields: PGN_65285_LowranceTemperatureCreateArgs, dst: number = 255) {
    super(PGN_65285_LowranceTemperatureDefaults)
    this.dst = dst
    this.fields = { ...PGN_65285_LowranceTemperatureMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_65285_LowranceTemperatureMatchFields)
}
}
pgnIdToClass['lowranceTemperature'] = (fields:any, dst:number) => new PGN_65285_LowranceTemperature(fields, dst)


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
export interface PGN_65286_ChetcoDimmerInterface extends PGNInterface {
  fields: PGN_65286_ChetcoDimmerFields
}

/**
 * @category PGN_65286_ChetcoDimmer
 */
export interface PGN_65286_ChetcoDimmerFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
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
export class PGN_65286_ChetcoDimmer extends PGN implements PGN_65286_ChetcoDimmerInterface {
  fields: PGN_65286_ChetcoDimmerFields

  constructor(fields: PGN_65286_ChetcoDimmerCreateArgs, dst: number = 255) {
    super(PGN_65286_ChetcoDimmerDefaults)
    this.dst = dst
    this.fields = { ...PGN_65286_ChetcoDimmerMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_65286_ChetcoDimmerMatchFields)
}
}
pgnIdToClass['chetcoDimmer'] = (fields:any, dst:number) => new PGN_65286_ChetcoDimmer(fields, dst)


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
export interface PGN_65286_AirmarBootStateRequestInterface extends PGNInterface {
  fields: PGN_65286_AirmarBootStateRequestFields
}

/**
 * @category PGN_65286_AirmarBootStateRequest
 */
export interface PGN_65286_AirmarBootStateRequestFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
}

/**
 * @category PGN_65286_AirmarBootStateRequest
 */
export const PGN_65286_AirmarBootStateRequestDefaults = {
  pgn: 65286,
  dst: 255,
  prio: 3,
  fields: []
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
export class PGN_65286_AirmarBootStateRequest extends PGN implements PGN_65286_AirmarBootStateRequestInterface {
  fields: PGN_65286_AirmarBootStateRequestFields

  constructor(fields: PGN_65286_AirmarBootStateRequestCreateArgs, dst: number = 255) {
    super(PGN_65286_AirmarBootStateRequestDefaults)
    this.dst = dst
    this.fields = { ...PGN_65286_AirmarBootStateRequestMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_65286_AirmarBootStateRequestMatchFields)
}
}
pgnIdToClass['airmarBootStateRequest'] = (fields:any, dst:number) => new PGN_65286_AirmarBootStateRequest(fields, dst)


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
export interface PGN_65287_AirmarAccessLevelInterface extends PGNInterface {
  fields: PGN_65287_AirmarAccessLevelFields
}

/**
 * @category PGN_65287_AirmarAccessLevel
 */
export interface PGN_65287_AirmarAccessLevelFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  formatCode?: N2K_Number
  accessLevel?: enums.AccessLevel | number
  reserved6?: number
  accessSeedKey?: N2K_Number
}

/**
 * @category PGN_65287_AirmarAccessLevel
 */
export const PGN_65287_AirmarAccessLevelDefaults = {
  pgn: 65287,
  dst: 255,
  prio: 3,
  fields: []
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
  accessLevel?: enums.AccessLevel | number
  reserved6?: number
  accessSeedKey?: N2K_Number
}

/**
 * @category PGN_65287_AirmarAccessLevel
 */
export class PGN_65287_AirmarAccessLevel extends PGN implements PGN_65287_AirmarAccessLevelInterface {
  fields: PGN_65287_AirmarAccessLevelFields

  constructor(fields: PGN_65287_AirmarAccessLevelCreateArgs, dst: number = 255) {
    super(PGN_65287_AirmarAccessLevelDefaults)
    this.dst = dst
    this.fields = { ...PGN_65287_AirmarAccessLevelMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_65287_AirmarAccessLevelMatchFields)
}
}
pgnIdToClass['airmarAccessLevel'] = (fields:any, dst:number) => new PGN_65287_AirmarAccessLevel(fields, dst)


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
export interface PGN_65287_SimnetConfigureTemperatureSensorInterface extends PGNInterface {
  fields: PGN_65287_SimnetConfigureTemperatureSensorFields
}

/**
 * @category PGN_65287_SimnetConfigureTemperatureSensor
 */
export interface PGN_65287_SimnetConfigureTemperatureSensorFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
}

/**
 * @category PGN_65287_SimnetConfigureTemperatureSensor
 */
export const PGN_65287_SimnetConfigureTemperatureSensorDefaults = {
  pgn: 65287,
  dst: 255,
  prio: 3,
  fields: []
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
export class PGN_65287_SimnetConfigureTemperatureSensor extends PGN implements PGN_65287_SimnetConfigureTemperatureSensorInterface {
  fields: PGN_65287_SimnetConfigureTemperatureSensorFields

  constructor(fields: PGN_65287_SimnetConfigureTemperatureSensorCreateArgs, dst: number = 255) {
    super(PGN_65287_SimnetConfigureTemperatureSensorDefaults)
    this.dst = dst
    this.fields = { ...PGN_65287_SimnetConfigureTemperatureSensorMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_65287_SimnetConfigureTemperatureSensorMatchFields)
}
}
pgnIdToClass['simnetConfigureTemperatureSensor'] = (fields:any, dst:number) => new PGN_65287_SimnetConfigureTemperatureSensor(fields, dst)


/**
 * PGN: 65288
 *
 * Description: Seatalk: Alarm
 *
 * @category PGN_65288
 */
export interface PGN_65288Interface extends PGNInterface {
  fields: PGN_65288Fields
}

/**
 * @category PGN_65288
 */
export interface PGN_65288Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  sid?: N2K_Binary
  alarmStatus?: enums.SeatalkAlarmStatus | number
  alarmId?: enums.SeatalkAlarmId | number
  alarmGroup?: enums.SeatalkAlarmGroup | number
  alarmPriority?: N2K_Binary
}

/**
 * @category PGN_65288
 */
export const PGN_65288Defaults = {
  pgn: 65288,
  dst: 255,
  prio: 7,
  fields: []
}

/**
 * @category PGN_65288
 */
export class PGN_65288 extends PGN implements PGN_65288Interface {
  fields: PGN_65288Fields

  constructor(fields: PGN_65288Fields, dst: number = 255) {
    super(PGN_65288Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['seatalkAlarm'] = (fields:any, dst:number) => new PGN_65288(fields, dst)


/**
 * PGN: 65289
 *
 * Description: Simnet: Trim Tab Sensor Calibration
 *
 * @category PGN_65289
 */
export interface PGN_65289Interface extends PGNInterface {
  fields: PGN_65289Fields
}

/**
 * @category PGN_65289
 */
export interface PGN_65289Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
}

/**
 * @category PGN_65289
 */
export const PGN_65289Defaults = {
  pgn: 65289,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_65289
 */
export class PGN_65289 extends PGN implements PGN_65289Interface {
  fields: PGN_65289Fields

  constructor(fields: PGN_65289Fields, dst: number = 255) {
    super(PGN_65289Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetTrimTabSensorCalibration'] = (fields:any, dst:number) => new PGN_65289(fields, dst)


/**
 * PGN: 65290
 *
 * Description: Simnet: Paddle Wheel Speed Configuration
 *
 * @category PGN_65290
 */
export interface PGN_65290Interface extends PGNInterface {
  fields: PGN_65290Fields
}

/**
 * @category PGN_65290
 */
export interface PGN_65290Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
}

/**
 * @category PGN_65290
 */
export const PGN_65290Defaults = {
  pgn: 65290,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_65290
 */
export class PGN_65290 extends PGN implements PGN_65290Interface {
  fields: PGN_65290Fields

  constructor(fields: PGN_65290Fields, dst: number = 255) {
    super(PGN_65290Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetPaddleWheelSpeedConfiguration'] = (fields:any, dst:number) => new PGN_65290(fields, dst)


/**
 * PGN: 65292
 *
 * Description: Simnet: Clear Fluid Level Warnings
 *
 * @category PGN_65292
 */
export interface PGN_65292Interface extends PGNInterface {
  fields: PGN_65292Fields
}

/**
 * @category PGN_65292
 */
export interface PGN_65292Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
}

/**
 * @category PGN_65292
 */
export const PGN_65292Defaults = {
  pgn: 65292,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_65292
 */
export class PGN_65292 extends PGN implements PGN_65292Interface {
  fields: PGN_65292Fields

  constructor(fields: PGN_65292Fields, dst: number = 255) {
    super(PGN_65292Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetClearFluidLevelWarnings'] = (fields:any, dst:number) => new PGN_65292(fields, dst)


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
export interface PGN_65293_SimnetLgc2000ConfigurationInterface extends PGNInterface {
  fields: PGN_65293_SimnetLgc2000ConfigurationFields
}

/**
 * @category PGN_65293_SimnetLgc2000Configuration
 */
export interface PGN_65293_SimnetLgc2000ConfigurationFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
}

/**
 * @category PGN_65293_SimnetLgc2000Configuration
 */
export const PGN_65293_SimnetLgc2000ConfigurationDefaults = {
  pgn: 65293,
  dst: 255,
  prio: 3,
  fields: []
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
export class PGN_65293_SimnetLgc2000Configuration extends PGN implements PGN_65293_SimnetLgc2000ConfigurationInterface {
  fields: PGN_65293_SimnetLgc2000ConfigurationFields

  constructor(fields: PGN_65293_SimnetLgc2000ConfigurationCreateArgs, dst: number = 255) {
    super(PGN_65293_SimnetLgc2000ConfigurationDefaults)
    this.dst = dst
    this.fields = { ...PGN_65293_SimnetLgc2000ConfigurationMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_65293_SimnetLgc2000ConfigurationMatchFields)
}
}
pgnIdToClass['simnetLgc2000Configuration'] = (fields:any, dst:number) => new PGN_65293_SimnetLgc2000Configuration(fields, dst)


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
export interface PGN_65293_DiverseYachtServicesLoadCellInterface extends PGNInterface {
  fields: PGN_65293_DiverseYachtServicesLoadCellFields
}

/**
 * @category PGN_65293_DiverseYachtServicesLoadCell
 */
export interface PGN_65293_DiverseYachtServicesLoadCellFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 2,
  fields: []
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
export class PGN_65293_DiverseYachtServicesLoadCell extends PGN implements PGN_65293_DiverseYachtServicesLoadCellInterface {
  fields: PGN_65293_DiverseYachtServicesLoadCellFields

  constructor(fields: PGN_65293_DiverseYachtServicesLoadCellCreateArgs, dst: number = 255) {
    super(PGN_65293_DiverseYachtServicesLoadCellDefaults)
    this.dst = dst
    this.fields = { ...PGN_65293_DiverseYachtServicesLoadCellMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_65293_DiverseYachtServicesLoadCellMatchFields)
}
}
pgnIdToClass['diverseYachtServicesLoadCell'] = (fields:any, dst:number) => new PGN_65293_DiverseYachtServicesLoadCell(fields, dst)


/**
 * PGN: 65302
 *
 * Description: Simnet: AP Unknown 1
 *
 * Explanation: Seen as sent by AC-42 only so far.
 *
 * @category PGN_65302
 */
export interface PGN_65302Interface extends PGNInterface {
  fields: PGN_65302Fields
}

/**
 * @category PGN_65302
 */
export interface PGN_65302Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_65302
 */
export class PGN_65302 extends PGN implements PGN_65302Interface {
  fields: PGN_65302Fields

  constructor(fields: PGN_65302Fields, dst: number = 255) {
    super(PGN_65302Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetApUnknown1'] = (fields:any, dst:number) => new PGN_65302(fields, dst)


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
export interface PGN_65305_SimnetDeviceStatusInterface extends PGNInterface {
  fields: PGN_65305_SimnetDeviceStatusFields
}

/**
 * @category PGN_65305_SimnetDeviceStatus
 */
export interface PGN_65305_SimnetDeviceStatusFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  model?: enums.SimnetDeviceModel | number
  report?: enums.SimnetDeviceReport | number
  status?: enums.SimnetApStatus | number
  spare7?: number
}

/**
 * @category PGN_65305_SimnetDeviceStatus
 */
export const PGN_65305_SimnetDeviceStatusDefaults = {
  pgn: 65305,
  dst: 255,
  prio: 3,
  fields: []
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
  model?: enums.SimnetDeviceModel | number
  status?: enums.SimnetApStatus | number
  spare7?: number
}

/**
 * @category PGN_65305_SimnetDeviceStatus
 */
export class PGN_65305_SimnetDeviceStatus extends PGN implements PGN_65305_SimnetDeviceStatusInterface {
  fields: PGN_65305_SimnetDeviceStatusFields

  constructor(fields: PGN_65305_SimnetDeviceStatusCreateArgs, dst: number = 255) {
    super(PGN_65305_SimnetDeviceStatusDefaults)
    this.dst = dst
    this.fields = { ...PGN_65305_SimnetDeviceStatusMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_65305_SimnetDeviceStatusMatchFields)
}
}
pgnIdToClass['simnetDeviceStatus'] = (fields:any, dst:number) => new PGN_65305_SimnetDeviceStatus(fields, dst)


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
export interface PGN_65305_SimnetDeviceStatusRequestInterface extends PGNInterface {
  fields: PGN_65305_SimnetDeviceStatusRequestFields
}

/**
 * @category PGN_65305_SimnetDeviceStatusRequest
 */
export interface PGN_65305_SimnetDeviceStatusRequestFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  model?: enums.SimnetDeviceModel | number
  report?: enums.SimnetDeviceReport | number
  spare6?: number
}

/**
 * @category PGN_65305_SimnetDeviceStatusRequest
 */
export const PGN_65305_SimnetDeviceStatusRequestDefaults = {
  pgn: 65305,
  dst: 255,
  prio: 3,
  fields: []
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
  model?: enums.SimnetDeviceModel | number
  spare6?: number
}

/**
 * @category PGN_65305_SimnetDeviceStatusRequest
 */
export class PGN_65305_SimnetDeviceStatusRequest extends PGN implements PGN_65305_SimnetDeviceStatusRequestInterface {
  fields: PGN_65305_SimnetDeviceStatusRequestFields

  constructor(fields: PGN_65305_SimnetDeviceStatusRequestCreateArgs, dst: number = 255) {
    super(PGN_65305_SimnetDeviceStatusRequestDefaults)
    this.dst = dst
    this.fields = { ...PGN_65305_SimnetDeviceStatusRequestMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_65305_SimnetDeviceStatusRequestMatchFields)
}
}
pgnIdToClass['simnetDeviceStatusRequest'] = (fields:any, dst:number) => new PGN_65305_SimnetDeviceStatusRequest(fields, dst)


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
export interface PGN_65305_SimnetPilotModeInterface extends PGNInterface {
  fields: PGN_65305_SimnetPilotModeFields
}

/**
 * @category PGN_65305_SimnetPilotMode
 */
export interface PGN_65305_SimnetPilotModeFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  model?: enums.SimnetDeviceModel | number
  report?: enums.SimnetDeviceReport | number
  mode?: enums.SimnetApModeBitfield[]
  spare7?: number
}

/**
 * @category PGN_65305_SimnetPilotMode
 */
export const PGN_65305_SimnetPilotModeDefaults = {
  pgn: 65305,
  dst: 255,
  prio: 3,
  fields: []
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
  model?: enums.SimnetDeviceModel | number
  mode?: enums.SimnetApModeBitfield[]
  spare7?: number
}

/**
 * @category PGN_65305_SimnetPilotMode
 */
export class PGN_65305_SimnetPilotMode extends PGN implements PGN_65305_SimnetPilotModeInterface {
  fields: PGN_65305_SimnetPilotModeFields

  constructor(fields: PGN_65305_SimnetPilotModeCreateArgs, dst: number = 255) {
    super(PGN_65305_SimnetPilotModeDefaults)
    this.dst = dst
    this.fields = { ...PGN_65305_SimnetPilotModeMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_65305_SimnetPilotModeMatchFields)
}
}
pgnIdToClass['simnetPilotMode'] = (fields:any, dst:number) => new PGN_65305_SimnetPilotMode(fields, dst)


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
export interface PGN_65305_SimnetDeviceModeRequestInterface extends PGNInterface {
  fields: PGN_65305_SimnetDeviceModeRequestFields
}

/**
 * @category PGN_65305_SimnetDeviceModeRequest
 */
export interface PGN_65305_SimnetDeviceModeRequestFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  model?: enums.SimnetDeviceModel | number
  report?: enums.SimnetDeviceReport | number
  spare6?: number
}

/**
 * @category PGN_65305_SimnetDeviceModeRequest
 */
export const PGN_65305_SimnetDeviceModeRequestDefaults = {
  pgn: 65305,
  dst: 255,
  prio: 3,
  fields: []
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
  model?: enums.SimnetDeviceModel | number
  spare6?: number
}

/**
 * @category PGN_65305_SimnetDeviceModeRequest
 */
export class PGN_65305_SimnetDeviceModeRequest extends PGN implements PGN_65305_SimnetDeviceModeRequestInterface {
  fields: PGN_65305_SimnetDeviceModeRequestFields

  constructor(fields: PGN_65305_SimnetDeviceModeRequestCreateArgs, dst: number = 255) {
    super(PGN_65305_SimnetDeviceModeRequestDefaults)
    this.dst = dst
    this.fields = { ...PGN_65305_SimnetDeviceModeRequestMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_65305_SimnetDeviceModeRequestMatchFields)
}
}
pgnIdToClass['simnetDeviceModeRequest'] = (fields:any, dst:number) => new PGN_65305_SimnetDeviceModeRequest(fields, dst)


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
export interface PGN_65305_SimnetSailingProcessorStatusInterface extends PGNInterface {
  fields: PGN_65305_SimnetSailingProcessorStatusFields
}

/**
 * @category PGN_65305_SimnetSailingProcessorStatus
 */
export interface PGN_65305_SimnetSailingProcessorStatusFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  model?: enums.SimnetDeviceModel | number
  report?: enums.SimnetDeviceReport | number
  data?: N2K_Binary
}

/**
 * @category PGN_65305_SimnetSailingProcessorStatus
 */
export const PGN_65305_SimnetSailingProcessorStatusDefaults = {
  pgn: 65305,
  dst: 255,
  prio: 3,
  fields: []
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
  model?: enums.SimnetDeviceModel | number
  data?: N2K_Binary
}

/**
 * @category PGN_65305_SimnetSailingProcessorStatus
 */
export class PGN_65305_SimnetSailingProcessorStatus extends PGN implements PGN_65305_SimnetSailingProcessorStatusInterface {
  fields: PGN_65305_SimnetSailingProcessorStatusFields

  constructor(fields: PGN_65305_SimnetSailingProcessorStatusCreateArgs, dst: number = 255) {
    super(PGN_65305_SimnetSailingProcessorStatusDefaults)
    this.dst = dst
    this.fields = { ...PGN_65305_SimnetSailingProcessorStatusMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_65305_SimnetSailingProcessorStatusMatchFields)
}
}
pgnIdToClass['simnetSailingProcessorStatus'] = (fields:any, dst:number) => new PGN_65305_SimnetSailingProcessorStatus(fields, dst)


/**
 * PGN: 65309
 *
 * Description: Navico: Wireless Battery Status
 *
 * @category PGN_65309
 */
export interface PGN_65309Interface extends PGNInterface {
  fields: PGN_65309Fields
}

/**
 * @category PGN_65309
 */
export interface PGN_65309Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_65309
 */
export class PGN_65309 extends PGN implements PGN_65309Interface {
  fields: PGN_65309Fields

  constructor(fields: PGN_65309Fields, dst: number = 255) {
    super(PGN_65309Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['navicoWirelessBatteryStatus'] = (fields:any, dst:number) => new PGN_65309(fields, dst)


/**
 * PGN: 65312
 *
 * Description: Navico: Wireless Signal Status
 *
 * @category PGN_65312
 */
export interface PGN_65312Interface extends PGNInterface {
  fields: PGN_65312Fields
}

/**
 * @category PGN_65312
 */
export interface PGN_65312Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_65312
 */
export class PGN_65312 extends PGN implements PGN_65312Interface {
  fields: PGN_65312Fields

  constructor(fields: PGN_65312Fields, dst: number = 255) {
    super(PGN_65312Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['navicoWirelessSignalStatus'] = (fields:any, dst:number) => new PGN_65312(fields, dst)


/**
 * PGN: 65340
 *
 * Description: Simnet: AP Unknown 2
 *
 * Explanation: Seen as sent by AC-42 only so far.
 *
 * @category PGN_65340
 */
export interface PGN_65340Interface extends PGNInterface {
  fields: PGN_65340Fields
}

/**
 * @category PGN_65340
 */
export interface PGN_65340Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65340
 */
export class PGN_65340 extends PGN implements PGN_65340Interface {
  fields: PGN_65340Fields

  constructor(fields: PGN_65340Fields, dst: number = 255) {
    super(PGN_65340Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetApUnknown2'] = (fields:any, dst:number) => new PGN_65340(fields, dst)


/**
 * PGN: 65341
 *
 * Description: Simnet: Autopilot Angle
 *
 * @category PGN_65341
 */
export interface PGN_65341Interface extends PGNInterface {
  fields: PGN_65341Fields
}

/**
 * @category PGN_65341
 */
export interface PGN_65341Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  mode?: enums.SimnetApMode | number
  reserved6?: number
  angle?: N2K_Number
}

/**
 * @category PGN_65341
 */
export const PGN_65341Defaults = {
  pgn: 65341,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_65341
 */
export class PGN_65341 extends PGN implements PGN_65341Interface {
  fields: PGN_65341Fields

  constructor(fields: PGN_65341Fields, dst: number = 255) {
    super(PGN_65341Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetAutopilotAngle'] = (fields:any, dst:number) => new PGN_65341(fields, dst)


/**
 * PGN: 65345
 *
 * Description: Seatalk: Pilot Wind Datum
 *
 * @category PGN_65345
 */
export interface PGN_65345Interface extends PGNInterface {
  fields: PGN_65345Fields
}

/**
 * @category PGN_65345
 */
export interface PGN_65345Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65345
 */
export class PGN_65345 extends PGN implements PGN_65345Interface {
  fields: PGN_65345Fields

  constructor(fields: PGN_65345Fields, dst: number = 255) {
    super(PGN_65345Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['seatalkPilotWindDatum'] = (fields:any, dst:number) => new PGN_65345(fields, dst)


/**
 * PGN: 65350
 *
 * Description: Simnet: Magnetic Field
 *
 * @category PGN_65350
 */
export interface PGN_65350Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65350
 */
export class PGN_65350 extends PGN implements PGN_65350Interface {
  fields: PGN_65350Fields

  constructor(fields: PGN_65350Fields, dst: number = 255) {
    super(PGN_65350Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetMagneticField'] = (fields:any, dst:number) => new PGN_65350(fields, dst)


/**
 * PGN: 65359
 *
 * Description: Seatalk: Pilot Heading
 *
 * @category PGN_65359
 */
export interface PGN_65359Interface extends PGNInterface {
  fields: PGN_65359Fields
}

/**
 * @category PGN_65359
 */
export interface PGN_65359Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_65359
 */
export class PGN_65359 extends PGN implements PGN_65359Interface {
  fields: PGN_65359Fields

  constructor(fields: PGN_65359Fields, dst: number = 255) {
    super(PGN_65359Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['seatalkPilotHeading'] = (fields:any, dst:number) => new PGN_65359(fields, dst)


/**
 * PGN: 65360
 *
 * Description: Seatalk: Pilot Locked Heading
 *
 * @category PGN_65360
 */
export interface PGN_65360Interface extends PGNInterface {
  fields: PGN_65360Fields
}

/**
 * @category PGN_65360
 */
export interface PGN_65360Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_65360
 */
export class PGN_65360 extends PGN implements PGN_65360Interface {
  fields: PGN_65360Fields

  constructor(fields: PGN_65360Fields, dst: number = 255) {
    super(PGN_65360Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['seatalkPilotLockedHeading'] = (fields:any, dst:number) => new PGN_65360(fields, dst)


/**
 * PGN: 65361
 *
 * Description: Seatalk: Silence Alarm
 *
 * @category PGN_65361
 */
export interface PGN_65361Interface extends PGNInterface {
  fields: PGN_65361Fields
}

/**
 * @category PGN_65361
 */
export interface PGN_65361Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  alarmId?: enums.SeatalkAlarmId | number
  alarmGroup?: enums.SeatalkAlarmGroup | number
  reserved6?: number
}

/**
 * @category PGN_65361
 */
export const PGN_65361Defaults = {
  pgn: 65361,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_65361
 */
export class PGN_65361 extends PGN implements PGN_65361Interface {
  fields: PGN_65361Fields

  constructor(fields: PGN_65361Fields, dst: number = 255) {
    super(PGN_65361Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['seatalkSilenceAlarm'] = (fields:any, dst:number) => new PGN_65361(fields, dst)


/**
 * PGN: 65371
 *
 * Description: Seatalk: Keypad Message
 *
 * @category PGN_65371
 */
export interface PGN_65371Interface extends PGNInterface {
  fields: PGN_65371Fields
}

/**
 * @category PGN_65371
 */
export interface PGN_65371Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65371
 */
export class PGN_65371 extends PGN implements PGN_65371Interface {
  fields: PGN_65371Fields

  constructor(fields: PGN_65371Fields, dst: number = 255) {
    super(PGN_65371Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['seatalkKeypadMessage'] = (fields:any, dst:number) => new PGN_65371(fields, dst)


/**
 * PGN: 65374
 *
 * Description: SeaTalk: Keypad Heartbeat
 *
 * @category PGN_65374
 */
export interface PGN_65374Interface extends PGNInterface {
  fields: PGN_65374Fields
}

/**
 * @category PGN_65374
 */
export interface PGN_65374Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_65374
 */
export class PGN_65374 extends PGN implements PGN_65374Interface {
  fields: PGN_65374Fields

  constructor(fields: PGN_65374Fields, dst: number = 255) {
    super(PGN_65374Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['seatalkKeypadHeartbeat'] = (fields:any, dst:number) => new PGN_65374(fields, dst)


/**
 * PGN: 65379
 *
 * Description: Seatalk: Pilot Mode
 *
 * @category PGN_65379
 */
export interface PGN_65379Interface extends PGNInterface {
  fields: PGN_65379Fields
}

/**
 * @category PGN_65379
 */
export interface PGN_65379Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  pilotMode?: enums.SeatalkPilotMode16 | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_65379
 */
export class PGN_65379 extends PGN implements PGN_65379Interface {
  fields: PGN_65379Fields

  constructor(fields: PGN_65379Fields, dst: number = 255) {
    super(PGN_65379Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['seatalkPilotMode'] = (fields:any, dst:number) => new PGN_65379(fields, dst)


/**
 * PGN: 65408
 *
 * Description: Airmar: Depth Quality Factor
 *
 * @category PGN_65408
 */
export interface PGN_65408Interface extends PGNInterface {
  fields: PGN_65408Fields
}

/**
 * @category PGN_65408
 */
export interface PGN_65408Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  sid?: N2K_Number
  depthQualityFactor?: enums.AirmarDepthQualityFactor | number
  reserved6?: number
}

/**
 * @category PGN_65408
 */
export const PGN_65408Defaults = {
  pgn: 65408,
  dst: 255,
  prio: 7,
  fields: []
}

/**
 * @category PGN_65408
 */
export class PGN_65408 extends PGN implements PGN_65408Interface {
  fields: PGN_65408Fields

  constructor(fields: PGN_65408Fields, dst: number = 255) {
    super(PGN_65408Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['airmarDepthQualityFactor'] = (fields:any, dst:number) => new PGN_65408(fields, dst)


/**
 * PGN: 65409
 *
 * Description: Airmar: Speed Pulse Count
 *
 * @category PGN_65409
 */
export interface PGN_65409Interface extends PGNInterface {
  fields: PGN_65409Fields
}

/**
 * @category PGN_65409
 */
export interface PGN_65409Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_65409
 */
export class PGN_65409 extends PGN implements PGN_65409Interface {
  fields: PGN_65409Fields

  constructor(fields: PGN_65409Fields, dst: number = 255) {
    super(PGN_65409Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['airmarSpeedPulseCount'] = (fields:any, dst:number) => new PGN_65409(fields, dst)


/**
 * PGN: 65410
 *
 * Description: Airmar: Device Information
 *
 * @category PGN_65410
 */
export interface PGN_65410Interface extends PGNInterface {
  fields: PGN_65410Fields
}

/**
 * @category PGN_65410
 */
export interface PGN_65410Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_65410
 */
export class PGN_65410 extends PGN implements PGN_65410Interface {
  fields: PGN_65410Fields

  constructor(fields: PGN_65410Fields, dst: number = 255) {
    super(PGN_65410Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['airmarDeviceInformation'] = (fields:any, dst:number) => new PGN_65410(fields, dst)


/**
 * PGN: 65420
 *
 * Description: Simnet: AP Unknown 3
 *
 * Explanation: Seen as sent by AC-42 only so far.
 *
 * @category PGN_65420
 */
export interface PGN_65420Interface extends PGNInterface {
  fields: PGN_65420Fields
}

/**
 * @category PGN_65420
 */
export interface PGN_65420Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_65420
 */
export class PGN_65420 extends PGN implements PGN_65420Interface {
  fields: PGN_65420Fields

  constructor(fields: PGN_65420Fields, dst: number = 255) {
    super(PGN_65420Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetApUnknown3'] = (fields:any, dst:number) => new PGN_65420(fields, dst)


/**
 * PGN: 65480
 *
 * Description: Simnet: Autopilot Mode
 *
 * @category PGN_65480
 */
export interface PGN_65480Interface extends PGNInterface {
  fields: PGN_65480Fields
}

/**
 * @category PGN_65480
 */
export interface PGN_65480Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
}

/**
 * @category PGN_65480
 */
export const PGN_65480Defaults = {
  pgn: 65480,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_65480
 */
export class PGN_65480 extends PGN implements PGN_65480Interface {
  fields: PGN_65480Fields

  constructor(fields: PGN_65480Fields, dst: number = 255) {
    super(PGN_65480Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetAutopilotMode'] = (fields:any, dst:number) => new PGN_65480(fields, dst)


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
export interface PGN_126208_NmeaRequestGroupFunctionInterface extends PGNInterface {
  fields: PGN_126208_NmeaRequestGroupFunctionFields
}

/**
 * @category PGN_126208_NmeaRequestGroupFunction
 */
export interface PGN_126208_NmeaRequestGroupFunctionFields {
  functionCode?: enums.GroupFunction | number
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
  prio: 3,
  fields: []
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
  functionCode?: enums.GroupFunction | number
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
export class PGN_126208_NmeaRequestGroupFunction extends PGN implements PGN_126208_NmeaRequestGroupFunctionInterface {
  fields: PGN_126208_NmeaRequestGroupFunctionFields

  constructor(fields: PGN_126208_NmeaRequestGroupFunctionCreateArgs, dst: number = 255) {
    super(PGN_126208_NmeaRequestGroupFunctionDefaults)
    this.dst = dst
    this.fields = { ...PGN_126208_NmeaRequestGroupFunctionMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126208_NmeaRequestGroupFunctionMatchFields)
}
}
pgnIdToClass['nmeaRequestGroupFunction'] = (fields:any, dst:number) => new PGN_126208_NmeaRequestGroupFunction(fields, dst)


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
export interface PGN_126208_NmeaCommandGroupFunctionInterface extends PGNInterface {
  fields: PGN_126208_NmeaCommandGroupFunctionFields
}

/**
 * @category PGN_126208_NmeaCommandGroupFunction
 */
export interface PGN_126208_NmeaCommandGroupFunctionFields {
  functionCode?: enums.GroupFunction | number
  pgn?: N2K_Pgn
  priority?: enums.Priority | number
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
  prio: 3,
  fields: []
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
  priority?: enums.Priority | number
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
export class PGN_126208_NmeaCommandGroupFunction extends PGN implements PGN_126208_NmeaCommandGroupFunctionInterface {
  fields: PGN_126208_NmeaCommandGroupFunctionFields

  constructor(fields: PGN_126208_NmeaCommandGroupFunctionCreateArgs, dst: number = 255) {
    super(PGN_126208_NmeaCommandGroupFunctionDefaults)
    this.dst = dst
    this.fields = { ...PGN_126208_NmeaCommandGroupFunctionMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126208_NmeaCommandGroupFunctionMatchFields)
}
}
pgnIdToClass['nmeaCommandGroupFunction'] = (fields:any, dst:number) => new PGN_126208_NmeaCommandGroupFunction(fields, dst)


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
export interface PGN_126208_NmeaAcknowledgeGroupFunctionInterface extends PGNInterface {
  fields: PGN_126208_NmeaAcknowledgeGroupFunctionFields
}

/**
 * @category PGN_126208_NmeaAcknowledgeGroupFunction
 */
export interface PGN_126208_NmeaAcknowledgeGroupFunctionFields {
  functionCode?: enums.GroupFunction | number
  pgn?: N2K_Pgn
  pgnErrorCode?: enums.PgnErrorCode | number
  transmissionIntervalPriorityErrorCode?: enums.TransmissionInterval | number
  numberOfParameters?: N2K_Number
  list: {
    parameter?: enums.ParameterField | number
  }[]
}

/**
 * @category PGN_126208_NmeaAcknowledgeGroupFunction
 */
export const PGN_126208_NmeaAcknowledgeGroupFunctionDefaults = {
  pgn: 126208,
  dst: 255,
  prio: 3,
  fields: []
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
  pgnErrorCode?: enums.PgnErrorCode | number
  transmissionIntervalPriorityErrorCode?: enums.TransmissionInterval | number
  numberOfParameters?: N2K_Number
  list: {
    parameter?: enums.ParameterField | number
  }[]
}

/**
 * @category PGN_126208_NmeaAcknowledgeGroupFunction
 */
export class PGN_126208_NmeaAcknowledgeGroupFunction extends PGN implements PGN_126208_NmeaAcknowledgeGroupFunctionInterface {
  fields: PGN_126208_NmeaAcknowledgeGroupFunctionFields

  constructor(fields: PGN_126208_NmeaAcknowledgeGroupFunctionCreateArgs, dst: number = 255) {
    super(PGN_126208_NmeaAcknowledgeGroupFunctionDefaults)
    this.dst = dst
    this.fields = { ...PGN_126208_NmeaAcknowledgeGroupFunctionMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126208_NmeaAcknowledgeGroupFunctionMatchFields)
}
}
pgnIdToClass['nmeaAcknowledgeGroupFunction'] = (fields:any, dst:number) => new PGN_126208_NmeaAcknowledgeGroupFunction(fields, dst)


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
export interface PGN_126208_NmeaReadFieldsGroupFunctionInterface extends PGNInterface {
  fields: PGN_126208_NmeaReadFieldsGroupFunctionFields
}

/**
 * @category PGN_126208_NmeaReadFieldsGroupFunction
 */
export interface PGN_126208_NmeaReadFieldsGroupFunctionFields {
  functionCode?: enums.GroupFunction | number
  pgn?: N2K_Pgn
  manufacturerCode?: enums.ManufacturerCode | number
  reserved?: number
  industryCode?: enums.IndustryCode | number
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
  prio: 3,
  fields: []
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
  manufacturerCode?: enums.ManufacturerCode | number
  reserved?: number
  industryCode?: enums.IndustryCode | number
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
export class PGN_126208_NmeaReadFieldsGroupFunction extends PGN implements PGN_126208_NmeaReadFieldsGroupFunctionInterface {
  fields: PGN_126208_NmeaReadFieldsGroupFunctionFields

  constructor(fields: PGN_126208_NmeaReadFieldsGroupFunctionCreateArgs, dst: number = 255) {
    super(PGN_126208_NmeaReadFieldsGroupFunctionDefaults)
    this.dst = dst
    this.fields = { ...PGN_126208_NmeaReadFieldsGroupFunctionMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126208_NmeaReadFieldsGroupFunctionMatchFields)
}
}
pgnIdToClass['nmeaReadFieldsGroupFunction'] = (fields:any, dst:number) => new PGN_126208_NmeaReadFieldsGroupFunction(fields, dst)


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
export interface PGN_126208_NmeaReadFieldsReplyGroupFunctionInterface extends PGNInterface {
  fields: PGN_126208_NmeaReadFieldsReplyGroupFunctionFields
}

/**
 * @category PGN_126208_NmeaReadFieldsReplyGroupFunction
 */
export interface PGN_126208_NmeaReadFieldsReplyGroupFunctionFields {
  functionCode?: enums.GroupFunction | number
  pgn?: N2K_Pgn
  manufacturerCode?: enums.ManufacturerCode | number
  reserved?: number
  industryCode?: enums.IndustryCode | number
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
  prio: 3,
  fields: []
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
  manufacturerCode?: enums.ManufacturerCode | number
  reserved?: number
  industryCode?: enums.IndustryCode | number
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
export class PGN_126208_NmeaReadFieldsReplyGroupFunction extends PGN implements PGN_126208_NmeaReadFieldsReplyGroupFunctionInterface {
  fields: PGN_126208_NmeaReadFieldsReplyGroupFunctionFields

  constructor(fields: PGN_126208_NmeaReadFieldsReplyGroupFunctionCreateArgs, dst: number = 255) {
    super(PGN_126208_NmeaReadFieldsReplyGroupFunctionDefaults)
    this.dst = dst
    this.fields = { ...PGN_126208_NmeaReadFieldsReplyGroupFunctionMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126208_NmeaReadFieldsReplyGroupFunctionMatchFields)
}
}
pgnIdToClass['nmeaReadFieldsReplyGroupFunction'] = (fields:any, dst:number) => new PGN_126208_NmeaReadFieldsReplyGroupFunction(fields, dst)


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
export interface PGN_126208_NmeaWriteFieldsGroupFunctionInterface extends PGNInterface {
  fields: PGN_126208_NmeaWriteFieldsGroupFunctionFields
}

/**
 * @category PGN_126208_NmeaWriteFieldsGroupFunction
 */
export interface PGN_126208_NmeaWriteFieldsGroupFunctionFields {
  functionCode?: enums.GroupFunction | number
  pgn?: N2K_Pgn
  manufacturerCode?: enums.ManufacturerCode | number
  reserved?: number
  industryCode?: enums.IndustryCode | number
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
  prio: 3,
  fields: []
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
  manufacturerCode?: enums.ManufacturerCode | number
  reserved?: number
  industryCode?: enums.IndustryCode | number
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
export class PGN_126208_NmeaWriteFieldsGroupFunction extends PGN implements PGN_126208_NmeaWriteFieldsGroupFunctionInterface {
  fields: PGN_126208_NmeaWriteFieldsGroupFunctionFields

  constructor(fields: PGN_126208_NmeaWriteFieldsGroupFunctionCreateArgs, dst: number = 255) {
    super(PGN_126208_NmeaWriteFieldsGroupFunctionDefaults)
    this.dst = dst
    this.fields = { ...PGN_126208_NmeaWriteFieldsGroupFunctionMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126208_NmeaWriteFieldsGroupFunctionMatchFields)
}
}
pgnIdToClass['nmeaWriteFieldsGroupFunction'] = (fields:any, dst:number) => new PGN_126208_NmeaWriteFieldsGroupFunction(fields, dst)


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
export interface PGN_126208_NmeaWriteFieldsReplyGroupFunctionInterface extends PGNInterface {
  fields: PGN_126208_NmeaWriteFieldsReplyGroupFunctionFields
}

/**
 * @category PGN_126208_NmeaWriteFieldsReplyGroupFunction
 */
export interface PGN_126208_NmeaWriteFieldsReplyGroupFunctionFields {
  functionCode?: enums.GroupFunction | number
  pgn?: N2K_Pgn
  manufacturerCode?: enums.ManufacturerCode | number
  reserved?: number
  industryCode?: enums.IndustryCode | number
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
  prio: 3,
  fields: []
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
  manufacturerCode?: enums.ManufacturerCode | number
  reserved?: number
  industryCode?: enums.IndustryCode | number
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
export class PGN_126208_NmeaWriteFieldsReplyGroupFunction extends PGN implements PGN_126208_NmeaWriteFieldsReplyGroupFunctionInterface {
  fields: PGN_126208_NmeaWriteFieldsReplyGroupFunctionFields

  constructor(fields: PGN_126208_NmeaWriteFieldsReplyGroupFunctionCreateArgs, dst: number = 255) {
    super(PGN_126208_NmeaWriteFieldsReplyGroupFunctionDefaults)
    this.dst = dst
    this.fields = { ...PGN_126208_NmeaWriteFieldsReplyGroupFunctionMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126208_NmeaWriteFieldsReplyGroupFunctionMatchFields)
}
}
pgnIdToClass['nmeaWriteFieldsReplyGroupFunction'] = (fields:any, dst:number) => new PGN_126208_NmeaWriteFieldsReplyGroupFunction(fields, dst)


/**
 * PGN: 126464
 *
 * Description: PGN List (Transmit and Receive)
 *
 * @category PGN_126464
 */
export interface PGN_126464Interface extends PGNInterface {
  fields: PGN_126464Fields
}

/**
 * @category PGN_126464
 */
export interface PGN_126464Fields {
  functionCode?: enums.PgnListFunction | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_126464
 */
export class PGN_126464 extends PGN implements PGN_126464Interface {
  fields: PGN_126464Fields

  constructor(fields: PGN_126464Fields, dst: number = 255) {
    super(PGN_126464Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['pgnListTransmitAndReceive'] = (fields:any, dst:number) => new PGN_126464(fields, dst)


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
export interface PGN_126720_Seatalk1PilotModeInterface extends PGNInterface {
  fields: PGN_126720_Seatalk1PilotModeFields
}

/**
 * @category PGN_126720_Seatalk1PilotMode
 */
export interface PGN_126720_Seatalk1PilotModeFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: N2K_Number
  command?: N2K_Number
  unknown1?: N2K_Binary
  pilotMode?: enums.SeatalkPilotMode | number
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
  prio: 3,
  fields: []
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
  pilotMode?: enums.SeatalkPilotMode | number
  subMode?: N2K_Number
  pilotModeData?: N2K_Binary
  unknown2?: N2K_Binary
}

/**
 * @category PGN_126720_Seatalk1PilotMode
 */
export class PGN_126720_Seatalk1PilotMode extends PGN implements PGN_126720_Seatalk1PilotModeInterface {
  fields: PGN_126720_Seatalk1PilotModeFields

  constructor(fields: PGN_126720_Seatalk1PilotModeCreateArgs, dst: number = 255) {
    super(PGN_126720_Seatalk1PilotModeDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_Seatalk1PilotModeMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_Seatalk1PilotModeMatchFields)
}
}
pgnIdToClass['seatalk1PilotMode'] = (fields:any, dst:number) => new PGN_126720_Seatalk1PilotMode(fields, dst)


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
export interface PGN_126720_FusionMediaControlInterface extends PGNInterface {
  fields: PGN_126720_FusionMediaControlFields
}

/**
 * @category PGN_126720_FusionMediaControl
 */
export interface PGN_126720_FusionMediaControlFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: N2K_Number
  unknown?: N2K_Number
  sourceId?: N2K_Number
  command?: enums.FusionCommand | number
}

/**
 * @category PGN_126720_FusionMediaControl
 */
export const PGN_126720_FusionMediaControlDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
  command?: enums.FusionCommand | number
}

/**
 * @category PGN_126720_FusionMediaControl
 */
export class PGN_126720_FusionMediaControl extends PGN implements PGN_126720_FusionMediaControlInterface {
  fields: PGN_126720_FusionMediaControlFields

  constructor(fields: PGN_126720_FusionMediaControlCreateArgs, dst: number = 255) {
    super(PGN_126720_FusionMediaControlDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_FusionMediaControlMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_FusionMediaControlMatchFields)
}
}
pgnIdToClass['fusionMediaControl'] = (fields:any, dst:number) => new PGN_126720_FusionMediaControl(fields, dst)


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
export interface PGN_126720_FusionSiriusControlInterface extends PGNInterface {
  fields: PGN_126720_FusionSiriusControlFields
}

/**
 * @category PGN_126720_FusionSiriusControl
 */
export interface PGN_126720_FusionSiriusControlFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: N2K_Number
  unknown?: N2K_Number
  sourceId?: N2K_Number
  command?: enums.FusionSiriusCommand | number
}

/**
 * @category PGN_126720_FusionSiriusControl
 */
export const PGN_126720_FusionSiriusControlDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
  command?: enums.FusionSiriusCommand | number
}

/**
 * @category PGN_126720_FusionSiriusControl
 */
export class PGN_126720_FusionSiriusControl extends PGN implements PGN_126720_FusionSiriusControlInterface {
  fields: PGN_126720_FusionSiriusControlFields

  constructor(fields: PGN_126720_FusionSiriusControlCreateArgs, dst: number = 255) {
    super(PGN_126720_FusionSiriusControlDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_FusionSiriusControlMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_FusionSiriusControlMatchFields)
}
}
pgnIdToClass['fusionSiriusControl'] = (fields:any, dst:number) => new PGN_126720_FusionSiriusControl(fields, dst)


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
export interface PGN_126720_FusionRequestStatusInterface extends PGNInterface {
  fields: PGN_126720_FusionRequestStatusFields
}

/**
 * @category PGN_126720_FusionRequestStatus
 */
export interface PGN_126720_FusionRequestStatusFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.FusionMessageId | number
  unknown?: N2K_Number
}

/**
 * @category PGN_126720_FusionRequestStatus
 */
export const PGN_126720_FusionRequestStatusDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
export class PGN_126720_FusionRequestStatus extends PGN implements PGN_126720_FusionRequestStatusInterface {
  fields: PGN_126720_FusionRequestStatusFields

  constructor(fields: PGN_126720_FusionRequestStatusCreateArgs, dst: number = 255) {
    super(PGN_126720_FusionRequestStatusDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_FusionRequestStatusMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_FusionRequestStatusMatchFields)
}
}
pgnIdToClass['fusionRequestStatus'] = (fields:any, dst:number) => new PGN_126720_FusionRequestStatus(fields, dst)


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
export interface PGN_126720_FusionSetSourceInterface extends PGNInterface {
  fields: PGN_126720_FusionSetSourceFields
}

/**
 * @category PGN_126720_FusionSetSource
 */
export interface PGN_126720_FusionSetSourceFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.FusionMessageId | number
  unknown?: N2K_Number
  sourceId?: N2K_Number
}

/**
 * @category PGN_126720_FusionSetSource
 */
export const PGN_126720_FusionSetSourceDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
export class PGN_126720_FusionSetSource extends PGN implements PGN_126720_FusionSetSourceInterface {
  fields: PGN_126720_FusionSetSourceFields

  constructor(fields: PGN_126720_FusionSetSourceCreateArgs, dst: number = 255) {
    super(PGN_126720_FusionSetSourceDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_FusionSetSourceMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_FusionSetSourceMatchFields)
}
}
pgnIdToClass['fusionSetSource'] = (fields:any, dst:number) => new PGN_126720_FusionSetSource(fields, dst)


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
export interface PGN_126720_FusionSetMuteInterface extends PGNInterface {
  fields: PGN_126720_FusionSetMuteFields
}

/**
 * @category PGN_126720_FusionSetMute
 */
export interface PGN_126720_FusionSetMuteFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.FusionMessageId | number
  command?: enums.FusionMuteCommand | number
}

/**
 * @category PGN_126720_FusionSetMute
 */
export const PGN_126720_FusionSetMuteDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
  command?: enums.FusionMuteCommand | number
}

/**
 * @category PGN_126720_FusionSetMute
 */
export class PGN_126720_FusionSetMute extends PGN implements PGN_126720_FusionSetMuteInterface {
  fields: PGN_126720_FusionSetMuteFields

  constructor(fields: PGN_126720_FusionSetMuteCreateArgs, dst: number = 255) {
    super(PGN_126720_FusionSetMuteDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_FusionSetMuteMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_FusionSetMuteMatchFields)
}
}
pgnIdToClass['fusionSetMute'] = (fields:any, dst:number) => new PGN_126720_FusionSetMute(fields, dst)


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
export interface PGN_126720_FusionSetZoneVolumeInterface extends PGNInterface {
  fields: PGN_126720_FusionSetZoneVolumeFields
}

/**
 * @category PGN_126720_FusionSetZoneVolume
 */
export interface PGN_126720_FusionSetZoneVolumeFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.FusionMessageId | number
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
  prio: 3,
  fields: []
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
export class PGN_126720_FusionSetZoneVolume extends PGN implements PGN_126720_FusionSetZoneVolumeInterface {
  fields: PGN_126720_FusionSetZoneVolumeFields

  constructor(fields: PGN_126720_FusionSetZoneVolumeCreateArgs, dst: number = 255) {
    super(PGN_126720_FusionSetZoneVolumeDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_FusionSetZoneVolumeMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_FusionSetZoneVolumeMatchFields)
}
}
pgnIdToClass['fusionSetZoneVolume'] = (fields:any, dst:number) => new PGN_126720_FusionSetZoneVolume(fields, dst)


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
export interface PGN_126720_FusionSetAllVolumesInterface extends PGNInterface {
  fields: PGN_126720_FusionSetAllVolumesFields
}

/**
 * @category PGN_126720_FusionSetAllVolumes
 */
export interface PGN_126720_FusionSetAllVolumesFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.FusionMessageId | number
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
  prio: 3,
  fields: []
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
export class PGN_126720_FusionSetAllVolumes extends PGN implements PGN_126720_FusionSetAllVolumesInterface {
  fields: PGN_126720_FusionSetAllVolumesFields

  constructor(fields: PGN_126720_FusionSetAllVolumesCreateArgs, dst: number = 255) {
    super(PGN_126720_FusionSetAllVolumesDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_FusionSetAllVolumesMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_FusionSetAllVolumesMatchFields)
}
}
pgnIdToClass['fusionSetAllVolumes'] = (fields:any, dst:number) => new PGN_126720_FusionSetAllVolumes(fields, dst)


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
export interface PGN_126720_Seatalk1KeystrokeInterface extends PGNInterface {
  fields: PGN_126720_Seatalk1KeystrokeFields
}

/**
 * @category PGN_126720_Seatalk1Keystroke
 */
export interface PGN_126720_Seatalk1KeystrokeFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: N2K_Number
  command?: N2K_Number
  device?: N2K_Number
  key?: enums.SeatalkKeystroke | number
  keyinverted?: N2K_Number
  unknownData?: N2K_Binary
}

/**
 * @category PGN_126720_Seatalk1Keystroke
 */
export const PGN_126720_Seatalk1KeystrokeDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
  key?: enums.SeatalkKeystroke | number
  keyinverted?: N2K_Number
  unknownData?: N2K_Binary
}

/**
 * @category PGN_126720_Seatalk1Keystroke
 */
export class PGN_126720_Seatalk1Keystroke extends PGN implements PGN_126720_Seatalk1KeystrokeInterface {
  fields: PGN_126720_Seatalk1KeystrokeFields

  constructor(fields: PGN_126720_Seatalk1KeystrokeCreateArgs, dst: number = 255) {
    super(PGN_126720_Seatalk1KeystrokeDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_Seatalk1KeystrokeMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_Seatalk1KeystrokeMatchFields)
}
}
pgnIdToClass['seatalk1Keystroke'] = (fields:any, dst:number) => new PGN_126720_Seatalk1Keystroke(fields, dst)


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
export interface PGN_126720_Seatalk1DeviceIdentificationInterface extends PGNInterface {
  fields: PGN_126720_Seatalk1DeviceIdentificationFields
}

/**
 * @category PGN_126720_Seatalk1DeviceIdentification
 */
export interface PGN_126720_Seatalk1DeviceIdentificationFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: N2K_Number
  command?: N2K_Number
  reserved6?: number
  device?: enums.SeatalkDeviceId | number
}

/**
 * @category PGN_126720_Seatalk1DeviceIdentification
 */
export const PGN_126720_Seatalk1DeviceIdentificationDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
  device?: enums.SeatalkDeviceId | number
}

/**
 * @category PGN_126720_Seatalk1DeviceIdentification
 */
export class PGN_126720_Seatalk1DeviceIdentification extends PGN implements PGN_126720_Seatalk1DeviceIdentificationInterface {
  fields: PGN_126720_Seatalk1DeviceIdentificationFields

  constructor(fields: PGN_126720_Seatalk1DeviceIdentificationCreateArgs, dst: number = 255) {
    super(PGN_126720_Seatalk1DeviceIdentificationDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_Seatalk1DeviceIdentificationMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_Seatalk1DeviceIdentificationMatchFields)
}
}
pgnIdToClass['seatalk1DeviceIdentification'] = (fields:any, dst:number) => new PGN_126720_Seatalk1DeviceIdentification(fields, dst)


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
export interface PGN_126720_Seatalk1DisplayBrightnessInterface extends PGNInterface {
  fields: PGN_126720_Seatalk1DisplayBrightnessFields
}

/**
 * @category PGN_126720_Seatalk1DisplayBrightness
 */
export interface PGN_126720_Seatalk1DisplayBrightnessFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: N2K_Number
  group?: enums.SeatalkNetworkGroup | number
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
  prio: 3,
  fields: []
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
  group?: enums.SeatalkNetworkGroup | number
  unknown1?: N2K_Binary
  command?: N2K_Number
  brightness?: N2K_Number
  unknown2?: N2K_Binary
}

/**
 * @category PGN_126720_Seatalk1DisplayBrightness
 */
export class PGN_126720_Seatalk1DisplayBrightness extends PGN implements PGN_126720_Seatalk1DisplayBrightnessInterface {
  fields: PGN_126720_Seatalk1DisplayBrightnessFields

  constructor(fields: PGN_126720_Seatalk1DisplayBrightnessCreateArgs, dst: number = 255) {
    super(PGN_126720_Seatalk1DisplayBrightnessDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_Seatalk1DisplayBrightnessMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_Seatalk1DisplayBrightnessMatchFields)
}
}
pgnIdToClass['seatalk1DisplayBrightness'] = (fields:any, dst:number) => new PGN_126720_Seatalk1DisplayBrightness(fields, dst)


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
export interface PGN_126720_Seatalk1DisplayColorInterface extends PGNInterface {
  fields: PGN_126720_Seatalk1DisplayColorFields
}

/**
 * @category PGN_126720_Seatalk1DisplayColor
 */
export interface PGN_126720_Seatalk1DisplayColorFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: N2K_Number
  group?: enums.SeatalkNetworkGroup | number
  unknown1?: N2K_Binary
  command?: N2K_Number
  color?: enums.SeatalkDisplayColor | number
  unknown2?: N2K_Binary
}

/**
 * @category PGN_126720_Seatalk1DisplayColor
 */
export const PGN_126720_Seatalk1DisplayColorDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
  group?: enums.SeatalkNetworkGroup | number
  unknown1?: N2K_Binary
  color?: enums.SeatalkDisplayColor | number
  unknown2?: N2K_Binary
}

/**
 * @category PGN_126720_Seatalk1DisplayColor
 */
export class PGN_126720_Seatalk1DisplayColor extends PGN implements PGN_126720_Seatalk1DisplayColorInterface {
  fields: PGN_126720_Seatalk1DisplayColorFields

  constructor(fields: PGN_126720_Seatalk1DisplayColorCreateArgs, dst: number = 255) {
    super(PGN_126720_Seatalk1DisplayColorDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_Seatalk1DisplayColorMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_Seatalk1DisplayColorMatchFields)
}
}
pgnIdToClass['seatalk1DisplayColor'] = (fields:any, dst:number) => new PGN_126720_Seatalk1DisplayColor(fields, dst)


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
export interface PGN_126720_AirmarAttitudeOffsetInterface extends PGNInterface {
  fields: PGN_126720_AirmarAttitudeOffsetFields
}

/**
 * @category PGN_126720_AirmarAttitudeOffset
 */
export interface PGN_126720_AirmarAttitudeOffsetFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.AirmarCommand | number
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
  prio: 3,
  fields: []
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
export class PGN_126720_AirmarAttitudeOffset extends PGN implements PGN_126720_AirmarAttitudeOffsetInterface {
  fields: PGN_126720_AirmarAttitudeOffsetFields

  constructor(fields: PGN_126720_AirmarAttitudeOffsetCreateArgs, dst: number = 255) {
    super(PGN_126720_AirmarAttitudeOffsetDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_AirmarAttitudeOffsetMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_AirmarAttitudeOffsetMatchFields)
}
}
pgnIdToClass['airmarAttitudeOffset'] = (fields:any, dst:number) => new PGN_126720_AirmarAttitudeOffset(fields, dst)


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
export interface PGN_126720_AirmarCalibrateCompassInterface extends PGNInterface {
  fields: PGN_126720_AirmarCalibrateCompassFields
}

/**
 * @category PGN_126720_AirmarCalibrateCompass
 */
export interface PGN_126720_AirmarCalibrateCompassFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.AirmarCommand | number
  calibrateFunction?: enums.AirmarCalibrateFunction | number
  calibrationStatus?: enums.AirmarCalibrateStatus | number
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
  prio: 3,
  fields: []
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
  calibrateFunction?: enums.AirmarCalibrateFunction | number
  calibrationStatus?: enums.AirmarCalibrateStatus | number
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
export class PGN_126720_AirmarCalibrateCompass extends PGN implements PGN_126720_AirmarCalibrateCompassInterface {
  fields: PGN_126720_AirmarCalibrateCompassFields

  constructor(fields: PGN_126720_AirmarCalibrateCompassCreateArgs, dst: number = 255) {
    super(PGN_126720_AirmarCalibrateCompassDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_AirmarCalibrateCompassMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_AirmarCalibrateCompassMatchFields)
}
}
pgnIdToClass['airmarCalibrateCompass'] = (fields:any, dst:number) => new PGN_126720_AirmarCalibrateCompass(fields, dst)


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
export interface PGN_126720_AirmarTrueWindOptionsInterface extends PGNInterface {
  fields: PGN_126720_AirmarTrueWindOptionsFields
}

/**
 * @category PGN_126720_AirmarTrueWindOptions
 */
export interface PGN_126720_AirmarTrueWindOptionsFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.AirmarCommand | number
  cogSubstitutionForHdg?: enums.YesNo | number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarTrueWindOptions
 */
export const PGN_126720_AirmarTrueWindOptionsDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
  cogSubstitutionForHdg?: enums.YesNo | number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarTrueWindOptions
 */
export class PGN_126720_AirmarTrueWindOptions extends PGN implements PGN_126720_AirmarTrueWindOptionsInterface {
  fields: PGN_126720_AirmarTrueWindOptionsFields

  constructor(fields: PGN_126720_AirmarTrueWindOptionsCreateArgs, dst: number = 255) {
    super(PGN_126720_AirmarTrueWindOptionsDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_AirmarTrueWindOptionsMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_AirmarTrueWindOptionsMatchFields)
}
}
pgnIdToClass['airmarTrueWindOptions'] = (fields:any, dst:number) => new PGN_126720_AirmarTrueWindOptions(fields, dst)


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
export interface PGN_126720_AirmarSimulateModeInterface extends PGNInterface {
  fields: PGN_126720_AirmarSimulateModeFields
}

/**
 * @category PGN_126720_AirmarSimulateMode
 */
export interface PGN_126720_AirmarSimulateModeFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.AirmarCommand | number
  simulateMode?: enums.OffOn | number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarSimulateMode
 */
export const PGN_126720_AirmarSimulateModeDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
  simulateMode?: enums.OffOn | number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarSimulateMode
 */
export class PGN_126720_AirmarSimulateMode extends PGN implements PGN_126720_AirmarSimulateModeInterface {
  fields: PGN_126720_AirmarSimulateModeFields

  constructor(fields: PGN_126720_AirmarSimulateModeCreateArgs, dst: number = 255) {
    super(PGN_126720_AirmarSimulateModeDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_AirmarSimulateModeMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_AirmarSimulateModeMatchFields)
}
}
pgnIdToClass['airmarSimulateMode'] = (fields:any, dst:number) => new PGN_126720_AirmarSimulateMode(fields, dst)


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
export interface PGN_126720_AirmarCalibrateDepthInterface extends PGNInterface {
  fields: PGN_126720_AirmarCalibrateDepthFields
}

/**
 * @category PGN_126720_AirmarCalibrateDepth
 */
export interface PGN_126720_AirmarCalibrateDepthFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.AirmarCommand | number
  speedOfSoundMode?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarCalibrateDepth
 */
export const PGN_126720_AirmarCalibrateDepthDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
export class PGN_126720_AirmarCalibrateDepth extends PGN implements PGN_126720_AirmarCalibrateDepthInterface {
  fields: PGN_126720_AirmarCalibrateDepthFields

  constructor(fields: PGN_126720_AirmarCalibrateDepthCreateArgs, dst: number = 255) {
    super(PGN_126720_AirmarCalibrateDepthDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_AirmarCalibrateDepthMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_AirmarCalibrateDepthMatchFields)
}
}
pgnIdToClass['airmarCalibrateDepth'] = (fields:any, dst:number) => new PGN_126720_AirmarCalibrateDepth(fields, dst)


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
export interface PGN_126720_AirmarCalibrateSpeedInterface extends PGNInterface {
  fields: PGN_126720_AirmarCalibrateSpeedFields
}

/**
 * @category PGN_126720_AirmarCalibrateSpeed
 */
export interface PGN_126720_AirmarCalibrateSpeedFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.AirmarCommand | number
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
  prio: 3,
  fields: []
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
export class PGN_126720_AirmarCalibrateSpeed extends PGN implements PGN_126720_AirmarCalibrateSpeedInterface {
  fields: PGN_126720_AirmarCalibrateSpeedFields

  constructor(fields: PGN_126720_AirmarCalibrateSpeedCreateArgs, dst: number = 255) {
    super(PGN_126720_AirmarCalibrateSpeedDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_AirmarCalibrateSpeedMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_AirmarCalibrateSpeedMatchFields)
}
}
pgnIdToClass['airmarCalibrateSpeed'] = (fields:any, dst:number) => new PGN_126720_AirmarCalibrateSpeed(fields, dst)


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
export interface PGN_126720_AirmarCalibrateTemperatureInterface extends PGNInterface {
  fields: PGN_126720_AirmarCalibrateTemperatureFields
}

/**
 * @category PGN_126720_AirmarCalibrateTemperature
 */
export interface PGN_126720_AirmarCalibrateTemperatureFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.AirmarCommand | number
  temperatureInstance: enums.AirmarTemperatureInstance | number
  reserved6?: number
  temperatureOffset?: N2K_Number
}

/**
 * @category PGN_126720_AirmarCalibrateTemperature
 */
export const PGN_126720_AirmarCalibrateTemperatureDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
  temperatureInstance: enums.AirmarTemperatureInstance | number
  reserved6?: number
  temperatureOffset?: N2K_Number
}

/**
 * @category PGN_126720_AirmarCalibrateTemperature
 */
export class PGN_126720_AirmarCalibrateTemperature extends PGN implements PGN_126720_AirmarCalibrateTemperatureInterface {
  fields: PGN_126720_AirmarCalibrateTemperatureFields

  constructor(fields: PGN_126720_AirmarCalibrateTemperatureCreateArgs, dst: number = 255) {
    super(PGN_126720_AirmarCalibrateTemperatureDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_AirmarCalibrateTemperatureMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_AirmarCalibrateTemperatureMatchFields)
}
}
pgnIdToClass['airmarCalibrateTemperature'] = (fields:any, dst:number) => new PGN_126720_AirmarCalibrateTemperature(fields, dst)


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
export interface PGN_126720_AirmarSpeedFilterNoneInterface extends PGNInterface {
  fields: PGN_126720_AirmarSpeedFilterNoneFields
}

/**
 * @category PGN_126720_AirmarSpeedFilterNone
 */
export interface PGN_126720_AirmarSpeedFilterNoneFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.AirmarCommand | number
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
  prio: 3,
  fields: []
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
export class PGN_126720_AirmarSpeedFilterNone extends PGN implements PGN_126720_AirmarSpeedFilterNoneInterface {
  fields: PGN_126720_AirmarSpeedFilterNoneFields

  constructor(fields: PGN_126720_AirmarSpeedFilterNoneCreateArgs, dst: number = 255) {
    super(PGN_126720_AirmarSpeedFilterNoneDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_AirmarSpeedFilterNoneMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_AirmarSpeedFilterNoneMatchFields)
}
}
pgnIdToClass['airmarSpeedFilterNone'] = (fields:any, dst:number) => new PGN_126720_AirmarSpeedFilterNone(fields, dst)


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
export interface PGN_126720_AirmarSpeedFilterIirInterface extends PGNInterface {
  fields: PGN_126720_AirmarSpeedFilterIirFields
}

/**
 * @category PGN_126720_AirmarSpeedFilterIir
 */
export interface PGN_126720_AirmarSpeedFilterIirFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.AirmarCommand | number
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
  prio: 3,
  fields: []
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
export class PGN_126720_AirmarSpeedFilterIir extends PGN implements PGN_126720_AirmarSpeedFilterIirInterface {
  fields: PGN_126720_AirmarSpeedFilterIirFields

  constructor(fields: PGN_126720_AirmarSpeedFilterIirCreateArgs, dst: number = 255) {
    super(PGN_126720_AirmarSpeedFilterIirDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_AirmarSpeedFilterIirMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_AirmarSpeedFilterIirMatchFields)
}
}
pgnIdToClass['airmarSpeedFilterIir'] = (fields:any, dst:number) => new PGN_126720_AirmarSpeedFilterIir(fields, dst)


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
export interface PGN_126720_AirmarTemperatureFilterNoneInterface extends PGNInterface {
  fields: PGN_126720_AirmarTemperatureFilterNoneFields
}

/**
 * @category PGN_126720_AirmarTemperatureFilterNone
 */
export interface PGN_126720_AirmarTemperatureFilterNoneFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.AirmarCommand | number
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
  prio: 3,
  fields: []
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
export class PGN_126720_AirmarTemperatureFilterNone extends PGN implements PGN_126720_AirmarTemperatureFilterNoneInterface {
  fields: PGN_126720_AirmarTemperatureFilterNoneFields

  constructor(fields: PGN_126720_AirmarTemperatureFilterNoneCreateArgs, dst: number = 255) {
    super(PGN_126720_AirmarTemperatureFilterNoneDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_AirmarTemperatureFilterNoneMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_AirmarTemperatureFilterNoneMatchFields)
}
}
pgnIdToClass['airmarTemperatureFilterNone'] = (fields:any, dst:number) => new PGN_126720_AirmarTemperatureFilterNone(fields, dst)


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
export interface PGN_126720_AirmarTemperatureFilterIirInterface extends PGNInterface {
  fields: PGN_126720_AirmarTemperatureFilterIirFields
}

/**
 * @category PGN_126720_AirmarTemperatureFilterIir
 */
export interface PGN_126720_AirmarTemperatureFilterIirFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.AirmarCommand | number
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
  prio: 3,
  fields: []
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
export class PGN_126720_AirmarTemperatureFilterIir extends PGN implements PGN_126720_AirmarTemperatureFilterIirInterface {
  fields: PGN_126720_AirmarTemperatureFilterIirFields

  constructor(fields: PGN_126720_AirmarTemperatureFilterIirCreateArgs, dst: number = 255) {
    super(PGN_126720_AirmarTemperatureFilterIirDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_AirmarTemperatureFilterIirMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_AirmarTemperatureFilterIirMatchFields)
}
}
pgnIdToClass['airmarTemperatureFilterIir'] = (fields:any, dst:number) => new PGN_126720_AirmarTemperatureFilterIir(fields, dst)


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
export interface PGN_126720_AirmarNmea2000OptionsInterface extends PGNInterface {
  fields: PGN_126720_AirmarNmea2000OptionsFields
}

/**
 * @category PGN_126720_AirmarNmea2000Options
 */
export interface PGN_126720_AirmarNmea2000OptionsFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.AirmarCommand | number
  transmissionInterval?: enums.AirmarTransmissionInterval | number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarNmea2000Options
 */
export const PGN_126720_AirmarNmea2000OptionsDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
  transmissionInterval?: enums.AirmarTransmissionInterval | number
  reserved6?: number
}

/**
 * @category PGN_126720_AirmarNmea2000Options
 */
export class PGN_126720_AirmarNmea2000Options extends PGN implements PGN_126720_AirmarNmea2000OptionsInterface {
  fields: PGN_126720_AirmarNmea2000OptionsFields

  constructor(fields: PGN_126720_AirmarNmea2000OptionsCreateArgs, dst: number = 255) {
    super(PGN_126720_AirmarNmea2000OptionsDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_AirmarNmea2000OptionsMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_AirmarNmea2000OptionsMatchFields)
}
}
pgnIdToClass['airmarNmea2000Options'] = (fields:any, dst:number) => new PGN_126720_AirmarNmea2000Options(fields, dst)


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
export interface PGN_126720_AirmarAddressableMultiFrameInterface extends PGNInterface {
  fields: PGN_126720_AirmarAddressableMultiFrameFields
}

/**
 * @category PGN_126720_AirmarAddressableMultiFrame
 */
export interface PGN_126720_AirmarAddressableMultiFrameFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: N2K_Number
}

/**
 * @category PGN_126720_AirmarAddressableMultiFrame
 */
export const PGN_126720_AirmarAddressableMultiFrameDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
export class PGN_126720_AirmarAddressableMultiFrame extends PGN implements PGN_126720_AirmarAddressableMultiFrameInterface {
  fields: PGN_126720_AirmarAddressableMultiFrameFields

  constructor(fields: PGN_126720_AirmarAddressableMultiFrameCreateArgs, dst: number = 255) {
    super(PGN_126720_AirmarAddressableMultiFrameDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_AirmarAddressableMultiFrameMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_AirmarAddressableMultiFrameMatchFields)
}
}
pgnIdToClass['airmarAddressableMultiFrame'] = (fields:any, dst:number) => new PGN_126720_AirmarAddressableMultiFrame(fields, dst)


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
export interface PGN_126720_MaretronSlaveResponseInterface extends PGNInterface {
  fields: PGN_126720_MaretronSlaveResponseFields
}

/**
 * @category PGN_126720_MaretronSlaveResponse
 */
export interface PGN_126720_MaretronSlaveResponseFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
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
export class PGN_126720_MaretronSlaveResponse extends PGN implements PGN_126720_MaretronSlaveResponseInterface {
  fields: PGN_126720_MaretronSlaveResponseFields

  constructor(fields: PGN_126720_MaretronSlaveResponseCreateArgs, dst: number = 255) {
    super(PGN_126720_MaretronSlaveResponseDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_MaretronSlaveResponseMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_MaretronSlaveResponseMatchFields)
}
}
pgnIdToClass['maretronSlaveResponse'] = (fields:any, dst:number) => new PGN_126720_MaretronSlaveResponse(fields, dst)


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
export interface PGN_126720_GarminDayModeInterface extends PGNInterface {
  fields: PGN_126720_GarminDayModeFields
}

/**
 * @category PGN_126720_GarminDayMode
 */
export interface PGN_126720_GarminDayModeFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  unknownId1?: N2K_Number
  unknownId2?: N2K_Number
  unknownId3?: N2K_Number
  unknownId4?: N2K_Number
  spare8?: number
  mode?: enums.GarminColorMode | number
  spare10?: number
  backlight?: enums.GarminBacklightLevel | number
}

/**
 * @category PGN_126720_GarminDayMode
 */
export const PGN_126720_GarminDayModeDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
  mode?: enums.GarminColorMode | number
  spare10?: number
  backlight?: enums.GarminBacklightLevel | number
}

/**
 * @category PGN_126720_GarminDayMode
 */
export class PGN_126720_GarminDayMode extends PGN implements PGN_126720_GarminDayModeInterface {
  fields: PGN_126720_GarminDayModeFields

  constructor(fields: PGN_126720_GarminDayModeCreateArgs, dst: number = 255) {
    super(PGN_126720_GarminDayModeDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_GarminDayModeMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_GarminDayModeMatchFields)
}
}
pgnIdToClass['garminDayMode'] = (fields:any, dst:number) => new PGN_126720_GarminDayMode(fields, dst)


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
export interface PGN_126720_GarminNightModeInterface extends PGNInterface {
  fields: PGN_126720_GarminNightModeFields
}

/**
 * @category PGN_126720_GarminNightMode
 */
export interface PGN_126720_GarminNightModeFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  unknownId1?: N2K_Number
  unknownId2?: N2K_Number
  unknownId3?: N2K_Number
  unknownId4?: N2K_Number
  spare8?: number
  mode?: enums.GarminColorMode | number
  spare10?: number
  backlight?: enums.GarminBacklightLevel | number
}

/**
 * @category PGN_126720_GarminNightMode
 */
export const PGN_126720_GarminNightModeDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
  backlight?: enums.GarminBacklightLevel | number
}

/**
 * @category PGN_126720_GarminNightMode
 */
export class PGN_126720_GarminNightMode extends PGN implements PGN_126720_GarminNightModeInterface {
  fields: PGN_126720_GarminNightModeFields

  constructor(fields: PGN_126720_GarminNightModeCreateArgs, dst: number = 255) {
    super(PGN_126720_GarminNightModeDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_GarminNightModeMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_GarminNightModeMatchFields)
}
}
pgnIdToClass['garminNightMode'] = (fields:any, dst:number) => new PGN_126720_GarminNightMode(fields, dst)


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
export interface PGN_126720_GarminColorModeInterface extends PGNInterface {
  fields: PGN_126720_GarminColorModeFields
}

/**
 * @category PGN_126720_GarminColorMode
 */
export interface PGN_126720_GarminColorModeFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  unknownId1?: N2K_Number
  unknownId2?: N2K_Number
  unknownId3?: N2K_Number
  unknownId4?: N2K_Number
  spare8?: number
  mode?: enums.GarminColorMode | number
  spare10?: number
  color?: enums.GarminColor | number
}

/**
 * @category PGN_126720_GarminColorMode
 */
export const PGN_126720_GarminColorModeDefaults = {
  pgn: 126720,
  dst: 255,
  prio: 3,
  fields: []
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
  color?: enums.GarminColor | number
}

/**
 * @category PGN_126720_GarminColorMode
 */
export class PGN_126720_GarminColorMode extends PGN implements PGN_126720_GarminColorModeInterface {
  fields: PGN_126720_GarminColorModeFields

  constructor(fields: PGN_126720_GarminColorModeCreateArgs, dst: number = 255) {
    super(PGN_126720_GarminColorModeDefaults)
    this.dst = dst
    this.fields = { ...PGN_126720_GarminColorModeMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_126720_GarminColorModeMatchFields)
}
}
pgnIdToClass['garminColorMode'] = (fields:any, dst:number) => new PGN_126720_GarminColorMode(fields, dst)


/**
 * PGN: 126983
 *
 * Description: Alert
 *
 * @category PGN_126983
 */
export interface PGN_126983Interface extends PGNInterface {
  fields: PGN_126983Fields
}

/**
 * @category PGN_126983
 */
export interface PGN_126983Fields {
  alertType?: enums.AlertType | number
  alertCategory?: enums.AlertCategory | number
  alertSystem?: N2K_Number
  alertSubSystem?: N2K_Number
  alertId?: N2K_Number
  dataSourceNetworkIdName?: N2K_IsoName
  dataSourceInstance: N2K_Number
  dataSourceIndexSource?: N2K_Number
  alertOccurrenceNumber?: N2K_Number
  temporarySilenceStatus: enums.YesNo | number
  acknowledgeStatus: enums.YesNo | number
  escalationStatus: enums.YesNo | number
  temporarySilenceSupport: enums.YesNo | number
  acknowledgeSupport: enums.YesNo | number
  escalationSupport: enums.YesNo | number
  reserved?: number
  acknowledgeSourceNetworkIdName?: N2K_IsoName
  triggerCondition?: enums.AlertTriggerCondition | number
  thresholdStatus?: enums.AlertThresholdStatus | number
  alertPriority?: N2K_Number
  alertState?: enums.AlertState | number
}

/**
 * @category PGN_126983
 */
export const PGN_126983Defaults = {
  pgn: 126983,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_126983
 */
export class PGN_126983 extends PGN implements PGN_126983Interface {
  fields: PGN_126983Fields

  constructor(fields: PGN_126983Fields, dst: number = 255) {
    super(PGN_126983Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['alert'] = (fields:any, dst:number) => new PGN_126983(fields, dst)


/**
 * PGN: 126984
 *
 * Description: Alert Response
 *
 * @category PGN_126984
 */
export interface PGN_126984Interface extends PGNInterface {
  fields: PGN_126984Fields
}

/**
 * @category PGN_126984
 */
export interface PGN_126984Fields {
  alertType?: enums.AlertType | number
  alertCategory?: enums.AlertCategory | number
  alertSystem?: N2K_Number
  alertSubSystem?: N2K_Number
  alertId?: N2K_Number
  dataSourceNetworkIdName?: N2K_IsoName
  dataSourceInstance: N2K_Number
  dataSourceIndexSource?: N2K_Number
  alertOccurrenceNumber?: N2K_Number
  acknowledgeSourceNetworkIdName?: N2K_IsoName
  responseCommand?: enums.AlertResponseCommand | number
  reserved?: number
}

/**
 * @category PGN_126984
 */
export const PGN_126984Defaults = {
  pgn: 126984,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_126984
 */
export class PGN_126984 extends PGN implements PGN_126984Interface {
  fields: PGN_126984Fields

  constructor(fields: PGN_126984Fields, dst: number = 255) {
    super(PGN_126984Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['alertResponse'] = (fields:any, dst:number) => new PGN_126984(fields, dst)


/**
 * PGN: 126985
 *
 * Description: Alert Text
 *
 * @category PGN_126985
 */
export interface PGN_126985Interface extends PGNInterface {
  fields: PGN_126985Fields
}

/**
 * @category PGN_126985
 */
export interface PGN_126985Fields {
  alertType?: enums.AlertType | number
  alertCategory?: enums.AlertCategory | number
  alertSystem?: N2K_Number
  alertSubSystem?: N2K_Number
  alertId?: N2K_Number
  dataSourceNetworkIdName?: N2K_IsoName
  dataSourceInstance: N2K_Number
  dataSourceIndexSource?: N2K_Number
  alertOccurrenceNumber?: N2K_Number
  languageId?: enums.AlertLanguageId | number
  alertTextDescription?: N2K_StringLau
  alertLocationTextDescription?: N2K_StringLau
}

/**
 * @category PGN_126985
 */
export const PGN_126985Defaults = {
  pgn: 126985,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_126985
 */
export class PGN_126985 extends PGN implements PGN_126985Interface {
  fields: PGN_126985Fields

  constructor(fields: PGN_126985Fields, dst: number = 255) {
    super(PGN_126985Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['alertText'] = (fields:any, dst:number) => new PGN_126985(fields, dst)


/**
 * PGN: 126986
 *
 * Description: Alert Configuration
 *
 * @category PGN_126986
 */
export interface PGN_126986Interface extends PGNInterface {
  fields: PGN_126986Fields
}

/**
 * @category PGN_126986
 */
export interface PGN_126986Fields {
  alertType?: enums.AlertType | number
  alertCategory?: enums.AlertCategory | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_126986
 */
export class PGN_126986 extends PGN implements PGN_126986Interface {
  fields: PGN_126986Fields

  constructor(fields: PGN_126986Fields, dst: number = 255) {
    super(PGN_126986Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['alertConfiguration'] = (fields:any, dst:number) => new PGN_126986(fields, dst)


/**
 * PGN: 126987
 *
 * Description: Alert Threshold
 *
 * @category PGN_126987
 */
export interface PGN_126987Interface extends PGNInterface {
  fields: PGN_126987Fields
}

/**
 * @category PGN_126987
 */
export interface PGN_126987Fields {
  alertType?: enums.AlertType | number
  alertCategory?: enums.AlertCategory | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_126987
 */
export class PGN_126987 extends PGN implements PGN_126987Interface {
  fields: PGN_126987Fields

  constructor(fields: PGN_126987Fields, dst: number = 255) {
    super(PGN_126987Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['alertThreshold'] = (fields:any, dst:number) => new PGN_126987(fields, dst)


/**
 * PGN: 126988
 *
 * Description: Alert Value
 *
 * @category PGN_126988
 */
export interface PGN_126988Interface extends PGNInterface {
  fields: PGN_126988Fields
}

/**
 * @category PGN_126988
 */
export interface PGN_126988Fields {
  alertType?: enums.AlertType | number
  alertCategory?: enums.AlertCategory | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_126988
 */
export class PGN_126988 extends PGN implements PGN_126988Interface {
  fields: PGN_126988Fields

  constructor(fields: PGN_126988Fields, dst: number = 255) {
    super(PGN_126988Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['alertValue'] = (fields:any, dst:number) => new PGN_126988(fields, dst)


/**
 * PGN: 126992
 *
 * Description: System Time
 *
 * Explanation: The purpose of this PGN is twofold: To provide a regular transmission of UTC time and date. To provide synchronism for measurement data.
 *
 * @category PGN_126992
 */
export interface PGN_126992Interface extends PGNInterface {
  fields: PGN_126992Fields
}

/**
 * @category PGN_126992
 */
export interface PGN_126992Fields {
  sid?: N2K_Number
  source: enums.SystemTime | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_126992
 */
export class PGN_126992 extends PGN implements PGN_126992Interface {
  fields: PGN_126992Fields

  constructor(fields: PGN_126992Fields, dst: number = 255) {
    super(PGN_126992Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['systemTime'] = (fields:any, dst:number) => new PGN_126992(fields, dst)


/**
 * PGN: 126993
 *
 * Description: Heartbeat
 *
 * Explanation: Reception of this PGN confirms that a device is still present on the network.  Reception of this PGN may also be used to maintain an address to NAME association table within the receiving device.  The transmission interval may be used by the receiving unit to determine the time-out value for the connection supervision.  The value contained in Field 1 of this PGN reflects the PGN's current Transmission Interval. Changes to this PGN's Transmission Interval shall be reflected in Field 1.  The transmission interval can only be changed by using the Request Group Function PGN 126208 with no pairs of request parameters provided. Field 3 of the Request Group Function PGN 126208 may contain values between 1,000ms and 60,000ms.  This PGN cannot be requested by the ISO Request PGN 059904 or Request Group Function PGN 126208. In Request Group Function PGN 126208, setting Field 3 to a value of 0xFFFF FFFF and Field 4 to a value of 0xFFFF: 'Transmit now without changing timing variables.' is prohibited.  The Command Group Function PGN 126208 shall not be used with this PGN.  Fields 3 and 4 of this PGN provide information which can be used to distinguish short duration disturbances from permanent failures. See ISO 11898 -1 Sections 6.12, 6.13, 6.14, 13.1.1, 13.1.4, 13.1.4.3 and Figure 16 ( node status transition diagram) for additional context.
 *
 * @category PGN_126993
 */
export interface PGN_126993Interface extends PGNInterface {
  fields: PGN_126993Fields
}

/**
 * @category PGN_126993
 */
export interface PGN_126993Fields {
  dataTransmitOffset?: N2K_Duration
  sequenceCounter?: N2K_Number
  controller1State?: enums.ControllerState | number
  controller2State?: enums.ControllerState | number
  equipmentStatus?: enums.EquipmentStatus | number
  reserved?: number
}

/**
 * @category PGN_126993
 */
export const PGN_126993Defaults = {
  pgn: 126993,
  dst: 255,
  prio: 7,
  fields: []
}

/**
 * @category PGN_126993
 */
export class PGN_126993 extends PGN implements PGN_126993Interface {
  fields: PGN_126993Fields

  constructor(fields: PGN_126993Fields, dst: number = 255) {
    super(PGN_126993Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['heartbeat'] = (fields:any, dst:number) => new PGN_126993(fields, dst)


/**
 * PGN: 126996
 *
 * Description: Product Information
 *
 * Explanation: Provides product information onto the network that could be important for determining quality of data coming from this product.
 *
 * @category PGN_126996
 */
export interface PGN_126996Interface extends PGNInterface {
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
  certificationLevel?: enums.CertificationLevel | number
  loadEquivalency?: N2K_Number
}

/**
 * @category PGN_126996
 */
export const PGN_126996Defaults = {
  pgn: 126996,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_126996
 */
export class PGN_126996 extends PGN implements PGN_126996Interface {
  fields: PGN_126996Fields

  constructor(fields: PGN_126996Fields, dst: number = 255) {
    super(PGN_126996Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['productInformation'] = (fields:any, dst:number) => new PGN_126996(fields, dst)


/**
 * PGN: 126998
 *
 * Description: Configuration Information
 *
 * Explanation: Free-form alphanumeric fields describing the installation (e.g., starboard engine room location) of the device and installation notes (e.g., calibration data).
 *
 * @category PGN_126998
 */
export interface PGN_126998Interface extends PGNInterface {
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_126998
 */
export class PGN_126998 extends PGN implements PGN_126998Interface {
  fields: PGN_126998Fields

  constructor(fields: PGN_126998Fields, dst: number = 255) {
    super(PGN_126998Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['configurationInformation'] = (fields:any, dst:number) => new PGN_126998(fields, dst)


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
export interface PGN_127233Interface extends PGNInterface {
  fields: PGN_127233Fields
}

/**
 * @category PGN_127233
 */
export interface PGN_127233Fields {
  sid?: N2K_Number
  mobEmitterId?: N2K_Number
  manOverboardStatus?: enums.MobStatus | number
  reserved?: number
  activationTime?: N2K_Time
  positionSource?: enums.MobPositionSource | number
  reserved7?: number
  positionDate?: N2K_Date
  positionTime?: N2K_Time
  latitude?: N2K_Number
  longitude?: N2K_Number
  cogReference?: enums.DirectionReference | number
  reserved13?: number
  cog?: N2K_Number
  sog?: N2K_Number
  mmsiOfVesselOfOrigin: N2K_Mmsi
  mobEmitterBatteryLowStatus?: enums.LowBattery | number
  reserved18?: number
}

/**
 * @category PGN_127233
 */
export const PGN_127233Defaults = {
  pgn: 127233,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_127233
 */
export class PGN_127233 extends PGN implements PGN_127233Interface {
  fields: PGN_127233Fields

  constructor(fields: PGN_127233Fields, dst: number = 255) {
    super(PGN_127233Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['manOverboardNotification'] = (fields:any, dst:number) => new PGN_127233(fields, dst)


/**
 * PGN: 127237
 *
 * Description: Heading/Track control
 *
 * @category PGN_127237
 */
export interface PGN_127237Interface extends PGNInterface {
  fields: PGN_127237Fields
}

/**
 * @category PGN_127237
 */
export interface PGN_127237Fields {
  rudderLimitExceeded?: enums.YesNo | number
  offHeadingLimitExceeded?: enums.YesNo | number
  offTrackLimitExceeded?: enums.YesNo | number
  override?: enums.YesNo | number
  steeringMode?: enums.SteeringMode | number
  turnMode?: enums.TurnMode | number
  headingReference?: enums.DirectionReference | number
  reserved?: number
  commandedRudderDirection?: enums.DirectionRudder | number
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
  prio: 2,
  fields: []
}

/**
 * @category PGN_127237
 */
export class PGN_127237 extends PGN implements PGN_127237Interface {
  fields: PGN_127237Fields

  constructor(fields: PGN_127237Fields, dst: number = 255) {
    super(PGN_127237Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['headingTrackControl'] = (fields:any, dst:number) => new PGN_127237(fields, dst)


/**
 * PGN: 127245
 *
 * Description: Rudder
 *
 * @category PGN_127245
 */
export interface PGN_127245Interface extends PGNInterface {
  fields: PGN_127245Fields
}

/**
 * @category PGN_127245
 */
export interface PGN_127245Fields {
  instance: N2K_Number
  directionOrder?: enums.DirectionRudder | number
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
  prio: 2,
  fields: []
}

/**
 * @category PGN_127245
 */
export class PGN_127245 extends PGN implements PGN_127245Interface {
  fields: PGN_127245Fields

  constructor(fields: PGN_127245Fields, dst: number = 255) {
    super(PGN_127245Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['rudder'] = (fields:any, dst:number) => new PGN_127245(fields, dst)


/**
 * PGN: 127250
 *
 * Description: Vessel Heading
 *
 * @category PGN_127250
 */
export interface PGN_127250Interface extends PGNInterface {
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
  reference?: enums.DirectionReference | number
  reserved?: number
}

/**
 * @category PGN_127250
 */
export const PGN_127250Defaults = {
  pgn: 127250,
  dst: 255,
  prio: 2,
  fields: []
}

/**
 * @category PGN_127250
 */
export class PGN_127250 extends PGN implements PGN_127250Interface {
  fields: PGN_127250Fields

  constructor(fields: PGN_127250Fields, dst: number = 255) {
    super(PGN_127250Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['vesselHeading'] = (fields:any, dst:number) => new PGN_127250(fields, dst)


/**
 * PGN: 127251
 *
 * Description: Rate of Turn
 *
 * @category PGN_127251
 */
export interface PGN_127251Interface extends PGNInterface {
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
  prio: 2,
  fields: []
}

/**
 * @category PGN_127251
 */
export class PGN_127251 extends PGN implements PGN_127251Interface {
  fields: PGN_127251Fields

  constructor(fields: PGN_127251Fields, dst: number = 255) {
    super(PGN_127251Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['rateOfTurn'] = (fields:any, dst:number) => new PGN_127251(fields, dst)


/**
 * PGN: 127252
 *
 * Description: Heave
 *
 * @category PGN_127252
 */
export interface PGN_127252Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_127252
 */
export class PGN_127252 extends PGN implements PGN_127252Interface {
  fields: PGN_127252Fields

  constructor(fields: PGN_127252Fields, dst: number = 255) {
    super(PGN_127252Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['heave'] = (fields:any, dst:number) => new PGN_127252(fields, dst)


/**
 * PGN: 127257
 *
 * Description: Attitude
 *
 * @category PGN_127257
 */
export interface PGN_127257Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_127257
 */
export class PGN_127257 extends PGN implements PGN_127257Interface {
  fields: PGN_127257Fields

  constructor(fields: PGN_127257Fields, dst: number = 255) {
    super(PGN_127257Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['attitude'] = (fields:any, dst:number) => new PGN_127257(fields, dst)


/**
 * PGN: 127258
 *
 * Description: Magnetic Variation
 *
 * @category PGN_127258
 */
export interface PGN_127258Interface extends PGNInterface {
  fields: PGN_127258Fields
}

/**
 * @category PGN_127258
 */
export interface PGN_127258Fields {
  sid?: N2K_Number
  source?: enums.MagneticVariation | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_127258
 */
export class PGN_127258 extends PGN implements PGN_127258Interface {
  fields: PGN_127258Fields

  constructor(fields: PGN_127258Fields, dst: number = 255) {
    super(PGN_127258Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['magneticVariation'] = (fields:any, dst:number) => new PGN_127258(fields, dst)


/**
 * PGN: 127488
 *
 * Description: Engine Parameters, Rapid Update
 *
 * @category PGN_127488
 */
export interface PGN_127488Interface extends PGNInterface {
  fields: PGN_127488Fields
}

/**
 * @category PGN_127488
 */
export interface PGN_127488Fields {
  instance: enums.EngineInstance | number
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
  prio: 2,
  fields: []
}

/**
 * @category PGN_127488
 */
export class PGN_127488 extends PGN implements PGN_127488Interface {
  fields: PGN_127488Fields

  constructor(fields: PGN_127488Fields, dst: number = 255) {
    super(PGN_127488Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['engineParametersRapidUpdate'] = (fields:any, dst:number) => new PGN_127488(fields, dst)


/**
 * PGN: 127489
 *
 * Description: Engine Parameters, Dynamic
 *
 * @category PGN_127489
 */
export interface PGN_127489Interface extends PGNInterface {
  fields: PGN_127489Fields
}

/**
 * @category PGN_127489
 */
export interface PGN_127489Fields {
  instance: enums.EngineInstance | number
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
  prio: 2,
  fields: []
}

/**
 * @category PGN_127489
 */
export class PGN_127489 extends PGN implements PGN_127489Interface {
  fields: PGN_127489Fields

  constructor(fields: PGN_127489Fields, dst: number = 255) {
    super(PGN_127489Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['engineParametersDynamic'] = (fields:any, dst:number) => new PGN_127489(fields, dst)


/**
 * PGN: 127490
 *
 * Description: Electric Drive Status, Dynamic
 *
 * Explanation: This PGN is used to report status of Electric Drive Status control and can be used with Command Group Function (PGN Electric propulsion motor status) to command equipment. 
 *
 * @category PGN_127490
 */
export interface PGN_127490Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_127490
 */
export class PGN_127490 extends PGN implements PGN_127490Interface {
  fields: PGN_127490Fields

  constructor(fields: PGN_127490Fields, dst: number = 255) {
    super(PGN_127490Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['electricDriveStatusDynamic'] = (fields:any, dst:number) => new PGN_127490(fields, dst)


/**
 * PGN: 127491
 *
 * Description: Electric Energy Storage Status, Dynamic
 *
 * Explanation: This PGN is used to provide electric propulsion motor status and relevant data.
 *
 * @category PGN_127491
 */
export interface PGN_127491Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_127491
 */
export class PGN_127491 extends PGN implements PGN_127491Interface {
  fields: PGN_127491Fields

  constructor(fields: PGN_127491Fields, dst: number = 255) {
    super(PGN_127491Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['electricEnergyStorageStatusDynamic'] = (fields:any, dst:number) => new PGN_127491(fields, dst)


/**
 * PGN: 127493
 *
 * Description: Transmission Parameters, Dynamic
 *
 * @category PGN_127493
 */
export interface PGN_127493Interface extends PGNInterface {
  fields: PGN_127493Fields
}

/**
 * @category PGN_127493
 */
export interface PGN_127493Fields {
  instance: enums.EngineInstance | number
  transmissionGear?: enums.GearStatus | number
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
  prio: 2,
  fields: []
}

/**
 * @category PGN_127493
 */
export class PGN_127493 extends PGN implements PGN_127493Interface {
  fields: PGN_127493Fields

  constructor(fields: PGN_127493Fields, dst: number = 255) {
    super(PGN_127493Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['transmissionParametersDynamic'] = (fields:any, dst:number) => new PGN_127493(fields, dst)


/**
 * PGN: 127494
 *
 * Description: Electric Drive Information
 *
 * Explanation: This PGN is used to provide information about electric motor specifications and ratings.
 *
 * @category PGN_127494
 */
export interface PGN_127494Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_127494
 */
export class PGN_127494 extends PGN implements PGN_127494Interface {
  fields: PGN_127494Fields

  constructor(fields: PGN_127494Fields, dst: number = 255) {
    super(PGN_127494Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['electricDriveInformation'] = (fields:any, dst:number) => new PGN_127494(fields, dst)


/**
 * PGN: 127495
 *
 * Description: Electric Energy Storage Information
 *
 * Explanation: This PGN is used to provide the status on power storage sources such as batteries.This PGN is new in v3.0 and has not been observed yet; field lengths and precisions are guesses.
 *
 * @category PGN_127495
 */
export interface PGN_127495Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_127495
 */
export class PGN_127495 extends PGN implements PGN_127495Interface {
  fields: PGN_127495Fields

  constructor(fields: PGN_127495Fields, dst: number = 255) {
    super(PGN_127495Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['electricEnergyStorageInformation'] = (fields:any, dst:number) => new PGN_127495(fields, dst)


/**
 * PGN: 127496
 *
 * Description: Trip Parameters, Vessel
 *
 * @category PGN_127496
 */
export interface PGN_127496Interface extends PGNInterface {
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
  prio: 5,
  fields: []
}

/**
 * @category PGN_127496
 */
export class PGN_127496 extends PGN implements PGN_127496Interface {
  fields: PGN_127496Fields

  constructor(fields: PGN_127496Fields, dst: number = 255) {
    super(PGN_127496Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['tripParametersVessel'] = (fields:any, dst:number) => new PGN_127496(fields, dst)


/**
 * PGN: 127497
 *
 * Description: Trip Parameters, Engine
 *
 * @category PGN_127497
 */
export interface PGN_127497Interface extends PGNInterface {
  fields: PGN_127497Fields
}

/**
 * @category PGN_127497
 */
export interface PGN_127497Fields {
  instance: enums.EngineInstance | number
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
  prio: 5,
  fields: []
}

/**
 * @category PGN_127497
 */
export class PGN_127497 extends PGN implements PGN_127497Interface {
  fields: PGN_127497Fields

  constructor(fields: PGN_127497Fields, dst: number = 255) {
    super(PGN_127497Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['tripParametersEngine'] = (fields:any, dst:number) => new PGN_127497(fields, dst)


/**
 * PGN: 127498
 *
 * Description: Engine Parameters, Static
 *
 * @category PGN_127498
 */
export interface PGN_127498Interface extends PGNInterface {
  fields: PGN_127498Fields
}

/**
 * @category PGN_127498
 */
export interface PGN_127498Fields {
  instance: enums.EngineInstance | number
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
  prio: 5,
  fields: []
}

/**
 * @category PGN_127498
 */
export class PGN_127498 extends PGN implements PGN_127498Interface {
  fields: PGN_127498Fields

  constructor(fields: PGN_127498Fields, dst: number = 255) {
    super(PGN_127498Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['engineParametersStatic'] = (fields:any, dst:number) => new PGN_127498(fields, dst)


/**
 * PGN: 127500
 *
 * Description: Load Controller Connection State/Control
 *
 * @category PGN_127500
 */
export interface PGN_127500Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_127500
 */
export class PGN_127500 extends PGN implements PGN_127500Interface {
  fields: PGN_127500Fields

  constructor(fields: PGN_127500Fields, dst: number = 255) {
    super(PGN_127500Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['loadControllerConnectionStateControl'] = (fields:any, dst:number) => new PGN_127500(fields, dst)


/**
 * PGN: 127501
 *
 * Description: Binary Switch Bank Status
 *
 * @category PGN_127501
 */
export interface PGN_127501Interface extends PGNInterface {
  fields: PGN_127501Fields
}

/**
 * @category PGN_127501
 */
export interface PGN_127501Fields {
  instance: N2K_Number
  indicator1?: enums.OffOn | number
  indicator2?: enums.OffOn | number
  indicator3?: enums.OffOn | number
  indicator4?: enums.OffOn | number
  indicator5?: enums.OffOn | number
  indicator6?: enums.OffOn | number
  indicator7?: enums.OffOn | number
  indicator8?: enums.OffOn | number
  indicator9?: enums.OffOn | number
  indicator10?: enums.OffOn | number
  indicator11?: enums.OffOn | number
  indicator12?: enums.OffOn | number
  indicator13?: enums.OffOn | number
  indicator14?: enums.OffOn | number
  indicator15?: enums.OffOn | number
  indicator16?: enums.OffOn | number
  indicator17?: enums.OffOn | number
  indicator18?: enums.OffOn | number
  indicator19?: enums.OffOn | number
  indicator20?: enums.OffOn | number
  indicator21?: enums.OffOn | number
  indicator22?: enums.OffOn | number
  indicator23?: enums.OffOn | number
  indicator24?: enums.OffOn | number
  indicator25?: enums.OffOn | number
  indicator26?: enums.OffOn | number
  indicator27?: enums.OffOn | number
  indicator28?: enums.OffOn | number
}

/**
 * @category PGN_127501
 */
export const PGN_127501Defaults = {
  pgn: 127501,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_127501
 */
export class PGN_127501 extends PGN implements PGN_127501Interface {
  fields: PGN_127501Fields

  constructor(fields: PGN_127501Fields, dst: number = 255) {
    super(PGN_127501Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['binarySwitchBankStatus'] = (fields:any, dst:number) => new PGN_127501(fields, dst)


/**
 * PGN: 127502
 *
 * Description: Switch Bank Control
 *
 * @category PGN_127502
 */
export interface PGN_127502Interface extends PGNInterface {
  fields: PGN_127502Fields
}

/**
 * @category PGN_127502
 */
export interface PGN_127502Fields {
  instance: N2K_Number
  switch1?: enums.OffOnControl | number
  switch2?: enums.OffOnControl | number
  switch3?: enums.OffOnControl | number
  switch4?: enums.OffOnControl | number
  switch5?: enums.OffOnControl | number
  switch6?: enums.OffOnControl | number
  switch7?: enums.OffOnControl | number
  switch8?: enums.OffOnControl | number
  switch9?: enums.OffOnControl | number
  switch10?: enums.OffOnControl | number
  switch11?: enums.OffOnControl | number
  switch12?: enums.OffOnControl | number
  switch13?: enums.OffOnControl | number
  switch14?: enums.OffOnControl | number
  switch15?: enums.OffOnControl | number
  switch16?: enums.OffOnControl | number
  switch17?: enums.OffOnControl | number
  switch18?: enums.OffOnControl | number
  switch19?: enums.OffOnControl | number
  switch20?: enums.OffOnControl | number
  switch21?: enums.OffOnControl | number
  switch22?: enums.OffOnControl | number
  switch23?: enums.OffOnControl | number
  switch24?: enums.OffOnControl | number
  switch25?: enums.OffOnControl | number
  switch26?: enums.OffOnControl | number
  switch27?: enums.OffOnControl | number
  switch28?: enums.OffOnControl | number
}

/**
 * @category PGN_127502
 */
export const PGN_127502Defaults = {
  pgn: 127502,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_127502
 */
export class PGN_127502 extends PGN implements PGN_127502Interface {
  fields: PGN_127502Fields

  constructor(fields: PGN_127502Fields, dst: number = 255) {
    super(PGN_127502Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['switchBankControl'] = (fields:any, dst:number) => new PGN_127502(fields, dst)


/**
 * PGN: 127503
 *
 * Description: AC Input Status
 *
 * @category PGN_127503
 */
export interface PGN_127503Interface extends PGNInterface {
  fields: PGN_127503Fields
}

/**
 * @category PGN_127503
 */
export interface PGN_127503Fields {
  instance: N2K_Number
  numberOfLines?: N2K_Number
  list: {
    line?: enums.AcLine | number
    acceptability?: enums.Acceptability | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_127503
 */
export class PGN_127503 extends PGN implements PGN_127503Interface {
  fields: PGN_127503Fields

  constructor(fields: PGN_127503Fields, dst: number = 255) {
    super(PGN_127503Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['acInputStatus'] = (fields:any, dst:number) => new PGN_127503(fields, dst)


/**
 * PGN: 127504
 *
 * Description: AC Output Status
 *
 * @category PGN_127504
 */
export interface PGN_127504Interface extends PGNInterface {
  fields: PGN_127504Fields
}

/**
 * @category PGN_127504
 */
export interface PGN_127504Fields {
  instance: N2K_Number
  numberOfLines?: N2K_Number
  list: {
    line?: enums.Line | number
    waveform?: enums.Waveform | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_127504
 */
export class PGN_127504 extends PGN implements PGN_127504Interface {
  fields: PGN_127504Fields

  constructor(fields: PGN_127504Fields, dst: number = 255) {
    super(PGN_127504Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['acOutputStatus'] = (fields:any, dst:number) => new PGN_127504(fields, dst)


/**
 * PGN: 127505
 *
 * Description: Fluid Level
 *
 * @category PGN_127505
 */
export interface PGN_127505Interface extends PGNInterface {
  fields: PGN_127505Fields
}

/**
 * @category PGN_127505
 */
export interface PGN_127505Fields {
  instance: N2K_Number
  type?: enums.TankType | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_127505
 */
export class PGN_127505 extends PGN implements PGN_127505Interface {
  fields: PGN_127505Fields

  constructor(fields: PGN_127505Fields, dst: number = 255) {
    super(PGN_127505Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['fluidLevel'] = (fields:any, dst:number) => new PGN_127505(fields, dst)


/**
 * PGN: 127506
 *
 * Description: DC Detailed Status
 *
 * @category PGN_127506
 */
export interface PGN_127506Interface extends PGNInterface {
  fields: PGN_127506Fields
}

/**
 * @category PGN_127506
 */
export interface PGN_127506Fields {
  sid?: N2K_Number
  instance: N2K_Number
  dcType: enums.DcSource | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_127506
 */
export class PGN_127506 extends PGN implements PGN_127506Interface {
  fields: PGN_127506Fields

  constructor(fields: PGN_127506Fields, dst: number = 255) {
    super(PGN_127506Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['dcDetailedStatus'] = (fields:any, dst:number) => new PGN_127506(fields, dst)


/**
 * PGN: 127507
 *
 * Description: Charger Status
 *
 * @category PGN_127507
 */
export interface PGN_127507Interface extends PGNInterface {
  fields: PGN_127507Fields
}

/**
 * @category PGN_127507
 */
export interface PGN_127507Fields {
  instance: N2K_Number
  batteryInstance: N2K_Number
  operatingState?: enums.ChargerState | number
  chargeMode?: enums.ChargerMode | number
  enabled?: enums.OffOn | number
  equalizationPending?: enums.OffOn | number
  reserved?: number
  equalizationTimeRemaining?: N2K_Duration
}

/**
 * @category PGN_127507
 */
export const PGN_127507Defaults = {
  pgn: 127507,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_127507
 */
export class PGN_127507 extends PGN implements PGN_127507Interface {
  fields: PGN_127507Fields

  constructor(fields: PGN_127507Fields, dst: number = 255) {
    super(PGN_127507Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['chargerStatus'] = (fields:any, dst:number) => new PGN_127507(fields, dst)


/**
 * PGN: 127508
 *
 * Description: Battery Status
 *
 * @category PGN_127508
 */
export interface PGN_127508Interface extends PGNInterface {
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_127508
 */
export class PGN_127508 extends PGN implements PGN_127508Interface {
  fields: PGN_127508Fields

  constructor(fields: PGN_127508Fields, dst: number = 255) {
    super(PGN_127508Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['batteryStatus'] = (fields:any, dst:number) => new PGN_127508(fields, dst)


/**
 * PGN: 127509
 *
 * Description: Inverter Status
 *
 * Explanation: The NMEA wrote in the link in the URL that this PGN is obsolete and superceded by PGN 127751, but that PGN reference is obviously incorrect. They probably meant PGN 127511. The other interesting thing is that this PGN is only four bytes long but still referenced as a Fast PGN, which matches various sources; see github issue #428.
 *
 * @category PGN_127509
 */
export interface PGN_127509Interface extends PGNInterface {
  fields: PGN_127509Fields
}

/**
 * @category PGN_127509
 */
export interface PGN_127509Fields {
  instance: N2K_Number
  acInstance: N2K_Number
  dcInstance: N2K_Number
  operatingState?: enums.InverterState | number
  inverterEnable?: enums.OffOn | number
  reserved?: number
}

/**
 * @category PGN_127509
 */
export const PGN_127509Defaults = {
  pgn: 127509,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_127509
 */
export class PGN_127509 extends PGN implements PGN_127509Interface {
  fields: PGN_127509Fields

  constructor(fields: PGN_127509Fields, dst: number = 255) {
    super(PGN_127509Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['inverterStatus'] = (fields:any, dst:number) => new PGN_127509(fields, dst)


/**
 * PGN: 127510
 *
 * Description: Charger Configuration Status
 *
 * @category PGN_127510
 */
export interface PGN_127510Interface extends PGNInterface {
  fields: PGN_127510Fields
}

/**
 * @category PGN_127510
 */
export interface PGN_127510Fields {
  instance: N2K_Number
  batteryInstance: N2K_Number
  chargerEnableDisable?: enums.OffOn | number
  reserved?: number
  chargeCurrentLimit?: N2K_Number
  chargingAlgorithm?: enums.ChargingAlgorithm | number
  chargerMode?: enums.ChargerMode | number
  estimatedTemperature?: enums.DeviceTempState | number
  equalizeOneTimeEnableDisable?: enums.OffOn | number
  overChargeEnableDisable?: enums.OffOn | number
  equalizeTime?: N2K_Duration
}

/**
 * @category PGN_127510
 */
export const PGN_127510Defaults = {
  pgn: 127510,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_127510
 */
export class PGN_127510 extends PGN implements PGN_127510Interface {
  fields: PGN_127510Fields

  constructor(fields: PGN_127510Fields, dst: number = 255) {
    super(PGN_127510Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['chargerConfigurationStatus'] = (fields:any, dst:number) => new PGN_127510(fields, dst)


/**
 * PGN: 127511
 *
 * Description: Inverter Configuration Status
 *
 * @category PGN_127511
 */
export interface PGN_127511Interface extends PGNInterface {
  fields: PGN_127511Fields
}

/**
 * @category PGN_127511
 */
export interface PGN_127511Fields {
  instance: N2K_Number
  acInstance: N2K_Number
  dcInstance: N2K_Number
  inverterEnableDisable?: enums.OffOn | number
  inverterMode?: enums.InverterMode | number
  loadSenseEnableDisable?: enums.OffOn | number
  loadSensePowerThreshold?: N2K_Number
  loadSenseInterval?: N2K_Duration
}

/**
 * @category PGN_127511
 */
export const PGN_127511Defaults = {
  pgn: 127511,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_127511
 */
export class PGN_127511 extends PGN implements PGN_127511Interface {
  fields: PGN_127511Fields

  constructor(fields: PGN_127511Fields, dst: number = 255) {
    super(PGN_127511Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['inverterConfigurationStatus'] = (fields:any, dst:number) => new PGN_127511(fields, dst)


/**
 * PGN: 127512
 *
 * Description: AGS Configuration Status
 *
 * @category PGN_127512
 */
export interface PGN_127512Interface extends PGNInterface {
  fields: PGN_127512Fields
}

/**
 * @category PGN_127512
 */
export interface PGN_127512Fields {
  instance: N2K_Number
  generatorInstance: N2K_Number
  agsMode?: enums.AgsMode | number
  reserved?: number
}

/**
 * @category PGN_127512
 */
export const PGN_127512Defaults = {
  pgn: 127512,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_127512
 */
export class PGN_127512 extends PGN implements PGN_127512Interface {
  fields: PGN_127512Fields

  constructor(fields: PGN_127512Fields, dst: number = 255) {
    super(PGN_127512Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['agsConfigurationStatus'] = (fields:any, dst:number) => new PGN_127512(fields, dst)


/**
 * PGN: 127513
 *
 * Description: Battery Configuration Status
 *
 * @category PGN_127513
 */
export interface PGN_127513Interface extends PGNInterface {
  fields: PGN_127513Fields
}

/**
 * @category PGN_127513
 */
export interface PGN_127513Fields {
  instance: N2K_Number
  batteryType?: enums.BatteryType | number
  supportsEqualization?: enums.YesNo | number
  reserved?: number
  nominalVoltage?: enums.BatteryVoltage | number
  chemistry?: enums.BatteryChemistry | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_127513
 */
export class PGN_127513 extends PGN implements PGN_127513Interface {
  fields: PGN_127513Fields

  constructor(fields: PGN_127513Fields, dst: number = 255) {
    super(PGN_127513Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['batteryConfigurationStatus'] = (fields:any, dst:number) => new PGN_127513(fields, dst)


/**
 * PGN: 127514
 *
 * Description: AGS Status
 *
 * @category PGN_127514
 */
export interface PGN_127514Interface extends PGNInterface {
  fields: PGN_127514Fields
}

/**
 * @category PGN_127514
 */
export interface PGN_127514Fields {
  instance: N2K_Number
  generatorInstance: N2K_Number
  agsOperatingState?: enums.AgsOperatingState | number
  generatorState?: enums.AgsGeneratingState | number
  generatorOnReason?: enums.AgsOnReason | number
  generatorOffReason?: enums.AgsOffReason | number
}

/**
 * @category PGN_127514
 */
export const PGN_127514Defaults = {
  pgn: 127514,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_127514
 */
export class PGN_127514 extends PGN implements PGN_127514Interface {
  fields: PGN_127514Fields

  constructor(fields: PGN_127514Fields, dst: number = 255) {
    super(PGN_127514Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['agsStatus'] = (fields:any, dst:number) => new PGN_127514(fields, dst)


/**
 * PGN: 127744
 *
 * Description: AC Power / Current - Phase A
 *
 * @category PGN_127744
 */
export interface PGN_127744Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_127744
 */
export class PGN_127744 extends PGN implements PGN_127744Interface {
  fields: PGN_127744Fields

  constructor(fields: PGN_127744Fields, dst: number = 255) {
    super(PGN_127744Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['acPowerCurrentPhaseA'] = (fields:any, dst:number) => new PGN_127744(fields, dst)


/**
 * PGN: 127745
 *
 * Description: AC Power / Current - Phase B
 *
 * @category PGN_127745
 */
export interface PGN_127745Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_127745
 */
export class PGN_127745 extends PGN implements PGN_127745Interface {
  fields: PGN_127745Fields

  constructor(fields: PGN_127745Fields, dst: number = 255) {
    super(PGN_127745Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['acPowerCurrentPhaseB'] = (fields:any, dst:number) => new PGN_127745(fields, dst)


/**
 * PGN: 127746
 *
 * Description: AC Power / Current - Phase C
 *
 * @category PGN_127746
 */
export interface PGN_127746Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_127746
 */
export class PGN_127746 extends PGN implements PGN_127746Interface {
  fields: PGN_127746Fields

  constructor(fields: PGN_127746Fields, dst: number = 255) {
    super(PGN_127746Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['acPowerCurrentPhaseC'] = (fields:any, dst:number) => new PGN_127746(fields, dst)


/**
 * PGN: 127747
 *
 * Description: AC Voltage / Frequency - Phase A
 *
 * @category PGN_127747
 */
export interface PGN_127747Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_127747
 */
export class PGN_127747 extends PGN implements PGN_127747Interface {
  fields: PGN_127747Fields

  constructor(fields: PGN_127747Fields, dst: number = 255) {
    super(PGN_127747Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['acVoltageFrequencyPhaseA'] = (fields:any, dst:number) => new PGN_127747(fields, dst)


/**
 * PGN: 127748
 *
 * Description: AC Voltage / Frequency - Phase B
 *
 * @category PGN_127748
 */
export interface PGN_127748Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_127748
 */
export class PGN_127748 extends PGN implements PGN_127748Interface {
  fields: PGN_127748Fields

  constructor(fields: PGN_127748Fields, dst: number = 255) {
    super(PGN_127748Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['acVoltageFrequencyPhaseB'] = (fields:any, dst:number) => new PGN_127748(fields, dst)


/**
 * PGN: 127749
 *
 * Description: AC Voltage / Frequency - Phase C
 *
 * @category PGN_127749
 */
export interface PGN_127749Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_127749
 */
export class PGN_127749 extends PGN implements PGN_127749Interface {
  fields: PGN_127749Fields

  constructor(fields: PGN_127749Fields, dst: number = 255) {
    super(PGN_127749Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['acVoltageFrequencyPhaseC'] = (fields:any, dst:number) => new PGN_127749(fields, dst)


/**
 * PGN: 127750
 *
 * Description: Converter Status
 *
 * @category PGN_127750
 */
export interface PGN_127750Interface extends PGNInterface {
  fields: PGN_127750Fields
}

/**
 * @category PGN_127750
 */
export interface PGN_127750Fields {
  sid?: N2K_Binary
  connectionNumber?: N2K_Number
  operatingState?: enums.ConverterState | number
  temperatureState?: enums.GoodWarningError | number
  overloadState?: enums.GoodWarningError | number
  lowDcVoltageState?: enums.GoodWarningError | number
  rippleState?: enums.GoodWarningError | number
  reserved?: number
}

/**
 * @category PGN_127750
 */
export const PGN_127750Defaults = {
  pgn: 127750,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_127750
 */
export class PGN_127750 extends PGN implements PGN_127750Interface {
  fields: PGN_127750Fields

  constructor(fields: PGN_127750Fields, dst: number = 255) {
    super(PGN_127750Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['converterStatus'] = (fields:any, dst:number) => new PGN_127750(fields, dst)


/**
 * PGN: 127751
 *
 * Description: DC Voltage/Current
 *
 * @category PGN_127751
 */
export interface PGN_127751Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_127751
 */
export class PGN_127751 extends PGN implements PGN_127751Interface {
  fields: PGN_127751Fields

  constructor(fields: PGN_127751Fields, dst: number = 255) {
    super(PGN_127751Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['dcVoltageCurrent'] = (fields:any, dst:number) => new PGN_127751(fields, dst)


/**
 * PGN: 128000
 *
 * Description: Leeway Angle
 *
 * Explanation: This PGN provides the Nautical Leeway Angle. Nautical leeway angle is defined as the angle between the direction a vessel is heading (pointing) and the direction it is actually travelling (tracking thru the water). It is commonly provided by dual-axis speed sensors.
 *
 * @category PGN_128000
 */
export interface PGN_128000Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_128000
 */
export class PGN_128000 extends PGN implements PGN_128000Interface {
  fields: PGN_128000Fields

  constructor(fields: PGN_128000Fields, dst: number = 255) {
    super(PGN_128000Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['leewayAngle'] = (fields:any, dst:number) => new PGN_128000(fields, dst)


/**
 * PGN: 128001
 *
 * Description: Vessel Acceleration
 *
 * Explanation: The Vessel Acceleration PGN transmits the acceleration of the vessel in all three axes, ahead/astern, port/starboard, and up/down.
 *
 * @category PGN_128001
 */
export interface PGN_128001Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_128001
 */
export class PGN_128001 extends PGN implements PGN_128001Interface {
  fields: PGN_128001Fields

  constructor(fields: PGN_128001Fields, dst: number = 255) {
    super(PGN_128001Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['vesselAcceleration'] = (fields:any, dst:number) => new PGN_128001(fields, dst)


/**
 * PGN: 128002
 *
 * Description: Electric Drive Status, Rapid Update
 *
 * Explanation: This PGN is used to provide the Electric Propulsion Drive System Status.
 *
 * @category PGN_128002
 */
export interface PGN_128002Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_128002
 */
export class PGN_128002 extends PGN implements PGN_128002Interface {
  fields: PGN_128002Fields

  constructor(fields: PGN_128002Fields, dst: number = 255) {
    super(PGN_128002Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['electricDriveStatusRapidUpdate'] = (fields:any, dst:number) => new PGN_128002(fields, dst)


/**
 * PGN: 128003
 *
 * Description: Electric Energy Storage Status, Rapid Update
 *
 * Explanation: Electric Energy Storage Status message provides important energy storage information global at a rapid update rate.
 *
 * @category PGN_128003
 */
export interface PGN_128003Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_128003
 */
export class PGN_128003 extends PGN implements PGN_128003Interface {
  fields: PGN_128003Fields

  constructor(fields: PGN_128003Fields, dst: number = 255) {
    super(PGN_128003Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['electricEnergyStorageStatusRapidUpdate'] = (fields:any, dst:number) => new PGN_128003(fields, dst)


/**
 * PGN: 128006
 *
 * Description: Thruster Control Status
 *
 * @category PGN_128006
 */
export interface PGN_128006Interface extends PGNInterface {
  fields: PGN_128006Fields
}

/**
 * @category PGN_128006
 */
export interface PGN_128006Fields {
  sid?: N2K_Number
  identifier?: N2K_Number
  directionControl?: enums.ThrusterDirectionControl | number
  powerEnabled?: enums.OffOn | number
  retractControl?: enums.ThrusterRetractControl | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_128006
 */
export class PGN_128006 extends PGN implements PGN_128006Interface {
  fields: PGN_128006Fields

  constructor(fields: PGN_128006Fields, dst: number = 255) {
    super(PGN_128006Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['thrusterControlStatus'] = (fields:any, dst:number) => new PGN_128006(fields, dst)


/**
 * PGN: 128007
 *
 * Description: Thruster Information
 *
 * @category PGN_128007
 */
export interface PGN_128007Interface extends PGNInterface {
  fields: PGN_128007Fields
}

/**
 * @category PGN_128007
 */
export interface PGN_128007Fields {
  identifier?: N2K_Number
  motorType?: enums.ThrusterMotorType | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_128007
 */
export class PGN_128007 extends PGN implements PGN_128007Interface {
  fields: PGN_128007Fields

  constructor(fields: PGN_128007Fields, dst: number = 255) {
    super(PGN_128007Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['thrusterInformation'] = (fields:any, dst:number) => new PGN_128007(fields, dst)


/**
 * PGN: 128008
 *
 * Description: Thruster Motor Status
 *
 * @category PGN_128008
 */
export interface PGN_128008Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_128008
 */
export class PGN_128008 extends PGN implements PGN_128008Interface {
  fields: PGN_128008Fields

  constructor(fields: PGN_128008Fields, dst: number = 255) {
    super(PGN_128008Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['thrusterMotorStatus'] = (fields:any, dst:number) => new PGN_128008(fields, dst)


/**
 * PGN: 128259
 *
 * Description: Speed
 *
 * @category PGN_128259
 */
export interface PGN_128259Interface extends PGNInterface {
  fields: PGN_128259Fields
}

/**
 * @category PGN_128259
 */
export interface PGN_128259Fields {
  sid?: N2K_Number
  speedWaterReferenced?: N2K_Number
  speedGroundReferenced?: N2K_Number
  speedWaterReferencedType?: enums.WaterReference | number
  speedDirection?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_128259
 */
export const PGN_128259Defaults = {
  pgn: 128259,
  dst: 255,
  prio: 2,
  fields: []
}

/**
 * @category PGN_128259
 */
export class PGN_128259 extends PGN implements PGN_128259Interface {
  fields: PGN_128259Fields

  constructor(fields: PGN_128259Fields, dst: number = 255) {
    super(PGN_128259Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['speed'] = (fields:any, dst:number) => new PGN_128259(fields, dst)


/**
 * PGN: 128267
 *
 * Description: Water Depth
 *
 * @category PGN_128267
 */
export interface PGN_128267Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_128267
 */
export class PGN_128267 extends PGN implements PGN_128267Interface {
  fields: PGN_128267Fields

  constructor(fields: PGN_128267Fields, dst: number = 255) {
    super(PGN_128267Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['waterDepth'] = (fields:any, dst:number) => new PGN_128267(fields, dst)


/**
 * PGN: 128275
 *
 * Description: Distance Log
 *
 * @category PGN_128275
 */
export interface PGN_128275Interface extends PGNInterface {
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_128275
 */
export class PGN_128275 extends PGN implements PGN_128275Interface {
  fields: PGN_128275Fields

  constructor(fields: PGN_128275Fields, dst: number = 255) {
    super(PGN_128275Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['distanceLog'] = (fields:any, dst:number) => new PGN_128275(fields, dst)


/**
 * PGN: 128520
 *
 * Description: Tracked Target Data
 *
 * @category PGN_128520
 */
export interface PGN_128520Interface extends PGNInterface {
  fields: PGN_128520Fields
}

/**
 * @category PGN_128520
 */
export interface PGN_128520Fields {
  sid?: N2K_Number
  targetId?: N2K_Number
  trackStatus?: enums.Tracking[]
  reportedTarget: enums.YesNo | number
  targetAcquisition: enums.TargetAcquisition | number
  bearingReference?: enums.DirectionReference | number
  reserved?: number
  bearing?: N2K_Number
  distance?: N2K_Number
  course?: N2K_Number
  speed?: N2K_Number
  cpa?: N2K_Number
  tcpa?: N2K_Duration
  utcOfFix?: N2K_Time
  name?: N2K_StringLau
  referenceTarget?: enums.YesNo | number
  reserved17?: number
}

/**
 * @category PGN_128520
 */
export const PGN_128520Defaults = {
  pgn: 128520,
  dst: 255,
  prio: 2,
  fields: []
}

/**
 * @category PGN_128520
 */
export class PGN_128520 extends PGN implements PGN_128520Interface {
  fields: PGN_128520Fields

  constructor(fields: PGN_128520Fields, dst: number = 255) {
    super(PGN_128520Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['trackedTargetData'] = (fields:any, dst:number) => new PGN_128520(fields, dst)


/**
 * PGN: 128538
 *
 * Description: Elevator Car Status
 *
 * Explanation: This PGN provides the status information of an elevator car. This includes the elevator car id and type, sensors for load and weight limits, smoke detection, door status, motor status, and brake status. Also provided are weight and speed measurements, current and destination deck location, proximity switch status, inertial measurement unit status and Emergency button and buzzer status.
 *
 * @category PGN_128538
 */
export interface PGN_128538Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_128538
 */
export class PGN_128538 extends PGN implements PGN_128538Interface {
  fields: PGN_128538Fields

  constructor(fields: PGN_128538Fields, dst: number = 255) {
    super(PGN_128538Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['elevatorCarStatus'] = (fields:any, dst:number) => new PGN_128538(fields, dst)


/**
 * PGN: 128768
 *
 * Description: Elevator Motor Control
 *
 * Explanation: This PGN provides the status of an elevator motor controller. Settings of the elevator motor controller may be changed using the NMEA Command Group Function.
 *
 * @category PGN_128768
 */
export interface PGN_128768Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_128768
 */
export class PGN_128768 extends PGN implements PGN_128768Interface {
  fields: PGN_128768Fields

  constructor(fields: PGN_128768Fields, dst: number = 255) {
    super(PGN_128768Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['elevatorMotorControl'] = (fields:any, dst:number) => new PGN_128768(fields, dst)


/**
 * PGN: 128769
 *
 * Description: Elevator Deck Push Button
 *
 * Explanation: Transmit data of Deck controller to Elevator Main controller.
 *
 * @category PGN_128769
 */
export interface PGN_128769Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_128769
 */
export class PGN_128769 extends PGN implements PGN_128769Interface {
  fields: PGN_128769Fields

  constructor(fields: PGN_128769Fields, dst: number = 255) {
    super(PGN_128769Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['elevatorDeckPushButton'] = (fields:any, dst:number) => new PGN_128769(fields, dst)


/**
 * PGN: 128776
 *
 * Description: Windlass Control Status
 *
 * @category PGN_128776
 */
export interface PGN_128776Interface extends PGNInterface {
  fields: PGN_128776Fields
}

/**
 * @category PGN_128776
 */
export interface PGN_128776Fields {
  sid?: N2K_Number
  windlassId?: N2K_Number
  windlassDirectionControl?: enums.WindlassDirection | number
  anchorDockingControl?: enums.OffOn | number
  speedControlType?: enums.SpeedType | number
  reserved?: number
  speedControl?: N2K_Binary
  powerEnable?: enums.OffOn | number
  mechanicalLock?: enums.OffOn | number
  deckAndAnchorWash?: enums.OffOn | number
  anchorLight?: enums.OffOn | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_128776
 */
export class PGN_128776 extends PGN implements PGN_128776Interface {
  fields: PGN_128776Fields

  constructor(fields: PGN_128776Fields, dst: number = 255) {
    super(PGN_128776Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['windlassControlStatus'] = (fields:any, dst:number) => new PGN_128776(fields, dst)


/**
 * PGN: 128777
 *
 * Description: Anchor Windlass Operating Status
 *
 * @category PGN_128777
 */
export interface PGN_128777Interface extends PGNInterface {
  fields: PGN_128777Fields
}

/**
 * @category PGN_128777
 */
export interface PGN_128777Fields {
  sid?: N2K_Number
  windlassId?: N2K_Number
  windlassDirectionControl?: enums.WindlassDirection | number
  windlassMotionStatus?: enums.WindlassMotion | number
  rodeTypeStatus?: enums.RodeType | number
  reserved?: number
  rodeCounterValue?: N2K_Number
  windlassLineSpeed?: N2K_Number
  anchorDockingStatus?: enums.DockingStatus | number
  windlassOperatingEvents?: enums.WindlassOperation[]
}

/**
 * @category PGN_128777
 */
export const PGN_128777Defaults = {
  pgn: 128777,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_128777
 */
export class PGN_128777 extends PGN implements PGN_128777Interface {
  fields: PGN_128777Fields

  constructor(fields: PGN_128777Fields, dst: number = 255) {
    super(PGN_128777Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['anchorWindlassOperatingStatus'] = (fields:any, dst:number) => new PGN_128777(fields, dst)


/**
 * PGN: 128778
 *
 * Description: Anchor Windlass Monitoring Status
 *
 * @category PGN_128778
 */
export interface PGN_128778Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_128778
 */
export class PGN_128778 extends PGN implements PGN_128778Interface {
  fields: PGN_128778Fields

  constructor(fields: PGN_128778Fields, dst: number = 255) {
    super(PGN_128778Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['anchorWindlassMonitoringStatus'] = (fields:any, dst:number) => new PGN_128778(fields, dst)


/**
 * PGN: 128780
 *
 * Description: Linear Actuator Control/Status
 *
 * Explanation: Actuator is a broad description of any device that embodies moving an object between two fixed limits, such as raising or lowering an outboard engine assembly. In the context of this PGN, the word "Device" refers to the object being moved. In the case of multiple Actuators per controller, the Actuator Identifier field specifies which Actuator the PGN message is intended for, and all following data fields refer only to that Actuator. This PGN supports manufacturer calibrated systems and retrofit systems where it is impractical for the installer to enter the Maximum Travel distance of the device.
 *
 * @category PGN_128780
 */
export interface PGN_128780Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_128780
 */
export class PGN_128780 extends PGN implements PGN_128780Interface {
  fields: PGN_128780Fields

  constructor(fields: PGN_128780Fields, dst: number = 255) {
    super(PGN_128780Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['linearActuatorControlStatus'] = (fields:any, dst:number) => new PGN_128780(fields, dst)


/**
 * PGN: 129025
 *
 * Description: Position, Rapid Update
 *
 * @category PGN_129025
 */
export interface PGN_129025Interface extends PGNInterface {
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
  prio: 2,
  fields: []
}

/**
 * @category PGN_129025
 */
export class PGN_129025 extends PGN implements PGN_129025Interface {
  fields: PGN_129025Fields

  constructor(fields: PGN_129025Fields, dst: number = 255) {
    super(PGN_129025Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['positionRapidUpdate'] = (fields:any, dst:number) => new PGN_129025(fields, dst)


/**
 * PGN: 129026
 *
 * Description: COG & SOG, Rapid Update
 *
 * @category PGN_129026
 */
export interface PGN_129026Interface extends PGNInterface {
  fields: PGN_129026Fields
}

/**
 * @category PGN_129026
 */
export interface PGN_129026Fields {
  sid?: N2K_Number
  cogReference?: enums.DirectionReference | number
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
  prio: 2,
  fields: []
}

/**
 * @category PGN_129026
 */
export class PGN_129026 extends PGN implements PGN_129026Interface {
  fields: PGN_129026Fields

  constructor(fields: PGN_129026Fields, dst: number = 255) {
    super(PGN_129026Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['cogSogRapidUpdate'] = (fields:any, dst:number) => new PGN_129026(fields, dst)


/**
 * PGN: 129027
 *
 * Description: Position Delta, Rapid Update
 *
 * @category PGN_129027
 */
export interface PGN_129027Interface extends PGNInterface {
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
  prio: 2,
  fields: []
}

/**
 * @category PGN_129027
 */
export class PGN_129027 extends PGN implements PGN_129027Interface {
  fields: PGN_129027Fields

  constructor(fields: PGN_129027Fields, dst: number = 255) {
    super(PGN_129027Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['positionDeltaRapidUpdate'] = (fields:any, dst:number) => new PGN_129027(fields, dst)


/**
 * PGN: 129028
 *
 * Description: Altitude Delta, Rapid Update
 *
 * @category PGN_129028
 */
export interface PGN_129028Interface extends PGNInterface {
  fields: PGN_129028Fields
}

/**
 * @category PGN_129028
 */
export interface PGN_129028Fields {
  sid?: N2K_Number
  timeDelta?: N2K_Duration
  gnssQuality?: enums.GnsMethod | number
  direction?: enums.DirectionReference | number
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
  prio: 2,
  fields: []
}

/**
 * @category PGN_129028
 */
export class PGN_129028 extends PGN implements PGN_129028Interface {
  fields: PGN_129028Fields

  constructor(fields: PGN_129028Fields, dst: number = 255) {
    super(PGN_129028Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['altitudeDeltaRapidUpdate'] = (fields:any, dst:number) => new PGN_129028(fields, dst)


/**
 * PGN: 129029
 *
 * Description: GNSS Position Data
 *
 * @category PGN_129029
 */
export interface PGN_129029Interface extends PGNInterface {
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
  gnssType?: enums.Gns | number
  method?: enums.GnsMethod | number
  integrity?: enums.GnsIntegrity | number
  reserved?: number
  numberOfSvs?: N2K_Number
  hdop?: N2K_Number
  pdop?: N2K_Number
  geoidalSeparation?: N2K_Number
  referenceStations?: N2K_Number
  list: {
    referenceStationType?: enums.Gns | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_129029
 */
export class PGN_129029 extends PGN implements PGN_129029Interface {
  fields: PGN_129029Fields

  constructor(fields: PGN_129029Fields, dst: number = 255) {
    super(PGN_129029Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['gnssPositionData'] = (fields:any, dst:number) => new PGN_129029(fields, dst)


/**
 * PGN: 129033
 *
 * Description: Time & Date
 *
 * @category PGN_129033
 */
export interface PGN_129033Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_129033
 */
export class PGN_129033 extends PGN implements PGN_129033Interface {
  fields: PGN_129033Fields

  constructor(fields: PGN_129033Fields, dst: number = 255) {
    super(PGN_129033Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['timeDate'] = (fields:any, dst:number) => new PGN_129033(fields, dst)


/**
 * PGN: 129038
 *
 * Description: AIS Class A Position Report
 *
 * @category PGN_129038
 */
export interface PGN_129038Interface extends PGNInterface {
  fields: PGN_129038Fields
}

/**
 * @category PGN_129038
 */
export interface PGN_129038Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  userId: N2K_Mmsi
  longitude?: N2K_Number
  latitude?: N2K_Number
  positionAccuracy: enums.PositionAccuracy | number
  raim: enums.RaimFlag | number
  timeStamp?: enums.TimeStamp | number
  cog?: N2K_Number
  sog?: N2K_Number
  communicationState?: N2K_Binary
  aisTransceiverInformation?: enums.AisTransceiver | number
  heading?: N2K_Number
  rateOfTurn?: N2K_Number
  navStatus?: enums.NavStatus | number
  specialManeuverIndicator?: enums.AisSpecialManeuver | number
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
  prio: 4,
  fields: []
}

/**
 * @category PGN_129038
 */
export class PGN_129038 extends PGN implements PGN_129038Interface {
  fields: PGN_129038Fields

  constructor(fields: PGN_129038Fields, dst: number = 255) {
    super(PGN_129038Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisClassAPositionReport'] = (fields:any, dst:number) => new PGN_129038(fields, dst)


/**
 * PGN: 129039
 *
 * Description: AIS Class B Position Report
 *
 * @category PGN_129039
 */
export interface PGN_129039Interface extends PGNInterface {
  fields: PGN_129039Fields
}

/**
 * @category PGN_129039
 */
export interface PGN_129039Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  userId: N2K_Mmsi
  longitude?: N2K_Number
  latitude?: N2K_Number
  positionAccuracy: enums.PositionAccuracy | number
  raim: enums.RaimFlag | number
  timeStamp?: enums.TimeStamp | number
  cog?: N2K_Number
  sog?: N2K_Number
  communicationState?: N2K_Binary
  aisTransceiverInformation?: enums.AisTransceiver | number
  heading?: N2K_Number
  regionalApplication?: number
  regionalApplicationB?: number
  unitType: enums.AisType | number
  integratedDisplay: enums.YesNo | number
  dsc: enums.YesNo | number
  band: enums.AisBand | number
  canHandleMsg22: enums.YesNo | number
  aisMode: enums.AisMode | number
  aisCommunicationState: enums.AisCommunicationState | number
  reserved?: number
}

/**
 * @category PGN_129039
 */
export const PGN_129039Defaults = {
  pgn: 129039,
  dst: 255,
  prio: 4,
  fields: []
}

/**
 * @category PGN_129039
 */
export class PGN_129039 extends PGN implements PGN_129039Interface {
  fields: PGN_129039Fields

  constructor(fields: PGN_129039Fields, dst: number = 255) {
    super(PGN_129039Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisClassBPositionReport'] = (fields:any, dst:number) => new PGN_129039(fields, dst)


/**
 * PGN: 129040
 *
 * Description: AIS Class B Extended Position Report
 *
 * @category PGN_129040
 */
export interface PGN_129040Interface extends PGNInterface {
  fields: PGN_129040Fields
}

/**
 * @category PGN_129040
 */
export interface PGN_129040Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  userId: N2K_Mmsi
  longitude?: N2K_Number
  latitude?: N2K_Number
  positionAccuracy: enums.PositionAccuracy | number
  raim: enums.RaimFlag | number
  timeStamp?: enums.TimeStamp | number
  cog?: N2K_Number
  sog?: N2K_Number
  regionalApplication?: number
  regionalApplicationB?: number
  reserved?: number
  typeOfShip?: enums.ShipType | number
  trueHeading?: N2K_Number
  reserved16?: number
  gnssType?: enums.PositionFixDevice | number
  length?: N2K_Number
  beam?: N2K_Number
  positionReferenceFromStarboard?: N2K_Number
  positionReferenceFromBow?: N2K_Number
  name?: N2K_StringFix
  dte: enums.Available | number
  aisMode: enums.AisMode | number
  spare25?: number
  aisTransceiverInformation?: enums.AisTransceiver | number
  reserved27?: number
}

/**
 * @category PGN_129040
 */
export const PGN_129040Defaults = {
  pgn: 129040,
  dst: 255,
  prio: 4,
  fields: []
}

/**
 * @category PGN_129040
 */
export class PGN_129040 extends PGN implements PGN_129040Interface {
  fields: PGN_129040Fields

  constructor(fields: PGN_129040Fields, dst: number = 255) {
    super(PGN_129040Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisClassBExtendedPositionReport'] = (fields:any, dst:number) => new PGN_129040(fields, dst)


/**
 * PGN: 129041
 *
 * Description: AIS Aids to Navigation (AtoN) Report
 *
 * @category PGN_129041
 */
export interface PGN_129041Interface extends PGNInterface {
  fields: PGN_129041Fields
}

/**
 * @category PGN_129041
 */
export interface PGN_129041Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  userId: N2K_Mmsi
  longitude?: N2K_Number
  latitude?: N2K_Number
  positionAccuracy: enums.PositionAccuracy | number
  raim: enums.RaimFlag | number
  timeStamp?: enums.TimeStamp | number
  lengthDiameter?: N2K_Number
  beamDiameter?: N2K_Number
  positionReferenceFromStarboardEdge?: N2K_Number
  positionReferenceFromTrueNorthFacingEdge?: N2K_Number
  atonType?: enums.AtonType | number
  offPositionIndicator: enums.YesNo | number
  virtualAtonFlag: enums.YesNo | number
  assignedModeFlag: enums.AisAssignedMode | number
  spare?: number
  positionFixingDeviceType?: enums.PositionFixDevice | number
  reserved19?: number
  atonStatus?: N2K_Binary
  aisTransceiverInformation?: enums.AisTransceiver | number
  reserved22?: number
  atonName?: N2K_StringLau
}

/**
 * @category PGN_129041
 */
export const PGN_129041Defaults = {
  pgn: 129041,
  dst: 255,
  prio: 4,
  fields: []
}

/**
 * @category PGN_129041
 */
export class PGN_129041 extends PGN implements PGN_129041Interface {
  fields: PGN_129041Fields

  constructor(fields: PGN_129041Fields, dst: number = 255) {
    super(PGN_129041Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisAidsToNavigationAtonReport'] = (fields:any, dst:number) => new PGN_129041(fields, dst)


/**
 * PGN: 129044
 *
 * Description: Datum
 *
 * @category PGN_129044
 */
export interface PGN_129044Interface extends PGNInterface {
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_129044
 */
export class PGN_129044 extends PGN implements PGN_129044Interface {
  fields: PGN_129044Fields

  constructor(fields: PGN_129044Fields, dst: number = 255) {
    super(PGN_129044Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['datum'] = (fields:any, dst:number) => new PGN_129044(fields, dst)


/**
 * PGN: 129045
 *
 * Description: User Datum
 *
 * @category PGN_129045
 */
export interface PGN_129045Interface extends PGNInterface {
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_129045
 */
export class PGN_129045 extends PGN implements PGN_129045Interface {
  fields: PGN_129045Fields

  constructor(fields: PGN_129045Fields, dst: number = 255) {
    super(PGN_129045Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['userDatum'] = (fields:any, dst:number) => new PGN_129045(fields, dst)


/**
 * PGN: 129283
 *
 * Description: Cross Track Error
 *
 * @category PGN_129283
 */
export interface PGN_129283Interface extends PGNInterface {
  fields: PGN_129283Fields
}

/**
 * @category PGN_129283
 */
export interface PGN_129283Fields {
  sid?: N2K_Number
  xteMode?: enums.ResidualMode | number
  reserved?: number
  navigationTerminated?: enums.YesNo | number
  xte?: N2K_Number
  reserved6?: number
}

/**
 * @category PGN_129283
 */
export const PGN_129283Defaults = {
  pgn: 129283,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_129283
 */
export class PGN_129283 extends PGN implements PGN_129283Interface {
  fields: PGN_129283Fields

  constructor(fields: PGN_129283Fields, dst: number = 255) {
    super(PGN_129283Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['crossTrackError'] = (fields:any, dst:number) => new PGN_129283(fields, dst)


/**
 * PGN: 129284
 *
 * Description: Navigation Data
 *
 * @category PGN_129284
 */
export interface PGN_129284Interface extends PGNInterface {
  fields: PGN_129284Fields
}

/**
 * @category PGN_129284
 */
export interface PGN_129284Fields {
  sid?: N2K_Number
  distanceToWaypoint?: N2K_Number
  courseBearingReference?: enums.DirectionReference | number
  perpendicularCrossed?: enums.YesNo | number
  arrivalCircleEntered?: enums.YesNo | number
  calculationType?: enums.BearingMode | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_129284
 */
export class PGN_129284 extends PGN implements PGN_129284Interface {
  fields: PGN_129284Fields

  constructor(fields: PGN_129284Fields, dst: number = 255) {
    super(PGN_129284Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['navigationData'] = (fields:any, dst:number) => new PGN_129284(fields, dst)


/**
 * PGN: 129285
 *
 * Description: Navigation - Route/WP Information
 *
 * @category PGN_129285
 */
export interface PGN_129285Interface extends PGNInterface {
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
  navigationDirectionInRoute?: enums.Direction | number
  supplementaryRouteWpDataAvailable?: enums.OffOn | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_129285
 */
export class PGN_129285 extends PGN implements PGN_129285Interface {
  fields: PGN_129285Fields

  constructor(fields: PGN_129285Fields, dst: number = 255) {
    super(PGN_129285Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['navigationRouteWpInformation'] = (fields:any, dst:number) => new PGN_129285(fields, dst)


/**
 * PGN: 129291
 *
 * Description: Set & Drift, Rapid Update
 *
 * @category PGN_129291
 */
export interface PGN_129291Interface extends PGNInterface {
  fields: PGN_129291Fields
}

/**
 * @category PGN_129291
 */
export interface PGN_129291Fields {
  sid?: N2K_Number
  setReference?: enums.DirectionReference | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_129291
 */
export class PGN_129291 extends PGN implements PGN_129291Interface {
  fields: PGN_129291Fields

  constructor(fields: PGN_129291Fields, dst: number = 255) {
    super(PGN_129291Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['setDriftRapidUpdate'] = (fields:any, dst:number) => new PGN_129291(fields, dst)


/**
 * PGN: 129301
 *
 * Description: Navigation - Route / Time to+from Mark
 *
 * @category PGN_129301
 */
export interface PGN_129301Interface extends PGNInterface {
  fields: PGN_129301Fields
}

/**
 * @category PGN_129301
 */
export interface PGN_129301Fields {
  sid?: N2K_Number
  timeToMark?: N2K_Duration
  markType?: enums.MarkType | number
  reserved?: number
  markId?: N2K_Number
}

/**
 * @category PGN_129301
 */
export const PGN_129301Defaults = {
  pgn: 129301,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_129301
 */
export class PGN_129301 extends PGN implements PGN_129301Interface {
  fields: PGN_129301Fields

  constructor(fields: PGN_129301Fields, dst: number = 255) {
    super(PGN_129301Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['navigationRouteTimeToFromMark'] = (fields:any, dst:number) => new PGN_129301(fields, dst)


/**
 * PGN: 129302
 *
 * Description: Bearing and Distance between two Marks
 *
 * @category PGN_129302
 */
export interface PGN_129302Interface extends PGNInterface {
  fields: PGN_129302Fields
}

/**
 * @category PGN_129302
 */
export interface PGN_129302Fields {
  sid?: N2K_Number
  bearingReference?: enums.DirectionReference | number
  calculationType?: enums.BearingMode | number
  reserved?: number
  bearingOriginToDestination?: N2K_Number
  distance?: N2K_Number
  originMarkType?: enums.MarkType | number
  destinationMarkType?: enums.MarkType | number
  originMarkId?: N2K_Number
  destinationMarkId?: N2K_Number
}

/**
 * @category PGN_129302
 */
export const PGN_129302Defaults = {
  pgn: 129302,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_129302
 */
export class PGN_129302 extends PGN implements PGN_129302Interface {
  fields: PGN_129302Fields

  constructor(fields: PGN_129302Fields, dst: number = 255) {
    super(PGN_129302Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['bearingAndDistanceBetweenTwoMarks'] = (fields:any, dst:number) => new PGN_129302(fields, dst)


/**
 * PGN: 129538
 *
 * Description: GNSS Control Status
 *
 * @category PGN_129538
 */
export interface PGN_129538Interface extends PGNInterface {
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
  gnssModeDesired?: enums.GnssMode | number
  dgnssModeDesired?: enums.DgnssMode | number
  positionVelocityFilter?: enums.YesNo | number
  maxCorrectionAge?: N2K_Duration
  antennaAltitudeFor2dMode?: N2K_Number
  useAntennaAltitudeFor2dMode?: enums.YesNo | number
  reserved?: number
}

/**
 * @category PGN_129538
 */
export const PGN_129538Defaults = {
  pgn: 129538,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_129538
 */
export class PGN_129538 extends PGN implements PGN_129538Interface {
  fields: PGN_129538Fields

  constructor(fields: PGN_129538Fields, dst: number = 255) {
    super(PGN_129538Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['gnssControlStatus'] = (fields:any, dst:number) => new PGN_129538(fields, dst)


/**
 * PGN: 129539
 *
 * Description: GNSS DOPs
 *
 * @category PGN_129539
 */
export interface PGN_129539Interface extends PGNInterface {
  fields: PGN_129539Fields
}

/**
 * @category PGN_129539
 */
export interface PGN_129539Fields {
  sid?: N2K_Number
  desiredMode?: enums.GnssMode | number
  actualMode?: enums.GnssMode | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_129539
 */
export class PGN_129539 extends PGN implements PGN_129539Interface {
  fields: PGN_129539Fields

  constructor(fields: PGN_129539Fields, dst: number = 255) {
    super(PGN_129539Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['gnssDops'] = (fields:any, dst:number) => new PGN_129539(fields, dst)


/**
 * PGN: 129540
 *
 * Description: GNSS Sats in View
 *
 * @category PGN_129540
 */
export interface PGN_129540Interface extends PGNInterface {
  fields: PGN_129540Fields
}

/**
 * @category PGN_129540
 */
export interface PGN_129540Fields {
  sid?: N2K_Number
  rangeResidualMode?: enums.RangeResidualMode | number
  reserved?: number
  satsInView?: N2K_Number
  list: {
    prn?: N2K_Number
    elevation?: N2K_Number
    azimuth?: N2K_Number
    snr?: N2K_Number
    rangeResiduals?: N2K_Number
    status?: enums.SatelliteStatus | number
    reserved11?: number
  }[]
}

/**
 * @category PGN_129540
 */
export const PGN_129540Defaults = {
  pgn: 129540,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_129540
 */
export class PGN_129540 extends PGN implements PGN_129540Interface {
  fields: PGN_129540Fields

  constructor(fields: PGN_129540Fields, dst: number = 255) {
    super(PGN_129540Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['gnssSatsInView'] = (fields:any, dst:number) => new PGN_129540(fields, dst)


/**
 * PGN: 129541
 *
 * Description: GPS Almanac Data
 *
 * @category PGN_129541
 */
export interface PGN_129541Interface extends PGNInterface {
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_129541
 */
export class PGN_129541 extends PGN implements PGN_129541Interface {
  fields: PGN_129541Fields

  constructor(fields: PGN_129541Fields, dst: number = 255) {
    super(PGN_129541Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['gpsAlmanacData'] = (fields:any, dst:number) => new PGN_129541(fields, dst)


/**
 * PGN: 129542
 *
 * Description: GNSS Pseudorange Noise Statistics
 *
 * @category PGN_129542
 */
export interface PGN_129542Interface extends PGNInterface {
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_129542
 */
export class PGN_129542 extends PGN implements PGN_129542Interface {
  fields: PGN_129542Fields

  constructor(fields: PGN_129542Fields, dst: number = 255) {
    super(PGN_129542Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['gnssPseudorangeNoiseStatistics'] = (fields:any, dst:number) => new PGN_129542(fields, dst)


/**
 * PGN: 129545
 *
 * Description: GNSS RAIM Output
 *
 * @category PGN_129545
 */
export interface PGN_129545Interface extends PGNInterface {
  fields: PGN_129545Fields
}

/**
 * @category PGN_129545
 */
export interface PGN_129545Fields {
  sid?: N2K_Number
  integrityFlag?: enums.GnsIntegrity | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_129545
 */
export class PGN_129545 extends PGN implements PGN_129545Interface {
  fields: PGN_129545Fields

  constructor(fields: PGN_129545Fields, dst: number = 255) {
    super(PGN_129545Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['gnssRaimOutput'] = (fields:any, dst:number) => new PGN_129545(fields, dst)


/**
 * PGN: 129546
 *
 * Description: GNSS RAIM Settings
 *
 * @category PGN_129546
 */
export interface PGN_129546Interface extends PGNInterface {
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_129546
 */
export class PGN_129546 extends PGN implements PGN_129546Interface {
  fields: PGN_129546Fields

  constructor(fields: PGN_129546Fields, dst: number = 255) {
    super(PGN_129546Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['gnssRaimSettings'] = (fields:any, dst:number) => new PGN_129546(fields, dst)


/**
 * PGN: 129547
 *
 * Description: GNSS Pseudorange Error Statistics
 *
 * @category PGN_129547
 */
export interface PGN_129547Interface extends PGNInterface {
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_129547
 */
export class PGN_129547 extends PGN implements PGN_129547Interface {
  fields: PGN_129547Fields

  constructor(fields: PGN_129547Fields, dst: number = 255) {
    super(PGN_129547Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['gnssPseudorangeErrorStatistics'] = (fields:any, dst:number) => new PGN_129547(fields, dst)


/**
 * PGN: 129549
 *
 * Description: DGNSS Corrections
 *
 * @category PGN_129549
 */
export interface PGN_129549Interface extends PGNInterface {
  fields: PGN_129549Fields
}

/**
 * @category PGN_129549
 */
export interface PGN_129549Fields {
  sid?: N2K_Number
  referenceStationId?: N2K_Number
  referenceStationType?: enums.Gns | number
  timeOfCorrections?: N2K_Duration
  stationHealth?: enums.StationHealth | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_129549
 */
export class PGN_129549 extends PGN implements PGN_129549Interface {
  fields: PGN_129549Fields

  constructor(fields: PGN_129549Fields, dst: number = 255) {
    super(PGN_129549Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['dgnssCorrections'] = (fields:any, dst:number) => new PGN_129549(fields, dst)


/**
 * PGN: 129550
 *
 * Description: GNSS Differential Correction Receiver Interface
 *
 * @category PGN_129550
 */
export interface PGN_129550Interface extends PGNInterface {
  fields: PGN_129550Fields
}

/**
 * @category PGN_129550
 */
export interface PGN_129550Fields {
  channel?: N2K_Number
  frequency?: N2K_Number
  serialInterfaceBitRate?: enums.SerialBitRate | number
  serialInterfaceDetectionMode?: enums.SerialDetectionMode | number
  differentialSource?: enums.DifferentialSource | number
  differentialOperationMode?: enums.DifferentialMode | number
  reserved?: number
}

/**
 * @category PGN_129550
 */
export const PGN_129550Defaults = {
  pgn: 129550,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_129550
 */
export class PGN_129550 extends PGN implements PGN_129550Interface {
  fields: PGN_129550Fields

  constructor(fields: PGN_129550Fields, dst: number = 255) {
    super(PGN_129550Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['gnssDifferentialCorrectionReceiverInterface'] = (fields:any, dst:number) => new PGN_129550(fields, dst)


/**
 * PGN: 129551
 *
 * Description: GNSS Differential Correction Receiver Signal
 *
 * @category PGN_129551
 */
export interface PGN_129551Interface extends PGNInterface {
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
  stationType?: enums.Gns | number
  referenceStationId?: N2K_Number
  differentialSignalBitRate?: enums.SerialBitRate | number
  differentialSignalDetectionMode?: enums.SerialDetectionMode | number
  usedAsCorrectionSource?: enums.YesNo | number
  reserved?: number
  differentialSource?: enums.DifferentialSource | number
  timeSinceLastSatDifferentialSync?: N2K_Duration
  satelliteServiceIdNo?: N2K_Number
}

/**
 * @category PGN_129551
 */
export const PGN_129551Defaults = {
  pgn: 129551,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_129551
 */
export class PGN_129551 extends PGN implements PGN_129551Interface {
  fields: PGN_129551Fields

  constructor(fields: PGN_129551Fields, dst: number = 255) {
    super(PGN_129551Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['gnssDifferentialCorrectionReceiverSignal'] = (fields:any, dst:number) => new PGN_129551(fields, dst)


/**
 * PGN: 129556
 *
 * Description: GLONASS Almanac Data
 *
 * Explanation: Almanac data for GLONASS products. The alamant contains satellite vehicle course orbital parameters. These parameters are described in the GLONASS ICS Section 4.5 Table 4.3. See URL.
 *
 * @category PGN_129556
 */
export interface PGN_129556Interface extends PGNInterface {
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_129556
 */
export class PGN_129556 extends PGN implements PGN_129556Interface {
  fields: PGN_129556Fields

  constructor(fields: PGN_129556Fields, dst: number = 255) {
    super(PGN_129556Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['glonassAlmanacData'] = (fields:any, dst:number) => new PGN_129556(fields, dst)


/**
 * PGN: 129792
 *
 * Description: AIS DGNSS Broadcast Binary Message
 *
 * @category PGN_129792
 */
export interface PGN_129792Interface extends PGNInterface {
  fields: PGN_129792Fields
}

/**
 * @category PGN_129792
 */
export interface PGN_129792Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: N2K_Number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_129792
 */
export class PGN_129792 extends PGN implements PGN_129792Interface {
  fields: PGN_129792Fields

  constructor(fields: PGN_129792Fields, dst: number = 255) {
    super(PGN_129792Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisDgnssBroadcastBinaryMessage'] = (fields:any, dst:number) => new PGN_129792(fields, dst)


/**
 * PGN: 129793
 *
 * Description: AIS UTC and Date Report
 *
 * @category PGN_129793
 */
export interface PGN_129793Interface extends PGNInterface {
  fields: PGN_129793Fields
}

/**
 * @category PGN_129793
 */
export interface PGN_129793Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  userId: N2K_Mmsi
  longitude?: N2K_Number
  latitude?: N2K_Number
  positionAccuracy: enums.PositionAccuracy | number
  raim: enums.RaimFlag | number
  reserved?: number
  positionTime?: N2K_Time
  communicationState?: N2K_Binary
  aisTransceiverInformation?: enums.AisTransceiver | number
  positionDate?: N2K_Date
  reserved13?: number
  gnssType?: enums.PositionFixDevice | number
}

/**
 * @category PGN_129793
 */
export const PGN_129793Defaults = {
  pgn: 129793,
  dst: 255,
  prio: 7,
  fields: []
}

/**
 * @category PGN_129793
 */
export class PGN_129793 extends PGN implements PGN_129793Interface {
  fields: PGN_129793Fields

  constructor(fields: PGN_129793Fields, dst: number = 255) {
    super(PGN_129793Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisUtcAndDateReport'] = (fields:any, dst:number) => new PGN_129793(fields, dst)


/**
 * PGN: 129794
 *
 * Description: AIS Class A Static and Voyage Related Data
 *
 * @category PGN_129794
 */
export interface PGN_129794Interface extends PGNInterface {
  fields: PGN_129794Fields
}

/**
 * @category PGN_129794
 */
export interface PGN_129794Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  userId: N2K_Mmsi
  imoNumber?: N2K_Number
  callsign?: N2K_StringFix
  name?: N2K_StringFix
  typeOfShip?: enums.ShipType | number
  length?: N2K_Number
  beam?: N2K_Number
  positionReferenceFromStarboard?: N2K_Number
  positionReferenceFromBow?: N2K_Number
  etaDate?: N2K_Date
  etaTime?: N2K_Time
  draft?: N2K_Number
  destination?: N2K_StringFix
  aisVersionIndicator?: enums.AisVersion | number
  gnssType?: enums.PositionFixDevice | number
  dte: enums.Available | number
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver | number
  reserved21?: number
}

/**
 * @category PGN_129794
 */
export const PGN_129794Defaults = {
  pgn: 129794,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_129794
 */
export class PGN_129794 extends PGN implements PGN_129794Interface {
  fields: PGN_129794Fields

  constructor(fields: PGN_129794Fields, dst: number = 255) {
    super(PGN_129794Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisClassAStaticAndVoyageRelatedData'] = (fields:any, dst:number) => new PGN_129794(fields, dst)


/**
 * PGN: 129795
 *
 * Description: AIS Addressed Binary Message
 *
 * @category PGN_129795
 */
export interface PGN_129795Interface extends PGNInterface {
  fields: PGN_129795Fields
}

/**
 * @category PGN_129795
 */
export interface PGN_129795Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver | number
  sequenceNumber?: N2K_Number
  destinationId: N2K_Mmsi
  reserved8?: number
  retransmitFlag: enums.YesNo | number
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
  prio: 5,
  fields: []
}

/**
 * @category PGN_129795
 */
export class PGN_129795 extends PGN implements PGN_129795Interface {
  fields: PGN_129795Fields

  constructor(fields: PGN_129795Fields, dst: number = 255) {
    super(PGN_129795Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisAddressedBinaryMessage'] = (fields:any, dst:number) => new PGN_129795(fields, dst)


/**
 * PGN: 129796
 *
 * Description: AIS Acknowledge
 *
 * @category PGN_129796
 */
export interface PGN_129796Interface extends PGNInterface {
  fields: PGN_129796Fields
}

/**
 * @category PGN_129796
 */
export interface PGN_129796Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_129796
 */
export class PGN_129796 extends PGN implements PGN_129796Interface {
  fields: PGN_129796Fields

  constructor(fields: PGN_129796Fields, dst: number = 255) {
    super(PGN_129796Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisAcknowledge'] = (fields:any, dst:number) => new PGN_129796(fields, dst)


/**
 * PGN: 129797
 *
 * Description: AIS Binary Broadcast Message
 *
 * @category PGN_129797
 */
export interface PGN_129797Interface extends PGNInterface {
  fields: PGN_129797Fields
}

/**
 * @category PGN_129797
 */
export interface PGN_129797Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  sourceId?: N2K_Number
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver | number
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
  prio: 5,
  fields: []
}

/**
 * @category PGN_129797
 */
export class PGN_129797 extends PGN implements PGN_129797Interface {
  fields: PGN_129797Fields

  constructor(fields: PGN_129797Fields, dst: number = 255) {
    super(PGN_129797Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisBinaryBroadcastMessage'] = (fields:any, dst:number) => new PGN_129797(fields, dst)


/**
 * PGN: 129798
 *
 * Description: AIS SAR Aircraft Position Report
 *
 * @category PGN_129798
 */
export interface PGN_129798Interface extends PGNInterface {
  fields: PGN_129798Fields
}

/**
 * @category PGN_129798
 */
export interface PGN_129798Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  userId: N2K_Mmsi
  longitude?: N2K_Number
  latitude?: N2K_Number
  positionAccuracy: enums.PositionAccuracy | number
  raim: enums.RaimFlag | number
  timeStamp?: enums.TimeStamp | number
  cog?: N2K_Number
  sog?: N2K_Number
  communicationState?: N2K_Binary
  aisTransceiverInformation?: enums.AisTransceiver | number
  altitude?: N2K_Number
  reservedForRegionalApplications?: N2K_Binary
  dte: enums.Available | number
  spare?: number
  reserved17?: number
}

/**
 * @category PGN_129798
 */
export const PGN_129798Defaults = {
  pgn: 129798,
  dst: 255,
  prio: 4,
  fields: []
}

/**
 * @category PGN_129798
 */
export class PGN_129798 extends PGN implements PGN_129798Interface {
  fields: PGN_129798Fields

  constructor(fields: PGN_129798Fields, dst: number = 255) {
    super(PGN_129798Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisSarAircraftPositionReport'] = (fields:any, dst:number) => new PGN_129798(fields, dst)


/**
 * PGN: 129799
 *
 * Description: Radio Frequency/Mode/Power
 *
 * Explanation: The Radio Channel is NOT a numeric field, it has been observed to contain values such as 9000L1-L3 and 9000F1-F3 (indicating private channels as allowed in some countries.)
 *
 * @category PGN_129799
 */
export interface PGN_129799Interface extends PGNInterface {
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
  mode?: enums.TelephoneMode | number
  channelBandwidth?: N2K_Number
}

/**
 * @category PGN_129799
 */
export const PGN_129799Defaults = {
  pgn: 129799,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_129799
 */
export class PGN_129799 extends PGN implements PGN_129799Interface {
  fields: PGN_129799Fields

  constructor(fields: PGN_129799Fields, dst: number = 255) {
    super(PGN_129799Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['radioFrequencyModePower'] = (fields:any, dst:number) => new PGN_129799(fields, dst)


/**
 * PGN: 129800
 *
 * Description: AIS UTC/Date Inquiry
 *
 * @category PGN_129800
 */
export interface PGN_129800Interface extends PGNInterface {
  fields: PGN_129800Fields
}

/**
 * @category PGN_129800
 */
export interface PGN_129800Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver | number
  spare6?: number
  destinationId: N2K_Mmsi
}

/**
 * @category PGN_129800
 */
export const PGN_129800Defaults = {
  pgn: 129800,
  dst: 255,
  prio: 7,
  fields: []
}

/**
 * @category PGN_129800
 */
export class PGN_129800 extends PGN implements PGN_129800Interface {
  fields: PGN_129800Fields

  constructor(fields: PGN_129800Fields, dst: number = 255) {
    super(PGN_129800Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisUtcDateInquiry'] = (fields:any, dst:number) => new PGN_129800(fields, dst)


/**
 * PGN: 129801
 *
 * Description: AIS Addressed Safety Related Message
 *
 * @category PGN_129801
 */
export interface PGN_129801Interface extends PGNInterface {
  fields: PGN_129801Fields
}

/**
 * @category PGN_129801
 */
export interface PGN_129801Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver | number
  sequenceNumber?: N2K_Number
  destinationId: N2K_Mmsi
  reserved8?: number
  retransmitFlag: enums.YesNo | number
  spare10?: number
  safetyRelatedText?: N2K_StringLau
}

/**
 * @category PGN_129801
 */
export const PGN_129801Defaults = {
  pgn: 129801,
  dst: 255,
  prio: 5,
  fields: []
}

/**
 * @category PGN_129801
 */
export class PGN_129801 extends PGN implements PGN_129801Interface {
  fields: PGN_129801Fields

  constructor(fields: PGN_129801Fields, dst: number = 255) {
    super(PGN_129801Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisAddressedSafetyRelatedMessage'] = (fields:any, dst:number) => new PGN_129801(fields, dst)


/**
 * PGN: 129802
 *
 * Description: AIS Safety Related Broadcast Message
 *
 * @category PGN_129802
 */
export interface PGN_129802Interface extends PGNInterface {
  fields: PGN_129802Fields
}

/**
 * @category PGN_129802
 */
export interface PGN_129802Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver | number
  spare6?: number
  safetyRelatedText?: N2K_StringLau
}

/**
 * @category PGN_129802
 */
export const PGN_129802Defaults = {
  pgn: 129802,
  dst: 255,
  prio: 5,
  fields: []
}

/**
 * @category PGN_129802
 */
export class PGN_129802 extends PGN implements PGN_129802Interface {
  fields: PGN_129802Fields

  constructor(fields: PGN_129802Fields, dst: number = 255) {
    super(PGN_129802Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisSafetyRelatedBroadcastMessage'] = (fields:any, dst:number) => new PGN_129802(fields, dst)


/**
 * PGN: 129803
 *
 * Description: AIS Interrogation
 *
 * @category PGN_129803
 */
export interface PGN_129803Interface extends PGNInterface {
  fields: PGN_129803Fields
}

/**
 * @category PGN_129803
 */
export interface PGN_129803Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver | number
  spare6?: number
  destinationId1: N2K_Mmsi
  reserved8?: number
  messageId11?: enums.AisMessageId | number
  slotOffset11?: N2K_Number
  spare11?: number
  messageId12?: enums.AisMessageId | number
  slotOffset12?: N2K_Number
  reserved14?: number
  reserved15?: number
  destinationId2: N2K_Mmsi
  reserved17?: number
  messageId21?: enums.AisMessageId | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_129803
 */
export class PGN_129803 extends PGN implements PGN_129803Interface {
  fields: PGN_129803Fields

  constructor(fields: PGN_129803Fields, dst: number = 255) {
    super(PGN_129803Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisInterrogation'] = (fields:any, dst:number) => new PGN_129803(fields, dst)


/**
 * PGN: 129804
 *
 * Description: AIS Assignment Mode Command
 *
 * @category PGN_129804
 */
export interface PGN_129804Interface extends PGNInterface {
  fields: PGN_129804Fields
}

/**
 * @category PGN_129804
 */
export interface PGN_129804Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_129804
 */
export class PGN_129804 extends PGN implements PGN_129804Interface {
  fields: PGN_129804Fields

  constructor(fields: PGN_129804Fields, dst: number = 255) {
    super(PGN_129804Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisAssignmentModeCommand'] = (fields:any, dst:number) => new PGN_129804(fields, dst)


/**
 * PGN: 129805
 *
 * Description: AIS Data Link Management Message
 *
 * @category PGN_129805
 */
export interface PGN_129805Interface extends PGNInterface {
  fields: PGN_129805Fields
}

/**
 * @category PGN_129805
 */
export interface PGN_129805Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_129805
 */
export class PGN_129805 extends PGN implements PGN_129805Interface {
  fields: PGN_129805Fields

  constructor(fields: PGN_129805Fields, dst: number = 255) {
    super(PGN_129805Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisDataLinkManagementMessage'] = (fields:any, dst:number) => new PGN_129805(fields, dst)


/**
 * PGN: 129806
 *
 * Description: AIS Channel Management
 *
 * @category PGN_129806
 */
export interface PGN_129806Interface extends PGNInterface {
  fields: PGN_129806Fields
}

/**
 * @category PGN_129806
 */
export interface PGN_129806Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  sourceId: N2K_Mmsi
  reserved?: number
  aisTransceiverInformation?: enums.AisTransceiver | number
  spare6?: number
  channelA?: N2K_Number
  channelB?: N2K_Number
  reserved9?: number
  power: enums.PowerMode | number
  txRxMode?: enums.TxRxMode | number
  northEastLongitudeCorner1?: N2K_Number
  northEastLatitudeCorner1?: N2K_Number
  southWestLongitudeCorner2?: N2K_Number
  southWestLatitudeCorner2?: N2K_Number
  reserved16?: number
  addressedOrBroadcastMessageIndicator: enums.BroadcastIndicator | number
  channelABandwidth: enums.Bandwidth | number
  channelBBandwidth: enums.Bandwidth | number
  reserved20?: number
  transitionalZoneSize?: enums.ZoneSize | number
  spare22?: number
  reserved23?: number
}

/**
 * @category PGN_129806
 */
export const PGN_129806Defaults = {
  pgn: 129806,
  dst: 255,
  prio: 7,
  fields: []
}

/**
 * @category PGN_129806
 */
export class PGN_129806 extends PGN implements PGN_129806Interface {
  fields: PGN_129806Fields

  constructor(fields: PGN_129806Fields, dst: number = 255) {
    super(PGN_129806Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisChannelManagement'] = (fields:any, dst:number) => new PGN_129806(fields, dst)


/**
 * PGN: 129807
 *
 * Description: AIS Class B Group Assignment
 *
 * @category PGN_129807
 */
export interface PGN_129807Interface extends PGNInterface {
  fields: PGN_129807Fields
}

/**
 * @category PGN_129807
 */
export interface PGN_129807Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  sourceId: N2K_Mmsi
  spare?: number
  txRxMode?: enums.TxRxMode | number
  reserved6?: number
  northEastLongitudeCorner1?: N2K_Number
  northEastLatitudeCorner1?: N2K_Number
  southWestLongitudeCorner2?: N2K_Number
  southWestLatitudeCorner2?: N2K_Number
  stationType?: enums.StationType | number
  reserved12?: number
  shipAndCargoFilter?: enums.ShipType | number
  spare14?: number
  reserved15?: number
  reportingInterval?: enums.ReportingInterval | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_129807
 */
export class PGN_129807 extends PGN implements PGN_129807Interface {
  fields: PGN_129807Fields

  constructor(fields: PGN_129807Fields, dst: number = 255) {
    super(PGN_129807Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisClassBGroupAssignment'] = (fields:any, dst:number) => new PGN_129807(fields, dst)


/**
 * PGN: 129808
 *
 * Description: DSC Distress Call Information
 *
 * Match: DSC Category == Distress<br>
 *
 * @category PGN_129808_DscDistressCallInformation
 */
export interface PGN_129808_DscDistressCallInformationInterface extends PGNInterface {
  fields: PGN_129808_DscDistressCallInformationFields
}

/**
 * @category PGN_129808_DscDistressCallInformation
 */
export interface PGN_129808_DscDistressCallInformationFields {
  dscFormat?: enums.DscFormat | number
  dscCategory?: enums.DscCategory | number
  dscMessageAddress?: N2K_Decimal
  natureOfDistress?: enums.DscNature | number
  subsequentCommunicationModeOr2ndTelecommand?: enums.DscSecondTelecommand | number
  proposedRxFrequencyChannel?: N2K_StringFix
  proposedTxFrequencyChannel?: N2K_StringFix
  telephoneNumber?: N2K_StringLau
  latitudeOfVesselReported?: N2K_Number
  longitudeOfVesselReported?: N2K_Number
  timeOfPosition?: N2K_Time
  mmsiOfShipInDistress?: N2K_Decimal
  dscEosSymbol?: N2K_Number
  expansionEnabled?: enums.YesNo | number
  reserved?: number
  callingRxFrequencyChannel?: N2K_StringFix
  callingTxFrequencyChannel?: N2K_StringFix
  timeOfReceipt?: N2K_Time
  dateOfReceipt?: N2K_Date
  dscEquipmentAssignedMessageId?: N2K_Number
  list: {
    dscExpansionFieldSymbol?: enums.DscExpansionData | number
    dscExpansionFieldData?: N2K_StringLau
  }[]
}

/**
 * @category PGN_129808_DscDistressCallInformation
 */
export const PGN_129808_DscDistressCallInformationDefaults = {
  pgn: 129808,
  dst: 255,
  prio: 4,
  fields: []
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
  dscFormat?: enums.DscFormat | number
  dscMessageAddress?: N2K_Decimal
  natureOfDistress?: enums.DscNature | number
  subsequentCommunicationModeOr2ndTelecommand?: enums.DscSecondTelecommand | number
  proposedRxFrequencyChannel?: N2K_StringFix
  proposedTxFrequencyChannel?: N2K_StringFix
  telephoneNumber?: N2K_StringLau
  latitudeOfVesselReported?: N2K_Number
  longitudeOfVesselReported?: N2K_Number
  timeOfPosition?: N2K_Time
  mmsiOfShipInDistress?: N2K_Decimal
  dscEosSymbol?: N2K_Number
  expansionEnabled?: enums.YesNo | number
  reserved?: number
  callingRxFrequencyChannel?: N2K_StringFix
  callingTxFrequencyChannel?: N2K_StringFix
  timeOfReceipt?: N2K_Time
  dateOfReceipt?: N2K_Date
  dscEquipmentAssignedMessageId?: N2K_Number
  list: {
    dscExpansionFieldSymbol?: enums.DscExpansionData | number
    dscExpansionFieldData?: N2K_StringLau
  }[]
}

/**
 * @category PGN_129808_DscDistressCallInformation
 */
export class PGN_129808_DscDistressCallInformation extends PGN implements PGN_129808_DscDistressCallInformationInterface {
  fields: PGN_129808_DscDistressCallInformationFields

  constructor(fields: PGN_129808_DscDistressCallInformationCreateArgs, dst: number = 255) {
    super(PGN_129808_DscDistressCallInformationDefaults)
    this.dst = dst
    this.fields = { ...PGN_129808_DscDistressCallInformationMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_129808_DscDistressCallInformationMatchFields)
}
}
pgnIdToClass['dscDistressCallInformation'] = (fields:any, dst:number) => new PGN_129808_DscDistressCallInformation(fields, dst)


/**
 * PGN: 129808
 *
 * Description: DSC Call Information
 *
 *
 * @category PGN_129808
 */
export interface PGN_129808Interface extends PGNInterface {
  fields: PGN_129808Fields
}

/**
 * @category PGN_129808
 */
export interface PGN_129808Fields {
  dscFormatSymbol?: enums.DscFormat | number
  dscCategorySymbol?: enums.DscCategory | number
  dscMessageAddress?: N2K_Decimal
  _1stTelecommand?: enums.DscFirstTelecommand | number
  subsequentCommunicationModeOr2ndTelecommand?: enums.DscSecondTelecommand | number
  proposedRxFrequencyChannel?: N2K_StringFix
  proposedTxFrequencyChannel?: N2K_StringFix
  telephoneNumber?: N2K_StringLau
  latitudeOfVesselReported?: N2K_Number
  longitudeOfVesselReported?: N2K_Number
  timeOfPosition?: N2K_Time
  mmsiOfShipInDistress?: N2K_Decimal
  dscEosSymbol?: N2K_Number
  expansionEnabled?: enums.YesNo | number
  reserved?: number
  callingRxFrequencyChannel?: N2K_StringFix
  callingTxFrequencyChannel?: N2K_StringFix
  timeOfReceipt?: N2K_Time
  dateOfReceipt?: N2K_Date
  dscEquipmentAssignedMessageId?: N2K_Number
  list: {
    dscExpansionFieldSymbol?: enums.DscExpansionData | number
    dscExpansionFieldData?: N2K_StringLau
  }[]
}

/**
 * @category PGN_129808
 */
export const PGN_129808Defaults = {
  pgn: 129808,
  dst: 255,
  prio: 4,
  fields: []
}

/**
 * @category PGN_129808
 */
export class PGN_129808 extends PGN implements PGN_129808Interface {
  fields: PGN_129808Fields

  constructor(fields: PGN_129808Fields, dst: number = 255) {
    super(PGN_129808Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['dscCallInformation'] = (fields:any, dst:number) => new PGN_129808(fields, dst)


/**
 * PGN: 129809
 *
 * Description: AIS Class B static data (msg 24 Part A)
 *
 * @category PGN_129809
 */
export interface PGN_129809Interface extends PGNInterface {
  fields: PGN_129809Fields
}

/**
 * @category PGN_129809
 */
export interface PGN_129809Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  userId: N2K_Mmsi
  name?: N2K_StringFix
  aisTransceiverInformation?: enums.AisTransceiver | number
  reserved?: number
  sequenceId?: N2K_Number
}

/**
 * @category PGN_129809
 */
export const PGN_129809Defaults = {
  pgn: 129809,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_129809
 */
export class PGN_129809 extends PGN implements PGN_129809Interface {
  fields: PGN_129809Fields

  constructor(fields: PGN_129809Fields, dst: number = 255) {
    super(PGN_129809Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisClassBStaticDataMsg24PartA'] = (fields:any, dst:number) => new PGN_129809(fields, dst)


/**
 * PGN: 129810
 *
 * Description: AIS Class B static data (msg 24 Part B)
 *
 * @category PGN_129810
 */
export interface PGN_129810Interface extends PGNInterface {
  fields: PGN_129810Fields
}

/**
 * @category PGN_129810
 */
export interface PGN_129810Fields {
  messageId?: enums.AisMessageId | number
  repeatIndicator?: enums.RepeatIndicator | number
  userId: N2K_Mmsi
  typeOfShip?: enums.ShipType | number
  vendorId?: N2K_StringFix
  callsign?: N2K_StringFix
  length?: N2K_Number
  beam?: N2K_Number
  positionReferenceFromStarboard?: N2K_Number
  positionReferenceFromBow?: N2K_Number
  mothershipUserId: N2K_Mmsi
  reserved?: number
  spare13?: number
  gnssType?: enums.PositionFixDevice | number
  aisTransceiverInformation?: enums.AisTransceiver | number
  reserved16?: number
  sequenceId?: N2K_Number
}

/**
 * @category PGN_129810
 */
export const PGN_129810Defaults = {
  pgn: 129810,
  dst: 255,
  prio: 6,
  fields: []
}

/**
 * @category PGN_129810
 */
export class PGN_129810 extends PGN implements PGN_129810Interface {
  fields: PGN_129810Fields

  constructor(fields: PGN_129810Fields, dst: number = 255) {
    super(PGN_129810Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['aisClassBStaticDataMsg24PartB'] = (fields:any, dst:number) => new PGN_129810(fields, dst)


/**
 * PGN: 130052
 *
 * Description: Loran-C TD Data
 *
 * @category PGN_130052
 */
export interface PGN_130052Interface extends PGNInterface {
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
  mode?: enums.ResidualMode | number
  reserved?: number
}

/**
 * @category PGN_130052
 */
export const PGN_130052Defaults = {
  pgn: 130052,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130052
 */
export class PGN_130052 extends PGN implements PGN_130052Interface {
  fields: PGN_130052Fields

  constructor(fields: PGN_130052Fields, dst: number = 255) {
    super(PGN_130052Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['loranCTdData'] = (fields:any, dst:number) => new PGN_130052(fields, dst)


/**
 * PGN: 130053
 *
 * Description: Loran-C Range Data
 *
 * @category PGN_130053
 */
export interface PGN_130053Interface extends PGNInterface {
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
  mode?: enums.ResidualMode | number
  reserved?: number
}

/**
 * @category PGN_130053
 */
export const PGN_130053Defaults = {
  pgn: 130053,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130053
 */
export class PGN_130053 extends PGN implements PGN_130053Interface {
  fields: PGN_130053Fields

  constructor(fields: PGN_130053Fields, dst: number = 255) {
    super(PGN_130053Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['loranCRangeData'] = (fields:any, dst:number) => new PGN_130053(fields, dst)


/**
 * PGN: 130054
 *
 * Description: Loran-C Signal Data
 *
 * @category PGN_130054
 */
export interface PGN_130054Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130054
 */
export class PGN_130054 extends PGN implements PGN_130054Interface {
  fields: PGN_130054Fields

  constructor(fields: PGN_130054Fields, dst: number = 255) {
    super(PGN_130054Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['loranCSignalData'] = (fields:any, dst:number) => new PGN_130054(fields, dst)


/**
 * PGN: 130060
 *
 * Description: Label
 *
 * @category PGN_130060
 */
export interface PGN_130060Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130060
 */
export class PGN_130060 extends PGN implements PGN_130060Interface {
  fields: PGN_130060Fields

  constructor(fields: PGN_130060Fields, dst: number = 255) {
    super(PGN_130060Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['label'] = (fields:any, dst:number) => new PGN_130060(fields, dst)


/**
 * PGN: 130061
 *
 * Description: Channel Source Configuration
 *
 * @category PGN_130061
 */
export interface PGN_130061Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130061
 */
export class PGN_130061 extends PGN implements PGN_130061Interface {
  fields: PGN_130061Fields

  constructor(fields: PGN_130061Fields, dst: number = 255) {
    super(PGN_130061Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['channelSourceConfiguration'] = (fields:any, dst:number) => new PGN_130061(fields, dst)


/**
 * PGN: 130064
 *
 * Description: Route and WP Service - Database List
 *
 * @category PGN_130064
 */
export interface PGN_130064Interface extends PGNInterface {
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
    wpPositionResolution?: enums.WpPositionResolution | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_130064
 */
export class PGN_130064 extends PGN implements PGN_130064Interface {
  fields: PGN_130064Fields

  constructor(fields: PGN_130064Fields, dst: number = 255) {
    super(PGN_130064Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['routeAndWpServiceDatabaseList'] = (fields:any, dst:number) => new PGN_130064(fields, dst)


/**
 * PGN: 130065
 *
 * Description: Route and WP Service - Route List
 *
 * @category PGN_130065
 */
export interface PGN_130065Interface extends PGNInterface {
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
    wpIdentificationMethod?: enums.WpIdentificationMethod | number
    routeStatus?: enums.WpRouteStatus | number
  }[]
}

/**
 * @category PGN_130065
 */
export const PGN_130065Defaults = {
  pgn: 130065,
  dst: 255,
  prio: 7,
  fields: []
}

/**
 * @category PGN_130065
 */
export class PGN_130065 extends PGN implements PGN_130065Interface {
  fields: PGN_130065Fields

  constructor(fields: PGN_130065Fields, dst: number = 255) {
    super(PGN_130065Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['routeAndWpServiceRouteList'] = (fields:any, dst:number) => new PGN_130065(fields, dst)


/**
 * PGN: 130066
 *
 * Description: Route and WP Service - Route/WP-List Attributes
 *
 * @category PGN_130066
 */
export interface PGN_130066Interface extends PGNInterface {
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
  navigationMethod?: enums.WpNavigationMethod | number
  wpIdentificationMethod?: enums.WpIdentificationMethod | number
  routeStatus?: enums.WpRouteStatus | number
  xteLimitForTheRoute?: N2K_Number
}

/**
 * @category PGN_130066
 */
export const PGN_130066Defaults = {
  pgn: 130066,
  dst: 255,
  prio: 7,
  fields: []
}

/**
 * @category PGN_130066
 */
export class PGN_130066 extends PGN implements PGN_130066Interface {
  fields: PGN_130066Fields

  constructor(fields: PGN_130066Fields, dst: number = 255) {
    super(PGN_130066Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['routeAndWpServiceRouteWpListAttributes'] = (fields:any, dst:number) => new PGN_130066(fields, dst)


/**
 * PGN: 130067
 *
 * Description: Route and WP Service - Route - WP Name & Position
 *
 * @category PGN_130067
 */
export interface PGN_130067Interface extends PGNInterface {
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_130067
 */
export class PGN_130067 extends PGN implements PGN_130067Interface {
  fields: PGN_130067Fields

  constructor(fields: PGN_130067Fields, dst: number = 255) {
    super(PGN_130067Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['routeAndWpServiceRouteWpNamePosition'] = (fields:any, dst:number) => new PGN_130067(fields, dst)


/**
 * PGN: 130068
 *
 * Description: Route and WP Service - Route - WP Name
 *
 * @category PGN_130068
 */
export interface PGN_130068Interface extends PGNInterface {
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_130068
 */
export class PGN_130068 extends PGN implements PGN_130068Interface {
  fields: PGN_130068Fields

  constructor(fields: PGN_130068Fields, dst: number = 255) {
    super(PGN_130068Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['routeAndWpServiceRouteWpName'] = (fields:any, dst:number) => new PGN_130068(fields, dst)


/**
 * PGN: 130069
 *
 * Description: Route and WP Service - XTE Limit & Navigation Method
 *
 * @category PGN_130069
 */
export interface PGN_130069Interface extends PGNInterface {
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
    navMethodInTheLegAfterWp?: enums.WpNavigationMethod | number
    reserved?: number
  }[]
}

/**
 * @category PGN_130069
 */
export const PGN_130069Defaults = {
  pgn: 130069,
  dst: 255,
  prio: 7,
  fields: []
}

/**
 * @category PGN_130069
 */
export class PGN_130069 extends PGN implements PGN_130069Interface {
  fields: PGN_130069Fields

  constructor(fields: PGN_130069Fields, dst: number = 255) {
    super(PGN_130069Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['routeAndWpServiceXteLimitNavigationMethod'] = (fields:any, dst:number) => new PGN_130069(fields, dst)


/**
 * PGN: 130070
 *
 * Description: Route and WP Service - WP Comment
 *
 * @category PGN_130070
 */
export interface PGN_130070Interface extends PGNInterface {
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_130070
 */
export class PGN_130070 extends PGN implements PGN_130070Interface {
  fields: PGN_130070Fields

  constructor(fields: PGN_130070Fields, dst: number = 255) {
    super(PGN_130070Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['routeAndWpServiceWpComment'] = (fields:any, dst:number) => new PGN_130070(fields, dst)


/**
 * PGN: 130071
 *
 * Description: Route and WP Service - Route Comment
 *
 * @category PGN_130071
 */
export interface PGN_130071Interface extends PGNInterface {
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_130071
 */
export class PGN_130071 extends PGN implements PGN_130071Interface {
  fields: PGN_130071Fields

  constructor(fields: PGN_130071Fields, dst: number = 255) {
    super(PGN_130071Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['routeAndWpServiceRouteComment'] = (fields:any, dst:number) => new PGN_130071(fields, dst)


/**
 * PGN: 130072
 *
 * Description: Route and WP Service - Database Comment
 *
 * @category PGN_130072
 */
export interface PGN_130072Interface extends PGNInterface {
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_130072
 */
export class PGN_130072 extends PGN implements PGN_130072Interface {
  fields: PGN_130072Fields

  constructor(fields: PGN_130072Fields, dst: number = 255) {
    super(PGN_130072Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['routeAndWpServiceDatabaseComment'] = (fields:any, dst:number) => new PGN_130072(fields, dst)


/**
 * PGN: 130073
 *
 * Description: Route and WP Service - Radius of Turn
 *
 * @category PGN_130073
 */
export interface PGN_130073Interface extends PGNInterface {
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_130073
 */
export class PGN_130073 extends PGN implements PGN_130073Interface {
  fields: PGN_130073Fields

  constructor(fields: PGN_130073Fields, dst: number = 255) {
    super(PGN_130073Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['routeAndWpServiceRadiusOfTurn'] = (fields:any, dst:number) => new PGN_130073(fields, dst)


/**
 * PGN: 130074
 *
 * Description: Route and WP Service - WP List - WP Name & Position
 *
 * @category PGN_130074
 */
export interface PGN_130074Interface extends PGNInterface {
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_130074
 */
export class PGN_130074 extends PGN implements PGN_130074Interface {
  fields: PGN_130074Fields

  constructor(fields: PGN_130074Fields, dst: number = 255) {
    super(PGN_130074Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['routeAndWpServiceWpListWpNamePosition'] = (fields:any, dst:number) => new PGN_130074(fields, dst)


/**
 * PGN: 130306
 *
 * Description: Wind Data
 *
 * @category PGN_130306
 */
export interface PGN_130306Interface extends PGNInterface {
  fields: PGN_130306Fields
}

/**
 * @category PGN_130306
 */
export interface PGN_130306Fields {
  sid?: N2K_Number
  windSpeed?: N2K_Number
  windAngle?: N2K_Number
  reference: enums.WindReference | number
  reserved?: number
}

/**
 * @category PGN_130306
 */
export const PGN_130306Defaults = {
  pgn: 130306,
  dst: 255,
  prio: 2,
  fields: []
}

/**
 * @category PGN_130306
 */
export class PGN_130306 extends PGN implements PGN_130306Interface {
  fields: PGN_130306Fields

  constructor(fields: PGN_130306Fields, dst: number = 255) {
    super(PGN_130306Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['windData'] = (fields:any, dst:number) => new PGN_130306(fields, dst)


/**
 * PGN: 130310
 *
 * Description: Environmental Parameters (obsolete)
 *
 * Explanation: This PGN was succeeded by PGN 130310, but it should no longer be generated and separate PGNs in range 130312..130315 should be used
 *
 * @category PGN_130310
 */
export interface PGN_130310Interface extends PGNInterface {
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
  prio: 5,
  fields: []
}

/**
 * @category PGN_130310
 */
export class PGN_130310 extends PGN implements PGN_130310Interface {
  fields: PGN_130310Fields

  constructor(fields: PGN_130310Fields, dst: number = 255) {
    super(PGN_130310Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['environmentalParametersObsolete'] = (fields:any, dst:number) => new PGN_130310(fields, dst)


/**
 * PGN: 130311
 *
 * Description: Environmental Parameters
 *
 * Explanation: This PGN was introduced as a better version of PGN 130310, but it should no longer be generated and separate PGNs in range 130312..130315 should be used
 *
 * @category PGN_130311
 */
export interface PGN_130311Interface extends PGNInterface {
  fields: PGN_130311Fields
}

/**
 * @category PGN_130311
 */
export interface PGN_130311Fields {
  sid?: N2K_Number
  temperatureSource: enums.TemperatureSource | number
  humiditySource?: enums.HumiditySource | number
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
  prio: 5,
  fields: []
}

/**
 * @category PGN_130311
 */
export class PGN_130311 extends PGN implements PGN_130311Interface {
  fields: PGN_130311Fields

  constructor(fields: PGN_130311Fields, dst: number = 255) {
    super(PGN_130311Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['environmentalParameters'] = (fields:any, dst:number) => new PGN_130311(fields, dst)


/**
 * PGN: 130312
 *
 * Description: Temperature
 *
 * @category PGN_130312
 */
export interface PGN_130312Interface extends PGNInterface {
  fields: PGN_130312Fields
}

/**
 * @category PGN_130312
 */
export interface PGN_130312Fields {
  sid?: N2K_Number
  instance: N2K_Number
  source: enums.TemperatureSource | number
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
  prio: 5,
  fields: []
}

/**
 * @category PGN_130312
 */
export class PGN_130312 extends PGN implements PGN_130312Interface {
  fields: PGN_130312Fields

  constructor(fields: PGN_130312Fields, dst: number = 255) {
    super(PGN_130312Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['temperature'] = (fields:any, dst:number) => new PGN_130312(fields, dst)


/**
 * PGN: 130313
 *
 * Description: Humidity
 *
 * @category PGN_130313
 */
export interface PGN_130313Interface extends PGNInterface {
  fields: PGN_130313Fields
}

/**
 * @category PGN_130313
 */
export interface PGN_130313Fields {
  sid?: N2K_Number
  instance: N2K_Number
  source: enums.HumiditySource | number
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
  prio: 5,
  fields: []
}

/**
 * @category PGN_130313
 */
export class PGN_130313 extends PGN implements PGN_130313Interface {
  fields: PGN_130313Fields

  constructor(fields: PGN_130313Fields, dst: number = 255) {
    super(PGN_130313Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['humidity'] = (fields:any, dst:number) => new PGN_130313(fields, dst)


/**
 * PGN: 130314
 *
 * Description: Actual Pressure
 *
 * @category PGN_130314
 */
export interface PGN_130314Interface extends PGNInterface {
  fields: PGN_130314Fields
}

/**
 * @category PGN_130314
 */
export interface PGN_130314Fields {
  sid?: N2K_Number
  instance: N2K_Number
  source: enums.PressureSource | number
  pressure?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_130314
 */
export const PGN_130314Defaults = {
  pgn: 130314,
  dst: 255,
  prio: 5,
  fields: []
}

/**
 * @category PGN_130314
 */
export class PGN_130314 extends PGN implements PGN_130314Interface {
  fields: PGN_130314Fields

  constructor(fields: PGN_130314Fields, dst: number = 255) {
    super(PGN_130314Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['actualPressure'] = (fields:any, dst:number) => new PGN_130314(fields, dst)


/**
 * PGN: 130315
 *
 * Description: Set Pressure
 *
 * @category PGN_130315
 */
export interface PGN_130315Interface extends PGNInterface {
  fields: PGN_130315Fields
}

/**
 * @category PGN_130315
 */
export interface PGN_130315Fields {
  sid?: N2K_Number
  instance: N2K_Number
  source: enums.PressureSource | number
  pressure?: N2K_Number
  reserved?: number
}

/**
 * @category PGN_130315
 */
export const PGN_130315Defaults = {
  pgn: 130315,
  dst: 255,
  prio: 5,
  fields: []
}

/**
 * @category PGN_130315
 */
export class PGN_130315 extends PGN implements PGN_130315Interface {
  fields: PGN_130315Fields

  constructor(fields: PGN_130315Fields, dst: number = 255) {
    super(PGN_130315Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['setPressure'] = (fields:any, dst:number) => new PGN_130315(fields, dst)


/**
 * PGN: 130316
 *
 * Description: Temperature Extended Range
 *
 * @category PGN_130316
 */
export interface PGN_130316Interface extends PGNInterface {
  fields: PGN_130316Fields
}

/**
 * @category PGN_130316
 */
export interface PGN_130316Fields {
  sid?: N2K_Number
  instance: N2K_Number
  source: enums.TemperatureSource | number
  temperature?: N2K_Number
  setTemperature?: N2K_Number
}

/**
 * @category PGN_130316
 */
export const PGN_130316Defaults = {
  pgn: 130316,
  dst: 255,
  prio: 5,
  fields: []
}

/**
 * @category PGN_130316
 */
export class PGN_130316 extends PGN implements PGN_130316Interface {
  fields: PGN_130316Fields

  constructor(fields: PGN_130316Fields, dst: number = 255) {
    super(PGN_130316Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['temperatureExtendedRange'] = (fields:any, dst:number) => new PGN_130316(fields, dst)


/**
 * PGN: 130320
 *
 * Description: Tide Station Data
 *
 * @category PGN_130320
 */
export interface PGN_130320Interface extends PGNInterface {
  fields: PGN_130320Fields
}

/**
 * @category PGN_130320
 */
export interface PGN_130320Fields {
  mode?: enums.ResidualMode | number
  tideTendency?: enums.Tide | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_130320
 */
export class PGN_130320 extends PGN implements PGN_130320Interface {
  fields: PGN_130320Fields

  constructor(fields: PGN_130320Fields, dst: number = 255) {
    super(PGN_130320Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['tideStationData'] = (fields:any, dst:number) => new PGN_130320(fields, dst)


/**
 * PGN: 130321
 *
 * Description: Salinity Station Data
 *
 * @category PGN_130321
 */
export interface PGN_130321Interface extends PGNInterface {
  fields: PGN_130321Fields
}

/**
 * @category PGN_130321
 */
export interface PGN_130321Fields {
  mode?: enums.ResidualMode | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_130321
 */
export class PGN_130321 extends PGN implements PGN_130321Interface {
  fields: PGN_130321Fields

  constructor(fields: PGN_130321Fields, dst: number = 255) {
    super(PGN_130321Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['salinityStationData'] = (fields:any, dst:number) => new PGN_130321(fields, dst)


/**
 * PGN: 130322
 *
 * Description: Current Station Data
 *
 * @category PGN_130322
 */
export interface PGN_130322Interface extends PGNInterface {
  fields: PGN_130322Fields
}

/**
 * @category PGN_130322
 */
export interface PGN_130322Fields {
  mode?: enums.ResidualMode | number
  state?: enums.FloodState | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_130322
 */
export class PGN_130322 extends PGN implements PGN_130322Interface {
  fields: PGN_130322Fields

  constructor(fields: PGN_130322Fields, dst: number = 255) {
    super(PGN_130322Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['currentStationData'] = (fields:any, dst:number) => new PGN_130322(fields, dst)


/**
 * PGN: 130323
 *
 * Description: Meteorological Station Data
 *
 * @category PGN_130323
 */
export interface PGN_130323Interface extends PGNInterface {
  fields: PGN_130323Fields
}

/**
 * @category PGN_130323
 */
export interface PGN_130323Fields {
  mode?: enums.ResidualMode | number
  reserved?: number
  measurementDate?: N2K_Date
  measurementTime?: N2K_Time
  stationLatitude?: N2K_Number
  stationLongitude?: N2K_Number
  windSpeed?: N2K_Number
  windDirection?: N2K_Number
  windReference?: enums.WindReference | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_130323
 */
export class PGN_130323 extends PGN implements PGN_130323Interface {
  fields: PGN_130323Fields

  constructor(fields: PGN_130323Fields, dst: number = 255) {
    super(PGN_130323Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['meteorologicalStationData'] = (fields:any, dst:number) => new PGN_130323(fields, dst)


/**
 * PGN: 130324
 *
 * Description: Moored Buoy Station Data
 *
 * @category PGN_130324
 */
export interface PGN_130324Interface extends PGNInterface {
  fields: PGN_130324Fields
}

/**
 * @category PGN_130324
 */
export interface PGN_130324Fields {
  mode?: enums.ResidualMode | number
  reserved?: number
  measurementDate?: N2K_Date
  measurementTime?: N2K_Time
  stationLatitude?: N2K_Number
  stationLongitude?: N2K_Number
  windSpeed?: N2K_Number
  windDirection?: N2K_Number
  windReference?: enums.WindReference | number
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
  prio: 6,
  fields: []
}

/**
 * @category PGN_130324
 */
export class PGN_130324 extends PGN implements PGN_130324Interface {
  fields: PGN_130324Fields

  constructor(fields: PGN_130324Fields, dst: number = 255) {
    super(PGN_130324Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['mooredBuoyStationData'] = (fields:any, dst:number) => new PGN_130324(fields, dst)


/**
 * PGN: 130330
 *
 * Description: Lighting System Settings
 *
 * Explanation: This PGN provides a lighting controller settings and number of supported capabilities.
 *
 * @category PGN_130330
 */
export interface PGN_130330Interface extends PGNInterface {
  fields: PGN_130330Fields
}

/**
 * @category PGN_130330
 */
export interface PGN_130330Fields {
  globalEnable?: N2K_Number
  defaultSettingsCommand?: enums.LightingCommand | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_130330
 */
export class PGN_130330 extends PGN implements PGN_130330Interface {
  fields: PGN_130330Fields

  constructor(fields: PGN_130330Fields, dst: number = 255) {
    super(PGN_130330Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['lightingSystemSettings'] = (fields:any, dst:number) => new PGN_130330(fields, dst)


/**
 * PGN: 130560
 *
 * Description: Payload Mass
 *
 * @category PGN_130560
 */
export interface PGN_130560Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130560
 */
export class PGN_130560 extends PGN implements PGN_130560Interface {
  fields: PGN_130560Fields

  constructor(fields: PGN_130560Fields, dst: number = 255) {
    super(PGN_130560Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['payloadMass'] = (fields:any, dst:number) => new PGN_130560(fields, dst)


/**
 * PGN: 130561
 *
 * Description: Lighting Zone
 *
 * Explanation: This PGN is used to report or configure a name for a given zone. A zone is a grouping of devices that are controlled by a Scene. This PGN is only sent upon request.
 *
 * @category PGN_130561
 */
export interface PGN_130561Interface extends PGNInterface {
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
  zoneEnabled?: enums.OffOn | number
  reserved?: number
}

/**
 * @category PGN_130561
 */
export const PGN_130561Defaults = {
  pgn: 130561,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130561
 */
export class PGN_130561 extends PGN implements PGN_130561Interface {
  fields: PGN_130561Fields

  constructor(fields: PGN_130561Fields, dst: number = 255) {
    super(PGN_130561Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['lightingZone'] = (fields:any, dst:number) => new PGN_130561(fields, dst)


/**
 * PGN: 130562
 *
 * Description: Lighting Scene
 *
 * Explanation: A Lighting Scene is a sequence of zone program configurations.
 *
 * @category PGN_130562
 */
export interface PGN_130562Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130562
 */
export class PGN_130562 extends PGN implements PGN_130562Interface {
  fields: PGN_130562Fields

  constructor(fields: PGN_130562Fields, dst: number = 255) {
    super(PGN_130562Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['lightingScene'] = (fields:any, dst:number) => new PGN_130562(fields, dst)


/**
 * PGN: 130563
 *
 * Description: Lighting Device
 *
 * Explanation: This PGN is used to provide status and capabilities of a lighting device. A lighting device may be a virtual device connected to a lighting controller or physical device on the network.
 *
 * @category PGN_130563
 */
export interface PGN_130563Interface extends PGNInterface {
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
  enabled?: enums.OffOn | number
  reserved?: number
}

/**
 * @category PGN_130563
 */
export const PGN_130563Defaults = {
  pgn: 130563,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130563
 */
export class PGN_130563 extends PGN implements PGN_130563Interface {
  fields: PGN_130563Fields

  constructor(fields: PGN_130563Fields, dst: number = 255) {
    super(PGN_130563Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['lightingDevice'] = (fields:any, dst:number) => new PGN_130563(fields, dst)


/**
 * PGN: 130564
 *
 * Description: Lighting Device Enumeration
 *
 * Explanation: This PGN allows for enumeration of the lighting devices on the controller.
 *
 * @category PGN_130564
 */
export interface PGN_130564Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130564
 */
export class PGN_130564 extends PGN implements PGN_130564Interface {
  fields: PGN_130564Fields

  constructor(fields: PGN_130564Fields, dst: number = 255) {
    super(PGN_130564Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['lightingDeviceEnumeration'] = (fields:any, dst:number) => new PGN_130564(fields, dst)


/**
 * PGN: 130565
 *
 * Description: Lighting Color Sequence
 *
 * Explanation: Sequences could be 1 to (PGN Lighting - System Configuration) Max Color Sequence Color Count colors.
 *
 * @category PGN_130565
 */
export interface PGN_130565Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130565
 */
export class PGN_130565 extends PGN implements PGN_130565Interface {
  fields: PGN_130565Fields

  constructor(fields: PGN_130565Fields, dst: number = 255) {
    super(PGN_130565Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['lightingColorSequence'] = (fields:any, dst:number) => new PGN_130565(fields, dst)


/**
 * PGN: 130566
 *
 * Description: Lighting Program
 *
 * Explanation: This PGN describes an available program on the controller. Can be a built in required NMEA one or a custom vendor program.
 *
 * @category PGN_130566
 */
export interface PGN_130566Interface extends PGNInterface {
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130566
 */
export class PGN_130566 extends PGN implements PGN_130566Interface {
  fields: PGN_130566Fields

  constructor(fields: PGN_130566Fields, dst: number = 255) {
    super(PGN_130566Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['lightingProgram'] = (fields:any, dst:number) => new PGN_130566(fields, dst)


/**
 * PGN: 130567
 *
 * Description: Watermaker Input Setting and Status
 *
 * @category PGN_130567
 */
export interface PGN_130567Interface extends PGNInterface {
  fields: PGN_130567Fields
}

/**
 * @category PGN_130567
 */
export interface PGN_130567Fields {
  watermakerOperatingState?: enums.WatermakerState | number
  productionStartStop?: enums.YesNo | number
  rinseStartStop?: enums.YesNo | number
  lowPressurePumpStatus?: enums.YesNo | number
  highPressurePumpStatus?: enums.YesNo | number
  emergencyStop?: enums.YesNo | number
  productSolenoidValveStatus?: enums.OkWarning | number
  flushModeStatus?: enums.YesNo | number
  salinityStatus?: enums.OkWarning | number
  sensorStatus?: enums.OkWarning | number
  oilChangeIndicatorStatus?: enums.OkWarning | number
  filterStatus?: enums.OkWarning | number
  systemStatus?: enums.OkWarning | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130567
 */
export class PGN_130567 extends PGN implements PGN_130567Interface {
  fields: PGN_130567Fields

  constructor(fields: PGN_130567Fields, dst: number = 255) {
    super(PGN_130567Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['watermakerInputSettingAndStatus'] = (fields:any, dst:number) => new PGN_130567(fields, dst)


/**
 * PGN: 130569
 *
 * Description: Current Status and File
 *
 * @category PGN_130569
 */
export interface PGN_130569Interface extends PGNInterface {
  fields: PGN_130569Fields
}

/**
 * @category PGN_130569
 */
export interface PGN_130569Fields {
  zone?: enums.EntertainmentZone | number
  source?: enums.EntertainmentSource | number
  number?: N2K_Number
  id?: N2K_Number
  playStatus?: enums.EntertainmentPlayStatus | number
  elapsedTrackTime?: N2K_Duration
  trackTime?: N2K_Duration
  repeatStatus?: enums.EntertainmentRepeatStatus | number
  shuffleStatus?: enums.EntertainmentShuffleStatus | number
  saveFavoriteNumber?: N2K_Number
  playFavoriteNumber?: N2K_Number
  thumbsUpDown?: enums.EntertainmentLikeStatus | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130569
 */
export class PGN_130569 extends PGN implements PGN_130569Interface {
  fields: PGN_130569Fields

  constructor(fields: PGN_130569Fields, dst: number = 255) {
    super(PGN_130569Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['currentStatusAndFile'] = (fields:any, dst:number) => new PGN_130569(fields, dst)


/**
 * PGN: 130570
 *
 * Description: Library Data File
 *
 * @category PGN_130570
 */
export interface PGN_130570Interface extends PGNInterface {
  fields: PGN_130570Fields
}

/**
 * @category PGN_130570
 */
export interface PGN_130570Fields {
  source?: enums.EntertainmentSource | number
  number?: N2K_Number
  id?: N2K_Number
  type?: enums.EntertainmentType | number
  name?: N2K_StringLau
  track?: N2K_Number
  station?: N2K_Number
  favorite?: N2K_Number
  radioFrequency?: N2K_Number
  hdFrequency?: N2K_Number
  zone?: enums.EntertainmentZone | number
  inPlayQueue?: enums.YesNo | number
  locked?: enums.YesNo | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130570
 */
export class PGN_130570 extends PGN implements PGN_130570Interface {
  fields: PGN_130570Fields

  constructor(fields: PGN_130570Fields, dst: number = 255) {
    super(PGN_130570Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['libraryDataFile'] = (fields:any, dst:number) => new PGN_130570(fields, dst)


/**
 * PGN: 130571
 *
 * Description: Library Data Group
 *
 * @category PGN_130571
 */
export interface PGN_130571Interface extends PGNInterface {
  fields: PGN_130571Fields
}

/**
 * @category PGN_130571
 */
export interface PGN_130571Fields {
  source?: enums.EntertainmentSource | number
  number?: N2K_Number
  type?: enums.EntertainmentType | number
  zone?: enums.EntertainmentZone | number
  groupId?: N2K_Number
  idOffset?: N2K_Number
  idCount?: N2K_Number
  totalIdCount?: N2K_Number
  artist?: N2K_StringLau
  list: {
    idType?: enums.EntertainmentIdType | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130571
 */
export class PGN_130571 extends PGN implements PGN_130571Interface {
  fields: PGN_130571Fields

  constructor(fields: PGN_130571Fields, dst: number = 255) {
    super(PGN_130571Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['libraryDataGroup'] = (fields:any, dst:number) => new PGN_130571(fields, dst)


/**
 * PGN: 130572
 *
 * Description: Library Data Search
 *
 * @category PGN_130572
 */
export interface PGN_130572Interface extends PGNInterface {
  fields: PGN_130572Fields
}

/**
 * @category PGN_130572
 */
export interface PGN_130572Fields {
  source?: enums.EntertainmentSource | number
  number?: N2K_Number
  groupId?: N2K_Number
  groupType1?: enums.EntertainmentGroup | number
  groupName1?: N2K_StringLau
  groupType2?: enums.EntertainmentGroup | number
  groupName2?: N2K_StringLau
  groupType3?: enums.EntertainmentGroup | number
  groupName3?: N2K_StringLau
}

/**
 * @category PGN_130572
 */
export const PGN_130572Defaults = {
  pgn: 130572,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130572
 */
export class PGN_130572 extends PGN implements PGN_130572Interface {
  fields: PGN_130572Fields

  constructor(fields: PGN_130572Fields, dst: number = 255) {
    super(PGN_130572Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['libraryDataSearch'] = (fields:any, dst:number) => new PGN_130572(fields, dst)


/**
 * PGN: 130573
 *
 * Description: Supported Source Data
 *
 * @category PGN_130573
 */
export interface PGN_130573Interface extends PGNInterface {
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
    source?: enums.EntertainmentSource | number
    number?: N2K_Number
    name?: N2K_StringLau
    playSupport?: enums.EntertainmentPlayStatusBitfield[]
    browseSupport?: enums.EntertainmentGroupBitfield[]
    thumbsSupport?: enums.YesNo | number
    connected?: enums.YesNo | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130573
 */
export class PGN_130573 extends PGN implements PGN_130573Interface {
  fields: PGN_130573Fields

  constructor(fields: PGN_130573Fields, dst: number = 255) {
    super(PGN_130573Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['supportedSourceData'] = (fields:any, dst:number) => new PGN_130573(fields, dst)


/**
 * PGN: 130574
 *
 * Description: Supported Zone Data
 *
 * @category PGN_130574
 */
export interface PGN_130574Interface extends PGNInterface {
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
    zoneId?: enums.EntertainmentZone | number
    name?: N2K_StringLau
  }[]
}

/**
 * @category PGN_130574
 */
export const PGN_130574Defaults = {
  pgn: 130574,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130574
 */
export class PGN_130574 extends PGN implements PGN_130574Interface {
  fields: PGN_130574Fields

  constructor(fields: PGN_130574Fields, dst: number = 255) {
    super(PGN_130574Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['supportedZoneData'] = (fields:any, dst:number) => new PGN_130574(fields, dst)


/**
 * PGN: 130576
 *
 * Description: Small Craft Status
 *
 * @category PGN_130576
 */
export interface PGN_130576Interface extends PGNInterface {
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
  prio: 2,
  fields: []
}

/**
 * @category PGN_130576
 */
export class PGN_130576 extends PGN implements PGN_130576Interface {
  fields: PGN_130576Fields

  constructor(fields: PGN_130576Fields, dst: number = 255) {
    super(PGN_130576Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['smallCraftStatus'] = (fields:any, dst:number) => new PGN_130576(fields, dst)


/**
 * PGN: 130577
 *
 * Description: Direction Data
 *
 * @category PGN_130577
 */
export interface PGN_130577Interface extends PGNInterface {
  fields: PGN_130577Fields
}

/**
 * @category PGN_130577
 */
export interface PGN_130577Fields {
  dataMode?: enums.ResidualMode | number
  cogReference?: enums.DirectionReference | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130577
 */
export class PGN_130577 extends PGN implements PGN_130577Interface {
  fields: PGN_130577Fields

  constructor(fields: PGN_130577Fields, dst: number = 255) {
    super(PGN_130577Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['directionData'] = (fields:any, dst:number) => new PGN_130577(fields, dst)


/**
 * PGN: 130578
 *
 * Description: Vessel Speed Components
 *
 * @category PGN_130578
 */
export interface PGN_130578Interface extends PGNInterface {
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
  prio: 2,
  fields: []
}

/**
 * @category PGN_130578
 */
export class PGN_130578 extends PGN implements PGN_130578Interface {
  fields: PGN_130578Fields

  constructor(fields: PGN_130578Fields, dst: number = 255) {
    super(PGN_130578Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['vesselSpeedComponents'] = (fields:any, dst:number) => new PGN_130578(fields, dst)


/**
 * PGN: 130579
 *
 * Description: System Configuration
 *
 * @category PGN_130579
 */
export interface PGN_130579Interface extends PGNInterface {
  fields: PGN_130579Fields
}

/**
 * @category PGN_130579
 */
export interface PGN_130579Fields {
  power?: enums.YesNo | number
  defaultSettings?: enums.EntertainmentDefaultSettings | number
  tunerRegions?: enums.EntertainmentRegions | number
  maxFavorites?: N2K_Number
  videoProtocols?: enums.VideoProtocols | number
  reserved?: number
}

/**
 * @category PGN_130579
 */
export const PGN_130579Defaults = {
  pgn: 130579,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130579
 */
export class PGN_130579 extends PGN implements PGN_130579Interface {
  fields: PGN_130579Fields

  constructor(fields: PGN_130579Fields, dst: number = 255) {
    super(PGN_130579Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['systemConfiguration'] = (fields:any, dst:number) => new PGN_130579(fields, dst)


/**
 * PGN: 130580
 *
 * Description: System Configuration (deprecated)
 *
 * @category PGN_130580
 */
export interface PGN_130580Interface extends PGNInterface {
  fields: PGN_130580Fields
}

/**
 * @category PGN_130580
 */
export interface PGN_130580Fields {
  power?: enums.YesNo | number
  defaultSettings?: enums.EntertainmentDefaultSettings | number
  tunerRegions?: enums.EntertainmentRegions | number
  maxFavorites?: N2K_Number
}

/**
 * @category PGN_130580
 */
export const PGN_130580Defaults = {
  pgn: 130580,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130580
 */
export class PGN_130580 extends PGN implements PGN_130580Interface {
  fields: PGN_130580Fields

  constructor(fields: PGN_130580Fields, dst: number = 255) {
    super(PGN_130580Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['systemConfigurationDeprecated'] = (fields:any, dst:number) => new PGN_130580(fields, dst)


/**
 * PGN: 130581
 *
 * Description: Zone Configuration (deprecated)
 *
 * @category PGN_130581
 */
export interface PGN_130581Interface extends PGNInterface {
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
    zoneId?: enums.EntertainmentZone | number
    zoneName?: N2K_StringLau
  }[]
}

/**
 * @category PGN_130581
 */
export const PGN_130581Defaults = {
  pgn: 130581,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130581
 */
export class PGN_130581 extends PGN implements PGN_130581Interface {
  fields: PGN_130581Fields

  constructor(fields: PGN_130581Fields, dst: number = 255) {
    super(PGN_130581Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['zoneConfigurationDeprecated'] = (fields:any, dst:number) => new PGN_130581(fields, dst)


/**
 * PGN: 130582
 *
 * Description: Zone Volume
 *
 * @category PGN_130582
 */
export interface PGN_130582Interface extends PGNInterface {
  fields: PGN_130582Fields
}

/**
 * @category PGN_130582
 */
export interface PGN_130582Fields {
  zoneId?: enums.EntertainmentZone | number
  volume?: N2K_Number
  volumeChange?: enums.EntertainmentVolumeControl | number
  mute?: enums.YesNo | number
  reserved?: number
  channel?: enums.EntertainmentChannel | number
  reserved7?: number
}

/**
 * @category PGN_130582
 */
export const PGN_130582Defaults = {
  pgn: 130582,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130582
 */
export class PGN_130582 extends PGN implements PGN_130582Interface {
  fields: PGN_130582Fields

  constructor(fields: PGN_130582Fields, dst: number = 255) {
    super(PGN_130582Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['zoneVolume'] = (fields:any, dst:number) => new PGN_130582(fields, dst)


/**
 * PGN: 130583
 *
 * Description: Available Audio EQ presets
 *
 * @category PGN_130583
 */
export interface PGN_130583Interface extends PGNInterface {
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
    presetType?: enums.EntertainmentEq | number
    presetName?: N2K_StringLau
  }[]
}

/**
 * @category PGN_130583
 */
export const PGN_130583Defaults = {
  pgn: 130583,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130583
 */
export class PGN_130583 extends PGN implements PGN_130583Interface {
  fields: PGN_130583Fields

  constructor(fields: PGN_130583Fields, dst: number = 255) {
    super(PGN_130583Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['availableAudioEqPresets'] = (fields:any, dst:number) => new PGN_130583(fields, dst)


/**
 * PGN: 130584
 *
 * Description: Available Bluetooth addresses
 *
 * @category PGN_130584
 */
export interface PGN_130584Interface extends PGNInterface {
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
    status?: enums.BluetoothStatus | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130584
 */
export class PGN_130584 extends PGN implements PGN_130584Interface {
  fields: PGN_130584Fields

  constructor(fields: PGN_130584Fields, dst: number = 255) {
    super(PGN_130584Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['availableBluetoothAddresses'] = (fields:any, dst:number) => new PGN_130584(fields, dst)


/**
 * PGN: 130585
 *
 * Description: Bluetooth source status
 *
 * @category PGN_130585
 */
export interface PGN_130585Interface extends PGNInterface {
  fields: PGN_130585Fields
}

/**
 * @category PGN_130585
 */
export interface PGN_130585Fields {
  sourceNumber?: N2K_Number
  status?: enums.BluetoothSourceStatus | number
  forgetDevice?: enums.YesNo | number
  discovering?: enums.YesNo | number
  bluetoothAddress?: N2K_Binary
}

/**
 * @category PGN_130585
 */
export const PGN_130585Defaults = {
  pgn: 130585,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130585
 */
export class PGN_130585 extends PGN implements PGN_130585Interface {
  fields: PGN_130585Fields

  constructor(fields: PGN_130585Fields, dst: number = 255) {
    super(PGN_130585Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['bluetoothSourceStatus'] = (fields:any, dst:number) => new PGN_130585(fields, dst)


/**
 * PGN: 130586
 *
 * Description: Zone Configuration
 *
 * @category PGN_130586
 */
export interface PGN_130586Interface extends PGNInterface {
  fields: PGN_130586Fields
}

/**
 * @category PGN_130586
 */
export interface PGN_130586Fields {
  zoneId?: enums.EntertainmentZone | number
  volumeLimit?: N2K_Number
  fade?: N2K_Number
  balance?: N2K_Number
  subVolume?: N2K_Number
  eqTreble?: N2K_Number
  eqMidRange?: N2K_Number
  eqBass?: N2K_Number
  presetType?: enums.EntertainmentEq | number
  audioFilter?: enums.EntertainmentFilter | number
  highPassFilterFrequency?: N2K_Number
  lowPassFilterFrequency?: N2K_Number
  channel?: enums.EntertainmentChannel | number
}

/**
 * @category PGN_130586
 */
export const PGN_130586Defaults = {
  pgn: 130586,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130586
 */
export class PGN_130586 extends PGN implements PGN_130586Interface {
  fields: PGN_130586Fields

  constructor(fields: PGN_130586Fields, dst: number = 255) {
    super(PGN_130586Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['zoneConfiguration'] = (fields:any, dst:number) => new PGN_130586(fields, dst)


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
export interface PGN_130816_SonichubInit2Interface extends PGNInterface {
  fields: PGN_130816_SonichubInit2Fields
}

/**
 * @category PGN_130816_SonichubInit2
 */
export interface PGN_130816_SonichubInit2Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  a?: N2K_Number
  b?: N2K_Number
}

/**
 * @category PGN_130816_SonichubInit2
 */
export const PGN_130816_SonichubInit2Defaults = {
  pgn: 130816,
  dst: 255,
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  a?: N2K_Number
  b?: N2K_Number
}

/**
 * @category PGN_130816_SonichubInit2
 */
export class PGN_130816_SonichubInit2 extends PGN implements PGN_130816_SonichubInit2Interface {
  fields: PGN_130816_SonichubInit2Fields

  constructor(fields: PGN_130816_SonichubInit2CreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubInit2Defaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubInit2MatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubInit2MatchFields)
}
}
pgnIdToClass['sonichubInit2'] = (fields:any, dst:number) => new PGN_130816_SonichubInit2(fields, dst)


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
export interface PGN_130816_SonichubAmRadioInterface extends PGNInterface {
  fields: PGN_130816_SonichubAmRadioFields
}

/**
 * @category PGN_130816_SonichubAmRadio
 */
export interface PGN_130816_SonichubAmRadioFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  item?: enums.SonichubTuning | number
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
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  item?: enums.SonichubTuning | number
  frequency?: N2K_Number
  noiseLevel?: N2K_Number
  signalLevel?: N2K_Number
  reserved11?: number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubAmRadio
 */
export class PGN_130816_SonichubAmRadio extends PGN implements PGN_130816_SonichubAmRadioInterface {
  fields: PGN_130816_SonichubAmRadioFields

  constructor(fields: PGN_130816_SonichubAmRadioCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubAmRadioDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubAmRadioMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubAmRadioMatchFields)
}
}
pgnIdToClass['sonichubAmRadio'] = (fields:any, dst:number) => new PGN_130816_SonichubAmRadio(fields, dst)


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
export interface PGN_130816_SonichubZoneInfoInterface extends PGNInterface {
  fields: PGN_130816_SonichubZoneInfoFields
}

/**
 * @category PGN_130816_SonichubZoneInfo
 */
export interface PGN_130816_SonichubZoneInfoFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  zone?: N2K_Number
}

/**
 * @category PGN_130816_SonichubZoneInfo
 */
export const PGN_130816_SonichubZoneInfoDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  zone?: N2K_Number
}

/**
 * @category PGN_130816_SonichubZoneInfo
 */
export class PGN_130816_SonichubZoneInfo extends PGN implements PGN_130816_SonichubZoneInfoInterface {
  fields: PGN_130816_SonichubZoneInfoFields

  constructor(fields: PGN_130816_SonichubZoneInfoCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubZoneInfoDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubZoneInfoMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubZoneInfoMatchFields)
}
}
pgnIdToClass['sonichubZoneInfo'] = (fields:any, dst:number) => new PGN_130816_SonichubZoneInfo(fields, dst)


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
export interface PGN_130816_SonichubSourceInterface extends PGNInterface {
  fields: PGN_130816_SonichubSourceFields
}

/**
 * @category PGN_130816_SonichubSource
 */
export interface PGN_130816_SonichubSourceFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  source?: enums.SonichubSource | number
}

/**
 * @category PGN_130816_SonichubSource
 */
export const PGN_130816_SonichubSourceDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  source?: enums.SonichubSource | number
}

/**
 * @category PGN_130816_SonichubSource
 */
export class PGN_130816_SonichubSource extends PGN implements PGN_130816_SonichubSourceInterface {
  fields: PGN_130816_SonichubSourceFields

  constructor(fields: PGN_130816_SonichubSourceCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubSourceDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubSourceMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubSourceMatchFields)
}
}
pgnIdToClass['sonichubSource'] = (fields:any, dst:number) => new PGN_130816_SonichubSource(fields, dst)


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
export interface PGN_130816_SonichubSourceListInterface extends PGNInterface {
  fields: PGN_130816_SonichubSourceListFields
}

/**
 * @category PGN_130816_SonichubSourceList
 */
export interface PGN_130816_SonichubSourceListFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
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
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  sourceId?: N2K_Number
  a?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubSourceList
 */
export class PGN_130816_SonichubSourceList extends PGN implements PGN_130816_SonichubSourceListInterface {
  fields: PGN_130816_SonichubSourceListFields

  constructor(fields: PGN_130816_SonichubSourceListCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubSourceListDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubSourceListMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubSourceListMatchFields)
}
}
pgnIdToClass['sonichubSourceList'] = (fields:any, dst:number) => new PGN_130816_SonichubSourceList(fields, dst)


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
export interface PGN_130816_SonichubControlInterface extends PGNInterface {
  fields: PGN_130816_SonichubControlFields
}

/**
 * @category PGN_130816_SonichubControl
 */
export interface PGN_130816_SonichubControlFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  item?: enums.FusionMuteCommand | number
}

/**
 * @category PGN_130816_SonichubControl
 */
export const PGN_130816_SonichubControlDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  item?: enums.FusionMuteCommand | number
}

/**
 * @category PGN_130816_SonichubControl
 */
export class PGN_130816_SonichubControl extends PGN implements PGN_130816_SonichubControlInterface {
  fields: PGN_130816_SonichubControlFields

  constructor(fields: PGN_130816_SonichubControlCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubControlDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubControlMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubControlMatchFields)
}
}
pgnIdToClass['sonichubControl'] = (fields:any, dst:number) => new PGN_130816_SonichubControl(fields, dst)


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
export interface PGN_130816_SonichubFmRadioInterface extends PGNInterface {
  fields: PGN_130816_SonichubFmRadioFields
}

/**
 * @category PGN_130816_SonichubFmRadio
 */
export interface PGN_130816_SonichubFmRadioFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  item?: enums.SonichubTuning | number
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
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  item?: enums.SonichubTuning | number
  frequency?: N2K_Number
  noiseLevel?: N2K_Number
  signalLevel?: N2K_Number
  reserved11?: number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubFmRadio
 */
export class PGN_130816_SonichubFmRadio extends PGN implements PGN_130816_SonichubFmRadioInterface {
  fields: PGN_130816_SonichubFmRadioFields

  constructor(fields: PGN_130816_SonichubFmRadioCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubFmRadioDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubFmRadioMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubFmRadioMatchFields)
}
}
pgnIdToClass['sonichubFmRadio'] = (fields:any, dst:number) => new PGN_130816_SonichubFmRadio(fields, dst)


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
export interface PGN_130816_SonichubPlaylistInterface extends PGNInterface {
  fields: PGN_130816_SonichubPlaylistFields
}

/**
 * @category PGN_130816_SonichubPlaylist
 */
export interface PGN_130816_SonichubPlaylistFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  item?: enums.SonichubPlaylist | number
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
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  item?: enums.SonichubPlaylist | number
  a?: N2K_Number
  currentTrack?: N2K_Number
  tracks?: N2K_Number
  length?: N2K_Duration
  positionInTrack?: N2K_Duration
}

/**
 * @category PGN_130816_SonichubPlaylist
 */
export class PGN_130816_SonichubPlaylist extends PGN implements PGN_130816_SonichubPlaylistInterface {
  fields: PGN_130816_SonichubPlaylistFields

  constructor(fields: PGN_130816_SonichubPlaylistCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubPlaylistDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubPlaylistMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubPlaylistMatchFields)
}
}
pgnIdToClass['sonichubPlaylist'] = (fields:any, dst:number) => new PGN_130816_SonichubPlaylist(fields, dst)


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
export interface PGN_130816_SonichubTrackInterface extends PGNInterface {
  fields: PGN_130816_SonichubTrackFields
}

/**
 * @category PGN_130816_SonichubTrack
 */
export interface PGN_130816_SonichubTrackFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  item?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubTrack
 */
export const PGN_130816_SonichubTrackDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  item?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubTrack
 */
export class PGN_130816_SonichubTrack extends PGN implements PGN_130816_SonichubTrackInterface {
  fields: PGN_130816_SonichubTrackFields

  constructor(fields: PGN_130816_SonichubTrackCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubTrackDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubTrackMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubTrackMatchFields)
}
}
pgnIdToClass['sonichubTrack'] = (fields:any, dst:number) => new PGN_130816_SonichubTrack(fields, dst)


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
export interface PGN_130816_SonichubArtistInterface extends PGNInterface {
  fields: PGN_130816_SonichubArtistFields
}

/**
 * @category PGN_130816_SonichubArtist
 */
export interface PGN_130816_SonichubArtistFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  item?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubArtist
 */
export const PGN_130816_SonichubArtistDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  item?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubArtist
 */
export class PGN_130816_SonichubArtist extends PGN implements PGN_130816_SonichubArtistInterface {
  fields: PGN_130816_SonichubArtistFields

  constructor(fields: PGN_130816_SonichubArtistCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubArtistDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubArtistMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubArtistMatchFields)
}
}
pgnIdToClass['sonichubArtist'] = (fields:any, dst:number) => new PGN_130816_SonichubArtist(fields, dst)


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
export interface PGN_130816_SonichubAlbumInterface extends PGNInterface {
  fields: PGN_130816_SonichubAlbumFields
}

/**
 * @category PGN_130816_SonichubAlbum
 */
export interface PGN_130816_SonichubAlbumFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  item?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubAlbum
 */
export const PGN_130816_SonichubAlbumDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  item?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubAlbum
 */
export class PGN_130816_SonichubAlbum extends PGN implements PGN_130816_SonichubAlbumInterface {
  fields: PGN_130816_SonichubAlbumFields

  constructor(fields: PGN_130816_SonichubAlbumCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubAlbumDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubAlbumMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubAlbumMatchFields)
}
}
pgnIdToClass['sonichubAlbum'] = (fields:any, dst:number) => new PGN_130816_SonichubAlbum(fields, dst)


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
export interface PGN_130816_SonichubMenuItemInterface extends PGNInterface {
  fields: PGN_130816_SonichubMenuItemFields
}

/**
 * @category PGN_130816_SonichubMenuItem
 */
export interface PGN_130816_SonichubMenuItemFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
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
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  item?: N2K_Number
  c?: N2K_Number
  d?: N2K_Number
  e?: N2K_Number
  text?: N2K_StringLz
}

/**
 * @category PGN_130816_SonichubMenuItem
 */
export class PGN_130816_SonichubMenuItem extends PGN implements PGN_130816_SonichubMenuItemInterface {
  fields: PGN_130816_SonichubMenuItemFields

  constructor(fields: PGN_130816_SonichubMenuItemCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubMenuItemDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubMenuItemMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubMenuItemMatchFields)
}
}
pgnIdToClass['sonichubMenuItem'] = (fields:any, dst:number) => new PGN_130816_SonichubMenuItem(fields, dst)


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
export interface PGN_130816_SonichubZonesInterface extends PGNInterface {
  fields: PGN_130816_SonichubZonesFields
}

/**
 * @category PGN_130816_SonichubZones
 */
export interface PGN_130816_SonichubZonesFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  zones?: N2K_Number
}

/**
 * @category PGN_130816_SonichubZones
 */
export const PGN_130816_SonichubZonesDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  zones?: N2K_Number
}

/**
 * @category PGN_130816_SonichubZones
 */
export class PGN_130816_SonichubZones extends PGN implements PGN_130816_SonichubZonesInterface {
  fields: PGN_130816_SonichubZonesFields

  constructor(fields: PGN_130816_SonichubZonesCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubZonesDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubZonesMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubZonesMatchFields)
}
}
pgnIdToClass['sonichubZones'] = (fields:any, dst:number) => new PGN_130816_SonichubZones(fields, dst)


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
export interface PGN_130816_SonichubMaxVolumeInterface extends PGNInterface {
  fields: PGN_130816_SonichubMaxVolumeFields
}

/**
 * @category PGN_130816_SonichubMaxVolume
 */
export interface PGN_130816_SonichubMaxVolumeFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  zone?: N2K_Number
  level?: N2K_Number
}

/**
 * @category PGN_130816_SonichubMaxVolume
 */
export const PGN_130816_SonichubMaxVolumeDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  zone?: N2K_Number
  level?: N2K_Number
}

/**
 * @category PGN_130816_SonichubMaxVolume
 */
export class PGN_130816_SonichubMaxVolume extends PGN implements PGN_130816_SonichubMaxVolumeInterface {
  fields: PGN_130816_SonichubMaxVolumeFields

  constructor(fields: PGN_130816_SonichubMaxVolumeCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubMaxVolumeDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubMaxVolumeMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubMaxVolumeMatchFields)
}
}
pgnIdToClass['sonichubMaxVolume'] = (fields:any, dst:number) => new PGN_130816_SonichubMaxVolume(fields, dst)


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
export interface PGN_130816_SonichubVolumeInterface extends PGNInterface {
  fields: PGN_130816_SonichubVolumeFields
}

/**
 * @category PGN_130816_SonichubVolume
 */
export interface PGN_130816_SonichubVolumeFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  zone?: N2K_Number
  level?: N2K_Number
}

/**
 * @category PGN_130816_SonichubVolume
 */
export const PGN_130816_SonichubVolumeDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  zone?: N2K_Number
  level?: N2K_Number
}

/**
 * @category PGN_130816_SonichubVolume
 */
export class PGN_130816_SonichubVolume extends PGN implements PGN_130816_SonichubVolumeInterface {
  fields: PGN_130816_SonichubVolumeFields

  constructor(fields: PGN_130816_SonichubVolumeCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubVolumeDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubVolumeMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubVolumeMatchFields)
}
}
pgnIdToClass['sonichubVolume'] = (fields:any, dst:number) => new PGN_130816_SonichubVolume(fields, dst)


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
export interface PGN_130816_SonichubInit1Interface extends PGNInterface {
  fields: PGN_130816_SonichubInit1Fields
}

/**
 * @category PGN_130816_SonichubInit1
 */
export interface PGN_130816_SonichubInit1Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
}

/**
 * @category PGN_130816_SonichubInit1
 */
export const PGN_130816_SonichubInit1Defaults = {
  pgn: 130816,
  dst: 255,
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
}

/**
 * @category PGN_130816_SonichubInit1
 */
export class PGN_130816_SonichubInit1 extends PGN implements PGN_130816_SonichubInit1Interface {
  fields: PGN_130816_SonichubInit1Fields

  constructor(fields: PGN_130816_SonichubInit1CreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubInit1Defaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubInit1MatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubInit1MatchFields)
}
}
pgnIdToClass['sonichubInit1'] = (fields:any, dst:number) => new PGN_130816_SonichubInit1(fields, dst)


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
export interface PGN_130816_SonichubPositionInterface extends PGNInterface {
  fields: PGN_130816_SonichubPositionFields
}

/**
 * @category PGN_130816_SonichubPosition
 */
export interface PGN_130816_SonichubPositionFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  position?: N2K_Duration
}

/**
 * @category PGN_130816_SonichubPosition
 */
export const PGN_130816_SonichubPositionDefaults = {
  pgn: 130816,
  dst: 255,
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  position?: N2K_Duration
}

/**
 * @category PGN_130816_SonichubPosition
 */
export class PGN_130816_SonichubPosition extends PGN implements PGN_130816_SonichubPositionInterface {
  fields: PGN_130816_SonichubPositionFields

  constructor(fields: PGN_130816_SonichubPositionCreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubPositionDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubPositionMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubPositionMatchFields)
}
}
pgnIdToClass['sonichubPosition'] = (fields:any, dst:number) => new PGN_130816_SonichubPosition(fields, dst)


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
export interface PGN_130816_SonichubInit3Interface extends PGNInterface {
  fields: PGN_130816_SonichubInit3Fields
}

/**
 * @category PGN_130816_SonichubInit3
 */
export interface PGN_130816_SonichubInit3Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SonichubCommand | number
  control?: enums.SonichubControl | number
  a?: N2K_Number
  b?: N2K_Number
}

/**
 * @category PGN_130816_SonichubInit3
 */
export const PGN_130816_SonichubInit3Defaults = {
  pgn: 130816,
  dst: 255,
  prio: 7,
  fields: []
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
  control?: enums.SonichubControl | number
  a?: N2K_Number
  b?: N2K_Number
}

/**
 * @category PGN_130816_SonichubInit3
 */
export class PGN_130816_SonichubInit3 extends PGN implements PGN_130816_SonichubInit3Interface {
  fields: PGN_130816_SonichubInit3Fields

  constructor(fields: PGN_130816_SonichubInit3CreateArgs, dst: number = 255) {
    super(PGN_130816_SonichubInit3Defaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SonichubInit3MatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SonichubInit3MatchFields)
}
}
pgnIdToClass['sonichubInit3'] = (fields:any, dst:number) => new PGN_130816_SonichubInit3(fields, dst)


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
export interface PGN_130816_SimradTextMessageInterface extends PGNInterface {
  fields: PGN_130816_SimradTextMessageFields
}

/**
 * @category PGN_130816_SimradTextMessage
 */
export interface PGN_130816_SimradTextMessageFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  reserved4?: number
  proprietaryId: enums.SimnetCommand | number
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
  prio: 7,
  fields: []
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
export class PGN_130816_SimradTextMessage extends PGN implements PGN_130816_SimradTextMessageInterface {
  fields: PGN_130816_SimradTextMessageFields

  constructor(fields: PGN_130816_SimradTextMessageCreateArgs, dst: number = 255) {
    super(PGN_130816_SimradTextMessageDefaults)
    this.dst = dst
    this.fields = { ...PGN_130816_SimradTextMessageMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130816_SimradTextMessageMatchFields)
}
}
pgnIdToClass['simradTextMessage'] = (fields:any, dst:number) => new PGN_130816_SimradTextMessage(fields, dst)


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
export interface PGN_130817_NavicoUnknownInterface extends PGNInterface {
  fields: PGN_130817_NavicoUnknownFields
}

/**
 * @category PGN_130817_NavicoUnknown
 */
export interface PGN_130817_NavicoUnknownFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
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
export class PGN_130817_NavicoUnknown extends PGN implements PGN_130817_NavicoUnknownInterface {
  fields: PGN_130817_NavicoUnknownFields

  constructor(fields: PGN_130817_NavicoUnknownCreateArgs, dst: number = 255) {
    super(PGN_130817_NavicoUnknownDefaults)
    this.dst = dst
    this.fields = { ...PGN_130817_NavicoUnknownMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130817_NavicoUnknownMatchFields)
}
}
pgnIdToClass['navicoUnknown'] = (fields:any, dst:number) => new PGN_130817_NavicoUnknown(fields, dst)


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
export interface PGN_130817_LowranceProductInformationInterface extends PGNInterface {
  fields: PGN_130817_LowranceProductInformationFields
}

/**
 * @category PGN_130817_LowranceProductInformation
 */
export interface PGN_130817_LowranceProductInformationFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
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
export class PGN_130817_LowranceProductInformation extends PGN implements PGN_130817_LowranceProductInformationInterface {
  fields: PGN_130817_LowranceProductInformationFields

  constructor(fields: PGN_130817_LowranceProductInformationCreateArgs, dst: number = 255) {
    super(PGN_130817_LowranceProductInformationDefaults)
    this.dst = dst
    this.fields = { ...PGN_130817_LowranceProductInformationMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130817_LowranceProductInformationMatchFields)
}
}
pgnIdToClass['lowranceProductInformation'] = (fields:any, dst:number) => new PGN_130817_LowranceProductInformation(fields, dst)


/**
 * PGN: 130818
 *
 * Description: Simnet: Reprogram Data
 *
 * @category PGN_130818
 */
export interface PGN_130818Interface extends PGNInterface {
  fields: PGN_130818Fields
}

/**
 * @category PGN_130818
 */
export interface PGN_130818Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_130818
 */
export class PGN_130818 extends PGN implements PGN_130818Interface {
  fields: PGN_130818Fields

  constructor(fields: PGN_130818Fields, dst: number = 255) {
    super(PGN_130818Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetReprogramData'] = (fields:any, dst:number) => new PGN_130818(fields, dst)


/**
 * PGN: 130819
 *
 * Description: Simnet: Request Reprogram
 *
 * @category PGN_130819
 */
export interface PGN_130819Interface extends PGNInterface {
  fields: PGN_130819Fields
}

/**
 * @category PGN_130819
 */
export interface PGN_130819Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
}

/**
 * @category PGN_130819
 */
export const PGN_130819Defaults = {
  pgn: 130819,
  dst: 255,
  prio: 7,
  fields: []
}

/**
 * @category PGN_130819
 */
export class PGN_130819 extends PGN implements PGN_130819Interface {
  fields: PGN_130819Fields

  constructor(fields: PGN_130819Fields, dst: number = 255) {
    super(PGN_130819Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetRequestReprogram'] = (fields:any, dst:number) => new PGN_130819(fields, dst)


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
export interface PGN_130820_SimnetReprogramStatusInterface extends PGNInterface {
  fields: PGN_130820_SimnetReprogramStatusFields
}

/**
 * @category PGN_130820_SimnetReprogramStatus
 */
export interface PGN_130820_SimnetReprogramStatusFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_SimnetReprogramStatus extends PGN implements PGN_130820_SimnetReprogramStatusInterface {
  fields: PGN_130820_SimnetReprogramStatusFields

  constructor(fields: PGN_130820_SimnetReprogramStatusCreateArgs, dst: number = 255) {
    super(PGN_130820_SimnetReprogramStatusDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_SimnetReprogramStatusMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_SimnetReprogramStatusMatchFields)
}
}
pgnIdToClass['simnetReprogramStatus'] = (fields:any, dst:number) => new PGN_130820_SimnetReprogramStatus(fields, dst)


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
export interface PGN_130820_FurunoUnknown130820Interface extends PGNInterface {
  fields: PGN_130820_FurunoUnknown130820Fields
}

/**
 * @category PGN_130820_FurunoUnknown130820
 */
export interface PGN_130820_FurunoUnknown130820Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FurunoUnknown130820 extends PGN implements PGN_130820_FurunoUnknown130820Interface {
  fields: PGN_130820_FurunoUnknown130820Fields

  constructor(fields: PGN_130820_FurunoUnknown130820CreateArgs, dst: number = 255) {
    super(PGN_130820_FurunoUnknown130820Defaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FurunoUnknown130820MatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FurunoUnknown130820MatchFields)
}
}
pgnIdToClass['furunoUnknown130820'] = (fields:any, dst:number) => new PGN_130820_FurunoUnknown130820(fields, dst)


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
export interface PGN_130820_FusionVersionsInterface extends PGNInterface {
  fields: PGN_130820_FusionVersionsFields
}

/**
 * @category PGN_130820_FusionVersions
 */
export interface PGN_130820_FusionVersionsFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId?: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionVersions extends PGN implements PGN_130820_FusionVersionsInterface {
  fields: PGN_130820_FusionVersionsFields

  constructor(fields: PGN_130820_FusionVersionsCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionVersionsDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionVersionsMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionVersionsMatchFields)
}
}
pgnIdToClass['fusionVersions'] = (fields:any, dst:number) => new PGN_130820_FusionVersions(fields, dst)


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
export interface PGN_130820_FusionSourceInterface extends PGNInterface {
  fields: PGN_130820_FusionSourceFields
}

/**
 * @category PGN_130820_FusionSource
 */
export interface PGN_130820_FusionSourceFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId?: enums.FusionStatusMessageId | number
  sourceId?: N2K_Number
  currentSourceId?: N2K_Number
  sourceType?: enums.FusionSourceType | number
  flags?: N2K_Number
  source?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionSource
 */
export const PGN_130820_FusionSourceDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
  sourceType?: enums.FusionSourceType | number
  flags?: N2K_Number
  source?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionSource
 */
export class PGN_130820_FusionSource extends PGN implements PGN_130820_FusionSourceInterface {
  fields: PGN_130820_FusionSourceFields

  constructor(fields: PGN_130820_FusionSourceCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionSourceDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionSourceMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionSourceMatchFields)
}
}
pgnIdToClass['fusionSource'] = (fields:any, dst:number) => new PGN_130820_FusionSource(fields, dst)


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
export interface PGN_130820_FusionSourceCountInterface extends PGNInterface {
  fields: PGN_130820_FusionSourceCountFields
}

/**
 * @category PGN_130820_FusionSourceCount
 */
export interface PGN_130820_FusionSourceCountFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId?: enums.FusionStatusMessageId | number
  sourceCount?: N2K_Number
}

/**
 * @category PGN_130820_FusionSourceCount
 */
export const PGN_130820_FusionSourceCountDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
export class PGN_130820_FusionSourceCount extends PGN implements PGN_130820_FusionSourceCountInterface {
  fields: PGN_130820_FusionSourceCountFields

  constructor(fields: PGN_130820_FusionSourceCountCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionSourceCountDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionSourceCountMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionSourceCountMatchFields)
}
}
pgnIdToClass['fusionSourceCount'] = (fields:any, dst:number) => new PGN_130820_FusionSourceCount(fields, dst)


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
export interface PGN_130820_FusionMediaInterface extends PGNInterface {
  fields: PGN_130820_FusionMediaFields
}

/**
 * @category PGN_130820_FusionMedia
 */
export interface PGN_130820_FusionMediaFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  sourceId: N2K_Number
  flags?: enums.FusionPlayStatus | number
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
  prio: 7,
  fields: []
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
  flags?: enums.FusionPlayStatus | number
  track?: N2K_Number
  trackCount?: N2K_Number
  length?: N2K_Duration
  positionInTrack?: N2K_Duration
}

/**
 * @category PGN_130820_FusionMedia
 */
export class PGN_130820_FusionMedia extends PGN implements PGN_130820_FusionMediaInterface {
  fields: PGN_130820_FusionMediaFields

  constructor(fields: PGN_130820_FusionMediaCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionMediaDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionMediaMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionMediaMatchFields)
}
}
pgnIdToClass['fusionMedia'] = (fields:any, dst:number) => new PGN_130820_FusionMedia(fields, dst)


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
export interface PGN_130820_FusionTrackNameInterface extends PGNInterface {
  fields: PGN_130820_FusionTrackNameFields
}

/**
 * @category PGN_130820_FusionTrackName
 */
export interface PGN_130820_FusionTrackNameFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionTrackName extends PGN implements PGN_130820_FusionTrackNameInterface {
  fields: PGN_130820_FusionTrackNameFields

  constructor(fields: PGN_130820_FusionTrackNameCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionTrackNameDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionTrackNameMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionTrackNameMatchFields)
}
}
pgnIdToClass['fusionTrackName'] = (fields:any, dst:number) => new PGN_130820_FusionTrackName(fields, dst)


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
export interface PGN_130820_FusionArtistNameInterface extends PGNInterface {
  fields: PGN_130820_FusionArtistNameFields
}

/**
 * @category PGN_130820_FusionArtistName
 */
export interface PGN_130820_FusionArtistNameFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionArtistName extends PGN implements PGN_130820_FusionArtistNameInterface {
  fields: PGN_130820_FusionArtistNameFields

  constructor(fields: PGN_130820_FusionArtistNameCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionArtistNameDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionArtistNameMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionArtistNameMatchFields)
}
}
pgnIdToClass['fusionArtistName'] = (fields:any, dst:number) => new PGN_130820_FusionArtistName(fields, dst)


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
export interface PGN_130820_FusionAlbumNameInterface extends PGNInterface {
  fields: PGN_130820_FusionAlbumNameFields
}

/**
 * @category PGN_130820_FusionAlbumName
 */
export interface PGN_130820_FusionAlbumNameFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionAlbumName extends PGN implements PGN_130820_FusionAlbumNameInterface {
  fields: PGN_130820_FusionAlbumNameFields

  constructor(fields: PGN_130820_FusionAlbumNameCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionAlbumNameDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionAlbumNameMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionAlbumNameMatchFields)
}
}
pgnIdToClass['fusionAlbumName'] = (fields:any, dst:number) => new PGN_130820_FusionAlbumName(fields, dst)


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
export interface PGN_130820_FusionDeviceNameInterface extends PGNInterface {
  fields: PGN_130820_FusionDeviceNameFields
}

/**
 * @category PGN_130820_FusionDeviceName
 */
export interface PGN_130820_FusionDeviceNameFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  name?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionDeviceName
 */
export const PGN_130820_FusionDeviceNameDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
export class PGN_130820_FusionDeviceName extends PGN implements PGN_130820_FusionDeviceNameInterface {
  fields: PGN_130820_FusionDeviceNameFields

  constructor(fields: PGN_130820_FusionDeviceNameCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionDeviceNameDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionDeviceNameMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionDeviceNameMatchFields)
}
}
pgnIdToClass['fusionDeviceName'] = (fields:any, dst:number) => new PGN_130820_FusionDeviceName(fields, dst)


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
export interface PGN_130820_FusionZoneNameInterface extends PGNInterface {
  fields: PGN_130820_FusionZoneNameFields
}

/**
 * @category PGN_130820_FusionZoneName
 */
export interface PGN_130820_FusionZoneNameFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  number: N2K_Number
  name?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionZoneName
 */
export const PGN_130820_FusionZoneNameDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
export class PGN_130820_FusionZoneName extends PGN implements PGN_130820_FusionZoneNameInterface {
  fields: PGN_130820_FusionZoneNameFields

  constructor(fields: PGN_130820_FusionZoneNameCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionZoneNameDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionZoneNameMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionZoneNameMatchFields)
}
}
pgnIdToClass['fusionZoneName'] = (fields:any, dst:number) => new PGN_130820_FusionZoneName(fields, dst)


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
export interface PGN_130820_FusionTrackPositionInterface extends PGNInterface {
  fields: PGN_130820_FusionTrackPositionFields
}

/**
 * @category PGN_130820_FusionTrackPosition
 */
export interface PGN_130820_FusionTrackPositionFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  sourceId: N2K_Number
  progress?: N2K_Duration
}

/**
 * @category PGN_130820_FusionTrackPosition
 */
export const PGN_130820_FusionTrackPositionDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
export class PGN_130820_FusionTrackPosition extends PGN implements PGN_130820_FusionTrackPositionInterface {
  fields: PGN_130820_FusionTrackPositionFields

  constructor(fields: PGN_130820_FusionTrackPositionCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionTrackPositionDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionTrackPositionMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionTrackPositionMatchFields)
}
}
pgnIdToClass['fusionTrackPosition'] = (fields:any, dst:number) => new PGN_130820_FusionTrackPosition(fields, dst)


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
export interface PGN_130820_FusionTunerInterface extends PGNInterface {
  fields: PGN_130820_FusionTunerFields
}

/**
 * @category PGN_130820_FusionTuner
 */
export interface PGN_130820_FusionTunerFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  sourceId: enums.FusionRadioSource | number
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
  prio: 7,
  fields: []
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
  sourceId: enums.FusionRadioSource | number
  scanning?: N2K_Number
  frequency?: N2K_Number
  signalStrength?: N2K_Number
  track?: N2K_StringLz
}

/**
 * @category PGN_130820_FusionTuner
 */
export class PGN_130820_FusionTuner extends PGN implements PGN_130820_FusionTunerInterface {
  fields: PGN_130820_FusionTunerFields

  constructor(fields: PGN_130820_FusionTunerCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionTunerDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionTunerMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionTunerMatchFields)
}
}
pgnIdToClass['fusionTuner'] = (fields:any, dst:number) => new PGN_130820_FusionTuner(fields, dst)


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
export interface PGN_130820_FusionMarineTunerInterface extends PGNInterface {
  fields: PGN_130820_FusionMarineTunerFields
}

/**
 * @category PGN_130820_FusionMarineTuner
 */
export interface PGN_130820_FusionMarineTunerFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionMarineTuner extends PGN implements PGN_130820_FusionMarineTunerInterface {
  fields: PGN_130820_FusionMarineTunerFields

  constructor(fields: PGN_130820_FusionMarineTunerCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionMarineTunerDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionMarineTunerMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionMarineTunerMatchFields)
}
}
pgnIdToClass['fusionMarineTuner'] = (fields:any, dst:number) => new PGN_130820_FusionMarineTuner(fields, dst)


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
export interface PGN_130820_FusionMarineSquelchInterface extends PGNInterface {
  fields: PGN_130820_FusionMarineSquelchFields
}

/**
 * @category PGN_130820_FusionMarineSquelch
 */
export interface PGN_130820_FusionMarineSquelchFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  sourceId: N2K_Number
  squelch?: N2K_Number
}

/**
 * @category PGN_130820_FusionMarineSquelch
 */
export const PGN_130820_FusionMarineSquelchDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
export class PGN_130820_FusionMarineSquelch extends PGN implements PGN_130820_FusionMarineSquelchInterface {
  fields: PGN_130820_FusionMarineSquelchFields

  constructor(fields: PGN_130820_FusionMarineSquelchCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionMarineSquelchDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionMarineSquelchMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionMarineSquelchMatchFields)
}
}
pgnIdToClass['fusionMarineSquelch'] = (fields:any, dst:number) => new PGN_130820_FusionMarineSquelch(fields, dst)


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
export interface PGN_130820_FusionMarineScanModeInterface extends PGNInterface {
  fields: PGN_130820_FusionMarineScanModeFields
}

/**
 * @category PGN_130820_FusionMarineScanMode
 */
export interface PGN_130820_FusionMarineScanModeFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  sourceId: N2K_Number
  scan?: enums.YesNo | number
}

/**
 * @category PGN_130820_FusionMarineScanMode
 */
export const PGN_130820_FusionMarineScanModeDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
  scan?: enums.YesNo | number
}

/**
 * @category PGN_130820_FusionMarineScanMode
 */
export class PGN_130820_FusionMarineScanMode extends PGN implements PGN_130820_FusionMarineScanModeInterface {
  fields: PGN_130820_FusionMarineScanModeFields

  constructor(fields: PGN_130820_FusionMarineScanModeCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionMarineScanModeDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionMarineScanModeMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionMarineScanModeMatchFields)
}
}
pgnIdToClass['fusionMarineScanMode'] = (fields:any, dst:number) => new PGN_130820_FusionMarineScanMode(fields, dst)


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
export interface PGN_130820_FusionMenuItemInterface extends PGNInterface {
  fields: PGN_130820_FusionMenuItemFields
}

/**
 * @category PGN_130820_FusionMenuItem
 */
export interface PGN_130820_FusionMenuItemFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionMenuItem extends PGN implements PGN_130820_FusionMenuItemInterface {
  fields: PGN_130820_FusionMenuItemFields

  constructor(fields: PGN_130820_FusionMenuItemCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionMenuItemDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionMenuItemMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionMenuItemMatchFields)
}
}
pgnIdToClass['fusionMenuItem'] = (fields:any, dst:number) => new PGN_130820_FusionMenuItem(fields, dst)


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
export interface PGN_130820_FusionAuxGainInterface extends PGNInterface {
  fields: PGN_130820_FusionAuxGainFields
}

/**
 * @category PGN_130820_FusionAuxGain
 */
export interface PGN_130820_FusionAuxGainFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  sourceId: N2K_Number
  gain?: N2K_Number
}

/**
 * @category PGN_130820_FusionAuxGain
 */
export const PGN_130820_FusionAuxGainDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
export class PGN_130820_FusionAuxGain extends PGN implements PGN_130820_FusionAuxGainInterface {
  fields: PGN_130820_FusionAuxGainFields

  constructor(fields: PGN_130820_FusionAuxGainCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionAuxGainDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionAuxGainMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionAuxGainMatchFields)
}
}
pgnIdToClass['fusionAuxGain'] = (fields:any, dst:number) => new PGN_130820_FusionAuxGain(fields, dst)


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
export interface PGN_130820_FusionUsbRepeatStatusInterface extends PGNInterface {
  fields: PGN_130820_FusionUsbRepeatStatusFields
}

/**
 * @category PGN_130820_FusionUsbRepeatStatus
 */
export interface PGN_130820_FusionUsbRepeatStatusFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  id?: enums.FusionSetting | number
  status?: enums.FusionRepeatStatus | number
}

/**
 * @category PGN_130820_FusionUsbRepeatStatus
 */
export const PGN_130820_FusionUsbRepeatStatusDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
  status?: enums.FusionRepeatStatus | number
}

/**
 * @category PGN_130820_FusionUsbRepeatStatus
 */
export class PGN_130820_FusionUsbRepeatStatus extends PGN implements PGN_130820_FusionUsbRepeatStatusInterface {
  fields: PGN_130820_FusionUsbRepeatStatusFields

  constructor(fields: PGN_130820_FusionUsbRepeatStatusCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionUsbRepeatStatusDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionUsbRepeatStatusMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionUsbRepeatStatusMatchFields)
}
}
pgnIdToClass['fusionUsbRepeatStatus'] = (fields:any, dst:number) => new PGN_130820_FusionUsbRepeatStatus(fields, dst)


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
export interface PGN_130820_FusionSettingInterface extends PGNInterface {
  fields: PGN_130820_FusionSettingFields
}

/**
 * @category PGN_130820_FusionSetting
 */
export interface PGN_130820_FusionSettingFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  id?: enums.FusionSetting | number
  value?: N2K_Number
}

/**
 * @category PGN_130820_FusionSetting
 */
export const PGN_130820_FusionSettingDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
  id?: enums.FusionSetting | number
  value?: N2K_Number
}

/**
 * @category PGN_130820_FusionSetting
 */
export class PGN_130820_FusionSetting extends PGN implements PGN_130820_FusionSettingInterface {
  fields: PGN_130820_FusionSettingFields

  constructor(fields: PGN_130820_FusionSettingCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionSettingDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionSettingMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionSettingMatchFields)
}
}
pgnIdToClass['fusionSetting'] = (fields:any, dst:number) => new PGN_130820_FusionSetting(fields, dst)


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
export interface PGN_130820_FusionSettingsInterface extends PGNInterface {
  fields: PGN_130820_FusionSettingsFields
}

/**
 * @category PGN_130820_FusionSettings
 */
export interface PGN_130820_FusionSettingsFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  count?: N2K_Number
  list: {
    id?: enums.FusionSetting | number
    value?: N2K_Number
  }[]
}

/**
 * @category PGN_130820_FusionSettings
 */
export const PGN_130820_FusionSettingsDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
    id?: enums.FusionSetting | number
    value?: N2K_Number
  }[]
}

/**
 * @category PGN_130820_FusionSettings
 */
export class PGN_130820_FusionSettings extends PGN implements PGN_130820_FusionSettingsInterface {
  fields: PGN_130820_FusionSettingsFields

  constructor(fields: PGN_130820_FusionSettingsCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionSettingsDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionSettingsMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionSettingsMatchFields)
}
}
pgnIdToClass['fusionSettings'] = (fields:any, dst:number) => new PGN_130820_FusionSettings(fields, dst)


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
export interface PGN_130820_FusionMuteInterface extends PGNInterface {
  fields: PGN_130820_FusionMuteFields
}

/**
 * @category PGN_130820_FusionMute
 */
export interface PGN_130820_FusionMuteFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  mute?: enums.FusionMuteCommand | number
}

/**
 * @category PGN_130820_FusionMute
 */
export const PGN_130820_FusionMuteDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
  mute?: enums.FusionMuteCommand | number
}

/**
 * @category PGN_130820_FusionMute
 */
export class PGN_130820_FusionMute extends PGN implements PGN_130820_FusionMuteInterface {
  fields: PGN_130820_FusionMuteFields

  constructor(fields: PGN_130820_FusionMuteCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionMuteDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionMuteMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionMuteMatchFields)
}
}
pgnIdToClass['fusionMute'] = (fields:any, dst:number) => new PGN_130820_FusionMute(fields, dst)


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
export interface PGN_130820_FusionBalanceInterface extends PGNInterface {
  fields: PGN_130820_FusionBalanceFields
}

/**
 * @category PGN_130820_FusionBalance
 */
export interface PGN_130820_FusionBalanceFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  zone: N2K_Number
  value?: N2K_Number
}

/**
 * @category PGN_130820_FusionBalance
 */
export const PGN_130820_FusionBalanceDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
export class PGN_130820_FusionBalance extends PGN implements PGN_130820_FusionBalanceInterface {
  fields: PGN_130820_FusionBalanceFields

  constructor(fields: PGN_130820_FusionBalanceCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionBalanceDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionBalanceMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionBalanceMatchFields)
}
}
pgnIdToClass['fusionBalance'] = (fields:any, dst:number) => new PGN_130820_FusionBalance(fields, dst)


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
export interface PGN_130820_FusionLowPassFilterInterface extends PGNInterface {
  fields: PGN_130820_FusionLowPassFilterFields
}

/**
 * @category PGN_130820_FusionLowPassFilter
 */
export interface PGN_130820_FusionLowPassFilterFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  zone: N2K_Number
  filter?: N2K_Number
}

/**
 * @category PGN_130820_FusionLowPassFilter
 */
export const PGN_130820_FusionLowPassFilterDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
export class PGN_130820_FusionLowPassFilter extends PGN implements PGN_130820_FusionLowPassFilterInterface {
  fields: PGN_130820_FusionLowPassFilterFields

  constructor(fields: PGN_130820_FusionLowPassFilterCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionLowPassFilterDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionLowPassFilterMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionLowPassFilterMatchFields)
}
}
pgnIdToClass['fusionLowPassFilter'] = (fields:any, dst:number) => new PGN_130820_FusionLowPassFilter(fields, dst)


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
export interface PGN_130820_FusionSublevelsInterface extends PGNInterface {
  fields: PGN_130820_FusionSublevelsFields
}

/**
 * @category PGN_130820_FusionSublevels
 */
export interface PGN_130820_FusionSublevelsFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionSublevels extends PGN implements PGN_130820_FusionSublevelsInterface {
  fields: PGN_130820_FusionSublevelsFields

  constructor(fields: PGN_130820_FusionSublevelsCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionSublevelsDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionSublevelsMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionSublevelsMatchFields)
}
}
pgnIdToClass['fusionSublevels'] = (fields:any, dst:number) => new PGN_130820_FusionSublevels(fields, dst)


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
export interface PGN_130820_FusionEqInterface extends PGNInterface {
  fields: PGN_130820_FusionEqFields
}

/**
 * @category PGN_130820_FusionEq
 */
export interface PGN_130820_FusionEqFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionEq extends PGN implements PGN_130820_FusionEqInterface {
  fields: PGN_130820_FusionEqFields

  constructor(fields: PGN_130820_FusionEqCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionEqDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionEqMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionEqMatchFields)
}
}
pgnIdToClass['fusionEq'] = (fields:any, dst:number) => new PGN_130820_FusionEq(fields, dst)


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
export interface PGN_130820_FusionVolumeLimitsInterface extends PGNInterface {
  fields: PGN_130820_FusionVolumeLimitsFields
}

/**
 * @category PGN_130820_FusionVolumeLimits
 */
export interface PGN_130820_FusionVolumeLimitsFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionVolumeLimits extends PGN implements PGN_130820_FusionVolumeLimitsInterface {
  fields: PGN_130820_FusionVolumeLimitsFields

  constructor(fields: PGN_130820_FusionVolumeLimitsCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionVolumeLimitsDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionVolumeLimitsMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionVolumeLimitsMatchFields)
}
}
pgnIdToClass['fusionVolumeLimits'] = (fields:any, dst:number) => new PGN_130820_FusionVolumeLimits(fields, dst)


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
export interface PGN_130820_FusionVolumesInterface extends PGNInterface {
  fields: PGN_130820_FusionVolumesFields
}

/**
 * @category PGN_130820_FusionVolumes
 */
export interface PGN_130820_FusionVolumesFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionVolumes extends PGN implements PGN_130820_FusionVolumesInterface {
  fields: PGN_130820_FusionVolumesFields

  constructor(fields: PGN_130820_FusionVolumesCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionVolumesDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionVolumesMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionVolumesMatchFields)
}
}
pgnIdToClass['fusionVolumes'] = (fields:any, dst:number) => new PGN_130820_FusionVolumes(fields, dst)


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
export interface PGN_130820_FusionCapabilitiesInterface extends PGNInterface {
  fields: PGN_130820_FusionCapabilitiesFields
}

/**
 * @category PGN_130820_FusionCapabilities
 */
export interface PGN_130820_FusionCapabilitiesFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionCapabilities extends PGN implements PGN_130820_FusionCapabilitiesInterface {
  fields: PGN_130820_FusionCapabilitiesFields

  constructor(fields: PGN_130820_FusionCapabilitiesCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionCapabilitiesDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionCapabilitiesMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionCapabilitiesMatchFields)
}
}
pgnIdToClass['fusionCapabilities'] = (fields:any, dst:number) => new PGN_130820_FusionCapabilities(fields, dst)


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
export interface PGN_130820_FusionLineLevelControlInterface extends PGNInterface {
  fields: PGN_130820_FusionLineLevelControlFields
}

/**
 * @category PGN_130820_FusionLineLevelControl
 */
export interface PGN_130820_FusionLineLevelControlFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  zone: N2K_Number
  control?: N2K_Number
}

/**
 * @category PGN_130820_FusionLineLevelControl
 */
export const PGN_130820_FusionLineLevelControlDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
export class PGN_130820_FusionLineLevelControl extends PGN implements PGN_130820_FusionLineLevelControlInterface {
  fields: PGN_130820_FusionLineLevelControlFields

  constructor(fields: PGN_130820_FusionLineLevelControlCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionLineLevelControlDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionLineLevelControlMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionLineLevelControlMatchFields)
}
}
pgnIdToClass['fusionLineLevelControl'] = (fields:any, dst:number) => new PGN_130820_FusionLineLevelControl(fields, dst)


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
export interface PGN_130820_FusionPowerStateInterface extends PGNInterface {
  fields: PGN_130820_FusionPowerStateFields
}

/**
 * @category PGN_130820_FusionPowerState
 */
export interface PGN_130820_FusionPowerStateFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  state?: enums.FusionPowerState | number
}

/**
 * @category PGN_130820_FusionPowerState
 */
export const PGN_130820_FusionPowerStateDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
  state?: enums.FusionPowerState | number
}

/**
 * @category PGN_130820_FusionPowerState
 */
export class PGN_130820_FusionPowerState extends PGN implements PGN_130820_FusionPowerStateInterface {
  fields: PGN_130820_FusionPowerStateFields

  constructor(fields: PGN_130820_FusionPowerStateCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionPowerStateDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionPowerStateMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionPowerStateMatchFields)
}
}
pgnIdToClass['fusionPowerState'] = (fields:any, dst:number) => new PGN_130820_FusionPowerState(fields, dst)


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
export interface PGN_130820_FusionSiriusxmInterface extends PGNInterface {
  fields: PGN_130820_FusionSiriusxmFields
}

/**
 * @category PGN_130820_FusionSiriusxm
 */
export interface PGN_130820_FusionSiriusxmFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  sourceId: N2K_Number
  comState?: enums.FusionSiriusComState | number
  alert?: enums.FusionSiriusComState | number
  advisoryChannel?: N2K_Number
  tuningMode?: enums.FusionSiriusTuningMode | number
}

/**
 * @category PGN_130820_FusionSiriusxm
 */
export const PGN_130820_FusionSiriusxmDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
  comState?: enums.FusionSiriusComState | number
  alert?: enums.FusionSiriusComState | number
  advisoryChannel?: N2K_Number
  tuningMode?: enums.FusionSiriusTuningMode | number
}

/**
 * @category PGN_130820_FusionSiriusxm
 */
export class PGN_130820_FusionSiriusxm extends PGN implements PGN_130820_FusionSiriusxmInterface {
  fields: PGN_130820_FusionSiriusxmFields

  constructor(fields: PGN_130820_FusionSiriusxmCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionSiriusxmDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionSiriusxmMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionSiriusxmMatchFields)
}
}
pgnIdToClass['fusionSiriusxm'] = (fields:any, dst:number) => new PGN_130820_FusionSiriusxm(fields, dst)


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
export interface PGN_130820_FusionSiriusxmChannelInterface extends PGNInterface {
  fields: PGN_130820_FusionSiriusxmChannelFields
}

/**
 * @category PGN_130820_FusionSiriusxmChannel
 */
export interface PGN_130820_FusionSiriusxmChannelFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionSiriusxmChannel extends PGN implements PGN_130820_FusionSiriusxmChannelInterface {
  fields: PGN_130820_FusionSiriusxmChannelFields

  constructor(fields: PGN_130820_FusionSiriusxmChannelCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionSiriusxmChannelDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionSiriusxmChannelMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionSiriusxmChannelMatchFields)
}
}
pgnIdToClass['fusionSiriusxmChannel'] = (fields:any, dst:number) => new PGN_130820_FusionSiriusxmChannel(fields, dst)


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
export interface PGN_130820_FusionSiriusxmTitleInterface extends PGNInterface {
  fields: PGN_130820_FusionSiriusxmTitleFields
}

/**
 * @category PGN_130820_FusionSiriusxmTitle
 */
export interface PGN_130820_FusionSiriusxmTitleFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionSiriusxmTitle extends PGN implements PGN_130820_FusionSiriusxmTitleInterface {
  fields: PGN_130820_FusionSiriusxmTitleFields

  constructor(fields: PGN_130820_FusionSiriusxmTitleCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionSiriusxmTitleDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionSiriusxmTitleMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionSiriusxmTitleMatchFields)
}
}
pgnIdToClass['fusionSiriusxmTitle'] = (fields:any, dst:number) => new PGN_130820_FusionSiriusxmTitle(fields, dst)


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
export interface PGN_130820_FusionSiriusxmArtistInterface extends PGNInterface {
  fields: PGN_130820_FusionSiriusxmArtistFields
}

/**
 * @category PGN_130820_FusionSiriusxmArtist
 */
export interface PGN_130820_FusionSiriusxmArtistFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionSiriusxmArtist extends PGN implements PGN_130820_FusionSiriusxmArtistInterface {
  fields: PGN_130820_FusionSiriusxmArtistFields

  constructor(fields: PGN_130820_FusionSiriusxmArtistCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionSiriusxmArtistDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionSiriusxmArtistMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionSiriusxmArtistMatchFields)
}
}
pgnIdToClass['fusionSiriusxmArtist'] = (fields:any, dst:number) => new PGN_130820_FusionSiriusxmArtist(fields, dst)


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
export interface PGN_130820_FusionSiriusxmContentInfoInterface extends PGNInterface {
  fields: PGN_130820_FusionSiriusxmContentInfoFields
}

/**
 * @category PGN_130820_FusionSiriusxmContentInfo
 */
export interface PGN_130820_FusionSiriusxmContentInfoFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionSiriusxmContentInfo extends PGN implements PGN_130820_FusionSiriusxmContentInfoInterface {
  fields: PGN_130820_FusionSiriusxmContentInfoFields

  constructor(fields: PGN_130820_FusionSiriusxmContentInfoCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionSiriusxmContentInfoDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionSiriusxmContentInfoMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionSiriusxmContentInfoMatchFields)
}
}
pgnIdToClass['fusionSiriusxmContentInfo'] = (fields:any, dst:number) => new PGN_130820_FusionSiriusxmContentInfo(fields, dst)


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
export interface PGN_130820_FusionSiriusxmCategoryInterface extends PGNInterface {
  fields: PGN_130820_FusionSiriusxmCategoryFields
}

/**
 * @category PGN_130820_FusionSiriusxmCategory
 */
export interface PGN_130820_FusionSiriusxmCategoryFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionSiriusxmCategory extends PGN implements PGN_130820_FusionSiriusxmCategoryInterface {
  fields: PGN_130820_FusionSiriusxmCategoryFields

  constructor(fields: PGN_130820_FusionSiriusxmCategoryCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionSiriusxmCategoryDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionSiriusxmCategoryMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionSiriusxmCategoryMatchFields)
}
}
pgnIdToClass['fusionSiriusxmCategory'] = (fields:any, dst:number) => new PGN_130820_FusionSiriusxmCategory(fields, dst)


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
export interface PGN_130820_FusionSiriusxmSignalInterface extends PGNInterface {
  fields: PGN_130820_FusionSiriusxmSignalFields
}

/**
 * @category PGN_130820_FusionSiriusxmSignal
 */
export interface PGN_130820_FusionSiriusxmSignalFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
  sourceId: N2K_Number
  signal?: N2K_Number
}

/**
 * @category PGN_130820_FusionSiriusxmSignal
 */
export const PGN_130820_FusionSiriusxmSignalDefaults = {
  pgn: 130820,
  dst: 255,
  prio: 7,
  fields: []
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
export class PGN_130820_FusionSiriusxmSignal extends PGN implements PGN_130820_FusionSiriusxmSignalInterface {
  fields: PGN_130820_FusionSiriusxmSignalFields

  constructor(fields: PGN_130820_FusionSiriusxmSignalCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionSiriusxmSignalDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionSiriusxmSignalMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionSiriusxmSignalMatchFields)
}
}
pgnIdToClass['fusionSiriusxmSignal'] = (fields:any, dst:number) => new PGN_130820_FusionSiriusxmSignal(fields, dst)


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
export interface PGN_130820_FusionSiriusxmPresetsInterface extends PGNInterface {
  fields: PGN_130820_FusionSiriusxmPresetsFields
}

/**
 * @category PGN_130820_FusionSiriusxmPresets
 */
export interface PGN_130820_FusionSiriusxmPresetsFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: enums.FusionStatusMessageId | number
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
  prio: 7,
  fields: []
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
export class PGN_130820_FusionSiriusxmPresets extends PGN implements PGN_130820_FusionSiriusxmPresetsInterface {
  fields: PGN_130820_FusionSiriusxmPresetsFields

  constructor(fields: PGN_130820_FusionSiriusxmPresetsCreateArgs, dst: number = 255) {
    super(PGN_130820_FusionSiriusxmPresetsDefaults)
    this.dst = dst
    this.fields = { ...PGN_130820_FusionSiriusxmPresetsMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130820_FusionSiriusxmPresetsMatchFields)
}
}
pgnIdToClass['fusionSiriusxmPresets'] = (fields:any, dst:number) => new PGN_130820_FusionSiriusxmPresets(fields, dst)


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
export interface PGN_130821_NavicoAsciiDataInterface extends PGNInterface {
  fields: PGN_130821_NavicoAsciiDataFields
}

/**
 * @category PGN_130821_NavicoAsciiData
 */
export interface PGN_130821_NavicoAsciiDataFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  a?: N2K_Number
  message?: N2K_StringFix
}

/**
 * @category PGN_130821_NavicoAsciiData
 */
export const PGN_130821_NavicoAsciiDataDefaults = {
  pgn: 130821,
  dst: 255,
  prio: 7,
  fields: []
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
export class PGN_130821_NavicoAsciiData extends PGN implements PGN_130821_NavicoAsciiDataInterface {
  fields: PGN_130821_NavicoAsciiDataFields

  constructor(fields: PGN_130821_NavicoAsciiDataCreateArgs, dst: number = 255) {
    super(PGN_130821_NavicoAsciiDataDefaults)
    this.dst = dst
    this.fields = { ...PGN_130821_NavicoAsciiDataMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130821_NavicoAsciiDataMatchFields)
}
}
pgnIdToClass['navicoAsciiData'] = (fields:any, dst:number) => new PGN_130821_NavicoAsciiData(fields, dst)


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
export interface PGN_130821_FurunoUnknown130821Interface extends PGNInterface {
  fields: PGN_130821_FurunoUnknown130821Fields
}

/**
 * @category PGN_130821_FurunoUnknown130821
 */
export interface PGN_130821_FurunoUnknown130821Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
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
export class PGN_130821_FurunoUnknown130821 extends PGN implements PGN_130821_FurunoUnknown130821Interface {
  fields: PGN_130821_FurunoUnknown130821Fields

  constructor(fields: PGN_130821_FurunoUnknown130821CreateArgs, dst: number = 255) {
    super(PGN_130821_FurunoUnknown130821Defaults)
    this.dst = dst
    this.fields = { ...PGN_130821_FurunoUnknown130821MatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130821_FurunoUnknown130821MatchFields)
}
}
pgnIdToClass['furunoUnknown130821'] = (fields:any, dst:number) => new PGN_130821_FurunoUnknown130821(fields, dst)


/**
 * PGN: 130822
 *
 * Description: Navico: Unknown 1
 *
 * @category PGN_130822
 */
export interface PGN_130822Interface extends PGNInterface {
  fields: PGN_130822Fields
}

/**
 * @category PGN_130822
 */
export interface PGN_130822Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  data?: N2K_Binary
}

/**
 * @category PGN_130822
 */
export const PGN_130822Defaults = {
  pgn: 130822,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130822
 */
export class PGN_130822 extends PGN implements PGN_130822Interface {
  fields: PGN_130822Fields

  constructor(fields: PGN_130822Fields, dst: number = 255) {
    super(PGN_130822Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['navicoUnknown1'] = (fields:any, dst:number) => new PGN_130822(fields, dst)


/**
 * PGN: 130823
 *
 * Description: Maretron: Proprietary Temperature High Range
 *
 * @category PGN_130823
 */
export interface PGN_130823Interface extends PGNInterface {
  fields: PGN_130823Fields
}

/**
 * @category PGN_130823
 */
export interface PGN_130823Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  sid?: N2K_Number
  instance: N2K_Number
  source?: enums.TemperatureSource | number
  actualTemperature?: N2K_Number
  setTemperature?: N2K_Number
}

/**
 * @category PGN_130823
 */
export const PGN_130823Defaults = {
  pgn: 130823,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130823
 */
export class PGN_130823 extends PGN implements PGN_130823Interface {
  fields: PGN_130823Fields

  constructor(fields: PGN_130823Fields, dst: number = 255) {
    super(PGN_130823Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['maretronProprietaryTemperatureHighRange'] = (fields:any, dst:number) => new PGN_130823(fields, dst)


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
 * @category PGN_130824_BGKeyValueData
 */
export interface PGN_130824_BGKeyValueDataInterface extends PGNInterface {
  fields: PGN_130824_BGKeyValueDataFields
}

/**
 * @category PGN_130824_BGKeyValueData
 */
export interface PGN_130824_BGKeyValueDataFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  list: {
    key?: N2K_DynamicFieldKey
    length?: N2K_DynamicFieldLength
    value?: N2K_DynamicFieldValue
  }[]
}

/**
 * @category PGN_130824_BGKeyValueData
 */
export const PGN_130824_BGKeyValueDataDefaults = {
  pgn: 130824,
  dst: 255,
  prio: 2,
  fields: []
}

/**
 * @category PGN_130824_BGKeyValueData
 */
export const PGN_130824_BGKeyValueDataMatchFields = {
  manufacturerCode: enums.ManufacturerCode.BG,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130824_BGKeyValueData
 */
export interface PGN_130824_BGKeyValueDataCreateArgs {
  reserved?: number
  list: {
    key?: N2K_DynamicFieldKey
    length?: N2K_DynamicFieldLength
    value?: N2K_DynamicFieldValue
  }[]
}

/**
 * @category PGN_130824_BGKeyValueData
 */
export class PGN_130824_BGKeyValueData extends PGN implements PGN_130824_BGKeyValueDataInterface {
  fields: PGN_130824_BGKeyValueDataFields

  constructor(fields: PGN_130824_BGKeyValueDataCreateArgs, dst: number = 255) {
    super(PGN_130824_BGKeyValueDataDefaults)
    this.dst = dst
    this.fields = { ...PGN_130824_BGKeyValueDataMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130824_BGKeyValueDataMatchFields)
}
}
pgnIdToClass['bGKeyValueData'] = (fields:any, dst:number) => new PGN_130824_BGKeyValueData(fields, dst)


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
export interface PGN_130824_MaretronAnnunciatorInterface extends PGNInterface {
  fields: PGN_130824_MaretronAnnunciatorFields
}

/**
 * @category PGN_130824_MaretronAnnunciator
 */
export interface PGN_130824_MaretronAnnunciatorFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
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
export class PGN_130824_MaretronAnnunciator extends PGN implements PGN_130824_MaretronAnnunciatorInterface {
  fields: PGN_130824_MaretronAnnunciatorFields

  constructor(fields: PGN_130824_MaretronAnnunciatorCreateArgs, dst: number = 255) {
    super(PGN_130824_MaretronAnnunciatorDefaults)
    this.dst = dst
    this.fields = { ...PGN_130824_MaretronAnnunciatorMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130824_MaretronAnnunciatorMatchFields)
}
}
pgnIdToClass['maretronAnnunciator'] = (fields:any, dst:number) => new PGN_130824_MaretronAnnunciator(fields, dst)


/**
 * PGN: 130825
 *
 * Description: Navico: Unknown 2
 *
 * @category PGN_130825
 */
export interface PGN_130825Interface extends PGNInterface {
  fields: PGN_130825Fields
}

/**
 * @category PGN_130825
 */
export interface PGN_130825Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  data?: N2K_Binary
}

/**
 * @category PGN_130825
 */
export const PGN_130825Defaults = {
  pgn: 130825,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130825
 */
export class PGN_130825 extends PGN implements PGN_130825Interface {
  fields: PGN_130825Fields

  constructor(fields: PGN_130825Fields, dst: number = 255) {
    super(PGN_130825Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['navicoUnknown2'] = (fields:any, dst:number) => new PGN_130825(fields, dst)


/**
 * PGN: 130827
 *
 * Description: Lowrance: unknown
 *
 * @category PGN_130827
 */
export interface PGN_130827Interface extends PGNInterface {
  fields: PGN_130827Fields
}

/**
 * @category PGN_130827
 */
export interface PGN_130827Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130827
 */
export class PGN_130827 extends PGN implements PGN_130827Interface {
  fields: PGN_130827Fields

  constructor(fields: PGN_130827Fields, dst: number = 255) {
    super(PGN_130827Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['lowranceUnknown'] = (fields:any, dst:number) => new PGN_130827(fields, dst)


/**
 * PGN: 130828
 *
 * Description: Simnet: Set Serial Number
 *
 * @category PGN_130828
 */
export interface PGN_130828Interface extends PGNInterface {
  fields: PGN_130828Fields
}

/**
 * @category PGN_130828
 */
export interface PGN_130828Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
}

/**
 * @category PGN_130828
 */
export const PGN_130828Defaults = {
  pgn: 130828,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130828
 */
export class PGN_130828 extends PGN implements PGN_130828Interface {
  fields: PGN_130828Fields

  constructor(fields: PGN_130828Fields, dst: number = 255) {
    super(PGN_130828Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetSetSerialNumber'] = (fields:any, dst:number) => new PGN_130828(fields, dst)


/**
 * PGN: 130831
 *
 * Description: Suzuki: Engine and Storage Device Config
 *
 * @category PGN_130831
 */
export interface PGN_130831Interface extends PGNInterface {
  fields: PGN_130831Fields
}

/**
 * @category PGN_130831
 */
export interface PGN_130831Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
}

/**
 * @category PGN_130831
 */
export const PGN_130831Defaults = {
  pgn: 130831,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130831
 */
export class PGN_130831 extends PGN implements PGN_130831Interface {
  fields: PGN_130831Fields

  constructor(fields: PGN_130831Fields, dst: number = 255) {
    super(PGN_130831Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['suzukiEngineAndStorageDeviceConfig'] = (fields:any, dst:number) => new PGN_130831(fields, dst)


/**
 * PGN: 130832
 *
 * Description: Simnet: Fuel Used - High Resolution
 *
 * @category PGN_130832
 */
export interface PGN_130832Interface extends PGNInterface {
  fields: PGN_130832Fields
}

/**
 * @category PGN_130832
 */
export interface PGN_130832Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
}

/**
 * @category PGN_130832
 */
export const PGN_130832Defaults = {
  pgn: 130832,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130832
 */
export class PGN_130832 extends PGN implements PGN_130832Interface {
  fields: PGN_130832Fields

  constructor(fields: PGN_130832Fields, dst: number = 255) {
    super(PGN_130832Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetFuelUsedHighResolution'] = (fields:any, dst:number) => new PGN_130832(fields, dst)


/**
 * PGN: 130833
 *
 * Description: B&G: User and Remote rename
 *
 * @category PGN_130833
 */
export interface PGN_130833Interface extends PGNInterface {
  fields: PGN_130833Fields
}

/**
 * @category PGN_130833
 */
export interface PGN_130833Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  dataType?: N2K_DynamicFieldKey
  length?: N2K_Number
  reserved6?: number
  decimals?: enums.BandgDecimals | number
  shortName?: N2K_StringFix
  longName?: N2K_StringFix
}

/**
 * @category PGN_130833
 */
export const PGN_130833Defaults = {
  pgn: 130833,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130833
 */
export class PGN_130833 extends PGN implements PGN_130833Interface {
  fields: PGN_130833Fields

  constructor(fields: PGN_130833Fields, dst: number = 255) {
    super(PGN_130833Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['bGUserAndRemoteRename'] = (fields:any, dst:number) => new PGN_130833(fields, dst)


/**
 * PGN: 130834
 *
 * Description: Simnet: Engine and Tank Configuration
 *
 * @category PGN_130834
 */
export interface PGN_130834Interface extends PGNInterface {
  fields: PGN_130834Fields
}

/**
 * @category PGN_130834
 */
export interface PGN_130834Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
}

/**
 * @category PGN_130834
 */
export const PGN_130834Defaults = {
  pgn: 130834,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130834
 */
export class PGN_130834 extends PGN implements PGN_130834Interface {
  fields: PGN_130834Fields

  constructor(fields: PGN_130834Fields, dst: number = 255) {
    super(PGN_130834Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetEngineAndTankConfiguration'] = (fields:any, dst:number) => new PGN_130834(fields, dst)


/**
 * PGN: 130835
 *
 * Description: Simnet: Set Engine and Tank Configuration
 *
 * @category PGN_130835
 */
export interface PGN_130835Interface extends PGNInterface {
  fields: PGN_130835Fields
}

/**
 * @category PGN_130835
 */
export interface PGN_130835Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
}

/**
 * @category PGN_130835
 */
export const PGN_130835Defaults = {
  pgn: 130835,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130835
 */
export class PGN_130835 extends PGN implements PGN_130835Interface {
  fields: PGN_130835Fields

  constructor(fields: PGN_130835Fields, dst: number = 255) {
    super(PGN_130835Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetSetEngineAndTankConfiguration'] = (fields:any, dst:number) => new PGN_130835(fields, dst)


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
export interface PGN_130836_SimnetFluidLevelSensorConfigurationInterface extends PGNInterface {
  fields: PGN_130836_SimnetFluidLevelSensorConfigurationFields
}

/**
 * @category PGN_130836_SimnetFluidLevelSensorConfiguration
 */
export interface PGN_130836_SimnetFluidLevelSensorConfigurationFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  c?: N2K_Number
  device: N2K_Number
  instance: N2K_Number
  f?: N2K_Number
  tankType?: enums.TankType | number
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
  prio: 3,
  fields: []
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
  tankType?: enums.TankType | number
  capacity?: N2K_Number
  g?: N2K_Number
  h?: N2K_Number
  i?: N2K_Number
}

/**
 * @category PGN_130836_SimnetFluidLevelSensorConfiguration
 */
export class PGN_130836_SimnetFluidLevelSensorConfiguration extends PGN implements PGN_130836_SimnetFluidLevelSensorConfigurationInterface {
  fields: PGN_130836_SimnetFluidLevelSensorConfigurationFields

  constructor(fields: PGN_130836_SimnetFluidLevelSensorConfigurationCreateArgs, dst: number = 255) {
    super(PGN_130836_SimnetFluidLevelSensorConfigurationDefaults)
    this.dst = dst
    this.fields = { ...PGN_130836_SimnetFluidLevelSensorConfigurationMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130836_SimnetFluidLevelSensorConfigurationMatchFields)
}
}
pgnIdToClass['simnetFluidLevelSensorConfiguration'] = (fields:any, dst:number) => new PGN_130836_SimnetFluidLevelSensorConfiguration(fields, dst)


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
export interface PGN_130836_MaretronSwitchStatusCounterInterface extends PGNInterface {
  fields: PGN_130836_MaretronSwitchStatusCounterFields
}

/**
 * @category PGN_130836_MaretronSwitchStatusCounter
 */
export interface PGN_130836_MaretronSwitchStatusCounterFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  instance: N2K_Number
  indicatorNumber?: N2K_Number
  startDate?: N2K_Date
  startTime?: N2K_Time
  offCounter?: N2K_Number
  onCounter?: N2K_Number
  errorCounter?: N2K_Number
  switchStatus?: enums.OffOn | number
  reserved12?: number
}

/**
 * @category PGN_130836_MaretronSwitchStatusCounter
 */
export const PGN_130836_MaretronSwitchStatusCounterDefaults = {
  pgn: 130836,
  dst: 255,
  prio: 6,
  fields: []
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
  switchStatus?: enums.OffOn | number
  reserved12?: number
}

/**
 * @category PGN_130836_MaretronSwitchStatusCounter
 */
export class PGN_130836_MaretronSwitchStatusCounter extends PGN implements PGN_130836_MaretronSwitchStatusCounterInterface {
  fields: PGN_130836_MaretronSwitchStatusCounterFields

  constructor(fields: PGN_130836_MaretronSwitchStatusCounterCreateArgs, dst: number = 255) {
    super(PGN_130836_MaretronSwitchStatusCounterDefaults)
    this.dst = dst
    this.fields = { ...PGN_130836_MaretronSwitchStatusCounterMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130836_MaretronSwitchStatusCounterMatchFields)
}
}
pgnIdToClass['maretronSwitchStatusCounter'] = (fields:any, dst:number) => new PGN_130836_MaretronSwitchStatusCounter(fields, dst)


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
export interface PGN_130837_SimnetFuelFlowTurbineConfigurationInterface extends PGNInterface {
  fields: PGN_130837_SimnetFuelFlowTurbineConfigurationFields
}

/**
 * @category PGN_130837_SimnetFuelFlowTurbineConfiguration
 */
export interface PGN_130837_SimnetFuelFlowTurbineConfigurationFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
}

/**
 * @category PGN_130837_SimnetFuelFlowTurbineConfiguration
 */
export const PGN_130837_SimnetFuelFlowTurbineConfigurationDefaults = {
  pgn: 130837,
  dst: 255,
  prio: 3,
  fields: []
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
export class PGN_130837_SimnetFuelFlowTurbineConfiguration extends PGN implements PGN_130837_SimnetFuelFlowTurbineConfigurationInterface {
  fields: PGN_130837_SimnetFuelFlowTurbineConfigurationFields

  constructor(fields: PGN_130837_SimnetFuelFlowTurbineConfigurationCreateArgs, dst: number = 255) {
    super(PGN_130837_SimnetFuelFlowTurbineConfigurationDefaults)
    this.dst = dst
    this.fields = { ...PGN_130837_SimnetFuelFlowTurbineConfigurationMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130837_SimnetFuelFlowTurbineConfigurationMatchFields)
}
}
pgnIdToClass['simnetFuelFlowTurbineConfiguration'] = (fields:any, dst:number) => new PGN_130837_SimnetFuelFlowTurbineConfiguration(fields, dst)


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
export interface PGN_130837_MaretronSwitchStatusTimerInterface extends PGNInterface {
  fields: PGN_130837_MaretronSwitchStatusTimerFields
}

/**
 * @category PGN_130837_MaretronSwitchStatusTimer
 */
export interface PGN_130837_MaretronSwitchStatusTimerFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  instance: N2K_Number
  indicatorNumber?: N2K_Number
  startDate?: N2K_Date
  startTime?: N2K_Time
  accumulatedOffPeriod?: N2K_Duration
  accumulatedOnPeriod?: N2K_Duration
  accumulatedErrorPeriod?: N2K_Duration
  switchStatus?: enums.OffOn | number
  reserved12?: number
}

/**
 * @category PGN_130837_MaretronSwitchStatusTimer
 */
export const PGN_130837_MaretronSwitchStatusTimerDefaults = {
  pgn: 130837,
  dst: 255,
  prio: 6,
  fields: []
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
  switchStatus?: enums.OffOn | number
  reserved12?: number
}

/**
 * @category PGN_130837_MaretronSwitchStatusTimer
 */
export class PGN_130837_MaretronSwitchStatusTimer extends PGN implements PGN_130837_MaretronSwitchStatusTimerInterface {
  fields: PGN_130837_MaretronSwitchStatusTimerFields

  constructor(fields: PGN_130837_MaretronSwitchStatusTimerCreateArgs, dst: number = 255) {
    super(PGN_130837_MaretronSwitchStatusTimerDefaults)
    this.dst = dst
    this.fields = { ...PGN_130837_MaretronSwitchStatusTimerMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130837_MaretronSwitchStatusTimerMatchFields)
}
}
pgnIdToClass['maretronSwitchStatusTimer'] = (fields:any, dst:number) => new PGN_130837_MaretronSwitchStatusTimer(fields, dst)


/**
 * PGN: 130838
 *
 * Description: Simnet: Fluid Level Warning
 *
 * @category PGN_130838
 */
export interface PGN_130838Interface extends PGNInterface {
  fields: PGN_130838Fields
}

/**
 * @category PGN_130838
 */
export interface PGN_130838Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
}

/**
 * @category PGN_130838
 */
export const PGN_130838Defaults = {
  pgn: 130838,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130838
 */
export class PGN_130838 extends PGN implements PGN_130838Interface {
  fields: PGN_130838Fields

  constructor(fields: PGN_130838Fields, dst: number = 255) {
    super(PGN_130838Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetFluidLevelWarning'] = (fields:any, dst:number) => new PGN_130838(fields, dst)


/**
 * PGN: 130839
 *
 * Description: Simnet: Pressure Sensor Configuration
 *
 * @category PGN_130839
 */
export interface PGN_130839Interface extends PGNInterface {
  fields: PGN_130839Fields
}

/**
 * @category PGN_130839
 */
export interface PGN_130839Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
}

/**
 * @category PGN_130839
 */
export const PGN_130839Defaults = {
  pgn: 130839,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130839
 */
export class PGN_130839 extends PGN implements PGN_130839Interface {
  fields: PGN_130839Fields

  constructor(fields: PGN_130839Fields, dst: number = 255) {
    super(PGN_130839Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetPressureSensorConfiguration'] = (fields:any, dst:number) => new PGN_130839(fields, dst)


/**
 * PGN: 130840
 *
 * Description: Simnet: Data User Group Configuration
 *
 * @category PGN_130840
 */
export interface PGN_130840Interface extends PGNInterface {
  fields: PGN_130840Fields
}

/**
 * @category PGN_130840
 */
export interface PGN_130840Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
}

/**
 * @category PGN_130840
 */
export const PGN_130840Defaults = {
  pgn: 130840,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130840
 */
export class PGN_130840 extends PGN implements PGN_130840Interface {
  fields: PGN_130840Fields

  constructor(fields: PGN_130840Fields, dst: number = 255) {
    super(PGN_130840Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetDataUserGroupConfiguration'] = (fields:any, dst:number) => new PGN_130840(fields, dst)


/**
 * PGN: 130842
 *
 * Description: Simnet: AIS Class B static data (msg 24 Part A)
 *
 * Match: Manufacturer Code == Simrad<br>
 * Match: Industry Code == Marine Industry<br>
 *
 * @category PGN_130842_SimnetAisClassBStaticDataMsg24PartA
 */
export interface PGN_130842_SimnetAisClassBStaticDataMsg24PartAInterface extends PGNInterface {
  fields: PGN_130842_SimnetAisClassBStaticDataMsg24PartAFields
}

/**
 * @category PGN_130842_SimnetAisClassBStaticDataMsg24PartA
 */
export interface PGN_130842_SimnetAisClassBStaticDataMsg24PartAFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: N2K_Number
  repeatIndicator?: enums.RepeatIndicator | number
  d?: N2K_Number
  e?: N2K_Number
  userId: N2K_Mmsi
  name?: N2K_StringFix
}

/**
 * @category PGN_130842_SimnetAisClassBStaticDataMsg24PartA
 */
export const PGN_130842_SimnetAisClassBStaticDataMsg24PartADefaults = {
  pgn: 130842,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130842_SimnetAisClassBStaticDataMsg24PartA
 */
export const PGN_130842_SimnetAisClassBStaticDataMsg24PartAMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
}

/**
 * @category PGN_130842_SimnetAisClassBStaticDataMsg24PartA
 */
export interface PGN_130842_SimnetAisClassBStaticDataMsg24PartACreateArgs {
  reserved?: number
  messageId: N2K_Number
  repeatIndicator?: enums.RepeatIndicator | number
  d?: N2K_Number
  e?: N2K_Number
  userId: N2K_Mmsi
  name?: N2K_StringFix
}

/**
 * @category PGN_130842_SimnetAisClassBStaticDataMsg24PartA
 */
export class PGN_130842_SimnetAisClassBStaticDataMsg24PartA extends PGN implements PGN_130842_SimnetAisClassBStaticDataMsg24PartAInterface {
  fields: PGN_130842_SimnetAisClassBStaticDataMsg24PartAFields

  constructor(fields: PGN_130842_SimnetAisClassBStaticDataMsg24PartACreateArgs, dst: number = 255) {
    super(PGN_130842_SimnetAisClassBStaticDataMsg24PartADefaults)
    this.dst = dst
    this.fields = { ...PGN_130842_SimnetAisClassBStaticDataMsg24PartAMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130842_SimnetAisClassBStaticDataMsg24PartAMatchFields)
}
}
pgnIdToClass['simnetAisClassBStaticDataMsg24PartA'] = (fields:any, dst:number) => new PGN_130842_SimnetAisClassBStaticDataMsg24PartA(fields, dst)


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
export interface PGN_130842_FurunoSixDegreesOfFreedomMovementInterface extends PGNInterface {
  fields: PGN_130842_FurunoSixDegreesOfFreedomMovementFields
}

/**
 * @category PGN_130842_FurunoSixDegreesOfFreedomMovement
 */
export interface PGN_130842_FurunoSixDegreesOfFreedomMovementFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
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
export class PGN_130842_FurunoSixDegreesOfFreedomMovement extends PGN implements PGN_130842_FurunoSixDegreesOfFreedomMovementInterface {
  fields: PGN_130842_FurunoSixDegreesOfFreedomMovementFields

  constructor(fields: PGN_130842_FurunoSixDegreesOfFreedomMovementCreateArgs, dst: number = 255) {
    super(PGN_130842_FurunoSixDegreesOfFreedomMovementDefaults)
    this.dst = dst
    this.fields = { ...PGN_130842_FurunoSixDegreesOfFreedomMovementMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130842_FurunoSixDegreesOfFreedomMovementMatchFields)
}
}
pgnIdToClass['furunoSixDegreesOfFreedomMovement'] = (fields:any, dst:number) => new PGN_130842_FurunoSixDegreesOfFreedomMovement(fields, dst)


/**
 * PGN: 130842
 *
 * Description: Simnet: AIS Class B static data (msg 24 Part B)
 *
 * Match: Manufacturer Code == Simrad<br>
 * Match: Industry Code == Marine Industry<br>
 * Match: Message ID == Msg 24 Part B<br>
 *
 * @category PGN_130842_SimnetAisClassBStaticDataMsg24PartB
 */
export interface PGN_130842_SimnetAisClassBStaticDataMsg24PartBInterface extends PGNInterface {
  fields: PGN_130842_SimnetAisClassBStaticDataMsg24PartBFields
}

/**
 * @category PGN_130842_SimnetAisClassBStaticDataMsg24PartB
 */
export interface PGN_130842_SimnetAisClassBStaticDataMsg24PartBFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  messageId: N2K_Number
  repeatIndicator?: enums.RepeatIndicator | number
  d?: N2K_Number
  e?: N2K_Number
  userId: N2K_Mmsi
  typeOfShip?: enums.ShipType | number
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
 * @category PGN_130842_SimnetAisClassBStaticDataMsg24PartB
 */
export const PGN_130842_SimnetAisClassBStaticDataMsg24PartBDefaults = {
  pgn: 130842,
  dst: 255,
  prio: 3,
  fields: []
}

/**
 * @category PGN_130842_SimnetAisClassBStaticDataMsg24PartB
 */
export const PGN_130842_SimnetAisClassBStaticDataMsg24PartBMatchFields = {
  manufacturerCode: enums.ManufacturerCode.Simrad,
  industryCode: enums.IndustryCode.Marine,
  messageId: 1,
}

/**
 * @category PGN_130842_SimnetAisClassBStaticDataMsg24PartB
 */
export interface PGN_130842_SimnetAisClassBStaticDataMsg24PartBCreateArgs {
  reserved?: number
  repeatIndicator?: enums.RepeatIndicator | number
  d?: N2K_Number
  e?: N2K_Number
  userId: N2K_Mmsi
  typeOfShip?: enums.ShipType | number
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
 * @category PGN_130842_SimnetAisClassBStaticDataMsg24PartB
 */
export class PGN_130842_SimnetAisClassBStaticDataMsg24PartB extends PGN implements PGN_130842_SimnetAisClassBStaticDataMsg24PartBInterface {
  fields: PGN_130842_SimnetAisClassBStaticDataMsg24PartBFields

  constructor(fields: PGN_130842_SimnetAisClassBStaticDataMsg24PartBCreateArgs, dst: number = 255) {
    super(PGN_130842_SimnetAisClassBStaticDataMsg24PartBDefaults)
    this.dst = dst
    this.fields = { ...PGN_130842_SimnetAisClassBStaticDataMsg24PartBMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130842_SimnetAisClassBStaticDataMsg24PartBMatchFields)
}
}
pgnIdToClass['simnetAisClassBStaticDataMsg24PartB'] = (fields:any, dst:number) => new PGN_130842_SimnetAisClassBStaticDataMsg24PartB(fields, dst)


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
export interface PGN_130843_FurunoHeelAngleRollInformationInterface extends PGNInterface {
  fields: PGN_130843_FurunoHeelAngleRollInformationFields
}

/**
 * @category PGN_130843_FurunoHeelAngleRollInformation
 */
export interface PGN_130843_FurunoHeelAngleRollInformationFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
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
export class PGN_130843_FurunoHeelAngleRollInformation extends PGN implements PGN_130843_FurunoHeelAngleRollInformationInterface {
  fields: PGN_130843_FurunoHeelAngleRollInformationFields

  constructor(fields: PGN_130843_FurunoHeelAngleRollInformationCreateArgs, dst: number = 255) {
    super(PGN_130843_FurunoHeelAngleRollInformationDefaults)
    this.dst = dst
    this.fields = { ...PGN_130843_FurunoHeelAngleRollInformationMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130843_FurunoHeelAngleRollInformationMatchFields)
}
}
pgnIdToClass['furunoHeelAngleRollInformation'] = (fields:any, dst:number) => new PGN_130843_FurunoHeelAngleRollInformation(fields, dst)


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
export interface PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageInterface extends PGNInterface {
  fields: PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageFields
}

/**
 * @category PGN_130843_SimnetSonarStatusFrequencyAndDspVoltage
 */
export interface PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
}

/**
 * @category PGN_130843_SimnetSonarStatusFrequencyAndDspVoltage
 */
export const PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageDefaults = {
  pgn: 130843,
  dst: 255,
  prio: 3,
  fields: []
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
export class PGN_130843_SimnetSonarStatusFrequencyAndDspVoltage extends PGN implements PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageInterface {
  fields: PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageFields

  constructor(fields: PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageCreateArgs, dst: number = 255) {
    super(PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageDefaults)
    this.dst = dst
    this.fields = { ...PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130843_SimnetSonarStatusFrequencyAndDspVoltageMatchFields)
}
}
pgnIdToClass['simnetSonarStatusFrequencyAndDspVoltage'] = (fields:any, dst:number) => new PGN_130843_SimnetSonarStatusFrequencyAndDspVoltage(fields, dst)


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
export interface PGN_130845_FurunoMultiSatsInViewExtendedInterface extends PGNInterface {
  fields: PGN_130845_FurunoMultiSatsInViewExtendedFields
}

/**
 * @category PGN_130845_FurunoMultiSatsInViewExtended
 */
export interface PGN_130845_FurunoMultiSatsInViewExtendedFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
}

/**
 * @category PGN_130845_FurunoMultiSatsInViewExtended
 */
export const PGN_130845_FurunoMultiSatsInViewExtendedDefaults = {
  pgn: 130845,
  dst: 255,
  prio: 3,
  fields: []
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
export class PGN_130845_FurunoMultiSatsInViewExtended extends PGN implements PGN_130845_FurunoMultiSatsInViewExtendedInterface {
  fields: PGN_130845_FurunoMultiSatsInViewExtendedFields

  constructor(fields: PGN_130845_FurunoMultiSatsInViewExtendedCreateArgs, dst: number = 255) {
    super(PGN_130845_FurunoMultiSatsInViewExtendedDefaults)
    this.dst = dst
    this.fields = { ...PGN_130845_FurunoMultiSatsInViewExtendedMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130845_FurunoMultiSatsInViewExtendedMatchFields)
}
}
pgnIdToClass['furunoMultiSatsInViewExtended'] = (fields:any, dst:number) => new PGN_130845_FurunoMultiSatsInViewExtended(fields, dst)


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
export interface PGN_130845_SimnetKeyValueInterface extends PGNInterface {
  fields: PGN_130845_SimnetKeyValueFields
}

/**
 * @category PGN_130845_SimnetKeyValue
 */
export interface PGN_130845_SimnetKeyValueFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  address?: N2K_Number
  repeatIndicator?: enums.RepeatIndicator | number
  displayGroup?: enums.SimnetDisplayGroup | number
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
  prio: 3,
  fields: []
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
  repeatIndicator?: enums.RepeatIndicator | number
  displayGroup?: enums.SimnetDisplayGroup | number
  reserved7?: number
  key?: N2K_DynamicFieldKey
  spare9?: number
  minlength?: N2K_Number
  value?: N2K_DynamicFieldValue
}

/**
 * @category PGN_130845_SimnetKeyValue
 */
export class PGN_130845_SimnetKeyValue extends PGN implements PGN_130845_SimnetKeyValueInterface {
  fields: PGN_130845_SimnetKeyValueFields

  constructor(fields: PGN_130845_SimnetKeyValueCreateArgs, dst: number = 255) {
    super(PGN_130845_SimnetKeyValueDefaults)
    this.dst = dst
    this.fields = { ...PGN_130845_SimnetKeyValueMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130845_SimnetKeyValueMatchFields)
}
}
pgnIdToClass['simnetKeyValue'] = (fields:any, dst:number) => new PGN_130845_SimnetKeyValue(fields, dst)


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
export interface PGN_130846_SimnetParameterSetInterface extends PGNInterface {
  fields: PGN_130846_SimnetParameterSetFields
}

/**
 * @category PGN_130846_SimnetParameterSet
 */
export interface PGN_130846_SimnetParameterSetFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  address?: N2K_Number
  b?: N2K_Number
  displayGroup?: enums.SimnetDisplayGroup | number
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
  prio: 3,
  fields: []
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
  displayGroup?: enums.SimnetDisplayGroup | number
  d?: N2K_Number
  key?: N2K_DynamicFieldKey
  spare9?: number
  length?: N2K_Number
  value?: N2K_DynamicFieldValue
}

/**
 * @category PGN_130846_SimnetParameterSet
 */
export class PGN_130846_SimnetParameterSet extends PGN implements PGN_130846_SimnetParameterSetInterface {
  fields: PGN_130846_SimnetParameterSetFields

  constructor(fields: PGN_130846_SimnetParameterSetCreateArgs, dst: number = 255) {
    super(PGN_130846_SimnetParameterSetDefaults)
    this.dst = dst
    this.fields = { ...PGN_130846_SimnetParameterSetMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130846_SimnetParameterSetMatchFields)
}
}
pgnIdToClass['simnetParameterSet'] = (fields:any, dst:number) => new PGN_130846_SimnetParameterSet(fields, dst)


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
export interface PGN_130846_FurunoMotionSensorStatusExtendedInterface extends PGNInterface {
  fields: PGN_130846_FurunoMotionSensorStatusExtendedFields
}

/**
 * @category PGN_130846_FurunoMotionSensorStatusExtended
 */
export interface PGN_130846_FurunoMotionSensorStatusExtendedFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
}

/**
 * @category PGN_130846_FurunoMotionSensorStatusExtended
 */
export const PGN_130846_FurunoMotionSensorStatusExtendedDefaults = {
  pgn: 130846,
  dst: 255,
  prio: 3,
  fields: []
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
export class PGN_130846_FurunoMotionSensorStatusExtended extends PGN implements PGN_130846_FurunoMotionSensorStatusExtendedInterface {
  fields: PGN_130846_FurunoMotionSensorStatusExtendedFields

  constructor(fields: PGN_130846_FurunoMotionSensorStatusExtendedCreateArgs, dst: number = 255) {
    super(PGN_130846_FurunoMotionSensorStatusExtendedDefaults)
    this.dst = dst
    this.fields = { ...PGN_130846_FurunoMotionSensorStatusExtendedMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130846_FurunoMotionSensorStatusExtendedMatchFields)
}
}
pgnIdToClass['furunoMotionSensorStatusExtended'] = (fields:any, dst:number) => new PGN_130846_FurunoMotionSensorStatusExtended(fields, dst)


/**
 * PGN: 130847
 *
 * Description: SeaTalk: Node Statistics
 *
 * @category PGN_130847
 */
export interface PGN_130847Interface extends PGNInterface {
  fields: PGN_130847Fields
}

/**
 * @category PGN_130847
 */
export interface PGN_130847Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130847
 */
export class PGN_130847 extends PGN implements PGN_130847Interface {
  fields: PGN_130847Fields

  constructor(fields: PGN_130847Fields, dst: number = 255) {
    super(PGN_130847Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['seatalkNodeStatistics'] = (fields:any, dst:number) => new PGN_130847(fields, dst)


/**
 * PGN: 130848
 *
 * Description: SeaTalk: Waypoint Information
 *
 * @category PGN_130848
 */
export interface PGN_130848Interface extends PGNInterface {
  fields: PGN_130848Fields
}

/**
 * @category PGN_130848
 */
export interface PGN_130848Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_130848
 */
export class PGN_130848 extends PGN implements PGN_130848Interface {
  fields: PGN_130848Fields

  constructor(fields: PGN_130848Fields, dst: number = 255) {
    super(PGN_130848Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['seatalkWaypointInformation'] = (fields:any, dst:number) => new PGN_130848(fields, dst)


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
export interface PGN_130850_SimnetApCommandInterface extends PGNInterface {
  fields: PGN_130850_SimnetApCommandFields
}

/**
 * @category PGN_130850_SimnetApCommand
 */
export interface PGN_130850_SimnetApCommandFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  address?: N2K_Number
  reserved5?: number
  proprietaryId: enums.SimnetEventCommand | number
  apStatus?: enums.SimnetApStatus | number
  apCommand?: enums.SimnetApEvents | number
  spare9?: number
  direction?: enums.SimnetDirection | number
  angle?: N2K_Number
}

/**
 * @category PGN_130850_SimnetApCommand
 */
export const PGN_130850_SimnetApCommandDefaults = {
  pgn: 130850,
  dst: 255,
  prio: 2,
  fields: []
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
  apStatus?: enums.SimnetApStatus | number
  apCommand?: enums.SimnetApEvents | number
  spare9?: number
  direction?: enums.SimnetDirection | number
  angle?: N2K_Number
}

/**
 * @category PGN_130850_SimnetApCommand
 */
export class PGN_130850_SimnetApCommand extends PGN implements PGN_130850_SimnetApCommandInterface {
  fields: PGN_130850_SimnetApCommandFields

  constructor(fields: PGN_130850_SimnetApCommandCreateArgs, dst: number = 255) {
    super(PGN_130850_SimnetApCommandDefaults)
    this.dst = dst
    this.fields = { ...PGN_130850_SimnetApCommandMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130850_SimnetApCommandMatchFields)
}
}
pgnIdToClass['simnetApCommand'] = (fields:any, dst:number) => new PGN_130850_SimnetApCommand(fields, dst)


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
export interface PGN_130850_SimnetEventCommandApCommandInterface extends PGNInterface {
  fields: PGN_130850_SimnetEventCommandApCommandFields
}

/**
 * @category PGN_130850_SimnetEventCommandApCommand
 */
export interface PGN_130850_SimnetEventCommandApCommandFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.SimnetEventCommand | number
  unusedA?: N2K_Number
  controllingDevice?: N2K_Number
  event?: enums.SimnetApEvents | number
  unusedB?: N2K_Number
  direction?: enums.SimnetDirection | number
  angle?: N2K_Number
  unusedC?: N2K_Number
}

/**
 * @category PGN_130850_SimnetEventCommandApCommand
 */
export const PGN_130850_SimnetEventCommandApCommandDefaults = {
  pgn: 130850,
  dst: 255,
  prio: 2,
  fields: []
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
  event?: enums.SimnetApEvents | number
  unusedB?: N2K_Number
  direction?: enums.SimnetDirection | number
  angle?: N2K_Number
  unusedC?: N2K_Number
}

/**
 * @category PGN_130850_SimnetEventCommandApCommand
 */
export class PGN_130850_SimnetEventCommandApCommand extends PGN implements PGN_130850_SimnetEventCommandApCommandInterface {
  fields: PGN_130850_SimnetEventCommandApCommandFields

  constructor(fields: PGN_130850_SimnetEventCommandApCommandCreateArgs, dst: number = 255) {
    super(PGN_130850_SimnetEventCommandApCommandDefaults)
    this.dst = dst
    this.fields = { ...PGN_130850_SimnetEventCommandApCommandMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130850_SimnetEventCommandApCommandMatchFields)
}
}
pgnIdToClass['simnetEventCommandApCommand'] = (fields:any, dst:number) => new PGN_130850_SimnetEventCommandApCommand(fields, dst)


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
export interface PGN_130850_SimnetAlarmInterface extends PGNInterface {
  fields: PGN_130850_SimnetAlarmFields
}

/**
 * @category PGN_130850_SimnetAlarm
 */
export interface PGN_130850_SimnetAlarmFields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  address?: N2K_Number
  reserved5?: number
  proprietaryId: enums.SimnetEventCommand | number
  reserved7?: number
  alarm?: enums.SimnetAlarm | number
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
  prio: 2,
  fields: []
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
  alarm?: enums.SimnetAlarm | number
  messageId?: N2K_Number
  f?: N2K_Number
  g?: N2K_Number
}

/**
 * @category PGN_130850_SimnetAlarm
 */
export class PGN_130850_SimnetAlarm extends PGN implements PGN_130850_SimnetAlarmInterface {
  fields: PGN_130850_SimnetAlarmFields

  constructor(fields: PGN_130850_SimnetAlarmCreateArgs, dst: number = 255) {
    super(PGN_130850_SimnetAlarmDefaults)
    this.dst = dst
    this.fields = { ...PGN_130850_SimnetAlarmMatchFields, ...fields }
  }

  isMatch() {
    return isMatch(this, PGN_130850_SimnetAlarmMatchFields)
}
}
pgnIdToClass['simnetAlarm'] = (fields:any, dst:number) => new PGN_130850_SimnetAlarm(fields, dst)


/**
 * PGN: 130851
 *
 * Description: Simnet: Event Reply: AP command
 *
 * @category PGN_130851
 */
export interface PGN_130851Interface extends PGNInterface {
  fields: PGN_130851Fields
}

/**
 * @category PGN_130851
 */
export interface PGN_130851Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  proprietaryId: enums.SimnetEventCommand | number
  b?: N2K_Number
  address?: N2K_Number
  event?: enums.SimnetApEvents | number
  c?: N2K_Number
  direction?: enums.SimnetDirection | number
  angle?: N2K_Number
  g?: N2K_Number
}

/**
 * @category PGN_130851
 */
export const PGN_130851Defaults = {
  pgn: 130851,
  dst: 255,
  prio: 7,
  fields: []
}

/**
 * @category PGN_130851
 */
export class PGN_130851 extends PGN implements PGN_130851Interface {
  fields: PGN_130851Fields

  constructor(fields: PGN_130851Fields, dst: number = 255) {
    super(PGN_130851Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetEventReplyApCommand'] = (fields:any, dst:number) => new PGN_130851(fields, dst)


/**
 * PGN: 130856
 *
 * Description: Simnet: Alarm Message
 *
 * Explanation: Usually accompanied by a PGN 130850 'Simnet: Alarm' message with the same information in binary form.
 *
 * @category PGN_130856
 */
export interface PGN_130856Interface extends PGNInterface {
  fields: PGN_130856Fields
}

/**
 * @category PGN_130856
 */
export interface PGN_130856Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130856
 */
export class PGN_130856 extends PGN implements PGN_130856Interface {
  fields: PGN_130856Fields

  constructor(fields: PGN_130856Fields, dst: number = 255) {
    super(PGN_130856Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetAlarmMessage'] = (fields:any, dst:number) => new PGN_130856(fields, dst)


/**
 * PGN: 130860
 *
 * Description: Simnet: AP Unknown 4
 *
 * Explanation: Seen as sent by AC-42 and H5000 AP only so far.
 *
 * @category PGN_130860
 */
export interface PGN_130860Interface extends PGNInterface {
  fields: PGN_130860Fields
}

/**
 * @category PGN_130860
 */
export interface PGN_130860Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_130860
 */
export class PGN_130860 extends PGN implements PGN_130860Interface {
  fields: PGN_130860Fields

  constructor(fields: PGN_130860Fields, dst: number = 255) {
    super(PGN_130860Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['simnetApUnknown4'] = (fields:any, dst:number) => new PGN_130860(fields, dst)


/**
 * PGN: 130880
 *
 * Description: Airmar: Additional Weather Data
 *
 * @category PGN_130880
 */
export interface PGN_130880Interface extends PGNInterface {
  fields: PGN_130880Fields
}

/**
 * @category PGN_130880
 */
export interface PGN_130880Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130880
 */
export class PGN_130880 extends PGN implements PGN_130880Interface {
  fields: PGN_130880Fields

  constructor(fields: PGN_130880Fields, dst: number = 255) {
    super(PGN_130880Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['airmarAdditionalWeatherData'] = (fields:any, dst:number) => new PGN_130880(fields, dst)


/**
 * PGN: 130881
 *
 * Description: Airmar: Heater Control
 *
 * @category PGN_130881
 */
export interface PGN_130881Interface extends PGNInterface {
  fields: PGN_130881Fields
}

/**
 * @category PGN_130881
 */
export interface PGN_130881Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 3,
  fields: []
}

/**
 * @category PGN_130881
 */
export class PGN_130881 extends PGN implements PGN_130881Interface {
  fields: PGN_130881Fields

  constructor(fields: PGN_130881Fields, dst: number = 255) {
    super(PGN_130881Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['airmarHeaterControl'] = (fields:any, dst:number) => new PGN_130881(fields, dst)


/**
 * PGN: 130918
 *
 * Description: SeaTalk: Route Information
 *
 * @category PGN_130918
 */
export interface PGN_130918Interface extends PGNInterface {
  fields: PGN_130918Fields
}

/**
 * @category PGN_130918
 */
export interface PGN_130918Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
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
  prio: 7,
  fields: []
}

/**
 * @category PGN_130918
 */
export class PGN_130918 extends PGN implements PGN_130918Interface {
  fields: PGN_130918Fields

  constructor(fields: PGN_130918Fields, dst: number = 255) {
    super(PGN_130918Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['seatalkRouteInformation'] = (fields:any, dst:number) => new PGN_130918(fields, dst)


/**
 * PGN: 130944
 *
 * Description: Airmar: POST
 *
 * @category PGN_130944
 */
export interface PGN_130944Interface extends PGNInterface {
  fields: PGN_130944Fields
}

/**
 * @category PGN_130944
 */
export interface PGN_130944Fields {
  manufacturerCode: enums.ManufacturerCode | number
  reserved?: number
  industryCode: enums.IndustryCode | number
  control: enums.AirmarPostControl | number
  reserved5?: number
  numberOfIdTestResultPairsToFollow?: N2K_Number
  testId?: enums.AirmarPostId | number
  testResult?: N2K_Number
}

/**
 * @category PGN_130944
 */
export const PGN_130944Defaults = {
  pgn: 130944,
  dst: 255,
  prio: 7,
  fields: []
}

/**
 * @category PGN_130944
 */
export class PGN_130944 extends PGN implements PGN_130944Interface {
  fields: PGN_130944Fields

  constructor(fields: PGN_130944Fields, dst: number = 255) {
    super(PGN_130944Defaults)
    this.dst = dst
    this.fields = fields
  }

}
pgnIdToClass['airmarPost'] = (fields:any, dst:number) => new PGN_130944(fields, dst)


