montageDefine("88139a9","ui/popup/alert.reel/alert.html",{text:'<!DOCTYPE html><html><head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=alert.css>\n    <script type=text/montage-serialization>{"dynamictext1":{"prototype":"montage/ui/text.reel","properties":{"element":{"#":"title"}},"bindings":{"value":{"<-":"@owner.title"}}},"dynamictext2":{"prototype":"montage/ui/text.reel","properties":{"element":{"#":"msg"}},"bindings":{"value":{"<-":"@owner.msg"}}},"dynamictext3":{"prototype":"montage/ui/text.reel","properties":{"element":{"#":"msg-detail"}},"bindings":{"value":{"<-":"@owner.details"}}},"button1":{"prototype":"ui/button.reel","properties":{"identifier":"Ok","element":{"#":"action-ok"}},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"owner":{"prototype":"ui/popup/alert.reel","properties":{"element":{"#":"alert-container"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=alert-container class=matte-Alert-dialog>\n        <div class=matte-Popup-header>\n            <h3 data-montage-id=title class=title></h3>\n        </div>\n        <div class=matte-Alert-content>\n                <div data-montage-id=msg class=msg></div>\n                <div data-montage-id=msg-detail class=msg-detail></div>\n        </div>\n        <div class=matte-Popup-footer>\n            <div class=matte-Alert-actions>\n                <button class=submit data-montage-id=action-ok>OK</button>\n            </div>\n            <div class=clearfix></div>\n        </div>\n    </div>\n\n\n</body></html>'});