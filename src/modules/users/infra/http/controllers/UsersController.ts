import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    console.log('Passou1');

    const createUser = container.resolve(CreateUserService);

    console.log('Passou2');

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    console.log('Passou3');
    delete user.password;

    return response.json(user);
  }
}
