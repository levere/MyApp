montageDefine("6a22cd0","core/serialization/serializer/properties-serializer",{dependencies:["../../core"],factory:function(e,t){var n=e("../../core").Montage,r=n.specialize.call(Object,{_malker:{value:null},_visitor:{value:null},_object:{value:null},constructor:{value:function r(){}},initWithMalkerAndVisitorAndObject:{value:function(e,t,n){return this._malker=e,this._visitor=t,this._object=n,this}},addObject:{value:function(e){return"object"==typeof e?(this._malker.visit(e),e):void 0}},addObjectReference:{value:function(e){var t=this._visitor.builder,n=this._visitor.labeler,r=n.getObjectLabel(e),a=Object.create(i);return a.reference=t.createReference(r),a}},set:{value:function(e,t,n){this._visitor.setProperty(this._malker,e,t,n)}},setAll:{value:function(){this._visitor.setSerializableObjectProperties(this._malker,this._object)}}}),i={thisIsAReferenceCreatedByMontageSerializer:!0,reference:null};t.PropertiesSerializer=r}});