/*
 Encoder v0.7
 Core Engine

 Created by:
 Casper Huang

 Developed with AI assistance from ChatGPT (OpenAI)
*/


class EncoderEngine {

    constructor(){

        this.modules = {};

    }


    /*
    Register a module

    Example:
    engine.register(
        "unicode",
        UnicodeModule
    )
    */

    register(name,module){

        this.modules[name]=module;

    }



    /*
    Run encoding pipeline

    Example:

    [
      "unicode",
      "base64",
      "invisible"
    ]

    */

    async encode(text,pipeline,options={}){

        let result=text;


        for(const step of pipeline){

            const module=
            this.modules[step];


            if(!module){

                throw new Error(
                "Module not found: "
                + step
                );

            }


            result =
            await module.encode(
                result,
                options
            );

        }


        return result;

    }




    /*
    Reverse pipeline

    invisible
    ↓
    base64
    ↓
    unicode

    */

    async decode(text,pipeline,options={}){

        let result=text;


        for(
            let i=pipeline.length-1;
            i>=0;
            i--
        ){

            const step=pipeline[i];


            const module=
            this.modules[step];


            if(!module){

                throw new Error(
                "Module not found: "
                + step
                );

            }


            if(module.decode){

                result =
                await module.decode(
                    result,
                    options
                );

            }

        }


        return result;

    }



    /*
    Get available modules
    */

    listModules(){

        return Object.keys(
            this.modules
        );

    }


}



// Global engine

const engine =
new EncoderEngine();
