extjsTypescript
===============

ext.js typescript definition generator code

This reads files generated from ext.js documentation tool 'jsduck' - using something like 

   jsduck-4.1.1.exe extjs-4.1.1/src 
         --builtin-classes 
         --images ext-4.1.1/docs/images 
         --warnings=-no_doc,-dup_member,-link_ambiguous 
         --external XMLHttpRequest 
         --ignore-global 
         --pretty-json 
         --export=full  
         --output jsondocs

This should create a 'jsondocs' directory with a whole load of '.json' files.
These json files can be converted to a single 'output.d.ts' by running "jsonTypescriptConverter.exe" and process the 'jsondocs' directory.

Note: 
- see '\jsondocs\ext-4.1.1a jsondocs.zip' for already generated json files
- see '\jsonTypescriptConverter\bin\Debug\jsonTypescriptConverter.exe' for a ready to use binary
- see 'jsondocs\ext-4.1.1a.d.ts' for an already generated typescript file (with some manual fixes because of duplicate properties/names etc)

