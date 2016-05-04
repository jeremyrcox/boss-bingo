const wordList = [
  'omnichannel',
  'epicenter',
  'portfolio rationalization',
  'synergy',
  'goodness',
  'awfulness',
  'established patterns',
  'parity',
  'roadmap',
  'bucket of work',
  'paramount',
  'architectural runway',
  'flux capacitor',
  'ramping up intelligently',
  'differentiate / differentiated',
  'money where our mouth is',
  'tap into these capabilities',
  'rigidity',
  'myriad',
  'theme',
  'manifest',
  'stewards',
  'catalyst',
  'destiny',
  'speculate',
  'one company',
  'business capability / capabilities',
  'work out the kinks',
  'living and breating',
  'stovepipes',
  'kanban',
  'fishbowl',
  'collaboration',
  'big things are happening',
  'retro',
  'awesome',
  'flavors',
  'terribleness',
  'funded',
  'ramp',
  'major buckets',
  'Beach',
  'platform',
  'ear marked',
  'crisp',
  'imagine',
  'be better',
  'Are you picking up what I\'m putting down',
  'ALAN!',
  'put a bullet in it',
  'BOOM goes the dynamite',
  'call to action',
  'Ticked and Tied',
  'fiduciary',
  'I\'ll be darned',
  'desireous',
  'Metrosexual ',
  'draconian',
  'epiphany',
  'duckets',
  'North Star',
  'ish',
  'adhoc',
  'Optimize the whole',
  'Whole different bag of chips',
  'Herculean',
  'Incremental Value',
  'Can\'t scale crappy code',
  'winning',
  'Connectedness',
  'APS',
  'Target state all day',
  'magical',
  'mesmerized',
];

// Shuffle the array and return the first 25 words
function arrayShuffle(input) {
  const output = input;
  let i = input.length - 1;

  for (i; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const itemAtIndex = input[randomIndex];

    output[randomIndex] = input[i];
    output[i] = itemAtIndex;
  }

  return output;
}

export default function words() {
  const shuffledWords = arrayShuffle(wordList);
  return shuffledWords.slice(0, 25);
}
