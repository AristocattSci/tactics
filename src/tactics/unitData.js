export const unitDataMap = new Map();

unitDataMap.set('Knight', {
  name: 'Knight',
  ability: 'Sword & Shield',
  power: 22,
  armor: 25,
  health: 50,
  recovery: 1,
  blocking: 80,
  mType: 'path',
  mRadius: 3,
  aType: 'melee',
  aRange: [1, 1],
  tier: 1,
});

unitDataMap.set('Pyromancer', {
  name: 'Pyromancer',
  ability: 'Fire',
  power: 15,
  armor: 0,
  health: 30,
  recovery: 3,
  blocking: 33,
  mType: 'path',
  mRadius: 3,
  aType: 'magic',
  aRange: [0, 3],
  waitFirstTurn: true,
  tier: 1,
});

unitDataMap.set('Scout', {
  name: 'Scout',
  ability: 'Long Shot',
  power: 18,
  armor: 8,
  health: 40,
  recovery: 2,
  blocking: 60,
  mType: 'path',
  mRadius: 4,
  aType: 'melee',
  aRange: [1, 6],
  aLOS: true,
  waitFirstTurn: true,
  tier: 1,
});

unitDataMap.set('Cleric', {
  name: 'Cleric',
  ability: 'Holy Mass',
  power: 12,
  armor: 0,
  health: 24,
  recovery: 5,
  blocking: 0,
  mType: 'path',
  mRadius: 3,
  aType: 'heal',
  aAll: true,
  waitFirstTurn: true,
  tier: 1,
});

unitDataMap.set('BarrierWard', {
  name: 'Barrier Ward',
  ability: 'Barrier',
  power: 0,
  armor: 0,
  health: 32,
  recovery: 2,
  blocking: 100,
  mType: false,
  mRadius: 0,
  mPass: false,
  aType: 'barrier',
  aFocus: true,
  aRange: [0, 6],
  directional: false,
  tier: 1,
});

unitDataMap.set('LightningWard', {
  name: 'Lightning Ward',
  ability: 'Lightning',
  power: 30,
  armor: 18,
  health: 56,
  recovery: 4,
  blocking: 100,
  mType: false,
  mRadius: 0,
  mPass: false,
  aType: 'magic',
  aRange: [0, 3],
  directional: false,
  tier: 1,
});

unitDataMap.set('DarkMagicWitch', {
  name: 'Dark Magic Witch',
  ability: 'Black Spikes',
  power: 24,
  armor: 0,
  health: 28,
  recovery: 3,
  blocking: 20,
  mType: 'path',
  mRadius: 3,
  aType: 'magic',
  aRange: [1, 4],
  aLinear: true,
  waitFirstTurn: true,
  tier: 1,
});

unitDataMap.set('Assassin', {
  name: 'Assassin',
  ability: 'Multi-Strike',
  specialty: 'Deathblow',
  power: 18,
  armor: 12,
  health: 35,
  recovery: 1,
  blocking: 70,
  mType: 'path',
  mRadius: 4,
  aType: 'melee',
  aRange: [1, 1],
  aAll: true,
  tier: 1,
});

unitDataMap.set('Enchantress', {
  name: 'Enchantress',
  ability: 'Paralytic Field',
  power: 0,
  armor: 0,
  health: 35,
  recovery: 3,
  blocking: 0,
  mType: 'path',
  mRadius: 3,
  aType: 'paralyze',
  aFocus: true,
  aRange: [1, 2],
  aAll: true,
  tier: 1,
});

unitDataMap.set('MudGolem', {
  name: 'Mud Golem',
  ability: 'Punch',
  specialty: 'Quake',
  power: 20,
  armor: 0,
  health: 60,
  recovery: 2,
  blocking: 0,
  mType: 'teleport',
  mRadius: 5,
  aType: 'melee',
  aRange: [1, 1],
  waitFirstTurn: true,
  tier: 2,
});

unitDataMap.set('FrostGolem', {
  name: 'Frost Golem',
  ability: 'Paralyze',
  power: 0,
  armor: 0,
  health: 60,
  recovery: 2,
  blocking: 0,
  mType: 'path',
  mRadius: 2,
  aType: 'paralyze',
  aFocus: true,
  aRange: [1, 4],
  tier: 2,
});

unitDataMap.set('StoneGolem', {
  name: 'Stone Golem',
  tier: 3,
});

unitDataMap.set('DragonTyrant', {
  name: 'Dragon Tyrant',
  ability: 'Fire Blast',
  waitFirstTurn: true,
  tier: 3,
});

unitDataMap.set('BeastRider', {
  name: 'Beast Rider',
  ability: 'Piercing Thrust',
  power: 19,
  armor: 15,
  health: 38,
  recovery: 1,
  blocking: 45,
  mType: 'path',
  mRadius: 4,
  mPass: false,
  aType: 'melee',
  aRange: [1, 2],
  aLinear: true,
  tier: 2,
});

unitDataMap.set('DragonspeakerMage', {
  name:'Dragonspeaker Mage',
  waitFirstTurn: true,
  tier: 4,
});

