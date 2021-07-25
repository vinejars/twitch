import { User, db, Post } from './src/server/db/index'


const seed = async() =>{
    await db.sync({ force: true})

    //Users

const anna = await User.create({
    id: 'jfdaohof',
    firebaseID: null,
    email: 'annabanana@email.com',
    username: 'samwiseuporelse',
})

const quinn = await User.create({
    id: 'dfnaodshfla',
    firebaseID: null,
    email: 'radagastrapunzel@email.com',
    username: 'celebornthisway',
})

const em = await User.create({
    id: 'dioafhdao',
    firebaseID: null,
    email: 'skazzmatter@email.com',
    username: 'f00lofat00k',
})

db.close();
  console.log(`Even the smallest person can change the course of history... or seed a database`);

}

seed().catch((err) => {
  db.close();
  console.log(`
    Dammit:
    ${err.message}
    ${err.stack}
  `);
});

