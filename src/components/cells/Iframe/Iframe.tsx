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
        const initzoomlevel = this.iframeBlock ? (this.iframeBlock.offsetWidth - 40) / this.props.Iwidth : 1;
        const zoomlevel = initzoomlevel <=1 ? initzoomlevel : 1;
        if (this.iframeBlock) {
            this.iframeBlock.style.height = ((this.props.Iheight * zoomlevel) + 65) + "px";
        }
        const style =  ".iframe" + this.props.id +" {width: " + this.props.Iwidth + "px; height: " + this.props.Iheight + "px; border: 0; -ms-transform: scale("+zoomlevel+"); -moz-transform: scale("+zoomlevel+"); -o-transform: scale("+zoomlevel+"); -webkit-transform: scale("+zoomlevel+"); transform: scale("+zoomlevel+"); -ms-transform-origin: 0 0; -moz-transform-origin: 0 0; -o-transform-origin: 0 0; -webkit-transform-origin: 0 0; transform-origin: 0 0;} .zl" + this.props.id +"::after {display:inline;content:'"+Math.floor(zoomlevel*1000)/10+"%';}";
        return style;
    }
    modalStyles() {
        const modalzoomlevel = this.state.modalzoomlevel;
        const style =  ".modaliframe {width: " + this.props.Iwidth + "px; height: " + this.props.Iheight + "px; border: 0; -ms-transform: scale("+modalzoomlevel+"); -moz-transform: scale("+modalzoomlevel+"); -o-transform: scale("+modalzoomlevel+"); -webkit-transform: scale("+modalzoomlevel+"); transform: scale("+modalzoomlevel+"); -ms-transform-origin: 0 0; -moz-transform-origin: 0 0; -o-transform-origin: 0 0; -webkit-transform-origin: 0 0; transform-origin: 0 0;}";
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
            <>
                <div id={"foo"+this.state.id} className={classes} ref={this.setiframeBlockRef} >
                    <div className="framedetails">
                        <h3>{this.props.name}</h3><small className="size"><span> {this.props.Pwidth}</span> X <span>{this.props.Pheight} </span><span>/ {this.props.pixratio} </span></small>
                        
                        <button onClick={this.removeFn} className="closebutton">+</button>
                        <button onClick={this.openModal} className="expandbutton"></button>
                        <button onClick={this.increaseFn} className="zoombutton increasezoom">+</button>
                        <button onClick={this.decreaseFn} className="zoombutton decreasezoom">-</button>
                        <button onClick={this.flipFn} className="zoombutton flip"></button>
                    </div>
                    <style scoped>{this.styles()}</style>
                    <small className={"zoomleveldisplay zl" + this.props.id}>Size:</small>
                    <iframe className={"iframe" + this.props.id} title={"iframe" + this.props.id} src={this.props.link} id={this.props.id}></iframe>
                    {/*<webview id={this.props.id + "wv"} src={this.props.link} ></webview>*/}
                </div>
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  contentLabel="Example Modal"
                >
                    <button onClick={this.closeModal} className="closebutton">+</button>
                    <div className="modalIframeContainer"ref={this.modalRef}>
                        <style>{this.modalStyles()}</style>
                        <iframe className="modaliframe" title={"iframe" + this.props.id} src={this.props.link} onLoad={() => {console.log('loading')}} onError={() => {console.log('fuck')}}></iframe>
                    </div>
                </Modal>
            </>
        );
    }
}