unitDataMap.set('ChaosSeed', {
  name: 'Chaos Seed',
  ability: 'Chaos',
  specialty: 'Awaken',
  power: 24,
  armor: 99,
  health: 6,
  recovery: 0,
  blocking: 50,
  mType: false,
  mRadius: 0,
  aType: 'magic',
  directional: false,

  legacy: true,
  imports: ['Lightning'],
  sounds: {
    crack: 'crack',
    attack: 'sound1370',
    block: 'sound8',
    heal: 'sound1203',
    wind: {
      file:'chaos',
      volume: 0.25,
      sprite: {
        wind1: [   0, 1950],
        wind2: [2150, 1950],
        wind3: [4300, 1800],
        wind4: [6300, 2500],
        wind5: [9000, 1725]
      }
    },
    phase: {
      file: 'sound4',
      rate: 0.5,
    },
    roar: {
      file:'chaos',
      sprite: {
        roar: [10925, 1675],
      }
    }
  },
  stills: {S: 0},
  frames: [
    {
      x: -1,
      y: 7,
      c: [
        { id:6459, x:-12.5, y:-19.5 },
        { id:1351, x:-21,   y:-61   },
        { id:1354, x:-20,   y:-57   },
      ]
    }
  ],
  tier: 5,
});

unitDataMap.set('Wisp', {
  name: 'Wisp',
  waitFirstTurn: true,
  tier: 3,
});

unitDataMap.set('Furgon', {
  name: 'Furgon',
  ability: 'Summon Nature',
  specialty: 'Entangle',
  power: 0,
  armor: 0,
  health: 48,
  recovery: 1,
  blocking: 50,
  mType: 'path',
  mRadius: 3,
  aType: 'summon',
  aRange: [0, 2],
  tier: 2,
});

unitDataMap.set('Shrub', {
  name: 'Shrub',
  power: 0,
  armor: 0,
  health: 1,
  recovery: 0,
  blocking: 0,
  mType: false,
  mPass: false,
  aType: false,
  directional: false,
  tier: 4,
});

unitDataMap.set('Trophy', {
  name: 'Trophy',
  tier: 5,
});

unitDataMap.set('Ambusher', {
  name: 'Ambusher',
  waitFirstTurn: true,
  tier: 3,
});

unitDataMap.set('Berserker', {
  name: 'Berserker',
  tier: 3,
});

