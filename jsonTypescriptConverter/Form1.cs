using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml;
using Newtonsoft.Json;

namespace jsonTypescriptConverter
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void openToolStripMenuItem_Click(object sender, EventArgs e)
        {
            OpenFileDialog fd = new OpenFileDialog();
            fd.FileName = "Ext.toolbar.Paging.json";
            if (fd.ShowDialog() == DialogResult.OK)
            {
                    string json=System.IO.File.ReadAllText(fd.FileName);

                    JsonSerializerSettings jss=new JsonSerializerSettings();
                    jss.MissingMemberHandling=MissingMemberHandling.Ignore;

                    jss.Error=new EventHandler<Newtonsoft.Json.Serialization.ErrorEventArgs>(delegate(object o , Newtonsoft.Json.Serialization.ErrorEventArgs eea) {
                        Debug.WriteLine(eea.ErrorContext);
                    });

                    var xb = (objectDescription)JsonConvert.DeserializeObject(json, typeof(objectDescription), jss);


                StringBuilder sb = new StringBuilder();
                sb.Append("interface "+xb.Name.Replace(".","_")+" : ");       
                sb.Append(xb.Extends.Replace(".","_"));                    
                sb.Append(" {" + Environment.NewLine);

                sb.Append("// Cfg" + Environment.NewLine);
                foreach (var prop in xb.Members.Cfg)
                {
                    if (prop.Private == true) continue;
                    if (prop.Owner != xb.Name) continue;
                    sb.Append("   " + prop.Name + " : " + prop.HtmlType + ";" + Environment.NewLine);
                }

                sb.Append("// Properties" + Environment.NewLine);
                foreach (var prop in xb.Members.Property)
                {
                    if (prop.Private == true) continue;
                    if (prop.Owner != xb.Name) continue;
                    sb.Append("   "+prop.Name + " : " + getType(prop.HtmlType)+";"+Environment.NewLine);
                }

                sb.Append("// Events" + Environment.NewLine);
                foreach (var events in xb.Members.Event)
                {
                    if (events.Owner != xb.Name) continue;
                    sb.Append("   " + events.Name + "(");
                    if (events.Params != null)
                    {
                        for (int p = 0; p < events.Params.Count; p++)
                        {
                            if (p > 0) sb.Append(",");
                            sb.Append(getName(events.Params[p].Name) + ":" + getType(events.Params[p].HtmlType));
                        }
                    }
                    sb.Append(") : void");
                   
                    sb.Append(";"+ Environment.NewLine);
                }

                sb.Append("// Methods" + Environment.NewLine);
                foreach (var method in xb.Members.Method)
                {
                    if (method.Owner != xb.Name) continue;
                    if (method.Private == true) continue;

                    sb.Append("   "+method.Name+"(");
                    if (method.Params != null)
                    {
                        for (int p = 0; p < method.Params.Count; p++)
                        {
                            if (p > 0) sb.Append(",");
                            sb.Append(method.Params[p].Name+ ":"+ getType(method.Params[p].HtmlType));
                        }
                    }
                    sb.Append(") : ");
                    if (method.Return!=null) {
                        sb.Append(getType(method.Return.HtmlType));
                    } else {
                        sb.Append("void");
                    }
                    sb.Append(";" + Environment.NewLine);
                }
                sb.Append("}");

                Console.WriteLine(sb.ToString());
                Clipboard.SetText(sb.ToString());

                   

            }
        }

        private string getName(string p)
        {
           if (p=="this") return "_this";
           return p;
        }

        private string getType(string p)
        {
            if (p=="undefined") return "void";
            if (p.Contains("/")) return "object";

            return p;
        }
    

        private void dump(XmlAttribute x) {
        }
    }
}
