# ember-tpk-component

This Blueprint helps you structure your translation files in the same way as your component tree.  
Small file, reusable and structured.  

## Documentation

The tpk-component has as argument by default the structure "POD" and the language of the translation file and by default to "fr"  

To create a component `ember g component foo`  
  ![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

This will create in addition to the template and integration test a file "fr-fr.yaml"  


## Translation Blueprint

If you need to create a translation file alone, the blueprint translation is there for that!  
Ditto "POD" and "fr" are its default arguments  
**The pod argument is required for translations, it won't work without**


Yaml file name is dynamic, you can pass in options another language  

`ember g component foo --language us`

Will give you as file "us-us.yaml"  
## Tpk-component Blueprint

This tpk-component functions exactly like the original blueprint component. **No more need to specify "--pod".**  
Need more information about options ?  
`ember g component --help`


Deleting a component will also delete its translation file.  
`ember d component foo`

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)  

## Intl
