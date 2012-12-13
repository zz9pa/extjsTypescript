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
using System.IO;

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
                ConvertFile(fd.FileName);                  
            }
        }

        private string ConvertFile(string aFile)
        {
            string json = System.IO.File.ReadAllText(aFile);

            JsonSerializerSettings jss = new JsonSerializerSettings();
            jss.MissingMemberHandling = MissingMemberHandling.Ignore;

            jss.Error = new EventHandler<Newtonsoft.Json.Serialization.ErrorEventArgs>(delegate(object o, Newtonsoft.Json.Serialization.ErrorEventArgs eea)
            {
                Debug.WriteLine(eea.ErrorContext);
            });

            var xb = (objectDescription)JsonConvert.DeserializeObject(json, typeof(objectDescription), jss);

            if ((xb.Name == "Array") ||
               (xb.Name == "Boolean") ||
               (xb.Name == "Date") ||
               (xb.Name == "Function") ||
               (xb.Name == "Number") ||
               (xb.Name == "Object") ||
               (xb.Name == "RegExp") ||
               (xb.Name == "String"))
            { return "/* internal JS type: " + xb.Name + "*/"; }

            StringBuilder sb = new StringBuilder();
            var sinterface = "interface " + xb.Name.Replace(".", "_");
            if (xb.Extends != null)
            {
              sinterface += " extends " + xb.Extends.Replace(".", "_");
            }
            sb.Append(sinterface); 

            sb.Append(" {" + Environment.NewLine);
            sb.Append("// Cfg" + Environment.NewLine);
            foreach (var prop in xb.Members.Cfg)
            {
                if (prop.Private == true) continue;
                if (prop.Owner != xb.Name) continue;
                sb.Append("   " + getName(prop.Name) + " : " + getType(prop.HtmlType) + ";" + Environment.NewLine);
            }

            //todo: check if property not already exists

            sb.Append("// Properties" + Environment.NewLine);
            foreach (var prop in xb.Members.Property)
            {
                if (prop.Private == true) continue;
                if (prop.Owner != xb.Name) continue;
                sb.Append("   " + getName(prop.Name) + " : " + getType(prop.HtmlType) + ";" + Environment.NewLine);
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

                sb.Append(";" + Environment.NewLine);
            }

            sb.Append("// Methods" + Environment.NewLine);
            foreach (var method in xb.Members.Method)
            {
                if (method.Owner != xb.Name) continue;
                if (method.Private == true) continue;

                sb.Append("   " + method.Name + "(");
                if (method.Params != null)
                {
                    for (int p = 0; p < method.Params.Count; p++)
                    {
                        if (p > 0) sb.Append(",");
                        sb.Append(getName(method.Params[p].Name) + ":" + getType(method.Params[p].HtmlType));
                    }
                }
                sb.Append(") : ");
                if (method.Return != null)
                {
                    sb.Append(getType(method.Return.HtmlType));
                }
                else
                {
                    sb.Append("void");
                }
                sb.Append(";" + Environment.NewLine);
            }
            sb.Append("}");

            Console.WriteLine(sb.ToString());
            Clipboard.SetText(sb.ToString());
            return sb.ToString();

        }

        private string getName(string p)
        {
           if (p=="this") return "_this";
           if (p == "class") return "_class";
           if (p == "new") return "_new";
           return p.Replace('-', '_');
        }

        private string getType(string p)
        {
            if (p=="undefined") return "void";

            //String/String[] or String[]/Object
            if (p.Contains("/")) return "any" + " /*" + p + "*/";

            //Object...  becomes Object[] etc?
            if (p.EndsWith("...")) return p.Replace("...", "[]").Replace(".", "_");

            return p.Replace(".", "_");
        }
    

        private void dump(XmlAttribute x) {
        }

        private void processDirectoryToolStripMenuItem_Click(object sender, EventArgs e)
        {
            try
            {
                string startupPath = Application.StartupPath;
                using (FolderBrowserDialog dialog = new FolderBrowserDialog())
                {
                    dialog.Description = "Open a folder which contains the JSDuck JSON output";
                    dialog.ShowNewFolderButton = false;
                    //dialog.RootFolder = Environment.SpecialFolder.MyComputer;
                    //dialog.RootFolder = startupPath;
                    if (dialog.ShowDialog() == DialogResult.OK)
                    {
                        string folder = dialog.SelectedPath;
                        folder = Path.GetFullPath(folder);
                        Directory.CreateDirectory(folder + "\\typescript\\");

                        var files = Directory.GetFiles(folder, "*.json", SearchOption.TopDirectoryOnly);
                        progressBar1.Value = 0;
                        progressBar1.Maximum = files.Length;

                        var alloutput = new StringBuilder();

                        foreach (string fileName in files)
                        {
                            progressBar1.Value += 1;                           
                            lblFile.Text = fileName;
                            lblProgress.Text = string.Format("file {0} of {1}", progressBar1.Value, files.Length);
                            this.Update();

                            alloutput.Append( this.ConvertFile(fileName) );
                            alloutput.AppendLine("");
                            //   todo ref path
                            ///<reference path='c:\Users\4dotnet\Desktop\jsondocs\typescript\Ext.Base.d.ts' /> 
                            //var newfile = Path.GetDirectoryName(fileName) + "\\typescript\\" + Path.GetFileNameWithoutExtension(fileName) + ".d.ts";
                            //File.WriteAllText(newfile, output);
                        }
                        var newfile = folder + "\\typescript\\" + "output.d.ts";
                        File.WriteAllText(newfile, alloutput.ToString());

                        lblFile.Text = "Done!";
                    }
                }
                //using (OpenFileDialog dialog = new OpenFileDialog())
                //{
                //    dialog.Filter = "xml files (*.xml)|*.xml";
                //    dialog.Multiselect = false;
                //    dialog.InitialDirectory = ".";
                //    dialog.Title = "Select file (only in XML format)";
                //    if (dialog.ShowDialog() == DialogResult.OK)
                //    {
                //        SQLGenerator.GenerateSQLTransactions(Application.StartupPath + Settings.Default.xmlFile);
                //    }
                //}
            }
            catch (Exception exc)
            {
                MessageBox.Show("Import failed because " + exc.Message + " , please try again later.");
            }
        }

        private void btnProcessDirectory_Click(object sender, EventArgs e)
        {
            processDirectoryToolStripMenuItem_Click(null, null);
        }
    }
}
