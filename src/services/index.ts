import { RegisterUserSchema, LoginUserScheme } from '../types';
import { data } from '../data';


export const registerUser = ( { name, email, password, repeatPassword }: RegisterUserSchema ): void | never => {

    if ( !name || !email || !password || !repeatPassword ) throw new Error( 'All fields are required' );

    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if ( !validEmail.test( email ) ) throw new Error( 'The email must be valid' );

    if ( password !== repeatPassword ) throw new Error( 'The passwords do not match' );

    if ( data.some( user => user.email === email ) ) throw new Error( 'That user already exist' );

    data.push({ name, email, password });
};


export const authUser = ( { email, password }: LoginUserScheme ): void | never => {

    if ( !email || !password ) throw new Error( 'All fields are required' );

    const user = data.find( user => user.email === email );

    if ( !user ) throw new Error( 'This user does not exist' );

    if ( user.password !== password ) throw new Error( 'The password is wrong' );
};
