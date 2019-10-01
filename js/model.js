
var projects = {
  list:[
    {
      name:'Vr Poly Gallery',
      description:'A multi-platform virtual gallery browser for Google\'s Poly 3D Asset Library. For desktop and mobile browsers.',
      img:'img/poly.jpg',
      tags:[ 'React', 'VR', 'google APIs'],
      liveLink:'http://jbr-app.herokuapp.com/VirtualReaction',
      githubLink:'https://github.com/abraxasrex/Virtual_Reaction',
      offLine: false,
       npmPackage: false
    },
    {
      name:'Billseek',
      description:'A social application for tracking and sharing the activity of bills and people in Congress, developed with Angular and typescript.',
      img:'img/Billseek.png',
      tags:[ 'typescript', 'MEAN stack', 'mocha', 'chai'],
      liveLink:'http://jbr-app.herokuapp.com/BillSeek',
      githubLink:'https://github.com/abraxasrex/BillSeek',
      exampleLink:'http://jbr-app.herokuapp.com/BillSeek/interests/togo123', 
      offLine: false,
       npmPackage: false
    },
    {
      name:'Grind Log Pro',
      description:'A USDA-compliant web app for grocery stores that scans, logs, and tracks meat grinds.',
      img:'img/glp2.png',
      tags:[ 'consumer-facing', 'MEAN stack', 'bootstrap'],
      liveLink:'http://www.grindlogpro.com',
      githubLink:'https://impgrocery.com/our-services/grind-log-pro/',
      private:true
    },
    {
      name:'wav-reverse(npm)',
      description: 'A node package that lets you reverse a .wav file.',
      githubLink:'https://www.npmjs.com/package/reverse-wav',
      liveLink:'https://www.npmjs.com/package/reverse-wav',
      img:"https://www.freesound.org/data/displays/181/181129_321967_spec_L.jpg",
      tags:['node.js', 'audio programming'],
      npmPackage: true
    },
    {
      name:'Virtua Breakfast',
      description:'A game for mobile browsers using Three.js and the DeviceOrientation API. Rotate in place to move the flying donut alongside your field of view. Catch the falling oranges and advance to faster levels. Experience the future of breakfast.',
      img:'img/virtua.png',
      tags:[ 'Three.js', 'VR', 'express.js'],
      githubLink:'https://github.com/abraxasrex/virtual_breakfast',
      liveLink:'http://jbr-app.herokuapp.com/VirtualBreakfast',
      offLine: false
    },
    {
      name:'Notifry',
      description:'A calendar todo app brought to you by the magic of React.',
      img:'img/notifry.png',
      tags:[ 'React', 'material UI', 'webpack'],
      githubLink:'https://github.com/abraxasrex/Notefry',
      offLine: true
    },
    {
      name:'Cardling',
      description:'Create and keep track of GIF flashcards that help you learn or practice vocabulary.',
      img:'img/cardling.png',
      tags: ['MEAN stack', 'Passport'],
      githubLink: 'https://github.com/abraxasrex/Cardling_2',
      offLine: true
    },
    {
      name:'Placedrop',
      description:'Create customized notes and markers on a local map and plan your daily route. Powered by the Google Maps API, this project grew out of my team\'s entry in Expedia\'s February 2016 hackathon.',
      img:'img/place_drop.png',
      tags:['google APIs', 'hackathon', 'express.js'],
      githubLink:'https://github.com/abraxasrex/placedrop',
      offLine: true
    },
    {
      name:'Hungr',
      description:'Maybe you should cook dinner tonight. Maybe you should eat out. Maybe this app will help you decide? It utilizes the Foursquare and Food2Fork APIs to compare all your delicious options.',
      img:'img/hungr.png',
      tags:['angular.js', 'meteor.js', 'foursquare API'],
      githubLink:'https://github.com/abraxasrex/hungr',
      offLine: true
    },
    {
      name:'Datamap',
      description:'D3.js-powered visualization of climate change in the 20th century. Select a range of years to discover the relative impact of global warming in a given region.',
      githubLink:'https://github.com/abraxasrex/GCC_MAP',
      img:'img/datamap.png',
      tags:['d3.js', 'meteor.js'],
      offLine: true
    },
    {
      name:'Simon Says',
      description:'A variation on the classic memory game. A Zipline project in front end development from FreeCodeCamp.com.',
      tags:['FreeCodeCamp'],
      githubLink:'wip',
      liveLink:"https://codepen.io/jbreasor/full/pjvGGP",
      img:'img/simon.png',
      offLine: false
    },
    {
      name:'Minimal Polls',
      description:'Create customized polls, vote on the polls of others, and share your favorites with your friends. A basejump project for Free Code Camp.',
      tags:['meteor.js', 'FreeCodeCamp'],
      githubLink:"https://github.com/abraxasrex/minimal-voting",
      img:'img/minimal.png',
      offLine: true
    }
  ]
};
var socialMedias = {
  list: [
    {
      name: 'Github',
      link:'https://github.com/abraxasrex'
    },
    {
      name: 'LinkedIn',
      link:'https://www.linkedin.com/in/jonathan-reasor-16966352'
    },
  //  {
    //   name: 'Devpost',
    //   link:'http://devpost.com/jbreasor'
    // },
    {
      name: 'F.C.C.',
      link:'http://www.freecodecamp.com/abraxasrex'
    },
    {
      name:'Codepen',
      link:'http://codepen.io/jbreasor/'
    },
    {
      name:'Codecademy',
      link:'https://www.codecademy.com/davidbowie89'
    },
    {
      name:'Wordpress',
      link:'https://mindbodyscissors.wordpress.com/2015/10/19/meteor-js-through-the-lens-of-a-junior-dev/'
    },
    {
      name:'StackOverFlow',
      link:'http://stackoverflow.com/users/5258815/jonathan-reasor'
    },
    {
      name:'NPM',
      link:'https://www.npmjs.com/~abraxasrex'
    }
  ]};

var tag_colors = {
  'mocha':'PaleGreen',
  'chai':'Peachpuff',
  'hackathon': 'Khaki',
  'google APIs': 'LightSalmon',
  'bootstrap': 'Indigo',
  'typescript':'Orange',
  'material UI': 'Green',
  'express.js':'MediumSlateblue',
  'webpack':'MediumSlateblue',
  'MEAN stack': 'Plum',
  'express.js':'MediumSlateBlue',
  'node.js': 'GreenYellow',
  'meteor.js': 'MediumAquamarine',
  'FreeCodeCamp': 'LightSteelBlue',
  'd3.js': 'Goldenrod',
  'audio programming': 'FloralWhite',
  'angular.js': 'Silver',
  'foursquare API': 'Tomato',
  'Passport': 'LightSeaGreen',
  'React': 'GreenYellow',
  'Three.js' :'DarkOrange',
  'VR':'IndianRed',
  'consumer-facing':'PaleVioletRed'
}
