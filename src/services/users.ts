import api from './api';

export interface IUserDTO {
  id: string;
  name: string;
  username: string;
}

export function getUsers(): Promise<IUserDTO[]> {
  return new Promise<IUserDTO[]>((resolve, reject) => {
    api
      .get<IUserDTO[]>('/v1/users')
      .then((data) => {
        resolve(data.data);
      })
      .catch(reject);
  });
}
