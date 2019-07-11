import * as React from "react";


export default class Iframe extends React.Component<any, any> {
    private myRef: any;
    private iframeRef: any;
    constructor(props : any) {
        super(props);
        this.state = {
        	link: this.props.link,
            Iwidth: this.props.Iwidth,
            Iheight: this.props.Iheight,
            id: this.props.id,
            zoomlevel: 1,
            name: this.props.name,
            classes : this.props.Iwidth <= this.props.Iheight ? "IframeWrapper" : "IframeWrapper widewrapper",
            removeBlock : this.props.removeBlock
        };
        this.myRef = React.createRef();
        this.styles = this.styles.bind(this);
        this.removeFn = this.removeFn.bind(this);
    }
    styles() {
        const zoomlevel = this.state.zoomlevel;
        const style =  ".iframe" + this.props.id +" {width: " + this.props.Iwidth + "px; height: " + this.props.Iheight + "px; border: 0; -ms-transform: scale("+zoomlevel+"); -moz-transform: scale("+zoomlevel+"); -o-transform: scale("+zoomlevel+"); -webkit-transform: scale("+zoomlevel+"); transform: scale("+zoomlevel+"); -ms-transform-origin: 0 0; -moz-transform-origin: 0 0; -o-transform-origin: 0 0; -webkit-transform-origin: 0 0; transform-origin: 0 0;}";
        return style;
    }
    removeFn() {
        this.state.removeBlock(this.state.id);
    }
    componentDidMount () {
        const zoom = (this.myRef.current.offsetWidth - 30) / this.state.Iwidth;
        this.setState({
          zoomlevel: zoom > 1 ? 1 : zoom
        });
    }
    public render() {

        console.log('iframe state link',this.state.link);
        console.log('iframe props link',this.props.link);
        return (
            <div id={this.props.id} className={this.state.classes} ref={this.myRef} style={{height : (this.props.Iheight * this.state.zoomlevel) + 60}}>
                <div className="framedetails">
                    <h3>{this.props.name}</h3>
                    <p><span>{this.props.Iwidth}</span> X <span>{this.props.Iheight}</span></p>
                    <button onClick={this.removeFn} className="closebutton">+</button>
                </div>
                <style>{this.styles()}</style>
                <iframe className={"iframe" + this.props.id} title={"iframe" + this.props.id} src={this.props.link}></iframe>
            </div>
        );
    }
}

