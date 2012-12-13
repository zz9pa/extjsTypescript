/* internal JS type: Array*/
/* internal JS type: Boolean*/
/* internal JS type: Date*/

/* Missing documenation, manual created */
interface Ext_Element { }
interface Ext_core_Element { }
interface Ext_CompositeElement { }
interface Ext_Container { }
interface Ext_data_Record { }
interface Ext_slider_MultiSlider { }
interface Ext_ux_form_FileUploadField { }
interface Mixed { }

interface Ext_AbstractComponent extends Ext_Base {
// Cfg
   autoEl : any /*String/Object*/;
   autoLoad : any /*Ext.ComponentLoader/Object/String/Boolean*/;
   autoRender : any /*Boolean/String/HTMLElement/Ext.Element*/;
   autoShow : Boolean;
   baseCls : String;
   border : any /*Number/String/Boolean*/;
   childEls : Object[];
   cls : String;
   componentCls : String;
   componentLayout : any /*String/Object*/;
   contentEl : String;
   data : Object;
   disabled : Boolean;
   disabledCls : String;
   draggable : Boolean;
   floating : Boolean;
   frame : Boolean;
   height : Number;
   hidden : Boolean;
   hideMode : String;
   html : any /*String/Object*/;
   id : String;
   itemId : String;
   loader : any /*Ext.ComponentLoader/Object*/;
   margin : any /*Number/String*/;
   maxHeight : Number;
   maxWidth : Number;
   minHeight : Number;
   minWidth : Number;
   overCls : String;
   padding : any /*Number/String*/;
   plugins : any /*Object/Object[]*/;
   renderData : Object;
   renderSelectors : Object;
   renderTo : any /*String/HTMLElement/Ext.Element*/;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   shrinkWrap : any /*Boolean/Number*/;
   style : any /*String/Object*/;
   styleHtmlCls : String;
   styleHtmlContent : Boolean;
   tpl : any /*Ext.XTemplate/Ext.Template/String/String[]*/;
   tplWriteMode : String;
   ui : String;
   width : Number;
   xtype : String;
// Properties
   _isLayoutRoot : Boolean;
   //draggable : Boolean;
   frameSize : Object;
   isComponent : Boolean;
   maskOnDisable : Boolean;
   ownerCt : Ext_Container;
   rendered : Boolean;
// Events
   activate(_this:Ext_Component,eOpts:Object) : void;
   added(_this:Ext_Component,container:Ext_container_Container,pos:Number,eOpts:Object) : void;
   afterrender(_this:Ext_Component,eOpts:Object) : void;
   beforeactivate(_this:Ext_Component,eOpts:Object) : void;
   beforedeactivate(_this:Ext_Component,eOpts:Object) : void;
   beforedestroy(_this:Ext_Component,eOpts:Object) : void;
   beforehide(_this:Ext_Component,eOpts:Object) : void;
   beforerender(_this:Ext_Component,eOpts:Object) : void;
   beforeshow(_this:Ext_Component,eOpts:Object) : void;
   blur(_this:Ext_Component,The:Ext_EventObject,eOpts:Object) : void;
   boxready(_this:Ext_Component,width:Number,height:Number,eOpts:Object) : void;
   deactivate(_this:Ext_Component,eOpts:Object) : void;
   destroy(_this:Ext_Component,eOpts:Object) : void;
   disable(_this:Ext_Component,eOpts:Object) : void;
   enable(_this:Ext_Component,eOpts:Object) : void;
   focus(_this:Ext_Component,The:Ext_EventObject,eOpts:Object) : void;
   hide(_this:Ext_Component,eOpts:Object) : void;
   move(_this:Ext_Component,x:Number,y:Number,eOpts:Object) : void;
   removed(_this:Ext_Component,ownerCt:Ext_container_Container,eOpts:Object) : void;
   render(_this:Ext_Component,eOpts:Object) : void;
   resize(_this:Ext_Component,width:Number,height:Number,oldWidth:Number,oldHeight:Number,eOpts:Object) : void;
   show(_this:Ext_Component,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_AbstractComponent;
   addClass(cls:any /*String/String[]*/) : Ext_Component;
   addCls(cls:any /*String/String[]*/) : Ext_Component;
   addClsWithUI(classes:any /*String/String[]*/,skip:Object) : void;
   addListener(eventName:any /*String/Object*/,fn:Function,scope:Object,options:Object) : void;
   addPropertyToState(state:Object,propName:String,value:String) : Boolean;
   addUIClsToElement(ui:String) : void;
   afterComponentLayout(width:Number,height:Number,oldWidth:Number,oldHeight:Number) : void;
   afterSetPosition(x:Number,y:Number) : void;
   animate(config:Object) : Object;
   beforeComponentLayout(adjWidth:Number,adjHeight:Number) : void;
   beforeDestroy() : void;
   destroy() : void;
   disable(silent:Boolean) : void;
   doComponentLayout() : Ext_container_Container;
   enable(silent:Boolean) : void;
   forceComponentLayout() : void;
   getBubbleTarget() : Ext_container_Container;
   getEl() : Ext_dom_Element;
   getHeight() : Number;
   getId() : String;
   getItemId() : String;
   getLoader() : Ext_ComponentLoader;
   getPlugin(pluginId:String) : Ext_AbstractPlugin;
   getSize() : Object;
   getSizeModel(ownerCtSizeModel:Object) : Object;
   getState() : Object;
   getWidth() : Number;
   getXTypes() : String;
   hasCls(className:String) : Boolean;
   hasUICls(cls:String) : void;
   is(selector:String) : Boolean;
   isDescendantOf(container:Ext_Container) : Boolean;
   isDisabled() : Boolean;
   isDraggable() : Boolean;
   isDroppable() : Boolean;
   isFloating() : Boolean;
   isHidden() : Boolean;
   isLayoutRoot() : void;
   isLayoutSuspended() : Boolean;
   isVisible(deep:Boolean) : Boolean;
   isXType(xtype:String,shallow:Boolean) : Boolean;
   nextNode(selector:String) : Ext_Component;
   nextSibling(selector:String) : Ext_Component;
   onAdded(container:Ext_container_Container,pos:Number) : void;
   onDisable() : void;
   onEnable() : void;
   onPosition(x:Number,y:Number) : void;
   onRemoved(destroying:Boolean) : void;
   onResize() : void;
   previousNode(selector:String) : Ext_Component;
   previousSibling(selector:String) : Ext_Component;
   registerFloatingItem(cmp:Object) : void;
   removeCls(cls:any /*String/String[]*/) : Ext_Component;
   removeClsWithUI(cls:any /*String/String[]*/) : void;
   removeUIClsFromElement(ui:String) : void;
   setBorder(border:any /*String/Number*/) : void;
   setDisabled(disabled:Boolean) : void;
   setDocked(dock:Object,layoutParent:Boolean) : Ext_Component;
   setHeight(height:Number) : Ext_Component;
   setPosition(left:Number,top:Number,animate:any /*Boolean/Object*/) : Ext_Component;
   setSize(width:any /*Number/String/Object*/,height:any /*Number/String*/) : Ext_Component;
   setUI(ui:String) : void;
   setVisible(visible:Boolean) : Ext_Component;
   setWidth(width:Number) : Ext_Component;
   up(selector:String) : Ext_container_Container;
   update(htmlOrData:any /*String/Object*/,loadScripts:Boolean,callback:Function) : void;
   updateLayout(options:Object) : void;
}
interface Ext_AbstractManager extends Ext_Base {
// Cfg
// Properties
   all : Ext_util_HashMap;
// Events
// Methods
   constructor(config:Object) : Ext_AbstractManager;
   create(config:Object,defaultType:String) : Object;
   each(fn:Function,scope:Object) : void;
   get(id:String) : Object;
   getCount() : Number;
   isRegistered(type:String) : Boolean;
   onAvailable(id:String,fn:Function,scope:Object) : void;
   register(item:Object) : void;
   registerType(type:String,cls:Function) : void;
   unregister(item:Object) : void;
}
interface Ext_AbstractPlugin extends Ext_Base {
// Cfg
   pluginId : String;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_AbstractPlugin;
   destroy() : void;
   disable() : void;
   enable() : void;
   init(client:Ext_Component) : void;
}
interface Ext_Action extends Ext_Base {
// Cfg
   disabled : Boolean;
   handler : Function;
   hidden : Boolean;
   iconCls : String;
   itemId : String;
   scope : Object;
   text : String;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_Action;
   disable() : void;
   each(fn:Function,scope:Object) : void;
   enable() : void;
   execute(args:Object[]) : void;
   getIconCls() : void;
   getText() : void;
   hide() : void;
   isDisabled() : void;
   isHidden() : void;
   setDisabled(disabled:Boolean) : void;
   setHandler(fn:Function,scope:Object) : void;
   setHidden(hidden:Boolean) : void;
   setIconCls(cls:String) : void;
   setText(text:String) : void;
   show() : void;
}
interface Ext_Ajax extends Ext_data_Connection {
// Cfg
// Properties
   autoAbort : Boolean;
   defaultHeaders : Object;
   disableCaching : Boolean;
   extraParams : Object;
   method : String;
   timeout : Number;
   url : String;
// Events
// Methods
}
interface Ext_app_Application extends Ext_app_Controller {
// Cfg
   appFolder : String;
   autoCreateViewport : Boolean;
   controllers : String[];
   enableQuickTips : Boolean;
   name : String;
   paths : Object;
   scope : Object;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_app_Application;
   control(selectors:any /*String/Object*/,listeners:Object) : void;
   getController(name:String) : Ext_app_Controller;
   getModel(name:String) : Ext_data_Model;
   getStore(name:String) : Ext_data_Store;
   getView(name:String) : Ext_Base;
   launch(profile:String) : Boolean;
}
interface Ext_app_Controller extends Ext_Base {
// Cfg
   id : String;
   models : String[];
   refs : Object[];
   stores : String[];
   views : String[];
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_app_Controller;
   addRef(ref:Object) : void;
   control(selectors:any /*String/Object*/,listeners:Object) : void;
   getController(name:String) : Ext_app_Controller;
   getModel(name:String) : Ext_data_Model;
   getStore(name:String) : Ext_data_Store;
   getView(name:String) : Ext_Base;
   hasRef(ref:Object) : Boolean;
   init(application:Ext_app_Application) : void;
   onLaunch(application:Ext_app_Application) : void;
}
interface Ext_app_EventBus extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor() : Ext_app_EventBus;
}
interface Ext_Array {
// Cfg
// Properties
// Events
// Methods
   clean(array:Array) : Array;
   clone(array:Array) : Array;
   contains(array:Array,item:Object) : Boolean;
   difference(arrayA:Array,arrayB:Array) : Array;
   each(iterable:any /*Array/NodeList/Object*/,fn:Function,scope:Object,reverse:Boolean) : Boolean;
   erase(array:Array,index:Number,removeCount:Number) : Array;
   every(array:Array,fn:Function,scope:Object) : Boolean;
   filter(array:Array,fn:Function,scope:Object) : Array;
   flatten(array:Array) : Array;
   forEach(array:Array,fn:Function,scope:Object) : void;
   from(value:Object,newReference:Boolean) : Array;
   include(array:Array,item:Object) : void;
   indexOf(array:Array,item:Object,from:Number) : Number;
   insert(array:Array,index:Number,items:Array) : Array;
   intersect(array1:Array,array2:Array,etc:Array) : Array;
   map(array:Array,fn:Function,scope:Object) : Array;
   max(array:any /*Array/NodeList*/,comparisonFn:Function) : Object;
   mean(array:Array) : Number;
   merge(array1:Array,array2:Array,etc:Array) : Array;
   min(array:any /*Array/NodeList*/,comparisonFn:Function) : Object;
   pluck(array:any /*Array/NodeList*/,propertyName:String) : Array;
   push(target:Array,elements:Object[]) : Array;
   remove(array:Array,item:Object) : Array;
   replace(array:Array,index:Number,removeCount:Number,insert:Array) : Array;
   slice(array:Array,begin:Number,end:Number) : Array;
   some(array:Array,fn:Function,scope:Object) : Boolean;
   sort(array:Array,sortFn:Function) : Array;
   splice(array:Array,index:Number,removeCount:Number,elements:Object[]) : Array;
   sum(array:Array) : Number;
   toArray(iterable:Object,start:Number,end:Number) : Array;
   toMap(array:Object,getKey:Object,scope:Object) : void;
   union(array1:Array,array2:Array,etc:Array) : Array;
   unique(array:Array) : Array;
}
interface Ext_Base {
// Cfg
// Properties
   self : Ext_Class;
// Events
// Methods
   callOverridden(args:any /*Array/Arguments*/) : Object;
   callParent(args:any /*Array/Arguments*/) : Object;
   callSuper(args:any /*Array/Arguments*/) : Object;
   getInitialConfig(name:String) : any /*Object/Mixed*/;
   initConfig(config:Object) : Ext_Base;
   statics() : Ext_Class;
}
interface Ext_button_Button extends Ext_Component {
// Cfg
   allowDepress : Boolean;
   arrowAlign : String;
   arrowCls : String;
   baseCls : String;
   baseParams : Object;
   border : any /*Number/String/Boolean*/;
   clickEvent : String;
   cls : String;
   componentLayout : any /*String/Object*/;
   disabled : Boolean;
   enableToggle : Boolean;
   focusCls : String;
   frame : Boolean;
   handleMouseEvents : Boolean;
   handler : Function;
   hidden : Boolean;
   href : String;
   hrefTarget : String;
   icon : String;
   iconAlign : String;
   iconCls : String;
   menu : any /*Ext.menu.Menu/String/Object*/;
   menuActiveCls : String;
   menuAlign : String;
   minWidth : Number;
   overCls : String;
   overflowText : String;
   params : Object;
   pressed : Boolean;
   pressedCls : String;
   preventDefault : Boolean;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   repeat : any /*Boolean/Object*/;
   scale : String;
   scope : Object;
   shrinkWrap : any /*Boolean/Number*/;
   tabIndex : Number;
   text : String;
   textAlign : String;
   toggleGroup : String;
   toggleHandler : Function;
   tooltip : any /*String/Object*/;
   tooltipType : String;
   type : String;
// Properties
   //disabled : Boolean;
   //hidden : Boolean;
   //menu : Ext_menu_Menu;
   //pressed : Boolean;
   template : Ext_Template;
// Events
   click(_this:Ext_button_Button,e:Event,eOpts:Object) : void;
   menuhide(_this:Ext_button_Button,menu:Ext_menu_Menu,eOpts:Object) : void;
   menushow(_this:Ext_button_Button,menu:Ext_menu_Menu,eOpts:Object) : void;
   menutriggerout(_this:Ext_button_Button,menu:Ext_menu_Menu,e:Event,eOpts:Object) : void;
   menutriggerover(_this:Ext_button_Button,menu:Ext_menu_Menu,e:Event,eOpts:Object) : void;
   mouseout(_this:Ext_button_Button,e:Event,eOpts:Object) : void;
   mouseover(_this:Ext_button_Button,e:Event,eOpts:Object) : void;
   toggle(_this:Ext_button_Button,pressed:Boolean,eOpts:Object) : void;
// Methods
   beforeDestroy() : void;
   disable(silent:Boolean) : void;
   enable(silent:Boolean) : void;
   getTemplateArgs() : Object;
   getText() : String;
   hasVisibleMenu() : Boolean;
   hideMenu() : Ext_button_Button;
   initComponent() : void;
   onDestroy() : void;
   onDisable() : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   setHandler(handler:Function,scope:Object) : Ext_button_Button;
   setIcon(icon:String) : Ext_button_Button;
   setIconCls(cls:String) : Ext_button_Button;
   setParams(params:Object) : void;
   setScale(scale:String) : void;
   setText(text:String) : Ext_button_Button;
   setTextAlign(align:String) : void;
   setTooltip(tooltip:any /*String/Object*/) : Ext_button_Button;
   setUI(ui:String) : void;
   showMenu() : void;
   toggle(state:Boolean,suppressEvent:Boolean) : Ext_button_Button;
}
interface Ext_button_Cycle extends Ext_button_Split {
// Cfg
   changeHandler : Function;
   forceIcon : String;
   items : Object[];
   prependText : String;
   showText : Boolean;
// Properties
   menu : Ext_menu_Menu;
// Events
   change(_this:Ext_button_Cycle,item:Ext_menu_CheckItem,eOpts:Object) : void;
// Methods
   getActiveItem() : Ext_menu_CheckItem;
   initComponent() : void;
   setActiveItem(item:Ext_menu_CheckItem,suppressEvent:Boolean) : void;
   toggleSelected() : void;
}
interface Ext_button_Split extends Ext_button_Button {
// Cfg
   arrowCls : String;
   arrowHandler : Function;
   arrowTooltip : String;
// Properties
// Events
   arrowclick(_this:Ext_button_Split,e:Event,eOpts:Object) : void;
// Methods
   initComponent() : void;
   setArrowHandler(handler:Function,scope:Object) : void;
}
interface Ext_chart_axis_Abstract extends Ext_Base {
// Cfg
   fields : String[];
   label : Ext_chart_Label;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_chart_axis_Abstract;
}
interface Ext_chart_axis_Axis extends Ext_chart_axis_Abstract {
// Cfg
   adjustEnd : Boolean;
   dashSize : Number;
   grid : any /*Boolean/Object*/;
   length : Number;
   majorTickSteps : Number;
   minorTickSteps : Number;
   position : String;
   title : String;
   width : Number;
// Properties
// Events
// Methods
   drawAxis(init:Object) : void;
   drawGrid() : void;
   drawLabel() : void;
   setTitle(title:String) : void;
}
interface Ext_chart_axis_Category extends Ext_chart_axis_Axis {
// Cfg
// Properties
   calculateCategoryCount : Boolean;
   categoryNames : String;
// Events
// Methods
}
interface Ext_chart_axis_Gauge extends Ext_chart_axis_Abstract {
// Cfg
   margin : Number;
   maximum : Number;
   minimum : Number;
   steps : Number;
   title : String;
// Properties
// Events
// Methods
   setTitle(title:String) : void;
}
interface Ext_chart_axis_Numeric extends Ext_chart_axis_Axis {
// Cfg
   constrain : Boolean;
// Properties
   adjustMaximumByMajorUnit : Boolean;
   adjustMinimumByMajorUnit : Boolean;
   decimals : Number;
   maximum : Number;
   minimum : Number;
   position : String;
// Events
// Methods
   constructor(config:Object) : Ext_chart_axis_Numeric;
}
interface Ext_chart_axis_Radial extends Ext_chart_axis_Abstract {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_chart_axis_Time extends Ext_chart_axis_Numeric {
// Cfg
   constrain : Boolean;
   dateFormat : any /*String/Boolean*/;
   fromDate : Date;
   step : any /*Array/Boolean*/;
   toDate : Date;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_chart_axis_Time;
}
interface Ext_chart_Callout extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_chart_Callout;
}
interface Ext_chart_Chart extends Ext_draw_Component {
// Cfg
   //animate : any /*Boolean/Object*/;
   axes : Ext_chart_axis_Axis[];
   background : any /*Object/Boolean*/;
   enginePriority : String[];
   gradients : Object[];
   insetPadding : Number;
   legend : any /*Boolean/Object*/;
   series : Ext_chart_series_Series[];
   store : Ext_data_Store;
   theme : String;
// Properties
// Events
   beforerefresh(_this:Ext_chart_Chart,eOpts:Object) : void;
   refresh(_this:Ext_chart_Chart,eOpts:Object) : void;
// Methods
   bindStore(store:any /*Ext.data.AbstractStore/String*/,initial:Boolean) : void;
   getStoreListeners() : Object;
   initComponent() : void;
   onShow(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : void;
   redraw(resize:Boolean) : void;
   save(config:Object) : Object;
}
interface Ext_chart_Highlight extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_chart_Highlight;
   highlight(Default:any /*Boolean/Object*/) : void;
   highlightItem(item:Object) : void;
   unHighlightItem() : void;
}
interface Ext_chart_Label extends Ext_Base {
// Cfg
   label : Object;
// Properties
// Events
// Methods
}
interface Ext_chart_Legend extends Ext_Base {
// Cfg
   boxFill : String;
   boxStroke : String;
   boxStrokeWidth : String;
   boxZIndex : Number;
   itemSpacing : Number;
   labelColor : String;
   labelFont : String;
   padding : Number;
   position : String;
   update : Boolean;
   visible : Boolean;
   x : Number;
   y : Number;
// Properties
   isVertical : Boolean;
// Events
// Methods
   constructor(config:Object) : Ext_chart_Legend;
   toggle(Whether:Boolean) : void;
}
interface Ext_chart_LegendItem extends Ext_draw_CompositeSprite {
// Cfg
// Properties
// Events
// Methods
   constructor(allowFunctions:Boolean,keyFn:Function) : Ext_chart_LegendItem;
   createLegend(config:Object) : void;
   updatePosition(relativeTo:Object) : void;
}
interface Ext_chart_Mask extends Ext_Base {
// Cfg
   mask : any /*Boolean/String*/;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_chart_Mask;
}
interface Ext_chart_MaskLayer extends Ext_Component {
// Cfg
// Properties
// Events
// Methods
   constructor(config:any /*Ext.Element/String/Object*/) : Ext_chart_MaskLayer;
   initComponent() : void;
}
interface Ext_chart_Navigation extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor() : Ext_chart_Navigation;
   restoreZoom() : void;
   setZoom(zoomConfig:Object) : void;
}
interface Ext_chart_series_Area extends Ext_chart_series_Cartesian {
// Cfg
   style : Object;
   type : String;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_chart_series_Area;
   drawSeries() : void;
   getLegendColor(item:Object) : void;
   highlightItem(item:Object) : void;
   highlightSeries(item:Object) : void;
   unHighlightItem(item:Object) : void;
   unHighlightSeries(item:Object) : void;
}
interface Ext_chart_series_Bar extends Ext_chart_series_Cartesian {
// Cfg
   column : Boolean;
   groupGutter : Number;
   gutter : Number;
   style : Object;
   type : String;
   xPadding : Number;
   yPadding : Number;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_chart_series_Bar;
   drawSeries() : void;
   getLegendColor(index:Object) : void;
   highlightItem(item:Object) : void;
   unHighlightItem() : void;
}
interface Ext_chart_series_Cartesian extends Ext_chart_series_Series {
// Cfg
   axis : any /*String/String[]*/;
// Properties
   xField : String;
   yField : String;
// Events
// Methods
   eachYValue(record:Ext_data_Model,fn:Function,scope:Object) : void;
   getMinMaxXValues() : Array;
   getMinMaxYValues() : Array;
   getYValueAccessors() : Array;
   getYValueCount() : Number;
}
interface Ext_chart_series_Column extends Ext_chart_series_Bar {
// Cfg
   column : Boolean;
   type : String;
   xPadding : Number;
   yPadding : Number;
// Properties
// Events
// Methods
}
interface Ext_chart_series_Gauge extends Ext_chart_series_Series {
// Cfg
   angleField : String;
   donut : any /*Boolean/Number*/;
   highlightDuration : Number;
   needle : Boolean;
   showInLegend : Boolean;
   style : Object;
   type : String;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_chart_series_Gauge;
   drawSeries() : void;
   getLegendColor(item:Object) : void;
   setValue(value:Object) : void;
}
interface Ext_chart_series_Line extends Ext_chart_series_Cartesian {
// Cfg
   axis : String;
   fill : Boolean;
   markerConfig : Object;
   selectionTolerance : Number;
   showMarkers : Boolean;
   smooth : any /*Boolean/Number*/;
   style : Object;
   type : String;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_chart_series_Line;
   drawSeries() : void;
}
interface Ext_chart_series_Pie extends Ext_chart_series_Series {
// Cfg
   angleField : String;
   colorSet : Array;
   donut : any /*Boolean/Number*/;
   field : String;
   highlightDuration : Number;
   lengthField : String;
   showInLegend : Boolean;
   style : Object;
   type : String;
   xField : String;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_chart_series_Pie;
   drawSeries() : void;
   getLegendColor(item:Object) : void;
   highlightItem(item:Object) : void;
   unHighlightItem(item:Object) : void;
}
interface Ext_chart_series_Radar extends Ext_chart_series_Series {
// Cfg
   showInLegend : Boolean;
   style : Object;
   type : String;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_chart_series_Radar;
   drawSeries() : void;
}
interface Ext_chart_series_Scatter extends Ext_chart_series_Cartesian {
// Cfg
   axis : any /*String/Array*/;
   markerConfig : Object;
   style : Object;
   type : String;
// Properties
// Events
// Methods
   drawSeries() : void;
}
interface Ext_chart_series_Series extends Ext_Base {
// Cfg
   highlight : any /*Boolean/Object*/;
   listeners : Object;
   renderer : Function;
   shadowAttributes : Array;
   showInLegend : Boolean;
   tips : Object;
   title : String;
   type : String;
// Properties
// Events
   titlechange(title:String,index:Number,eOpts:Object) : void;
// Methods
   eachRecord(fn:Function,scope:Object) : void;
   getItemForPoint(x:Number,y:Number) : Object;
   getLegendColor(index:Object) : void;
   getRecordCount() : void;
   hideAll() : void;
   isExcluded(index:Object) : void;
   setTitle(index:Number,title:String) : void;
   showAll() : void;
}
interface Ext_chart_Shape extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_chart_theme_Base extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_chart_theme_Base;
}
interface Ext_chart_theme_Theme extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_chart_Tip extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_chart_Tip;
}
interface Ext_chart_TipSurface extends Ext_draw_Component {
// Cfg
// Properties
// Events
// Methods
   constructor(config:any /*Ext.Element/String/Object*/) : Ext_chart_TipSurface;
}
interface Ext_Class {
// Cfg
   alias : String[];
   alternateClassName : any /*String/String[]*/;
   config : Object;
   extend : String;
   inheritableStatics : Object;
   mixins : any /*String[]/Object*/;
   requires : String[];
   singleton : Boolean;
   statics : Object;
   uses : String[];
// Properties
// Events
// Methods
   constructor(data:Object,onCreated:Function) : Ext_Base;
}
interface Ext_ClassManager {
// Cfg
// Properties
// Events
// Methods
   addNameAliasMappings(aliases:Object) : Ext_ClassManager;
   addNameAlternateMappings(alternates:Object) : Ext_ClassManager;
   create(className:Object,data:Object,createdFn:Object) : void;
   get(name:String) : Ext_Class;
   getAliasesByName(name:String) : Array;
   getByAlias(alias:String) : Ext_Class;
   getClass(object:Object) : Ext_Class;
   getDisplayName(object:Object) : String;
   getName(object:any /*Ext.Class/Object*/) : String;
   getNameByAlias(alias:String) : String;
   getNameByAlternate(alternate:String) : String;
   getNamesByExpression(expression:String) : String[];
   instantiateByAlias(alias:String,args:Object[]) : Object;
   isCreated(className:String) : Boolean;
   set(name:String,value:Object) : Ext_ClassManager;
   setAlias(cls:any /*Ext.Class/String*/,alias:String) : Ext_ClassManager;
   setNamespace(name:String,value:Object) : void;
}
interface Ext_Component extends Ext_AbstractComponent {
// Cfg
   autoScroll : Boolean;
   columnWidth : any /*Number/String*/;
   //draggable : any /*Boolean/Object*/;
   floating : Boolean;
   formBind : Boolean;
   overflowX : String;
   overflowY : String;
   region : String;
   resizable : any /*Boolean/Object*/;
   resizeHandles : String;
   toFrontOnShow : Boolean;
// Properties
   floatParent : Ext_Container;
   zIndexManager : Ext_ZIndexManager;
   zIndexParent : Ext_Container;
// Events
// Methods
   constructor(config:any /*Ext.Element/String/Object*/) : Ext_Component;
   afterComponentLayout(width:Number,height:Number,oldWidth:Number,oldHeight:Number) : void;
   afterHide(callback:Function,scope:Object) : void;
   afterRender() : void;
   afterSetPosition(x:Number,y:Number) : void;
   afterShow(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : void;
   beforeShow() : void;
   bubble(fn:Function,scope:Object,args:Array) : Ext_Component;
   cancelFocus() : void;
   cloneConfig(overrides:Object) : Ext_Component;
   findParentBy(fn:Function) : Ext_container_Container;
   findParentByType(xtype:any /*String/Ext.Class*/) : Ext_container_Container;
   focus(selectText:Boolean,delay:any /*Boolean/Number*/) : Ext_Component;
   getBox(local:Boolean) : Object;
   getBubbleTarget() : Ext_container_Container;
   getEl() : Ext_dom_Element;
   getId() : String;
   getPosition(local:Boolean) : Number[];
   getXType() : String;
   hide(animateTarget:any /*String/Ext.Element/Ext.Component*/,callback:Function,scope:Object) : Ext_Component;
   initComponent() : void;
   onDestroy() : void;
   onHide(animateTarget:any /*String/Ext.Element/Ext.Component*/,callback:Function,scope:Object) : void;
   onResize() : void;
   onShow(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : void;
   onShowComplete(callback:Function,scope:Object) : void;
   scrollBy(deltaX:any /*Number/Number[]/Object*/,deltaY:any /*Number/Boolean/Object*/,animate:any /*Boolean/Object*/) : void;
   setAutoScroll(scroll:Boolean) : Ext_Component;
   setLoading(load:any /*Boolean/Object/String*/,targetEl:Boolean) : Ext_LoadMask;
   setOverflowXY(overflowX:String,overflowY:String) : Ext_Component;
   setPagePosition(x:Number,y:Number,animate:any /*Boolean/Object*/) : Ext_Component;
   show(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : Ext_Component;
   showAt(x:Number,y:Number,animate:any /*Boolean/Object*/) : void;
   updateBox(box:Object) : Ext_Component;
}
interface Ext_ComponentLoader extends Ext_ElementLoader {
// Cfg
   loadMask : any /*Boolean/Object*/;
   //renderer : any /*String/Function*/;
   scripts : Boolean;
   target : any /*Ext.Component/String*/;
// Properties
// Events
// Methods
   setTarget(target:any /*String/Ext.Component*/) : void;
}
interface Ext_ComponentManager extends Ext_AbstractManager {
// Cfg
// Properties
// Events
// Methods
   create(config:Object,defaultType:String) : Ext_Component;
   registerType(type:String,cls:Function) : void;
}
interface Ext_ComponentQuery extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   is(component:Ext_Component,selector:String) : Boolean;
   query(selector:String,root:Ext_container_Container) : Ext_Component[];
}
interface Ext_container_AbstractContainer extends Ext_Component {
// Cfg
   activeItem : any /*String/Number*/;
   autoDestroy : Boolean;
   baseCls : String;
   bubbleEvents : String[];
   defaultType : String;
   defaults : any /*Object/Function*/;
   detachOnRemove : Boolean;
   //items : any /*Object/Object[]*/;
   layout : any /*String/Object*/;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   suspendLayout : Boolean;
// Properties
   items : Ext_util_AbstractMixedCollection;
// Events
   add(_this:Ext_container_Container,component:Ext_Component,index:Number,eOpts:Object) : void;
   afterlayout(_this:Ext_container_Container,layout:Ext_layout_container_Container,eOpts:Object) : void;
   beforeadd(_this:Ext_container_Container,component:Ext_Component,index:Number,eOpts:Object) : void;
   beforeremove(_this:Ext_container_Container,component:Ext_Component,eOpts:Object) : void;
   remove(_this:Ext_container_Container,component:Ext_Component,eOpts:Object) : void;
// Methods
   add(component:any /*Ext.Component[]/Ext.Component...*/) : any /*Ext.Component[]/Ext.Component*/;
   afterLayout(layout:Ext_layout_container_Container) : void;
   beforeLayout() : void;
   cascade(fn:Function,scope:Object,args:Array) : Ext_Container;
   child(selector:String) : void;
   disable(silent:Boolean) : Ext_container_AbstractContainer;
   doLayout() : Ext_container_Container;
   down(selector:String) : void;
   getComponent(comp:any /*String/Number*/) : Ext_Component;
   getLayout() : Ext_layout_container_Container;
   insert(index:Number,component:Ext_Component) : Ext_Component;
   isAncestor(possibleDescendant:Ext_Component) : void;
   move(fromIdx:Number,toIdx:Number) : Ext_Component;
   onAdd(component:Ext_Component,position:Number) : void;
   onBeforeAdd(item:Ext_Component) : void;
   onRemove(component:Ext_Component,autoDestroy:Boolean) : void;
   query(selector:String) : Ext_Component[];
   queryBy(fn:Function,scope:Object) : Ext_Component[];
   queryById(id:String) : Ext_Component;
   remove(component:any /*Ext.Component/String*/,autoDestroy:Boolean) : Ext_Component;
   removeAll(autoDestroy:Boolean) : Ext_Component[];
}
interface Ext_container_ButtonGroup extends Ext_panel_Panel {
// Cfg
   baseCls : String;
   columns : Number;
   defaultType : String;
   frame : Boolean;
   frameHeader : Boolean;
   layout : any /*String/Object*/;
   titleAlign : String;
// Properties
// Events
// Methods
   initComponent() : void;
   onBeforeAdd(item:Ext_Component) : void;
}
interface Ext_container_Container extends Ext_container_AbstractContainer {
// Cfg
   anchorSize : any /*Number/Object*/;
// Properties
// Events
// Methods
   afterHide(callback:Function,scope:Object) : void;
   afterShow(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : void;
   getChildByElement(el:any /*Ext.Element/HTMLElement/String*/,deep:Boolean) : Ext_Component;
   onAdded(container:Ext_container_Container,pos:Number) : void;
}
interface Ext_container_DockingContainer extends Ext_Base {
// Cfg
   defaultDockWeights : Object;
// Properties
// Events
// Methods
   addDocked(component:any /*Object/Object[]*/,pos:Number) : Ext_Component[];
   getDockedComponent(comp:any /*String/Number*/) : Ext_Component;
   getDockedItems(selector:String,beforeBody:Boolean) : Ext_Component[];
   insertDocked(pos:Number,component:any /*Object/Object[]*/) : void;
   onDockedAdd(component:Ext_Component) : void;
   onDockedRemove(component:Ext_Component) : void;
   removeDocked(item:Ext_Component,autoDestroy:Boolean) : void;
}
interface Ext_container_Viewport extends Ext_container_Container {
// Cfg
// Properties
   isViewport : Boolean;
// Events
// Methods
   initComponent() : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
}
interface Ext_data_AbstractStore extends Ext_Base {
// Cfg
   autoLoad : any /*Boolean/Object*/;
   autoSync : Boolean;
   batchUpdateMode : String;
   fields : Object[];
   filterOnLoad : Boolean;
   //filters : any /*Object[]/Function[]*/;
   model : String;
   proxy : any /*String/Ext.data.proxy.Proxy/Object*/;
   remoteFilter : Boolean;
   remoteSort : Boolean;
   sortOnLoad : Boolean;
   storeId : String;
// Properties
   defaultProxyType : String;
   filters : Ext_util_MixedCollection;
   isDestroyed : Boolean;
   isStore : Boolean;
   removed : Ext_data_Model[];
// Events
   add(store:Ext_data_Store,records:Ext_data_Model[],index:Number,eOpts:Object) : void;
   beforeload(store:Ext_data_Store,operation:Ext_data_Operation,eOpts:Object) : void;
   beforesync(options:Object,eOpts:Object) : void;
   clear(_this:Ext_data_Store,eOpts:Object) : void;
   datachanged(_this:Ext_data_Store,eOpts:Object) : void;
   load(_this:Ext_data_Store,records:Ext_data_Model[],successful:Boolean,eOpts:Object) : void;
   metachange(_this:Ext_data_Store,meta:Object,eOpts:Object) : void;
   refresh(_this:Ext_data_Store,eOpts:Object) : void;
   remove(store:Ext_data_Store,record:Ext_data_Model,index:Number,eOpts:Object) : void;
   update(_this:Ext_data_Store,record:Ext_data_Model,operation:String,modifiedFieldNames:String[],eOpts:Object) : void;
   write(store:Ext_data_Store,operation:Ext_data_Operation,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_data_AbstractStore;
   getModifiedRecords() : Ext_data_Model[];
   getNewRecords() : Ext_data_Model[];
   getProxy() : Ext_data_proxy_Proxy;
   getRemovedRecords() : Ext_data_Model[];
   getUpdatedRecords() : Ext_data_Model[];
   isLoading() : Boolean;
   load(options:Object) : Ext_data_Store;
   reload(options:Object) : void;
   removeAll() : void;
   resumeAutoSync() : void;
   save() : void;
   setProxy(proxy:any /*String/Object/Ext.data.proxy.Proxy*/) : Ext_data_proxy_Proxy;
   suspendAutoSync() : void;
   sync(options:Object) : Ext_data_Store;
}
interface Ext_data_ArrayStore extends Ext_data_Store {
// Cfg
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_data_ArrayStore;
   loadData(data:any /*Ext.data.Model[]/Object[]*/,append:Boolean) : void;
}
interface Ext_data_association_Association extends Ext_Base {
// Cfg
   associatedModel : String;
   associationKey : String;
   model : String;
   ownerModel : String;
   primaryKey : String;
   reader : Ext_data_reader_Reader;
// Properties
   associatedName : String;
   ownerName : String;
// Events
// Methods
   constructor(config:Object) : Ext_data_association_Association;
   getReader() : Ext_data_reader_Reader;
}
interface Ext_data_association_BelongsTo extends Ext_data_association_Association {
// Cfg
   foreignKey : String;
   getterName : String;
   setterName : String;
   type : String;
// Properties
// Events
// Methods
}
interface Ext_data_association_HasMany extends Ext_data_association_Association {
// Cfg
   autoLoad : Boolean;
   filterProperty : String;
   foreignKey : String;
   name : String;
   storeConfig : Object;
   type : String;
// Properties
// Events
// Methods
}
interface Ext_data_association_HasOne extends Ext_data_association_Association {
// Cfg
   foreignKey : String;
   getterName : String;
   setterName : String;
   type : String;
// Properties
// Events
// Methods
}
interface Ext_data_Batch extends Ext_Base {
// Cfg
   autoStart : Boolean;
   pauseOnException : Boolean;
// Properties
   current : Number;
   exceptions : Ext_data_Operation[];
   hasException : Boolean;
   isComplete : Boolean;
   isRunning : Boolean;
   operations : Ext_data_Operation[];
   total : Number;
// Events
   complete(batch:Ext_data_Batch,operation:Object,eOpts:Object) : void;
   exception(batch:Ext_data_Batch,operation:Object,eOpts:Object) : void;
   operationcomplete(batch:Ext_data_Batch,operation:Object,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_data_Batch;
   add(operation:Object) : Ext_data_Batch;
   pause() : Ext_data_Batch;
   retry() : Ext_data_Batch;
   runOperation(index:Number) : Ext_data_Batch;
   start(index:Object) : Ext_data_Batch;
}
interface Ext_data_BufferStore extends Ext_data_Store {
// Cfg
   filterOnLoad : Boolean;
   sortOnLoad : Boolean;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_data_BufferStore;
}
interface Ext_data_Connection extends Ext_Base {
// Cfg
   autoAbort : Boolean;
   cors : Boolean;
   defaultHeaders : Object;
   disableCaching : Boolean;
   disableCachingParam : String;
   extraParams : Object;
   method : String;
   timeout : Number;
   withCredentials : Boolean;
// Properties
// Events
   beforerequest(conn:Ext_data_Connection,options:Object,eOpts:Object) : void;
   requestcomplete(conn:Ext_data_Connection,response:Object,options:Object,eOpts:Object) : void;
   requestexception(conn:Ext_data_Connection,response:Object,options:Object,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_data_Connection;
   abort(request:Object) : void;
   abortAll() : void;
   isLoading(request:Object) : Boolean;
   parseStatus(status:Number) : Object;
   request(options:Object) : Object;
   setOptions(options:Object,scope:Object) : Object;
   upload(form:any /*String/HTMLElement/Ext.Element*/,url:String,params:String,options:Object) : void;
}
interface Ext_data_DirectStore extends Ext_data_Store {
// Cfg
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_data_DirectStore;
}
interface Ext_data_Errors extends Ext_util_MixedCollection {
// Cfg
// Properties
// Events
// Methods
   getByField(fieldName:String) : Object[];
   isValid() : Boolean;
}
interface Ext_data_Field extends Ext_Base {
// Cfg
   convert : Function;
   dateFormat : String;
   defaultValue : Object;
   mapping : any /*String/Number*/;
   name : String;
   persist : Boolean;
   serialize : Function;
   sortDir : String;
   sortType : Function;
   type : any /*String/Object*/;
   useNull : Boolean;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_data_Field;
}
interface Ext_data_IdGenerator extends Ext_Base {
// Cfg
   id : String;
// Properties
   isGenerator : Boolean;
// Events
// Methods
   constructor(config:Object) : Ext_data_IdGenerator;
   generate() : String;
}
interface Ext_data_JsonP extends Ext_Base {
// Cfg
// Properties
   callbackKey : String;
   disableCaching : Boolean;
   disableCachingParam : String;
   timeout : Number;
// Events
// Methods
   abort(request:any /*Object/String*/) : void;
   request(options:Object) : Object;
}
interface Ext_data_JsonPStore extends Ext_data_Store {
// Cfg
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_data_JsonPStore;
}
interface Ext_data_JsonStore extends Ext_data_Store {
// Cfg
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_data_JsonStore;
}
interface Ext_data_Model extends Ext_Base {
// Cfg
   associations : Object[];
   belongsTo : any /*String/Object/String[]/Object[]*/;
   clientIdProperty : String;
   defaultProxyType : String;
   //fields : any /*Object[]/String[]*/;
   hasMany : any /*String/Object/String[]/Object[]*/;
   idProperty : String;
   idgen : any /*String/Object*/;
   persistenceProperty : String;
   proxy : any /*String/Object/Ext.data.proxy.Proxy*/;
   validations : Object[];
// Properties
   dirty : Boolean;
   editing : Boolean;
   fields : Ext_util_MixedCollection;
   isModel : Boolean;
   modified : Object;
   phantom : Boolean;
   raw : Object;
   store : Ext_data_Store;
   stores : Ext_data_Store[];
// Events
   idchanged(_this:Ext_data_Model,oldId:any /*Number/String*/,newId:any /*Number/String*/,eOpts:Object) : void;
// Methods
   constructor(data:Object) : Ext_data_Model;
   beginEdit() : void;
   cancelEdit() : void;
   commit(silent:Boolean) : void;
   copy(id:String) : Ext_data_Model;
   destroy(options:Object) : Ext_data_Model;
   endEdit(silent:Boolean,modifiedFieldNames:String[]) : void;
   get(fieldName:String) : Object;
   getAssociatedData() : Object;
   getChanges() : Object;
   getData(includeAssociated:Boolean) : Object;
   getId() : any /*Number/String*/;
   getProxy() : Ext_data_proxy_Proxy;
   isModified(fieldName:String) : Boolean;
   isValid() : Boolean;
   join(store:Ext_data_Store) : void;
   reject(silent:Boolean) : void;
   save(options:Object) : Ext_data_Model;
   set(fieldName:any /*String/Object*/,newValue:Object) : String[];
   setDirty() : void;
   setId(id:any /*Number/String*/) : void;
   setProxy(proxy:any /*String/Object/Ext.data.proxy.Proxy*/) : Ext_data_proxy_Proxy;
   unjoin(store:Ext_data_Store) : void;
   validate() : Ext_data_Errors;
}
interface Ext_data_NodeInterface extends Ext_Base {
// Cfg
   allowDrag : Boolean;
   allowDrop : Boolean;
   checked : Boolean;
   children : Ext_data_NodeInterface[];
   cls : String;
   depth : Number;
   expandable : Boolean;
   expanded : Boolean;
   href : String;
   hrefTarget : String;
   icon : String;
   iconCls : String;
   index : Number;
   //isFirst : Boolean;
   //isLast : Boolean;
   leaf : Boolean;
   loaded : Boolean;
   loading : Boolean;
   parentId : String;
   qtip : String;
   qtitle : String;
   root : Boolean;
   text : String;
// Properties
   childNodes : Object;
   firstChild : Object;
   isNode : Boolean;
   lastChild : Object;
   nextSibling : Object;
   parentNode : Object;
   previousSibling : Object;
// Events
   append(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,index:Number,eOpts:Object) : void;
   beforeappend(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,eOpts:Object) : void;
   beforecollapse(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   beforeexpand(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   beforeinsert(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,refNode:Ext_data_NodeInterface,eOpts:Object) : void;
   beforemove(_this:Ext_data_NodeInterface,oldParent:Ext_data_NodeInterface,newParent:Ext_data_NodeInterface,index:Number,eOpts:Object) : void;
   beforeremove(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,isMove:Boolean,eOpts:Object) : void;
   collapse(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   expand(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   insert(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,refNode:Ext_data_NodeInterface,eOpts:Object) : void;
   move(_this:Ext_data_NodeInterface,oldParent:Ext_data_NodeInterface,newParent:Ext_data_NodeInterface,index:Number,eOpts:Object) : void;
   remove(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,isMove:Boolean,eOpts:Object) : void;
   sort(_this:Ext_data_NodeInterface,childNodes:Ext_data_NodeInterface[],eOpts:Object) : void;
// Methods
   appendChild(node:any /*Ext.data.NodeInterface/Ext.data.NodeInterface[]*/) : Ext_data_NodeInterface;
   bubble(fn:Function,scope:Object,args:Array) : void;
   cascadeBy(fn:Function,scope:Object,args:Array) : void;
   collapse(recursive:Boolean,callback:Function,scope:Object) : void;
   collapseChildren(recursive:Function,callback:Function,scope:Object) : void;
   contains(node:Ext_data_NodeInterface) : Boolean;
   copy(id:String,deep:Boolean) : Ext_data_NodeInterface;
   createNode(node:Object) : Ext_data_NodeInterface;
   destroy(silent:Object) : void;
   eachChild(fn:Function,scope:Object,args:Array) : void;
   expand(recursive:Boolean,callback:Function,scope:Object) : void;
   expandChildren(recursive:Boolean,callback:Function,scope:Object) : void;
   findChild(attribute:String,value:Object,deep:Boolean) : Ext_data_NodeInterface;
   findChildBy(fn:Function,scope:Object,deep:Boolean) : Ext_data_NodeInterface;
   getChildAt(index:Number) : Ext_data_NodeInterface;
   getDepth() : Number;
   getPath(field:String,separator:String) : String;
   hasChildNodes() : Boolean;
   indexOf(node:Ext_data_NodeInterface) : Number;
   indexOfId(id:String) : Number;
   insertBefore(node:Ext_data_NodeInterface,refNode:Ext_data_NodeInterface) : Ext_data_NodeInterface;
   insertChild(index:Number,node:Ext_data_NodeInterface) : Ext_data_NodeInterface;
   isAncestor(node:Ext_data_NodeInterface) : Boolean;
   isExpandable() : Boolean;
   isExpanded() : Boolean;
   isFirst() : Boolean;
   isLast() : Boolean;
   isLeaf() : Boolean;
   isLoaded() : Boolean;
   isLoading() : Boolean;
   isRoot() : Boolean;
   isVisible() : Boolean;
   remove(destroy:Boolean) : Ext_data_NodeInterface;
   removeAll(destroy:Boolean) : Ext_data_NodeInterface;
   removeChild(node:Ext_data_NodeInterface,destroy:Boolean) : Ext_data_NodeInterface;
   replaceChild(newChild:Ext_data_NodeInterface,oldChild:Ext_data_NodeInterface) : Ext_data_NodeInterface;
   sort(fn:Function,recursive:Boolean,suppressEvent:Boolean) : void;
   updateInfo(commit:Object) : Boolean;
}
interface Ext_data_NodeStore extends Ext_data_Store {
// Cfg
   node : Ext_data_Model;
   recursive : Boolean;
   rootVisible : Boolean;
   treeStore : Ext_data_TreeStore;
// Properties
// Events
// Methods
}
interface Ext_data_Operation extends Ext_Base {
// Cfg
   action : String;
   batch : Ext_data_Batch;
   callback : Function;
   filters : Ext_util_Filter[];
   groupers : Ext_util_Grouper[];
   limit : Number;
   params : Object;
   scope : Object;
   sorters : Ext_util_Sorter[];
   start : Number;
   synchronous : Boolean;
// Properties
   actionCommitRecordsRe : RegExp;
   actionSkipSyncRe : RegExp;
// Events
// Methods
   constructor(config:Object) : Ext_data_Operation;
   allowWrite() : Boolean;
   commitRecords(serverRecords:Ext_data_Model[]) : void;
   getError() : any /*String/Object*/;
   getRecords() : Ext_data_Model[];
   getResultSet() : Ext_data_ResultSet;
   hasException() : Boolean;
   isComplete() : Boolean;
   isRunning() : Boolean;
   isStarted() : Boolean;
   setCompleted() : void;
   setException(error:any /*String/Object*/) : void;
   setStarted() : void;
   setSuccessful() : void;
   wasSuccessful() : Boolean;
}
interface Ext_data_proxy_Ajax extends Ext_data_proxy_Server {
// Cfg
   headers : Object;
// Properties
   actionMethods : Object;
// Events
// Methods
   constructor(config:Object) : Ext_data_proxy_Ajax;
   getMethod(request:Ext_data_Request) : String;
}
interface Ext_data_proxy_Client extends Ext_data_proxy_Proxy {
// Cfg
// Properties
   isSynchronous : Boolean;
// Events
// Methods
   clear() : void;
}
interface Ext_data_proxy_Direct extends Ext_data_proxy_Server {
// Cfg
   api : Object;
   directFn : any /*Function/String*/;
   extraParams : Object;
   paramOrder : any /*String/String[]*/;
   paramsAsHash : Boolean;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_data_proxy_Direct;
   buildUrl(request:Ext_data_Request) : String;
   doRequest(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
}
interface Ext_data_proxy_JsonP extends Ext_data_proxy_Server {
// Cfg
   autoAppendParams : Boolean;
   callbackKey : String;
   recordParam : String;
// Properties
// Events
   exception(_this:Ext_data_proxy_Proxy,request:Ext_data_Request,operation:Ext_data_Operation,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_data_proxy_JsonP;
   abort() : void;
   buildUrl(request:Ext_data_Request) : String;
   destroy(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
   encodeRecords(records:Ext_data_Model[]) : String;
}
interface Ext_data_proxy_LocalStorage extends Ext_data_proxy_WebStorage {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_data_proxy_Memory extends Ext_data_proxy_Client {
// Cfg
   data : Object;
// Properties
// Events
// Methods
   clear() : void;
   create(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
   destroy(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
   read(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
   update(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
}
interface Ext_data_proxy_Proxy extends Ext_Base {
// Cfg
   batchActions : Boolean;
   batchOrder : String;
   model : any /*String/Ext.data.Model*/;
   reader : any /*Object/String/Ext.data.reader.Reader*/;
   writer : any /*Object/String/Ext.data.writer.Writer*/;
// Properties
   isProxy : Boolean;
// Events
   metachange(_this:Ext_data_proxy_Proxy,meta:Object,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_data_proxy_Proxy;
   batch(options:Object) : Ext_data_Batch;
   create(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
   destroy(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
   getModel() : Ext_data_Model;
   getReader() : Ext_data_reader_Reader;
   getWriter() : Ext_data_writer_Writer;
   read(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
   setModel(model:any /*String/Ext.data.Model*/,setOnStore:Boolean) : void;
   setReader(reader:any /*String/Object/Ext.data.reader.Reader*/) : Ext_data_reader_Reader;
   setWriter(writer:any /*String/Object/Ext.data.writer.Writer*/) : Ext_data_writer_Writer;
   update(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
}
interface Ext_data_proxy_Rest extends Ext_data_proxy_Ajax {
// Cfg
   appendId : Boolean;
   batchActions : Boolean;
   format : String;
// Properties
   actionMethods : Object;
// Events
// Methods
   buildUrl(request:Object) : void;
}
interface Ext_data_proxy_Server extends Ext_data_proxy_Proxy {
// Cfg
   api : Object;
   cacheString : String;
   directionParam : String;
   extraParams : Object;
   filterParam : String;
   groupDirectionParam : String;
   groupParam : String;
   limitParam : String;
   noCache : Boolean;
   pageParam : String;
   simpleGroupMode : Boolean;
   simpleSortMode : Boolean;
   sortParam : String;
   startParam : String;
   timeout : Number;
   url : String;
// Properties
// Events
   exception(_this:Ext_data_proxy_Proxy,response:Object,operation:Ext_data_Operation,eOpts:Object) : void;
// Methods
   afterRequest(request:Ext_data_Request,success:Boolean) : void;
   buildRequest(operation:Ext_data_Operation) : Ext_data_Request;
   buildUrl(request:Ext_data_Request) : String;
   create(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
   destroy(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
   doRequest(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
   encodeFilters(filters:Ext_util_Filter[]) : String;
   encodeSorters(sorters:Ext_util_Sorter[]) : String;
   read(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
   setExtraParam(name:String,value:Object) : void;
   update(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
}
interface Ext_data_proxy_SessionStorage extends Ext_data_proxy_WebStorage {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_data_proxy_WebStorage extends Ext_data_proxy_Client {
// Cfg
   id : String;
// Properties
   cache : Object;
// Events
// Methods
   constructor(config:Object) : Ext_data_proxy_WebStorage;
   clear() : void;
   create(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
   destroy(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
   read(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
   setRecord(record:Ext_data_Model,id:String) : void;
   update(operation:Ext_data_Operation,callback:Function,scope:Object) : void;
}
interface Ext_data_reader_Array extends Ext_data_reader_Json {
// Cfg
   successProperty : String;
   totalProperty : String;
// Properties
// Events
// Methods
   constructor(meta:Object) : Ext_data_reader_Array;
}
interface Ext_data_reader_Json extends Ext_data_reader_Reader {
// Cfg
   record : String;
   root : String;
   useSimpleAccessors : Boolean;
// Properties
   jsonData : Object;
// Events
// Methods
   getResponseData(response:Object) : Ext_data_ResultSet;
   readRecords(data:Object) : Ext_data_ResultSet;
}
interface Ext_data_reader_Reader extends Ext_Base {
// Cfg
   idProperty : String;
   implicitIncludes : Boolean;
   messageProperty : String;
   readRecordsOnFailure : Boolean;
   root : String;
   successProperty : String;
   totalProperty : String;
// Properties
   metaData : Object;
   rawData : Object;
// Events
   exception(reader:Ext_data_reader_Reader,response:XMLHttpRequest,error:Ext_data_ResultSet,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_data_reader_Reader;
   getResponseData(response:Object) : Ext_data_ResultSet;
   read(response:Object) : Ext_data_ResultSet;
   readRecords(data:Object) : Ext_data_ResultSet;
}
interface Ext_data_reader_Xml extends Ext_data_reader_Reader {
// Cfg
   record : String;
// Properties
   xmlData : Object;
// Events
// Methods
   getData(data:Object) : Object;
   getResponseData(response:Object) : Ext_data_ResultSet;
   readRecords(doc:Object) : Ext_data_ResultSet;
}
interface Ext_data_Request extends Ext_Base {
// Cfg
   action : String;
   method : String;
   params : Object;
   url : String;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_data_Request;
}
interface Ext_data_ResultSet extends Ext_Base {
// Cfg
   count : Number;
   loaded : Boolean;
   records : Ext_data_Model[];
   success : Boolean;
   total : Number;
// Properties
   totalRecords : Number;
// Events
// Methods
   constructor(config:Object) : Ext_data_ResultSet;
}
interface Ext_data_SequentialIdGenerator extends Ext_data_IdGenerator {
// Cfg
   prefix : String;
   seed : Number;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_data_SequentialIdGenerator;
   generate() : String;
}
interface Ext_data_SortTypes extends Ext_Base {
// Cfg
// Properties
   stripTagsRE : RegExp;
// Events
// Methods
   asDate(s:Object) : Number;
   asFloat(s:Object) : Number;
   asInt(s:Object) : Number;
   asText(s:Object) : String;
   asUCString(s:Object) : String;
   asUCText(s:Object) : String;
   none(s:Object) : Object;
}
interface Ext_data_Store extends Ext_data_AbstractStore {
// Cfg
   buffered : Boolean;
   clearOnPageLoad : Boolean;
   clearRemovedOnLoad : Boolean;
   //data : any /*Object[]/Ext.data.Model[]*/;
   groupDir : String;
   groupField : String;
   leadingBufferZone : Number;
   pageSize : Number;
   proxy : any /*String/Ext.data.proxy.Proxy/Object*/;
   purgePageCount : Number;
   remoteFilter : Boolean;
   remoteGroup : Boolean;
   remoteSort : Boolean;
   sortOnFilter : Boolean;
   trailingBufferZone : Number;
// Properties
   currentPage : Number;
   data : Ext_util_MixedCollection;
   groupers : Ext_util_MixedCollection;
   snapshot : Ext_util_MixedCollection;
// Events
   beforeprefetch(_this:Ext_data_Store,operation:Ext_data_Operation,eOpts:Object) : void;
   groupchange(store:Ext_data_Store,groupers:Ext_util_Grouper[],eOpts:Object) : void;
   prefetch(_this:Ext_data_Store,records:Ext_data_Model[],successful:Boolean,operation:Ext_data_Operation,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_data_Store;
   add(model:any /*Ext.data.Model[]/Ext.data.Model...*/) : Ext_data_Model[];
   addSorted(record:Ext_data_Record) : void;
   aggregate(fn:Function,scope:Object,grouped:Boolean,args:Array) : Object;
   average(field:String,grouped:Boolean) : Object;
   clearFilter(suppressEvent:Boolean) : void;
   clearGrouping() : void;
   collect(dataIndex:String,allowNull:Boolean,bypassFilter:Boolean) : Object[];
   commitChanges() : void;
   count(grouped:Boolean) : Number;
   each(fn:Function,scope:Object) : void;
   filter(filters:any /*Object[]/Ext.util.Filter[]/String*/,value:String) : void;
   filterBy(fn:Function,scope:Object) : void;
   find(fieldName:String,value:any /*String/RegExp*/,startIndex:Number,anyMatch:Boolean,caseSensitive:Boolean,exactMatch:Boolean) : Number;
   findBy(fn:Function,scope:Object,startIndex:Number) : Number;
   findExact(fieldName:String,value:Object,startIndex:Number) : Number;
   findRecord(fieldName:String,value:any /*String/RegExp*/,startIndex:Number,anyMatch:Boolean,caseSensitive:Boolean,exactMatch:Boolean) : Ext_data_Model;
   first(grouped:Boolean) : any /*Ext.data.Model/undefined*/;
   getAt(index:Number) : Ext_data_Model;
   getById(id:Mixed) : Ext_data_Model;
   getCount() : Number;
   getGroupString(instance:Ext_data_Model) : String;
   getGroups(groupName:String) : any /*Object/Object[]*/;
   getNewRecords() : Ext_data_Model[];
   getPageFromRecordIndex(index:Number) : Number;
   getRange(startIndex:Number,endIndex:Number) : Ext_data_Model[];
   getTotalCount() : Number;
   getUpdatedRecords() : Ext_data_Model[];
   group(groupers:any /*String/Object[]*/,direction:String) : void;
   guaranteeRange(start:Object,end:Object,cb:Object,scope:Object) : void;
   indexOf(record:Ext_data_Model) : Number;
   indexOfId(id:String) : Number;
   indexOfTotal(record:Ext_data_Model) : Number;
   insert(index:Number,records:Ext_data_Model[]) : void;
   isFiltered() : Boolean;
   isGrouped() : Boolean;
   last(grouped:Boolean) : any /*Ext.data.Model/undefined*/;
   load(options:any /*Object/Function*/) : void;
   loadData(data:any /*Ext.data.Model[]/Object[]*/,append:Boolean) : void;
   loadPage(page:Number,options:Object) : void;
   loadRawData(data:Object[],append:Boolean) : void;
   loadRecords(records:Ext_data_Model[],options:Object) : void;
   max(field:String,grouped:Boolean) : Object;
   min(field:String,grouped:Boolean) : Object;
   nextPage(options:Object) : void;
   prefetch(options:Object) : void;
   prefetchPage(page:Number,options:Object) : void;
   prefetchRange(start:Object,end:Object) : void;
   previousPage(options:Object) : void;
   query(property:String,value:any /*String/RegExp*/,anyMatch:Boolean,caseSensitive:Boolean,exactMatch:Boolean) : Ext_util_MixedCollection;
   queryBy(fn:Function,scope:Object) : Ext_util_MixedCollection;
   rejectChanges() : void;
   reload(options:Object) : void;
   remove(records:any /*Ext.data.Model/Ext.data.Model[]*/) : void;
   removeAll(silent:Boolean) : void;
   removeAt(index:Number) : void;
   sort(sorters:any /*String/Ext.util.Sorter[]*/,direction:String) : Ext_util_Sorter[];
   sum(field:String,grouped:Boolean) : Number;
}
interface Ext_data_Store_PageMap extends Ext_util_LruCache {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_data_StoreManager extends Ext_util_MixedCollection {
// Cfg
// Properties
// Events
// Methods
   getKey(item:Object) : Object;
   lookup(store:any /*String/Object*/) : Ext_data_Store;
   register(stores:Ext_data_Store[]) : void;
   unregister(stores:any /*String/Object...*/) : void;
}
interface Ext_data_Tree extends Ext_Base {
// Cfg
// Properties
   root : Ext_data_NodeInterface;
// Events
   append(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,index:Number,eOpts:Object) : void;
   beforeappend(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,eOpts:Object) : void;
   beforecollapse(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   beforeexpand(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   beforeinsert(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,refNode:Ext_data_NodeInterface,eOpts:Object) : void;
   beforemove(_this:Ext_data_NodeInterface,oldParent:Ext_data_NodeInterface,newParent:Ext_data_NodeInterface,index:Number,eOpts:Object) : void;
   beforeremove(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,isMove:Boolean,eOpts:Object) : void;
   collapse(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   expand(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   insert(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,refNode:Ext_data_NodeInterface,eOpts:Object) : void;
   move(_this:Ext_data_NodeInterface,oldParent:Ext_data_NodeInterface,newParent:Ext_data_NodeInterface,index:Number,eOpts:Object) : void;
   remove(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,isMove:Boolean,eOpts:Object) : void;
   rootchange(root:Ext_data_Model,eOpts:Object) : void;
   sort(_this:Ext_data_NodeInterface,childNodes:Ext_data_NodeInterface[],eOpts:Object) : void;
// Methods
   constructor(root:Ext_data_NodeInterface) : Ext_data_Tree;
   getNodeById(id:String) : Ext_data_NodeInterface;
   getRootNode() : Ext_data_NodeInterface;
   setRootNode(node:Ext_data_NodeInterface) : Ext_data_NodeInterface;
}
interface Ext_data_TreeStore extends Ext_data_AbstractStore {
// Cfg
   clearOnLoad : Boolean;
   clearRemovedOnLoad : Boolean;
   defaultRootId : String;
   defaultRootProperty : String;
   folderSort : Boolean;
   nodeParam : String;
   root : any /*Ext.data.Model/Ext.data.NodeInterface/Object*/;
// Properties
   //fields : Object;
// Events
   append(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,index:Number,eOpts:Object) : void;
   beforeappend(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,eOpts:Object) : void;
   beforecollapse(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   beforeexpand(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   beforeinsert(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,refNode:Ext_data_NodeInterface,eOpts:Object) : void;
   beforemove(_this:Ext_data_NodeInterface,oldParent:Ext_data_NodeInterface,newParent:Ext_data_NodeInterface,index:Number,eOpts:Object) : void;
   beforeremove(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,isMove:Boolean,eOpts:Object) : void;
   collapse(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   expand(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   insert(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,refNode:Ext_data_NodeInterface,eOpts:Object) : void;
   load(_this:Ext_data_TreeStore,node:Ext_data_NodeInterface,records:Ext_data_Model[],successful:Boolean,eOpts:Object) : void;
   move(_this:Ext_data_NodeInterface,oldParent:Ext_data_NodeInterface,newParent:Ext_data_NodeInterface,index:Number,eOpts:Object) : void;
   remove(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,isMove:Boolean,eOpts:Object) : void;
   rootchange(root:Ext_data_Model,eOpts:Object) : void;
   sort(_this:Ext_data_NodeInterface,childNodes:Ext_data_NodeInterface[],eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_data_TreeStore;
   getNewRecords() : Ext_data_Model[];
   getNodeById(id:Object) : Ext_data_NodeInterface;
   getRootNode() : Ext_data_NodeInterface;
   getUpdatedRecords() : Ext_data_Model[];
   load(options:Object) : void;
   removeAll() : void;
   setProxy(proxy:any /*String/Object/Ext.data.proxy.Proxy*/) : Ext_data_proxy_Proxy;
   setRootNode(root:any /*Ext.data.Model/Ext.data.NodeInterface/Object*/) : Ext_data_NodeInterface;
}
interface Ext_data_Types extends Ext_Base {
// Cfg
// Properties
   AUTO : Object;
   BOOL : Object;
   BOOLEAN : Object;
   DATE : Object;
   FLOAT : Object;
   INT : Object;
   INTEGER : Object;
   NUMBER : Object;
   STRING : Object;
   stripRe : RegExp;
// Events
// Methods
}
interface Ext_data_UuidGenerator extends Ext_data_IdGenerator {
// Cfg
   version : Number;
// Properties
   salt : any /*Number/Object*/;
   timestamp : any /*Number/Object*/;
// Events
// Methods
   reconfigure(config:Object) : void;
}
interface Ext_data_validations extends Ext_Base {
// Cfg
// Properties
   emailMessage : String;
   emailRe : RegExp;
   exclusionMessage : String;
   formatMessage : String;
   inclusionMessage : String;
   lengthMessage : String;
   presenceMessage : String;
// Events
// Methods
   email(config:Object,email:String) : Boolean;
   exclusion(config:Object,value:String) : Boolean;
   format(config:Object,value:String) : Boolean;
   inclusion(config:Object,value:String) : Boolean;
   length(config:Object,value:String) : Boolean;
   presence(config:Object,value:Object) : Boolean;
}
interface Ext_data_writer_Json extends Ext_data_writer_Writer {
// Cfg
   allowSingle : Boolean;
   encode : Boolean;
   root : String;
// Properties
// Events
// Methods
}
interface Ext_data_writer_Writer extends Ext_Base {
// Cfg
   nameProperty : String;
   writeAllFields : Boolean;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_data_writer_Writer;
   getRecordData(record:Ext_data_Model,operation:Ext_data_Operation) : Object;
   write(request:Ext_data_Request) : Ext_data_Request;
}
interface Ext_data_writer_Xml extends Ext_data_writer_Writer {
// Cfg
   defaultDocumentRoot : String;
   documentRoot : String;
   header : String;
   record : String;
// Properties
// Events
// Methods
}
interface Ext_data_XmlStore extends Ext_data_Store {
// Cfg
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_data_XmlStore;
}
interface Ext_Date {
// Cfg
// Properties
   DAY : String;
   HOUR : String;
   MILLI : String;
   MINUTE : String;
   MONTH : String;
   SECOND : String;
   YEAR : String;
   dayNames : String[];
   defaultFormat : String;
   defaults : Object;
   formatCodes : Object;
   formatFunctions : Object;
   monthNames : String[];
   monthNumbers : Object;
   parseFunctions : Object;
   useStrict : Boolean;
// Events
// Methods
   add(date:Date,interval:String,value:Number) : Date;
   between(date:Date,start:Date,end:Date) : Boolean;
   clearTime(date:Date,clone:Boolean) : Date;
   clone(date:Date) : Date;
   format(date:Date,format:String) : String;
   formatContainsDateInfo(format:String) : Boolean;
   formatContainsHourInfo(format:String) : Boolean;
   getDayOfYear(date:Date) : Number;
   getDaysInMonth(date:Date) : Number;
   getElapsed(dateA:Date,dateB:Date) : Number;
   getFirstDateOfMonth(date:Date) : Date;
   getFirstDayOfMonth(date:Date) : Number;
   getGMTOffset(date:Date,colon:Boolean) : String;
   getLastDateOfMonth(date:Date) : Date;
   getLastDayOfMonth(date:Date) : Number;
   getMonthNumber(name:String) : Number;
   getShortDayName(day:Number) : String;
   getShortMonthName(month:Number) : String;
   getSuffix(date:Date) : String;
   getTimezone(date:Date) : String;
   getWeekOfYear(date:Date) : Number;
   isDST(date:Date) : Boolean;
   isEqual(date1:Date,date2:Date) : Boolean;
   isLeapYear(date:Date) : Boolean;
   isValid(year:Number,month:Number,day:Number,hour:Number,minute:Number,second:Number,millisecond:Number) : Boolean;
   now() : Number;
   parse(input:String,format:String,strict:Boolean) : Date;
   unescapeFormat(format:String) : String;
}
interface Ext_dd_DD extends Ext_dd_DragDrop {
// Cfg
// Properties
   scroll : Boolean;
// Events
// Methods
   constructor(id:String,sGroup:String,config:Object) : Ext_dd_DD;
   alignElWithMouse(el:HTMLElement,iPageX:Number,iPageY:Number) : void;
   applyConfig() : void;
   autoOffset(iPageX:Number,iPageY:Number) : void;
   b4Drag(e:Object) : void;
   b4MouseDown(e:Object) : void;
   cachePosition(iPageX:Number,iPageY:Number) : void;
   setDelta(iDeltaX:Number,iDeltaY:Number) : void;
   setDragElPos(iPageX:Number,iPageY:Number) : void;
   toString() : String;
}
interface Ext_dd_DDProxy extends Ext_dd_DD {
// Cfg
// Properties
   centerFrame : Boolean;
   resizeFrame : Boolean;
// Events
// Methods
   constructor(id:String,sGroup:String,config:Object) : Ext_dd_DDProxy;
   applyConfig() : void;
   b4MouseDown(e:Object) : void;
   createFrame() : void;
   endDrag(e:Event) : void;
   initFrame() : void;
   toString() : String;
}
interface Ext_dd_DDTarget extends Ext_dd_DragDrop {
// Cfg
// Properties
// Events
// Methods
   constructor(id:String,sGroup:String,config:Object) : Ext_dd_DDTarget;
   addInvalidHandleClass() : void;
   addInvalidHandleId() : void;
   addInvalidHandleType() : void;
   clearConstraints() : void;
   clearTicks() : void;
   endDrag() : void;
   getDragEl() : void;
   isValidHandleChild() : void;
   onDrag() : void;
   onDragDrop() : void;
   onDragEnter() : void;
   onDragOut() : void;
   onDragOver() : void;
   onInvalidDrop() : void;
   onMouseDown() : void;
   onMouseUp() : void;
   removeInvalidHandleClass() : void;
   removeInvalidHandleId() : void;
   removeInvalidHandleType() : void;
   resetConstraints() : void;
   setDragElId() : void;
   setHandleElId() : void;
   setInitPosition() : void;
   setOuterHandleElId() : void;
   setXConstraint() : void;
   setYConstraint() : void;
   startDrag() : void;
   toString() : String;
}
interface Ext_dd_DragDrop extends Ext_Base {
// Cfg
// Properties
   available : Boolean;
   config : Object;
   defaultPadding : Object;
   groups : Object;
   hasOuterHandles : Boolean;
   id : String;
   ignoreSelf : Boolean;
   invalidHandleClasses : String[];
   invalidHandleIds : Object;
   invalidHandleTypes : Object;
   isTarget : Boolean;
   maintainOffset : Boolean;
   moveOnly : Boolean;
   padding : Number[];
   primaryButtonOnly : Boolean;
   xTicks : Number[];
   yTicks : Number[];
// Events
// Methods
   constructor(id:String,sGroup:String,config:Object) : Ext_dd_DragDrop;
   addInvalidHandleClass(cssClass:String) : void;
   addInvalidHandleId(id:String) : void;
   addInvalidHandleType(tagName:String) : void;
   addToGroup(sGroup:String) : void;
   applyConfig() : void;
   clearConstraints() : void;
   clearTicks() : void;
   constrainTo(constrainTo:any /*String/HTMLElement/Ext.Element*/,pad:any /*Object/Number*/,inContent:Boolean) : void;
   endDrag(e:Event) : void;
   getDragEl() : HTMLElement;
   getEl() : HTMLElement;
   init(id:String,sGroup:String,config:Object) : void;
   initTarget(id:String,sGroup:String,config:Object) : void;
   isLocked() : Boolean;
   isValidHandleChild(node:HTMLElement) : Boolean;
   lock() : void;
   onAvailable() : void;
   onDrag(e:Event) : void;
   onDragDrop(e:Event,id:any /*String/Ext.dd.DragDrop[]*/) : void;
   onDragEnter(e:Event,id:any /*String/Ext.dd.DragDrop[]*/) : void;
   onDragOut(e:Event,id:any /*String/Ext.dd.DragDrop[]*/) : void;
   onDragOver(e:Event,id:any /*String/Ext.dd.DragDrop[]*/) : void;
   onInvalidDrop(e:Event) : void;
   onMouseDown(e:Event) : void;
   onMouseUp(e:Event) : void;
   removeFromGroup(sGroup:String) : void;
   removeInvalidHandleClass(cssClass:String) : void;
   removeInvalidHandleId(id:String) : void;
   removeInvalidHandleType(tagName:String) : void;
   resetConstraints(maintainOffset:Boolean) : void;
   setDragElId(id:String) : void;
   setHandleElId(id:String) : void;
   setInitPosition(diffX:Number,diffY:Number) : void;
   setOuterHandleElId(id:String) : void;
   setPadding(iTop:Number,iRight:Number,iBot:Number,iLeft:Number) : void;
   setXConstraint(iLeft:Number,iRight:Number,iTickSize:Number) : void;
   setYConstraint(iUp:Number,iDown:Number,iTickSize:Number) : void;
   startDrag(X:Number,Y:Number) : void;
   toString() : String;
   unlock() : void;
   unreg() : void;
}
interface Ext_dd_DragDropElement {
// Cfg
// Properties
// Events
// Methods
   getPosX(el:HTMLElement) : Number;
   getPosY(el:HTMLElement) : Number;
   getScrollLeft() : Number;
   getScrollTop() : Number;
   getStyle(el:HTMLElement,styleProp:String) : String;
   handleWasClicked(node:HTMLElement) : void;
   moveToEl(moveEl:HTMLElement,targetEl:HTMLElement) : void;
   numericSort(a:Number,b:Number) : Number;
   swapNode(n1:HTMLElement,n2:HTMLElement) : void;
}
interface Ext_dd_DragDropManager_ElementWrapper {
// Cfg
// Properties
   css : Object;
   el : Object;
   id : Object;
// Events
// Methods
}
interface Ext_dd_DragDropManager extends Ext_Base {
// Cfg
// Properties
   INTERSECT : Number;
   POINT : Number;
   clickPixelThresh : Number;
   clickTimeThresh : Number;
   mode : Number;
   notifyOccluded : Boolean;
   preventDefault : Boolean;
   stopPropagation : Boolean;
   useCache : Boolean;
// Events
// Methods
   getBestMatch(dds:Ext_dd_DragDrop[]) : Ext_dd_DragDrop;
   getCss(id:String) : Object;
   getDDById(id:String) : Ext_dd_DragDrop;
   getElement(id:String) : Object;
   getLocation(oDD:Ext_dd_DragDrop) : Ext_util_Region;
   getRelated(p_oDD:Ext_dd_DragDrop,bTargetsOnly:Boolean) : Ext_dd_DragDrop[];
   isDragDrop(id:String) : Boolean;
   isHandle(id:String) : Boolean;
   isLegalTarget(oDD:Ext_dd_DragDrop,oTargetDD:Ext_dd_DragDrop) : Boolean;
   isLocked() : Boolean;
   isTypeOfDD(the:Object) : Boolean;
   lock() : void;
   refreshCache(groups:Object) : void;
   regDragDrop(oDD:Ext_dd_DragDrop,sGroup:String) : void;
   regHandle(sDDId:String,sHandleId:String) : void;
   startDrag(x:Number,y:Number) : void;
   stopEvent(e:Event) : void;
   unlock() : void;
   verifyEl(el:HTMLElement) : Boolean;
}
interface Ext_dd_DragSource extends Ext_dd_DDProxy {
// Cfg
   animRepair : Boolean;
   ddGroup : String;
   dropAllowed : String;
   dropNotAllowed : String;
   repairHighlightColor : String;
// Properties
// Events
// Methods
   constructor(el:any /*String/HTMLElement/Ext.Element*/,config:Object) : Ext_dd_DragSource;
   afterDragDrop(target:Ext_dd_DragDrop,e:Event,id:String) : void;
   afterDragEnter(target:Ext_dd_DragDrop,e:Event,id:String) : void;
   afterDragOut(target:Ext_dd_DragDrop,e:Event,id:String) : void;
   afterDragOver(target:Ext_dd_DragDrop,e:Event,id:String) : void;
   afterInvalidDrop(e:Event,id:String) : void;
   afterValidDrop(target:Object,e:Event,id:String) : void;
   alignElWithMouse(el:HTMLElement,iPageX:Number,iPageY:Number) : void;
   autoOffset(iPageX:Number,iPageY:Number) : void;
   beforeDragDrop(target:Ext_dd_DragDrop,e:Event,id:String) : Boolean;
   beforeDragEnter(target:Ext_dd_DragDrop,e:Event,id:String) : Boolean;
   beforeDragOut(target:Ext_dd_DragDrop,e:Event,id:String) : Boolean;
   beforeDragOver(target:Ext_dd_DragDrop,e:Event,id:String) : Boolean;
   beforeInvalidDrop(target:Ext_dd_DragDrop,e:Event,id:String) : Boolean;
   endDrag(e:Event) : void;
   getDragData(e:Object) : Object;
   getProxy() : Ext_dd_StatusProxy;
   hideProxy() : void;
   onBeforeDrag(data:Object,e:Event) : Boolean;
   onDragDrop(e:Event,id:any /*String/Ext.dd.DragDrop[]*/) : void;
   onDragEnter(e:Event,id:any /*String/Ext.dd.DragDrop[]*/) : void;
   onDragOut(e:Event,id:any /*String/Ext.dd.DragDrop[]*/) : void;
   onDragOver(e:Event,id:any /*String/Ext.dd.DragDrop[]*/) : void;
   onInvalidDrop(e:Event) : void;
   onStartDrag(x:Number,y:Number) : void;
   startDrag(X:Number,Y:Number) : void;
}
interface Ext_dd_DragTracker extends Ext_Base {
// Cfg
   autoStart : any /*Boolean/Number*/;
   constrainTo : any /*Ext.util.Region/Ext.Element*/;
   delegate : String;
   overCls : String;
   preventDefault : Boolean;
   stopEvent : Boolean;
   tolerance : Number;
   trackOver : Boolean;
// Properties
   active : Boolean;
   dragTarget : HTMLElement;
// Events
   beforestart(_this:Object,e:Object,eOpts:Object) : void;
   drag(_this:Object,e:Object,eOpts:Object) : void;
   dragend(_this:Object,e:Object,eOpts:Object) : void;
   dragstart(_this:Object,e:Object,eOpts:Object) : void;
   mousedown(_this:Object,e:Object,eOpts:Object) : void;
   mousemove(_this:Object,e:Object,eOpts:Object) : void;
   mouseout(_this:Object,e:Object,eOpts:Object) : void;
   mouseover(_this:Object,e:Object,target:HTMLElement,eOpts:Object) : void;
   mouseup(_this:Object,e:Object,eOpts:Object) : void;
// Methods
   getDragTarget() : Ext_Element;
   getOffset(constrainMode:Object) : Number[];
   initEl(el:any /*Ext.Element/HTMLElement*/) : void;
   onBeforeStart(e:Ext_EventObject) : void;
   onDrag(e:Ext_EventObject) : void;
   onEnd(e:Ext_EventObject) : void;
   onStart(e:Ext_EventObject) : void;
}
interface Ext_dd_DragZone extends Ext_dd_DragSource {
// Cfg
   containerScroll : Boolean;
// Properties
   dragData : Object;
// Events
// Methods
   constructor(el:any /*String/HTMLElement/Ext.Element*/,config:Object) : Ext_dd_DragZone;
   afterRepair() : void;
   getDragData(e:Event) : Object;
   getRepairXY(e:Event) : Number[];
   onInitDrag(x:Number,y:Number) : Boolean;
}
interface Ext_dd_DropTarget extends Ext_dd_DDTarget {
// Cfg
   ddGroup : String;
   dropAllowed : String;
   dropNotAllowed : String;
   overClass : String;
// Properties
   isTarget : Boolean;
// Events
// Methods
   constructor(el:any /*String/HTMLElement/Ext.Element*/,config:Object) : Ext_dd_DropTarget;
   notifyDrop(source:Ext_dd_DragSource,e:Event,data:Object) : Boolean;
   notifyEnter(source:Ext_dd_DragSource,e:Event,data:Object) : String;
   notifyOut(source:Ext_dd_DragSource,e:Event,data:Object) : void;
   notifyOver(source:Ext_dd_DragSource,e:Event,data:Object) : String;
}
interface Ext_dd_DropZone extends Ext_dd_DropTarget {
// Cfg
// Properties
// Events
// Methods
   getTargetFromEvent(e:Event) : Object;
   notifyDrop(source:Ext_dd_DragSource,e:Event,data:Object) : Boolean;
   notifyEnter(source:Ext_dd_DragSource,e:Event,data:Object) : String;
   notifyOut(source:Ext_dd_DragSource,e:Event,data:Object) : void;
   notifyOver(source:Ext_dd_DragSource,e:Event,data:Object) : String;
   onContainerDrop(source:Ext_dd_DragSource,e:Event,data:Object) : Boolean;
   onContainerOver(source:Ext_dd_DragSource,e:Event,data:Object) : String;
   onNodeDrop(nodeData:Object,source:Ext_dd_DragSource,e:Event,data:Object) : Boolean;
   onNodeEnter(nodeData:Object,source:Ext_dd_DragSource,e:Event,data:Object) : void;
   onNodeOut(nodeData:Object,source:Ext_dd_DragSource,e:Event,data:Object) : void;
   onNodeOver(nodeData:Object,source:Ext_dd_DragSource,e:Event,data:Object) : String;
}
interface Ext_dd_Registry extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor() : Ext_dd_Registry;
   getHandle(id:any /*String/HTMLElement*/) : Object;
   getHandleFromEvent(e:Event) : Object;
   getTarget(id:any /*String/HTMLElement*/) : Object;
   getTargetFromEvent(e:Event) : Object;
   register(element:any /*String/HTMLElement*/,data:Object) : void;
   unregister(element:any /*String/HTMLElement*/) : void;
}
interface Ext_dd_ScrollManager extends Ext_Base {
// Cfg
// Properties
   animDuration : Number;
   animate : Boolean;
   ddGroup : String;
   frequency : Number;
   hthresh : Number;
   increment : Number;
   vthresh : Number;
// Events
// Methods
   constructor() : Ext_dd_ScrollManager;
   refreshCache() : void;
   register(el:any /*String/HTMLElement/Ext.Element/String[]/HTMLElement[]/Ext.Element[]*/) : void;
   unregister(el:any /*String/HTMLElement/Ext.Element/String[]/HTMLElement[]/Ext.Element[]*/) : void;
}
interface Ext_dd_StatusProxy extends Ext_Component {
// Cfg
   dropAllowed : String;
   dropNotAllowed : String;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_dd_StatusProxy;
   getGhost() : Ext_Element;
   hide(clear:Boolean) : void;
   repair(xy:Number[],callback:Function,scope:Object) : void;
   reset(clearGhost:Boolean) : void;
   setStatus(cssClass:String) : void;
   stop() : void;
   sync() : void;
   update(html:any /*String/HTMLElement*/) : void;
}
interface Ext_direct_Event extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_direct_Event;
   getData() : Object;
}
interface Ext_direct_ExceptionEvent extends Ext_direct_RemotingEvent {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_direct_JsonProvider extends Ext_direct_Provider {
// Cfg
// Properties
// Events
// Methods
   createEvent(response:Object) : Ext_direct_Event;
}
interface Ext_direct_Manager extends Ext_Base {
// Cfg
// Properties
   exceptions : Object;
// Events
   event(e:Ext_direct_Event,provider:Ext_direct_Provider,eOpts:Object) : void;
   exception(e:Ext_direct_Event,eOpts:Object) : void;
// Methods
   constructor() : Ext_direct_Manager;
   addProvider(provider:any /*Ext.direct.Provider/Object...*/) : void;
   getProvider(id:any /*String/Ext.direct.Provider*/) : void;
   parseMethod(fn:any /*String/Function*/) : Function;
   removeProvider(provider:any /*String/Ext.direct.Provider*/) : Ext_direct_Provider;
}
interface Ext_direct_PollingProvider extends Ext_direct_JsonProvider {
// Cfg
   baseParams : Object;
   interval : Number;
   url : any /*String/Function*/;
// Properties
// Events
   beforepoll(_this:Ext_direct_PollingProvider,eOpts:Object) : void;
   poll(_this:Ext_direct_PollingProvider,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_direct_PollingProvider;
   connect() : void;
   disconnect() : void;
   isConnected() : void;
}
interface Ext_direct_Provider extends Ext_Base {
// Cfg
   id : String;
// Properties
// Events
   connect(provider:Ext_direct_Provider,eOpts:Object) : void;
   data(provider:Ext_direct_Provider,e:Ext_direct_Event,eOpts:Object) : void;
   disconnect(provider:Ext_direct_Provider,eOpts:Object) : void;
   exception(eOpts:Object) : void;
// Methods
   connect() : void;
   disconnect() : void;
   isConnected() : void;
}
interface Ext_direct_RemotingEvent extends Ext_direct_Event {
// Cfg
// Properties
// Events
// Methods
   getTransaction() : Ext_direct_Transaction;
}
interface Ext_direct_RemotingMethod extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_direct_RemotingMethod;
   getCallData(args:Array) : Object;
}
interface Ext_direct_RemotingProvider extends Ext_direct_JsonProvider {
// Cfg
   actions : Object;
   enableBuffer : any /*Number/Boolean*/;
   enableUrlEncode : String;
   maxRetries : Number;
   namespace : any /*String/Object*/;
   timeout : Number;
   url : String;
// Properties
// Events
   beforecall(provider:Ext_direct_RemotingProvider,transaction:Ext_direct_Transaction,meta:Object,eOpts:Object) : void;
   call(provider:Ext_direct_RemotingProvider,transaction:Ext_direct_Transaction,meta:Object,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_direct_RemotingProvider;
   connect() : void;
   disconnect() : void;
   isConnected() : void;
}
interface Ext_direct_Transaction extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_direct_Transaction;
}
interface Ext_dom_AbstractElement_Fly extends Ext_dom_AbstractElement {
// Cfg
// Properties
   isFly : Boolean;
// Events
// Methods
}
interface Ext_dom_AbstractElement extends Ext_Base {
// Cfg
// Properties
   defaultUnit : String;
   dom : HTMLElement;
   id : String;
// Events
// Methods
   addCls(className:any /*String/String[]*/) : Ext_dom_Element;
   appendChild(el:any /*String/HTMLElement/Ext.dom.AbstractElement*/) : Ext_dom_AbstractElement;
   appendTo(el:any /*String/HTMLElement/Ext.dom.AbstractElement*/) : Ext_dom_AbstractElement;
   applyStyles(styles:any /*String/Object/Function*/) : Ext_dom_Element;
   child(selector:String,returnDom:Boolean) : any /*HTMLElement/Ext.dom.Element*/;
   contains(el:any /*HTMLElement/String*/) : Boolean;
   createChild(config:Object,insertBefore:HTMLElement,returnDom:Boolean) : Ext_dom_AbstractElement;
   destroy() : void;
   down(selector:String,returnDom:Boolean) : any /*HTMLElement/Ext.dom.Element*/;
   findParent(selector:String,limit:any /*Number/String/HTMLElement/Ext.Element*/,returnEl:Boolean) : HTMLElement;
   findParentNode(selector:String,limit:any /*Number/String/HTMLElement/Ext.Element*/,returnEl:Boolean) : HTMLElement;
   first(selector:String,returnDom:Boolean) : any /*Ext.dom.Element/HTMLElement*/;
   getActiveElement() : HTMLElement;
   getAlignToXY(element:any /*Ext.Element/HTMLElement/String*/,position:String,offsets:Array) : Array;
   getAnchorXY(anchor:String,local:Boolean,size:Object) : Array;
   getAttribute(name:String,namespace:String) : String;
   getBorderWidth(side:String) : Number;
   getBottom(local:Boolean) : Number;
   getBox(contentBox:Boolean,local:Boolean) : Object;
   getById(id:String,asDom:Boolean) : void;
   getHTML() : void;
   getHeight(contentHeight:Boolean) : Number;
   getLeft(local:Boolean) : Number;
   getMargin(sides:String) : any /*Object/Number*/;
   getOffsetsTo(element:any /*Ext.Element/HTMLElement/String*/) : Array;
   getPadding(side:String) : Number;
   getPageBox(asRegion:Boolean) : Object;
   getRight(local:Boolean) : Number;
   getSize(contentSize:Boolean) : Object;
   getStyle(property:any /*String/String[]*/,inline:Boolean) : any /*String/Object*/;
   getTop(local:Boolean) : Number;
   getValue(asNumber:Boolean) : any /*String/Number*/;
   getViewSize() : Object;
   getWidth(contentWidth:Boolean) : Number;
   getX(el:Object) : Number;
   getXY() : Array;
   getY(el:Object) : Number;
   hasCls(className:String) : Boolean;
   hide(animate:any /*Boolean/Object*/) : Ext_Element;
   insertAfter(el:any /*String/HTMLElement/Ext.dom.AbstractElement*/) : Ext_dom_AbstractElement;
   insertBefore(el:any /*String/HTMLElement/Ext.dom.AbstractElement*/) : Ext_dom_AbstractElement;
   insertFirst(el:any /*String/HTMLElement/Ext.dom.AbstractElement/Object*/) : Ext_dom_AbstractElement;
   insertHtml(where:String,html:String,returnEl:Boolean) : any /*HTMLElement/Ext.dom.AbstractElement*/;
   insertSibling(el:any /*String/HTMLElement/Ext.dom.AbstractElement/Object/Array*/,where:String,returnDom:Boolean) : Ext_dom_AbstractElement;
   is(selector:String) : Boolean;
   isStyle(style:String,value:String) : Boolean;
   isTransparent(prop:String) : Boolean;
   last(selector:String,returnDom:Boolean) : any /*Ext.dom.Element/HTMLElement*/;
   mask(msg:String,msgCls:String) : void;
   next(selector:String,returnDom:Boolean) : any /*Ext.dom.Element/HTMLElement*/;
   parent(selector:String,returnDom:Boolean) : any /*Ext.dom.Element/HTMLElement*/;
   populateStyleMap(map:Object,order:Object) : void;
   prev(selector:String,returnDom:Boolean) : any /*Ext.dom.Element/HTMLElement*/;
   query(selector:String) : HTMLElement[];
   radioCls(className:any /*String/String[]*/) : Ext_dom_Element;
   remove() : void;
   removeCls(className:any /*String/String[]*/) : Ext_dom_Element;
   repaint() : Ext_dom_Element;
   replace(el:any /*String/HTMLElement/Ext.dom.AbstractElement*/) : Ext_dom_AbstractElement;
   replaceCls(oldClassName:String,newClassName:String) : Ext_dom_Element;
   replaceWith(el:any /*String/HTMLElement/Ext.dom.AbstractElement/Object*/) : Ext_dom_AbstractElement;
   select(selector:String,unique:Boolean) : Ext_CompositeElement;
   serializeForm(form:Object) : String;
   set(o:Object,useSet:Boolean) : Ext_dom_Element;
   setBottom(bottom:String) : Ext_dom_AbstractElement;
   setBox(box:Object,adjust:Boolean,animate:any /*Boolean/Object*/) : Ext_dom_AbstractElement;
   setHTML(html:String) : Ext_Element;
   setHeight(height:any /*Number/String*/,animate:any /*Boolean/Object*/) : Ext_dom_Element;
   setLeft(left:String) : Ext_dom_AbstractElement;
   setRight(right:String) : Ext_dom_AbstractElement;
   setSize(width:any /*Number/String*/,height:any /*Number/String*/,animate:any /*Boolean/Object*/) : Ext_dom_Element;
   setStyle(property:any /*String/Object*/,value:String) : Ext_dom_Element;
   setTop(top:String) : Ext_dom_AbstractElement;
   setVisibilityMode(mode:Object) : Ext_dom_AbstractElement;
   setVisible(visible:Boolean,animate:any /*Boolean/Object*/) : Ext_Element;
   setWidth(width:any /*Number/String*/,animate:any /*Boolean/Object*/) : Ext_dom_Element;
   setX(The:Number,animate:any /*Boolean/Object*/) : Ext_dom_AbstractElement;
   setXY(pos:Array,animate:any /*Boolean/Object*/) : Ext_dom_AbstractElement;
   setY(The:Number,animate:any /*Boolean/Object*/) : Ext_dom_AbstractElement;
   show(animate:any /*Boolean/Object*/) : Ext_Element;
   toggleCls(className:String) : Ext_dom_Element;
   translatePoints(x:any /*Number/Array*/,y:Number) : Object;
   unmask() : void;
   up(selector:String,limit:any /*Number/String/HTMLElement/Ext.Element*/) : Ext_Element;
   update(html:String) : Ext_dom_Element;
   wrap(config:Object,returnDom:Boolean,selector:String) : any /*HTMLElement/Ext.dom.AbstractElement*/;
}
interface Ext_dom_AbstractHelper extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   append(el:any /*String/HTMLElement/Ext.Element*/,o:any /*Object/String*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
   applyStyles(el:any /*String/HTMLElement*/,styles:any /*String/Object/Function*/) : void;
   generateStyles(styles:Object,buffer:String[]) : any /*String/String[]*/;
   insertAfter(el:any /*String/HTMLElement/Ext.Element*/,o:Object,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
   insertBefore(el:any /*String/HTMLElement/Ext.Element*/,o:any /*Object/String*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
   insertFirst(el:any /*String/HTMLElement/Ext.Element*/,o:any /*Object/String*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
   insertHtml(where:String,el:any /*HTMLElement/TextNode*/,html:String) : HTMLElement;
   markup(spec:Object) : String;
   overwrite(el:any /*String/HTMLElement/Ext.Element*/,o:any /*Object/String*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
}
interface Ext_dom_AbstractQuery extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   is(el:any /*String/HTMLElement/Array*/,selector:String) : Boolean;
   select(selector:String,root:any /*HTMLElement/String*/) : HTMLElement[];
   selectNode(selector:String,root:any /*HTMLElement/String*/) : HTMLElement;
}
interface Ext_dom_CompositeElement extends Ext_dom_CompositeElementLite {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_dom_CompositeElementLite extends Ext_Base {
// Cfg
// Properties
   elements : HTMLElement[];
   isComposite : Boolean;
// Events
// Methods
   constructor(elements:Object,root:Object) : Ext_dom_CompositeElementLite;
   add(els:any /*HTMLElement[]/Ext.dom.CompositeElement*/) : Ext_dom_CompositeElement;
   clear() : void;
   contains(el:any /*String/HTMLElement/Ext.Element/Number*/) : Boolean;
   each(fn:Function,scope:Object) : Ext_dom_CompositeElement;
   fill(els:any /*HTMLElement[]/Ext.dom.CompositeElement*/) : Ext_dom_CompositeElement;
   filter(selector:any /*String/Function*/) : Ext_dom_CompositeElement;
   first() : Ext_dom_Element;
   getCount() : Number;
   indexOf(el:any /*String/HTMLElement/Ext.Element/Number*/) : Number;
   item(index:Number) : Ext_dom_Element;
   last() : Ext_dom_Element;
   removeElement(el:any /*String/HTMLElement/Ext.Element/Number*/,removeDom:Boolean) : Ext_dom_CompositeElement;
   replaceElement(el:any /*String/HTMLElement/Ext.Element/Number*/,replacement:any /*String/Ext.Element*/,domReplace:Boolean) : Ext_dom_CompositeElement;
}
interface Ext_dom_Element extends Ext_dom_AbstractElement {
// Cfg
// Properties
   autoBoxAdjust : Boolean;
   originalDisplay : String;
// Events
   DOMActivate(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   DOMAttrModified(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   DOMCharacterDataModified(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   DOMFocusIn(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   DOMFocusOut(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   DOMNodeInserted(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   DOMNodeInsertedIntoDocument(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   DOMNodeRemoved(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   DOMNodeRemovedFromDocument(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   DOMSubtreeModified(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   abort(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   blur(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   change(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   click(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   contextmenu(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   dblclick(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   error(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   focus(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   keydown(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   keypress(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   keyup(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   load(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mousedown(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mouseenter(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mouseleave(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mousemove(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mouseout(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mouseover(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mouseup(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   reset(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   resize(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   scroll(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   select(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   submit(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   unload(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
// Methods
   constructor(element:any /*String/HTMLElement*/,forceNew:Boolean) : Object;
   addClsOnClick(className:String,testFn:Function,scope:Object) : Ext_dom_Element;
   addClsOnFocus(className:String,testFn:Function,scope:Object) : Ext_dom_Element;
   addClsOnOver(className:String,testFn:Function,scope:Object) : Ext_dom_Element;
   addKeyListener(key:any /*String/Number/Number[]/Object*/,fn:Function,scope:Object) : Ext_util_KeyMap;
   addKeyMap(config:Object) : Ext_util_KeyMap;
   addListener(eventName:String,fn:Function,scope:Object,options:Object) : Ext_dom_Element;
   alignTo(element:any /*String/HTMLElement/Ext.Element*/,position:String,offsets:Number[],animate:any /*Boolean/Object*/) : Ext_Element;
   anchorTo(element:any /*String/HTMLElement/Ext.Element*/,position:String,offsets:Number[],animate:any /*Boolean/Object*/,monitorScroll:any /*Boolean/Number*/,callback:Function) : Ext_Element;
   animate(config:Object) : Ext_dom_Element;
   blur() : Ext_dom_Element;
   boxWrap(_class:String) : Ext_dom_Element;
   cacheScrollValues() : Function;
   center(centerIn:any /*String/HTMLElement/Ext.Element*/) : void;
   clean(forceReclean:Boolean) : void;
   clearListeners() : Ext_dom_Element;
   clearOpacity() : Ext_dom_Element;
   clearPositioning(value:String) : Ext_dom_AbstractElement;
   clip() : Ext_dom_Element;
   createProxy(config:any /*String/Object*/,renderTo:any /*String/HTMLElement*/,matchBox:Boolean) : Ext_dom_Element;
   createShim() : Ext_dom_Element;
   enableDisplayMode(display:String) : Ext_dom_Element;
   fadeIn(options:Object) : Ext_Element;
   fadeOut(options:Object) : Ext_Element;
   focus(defer:Number) : Ext_dom_Element;
   focusable() : Boolean;
   frame(color:String,count:Number,options:Object) : Ext_dom_Element;
   getAlignToXY(element:any /*String/HTMLElement/Ext.Element*/,position:String,offsets:Number[]) : Number[];
   getAnchorXY(anchor:String,local:Boolean,size:Object) : Number[];
   getAttributeNS(namespace:String,name:String) : String;
   getCenterXY() : Number[];
   getColor(attr:String,defaultValue:String,prefix:String) : void;
   getComputedHeight() : Number;
   getComputedWidth() : Number;
   getConstrainVector(constrainTo:any /*Ext.Element/Ext.util.Region*/,proposedPosition:Number[]) : any /*Number[]/Boolean*/;
   getFrameWidth(sides:String) : Number;
   getLoader() : Ext_ElementLoader;
   getLocalX() : Number;
   getLocalY() : Number;
   getOffsetsTo(element:any /*String/HTMLElement/Ext.Element*/) : Number[];
   getPositioning() : Object;
   getRegion() : Ext_util_Region;
   getScopeParent() : HTMLElement;
   getScroll() : Object;
   getStyleSize() : Object;
   getTextWidth(text:String,min:Number,max:Number) : Number;
   getViewRegion() : Ext_util_Region;
   getXY() : Number[];
   ghost(anchor:String,options:Object) : Ext_dom_Element;
   hide(animate:any /*Boolean/Object*/) : Ext_dom_Element;
   highlight(color:String,options:Object) : Ext_dom_Element;
   hover(overFn:Function,outFn:Function,scope:Object,options:Object) : Ext_dom_Element;
   initDD(group:String,config:Object,overrides:Object) : Ext_dd_DD;
   initDDProxy(group:String,config:Object,overrides:Object) : Ext_dd_DDProxy;
   initDDTarget(group:String,config:Object,overrides:Object) : Ext_dd_DDTarget;
   isBorderBox() : Boolean;
   isDisplayed() : Boolean;
   isMasked() : Boolean;
   isScrollable() : Boolean;
   isVisible(deep:Boolean) : Boolean;
   load(options:Object) : Ext_dom_Element;
   mask(msg:String,msgCls:String) : Ext_dom_Element;
   monitorMouseLeave(delay:Number,handler:Function,scope:Object) : Object;
   move(direction:String,distance:Number,animate:any /*Boolean/Object*/) : void;
   moveTo(x:Number,y:Number,animate:any /*Boolean/Object*/) : Ext_dom_AbstractElement;
   needsTabIndex() : void;
   on(eventName:String,fn:Function,scope:Object,options:Object) : Ext_dom_Element;
   pause(seconds:Number) : Ext_Element;
   position(pos:String,zIndex:Number,x:Number,y:Number) : void;
   puff(options:Object) : Ext_dom_Element;
   purgeAllListeners() : Ext_dom_Element;
   relayEvent(eventName:String,observable:Object) : void;
   removeAllListeners() : Ext_dom_Element;
   removeAnchor() : Ext_dom_Element;
   removeListener(eventName:String,fn:Function,scope:Object) : Ext_dom_Element;
   scale(width:Number,height:Number,options:Object) : Ext_Element;
   scroll(direction:String,distance:Number,animate:any /*Boolean/Object*/) : Boolean;
   scrollBy(deltaX:any /*Number/Number[]/Object*/,deltaY:any /*Number/Boolean/Object*/,animate:any /*Boolean/Object*/) : Ext_Element;
   scrollIntoView(container:any /*String/HTMLElement/Ext.Element*/,hscroll:Boolean,animate:any /*Boolean/Object*/) : Ext_dom_Element;
   scrollTo(side:String,value:Number,animate:any /*Boolean/Object*/) : Ext_Element;
   selectable() : Ext_Element;
   setBounds(x:Number,y:Number,width:any /*Number/String*/,height:any /*Number/String*/,animate:any /*Boolean/Object*/) : Ext_dom_AbstractElement;
   setDisplayed(value:any /*Boolean/String*/) : Ext_dom_Element;
   setLeftTop(left:String,top:String) : Ext_dom_Element;
   setLocation(x:Number,y:Number,animate:any /*Boolean/Object*/) : Ext_dom_AbstractElement;
   setOpacity(opacity:Number,animate:any /*Boolean/Object*/) : Ext_dom_Element;
   setPositioning(posCfg:Object) : Ext_dom_AbstractElement;
   setRegion(region:Ext_util_Region,animate:any /*Boolean/Object*/) : Ext_dom_AbstractElement;
   setVisible(visible:Boolean,animate:any /*Boolean/Object*/) : Ext_dom_Element;
   setXY(pos:Number[],animate:any /*Boolean/Object*/) : Ext_Element;
   shift(options:Object) : Ext_Element;
   show(animate:any /*Boolean/Object*/) : Ext_dom_Element;
   slideIn(anchor:String,options:Object) : Ext_dom_Element;
   slideOut(anchor:String,options:Object) : Ext_dom_Element;
   swallowEvent(eventName:any /*String/String[]*/,preventDefault:Boolean) : Ext_dom_Element;
   switchOff(options:Object) : Ext_dom_Element;
   toggle(animate:any /*Boolean/Object*/) : Ext_dom_Element;
   un(eventName:String,fn:Function,scope:Object) : Ext_dom_Element;
   unclip() : Ext_dom_Element;
   unmask() : void;
   unselectable() : Ext_dom_Element;
   update(html:String,loadScripts:Boolean,callback:Function) : Ext_dom_Element;
}
interface Ext_dom_Helper extends Ext_dom_AbstractHelper {
// Cfg
// Properties
   useDom : Boolean;
// Events
// Methods
   applyStyles(el:any /*String/HTMLElement*/,styles:any /*String/Object/Function*/) : void;
   createDom(o:any /*Object/String*/) : HTMLElement;
   createHtml(spec:Object) : String;
   createTemplate(o:Object) : Ext_Template;
   insertHtml(where:String,el:any /*HTMLElement/TextNode*/,html:String) : HTMLElement;
   overwrite(el:any /*String/HTMLElement/Ext.Element*/,o:any /*Object/String*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
}
interface Ext_dom_Query {
// Cfg
// Properties
   matchers : Array;
   operators : Object;
   pseudos : Object;
// Events
// Methods
   compile(selector:String,type:String) : Function;
   filter(el:HTMLElement[],selector:String,nonMatches:Boolean) : HTMLElement[];
   is(el:any /*String/HTMLElement/HTMLElement[]*/,selector:String) : Boolean;
   jsSelect(selector:String,root:any /*HTMLElement/String*/) : HTMLElement[];
   select(path:String,root:HTMLElement,type:String) : HTMLElement[];
   selectNode(selector:String,root:HTMLElement) : HTMLElement;
   selectNumber(selector:String,root:HTMLElement,defaultValue:Number) : Number;
   selectValue(selector:String,root:HTMLElement,defaultValue:String) : String;
}
interface Ext_DomHelper extends Ext_dom_Helper {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_draw_Color extends Ext_Base {
// Cfg
   lightnessFactor : Number;
// Properties
// Events
// Methods
   constructor(red:Number,green:Number,blue:Number) : Ext_draw_Color;
   getBlue() : Number;
   getDarker(factor:Number) : void;
   getGrayscale() : Number;
   getGreen() : Number;
   getHSL() : Number[];
   getLighter(factor:Number) : void;
   getRGB() : Number[];
   getRed() : Number;
   toString() : String;
}
interface Ext_draw_Component extends Ext_Component {
// Cfg
   autoSize : Boolean;
   baseCls : String;
   componentLayout : any /*String/Object*/;
   enginePriority : String[];
   gradients : Object[];
   items : Ext_draw_Sprite[];
   shrinkWrap : any /*Boolean/Number*/;
   viewBox : Boolean;
// Properties
   surface : Ext_draw_Surface;
// Events
   click(e:Ext_EventObject,eOpts:Object) : void;
   dblclick(e:Ext_EventObject,eOpts:Object) : void;
   mousedown(e:Ext_EventObject,eOpts:Object) : void;
   mouseenter(e:Ext_EventObject,eOpts:Object) : void;
   mouseleave(e:Ext_EventObject,eOpts:Object) : void;
   mousemove(e:Ext_EventObject,eOpts:Object) : void;
   mouseup(e:Ext_EventObject,eOpts:Object) : void;
// Methods
}
interface Ext_draw_CompositeSprite extends Ext_util_MixedCollection {
// Cfg
// Properties
// Events
   click(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mousedown(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mouseout(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mouseover(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mouseup(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
// Methods
   constructor(allowFunctions:Boolean,keyFn:Function) : Ext_draw_CompositeSprite;
   add(key:any /*String/Object*/,o:Object) : Object;
   addCls(cls:String) : void;
   destroy() : void;
   getBBox() : Object;
   hide(redraw:Boolean) : Ext_draw_CompositeSprite;
   insert(index:Number,key:String,o:Object) : Object;
   redraw() : void;
   remove(o:Object) : Object;
   removeCls(cls:String) : void;
   setAttributes(attrs:Object,redraw:Boolean) : Ext_draw_CompositeSprite;
   setStyle(style:String) : void;
   show(redraw:Boolean) : Ext_draw_CompositeSprite;
}
interface Ext_draw_Draw extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   snapEndsByDate(from:Date,to:Date,stepsMax:Number,lockEnds:Boolean) : Object;
   snapEndsByDateAndStep(from:Date,to:Date,step:Array,lockEnds:Boolean) : void;
}
interface Ext_draw_engine_ImageExporter extends Ext_Base {
// Cfg
// Properties
   defaultUrl : String;
   heightParam : String;
   supportedTypes : Array;
   svgParam : String;
   typeParam : String;
   widthParam : String;
// Events
// Methods
   generate(surface:Ext_draw_Surface,config:Object) : Boolean;
}
interface Ext_draw_engine_Svg extends Ext_draw_Surface {
// Cfg
// Properties
// Events
// Methods
   addCls(sprite:Object,className:any /*String/String[]*/) : void;
   addGradient(gradient:Object) : void;
   applyZIndex(sprite:Ext_draw_Sprite) : void;
   destroy() : void;
   getRegion() : Ext_util_Region;
   hasCls(sprite:Ext_draw_Sprite,className:String) : Boolean;
   removeCls(sprite:Object,className:any /*String/String[]*/) : void;
   setSize(w:Number,h:Number) : void;
   setText(sprite:Object,text:String) : void;
}
interface Ext_draw_engine_SvgExporter extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   generate(surface:Ext_draw_Surface,config:Object) : String;
}
interface Ext_draw_engine_Vml extends Ext_draw_Surface {
// Cfg
// Properties
// Events
// Methods
   addCls(sprite:Object,className:any /*String/String[]*/) : void;
   addGradient(gradient:Object) : void;
   destroy() : void;
   removeCls(sprite:Object,className:any /*String/String[]*/) : void;
   setSize(w:Number,h:Number) : void;
   setText(sprite:Object,text:String) : void;
}
interface Ext_draw_Matrix extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(a:Object,b:Object,c:Object,d:Object,e:Object,f:Object) : Ext_draw_Matrix;
}
interface Ext_draw_Sprite extends Ext_Base {
// Cfg
   draggable : Boolean;
   fill : String;
   font : String;
   group : any /*String/String[]*/;
   height : Number;
   opacity : Number;
   path : String;
   radius : Number;
   radiusX : Number;
   radiusY : Number;
   src : String;
   stroke : String;
   stroke_width : Number;
   text : String;
   type : String;
   width : Number;
   x : Number;
   y : Number;
// Properties
   dd : Ext_dd_DragSource;
   isSprite : Boolean;
// Events
   beforedestroy(_this:Ext_draw_Sprite,eOpts:Object) : void;
   click(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   destroy(_this:Ext_draw_Sprite,eOpts:Object) : void;
   mousedown(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mousemove(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mouseout(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mouseover(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   mouseup(e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   render(_this:Ext_draw_Sprite,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_draw_Sprite;
   addCls(className:any /*String/String[]*/) : Ext_draw_Sprite;
   destroy() : void;
   getBBox() : Object;
   hide(redraw:Boolean) : Ext_draw_Sprite;
   redraw() : Ext_draw_Sprite;
   remove() : Boolean;
   removeCls(className:any /*String/String[]*/) : Ext_draw_Sprite;
   setAttributes(attrs:Object,redraw:Boolean) : Ext_draw_Sprite;
   setStyle(property:any /*String/Object*/,value:String) : Ext_draw_Sprite;
   show(redraw:Boolean) : Ext_draw_Sprite;
}
interface Ext_draw_SpriteDD extends Ext_dd_DragSource {
// Cfg
// Properties
// Events
// Methods
   constructor(el:any /*String/HTMLElement/Ext.Element*/,config:Object) : Ext_draw_SpriteDD;
   createFrame() : void;
   getDragEl() : HTMLElement;
   onDrag(e:Event) : void;
   setDragElPos(iPageX:Number,iPageY:Number) : void;
   startDrag(X:Number,Y:Number) : void;
}
interface Ext_draw_Surface extends Ext_Base {
// Cfg
   height : Number;
   items : Ext_draw_Sprite[];
   width : Number;
// Properties
// Events
   click(e:Ext_EventObject,eOpts:Object) : void;
   dblclick(e:Ext_EventObject,eOpts:Object) : void;
   mousedown(e:Ext_EventObject,eOpts:Object) : void;
   mouseenter(e:Ext_EventObject,eOpts:Object) : void;
   mouseleave(e:Ext_EventObject,eOpts:Object) : void;
   mousemove(e:Ext_EventObject,eOpts:Object) : void;
   mouseout(e:Ext_EventObject,eOpts:Object) : void;
   mouseover(e:Ext_EventObject,eOpts:Object) : void;
   mouseup(e:Ext_EventObject,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_draw_Surface;
   add(args:any /*Ext.draw.Sprite[]/Ext.draw.Sprite...*/) : any /*Ext.draw.Sprite[]/Ext.draw.Sprite*/;
   addCls(sprite:Object,className:any /*String/String[]*/) : void;
   addGradient(gradient:Object) : void;
   destroy() : void;
   getGroup(id:String) : Object;
   getId() : void;
   remove(sprite:Ext_draw_Sprite,destroySprite:Boolean) : void;
   removeAll(destroySprites:Boolean) : void;
   removeCls(sprite:Object,className:any /*String/String[]*/) : void;
   setSize(w:Number,h:Number) : void;
   setStyle(sprite:Object,styles:Object) : void;
   setText(sprite:Object,text:String) : void;
}
interface Ext_draw_Text extends Ext_draw_Component {
// Cfg
   autoSize : Boolean;
   baseCls : String;
   degrees : Number;
   styleSelector : String;
   text : String;
   viewBox : Boolean;
// Properties
// Events
// Methods
   constructor(text:Object) : Ext_draw_Text;
   initComponent() : void;
   setAngle(degrees:Number) : void;
   setText(t:String) : void;
}
interface Ext_Editor extends Ext_container_Container {
// Cfg
   alignment : String;
   allowBlur : Boolean;
   autoSize : any /*Boolean/Object*/;
   baseCls : String;
   cancelOnEsc : Boolean;
   completeOnEnter : Boolean;
   constrain : Boolean;
   field : Ext_form_field_Field;
   hidden : Boolean;
   hideEl : Boolean;
   ignoreNoChange : Boolean;
   layout : any /*String/Object*/;
   offsets : Number[];
   parentEl : any /*String/HTMLElement/Ext.Element*/;
   revertInvalid : Boolean;
   shadow : any /*Boolean/String*/;
   swallowKeys : Boolean;
   updateEl : Boolean;
   value : Object;
// Properties
// Events
   beforecomplete(_this:Ext_Editor,value:Object,startValue:Object,eOpts:Object) : void;
   beforestartedit(_this:Ext_Editor,boundEl:Ext_Element,value:Object,eOpts:Object) : void;
   canceledit(_this:Ext_Editor,value:Object,startValue:Object,eOpts:Object) : void;
   complete(_this:Ext_Editor,value:Object,startValue:Object,eOpts:Object) : void;
   specialkey(_this:Ext_Editor,field:Ext_form_field_Field,event:Ext_EventObject,eOpts:Object) : void;
   startedit(_this:Ext_Editor,boundEl:Ext_Element,value:Object,eOpts:Object) : void;
// Methods
   afterRender() : void;
   beforeDestroy() : void;
   cancelEdit(remainVisible:Boolean) : void;
   completeEdit(remainVisible:Boolean) : void;
   getValue() : Object;
   initComponent() : void;
   onHide(animateTarget:any /*String/Ext.Element/Ext.Component*/,callback:Function,scope:Object) : void;
   onShow(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : void;
   realign(autoSize:Boolean) : void;
   setValue(value:Object) : void;
   startEdit(el:any /*String/HTMLElement/Ext.Element*/,value:String) : void;
}
interface Ext_ElementLoader extends Ext_Base {
// Cfg
   ajaxOptions : Object;
   autoLoad : any /*Boolean/Object*/;
   baseParams : Object;
   callback : Function;
   failure : Function;
   loadMask : any /*Boolean/String*/;
   params : Object;
   renderer : Function;
   scope : Object;
   scripts : Boolean;
   success : Function;
   target : any /*HTMLElement/Ext.Element/String*/;
   url : String;
// Properties
   isLoader : Boolean;
// Events
   beforeload(_this:Ext_ElementLoader,options:Object,eOpts:Object) : void;
   exception(_this:Ext_ElementLoader,response:Object,options:Object,eOpts:Object) : void;
   load(_this:Ext_ElementLoader,response:Object,options:Object,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_ElementLoader;
   abort() : void;
   destroy() : void;
   getTarget() : Ext_Component;
   isAutoRefreshing() : Boolean;
   load(options:Object) : void;
   setTarget(target:any /*String/HTMLElement/Ext.Element*/) : void;
   startAutoRefresh(interval:Number,options:Object) : void;
   stopAutoRefresh() : void;
}
interface Ext_Error extends Error {
// Cfg
// Properties
// Events
// Methods
   constructor(config:any /*String/Object*/) : Ext_Error;
   toString() : String;
}
interface Ext_EventManager {
// Cfg
// Properties
   idleEvent : Object;
// Events
// Methods
   addListener(el:any /*String/HTMLElement*/,eventName:String,handler:Function,scope:Object,options:Object) : void;
   getId(element:any /*HTMLElement/Ext.Element*/) : String;
   getKeyEvent() : String;
   getPageX(event:Object) : Number;
   getPageXY(event:Object) : Number[];
   getPageY(event:Object) : Number;
   getRelatedTarget(event:Object) : HTMLElement;
   getTarget(event:Object) : HTMLElement;
   on() : void;
   onDocumentReady(fn:Function,scope:Object,options:Object) : void;
   onWindowResize(fn:Function,scope:Object,options:Boolean) : void;
   onWindowUnload(fn:Function,scope:Object,options:Boolean) : void;
   pollScroll() : void;
   preventDefault(The:Event) : void;
   purgeElement(el:any /*String/HTMLElement*/,eventName:String) : void;
   removeAll(el:any /*String/HTMLElement*/) : void;
   removeListener(el:any /*String/HTMLElement*/,eventName:String,fn:Function,scope:Object) : void;
   removeResizeListener(fn:Function,scope:Object) : void;
   removeUnloadListener(fn:Function,scope:Object) : void;
   stopEvent(The:Event) : void;
   stopPropagation(The:Event) : void;
   un() : void;
}
interface Ext_EventObject extends Ext_Base {
// Cfg
// Properties
   A : Number;
   ALT : Number;
   B : Number;
   BACKSPACE : Number;
   C : Number;
   CAPS_LOCK : Number;
   CONTEXT_MENU : Number;
   CTRL : Number;
   D : Number;
   DELETE : Number;
   DOWN : Number;
   E : Number;
   EIGHT : Number;
   END : Number;
   ENTER : Number;
   ESC : Number;
   F : Number;
   F1 : Number;
   F10 : Number;
   F11 : Number;
   F12 : Number;
   F2 : Number;
   F3 : Number;
   F4 : Number;
   F5 : Number;
   F6 : Number;
   F7 : Number;
   F8 : Number;
   F9 : Number;
   FIVE : Number;
   FOUR : Number;
   G : Number;
   H : Number;
   HOME : Number;
   I : Number;
   INSERT : Number;
   J : Number;
   K : Number;
   L : Number;
   LEFT : Number;
   M : Number;
   N : Number;
   NINE : Number;
   NUM_CENTER : Number;
   NUM_DIVISION : Number;
   NUM_EIGHT : Number;
   NUM_FIVE : Number;
   NUM_FOUR : Number;
   NUM_MINUS : Number;
   NUM_MULTIPLY : Number;
   NUM_NINE : Number;
   NUM_ONE : Number;
   NUM_PERIOD : Number;
   NUM_PLUS : Number;
   NUM_SEVEN : Number;
   NUM_SIX : Number;
   NUM_THREE : Number;
   NUM_TWO : Number;
   NUM_ZERO : Number;
   O : Number;
   ONE : Number;
   P : Number;
   PAGE_DOWN : Number;
   PAGE_UP : Number;
   PAUSE : Number;
   PRINT_SCREEN : Number;
   Q : Number;
   R : Number;
   RETURN : Number;
   RIGHT : Number;
   S : Number;
   SEVEN : Number;
   SHIFT : Number;
   SIX : Number;
   SPACE : Number;
   T : Number;
   TAB : Number;
   THREE : Number;
   TWO : Number;
   U : Number;
   UP : Number;
   V : Number;
   W : Number;
   WHEEL_SCALE : Number;
   X : Number;
   Y : Number;
   Z : Number;
   ZERO : Number;
   altKey : Boolean;
   ctrlKey : Boolean;
   shiftKey : Boolean;
// Events
// Methods
   correctWheelDelta(delta:Number) : void;
   getCharCode() : Number;
   getKey() : Number;
   getPageX() : Number;
   getPageY() : Number;
   getPoint() : Ext_util_Point;
   getRelatedTarget(selector:String,maxDepth:any /*Number/HTMLElement*/,returnEl:Boolean) : HTMLElement;
   getTarget(selector:String,maxDepth:any /*Number/HTMLElement*/,returnEl:Boolean) : HTMLElement;
   getWheelDelta() : Number;
   getWheelDeltas() : Object;
   getX() : Number;
   getXY() : Number[];
   getY() : Number;
   hasModifier() : Boolean;
   injectEvent(target:any /*Ext.Element/HTMLElement*/) : void;
   isNavKeyPress() : Boolean;
   isSpecialKey() : Boolean;
   preventDefault() : void;
   stopEvent() : void;
   stopPropagation() : void;
   within(el:any /*String/HTMLElement/Ext.Element*/,related:Boolean,allowEl:Boolean) : Boolean;
}
interface Ext_flash_Component extends Ext_Component {
// Cfg
   backgroundColor : String;
   expressInstall : Boolean;
   flashAttributes : Object;
   flashParams : Object;
   flashVars : Object;
   flashVersion : String;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   swfHeight : any /*String/Number*/;
   swfWidth : any /*String/Number*/;
   url : String;
   wmode : String;
// Properties
   swf : Ext_Element;
// Events
   failure(_this:Ext_flash_Component,eOpts:Object) : void;
   success(_this:Ext_flash_Component,eOpts:Object) : void;
// Methods
   afterRender() : void;
   beforeDestroy() : void;
   getSwfId() : void;
   initComponent() : void;
}
interface Ext_FocusManager extends Ext_Base {
// Cfg
// Properties
   enabled : Boolean;
   focusedCmp : Ext_Component;
   whitelist : String[];
// Events
   beforecomponentfocus(fm:Ext_FocusManager,cmp:Ext_Component,previousCmp:Ext_Component,eOpts:Object) : void;
   componentfocus(fm:Ext_FocusManager,cmp:Ext_Component,previousCmp:Ext_Component,eOpts:Object) : void;
   disable(fm:Ext_FocusManager,eOpts:Object) : void;
   enable(fm:Ext_FocusManager,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_FocusManager;
   addXTypeToWhitelist(xtype:any /*String/String[]*/) : void;
   disable() : void;
   enable(options:any /*Boolean/Object*/,focusFrame:Boolean) : void;
   removeXTypeFromWhitelist(xtype:any /*String/String[]*/) : void;
}
interface Ext_form_action_Action extends Ext_Base {
// Cfg
   failure : Function;
   form : Ext_form_Basic;
   headers : Object;
   method : String;
   params : any /*Object/String*/;
   reset : Boolean;
   scope : Object;
   submitEmptyText : Boolean;
   success : Function;
   timeout : Number;
   url : String;
   waitMsg : String;
   waitTitle : String;
// Properties
   failureType : String;
   response : Object;
   result : Object;
   type : String;
// Events
// Methods
   constructor(config:Object) : Ext_form_action_Action;
   run() : void;
}
interface Ext_form_action_DirectLoad extends Ext_form_action_Load {
// Cfg
// Properties
   type : String;
// Events
// Methods
}
interface Ext_form_action_DirectSubmit extends Ext_form_action_Submit {
// Cfg
// Properties
   type : String;
// Events
// Methods
}
interface Ext_form_action_Load extends Ext_form_action_Action {
// Cfg
// Properties
   type : String;
// Events
// Methods
}
interface Ext_form_action_StandardSubmit extends Ext_form_action_Submit {
// Cfg
   target : String;
// Properties
// Events
// Methods
}
interface Ext_form_action_Submit extends Ext_form_action_Action {
// Cfg
   clientValidation : Boolean;
// Properties
   type : String;
// Events
// Methods
   run() : void;
}
interface Ext_form_Basic extends Ext_util_Observable {
// Cfg
   api : Object;
   baseParams : Object;
   errorReader : Ext_data_reader_Reader;
   method : String;
   paramOrder : any /*String/String[]*/;
   paramsAsHash : Boolean;
   reader : Ext_data_reader_Reader;
   standardSubmit : Boolean;
   timeout : Number;
   trackResetOnLoad : Boolean;
   url : String;
   waitMsgTarget : any /*String/HTMLElement/Ext.Element*/;
   waitTitle : String;
// Properties
   owner : Ext_container_Container;
// Events
   actioncomplete(_this:Ext_form_Basic,action:Ext_form_action_Action,eOpts:Object) : void;
   actionfailed(_this:Ext_form_Basic,action:Ext_form_action_Action,eOpts:Object) : void;
   beforeaction(_this:Ext_form_Basic,action:Ext_form_action_Action,eOpts:Object) : void;
   dirtychange(_this:Ext_form_Basic,dirty:Boolean,eOpts:Object) : void;
   validitychange(_this:Ext_form_Basic,valid:Boolean,eOpts:Object) : void;
// Methods
   constructor(owner:Ext_container_Container,config:Object) : Ext_form_Basic;
   applyIfToFields(obj:Object) : Ext_form_Basic;
   applyToFields(obj:Object) : Ext_form_Basic;
   checkDirty() : void;
   checkValidity() : void;
   clearInvalid() : Ext_form_Basic;
   destroy() : void;
   doAction(action:any /*String/Ext.form.action.Action*/,options:Object) : Ext_form_Basic;
   findField(id:String) : Ext_form_field_Field;
   getFieldValues(dirtyOnly:Boolean) : Object;
   getFields() : Ext_util_MixedCollection;
   getRecord() : Ext_data_Model;
   getValues(asString:Boolean,dirtyOnly:Boolean,includeEmptyText:Boolean,useDataValues:Boolean) : any /*String/Object*/;
   hasInvalidField() : void;
   hasUpload() : void;
   isDirty() : void;
   isValid() : void;
   load(options:Object) : Ext_form_Basic;
   loadRecord(record:Ext_data_Model) : Ext_form_Basic;
   markInvalid(errors:any /*Object/Object[]/Ext.data.Errors*/) : Ext_form_Basic;
   reset() : Ext_form_Basic;
   setValues(values:any /*Object/Object[]*/) : Ext_form_Basic;
   submit(options:Object) : Ext_form_Basic;
   updateRecord(record:Ext_data_Model) : Ext_form_Basic;
}
interface Ext_form_CheckboxGroup extends Ext_form_FieldContainer {
// Cfg
   allowBlank : Boolean;
   blankText : String;
   columns : any /*String/Number/Number[]*/;
   defaultType : String;
   fieldBodyCls : String;
 //  items : any /*Ext.form.field.Checkbox[]/Object[]*/;
   layout : any /*String/Object*/;
   vertical : Boolean;
// Properties
// Events
// Methods
   getChecked() : Ext_form_field_Checkbox[];
   getErrors() : String[];
   getModelData() : Object;
   getSubmitData() : Object;
   getValue() : void;
   initComponent() : void;
   initValue() : void;
   isDirty() : Boolean;
   isEqual(value1:Object,value2:Object) : Boolean;
   onFieldAdded(field:Object) : void;
   onFieldRemoved(field:Ext_form_field_Field) : void;
   reset() : void;
   resetOriginalValue() : void;
   setValue(value:Object) : Ext_form_CheckboxGroup;
   validate() : Boolean;
}
interface Ext_form_CheckboxManager extends Ext_util_MixedCollection {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_form_field_Base extends Ext_Component {
// Cfg
   baseCls : String;
   checkChangeBuffer : Number;
   checkChangeEvents : String[];
   componentLayout : any /*String/Object*/;
   dirtyCls : String;
   fieldCls : String;
   fieldStyle : String;
   focusCls : String;
   inputAttrTpl : any /*String/Array/Ext.XTemplate*/;
   inputId : String;
   inputType : String;
   invalidText : String;
   name : String;
   readOnly : Boolean;
   readOnlyCls : String;
   tabIndex : Number;
   validateOnBlur : Boolean;
// Properties
   inputEl : Ext_Element;
   maskOnDisable : Boolean;
// Events
   specialkey(_this:Ext_form_field_Base,e:Ext_EventObject,eOpts:Object) : void;
   writeablechange(_this:Ext_form_field_Base,Read:Boolean,eOpts:Object) : void;
// Methods
   clearInvalid() : void;
   doComponentLayout() : Ext_container_Container;
   extractFileInput() : HTMLElement;
   getInputId() : void;
   getRawValue() : String;
   getSubTplData() : Object;
   getSubTplMarkup() : void;
   getSubmitData() : Object;
   getSubmitValue() : String;
   getValue() : Object;
   initComponent() : void;
   isFileUpload() : Boolean;
   isValid() : Boolean;
   markInvalid(errors:any /*String/String[]*/) : void;
   onDisable() : void;
   onEnable() : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   processRawValue(value:Object) : Object;
   rawToValue(rawValue:Object) : Object;
   setFieldStyle(style:any /*String/Object/Function*/) : void;
   setRawValue(value:Object) : Object;
   setReadOnly(readOnly:Boolean) : void;
   setValue(value:Object) : Ext_form_field_Field;
   transformRawValue(value:Object) : Object;
   validateValue(value:Object) : Boolean;
   valueToRaw(value:Object) : Object;
}
interface Ext_form_field_Checkbox extends Ext_form_field_Base {
// Cfg
   afterBoxLabelTextTpl : any /*String/Array/Ext.XTemplate*/;
   afterBoxLabelTpl : any /*String/Array/Ext.XTemplate*/;
   beforeBoxLabelTextTpl : any /*String/Array/Ext.XTemplate*/;
   beforeBoxLabelTpl : any /*String/Array/Ext.XTemplate*/;
   boxLabel : String;
   boxLabelAlign : String;
   boxLabelAttrTpl : any /*String/Array/Ext.XTemplate*/;
   boxLabelCls : String;
   checkChangeEvents : String[];
   checked : Boolean;
   checkedCls : String;
   componentLayout : any /*String/Object*/;
   fieldBodyCls : String;
   fieldCls : String;
   focusCls : String;
   handler : Function;
   inputType : String;
   inputValue : String;
   scope : Object;
   uncheckedValue : String;
// Properties
   boxLabelEl : Ext_Element;
   originalValue : Object;
// Events
// Methods
   beforeDestroy() : void;
   getRawValue() : Boolean;
   getSubTplData() : Object;
   getSubmitValue() : String;
   getValue() : Boolean;
   initComponent() : void;
   initValue() : void;
   onEnable() : void;
   resetOriginalValue() : void;
   setRawValue(value:any /*Boolean/String/Number*/) : Boolean;
   setReadOnly(readOnly:Boolean) : void;
   setValue(checked:any /*Boolean/String*/) : Ext_form_field_Checkbox;
   valueToRaw(value:Object) : Object;
}
interface Ext_form_field_ComboBox extends Ext_form_field_Picker {
// Cfg
   allQuery : String;
   autoSelect : Boolean;
   componentLayout : any /*String/Object*/;
   defaultListConfig : Object;
   delimiter : String;
   displayField : String;
   fieldSubTpl : Ext_XTemplate;
   forceSelection : Boolean;
   growToLongestValue : Boolean;
   hiddenName : String;
   listConfig : Object;
   minChars : Number;
   multiSelect : Boolean;
   pageSize : Number;
   queryCaching : Boolean;
   queryDelay : Number;
   queryMode : String;
   queryParam : String;
   selectOnTab : Boolean;
   store : any /*Ext.data.Store/Array*/;
   transform : any /*String/HTMLElement/Ext.Element*/;
   triggerAction : String;
   triggerCls : String;
   typeAhead : Boolean;
   typeAheadDelay : Number;
   valueField : String;
   valueNotFoundText : String;
// Properties
   lastQuery : String;
// Events
   beforedeselect(combo:Ext_form_field_ComboBox,record:Ext_data_Record,index:Number,eOpts:Object) : void;
   beforequery(queryEvent:Object,eOpts:Object) : void;
   beforeselect(combo:Ext_form_field_ComboBox,record:Ext_data_Record,index:Number,eOpts:Object) : void;
   select(combo:Ext_form_field_ComboBox,records:Array,eOpts:Object) : void;
// Methods
   afterRender() : void;
   alignPicker() : void;
   beforeReset() : void;
   clearValue() : void;
   createPicker() : void;
   doQuery(queryString:String,forceAll:Boolean,rawQuery:Boolean) : Boolean;
   findRecord(field:String,value:Object) : Ext_data_Model;
   findRecordByDisplay(value:Object) : Ext_data_Model;
   findRecordByValue(value:Object) : Ext_data_Model;
   getStore() : Ext_data_Store;
   getStoreListeners() : Object;
   getSubTplData() : Object;
   getSubmitValue() : String;
   getValue() : Object;
   initComponent() : void;
   onAdded(container:Ext_container_Container,pos:Number) : void;
   onBindStore(store:Ext_data_AbstractStore,initial:Boolean) : void;
   onDestroy() : void;
   onTriggerClick() : void;
   onUnbindStore(store:Ext_data_AbstractStore,initial:Boolean) : void;
   select(r:Object) : void;
   setValue(value:any /*String/String[]*/) : Ext_form_field_Field;
}
interface Ext_form_field_Date extends Ext_form_field_Picker {
// Cfg
   altFormats : String;
   disabledDates : String[];
   disabledDatesText : String;
   disabledDays : Number[];
   disabledDaysText : String;
   format : String;
   invalidText : String;
   matchFieldWidth : Boolean;
   maxText : String;
   maxValue : any /*Date/String*/;
   minText : String;
   minValue : any /*Date/String*/;
   showToday : Boolean;
   startDay : Number;
   submitFormat : String;
   triggerCls : String;
   useStrict : Boolean;
// Properties
// Events
// Methods
   createPicker() : void;
   getErrors(value:Object) : String[];
   initComponent() : void;
   initValue() : void;
   rawToValue(rawValue:Object) : Object;
   safeParse(value:String,format:String) : Date;
   setDisabledDates(disabledDates:String[]) : void;
   setDisabledDays(disabledDays:Number[]) : void;
   setMaxValue(value:Date) : void;
   setMinValue(value:Date) : void;
   setValue(date:any /*String/Date*/) : Ext_form_field_Date;
   valueToRaw(value:Object) : Object;
}
interface Ext_form_field_Display extends Ext_form_field_Base {
// Cfg
   fieldCls : String;
   htmlEncode : Boolean;
   renderer : Function;
   scope : Object;
   submitValue : Boolean;
// Properties
// Events
// Methods
   getRawValue() : String;
   getSubTplData() : Object;
   isDirty() : Boolean;
   isValid() : Boolean;
   setRawValue(value:Object) : Object;
   validate() : Boolean;
}
interface Ext_form_field_Field extends Ext_Base {
// Cfg
   disabled : Boolean;
   name : String;
   submitValue : Boolean;
   validateOnChange : Boolean;
   value : Object;
// Properties
   isFormField : Boolean;
   originalValue : Object;
// Events
   change(_this:Ext_form_field_Field,newValue:Object,oldValue:Object,eOpts:Object) : void;
   dirtychange(_this:Ext_form_field_Field,isDirty:Boolean,eOpts:Object) : void;
   validitychange(_this:Ext_form_field_Field,isValid:Boolean,eOpts:Object) : void;
// Methods
   batchChanges(fn:Object) : void;
   beforeReset() : void;
   checkChange() : void;
   checkDirty() : void;
   clearInvalid() : void;
   extractFileInput() : HTMLElement;
   getErrors(value:Object) : String[];
   getModelData() : Object;
   getName() : String;
   getSubmitData() : Object;
   getValue() : Object;
   initField() : void;
   initValue() : void;
   isDirty() : Boolean;
   isEqual(value1:Object,value2:Object) : Boolean;
   isFileUpload() : Boolean;
   isValid() : Boolean;
   markInvalid(errors:any /*String/String[]*/) : void;
   reset() : void;
   resetOriginalValue() : void;
   setValue(value:Object) : Ext_form_field_Field;
   transformOriginalValue(value:Object) : Object;
   validate() : Boolean;
}
interface Ext_form_field_File extends Ext_form_field_Trigger {
// Cfg
   buttonConfig : Object;
   buttonMargin : Number;
   buttonOnly : Boolean;
   buttonText : String;
   componentLayout : any /*String/Object*/;
   fieldBodyCls : String;
   readOnly : Boolean;
// Properties
   button : Ext_button_Button;
   fileInputEl : Ext_Element;
// Events
   change(_this:Ext_ux_form_FileUploadField,value:String,eOpts:Object) : void;
// Methods
   extractFileInput() : HTMLElement;
   getTriggerMarkup() : void;
   isFileUpload() : Boolean;
   onDestroy() : void;
   onDisable() : void;
   onEnable() : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   reset() : void;
   setValue() : void;
}
interface Ext_form_field_Hidden extends Ext_form_field_Base {
// Cfg
   hideLabel : Boolean;
   inputType : String;
// Properties
// Events
// Methods
   clearInvalid() : void;
   initComponent() : void;
   markInvalid(errors:any /*String/String[]*/) : void;
   setHeight(height:Number) : Ext_Component;
   setPagePosition(x:Number,y:Number,animate:any /*Boolean/Object*/) : Ext_Component;
   setPosition(left:Number,top:Number,animate:any /*Boolean/Object*/) : Ext_Component;
   setSize(width:any /*Number/String/Object*/,height:any /*Number/String*/) : Ext_Component;
   setWidth(width:Number) : Ext_Component;
}
interface Ext_form_field_HtmlEditor extends Ext_Component {
// Cfg
   afterBodyEl : any /*String/Array/Ext.XTemplate*/;
   afterIFrameTpl : any /*String/Array/Ext.XTemplate*/;
   afterTextAreaTpl : any /*String/Array/Ext.XTemplate*/;
   beforeIFrameTpl : any /*String/Array/Ext.XTemplate*/;
   beforeTextAreaTpl : any /*String/Array/Ext.XTemplate*/;
   componentLayout : any /*String/Object*/;
   createLinkText : String;
   defaultLinkValue : String;
   defaultValue : String;
   enableAlignments : Boolean;
   enableColors : Boolean;
   enableFont : Boolean;
   enableFontSize : Boolean;
   enableFormat : Boolean;
   enableLinks : Boolean;
   enableLists : Boolean;
   enableSourceEdit : Boolean;
   fontFamilies : String[];
   hideMode : String;
   iframeAttrTpl : any /*String/Array/Ext.XTemplate*/;
// Properties
   buttonTips : Object;
   maskOnDisable : Boolean;
// Events
   activate(_this:Ext_form_field_HtmlEditor,eOpts:Object) : void;
   beforepush(_this:Ext_form_field_HtmlEditor,html:String,eOpts:Object) : void;
   beforesync(_this:Ext_form_field_HtmlEditor,html:String,eOpts:Object) : void;
   blur(eOpts:Object) : void;
   editmodechange(_this:Ext_form_field_HtmlEditor,sourceEdit:Boolean,eOpts:Object) : void;
   focus(eOpts:Object) : void;
   initialize(_this:Ext_form_field_HtmlEditor,eOpts:Object) : void;
   push(_this:Ext_form_field_HtmlEditor,html:String,eOpts:Object) : void;
   specialkey(eOpts:Object) : void;
   sync(_this:Ext_form_field_HtmlEditor,html:String,eOpts:Object) : void;
// Methods
   beforeDestroy() : void;
   cleanHtml(html:String) : String;
   clearInvalid() : void;
   execCmd(cmd:String,value:any /*String/Boolean*/) : void;
   getDocMarkup() : void;
   getSubTplMarkup() : String;
   getToolbar() : Ext_toolbar_Toolbar;
   getValue() : Object;
   initComponent() : void;
   insertAtCursor(text:String) : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   pushValue() : void;
   relayCmd(cmd:String,value:any /*String/Boolean*/) : void;
   setReadOnly(readOnly:Boolean) : void;
   setValue(value:Object) : Ext_form_field_Field;
   syncValue() : void;
   toggleSourceEdit(sourceEditMode:Boolean) : void;
   updateToolbar() : void;
}
interface Ext_form_field_Number extends Ext_form_field_Spinner {
// Cfg
   allowDecimals : Boolean;
   autoStripChars : Boolean;
   baseChars : String;
   decimalPrecision : Number;
   decimalSeparator : String;
   maxText : String;
   maxValue : Number;
   minText : String;
   minValue : Number;
   nanText : String;
   negativeText : String;
   step : Number;
   submitLocaleSeparator : Boolean;
// Properties
// Events
// Methods
   getErrors(value:Object) : String[];
   getSubmitValue() : String;
   initComponent() : void;
   onSpinDown() : void;
   onSpinUp() : void;
   rawToValue(rawValue:Object) : Object;
   setMaxValue(value:Number) : void;
   setMinValue(value:Number) : void;
   valueToRaw(value:Object) : Object;
}
interface Ext_form_field_Picker extends Ext_form_field_Trigger {
// Cfg
   editable : Boolean;
   matchFieldWidth : Boolean;
   openCls : String;
   pickerAlign : String;
   pickerOffset : Number[];
// Properties
   isExpanded : Boolean;
// Events
   collapse(field:Ext_form_field_Picker,eOpts:Object) : void;
   expand(field:Ext_form_field_Picker,eOpts:Object) : void;
   select(field:Ext_form_field_Picker,value:Object,eOpts:Object) : void;
// Methods
   alignPicker() : void;
   collapse() : void;
   createPicker() : void;
   expand() : void;
   getPicker() : Ext_Component;
   initComponent() : void;
   onDestroy() : void;
   onTriggerClick() : void;
}
interface Ext_form_field_Radio extends Ext_form_field_Checkbox {
// Cfg
   inputType : String;
// Properties
   isRadio : Boolean;
// Events
// Methods
   getGroupValue() : String;
   getModelData() : Object;
   getSubmitValue() : any /*Boolean/Object*/;
   onRemoved(destroying:Boolean) : void;
   setValue(value:any /*String/Boolean*/) : Ext_form_field_Radio;
}
interface Ext_form_field_Spinner extends Ext_form_field_Trigger {
// Cfg
   keyNavEnabled : Boolean;
   mouseWheelEnabled : Boolean;
   repeatTriggerClick : Boolean;
   spinDownEnabled : Boolean;
   spinUpEnabled : Boolean;
// Properties
   spinDownEl : Ext_Element;
   spinUpEl : Ext_Element;
// Events
   spin(_this:Ext_form_field_Spinner,direction:String,eOpts:Object) : void;
   spindown(_this:Ext_form_field_Spinner,eOpts:Object) : void;
   spinup(_this:Ext_form_field_Spinner,eOpts:Object) : void;
// Methods
   getSubTplMarkup() : void;
   getTriggerWidth() : Number;
   initComponent() : void;
   onDestroy() : void;
   onSpinDown() : void;
   onSpinUp() : void;
   setSpinDownEnabled(enabled:Boolean) : void;
   setSpinUpEnabled(enabled:Boolean) : void;
   spinDown() : void;
   spinUp() : void;
}
interface Ext_form_field_Text extends Ext_form_field_Base {
// Cfg
   allowBlank : Boolean;
   blankText : String;
   disableKeyFilter : Boolean;
   emptyCls : String;
   emptyText : String;
   enableKeyEvents : Boolean;
   enforceMaxLength : Boolean;
   grow : Boolean;
   growAppend : String;
   growMax : Number;
   growMin : Number;
   maskRe : RegExp;
   maxLength : Number;
   maxLengthText : String;
   minLength : Number;
   minLengthText : String;
   regex : RegExp;
   regexText : String;
   requiredCls : String;
   selectOnFocus : Boolean;
   size : Number;
   stripCharsRe : RegExp;
   validator : Function;
   vtype : String;
   vtypeText : String;
// Properties
// Events
   autosize(_this:Ext_form_field_Text,width:Number,eOpts:Object) : void;
   keydown(_this:Ext_form_field_Text,e:Ext_EventObject,eOpts:Object) : void;
   keypress(_this:Ext_form_field_Text,e:Ext_EventObject,eOpts:Object) : void;
   keyup(_this:Ext_form_field_Text,e:Ext_EventObject,eOpts:Object) : void;
// Methods
   afterComponentLayout(width:Number,height:Number,oldWidth:Number,oldHeight:Number) : void;
   afterRender() : void;
   applyState(state:Object) : void;
   autoSize() : void;
   getErrors(value:Object) : String[];
   getRawValue() : String;
   getState() : Object;
   getSubTplData() : Object;
   initComponent() : void;
   onDisable() : void;
   onEnable() : void;
   processRawValue(value:String) : String;
   reset() : void;
   selectText(start:Number,end:Number) : void;
   setValue(value:Object) : Ext_form_field_Text;
}
interface Ext_form_field_TextArea extends Ext_form_field_Text {
// Cfg
   cols : Number;
   componentLayout : any /*String/Object*/;
   enterIsSpecial : Boolean;
   growAppend : String;
   growMax : Number;
   growMin : Number;
   preventScrollbars : Boolean;
   rows : Number;
// Properties
// Events
   autosize(_this:Ext_form_field_Text,height:Number,eOpts:Object) : void;
// Methods
   afterRender() : void;
   autoSize() : void;
   beforeDestroy() : void;
   getSubTplData() : Object;
   transformOriginalValue(value:Object) : Object;
   transformRawValue(value:Object) : Object;
   valueToRaw(value:Object) : Object;
}
interface Ext_form_field_Time extends Ext_form_field_ComboBox {
// Cfg
   altFormats : String;
   displayField : String;
   format : String;
   increment : Number;
   invalidText : String;
   maxText : String;
   maxValue : any /*Date/String*/;
   minText : String;
   minValue : any /*Date/String*/;
   pickerMaxHeight : Number;
   queryMode : String;
   selectOnTab : Boolean;
   snapToIncrement : Boolean;
   submitFormat : String;
   triggerCls : String;
   valueField : String;
// Properties
// Events
// Methods
   getErrors(value:Object) : String[];
   getValue() : Object;
   initComponent() : void;
   rawToValue(rawValue:Object) : Object;
   setMaxValue(value:any /*Date/String*/) : void;
   setMinValue(value:any /*Date/String*/) : void;
   setValue(value:any /*String/String[]*/) : Ext_form_field_Field;
   valueToRaw(value:Object) : Object;
}
interface Ext_form_field_Trigger extends Ext_form_field_Text {
// Cfg
   componentLayout : any /*String/Object*/;
   editable : Boolean;
   hideTrigger : Boolean;
   readOnly : Boolean;
   repeatTriggerClick : Boolean;
   selectOnFocus : Boolean;
   triggerBaseCls : String;
   triggerCls : String;
   triggerNoEditCls : String;
   triggerWrapCls : String;
// Properties
   inputCell : Ext_Element;
   triggerEl : Ext_CompositeElement;
   triggerWrap : Ext_Element;
// Events
// Methods
   getLabelableRenderData() : Object;
   getSubTplData() : Object;
   getSubTplMarkup() : void;
   getTriggerWidth() : Number;
   initComponent() : void;
   onDestroy() : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   onTriggerClick(e:Ext_EventObject) : void;
   setEditable(editable:Boolean) : void;
   setReadOnly(readOnly:Boolean) : void;
}
interface Ext_form_field_VTypes extends Ext_Base {
// Cfg
// Properties
   alphaMask : RegExp;
   alphaText : String;
   alphanumMask : RegExp;
   alphanumText : String;
   emailMask : RegExp;
   emailText : String;
   urlText : String;
// Events
// Methods
   alpha(value:String) : Boolean;
   alphanum(value:String) : Boolean;
   email(value:String) : Boolean;
   url(value:String) : Boolean;
}
interface Ext_form_FieldAncestor extends Ext_Base {
// Cfg
   fieldDefaults : Object;
// Properties
// Events
   fielderrorchange(_this:Ext_form_FieldAncestor,The:Ext_form_Labelable,error:String,eOpts:Object) : void;
   fieldvaliditychange(_this:Ext_form_FieldAncestor,The:Ext_form_Labelable,isValid:String,eOpts:Object) : void;
// Methods
   initFieldAncestor() : void;
   onFieldAdded(field:Ext_form_field_Field) : void;
   onFieldErrorChange(field:Ext_form_Labelable,error:String) : void;
   onFieldRemoved(field:Ext_form_field_Field) : void;
   onFieldValidityChange(field:Ext_form_field_Field,valid:Boolean) : void;
   onLabelableAdded(labelable:Ext_form_Labelable) : void;
   onLabelableRemoved(labelable:Ext_form_Labelable) : void;
}
interface Ext_form_FieldContainer extends Ext_container_Container {
// Cfg
   combineErrors : Boolean;
   combineLabels : Boolean;
   componentCls : String;
   componentLayout : any /*String/Object*/;
   labelConnector : String;
// Properties
   maskOnDisable : Boolean;
// Events
// Methods
   getCombinedErrors(invalidFields:Ext_form_field_Field[]) : String[];
   getFieldLabel() : String;
   getSubTplMarkup() : String;
   initComponent() : void;
   onLabelableAdded(labelable:Ext_form_Labelable) : void;
   onLabelableRemoved(labelable:Ext_form_Labelable) : void;
}
interface Ext_form_FieldSet extends Ext_container_Container {
// Cfg
   autoEl : any /*String/Object*/;
   baseCls : String;
   border : any /*Number/String/Boolean*/;
   checkboxName : String;
   checkboxToggle : Boolean;
   collapsed : Boolean;
   collapsible : Boolean;
   componentLayout : any /*String/Object*/;
   layout : String;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   stateEvents : String[];
   title : String;
   toggleOnTitleClick : Boolean;
// Properties
   checkboxCmp : Ext_form_field_Checkbox;
   legend : Ext_Component;
   maskOnDisable : Boolean;
   toggleCmp : Ext_panel_Tool;
// Events
   beforecollapse(f:Ext_form_FieldSet,eOpts:Object) : void;
   beforeexpand(f:Ext_form_FieldSet,eOpts:Object) : void;
   collapse(f:Ext_form_FieldSet,eOpts:Object) : void;
   expand(f:Ext_form_FieldSet,eOpts:Object) : void;
// Methods
   beforeDestroy() : void;
   collapse() : Ext_form_FieldSet;
   createCheckboxCmp() : void;
   createTitleCmp() : void;
   createToggleCmp() : void;
   expand() : Ext_form_FieldSet;
   getState() : Object;
   initComponent() : void;
   setTitle(title:String) : Ext_form_FieldSet;
   toggle() : void;
}
interface Ext_form_Label extends Ext_Component {
// Cfg
   autoEl : any /*String/Object*/;
   forId : String;
   html : String;
   text : String;
// Properties
// Events
// Methods
   setText(text:String,encode:Boolean) : Ext_form_Label;
}
interface Ext_form_Labelable extends Ext_Base {
// Cfg
   activeError : String;
   activeErrorsTpl : any /*String/String[]/Ext.XTemplate*/;
   afterBodyEl : any /*String/Array/Ext.XTemplate*/;
   afterLabelTextTpl : any /*String/Array/Ext.XTemplate*/;
   afterLabelTpl : any /*String/Array/Ext.XTemplate*/;
   afterSubTpl : any /*String/Array/Ext.XTemplate*/;
   autoFitErrors : Boolean;
   baseBodyCls : String;
   beforeBodyEl : any /*String/Array/Ext.XTemplate*/;
   beforeLabelTextTpl : any /*String/Array/Ext.XTemplate*/;
   beforeLabelTpl : any /*String/Array/Ext.XTemplate*/;
   beforeSubTpl : any /*String/Array/Ext.XTemplate*/;
   clearCls : String;
   errorMsgCls : String;
   fieldBodyCls : String;
   fieldLabel : String;
   formItemCls : String;
   hideEmptyLabel : Boolean;
   hideLabel : Boolean;
   invalidCls : String;
   labelAlign : String;
   labelAttrTpl : any /*String/Array/Ext.XTemplate*/;
   labelCls : String;
   labelClsExtra : String;
   labelPad : Number;
   labelSeparator : String;
   labelStyle : String;
   labelWidth : Number;
   msgTarget : String;
   preventMark : Boolean;
// Properties
   bodyEl : Ext_Element;
   errorEl : Ext_Element;
   isFieldLabelable : Boolean;
   labelCell : Ext_Element;
   labelEl : Ext_Element;
// Events
   errorchange(_this:Ext_form_Labelable,error:String,eOpts:Object) : void;
// Methods
   getActiveError() : String;
   getActiveErrors() : String[];
   getFieldLabel() : String;
   getInputId() : String;
   getLabelableRenderData() : Object;
   getSubTplMarkup() : String;
   hasActiveError() : Boolean;
   hasVisibleLabel() : Boolean;
   initLabelable() : void;
   setActiveError(msg:String) : void;
   setActiveErrors(errors:String[]) : void;
   setFieldDefaults(defaults:Object) : void;
   setFieldLabel(label:String) : void;
   trimLabelSeparator() : String;
   unsetActiveError() : void;
}
interface Ext_form_Panel extends Ext_panel_Panel {
// Cfg
   layout : String;
   pollForChanges : Boolean;
   pollInterval : Number;
// Properties
// Events
   actioncomplete(_this:Ext_form_Basic,action:Ext_form_action_Action,eOpts:Object) : void;
   actionfailed(_this:Ext_form_Basic,action:Ext_form_action_Action,eOpts:Object) : void;
   beforeaction(_this:Ext_form_Basic,action:Ext_form_action_Action,eOpts:Object) : void;
   dirtychange(_this:Ext_form_Basic,dirty:Boolean,eOpts:Object) : void;
   validitychange(_this:Ext_form_Basic,valid:Boolean,eOpts:Object) : void;
// Methods
   beforeDestroy() : void;
   checkChange() : void;
   getForm() : Ext_form_Basic;
   getRecord() : Ext_data_Model;
   getValues(asString:Boolean,dirtyOnly:Boolean,includeEmptyText:Boolean,useDataValues:Boolean) : any /*String/Object*/;
   initComponent() : void;
   load(options:Object) : void;
   loadRecord(record:Ext_data_Model) : Ext_form_Basic;
   startPolling(interval:Number) : void;
   stopPolling() : void;
   submit(options:Object) : void;
}
interface Ext_form_RadioGroup extends Ext_form_CheckboxGroup {
// Cfg
   allowBlank : Boolean;
   blankText : String;
   defaultType : String;
   //items : any /*Ext.form.field.Radio[]/Object[]*/;
// Properties
// Events
// Methods
   checkChange() : void;
   setValue(value:Object) : Ext_form_CheckboxGroup;
}
interface Ext_form_RadioManager extends Ext_util_MixedCollection {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_Function {
// Cfg
// Properties
// Events
// Methods
   alias(object:any /*Object/Function*/,methodName:String) : Function;
   bind(fn:Function,scope:Object,args:Array,appendArgs:any /*Boolean/Number*/) : Function;
   clone(method:Function) : Function;
   createBuffered(fn:Function,buffer:Number,scope:Object,args:Array) : Function;
   createDelayed(fn:Function,delay:Number,scope:Object,args:Array,appendArgs:any /*Boolean/Number*/) : Function;
   createInterceptor(origFn:Function,newFn:Function,scope:Object,returnValue:Object) : Function;
   createSequence(originalFn:Function,newFn:Function,scope:Object) : Function;
   createThrottled(fn:Function,interval:Number,scope:Object) : Function;
   defer(fn:Function,millis:Number,scope:Object,args:Array,appendArgs:any /*Boolean/Number*/) : Number;
   flexSetter(setter:Function) : Function;
   interceptAfter(object:Object,methodName:String,fn:Function,scope:Object) : Function;
   interceptBefore(object:Object,methodName:String,fn:Function,scope:Object) : Function;
   pass(fn:Function,args:Array,scope:Object) : Function;
}
interface Ext_fx_Anim extends Ext_Base {
// Cfg
   alternate : Boolean;
   callback : Function;
   delay : Number;
   duration : Number;
   dynamic : Boolean;
   easing : String;
   from : Object;
   iterations : Number;
   keyframes : Object;
   reverse : Boolean;
   scope : Function;
   target : any /*String/Object*/;
   to : Object;
// Properties
   currentIteration : Number;
   isAnimation : Boolean;
   paused : Boolean;
   running : Boolean;
   startTime : Date;
// Events
   afteranimate(_this:Ext_fx_Anim,startTime:Date,eOpts:Object) : void;
   beforeanimate(_this:Ext_fx_Anim,eOpts:Object) : void;
   lastframe(_this:Ext_fx_Anim,startTime:Date,eOpts:Object) : void;
// Methods
   end() : void;
}
interface Ext_fx_Animator extends Ext_Base {
// Cfg
   delay : Number;
   duration : Number;
   dynamic : Boolean;
   easing : String;
   iterations : Number;
   keyframes : Object;
   target : Ext_fx_target_Target;
// Properties
   currentIteration : Number;
   isAnimator : Boolean;
   keyframeStep : Number;
   paused : Boolean;
   running : Boolean;
// Events
   afteranimate(_this:Ext_fx_Animator,startTime:Date,eOpts:Object) : void;
   beforeanimate(_this:Ext_fx_Animator,eOpts:Object) : void;
   keyframe(_this:Ext_fx_Animator,keyframe:Number,eOpts:Object) : void;
// Methods
   end() : void;
}
interface Ext_fx_CubicBezier extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_fx_Easing {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_fx_Manager extends Ext_Base {
// Cfg
   forceJS : Boolean;
   interval : Number;
// Properties
// Events
// Methods
   constructor() : Ext_fx_Manager;
   addAnim(anim:Ext_fx_Anim) : void;
   removeAnim(anim:Ext_fx_Anim) : void;
}
interface Ext_fx_PropertyHandler extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_fx_Queue extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor() : Ext_fx_Queue;
}
interface Ext_fx_target_Component extends Ext_fx_target_Target {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_fx_target_CompositeElement extends Ext_fx_target_Element {
// Cfg
// Properties
   isComposite : Boolean;
// Events
// Methods
   constructor(target:any /*Ext.Component/Ext.Element/Ext.draw.Sprite*/) : Ext_fx_target_CompositeElement;
}
interface Ext_fx_target_CompositeElementCSS extends Ext_fx_target_CompositeElement {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_fx_target_CompositeSprite extends Ext_fx_target_Sprite {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_fx_target_Element extends Ext_fx_target_Target {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_fx_target_ElementCSS extends Ext_fx_target_Element {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_fx_target_Sprite extends Ext_fx_target_Target {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_fx_target_Target extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(target:any /*Ext.Component/Ext.Element/Ext.draw.Sprite*/) : Ext_fx_target_Target;
}
interface Ext_grid_CellEditor extends Ext_Editor {
// Cfg
   alignment : String;
   cls : String;
   hideEl : Boolean;
   shadow : any /*Boolean/String*/;
// Properties
// Events
// Methods
   constructor(config:any /*Ext.Element/String/Object*/) : Ext_grid_CellEditor;
}
interface Ext_grid_column_Action extends Ext_grid_column_Column {
// Cfg
   altText : String;
   disabled : Boolean;
   getClass : Function;
   handler : Function;
   icon : String;
   iconCls : String;
   //items : Object[];
   menuText : String;
   scope : Object;
   sortable : Boolean;
   stopSelection : Boolean;
   tooltip : String;
// Properties
   //items : Array;
// Events
// Methods
   constructor(config:any /*Ext.Element/String/Object*/) : Ext_grid_column_Action;
   cascade(fn:Function,scope:Object,args:Array) : Ext_Container;
   defaultRenderer() : void;
   disableAction(index:any /*Number/Ext.grid.column.Action*/,silent:Boolean) : void;
   enableAction(index:any /*Number/Ext.grid.column.Action*/,silent:Boolean) : void;
}
interface Ext_grid_column_Boolean extends Ext_grid_column_Column {
// Cfg
   falseText : String;
   trueText : String;
   undefinedText : String;
// Properties
// Events
// Methods
}
interface Ext_grid_column_Column extends Ext_grid_header_Container {
// Cfg
   align : String;
   baseCls : String;
   columns : Object[];
   componentLayout : any /*String/Object*/;
   dataIndex : String;
   draggable : Boolean;
   editRenderer : Function;
   editor : any /*Object/String*/;
   emptyCellText : String;
   field : any /*Object/String*/;
   fixed : Boolean;
   groupable : Boolean;
   header : String;
   hideable : Boolean;
   locked : Boolean;
   menuDisabled : Boolean;
   menuText : String;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   renderer : any /*Function/String*/;
   resizable : Boolean;
   scope : Object;
   sortable : Boolean;
   stateId : String;
   tdCls : String;
   text : String;
   tooltip : String;
   tooltipType : String;
// Properties
   isHeader : Boolean;
   textEl : Ext_Element;
   triggerEl : Ext_Element;
// Events
// Methods
   afterComponentLayout(width:Number,height:Number,oldWidth:Number,oldHeight:Number) : void;
   afterRender() : void;
   defaultRenderer() : void;
   getEditor(record:Object,defaultField:Object) : Ext_form_field_Field;
   getIndex() : Number;
   getSortParam() : String;
   getVisibleIndex() : Number;
   hide(animateTarget:any /*String/Ext.Element/Ext.Component*/,callback:Function,scope:Object) : Ext_Component;
   initComponent() : void;
   onAdd(component:Ext_Component,position:Number) : void;
   onDestroy() : void;
   onRemove(component:Ext_Component,autoDestroy:Boolean) : void;
   setEditor(field:Object) : void;
   setText(text:String) : void;
   show(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : Ext_Component;
}
interface Ext_grid_column_Date extends Ext_grid_column_Column {
// Cfg
   format : String;
// Properties
// Events
// Methods
   defaultRenderer() : void;
}
interface Ext_grid_column_Number extends Ext_grid_column_Column {
// Cfg
   format : String;
// Properties
// Events
// Methods
}
interface Ext_grid_column_Template extends Ext_grid_column_Column {
// Cfg
   tpl : any /*String/Ext.XTemplate*/;
// Properties
// Events
// Methods
   defaultRenderer() : void;
}
interface Ext_grid_ColumnComponentLayout extends Ext_layout_component_Auto {
// Cfg
   setWidthInDom : Boolean;
// Properties
// Events
// Methods
}
interface Ext_grid_ColumnLayout extends Ext_layout_container_HBox {
// Cfg
// Properties
// Events
// Methods
   beginLayout(ownerContext:Object) : void;
   calculate(ownerContext:Ext_layout_ContextItem) : void;
   completeLayout(ownerContext:Ext_layout_ContextItem) : void;
   finalizeLayout(ownerContext:Ext_layout_ContextItem) : void;
   initLayout() : void;
}
interface Ext_grid_feature_AbstractSummary extends Ext_grid_feature_Feature {
// Cfg
   showSummaryRow : Boolean;
// Properties
// Events
// Methods
   getColumnValue(column:Ext_grid_column_Column,data:Object) : String;
   toggleSummaryRow(visible:Boolean) : void;
}
interface Ext_grid_feature_Chunking extends Ext_grid_feature_Feature {
// Cfg
// Properties
   hasFeatureEvent : Boolean;
// Events
// Methods
   attachEvents() : void;
}
interface Ext_grid_feature_Feature extends Ext_util_Observable {
// Cfg
// Properties
   collectData : Boolean;
   disabled : Boolean;
   eventPrefix : String;
   eventSelector : String;
   grid : Ext_grid_Panel;
   hasFeatureEvent : Boolean;
   view : Ext_view_Table;
// Events
// Methods
   constructor(config:Object) : Ext_grid_feature_Feature;
   attachEvents() : void;
   disable() : void;
   enable() : void;
   getAdditionalData(data:Object,idx:Number,record:Ext_data_Model,orig:Object) : void;
   getFireEventArgs(eventName:Object,view:Object,featureTarget:Object,e:Object) : void;
   getMetaRowTplFragments() : void;
   mutateMetaRowTpl(metaRowTplArray:Array) : void;
}
interface Ext_grid_feature_Grouping extends Ext_grid_feature_Feature {
// Cfg
   collapsible : Boolean;
   depthToIndent : Number;
   enableGroupingMenu : Boolean;
   enableNoGroups : Boolean;
   groupByText : String;
   groupHeaderTpl : any /*String/Array/Ext.Template*/;
   hideGroupedHeader : Boolean;
   showGroupsText : String;
   startCollapsed : Boolean;
// Properties
   eventPrefix : String;
   eventSelector : String;
// Events
   groupclick(view:Ext_view_Table,node:HTMLElement,group:String,e:Ext_EventObject,eOpts:Object) : void;
   groupcollapse(view:Ext_view_Table,node:HTMLElement,group:String,eOpts:Object) : void;
   groupcontextmenu(view:Ext_view_Table,node:HTMLElement,group:String,e:Ext_EventObject,eOpts:Object) : void;
   groupdblclick(view:Ext_view_Table,node:HTMLElement,group:String,e:Ext_EventObject,eOpts:Object) : void;
   groupexpand(view:Ext_view_Table,node:HTMLElement,group:String,eOpts:Object) : void;
// Methods
   constructor() : Ext_grid_feature_Grouping;
   attachEvents() : void;
   collapse(groupName:any /*String/Ext.Element*/,focus:Boolean) : void;
   collapseAll() : void;
   disable() : void;
   enable() : void;
   expand(groupName:any /*String/Ext.Element*/,focus:Boolean) : void;
   expandAll() : void;
   getAdditionalData(data:Object,idx:Number,record:Ext_data_Model,orig:Object) : void;
   getFireEventArgs(eventName:Object,view:Object,featureTarget:Object,e:Object) : void;
   getMetaRowTplFragments() : void;
   isExpanded(groupName:String) : Boolean;
   mutateMetaRowTpl(metaRowTplArray:Array) : void;
}
interface Ext_grid_feature_GroupingSummary extends Ext_grid_feature_Grouping {
// Cfg
   remoteRoot : String;
// Properties
// Events
// Methods
}
interface Ext_grid_feature_RowBody extends Ext_grid_feature_Feature {
// Cfg
// Properties
   eventPrefix : String;
   eventSelector : String;
// Events
// Methods
   getAdditionalData(data:Object,idx:Number,record:Ext_data_Model,orig:Object) : void;
   getMetaRowTplFragments() : void;
   mutateMetaRowTpl(metaRowTplArray:Array) : void;
}
interface Ext_grid_feature_RowWrap extends Ext_grid_feature_Feature {
// Cfg
// Properties
   hasFeatureEvent : Boolean;
// Events
// Methods
   disable() : void;
   enable() : void;
   getAdditionalData(data:Object,idx:Number,record:Ext_data_Model,orig:Object) : void;
   getMetaRowTplFragments() : void;
   mutateMetaRowTpl(metaRowTplArray:Array) : void;
}
interface Ext_grid_feature_Summary extends Ext_grid_feature_AbstractSummary {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_grid_header_Container extends Ext_container_Container {
// Cfg
   baseCls : String;
   border : any /*Number/String/Boolean*/;
   defaultType : String;
   defaultWidth : Number;
   detachOnRemove : Boolean;
   sealed : Boolean;
   sortable : Boolean;
   weight : Number;
// Properties
   isGroupHeader : Boolean;
// Events
   columnhide(ct:Ext_grid_header_Container,column:Ext_grid_column_Column,eOpts:Object) : void;
   columnmove(ct:Ext_grid_header_Container,column:Ext_grid_column_Column,fromIdx:Number,toIdx:Number,eOpts:Object) : void;
   columnresize(ct:Ext_grid_header_Container,column:Ext_grid_column_Column,width:Number,eOpts:Object) : void;
   columnshow(ct:Ext_grid_header_Container,column:Ext_grid_column_Column,eOpts:Object) : void;
   headerclick(ct:Ext_grid_header_Container,column:Ext_grid_column_Column,e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   headertriggerclick(ct:Ext_grid_header_Container,column:Ext_grid_column_Column,e:Ext_EventObject,t:HTMLElement,eOpts:Object) : void;
   menucreate(ct:Ext_grid_header_Container,menu:Ext_menu_Menu,eOpts:Object) : void;
   sortchange(ct:Ext_grid_header_Container,column:Ext_grid_column_Column,direction:String,eOpts:Object) : void;
// Methods
   afterRender() : void;
   getColumnCount() : void;
   getColumnMenu(headerContainer:Object) : void;
   getFullWidth(flushCache:Object) : void;
   getGridColumns(refreshCache:Boolean) : Array;
   getHeaderAtIndex(The:Number) : void;
   getHeaderIndex(header:Ext_grid_column_Column) : Number;
   getMenuItems() : Array;
   getVisibleGridColumns(refreshCache:Boolean) : Array;
   getVisibleHeaderClosestToIndex(index:Number) : void;
   initComponent() : void;
   onAdd(component:Ext_Component,position:Number) : void;
   onDestroy() : void;
   onRemove(component:Ext_Component,autoDestroy:Boolean) : void;
   prepareData(data:Object,rowIdx:Object,record:Object,view:Object,panel:Object) : void;
}
interface Ext_grid_header_DragZone extends Ext_dd_DragZone {
// Cfg
// Properties
// Events
// Methods
   constructor(el:any /*String/HTMLElement/Ext.Element*/,config:Object) : Ext_grid_header_DragZone;
   afterRepair() : void;
   getDragData(e:Event) : Object;
   getRepairXY(e:Event) : Number[];
   onBeforeDrag(data:Object,e:Event) : Boolean;
   onDragDrop(e:Event,id:any /*String/Ext.dd.DragDrop[]*/) : void;
   onInitDrag(x:Number,y:Number) : Boolean;
}
interface Ext_grid_header_DropZone extends Ext_dd_DropZone {
// Cfg
// Properties
// Events
// Methods
   constructor(el:any /*String/HTMLElement/Ext.Element*/,config:Object) : Ext_grid_header_DropZone;
   getTargetFromEvent(e:Event) : Object;
   onNodeDrop(nodeData:Object,source:Ext_dd_DragSource,e:Event,data:Object) : Boolean;
   onNodeOut(nodeData:Object,source:Ext_dd_DragSource,e:Event,data:Object) : void;
   onNodeOver(nodeData:Object,source:Ext_dd_DragSource,e:Event,data:Object) : String;
}
interface Ext_grid_Lockable extends Ext_Base {
// Cfg
   lockedGridConfig : Object;
   lockedViewConfig : Object;
   normalGridConfig : Object;
   normalViewConfig : Object;
   scrollDelta : Number;
   subGridXType : String;
   syncRowHeight : Boolean;
// Properties
// Events
   lockcolumn(_this:Ext_grid_Panel,column:Ext_grid_column_Column,eOpts:Object) : void;
   unlockcolumn(_this:Ext_grid_Panel,column:Ext_grid_column_Column,eOpts:Object) : void;
// Methods
   cloneFeatures() : void;
   clonePlugins() : void;
   syncRowHeights() : void;
}
interface Ext_grid_LockingView extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_grid_LockingView;
}
interface Ext_grid_PagingScroller extends Ext_Base {
// Cfg
   leadingBufferZone : Number;
   numFromEdge : Number;
   percentageFromEdge : Number;
   scrollToLoadBuffer : Number;
   trailingBufferZone : Number;
// Properties
   position : Number;
// Events
// Methods
   constructor(config:Object) : Ext_grid_PagingScroller;
}
interface Ext_grid_Panel extends Ext_panel_Table {
// Cfg
   columns : any /*Ext.grid.column.Column[]/Object*/;
   rowLines : Boolean;
   viewType : String;
// Properties
// Events
   reconfigure(_this:Ext_grid_Panel,store:Ext_data_Store,columns:Object[],eOpts:Object) : void;
// Methods
   reconfigure(store:Ext_data_Store,columns:Object[]) : void;
}
interface Ext_grid_plugin_CellEditing extends Ext_grid_plugin_Editing {
// Cfg
// Properties
// Events
   beforeedit(editor:Ext_grid_plugin_CellEditing,e:Object,eOpts:Object) : void;
   canceledit(editor:Ext_grid_plugin_CellEditing,e:Object,eOpts:Object) : void;
   edit(editor:Ext_grid_plugin_CellEditing,e:Object,eOpts:Object) : void;
   validateedit(editor:Ext_grid_plugin_CellEditing,e:Object,eOpts:Object) : void;
// Methods
   constructor() : Ext_grid_plugin_CellEditing;
   cancelEdit() : void;
   completeEdit() : void;
   startEdit(record:Ext_data_Model,columnHeader:Ext_grid_column_Column) : void;
   startEditByPosition(position:Object) : void;
}
interface Ext_grid_plugin_DragDrop extends Ext_AbstractPlugin {
// Cfg
   ddGroup : String;
   dragGroup : String;
   dragText : String;
   dropGroup : String;
   enableDrag : Boolean;
   enableDrop : Boolean;
// Properties
// Events
   beforedrop(node:HTMLElement,data:Object,overModel:Ext_data_Model,dropPosition:String,dropFunction:Function,eOpts:Object) : void;
   drop(node:HTMLElement,data:Object,overModel:Ext_data_Model,dropPosition:String,eOpts:Object) : void;
// Methods
   disable() : void;
   enable() : void;
   init(client:Ext_Component) : void;
}
interface Ext_grid_plugin_Editing extends Ext_AbstractPlugin {
// Cfg
   clicksToEdit : Number;
   triggerEvent : String;
// Properties
   editing : Boolean;
// Events
   beforeedit(editor:Ext_grid_plugin_Editing,e:Object,eOpts:Object) : void;
   canceledit(editor:Ext_grid_plugin_Editing,e:Object,eOpts:Object) : void;
   edit(editor:Ext_grid_plugin_Editing,e:Object,eOpts:Object) : void;
   validateedit(editor:Ext_grid_plugin_Editing,e:Object,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_grid_plugin_Editing;
   cancelEdit() : void;
   completeEdit() : void;
   init(client:Ext_Component) : void;
   startEdit(record:any /*Ext.data.Model/Number*/,columnHeader:any /*Ext.grid.column.Column/Number*/) : void;
}
interface Ext_grid_plugin_HeaderReorderer extends Ext_AbstractPlugin {
// Cfg
// Properties
// Events
// Methods
   disable() : void;
   enable() : void;
   init(client:Ext_Component) : void;
}
interface Ext_grid_plugin_HeaderResizer extends Ext_AbstractPlugin {
// Cfg
   dynamic : Boolean;
// Properties
// Events
// Methods
   disable() : void;
   enable() : void;
   getDynamic() : Boolean;
   init(client:Ext_Component) : void;
   setDynamic(dynamic:Boolean) : void;
}
interface Ext_grid_plugin_RowEditing extends Ext_grid_plugin_Editing {
// Cfg
   autoCancel : Boolean;
   clicksToMoveEditor : Number;
   errorSummary : Boolean;
// Properties
// Events
// Methods
   constructor() : Ext_grid_plugin_RowEditing;
   cancelEdit() : void;
   completeEdit() : void;
   init(client:Ext_Component) : void;
   startEdit(record:Ext_data_Model,columnHeader:Ext_data_Model) : void;
}
interface Ext_grid_property_Grid extends Ext_grid_Panel {
// Cfg
   columnLines : Boolean;
   customEditors : Object;
   customRenderers : Object;
   enableColumnMove : Boolean;
   nameColumnWidth : Number;
   nameField : String;
   propertyNames : Object;
   source : Object;
   valueField : String;
// Properties
// Events
   beforepropertychange(source:Object,recordId:String,value:Object,oldValue:Object,eOpts:Object) : void;
   propertychange(source:Object,recordId:String,value:Object,oldValue:Object,eOpts:Object) : void;
// Methods
   beforeDestroy() : void;
   getSource() : Object;
   initComponent() : void;
   removeProperty(prop:String) : void;
   setProperty(prop:String,value:Object,create:Boolean) : void;
   setSource(source:Object) : void;
}
interface Ext_grid_property_HeaderContainer extends Ext_grid_header_Container {
// Cfg
// Properties
// Events
// Methods
   constructor(grid:Ext_grid_property_Grid,source:Object) : Ext_grid_property_HeaderContainer;
}
interface Ext_grid_property_Property extends Ext_data_Model {
// Cfg
   idProperty : String;
// Properties
   fields : Ext_util_MixedCollection;
// Events
// Methods
   constructor(config:Object) : Object;
}
interface Ext_grid_property_Store extends Ext_data_Store {
// Cfg
   sortOnLoad : Boolean;
// Properties
// Events
// Methods
   constructor(grid:Ext_grid_Panel,source:Object) : Ext_grid_property_Store;
   getProxy() : Ext_data_proxy_Proxy;
   remove(records:any /*Ext.data.Model/Ext.data.Model[]*/) : void;
}
interface Ext_grid_RowEditor extends Ext_form_Panel {
// Cfg
   border : any /*Number/String/Boolean*/;
   hideMode : String;
// Properties
// Events
// Methods
   afterRender() : void;
   beforeDestroy() : void;
   initComponent() : void;
   loadRecord(record:Ext_data_Model) : Ext_form_Basic;
   onHide(animateTarget:any /*String/Ext.Element/Ext.Component*/,callback:Function,scope:Object) : void;
   onShow(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : void;
   startEdit(record:Ext_data_Model,columnHeader:Ext_data_Model) : void;
}
interface Ext_grid_RowNumberer extends Ext_grid_column_Column {
// Cfg
   align : String;
   cls : String;
   dataIndex : String;
   draggable : Boolean;
   hideable : Boolean;
   menuDisabled : Boolean;
   resizable : Boolean;
   text : String;
   width : Number;
// Properties
// Events
// Methods
   constructor(config:any /*Ext.Element/String/Object*/) : Ext_grid_RowNumberer;
}
interface Ext_grid_View extends Ext_view_Table {
// Cfg
   autoScroll : Boolean;
   stripeRows : Boolean;
// Properties
// Events
// Methods
}
interface Ext_grid_ViewDropZone extends Ext_view_DropZone {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_Img extends Ext_Component {
// Cfg
   alt : String;
   autoEl : any /*String/Object*/;
   imgCls : String;
   src : String;
// Properties
// Events
// Methods
   onDestroy() : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   setSrc(src:String) : void;
}
interface Ext_is {
// Cfg
// Properties
   Android : Boolean;
   Blackberry : Boolean;
   Desktop : Boolean;
   Linux : Boolean;
   Mac : Boolean;
   Phone : Boolean;
   Standalone : Boolean;
   Tablet : Object;
   Windows : Boolean;
   iOS : Boolean;
   iPad : Boolean;
   iPhone : Boolean;
   iPod : Boolean;
// Events
// Methods
}
interface Ext {
// Cfg
// Properties
   BLANK_IMAGE_URL : String;
   SSL_SECURE_URL : String;
   USE_NATIVE_JSON : Boolean;
   chromeVersion : Number;
   emptyFn : Object;
   emptyString : Object;
   enableFx : Boolean;
   enableGarbageCollector : Boolean;
   enableListenerCollection : Boolean;
   enableNestedListenerRemoval : Boolean;
   enumerables : String[];
   firefoxVersion : Number;
   ieVersion : Number;
   isChrome : Boolean;
   isFF10 : Boolean;
   isFF3_0 : Boolean;
   isFF3_5 : Boolean;
   isFF3_6 : Boolean;
   isFF4 : Boolean;
   isFF5 : Boolean;
   isGecko : Boolean;
   isGecko10 : Boolean;
   isGecko3 : Boolean;
   isGecko4 : Boolean;
   isGecko5 : Boolean;
   isIE : Boolean;
   isIE6 : Boolean;
   isIE7 : Boolean;
   isIE8 : Boolean;
   isIE9 : Boolean;
   isLinux : Boolean;
   isMac : Boolean;
   isOpera : Boolean;
   isOpera10_5 : Boolean;
   isReady : Boolean;
   isSafari : Boolean;
   isSafari2 : Boolean;
   isSafari3 : Boolean;
   isSafari4 : Boolean;
   isSafari5 : Boolean;
   isSafari5_0 : Boolean;
   isSecure : Boolean;
   isWebKit : Boolean;
   isWindows : Boolean;
   name : String;
   operaVersion : Number;
   resetCls : String;
   safariVersion : Number;
   scopeResetCSS : Boolean;
   useShims : Boolean;
   webKitVersion : Number;
// Events
// Methods
   addBehaviors(obj:Object) : void;
   application(config:Object) : void;
   apply(object:Object,config:Object,defaults:Object) : Object;
   applyIf(object:Object,config:Object) : Object;
   batchLayouts(fn:Function,scope:Object) : void;
   bind(fn:Function,scope:Object,args:Array,appendArgs:any /*Boolean/Number*/) : Function;
   callback(callback:Function,scope:Object,args:Array,delay:Number) : void;
   clean(array:Array) : Array;
   clone(item:Object) : Object;
   copyTo(dest:Object,source:Object,names:any /*String/String[]*/,usePrototypeKeys:Boolean) : Object;
   create(name:String,args:Object[]) : Object;
   createByAlias() : void;
   createWidget() : void;
   decode(json:String,safe:Boolean) : Object;
   defer(fn:Function,millis:Number,scope:Object,args:Array,appendArgs:any /*Boolean/Number*/) : Number;
   define(className:String,data:Object,createdFn:Function) : Ext_Base;
   deprecate(packageName:String,since:String,closure:Function,scope:Object) : void;
   destroy(args:any /*Ext.Element/Ext.Component/Ext.Element[]/Ext.Component[]...*/) : void;
   destroyMembers(o:Object,args:String[]) : void;
   each(iterable:any /*Array/NodeList/Object*/,fn:Function,scope:Object,reverse:Boolean) : Boolean;
   encode(o:Object) : String;
   escapeRe(str:String) : String;
   exclude() : void;
   extend(superclass:Function,overrides:Object) : Function;
   flatten(array:Array) : Array;
   fly(dom:any /*String/HTMLElement*/,named:String) : Ext_dom_AbstractElement_Fly;
   get(el:any /*String/HTMLElement/Ext.Element*/) : Ext_dom_Element;
   getBody() : void;
   getClass() : void;
   getClassName() : void;
   getCmp(id:String) : void;
   getDoc() : void;
   getDom(el:any /*String/HTMLElement/Ext.Element*/) : void;
   getHead() : void;
   getOrientation() : String;
   getScrollBarWidth(force:Boolean) : Number;
   getScrollbarSize(force:Boolean) : Object;
   getStore(store:any /*String/Object*/) : Ext_data_Store;
   getVersion(packageName:String) : Ext_Version;
   htmlDecode(value:String) : String;
   htmlEncode(value:String) : String;
   id(el:any /*HTMLElement/Ext.Element*/,prefix:String) : String;
   invoke(arr:any /*Array/NodeList*/,methodName:String,args:Object[]) : Array;
   isArray(target:Object) : Boolean;
   isBoolean(value:Object) : Boolean;
   isDate(object:Object) : Boolean;
   isDefined(value:Object) : Boolean;
   isElement(value:Object) : Boolean;
   isEmpty(value:Object,allowEmptyString:Boolean) : Boolean;
   isFunction(value:Object) : Boolean;
   isIterable(value:Object) : Boolean;
   isNumber(value:Object) : Boolean;
   isNumeric(value:Object) : Boolean;
   isObject(value:Object) : Boolean;
   isPrimitive(value:Object) : Boolean;
   isString(value:Object) : Boolean;
   isTextNode(value:Object) : Boolean;
   iterate(object:any /*Object/Array*/,fn:Function,scope:Object) : void;
   log(options:any /*String/Object*/,message:String[]) : void;
   max(array:any /*Array/NodeList*/,comparisonFn:Function) : Object;
   mean(array:Array) : Number;
   merge(destination:Object,object:Object[]) : Object;
   min(array:any /*Array/NodeList*/,comparisonFn:Function) : Object;
   namespace(namespaces:String[]) : Object;
   ns(namespaces:String[]) : Object;
   num(value:Object,defaultValue:Number) : Number;
   onDocumentReady() : void;
   onReady() : void;
   override(target:Object,overrides:Object) : void;
   partition(arr:any /*Array/NodeList*/,truth:Function) : Array;
   pass(fn:Function,args:Array,scope:Object) : Function;
   pluck(array:any /*Array/NodeList*/,propertyName:String) : Array;
   preg(ptype:String,cls:Function) : void;
   query(path:String,root:HTMLElement,type:String) : HTMLElement[];
   regModel(name:String,config:Object) : Ext_data_Model;
   regStore(id:String,config:Object) : void;
   removeNode(node:HTMLElement) : void;
   require() : void;
   resumeLayouts(flush:Object) : void;
   select(selector:String,unique:Boolean) : Ext_CompositeElement;
   setVersion(packageName:String,version:any /*String/Ext.Version*/) : Ext;
   sum(array:Array) : Number;
   suspendLayouts() : void;
   syncRequire() : void;
   toArray(iterable:Object,start:Number,end:Number) : Array;
   toSentence(items:String[],connector:String) : String;
   type(value:Object) : String;
   typeOf(value:Object) : String;
   unique(array:Array) : Array;
   urlAppend(url:String,string:String) : String;
   urlDecode(queryString:String,recursive:Boolean) : Object;
   urlEncode(object:Object,recursive:Boolean) : String;
   value(value:Object,defaultValue:Object,allowBlank:Boolean) : Object;
   valueFrom(value:Object,defaultValue:Object,allowBlank:Boolean) : Object;
   widget(name:String,config:Object) : Object;
   zip(arr:any /*Array/NodeList...*/,zipper:Function) : Array;
}
interface Ext_JSON {
// Cfg
// Properties
// Events
// Methods
   decode(json:String,safe:Boolean) : Object;
   encode(o:Object) : String;
   encodeDate(d:Date) : String;
   encodeString(s:String) : String;
   encodeValue(o:Object) : String;
}
interface Ext_Layer extends Ext_Element {
// Cfg
   cls : String;
   constrain : Boolean;
   dh : Object;
   hideMode : String;
   shadow : any /*String/Boolean*/;
   shadowOffset : Number;
   shim : Boolean;
   useDisplay : Boolean;
   visibilityCls : String;
   zindex : Number;
// Properties
// Events
// Methods
   constructor(config:Object,existingEl:any /*String/HTMLElement*/) : Ext_Layer;
   remove() : void;
   setBounds(x:Number,y:Number,width:any /*Number/String*/,height:any /*Number/String*/,animate:any /*Boolean/Object*/) : Ext_dom_AbstractElement;
   setHeight(height:any /*Number/String*/,animate:any /*Boolean/Object*/) : Ext_dom_Element;
   setLeft(left:String) : Ext_dom_AbstractElement;
   setLeftTop(left:String,top:String) : Ext_dom_Element;
   setSize(width:any /*Number/String*/,height:any /*Number/String*/,animate:any /*Boolean/Object*/) : Ext_dom_Element;
   setTop(top:String) : Ext_dom_AbstractElement;
   setVisible(visible:Boolean,animate:any /*Boolean/Object*/) : Ext_dom_Element;
   setWidth(width:any /*Number/String*/,animate:any /*Boolean/Object*/) : Ext_dom_Element;
   setX(The:Number,animate:any /*Boolean/Object*/) : Ext_dom_AbstractElement;
   setXY(pos:Number[],animate:any /*Boolean/Object*/) : Ext_Element;
   setY(The:Number,animate:any /*Boolean/Object*/) : Ext_dom_AbstractElement;
   setZIndex(zindex:Number) : Ext_Layer;
}
interface Ext_layout_ClassList extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   add(cls:Object) : void;
   addMany(classes:Object) : void;
   remove(cls:Object) : void;
   removeMany(classes:Object) : void;
}
interface Ext_layout_component_Auto extends Ext_layout_component_Component {
// Cfg
   setHeightInDom : Boolean;
   setWidthInDom : Boolean;
// Properties
// Events
// Methods
   beginLayoutCycle(ownerContext:Ext_layout_ContextItem) : void;
   calculate(ownerContext:Ext_layout_ContextItem) : void;
}
interface Ext_layout_component_Body extends Ext_layout_component_Auto {
// Cfg
// Properties
// Events
// Methods
   beginLayout(ownerContext:Ext_layout_ContextItem) : void;
}
interface Ext_layout_component_BoundList extends Ext_layout_component_Auto {
// Cfg
// Properties
// Events
// Methods
   beginLayout(ownerContext:Ext_layout_ContextItem) : void;
   beginLayoutCycle(ownerContext:Ext_layout_ContextItem) : void;
   finishedLayout(ownerContext:Ext_layout_ContextItem) : void;
   getLayoutItems() : void;
   isValidParent(item:Object,target:Object,position:Object) : void;
}
interface Ext_layout_component_Button extends Ext_layout_component_Auto {
// Cfg
// Properties
// Events
// Methods
   constructor() : Ext_layout_component_Button;
   beginLayout(ownerContext:Ext_layout_ContextItem) : void;
   beginLayoutCycle(ownerContext:Ext_layout_ContextItem) : void;
   finishedLayout(ownerContext:Ext_layout_ContextItem) : void;
}
interface Ext_layout_component_Component extends Ext_layout_Layout {
// Cfg
// Properties
// Events
// Methods
   beginLayoutCycle(ownerContext:Ext_layout_ContextItem) : void;
   finishedLayout(ownerContext:Ext_layout_ContextItem) : void;
   getRenderTarget() : Ext_Element;
   getTarget() : Ext_Element;
   notifyOwner(ownerContext:Ext_layout_ContextItem) : void;
}
interface Ext_layout_component_Dock extends Ext_layout_component_Component {
// Cfg
// Properties
// Events
// Methods
   afterRemove(item:Object) : void;
   beginLayout(ownerContext:Ext_layout_ContextItem) : void;
   beginLayoutCycle(ownerContext:Ext_layout_ContextItem) : void;
   calculate(ownerContext:Ext_layout_ContextItem) : void;
   configureItem(item:Ext_Component) : void;
   finishedLayout(ownerContext:Ext_layout_ContextItem) : void;
   getDockedItems(order:String,beforeBody:Boolean) : Ext_Component[];
   getItemSizePolicy(item:Ext_Component) : Object;
   getLayoutItems() : Array;
   renderItems(items:Object,target:Object) : void;
}
interface Ext_layout_component_Draw extends Ext_layout_component_Auto {
// Cfg
// Properties
// Events
// Methods
   finishedLayout(ownerContext:Ext_layout_ContextItem) : void;
}
interface Ext_layout_component_field_ComboBox extends Ext_layout_component_field_Trigger {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_layout_component_field_Field extends Ext_layout_component_Auto {
// Cfg
// Properties
   elementId : Object;
   errorStrategies : Object;
   labelStrategies : Object;
   left : Object;
   qtip : Object;
   right : Object;
   side : Object;
   title : Object;
   top : Object;
   under : Object;
// Events
// Methods
   beginLayout(ownerContext:Ext_layout_ContextItem) : void;
   finishedLayout(ownerContext:Ext_layout_ContextItem) : void;
   getErrorStrategy() : void;
   getLabelStrategy() : void;
}
interface Ext_layout_component_field_FieldContainer extends Ext_layout_component_field_Field {
// Cfg
// Properties
// Events
// Methods
   beginLayout(ownerContext:Ext_layout_ContextItem) : void;
}
interface Ext_layout_component_field_HtmlEditor extends Ext_layout_component_field_Field {
// Cfg
// Properties
// Events
// Methods
   beginLayout(ownerContext:Ext_layout_ContextItem) : void;
   getItemSizePolicy(item:Ext_Component) : Object;
   getLayoutItems() : void;
   getRenderTarget() : Ext_Element;
   renderItems(items:Object,target:Object) : void;
}
interface Ext_layout_component_field_Slider extends Ext_layout_component_field_Field {
// Cfg
// Properties
// Events
// Methods
   beginLayout(ownerContext:Ext_layout_ContextItem) : void;
}
interface Ext_layout_component_field_Text extends Ext_layout_component_field_Field {
// Cfg
// Properties
// Events
// Methods
   beginLayoutCycle(ownerContext:Ext_layout_ContextItem) : void;
}
interface Ext_layout_component_field_TextArea extends Ext_layout_component_field_Text {
// Cfg
// Properties
// Events
// Methods
   beginLayout(ownerContext:Ext_layout_ContextItem) : void;
}
interface Ext_layout_component_field_Trigger extends Ext_layout_component_field_Field {
// Cfg
// Properties
// Events
// Methods
   beginLayout(ownerContext:Ext_layout_ContextItem) : void;
}
interface Ext_layout_component_FieldSet extends Ext_layout_component_Body {
// Cfg
// Properties
// Events
// Methods
   beginLayoutCycle(ownerContext:Ext_layout_ContextItem) : void;
   getLayoutItems() : void;
}
interface Ext_layout_component_ProgressBar extends Ext_layout_component_Auto {
// Cfg
// Properties
// Events
// Methods
   beginLayout(ownerContext:Ext_layout_ContextItem) : void;
   calculate(ownerContext:Ext_layout_ContextItem) : void;
}
interface Ext_layout_component_Tab extends Ext_layout_component_Button {
// Cfg
// Properties
// Events
// Methods
   beginLayout(ownerContext:Ext_layout_ContextItem) : void;
}
interface Ext_layout_container_Absolute extends Ext_layout_container_Anchor {
// Cfg
   ignoreOnContentChange : Boolean;
   itemCls : String;
// Properties
// Events
// Methods
   beginLayout(ownerContext:Object) : void;
   onContentChange(child:Ext_Component) : Boolean;
}
interface Ext_layout_container_Accordion extends Ext_layout_container_VBox {
// Cfg
   activeOnTop : Boolean;
   align : String;
   animate : Boolean;
   autoWidth : Boolean;
   collapseFirst : Boolean;
   fill : Boolean;
   hideCollapseTool : Boolean;
   itemCls : String;
   multi : Boolean;
   titleCollapse : Boolean;
// Properties
// Events
// Methods
   constructor() : Ext_layout_container_Accordion;
   beginLayout(ownerContext:Object) : void;
   configureItem(item:Object) : void;
   renderItems(items:Object,target:Object) : void;
}
interface Ext_layout_container_Anchor extends Ext_layout_container_Container {
// Cfg
   anchor : String;
   defaultAnchor : String;
   manageOverflow : Number;
// Properties
// Events
// Methods
   beginLayout(ownerContext:Object) : void;
   calculate(ownerContext:Ext_layout_ContextItem) : void;
   configureItem(item:Object) : void;
   finishedLayout(ownerContext:Ext_layout_ContextItem) : void;
   getItemSizePolicy(item:Ext_Component) : Object;
}
interface Ext_layout_container_Auto extends Ext_layout_container_Container {
// Cfg
// Properties
// Events
// Methods
   calculate(ownerContext:Ext_layout_ContextItem) : void;
}
interface Ext_layout_container_Border extends Ext_layout_container_Container {
// Cfg
   itemCls : String;
   padding : any /*Number/String/Object*/;
   regionWeights : Object;
   split : Boolean;
   splitterResize : Boolean;
// Properties
// Events
// Methods
   beginLayout(ownerContext:Object) : void;
   calculate(ownerContext:Ext_layout_ContextItem) : void;
   getItemSizePolicy(item:Ext_Component) : Object;
}
interface Ext_layout_container_Box extends Ext_layout_container_Container {
// Cfg
   defaultMargins : Object;
   flex : Number;
   itemCls : String;
   pack : String;
   padding : String;
   stretchMaxPartner : any /*String/Ext.Component*/;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_layout_container_Box;
   beginLayout(ownerContext:Object) : void;
   beginLayoutCycle(ownerContext:Ext_layout_ContextItem) : void;
   cacheFlexes(ownerContext:Object) : void;
   calculate(ownerContext:Ext_layout_ContextItem) : void;
   completeLayout(ownerContext:Ext_layout_ContextItem) : void;
   finishedLayout(ownerContext:Ext_layout_ContextItem) : void;
   getElementTarget() : Ext_Element;
   getItemSizePolicy(item:Ext_Component) : Object;
   getRenderTarget() : Ext_Element;
}
interface Ext_layout_container_boxOverflow_Menu extends Ext_layout_container_boxOverflow_None {
// Cfg
   triggerButtonCls : String;
// Properties
   menuItems : Array;
   noItemsMenuText : String;
// Events
// Methods
   constructor(layout:Object) : Ext_layout_container_boxOverflow_Menu;
}
interface Ext_layout_container_boxOverflow_None extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(layout:Object,config:Object) : Ext_layout_container_boxOverflow_None;
}
interface Ext_layout_container_boxOverflow_Scroller extends Ext_layout_container_boxOverflow_None {
// Cfg
   afterCtCls : String;
   afterScrollerCls : String;
   animateScroll : Boolean;
   beforeCtCls : String;
   beforeScrollerCls : String;
   scrollDuration : Number;
   scrollIncrement : Number;
   scrollRepeatInterval : Number;
   scrollerCls : String;
   wheelIncrement : Number;
// Properties
// Events
   scroll(scroller:Ext_layout_container_boxOverflow_Scroller,newPosition:Number,animate:any /*Boolean/Object*/,eOpts:Object) : void;
// Methods
   getScrollPosition() : Number;
   scrollToItem(item:any /*String/Number/Ext.Component*/,animate:Boolean) : void;
}
interface Ext_layout_container_Card extends Ext_layout_container_Fit {
// Cfg
   deferredRender : Boolean;
// Properties
// Events
// Methods
   getActiveItem() : Ext_Component;
   getNext() : Ext_Component;
   getPrev() : Ext_Component;
   isValidParent(item:Object,target:Object,position:Object) : void;
   next() : Ext_Component;
   prev() : Ext_Component;
   setActiveItem(newCard:any /*Ext.Component/Number/String*/) : Ext_Component;
}
interface Ext_layout_container_CheckboxGroup extends Ext_layout_container_Container {
// Cfg
   autoFlex : Boolean;
// Properties
// Events
// Methods
   beginLayout(ownerContext:Object) : void;
   calculate(ownerContext:Ext_layout_ContextItem) : void;
   getItemSizePolicy(item:Ext_Component) : Object;
   initLayout() : void;
   isValidParent(item:Object,target:Object,position:Object) : void;
   renderItems(items:Object) : void;
}
interface Ext_layout_container_Column extends Ext_layout_container_Container {
// Cfg
   itemCls : String;
   manageOverflow : Number;
// Properties
// Events
// Methods
   beginLayout(ownerContext:Object) : void;
   calculate(ownerContext:Ext_layout_ContextItem) : void;
   finishedLayout(ownerContext:Ext_layout_ContextItem) : void;
   getItemSizePolicy(item:Ext_Component) : Object;
   getRenderTarget() : Ext_Element;
}
interface Ext_layout_container_Container extends Ext_layout_Layout {
// Cfg
   itemCls : String;
   manageOverflow : Number;
   reserveScrollbar : Boolean;
// Properties
   getScrollRangeFlags : Object;
   overflowPadderEl : Ext_Element;
// Events
// Methods
   constructor() : Ext_layout_container_Container;
   beginLayout(ownerContext:Object) : void;
   beginLayoutCycle(ownerContext:Ext_layout_ContextItem) : void;
   calculateOverflow(ownerContext:Ext_layout_ContextItem,containerSize:Object,dimensions:Number) : void;
   completeLayout(ownerContext:Ext_layout_ContextItem) : void;
   configureItem(item:Object) : void;
   doRenderPadder(out:Object,renderData:Object) : void;
   getContainerSize(ownerContext:Ext_layout_ContextItem,inDom:Boolean) : Object;
   getElementTarget() : Ext_Element;
   getLayoutItems() : Ext_Component[];
   getRenderTarget() : Ext_Element;
   getRenderedItems() : Array;
   getTarget() : Ext_Element;
   getVisibleItems() : Array;
   initLayout() : void;
}
interface Ext_layout_container_Editor extends Ext_layout_container_Container {
// Cfg
// Properties
// Events
// Methods
   calculate(ownerContext:Ext_layout_ContextItem) : void;
   getItemSizePolicy(item:Ext_Component) : Object;
}
interface Ext_layout_container_Fit extends Ext_layout_container_Container {
// Cfg
   defaultMargins : Object;
   itemCls : String;
// Properties
// Events
// Methods
   beginLayoutCycle(ownerContext:Ext_layout_ContextItem) : void;
   calculate(ownerContext:Ext_layout_ContextItem) : void;
   getItemSizePolicy(item:Ext_Component) : Object;
}
interface Ext_layout_container_Form extends Ext_layout_container_Auto {
// Cfg
   manageOverflow : Number;
// Properties
// Events
// Methods
   calculate(ownerContext:Ext_layout_ContextItem) : void;
   getItemSizePolicy(item:Ext_Component) : Object;
   getRenderTarget() : Ext_Element;
   isValidParent(item:Object,target:Object,position:Object) : void;
}
interface Ext_layout_container_HBox extends Ext_layout_container_Box {
// Cfg
   align : String;
// Properties
// Events
// Methods
}
interface Ext_layout_container_Table extends Ext_layout_container_Container {
// Cfg
   columns : Number;
   tableAttrs : Object;
   tdAttrs : Object;
   trAttrs : Object;
// Properties
// Events
// Methods
   calculate(ownerContext:Ext_layout_ContextItem) : void;
   finalizeLayout(ownerContext:Ext_layout_ContextItem) : void;
   getItemSizePolicy(item:Ext_Component) : Object;
   getLayoutItems() : Ext_Component[];
   isValidParent(item:Object,target:Object,position:Object) : void;
}
interface Ext_layout_container_VBox extends Ext_layout_container_Box {
// Cfg
   align : String;
// Properties
// Events
// Methods
}
interface Ext_layout_Context extends Ext_Base {
// Cfg
// Properties
   layoutQueue : Ext_util_Queue;
   state : Number;
// Events
// Methods
   constructor(config:Object) : Ext_layout_Context;
   flush() : void;
   getCmp(cmp:Ext_Component) : void;
   getEl(parent:Ext_layout_ContextItem,el:Ext_dom_Element) : void;
   invalidate(components:any /*Ext.Component/Array*/,ownerCtContext:Ext_layout_ContextItem,full:Boolean) : void;
   resetLayout(layout:Object,ownerContext:Object,firstTime:Object) : void;
   run() : Boolean;
   runCycle() : Boolean;
   setItemSize(item:any /*Ext.Component/Ext.Component[]/Ext.dom.Element/Ext.dom.Element[]/Ext.dom.CompositeElement*/,width:Number,height:Number) : void;
}
interface Ext_layout_ContextItem extends Ext_Base {
// Cfg
// Properties
   state : Object;
   wrapsComponent : Boolean;
// Events
// Methods
   constructor(config:Object) : Ext_layout_ContextItem;
   addCls(newCls:Object) : void;
   block(layout:Ext_layout_Layout,propName:String) : void;
   clearMarginCache() : void;
   domBlock(layout:Ext_layout_Layout,propName:String) : void;
   flush() : void;
   getBorderInfo() : Object;
   getClassList() : void;
   getDomProp(propName:String) : Object;
   getEl(nameOrEl:Object,owner:Object) : void;
   getFrameInfo() : Object;
   getMarginInfo() : Object;
   getPaddingInfo() : Object;
   getProp(propName:String) : Object;
   getStyle(styleName:String) : Object;
   getStyles(styleNames:String[],altNames:String[]) : Object;
   hasDomProp(propName:String) : Boolean;
   hasProp(propName:String) : Boolean;
   invalidate(options:Object) : void;
   recoverProp(propName:String,oldProps:Object,oldDirty:Object) : void;
   removeCls(removeCls:Object) : void;
   setAttribute(name:Object,value:Object) : void;
   setContentHeight(height:Object,measured:Object) : void;
   setContentSize(width:Object,height:Object,measured:Object) : void;
   setContentWidth(width:Object,measured:Object) : void;
   setHeight(height:Number,dirty:Boolean) : Number;
   setProp(propName:String,value:Object,dirty:Boolean) : Number;
   setWidth(width:Number,dirty:Boolean) : Number;
}
interface Ext_layout_Layout extends Ext_Base {
// Cfg
// Properties
   done : Boolean;
   isLayout : Boolean;
// Events
// Methods
   constructor(config:Object) : Ext_layout_Layout;
   afterRemove(item:Object) : void;
   beginLayout(ownerContext:Ext_layout_ContextItem) : void;
   beginLayoutCycle(ownerContext:Ext_layout_ContextItem) : void;
   calculate(ownerContext:Ext_layout_ContextItem) : void;
   completeLayout(ownerContext:Ext_layout_ContextItem) : void;
   configureItem(item:Ext_Component) : void;
   destroy() : void;
   finalizeLayout(ownerContext:Ext_layout_ContextItem) : void;
   finishedLayout(ownerContext:Ext_layout_ContextItem) : void;
   getItemSizePolicy(item:Ext_Component) : Object;
   getLayoutItems() : void;
   initLayout() : void;
   isValidParent(item:Object,target:Object,position:Object) : void;
   notifyOwner(ownerContext:Ext_layout_ContextItem) : void;
   onContentChange(child:Ext_Component) : Boolean;
   renderItems(items:Object,target:Object) : void;
}
interface Ext_layout_SizeModel {
// Cfg
// Properties
   auto : Boolean;
   calculated : Boolean;
   calculatedFromConfigured : Boolean;
   calculatedFromNatural : Boolean;
   calculatedFromShrinkWrap : Boolean;
   configured : Boolean;
   constrainedMax : Boolean;
   constrainedMin : Boolean;
   fixed : Boolean;
   name : String;
   names : Object;
   natural : Boolean;
   ordinal : Object;
   pairsByHeightOrdinal : Object[];
   shrinkWrap : Boolean;
// Events
// Methods
}
interface Ext_Loader {
// Cfg
   disableCaching : Boolean;
   disableCachingParam : String;
   enabled : Boolean;
   garbageCollect : Boolean;
   paths : Object;
   preserveScripts : Boolean;
   scriptChainDelay : Boolean;
   scriptCharset : String;
// Properties
   history : Array;
// Events
// Methods
   addClassPathMappings(paths:Object ) : Ext_Loader;
   exclude(excludes:Array) : Object;
   getConfig(name:String) : Object;
   getPath(className:String) : String;
   loadScript(options:any /*Object/String*/) : void;
   onReady(fn:Function,scope:Object,withDomReady:Boolean) : void;
   require(expressions:any /*String/Array*/,fn:Function,scope:Object,excludes:any /*String/Array*/) : void;
   setConfig(config:Object) : Ext_Loader;
   setPath(name:any /*String/Object*/,path:String) : Ext_Loader;
   syncRequire(expressions:any /*String/Array*/,fn:Function,scope:Object,excludes:any /*String/Array*/) : void;
}
interface Ext_LoadMask extends Ext_Component {
// Cfg
   baseCls : String;
   floating : Boolean;
   focusOnToFront : Boolean;
   maskCls : String;
   msg : String;
   msgCls : String;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   store : Ext_data_Store;
   useMsg : Boolean;
   useTargetEl : Boolean;
// Properties
// Events
// Methods
   constructor(comp:Ext_Component,config:Object) : Ext_LoadMask;
   afterRender() : void;
   afterShow(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : void;
   bindStore(store:Ext_data_Store) : void;
   getStoreListeners() : Object;
   hide(animateTarget:any /*String/Ext.Element/Ext.Component*/,callback:Function,scope:Object) : Ext_Component;
   onDestroy() : void;
   onDisable() : void;
   onHide(animateTarget:any /*String/Ext.Element/Ext.Component*/,callback:Function,scope:Object) : void;
   onShow(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : void;
   show(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : Ext_Component;
}
interface Ext_menu_CheckItem extends Ext_menu_Item {
// Cfg
   checkChangeDisabled : Boolean;
   checkHandler : Function;
   checked : Boolean;
   checkedCls : String;
   group : String;
   groupCls : String;
   hideOnClick : Boolean;
   scope : Object;
   uncheckedCls : String;
// Properties
// Events
   beforecheckchange(_this:Ext_menu_CheckItem,checked:Boolean,eOpts:Object) : void;
   checkchange(_this:Ext_menu_CheckItem,checked:Boolean,eOpts:Object) : void;
// Methods
   afterRender() : void;
   disableCheckChange() : void;
   enableCheckChange() : void;
   initComponent() : void;
   onDestroy() : void;
   setChecked(checked:Boolean,suppressEvents:Boolean) : void;
}
interface Ext_menu_ColorPicker extends Ext_menu_Menu {
// Cfg
   hideOnClick : Boolean;
   pickerId : String;
// Properties
   picker : Ext_picker_Color;
// Events
   click(eOpts:Object) : void;
   select(_this:Ext_picker_Color,color:String,eOpts:Object) : void;
// Methods
}
interface Ext_menu_DatePicker extends Ext_menu_Menu {
// Cfg
   hideOnClick : Boolean;
   pickerId : String;
// Properties
   picker : Ext_picker_Date;
// Events
   select(_this:Ext_picker_Date,date:Date,eOpts:Object) : void;
// Methods
}
interface Ext_menu_Item extends Ext_Component {
// Cfg
   activeCls : String;
   canActivate : Boolean;
   clickHideDelay : Number;
   destroyMenu : Boolean;
   disabledCls : String;
   handler : Function;
   hideOnClick : Boolean;
   href : String;
   hrefTarget : String;
   icon : String;
   iconCls : String;
   //menu : any /*Ext.menu.Menu/Object*/;
   menuAlign : String;
   menuExpandDelay : Number;
   menuHideDelay : Number;
   plain : Boolean;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   text : String;
   tooltip : any /*String/Object*/;
   tooltipType : String;
// Properties
   activated : Boolean;
   maskOnDisable : Boolean;
   menu : Ext_menu_Menu;
   parentMenu : Ext_menu_Menu;
// Events
   activate(item:Ext_menu_Item,eOpts:Object) : void;
   click(item:Ext_menu_Item,e:Ext_EventObject,eOpts:Object) : void;
   deactivate(item:Ext_menu_Item,eOpts:Object) : void;
// Methods
   beforeDestroy() : void;
   initComponent() : void;
   onDestroy() : void;
   onRemoved(destroying:Boolean) : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   setHandler(fn:Function,scope:Object) : void;
   setIcon(icon:String) : void;
   setIconCls(iconCls:String) : void;
   setMenu(menu:any /*Ext.menu.Menu/Object*/,destroyMenu:Boolean) : void;
   setText(text:String) : void;
   setTooltip(tooltip:any /*String/Object*/) : Ext_menu_Item;
}
interface Ext_menu_KeyNav extends Ext_util_KeyNav {
// Cfg
// Properties
// Events
// Methods
   constructor(menu:Object) : Ext_menu_KeyNav;
}
interface Ext_menu_Manager extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   get(menu:any /*String/Object*/) : Ext_menu_Menu;
   hideAll() : Boolean;
}
interface Ext_menu_Menu extends Ext_panel_Panel {
// Cfg
   allowOtherMenus : Boolean;
   defaultAlign : String;
   enableKeyNav : Boolean;
   floating : Boolean;
   hidden : Boolean;
   hideMode : String;
   ignoreParentClicks : Boolean;
   minWidth : Number;
   plain : Boolean;
   showSeparator : Boolean;
// Properties
   isMenu : Boolean;
   parentMenu : Ext_menu_Menu;
// Events
   click(menu:Ext_menu_Menu,item:Ext_Component,e:Ext_EventObject,eOpts:Object) : void;
   mouseenter(menu:Ext_menu_Menu,e:Ext_EventObject,eOpts:Object) : void;
   mouseleave(menu:Ext_menu_Menu,e:Ext_EventObject,eOpts:Object) : void;
   mouseover(menu:Ext_menu_Menu,item:Ext_Component,e:Ext_EventObject,eOpts:Object) : void;
// Methods
   afterComponentLayout(width:Number,height:Number,oldWidth:Number,oldHeight:Number) : void;
   canActivateItem(item:Object) : Boolean;
   deactivateActiveItem(andBlurFocusedItem:Object) : void;
   getBubbleTarget() : Ext_container_Container;
   hide(animateTarget:any /*String/Ext.Element/Ext.Component*/,callback:Function,scope:Object) : Ext_Component;
   onDestroy() : void;
   show(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : Ext_Component;
   showBy(component:any /*Ext.Component/Ext.Element*/,position:String,offsets:Number[]) : Ext_menu_Menu;
}
interface Ext_menu_Separator extends Ext_menu_Item {
// Cfg
   separatorCls : String;
// Properties
// Events
// Methods
}
interface Ext_MessageBox extends Ext_window_MessageBox {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_ModelManager extends Ext_AbstractManager {
// Cfg
// Properties
   associationStack : Ext_data_association_Association[];
// Events
// Methods
   create(data:Object,name:String,id:Number) : void;
   getModel(id:any /*String/Object*/) : Ext_data_Model;
}
interface Ext_Number {
// Cfg
// Properties
// Events
// Methods
   constrain(number:Number,min:Number,max:Number) : Number;
   from(value:Object,defaultValue:Number) : Number;
   randomInt(from:Number,to:Number) : Number;
   snap(value:Number,increment:Number,minValue:Number,maxValue:Number) : Number;
   snapInRange(value:Number,increment:Number,minValue:Number,maxValue:Number) : Number;
   toFixed(value:Number,precision:Number) : void;
}
interface Ext_Object {
// Cfg
// Properties
// Events
// Methods
   chain(object:Object) : void;
   each(object:Object,fn:Function,scope:Object) : void;
   fromQueryString(queryString:String,recursive:Boolean) : Object;
   getKey(object:Object,value:Object) : void;
   getKeys(object:Object) : String[];
   getSize(object:Object) : Number;
   getValues(object:Object) : Array;
   merge(destination:Object,object:Object[]) : Object;
   toQueryObjects(name:String,value:any /*Object/Array*/,recursive:Boolean) : Array;
   toQueryString(object:Object,recursive:Boolean) : String;
}
interface Ext_panel_AbstractPanel extends Ext_container_Container {
// Cfg
   baseCls : String;
   bodyBorder : Boolean;
   bodyCls : any /*String/String[]*/;
   bodyPadding : any /*Number/String*/;
   bodyStyle : any /*String/Object/Function*/;
   componentLayout : any /*String/Object*/;
   dockedItems : any /*Object/Object[]*/;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
// Properties
   isPanel : Boolean;
// Events
// Methods
   addBodyCls(cls:String) : Ext_panel_Panel;
   addUIClsToElement(ui:String) : void;
   beforeDestroy() : void;
   getComponent(comp:any /*String/Number*/) : Ext_Component;
   initComponent() : void;
   removeBodyCls(cls:String) : Ext_panel_Panel;
   removeUIClsFromElement(ui:String) : void;
   setBodyStyle(style:Mixed,value:String) : Ext_panel_Panel;
}
interface Ext_panel_DD extends Ext_dd_DragSource {
// Cfg
// Properties
// Events
// Methods
   constructor(el:any /*String/HTMLElement/Ext.Element*/,config:Object) : Ext_panel_DD;
   afterInvalidDrop(e:Event,id:String) : void;
   autoOffset(iPageX:Number,iPageY:Number) : void;
   b4MouseDown(e:Object) : void;
   createFrame() : void;
   endDrag(e:Event) : void;
   getDragEl() : HTMLElement;
   onInvalidDrop(e:Event) : void;
   startDrag(X:Number,Y:Number) : void;
}
interface Ext_panel_Header extends Ext_container_Container {
// Cfg
   componentLayout : any /*String/Object*/;
   defaultType : String;
   icon : String;
   iconCls : String;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   shrinkWrap : any /*Boolean/Number*/;
   title : String;
   titleAlign : String;
// Properties
   isHeader : Boolean;
// Events
   click(_this:Ext_panel_Header,e:Ext_EventObject,eOpts:Object) : void;
   dblclick(_this:Ext_panel_Header,e:Ext_EventObject,eOpts:Object) : void;
// Methods
   addTool(tool:Object) : void;
   addUIClsToElement(ui:String) : void;
   afterRender() : void;
   onAdd(component:Object,index:Object) : void;
   removeUIClsFromElement(ui:String) : void;
   setIcon(icon:String) : void;
   setIconCls(cls:String) : void;
   setTitle(title:String) : void;
}
interface Ext_panel_Panel extends Ext_panel_AbstractPanel {
// Cfg
   animCollapse : Boolean;
   bbar : any /*Object/Object[]*/;
   buttonAlign : String;
   buttons : any /*Object/Object[]*/;
   closable : Boolean;
   closeAction : String;
   collapseDirection : String;
   collapseFirst : Boolean;
   collapseMode : String;
   collapsed : Boolean;
   collapsedCls : String;
   collapsible : Boolean;
   dockedItems : any /*Object/Object[]*/;
   fbar : any /*Object/Object[]*/;
   floatable : Boolean;
   frame : Boolean;
   frameHeader : Boolean;
   header : any /*Boolean/Object*/;
   headerPosition : String;
   hideCollapseTool : Boolean;
   icon : String;
   iconCls : String;
   lbar : any /*Object/Object[]*/;
   manageHeight : Boolean;
   minButtonWidth : Number;
   overlapHeader : Boolean;
   placeholder : any /*Ext.Component/Object*/;
   placeholderCollapseHideMode : Number;
   preventHeader : Boolean;
   rbar : any /*Object/Object[]*/;
   tbar : any /*Object/Object[]*/;
   title : String;
   titleAlign : String;
   titleCollapse : Boolean;
   tools : any /*Object[]/Ext.panel.Tool[]*/;
// Properties
   dd : Ext_dd_DragSource;
// Events
   beforeclose(panel:Ext_panel_Panel,eOpts:Object) : void;
   beforecollapse(p:Ext_panel_Panel,direction:String,animate:Boolean,eOpts:Object) : void;
   beforeexpand(p:Ext_panel_Panel,animate:Boolean,eOpts:Object) : void;
   close(panel:Ext_panel_Panel,eOpts:Object) : void;
   collapse(p:Ext_panel_Panel,eOpts:Object) : void;
   expand(p:Ext_panel_Panel,eOpts:Object) : void;
   iconchange(p:Ext_panel_Panel,newIcon:String,oldIcon:String,eOpts:Object) : void;
   iconclschange(p:Ext_panel_Panel,newIconCls:String,oldIconCls:String,eOpts:Object) : void;
   titlechange(p:Ext_panel_Panel,newTitle:String,oldTitle:String,eOpts:Object) : void;
// Methods
   afterCollapse(animated:Boolean) : void;
   afterExpand(animated:Boolean) : void;
   beforeDestroy() : void;
   close() : void;
   collapse(direction:String,animate:Boolean) : Ext_panel_Panel;
   expand(animate:Boolean) : Ext_panel_Panel;
   getCollapsed() : any /*Boolean/String*/;
   getHeader() : void;
   getState() : Object;
   isLayoutRoot() : void;
   isVisible(deep:Boolean) : Boolean;
   onHide(animateTarget:any /*String/Ext.Element/Ext.Component*/,callback:Function,scope:Object) : void;
   onRemoved(destroying:Boolean) : void;
   onShow(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : void;
   setBorder(border:any /*String/Number*/) : void;
   setIcon(newIcon:String) : void;
   setIconCls(newIconCls:String) : void;
   setTitle(newTitle:String) : void;
   setUI(ui:String) : void;
   toggleCollapse() : Ext_panel_Panel;
}
interface Ext_panel_Proxy extends Ext_Base {
// Cfg
   insertProxy : Boolean;
   moveOnDrag : Boolean;
// Properties
   panel : Ext_panel_Panel;
// Events
// Methods
   constructor(panel:Ext_panel_Panel,config:Object) : Ext_panel_Proxy;
   getEl() : Ext_Element;
   getGhost() : Ext_panel_Panel;
   getProxy() : Ext_Element;
   hide() : void;
   moveProxy(parentNode:HTMLElement,before:HTMLElement) : void;
   show() : void;
}
interface Ext_panel_Table extends Ext_panel_Panel {
// Cfg
   allowDeselect : Boolean;
   columnLines : Boolean;
   columns : any /*Ext.grid.column.Column[]/Object*/;
   deferRowRender : Boolean;
   disableSelection : Boolean;
   emptyText : String;
   enableColumnHide : Boolean;
   enableColumnMove : Boolean;
   enableColumnResize : Boolean;
   enableLocking : Boolean;
   features : Ext_grid_feature_Feature[];
   forceFit : Boolean;
   hideHeaders : Boolean;
   layout : any /*String/Object*/;
   multiSelect : Boolean;
   rowLines : Boolean;
   scroll : any /*String/Boolean*/;
   sealedColumns : Boolean;
   selModel : any /*Ext.selection.Model/Object*/;
   selType : String;
   simpleSelect : Boolean;
   sortableColumns : Boolean;
   store : Ext_data_Store;
   verticalScroller : Object;
   view : Ext_view_Table;
   viewConfig : Object;
   viewType : String;
// Properties
   hasView : Boolean;
   optimizedColumnMove : Boolean;
// Events
   beforecontainerclick(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforecontainercontextmenu(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforecontainerdblclick(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforecontainermousedown(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforecontainermouseout(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforecontainermouseover(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforecontainermouseup(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforedeselect(_this:Ext_selection_RowModel,record:Ext_data_Model,index:Number,eOpts:Object) : void;
   beforeedit(editor:Ext_grid_plugin_Editing,e:Object,eOpts:Object) : void;
   beforeitemclick(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeitemcontextmenu(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeitemdblclick(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeitemmousedown(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeitemmouseenter(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeitemmouseleave(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeitemmouseup(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeselect(_this:Ext_selection_RowModel,record:Ext_data_Model,index:Number,eOpts:Object) : void;
   canceledit(editor:Ext_grid_plugin_Editing,e:Object,eOpts:Object) : void;
   cellclick(_this:Ext_view_Table,td:HTMLElement,cellIndex:Number,record:Ext_data_Model,tr:HTMLElement,rowIndex:Number,e:Ext_EventObject,eOpts:Object) : void;
   celldblclick(_this:Ext_view_Table,td:HTMLElement,cellIndex:Number,record:Ext_data_Model,tr:HTMLElement,rowIndex:Number,e:Ext_EventObject,eOpts:Object) : void;
   columnhide(ct:Ext_grid_header_Container,column:Ext_grid_column_Column,eOpts:Object) : void;
   columnmove(ct:Ext_grid_header_Container,column:Ext_grid_column_Column,fromIdx:Number,toIdx:Number,eOpts:Object) : void;
   columnresize(ct:Ext_grid_header_Container,column:Ext_grid_column_Column,width:Number,eOpts:Object) : void;
   columnshow(ct:Ext_grid_header_Container,column:Ext_grid_column_Column,eOpts:Object) : void;
   containerclick(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   containercontextmenu(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   containerdblclick(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   containermouseout(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   containermouseover(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   containermouseup(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   deselect(_this:Ext_selection_RowModel,record:Ext_data_Model,index:Number,eOpts:Object) : void;
   edit(editor:Ext_grid_plugin_Editing,e:Object,eOpts:Object) : void;
   itemclick(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   itemcontextmenu(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   itemdblclick(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   itemmousedown(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   itemmouseenter(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   itemmouseleave(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   itemmouseup(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   select(_this:Ext_selection_RowModel,record:Ext_data_Model,index:Number,eOpts:Object) : void;
   selectionchange(_this:Ext_selection_Model,selected:Ext_data_Model[],eOpts:Object) : void;
   sortchange(ct:Ext_grid_header_Container,column:Ext_grid_column_Column,direction:String,eOpts:Object) : void;
   validateedit(editor:Ext_grid_plugin_Editing,e:Object,eOpts:Object) : void;
   viewready(_this:Ext_panel_Table,eOpts:Object) : void;
// Methods
   afterCollapse(animated:Boolean) : void;
   afterExpand(animated:Boolean) : void;
   applyState(state:Object) : void;
   beforeDestroy() : void;
   determineScrollbars() : void;
   getSelectionModel() : Ext_selection_Model;
   getState() : Object;
   getStore() : Ext_data_Store;
   getView() : Ext_view_Table;
   invalidateScroller() : void;
}
interface Ext_panel_Tool extends Ext_Component {
// Cfg
   baseCls : String;
   disabledCls : String;
   handler : Function;
   height : Number;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   scope : Object;
   stopEvent : Boolean;
   tooltip : any /*String/Object*/;
   tooltipType : String;
   type : String;
   width : Number;
// Properties
// Events
   click(_this:Ext_panel_Tool,e:Ext_EventObject,eOpts:Object) : void;
// Methods
   afterRender() : void;
   initComponent() : void;
   onDestroy() : void;
   setType(type:String) : Ext_panel_Tool;
}
interface Ext_perf_Accumulator extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_perf_Monitor extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor() : Ext_perf_Monitor;
}
interface Ext_picker_Color extends Ext_Component {
// Cfg
   allowReselect : Boolean;
   clickEvent : String;
   componentCls : String;
   handler : Function;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   scope : Object;
   selectedCls : String;
   value : String;
// Properties
   colors : String[];
// Events
   select(_this:Ext_picker_Color,color:String,eOpts:Object) : void;
// Methods
   afterRender() : void;
   getValue() : String;
   initComponent() : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   select(color:String,suppressEvent:Boolean) : void;
}
interface Ext_picker_Date extends Ext_Component {
// Cfg
   ariaTitle : String;
   ariaTitleDateFormat : String;
   baseCls : String;
   border : any /*Number/String/Boolean*/;
   dayNames : String[];
   disableAnim : Boolean;
   disabledCellCls : String;
   disabledDates : String[];
   disabledDatesRE : RegExp;
   disabledDatesText : String;
   disabledDays : Number[];
   disabledDaysText : String;
   focusOnShow : Boolean;
   format : String;
   handler : Function;
   keyNavConfig : Object;
   longDayFormat : String;
   maxDate : Date;
   maxText : String;
   minDate : Date;
   minText : String;
   monthNames : String[];
   monthYearFormat : String;
   monthYearText : String;
   nextText : String;
   prevText : String;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   scope : Object;
   selectedCls : String;
   showToday : Boolean;
   startDay : Number;
   todayText : String;
   todayTip : String;
   width : Number;
// Properties
// Events
   select(_this:Ext_picker_Date,date:Date,eOpts:Object) : void;
// Methods
   beforeDestroy() : void;
   focus(selectText:Boolean,delay:any /*Boolean/Number*/) : Ext_Component;
   getDayInitial(value:Object) : String;
   getValue() : Date;
   hideMonthPicker(animate:Boolean) : Ext_picker_Date;
   initComponent() : void;
   onDisable() : void;
   onEnable() : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   onShow(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : void;
   selectToday() : Ext_picker_Date;
   setDisabledDates(disabledDates:any /*String[]/RegExp*/) : Ext_picker_Date;
   setDisabledDays(disabledDays:Number[]) : Ext_picker_Date;
   setMaxDate(value:Date) : Ext_picker_Date;
   setMinDate(value:Date) : Ext_picker_Date;
   setValue(value:Date) : Ext_picker_Date;
   showMonthPicker(animate:Boolean) : Ext_picker_Date;
   showNextMonth(e:Object) : Ext_picker_Date;
   showNextYear() : Ext_picker_Date;
   showPrevMonth(e:Object) : Ext_picker_Date;
   showPrevYear() : Ext_picker_Date;
}
interface Ext_picker_Month extends Ext_Component {
// Cfg
   baseCls : String;
   cancelText : String;
   okText : String;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   selectedCls : String;
   showButtons : Boolean;
   value : any /*Date/Number[]*/;
// Properties
// Events
   cancelclick(_this:Ext_picker_Month,eOpts:Object) : void;
   monthclick(_this:Ext_picker_Month,value:Array,eOpts:Object) : void;
   monthdblclick(_this:Ext_picker_Month,value:Array,eOpts:Object) : void;
   okclick(_this:Ext_picker_Month,value:Array,eOpts:Object) : void;
   select(_this:Ext_picker_Month,value:Array,eOpts:Object) : void;
   yearclick(_this:Ext_picker_Month,value:Array,eOpts:Object) : void;
   yeardblclick(_this:Ext_picker_Month,value:Array,eOpts:Object) : void;
// Methods
   adjustYear(offset:Number) : void;
   afterRender() : void;
   beforeDestroy() : void;
   getValue() : Number[];
   hasSelection() : Boolean;
   initComponent() : void;
   onDestroy() : void;
   setValue(value:any /*Date/Number[]*/) : Ext_picker_Month;
}
interface Ext_picker_Time extends Ext_view_BoundList {
// Cfg
   componentCls : String;
   format : String;
   increment : Number;
   maxValue : Date;
   minValue : Date;
// Properties
// Events
// Methods
   initComponent() : void;
   setMaxValue(value:Date) : void;
   setMinValue(value:Date) : void;
   updateList() : void;
}
interface Ext_PluginManager extends Ext_AbstractManager {
// Cfg
// Properties
// Events
// Methods
   create(config:Object,defaultType:Function) : Ext_Component;
   findByType(type:String,defaultsOnly:Boolean) : Ext_AbstractPlugin[];
}
interface Ext_ProgressBar extends Ext_Component {
// Cfg
   //animate : Boolean;
   baseCls : String;
   componentLayout : any /*String/Object*/;
   id : String;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   text : String;
   textEl : any /*String/HTMLElement/Ext.Element*/;
   value : Number;
// Properties
// Events
   update(_this:Ext_ProgressBar,value:Number,text:String,eOpts:Object) : void;
// Methods
   initComponent() : void;
   isWaiting() : Boolean;
   onDestroy() : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   reset(hide:Boolean) : Ext_ProgressBar;
   updateProgress(value:Number,text:String,animate:Boolean) : Ext_ProgressBar;
   updateText(text:String) : Ext_ProgressBar;
   wait(config:Object) : Ext_ProgressBar;
}
interface Ext_resizer_BorderSplitter extends Ext_resizer_Splitter {
// Cfg
   collapseTarget : any /*String/Ext.panel.Panel*/;
// Properties
// Events
// Methods
   getTrackerConfig() : void;
}
interface Ext_resizer_BorderSplitterTracker extends Ext_resizer_SplitterTracker {
// Cfg
// Properties
// Events
// Methods
   onBeforeStart(e:Ext_EventObject) : void;
}
interface Ext_resizer_Handle extends Ext_Component {
// Cfg
   region : String;
// Properties
// Events
// Methods
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
}
interface Ext_resizer_Resizer extends Ext_Base {
// Cfg
   constrainTo : any /*Ext.Element/Ext.util.Region*/;
   dynamic : Boolean;
   handles : String;
   height : Number;
   heightIncrement : Number;
   maxHeight : Number;
   maxWidth : Number;
   minHeight : Number;
   minWidth : Number;
   pinned : Boolean;
   preserveRatio : Boolean;
   target : any /*Ext.Element/Ext.Component*/;
   transparent : Boolean;
   width : Number;
   widthIncrement : Number;
// Properties
   el : Ext_Element;
   originalTarget : any /*Ext.Element/Ext.Component*/;
   resizeTracker : Ext_resizer_ResizeTracker;
// Events
   beforeresize(_this:Ext_resizer_Resizer,width:Number,height:Number,e:Ext_EventObject,eOpts:Object) : void;
   resize(_this:Ext_resizer_Resizer,width:Number,height:Number,e:Ext_EventObject,eOpts:Object) : void;
   resizedrag(_this:Ext_resizer_Resizer,width:Number,height:Number,e:Ext_EventObject,eOpts:Object) : void;
// Methods
   getEl() : Ext_Element;
   getTarget() : any /*Ext.Element/Ext.Component*/;
   resizeTo(width:Number,height:Number) : void;
}
interface Ext_resizer_ResizeTracker extends Ext_dd_DragTracker {
// Cfg
   constrainTo : any /*Ext.util.Region/Ext.Element*/;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_resizer_ResizeTracker;
   createProxy(target:any /*Ext.Component/Ext.Element*/) : Ext_Element;
   onBeforeStart(e:Ext_EventObject) : void;
   onDrag(e:Ext_EventObject) : void;
   onEnd(e:Ext_EventObject) : void;
   onStart(e:Ext_EventObject) : void;
}
interface Ext_resizer_Splitter extends Ext_Component {
// Cfg
   baseCls : String;
   collapseOnDblClick : Boolean;
   collapseTarget : any /*String/Ext.panel.Panel*/;
   collapsedCls : String;
   collapsible : Boolean;
   defaultSplitMax : Number;
   defaultSplitMin : Number;
   performCollapse : Boolean;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
// Properties
   orientation : String;
// Events
// Methods
   beforeDestroy() : void;
   getTrackerConfig() : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   setSize(width:any /*Number/String/Object*/,height:any /*Number/String*/) : Ext_Component;
}
interface Ext_resizer_SplitterTracker extends Ext_dd_DragTracker {
// Cfg
// Properties
// Events
// Methods
   onBeforeStart(e:Ext_EventObject) : void;
   onDrag(e:Ext_EventObject) : void;
   onEnd(e:Ext_EventObject) : void;
   onStart(e:Ext_EventObject) : void;
}
interface Ext_selection_CellModel extends Ext_selection_Model {
// Cfg
   enableKeyNav : Boolean;
   preventWrap : Boolean;
// Properties
// Events
   deselect(_this:Ext_selection_CellModel,record:Ext_data_Model,row:Number,column:Number,eOpts:Object) : void;
   select(_this:Ext_selection_CellModel,record:Ext_data_Model,row:Number,column:Number,eOpts:Object) : void;
// Methods
   constructor() : Ext_selection_CellModel;
   getCurrentPosition() : void;
   setCurrentPosition(position:Object) : void;
}
interface Ext_selection_CheckboxModel extends Ext_selection_RowModel {
// Cfg
   checkOnly : Boolean;
   injectCheckbox : any /*Number/String*/;
   mode : String;
   showHeaderCheckbox : Boolean;
// Properties
// Events
// Methods
   getHeaderConfig() : void;
   onHeaderClick(headerCt:Object,header:Object,e:Object) : void;
   renderer(value:Object,metaData:Object,record:Object,rowIndex:Object,colIndex:Object,store:Object,view:Object) : void;
}
interface Ext_selection_DataViewModel extends Ext_selection_Model {
// Cfg
   enableKeyNav : Boolean;
// Properties
// Events
   beforedeselect(_this:Ext_selection_DataViewModel,record:Ext_data_Model,eOpts:Object) : void;
   beforeselect(_this:Ext_selection_DataViewModel,record:Ext_data_Model,eOpts:Object) : void;
   deselect(_this:Ext_selection_DataViewModel,record:Ext_data_Model,eOpts:Object) : void;
   select(_this:Ext_selection_DataViewModel,record:Ext_data_Model,eOpts:Object) : void;
// Methods
   constructor(cfg:Object) : Ext_selection_DataViewModel;
}
interface Ext_selection_Model extends Ext_util_Observable {
// Cfg
   allowDeselect : Boolean;
   mode : String;
   pruneRemoved : Boolean;
// Properties
   selected : Ext_util_MixedCollection;
// Events
   focuschange(_this:Ext_selection_Model,oldFocused:Ext_data_Model,newFocused:Ext_data_Model,eOpts:Object) : void;
   selectionchange(_this:Ext_selection_Model,selected:Ext_data_Model[],eOpts:Object) : void;
// Methods
   constructor(cfg:Object) : Ext_selection_Model;
   bindStore(store:any /*Ext.data.AbstractStore/String*/,initial:Boolean) : void;
   deselect(records:any /*Ext.data.Model[]/Number*/,suppressEvent:Boolean) : void;
   deselectAll(suppressEvent:Boolean) : void;
   getCount() : Number;
   getLastSelected() : void;
   getSelection() : Ext_data_Model[];
   getSelectionMode() : String;
   getStoreListeners() : Object;
   hasSelection() : Boolean;
   isFocused(record:Ext_data_Model) : void;
   isLocked() : Boolean;
   isSelected(record:any /*Ext.data.Model/Number*/) : Boolean;
   select(records:any /*Ext.data.Model[]/Number*/,keepExisting:Boolean,suppressEvent:Boolean) : void;
   selectAll(suppressEvent:Boolean) : void;
   selectRange(startRow:any /*Ext.data.Model/Number*/,endRow:any /*Ext.data.Model/Number*/,keepExisting:Boolean) : void;
   setLastFocused(record:Ext_data_Model) : void;
   setLocked(locked:Boolean) : void;
   setSelectionMode(selMode:String) : void;
}
interface Ext_selection_RowModel extends Ext_selection_Model {
// Cfg
   enableKeyNav : Boolean;
   ignoreRightMouseSelection : Boolean;
// Properties
// Events
   beforedeselect(_this:Ext_selection_RowModel,record:Ext_data_Model,index:Number,eOpts:Object) : void;
   beforeselect(_this:Ext_selection_RowModel,record:Ext_data_Model,index:Number,eOpts:Object) : void;
   deselect(_this:Ext_selection_RowModel,record:Ext_data_Model,index:Number,eOpts:Object) : void;
   select(_this:Ext_selection_RowModel,record:Ext_data_Model,index:Number,eOpts:Object) : void;
// Methods
   constructor() : Ext_selection_RowModel;
   getCurrentPosition() : void;
   selectNext(keepExisting:Boolean,suppressEvent:Boolean) : Boolean;
   selectPrevious(keepExisting:Boolean,suppressEvent:Boolean) : Boolean;
}
interface Ext_selection_TreeModel extends Ext_selection_RowModel {
// Cfg
   pruneRemoved : Boolean;
// Properties
// Events
// Methods
}
interface Ext_Shadow extends Ext_Base {
// Cfg
   mode : String;
   offset : Number;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_Shadow;
   hide() : void;
   isVisible() : void;
   realign(left:Number,top:Number,width:Number,height:Number) : void;
   setOpacity(opacity:Number) : void;
   setZIndex(zindex:Number) : void;
   show(targetEl:any /*String/HTMLElement/Ext.Element*/) : void;
}
interface Ext_ShadowPool extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_slider_Multi extends Ext_form_field_Base {
// Cfg
   //animate : Boolean;
   clickToChange : Boolean;
   componentLayout : any /*String/Object*/;
   constrainThumbs : Boolean;
   decimalPrecision : any /*Number/Boolean*/;
   increment : Number;
   keyIncrement : Number;
   maxValue : Number;
   minValue : Number;
   tipText : Function;
   useTips : any /*Object/Boolean*/;
   value : Number;
   values : Number[];
   vertical : Boolean;
   zeroBasedSnapping : Boolean;
// Properties
   dragging : Boolean;
   thumbs : Array;
// Events
   beforechange(slider:Ext_slider_Multi,newValue:Number,oldValue:Number,eOpts:Object) : void;
   change(slider:Ext_slider_Multi,newValue:Number,thumb:Ext_slider_Thumb,eOpts:Object) : void;
   changecomplete(slider:Ext_slider_Multi,newValue:Number,thumb:Ext_slider_Thumb,eOpts:Object) : void;
   drag(slider:Ext_slider_Multi,e:Ext_EventObject,eOpts:Object) : void;
   dragend(slider:Ext_slider_Multi,e:Ext_EventObject,eOpts:Object) : void;
   dragstart(slider:Ext_slider_Multi,e:Ext_EventObject,eOpts:Object) : void;
// Methods
   addThumb(value:Number) : Ext_slider_Thumb;
   beforeDestroy() : void;
   getSubTplData() : Object;
   getSubmitValue() : String;
   getValue(index:Number) : any /*Number/Number[]*/;
   getValues() : Number[];
   initComponent() : void;
   initValue() : void;
   onDisable() : void;
   onEnable() : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   reset() : void;
   setMaxValue(val:Number) : void;
   setMinValue(val:Number) : void;
   setReadOnly(readOnly:Boolean) : void;
   setValue(index:Number,value:Number,animate:Boolean) : void;
   syncThumbs() : void;
}
interface Ext_slider_Single extends Ext_slider_Multi {
// Cfg
// Properties
// Events
// Methods
   getValue() : Number;
   setValue(value:Number,animate:Boolean) : void;
}
interface Ext_slider_Thumb extends Ext_Base {
// Cfg
   constrain : Boolean;
   slider : Ext_slider_MultiSlider;
// Properties
   //slider : Ext_slider_MultiSlider;
// Events
// Methods
   constructor(config:Object) : Ext_slider_Thumb;
   disable() : void;
   enable() : void;
   initEvents() : void;
   render() : void;
}
interface Ext_slider_Tip extends Ext_tip_Tip {
// Cfg
   align : String;
   minWidth : Number;
   offsets : Array;
   position : String;
// Properties
// Events
// Methods
   getText(thumb:Ext_slider_Thumb) : String;
}
interface Ext_state_CookieProvider extends Ext_state_Provider {
// Cfg
   domain : String;
   expires : Date;
   path : String;
   secure : Boolean;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_state_CookieProvider;
   clear(name:String) : void;
   set(name:String,value:Object) : void;
}
interface Ext_state_LocalStorageProvider extends Ext_state_Provider {
// Cfg
// Properties
// Events
// Methods
   constructor() : Ext_state_LocalStorageProvider;
   clear(name:String) : void;
   set(name:String,value:Object) : void;
}
interface Ext_state_Manager extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor() : Ext_state_Manager;
   clear(name:String) : void;
   get(name:String,defaultValue:Object) : Object;
   getProvider() : Ext_state_Provider;
   set(name:String,value:Object) : void;
   setProvider(stateProvider:Ext_state_Provider) : void;
}
interface Ext_state_Provider extends Ext_Base {
// Cfg
   prefix : String;
// Properties
// Events
   statechange(_this:Ext_state_Provider,key:String,value:String,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_state_Provider;
   clear(name:String) : void;
   decodeValue(value:String) : Object;
   encodeValue(value:Object) : String;
   get(name:String,defaultValue:Object) : Object;
   set(name:String,value:Object) : void;
}
interface Ext_state_Stateful extends Ext_Base {
// Cfg
   saveDelay : Number;
   stateEvents : String[];
   stateId : String;
   stateful : Boolean;
// Properties
// Events
   beforestaterestore(_this:Ext_state_Stateful,state:Object,eOpts:Object) : void;
   beforestatesave(_this:Ext_state_Stateful,state:Object,eOpts:Object) : void;
   staterestore(_this:Ext_state_Stateful,state:Object,eOpts:Object) : void;
   statesave(_this:Ext_state_Stateful,state:Object,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_state_Stateful;
   addStateEvents(events:any /*String/String[]*/) : void;
   applyState(state:Object) : void;
   destroy() : void;
   getState() : Object;
   savePropToState(propName:String,state:Object,stateName:String) : Boolean;
   savePropsToState(propNames:any /*String/String[]*/,state:Object) : Object;
   saveState() : void;
}
interface Ext_String {
// Cfg
// Properties
// Events
// Methods
   addCharacterEntities(entities:Object) : void;
   capitalize(string:String) : String;
   createVarName(s:String) : String;
   ellipsis(value:String,length:Number,word:Boolean) : String;
   escape(string:String) : String;
   escapeRegex(string:String) : String;
   format(string:String,value1:String,value2:String) : String;
   htmlDecode(value:String) : String;
   htmlEncode(value:String) : String;
   leftPad(string:String,size:Number,character:String) : String;
   repeat(pattern:String,count:Number,sep:String) : void;
   resetCharacterEntities() : void;
   splitWords(words:any /*String/Array*/) : void;
   toggle(string:String,value:String,other:String) : String;
   trim(string:String) : String;
   uncapitalize(string:String) : String;
   urlAppend(url:String,string:String) : String;
}
interface Ext_supports {
// Cfg
// Properties
   ArraySort : Boolean;
   AudioTag : Boolean;
   BoundingClientRect : Boolean;
   CSS3BorderRadius : Boolean;
   CSS3BoxShadow : Boolean;
   CSS3DTransform : Boolean;
   CSS3LinearGradient : Boolean;
   Canvas : Boolean;
   ClassList : Boolean;
   ComputedStyle : Boolean;
   CreateContextualFragment : Boolean;
   DeviceMotion : Boolean;
   Direct2DBug : Boolean;
   DisplayChangeInputSelectionBug : Object;
   DisplayChangeTextAreaSelectionBug : Object;
   Float : Boolean;
   GeoLocation : Boolean;
   GetPositionPercentage : Boolean;
   History : Boolean;
   MouseEnterLeave : Boolean;
   MouseWheel : Boolean;
   Opacity : Boolean;
   OrientationChange : Boolean;
   Placeholder : Boolean;
   PointerEvents : Boolean;
   Range : Boolean;
   RightMargin : Boolean;
   Svg : Boolean;
   TextAreaMaxLength : Boolean;
   TimeoutActualLateness : Boolean;
   Touch : Boolean;
   Transitions : Boolean;
   TransparentColor : Boolean;
   Vml : Boolean;
   WindowOnError : Boolean;
// Events
// Methods
}
interface Ext_tab_Bar extends Ext_panel_Header {
// Cfg
   baseCls : String;
   maxTabWidth : Number;
   minTabWidth : Number;
   plain : Boolean;
// Properties
   isTabBar : Boolean;
// Events
   change(tabBar:Ext_tab_Bar,tab:Ext_tab_Tab,card:Ext_Component,eOpts:Object) : void;
// Methods
   afterComponentLayout(width:Number,height:Number,oldWidth:Number,oldHeight:Number) : void;
   getLayout() : Ext_layout_container_Container;
   onRemove(component:Ext_Component,autoDestroy:Boolean) : void;
}
interface Ext_tab_Panel extends Ext_panel_Panel {
// Cfg
   activeItem : any /*String/Number*/;
   activeTab : any /*String/Number/Ext.Component*/;
   deferredRender : Boolean;
   itemCls : String;
   layout : Object;
   maxTabWidth : Number;
   minTabWidth : Number;
   plain : Boolean;
   removePanelHeader : Boolean;
   //tabBar : Object;
   tabPosition : String;
// Properties
   tabBar : Ext_tab_Bar;
// Events
   beforetabchange(tabPanel:Ext_tab_Panel,newCard:Ext_Component,oldCard:Ext_Component,eOpts:Object) : void;
   tabchange(tabPanel:Ext_tab_Panel,newCard:Ext_Component,oldCard:Ext_Component,eOpts:Object) : void;
// Methods
   getActiveTab() : Ext_Component;
   getTabBar() : Ext_tab_Bar;
   initComponent() : void;
   onAdd(item:Object,index:Object) : void;
   setActiveTab(card:any /*String/Number/Ext.Component*/) : Ext_Component;
}
interface Ext_tab_Tab extends Ext_button_Button {
// Cfg
   activeCls : String;
   baseCls : String;
   closable : Boolean;
   closableCls : String;
   closeText : String;
   componentLayout : any /*String/Object*/;
   disabledCls : String;
   scale : String;
// Properties
   active : Boolean;
   //closable : Boolean;
   isTab : Boolean;
// Events
   activate(_this:Ext_tab_Tab,eOpts:Object) : void;
   beforeclose(tab:Ext_tab_Tab,eOpts:Object) : void;
   close(tab:Ext_tab_Tab,eOpts:Object) : void;
   deactivate(_this:Ext_tab_Tab,eOpts:Object) : void;
// Methods
   disable(silent:Boolean) : void;
   enable(silent:Boolean) : void;
   getTemplateArgs() : Object;
   initComponent() : void;
   onDestroy() : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   setCard(card:Ext_Component) : void;
   setClosable(closable:Boolean) : void;
}
interface Ext_TaskManager extends Ext_util_TaskRunner {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_Template extends Ext_Base {
// Cfg
   compiled : Boolean;
   disableFormats : Boolean;
// Properties
   isTemplate : Boolean;
// Events
// Methods
   constructor(html:String[],config:Object) : Ext_Template;
   append(el:any /*String/HTMLElement/Ext.Element*/,values:any /*Object/Array*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
   apply(values:any /*Object/Array*/) : String;
   applyOut(values:any /*Object/Array*/,out:Array) : Array;
   applyTemplate(values:any /*Object/Array*/) : String;
   compile() : Ext_Template;
   insertAfter(el:any /*String/HTMLElement/Ext.Element*/,values:any /*Object/Array*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
   insertBefore(el:any /*String/HTMLElement/Ext.Element*/,values:any /*Object/Array*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
   insertFirst(el:any /*String/HTMLElement/Ext.Element*/,values:any /*Object/Array*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
   overwrite(el:any /*String/HTMLElement/Ext.Element*/,values:any /*Object/Array*/,returnElement:Boolean) : any /*HTMLElement/Ext.Element*/;
   set(html:String,compile:Boolean) : Ext_Template;
}
interface Ext_tip_QuickTip extends Ext_tip_ToolTip {
// Cfg
   interceptTitles : Boolean;
   target : any /*String/HTMLElement/Ext.Element*/;
   title : String;
// Properties
// Events
// Methods
   cancelShow(el:any /*String/HTMLElement/Ext.Element*/) : void;
   hide() : void;
   initComponent() : void;
   register(config:Object) : void;
   showAt(xy:Number[]) : void;
   unregister(el:any /*String/HTMLElement/Ext.Element*/) : void;
}
interface Ext_tip_QuickTipManager extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   destroy() : void;
   disable() : void;
   enable() : void;
   getQuickTip() : Ext_tip_QuickTip;
   init(autoRender:Boolean,config:Object) : void;
   isEnabled() : Boolean;
   register(config:Object) : void;
   tips(config:Object) : void;
   unregister(el:any /*String/HTMLElement/Ext.Element*/) : void;
}
interface Ext_tip_Tip extends Ext_panel_Panel {
// Cfg
   autoRender : any /*Boolean/String/HTMLElement/Ext.Element*/;
   baseCls : String;
   closable : Boolean;
   closeAction : String;
   constrainPosition : Boolean;
   defaultAlign : String;
   floating : Boolean;
   focusOnToFront : Boolean;
   frameHeader : Boolean;
   hidden : Boolean;
   maxWidth : Number;
   minWidth : Number;
   shadow : any /*Boolean/String*/;
   width : Number;
// Properties
// Events
// Methods
   initComponent() : void;
   showAt(xy:Number[]) : void;
   showBy(el:any /*String/HTMLElement/Ext.Element*/,position:String) : void;
}
interface Ext_tip_ToolTip extends Ext_tip_Tip {
// Cfg
   anchor : String;
   anchorOffset : Number;
   anchorToTarget : Boolean;
   autoHide : Boolean;
   delegate : String;
   dismissDelay : Number;
   hideDelay : Number;
   mouseOffset : Number[];
   showDelay : Number;
   target : any /*HTMLElement/Ext.Element/String*/;
   trackMouse : Boolean;
// Properties
   triggerElement : HTMLElement;
// Events
// Methods
   beforeDestroy() : void;
   hide() : void;
   initComponent() : void;
   onDestroy() : void;
   onDisable() : void;
   onHide(animateTarget:any /*String/Ext.Element/Ext.Component*/,callback:Function,scope:Object) : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   onShow(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : void;
   setPagePosition(x:Number,y:Number,animate:any /*Boolean/Object*/) : Ext_Component;
   setTarget(t:any /*String/HTMLElement/Ext.Element*/) : void;
   show() : void;
   showAt(xy:Number[]) : void;
}
interface Ext_toolbar_Fill extends Ext_Component {
// Cfg
// Properties
   isFill : Boolean;
// Events
// Methods
}
interface Ext_toolbar_Item extends Ext_Component {
// Cfg
   overflowText : String;
// Properties
// Events
// Methods
   disable(silent:Boolean) : void;
   enable(silent:Boolean) : void;
   focus(selectText:Boolean,delay:any /*Boolean/Number*/) : Ext_Component;
}
interface Ext_toolbar_Paging extends Ext_toolbar_Toolbar {
// Cfg
   afterPageText : String;
   beforePageText : String;
   displayInfo : Boolean;
   displayMsg : String;
   emptyMsg : String;
   firstText : String;
   inputItemWidth : Number;
   lastText : String;
   nextText : String;
   prependButtons : Boolean;
   prevText : String;
   refreshText : String;
   store : Ext_data_Store;
// Properties
// Events
   beforechange(_this:Ext_toolbar_Paging,page:Number,eOpts:Object) : void;
   change(_this:Ext_toolbar_Paging,pageData:Object,eOpts:Object) : void;
// Methods
   bind(store:Ext_data_Store) : void;
   doRefresh() : void;
   getStoreListeners() : Object;
   initComponent() : void;
   moveFirst() : void;
   moveLast() : void;
   moveNext() : void;
   movePrevious() : void;
   onDestroy() : void;
   unbind(store:Ext_data_Store) : void;
}
interface Ext_toolbar_Separator extends Ext_toolbar_Item {
// Cfg
   baseCls : String;
   border : any /*Number/String/Boolean*/;
// Properties
// Events
// Methods
}
interface Ext_toolbar_Spacer extends Ext_Component {
// Cfg
   baseCls : String;
// Properties
// Events
// Methods
}
interface Ext_toolbar_TextItem extends Ext_toolbar_Item {
// Cfg
   baseCls : String;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   text : String;
// Properties
// Events
// Methods
   constructor(text:Object) : Ext_toolbar_TextItem;
   setText(text:String) : void;
}
interface Ext_toolbar_Toolbar extends Ext_container_Container {
// Cfg
   baseCls : String;
   defaultType : String;
   enableOverflow : Boolean;
   layout : any /*String/Object*/;
   menuTriggerCls : String;
   vertical : Boolean;
// Properties
   isToolbar : Boolean;
// Events
   overflowchange(c:Object,lastOverflow:Boolean,eOpts:Object) : void;
// Methods
   constructor(config:any /*Object/Object[]*/) : Ext_toolbar_Toolbar;
   add(args:Object[]) : void;
   initComponent() : void;
   onAdd(component:Ext_Component,position:Number) : void;
   onBeforeAdd(item:Ext_Component) : void;
   onRemove(component:Ext_Component,autoDestroy:Boolean) : void;
}
interface Ext_tree_Column extends Ext_grid_column_Column {
// Cfg
   tdCls : String;
// Properties
// Events
// Methods
   defaultRenderer() : void;
   initComponent() : void;
}
interface Ext_tree_Panel extends Ext_panel_Table {
// Cfg
   //animate : Boolean;
   deferRowRender : Boolean;
   displayField : String;
   folderSort : Boolean;
   hideHeaders : Boolean;
   lines : Boolean;
   root : any /*Ext.data.Model/Ext.data.NodeInterface/Object*/;
   rootVisible : Boolean;
   rowLines : Boolean;
   selType : String;
   singleExpand : Boolean;
 //  store : Ext_data_TreeStore;
   useArrows : Boolean;
   viewType : String;
// Properties
// Events
   afteritemcollapse(node:Ext_data_NodeInterface,index:Number,item:HTMLElement,eOpts:Object) : void;
   afteritemexpand(node:Ext_data_NodeInterface,index:Number,item:HTMLElement,eOpts:Object) : void;
   beforeitemappend(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,eOpts:Object) : void;
   beforeitemcollapse(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   beforeitemexpand(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   beforeiteminsert(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,refNode:Ext_data_NodeInterface,eOpts:Object) : void;
   beforeitemmove(_this:Ext_data_NodeInterface,oldParent:Ext_data_NodeInterface,newParent:Ext_data_NodeInterface,index:Number,eOpts:Object) : void;
   beforeitemremove(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,isMove:Boolean,eOpts:Object) : void;
   beforeload(store:Ext_data_Store,operation:Ext_data_Operation,eOpts:Object) : void;
   checkchange(node:Ext_data_NodeInterface,checked:Boolean,eOpts:Object) : void;
   itemappend(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,index:Number,eOpts:Object) : void;
   itemcollapse(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   itemexpand(_this:Ext_data_NodeInterface,eOpts:Object) : void;
   iteminsert(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,refNode:Ext_data_NodeInterface,eOpts:Object) : void;
   itemmove(_this:Ext_data_NodeInterface,oldParent:Ext_data_NodeInterface,newParent:Ext_data_NodeInterface,index:Number,eOpts:Object) : void;
   itemremove(_this:Ext_data_NodeInterface,node:Ext_data_NodeInterface,isMove:Boolean,eOpts:Object) : void;
   load(_this:Ext_data_TreeStore,node:Ext_data_NodeInterface,records:Ext_data_Model[],successful:Boolean,eOpts:Object) : void;
// Methods
   collapseAll(callback:Function,scope:Object) : void;
   collapseNode(record:Ext_data_Model,deep:Boolean,callback:Function,scope:Object) : void;
   expandAll(callback:Function,scope:Object) : void;
   expandNode(record:Ext_data_Model,deep:Boolean,callback:Function,scope:Object) : void;
   expandPath(path:String,field:String,separator:String,callback:Function,scope:Object) : void;
   getChecked() : Ext_data_NodeInterface[];
   getRootNode() : Ext_data_NodeInterface;
   initComponent() : void;
   selectPath(path:String,field:String,separator:String,callback:Function,scope:Object) : void;
   setRootNode(root:any /*Ext.data.Model/Ext.data.NodeInterface/Object*/) : Ext_data_NodeInterface;
}
interface Ext_tree_plugin_TreeViewDragDrop extends Ext_AbstractPlugin {
// Cfg
   allowContainerDrops : Boolean;
   allowParentInserts : Boolean;
   appendOnly : Boolean;
   ddGroup : String;
   dragGroup : String;
   dragText : String;
   dropGroup : String;
   enableDrag : Boolean;
   enableDrop : Boolean;
   expandDelay : String;
   nodeHighlightColor : String;
   nodeHighlightOnDrop : Boolean;
   nodeHighlightOnRepair : Boolean;
// Properties
// Events
   beforedrop(node:HTMLElement,data:Object,overModel:Ext_data_Model,dropPosition:String,dropHandler:Object,eOpts:Object) : void;
   drop(node:HTMLElement,data:Object,overModel:Ext_data_Model,dropPosition:String,eOpts:Object) : void;
// Methods
   init(client:Ext_Component) : void;
}
interface Ext_tree_View extends Ext_view_Table {
// Cfg
   //animate : Boolean;
   blockRefresh : Boolean;
   deferInitialRefresh : Boolean;
   loadMask : any /*Boolean/Object*/;
   loadingCls : String;
   rootVisible : Boolean;
   stripeRows : Boolean;
// Properties
// Events
   afteritemcollapse(node:Ext_data_NodeInterface,index:Number,item:HTMLElement,eOpts:Object) : void;
   afteritemexpand(node:Ext_data_NodeInterface,index:Number,item:HTMLElement,eOpts:Object) : void;
// Methods
   afterComponentLayout(width:Number,height:Number,oldWidth:Number,oldHeight:Number) : void;
   collapse(record:Ext_data_Model,deep:Boolean,callback:Function,scope:Object) : void;
   collectData(records:Ext_data_Model[],startIndex:Number) : Object[];
   expand(record:Ext_data_Model,deep:Boolean,callback:Function,scope:Object) : void;
   getTreeStore() : void;
   initComponent() : void;
   toggle(record:Ext_data_Model,deep:Boolean,callback:Function,scope:Object) : void;
}
interface Ext_tree_ViewDragZone extends Ext_view_DragZone {
// Cfg
// Properties
// Events
// Methods
   afterRepair() : void;
}
interface Ext_tree_ViewDropZone extends Ext_view_DropZone {
// Cfg
   allowContainerDrop : String;
   allowParentInsert : Boolean;
   appendOnly : String;
   expandDelay : String;
// Properties
// Events
// Methods
   notifyOut(source:Ext_dd_DragSource,e:Event,data:Object) : void;
   onContainerOver(source:Ext_dd_DragSource,e:Event,data:Object) : String;
   onNodeOver(nodeData:Object,source:Ext_dd_DragSource,e:Event,data:Object) : String;
}
interface Ext_util_AbstractMixedCollection extends Ext_Base {
// Cfg
   allowFunctions : Boolean;
// Properties
   isMixedCollection : Boolean;
// Events
   add(index:Number,o:Object,key:String,eOpts:Object) : void;
   clear(eOpts:Object) : void;
   remove(o:Object,key:String,eOpts:Object) : void;
   replace(key:String,old:Object,_new:Object,eOpts:Object) : void;
// Methods
   constructor(allowFunctions:Object,keyFn:Object) : Ext_util_AbstractMixedCollection;
   add(key:any /*String/Object*/,o:Object) : Object;
   addAll(objs:any /*Object/Array*/) : void;
   clear() : void;
   clone() : Ext_util_MixedCollection;
   collect(property:String,root:String,allowBlank:Boolean) : Array;
   contains(o:Object) : Boolean;
   containsKey(key:String) : Boolean;
   each(fn:Function,scope:Object) : void;
   eachKey(fn:Function,scope:Object) : void;
   filter(property:any /*Ext.util.Filter[]/String*/,value:any /*String/RegExp*/,anyMatch:Boolean,caseSensitive:Boolean) : Ext_util_MixedCollection;
   filterBy(fn:Function,scope:Object) : Ext_util_MixedCollection;
   findBy(fn:Function,scope:Object) : Object;
   findIndex(property:String,value:any /*String/RegExp*/,start:Number,anyMatch:Boolean,caseSensitive:Boolean) : Number;
   findIndexBy(fn:Function,scope:Object,start:Number) : Number;
   first() : Object;
   get(key:any /*String/Number*/) : Object;
   getAt(index:Number) : Object;
   getByKey(key:any /*String/Number*/) : Object;
   getCount() : Number;
   getKey(item:Object) : Object;
   getRange(startIndex:Number,endIndex:Number) : Array;
   indexOf(o:Object) : Number;
   indexOfKey(key:String) : Number;
   insert(index:Number,key:String,o:Object) : Object;
   last() : Object;
   remove(o:Object) : Object;
   removeAll(items:Array) : Ext_util_MixedCollection;
   removeAt(index:Number) : Object;
   removeAtKey(key:String) : Object;
   replace(key:String,o:Object) : Object;
   sum(property:String,root:String,start:Number,end:Number) : Number;
}
interface Ext_util_Animate extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   animate(config:Object) : Object;
   getActiveAnimation() : any /*Ext.fx.Anim/Boolean*/;
   hasActiveFx() : any /*Ext.fx.Anim/Boolean*/;
   sequenceFx() : Object;
   stopAnimation() : Ext_Element;
   stopFx() : Ext_Element;
   syncFx() : Object;
}
interface Ext_util_Bindable extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   bindStore(store:any /*Ext.data.AbstractStore/String*/,initial:Boolean) : void;
   bindStoreListeners(store:Ext_data_AbstractStore) : void;
   getStore() : Ext_data_AbstractStore;
   getStoreListeners() : Object;
   onBindStore(store:Ext_data_AbstractStore,initial:Boolean) : void;
   onUnbindStore(store:Ext_data_AbstractStore,initial:Boolean) : void;
   unbindStoreListeners(store:Ext_data_AbstractStore) : void;
}
interface Ext_util_ClickRepeater extends Ext_util_Observable {
// Cfg
   accelerate : Boolean;
   delay : Number;
   el : any /*String/HTMLElement/Ext.Element*/;
   interval : Number;
   pressedCls : String;
   preventDefault : Boolean;
   stopDefault : Boolean;
// Properties
// Events
   click(_this:Ext_util_ClickRepeater,e:Ext_EventObject,eOpts:Object) : void;
   mousedown(_this:Ext_util_ClickRepeater,e:Ext_EventObject,eOpts:Object) : void;
   mouseup(_this:Ext_util_ClickRepeater,e:Ext_EventObject,eOpts:Object) : void;
// Methods
   constructor(el:any /*String/HTMLElement/Ext.Element*/,config:Object) : Ext_util_ClickRepeater;
   disable(force:Object) : void;
   enable() : void;
   setDisabled(disabled:Boolean) : void;
}
interface Ext_util_ComponentDragger extends Ext_dd_DragTracker {
// Cfg
   constrain : Boolean;
   constrainDelegate : Boolean;
   //delegate : any /*String/Ext.Element*/;
// Properties
// Events
// Methods
   constructor(comp:Object,config:Object) : Ext_util_ComponentDragger;
   onDrag(e:Ext_EventObject) : void;
   onEnd(e:Ext_EventObject) : void;
   onStart(e:Ext_EventObject) : void;
}
interface Ext_util_Cookies extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   clear(name:String,path:String) : void;
   get(name:String) : Object;
   set(name:String,value:Object,expires:Object,path:String,domain:String,secure:Boolean) : void;
}
interface Ext_util_CSS extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   createStyleSheet(cssText:String,id:String) : CSSStyleSheet;
   getRule(selector:any /*String/String[]*/,refreshCache:Boolean) : CSSStyleRule;
   getRules(refreshCache:Boolean) : Object;
   refreshCache() : Object;
   removeStyleSheet(id:String) : void;
   swapStyleSheet(id:String,url:String) : void;
   updateRule(selector:any /*String/String[]*/,property:String,value:String) : Boolean;
}
interface Ext_util_DelayedTask {
// Cfg
// Properties
// Events
// Methods
   constructor(fn:Function,scope:Object,args:Array) : Ext_util_DelayedTask;
   cancel() : void;
   delay(delay:Number,newFn:Function,newScope:Object,newArgs:Array) : void;
}
interface Ext_util_ElementContainer extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor() : Ext_util_ElementContainer;
   addChildEls() : void;
   removeChildEls(testFn:Function) : void;
}
interface Ext_util_Event {
// Cfg
// Properties
   isEvent : Boolean;
// Events
// Methods
}
interface Ext_util_Filter extends Ext_Base {
// Cfg
   anyMatch : Boolean;
   caseSensitive : Boolean;
   exactMatch : Boolean;
   filterFn : Function;
   property : String;
   root : String;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_util_Filter;
}
interface Ext_util_Floating extends Ext_Base {
// Cfg
   focusOnToFront : Boolean;
   shadow : any /*String/Boolean*/;
   shadowOffset : any /*String/Boolean*/;
// Properties
// Events
// Methods
   alignTo(element:any /*Ext.Component/Ext.Element/HTMLElement/String*/,position:String,offsets:Number[]) : Ext_Component;
   center() : Ext_Component;
   doConstrain(constrainTo:any /*String/HTMLElement/Ext.Element/Ext.util.Region*/) : void;
   setActive(active:Boolean,newActive:Ext_Component) : void;
   toBack() : Ext_Component;
   toFront(preventFocus:Boolean) : Ext_Component;
}
interface Ext_util_Format {
// Cfg
// Properties
   currencyAtEnd : Boolean;
   currencyPrecision : Number;
   currencySign : String;
   decimalSeparator : String;
   thousandSeparator : String;
// Events
// Methods
   capitalize(string:String) : String;
   currency(value:any /*Number/String*/,sign:String,decimals:Number,end:Boolean) : String;
   date(value:any /*String/Date*/,format:String) : String;
   dateRenderer(format:String) : Function;
   defaultValue(value:Object,defaultValue:String) : String;
   ellipsis(value:String,length:Number,word:Boolean) : String;
   escapeRegex(str:String) : String;
   fileSize(size:any /*Number/String*/) : String;
   format(string:String,value1:String,value2:String) : String;
   htmlDecode(value:String) : String;
   htmlEncode(value:String) : String;
   leftPad(string:String,size:Number,character:String) : String;
   lowercase(value:String) : String;
   math() : Function;
   nl2br(The:String) : String;
   number(v:Number,format:String) : String;
   numberRenderer(format:String) : Function;
   parseBox(v:any /*Number/String*/) : Object;
   plural(value:Number,singular:String,plural:String) : void;
   round(value:any /*Number/String*/,precision:Number) : Number;
   stripScripts(value:Object) : String;
   stripTags(value:Object) : String;
   substr(value:String,start:Number,length:Number) : String;
   trim(string:String) : String;
   undef(value:Object) : Object;
   uppercase(value:String) : String;
   usMoney(value:any /*Number/String*/) : String;
}
interface Ext_util_Grouper extends Ext_util_Sorter {
// Cfg
// Properties
// Events
// Methods
   getGroupString(instance:Ext_data_Model) : String;
}
interface Ext_util_HashMap extends Ext_Base {
// Cfg
   keyFn : Function;
// Properties
// Events
   add(_this:Ext_util_HashMap,key:String,value:Object,eOpts:Object) : void;
   clear(_this:Ext_util_HashMap,eOpts:Object) : void;
   remove(_this:Ext_util_HashMap,key:String,value:Object,eOpts:Object) : void;
   replace(_this:Ext_util_HashMap,key:String,value:Object,old:Object,eOpts:Object) : void;
// Methods
   constructor(config:Object) : Ext_util_HashMap;
   add(key:any /*String/Object*/,o:Object) : Object;
   clear(initial:Object) : Ext_util_HashMap;
   clone() : Ext_util_HashMap;
   contains(value:Object) : Boolean;
   containsKey(key:String) : Boolean;
   each(fn:Function,scope:Object) : Ext_util_HashMap;
   get(key:String) : Object;
   getCount() : Number;
   getKey(o:Object) : String;
   getKeys() : Array;
   getValues() : Array;
   remove(o:Object) : Boolean;
   removeAtKey(key:String) : Boolean;
   replace(key:String,value:Object) : Object;
}
interface Ext_util_History extends Ext_Base {
// Cfg
// Properties
   fieldId : String;
   iframeId : String;
   useTopWindow : Boolean;
// Events
   change(token:String,eOpts:Object) : void;
   ready(The:Ext_util_History,eOpts:Object) : void;
// Methods
   constructor() : Ext_util_History;
   add(token:String,preventDuplicates:Boolean) : void;
   back() : void;
   forward() : void;
   getToken() : String;
   init(onReady:Function,scope:Object) : void;
}
interface Ext_util_Inflector extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   classify(word:String) : String;
   clearPlurals() : void;
   clearSingulars() : void;
   isTransnumeral(word:String) : Boolean;
   ordinalize(number:Number) : String;
   plural(matcher:RegExp,replacer:String) : void;
   pluralize(word:String) : String;
   singular(matcher:RegExp,replacer:String) : void;
   singularize(word:String) : String;
}
interface Ext_util_KeyMap extends Ext_Base {
// Cfg
   binding : any /*Object/Object[][]*/;
   eventName : String;
   ignoreInputFields : Boolean;
   processEvent : Function;
   processEventScope : Object;
   target : any /*Ext.Component/Ext.Element/HTMLElement/String*/;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_util_KeyMap;
   addBinding(binding:any /*Object/Object[]*/) : void;
   destroy(removeTarget:Boolean) : void;
   disable() : void;
   enable() : void;
   isEnabled() : Boolean;
   on(key:any /*Number/Number[]/Object*/,fn:Function,scope:Object) : void;
   setDisabled(disabled:Boolean) : void;
}
interface Ext_util_KeyNav extends Ext_Base {
// Cfg
   defaultEventAction : String;
   disabled : Boolean;
   eventName : String;
   forceKeyDown : Boolean;
   ignoreInputFields : Boolean;
   processEvent : Function;
   processEventScope : Object;
   target : any /*Ext.Component/Ext.Element/HTMLElement/String*/;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_util_KeyNav;
   destroy(removeEl:Boolean) : void;
   disable() : void;
   enable() : void;
   setDisabled(disabled:Boolean) : void;
}
interface Ext_util_LruCache extends Ext_util_HashMap {
// Cfg
   maxSize : Number;
// Properties
// Events
// Methods
   add(key:any /*String/Object*/,o:Object) : Object;
   clear(initial:Object) : Ext_util_HashMap;
   each(fn:Function,scope:Object,reverse:Boolean) : Ext_util_LruCache;
   get(key:String) : Object;
   prune() : void;
}
interface Ext_util_Memento extends Ext_Base {
// Cfg
// Properties
   target : Object;
// Events
// Methods
   constructor(target:Object,props:any /*String/String[]*/) : Ext_util_Memento;
   capture(props:any /*String/String[]*/,target:Object) : void;
   remove(props:any /*String/String[]*/) : void;
   restore(props:any /*String/String[]*/,clear:Boolean,target:Object) : void;
   restoreAll(clear:Boolean,target:Object) : void;
}
interface Ext_util_MixedCollection extends Ext_util_AbstractMixedCollection {
// Cfg
// Properties
// Events
// Methods
   constructor(allowFunctions:Boolean,keyFn:Function) : Ext_util_MixedCollection;
   findInsertionIndex(newItem:Object,sorterFn:Function) : Number;
   reorder(mapping:Object) : void;
   sortBy(sorterFn:Function) : void;
   sortByKey(direction:String,fn:Function) : void;
}
interface Ext_util_Observable extends Ext_Base {
// Cfg
   listeners : Object;
// Properties
   hasListeners : Object;
   isObservable : Boolean;
// Events
// Methods
   addEvents(eventNames:any /*Object/String...*/) : void;
   addListener(eventName:any /*String/Object*/,fn:Function,scope:Object,options:Object) : void;
   addManagedListener(item:any /*Ext.util.Observable/Ext.Element*/,ename:any /*Object/String*/,fn:Function,scope:Object,opt:Object) : void;
   clearListeners() : void;
   clearManagedListeners() : void;
   enableBubble(eventNames:any /*String/String[]*/) : void;
   fireEvent(eventName:String,args:Object[]) : Boolean;
   hasListener(eventName:String) : Boolean;
   mon(item:any /*Ext.util.Observable/Ext.Element*/,ename:any /*Object/String*/,fn:Function,scope:Object,opt:Object) : void;
   mun(item:any /*Ext.util.Observable/Ext.Element*/,ename:any /*Object/String*/,fn:Function,scope:Object) : void;
   on(eventName:any /*String/Object*/,fn:Function,scope:Object,options:Object) : void;
   relayEvents(origin:Object,events:String[],prefix:String) : void;
   removeListener(eventName:String,fn:Function,scope:Object) : void;
   removeManagedListener(item:any /*Ext.util.Observable/Ext.Element*/,ename:any /*Object/String*/,fn:Function,scope:Object) : void;
   resumeEvents() : void;
   suspendEvents(queueSuspended:Boolean) : void;
   un(eventName:String,fn:Function,scope:Object) : void;
}
interface Ext_util_Offset extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(x:Object,y:Object) : Ext_util_Offset;
}
interface Ext_util_Point extends Ext_util_Region {
// Cfg
// Properties
// Events
// Methods
   constructor(x:Number,y:Number) : Ext_util_Point;
   equals(The:any /*Ext.util.Point/Object*/) : Boolean;
   isWithin(p:any /*Ext.util.Point/Object*/,threshold:any /*Object/Number*/) : Boolean;
   roundedEquals(p:any /*Ext.util.Point/Object*/) : Boolean;
   toString() : String;
   translate(x:any /*Ext.util.Offset/Object*/,y:Number) : Ext_util_Region;
}
interface Ext_util_ProtoElement extends Ext_Base {
// Cfg
// Properties
   clsProp : String;
   removedProp : String;
   styleIsText : Boolean;
   styleProp : String;
// Events
// Methods
   addCls(cls:String) : Ext_util_ProtoElement;
   flush() : void;
   hasCls(cls:String) : Boolean;
   removeCls(cls:String) : Ext_util_ProtoElement;
   setStyle(prop:any /*String/Object*/,value:String) : Ext_util_ProtoElement;
   writeTo(to:Object) : Object;
}
interface Ext_util_Queue extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor() : Ext_util_Queue;
   clear() : void;
   getCount() : Number;
   remove(obj:Object) : Object;
}
interface Ext_util_Region extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(top:Number,right:Number,bottom:Number,left:Number) : Ext_util_Region;
   adjust(top:Number,right:Number,bottom:Number,left:Number) : Ext_util_Region;
   constrainTo(targetRegion:Ext_util_Region) : Ext_util_Region;
   contains(region:Ext_util_Region) : Boolean;
   copy() : Ext_util_Region;
   copyFrom(p:Ext_util_Region) : Ext_util_Region;
   equals(region:Ext_util_Region) : Boolean;
   getOutOfBoundOffset(axis:String,p:Ext_util_Point) : Ext_util_Offset;
   getOutOfBoundOffsetX(p:Number) : Number;
   getOutOfBoundOffsetY(p:Number) : Number;
   intersect(region:Ext_util_Region) : any /*Ext.util.Region/Boolean*/;
   isOutOfBound(axis:String,p:any /*Ext.util.Point/Number*/) : Boolean;
   isOutOfBoundX(p:Number) : Boolean;
   isOutOfBoundY(p:Number) : Boolean;
   round() : Ext_util_Region;
   translateBy(x:any /*Ext.util.Offset/Object*/,y:Number) : Ext_util_Region;
   union(region:Ext_util_Region) : Ext_util_Region;
}
interface Ext_util_Renderable extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   afterRender() : void;
   doAutoRender() : void;
   ensureAttachedToBody(runLayout:Boolean) : void;
   getInsertPosition(position:any /*String/Number/Ext.dom.Element/HTMLElement*/) : HTMLElement;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   render(container:any /*Ext.Element/HTMLElement/String*/,position:any /*String/Number*/) : void;
}
interface Ext_util_Sortable extends Ext_Base {
// Cfg
// Properties
   defaultSortDirection : String;
   isSortable : Boolean;
   sortRoot : String;
   sorters : Ext_util_MixedCollection;
// Events
// Methods
   generateComparator() : void;
   getFirstSorter() : Ext_util_Sorter;
   initSortable() : void;
   sort(sorters:any /*String/Ext.util.Sorter[]*/,direction:String) : Ext_util_Sorter[];
}
interface Ext_util_Sorter extends Ext_Base {
// Cfg
   direction : String;
   property : String;
   root : String;
   sorterFn : Function;
   transform : Function;
// Properties
// Events
// Methods
   constructor(config:Object) : Ext_util_Sorter;
   setDirection(direction:String) : void;
   toggle() : void;
   updateSortFunction(fn:Function) : void;
}
interface Ext_util_TaskRunner extends Ext_Base {
// Cfg
   interval : Number;
// Properties
// Events
// Methods
   constructor(interval:any /*Number/Object*/) : Ext_util_TaskRunner;
   destroy() : void;
   newTask(config:Object) : void;
   start(task:Object) : Object;
   stop(task:Object) : Object;
   stopAll() : void;
}
interface Ext_util_TaskRunner_Task {
// Cfg
// Properties
   fireOnStart : Boolean;
// Events
// Methods
   destroy() : void;
   restart(interval:Number) : void;
   start(interval:Number) : void;
   stop() : void;
}
interface Ext_util_TextMetrics extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(bindTo:any /*String/HTMLElement/Ext.Element*/,fixedWidth:Number) : Ext_util_TextMetrics;
   bind(el:any /*String/HTMLElement/Ext.Element*/) : void;
   destroy() : void;
   getHeight(text:String) : Number;
   getSize(text:String) : Object;
   getWidth(text:String) : Number;
   setFixedWidth(width:Number) : void;
}
interface Ext_Version {
// Cfg
// Properties
// Events
// Methods
   constructor(version:any /*String/Number*/) : Ext_Version;
   equals(target:any /*String/Number*/) : Boolean;
   getBuild() : Number;
   getMajor() : Number;
   getMinor() : Number;
   getPatch() : Number;
   getRelease() : Number;
   getShortVersion() : String;
   gt(target:any /*String/Number*/) : Boolean;
   gtEq(target:any /*String/Number*/) : Boolean;
   isGreaterThan(target:any /*String/Number*/) : Boolean;
   isGreaterThanOrEqual(target:any /*String/Number*/) : Boolean;
   isLessThan(target:any /*String/Number*/) : Boolean;
   isLessThanOrEqual(target:any /*String/Number*/) : Boolean;
   lt(target:any /*String/Number*/) : Boolean;
   ltEq(target:any /*String/Number*/) : Boolean;
   match(target:any /*String/Number*/) : Boolean;
   toArray() : Number[];
}
interface Ext_view_AbstractView extends Ext_Component {
// Cfg
   blockRefresh : Boolean;
   deferEmptyText : Boolean;
   deferInitialRefresh : Boolean;
   disableSelection : Boolean;
   emptyText : String;
   itemCls : String;
   itemSelector : String;
   itemTpl : any /*String/String[]/Ext.XTemplate*/;
   loadMask : any /*Boolean/Object*/;
   loadingCls : String;
   loadingHeight : Number;
   loadingText : String;
   multiSelect : Boolean;
   overItemCls : String;
   preserveScrollOnRefresh : Boolean;
   selectedItemCls : String;
   simpleSelect : Boolean;
   singleSelect : Boolean;
   store : Ext_data_Store;
   tpl : any /*String/String[]/Ext.XTemplate*/;
   trackOver : Boolean;
// Properties
// Events
   beforerefresh(_this:Ext_view_View,eOpts:Object) : void;
   itemadd(records:Ext_data_Model[],index:Number,node:HTMLElement[],eOpts:Object) : void;
   itemremove(record:Ext_data_Model,index:Number,eOpts:Object) : void;
   itemupdate(record:Ext_data_Model,index:Number,node:HTMLElement,eOpts:Object) : void;
   refresh(_this:Ext_view_View,eOpts:Object) : void;
   viewready(_this:Ext_view_View,eOpts:Object) : void;
// Methods
   afterRender() : void;
   bindStore(store:Ext_data_Store) : void;
   clearSelections() : void;
   collectData(records:Ext_data_Model[],startIndex:Number) : Object[];
   deselect(records:any /*Ext.data.Model[]/Number*/,suppressEvent:Boolean) : void;
   findItemByChild(node:HTMLElement) : HTMLElement;
   findTargetByEvent(e:Ext_EventObject) : void;
   getNode(nodeInfo:any /*HTMLElement/String/Number/Ext.data.Model*/) : HTMLElement;
   getNodes(start:Number,end:Number) : HTMLElement[];
   getRecord(node:any /*Ext.Element/HTMLElement*/) : Ext_data_Model;
   getRecords(nodes:HTMLElement[]) : Ext_data_Model[];
   getSelectedNodes() : HTMLElement[];
   getSelectedRecords() : Ext_data_Model[];
   getSelectionCount() : Number;
   getSelectionModel() : Ext_selection_Model;
   getStore() : Ext_data_Store;
   getStoreListeners() : Object;
   indexOf(nodeInfo:any /*HTMLElement/String/Number/Ext.data.Model*/) : Number;
   initComponent() : void;
   isSelected(node:any /*HTMLElement/Number/Ext.data.Model*/) : Boolean;
   onBindStore(store:Ext_data_AbstractStore,initial:Boolean) : void;
   onDestroy() : void;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   onUnbindStore(store:Ext_data_AbstractStore,initial:Boolean) : void;
   prepareData(data:any /*Object/Object[]*/,recordIndex:Number,record:Ext_data_Model) : any /*Array/Object*/;
   refresh() : void;
   refreshNode(index:Number) : void;
   select(records:any /*Ext.data.Model[]/Number*/,keepExisting:Boolean,suppressEvent:Boolean) : void;
}
interface Ext_view_BoundList extends Ext_view_View {
// Cfg
   baseCls : String;
   componentLayout : any /*String/Object*/;
   deferInitialRefresh : Boolean;
   displayField : String;
   itemCls : String;
   pageSize : Number;
   renderTpl : any /*Ext.XTemplate/String/String[]*/;
   shadow : any /*String/Boolean*/;
   tpl : any /*String/Ext.XTemplate*/;
   trackOver : Boolean;
// Properties
   pagingToolbar : Ext_toolbar_Paging;
// Events
// Methods
   bindStore(store:Ext_data_Store) : void;
   getInnerTpl(displayField:String) : String;
   onDestroy() : void;
   refresh() : void;
}
interface Ext_view_BoundListKeyNav extends Ext_util_KeyNav {
// Cfg
   boundList : Ext_view_BoundList;
// Properties
// Events
// Methods
   highlightAt(index:Number) : void;
   selectHighlighted(e:Object) : void;
}
interface Ext_view_DragZone extends Ext_dd_DragZone {
// Cfg
   containerScroll : Boolean;
// Properties
// Events
// Methods
   constructor(el:any /*String/HTMLElement/Ext.Element*/,config:Object) : Ext_view_DragZone;
   getDragData(e:Event) : Object;
   getRepairXY(e:Event) : Number[];
   init(id:String,sGroup:String,config:Object) : void;
   onInitDrag(x:Number,y:Number) : Boolean;
}
interface Ext_view_DropZone extends Ext_dd_DropZone {
// Cfg
// Properties
// Events
// Methods
   constructor(el:any /*String/HTMLElement/Ext.Element*/,config:Object) : Ext_view_DropZone;
   getTargetFromEvent(e:Event) : Object;
   notifyOut(source:Ext_dd_DragSource,e:Event,data:Object) : void;
   onContainerDrop(source:Ext_dd_DragSource,e:Event,data:Object) : Boolean;
   onContainerOver(source:Ext_dd_DragSource,e:Event,data:Object) : String;
   onNodeDrop(nodeData:Object,source:Ext_dd_DragSource,e:Event,data:Object) : Boolean;
   onNodeOver(nodeData:Object,source:Ext_dd_DragSource,e:Event,data:Object) : String;
}
interface Ext_view_Table extends Ext_view_View {
// Cfg
   baseCls : String;
   componentLayout : any /*String/Object*/;
   enableTextSelection : Boolean;
   firstCls : String;
   itemSelector : String;
   lastCls : String;
   markDirty : Boolean;
   overItemCls : String;
   selectedItemCls : String;
   stripeRows : Boolean;
   trackOver : Boolean;
// Properties
// Events
// Methods
   addRowCls(rowInfo:any /*HTMLElement/String/Number/Ext.data.Model*/,cls:String) : void;
   afterRender() : void;
   beforeDestroy() : void;
   collectData(records:Ext_data_Model[],startIndex:Number) : Object[];
   focusRow(rowIdx:any /*HTMLElement/String/Number/Ext.data.Model*/) : void;
   getFeature(id:String) : Ext_grid_feature_Feature;
   getPosition(local:Boolean) : Number[];
   getRowClass(record:Ext_data_Model,index:Number,rowParams:Object,store:Ext_data_Store) : String;
   getTableChunker() : void;
   initComponent() : void;
   refresh() : void;
   removeRowCls(rowInfo:any /*HTMLElement/String/Number/Ext.data.Model*/,cls:String) : void;
}
interface Ext_view_TableChunker extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor() : Ext_view_TableChunker;
}
interface Ext_view_TableLayout extends Ext_layout_component_Auto {
// Cfg
// Properties
// Events
// Methods
   beginLayout(ownerContext:Ext_layout_ContextItem) : void;
   calculate(ownerContext:Ext_layout_ContextItem) : void;
   finishedLayout(ownerContext:Ext_layout_ContextItem) : void;
}
interface Ext_view_View extends Ext_view_AbstractView {
// Cfg
// Properties
// Events
   beforecontainerclick(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforecontainercontextmenu(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforecontainerdblclick(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforecontainerkeydown(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforecontainermousedown(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforecontainermouseout(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforecontainermouseover(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforecontainermouseup(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   beforedeselect(_this:Ext_selection_DataViewModel,record:Ext_data_Model,eOpts:Object) : void;
   beforeitemclick(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeitemcontextmenu(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeitemdblclick(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeitemkeydown(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeitemmousedown(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeitemmouseenter(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeitemmouseleave(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeitemmouseup(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   beforeselect(_this:Ext_selection_DataViewModel,record:Ext_data_Model,eOpts:Object) : void;
   containerclick(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   containercontextmenu(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   containerdblclick(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   containerkeydown(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   containermouseout(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   containermouseover(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   containermouseup(_this:Ext_view_View,e:Ext_EventObject,eOpts:Object) : void;
   deselect(_this:Ext_selection_DataViewModel,record:Ext_data_Model,eOpts:Object) : void;
   focuschange(_this:Ext_selection_Model,oldFocused:Ext_data_Model,newFocused:Ext_data_Model,eOpts:Object) : void;
   highlightitem(view:Ext_view_View,node:Ext_Element,eOpts:Object) : void;
   itemclick(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   itemcontextmenu(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   itemdblclick(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   itemkeydown(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   itemmousedown(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   itemmouseenter(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   itemmouseleave(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   itemmouseup(_this:Ext_view_View,record:Ext_data_Model,item:HTMLElement,index:Number,e:Ext_EventObject,eOpts:Object) : void;
   select(_this:Ext_selection_DataViewModel,record:Ext_data_Model,eOpts:Object) : void;
   selectionchange(_this:Ext_selection_Model,selected:Ext_data_Model[],eOpts:Object) : void;
   unhighlightitem(view:Ext_view_View,node:Ext_Element,eOpts:Object) : void;
// Methods
   afterRender() : void;
   clearHighlight() : void;
   highlightItem(item:HTMLElement) : void;
   initComponent() : void;
   refresh() : void;
}
interface Ext_window_MessageBox extends Ext_window_Window {
// Cfg
   closeAction : String;
   cls : String;
   constrain : Boolean;
   height : Number;
   hideMode : String;
   layout : any /*String/Object*/;
   maxHeight : Number;
   maxWidth : Number;
   minHeight : Number;
   minWidth : Number;
   resizable : any /*Boolean/Object*/;
   title : String;
   width : Number;
// Properties
   CANCEL : Number;
   ERROR : String;
   INFO : String;
   NO : Number;
   OK : Number;
   OKCANCEL : Number;
   QUESTION : String;
   WARNING : String;
   YES : Number;
   YESNO : Number;
   YESNOCANCEL : Number;
   buttonText : Object;
   defaultTextHeight : Number;
   minProgressWidth : Number;
   minPromptWidth : Number;
// Events
// Methods
   alert(title:String,msg:String,fn:Function,scope:Object) : Ext_window_MessageBox;
   confirm(title:String,msg:String,fn:Function,scope:Object) : Ext_window_MessageBox;
   hide(animateTarget:any /*String/Ext.Element/Ext.Component*/,callback:Function,scope:Object) : Ext_Component;
   initComponent() : void;
   onShow(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : void;
   progress(title:String,msg:String,progressText:String) : Ext_window_MessageBox;
   prompt(title:String,msg:String,fn:Function,scope:Object,multiline:any /*Boolean/Number*/,value:String) : Ext_window_MessageBox;
   setIcon(icon:String) : Ext_window_MessageBox;
   show(config:Object) : Ext_window_MessageBox;
   updateProgress(value:Number,progressText:String,msg:String) : Ext_window_MessageBox;
   wait(msg:String,title:String,config:Object) : Ext_window_MessageBox;
}
interface Ext_window_Window extends Ext_panel_Panel {
// Cfg
   animateTarget : any /*String/Ext.Element*/;
   autoRender : any /*Boolean/String/HTMLElement/Ext.Element*/;
   baseCls : String;
   closable : Boolean;
   collapsed : Boolean;
   collapsible : Boolean;
   constrain : Boolean;
   constrainHeader : Boolean;
   constrainTo : any /*Ext.util.Region/Ext.Element*/;
   defaultFocus : any /*String/Number/Ext.Component*/;
   draggable : Boolean;
   expandOnShow : Boolean;
   hidden : Boolean;
   hideMode : String;
   maximizable : Boolean;
   maximized : Boolean;
   minHeight : Number;
   minWidth : Number;
   minimizable : Boolean;
   modal : Boolean;
   onEsc : Function;
   overlapHeader : Boolean;
   plain : Boolean;
   resizable : any /*Boolean/Object*/;
   x : Number;
   y : Number;
// Properties
   //dd : Ext_util_ComponentDragger;
   isWindow : Boolean;
// Events
   activate(_this:Ext_window_Window,eOpts:Object) : void;
   deactivate(_this:Ext_window_Window,eOpts:Object) : void;
   maximize(_this:Ext_window_Window,eOpts:Object) : void;
   minimize(_this:Ext_window_Window,eOpts:Object) : void;
   resize(_this:Ext_window_Window,width:Number,height:Number,eOpts:Object) : void;
   restore(_this:Ext_window_Window,eOpts:Object) : void;
// Methods
   afterCollapse(animated:Boolean) : void;
   afterExpand(animated:Boolean) : void;
   afterHide(callback:Function,scope:Object) : void;
   afterRender() : void;
   applyState(state:Object) : void;
   beforeDestroy() : void;
   beforeLayout() : void;
   getDefaultFocus() : void;
   getState() : Object;
   initComponent() : void;
   maximize() : Ext_window_Window;
   minimize() : Ext_window_Window;
   onRender(parentNode:Ext_core_Element,containerIdx:Number) : void;
   onShow(animateTarget:any /*String/Ext.Element*/,callback:Function,scope:Object) : void;
   restore() : Ext_window_Window;
   toggleMaximize() : Ext_window_Window;
}
interface Ext_WindowManager extends Ext_ZIndexManager {
// Cfg
// Properties
// Events
// Methods
}
interface Ext_XTemplate extends Ext_Template {
// Cfg
   compiled : Boolean;
   definitions : any /*String/Array*/;
// Properties
// Events
// Methods
   applyOut(values:any /*Object/Array*/,out:Array) : Array;
   compile() : Ext_XTemplate;
}
interface Ext_XTemplateCompiler extends Ext_XTemplateParser {
// Cfg
// Properties
// Events
// Methods
   doCase(action:String,actions:Object) : void;
   doDefault() : void;
   doElse() : void;
   doElseIf(action:String,actions:Object) : void;
   doEnd(type:String,actions:Object) : void;
   doEval(text:String) : void;
   doExec(action:String,actions:Object) : void;
   doExpr(expr:String) : void;
   doFor(action:String,actions:Object) : void;
   doIf(action:String,actions:Object) : void;
   doSwitch(action:String,actions:Object) : void;
   doTag() : void;
   doText(text:String) : void;
}
interface Ext_XTemplateParser extends Ext_Base {
// Cfg
// Properties
   level : Number;
// Events
// Methods
   constructor(config:Object) : Ext_XTemplateParser;
   doCase(action:String,actions:Object) : void;
   doDefault() : void;
   doElse() : void;
   doElseIf(action:String,actions:Object) : void;
   doEnd(type:String,actions:Object) : void;
   doEval(text:String) : void;
   doExec(action:String,actions:Object) : void;
   doExpr(expr:String) : void;
   doFor(action:String,actions:Object) : void;
   doIf(action:String,actions:Object) : void;
   doSwitch(action:String,actions:Object) : void;
   doTag() : void;
   doText(text:String) : void;
   doTpl() : void;
}
interface Ext_ZIndexManager extends Ext_Base {
// Cfg
// Properties
// Events
// Methods
   constructor(container:Object) : Ext_ZIndexManager;
   bringToFront(comp:any /*String/Object*/) : Boolean;
   each(fn:Function,scope:Object) : void;
   eachBottomUp(fn:Function,scope:Object) : void;
   eachTopDown(fn:Function,scope:Object) : void;
   get(id:any /*String/Object*/) : Ext_Component;
   getActive() : Ext_Component;
   getBy(fn:Function,scope:Object) : Array;
   hideAll() : void;
   register(comp:Ext_Component) : void;
   sendToBack(comp:any /*String/Object*/) : Ext_Component;
   unregister(comp:Ext_Component) : void;
}
/* internal JS type: Function*/
/* internal JS type: Number*/
/* internal JS type: Object*/
/* internal JS type: RegExp*/
/* internal JS type: String*/
