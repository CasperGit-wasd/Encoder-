/*
 Encoder v0.7
 Base64 Module

 Created by:
 Casper Huang

 Developed with AI assistance from ChatGPT (OpenAI)
*/


const Base64Module = {


    name:"Base64",


    description:
    "Encode and decode UTF-8 text using Base64",





    /*
    Text
    ↓
    Base64

    Supports:
    English
    Chinese
    Emoji
    Unicode
    */

    encode(text){

        const bytes =
        new TextEncoder()
        .encode(text);


        let binary="";


        for(const byte of bytes){

            binary +=
            String.fromCharCode(byte);

        }


        return btoa(binary);

    },






    /*
    Base64
    ↓
    Text
    */


    decode(text){

        const binary =
        atob(text);


        const bytes =
        new Uint8Array(
            binary.length
        );


        for(
            let i=0;
            i<binary.length;
            i++
        ){

            bytes[i]=
            binary.charCodeAt(i);

        }


        return new TextDecoder()
        .decode(bytes);

    }



};




// Register module

if(typeof engine !== "undefined"){

    engine.register(
        "base64",
        Base64Module
    );

}
