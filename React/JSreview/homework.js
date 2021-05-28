const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = [];

employersNames = [...employers.filter((employer) => employer.length > 0 && employer.length != 0)];
employersNames = employersNames.map((employerName) => employerName.toLowerCase().replace(/\s/g, ""));

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash: sponsorsCash, eu: euSponsors, rus: rusSponsors } = sponsors; //object destructuring used

function calcCash(own=0) {
    // let everyCash = Array.prototype.slice.call(arguments); // Turns to an array
    let everyCash = [...arguments]; // spread operator also turns to an array
    // finding sum of sponsor cash array([40000, 5000, 30400, 12000]) and adding it to own cash
    const total = everyCash[1].reduce((current, sum) => sum+current, own)  
    
    return total;
}

const money = calcCash(null, sponsorsCash);

function makeBusiness(owner, director='Victor', cash, emp) {
    // var sumSponsors = sponsors.eu.concat(sponsors.rus, 'unexpected sponsor');
    const sumSponsors = [...euSponsors, ...rusSponsors, "unexpected sponsor"];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}\nAnd we have a sponsors: `);
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with ${euSponsors[0]}. It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);