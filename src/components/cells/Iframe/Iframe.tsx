import * as React from "react";
import Modal from 'react-modal';
Modal.setAppElement('#root')

export default class Iframe extends React.Component<any, any> {
    private myRef: any;
    private modalRef: any;
    private iframeRef: any;
    private iframeBlock: any;
    private setiframeBlockRef: any;
    constructor(props : any) {
        super(props);
        this.state = {
            link: this.props.link,
            Iwidth: this.props.Iwidth,
            Iheight: this.props.Iheight,
            Pwidth: this.props.Pwidth,
            Pheight: this.props.Pheight,
            pixratio: this.props.pixratio,
            id: this.props.id,
            zoomlevel: 1,
            name: this.props.name,
            gridsize :  1,
            removeBlock : this.props.removeBlock,
            modalzoomlevel: 1,
            flipPropsFn: this.props.flipPropsFn
        };
        this.myRef = React.createRef();
        this.iframeBlock = null;
        this.styles = this.styles.bind(this);
        this.removeFn = this.removeFn.bind(this);
        this.modalRef = React.createRef();
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.increaseFn = this.increaseFn.bind(this);
        this.decreaseFn = this.decreaseFn.bind(this);
        this.setzoom = this.setzoom.bind(this);
        this.flipFn = this.flipFn.bind(this);
        this.setiframeBlockRef = (element: any) => {
            this.iframeBlock = element;
        };
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
    increaseFn() {
        let classes = "";
        switch (this.state.gridsize) {
            case 0:
                classes="IframeWrapper";
                break;
            case 1: 
                classes="IframeWrapper doublewrapper";
                break;
            case 2: 
                classes="IframeWrapper triplewrapper";
                break;
            case 3: 
                classes="IframeWrapper fullwrapper";
                break;
            default: 
                classes="IframeWrapper";
        }
        if (this.iframeBlock) {
            this.iframeBlock.className = classes; 
        }
        this.setState((prevState: any) => ({
            gridsize: prevState.gridsize + 1
        }));

    }
    decreaseFn() {
        let classes = "";
        switch (this.state.gridsize) {
            case 2:
                classes="IframeWrapper";
                break;
            case 3: 
                classes="IframeWrapper doublewrapper";
                break;
            case 4: 
                classes="IframeWrapper triplewrapper";
                break;
            default: 
                classes="IframeWrapper";
        }
        if (this.iframeBlock) {
            this.iframeBlock.className = classes; 
        }
        this.setState((prevState: any) => ({
            gridsize: prevState.gridsize -1
        }));
    }
    flipFn() {
        this.state.flipPropsFn(this.props.id);
        this.setState((prevState: any) => ({
            Iwidth: prevState.Iwidth,
            Iheight: prevState.Iheight,
        }));
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }
     
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
        const modalzoom = (this.modalRef.current.offsetWidth) / this.state.Iwidth;
        this.setState({
          modalzoomlevel: modalzoom > 1 ? 1 : modalzoom
        });
    }
     
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    setzoom (size:any) {
        const zoom = (size - 30) / this.state.Iwidth;
        this.setState({
          zoomlevel: zoom > 1 ? 1 : zoom
        });
    }
    componentDidMount () {
        const zoom = (this.iframeBlock.offsetWidth - 30) / this.state.Iwidth;
        this.setState({
          zoomlevel: zoom > 1 ? 1 : zoom
        });
    }
    public render() {
        let classes = "";
        switch (this.state.gridsize) {
            case 1:
                classes="IframeWrapper";
                break;
            case 2: 
                classes="IframeWrapper doublewrapper";
                break;
            case 3: 
                classes="IframeWrapper triplewrapper";
                break;
            case 4: 
                classes="IframeWrapper fullwrapper";
                break;
            default: 
                classes="IframeWrapper";
        }
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

