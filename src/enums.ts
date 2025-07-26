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
export const ManufacturerCodeValues: {[key: string]: number} = {
  [ManufacturerCode.ArksEnterprisesInc]: 0x45,
  [ManufacturerCode.FwMurphyenovationControls]: 0x4e,
  [ManufacturerCode.TwinDisc]: 0x50,
  [ManufacturerCode.KohlerPowerSystems]: 0x55,
  [ManufacturerCode.HemisphereGpsInc]: 0x58,
  [ManufacturerCode.BepMarine]: 0x74,
  [ManufacturerCode.Airmar]: 0x87,
  [ManufacturerCode.Maretron]: 0x89,
  [ManufacturerCode.Lowrance]: 0x8c,
  [ManufacturerCode.MercuryMarine]: 0x90,
  [ManufacturerCode.NautibusElectronicGmbH]: 0x93,
  [ManufacturerCode.BlueWaterData]: 0x94,
  [ManufacturerCode.Westerbeke]: 0x9a,
  [ManufacturerCode.IssproInc]: 0x9d,
  [ManufacturerCode.OffshoreSystemsukLtd]: 0xa1,
  [ManufacturerCode.Evinrudebrp]: 0xa3,
  [ManufacturerCode.CpacSystemsAb]: 0xa5,
  [ManufacturerCode.XantrexTechnologyInc]: 0xa8,
  [ManufacturerCode.MarlinTechnologiesInc]: 0xa9,
  [ManufacturerCode.YanmarMarine]: 0xac,
  [ManufacturerCode.VolvoPenta]: 0xae,
  [ManufacturerCode.HondaMarine]: 0xaf,
  [ManufacturerCode.CarlingTechnologiesIncmoritzAerospace]: 0xb0,
  [ManufacturerCode.BeedeInstruments]: 0xb9,
  [ManufacturerCode.FloscanInstrumentCoInc]: 0xc0,
  [ManufacturerCode.Nobletec]: 0xc1,
  [ManufacturerCode.MysticValleyCommunications]: 0xc6,
  [ManufacturerCode.Actia]: 0xc7,
  HondaMarine2: 0xc8,
  [ManufacturerCode.DisenosYTechnologia]: 0xc9,
  [ManufacturerCode.DigitalSwitchingSystems]: 0xd3,
  [ManufacturerCode.Xintexatena]: 0xd7,
  [ManufacturerCode.EmmiNetworkSL]: 0xe0,
  HondaMarine3: 0xe1,
  [ManufacturerCode.Zf]: 0xe4,
  [ManufacturerCode.Garmin]: 0xe5,
  [ManufacturerCode.YachtMonitoringSolutions]: 0xe9,
  [ManufacturerCode.SailormadeMarineTelemetrytetraTechnologyLtd]: 0xeb,
  [ManufacturerCode.Eride]: 0xf3,
  HondaMarine4: 0xfa,
  [ManufacturerCode.HondaMotorCompanyLtd]: 0x101,
  [ManufacturerCode.Groco]: 0x110,
  [ManufacturerCode.Actisense]: 0x111,
  [ManufacturerCode.AmphenolLtwTechnology]: 0x112,
  [ManufacturerCode.Navico]: 0x113,
  [ManufacturerCode.HamiltonJet]: 0x11b,
  [ManufacturerCode.SeaRecovery]: 0x11d,
  [ManufacturerCode.CoelmoSrlItaly]: 0x11e,
  BepMarine2: 0x127,
  [ManufacturerCode.EmpirBus]: 0x130,
  [ManufacturerCode.NovAtel]: 0x131,
  [ManufacturerCode.SleipnerMotorAs]: 0x132,
  [ManufacturerCode.MbwTechnologies]: 0x133,
  [ManufacturerCode.FischerPanda]: 0x137,
  [ManufacturerCode.Icom]: 0x13b,
  [ManufacturerCode.Qwerty]: 0x148,
  [ManufacturerCode.Dief]: 0x149,
  [ManufacturerCode.BoeningAutomationstechnologieGmbHCoKg]: 0x155,
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
  [ManufacturerCode.TrueHeadingAb]: 0x1a6,
  [ManufacturerCode.EgersundMarineElectronicsAs]: 0x1aa,
  [ManufacturerCode.EmTrakMarineElectronics]: 0x1ab,
  [ManufacturerCode.TohatsuCoJp]: 0x1af,
  [ManufacturerCode.DigitalYacht]: 0x1b5,
  [ManufacturerCode.ComarSystemsLimited]: 0x1b6,
  [ManufacturerCode.Cummins]: 0x1b8,
  [ManufacturerCode.VdoakaContinentalCorporation]: 0x1bb,
  [ManufacturerCode.ParkerHannifinAkaVillageMarineTech]: 0x1c3,
  [ManufacturerCode.AlltekMarineElectronicsCorp]: 0x1cb,
  [ManufacturerCode.SanGiorgioSEIN]: 0x1cc,
  [ManufacturerCode.VeethreeElectronicsMarine]: 0x1d2,
  [ManufacturerCode.HumminbirdMarineElectronics]: 0x1d3,
  [ManufacturerCode.SiTexMarineElectronics]: 0x1d6,
  [ManufacturerCode.SeaCrossMarineAb]: 0x1d7,
  [ManufacturerCode.GmeAkaStandardCommunicationsPtyLtd]: 0x1db,
  HumminbirdMarineElectronics2: 0x1dc,
  [ManufacturerCode.OceanSatBv]: 0x1de,
  [ManufacturerCode.ChetcoDigitialInstruments]: 0x1e1,
  [ManufacturerCode.Watcheye]: 0x1ed,
  [ManufacturerCode.LcjCapteurs]: 0x1f3,
  [ManufacturerCode.AttwoodMarine]: 0x1f6,
  [ManufacturerCode.NaviopSRL]: 0x1f7,
  [ManufacturerCode.VesperMarineLtd]: 0x1f8,
  [ManufacturerCode.MarinesoftCoLtd]: 0x1fe,
  [ManufacturerCode.NoLandEngineering]: 0x205,
  [ManufacturerCode.TransasUsa]: 0x206,
  [ManufacturerCode.NationalInstrumentsKorea]: 0x211,
  [ManufacturerCode.NationalMarineElectronicsAssociation]: 0x212,
  [ManufacturerCode.OnwaMarine]: 0x214,
  [ManufacturerCode.Webasto]: 0x21c,
  [ManufacturerCode.MarinecraftsouthKorea]: 0x23b,
  [ManufacturerCode.McMurdoGroupAkaOroliaLtd]: 0x23d,
  [ManufacturerCode.Advansea]: 0x242,
  [ManufacturerCode.Kvh]: 0x243,
  [ManufacturerCode.SanJoseTechnology]: 0x244,
  [ManufacturerCode.YachtControl]: 0x247,
  [ManufacturerCode.SuzukiMotorCorporation]: 0x24a,
  [ManufacturerCode.UsCoastGuard]: 0x24f,
  [ManufacturerCode.ShipModuleAkaCustomware]: 0x253,
  [ManufacturerCode.AquaticAv]: 0x258,
  [ManufacturerCode.AventicsGmbH]: 0x25d,
  [ManufacturerCode.Intellian]: 0x25e,
  [ManufacturerCode.SamwonIt]: 0x264,
  [ManufacturerCode.ArltTecnologies]: 0x266,
  [ManufacturerCode.BavariaYacts]: 0x27d,
  [ManufacturerCode.DiverseYachtServices]: 0x281,
  [ManufacturerCode.WemaUSADbaKus]: 0x284,
  Garmin2: 0x285,
  [ManufacturerCode.ShenzhenJiuzhouHimunication]: 0x292,
  [ManufacturerCode.RockfordCorp]: 0x2b0,
  [ManufacturerCode.HarmanInternational]: 0x2bb,
  [ManufacturerCode.JlAudio]: 0x2c0,
  [ManufacturerCode.LarsThrane]: 0x2c4,
  [ManufacturerCode.Autonnic]: 0x2cb,
  [ManufacturerCode.YachtDevices]: 0x2cd,
  [ManufacturerCode.ReapSystems]: 0x2de,
  [ManufacturerCode.AuElectronicsGroup]: 0x2df,
  [ManufacturerCode.LxNav]: 0x2e3,
  [ManufacturerCode.LittelfuseIncformerlyCarlingTechnologies]: 0x2e5,
  [ManufacturerCode.DaeMyung]: 0x2e7,
  [ManufacturerCode.Woosung]: 0x2e8,
  [ManufacturerCode.IsottaIfraSrl]: 0x2ec,
  [ManufacturerCode.ClarionUs]: 0x305,
  [ManufacturerCode.HmiSystems]: 0x308,
  [ManufacturerCode.OceanSignal]: 0x309,
  [ManufacturerCode.Seekeeper]: 0x30a,
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
  [ManufacturerCode.LewmarInc]: 0x33a,
  [ManufacturerCode.TeamSurv]: 0x346,
  [ManufacturerCode.FellMarine]: 0x34c,
  [ManufacturerCode.Oceanvolt]: 0x34f,
  [ManufacturerCode.Prospec]: 0x35e,
  [ManufacturerCode.DataPanelCorp]: 0x364,
  [ManufacturerCode.L3Technologies]: 0x37a,
  [ManufacturerCode.RhodanMarineSystems]: 0x37e,
  [ManufacturerCode.NexfourSolutions]: 0x380,
  [ManufacturerCode.AsaElectronics]: 0x389,
  [ManufacturerCode.MarinesCosouthKorea]: 0x38d,
  [ManufacturerCode.NauticOn]: 0x38f,
  [ManufacturerCode.Sentinel]: 0x395,
  [ManufacturerCode.JlMarineYstems]: 0x3a1,
  [ManufacturerCode.Ecotronix]: 0x3a2,
  [ManufacturerCode.ZontisaMarine]: 0x3b0,
  [ManufacturerCode.ExorInternational]: 0x3b7,
  [ManufacturerCode.TimbolierIndustries]: 0x3c2,
  [ManufacturerCode.TjcMicro]: 0x3c3,
  [ManufacturerCode.CoxPowertrain]: 0x3c8,
  [ManufacturerCode.BlueSeas]: 0x3c9,
  [ManufacturerCode.KobeltManufacturingCoLtd]: 0x3d5,
  [ManufacturerCode.BlueOceanIot]: 0x3e0,
  [ManufacturerCode.XentaSystems]: 0x3e5,
  [ManufacturerCode.UltraflexSpA]: 0x3ec,
  [ManufacturerCode.LintestSmartBoat]: 0x3f0,
  [ManufacturerCode.Soundmax]: 0x3f3,
  [ManufacturerCode.TeamItaliaMarineonyxMarineAutomationSRL]: 0x3fc,
  [ManufacturerCode.Entratech]: 0x3fd,
  [ManufacturerCode.ItcInc]: 0x3fe,
  [ManufacturerCode.TheMarineGuardianLlc]: 0x405,
  [ManufacturerCode.SonicCorporation]: 0x417,
  [ManufacturerCode.ProNav]: 0x41b,
  [ManufacturerCode.VetusMaxwellInc]: 0x41d,
  [ManufacturerCode.LithiumPros]: 0x420,
  [ManufacturerCode.Boatrax]: 0x423,
  [ManufacturerCode.MarolCoLtd]: 0x426,
  [ManufacturerCode.CalypsoInstruments]: 0x429,
  [ManufacturerCode.SpotZeroWater]: 0x42a,
  [ManufacturerCode.LithionicsBatteryLlc]: 0x42d,
  [ManufacturerCode.QuickTeckElectronicsLtd]: 0x42e,
  [ManufacturerCode.UnidenAmerica]: 0x433,
  [ManufacturerCode.Nauticoncept]: 0x43b,
  [ManufacturerCode.ShadowCasterLedLightingLlc]: 0x43c,
  [ManufacturerCode.WetSoundsLlc]: 0x43d,
  [ManufacturerCode.ETACircuitBreakers]: 0x440,
  [ManufacturerCode.Scheiber]: 0x444,
  [ManufacturerCode.SmartYachtsInternationalLimited]: 0x44c,
  [ManufacturerCode.Dockmate]: 0x455,
  [ManufacturerCode.BobsMachine]: 0x45a,
  [ManufacturerCode.L3HarrisAsv]: 0x45e,
  [ManufacturerCode.BalmarLlc]: 0x45f,
  [ManufacturerCode.ElettromediaSpa]: 0x460,
  [ManufacturerCode.Electromaax]: 0x467,
  [ManufacturerCode.AcrossOceansSystemsLtd]: 0x474,
  [ManufacturerCode.KiwiYachting]: 0x479,
  [ManufacturerCode.BsbArtificialIntelligenceGmbH]: 0x47e,
  [ManufacturerCode.OrcaTechnologoesAs]: 0x47f,
  [ManufacturerCode.TbsElectronicsBv]: 0x482,
  [ManufacturerCode.TechnotonElectroics]: 0x486,
  [ManufacturerCode.MgEnergySystemsBV]: 0x488,
  [ManufacturerCode.SeaMacineRoboticsInc]: 0x491,
  [ManufacturerCode.VistaManufacturing]: 0x493,
  [ManufacturerCode.Zipwake]: 0x49f,
  [ManufacturerCode.SailmonBv]: 0x4a2,
  [ManufacturerCode.AirmoniqProKft]: 0x4a8,
  [ManufacturerCode.SierraMarine]: 0x4aa,
  [ManufacturerCode.XinuoInformationTechnologyxiamen]: 0x4b0,
  [ManufacturerCode.Septentrio]: 0x4c2,
  [ManufacturerCode.NkeMarineElecronics]: 0x4d1,
  [ManufacturerCode.SuperTrackAps]: 0x4d6,
  [ManufacturerCode.HondaElectronicsCoLtd]: 0x4d7,
  [ManufacturerCode.RaritanEngineeringCompanyInc]: 0x4dd,
  [ManufacturerCode.IntegratedPowerSolutionsAg]: 0x4e1,
  [ManufacturerCode.InteractiveTechnologiesInc]: 0x4ec,
  [ManufacturerCode.LtgTech]: 0x503,
  [ManufacturerCode.EnergySolutionsukLtd]: 0x513,
  [ManufacturerCode.WattFuelCellCorp]: 0x514,
  [ManufacturerCode.ProMainer]: 0x516,
  [ManufacturerCode.DragonflyEnergy]: 0x519,
  [ManufacturerCode.KodenElectronicsCoLtd]: 0x51a,
  [ManufacturerCode.HumphreeAb]: 0x51f,
  [ManufacturerCode.HinkleyYachts]: 0x524,
  [ManufacturerCode.GlobalMarineManagementGmbHgmm]: 0x525,
  [ManufacturerCode.TriskelMarineLtd]: 0x528,
  [ManufacturerCode.WarwickControlTechnologies]: 0x532,
  [ManufacturerCode.DolphinCharger]: 0x533,
  [ManufacturerCode.BarnacleSystemsInc]: 0x539,
  [ManufacturerCode.RadianIoTInc]: 0x544,
  [ManufacturerCode.OceanLedMarineLtd]: 0x549,
  [ManufacturerCode.BluNav]: 0x54f,
  [ManufacturerCode.OvanantongSaiyangElectronicsCoLtd]: 0x551,
  [ManufacturerCode.RadPropulsion]: 0x558,
  [ManufacturerCode.ElectricYacht]: 0x559,
  [ManufacturerCode.ElcoMotorYachts]: 0x55c,
  [ManufacturerCode.TecnosealFoundrySRL]: 0x568,
  [ManufacturerCode.ProChargingSystemsLlc]: 0x569,
  [ManufacturerCode.EvexCoLtd]: 0x56d,
  [ManufacturerCode.GobiusSensorTechnologyAb]: 0x576,
  [ManufacturerCode.ArcoMarine]: 0x57b,
  [ManufacturerCode.LencoMarineInc]: 0x580,
  [ManufacturerCode.NaocontrolSL]: 0x585,
  [ManufacturerCode.Revatek]: 0x589,
  [ManufacturerCode.Aeolionics]: 0x59e,
  [ManufacturerCode.PredictWindLtd]: 0x59f,
  [ManufacturerCode.EgisMobileElectric]: 0x5a0,
  [ManufacturerCode.StarboardYachtGroup]: 0x5a5,
  [ManufacturerCode.RoswellMarine]: 0x5a6,
  [ManufacturerCode.EPropulsionguangdongEPropulsionTechnologyLtd]: 0x5ab,
  [ManufacturerCode.MicroAirLlc]: 0x5ac,
  [ManufacturerCode.VitalBattery]: 0x5ad,
  [ManufacturerCode.RideControllerLlc]: 0x5b2,
  [ManufacturerCode.TocaroBlue]: 0x5b4,
  [ManufacturerCode.VanquishYachts]: 0x5b5,
  [ManufacturerCode.FtTechnologies]: 0x5bf,
  [ManufacturerCode.AlpsAlpineCoLtd]: 0x5c6,
  [ManufacturerCode.EForceMarine]: 0x5c9,
  [ManufacturerCode.CmcMarine]: 0x5ca,
  [ManufacturerCode.NanjingSandemarineInformationTechnologyCoLtd]: 0x5cb,
  [ManufacturerCode.TeleflexMarineseaStarSolutions]: 0x73a,
  [ManufacturerCode.Raymarine]: 0x73b,
  [ManufacturerCode.Navionics]: 0x73c,
  [ManufacturerCode.JapanRadioCo]: 0x73d,
  [ManufacturerCode.NorthstarTechnologies]: 0x73e,
  [ManufacturerCode.Furuno]: 0x73f,
  [ManufacturerCode.Trimble]: 0x740,
  [ManufacturerCode.Simrad]: 0x741,
  [ManufacturerCode.Litton]: 0x742,
  [ManufacturerCode.KvasarAb]: 0x743,
  [ManufacturerCode.Mmp]: 0x744,
  [ManufacturerCode.VectorCantech]: 0x745,
  [ManufacturerCode.YamahaMarine]: 0x746,
  [ManufacturerCode.FariaInstruments]: 0x747,
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
export const SeatalkAlarmGroupValues: {[key: string]: number} = {
  [SeatalkAlarmGroup.Instrument]: 0x0,
  [SeatalkAlarmGroup.Autopilot]: 0x1,
  [SeatalkAlarmGroup.Radar]: 0x2,
  [SeatalkAlarmGroup.ChartPlotter]: 0x3,
  [SeatalkAlarmGroup.Ais]: 0x4,
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
  [SeatalkPilotHullType.PowerfastTurn]: 0x5,
  [SeatalkPilotHullType.Power]: 0x8,
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
export enum AirmarFilter {
  NoFilter = 'No filter',
  BasicIirFilter = 'Basic IIR filter',
}

/**
 * @category Enumerations
 */
export const AirmarFilterValues: {[key: string]: number} = {
  [AirmarFilter.NoFilter]: 0x0,
  [AirmarFilter.BasicIirFilter]: 0x1,
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
export enum MobStatus {
  MobEmitterActivated = 'MOB Emitter Activated',
  ManualOnBoardMobButtonActivation = 'Manual on-board MOB Button Activation',
  TestMode = 'Test mode',
}

/**
 * @category Enumerations
 */
export const MobStatusValues: {[key: string]: number} = {
  [MobStatus.MobEmitterActivated]: 0x0,
  [MobStatus.ManualOnBoardMobButtonActivation]: 0x1,
  [MobStatus.TestMode]: 0x2,
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
export enum SimnetEventCommand {
  Alarm = 'Alarm',
  ApCommand = 'AP command',
  Autopilot = 'Autopilot',
}

/**
 * @category Enumerations
 */
export const SimnetEventCommandValues: {[key: string]: number} = {
  [SimnetEventCommand.Alarm]: 0x1,
  [SimnetEventCommand.ApCommand]: 0x2,
  [SimnetEventCommand.Autopilot]: 0xff,
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
export const SimnetDisplayGroupValues: {[key: string]: number} = {
  [SimnetDisplayGroup.Default]: 0x1,
  [SimnetDisplayGroup.Group1]: 0x2,
  [SimnetDisplayGroup.Group2]: 0x3,
  [SimnetDisplayGroup.Group3]: 0x4,
  [SimnetDisplayGroup.Group4]: 0x5,
  [SimnetDisplayGroup.Group5]: 0x6,
  [SimnetDisplayGroup.Group6]: 0x7,
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
export const SimnetApEventsValues: {[key: string]: number} = {
  [SimnetApEvents.Standby]: 0x6,
  [SimnetApEvents.AutoMode]: 0x9,
  [SimnetApEvents.NavMode]: 0xa,
  [SimnetApEvents.NonFollowUpMode]: 0xd,
  [SimnetApEvents.FollowUpMode]: 0xe,
  [SimnetApEvents.WindMode]: 0xf,
  [SimnetApEvents.Squareturn]: 0x12,
  [SimnetApEvents.CTurn]: 0x13,
  [SimnetApEvents.UTurn]: 0x14,
  [SimnetApEvents.Spiralturn]: 0x15,
  [SimnetApEvents.ZigZagturn]: 0x16,
  [SimnetApEvents.LazySturn]: 0x17,
  [SimnetApEvents.Depthturn]: 0x18,
  [SimnetApEvents.ChangeCourse]: 0x1a,
  [SimnetApEvents.TimerSync]: 0x3d,
  [SimnetApEvents.PingPortEnd]: 0x70,
  [SimnetApEvents.PingStarboardEnd]: 0x71,
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
export enum SimnetAlarm {
  LowBoatSpeed = 'Low boat speed',
  WindDataMissing = 'Wind data missing',
}

/**
 * @category Enumerations
 */
export const SimnetAlarmValues: {[key: string]: number} = {
  [SimnetAlarm.LowBoatSpeed]: 0x39,
  [SimnetAlarm.WindDataMissing]: 0x3a,
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
  [FusionMessageId.DabUpdtateCommand]: 0x10,
  [FusionMessageId.SetMute]: 0x11,
  [FusionMessageId.SetBalance]: 0x12,
  [FusionMessageId.SetLowPassFiler]: 0x13,
  [FusionMessageId.SetSublevel]: 0x14,
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
  [FusionMessageId.ScanMultirooomDevices]: 0x34,
  [FusionMessageId.SendFileTransfer]: 0x35,
  [FusionMessageId.SetLoud]: 0x36,
  [FusionMessageId.FapiSetSourceMultiroomEnabled]: 0x38,
  [FusionMessageId.RequestHeadUnitDspSettings]: 0x39,
  [FusionMessageId.SendTransferStatus]: 0x40,
  [FusionMessageId.FapiGetServerInfo]: 0x41,
  [FusionMessageId.FapiSetSourceEnabled]: 0x45,
  [FusionMessageId.FapiSetSourceName]: 0x46,
  [FusionMessageId.SendExternalAmpGain]: 0x49,
  [FusionMessageId.SendInternalAmpGain]: 0x4a,
  [FusionMessageId.SendMono]: 0x4b,
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
export const FusionSourceTypeValues: {[key: string]: number} = {
  [FusionSourceType.Am]: 0x0,
  [FusionSourceType.Fm]: 0x1,
  [FusionSourceType.Aux]: 0x2,
  [FusionSourceType.Sirius]: 0x3,
  [FusionSourceType.Ipod]: 0x4,
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
export const FusionSiriusAlertValues: {[key: string]: number} = {
  [FusionSiriusAlert.Unknown]: 0xff,
  [FusionSiriusAlert.None]: 0x1,
  [FusionSiriusAlert.Antenna]: 0x2,
  [FusionSiriusAlert.NoSignal]: 0x3,
  [FusionSiriusAlert.SubscriptionUpdate]: 0x4,
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
  [FusionSetting.MaxVolumeStart]: 0x4b,
  [FusionSetting.BtAutoConnect]: 0x4c,
  [FusionSetting.NullSetting]: 0x4d,
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
export const FusionRepeatStatusValues: {[key: string]: number} = {
  [FusionRepeatStatus.Off]: 0x0,
  [FusionRepeatStatus.Onetrack]: 0x1,
  [FusionRepeatStatus.Allalbum]: 0x2,
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
export enum MaretronProductCode {
  Ssc200 = 'SSC200',
  Ssc300 = 'SSC300',
}

/**
 * @category Enumerations
 */
export const MaretronProductCodeValues: {[key: string]: number} = {
  [MaretronProductCode.Ssc200]: 0x1b2,
  [MaretronProductCode.Ssc300]: 0xa7e,
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

