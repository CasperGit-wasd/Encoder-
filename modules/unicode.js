/*
 Encoder v0.7
 Unicode Module

 Created by:
 Casper Huang

 Developed with AI assistance from ChatGPT (OpenAI)
*/


const UnicodeModule = {


    name:"Unicode",


    description:
    "Convert text into Unicode escape format",




    /*
    Example:

    Hello

    becomes:

    \u0048\u0065\u006c\u006c\u006f

    */

    encode(text){

        return [...text]

        .map(char => {

            return "\\u" +
            char.codePointAt(0)
            .toString(16)
            .padStart(4,"0");

        })

        .join("");

    },





    /*
    Decode Unicode escape text

    Example:

    \u0048\u0069

    becomes:

    Hi

    */


    decode(text){

        return text.replace(

            /\\u\{?([0-9a-fA-F]+)\}?/g,

            (_,code)=>{

                return String.fromCodePoint(
                    parseInt(code,16)
                );

            }

        );

    }



};


// Register automatically if engine exists

if(typeof engine !== "undefined"){

    engine.register(
        "unicode",
        UnicodeModule
    );

}
