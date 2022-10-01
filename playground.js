// const seedpillData = () => _pillData.bulkCreate(_pillData);
    // module.exports = seedpillData;
    // console.log(_pillData);
    // const _pillData = [];
    //     // for (let i = 0; i < 10; i++) {
    //     //     _pillData.push
    //                 // ({
    //                 function getPillData (color, shape, imprint) {
    // console.log("step1");
    //                    var queryURL ="https://rximage.nlm.nih.gov/api/rximage/1/rxnav?&resolution=full&color="+color+"&shape="+shape+"&imprint="+imprint+"";
    //                 axios.get(queryURL)
    //                     .then(data => {
    //                         console.log("step2");
    //                         // list = data["nlmRxImages"];
    //                         console.log(data.data);
    //                         console.log("============================")
    //                         console.log("Pills Found: " + data["nlmRxImages"].length)
    //                     }) .catch(err => console.log(err));
    //                     }
    //         getPillData("blue", "circle", "3e455");
       //     // console.log("ID: " + list[1].id)
        // console.log("Image Location: " + list[1].imageUrl)
        // console.log("Manufacturer: " + list[1].labeler)
        // console.log("Pill Name: " + list[1].name)
        // });

        const { faker } = require('@faker-js/faker');
const _TYPES = ["Gel-Cap", "Pill", "Capsule", "Tablet", "Caplet"];
const _COLORS = ["Red", "Blue", "Green", "Orange", "White", "Yellow", "Purple", "Pink"];
const _pillData = [];
for (let i = 0; i < 10; i++) {
    _pillData.push
        ({
            type: faker.helpers.arrayElement(_TYPES),
            color: faker.helpers.arrayElement(_COLORS),
            imprint: faker.random.alphaNumeric(5),
            photoUrl: faker.image.food(),
            description: faker.commerce.productDescription(),
        });
    console.log(_pillData)
};

// list of paink relievers
tylenol
motrin
advil 
Aleve 
ibuprofen
aspirin
midol