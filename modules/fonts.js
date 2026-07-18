/*
 Encoder v0.7
 Ant Text Module

 Creates tiny/superscript style text.

 Created by:
 Casper Huang

 Developed with AI assistance from ChatGPT (OpenAI)
*/


const AntModule = {


    name:"Ant Text",


    description:
    "Convert normal text into tiny Unicode characters",




    map:{


        a:"ᵃ",
        b:"ᵇ",
        c:"ᶜ",
        d:"ᵈ",
        e:"ᵉ",
        f:"ᶠ",
        g:"ᵍ",
        h:"ʰ",
        i:"ᶦ",
        j:"ʲ",
        k:"ᵏ",
        l:"ˡ",
        m:"ᵐ",
        n:"ⁿ",
        o:"ᵒ",
        p:"ᵖ",
        q:"ᑫ",
        r:"ʳ",
        s:"ˢ",
        t:"ᵗ",
        u:"ᵘ",
        v:"ᵛ",
        w:"ʷ",
        x:"ˣ",
        y:"ʸ",
        z:"ᶻ",


        A:"ᴬ",
        B:"ᴮ",
        D:"ᴰ",
        E:"ᴱ",
        G:"ᴳ",
        H:"ᴴ",
        I:"ᴵ",
        J:"ᴶ",
        K:"ᴷ",
        L:"ᴸ",
        M:"ᴹ",
        N:"ᴺ",
        O:"ᴼ",
        P:"ᴾ",
        R:"ᴿ",
        T:"ᵀ",
        U:"ᵁ",
        V:"ⱽ",
        W:"ᵂ",


        0:"⁰",
        1:"¹",
        2:"²",
        3:"³",
        4:"⁴",
        5:"⁵",
        6:"⁶",
        7:"⁷",
        8:"⁸",
        9:"⁹"

    },






    encode(text){


        return [...text]

        .map(char=>{

            return this.map[char]
            || this.map[char.toLowerCase()]
            || char;

        })

        .join("");


    },






    /*
    Reverse conversion

    Note:
    Unicode superscript has
    duplicate characters,
    so decoding is best-effort.
    */


    decode(text){


        const reverse={};


        for(
            const key in this.map
        ){

            reverse[
            this.map[key]
            ]=key;

        }



        return [...text]

        .map(char=>{

            return reverse[char]
            || char;

        })

        .join("");


    }



};




// Register module

if(typeof engine !== "undefined"){

    engine.register(
        "ant",
        AntModule
    );

}
