export enum LightingCommand {
  Idle = 'Idle',
  DetectDevices = 'Detect Devices',
  Reboot = 'Reboot',
  FactoryReset = 'Factory Reset',
  PoweringUp = 'Powering Up',
}

export enum IndustryCode {
  Global = 'Global',
  Highway = 'Highway',
  Agriculture = 'Agriculture',
  Construction = 'Construction',
  Marine = 'Marine',
  Industrial = 'Industrial',
}

export enum ManufacturerCode {
  ArksEnterprisesInc = 'ARKS Enterprises, Inc.',
  FwMurphyenovationControls = 'FW Murphy/Enovation Controls',
  TwinDisc = 'Twin Disc',
  KohlerPowerSystems = 'Kohler Power Systems',
  HemisphereGpsInc = 'Hemisphere GPS Inc',
  BepMarine = 'BEP Marine',
  Airmar = 'Airmar',
  Maretron = 'Maretron',
  Lowrance = 'Lowrance',
  MercuryMarine = 'Mercury Marine',
  NautibusElectronicGmbH = 'Nautibus Electronic GmbH',
  BlueWaterData = 'Blue Water Data',
  Westerbeke = 'Westerbeke',
  IssproInc = 'ISSPRO Inc',
  OffshoreSystemsukLtd = 'Offshore Systems (UK) Ltd.',
  Evinrudebrp = 'Evinrude/BRP',
  CpacSystemsAb = 'CPAC Systems AB',
  XantrexTechnologyInc = 'Xantrex Technology Inc.',
  MarlinTechnologiesInc = 'Marlin Technologies, Inc.',
  YanmarMarine = 'Yanmar Marine',
  VolvoPenta = 'Volvo Penta',
  HondaMarine = 'Honda Marine',
  CarlingTechnologiesIncmoritzAerospace = 'Carling Technologies Inc. (Moritz Aerospace)',
  BeedeInstruments = 'Beede Instruments',
  FloscanInstrumentCoInc = 'Floscan Instrument Co. Inc.',
  Nobletec = 'Nobletec',
  MysticValleyCommunications = 'Mystic Valley Communications',
  Actia = 'Actia',
  DisenosYTechnologia = 'Disenos Y Technologia',
  DigitalSwitchingSystems = 'Digital Switching Systems',
  Xintexatena = 'Xintex/Atena',
  EmmiNetworkSL = 'EMMI NETWORK S.L.',
  Zf = 'ZF',
  Garmin = 'Garmin',
  YachtMonitoringSolutions = 'Yacht Monitoring Solutions',
  SailormadeMarineTelemetrytetraTechnologyLtd = 'Sailormade Marine Telemetry/Tetra Technology LTD',
  Eride = 'Eride',
  HondaMotorCompanyLtd = 'Honda Motor Company LTD',
  Groco = 'Groco',
  Actisense = 'Actisense',
  AmphenolLtwTechnology = 'Amphenol LTW Technology',
  Navico = 'Navico',
  HamiltonJet = 'Hamilton Jet',
  SeaRecovery = 'Sea Recovery',
  CoelmoSrlItaly = 'Coelmo SRL Italy',
  EmpirBus = 'Empir Bus',
  NovAtel = 'NovAtel',
  SleipnerMotorAs = 'Sleipner Motor AS',
  MbwTechnologies = 'MBW Technologies',
  FischerPanda = 'Fischer Panda',
  Icom = 'ICOM',
  Qwerty = 'Qwerty',
  Dief = 'Dief',
  BoeningAutomationstechnologieGmbHCoKg = 'Boening Automationstechnologie GmbH & Co. KG',
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
  TrueHeadingAb = 'True Heading AB',
  EgersundMarineElectronicsAs = 'Egersund Marine Electronics AS',
  EmTrakMarineElectronics = 'em-trak Marine Electronics',
  TohatsuCoJp = 'Tohatsu Co, JP',
  DigitalYacht = 'Digital Yacht',
  ComarSystemsLimited = 'Comar Systems Limited',
  Cummins = 'Cummins',
  VdoakaContinentalCorporation = 'VDO (aka Continental-Corporation)',
  ParkerHannifinAkaVillageMarineTech = 'Parker Hannifin aka Village Marine Tech',
  AlltekMarineElectronicsCorp = 'Alltek Marine Electronics Corp',
  SanGiorgioSEIN = 'SAN GIORGIO S.E.I.N',
  VeethreeElectronicsMarine = 'Veethree Electronics & Marine',
  HumminbirdMarineElectronics = 'Humminbird Marine Electronics',
  SiTexMarineElectronics = 'SI-TEX Marine Electronics',
  SeaCrossMarineAb = 'Sea Cross Marine AB',
  GmeAkaStandardCommunicationsPtyLtd = 'GME aka Standard Communications Pty LTD',
  OceanSatBv = 'Ocean Sat BV',
  ChetcoDigitialInstruments = 'Chetco Digitial Instruments',
  Watcheye = 'Watcheye',
  LcjCapteurs = 'Lcj Capteurs',
  AttwoodMarine = 'Attwood Marine',
  NaviopSRL = 'Naviop S.R.L.',
  VesperMarineLtd = 'Vesper Marine Ltd',
  MarinesoftCoLtd = 'Marinesoft Co. LTD',
  NoLandEngineering = 'NoLand Engineering',
  TransasUsa = 'Transas USA',
  NationalInstrumentsKorea = 'National Instruments Korea',
  NationalMarineElectronicsAssociation = 'National Marine Electronics Association',
  OnwaMarine = 'Onwa Marine',
  Webasto = 'Webasto',
  MarinecraftsouthKorea = 'Marinecraft (South Korea)',
  McMurdoGroupAkaOroliaLtd = 'McMurdo Group aka Orolia LTD',
  Advansea = 'Advansea',
  Kvh = 'KVH',
  SanJoseTechnology = 'San Jose Technology',
  YachtControl = 'Yacht Control',
  SuzukiMotorCorporation = 'Suzuki Motor Corporation',
  UsCoastGuard = 'US Coast Guard',
  ShipModuleAkaCustomware = 'Ship Module aka Customware',
  AquaticAv = 'Aquatic AV',
  AventicsGmbH = 'Aventics GmbH',
  Intellian = 'Intellian',
  SamwonIt = 'SamwonIT',
  ArltTecnologies = 'Arlt Tecnologies',
  BavariaYacts = 'Bavaria Yacts',
  DiverseYachtServices = 'Diverse Yacht Services',
  WemaUSADbaKus = 'Wema U.S.A dba KUS',
  ShenzhenJiuzhouHimunication = 'Shenzhen Jiuzhou Himunication',
  RockfordCorp = 'Rockford Corp',
  HarmanInternational = 'Harman International',
  JlAudio = 'JL Audio',
  LarsThrane = 'Lars Thrane',
  Autonnic = 'Autonnic',
  YachtDevices = 'Yacht Devices',
  ReapSystems = 'REAP Systems',
  AuElectronicsGroup = 'Au Electronics Group',
  LxNav = 'LxNav',
  LittelfuseIncformerlyCarlingTechnologies = 'Littelfuse, Inc (formerly Carling Technologies)',
  DaeMyung = 'DaeMyung',
  Woosung = 'Woosung',
  IsottaIfraSrl = 'ISOTTA IFRA srl',
  ClarionUs = 'Clarion US',
  HmiSystems = 'HMI Systems',
  OceanSignal = 'Ocean Signal',
  Seekeeper = 'Seekeeper',
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
  LewmarInc = 'Lewmar Inc',
  TeamSurv = 'TeamSurv',
  FellMarine = 'Fell Marine',
  Oceanvolt = 'Oceanvolt',
  Prospec = 'Prospec',
  DataPanelCorp = 'Data Panel Corp',
  L3Technologies = 'L3 Technologies',
  RhodanMarineSystems = 'Rhodan Marine Systems',
  NexfourSolutions = 'Nexfour Solutions',
  AsaElectronics = 'ASA Electronics',
  MarinesCosouthKorea = 'Marines Co (South Korea)',
  NauticOn = 'Nautic-on',
  Sentinel = 'Sentinel',
  JlMarineYstems = 'JL Marine ystems',
  Ecotronix = 'Ecotronix',
  ZontisaMarine = 'Zontisa Marine',
  ExorInternational = 'EXOR International',
  TimbolierIndustries = 'Timbolier Industries',
  TjcMicro = 'TJC Micro',
  CoxPowertrain = 'Cox Powertrain',
  BlueSeas = 'Blue Seas',
  KobeltManufacturingCoLtd = 'Kobelt Manufacturing Co. Ltd',
  BlueOceanIot = 'Blue Ocean IOT',
  XentaSystems = 'Xenta Systems',
  UltraflexSpA = 'Ultraflex SpA',
  LintestSmartBoat = 'Lintest SmartBoat',
  Soundmax = 'Soundmax',
  TeamItaliaMarineonyxMarineAutomationSRL = 'Team Italia Marine (Onyx Marine Automation s.r.l)',
  Entratech = 'Entratech',
  ItcInc = 'ITC Inc.',
  TheMarineGuardianLlc = 'The Marine Guardian LLC',
  SonicCorporation = 'Sonic Corporation',
  ProNav = 'ProNav',
  VetusMaxwellInc = 'Vetus Maxwell INC.',
  LithiumPros = 'Lithium Pros',
  Boatrax = 'Boatrax',
  MarolCoLtd = 'Marol Co ltd',
  CalypsoInstruments = 'CALYPSO Instruments',
  SpotZeroWater = 'Spot Zero Water',
  LithionicsBatteryLlc = 'Lithionics Battery LLC',
  QuickTeckElectronicsLtd = 'Quick-teck Electronics Ltd',
  UnidenAmerica = 'Uniden America',
  Nauticoncept = 'Nauticoncept',
  ShadowCasterLedLightingLlc = 'Shadow-Caster LED lighting LLC',
  WetSoundsLlc = 'Wet Sounds, LLC',
  ETACircuitBreakers = 'E-T-A Circuit Breakers',
  Scheiber = 'Scheiber',
  SmartYachtsInternationalLimited = 'Smart Yachts International Limited',
  Dockmate = 'Dockmate',
  BobsMachine = 'Bobs Machine',
  L3HarrisAsv = 'L3Harris ASV',
  BalmarLlc = 'Balmar LLC',
  ElettromediaSpa = 'Elettromedia spa',
  Electromaax = 'Electromaax',
  AcrossOceansSystemsLtd = 'Across Oceans Systems Ltd.',
  KiwiYachting = 'Kiwi Yachting',
  BsbArtificialIntelligenceGmbH = 'BSB Artificial Intelligence GmbH',
  OrcaTechnologoesAs = 'Orca Technologoes AS',
  TbsElectronicsBv = 'TBS Electronics BV',
  TechnotonElectroics = 'Technoton Electroics',
  MgEnergySystemsBV = 'MG Energy Systems B.V.',
  SeaMacineRoboticsInc = 'Sea Macine Robotics Inc.',
  VistaManufacturing = 'Vista Manufacturing',
  Zipwake = 'Zipwake',
  SailmonBv = 'Sailmon BV',
  AirmoniqProKft = 'Airmoniq Pro Kft',
  SierraMarine = 'Sierra Marine',
  XinuoInformationTechnologyxiamen = 'Xinuo Information Technology (Xiamen)',
  Septentrio = 'Septentrio',
  NkeMarineElecronics = 'NKE Marine Elecronics',
  SuperTrackAps = 'SuperTrack Aps',
  HondaElectronicsCoLtd = 'Honda Electronics Co., LTD',
  RaritanEngineeringCompanyInc = 'Raritan Engineering Company, Inc',
  IntegratedPowerSolutionsAg = 'Integrated Power Solutions AG',
  InteractiveTechnologiesInc = 'Interactive Technologies, Inc.',
  LtgTech = 'LTG-Tech',
  EnergySolutionsukLtd = 'Energy Solutions (UK) LTD.',
  WattFuelCellCorp = 'WATT Fuel Cell Corp',
  ProMainer = 'Pro Mainer',
  DragonflyEnergy = 'Dragonfly Energy',
  KodenElectronicsCoLtd = 'Koden Electronics Co., Ltd',
  HumphreeAb = 'Humphree AB',
  HinkleyYachts = 'Hinkley Yachts',
  GlobalMarineManagementGmbHgmm = 'Global Marine Management GmbH (GMM)',
  TriskelMarineLtd = 'Triskel Marine Ltd',
  WarwickControlTechnologies = 'Warwick Control Technologies',
  DolphinCharger = 'Dolphin Charger',
  BarnacleSystemsInc = 'Barnacle Systems Inc',
  RadianIoTInc = 'Radian IoT, Inc.',
  OceanLedMarineLtd = 'Ocean LED Marine Ltd',
  BluNav = 'BluNav',
  OvanantongSaiyangElectronicsCoLtd = 'OVA (Nantong Saiyang Electronics Co., Ltd)',
  RadPropulsion = 'RAD Propulsion',
  ElectricYacht = 'Electric Yacht',
  ElcoMotorYachts = 'Elco Motor Yachts',
  TecnosealFoundrySRL = 'Tecnoseal Foundry S.r.l',
  ProChargingSystemsLlc = 'Pro Charging Systems, LLC',
  EvexCoLtd = 'EVEX Co., LTD',
  GobiusSensorTechnologyAb = 'Gobius Sensor Technology AB',
  ArcoMarine = 'Arco Marine',
  LencoMarineInc = 'Lenco Marine Inc.',
  NaocontrolSL = 'Naocontrol S.L.',
  Revatek = 'Revatek',
  Aeolionics = 'Aeolionics',
  PredictWindLtd = 'PredictWind Ltd',
  EgisMobileElectric = 'Egis Mobile Electric',
  StarboardYachtGroup = 'Starboard Yacht Group',
  RoswellMarine = 'Roswell Marine',
  EPropulsionguangdongEPropulsionTechnologyLtd = 'ePropulsion (Guangdong ePropulsion Technology Ltd.)',
  MicroAirLlc = 'Micro-Air LLC',
  VitalBattery = 'Vital Battery',
  RideControllerLlc = 'Ride Controller LLC',
  TocaroBlue = 'Tocaro Blue',
  VanquishYachts = 'Vanquish Yachts',
  FtTechnologies = 'FT Technologies',
  AlpsAlpineCoLtd = 'Alps Alpine Co., Ltd.',
  EForceMarine = 'E-Force Marine',
  CmcMarine = 'CMC Marine',
  NanjingSandemarineInformationTechnologyCoLtd = 'Nanjing Sandemarine Information Technology Co., Ltd.',
  TeleflexMarineseaStarSolutions = 'Teleflex Marine (SeaStar Solutions)',
  Raymarine = 'Raymarine',
  Navionics = 'Navionics',
  JapanRadioCo = 'Japan Radio Co',
  NorthstarTechnologies = 'Northstar Technologies',
  Furuno = 'Furuno',
  Trimble = 'Trimble',
  Simrad = 'Simrad',
  Litton = 'Litton',
  KvasarAb = 'Kvasar AB',
  Mmp = 'MMP',
  VectorCantech = 'Vector Cantech',
  YamahaMarine = 'Yamaha Marine',
  FariaInstruments = 'Faria Instruments',
}

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

