var fcc;
var hackathon;
var mean;
var meteor;
var angular;
var google_api;
var foursquare_api;
var d3_js;
var node_js;
var mobile_app;
var full_stack;
var express;

var projects = {
  list:[
    {
      name:'cardling',
      description:'Create and keep track of media-based flashcards that help you learn or practice vocabulary.',
      img:'img/cardling.jpg',
      tags: [mean, full_stack, mobile_app],
      githubLink: '',
      liveLink: ''
    },
    {
      name:'node reverse .wav',
      description:'Upload, reverse, and download .wav files. Powered by Node.js',
      img:'img/node_reverse.jpg',
      tags:[node_js, express, full_stack],
      githubLink:'',
      liveLink:''
    },
    {
      name:'Placedrop',
      description:'Create customized notes and markers on a local map and plan your daily route. Powered by the Google Maps API, this project grew out of my team\'s entry in Expedia\'s February 2016 hackathon.',
      img:'img/placedrop.jpg',
      tags:[angular, google_api, hackathon],
      githubLink:'https://github.com/abraxasrex/abraxasrex.github.io/tree/master/placedrop',
      liveLink:'abraxasrex.github.io/placedrop/index.html'
    },
    {
      name:'Hungr',
      description:'Maybe you should cook dinner tonight. Maybe you should eat out. Maybe this app will help you decide? It utilizes the Foursquare and Food2Fork APIs to compare all your delicious options.',
      img:'img/hungr.jpg',
      tags:[angular, meteor, foursquare_api, full_stack],
      githubLink:'https://github.com/abraxasrex/hungr',
      liveLink:'http://hungrapp.meteor.com'
    },
    {
      name:'Datamap',
      description:'D3.js-powered visualization of climate change in the 20th century. Select a range of years to discover the relative impact of global warming in a given region.',
      githubLink:'https://github.com/abraxasrex/GCC_MAP',
      liveLink:'http://GCCMAP.meteor.com',
      img:''
    },
    {
      name:'Super Simon Says',
      description:'A customizable variation on the classic memory game',
      tags:[fcc],
      githubLink:'',
      liveLink:'http://codepen.io/jbreasor/full/pjvGGP/',
      img:''
    },
    {
      name:'Minimal Polls',
      description:'Create customized polls, vote on the polls of others, and share your favorites with your friends. A basejump project for Free Code Camp.',
      tags:[meteor, fcc, full_stack],
      githubLink:'https://github.com/abraxasrex/minimal-voting',
      liveLink:'http://minimal-voting.herokuapp.com',
      img:''
    },
    {
      name:'SelfCinema',
      description:'An app for organizing, or finding and attending local film screenings. I would pitch it as "an anonymous version of meetup.com, exclusively for screening parties.',
      tags:[meteor, full_stack],
      githubLink:'https://github.com/abraxasrex/selfcinema',
      liveLink:'http://selfcinema.meteor.com',
      img:''
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
    {
      name: 'Devpost',
      link:'http://devpost.com/jbreasor'
    },
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
      link:''
    },
    {
      name:'BandCamp',
      link:''
    }
  ]};

function Project(name, img, description, tags, githubLink, liveLink){
  this.name = name;
  this.img = img;
  this.description = description;
  this.tags = tags;
  this.githubLink = githubLink;
  this.liveLink = liveLink;
  projectarray.push(liveLink);
}

function SocialMedia(name, img, link){
  this.name = name;
  this.img = img;
  this.link = link;
}

createRiver();