unitDataMap.set('ChaosDragon', {
  name: 'Chaos Dragon',
  ability: 'Static Charge',
  specialty: 'Regenerate',
  power:28,
  armor:30,
  health:38,
  recovery:1,
  blocking:50,
  mType: 'teleport',
  mRadius: 4,
  mPass: false,
  aType: 'magic',
  aLOS: true,
  aLinear: true,
  aRange: [1, 3],

  legacy: true,
  imports: ['Sparkle'],
  sounds: {
    flap: 'sound7',
    block: 'sound11',
    heal: 'sound1203',
    attack: 'sound1602',
    impact: 'sound6',
    charge: {file:'charge', rate:0.6},
    buzz: {file:'buzz',   rate:0.6},
    phase: {file:'sound4', rate:0.5},
  },
  stills: {
    S: 0,
    W: 48,
    N: 96,
    E: 144,
  },
  turns: {
    S: 1,
    W: 49,
    N: 97,
    E: 145,
  },
  animations: {
    S:{move:{s: 2,l:23},attack:{s: 25,l:9},block:{s: 34,l:6},hatch:{s: 40,l:8}},
    W:{move:{s: 50,l:23},attack:{s: 73,l:9},block:{s: 82,l:6},hatch:{s: 88,l:8}},
    N:{move:{s: 98,l:23},attack:{s:121,l:9},block:{s:130,l:6},hatch:{s:136,l:8}},
    E:{move:{s:146,l:23},attack:{s:169,l:9},block:{s:178,l:6},hatch:{s:184,l:8}}
  },
  frames: [
    // S Still
    {c:[{id:6055,x:-70,y:-40,a:0.5},{id:3955,x:-71,y:-101},{id:3957,x:-29,y:-52}]},
    // S Turn
    {c:[{id:6057,x:-53,y:-36,a:0.5},{id:4102,x:-52,y:-109},{id:3959,x:-14,y:-54}]},
    // S Move
    {c:[{id:6059,x:-57,y:-38,a:0.5},{id:4104,x:-60,y:-108},{id:3961,x:-29,y:-51}]},
    {c:[{id:6061,x:-51,y:-31,a:0.5},{id:4106,x:-49,y:-108},{id:3963,x:-29,y:-50}]},
    {c:[{id:6063,x:-68,y:-33,a:0.5},{id:4108,x:-68,y:-74},{id:3965,x:-28,y:-54}]},
    {c:[{id:6065,x:-54,y:-32,a:0.5},{id:4110,x:-55,y:-80},{id:3967,x:-21,y:-55}]},
    {c:[{id:6057,x:-53,y:-36,a:0.5},{id:4102,x:-52,y:-109},{id:3959,x:-14,y:-54}]},
    {c:[{id:6067,x:-28,y:-28,a:0.5},{id:4112,x:-28,y:-110},{id:3969,x:-13,y:-52}]},
    {c:[{id:6069,x:-56,y:-36,a:0.5},{id:4114,x:-54,y:-109},{id:3971,x:-14,y:-52}]},
    {c:[{id:6071,x:-35,y:-29,a:0.5},{id:4116,x:-36,y:-78},{id:3973,x:-8,y:-62}]},
    {c:[{id:6073,x:-19,y:-23,a:0.5},{id:4118,x:-21,y:-105},{id:3975,x:-9,y:-83}]},
    {c:[{id:6075,x:-14,y:-24,a:0.5},{id:4120,x:-13,y:-117},{id:3977,x:-3,y:-94}],a:0.5},
    ,
    ,
    ,
    ,
    {c:[{id:6071,x:-35,y:-29,a:0.5},{id:4116,x:-36,y:-78},{id:3973,x:-8,y:-62}],a:0.5},
    {c:[{id:6069,x:-56,y:-36,a:0.5},{id:4114,x:-54,y:-109},{id:3971,x:-14,y:-52}]},
    {c:[{id:6067,x:-28,y:-28,a:0.5},{id:4112,x:-28,y:-110},{id:3969,x:-13,y:-52}]},
    {c:[{id:6057,x:-53,y:-36,a:0.5},{id:4102,x:-52,y:-109},{id:3959,x:-14,y:-54}]},
    {c:[{id:6065,x:-54,y:-32,a:0.5},{id:4110,x:-55,y:-80},{id:3967,x:-21,y:-55}]},
    {c:[{id:6063,x:-68,y:-33,a:0.5},{id:4108,x:-68,y:-74},{id:3965,x:-28,y:-54}]},
    {c:[{id:6061,x:-51,y:-31,a:0.5},{id:4106,x:-49,y:-108},{id:3963,x:-29,y:-50}]},
    {c:[{id:6059,x:-57,y:-38,a:0.5},{id:4104,x:-60,y:-108},{id:3961,x:-29,y:-51}]},
    {c:[{id:6055,x:-70,y:-40,a:0.5},{id:3955,x:-71,y:-101},{id:3957,x:-29,y:-52}]},
    // S Attack
    {c:[{id:6077,x:-46,y:-25,a:0.5},{id:4122,x:-48,y:-65},{id:3979,x:-29,y:-50}]},
    {c:[{id:6079,x:-38,y:-25,a:0.5},{id:4124,x:-39,y:-51},{id:3981,x:-29,y:-50},{id:56,n:'glow',x:17,y:-10,s:4/3,a:1/3}]},
    {c:[{id:6081,x:-38,y:-25,a:0.5},{id:4126,x:-39,y:-53},{id:3983,x:-26,y:-49},{id:56,n:'glow',x:17,y:-10,s:5/3,a:2/3}]},
    {c:[{id:6083,x:-40,y:-25,a:0.5},{id:4128,x:-41,y:-68},{id:3985,x:-29,y:-48},{id:56,n:'glow',x:17,y:-10,s:2}]},
    {c:[{id:6085,x:-57,y:-39,a:0.5},{id:4130,x:-59,y:-103},{id:3987,x:-30,y:-45},{id:56,n:'glow',x:21,y:-7,s:2}]},
    {c:[{id:6087,x:-48,y:-34,a:0.5},{id:4132,x:-51,y:-105},{id:3989,x:-30,y:-47},{id:56,n:'glow',x:24,y:-13,s:2}]},
    {c:[{id:6087,x:-48,y:-34,a:0.5},{id:4132,x:-51,y:-105},{id:3989,x:-30,y:-47},{id:56,n:'glow',x:24,y:-13,s:2}]},
    {c:[{id:6089,x:-60,y:-44,a:0.5},{id:4134,x:-67,y:-112},{id:3991,x:-30,y:-50}]},
    {c:[{id:6055,x:-70,y:-40,a:0.5},{id:3955,x:-71,y:-101},{id:3957,x:-29,y:-52}]},
    // S Block
    {c:[{id:6077,x:-46,y:-25,a:0.5},{id:4122,x:-48,y:-65},{id:3979,x:-29,y:-50}]},
    {c:[{id:6081,x:-38,y:-25,a:0.5},{id:4126,x:-39,y:-53},{id:3983,x:-26,y:-49}]},
    {c:[{id:6081,x:-38,y:-25,a:0.5},{id:4126,x:-39,y:-53},{id:3983,x:-26,y:-49}]},
    {c:[{id:6081,x:-38,y:-25,a:0.5},{id:4126,x:-39,y:-53},{id:3983,x:-26,y:-49}]},
    {c:[{id:6077,x:-46,y:-25,a:0.5},{id:4122,x:-48,y:-65},{id:3979,x:-29,y:-50}]},
    {c:[{id:6055,x:-70,y:-40,a:0.5},{id:3955,x:-71,y:-101},{id:3957,x:-29,y:-52}]},
    // S Hatch
    {c:[{id:6079,x:-38,y:-25,a:0.5},{id:4124,x:-39,y:-51},{id:3981,x:-29,y:-50}]},
    {c:[{id:6081,x:-38,y:-25,a:0.5},{id:4126,x:-39,y:-53},{id:3983,x:-26,y:-49}]},
    {c:[{id:6083,x:-40,y:-25,a:0.5},{id:4128,x:-41,y:-68},{id:3985,x:-29,y:-48}]},
    {c:[{id:6077,x:-46,y:-25,a:0.5},{id:4122,x:-48,y:-65},{id:3979,x:-29,y:-50}]},
    {c:[{id:6085,x:-57,y:-39,a:0.5},{id:4130,x:-59,y:-103},{id:3987,x:-30,y:-45}]},
    {c:[{id:6087,x:-48,y:-34,a:0.5},{id:4132,x:-51,y:-105},{id:3989,x:-30,y:-47}]},
    {c:[{id:6085,x:-57,y:-39,a:0.5},{id:4130,x:-59,y:-103},{id:3987,x:-30,y:-45}]},
    {c:[{id:6055,x:-70,y:-40,a:0.5},{id:3955,x:-71,y:-101},{id:3957,x:-29,y:-52}]},
    // W Still
    {c:[{id:6091,x:-26,y:-45,a:0.5},{id:4136,x:-26,y:-102},{id:3993,x:-21,y:-54}]},
    // W Turn
    {c:[{id:6093,x:-70,y:-35,a:0.5},{id:4138,x:-72,y:-113},{id:3995,x:-29,y:-54}]},
    // W Move
    {c:[{id:6095,x:-26,y:-38,a:0.5},{id:4140,x:-26,y:-105},{id:3997,x:-22,y:-51}]},
    {c:[{id:6097,x:-26,y:-33,a:0.5},{id:4142,x:-26,y:-108},{id:3999,x:-22,y:-49}]},
    {c:[{id:6099,x:-49,y:-43,a:0.5},{id:4144,x:-49,y:-75},{id:4001,x:-26,y:-54}]},
    {c:[{id:6101,x:-53,y:-35,a:0.5},{id:4146,x:-53,y:-83},{id:4003,x:-28,y:-55}]},
    {c:[{id:6093,x:-70,y:-35,a:0.5},{id:4138,x:-72,y:-113},{id:3995,x:-29,y:-54}]},
    {c:[{id:6103,x:-33,y:-18,a:0.5},{id:4148,x:-33,y:-107},{id:4005,x:-30,y:-53}]},
    {c:[{id:6105,x:-54,y:-36,a:0.5},{id:4150,x:-54,y:-109},{id:4007,x:-31,y:-52}]},
    {c:[{id:6107,x:-78,y:-24,a:0.5},{id:4152,x:-79,y:-77},{id:4009,x:-36,y:-62}]},
    {c:[{id:6109,x:-61,y:-13,a:0.5},{id:4154,x:-61,y:-103},{id:4011,x:-46,y:-83}]},
    {c:[{id:6111,x:-70,y:-9,a:0.5},{id:4156,x:-71,y:-117},{id:4013,x:-51,y:-94}],a:0.5},
    ,
    ,
    ,
    ,
    {c:[{id:6107,x:-78,y:-24,a:0.5},{id:4152,x:-79,y:-77},{id:4009,x:-36,y:-62}],a:0.5},
    {c:[{id:6105,x:-54,y:-36,a:0.5},{id:4150,x:-54,y:-109},{id:4007,x:-31,y:-52}]},
    {c:[{id:6103,x:-33,y:-18,a:0.5},{id:4148,x:-33,y:-107},{id:4005,x:-30,y:-53}]},
    {c:[{id:6093,x:-70,y:-35,a:0.5},{id:4138,x:-72,y:-113},{id:3995,x:-29,y:-54}]},
    {c:[{id:6101,x:-53,y:-35,a:0.5},{id:4146,x:-53,y:-83},{id:4003,x:-28,y:-55}]},
    {c:[{id:6099,x:-49,y:-43,a:0.5},{id:4144,x:-49,y:-75},{id:4001,x:-26,y:-54}]},
    {c:[{id:6097,x:-26,y:-33,a:0.5},{id:4142,x:-26,y:-108},{id:3999,x:-22,y:-49}]},
    {c:[{id:6095,x:-26,y:-38,a:0.5},{id:4140,x:-26,y:-105},{id:3997,x:-22,y:-51}]},
    {c:[{id:6091,x:-26,y:-45,a:0.5},{id:4136,x:-26,y:-102},{id:3993,x:-21,y:-54}]},
    // W Attack
    {c:[{id:6113,x:-54,y:-30,a:0.5},{id:4158,x:-55,y:-75},{id:4015,x:-20,y:-50}]},
    {c:[{id:6115,x:-34,y:-25,a:0.5},{id:4160,x:-34,y:-56},{id:4017,x:-19,y:-50},{id:56,n:'glow',x:-17,y:-10,s:4/3,a:1/3}]},
    {c:[{id:6117,x:-37,y:-25,a:0.5},{id:4162,x:-37,y:-59},{id:4019,x:-19,y:-49},{id:56,n:'glow',x:-17,y:-10,s:5/3,a:2/3}]},
    {c:[{id:6119,x:-49,y:-25,a:0.5},{id:4164,x:-50,y:-70},{id:4021,x:-20,y:-48},{id:56,n:'glow',x:-17,y:-10,s:2}]},
    {c:[{id:6121,x:-30,y:-38,a:0.5},{id:4166,x:-31,y:-102},{id:4023,x:-25,y:-45},{id:56,n:'glow',x:-18,y:-7,s:2}]},
    {c:[{id:6123,x:-32,y:-31,a:0.5},{id:4168,x:-32,y:-100},{id:4025,x:-30,y:-47},{id:56,n:'glow',x:-24,y:-13,s:2}]},
    {c:[{id:6123,x:-32,y:-31,a:0.5},{id:4168,x:-32,y:-100},{id:4025,x:-30,y:-47},{id:56,n:'glow',x:-24,y:-13,s:2}]},
    {c:[{id:6125,x:-28,y:-42,a:0.5},{id:4170,x:-28,y:-109},{id:4027,x:-25,y:-50}]},
    {c:[{id:6091,x:-26,y:-45,a:0.5},{id:4136,x:-26,y:-102},{id:3993,x:-21,y:-54}]},
    // W Block
    {c:[{id:6113,x:-54,y:-30,a:0.5},{id:4158,x:-55,y:-75},{id:4015,x:-20,y:-50}]},
    {c:[{id:6117,x:-37,y:-25,a:0.5},{id:4162,x:-37,y:-59},{id:4019,x:-19,y:-49}]},
    {c:[{id:6117,x:-37,y:-25,a:0.5},{id:4162,x:-37,y:-59},{id:4019,x:-19,y:-49}]},
    {c:[{id:6117,x:-37,y:-25,a:0.5},{id:4162,x:-37,y:-59},{id:4019,x:-19,y:-49}]},
    {c:[{id:6113,x:-54,y:-30,a:0.5},{id:4158,x:-55,y:-75},{id:4015,x:-20,y:-50}]},
    {c:[{id:6091,x:-26,y:-45,a:0.5},{id:4136,x:-26,y:-102},{id:3993,x:-21,y:-54}]},
    // W Hatch
    {c:[{id:6115,x:-34,y:-25,a:0.5},{id:4160,x:-34,y:-56},{id:4017,x:-19,y:-50}]},
    {c:[{id:6117,x:-37,y:-25,a:0.5},{id:4162,x:-37,y:-59},{id:4019,x:-19,y:-49}]},
    {c:[{id:6119,x:-49,y:-25,a:0.5},{id:4164,x:-50,y:-70},{id:4021,x:-20,y:-48}]},
    {c:[{id:6113,x:-54,y:-30,a:0.5},{id:4158,x:-55,y:-75},{id:4015,x:-20,y:-50}]},
    {c:[{id:6121,x:-30,y:-38,a:0.5},{id:4166,x:-31,y:-102},{id:4023,x:-25,y:-45}]},
    {c:[{id:6123,x:-32,y:-31,a:0.5},{id:4168,x:-32,y:-100},{id:4025,x:-30,y:-47}]},
    {c:[{id:6121,x:-30,y:-38,a:0.5},{id:4166,x:-31,y:-102},{id:4023,x:-25,y:-45}]},
    {c:[{id:6091,x:-26,y:-45,a:0.5},{id:4136,x:-26,y:-102},{id:3993,x:-21,y:-54}]},
    // N Still
    {c:[{id:6055,x:-70,y:-40,a:0.5,f:'B',w:112,h:58},{id:4172,x:-43,y:-65},{id:4029,x:-26,y:-61}]},
    // N Turn
    {c:[{id:6057,x:-53,y:-36,a:0.5,f:'B',w:124,h:82},{id:4174,x:-71,y:-123},{id:4031,x:-27,y:-68}]},
    // N Move
    {c:[{id:6059,x:-57,y:-38,a:0.5,f:'B',w:99,h:56},{id:4176,x:-43,y:-62},{id:4033,x:-26,y:-58}]},
    {c:[{id:6061,x:-51,y:-31,a:0.5,f:'B',w:94,h:49},{id:4178,x:-44,y:-70},{id:4035,x:-26,y:-56}]},
    {c:[{id:6063,x:-68,y:-33,a:0.5,f:'B',w:135,h:65},{id:4180,x:-69,y:-59},{id:4037,x:-23,y:-64}]},
    {c:[{id:6065,x:-54,y:-32,a:0.5,f:'B',w:107,h:66},{id:4182,x:-54,y:-82},{id:4039,x:-27,y:-67}]},
    {c:[{id:6057,x:-53,y:-36,a:0.5,f:'B',w:124,h:82},{id:4174,x:-71,y:-123},{id:4031,x:-27,y:-68}]},
    {c:[{id:6067,x:-28,y:-28,a:0.5,f:'B',w:71,h:50},{id:4184,x:-44,y:-113},{id:4041,x:-29,y:-68}]},
    {c:[{id:6069,x:-56,y:-36,a:0.5,f:'B',w:109,h:71},{id:4186,x:-53,y:-114},{id:4043,x:-31,y:-68}]},
    {c:[{id:6071,x:-35,y:-29,a:0.5,f:'B',w:110,h:81},{id:4188,x:-79,y:-83},{id:4045,x:-36,y:-84}]},
    {c:[{id:6073,x:-19,y:-23,a:0.5,f:'B',w:79,h:63},{id:4190,x:-61,y:-121},{id:4047,x:-46,y:-117}]},
    {c:[{id:6075,x:-14,y:-24,a:0.5,f:'B',w:83,h:70},{id:4192,x:-71,y:-139},{id:4049,x:-52,y:-135}],a:0.5},
    ,
    ,
    ,
    ,
    {c:[{id:6071,x:-35,y:-29,a:0.5,f:'B',w:110,h:81},{id:4188,x:-79,y:-83},{id:4045,x:-36,y:-84}],a:0.5},
    {c:[{id:6069,x:-56,y:-36,a:0.5,f:'B',w:109,h:71},{id:4186,x:-53,y:-114},{id:4043,x:-31,y:-68}]},
    {c:[{id:6067,x:-28,y:-28,a:0.5,f:'B',w:71,h:50},{id:4184,x:-44,y:-113},{id:4041,x:-29,y:-68}]},
    {c:[{id:6057,x:-53,y:-36,a:0.5,f:'B',w:124,h:82},{id:4174,x:-71,y:-123},{id:4031,x:-27,y:-68}]},
    {c:[{id:6065,x:-54,y:-32,a:0.5,f:'B',w:107,h:66},{id:4182,x:-54,y:-82},{id:4039,x:-27,y:-67}]},
    {c:[{id:6063,x:-68,y:-33,a:0.5,f:'B',w:135,h:65},{id:4180,x:-69,y:-59},{id:4037,x:-23,y:-64}]},
    {c:[{id:6061,x:-51,y:-31,a:0.5,f:'B',w:94,h:49},{id:4178,x:-44,y:-70},{id:4035,x:-26,y:-56}]},
    {c:[{id:6059,x:-57,y:-38,a:0.5,f:'B',w:99,h:56},{id:4176,x:-43,y:-62},{id:4033,x:-26,y:-58}]},
    {c:[{id:6055,x:-70,y:-40,a:0.5,f:'B',w:112,h:58},{id:4172,x:-43,y:-65},{id:4029,x:-26,y:-61}]},
    // N Attack
    {c:[{id:6077,x:-46,y:-25,a:0.5,f:'B',w:104,h:62},{id:4194,x:-60,y:-87},{id:4051,x:-26,y:-56}]},
    {c:[{id:6079,x:-38,y:-25,a:0.5,f:'B',w:80,h:48},{id:56,n:'glow',x:-17,y:-32,s:4/3,a:1/3},{id:4196,x:-43,y:-64},{id:4053,x:-26,y:-52}]},
    {c:[{id:6081,x:-38,y:-25,a:0.5,f:'B',w:80,h:50},{id:56,n:'glow',x:-17,y:-32,s:5/3,a:2/3},{id:4198,x:-43,y:-68},{id:4055,x:-26,y:-51}]},
    {c:[{id:6083,x:-40,y:-25,a:0.5,f:'B',w:89,h:57},{id:56,n:'glow',x:-17,y:-32,s:2},{id:4200,x:-48,y:-70},{id:4057,x:-26,y:-52}]},
    {c:[{id:6085,x:-57,y:-39,a:0.5,f:'B',w:99,h:61},{id:56,n:'glow',x:-17,y:-32,s:2},{id:4202,x:-43,y:-67},{id:4059,x:-25,y:-55}]},
    {c:[{id:6087,x:-48,y:-34,a:0.5,f:'B',w:90,h:55},{id:56,n:'glow',x:-21,y:-42,s:2},{id:4204,x:-43,y:-59},{id:4061,x:-27,y:-55}]},
    {c:[{id:6087,x:-48,y:-34,a:0.5,f:'B',w:90,h:55},{id:56,n:'glow',x:-21,y:-42,s:2},{id:4204,x:-43,y:-59},{id:4061,x:-27,y:-55}]},
    {c:[{id:6089,x:-60,y:-44,a:0.5,f:'B',w:102,h:63},{id:4206,x:-43,y:-58},{id:4063,x:-25,y:-58}]},
    {c:[{id:6055,x:-70,y:-40,a:0.5,f:'B',w:112,h:58},{id:4172,x:-43,y:-65},{id:4029,x:-26,y:-61}]},
    // N Block
    {c:[{id:6077,x:-46,y:-25,a:0.5,f:'B',w:104,h:62},{id:4194,x:-60,y:-87},{id:4051,x:-26,y:-56}]},
    {c:[{id:6081,x:-38,y:-25,a:0.5,f:'B',w:80,h:50},{id:4198,x:-43,y:-68},{id:4055,x:-26,y:-51}]},
    {c:[{id:6081,x:-38,y:-25,a:0.5,f:'B',w:80,h:50},{id:4198,x:-43,y:-68},{id:4055,x:-26,y:-51}]},
    {c:[{id:6081,x:-38,y:-25,a:0.5,f:'B',w:80,h:50},{id:4198,x:-43,y:-68},{id:4055,x:-26,y:-51}]},
    {c:[{id:6077,x:-46,y:-25,a:0.5,f:'B',w:104,h:62},{id:4194,x:-60,y:-87},{id:4051,x:-26,y:-56}]},
    {c:[{id:6055,x:-70,y:-40,a:0.5,f:'B',w:112,h:58},{id:4172,x:-43,y:-65},{id:4029,x:-26,y:-61}]},
    // N Hatch
    {c:[{id:6079,x:-38,y:-25,a:0.5,f:'B',w:80,h:48},{id:4196,x:-43,y:-64},{id:4053,x:-26,y:-52}]},
    {c:[{id:6081,x:-38,y:-25,a:0.5,f:'B',w:80,h:50},{id:4198,x:-43,y:-68},{id:4055,x:-26,y:-51}]},
    {c:[{id:6083,x:-40,y:-25,a:0.5,f:'B',w:89,h:57},{id:4200,x:-48,y:-70},{id:4057,x:-26,y:-52}]},
    {c:[{id:6077,x:-46,y:-25,a:0.5,f:'B',w:104,h:62},{id:4194,x:-60,y:-87},{id:4051,x:-26,y:-56}]},
    {c:[{id:6085,x:-57,y:-39,a:0.5,f:'B',w:99,h:61},{id:4202,x:-43,y:-67},{id:4059,x:-25,y:-55}]},
    {c:[{id:6087,x:-48,y:-34,a:0.5,f:'B',w:90,h:55},{id:4204,x:-43,y:-59},{id:4061,x:-27,y:-55}]},
    {c:[{id:6085,x:-57,y:-39,a:0.5,f:'B',w:99,h:61},{id:4202,x:-43,y:-67},{id:4059,x:-25,y:-55}]},
    {c:[{id:6055,x:-70,y:-40,a:0.5,f:'B',w:112,h:58},{id:4172,x:-43,y:-65},{id:4029,x:-26,y:-61}]},
    // E Still
    {c:[{id:6091,x:-26,y:-45,a:0.5,f:'B',w:86,h:73},{id:4208,x:-61,y:-83},{id:4065,x:-21,y:-56}]},
    // E Turn
    {c:[{id:6093,x:-70,y:-35,a:0.5,f:'B',w:123,h:82},{id:4210,x:-55,y:-120},{id:4067,x:-16,y:-67}]},
    // E Move
    {c:[{id:6095,x:-26,y:-38,a:0.5,f:'B',w:82,h:66},{id:4212,x:-59,y:-71},{id:4069,x:-23,y:-53}]},
    {c:[{id:6097,x:-26,y:-33,a:0.5,f:'B',w:72,h:62},{id:4214,x:-49,y:-91},{id:4071,x:-24,y:-50}]},
    {c:[{id:6099,x:-49,y:-43,a:0.5,f:'B',w:99,h:72},{id:4216,x:-52,y:-63},{id:4073,x:-22,y:-62}]},
    {c:[{id:6101,x:-53,y:-35,a:0.5,f:'B',w:101,h:70},{id:4218,x:-50,y:-83},{id:4075,x:-18,y:-66}]},
    {c:[{id:6093,x:-70,y:-35,a:0.5,f:'B',w:123,h:82},{id:4210,x:-55,y:-120},{id:4067,x:-16,y:-67}]},
    {c:[{id:6103,x:-33,y:-18,a:0.5,f:'B',w:75,h:47},{id:4220,x:-43,y:-114},{id:4077,x:-15,y:-68}]},
    {c:[{id:6105,x:-54,y:-36,a:0.5,f:'B',w:109,h:71},{id:4222,x:-56,y:-114},{id:4079,x:-13,y:-68}]},
    {c:[{id:6107,x:-78,y:-24,a:0.5,f:'B',w:123,h:75},{id:4224,x:-46,y:-83},{id:4081,x:-8,y:-84}]},
    {c:[{id:6109,x:-61,y:-13,a:0.5,f:'B',w:96,h:53},{id:4226,x:-36,y:-121},{id:4083,x:-6,y:-117}]},
    {c:[{id:6111,x:-70,y:-9,a:0.5,f:'B',w:106,h:55},{id:4228,x:-38,y:-139},{id:4085,x:-3,y:-135}],a:0.5},
    ,
    ,
    ,
    ,
    {c:[{id:6107,x:-78,y:-24,a:0.5,f:'B',w:123,h:75},{id:4224,x:-46,y:-83},{id:4081,x:-8,y:-84}],a:0.5},
    {c:[{id:6105,x:-54,y:-36,a:0.5,f:'B',w:109,h:71},{id:4222,x:-56,y:-114},{id:4079,x:-13,y:-68}]},
    {c:[{id:6103,x:-33,y:-18,a:0.5,f:'B',w:75,h:47},{id:4220,x:-43,y:-114},{id:4077,x:-15,y:-68}]},
    {c:[{id:6093,x:-70,y:-35,a:0.5,f:'B',w:123,h:82},{id:4210,x:-55,y:-120},{id:4067,x:-16,y:-67}]},
    {c:[{id:6101,x:-53,y:-35,a:0.5,f:'B',w:101,h:70},{id:4218,x:-50,y:-83},{id:4075,x:-18,y:-66}]},
    {c:[{id:6099,x:-49,y:-43,a:0.5,f:'B',w:99,h:72},{id:4216,x:-52,y:-63},{id:4073,x:-22,y:-62}]},
    {c:[{id:6097,x:-26,y:-33,a:0.5,f:'B',w:72,h:62},{id:4214,x:-49,y:-91},{id:4071,x:-24,y:-50}]},
    {c:[{id:6095,x:-26,y:-38,a:0.5,f:'B',w:82,h:66},{id:4212,x:-59,y:-71},{id:4069,x:-23,y:-53}]},
    {c:[{id:6091,x:-26,y:-45,a:0.5,f:'B',w:86,h:73},{id:4208,x:-61,y:-83},{id:4065,x:-21,y:-56}]},
    // E Attack
    {c:[{id:6113,x:-54,y:-30,a:0.5,f:'B',w:92,h:69},{id:4230,x:-40,y:-90},{id:4087,x:-23,y:-52}]},
    {c:[{id:6115,x:-34,y:-25,a:0.5,f:'B',w:71,h:53},{id:56,n:'glow',x:17,y:-32,s:4/3,a:1/3},{id:4232,x:-39,y:-62},{id:4089,x:-23,y:-50}]},
    {c:[{id:6117,x:-37,y:-25,a:0.5,f:'B',w:74,h:53},{id:56,n:'glow',x:17,y:-32,s:5/3,a:2/3},{id:4234,x:-39,y:-66},{id:4091,x:-23,y:-49}]},
    {c:[{id:6119,x:-49,y:-25,a:0.5,f:'B',w:86,h:58},{id:56,n:'glow',x:17,y:-32,s:2},{id:4236,x:-39,y:-71},{id:4093,x:-22,y:-50}]},
    {c:[{id:6121,x:-30,y:-38,a:0.5,f:'B',w:88,h:66},{id:56,n:'glow',x:17,y:-32,s:2},{id:4238,x:-61,y:-66},{id:4095,x:-17,y:-54}]},
    {c:[{id:6123,x:-32,y:-31,a:0.5,f:'B',w:84,h:59},{id:56,n:'glow',x:24,y:-42,s:2},{id:4240,x:-53,y:-63},{id:4097,x:-19,y:-53}]},
    {c:[{id:6123,x:-32,y:-31,a:0.5,f:'B',w:84,h:59},{id:56,n:'glow',x:24,y:-42,s:2},{id:4240,x:-53,y:-63},{id:4097,x:-19,y:-53}]},
    {c:[{id:6125,x:-28,y:-42,a:0.5,f:'B',w:93,h:70},{id:4242,x:-70,y:-70},{id:4099,x:-19,y:-55}]},
    {c:[{id:6091,x:-26,y:-45,a:0.5,f:'B',w:86,h:73},{id:4208,x:-61,y:-83},{id:4065,x:-21,y:-56}]},
    // E Block
    {c:[{id:6113,x:-54,y:-30,a:0.5,f:'B',w:92,h:69},{id:4230,x:-40,y:-90},{id:4087,x:-23,y:-52}]},
    {c:[{id:6117,x:-37,y:-25,a:0.5,f:'B',w:74,h:53},{id:4234,x:-39,y:-66},{id:4091,x:-23,y:-49}]},
    {c:[{id:6117,x:-37,y:-25,a:0.5,f:'B',w:74,h:53},{id:4234,x:-39,y:-66},{id:4091,x:-23,y:-49}]},
    {c:[{id:6117,x:-37,y:-25,a:0.5,f:'B',w:74,h:53},{id:4234,x:-39,y:-66},{id:4091,x:-23,y:-49}]},
    {c:[{id:6113,x:-54,y:-30,a:0.5,f:'B',w:92,h:69},{id:4230,x:-40,y:-90},{id:4087,x:-23,y:-52}]},
    {c:[{id:6091,x:-26,y:-45,a:0.5,f:'B',w:86,h:73},{id:4208,x:-61,y:-83},{id:4065,x:-21,y:-56}]},
    // E Hatch
    {c:[{id:6115,x:-34,y:-25,a:0.5,f:'B',w:71,h:53},{id:4232,x:-39,y:-62},{id:4089,x:-23,y:-50}]},
    {c:[{id:6117,x:-37,y:-25,a:0.5,f:'B',w:74,h:53},{id:4234,x:-39,y:-66},{id:4091,x:-23,y:-49}]},
    {c:[{id:6119,x:-49,y:-25,a:0.5,f:'B',w:86,h:58},{id:4236,x:-39,y:-71},{id:4093,x:-22,y:-50}]},
    {c:[{id:6113,x:-54,y:-30,a:0.5,f:'B',w:92,h:69},{id:4230,x:-40,y:-90},{id:4087,x:-23,y:-52}]},
    {c:[{id:6121,x:-30,y:-38,a:0.5,f:'B',w:88,h:66},{id:4238,x:-61,y:-66},{id:4095,x:-17,y:-54}]},
    {c:[{id:6123,x:-32,y:-31,a:0.5,f:'B',w:84,h:59},{id:4240,x:-53,y:-63},{id:4097,x:-19,y:-53}]},
    {c:[{id:6121,x:-30,y:-38,a:0.5,f:'B',w:88,h:66},{id:4238,x:-61,y:-66},{id:4095,x:-17,y:-54}]},
    {c:[{id:6091,x:-26,y:-45,a:0.5,f:'B',w:86,h:73},{id:4208,x:-61,y:-83},{id:4065,x:-21,y:-56}]}
  ],
  tier: 5,
});

// Map unit type names to IDs until we get rid of the IDs.
export const unitTypeToIdMap = new Map();

[...unitDataMap.keys()].forEach((unitType, unitTypeId) => {
  unitTypeToIdMap.set(unitType, unitTypeId);
});

export default unitDataMap;