export enum RepeatIndicator {
  Initial = 'Initial',
  FirstRetransmission = 'First retransmission',
  SecondRetransmission = 'Second retransmission',
  FinalRetransmission = 'Final retransmission',
}

export enum TxRxMode {
  TxAtxBRxArxB = 'Tx A/Tx B, Rx A/Rx B',
  TxARxArxB = 'Tx A, Rx A/Rx B',
  TxBRxArxB = 'Tx B, Rx A/Rx B',
}

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

export enum AisTransceiver {
  ChannelAVdlReception = 'Channel A VDL reception',
  ChannelBVdlReception = 'Channel B VDL reception',
  ChannelAVdlTransmission = 'Channel A VDL transmission',
  ChannelBVdlTransmission = 'Channel B VDL transmission',
  OwnInformationNotBroadcast = 'Own information not broadcast',
  Reserved = 'Reserved',
}

export enum AisAssignedMode {
  AutonomousAndContinuous = 'Autonomous and continuous',
  AssignedMode = 'Assigned mode',
}

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

export enum AisSpecialManeuver {
  NotAvailable = 'Not available',
  NotEngagedInSpecialManeuver = 'Not engaged in special maneuver',
  EngagedInSpecialManeuver = 'Engaged in special maneuver',
  Reserved = 'Reserved',
}

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

