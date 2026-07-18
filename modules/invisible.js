/*
 Encoder v0.7
 Invisible Text Module

 Created by:
 Casper Huang

 Developed with AI assistance from ChatGPT (OpenAI)
*/


const InvisibleModule = {


    name:"Invisible Text",


    description:
    "Hide information using zero-width Unicode characters",




    /*
    Invisible encoding types

    zero width space       U+200B
    zero width nonjoiner   U+200C
    zero width joiner      U+200D
    word joiner            U+2060
    */


    characters:{


        "0":"\u200B",

        "1":"\u200C"


    },






    /*
    Convert binary representation
    into invisible characters

    Example:

    Hi

    ↓

    invisible data

    */


    encode(text,options={}){


        let binary="";


        for(const char of text){

            binary +=
            char.charCodeAt(0)
            .toString(2)
            .padStart(8,"0");

        }



        let result="";


        for(const bit of binary){


            result +=
            this.characters[bit];


        }



        return result;

    },








    /*
    Recover original text

    invisible characters
    ↓
    binary
    ↓
    text

    */


    decode(text){


        let binary="";


        for(const char of text){


            if(char === "\u200B"){

                binary+="0";

            }


            else if(char === "\u200C"){

                binary+="1";

            }


        }



        let result="";


        for(
            let i=0;
            i<binary.length;
            i+=8
        ){


            let byte =
            binary.substring(
                i,
                i+8
            );


            if(byte.length===8){

                result +=
                String.fromCharCode(
                    parseInt(byte,2)
                );

            }


        }


        return result;


    }



};




// Register module

if(typeof engine !== "undefined"){

    engine.register(
        "invisible",
        InvisibleModule
    );

}
