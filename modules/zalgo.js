/*
 Encoder v0.7
 Zalgo Text Module

 Created by:
 Casper Huang

 Developed with AI assistance from ChatGPT (OpenAI)
*/


const ZalgoModule = {


    name:"Zalgo",


    description:
    "Create corrupted Unicode combining text effects",




    // Unicode combining marks

    marks:{


        up:[

            "\u0300",
            "\u0301",
            "\u0302",
            "\u0303",
            "\u0304",
            "\u0306",
            "\u0307",
            "\u0308",
            "\u030A",
            "\u030B",
            "\u030C"

        ],



        down:[

            "\u0316",
            "\u0317",
            "\u0318",
            "\u0319",
            "\u031C",
            "\u031D",
            "\u031E",
            "\u031F",
            "\u0320"

        ],



        middle:[

            "\u0334",
            "\u0335",
            "\u0336",
            "\u0337",
            "\u0338"

        ]


    },






    /*
    Encode

    options:

    {
      intensity:5,
      up:true,
      down:true,
      middle:true
    }

    */


    encode(text,options={}){


        const intensity =
        options.intensity || 3;


        let result="";



        for(const char of text){


            result += char;



            for(let i=0;i<intensity;i++){


                let groups=[];


                if(options.up !== false){

                    groups.push(
                    this.marks.up
                    );

                }



                if(options.down){

                    groups.push(
                    this.marks.down
                    );

                }



                if(options.middle){

                    groups.push(
                    this.marks.middle
                    );

                }



                if(groups.length){


                    const group =
                    groups[
                    Math.floor(
                    Math.random()*groups.length
                    )
                    ];



                    result +=
                    group[
                    Math.floor(
                    Math.random()*group.length
                    )
                    ];

                }


            }


        }



        return result;


    },






    /*
    Remove combining marks

    Zalgo
    ↓
    Normal text

    */


    decode(text){


        return text.replace(

            /[\u0300-\u036f]/g,

            ""

        );


    }



};




// Register module

if(typeof engine !== "undefined"){

    engine.register(
        "zalgo",
        ZalgoModule
    );

}