export enum EngineInstance {
  SingleEngineOrDualEnginePort = 'Single Engine or Dual Engine Port',
  DualEngineStarboard = 'Dual Engine Starboard',
}

export enum GearStatus {
  Forward = 'Forward',
  Neutral = 'Neutral',
  Reverse = 'Reverse',
}

export enum Direction {
  Forward = 'Forward',
  Reverse = 'Reverse',
}

export enum PositionAccuracy {
  Low = 'Low',
  High = 'High',
}

export enum RaimFlag {
  NotInUse = 'not in use',
  InUse = 'in use',
}

export enum TimeStamp {
  NotAvailable = 'Not available',
  ManualInputMode = 'Manual input mode',
  DeadReckoningMode = 'Dead reckoning mode',
  PositioningSystemIsInoperative = 'Positioning system is inoperative',
}

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

export enum GnsIntegrity {
  NoIntegrityChecking = 'No integrity checking',
  Safe = 'Safe',
  Caution = 'Caution',
  Unsafe = 'Unsafe',
}

export enum SystemTime {
  Gps = 'GPS',
  Glonass = 'GLONASS',
  RadioStation = 'Radio Station',
  LocalCesiumClock = 'Local Cesium clock',
  LocalRubidiumClock = 'Local Rubidium clock',
  LocalCrystalClock = 'Local Crystal clock',
}

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
}

export enum ResidualMode {
  Autonomous = 'Autonomous',
  DifferentialEnhanced = 'Differential enhanced',
  Estimated = 'Estimated',
  Simulator = 'Simulator',
  Manual = 'Manual',
}

