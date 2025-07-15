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
export enum LightingCommandValues {
  Idle = 0x0,
  DetectDevices = 0x1,
  Reboot = 0x2,
  FactoryReset = 0x3,
  PoweringUp = 0x4,
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
export enum IndustryCodeValues {
  Global = 0x0,
  Highway = 0x1,
  Agriculture = 0x2,
  Construction = 0x3,
  MarineIndustry = 0x4,
  Industrial = 0x5,
  Marine = 0x4,
}

/**
 * @category Enumerations
 */
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

/**
 * @category Enumerations
 */
export enum ManufacturerCodeValues {
  ArksEnterprisesInc = 0x45,
  FwMurphyenovationControls = 0x4e,
  TwinDisc = 0x50,
  KohlerPowerSystems = 0x55,
  HemisphereGpsInc = 0x58,
  BepMarine = 0x74,
  Airmar = 0x87,
  Maretron = 0x89,
  Lowrance = 0x8c,
  MercuryMarine = 0x90,
  NautibusElectronicGmbH = 0x93,
  BlueWaterData = 0x94,
  Westerbeke = 0x9a,
  IssproInc = 0x9d,
  OffshoreSystemsukLtd = 0xa1,
  Evinrudebrp = 0xa3,
  CpacSystemsAb = 0xa5,
  XantrexTechnologyInc = 0xa8,
  MarlinTechnologiesInc = 0xa9,
  YanmarMarine = 0xac,
  VolvoPenta = 0xae,
  HondaMarine = 0xaf,
  CarlingTechnologiesIncmoritzAerospace = 0xb0,
  BeedeInstruments = 0xb9,
  FloscanInstrumentCoInc = 0xc0,
  Nobletec = 0xc1,
  MysticValleyCommunications = 0xc6,
  Actia = 0xc7,
  HondaMarine2 = 0xc8,
  DisenosYTechnologia = 0xc9,
  DigitalSwitchingSystems = 0xd3,
  Xintexatena = 0xd7,
  EmmiNetworkSL = 0xe0,
  HondaMarine3 = 0xe1,
  Zf = 0xe4,
  Garmin = 0xe5,
  YachtMonitoringSolutions = 0xe9,
  SailormadeMarineTelemetrytetraTechnologyLtd = 0xeb,
  Eride = 0xf3,
  HondaMarine4 = 0xfa,
  HondaMotorCompanyLtd = 0x101,
  Groco = 0x110,
  Actisense = 0x111,
  AmphenolLtwTechnology = 0x112,
  Navico = 0x113,
  HamiltonJet = 0x11b,
  SeaRecovery = 0x11d,
  CoelmoSrlItaly = 0x11e,
  BepMarine2 = 0x127,
  EmpirBus = 0x130,
  NovAtel = 0x131,
  SleipnerMotorAs = 0x132,
  MbwTechnologies = 0x133,
  FischerPanda = 0x137,
  Icom = 0x13b,
  Qwerty = 0x148,
  Dief = 0x149,
  BoeningAutomationstechnologieGmbHCoKg = 0x155,
  KoreanMaritimeUniversity = 0x159,
  ThraneAndThrane = 0x15f,
  Mastervolt = 0x163,
  FischerPandaGenerators = 0x164,
  VictronEnergy = 0x166,
  RollsRoyceMarine = 0x172,
  ElectronicDesign = 0x175,
  NorthernLights = 0x176,
  Glendinning = 0x17a,
  BG = 0x17d,
  RosePointNavigationSystems = 0x180,
  JohnsonOutdoorsMarineElectronicsIncGeonav = 0x181,
  Capi2 = 0x18a,
  BeyondMeasure = 0x18c,
  LivorsiMarine = 0x190,
  ComNav = 0x194,
  Chetco = 0x199,
  FusionElectronics = 0x1a3,
  StandardHorizon = 0x1a5,
  TrueHeadingAb = 0x1a6,
  EgersundMarineElectronicsAs = 0x1aa,
  EmTrakMarineElectronics = 0x1ab,
  TohatsuCoJp = 0x1af,
  DigitalYacht = 0x1b5,
  ComarSystemsLimited = 0x1b6,
  Cummins = 0x1b8,
  VdoakaContinentalCorporation = 0x1bb,
  ParkerHannifinAkaVillageMarineTech = 0x1c3,
  AlltekMarineElectronicsCorp = 0x1cb,
  SanGiorgioSEIN = 0x1cc,
  VeethreeElectronicsMarine = 0x1d2,
  HumminbirdMarineElectronics = 0x1d3,
  SiTexMarineElectronics = 0x1d6,
  SeaCrossMarineAb = 0x1d7,
  GmeAkaStandardCommunicationsPtyLtd = 0x1db,
  HumminbirdMarineElectronics2 = 0x1dc,
  OceanSatBv = 0x1de,
  ChetcoDigitialInstruments = 0x1e1,
  Watcheye = 0x1ed,
  LcjCapteurs = 0x1f3,
  AttwoodMarine = 0x1f6,
  NaviopSRL = 0x1f7,
  VesperMarineLtd = 0x1f8,
  MarinesoftCoLtd = 0x1fe,
  NoLandEngineering = 0x205,
  TransasUsa = 0x206,
  NationalInstrumentsKorea = 0x211,
  NationalMarineElectronicsAssociation = 0x212,
  OnwaMarine = 0x214,
  Webasto = 0x21c,
  MarinecraftsouthKorea = 0x23b,
  McMurdoGroupAkaOroliaLtd = 0x23d,
  Advansea = 0x242,
  Kvh = 0x243,
  SanJoseTechnology = 0x244,
  YachtControl = 0x247,
  SuzukiMotorCorporation = 0x24a,
  UsCoastGuard = 0x24f,
  ShipModuleAkaCustomware = 0x253,
  AquaticAv = 0x258,
  AventicsGmbH = 0x25d,
  Intellian = 0x25e,
  SamwonIt = 0x264,
  ArltTecnologies = 0x266,
  BavariaYacts = 0x27d,
  DiverseYachtServices = 0x281,
  WemaUSADbaKus = 0x284,
  Garmin2 = 0x285,
  ShenzhenJiuzhouHimunication = 0x292,
  RockfordCorp = 0x2b0,
  HarmanInternational = 0x2bb,
  JlAudio = 0x2c0,
  LarsThrane = 0x2c4,
  Autonnic = 0x2cb,
  YachtDevices = 0x2cd,
  ReapSystems = 0x2de,
  AuElectronicsGroup = 0x2df,
  LxNav = 0x2e3,
  LittelfuseIncformerlyCarlingTechnologies = 0x2e5,
  DaeMyung = 0x2e7,
  Woosung = 0x2e8,
  IsottaIfraSrl = 0x2ec,
  ClarionUs = 0x305,
  HmiSystems = 0x308,
  OceanSignal = 0x309,
  Seekeeper = 0x30a,
  PolyPlanar = 0x30d,
  FischerPandaDe = 0x311,
  BroydaIndustries = 0x31b,
  CanadianAutomotive = 0x31c,
  TidesMarine = 0x31d,
  Lumishore = 0x31e,
  StillWaterDesignsAndAudio = 0x31f,
  BjTechnologiesbeneteau = 0x322,
  GillSensors = 0x323,
  BlueWaterDesalination = 0x32b,
  Flir = 0x32f,
  UndheimSystems = 0x338,
  LewmarInc = 0x33a,
  TeamSurv = 0x346,
  FellMarine = 0x34c,
  Oceanvolt = 0x34f,
  Prospec = 0x35e,
  DataPanelCorp = 0x364,
  L3Technologies = 0x37a,
  RhodanMarineSystems = 0x37e,
  NexfourSolutions = 0x380,
  AsaElectronics = 0x389,
  MarinesCosouthKorea = 0x38d,
  NauticOn = 0x38f,
  Sentinel = 0x395,
  JlMarineYstems = 0x3a1,
  Ecotronix = 0x3a2,
  ZontisaMarine = 0x3b0,
  ExorInternational = 0x3b7,
  TimbolierIndustries = 0x3c2,
  TjcMicro = 0x3c3,
  CoxPowertrain = 0x3c8,
  BlueSeas = 0x3c9,
  KobeltManufacturingCoLtd = 0x3d5,
  BlueOceanIot = 0x3e0,
  XentaSystems = 0x3e5,
  UltraflexSpA = 0x3ec,
  LintestSmartBoat = 0x3f0,
  Soundmax = 0x3f3,
  TeamItaliaMarineonyxMarineAutomationSRL = 0x3fc,
  Entratech = 0x3fd,
  ItcInc = 0x3fe,
  TheMarineGuardianLlc = 0x405,
  SonicCorporation = 0x417,
  ProNav = 0x41b,
  VetusMaxwellInc = 0x41d,
  LithiumPros = 0x420,
  Boatrax = 0x423,
  MarolCoLtd = 0x426,
  CalypsoInstruments = 0x429,
  SpotZeroWater = 0x42a,
  LithionicsBatteryLlc = 0x42d,
  QuickTeckElectronicsLtd = 0x42e,
  UnidenAmerica = 0x433,
  Nauticoncept = 0x43b,
  ShadowCasterLedLightingLlc = 0x43c,
  WetSoundsLlc = 0x43d,
  ETACircuitBreakers = 0x440,
  Scheiber = 0x444,
  SmartYachtsInternationalLimited = 0x44c,
  Dockmate = 0x455,
  BobsMachine = 0x45a,
  L3HarrisAsv = 0x45e,
  BalmarLlc = 0x45f,
  ElettromediaSpa = 0x460,
  Electromaax = 0x467,
  AcrossOceansSystemsLtd = 0x474,
  KiwiYachting = 0x479,
  BsbArtificialIntelligenceGmbH = 0x47e,
  OrcaTechnologoesAs = 0x47f,
  TbsElectronicsBv = 0x482,
  TechnotonElectroics = 0x486,
  MgEnergySystemsBV = 0x488,
  SeaMacineRoboticsInc = 0x491,
  VistaManufacturing = 0x493,
  Zipwake = 0x49f,
  SailmonBv = 0x4a2,
  AirmoniqProKft = 0x4a8,
  SierraMarine = 0x4aa,
  XinuoInformationTechnologyxiamen = 0x4b0,
  Septentrio = 0x4c2,
  NkeMarineElecronics = 0x4d1,
  SuperTrackAps = 0x4d6,
  HondaElectronicsCoLtd = 0x4d7,
  RaritanEngineeringCompanyInc = 0x4dd,
  IntegratedPowerSolutionsAg = 0x4e1,
  InteractiveTechnologiesInc = 0x4ec,
  LtgTech = 0x503,
  EnergySolutionsukLtd = 0x513,
  WattFuelCellCorp = 0x514,
  ProMainer = 0x516,
  DragonflyEnergy = 0x519,
  KodenElectronicsCoLtd = 0x51a,
  HumphreeAb = 0x51f,
  HinkleyYachts = 0x524,
  GlobalMarineManagementGmbHgmm = 0x525,
  TriskelMarineLtd = 0x528,
  WarwickControlTechnologies = 0x532,
  DolphinCharger = 0x533,
  BarnacleSystemsInc = 0x539,
  RadianIoTInc = 0x544,
  OceanLedMarineLtd = 0x549,
  BluNav = 0x54f,
  OvanantongSaiyangElectronicsCoLtd = 0x551,
  RadPropulsion = 0x558,
  ElectricYacht = 0x559,
  ElcoMotorYachts = 0x55c,
  TecnosealFoundrySRL = 0x568,
  ProChargingSystemsLlc = 0x569,
  EvexCoLtd = 0x56d,
  GobiusSensorTechnologyAb = 0x576,
  ArcoMarine = 0x57b,
  LencoMarineInc = 0x580,
  NaocontrolSL = 0x585,
  Revatek = 0x589,
  Aeolionics = 0x59e,
  PredictWindLtd = 0x59f,
  EgisMobileElectric = 0x5a0,
  StarboardYachtGroup = 0x5a5,
  RoswellMarine = 0x5a6,
  EPropulsionguangdongEPropulsionTechnologyLtd = 0x5ab,
  MicroAirLlc = 0x5ac,
  VitalBattery = 0x5ad,
  RideControllerLlc = 0x5b2,
  TocaroBlue = 0x5b4,
  VanquishYachts = 0x5b5,
  FtTechnologies = 0x5bf,
  AlpsAlpineCoLtd = 0x5c6,
  EForceMarine = 0x5c9,
  CmcMarine = 0x5ca,
  NanjingSandemarineInformationTechnologyCoLtd = 0x5cb,
  TeleflexMarineseaStarSolutions = 0x73a,
  Raymarine = 0x73b,
  Navionics = 0x73c,
  JapanRadioCo = 0x73d,
  NorthstarTechnologies = 0x73e,
  Furuno = 0x73f,
  Trimble = 0x740,
  Simrad = 0x741,
  Litton = 0x742,
  KvasarAb = 0x743,
  Mmp = 0x744,
  VectorCantech = 0x745,
  YamahaMarine = 0x746,
  FariaInstruments = 0x747,
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
export enum AisMessageIdValues {
  ScheduledClassAPositionReport = 0x1,
  AssignedScheduledClassAPositionReport = 0x2,
  InterrogatedClassAPositionReport = 0x3,
  BaseStationReport = 0x4,
  StaticAndVoyageRelatedData = 0x5,
  BinaryAddressedMessage = 0x6,
  BinaryAcknowledgement = 0x7,
  BinaryBroadcastMessage = 0x8,
  StandardSarAircraftPositionReport = 0x9,
  UtcdateInquiry = 0xa,
  UtcdateResponse = 0xb,
  SafetyRelatedAddressedMessage = 0xc,
  SafetyRelatedAcknowledgement = 0xd,
  SatetyRelatedBroadcastMessage = 0xe,
  Interrogation = 0xf,
  AssignmentModeCommand = 0x10,
  DgnssBroadcastBinaryMessage = 0x11,
  StandardClassBPositionReport = 0x12,
  ExtendedClassBPositionReport = 0x13,
  DataLinkManagementMessage = 0x14,
  AtonReport = 0x15,
  ChannelManagement = 0x16,
  GroupAssignmentCommand = 0x17,
  StaticDataReport = 0x18,
  SingleSlotBinaryMessage = 0x19,
  MultipleSlotBinaryMessage = 0x1a,
  PositionReportForLongRangeApplications = 0x1b,
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
export enum ShipTypeValues {
  Unavailable = 0x0,
  WingInGround = 0x14,
  WingInGroundhazardCatX = 0x15,
  WingInGroundhazardCatY = 0x16,
  WingInGroundhazardCatZ = 0x17,
  WingInGroundhazardCatOs = 0x18,
  WingInGroundnoAdditionalInformation = 0x1d,
  Fishing = 0x1e,
  Towing = 0x1f,
  TowingExceeds200MOrWiderThan25M = 0x20,
  EngagedInDredgingOrUnderwaterOperations = 0x21,
  EngagedInDivingOperations = 0x22,
  EngagedInMilitaryOperations = 0x23,
  Sailing = 0x24,
  Pleasure = 0x25,
  HighSpeedCraft = 0x28,
  HighSpeedCrafthazardCatX = 0x29,
  HighSpeedCrafthazardCatY = 0x2a,
  HighSpeedCrafthazardCatZ = 0x2b,
  HighSpeedCrafthazardCatOs = 0x2c,
  HighSpeedCraftnoAdditionalInformation = 0x31,
  PilotVessel = 0x32,
  Sar = 0x33,
  Tug = 0x34,
  PortTender = 0x35,
  AntiPollution = 0x36,
  LawEnforcement = 0x37,
  Spare = 0x38,
  Spare2 = 0x39,
  Medical = 0x3a,
  ShipsAndAircraftOfStatesNotPartiesToAnArmedConflict = 0x3b,
  PassengerShip = 0x3c,
  PassengerShiphazardCatX = 0x3d,
  PassengerShiphazardCatY = 0x3e,
  PassengerShiphazardCatZ = 0x3f,
  PassengerShiphazardCatOs = 0x40,
  PassengerShipnoAdditionalInformation = 0x45,
  CargoShip = 0x46,
  CargoShiphazardCatX = 0x47,
  CargoShiphazardCatY = 0x48,
  CargoShiphazardCatZ = 0x49,
  CargoShiphazardCatOs = 0x4a,
  CargoShipnoAdditionalInformation = 0x4f,
  Tanker = 0x50,
  TankerhazardCatX = 0x51,
  TankerhazardCatY = 0x52,
  TankerhazardCatZ = 0x53,
  TankerhazardCatOs = 0x54,
  TankernoAdditionalInformation = 0x59,
  Other = 0x5a,
  OtherhazardCatX = 0x5b,
  OtherhazardCatY = 0x5c,
  OtherhazardCatZ = 0x5d,
  OtherhazardCatOs = 0x5e,
  OthernoAdditionalInformation = 0x63,
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
export enum DeviceClassValues {
  ReservedFor2000Use = 0x0,
  SystemTools = 0xa,
  SafetySystems = 0x14,
  InternetworkDevice = 0x19,
  ElectricalDistribution = 0x1e,
  ElectricalGeneration = 0x23,
  SteeringAndControlSurfaces = 0x28,
  Propulsion = 0x32,
  Navigation = 0x3c,
  Communication = 0x46,
  SensorCommunicationInterface = 0x4b,
  InstrumentationgeneralSystems = 0x50,
  ExternalEnvironment = 0x55,
  InternalEnvironment = 0x5a,
  DeckPlusCargoPlusFishingEquipmentSystems = 0x64,
  HumanInterface = 0x6e,
  Display = 0x78,
  Entertainment = 0x7d,
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
export enum RepeatIndicatorValues {
  Initial = 0x0,
  FirstRetransmission = 0x1,
  SecondRetransmission = 0x2,
  FinalRetransmission = 0x3,
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
export enum TxRxModeValues {
  TxAtxBRxArxB = 0x0,
  TxARxArxB = 0x1,
  TxBRxArxB = 0x2,
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
export enum StationTypeValues {
  AllTypesOfMobileStation = 0x0,
  AllTypesOfClassBMobileStation = 0x2,
  SarAirborneMobileStation = 0x3,
  AtoNStation = 0x4,
  ClassBCsShipborneMobileStation = 0x5,
  InlandWaterways = 0x6,
  RegionalUse7 = 0x7,
  RegionalUse8 = 0x8,
  RegionalUse9 = 0x9,
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
export enum ReportingIntervalValues {
  AsGivenByTheAutonomousMode = 0x0,
  _10Min = 0x1,
  _6Min = 0x2,
  _3Min = 0x3,
  _1Min = 0x4,
  _30Sec = 0x5,
  _15Sec = 0x6,
  _10Sec = 0x7,
  _5Sec = 0x8,
  _2SecnotApplicableToClassBCs = 0x9,
  NextShorterReportingInterval = 0xa,
  NextLongerReportingInterval = 0xb,
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
export enum AisTransceiverValues {
  ChannelAVdlReception = 0x0,
  ChannelBVdlReception = 0x1,
  ChannelAVdlTransmission = 0x2,
  ChannelBVdlTransmission = 0x3,
  OwnInformationNotBroadcast = 0x4,
  Reserved = 0x5,
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
export enum AisAssignedModeValues {
  AutonomousAndContinuous = 0x0,
  AssignedMode = 0x1,
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
export enum AtonTypeValues {
  DefaultTypeOfAtoNNotSpecified = 0x0,
  ReferencePoint = 0x1,
  Racon = 0x2,
  FixedStructureOffShore = 0x3,
  ReservedForFutureUse = 0x4,
  FixedLightWithoutSectors = 0x5,
  FixedLightWithSectors = 0x6,
  FixedLeadingLightFront = 0x7,
  FixedLeadingLightRear = 0x8,
  FixedBeaconCardinalN = 0x9,
  FixedBeaconCardinalE = 0xa,
  FixedBeaconCardinalS = 0xb,
  FixedBeaconCardinalW = 0xc,
  FixedBeaconPortHand = 0xd,
  FixedBeaconStarboardHand = 0xe,
  FixedBeaconPreferredChannelPortHand = 0xf,
  FixedBeaconPreferredChannelStarboardHand = 0x10,
  FixedBeaconIsolatedDanger = 0x11,
  FixedBeaconSafeWater = 0x12,
  FixedBeaconSpecialMark = 0x13,
  FloatingAtoNCardinalN = 0x14,
  FloatingAtoNCardinalE = 0x15,
  FloatingAtoNCardinalS = 0x16,
  FloatingAtoNCardinalW = 0x17,
  FloatingAtoNPortHandMark = 0x18,
  FloatingAtoNStarboardHandMark = 0x19,
  FloatingAtoNPreferredChannelPortHand = 0x1a,
  FloatingAtoNPreferredChannelStarboardHand = 0x1b,
  FloatingAtoNIsolatedDanger = 0x1c,
  FloatingAtoNSafeWater = 0x1d,
  FloatingAtoNSpecialMark = 0x1e,
  FloatingAtoNLightVessellanbyrigs = 0x1f,
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
export enum AisSpecialManeuverValues {
  NotAvailable = 0x0,
  NotEngagedInSpecialManeuver = 0x1,
  EngagedInSpecialManeuver = 0x2,
  Reserved = 0x3,
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
export enum PositionFixDeviceValues {
  DefaultUndefined = 0x0,
  Gps = 0x1,
  Glonass = 0x2,
  CombinedGpsglonass = 0x3,
  LoranC = 0x4,
  Chayka = 0x5,
  IntegratedNavigationSystem = 0x6,
  Surveyed = 0x7,
  Galileo = 0x8,
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
export enum GnsValues {
  Gps = 0x0,
  Glonass = 0x1,
  GpsPlusglonass = 0x2,
  GpsPlussbaswaas = 0x3,
  GpsPlussbaswaasPlusglonass = 0x4,
  Chayka = 0x5,
  Integrated = 0x6,
  Surveyed = 0x7,
  Galileo = 0x8,
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
export enum EngineInstanceValues {
  SingleEngineOrDualEnginePort = 0x0,
  DualEngineStarboard = 0x1,
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
export enum GearStatusValues {
  Forward = 0x0,
  Neutral = 0x1,
  Reverse = 0x2,
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
export enum DirectionValues {
  Forward = 0x0,
  Reverse = 0x1,
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
export enum PositionAccuracyValues {
  Low = 0x0,
  High = 0x1,
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
export enum RaimFlagValues {
  NotInUse = 0x0,
  InUse = 0x1,
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
export enum TimeStampValues {
  NotAvailable = 0x3c,
  ManualInputMode = 0x3d,
  DeadReckoningMode = 0x3e,
  PositioningSystemIsInoperative = 0x3f,
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
export enum GnsMethodValues {
  NoGnss = 0x0,
  GnssFix = 0x1,
  DgnssFix = 0x2,
  PreciseGnss = 0x3,
  RtkFixedInteger = 0x4,
  RtkFloat = 0x5,
  EstimateddrMode = 0x6,
  ManualInput = 0x7,
  SimulateMode = 0x8,
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
export enum GnsIntegrityValues {
  NoIntegrityChecking = 0x0,
  Safe = 0x1,
  Caution = 0x2,
  Unsafe = 0x3,
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
export enum SystemTimeValues {
  Gps = 0x0,
  Glonass = 0x1,
  RadioStation = 0x2,
  LocalCesiumClock = 0x3,
  LocalRubidiumClock = 0x4,
  LocalCrystalClock = 0x5,
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
}

/**
 * @category Enumerations
 */
export enum MagneticVariationValues {
  Manual = 0x0,
  AutomaticChart = 0x1,
  AutomaticTable = 0x2,
  AutomaticCalculation = 0x3,
  Wmm2000 = 0x4,
  Wmm2005 = 0x5,
  Wmm2010 = 0x6,
  Wmm2015 = 0x7,
  Wmm2020 = 0x8,
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
export enum ResidualModeValues {
  Autonomous = 0x0,
  DifferentialEnhanced = 0x1,
  Estimated = 0x2,
  Simulator = 0x3,
  Manual = 0x4,
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
export enum WindReferenceValues {
  TruegroundReferencedToNorth = 0x0,
  MagneticgroundReferencedToMagneticNorth = 0x1,
  Apparent = 0x2,
  TrueboatReferenced = 0x3,
  TruewaterReferenced = 0x4,
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
export enum WaterReferenceValues {
  PaddleWheel = 0x0,
  PitotTube = 0x1,
  Doppler = 0x2,
  CorrelationultraSound = 0x3,
  ElectroMagnetic = 0x4,
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
export enum YesNoValues {
  No = 0x0,
  Yes = 0x1,
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
export enum OkWarningValues {
  Ok = 0x0,
  Warning = 0x1,
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
export enum OffOnValues {
  Off = 0x0,
  On = 0x1,
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
export enum OffOnControlValues {
  Off = 0x0,
  On = 0x1,
  Reserved = 0x2,
  TakeNoActionnoChange = 0x3,
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
export enum DirectionReferenceValues {
  True = 0x0,
  Magnetic = 0x1,
  Error = 0x2,
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
export enum DirectionRudderValues {
  NoOrder = 0x0,
  MoveToStarboard = 0x1,
  MoveToPort = 0x2,
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
export enum NavStatusValues {
  UnderWayUsingEngine = 0x0,
  AtAnchor = 0x1,
  NotUnderCommand = 0x2,
  RestrictedManeuverability = 0x3,
  ConstrainedByHerDraught = 0x4,
  Moored = 0x5,
  Aground = 0x6,
  EngagedInFishing = 0x7,
  UnderWaySailing = 0x8,
  HazardousMaterialHighSpeed = 0x9,
  HazardousMaterialWingInGround = 0xa,
  PowerDrivenVesselTowingAstern = 0xb,
  PowerDrivenVesselPushingAheadOrTowingAlongside = 0xc,
  AisSart = 0xe,
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
export enum PowerFactorValues {
  Leading = 0x0,
  Lagging = 0x1,
  Error = 0x2,
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
export enum TemperatureSourceValues {
  SeaTemperature = 0x0,
  OutsideTemperature = 0x1,
  InsideTemperature = 0x2,
  EngineRoomTemperature = 0x3,
  MainCabinTemperature = 0x4,
  LiveWellTemperature = 0x5,
  BaitWellTemperature = 0x6,
  RefrigerationTemperature = 0x7,
  HeatingSystemTemperature = 0x8,
  DewPointTemperature = 0x9,
  ApparentWindChillTemperature = 0xa,
  TheoreticalWindChillTemperature = 0xb,
  HeatIndexTemperature = 0xc,
  FreezerTemperature = 0xd,
  ExhaustGasTemperature = 0xe,
  ShaftSealTemperature = 0xf,
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
export enum HumiditySourceValues {
  Inside = 0x0,
  Outside = 0x1,
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
export enum PressureSourceValues {
  Atmospheric = 0x0,
  Water = 0x1,
  Steam = 0x2,
  CompressedAir = 0x3,
  Hydraulic = 0x4,
  Filter = 0x5,
  AltimeterSetting = 0x6,
  Oil = 0x7,
  Fuel = 0x8,
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
export enum DscFormatValues {
  GeographicalArea = 0x66,
  Distress = 0x70,
  CommonInterest = 0x72,
  AllShips = 0x74,
  IndividualStations = 0x78,
  NonCallingPurpose = 0x79,
  IndividualStationAutomatic = 0x7b,
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
export enum DscCategoryValues {
  Routine = 0x64,
  Safety = 0x6c,
  Urgency = 0x6e,
  Distress = 0x70,
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
export enum DscNatureValues {
  Fire = 0x64,
  Flooding = 0x65,
  Collision = 0x66,
  Grounding = 0x67,
  Listing = 0x68,
  Sinking = 0x69,
  DisabledAndAdrift = 0x6a,
  Undesignated = 0x6b,
  AbandoningShip = 0x6c,
  Piracy = 0x6d,
  ManOverboard = 0x6e,
  EpirbEmission = 0x70,
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
export enum DscFirstTelecommandValues {
  F3Eg3EAllModesTp = 0x64,
  F3Eg3EDuplexTp = 0x65,
  Polling = 0x67,
  UnableToComply = 0x68,
  EndOfCall = 0x69,
  Data = 0x6a,
  J3ETp = 0x6d,
  DistressAcknowledgement = 0x6e,
  DistressRelay = 0x70,
  F1Bj2BTtyFec = 0x71,
  F1Bj2BTtyArq = 0x73,
  Test = 0x76,
  ShipPositionOrLocationRegistrationUpdating = 0x79,
  NoInformation = 0x7e,
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
export enum DscSecondTelecommandValues {
  NoReasonGiven = 0x64,
  CongestionAtMsc = 0x65,
  Busy = 0x66,
  QueueIndication = 0x67,
  StationBarred = 0x68,
  NoOperatorAvailable = 0x69,
  OperatorTemporarilyUnavailable = 0x6a,
  EquipmentDisabled = 0x6b,
  UnableToUseProposedChannel = 0x6c,
  UnableToUseProposedMode = 0x6d,
  ShipsAndAircraftOfStatesNotPartiesToAnArmedConflict = 0x6e,
  MedicalTransports = 0x6f,
  PayPhonepublicCallOffice = 0x70,
  Faxdata = 0x71,
  NoInformation = 0x7e,
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
export enum DscExpansionDataValues {
  EnhancedPosition = 0x64,
  SourceAndDatumOfPosition = 0x65,
  Sog = 0x66,
  Cog = 0x67,
  AdditionalStationIdentification = 0x68,
  EnhancedGeographicArea = 0x69,
  NumberOfPersonsOnBoard = 0x6a,
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
export enum SeatalkAlarmStatusValues {
  AlarmConditionNotMet = 0x0,
  AlarmConditionMetAndNotSilenced = 0x1,
  AlarmConditionMetAndSilenced = 0x2,
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
}

/**
 * @category Enumerations
 */
export enum SeatalkAlarmIdValues {
  NoAlarm = 0x0,
  ShallowDepth = 0x1,
  DeepDepth = 0x2,
  ShallowAnchor = 0x3,
  DeepAnchor = 0x4,
  OffCourse = 0x5,
  AwaHigh = 0x6,
  AwaLow = 0x7,
  AwsHigh = 0x8,
  AwsLow = 0x9,
  TwaHigh = 0xa,
  TwaLow = 0xb,
  TwsHigh = 0xc,
  TwsLow = 0xd,
  WpArrival = 0xe,
  BoatSpeedHigh = 0xf,
  BoatSpeedLow = 0x10,
  SeaTemperatureHigh = 0x11,
  SeaTemperatureLow = 0x12,
  PilotWatch = 0x13,
  PilotOffCourse = 0x14,
  PilotWindShift = 0x15,
  PilotLowBattery = 0x16,
  PilotLastMinuteOfWatch = 0x17,
  PilotNoNmeaData = 0x18,
  PilotLargeXte = 0x19,
  PilotNmeaDataError = 0x1a,
  PilotCuDisconnected = 0x1b,
  PilotAutoRelease = 0x1c,
  PilotWayPointAdvance = 0x1d,
  PilotDriveStopped = 0x1e,
  PilotTypeUnspecified = 0x1f,
  PilotCalibrationRequired = 0x20,
  PilotLastHeading = 0x21,
  PilotNoPilot = 0x22,
  PilotRouteComplete = 0x23,
  PilotVariableText = 0x24,
  GpsFailure = 0x25,
  Mob = 0x26,
  Seatalk1Anchor = 0x27,
  PilotSwappedMotorPower = 0x28,
  PilotStandbyTooFastToFish = 0x29,
  PilotNoGpsFix = 0x2a,
  PilotNoGpsCog = 0x2b,
  PilotStartUp = 0x2c,
  PilotTooSlow = 0x2d,
  PilotNoCompass = 0x2e,
  PilotRateGyroFault = 0x2f,
  PilotCurrentLimit = 0x30,
  PilotWayPointAdvancePort = 0x31,
  PilotWayPointAdvanceStbd = 0x32,
  PilotNoWindData = 0x33,
  PilotNoSpeedData = 0x34,
  PilotSeatalkFail1 = 0x35,
  PilotSeatalkFail2 = 0x36,
  PilotWarningTooFastToFish = 0x37,
  PilotAutoDocksideFail = 0x38,
  PilotTurnTooFast = 0x39,
  PilotNoNavData = 0x3a,
  PilotLostWaypointData = 0x3b,
  PilotEepromCorrupt = 0x3c,
  PilotRudderFeedbackFail = 0x3d,
  PilotAutolearnFail1 = 0x3e,
  PilotAutolearnFail2 = 0x3f,
  PilotAutolearnFail3 = 0x40,
  PilotAutolearnFail4 = 0x41,
  PilotAutolearnFail5 = 0x42,
  PilotAutolearnFail6 = 0x43,
  PilotWarningCalRequired = 0x44,
  PilotWarningOffCourse = 0x45,
  PilotWarningXte = 0x46,
  PilotWarningWindShift = 0x47,
  PilotWarningDriveShort = 0x48,
  PilotWarningClutchShort = 0x49,
  PilotWarningSolenoidShort = 0x4a,
  PilotJoystickFault = 0x4b,
  PilotNoJoystickData = 0x4c,
  PilotInvalidCommand = 0x50,
  AisTxMalfunction = 0x51,
  AisAntennaVswrFault = 0x52,
  AisRxChannel1Malfunction = 0x53,
  AisRxChannel2Malfunction = 0x54,
  AisNoSensorPositionInUse = 0x55,
  AisNoValidSogInformation = 0x56,
  AisNoValidCogInformation = 0x57,
  Ais12VAlarm = 0x58,
  Ais6VAlarm = 0x59,
  AisNoiseThresholdExceededChannelA = 0x5a,
  AisNoiseThresholdExceededChannelB = 0x5b,
  AisTransmitterPaFault = 0x5c,
  Ais3V3Alarm = 0x5d,
  AisRxChannel70Malfunction = 0x5e,
  AisHeadingLostinvalid = 0x5f,
  AisInternalGpsLost = 0x60,
  AisNoSensorPosition = 0x61,
  AisLockFailure = 0x62,
  AisInternalGgaTimeout = 0x63,
  AisProtocolStackRestart = 0x64,
  PilotNoIpsCommunications = 0x65,
  PilotPowerOnOrSleepSwitchResetWhileEngaged = 0x66,
  PilotUnexpectedResetWhileEngaged = 0x67,
  AisDangerousTarget = 0x68,
  AisLostTarget = 0x69,
  AisSafetyRelatedMessageusedToSilence = 0x6a,
  AisConnectionLost = 0x6b,
  NoFix = 0x6c,
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
}

/**
 * @category Enumerations
 */
export enum SeatalkAlarmGroupValues {
  Instrument = 0x0,
  Autopilot = 0x1,
  Radar = 0x2,
  ChartPlotter = 0x3,
  Ais = 0x4,
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
export enum SeatalkPilotModeValues {
  Standby = 0x40,
  Auto = 0x42,
  Wind = 0x46,
  Track = 0x4a,
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
export enum EntertainmentZoneValues {
  AllZones = 0x0,
  Zone1 = 0x1,
  Zone2 = 0x2,
  Zone3 = 0x3,
  Zone4 = 0x4,
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
export enum EntertainmentSourceValues {
  VesselAlarm = 0x0,
  Am = 0x1,
  Fm = 0x2,
  Weather = 0x3,
  Dab = 0x4,
  Aux = 0x5,
  Usb = 0x6,
  Cd = 0x7,
  Mp3 = 0x8,
  AppleIOs = 0x9,
  Android = 0xa,
  Bluetooth = 0xb,
  SiriusXm = 0xc,
  Pandora = 0xd,
  Spotify = 0xe,
  Slacker = 0xf,
  Songza = 0x10,
  AppleRadio = 0x11,
  LastFm = 0x12,
  Ethernet = 0x13,
  VideoMp4 = 0x14,
  VideoDvd = 0x15,
  VideoBluRay = 0x16,
  Hdmi = 0x17,
  Video = 0x18,
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
export enum EntertainmentPlayStatusValues {
  Play = 0x0,
  Pause = 0x1,
  Stop = 0x2,
  Ff1X = 0x3,
  Ff2X = 0x4,
  Ff3X = 0x5,
  Ff4X = 0x6,
  Rw1X = 0x7,
  Rw2X = 0x8,
  Rw3X = 0x9,
  Rw4X = 0xa,
  SkipAhead = 0xb,
  SkipBack = 0xc,
  JogAhead = 0xd,
  JogBack = 0xe,
  SeekUp = 0xf,
  SeekDown = 0x10,
  ScanUp = 0x11,
  ScanDown = 0x12,
  TuneUp = 0x13,
  TuneDown = 0x14,
  SlowMotion75X = 0x15,
  SlowMotion5X = 0x16,
  SlowMotion25X = 0x17,
  SlowMotion125X = 0x18,
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
export enum EntertainmentRepeatStatusValues {
  Off = 0x0,
  One = 0x1,
  All = 0x2,
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
export enum EntertainmentShuffleStatusValues {
  Off = 0x0,
  PlayQueue = 0x1,
  All = 0x2,
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
export enum EntertainmentLikeStatusValues {
  None = 0x0,
  ThumbsUp = 0x1,
  ThumbsDown = 0x2,
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
export enum EntertainmentTypeValues {
  File = 0x0,
  PlaylistName = 0x1,
  GenreName = 0x2,
  AlbumName = 0x3,
  ArtistName = 0x4,
  TrackName = 0x5,
  StationName = 0x6,
  StationNumber = 0x7,
  FavouriteNumber = 0x8,
  PlayQueue = 0x9,
  ContentInfo = 0xa,
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
export enum EntertainmentGroupValues {
  File = 0x0,
  PlaylistName = 0x1,
  GenreName = 0x2,
  AlbumName = 0x3,
  ArtistName = 0x4,
  TrackName = 0x5,
  StationName = 0x6,
  StationNumber = 0x7,
  FavouriteNumber = 0x8,
  PlayQueue = 0x9,
  ContentInfo = 0xa,
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
export enum EntertainmentChannelValues {
  AllChannels = 0x0,
  StereoFullRange = 0x1,
  StereoFront = 0x2,
  StereoBack = 0x3,
  StereoSurround = 0x4,
  Center = 0x5,
  Subwoofer = 0x6,
  FrontLeft = 0x7,
  FrontRight = 0x8,
  BackLeft = 0x9,
  BackRight = 0xa,
  SurroundLeft = 0xb,
  SurroundRight = 0xc,
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
export enum EntertainmentEqValues {
  Flat = 0x0,
  Rock = 0x1,
  Hall = 0x2,
  Jazz = 0x3,
  Pop = 0x4,
  Live = 0x5,
  Classic = 0x6,
  Vocal = 0x7,
  Arena = 0x8,
  Cinema = 0x9,
  Custom = 0xa,
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
export enum EntertainmentFilterValues {
  FullRange = 0x0,
  HighPass = 0x1,
  LowPass = 0x2,
  BandPass = 0x3,
  NotchFilter = 0x4,
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
export enum AlertTypeValues {
  EmergencyAlarm = 0x1,
  Alarm = 0x2,
  Warning = 0x5,
  Caution = 0x8,
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
export enum AlertCategoryValues {
  Navigational = 0x0,
  Technical = 0x1,
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
export enum AlertTriggerConditionValues {
  Manual = 0x0,
  Auto = 0x1,
  Test = 0x2,
  Disabled = 0x3,
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
export enum AlertThresholdStatusValues {
  Normal = 0x0,
  ThresholdExceeded = 0x1,
  ExtremeThresholdExceeded = 0x2,
  LowThresholdExceeded = 0x3,
  Acknowledged = 0x4,
  AwaitingAcknowledge = 0x5,
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
export enum AlertStateValues {
  Disabled = 0x0,
  Normal = 0x1,
  Active = 0x2,
  Silenced = 0x3,
  Acknowledged = 0x4,
  AwaitingAcknowledge = 0x5,
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
export enum AlertLanguageIdValues {
  Englishus = 0x0,
  Englishuk = 0x1,
  Arabic = 0x2,
  Chinesesimplified = 0x3,
  Croatian = 0x4,
  Danish = 0x5,
  Dutch = 0x6,
  Finnish = 0x7,
  French = 0x8,
  German = 0x9,
  Greek = 0xa,
  Italian = 0xb,
  Japanese = 0xc,
  Korean = 0xd,
  Norwegian = 0xe,
  Polish = 0xf,
  Portuguese = 0x10,
  Russian = 0x11,
  Spanish = 0x12,
  Swedish = 0x13,
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
export enum AlertResponseCommandValues {
  Acknowledge = 0x0,
  TemporarySilence = 0x1,
  TestCommandOff = 0x2,
  TestCommandOn = 0x3,
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
export enum ConverterStateValues {
  Off = 0x0,
  LowPowerMode = 0x1,
  Fault = 0x2,
  Bulk = 0x3,
  Absorption = 0x4,
  Float = 0x5,
  Storage = 0x6,
  Equalize = 0x7,
  PassThru = 0x8,
  Inverting = 0x9,
  Assisting = 0xa,
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
export enum ThrusterDirectionControlValues {
  Off = 0x0,
  Ready = 0x1,
  ToPort = 0x2,
  ToStarboard = 0x3,
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
export enum ThrusterRetractControlValues {
  Off = 0x0,
  Extend = 0x1,
  Retract = 0x2,
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
export enum ThrusterMotorTypeValues {
  _12Vdc = 0x0,
  _24Vdc = 0x1,
  _48Vdc = 0x2,
  _24Vac = 0x3,
  Hydraulic = 0x4,
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
export enum BootStateValues {
  InStartupMonitor = 0x0,
  RunningBootloader = 0x1,
  RunningApplication = 0x2,
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
export enum AccessLevelValues {
  Locked = 0x0,
  UnlockedLevel1 = 0x1,
  UnlockedLevel2 = 0x2,
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
export enum TransmissionIntervalValues {
  Acknowledge = 0x0,
  TransmitIntervalpriorityNotSupported = 0x1,
  TransmitIntervalTooLow = 0x2,
  AccessDenied = 0x3,
  NotSupported = 0x4,
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
export enum ParameterFieldValues {
  Acknowledge = 0x0,
  InvalidParameterField = 0x1,
  TemporaryError = 0x2,
  ParameterOutOfRange = 0x3,
  AccessDenied = 0x4,
  NotSupported = 0x5,
  ReadOrWriteNotSupported = 0x6,
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
export enum PgnListFunctionValues {
  TransmitPgnList = 0x0,
  ReceivePgnList = 0x1,
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
export enum FusionCommandValues {
  Play = 0x1,
  Pause = 0x2,
  Next = 0x4,
  Prev = 0x6,
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
export enum FusionSiriusCommandValues {
  Next = 0x1,
  Prev = 0x2,
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
export enum FusionMuteCommandValues {
  MuteOn = 0x1,
  MuteOff = 0x2,
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
export enum SeatalkKeystrokeValues {
  Auto = 0x1,
  Standby = 0x2,
  Wind = 0x3,
  _1 = 0x5,
  _10 = 0x6,
  Plus1 = 0x7,
  Plus10 = 0x8,
  _1And10 = 0x21,
  Plus1AndPlus10 = 0x22,
  Track = 0x23,
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
export enum SeatalkDeviceIdValues {
  S100 = 0x3,
  CourseComputer = 0x5,
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
export enum SeatalkNetworkGroupValues {
  None = 0x0,
  Helm1 = 0x1,
  Helm2 = 0x2,
  Cockpit = 0x3,
  Flybridge = 0x4,
  Mast = 0x5,
  Group1 = 0x6,
  Group2 = 0x7,
  Group3 = 0x8,
  Group4 = 0x9,
  Group5 = 0xa,
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
export enum SeatalkDisplayColorValues {
  Day1 = 0x0,
  Day2 = 0x2,
  Redblack = 0x3,
  Inverse = 0x4,
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
export enum AirmarCalibrateFunctionValues {
  NormalcancelCalibration = 0x0,
  EnterCalibrationMode = 0x1,
  ResetCalibrationTo0 = 0x2,
  Verify = 0x3,
  ResetCompassToDefaults = 0x4,
  ResetDampingToDefaults = 0x5,
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
export enum AirmarCalibrateStatusValues {
  Queried = 0x0,
  Passed = 0x1,
  FailedTimeout = 0x2,
  FailedTiltError = 0x3,
  FailedOther = 0x4,
  InProgress = 0x5,
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
export enum AirmarTemperatureInstanceValues {
  DeviceSensor = 0x0,
  OnboardWaterSensor = 0x1,
  OptionalWaterSensor = 0x2,
}

/**
 * @category Enumerations
 */
export enum AirmarFilter {
  NoFilter = 'No filter',
  BasicIirFilter = 'Basic IIR filter',
}

/**
 * @category Enumerations
 */
export enum AirmarFilterValues {
  NoFilter = 0x0,
  BasicIirFilter = 0x1,
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
export enum ControllerStateValues {
  ErrorActive = 0x0,
  ErrorPassive = 0x1,
  BusOff = 0x2,
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
export enum EquipmentStatusValues {
  Operational = 0x0,
  Fault = 0x1,
}

/**
 * @category Enumerations
 */
export enum MobStatus {
  MobEmitterActivated = 'MOB Emitter Activated',
  ManualOnBoardMobButtonActivation = 'Manual on-board MOB Button Activation',
  TestMode = 'Test mode',
}

/**
 * @category Enumerations
 */
export enum MobStatusValues {
  MobEmitterActivated = 0x0,
  ManualOnBoardMobButtonActivation = 0x1,
  TestMode = 0x2,
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
export enum LowBatteryValues {
  Good = 0x0,
  Low = 0x1,
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
export enum TurnModeValues {
  RudderLimitControlled = 0x0,
  TurnRateControlled = 0x1,
  RadiusControlled = 0x2,
}

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
export enum AcceptabilityValues {
  BadLevel = 0x0,
  BadFrequency = 0x1,
  BeingQualified = 0x2,
  Good = 0x3,
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
export enum LineValues {
  Line1 = 0x0,
  Line2 = 0x1,
  Line3 = 0x2,
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
export enum WaveformValues {
  SineWave = 0x0,
  ModifiedSineWave = 0x1,
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
export enum TankTypeValues {
  Fuel = 0x0,
  Water = 0x1,
  GrayWater = 0x2,
  LiveWell = 0x3,
  Oil = 0x4,
  BlackWater = 0x5,
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
export enum DcSourceValues {
  Battery = 0x0,
  Alternator = 0x1,
  Convertor = 0x2,
  SolarCell = 0x3,
  WindGenerator = 0x4,
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
export enum ChargerStateValues {
  NotCharging = 0x0,
  Bulk = 0x1,
  Absorption = 0x2,
  Overcharge = 0x3,
  Equalise = 0x4,
  Float = 0x5,
  NoFloat = 0x6,
  ConstantVi = 0x7,
  Disabled = 0x8,
  Fault = 0x9,
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
export enum ChargingAlgorithmValues {
  Trickle = 0x0,
  ConstantVoltageConstantCurrent = 0x1,
  _2StagenoFloat = 0x2,
  _3Stage = 0x3,
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
export enum ChargerModeValues {
  Standalone = 0x0,
  Primary = 0x1,
  Secondary = 0x2,
  Echo = 0x3,
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
export enum InverterStateValues {
  Invert = 0x0,
  AcPassthru = 0x1,
  LoadSense = 0x2,
  Fault = 0x3,
  Disabled = 0x4,
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
export enum BatteryTypeValues {
  Flooded = 0x0,
  Gel = 0x1,
  Agm = 0x2,
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
export enum BatteryVoltageValues {
  _6V = 0x0,
  _12V = 0x1,
  _24V = 0x2,
  _32V = 0x3,
  _36V = 0x4,
  _42V = 0x5,
  _48V = 0x6,
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
export enum BatteryChemistryValues {
  Pblead = 0x0,
  Li = 0x1,
  NiCd = 0x2,
  ZnO = 0x3,
  NiMh = 0x4,
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
export enum GoodWarningErrorValues {
  Good = 0x0,
  Warning = 0x1,
  Error = 0x2,
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
export enum TrackingValues {
  Cancelled = 0x0,
  Acquiring = 0x1,
  Tracking = 0x2,
  Lost = 0x3,
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
export enum TargetAcquisitionValues {
  Manual = 0x0,
  Automatic = 0x1,
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
export enum WindlassDirectionValues {
  Off = 0x0,
  Down = 0x1,
  Up = 0x2,
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
export enum SpeedTypeValues {
  SingleSpeed = 0x0,
  DualSpeed = 0x1,
  ProportionalSpeed = 0x2,
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
export enum WindlassMotionValues {
  WindlassStopped = 0x0,
  DeploymentOccurring = 0x1,
  RetrievalOccurring = 0x2,
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
export enum RodeTypeValues {
  ChainPresentlyDetected = 0x0,
  RopePresentlyDetected = 0x1,
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
export enum DockingStatusValues {
  NotDocked = 0x0,
  FullyDocked = 0x1,
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
export enum AisTypeValues {
  Sotdma = 0x0,
  Cs = 0x1,
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
export enum AisBandValues {
  Top525KHzOfMarineBand = 0x0,
  EntireMarineBand = 0x1,
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
export enum AisModeValues {
  Autonomous = 0x0,
  Assigned = 0x1,
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
export enum AisCommunicationStateValues {
  Sotdma = 0x0,
  Itdma = 0x1,
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
export enum AvailableValues {
  Available = 0x0,
  NotAvailable = 0x1,
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
export enum BearingModeValues {
  GreatCircle = 0x0,
  Rhumbline = 0x1,
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
export enum MarkTypeValues {
  Collision = 0x0,
  TurningPoint = 0x1,
  Reference = 0x2,
  Wheelover = 0x3,
  Waypoint = 0x4,
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
export enum GnssModeValues {
  _1D = 0x0,
  _2D = 0x1,
  _3D = 0x2,
  Auto = 0x3,
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
export enum RangeResidualModeValues {
  RangeResidualsWereUsedToCalculateData = 0x0,
  RangeResidualsWereCalculatedAfterThePosition = 0x1,
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
export enum DgnssModeValues {
  None = 0x0,
  SbasIfAvailable = 0x1,
  Sbas = 0x3,
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
export enum SatelliteStatusValues {
  NotTracked = 0x0,
  Tracked = 0x1,
  Used = 0x2,
  NotTrackedPlusdiff = 0x3,
  TrackedPlusdiff = 0x4,
  UsedPlusdiff = 0x5,
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
export enum AisVersionValues {
  ItuRM13711 = 0x0,
  ItuRM13713 = 0x1,
  ItuRM13715 = 0x2,
  ItuRM1371FutureEdition = 0x3,
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
export enum TideValues {
  Falling = 0x0,
  Rising = 0x1,
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
export enum WatermakerStateValues {
  Stopped = 0x0,
  Starting = 0x1,
  Running = 0x2,
  Stopping = 0x3,
  Flushing = 0x4,
  Rinsing = 0x5,
  Initiating = 0x6,
  Manual = 0x7,
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
export enum EntertainmentIdTypeValues {
  Group = 0x0,
  File = 0x1,
  EncryptedGroup = 0x2,
  EncryptedFile = 0x3,
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
export enum EntertainmentDefaultSettingsValues {
  SaveCurrentSettingsAsUserDefault = 0x0,
  LoadUserDefault = 0x1,
  LoadManufacturerDefault = 0x2,
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
export enum EntertainmentRegionsValues {
  Usa = 0x0,
  Europe = 0x1,
  Asia = 0x2,
  MiddleEast = 0x3,
  LatinAmerica = 0x4,
  Australia = 0x5,
  Russia = 0x6,
  Japan = 0x7,
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
export enum VideoProtocolsValues {
  Pal = 0x0,
  Ntsc = 0x1,
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
export enum EntertainmentVolumeControlValues {
  Up = 0x0,
  Down = 0x1,
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
export enum BluetoothStatusValues {
  Connected = 0x0,
  NotConnected = 0x1,
  NotPaired = 0x2,
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
export enum BluetoothSourceStatusValues {
  Reserved = 0x0,
  Connected = 0x1,
  Connecting = 0x2,
  NotConnected = 0x3,
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
export enum SonichubCommandValues {
  Init2 = 0x1,
  AmRadio = 0x4,
  ZoneInfo = 0x5,
  Source = 0x6,
  SourceList = 0x8,
  Control = 0x9,
  FmRadio = 0xc,
  Playlist = 0xd,
  Track = 0xe,
  Artist = 0xf,
  Album = 0x10,
  MenuItem = 0x13,
  Zones = 0x14,
  MaxVolume = 0x17,
  Volume = 0x18,
  Init1 = 0x19,
  Position = 0x30,
  Init3 = 0x32,
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
export enum SimnetApModeValues {
  Heading = 0x2,
  Wind = 0x3,
  Nav = 0xa,
  NoDrift = 0xb,
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
export enum SimnetDeviceModelValues {
  Ac = 0x0,
  OtherDevice = 0x1,
  Nac = 0x64,
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
export enum SimnetDeviceReportValues {
  Status = 0x2,
  SendStatus = 0x3,
  Mode = 0xa,
  SendMode = 0xb,
  SailingProcessorStatus = 0x17,
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
export enum SimnetApStatusValues {
  Manual = 0x2,
  Automatic = 0x10,
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
export enum SimnetCommandValues {
  Text = 0x32,
}

/**
 * @category Enumerations
 */
export enum SimnetEventCommand {
  Alarm = 'Alarm',
  ApCommand = 'AP command',
  Autopilot = 'Autopilot',
}

/**
 * @category Enumerations
 */
export enum SimnetEventCommandValues {
  Alarm = 0x1,
  ApCommand = 0x2,
  Autopilot = 0xff,
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
export enum SimnetNightModeValues {
  Day = 0x2,
  Night = 0x4,
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
export enum SimnetNightModeColorValues {
  Red = 0x0,
  Green = 0x1,
  Blue = 0x2,
  White = 0x3,
  Magenta = 0x4,
}

/**
 * @category Enumerations
 */
export enum SimnetDisplayGroup {
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
export enum SimnetDisplayGroupValues {
  Default = 0x1,
  Group1 = 0x2,
  Group2 = 0x3,
  Group3 = 0x4,
  Group4 = 0x5,
  Group5 = 0x6,
  Group6 = 0x7,
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
export enum SimnetHourDisplayValues {
  _24Hour = 0x0,
  _12Hour = 0x1,
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
export enum SimnetTimeFormatValues {
  Mmddyyyy = 0x1,
  Ddmmyyyy = 0x2,
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
export enum SimnetBacklightLevelValues {
  _10min = 0x0,
  DayMode = 0x1,
  NightMode = 0x4,
  _20 = 0xb,
  _30 = 0x16,
  _40 = 0x21,
  _50 = 0x2c,
  _60 = 0x37,
  _70 = 0x42,
  _80 = 0x4d,
  _90 = 0x58,
  _100max = 0x63,
}

/**
 * @category Enumerations
 */
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

/**
 * @category Enumerations
 */
export enum SimnetApEventsValues {
  Standby = 0x6,
  AutoMode = 0x9,
  NavMode = 0xa,
  NonFollowUpMode = 0xd,
  FollowUpMode = 0xe,
  WindMode = 0xf,
  Squareturn = 0x12,
  CTurn = 0x13,
  UTurn = 0x14,
  Spiralturn = 0x15,
  ZigZagturn = 0x16,
  LazySturn = 0x17,
  Depthturn = 0x18,
  ChangeCourse = 0x1a,
  TimerSync = 0x3d,
  PingPortEnd = 0x70,
  PingStarboardEnd = 0x71,
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
export enum SimnetDirectionValues {
  Port = 0x2,
  Starboard = 0x3,
  LeftRudderport = 0x4,
  RightRudderstarboard = 0x5,
}

/**
 * @category Enumerations
 */
export enum SimnetAlarm {
  LowBoatSpeed = 'Low boat speed',
  WindDataMissing = 'Wind data missing',
}

/**
 * @category Enumerations
 */
export enum SimnetAlarmValues {
  LowBoatSpeed = 0x39,
  WindDataMissing = 0x3a,
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
  DabUpdtateCommand = 'DAB Updtate Command',
  SetMute = 'Set Mute',
  SetBalance = 'Set Balance',
  SetLowPassFiler = 'Set Low Pass Filer',
  SetSublevel = 'Set Sublevel',
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
  SendDvdCommand = 'Send Dvd Command',
  DvdPressIrKey = 'Dvd Press Ir Key',
  SendSelectSiriusTeam = 'Send Select Sirius Team',
  SendSelectSiriusArtist = 'Send Select Sirius Artist',
  SendSiriusSportAlertUserAction = 'Send Sirius Sport Alert User Action',
  SendSiriusArtistSongUserAction = 'Send Sirius Artist Song User Action',
  SendMultiroomCommand = 'Send Multiroom Command',
  GetMultiroomDeviceRecord = 'Get Multiroom Device Record',
  ScanMultirooomDevices = 'Scan Multirooom Devices',
  SendFileTransfer = 'Send File Transfer',
  SetLoud = 'Set Loud',
  FapiSetSourceMultiroomEnabled = 'Fapi Set Source Multiroom Enabled',
  RequestHeadUnitDspSettings = 'Request Head Unit Dsp Settings',
  SendTransferStatus = 'Send Transfer Status',
  FapiGetServerInfo = 'Fapi Get Server Info',
  FapiSetSourceEnabled = 'Fapi Set Source Enabled',
  FapiSetSourceName = 'Fapi Set Source Name',
  SendExternalAmpGain = 'Send External Amp Gain',
  SendInternalAmpGain = 'Send Internal Amp Gain',
  SendMono = 'Send Mono',
}

/**
 * @category Enumerations
 */
export enum FusionMessageIdValues {
  RequestStatus = 0x1,
  SetSource = 0x2,
  MediaCommand = 0x3,
  TunerCommand = 0x5,
  MarineTunerCommand = 0x6,
  SetMarineTunerSquelch = 0x7,
  SetMarineTunerScanMode = 0x8,
  MenuAction = 0x9,
  RequestMenuCount = 0xa,
  RequestMenuItem = 0xb,
  RequestMenuLockId = 0xc,
  SetAuxGain = 0xd,
  SetSettings = 0xf,
  DabUpdtateCommand = 0x10,
  SetMute = 0x11,
  SetBalance = 0x12,
  SetLowPassFiler = 0x13,
  SetSublevel = 0x14,
  SetEqualizer = 0x16,
  SetVolumeLimit = 0x17,
  SetZoneVolume = 0x18,
  SetAllVolumes = 0x19,
  SetLineLevelControl = 0x1b,
  Power = 0x1c,
  SetDeviceName = 0x1d,
  SendSiriusCommand = 0x1e,
  SetSiriusParental = 0x1f,
  SendFactoryResetCommand = 0x21,
  SetZoneName = 0x22,
  SendDvdCommand = 0x23,
  DvdPressIrKey = 0x24,
  SendSelectSiriusTeam = 0x27,
  SendSelectSiriusArtist = 0x28,
  SendSiriusSportAlertUserAction = 0x29,
  SendSiriusArtistSongUserAction = 0x2d,
  SendMultiroomCommand = 0x32,
  GetMultiroomDeviceRecord = 0x33,
  ScanMultirooomDevices = 0x34,
  SendFileTransfer = 0x35,
  SetLoud = 0x36,
  FapiSetSourceMultiroomEnabled = 0x38,
  RequestHeadUnitDspSettings = 0x39,
  SendTransferStatus = 0x40,
  FapiGetServerInfo = 0x41,
  FapiSetSourceEnabled = 0x45,
  FapiSetSourceName = 0x46,
  SendExternalAmpGain = 0x49,
  SendInternalAmpGain = 0x4a,
  SendMono = 0x4b,
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
export enum FusionPlayStatusValues {
  Invalid = 0x0,
  Playing = 0x1,
  Paused = 0x2,
  Stopped = 0x3,
  SkipForward = 0x4,
  SkipRewind = 0x5,
}

/**
 * @category Enumerations
 */
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

/**
 * @category Enumerations
 */
export enum FusionSourceTypeValues {
  Am = 0x0,
  Fm = 0x1,
  Aux = 0x2,
  Sirius = 0x3,
  Ipod = 0x4,
  Usb = 0x5,
  Dvd = 0x6,
  Vhf = 0x7,
  Invalid = 0x8,
  Mtp = 0x9,
  Bluetooth = 0xa,
  Arc = 0xb,
  Android = 0xc,
  Pandora = 0xd,
  Dab = 0xe,
  AirPlay = 0xf,
  Upnp = 0x10,
  Unknown = 0x11,
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
export enum FusionSiriusComStateValues {
  Unknown = 0xff,
  Off = 0x1,
  Initialising = 0x2,
  On = 0x3,
}

/**
 * @category Enumerations
 */
export enum FusionSiriusAlert {
  Unknown = 'Unknown',
  None = 'None',
  Antenna = 'Antenna',
  NoSignal = 'NoSignal',
  SubscriptionUpdate = 'Subscription Update',
}

/**
 * @category Enumerations
 */
export enum FusionSiriusAlertValues {
  Unknown = 0xff,
  None = 0x1,
  Antenna = 0x2,
  NoSignal = 0x3,
  SubscriptionUpdate = 0x4,
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
export enum FusionSiriusTuningModeValues {
  Normal = 0x1,
  Category = 0x2,
  Preset = 0x3,
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
  SiriusXmSignal = 'SiriusXm Signal',
  SiriusXmParentalRequest = 'SiriusXM Parental Request',
  SiriusXmDiagnostics = 'SiriusXM Diagnostics',
  SiriusXmPresets = 'SiriusXM Presets',
  ZoneName = 'Zone Name',
}

/**
 * @category Enumerations
 */
export enum FusionStatusMessageIdValues {
  Unknown = 0x0,
  ApiVersion = 0x8001,
  Source = 0x8002,
  SourceCount = 0x8003,
  TrackInfo = 0x8004,
  TrackTitle = 0x8005,
  TrackArtist = 0x8006,
  TrackAlbum = 0x8007,
  CoverArt = 0x8008,
  TrackProgress = 0x8009,
  TunerAlign = 0x800a,
  Tuner = 0x800b,
  MarineTuner = 0x800c,
  MarineSquelch = 0x800d,
  MarineScanMode = 0x800e,
  MenuAction = 0x800f,
  MenuCount = 0x8010,
  MenuItem = 0x8011,
  MenuLockId = 0x8012,
  AuxGain = 0x8013,
  Setting = 0x8014,
  Settings = 0x8015,
  UpdateFirmwareResult = 0x8016,
  Mute = 0x8017,
  Balance = 0x8018,
  LowPassFilter = 0x8019,
  Sublevels = 0x801a,
  Tone = 0x801b,
  VolumeLimits = 0x801c,
  Volume = 0x801d,
  Capabilities = 0x801e,
  LineLevelControl = 0x801f,
  Power = 0x8020,
  UnitName = 0x8021,
  Sirius = 0x8022,
  SiriusXmPresetEvent = 0x8023,
  SiriusXmChannel = 0x8024,
  SiriusXmTitle = 0x8025,
  SiriusXmArtist = 0x8026,
  SiriusXmGenre = 0x8027,
  SiriusXmCategory = 0x8028,
  SiriusXmSignal = 0x8029,
  SiriusXmParentalRequest = 0x802a,
  SiriusXmDiagnostics = 0x802b,
  SiriusXmPresets = 0x802c,
  ZoneName = 0x802d,
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
export enum SonichubControlValues {
  Set = 0x0,
  Ack = 0x80,
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
export enum SonichubSourceValues {
  Am = 0x0,
  Fm = 0x1,
  IPod = 0x2,
  Usb = 0x3,
  Aux = 0x4,
  Aux2 = 0x5,
  Mic = 0x6,
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
export enum IsoControlValues {
  Ack = 0x0,
  Nak = 0x1,
  AccessDenied = 0x2,
  AddressBusy = 0x3,
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
export enum IsoCommandValues {
  Ack = 0x0,
  Rts = 0x10,
  Cts = 0x11,
  Eom = 0x13,
  Bam = 0x20,
  Abort = 0xff,
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
export enum GroupFunctionValues {
  Request = 0x0,
  Command = 0x1,
  Acknowledge = 0x2,
  ReadFields = 0x3,
  ReadFieldsReply = 0x4,
  WriteFields = 0x5,
  WriteFieldsReply = 0x6,
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
export enum AirmarCommandValues {
  AttitudeOffsets = 0x20,
  CalibrateCompass = 0x21,
  TrueWindOptions = 0x22,
  SimulateMode = 0x23,
  CalibrateDepth = 0x28,
  CalibrateSpeed = 0x29,
  CalibrateTemperature = 0x2a,
  SpeedFilter = 0x2b,
  TemperatureFilter = 0x2c,
  Nmea2000Options = 0x2e,
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
export enum AirmarDepthQualityFactorValues {
  DepthUnlocked = 0x0,
  Quality10 = 0x1,
  Quality20 = 0x2,
  Quality30 = 0x3,
  Quality40 = 0x4,
  Quality50 = 0x5,
  Quality60 = 0x6,
  Quality70 = 0x7,
  Quality80 = 0x8,
  Quality90 = 0x9,
  Quality100 = 0xa,
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
export enum PgnErrorCodeValues {
  Acknowledge = 0x0,
  PgnNotSupported = 0x1,
  PgnNotAvailable = 0x2,
  AccessDenied = 0x3,
  NotSupported = 0x4,
  TagNotSupported = 0x5,
  ReadOrWriteNotSupported = 0x6,
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
export enum AirmarTransmissionIntervalValues {
  MeasureInterval = 0x0,
  RequestedByUser = 0x1,
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
export enum MobPositionSourceValues {
  PositionEstimatedByTheVessel = 0x0,
  PositionReportedByMobEmitter = 0x1,
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
export enum SteeringModeValues {
  MainSteering = 0x0,
  NonFollowUpDevice = 0x1,
  FollowUpDevice = 0x2,
  HeadingControlStandalone = 0x3,
  HeadingControl = 0x4,
  TrackControl = 0x5,
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
export enum FusionRadioSourceValues {
  Am = 0x0,
  Fm = 0x1,
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

/**
 * @category Enumerations
 */
export enum FusionSettingValues {
  AlphaSearchThreshold = 0x0,
  IPodSubtitles = 0x1,
  Zone2Linked = 0x2,
  Zone2Enabled = 0x3,
  Zone3Enabled = 0x4,
  Zone4Enabled = 0x5,
  Telemute = 0x6,
  TunerRegion = 0x7,
  MarineZone = 0x8,
  UsbRepeat = 0x9,
  UsbShuffle = 0xa,
  IPodAlbumArtwork = 0xb,
  IPodRepeat = 0xc,
  IPodShuffle = 0xd,
  AmPreset0 = 0xe,
  AmPreset1 = 0xf,
  AmPreset2 = 0x10,
  AmPreset3 = 0x11,
  AmPreset4 = 0x12,
  AmPreset5 = 0x13,
  AmPreset6 = 0x14,
  AmPreset7 = 0x15,
  AmPreset8 = 0x16,
  AmPreset9 = 0x17,
  AmPreset10 = 0x18,
  AmPreset11 = 0x19,
  AmPreset12 = 0x1a,
  AmPreset13 = 0x1b,
  AmPreset14 = 0x1c,
  FmPreset0 = 0x1d,
  FmPreset1 = 0x1e,
  FmPreset2 = 0x1f,
  FmPreset3 = 0x20,
  FmPreset4 = 0x21,
  FmPreset5 = 0x22,
  FmPreset6 = 0x23,
  FmPreset7 = 0x24,
  FmPreset8 = 0x25,
  FmPreset9 = 0x26,
  FmPreset10 = 0x27,
  FmPreset11 = 0x28,
  FmPreset12 = 0x29,
  FmPreset13 = 0x2a,
  FmPreset14 = 0x2b,
  VhfPreset0 = 0x2c,
  VhfPreset1 = 0x2d,
  VhfPreset2 = 0x2e,
  VhfPreset3 = 0x2f,
  VhfPreset4 = 0x30,
  VhfPreset5 = 0x31,
  VhfPreset6 = 0x32,
  VhfPreset7 = 0x33,
  VhfPreset8 = 0x34,
  VhfPreset9 = 0x35,
  VhfPreset10 = 0x36,
  VhfPreset11 = 0x37,
  VhfPreset12 = 0x38,
  VhfPreset13 = 0x39,
  VhfPreset14 = 0x3a,
  ClockTime = 0x3b,
  ClockAlarm = 0x3c,
  IPodVideoSignal = 0x3d,
  IPodMonitorAspect = 0x3e,
  AuxNameIndex = 0x3f,
  AmEnabled = 0x40,
  VhfEnabled = 0x41,
  Language = 0x42,
  InternalAmpsOn = 0x43,
  MtpRepeat = 0x44,
  MtpShuffle = 0x45,
  IdAccessorySource = 0x46,
  NmeaPower = 0x47,
  LowPowerMode = 0x48,
  DvdRegion = 0x49,
  VolumeZoneSync = 0x4a,
  MaxVolumeStart = 0x4b,
  BtAutoConnect = 0x4c,
  NullSetting = 0x4d,
}

/**
 * @category Enumerations
 */
export enum FusionRepeatStatus {
  Off = 'Off',
  Onetrack = 'One/track',
  Allalbum = 'All/album',
}

/**
 * @category Enumerations
 */
export enum FusionRepeatStatusValues {
  Off = 0x0,
  Onetrack = 0x1,
  Allalbum = 0x2,
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
export enum AirmarPostControlValues {
  ReportPreviousValues = 0x0,
  GenerateNewValues = 0x1,
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
export enum AirmarPostIdValues {
  FormatCode = 0x1,
  FactoryEeprom = 0x2,
  UserEeprom = 0x3,
  WaterTemperatureSensor = 0x4,
  SonarTransceiver = 0x5,
  SpeedSensor = 0x6,
  InternalTemperatureSensor = 0x7,
  BatteryVoltageSensor = 0x8,
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
export enum SonichubTuningValues {
  SeekingUp = 0x1,
  Tuned = 0x2,
  SeekingDown = 0x3,
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
export enum SonichubPlaylistValues {
  Report = 0x1,
  NextSong = 0x4,
  PreviousSong = 0x6,
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
export enum FusionPowerStateValues {
  On = 0x1,
  Off = 0x2,
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
export enum PriorityValues {
  _0 = 0x0,
  _1 = 0x1,
  _2 = 0x2,
  _3 = 0x3,
  _4 = 0x4,
  _5 = 0x5,
  _6 = 0x6,
  _7 = 0x7,
  LeaveUnchanged = 0x8,
  ResetToDefault = 0x9,
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
export enum DeviceTempStateValues {
  Cold = 0x0,
  Warm = 0x1,
  Hot = 0x2,
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
export enum BandgDecimalsValues {
  _0 = 0x0,
  _1 = 0x1,
  _2 = 0x2,
  _3 = 0x3,
  _4 = 0x4,
  Auto = 0xfe,
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
export enum GarminColorModeValues {
  Day = 0x0,
  Night = 0x1,
  Color = 0xd,
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
export enum GarminColorValues {
  DayFullColor = 0x0,
  DayHighContrast = 0x1,
  NightFullColor = 0x2,
  NightRedblack = 0x3,
  NightGreenblack = 0x4,
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
export enum GarminBacklightLevelValues {
  _0 = 0x0,
  _5 = 0x1,
  _10 = 0x2,
  _15 = 0x3,
  _20 = 0x4,
  _25 = 0x5,
  _30 = 0x6,
  _35 = 0x7,
  _40 = 0x8,
  _45 = 0x9,
  _50 = 0xa,
  _55 = 0xb,
  _60 = 0xc,
  _65 = 0xd,
  _70 = 0xe,
  _75 = 0xf,
  _80 = 0x10,
  _85 = 0x11,
  _90 = 0x12,
  _95 = 0x13,
  _100 = 0x14,
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
export enum SeatalkPilotMode16Values {
  Standby = 0x0,
  AutoCompassCommanded = 0x40,
  VaneWindMode = 0x100,
  TrackMode = 0x180,
  NoDriftCogReferencedinTrackCourseChanges = 0x181,
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
export enum StationHealthValues {
  NotWorking = 0x0,
  Unmonitored = 0x1,
  HealthyOperational = 0x2,
  HealthyTestMode = 0x3,
  TestMode = 0x4,
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
export enum SerialBitRateValues {
  _25 = 0x0,
  _50 = 0x1,
  _100 = 0x2,
  _200 = 0x3,
  _300 = 0x4,
  _600 = 0x5,
  _1200 = 0x6,
  _2400 = 0x7,
  _4800 = 0x8,
  _9600 = 0x9,
  _19200 = 0xa,
  _38400 = 0xb,
  _57600 = 0xc,
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
export enum SerialDetectionModeValues {
  AutoBitRate = 0x0,
  ManualBitRate = 0x1,
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
export enum DifferentialSourceValues {
  Auto = 0x0,
  Loran = 0x1,
  MskBeacon = 0x2,
  FmSubcarrier = 0x3,
  Ais = 0x4,
  GroundBasedRadio = 0x5,
  Sbas = 0x6,
  Satellite = 0x7,
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
export enum DifferentialModeValues {
  Manual = 0x0,
  AutoPower = 0x1,
  AutoRange = 0x2,
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
export enum WpPositionResolutionValues {
  MoreThan01Min = 0x0,
  _00101Min = 0x1,
  _0001001Min = 0x2,
  _000010001Min = 0x3,
  _000001Min = 0x4,
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
export enum WpIdentificationMethodValues {
  WaypointsInWpList = 0x0,
  WaypointsEmbeddedInRoute = 0x1,
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
export enum WpRouteStatusValues {
  Active = 0x0,
  Inactive = 0x1,
  Deleted = 0x2,
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
export enum WpNavigationMethodValues {
  GreatCircle = 0x0,
  RhumbLine = 0x1,
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
export enum InverterModeValues {
  Standalone = 0x0,
  SeriesMaster = 0x1,
  SeriesSlave = 0x2,
  ParallelMaster = 0x3,
  ParallelSlave = 0x4,
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
export enum CertificationLevelValues {
  LevelA = 0x0,
  LevelB = 0x1,
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
export enum AgsModeValues {
  Off = 0x0,
  On = 0x1,
  Automatic = 0x2,
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
export enum AgsOperatingStateValues {
  QuietTime = 0x0,
  AutoOn = 0x1,
  AutoOff = 0x2,
  ManualOn = 0x3,
  ManualOff = 0x4,
  GeneratorShutdown = 0x5,
  ExternalShutdown = 0x6,
  Fault = 0x7,
  Suspend = 0x8,
  NotOperating = 0x9,
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
export enum AgsGeneratingStateValues {
  Preheating = 0x0,
  StartDelay = 0x1,
  Cranking = 0x2,
  StarterCooling = 0x3,
  WarmingUp = 0x4,
  CoolingDown = 0x5,
  SpinningUp = 0x6,
  ShutdownBypass = 0x7,
  Stopping = 0x8,
  Running = 0x9,
  Stopped = 0xa,
  CrankDelaty = 0xb,
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
export enum AgsOnReasonValues {
  NotOn = 0x0,
  DcVoltageLow = 0x1,
  BatteryStateOfChargeLow = 0x2,
  AcCurrentHigh = 0x3,
  ContactClosed = 0x4,
  ManualOn = 0x5,
  Exercise = 0x6,
  NonQuietTime = 0x7,
  ExternalOnViaAgs = 0x8,
  ExternalOnViaGenerator = 0x9,
  UnableToStop = 0xa,
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
export enum AgsOffReasonValues {
  NotOff = 0x0,
  DcVoltageHigh = 0x1,
  BatteryStateOfChargeHigh = 0x2,
  AcCurrentLow = 0x3,
  ContactOpened = 0x4,
  ReachedAbsorption = 0x5,
  ReachedFloat = 0x6,
  ManualOff = 0x7,
  MaxRunTime = 0x8,
  MaxAutoCycle = 0x9,
  ExerciseDone = 0xa,
  QuietTime = 0xb,
  ExternalOffViaAgs = 0xc,
  SafeMode = 0xd,
  ExternalOffViaGenerator = 0xe,
  ExternalShutdown = 0xf,
  AutoOff = 0x10,
  Fault = 0x11,
  UnableToStart = 0x12,
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
export enum TelephoneModeValues {
  F3Eg3ESimplexTelephone = 0x0,
  F3Eg3EDuplexTelephone = 0x1,
  J3ETelephone = 0x2,
  H3ETelephone = 0x3,
  F1Bj2BFecNbdpTelexteleprinter = 0x4,
  F1Bj2BArqNbdpTelexteleprinter = 0x5,
  F1Bj2BReceiveOnlyTeleprinterdsc = 0x6,
  F1Bj2BTeleprinterdsc = 0x7,
  A1AMorseTapeRecorder = 0x8,
  A1AMorseMorseKeyheadSet = 0x9,
  F1Cf2Cf3CFaxMachine = 0xa,
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
export enum PowerModeValues {
  High = 0x0,
  Low = 0x1,
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
export enum BroadcastIndicatorValues {
  BroadcastGeoAreaMessage = 0x0,
  AddressedMessage = 0x1,
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
export enum BandwidthValues {
  Default = 0x0,
  _125KHz = 0x1,
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
export enum FloodStateValues {
  Flood = 0x0,
  Slack = 0x1,
  Ebb = 0x2,
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
export enum AcLineValues {
  Line1 = 0x0,
  Line2 = 0x1,
  Line3 = 0x2,
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
export enum ZoneSizeValues {
  _1Nm = 0x0,
  _2Nm = 0x1,
  _3Nm = 0x2,
  _4Nm = 0x3,
  _5Nm = 0x4,
  _6Nm = 0x5,
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
export enum StationStatus {
  StationInUse = 'Station in use',
  LowSnr = 'Low SNR',
  CycleError = 'Cycle Error',
  Blink = 'Blink',
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
export enum WindlassControl {
  AnotherDeviceControllingWindlass = 'Another device controlling windlass',
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
export enum WindlassMonitoring {
  ControllerUnderVoltageCutOut = 'Controller under voltage cut-out',
  ControllerOverCurrentCutOut = 'Controller over current cut-out',
  ControllerOverTemperatureCutOut = 'Controller over temperature cut-out',
  ManufacturerDefined = 'Manufacturer defined',
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

