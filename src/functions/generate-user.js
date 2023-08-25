import { faker } from '@faker-js/faker';

export default function generateUser(opts) {
  return {
    userName: faker.internet.userName(),
    password: opts?.password ?? faker.internet.password({ length: 32, memorable: false, pattern: /[a-zA-Z0-9!@#$%^&*]/ }),
  }
}