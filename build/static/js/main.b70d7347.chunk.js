(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(9),s=n.n(i),l=(n(16),n(7)),r=n(2),o=n(3),h=n(5),c=n(4),m=n(1),d=n(6),p=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(h.a)(this,Object(c.a)(t).call(this,e))).myRef=void 0,n.iframeRef=void 0,n.state={link:n.props.link,Iwidth:n.props.Iwidth,Iheight:n.props.Iheight,id:n.props.id,zoomlevel:1,name:n.props.name,classes:n.props.Iwidth<=n.props.Iheight?"IframeWrapper":"IframeWrapper widewrapper",removeBlock:n.props.removeBlock},n.myRef=a.createRef(),n.styles=n.styles.bind(Object(m.a)(n)),n.removeFn=n.removeFn.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"styles",value:function(){var e=this.state.zoomlevel;return".iframe"+this.props.id+" {width: "+this.props.Iwidth+"px; height: "+this.props.Iheight+"px; border: 0; -ms-transform: scale("+e+"); -moz-transform: scale("+e+"); -o-transform: scale("+e+"); -webkit-transform: scale("+e+"); transform: scale("+e+"); -ms-transform-origin: 0 0; -moz-transform-origin: 0 0; -o-transform-origin: 0 0; -webkit-transform-origin: 0 0; transform-origin: 0 0;}"}},{key:"removeFn",value:function(){this.state.removeBlock(this.state.id)}},{key:"componentDidMount",value:function(){var e=(this.myRef.current.offsetWidth-30)/this.state.Iwidth;this.setState({zoomlevel:e>1?1:e})}},{key:"render",value:function(){return console.log("iframe state link",this.state.link),console.log("iframe props link",this.props.link),a.createElement("div",{id:this.props.id,className:this.state.classes,ref:this.myRef,style:{height:this.props.Iheight*this.state.zoomlevel+60}},a.createElement("div",{className:"framedetails"},a.createElement("h3",null,this.props.name),a.createElement("p",null,a.createElement("span",null,this.props.Iwidth)," X ",a.createElement("span",null,this.props.Iheight)),a.createElement("button",{onClick:this.removeFn,className:"closebutton"},"+")),a.createElement("style",null,this.styles()),a.createElement("iframe",{className:"iframe"+this.props.id,title:"iframe"+this.props.id,src:this.props.link}))}}]),t}(a.Component),u=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(h.a)(this,Object(c.a)(t).call(this,e))).state={Iframes:n.props.Iframes,link:n.props.link,removeBlock:n.props.removeBlock},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return console.log("inframesCont state link",this.state.link),console.log("inframesCont props link",this.props.link),a.createElement(a.Fragment,null,a.createElement("div",{className:"grid-4 iframecont"},this.props.Iframes.map(function(t,n){return a.createElement(p,{removeBlock:e.state.removeBlock,key:n,id:n,link:e.props.link,Iwidth:parseInt(t.width),name:t.name,Iheight:parseInt(t.height)})})))}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(h.a)(this,Object(c.a)(t).call(this,e))).state={width:"",height:"",name:"",addBlock:n.props.addBlock,changeLink:n.props.changeLink,link:"https://"},n.handleWidthChange=n.handleWidthChange.bind(Object(m.a)(n)),n.handleHeightChange=n.handleHeightChange.bind(Object(m.a)(n)),n.handleNameChange=n.handleNameChange.bind(Object(m.a)(n)),n.handleAdd=n.handleAdd.bind(Object(m.a)(n)),n.handleLinkChange=n.handleLinkChange.bind(Object(m.a)(n)),n.handleLinkInputChange=n.handleLinkInputChange.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleWidthChange",value:function(e){var t=e.target,n=t.value;t.name;this.setState({width:n})}},{key:"handleHeightChange",value:function(e){var t=e.target,n=t.value;t.name;this.setState({height:n})}},{key:"handleNameChange",value:function(e){var t=e.target,n=t.value;t.name;this.setState({name:n})}},{key:"handleAdd",value:function(e){this.state.addBlock(this.state.width,this.state.height,this.state.name)}},{key:"handleLinkInputChange",value:function(e){var t=e.target,n=t.value;t.name;this.setState({link:n})}},{key:"handleLinkChange",value:function(e){this.state.changeLink(this.state.link)}},{key:"render",value:function(){return a.createElement("div",{className:"controlBlock"},a.createElement("div",{className:"AddInputs"},a.createElement("label",null,"Add View"),a.createElement("div",{className:"inputBlock"},a.createElement("input",{type:"text",placeholder:"Name",value:this.state.name,onChange:this.handleNameChange})),a.createElement("div",{className:"inputBlock"},a.createElement("input",{type:"number",placeholder:"Width",value:this.state.width,onChange:this.handleWidthChange})),a.createElement("div",{className:"inputBlock"},a.createElement("input",{type:"number",placeholder:"Height",value:this.state.height,onChange:this.handleHeightChange})),a.createElement("button",{onClick:this.handleAdd},"Add")),a.createElement("div",{className:"linkInputs"},a.createElement("div",{className:"inputBlock"},a.createElement("label",null,"Link"),a.createElement("input",{type:"text",value:this.state.link,onChange:this.handleLinkInputChange})),a.createElement("button",{onClick:this.handleLinkChange},"Set")))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(h.a)(this,Object(c.a)(t).call(this,e))).state={link:"",Iframes:[{name:"Laptop",width:"1440",height:"900"},{name:"Tablet",width:"768",height:"1024"},{name:"Mobile",width:"375",height:"667"}]},n.handleAdd=n.handleAdd.bind(Object(m.a)(n)),n.handleLink=n.handleLink.bind(Object(m.a)(n)),n.removeBlock=n.removeBlock.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleAdd",value:function(e,t,n){var a={name:n,width:e,height:t};this.setState(function(e){return{Iframes:[].concat(Object(l.a)(e.Iframes),[a])}})}},{key:"handleLink",value:function(e){console.log(e),this.setState({link:e})}},{key:"removeBlock",value:function(e){console.log("blockNr",e),this.setState(function(t){return{Iframes:[].concat(Object(l.a)(t.Iframes.slice(0,e)),Object(l.a)(t.Iframes.slice(e+1)))}}),console.log(this.state)}},{key:"render",value:function(){return console.log("rendering",this.state.Iframes),a.createElement("div",{className:"container"},a.createElement(k,{addBlock:this.handleAdd,changeLink:this.handleLink}),a.createElement(u,{removeBlock:this.removeBlock,link:this.state.link,Iframes:this.state.Iframes}))}}]),t}(a.Component),g=(n(17),function(){return a.createElement("div",{className:"App"},a.createElement(f,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.b70d7347.chunk.js.map