import faker from 'faker';

const users = (userCount) => {
  let array = [];
  for (let i = 0; i < userCount; i++) {
    array.push(faker.internet.email());
  }
  return array;
};

export default users;