export enum WindReference {
  TruegroundReferencedToNorth = 'True (ground referenced to North)',
  MagneticgroundReferencedToMagneticNorth = 'Magnetic (ground referenced to Magnetic North)',
  Apparent = 'Apparent',
  TrueboatReferenced = 'True (boat referenced)',
  TruewaterReferenced = 'True (water referenced)',
}

export enum WaterReference {
  PaddleWheel = 'Paddle wheel',
  PitotTube = 'Pitot tube',
  Doppler = 'Doppler',
  CorrelationultraSound = 'Correlation (ultra sound)',
  ElectroMagnetic = 'Electro Magnetic',
}

export enum YesNo {
  No = 'No',
  Yes = 'Yes',
}

export enum OkWarning {
  Ok = 'OK',
  Warning = 'Warning',
}

export enum OffOn {
  Off = 'Off',
  On = 'On',
}

export enum OffOnControl {
  Off = 'Off',
  On = 'On',
  Reserved = 'Reserved',
  TakeNoActionnoChange = 'Take no action (no change)',
}

export enum DirectionReference {
  True = 'True',
  Magnetic = 'Magnetic',
  Error = 'Error',
}

export enum DirectionRudder {
  NoOrder = 'No Order',
  MoveToStarboard = 'Move to starboard',
  MoveToPort = 'Move to port',
}

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

export enum PowerFactor {
  Leading = 'Leading',
  Lagging = 'Lagging',
  Error = 'Error',
}

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

export enum HumiditySource {
  Inside = 'Inside',
  Outside = 'Outside',
}

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

export enum DscFormat {
  GeographicalArea = 'Geographical area',
  Distress = 'Distress',
  CommonInterest = 'Common interest',
  AllShips = 'All ships',
  IndividualStations = 'Individual stations',
  NonCallingPurpose = 'Non-calling purpose',
  IndividualStationAutomatic = 'Individual station automatic',
}

export enum DscCategory {
  Routine = 'Routine',
  Safety = 'Safety',
  Urgency = 'Urgency',
  Distress = 'Distress',
}

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

export enum DscExpansionData {
  EnhancedPosition = 'Enhanced position',
  SourceAndDatumOfPosition = 'Source and datum of position',
  Sog = 'SOG',
  Cog = 'COG',
  AdditionalStationIdentification = 'Additional station identification',
  EnhancedGeographicArea = 'Enhanced geographic area',
  NumberOfPersonsOnBoard = 'Number of persons on board',
}

export enum SeatalkAlarmStatus {
  AlarmConditionNotMet = 'Alarm condition not met',
  AlarmConditionMetAndNotSilenced = 'Alarm condition met and not silenced',
  AlarmConditionMetAndSilenced = 'Alarm condition met and silenced',
}

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
}

export enum SeatalkAlarmGroup {
  Instrument = 'Instrument',
  Autopilot = 'Autopilot',
  Radar = 'Radar',
  ChartPlotter = 'Chart Plotter',
  Ais = 'AIS',
}

export enum SeatalkPilotMode {
  Standby = 'Standby',
  Auto = 'Auto',
  Wind = 'Wind',
  Track = 'Track',
}

export enum EntertainmentZone {
  AllZones = 'All zones',
  Zone1 = 'Zone 1',
  Zone2 = 'Zone 2',
  Zone3 = 'Zone 3',
  Zone4 = 'Zone 4',
}

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

export enum EntertainmentRepeatStatus {
  Off = 'Off',
  One = 'One',
  All = 'All',
}

export enum EntertainmentShuffleStatus {
  Off = 'Off',
  PlayQueue = 'Play queue',
  All = 'All',
}

export enum EntertainmentLikeStatus {
  None = 'None',
  ThumbsUp = 'Thumbs up',
  ThumbsDown = 'Thumbs down',
}

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

export enum EntertainmentFilter {
  FullRange = 'Full range',
  HighPass = 'High pass',
  LowPass = 'Low pass',
  BandPass = 'Band pass',
  NotchFilter = 'Notch filter',
}

export enum AlertType {
  EmergencyAlarm = 'Emergency Alarm',
  Alarm = 'Alarm',
  Warning = 'Warning',
  Caution = 'Caution',
}

export enum AlertCategory {
  Navigational = 'Navigational',
  Technical = 'Technical',
}

export enum AlertTriggerCondition {
  Manual = 'Manual',
  Auto = 'Auto',
  Test = 'Test',
  Disabled = 'Disabled',
}

export enum AlertThresholdStatus {
  Normal = 'Normal',
  ThresholdExceeded = 'Threshold Exceeded',
  ExtremeThresholdExceeded = 'Extreme Threshold Exceeded',
  LowThresholdExceeded = 'Low Threshold Exceeded',
  Acknowledged = 'Acknowledged',
  AwaitingAcknowledge = 'Awaiting Acknowledge',
}

export enum AlertState {
  Disabled = 'Disabled',
  Normal = 'Normal',
  Active = 'Active',
  Silenced = 'Silenced',
  Acknowledged = 'Acknowledged',
  AwaitingAcknowledge = 'Awaiting Acknowledge',
}

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

export enum AlertResponseCommand {
  Acknowledge = 'Acknowledge',
  TemporarySilence = 'Temporary Silence',
  TestCommandOff = 'Test Command off',
  TestCommandOn = 'Test Command on',
}

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

export enum ThrusterDirectionControl {
  Off = 'Off',
  Ready = 'Ready',
  ToPort = 'To Port',
  ToStarboard = 'To Starboard',
}

export enum ThrusterRetractControl {
  Off = 'Off',
  Extend = 'Extend',
  Retract = 'Retract',
}

export enum ThrusterMotorType {
  _12Vdc = '12VDC',
  _24Vdc = '24VDC',
  _48Vdc = '48VDC',
  _24Vac = '24VAC',
  Hydraulic = 'Hydraulic',
}

export enum BootState {
  InStartupMonitor = 'in Startup Monitor',
  RunningBootloader = 'running Bootloader',
  RunningApplication = 'running Application',
}

