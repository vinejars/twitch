import { User, db, Post, ProfileInfo } from "./server/db/index";

const seed = async () => {
  await db.sync({ force: true });

  //Users

  const anna = await User.create({
    id: "DU2qN1LKJ9buHAToMdCrT7lHUTq2",
    firebaseID: 'DU2qN1LKJ9buHAToMdCrT7lHUTq2',
    email: "annabanana@email.com",
    username: "samwiseuporelse",
  });

  const quinn = await User.create({
    id: "DOYAeIw0J0eSo8CsjS9rXENa0702",
    firebaseID: 'DOYAeIw0J0eSo8CsjS9rXENa0702',
    email: "radagastrapunzel@email.com",
    username: "celebornthisway",
  });

  const em = await User.create({
    id: "md4Lk9KeAFQhYYdmlEWDC8WdkY72",
    firebaseID: 'md4Lk9KeAFQhYYdmlEWDC8WdkY72',
    email: "skazzmatter@email.com",
    username: "f00lofat00k",
  });
  

  const postOne = await Post.create({
    id: 1,
    text: 'You step onto the road, and if you don’t keep your feet, there’s no knowing where you might be swept off to.',
    imageUrl: 'ibb.co/BgzfwVN',
    userId: 'md4Lk9KeAFQhYYdmlEWDC8WdkY72'
  })

    const postTwo = await Post.create({
    id: 2,
    text: 'The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.',
    imageUrl: 'ibb.co/xq8W5zp',
    userId: 'md4Lk9KeAFQhYYdmlEWDC8WdkY72'
  })

     const postThree = await Post.create({
    id: 3,
    text: 'Faithless is he that says farewell when the road darkens.',
    imageUrl: 'ibb.co/vV0MVVk',
    userId: 'md4Lk9KeAFQhYYdmlEWDC8WdkY72'
  })


    const postFour = await Post.create({
    id: 4,
    text: 'I saw a turtle!!!',
    imageUrl: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/33676443_1404857716327256_4632945397872984064_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=0debeb&_nc_ohc=B3-GpN1Nq5IAX-3pTRV&_nc_ht=scontent-lga3-1.xx&oh=1b346423581b95c78cc5c7b4ebe7e39e&oe=61281A48',
    userId: 'DOYAeIw0J0eSo8CsjS9rXENa0702'
  })

   const postFive = await Post.create({
    id: 5,
    text: `I didn't grab a pic but a giant bird stole my lunch`,
    imageUrl: null,
    userId: 'DOYAeIw0J0eSo8CsjS9rXENa0702'
  })

    const postSix = await Post.create({
    id: 6,
    text: `Just chillin`,
    imageUrl: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/33647288_10212022199775800_167076942233731072_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_ohc=3-KcFQiGNawAX9tUleH&_nc_ht=scontent-lga3-1.xx&oh=38a2b39f1465aa53f541bee45b84e01e&oe=6127AE35',
    userId: 'DOYAeIw0J0eSo8CsjS9rXENa0702'
  })

  const postSeven = await Post.create({
    id: 7,
    text: null,
    imageUrl: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/33686550_1404857242993970_7993611862220472320_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=0debeb&_nc_ohc=rBwRDCMJ1CkAX_QxYPK&_nc_ht=scontent-lga3-1.xx&oh=ccd9483a5d88071f34b747bbc97af8e3&oe=612563F3',
    userId: 'DU2qN1LKJ9buHAToMdCrT7lHUTq2'
  })

  const postEight = await Post.create({
    id: 8,
    text: null,
    imageUrl: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/33566795_1404857269660634_8480795766451863552_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=0debeb&_nc_ohc=RNDRUBJsm6QAX-WRSKe&_nc_ht=scontent-lga3-1.xx&oh=a0873c9c45a36c2a9be17fc300e648c1&oe=6127AF82',
    userId: 'DU2qN1LKJ9buHAToMdCrT7lHUTq2'
  })

    const postNine = await Post.create({
    id: 9,
    text: null,
    imageUrl: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/36923448_1449876108492083_6820135494538493952_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=UKAZspVkwxMAX-0SCC4&_nc_ht=scontent-lga3-1.xx&oh=cb4e4ddf0941e6a0b6ec38b83fac75a5&oe=6127F101',
    userId: 'DU2qN1LKJ9buHAToMdCrT7lHUTq2'
  })

  const emProfile = await ProfileInfo.create({
    id: 'md4Lk9KeAFQhYYdmlEWDC8WdkY72',
    aboutMe: 'massive nerd trying to get outside and away from the computer',
    ring: 'an inability to avoid GitHub for more than 12 hours at a time',
    destination: 'on a journey to reach the tallest peaks & see everything',
    userId: 'md4Lk9KeAFQhYYdmlEWDC8WdkY72'
  })

  const annaProfile = await ProfileInfo.create({
    id: 'DU2qN1LKJ9buHAToMdCrT7lHUTq2',
    aboutMe: 'gardener | mom | friend | lotr fan',
    ring: 'allergic to bees',
    destination: 'would like to enjoy other gardens besides my own this year',
    userId: 'DU2qN1LKJ9buHAToMdCrT7lHUTq2'
  })

  const quinnProfile = await ProfileInfo.create({
    id: 'DOYAeIw0J0eSo8CsjS9rXENa0702',
    aboutMe: 'I LOVE THE ZOO AND GIMLI',
    ring: 'TERRIFIED OF SPIDERS',
    destination: 'I WANT TO VISIT EVERY ZOO IN THE WORLD BUT ALSO AVOID THE SPIDERS',
    userId: 'DU2qN1LKJ9buHAToMdCrT7lHUTq2'
  }) 



  db.close();
  console.log(
    `Even the smallest person can change the course of history... or seed a database`
  );
};

seed().catch((err) => {
  db.close();
  console.log(`
    Dammit:
    ${err.message}
    ${err.stack}
  `);
});
