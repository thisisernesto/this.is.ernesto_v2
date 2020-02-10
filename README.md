# this.is.ernesto - Personal Website and Portfolio of Ernesto Resende

This is the second iteraction of the website, designed in the end of 2019 to solve some of the problems I had with the previous version. It now no longer uses a background image in the hero section, and features an article section that will be up to date with the articles published in [dev.to](https://dev.to). By the end of the year, I plan on switching to Gatsby.js/GraphQL stack that will allow me to host the entire articles section on the website itself, along with massive performance enhancements provided by the way Gatsby structures the website.

You can see the Adobe XD file for the design specs [here](https://xd.adobe.com/view/a1a5072a-8dbd-40f1-7a3a-7b8d64039170-d794/). Note that not all specs from the original design were respected after the development stage.

## Running the development enviroment

You can clone or fork this repo for testing and development porpuses. Since it is built entirely on the basic HTML/(S)CSS/JavaScript stack, the only thing I'll need is the node-sass compiler for Sass. The package.json file is already configured to run the compiler script watching the right Sass files.

### Installation

To run the node-sass module you will need Node.js and npm:

For any system that uses Ubuntu mirrors, you can download the last stable version with:

```
sudo apt install nodejs
```

To run the sass compiler, on the project folder of the cloned repo:

```
npm run compile-sass
```

This project also uses the Animated on Scroll Library for scroll animations.

##Code Standarts
The project makes use of the Front-End Checklist provided by thedaviddias to make sure all deployed code respects web code standarts like W3C compliance, linters and good coding practices both for readability and performance.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.