export enum AccessLevel {
  Locked = 'Locked',
  UnlockedLevel1 = 'unlocked level 1',
  UnlockedLevel2 = 'unlocked level 2',
}

export enum TransmissionInterval {
  Acknowledge = 'Acknowledge',
  TransmitIntervalpriorityNotSupported = 'Transmit Interval/Priority not supported',
  TransmitIntervalTooLow = 'Transmit Interval too low',
  AccessDenied = 'Access denied',
  NotSupported = 'Not supported',
}

export enum ParameterField {
  Acknowledge = 'Acknowledge',
  InvalidParameterField = 'Invalid parameter field',
  TemporaryError = 'Temporary error',
  ParameterOutOfRange = 'Parameter out of range',
  AccessDenied = 'Access denied',
  NotSupported = 'Not supported',
  ReadOrWriteNotSupported = 'Read or Write not supported',
}

export enum PgnListFunction {
  TransmitPgnList = 'Transmit PGN list',
  ReceivePgnList = 'Receive PGN list',
}

export enum FusionCommand {
  Play = 'Play',
  Pause = 'Pause',
  Next = 'Next',
  Prev = 'Prev',
}

export enum FusionSiriusCommand {
  Next = 'Next',
  Prev = 'Prev',
}

export enum FusionMuteCommand {
  MuteOn = 'Mute On',
  MuteOff = 'Mute Off',
}

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

export enum SeatalkDeviceId {
  S100 = 'S100',
  CourseComputer = 'Course Computer',
}

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

export enum SeatalkDisplayColor {
  Day1 = 'Day 1',
  Day2 = 'Day 2',
  Redblack = 'Red/Black',
  Inverse = 'Inverse',
}

export enum AirmarCalibrateFunction {
  NormalcancelCalibration = 'Normal/cancel calibration',
  EnterCalibrationMode = 'Enter calibration mode',
  ResetCalibrationTo0 = 'Reset calibration to 0',
  Verify = 'Verify',
  ResetCompassToDefaults = 'Reset compass to defaults',
  ResetDampingToDefaults = 'Reset damping to defaults',
}

export enum AirmarCalibrateStatus {
  Queried = 'Queried',
  Passed = 'Passed',
  FailedTimeout = 'Failed - timeout',
  FailedTiltError = 'Failed - tilt error',
  FailedOther = 'Failed - other',
  InProgress = 'In progress',
}

export enum AirmarTemperatureInstance {
  DeviceSensor = 'Device Sensor',
  OnboardWaterSensor = 'Onboard Water Sensor',
  OptionalWaterSensor = 'Optional Water Sensor',
}

export enum AirmarFilter {
  NoFilter = 'No filter',
  BasicIirFilter = 'Basic IIR filter',
}

export enum ControllerState {
  ErrorActive = 'Error Active',
  ErrorPassive = 'Error Passive',
  BusOff = 'Bus Off',
}

export enum EquipmentStatus {
  Operational = 'Operational',
  Fault = 'Fault',
}

export enum MobStatus {
  MobEmitterActivated = 'MOB Emitter Activated',
  ManualOnBoardMobButtonActivation = 'Manual on-board MOB Button Activation',
  TestMode = 'Test mode',
}

export enum LowBattery {
  Good = 'Good',
  Low = 'Low',
}

export enum TurnMode {
  RudderLimitControlled = 'Rudder limit controlled',
  TurnRateControlled = 'Turn rate controlled',
  RadiusControlled = 'Radius controlled',
}

export enum Acceptability {
  BadLevel = 'Bad level',
  BadFrequency = 'Bad frequency',
  BeingQualified = 'Being qualified',
  Good = 'Good',
}

export enum Line {
  Line1 = 'Line 1',
  Line2 = 'Line 2',
  Line3 = 'Line 3',
}

export enum Waveform {
  SineWave = 'Sine wave',
  ModifiedSineWave = 'Modified sine wave',
}

export enum TankType {
  Fuel = 'Fuel',
  Water = 'Water',
  GrayWater = 'Gray water',
  LiveWell = 'Live well',
  Oil = 'Oil',
  BlackWater = 'Black water',
}

export enum DcSource {
  Battery = 'Battery',
  Alternator = 'Alternator',
  Convertor = 'Convertor',
  SolarCell = 'Solar cell',
  WindGenerator = 'Wind generator',
}

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

export enum ChargingAlgorithm {
  Trickle = 'Trickle',
  ConstantVoltageConstantCurrent = 'Constant voltage / Constant current',
  _2StagenoFloat = '2 stage (no float)',
  _3Stage = '3 stage',
}

export enum ChargerMode {
  Standalone = 'Standalone',
  Primary = 'Primary',
  Secondary = 'Secondary',
  Echo = 'Echo',
}

export enum InverterState {
  Invert = 'Invert',
  AcPassthru = 'AC passthru',
  LoadSense = 'Load sense',
  Fault = 'Fault',
  Disabled = 'Disabled',
}

export enum BatteryType {
  Flooded = 'Flooded',
  Gel = 'Gel',
  Agm = 'AGM',
}

export enum BatteryVoltage {
  _6V = '6V',
  _12V = '12V',
  _24V = '24V',
  _32V = '32V',
  _36V = '36V',
  _42V = '42V',
  _48V = '48V',
}

export enum BatteryChemistry {
  Pblead = 'Pb (Lead)',
  Li = 'Li',
  NiCd = 'NiCd',
  ZnO = 'ZnO',
  NiMh = 'NiMH',
}

export enum GoodWarningError {
  Good = 'Good',
  Warning = 'Warning',
  Error = 'Error',
}

export enum Tracking {
  Cancelled = 'Cancelled',
  Acquiring = 'Acquiring',
  Tracking = 'Tracking',
  Lost = 'Lost',
}

export enum TargetAcquisition {
  Manual = 'Manual',
  Automatic = 'Automatic',
}

export enum WindlassDirection {
  Off = 'Off',
  Down = 'Down',
  Up = 'Up',
}

export enum SpeedType {
  SingleSpeed = 'Single speed',
  DualSpeed = 'Dual speed',
  ProportionalSpeed = 'Proportional speed',
}

