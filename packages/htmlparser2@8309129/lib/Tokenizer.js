function whitespace(e){return" "===e||"	"===e||"\r"===e||"\n"===e}function Tokenizer(e,t){this._state=TEXT,this._buffer="",this._sectionStart=0,this._index=0,this._options=e,this._special=0,this._cbs=t,this._running=!0}module.exports=Tokenizer;var i=0,TEXT=i++,BEFORE_TAG_NAME=i++,IN_TAG_NAME=i++,BEFORE_CLOSING_TAG_NAME=i++,IN_CLOSING_TAG_NAME=i++,AFTER_CLOSING_TAG_NAME=i++,BEFORE_ATTRIBUTE_NAME=i++,IN_ATTRIBUTE_NAME=i++,AFTER_ATTRIBUTE_NAME=i++,BEFORE_ATTRIBUTE_VALUE=i++,IN_ATTRIBUTE_VALUE_DOUBLE_QUOTES=i++,IN_ATTRIBUTE_VALUE_SINGLE_QUOTES=i++,IN_ATTRIBUTE_VALUE_NO_QUOTES=i++,BEFORE_DECLARATION=i++,IN_DECLARATION=i++,IN_PROCESSING_INSTRUCTION=i++,BEFORE_COMMENT=i++,IN_COMMENT=i++,AFTER_COMMENT_1=i++,AFTER_COMMENT_2=i++,BEFORE_CDATA_1=i++,BEFORE_CDATA_2=i++,BEFORE_CDATA_3=i++,BEFORE_CDATA_4=i++,BEFORE_CDATA_5=i++,BEFORE_CDATA_6=i++,IN_CDATA=i++,AFTER_CDATA_1=i++,AFTER_CDATA_2=i++,BEFORE_SPECIAL=i++,BEFORE_SPECIAL_END=i++,BEFORE_SCRIPT_1=i++,BEFORE_SCRIPT_2=i++,BEFORE_SCRIPT_3=i++,BEFORE_SCRIPT_4=i++,BEFORE_SCRIPT_5=i++,AFTER_SCRIPT_1=i++,AFTER_SCRIPT_2=i++,AFTER_SCRIPT_3=i++,AFTER_SCRIPT_4=i++,AFTER_SCRIPT_5=i++,BEFORE_STYLE_1=i++,BEFORE_STYLE_2=i++,BEFORE_STYLE_3=i++,BEFORE_STYLE_4=i++,AFTER_STYLE_1=i++,AFTER_STYLE_2=i++,AFTER_STYLE_3=i++,AFTER_STYLE_4=i++;Tokenizer.prototype.write=function(e){for(this._buffer+=e;this._index<this._buffer.length&&this._running;){var t=this._buffer.charAt(this._index);this._state===TEXT?"<"===t&&(this._emitIfToken("text"),this._state=BEFORE_TAG_NAME,this._sectionStart=this._index):this._state===BEFORE_TAG_NAME?"/"===t?this._state=BEFORE_CLOSING_TAG_NAME:">"===t||this._special>0?this._state=TEXT:whitespace(t)||("!"===t?(this._state=BEFORE_DECLARATION,this._sectionStart=this._index+1):"?"===t?(this._state=IN_PROCESSING_INSTRUCTION,this._sectionStart=this._index+1):this._options&&this._options.xmlMode||"s"!==t&&"S"!==t?(this._state=IN_TAG_NAME,this._sectionStart=this._index):(this._state=BEFORE_SPECIAL,this._sectionStart=this._index)):this._state===IN_TAG_NAME?"/"===t?(this._emitToken("opentagname"),this._cbs.onselfclosingtag(),this._state=AFTER_CLOSING_TAG_NAME):">"===t?(this._emitToken("opentagname"),this._cbs.onopentagend(),this._state=TEXT,this._sectionStart=this._index+1):whitespace(t)&&(this._emitToken("opentagname"),this._state=BEFORE_ATTRIBUTE_NAME):this._state===BEFORE_CLOSING_TAG_NAME?whitespace(t)||(">"===t?this._state=TEXT:this._special>0?("s"===t||"S"===t)&&(this._state=BEFORE_SPECIAL_END):(this._state=IN_CLOSING_TAG_NAME,this._sectionStart=this._index)):this._state===IN_CLOSING_TAG_NAME?">"===t?(this._emitToken("closetag"),this._state=TEXT,this._sectionStart=this._index+1,this._special=0):whitespace(t)&&(this._emitToken("closetag"),this._state=AFTER_CLOSING_TAG_NAME,this._special=0):this._state===AFTER_CLOSING_TAG_NAME?">"===t&&(this._state=TEXT,this._sectionStart=this._index+1):this._state===BEFORE_ATTRIBUTE_NAME?">"===t?(this._state=TEXT,this._cbs.onopentagend(),this._sectionStart=this._index+1):"/"===t?(this._cbs.onselfclosingtag(),this._state=AFTER_CLOSING_TAG_NAME):whitespace(t)||(this._state=IN_ATTRIBUTE_NAME,this._sectionStart=this._index):this._state===IN_ATTRIBUTE_NAME?"="===t?(this._emitIfToken("attribname"),this._state=BEFORE_ATTRIBUTE_VALUE):whitespace(t)?(this._emitIfToken("attribname"),this._state=AFTER_ATTRIBUTE_NAME):("/"===t||">"===t)&&(this._emitIfToken("attribname"),this._state=BEFORE_ATTRIBUTE_NAME,this._index--):this._state===AFTER_ATTRIBUTE_NAME?"="===t?this._state=BEFORE_ATTRIBUTE_VALUE:"/"===t||">"===t?(this._state=BEFORE_ATTRIBUTE_NAME,this._index--):whitespace(t)||(this._state=IN_ATTRIBUTE_NAME,this._sectionStart=this._index):this._state===BEFORE_ATTRIBUTE_VALUE?'"'===t?(this._state=IN_ATTRIBUTE_VALUE_DOUBLE_QUOTES,this._sectionStart=this._index+1):"'"===t?(this._state=IN_ATTRIBUTE_VALUE_SINGLE_QUOTES,this._sectionStart=this._index+1):whitespace(t)||(this._state=IN_ATTRIBUTE_VALUE_NO_QUOTES,this._sectionStart=this._index):this._state===IN_ATTRIBUTE_VALUE_DOUBLE_QUOTES?'"'===t&&(this._emitToken("attribvalue"),this._state=BEFORE_ATTRIBUTE_NAME):this._state===IN_ATTRIBUTE_VALUE_SINGLE_QUOTES?"'"===t&&(this._emitToken("attribvalue"),this._state=BEFORE_ATTRIBUTE_NAME):this._state===IN_ATTRIBUTE_VALUE_NO_QUOTES?">"===t?(this._emitToken("attribvalue"),this._state=TEXT,this._cbs.onopentagend(),this._sectionStart=this._index+1):whitespace(t)&&(this._emitToken("attribvalue"),this._state=BEFORE_ATTRIBUTE_NAME):this._state===BEFORE_DECLARATION?this._state="["===t?BEFORE_CDATA_1:"-"===t?BEFORE_COMMENT:IN_DECLARATION:this._state===IN_DECLARATION?">"===t&&(this._emitToken("declaration"),this._state=TEXT,this._sectionStart=this._index+1):this._state===IN_PROCESSING_INSTRUCTION?">"===t&&(this._emitToken("processinginstruction"),this._state=TEXT,this._sectionStart=this._index+1):this._state===BEFORE_COMMENT?"-"===t?(this._state=IN_COMMENT,this._sectionStart=this._index+1):this._state=IN_DECLARATION:this._state===IN_COMMENT?"-"===t&&(this._state=AFTER_COMMENT_1):this._state===AFTER_COMMENT_1?this._state="-"===t?AFTER_COMMENT_2:IN_COMMENT:this._state===AFTER_COMMENT_2?">"===t?(this._cbs.oncomment(this._buffer.substring(this._sectionStart,this._index-2)),this._state=TEXT,this._sectionStart=this._index+1):this._state=IN_COMMENT:this._state===BEFORE_CDATA_1?this._state="C"===t?BEFORE_CDATA_2:IN_DECLARATION:this._state===BEFORE_CDATA_2?this._state="D"===t?BEFORE_CDATA_3:IN_DECLARATION:this._state===BEFORE_CDATA_3?this._state="A"===t?BEFORE_CDATA_4:IN_DECLARATION:this._state===BEFORE_CDATA_4?this._state="T"===t?BEFORE_CDATA_5:IN_DECLARATION:this._state===BEFORE_CDATA_5?this._state="A"===t?BEFORE_CDATA_6:IN_DECLARATION:this._state===BEFORE_CDATA_6?"["===t?(this._state=IN_CDATA,this._sectionStart=this._index+1):this._state=IN_DECLARATION:this._state===IN_CDATA?"]"===t&&(this._state=AFTER_CDATA_1):this._state===AFTER_CDATA_1?this._state="]"===t?AFTER_CDATA_2:IN_CDATA:this._state===AFTER_CDATA_2?">"===t?(this._cbs.oncdata(this._buffer.substring(this._sectionStart,this._index-2)),this._state=TEXT,this._sectionStart=this._index+1):this._state=IN_CDATA:this._state===BEFORE_SPECIAL?"c"===t||"C"===t?this._state=BEFORE_SCRIPT_1:"t"===t||"T"===t?this._state=BEFORE_STYLE_1:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_SPECIAL_END?this._state=1!==this._special||"c"!==t&&"C"!==t?2!==this._special||"t"!==t&&"T"!==t?TEXT:AFTER_STYLE_1:AFTER_SCRIPT_1:this._state===BEFORE_SCRIPT_1?"r"===t||"R"===t?this._state=BEFORE_SCRIPT_2:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_SCRIPT_2?"i"===t||"I"===t?this._state=BEFORE_SCRIPT_3:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_SCRIPT_3?"p"===t||"P"===t?this._state=BEFORE_SCRIPT_4:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_SCRIPT_4?"t"===t||"T"===t?this._state=BEFORE_SCRIPT_5:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_SCRIPT_5?(("/"===t||">"===t||whitespace(t))&&(this._special=1),this._state=IN_TAG_NAME,this._index--):this._state===AFTER_SCRIPT_1?this._state="r"===t||"R"===t?AFTER_SCRIPT_2:TEXT:this._state===AFTER_SCRIPT_2?this._state="i"===t||"I"===t?AFTER_SCRIPT_3:TEXT:this._state===AFTER_SCRIPT_3?this._state="p"===t||"P"===t?AFTER_SCRIPT_4:TEXT:this._state===AFTER_SCRIPT_4?this._state="t"===t||"T"===t?AFTER_SCRIPT_5:TEXT:this._state===AFTER_SCRIPT_5?">"===t||whitespace(t)?(this._state=IN_CLOSING_TAG_NAME,this._sectionStart=this._index-6,this._index--):this._state=TEXT:this._state===BEFORE_STYLE_1?"y"===t||"Y"===t?this._state=BEFORE_STYLE_2:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_STYLE_2?"l"===t||"L"===t?this._state=BEFORE_STYLE_3:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_STYLE_3?"e"===t||"E"===t?this._state=BEFORE_STYLE_4:(this._state=IN_TAG_NAME,this._index--):this._state===BEFORE_STYLE_4?(("/"===t||">"===t||whitespace(t))&&(this._special=2),this._state=IN_TAG_NAME,this._index--):this._state===AFTER_STYLE_1?this._state="y"===t||"Y"===t?AFTER_STYLE_2:TEXT:this._state===AFTER_STYLE_2?this._state="l"===t||"L"===t?AFTER_STYLE_3:TEXT:this._state===AFTER_STYLE_3?this._state="e"===t||"E"===t?AFTER_STYLE_4:TEXT:this._state===AFTER_STYLE_4?">"===t||whitespace(t)?(this._state=IN_CLOSING_TAG_NAME,this._sectionStart=this._index-5,this._index--):this._state=TEXT:this._cbs.onerror(Error("unknown state"),this._state),this._index++}-1===this._sectionStart?(this._buffer="",this._index=0):(this._state===TEXT?(this._emitIfToken("text"),this._buffer="",this._index=0):this._sectionStart===this._index?(this._buffer="",this._index=0):this._sectionStart>0&&(this._buffer=this._buffer.substr(this._sectionStart),this._index-=this._sectionStart),this._sectionStart=0)},Tokenizer.prototype.pause=function(){this._running=!1},Tokenizer.prototype.resume=function(){this._running=!0},Tokenizer.prototype.end=function(e){e&&this.write(e),""===this._buffer||-1===this._sectionStart||this._sectionStart===this._index||(this._state===IN_CDATA||this._state===AFTER_CDATA_1||this._state===AFTER_CDATA_2?this._emitIfToken("cdata"):this._state===IN_COMMENT||this._state===AFTER_COMMENT_1||this._state===AFTER_COMMENT_2?this._emitIfToken("comment"):this._state===IN_TAG_NAME?this._emitIfToken("opentagname"):this._state===IN_CLOSING_TAG_NAME?this._emitIfToken("closetag"):this._emitIfToken("text")),this._cbs.onend()},Tokenizer.prototype.reset=function(){Tokenizer.call(this,this._options,this._cbs)},Tokenizer.prototype._emitToken=function(e){this._cbs["on"+e](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1},Tokenizer.prototype._emitIfToken=function(e){this._index>this._sectionStart&&this._cbs["on"+e](this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=-1};