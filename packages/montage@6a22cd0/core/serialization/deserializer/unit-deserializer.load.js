montageDefine("6a22cd0","core/serialization/deserializer/unit-deserializer",{dependencies:["../../core","../../promise"],factory:function(e,t){var n=e("../../core").Montage;e("../../promise").Promise;var r=n.specialize({_context:{value:null},create:{value:function(){return new this}},initWithContext:{value:function(e){return this._context=e,this}},_templatePropertyRegExp:{value:/^([^:]+)(:.*)$/},isValidTemplatePropertyReference:{value:function(e){var t=this._templatePropertyRegExp.exec(e);if(t){var n=t[1];return this._context.hasObject(n)?!0:!1}return!1}},getObjectByLabel:{value:function(e){if(this._context.hasObject(e))return this._context.getObject(e);if(this.isValidTemplatePropertyReference(e))return null;throw Error("Object with label '"+e+"' was not found.")}}});t.UnitDeserializer=r}});