export enum WindlassMotion {
  WindlassStopped = 'Windlass stopped',
  DeploymentOccurring = 'Deployment occurring',
  RetrievalOccurring = 'Retrieval occurring',
}

export enum RodeType {
  ChainPresentlyDetected = 'Chain presently detected',
  RopePresentlyDetected = 'Rope presently detected',
}

export enum DockingStatus {
  NotDocked = 'Not docked',
  FullyDocked = 'Fully docked',
}

export enum AisType {
  Sotdma = 'SOTDMA',
  Cs = 'CS',
}

export enum AisBand {
  Top525KHzOfMarineBand = 'Top 525 kHz of marine band',
  EntireMarineBand = 'Entire marine band',
}

export enum AisMode {
  Autonomous = 'Autonomous',
  Assigned = 'Assigned',
}

export enum AisCommunicationState {
  Sotdma = 'SOTDMA',
  Itdma = 'ITDMA',
}

export enum Available {
  Available = 'Available',
  NotAvailable = 'Not available',
}

export enum BearingMode {
  GreatCircle = 'Great Circle',
  Rhumbline = 'Rhumbline',
}

export enum MarkType {
  Collision = 'Collision',
  TurningPoint = 'Turning point',
  Reference = 'Reference',
  Wheelover = 'Wheelover',
  Waypoint = 'Waypoint',
}

export enum GnssMode {
  _1D = '1D',
  _2D = '2D',
  _3D = '3D',
  Auto = 'Auto',
}

export enum RangeResidualMode {
  RangeResidualsWereUsedToCalculateData = 'Range residuals were used to calculate data',
  RangeResidualsWereCalculatedAfterThePosition = 'Range residuals were calculated after the position',
}

export enum DgnssMode {
  None = 'None',
  SbasIfAvailable = 'SBAS if available',
  Sbas = 'SBAS',
}

export enum SatelliteStatus {
  NotTracked = 'Not tracked',
  Tracked = 'Tracked',
  Used = 'Used',
  NotTrackedPlusdiff = 'Not tracked+Diff',
  TrackedPlusdiff = 'Tracked+Diff',
  UsedPlusdiff = 'Used+Diff',
}

export enum AisVersion {
  ItuRM13711 = 'ITU-R M.1371-1',
  ItuRM13713 = 'ITU-R M.1371-3',
  ItuRM13715 = 'ITU-R M.1371-5',
  ItuRM1371FutureEdition = 'ITU-R M.1371 future edition',
}

export enum Tide {
  Falling = 'Falling',
  Rising = 'Rising',
}

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

export enum EntertainmentIdType {
  Group = 'Group',
  File = 'File',
  EncryptedGroup = 'Encrypted group',
  EncryptedFile = 'Encrypted file',
}

export enum EntertainmentDefaultSettings {
  SaveCurrentSettingsAsUserDefault = 'Save current settings as user default',
  LoadUserDefault = 'Load user default',
  LoadManufacturerDefault = 'Load manufacturer default',
}

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

export enum VideoProtocols {
  Pal = 'PAL',
  Ntsc = 'NTSC',
}

export enum EntertainmentVolumeControl {
  Up = 'Up',
  Down = 'Down',
}

export enum BluetoothStatus {
  Connected = 'Connected',
  NotConnected = 'Not connected',
  NotPaired = 'Not paired',
}

export enum BluetoothSourceStatus {
  Reserved = 'Reserved',
  Connected = 'Connected',
  Connecting = 'Connecting',
  NotConnected = 'Not connected',
}

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

export enum SimnetApMode {
  Heading = 'Heading',
  Wind = 'Wind',
  Nav = 'Nav',
  NoDrift = 'No Drift',
}

export enum SimnetDeviceModel {
  Ac = 'AC',
  OtherDevice = 'Other device',
  Nac = 'NAC',
}

export enum SimnetDeviceReport {
  Status = 'Status',
  SendStatus = 'Send Status',
  Mode = 'Mode',
  SendMode = 'Send Mode',
  SailingProcessorStatus = 'Sailing Processor Status',
}

export enum SimnetApStatus {
  Manual = 'Manual',
  Automatic = 'Automatic',
}

export enum SimnetCommand {
  Text = 'Text',
}

export enum SimnetEventCommand {
  Alarm = 'Alarm',
  ApCommand = 'AP command',
  Autopilot = 'Autopilot',
}

export enum SimnetNightMode {
  Day = 'Day',
  Night = 'Night',
}

export enum SimnetNightModeColor {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
  White = 'White',
}

export enum SimnetDisplayGroup {
  Default = 'Default',
  Group1 = 'Group 1',
  Group2 = 'Group 2',
  Group3 = 'Group 3',
  Group4 = 'Group 4',
  Group5 = 'Group 5',
  Group6 = 'Group 6',
}

export enum SimnetHourDisplay {
  _24Hour = '24 hour',
  _12Hour = '12 hour',
}

export enum SimnetTimeFormat {
  Mmddyyyy = 'MM/dd/yyyy',
  Ddmmyyyy = 'dd/MM/yyyy',
}

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

export enum SimnetApEvents {
  Standby = 'Standby',
  AutoMode = 'Auto mode',
  NavMode = 'Nav mode',
  NonFollowUpMode = 'Non Follow Up mode',
  FollowUpMode = 'Follow Up mode',
  WindMode = 'Wind mode',
  Squareturn = 'Square (Turn)',
  CTurn = 'C-Turn',
  UTurn = 'U-Turn',
  Spiralturn = 'Spiral (Turn)',
  ZigZagturn = 'Zig Zag (Turn)',
  LazySturn = 'Lazy-S (Turn)',
  Depthturn = 'Depth (Turn)',
  ChangeCourse = 'Change course',
  TimerSync = 'Timer sync',
  PingPortEnd = 'Ping port end',
  PingStarboardEnd = 'Ping starboard end',
}

export enum SimnetDirection {
  Port = 'Port',
  Starboard = 'Starboard',
  LeftRudderport = 'Left rudder (port)',
  RightRudderstarboard = 'Right rudder (starboard)',
}

