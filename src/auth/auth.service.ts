import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { message: 'Je me suis inscrit' };
  }
  signin() {
    return { message: 'Je me suis connecté' };
  }
}
