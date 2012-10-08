// JSON C# Class Generator
// http://at-my-window.blogspot.com/?page=json-class-generator

using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace jsonTypescriptConverter
{

    internal class objectDescription
    {

        [JsonProperty("tagname")]
        public string Tagname { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("doc")]
        public string Doc { get; set; }

        [JsonProperty("extends")]
        public string Extends { get; set; }

        [JsonProperty("mixins")]
        public IList<object> Mixins { get; set; }

        [JsonProperty("alternateClassNames")]
        public IList<string> AlternateClassNames { get; set; }

        [JsonProperty("aliases")]
        public Aliases Aliases { get; set; }

        [JsonProperty("singleton")]
        public bool Singleton { get; set; }

        [JsonProperty("requires")]
        public IList<string> Requires { get; set; }

        [JsonProperty("uses")]
        public IList<object> Uses { get; set; }

        [JsonProperty("enum")]
        public object Enum { get; set; }

        [JsonProperty("override")]
        public object Override { get; set; }

        [JsonProperty("inheritable")]
        public object Inheritable { get; set; }

        [JsonProperty("inheritdoc")]
        public object Inheritdoc { get; set; }

        [JsonProperty("private")]
        public object Private { get; set; }

        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("code_type")]
        public string CodeType { get; set; }

        [JsonProperty("members")]
        public Members Members { get; set; }

        [JsonProperty("linenr")]
        public int Linenr { get; set; }



        [JsonProperty("statics")]
        public Statics Statics { get; set; }

        [JsonProperty("component")]
        public bool Component { get; set; }

        [JsonProperty("superclasses")]
        public IList<string> Superclasses { get; set; }

        [JsonProperty("subclasses")]
        public IList<string> Subclasses { get; set; }

        [JsonProperty("mixedInto")]
        public IList<object> MixedInto { get; set; }

        [JsonProperty("parentMixins")]
        public IList<string> ParentMixins { get; set; }
    }


    internal class Aliases
    {

        [JsonProperty("widget")]
        public IList<string> Widget { get; set; }
    }


    internal class Inheritdoc
    {

        [JsonProperty("tagname")]
        public string Tagname { get; set; }

        [JsonProperty("doc")]
        public object Doc { get; set; }
    }

    internal class Meta //1
    {

        [JsonProperty("author")]
        public IList<string> Author { get; set; }

        [JsonProperty("docauthor")]
        public IList<string> Docauthor { get; set; }
    }

    internal class Cfg
    {

        [JsonProperty("tagname")]
        public string Tagname { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("owner")]
        public string Owner { get; set; }

        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("doc")]
        public string Doc { get; set; }

        [JsonProperty("default")]
        public string Default { get; set; }

        [JsonProperty("properties")]
        public IList<object> Properties { get; set; }

        [JsonProperty("accessor")]
        public object Accessor { get; set; }

        [JsonProperty("evented")]
        public object Evented { get; set; }

        [JsonProperty("inheritable")]
        public object Inheritable { get; set; }

        [JsonProperty("inheritdoc")]
        public Inheritdoc Inheritdoc { get; set; }

        [JsonProperty("meta")]
        public Meta Meta { get; set; }

        [JsonProperty("private")]
        public bool? Private { get; set; }

        [JsonProperty("id")]
        public string Id { get; set; }



        [JsonProperty("shortDoc")]
        public string ShortDoc { get; set; }

        [JsonProperty("html_type")]
        public string HtmlType { get; set; }

        [JsonProperty("html_meta")]
        public HtmlMeta HtmlMeta { get; set; }

        [JsonProperty("overrides")]
        public IList<Override> Overrides { get; set; }

        [JsonProperty("autodetected")]
        public bool? Autodetected { get; set; }
    }

    internal class Override
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("owner")]
        public string Owner { get; set; }

        [JsonProperty("id")]
        public string Id { get; set; }
    }

    internal class Property
    {

        [JsonProperty("tagname")]
        public string Tagname { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("owner")]
        public string Owner { get; set; }

        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("doc")]
        public string Doc { get; set; }

        [JsonProperty("default")]
        public string Default { get; set; }

        [JsonProperty("properties")]
        public IList<Property> Properties { get; set; }

        [JsonProperty("inheritable")]
        public object Inheritable { get; set; }

        [JsonProperty("inheritdoc")]
        public Inheritdoc Inheritdoc { get; set; }

        [JsonProperty("meta")]
        public Meta Meta { get; set; }

        [JsonProperty("private")]
        public bool? Private { get; set; }

        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("shortDoc")]
        public string ShortDoc { get; set; }

        [JsonProperty("html_type")]
        public string HtmlType { get; set; }

        [JsonProperty("html_meta")]
        public HtmlMeta HtmlMeta { get; set; }

        [JsonProperty("optional")]
        public bool Optional { get; set; }

        [JsonProperty("autodetected")]
        public bool? Autodetected { get; set; }

        [JsonProperty("overrides")]
        public IList<Override> Overrides { get; set; }
    }

    internal class Members
    {

        [JsonProperty("cfg")]
        public IList<Cfg> Cfg { get; set; }

        [JsonProperty("property")]
        public IList<Property> Property { get; set; }

        [JsonProperty("method")]
        public IList<Method> Method { get; set; }

        [JsonProperty("event")]
        public IList<Event> Event { get; set; }

        [JsonProperty("css_var")]
        public IList<object> CssVar { get; set; }

        [JsonProperty("css_mixin")]
        public IList<object> CssMixin { get; set; }
    }

    internal class Event
    {

        [JsonProperty("tagname")]
        public string Tagname { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("owner")]
        public string Owner { get; set; }

        [JsonProperty("doc")]
        public string Doc { get; set; }

        [JsonProperty("params")]
        public IList<Param> Params { get; set; }

        [JsonProperty("inheritable")]
        public object Inheritable { get; set; }

        [JsonProperty("inheritdoc")]
        public Inheritdoc Inheritdoc { get; set; }

        [JsonProperty("meta")]
        public Meta Meta { get; set; }

        [JsonProperty("private")]
        public object Private { get; set; }

        [JsonProperty("id")]
        public string Id { get; set; }


        [JsonProperty("shortDoc")]
        public string ShortDoc { get; set; }

        [JsonProperty("html_meta")]
        public HtmlMeta HtmlMeta { get; set; }
    }

    internal class Statics
    {

        [JsonProperty("cfg")]
        public IList<object> Cfg { get; set; }

        [JsonProperty("property")]
        public IList<Property> Property { get; set; }

        [JsonProperty("method")]
        public IList<Method> Method { get; set; }

        [JsonProperty("event")]
        public IList<object> Event { get; set; }

        [JsonProperty("css_var")]
        public IList<object> CssVar { get; set; }

        [JsonProperty("css_mixin")]
        public IList<object> CssMixin { get; set; }
    }

    internal class Param
    {

        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("doc")]
        public string Doc { get; set; }

        [JsonProperty("optional")]
        public bool Optional { get; set; }

        [JsonProperty("default")]
        public string Default { get; set; }

        [JsonProperty("properties")]
        public IList<Property> Properties { get; set; }

        [JsonProperty("html_type")]
        public string HtmlType { get; set; }

        [JsonProperty("tagname")]
        public string Tagname { get; set; }
    }


    internal class Return
    {

        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("doc")]
        public string Doc { get; set; }

        [JsonProperty("html_type")]
        public string HtmlType { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("properties")]
        public IList<Property> Properties { get; set; }
    }

    internal class Method
    {

        [JsonProperty("tagname")]
        public string Tagname { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("owner")]
        public string Owner { get; set; }

        [JsonProperty("doc")]
        public string Doc { get; set; }

        [JsonProperty("params")]
        public IList<Param> Params { get; set; }

        [JsonProperty("return")]
        public Return Return { get; set; }

        [JsonProperty("throws")]
        public object Throws { get; set; }

        [JsonProperty("inheritable")]
        public object Inheritable { get; set; }

        [JsonProperty("inheritdoc")]
        public Inheritdoc Inheritdoc { get; set; }

        [JsonProperty("meta")]
        public Meta Meta { get; set; }

        [JsonProperty("private")]
        public bool? Private { get; set; }

        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("overrides")]
        public IList<Override> Overrides { get; set; }

        [JsonProperty("shortDoc")]
        public string ShortDoc { get; set; }

        [JsonProperty("html_meta")]
        public HtmlMeta HtmlMeta { get; set; }

        [JsonProperty("autodetected")]
        public bool? Autodetected { get; set; }
    }


    internal class HtmlMeta
    {

        [JsonProperty("deprecated")]
        public string Deprecated { get; set; }

        [JsonProperty("required")]
        public object Required { get; set; }

        [JsonProperty("protected")]
        public object Protected { get; set; }

        [JsonProperty("private")]
        public object Private { get; set; }


        [JsonProperty("readonly")]
        public object Readonly { get; set; }


        [JsonProperty("template")]
        public string Template { get; set; }

        [JsonProperty("chainable")]
        public object Chainable { get; set; }
        [JsonProperty("author")]
        public object Author { get; set; }

        [JsonProperty("docauthor")]
        public object Docauthor { get; set; }
        [JsonProperty("static")]
        public object Static { get; set; }

        [JsonProperty("markdown")]
        public object Markdown { get; set; }
    }

}
