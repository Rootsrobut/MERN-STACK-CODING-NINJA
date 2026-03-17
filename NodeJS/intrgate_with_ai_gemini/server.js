
import express from 'express';
import bodyParser from 'body-parser';
import { GoogleGenAI } from "@google/genai";



const app=express();
app.use(express.json());
app.use(bodyParser.json());

const ai = new GoogleGenAI({ apiKey: "" });

app.get('/api/content',async (req,res)=>{
     try{
       const response = await ai.models.generateContent({
         model: "gemini-2.0-flash",
         contents: req.body.question
       });
       res.send(response.text.json());
     }
     catch(err){
      console.log(err);
     }
})


app.listen(3000,()=>{
  console.log('server is Up and runing on port 3000');
})