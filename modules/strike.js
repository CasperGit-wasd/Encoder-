/*
 Encoder v0.7
 Strikethrough Text Module

 Created by:
 Casper Huang

 Developed with AI assistance from ChatGPT (OpenAI)
*/


const StrikeModule = {


    name:"Strikethrough",


    description:
    "Create different Unicode combining strike effects",




    styles:{


        single:"\u0336",


        double:"\u0333",


        slash:"\u0337",


        cross:"\u0338"


    },





    /*
    Encode

    options:

    {
       style:"single"
    }

    */


    encode(text,options={}){


        const style =
        options.style || "single";


        const mark =
        this.styles[style];



        if(!mark){

            return text;

        }



        return [...text]

        .map(char =>

            char + mark

        )

        .join("");

    },






    /*
    Remove all strike marks

    */


    decode(text){


        return text.replace(

            /[\u0332-\u0338]/g,

            ""

        );


    }



};





// Register module

if(typeof engine !== "undefined"){

    engine.register(
        "strike",
        StrikeModule
    );

}