export enum SimnetAlarm {
  LowBoatSpeed = 'Low boat speed',
  WindDataMissing = 'Wind data missing',
}

export enum FusionMessageId {
  RequestStatus = 'Request Status',
  Source = 'Source',
  TrackInfo = 'Track Info',
  TrackTitle = 'Track Title',
  TrackArtist = 'Track Artist',
  TrackAlbum = 'Track Album',
  TrackProgress = 'Track Progress',
  AmfmStation = 'AM/FM Station',
  Vhf = 'VHF',
  Squelch = 'Squelch',
  Scan = 'Scan',
  Mute = 'Mute',
  Replay = 'Replay',
  SetZoneVolume = 'Set Zone Volume',
  SetAllVolumes = 'Set All Volumes',
  SubVolume = 'Sub Volume',
  Tone = 'Tone',
  Volume = 'Volume',
  Power = 'Power',
  UnitName = 'Unit Name',
  SiriusXmChannel = 'SiriusXM Channel',
  SiriusXmTitle = 'SiriusXM Title',
  SiriusXmArtist = 'SiriusXM Artist',
  SiriusXmGenre = 'SiriusXM Genre',
  ZoneName = 'Zone Name',
}

export enum FusionPlayStatus {
  Invalid = 'Invalid',
  Playing = 'Playing',
  Paused = 'Paused',
  Stopped = 'Stopped',
  SkipForward = 'Skip Forward',
  SkipRewind = 'Skip Rewind',
}

export enum FusionSourceType {
  Am = 'AM',
  Fm = 'FM',
  Aux = 'Aux',
  Sirius = 'Sirius',
  Ipod = 'Ipod',
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

export enum FusionSiriusComState {
  Unknown = 'Unknown',
  Off = 'Off',
  Initialising = 'Initialising',
  On = 'On',
}

export enum FusionSiriusAlert {
  Unknown = 'Unknown',
  None = 'None',
  Antenna = 'Antenna',
  NoSignal = 'NoSignal',
  SubscriptionUpdate = 'Subscription Update',
}

export enum FusionSiriusTuningMode {
  Normal = 'Normal',
  Category = 'Category',
  Preset = 'Preset',
}

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
  SiriusXmSignal = 'SiriusXm Signal',
  SiriusXmParentalRequest = 'SiriusXM Parental Request',
  SiriusXmDiagnostics = 'SiriusXM Diagnostics',
  SiriusXmPresets = 'SiriusXM Presets',
  ZoneName = 'Zone Name',
}

export enum SonichubControl {
  Set = 'Set',
  Ack = 'Ack',
}

export enum SonichubSource {
  Am = 'AM',
  Fm = 'FM',
  IPod = 'iPod',
  Usb = 'USB',
  Aux = 'AUX',
  Aux2 = 'AUX 2',
  Mic = 'Mic',
}

export enum IsoControl {
  Ack = 'ACK',
  Nak = 'NAK',
  AccessDenied = 'Access Denied',
  AddressBusy = 'Address Busy',
}

export enum IsoCommand {
  Ack = 'ACK',
  Rts = 'RTS',
  Cts = 'CTS',
  Eom = 'EOM',
  Bam = 'BAM',
  Abort = 'Abort',
}

export enum GroupFunction {
  Request = 'Request',
  Command = 'Command',
  Acknowledge = 'Acknowledge',
  ReadFields = 'Read Fields',
  ReadFieldsReply = 'Read Fields Reply',
  WriteFields = 'Write Fields',
  WriteFieldsReply = 'Write Fields Reply',
}

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

export enum PgnErrorCode {
  Acknowledge = 'Acknowledge',
  PgnNotSupported = 'PGN not supported',
  PgnNotAvailable = 'PGN not available',
  AccessDenied = 'Access denied',
  NotSupported = 'Not supported',
  TagNotSupported = 'Tag not supported',
  ReadOrWriteNotSupported = 'Read or Write not supported',
}

export enum AirmarTransmissionInterval {
  MeasureInterval = 'Measure interval',
  RequestedByUser = 'Requested by user',
}

export enum MobPositionSource {
  PositionEstimatedByTheVessel = 'Position estimated by the vessel',
  PositionReportedByMobEmitter = 'Position reported by MOB emitter',
}

export enum SteeringMode {
  MainSteering = 'Main Steering',
  NonFollowUpDevice = 'Non-Follow-Up Device',
  FollowUpDevice = 'Follow-Up Device',
  HeadingControlStandalone = 'Heading Control Standalone',
  HeadingControl = 'Heading Control',
  TrackControl = 'Track Control',
}

export enum FusionRadioSource {
  Am = 'AM',
  Fm = 'FM',
}

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
  UsbRepeat = 'USB repeat',
  UsbShuffle = 'USB shuffle',
  IPodAlbumArtwork = 'iPod Album Artwork',
  IPodRepeat = 'iPod repeat',
  IPodShuffle = 'iPod shuffle',
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
  IdAccessorySource = 'Id Accessory Source',
  NmeaPower = 'NMEA Power',
  LowPowerMode = 'Low Power Mode',
  DvdRegion = 'DVD region',
  VolumeZoneSync = 'Volume Zone Sync',
  MaxVolumeStart = 'Max Volume Start',
  BtAutoConnect = 'BT Auto Connect',
  NullSetting = 'Null Setting',
}

export enum FusionRepeatStatus {
  Off = 'Off',
  Onetrack = 'One/track',
  Allalbum = 'All/album',
}

export enum AirmarPostControl {
  ReportPreviousValues = 'Report previous values',
  GenerateNewValues = 'Generate new values',
}

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

export enum SonichubTuning {
  SeekingUp = 'Seeking up',
  Tuned = 'Tuned',
  SeekingDown = 'Seeking down',
}

export enum SonichubPlaylist {
  Report = 'Report',
  NextSong = 'Next song',
  PreviousSong = 'Previous song',
}

export enum FusionPowerState {
  On = 'On',
  Off = 'Off',
}

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

export enum DeviceTempState {
  Cold = 'Cold',
  Warm = 'Warm',
  Hot = 'Hot',
}

