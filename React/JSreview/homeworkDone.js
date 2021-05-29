const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter((employer) => employer.length > 0 && employer.length != 0).map((employerName) => employerName.toLowerCase().replace(/\s/g, ""));

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors; //object destructuring used

const sumSponsors = [...eu, ...rus, "unexpected sponsor"];

const calcCash = (cash=0) => cash.reduce((current, sum) => current + sum);

const money = calcCash(cash);

const makeBusiness = ({cash, emp,owner='Sam', director='Victor'}) => {

    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors: ${sumSponsors}
Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness({cash: money, emp: employersNames});