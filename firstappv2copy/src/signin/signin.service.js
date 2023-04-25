export class SignInService {
    checkLogin = (lg, pw) => {
        if (lg == 'John' && pw == '123')
            return true;
        else
            return false;
    }
}