export enum BandgDecimals {
  _0 = '0',
  _1 = '1',
  _2 = '2',
  _3 = '3',
  _4 = '4',
  Auto = 'Auto',
}

export enum GarminColorMode {
  Day = 'Day',
  Night = 'Night',
  Color = 'Color',
}

export enum GarminColor {
  DayFullColor = 'Day full color',
  DayHighContrast = 'Day high contrast',
  NightFullColor = 'Night full color',
  NightRedblack = 'Night red/black',
  NightGreenblack = 'Night green/black',
}

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

export enum SeatalkPilotMode16 {
  Standby = 'Standby',
  AutoCompassCommanded = 'Auto, compass commanded',
  VaneWindMode = 'Vane, Wind Mode',
  TrackMode = 'Track Mode',
  NoDriftCogReferencedinTrackCourseChanges = 'No Drift, COG referenced (In track, course changes)',
}

export enum StationHealth {
  NotWorking = 'Not Working',
  Unmonitored = 'Unmonitored',
  HealthyOperational = 'Healthy Operational',
  HealthyTestMode = 'Healthy Test Mode',
  TestMode = 'Test Mode',
}

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

export enum SerialDetectionMode {
  AutoBitRate = 'Auto bit rate',
  ManualBitRate = 'Manual bit rate',
}

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

export enum DifferentialMode {
  Manual = 'Manual',
  AutoPower = 'Auto Power',
  AutoRange = 'Auto Range',
}

export enum WpPositionResolution {
  MoreThan01Min = 'more than 0.1 min',
  _00101Min = '<0.01 .. 0.1] min',
  _0001001Min = '<0.001 .. 0.01] min',
  _000010001Min = '<0.0001 .. 0.001] min',
  _000001Min = '<0 .. 0.0001] min',
}

export enum WpIdentificationMethod {
  WaypointsInWpList = 'Waypoints in WP list',
  WaypointsEmbeddedInRoute = 'Waypoints embedded in route',
}

export enum WpRouteStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Deleted = 'Deleted',
}

export enum WpNavigationMethod {
  GreatCircle = 'Great Circle',
  RhumbLine = 'Rhumb Line',
}

export enum InverterMode {
  Standalone = 'Standalone',
  SeriesMaster = 'Series Master',
  SeriesSlave = 'Series Slave',
  ParallelMaster = 'Parallel Master',
  ParallelSlave = 'Parallel Slave',
}

export enum CertificationLevel {
  LevelA = 'Level A',
  LevelB = 'Level B',
}

export enum AgsMode {
  Off = 'Off',
  On = 'On',
  Automatic = 'Automatic',
}

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

export enum PowerMode {
  High = 'High',
  Low = 'Low',
}

export enum BroadcastIndicator {
  BroadcastGeoAreaMessage = 'Broadcast geo area message',
  AddressedMessage = 'Addressed message',
}

export enum Bandwidth {
  Default = 'Default',
  _125KHz = '12.5 kHz',
}

export enum FloodState {
  Flood = 'Flood',
  Slack = 'Slack',
  Ebb = 'Ebb',
}

export enum AcLine {
  Line1 = 'Line 1',
  Line2 = 'Line 2',
  Line3 = 'Line 3',
}

export enum ZoneSize {
  _1Nm = '1 nm',
  _2Nm = '2 nm',
  _3Nm = '3 nm',
  _4Nm = '4 nm',
  _5Nm = '5 nm',
  _6Nm = '6 nm',
}

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

export enum StationStatus {
  StationInUse = 'Station in use',
  LowSnr = 'Low SNR',
  CycleError = 'Cycle Error',
  Blink = 'Blink',
}

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

export enum ThrusterControlEvents {
  AnotherDeviceControllingThruster = 'Another device controlling thruster',
  BoatSpeedTooFastToSafelyUseThruster = 'Boat speed too fast to safely use thruster',
}

export enum ThrusterMotorEvents {
  MotorOverTemperatureCutout = 'Motor over temperature cutout',
  MotorOverCurrentCutout = 'Motor over current cutout',
  LowOilLevelWarning = 'Low oil level warning',
  OilOverTemperatureWarning = 'Oil over temperature warning',
  ControllerUnderVoltageCutout = 'Controller under voltage cutout',
  ManufacturerDefined = 'Manufacturer defined',
}

export enum WindlassControl {
  AnotherDeviceControllingWindlass = 'Another device controlling windlass',
}

export enum WindlassOperation {
  SystemError = 'System error',
  SensorError = 'Sensor error',
  NoWindlassMotionDetected = 'No windlass motion detected',
  RetrievalDockingDistanceReached = 'Retrieval docking distance reached',
  EndOfRodeReached = 'End of rode reached',
}

export enum WindlassMonitoring {
  ControllerUnderVoltageCutOut = 'Controller under voltage cut-out',
  ControllerOverCurrentCutOut = 'Controller over current cut-out',
  ControllerOverTemperatureCutOut = 'Controller over temperature cut-out',
  ManufacturerDefined = 'Manufacturer defined',
}

export enum SimnetApModeBitfield {
  Standby = 'Standby',
  Heading = 'Heading',
  Nav = 'Nav',
  NoDrift = 'No Drift',
  Wind = 'Wind',
}

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

export enum EntertainmentRepeatBitfield {
  Song = 'Song',
  PlayQueue = 'Play queue',
}

export enum EntertainmentShuffleBitfield {
  PlayQueue = 'Play queue',
  All = 'All',
}

export enum WpChange {
  ChangeInMainDatapositionName = 'Change in main data (Position, Name)',
  ChangeInSupplementaryParametersorNewAdded = 'Change in supplementary parameters (or new added)',
  ChangedNumberOfWPsInRoutewpListAndorNameChangedadded = 'Changed number of WPs in Route/WP-List, and/or name changed/added',
  RouteChangeSupplementaryParametersorNewAdded = 'Route: Change supplementary parameters (or new added)',
  OtherNotSpecifiedChanged = 'Other not specified changed',
}

export enum WpCriticalParameters {
  NavigationMethod = 'Navigation Method',
  XteLimit = 'XTE Limit',
}

