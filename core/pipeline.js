/*
 Encoder v0.7
 Smart Pipeline System

 Created by:
 Casper Huang

 Developed with AI assistance from ChatGPT (OpenAI)
*/


const Pipeline = {


    /*
    Built-in smart recipes

    The user chooses a goal,
    not individual functions.
    */


    recipes:{


        // Secret text
        secret:[

            "unicode",
            "base64",
            "invisible"

        ],



        // Secure message
        secure:[

            "aes",
            "base64",
            "invisible"

        ],



        // Funny / decorated text
        style:[

            "font",
            "zalgo",
            "strike"

        ],



        // Tiny ant style
        tiny:[

            "ant"

        ],



        // Unicode hiding
        hidden:[

            "unicode",
            "invisible"

        ]

    },





    /*
    Get a recipe

    Example:

    Pipeline.get("style")

    returns:

    [
      "font",
      "zalgo",
      "strike"
    ]

    */

    get(name){

        return this.recipes[name] || [];

    },





    /*
    Add custom recipe

    Example:

    Pipeline.add(
      "mysecret",
      [
        "base64",
        "invisible"
      ]
    )

    */

    add(name,steps){

        this.recipes[name]=steps;

    },





    /*
    Remove recipe
    */

    remove(name){

        delete this.recipes[name];

    },





    /*
    List all recipes
    */

    list(){

        return Object.keys(
            this.recipes
        );

    }


};
