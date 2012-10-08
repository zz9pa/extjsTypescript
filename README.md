extjsTypescript
===============

ext.js typescript definition generator code

This reads files generated from ext.js documentation tool 'jsduck' - using something like 

   jsduck-4.1.1.exe extjs-4.1.1/src \
         --builtin-classes \
         --images ext-4.1.1/docs/images \
         --warnings=-no_doc,-dup_member,-link_ambiguous \
         --external XMLHttpRequest \
         --ignore-global \
         --pretty-json \
         --export=full  \
         --output docs



This should create a 'docs' directory with a whole load of '.json' files..

