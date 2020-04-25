import express from "express"

export class App{
    app=express();
    ports:any;
    constructor(){
         this.initialise();
    }

    private initialise(){
        this.ports = process.env.PORT || 3000;

        this.app.get('/',(req,res)=>{
          res.send('its working');
        });
    }

    listen(){
        this.app.listen(this.ports,()=>console.log('server run at port '+this.ports));
    }
}