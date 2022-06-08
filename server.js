const express = require('express')
const app = express()
const cors = require('cors')
const { response } = require('express')
const { request } = require('http')
const PORT = 8000

app.use(cors())
//Account for plural vs singular?
const aliens = {
    'human': {
    'speciesName' : 'Humans',
    'homeworld': 'Earth',
    'location': 'Alpha Quadrant',
    'features':'Rounded ears, hair on head and face (sometimes)',
    'interesting fact': 'Founded the United Federation of Planets after first contact with the Vulcans' ,
    'notable examples' : "James T. Kirk, Zephram Cochran, Abraham Lincoln",
    'image': '',
    'interestingFact': 'Founded the United Federation of Planets after first contact with the Vulcans' ,
    'notableExamples' : "James T. Kirk, Zephram Cochran, Abraham Lincoln",
    'image': 'https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg'},
    'vulcan': {
        'speciesName' : 'Vulcans',
        'homeworld': 'Vulcan',
        'features':'Pointed ears, upward-curving eyebrows',
        'interesting fact': 'Practice an extreme form of emotional regulation that focuses on logic above all else, pioneered by a Vulcan named Surak' ,
        'notable examples' : "Spock, T'Pol, Sarek",
        'image': '',
        'interestingFact': 'Practice an extreme form of emotional regulation that focuses on logic above all else, pioneered by a Vulcan named Surak' ,
        'notableExamples' : "Spock, T'Pol, Sarek",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/75/Vulcans-FirstContact.jpg'
    },
    "klingon" : {
        'homeworld': "Quo'nos",
        'distinguishing physical features':'Large stature, pronounced ridges on the forehead, stylized facial hair',
        'interesting fact': 'Highly skilled in weapons and battle. Their facial ridges were lost as the result of a virus in 2154, but were subsequently restored by 2269.' ,
        'notable examples' : "Worf, Kor, Kang",
        'image': '',
        'speciesName' : 'Klingons',
        'homeworld': "Qo'noS",
        'features':'Large stature, pronounced ridges on the forehead, stylized facial hair',
        'interestingFact': 'Highly skilled in weapons and battle. Their facial ridges were lost as the result of a virus in 2154, but were subsequently restored by 2269.' ,
        'notableExamples' : "Worf, Kor, Kang",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/74/Kruge.jpg'
    },
    'romulan' : {
        'homeworld': 29,
        'distinguishing physical features':'Shéyaa Bin Abraham-Joseph',
        'interesting fact': 'London, England' ,
        'speciesName' : 'Romulans',
        'homeworld': "Romulus",
        'features':'Pointed ears, upward-curving eyebrows,green tinge to the skin, diagonal smooth forehead ridges (sometimes)',
        'interestingFact': 'Share a common ancestory with Vulcans, though none of the emotional discipline. Romulus has a sister planet, Remus, on which the Remans are seen as lesser beings.' ,
        'notableExamples' : "Pardek, Tal'aura, Narissa",
        'image': 'https://static.wikia.nocookie.net/aliens/images/1/1d/Zzzd7.jpg'
    },
    'borg'  : {
        'homeworld': 29,
        'distinguishing physical features':'Shéyaa Bin Abraham-Joseph',
        'interesting fact': 'London, England' ,
        'speciesName' : '(The) Borg',
        'homeworld': 'unknown (Delta Quadrant)',
        'features':'pale skin, numerous interior and exterior biological modifications',
        'interestingFact': 'No single genetic lingeage, species propagates by assimilating individuals via nanotechnology, led by a hive mind guided by a single "queen" individual. DO NOT APPROACH unless under specific diplomatic orders from Starfleet Command.' ,
        'notableExamples' : "Borg Queen, Seven of Nine, Locutus",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/76/Borg.jpg'
    },
    'gorn' : {
        'homeworld': 29,
        'distinguishing physical features':'Shéyaa Bin Abraham-Joseph',
        'interesting fact': 'London, England' ,
        'speciesName' : 'Gorn',
        'homeworld': 'unknown (Alpha Quadrant)',
        'features':'scaly green skin, large, iridescent eyes, powerful build, sharp teeth',
        'interestingFact': 'Extremely militaristic and driven to conquer, but also possess advanced scientific knowledge allowing for superior bio-weapons.' ,
        'notableExamples' : "Gorn Captain",
        'image': 'https://static.wikia.nocookie.net/aliens/images/9/9b/Gorn.jpg'
    },
    'trill' :{
        'homeworld': 29,
        'distinguishing physical features':'Shéyaa Bin Abraham-Joseph',
        'interesting fact': 'London, England' ,
        'speciesName' : 'Trill',
        'homeworld': 'Trill',
        'features':'Outward appearance similar to humans, aside from distinct dark pigment marks running symmetrically down both sides of the face and body',
        'interestingFact': 'Some Trill are willin hosts to a long-lived invertibrate symbiote that merges with the host to create a distinct personality.' ,
        'notableExamples' : "Jadzia Dax, Ezri Dax, Curzon Dax",
        'image': 'https://static.wikia.nocookie.net/aliens/images/4/42/EzriDax.jpg'
    }

}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:alienName', (req,res) => {
   let alienName = req.params.alienName.toLowerCase()
   if (aliens[alienName]){
       res.json(aliens[alienName])
   }   else {res.json(aliens['human'])}  //Human or Humans?
})

app.listen(process.env.PORT || PORT, () => {
     console.log(`Server is running on port ${PORT}. Best catch it.`)
})