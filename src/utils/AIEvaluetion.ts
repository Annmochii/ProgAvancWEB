import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default async function offensiveAnalisys(comment: string){

    const result = await groq.chat.completions.create({

        


    })
    

}