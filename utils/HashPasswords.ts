import bcrypt from "bcrypt";

const saltRounds = 10;

export async function CreateHashPassword(password: string){
    try
    {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
    }
    catch
    {
        
    }
    
}